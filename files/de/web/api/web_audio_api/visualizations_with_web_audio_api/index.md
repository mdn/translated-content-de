---
title: Visualisierungen mit Web Audio API
slug: Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{DefaultAPISidebar("Web Audio API")}}

Eine der interessantesten Funktionen der Web Audio API ist die Fähigkeit, Frequenz-, Wellenform- und andere Daten aus Ihrer Audioquelle zu extrahieren, die dann zur Erstellung von Visualisierungen verwendet werden können. Dieser Artikel erklärt, wie das gemacht wird, und bietet einige grundlegende Anwendungsfälle.

> [!NOTE]
> Sie können funktionierende Beispiele für alle Code-Schnipsel in unserem [Voice-change-O-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/) Demo finden.

## Grundlegende Konzepte

Um Daten aus Ihrer Audioquelle zu extrahieren, benötigen Sie einen [`AnalyserNode`](/de/docs/Web/API/AnalyserNode), der mittels der Methode [`BaseAudioContext.createAnalyser`](/de/docs/Web/API/BaseAudioContext/createAnalyser) erstellt wird, zum Beispiel:

```js
const audioCtx = new AudioContext();
const analyser = audioCtx.createAnalyser();
```

Dieser Node wird dann an einem Punkt zwischen Ihrer Quelle und Ihrem Ziel mit Ihrer Audioquelle verbunden, zum Beispiel:

```js
const source = audioCtx.createMediaStreamSource(stream);
source.connect(analyser);
analyser.connect(distortion);
distortion.connect(audioCtx.destination);
```

> [!NOTE]
> Sie müssen den Ausgabeknoten des Analysators nicht mit einem anderen Knoten verbinden, damit er funktioniert, solange der Eingang mit der Quelle verbunden ist, entweder direkt oder über einen anderen Knoten.

Der Analyser Node erfasst dann Audiodaten unter Verwendung einer schnellen Fourier-Transformation (FFT) in einem bestimmten Frequenzbereich, abhängig von dem, was Sie als Wert für die Eigenschaft [`AnalyserNode.fftSize`](/de/docs/Web/API/AnalyserNode/fftSize) angeben (wenn kein Wert angegeben wird, ist der Standardwert 2048.)

> [!NOTE]
> Sie können auch einen minimalen und maximalen Leistungswert für den FFT-Daten-Skalierungsbereich mithilfe von [`AnalyserNode.minDecibels`](/de/docs/Web/API/AnalyserNode/minDecibels) und [`AnalyserNode.maxDecibels`](/de/docs/Web/API/AnalyserNode/maxDecibels) sowie unterschiedliche Datenmittelungs-Konstanten mit [`AnalyserNode.smoothingTimeConstant`](/de/docs/Web/API/AnalyserNode/smoothingTimeConstant) festlegen. Lesen Sie diese Seiten, um mehr Informationen über deren Nutzung zu bekommen.

Um Daten zu erfassen, müssen Sie die Methoden [`AnalyserNode.getFloatFrequencyData()`](/de/docs/Web/API/AnalyserNode/getFloatFrequencyData) und [`AnalyserNode.getByteFrequencyData()`](/de/docs/Web/API/AnalyserNode/getByteFrequencyData) für die Erfassung von Frequenzdaten sowie [`AnalyserNode.getByteTimeDomainData()`](/de/docs/Web/API/AnalyserNode/getByteTimeDomainData) und [`AnalyserNode.getFloatTimeDomainData()`](/de/docs/Web/API/AnalyserNode/getFloatTimeDomainData) für die Erfassung von Wellenformdaten verwenden.

Diese Methoden kopieren Daten in ein angegebenes Array, daher müssen Sie ein neues Array erstellen, um die Daten zu empfangen, bevor Sie eine der Methoden aufrufen. Die erste erzeugt 32-Bit-Gleitkommazahlen, die zweite und die dritte erzeugen 8-Bit-Unsigned-Integer, daher ist ein Standard-JavaScript-Array ungeeignet — Sie müssen ein {{jsxref("Float32Array")}} oder {{jsxref("Uint8Array")}} Array verwenden, abhängig von den Daten, die Sie verarbeiten.

Zum Beispiel, nehmen wir an, wir verwenden eine FFT-Größe von 2048. Wir geben den Wert von [`AnalyserNode.frequencyBinCount`](/de/docs/Web/API/AnalyserNode/frequencyBinCount) zurück, der die Hälfte der FFT ist, und rufen dann Uint8Array() mit frequencyBinCount als Längenargument auf - dies ist die Anzahl der Datenpunkte, die wir für diese FFT-Größe sammeln werden.

