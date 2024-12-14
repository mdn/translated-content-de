---
title: counter()
slug: Web/CSS/counter
l10n:
  sourceCommit: 5332af37c3d94913bf15b6aed87aaed2693f19d5
---

{{CSSRef}}

Die **`counter()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) gibt eine Zeichenkette zurück, die den aktuellen Wert des benannten Counters darstellt, falls vorhanden.

Die Funktion `counter()` wird in der Regel innerhalb von [Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements) durch die {{cssxref("content")}} Eigenschaft verwendet, aber theoretisch kann sie überall dort eingesetzt werden, wo ein [`<string>`](/de/docs/Web/CSS/string) Wert unterstützt wird.

{{EmbedInteractiveExample("pages/tabbed/function-counter.html", "tabbed-shorter")}}

## Syntax

```css
/* Basic usage */
counter(counter-name);

/* changing the counter display */
counter(counter-name, upper-roman)
```

[Counter](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) haben für sich genommen keine sichtbare Wirkung. Die `counter()` und {{cssxref("counters", "counters()")}} Funktionen machen Counter nützlich, indem sie entwicklerdefinierte Zeichenfolgen (oder Bilder) zurückgeben.

### Werte

Die `counter()` Funktion akzeptiert bis zu zwei Parameter. Der erste Parameter ist der `<counter-name>`. Der optionale zweite Parameter ist der `<counter-style>`.

- `<counter-name>`
  - : Ein {{cssxref("&lt;custom-ident&gt;")}}, der den Counter identifiziert, derselbe schreibweise-sensible Name, der mit den {{cssxref("counter-reset")}} und {{cssxref("counter-increment")}} Eigenschaftswerten verwendet wird. Der Counter-Name darf nicht mit zwei Bindestrichen beginnen und kann nicht `none`, `unset`, `initial` oder `inherit` sein.
- `<counter-style>`
  - : Ein {{cssxref("&lt;list-style-type&gt;")}} Name, {{cssxref("&lt;@counter-style&gt;")}} Name oder {{cssxref("symbols", "symbols()")}} Funktion, bei der ein Counter-Stil ein `numeric`, `alphabetic` oder `symbolic` einfacher vordefinierter Counter-Stil, ein komplexer Langstil ostasiatischer oder äthiopischer vordefinierter Counter-Stil oder ein anderer [vordefinierter Counter-Stil](/de/docs/Web/CSS/CSS_counter_styles) ist. Wenn weggelassen, ist der Counter-Stil standardmäßig `decimal`.

> [!NOTE]
> Um die Counter-Werte beim Verschachteln von Countern zu verbinden, verwenden Sie die {{cssxref("counters", "counters()")}} Funktion, die einen zusätzlichen {{cssxref("string")}} Parameter bereitstellt.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### lower-roman im Vergleich zu lower-alpha

In diesem Beispiel zeigen wir einen Counter mit den List-Stilen `lower-roman` und `lower-alpha`.

#### HTML

```html
<ol>
  <li></li>
  <li></li>
  <li></li>
</ol>
```

#### CSS

```css-nolint
ol {
  counter-reset: count;
}
li {
  counter-increment: count;
}
li::after {
  content:
    "[" counter(count, lower-roman) "] == ["
    counter(count, lower-alpha) "]";
}
```

#### Ergebnis

{{EmbedLiveSample("lower-roman compared to lower-alpha", "100%", 150)}}

### Anzeige eines Counters mit drei Stilen

In diesem Beispiel nutzen wir die `counter()` Funktion dreimal.

#### HTML

```html
<ol>
  <li></li>
  <li></li>
  <li></li>
</ol>
```

#### CSS

Wir verwenden die `counter()` Funktion mit drei verschiedenen Counter-Stilen, einschließlich des Standardwertes "decimal". Wir haben der Liste einen Abstand hinzugefügt, um Platz für die lange `::marker` Zeichenkette zu schaffen.

```css-nolint
ol {
  counter-reset: listCounter;
  padding-left: 5em;
}
li {
  counter-increment: listCounter;
}
li::marker {
  content:
    "Item #" counter(listCounter) " is: ";
}
li::after {
  content:
    "[" counter(listCounter, decimal-leading-zero) "] == ["
    counter(listCounter, upper-roman) "]";
}
```

#### Ergebnis

{{EmbedLiveSample("Displaying a counter using three styles", "100%", 150)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Countern](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)
- {{cssxref("counter-reset")}}
- {{cssxref("counter-set")}}
- {{cssxref("counter-increment")}}
- {{cssxref("@counter-style")}}
- CSS [`counters()`](/de/docs/Web/CSS/counters) Funktion
- [CSS Listen und Counter](/de/docs/Web/CSS/CSS_lists) Modul
- [CSS Counter-Stile](/de/docs/Web/CSS/CSS_counter_styles) Modul
- [CSS generierter Inhalt](/de/docs/Web/CSS/CSS_generated_content) Modul
