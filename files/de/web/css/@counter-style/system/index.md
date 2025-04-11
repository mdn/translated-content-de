---
title: system
slug: Web/CSS/@counter-style/system
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

Der **`system`** Deskriptor spezifiziert den Algorithmus, der zur Umwandlung des Integerwertes eines Zählers in eine String-Darstellung verwendet wird. Er wird in einem {{cssxref("@counter-style")}} verwendet, um das Verhalten des definierten Stils festzulegen.

Falls der spezifizierte Algorithmus im `system` Deskriptor nicht in der Lage ist, die Darstellung für einen bestimmten Zählerwert zu konstruieren, wird die Darstellung dieses Wertes mithilfe des bereitgestellten Fallback-Systems erstellt.

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

  - : Durchläuft die im [`symbols`](/de/docs/Web/CSS/@counter-style/symbols) Deskriptor bereitgestellte Symboliste. Sobald das Ende der Liste erreicht ist, wird der Zyklus von vorne begonnen. Dieser Wert ist nützlich sowohl für grundlegende Aufzählungsstile mit nur einem Symbol als auch für Stile mit mehreren Symbolen. Mindestens ein Symbol muss im `symbols` Deskriptor angegeben sein, andernfalls ist der Zählerstil nicht gültig.

- `numeric`

  - : Interpretiert die Zählsymbole als Ziffern in einem [Stellenwertsystem](https://en.wikipedia.org/wiki/Positional_notation). Das numerische System ähnelt dem oben beschriebenen `alphabetic` System. Der Hauptunterschied besteht darin, dass im `alphabetic` System das erste Zählsymbol im `symbols` Deskriptor als `1` interpretiert wird, das nächste als `2` und so weiter. Im numerischen System hingegen wird das erste Zählsymbol als `0` interpretiert, das nächste als `1` und so weiter.

    Mindestens zwei Zählsymbole müssen im `symbols` Deskriptor angegeben werden, andernfalls ist der Zählerstil nicht gültig.

- `alphabetic`

  - : Interpretiert die angegebenen Symbole als Ziffern in einem alphabetischen Zählsystem. Wenn die Zeichen `"a"` bis `"z"` in einem Zählerstil als Symbole angegeben sind, wird im `alphabetic` System die ersten 26 Zählerdarstellungen `"a"`, `"b"` bis `"z"` sein. Bis zu diesem Punkt verhält sich das System genauso wie das oben beschriebene `symbolic` System. Danach jedoch setzt es sich fort mit `"aa"`, `"ab"`, `"ac"`…

    Der `symbols` Deskriptor muss mindestens zwei Symbole enthalten, andernfalls ist der Zählerstil nicht gültig. Das erste im `symbols` Deskriptor angegebene Zählsymbol wird als `1` interpretiert, das nächste als `2` und so weiter. Dieses System ist auch streng auf positive Zählerwerte beschränkt.

- `symbolic`

  - : Durchläuft die im `symbols` Deskriptor angegebene Liste von Symbolen mehrfach, verdoppelt, verdreifacht usw. die Symbole bei jedem weiteren Durchgang durch die Liste. Zum Beispiel, wenn zwei Symbole "◽" und "◾" im `symbols` Deskriptor angegeben sind, werden sie bei jedem Durchgang zu "◽◽" und "◾◾", dann zu "◽◽◽" und "◾◾◽" usw. Mindestens ein Symbol muss im `symbols` Deskriptor angegeben werden, andernfalls ist der Zählerstil nicht gültig. Dieses Zählsystem funktioniert nur für positive Zählerwerte.

- `additive`

  - : Wird verwendet, um "Bedeutungswert"-Zählsysteme darzustellen, wie z. B. römische Zahlen, die keine Ziffern in verschiedenen Positionen wiederverwenden, um unterschiedliche Werte zu erhalten, sondern zusätzliche Ziffern für größere Werte definieren. Der Wert einer Zahl in einem solchen System kann durch die Addition der Ziffern in der Zahl ermittelt werden.

    Ein zusätzlicher Deskriptor namens `additive-symbols` muss mit mindestens einem _additiven Tupel_ angegeben werden, andernfalls ist die Regel des Zählerstils nicht gültig. Ein additives Tupel ähnelt einem zusammengesetzten Zählsymbol, das aus zwei Teilen besteht: einem normalen Zählsymbol und einem nicht-negativen ganzzahligen Gewicht. Die additiven Tupel müssen in absteigender Reihenfolge ihrer Gewichte angegeben werden, andernfalls ist das System ungültig.

- `fixed` oder `fixed <integer>`

  - : Definiert eine endliche Menge von Symbolen und durchläuft einmal die im `symbols` Deskriptor bereitgestellte Liste von Symbolen. Sobald die angegebenen Symbole durchlaufen wurden, wird der Fallback-Zählerstil verwendet. Dieser Schlüsselwortwert ist nützlich in Fällen, in denen die Zählerstilwerte endlich sind. Mindestens ein Symbol muss im `symbols` Deskriptor angegeben werden, andernfalls ist der Zählerstil nicht gültig. Das `fixed` Schlüsselwort kann von einem optionalen {{cssxref("&lt;integer&gt;")}}-Wert gefolgt werden. Falls angegeben, gibt der `<integer>`-Wert das Element in der Liste an, das das erste Symbol aus der Symboliste erhält. Ist er weggelassen, hat der `integer` Wert standardmäßig den Wert `1`, was dem ersten Element in der Liste das erste Symbol gibt.

- `extends`

  - : Erweitert den Algorithmus eines anderen vom Browser oder vom Autor definierten Zählerstils, indem Änderungen an einigen Aspekten des erweiterten Zählerstils ermöglicht werden. Alle nicht spezifizierten Deskriptoren und ihre Werte werden vom angegebenen erweiterten Zählerstil geerbt. Falls der mit `extends` angegebene Zählerstilname noch nicht definiert ist, wird standardmäßig der `decimal` Zählerstil erweitert.

    Er darf keinen `symbols` oder `additive-symbols` Deskriptor enthalten, andernfalls ist die Regel des Zählerstils ungültig. Falls ein oder mehrere Zählerstil-Definitionen einen Zyklus mit ihren `extends` Werten bilden, wird der Browser alle beteiligten Zählerstile so behandeln, als würden sie sich vom `decimal` Stil ableiten.

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

### Fixierter Zähler

Der `fixed` Wert durchläuft die Liste der Symbole nur einmal und beginnt den einzigen Zyklus bei der in dem `integer` Wert angegebenen Listenelementnummer:

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

Der `symbolic` Wert durchläuft die im `symbols` Deskriptor definierte Liste, verdoppelt und verdreifacht die Anzahl der Symbole für den zweiten und dritten Durchlauf der Liste:

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

Das erste Symbol, das im `symbols` Deskriptor angegeben ist, wird hier als `0` interpretiert.

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

Wie im folgenden Beispiel gezeigt, wenn Ziffern von `0` bis `9` als Symbole angegeben sind, wird dieser Zählerstil Symbole im gleichen Stil wie der dezimale Zählerstil darstellen.

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

Dieses Beispiel rendert eine Liste unter Verwendung von römischen Zahlen. Beachten Sie, dass ein `range` spezifiziert ist. Dies liegt daran, dass die Darstellung nur bis zum Zählerwert `3999` korrekte römische Zahlen erzeugen wird. Jenseits dieser Bereichswerte basieren die restlichen Darstellungen auf dem `decimal` Stil, der als Fallback dient. Wenn Sie Zählerwerte als römische Zahlen darstellen möchten, könnten Sie entweder einen der vordefinierten Zählerstile `upper-roman` oder `lower-roman` verwenden, anstatt die Regel selbst zu erstellen.

#### HTML

Wir verwenden das [`start`](/de/docs/Web/HTML/Reference/Elements/ol#start) Attribut auf dem {{HTMLElement("ol")}} Element, um zu demonstrieren, dass das Zählen nicht bei `1` beginnen muss. Zusätzlich verwenden wir das [`value`](/de/docs/Web/HTML/Reference/Elements/li#value) Attribut auf dem fünften {{HTMLElement("li")}} Element, um zu zeigen, dass die Zähler, die Sie mit `@counter-style` definieren, sich genauso wie native Zähler verhalten.

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

Dieses Beispiel verwendet den Algorithmus, die Symbole und andere Eigenschaften von [`lower-alpha`](/de/docs/Web/CSS/list-style-type#lower-alpha), einem der mehreren nativen {{CSSXref("list-style-type")}} Zählerwerte, erweitert ihn jedoch, indem der Punkt (`'.'`) nach der Zählerdarstellung entfernt und die Zeichen in Klammern gesetzt werden, wie bei `(a)` und `(b)`.

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
