---
title: Manipulation von Video mit Canvas
slug: Web/API/Canvas_API/Manipulating_video_using_canvas
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{DefaultAPISidebar("Canvas API")}}

Indem Sie die Fähigkeiten des [`video`](/de/docs/Web/HTML/Reference/Elements/video)-Elements mit einem [`canvas`](/de/docs/Web/HTML/Reference/Elements/canvas) kombinieren, können Sie Videodaten in Echtzeit manipulieren, um eine Vielzahl von visuellen Effekten auf das angezeigte Video anzuwenden. Dieses Tutorial zeigt, wie man mit JavaScript-Code Chroma-Keying (auch bekannt als "Green Screen-Effekt") durchführt.

{{EmbedGHLiveSample('dom-examples/canvas/chroma-keying/index.html', 700, 400) }}

## Der Dokumentinhalt

Das HTML-Dokument, das für die Darstellung dieses Inhalts verwendet wird, ist unten gezeigt.

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

Die Schlüsselstellen, die Sie beachten sollten, sind:

1. Dieses Dokument enthält zwei [`canvas`](/de/docs/Web/HTML/Reference/Elements/canvas)-Elemente, mit den IDs `c1` und `c2`. Canvas `c1` wird verwendet, um das aktuelle Frame des Originalvideos anzuzeigen, während `c2` dazu genutzt wird, das Video nach der Anwendung des Chroma-Keying-Effekts darzustellen; `c2` wird mit dem statischen Bild vorab geladen, das verwendet wird, um den grünen Hintergrund im Video zu ersetzen.
2. Der JavaScript-Code wird aus einem Skript namens `processor.js` importiert.

## Der JavaScript-Code

Der JavaScript-Code in `processor.js` besteht aus drei Methoden.

### Initialisierung des Chroma-Key-Players

Die Methode `doLoad()` wird aufgerufen, wenn das HTML-Dokument zunächst geladen wird. Die Aufgabe dieser Methode ist es, die für den Chroma-Keying-Prozess benötigten Variablen vorzubereiten und einen Ereignislistener einzurichten, um festzustellen, wann der Benutzer beginnt, das Video abzuspielen.

```js
const processor = {};

processor.doLoad = function doLoad() {
  const video = document.getElementById("video");
  this.video = video;

  this.c1 = document.getElementById("c1");
  this.ctx1 = this.c1.getContext("2d");

  this.c2 = document.getElementById("c2");
  this.ctx2 = this.c2.getContext("2d");

  video.addEventListener("play", () => {
    this.width = video.videoWidth / 2;
    this.height = video.videoHeight / 2;
    this.timerCallback();
  });
};
```

Dieser Code erfasst Referenzen zu den Elementen im HTML-Dokument, die von besonderem Interesse sind, nämlich das `video`-Element und die beiden `canvas`-Elemente. Darüber hinaus werden Referenzen zu den Grafikkontexten für jedes der beiden Canvas abgeholt. Diese werden verwendet, wenn wir tatsächlich den Chroma-Keying-Effekt durchführen.

Dann wird `addEventListener()` aufgerufen, um das `video`-Element zu beobachten, damit wir eine Benachrichtigung erhalten, wenn der Benutzer die Wiedergabetaste des Videos drückt. Als Reaktion auf den Beginn der Wiedergabe durch den Benutzer ruft dieser Code die Breite und Höhe des Videos ab, halbiert jede (wir werden die Größe des Videos halbieren, wenn wir den Chroma-Keying-Effekt durchführen), und ruft dann die Methode `timerCallback()` auf, um zu beginnen, das Video zu beobachten und den visuellen Effekt zu berechnen.

### Der Timer-Callback

Der Timer-Callback wird zunächst aufgerufen, wenn das Video zu spielen beginnt (wenn das "play"-Ereignis eintritt), übernimmt dann die Verantwortung, sich so zu etablieren, dass er regelmäßig aufgerufen wird, um den Keying-Effekt für jedes Frame zu starten.

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

