---
title: <display-outside>
slug: Web/CSS/display-outside
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Die Schlüsselwörter `<display-outside>` geben den äußeren {{CSSxRef("display")}}-Typ des Elements an, der im Wesentlichen seine Rolle im Flusslayout bestimmt. Diese Schlüsselwörter werden als Werte der `display`-Eigenschaft verwendet und können für Legacy-Zwecke als einzelnes Schlüsselwort verwendet werden oder wie in der Level-3-Spezifikation definiert zusammen mit einem Wert aus den {{CSSxRef("&lt;display-inside&gt;")}}-Schlüsselwörtern.

## Syntax

Gültige `<display-outside>`-Werte:

- `block`
  - : Das Element erzeugt eine Blockelement-Box, die Zeilenumbrüche sowohl vor als auch nach dem Element im normalen Fluss erzeugt.
- `inline`
  - : Das Element erzeugt ein oder mehrere Inlineelement-Boxen, die keine Zeilenumbrüche vor oder nach sich selbst erzeugen. Im normalen Fluss wird das nächste Element auf derselben Linie sein, wenn Platz vorhanden ist.

> [!NOTE]
> Wenn Browser auf eine Display-Eigenschaft mit nur einem **äußeren** `display`-Wert stoßen (z.B. `display: block` oder `display: inline`), wird der innere Wert standardmäßig auf `flow` gesetzt (z.B. `display: block flow` und `display: inline flow`).
> Dies ist abwärtskompatibel mit der Einzel-Schlüsselwort-Syntax.

## Formale Syntax

{{csssyntax}}

## Beispiele

Im folgenden Beispiel sind Span-Elemente (normalerweise als Inline-Elemente dargestellt) auf `display: block` gesetzt, daher brechen sie in neue Zeilen um und dehnen sich in der Inline-Dimension aus, um ihren Container auszufüllen.

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

- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow)
- [Einführung in Formatierungskontexte](/de/docs/Web/CSS/CSS_display/Introduction_to_formatting_contexts)
