---
title: <display-outside>
slug: Web/CSS/display-outside
l10n:
  sourceCommit: b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

{{CSSRef}}

Die `<display-outside>`-Schlüsselwörter spezifizieren den äußeren Typ der {{CSSxRef("display")}}-Eigenschaft eines Elements, was im Wesentlichen dessen Rolle im Flusslayout beschreibt. Diese Schlüsselwörter werden als Werte der `display`-Eigenschaft verwendet und können aus Kompatibilitätsgründen als einzelnes Schlüsselwort oder gemäß der Level-3-Spezifikation zusammen mit einem Wert aus den {{CSSxRef("&lt;display-inside&gt;")}}-Schlüsselwörtern definiert werden.

## Syntax

Gültige `<display-outside>`-Werte:

- `block`
  - : Das Element erzeugt ein Blockelement-Kasten, wodurch sowohl vor als auch nach dem Element in normalem Fluss Zeilenumbrüche generiert werden.
- `inline`
  - : Das Element erzeugt einen oder mehrere Inlineelement-Kästen, die keine Zeilenumbrüche vor oder nach sich selbst erzeugen. Im normalen Fluss wird das nächste Element, sofern Platz vorhanden ist, in derselben Zeile angezeigt.

> [!NOTE]
> Wenn Browser auf eine `display`-Eigenschaft mit nur einem **äußeren** `display`-Wert stoßen (z. B. `display: block` oder `display: inline`), wird der innere Wert standardmäßig auf `flow` gesetzt (z. B. `display: block flow` und `display: inline flow`).
> Dies ist rückwärtskompatibel mit der Syntax mit einem Schlüsselwort.

## Formale Syntax

{{csssyntax}}

## Beispiele

Im folgenden Beispiel werden `span`-Elemente (normalerweise als Inline-Elemente angezeigt) auf `display: block` gesetzt. Dadurch werden sie auf neuen Zeilen dargestellt und dehnen sich in der Inline-Dimension so weit wie möglich aus, um ihren Container auszufüllen.

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
