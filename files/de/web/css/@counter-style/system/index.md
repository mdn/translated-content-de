---
title: system
slug: Web/CSS/@counter-style/system
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Der **`system`**-Deskriptor spezifiziert den Algorithmus, der zur Umwandlung des ganzzahligen Wertes eines Zählers in eine Zeichenfolgenrepräsentation verwendet wird. Er wird in einer {{cssxref("@counter-style")}} verwendet, um das Verhalten des definierten Stils zu bestimmen.

Wenn der im `system`-Deskriptor angegebene Algorithmus nicht in der Lage ist, die Darstellung für einen bestimmten Zählerwert zu konstruieren, wird die Darstellung dieses Wertes mit dem bereitgestellten Fallback-System erstellt.

## Syntax

```css
/* Schlüsselwortwerte */
system: cyclic;
system: numeric;
system: alphabetic;
system: symbolic;
system: additive;
system: fixed;

/* Andere Werte */
system: fixed 3;
system: extends decimal;
system: extends circled-letters;
```

## Werte

Dies kann eine von drei Formen annehmen:

- Einer der Schlüsselwortwerte `cyclic`, `numeric`, `alphabetic`, `symbolic`, `additive` oder `fixed`.
- Der Schlüsselwortwert `fixed` zusammen mit einer Ganzzahl.
- Der Schlüsselwortwert `extends` zusammen mit einem [`<counter-style-name>`](/de/docs/Web/CSS/@counter-style#counter-style-name)-Wert.

Die Werte umfassen:

- `cyclic`

  - : Durchläuft die im [`symbols`](/de/docs/Web/CSS/@counter-style/symbols)-Deskriptor bereitgestellte Liste von Symbolen. Sobald das Ende der Liste erreicht ist, beginnt der Zyklus von vorne. Dieser Wert ist sowohl für grundlegende Aufzählungsstile mit nur einem Symbol als auch für Stile mit mehreren Symbolen nützlich. Mindestens ein Symbol muss im `symbols`-Deskriptor angegeben werden, andernfalls ist der Zählerstil ungültig.

- `numeric`

  - : Interpretiert die Zählersymbole als Ziffern in einem [stelligem Zahlensystem](https://en.wikipedia.org/wiki/Positional_notation). Das numerische System ähnelt dem `alphabetic`-System, wie oben beschrieben. Der Hauptunterschied besteht darin, dass im `alphabetic`-System das erste im `symbols`-Deskriptor angegebene Zählersymbol als `1`, das nächste als `2` usw. interpretiert wird. Im numerischen System hingegen wird das erste Zählersymbol als 0, das nächste als `1`, dann `2` usw. interpretiert.

    Mindestens zwei Zählersymbole müssen im `symbols`-Deskriptor angegeben werden, sonst ist der Zählerstil ungültig.

- `alphabetic`

  - : Interpretiert die angegebenen Symbole als Ziffern in einem alphabetischen Zahlensystem. Wenn die Zeichen `"a"` bis `"z"` als Symbole in einem Zählerstil zusammen mit dem `alphabetic`-System angegeben werden, sind die ersten 26 Zählerdarstellungen `"a"`, `"b"` bis `"z"`. Bis zu diesem Punkt verhält sich das System ähnlich dem `symbolic`-System, das oben beschrieben ist. Nach `"z"` geht es jedoch als `"aa"`, `"ab"`, `"ac"`… weiter.

    Der `symbols`-Deskriptor muss mindestens zwei Symbole enthalten, andernfalls ist der Zählerstil ungültig. Das erste im `symbols`-Deskriptor angegebene Zählersymbol wird als `1`, das nächste als `2` usw. interpretiert. Dieses System ist streng für positive Zählerwerte definiert.

- `symbolic`

  - : Durchläuft wiederholt die im `symbols`-Deskriptor bereitgestellte Symbolliste, verdoppelt, verdreifacht usw. die Symbole bei jedem nachfolgenden Durchlauf der Liste. Zum Beispiel, wenn zwei Symbole "◽" und "◾" im `symbols`-Deskriptor angegeben sind, werden sie bei jedem nachfolgenden Durchlauf zu "◽◽" und "◾◾", dann zu "◽◽◽" und "◾◾◾", und so weiter in den folgenden Durchläufen. Mindestens ein Symbol muss im `symbols`-Deskriptor angegeben werden, andernfalls ist der Zählerstil ungültig. Dieses Zählsystem funktioniert nur für positive Zählerwerte.

- `additive`

  - : Wird verwendet, um "Wert-Zahlen"-Systeme zu vertreten, wie römische Ziffern, bei denen statt Ziffern in unterschiedlichen Positionen erneut zu verwenden, zusätzliche Ziffern für größere Werte definiert werden. Der Wert einer Zahl in einem solchen System kann durch Hinzufügen der Ziffern in der Zahl ermittelt werden.

    Ein zusätzlicher Deskriptor namens `additive-symbols` muss mit mindestens einem _additiven Tupel_ spezifiziert werden, andernfalls ist die Zählerstil-Regel ungültig. Ein additives Tupel ähnelt einem zusammengesetzten Zählersymbol, das aus zwei Teilen besteht: einem normalen Zählersymbol und einem nicht-negativen ganzzahligen Gewicht. Die additiven Tupel müssen in absteigender Reihenfolge ihrer Gewichte angegeben werden, sonst ist das System ungültig.

- `fixed` oder `fixed <integer>`

  - : Definiert eine endliche Menge von Symbolen, die einmal durch die im `symbols`-Deskriptor bereitgestellte Liste von Symbolen iteriert werden. Sobald die angegebenen Symbole durchlaufen wurden, wird der Fallback-Zählerstil verwendet. Dieser Schlüsselwortwert ist nützlich in Fällen, in denen die Zählerstilwerte endlich sind. Mindestens ein Symbol muss im `symbols`-Deskriptor angegeben werden, andernfalls ist der Zählerstil ungültig. Das `fixed`-Schlüsselwort kann von einem optionalen {{cssxref("&lt;integer&gt;")}}-Wert gefolgt werden. Wenn angegeben, zeigt der `<integer>`-Wert das Element in der Liste an, das das erste Symbol aus der Liste der Symbole erhält. Wenn weggelassen, beträgt der Standardwert für `integer` `1`, wodurch das erste Element in der Liste das erste Symbol erhält.

- `extends`

  - : Erweitert den Algorithmus eines anderen vom Browser oder Autor definierten Zählerstils, indem es die Änderung einiger Aspekte des erweiterten Zählerstils ermöglicht. Alle nicht spezifizierten Deskriptoren und deren Werte werden aus dem angegebenen erweiterten Zählerstil übernommen. Wenn der mit `extends` angegebene Zählerstilname noch nicht definiert ist, wird standardmäßig der `decimal`-Zählerstil erweitert.

    Es darf keinen `symbols`- oder `additive-symbols`-Deskriptor enthalten, sonst ist die Zählerstilregel ungültig. Wenn eine oder mehrere Zählerstildefinitionen einen Zyklus mit ihren `extends`-Werten bilden, behandelt der Browser alle beteiligten Zählerstile als von dem `decimal`-Stil abgeleitet.

> [!NOTE]
> Der [`symbols`](/de/docs/Web/CSS/@counter-style/symbols)-Deskriptor ist erforderlich, wenn der Wert `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` ist. Der [`additive-symbols`](/de/docs/Web/CSS/@counter-style/additive-symbols)-Deskriptor ist erforderlich, wenn der `additive`-Wert gesetzt ist.

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

Der `fixed`-Wert durchläuft die Liste der Symbole nur einmal, beginnend mit dem durch den `integer`-Wert angegebenen Listenelement:

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

Der `symbolic`-Wert durchläuft die im `symbols`-Deskriptor definierte Liste, verdoppelt und verdreifacht die Anzahl der Symbole in der zweiten und dritten Runde durch die Liste:

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

Wie im folgenden Beispiel gezeigt, wenn Ziffern von `0` bis `9` als Symbole angegeben sind, wird dieser Zählerstil Symbole genauso wie der dezimale Zählerstil darstellen.

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

Dieses Beispiel gibt eine Liste mit römischen Zahlen wieder. Beachten Sie, dass ein `range` angegeben wird. Dies liegt daran, dass die Darstellung nur bis zum Zählerwert `3999` korrekte römische Zahlen liefert. Außerhalb des Bereichs basieren die restlichen Zählerdarstellungen auf dem `decimal`-Stil, der als Rückfall dient. Wenn Sie Zählerwerte als römische Zahlen darstellen müssen, können Sie entweder einen der vordefinierten Zählerstile `upper-roman` oder `lower-roman` verwenden, anstatt die Regel selbst zu erstellen.

#### HTML

Wir verwenden das [`start`](/de/docs/Web/HTML/Element/ol#start)-Attribut am {{HTMLElement("ol")}}-Element, um zu demonstrieren, dass das Zählen nicht bei `1` beginnen muss. Zusätzlich verwenden wir das [`value`](/de/docs/Web/HTML/Element/li#value)-Attribut am fünften {{HTMLElement("li")}}-Element, um zu demonstrieren, dass die mit `@counter-style` definierten Zähler genauso funktionieren wie native Zähler.

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

Dieses Beispiel verwendet den Algorithmus, die Symbole und andere Eigenschaften von [`lower-alpha`](/de/docs/Web/CSS/list-style-type#lower-alpha), einem der mehreren nativen {{CSSXref("list-style-type")}} Zählertypen, erweitert ihn jedoch durch Entfernen des Punkts (`'.'`) nach der Zählerdarstellung und Einschließen der Zeichen in Klammern, wie etwa `(a)` und `(b)`.

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
