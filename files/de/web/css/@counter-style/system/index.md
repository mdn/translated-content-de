---
title: system
slug: Web/CSS/@counter-style/system
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

Der **`system`**-Deskriptor gibt den Algorithmus an, der zur Umwandlung des ganzzahligen Werts eines Zählers in eine Zeichenfolgen-Darstellung verwendet wird. Er wird in einem {{cssxref("@counter-style")}} verwendet, um das Verhalten des definierten Stils zu bestimmen.

Wenn der im `system`-Deskriptor angegebene Algorithmus nicht in der Lage ist, die Darstellung für einen bestimmten Zählerwert zu erstellen, wird die Darstellung dieses Werts mithilfe des bereitgestellten Fallback-Systems erstellt.

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

- Eines der Schlüsselwortwerte `cyclic`, `numeric`, `alphabetic`, `symbolic`, `additive` oder `fixed`.
- Der Schlüsselwortwert `fixed` zusammen mit einer ganzen Zahl.
- Der Schlüsselwortwert `extends` zusammen mit einem [`<counter-style-name>`](/de/docs/Web/CSS/@counter-style#counter-style-name)-Wert.

Die Werte umfassen:

- `cyclic`
  - : Durchläuft die in dem [`symbols`](/de/docs/Web/CSS/@counter-style/symbols)-Deskriptor bereitgestellte Liste von Symbolen. Sobald das Ende der Liste erreicht ist, wird der Zyklus wieder an den Anfang springen und von dort neu starten. Dieser Wert ist sowohl für grundlegende Aufzählungszeichenstile mit nur einem Symbol als auch für Stile mit mehreren Symbolen nützlich. Es muss mindestens ein Symbol im `symbols`-Deskriptor angegeben werden, andernfalls ist der Zählerstil nicht gültig.

- `numeric`
  - : Interpretiert die Zählersymbole als Ziffern in einem [Stellenwertsystem](https://de.wikipedia.org/wiki/Stellenwertsystem). Das numerische System ist dem oben beschriebenen `alphabetic`-System ähnlich. Der Hauptunterschied besteht darin, dass im `alphabetic`-System das erste im `symbols`-Deskriptor angegebene Zählersymbol als `1` interpretiert wird, das nächste als `2` usw. Im numerischen System wird jedoch das erste Zählersymbol als `0` interpretiert, das nächste als `1`, dann `2` usw.

    Es müssen mindestens zwei Zählersymbole im `symbols`-Deskriptor angegeben werden oder der Zählerstil ist nicht gültig.

- `alphabetic`
  - : Interpretiert die angegebenen Symbole als Ziffern in einem alphabetischen Nummerierungssystem. Wenn die Zeichen `"a"` bis `"z"` als Symbole in einem Zählerstil angegeben werden, erhält das `alphabetic`-System die ersten 26 Zählerdarstellungen als `"a"`, `"b"` bis `"z"`. Bis zu diesem Punkt gleicht das Verhalten dem des oben beschriebenen `symbolic`-Systems. Nach `"z"` wird es jedoch als `"aa"`, `"ab"`, `"ac"`… fortgesetzt.

    Der `symbols`-Deskriptor muss mindestens zwei Symbole enthalten oder der Zählerstil ist nicht gültig. Das erste im `symbols`-Deskriptor bereitgestellte Zählersymbol wird als `1` interpretiert, das nächste als `2` usw. Dieses System ist ebenfalls streng über positive Zählerwerte definiert.

- `symbolic`
  - : Durchläuft wiederholt die im `symbols`-Deskriptor bereitgestellte Liste von Symbolen, verdoppelt, verdreifacht usw. die Symbole bei jedem aufeinanderfolgenden Durchlauf durch die Liste. Wenn beispielsweise zwei Symbole "◽" und "◾" im `symbols`-Deskriptor angegeben sind, werden sie bei jedem aufeinanderfolgenden Durchlauf zu "◽◽" und "◾◾", dann zu "◽◽◽" und "◾◾◾" und so weiter in den folgenden Durchläufen. Mindestens ein Symbol muss im `symbols`-Deskriptor angegeben werden, andernfalls ist der Zählerstil nicht gültig. Dieses Zählersystem funktioniert nur für positive Zählerwerte.

- `additive`
  - : Wird zur Darstellung von "Wertzeichen"-Nummerierungssystemen verwendet, wie z.B. römische Zahlen, die die gleichen Ziffern nicht an verschiedenen Positionen verwenden, um unterschiedliche Werte zu erhalten, sondern zusätzliche Ziffern für größere Werte definieren. Der Wert einer Zahl in einem solchen System kann durch Addition der Ziffern in der Zahl ermittelt werden.

    Ein zusätzlicher Deskriptor namens `additive-symbols` muss mit mindestens einem _additiven Tupel_ angegeben werden, sonst ist die Zählerstilregel nicht gültig. Ein additives Tupel ist ähnlich einem zusammengesetzten Zählersymbol, das aus zwei Teilen besteht: einem normalen Zählersymbol und einem nicht-negativen ganzzahligen Gewicht. Die additiven Tupel müssen in absteigender Reihenfolge ihrer Gewichte angegeben werden, andernfalls ist das System ungültig.

- `fixed` oder `fixed <integer>`
  - : Definiert eine endliche Menge von Symbolen, die einmal durch die im `symbols`-Deskriptor bereitgestellte Liste von Symbolen iteriert. Sobald die angegebenen Symbole durchlaufen sind, wird der Fallback-Zählerstil verwendet. Dieser Schlüsselwortwert ist in Fällen nützlich, in denen die Zählerstilwerte endlich sind. Es muss mindestens ein Symbol im `symbols`-Deskriptor angegeben werden, andernfalls ist der Zählerstil nicht gültig. Dem `fixed`-Schlüsselwort kann ein optionaler {{cssxref("&lt;integer&gt;")}}-Wert folgen. Wenn angegeben, gibt der `<integer>`-Wert das Element in der Liste an, das das erste Symbol aus der Liste der Symbole erhält. Wenn weggelassen, ist der Standardwert von `integer` `1`, was dem ersten Element in der Liste das erste Symbol gibt.

- `extends`
  - : Erweitert den Algorithmus eines anderen, browser- oder autorenspezifisch definierten Zählerstils, indem es die Änderung einiger Aspekte des erweiterten Zählerstils ermöglicht. Alle nicht angegebenen Deskriptoren und ihre Werte werden vom angegebenen erweiterten Zählerstil geerbt. Wenn der mit `extends` angegebene Zählerstilname noch nicht definiert ist, wird der `decimal`-Zählerstil standardmäßig erweitert.

    Es darf keinen `symbols`- oder `additive-symbols`-Deskriptor enthalten, andernfalls ist die Zählerstilregel ungültig. Wenn eine oder mehrere Zählerstildefinitionen mit ihren `extends`-Werten einen Zyklus bilden, behandelt der Browser alle beteiligten Zählerstile als Erweiterung des `decimal`-Stils.

> [!NOTE]
> Der [`symbols`](/de/docs/Web/CSS/@counter-style/symbols)-Deskriptor ist erforderlich, wenn der Wert `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` ist. Der [`additive-symbols`](/de/docs/Web/CSS/@counter-style/additive-symbols)-Deskriptor ist erforderlich, wenn der `additive`-Wert festgelegt ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Zyklischer Zähler

Der `cyclic`-Wert iteriert durch die Liste der Symbole und wiederholt die Liste bei Bedarf:

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

Der `fixed`-Wert iteriert nur einmal durch die Liste der Symbole, beginnend den Einzelzyklus an der im `integer`-Wert angegebenen Listennummer:

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

Der `symbolic`-Wert durchläuft die im `symbols`-Deskriptor definierte Liste, verdoppelt und verdreifacht die Anzahl der Symbole bei den zweiten und dritten Durchläufen durch die Liste:

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

Das erste im `symbols`-Deskriptor angegebene Symbol wird hier als `0` interpretiert.

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

Wie im folgenden Beispiel gezeigt, wenn Ziffern von `0` bis `9` als Symbole angegeben sind, rendert dieser Zählerstil Symbole wie der dezimale Zählerstil.

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

Dieses Beispiel rendert eine Liste mit römischen Zahlen. Beachten Sie, dass ein `range` angegeben ist. Dies liegt daran, dass die Darstellung korrekte römische Zahlen nur bis zum Zählerwert von `3999` erzeugt. Außerhalb des Bereichs basieren die restlichen Zählerdarstellungen auf dem `decimal`-Stil, der der Fallback ist. Wenn Sie Zählerwerte als römische Zahlen darstellen müssen, könnten Sie entweder einen der vordefinierten Zählerstile `upper-roman` oder `lower-roman` verwenden, anstatt die Regel selbst zu erstellen.

#### HTML

Wir verwenden das [`start`](/de/docs/Web/HTML/Reference/Elements/ol#start)-Attribut auf dem {{HTMLElement("ol")}}-Element, um zu zeigen, dass das Zählen nicht bei `1` beginnen muss. Zudem verwenden wir das [`value`](/de/docs/Web/HTML/Reference/Elements/li#value)-Attribut auf dem fünften {{HTMLElement("li")}}-Element, um zu demonstrieren, dass die von Ihnen definierten Zähler mit `@counter-style` genauso funktionieren wie native Zähler.

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

### Erweitern eines Zählers

Dieses Beispiel verwendet den Algorithmus, die Symbole und andere Eigenschaften von [`lower-alpha`](/de/docs/Web/CSS/Reference/Properties/list-style-type#lower-alpha), einem der mehreren nativen {{CSSXref("list-style-type")}}-Zählerwerte, erweitert es jedoch, indem der Punkt (`'.'`) nach der Zählerdarstellung entfernt wird und die Zeichen in Klammern gesetzt werden, wie in `(a)` und `(b)`.

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

- Andere {{cssxref("@counter-style")}}-Deskriptoren, einschließlich {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}}, und {{cssxref("@counter-style/fallback", "fallback")}}
- {{cssxref("list-style")}}, {{cssxref("list-style-image")}}, {{cssxref("list-style-position")}}
- {{cssxref("symbols", "symbols()")}}, die funktionale Notation zur Erstellung anonymer Zählerstile.
