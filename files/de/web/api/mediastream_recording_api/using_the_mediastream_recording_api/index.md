---
title: Verwendung der MediaStream Recording API
slug: Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{DefaultAPISidebar("MediaStream Recording")}}

Die [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) macht es einfach, Audio- und/oder Videostreams aufzuzeichnen. In Kombination mit [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) bietet sie eine einfache Methode, um von den Eingabegeräten des Benutzers aufzuzeichnen und das Ergebnis sofort in Webanwendungen zu verwenden.

Sowohl Audio als auch Video können separat oder zusammen aufgezeichnet werden. Dieser Artikel soll einen grundlegenden Leitfaden bieten, wie Sie das MediaRecorder-Interface nutzen, das diese API bereitstellt.

## Eine Beispielanwendung: Web Diktiergerät

![Ein Bild der Web Diktiergerät-Beispiel-App - eine Sinuskurven-Soundvisualisierung, dann Aufnahme- und Stop-Tasten, dann eine Audio-Jukebox der aufgezeichneten Tracks, die abgespielt werden können.](web-dictaphone.png)

Um die grundlegende Verwendung der MediaStream Recording API zu demonstrieren, haben wir ein web-basiertes Diktiergerät entwickelt. Es ermöglicht Ihnen, Audio-Schnipsel aufzunehmen und diese dann wiederzugeben. Es bietet sogar eine Visualisierung des Toneingangs Ihres Geräts unter Verwendung der Web Audio API. Wir konzentrieren uns in diesem Artikel auf die Aufnahme- und Wiedergabefunktionen.

