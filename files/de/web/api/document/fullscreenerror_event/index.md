---
title: "Dokument: fullscreenerror-Ereignis"
short-title: fullscreenerror
slug: Web/API/Document/fullscreenerror_event
l10n:
  sourceCommit: 8a12b2889c9dbcb7d9ed026cac3a8538ec5cb277
---

{{APIRef("Fullscreen API")}}

Das **`fullscreenerror`**-Ereignis wird ausgelöst, wenn der Browser nicht in den Vollbildmodus wechseln kann.

Wie beim [`fullscreenchange`-Ereignis](/de/docs/Web/API/Document/fullscreenchange_event) werden zwei `fullscreenerror`-Ereignisse ausgelöst; das erste wird an das [`Element`](/de/docs/Web/API/Element) gesendet, das den Moduswechsel nicht durchführen konnte, und das zweite wird an das [`Document`](/de/docs/Web/API/Document) gesendet, dem dieses Element gehört.

Einige Gründe, warum der Wechsel in den Vollbildmodus fehlschlagen könnte, finden Sie im [Leitfaden zur Fullscreen-API](/de/docs/Web/API/Fullscreen_API/Guide).

Dieses Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("fullscreenerror", (event) => {});

onfullscreenerror = (event) => {};
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

document.addEventListener("fullscreenerror", handleError);
// or
document.onfullscreenerror = handleError;

requestor.requestFullscreen();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`fullscreenchange`](/de/docs/Web/API/Document/fullscreenchange_event)
- [`Element`](/de/docs/Web/API/Element): [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event) Ereignis
- [Fullscreen API](/de/docs/Web/API/Fullscreen_API)
- [Leitfaden zur Fullscreen-API](/de/docs/Web/API/Fullscreen_API/Guide)
