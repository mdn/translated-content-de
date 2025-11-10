---
title: system
slug: Web/CSS/Reference/At-rules/@counter-style/system
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Der **`system`**-Deskriptor gibt den Algorithmus an, der zur Umwandlung des ganzzahligen Werts eines Zählers in eine Zeichenfolgen-Darstellung verwendet werden soll. Er wird in einem {{cssxref("@counter-style")}} verwendet, um das Verhalten des definierten Stils festzulegen.

Wenn der im `system`-Deskriptor angegebene Algorithmus die Darstellung für einen bestimmten Zählerwert nicht konstruieren kann, wird die Darstellung dieses Werts mit dem bereitgestellten Fallback-System erstellt.

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
- Der Schlüsselwortwert `fixed` zusammen mit einer ganzen Zahl.
- Der Schlüsselwortwert `extends` zusammen mit einem [`<counter-style-name>`](/de/docs/Web/CSS/Reference/At-rules/@counter-style#counter-style-name)-Wert.

Die Werte umfassen:

- `cyclic`
  - : Durchläuft die im [`symbols`](/de/docs/Web/CSS/Reference/At-rules/@counter-style/symbols)-Deskriptor bereitgestellte Liste von Symbolen. Sobald das Ende der Liste erreicht ist, beginnt der Zyklus von vorne. Dieser Wert ist sowohl für grundlegende Aufzählungs-Stile mit nur einem Symbol als auch für Stile mit mehreren Symbolen nützlich. Im `symbols`-Deskriptor muss mindestens ein Symbol angegeben werden, ansonsten ist der Zählerstil ungültig.

- `numeric`
  - : Interpretiert die Zählersymbole als Ziffern in einem [Positionswert-Zahlensystem](https://en.wikipedia.org/wiki/Positional_notation). Das Numerik-System ist dem `alphabetic`-System ähnlich, das oben beschrieben wurde. Der Hauptunterschied besteht darin, dass im `alphabetic`-System das erste Zählersymbol im `symbols`-Deskriptor als `1` interpretiert wird, das nächste als `2` und so weiter. Im numerischen System hingegen wird das erste Zählersymbol als 0 interpretiert, das nächste als `1`, dann `2` und so weiter.

    Im `symbols`-Deskriptor müssen mindestens zwei Zählersymbole angegeben werden, sonst ist der Zählerstil ungültig.

- `alphabetic`
  - : Interpretiert die angegebenen Symbole als Ziffern in ein alphabetisches Zahlensystem. Falls die Zeichen `"a"` bis `"z"` als Symbole in einem Zählerstil angegeben sind, mit dem `alphabetic`-System, dann werden die ersten 26 Zählerdarstellungen als `"a"`, `"b"` bis `"z"` dargestellt. Bis zu diesem Punkt verhält sich das System wie das `symbolic`-System, das oben beschrieben wurde. Nach `"z"` wird es jedoch als `"aa"`, `"ab"`, `"ac"` fortgesetzt...

    Der `symbols`-Deskriptor muss mindestens zwei Symbole enthalten, sonst ist der Zählerstil ungültig. Das erste im `symbols`-Deskriptor angegebene Zählersymbol wird als `1` interpretiert, das nächste als `2` und so weiter. Dieses System ist ebenfalls streng über positive Zählerwerte definiert.

- `symbolic`
  - : Durchläuft die im `symbols`-Deskriptor bereitgestellte Symbolenliste wiederholt, indem die Symbole bei jedem weiteren Durchlauf doppelt, dreifach und so weiter genommen werden. Wenn zum Beispiel die Symbole "◽" und "◾" im `symbols`-Deskriptor angegeben sind, werden sie bei jedem weiteren Durchlauf "◽◽" und "◾◾", dann "◽◽◽" und "◾◾◾" und so weiter. Im `symbols`-Deskriptor muss mindestens ein Symbol angegeben werden, andernfalls ist der Zählerstil ungültig. Dieses Zählersystem funktioniert nur für positive Zählerwerte.

- `additive`
  - : Wird verwendet, um "Zeichen-Wert"-Zahlensysteme darzustellen, wie römische Zahlen, die keine Ziffern in verschiedenen Positionen wiederverwenden, um unterschiedliche Werte zu erhalten, sondern zusätzliche Ziffern für größere Werte definieren. Der Wert einer Zahl in einem solchen System kann durch Addition der Ziffern in der Zahl ermittelt werden.

    Ein zusätzlicher Deskriptor namens `additive-symbols` muss mit mindestens einem _additive tuple_ angegeben werden, andernfalls wird die Zählerstilregel ungültig. Ein additives Tuple ist ähnlich wie ein zusammengesetztes Zählersymbol, das aus zwei Teilen besteht: einem normalen Zählersymbol und einem nicht-negativen ganzzahligen Gewicht. Die additiven Tupel müssen in absteigender Reihenfolge ihrer Gewichte angegeben werden, sonst ist das System ungültig.

- `fixed` oder "`fixed <integer>`"
  - : Definiert eine endliche Menge von Symbolen, die einmal durch die im `symbols`-Deskriptor bereitgestellte Liste von Symbolen iteriert wird. Sobald die angegebenen Symbole durchlaufen sind, wird der Fallback-Zählerstil verwendet. Dieser Schlüsselwortwert ist in Fällen nützlich, in denen die Werte des Zählerstils endlich sind. Im `symbols`-Deskriptor muss mindestens ein Symbol angegeben werden, andernfalls ist der Zählerstil ungültig. Das `fixed`-Schlüsselwort kann durch einen optionalen {{cssxref("&lt;integer&gt;")}}-Wert gefolgt werden. Wenn angegeben, gibt der `<integer>`-Wert den Punkt in der Liste an, der das erste Symbol aus der Symbolenliste erhält. Wenn es weggelassen wird, ist der Standardwert für `integer` `1`, was dem ersten Element in der Liste das erste Symbol gibt.

- `extends`
  - : Erweitert den Algorithmus eines anderen browser- oder autoren-definierten Zählerstils, indem bestimmte Aspekte des erweiterten Zählerstils verändert werden können. Alle nicht angegebenen Deskriptoren und deren Werte werden vom angegebenen erweiterten Zählerstil geerbt. Wenn der mit `extends` angegebene Zählerstilname noch nicht definiert ist, wird der `decimal`-Zählerstil standardmäßig erweitert.

    Es darf keinen `symbols`- oder `additive-symbols`-Deskriptor enthalten, andernfalls wird die Zählerstilregel ungültig. Wenn eine oder mehrere Zählerstildefinitionen mit ihren `extends`-Werten einen Zyklus bilden, behandelt der Browser alle beteiligten Zählerstile, als ob sie sich vom `decimal`-Stil erweitern.

> [!NOTE]
> Der [`symbols`](/de/docs/Web/CSS/Reference/At-rules/@counter-style/symbols)-Deskriptor ist erforderlich, wenn der Wert `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` ist. Der [`additive-symbols`](/de/docs/Web/CSS/Reference/At-rules/@counter-style/additive-symbols)-Deskriptor ist erforderlich, wenn der `additive`-Wert festgelegt ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Zyklischer Zähler

Der `cyclic`-Wert läuft durch die Liste der Symbole, wobei die Liste nach Bedarf wiederholt wird:

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

### Fixierter Zähler

Der `fixed`-Wert läuft nur einmal durch die Liste der Symbole, beginnend mit der Elementnummer, die durch den `integer`-Wert angegeben wird:

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

Der `symbolic`-Wert läuft durch die im `symbols`-Deskriptor definierte Liste und verdoppelt bzw. verdreifacht die Anzahl der Symbole für den zweiten und dritten Durchlauf durch die Liste, jeweils:

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

Das erste Symbol, das im `symbols`-Deskriptor angegeben ist, wird hier als `0` interpretiert.

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

Wie im folgenden Beispiel gezeigt, wird, wenn Ziffern von `0` bis `9` als Symbole angegeben sind, dieser Zählerstil Symbole ebenso wie der dezimale Zählerstil rendern.

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

Dieses Beispiel rendert eine Liste mit römischen Zahlen. Beachten Sie, dass ein `range` angegeben ist. Dies liegt daran, dass die Darstellung nur bis zu einem Zählerwert von `3999` korrekte römische Zahlen erzeugt. Außerhalb dieser Reichweite werden die restlichen Zählerdarstellungen auf dem `decimal`-Stil basieren, welcher der Fallback ist. Wenn Sie Zählerwerte als römische Zahlen darstellen müssen, könnten Sie entweder einen der vordefinierten Zählerstile, `upper-roman` oder `lower-roman`, verwenden, anstatt die Regel selbst zu erstellen.

#### HTML

Wir verwenden das [`start`](/de/docs/Web/HTML/Reference/Elements/ol#start)-Attribut auf dem {{HTMLElement("ol")}}-Element, um zu zeigen, dass das Zählen nicht bei `1` beginnen muss. Zusätzlich verwenden wir das [`value`](/de/docs/Web/HTML/Reference/Elements/li#value)-Attribut auf dem fünften {{HTMLElement("li")}}-Element, um zu zeigen, dass die von Ihnen definierten Zähler mit `@counter-style` sich genauso wie native Zähler verhalten.

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

Dieses Beispiel verwendet den Algorithmus, die Symbole und andere Eigenschaften von [`lower-alpha`](/de/docs/Web/CSS/Reference/Properties/list-style-type#lower-alpha), einem der mehreren nativen {{CSSXref("list-style-type")}}-Zählwerte, erweitert ihn jedoch, indem der Punkt (`'.'`) nach der Zählerdarstellung entfernt wird und die Zeichen in Klammern gesetzt werden, wie `(a)` und `(b)`.

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
