---
title: "Screen: change-Ereignis"
short-title: change
slug: Web/API/Screen/change_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{APIRef("Window Management API")}}{{SeeCompatTable}}{{securecontext_header}}

Das **`change`**-Ereignis der [`Screen`](/de/docs/Web/API/Screen)-Schnittstelle wird für einen bestimmten Bildschirm ausgelöst, wenn sich eine oder mehrere der folgenden Eigenschaften ändern:

- [`width`](/de/docs/Web/API/Screen/width)
- [`height`](/de/docs/Web/API/Screen/height)
- [`availWidth`](/de/docs/Web/API/Screen/availWidth)
- [`availHeight`](/de/docs/Web/API/Screen/availHeight)
- [`colorDepth`](/de/docs/Web/API/Screen/colorDepth)
- [`orientation`](/de/docs/Web/API/Screen/orientation)

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("change", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
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
