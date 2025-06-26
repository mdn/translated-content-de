---
title: :dir()
slug: Web/CSS/:dir
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{CSSRef}}

Die **`:dir()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) selektiert Elemente basierend auf der Ausrichtung des Textes, der in ihnen enthalten ist.

```css
/* Selects any element with right-to-left text */
:dir(rtl) {
  background-color: red;
}
```

Die `:dir()` Pseudoklasse verwendet nur den _semantischen_ Wert der Ausrichtung, d.h. den im Dokument selbst definierten. Sie berücksichtigt nicht die _stilistische_ Ausrichtung, also die Ausrichtung, die durch CSS-Eigenschaften wie {{cssxref("direction")}} festgelegt ist.

> [!NOTE]
> Beachten Sie, dass das Verhalten der `:dir()` Pseudoklasse nicht dem der `[dir=…]` [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) entspricht. Letztere selektieren das HTML-Attribut [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) und ignorieren Elemente, die es nicht haben — selbst wenn sie eine Ausrichtung von ihrem übergeordneten Element erben. (Ebenso werden `[dir=rtl]` und `[dir=ltr]` nicht den Wert `auto` selektieren.) Im Gegensatz dazu wählt `:dir()` den vom {{Glossary("user_agent", "User-Agent")}} berechneten Wert aus, selbst wenn dieser geerbt wird.

> [!NOTE]
> In HTML wird die Richtung durch das Attribut [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) bestimmt. Andere Dokumententypen können unterschiedliche Methoden haben.

## Syntax

```css-nolint
:dir([ltr | rtl]) {
  /* ... */
}
```

### Parameter

Die `:dir()` Pseudoklasse erfordert einen Parameter, der die Textausrichtung repräsentiert, auf die Sie abzielen möchten.

- `ltr`
  - : Zielt auf links-nach-rechts Elemente ab.
- `rtl`
  - : Zielt auf rechts-nach-links Elemente ab.

## Beispiele

### HTML

```html
<div dir="rtl">
  <span>test1</span>
  <div dir="ltr">
    test2
    <div dir="auto">עִבְרִית</div>
  </div>
</div>
```

### CSS

```css
:dir(ltr) {
  background-color: yellow;
}

:dir(rtl) {
  background-color: powderblue;
}
```

### Ergebnis

{{ EmbedLiveSample('Examples') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Sprachbezogene Pseudoklassen: {{cssxref(":lang")}}
- HTML [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) Attribut
- HTML [`translate`](/de/docs/Web/HTML/Reference/Global_attributes/translate) Attribut
