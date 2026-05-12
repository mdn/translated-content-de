---
title: "`counter()` CSS-Funktion"
short-title: counter()
slug: Web/CSS/Reference/Values/counter
l10n:
  sourceCommit: ddf85bfec1b6e43cdacb404de0c38a801c561640
---

Die **`counter()`** [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) gibt einen String zurück, der den aktuellen Wert des benannten Counters darstellt, falls vorhanden.

Die `counter()`-Funktion wird in der Regel innerhalb von [Pseudo-Elementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) über die {{cssxref("content")}}-Eigenschaft verwendet, kann theoretisch aber überall dort eingesetzt werden, wo ein {{cssxref("string")}}-Wert unterstützt wird.

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

[Counter](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters) haben für sich genommen keine sichtbaren Effekte.
Die `counter()`- und {{cssxref("counters()")}}-Funktionen machen Counter nützlich, indem sie Entwickler-definierte Strings (oder Bilder) zurückgeben.

### Werte

Die `counter()`-Funktion akzeptiert bis zu zwei Parameter. Der erste Parameter ist der `<counter-name>`. Der optionale zweite Parameter ist der `<counter-style>`.

- `<counter-name>`
  - : Ein {{cssxref("&lt;custom-ident&gt;")}}, der den Counter identifiziert, derselbe groß-/kleinschreibungssensitive Name, der mit den Eigenschaften {{cssxref("counter-reset")}} und {{cssxref("counter-increment")}} verwendet wird. Der Counter-Name darf nicht mit zwei Bindestrichen beginnen und kann nicht `none`, `unset`, `initial` oder `inherit` sein.
- `<counter-style>`
  - : Ein {{cssxref("list-style-type")}}-Name, {{cssxref("@counter-style#counter-style-name", "counter-style-name")}} oder {{cssxref("symbols()")}}-Funktion, wobei ein Counter-Stil-Name ein `numeric`, `alphabetic` oder `symbolic` vordefinierter Counter-Stil, ein komplexer Langschrift Ostasiatischer oder Äthiopischer vordefinierter Counter-Stil, oder ein anderer [vordefinierter Counter-Stil](/de/docs/Web/CSS/Guides/Counter_styles) ist. Wenn weggelassen, ist der Standard-Counter-Stil `decimal`.

> [!NOTE]
> Um die Counter-Werte beim Verschachteln von Countern zu verknüpfen, verwenden Sie die {{cssxref("counters()")}}-Funktion, die einen zusätzlichen {{cssxref("string")}}-Parameter bietet.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### lower-roman im Vergleich zu lower-alpha

In diesem Beispiel zeigen wir einen Counter mit den Listentilen `lower-roman` und `lower-alpha`.

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

Wir integrieren die `counter()`-Funktion mit drei verschiedenen Counter-Stilen, einschließlich des Standardwertes `decimal`. Wir haben der Liste Polsterung hinzugefügt, um Platz für den langen `::marker`-String zu schaffen.

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

- [Verwendung von CSS-Countern](/de/docs/Web/CSS/Guides/Counter_styles/Using_counters)
- {{cssxref("counter-reset")}}
- {{cssxref("counter-set")}}
- {{cssxref("counter-increment")}}
- {{cssxref("@counter-style")}}
- CSS-[`counters()`](/de/docs/Web/CSS/Reference/Values/counters)-Funktion
- [CSS Listen und Counter](/de/docs/Web/CSS/Guides/Lists)-Modul
- [CSS Counter-Stile](/de/docs/Web/CSS/Guides/Counter_styles)-Modul
- [CSS generierte Inhalte](/de/docs/Web/CSS/Guides/Generated_content)-Modul
