---
title: Visualisierungen mit der Web Audio API
slug: Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{DefaultAPISidebar("Web Audio API")}}

Eine der interessantesten Funktionen der Web Audio API ist die Möglichkeit, Frequenz-, Wellenform- und andere Daten aus Ihrer Audioquelle zu extrahieren, die dann zur Erstellung von Visualisierungen verwendet werden können. Dieser Artikel erklärt, wie dies funktioniert, und bietet einige grundlegende Anwendungsfälle.

> [!NOTE]
> Sie finden funktionierende Beispiele für alle Code-Snippets in unserem [Voice-change-O-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/) Demo.

## Grundkonzepte

Um Daten von Ihrer Audioquelle zu extrahieren, benötigen Sie einen {{ domxref("AnalyserNode") }}, der mit der Methode {{ domxref("BaseAudioContext.createAnalyser") }} erstellt wird, zum Beispiel:

```js
const audioCtx = new AudioContext();
const analyser = audioCtx.createAnalyser();
```

Dieser Knoten wird dann an einem Punkt zwischen Ihrer Quelle und Ihrem Ziel an Ihre Audioquelle angeschlossen, zum Beispiel:

```js
const source = audioCtx.createMediaStreamSource(stream);
source.connect(analyser);
analyser.connect(distortion);
distortion.connect(audioCtx.destination);
```

> [!NOTE]
> Es ist nicht notwendig, den Ausgang des Analysators mit einem anderen Knoten zu verbinden, damit er funktioniert, solange der Eingang mit der Quelle verbunden ist, entweder direkt oder über einen anderen Knoten.

Der Analysator-Knoten erfasst dann Audiodaten mithilfe einer schnellen Fourier-Transformation (fft) in einem bestimmten Frequenzbereich, abhängig davon, welchen Wert Sie als {{ domxref("AnalyserNode.fftSize") }} festlegen (wenn kein Wert festgelegt ist, ist der Standardwert 2048.)

> [!NOTE]
> Sie können auch einen minimalen und maximalen Leistungswert für den fft-Daten-Skalierungsbereich mit {{ domxref("AnalyserNode.minDecibels") }} und {{ domxref("AnalyserNode.maxDecibels") }} sowie verschiedene Datenmittelungskonstanten mit {{ domxref("AnalyserNode.smoothingTimeConstant") }} festlegen. Lesen Sie diese Seiten, um weitere Informationen zur Verwendung zu erhalten.

Um Daten zu erfassen, müssen Sie die Methoden {{ domxref("AnalyserNode.getFloatFrequencyData()") }} und {{ domxref("AnalyserNode.getByteFrequencyData()") }} verwenden, um Frequenzdaten zu erfassen, und {{ domxref("AnalyserNode.getByteTimeDomainData()") }} sowie {{ domxref("AnalyserNode.getFloatTimeDomainData") }} zur Erfassung von Wellenformdaten.

Diese Methoden kopieren Daten in ein angegebenes Array, sodass Sie ein neues Array erstellen müssen, um die Daten zu empfangen, bevor Sie eine Methode aufrufen. Die erste produziert 32-Bit-Gleitkommazahlen, und die zweite und dritte produzieren 8-Bit-unsigned-Integer, daher ist ein Standard-JavaScript-Array nicht geeignet — Sie müssen ein {{jsxref("Float32Array")}} oder {{jsxref("Uint8Array")}} Array verwenden, abhängig von den Daten, die Sie verarbeiten.

Angenommen, wir behandeln eine fft-Größe von 2048. Wir geben den Wert {{ domxref("AnalyserNode.frequencyBinCount") }} zurück, der die Hälfte der fft ist, und rufen dann Uint8Array() mit frequencyBinCount als Längenargument auf — dies ist die Anzahl der Datenpunkte, die wir für diese fft-Größe erfassen werden.

```js
analyser.fftSize = 2048;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);
```

Um die Daten tatsächlich abzurufen und in unser Array zu kopieren, rufen wir dann die gewünschte Datenerfassungsmethode auf, wobei wir das Array als Argument übergeben. Zum Beispiel:

