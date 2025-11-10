---
title: ::part()
slug: Web/CSS/Reference/Selectors/::part
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Das **`::part`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) repräsentiert jedes Element innerhalb eines [Shadow-DOM-Baums](/de/docs/Web/API/Web_components/Using_shadow_DOM), das ein übereinstimmendes [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)-Attribut hat.

```css
custom-element::part(foo) {
  /* Styles to apply to the `foo` part */
}
```

## Beschreibung

Das globale [`part`](/de/docs/Web/HTML/Reference/Global_attributes/part)-Attribut macht ein Shadow-DOM-Baumelement im übergeordneten DOM sichtbar. Die im `part`-Attribut deklarierten Part-Namen werden als Parameter des `::part()`-Pseudoelements verwendet. Auf diese Weise können Sie CSS-Stile auf Elemente im Shadow-Baum anwenden, die sich außerhalb davon befinden.

Part-Namen ähneln CSS-Klassen: Mehrere Elemente können denselben Part-Namen haben, und ein einzelnes Element kann mehrere Part-Namen haben. Alle im `::part()`-Pseudoelement verwendeten Part-Namen müssen im `part`-Wert vorhanden sein, der im Shadow-DOM-Element deklariert ist, aber die Reihenfolge der Part-Namen spielt keine Rolle, d.h. die Selektoren `::part(tab active)` und `::part(active tab)` sind gleich.

Das `::part()`-Pseudoelement ist nur im übergeordneten DOM sichtbar. Das bedeutet, dass bei einem verschachtelten Shadow-DOM-Baum die Parts für keine anderen Vorfahren außer dem direkten Elternteil sichtbar sind. Das [`exportparts`](/de/docs/Web/HTML/Reference/Global_attributes/exportparts)-Attribut löst diese Einschränkung, indem es bereits definierte `part`-Namen explizit exportiert und sie global stilisierbar macht.

[Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) (wie `::part(label):hover`) können an den `::part()`-Selektor angehängt werden, aber [strukturelle Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes#tree-structural_pseudo-classes), die basierend auf Bauminformationen übereinstimmen, wie `:empty` und `:last-child`, können nicht angehängt werden.

Zusätzliche Pseudoelemente, wie `::before`, können an den `::part()`-Selektor angehängt werden, aber zusätzliche `::part()`-Elemente können nicht angehängt werden. Zum Beispiel stimmt `::part(confirm-button)::part(active)` nie überein, d.h. es ist nicht dasselbe wie `::part(confirm-button active)`. Dies liegt daran, dass dadurch mehr strukturelle Informationen preisgegeben würden, als beabsichtigt ist.

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
- {{CSSxRef(":state",":state()")}} Pseudoklassenfunktion
- [`exportparts`](/de/docs/Web/HTML/Reference/Global_attributes/exportparts)-Attribut
- [CSS shadow parts](/de/docs/Web/CSS/Guides/Shadow_parts)-Modul
