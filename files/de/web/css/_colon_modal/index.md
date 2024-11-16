---
title: ":modal"
slug: Web/CSS/:modal
l10n:
  sourceCommit: 632289fcc10e926d166e1b49e5ba3505de182856
---

{{CSSRef}}

Die **`:modal`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) stimmt mit einem Element überein, das sich in einem Zustand befindet, in dem es jegliche Interaktion mit Elementen außerhalb von ihm ausschließt, bis die Interaktion beendet wurde. Mehrere Elemente können gleichzeitig durch die `:modal` Pseudoklasse ausgewählt werden, aber nur eines von ihnen wird aktiv sein und Eingaben empfangen können.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-modal.html", "tabbed-shorter")}}

## Syntax

```css
:modal {
  /* ... */
}
```

## Nutzungshinweise

Beispiele für Elemente, die die Benutzerinteraktion mit dem Rest der Seite verhindern und durch die `:modal` Pseudoklasse ausgewählt werden, sind:

- Das [`dialog`](/de/docs/Web/HTML/Element/dialog) Element, das mit der `showModal()` API geöffnet wird.
- Das Element, das durch die [`:fullscreen`](/de/docs/Web/CSS/:fullscreen) Pseudoklasse ausgewählt wird, wenn es mit der `requestFullscreen()` API geöffnet wird.

## Beispiele

### Styling eines modalen Dialogs

Dieses Beispiel gestaltet einen modalen Dialog, der geöffnet wird, wenn die Schaltfläche "Details aktualisieren" aktiviert wird. Dieses Beispiel wurde auf Basis des {{HTMLElement("dialog")}} Element [Beispiels](/de/docs/Web/HTML/Element/dialog#handling_the_return_value_from_the_dialog) erstellt.

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

- [`dialog`](/de/docs/Web/HTML/Element/dialog) Element
- Andere Pseudoklassen für Anzeigezustände von Elementen: {{CSSxRef(":fullscreen")}} und {{CSSxRef(":picture-in-picture")}}
- Vollständige Liste der [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes)
