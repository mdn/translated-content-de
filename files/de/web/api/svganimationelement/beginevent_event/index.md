---
title: "SVGAnimationElement: beginEvent-Ereignis"
short-title: beginEvent
slug: Web/API/SVGAnimationElement/beginEvent_event
l10n:
  sourceCommit: f4c221962681b1472cd57da60379ad7825fe5081
---

{{APIRef("SVG")}}

Das **`beginEvent`**-Ereignis der Schnittstelle [`SVGAnimationElement`](/de/docs/Web/API/SVGAnimationElement) wird ausgelöst, wenn die lokale Zeitleiste des Elements zu spielen beginnt. Es wird jedes Mal ausgelöst, wenn das Element die aktive Dauer beginnt (d.h. wenn es neu gestartet wird, jedoch nicht wenn es wiederholt wird).

Es kann sowohl im Verlauf der normalen (d.h. geplanten oder interaktiven) Wiedergabe der Zeitleiste als auch in dem Fall ausgelöst werden, dass das Element mit einer DOM-Methode gestartet wurde.

Dieses Ereignis ist nicht abbrechbar und wird nicht weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("beginEvent", (event) => { })

onbegin = (event) => { }
```

## Ereignistyp

Ein [`TimeEvent`](/de/docs/Web/API/TimeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TimeEvent")}}

## Beispiele

### Animierter Kreis

```html
<svg xmlns="http://www.w3.org/2000/svg" width="300px" height="100px">
  <title>SVG SMIL Animate with Path</title>
  <circle cx="0" cy="50" r="50" fill="blue" stroke="black" stroke-width="1">
    <animateMotion path="M 0 0 H 300 Z" dur="5s" repeatCount="indefinite" />
  </circle>
</svg>

<hr />

<ul></ul>
```

```css
ul {
  height: 100px;
  border: 1px solid #dddddd;
  overflow-y: scroll;
  padding: 10px 30px;
}
```

```js
let svgElem = document.querySelector("svg");
let animateElem = document.querySelector("animateMotion");
let list = document.querySelector("ul");

animateElem.addEventListener("beginEvent", () => {
  let listItem = document.createElement("li");
  listItem.textContent = "beginEvent fired";
  list.appendChild(listItem);
});

animateElem.addEventListener("repeatEvent", (e) => {
  let listItem = document.createElement("li");
  let msg = "repeatEvent fired";
  if (e.detail) {
    msg += `; repeat number: ${e.detail}`;
  }
  listItem.textContent = msg;
  list.appendChild(listItem);
});
```

{{EmbedLiveSample('Animated_circle', '100%', '270')}}

### Entsprechende Ereignishandler-Eigenschaft

Beachten Sie, dass Sie auch einen Ereignis-Listener für das `begin`-Ereignis mithilfe der Ereignishandler-Eigenschaft `onbegin` erstellen können:

```js
animateElem.onbegin = () => {
  console.log("beginEvent fired");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SVG-Animation mit SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
- `endEvent`-Ereignis von [`SVGAnimationElement`](/de/docs/Web/API/SVGAnimationElement/endEvent_event)
- `repeatEvent`-Ereignis von [`SVGAnimationElement`](/de/docs/Web/API/SVGAnimationElement/repeatEvent_event)
