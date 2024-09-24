---
title: range
slug: Web/CSS/@counter-style/range
l10n:
  sourceCommit: 56de3bc3b3304ecc18775a1d0049ae4415c7cf51
---

{{CSSRef}}

Der **`range`** Deskriptor ermöglicht es dem Autor, einen oder mehrere Bereiche von Zählerwerten zu spezifizieren, auf die der Stil angewendet wird, wenn benutzerdefinierte Zählerstile mit der {{cssxref("@counter-style")}} At-Regel definiert werden. Wenn der `range` Deskriptor enthalten ist, wird der definierte Zähler nur für Werte in den festgelegten Bereichen verwendet. Liegt der Zählerwert außerhalb des angegebenen Bereichs, wird der Ersatzstil verwendet, um die Darstellung dieses Markers zu konstruieren.

## Syntax

```css
/* Schlüsselwortwert */
range: auto;

/* Bereichswerte */
range: 2 5;
range: infinite 10;
range: 6 infinite;
range: infinite infinite;

/* Mehrere Bereichswerte */
range:
  2 5,
  8 10;
range:
  infinite 6,
  10 infinite;
```

### Werte

Der Wert ist eine kommaseparierte Liste von Bereichen, die jeweils ein unteres und oberes Limit oder das Schlüsselwort `auto` enthalten.

- `auto`

  - : Die gesamte Menge von durch den Zähler darstellbaren Zahlen {{cssxref("@counter-style/system","system")}}. Diese Bereichswerte hängen vom Zählsystem ab:

    - Für `cyclic`, `numeric` und `fixed` Systeme ist der Bereich von negativer `Unendlichkeit` bis positive `Unendlichkeit`.
    - Für `alphabetic` und `symbolic` Systeme reicht der Bereich von `1` bis positive `Unendlichkeit`.
    - Für `additive` Systeme reicht der Bereich von `0` bis positive `Unendlichkeit`.
    - Bei Verwendung von `extend`, um ein System zu erweitern, ist der Bereich das, was `auto` für das erweiterte System erzeugen würde, einschließlich Erweiterungen komplexer vordefinierter Stile wie einiger japanischer, koreanischer, chinesischer und äthiopischer Zählerstile.

- `[ [ <integer> | infinite ]{2} ]#`
  - : Jeder Bereich in der kommaseparierten Liste enthält zwei Werte, die entweder ein {{cssxref("integer")}} oder das Schlüsselwort `infinite` sind. Wenn `infinite` als erster Wert in einem Bereich verwendet wird, stellt es negative Unendlichkeit dar; wenn es als zweiter Wert verwendet wird, stellt es positive Unendlichkeit dar. Der erste Wert jedes Bereichs ist die untere Grenze für den Bereich und der zweite Wert die obere Grenze, einschließlich. Wenn die untere Grenze eines Bereichs in der Liste höher als die obere Grenze ist, ist der gesamte `range` Deskriptor ungültig und wird ignoriert.

## Beschreibung

Der Wert des `range` Deskriptors kann entweder `auto` oder eine kommaseparierte Liste von unteren und oberen Grenzbereichen sein, die mit negativen oder positiven Ganzzahlen oder dem Schlüsselwort `infinite` angegeben sind.

### `auto` verstehen

Wenn der Wert auf `auto` gesetzt ist, ist der Bereich der Standardbereich für das Zählsystem. Wenn das `system` `cyclic`, `numeric` oder `fixed` ist, reicht der Bereich von negativer Unendlichkeit bis positive Unendlichkeit. Wenn das `system` `alphabetic` oder `symbolic` ist, reicht der Bereich von `1` bis positive `Unendlichkeit`. Für `system: additive` ergibt `auto` den Bereich `0` bis positive `Unendlichkeit`.

Beim Erweitern eines Zählers, wenn `range` auf `auto` gesetzt ist, ist der Bereichswert der Bereich des `systems` des Zählers, der erweitert wird, nicht der `range` Wert, sofern vorhanden, dieses Zählers. Zum Beispiel, wenn der Zähler "B" das `system: extends A` gesetzt hat, wobei der Zähler ein `alphabetic` Zähler ist, setzt `range: auto` auf "B" den Bereich von "B" von `1` bis `Unendlichkeit`. Dies ist der Bereich des `alphabetic` Systems, nicht unbedingt der in der Definition des Zählerstils "A" festgelegte Bereich. Mit `range: auto` auf "B" gesetzt, ist der `range` der Standardbereich des `alphabetic` Systems, nicht der im Deskriptor von Zähler A festgelegte `range` Wert.

### `infinite` erklärt

Wenn der Bereich als Ganzzahlen spezifiziert ist (anstatt `auto`), kann der Wert `infinite` verwendet werden, um Unendlichkeit zu kennzeichnen. Wenn _infinite_ als erster Wert in einem Bereich angegeben ist, wird es als negative Unendlichkeit interpretiert. Wird es als obere Grenze, der zweite Wert im Bereichspaar, verwendet, wird es als positive Unendlichkeit genommen.

### Liste von Bereichen

Der Wert von `range` ist entweder `auto`, wie oben diskutiert, oder eine kommaseparierte Liste von einem oder mehreren Bereichen. Der Bereich des Zählerstils ist die Vereinigung aller in der Liste definierten Bereiche.

Jeder Bereich in der Liste der Bereiche nimmt zwei Werte an. Diese Werte sind entweder ein {{cssxref("integer")}} oder das Schlüsselwort `infinite`. Der erste Wert ist die _untere Grenze_, einschließlich. Der zweite Wert ist die _obere Grenze_, einschließlich. Bei zwei Ganzzahlwerten muss der niedrigere zuerst kommen. Wenn die untere Grenze eines Bereichs in der Liste höher als die obere Grenze ist, ist der gesamte `range` Deskriptor ungültig und wird ignoriert. Das Schlüsselwort `infinite` wird den Bereich nicht ungültig machen, da die Position von `infinite` seinen Wert bestimmt; entweder negative oder positive Unendlichkeit, je nachdem, ob es die untere oder obere Grenze ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Zählerstil über einen Bereich einstellen

#### HTML

```html
<ul class="list">
  <li>Eins</li>
  <li>Zwei</li>
  <li>Drei</li>
  <li>Vier</li>
  <li>Fünf</li>
  <li>Sechs</li>
  <li>Sieben</li>
  <li>Acht</li>
  <li>Neun</li>
  <li>Zehn</li>
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

Der erste Bereich in der Liste umfasst 2, 3 und 4. Der zweite umfasst 7, 8 und 9. Der Bereich ist die Vereinigung dieser beiden Bereiche oder 2, 3, 4, 7, 8 und 9.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Andere {{cssxref("@counter-style")}} Deskriptoren: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}}, und {{cssxref("@counter-style/fallback", "fallback")}}
- {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}: die funktionale Notation zur Erstellung anonymer Zählerstile.
- [CSS-Zählerstile](/de/docs/Web/CSS/CSS_counter_styles) Modul
- [CSS-Listen und Zähler](/de/docs/Web/CSS/CSS_lists) Modul
