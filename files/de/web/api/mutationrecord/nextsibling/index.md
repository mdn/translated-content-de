---
title: "MutationRecord: nextSibling-Eigenschaft"
short-title: nextSibling
slug: Web/API/MutationRecord/nextSibling
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`nextSibling`** des [`MutationRecord`](/de/docs/Web/API/MutationRecord) ist das nächste Geschwisterelement eines hinzugefügten oder entfernten Kindknotens des [`target`](/de/docs/Web/API/MutationRecord/target) eines [`MutationObserver`](/de/docs/Web/API/MutationObserver).

## Wert

Wenn ein Knoten zum [`target`](/de/docs/Web/API/MutationRecord/target) eines [`MutationObserver`](/de/docs/Web/API/MutationObserver) hinzugefügt oder davon entfernt wird, ist der Wert der [`Node`](/de/docs/Web/API/Node), die das nächste Geschwisterelement des hinzugefügten oder entfernten Knotens ist: das heißt, der Knoten, der diesem im [`childNodes`](/de/docs/Web/API/Node/childNodes)-Array des Elternteils unmittelbar folgt.

Der Wert ist `null`, wenn keine Knoten hinzugefügt oder entfernt wurden oder wenn der Knoten das letzte Kind seines Elternteils ist.

## Beispiele

### Das nächste Geschwisterelement einer Mutation protokollieren

Dies fügt jedes Mal, wenn Sie den Button anklicken, einen Knoten hinzu, aber der Knoten wird am _Anfang des Ziels_, nicht am Ende hinzugefügt. Dann protokolliert der Beobachter den `textContent` des `nextSibling` des hinzugefügten Knotens.

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

{{EmbedLiveSample("Das nächste Geschwisterelement einer Mutation protokollieren", "", 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
