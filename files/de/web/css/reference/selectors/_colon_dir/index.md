---
title: :dir()
slug: Web/CSS/Reference/Selectors/:dir
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Die **`:dir()`** [CSS](/de/docs/Web/CSS) [Pseudo-Klasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) wählt Elemente basierend auf der Richtung des in ihnen enthaltenen Textes aus.

```css
/* Selects any element with right-to-left text */
:dir(rtl) {
  background-color: red;
}
```

Die `:dir()` Pseudo-Klasse verwendet nur den _semantischen_ Wert der Richtung, d.h., den im Dokument selbst definierten. Sie berücksichtigt nicht die _stilistische_ Richtung, d.h., die durch CSS-Eigenschaften wie {{cssxref("direction")}} festgelegte Richtung.

> [!NOTE]
> Beachten Sie, dass das Verhalten der `:dir()` Pseudo-Klasse nicht dem der `[dir=…]` [Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) entspricht. Letztere richten sich nach dem HTML-Attribut [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) und ignorieren Elemente, die es nicht haben—selbst wenn sie eine Richtung von ihrem übergeordneten Element erben. (Ebenso werden `[dir=rtl]` und `[dir=ltr]` nicht den `auto` Wert treffen.) Im Gegensatz dazu wird `:dir()` den vom {{Glossary("user_agent", "User Agent")}} berechneten Wert treffen, selbst wenn er geerbt wird.

> [!NOTE]
> In HTML wird die Richtung durch das [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) Attribut bestimmt. Andere Dokumenttypen können unterschiedliche Methoden haben.

## Syntax

```css-nolint
:dir([ltr | rtl]) {
  /* ... */
}
```

### Parameter

Die `:dir()` Pseudo-Klasse erfordert einen Parameter, der die Textausrichtung darstellt, die Sie anvisieren möchten.

- `ltr`
  - : Zielt auf Elemente mit Links-nach-Rechts-Ausrichtung.
- `rtl`
  - : Zielt auf Elemente mit Rechts-nach-Links-Ausrichtung.

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
- HTML [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) Attribut
- HTML [`translate`](/de/docs/Web/HTML/Reference/Global_attributes/translate) Attribut
