---
title: Verwendung der MediaStream Recording API
slug: Web/API/MediaStream_Recording_API/Using_the_MediaStream_Recording_API
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{DefaultAPISidebar("MediaStream Recording")}}

Die [MediaStream Recording API](/de/docs/Web/API/MediaStream_Recording_API) macht es einfach, Audio- und/oder Videostreams aufzuzeichnen. In Verbindung mit {{domxref("MediaDevices.getUserMedia()","navigator.mediaDevices.getUserMedia()")}} bietet sie eine einfache Möglichkeit, von den Eingabegeräten des Benutzers aufzunehmen und das Ergebnis sofort in Web-Apps zu verwenden.

Sowohl Audio- als auch Videoinhalte können getrennt oder gemeinsam aufgezeichnet werden. Dieser Artikel soll als grundlegende Anleitung zur Verwendung der MediaRecorder-Schnittstelle dienen, die diese API bereitstellt.

## Eine Beispielanwendung: Web-Diktiergerät

![Ein Bild der Web-Diktiergerät-Beispiel-App - eine Sinuswellen-Klangvisualisierung, dann Aufnahmetaste und Stopp-Taste, dann ein Audio-Jukebox der aufgenommenen Spuren, die abgespielt werden können.](web-dictaphone.png)

Um die grundlegende Nutzung der MediaStream Recording API zu demonstrieren, haben wir ein web-basiertes Diktiergerät entwickelt. Es ermöglicht Ihnen, Audioausschnitte aufzuzeichnen und sie dann abzuspielen. Es bietet sogar eine Visualisierung des Toneingangs Ihres Geräts, unter Nutzung der Web Audio API. In diesem Artikel konzentrieren wir uns auf die Aufnahme- und Wiedergabefunktionalität.

