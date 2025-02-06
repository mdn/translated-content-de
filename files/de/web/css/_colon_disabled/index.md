---
title: :disabled
slug: Web/CSS/:disabled
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Die **`:disabled`**-[CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert jedes deaktivierte Element. Ein Element ist deaktiviert, wenn es nicht aktiviert (ausgewählt, angeklickt, hineingeschrieben usw.) oder in den Fokus genommen werden kann. Das Element hat auch einen aktivierten Zustand, in dem es aktiviert werden oder den Fokus erhalten kann.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-disabled.html", "tabbed-standard")}}

## Syntax

```css
:disabled {
  /* ... */
}
```

## Beispiele

Dieses Beispiel zeigt ein grundlegendes Versandformular. Es verwendet das [JavaScript](/de/docs/Web/JavaScript)-[`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignis, um dem Benutzer zu ermöglichen, die Felder für die Rechnungsadresse zu aktivieren/deaktivieren.

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

Deaktivieren/Aktivieren der Eingabefelder, wenn das Kontrollkästchen angeklickt wird.

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

Markieren/Entmarkieren Sie das Kontrollkästchen, um das Styling der Felder für die Rechnungsadresse zu ändern.

{{EmbedLiveSample('Examples', 300, 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref(":enabled")}}
