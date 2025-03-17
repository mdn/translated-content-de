---
title: ::part()
slug: Web/CSS/::part
l10n:
  sourceCommit: e23bab554e32b2d59ff5b69c6eeba8291addf452
---

{{CSSRef}}

Das **`::part`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert jedes Element innerhalb eines [Shadow-Baums](/de/docs/Web/API/Web_components/Using_shadow_DOM), das ein entsprechendes [`part`](/de/docs/Web/HTML/Global_attributes/part)-Attribut besitzt.

```css
custom-element::part(foo) {
  /* Styles to apply to the `foo` part */
}
```

## Beschreibung

Das globale [`part`](/de/docs/Web/HTML/Global_attributes/part)-Attribut macht ein Element des Shadow-Baums für sein übergeordnetes DOM sichtbar. Die mit dem `part`-Attribut deklarierten Teile werden als Parameter des `::part()`-Pseudoelements verwendet. Auf diese Weise können Sie CSS-Stile auf Elemente im Shadow-Baum von außerhalb anwenden.

Teilnamen sind ähnlich wie CSS-Klassen: Mehrere Elemente können denselben Teilnamen haben, und ein einzelnes Element kann mehrere Teilnamen haben. Alle im `::part()`-Pseudoelement verwendeten Teilnamen müssen im `part`-Wert angegeben sein, der auf dem Shadow-Baum-Element deklariert wurde, aber die Reihenfolge der Teilnamen spielt keine Rolle, d. h. die Selektoren `::part(tab active)` und `::part(active tab)` sind gleich.

Das `::part()`-Pseudoelement ist nur für das übergeordnete DOM sichtbar. Das bedeutet, dass wenn ein Shadow-Baum verschachtelt ist, die Teile für keine anderen Vorfahren außer dem direkten Elternteil sichtbar sind. Das [`exportparts`](/de/docs/Web/HTML/Global_attributes/exportparts)-Attribut löst diese Einschränkung, indem es bereits definierte `part`-Namen explizit exportiert und sie global stilisierbar macht.

[Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) (wie `::part(label):hover`) können an den `::part()`-Selektor angehängt werden, aber [strukturelle Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo-classes), die basierend auf Bauminformationen übereinstimmen, wie `:empty` und `:last-child`, können nicht angehängt werden.

Zusätzliche Pseudoelemente, wie `::before`, können an den `::part()`-Selektor angehängt werden, aber zusätzliche `::part()`-Elemente können nicht angehängt werden. Zum Beispiel passt `::part(confirm-button)::part(active)` nie auf etwas, d. h. es ist nicht dasselbe wie `::part(confirm-button active)`. Dies liegt daran, dass dadurch mehr Strukturinformationen offengelegt würden, als beabsichtigt ist.

## Syntax

```css
::part(<ident>+) {
  /* ... */
}
```

## Beispiele

### HTML

```html
<template id="tabbed-custom-element">
  <style>
    *,
    ::before,
    ::after {
      box-sizing: border-box;
      padding: 1rem;
    }
    :host {
      display: flex;
    }
  </style>
  <div part="tab active">Tab A</div>
  <div part="tab">Tab B</div>
  <div part="tab">Tab C</div>
</template>

<tabbed-custom-element></tabbed-custom-element>
```

### CSS

```css
tabbed-custom-element::part(tab) {
  color: blue;
  border-bottom: transparent solid 4px;
}

tabbed-custom-element::part(tab):hover {
  background-color: black;
  color: white;
}

tabbed-custom-element::part(tab active) {
  border-color: blue !important;
}
```

### JavaScript

```js
const template = document.querySelector("#tabbed-custom-element");
globalThis.customElements.define(
  template.id,
  class extends HTMLElement {
    constructor() {
      super().attachShadow({ mode: "open" }).append(template.content);
    }
  },
);
```

### Ergebnis

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`part`](/de/docs/Web/HTML/Global_attributes/part)-Attribut
- {{CSSxRef(":state",":state()")}} Pseudoklassenfunktion
- [`exportparts`](/de/docs/Web/HTML/Global_attributes/exportparts)-Attribut
- [CSS Shadow Parts](/de/docs/Web/CSS/CSS_shadow_parts)-Modul
