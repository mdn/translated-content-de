---
title: Verwendung der MediaStream Recording API
slug: Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("MediaStream Recording")}}

Die [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) erleichtert das Aufzeichnen von Audio- und/oder Videoströmen. In Verbindung mit [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) bietet sie eine einfache Möglichkeit, von den Eingabegeräten des Benutzers aufzunehmen und das Ergebnis sofort in Web-Apps zu verwenden.

Sowohl Audio- als auch Videodaten können getrennt oder zusammen aufgezeichnet werden. Dieser Artikel bietet einen grundlegenden Leitfaden zur Verwendung der MediaRecorder-Schnittstelle, die diese API bereitstellt.

## Eine Beispielanwendung: Web Diktiergerät

![Ein Bild der Web-Diktiergerät-Beispiel-App – eine Sinuswellen-Klangvisualisierung, dann Aufnahme- und Stopp-Tasten, dann ein Audio-Jukebox der aufgezeichneten Tracks, die abgespielt werden können.](web-dictaphone.png)

Um die grundlegende Verwendung der MediaStream Recording API zu demonstrieren, haben wir ein web-basiertes Diktiergerät entwickelt. Es ermöglicht Ihnen, Audioausschnitte aufzuzeichnen und sie dann abzuspielen. Es bietet sogar eine Visualisierung des Toneingangs Ihres Geräts mithilfe der Web Audio API. In diesem Artikel konzentrieren wir uns auf die Aufnahme- und Wiedergabefunktionalität.

