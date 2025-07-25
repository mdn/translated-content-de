---
title: :disabled
slug: Web/CSS/:disabled
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`:disabled`** [CSS](/de/docs/Web/CSS) [Pseudo-Klasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes deaktivierte Element. Ein Element ist deaktiviert, wenn es nicht aktiviert (ausgewählt, angeklickt, getippt, etc.) oder fokussiert werden kann. Das Element hat auch einen aktivierten Zustand, in dem es aktiviert oder fokussiert werden kann.

{{InteractiveExample("CSS Demo: :disabled", "tabbed-standard")}}

```css interactive-example
label {
  display: block;
  margin-top: 1em;
}

*:disabled {
  background-color: dimgrey;
  color: linen;
  opacity: 1;
}
```

```html interactive-example
<form>
  <label for="name">Name:</label>
  <input id="name" name="name" type="text" />

  <label for="emp">Employed:</label>
  <select id="emp" name="emp" disabled>
    <option>No</option>
    <option>Yes</option>
  </select>

  <label for="empDate">Employment Date:</label>
  <input id="empDate" name="empDate" type="date" disabled />

  <label for="resume">Resume:</label>
  <input id="resume" name="resume" type="file" />
</form>
```

## Syntax

```css
:disabled {
  /* ... */
}
```

## Beispiele

Dieses Beispiel zeigt ein grundlegendes Versandformular. Es verwendet das [JavaScript](/de/docs/Web/JavaScript) [`change`](/de/docs/Web/API/HTMLElement/change_event) Event, um dem Benutzer zu ermöglichen, die Rechnungsfelder zu aktivieren/deaktivieren.

### HTML

```html
<form action="#">
  <fieldset id="shipping">
    <legend>Shipping address</legend>
    <input type="text" placeholder="Name" />
    <input type="text" placeholder="Address" />
    <input type="text" placeholder="Zip Code" />
  </fieldset>
  <br />
  <fieldset id="billing">
    <legend>Billing address</legend>
    <label for="billing-checkbox">Same as shipping address:</label>
    <input type="checkbox" id="billing-checkbox" checked />
    <br />
    <input type="text" placeholder="Name" disabled />
    <input type="text" placeholder="Address" disabled />
    <input type="text" placeholder="Zip Code" disabled />
  </fieldset>
</form>
```

### CSS

```css
input[type="text"]:disabled {
  background: #ccc;
}
```

### JavaScript

Umschalten der deaktivierten Eingabefelder, wenn das Kontrollkästchen angeklickt wird

```js
const checkbox = document.querySelector("#billing-checkbox");
const billingItems = document.querySelectorAll('#billing input[type="text"]');

checkbox.addEventListener("change", () => {
  billingItems.forEach((item) => {
    item.disabled = !item.disabled;
  });
});
```

### Ergebnis

Markieren/Entmarkieren Sie das Kontrollkästchen, um das Styling der Rechnungsfelder zu ändern.

{{EmbedLiveSample('Examples', 300, 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref(":enabled")}}
