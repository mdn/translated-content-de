---
title: "Screen: change-Ereignis"
short-title: change
slug: Web/API/Screen/change_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{securecontext_header}}

Das **`change`**-Ereignis der [`Screen`](/de/docs/Web/API/Screen)-Schnittstelle wird auf einem bestimmten Bildschirm ausgelöst, wenn eine oder mehrere der folgenden Eigenschaften geändert werden:

- [`width`](/de/docs/Web/API/Screen/width)
- [`height`](/de/docs/Web/API/Screen/height)
- [`availWidth`](/de/docs/Web/API/Screen/availWidth)
- [`availHeight`](/de/docs/Web/API/Screen/availHeight)
- [`colorDepth`](/de/docs/Web/API/Screen/colorDepth)
- [`orientation`](/de/docs/Web/API/Screen/orientation)

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("change", (event) => { })

onchange = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

```js
const firstScreen = (await window.getScreenDetails()).screens[0];
firstScreen.addEventListener("change", (event) => {
  console.log("The first screen has changed.", event, firstScreen);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Window Management API](/de/docs/Web/API/Window_Management_API)
