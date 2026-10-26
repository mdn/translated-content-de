---
title: "VirtualKeyboard: geometrychange-Ereignis"
short-title: geometrychange
slug: Web/API/VirtualKeyboard/geometrychange_event
l10n:
  sourceCommit: d4f95d5a32920324e2502a556d8bdd9d7f446718
---

{{APIRef("VirtualKeyboard API")}}{{SeeCompatTable}}{{securecontext_header}}

Das **`geometrychange`**-Ereignis der [`VirtualKeyboard`](/de/docs/Web/API/VirtualKeyboard)-Schnittstelle wird ausgelöst, wenn die virtuelle Bildschirmtastatur ein- oder ausgeblendet wird.

Mit dem `geometrychange`-Ereignis können Sie erkennen, wann die virtuelle Tastatur erscheint oder verschwindet, und das Layout entsprechend anpassen. Dies ist erforderlich, wenn Sie mit der [Virtual Keyboard API](/de/docs/Web/API/VirtualKeyboard_API) verhindern, dass der Browser die Größe des Viewports beim Ein- und Ausblenden der virtuellen Tastatur automatisch anpasst.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("geometrychange", (event) => { })
```

Alternativ können Sie einen Wert zur [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
ongeometrychange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

Der folgende Codeausschnitt verwendet das `geometrychange`-Ereignis, um Änderungen an der Geometrie der virtuellen Tastatur zu erkennen. Anschließend greift er auf die Eigenschaft [`boundingRect`](/de/docs/Web/API/VirtualKeyboard/boundingRect) zu, um Größe und Position der virtuellen Tastatur abzufragen:

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

- [Die VirtualKeyboard API](/de/docs/Web/API/VirtualKeyboard_API)
- [Volle Kontrolle mit der VirtualKeyboard API](https://developer.chrome.com/docs/web-platform/virtual-keyboard/)
