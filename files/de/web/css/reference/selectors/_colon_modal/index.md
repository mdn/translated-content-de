---
title: "`:modal`-CSS-Pseudoklasse"
short-title: :modal
slug: Web/CSS/Reference/Selectors/:modal
l10n:
  sourceCommit: 31e1fcaa50ff25bb27d7093758fa7a7088fff1e0
---

Die **`:modal`**-[CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) wählt ein Element aus, das sich in einem Zustand befindet, in dem es jede Interaktion mit Elementen außerhalb seiner selbst verhindert, bis die Interaktion beendet wird. Mehrere Elemente können gleichzeitig von der Pseudoklasse `:modal` ausgewählt werden, aber nur eines davon ist aktiv und kann Eingaben empfangen.

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

## Hinweise zur Verwendung

Zu den Elementen, die eine Benutzerinteraktion mit dem Rest der Seite verhindern und von der Pseudoklasse `:modal` ausgewählt werden, gehören:

- Das Element [`dialog`](/de/docs/Web/HTML/Reference/Elements/dialog), das mit der API `showModal()` geöffnet wurde.
- Das Element, das von der Pseudoklasse {{cssxref(":fullscreen")}} ausgewählt wird, wenn es mit der API `requestFullscreen()` geöffnet wurde.

## Beispiele

### Einen modalen Dialog gestalten

In diesem Beispiel wird ein modaler Dialog gestaltet, der sich öffnet, wenn die Schaltfläche „Show the dialog“ aktiviert wird. Das Beispiel wurde vom [Beispiel](/de/docs/Web/HTML/Reference/Elements/dialog#handling_the_return_value_from_the_dialog) für das Element {{HTMLElement("dialog")}} abgeleitet.

```html hidden
<!-- A modal dialog containing a form -->
<dialog id="favDialog">
  <form method="dialog">
    <p>
      <label>
        Favorite animal:
        <select>
          <option>Choose…</option>
          <option>Brine shrimp</option>
          <option>Red panda</option>
          <option>Spider monkey</option>
        </select>
      </label>
    </p>
    <div>
      <button>Cancel</button>
      <button>Confirm</button>
    </div>
  </form>
</dialog>
<p>
  <button id="showDialog">Show the dialog</button>
</p>
```

#### CSS

Die Pseudoklasse `:modal` wählt den mit `showModal()` geöffneten Dialog aus und versieht ihn mit einem roten Rahmen, einem gelben Hintergrund und einem Schlagschatten.

```css
:modal {
  border: 5px solid red;
  background-color: yellow;
  box-shadow: 3px 3px 10px rgb(0 0 0 / 50%);
}
```

```js hidden
const showButton = document.getElementById("showDialog");
const favDialog = document.getElementById("favDialog");

showButton.addEventListener("click", () => {
  favDialog.showModal();
});
```

### Ergebnis

{{EmbedLiveSample("Styling_a_modal_dialog", "100%", 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Element [`dialog`](/de/docs/Web/HTML/Reference/Elements/dialog)
- Weitere Pseudoklassen für den Anzeigezustand von Elementen: {{CSSxRef(":fullscreen")}} und {{CSSxRef(":picture-in-picture")}}
- Vollständige Liste der [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
