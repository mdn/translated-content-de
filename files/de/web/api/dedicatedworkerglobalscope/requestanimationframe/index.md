---
title: "DedicatedWorkerGlobalScope: requestAnimationFrame() Methode"
short-title: requestAnimationFrame()
slug: Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Web Workers API")}}{{AvailableInWorkers("dedicated")}}

Die **`requestAnimationFrame()`**-Methode der [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Schnittstelle teilt dem Browser mit, dass Sie eine Animationsrahmenanfrage durchführen und eine vom Benutzer bereitgestellte Rückruffunktion vor dem nächsten Neuzeichnen aufrufen möchten.

Die Häufigkeit der Aufrufe der Rückruffunktion entspricht im Allgemeinen der Bildwiederholrate des Displays. Die häufigste Bildwiederholrate beträgt 60 Hz (60 Zyklen/Bilder pro Sekunde), obwohl auch 75 Hz, 120 Hz und 144 Hz weit verbreitet sind. `requestAnimationFrame()`-Aufrufe werden in den meisten Browsern pausiert, wenn sie in Hintergrund-Tabs oder versteckten {{HTMLElement("iframe")}}s ausgeführt werden, um die Leistung und Akkulaufzeit zu verbessern.

Ein Aufruf der `requestAnimationFrame()`-Methode plant nur einen einzelnen Aufruf der Rückruffunktion. Wenn Sie einen weiteren Frame animieren möchten, muss Ihre Rückruffunktion erneut `requestAnimationFrame()` aufrufen.

> [!WARNING]
> Stellen Sie sicher, dass Sie immer das erste Argument (oder eine andere Methode zur Ermittlung der aktuellen Zeit) verwenden, um zu berechnen, wie weit die Animation in einem Frame fortschreitet — **ansonsten wird die Animation auf Bildschirmen mit hoher Bildwiederholrate schneller ablaufen**. Möglichkeiten, dies zu tun, finden Sie in den unten stehenden Beispielen.

Der Aufruf der `requestAnimationFrame()`-Methode erfordert, dass der aktuelle Worker ein zugehöriges Eigentümer-[`window`](/de/docs/Web/API/Window) hat. Das bedeutet, dass der aktuelle Worker von einem [`window`](/de/docs/Web/API/Window) oder von einem dedizierten Worker, der ebenfalls ein zugehöriges Eigentümer-[`window`](/de/docs/Web/API/Window) hat, erstellt werden muss.

## Syntax

```js-nolint
requestAnimationFrame(callback)
```

### Parameter

- `callback`
  - : Die Funktion, die aufgerufen wird, wenn es Zeit ist, Ihre Animation für das nächste Neuzeichnen zu aktualisieren. Diese Rückruffunktion wird mit einem einzigen Argument übergeben:
    - `timestamp`
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Endzeit des Renderings des vorherigen Frames anzeigt (basierend auf der Anzahl der Millisekunden seit dem [time origin](/de/docs/Web/API/Performance/timeOrigin)). Der Zeitstempel ist eine Dezimalzahl in Millisekunden, jedoch mit einer minimalen Genauigkeit von 1 Millisekunde. Der Zeitstempelwert ist auch ähnlich wie ein Aufruf von [`performance.now()`](/de/docs/Web/API/Performance/now) zu Beginn der Rückruffunktion, ist jedoch nie derselbe Wert.

        Wenn mehrere durch `requestAnimationFrame()` angeforderte Rückruf-Funktionen innerhalb eines einzelnen Frames ausgelöst werden, erhalten alle denselben Zeitstempel, selbst wenn während der Berechnung jeder vorherigen Rückruf-Arbeitslast Zeit vergangen ist.

### Rückgabewert

Ein `long`-Ganzzahlwert, der die Anforderungs-ID ist, die den Eintrag in der Rückrufliste eindeutig identifiziert. Dies ist ein Wert ungleich Null, aber Sie dürfen keine weiteren Annahmen darüber treffen. Sie können diesen Wert an
[`cancelAnimationFrame()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/cancelAnimationFrame) übergeben, um die Aktualisierungs-Rückruf-Anfrage abzubrechen; die Abbruchaktion muss im selben Worker erfolgt sein.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird geworfen, wenn die Methode vom aktuellen Worker nicht unterstützt wird.

## Beispiele

Hier ist ein vollständiges Beispiel, das zeigt, wie `requestAnimationFrame()` in einem dedizierten Worker mit einem `OffscreenCanvas` verwendet wird.

Das HTML sollte enthalten:

```html
<canvas width="100" height="100"></canvas>
```

Es sollte auf das folgende JavaScript verweisen:

```js
const worker = new Worker("worker.js");

// Transfer canvas control to the worker
const offscreenCanvas = document
  .querySelector("canvas")
  .transferControlToOffscreen();

// Start the animation
worker.postMessage(
  {
    type: "start",
    canvas: offscreenCanvas,
  },
  [offscreenCanvas],
);

// Stop the animation after 5 seconds
setTimeout(() => {
  worker.postMessage({
    type: "stop",
  });
}, 5000);
```

**worker.js:**

```js
let ctx;
let pos = 0;
let animationId;
let isRunning = false;
let lastTime = 0;

function draw(currentTime) {
  if (!isRunning) return;

  // Calculate delta time for smooth animation
  if (lastTime === 0) lastTime = currentTime;
  const deltaTime = (currentTime - lastTime) / 1000;
  lastTime = currentTime;

  // Clear and draw the moving rectangle
  ctx.clearRect(0, 0, 100, 100);
  ctx.fillRect(pos, 0, 10, 10);
  pos += 50 * deltaTime; // Move 50 pixels per second

  // Loop the animation
  if (pos > 100) pos = -10;

  animationId = self.requestAnimationFrame(draw);
}

self.addEventListener("message", (e) => {
  if (e.data.type === "start") {
    const transferredCanvas = e.data.canvas;
    ctx = transferredCanvas.getContext("2d");
    isRunning = true;
    lastTime = 0;
    animationId = self.requestAnimationFrame(draw);
  }
  if (e.data.type === "stop") {
    isRunning = false;
    if (animationId) {
      self.cancelAnimationFrame(animationId);
    }
  }
});
```

Im Haupt-Thread beginnen wir damit, die Kontrolle über ein {{HTMLElement("canvas")}}-Element an ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) zu übertragen, indem wir [`HTMLCanvasElement.transferControlToOffscreen()`](/de/docs/Web/API/HTMLCanvasElement/transferControlToOffscreen) verwenden und eine Nachricht senden, um die Arbeit mit dem Offscreen-Canvas zu `"starten"`.

In der Worker-Datei (`worker.js`) behandeln wir die Animationslogik. Beim Empfang der `"start"`-Nachricht startet der Worker die Animation und bewegt das Rechteck von links nach rechts. Beim Erhalt einer `"stop"`-Nachricht wird die Animation gestoppt.

Schließlich kann der Haupt-Thread eine `"stop"`-Nachricht an den Worker senden, um die Animation nach einer Verzögerung zu stoppen, sodass die Animation sichtbar ist, bevor sie gestoppt wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DedicatedWorkerGlobalScope.cancelAnimationFrame()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/cancelAnimationFrame)
- [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)
