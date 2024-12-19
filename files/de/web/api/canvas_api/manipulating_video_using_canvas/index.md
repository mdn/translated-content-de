---
title: Manipulieren von Videos mit Canvas
slug: Web/API/Canvas_API/Manipulating_video_using_canvas
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{DefaultAPISidebar("Canvas API")}}

Indem Sie die Fähigkeiten des [`video`](/de/docs/Web/HTML/Element/video)-Elements mit einem [`canvas`](/de/docs/Web/HTML/Element/canvas) kombinieren, können Sie Videodaten in Echtzeit manipulieren, um eine Vielzahl von visuellen Effekten in das angezeigte Video zu integrieren. Dieses Tutorial demonstriert, wie Sie mit JavaScript-Code Chroma-Keying (auch bekannt als "Grüner Bildschirmeffekt") durchführen können.

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

Wichtige Punkte, die Sie mitnehmen sollten, sind:

1. Dieses Dokument erstellt zwei [`canvas`](/de/docs/Web/HTML/Element/canvas)-Elemente mit den IDs `c1` und `c2`. Canvas `c1` wird verwendet, um das aktuelle Bild des Originalvideos anzuzeigen, während `c2` verwendet wird, um das Video nach der Durchführung des Chroma-Keyings anzuzeigen; `c2` ist mit dem Standbild vorab geladen, das verwendet wird, um den grünen Hintergrund im Video zu ersetzen.
2. Der JavaScript-Code wird von einem Skript namens `processor.js` importiert.

## Der JavaScript-Code

Der JavaScript-Code in `processor.js` besteht aus drei Methoden.

### Initialisierung des Chroma-Key-Players

Die `doLoad()`-Methode wird aufgerufen, wenn das HTML-Dokument initial geladen wird. Diese Methode hat die Aufgabe, die Variablen vorzubereiten, die von dem Chroma-Key-Verarbeitungscode benötigt werden, und einen Ereignislistener einzurichten, damit wir erkennen können, wenn der Benutzer das Abspielen des Videos startet.

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

Dieser Code holt Referenzen zu den Elementen im HTML-Dokument, die von besonderem Interesse sind, nämlich dem `video`-Element und den beiden `canvas`-Elementen. Er holt auch Referenzen auf die Grafikkontexte für jedes der beiden Canvas. Diese werden verwendet, wenn wir tatsächlich den Chroma-Keying-Effekt durchführen.

Dann wird `addEventListener()` aufgerufen, um das `video`-Element zu überwachen, so dass wir eine Benachrichtigung erhalten, wenn der Benutzer die Wiedergabetaste des Videos drückt. In Antwort auf die beginnende Wiedergabe ruft dieser Code die Breite und Höhe des Videos ab und halbiert jeweils (wir werden die Größe des Videos halbieren, wenn wir den Chroma-Keying-Effekt durchführen), und ruft dann die Methode `timerCallback()` auf, um das Video zu überwachen und den visuellen Effekt zu berechnen.

### Der Timer-Callback

Der Timer-Callback wird initial aufgerufen, wenn das Video zu spielen beginnt (wenn das "play"-Ereignis eintritt), und übernimmt dann die Verantwortung, sich selbst regelmäßig aufzurufen, um den Keying-Effekt für jedes Frame zu starten.

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

Das Erste, was der Callback tut, ist zu überprüfen, ob das Video überhaupt abgespielt wird; wenn nicht, kehrt der Callback sofort zurück, ohne etwas zu tun.

Dann ruft er die Methode `computeFrame()` auf, die den Chroma-Keying-Effekt auf dem aktuellen Videoframe durchführt.

Das Letzte, was der Callback tut, ist, `setTimeout()` aufzurufen, um sich selbst so schnell wie möglich erneut aufzurufen. In der realen Welt würden Sie dies wahrscheinlich basierend auf dem Wissen um die Bildrate des Videos planen.

### Manipulieren der Videoframe-Daten

Die unten gezeigte `computeFrame()`-Methode ist dafür verantwortlich, tatsächlich ein Bild zu holen und den Chroma-Keying-Effekt durchzuführen.

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

Wenn diese Routine aufgerufen wird, zeigt das Video-Element den aktuellsten Frame von Videodaten an, der so aussieht:

![Ein einzelner Frame des Video-Elements. Es gibt eine Person, die ein schwarzes T-Shirt trägt. Die Hintergrundfarbe ist gelb.](video.png)

Dieser Videoframe wird in den Grafikkontext `ctx1` des ersten Canvas kopiert, wobei als Höhe und Breite die Werte verwendet werden, die wir zuvor gespeichert haben, um das Bild in halber Größe zu zeichnen. Beachten Sie, dass Sie das Video-Element in die `drawImage()`-Methode des Kontexts übergeben können, um den aktuellen Videoframe in den Kontext zu zeichnen. Das Ergebnis ist:

![Ein einzelner Frame des Video-Elements. Es gibt eine Person, die ein schwarzes T-Shirt trägt. Die Hintergrundfarbe ist gelb. Dies ist eine kleinere Version des obigen Bildes.](sourcectx.png)

Durch den Aufruf der Methode `getImageData()` auf dem ersten Kontext wird eine Kopie der Rohgrafikdaten für den aktuellen Videoframe geholt. Dies liefert rohe 32-Bit-Pixelbilddaten, die wir dann manipulieren können. Wir berechnen dann die Anzahl der Pixel im Bild, indem wir die Gesamtgröße der Bilddaten des Frames durch vier teilen.

Die `for`-Schleife durchsucht die Pixel des Frames, zieht die Rot-, Grün- und Blauwerte für jedes Pixel heraus und vergleicht die Werte mit vordefinierten Zahlen, die verwendet werden, um den grünen Bildschirm zu erkennen, der durch das Standbild `foo.png` ersetzt wird.

Jedes Pixel in den Bilddaten des Frames, das innerhalb der als Teil des grünen Bildschirms betrachteten Parameter gefunden wird, hat seinen Alpha-Wert auf null ersetzt, was darauf hinweist, dass das Pixel vollständig transparent ist. Das Resultat ist, dass das gesamte Grünbildschirmgebiet zu 100% transparent wird, sodass beim Zeichnen in den Zielkontext mit `ctx2.putImageData`, das Ergebnis eine Überlagerung auf dem statischen Hintergrund ist.

Das resultierende Bild sieht so aus:

![Ein einzelner Frame des Video-Elements zeigt dieselbe Person in einem schwarzen T-Shirt wie in den oben gezeigten Fotos. Der Hintergrund ist anders: es ist das Firefox-Logo.](output.png)

Dies wird wiederholt, während das Video abgespielt wird, sodass Frame für Frame verarbeitet und mit dem Chroma-Key-Effekt angezeigt wird.

[Den vollständigen Quelltext für dieses Beispiel ansehen](https://github.com/mdn/dom-examples/tree/main/canvas/chroma-keying).

## Siehe auch

- [Web-Medientechnologien](/de/docs/Web/Media)
- [Leitfaden zu Medientypen und -formaten im Web](/de/docs/Web/Media/Formats)
- [Lernbereich: HTML-Video und -Audio](/de/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
