---
title: "MutationRecord: Eigenschaft addedNodes"
short-title: addedNodes
slug: Web/API/MutationRecord/addedNodes
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`addedNodes`** des Objekts {{domxref("MutationRecord")}} ist eine {{domxref("NodeList")}} von Knoten, die einem Zielknoten durch eine Mutation hinzugefügt wurden, die mit einem {{domxref("MutationObserver")}} beobachtet wurde.

## Wert

Eine {{domxref("NodeList")}}, die die Knoten enthält, die dem Ziel der Mutation hinzugefügt wurden, die vom {{domxref("MutationObserver")}} beobachtet wird.

## Beispiele

### Aktualisierung beim Hinzufügen eines Knotens

Im folgenden Beispiel gibt es zwei Schaltflächen: eine zum Hinzufügen neuer Knoten zu einem Zielknoten und eine zum Entfernen dieser Knoten. Ein {{domxref("MutationObserver")}} wird verwendet, um den Zielknoten auf Änderungen zu überwachen; wenn eine Änderung erkannt wird, ruft der Beobachter die Funktion `logNewNodes()` auf.

Die Funktion `logNewNodes()` überprüft, ob der Typ des MutationRecord `childList` ist, was bedeutet, dass sich die Kinder des Zielknotens geändert haben. Wenn der Typ `childList` ist, aktualisiert die Funktion die Gesamtanzahl der hinzugefügten neuen Knoten. Beachten Sie jedoch, dass das Klicken auf die Schaltfläche "Einen Knoten entfernen" die Gesamtzahl der neuen Knoten nicht erhöht, da in diesem Fall `record.addedNodes` eine Länge von `0` hat.

#### HTML

```html
<button id="add-nodes">Einen Knoten hinzufügen</button>
<button id="remove-nodes">Einen Knoten entfernen</button>
<button id="reset">Zurücksetzen</button>

<pre id="counter">Gesamtzahl hinzugefügter Knoten: 0</pre>
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
    // Überprüfen Sie, ob die childList des Zielknotens mutiert wurde
    if (record.type === "childList") {
      totalAddedNodes = totalAddedNodes + record.addedNodes.length;
      // Protokollieren Sie die Anzahl der hinzugefügten Knoten
      counter.textContent = `Gesamtzahl hinzugefügter Knoten: ${totalAddedNodes}`;
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
