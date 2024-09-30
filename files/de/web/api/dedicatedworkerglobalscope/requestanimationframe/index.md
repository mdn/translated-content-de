---
title: "DedicatedWorkerGlobalScope: requestAnimationFrame()-Methode"
short-title: requestAnimationFrame()
slug: Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame
l10n:
  sourceCommit: 19ca5f9271fc78eb033c448c9c21fb894e8743b9
---

{{APIRef}}{{AvailableInWorkers("dedicated")}}

Die **`requestAnimationFrame()`**-Methode der Schnittstelle [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) teilt dem Browser mit, dass Sie eine Animationsframe-Anfrage durchführen und eine benutzerdefinierte Callback-Funktion vor dem nächsten Neuzeichnen aufrufen möchten.

Die Häufigkeit der Aufrufe der Callback-Funktion entspricht im Allgemeinen der Bildwiederholrate des Displays. Die häufigste Bildwiederholrate ist 60 Hz (60 Zyklen/Bilder pro Sekunde), obwohl auch 75 Hz, 120 Hz und 144 Hz weit verbreitet sind. `requestAnimationFrame()`-Aufrufe werden in den meisten Browsern pausiert, wenn sie in Hintergrund-Tabs oder versteckten {{HTMLElement("iframe")}}s ausgeführt werden, um die Leistung und die Akkulaufzeit zu verbessern.

Ein Aufruf der `requestAnimationFrame()`-Methode plant nur einen einzigen Aufruf der Callback-Funktion. Wenn Sie ein weiteres Bild animieren möchten, muss Ihre Callback-Funktion `requestAnimationFrame()` erneut aufrufen.

> [!WARNING]
> Stellen Sie sicher, dass Sie immer das erste Argument (oder eine andere Methode zur Ermittlung der aktuellen Zeit) verwenden, um zu berechnen, wie weit die Animation in einem Frame fortschreiten wird — **sonst läuft die Animation auf Bildschirmen mit hoher Bildwiederholrate schneller**. Für Methoden dazu, siehe die Beispiele unten.

Der Aufruf der `requestAnimationFrame()`-Methode erfordert, dass der aktuelle Worker ein zugehöriges Eigentümer-[`Fenster`](/de/docs/Web/API/Window) hat. Das bedeutet, dass der aktuelle Worker von einem [`Fenster`](/de/docs/Web/API/Window) oder von einem dedizierten Worker erstellt werden muss, der ebenfalls ein zugehöriges Eigentümer-[`Fenster`](/de/docs/Web/API/Window) hat.

## Syntax

```js-nolint
requestAnimationFrame(callback)
```

### Parameter

- `callback`

  - : Die Funktion, die aufgerufen wird, wenn es Zeit ist, Ihre Animation für das nächste Neuzeichnen zu aktualisieren. Diese Callback-Funktion erhält ein einzelnes Argument:

    - `timestamp`

      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Endzeit des Renderings des vorherigen Frames anzeigt (basierend auf der Anzahl der Millisekunden seit dem [time origin](/de/docs/Web/API/Performance/timeOrigin)). Der Zeitstempel ist eine Dezimalzahl in Millisekunden, aber mit einer minimalen Genauigkeit von 1 Millisekunde. Der Zeitstempelwert ist auch dem Aufruf von [`performance.now()`](/de/docs/Web/API/Performance/now) zu Beginn der Callback-Funktion ähnlich, ist jedoch niemals derselbe Wert.

        Wenn mehrere von `requestAnimationFrame()` gequeue'te Callbacks in einem einzigen Frame ausgelöst werden, erhält jeder denselben Zeitstempel, obwohl während der Berechnung der Arbeitslast jedes vorhergehenden Callbacks Zeit vergangen ist.

### Rückgabewert

Ein `long`-Ganzwert, der die Anforderungs-ID eindeutig identifiziert
in der Callback-Liste. Dies ist ein Wert ungleich null, aber Sie dürfen keine weiteren
Annahmen darüber treffen. Sie können diesen Wert an
[`cancelAnimationFrame()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/cancelAnimationFrame) übergeben, um die Aktualisierungs-Callback-Anfrage zu stornieren. Die Stornoaktion muss im selben Worker durchgeführt worden sein.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Methode vom aktuellen Worker nicht unterstützt wird.

## Beispiele

Im Haupt-Thread beginnen wir damit, die Kontrolle eines {{HTMLElement("canvas")}}-Elements auf ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) zu übertragen, indem wir [`HTMLCanvasElement.transferControlToOffscreen()`](/de/docs/Web/API/HTMLCanvasElement/transferControlToOffscreen) verwenden. Anschließend senden wir eine Nachricht an den Worker, um seine Arbeit mit dem Offscreen-Canvas mit dem Befehl `"start"` zu beginnen:

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

Beim Empfang der `"start"`-Nachricht startet der Worker die Animation, indem er das Rechteck von links nach rechts bewegt. Beim Empfang einer `"stop"`-Nachricht wird die Animation gestoppt.

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

Schließlich, falls erforderlich, kann der Haupt-Thread eine `"stop"`-Nachricht an den Worker senden, um die Animation zu stoppen:

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
