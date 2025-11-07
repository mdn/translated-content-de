---
title: <display-outside>
slug: Web/CSS/Reference/Values/display-outside
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die `<display-outside>`-Schlüsselwörter geben den äußeren {{CSSxRef("display")}}-Typ des Elements an, was im Wesentlichen seine Rolle im Flusslayout ist. Diese Schlüsselwörter werden als Werte der `display`-Eigenschaft verwendet und können aus Kompatibilitätsgründen als einzelnes Schlüsselwort oder wie in der Level-3-Spezifikation definiert zusammen mit einem Wert aus den {{CSSxRef("&lt;display-inside&gt;")}}-Schlüsselwörtern verwendet werden.

## Syntax

Gültige `<display-outside>`-Werte:

- `block`
  - : Das Element erzeugt eine Blockelementbox, die sowohl vor als auch nach dem Element im normalen Fluss Zeilenumbrüche erzeugt.
- `inline`
  - : Das Element erzeugt eine oder mehrere Inline-Elementboxen, die vor oder nach sich selbst keine Zeilenumbrüche erzeugen. Im normalen Fluss wird das nächste Element in der gleichen Zeile sein, wenn Platz vorhanden ist.

> [!NOTE]
> Wenn Browser auf eine `display`-Eigenschaft mit nur einem **äußeren** `display`-Wert treffen (z.B. `display: block` oder `display: inline`), wird der innere Wert standardmäßig auf `flow` gesetzt (z.B. `display: block flow` und `display: inline flow`).
> Dies ist rückwärtskompatibel mit der Syntax für ein Schlüsselwort.

## Formal syntax

{{csssyntax}}

## Beispiele

Im folgenden Beispiel werden Span-Elemente (normalerweise als Inline-Elemente angezeigt) auf `display: block` gesetzt, wodurch sie auf neue Zeilen brechen und sich im Inline-Dimension in ihrem Container ausdehnen.

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

- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/Guides/Display/Block_and_inline_layout)
- [Einführung in Formatierungskontexte](/de/docs/Web/CSS/Guides/Display/Formatting_contexts)
