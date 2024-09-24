---
title: "Dokument: fullscreenerror-Ereignis"
short-title: fullscreenerror
slug: Web/API/Document/fullscreenerror_event
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef}}

Das `fullscreenerror`-Ereignis wird ausgelöst, wenn der Browser nicht in den Vollbildmodus wechseln kann.

Wie beim [`fullscreenchange`-Ereignis](/de/docs/Web/API/Document/fullscreenchange_event) werden zwei `fullscreenerror`-Ereignisse ausgelöst; das erste wird an das {{domxref("Element")}} gesendet, das den Modus nicht wechseln konnte, und das zweite wird an das {{domxref("Document")}} gesendet, dem dieses Element gehört.

Einige Gründe, warum der Wechsel in den Vollbildmodus fehlschlagen könnte, finden Sie im [Leitfaden zur Fullscreen API](/de/docs/Web/API/Fullscreen_API/Guide).

Dieses Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("fullscreenerror", (event) => {});

onfullscreenerror = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

```js
const requestor = document.querySelector("div");

function handleError(event) {
  console.error("an error occurred changing into fullscreen");
  console.log(event);
}

document.addEventListener("fullscreenerror", handleError);
// oder
document.onfullscreenerror = handleError;

requestor.requestFullscreen();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Document/fullscreenchange_event", "fullscreenchange")}}
- {{domxref("Element")}}: {{domxref("Element/fullscreenerror_event", "fullscreenerror")}}-Ereignis
- [Fullscreen API](/de/docs/Web/API/Fullscreen_API)
- [Leitfaden zur Fullscreen API](/de/docs/Web/API/Fullscreen_API/Guide)