```js
analyser.getByteTimeDomainData(dataArray);
```

Wir haben nun die Audiodaten für diesen Moment in der Zeit in unserem Array erfasst und können sie beliebig visualisieren, z.B. indem wir sie auf einem HTML-{{ htmlelement("canvas") }} darstellen.

Schauen wir uns nun einige spezifische Beispiele an.

## Erstellung einer Wellenform/Oszilloskop

Um die Oszilloskop-Visualisierung zu erstellen (Dank an [Soledad Penadés](https://soledadpenades.com/) für den Originalcode im [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L142)), folgen wir zunächst dem in der vorherigen Abschnitt beschriebenen Standardmuster, um den Puffer einzurichten:

```js
analyser.fftSize = 2048;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);
```

Als Nächstes löschen wir die vorher auf der Leinwand gezeichneten Inhalte, um Platz für die neue Visualisierungsanzeige zu schaffen:

```js
canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
```

Nun definieren wir die `draw()` Funktion:

```js
function draw() {
```

Hier verwenden wir `requestAnimationFrame()`, um die Zeichenfunktion in einer Schleife laufen zu lassen, sobald sie gestartet wurde:

```js
const drawVisual = requestAnimationFrame(draw);
```

Als nächstes holen wir uns die Zeitbereichsdaten und kopieren sie in unser Array

```js
analyser.getByteTimeDomainData(dataArray);
```

Als Nächstes füllen wir die Leinwand zu Beginn mit einer Vollfarbe

```js
canvasCtx.fillStyle = "rgb(200 200 200)";
canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
```

Wir setzen eine Linienbreite und eine Strichfarbe für die Welle, die wir zeichnen werden, und beginnen dann mit dem Zeichnen eines Pfades

```js
canvasCtx.lineWidth = 2;
canvasCtx.strokeStyle = "rgb(0 0 0)";
canvasCtx.beginPath();
```

Bestimmen Sie die Breite jedes Segments der zu zeichnenden Linie, indem Sie die Leinwandbreite durch die Arraylänge (gleich FrequencyBinCount, wie zuvor definiert) dividieren, und definieren Sie dann eine x-Variable, um die Position zu definieren, zu der das nächste Liniensignalsegment gezeichnet werden soll.

```js
const sliceWidth = WIDTH / bufferLength;
let x = 0;
```

Nun durchlaufen wir eine Schleife, definieren die Position eines kleinen Segments der Welle für jeden Punkt im Puffer in einer bestimmten Höhe basierend auf dem Datenpunktwert aus dem Array und verschieben dann die Linie dorthin, wo das nächste Wellenabschnitt gezeichnet werden soll:

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

Am Ende ziehen wir die Linie in der Mitte der rechten Seite der Leinwand, dann zeichnen wir den von uns definierten Strich:

```js
  canvasCtx.lineTo(WIDTH, HEIGHT / 2);
  canvasCtx.stroke();
}
```

Am Ende dieses Abschnitts des Codes rufen wir die `draw()` Funktion auf, um den gesamten Prozess zu starten:

```js
draw();
```

Dies gibt uns eine schöne Wellenformanzeige, die mehrmals pro Sekunde aktualisiert wird:

![eine schwarze Oszilloskop-Linie, die die Wellenform eines Audiosignals zeigt](wave.png)

## Erstellung eines Frequenzbalkendiagramms

Eine weitere hübsche Klangvisualisierung ist eines dieser Winamp-Style-Frequenzbalkendiagramme. Wir haben eines im Voice-change-O-matic verfügbar; schauen wir uns an, wie es gemacht wird.

Zuerst richten wir erneut unseren Analysator und das Daten-Array ein und löschen dann die aktuelle Leinwandanzeige mit `clearRect()`. Der einzige Unterschied zu vorher besteht darin, dass wir die fft-Größe viel kleiner eingestellt haben; dies geschieht, damit jeder Balken im Diagramm groß genug ist, um tatsächlich wie ein Balken auszusehen, und nicht wie ein dünner Strang.

```js
analyser.fftSize = 256;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
```

Als nächstes beginnen wir unsere `draw()` Funktion und setzen erneut eine Schleife mit `requestAnimationFrame()` auf, sodass die angezeigten Daten aktualisiert werden, und löschen die Anzeige mit jedem Animationsrahmen.

```js
function draw() {
  drawVisual = requestAnimationFrame(draw);

  analyser.getByteFrequencyData(dataArray);

  canvasCtx.fillStyle = "rgb(0 0 0)";
  canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
```

Nun setzen wir unsere `barWidth` auf die Leinwandbreite geteilt durch die Anzahl der Balken (die Pufferlänge). Wir multiplizieren jedoch diese Breite auch mit 2,5, da die meisten Frequenzen als ohne Audio zurückkommen, da die meisten der alltäglichen Geräusche in einem bestimmten niedrigeren Frequenzbereich liegen. Wir möchten nicht viele leere Balken anzeigen, daher verschieben wir die, die regelmäßig eine bemerkbare Höhe anzeigen, so dass sie die Leinwandanzeige ausfüllen.

Wir setzen auch eine `barHeight`-Variable und eine `x`-Variable, um aufzuzeichnen, wie weit über den Bildschirm der aktuelle Balken gezeichnet werden soll.

```js
const barWidth = (WIDTH / bufferLength) * 2.5;
let barHeight;
let x = 0;
```

Wie zuvor beginnen wir jetzt eine Schleife und durchlaufen jeden Wert im `dataArray`. Für jeden davon setzen wir die `barHeight` auf den Array-Wert, setzen eine Füllfarbe basierend auf `barHeight` (höhere Balken sind heller), und zeichnen einen Balken bei `x` Pixeln über der Leinwand, der `barWidth` breit und `barHeight / 2` hoch ist (wir haben schließlich beschlossen, jeden Balken zu halbieren, damit sie alle besser auf die Leinwand passen.).

Der einzige Wert, der erklärt werden muss, ist die vertikale Versatzposition, bei der jeder Balken gezeichnet werden soll: `HEIGHT - barHeight / 2`. Ich mache das so, weil ich möchte, dass jeder Balken vom unteren Rand der Leinwand nach oben zeigt und nicht von oben nach unten, wie es der Fall wäre, wenn wir die vertikale Position auf 0 setzen würden. Daher setzen wir stattdessen die vertikale Position jedes Mal auf die Höhe der Leinwand minus `barHeight / 2`, sodass jeder Balken von einem Punkt aus der Leinwand aus gezeichnet wird.

```js
for (let i = 0; i < bufferLength; i++) {
  barHeight = dataArray[i] / 2;

  canvasCtx.fillStyle = `rgb(${barHeight + 100} 50 50)`;
  canvasCtx.fillRect(x, HEIGHT - barHeight / 2, barWidth, barHeight);

  x += barWidth + 1;
}
```

Auch hier rufen wir am Ende des Codes die `draw()` Funktion auf, um den gesamten Prozess in Gang zu setzen.

```js
draw();
```

Dieser Code liefert uns ein Ergebnis wie das folgende:

![eine Reihe roter Balken in einem Balkendiagramm, die die Intensität verschiedener Frequenzen in einem Audiosignal anzeigen](bar-graph.png)

> [!NOTE]
> Die in diesem Artikel aufgeführten Beispiele zeigen die Verwendung von {{ domxref("AnalyserNode.getByteFrequencyData()") }} und {{ domxref("AnalyserNode.getByteTimeDomainData()") }}. Für funktionierende Beispiele, die {{ domxref("AnalyserNode.getFloatFrequencyData()") }} und {{ domxref("AnalyserNode.getFloatTimeDomainData()") }} zeigen, verweisen Sie auf unser [Voice-change-O-matic-float-data](https://mdn.github.io/voice-change-o-matic-float-data/) Demo — dies ist genau das gleiche wie das originale [Voice-change-O-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/), außer dass es Float-Daten verwendet, nicht unsigned byte-Daten. Siehe [diesen Abschnitt](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L155) des Quellcodes für Details.
