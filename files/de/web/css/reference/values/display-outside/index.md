---
title: <display-outside>
slug: Web/CSS/Reference/Values/display-outside
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die `<display-outside>` Schlüsselwörter bestimmen den äußeren {{CSSxRef("display")}}-Typ des Elements, was im Wesentlichen seine Rolle im Flusslayout definiert. Diese Schlüsselwörter werden als Werte der `display`-Eigenschaft verwendet und können aus Kompatibilitätsgründen als einzelnes Schlüsselwort oder, wie in der Spezifikation der Level 3 neben einem Wert aus den {{CSSxRef("&lt;display-inside&gt;")}}-Schlüsselwörtern, verwendet werden.

## Syntax

Gültige `<display-outside>` Werte:

- `block`
  - : Das Element erzeugt ein Blockelement-Box, das sowohl vor als auch nach dem Element Zeilenumbrüche generiert, wenn es im normalen Fluss ist.
- `inline`
  - : Das Element erzeugt eine oder mehrere Inline-Elementboxen, die vor oder nach sich selbst keine Zeilenumbrüche generieren. Im normalen Fluss wird das nächste Element auf derselben Zeile sein, falls Platz vorhanden ist.

> [!NOTE]
> Wenn Browser eine `display`-Eigenschaft mit nur einem **äußeren** `display`-Wert (z.B. `display: block` oder `display: inline`) vorfinden, wird der innere Wert auf `flow` voreingestellt (z.B. `display: block flow` und `display: inline flow`).
> Dies ist abwärtskompatibel mit der Eingabe eines Einzel-Schlüsselwortes.

## Formale Syntax

{{csssyntax}}

## Beispiele

Im folgenden Beispiel werden `span`-Elemente (die normalerweise als Inline-Elemente angezeigt werden) auf `display: block` gesetzt und brechen somit in neue Zeilen um und erweitern sich, um ihren Container in der Inline-Dimension auszufüllen.

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
