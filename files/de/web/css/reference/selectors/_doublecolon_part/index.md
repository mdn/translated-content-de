---
title: "`::part()` CSS pseudo-element"
short-title: ::part()
slug: Web/CSS/Reference/Selectors/::part
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

Das **`::part`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) repräsentiert jedes Element innerhalb eines [Shadow-DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM), das ein passendes [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)-Attribut hat.

```css
custom-element::part(foo) {
  /* Styles to apply to the `foo` part */
}
```

## Beschreibung

Das globale [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)-Attribut macht ein Element des Shadow-DOMs für sein übergeordnetes DOM sichtbar. Die mit dem `part`-Attribut deklarierten Part-Namen werden als Parameter des `::part()`-Pseudoelements verwendet. Auf diese Weise können Sie CSS-Stile auf Elemente im Shadow-DOM von außen anwenden.

Part-Namen ähneln CSS-Klassen: Mehrere Elemente können denselben Part-Namen haben, und ein einzelnes Element kann mehrere Part-Namen besitzen. Alle Part-Namen, die im `::part()`-Pseudoelement verwendet werden, müssen im `part`-Wert deklariert sein, der auf das Shadow-DOM-Element angewendet wird, aber die Reihenfolge der Part-Namen spielt keine Rolle, d.h. die Selektoren `::part(tab active)` und `::part(active tab)` sind gleich.

Das `::part()`-Pseudoelement ist nur für das übergeordnete DOM sichtbar. Das bedeutet, dass wenn ein Shadow-DOM verschachtelt ist, die Teile für keine anderen Vorfahren außer dem direkten übergeordneten DOM sichtbar sind. Das [`exportparts`](/de/docs/Web/HTML/Reference/Global_attributes/exportparts)-Attribut löst diese Einschränkung, indem es bereits definierte `part`-Namen explizit exportiert und sie global stilbar macht.

[Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) (wie `::part(label):hover`) können an den `::part()`-Selektor angehängt werden, aber [strukturelle Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#tree-structural_pseudo-classes), die basierend auf Bauminformationen übereinstimmen, wie `:empty` und `:last-child`, können nicht angehängt werden.

Weitere Pseudoelemente, wie `::before`, können an den `::part()`-Selektor angehängt werden, aber zusätzliche `::part()`-Elemente können nicht angehängt werden. Zum Beispiel `::part(confirm-button)::part(active)` stimmt niemals mit etwas überein, d.h. es ist nicht dasselbe wie `::part(confirm-button active)`. Dies liegt daran, dass auf diese Weise mehr strukturelle Informationen offengelegt würden, als beabsichtigt ist.

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

- [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)-Attribut
- {{CSSxRef(":state",":state()")}} Pseudoklassen-Funktion
- [`exportparts`](/de/docs/Web/HTML/Reference/Global_attributes/exportparts)-Attribut
- [CSS Shadow Parts](/de/docs/Web/CSS/Guides/Shadow_parts)-Modul
