---
title: Manipulieren von Videos mit Canvas
slug: Web/API/Canvas_API/Manipulating_video_using_canvas
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

{{DefaultAPISidebar("Canvas API")}}

Durch die Kombination der Fähigkeiten des [`video`](/de/docs/Web/HTML/Reference/Elements/video)-Elements mit einem [`canvas`](/de/docs/Web/HTML/Reference/Elements/canvas) können Sie Videodaten in Echtzeit manipulieren, um eine Vielzahl von visuellen Effekten in das angezeigte Video zu integrieren. Dieses Tutorial demonstriert, wie man Chroma-Keying (auch bekannt als "Green Screen Effekt") mit JavaScript-Code ausführt.

{{EmbedGHLiveSample('dom-examples/canvas/chroma-keying/index.html', 700, 400) }}

## Der Dokumentinhalt

Das HTML-Dokument, das zur Darstellung dieses Inhalts verwendet wird, ist unten gezeigt.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Video test page</title>
    <style>
      body {
        background: black;
        color: #cccccc;
      }
      #c2 {
        background-image: url("media/foo.png");
        background-repeat: no-repeat;
      }
      div {
        float: left;
        border: 1px solid #444444;
        padding: 10px;
        margin: 10px;
        background: #3b3b3b;
      }
    </style>
  </head>

  <body>
    <div>
      <video
        id="video"
        src="media/video.mp4"
        controls
        crossorigin="anonymous"></video>
    </div>
    <div>
      <canvas id="c1" width="160" height="96"></canvas>
      <canvas id="c2" width="160" height="96"></canvas>
    </div>
    <script src="processor.js"></script>
  </body>
</html>
```

Die wesentlichen Punkte, die Sie mitnehmen sollten, sind:

1. Dieses Dokument erstellt zwei [`canvas`](/de/docs/Web/HTML/Reference/Elements/canvas)-Elemente mit den IDs `c1` und `c2`. Canvas `c1` wird verwendet, um den aktuellen Frame des Originalvideos anzuzeigen, während `c2` dazu verwendet wird, das Video nach der Anwendung des Chroma-Keying-Effekts darzustellen; `c2` ist mit dem Standbild vorab geladen, das verwendet wird, um den grünen Hintergrund im Video zu ersetzen.
2. Der JavaScript-Code wird aus einem Skript namens `processor.js` importiert.

## Der JavaScript-Code

Der JavaScript-Code in `processor.js` besteht aus drei Methoden.

### Initialisieren des Chroma-Key Players

Die `doLoad()`-Methode wird aufgerufen, wenn das HTML-Dokument ursprünglich geladen wird. Die Aufgabe dieser Methode ist es, die Variablen vorzubereiten, die durch den Chroma-Key Verarbeitungs-Code benötigt werden, und einen Event-Listener einzurichten, damit wir erkennen können, wenn der Benutzer beginnt, das Video abzuspielen.

```js
const processor = {};

