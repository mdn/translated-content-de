---
title: "DedicatedWorkerGlobalScope: requestAnimationFrame() Methode"
short-title: requestAnimationFrame()
slug: Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef}}{{AvailableInWorkers("dedicated")}}

Die **`requestAnimationFrame()`**-Methode der [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Schnittstelle teilt dem Browser mit, dass Sie eine Animations-Frame-Anfrage durchführen möchten und eine benutzerdefinierte Callback-Funktion vor dem nächsten Neuzeichnen aufrufen wollen.

Die Häufigkeit der Aufrufe der Callback-Funktion entspricht im Allgemeinen der Bildwiederholrate des Displays. Die gebräuchlichste Bildwiederholrate ist 60 Hz (60 Zyklen/Bilder pro Sekunde), obwohl auch 75 Hz, 120 Hz und 144 Hz weit verbreitet sind. `requestAnimationFrame()`-Aufrufe werden in den meisten Browsern pausiert, wenn sie in Hintergrund-Tabs oder versteckten {{HTMLElement("iframe")}}s ausgeführt werden, um die Leistung und die Akkulaufzeit zu verbessern.

Ein Aufruf der `requestAnimationFrame()`-Methode sorgt nur für einen einzigen Aufruf der Callback-Funktion. Wenn Sie einen weiteren Frame animieren möchten, muss Ihre Callback-Funktion `requestAnimationFrame()` erneut aufrufen.

> [!WARNING]
> Stellen Sie sicher, dass Sie immer das erste Argument (oder eine andere Methode zur Ermittlung der aktuellen Zeit) verwenden, um zu berechnen, wie viel die Animation in einem Frame fortschreitet — **ansonsten läuft die Animation auf Bildschirmen mit hoher Bildwiederholrate schneller**. Um Möglichkeiten dazu zu finden, siehe die untenstehenden Beispiele.

Das Aufrufen der `requestAnimationFrame()`-Methode erfordert, dass der aktuelle Worker ein zugehöriges Eigentümer-[`window`](/de/docs/Web/API/Window) hat. Das bedeutet, dass der aktuelle Worker von einem [`window`](/de/docs/Web/API/Window) oder von einem dedizierten Worker, der ebenfalls ein zugehöriges Eigentümer-[`window`](/de/docs/Web/API/Window) hat, erstellt worden sein muss.

## Syntax

```js-nolint
requestAnimationFrame(callback)
```

### Parameter

- `callback`

  - : Die Funktion, die aufgerufen wird, wenn es Zeit ist, Ihre Animation für das nächste Neuzeichnen zu aktualisieren. Diese Callback-Funktion erhält ein einzelnes Argument:

    - `timestamp`

      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Endzeit der Rendering-Verarbeitung des vorherigen Frames angibt (basierend auf der Anzahl der Millisekunden seit dem [Zeitursprung](/de/docs/Web/API/Performance/timeOrigin)). Der Zeitstempel ist eine Dezimalzahl in Millisekunden, aber mit einer minimalen Präzision von 1 Millisekunde. Der Zeitstempelwert ähnelt auch dem Aufrufen von [`performance.now()`](/de/docs/Web/API/Performance/now) zu Beginn der Callback-Funktion, ist jedoch niemals derselbe Wert.

        Wenn mehrere durch `requestAnimationFrame()` eingereihten Callbacks in einem einzigen Frame abgefeuert werden, erhält jeder denselben Zeitstempel, auch wenn während der Berechnung der Arbeitslast jedes vorherigen Callbacks Zeit vergangen ist.

### Rückgabewert

Ein `long`-Ganzzahlenwert, der die Anfrage-ID darstellt, die den Eintrag in der Callback-Liste eindeutig identifiziert. Dies ist ein von Null verschiedener Wert, aber Sie dürfen keine weiteren Annahmen darüber treffen. Sie können diesen Wert an [`cancelAnimationFrame()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/cancelAnimationFrame) übergeben, um die Auffrischungs-Callback-Anfrage abzubrechen. Die Abbruchaktion muss im selben Worker durchgeführt worden sein.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Methode vom aktuellen Worker nicht unterstützt wird.

## Beispiele

Im Haupt-Thread beginnen wir mit der Übergabe der Kontrolle über ein {{HTMLElement("canvas")}}-Element an ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas), indem wir [`HTMLCanvasElement.transferControlToOffscreen()`](/de/docs/Web/API/HTMLCanvasElement/transferControlToOffscreen) verwenden und dann eine Nachricht an den Worker senden, seine Arbeit mit dem Offscreen-Canvas zu `"starten"`:

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

Beim Empfang der `"start"`-Nachricht beginnt der Worker mit der Animation und bewegt das Rechteck von links nach rechts. Beim Empfang einer `"stop"`-Nachricht wird die Animation angehalten.

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

Schließlich kann der Haupt-Thread, falls erforderlich, eine `"stop"`-Nachricht an den Worker senden, um die Animation zu stoppen:

```js
worker.postMessage({
  type: "stop",
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DedicatedWorkerGlobalScope.cancelAnimationFrame()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/cancelAnimationFrame)
- [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame)
