---
title: "DedicatedWorkerGlobalScope: requestAnimationFrame() Methode"
short-title: requestAnimationFrame()
slug: Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame
l10n:
  sourceCommit: 19ca5f9271fc78eb033c448c9c21fb894e8743b9
---

{{APIRef}}{{AvailableInWorkers("dedicated")}}

Die **`requestAnimationFrame()`** Methode der {{domxref("DedicatedWorkerGlobalScope")}}-Schnittstelle teilt dem Browser mit, dass Sie eine Animationsbildanforderung vornehmen und eine vom Benutzer bereitgestellte Callback-Funktion vor dem nächsten Neuzeichnen aufrufen möchten.

Die Häufigkeit der Aufrufe der Callback-Funktion entspricht im Allgemeinen der Bildschirmaktualisierungsrate. Die gebräuchlichste Aktualisierungsrate beträgt 60 Hz (60 Zyklen/Bilder pro Sekunde), obwohl auch 75 Hz, 120 Hz und 144 Hz weit verbreitet sind. `requestAnimationFrame()`-Aufrufe werden in den meisten Browsern pausiert, wenn sie in Hintergrund-Tabs oder verborgenen {{HTMLElement("iframe")}}s ausgeführt werden, um die Leistung und die Akkulaufzeit zu verbessern.

Ein Aufruf der `requestAnimationFrame()`-Methode plant nur einen einzigen Aufruf der Callback-Funktion ein. Wenn Sie ein weiteres Bild animieren möchten, muss Ihre Callback-Funktion erneut `requestAnimationFrame()` aufrufen.

> [!WARNING]
> Stellen Sie sicher, dass Sie immer das erste Argument (oder eine andere Methode zur Ermittlung der aktuellen Zeit) verwenden, um zu berechnen, wie weit die Animation in einem Bild fortschreiten wird — **andernfalls wird die Animation auf Bildschirmen mit hoher Bildwiederholrate schneller ausgeführt**. Wie das geht, erfahren Sie in den unten stehenden Beispielen.

Der Aufruf der `requestAnimationFrame()`-Methode erfordert, dass der aktuelle Worker ein zugehöriges Eigentümer-{{domxref("Window", "window")}} hat. Das bedeutet, dass der aktuelle Worker von einem {{domxref("Window", "window")}} oder von einem dedizierten Worker erstellt werden muss, der ebenfalls ein zugehöriges Eigentümer-{{domxref("Window", "window")}} hat.

## Syntax

```js-nolint
requestAnimationFrame(callback)
```

### Parameter

- `callback`

  - : Die Funktion, die aufgerufen wird, wenn es Zeit ist, Ihre Animation für das nächste Neuzeichnen zu aktualisieren. Dieser Callback-Funktion wird ein einzelnes Argument übergeben:

    - `timestamp`

      - : Ein {{domxref("DOMHighResTimeStamp")}}, das die Endzeit des Renderings des vorherigen Bilds angibt (basierend auf der Anzahl der Millisekunden seit dem [Zeitursprung](/de/docs/Web/API/Performance/timeOrigin)). Der Zeitstempel ist eine Dezimalzahl in Millisekunden, jedoch mit einer minimalen Präzision von 1 Millisekunde. Der Zeitstempelwert ist auch ähnlich wie ein Aufruf von {{domxref('performance.now()')}} am Anfang der Callback-Funktion, aber er ist niemals derselbe Wert.

        Wenn mehrere durch `requestAnimationFrame()` wartenden Callbacks in einem einzigen Frame ausgelöst werden, erhalten alle denselben Zeitstempel, obwohl während der Berechnung der Arbeitslast jedes vorherigen Callbacks Zeit vergangen ist.

### Rückgabewert

Ein `long`-Ganzzahlwert, der die Anforderungs-ID eindeutig identifiziert, die den Eintrag in der Callback-Liste darstellt. Dies ist ein ungleich Null-Wert, aber Sie sollten keine weiteren Annahmen darüber treffen. Sie können diesen Wert an {{domxref("DedicatedWorkerGlobalScope.cancelAnimationFrame()", "cancelAnimationFrame()")}} übergeben, um die Aktualisierungs-Callback-Anforderung zu stornieren. Die Stornierungsaktion muss im selben Worker erfolgt sein.

### Ausnahmen

- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Methode vom aktuellen Worker nicht unterstützt wird.

## Beispiele

Im Haupt-Thread beginnen wir, indem wir die Kontrolle über ein {{HTMLElement("canvas")}}-Element auf ein {{domxref("OffscreenCanvas")}} übertragen, indem wir {{domxref("HTMLCanvasElement.transferControlToOffscreen()")}} verwenden, und dann eine Nachricht an den Worker senden, um seine Arbeit mit dem nicht sichtbaren Canvas zu `"starten"`:

```js
const offscreenCanvas = document
  .querySelector("canvas")
  .transferControlToOffscreen();

worker.postMessage(
  {
    type: "start",
    canvas: offscreenCanvas,
  },
  [offscreenCanvas],
);
```

Beim Empfang der `"start"`-Nachricht beginnt der Worker, die Animation zu starten, indem er das Rechteck von links nach rechts bewegt. Beim Empfang einer `"stop"`-Nachricht wird er die Animation stoppen.

```js
let ctx;
let pos = 0;
let handle;

function draw(dt) {
  ctx.clearRect(0, 0, 100, 100);
  ctx.fillRect(pos, 0, 10, 10);
  pos += 10 * dt;
  handle = self.requestAnimationFrame(draw);
}

self.addEventListener("message", (e) => {
  if (e.data.type === "start") {
    const transferredCanvas = e.data.canvas;
    ctx = transferredCanvas.getContext("2d");
    handle = self.requestAnimationFrame(draw);
  }
  if (e.data.type === "stop") {
    self.cancelAnimationFrame(handle);
  }
});
```

Schließlich kann, falls erforderlich, der Haupt-Thread eine `"stop"`-Nachricht an den Worker senden, um die Animation zu stoppen:

```js
worker.postMessage({
  type: "stop",
});
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("DedicatedWorkerGlobalScope.cancelAnimationFrame()")}}
- {{domxref("Window.requestAnimationFrame()")}}
