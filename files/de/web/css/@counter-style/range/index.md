---
title: range
slug: Web/CSS/@counter-style/range
l10n:
  sourceCommit: 56de3bc3b3304ecc18775a1d0049ae4415c7cf51
---

{{CSSRef}}

Der **`range`** Deskriptor ermöglicht es dem Autor, einen oder mehrere Bereiche von Zählerwerten anzugeben, für die der Stil angewendet wird, wenn benutzerdefinierte Zählerstile mit dem {{cssxref("@counter-style")}} At-Regel definiert werden. Wenn der `range` Deskriptor eingeschlossen ist, wird der definierte Zähler nur für Werte in den festgelegten Bereichen verwendet. Befindet sich der Zählerwert außerhalb des angegebenen Bereichs, wird der Fallback-Stil verwendet, um die Darstellung dieses Markers zu konstruieren.

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

  - : Der gesamte durch den Zähler {{cssxref("@counter-style/system","system")}} darstellbare Zahlenbereich. Diese Bereichswerte hängen vom Zählsystem ab:

    - Für `cyclic`, `numeric` und `fixed` Systeme reicht der Bereich von negativer `Unendlichkeit` bis positive `Unendlichkeit`.
    - Für `alphabetic` und `symbolic` Systeme reicht der Bereich von `1` bis positive `Unendlichkeit`.
    - Für `additive` Systeme reicht der Bereich von `0` bis positive `Unendlichkeit`.
    - Bei Verwendung von `extend`, um ein System zu erweitern, ist der Bereich das, was `auto` für das zu erweiternde System erzeugen würde, einschließlich Erweiterungen komplexer vordefinierter Stile, wie einige japanische, koreanische, chinesische und äthiopische Zählerstile.

- `[ [ <integer> | infinite ]{2} ]#`
  - : Jeder Bereich in der durch Kommas getrennten Liste von Bereichen enthält zwei Werte, die jeweils entweder eine {{cssxref("integer")}} oder das Schlüsselwort `infinite` sind. Wenn `infinite` als erster Wert in einem Bereich verwendet wird, stellt es negative Unendlichkeit dar; wenn es als zweiter Wert verwendet wird, stellt es positive Unendlichkeit dar. Der erste Wert jedes Bereichs ist die untere Grenze für den Bereich und der zweite Wert ist die obere Grenze, einschließlich. Wenn die untere Grenze eines Bereichs in der Liste größer als die obere Grenze ist, ist der gesamte `range` Deskriptor ungültig und wird ignoriert.

## Beschreibung

Der Wert des `range` Deskriptors kann entweder `auto` oder eine durch Kommas getrennte Liste von unteren und oberen Bereichsgrenzen sein, die mit negativen oder positiven Ganzzahlen oder dem Schlüsselwort `infinite` angegeben werden.

### Verständnis von `auto`

Wenn der Wert auf `auto` gesetzt ist, ist der Bereich der Standardbereich für das Zählsystem. Wenn das `System` `cyclic`, `numeric` oder `fixed` ist, reicht der Bereich von negativer bis positiver Unendlichkeit. Wenn das `System` `alphabetic` oder `symbolic` ist, reicht der Bereich von `1` bis positive `Unendlichkeit`. Für `system: additive` ergibt `auto` den Bereich von `0` bis positive `Unendlichkeit`.

Beim Erweitern eines Zählers, wenn `range` auf `auto` gesetzt ist, wird der Bereichswert der Bereich des `system` des Zählers, der erweitert wird, nicht der `range` Wert, falls vorhanden, dieses Zählers. Wenn beispielsweise der Zähler "B" das `system: extends A` gesetzt hat, wobei der Zähler ein `alphabetische` Zähler ist, setzt `range: auto` auf "B" den Bereich von "B" von `1` bis `Unendlichkeit`. Dies ist der Bereich des `alphabetische` Systems, nicht notwendigerweise der Bereich, der in der Definition des Zählerstils "A" festgelegt ist. Mit `range: auto` auf "B" ist der `range` auf den Standardbereich des `alphabetische` Systems gesetzt, nicht auf den `range` Wert, der in der Attributliste des Zählers A angegeben ist.

### Erklärung von `infinite`

Wenn der Bereich als Ganzzahlen spezifiziert ist (im Gegensatz zu `auto`), kann der Wert `infinite` zur Darstellung der Unendlichkeit verwendet werden. Wenn `infinite` als erster Wert in einem Bereich angegeben ist, wird es als negative Unendlichkeit interpretiert. Wenn es als obere Grenze, der zweite Wert im Bereichspaar, verwendet wird, wird es als positive Unendlichkeit angesehen.

### Liste der Bereiche

Der Wert von `range` ist entweder `auto`, wie oben beschrieben, oder eine durch Kommas getrennte Liste von ein oder mehreren Bereichen. Der Bereich des Zählerstils ist die Vereinigung aller in der Liste definierten Bereiche.

Jeder Bereich in der Liste der Bereiche nimmt zwei Werte an. Diese Werte sind entweder eine {{cssxref("integer")}} oder das Schlüsselwort `infinite`. Der erste Wert ist die _untere Grenze_, einschließlich. Der zweite Wert ist die _obere Grenze_, einschließlich. Bei zwei Ganzzahlen muss der niedrigere Wert zuerst kommen. Wenn die untere Grenze eines Bereichs in der Liste größer als die obere Grenze ist, ist der gesamte `range` Deskriptor ungültig und wird ignoriert. Das Schlüsselwort `infinite` macht den Bereich nicht ungültig, da die Position von `infinite` dessen Wert bestimmt; entweder negative oder positive Unendlichkeit, je nachdem ob es die untere oder obere Grenze ist.

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

Der erste Bereich in der Liste der Bereiche umfasst 2, 3 und 4. Der zweite umfasst 7, 8 und 9. Der Bereich ist die Vereinigung dieser beiden Bereiche, also 2, 3, 4, 7, 8 und 9.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere {{cssxref("@counter-style")}} Deskriptoren: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}}, und {{cssxref("@counter-style/fallback", "fallback")}}
- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}: die funktionale Notation zur Erstellung anonymer Zählerstile.
- [CSS Counter Styles](/de/docs/Web/CSS/CSS_counter_styles) Modul
- [CSS Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
