---
title: system
slug: Web/CSS/@counter-style/system
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Der **`system`** Deskriptor gibt den Algorithmus an, der zur Umwandlung des ganzzahligen Wertes eines Zählers in eine Zeichenfolgen-Darstellung verwendet wird. Er wird in einem {{cssxref("@counter-style")}} verwendet, um das Verhalten des definierten Stils zu bestimmen.

Falls der im `system` Deskriptor angegebene Algorithmus nicht in der Lage ist, die Darstellung für einen bestimmten Zählerwert zu erstellen, wird die Darstellung dieses Wertes mithilfe des bereitgestellten Fallback-Systems erstellt.

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
- Der Schlüsselwortwert `fixed` zusammen mit einem Integer.
- Der Schlüsselwortwert `extends` zusammen mit einem [`<counter-style-name>`](/de/docs/Web/CSS/@counter-style#counter-style-name) Wert.

Die Werte umfassen:

- `cyclic`

  - : Durchläuft die im [`symbols`](/de/docs/Web/CSS/@counter-style/symbols) Deskriptor angegeben Liste von Symbolen. Sobald das Ende der Liste erreicht ist, wird der Zyklus zum Anfang zurückkehren und von vorne beginnen. Dieser Wert ist sowohl für grundlegende Aufzählungsstile mit nur einem Symbol als auch für Stile mit mehreren Symbolen nützlich. Mindestens ein Symbol muss im `symbols` Deskriptor angegeben sein, andernfalls ist der Zählerstil nicht gültig.

- `numeric`

  - : Interpretiert die Zählersymbole als Ziffern in einem [stellenwertbasierten Zahlensystem](https://en.wikipedia.org/wiki/Positional_notation). Das numerische System ähnelt dem `alphabetic` System, das oben beschrieben wurde. Der Hauptunterschied besteht darin, dass im `alphabetic` System das erste im `symbols` Deskriptor angegebene Zählersymbol als `1` interpretiert wird, das nächste als `2` usw. Im numerischen System hingegen wird das erste Zählersymbol als 0, das nächste als `1` und so weiter interpretiert.

    Es müssen mindestens zwei Zählersymbole im `symbols` Deskriptor angegeben werden, sonst ist der Zählerstil nicht gültig.

- `alphabetic`

  - : Interpretiert die angegebenen Symbole als Ziffern in einem alphabetischen Zahlensystem. Wenn die Zeichen `"a"` bis `"z"` als Symbole in einem Zählerstil angegeben werden und das `alphabetic` System verwendet wird, dann sind die ersten 26 Zählerdarstellungen `"a"`, `"b"` bis `"z"`. Bis zu diesem Punkt ist das Verhalten dasselbe wie beim `symbolic` System, das oben beschrieben wurde. Nach `"z"` geht es jedoch weiter mit `"aa"`, `"ab"`, `"ac"`…

    Der `symbols` Deskriptor muss mindestens zwei Symbole enthalten, sonst ist der Zählerstil nicht gültig. Das erste im `symbols` Deskriptor angegebene Zählersymbol wird als `1` interpretiert, das nächste als `2` usw. Dieses System ist ebenfalls strikt auf positive Zählerwerte definiert.

- `symbolic`

  - : Durchläuft die im `symbols` Deskriptor angegebene Liste von Symbolen wiederholt und verdoppelt, verdreifacht usw. die Symbole bei jedem weiteren Durchlauf durch die Liste. Beispielsweise werden, wenn zwei Symbole "◽" und "◾" im `symbols` Deskriptor angegeben sind, diese bei jedem weiteren Durchlauf zu "◽◽" und "◾◾", dann zu "◽◽◽" und "◾◾◾" usw. mindestens ein Symbol muss im `symbols` Deskriptor angegeben sein, sonst ist der Zählerstil nicht gültig. Dieses Zählersystem funktioniert nur für positive Zählerwerte.

- `additive`

  - : Wird zur Darstellung von "Vorzeichen-Wert"-Zahlensystemen verwendet, wie z.B. römischen Zahlen, bei denen anstatt Ziffern in verschiedenen Positionen zu wiederholen, um unterschiedliche Werte zu erhalten, zusätzliche Ziffern für größere Werte definiert werden. Der Wert einer Zahl in einem solchen System kann durch Addition der Ziffern in der Zahl ermittelt werden.

    Ein zusätzlicher Deskriptor namens `additive-symbols` muss mit mindestens einem _additiven Tupel_ angegeben werden, sonst ist die Regel für den Zählerstil nicht gültig. Ein additives Tupel ähnelt einem zusammengesetzten Zählersymbol, das aus zwei Teilen besteht: einem normalen Zählersymbol und einem nicht-negativen Gewichts-Integer. Die additiven Tupel müssen in absteigender Reihenfolge ihres Gewichts angegeben werden, sonst ist das System ungültig.

- `fixed` oder `fixed <integer>`

  - : Definiert eine endliche Menge von Symbolen, die einmal durch die im `symbols` Deskriptor angegebene Liste iteriert werden. Nachdem die angegebenen Symbole durchlaufen wurden, wird der Fallback-Zählerstil verwendet. Dieser Schlüsselwortwert ist nützlich, wenn die Zählerstilwerte endlich sind. Mindestens ein Symbol muss im `symbols` Deskriptor angegeben werden, andernfalls ist der Zählerstil nicht gültig. Das Schlüsselwort `fixed` kann von einem optionalen {{cssxref("&lt;integer&gt;")}} Wert gefolgt werden. Falls angegeben, gibt der `<integer>` Wert das Element in der Liste an, das das erste Symbol aus der Liste der Symbole erhält. Wenn weggelassen, ist der Standardwert von `integer` `1`, was dem ersten Element in der Liste das erste Symbol gibt.

- `extends`

  - : Erweitert den Algorithmus eines anderen browser- oder autorendefinierten Zählerstils, indem es die Änderung einiger Aspekte des erweiterten Zählerstils ermöglicht. Alle nicht angegebenen Deskriptoren und ihre Werte werden von dem angegebenen erweiterten Zählerstil geerbt. Ist der mit `extends` angegebene Zählerstilname noch nicht definiert, wird standardmäßig der `decimal` Zählerstil erweitert.

    Er darf keinen `symbols` oder `additive-symbols` Deskriptor enthalten, andernfalls ist die Regel für den Zählerstil ungültig. Wenn eine oder mehrere Zählerstildefinitionen einen Zyklus mit ihren `extends` Werten bilden, behandelt der Browser alle beteiligten Zählerstile als Erweiterung des `decimal` Stils.

> [!NOTE]
> Der [`symbols`](/de/docs/Web/CSS/@counter-style/symbols) Deskriptor ist erforderlich, wenn der Wert `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` ist. Der [`additive-symbols`](/de/docs/Web/CSS/@counter-style/additive-symbols) Deskriptor ist erforderlich, wenn der `additive` Wert festgelegt ist.

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

Der `fixed` Wert durchläuft die Liste der Symbole nur einmal, wobei der Einzelzyklus bei der durch den `integer` Wert angegebenen Listennummer beginnt:

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

Wie im folgenden Beispiel gezeigt, werden, wenn Ziffern von `0` bis `9` als Symbole angegeben sind, diese Zählerstil-Symbole ebenso dargestellt wie der dezimale Zählerstil.

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

Dieses Beispiel rendert eine Liste mit römischen Zahlen. Beachten Sie, dass ein `range` angegeben ist. Dies liegt daran, dass die Darstellung nur bis zum Zählerwert von `3999` korrekte römische Zahlen produziert. Außerhalb des Bereichs basieren die restlichen Zählerdarstellungen auf dem `decimal` Stil, der als Fallback dient. Wenn Zählerwerte als römische Zahlen dargestellt werden müssen, können Sie entweder einen der vordefinierten Zählerstile, `upper-roman` oder `lower-roman`, verwenden, anstatt die Regel selbst zu erstellen.

#### HTML

Wir verwenden das [`start`](/de/docs/Web/HTML/Element/ol#start) Attribut auf dem {{HTMLElement("ol")}} Element, um zu zeigen, dass das Zählen nicht bei `1` beginnen muss. Zusätzlich verwenden wir das [`value`](/de/docs/Web/HTML/Element/li#value) Attribut auf dem fünften {{HTMLElement("li")}} Element, um zu zeigen, dass die von Ihnen definierten Zähler mit `@counter-style` sich genau wie native Zähler verhalten.

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

Dieses Beispiel verwendet den Algorithmus, die Symbole und andere Eigenschaften von [`lower-alpha`](/de/docs/Web/CSS/list-style-type#lower-alpha), einem der mehreren nativen {{CSSXref("list-style-type")}} Zählerwerte, erweitert sie jedoch durch Entfernen des Punktes (`'.'`) nach der Zählerdarstellung und Einklammern der Zeichen, wie in `(a)` und `(b)`.

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
