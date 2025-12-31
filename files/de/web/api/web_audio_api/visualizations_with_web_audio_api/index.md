---
title: Visualisierungen mit Web Audio API
slug: Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API
l10n:
  sourceCommit: 32635edcbc8635a6ad1f7b771454e69316f2bd60
---

{{DefaultAPISidebar("Web Audio API")}}

Eine der interessantesten Funktionen der Web Audio API ist die Möglichkeit, Frequenz-, Wellenform- und andere Daten von Ihrer Audioquelle zu extrahieren, die dann zur Erstellung von Visualisierungen verwendet werden können. Dieser Artikel erklärt, wie das geht, und bietet einige grundlegende Anwendungsbeispiele.

> [!NOTE]
> Funktionierende Beispiele für alle Code-Snippets finden Sie in unserem [Voice-change-O-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/) Demo.

## Grundkonzepte

Um Daten von Ihrer Audioquelle zu extrahieren, benötigen Sie einen [`AnalyserNode`](/de/docs/Web/API/AnalyserNode), der mit der Methode [`BaseAudioContext.createAnalyser`](/de/docs/Web/API/BaseAudioContext/createAnalyser) erstellt wird. Zum Beispiel:

```js
const audioCtx = new AudioContext();
const analyser = audioCtx.createAnalyser();
```

Dieser Node wird dann irgendwo zwischen Ihrer Quelle und Ihrem Ziel mit Ihrer Audioquelle verbunden, zum Beispiel:

```js
const source = audioCtx.createMediaStreamSource(stream);
source.connect(analyser);
analyser.connect(distortion);
distortion.connect(audioCtx.destination);
```

> [!NOTE]
> Sie müssen den Ausgang des Analysators nicht mit einem anderen Node verbinden, damit er funktioniert, solange der Eingang mit der Quelle verbunden ist, entweder direkt oder über einen anderen Node.

Der Analysator-Node erfasst dann Audiodaten mittels einer schnellen Fourier-Transformation (fft) in einem bestimmten Frequenzbereich, abhängig davon, was Sie als [`AnalyserNode.fftSize`](/de/docs/Web/API/AnalyserNode/fftSize) Eigenschaftswert spezifizieren (wenn kein Wert spezifiziert wird, beträgt der Standardwert 2048).

> [!NOTE]
> Sie können auch einen minimalen und maximalen Leistungswert für den fft-Datenmessbereich mit [`AnalyserNode.minDecibels`](/de/docs/Web/API/AnalyserNode/minDecibels) und [`AnalyserNode.maxDecibels`](/de/docs/Web/API/AnalyserNode/maxDecibels) festlegen sowie verschiedene Datenmittelungskonstanten mit [`AnalyserNode.smoothingTimeConstant`](/de/docs/Web/API/AnalyserNode/smoothingTimeConstant). Lesen Sie diese Seiten, um mehr Informationen darüber zu erhalten, wie Sie sie verwenden können.

Um Daten zu erfassen, müssen Sie die Methoden [`AnalyserNode.getFloatFrequencyData()`](/de/docs/Web/API/AnalyserNode/getFloatFrequencyData) und [`AnalyserNode.getByteFrequencyData()`](/de/docs/Web/API/AnalyserNode/getByteFrequencyData) verwenden, um Frequenzdaten zu erfassen, und [`AnalyserNode.getByteTimeDomainData()`](/de/docs/Web/API/AnalyserNode/getByteTimeDomainData) und [`AnalyserNode.getFloatTimeDomainData()`](/de/docs/Web/API/AnalyserNode/getFloatTimeDomainData) um Wellenformdaten zu erfassen.

Diese Methoden kopieren Daten in ein angegebenes Array, sodass Sie ein neues Array erstellen müssen, um die Daten zu empfangen, bevor Sie eine Methode aufrufen. Das erste erzeugt 32-Bit-Gleitkommazahlen, und die zweiten und dritten erzeugen 8-Bit-unsigned integer, daher ist ein standardmäßiges JavaScript-Array nicht geeignet — Sie müssen ein {{jsxref("Float32Array")}} oder {{jsxref("Uint8Array")}} Array verwenden, abhängig davon, welche Daten Sie verarbeiten.

