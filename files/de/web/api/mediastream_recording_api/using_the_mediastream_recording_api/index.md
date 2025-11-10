---
title: Verwendung der MediaStream Recording API
slug: Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{DefaultAPISidebar("MediaStream Recording")}}

Die [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) erleichtert das Aufzeichnen von Audio- und/oder Videostreams. In Verbindung mit [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) bietet sie eine einfache Möglichkeit, von den Eingabegeräten des Benutzers aufzuzeichnen und das Ergebnis sofort in Webanwendungen zu verwenden.

Sowohl Audio als auch Video können separat oder zusammen aufgezeichnet werden. Dieser Artikel soll einen grundlegenden Leitfaden zur Verwendung des MediaRecorder-Interfaces bieten, das diese API bereitstellt.

## Eine Beispielanwendung: Web-Diktiergerät

![Ein Bild der Web-Diktiergerät-Beispiel-App - eine Sinuswellen-Soundvisualisierung, dann Aufnahme- und Stopp-Tasten, gefolgt von einem Audio-Jukebox der aufgenommenen Tracks, die wiedergegeben werden können.](web-dictaphone.png)

Um die grundlegende Verwendung der MediaStream Recording API zu demonstrieren, haben wir ein webbasiertes Diktiergerät erstellt. Es ermöglicht Ihnen, Audio-Schnipsel aufzunehmen und sie dann abzuspielen. Es bietet Ihnen sogar eine Visualisierung der Toneingabe Ihres Geräts mithilfe der Web Audio API. Wir konzentrieren uns in diesem Artikel auf die Aufnahme- und Wiedergabefunktionalität.

