---
title: "`::part()` CSS pseudo-element"
short-title: ::part()
slug: Web/CSS/Reference/Selectors/::part
l10n:
  sourceCommit: e8551ed116f8be8684765108079bed2c2f876132
---

Das **`::part`**-[CSS](/de/docs/Web/CSS)-[Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) repräsentiert jedes Element innerhalb eines [Shadow-Baums](/de/docs/Web/API/Web_components/Using_shadow_DOM), das ein passendes [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)-Attribut hat.

```css
custom-element::part(foo) {
  /* Styles to apply to the `foo` part */
}
```

## Syntax

```css
::part(<ident>+) {
  /* ... */
}
```

## Beschreibung

Das globale [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)-Attribut macht ein Element eines Shadow-Baums für dessen übergeordnetes DOM sichtbar. Die mit dem `part`-Attribut deklarierten Part-Namen werden als Parameter des Pseudoelements `::part()` verwendet. So können Sie von außerhalb des Shadow-Baums CSS-Stile auf Elemente darin anwenden.

Part-Namen ähneln CSS-Klassen: Mehrere Elemente können denselben Part-Namen haben, und ein einzelnes Element kann mehrere Part-Namen haben. Alle im Pseudoelement `::part()` verwendeten Part-Namen müssen im `part`-Wert des Elements im Shadow-Baum enthalten sein. Die Reihenfolge der Part-Namen spielt jedoch keine Rolle: Die Selektoren `::part(tab active)` und `::part(active tab)` sind gleichwertig.

Das Pseudoelement `::part()` ist nur für das übergeordnete DOM sichtbar. Das bedeutet, dass bei verschachtelten Shadow-Bäumen die Parts für keine anderen Vorfahren als das direkt übergeordnete DOM sichtbar sind. Das Attribut [`exportparts`](/de/docs/Web/HTML/Reference/Global_attributes/exportparts) behebt diese Einschränkung, indem es bereits definierte `part`-Namen ausdrücklich exportiert und sie so von außen formatierbar macht.

[Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) (wie in `::part(label):hover`) können an den `::part()`-Selektor angehängt werden. [Strukturelle Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#tree-structural_pseudo-classes), die anhand der Baumstruktur übereinstimmen, wie `:empty` und `:last-child`, können dagegen nicht angehängt werden.

Weitere Pseudoelemente wie `::before` können an den `::part()`-Selektor angehängt werden, ein weiteres `::part()`-Pseudoelement jedoch nicht. Beispielsweise stimmt `::part(confirm-button)::part(active)` mit keinem Element überein; es ist also nicht dasselbe wie `::part(confirm-button active)`. Der Grund dafür ist, dass andernfalls mehr Informationen über die Struktur offengelegt würden als beabsichtigt.

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
- {{CSSxRef(":state",":state()")}}-Pseudoklassenfunktion
- [`exportparts`](/de/docs/Web/HTML/Reference/Global_attributes/exportparts)-Attribut
- Modul [CSS Shadow Parts](/de/docs/Web/CSS/Guides/Shadow_parts)
