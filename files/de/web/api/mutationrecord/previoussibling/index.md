---
title: "MutationRecord: previousSibling-Eigenschaft"
short-title: previousSibling
slug: Web/API/MutationRecord/previousSibling
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`previousSibling`** des [`MutationRecord`](/de/docs/Web/API/MutationRecord) ist das vorherige Geschwister eines hinzugefügten oder entfernten Kindknotens des [`target`](/de/docs/Web/API/MutationRecord/target) eines [`MutationObserver`](/de/docs/Web/API/MutationObserver).

## Wert

Wenn ein Knoten dem [`target`](/de/docs/Web/API/MutationRecord/target) eines [`MutationObserver`](/de/docs/Web/API/MutationObserver) hinzugefügt oder daraus entfernt wird, ist der Wert der [`Node`](/de/docs/Web/API/Node), die das vorherige Geschwister des hinzugefügten oder entfernten Knotens ist: also der Knoten, der sich direkt vor diesem in der [`childNodes`](/de/docs/Web/API/Node/childNodes)-Liste des Elternteils befindet.

Der Wert ist `null`, wenn keine Knoten hinzugefügt oder entfernt wurden oder wenn der Knoten das erste Kind seines Elternteils ist.

## Beispiele

### Protokollieren des vorherigen Geschwisters einer Mutation

Dies fügt bei jedem Klick auf den Button einen Knoten hinzu. Dann protokolliert der Beobachter den `textContent` des `previousSibling` des hinzugefügten Knotens.

#### HTML

```html
<button id="add-nodes">Add a node</button>
<button id="reset">Reset</button>

<pre id="log" class="log">Previous sibling of added node:</pre>
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
const reset = document.querySelector("#reset");
const target = document.querySelector("#target");
let nodeNumber = 1;

addNodes.addEventListener("click", () => {
  const newPara = document.createElement("p");
  newPara.textContent = `Node #${nodeNumber}`;
  nodeNumber++;
  target.appendChild(newPara);
});

reset.addEventListener("click", () => self.location.reload());

function logPreviousSibling(records) {
  for (const record of records) {
    if (record.type === "childList") {
      for (const newNode of record.addedNodes) {
        log.textContent = `Previous sibling of added node: ${newNode.previousSibling?.textContent}`;
      }
    }
  }
}

const observer = new MutationObserver(logPreviousSibling);
observer.observe(target, { childList: true });
```

#### Ergebnis

{{EmbedLiveSample("Protokollieren des vorherigen Geschwisters einer Mutation", "", 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
