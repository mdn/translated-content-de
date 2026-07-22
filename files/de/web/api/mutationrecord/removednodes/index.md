---
title: "MutationRecord: Eigenschaft removedNodes"
short-title: removedNodes
slug: Web/API/MutationRecord/removedNodes
l10n:
  sourceCommit: 5542c8f1ef9f67b3a7431f47ee2b4ce6ba4cec44
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`removedNodes`** des [`MutationRecord`](/de/docs/Web/API/MutationRecord) ist eine [`NodeList`](/de/docs/Web/API/NodeList) von Knoten, die durch eine Mutation, die mit einem [`MutationObserver`](/de/docs/Web/API/MutationObserver) beobachtet wurde, aus einem Zielknoten entfernt wurden.

## Wert

Eine [`NodeList`](/de/docs/Web/API/NodeList), die die Knoten enthält, die aus dem Ziel der Mutation entfernt wurden und vom [`MutationObserver`](/de/docs/Web/API/MutationObserver) beobachtet wurden.

## Beispiele

### Entfernte Knoten beobachten

Im folgenden Beispiel gibt es zwei Schaltflächen: eine, um neue Knoten zu einem Zielknoten hinzuzufügen, und eine, um sie zu entfernen. Ein [`MutationObserver`](/de/docs/Web/API/MutationObserver) wird verwendet, um den Zielknoten auf Änderungen zu überwachen; wenn eine Änderung erkannt wird, ruft der Beobachter eine Funktion namens `logRemovedNodes()` auf.

Die Funktion `logRemovedNodes()` prüft, ob der `type` des MutationRecords `childList` ist, was bedeutet, dass sich die Kinder des Zielknotens geändert haben. Wenn der Typ `childlist` ist, aktualisiert die Funktion die Gesamtzahl der Knoten, die entfernt wurden. Beachten Sie jedoch, dass das Klicken auf die Schaltfläche "Einen Knoten hinzufügen" die Gesamtzahl der entfernten Knoten nicht erhöht, da in diesem Fall `record.removedNodes` eine Länge von `0` haben wird.

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
    // Check if the childlist of the target node has been mutated
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
