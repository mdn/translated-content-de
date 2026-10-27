---
title: "Dokument: fullscreenerror-Ereignis"
short-title: fullscreenerror
slug: Web/API/Document/fullscreenerror_event
l10n:
  sourceCommit: 1c322acc575d927494ecff49c04159ba34aec781
---

{{APIRef("Fullscreen API")}}

Das **`fullscreenerror`**-Ereignis wird ausgelöst, wenn der Browser nicht in den Vollbildmodus wechseln kann.

Wie beim [`fullscreenchange`-Ereignis](/de/docs/Web/API/Document/fullscreenchange_event) werden zwei `fullscreenerror`-Ereignisse ausgelöst: Das erste wird an das [`Element`](/de/docs/Web/API/Element) gesendet, bei dem der Moduswechsel fehlgeschlagen ist, und das zweite an das [`Document`](/de/docs/Web/API/Document), zu dem dieses Element gehört.

Mögliche Gründe dafür, dass der Wechsel in den Vollbildmodus fehlschlägt, finden Sie im [Leitfaden zur Fullscreen API](/de/docs/Web/API/Fullscreen_API/Guide).

Dieses Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("fullscreenerror", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
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
// Or (but note that this replaces other event listeners
// added using onfullscreenerror, if any)
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
