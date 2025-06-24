---
title: range
slug: Web/CSS/@counter-style/range
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Der **`range`** Deskriptor ermöglicht es dem Autor, einen oder mehrere Bereiche von Zählerwerten festzulegen, für die der Stil angewendet wird, wenn benutzerdefinierte Zählerstile mit dem {{cssxref("@counter-style")}} Attribut definiert werden. Wenn der `range` Deskriptor enthalten ist, wird der definierte Zähler nur für Werte innerhalb der festgelegten Bereiche verwendet. Liegt der Zählerwert außerhalb des angegebenen Bereichs, wird der Fallback-Stil verwendet, um die Darstellung dieses Markers zu erstellen.

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

Der Wert ist eine kommagetrennte Liste von Bereichen, die jeweils ein unteres und oberes Limit oder das Schlüsselwort `auto` enthalten.

- `auto`

  - : Die gesamte Menge von Zahlen, die durch den Zähler {{cssxref("@counter-style/system","system")}} darstellbar sind. Diese Bereichswerte hängen vom Zählsystem ab:
    - Für `cyclic`, `numeric` und `fixed` Systeme reicht der Bereich von negativer `Unendlichkeit` bis positive `Unendlichkeit`.
    - Für `alphabetic` und `symbolic` Systeme reicht der Bereich von `1` bis positive `Unendlichkeit`.
    - Für `additive` Systeme reicht der Bereich von `0` bis positive `Unendlichkeit`.
    - Beim Verwenden von `extend`, um ein System zu erweitern, ist der Bereich der, den `auto` für das zu erweiternde System erzeugen würde, einschließlich Erweiterungen von komplexen vordefinierten Stilen wie einige japanische, koreanische, chinesische und äthiopische Zählerstile.

- `[ [ <integer> | infinite ]{2} ]#`
  - : Jeder Bereich innerhalb der kommagetrennten Liste von Bereichen enthält zwei Werte, die jeweils entweder ein {{cssxref("integer")}} oder das Schlüsselwort `infinite` sind. Wird `infinite` als erster Wert in einem Bereich verwendet, stellt es negative Unendlichkeit dar; wird es als zweiter Wert verwendet, repräsentiert es positive Unendlichkeit. Der erste Wert jedes Bereichs ist die untere Grenze für den Bereich und der zweite Wert ist die obere Grenze, einschließlich. Wenn die untere Grenze eines Bereichs in der Liste höher als die obere Grenze ist, ist der gesamte `range` Deskriptor ungültig und wird ignoriert.

## Beschreibung

Der Wert des `range` Deskriptors kann entweder `auto` oder eine kommagetrennte Liste von unteren und oberen Grenzbereichen sein, die durch negative oder positive Ganzzahlen oder das Schlüsselwort `infinite` angegeben werden.

### Verständnis von `auto`

Wenn der Wert auf `auto` gesetzt ist, ist der Bereich der Standardbereich für das Zählsystem. Wenn das `system` `cyclic`, `numeric` oder `fixed` ist, reicht der Bereich von negativer Unendlichkeit bis positive Unendlichkeit. Wenn das `system` `alphabetic` oder `symbolic` ist, reicht der Bereich von `1` bis positive `Unendlichkeit`. Für `system: additive` ergibt `auto` den Bereich `0` bis positive `Unendlichkeit`.

Beim Erweitern eines Zählers, wenn `range` auf `auto` gesetzt ist, wird der Bereichswert der Bereich des `system` des Zählers, das erweitert wird, nicht der `range`-Wert, falls vorhanden, dieses Zählers. Zum Beispiel, wenn Zähler "B" das `system: extends A` eingestellt hat, wobei Zähler ein `alphabetic` Zähler ist, wird durch Setzen von `range: auto` bei "B" der Bereich von "B" von `1` bis `Unendlichkeit` gesetzt. Dies ist der Bereich des `alphabetic` Systems, nicht unbedingt der Bereich, der in der "A" Zählerstildefinition festgelegt ist. Mit `range: auto` bei "B" gesetzt, wird der `range` auf den Standardbereich des `alphabetic` Systems gesetzt, nicht der im Deskriptorliste des Zählers A festgelegte `range`-Wert.

### Erklärung von `infinite`

Wenn der Bereich als Ganzzahlen spezifiziert wird (im Gegensatz zu `auto`), kann der Wert `infinite` verwendet werden, um Unendlichkeit zu bezeichnen. Wird _infinite_ als erster Wert in einem Bereich angegeben, wird es als negative Unendlichkeit interpretiert. Wird es als obere Grenze, also als zweiter Wert im Bereichspaar verwendet, wird es als positive Unendlichkeit betrachtet.

### Liste von Bereichen

Der Wert von `range` ist entweder `auto`, wie oben diskutiert, oder eine kommagetrennte Liste von einem oder mehreren Bereichen. Der Bereich des Zählerstils ist die Vereinigung aller in der Liste definierten Bereiche.

Jeder Bereich in der Liste von Bereichen hat zwei Werte. Diese Werte sind entweder ein {{cssxref("integer")}} oder das Schlüsselwort `infinite`. Der erste Wert ist die _untere Grenze_, einschließlich. Der zweite Wert ist die _obere Grenze_, einschließlich. Bei zwei Ganzzahlwerten muss der kleinere Wert zuerst kommen. Wenn die untere Grenze eines Bereichs in der Liste höher als die obere Grenze ist, ist der gesamte `range` Deskriptor ungültig und wird ignoriert. Das Schlüsselwort `infinite` wird den Bereich nicht ungültig machen, da die Position von `infinite` seinen Wert bestimmt; entweder negative oder positive Unendlichkeit, abhängig davon, ob es die untere oder obere Grenze ist.

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

Der erste Bereich in der Liste der Bereiche umfasst 2, 3 und 4. Der zweite umfasst 7, 8 und 9. Der Bereich ist die Vereinigung dieser beiden Bereiche, also 2, 3, 4, 7, 8 und 9.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere {{cssxref("@counter-style")}} Deskriptoren: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}} und {{cssxref("@counter-style/fallback", "fallback")}}
- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}: die Funktionalnotation zur Erstellung anonymer Zählerstile.
- [CSS Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
- [CSS Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
