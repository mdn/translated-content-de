---
title: "SVGAnimationElement: repeatEvent-Ereignis"
short-title: repeatEvent
slug: Web/API/SVGAnimationElement/repeatEvent_event
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("SVG")}}

Das **`repeatEvent`**-Ereignis der {{domxref("SVGAnimationElement")}}-Schnittstelle wird ausgelöst, wenn die lokale Zeitleiste des Elements wiederholt wird. Es wird jedes Mal ausgelöst, wenn das Element wiederholt wird, nach der ersten Iteration.

> [!NOTE]
> Dem `repeatEvent`-Ereignis ist eine ganze Zahl zugeordnet, die angibt, welche Wiederholungsiteration beginnt; diese kann in der `detail`-Eigenschaft des Ereignisobjekts gefunden werden. Der Wert ist eine nullbasierte Ganzzahl, aber das Wiederholungsereignis wird für die erste Iteration nicht ausgelöst, sodass die beobachteten Werte >= 1 sind. Dies wird in Firefox unterstützt, aber nicht in Chrome.

Dieses Ereignis ist nicht abbruchsicher und bläst nicht auf.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("repeatEvent", (event) => {});

onrepeat = (event) => {};
```

## Ereignistyp

Ein {{domxref("TimeEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("TimeEvent")}}

## Ereigniseigenschaften

- {{domxref("TimeEvent.detail")}} {{ReadOnlyInline}}
  - : Ein `long`, der je nach Typ des Ereignisses einige Detailinformationen über das Ereignis angibt. Für diesen Ereignistyp wird die Wiederholungsnummer der Animation angezeigt.
- {{domxref("TimeEvent.view")}} {{ReadOnlyInline}}
  - : Ein {{glossary("WindowProxy")}}, der das Fenster identifiziert, aus dem das Ereignis generiert wurde.

## Beispiele

### Animierter Kreis

```html
<svg xmlns="http://www.w3.org/2000/svg" width="300px" height="100px">
  <title>SVG SMIL Animate mit Pfad</title>
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

### Gleichwertige Ereignis-Handler-Eigenschaft

Beachten Sie, dass Sie auch einen Ereignis-Listener für das `repeat`-Ereignis mit der `onrepeat`-Ereignis-Handler-Eigenschaft erstellen können:

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
- {{domxref("SVGAnimationElement.beginEvent_event", "beginEvent")}}-Ereignis
- {{domxref("SVGAnimationElement.endEvent_event", "endEvent")}}-Ereignis
