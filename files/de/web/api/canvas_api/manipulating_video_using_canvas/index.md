---
title: Video mit Canvas manipulieren
slug: Web/API/Canvas_API/Manipulating_video_using_canvas
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{DefaultAPISidebar("Canvas API")}}

Indem Sie die Fähigkeiten des [`video`](/de/docs/Web/HTML/Element/video)-Elements mit einem [`canvas`](/de/docs/Web/HTML/Element/canvas) kombinieren, können Sie Videodaten in Echtzeit manipulieren, um eine Vielzahl von visuellen Effekten in das angezeigte Video zu integrieren. Dieses Tutorial zeigt, wie Sie Chroma-Keying (auch bekannt als "Green-Screen-Effekt") mit JavaScript-Code durchführen können.

{{EmbedGHLiveSample('dom-examples/canvas/chroma-keying/index.html', 700, 400) }}

## Der Dokumentinhalt

Das HTML-Dokument, das zum Rendern dieses Inhalts verwendet wird, ist unten dargestellt.

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

Die wichtigsten Punkte, die Sie daraus mitnehmen sollten, sind:

1. Dieses Dokument legt zwei [`canvas`](/de/docs/Web/HTML/Element/canvas)-Elemente fest, mit den IDs `c1` und `c2`. Das Canvas `c1` wird verwendet, um das aktuelle Frame des Originalvideos anzuzeigen, während `c2` verwendet wird, um das Video nach der Durchführung des Chroma-Keying-Effekts anzuzeigen; `c2` ist mit dem Standbild vorbeladen, das verwendet wird, um den grünen Hintergrund im Video zu ersetzen.
2. Der JavaScript-Code wird aus einem Skript namens `processor.js` importiert.

## Der JavaScript-Code

Der JavaScript-Code in `processor.js` besteht aus drei Methoden.

### Initialisierung des Chroma-Key-Players

Die Methode `doLoad()` wird aufgerufen, wenn das HTML-Dokument initial geladen wird. Die Aufgabe dieser Methode besteht darin, die für den Chroma-Key-Verarbeitungs-Code benötigten Variablen vorzubereiten und einen Event-Listener einzurichten, sodass wir erkennen können, wann der Benutzer beginnt, das Video abzuspielen.

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

Dieser Code greift auf Referenzen zu den Elementen im HTML-Dokument zu, die von besonderem Interesse sind, nämlich das `video`-Element und die beiden `canvas`-Elemente. Er holt auch Referenzen auf die Grafik-Kontexte für jedes der beiden Canvas. Diese werden verwendet, wenn wir tatsächlich den Chroma-Keying-Effekt durchführen.

Dann wird `addEventListener()` aufgerufen, um das `video`-Element zu überwachen, damit wir eine Benachrichtigung erhalten, wenn der Benutzer die Wiedergabetaste im Video drückt. In Reaktion auf das Starten der Wiedergabe durch den Benutzer ruft dieser Code die Breite und Höhe des Videos ab, halbiert jeweils (wir werden die Größe des Videos halbieren, wenn wir den Chroma-Keying-Effekt durchführen), und ruft dann die Methode `timerCallback()` auf, um das Video zu überwachen und den visuellen Effekt zu berechnen.

### Der Timer-Callback

Der Timer-Callback wird initial aufgerufen, wenn das Video zu spielen beginnt (wenn das "play"-Ereignis eintritt), und übernimmt dann die Verantwortung, sich periodisch selbst aufzurufen, um den Keying-Effekt für jedes Frame zu starten.

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

Das erste, was der Callback tut, ist zu überprüfen, ob das Video überhaupt spielt; wenn nicht, kehrt der Callback sofort zurück, ohne etwas zu tun.

Dann ruft er die Methode `computeFrame()` auf, die den Chroma-Keying-Effekt auf dem aktuellen Videoframe durchführt.

Das letzte, was der Callback tut, ist, `setTimeout()` aufzurufen, um sich so schnell wie möglich erneut aufzurufen. In der realen Welt würden Sie dies wahrscheinlich basierend auf dem Wissen über die Bildrate des Videos planen.

### Manipulation der Videoframe-Daten

Die Methode `computeFrame()`, die unten gezeigt wird, ist dafür verantwortlich, tatsächlich ein Frame von Daten abzurufen und den Chroma-Keying-Effekt durchzuführen.

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

Wenn diese Routine aufgerufen wird, zeigt das Videoelement das aktuellste Frame der Videodaten an, das so aussieht:

![Ein einzelnes Frame des Videoelements. Eine Person trägt ein schwarzes T-Shirt. Die Hintergrundfarbe ist gelb.](video.png)

Dieses Videoframe wird in den Grafik-Kontext `ctx1` des ersten Canvas kopiert, wobei als Höhe und Breite die zuvor gespeicherten Werte angegeben werden, um das Frame in halber Größe zu zeichnen. Beachten Sie, dass Sie das Videoelement in die Methode `drawImage()` des Kontexts übergeben können, um das aktuelle Videoframe in den Kontext zu zeichnen. Das Ergebnis ist:

![Ein einzelnes Frame des Videoelements. Eine Person trägt ein schwarzes T-Shirt. Die Hintergrundfarbe ist gelb. Dies ist eine verkleinerte Version des obigen Bildes.](sourcectx.png)

Der Aufruf der Methode `getImageData()` auf dem ersten Kontext ruft eine Kopie der Roh-Grafikdaten für das aktuelle Videoframe ab. Dies liefert rohe 32-Bit-Pixelbilddaten, die wir dann manipulieren können. Wir berechnen dann die Anzahl der Pixel im Bild, indem wir die gesamte Größe der Bilddaten des Frames durch vier teilen.

Die `for`-Schleife durchläuft die Pixel des Frames, zieht die roten, grünen und blauen Werte für jedes Pixel heraus und vergleicht die Werte mit vorbestimmten Zahlen, die verwendet werden, um den Green Screen zu erkennen, der mit dem aus `foo.png` importierten Standbild ersetzt werden soll.

Jedes Pixel in den Bilddaten des Frames, das innerhalb der als Teil des Green Screens betrachteten Parameter gefunden wird, hat seinen Alpha-Wert auf null ersetzt, was darauf hinweist, dass das Pixel vollständig transparent ist. Dadurch wird das gesamte Green Screen-Bereich 100 % transparent, sodass, wenn es in den Zielkontext mit `ctx2.putImageData` gezeichnet wird, das Ergebnis ein Overlay auf den statischen Hintergrund bildet.

Das resultierende Bild sieht so aus:

![Ein einzelnes Frame des Videoelements zeigt dieselbe Person im schwarzen T-Shirt wie in den obigen Fotos. Der Hintergrund ist anders: Es ist das Firefox-Logo.](output.png)

Dies wird wiederholt, während das Video abgespielt wird, sodass Frame für Frame verarbeitet und mit dem Chroma-Keying-Effekt angezeigt wird.

[Vollständigen Quellcode für dieses Beispiel anzeigen](https://github.com/mdn/dom-examples/tree/main/canvas/chroma-keying).

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Guides/Formats)
- [Lernbereich: HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
