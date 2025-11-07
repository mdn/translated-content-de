---
title: counter()
slug: Web/CSS/Reference/Values/counter
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`counter()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) gibt einen String zurück, der den aktuellen Wert des benannten Counters darstellt, sofern ein solcher existiert.

Die `counter()` Funktion wird im Allgemeinen innerhalb von [Pseudo-Elementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) durch die {{cssxref("content")}} Eigenschaft verwendet, kann theoretisch jedoch überall dort eingesetzt werden, wo ein [`<string>`](/de/docs/Web/CSS/Reference/Values/string) Wert unterstützt wird.

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

[Counter](/de/docs/Web/CSS/CSS_counter_styles/Using_CSS_counters) haben für sich genommen keine sichtbare Auswirkung.
Die `counter()` und {{cssxref("counters", "counters()")}} Funktionen machen Counter dadurch nützlich, dass sie entwicklerdefinierte Strings (oder Bilder) zurückgeben.

### Werte

Die `counter()` Funktion akzeptiert bis zu zwei Parameter. Der erste Parameter ist der `<counter-name>`. Der optionale zweite Parameter ist der `<counter-style>`.

- `<counter-name>`
  - : Ein {{cssxref("&lt;custom-ident&gt;")}} zur Identifizierung des Counters, der denselben, auf Groß- und Kleinschreibung achtenden Namen verwendet, wie er auch bei den Eigenschaftswerten {{cssxref("counter-reset")}} und {{cssxref("counter-increment")}} benutzt wird. Der Countername darf nicht mit zwei Bindestrichen beginnen und kann nicht `none`, `unset`, `initial` oder `inherit` sein.
- `<counter-style>`
  - : Ein {{cssxref("&lt;list-style-type&gt;")}} Name, {{cssxref("&lt;@counter-style&gt;")}} Name oder {{cssxref("symbols", "symbols()")}} Funktion, wobei ein Counterstil ein vordefinierter `numerischer`, `alphabetischer` oder `symbolischer` Counterstil oder ein komplexer Langformstil für ostasiatische oder äthiopische Zählungen oder ein anderer [vordefinierter Counterstil](/de/docs/Web/CSS/CSS_counter_styles) ist. Wenn weggelassen, wird der Counter-Stil standardmäßig auf `decimal` gesetzt.

> [!NOTE]
> Um Counterwerte beim Verschachteln von Countern zu verbinden, verwenden Sie die {{cssxref("counters", "counters()")}} Funktion, die einen zusätzlichen {{cssxref("string")}} Parameter bereitstellt.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### lower-roman im Vergleich mit lower-alpha

In diesem Beispiel zeigen wir einen Counter mit den Listendarstellungen `lower-roman` und `lower-alpha`.

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

Wir nutzen die `counter()` Funktion mit drei verschiedenen Counter-Stilen, einschließlich des standardmäßigen Dezimalwerts. Wir haben Padding zur Liste hinzugefügt, um Platz für den langen `::marker` String zu schaffen.

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
- CSS [`counters()`](/de/docs/Web/CSS/Reference/Values/counters) Funktion
- [CSS Listen und Counter](/de/docs/Web/CSS/CSS_lists) Modul
- [CSS Counter-Stile](/de/docs/Web/CSS/CSS_counter_styles) Modul
- [CSS generierter Inhalt](/de/docs/Web/CSS/CSS_generated_content) Modul
