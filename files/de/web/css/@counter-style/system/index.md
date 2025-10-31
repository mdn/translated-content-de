---
title: system
slug: Web/CSS/@counter-style/system
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Der **`system`** Deskriptor gibt den Algorithmus an, der verwendet wird, um den ganzzahligen Wert eines Zählers in eine String-Repräsentation umzuwandeln. Er wird in einem {{cssxref("@counter-style")}} verwendet, um das Verhalten des definierten Stils festzulegen.

Wenn der im `system` Deskriptor angegebene Algorithmus nicht in der Lage ist, die Darstellung für einen bestimmten Zählerwert zu konstruieren, wird die Darstellung dieses Wertes mithilfe des bereitgestellten Fallback-Systems erstellt.

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
  - : Durchläuft die Liste der im [`symbols`](/de/docs/Web/CSS/@counter-style/symbols) Deskriptor angegebenen Symbole. Sobald das Ende der Liste erreicht ist, kehrt der Zyklus zum Anfang zurück und beginnt von neuem. Dieser Wert ist sowohl für grundlegende Aufzählungszeichenstile mit nur einem Symbol als auch für Stile mit mehreren Symbolen nützlich. Mindestens ein Symbol muss im `symbols` Deskriptor angegeben werden, andernfalls ist der Zählerstil nicht gültig.

