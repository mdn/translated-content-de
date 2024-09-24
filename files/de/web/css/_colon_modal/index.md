---
title: ":modal"
slug: Web/CSS/:modal
l10n:
  sourceCommit: 1b9f8e62afc890f2f00d6f9043f3ce0ff2ac4dfb
---

{{CSSRef}}

Die **`:modal`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) passt auf ein Element, das sich in einem Zustand befindet, in dem es jegliche Interaktion mit Elementen außerhalb desselben ausschließt, bis die Interaktion beendet wird. Mehrere Elemente können gleichzeitig durch die `:modal` Pseudoklasse ausgewählt werden, aber nur eines von ihnen wird aktiv sein und Eingaben empfangen können.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-modal.html", "tabbed-shorter")}}

## Syntax

```css
:modal {
  /* ... */
}
```

## Nutzungshinweise

Beispiele für Elemente, die die Benutzerinteraktion mit dem Rest der Seite verhindern und durch die `:modal` Pseudoklasse ausgewählt werden, umfassen:

- Das [`dialog`](/de/docs/Web/HTML/Element/dialog) Element, das mit der `showModal()` API geöffnet wird.
- Das Element, das durch die [`:fullscreen`](/de/docs/Web/CSS/:fullscreen) Pseudoklasse ausgewählt wird, wenn es mit der `requestFullscreen()` API geöffnet wird.

## Beispiele

### Styling eines modalen Dialogs

Dieses Beispiel stylt einen modalen Dialog, der geöffnet wird, wenn der "Details aktualisieren" Button aktiviert wird. Dieses Beispiel basiert auf dem {{HTMLElement("dialog")}} Element [Beispiel](/de/docs/Web/HTML/Element/dialog#handling_the_return_value_from_the_dialog).

```html hidden
<!-- Einfacher modaler Dialog, der ein Formular enthält -->
<dialog id="favDialog">
  <form method="dialog">
    <p>
      <label
        >Lieblingstier:
        <select>
          <option value="default">Wählen…</option>
          <option>Salzkrebs</option>
          <option>Roter Panda</option>
          <option>Spinnenaffe</option>
        </select>
      </label>
    </p>
    <div>
      <button value="cancel">Abbrechen</button>
      <button id="confirmBtn" value="default">Bestätigen</button>
    </div>
  </form>
</dialog>
<p>
  <button id="updateDetails">Details aktualisieren</button>
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

// Wenn ein Browser den Dialog nicht unterstützt, dann den
// Dialog-Inhalt standardmäßig verbergen.
if (typeof favDialog.showModal !== "function") {
  favDialog.hidden = true;
  // Ihr Fallback-Skript
}
// Der "Details aktualisieren" Button öffnet das <dialog> modal
updateButton.addEventListener("click", () => {
  if (typeof favDialog.showModal === "function") {
    favDialog.showModal();
  } else {
    outputBox.value = "Entschuldigung, die Dialog-API wird von diesem Browser nicht unterstützt.";
  }
});
// Der "Lieblingstier" Eingabe setzt den Wert des Senden-Buttons
selectEl.addEventListener("change", (e) => {
  confirmBtn.value = selectEl.value;
});
// Der "Bestätigen" Button des Formulars löst "close" für den Dialog aus wegen [method="dialog"]
favDialog.addEventListener("close", () => {
  outputBox.value = `${
    favDialog.returnValue
  } Button geklickt - ${new Date().toString()}`;
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
- Andere Pseudoklassen für den Anzeigezustand von Elementen: {{CSSxRef(":fullscreen")}} und {{CSSxRef(":picture-in-picture")}}
- Vollständige Liste der [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes)
