---
title: Visualisierungen mit Web Audio API
slug: Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API
l10n:
  sourceCommit: fd56a549d24a8002df09735ee8319ce1a721c233
---

{{DefaultAPISidebar("Web Audio API")}}

Eines der interessantesten Merkmale der Web Audio API ist die Möglichkeit, Frequenz-, Wellenform- und andere Daten von Ihrer Audioquelle zu extrahieren, die dann zur Erstellung von Visualisierungen verwendet werden können. Dieser Artikel erklärt, wie das geht, und bietet einige grundlegende Anwendungsfälle.

> [!NOTE]
> Sie finden funktionierende Beispiele für alle Code-Snippets in unserem [Voice-change-O-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/) Demo.

## Grundkonzepte

Um Daten von Ihrer Audioquelle zu extrahieren, benötigen Sie einen [`AnalyserNode`](/de/docs/Web/API/AnalyserNode), der mit der Methode [`BaseAudioContext.createAnalyser`](/de/docs/Web/API/BaseAudioContext/createAnalyser) erstellt wird. Zum Beispiel:

```js
const audioCtx = new AudioContext();
const analyser = audioCtx.createAnalyser();
```

Dieser Knoten wird dann zu einem bestimmten Zeitpunkt zwischen Ihrer Quelle und Ihrem Ziel mit Ihrer Audioquelle verbunden. Zum Beispiel:

```js
const source = audioCtx.createMediaStreamSource(stream);
source.connect(analyser);
analyser.connect(distortion);
distortion.connect(audioCtx.destination);
```

> [!NOTE]
> Sie müssen den Ausgang des Analyseknotens nicht an einen anderen Knoten anschließen, damit er funktioniert, solange der Eingang an die Quelle angeschlossen ist, entweder direkt oder über einen anderen Knoten.

Der Analyseknoten erfasst dann Audiodaten mit einer Fast Fourier Transform (fft) in einem bestimmten Frequenzbereich, abhängig von dem, was Sie als Wert der Eigenschaft [`AnalyserNode.fftSize`](/de/docs/Web/API/AnalyserNode/fftSize) angeben (wenn kein Wert angegeben wird, beträgt der Standardwert 2048).

> [!NOTE]
> Sie können auch einen minimalen und maximalen Leistungswert für den Bereich der fft-Daten-Skalierung festlegen, indem Sie [`AnalyserNode.minDecibels`](/de/docs/Web/API/AnalyserNode/minDecibels) und [`AnalyserNode.maxDecibels`](/de/docs/Web/API/AnalyserNode/maxDecibels) verwenden, sowie verschiedene Datenmittelungs-Konstanten mit [`AnalyserNode.smoothingTimeConstant`](/de/docs/Web/API/AnalyserNode/smoothingTimeConstant). Lesen Sie diese Seiten, um weitere Informationen zur Verwendung zu erhalten.

Um Daten zu erfassen, müssen Sie die Methoden [`AnalyserNode.getFloatFrequencyData()`](/de/docs/Web/API/AnalyserNode/getFloatFrequencyData) und [`AnalyserNode.getByteFrequencyData()`](/de/docs/Web/API/AnalyserNode/getByteFrequencyData) verwenden, um Frequenzdaten zu erfassen, sowie [`AnalyserNode.getByteTimeDomainData()`](/de/docs/Web/API/AnalyserNode/getByteTimeDomainData) und [`AnalyserNode.getFloatTimeDomainData()`](/de/docs/Web/API/AnalyserNode/getFloatTimeDomainData), um Wellenformdaten zu erfassen.

Diese Methoden kopieren die Daten in ein angegebenes Array, daher müssen Sie ein neues Array erstellen, um die Daten zu empfangen, bevor Sie eine der Methoden aufrufen. Die erste Methode erzeugt 32-Bit-Gleitkommazahlen, und die zweite und dritte erzeugen 8-Bit-Integer, daher reicht ein Standard-JavaScript-Array nicht aus — Sie müssen ein {{jsxref("Float32Array")}} oder {{jsxref("Uint8Array")}} Array verwenden, je nachdem, welche Daten Sie verarbeiten.

Nehmen wir zum Beispiel an, wir haben eine fft-Größe von 2048. Wir geben den Wert [`AnalyserNode.frequencyBinCount`](/de/docs/Web/API/AnalyserNode/frequencyBinCount) zurück, der die Hälfte der fft ist, und rufen dann Uint8Array() mit frequencyBinCount als Längenargument auf — dies ist die Anzahl der Datenpunkte, die wir für diese fft-Größe sammeln werden.

