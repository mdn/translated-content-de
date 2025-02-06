---
title: :dir()
slug: Web/CSS/:dir
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Die **`:dir()`**-Pseudo-Klasse ([CSS](/de/docs/Web/CSS)-[Pseudo-Klasse](/de/docs/Web/CSS/Pseudo-classes)) wählt Elemente basierend auf der Schreibrichtung des in ihnen enthaltenen Textes aus.

```css
/* Selects any element with right-to-left text */
:dir(rtl) {
  background-color: red;
}
```

Die Pseudo-Klasse `:dir()` nutzt ausschließlich den _semantischen_ Wert der Schreibrichtung, d. h. den im Dokument selbst definierten. Die durch CSS-Eigenschaften wie {{cssxref("direction")}} gesetzte _stilistische_ Schreibrichtung wird nicht berücksichtigt.

> [!NOTE]
> Beachten Sie, dass das Verhalten der `:dir()`-Pseudo-Klasse nicht dem der `[dir=…]`-[Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) entspricht. Letztere wählen das HTML-Attribut [`dir`](/de/docs/Web/HTML/Global_attributes/dir) aus und ignorieren Elemente, die dieses nicht enthalten – auch wenn sie eine Schreibrichtung von ihrem übergeordneten Element erben. (Ebenso stimmen `[dir=rtl]` und `[dir=ltr]` nicht mit dem `auto`-Wert überein.) Im Gegensatz dazu wird `:dir()` den von der {{Glossary("user_agent", "Benutzeragentin")}} berechneten Wert auswerten, auch wenn dieser geerbt wird.

> [!NOTE]
> In HTML wird die Schreibrichtung durch das Attribut [`dir`](/de/docs/Web/HTML/Global_attributes/dir) bestimmt. Andere Dokumenttypen können andere Methoden verwenden.

## Syntax

Die `:dir()`-Pseudo-Klasse erfordert einen Parameter, der die gewünschte Schreibrichtung beschreibt.

```css-nolint
:dir([ltr | rtl]) {
  /* ... */
}
```

### Parameter

- `ltr`
  - : Wählt Elemente mit links-nach-rechts-Schreibrichtung.
- `rtl`
  - : Wählt Elemente mit rechts-nach-links-Schreibrichtung.

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
- HTML-Attribut [`lang`](/de/docs/Web/HTML/Global_attributes/lang)
- HTML-Attribut [`translate`](/de/docs/Web/HTML/Global_attributes/translate)
