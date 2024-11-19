---
title: counter()
slug: Web/CSS/counter
l10n:
  sourceCommit: 919d97a4bda8004f63f655d3f9576c27a82c8a2a
---

{{CSSRef}}

Die **`counter()`**- [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) gibt einen String zurück, der den aktuellen Wert des benannten Zählers darstellt, sofern ein solcher existiert.

Die `counter()`-Funktion wird im Allgemeinen innerhalb von [Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements) durch die {{cssxref("content")}}-Eigenschaft verwendet, theoretisch kann sie jedoch überall verwendet werden, wo ein [`<string>`](/de/docs/Web/CSS/string)-Wert unterstützt wird.

{{EmbedInteractiveExample("pages/tabbed/function-counter.html", "tabbed-shorter")}}

## Syntax

```css
/* Basic usage */
counter(counter-name);

/* changing the counter display */
counter(counter-name, upper-roman)
```

[Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) haben selbst keine sichtbare Wirkung. Die `counter()`- und {{cssxref("counters", "counters()")}}-Funktionen machen Zähler nützlich, indem sie von Entwicklern definierte Strings (oder Bilder) zurückgeben.

### Werte

Die `counter()`-Funktion akzeptiert bis zu zwei Parameter. Der erste Parameter ist der `<counter-name>`. Der optionale zweite Parameter ist der `<counter-style>`.

- `<counter-name>`
  - : Ein {{cssxref("&lt;custom-ident&gt;")}}, der den Zähler identifiziert und derselbe case-sensitive Name ist, wie er mit den Eigenschaftswerten {{cssxref("counter-reset")}} und {{cssxref("counter-increment")}} verwendet wird. Der Zählername darf nicht mit zwei Bindestrichen beginnen und kann nicht `none`, `unset`, `initial` oder `inherit` sein.
- `<counter-style>`
  - : Ein {{cssxref("&lt;list-style-type&gt;")}}-Name, {{cssxref("&lt;@counter-style&gt;")}}-Name oder {{cssxref("symbols", "symbols()")}}-Funktion, wobei ein Zählerstilname ein `numeric`, `alphabetic` oder `symbolic` einfacher vordefinierter Zählerstil, ein komplexer ausführlicher ostasiatischer oder äthiopischer vordefinierter Zählerstil oder ein anderer [vordefinierter Zählerstil](/de/docs/Web/CSS/CSS_counter_styles) ist. Wenn weggelassen, ist der Standardzählerstil `decimal`.

> [!NOTE]
> Um die Zählerwerte beim Verschachteln von Zählern zu verbinden, verwenden Sie die {{cssxref("counters", "counters()")}}-Funktion, die einen zusätzlichen {{cssxref("string")}}-Parameter bereitstellt.

### Formale Syntax

{{CSSSyntax}}

## Beispiele

### lower-roman verglichen mit lower-alpha

In diesem Beispiel zeigen wir einen Zähler mit den Listengrundsätzen `lower-roman` und `lower-alpha`.

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

{{EmbedLiveSample("lower-roman verglichen mit lower-alpha", "100%", 150)}}

### Anzeige eines Zählers mit drei Stilen

In diesem Beispiel verwenden wir die `counter()`-Funktion dreimal.

#### HTML

```html
<ol>
  <li></li>
  <li></li>
  <li></li>
</ol>
```

#### CSS

Wir fügen die `counter()`-Funktion mit drei verschiedenen Zählerstilen ein, einschließlich des Standardwerts decimal. Wir haben Padding zur Liste hinzugefügt, um Platz für den langen `::marker`-String zu schaffen.

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

{{EmbedLiveSample("Anzeige eines Zählers mit drei Stilen", "100%", 150)}}

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
- [CSS generierter Inhalt](/de/docs/Web/CSS/CSS_generated_content) Modul
