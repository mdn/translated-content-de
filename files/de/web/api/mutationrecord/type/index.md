---
title: "MutationRecord: type-Eigenschaft"
short-title: type
slug: Web/API/MutationRecord/type
l10n:
  sourceCommit: ba88d88fed7c8868bec7c51e70f841586cffbaea
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`type`** des {{domxref("MutationRecord")}} ist der Typ des durch einen {{domxref("MutationObserver")}} beobachteten {{domxref("MutationRecord")}}.

## Wert

Die Eigenschaft ist auf den Typ der Mutation als Zeichenkette gesetzt. Der Wert kann einer der folgenden sein:

- `attributes`, wenn die Mutation eine Attribut-Mutation war.

- `characterData`, wenn es sich um eine Mutation an einem {{domxref("CharacterData")}}-Knoten handelte.

- `childList`, wenn die Mutation eine Mutation am Baum der Knoten war.

## Beispiele

### Protokollieren des Typs einer Mutation

Im folgenden Beispiel erhalten Sie zwei Schaltflächen, um das DOM zu manipulieren. Die erste Schaltfläche fügt dem Beispiel einen neuen Knoten hinzu, und die zweite Schaltfläche ändert das `color`-Attribut aller hinzugefügten Knoten. Ein {{domxref("MutationObserver")}} wird erstellt, um alles zu beobachten, und der Beobachter ist so eingestellt, dass der `type` des Mutationsprotokolls an `#log` ausgegeben wird.

Wenn Sie einen Knoten hinzufügen, werden Sie feststellen, dass der `type` `childList` ist, und wenn Sie das `color`-Attribut ändern, ist der `type` `attributes`.

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
