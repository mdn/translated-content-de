---
title: "SVGAnimationElement: beginEvent Ereignis"
short-title: beginEvent
slug: Web/API/SVGAnimationElement/beginEvent_event
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}}

Das **`beginEvent`** Ereignis der [`SVGAnimationElement`](/de/docs/Web/API/SVGAnimationElement) Schnittstelle wird ausgelöst, wenn die lokale Zeitleiste des Elements zu spielen beginnt. Es wird jedes Mal ausgelöst, wenn das Element die aktive Dauer beginnt (d. h. wenn es neu startet, aber nicht bei Wiederholungen).

Es kann sowohl im Verlauf eines normalen (d. h. geplanten oder interaktiven) Zeitleisten-Spiels als auch im Fall, dass das Element mit einer DOM-Methode gestartet wurde, ausgelöst werden.

Dieses Ereignis ist nicht abbruchfähig und wird nicht an übergeordnete Elemente weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("beginEvent", (event) => {});

onbegin = (event) => {};
```

## Ereignistyp

Ein [`TimeEvent`](/de/docs/Web/API/TimeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TimeEvent")}}

## Ereigniseigenschaften

- [`TimeEvent.detail`](/de/docs/Web/API/TimeEvent/detail) {{ReadOnlyInline}}
  - : Ein `long`, das einige Detailinformationen über das Ereignis je nach Ereignistyp angibt. Für diesen Ereignistyp gibt es die Wiederholungsnummer für die Animation an.
- [`TimeEvent.view`](/de/docs/Web/API/TimeEvent/view) {{ReadOnlyInline}}
  - : Ein [WindowProxy](/de/docs/Glossary/WindowProxy), das das Fenster identifiziert, von dem das Ereignis generiert wurde.

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
  border: 1px solid #ddd;
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

### Äquivalent zur Ereignis-Handler-Eigenschaft

Beachten Sie, dass Sie auch einen Ereignislistener für das `begin` Ereignis mit der `onbegin` Ereignis-Handler-Eigenschaft erstellen können:

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

- [SVG-Animation mit SMIL](/de/docs/Web/SVG/SVG_animation_with_SMIL)
- [`endEvent`](/de/docs/Web/API/SVGAnimationElement/endEvent_event) Ereignis
- [`repeatEvent`](/de/docs/Web/API/SVGAnimationElement/repeatEvent_event) Ereignis