Sie können sich [diese Demo live ansehen](https://mdn.github.io/dom-examples/media/web-dictaphone/) oder [den Quellcode auf GitHub abrufen](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).

## CSS Leckereien

Das HTML ist in dieser App ziemlich einfach, daher werden wir es hier nicht durchgehen; es gibt jedoch einige etwas interessantere CSS-Bereiche, die es wert sind, erwähnt zu werden. Wenn Sie nicht an CSS interessiert sind und direkt zum JavaScript springen möchten, überspringen Sie den Abschnitt [Grundlegende App-Einrichtung](#grundlegende_app-einrichtung).

### Die Schnittstelle auf die Ansicht beschränkt halten, unabhängig von der Gerätehöhe, mit calc()

Die {{cssxref("calc", "calc()")}}-Funktion ist eines dieser nützlichen kleinen Utility-Features, das in CSS aufgetaucht ist und auf den ersten Blick nicht viel aussieht, aber bald beginnt man zu denken „Wow, warum hatten wir das nicht vorher? Warum war das CSS2-Layout so unhandlich?“ Es ermöglicht Ihnen, eine Berechnung durchzuführen, um den berechneten Wert einer CSS-Einheit zu bestimmen, indem Sie verschiedene Einheiten im Prozess mischen.

Zum Beispiel haben wir im Web Diktiergerät drei Hauptbereiche der Benutzeroberfläche, die vertikal gestapelt sind. Wir wollten den ersten beiden (dem Header und den Steuerungen) feste Höhen geben:

```css
header {
  height: 70px;
}

.main-controls {
  padding-bottom: 0.7rem;
  height: 170px;
}
```

Allerdings wollten wir, dass der dritte Bereich (der die aufgenommenen Proben enthält, die Sie abspielen können) den verfügbaren Platz ausfüllt, unabhängig von der Gerätehöhe. Flexbox könnte hier die Antwort sein, aber es ist etwas übertrieben für ein so einfaches Layout. Stattdessen wurde das Problem dadurch gelöst, dass die Höhe des dritten Containers auf 100 % der Höhe des übergeordneten Elements abzüglich der Höhen und Abstände der anderen beiden gesetzt wurde:

```css
.sound-clips {
  box-shadow: inset 0 3px 4px rgb(0 0 0 / 70%);
  background-color: rgb(0 0 0 / 10%);
  height: calc(100% - 240px - 0.7rem);
  overflow: scroll;
}
```

### Checkbox-Trick zum Anzeigen/Verbergen

Dies ist bereits recht gut dokumentiert, aber wir dachten, wir sollten dem Checkbox-Trick einen Hinweis geben, der den Umstand ausnutzt, dass Sie auf das {{htmlelement("label")}} einer Checkbox klicken können, um sie ein- oder auszuschalten. Im Web Diktiergerät wird damit der Informationsbildschirm gesteuert, der durch Klicken auf das Fragezeichen-Symbol in der oberen rechten Ecke angezeigt oder verborgen wird. Zuerst stylen wir das `<label>` nach unseren Wünschen und stellen sicher, dass es genügend z-index hat, um immer über den anderen Elementen zu sitzen und somit fokussierbar/klickbar zu sein:

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

Dann verstecken wir die eigentliche Checkbox, da wir sie nicht in unserer Benutzeroberfläche haben wollen:

```css
input[type="checkbox"] {
  position: absolute;
  top: -100px;
}
```

Als Nächstes stylen wir den Informationsbildschirm (umhüllt von einem {{htmlelement("aside")}}-Element) wie gewünscht, geben ihm eine feste Position, damit er nicht im Layoutfluss erscheint und das Haupt-UI beeinflusst, verschieben ihn an die Position, an der wir ihn standardmäßig haben wollen, und geben ihm eine Transition für ein sanftes Ein-/Ausblenden:

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

Zuletzt schreiben wir eine Regel, die besagt, dass, wenn die Checkbox aktiviert ist (wenn wir auf das Label klicken/fokussieren), das angrenzende `<aside>`-Element seinen horizontalen Übersetzungswert ändert und sanft in Sicht kommt:

```css
input[type="checkbox"]:checked ~ aside {
  transform: translateX(0);
}
```

## Grundlegende App-Einrichtung

Um den Medienstream zu erfassen, den wir aufzeichnen möchten, verwenden wir `getUserMedia()`. Danach verwenden wir die MediaStream Recording API, um den Stream aufzuzeichnen, und geben jedes aufgezeichnete Fragment in die Quelle eines generierten {{htmlelement("audio")}}-Elements aus, damit es abgespielt werden kann.

Wir werden einige Variablen für die Aufnahme- und Stop-Tasten sowie das {{htmlelement("article")}}, das die generierten Audioplayer enthalten wird, deklarieren:

```js
const record = document.querySelector(".record");
const stop = document.querySelector(".stop");
const soundClips = document.querySelector(".sound-clips");
```

Schließlich richten wir in diesem Abschnitt die grundlegende `getUserMedia`-Struktur ein:

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

Das Ganze ist in einen Test eingebunden, der überprüft, ob `getUserMedia` unterstützt wird, bevor etwas anderes ausgeführt wird. Dann rufen wir `getUserMedia()` auf und definieren darin:

- **Die Einschränkungen:** Es soll nur Audio für unser Diktiergerät erfasst werden.
- **Den Erfolgs-Callback:** Dieser Code wird ausgeführt, sobald der `getUserMedia`-Aufruf erfolgreich abgeschlossen wurde.
- **Den Fehler-/Fehler-Callback:** Dieser Code wird ausgeführt, falls der `getUserMedia`-Aufruf aus irgendeinem Grund fehlschlägt.

> [!NOTE]
> Der gesamte untenstehende Code wird innerhalb des `getUserMedia`-Erfolgs-Callbacks platziert.

## Erfassen des Medienstreams

Sobald `getUserMedia` erfolgreich einen Medienstream erstellt hat, erstellen Sie eine neue Media Recorder-Instanz mit dem `MediaRecorder()`-Konstruktor und übergeben ihm direkt den Stream. Dies ist Ihr Einstiegspunkt in die Verwendung der MediaStream Recording API – der Stream ist jetzt bereit, in ein [`Blob`](/de/docs/Web/API/Blob) im Standard-Codierungsformat Ihres Browsers erfasst zu werden.

```js
const mediaRecorder = new MediaRecorder(stream);
```

Es gibt eine Reihe von Methoden im [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Interface, die es Ihnen ermöglichen, die Aufnahme des Medienstreams zu steuern; im Web Diktiergerät verwenden wir nur zwei und hören auf einige Ereignisse. Zuerst wird [`MediaRecorder.start()`](/de/docs/Web/API/MediaRecorder/start) verwendet, um die Aufnahme des Streams zu starten, sobald die Aufnahmetaste gedrückt wird:

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

Während die Aufnahme fortschreitet, müssen wir die Audiodaten sammeln. Wir registrieren einen Ereignis-Handler, um dies mit [`ondataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event) zu tun:

```js
let chunks = [];

mediaRecorder.ondataavailable = (e) => {
  chunks.push(e.data);
};
```

> [!NOTE]
> Der Browser löst `dataavailable`-Ereignisse nach Bedarf aus, aber wenn Sie eingreifen möchten, können Sie beim Aufrufen der `start()`-Methode auch eine Zeitspanne angeben – zum Beispiel `start(10000)` –, um dieses Intervall zu steuern, oder [`MediaRecorder.requestData()`](/de/docs/Web/API/MediaRecorder/requestData) aufrufen, um bei Bedarf ein Ereignis auszulösen.

Zuletzt verwenden wir die Methode [`MediaRecorder.stop()`](/de/docs/Web/API/MediaRecorder/stop), um die Aufnahme zu stoppen, wenn die Stopp-Taste gedrückt wird, und das [`Blob`](/de/docs/Web/API/Blob) für die Verwendung an anderer Stelle in unserer Anwendung fertigzustellen.

```js
stop.onclick = () => {
  mediaRecorder.stop();
  console.log(mediaRecorder.state);
  console.log("recorder stopped");
  record.style.background = "";
  record.style.color = "";
};
```

Beachten Sie, dass die Aufnahme auch natürlich enden kann, wenn der Medienstream endet (z. B. wenn Sie einen Song-Track erfasst haben und der Track endet, oder der Benutzer das Teilen seines Mikrofons beendet).

## Erfassen und Verwenden des Blobs

Wenn die Aufnahme gestoppt wurde, gibt die `state`-Eigenschaft den Wert "inactive" zurück, und ein Stop-Ereignis wird ausgelöst. Wir registrieren einen Ereignis-Handler dafür mit [`onstop`](/de/docs/Web/API/MediaRecorder/stop_event) und finalisieren unser Blob dort aus allen empfangenen Fragmenten:

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

Erstens zeigen wir eine Eingabeaufforderung an, die den Benutzer fragt, wie sein Clip benannt werden soll.

Als Nächstes erstellen wir eine HTML-Struktur wie die folgende und fügen sie in unseren Clip-Container ein, der ein {{htmlelement("article")}}-Element ist.

```html
<article class="clip">
  <audio controls></audio>
  <p>your clip name</p>
  <button>Delete</button>
</article>
```

Danach erstellen wir ein kombiniertes [`Blob`](/de/docs/Web/API/Blob) aus den aufgezeichneten Audio-Chunks und erstellen eine Objekt-URL, die darauf zeigt, mit `window.URL.createObjectURL(blob)`. Dann setzen wir den Wert des `src`-Attributs des {{HTMLElement("audio")}}-Elements auf die Objekt-URL, damit beim Drücken der Wiedergabetaste auf dem Audioplayer das `Blob` abgespielt wird.

Schließlich setzen wir einen `onclick`-Handler auf die Löschtaste, damit die gesamte Clip-HTML-Struktur gelöscht wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) Startseite
- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
