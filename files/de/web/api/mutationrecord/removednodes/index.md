---
title: "MutationRecord: removedNodes Eigenschaft"
short-title: removedNodes
slug: Web/API/MutationRecord/removedNodes
l10n:
  sourceCommit: 373fcd42528fc9eafa3703dc99927cc56c75fa8d
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`removedNodes`** von [`MutationRecord`](/de/docs/Web/API/MutationRecord) ist ein [`NodeList`](/de/docs/Web/API/NodeList) von Knoten, die durch eine Mutation, die mit einem [`MutationObserver`](/de/docs/Web/API/MutationObserver) beobachtet wurde, von einem Zielknoten entfernt wurden.

## Wert

Ein [`NodeList`](/de/docs/Web/API/NodeList), das die Knoten enthält, die vom Ziel der Mutation entfernt wurden, die vom [`MutationObserver`](/de/docs/Web/API/MutationObserver) beobachtet wird.

## Beispiele

### Beobachtung von entfernten Knoten

Im folgenden Beispiel gibt es zwei Buttons: einen, um dem Zielknoten neue Knoten hinzuzufügen, und einen anderen, um sie zu entfernen. Ein [`MutationObserver`](/de/docs/Web/API/MutationObserver) wird verwendet, um den Zielknoten auf Änderungen zu beobachten; wenn eine Änderung erkannt wird, ruft der Beobachter eine Funktion namens `logRemovedNodes()` auf.

Die Funktion `logRemovedNodes()` überprüft, ob der `type` des MutationRecord `childList` ist, was bedeutet, dass sich die Kinder des Zielknotens verändert haben. Wenn der Typ `childlist` ist, aktualisiert die Funktion die Gesamtzahl der Knoten, die entfernt wurden. Beachten Sie jedoch, dass das Klicken auf den Button "Add a node" die Gesamtzahl der entfernten Knoten nicht erhöhen wird, da in diesem Fall `record.removedNodes` eine Länge von `0` hat.

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
