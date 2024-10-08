---
title: "MutationRecord: type-Eigenschaft"
short-title: type
slug: Web/API/MutationRecord/type
l10n:
  sourceCommit: ba88d88fed7c8868bec7c51e70f841586cffbaea
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`type`** von [`MutationRecord`](/de/docs/Web/API/MutationRecord) ist der Typ des [`MutationRecord`](/de/docs/Web/API/MutationRecord), der von einem [`MutationObserver`](/de/docs/Web/API/MutationObserver) beobachtet wurde.

## Wert

Die Eigenschaft ist auf den Typ der Mutation als String festgelegt. Der Wert kann einer der folgenden sein:

- `attributes`, wenn die Mutation eine Attribut-Mutation war.

- `characterData`, wenn es sich um eine Mutation an einem [`CharacterData`](/de/docs/Web/API/CharacterData)-Knoten handelte.

- `childList`, wenn die Mutation eine Mutation im Knotenbaum war.

## Beispiele

### Typ einer Mutation protokollieren

Das folgende Beispiel gibt Ihnen zwei Schaltflächen, um das DOM zu manipulieren. Die erste Schaltfläche fügt dem Beispiel einen neuen Knoten hinzu, und die zweite Schaltfläche ändert das `color`-Attribut aller hinzugefügten Knoten. Ein [`MutationObserver`](/de/docs/Web/API/MutationObserver) wird erstellt, um alles zu beobachten, und der Observer ist so eingestellt, dass er den `type` des Mutation Records auf `#log` protokolliert.

Sie werden bemerken, dass der `type` `childList` ist, wenn Sie einen Knoten hinzufügen, und `attributes`, wenn Sie das `color`-Attribut ändern.

#### HTML

```html
<button id="add-nodes">Add a node</button>
<button id="set-attribute">Change the color</button>

<button id="reset">Reset</button>

<pre id="log">Mutation type:</pre>
<div id="target"><p>Node #0</p></div>
```

```css hidden
#log {
  border: 1px dotted black;
  padding: 0.5rem;
}

.blue {
  color: blue;
}

.red {
  color: red;
}
```

#### JavaScript

```js
const addNodes = document.querySelector("#add-nodes");
const setAttribute = document.querySelector("#set-attribute");
const reset = document.querySelector("#reset");
const log = document.querySelector("#log");
const target = document.querySelector("#target");
let nodeNumber = 1;

addNodes.addEventListener("click", () => {
  const newPara = document.createElement("p");
  newPara.textContent = `Node #${nodeNumber}`;
  nodeNumber++;
  target.appendChild(newPara);
});

setAttribute.addEventListener("click", () => {
  if (target.getAttribute("class") === "red") {
    target.setAttribute("class", "blue");
  } else {
    target.setAttribute("class", "red");
  }
});

reset.addEventListener("click", () => self.location.reload());

function logMutationType(records) {
  for (const record of records) {
    log.textContent = `Mutation type: ${record.type}`;
  }
}

const observer = new MutationObserver(logMutationType);
observer.observe(target, { childList: true, attributes: true, subtree: true });
```

#### Ergebnis

{{EmbedLiveSample("Log the type of a mutation", "", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
