---
title: "SVGAnimationElement: endEvent-Ereignis"
short-title: endEvent
slug: Web/API/SVGAnimationElement/endEvent_event
l10n:
  sourceCommit: 023b9075df473020b3279afa031bb4a32e3b743b
---

{{APIRef("SVG")}}

Das **`endEvent`**-Ereignis der Schnittstelle [`SVGAnimationElement`](/de/docs/Web/API/SVGAnimationElement) wird ausgelöst, wenn das aktive Ende der Animation erreicht ist.

> [!NOTE]
> Dieses Ereignis wird nicht am Ende jeder einzelnen Animationswiederholung ausgelöst. Es kann sowohl während des normalen (d.h. geplanten oder interaktiven) Ablaufs der Zeitleiste ausgelöst werden als auch dann, wenn das Element mit einer DOM-Methode beendet wurde.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht nach oben weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("endEvent", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onend = (event) => { }
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

<button>Stop animation</button>

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
let btn = document.querySelector("button");

animateElem.addEventListener("beginEvent", () => {
  let listItem = document.createElement("li");
  listItem.textContent = "beginEvent fired";
  list.appendChild(listItem);
});

animateElem.addEventListener("endEvent", () => {
  let listItem = document.createElement("li");
  listItem.textContent = "endEvent fired";
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

btn.addEventListener("click", () => {
  btn.disabled = true;
  animateElem.setAttribute("repeatCount", "1");
});
```

{{EmbedLiveSample('Animated_circle', '100%', '300')}}

### Verwendung der Event-Handler-Eigenschaft

Sie können auch mit der Event-Handler-Eigenschaft `onend` einen Event-Listener für das Ereignis `end` erstellen. Beachten Sie jedoch, dass dadurch gegebenenfalls andere mit `onend` hinzugefügte Event-Listener ersetzt werden:

```js
animateElem.onend = () => {
  console.log("endEvent fired");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SVG-Animation mit SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
- [`beginEvent`](/de/docs/Web/API/SVGAnimationElement/beginEvent_event)-Ereignis
- [`repeatEvent`](/de/docs/Web/API/SVGAnimationElement/repeatEvent_event)-Ereignis
