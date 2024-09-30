---
title: "SVGAnimationElement: repeatEvent-Ereignis"
short-title: repeatEvent
slug: Web/API/SVGAnimationElement/repeatEvent_event
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("SVG")}}

Das **`repeatEvent`**-Ereignis der [`SVGAnimationElement`](/de/docs/Web/API/SVGAnimationElement)-Schnittstelle wird ausgelöst, wenn die lokale Zeitleiste des Elements wiederholt wird. Es wird jedes Mal ausgelöst, wenn das Element wiederholt wird, nach der ersten Iteration.

> [!NOTE]
> Mit dem `repeatEvent`-Ereignis ist eine ganze Zahl verknüpft, die angibt, welche Wiederholungsiteration beginnt; diese kann in der `detail`-Eigenschaft des Ereignisobjekts gefunden werden. Der Wert ist eine 0-basierte Ganzzahl, aber das Wiederholungsereignis wird nicht für die erste Iteration ausgelöst, sodass die beobachteten Werte >= 1 sind. Dies wird in Firefox unterstützt, aber nicht in Chrome.

Dieses Ereignis ist nicht abbruchbar und löst sich nicht in der Ereignisblase auf.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("repeatEvent", (event) => {});

onrepeat = (event) => {};
```

## Ereignistyp

Ein [`TimeEvent`](/de/docs/Web/API/TimeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("TimeEvent")}}

## Ereigniseigenschaften

- [`TimeEvent.detail`](/de/docs/Web/API/TimeEvent/detail) {{ReadOnlyInline}}
  - : Ein `long`, das einige Detailinformationen über das Ereignis angibt, abhängig vom Typ des Ereignisses. Für diesen Ereignistyp gibt er die Wiederholungsnummer für die Animation an.
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

### Ereignishandler-Eigenschaft Äquivalent

Beachten Sie, dass Sie einen Ereignislistener für das `repeat`-Ereignis auch mit der `onrepeat`-Ereignishandler-Eigenschaft erstellen können:

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

- [SVG-Animation mit SMIL](/de/docs/Web/SVG/SVG_animation_with_SMIL)
- [`beginEvent`](/de/docs/Web/API/SVGAnimationElement/beginEvent_event)-Ereignis
- [`endEvent`](/de/docs/Web/API/SVGAnimationElement/endEvent_event)-Ereignis
