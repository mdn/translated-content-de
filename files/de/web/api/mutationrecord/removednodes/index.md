---
title: "MutationRecord: removedNodes Eigenschaft"
short-title: removedNodes
slug: Web/API/MutationRecord/removedNodes
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`removedNodes`** des {{domxref("MutationRecord")}} ist ein {{domxref("NodeList")}} von Knoten, die von einem Zielknoten durch eine Mutation entfernt wurden, die mit einem {{domxref("MutationObserver")}} beobachtet wird.

## Wert

Ein {{domxref("NodeList")}}, das die vom Ziel der Mutation entfernten Knoten enthält, die vom {{domxref("MutationObserver")}} beobachtet wird.

## Beispiele

### Beobachtung entfernter Knoten

Im folgenden Beispiel gibt es zwei Schaltflächen: eine, um dem Zielknoten neue Knoten hinzuzufügen, und eine, um sie zu entfernen. Ein {{domxref("MutationObserver")}} wird verwendet, um den Zielknoten auf Änderungen zu überwachen; wenn eine Änderung festgestellt wird, ruft der Beobachter eine Funktion, `logRemovedNodes()`, auf.

Die Funktion `logRemovedNodes()` überprüft, ob der Typ des MutationRecord `childList` ist, was bedeutet, dass sich die Kinder des Zielknotens geändert haben. Wenn der Typ `childlist` ist, aktualisiert die Funktion die Gesamtzahl der entfernten Knoten. Beachten Sie jedoch, dass das Klicken auf die Schaltfläche "Add a node" die Gesamtzahl der entfernten Knoten nicht erhöht, da in diesem Fall `record.removedNodes` eine Länge von `0` hat.

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
      totalRemovedNodes = totalRemovedNodes + record.removedNodes.length;
      // Log the number of nodes added
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
