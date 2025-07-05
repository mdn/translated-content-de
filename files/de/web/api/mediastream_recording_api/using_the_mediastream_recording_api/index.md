---
title: Verwendung der MediaStream Recording API
slug: Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API
l10n:
  sourceCommit: 478517351c5aa97f8b878228da3b3a9b0fb90371
---

{{DefaultAPISidebar("MediaStream Recording")}}

Die [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) erleichtert das Aufzeichnen von Audio- und/oder Videoströmen. In Verbindung mit [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) bietet sie eine einfache Möglichkeit, von den Eingabegeräten des Benutzers aufzuzeichnen und das Ergebnis sofort in Webanwendungen zu verwenden.

Es können sowohl Audio als auch Video, separat oder zusammen, aufgezeichnet werden. Dieser Artikel zielt darauf ab, einen grundlegenden Leitfaden zur Verwendung der MediaRecorder-Schnittstelle zu bieten, die diese API bereitstellt.

## Eine Beispielanwendung: Web-Diktiergerät

![Ein Bild der Web-Diktiergerät-Beispiel-App - eine Sinuswellen-Soundvisualisierung, dann Aufnahme- und Stopp-Buttons, gefolgt von einem Audio-Jukebox der aufgezeichneten Tracks, die abgespielt werden können.](web-dictaphone.png)

Um die grundlegende Nutzung der MediaStream Recording API zu demonstrieren, haben wir ein webbasiertes Diktiergerät entwickelt. Es ermöglicht Ihnen, Audio-Schnipsel aufzunehmen und sie anschließend abzuspielen. Es bietet Ihnen sogar eine Visualisierung des Toneingangs Ihres Geräts, unter Verwendung der Web Audio API. In diesem Artikel konzentrieren wir uns auf die Aufnahme- und Wiedergabefunktionalität.

