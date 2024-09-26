---
title: "MutationObserver: MutationObserver()-Konstruktor"
short-title: MutationObserver()
slug: Web/API/MutationObserver/MutationObserver
l10n:
  sourceCommit: ca0ef1bb638a3fa4c2436796e8d85f5959996209
---

{{APIRef("DOM WHATWG")}}

Der DOM-**`MutationObserver()`**
Konstruktor – Teil der {{domxref("MutationObserver")}}-Schnittstelle – erstellt und
gibt einen neuen Observer zurück, welcher beim Auftreten von DOM-Ereignissen einen angegebenen Rückruf aufruft.

Die DOM-Beobachtung beginnt nicht sofort; die
{{domxref("MutationObserver.observe", "observe()")}}-Methode muss zuerst aufgerufen werden, um festzulegen, welcher Teil des DOM beobachtet werden soll und welche Arten von Änderungen zu überwachen sind.

## Syntax

```js-nolint
new MutationObserver(callback)
```

### Parameter

- `callback`

  - : Eine Funktion, die bei jeder DOM-Änderung aufgerufen wird, die bei dem beobachteten Knoten oder Teilbaum und den Optionen zutrifft.

    Die `callback`-Funktion nimmt zwei Parameter als Eingabe entgegen:

    1. Ein Array von {{domxref("MutationRecord")}}-Objekten, die jede aufgetretene Änderung beschreiben.
    2. Der {{domxref("MutationObserver")}}, der den `callback` aufgerufen hat. Dies wird meistens verwendet, um den Observer mit {{domxref("MutationObserver.disconnect()")}} zu trennen.

    Siehe die [Beispiele](#beispiele) unten für weitere Details.

### Rückgabewert

Ein neues {{domxref("MutationObserver")}}-Objekt, konfiguriert, um den angegebenen
`callback` aufzurufen, wenn DOM-Mutationen auftreten.

## Beispiele

### Beobachten von Kindelementen

Dieses Beispiel verfügt über Schaltflächen zum Hinzufügen eines {{htmlelement("li")}}-Elements zu einer Liste und zum Entfernen des ersten `<li>`-Elements aus der Liste.

Wir verwenden einen `MutationObserver`, um über Änderungen an der Liste benachrichtigt zu werden. Im Callback protokollieren wir Hinzufügungen und Entfernungen, und sobald die Liste leer ist, trennen wir den Observer.

Die Schaltfläche "Beispiel zurücksetzen" setzt das Beispiel in den ursprünglichen Zustand zurück.

#### HTML

```html
<button id="add">Add child</button>
<button id="remove">Remove child</button>
<button id="reset">Reset example</button>

<ul id="container"></ul>

<pre id="log"></pre>
```

#### CSS

```css
#container,
#log {
  height: 150px;
  overflow: scroll;
}

#container li {
  background-color: paleturquoise;
  margin: 0.5rem;
}
```

#### JavaScript

```js
const add = document.querySelector("#add");
const remove = document.querySelector("#remove");
const reset = document.querySelector("#reset");
const container = document.querySelector("#container");
const log = document.querySelector("#log");

let namePrefix = 0;

add.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.textContent = `item ${namePrefix}`;
  container.appendChild(newItem);
  namePrefix++;
});

remove.addEventListener("click", () => {
  const itemToRemove = document.querySelector("li");
  if (itemToRemove) {
    itemToRemove.parentNode.removeChild(itemToRemove);
  }
});

reset.addEventListener("click", () => {
  document.location.reload();
});

function logChanges(records, observer) {
  for (const record of records) {
    for (const addedNode of record.addedNodes) {
      log.textContent = `Added: ${addedNode.textContent}\n${log.textContent}`;
    }
    for (const removedNode of record.removedNodes) {
      log.textContent = `Removed: ${removedNode.textContent}\n${log.textContent}`;
    }
    if (record.target.childNodes.length === 0) {
      log.textContent = `Disconnected\n${log.textContent}`;
      observer.disconnect();
    }
    console.log(record.target.childNodes.length);
  }
}

const observerOptions = {
  childList: true,
  subtree: true,
};

const observer = new MutationObserver(logChanges);
observer.observe(container, observerOptions);
```

#### Ergebnis

Versuchen Sie, auf "Add child" zu klicken, um Listenelemente hinzuzufügen, und auf "Remove child", um sie zu entfernen. Der Observer-Callback protokolliert Hinzufügungen und Entfernungen. Sobald die Liste leer ist, protokolliert der Observer eine "Disconnected"-Meldung und trennt den Observer.

Die Schaltfläche "Beispiel zurücksetzen" lädt das Beispiel neu, sodass Sie es erneut versuchen können.

{{EmbedLiveSample("Observing child elements", 0, 400)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}