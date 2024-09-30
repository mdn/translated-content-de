---
title: "VirtualKeyboard: geometrychange Event"
short-title: geometrychange
slug: Web/API/VirtualKeyboard/geometrychange_event
l10n:
  sourceCommit: 5cdb341c723de0edb273769555d9124266d9c851
---

{{APIRef("VirtualKeyboard API")}}{{SeeCompatTable}}{{securecontext_header}}

Das **`geometrychange`**-Ereignis des [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard)-Interfaces wird ausgelöst, wenn die Bildschirmtastatur zwischen den sichtbaren und versteckten Zuständen umgeschaltet wird.

Das `geometrychange`-Ereignis ist nützlich, um zu erkennen, wann die virtuelle Tastatur erscheint und verschwindet, sodass Sie das Layout entsprechend anpassen können. Dies ist notwendig, wenn die [Virtual Keyboard API](/de/docs/Web/API/VirtualKeyboard_API) verwendet wird, um die automatische Anpassung der Größe des Ansichtsfensters durch den Browser zu deaktivieren, wenn die virtuelle Tastatur angezeigt und ausgeblendet wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder legen Sie eine Ereignis-Handler-Eigenschaft fest.

```js
navigator.virtualKeyboard.addEventListener("geometrychange", (event) => {});

navigator.virtualKeyboard.ongeometrychange = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Das folgende Codebeispiel verwendet das `geometrychange`-Ereignis, um zu erkennen, wann sich die Geometrie der virtuellen Tastatur ändert, und greift dann auf die [`boundingRect`](/de/docs/Web/API/VirtualKeyboard/boundingRect)-Eigenschaft zu, um die Größe und Position der virtuellen Tastatur abzufragen:

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

- [The VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API)
- [Vollständige Kontrolle mit der VirtualKeyboard API](https://developer.chrome.com/docs/web-platform/virtual-keyboard/)
