---
title: Manipulieren von Video mit Canvas
slug: Web/API/Canvas_API/Manipulating_video_using_canvas
l10n:
  sourceCommit: 23e1a97d50050a3b3518a4b2f67ccf42e5fd75b7
---

{{DefaultAPISidebar("Canvas API")}}

Durch die Kombination der Fähigkeiten des [`video`](/de/docs/Web/HTML/Element/video)-Elements mit einem [`canvas`](/de/docs/Web/HTML/Element/canvas) können Sie Videodaten in Echtzeit manipulieren, um eine Vielzahl von visuellen Effekten in das angezeigte Video zu integrieren. Dieses Tutorial zeigt, wie man mit JavaScript-Code das Chroma-Keying (auch bekannt als "Green Screen Effekt") durchführt.

{{EmbedGHLiveSample('dom-examples/canvas/chroma-keying/index.html', 700, 400) }}

## Der Dokumentinhalt

Das HTML-Dokument, das für die Darstellung dieses Inhalts verwendet wird, wird unten gezeigt.

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

Die wichtigsten Punkte, die Sie mitnehmen sollten, sind:

1. Dieses Dokument stellt zwei [`canvas`](/de/docs/Web/HTML/Element/canvas)-Elemente mit den IDs `c1` und `c2` bereit. Canvas `c1` wird verwendet, um den aktuellen Frame des Originalvideos anzuzeigen, während `c2` verwendet wird, um das Video nach dem Chroma-Keying-Effekt darzustellen; `c2` ist mit dem Standbild vorab geladen, das verwendet wird, um den grünen Hintergrund im Video zu ersetzen.
2. Der JavaScript-Code wird aus einem Skript namens `processor.js` importiert.

## Der JavaScript-Code

Der JavaScript-Code in `processor.js` besteht aus drei Methoden.

### Initialisierung des Chroma-Key-Players

Die Methode `doLoad()` wird aufgerufen, wenn das HTML-Dokument initial geladen wird. Die Aufgabe dieser Methode besteht darin, die Variablen vorzubereiten, die vom Chroma-Key-Verarbeitungscode benötigt werden, und einen Ereignis-Listener einzurichten, damit wir erkennen können, wann der Benutzer das Video abspielt.

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

Dieser Code ruft Referenzen zu den Elementen im HTML-Dokument ab, die von besonderem Interesse sind, nämlich das `video`-Element und die beiden `canvas`-Elemente. Es werden auch Referenzen zu den Grafik-Kontexten für jedes der beiden Canvas-Elemente abgerufen. Diese werden verwendet, wenn wir tatsächlich den Chroma-Keying-Effekt durchführen.

Dann wird `addEventListener()` aufgerufen, um das `video`-Element zu beobachten, damit wir benachrichtigt werden, wenn der Benutzer die Wiedergabeschaltfläche des Videos drückt. Als Reaktion auf den Beginn der Wiedergabe durch den Benutzer ruft dieser Code die Breite und Höhe des Videos ab, halbiert sie jeweils (wir werden die Größe des Videos halbieren, wenn wir den Chroma-Keying-Effekt durchführen), und ruft dann die Methode `timerCallback()` auf, um das Video zu beobachten und den visuellen Effekt zu berechnen.

### Der Timer-Callback

Der Timer-Callback wird zunächst aufgerufen, wenn das Video beginnt abzuspielen (wenn das "play"-Ereignis auftritt), und übernimmt dann die Verantwortung dafür, sich selbst periodisch aufzurufen, um den Keying-Effekt für jeden Frame auszuführen.

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

Das Erste, was der Callback tut, ist zu überprüfen, ob das Video überhaupt abgespielt wird; wenn nicht, gibt der Callback sofort zurück, ohne etwas zu tun.

Dann wird die Methode `computeFrame()` aufgerufen, die den Chroma-Keying-Effekt auf den aktuellen Videoframe anwendet.

Das Letzte, was der Callback tut, ist `setTimeout()` aufzurufen, um sich selbst so schnell wie möglich neu zu planen. In der realen Welt würden Sie dies wahrscheinlich auf der Grundlage der Kenntnisse über die Bildrate des Videos planen.

### Manipulation der Videodaten

Die folgende Methode `computeFrame()` ist dafür verantwortlich, tatsächlich einen Videoframe abzurufen und den Chroma-Keying-Effekt anzuwenden.

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

![Ein einzelner Frame des Video-Elements. Eine Person trägt ein schwarzes T-Shirt. Die Hintergrundfarbe ist gelb.](video.png)

Dieser Videoframe wird in den Grafik-Kontext `ctx1` des ersten Canvas kopiert, wobei als Höhe und Breite die Werte angegeben werden, die wir zuvor gespeichert haben, um den Frame in halber Größe zu zeichnen. Beachten Sie, dass Sie das Videoelement in die Methode `drawImage()` des Kontexts übergeben können, um den aktuellen Videoframe in den Kontext zu zeichnen. Das Ergebnis ist:

![Ein einzelner Frame des Video-Elements. Eine Person trägt ein schwarzes T-Shirt. Die Hintergrundfarbe ist gelb. Dies ist eine kleinere Version des vorherigen Bildes.](sourcectx.png)

Das Aufrufen der Methode `getImageData()` auf dem ersten Kontext holt eine Kopie der rohen Grafikdaten für den aktuellen Videoframe ab. Dies liefert rohe 32-Bit-Pixel-Bilddaten, die wir dann manipulieren können. Wir berechnen die Anzahl der Pixel im Bild, indem wir die Gesamtgröße der Bilddaten des Frames durch vier teilen.

Die `for`-Schleife durchläuft die Pixel des Frames, extrahiert die Rot-, Grün- und Blauwerte jedes Pixels und vergleicht die Werte mit vorbestimmten Zahlen, die verwendet werden, um den Greenscreen zu erkennen, der durch das importierte Standbild `foo.png` ersetzt wird.

Jedes Pixel in den Bilddaten des Frames, das innerhalb der Parameter liegt, die als Teil des Greenscreens betrachtet werden, hat seinen Alphawert auf Null gesetzt, was bedeutet, dass das Pixel vollständig transparent ist. Dadurch ist das gesamte Greenscreen-Bereich des finalen Bildes zu 100 % transparent, sodass es beim Zeichnen in den Zielkontext mit `ctx2.putImageData` als Überlagerung auf den statischen Hintergrund dargestellt wird.

Das resultierende Bild sieht so aus:

![Ein einzelner Frame des Video-Elements zeigt dieselbe Person in einem schwarzen T-Shirt wie in den Fotos oben. Der Hintergrund ist anders: Er ist das Firefox-Logo.](output.png)

Dies wird fortlaufend während der Videowiedergabe wiederholt, sodass Frame für Frame mit dem Chroma-Key-Effekt verarbeitet und dargestellt wird.

[Den vollständigen Quellcode für dieses Beispiel ansehen](https://github.com/mdn/dom-examples/tree/main/canvas/chroma-keying).

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Formats)
- [Lernbereich: Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
