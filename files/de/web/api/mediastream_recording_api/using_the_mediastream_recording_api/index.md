---
title: Verwendung der MediaStream Recording API
slug: Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

{{DefaultAPISidebar("MediaStream Recording")}}

Die [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) macht es einfach, Audio- und/oder Videostreams aufzuzeichnen. In Verbindung mit [`navigator.mediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) bietet sie eine einfache Möglichkeit, von den Eingabegeräten des Benutzers aufzuzeichnen und das Ergebnis sofort in Web-Apps zu verwenden.

Sowohl Audio als auch Video können separat oder zusammen aufgezeichnet werden. Dieser Artikel soll einen grundlegenden Leitfaden zur Verwendung der MediaRecorder-Schnittstelle bieten, die diese API bereitstellt.

## Eine Beispielanwendung: Web-Diktiergerät

![Ein Bild der Web-Diktiergerät Beispiel-App - eine Sinuswellen-Soundvisualisierung, dann Aufnahme- und Stopptasten, dann eine Audio-Jukebox von aufgezeichneten Tracks, die abgespielt werden können.](web-dictaphone.png)

Um die grundlegende Verwendung der MediaStream Recording API zu demonstrieren, haben wir ein webbasiertes Diktiergerät entwickelt. Es ermöglicht Ihnen, Audioausschnitte aufzuzeichnen und sie dann abzuspielen. Es bietet sogar eine Visualisierung der Toneingabe Ihres Geräts, mittels der Web Audio API. In diesem Artikel konzentrieren wir uns auf die Aufnahme- und Wiedergabefunktionalität.

Sie können sich dieses [Demo live ansehen](https://mdn.github.io/dom-examples/media/web-dictaphone/) oder den [Quellcode auf GitHub](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone) abrufen.

## CSS Feinheiten

Das HTML in dieser App ist ziemlich einfach, daher gehen wir hier nicht darauf ein; es gibt jedoch ein paar interessante CSS-Teile, die erwähnenswert sind, deshalb besprechen wir sie unten. Wenn Sie sich nicht für CSS interessieren und direkt zum JavaScript gelangen möchten, springen Sie zum Abschnitt [Grundlegende App-Einrichtung](#grundlegende_app-einrichtung).

### Die Oberfläche auf die Ansicht beschränken, unabhängig von der Geräthöhe, mit calc()

Die Funktion {{cssxref("calc", "calc()")}} ist eines dieser nützlichen kleinen Werkzeuge, die in CSS aufgetaucht sind, die zunächst nicht viel erscheinen, aber bald anfangen, Sie denken zu lassen: "Wow, warum hatten wir das nicht schon vorher? Warum war das CSS2-Layout so umständlich?" Es ermöglicht Ihnen, eine Berechnung durchzuführen, um den berechneten Wert einer CSS-Einheit zu bestimmen und dabei verschiedene Einheiten zu mischen.

Zum Beispiel haben wir im Web-Diktiergerät drei Haupt-Benutzeroberflächenbereiche, die vertikal gestapelt sind. Wir wollten den ersten beiden (dem Kopfbereich und den Bedienelementen) feste Höhen geben:

```css
header {
  height: 70px;
}

.main-controls {
  padding-bottom: 0.7rem;
  height: 170px;
}
```

Jedoch wollten wir, dass der dritte Bereich (der die aufgezeichneten Samples enthält, die Sie abspielen können) den restlichen Raum einnimmt, unabhängig von der Geräthöhe. Flexbox könnte hier die Antwort sein, aber es ist ein bisschen übertrieben für ein so einfaches Layout. Stattdessen wurde das Problem gelöst, indem die Höhe des dritten Containers gleich 100 % der Elternhöhe minus der Höhen und des Abstands der anderen beiden gemacht wurde:

```css
.sound-clips {
  box-shadow: inset 0 3px 4px rgb(0 0 0 / 70%);
  background-color: rgb(0 0 0 / 10%);
  height: calc(100% - 240px - 0.7rem);
  overflow: scroll;
}
```

### Checkbox-Hack zum Anzeigen/Verbergen

Dies ist schon ziemlich gut dokumentiert, aber wir dachten, wir würden dem Checkbox-Hack eine Erwähnung geben, der den Fakt ausnutzt, dass Sie auf das {{htmlelement("label")}} einer Checkbox klicken können, um sie ein-/auszuschalten. Im Web-Diktiergerät wird damit der Informationsbildschirm aktiviert, der durch Klicken auf das Fragezeichen-Symbol in der oberen rechten Ecke angezeigt/versteckt wird. Zuerst stylen wir das `<label>` wie gewünscht, stellen sicher, dass es genug z-index hat, um immer über den anderen Elementen zu sitzen und daher fokussierbar/klickbar zu sein:

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

Dann verstecken wir die eigentliche Checkbox, weil wir sie nicht in unserer Benutzeroberfläche haben möchten:

```css
input[type="checkbox"] {
  position: absolute;
  top: -100px;
}
```

Als Nächstes stylen wir den Informationsbildschirm (eingebettet in ein {{htmlelement("aside")}}-Element) wie gewünscht, geben ihm eine feste Position, damit er nicht im Layoutfluss erscheint und die Hauptbenutzeroberfläche beeinflusst, transformieren ihn in die Position, in der er standardmäßig sitzen soll, und geben ihm einen Übergang für sanftes Ein-/Ausblenden:

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
    transparent,
    rgb(0 0 0 / 50%)
  );
}
```

Schließlich schreiben wir eine Regel, die besagt, dass, wenn die Checkbox aktiviert ist (wenn wir das Label klicken/fokussieren), das benachbarte `<aside>`-Element seinen horizontalen Übersetzungswert ändert und sanft ins Sichtfeld übergeht:

```css
input[type="checkbox"]:checked ~ aside {
  transform: translateX(0);
}
```

## Grundlegende App-Einrichtung

Um den Mediastream zu erfassen, den wir aufnehmen möchten, verwenden wir `getUserMedia()`. Dann nutzen wir die MediaStream Recording API, um den Stream aufzuzeichnen, und geben jedes aufgenommene Snippet in die Quelle eines erzeugten {{htmlelement("audio")}}-Elements aus, damit es abgespielt werden kann.

Wir deklarieren einige Variablen für die Aufnahme- und Stopptasten und das {{htmlelement("article")}}, das die erzeugten Audio-Player enthalten wird:

```js
const record = document.querySelector(".record");
const stop = document.querySelector(".stop");
const soundClips = document.querySelector(".sound-clips");
```

Schließlich, für diesen Abschnitt, richten wir die grundlegende `getUserMedia`-Struktur ein:

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

Das ganze wird in einen Test eingewickelt, der prüft, ob `getUserMedia` unterstützt wird, bevor irgendetwas anderes ausgeführt wird. Als Nächstes rufen wir `getUserMedia()` auf und definieren darin:

- **Die Einschränkungen**: Es wird nur Audio für unser Diktiergerät aufgenommen.
- **Den Erfolgscallback**: Dieser Code wird ausgeführt, sobald der `getUserMedia`-Aufruf erfolgreich abgeschlossen wurde.
- **Den Fehler/Misserfolgscallback**: Der Code wird ausgeführt, wenn der `getUserMedia`-Aufruf aus irgendeinem Grund fehlschlägt.

> [!NOTE]
> Alle untenstehenden Codes werden innerhalb des `getUserMedia`-Erfolgscallbacks platziert.

## Erfassen des Mediastreams

Sobald `getUserMedia` erfolgreich einen Mediastream erstellt hat, erstellen Sie eine neue Media Recorder-Instanz mit dem `MediaRecorder()`-Konstruktor und übergeben diesen direkt an den Stream. Dies ist Ihr Einstiegspunkt in die Verwendung der MediaStream Recording API — der Stream ist jetzt bereit, in ein [`Blob`](/de/docs/Web/API/Blob) aufgenommen zu werden, im Standard-Codierungsformat Ihres Browsers.

```js
const mediaRecorder = new MediaRecorder(stream);
```

In der [`MediaRecorder`](/de/docs/Web/API/MediaRecorder)-Schnittstelle gibt es eine Reihe von Methoden, die es Ihnen ermöglichen, die Aufnahme des Mediastreams zu steuern; im Web-Diktiergerät verwenden wir nur zwei und hören einige Events. Zuerst wird [`MediaRecorder.start()`](/de/docs/Web/API/MediaRecorder/start) verwendet, um die Aufnahme des Streams zu starten, sobald der Aufnahmeknopf gedrückt wird:

```js
record.onclick = () => {
  mediaRecorder.start();
  console.log(mediaRecorder.state);
  console.log("recorder started");
  record.style.background = "red";
  record.style.color = "black";
};
```

Wenn der `MediaRecorder` aufzeichnet, gibt die Eigenschaft [`MediaRecorder.state`](/de/docs/Web/API/MediaRecorder/state) einen Wert von "recording" zurück.

Wenn die Aufnahme fortschreitet, müssen wir die Audiodaten sammeln. Wir registrieren einen Ereignishandler, um dies mit [`ondataavailable`](/de/docs/Web/API/MediaRecorder/dataavailable_event) zu tun:

```js
let chunks = [];

mediaRecorder.ondataavailable = (e) => {
  chunks.push(e.data);
};
```

> [!NOTE]
> Der Browser wird `dataavailable`-Events bei Bedarf auslösen, aber wenn Sie eingreifen möchten, können Sie auch ein Zeitintervall beim Aufruf der `start()`-Methode einschließen — zum Beispiel `start(10000)` — um dieses Intervall zu steuern, oder [`MediaRecorder.requestData()`](/de/docs/Web/API/MediaRecorder/requestData) aufrufen, um ein Ereignis auszulösen, wenn Sie es benötigen.

Schließlich verwenden wir die Methode [`MediaRecorder.stop()`](/de/docs/Web/API/MediaRecorder/stop), um die Aufnahme zu stoppen, wenn der Stop-Knopf gedrückt wird, und das [`Blob`](/de/docs/Web/API/Blob) zur Verwendung an anderer Stelle in unserer Anwendung fertigzustellen.

```js
stop.onclick = () => {
  mediaRecorder.stop();
  console.log(mediaRecorder.state);
  console.log("recorder stopped");
  record.style.background = "";
  record.style.color = "";
};
```

Bitte beachten Sie, dass die Aufnahme auch natürlich stoppen kann, wenn der Mediastream endet (z. B. wenn Sie einen Songtrack aufgenommen haben und der Track endet, oder der Benutzer das Teilen seines Mikrofons stoppt).

## Erfassen und Verwenden des Blobs

Wenn die Aufnahme gestoppt wurde, gibt die Eigenschaft `state` einen Wert von "inactive" zurück, und ein Stop-Ereignis wird ausgelöst. Wir registrieren einen Ereignishandler dafür mit [`onstop`](/de/docs/Web/API/MediaRecorder/stop_event) und vervollständigen dort unser Blob aus allen empfangenen Teilen:

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

Zuerst zeigen wir eine Aufforderung an, die den Benutzer fragt, seinen Clip zu benennen.

Dann erstellen wir eine HTML-Struktur wie die folgende und fügen sie in unseren Clip-Container ein, der ein {{htmlelement("article")}}-Element ist.

```html
<article class="clip">
  <audio controls></audio>
  <p>your clip name</p>
  <button>Delete</button>
</article>
```

Danach erstellen wir ein kombiniertes [`Blob`](/de/docs/Web/API/Blob) aus den aufgezeichneten Audiodaten und erstellen eine Objekt-URL, die darauf zeigt, unter Verwendung von `window.URL.createObjectURL(blob)`. Wir setzen dann den Wert des [`src`](/de/docs/Web/HTML/Reference/Elements/audio#src)-Attributs des {{HTMLElement("audio")}}-Elements auf die Objekt-URL, so dass, wenn der Wiedergabeknopf auf dem Audioplayer gedrückt wird, das `Blob` abgespielt wird.

Schließlich setzen wir einen `onclick`-Handler auf die Löschtaste, der eine Funktion ist, die die gesamte Clip-HTML-Struktur löscht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) Übersichtsseite
- [`MediaDevices.getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)