Sie können dieses [Demo live ansehen](https://mdn.github.io/dom-examples/media/web-dictaphone/) oder den [Quellcode auf GitHub abrufen](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).

## CSS-Leckerbissen

Das HTML ist in dieser App ziemlich einfach, daher werden wir es hier nicht durchgehen; es gibt jedoch ein paar etwas interessantere Teile von CSS, die erwähnenswert sind, weshalb wir sie unten diskutieren. Wenn Sie sich nicht für CSS interessieren und direkt zum JavaScript übergehen möchten, springen Sie zum Abschnitt [Grundlegende App-Einrichtung](#grundlegende_app-einrichtung).

### Die Schnittstelle unabhängig von der Gerätehöhe mit calc() an die Ansicht binden

Die {{cssxref("calc", "calc()")}}-Funktion ist eines dieser nützlichen kleinen Hilfsmittel, die in CSS aufgetaucht sind und die zunächst nicht viel zu sein scheinen, aber bald dazu führen, dass man denkt: "Wow, warum hatten wir das nicht schon vorher? Warum war CSS2-Layout so umständlich?" Es ermöglicht Ihnen, eine Berechnung vorzunehmen, um den berechneten Wert einer CSS-Einheit zu bestimmen, indem verschiedene Einheiten im Prozess gemischt werden.

Zum Beispiel haben wir im Web-Diktiergerät drei Hauptbereiche der Benutzeroberfläche, die vertikal gestapelt sind. Wir wollten den ersten beiden (dem Header und den Steuerelementen) feste Höhen geben:

```css
header {
  height: 70px;
}

.main-controls {
  padding-bottom: 0.7rem;
  height: 170px;
}
```

Wir wollten jedoch, dass der dritte Bereich (der die aufgenommenen Proben enthält, die Sie abspielen können) unabhängig von der Gerätehöhe den verbleibenden Platz einnimmt. Flexbox könnte hier die Antwort sein, aber es wäre ein bisschen übertrieben für ein so einfaches Layout. Stattdessen wurde das Problem gelöst, indem die Höhe des dritten Containers gleich 100% der Elternhöhe minus der Höhen und Abstände der anderen beiden gemacht wurde:

```css
.sound-clips {
  box-shadow: inset 0 3px 4px rgb(0 0 0 / 70%);
  background-color: rgb(0 0 0 / 10%);
  height: calc(100% - 240px - 0.7rem);
  overflow: scroll;
}
```

### Checkbox-Hack zum Anzeigen/Verstecken

Dies ist bereits ziemlich gut dokumentiert, aber wir wollten den Checkbox-Hack erwähnen, der die Tatsache ausnutzt, dass Sie auf das {{htmlelement("label")}} eines Kontrollkästchens klicken können, um es an- oder abzuschalten. Im Web-Diktiergerät wird dadurch der Informationsbildschirm gesteuert, der angezeigt/ausgeblendet wird, indem das Fragezeichen-Symbol in der oberen rechten Ecke angeklickt wird. Zuerst stylen wir das `<label>` so, wie wir es möchten, und achten darauf, dass es genug z-index hat, um immer über den anderen Elementen zu liegen und damit fokussierbar/klickbar zu sein:

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

Dann verstecken wir das eigentliche Kontrollkästchen, weil wir nicht möchten, dass es unsere Benutzeroberfläche überfrachtet:

```css
input[type="checkbox"] {
  position: absolute;
  top: -100px;
}
```

Als Nächstes stylen wir den Informationsbildschirm (eingebettet in ein {{htmlelement("aside")}}-Element) so, wie wir es möchten, geben ihm eine feste Position, damit er nicht im Layoutfluss erscheint und die Hauptoberfläche beeinflusst, transformieren ihn in die Standardposition, in der wir ihn haben möchten, und geben ihm einen Übergang für ein sanftes Anzeigen/Verstecken:

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
  background-color: #999999;
  background-image: linear-gradient(
    to top right,
    transparent,
    rgb(0 0 0 / 50%)
  );
}
```

Zuletzt schreiben wir eine Regel, die besagt, dass, wenn das Kontrollkästchen aktiviert ist (wenn wir auf das Label klicken/fokussieren), das angrenzende `<aside>`-Element seinen horizontalen Übersetzungswert ändert und sanft sichtbar wird:

```css
input[type="checkbox"]:checked ~ aside {
  transform: translateX(0);
}
```

## Grundlegende App-Einrichtung

Um den Medienstream zu erfassen, den wir aufnehmen möchten, verwenden wir `getUserMedia()`. Wir nutzen dann die MediaStream Recording API, um den Stream aufzuzeichnen und jeden aufgenommenen Schnipsel in die Quelle eines generierten {{htmlelement("audio")}}-Elements auszugeben, damit er wiedergegeben werden kann.

Wir deklarieren einige Variablen für die Aufzeichnungs- und Stopp-Tasten und das {{htmlelement("article")}}, das die generierten Audioplayer enthalten wird:

```js
const record = document.querySelector(".record");
const stop = document.querySelector(".stop");
const soundClips = document.querySelector(".sound-clips");
```

Schließlich richten wir für diesen Abschnitt die grundlegende `getUserMedia`-Struktur ein:

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

Das Ganze ist in einen Test eingebunden, der überprüft, ob `getUserMedia` unterstützt wird, bevor etwas anderes ausgeführt wird. Als Nächstes rufen wir `getUserMedia()` auf und definieren darin:

- **Die Einschränkungen**: Nur Audio soll für unser Diktiergerät erfasst werden.
- **Den Erfolgs-Callback**: Dieser Code wird ausgeführt, sobald der `getUserMedia`-Aufruf erfolgreich abgeschlossen wurde.
- **Den Fehler-/Fehler-Callback**: Der Code wird ausgeführt, wenn der `getUserMedia`-Aufruf aus irgendeinem Grund fehlschlägt.

> [!NOTE]
> Der gesamte untenstehende Code befindet sich im `getUserMedia`-Erfolgs-Callback.

## Erfassen des Medienstreams

Sobald `getUserMedia` erfolgreich einen Medienstream erstellt hat, erstellen Sie eine neue MediaRecorder-Instanz mit dem Konstruktor `MediaRecorder()` und übergeben den Stream direkt. Dies ist Ihr Einstiegspunkt in die Verwendung der MediaStream Recording-API – der Stream ist jetzt bereit, in einem [`Blob`](/de/docs/Web/API/Blob) im Standard-Codierungsformat Ihres Browsers erfasst zu werden.

```js
const mediaRecorder = new MediaRecorder(stream);
```

Es gibt eine Reihe von Methoden im [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Interface, die es Ihnen ermöglichen, die Aufzeichnung des Medienstreams zu steuern; im Web-Diktiergerät nutzen wir nur zwei und hören auf einige Ereignisse. Zuerst wird [`MediaRecorder.start()`](/de/docs/Web/API/MediaRecorder/start) verwendet, um die Aufzeichnung des Streams zu starten, sobald die Aufnahmetaste gedrückt wird:

```js
record.onclick = () => {
  mediaRecorder.start();
  console.log(mediaRecorder.state);
  console.log("recorder started");
  record.style.background = "red";
  record.style.color = "black";
};
```

Wenn der `MediaRecorder` aufzeichnet, gibt die Eigenschaft [`MediaRecorder.state`](/de/docs/Web/API/MediaRecorder/state) den Wert "recording" zurück.

Während der Aufzeichnung müssen wir die Audiodaten sammeln. Wir registrieren einen Ereignishandler, um dies mit [`ondataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event) zu tun:

