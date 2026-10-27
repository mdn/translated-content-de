---
title: "SVGAnimationElement: beginEvent-Ereignis"
short-title: beginEvent
slug: Web/API/SVGAnimationElement/beginEvent_event
l10n:
  sourceCommit: 023b9075df473020b3279afa031bb4a32e3b743b
---

{{APIRef("SVG")}}

Das **`beginEvent`**-Ereignis der [`SVGAnimationElement`](/de/docs/Web/API/SVGAnimationElement)-Schnittstelle wird ausgelöst, wenn die lokale Zeitleiste des Elements zu laufen beginnt. Es wird jedes Mal ausgelöst, wenn die aktive Dauer des Elements beginnt (also wenn es neu startet, nicht aber wenn es sich wiederholt).

Es kann sowohl während des normalen (also geplanten oder interaktiven) Ablaufs der Zeitleiste als auch dann ausgelöst werden, wenn das Element mit einer DOM-Methode gestartet wurde.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht durch die DOM-Hierarchie weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("beginEvent", (event) => { })
```

Alternativ können Sie die [Ereignisbehandlungseigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle verwenden:

```js-nolint
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

### Verwendung der Ereignisbehandlungseigenschaft

Sie können auch mit der Ereignisbehandlungseigenschaft `onbegin` einen Event-Listener für das Ereignis `begin` erstellen. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `onbegin` hinzugefügte Event-Listener ersetzt werden:

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
- Ereignis [`endEvent`](/de/docs/Web/API/SVGAnimationElement/endEvent_event)
- Ereignis [`repeatEvent`](/de/docs/Web/API/SVGAnimationElement/repeatEvent_event)
