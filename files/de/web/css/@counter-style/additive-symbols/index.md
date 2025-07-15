---
title: additive-symbols
slug: Web/CSS/@counter-style/additive-symbols
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`additive-symbols`** Deskriptor der {{cssxref('@counter-style')}} at-Regel wird verwendet, um Zählzeichen anzugeben, wenn der `@counter-style` {{cssxref('@counter-style/system', 'system')}} Deskriptorwert auf `additive` gesetzt ist. Das additive System wird verwendet, um [Sign-Wert-Nummerierungssysteme](https://en.wikipedia.org/wiki/Sign-value_notation) wie römische Zahlen zu konstruieren.

## Syntax

```css
/* Single tuple */
additive-symbols: 3 "*";

/* Comma-separated list of tuples */
additive-symbols:
  3 "0",
  2 "\2E\20",
  1 url(symbol.png);

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

Der Deskriptor akzeptiert eine durch Kommas getrennte Liste von _additive tuples_, wobei jedes Tupel aus den folgenden zwei Werten besteht, die durch ein Leerzeichen getrennt sind:

- {{cssxref("integer")}}
  - : Ein nicht-negativer Ganzzahlenwert, der das Gewicht des zugeordneten Symbolwerts des Tupels angibt.

- [`<symbol>`](/de/docs/Web/CSS/@counter-style/symbols#symbol)
  - : Gibt das Zählsymbol an, das für den durch den zugeordneten `<integer>`-Gewichtswert des Tupels definierten Gewichtswert verwendet werden soll.

> [!NOTE]
> Die additive Tupel müssen in absteigender Gewichtungsreihenfolge angegeben werden; andernfalls ist die Deskriptor-Deklaration ungültig und wird ignoriert.

## Beschreibung

Der `additive-symbols` Deskriptor definiert eine durch Kommas getrennte Liste von _additive tuples_. Jedes _additive tuple_ enthält eine durch Leerzeichen getrennte nicht-negative Ganzzahl und ein Zählsymbol. Um gültig zu sein, muss die Liste in absteigender Reihenfolge der Ganzzahlen sein. Die Ganzzahl und das Symbol werden zusammengefügt, um das Zählsymbol zu bilden.

Wenn der `system` Deskriptorwert `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` ist, verwenden Sie den {{cssxref('symbols')}} Deskriptor anstelle von `additive-symbols`.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Spezifikation additiver Symbole

#### HTML

In diesem Beispiel spezifizieren {{cssxref("@counter-style/system","system: additive")}} zusammen mit den `additive-symbols` Deskriptorwerten, wie Zahlen als römische Ziffern dargestellt werden sollen. Der Wert jedes {{HTMLElement("li")}} Elements in der Liste wird entsprechend den in {{cssxref("@counter-style")}} definierten Regeln in eine römische Ziffer umgewandelt.

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

Für das Listenelement mit dem Wert `109` repräsentiert die Zahl `C` `100` und `IX` repräsentiert `9`. Dies erzeugt `CIX` als Zähler für das Listenelement `109`. Das nächste Listenelement erhält automatisch den Wert `110`. Die römische Zahl `CX` wird von `C` für `100` und `X` für `10` abgeleitet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@counter-style")}} Deskriptoren: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}}, {{cssxref("@counter-style/fallback", "fallback")}}
- Listenstil-Eigenschaften: {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}} Funktion zum Erstellen anonymer Zählerstile
- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
