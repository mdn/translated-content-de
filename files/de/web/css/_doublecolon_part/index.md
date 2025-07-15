---
title: ::part()
slug: Web/CSS/::part
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **`::part`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert ein beliebiges Element innerhalb eines [Schattenbaums](/de/docs/Web/API/Web_components/Using_shadow_DOM), das ein passendes [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part) Attribut besitzt.

```css
custom-element::part(foo) {
  /* Styles to apply to the `foo` part */
}
```

## Beschreibung

Das globale [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part) Attribut macht ein Element des Schattenbaums für das übergeordnete DOM sichtbar. Die mit dem `part` Attribut deklarierten Part-Namen werden als Parameter des `::part()` Pseudo-Elements verwendet. Auf diese Weise können Sie CSS-Stile auf Elemente im Schattenbaum von außerhalb anwenden.

Part-Namen ähneln CSS-Klassen: Mehrere Elemente können denselben Part-Namen haben, und ein einzelnes Element kann mehrere Part-Namen haben. Alle Part-Namen, die im `::part()` Pseudo-Element verwendet werden, müssen im `part` Wert des Schattenbaum-Elements deklariert sein, aber die Reihenfolge der Part-Namen spielt keine Rolle, d.h. die Selektoren `::part(tab active)` und `::part(active tab)` sind gleich.

Das `::part()` Pseudo-Element ist nur für das übergeordnete DOM sichtbar. Das bedeutet, dass, wenn ein Schattenbaum verschachtelt ist, die Parts für keine anderen Vorfahren außer dem direkten Elternteil sichtbar sind. Das [`exportparts`](/de/docs/Web/HTML/Reference/Global_attributes/exportparts) Attribut löst diese Einschränkung, indem es bereits definierte Part-Namen explizit exportiert und sie global stilisierbar macht.

[Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) (wie `::part(label):hover`) können an den `::part()` Selektor angehängt werden, aber [strukturelle Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo-classes), die auf Basis von Baum-Informationen übereinstimmen, wie `:empty` und `:last-child`, können nicht angehängt werden.

Zusätzliche Pseudo-Elemente, wie `::before`, können an den `::part()` Selektor angehängt werden, aber zusätzliche `::part()` Elemente können nicht angehängt werden. Zum Beispiel passt `::part(confirm-button)::part(active)` niemals auf etwas, d.h. es ist nicht dasselbe wie `::part(confirm-button active)`. Dies liegt daran, dass dadurch mehr Strukturinformationen offenbart würden, als beabsichtigt ist.

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

- [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part) Attribut
- {{CSSxRef(":state",":state()")}} Pseudoklasse-Funktion
- [`exportparts`](/de/docs/Web/HTML/Reference/Global_attributes/exportparts) Attribut
- [CSS shadow parts](/de/docs/Web/CSS/CSS_shadow_parts) Modul
