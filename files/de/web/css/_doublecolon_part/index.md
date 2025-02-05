---
title: "::part()"
slug: Web/CSS/::part
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Der **`::part`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert jedes Element innerhalb eines [Shadow-Baums](/de/docs/Web/API/Web_components/Using_shadow_DOM), das ein passendes [`part`](/de/docs/Web/HTML/Global_attributes/part)-Attribut besitzt.

```css
custom-element::part(foo) {
  /* Styles to apply to the `foo` part */
}
```

## Beschreibung

Das globale [`part`](/de/docs/Web/HTML/Global_attributes/part)-Attribut macht ein Shadow-Baum-Element für seinen übergeordneten DOM sichtbar. Die mit dem `part`-Attribut deklarierten Part-Namen werden als Parameter des `::part()`-Pseudoelements verwendet. Dadurch können Sie CSS-Stile auf Elemente im Shadow-Baum von außerhalb anwenden.

Part-Namen ähneln CSS-Klassen: Mehrere Elemente können denselben Part-Namen haben, und ein einzelnes Element kann mehrere Part-Namen haben. Alle Part-Namen, die im `::part()`-Pseudoelement verwendet werden, müssen im `part`-Wert des Shadow-Baum-Elements deklariert sein, aber die Reihenfolge der Part-Namen spielt keine Rolle, d.h., die Selektoren `::part(tab active)` und `::part(active tab)` sind identisch.

Das `::part()`-Pseudoelement ist nur für das übergeordnete DOM sichtbar. Das bedeutet, dass bei einem verschachtelten Shadow-Baum die Parts nicht für andere Vorfahren sichtbar sind, außer direkt für das übergeordnete DOM. Das [`exportparts`](/de/docs/Web/HTML/Global_attributes/exportparts)-Attribut löst diese Einschränkung, indem es bereits definierte `part`-Namen explizit exportiert und damit global stilisierbar macht.

[Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) (wie `::part(label):hover`) können an den `::part()`-Selektor angehängt werden, aber [strukturelle Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo-classes), die auf Basis von Baum-Informationen übereinstimmen (wie `:empty`), anstelle von lokalen Element-Informationen (wie `:last-child`), können nicht angehängt werden.

Zusätzliche Pseudoelemente, wie `::before`, können an den `::part()`-Selektor angehängt werden, aber zusätzliche `::part()`-Elemente können nicht angehängt werden. Zum Beispiel wird `::part(confirm-button)::part(active)` niemals übereinstimmen, d.h., es ist nicht dasselbe wie `::part(confirm-button active)`. Dies liegt daran, dass dadurch mehr strukturelle Informationen offengelegt würden, als beabsichtigt.

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
- {{CSSxRef(":state",":state()")}} Pseudoklassen-Funktion
- [`exportparts`](/de/docs/Web/HTML/Global_attributes/exportparts)-Attribut
- [CSS Shadow Parts](/de/docs/Web/CSS/CSS_shadow_parts)-Modul
