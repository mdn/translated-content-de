---
title: "`range` CSS At-Regeldeskriptor"
short-title: range
slug: Web/CSS/Reference/At-rules/@counter-style/range
l10n:
  sourceCommit: f0094356d3acb19475dde45508dfeac6abf596db
---

Der **`range`** Deskriptor ermöglicht es dem Autor, einen oder mehrere Bereiche von Zählerwerten anzugeben, für die der Stil angewendet wird, wenn benutzerdefinierte Zählerstile mit der {{cssxref("@counter-style")}} At-Regel definiert werden. Wenn der `range` Deskriptor enthalten ist, wird der definierte Zähler nur für Werte in den festgelegten Bereichen verwendet. Liegt der Zählerwert außerhalb des angegebenen Bereichs, wird der Ersatzstil verwendet, um die Darstellung dieses Markers zu erstellen.

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
  - : Der gesamte Satz von durch den Zähler darstellbaren Zahlen {{cssxref("@counter-style/system","system")}}. Diese Bereichswerte hängen vom Zählersystem ab:
    - Für `cyclic`, `numeric` und `fixed` Systeme erstreckt sich der Bereich von negativem `infinity` bis positivem `infinity`.
    - Für `alphabetic` und `symbolic` Systeme erstreckt sich der Bereich von `1` bis positivem `infinity`.
    - Für `additive` Systeme erstreckt sich der Bereich von `0` bis positivem `infinity`.
    - Wenn `extend` verwendet wird, um ein System zu erweitern, ist der Bereich das, was `auto` für das erweiterte System erzeugen würde, einschließlich Erweiterungen komplexer vordefinierter Stile, wie einige japanische, koreanische, chinesische und äthiopische Zählerstile.

- `[ [ <integer> | infinite ]{2} ]#`
  - : Jeder Bereich innerhalb der durch Komma getrennten Liste von Bereichen enthält zwei Werte, die entweder eine {{cssxref("integer")}} oder das Schlüsselwort `infinite` sind. Wird `infinite` als erster Wert in einem Bereich verwendet, repräsentiert es negative Unendlichkeit; wird es als zweiter Wert verwendet, repräsentiert es positive Unendlichkeit. Der erste Wert jedes Bereichs ist die untere Grenze für den Bereich und der zweite Wert ist die obere Grenze, inklusiv. Wenn die untere Grenze eines Bereichs in der Liste höher ist als die obere Grenze, ist der gesamte `range` Deskriptor ungültig und wird ignoriert.

## Beschreibung

Der Wert des `range` Deskriptors kann entweder `auto` oder eine durch Kommas getrennte Liste von unteren und oberen Grenzbereichen sein, die unter Verwendung von negativen oder positiven Ganzzahlen oder dem Schlüsselwort `infinite` angegeben werden.

### Verständnis von `auto`

Wenn der Wert auf `auto` gesetzt ist, ist der Bereich der Standardbereich für das Zählersystem. Wenn das `system` `cyclic`, `numeric` oder `fixed` ist, erstreckt sich der Bereich von negativer bis positiver Unendlichkeit. Wenn das `system` `alphabetic` oder `symbolic` ist, erstreckt sich der Bereich von `1` bis zu positiver `infinity`. Für `system: additive` führt `auto` zu einem Bereich von `0` bis positive `infinity`.

Wenn ein Zähler erweitert wird und `range` auf `auto` gesetzt ist, ist der Bereichswert der Bereich des `system` des Zählers, der erweitert wird, nicht der `range` Wert, falls vorhanden, dieses Zählers. Wenn zum Beispiel der Zähler "B" das `system: extends A` gesetzt hat, wobei der Zähler ein `alphabetic` Zähler ist, setzt `range: auto` auf "B" den Bereich von "B" von `1` bis `infinity`. Dies ist der Bereich des `alphabetic` Systems, nicht unbedingt der in der "A" Zählerstildefinition gesetzte Bereich. Mit `range: auto` auf "B" wird der `range` auf den Standardbereich des `alphabetic` Systems gesetzt, nicht auf den `range` Wert, der in der Deskriptorenliste von Zähler A festgelegt wurde.

### `infinite` erklärt

Wenn der Bereich als Ganzzahlen angegeben wird (im Gegensatz zu `auto`), kann der Wert `infinite` verwendet werden, um Unendlichkeit anzuzeigen. Wenn _infinite_ als erster Wert in einem Bereich angegeben wird, wird er als negative Unendlichkeit interpretiert. Wenn er als obere Grenze, der zweite Wert im Bereichspaar, verwendet wird, wird er als positive Unendlichkeit betrachtet.

### Liste von Bereichen

Der Wert von `range` ist entweder `auto`, wie oben besprochen, oder eine durch Kommas getrennte Liste von einem oder mehreren Bereichen. Der Bereich des Zählerstils ist die Vereinigung all der in der Liste definierten Bereiche.

Jeder Bereich in der Liste der Bereiche nimmt zwei Werte an. Diese Werte sind entweder eine {{cssxref("integer")}} oder das Schlüsselwort `infinite`. Der erste Wert ist die _untere Grenze_, inklusive. Der zweite Wert ist die _obere Grenze_, inklusive. Bei zwei Ganzzahlen muss der niedrigere Wert zuerst kommen. Wenn die untere Grenze eines Bereichs in der Liste höher ist als die obere Grenze, ist der gesamte `range` Deskriptor ungültig und wird ignoriert. Das `infinite` Schlüsselwort wird den Bereich nicht ungültig machen, da die Position von `infinite` seinen Wert bestimmt; entweder negative oder positive Unendlichkeit, je nachdem, ob es die untere oder obere Grenze ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Zählerstil über einen Bereich festlegen

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

Der erste Bereich sind die in der Liste der Bereiche enthaltenen 2, 3 und 4. Der zweite umfasst 7, 8 und 9. Der Bereich ist die Vereinigung dieser beiden Bereiche, also 2, 3, 4, 7, 8 und 9.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere {{cssxref("@counter-style")}} Deskriptoren: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}}, und {{cssxref("@counter-style/fallback", "fallback")}}
- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols()")}}: die funktionale Notation zur Erstellung anonymer Zählerstile.
- [CSS-Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles) Modul
- [CSS-Listen und Zähler](/de/docs/Web/CSS/Guides/Lists) Modul
