---
title: "MutationRecord: nextSibling-Eigenschaft"
short-title: nextSibling
slug: Web/API/MutationRecord/nextSibling
l10n:
  sourceCommit: 1d46ed6db9aaa9a4e43aa5b2964f128c147153b8
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`nextSibling`** eines [`MutationRecord`](/de/docs/Web/API/MutationRecord) ist der nächste Geschwisterknoten eines hinzugefügten oder entfernten Kindknotens des [`target`](/de/docs/Web/API/MutationRecord/target) eines [`MutationObserver`](/de/docs/Web/API/MutationObserver).

## Wert

Wenn dem [`target`](/de/docs/Web/API/MutationRecord/target) eines [`MutationObserver`](/de/docs/Web/API/MutationObserver) ein Knoten hinzugefügt oder daraus entfernt wird, ist der Wert der [`Node`](/de/docs/Web/API/Node), der auf den hinzugefügten oder entfernten Knoten folgt: also der Knoten, der in der [`childNodes`](/de/docs/Web/API/Node/childNodes)-Liste des Elternknotens unmittelbar nach ihm steht.

Der Wert ist `null`, wenn keine Knoten hinzugefügt oder entfernt wurden oder wenn der Knoten das letzte Kind seines Elternknotens ist.

## Beispiele

### Den nächsten Geschwisterknoten einer Mutation protokollieren

Bei jedem Klick auf die Schaltfläche wird ein Knoten hinzugefügt oder entfernt. Die Änderung erfolgt jedoch _am Anfang des Zielelements_, nicht am Ende. Anschließend protokolliert der Observer den `textContent` des `nextSibling` des betroffenen Knotens.

#### HTML

```html
<button id="add-nodes">Add a node</button>
<button id="remove-nodes">Remove a node</button>
<button id="reset">Reset</button>

<pre id="log" class="log">Next sibling of updated node:</pre>
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
  target.insertBefore(newPara, target.firstChild);
});

removeNodes.addEventListener("click", () => {
  const oldPara = target.firstChild;
  if (oldPara) {
    target.removeChild(oldPara);
  }
});

reset.addEventListener("click", () => self.location.reload());

function logNextSibling(records) {
  for (const record of records) {
    if (record.type === "childList") {
      log.textContent = `Next sibling of updated node: ${record.nextSibling?.textContent ?? null}`;
    }
  }
}

const observer = new MutationObserver(logNextSibling);
observer.observe(target, { childList: true });
```

#### Ergebnis

{{EmbedLiveSample("Log the next sibling of a mutation", "", 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
