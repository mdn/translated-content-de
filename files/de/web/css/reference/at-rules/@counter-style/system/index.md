---
title: "`system` CSS at-rule descriptor"
short-title: system
slug: Web/CSS/Reference/At-rules/@counter-style/system
l10n:
  sourceCommit: f0094356d3acb19475dde45508dfeac6abf596db
---

Der **`system`** Deskriptor spezifiziert den Algorithmus, der zur Umwandlung des Zahlenwerts eines Zählers in eine Zeichenfolgedarstellung verwendet wird. Er wird in einem {{cssxref("@counter-style")}} verwendet, um das Verhalten des definierten Stils zu bestimmen.

Wenn der im `system`-Deskriptor angegebene Algorithmus nicht in der Lage ist, die Darstellung für einen bestimmten Zählerwert zu konstruieren, wird die Darstellung dieses Werts mithilfe des bereitgestellten Fallback-Systems erzeugt.

## Syntax

```css
/* Keyword values */
system: cyclic;
system: numeric;
system: alphabetic;
system: symbolic;
system: additive;
system: fixed;

/* Other values */
system: fixed 3;
system: extends decimal;
system: extends circled-letters;
```

## Werte

Dies kann in einer von drei Formen vorliegen:

- Einer der Schlüsselwortwerte `cyclic`, `numeric`, `alphabetic`, `symbolic`, `additive` oder `fixed`.
- Der Schlüsselwortwert `fixed` zusammen mit einem Integer.
- Der Schlüsselwortwert `extends` zusammen mit einem [`<counter-style-name>`](/de/docs/Web/CSS/Reference/At-rules/@counter-style#counter-style-name) Wert.

Die Werte umfassen:

- `cyclic`
  - : Durchläuft die Liste der im [`symbols`](/de/docs/Web/CSS/Reference/At-rules/@counter-style/symbols) Deskriptor angegebenen Symbole. Sobald das Ende der Liste erreicht ist, beginnt der Zyklus von vorne. Dieser Wert ist sowohl für grundlegende Aufzählungsstile mit nur einem Symbol als auch für Stile mit mehreren Symbolen nützlich. Mindestens ein Symbol muss im `symbols`-Deskriptor angegeben sein, andernfalls ist der Zählerstil nicht gültig.

- `numeric`
  - : Interpretiert die Zählersymbole als Ziffern in einem [Stellenwert-Zahlensystem](https://de.wikipedia.org/wiki/Stellenwertsystem). Das numerische System ähnelt dem `alphabetic` System, das oben beschrieben wurde. Der Hauptunterschied besteht darin, dass im `alphabetic` System das erste im `symbols` Deskriptor angegebene Zählersymbol als `1` interpretiert wird, das nächste als `2` und so weiter. Im numerischen System wird das erste Zählersymbol jedoch als `0` interpretiert, das nächste als `1`, dann `2` und so weiter.

    Es müssen mindestens zwei Zählersymbole im `symbols` Deskriptor angegeben sein, andernfalls ist der Zählerstil nicht gültig.

- `alphabetic`
  - : Interpretiert die angegebenen Symbole als Ziffern zu einem alphabetischen Zahlensystem. Wenn die Zeichen `"a"` bis `"z"` als Symbole in einem Zählerstil angegeben sind, dann werden mit dem `alphabetic` System die ersten 26 Zählerdarstellungen `"a"`, `"b"` bis `"z"` sein. Bis zu diesem Punkt verhält sich das System wie das `symbolic` System, das oben beschrieben wurde. Nach `"z"` wird es jedoch als `"aa"`, `"ab"`, `"ac"`... fortfahren.

    Der `symbols` Deskriptor muss mindestens zwei Symbole enthalten, andernfalls ist der Zählerstil nicht gültig. Das erste im `symbols` Deskriptor bereitgestellte Zählersymbol wird als `1` interpretiert, das nächste als `2` und so weiter. Dieses System ist auch streng über positive Zählerwerte definiert.

- `symbolic`
  - : Durchläuft die im `symbols` Deskriptor angegebene Liste von Symbolen wiederholt, verdoppelt, verdreifacht und so weiter die Symbole bei jedem weiteren Durchlauf durch die Liste. Zum Beispiel, wenn zwei Symbole "◽" und "◾" im `symbols` Deskriptor angegeben sind, werden sie bei jedem weiteren Durchlauf zu "◽◽" und "◾◾", dann zu "◽◽◽" und "◾◾◾", und so weiter. Mindestens ein Symbol muss im `symbols` Deskriptor angegeben sein, andernfalls ist der Zählerstil nicht gültig. Dieses Zählsystem funktioniert nur für positive Zählerwerte.

- `additive`
  - : Verwendet, um "Zeichenwert"-Zahlensysteme zu repräsentieren, wie römische Ziffern, die statt Ziffern in verschiedenen Positionen erneut zu verwenden, um unterschiedliche Werte zu erhalten, zusätzliche Ziffern für größere Werte definieren. Der Wert einer Zahl in einem solchen System kann ermittelt werden, indem die Ziffern in der Zahl addiert werden.

    Ein zusätzlicher Deskriptor namens `additive-symbols` muss mit mindestens einem _additiven Tuppel_ angegeben werden, andernfalls ist die Zählerstilregel nicht gültig. Ein additives Tuppel ist ähnlich wie ein zusammengesetztes Zählersymbol, das aus zwei Teilen besteht: einem normalen Zählersymbol und einem nicht-negativen ganzzahligen Gewicht. Die additiven Tuppel müssen in absteigender Reihenfolge ihrer Gewichte angegeben werden, sonst ist das System ungültig.

- `fixed` oder `fixed <integer>`
  - : Definiert eine endliche Menge von Symbolen, die einmal durch die im `symbols` Deskriptor angegebene Liste von Symbolen iteriert wird. Sobald die angegebenen Symbole durchlaufen worden sind, wird der Fallback-Zählerstil verwendet. Dieser Schlüsselwortwert ist in Fällen nützlich, in denen die Zählerstilwerte endlich sind. Mindestens ein Symbol muss im `symbols` Deskriptor angegeben sein, andernfalls ist der Zählerstil nicht gültig. Das Schlüsselwort `fixed` kann von einem optionalen {{cssxref("&lt;integer&gt;")}} Wert gefolgt werden. Falls angegeben, gibt der `<integer>` Wert das Element in der Liste an, das das erste Symbol aus der Liste der Symbole erhält. Wenn er weggelassen wird, lautet der Standardwert `1`, der dem ersten Element in der Liste das erste Symbol gibt.

- `extends`
  - : Erweitert den Algorithmus eines anderen von Browsern oder Autoren definierten Zählerstils, indem einige Aspekte des erweiterten Zählerstils geändert werden dürfen. Alle nicht spezifizierten Deskriptoren und ihre Werte werden vom angegebenen erweiterten Zählerstil geerbt. Wenn der mit `extends` angegebene Zählerstilname noch nicht definiert ist, wird standardmäßig der `decimal` Zählerstil erweitert.

    Er darf keinen `symbols` oder `additive-symbols` Deskriptor enthalten, andernfalls ist die Regel für den Zählerstil ungültig. Wenn eine oder mehrere Zählerstildefinitionen einen Zyklus mit ihren `extends` Werten bilden, behandelt der Browser alle beteiligten Zählerstile als Erweiterung des `decimal` Stils.

> [!NOTE]
> Der [`symbols`](/de/docs/Web/CSS/Reference/At-rules/@counter-style/symbols) Deskriptor ist erforderlich, wenn der Wert `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` ist. Der [`additive-symbols`](/de/docs/Web/CSS/Reference/At-rules/@counter-style/additive-symbols) Deskriptor ist erforderlich, wenn der `additive` Wert gesetzt ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Zyklischer Zähler

Der `cyclic` Wert iteriert durch die Liste der Symbole und wiederholt die Liste nach Bedarf:

#### CSS

```html hidden
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
  <li>Six</li>
</ul>
```

```css
@counter-style fisheye {
  system: cyclic;
  symbols: ◉ ➀;
  suffix: ": ";
}

ul {
  list-style: fisheye;
}
```

#### Ergebnis

{{ EmbedLiveSample('Cyclic_counter') }}

### Fester Zähler

Der `fixed` Wert iteriert nur einmal durch die Liste der Symbole, wobei der Einzelzyklus bei der durch den `integer` Wert angegebenen Listenelementnummer beginnt:

#### CSS

```html hidden
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
  <li>Six</li>
</ul>
```

```css
@counter-style circled-digits {
  system: fixed 3;
  symbols: ➀ ➁ ➂;
  suffix: ": ";
}

ul {
  list-style: circled-digits;
}
```

#### Ergebnis

{{ EmbedLiveSample('Fixed_counter') }}

### Symbolischer Zähler

Der `symbolic` Wert durchläuft die im `symbols` Deskriptor definierte Liste und verdoppelt und verdreifacht die Anzahl der Symbole für den zweiten und dritten Durchlauf durch die Liste:

#### CSS

```html hidden
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
  <li>Six</li>
  <li>Seven</li>
  <li>Eight</li>
</ul>
```

```css
@counter-style abc {
  system: symbolic;
  symbols: a b c;
  suffix: ". ";
}

ul {
  list-style: abc;
}
```

#### Ergebnis

{{ EmbedLiveSample('Symbolic_counter') }}

### Alphabetischer Zähler

#### CSS

```html hidden
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
  <li>Six</li>
  <li>Seven</li>
  <li>Eight</li>
</ul>
```

```css
@counter-style abc {
  system: alphabetic;
  symbols: a b c;
  suffix: ". ";
}

ul {
  list-style: abc;
}
```

#### Ergebnis

{{ EmbedLiveSample('Alphabetic_counter') }}

### Numerischer Zähler

Das erste im `symbols` Deskriptor angegebene Symbol wird hier als `0` interpretiert.

#### CSS

```html hidden
<ul>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
  <li>Six</li>
  <li>Seven</li>
  <li>Eight</li>
</ul>
```

```css
@counter-style abc {
  system: numeric;
  symbols: a b c;
  suffix: ". ";
}

ul {
  list-style: abc;
}
```

#### Ergebnis

{{ EmbedLiveSample('Numeric_counter') }}

### Numerischer Zähler mit numerischen Symbolen

Wie im folgenden Beispiel gezeigt, werden bei der Angabe von Ziffern von `0` bis `9` als Symbole diese Zählerstile die Symbole genauso rendern wie der Dezimalsystem-Zählerstil.

#### CSS

```html hidden
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

```css
@counter-style numbers {
  system: numeric;
  symbols: "0" "1" "2" "3" "4" "5" "6" "7" "8" "9";
  suffix: ".";
}

ul {
  list-style: numbers;
}
```

#### Ergebnis

{{ EmbedLiveSample('Numeric_counter_with_numeric_symbols') }}

### Additiver Zähler

Dieses Beispiel rendert eine Liste unter Verwendung von römischen Ziffern. Beachten Sie, dass ein `range` angegeben ist. Dies liegt daran, dass die Darstellung nur bis zum Zählerwert von `3999` korrekte römische Ziffern produziert. Jenseits des Bereichs basieren die restlichen Zählerdarstellungen auf dem Dezimalsystemstil, welcher der Fallback ist. Wenn Sie Zählerwerte als römische Ziffern darstellen müssen, könnten Sie entweder einen der vordefinierten Zählerstile `upper-roman` oder `lower-roman` verwenden, anstatt die Regel selbst zu rekonstruieren.

#### HTML

Wir verwenden das [`start`](/de/docs/Web/HTML/Reference/Elements/ol#start) Attribut am {{HTMLElement("ol")}} Element, um zu demonstrieren, dass das Zählen nicht bei `1` beginnen muss. Zusätzlich verwenden wir das [`value`](/de/docs/Web/HTML/Reference/Elements/li#value) Attribut am fünften {{HTMLElement("li")}} Element, um zu zeigen, dass die von Ihnen mit `@counter-style` definierten Zähler sich genauso wie native Zähler verhalten.

```html
<ol start="48">
  <li>48</li>
  <li>49</li>
  <li>50</li>
  <li>51</li>
  <li value="109">109</li>
  <li>110</li>
</ol>
```

#### CSS

```css
@counter-style uppercase-roman {
  system: additive;
  range: 1 3999;
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

ol {
  list-style: uppercase-roman;
  padding-left: 5em;
}
```

#### Ergebnis

{{ EmbedLiveSample('Additive_counter', '') }}

### Erweiterung eines Zählers

Dieses Beispiel verwendet den Algorithmus, Symbole und andere Eigenschaften von [`lower-alpha`](/de/docs/Web/CSS/Reference/Properties/list-style-type#lower-alpha), einem der mehreren nativen {{CSSXref("list-style-type")}} Zählwerten, erweitert ihn jedoch, indem das Punktzeichen (`'.'`) nach der Zähldarstellung entfernt und die Zeichen in Klammern gesetzt werden, wie `(a)` und `(b)`.

#### HTML

```html
<ul class="list">
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
  <li>Five</li>
</ul>
```

#### CSS

```css
@counter-style alpha-modified {
  system: extends lower-alpha;
  prefix: "(";
  suffix: ") ";
}

ul {
  list-style: alpha-modified;
}
```

#### Ergebnis

{{ EmbedLiveSample('Extending_a_counter') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere {{cssxref("@counter-style")}} Deskriptoren, einschließlich {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}}, und {{cssxref("@counter-style/fallback", "fallback")}}
- {{cssxref("list-style")}}, {{cssxref("list-style-image")}}, {{cssxref("list-style-position")}}
- {{cssxref("symbols()")}}, die funktionale Notation zur Erstellung anonymer Zählerstile.
