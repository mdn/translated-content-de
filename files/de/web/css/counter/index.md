---
title: counter()
slug: Web/CSS/counter
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`counter()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) gibt eine Zeichenkette zurück, die den aktuellen Wert des benannten Zählers repräsentiert, sofern es einen gibt.

Die `counter()`-Funktion wird allgemein in [Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements) durch die {{cssxref("content")}}-Eigenschaft verwendet, kann jedoch theoretisch überall eingesetzt werden, wo ein [`<string>`](/de/docs/Web/CSS/string)-Wert unterstützt wird.

{{EmbedInteractiveExample("pages/tabbed/function-counter.html", "tabbed-shorter")}}

## Syntax

```css
/* Simple usage */
counter(countername);

/* changing the counter display */
counter(countername, upper-roman)
```

[Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) haben von sich aus keine sichtbare Wirkung.
Die `counter()`- und {{cssxref("counters", "counters()")}}-Funktionen machen Zähler nützlich, indem sie entwicklerdefinierte Zeichenketten (oder Bilder) zurückgeben.

### Werte

Die `counter()`-Funktion akzeptiert bis zu zwei Parameter. Der erste Parameter ist der `<counter-name>`. Der optionale zweite Parameter ist der `<counter-style>`.

- `<counter-name>`
  - : Ein {{cssxref("&lt;custom-ident&gt;")}}, der den Zähler identifiziert und der gleiche, groß- und kleinschreibungssensitive Name ist, der mit den Eigenschaftswerten {{cssxref("counter-reset")}} und {{cssxref("counter-increment")}} verwendet wird. Der Zählername darf nicht mit zwei Bindestrichen beginnen und darf nicht `none`, `unset`, `initial` oder `inherit` sein.
- `<counter-style>`
  - : Ein {{cssxref("&lt;list-style-type&gt;")}}-Name, {{cssxref("&lt;@counter-style&gt;")}}-Name oder {{cssxref("symbols", "symbols()")}}-Funktion, wobei ein Zählerstilname ein einfacher vordefinierter `numeric`, `alphabetic` oder `symbolic` Zählerstil, ein komplexer ausgeschriebener ostasiatischer oder äthiopischer vordefinierter Zählerstil oder ein anderer [vordefinierter Zählerstil](/de/docs/Web/CSS/CSS_counter_styles) ist. Wenn weggelassen, wird der Zählerstil standardmäßig auf `decimal` gesetzt.

> [!NOTE]
> Um die Zählerwerte beim Verschachteln von Zählern zu verknüpfen, verwenden Sie die {{cssxref("counters", "counters()")}}-Funktion, die einen zusätzlichen {{cssxref("string")}}-Parameter bereitstellt.

### Formale Syntax

{{CSSSyntax}}

## Beispiele

### lower-roman verglichen mit lower-alpha

In diesem Beispiel zeigen wir einen Zähler mit den `lower-roman`- und `lower-alpha`-Listenstilen an.

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

Wir fügen die `counter()`-Funktion mit drei verschiedenen Zählerstilen ein, einschließlich des standardmäßigen Dezimalwerts. Wir haben der Liste ein Padding hinzugefügt, um Platz für die lange `::marker`-Zeichenkette zu schaffen.

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
- [CSS generierter Inhalt](/de/docs/Web/CSS/CSS_generated_content) Modul
