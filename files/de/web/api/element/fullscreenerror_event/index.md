---
title: "Element: fullscreenerror Ereignis"
short-title: fullscreenerror
slug: Web/API/Element/fullscreenerror_event
l10n:
  sourceCommit: bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{APIRef}}

Das `fullscreenerror` Ereignis wird ausgelöst, wenn der Browser nicht in den Vollbildmodus wechseln kann.

Wie beim [`fullscreenchange` Ereignis](/de/docs/Web/API/Element/fullscreenchange_event) werden zwei `fullscreenerror` Ereignisse ausgelöst; das erste wird an das {{domxref("Element")}} gesendet, das den Modus nicht ändern konnte, und das zweite wird an das {{domxref("Document")}} gesendet, dem dieses Element gehört.

Für einige Gründe, warum das Umschalten in den Vollbildmodus fehlschlagen könnte, siehe [den Leitfaden zur Fullscreen-API](/de/docs/Web/API/Fullscreen_API/Guide).

Dieses Ereignis ist nicht abbruchfähig.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignisbehandlungseigenschaft.

```js
addEventListener("fullscreenchange", (event) => {});

onfullscreenchange = (event) => {};
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

requestor.addEventListener("fullscreenerror", handleError);
// oder
requestor.onfullscreenerror = handleError;

requestor.requestFullscreen();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`fullscreenchange`](/de/docs/Web/API/Element/fullscreenchange_event)
- [Fullscreen-API](/de/docs/Web/API/Fullscreen_API)
- [Leitfaden zur Fullscreen-API](/de/docs/Web/API/Fullscreen_API/Guide)
