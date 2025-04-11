---
title: ::part()
slug: Web/CSS/::part
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Das **`::part`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert jedes Element innerhalb eines [Shadow-Baums](/de/docs/Web/API/Web_components/Using_shadow_DOM), das ein passendes [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)-Attribut hat.

```css
custom-element::part(foo) {
  /* Styles to apply to the `foo` part */
}
```

## Beschreibung

Das globale [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)-Attribut macht ein Shadow-Baum-Element für sein Eltern-DOM sichtbar. Die mit dem `part`-Attribut deklarierten Part-Namen werden als Parameter des `::part()`-Pseudo-Elements verwendet. Dadurch können Sie CSS-Stile auf Elemente im Shadow-Baum von außerhalb anwenden.

Part-Namen sind ähnlich wie CSS-Klassen: Mehrere Elemente können denselben Part-Namen haben, und ein einzelnes Element kann mehrere Part-Namen haben. Alle Part-Namen, die im `::part()`-Pseudo-Element verwendet werden, müssen im `part`-Wert des Shadow-Baum-Elements vorhanden sein, aber die Reihenfolge der Part-Namen spielt keine Rolle, d.h. die Selektoren `::part(tab active)` und `::part(active tab)` sind gleich.

Das `::part()`-Pseudo-Element ist nur für das Eltern-DOM sichtbar. Das bedeutet, dass, wenn ein Shadow-Baum verschachtelt ist, die Teile für keine anderen Vorfahren als den direkten Elternteil sichtbar sind. Das [`exportparts`](/de/docs/Web/HTML/Reference/Global_attributes/exportparts)-Attribut löst diese Einschränkung, indem bereits definierte `part`-Namen explizit exportiert werden, sodass sie global stilisiert werden können.

[Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) (wie `::part(label):hover`) können dem `::part()`-Selektor hinzugefügt werden, aber [strukturelle Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo-classes), die aufgrund von Bauminformationen passen, wie `:empty` und `:last-child`, können nicht angehängt werden.

Zusätzliche Pseudo-Elemente, wie `::before`, können dem `::part()`-Selektor angehängt werden, aber zusätzliche `::part()`-Elemente können nicht angehängt werden. Zum Beispiel passt `::part(confirm-button)::part(active)` nie auf etwas, d.h. es ist nicht dasselbe wie `::part(confirm-button active)`. Dies liegt daran, dass dadurch mehr strukturelle Informationen preisgegeben würden, als beabsichtigt ist.

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
- {{CSSxRef(":state",":state()")}} Pseudo-Klassen-Funktion
- [`exportparts`](/de/docs/Web/HTML/Reference/Global_attributes/exportparts)-Attribut
- [CSS Shadow Parts](/de/docs/Web/CSS/CSS_shadow_parts)-Modul
