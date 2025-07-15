---
title: counter()
slug: Web/CSS/counter
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`counter()`**-Funktion in [CSS](/de/docs/Web/CSS) gibt einen String zurück, der den aktuellen Wert des benannten Zählers darstellt, sofern ein solcher existiert.

Die `counter()`-Funktion wird generell innerhalb von [Pseudo-Elementen](/de/docs/Web/CSS/Pseudo-elements) durch die {{cssxref("content")}}-Eigenschaft verwendet, kann theoretisch aber überall dort genutzt werden, wo ein [`<string>`](/de/docs/Web/CSS/string)-Wert unterstützt wird.

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

[Zähler](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) haben von sich aus keine sichtbare Wirkung.
Die `counter()`- und {{cssxref("counters", "counters()")}}-Funktionen machen Zähler nützlich, indem sie benutzerdefinierte Strings (oder Bilder) zurückgeben.

### Werte

Die `counter()`-Funktion akzeptiert bis zu zwei Parameter. Der erste Parameter ist der `<counter-name>`. Der optionale zweite Parameter ist der `<counter-style>`.

- `<counter-name>`
  - : Ein {{cssxref("&lt;custom-ident&gt;")}}, der den Zähler identifiziert. Dies ist derselbe groß-/klein-schreibungssensitive Name, der mit den Eigenschaftswerten {{cssxref("counter-reset")}} und {{cssxref("counter-increment")}} verwendet wird. Der Zählername darf nicht mit zwei Bindestrichen beginnen und kann nicht `none`, `unset`, `initial` oder `inherit` sein.
- `<counter-style>`
  - : Ein {{cssxref("&lt;list-style-type&gt;")}}-Name, {{cssxref("&lt;@counter-style&gt;")}}-Name oder {{cssxref("symbols", "symbols()")}}-Funktion, wobei ein Zählerstil ein vordefinierter `numeric`, `alphabetic` oder `symbolic` Zählerstil, ein komplexes Langform-Ostasiatisches oder Äthiopisches vordefiniertes Zählerstil oder ein anderer [vordefinierter Zählerstil](/de/docs/Web/CSS/CSS_counter_styles) ist. Wenn weggelassen, wird der Zählerstil standardmäßig auf `decimal` gesetzt.

> [!NOTE]
> Um die Zählerwerte beim Verschachteln von Zählern zu verbinden, verwenden Sie die {{cssxref("counters", "counters()")}}-Funktion, die einen zusätzlichen {{cssxref("string")}}-Parameter bereitstellt.

## Formale Syntax

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

{{EmbedLiveSample("lower-roman im Vergleich zu lower-alpha", "100%", 150)}}

### Zähleranzeige mit drei Stilen

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

Wir fügen die `counter()`-Funktion mit drei verschiedenen Zählerstilen ein, einschließlich des Standardwerts `decimal`. Wir haben dem Absatz eine Auffüllung hinzugefügt, um Platz für die lange `::marker`-String zu bieten.

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

{{EmbedLiveSample("Zähleranzeige mit drei Stilen", "100%", 150)}}

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