```js
analyser.fftSize = 2048;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);
```

Um die Daten tatsächlich abzurufen und in unser Array zu kopieren, rufen wir dann die gewünschte Datenerfassungsmethode mit dem Array auf, das als Argument übergeben wird. Zum Beispiel:

```js
analyser.getByteTimeDomainData(dataArray);
```

Wir haben nun die Audiodaten für diesen Zeitpunkt in unserem Array erfasst und können sie beliebig visualisieren, zum Beispiel indem wir sie auf einem HTML {{ htmlelement("canvas") }} darstellen.

Schauen wir uns nun einige spezifische Beispiele an.

## Erstellen einer Wellenform/Oszilloskop

Um die Oszilloskop-Visualisierung zu erstellen (ein Hut ab an [Soledad Penadés](https://soledadpenades.com/) für den ursprünglichen Code in [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L142)), folgen wir zunächst dem im vorherigen Abschnitt beschriebenen Standardmuster, um den Puffer einzurichten:

```js
analyser.fftSize = 2048;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);
```

Als Nächstes löschen wir die Leinwand von dem, was zuvor darauf gezeichnet wurde, um sie für die neue Visualisierungsanzeige vorzubereiten:

```js
canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
```

Nun definieren wir die `draw()`-Funktion. Darin machen wir Folgendes:

1. Verwenden Sie `requestAnimationFrame()`, um die Zeichenfunktion einmal in Gang gesetzt immer wieder aufzurufen.
2. Holen Sie sich die Zeitbereichsdaten und kopieren Sie sie in unser Array.
3. Füllen Sie die Leinwand zunächst mit einer Vollfarbe.
4. Legen Sie eine Linienbreite und eine Strichfarbe für die Welle fest, die wir zeichnen werden, und beginnen Sie dann, einen Pfad zu zeichnen.
5. Bestimmen Sie die Breite jedes Segments der zu zeichnenden Linie, indem Sie die Leinwandbreite durch die Array-Länge (gleich dem FrequencyBinCount, wie zuvor definiert) teilen, und definieren Sie dann eine x-Variable, um die Position festzulegen, an die jedes Liniensgment gezeichnet werden soll.
6. Nun führen wir eine Schleife durch, indem wir die Position eines kleinen Segments der Welle für jeden Punkt im Puffer auf einer bestimmten Höhe basierend auf dem Datenpunktwert aus dem Array definieren und dann die Linie über die Stelle hinweg bewegen, an der das nächste Wellensegment gezeichnet werden soll.
7. Schließlich beenden wir die Linie in der Mitte der rechten Seite der Leinwand und zeichnen den zuvor definierten Strich.

```js
function draw() {
  const drawVisual = requestAnimationFrame(draw);
  analyser.getByteTimeDomainData(dataArray);
  // Fill solid color
  canvasCtx.fillStyle = "rgb(200 200 200)";
  canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);
  // Begin the path
  canvasCtx.lineWidth = 2;
  canvasCtx.strokeStyle = "rgb(0 0 0)";
  canvasCtx.beginPath();
  // Draw each point in the waveform
  const sliceWidth = WIDTH / bufferLength;
  let x = 0;
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

  // Finish the line
  canvasCtx.lineTo(WIDTH, HEIGHT / 2);
  canvasCtx.stroke();
}
```

Am Ende dieses Codes Abschnitts rufen wir die `draw()`-Funktion auf, um den gesamten Prozess zu starten:

```js
draw();
```

Dies gibt uns eine schöne Wellendarstellung, die mehrmals pro Sekunde aktualisiert wird:

![eine schwarze Oszilloskoplinie, die die Wellenform eines Audiosignals zeigt](wave.png)

## Erstellen eines Frequenz-Balkendiagramms

Eine weitere nette kleine Klangvisualisierung, die man erstellen kann, ist eines dieser Winamp-ähnlichen Frequenz-Balkendiagramme. Wir haben eines im Voice-change-O-matic zur Verfügung; schauen wir uns an, wie es gemacht wird.

Zuerst richten wir wieder unseren Analysator und das Datenarray ein und löschen dann mit `clearRect()` die aktuelle Anzeige auf der Leinwand. Der einzige Unterschied zu vorher besteht darin, dass wir die fft-Größe viel kleiner gewählt haben; dies ist so, dass jeder Balken im Diagramm groß genug ist, um tatsächlich wie ein Balken auszusehen, anstatt wie ein dünner Faden.

```js
analyser.fftSize = 256;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
```

Als Nächstes starten wir unsere `draw()`-Funktion, indem wir wieder eine Schleife mit `requestAnimationFrame()` einrichten, damit die angezeigten Daten weiterhin aktualisiert werden, und die Anzeige mit jedem Animationsbild löschen.

```js
function draw() {
  drawVisual = requestAnimationFrame(draw);

  analyser.getByteFrequencyData(dataArray);

  canvasCtx.fillStyle = "rgb(0 0 0)";
  canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

  // ...
}
```

Jetzt setzen wir unsere `barWidth` auf die Leinwandbreite geteilt durch die Anzahl der Balken (die Pufferlänge). Wir multiplizieren diese Breite jedoch auch mit 2,5, weil die meisten der Frequenzen als nicht partizipierend an Audio zurückkehren werden, da die meisten der Töne, die wir täglich hören, in einem bestimmten niedrigeren Frequenzbereich liegen. Wir wollen nicht viele leere Balken anzeigen, daher schieben wir die, die regelmäßig an einer auffälligen Höhe angezeigt werden, quer über die Leinwandanzeige, um sie zu füllen.

Wir setzen auch eine `barHeight`-Variable und eine `x`-Variable, um aufzuzeichnen, wie weit der aktuelle Balken über den Bildschirm gezeichnet wird.

```js
function draw() {
  // ...
  const barWidth = (WIDTH / bufferLength) * 2.5;
  let barHeight;
  let x = 0;
  // ...
}
```

Wie zuvor starten wir jetzt eine for-Schleife und durchlaufen jeden Wert im `dataArray`. Für jeden machen wir die `barHeight` gleich dem Array-Wert, setzen eine Füllfarbe basierend auf der `barHeight` (höhere Balken sind heller) und zeichnen einen Balken an `x`-Pixeln über der Leinwand, der `barWidth` breit und `barHeight / 2` hoch ist (wir haben schließlich beschlossen, jeden Balken in der Mitte zu halbieren, damit alle besser auf die Leinwand passen.)

Der eine Wert, der erklärt werden muss, ist die vertikale Offsetposition, an der wir jeden Balken zeichnen: `HEIGHT - barHeight / 2`. Ich mache das, weil ich möchte, dass jeder Balken vom unteren Rand der Leinwand nach oben ragt und nicht vom oberen Rand nach unten, wie es wäre, wenn wir die vertikale Position auf 0 setzen würden. Daher setzen wir stattdessen die vertikale Position jedes Mal auf die Höhe der Leinwand minus `barHeight / 2`, damit jeder Balken von der Leinwandmitte nach unten zum Boden gezeichnet wird.

```js
function draw() {
  // ...
  for (let i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i] / 2;

    canvasCtx.fillStyle = `rgb(${barHeight + 100} 50 50)`;
    canvasCtx.fillRect(x, HEIGHT - barHeight / 2, barWidth, barHeight);

    x += barWidth + 1;
  }
  // ...
}
```

Wieder rufen wir am Ende des Codes die `draw()`-Funktion auf, um den gesamten Prozess in Gang zu setzen.

```js
draw();
```

Dieser Code gibt uns ein Ergebnis wie das folgende:

![eine Reihe roter Balken in einem Balkendiagramm, die die Intensität unterschiedlicher Frequenzen eines Audiosignals zeigen](bar-graph.png)

> [!NOTE]
> Die in diesem Artikel aufgeführten Beispiele zeigen die Verwendung von [`AnalyserNode.getByteFrequencyData()`](/de/docs/Web/API/AnalyserNode/getByteFrequencyData) und [`AnalyserNode.getByteTimeDomainData()`](/de/docs/Web/API/AnalyserNode/getByteTimeDomainData). Für funktionierende Beispiele zur Darstellung von [`AnalyserNode.getFloatFrequencyData()`](/de/docs/Web/API/AnalyserNode/getFloatFrequencyData) und [`AnalyserNode.getFloatTimeDomainData()`](/de/docs/Web/API/AnalyserNode/getFloatTimeDomainData), schlagen Sie in unserem [Voice-change-O-matic-float-data](https://mdn.github.io/voice-change-o-matic-float-data/) Demo nach — dies ist genau das gleiche wie das ursprüngliche [Voice-change-O-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/), außer dass es Float-Daten verwendet, nicht unsignierte Byte-Daten. Siehe [dieser Abschnitt](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L155) des Quellcodes für Details.
