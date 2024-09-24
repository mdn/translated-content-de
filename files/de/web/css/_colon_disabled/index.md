---
title: ":disabled"
slug: Web/CSS/:disabled
l10n:
  sourceCommit: 5fef5d3c2b35846676218d5c9f7c5cfad10aa94b
---

{{CSSRef}}

Die **`:disabled`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein beliebiges deaktiviertes Element. Ein Element ist deaktiviert, wenn es nicht aktiviert (ausgewählt, angeklickt, getippt usw.) werden kann oder keinen Fokus akzeptieren kann. Das Element hat auch einen aktivierten Zustand, in dem es aktiviert werden kann oder Fokus akzeptiert.

{{EmbedInteractiveExample("pages/tabbed/pseudo-class-disabled.html", "tabbed-standard")}}

## Syntax

```css
:disabled {
  /* ... */
}
```

## Beispiele

Dieses Beispiel zeigt ein einfaches Versandformular. Es verwendet das [JavaScript](/de/docs/Web/JavaScript) {{domxref("HTMLElement/change_event", "change")}}-Ereignis, um dem Benutzer das Aktivieren/Deaktivieren der Rechnungsfelder zu ermöglichen.

### HTML

```html
<form action="#">
  <fieldset id="shipping">
    <legend>Versandadresse</legend>
    <input type="text" placeholder="Name" />
    <input type="text" placeholder="Adresse" />
    <input type="text" placeholder="Postleitzahl" />
  </fieldset>
  <br />
  <fieldset id="billing">
    <legend>Rechnungsadresse</legend>
    <label for="billing-checkbox">Gleich wie Versandadresse:</label>
    <input type="checkbox" id="billing-checkbox" checked />
    <br />
    <input type="text" placeholder="Name" disabled />
    <input type="text" placeholder="Adresse" disabled />
    <input type="text" placeholder="Postleitzahl" disabled />
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

Die deaktivierten Eingabefelder umschalten, wenn das Kontrollkästchen angeklickt wird

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

Aktivieren/Deaktivieren Sie das Kontrollkästchen, um die Gestaltung der Rechnungsfelder zu ändern.

{{EmbedLiveSample('Examples', 300, 250)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Cssxref(":enabled")}}
