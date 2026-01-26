---
title: :modal
slug: Web/CSS/Reference/Selectors/:modal
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`:modal`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) wählt ein Element aus, das sich in einem Zustand befindet, in dem es alle Interaktionen mit Elementen außerhalb von sich selbst ausschließt, bis die Interaktion beendet wurde. Mehrere Elemente können gleichzeitig von der `:modal` Pseudoklasse ausgewählt werden, aber nur eines von ihnen wird aktiv sein und Eingaben empfangen können.

{{InteractiveExample("CSS Demo: :modal", "tabbed-shorter")}}

```css interactive-example
button {
  display: block;
  margin: auto;
  width: 10rem;
  height: 2rem;
}

:modal {
  background-color: beige;
  border: 2px solid burlywood;
  border-radius: 5px;
}

p {
  color: black;
}
```

```html interactive-example
<p>Would you like to see a new random number?</p>
<button id="showNumber">Show me</button>

<dialog id="favDialog">
  <form method="dialog">
    <p>Lucky number is: <strong id="number"></strong></p>
    <button>Close dialog</button>
  </form>
</dialog>
```

```js interactive-example
const showNumber = document.getElementById("showNumber");
const favDialog = document.getElementById("favDialog");
const number = document.getElementById("number");

showNumber.addEventListener("click", () => {
  number.innerText = Math.floor(Math.random() * 1000);
  favDialog.showModal();
});
```

## Syntax

```css
:modal {
  /* ... */
}
```

## Verwendungshinweise

Beispiele für Elemente, die Benutzerinteraktionen mit dem Rest der Seite verhindern und von der `:modal` Pseudoklasse ausgewählt werden, sind:

- Das [`dialog`](/de/docs/Web/HTML/Reference/Elements/dialog) Element, das mit der `showModal()` API geöffnet wurde.
- Das Element, das von der {{cssxref(":fullscreen")}} Pseudoklasse ausgewählt wird, wenn es mit der `requestFullscreen()` API geöffnet wurde.

## Beispiele

### Stilisierung eines modalen Dialogs

Dieses Beispiel stilisiert einen modalen Dialog, der geöffnet wird, wenn die Schaltfläche "Details aktualisieren" aktiviert wird. Dieses Beispiel basiert auf dem {{HTMLElement("dialog")}} Element [Beispiel](/de/docs/Web/HTML/Reference/Elements/dialog#handling_the_return_value_from_the_dialog).

```html hidden
<!-- Basic modal dialog containing a form -->
<dialog id="favDialog">
  <form method="dialog">
    <p>
      <label
        >Favorite animal:
        <select>
          <option value="default">Choose…</option>
          <option>Brine shrimp</option>
          <option>Red panda</option>
          <option>Spider monkey</option>
        </select>
      </label>
    </p>
    <div>
      <button value="cancel">Cancel</button>
      <button id="confirmBtn" value="default">Confirm</button>
    </div>
  </form>
</dialog>
<p>
  <button id="updateDetails">Update details</button>
</p>
<output></output>
```

#### CSS

```css
:modal {
  border: 5px solid red;
  background-color: yellow;
  box-shadow: 3px 3px 10px rgb(0 0 0 / 50%);
}
```

```js hidden
const updateButton = document.getElementById("updateDetails");
const favDialog = document.getElementById("favDialog");
const outputBox = document.querySelector("output");
const selectEl = favDialog.querySelector("select");
const confirmBtn = favDialog.querySelector("#confirmBtn");

// If a browser doesn't support the dialog, then hide the
// dialog contents by default.
if (typeof favDialog.showModal !== "function") {
  favDialog.hidden = true;
  // Your fallback script
}
// "Update details" button opens the <dialog> modally
updateButton.addEventListener("click", () => {
  if (typeof favDialog.showModal === "function") {
    favDialog.showModal();
  } else {
    outputBox.value = "Sorry, the dialog API is not supported by this browser.";
  }
});
// "Favorite animal" input sets the value of the submit button
selectEl.addEventListener("change", (e) => {
  confirmBtn.value = selectEl.value;
});
// "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
favDialog.addEventListener("close", () => {
  outputBox.value = `${
    favDialog.returnValue
  } button clicked - ${new Date().toString()}`;
});
```

### Ergebnis

{{EmbedLiveSample("Styling_a_modal_dialog", "100%", 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`dialog`](/de/docs/Web/HTML/Reference/Elements/dialog) Element
- Andere Pseudoklassen für Elementanzeigestatus: {{CSSxRef(":fullscreen")}} und {{CSSxRef(":picture-in-picture")}}
- Vollständige Liste der [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
