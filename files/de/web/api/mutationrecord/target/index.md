---
title: "MutationRecord: target-Eigenschaft"
short-title: target
slug: Web/API/MutationRecord/target
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("DOM")}}

Die schreibgeschützte Eigenschaft **`target`** des {{domxref("MutationRecord")}} ist das Ziel (d.h. der mutierte/geänderte Knoten) einer Mutation, die mit einem {{domxref("MutationObserver")}} beobachtet wurde.

## Wert

Der {{domxref("Node")}}, den die Mutation betroffen hat.

- Wenn der {{domxref("MutationRecord.type", "Typ")}} des Records `attributes` ist, handelt es sich um das {{domxref("Element")}}, dessen Attribute sich geändert haben.
- Wenn der {{domxref("MutationRecord.type", "Typ")}} des Records `characterData` ist, handelt es sich um den {{domxref("CharacterData")}}-Knoten.
- Wenn der {{domxref("MutationRecord.type", "Typ")}} des Records `childList` ist, handelt es sich um den {{domxref("Node")}}, dessen Kinder sich geändert haben.

## Beispiele

### Das Ziel einer Mutation protokollieren

Im folgenden Beispiel gibt es zwei Divs: ein rotes Div (`#red-div`) und ein blaues Div (`#blue-div`) in einem Container-Div `#container`. Ein {{domxref("MutationObserver")}} wird erstellt, um den Container zu beobachten. Der Observer überwacht Änderungen an der Kinderliste und hat auch `subtree: true`, sodass er Änderungen an den Kindern der Kinder des Containers beobachtet.

Der Callback des Observers protokolliert das `target` des Mutations-Records. Wenn wir Knoten zu `#red-div` oder `#blue-div` hinzufügen, wird das `target` entsprechend `#red-div` oder `#blue-div` sein.

#### HTML

```html
<pre id="log">Ziel der Mutation:</pre>
<button id="add-nodes-to-red-div">Einen Knoten zum roten Div hinzufügen</button>
<button id="add-nodes-to-blue-div">Einen Knoten zum blauen Div hinzufügen</button>
<button id="reset">Zurücksetzen</button>
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
    log.textContent = `Ziel der Mutation: ${record.target.id}`;
  }
}

const observer = new MutationObserver(logMutationTarget);
observer.observe(container, { childList: true, subtree: true });
```

#### Ergebnis

{{EmbedLiveSample("Das Ziel einer Mutation protokollieren", "", 200)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
