---
title: ":dir()"
slug: Web/CSS/:dir
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:dir()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) selektiert Elemente basierend auf der Richtung des Textes, der in ihnen enthalten ist.

```css
/* Selektiert jedes Element mit von rechts nach links gerichtetem Text */
:dir(rtl) {
  background-color: red;
}
```

Die `:dir()`-Pseudoklasse verwendet nur den _semantischen_ Wert der Richtung, das heißt, den im Dokument selbst definierten. Sie berücksichtigt nicht die _stilistische_ Richtung, also die Richtung, die durch CSS-Eigenschaften wie {{cssxref("direction")}} festgelegt wird.

> [!NOTE]
> Beachten Sie, dass das Verhalten der `:dir()`-Pseudoklasse nicht gleichwertig zu den `[dir=…]` [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) ist. Letztere selektieren das HTML-Attribut [`dir`](/de/docs/Web/HTML/Global_attributes#dir) und ignorieren Elemente, die es nicht haben – selbst wenn sie eine Richtung von ihrem Elternteil erben. (Ebenso werden `[dir=rtl]` und `[dir=ltr]` den Wert `auto` nicht auswählen.) Im Gegensatz dazu wird `:dir()` den vom {{glossary("user agent")}} berechneten Wert auswählen, selbst wenn er geerbt wird.

> [!NOTE]
> In HTML wird die Richtung durch das [`dir`](/de/docs/Web/HTML/Global_attributes#dir) Attribut bestimmt. Andere Dokumenttypen können über unterschiedliche Methoden verfügen.

## Syntax

Die `:dir()`-Pseudoklasse benötigt einen Parameter, der die gewünschte Textrichtung repräsentiert, die Sie anvisieren möchten.

```css-nolint
:dir([ltr | rtl]) {
  /* ... */
}
```

### Parameter

- `ltr`
  - : Zielt auf von links nach rechts gerichtete Elemente.
- `rtl`
  - : Zielt auf von rechts nach links gerichtete Elemente.

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
- HTML [`lang`](/de/docs/Web/HTML/Global_attributes#lang) Attribut
- HTML [`translate`](/de/docs/Web/HTML/Global_attributes#translate) Attribut
