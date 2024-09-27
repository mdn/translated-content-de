---
title: Verwendung der MediaStream Recording API
slug: Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{DefaultAPISidebar("MediaStream Recording")}}

Die [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) erleichtert die Aufnahme von Audio- und/oder Videostreams. In Verbindung mit [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) bietet sie eine einfache Möglichkeit, Aufnahmequellen des Benutzers zu nutzen und die Ergebnisse sofort in Webanwendungen zu verwenden.

Sowohl Audio als auch Video können separat oder zusammen aufgenommen werden. Dieser Artikel zielt darauf ab, einen grundlegenden Leitfaden zur Verwendung der MediaRecorder-Schnittstelle bereitzustellen, die diese API bietet.

## Ein Beispielanwendung: Web-Diktiergerät

![Ein Bild der Web-Diktiergerät-Beispiel-App - eine Sinuswellen-Soundvisualisierung, dann Aufnahmetaste und Stopptaste, dann ein Audio-Jukebox mit aufgenommenen Tracks, die abgespielt werden können.](web-dictaphone.png)

Um die grundlegende Verwendung der MediaStream Recording API zu demonstrieren, haben wir ein webbasiertes Diktiergerät erstellt. Es ermöglicht Ihnen, Audioclips aufzunehmen und sie dann abzuspielen. Es bietet sogar eine Visualisierung des Soundeingangs Ihres Geräts mithilfe der Web Audio API. Wir konzentrieren uns in diesem Artikel auf die Aufnahme- und Wiedergabefunktionalität.

