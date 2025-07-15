---
title: :dir()
slug: Web/CSS/:dir
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`:dir()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) passt auf Elemente basierend auf der Textausrichtung, die in ihnen enthalten ist.

```css
/* Selects any element with right-to-left text */
:dir(rtl) {
  background-color: red;
}
```

Die `:dir()`-Pseudoklasse verwendet nur den _semantischen_ Wert der Richtung, d.h. denjenigen, der im Dokument selbst definiert ist. Sie berücksichtigt nicht die _stilistische_ Richtung, d.h. die durch CSS-Eigenschaften wie {{cssxref("direction")}} gesetzte Richtung.

> [!NOTE]
> Beachten Sie, dass das Verhalten der `:dir()`-Pseudoklasse nicht äquivalent zu den `[dir=…]` [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) ist. Letztere passen auf das HTML-Attribut [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) und ignorieren Elemente, die es nicht haben – selbst wenn sie eine Richtung von ihrem Elternteil erben. (Ähnlich werden `[dir=rtl]` und `[dir=ltr]` nicht den `auto`-Wert treffen.) Im Gegensatz dazu passt `:dir()` den vom {{Glossary("user_agent", "Benutzeragenten")}} berechneten Wert, selbst wenn er geerbt wurde.

> [!NOTE]
> In HTML wird die Richtung durch das [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir)-Attribut bestimmt. Andere Dokumenttypen können andere Methoden haben.

## Syntax

```css-nolint
:dir([ltr | rtl]) {
  /* ... */
}
```

### Parameter

Die `:dir()`-Pseudoklasse erfordert einen Parameter, der die gewünschte Textausrichtung angibt.

- `ltr`
  - : Ziel: von links nach rechts gerichtete Elemente.
- `rtl`
  - : Ziel: von rechts nach links gerichtete Elemente.

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
- HTML-Attribut [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang)
- HTML-Attribut [`translate`](/de/docs/Web/HTML/Reference/Global_attributes/translate)
