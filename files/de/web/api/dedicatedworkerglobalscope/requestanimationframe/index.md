---
title: "DedicatedWorkerGlobalScope: requestAnimationFrame()-Methode"
short-title: requestAnimationFrame()
slug: Web/API/DedicatedWorkerGlobalScope/requestAnimationFrame
l10n:
  sourceCommit: 19ca5f9271fc78eb033c448c9c21fb894e8743b9
---

{{APIRef}}{{AvailableInWorkers("dedicated")}}

Die **`requestAnimationFrame()`**-Methode des [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope)-Interfaces teilt dem Browser mit, dass Sie eine Animationsrahmenanfrage durchführen möchten und eine benutzerdefinierte Callback-Funktion vor dem nächsten Neuzeichnen aufrufen wollen.

Die Aufruffrequenz der Callback-Funktion entspricht im Allgemeinen der Bildwiederholrate des Displays. Die am häufigsten verwendete Bildwiederholrate ist 60 Hz (60 Zyklen/Bilder pro Sekunde), obwohl auch 75 Hz, 120 Hz und 144 Hz weit verbreitet sind. `requestAnimationFrame()`-Aufrufe werden in den meisten Browsern pausiert, wenn sie in Hintergrund-Tabs oder verborgenen {{HTMLElement("iframe")}}s ausgeführt werden, um die Leistung und Akkulaufzeit zu verbessern.

Ein Aufruf der `requestAnimationFrame()`-Methode plant nur einen einzigen Aufruf der Callback-Funktion. Wenn Sie einen weiteren Rahmen animieren möchten, muss Ihre Callback-Funktion `requestAnimationFrame()` erneut aufrufen.

> [!WARNING]
> Stellen Sie sicher, dass Sie immer das erste Argument (oder eine andere Methode zur Bestimmung der aktuellen Zeit) verwenden, um zu berechnen, wie weit die Animation in einem Rahmen fortschreiten wird — **ansonsten läuft die Animation auf Bildschirmen mit hoher Bildwiederholrate schneller ab**. Möglichkeiten dazu finden Sie in den unten stehenden Beispielen.

Ein Aufruf der `requestAnimationFrame()`-Methode erfordert, dass der aktuelle Worker ein zugeordnetes Besitzer-[`window`](/de/docs/Web/API/Window) hat. Das bedeutet, dass der aktuelle Worker entweder durch ein [`window`](/de/docs/Web/API/Window) oder durch einen dedizierten Worker, der ebenfalls ein zugeordnetes Besitzer-`window` hat, erstellt werden muss.

## Syntax

```js-nolint
requestAnimationFrame(callback)
```

### Parameter

- `callback`

  - : Die Funktion, die aufgerufen wird, wenn es Zeit ist, Ihre Animation für das nächste Neuzeichnen zu aktualisieren. Diese Callback-Funktion erhält ein einzelnes Argument:

    - `timestamp`

      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Endzeit der vorherigen Rahmenrendering angibt (basierend auf der Anzahl von Millisekunden seit dem [Ursprung der Zeit](/de/docs/Web/API/Performance/timeOrigin)). Der Zeitstempel ist eine Dezimalzahl in Millisekunden, aber mit einer minimalen Genauigkeit von 1 Millisekunde. Der Zeitstempelwert ist dem Aufruf von [`performance.now()`](/de/docs/Web/API/Performance/now) zu Beginn der Callback-Funktion ähnlich, jedoch niemals derselbe Wert.

        Wenn mehrere durch `requestAnimationFrame()` gesammelte Callbacks in einem einzigen Rahmen zu feuern beginnen, erhalten alle denselben Zeitstempel, obwohl Zeit während der Berechnung der Arbeitslast jedes vorherigen Callbacks vergangen ist.

### Rückgabewert

Ein `long`-Ganzzahlwert, der die Anforderungs-ID eindeutig identifiziert im Callback-Liste. Dies ist ein Wert ungleich null, aber Sie dürfen keine weiteren Annahmen darüber treffen. Sie können diesen Wert an [`cancelAnimationFrame()`](/de/docs/Web/API/DedicatedWorkerGlobalScope/cancelAnimationFrame) übergeben, um die Aktualisierungs-Callback-Anfrage zu stornieren. Die Stornierung muss im selben Worker vorgenommen worden sein.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die Methode vom aktuellen Worker nicht unterstützt wird.

## Beispiele

Im Hauptthread beginnen wir damit, die Kontrolle über ein {{HTMLElement("canvas")}}-Element an ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas) zu übertragen, indem [`HTMLCanvasElement.transferControlToOffscreen()`](/de/docs/Web/API/HTMLCanvasElement/transferControlToOffscreen) verwendet wird, und dann eine Nachricht an den Worker gesendet wird, um mit der Arbeit auf der Offscreen-Leinwand zu beginnen:

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

Beim Empfang der Nachricht `"start"` beginnt der Worker mit der Animation, bei der das Rechteck von links nach rechts bewegt wird. Beim Empfang einer Nachricht `"stop"` wird die Animation gestoppt.

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

Schließlich kann der Hauptthread, falls erforderlich, eine `"stop"`-Nachricht an den Worker senden, um die Animation zu beenden:

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
