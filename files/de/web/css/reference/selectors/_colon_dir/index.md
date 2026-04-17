---
title: "`:dir()` CSS-Pseudoklasse"
short-title: :dir()
slug: Web/CSS/Reference/Selectors/:dir
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

Die **`:dir()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) wählt Elemente basierend auf der Textausrichtung der in ihnen enthaltenen Texte aus.

```css
/* Selects any element with right-to-left text */
:dir(rtl) {
  background-color: red;
}
```

Die `:dir()`-Pseudoklasse nutzt nur den _semantischen_ Wert der Textausrichtung, d.h. den, der im Dokument selbst definiert ist. Sie berücksichtigt nicht die _stilistische_ Ausrichtung, also die Ausrichtung, die durch CSS-Eigenschaften wie {{cssxref("direction")}} festgelegt wird.

> [!NOTE]
> Beachten Sie, dass das Verhalten der `:dir()`-Pseudoklasse nicht dem der `[dir=…]` [Attributselektoren](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) entspricht. Letztere passen auf das HTML-Attribut [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) und ignorieren Elemente, die es nicht haben — selbst wenn sie eine Richtung von ihrem Elternteil erben. (Ähnlich werden `[dir=rtl]` und `[dir=ltr]` nicht mit dem `auto`-Wert übereinstimmen.) Im Gegensatz dazu wird `:dir()` den vom {{Glossary("user_agent", "User Agent")}} berechneten Wert erfassen, auch wenn er vererbt wurde.

> [!NOTE]
> In HTML wird die Richtung durch das Attribut [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) bestimmt. Andere Dokumenttypen könnten andere Methoden haben.

## Syntax

```css-nolint
:dir([ltr | rtl]) {
  /* ... */
}
```

### Parameter

Die `:dir()`-Pseudoklasse verlangt einen Parameter, der die Textausrichtung repräsentiert, die Sie anvisieren möchten.

- `ltr`
  - : Ziel für von links nach rechts ausgerichtete Elemente.
- `rtl`
  - : Ziel für von rechts nach links ausgerichtete Elemente.

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
