---
title: range
slug: Web/CSS/@counter-style/range
l10n:
  sourceCommit: 56de3bc3b3304ecc18775a1d0049ae4415c7cf51
---

{{CSSRef}}

Der **`range`** Deskriptor erlaubt es dem Autor, einen oder mehrere Bereiche von Zählerwerten festzulegen, auf die der Stil angewandt wird, wenn benutzerdefinierte Zählerstile mit der {{cssxref("@counter-style")}} Regel definiert werden. Wenn der `range` Deskriptor enthalten ist, wird der definierte Zähler nur für Werte innerhalb der festgelegten Bereiche verwendet. Liegt der Zählerwert außerhalb des angegebenen Bereichs, wird der Fallback-Stil verwendet, um die Darstellung dieses Markers zu konstruieren.

## Syntax

```css
/* Keyword value */
range: auto;

/* Range values */
range: 2 5;
range: infinite 10;
range: 6 infinite;
range: infinite infinite;

/* Multiple range values */
range:
  2 5,
  8 10;
range:
  infinite 6,
  10 infinite;
```

### Werte

Der Wert ist eine durch Kommas getrennte Liste von Bereichen, die jeweils ein unteres und oberes Limit oder das Schlüsselwort `auto` enthalten.

- `auto`

  - : Der gesamte Satz von Zahlen, der durch das Zählersystem {{cssxref("@counter-style/system","system")}} darstellbar ist. Diese Bereichswerte hängen vom Zählersystem ab:

    - Für `cyclic`, `numeric` und `fixed` Systeme reicht der Bereich von negativem `infinity` bis positivem `infinity`.
    - Für `alphabetic` und `symbolic` Systeme reicht der Bereich von `1` bis positivem `infinity`.
    - Für `additive` Systeme reicht der Bereich von `0` bis `positive` infinity.
    - Bei Verwendung von `extend`, um ein System zu erweitern, ist der Bereich das, was `auto` für das zu erweiternde System produzieren würde, einschließlich Erweiterungen komplexer vordefinierter Stile, wie einige japanische, koreanische, chinesische und äthiopische Zählerstile.

- `[ [ <integer> | infinite ]{2} ]#`
  - : Jeder Bereich innerhalb der durch Kommas getrennten Liste von Bereichen enthält zwei Werte, die jeweils entweder ein {{cssxref("integer")}} oder das Schlüsselwort `infinite` sind. Wenn `infinite` als erster Wert in einem Bereich verwendet wird, repräsentiert es negative Unendlichkeit; wenn es als zweiter Wert verwendet wird, repräsentiert es positive Unendlichkeit. Der erste Wert jedes Bereichs ist die untere Grenze des Bereichs und der zweite Wert ist die obere Grenze, einschließlich. Wenn die untere Grenze eines Bereichs in der Liste höher als die obere Grenze ist, ist der gesamte `range` Deskriptor ungültig und wird ignoriert.

## Beschreibung

Der Wert des `range` Deskriptors kann entweder `auto` sein oder eine durch Kommas getrennte Liste von unteren und oberen Grenzbereichen, die mit negativen oder positiven Ganzzahlen oder dem Schlüsselwort `infinite` angegeben werden.

### Verständnis von `auto`

Wenn der Wert auf `auto` gesetzt ist, ist der Bereich der Standardbereich für das Zählersystem. Wenn das `system` `cyclic`, `numeric` oder `fixed` ist, reicht der Bereich von negativer Unendlichkeit bis positiver Unendlichkeit. Wenn das `system` `alphabetic` oder `symbolic` ist, reicht der Bereich von `1` bis positive `infinity`. Für `system: additive` führt `auto` zu einem Bereich von `0` bis positiver `infinity`.

Beim Erweitern eines Zählers, wenn `range` auf `auto` gesetzt ist, wird der Bereichswert der des `system` des Zählers, der erweitert wird, nicht der `range` Wert, falls vorhanden, dieses Zählers. Beispiel: Wenn der Zähler "B" das `system: extends A` gesetzt hat, mit der Zählersystem ein `alphabetic` Zähler ist, das Setzen von `range: auto` auf "B" setzt den Bereich von "B" von `1` bis `infinity`. Dies ist der Bereich des `alphabetic` Systems und nicht notwendigerweise der im "A" Zählerstil-Definition festgelegte Bereich. Wenn `range: auto` auf "B" gesetzt ist, wird der `range` auf den Standardbereich des `alphabetic` Systems gesetzt und nicht auf den in der Deskriptorliste von Zähler A festgelegten `range` Wert.

### Erklärung von `infinite`

Wenn der Bereich als Ganzzahlen (im Gegensatz zu `auto`) angegeben wird, kann der Wert `infinite` verwendet werden, um Unendlichkeit zu kennzeichnen. Wenn _infinite_ als erster Wert in einem Bereich angegeben ist, wird es als negative Unendlichkeit interpretiert. Wenn es als obere Grenze, der zweite Wert im Bereichspaar, verwendet wird, wird es als positive Unendlichkeit angesehen.

### Liste von Bereichen

Der Wert von `range` ist entweder `auto`, wie oben besprochen, oder eine durch Kommas getrennte Liste von einem oder mehreren Bereichen. Der Bereich des Zählerstils ist die Vereinigung aller in der Liste definierten Bereiche.

Jeder Bereich in der Liste der Bereiche nimmt zwei Werte an. Diese Werte sind entweder ein {{cssxref("integer")}} oder das Schlüsselwort `infinite`. Der erste Wert ist die _untere Grenze_, einschließlich. Der zweite Wert ist die _obere Grenze_, einschließlich. Bei zwei Ganzzahlen muss der niedrigere Wert zuerst kommen. Wenn die untere Grenze eines Bereichs in der Liste höher ist als die obere Grenze, ist der gesamte `range` Deskriptor ungültig und wird ignoriert. Das Schlüsselwort `infinite` macht den Bereich nicht ungültig, da die Position von `infinite` seinen Wert bestimmt; entweder negative oder positive Unendlichkeit, abhängig davon, ob es die untere oder obere Grenze darstellt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Setzen des Zählerstils über einen Bereich

#### HTML

```html
<ul class="list">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
  <li>Six</li>
  <li>Seven</li>
  <li>Eight</li>
  <li>Nine</li>
  <li>Ten</li>
</ul>
```

#### CSS

```css
@counter-style range-multi-example {
  system: cyclic;
  symbols: "\25A0" "\25A1";
  range:
    2 4,
    7 9;
}

.list {
  list-style: range-multi-example;
}
```

#### Ergebnis

{{EmbedLiveSample('Setting counter style over a range')}}

Der erste Bereich ist die Liste von Bereichen umfasst 2, 3 und 4. Der zweite umfasst 7, 8 und 9. Der Bereich ist die Vereinigung dieser beiden Bereiche, also 2, 3, 4, 7, 8 und 9.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere {{cssxref("@counter-style")}} Deskriptoren: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}}, und {{cssxref("@counter-style/fallback", "fallback")}}
- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}: die funktionale Notation zur Erstellung anonymer Zählerstile.
- [CSS Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
- [CSS Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
