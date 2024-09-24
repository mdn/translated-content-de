---
title: "SVGAnimationElement: endEvent Ereignis"
short-title: endEvent
slug: Web/API/SVGAnimationElement/endEvent_event
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("SVG")}}

Das **`endEvent`**-Ereignis der {{domxref("SVGAnimationElement")}}-Schnittstelle wird ausgelöst, wenn das aktive Ende der Animation erreicht ist.

> [!NOTE]
> Dieses Ereignis wird nicht am einfachen Ende jeder Animationswiederholung ausgelöst. Es kann sowohl im Verlauf des normalen (d. h. geplanten oder interaktiven) Zeitachsenablaufs als auch im Fall, dass das Element mit einer DOM-Methode beendet wurde, ausgelöst werden.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("endEvent", (event) => {});

onend = (event) => {};
```

## Ereignistyp

Ein {{domxref("TimeEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("TimeEvent")}}

## Ereigniseigenschaften

- {{domxref("TimeEvent.detail")}} {{ReadOnlyInline}}
  - : Ein `long`, das einige Detailinformationen über das Ereignis angibt, abhängig vom Ereignistyp. Für diesen Ereignistyp gibt es die Wiederholungszahl der Animation an.
- {{domxref("TimeEvent.view")}} {{ReadOnlyInline}}
  - : Ein {{glossary("WindowProxy")}}, das das Fenster identifiziert, aus dem das Ereignis erzeugt wurde.

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

### Äquivalente Ereignis-Handler-Eigenschaft

Beachten Sie, dass Sie auch einen Ereignis-Listener für das `end`-Ereignis mit der `onend`-Ereignis-Handler-Eigenschaft erstellen können:

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

- [SVG-Animation mit SMIL](/de/docs/Web/SVG/SVG_animation_with_SMIL)
- {{domxref("SVGAnimationElement.beginEvent_event", "beginEvent")}} Ereignis
- {{domxref("SVGAnimationElement.repeatEvent_event", "repeatEvent")}} Ereignis
