---
title: "VirtualKeyboard: geometrychange Ereignis"
short-title: geometrychange
slug: Web/API/VirtualKeyboard/geometrychange_event
l10n:
  sourceCommit: 5cdb341c723de0edb273769555d9124266d9c851
---

{{APIRef("VirtualKeyboard API")}}{{SeeCompatTable}}{{securecontext_header}}

Das **`geometrychange`** Ereignis des {{domxref("VirtualKeyboard")}} Interfaces wird ausgelöst, wenn die Bildschirmtastatur ein- oder ausgeblendet wird.

Das `geometrychange` Ereignis ist nützlich, um zu erkennen, wann die Bildschirmtastatur erscheint und verschwindet, sodass Sie das Layout entsprechend anpassen können. Dies ist erforderlich, wenn Sie die {{domxref("VirtualKeyboard_API", "Virtual Keyboard API", "", "nocode")}} verwenden, um das standardmäßige automatische Anpassen des Viewports durch den Browser beim Ein- und Ausblenden der Bildschirmtastatur zu deaktivieren.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
navigator.virtualKeyboard.addEventListener("geometrychange", (event) => {});

navigator.virtualKeyboard.ongeometrychange = (event) => {};
```

## Ereignistyp

Ein generisches {{domxref("Event")}}.

## Beispiele

Das folgende Code-Beispiel verwendet das `geometrychange` Ereignis, um zu erkennen, wann sich die Geometrie der Bildschirmtastatur ändert, und greift dann auf die {{domxref("VirtualKeyboard.boundingRect", "boundingRect")}} Eigenschaft zu, um die Größe und Position der Bildschirmtastatur abzufragen:

```js
if ("virtualKeyboard" in navigator) {
  navigator.virtualKeyboard.overlaysContent = true;

  navigator.virtualKeyboard.addEventListener("geometrychange", (event) => {
    const { x, y, width, height } = event.target.boundingRect;
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("VirtualKeyboard_API", "Die VirtualKeyboard API", "", "nocode")}}
- [Full control with the VirtualKeyboard API](https://developer.chrome.com/docs/web-platform/virtual-keyboard/)