Sie können sich dieses [Demo live ansehen](https://mdn.github.io/dom-examples/media/web-dictaphone/), oder den [Quellcode auf GitHub abrufen](https://github.com/mdn/dom-examples/tree/main/media/web-dictaphone).

## CSS-Goodies

Das HTML in dieser App ist ziemlich einfach, daher werden wir hier nicht darauf eingehen; es gibt jedoch ein paar etwas interessantere Teile von CSS, die erwähnenswert sind, daher werden wir diese unten diskutieren. Wenn Sie sich nicht für CSS interessieren und direkt zum JavaScript springen möchten, überspringen Sie den Abschnitt [Grundlegende App-Einrichtung](#grundlegende_app-einrichtung).

### Die Benutzeroberfläche an die Viewportgröße anpassen, unabhängig von der Gerätehöhe, mit calc()

Die {{cssxref("calc", "calc()")}}-Funktion ist eine dieser nützlichen kleinen Dienstprogramme, die in CSS aufgetaucht sind und zunächst nicht viel aussehen, aber bald anfangen, Sie denken zu lassen: "Wow, warum hatten wir das nicht vorher? Warum war das Layout von CSS2 so unhandlich?" Sie ermöglicht es Ihnen, eine Berechnung zur Bestimmung des berechneten Werts einer CSS-Einheit durchzuführen, wobei verschiedene Einheiten gemischt werden.

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

Wir wollten jedoch, dass der dritte Bereich (der die aufgezeichneten Samples enthält, die Sie abspielen können) den verbleibenden Platz einnimmt, unabhängig von der Gerätehöhe. Flexbox könnte hier die Antwort sein, aber es wäre ein bisschen übertrieben für ein so einfaches Layout. Stattdessen wurde das Problem gelöst, indem die Höhe des dritten Containers gleich 100 % der Elternhöhe minus den Höhen und dem Padding der anderen beiden gesetzt wurde:

```css
.sound-clips {
  box-shadow: inset 0 3px 4px rgb(0 0 0 / 70%);
  background-color: rgb(0 0 0 / 10%);
  height: calc(100% - 240px - 0.7rem);
  overflow: scroll;
}
```

### Checkbox-Hack zum Ein- und Ausblenden

Dies ist bereits gut dokumentiert, aber wir dachten, wir geben dem Checkbox-Hack eine Erwähnung, der die Tatsache ausnutzt, dass man auf das {{htmlelement("label")}} einer Checkbox klicken kann, um sie zu aktivieren/deaktivieren. Im Web-Diktiergerät steuert dies den Informationsbildschirm, der durch Klicken auf das Fragezeichen-Symbol in der oberen rechten Ecke ein-/ausgeblendet wird. Zuerst gestalten wir das `<label>` wie gewünscht und stellen sicher, dass es genügend z-Index hat, um immer über den anderen Elementen zu liegen und daher fokussierbar/klickbar ist:

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

Als nächstes gestalten wir den Informationsbildschirm (eingebettet in ein {{htmlelement("aside")}}-Element) so, wie wir ihn möchten, geben ihm eine feste Position, damit er nicht im Layoutfluss erscheint und die Hauptbenutzeroberfläche beeinflusst, transformieren ihn in die Position, in der er standardmäßig sitzen soll, und geben ihm einen Übergang für das sanfte Ein-/Ausblenden:

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

Zuletzt schreiben wir eine Regel, die besagt, dass, wenn die Checkbox aktiviert ist (wenn wir das Label anklicken/fokussieren), das angrenzende `<aside>`-Element seinen horizontalen Übersetzungswert ändert und sanft in die Ansicht kommt:

```css
input[type="checkbox"]:checked ~ aside {
  transform: translateX(0);
}
```

## Grundlegende App-Einrichtung

Um den Medienstream zu erfassen, den wir aufnehmen möchten, verwenden wir `getUserMedia()`. Dann verwenden wir die MediaStream Recording API, um den Stream aufzuzeichnen und jedes aufgezeichnete Stück in die Quelle eines generierten {{htmlelement("audio")}}-Elements auszugeben, sodass es abgespielt werden kann.

Wir erklären einige Variablen für die Aufnahme- und Stopp-Tasten und den {{htmlelement("article")}}, der die generierten Audioplayer enthalten wird:

```js
const record = document.querySelector(".record");
const stop = document.querySelector(".stop");
const soundClips = document.querySelector(".sound-clips");
```

Abschließend für diesen Abschnitt richten wir die grundlegende `getUserMedia`-Struktur ein:

```js
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  console.log("getUserMedia unterstützt.");
  navigator.mediaDevices
    .getUserMedia(
      // Einschränkungen - nur Audio erforderlich für diese App
      {
        audio: true,
      },
    )

    // Erfolgs-Callback
    .then((stream) => {})

    // Fehler-Callback
    .catch((err) => {
      console.error(`Der folgende getUserMedia-Fehler ist aufgetreten: ${err}`);
    });
} else {
  console.log("getUserMedia wird in Ihrem Browser nicht unterstützt!");
}
```

Das Ganze ist in einen Test eingeschlossen, der prüft, ob `getUserMedia` unterstützt wird, bevor irgendetwas anderes ausgeführt wird. Als nächstes rufen wir `getUserMedia()` auf und definieren darin:

- **Die Einschränkungen**: Es soll nur Audio für unser Diktiergerät erfasst werden.
- **Der Erfolgs-Callback**: Dieser Code wird ausgeführt, sobald der `getUserMedia`-Aufruf erfolgreich abgeschlossen wurde.
- **Der Fehler/Fehler-Callback**: Der Code wird ausgeführt, wenn der `getUserMedia`-Aufruf aus irgendeinem Grund fehlschlägt.

> [!NOTE]
> Der gesamte untenstehende Code wird im Erfolgs-Callback von `getUserMedia` platziert.

## Erfassen des Medienstreams

Sobald `getUserMedia` erfolgreich einen Medienstream erstellt hat, erstellen Sie eine neue Media Recorder-Instanz mit dem `MediaRecorder()`-Konstruktor und übergeben den Stream direkt. Dies ist Ihr Einstiegspunkt in die Verwendung der MediaStream Recording API - der Stream ist nun bereit, in einem {{domxref("Blob")}}, im Standardcodierungsformat Ihres Browsers erfasst zu werden.

```js
const mediaRecorder = new MediaRecorder(stream);
```

Es gibt eine Reihe von Methoden in der {{domxref("MediaRecorder")}}-Schnittstelle, die es Ihnen ermöglichen, die Aufzeichnung des Medienstreams zu steuern; im Web-Diktiergerät verwenden wir nur zwei und hören einige Ereignisse. Zuerst wird {{domxref("MediaRecorder.start()")}} verwendet, um die Aufzeichnung des Streams zu starten, sobald die Aufnahmetaste gedrückt wird:

```js
record.onclick = () => {
  mediaRecorder.start();
  console.log(mediaRecorder.state);
  console.log("Rekorder gestartet");
  record.style.background = "red";
  record.style.color = "black";
};
```

Wenn der `MediaRecorder` aufzeichnet, gibt die Eigenschaft {{domxref("MediaRecorder.state")}} den Wert "recording" zurück.

Während die Aufzeichnung fortschreitet, müssen wir die Audiodaten sammeln. Wir registrieren einen Ereignishandler, um dies mit {{domxref("mediaRecorder.dataavailable_event", "ondataavailable")}} zu tun:

```js
let chunks = [];

mediaRecorder.ondataavailable = (e) => {
  chunks.push(e.data);
};
```

> [!NOTE]
> Der Browser wird `dataavailable`-Ereignisse nach Bedarf auslösen, aber wenn Sie eingreifen möchten, können Sie beim Aufrufen der `start()`-Methode auch eine Zeitspanne angeben – zum Beispiel `start(10000)` – um dieses Intervall zu steuern, oder {{domxref("MediaRecorder.requestData()")}} aufrufen, um ein Ereignis auszulösen, wenn Sie es benötigen.

Schließlich verwenden wir die {{domxref("MediaRecorder.stop()")}}-Methode, um die Aufzeichnung zu stoppen, wenn die Stopp-Taste gedrückt wird, und bereiten den {{domxref("Blob")}} zur Verwendung an anderer Stelle in unserer Anwendung vor.

```js
stop.onclick = () => {
  mediaRecorder.stop();
  console.log(mediaRecorder.state);
  console.log("Rekorder gestoppt");
  record.style.background = "";
  record.style.color = "";
};
```

Beachten Sie, dass die Aufnahme auch von selbst stoppen kann, wenn der Medienstream endet (z. B. wenn Sie einen Musiktitel erfasst haben und der Titel endet, oder der Benutzer die Freigabe seines Mikrofons beendet hat).

## Erfassen und Verwenden des Blobs

Wenn die Aufzeichnung gestoppt wurde, gibt die `state`-Eigenschaft den Wert "inactive" zurück, und ein Stop-Ereignis wird ausgelöst. Wir registrieren einen Ereignishandler dafür mit {{domxref("mediaRecorder.stop_event", "onstop")}}, und finalisieren unseren Blob dort aus allen erhaltenen Teilen:

```js
mediaRecorder.onstop = (e) => {
  console.log("Rekorder gestoppt");

  const clipName = prompt("Geben Sie einen Namen für Ihren Soundclip ein");

  const clipContainer = document.createElement("article");
  const clipLabel = document.createElement("p");
  const audio = document.createElement("audio");
  const deleteButton = document.createElement("button");

  clipContainer.classList.add("clip");
  audio.setAttribute("controls", "");
  deleteButton.textContent = "Löschen";
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

Zuerst zeigen wir ein Eingabeaufforderungsfenster an, in dem der Benutzer gebeten wird, seinen Clip zu benennen.

Als nächstes erstellen wir eine HTML-Struktur wie die folgende und fügen sie in unseren Clip-Container ein, der ein {{htmlelement("article")}}-Element ist.

```html
<article class="clip">
  <audio controls></audio>
  <p>Ihr Clipname</p>
  <button>Löschen</button>
</article>
```

Danach erstellen wir ein kombiniertes {{domxref("Blob")}} aus den aufgezeichneten Audio-Chunks und erstellen eine Objekt-URL, die darauf verweist, indem wir `window.URL.createObjectURL(blob)` verwenden. Wir setzen dann den Wert des [`src`](/de/docs/Web/HTML/Element/audio#src)-Attributs des {{HTMLElement("audio")}}-Elements auf die Objekt-URL, sodass beim Drücken der Wiedergabetaste auf dem Audioplayer das `Blob` abgespielt wird.

Schließlich setzen wir einen `onclick`-Handler auf die Löschtaste, um eine Funktion zu sein, die die gesamte Clip-HTML-Struktur löscht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Capture and Streams API](/de/docs/Web/API/Media_Capture_and_Streams_API) Hauptseite
- {{domxref("MediaDevices.getUserMedia()")}}
