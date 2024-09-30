---
title: "Screen: change Ereignis"
short-title: change
slug: Web/API/Screen/change_event
l10n:
  sourceCommit: e089abbca14964a8ce945135d954cbfd098fd6f7
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{securecontext_header}}

Das **`change`**-Ereignis der [`Screen`](/de/docs/Web/API/Screen)-Schnittstelle wird auf einem bestimmten Bildschirm ausgelöst, wenn sich eine oder mehrere der folgenden Eigenschaften ändern:

- [`width`](/de/docs/Web/API/Screen/width)
- [`height`](/de/docs/Web/API/Screen/height)
- [`availWidth`](/de/docs/Web/API/Screen/availWidth)
- [`availHeight`](/de/docs/Web/API/Screen/availHeight)
- [`colorDepth`](/de/docs/Web/API/Screen/colorDepth)
- [`orientation`](/de/docs/Web/API/Screen/orientation)

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("change", (event) => {});

onchange = (event) => {};
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
