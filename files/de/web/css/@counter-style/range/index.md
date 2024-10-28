---
title: range
slug: Web/CSS/@counter-style/range
l10n:
  sourceCommit: c749deb4ccb647d792deee4807d4852104bedd9d
---

{{CSSRef}}

Der **`range`** Deskriptor erlaubt es dem Autor, einen oder mehrere Bereiche von Zählerwerten anzugeben, für die der Stil angewendet wird, wenn benutzerdefinierte Zählerstile mit der {{cssxref("@counter-style")}} At-Regel definiert werden. Wenn der `range` Deskriptor eingeschlossen wird, wird der definierte Zähler nur für Werte innerhalb der festgelegten Bereiche verwendet. Liegt der Zählerwert außerhalb des angegebenen Bereichs, wird der Ersatzstil verwendet, um die Darstellung dieses Markers zu konstruieren.

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

Der Wert ist eine durch Kommas getrennte Liste von Bereichen, die jeweils ein unteres und ein oberes Limit oder das Schlüsselwort `auto` enthalten.

- `auto`

  - : Die gesamte Menge an Zahlen, die durch das Zähler-{{cssxref("@counter-style/system","system")}} darstellbar ist. Diese Bereichswerte hängen vom Zählsystem ab:

    - Für `cyclic`, `numeric` und `fixed` Systeme reicht der Bereich von negativer `Unendlichkeit` bis zu positiver `Unendlichkeit`.
    - Für `alphabetic` und `symbolic` Systeme reicht der Bereich von `1` bis zu positiver `Unendlichkeit`.
    - Für `additive` Systeme reicht der Bereich von `0` bis zu positiver `Unendlichkeit`.
    - Wenn `extend` verwendet wird, um ein System zu erweitern, ist der Bereich das, was `auto` für das erweiterte System produzieren würde, einschließlich Erweiterungen komplexer vordefinierter Stile, wie einige japanische, koreanische, chinesische und äthiopische Zählerstile.

- `[ [ <integer> | infinite ]{2} ]#`
  - : Jeder Bereich innerhalb der durch Kommas getrennten Liste von Bereichen umfasst zwei Werte, die jeweils entweder ein {{cssxref("integer")}} oder das Schlüsselwort `infinite` sind. Wenn `infinite` als erster Wert in einem Bereich verwendet wird, repräsentiert es negative Unendlichkeit; wenn es als zweiter Wert verwendet wird, repräsentiert es positive Unendlichkeit. Der erste Wert jedes Bereichs ist die untere Grenze für den Bereich und der zweite Wert ist die obere Grenze, einschließlich. Wenn die untere Grenze eines Bereichs in der Liste höher als die obere Grenze ist, ist der gesamte `range` Deskriptor ungültig und wird ignoriert.

## Beschreibung

Der Wert des `range` Deskriptors kann entweder `auto` oder eine durch Kommas getrennte Liste von unteren und oberen Bereichsgrenzen sein, die durch negative oder positive Ganzzahlen oder das Schlüsselwort `infinite` spezifiziert werden.

### Verständnis von `auto`

Wenn der Wert auf `auto` gesetzt ist, ist der Bereich der Standardbereich für das Zählsystem. Wenn das `system` `cyclic`, `numeric` oder `fixed` ist, reicht der Bereich von negativer Unendlichkeit bis positiver Unendlichkeit. Wenn das `system` `alphabetic` oder `symbolic` ist, reicht der Bereich von `1` bis positive `Unendlichkeit`. Für `system: additive` führt `auto` zu einem Bereich von `0` bis positive `Unendlichkeit`.

Wenn ein Zähler erweitert wird, wird, wenn `range` auf `auto` gesetzt ist, der Bereichswert der Bereich des `system` des Zählers, der erweitert wird, nicht der `range` Wert, falls vorhanden, dieses Zählers. Beispielsweise, wenn der Zähler "B" das `system: extends A` gesetzt hat, wobei der Zähler ein `alphabetic` Zähler ist, setzt `range: auto` auf "B" den Bereich von "B" von `1` bis `Unendlichkeit`. Dies ist der Bereich des `alphabetic` Systems, nicht unbedingt der im Zählerstil "A" gesetzte Bereich. Mit `range: auto` auf "B" gesetzt, wird der `range` auf den Standardbereich des `alphabetic` Systems gesetzt, nicht auf den `range` Wert, der im Deskriptorliste des Zählers A festgelegt ist.

### Erklärung von `infinite`

Wenn der Bereich als Ganzzahlen angegeben wird (im Gegensatz zu `auto`), kann der Wert `infinite` verwendet werden, um Unendlichkeit zu kennzeichnen. Wenn _infinite_ als erster Wert in einem Bereich angegeben ist, wird er als negative Unendlichkeit interpretiert. Wenn er als obere Grenze, der zweite Wert im Bereichspaar, verwendet wird, wird er als positive Unendlichkeit betrachtet.

### Liste der Bereiche

Der Wert von `range` ist entweder `auto`, wie oben besprochen, oder eine durch Kommas getrennte Liste von einem oder mehreren Bereichen. Der Bereich des Zählerstils ist die Vereinigung aller in der Liste definierten Bereiche.

Jeder Bereich in der Liste der Bereiche nimmt zwei Werte an. Diese Werte sind entweder ein {{cssxref("integer")}} oder das Schlüsselwort `infinite`. Der erste Wert ist die _untere Grenze_, einschließlich. Der zweite Wert ist die _obere Grenze_, einschließlich. Bei zwei Ganzzahlen muss der niedrigere Wert zuerst kommen. Wenn die untere Grenze eines Bereichs in der Liste höher als die obere Grenze ist, ist der gesamte `range` Deskriptor ungültig und wird ignoriert. Das Schlüsselwort `infinite` macht den Bereich nicht ungültig, da die Position von `infinite` seinen Wert bestimmt; entweder negative oder positive Unendlichkeit basierend darauf, ob es die untere oder obere Grenze ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen des Zählerstils über einen Bereich

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

Der erste Bereich in der Liste der Bereiche umfasst 2, 3 und 4. Der zweite umfasst 7, 8 und 9. Der Bereich ist die Vereinigung dieser beiden Bereiche, oder 2, 3, 4, 7, 8 und 9.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere {{cssxref("@counter-style")}} Deskriptoren: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}} und {{cssxref("@counter-style/fallback", "fallback")}}
- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}: die funktionale Notation zur Erstellung anonymer Zählerstile.
- [CSS counter styles](/de/docs/Web/CSS/CSS_counter_styles) Modul
- [CSS lists and counters](/de/docs/Web/CSS/CSS_lists) Modul
