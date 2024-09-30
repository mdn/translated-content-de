---
title: Visualisierungen mit Web Audio API
slug: Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{DefaultAPISidebar("Web Audio API")}}

Eine der interessantesten Funktionen der Web Audio API ist die Fähigkeit, Frequenz-, Wellenform- und andere Daten aus Ihrer Audioquelle zu extrahieren, die dann zur Erstellung von Visualisierungen verwendet werden können. Dieser Artikel erklärt, wie das funktioniert, und bietet ein paar grundlegende Anwendungsbeispiele.

> [!NOTE]
> Sie finden funktionierende Beispiele für alle Code-Snippets in unserem [Voice-change-O-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/) Demo.

## Grundkonzepte

Um Daten aus Ihrer Audioquelle zu extrahieren, benötigen Sie ein [`AnalyserNode`](/de/docs/Web/API/AnalyserNode), das mit der Methode [`BaseAudioContext.createAnalyser`](/de/docs/Web/API/BaseAudioContext/createAnalyser) erstellt wird, zum Beispiel:

```js
const audioCtx = new AudioContext();
const analyser = audioCtx.createAnalyser();
```

Dieser Knoten wird dann zu einem gewissen Zeitpunkt zwischen Ihrer Quelle und Ihrem Ziel mit Ihrer Audioquelle verbunden, zum Beispiel:

```js
const source = audioCtx.createMediaStreamSource(stream);
source.connect(analyser);
analyser.connect(distortion);
distortion.connect(audioCtx.destination);
```

> [!NOTE]
> Sie müssen den Ausgang des Analyser-Knotens nicht an einen anderen Knoten anschließen, damit er funktioniert, solange der Eingang direkt oder über einen anderen Knoten mit der Quelle verbunden ist.

Das Analyser-Node erfasst dann Audiodaten mittels einer Fast Fourier Transformation (fft) in einem bestimmten Frequenzbereich, abhängig davon, was Sie als [`AnalyserNode.fftSize`](/de/docs/Web/API/AnalyserNode/fftSize)-Eigenschaftswert angeben (wenn kein Wert angegeben ist, ist der Standardwert 2048).

> [!NOTE]
> Sie können auch einen minimalen und maximalen Leistungswert für den fft-Datenskalenbereich unter Verwendung von [`AnalyserNode.minDecibels`](/de/docs/Web/API/AnalyserNode/minDecibels) und [`AnalyserNode.maxDecibels`](/de/docs/Web/API/AnalyserNode/maxDecibels) festlegen sowie verschiedene Datenmittelungskonstanten unter Verwendung von [`AnalyserNode.smoothingTimeConstant`](/de/docs/Web/API/AnalyserNode/smoothingTimeConstant). Lesen Sie die entsprechenden Seiten, um weitere Informationen zur Verwendung zu erhalten.

Um Daten zu erfassen, müssen Sie die Methoden [`AnalyserNode.getFloatFrequencyData()`](/de/docs/Web/API/AnalyserNode/getFloatFrequencyData) und [`AnalyserNode.getByteFrequencyData()`](/de/docs/Web/API/AnalyserNode/getByteFrequencyData) verwenden, um Frequenzdaten zu erfassen, und [`AnalyserNode.getByteTimeDomainData()`](/de/docs/Web/API/AnalyserNode/getByteTimeDomainData) sowie [`AnalyserNode.getFloatTimeDomainData()`](/de/docs/Web/API/AnalyserNode/getFloatTimeDomainData), um Wellenformdaten zu erfassen.

Diese Methoden kopieren Daten in ein angegebenes Array, sodass Sie ein neues Array erstellen müssen, um die Daten zu empfangen, bevor Sie eine der Methoden aufrufen. Die erste erzeugt 32-Bit-Gleitkommazahlen, und die zweite und dritte erzeugen 8-Bit-unsigned-Integers, deshalb reicht ein normales JavaScript-Array nicht aus — Sie müssen ein {{jsxref("Float32Array")}} oder {{jsxref("Uint8Array")}} verwenden, je nachdem, welche Daten Sie verarbeiten.

