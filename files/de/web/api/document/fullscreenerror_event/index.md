---
title: "Dokument: fullscreenerror-Ereignis"
short-title: fullscreenerror
slug: Web/API/Document/fullscreenerror_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Fullscreen API")}}

Das **`fullscreenerror`**-Ereignis wird ausgelöst, wenn der Browser nicht in den Vollbildmodus wechseln kann.

Wie beim [`fullscreenchange`-Ereignis](/de/docs/Web/API/Document/fullscreenchange_event) werden zwei `fullscreenerror`-Ereignisse ausgelöst; das erste wird an das [`Element`](/de/docs/Web/API/Element) gesendet, bei dem der Moduswechsel fehlgeschlagen ist, und das zweite an das [`Document`](/de/docs/Web/API/Document), das dieses Element besitzt.

Für einige Gründe, warum das Umschalten in den Vollbildmodus fehlschlagen könnte, siehe [den Leitfaden zur Fullscreen API](/de/docs/Web/API/Fullscreen_API/Guide).

Dieses Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("fullscreenerror", (event) => { })

onfullscreenerror = (event) => { }
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
- [`Element`](/de/docs/Web/API/Element): [`fullscreenerror`](/de/docs/Web/API/Element/fullscreenerror_event)-Ereignis
- [Fullscreen API](/de/docs/Web/API/Fullscreen_API)
- [Leitfaden zur Fullscreen API](/de/docs/Web/API/Fullscreen_API/Guide)