Angenommen, wir haben es mit einer fft-Größe von 2048 zu tun. Wir geben den Wert [`AnalyserNode.frequencyBinCount`](/de/docs/Web/API/AnalyserNode/frequencyBinCount) zurück, der die Hälfte der fft ist, und rufen dann Uint8Array() mit frequencyBinCount als dessen Längenargument auf — dies ist, wie viele Datenpunkte wir für diese fft-Größe sammeln werden.

```js
analyser.fftSize = 2048;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);
```

Um die Daten tatsächlich abzurufen und in unser Array zu kopieren, rufen wir dann die Datenerfassungsmethode auf, die wir möchten, wobei das Array als Argument übergeben wird. Zum Beispiel:

```js
analyser.getByteTimeDomainData(dataArray);
```

Wir haben nun die Audiodaten für diesen Moment in der Zeit in unserem Array erfasst und können sie nach Belieben visualisieren, zum Beispiel indem wir sie auf ein HTML {{ htmlelement("canvas") }} zeichnen.

Schauen wir uns nun einige spezifische Beispiele an.

## Erstellung einer Wellenform/Oszilloskop

Um die Oszilloskop-Visualisierung zu erstellen (Dank an [Soledad Penadés](https://soledadpenades.com/) für den ursprünglichen Code in [Voice-change-O-matic](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L142)), folgen wir zuerst dem Standardmuster, das im vorherigen Abschnitt beschrieben wurde, um den Puffer einzurichten:

```js
analyser.fftSize = 2048;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);
```

Als nächstes leeren wir das Canvas von dem, was zuvor darauf gezeichnet wurde, um es für die neue Visualisierungsanzeige vorzubereiten:

```js
canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
```

Wir definieren nun die `draw()`-Funktion. Hier machen wir Folgendes:

1. Verwenden Sie `requestAnimationFrame()`, um die Zeichenfunktion weiterlaufen zu lassen, sobald sie gestartet wurde.
2. Erfassen Sie die Zeitbereichsdaten und kopieren Sie sie in unser Array.
3. Füllen Sie das Canvas zunächst mit einer Volltonfarbe.
4. Setzen Sie eine Linienbreite und eine Strichfarbe für die Welle, die wir zeichnen werden, und beginnen Sie dann, einen Pfad zu zeichnen.
5. Bestimmen Sie die Breite jedes Segments der zu zeichnenden Linie, indem Sie die Canvas-Breite durch die Array-Länge (gleich dem FrequencyBinCount, wie oben definiert) teilen. Definieren Sie dann eine x-Variable, um die Position zu definieren, an die für jedes Segment der Linie gezeichnet werden soll.
6. Jetzt durchlaufen wir eine Schleife, bestimmen die Position eines kleinen Segments der Welle für jeden Punkt im Puffer in einer bestimmten Höhe basierend auf dem Datenpunktwert aus dem Array und bewegen die Linie dann zu dem Ort, an dem das nächste Wellensegment gezeichnet werden soll.
7. Schließlich beenden wir die Linie in der Mitte der rechten Seite des Canvas und zeichnen den zuvor definierten Strich.

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

Am Ende dieses Codesegments rufen wir die `draw()`-Funktion auf, um den gesamten Prozess zu starten:

```js
draw();
```

Das gibt uns eine schöne Wellenformanzeige, die mehrmals in der Sekunde aktualisiert wird:

![eine schwarze Oszilloskoplinie, die die Wellenform eines Audiosignals zeigt](wave.png)

## Erstellung eines Frequenzbalkendiagramms

Eine weitere schöne kleine Klangvisualisierung, die erstellt werden kann, ist eines dieser Winamp-artigen Frequenzbalkendiagramme. Wir haben eines im Voice-change-O-matic verfügbar; schauen wir uns an, wie es gemacht wird.

Zuerst richten wir wieder unseren Analysator und das Datenarray ein und leeren die aktuelle Canvas-Anzeige mit `clearRect()`. Der einzige Unterschied zu vorher ist, dass wir die fft-Größe viel kleiner eingestellt haben; dies ist so, dass jeder Balken im Diagramm groß genug ist, um tatsächlich wie ein Balken und nicht wie ein dünner Strang auszusehen.

```js
analyser.fftSize = 256;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
```

Als nächstes starten wir unsere `draw()`-Funktion, indem wir erneut eine Schleife mit `requestAnimationFrame()` einrichten, sodass die angezeigten Daten ständig aktualisiert werden, und löschen die Anzeige mit jedem Animationsframe.

```js
function draw() {
  drawVisual = requestAnimationFrame(draw);

  analyser.getByteFrequencyData(dataArray);

  canvasCtx.fillStyle = "rgb(0 0 0)";
  canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

  // ...
}
```

Jetzt setzen wir unsere `barWidth`-Variable gleich der Canvas-Breite, geteilt durch die Anzahl der Balken (die Pufferlänge). Wir multiplizieren diese Breite jedoch auch mit 2,5, da die meisten Frequenzen als ohne Audio zurückkommen, da die meisten Geräusche, die wir täglich hören, in einem bestimmten niedrigeren Frequenzbereich liegen. Wir möchten nicht viele leere Balken anzeigen, daher verschieben wir die Balken, die in merklicher Höhe regelmäßig angezeigt werden, so, dass sie die Canvas-Anzeige ausfüllen.

Wir setzen auch eine `barHeight`-Variable und eine `x`-Variable, um festzuhalten, wie weit über den Bildschirm der aktuelle Balken gezeichnet werden soll.

```js
function draw() {
  // ...
  const barWidth = (WIDTH / bufferLength) * 2.5;
  let barHeight;
  let x = 0;
  // ...
}
```

Wie zuvor starten wir nun eine Schleife und durchlaufen jeden Wert im `dataArray`. Für jeden machen wir die `barHeight` gleich dem Array-Wert, setzen eine Füllfarbe basierend auf der `barHeight` (höhere Balken sind heller) und zeichnen einen Balken bei `x` Pixel über dem Canvas, der `barWidth` breit und `barHeight / 2` hoch ist (wir entschieden uns letztendlich, jeden Balken zu halbieren, damit alle besser auf das Canvas passen.)

Ein Wert, der erklärt werden muss, ist die vertikale Offsets-Position, an der wir jeden Balken zeichnen: `HEIGHT - barHeight / 2`. Ich mache das, weil ich möchte, dass jeder Balken von unten am Canvas hochragt, nicht von oben herunterhängt, wie es der Fall wäre, wenn wir die vertikale Position auf 0 setzen würden. Stattdessen setzen wir daher die vertikale Position jedes Mal auf die Höhe des Canvas minus `barHeight / 2`, sodass jeder Balken von einem Teil des Canvas aus nach unten bis zum Boden gezeichnet wird.

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

Auch hier rufen wir am Ende des Codes die `draw()`-Funktion auf, um den gesamten Prozess in Gang zu setzen.

```js
draw();
```

Dieser Code gibt uns ein Ergebnis wie das folgende:

![eine Reihe roter Balken in einem Balkendiagramm, die die Intensität unterschiedlicher Frequenzen eines Audiosignals zeigen](bar-graph.png)

> [!NOTE]
> Die in diesem Artikel aufgeführten Beispiele zeigen die Verwendung von [`AnalyserNode.getByteFrequencyData()`](/de/docs/Web/API/AnalyserNode/getByteFrequencyData) und [`AnalyserNode.getByteTimeDomainData()`](/de/docs/Web/API/AnalyserNode/getByteTimeDomainData). Für funktionierende Beispiele, die [`AnalyserNode.getFloatFrequencyData()`](/de/docs/Web/API/AnalyserNode/getFloatFrequencyData) und [`AnalyserNode.getFloatTimeDomainData()`](/de/docs/Web/API/AnalyserNode/getFloatTimeDomainData) zeigen, beziehen Sie sich auf unser [Voice-change-O-matic-float-data](https://mdn.github.io/voice-change-o-matic-float-data/) Demo — dies ist genau das gleiche wie das ursprüngliche [Voice-change-O-matic](https://mdn.github.io/webaudio-examples/voice-change-o-matic/), außer dass es Float-Daten verwendet, nicht unsigned Byte-Daten. Siehe [diesen Abschnitt](https://github.com/mdn/webaudio-examples/blob/main/voice-change-o-matic/scripts/app.js#L155) des Quellcodes für Details.