```js
let chunks = [];

mediaRecorder.ondataavailable = (e) => {
  chunks.push(e.data);
};
```

> [!NOTE]
> Der Browser löst `dataavailable`-Ereignisse nach Bedarf aus, aber wenn Sie eingreifen möchten, können Sie auch einen Zeitschlitz beim Aufrufen der `start()`-Methode angeben — zum Beispiel `start(10000)` — um dieses Intervall zu kontrollieren, oder Sie verwenden [`MediaRecorder.requestData()`](/de/docs/Web/API/MediaRecorder/requestData), um ein Ereignis auszulösen, wenn Sie es benötigen.

Zuletzt verwenden wir die Methode [`MediaRecorder.stop()`](/de/docs/Web/API/MediaRecorder/stop), um die Aufzeichnung zu stoppen, wenn die Stopp-Taste gedrückt wird, und finalisieren den [`Blob`](/de/docs/Web/API/Blob), damit er an anderer Stelle in unserer Anwendung verwendet werden kann.

```js
stop.onclick = () => {
  mediaRecorder.stop();
  console.log(mediaRecorder.state);
  console.log("recorder stopped");
  record.style.background = "";
  record.style.color = "";
};
```

Beachten Sie, dass die Aufzeichnung auch natürlich beendet werden kann, wenn der Medienstream endet (z.B. wenn Sie einen Song-Track aufgenommen haben und der Track endet oder der Benutzer das Teilen seines Mikrofons stoppt).

## Erfassen und Verwenden des Blobs

Wenn die Aufzeichnung gestoppt wurde, gibt die Eigenschaft `state` den Wert "inactive" zurück und ein Stop-Ereignis wird ausgelöst. Wir registrieren einen Ereignishandler hierfür mit [`onstop`](/de/docs/Web/API/MediaRecorder/stop_event), und finalisieren unseren Blob dort aus allen erhaltenen Teilen:

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

Gehen wir den obigen Code durch und schauen, was passiert.

Zuerst zeigen wir eine Eingabeaufforderung an, die den Benutzer bittet, seinen Clip zu benennen.

Als Nächstes erstellen wir eine HTML-Struktur wie die folgende und fügen sie in unseren Clip-Container ein, der ein {{htmlelement("article")}}-Element ist.

```html
<article class="clip">
  <audio controls></audio>
  <p>your clip name</p>
  <button>Delete</button>
</article>
```

Danach erstellen wir einen kombinierten [`Blob`](/de/docs/Web/API/Blob) aus den aufgenommenen Audio-Stücken und erstellen eine Objekt-URL, die darauf verweist, mit `window.URL.createObjectURL(blob)`. Wir setzen dann den Wert des [`src`](/de/docs/Web/HTML/Reference/Elements/audio#src)-Attributs des {{HTMLElement("audio")}}-Elements auf die Objekt-URL, so dass, wenn die Wiedergabetaste auf dem Audioplayer gedrückt wird, der `Blob` abgespielt wird.

Schließlich setzen wir einen `onclick`-Handler auf die Löschtaste, der eine Funktion ist, die die gesamte Clip-HTML-Struktur löscht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) Einstiegsseite
- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
