---
title: "MutationRecord: addedNodes-Eigenschaft"
short-title: addedNodes
slug: Web/API/MutationRecord/addedNodes
l10n:
  sourceCommit: 373fcd42528fc9eafa3703dc99927cc56c75fa8d
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`addedNodes`** des [`MutationRecord`](/de/docs/Web/API/MutationRecord) ist eine [`NodeList`](/de/docs/Web/API/NodeList) von Knoten, die zu einem Zielknoten hinzugefügt wurden, durch eine mit einem [`MutationObserver`](/de/docs/Web/API/MutationObserver) beobachtete Mutation.

## Wert

Eine [`NodeList`](/de/docs/Web/API/NodeList), die die Knoten enthält, die zum Ziel der Mutation hinzugefügt wurden, die vom [`MutationObserver`](/de/docs/Web/API/MutationObserver) beobachtet wird.

## Beispiele

### Aktualisierung beim Hinzufügen eines Knotens

Im folgenden Beispiel gibt es zwei Schaltflächen: eine, um neue Knoten zu einem Zielknoten hinzuzufügen, und eine, um sie zu entfernen. Ein [`MutationObserver`](/de/docs/Web/API/MutationObserver) wird verwendet, um den Zielknoten auf Änderungen zu beobachten; wenn eine Änderung erkannt wird, ruft der Observer eine Funktion `logNewNodes()` auf.

Die Funktion `logNewNodes()` prüft, ob der `type` des MutationRecord `childList` ist, was bedeutet, dass sich die Kinder des Zielknotens geändert haben. Wenn der Typ `childlist` ist, aktualisiert die Funktion die Gesamtzahl der neu hinzugefügten Knoten. Beachten Sie jedoch, dass das Klicken auf die Schaltfläche "Einen Knoten entfernen" die Gesamtzahl der neuen Knoten nicht erhöhen wird, da in diesem Fall `record.addedNodes` eine Länge von `0` haben wird.

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
      totalAddedNodes += record.addedNodes.length;
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