```js
analyser.fftSize = 2048;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);
```

Um die Daten tatsächlich abzurufen und in unser Array zu kopieren, rufen wir dann die gewünschte Datenerfassungsmethode auf, und übergeben das Array als Argument. Zum Beispiel:

```js
analyser.getByteTimeDomainData(dataArray);
```

Jetzt haben wir die Audiodaten für diesen Moment im Array erfasst und können sie visualisieren, wie wir möchten, zum Beispiel, indem wir sie auf einem HTML-{{ htmlelement("canvas") }} darstellen.

Schauen wir uns einige spezifische Beispiele an.

## Erstellung einer Wellenform/Oszilloskop

Um die Oszilloskop-Visualisierung zu erstellen (Dank an [Soledad Penadés](https://soledadpenades.com/) für den originalen Code in [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L142)), befolgen wir zunächst das Standardmuster, das im vorherigen Abschnitt beschrieben wurde, um den Puffer einzurichten:

```js
analyser.fftSize = 2048;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);
```

Als Nächstes leeren wir die Canvas von vorher gezeichnetem, um für das neue Visualisierungs-Display bereit zu sein:

```js
canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
```

Wir definieren nun die Funktion `draw()`:

```js
function draw() {
```

Hier nutzen wir `requestAnimationFrame()`, um die Zeichenfunktion weiterhin in einer Schleife auszuführen, sobald sie gestartet wurde:

```js
const drawVisual = requestAnimationFrame(draw);
```

Als Nächstes erfassen wir die Zeitdomänen-Daten und kopieren sie in unser Array

```js
analyser.getByteTimeDomainData(dataArray);
```

Füllen Sie zunächst die Canvas mit einer soliden Farbe

```js
canvasCtx.fillStyle = "rgb(200 200 200)";
canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
```

Legen Sie eine Linienbreite und eine Konturfarbe für die Welle, die wir zeichnen werden, fest und beginnen Sie dann, einen Pfad zu zeichnen.

```js
canvasCtx.lineWidth = 2;
canvasCtx.strokeStyle = "rgb(0 0 0)";
canvasCtx.beginPath();
```

Bestimmen Sie die Breite jedes Segments der zu zeichnenden Linie, indem Sie die Canvas-Breite durch die Array-Länge (wie zuvor durch FrequencyBinCount definiert) dividieren, und definieren Sie dann eine x-Variable, um die Position zu definieren, zu der sich die Linie für die Zeichnung jedes Segments bewegen soll.

```js
const sliceWidth = WIDTH / bufferLength;
let x = 0;
```

Jetzt führen wir eine Schleife durch, in der wir die Position eines kleinen Segments der Welle für jeden Punkt im Puffer bei einer bestimmten Höhe basierend auf dem Datenpunktwert aus dem Array definieren und die Linie an die Stelle bewegen, an der das nächste Wellensegment gezeichnet werden soll:

```js
for (let i = 0; i < bufferLength; i++) {
  const v = dataArray[i] / 128.0;
  const y = v * (HEIGHT / 2);

  if (i === 0) {
    canvasCtx.moveTo(x, y);
  } else {
    canvasCtx.lineTo(x, y);
  }

  x += sliceWidth;
}
```

Schließlich schließen wir die Linie in der Mitte der rechten Seite der Canvas ab und zeichnen dann die definierte Kontur:

```js
  canvasCtx.lineTo(WIDTH, HEIGHT / 2);
  canvasCtx.stroke();
}
```

Am Ende dieses Codeschnipsels rufen wir die `draw()`-Funktion auf, um den gesamten Prozess zu starten:

```js
draw();
```

Dies ergibt eine ansprechende Wellenform-Visualisierung, die mehrmals pro Sekunde aktualisiert wird:

![eine schwarze Oszilloskoplinie, die die Wellenform eines Audiosignals anzeigt](wave.png)

## Erstellung eines Frequenz-Balkendiagramms

Eine weitere schöne Klangvisualisierung, die Sie erstellen können, ist eines dieser Winamp-artigen Frequenz-Balkendiagramme. Wir haben eines im Voice-change-O-matic verfügbar; schauen wir uns an, wie es gemacht wird.

Zuerst richten wir unseren Analyser und das Datenarray erneut ein und leeren das aktuelle Canvas-Display mit `clearRect()`. Der einzige Unterschied zu vorher ist, dass wir die FFT-Größe viel kleiner eingestellt haben; dies ist so, dass jeder Balken im Diagramm groß genug ist, um tatsächlich wie ein Balken auszusehen, und nicht wie ein dünner Streifen.

```js
analyser.fftSize = 256;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
```

Als Nächstes starten wir unsere `draw()`-Funktion, richten erneut eine Schleife mit `requestAnimationFrame()` ein, damit die angezeigten Daten ständig aktualisiert werden, und leeren das Display mit jedem Animationsframe.

```js
function draw() {
  drawVisual = requestAnimationFrame(draw);

  analyser.getByteFrequencyData(dataArray);

  canvasCtx.fillStyle = "rgb(0 0 0)";
  canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
```

Jetzt setzen wir unsere `barWidth` gleich der Canvas-Breite geteilt durch die Anzahl der Balken (die Pufferlänge). Wir multiplizieren diese Breite aber auch mit 2.5, weil die meisten Frequenzen als ohne Audio zurückkommen werden, da die meisten der Klänge, die wir täglich hören, in einem bestimmten niedrigeren Frequenzbereich liegen. Wir wollen nicht jede Menge leerer Balken anzeigen, daher verschieben wir die Balken, die regelmäßig mit einer merklichen Höhe angezeigt werden, so dass sie das Canvas-Display füllen.

Wir setzen auch eine `barHeight`-Variable und eine `x`-Variable, um festzuhalten, wie weit über den Bildschirm der aktuelle Balken gezeichnet werden soll.

```js
const barWidth = (WIDTH / bufferLength) * 2.5;
let barHeight;
let x = 0;
```

Wie zuvor beginnen wir jetzt eine Schleife und durchlaufen jeden Wert im `dataArray`. Für jeden setzen wir `barHeight` gleich dem Array-Wert, legen eine Füllfarbe basierend auf der `barHeight` fest (höhere Balken sind heller) und zeichnen einen Balken `x` Pixel über die Canvas, der `barWidth` breit und `barHeight / 2` hoch ist (wir haben letztendlich beschlossen, jeden Balken zu halbieren, damit sie alle besser auf die Canvas passen.)

Der einzige Wert, der erklärt werden muss, ist die vertikale Offset-Position, an der wir jeden Balken zeichnen: `HEIGHT - barHeight / 2`. Ich mache dies, weil ich möchte, dass jeder Balken vom unteren Rand der Canvas nach oben zeigt, und nicht vom oberen Rand nach unten, wie es wäre, wenn wir die vertikale Position auf 0 setzten. Daher setzen wir stattdessen die vertikale Position jedes Mal auf die Höhe der Canvas minus `barHeight / 2`, daher wird jeder Balken von einem Teil der Canvas nach unten bis zum Boden gezeichnet.

```js
for (let i = 0; i < bufferLength; i++) {
  barHeight = dataArray[i] / 2;

  canvasCtx.fillStyle = `rgb(${barHeight + 100} 50 50)`;
  canvasCtx.fillRect(x, HEIGHT - barHeight / 2, barWidth, barHeight);

  x += barWidth + 1;
}
```

Wieder einmal rufen wir am Ende des Codes die `draw()`-Funktion auf, um den gesamten Prozess in Gang zu setzen.

```js
draw();
```

Dieser Code liefert uns ein Ergebnis wie das folgende:

![eine Reihe von roten Balken in einem Balkendiagramm, das die Intensität verschiedener Frequenzen in einem Audiosignal anzeigt](bar-graph.png)

> [!NOTE]
> Die in diesem Artikel aufgelisteten Beispiele zeigen die Verwendung von [`AnalyserNode.getByteFrequencyData()`](/de/docs/Web/API/AnalyserNode/getByteFrequencyData) und [`AnalyserNode.getByteTimeDomainData()`](/de/docs/Web/API/AnalyserNode/getByteTimeDomainData). Für funktionierende Beispiele, die [`AnalyserNode.getFloatFrequencyData()`](/de/docs/Web/API/AnalyserNode/getFloatFrequencyData) und [`AnalyserNode.getFloatTimeDomainData()`](/de/docs/Web/API/AnalyserNode/getFloatTimeDomainData) zeigen, lesen Sie unser [Voice-change-O-matic-float-data](https://mdn.github.io/voice-change-o-matic-float-data/) Demo — dies ist genau das gleiche wie das ursprüngliche [Voice-change-O-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/), außer dass es Float-Daten, nicht unsignierte Byte-Daten verwendet. Siehe [diesen Abschnitt](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L155) des Quellcodes für Details.