Sie können diese [Demo live ansehen](https://mdn.github.io/dom-examples/media/web-dictaphone/) oder [den Quellcode auf GitHub abrufen](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).

## CSS-Schnickschnack

Das HTML in dieser App ist ziemlich einfach, daher werden wir es hier nicht behandeln; es gibt allerdings ein paar etwas interessantere CSS-Stellen, die es wert sind, erwähnt zu werden, weshalb wir sie unten besprechen werden. Wenn Sie sich nicht für CSS interessieren und direkt zum JavaScript gehen möchten, überspringen Sie den Abschnitt [Grundlegende App-Einrichtung](#grundlegende_app-einrichtung).

### Die Schnittstelle mit calc() auf die gesamte Bildschirmhöhe beschränken

Die Funktion {{cssxref("calc", "calc()")}} ist eines jener nützlichen kleinen Dienstprogramme, die in CSS aufgetaucht sind, die anfänglich nicht vielversprechend aussehen, aber bald anfangen, Sie denken zu lassen: "Wow, warum hatten wir das nicht vorher? Warum war das CSS2-Layout so umständlich?" Sie ermöglicht es, eine Berechnung durchzuführen, um den berechneten Wert einer CSS-Einheit zu bestimmen und dabei verschiedene Einheiten zu mischen.

Im Web-Diktiergerät beispielsweise haben wir drei Haupt-Benutzeroberflächenbereiche, die vertikal gestapelt sind. Wir wollten den ersten beiden (dem Header und den Steuerungen) feste Höhen zuweisen:

```css
header {
  height: 70px;
}

.main-controls {
  padding-bottom: 0.7rem;
  height: 170px;
}
```

Allerdings wollten wir, dass der dritte Bereich (der die aufgezeichneten Proben enthält, die Sie abspielen können) unabhängig von der Gerätehöhe den verbleibenden Raum einnimmt. Flexbox könnte hier die Antwort sein, aber es wäre etwas übertrieben für ein so einfaches Layout. Stattdessen wurde das Problem gelöst, indem die Höhe des dritten Containers auf 100% der Elternhöhe festgelegt wurde, abzüglich der Höhen und der Abstände der anderen beiden:

```css
.sound-clips {
  box-shadow: inset 0 3px 4px rgb(0 0 0 / 70%);
  background-color: rgb(0 0 0 / 10%);
  height: calc(100% - 240px - 0.7rem);
  overflow: scroll;
}
```

### Checkbox-Hack zum Anzeigen/Verbergen

Dies ist bereits recht gut dokumentiert, aber wir wollten dem Checkbox-Hack eine Erwähnung geben, der den Umstand ausnutzt, dass Sie auf das {{htmlelement("label")}} einer Checkbox klicken können, um sie an- oder abzuwählen. Im Web-Diktiergerät wird so der Informationsbildschirm gesteuert, der durch Klicken auf das Fragezeichen-Symbol in der oberen rechten Ecke angezeigt oder verborgen wird. Zunächst stylen wir das `<label>` so, wie wir es haben möchten, und stellen sicher, dass es einen ausreichenden z-Index hat, um stets über den anderen Elementen zu sitzen und daher fokussierbar/klickbar zu sein:

```css
label {
  font-family: "Noto Color Emoji", emoji;
  font-size: 3rem;
  position: absolute;
  top: 2px;
  right: 3px;
  z-index: 5;
  cursor: pointer;
}
```

Dann verstecken wir die eigentliche Checkbox, da wir nicht möchten, dass sie unsere Benutzeroberfläche überlädt:

```css
input[type="checkbox"] {
  position: absolute;
  top: -100px;
}
```

Als nächstes stylen wir den Informationsbildschirm (eingebettet in ein {{htmlelement("aside")}}-Element) so, wie wir es möchten, geben ihm eine feste Position, damit er nicht im Layoutfluss erscheint und die Hauptbenutzeroberfläche beeinträchtigt, transformieren ihn in die Position, in der er standardmäßig sitzen soll, und geben ihm eine Transition für ein sanftes Ein- und Ausblenden:

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

Zuletzt schreiben wir eine Regel, die besagt, dass, wenn die Checkbox aktiviert ist (wenn wir das Label klicken/fokussieren), das angrenzende `<aside>`-Element seinen horizontalen Translationswert geändert bekommt und sanft in die Ansicht übergeht:

```css
input[type="checkbox"]:checked ~ aside {
  transform: translateX(0);
}
```

## Grundlegende App-Einrichtung

Um den Medienstream zu erfassen, den wir aufnehmen möchten, verwenden wir `getUserMedia()`. Wir verwenden dann die MediaStream Recording API, um den Stream aufzuzeichnen, und geben jedes aufgezeichnete Segment in die Quelle eines generierten {{htmlelement("audio")}}-Elements aus, damit es wiedergegeben werden kann.

Wir deklarieren einige Variablen für die Aufnahme- und Stopp-Buttons und den {{htmlelement("article")}}, der die generierten Audioplayer enthalten wird:

```js
const record = document.querySelector(".record");
const stop = document.querySelector(".stop");
const soundClips = document.querySelector(".sound-clips");
```

Zum Schluss für diesen Abschnitt richten wir die grundlegende Struktur für `getUserMedia` ein:

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

Das Ganze ist in einen Test eingebettet, der überprüft, ob `getUserMedia` unterstützt wird, bevor irgendetwas anderes ausgeführt wird. Danach rufen wir `getUserMedia()` auf und definieren darin:

- **Die Einschränkungen**: Nur Audio soll für unser Diktiergerät aufgezeichnet werden.
- **Den Erfolg-Callback**: Dieser Code wird ausgeführt, sobald der `getUserMedia`-Aufruf erfolgreich abgeschlossen wurde.
- **Den Fehler-/Fehler-Callback**: Der Code wird ausgeführt, wenn der `getUserMedia`-Aufruf aus irgendeinem Grund fehlschlägt.

> [!NOTE]
> Der gesamte untenstehende Code befindet sich im Erfolgs-Callback von `getUserMedia`.

## Erfassen des Medienstreams

Sobald `getUserMedia` erfolgreich einen Medienstream erstellt hat, erstellen Sie eine neue Media Recorder-Instanz mit dem `MediaRecorder()`-Konstruktor und übergeben ihm direkt den Stream. Dies ist Ihr Zugangspunkt zur Verwendung der MediaStream Recording API – der Stream kann nun in einem [`Blob`](/de/docs/Web/API/Blob) im Standardkodierungsformat Ihres Browsers aufgezeichnet werden.

```js
const mediaRecorder = new MediaRecorder(stream);
```

Es gibt eine Reihe von Methoden in der [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Schnittstelle, die Ihnen erlauben, die Aufnahme des Medienstreams zu steuern. Im Web-Diktiergerät verwenden wir nur zwei und hören einige Events ab. Zunächst wird [`MediaRecorder.start()`](/de/docs/Web/API/MediaRecorder/start) verwendet, um den Stream zu starten, sobald die Aufnahmetaste gedrückt wird:

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

Da die Aufnahme fortschreitet, müssen wir die Audiodaten sammeln. Wir registrieren einen Ereignishandler dafür, indem wir [`ondataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event) verwenden:

```js
let chunks = [];

mediaRecorder.ondataavailable = (e) => {
  chunks.push(e.data);
};
```

> [!NOTE]
> Der Browser löst `dataavailable`-Ereignisse nach Bedarf aus, aber wenn Sie eingreifen möchten, können Sie beim Aufrufen der `start()`-Methode auch ein Zeitintervall angeben — zum Beispiel `start(10000)` — um dieses Intervall zu steuern, oder `[`MediaRecorder.requestData()`](/de/docs/Web/API/MediaRecorder/requestData)` aufrufen, um ein Ereignis auszulösen, wenn Sie es benötigen.

Zuletzt verwenden wir die Methode [`MediaRecorder.stop()`](/de/docs/Web/API/MediaRecorder/stop), um die Aufnahme zu beenden, wenn die Stopp-Taste gedrückt wird, und den [`Blob`](/de/docs/Web/API/Blob) für die Verwendung an einer anderen Stelle in unserer Anwendung fertigzustellen.

```js
stop.onclick = () => {
  mediaRecorder.stop();
  console.log(mediaRecorder.state);
  console.log("recorder stopped");
  record.style.background = "";
  record.style.color = "";
};
```

Beachten Sie, dass die Aufnahme auch automatisch beendet werden kann, wenn der Medienstream endet (z.B. wenn Sie einen Songtrack aufnehmen würden und der Track endet, oder der Benutzer das Teilen seines Mikrofons beendet).

## Erfassen und Verwenden des Blobs

Wenn die Aufnahme gestoppt wurde, gibt die `state`-Eigenschaft den Wert "inactive" zurück, und ein Stop-Ereignis wird ausgelöst. Wir registrieren einen Ereignishandler dafür, indem wir [`onstop`](/de/docs/Web/API/MediaRecorder/stop_event) verwenden, und vervollständigen dort unser Blob aus allen empfangenen Teilen:

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

Zuerst zeigen wir eine Eingabeaufforderung an, die den Benutzer auffordert, seinen Clip zu benennen.

Dann erstellen wir eine HTML-Struktur wie die folgende und fügen sie in unseren Clip-Container ein, der ein {{htmlelement("article")}}-Element ist.

```html
<article class="clip">
  <audio controls></audio>
  <p>your clip name</p>
  <button>Delete</button>
</article>
```

Danach erstellen wir einen kombinierten [`Blob`](/de/docs/Web/API/Blob) aus den aufgezeichneten Audiodaten-Teilen und erstellen eine Objekt-URL, die darauf verweist, indem wir `window.URL.createObjectURL(blob)` verwenden. Wir setzen dann den Wert des [`src`](/de/docs/Web/HTML/Reference/Elements/audio#src)-Attributs des {{HTMLElement("audio")}}-Elements auf die Objekt-URL, sodass beim Drücken der Wiedergabetaste des Audioplayers der `Blob` abgespielt wird.

Zuletzt setzen wir einen `onclick`-Handler auf den Löschen-Button, der eine Funktion ist, die die gesamte Clip-HTML-Struktur löscht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) Startseite
- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
