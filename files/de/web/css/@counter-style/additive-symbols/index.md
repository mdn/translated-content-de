---
title: additive-symbols
slug: Web/CSS/@counter-style/additive-symbols
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

Der **`additive-symbols`** Deskriptor der {{cssxref('@counter-style')}}-At-Regel wird verwendet, um Zählersymbole anzugeben, wenn der `@counter-style` {{cssxref('@counter-style/system', 'system')}}-Deskriptorwert auf `additive` gesetzt ist. Das additive System wird verwendet, um [Notationssysteme mit vorangestellten Symbolwerten](https://en.wikipedia.org/wiki/Sign-value_notation) wie römische Zahlen zu konstruieren.

## Syntax

```css
/* Single tuple */
additive-symbols: 3 "*";

/* Comma-separated list of tuples */
additive-symbols:
  3 "0",
  2 "\2E\20",
  1 url("symbol.png");

/* Binary counter */
additive-symbols:
  2 "1",
  1 "0";

/* Etruscan (a civilization in ancient Italy) counter  */
additive-symbols:
  100 "𐌟",
  50 "𐌣",
  10 "𐌢",
  5 "𐌡",
  1 "𐌠";
```

### Werte

Der Deskriptor akzeptiert eine kommagetrennte Liste von _additiven Tupeln_, wobei jedes Tupel aus den folgenden zwei durch ein Leerzeichen getrennten Werten besteht:

- {{cssxref("integer")}}
  - : Ein nicht-negativer ganzzahliger Wert, der das ganzzahlige Gewicht des zugehörigen Symbolwertes des Tupels angibt.

- [`<symbol>`](/de/docs/Web/CSS/@counter-style/symbols#symbol)
  - : Gibt das Zählersymbol an, das für den durch den zugehörigen `<integer>`-Gewichtswert des Tupels definierten Gewichtswert verwendet werden soll.

> [!NOTE]
> Die additiven Tupel müssen in absteigender Gewichtung angegeben werden; andernfalls ist die Deskriptor-Erklärung ungültig und wird ignoriert.

## Beschreibung

Der `additive-symbols` Deskriptor definiert eine kommagetrennte Liste von _additiven Tupeln_. Jedes _additive Tupel_ enthält einen durch Leerzeichen getrennten nicht-negativen Integer und ein Zählersymbol. Um gültig zu sein, muss die Liste in absteigender Reihenfolge der Ganzzahlen sein. Ganzzahl und Symbol werden zusammengefügt, um das Zählersymbol zu bilden.

Wenn der `system`-Deskriptorwert `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` ist, verwenden Sie den {{cssxref('symbols')}} Deskriptor anstelle von `additive-symbols`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Additive Symbole angeben

#### HTML

In diesem Beispiel geben {{cssxref("@counter-style/system","system: additive")}} zusammen mit den `additive-symbols` Deskriptorwerten an, wie Zahlen als römische Ziffern dargestellt werden sollen. Der Wert jedes {{HTMLElement("li")}}-Elements in der Liste wird gemäß den in {{cssxref("@counter-style")}} definierten Regeln in eine römische Zahl umgewandelt.

```html
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
  <li value="109">109</li>
  <li>110</li>
</ul>
```

#### CSS

```css
@counter-style uppercase-roman {
  system: additive;
  additive-symbols:
    1000 M,
    900 CM,
    500 D,
    400 CD,
    100 C,
    90 XC,
    50 L,
    40 XL,
    10 X,
    9 IX,
    5 V,
    4 IV,
    1 I;
}

ul {
  list-style: uppercase-roman;
  padding-left: 5em;
}
```

#### Ergebnis

{{ EmbedLiveSample('Specifying_additive_symbols') }}

Für das Listenelement mit dem Wert `109` stellt das Numeral `C` `100` dar, und `IX` stellt `9` dar. Dies erzeugt einen `CIX` Zähler für das Listenelement `109`. Das nächste Listenelement erhält automatisch den Wert `110`. Die römische Zahl `CX` wird aus `C` für `100` und `X` für `10` abgeleitet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@counter-style")}} Deskriptoren: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}}, {{cssxref("@counter-style/fallback", "fallback")}}
- Listeneigenschaften: {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}} Funktion zur Erstellung anonymer Zähler-Stile
- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
