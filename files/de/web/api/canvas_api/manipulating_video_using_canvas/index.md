---
title: Manipulieren von Videos mit Canvas
slug: Web/API/Canvas_API/Manipulating_video_using_canvas
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{DefaultAPISidebar("Canvas API")}}

Durch die Kombination der Fähigkeiten des [`video`](/de/docs/Web/HTML/Reference/Elements/video)-Elements mit einem [`canvas`](/de/docs/Web/HTML/Reference/Elements/canvas) können Sie Videodaten in Echtzeit manipulieren, um eine Vielzahl von visuellen Effekten in das angezeigte Video zu integrieren. Dieses Tutorial zeigt, wie man Chroma-Keying (auch bekannt als "Green Screen Effekt") mit JavaScript-Code durchführt.

{{EmbedGHLiveSample('dom-examples/canvas/chroma-keying/index.html', 700, 400) }}

## Der Dokumentinhalt

Das HTML-Dokument, das verwendet wird, um diesen Inhalt darzustellen, wird unten gezeigt.

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
        crossorigin="anonymous" />
    </div>
    <div>
      <canvas id="c1" width="160" height="96"></canvas>
      <canvas id="c2" width="160" height="96"></canvas>
    </div>
    <script src="processor.js"></script>
  </body>
</html>
```

Die wichtigsten Elemente, die Sie aus diesem Dokument mitnehmen sollten, sind:

1. Dieses Dokument erstellt zwei [`canvas`](/de/docs/Web/HTML/Reference/Elements/canvas)-Elemente mit den IDs `c1` und `c2`. Canvas `c1` wird verwendet, um den aktuellen Frame des Originalvideos anzuzeigen, während `c2` zur Darstellung des Videos nach dem Chroma-Keying-Effekt verwendet wird; `c2` ist mit dem Standbild vorab geladen, das zur Ersetzung des grünen Hintergrunds im Video verwendet wird.
2. Der JavaScript-Code wird aus einem Skript namens `processor.js` importiert.

## Der JavaScript-Code

Der JavaScript-Code in `processor.js` besteht aus drei Methoden.

### Initialisierung des Chroma-Key-Players

Die Methode `doLoad()` wird aufgerufen, wenn das HTML-Dokument initial geladen wird. Diese Methode bereitet die Variablen vor, die für den Chroma-Key-Verarbeitungs-Code benötigt werden, und richtet einen Event-Listener ein, um zu erkennen, wann der Benutzer das Video abspielt.

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

Dieser Code greift auf die im HTML-Dokument besonders interessierenden Elemente zu, insbesondere das `video`-Element und die zwei `canvas`-Elemente. Er holt auch die Referenzen zu den Grafik-Kontexten der beiden Canvases. Diese werden verwendet, wenn wir tatsächlich den Chroma-Keying-Effekt durchführen.

Dann wird `addEventListener()` aufgerufen, um das `video`-Element zu beobachten, damit wir eine Benachrichtigung erhalten, wenn der Benutzer die Wiedergabetaste für das Video drückt. Als Reaktion auf den Beginn der Wiedergabe durch den Benutzer holt dieser Code die Breite und Höhe des Videos, halbiert jede (wir werden die Größe des Videos halbieren, wenn wir den Chroma-Keying-Effekt durchführen), und ruft dann die Methode `timerCallback()` auf, um das Video zu beobachten und den visuellen Effekt zu berechnen.

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

Das erste, was der Callback macht, ist zu prüfen, ob das Video überhaupt läuft; wenn nicht, kehrt der Callback sofort ohne weitere Aktionen zurück.

Dann ruft es die Methode `computeFrame()` auf, die den Chroma-Keying-Effekt auf dem aktuellen Videoframe durchführt.

Die letzte Aktion des Callbacks ist der Aufruf von `setTimeout()`, um sich selbst so schnell wie möglich erneut aufzurufen. In der realen Welt würden Sie dies wahrscheinlich basierend auf dem Wissen über die Bildrate des Videos planen.

### Manipulieren der Videoframe-Daten

Die Methode `computeFrame()`, die unten gezeigt wird, ist verantwortlich dafür, tatsächlich einen Frame von Daten abzurufen und den Chroma-Keying-Effekt durchzuführen.

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

Dieser Videoframe wird in den Grafik-Kontext `ctx1` des ersten Canvas kopiert, wobei als Höhe und Breite die zuvor gespeicherten Werte angegeben werden, um den Frame in halber Größe zu zeichnen. Beachten Sie, dass Sie das Videoelement in die Methode `drawImage()` des Kontexts übergeben können, um den aktuellen Videoframe in den Kontext zu zeichnen. Das Ergebnis sieht so aus:

![Ein einzelner Frame des Videoelements. Es gibt eine Person, die ein schwarzes T-Shirt trägt. Die Hintergrundfarbe ist gelb. Dies ist eine kleinere Version des Bildes oben.](sourcectx.png)

Der Aufruf der Methode `getImageData()` auf dem ersten Kontext holt eine Kopie der Rohgrafikdaten für den aktuellen Videoframe. Dies liefert rohe 32-Bit-Pixelbilddaten, die wir dann manipulieren können. Wir berechnen dann die Anzahl der Pixel im Bild, indem wir die Gesamtgröße der Bilddaten des Frames durch vier teilen.

Die `for`-Schleife durchläuft die Pixel des Frames, extrahiert die Rot-, Grün- und Blauwerte für jedes Pixel und vergleicht die Werte mit vorbestimmten Zahlen, die verwendet werden, um den grünen Bildschirm zu erkennen, der durch das importierte Standbild `foo.png` ersetzt wird.

Jedes Pixel in den Bilddaten des Frames, das sich innerhalb der Parameter befindet, die als Teil des grünen Bildschirms betrachtet werden, erhält einen Alphawert von null, was bedeutet, dass das Pixel vollständig transparent ist. Dadurch wird das gesamte Grünbildschirmbereich des endgültigen Bildes zu 100 % transparent, sodass es beim Zeichnen in den Zielkontext mit `ctx2.putImageData` zu einer Überlagerung auf den statischen Hintergrund wird.

Das resultierende Bild sieht so aus:

![Ein einzelner Frame des Videoelements zeigt dieselbe Person, die ein schwarzes T-Shirt trägt, wie auf den Fotos oben. Der Hintergrund ist anders: es ist das Firefox-Logo.](output.png)

Dies wird wiederholt, während das Video abgespielt wird, sodass Frame für Frame mit dem Chroma-Key-Effekt verarbeitet und angezeigt wird.

[Den gesamten Quellcode für dieses Beispiel ansehen](https://github.com/mdn/dom-examples/tree/main/canvas/chroma-keying).

## Siehe auch

- [Webmedientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats)
- [Lernbereich: HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
