---
title: "Element: insertAdjacentElement()-Methode"
short-title: insertAdjacentElement()
slug: Web/API/Element/insertAdjacentElement
l10n:
  sourceCommit: 09ca35c64fca160dd09efbad05a09caf9e993125
---

{{APIRef("DOM")}}

Die **`insertAdjacentElement()`**-Methode der [`Element`](/de/docs/Web/API/Element)-Schnittstelle fügt einen gegebenen Elementknoten an einer angegebenen Position relativ zu dem Element ein, auf dem sie aufgerufen wird.

## Syntax

```js-nolint
insertAdjacentElement(position, element)
```

### Parameter

- `position`

  - : Ein String, der die Position relativ zum `targetElement` repräsentiert; muss (unabhängig von Groß-/Kleinschreibung) einer der folgenden Strings sein:

    - `'beforebegin'`: Vor dem `targetElement` selbst.
    - `'afterbegin'`: Direkt innerhalb des `targetElement`, vor dessen erstem Kind.
    - `'beforeend'`: Direkt innerhalb des `targetElement`, nach dessen letztem Kind.
    - `'afterend'`: Nach dem `targetElement` selbst.

- `element`
  - : Das Element, das in den Baum eingefügt werden soll.

### Rückgabewert

Das eingefügte Element oder `null`, wenn das Einfügen fehlgeschlagen ist.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die angegebene `position` kein erkannter Wert ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das angegebene `element` kein gültiges Element ist.

### Visualisierung der Positionsnamen

```html
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
```

> [!NOTE]
> Die Positionen `beforebegin` und `afterend` funktionieren nur, wenn der Knoten in einem Baum ist und einen Element-Parent hat.

## Beispiele

### Einfügen vor und nach

In diesem Beispiel haben wir eine Reihe quadratischer Boxen. Der Benutzer kann eine Box auswählen, indem er darauf klickt: Dies gibt der Box einen anderen Rahmen, um zu zeigen, dass sie ausgewählt ist.

Wenn eine Box ausgewählt ist und der Benutzer die Schaltflächen "Vorher einfügen" oder "Nachher einfügen" drückt, erstellt der Code eine neue Box, gibt ihr eine zufällige Farbe und fügt sie vor oder nach der ausgewählten Box ein.

#### HTML

```html
<p>
  Click colored box to select it, then use the first two buttons below to insert
  elements before and after your selection.
</p>

<section>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</section>

<button class="before">Insert before</button>
<button class="after">Insert after</button>
<button class="reset">Reset demo</button>
```

#### CSS

```css
div {
  width: 50px;
  height: 50px;
  margin: 3px;
  border: 3px solid black;
  display: inline-block;
  background-color: red;
}

.selected {
  border-color: aqua;
}
```

#### JavaScript

```js
let selectedElem;

// Function to select a new element
function selectElement(newSelection) {
  if (selectedElem !== newSelection) {
    if (selectedElem) {
      selectedElem.classList.remove("selected");
    }
    selectedElem = newSelection;
    newSelection.classList.add("selected");
  }
}

// Add click handlers that select the clicked element
const initElems = Array.from(document.querySelectorAll("section div"));
for (const initElem of initElems) {
  initElem.addEventListener("click", (e) => selectElement(e.target));
}

// Add click handlers to "beforeBtn" and "afterBtn"
// to insert a new element before/after the selected element
const beforeBtn = document.querySelector(".before");
const afterBtn = document.querySelector(".after");
beforeBtn.addEventListener("click", () => insertNewElement("beforebegin"));
afterBtn.addEventListener("click", () => insertNewElement("afterend"));

function insertNewElement(position) {
  function random() {
    return Math.floor(Math.random() * 255);
  }

  if (!selectedElem) {
    return;
  }

  const newElement = document.createElement("div");
  const randomColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  newElement.style.backgroundColor = randomColor;
  newElement.addEventListener("click", (e) => selectElement(e.target));

  selectedElem.insertAdjacentElement(position, newElement);
}

// Reset the example
const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", () => window.location.reload(true));
```

#### Ergebnis

{{embedlivesample("Inserting before and after", "", "200")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Element.insertAdjacentHTML()`](/de/docs/Web/API/Element/insertAdjacentHTML)
- [`Element.insertAdjacentText()`](/de/docs/Web/API/Element/insertAdjacentText)
- [`Node.insertBefore()`](/de/docs/Web/API/Node/insertBefore) (ähnlich wie `beforebegin`, jedoch mit anderen Argumenten)
- [`Node.appendChild()`](/de/docs/Web/API/Node/appendChild) (gleiche Wirkung wie `beforeend`)
