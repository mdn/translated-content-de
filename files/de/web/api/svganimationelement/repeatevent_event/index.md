---
title: "SVGAnimationElement: repeatEvent-Ereignis"
short-title: repeatEvent
slug: Web/API/SVGAnimationElement/repeatEvent_event
l10n:
  sourceCommit: 023b9075df473020b3279afa031bb4a32e3b743b
---

{{APIRef("SVG")}}

Das **`repeatEvent`**-Ereignis der [`SVGAnimationElement`](/de/docs/Web/API/SVGAnimationElement)-Schnittstelle wird ausgelöst, wenn sich die lokale Zeitleiste des Elements wiederholt. Es wird nach der ersten Iteration bei jeder weiteren Wiederholung des Elements ausgelöst.

> [!NOTE]
> Dem `repeatEvent`-Ereignis ist eine Ganzzahl zugeordnet, die angibt, welche Wiederholungsiteration beginnt. Sie befindet sich in der `detail`-Eigenschaft des Ereignisobjekts. Der Wert ist eine nullbasierte Ganzzahl. Da das Ereignis für die erste Iteration nicht ausgelöst wird, sind die beobachteten Werte jedoch >= 1. Dies wird von Firefox unterstützt, nicht aber von Chrome.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergereicht.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("repeatEvent", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
onrepeat = (event) => { }
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

### Verwendung der Event-Handler-Eigenschaft

Sie können auch mit der Event-Handler-Eigenschaft `onrepeat` einen Event-Listener für das `repeat`-Ereignis erstellen. Beachten Sie jedoch, dass dadurch andere Event-Listener ersetzt werden, die gegebenenfalls über `onrepeat` hinzugefügt wurden:

```js
animateElem.onrepeat = () => {
  console.log("repeatEvent fired");
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [SVG-Animation mit SMIL](/de/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
- [`beginEvent`](/de/docs/Web/API/SVGAnimationElement/beginEvent_event)-Ereignis
- [`endEvent`](/de/docs/Web/API/SVGAnimationElement/endEvent_event)-Ereignis
