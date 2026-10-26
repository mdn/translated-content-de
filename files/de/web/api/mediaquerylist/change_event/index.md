---
title: "MediaQueryList: change-Ereignis"
short-title: change
slug: Web/API/MediaQueryList/change_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{APIRef("CSSOM view API")}}

Das **`change`**-Ereignis der [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)-Schnittstelle wird ausgelöst, wenn sich der Status der Übereinstimmung mit einer Media Query ändert.

## Syntax

Verwenden Sie den Ereignisnamen mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("change", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
onchange = (event) => { }
```

## Ereignistyp

Ein [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MediaQueryListEvent")}}

## Beispiel

```js
const mql = window.matchMedia("(width <= 600px)");

mql.onchange = (e) => {
  if (e.matches) {
    /* the viewport is 600 pixels wide or less */
    console.log("This is a narrow screen — less than 600px wide.");
  } else {
    /* the viewport is more than 600 pixels wide */
    console.log("This is a wide screen — more than 600px wide.");
  }
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Media Queries](/de/docs/Web/CSS/Guides/Media_queries/Using)
- [Media Queries im Code verwenden](/de/docs/Web/CSS/Guides/Media_queries/Testing)
- [`window.matchMedia()`](/de/docs/Web/API/Window/matchMedia)
- [`MediaQueryList`](/de/docs/Web/API/MediaQueryList)
- [`MediaQueryListEvent`](/de/docs/Web/API/MediaQueryListEvent)
