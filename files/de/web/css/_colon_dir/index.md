---
title: ":dir()"
slug: Web/CSS/:dir
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:dir()`** [CSS](/de/docs/Web/CSS) [Pseudo-Klasse](/de/docs/Web/CSS/Pseudo-classes) wählt Elemente basierend auf der Richtung des in ihnen enthaltenen Textes aus.

```css
/* Selects any element with right-to-left text */
:dir(rtl) {
  background-color: red;
}
```

Die `:dir()` Pseudo-Klasse verwendet nur den _semantischen_ Wert der Richtung, d.h. den im Dokument selbst definierten. Sie berücksichtigt nicht die _stilistische_ Richtung, d.h. die durch CSS-Eigenschaften wie {{cssxref("direction")}} festgelegte Richtung.

> [!NOTE]
> Beachten Sie, dass das Verhalten der `:dir()` Pseudo-Klasse nicht dem der `[dir=…]` [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) entspricht. Letztere wählen das HTML-Attribut [`dir`](/de/docs/Web/HTML/Global_attributes#dir) aus und ignorieren Elemente, denen es fehlt - auch wenn sie eine Richtung von ihrem Elternteil erben. (Ebenso passen `[dir=rtl]` und `[dir=ltr]` nicht zum Wert `auto`.) Im Gegensatz dazu wird `:dir()` den vom [User Agent](/de/docs/Glossary/user_agent) berechneten Wert auswählen, selbst wenn er geerbt ist.

> [!NOTE]
> In HTML wird die Richtung durch das [`dir`](/de/docs/Web/HTML/Global_attributes#dir) Attribut bestimmt. Andere Dokumenttypen können unterschiedliche Methoden haben.

## Syntax

Die `:dir()` Pseudo-Klasse erfordert einen Parameter, der die gewünschte Textrichtung angibt.

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

- Sprachbezogene Pseudo-Klassen: {{cssxref(":lang")}}
- HTML [`lang`](/de/docs/Web/HTML/Global_attributes#lang) Attribut
- HTML [`translate`](/de/docs/Web/HTML/Global_attributes#translate) Attribut
