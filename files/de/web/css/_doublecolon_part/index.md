---
title: "::part()"
slug: Web/CSS/::part
l10n:
  sourceCommit: 50c8e290f11b061bbf2267e1a3279f28180a5fcb
---

{{CSSRef}}

Das **`::part`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert jedes Element innerhalb eines [Schattenbaums](/de/docs/Web/API/Web_components/Using_shadow_DOM), das ein übereinstimmendes [`part`](/de/docs/Web/HTML/Global_attributes/part)-Attribut hat.

```css
custom-element::part(foo) {
  /* Styles to apply to the `foo` part */
}
```

## Beschreibung

Das globale [`part`](/de/docs/Web/HTML/Global_attributes/part)-Attribut macht ein Schattenbaumelement für seinen übergeordneten DOM sichtbar. Die mit dem `part`-Attribut deklarierten Teilenamen werden als Parameter des `::part()`-Pseudoelements verwendet. Auf diese Weise können Sie CSS-Stile auf Elemente im Schattenbaum von außen anwenden.

Teilenamen sind ähnlich wie CSS-Klassen: Mehrere Elemente können denselben Teilnamen haben, und ein einziges Element kann mehrere Teilnamen besitzen. Alle im `::part()`-Pseudoelement verwendeten Teilenamen müssen im `part`-Wert des Schattenbaumelements deklariert sein, jedoch spielt die Reihenfolge der Teilenamen keine Rolle, d.h., die Selektoren `::part(tab active)` und `::part(active tab)` sind gleich.

Das `::part()`-Pseudoelement ist nur für das übergeordnete DOM sichtbar. Das bedeutet, dass bei einem geschachtelten Schattenbaum die Teile für keine anderen Vorfahren als das direkte Elternteil sichtbar sind. Das [`exportparts`](/de/docs/Web/HTML/Global_attributes/exportparts)-Attribut löst diese Einschränkung, indem es bereits definierte `part`-Namen explizit exportiert, wodurch sie global stilisierbar werden.

[Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) (wie `::part(label):hover`) können an den `::part()`-Selektor angehängt werden, aber [strukturelle Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo-classes), die auf Basis von Bauminformationen übereinstimmen (wie `:empty`), anstatt auf lokalen Elementinformationen (wie `:last-child`), können nicht angehängt werden.

Zusätzliche Pseudoelemente, wie `::before`, können an den `::part()`-Selektor angehängt werden, aber zusätzliche `::part()`-Elemente können nicht angehängt werden. Zum Beispiel stimmt `::part(confirm-button)::part(active)` niemals mit etwas überein, d.h. es ist nicht dasselbe wie `::part(confirm-button active)`. Dies liegt daran, dass dadurch mehr Strukturinformationen als beabsichtigt offengelegt würden.

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
- {{CSSxRef(":state",":state()")}} Pseudo-Klassenfunktion
- [`exportparts`](/de/docs/Web/HTML/Global_attributes/exportparts)-Attribut
- [CSS shadow parts](/de/docs/Web/CSS/CSS_shadow_parts)-Modul