Das erste, was der Callback macht, ist zu überprüfen, ob das Video überhaupt läuft; wenn nicht, gibt der Callback sofort zurück, ohne etwas zu tun.

Dann ruft es die Methode `computeFrame()` auf, die den Chroma-Keying-Effekt auf das aktuelle Videoframe anwendet.

Das Letzte, was der Callback macht, ist `setTimeout()` aufzurufen, um sein erneutes Aufrufen so bald wie möglich zu planen. In der realen Welt würden Sie dies wahrscheinlich basierend auf dem Wissen über die Framerate des Videos zeitlich planen.

### Manipulation der Videoframedaten

Die Methode `computeFrame()`, die unten dargestellt ist, ist verantwortlich dafür, tatsächlich ein Frame von Daten abzurufen und den Chroma-Keying-Effekt durchzuführen.

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

Wenn diese Routine aufgerufen wird, zeigt das Videoelement das neueste Frame der Videodaten an, das folgendermaßen aussieht:

![Ein einzelnes Frame des Videoelements. Es ist eine Person in einem schwarzen T-Shirt zu sehen. Die Hintergrundfarbe ist gelb.](video.png)

Dieses Videoframe wird in den Grafikkontext `ctx1` des ersten Canvas kopiert, wobei als Höhe und Breite die zuvor gespeicherten Werte angegeben werden, um das Frame in halber Größe zu zeichnen. Beachten Sie, dass Sie das Videoelement an die Methode `drawImage()` des Kontexts übergeben können, um das aktuelle Videoframe in den Kontext zu zeichnen. Das Ergebnis ist:

![Ein einzelnes Frame des Videoelements. Es ist eine Person in einem schwarzen T-Shirt zu sehen. Die Hintergrundfarbe ist gelb. Dies ist eine kleinere Version des Bildes oben.](sourcectx.png)

Das Aufrufen der Methode `getImageData()` auf dem ersten Kontext holt eine Kopie der Rohgrafikdaten für das aktuelle Videoframe. Dies liefert rohe 32-Bit-Pixeldaten, die wir dann manipulieren können. Wir berechnen dann die Anzahl der Pixel im Bild, indem wir die Gesamtgröße der Bilddaten des Frames durch vier teilen.

Die `for`-Schleife durchsucht die Pixel des Frames, extrahiert die Rot-, Grün- und Blau-Werte für jedes Pixel und vergleicht die Werte mit vordefinierten Zahlen, die verwendet werden, um den grünen Bildschirm zu erkennen, der durch das statische Hintergrundbild aus `foo.png` ersetzt wird.

Jedes Pixel in den Bilddaten des Frames, das innerhalb der Parameter gefunden wird, die als Teil des grünen Bildschirms betrachtet werden, erhält einen neuen Alphawert von Null, was bedeutet, dass das Pixel vollständig transparent ist. Daher ist das Endbild im gesamten Bereich des grünen Bildschirms zu 100% transparent, sodass, wenn es mit `ctx2.putImageData` in den Zielkontext gezeichnet wird, das Ergebnis eine Überlagerung auf den statischen Hintergrund ist.

Das resultierende Bild sieht folgendermaßen aus:

![Ein einzelnes Frame des Videoelements zeigt dieselbe Person in einem schwarzen T-Shirt wie auf den oben genannten Fotos. Der Hintergrund ist anders: Es ist das Firefox-Logo.](output.png)

Dies wird wiederholt, während das Video abgespielt wird, sodass Frame für Frame verarbeitet und mit dem Chroma-Key-Effekt angezeigt wird.

[Sehen Sie sich den vollständigen Quellcode für dieses Beispiel an](https://github.com/mdn/dom-examples/tree/main/canvas/chroma-keying).

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen und Formaten im Web](/de/docs/Web/Media/Guides/Formats)
- [Lernbereich: HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
