---
title: "HTMLCanvasElement: contextlost-Ereignis"
short-title: contextlost
slug: Web/API/HTMLCanvasElement/contextlost_event
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Canvas API")}}

Das **`contextlost`**-Ereignis der [Canvas API](/de/docs/Web/API/Canvas_API) wird ausgelöst, wenn der User-Agent feststellt, dass der zugehörige Speicher eines [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Kontexts verloren gegangen ist.
Kontexte können aus verschiedenen Gründen verloren gehen, wie zum Beispiel Treiberabstürze oder Speichermangel der Anwendung.

Standardmäßig wird der User-Agent versuchen, den Kontext wiederherzustellen und anschließend das [`contextrestored`-Ereignis](/de/docs/Web/API/HTMLCanvasElement/contextrestored_event) auslösen.
Benutzercode kann verhindern, dass der Kontext wiederhergestellt wird, indem [`Event.preventDefault()`](/de/docs/Web/API/Event/preventDefault) während der Ereignisbehandlung aufgerufen wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("contextlost", (event) => { })

oncontextlost = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiel

Der folgende Codeausschnitt erkennt das `contextlost`-Ereignis.

```js
const canvas = document.getElementById("canvas");

canvas.addEventListener("contextlost", (event) => {
  console.log(event);
});
```

Um zu verhindern, dass der Kontext wiederhergestellt wird, könnte der Code stattdessen so aussehen:

```js
const canvas = document.getElementById("canvas");

canvas.addEventListener("contextlost", (event) => {
  event.preventDefault();
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCanvasElement: contextrestored`-Ereignis](/de/docs/Web/API/HTMLCanvasElement/contextrestored_event)
- [`CanvasRenderingContext2D.isContextLost()`](/de/docs/Web/API/CanvasRenderingContext2D/isContextLost)
- [`OffscreenCanvas: contextlost`-Ereignis](/de/docs/Web/API/OffscreenCanvas/contextlost_event)
