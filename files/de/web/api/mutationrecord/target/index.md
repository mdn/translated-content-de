---
title: "MutationRecord: target-Eigenschaft"
short-title: target
slug: Web/API/MutationRecord/target
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`target`** von [`MutationRecord`](/de/docs/Web/API/MutationRecord) ist das Ziel (d.h. der mutierte/geänderte Knoten) einer Mutation, die mit einem [`MutationObserver`](/de/docs/Web/API/MutationObserver) beobachtet wurde.

## Wert

Der [`Node`](/de/docs/Web/API/Node), der von der Mutation betroffen ist.

- Wenn der [`type`](/de/docs/Web/API/MutationRecord/type) des Eintrags `attributes` ist, ist dies das [`Element`](/de/docs/Web/API/Element), dessen Attribute sich geändert haben.
- Wenn der [`type`](/de/docs/Web/API/MutationRecord/type) des Eintrags `characterData` ist, ist dies der [`CharacterData`](/de/docs/Web/API/CharacterData) Knoten.
- Wenn der [`type`](/de/docs/Web/API/MutationRecord/type) des Eintrags `childList` ist, ist dies der [`Node`](/de/docs/Web/API/Node), dessen Kinder sich geändert haben.

## Beispiele

### Protokollierung des Ziels einer Mutation

Im folgenden Beispiel gibt es zwei Divs: ein rotes Div (`#red-div`) und ein blaues Div (`#blue-div`), innerhalb eines Container-Divs `#container`. Ein [`MutationObserver`](/de/docs/Web/API/MutationObserver) wird erstellt, um den Container zu beobachten. Der Beobachter überwacht Änderungen der `childlist` und hat auch `subtree: true`, sodass er Änderungen an den Kindern der Kinder des Containers beobachtet.

Der Rückruf des Beobachters protokolliert das `target` des Mutation Records. Wenn wir Knoten zu `#red-div` oder `#blue-div` hinzufügen, wird das `target` dementsprechend `#red-div` oder `#blue-div` sein.

#### HTML

```html
<pre id="log">Target of mutation:</pre>
<button id="add-nodes-to-red-div">Add a node to red div</button>
<button id="add-nodes-to-blue-div">Add a node to blue div</button>
<button id="reset">Reset</button>
<div id="container">
  <div id="red-div"></div>
  <div id="blue-div"></div>
</div>
```

```css hidden
#log {
  border: 1px dotted black;
  padding: 0.5rem;
}

#red-div {
  border: 1px solid red;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
  padding: 0.5rem;
  overflow: auto;
}

#blue-div {
  border: 1px solid blue;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  padding: 0.5rem;
  overflow: auto;
}

#container {
  display: grid;
  grid-template-columns: 50% auto;
}
```

#### JavaScript

```js
const container = document.querySelector("#container");
const redDiv = document.querySelector("#red-div");
const blueDiv = document.querySelector("#blue-div");
const addToRed = document.querySelector("#add-nodes-to-red-div");
const addToBlue = document.querySelector("#add-nodes-to-blue-div");
const reset = document.querySelector("#reset");
const log = document.querySelector("#log");

addToRed.addEventListener("click", () => {
  const newPara = document.createElement("p");
  newPara.textContent = `Current time: ${Date.now()}`;
  redDiv.appendChild(newPara);
});

addToBlue.addEventListener("click", () => {
  const newPara = document.createElement("p");
  newPara.textContent = `Current time: ${Date.now()}`;
  blueDiv.appendChild(newPara);
});

reset.addEventListener("click", () => self.location.reload());

function logMutationTarget(records) {
  for (const record of records) {
    log.textContent = `Target of mutation: ${record.target.id}`;
  }
}

const observer = new MutationObserver(logMutationTarget);
observer.observe(container, { childList: true, subtree: true });
```

#### Ergebnis

{{EmbedLiveSample("Logging the target of a mutation", "", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
