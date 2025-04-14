---
title: Manipulating video using canvas
slug: Web/API/Canvas_API/Manipulating_video_using_canvas
l10n:
  sourceCommit: 874ad29df9150037acb8a4a3e7550a302c90a080
---

{{DefaultAPISidebar("Canvas API")}}

Durch die Kombination der Fähigkeiten des [`video`](/de/docs/Web/HTML/Reference/Elements/video)-Elements mit einem [`canvas`](/de/docs/Web/HTML/Reference/Elements/canvas) können Sie Videodaten in Echtzeit manipulieren, um eine Vielzahl von visuellen Effekten in das angezeigte Video zu integrieren. Dieses Tutorial demonstriert, wie man chroma-keying (auch bekannt als "Green Screen Effekt") mit JavaScript-Code durchführt.

{{EmbedGHLiveSample('dom-examples/canvas/chroma-keying/index.html', 700, 400) }}

## Der Dokumentinhalt

Das HTML-Dokument, das diesen Inhalt rendert, wird unten gezeigt.

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
        background-image: url(media/foo.png);
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

Die wichtigsten Punkte, die Sie mitnehmen sollten, sind:

1. Dieses Dokument etabliert zwei [`canvas`](/de/docs/Web/HTML/Reference/Elements/canvas)-Elemente mit den IDs `c1` und `c2`. Canvas `c1` wird verwendet, um den aktuellen Frame des Originalvideos anzuzeigen, während `c2` genutzt wird, um das Video nach der Durchführung des Chroma-Keying-Effekts anzuzeigen; `c2` ist mit dem Standbild vorab geladen, das als Ersatz für den grünen Hintergrund im Video verwendet wird.
2. Der JavaScript-Code wird aus einem Skript namens `processor.js` importiert.

## Der JavaScript-Code

Der JavaScript-Code in `processor.js` besteht aus drei Methoden.

### Initialisieren des Chroma-Key-Players

Die Methode `doLoad()` wird aufgerufen, wenn das HTML-Dokument anfänglich geladen wird. Diese Methode soll die Variablen vorbereiten, die für den Chroma-Key-Verarbeitungs-Code benötigt werden, und einen Event-Listener einrichten, damit wir erkennen können, wann der Benutzer das Video abspielt.

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

Dieser Code erhält Referenzen zu den Elementen im HTML-Dokument, die von besonderem Interesse sind, nämlich das `video`-Element und die zwei `canvas`-Elemente. Es werden auch Referenzen auf die Grafik-Kontexte für jedes der beiden Canvas-Elemente geholt. Diese werden genutzt, wenn wir den Chroma-Keying-Effekt tatsächlich durchführen.

Dann wird `addEventListener()` aufgerufen, um das `video`-Element zu überwachen, damit wir eine Benachrichtigung erhalten, wenn der Benutzer die Wiedergabetaste des Videos drückt. Als Reaktion darauf, dass der Benutzer die Wiedergabe startet, ruft dieser Code die Breite und Höhe des Videos ab, halbiert diese (wir werden die Größe des Videos halbieren, wenn wir den Chroma-Keying-Effekt durchführen), und ruft dann die Methode `timerCallback()` auf, um das Video zu überwachen und den visuellen Effekt zu berechnen.

### Der Timer-Callback

Der Timer-Callback wird zunächst aufgerufen, wenn das Video zu spielen beginnt (wenn das "play"-Ereignis eintritt), und übernimmt dann die Verantwortung, sich selbst periodisch aufzurufen, um den Keying-Effekt für jeden Frame zu starten.

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

Das Erste, was der Callback macht, ist zu überprüfen, ob das Video überhaupt spielt; wenn nicht, kehrt der Callback sofort zurück, ohne etwas zu tun.

Dann ruft es die Methode `computeFrame()` auf, die den Chroma-Keying-Effekt auf dem aktuellen Videoframe ausführt.

Das Letzte, was der Callback macht, ist `setTimeout()` aufzurufen, um sich selbst so schnell wie möglich erneut aufzurufen. In der realen Welt würden Sie dies wahrscheinlich basierend auf der Kenntnis der Bildrate des Videos planen.

### Manipulation der Videoframedaten

Die Methode `computeFrame()`, die unten gezeigt wird, ist dafür verantwortlich, tatsächlich einen Frame von Daten abzurufen und den Chroma-Keying-Effekt auszuführen.

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

Wenn diese Routine aufgerufen wird, zeigt das Videoelement den aktuellsten Frame der Videodaten an, der so aussieht:

![Ein einzelner Frame des Videoelements. Es gibt eine Person mit einem schwarzen T-Shirt. Die Hintergrundfarbe ist gelb.](video.png)

Dieser Frame des Videos wird in den Grafik-Kontext `ctx1` des ersten Canvas kopiert, wobei als Höhe und Breite die zuvor gespeicherten Werte angegeben werden, um den Frame in halber Größe zu zeichnen. Beachten Sie, dass Sie das Videoelement in die Methode `drawImage()` des Kontexts einpassen können, um den aktuellen Videoframe in den Kontext zu zeichnen. Das Ergebnis ist:

![Ein einzelner Frame des Videoelements. Es gibt eine Person mit einem schwarzen T-Shirt. Die Hintergrundfarbe ist gelb. Dies ist eine kleinere Version des oben genannten Bildes.](sourcectx.png)

Das Aufrufen der Methode `getImageData()` auf dem ersten Kontext holt eine Kopie der rohen Grafikdaten für den aktuellen Videoframe. Dies liefert rohe 32-Bit-Pixelbilddaten, die wir dann manipulieren können. Wir berechnen dann die Anzahl der Pixel im Bild, indem wir die Gesamtgröße der Bilddaten des Frames durch vier teilen.

Die `for`-Schleife durchsucht die Pixel des Frames, holt die roten, grünen und blauen Werte für jedes Pixel und vergleicht die Werte mit vordefinierten Zahlen, die verwendet werden, um den grünen Hintergrund zu erkennen, der mit dem importierten Standbild aus `foo.png` ersetzt werden soll.

Jedes Pixel in den Bilddaten des Frames, das innerhalb der Parameter liegt, die als Teil des Green Screens betrachtet werden, hat seinen Alphawert auf Null gesetzt, wodurch angezeigt wird, dass das Pixel vollständig transparent ist. Das Ergebnis ist, dass das endgültige Bild den gesamten Green-Screen-Bereich zu 100 % transparent hat, sodass, wenn es im Zielkontext mit `ctx2.putImageData` gezeichnet wird, das Ergebnis eine Überlagerung auf den statischen Hintergrund ist.

Das resultierende Bild sieht so aus:

![Ein einzelner Frame des Videoelements zeigt dieselbe Person mit einem schwarzen T-Shirt wie in den oben gezeigten Fotos. Der Hintergrund ist anders: es ist das Firefox-Logo.](output.png)

Dies wird wiederholt, während das Video läuft, so dass Frame für Frame verarbeitet und mit dem Chroma-Key-Effekt angezeigt wird.

[Sehen Sie sich den vollständigen Quellcode für dieses Beispiel an](https://github.com/mdn/dom-examples/tree/main/canvas/chroma-keying).

## Siehe auch

- [Webmedientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats)
- [Lernbereich: HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
