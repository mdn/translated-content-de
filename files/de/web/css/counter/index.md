---
title: counter()
slug: Web/CSS/counter
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`counter()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) gibt eine Zeichenkette zurück, die den aktuellen Wert des benannten Zählers darstellt, sofern ein solcher existiert.

Die Funktion `counter()` wird im Allgemeinen innerhalb von [Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements) über die {{cssxref("content")}}-Eigenschaft verwendet, kann theoretisch jedoch überall verwendet werden, wo ein [`<string>`](/de/docs/Web/CSS/string)-Wert unterstützt wird.

{{EmbedInteractiveExample("pages/tabbed/function-counter.html", "tabbed-shorter")}}

## Syntax

```css
/* Simple usage */
counter(countername);

/* changing the counter display */
counter(countername, upper-roman)
```

[Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) haben von selbst keine sichtbare Wirkung.
Die `counter()`- und {{cssxref("counters", "counters()")}}-Funktionen machen Zähler nützlich, indem sie vom Entwickler definierte Zeichenketten (oder Bilder) zurückgeben.

### Werte

Die Funktion `counter()` akzeptiert bis zu zwei Parameter. Der erste Parameter ist der `<counter-name>`. Der optionale zweite Parameter ist der `<counter-style>`.

- `<counter-name>`
  - : Ein {{cssxref("&lt;custom-ident&gt;")}}, der den Zähler identifiziert, mit demselben, auf Groß- und Kleinschreibung achtenden Namen, der auch für die Werte der Eigenschaften {{cssxref("counter-reset")}} und {{cssxref("counter-increment")}} verwendet wird. Der Zählername darf nicht mit zwei Bindestrichen beginnen und kann nicht `none`, `unset`, `initial` oder `inherit` sein.
- `<counter-style>`
  - : Ein {{cssxref("&lt;list-style-type&gt;")}} Name, {{cssxref("&lt;@counter-style&gt;")}} Name oder {{cssxref("symbols", "symbols()")}}-Funktion, wobei ein Zählerstil ein `numeric`, `alphabetic` oder `symbolic` einfacher vordefinierter Zählerstil, ein komplexer ausschreibender ostasiatischer oder äthiopischer vordefinierter Zählerstil oder ein anderer [vordefinierter Zählerstil](/de/docs/Web/CSS/CSS_counter_styles) ist. Wenn nicht angegeben, wird der `decimal` Zählerstil als Standard verwendet.

> [!NOTE]
> Um die Zählerwerte beim Verschachteln von Zählern zu verbinden, verwenden Sie die {{cssxref("counters", "counters()")}}-Funktion, die einen zusätzlichen {{cssxref("string")}}-Parameter bereitstellt.

### Formale Syntax

{{CSSSyntax}}

## Beispiele

### lower-roman im Vergleich zu lower-alpha

In diesem Beispiel zeigen wir einen Zähler unter Verwendung der `lower-roman`- und `lower-alpha`-Listenstile.

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

Wir integrieren die `counter()`-Funktion mit drei verschiedenen Zählerstilen, einschließlich des Standardwerts `decimal`. Wir haben der Liste Padding hinzugefügt, um Platz für die lange `::marker`-Zeichenkette zu schaffen.

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
- [CSS-generierte Inhalte](/de/docs/Web/CSS/CSS_generated_content) Modul