Sie können dieses [Demo live sehen](https://mdn.github.io/dom-examples/media/web-dictaphone/) oder [den Quellcode abrufen](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone) auf GitHub.

## CSS-Leckereien

Das HTML ist in dieser App ziemlich einfach, daher werden wir es hier nicht durchgehen; es gibt jedoch ein paar etwas interessantere Teile von CSS, die es wert sind, erwähnt zu werden, daher besprechen wir sie unten. Wenn Sie nicht an CSS interessiert sind und direkt zu JavaScript gelangen möchten, springen Sie zum Abschnitt [Grundlegende App-Einrichtung](#grundlegende_app-einrichtung).

### Begrenzung der Benutzeroberfläche auf das Ansichtsfenster unabhängig von der Gerätehöhe mit calc()

Die {{cssxref("calc", "calc()")}}-Funktion ist eines dieser nützlichen kleinen Dienstprogramme, die in CSS aufgetaucht sind und zunächst nicht viel herzumachen schienen, aber bald dazu führen, dass man denkt: "Wow, warum hatten wir das nicht schon vorher? Warum war das Layout in CSS2 so umständlich?" Sie ermöglicht es Ihnen, eine Berechnung vorzunehmen, um den berechneten Wert einer CSS-Einheit zu bestimmen und dabei verschiedene Einheiten zu mischen.

Zum Beispiel haben wir im Web-Diktiergerät drei Hauptbereiche der Benutzeroberfläche, die vertikal gestapelt sind. Wir wollten den ersten beiden (der Kopfzeile und den Steuerelementen) feste Höhen geben:

```css
header {
  height: 70px;
}

.main-controls {
  padding-bottom: 0.7rem;
  height: 170px;
}
```

Wir wollten jedoch, dass der dritte Bereich (der die aufgenommenen Samples enthält, die Sie abspielen können) den verbleibenden Platz einnimmt, unabhängig von der Gerätehöhe. Flexbox könnte hier die Lösung sein, aber es ist ein bisschen übertrieben für ein so einfaches Layout. Stattdessen wurde das Problem gelöst, indem die Höhe des dritten Containers auf 100% der Höhe des übergeordneten Elements abzüglich der Höhen und des Abstands der anderen zwei eingestellt wurde:

```css
.sound-clips {
  box-shadow: inset 0 3px 4px rgb(0 0 0 / 70%);
  background-color: rgb(0 0 0 / 10%);
  height: calc(100% - 240px - 0.7rem);
  overflow: scroll;
}
```

### Checkbox-Hack zum Anzeigen/Verbergen

Dies ist bereits ziemlich gut dokumentiert, aber wir dachten, wir geben dem Checkbox-Hack eine Erwähnung, der den Umstand ausnutzt, dass Sie auf das {{htmlelement("label")}} einer Checkbox klicken können, um sie ein- oder auszuschalten. Im Web-Diktiergerät betreibt dies den Informationsbildschirm, der durch Klicken auf das Fragezeichen-Symbol in der oberen rechten Ecke angezeigt/versteckt wird. Zuerst gestalten wir das `<label>` so, wie wir es möchten, und stellen sicher, dass es genug z-index hat, um immer über den anderen Elementen zu sitzen und daher fokussierbar/klickbar zu sein:

```css
label {
  font-family: "NotoColorEmoji";
  font-size: 3rem;
  position: absolute;
  top: 2px;
  right: 3px;
  z-index: 5;
  cursor: pointer;
}
```

Dann verstecken wir die eigentliche Checkbox, weil wir nicht wollen, dass sie unsere Benutzeroberfläche übersättigt:

```css
input[type="checkbox"] {
  position: absolute;
  top: -100px;
}
```

Als Nächstes gestalten wir den Informationsbildschirm (eingebettet in ein {{htmlelement("aside")}}-Element) so, wie wir es möchten, geben ihm eine feste Position, damit er nicht im Layoutfluss erscheint und die Hauptbenutzeroberfläche beeinflusst, versetzen ihn in die Position, in der er standardmäßig sitzen soll, und geben ihm einen Übergang für ein sanftes Anzeigen/Verbergen:

```css
aside {
  position: fixed;
  top: 0;
  left: 0;
  text-shadow: 1px 1px 1px black;
  width: 100%;
  height: 100%;
  transform: translateX(100%);
  transition: 0.6s all;
  background-color: #999;
  background-image: linear-gradient(
    to top right,
    rgb(0 0 0 / 0%),
    rgb(0 0 0 / 50%)
  );
}
```

Zuletzt schreiben wir eine Regel, die besagt, dass wenn die Checkbox aktiviert ist (wenn wir auf das Label klicken/fokussieren), das angrenzende `<aside>`-Element seinen Horizontal-Übersetzungswert ändert und sanft in den Blick kommt:

```css
input[type="checkbox"]:checked ~ aside {
  transform: translateX(0);
}
```

## Grundlegende App-Einrichtung

Um den Medienstream zu erfassen, den wir aufnehmen möchten, verwenden wir `getUserMedia()`. Wir benutzen dann die MediaStream Recording API, um den Stream aufzuzeichnen und jedes aufgezeichnete Fragment in die Quelle eines generierten {{htmlelement("audio")}}-Elements auszugeben, damit es wiedergegeben werden kann.

Wir deklarieren einige Variablen für die Aufnahme- und Stopptasten und den {{htmlelement("article")}}, der die generierten Audioplayer enthalten wird:

```js
const record = document.querySelector(".record");
const stop = document.querySelector(".stop");
const soundClips = document.querySelector(".sound-clips");
```

Zuletzt in diesem Abschnitt richten wir die grundlegende `getUserMedia`-Struktur ein:

```js
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  console.log("getUserMedia supported.");
  navigator.mediaDevices
    .getUserMedia(
      // constraints - only audio needed for this app
      {
        audio: true,
      },
    )

    // Success callback
    .then((stream) => {})

    // Error callback
    .catch((err) => {
      console.error(`The following getUserMedia error occurred: ${err}`);
    });
} else {
  console.log("getUserMedia not supported on your browser!");
}
```

Das Ganze ist in einen Test gewickelt, der überprüft, ob `getUserMedia` unterstützt wird, bevor irgendetwas anderes ausgeführt wird. Als Nächstes rufen wir `getUserMedia()` auf und definieren darin:

- **Die Einschränkungen**: Nur Audio soll für unser Diktiergerät erfasst werden.
- **Den Erfolgs-Callback**: Dieser Code wird ausgeführt, sobald der `getUserMedia`-Aufruf erfolgreich abgeschlossen wurde.
- **Den Error/Failure-Callback**: Der Code wird ausgeführt, wenn der `getUserMedia`-Aufruf aus irgendeinem Grund fehlschlägt.

> [!NOTE]
> Sämtlicher Code unten wird in den `getUserMedia` Erfolgs-Callback platziert.

## Erfassen des Medienstreams

Sobald `getUserMedia` erfolgreich einen Medienstream erstellt hat, erstellen Sie eine neue Media Recorder-Instanz mit dem `MediaRecorder()`-Konstruktor und übergeben ihm direkt den Stream. Dies ist Ihr Einstiegspunkt in die Nutzung der MediaStream Recording API — der Stream kann jetzt in einen [`Blob`](/de/docs/Web/API/Blob) im Standardkodierungsformat Ihres Browsers aufgenommen werden.

```js
const mediaRecorder = new MediaRecorder(stream);
```

In der [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Schnittstelle steht eine Reihe von Methoden zur Verfügung, die es Ihnen ermöglichen, die Aufnahme des Medienstreams zu steuern; im Web-Diktiergerät verwenden wir nur zwei davon und lauschen einigen Ereignissen. Zuerst wird [`MediaRecorder.start()`](/de/docs/Web/API/MediaRecorder/start) verwendet, um die Aufnahme des Streams zu starten, sobald die Aufnahmetaste gedrückt wird:

```js
record.onclick = () => {
  mediaRecorder.start();
  console.log(mediaRecorder.state);
  console.log("recorder started");
  record.style.background = "red";
  record.style.color = "black";
};
```

Wenn der `MediaRecorder` aufzeichnet, gibt die [`MediaRecorder.state`](/de/docs/Web/API/MediaRecorder/state)-Eigenschaft den Wert "recording" zurück.

Während die Aufnahme fortschreitet, müssen wir die Audiodaten sammeln. Wir registrieren einen Ereignishandler dafür mit [`ondataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event):

```js
let chunks = [];

mediaRecorder.ondataavailable = (e) => {
  chunks.push(e.data);
};
```

> [!NOTE]
> Der Browser wird `dataavailable`-Ereignisse nach Bedarf auslösen, aber wenn Sie eingreifen möchten, können Sie auch einen Zeitabschnitt beim Aufrufen der `start()`-Methode angeben — zum Beispiel `start(10000)` — um dieses Intervall zu steuern, oder [`MediaRecorder.requestData()`](/de/docs/Web/API/MediaRecorder/requestData) aufrufen, um ein Ereignis auszulösen, wenn Sie es benötigen.

Schließlich verwenden wir die [`MediaRecorder.stop()`](/de/docs/Web/API/MediaRecorder/stop)-Methode, um die Aufnahme zu beenden, wenn die Stopptaste gedrückt wird, und den [`Blob`](/de/docs/Web/API/Blob) für die Verwendung an anderer Stelle in unserer Anwendung bereitzustellen.

```js
stop.onclick = () => {
  mediaRecorder.stop();
  console.log(mediaRecorder.state);
  console.log("recorder stopped");
  record.style.background = "";
  record.style.color = "";
};
```

Beachten Sie, dass die Aufnahme auch von selbst stoppen kann, wenn der Medienstream endet (z. B. wenn Sie einen Song-Track erfassten und der Track endete, oder der Benutzer seine Mikrofonfreigabe stoppte).

## Erfassen und Verwenden des Blob

Wenn die Aufnahme gestoppt wurde, gibt die `state`-Eigenschaft den Wert "inactive" zurück und ein Stop-Ereignis wird ausgelöst. Wir registrieren einen Ereignishandler dafür mit [`onstop`](/de/docs/Web/API/MediaRecorder/stop_event) und stellen dort unseren Blob aus allen empfangenen Teilen fertig:

```js
mediaRecorder.onstop = (e) => {
  console.log("recorder stopped");

  const clipName = prompt("Enter a name for your sound clip");

  const clipContainer = document.createElement("article");
  const clipLabel = document.createElement("p");
  const audio = document.createElement("audio");
  const deleteButton = document.createElement("button");

  clipContainer.classList.add("clip");
  audio.setAttribute("controls", "");
  deleteButton.textContent = "Delete";
  clipLabel.textContent = clipName;

  clipContainer.appendChild(audio);
  clipContainer.appendChild(clipLabel);
  clipContainer.appendChild(deleteButton);
  soundClips.appendChild(clipContainer);

  const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
  chunks = [];
  const audioURL = window.URL.createObjectURL(blob);
  audio.src = audioURL;

  deleteButton.onclick = (e) => {
    let evtTgt = e.target;
    evtTgt.parentNode.parentNode.removeChild(evtTgt.parentNode);
  };
};
```

Lassen Sie uns den obigen Code durchgehen und sehen, was passiert.

Zuerst zeigen wir dem Benutzer eine Aufforderung an, ihren Clip zu benennen.

Danach erstellen wir eine HTML-Struktur wie die folgende, die wir in unseren Clip-Container, welcher ein {{htmlelement("article")}}-Element ist, einfügen.

```html
<article class="clip">
  <audio controls></audio>
  <p>your clip name</p>
  <button>Delete</button>
</article>
```

Anschließend erstellen wir einen kombinierten [`Blob`](/de/docs/Web/API/Blob) aus den aufgezeichneten Audiostücken und erstellen eine Objekt-URL, die darauf verweist, mit `window.URL.createObjectURL(blob)`. Dann setzen wir den Wert des [`src`](/de/docs/Web/HTML/Element/audio#src)-Attributes des {{HTMLElement("audio")}}-Elements auf die Objekt-URL, sodass beim Klicken auf die Wiedergabetaste im Audioplayer der `Blob` abgespielt wird.

Abschließend setzen wir einen `onclick`-Handler auf den Löschen-Button, der eine Funktion ist, die die gesamte Clip-HTML-Struktur löscht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) Einführungsseite
- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
