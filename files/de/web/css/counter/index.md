---
title: counter()
slug: Web/CSS/counter
l10n:
  sourceCommit: 33a12980eb49cc795a41f15ec7a0181270ad3048
---

{{CSSRef}}

Die **`counter()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) gibt eine Zeichenkette zurück, die den aktuellen Wert des benannten Zählers darstellt, falls vorhanden.

Die `counter()`-Funktion wird im Allgemeinen in [Pseudoelementen](/de/docs/Web/CSS/Pseudo-elements) über die {{cssxref("content")}}-Eigenschaft verwendet, kann theoretisch jedoch überall dort angewendet werden, wo ein [`<string>`](/de/docs/Web/CSS/string)-Wert unterstützt wird.

{{InteractiveExample("CSS Demo: counter()", "tabbed-shorter")}}

```css interactive-example
.double-list {
  counter-reset: count -1;
}

.double-list li {
  counter-increment: count 2;
}

.double-list li::marker {
  content: counter(count, decimal) ") ";
}
```

```html interactive-example
<p>Best Dynamic Duos in Sports:</p>
<ol class="double-list">
  <li>Simone Biles + Jonathan Owens</li>
  <li>Serena Williams + Venus Williams</li>
  <li>Aaron Judge + Giancarlo Stanton</li>
  <li>LeBron James + Dwyane Wade</li>
  <li>Xavi Hernandez + Andres Iniesta</li>
</ol>
```

## Syntax

```css
/* Basic usage */
counter(counter-name);

/* changing the counter display */
counter(counter-name, upper-roman)
```

[Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) haben alleine keine sichtbare Wirkung.
Die `counter()`- und {{cssxref("counters", "counters()")}}-Funktionen sind das, was Zähler nützlich macht, indem sie vom Entwickler definierte Zeichenketten (oder Bilder) zurückgeben.

### Werte

Die `counter()`-Funktion akzeptiert bis zu zwei Parameter. Der erste Parameter ist der `<counter-name>`. Der optionale zweite Parameter ist der `<counter-style>`.

- `<counter-name>`
  - : Ein {{cssxref("&lt;custom-ident&gt;")}}, der den Zähler identifiziert. Dies ist derselbe, auf Groß- und Kleinschreibung achtende Name, der mit den Eigenschaften {{cssxref("counter-reset")}} und {{cssxref("counter-increment")}} verwendet wird. Der Zählername darf nicht mit zwei Bindestrichen beginnen und kann nicht `none`, `unset`, `initial` oder `inherit` sein.
- `<counter-style>`
  - : Ein {{cssxref("&lt;list-style-type&gt;")}}-Name, {{cssxref("&lt;@counter-style&gt;")}}-Name oder {{cssxref("symbols", "symbols()")}}-Funktion, wobei ein Zählerstilname ein einfach vordefinierter numerischer, alphabetischer oder symbolischer Zählerstil ist, ein komplexer ausgeschriebener ostasiatischer oder äthiopischer vordefinierter Zählerstil, oder ein anderer [vordefinierter Zählerstil](/de/docs/Web/CSS/CSS_counter_styles). Wenn weggelassen, ist der Zählerstil standardmäßig `decimal`.

> [!NOTE]
> Um die Zählerwerte beim Verschachteln von Zählern zu verbinden, verwenden Sie die {{cssxref("counters", "counters()")}}-Funktion, die einen zusätzlichen {{cssxref("string")}}-Parameter bietet.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### lower-roman im Vergleich zu lower-alpha

In diesem Beispiel zeigen wir einen Zähler mit den `lower-roman`- und `lower-alpha`-Listentypen.

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

Wir inkludieren die `counter()`-Funktion mit drei verschiedenen Zählerstilen, einschließlich des standardmäßigen Dezimalwerts. Wir haben Padding zur Liste hinzugefügt, um Platz für die lange `::marker`-Zeichenkette zu schaffen.

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
- [CSS-generierter Inhalt](/de/docs/Web/CSS/CSS_generated_content) Modul
