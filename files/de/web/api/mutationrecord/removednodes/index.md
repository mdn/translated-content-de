---
title: "MutationRecord: removedNodes-Eigenschaft"
short-title: removedNodes
slug: Web/API/MutationRecord/removedNodes
l10n:
  sourceCommit: be591971235a485fb10778eb990118eb1223a8e7
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`removedNodes`** von [`MutationRecord`](/de/docs/Web/API/MutationRecord) ist eine [`NodeList`](/de/docs/Web/API/NodeList) von Knoten, die durch eine Mutation, die mit einem [`MutationObserver`](/de/docs/Web/API/MutationObserver) beobachtet wurde, aus einem Zielknoten entfernt wurden.

## Wert

Eine [`NodeList`](/de/docs/Web/API/NodeList), die die Knoten enthält, die durch die vom [`MutationObserver`](/de/docs/Web/API/MutationObserver) beobachtete Mutation aus dem Ziel entfernt wurden.

## Beispiele

### Beobachtung entfernter Knoten

Im folgenden Beispiel gibt es zwei Schaltflächen: eine zum Hinzufügen neuer Knoten zu einem Zielknoten und eine zum Entfernen. Ein [`MutationObserver`](/de/docs/Web/API/MutationObserver) wird verwendet, um den Zielknoten auf Änderungen zu beobachten; wenn eine Änderung festgestellt wird, ruft der Beobachter eine Funktion namens `logRemovedNodes()` auf.

Die Funktion `logRemovedNodes()` überprüft, ob der MutationRecord-Typ `childList` ist, was bedeutet, dass sich die Kinder des Zielknotens geändert haben. Wenn der Typ `childList` ist, aktualisiert die Funktion die Gesamtzahl der entfernten Knoten. Beachten Sie jedoch, dass das Klicken auf die Schaltfläche "Add a node" die Gesamtzahl der entfernten Knoten nicht erhöht, da in diesem Fall `record.removedNodes` eine Länge von `0` hat.

#### HTML

```html
<button id="add-nodes">Add a node</button>
<button id="remove-nodes">Remove a node</button>
<button id="reset">Reset</button>

<pre id="counter">Total removed nodes: 0</pre>
<div id="target"></div>
```

```css hidden
#counter {
  border: 1px dotted black;
  padding: 0.5rem;
}
```

#### JavaScript

```js
const addNodes = document.querySelector("#add-nodes");
const removeNodes = document.querySelector("#remove-nodes");
const reset = document.querySelector("#reset");
const counter = document.querySelector("#counter");
const target = document.querySelector("#target");
let totalRemovedNodes = 0;

addNodes.addEventListener("click", () => {
  const newPara = document.createElement("p");
  newPara.textContent = `Current time: ${Date.now()}`;
  target.appendChild(newPara);
});

removeNodes.addEventListener("click", () => {
  const lastChild = target.lastChild;
  if (lastChild) {
    target.removeChild(lastChild);
  }
});

reset.addEventListener("click", () => self.location.reload());

function logRemovedNodes(records) {
  for (const record of records) {
    // Check if the childList of the target node has been mutated
    if (record.type === "childList") {
      totalRemovedNodes += record.removedNodes.length;
      // Log the number of nodes removed
      counter.textContent = `Total removed nodes: ${totalRemovedNodes}`;
    }
  }
}

const observer = new MutationObserver(logRemovedNodes);
observer.observe(target, { childList: true });
```

#### Ergebnis

{{EmbedLiveSample("Observing removed nodes")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