- `numeric`
  - : Interpretiert die Zählersymbole als Ziffern in einem [Stellenwertsystem](https://en.wikipedia.org/wiki/Positional_notation). Das numerische System ähnelt dem oben beschriebenen `alphabetic` System. Der Hauptunterschied besteht darin, dass im `alphabetic` System das erste im `symbols` Deskriptor angegebene Zählersymbol als `1`, das nächste als `2` usw. interpretiert wird. Im numerischen System wird jedoch das erste Zählersymbol als 0, das nächste als `1`, dann `2` usw. interpretiert.

    Es müssen mindestens zwei Zählersymbole im `symbols` Deskriptor angegeben werden, andernfalls ist der Zählerstil nicht gültig.

- `alphabetic`
  - : Interpretiert die angegebenen Symbole als Ziffern eines alphabetischen Nummerierungssystems. Wenn die Zeichen `"a"` bis `"z"` als Symbole in einem Zählerstil angegeben sind, wird im `alphabetic` System die ersten 26 Zählerdarstellungen als `"a"`, `"b"` bis `"z"` dargestellt. Bis zu diesem Punkt entspricht das Verhalten dem des oben beschriebenen `symbolic` Systems. Nach `"z"` geht es jedoch mit `"aa"`, `"ab"`, `"ac"` weiter…

    Der `symbols` Deskriptor muss mindestens zwei Symbole enthalten, andernfalls ist der Zählerstil nicht gültig. Das erste im `symbols` Deskriptor angegebene Zählersymbol wird als `1` interpretiert, das nächste als `2` usw. Dieses System ist auch streng für positive Zählerwerte definiert.

- `symbolic`
  - : Durchläuft die Symbole, die in der `symbols` Deskriptorliste angegeben sind, wiederholt, indem die Symbole bei jedem weiteren Durchlauf der Liste verdoppelt, verdreifacht usw. werden. Wenn zum Beispiel zwei Symbole "◽" und "◾" im `symbols` Deskriptor angegeben sind, werden diese bei jedem weiteren Durchlauf zu "◽◽" und "◾◾", dann zu "◽◽◽" und "◾◾◽◽", und so weiter in den folgenden Durchläufen. Mindestens ein Symbol muss im `symbols` Deskriptor angegeben werden, sonst ist der Zählerstil nicht gültig. Dieses Zählersystem funktioniert nur für positive Zählerwerte.

- `additive`
  - : Wird verwendet, um "Zeichenwert"-Nummerierungssysteme zu repräsentieren, wie z. B. römische Ziffern, die nicht verschiedene Stellen zur Erzielung verschiedener Werte wiederverwenden, sondern zusätzliche Ziffern für größere Werte definieren. Der Wert einer Zahl in einem solchen System kann durch Addieren der Ziffern in der Zahl ermittelt werden.

    Ein zusätzlicher Deskriptor mit dem Namen `additive-symbols` muss mit mindestens einem _additiven Tupel_ angegeben werden, andernfalls ist die Regel für den Zählerstil ungültig. Ein additives Tupel ähnelt einem zusammengesetzten Zählersymbol, das aus zwei Teilen besteht: einem normalen Zählersymbol und einem nicht-negativen ganzzahligen Gewicht. Die additiven Tupel müssen in absteigender Reihenfolge ihrer Gewichte angegeben werden, ansonsten ist das System ungültig.

- `fixed` oder `fixed <integer>`
  - : Definiert eine endliche Menge von Symbolen, die einmal durch die Liste der im `symbols` Deskriptor angegebenen Symbole iteriert. Sobald die angegebenen Symbole durchlaufen wurden, wird der Fallback-Zählerstil verwendet. Dieser Schlüsselwortwert ist nützlich in Fällen, in denen die Zählerstilwerte endlich sind. Mindestens ein Symbol muss im `symbols` Deskriptor angegeben werden, andernfalls ist der Zählerstil ungültig. Dem `fixed` Schlüsselwort kann ein optionaler {{cssxref("&lt;integer&gt;")}} Wert folgen. Wenn angegeben, gibt der `<integer>` Wert das Element in der Liste an, das das erste Symbol aus der Symbolliste erhält. Wenn weggelassen, lautet der Standardwert `integer` `1`, was dem ersten Element in der Liste das erste Symbol gibt.

- `extends`
  - : Erweitert den Algorithmus eines anderen vom Browser oder Autor definierten Zählerstils, indem die Änderung einiger Aspekte des erweiterten Zählerstils ermöglicht wird. Alle nicht angegebenen Deskriptoren und deren Werte werden vom angegebenen erweiterten Zählerstil geerbt. Wenn der mit `extends` angegebene Zählerstilname noch nicht definiert ist, wird der `decimal` Zählerstil standardmäßig erweitert.

    Es darf keinen `symbols` oder `additive-symbols` Deskriptor enthalten, sonst ist die Regel für den Zählerstil ungültig. Wenn eine oder mehrere Zählerstildefinitionen mit ihren `extends` Werten einen Zyklus bilden, behandelt der Browser alle beteiligten Zählerstile als erweiterte `decimal` Stile.

> [!NOTE]
> Der [`symbols`](/de/docs/Web/CSS/@counter-style/symbols) Deskriptor ist erforderlich, wenn der Wert `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` ist. Der [`additive-symbols`](/de/docs/Web/CSS/@counter-style/additive-symbols) Deskriptor ist erforderlich, wenn der `additive` Wert gesetzt ist.

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

Der `fixed` Wert durchläuft die Liste der Symbole nur einmal und beginnt den einzigen Zyklus an der durch den `integer` Wert angegebenen Listenelementnummer:

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

Wie im folgenden Beispiel gezeigt, wenn Ziffern von `0` bis `9` als Symbole angegeben sind, rendert dieser Zählerstil Symbole genauso wie der dezimale Zählerstil.

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

Dieses Beispiel rendert eine Liste mit römischen Ziffern. Beachten Sie, dass ein `range` angegeben ist. Das liegt daran, dass die Darstellung korrekte römische Ziffern nur bis zum Zählerwert von `3999` erzeugt. Sobald der Bereich verlassen wird, basieren die übrigen Zählerdarstellungen auf dem `decimal` Stil, der das Fallback ist. Wenn Sie Zählerwerte als römische Ziffern darstellen müssen, können Sie entweder einen der vordefinierten Zählerstile `upper-roman` oder `lower-roman` verwenden, anstatt die Regel selbst zu erstellen.

#### HTML

Wir verwenden das [`start`](/de/docs/Web/HTML/Reference/Elements/ol#start) Attribut auf dem {{HTMLElement("ol")}} Element, um zu demonstrieren, dass die Zählung nicht bei `1` beginnen muss. Zusätzlich verwenden wir das [`value`](/de/docs/Web/HTML/Reference/Elements/li#value) Attribut auf dem fünften {{HTMLElement("li")}} Element, um zu zeigen, dass die von Ihnen definierten Zähler, die `@counter-style` verwenden, sich genauso verhalten wie native Zähler.

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

Dieses Beispiel verwendet den Algorithmus, die Symbole und andere Eigenschaften von [`lower-alpha`](/de/docs/Web/CSS/Reference/Properties/list-style-type#lower-alpha), einem der mehreren nativen {{CSSXref("list-style-type")}} Zählerwerte, erweitert es jedoch, indem der Punkt (`'.'`) nach der Zählerdarstellung entfernt und die Zeichen in Klammern gesetzt werden, wie in `(a)` und `(b)`.

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
- {{cssxref("symbols", "symbols()")}}, die funktionale Notation, die anonyme Zählerstile erstellt.
