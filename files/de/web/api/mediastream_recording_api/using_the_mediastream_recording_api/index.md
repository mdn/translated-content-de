---
title: Verwendung der MediaStream Recording API
slug: Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{DefaultAPISidebar("MediaStream Recording")}}

Die [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) ermöglicht es Ihnen, Audio- und/oder Videostreams einfach aufzuzeichnen. In Verbindung mit [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) bietet sie eine einfache Möglichkeit, von den Eingabegeräten des Benutzers aufzunehmen und das Ergebnis sofort in Webanwendungen zu verwenden.

Sowohl Audio als auch Video können separat oder zusammen aufgezeichnet werden. Dieser Artikel soll eine grundlegende Anleitung zur Verwendung der MediaRecorder-Oberfläche bieten, welche diese API bereitstellt.

## Eine Beispielanwendung: Web-Diktiergerät

![Ein Bild der Web-Diktiergerät-Beispiel-App - eine Sinuswellen-Soundvisualisierung, dann Aufnahme- und Stopp-Tasten, gefolgt von einem Audio-Jukebox mit aufgenommenen Titeln, die abgespielt werden können.](web-dictaphone.png)

Um die grundlegende Verwendung der MediaStream Recording API zu demonstrieren, haben wir ein webbasiertes Diktiergerät erstellt. Es ermöglicht Ihnen, Audioclips aufzunehmen und diese dann abzuspielen. Es bietet sogar eine Visualisierung Ihrer Geräteeingabe, indem es die Web Audio API nutzt. In diesem Artikel konzentrieren wir uns auf die Aufnahme- und Wiedergabefunktionalität.