processor.doLoad = function doLoad() {
  const video = document.getElementById("video");
  this.video = video;

  this.c1 = document.getElementById("c1");
  this.ctx1 = this.c1.getContext("2d");

  this.c2 = document.getElementById("c2");
  this.ctx2 = this.c2.getContext("2d");

  video.addEventListener(
    "play",
    () => {
      this.width = video.videoWidth / 2;
      this.height = video.videoHeight / 2;
      this.timerCallback();
    },
    false,
  );
};
```

Dieser Code holt Referenzen zu den Elementen im HTML-Dokument, die von besonderem Interesse sind, nämlich das `video`-Element und die beiden `canvas`-Elemente. Er holt auch die Referenzen zu den Grafikkontexten für jedes der beiden Canvas-Elemente. Diese werden verwendet, wenn wir den Chroma-Keying-Effekt tatsächlich anwenden.

Dann wird `addEventListener()` aufgerufen, um das `video`-Element zu beobachten, damit wir eine Benachrichtigung erhalten, wenn der Benutzer die Wiedergabetaste auf dem Video drückt. Als Reaktion auf das Starten der Wiedergabe durch den Benutzer ruft dieser Code die Breite und Höhe des Videos ab, halbiert jeweils (wir werden die Größe des Videos beim Chroma-Keying halbieren), und ruft dann die `timerCallback()`-Methode auf, um das Video zu beobachten und den visuellen Effekt zu berechnen.

### Der Timer Callback

Der Timer Callback wird zunächst aufgerufen, wenn das Video zu spielen beginnt (wenn das "play"-Ereignis eintritt), und übernimmt dann die Verantwortung, sich selbst regelmäßig aufzurufen, um den Keying-Effekt für jeden Frame zu starten.

```js
processor.timerCallback = function timerCallback() {
  if (this.video.paused || this.video.ended) {
    return;
  }
  this.computeFrame();
  setTimeout(() => {
    this.timerCallback();
  }, 0);
};
```

Das Erste, was der Callback tut, ist zu prüfen, ob das Video überhaupt gespielt wird; wenn nicht, kehrt der Callback sofort zurück, ohne etwas zu tun.

Dann ruft es die `computeFrame()`-Methode auf, die den Chroma-Keying-Effekt auf den aktuellen Videoframe anwendet.

Das Letzte, was der Callback tut, ist `setTimeout()` aufzurufen, um sich selbst so bald wie möglich erneut aufzurufen. In der realen Welt würden Sie dies wahrscheinlich basierend auf dem Wissen der Bildrate des Videos planen.

### Manipulieren der Videoframedaten

Die `computeFrame()`-Methode, die unten gezeigt wird, ist verantwortlich dafür, tatsächlich einen Frame von Daten abzurufen und den Chroma-Keying-Effekt durchzuführen.

```js
processor.computeFrame = function () {
  this.ctx1.drawImage(this.video, 0, 0, this.width, this.height);
  const frame = this.ctx1.getImageData(0, 0, this.width, this.height);
  const data = frame.data;

  for (let i = 0; i < data.length; i += 4) {
    const red = data[i + 0];
    const green = data[i + 1];
    const blue = data[i + 2];
    if (green > 100 && red > 100 && blue < 43) {
      data[i + 3] = 0;
    }
  }
  this.ctx2.putImageData(frame, 0, 0);
};
```

Wenn diese Routine aufgerufen wird, zeigt das Videoelement den aktuellsten Frame von Videodaten an, der so aussieht:

![Ein einzelner Frame des Videoelements. Es gibt eine Person, die ein schwarzes T-Shirt trägt. Die Hintergrundfarbe ist gelb.](video.png)

Dieser Videoframe wird in den Grafikkontext `ctx1` des ersten Canvas kopiert, indem als Höhe und Breite die zuvor gespeicherten Werte angegeben werden, um den Frame in halber Größe zu zeichnen. Beachten Sie, dass Sie das Videoelement in die Methode `drawImage()` des Kontexts übergeben können, um den aktuellen Videoframe in den Kontext zu zeichnen. Das Ergebnis ist:

![Ein einzelner Frame des Videoelements. Es gibt eine Person, die ein schwarzes T-Shirt trägt. Die Hintergrundfarbe ist gelb. Dies ist eine kleinere Version des obigen Bildes.](sourcectx.png)

Das Aufrufen der `getImageData()`-Methode auf dem ersten Kontext ruft eine Kopie der Rohgrafikdaten für den aktuellen Videoframe ab. Dies liefert rohe 32-Bit-Pixeldaten, die wir dann manipulieren können. Wir berechnen dann die Anzahl der Pixel im Bild, indem wir die Gesamtgröße der Bilddaten des Frames durch vier teilen.

Die `for`-Schleife durchläuft die Pixel des Frames, extrahiert die Rot-, Grün- und Blauwerte für jedes Pixel und vergleicht die Werte mit vorher festgelegten Zahlen, die verwendet werden, um den Green Screen zu erkennen, der mit dem statischen Hintergrundbild aus `foo.png` ersetzt wird.

Jedes Pixel in den Bilddaten des Frames, das innerhalb der Parameter liegt, die als Teil des Green Screens gelten, hat seinen Alphawert durch eine Null ersetzt, was anzeigt, dass das Pixel vollständig transparent ist. Das Endergebnis ist, dass das gesamte Green Screen-Gebiet zu 100% transparent ist, sodass, wenn es in den Zielkontext mit `ctx2.putImageData` gezeichnet wird, das Ergebnis eine Überlagerung auf den statischen Hintergrund ist.

Das resultierende Bild sieht wie folgt aus:

![Ein einzelner Frame des Videoelements zeigt dieselbe Person, die ein schwarzes T-Shirt trägt wie in den Fotos oben. Der Hintergrund ist anders: Es ist das Firefox-Logo.](output.png)

Dies wird fortlaufend gemacht, während das Video abgespielt wird, sodass Frame um Frame mit dem Chroma-Keying-Effekt verarbeitet und angezeigt wird.

[Vollständigen Quellcode für dieses Beispiel ansehen](https://github.com/mdn/dom-examples/tree/main/canvas/chroma-keying).

## Siehe auch

- [Webmedientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Guides/Formats)
- [Lernbereich: HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
