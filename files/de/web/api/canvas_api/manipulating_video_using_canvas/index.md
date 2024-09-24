---
title: Manipulieren von Video mit Canvas
slug: Web/API/Canvas_API/Manipulating_video_using_canvas
l10n:
  sourceCommit: 23e1a97d50050a3b3518a4b2f67ccf42e5fd75b7
---

{{DefaultAPISidebar("Canvas API")}}

Durch die Kombination der Fähigkeiten des [`video`](/de/docs/Web/HTML/Element/video)-Elements mit einem [`canvas`](/de/docs/Web/HTML/Element/canvas) können Sie Videodaten in Echtzeit manipulieren, um eine Vielzahl von visuellen Effekten in das angezeigte Video zu integrieren. Dieses Tutorial demonstriert, wie Sie Chroma-Keying (auch bekannt als "Green Screen Effekt") mithilfe von JavaScript-Code durchführen.

{{EmbedGHLiveSample('dom-examples/canvas/chroma-keying/index.html', 700, 400) }}

## Der Dokumentinhalt

Das HTML-Dokument, das verwendet wird, um diesen Inhalt darzustellen, ist unten gezeigt.

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

Die wesentlichen Punkte, die Sie mitnehmen sollten, sind:

1. Dieses Dokument setzt zwei [`canvas`](/de/docs/Web/HTML/Element/canvas)-Elemente mit den IDs `c1` und `c2`. Canvas `c1` wird verwendet, um den aktuellen Frame des Originalvideos anzuzeigen, während `c2` verwendet wird, um das Video nach der Durchführung des Chroma-Keying-Effekts anzuzeigen; `c2` ist mit dem Standbild vorab geladen, das verwendet wird, um den grünen Hintergrund im Video zu ersetzen.
2. Der JavaScript-Code wird von einem Skript namens `processor.js` importiert.

## Der JavaScript-Code

Der JavaScript-Code in `processor.js` besteht aus drei Methoden.

### Initialisierung des Chroma-Key-Players

Die `doLoad()`-Methode wird aufgerufen, wenn das HTML-Dokument zunächst geladen wird. Diese Methode hat die Aufgabe, die Variablen vorzubereiten, die vom Chroma-Key-Verarbeitungscode benötigt werden, und einen Event-Listener einzurichten, damit wir erkennen können, wann der Benutzer beginnt, das Video abzuspielen.

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

Dieser Code greift auf die Elemente im HTML-Dokument zurück, die von besonderem Interesse sind, nämlich das `video`-Element und die beiden `canvas`-Elemente. Er holt sich auch Referenzen auf die Grafik-Kontexte für jedes der beiden Canvas-Elemente. Diese werden verwendet, wenn wir tatsächlich den Chroma-Keying-Effekt durchführen.

Dann wird `addEventListener()` aufgerufen, um das `video`-Element zu beobachten, damit wir benachrichtigt werden, wenn der Benutzer die Wiedergabetaste für das Video drückt. Als Antwort auf das Starten der Wiedergabe des Benutzers holt sich dieser Code die Breite und Höhe des Videos, halbiert diese jeweils (wir werden die Größe des Videos halbieren, wenn wir den Chroma-Keying-Effekt ausführen), und ruft dann die `timerCallback()`-Methode auf, um das Video zu beobachten und den visuellen Effekt zu berechnen.

### Der Timer-Rückruf

Der Timer-Rückruf wird initial aufgerufen, wenn das Video zu spielen beginnt (wenn das "play"-Ereignis eintritt), und übernimmt dann die Verantwortung dafür, sich selbst regelmäßig aufzurufen, um den Keying-Effekt für jeden Frame zu initiieren.

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

Das erste, was der Rückruf macht, ist, zu prüfen, ob das Video überhaupt abgespielt wird; wenn nicht, kehrt der Rückruf sofort zurück, ohne etwas zu tun.

Dann ruft es die `computeFrame()`-Methode auf, die den Chroma-Keying-Effekt auf den aktuellen Videoframe anwendet.

Das letzte, was der Rückruf macht, ist `setTimeout()` aufzurufen, um sich selbst so schnell wie möglich wieder aufzurufen. In der realen Welt würden Sie dies wahrscheinlich basierend auf dem Kenntnisstand der Bildrate des Videos planen.

### Manipulation der Videoframedaten

Die `computeFrame()`-Methode, die unten gezeigt wird, ist dafür verantwortlich, tatsächlich einen Frame von Daten abzurufen und den Chroma-Keying-Effekt durchzuführen.

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

Wenn diese Routine aufgerufen wird, zeigt das Video-Element den neuesten Frame der Videodaten an, der so aussieht:

![Ein einzelner Frame des Videoelements. Eine Person trägt ein schwarzes T-Shirt. Die Hintergrundfarbe ist gelb.](video.png)

Dieser Videoframe wird in den Grafik-Kontext `ctx1` des ersten Canvas kopiert, wobei als Höhe und Breite die Werte angegeben werden, die wir vorher gespeichert haben, um den Frame in halber Größe darzustellen. Beachten Sie, dass Sie das Videoelement in die `drawImage()`-Methode des Kontexts übergeben können, um den aktuellen Videoframe in den Kontext zu zeichnen. Das Ergebnis ist:

![Ein einzelner Frame des Videoelements. Eine Person trägt ein schwarzes T-Shirt. Die Hintergrundfarbe ist gelb. Dies ist eine kleinere Version des obigen Bildes.](sourcectx.png)

Durch den Aufruf der Methode `getImageData()` auf dem ersten Kontext wird eine Kopie der rohen Grafikdaten für den aktuellen Videoframe abgerufen. Dies liefert rohe 32-Bit-Pixel-Bilddaten, die wir dann manipulieren können. Wir berechnen dann die Anzahl der Pixel im Bild, indem wir die Gesamtgröße der Bilddaten des Frames durch vier teilen.

Die `for`-Schleife scannt die Pixel des Frames, zieht die roten, grünen und blauen Werte für jedes Pixel heraus und vergleicht die Werte mit vorher festgelegten Zahlen, die zum Erkennen des Green Screens verwendet werden, der durch das importierte Standbild `foo.png` ersetzt wird.

Jedes Pixel in den Bilddaten des Frames, das innerhalb der Parameter gefunden wird, die als Teil des Green Screens betrachtet werden, erhält einen Alpha-Wert von null, was bedeutet, dass das Pixel vollständig transparent ist. Dadurch hat das endgültige Bild den gesamten Green Screen-Bereich mit 100%iger Transparenz, sodass es beim Zeichnen in den Zielkontext mit `ctx2.putImageData` als Überlagerung auf den statischen Hintergrund dargestellt wird.

Das resultierende Bild sieht folgendermaßen aus:

![Ein einzelner Frame des Videoelements zeigt dieselbe Person mit einem schwarzen T-Shirt wie in den obigen Fotos. Der Hintergrund ist anders: Er ist das Firefox-Logo.](output.png)

Dies wird wiederholt durchgeführt, während das Video abgespielt wird, sodass Frame für Frame verarbeitet und mit dem Chroma-Key-Effekt angezeigt wird.

[Sehen Sie sich den vollständigen Quellcode für dieses Beispiel an](https://github.com/mdn/dom-examples/tree/main/canvas/chroma-keying).

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Formats)
- [Lernbereich: Video- und Audioinhalte](/de/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