Sie können sich diese [Demo live ansehen](https://mdn.github.io/dom-examples/media/web-dictaphone/) oder [den Quellcode auf GitHub holen](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).

## CSS Leckerbissen

Das HTML dieser App ist ziemlich einfach, also werden wir es hier nicht durchgehen; es gibt jedoch ein paar interessante CSS-Schnipsel, die erwähnenswert sind, daher besprechen wir sie im Folgenden. Wenn Sie sich nicht für CSS interessieren und direkt zu JavaScript übergehen möchten, springen Sie zum Abschnitt [Grundlegende App-Einrichtung](#grundlegende_app-einrichtung).

### Die Benutzeroberfläche unabhängig von der Gerätehöhe mit calc() eingeschränkt halten

Die {{cssxref("calc", "calc()")}}-Funktion ist eines dieser nützlichen kleinen Dienstprogramme, die in CSS aufgetaucht sind und die zunächst nicht viel hermachen, aber bald lassen sie einen denken: "Wow, warum hatten wir das nicht schon früher? Warum war das Layout in CSS2 so umständlich?" Sie ermöglicht es, eine Berechnung durchzuführen, um den berechneten Wert einer CSS-Einheit zu ermitteln, wobei verschiedene Einheiten gemischt werden können.

Zum Beispiel haben wir im Web-Diktiergerät drei Hauptelemente der Benutzeroberfläche, die vertikal gestapelt sind. Wir wollten den ersten beiden (dem Kopfteil und den Bedienelementen) feste Höhen geben:

```css
header {
  height: 70px;
}

.main-controls {
  padding-bottom: 0.7rem;
  height: 170px;
}
```

Wir wollten jedoch, dass der dritte Bereich (der die aufgezeichneten Proben enthält, die Sie abspielen können) den restlichen Platz einnimmt, unabhängig von der Gerätehöhe. Flexbox könnte hier die Antwort sein, aber es ist ein wenig überdimensioniert für ein so einfaches Layout. Stattdessen wurde das Problem gelöst, indem die Höhe des dritten Containers auf 100 % der Höhe des übergeordneten Containers minus der Höhen und Abstände der anderen beiden gesetzt wurde:

```css
.sound-clips {
  box-shadow: inset 0 3px 4px rgb(0 0 0 / 70%);
  background-color: rgb(0 0 0 / 10%);
  height: calc(100% - 240px - 0.7rem);
  overflow: scroll;
}
```

### Checkbox-Trick für Anzeigen/Verbergen

Dies ist bereits gut dokumentiert, aber wir dachten, wir erwähnen den Checkbox-Trick, der ausnutzt, dass Sie auf das {{htmlelement("label")}} einer Checkbox klicken können, um es an- oder abzuwählen. Im Web-Diktiergerät steuert dies den Info-Bildschirm, der durch Klicken auf das Fragezeichen-Symbol in der oberen rechten Ecke angezeigt oder versteckt wird. Zuerst stylen wir das `<label>`, wie wir es möchten, und achten darauf, dass es genug Z-Index hat, um immer über den anderen Elementen zu liegen und daher fokussierbar/klickbar zu sein:

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

Dann verstecken wir die eigentliche Checkbox, weil wir nicht wollen, dass sie unsere Benutzeroberfläche überfrachtet:

```css
input[type="checkbox"] {
  position: absolute;
  top: -100px;
}
```

Als nächstes stylen wir den Info-Bildschirm (eingebettet in ein {{htmlelement("aside")}}-Element), geben ihm eine feste Position, damit er nicht im Layoutfluss erscheint und die Hauptbenutzeroberfläche beeinflusst, transformieren ihn in die gewünschte Standardposition und geben ihm einen Übergang für ein sanftes Ein-/Ausblenden:

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

Zuletzt schreiben wir eine Regel, die besagt, dass wenn die Checkbox aktiviert ist (wenn wir auf das Label klicken/fokussieren), das angrenzende `<aside>`-Element seinen horizontalen Übersetzungswert ändert und sanft in die Ansicht übergeht:

```css
input[type="checkbox"]:checked ~ aside {
  transform: translateX(0);
}
```

## Grundlegende App-Einrichtung

Um den Medienstream zu erfassen, den wir aufnehmen möchten, verwenden wir `getUserMedia()`. Dann verwenden wir die MediaStream Recording API, um den Stream aufzuzeichnen und jedes aufgenommene Stück in die Quelle eines generierten {{htmlelement("audio")}}-Elements auszugeben, sodass es wiedergegeben werden kann.

Wir deklarieren einige Variablen für die Aufnehmen- und Stopp-Tasten und für das {{htmlelement("article")}}, das die generierten Audioplayer enthalten wird:

```js
const record = document.querySelector(".record");
const stop = document.querySelector(".stop");
const soundClips = document.querySelector(".sound-clips");
```

Schließlich richten wir für diesen Abschnitt die grundlegende Struktur von `getUserMedia` ein:

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

Das Ganze ist in einen Test eingebettet, der überprüft, ob `getUserMedia` unterstützt wird, bevor irgendetwas anderes ausgeführt wird. Als Nächstes rufen wir `getUserMedia()` auf und definieren darin:

- **Die Einschränkungen**: Nur Audio soll für unser Diktiergerät erfasst werden.
- **Den Erfolgs-Callback**: Dieser Code wird ausgeführt, sobald der `getUserMedia`-Aufruf erfolgreich abgeschlossen wurde.
- **Den Fehler/Fehlschlag-Callback**: Dieser Code wird ausgeführt, wenn der `getUserMedia`-Aufruf aus irgendeinem Grund fehlschlägt.

> [!NOTE]
> Der gesamte untenstehende Code wird innerhalb des Erfolgs-Callbacks von `getUserMedia` platziert.

## Erfassung des Medienstreams

Sobald `getUserMedia` erfolgreich einen Medienstream erstellt hat, erstellen Sie eine neue Media Recorder-Instanz mit dem `MediaRecorder()`-Konstruktor und übergeben ihm direkt den Stream. Dies ist Ihr Einstiegspunkt in die Verwendung der MediaStream Recording API – der Stream ist nun bereit, in ein [`Blob`](/de/docs/Web/API/Blob) im Standardkodierungsformat Ihres Browsers erfasst zu werden.

```js
const mediaRecorder = new MediaRecorder(stream);
```

Es gibt eine Reihe von Methoden in der [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Schnittstelle, die Ihnen ermöglichen, die Aufnahme des Medienstreams zu steuern; im Web-Diktiergerät verwenden wir nur zwei davon und lauschen einigen Ereignissen. Zuerst wird [`MediaRecorder.start()`](/de/docs/Web/API/MediaRecorder/start) verwendet, um die Aufnahme des Streams zu starten, sobald die Aufnahmetaste gedrückt wird:

```js
record.onclick = () => {
  mediaRecorder.start();
  console.log(mediaRecorder.state);
  console.log("recorder started");
  record.style.background = "red";
  record.style.color = "black";
};
```

Wenn der `MediaRecorder` aufnimmt, gibt die [`MediaRecorder.state`](/de/docs/Web/API/MediaRecorder/state)-Eigenschaft den Wert "recording" zurück.

Während die Aufnahme fortschreitet, müssen wir die Audiodaten sammeln. Wir registrieren einen Ereignishandler, um dies mit [`ondataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event) zu tun:

```js
let chunks = [];

mediaRecorder.ondataavailable = (e) => {
  chunks.push(e.data);
};
```

> [!NOTE]
> Der Browser löst bei Bedarf `dataavailable`-Ereignisse aus, aber wenn Sie eingreifen möchten, können Sie auch ein Zeitintervall beim Aufruf der `start()`-Methode angeben - zum Beispiel `start(10000)` - um dieses Intervall zu steuern, oder [`MediaRecorder.requestData()`](/de/docs/Web/API/MediaRecorder/requestData) aufrufen, um ein Ereignis auszulösen, wenn Sie es benötigen.

Zuletzt verwenden wir die [`MediaRecorder.stop()`](/de/docs/Web/API/MediaRecorder/stop)-Methode, um die Aufnahme zu stoppen, wenn die Stopp-Taste gedrückt wird, und das [`Blob`](/de/docs/Web/API/Blob) für die weitere Verwendung in unserer Anwendung bereitzustellen.

```js
stop.onclick = () => {
  mediaRecorder.stop();
  console.log(mediaRecorder.state);
  console.log("recorder stopped");
  record.style.background = "";
  record.style.color = "";
};
```

Beachten Sie, dass die Aufnahme auch natürlich stoppen kann, wenn der Medienstream endet (z. B. wenn Sie einen Songtrack aufgenommen haben und der Track endet, oder der Benutzer das Teilen seines Mikrofons stoppt).

## Erfassen und Verwenden des Blobs

Wenn die Aufnahme gestoppt wurde, gibt die `state`-Eigenschaft den Wert "inactive" zurück, und ein Stopp-Ereignis wird ausgelöst. Wir registrieren einen Ereignishandler dafür mit [`onstop`](/de/docs/Web/API/MediaRecorder/stop_event) und stellen unser Blob dort aus allen empfangenen Teilen fertig:

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

Lassen Sie uns den obigen Code durchgehen und schauen, was passiert.

Zuerst zeigen wir eine Eingabeaufforderung an, die den Benutzer bittet, seinem Clip einen Namen zu geben.

Dann erstellen wir eine HTML-Struktur wie die folgende, die wir in unseren Clip-Container einfügen, das ein {{htmlelement("article")}}-Element ist.

```html
<article class="clip">
  <audio controls></audio>
  <p>your clip name</p>
  <button>Delete</button>
</article>
```

Danach erstellen wir ein kombiniertes [`Blob`](/de/docs/Web/API/Blob) aus den aufgezeichneten Audioabschnitten und erstellen eine Objekt-URL, die darauf verweist, indem wir `window.URL.createObjectURL(blob)` verwenden. Dann setzen wir den Wert des [`src`](/de/docs/Web/HTML/Element/audio#src)-Attributs des {{htmlelement("audio")}}-Elements auf die Objekt-URL, sodass, wenn der Wiedergabe-Button im Audioplayer gedrückt wird, das `Blob` abgespielt wird.

Schließlich setzen wir einen `onclick`-Handler auf die Löschtaste, der eine Funktion ist, die die gesamte Clip-HTML-Struktur löscht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) Startseite
- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
