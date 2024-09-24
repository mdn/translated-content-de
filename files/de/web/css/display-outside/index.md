---
title: <display-outside>
slug: Web/CSS/display-outside
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die `<display-outside>` Schlüsselwörter spezifizieren den äußeren {{CSSxRef("display")}}-Typ eines Elements, der im Wesentlichen seine Rolle im Flusslayout bestimmt. Diese Schlüsselwörter werden als Werte der `display`-Eigenschaft verwendet und können für ältere Zwecke als einzelnes Schlüsselwort oder wie in der Level 3-Spezifikation definiert zusammen mit einem Wert aus den {{CSSxRef("&lt;display-inside&gt;")}} Schlüsselwörtern verwendet werden.

## Syntax

Gültige `<display-outside>` Werte:

- `block`
  - : Das Element erzeugt einen Blockelementkasten, der sowohl vor als auch nach dem Element Zeilenumbrüche im normalen Fluss erzeugt.
- `inline`
  - : Das Element erzeugt ein oder mehrere Inline-Elementkästen, die vor oder nach sich selbst keine Zeilenumbrüche erzeugen. Im normalen Fluss wird das nächste Element auf derselben Linie sein, wenn Platz vorhanden ist.

> [!NOTE]
> Wenn Browser eine Display-Eigenschaft mit nur einem **outer** `display`-Wert (z.B. `display: block` oder `display: inline`) entgegennehmen, wird der innere Wert standardmäßig auf `flow` gesetzt (z.B. `display: block flow` und `display: inline flow`).
> Dies ist abwärtskompatibel mit der Einzel-Schlüsselwort-Syntax.

## Formale Syntax

{{csssyntax}}

## Beispiele

Im folgenden Beispiel werden Spanelemente (normalerweise als Inline-Elemente angezeigt) auf `display: block` gesetzt und brechen daher auf neue Linien und erweitern sich, um ihre Container in der Inline-Dimension auszufüllen.

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

- [Block- und Inline-Layout im normalen Fluss](/de/docs/Web/CSS/CSS_flow_layout/Block_and_inline_layout_in_normal_flow)
- [Erklärung der Formatierungskontexte](/de/docs/Web/CSS/CSS_flow_layout/Introduction_to_formatting_contexts)
