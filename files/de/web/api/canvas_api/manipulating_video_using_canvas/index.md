---
title: Bearbeiten von Videos mit Canvas
slug: Web/API/Canvas_API/Manipulating_video_using_canvas
l10n:
  sourceCommit: 23e1a97d50050a3b3518a4b2f67ccf42e5fd75b7
---

{{DefaultAPISidebar("Canvas API")}}

Indem Sie die Fähigkeiten des [`video`](/de/docs/Web/HTML/Element/video)-Elements mit einem [`canvas`](/de/docs/Web/HTML/Element/canvas) kombinieren, können Sie Videodaten in Echtzeit manipulieren, um eine Vielzahl visueller Effekte in das angezeigte Video zu integrieren. Dieses Tutorial demonstriert, wie man Chroma-Keying (auch bekannt als "Green Screen-Effekt") mit JavaScript-Code durchführt.

{{EmbedGHLiveSample('dom-examples/canvas/chroma-keying/index.html', 700, 400) }}

## Der Dokumentinhalt

Das HTML-Dokument, das zum Rendern dieses Inhalts verwendet wird, ist unten gezeigt.

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

Die wichtigsten Punkte, die zu beachten sind:

1. Dieses Dokument legt zwei [`canvas`](/de/docs/Web/HTML/Element/canvas)-Elemente mit den IDs `c1` und `c2` an. Canvas `c1` wird verwendet, um den aktuellen Frame des Originalvideos anzuzeigen, während `c2` das Video nach der Durchführung des Chroma-Key-Effekts anzeigt; `c2` ist vorab mit dem Standbild geladen, das verwendet wird, um den grünen Hintergrund im Video zu ersetzen.
2. Der JavaScript-Code wird aus einem Skript namens `processor.js` importiert.

## Der JavaScript-Code

Der JavaScript-Code in `processor.js` besteht aus drei Methoden.

### Initialisierung des Chroma-Key-Players

Die `doLoad()`-Methode wird aufgerufen, wenn das HTML-Dokument initial geladen wird. Die Aufgabe dieser Methode besteht darin, die Variablen, die vom Chroma-Key-Verarbeitungscode benötigt werden, vorzubereiten und einen Ereignislistener einzurichten, damit wir erkennen können, wann der Benutzer mit dem Abspielen des Videos beginnt.

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

Dieser Code erfasst Referenzen zu den Elementen im HTML-Dokument, die von besonderem Interesse sind, nämlich dem `video`-Element und den beiden `canvas`-Elementen. Er ruft auch Referenzen zu den Grafik-Kontexten für jedes der beiden Canvas ab. Diese werden verwendet, wenn wir tatsächlich den Chroma-Key-Effekt durchführen.

Dann wird `addEventListener()` aufgerufen, um das `video`-Element zu beobachten, sodass wir benachrichtigt werden, wenn der Benutzer die Wiedergabetaste auf dem Video drückt. Als Reaktion darauf, dass der Benutzer die Wiedergabe startet, holt dieser Code die Breite und Höhe des Videos ab, halbiert diese jeweils (wir werden die Größe des Videos halbieren, wenn wir den Chroma-Key-Effekt durchführen), und ruft dann die `timerCallback()`-Methode auf, um mit dem Beobachten des Videos und Berechnen des visuellen Effekts zu beginnen.

### Der Timer-Callback

Der Timer-Callback wird zunächst aufgerufen, wenn das Video zu spielen beginnt (wenn das „play“-Ereignis eintritt), und übernimmt dann die Verantwortung dafür, sich selbst regelmäßig aufzurufen, um den Keying-Effekt für jeden Frame auszulösen.

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

Das Erste, was der Callback tut, ist zu überprüfen, ob das Video überhaupt spielt; wenn nicht, gibt der Callback sofort zurück, ohne etwas zu tun.

Dann ruft er die `computeFrame()`-Methode auf, die den Chroma-Key-Effekt auf den aktuellen Videoframe anwendet.

Zuletzt ruft der Callback `setTimeout()` auf, um sich selbst einzuplanen, so bald wie möglich erneut aufgerufen zu werden. In der realen Welt würden Sie dies wahrscheinlich basierend auf dem Wissen über die Bildrate des Videos planen.

### Bearbeiten der Videoframedaten

Die `computeFrame()`-Methode, die unten gezeigt wird, ist dafür verantwortlich, tatsächlich einen Frame von Daten zu holen und den Chroma-Key-Effekt durchzuführen.

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

![Ein einzelner Frame des Video-Elements. Da ist eine Person, die ein schwarzes T-Shirt trägt. Die Hintergrundfarbe ist gelb.](video.png)

Dieser Frame des Videos wird in den Grafik-Kontext `ctx1` des ersten Canvas kopiert, wobei als Höhe und Breite die zuvor gespeicherten Werte verwendet werden, um den Frame in halber Größe zu zeichnen. Beachten Sie, dass Sie das Videoelement in die `drawImage()`-Methode des Kontexts übergeben können, um den aktuellen Videoframe in den Kontext zu zeichnen. Das Ergebnis ist:

![Ein einzelner Frame des Video-Elements. Da ist eine Person, die ein schwarzes T-Shirt trägt. Die Hintergrundfarbe ist gelb. Dies ist eine kleinere Version des obigen Bildes.](sourcectx.png)

Der Aufruf der `getImageData()`-Methode auf dem ersten Kontext ruft eine Kopie der rohen Grafikdaten für den aktuellen Videoframe ab. Dies liefert rohe 32-Bit-Pixel-Bilddaten, die wir dann manipulieren können. Wir berechnen dann die Anzahl der Pixel im Bild, indem wir die Gesamtgröße der Bilddaten des Frames durch vier teilen.

Die `for`-Schleife durchsucht die Pixel des Frames, extrahiert die Rot-, Grün- und Blauwerte für jedes Pixel und vergleicht die Werte mit vorbestimmten Zahlen, die verwendet werden, um den grünen Bildschirm zu erkennen, der mit dem Standbildhintergrund aus `foo.png` ersetzt wird.

Bei jedem Pixel in den Bilddaten des Frames, das innerhalb der Parameter liegt, die als Teil des grünen Bildschirms angesehen werden, wird der Alpha-Wert durch null ersetzt, was anzeigt, dass das Pixel vollständig transparent ist. Dadurch wird das endgültige Bild komplett transparent im Bereich des grünen Bildschirms, sodass es, wenn es in den Zielkontext mit `ctx2.putImageData` gezeichnet wird, eine Überlagerung auf den statischen Hintergrund ergibt.

Das resultierende Bild sieht so aus:

![Ein einzelner Frame des Video-Elements zeigt dieselbe Person, die ein schwarzes T-Shirt trägt, wie in den obigen Fotos. Der Hintergrund ist anders: es ist das Firefox-Logo.](output.png)

Dies wird wiederholt ausgeführt, während das Video abgespielt wird, sodass Frame für Frame mit dem Chroma-Key-Effekt verarbeitet und angezeigt wird.

[Den vollständigen Quellcode für dieses Beispiel ansehen](https://github.com/mdn/dom-examples/tree/main/canvas/chroma-keying).

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Formats)
- [Lernbereich: Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
