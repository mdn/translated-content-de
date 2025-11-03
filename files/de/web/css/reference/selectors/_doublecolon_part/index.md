---
title: ::part()
slug: Web/CSS/Reference/Selectors/::part
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Das **`::part`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) repräsentiert jedes Element innerhalb eines [Shadow-DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM), das über ein passendes [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)-Attribut verfügt.

```css
custom-element::part(foo) {
  /* Styles to apply to the `foo` part */
}
```

## Beschreibung

Das globale [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)-Attribut macht ein Element des Shadow-DOM im übergeordneten DOM sichtbar. Die mit dem `part`-Attribut deklarierten Teilenamen werden als Parameter des `::part()` Pseudo-Elements verwendet. Auf diese Weise können Sie CSS-Stile auf Elemente im Shadow-DOM von außen anwenden.

Teilenamen ähneln CSS-Klassen: Mehrere Elemente können denselben Teilnamen haben, und ein einzelnes Element kann mehrere Teilnamen haben. Alle im `::part()` Pseudo-Element verwendeten Teilenamen müssen im `part`-Wert des Shadow-DOM-Elements vorhanden sein, aber die Reihenfolge der Teilnamen spielt keine Rolle, d.h., die Selektoren `::part(tab active)` und `::part(active tab)` sind identisch.

Das `::part()` Pseudo-Element ist nur für das übergeordnete DOM sichtbar. Dies bedeutet, dass bei einem geschachtelten Shadow-DOM die Teile für alle Vorfahren außer dem direkten Elternteil nicht sichtbar sind. Das [`exportparts`](/de/docs/Web/HTML/Reference/Global_attributes/exportparts)-Attribut löst diese Einschränkung, indem es bereits definierte Teilenamen explizit exportiert und global stylisierbar macht.

[Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) (wie z.B. `::part(label):hover`) können an den `::part()`-Selektor angehängt werden, aber [strukturelle Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#tree-structural_pseudo-classes), die auf Bauminformationen basieren, wie `:empty` und `:last-child`, können nicht angehängt werden.

Zusätzliche Pseudo-Elemente, wie `::before`, können an den `::part()`-Selektor angehängt werden, aber zusätzliche `::part()`-Elemente können nicht angehängt werden. Zum Beispiel stimmt `::part(confirm-button)::part(active)` nie mit etwas überein, d.h. es ist nicht dasselbe wie `::part(confirm-button active)`. Dies liegt daran, dass dadurch mehr strukturelle Informationen als vorgesehen offengelegt würden.

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
- {{CSSxRef(":state",":state()")}} Pseudo-Klassenfunktion
- [`exportparts`](/de/docs/Web/HTML/Reference/Global_attributes/exportparts)-Attribut
- [CSS Shadow Parts](/de/docs/Web/CSS/CSS_shadow_parts) Modul
