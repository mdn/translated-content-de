---
title: "SVGAnimationElement: beginEvent-Ereignis"
short-title: beginEvent
slug: Web/API/SVGAnimationElement/beginEvent_event
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("SVG")}}

Das **`beginEvent`**-Ereignis der {{domxref("SVGAnimationElement")}}-Schnittstelle wird ausgelöst, wenn die lokale Timeline des Elements beginnt zu spielen. Es wird jedes Mal ausgelöst, wenn das Element die aktive Dauer beginnt (d. h. wenn es neu startet, jedoch nicht, wenn es wiederholt wird).

Es kann sowohl im Verlauf des normalen (d. h. geplanten oder interaktiven) Timelinespielens als auch im Fall, dass das Element mit einer DOM-Methode gestartet wurde, ausgelöst werden.

Dieses Ereignis kann nicht abgebrochen werden und blubbert nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("beginEvent", (event) => {});

onbegin = (event) => {};
```

## Ereignistyp

Ein {{domxref("TimeEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("TimeEvent")}}

## Ereigniseigenschaften

- {{domxref("TimeEvent.detail")}} {{ReadOnlyInline}}
  - : Ein `long`, das einige Detailinformationen über das Ereignis spezifiziert, abhängig vom Typ des Ereignisses. Für diesen Ereignistyp gibt es die Wiederholungsnummer für die Animation an.
- {{domxref("TimeEvent.view")}} {{ReadOnlyInline}}
  - : Ein {{glossary("WindowProxy")}}, das das Fenster identifiziert, aus dem das Ereignis generiert wurde.

## Beispiele

### Animierter Kreis

```html
<svg xmlns="http://www.w3.org/2000/svg" width="300px" height="100px">
  <title>SVG SMIL-Animation mit Pfad</title>
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

### Äquivalent zur Ereignishandler-Eigenschaft

Beachten Sie, dass Sie auch einen Ereignislistener für das `begin`-Ereignis mithilfe der `onbegin`-Ereignishandlereigenschaft erstellen können:

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
- {{domxref("SVGAnimationElement.endEvent_event", "endEvent")}}-Ereignis
- {{domxref("SVGAnimationElement.repeatEvent_event", "repeatEvent")}}-Ereignis
