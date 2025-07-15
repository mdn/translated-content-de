---
title: range
slug: Web/CSS/@counter-style/range
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`range`** Deskriptor ermöglicht es dem Autor, einen oder mehrere Bereiche von Zählerwerten anzugeben, für die der Stil angewendet wird, wenn benutzerdefinierte Zählerstile mit der {{cssxref("@counter-style")}} At-Regel definiert werden. Wenn der `range` Deskriptor enthalten ist, wird der definierte Zähler nur für Werte in den festgelegten Bereichen verwendet. Liegt der Zählerwert außerhalb des angegebenen Bereichs, wird der Fallback-Stil verwendet, um die Darstellung dieses Markers zu erstellen.

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
  - : Der gesamte Bereich von Zahlen, die vom {{cssxref("@counter-style/system","system")}} des Zählers darstellbar sind. Diese Wertebereiche hängen vom Zählsystem ab:
    - Für `cyclic`, `numeric` und `fixed` Systeme reicht der Bereich von negativ `unendlich` bis positiv `unendlich`.
    - Für `alphabetic` und `symbolic` Systeme reicht der Bereich von `1` bis positiv `unendlich`.
    - Für `additive` Systeme reicht der Bereich von `0` bis positiv `unendlich`.
    - Bei der Verwendung von `extend`, um ein System zu erweitern, ist der Bereich das, was `auto` für das erweiterte System erzeugen würde, einschließlich der Erweiterungen komplexer vordefinierter Stile, wie bei einigen japanischen, koreanischen, chinesischen und äthiopischen Zählerstilen.

- `[ [ <integer> | infinite ]{2} ]#`
  - : Jeder Bereich innerhalb der kommagetrennten Liste von Bereichen umfasst zwei Werte, die entweder ein {{cssxref("integer")}} oder das Schlüsselwort `infinite` sind. Wenn `infinite` als erster Wert in einem Bereich verwendet wird, steht es für negative Unendlichkeit; wenn es als zweiter Wert verwendet wird, steht es für positive Unendlichkeit. Der erste Wert jedes Bereichs ist die untere Grenze des Bereichs und der zweite Wert ist die obere Grenze, einschließlich. Wenn die untere Grenze eines beliebigen Bereichs in der Liste höher als die obere Grenze ist, ist der gesamte `range` Deskriptor ungültig und wird ignoriert.

## Beschreibung

Der Wert des `range` Deskriptors kann entweder `auto` oder eine kommagetrennte Liste von unteren und oberen Grenzbereichen sein, die mit negativen oder positiven Ganzzahlen oder dem Schlüsselwort `infinite` angegeben sind.

### Verständnis von `auto`

Wenn der Wert auf `auto` gesetzt ist, ist der Bereich der Standardbereich für das Zählsystem. Wenn das `system` `cyclic`, `numeric` oder `fixed` ist, reicht der Bereich von negativ unendlich bis positiv unendlich. Wenn das `system` `alphabetic` oder `symbolic` ist, reicht der Bereich von `1` bis positiv `unendlich`. Bei `system: additive` ergibt `auto` den Bereich von `0` bis positiv `unendlich`.

Wenn ein Zähler erweitert wird und `range` auf `auto` gesetzt ist, wird der Bereichswert der Bereich des `system` des zu erweiternden Zählers sein, nicht der `range` Wert, falls vorhanden, dieses Zählers. Zum Beispiel, wenn Zähler "B" das `system: extends A` gesetzt hat, wobei der Zähler ein `alphabetic` Zähler ist, setzt das Setzen von `range: auto` auf "B" den Bereich von "B" von `1` bis `unendlich`. Dies ist der Bereich des `alphabetic` Systems, nicht unbedingt der Bereich, der in der "A" Zählerstildefinition festgelegt ist. Mit `range: auto` auf "B" wird der `range` auf den Standardbereich des `alphabetic` Systems gesetzt, nicht auf den in der Deskriptorliste des Zählers A festgelegten `range` Wert.

### `infinite` erklärt

Wenn der Bereich als Ganzzahlen angegeben wird (im Gegensatz zu `auto`), kann der Wert `infinite` verwendet werden, um Unendlichkeit darzustellen. Wenn _infinite_ als erster Wert in einem Bereich angegeben ist, wird es als negative Unendlichkeit interpretiert. Wird es als obere Grenze, der zweite Wert im Bereichspaar, verwendet, wird es als positive Unendlichkeit angesehen.

### Liste von Bereichen

Der Wert von `range` ist entweder `auto`, wie oben besprochen, oder eine kommagetrennte Liste von einem oder mehreren Bereichen. Der Bereich des Zählerstils ist die Vereinigung aller in der Liste definierten Bereiche.

Jeder Bereich in der Liste der Bereiche nimmt zwei Werte an. Diese Werte sind entweder ein {{cssxref("integer")}} oder das Schlüsselwort `infinite`. Der erste Wert ist die _untere Grenze_, einschließlich. Der zweite Wert ist die _obere Grenze_, einschließlich. Bei zwei ganzzahligen Werten muss der niedrigere Wert zuerst kommen. Wenn die untere Grenze eines beliebigen Bereichs in der Liste höher als die obere Grenze ist, ist der gesamte `range` Deskriptor ungültig und wird ignoriert. Das Schlüsselwort `infinite` wird den Bereich nicht ungültig machen, weil die Position von `infinite` seinen Wert bestimmt; entweder negative oder positive Unendlichkeit, basierend darauf, ob es die untere oder obere Grenze ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellung des Zählerstils über einen Bereich

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
- {{cssxref("symbols", "symbols()")}}: die funktionale Notation zum Erstellen anonymer Zählerstile.
- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
- [CSS Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
