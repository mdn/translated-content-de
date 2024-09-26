---
title: "::part()"
slug: Web/CSS/::part
l10n:
  sourceCommit: 3a970f7ba10b9551446257eb146374a83f5c2597
---

{{CSSRef}}

Das **`::part`** [CSS](/de/docs/Web/CSS)-[Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert jedes Element innerhalb eines [Shadow-Trees](/de/docs/Web/API/Web_components/Using_shadow_DOM), das ein passendes [`part`](/de/docs/Web/HTML/Global_attributes/part)-Attribut besitzt.

```css
custom-element::part(foo) {
  /* Styles, die auf den `foo`-Teil angewendet werden sollen */
}
```

## Beschreibung

Das globale [`part`](/de/docs/Web/HTML/Global_attributes/part)-Attribut macht ein Element des Shadow-Trees für seinen übergeordneten DOM sichtbar. Die mit dem `part`-Attribut deklarierten Part-Namen werden als Parameter des `::part()`-Pseudoelements verwendet. Auf diese Weise können Sie CSS-Stile auf Elemente im Shadow-Tree von außerhalb anwenden.

Part-Namen sind ähnlich wie CSS-Klassen: Mehrere Elemente können denselben Part-Namen haben, und ein einzelnes Element kann mehrere Part-Namen haben. Alle in `::part()`-Pseudoelement verwendeten Part-Namen müssen im `part`-Wert deklariert sein, der auf dem Shadow-Tree-Element festgelegt ist, aber die Reihenfolge der Part-Namen spielt keine Rolle, d.h., die Selektoren `::part(tab active)` und `::part(active tab)` sind gleich.

Das `::part()`-Pseudoelement ist nur für das übergeordnete DOM sichtbar. Das bedeutet, dass, wenn ein Shadow-Tree geschachtelt ist, die Teile für keine weiteren Vorfahren außer dem direkten Elternteil sichtbar sind. Das [`exportparts`](/de/docs/Web/HTML/Global_attributes/exportparts)-Attribut löst diese Einschränkung, indem es bereits definierte Part-Namen explizit exportiert und sie global stilisierbar macht.

[Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) (wie `::part(label):hover`) können an den `::part()`-Selektor angehängt werden, aber [strukturelle Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo-classes), die auf Bauminformationen basieren (wie `:empty`) und nicht auf lokalen Elementinformationen (wie `:last-child`), können nicht angehängt werden.

Zusätzliche Pseudoelemente, wie `::before`, können an den `::part()`-Selektor angehängt werden, aber zusätzliche `::part()`-Elemente können nicht angehängt werden. Zum Beispiel, `::part(confirm-button)::part(active)` passt niemals auf etwas, d.h., es ist nicht dasselbe wie `::part(confirm-button active)`. Dies liegt daran, dass dies mehr strukturelle Informationen offenlegen würde, als beabsichtigt ist.

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

- [`part`](/de/docs/Web/HTML/Global_attributes#part)-Attribut
- {{CSSxRef(":state",":state()")}} Pseudoklassen-Funktion
- [`exportparts`](/de/docs/Web/HTML/Global_attributes#exportparts)-Attribut
- [CSS-Shadow-Parts](/de/docs/Web/CSS/CSS_shadow_parts)-Modul