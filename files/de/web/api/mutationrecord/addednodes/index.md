---
title: "MutationRecord: addedNodes Eigenschaft"
short-title: addedNodes
slug: Web/API/MutationRecord/addedNodes
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`addedNodes`** des [`MutationRecord`](/de/docs/Web/API/MutationRecord) ist eine [`NodeList`](/de/docs/Web/API/NodeList) der Knoten, die durch eine Mutation, die mit einem [`MutationObserver`](/de/docs/Web/API/MutationObserver) beobachtet wurde, zu einem Zielknoten hinzugefügt wurden.

## Wert

Eine [`NodeList`](/de/docs/Web/API/NodeList), die die Knoten enthält, die zum Ziel der Mutation hinzugefügt wurden, das vom [`MutationObserver`](/de/docs/Web/API/MutationObserver) beobachtet wird.

## Beispiele

### Aktualisieren beim Hinzufügen eines Knotens

Im folgenden Beispiel gibt es zwei Schaltflächen: eine, um neue Knoten zu einem Zielknoten hinzuzufügen, und eine, um sie zu entfernen. Ein [`MutationObserver`](/de/docs/Web/API/MutationObserver) wird verwendet, um den Zielknoten auf Änderungen zu überwachen; wenn eine Änderung festgestellt wird, ruft der Beobachter die Funktion `logNewNodes()` auf.

Die Funktion `logNewNodes()` prüft, ob der `type` des MutationRecord `childList` ist, was bedeutet, dass sich die Kinder des Zielknotens geändert haben. Wenn der Typ `childlist` ist, aktualisiert die Funktion die Gesamtzahl der hinzugefügten neuen Knoten. Beachten Sie jedoch, dass das Klicken auf die Schaltfläche "Remove a node" die Gesamtzahl der neuen Knoten nicht erhöht, da in diesem Fall `record.addedNodes` eine Länge von `0` hat.

#### HTML

```html
<button id="add-nodes">Add a node</button>
<button id="remove-nodes">Remove a node</button>
<button id="reset">Reset</button>

<pre id="counter">Total added nodes: 0</pre>
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
let totalAddedNodes = 0;

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

function logNewNodes(records) {
  for (const record of records) {
    // Check if the childlist of the target node has been mutated
    if (record.type === "childList") {
      totalAddedNodes = totalAddedNodes + record.addedNodes.length;
      // Log the number of nodes added
      counter.textContent = `Total added nodes: ${totalAddedNodes}`;
    }
  }
}

const observer = new MutationObserver(logNewNodes);
observer.observe(target, { childList: true });
```

#### Ergebnis

{{EmbedLiveSample("Update when adding a node")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
