---
title: "MutationRecord: Eigenschaft previousSibling"
short-title: previousSibling
slug: Web/API/MutationRecord/previousSibling
l10n:
  sourceCommit: 1d46ed6db9aaa9a4e43aa5b2964f128c147153b8
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`previousSibling`** eines [`MutationRecord`](/de/docs/Web/API/MutationRecord) gibt den vorherigen Geschwisterknoten eines hinzugefügten oder entfernten Kindknotens des [`target`](/de/docs/Web/API/MutationRecord/target) eines [`MutationObserver`](/de/docs/Web/API/MutationObserver) zurück.

## Wert

Wenn dem [`target`](/de/docs/Web/API/MutationRecord/target) eines [`MutationObserver`](/de/docs/Web/API/MutationObserver) ein Knoten hinzugefügt oder daraus entfernt wird, ist der Wert der [`Node`](/de/docs/Web/API/Node), der dem hinzugefügten oder entfernten Knoten unmittelbar vorausgeht – also der Knoten direkt vor ihm in der [`childNodes`](/de/docs/Web/API/Node/childNodes)-Liste des Elternknotens.

Der Wert ist `null`, wenn keine Knoten hinzugefügt oder entfernt wurden oder wenn der Knoten das erste Kind seines Elternknotens ist.

## Beispiele

### Den vorherigen Geschwisterknoten einer Mutation protokollieren

Bei jedem Klick auf die Schaltfläche wird ein Knoten hinzugefügt oder entfernt. Anschließend protokolliert der Observer den `textContent` des `previousSibling` des betroffenen Knotens.

#### HTML

```html
<button id="add-nodes">Add a node</button>
<button id="remove-nodes">Remove a node</button>
<button id="reset">Reset</button>

<pre id="log" class="log">Previous sibling of updated node:</pre>
<div id="target"><p>Node #0</p></div>
```

```css hidden
.log {
  border: 1px dotted black;
  padding: 0.5rem;
}
```

#### JavaScript

```js
const addNodes = document.querySelector("#add-nodes");
const removeNodes = document.querySelector("#remove-nodes");
const reset = document.querySelector("#reset");
const target = document.querySelector("#target");

addNodes.addEventListener("click", () => {
  const newPara = document.createElement("p");
  newPara.textContent = `Node #${target.childElementCount}`;
  target.appendChild(newPara);
});

removeNodes.addEventListener("click", () => {
  const oldPara = target.lastChild;
  if (oldPara) {
    target.removeChild(oldPara);
  }
});

reset.addEventListener("click", () => self.location.reload());

function logPreviousSibling(records) {
  for (const record of records) {
    if (record.type === "childList") {
      log.textContent = `Previous sibling of updated node: ${record.previousSibling?.textContent ?? null}`;
    }
  }
}

const observer = new MutationObserver(logPreviousSibling);
observer.observe(target, { childList: true });
```

#### Ergebnis

{{EmbedLiveSample("Log the previous sibling of a mutation", "", 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
