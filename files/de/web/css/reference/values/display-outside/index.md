---
title: "`<display-outside>` CSS-Typ"
short-title: <display-outside>
slug: Web/CSS/Reference/Values/display-outside
l10n:
  sourceCommit: c88e03530319b73272fd4f9a9f6ebe878f026004
---

Die `<display-outside>` Schlüsselwörter legen den äußeren {{CSSxRef("display")}}-Typ des Elements fest, was im Wesentlichen seine Rolle im Flusslayout ist. Diese Schlüsselwörter werden als Werte der `display`-Eigenschaft verwendet und können zum Erhalt der Kompatibilität als einzelnes Schlüsselwort oder wie in der Spezifikation der Stufe 3 definiert zusammen mit einem Wert aus den {{CSSxRef("&lt;display-inside&gt;")}}-Schlüsselwörtern verwendet werden.

## Syntax

Gültige `<display-outside>`-Werte:

- `block`
  - : Das Element erzeugt eine Block-Element-Box, die sowohl vor als auch nach dem Element im normalen Fluss Zeilenumbrüche erzeugt.
- `inline`
  - : Das Element erzeugt eine oder mehrere Inline-Element-Boxen, die keine Zeilenumbrüche vor oder nach sich generieren. Im normalen Fluss befindet sich das nächste Element in derselben Zeile, sofern Platz vorhanden ist.

> [!NOTE]
> Wenn Browser eine `display`-Eigenschaft mit nur einem **äußeren** `display`-Wert (z. B. `display: block` oder `display: inline`) erkennen, wird der innere Wert standardmäßig auf `flow` gesetzt (z. B. `display: block flow` und `display: inline flow`).
> Dies ist rückwärtskompatibel mit der Einzel-Schlüsselwort-Syntax.

## Formale Syntax

{{csssyntax}}

## Beispiele

Im folgenden Beispiel werden Span-Elemente (die normalerweise als Inline-Elemente angezeigt werden) auf `display: block` gesetzt und brechen so in neue Zeilen um und füllen in der Inline-Dimension ihren Container aus.

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
