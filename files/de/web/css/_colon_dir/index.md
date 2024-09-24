---
title: ":dir()"
slug: Web/CSS/:dir
l10n:
  sourceCommit: 5026c14bd6d2b6b377289aadac7eceae9282e806
---

{{CSSRef}}

Die **`:dir()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wählt Elemente basierend auf der Textrichtung aus, die sie enthalten.

```css
/* Selects any element with right-to-left text */
:dir(rtl) {
  background-color: red;
}
```

Die `:dir()` Pseudoklasse benutzt nur den _semantischen_ Wert der Textrichtung, d.h. den im Dokument selbst definierten. Sie berücksichtigt nicht die _stilistische_ Textrichtung, also die Textrichtung, die durch CSS-Eigenschaften wie {{cssxref("direction")}} festgelegt ist.

> [!NOTE]
> Beachten Sie, dass das Verhalten der `:dir()` Pseudoklasse nicht äquivalent zu den `[dir=…]` [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) ist. Letztere wählen das HTML-Attribut [`dir`](/de/docs/Web/HTML/Global_attributes/dir) und ignorieren Elemente, denen es fehlt — selbst wenn sie eine Richtung von ihrem Elternteil erben. (Ähnlich werden `[dir=rtl]` und `[dir=ltr]` den Wert `auto` nicht erfassen.) Im Gegensatz dazu wird `:dir()` den vom {{Glossary("user_agent", "User-Agent")}} berechneten Wert erfassen, auch wenn er vererbt wurde.

> [!NOTE]
> In HTML wird die Richtung durch das [`dir`](/de/docs/Web/HTML/Global_attributes/dir) Attribut bestimmt. Andere Dokumenttypen können unterschiedliche Methoden haben.

## Syntax

Die `:dir()` Pseudoklasse benötigt einen Parameter, der die Textrichtung angibt, die Sie anvisieren möchten.

```css-nolint
:dir([ltr | rtl]) {
  /* ... */
}
```

### Parameter

- `ltr`
  - : Elemente mit Links-nach-Rechts-Richtung anvisieren.
- `rtl`
  - : Elemente mit Rechts-nach-Links-Richtung anvisieren.

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
- HTML [`lang`](/de/docs/Web/HTML/Global_attributes/lang) Attribut
- HTML [`translate`](/de/docs/Web/HTML/Global_attributes/translate) Attribut
