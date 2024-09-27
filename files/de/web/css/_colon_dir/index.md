---
title: ":dir()"
slug: Web/CSS/:dir
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:dir()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) entspricht Elementen basierend auf der Schreibrichtung des in ihnen enthaltenen Textes.

```css
/* Selects any element with right-to-left text */
:dir(rtl) {
  background-color: red;
}
```

Die `:dir()` Pseudoklasse verwendet nur den _semantischen_ Wert der Schreibrichtung, d.h., den im Dokument selbst definierten. Sie berücksichtigt nicht die _stilistische_ Schreibrichtung, also die Schreibrichtung, die durch CSS-Eigenschaften wie {{cssxref("direction")}} festgelegt wird.

> [!NOTE]
> Beachten Sie, dass das Verhalten der `:dir()` Pseudoklasse nicht mit dem der `[dir=…]` [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) identisch ist. Letztere entsprechen dem HTML-Attribut [`dir`](/de/docs/Web/HTML/Global_attributes#dir) und ignorieren Elemente, die es nicht haben — selbst wenn sie eine Richtung von ihrem Elternteil erben. (Ebenso werden `[dir=rtl]` und `[dir=ltr]` den Wert `auto` nicht berücksichtigen.) Im Gegensatz dazu entspricht `:dir()` dem vom [User-Agent](/de/docs/Glossary/user_agent) berechneten Wert, selbst wenn er geerbt wurde.

> [!NOTE]
> In HTML wird die Richtung durch das [`dir`](/de/docs/Web/HTML/Global_attributes#dir)-Attribut bestimmt. Andere Dokumenttypen können unterschiedliche Methoden haben.

## Syntax

Die `:dir()` Pseudoklasse erfordert einen Parameter, der die Schreibrichtung darstellt, die Sie anvisieren möchten.

```css-nolint
:dir([ltr | rtl]) {
  /* ... */
}
```

### Parameter

- `ltr`
  - : Zielt auf von links nach rechts verlaufende Elemente ab.
- `rtl`
  - : Zielt auf von rechts nach links verlaufende Elemente ab.

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
- HTML-Attribut [`lang`](/de/docs/Web/HTML/Global_attributes#lang)
- HTML-Attribut [`translate`](/de/docs/Web/HTML/Global_attributes#translate)
