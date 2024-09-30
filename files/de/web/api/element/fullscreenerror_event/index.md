---
title: "Element: fullscreenerror Ereignis"
short-title: fullscreenerror
slug: Web/API/Element/fullscreenerror_event
l10n:
  sourceCommit: 8a12b2889c9dbcb7d9ed026cac3a8538ec5cb277
---

{{APIRef("Fullscreen API")}}

Das **`fullscreenerror`** Ereignis wird ausgelöst, wenn der Browser nicht in der Lage ist, in den Vollbildmodus zu wechseln.

Wie beim [`fullscreenchange`-Ereignis](/de/docs/Web/API/Element/fullscreenchange_event) werden zwei `fullscreenerror` Ereignisse ausgelöst; das erste wird an das [`Element`](/de/docs/Web/API/Element) gesendet, das den Modus nicht ändern konnte, und das zweite wird an das [`Document`](/de/docs/Web/API/Document) gesendet, dem dieses Element gehört.

Für einige Gründe, warum der Wechsel in den Vollbildmodus fehlschlagen könnte, siehe [den Leitfaden zur Fullscreen API](/de/docs/Web/API/Fullscreen_API/Guide).

Dieses Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("fullscreenchange", (event) => {});

onfullscreenchange = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

```js
const requestor = document.querySelector("div");

function handleError(event) {
  console.error("an error occurred changing into fullscreen");
  console.log(event);
}

requestor.addEventListener("fullscreenerror", handleError);
// or
requestor.onfullscreenerror = handleError;

requestor.requestFullscreen();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event)
- [Fullscreen API](/de/docs/Web/API/Fullscreen_API)
- [Leitfaden zur Fullscreen API](/de/docs/Web/API/Fullscreen_API/Guide)
