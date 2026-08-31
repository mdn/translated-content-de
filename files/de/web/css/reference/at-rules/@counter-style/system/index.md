---
title: "`system` CSS At-Regel-Descriptor"
short-title: system
slug: Web/CSS/Reference/At-rules/@counter-style/system
l10n:
  sourceCommit: 61f27416f7cfa79bd102042eeb3e44fe629d9c95
---

Der **`system`**-Deskriptor legt den Algorithmus fest, der verwendet wird, um den Ganzzahlwert eines Zählers in eine Zeichenfolgenrepräsentation zu konvertieren. Er wird in einer {{cssxref("@counter-style")}} verwendet, um das Verhalten des definierten Stils festzulegen.

Wenn der im `system`-Deskriptor angegebene Algorithmus nicht in der Lage ist, die Darstellung für einen bestimmten Zählerwert zu konstruieren, wird die Darstellung dieses Wertes mit dem bereitgestellten Fallback-System erstellt.

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
- Der Schlüsselwortwert `extends` zusammen mit einem [`<counter-style-name>`](/de/docs/Web/CSS/Reference/At-rules/@counter-style#counter-style-name) Wert.

Die Werte umfassen:

- `cyclic`
  - : Durchläuft die Liste der im [`symbols`](/de/docs/Web/CSS/Reference/At-rules/@counter-style/symbols)-Deskriptor angegebenen Symbole. Sobald das Ende der Liste erreicht ist, wird der Zyklus wieder am Anfang beginnen. Dieser Wert ist sowohl für grundlegende Aufzählungszeichen mit nur einem Symbol als auch für Stile mit mehreren Symbolen nützlich. Es muss mindestens ein Symbol im `symbols`-Deskriptor angegeben werden, andernfalls ist der Zählerstil ungültig.

- `numeric`
  - : Interpretiert die Zählersymbole als Ziffern in einem [stellenwertbasierten Nummerierungssystem](https://en.wikipedia.org/wiki/Positional_notation). Das numerische System ist dem oben beschriebenen `alphabetic`-System ähnlich. Der Hauptunterschied besteht darin, dass im `alphabetic`-System das erste Zählersymbol, das im `symbols`-Deskriptor angegeben wird, als `1` interpretiert wird, das nächste als `2` und so weiter. Im numerischen System hingegen wird das erste Zählersymbol als `0` interpretiert, das nächste als `1`, dann `2` und so weiter.

    Im `symbols`-Deskriptor müssen mindestens zwei Zählersymbole angegeben werden, andernfalls ist der Zählerstil ungültig.

- `alphabetic`
  - : Interpretiert die angegebenen Symbole als Ziffern in ein alphabetisches Nummerierungssystem. Wenn die Zeichen `"a"` bis `"z"` als Symbole in einem Zählerstil mit dem `alphabetic`-System angegeben sind, dann werden die ersten 26 Zählerdarstellungen `"a"`, `"b"` bis `"z"` sein. Bis zu diesem Punkt ist das Verhalten dasselbe wie das des `symbolic`-Systems, das oben beschrieben wurde. Nach `"z"` geht es jedoch weiter mit `"aa"`, `"ab"`, `"ac"`…

    Der `symbols`-Deskriptor muss mindestens zwei Symbole enthalten, andernfalls ist der Zählerstil ungültig. Das erste Zählersymbol, das im `symbols`-Deskriptor angegeben wird, wird als `1` interpretiert, das nächste als `2` und so weiter. Dieses System ist auch strikt über positive Zählerwerte definiert.

- `symbolic`
  - : Durchläuft die Symbole, die in der `symbols`-Deskriptorliste angegeben sind, wiederholt, verdoppelt, verdreifacht usw. die Symbole bei jedem nachfolgenden Durchlauf durch die Liste. Wenn beispielsweise zwei Symbole "◽" und "◾" im `symbols`-Deskriptor angegeben sind, werden sie bei jedem nachfolgenden Durchlauf "◽◽" und "◾◾", dann "◽◽◽" und "◾◾◾" und so weiter in nachfolgenden Durchläufen. Im `symbols`-Deskriptor muss mindestens ein Symbol angegeben werden, andernfalls ist der Zählerstil ungültig. Dieses Zählersystem funktioniert nur für positive Zählerwerte.

- `additive`
  - : Wird verwendet, um "Zeichenwert"-Nummerierungssysteme darzustellen, wie z.B. römische Zahlen, die keine Ziffern in verschiedenen Positionen wiederverwenden, um unterschiedliche Werte zu erhalten, sondern zusätzliche Ziffern für größere Werte definieren. Der Wert einer Zahl in einem solchen System kann durch das Addieren der Ziffern in der Zahl ermittelt werden.

    Ein zusätzlicher Deskriptor namens `additive-symbols` muss mit mindestens einem _additive tuple_ angegeben werden, andernfalls ist die Zählerstilregel ungültig. Ein additive tuple ist ähnlich wie ein zusammengesetztes Zählersymbol aus zwei Teilen: einem normalen Zählersymbol und einem nicht-negativen ganzzahligen Gewicht. Die additive tuples müssen in absteigender Reihenfolge ihrer Gewichte angegeben werden, andernfalls ist das System ungültig.

- `fixed` oder `fixed <integer>`
  - : Definiert eine endliche Menge an Symbolen und durchläuft einmalig die Liste der im `symbols`-Deskriptor angegebenen Symbole. Nachdem die angegebenen Symbole durchlaufen wurden, wird der Fallback-Zählerstil verwendet. Dieser Schlüsselwortwert ist in Fällen nützlich, in denen die Zählerstilwerte endlich sind. Im `symbols`-Deskriptor muss mindestens ein Symbol angegeben werden, andernfalls ist der Zählerstil ungültig. Dem `fixed`-Schlüsselwort kann ein optionaler {{cssxref("&lt;integer&gt;")}}-Wert folgen. Falls angegeben, gibt der `<integer>`-Wert das Element in der Liste an, das das erste Symbol aus der Symboliste erhält. Wenn weggelassen, ist der Standardwert für `integer` `1`, was dem ersten Element in der Liste das erste Symbol gibt.

- `extends`
  - : Erweitert den Algorithmus eines anderen browser- oder autorendefinierten Zählerstils, indem einige Aspekte des erweiterten Zählerstils geändert werden dürfen. Jegliche nicht angegebenen Deskriptoren und ihre Werte werden von dem angegebenen erweiterten Zählerstil geerbt. Wenn der mit `extends` angegebene Zählerstilname noch nicht definiert ist, wird standardmäßig der `decimal` Zählerstil erweitert.

    Es darf keinen `symbols`- oder `additive-symbols`-Deskriptor enthalten, andernfalls ist die Zählerstilregel ungültig. Wenn eine oder mehrere Zählerstildefinitionen mit ihren `extends`-Werten einen Zyklus bilden, behandelt der Browser alle teilnehmenden Zählerstile als Erweiterung des `decimal`-Stils.

> [!NOTE]
> Der [`symbols`](/de/docs/Web/CSS/Reference/At-rules/@counter-style/symbols)-Deskriptor ist erforderlich, wenn der Wert `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` ist. Der [`additive-symbols`](/de/docs/Web/CSS/Reference/At-rules/@counter-style/additive-symbols)-Deskriptor ist erforderlich, wenn der `additive`-Wert gesetzt ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Zyklischer Zähler

Der `cyclic`-Wert durchläuft die Liste der Symbole und wiederholt die Liste bei Bedarf:

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

Der `fixed`-Wert durchläuft die Liste der Symbole nur einmal und beginnt den einzigen Zyklus bei der durch den `integer`-Wert angegebenen Listennummer:

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

Der `symbolic`-Wert durchläuft die im `symbols`-Deskriptor definierte Liste, verdoppelt und verdreifacht die Anzahl der Symbole für den zweiten und dritten Durchlauf durch die Liste entsprechend:

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

Das erste Symbol, das im `symbols`-Deskriptor angegeben wird, wird hier als `0` interpretiert.

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

Wie im folgenden Beispiel gezeigt, wenn Ziffern von `0` bis `9` als Symbole angegeben werden, wird dieser Zählerstil Symbole genauso anzeigen wie der dezimale Zählerstil.

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

Dieses Beispiel rendert eine Liste mit römischen Zahlen. Beachten Sie, dass ein `range` angegeben ist. Dies ist, weil die Darstellung nur bis zum Zählerwert von `3999` korrekte römische Zahlen produzieren wird. Sobald der Bereich überschritten ist, basieren die restlichen Zählerdarstellungen auf dem `decimal`-Stil, welcher der Fallback ist. Wenn Sie Zählerwerte als römische Zahlen darstellen müssen, könnten Sie entweder einen der vordefinierten Zählerstile `upper-roman` oder `lower-roman` verwenden, anstatt die Regel selbst neu zu erstellen.

#### HTML

Wir verwenden das [`start`](/de/docs/Web/HTML/Reference/Elements/ol#start)-Attribut auf dem {{HTMLElement("ol")}}-Element, um zu demonstrieren, dass die Zählung nicht bei `1` beginnen muss. Zusätzlich verwenden wir das [`value`](/de/docs/Web/HTML/Reference/Elements/li#value)-Attribut auf dem fünften {{HTMLElement("li")}}-Element, um zu demonstrieren, dass die Zähler, die Sie mit `@counter-style` definieren, sich genauso verhalten wie native Zähler.

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

Dieses Beispiel verwendet den Algorithmus, die Symbole und andere Eigenschaften von [`lower-alpha`](/de/docs/Web/CSS/Reference/Properties/list-style-type#lower-alpha), einem der mehreren nativen {{CSSXref("list-style-type")}}-Zählerwerte, erweitert ihn jedoch, indem der Punkt (`'.'`) nach der Zählerdarstellung entfernt wird und die Zeichen in Klammern gesetzt werden, wie `(a)` und `(b)`.

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

- Weitere {{cssxref("@counter-style")}}-Deskriptoren, einschließlich {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}}, und {{cssxref("@counter-style/fallback", "fallback")}}
- {{cssxref("list-style")}}, {{cssxref("list-style-image")}}, {{cssxref("list-style-position")}}
- {{cssxref("symbols()")}}, die funktionale Notation zur Erstellung anonymer Zählerstile.
