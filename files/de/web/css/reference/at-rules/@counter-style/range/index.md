---
title: range
slug: Web/CSS/Reference/At-rules/@counter-style/range
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der **`range`** Deskriptor ermöglicht es dem Autor, einen oder mehrere Bereiche von Zählerwerten anzugeben, für die der Stil angewendet wird, wenn benutzerdefinierte Zählerstile mit der {{cssxref("@counter-style")}} At-Regel definiert werden. Wenn der `range` Deskriptor enthalten ist, wird der definierte Zähler nur für Werte in den festgelegten Bereichen verwendet. Liegt der Zählerwert außerhalb des angegebenen Bereichs, wird der Fallback-Stil verwendet, um die Darstellung dieses Markers zu konstruieren.

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

Der Wert ist eine kommagetrennte Liste von Bereichen, von denen jeder eine untere und obere Grenze oder das Schlüsselwort `auto` enthält.

- `auto`

  - : Der gesamte Satz von Zahlen, die durch den Zähler darstellbar sind, hängt vom Zähler{{cssxref("@counter-style/system","system")}} ab. Diese Bereichswerte hängen vom Zählersystem ab:
    - Für `cyclic`, `numeric` und `fixed` Systeme reicht der Bereich von negativer `Unendlichkeit` bis positiver `Unendlichkeit`.
    - Für `alphabetic` und `symbolic` Systeme reicht der Bereich von `1` bis zur positiven `Unendlichkeit`.
    - Für `additive` Systeme reicht der Bereich von `0` bis zur positiven Unendlichkeit.
    - Wenn `extend` verwendet wird, um ein System zu erweitern, ist der Bereich das, was `auto` für das erweiterte System erzeugen würde, einschließlich Erweiterungen komplexer vordefinierter Stile, wie einige japanische, koreanische, chinesische und äthiopische Zählerstile.

- `[ [ <integer> | infinite ]{2} ]#`
  - : Jeder Bereich innerhalb der kommagetrennten Liste von Bereichen enthält zwei Werte, die jeweils entweder ein {{cssxref("integer")}} oder das Schlüsselwort `infinite` sind. Wenn `infinite` als erster Wert in einem Bereich verwendet wird, stellt es negative Unendlichkeit dar; wenn es als zweiter Wert verwendet wird, stellt es positive Unendlichkeit dar. Der erste Wert jedes Bereichs ist die Untergrenze für den Bereich und der zweite Wert ist die Obergrenze, inklusive. Wenn die Untergrenze eines Bereichs in der Liste höher als die Obergrenze ist, ist der gesamte `range` Deskriptor ungültig und wird ignoriert.

## Beschreibung

Der Wert des `range` Deskriptors kann entweder `auto` oder eine kommagetrennte Liste von unteren und oberen Bereichsgrenzen sein, die unter Verwendung von negativen oder positiven Ganzzahlen oder dem Schlüsselwort `infinite` angegeben sind.

### Verständnis von `auto`

Wenn der Wert auf `auto` gesetzt ist, ist der Bereich der Standardbereich für das Zählersystem. Wenn das `system` `cyclic`, `numeric` oder `fixed` ist, reicht der Bereich von negativer Unendlichkeit bis positiver Unendlichkeit. Wenn das `system` `alphabetic` oder `symbolic` ist, reicht der Bereich von `1` bis zur positiven `Unendlichkeit`. Für `system: additive` ergibt `auto` den Bereich `0` bis zur positiven `Unendlichkeit`.

Wenn ein Zähler erweitert wird und `range` auf `auto` gesetzt ist, wird der Bereichswert der Bereich des `systems` des erweiterten Zählers sein, nicht der `range` Wert, wenn vorhanden, dieses Zählers. Zum Beispiel, wenn Zähler "B" das `system: extends A` gesetzt hat, wobei Zähler ein `alphabetic` Zähler ist, setzt `range: auto` auf "B" den Bereich von "B" von `1` bis `Unendlichkeit`. Dies ist der Bereich des `alphabetic` Systems, nicht unbedingt der Bereich, der in der Definition des Zählerstils "A" festgelegt ist. Mit `range: auto` auf "B" gesetzt, wird der `range` auf den Standardbereich des `alphabetic` Systems gesetzt, nicht auf den `range` Wert, der in der Deskriptorliste von Zähler A festgelegt ist.

### `infinite` erklärt

Wenn der Bereich als Ganzzahlen (im Gegensatz zu `auto`) angegeben ist, kann der Wert `infinite` verwendet werden, um Unendlichkeit zu kennzeichnen. Wenn _infinite_ als erster Wert in einem Bereich angegeben ist, dann wird es als negative Unendlichkeit interpretiert. Wenn es als obere Grenze verwendet wird, der zweite Wert im Bereichspaar, wird es als positive Unendlichkeit genommen.

### Liste von Bereichen

Der Wert von `range` ist entweder `auto`, wie oben besprochen, oder eine kommagetrennte Liste von einem oder mehreren Bereichen. Der Bereich des Zählerstils ist die Vereinigung aller in der Liste definierten Bereiche.

Jeder Bereich in der Liste der Bereiche nimmt zwei Werte an. Diese Werte sind entweder ein {{cssxref("integer")}} oder das Schlüsselwort `infinite`. Der erste Wert ist die _untere Grenze_, inklusive. Der zweite Wert ist die _obere Grenze_, inklusive. Bei zwei Ganzzahlenwerten muss der niedrigere Wert zuerst kommen. Wenn die untere Grenze eines Bereichs in der Liste höher als die obere Grenze ist, ist der gesamte `range` Deskriptor ungültig und wird ignoriert. Das `infinite` Schlüsselwort macht den Bereich nicht ungültig, da die Position von `infinite` seinen Wert bestimmt; entweder negative oder positive Unendlichkeit, basierend darauf, ob es die untere oder obere Grenze ist.

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

Der erste Bereich in der Liste von Bereichen enthält 2, 3 und 4. Der zweite enthält 7, 8 und 9. Der Bereich ist die Vereinigung dieser beiden Bereiche oder 2, 3, 4, 7, 8 und 9.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere {{cssxref("@counter-style")}} Deskriptoren: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}}, und {{cssxref("@counter-style/fallback", "fallback")}}
- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}: die funktionale Notation zur Erstellung anonymer Zählerstile.
- [CSS Zählerstile](/de/docs/Web/CSS/Guides/Counter_styles) Modul
- [CSS Listen und Zähler](/de/docs/Web/CSS/Guides/Lists) Modul
