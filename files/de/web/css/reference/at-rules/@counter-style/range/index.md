---
title: range
slug: Web/CSS/Reference/At-rules/@counter-style/range
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Der **`range`** Deskriptor ermöglicht es dem Autor, einen oder mehrere Bereiche von Zählerwerten anzugeben, für die der Stil angewendet wird, wenn benutzerdefinierte Zählerstile mit dem {{cssxref("@counter-style")}} At-Regel definiert werden. Wenn der `range` Deskriptor enthalten ist, wird der definierte Zähler nur für Werte innerhalb der festgelegten Bereiche verwendet. Liegt der Zählerwert außerhalb des angegebenen Bereichs, wird der Fallback-Stil verwendet, um die Darstellung des Markers zu konstruieren.

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
  - : Die gesamte Menge der durch den Zähler darstellbaren Zahlen {{cssxref("@counter-style/system","system")}}. Diese Bereichswerte hängen vom Zählsystem ab:
    - Für `cyclic`, `numeric` und `fixed` Systeme reicht der Bereich von negativer `Unendlichkeit` bis positiver `Unendlichkeit`.
    - Für `alphabetic` und `symbolic` Systeme reicht der Bereich von `1` bis positive `Unendlichkeit`.
    - Für `additive` Systeme reicht der Bereich von `0` bis positive `Unendlichkeit`.
    - Bei der Verwendung von `extend`, um ein System zu erweitern, ist der Bereich das, was `auto` für das erweiterte System erzeugen würde, einschließlich Erweiterungen komplexer vordefinierter Stile, wie einige japanische, koreanische, chinesische und äthiopische Zählerstile.

- `[ [ <integer> | infinite ]{2} ]#`
  - : Jeder Bereich in der durch Kommas getrennten Liste von Bereichen umfasst zwei Werte, die entweder ein {{cssxref("integer")}} oder das Schlüsselwort `infinite` sind. Wenn `infinite` als erster Wert in einem Bereich verwendet wird, steht es für negative Unendlichkeit; wenn es als zweiter Wert verwendet wird, steht es für positive Unendlichkeit. Der erste Wert jedes Bereichs ist die untere Grenze für den Bereich und der zweite Wert ist die obere Grenze, inklusive. Wenn die untere Grenze eines Bereichs in der Liste höher ist als die obere Grenze, ist der gesamte `range` Deskriptor ungültig und wird ignoriert.

## Beschreibung

Der Wert des `range` Deskriptors kann entweder `auto` oder eine durch Kommas getrennte Liste von unteren und oberen Grenzbereichen sein, die mit negativen oder positiven Ganzzahlen oder dem Schlüsselwort `infinite` angegeben werden.

### Verständnis von `auto`

Wenn der Wert auf `auto` eingestellt ist, ist der Bereich der Standardbereich für das Zählsystem. Ist das `system` `cyclic`, `numeric` oder `fixed`, reicht der Bereich von negativer Unendlichkeit bis positiver Unendlichkeit. Ist das `system` `alphabetic` oder `symbolic`, reicht der Bereich von `1` bis positive `Unendlichkeit`. Für `system: additive` ergibt `auto` den Bereich von `0` bis positive `Unendlichkeit`.

Wenn ein Zähler erweitert wird, wird bei eingestelltem `range: auto` der Bereichswert der Bereich des `system` des erweiterten Zählers, nicht der `range` Wert, falls vorhanden, dieses Zählers. Wenn zum Beispiel der Zähler "B" das `system: extends A` hat, wobei der Zähler ein `alphabetic` Zähler ist, setzt `range: auto` auf "B" den Bereich von "B" von `1` bis `Unendlichkeit`. Dies ist der Bereich des `alphabetic` Systems, nicht unbedingt der Bereich, der in der "A" Zählerstildefinition festgelegt ist. Mit `range: auto` auf "B" wird der `range` auf den Standardbereich des `alphabetic` Systems gesetzt, nicht auf den `range` Wert, der in der Deskriptorliste des Zählers A festgelegt wurde.

### Erklärung von `infinite`

Wenn der Bereich als Ganzzahlen angegeben wird (im Gegensatz zu `auto`), kann der Wert `infinite` verwendet werden, um Unendlichkeit darzustellen. Wenn _infinite_ als erster Wert in einem Bereich angegeben wird, wird es als negative Unendlichkeit interpretiert. Wenn es als obere Grenze verwendet wird, also als zweiter Wert im Bereichspaar, wird es als positive Unendlichkeit betrachtet.

### Liste der Bereiche

Der Wert von `range` ist entweder `auto`, wie oben besprochen, oder eine durch Kommas getrennte Liste von einem oder mehreren Bereichen. Der Bereich des Zählerstils ist die Vereinigung aller in der Liste definierten Bereiche.

Jeder Bereich in der Bereichsliste nimmt zwei Werte an. Diese Werte sind entweder ein {{cssxref("integer")}} oder das Schlüsselwort `infinite`. Der erste Wert ist die _untere Grenze_, inklusive. Der zweite Wert ist die _obere Grenze_, inklusive. Bei zwei Ganzzahlenwerten muss der niedrigere Wert zuerst kommen. Wenn die untere Grenze eines Bereichs in der Liste höher ist als die obere Grenze, ist der gesamte `range` Deskriptor ungültig und wird ignoriert. Das Schlüsselwort `infinite` macht den Bereich nicht ungültig, da die Position von `infinite` seinen Wert bestimmt; entweder negative oder positive Unendlichkeit, abhängig davon, ob es die untere oder obere Grenze ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Zählerstil über einen Bereich einstellen

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
- {{cssxref("symbols()")}}: die funktionale Notation zur Erstellung anonymer Zählerstile.
- [CSS Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles) Modul
- [CSS Listen und Zähler](/de/docs/Web/CSS/Guides/Lists) Modul
