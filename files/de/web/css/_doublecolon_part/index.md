---
title: "::part()"
slug: Web/CSS/::part
l10n:
  sourceCommit: 5026c14bd6d2b6b377289aadac7eceae9282e806
---

{{CSSRef}}

Das **`::part`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert jedes Element innerhalb eines [Schattenbaums](/de/docs/Web/API/Web_components/Using_shadow_DOM), das ein übereinstimmendes [`part`](/de/docs/Web/HTML/Global_attributes/part) Attribut hat.

```css
custom-element::part(foo) {
  /* Styles to apply to the `foo` part */
}
```

## Beschreibung

Das globale [`part`](/de/docs/Web/HTML/Global_attributes/part) Attribut macht ein Schattenbaum-Element für seinen Eltern-DOM sichtbar. Die Teilnamen, die mit dem `part` Attribut deklariert werden, dienen als Parameter des `::part()` Pseudoelements. Auf diese Weise können Sie CSS-Stile auf Elemente im Schattenbaum von außerhalb anwenden.

Teilnamen sind ähnlich wie CSS-Klassen: Mehrere Elemente können denselben Teilnamen haben, und ein einzelnes Element kann mehrere Teilnamen haben. Alle im `::part()` Pseudoelement verwendeten Teilnamen müssen im `part` Wert deklariert sein, der auf das Schattenbaum-Element angewendet wird, aber die Reihenfolge der Teilnamen spielt keine Rolle, d.h. die Selektoren `::part(tab active)` und `::part(active tab)` sind gleich.

Das `::part()` Pseudoelement ist nur für den Eltern-DOM sichtbar. Das bedeutet, dass wenn ein Schattenbaum geschachtelt ist, die Teile für keine Vorfahren außer dem direkten Elternteil sichtbar sind. Das [`exportparts`](/de/docs/Web/HTML/Global_attributes/exportparts) Attribut löst diese Einschränkung, indem es bereits definierte Teilnamen explizit exportiert und sie somit global stilisierbar macht.

[Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) (wie `::part(label):hover`) können an den `::part()` Selektor angehängt werden, aber [strukturelle Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo-classes), die auf Basis von Bauminformationen (wie `:empty`), anstatt lokaler Elementinformationen (wie `:last-child`), übereinstimmen, können nicht angehängt werden.

Zusätzliche Pseudoelemente, wie `::before`, können an den `::part()` Selektor angehängt werden, aber ein weiteres `::part()` Element kann nicht angehängt werden. Beispielsweise passt `::part(confirm-button)::part(active)` niemals zu etwas, d.h. es ist nicht dasselbe wie `::part(confirm-button active)`. Dies liegt daran, dass dadurch mehr strukturelle Informationen offengelegt würden, als beabsichtigt ist.

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

- [`part`](/de/docs/Web/HTML/Global_attributes/part) Attribut
- {{CSSxRef(":state",":state()")}} Pseudoklassenfunktion
- [`exportparts`](/de/docs/Web/HTML/Global_attributes/exportparts) Attribut
- [CSS shadow parts](/de/docs/Web/CSS/CSS_shadow_parts) Modul
