---
title: system
slug: Web/CSS/@counter-style/system
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`system`** Deskriptor gibt den Algorithmus an, der zur Umwandlung des ganzzahligen Werts eines Zählers in eine Zeichenfolgenrepräsentation verwendet wird. Er wird in einem {{cssxref("@counter-style")}} verwendet, um das Verhalten des definierten Stils zu bestimmen.

Wenn der im `system` Deskriptor angegebene Algorithmus nicht in der Lage ist, die Repräsentation für einen bestimmten Zählerwert zu konstruieren, wird die Darstellung dieses Werts mit dem bereitgestellten Ersatzsystem erstellt.

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

Dies kann eine von drei Formen annehmen:

- Einer der Schlüsselwortwerte `cyclic`, `numeric`, `alphabetic`, `symbolic`, `additive` oder `fixed`.
- Der Schlüsselwortwert `fixed` zusammen mit einer Ganzzahl.
- Der Schlüsselwortwert `extends` zusammen mit einem [`<counter-style-name>`](/de/docs/Web/CSS/@counter-style#counter-style-name) Wert.

Die Werte umfassen:

- `cyclic`
  - : Durchläuft die Liste der im [`symbols`](/de/docs/Web/CSS/@counter-style/symbols) Deskriptor bereitgestellten Symbole. Sobald das Ende der Liste erreicht ist, beginnt der Zyklus von vorne. Dieser Wert ist sowohl für grundlegende Aufzählungszeichen-Stile mit nur einem Symbol als auch für Stile mit mehreren Symbolen nützlich. Mindestens ein Symbol muss im `symbols` Deskriptor angegeben werden, andernfalls ist der Zählerstil nicht gültig.

- `numeric`
  - : Interpretiert die Zählersymbole als Ziffern in einem [Stellenwertsystem](https://en.wikipedia.org/wiki/Positional_notation). Das numerische System ähnelt dem `alphabetic` System, das oben beschrieben ist. Der Hauptunterschied besteht darin, dass im `alphabetic` System das erste Zählersymbol, das im `symbols` Deskriptor angegeben ist, als `1` interpretiert wird, das nächste als `2` und so weiter. Im numerischen System wird das erste Zählersymbol jedoch als 0, das nächste als `1`, dann `2` usw. interpretiert.

    Es müssen mindestens zwei Zählersymbole im `symbols` Deskriptor angegeben werden, ansonsten ist der Zählerstil nicht gültig.

- `alphabetic`
  - : Interpretiert die angegebenen Symbole als Ziffern in einem alphabetischen Nummerierungssystem. Wenn die Zeichen `"a"` bis `"z"` als Symbole in einem Zählerstil angegeben werden, ergibt das `alphabetic` System die ersten 26 Zählerdarstellungen als `"a"`, `"b"` bis `"z"`. Bis zu diesem Punkt ist das Verhalten dasselbe wie das des `symbolic` Systems, das oben beschrieben wurde. Nach `"z"` wird jedoch mit `"aa"`, `"ab"`, `"ac"` usw. fortgefahren.

    Der `symbols` Deskriptor muss mindestens zwei Symbole enthalten, andernfalls ist der Zählerstil nicht gültig. Das erste Zählersymbol, das im `symbols` Deskriptor bereitgestellt wird, wird als `1` interpretiert, das nächste als `2` usw. Dieses System ist auch streng auf positive Zählerwerte beschränkt.

- `symbolic`
  - : Durchläuft wiederholt die im `symbols` Deskriptor bereitgestellte Symbolleiste und verdoppelt, verdreifacht usw. die Symbole bei jeder weiteren Durchlaufung der Liste. Wenn zum Beispiel zwei Symbole "◽" und "◾" im `symbols` Deskriptor angegeben werden, werden sie bei jedem weiteren Durchlauf zu "◽◽" und "◾◾", dann "◽◽◽" und "◾◾◽", und so weiter in den nachfolgenden Durchläufen. Mindestens ein Symbol muss im `symbols` Deskriptor angegeben werden, andernfalls ist der Zählerstil nicht gültig. Dieses Zählersystem funktioniert nur für positive Zählerwerte.

- `additive`
  - : Wird verwendet, um "Zeichen-Wert"-Nummerierungssysteme darzustellen, wie römische Zahlen, die keine Ziffern in verschiedenen Positionen wiederverwenden, um unterschiedliche Werte zu erhalten, sondern zusätzliche Ziffern für größere Werte definieren. Der Wert einer Zahl in einem solchen System kann durch Hinzufügen der Ziffern in der Zahl ermittelt werden.

    Ein zusätzlicher Deskriptor namens `additive-symbols` muss mit mindestens einem _additiven Tuple_ angegeben werden, andernfalls ist die Zählerstilregel nicht gültig. Ein additives Tuple ist ähnlich wie ein zusammengesetztes Zählersymbol, das aus zwei Teilen besteht: einem normalen Zählersymbol und einem nicht negativen ganzzahligen Gewicht. Die additiven Tupel müssen in absteigender Reihenfolge ihrer Gewichte angegeben werden, andernfalls ist das System ungültig.

- `fixed` oder `fixed <integer>`
  - : Definiert eine endliche Menge von Symbolen, die einmal durch die im `symbols` Deskriptor bereitgestellte Liste von Symbolen iteriert wird. Sobald die angegebenen Symbole durchlaufen wurden, wird der Ersatz-Zählerstil verwendet. Dieser Schlüsselwortwert ist in Fällen nützlich, in denen die Zählerstilwerte endlich sind. Mindestens ein Symbol muss im `symbols` Deskriptor angegeben werden, andernfalls ist der Zählerstil nicht gültig. Das Schlüsselwort `fixed` kann durch einen optionalen {{cssxref("&lt;integer&gt;")}} Wert gefolgt werden. Wenn angegeben, gibt der `<integer>` Wert das Element in der Liste an, das das erste Symbol aus der Symbolleiste erhält. Wenn es nicht angegeben ist, ist der Standardwert der `integer` `1`, was dem ersten Element in der Liste das erste Symbol gibt.

- `extends`
  - : Erweitert den Algorithmus eines anderen browser- oder autorendefinierten Zählerstils, indem es erlaubt, einige Aspekte des erweiterten Zählerstils zu ändern. Alle nicht angegebenen Deskriptoren und ihre Werte werden aus dem angegebenen erweiterten Zählerstil geerbt. Wenn der Zählerstilname, der mit `extends` angegeben wurde, noch nicht definiert ist, wird der `decimal` Zählerstil standardmäßig erweitert.

    Es darf keinen `symbols` oder `additive-symbols` Deskriptor enthalten, andernfalls ist die Zählerstilregel ungültig. Wenn eine oder mehrere Zählerstildefinitionen einen Zyklus mit ihren `extends`-Werten bilden, behandelt der Browser alle beteiligten Zählerstile als Erweiterung des `decimal` Stils.

> [!NOTE]
> Der [`symbols`](/de/docs/Web/CSS/@counter-style/symbols) Deskriptor ist erforderlich, wenn der Wert `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` ist. Der [`additive-symbols`](/de/docs/Web/CSS/@counter-style/additive-symbols) Deskriptor ist erforderlich, wenn der Wert `additive` gesetzt ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Zyklischer Zähler

Der `cyclic` Wert durchläuft die Liste der Symbole und wiederholt die Liste bei Bedarf:

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

Der `fixed` Wert durchläuft die Liste der Symbole nur einmal und beginnt den Einzelzyklus an der Listenpositionsnummer, die durch den `integer` Wert angegeben wird:

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

Der `symbolic` Wert durchläuft die im `symbols` Deskriptor definierte Liste, verdoppelt und verdreifacht die Anzahl der Symbole für den zweiten und dritten Zyklus durch die Liste:

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

Das erste Symbol, das im `symbols` Deskriptor bereitgestellt wird, wird hier als `0` interpretiert.

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

Wie im folgenden Beispiel gezeigt, wenn Ziffern von `0` bis `9` als Symbole angegeben werden, wird dieser Zählerstil Symbole genauso wie der Dezimalzählerstil darstellen.

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

Dieses Beispiel rendert eine Liste mit römischen Zahlen. Beachten Sie, dass ein `range` angegeben ist. Dies liegt daran, dass bis zu einem Zählerwert von `3999` korrekte römische Zahlen erzeugt werden. Außerhalb dieses Bereichs basieren die restlichen Zählerdarstellungen auf dem `decimal` Stil, der als Fallback dient. Wenn Sie Zählerwerte als römische Zahlen darstellen müssen, könnten Sie entweder die vordefinierten Zählerstile `upper-roman` oder `lower-roman` verwenden, anstatt die Regel selbst zu erstellen.

#### HTML

Wir verwenden das [`start`](/de/docs/Web/HTML/Reference/Elements/ol#start) Attribut im {{HTMLElement("ol")}} Element, um zu zeigen, dass das Zählen nicht mit `1` beginnen muss. Zusätzlich verwenden wir das [`value`](/de/docs/Web/HTML/Reference/Elements/li#value) Attribut im fünften {{HTMLElement("li")}} Element, um zu demonstrieren, dass die von Ihnen mit `@counter-style` definierten Zähler genau wie native Zähler funktionieren.

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

### Erweiterung eines Zählers

Dieses Beispiel verwendet den Algorithmus, die Symbole und andere Eigenschaften von [`lower-alpha`](/de/docs/Web/CSS/list-style-type#lower-alpha), einem der mehreren nativen {{CSSXref("list-style-type")}} Zählerwerte, erweitert diesen jedoch, indem der Punkt (`'.'`) hinter der Zählerdarstellung entfernt und die Zeichen in Klammern gesetzt werden, wie in `(a)` und `(b)`.

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
