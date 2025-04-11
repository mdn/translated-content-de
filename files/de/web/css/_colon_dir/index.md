---
title: :dir()
slug: Web/CSS/:dir
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Die **`:dir()`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) wählt Elemente basierend auf der Richtung des in ihnen enthaltenen Textes aus.

```css
/* Selects any element with right-to-left text */
:dir(rtl) {
  background-color: red;
}
```

Die `:dir()` Pseudoklasse verwendet nur den _semantischen_ Wert der Richtung, d.h. den im Dokument selbst definierten. Sie berücksichtigt nicht die _stilistische_ Richtung, d.h. die durch CSS-Eigenschaften wie {{cssxref("direction")}} festgelegte Richtung.

> [!NOTE]
> Beachten Sie, dass das Verhalten der `:dir()` Pseudoklasse nicht dem der `[dir=…]` [Attributselektoren](/de/docs/Web/CSS/Attribute_selectors) entspricht. Letztere entsprechen dem HTML-Attribut [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) und ignorieren Elemente, die dieses fehlen — selbst wenn sie eine Richtung von ihrem übergeordneten Element erben. (Ähnlich werden `[dir=rtl]` und `[dir=ltr]` nicht den Wert `auto` ansprechen.) Im Gegensatz dazu wird `:dir()` den vom {{Glossary("user_agent", "Benutzeragenten")}} berechneten Wert ansprechen, selbst wenn dieser geerbt ist.

> [!NOTE]
> In HTML wird die Richtung durch das [`dir`](/de/docs/Web/HTML/Reference/Global_attributes/dir) Attribut bestimmt. Andere Dokumenttypen können unterschiedliche Methoden haben.

## Syntax

Die `:dir()` Pseudoklasse erfordert einen Parameter, der die Zielrichtung des Textes repräsentiert.

```css-nolint
:dir([ltr | rtl]) {
  /* ... */
}
```

### Parameter

- `ltr`
  - : Ziel sind Elemente von links nach rechts.
- `rtl`
  - : Ziel sind Elemente von rechts nach links.

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