Wenn wir beispielsweise eine fft-Größe von 2048 verwenden, geben wir den Wert [`AnalyserNode.frequencyBinCount`](/de/docs/Web/API/AnalyserNode/frequencyBinCount) zurück, der die Hälfte der fft ist, und rufen dann Uint8Array() mit der frequencyBinCount als Längenargument auf — das ist die Anzahl der Datenpunkte, die wir für diese fft-Größe erfassen werden.

```js
analyser.fftSize = 2048;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);
```

Um die Daten tatsächlich abzurufen und sie in unser Array zu kopieren, rufen wir die Datenerfassungsmethode auf, die wir möchten, und übergeben das Array als Argument:

```js
analyser.getByteTimeDomainData(dataArray);
```

Wir haben jetzt die Audiodaten für diesen Moment in unserem Array erfasst und können sie nach Belieben visualisieren, beispielsweise indem wir sie auf einem HTML-`<canvas>` darstellen.

Schauen wir uns nun einige spezifische Beispiele an.

## Erstellen einer Wellenform/Oszilloskop

Um die Oszilloskop-Visualisierung zu erstellen (Hut ab vor [Soledad Penadés](https://soledadpenades.com/) für den ursprünglichen Code in [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L142), folgen wir zuerst dem Standardmuster aus dem vorherigen Abschnitt, um den Puffer einzurichten:

```js
analyser.fftSize = 2048;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);
```

Als Nächstes löschen wir das Canvas von allem, was zuvor darauf gezeichnet wurde, um das neue Visualisierungsdisplay vorzubereiten:

```js
canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
```

Nun definieren wir die `draw()` Funktion:

```js
function draw() {
```

Hier verwenden wir `requestAnimationFrame()`, um die Zeichenfunktion in einer Schleife weiterlaufen zu lassen, sobald sie gestartet wurde:

```js
const drawVisual = requestAnimationFrame(draw);
```

Als Nächstes erfassen wir die Zeitbereichsdaten und kopieren sie in unser Array:

```js
analyser.getByteTimeDomainData(dataArray);
```

Als Nächstes füllen wir das Canvas mit einer Vollfarbe, um zu beginnen:

```js
canvasCtx.fillStyle = "rgb(200 200 200)";
canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
```

Wir setzen eine Linienbreite und Farbe für die Welle, die wir zeichnen werden, und beginnen dann mit der Erstellung eines Pfads:

```js
canvasCtx.lineWidth = 2;
canvasCtx.strokeStyle = "rgb(0 0 0)";
canvasCtx.beginPath();
```

Wir bestimmen die Breite jedes zu zeichnenden Segments, indem wir die Canvas-Breite durch die Array-Länge (gleich dem FrequencyBinCount, wie zuvor definiert) teilen, und definieren dann eine x-Variable, um die Position zu bestimmen, die für das Zeichnen jedes Segments der Linie bewegt werden soll.

```js
const sliceWidth = WIDTH / bufferLength;
let x = 0;
```

Nun laufen wir durch eine Schleife und definieren die Position eines kleinen Segments der Welle für jeden Punkt im Puffer in einer bestimmten Höhe basierend auf dem Datenpunktwert aus dem Array, und verschieben dann die Linie an die Stelle, an der das nächste Wellensegment gezeichnet werden soll:

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

Schließlich beenden wir die Linie in der Mitte der rechten Seite des Canvas und zeichnen dann den von uns definierten Strich:

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

![eine schwarze Oszilloskoplinie, die die Wellenform eines Audiosignals zeigt](wave.png)

## Erstellen eines Frequenzbalkendiagramms

Eine weitere schöne kleine Soundvisualisierung, die erstellt werden kann, ist eines dieser Winamp-ähnlichen Frequenzbalkendiagramme. In Voice-change-O-matic haben wir eines verfügbar; schauen wir uns an, wie es gemacht wird.

Zuerst richten wir wieder unseren Analyser und das Datenarray ein und löschen dann die aktuelle Canvas-Anzeige mit `clearRect()`. Der einzige Unterschied zur vorherigen Implementierung besteht darin, dass wir die fft-Größe viel kleiner eingestellt haben; dies geschieht, damit jeder Balken im Diagramm groß genug ist, um tatsächlich wie ein Balken auszusehen, anstatt wie ein dünner Strang.

```js
analyser.fftSize = 256;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
```

Als nächstes starten wir unsere `draw()` Funktion, richten erneut eine Schleife mit `requestAnimationFrame()` ein, damit die angezeigten Daten weiterhin aktualisiert werden, und löschen die Anzeige mit jedem Animationsbild.

```js
function draw() {
  drawVisual = requestAnimationFrame(draw);

  analyser.getByteFrequencyData(dataArray);

  canvasCtx.fillStyle = "rgb(0 0 0)";
  canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
```

Nun setzen wir unsere `barWidth` auf die Canvas-Breite geteilt durch die Anzahl der Balken (die Pufferlänge). Wir multiplizieren jedoch diese Breite auch mit 2,5, da die meisten Frequenzen zurückkommen als hätten sie keinen Ton in sich, da die meisten Klänge, die wir täglich hören, in einem bestimmten niedrigeren Frequenzbereich liegen. Wir wollen nicht viele leere Balken anzeigen, daher verschieben wir diejenigen, die regelmäßig mit einer spürbaren Höhe angezeigt werden, so dass sie die Canvas-Anzeige ausfüllen.

Wir setzen auch eine `barHeight` Variable und eine `x` Variable, um festzuhalten, wie weit über den Bildschirm der aktuelle Balken gezeichnet werden soll.

```js
const barWidth = (WIDTH / bufferLength) * 2.5;
let barHeight;
let x = 0;
```

Wie zuvor starten wir nun eine for-Schleife und durchlaufen jeden Wert im `dataArray`. Für jeden machen wir die `barHeight` gleich dem Array-Wert, setzen eine Füllfarbe basierend auf der `barHeight` (höhere Balken sind heller), und zeichnen einen Balken bei `x` Pixel über der Canvas, der `barWidth` breit und `barHeight / 2` hoch ist (wir haben schließlich beschlossen, jeden Balken zu halbieren, damit sie alle besser auf das Canvas passen).

Der eine Wert, der erklärt werden muss, ist die vertikale Versatzposition, bei der wir jeden Balken zeichnen: `HEIGHT - barHeight / 2`. Ich mache dies, weil ich möchte, dass jeder Balken vom unteren Rand des Canvas herausragt, nicht von oben nach unten, wie es wäre, wenn wir die vertikale Position auf 0 setzen würden. Daher setzen wir stattdessen die vertikale Position jedes Mal auf die Höhe des Canvas minus `barHeight / 2`, sodass jeder Balken teilweise von unten gezeichnet wird.

```js
for (let i = 0; i < bufferLength; i++) {
  barHeight = dataArray[i] / 2;

  canvasCtx.fillStyle = `rgb(${barHeight + 100} 50 50)`;
  canvasCtx.fillRect(x, HEIGHT - barHeight / 2, barWidth, barHeight);

  x += barWidth + 1;
}
```

Auch am Ende des Codes rufen wir die `draw()` Funktion auf, um den gesamten Prozess in Gang zu setzen.

```js
draw();
```

Dieser Code liefert uns ein Ergebnis wie das folgende:

![eine Reihe von roten Balken in einem Balkendiagramm, das die Intensität verschiedener Frequenzen in einem Audiosignal zeigt](bar-graph.png)

> [!NOTE]
> Die in diesem Artikel aufgeführten Beispiele zeigen die Verwendung von [`AnalyserNode.getByteFrequencyData()`](/de/docs/Web/API/AnalyserNode/getByteFrequencyData) und [`AnalyserNode.getByteTimeDomainData()`](/de/docs/Web/API/AnalyserNode/getByteTimeDomainData). Für funktionierende Beispiele, die [`AnalyserNode.getFloatFrequencyData()`](/de/docs/Web/API/AnalyserNode/getFloatFrequencyData) und [`AnalyserNode.getFloatTimeDomainData()`](/de/docs/Web/API/AnalyserNode/getFloatTimeDomainData) zeigen, schauen Sie sich unser [Voice-change-O-matic-float-data](https://mdn.github.io/voice-change-o-matic-float-data/) Demo an — dies ist genau das gleiche wie das ursprüngliche [Voice-change-O-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/), außer dass es Float-Daten verwendet, nicht unsignierte Byte-Daten. Siehe [diesen Abschnitt](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L155) des Quellcodes für Details.
