---
title: "Animation: persist() Methode"
short-title: persist()
slug: Web/API/Animation/persist
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Animations")}}

Die `persist()` Methode der [`Animation`](/de/docs/Web/API/Animation)-Schnittstelle der [Web Animations API](/de/docs/Web/API/Web_Animations_API) speichert eine Animation explizit, um zu verhindern, dass sie [automatisch entfernt](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#automatically_removing_filling_animations) wird, wenn sie durch eine andere Animation ersetzt wird.

## Syntax

```js-nolint
persist()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Verwendung von `persist()`

In diesem Beispiel gibt es drei Schaltflächen:

- "Dauerhafte Animation hinzufügen" und "Kurzfristige Animation hinzufügen" fügen jeweils eine neue Transformationsanimation zum roten Quadrat hinzu. Die Animationen wechseln die Richtung: Die erste ist von links nach rechts, die zweite von rechts nach links usw. "Dauerhafte Animation hinzufügen" ruft `persist()` bei der erstellten Animation auf.

- Die dritte Schaltfläche "Eine Animation abbrechen" bricht die zuletzt hinzugefügte Animation ab.

Das Beispiel zeigt eine Liste aller nicht abgebrochenen Animationen in der Reihenfolge, in der sie hinzugefügt wurden, zusammen mit dem `replaceState` jeder Animation.

#### HTML

```html
<div id="animation-target"></div>
<button id="start-persistent">Add persistent animation</button>
<button id="start-transient">Add transient animation</button>
<button id="cancel">Cancel an animation</button>
<ol id="stack"></ol>
```

```html hidden
<template id="list-item-template">
  <li>
    <span class="replaceState"></span>,
    <span class="description"></span>
  </li>
</template>
```

#### CSS

```css
div {
  width: 100px;
  height: 100px;
  background: red;
  transform: translate(100px);
}
```

#### JavaScript

```js
const target = document.getElementById("animation-target");
const persistentButton = document.getElementById("start-persistent");
const transientButton = document.getElementById("start-transient");
const cancelButton = document.getElementById("cancel");
persistentButton.addEventListener("click", () => startAnimation(true));
transientButton.addEventListener("click", () => startAnimation(false));
cancelButton.addEventListener("click", cancelTop);
const stack = [];

let offset = -100;

function startAnimation(persist) {
  offset = -offset;
  const animation = target.animate(
    { transform: `translate(${100 + offset}px)` },
    { duration: 500, fill: "forwards" },
  );
  stack.push(animation);
  if (persist) {
    animation.persist();
  }
  // Add the animation to the displayed stack (implementation not shown)
  show(animation, offset);
}

function cancelTop() {
  stack.pop()?.cancel();
}
```

```js hidden
const stackDisplay = document.getElementById("stack");
const template =
  document.getElementById("list-item-template").content.firstElementChild;
const nodes = new Map();

function show(animation, offset) {
  const direction = offset < 0 ? "left" : "right";
  const li = template.cloneNode(true);
  const description = li.querySelector(".description");
  const replaceState = li.querySelector(".replaceState");
  description.textContent = direction;
  replaceState.textContent = animation.replaceState;
  nodes.set(animation, { li, description, replaceState });
  stackDisplay.append(li);
  animation.addEventListener("cancel", () => {
    nodes.get(animation).li.remove();
    nodes.delete(animation);
  });
  animation.addEventListener("remove", () => {
    nodes.get(animation).replaceState.textContent = animation.replaceState;
  });
}
```

#### Ergebnis

Beachten Sie, dass das Hinzufügen einer neuen kurzfristigen Animation eine zuvor hinzugefügte kurzfristige Animation ersetzt. Diese Animationen werden automatisch entfernt, und ihr `replaceState` wird `"removed"` sein. Dauerhafte Animationen werden jedoch nicht entfernt.

Beachten Sie auch, dass entfernte Animationen die Anzeige nicht beeinflussen; die Position des {{htmlelement("div")}} wird durch die zuletzt aktive oder gespeicherte Animation bestimmt.

{{EmbedLiveSample("using_persist","",300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- [`Animation`](/de/docs/Web/API/Animation) für weitere Methoden und Eigenschaften, die Sie zur Steuerung der Seitenanimation verwenden können.
- [`Animation.replaceState`](/de/docs/Web/API/Animation/replaceState)
- [`remove`](/de/docs/Web/API/Animation/remove_event) Ereignis
