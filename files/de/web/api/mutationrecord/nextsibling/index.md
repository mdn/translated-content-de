---
title: "MutationRecord: nextSibling-Eigenschaft"
short-title: nextSibling
slug: Web/API/MutationRecord/nextSibling
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`nextSibling`** von [`MutationRecord`](/de/docs/Web/API/MutationRecord) ist das nächste Geschwisterkind eines hinzugefügten oder entfernten Kindknotens des [`target`](/de/docs/Web/API/MutationRecord/target) eines [`MutationObserver`](/de/docs/Web/API/MutationObserver).

## Wert

Wenn ein Knoten dem [`target`](/de/docs/Web/API/MutationRecord/target) eines [`MutationObserver`](/de/docs/Web/API/MutationObserver) hinzugefügt oder daraus entfernt wird, ist der Wert der [`Node`](/de/docs/Web/API/Node), die das nächste Geschwister des hinzugefügten oder entfernten Knotens ist: das heißt, der Knoten, der diesem unmittelbar in der Elternliste der [`childNodes`](/de/docs/Web/API/Node/childNodes) folgt.

Der Wert ist `null`, wenn keine Knoten hinzugefügt oder entfernt werden oder wenn der Knoten das letzte Kind seines Elternknotens ist.

## Beispiele

### Das nächste Geschwister einer Mutation protokollieren

Dies fügt bei jedem Klick auf den Button einen Knoten hinzu, jedoch am _Anfang des Zieles_, nicht am Ende. Der Observer protokolliert dann das `textContent` des `nextSibling` des hinzugefügten Knotens.

#### HTML

```html
<button id="add-nodes">Add a node</button>
<button id="reset">Reset</button>

<pre id="log" class="log">Next sibling of added node:</pre>
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
  target.insertBefore(newPara, target.firstChild);
});

reset.addEventListener("click", () => self.location.reload());

function logNextSibling(records) {
  for (const record of records) {
    if (record.type === "childList") {
      for (const newNode of record.addedNodes) {
        log.textContent = `Next sibling of added node: ${record.nextSibling?.textContent}`;
      }
    }
  }
}

const observer = new MutationObserver(logNextSibling);
observer.observe(target, { childList: true });
```

#### Ergebnis

{{EmbedLiveSample("Das nächste Geschwister einer Mutation protokollieren", "", 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