Sie können diese [Demo live sehen](https://mdn.github.io/dom-examples/media/web-dictaphone/) oder [den Quellcode auf GitHub abrufen](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).

## CSS-Leckerbissen

Das HTML ist in dieser App ziemlich einfach, daher werden wir es hier nicht durchgehen; es gibt jedoch ein paar etwas interessantere CSS-Teile, die es wert sind, erwähnt zu werden, die wir unten diskutieren werden. Wenn Sie sich nicht für CSS interessieren und direkt zu JavaScript übergehen möchten, springen Sie zum Abschnitt [Grundlegende App-Einrichtung](#grundlegende_app-einrichtung).

### Die Benutzeroberfläche unabhängig von der Gerätehöhe mithilfe von calc() beschränken

Die {{cssxref("calc", "calc()")}}-Funktion ist eines dieser nützlichen kleinen Hilfsmittel, die in CSS aufgetaucht sind und die anfangs nicht viel zu bieten scheinen, aber schnell zum Nachdenken darüber anregen, warum es sie vorher nicht gab und warum CSS2-Layouts so umständlich waren. Damit können Sie eine Berechnung anstellen, um den berechneten Wert einer CSS-Einheit zu ermitteln und dabei verschiedene Einheiten mischen.

Zum Beispiel haben wir im Web Diktiergerät drei Hauptbereiche der Benutzeroberfläche, die vertikal gestapelt sind. Wir wollten den ersten beiden (dem Header und den Steuerelementen) feste Höhen geben:

```css
header {
  height: 70px;
}

.main-controls {
  padding-bottom: 0.7rem;
  height: 170px;
}
```

Jedoch wollten wir, dass der dritte Bereich (der die aufgezeichneten Samples enthält, die Sie abspielen können) unabhängig von der Gerätehöhe den verbleibenden Platz einnimmt. Flexbox könnte hier die Lösung sein, ist jedoch für ein so einfaches Layout etwas übertrieben. Stattdessen wurde das Problem gelöst, indem die Höhe des dritten Containers auf 100 % der Höhe des Elternelements minus der Höhen und Abstände der beiden anderen eingestellt wurde:

```css
.sound-clips {
  box-shadow: inset 0 3px 4px rgb(0 0 0 / 70%);
  background-color: rgb(0 0 0 / 10%);
  height: calc(100% - 240px - 0.7rem);
  overflow: scroll;
}
```

### Checkbox-Hack für Ein-/Ausblenden

Dies ist bereits recht gut dokumentiert, aber wir dachten, wir erwähnen den Checkbox-Hack, der den Umstand ausnutzt, dass Sie auf das {{htmlelement("label")}} einer Checkbox klicken können, um sie ein- oder auszuschalten. Im Web Diktiergerät steuert dies den Informationsbildschirm, der durch Klicken auf das Fragezeichen-Symbol in der oberen rechten Ecke ein- oder ausgeblendet wird. Zunächst stylen wir das `<label>` wie gewünscht, stellen sicher, dass es genügend z-index hat, um immer über den anderen Elementen zu liegen und daher fokussierbar/anklickbar zu sein:

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

Dann verstecken wir die eigentliche Checkbox, da wir nicht möchten, dass sie unsere Benutzeroberfläche überfüllt:

```css
input[type="checkbox"] {
  position: absolute;
  top: -100px;
}
```

Als nächstes stylen wir den Informationsbildschirm (eingewickelt in ein {{htmlelement("aside")}}-Element) wie gewünscht, geben ihm eine feste Position, damit er nicht im Layoutfluss erscheint und die Hauptoberfläche beeinträchtigt, transformieren ihn an die Position, an der wir ihn standardmäßig haben möchten, und geben ihm eine Transition für ein sanftes Ein-/Ausblenden:

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

Letztendlich schreiben wir eine Regel, dass, wenn die Checkbox aktiviert ist (wenn wir das Label anklicken/fokussieren), das angrenzende `<aside>`-Element seinen horizontalen Übersetzungswert ändert und sanft in den Blickpunkt tritt:

```css
input[type="checkbox"]:checked ~ aside {
  transform: translateX(0);
}
```

## Grundlegende App-Einrichtung

Um den Medienstrom zu erfassen, den wir aufnehmen möchten, verwenden wir `getUserMedia()`. Anschließend verwenden wir die MediaStream Recording API, um den Stream aufzuzeichnen und jedes aufgezeichnete Fragment in die Quelle eines generierten {{htmlelement("audio")}}-Elements auszugeben, damit es abgespielt werden kann.

Wir deklarieren einige Variablen für die Aufnahme- und Stopp-Tasten und den {{htmlelement("article")}}, der die generierten Audioplayer enthalten wird:

```js
const record = document.querySelector(".record");
const stop = document.querySelector(".stop");
const soundClips = document.querySelector(".sound-clips");
```

Abschließend bauen wir für diesen Abschnitt die grundlegende `getUserMedia`-Struktur auf:

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

Das Ganze ist in einen Test eingebaut, der überprüft, ob `getUserMedia` unterstützt wird, bevor etwas anderes ausgeführt wird. Als nächstes rufen wir `getUserMedia()` auf und definieren darin:

- **Die Einschränkungen**: Nur Audio soll für unser Diktiergerät erfasst werden.
- **Die Erfolgscallback**: Dieser Code wird ausgeführt, sobald der `getUserMedia`-Aufruf erfolgreich abgeschlossen wurde.
- **Die Fehler-/Fehlercallback**: Der Code wird ausgeführt, wenn der `getUserMedia`-Aufruf aus irgendeinem Grund fehlschlägt.

> [!NOTE]
> Der gesamte Code unten befindet sich im `getUserMedia`-Erfolgscallback.

## Erfassen des Medienstroms

Sobald `getUserMedia` erfolgreich einen Mediastream erstellt hat, erstellen Sie eine neue MediaRecorder-Instanz mit dem `MediaRecorder()`-Konstruktor und geben den Stream direkt weiter. Dies ist Ihr Einstiegspunkt in die Verwendung der MediaStream Recording API — der Stream ist nun bereit, in einem [`Blob`](/de/docs/Web/API/Blob) im Standard-Codierungsformat Ihres Browsers erfasst zu werden.

```js
const mediaRecorder = new MediaRecorder(stream);
```

In der [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Schnittstelle stehen Ihnen eine Reihe von Methoden zur Verfügung, mit denen Sie die Aufnahme des Medienstroms steuern können; im Web Diktiergerät verwenden wir nur zwei und lauschen einigen Ereignissen. Zuerst wird [`MediaRecorder.start()`](/de/docs/Web/API/MediaRecorder/start) verwendet, um die Aufzeichnung des Streams zu starten, sobald die Aufnahmetaste gedrückt wird:

```js
record.onclick = () => {
  mediaRecorder.start();
  console.log(mediaRecorder.state);
  console.log("recorder started");
  record.style.background = "red";
  record.style.color = "black";
};
```

Wenn der `MediaRecorder` aufnimmt, gibt die Eigenschaft [`MediaRecorder.state`](/de/docs/Web/API/MediaRecorder/state) einen Wert von "recording" zurück.

Während die Aufnahme fortschreitet, müssen wir die Audiodaten sammeln. Wir registrieren einen Ereignis-Handler dafür mithilfe des [`ondataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event):

```js
let chunks = [];

mediaRecorder.ondataavailable = (e) => {
  chunks.push(e.data);
};
```

> [!NOTE]
> Der Browser löst `dataavailable`-Ereignisse bei Bedarf aus, aber wenn Sie eingreifen möchten, können Sie beim Aufruf der `start()`-Methode auch ein Zeitintervall angeben — zum Beispiel `start(10000)` — um dieses Intervall zu steuern, oder [`MediaRecorder.requestData()`](/de/docs/Web/API/MediaRecorder/requestData) aufrufen, um ein Ereignis auszulösen, wenn Sie es benötigen.

Schließlich verwenden wir die [`MediaRecorder.stop()`](/de/docs/Web/API/MediaRecorder/stop)-Methode, um die Aufnahme zu stoppen, wenn die Stopp-Taste gedrückt wird, und den [`Blob`](/de/docs/Web/API/Blob) für die Verwendung an anderer Stelle in unserer Anwendung bereitzustellen.

```js
stop.onclick = () => {
  mediaRecorder.stop();
  console.log(mediaRecorder.state);
  console.log("recorder stopped");
  record.style.background = "";
  record.style.color = "";
};
```

Beachten Sie, dass die Aufnahme auch natürlich aufhören kann, wenn der Mediastream endet (z. B. wenn Sie einen Songtrack erfasst haben und der Track endet oder der Benutzer das Teilen seines Mikrofons einstellt).

## Erfassen und Verwenden des Blobs

Wenn die Aufnahme gestoppt wurde, gibt die `state`-Eigenschaft einen Wert von "inactive" zurück und ein Stop-Ereignis wird ausgelöst. Wir registrieren einen Ereignis-Handler hierfür mithilfe von [`onstop`](/de/docs/Web/API/MediaRecorder/stop_event) und finalisieren unseren Blob dort aus allen erhaltenen Chunks:

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

Gehen wir den obigen Code durch und schauen wir uns an, was passiert.

Erstens zeigen wir eine Eingabeaufforderung an, die den Benutzer fragt, wie sein Clip benannt werden soll.

Als nächstes erstellen wir eine HTML-Struktur wie die folgende, die wir in unseren Clip-Container einfügen, der ein {{htmlelement("article")}}-Element ist.

```html
<article class="clip">
  <audio controls></audio>
  <p>your clip name</p>
  <button>Delete</button>
</article>
```

Danach erstellen wir einen kombinierten [`Blob`](/de/docs/Web/API/Blob) aus den aufgezeichneten Audio-Chunks und erstellen eine Objekt-URL, die auf ihn zeigt, indem wir `window.URL.createObjectURL(blob)` verwenden. Wir setzen dann den Wert des [`src`](/de/docs/Web/HTML/Element/audio#src)-Attributs des {{HTMLElement("audio")}}-Elements auf die Objekt-URL, damit, wenn die Wiedergabetaste auf dem Audioplayer gedrückt wird, der `Blob` abgespielt wird.

Schließlich setzen wir einen `onclick`-Handler auf die Löschtaste, um eine Funktion zu sein, die die gesamte Clip-HTML-Struktur löscht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture und Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) Einstiegsseite
- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
