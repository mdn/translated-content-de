---
title: "SVGAnimationElement: repeatEvent Ereignis"
short-title: repeatEvent
slug: Web/API/SVGAnimationElement/repeatEvent_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("SVG")}}

Das **`repeatEvent`** Ereignis der [`SVGAnimationElement`](/de/docs/Web/API/SVGAnimationElement)-Schnittstelle wird ausgelöst, wenn die lokale Zeitleiste des Elements wiederholt wird. Es wird jedes Mal ausgelöst, wenn das Element wiederholt wird, nach der ersten Iteration.

> [!NOTE]
> Mit dem `repeatEvent` Ereignis ist ein Integer verbunden, der angibt, welche Wiederholungsiteration beginnt; dies kann in der `detail` Eigenschaft des Ereignisobjekts gefunden werden. Der Wert ist ein integer, der bei 0 beginnt, aber das Wiederholungsereignis wird nicht für die erste Iteration ausgelöst, daher werden die beobachteten Werte >= 1 sein. Dies wird in Firefox unterstützt, aber nicht in Chrome.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("repeatEvent", (event) => { })

onrepeat = (event) => { }
```

## Ereignistyp

Ein [`TimeEvent`](/de/docs/Web/API/TimeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TimeEvent")}}

## Eigenschaften des Ereignisses

- [`TimeEvent.detail`](/de/docs/Web/API/TimeEvent/detail) {{ReadOnlyInline}}
  - : Ein `long`, das einige Detailinformationen über das Ereignis angibt, abhängig vom Typ des Ereignisses. Für diesen Ereignistyp gibt es die Wiederholungsnummer für die Animation an.
- [`TimeEvent.view`](/de/docs/Web/API/TimeEvent/view) {{ReadOnlyInline}}
  - : Ein {{Glossary("WindowProxy", "WindowProxy")}}, das das Fenster identifiziert, aus dem das Ereignis generiert wurde.

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

### Equivalent der Ereignishandler-Eigenschaft

Beachten Sie, dass Sie auch einen Ereignislistener für das `repeat` Ereignis mit der `onrepeat` Ereignishandler-Eigenschaft erstellen können:

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
- [`beginEvent`](/de/docs/Web/API/SVGAnimationElement/beginEvent_event) Ereignis
- [`endEvent`](/de/docs/Web/API/SVGAnimationElement/endEvent_event) Ereignis
