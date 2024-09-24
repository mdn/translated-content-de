---
title: "OffscreenCanvas: contextlost Ereignis"
short-title: contextlost
slug: Web/API/OffscreenCanvas/contextlost_event
l10n:
  sourceCommit: fd3ed7581658bd33c7a596a84be81103faedb10a
---

{{APIRef("Canvas API")}}

Das **`contextlost`**-Ereignis der {{domxref("OffscreenCanvas")}}-Schnittstelle wird ausgelöst, wenn der Browser erkennt, dass der [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D)-Kontext verloren gegangen ist. Kontexte können aus verschiedenen Gründen verloren gehen, wie zum Beispiel Abstürzen des zugehörigen GPU-Treibers oder wenn die Anwendung nicht genügend Speicher hat und so weiter.

Standardmäßig versucht der Benutzeragent, den Kontext wiederherzustellen und löst dann das [`contextrestored` Ereignis](/de/docs/Web/API/OffscreenCanvas/contextrestored_event) aus. Der Benutzer-Code kann verhindern, dass der Kontext wiederhergestellt wird, indem er [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) während der Ereignisbehandlung aufruft.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("contextlost", (event) => {});

oncontextlost = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

Das untenstehende Codefragment erkennt das `contextlost`-Ereignis.

```js
const canvas = new OffscreenCanvas(256, 256);
const gl = offscreen.getContext("2d");

// Do drawing etc

canvas.addEventListener("contextlost", (event) => {
  console.log(event);
});
```

Um zu verhindern, dass der Kontext wiederhergestellt wird, könnte der Ereignishandler-Code stattdessen so aussehen:

```js
canvas.addEventListener("contextlost", (event) => {
  event.preventDefault();
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`OffScreenCanvas: contextrestored` Ereignis](/de/docs/Web/API/OffscreenCanvas/contextrestored_event)
- [`OffscreenCanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D#canvasrenderingcontext2d.iscontextlost)
- [`HTMLCanvasElement: contextlost` Ereignis](/de/docs/Web/API/HTMLCanvasElement/contextlost_event)
