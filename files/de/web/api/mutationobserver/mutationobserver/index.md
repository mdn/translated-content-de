---
title: "MutationObserver: Konstruktor MutationObserver()"
short-title: MutationObserver()
slug: Web/API/MutationObserver/MutationObserver
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("DOM WHATWG")}}

Der DOM **`MutationObserver()`**
Konstruktor – Teil der [`MutationObserver`](/de/docs/Web/API/MutationObserver) Schnittstelle – erstellt und
gibt einen neuen Beobachter zurück, der einen angegebenen Callback aufruft, wenn DOM-Ereignisse
auftreten.

Die DOM-Überwachung beginnt nicht sofort; die
Methode [`observe()`](/de/docs/Web/API/MutationObserver/observe) muss zuerst aufgerufen werden, um festzulegen,
welcher Teil des DOMs überwacht werden soll und welche Arten von Änderungen beobachtet werden sollen.

## Syntax

```js-nolint
new MutationObserver(callback)
```

### Parameter

- `callback`

  - : Eine Funktion, die bei jeder DOM-Änderung aufgerufen wird, die gemäß dem
    beobachteten Knoten oder Teilbaum und den Optionen qualifiziert ist.

    Die `callback`-Funktion nimmt zwei Parameter als Eingabe:

    1. Ein Array von [`MutationRecord`](/de/docs/Web/API/MutationRecord) Objekten, die jede aufgetretene Änderung
       beschreiben.
    2. Den [`MutationObserver`](/de/docs/Web/API/MutationObserver), der den
       `callback` aufgerufen hat. Dies wird am häufigsten verwendet, um den Beobachter mit [`MutationObserver.disconnect()`](/de/docs/Web/API/MutationObserver/disconnect) zu trennen.

    Weitere Details finden Sie in den [Beispielen](#beispiele) unten.

### Rückgabewert

Ein neues [`MutationObserver`](/de/docs/Web/API/MutationObserver) Objekt, das konfiguriert ist, den angegebenen
`callback` aufzurufen, wenn DOM-Änderungen auftreten.

## Beispiele

### Beobachtung von Kindelementen

Dieses Beispiel enthält Schaltflächen, um ein {{htmlelement("li")}} Element zu einer Liste hinzuzufügen und das erste `<li>` Element aus der Liste zu entfernen.

Wir verwenden einen `MutationObserver`, um über Änderungen an der Liste benachrichtigt zu werden. Im Callback protokollieren wir Hinzufügungen und Entfernungen, und sobald die Liste leer ist, trennen wir den Beobachter.

Die Schaltfläche "Beispiel zurücksetzen" setzt das Beispiel in seinen ursprünglichen Zustand zurück.

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

Versuchen Sie, auf "Add child" zu klicken, um Listenelemente hinzuzufügen und auf "Remove child", um sie zu entfernen. Der Beobachter-Callback protokolliert Hinzufügungen und Entfernungen. Sobald die Liste leer ist, protokolliert der Beobachter eine "Disconnected"-Nachricht und trennt den Beobachter.

Die Schaltfläche "Beispiel zurücksetzen" lädt das Beispiel neu, damit Sie es erneut ausprobieren können.

{{EmbedLiveSample("Observing child elements", 0, 400)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
