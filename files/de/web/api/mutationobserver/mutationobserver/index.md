---
title: "MutationObserver: MutationObserver() Konstruktor"
short-title: MutationObserver()
slug: Web/API/MutationObserver/MutationObserver
l10n:
  sourceCommit: ca0ef1bb638a3fa4c2436796e8d85f5959996209
---

{{APIRef("DOM WHATWG")}}

Der DOM **`MutationObserver()`**-Konstruktor – Teil der [`MutationObserver`](/de/docs/Web/API/MutationObserver) Schnittstelle – erstellt und gibt einen neuen Observer zurück, der einen angegebenen Callback aufruft, wenn DOM-Ereignisse auftreten.

Die DOM-Beobachtung beginnt nicht sofort; die [`observe()`](/de/docs/Web/API/MutationObserver/observe) Methode muss zuerst aufgerufen werden, um festzulegen, welcher Teil des DOMs beobachtet werden soll und welche Arten von Änderungen beobachtet werden sollen.

## Syntax

```js-nolint
new MutationObserver(callback)
```

### Parameter

- `callback`

  - : Eine Funktion, die bei jeder qualifizierten DOM-Änderung aufgerufen wird, basierend auf dem beobachteten Knoten oder Unterbaum und den Optionen.

    Die `callback`-Funktion nimmt zwei Parameter als Eingabe:

    1. Ein Array von [`MutationRecord`](/de/docs/Web/API/MutationRecord) Objekten, die jede aufgetretene Änderung beschreiben.
    2. Den [`MutationObserver`](/de/docs/Web/API/MutationObserver), der den
       `callback` aufgerufen hat. Dies wird am häufigsten verwendet, um den Beobachter mit [`MutationObserver.disconnect()`](/de/docs/Web/API/MutationObserver/disconnect) zu trennen.

    Siehe die [Beispiele](#beispiele) unten für weitere Details.

### Rückgabewert

Ein neues [`MutationObserver`](/de/docs/Web/API/MutationObserver) Objekt, das konfiguriert ist, den angegebenen `callback` aufzurufen, wenn DOM-Mutationen auftreten.

## Beispiele

### Beobachtung von Kind-Elementen

In diesem Beispiel gibt es Schaltflächen, um ein {{htmlelement("li")}}-Element zu einer Liste hinzuzufügen und das erste `<li>`-Element aus der Liste zu entfernen.

Wir verwenden einen `MutationObserver`, um über Änderungen an der Liste benachrichtigt zu werden. Im Callback protokollieren wir Hinzufügungen und Entfernungen, und sobald die Liste leer ist, trennen wir den Observer.

Der "Beispiel zurücksetzen"-Button setzt das Beispiel in den ursprünglichen Zustand zurück.

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

Versuchen Sie, auf "Kind hinzufügen" zu klicken, um Listenelemente hinzuzufügen, und auf "Kind entfernen", um sie zu entfernen. Der Observer-Callback protokolliert Hinzufügungen und Entfernungen. Sobald die Liste leer ist, protokolliert der Observer eine "Disconnected"-Nachricht und trennt den Observer.

Der "Beispiel zurücksetzen"-Button lädt das Beispiel neu, damit Sie es erneut versuchen können.

{{EmbedLiveSample("Observing child elements", 0, 400)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
