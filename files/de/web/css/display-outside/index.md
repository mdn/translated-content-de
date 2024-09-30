---
title: <display-outside>
slug: Web/CSS/display-outside
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die `<display-outside>` Schlüsselwörter geben den äußeren {{CSSxRef("display")}}-Typ eines Elements an, der im Wesentlichen seine Rolle im Fließlayout bestimmt. Diese Schlüsselwörter werden als Werte der `display` Eigenschaft verwendet und können für Legacy-Zwecke als einzelnes Schlüsselwort verwendet werden oder, wie in der Spezifikation der Stufe 3 definiert, zusammen mit einem Wert aus den {{CSSxRef("&lt;display-inside&gt;")}} Schlüsselwörtern.

## Syntax

Gültige `<display-outside>` Werte:

- `block`
  - : Das Element erzeugt ein Block-Element-Box, das sowohl vor als auch nach dem Element Zeilenumbrüche erzeugt, wenn es im normalen Fluss ist.
- `inline`
  - : Das Element erzeugt eine oder mehrere Inline-Element-Boxen, die keine Zeilenumbrüche vor oder nach sich selbst erzeugen. Im normalen Fluss wird das nächste Element auf derselben Zeile sein, wenn es Platz gibt.

> [!NOTE]
> Wenn Browser auf eine `display`-Eigenschaft mit nur einem **äußeren** `display`-Wert stoßen (z. B. `display: block` oder `display: inline`), wird der innere Wert standardmäßig auf `flow` gesetzt (z. B. `display: block flow` und `display: inline flow`).
> Dies ist rückwärtskompatibel mit der Einzel-Schlüsselwort-Syntax.

## Formale Syntax

{{csssyntax}}

## Beispiele

Im folgenden Beispiel werden `span`-Elemente (normalerweise als Inline-Elemente angezeigt) auf `display: block` gesetzt und brechen daher in neue Zeilen um und erweitern sich im Inline-Dimension, um ihren Container auszufüllen.

### HTML

```html
<span>span 1</span> <span>span 2</span>
```

### CSS

```css
span {
  display: block;
  border: 1px solid rebeccapurple;
}
```

### Ergebnis

{{EmbedLiveSample("Examples", 300, 60)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("display")}}

  - {{CSSxRef("&lt;display-inside&gt;")}}
  - {{CSSxRef("&lt;display-listitem&gt;")}}
  - {{CSSxRef("&lt;display-internal&gt;")}}
  - {{CSSxRef("&lt;display-box&gt;")}}
  - {{CSSxRef("&lt;display-legacy&gt;")}}

- [Block und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow)
- [Formatierungskontexte erklärt](/de/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts)
