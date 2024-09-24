---
title: "Animation: persist()-Methode"
short-title: persist()
slug: Web/API/Animation/persist
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Animations")}}

Die `persist()`-Methode der {{domxref("Animation")}}-Schnittstelle des [Web Animations API](/de/docs/Web/API/Web_Animations_API) erhält eine Animation explizit, um zu verhindern, dass sie [automatisch entfernt wird](/de/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API#automatically_removing_filling_animations), wenn sie durch eine andere Animation ersetzt wird.

## Syntax

```js-nolint
persist()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

### Verwendung von `persist()`

In diesem Beispiel haben wir drei Schaltflächen:

- "Permanente Animation hinzufügen" und "Vorübergehende Animation hinzufügen" fügen dem roten Quadrat jeweils eine neue Transformationsanimation hinzu. Die Animationen wechseln die Richtung: Die erste geht von links nach rechts, die zweite von rechts nach links und so weiter. "Permanente Animation hinzufügen" ruft `persist()` auf die erstellte Animation auf.

- Die dritte Schaltfläche, "Eine Animation abbrechen", bricht die zuletzt hinzugefügte Animation ab.

Das Beispiel zeigt eine Liste aller Animationen an, die nicht abgebrochen wurden, in der Reihenfolge, in der sie hinzugefügt wurden, zusammen mit dem `replaceState` jeder Animation.

#### HTML

```html
<div id="animation-target"></div>
<button id="start-persistent">Permanente Animation hinzufügen</button>
<button id="start-transient">Vorübergehende Animation hinzufügen</button>
<button id="cancel">Eine Animation abbrechen</button>
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
  // Fügt die Animation dem angezeigten Stapel hinzu (Implementierung nicht gezeigt)
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
  const direction = offset < 0 ? "links" : "rechts";
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

Beachten Sie, dass das Hinzufügen einer neuen vorübergehenden Animation jede zuvor hinzugefügte vorübergehende Animation ersetzt. Diese Animationen werden automatisch entfernt, und ihr `replaceState` wird `"removed"` sein. Permanente Animationen werden jedoch nicht entfernt.

Beachten Sie auch, dass entfernte Animationen die Anzeige nicht beeinflussen; die Position des {{htmlelement("div")}} wird durch die zuletzt aktive oder persistente Animation bestimmt.

{{EmbedLiveSample("using_persist","",300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Animations API](/de/docs/Web/API/Web_Animations_API)
- {{domxref("Animation")}} für andere Methoden und Eigenschaften, die Sie zur Steuerung der Webseiten-Animation verwenden können.
- {{domxref("Animation.replaceState")}}
- {{domxref("Animation.remove_event","remove")}} Ereignis
