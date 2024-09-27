---
title: <display-outside>
slug: Web/CSS/display-outside
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die `<display-outside>` Schlüsselwörter spezifizieren den äußeren {{CSSxRef("display")}} Typ eines Elements, was im Wesentlichen seine Rolle im Flusslayout ist. Diese Schlüsselwörter werden als Werte der `display` Eigenschaft verwendet und können zu Legacy-Zwecken als einzelnes Schlüsselwort verwendet werden, oder wie in der Level 3 Spezifikation definiert, zusammen mit einem Wert aus den {{CSSxRef("&lt;display-inside&gt;")}} Schlüsselwörtern.

## Syntax

Gültige `<display-outside>` Werte:

- `block`
  - : Das Element erzeugt eine Blockelement-Box, die sowohl vor als auch nach dem Element Zeilenumbrüche generiert, wenn es sich im normalen Fluss befindet.
- `inline`
  - : Das Element erzeugt eine oder mehrere Inline-Element-Boxen, die selbst keine Zeilenumbrüche vor oder nach sich generieren. Im normalen Fluss befindet sich das nächste Element auf derselben Zeile, wenn Platz vorhanden ist.

> [!NOTE]
> Wenn Browser auf eine `display` Eigenschaft mit nur einem **äußeren** `display` Wert stoßen (z.B. `display: block` oder `display: inline`), standardmäßig wird der innere Wert zu `flow` (z.B. `display: block flow` und `display: inline flow`).
> Dies ist rückwärtskompatibel mit der Ein-Schlüsselwort-Syntax.

## Formale Syntax

{{csssyntax}}

## Beispiele

Im folgenden Beispiel werden span Elemente (normalerweise als Inline-Elemente angezeigt) auf `display: block` gesetzt und brechen somit in neue Zeilen um und erweitern sich, um ihren Container in der Inline-Dimension zu füllen.

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

- [Block- und Inline-Layout im Normalfluss](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow)
- [Formatierungs-Kontexte erklärt](/de/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts)
