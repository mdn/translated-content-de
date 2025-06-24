---
title: system
slug: Web/CSS/@counter-style/system
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{CSSRef}}

Der **`system`** Deskriptor spezifiziert den Algorithmus, der zur Umwandlung des ganzzahligen Wertes eines Zählers in eine Zeichenfolgenrepräsentation verwendet wird. Er wird in einem {{cssxref("@counter-style")}} verwendet, um das Verhalten des definierten Stils zu bestimmen.

Wenn der im `system` Deskriptor angegebene Algorithmus nicht in der Lage ist, die Darstellung für einen bestimmten Zählerwert zu konstruieren, wird die Darstellung dieses Wertes mit dem bereitgestellten Fallback-System erstellt.

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

Dies kann eine von drei Formen haben:

- Einer der Schlüsselwortwerte `cyclic`, `numeric`, `alphabetic`, `symbolic`, `additive` oder `fixed`.
- Der Schlüsselwortwert `fixed` zusammen mit einer Ganzzahl.
- Der Schlüsselwortwert `extends` zusammen mit einem [`<counter-style-name>`](/de/docs/Web/CSS/@counter-style#counter-style-name) Wert.

Die Werte umfassen:

- `cyclic`

  - : Durchläuft die im [`symbols`](/de/docs/Web/CSS/@counter-style/symbols) Deskriptor bereitgestellte Liste von Symbolen. Wenn das Ende der Liste erreicht ist, beginnt der Zyklus von vorne. Dieser Wert ist sowohl für grundlegende Aufzählungsstile mit nur einem Symbol als auch für Stile mit mehreren Symbolen nützlich. Es muss mindestens ein Symbol im `symbols` Deskriptor angegeben sein, andernfalls ist der Zählerstil nicht gültig.

- `numeric`

  - : Interpretiert die Zählsymbole als Ziffern in einem [positionswertbasierten Zahlensystem](https://de.wikipedia.org/wiki/Stellennotation). Das numerische System ist ähnlich wie das `alphabetic` System, das oben beschrieben ist. Der Hauptunterschied besteht darin, dass im `alphabetic` System das erste im `symbols` Deskriptor angegebene Zählsymbol als `1` interpretiert wird, das nächste als `2` und so weiter. Im numerischen System wird jedoch das erste Zählsymbol als 0 interpretiert, das nächste als `1`, dann `2` und so weiter.

    Es müssen mindestens zwei Zählsymbole im `symbols` Deskriptor angegeben sein, andernfalls ist der Zählerstil nicht gültig.

- `alphabetic`

  - : Interpretiert die angegebenen Symbole als Ziffern in einem alphabetischen Zahlensystem. Wenn die Zeichen `"a"` bis `"z"` als Symbole in einem Zählerstil mit dem `alphabetic` System angegeben sind, dann sind die ersten 26 Zählerdarstellungen `"a"`, `"b"` bis `"z"`. Bis zu diesem Punkt entspricht das Verhalten dem des `symbolic` Systems, das oben beschrieben ist. Nach `"z"` geht es jedoch weiter mit `"aa"`, `"ab"`, `"ac"`…

    Der `symbols` Deskriptor muss mindestens zwei Symbole enthalten, andernfalls ist der Zählerstil nicht gültig. Das erste im `symbols` Deskriptor bereitgestellte Zählsymbol wird als `1` interpretiert, das nächste als `2` und so weiter. Dieses System ist auch streng auf positive Zählerwerte definiert.

- `symbolic`

  - : Durchläuft die im `symbols` Deskriptor bereitgestellte Liste von Symbolen wiederholt, indem die Anzahl der Symbole bei jedem Durchlauf der Liste verdoppelt, verdreifacht usw. wird. Wenn beispielsweise zwei Symbole "◽" und "◾" im `symbols` Deskriptor angegeben sind, werden diese bei jedem weiteren Durchlauf zu "◽◽" und "◾◾", dann "◽◽◽" und "◾◾◾", und so weiter. Es muss mindestens ein Symbol im `symbols` Deskriptor angegeben sein, andernfalls ist der Zählerstil nicht gültig. Dieses Zählersystem funktioniert nur für positive Zählerwerte.

- `additive`

  - : Wird verwendet, um "Zahlenwertsysteme" darzustellen, wie zum Beispiel römische Zahlen, bei denen nicht wie bei anderen Nummerierungssystemen Ziffern in verschiedenen Positionen wiederverwendet werden, um verschiedenen Werten zu erhalten, sondern zusätzliche Ziffern für größere Werte definieren. Der Wert einer Zahl in einem solchen System kann durch Addition der Ziffern in der Zahl gefunden werden.

    Ein zusätzlicher Deskriptor namens `additive-symbols` muss mit mindestens einem _additiven Tupel_ angegeben werden, andernfalls ist die Zählerstilregel nicht gültig. Ein additives Tupel ist ähnlich wie ein zusammengesetztes Zählsymbol, das aus zwei Teilen besteht: einem normalen Zählsymbol und einem nicht negativen ganzen Zahlengewicht. Die additiven Tupel müssen in absteigender Reihenfolge ihrer Gewichte angegeben werden, andernfalls ist das System ungültig.

- `fixed` oder `fixed <integer>`

  - : Definiert eine endliche Menge von Symbolen, wobei einmal durch die im `symbols` Deskriptor bereitgestellte Liste von Symbolen iteriert wird. Sobald die angegebenen Symbole durchlaufen sind, wird der Fallback-Zählerstil verwendet. Dieser Schlüsselwortwert ist nützlich in Fällen, in denen die Zählerstilwerte endlich sind. Es muss mindestens ein Symbol im `symbols` Deskriptor angegeben sein, andernfalls ist der Zählerstil nicht gültig. Das Schlüsselwort `fixed` kann von einem optionalen {{cssxref("&lt;integer&gt;")}} Wert gefolgt werden. Wenn angegeben, gibt der `<integer>` Wert das Element in der Liste an, das das erste Symbol aus der Liste der Symbole erhält. Wenn weggelassen, ist der Standardwert `1`, was dem ersten Element in der Liste das erste Symbol gibt.

- `extends`

  - : Erweitert den Algorithmus eines anderen, vom Browser oder Autor definierten Zählerstils, indem einige Aspekte des erweiterten Zählerstils verändert werden können. Alle nicht spezifizierten Deskriptoren und deren Werte werden vom angegebenen erweiterten Zählerstil geerbt. Wenn der mit `extends` angegebene Zählerstilname noch nicht definiert ist, wird standardmäßig der `decimal` Zählerstil erweitert.

    Er darf keinen `symbols` oder `additive-symbols` Deskriptor enthalten, andernfalls ist die Zählerstilregel ungültig. Wenn eine oder mehrere Zählerstildefinitionen einen Zyklus mit ihren `extends` Werten bilden, behandelt der Browser alle beteiligten Zählerstile als Erweiterung des `decimal` Stils.

> [!NOTE]
> Der [`symbols`](/de/docs/Web/CSS/@counter-style/symbols) Deskriptor ist erforderlich, wenn der Wert `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` ist. Der [`additive-symbols`](/de/docs/Web/CSS/@counter-style/additive-symbols) Deskriptor ist erforderlich, wenn der `additive` Wert gesetzt ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Zyklischer Zähler

Der `cyclic` Wert iteriert durch die Liste der Symbole und wiederholt die Liste bei Bedarf:

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

Der `fixed` Wert iteriert nur einmal durch die Liste der Symbole und beginnt den Einzelzyklus bei der durch den `integer` Wert angegebenen Listenposition:

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

Der `symbolic` Wert durchläuft die im `symbols` Deskriptor definierte Liste, indem er die Anzahl der Symbole für den zweiten und dritten Durchlauf durch die Liste verdoppelt und verdreifacht:

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

Das erste im `symbols` Deskriptor bereitgestellte Symbol wird hier als `0` interpretiert.

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

Wie im folgenden Beispiel gezeigt, rendert dieser Zählerstil Symbole gleich dem dezimalen Zählerstil, wenn Ziffern von `0` bis `9` als Symbole angegeben werden.

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

Dieses Beispiel rendert eine Liste mit römischen Zahlen. Beachten Sie, dass ein `range` spezifiziert ist. Dies liegt daran, dass die Darstellung korrekte römische Zahlen nur bis zum Zählerwert `3999` produziert. Außerhalb des Bereichs basieren die restlichen Zählerdarstellungen auf dem `decimal` Stil, der als Fallback dient. Wenn Sie Zählerwerte als römische Zahlen darstellen müssen, könnten Sie entweder einen der vordefinierten Zählerstile `upper-roman` oder `lower-roman` verwenden, anstatt die Regel selbst zu erstellen.

#### HTML

Wir verwenden das [`start`](/de/docs/Web/HTML/Reference/Elements/ol#start) Attribut auf dem {{HTMLElement("ol")}} Element, um zu zeigen, dass die Zählung nicht bei `1` beginnen muss. Zusätzlich verwenden wir das [`value`](/de/docs/Web/HTML/Reference/Elements/li#value) Attribut auf dem fünften {{HTMLElement("li")}} Element, um zu demonstrieren, dass die von Ihnen definierten Zähler mit `@counter-style` sich genauso wie native Zähler verhalten.

```html
<ol start="48">
  <li>48</li>
  <li>49</li>
  <li>50</li>
  <li>51</li>
  <li value="109">109</li>
  <li>110</li>
  <ol></ol>
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

### Einen Zähler erweitern

Dieses Beispiel verwendet den Algorithmus, die Symbole und andere Eigenschaften von [`lower-alpha`](/de/docs/Web/CSS/list-style-type#lower-alpha), einem der mehreren nativen {{CSSXref("list-style-type")}} Zählertypen, erweitert ihn jedoch, indem der Punkt (`'.'`) nach der Zählerdarstellung entfernt wird und die Zeichen in Klammern gesetzt werden, wie `(a)` und `(b)`.

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
- {{cssxref("symbols", "symbols()")}}, die funktionale Notation zur Erstellung anonymer Zählerstile.
