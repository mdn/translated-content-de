---
title: counter()
slug: Web/CSS/counter
l10n:
  sourceCommit: 50c8e290f11b061bbf2267e1a3279f28180a5fcb
---

{{CSSRef}}

Die **`counter()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) gibt einen String zurück, der den aktuellen Wert des benannten Zählers darstellt, wenn es einen gibt.

Die `counter()`-Funktion wird im Allgemeinen innerhalb von [Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements) durch die {{cssxref("content")}}-Eigenschaft verwendet, kann theoretisch jedoch überall dort genutzt werden, wo ein [`<string>`](/de/docs/Web/CSS/string)-Wert unterstützt wird.

{{EmbedInteractiveExample("pages/tabbed/function-counter.html", "tabbed-shorter")}}

## Syntax

```css
/* Simple usage */
counter(counter-name);

/* changing the counter display */
counter(counter-name, upper-roman)
```

[Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) haben für sich genommen keine sichtbare Auswirkung. Die `counter()` und {{cssxref("counters", "counters()")}} Funktionen sind das, was Zähler nützlich macht, indem sie benutzerdefiniert definierte Zeichenfolgen (oder Bilder) zurückgeben.

### Werte

Die `counter()` Funktion akzeptiert bis zu zwei Parameter. Der erste Parameter ist der `<counter-name>`. Der optionale zweite Parameter ist der `<counter-style>`.

- `<counter-name>`
  - : Ein {{cssxref("&lt;custom-ident&gt;")}}, der den Zähler identifiziert. Dies ist der gleiche, auf Groß- und Kleinschreibung achtende Name, der mit den Eigenschaftswerten {{cssxref("counter-reset")}} und {{cssxref("counter-increment")}} verwendet wird. Der Zählername darf nicht mit zwei Bindestrichen beginnen und kann nicht `none`, `unset`, `initial` oder `inherit` sein.
- `<counter-style>`
  - : Ein {{cssxref("&lt;list-style-type&gt;")}} Name, {{cssxref("&lt;@counter-style&gt;")}} Name oder {{cssxref("symbols", "symbols()")}} Funktion, wobei ein Zählerstilname ein einfaches vordefiniertes numerisches, alphabetisches oder symbolisches Zählerstil ist, ein komplexer ausgeschriebener ostasiatischer oder äthiopischer vordefinierter Zählerstil oder ein anderer [vordefinierter Zählerstil](/de/docs/Web/CSS/CSS_counter_styles). Wenn weggelassen, wird der Zählerstil standardmäßig auf `decimal` gesetzt.

> [!NOTE]
> Um die Zählerwerte beim Verschachteln von Zählern zu verketten, verwenden Sie die {{cssxref("counters", "counters()")}} Funktion, die einen zusätzlichen {{cssxref("string")}} Parameter bereitstellt.

### Formale Syntax

{{CSSSyntax}}

## Beispiele

### lower-roman im Vergleich zu lower-alpha

In diesem Beispiel zeigen wir einen Zähler mit den Listentypen `lower-roman` und `lower-alpha` an.

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

### Anzeigen eines Zählers mit drei Stilen

In diesem Beispiel verwenden wir dreimal die `counter()` Funktion.

#### HTML

```html
<ol>
  <li></li>
  <li></li>
  <li></li>
</ol>
```

#### CSS

Wir fügen die `counter()`-Funktion mit drei verschiedenen Zählerstilen ein, einschließlich des Standardwerts `decimal`. Wir haben der Liste ein Padding hinzugefügt, um Platz für den langen `::marker`-String zu schaffen.

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

- [Verwendung von CSS-Zählern](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters)
- {{cssxref("counter-reset")}}
- {{cssxref("counter-set")}}
- {{cssxref("counter-increment")}}
- {{cssxref("@counter-style")}}
- CSS [`counters()`](/de/docs/Web/CSS/counters) Funktion
- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
- [CSS erzeugter Inhalt](/de/docs/Web/CSS/CSS_generated_content) Modul
