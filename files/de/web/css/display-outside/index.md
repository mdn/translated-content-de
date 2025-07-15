---
title: <display-outside>
slug: Web/CSS/display-outside
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die `<display-outside>` Schlüsselwörter geben den äußeren {{CSSxRef("display")}} Typ eines Elements an, der im Wesentlichen seine Rolle im Fließlayout beschreibt. Diese Schlüsselwörter werden als Werte der `display` Eigenschaft verwendet und können für Legacy-Zwecke als einzelnes Schlüsselwort verwendet werden oder wie in der Level-3-Spezifikation definiert, zusammen mit einem Wert aus den {{CSSxRef("&lt;display-inside&gt;")}} Schlüsselwörtern.

## Syntax

Gültige `<display-outside>` Werte:

- `block`
  - : Das Element erzeugt ein Blockelement-Box, das sowohl vor als auch nach dem Element Zeilenumbrüche im normalen Fluss erzeugt.
- `inline`
  - : Das Element erzeugt eine oder mehrere Inlineelement-Boxen, die vor oder nach sich selbst keine Zeilenumbrüche erzeugen. Im normalen Fluss wird das nächste Element in derselben Zeile sein, wenn ausreichend Platz vorhanden ist.

> [!NOTE]
> Wenn Browser auf eine Display-Eigenschaft mit nur einem **äußeren** `display` Wert stoßen (z.B. `display: block` oder `display: inline`), wird der innere Wert auf `flow` Voreingestellt (z.B. `display: block flow` und `display: inline flow`).
> Dies ist rückwärtskompatibel mit der Einzel-Schlüsselwort-Syntax.

## Formale Syntax

{{csssyntax}}

## Beispiele

Im folgenden Beispiel werden `span`-Elemente (normalerweise als Inlineelemente angezeigt) auf `display: block` gesetzt, wodurch sie in neue Zeilen umbrechen und sich im Inline-Dimensionsbereich ihres Containers ausweiten.

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

- [Block und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow)
- [Einführung in Formatierungskontexte](/de/docs/Web/CSS/CSS_display/Introduction_to_formatting_contexts)
