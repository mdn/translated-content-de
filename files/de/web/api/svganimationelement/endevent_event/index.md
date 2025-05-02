---
title: "SVGAnimationElement: endEvent Ereignis"
short-title: endEvent
slug: Web/API/SVGAnimationElement/endEvent_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("SVG")}}

Das **`endEvent`** Ereignis der [`SVGAnimationElement`](/de/docs/Web/API/SVGAnimationElement) Schnittstelle wird ausgelöst, wenn das aktive Ende der Animation erreicht wird.

> [!NOTE]
> Dieses Ereignis wird nicht am einfachen Ende jeder Animationswiederholung ausgelöst. Es kann sowohl im Verlauf eines normalen (d.h. geplanten oder interaktiven) Zeitachsenablaufs ausgelöst werden als auch, wenn das Element mit einer DOM-Methode beendet wurde.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht nach oben weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("endEvent", (event) => { })

onend = (event) => { }
```

## Ereignistyp

Ein [`TimeEvent`](/de/docs/Web/API/TimeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TimeEvent")}}

## Ereigniseigenschaften

- [`TimeEvent.detail`](/de/docs/Web/API/TimeEvent/detail) {{ReadOnlyInline}}
  - : Ein `long`, der einige Detailinformationen über das Ereignis angibt, abhängig vom Typ des Ereignisses. Für diesen Ereignistyp wird die Wiederholungsnummer für die Animation angegeben.
- [`TimeEvent.view`](/de/docs/Web/API/TimeEvent/view) {{ReadOnlyInline}}
  - : Ein {{Glossary("WindowProxy", "WindowProxy")}}, der das Fenster identifiziert, von dem das Ereignis generiert wurde.

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
  border: 1px solid #ddd;
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

### Äquivalent zur Event-Handler-Eigenschaft

Beachten Sie, dass Sie auch einen Ereignislistener für das `end` Ereignis mit der `onend` Event-Handler-Eigenschaft erstellen können:

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
- [`beginEvent`](/de/docs/Web/API/SVGAnimationElement/beginEvent_event) Ereignis
- [`repeatEvent`](/de/docs/Web/API/SVGAnimationElement/repeatEvent_event) Ereignis
