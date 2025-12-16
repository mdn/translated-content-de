---
title: counter()
slug: Web/CSS/Reference/Values/counter
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`counter()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) gibt einen String zurück, der den aktuellen Wert des benannten Zählers (Counter) darstellt, falls ein solcher vorhanden ist.

Die `counter()` Funktion wird üblicherweise innerhalb von [Pseudo-Elementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) durch die {{cssxref("content")}} Eigenschaft verwendet. Theoretisch kann sie jedoch überall dort eingesetzt werden, wo ein {{cssxref("string")}} Wert unterstützt wird.

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

[Zähler](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters) haben von sich aus keine sichtbare Wirkung. Die `counter()` und {{cssxref("counters()")}} Funktionen machen die Zähler nützlich, indem sie vom Entwickler definierte Strings (oder Bilder) zurückgeben.

### Werte

Die `counter()` Funktion akzeptiert bis zu zwei Parameter. Der erste Parameter ist der `<counter-name>`. Der optionale zweite Parameter ist der `<counter-style>`.

- `<counter-name>`
  - : Ein {{cssxref("&lt;custom-ident&gt;")}}, das den Zähler identifiziert. Dies ist der gleiche, fallunterscheidende Name, der mit den Eigenschaftswerten {{cssxref("counter-reset")}} und {{cssxref("counter-increment")}} verwendet wird. Der Zählername darf nicht mit zwei Strichen beginnen und darf nicht `none`, `unset`, `initial` oder `inherit` sein.
- `<counter-style>`
  - : Ein {{cssxref("&lt;list-style-type&gt;")}} Name, {{cssxref("&lt;@counter-style&gt;")}} Name oder {{cssxref("symbols()")}} Funktion, bei der ein Zählerstilname ein vordefinierter `numeric`, `alphabetic` oder `symbolic` Zählerstil ist, ein komplexer langschriftlicher ostasiatischer oder äthiopischer vordefinierter Zählerstil oder ein anderer [vordefinierter Zählerstil](/de/docs/Web/CSS/Guides/Counter_styles). Wenn ausgelassen, wird der Zählerstil standardmäßig auf `decimal` gesetzt.

> [!NOTE]
> Um die Zählerwerte beim Verschachteln von Zählern zu verbinden, verwenden Sie die {{cssxref("counters()")}} Funktion, die einen zusätzlichen {{cssxref("string")}} Parameter bereitstellt.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### lower-roman im Vergleich zu lower-alpha

In diesem Beispiel zeigen wir einen Zähler mit `lower-roman` und `lower-alpha` Listenstilen an.

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

In diesem Beispiel verwenden wir die `counter()` Funktion dreimal.

#### HTML

```html
<ol>
  <li></li>
  <li></li>
  <li></li>
</ol>
```

#### CSS

Wir integrieren die `counter()` Funktion mit drei verschiedenen Zählerstilen, einschließlich des Standardwerts `decimal`. Wir haben Padding zur Liste hinzugefügt, um Platz für den langen `::marker` String zu schaffen.

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

- [CSS-Zähler verwenden](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters)
- {{cssxref("counter-reset")}}
- {{cssxref("counter-set")}}
- {{cssxref("counter-increment")}}
- {{cssxref("@counter-style")}}
- CSS [`counters()`](/de/docs/Web/CSS/Reference/Values/counters) Funktion
- [CSS Listen und Zähler](/de/docs/Web/CSS/Guides/Lists) Modul
- [CSS Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles) Modul
- [CSS generierter Inhalt](/de/docs/Web/CSS/Guides/Generated_content) Modul
