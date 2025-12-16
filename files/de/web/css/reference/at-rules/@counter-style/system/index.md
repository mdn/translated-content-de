---
title: system
slug: Web/CSS/Reference/At-rules/@counter-style/system
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Der **`system`**-Deskriptor spezifiziert den Algorithmus, der zur Umwandlung des ganzzahligen Werts eines Zählers in eine Zeichenfolgendarstellung verwendet wird. Er wird in einem {{cssxref("@counter-style")}} verwendet, um das Verhalten des definierten Stils zu bestimmen.

Ist der Algorithmus, der im `system`-Deskriptor angegeben ist, nicht in der Lage, die Darstellung für einen bestimmten Zählerwert zu erstellen, wird die Darstellung dieses Werts mit dem bereitgestellten Ersatzsystem konstruiert.

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

Dies kann in einer von drei Formen auftreten:

- Eines der Schlüsselwortwerte `cyclic`, `numeric`, `alphabetic`, `symbolic`, `additive` oder `fixed`.
- Der Schlüsselwortwert `fixed` zusammen mit einer ganzen Zahl.
- Der Schlüsselwortwert `extends` zusammen mit einem [`<counter-style-name>`](/de/docs/Web/CSS/Reference/At-rules/@counter-style#counter-style-name)-Wert.

Zu den Werten gehören:

- `cyclic`
  - : Durchläuft die in dem [`symbols`](/de/docs/Web/CSS/Reference/At-rules/@counter-style/symbols)-Deskriptor bereitgestellte Liste von Symbolen. Sobald das Ende der Liste erreicht ist, wird der Zyklus zurück zum Anfang gehen und von vorne beginnen. Dieser Wert ist sowohl für grundlegende Aufzählungszeichenstile mit nur einem Symbol als auch für Stile mit mehreren Symbolen nützlich. Mindestens ein Symbol muss im `symbols`-Deskriptor angegeben werden, sonst ist der Zählerstil nicht gültig.

- `numeric`
  - : Interpretiert die Zählersymbole als Ziffern in einem [Stellenwert-Zahlensystem](https://en.wikipedia.org/wiki/Positional_notation). Das numerische System ist ähnlich wie das oben beschriebene `alphabetic`-System. Der Hauptunterschied besteht darin, dass im `alphabetic`-System das erste Zählersymbol, das im `symbols`-Deskriptor angegeben ist, als `1` interpretiert wird, das nächste als `2` und so weiter. Im numerischen System wird jedoch das erste Zählersymbol als `0` interpretiert, das nächste als `1`, dann `2` und so weiter.

    Es müssen mindestens zwei Zählersymbole im `symbols`-Deskriptor angegeben werden, sonst ist der Zählerstil nicht gültig.

- `alphabetic`
  - : Interpretiert die angegebenen Symbole als Ziffern in einem alphabetischen Zahlensystem. Wenn die Zeichen `"a"` bis `"z"` als Symbole in einem Zählerstil mit dem `alphabetic`-System angegeben werden, sind die ersten 26 Zählerdarstellungen `"a"`, `"b"` bis `"z"`. Bis zu diesem Punkt entspricht das Verhalten dem des oben beschriebenen `symbolic`-Systems. Nach `"z"` geht es jedoch mit `"aa"`, `"ab"`, `"ac"` weiter...

    Der `symbols`-Deskriptor muss mindestens zwei Symbole enthalten, sonst ist der Zählerstil nicht gültig. Das erste Zählersymbol, das im `symbols`-Deskriptor angegeben ist, wird als `1` interpretiert, das nächste als `2` und so weiter. Dieses System ist auch nur für positive Zählerwerte definiert.

- `symbolic`
  - : Durchläuft die in der `symbols`-Deskriptorliste angegebenen Symbole wiederholt und verdoppelt, verdreifacht usw. die Symbole bei jedem weiteren Durchlauf durch die Liste. Wenn zum Beispiel zwei Symbole "◽" und "◾" im `symbols`-Deskriptor angegeben sind, werden sie bei jedem weiteren Durchlauf "◽◽" und "◾◾", dann "◽◽◽" und "◾◾◽" und so weiter in den folgenden Durchläufen. Mindestens ein Symbol muss im `symbols`-Deskriptor angegeben werden, sonst ist der Zählerstil nicht gültig. Dieses Zählsystem funktioniert nur für positive Zählerwerte.

- `additive`
  - : Wird verwendet, um "Sign-Wert"-Zahlensysteme darzustellen, wie z.B. römische Ziffern, die anstatt Ziffern an verschiedenen Positionen neu zu verwenden, um unterschiedliche Werte zu erhalten, zusätzliche Ziffern für größere Werte definieren. Der Wert einer Zahl in einem solchen System kann durch Addition der Ziffern in der Zahl gefunden werden.

    Ein zusätzlicher Deskriptor namens `additive-symbols` muss mit mindestens einem _additiven Tupel_ angegeben werden, damit die Zählerregeln gültig sind. Ein additives Tupel ähnelt einem zusammengesetzten Zählersymbol, das aus zwei Teilen besteht: einem normalen Zählersymbol und einem nicht-negativen Gewicht. Die additiven Tupel müssen in absteigender Reihenfolge ihrer Gewichte angegeben werden, andernfalls ist das System ungültig.

- `fixed` oder `fixed <integer>`
  - : Definiert eine endliche Menge von Symbolen, die einmal durch die im `symbols` Deskriptor bereitgestellte Symbol-Liste iterieren. Sobald die angegebenen Symbole durchlaufen wurden, wird der Ersatz-Zählerstil verwendet. Dieser Schlüsselwortwert ist nützlich in Fällen, in denen die Zählerstilwerte endlich sind. Mindestens ein Symbol muss im `symbols`-Deskriptor angegeben werden, sonst ist der Zählerstil nicht gültig. Das `fixed` Schlüsselwort kann von einem optionalen {{cssxref("&lt;integer&gt;")}} Wert gefolgt werden. Falls angegeben, gibt der `<integer>` Wert das Element in der Liste an, das das erste Symbol aus der Liste der Symbole erhält. Wenn weggelassen, ist der Standardwert von `integer` `1`, was dem ersten Element in der Liste das erste Symbol gibt.

- `extends`
  - : Erweitert den Algorithmus eines anderen browser- oder autorendefinierten Zählerstils, indem es die Veränderung einiger Aspekte des erweiterten Zählerstils erlaubt. Alle nicht spezifizierten Deskriptoren und ihre Werte werden von dem erweiterten Zählerstil übernommen. Ist der mit `extends` angegebene Zählerstilname noch nicht definiert, wird der `decimal` Zählerstil standardmäßig erweitert.

    Es darf keinen `symbols` oder `additive-symbols`-Deskriptor enthalten, sonst ist die Zählerstilregel ungültig. Wenn eine oder mehrere Zählerstildefinitionen mit ihren `extends`-Werten einen Zyklus bilden, behandelt der Browser alle beteiligten Zählerstile als Erweiterung des `decimal`-Stils.

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

Der `fixed`-Wert durchläuft die Liste der Symbole nur einmal und startet den einzelnen Zyklus bei der durch den `integer`-Wert angegebenen Listenelementnummer:

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

Der `symbolic`-Wert durchläuft die im `symbols`-Deskriptor definierte Liste, doppelt und verdreifacht die Anzahl der Symbole für den zweiten und dritten Zyklus durch die Liste:

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

Wie im folgenden Beispiel gezeigt, wenn Ziffern von `0` bis `9` als Symbole angegeben sind, wird dieser Zählerstil dieselben Symbole wie der dezimale Zählerstil verwenden.

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

Dieses Beispiel rendert eine Liste mit römischen Ziffern. Beachten Sie, dass ein `range` angegeben ist, da die Darstellung nur bis zu einem Zählerwert von `3999` korrekte römische Ziffern produziert. Außerhalb des Bereichs werden die restlichen Zählerdarstellungen basierend auf dem `decimal`-Stil erstellt, was der Rückfallstil ist. Falls Sie Zählerwerte als römische Ziffern darstellen müssen, könnten Sie eine der vordefinierten Zählerstile `upper-roman` oder `lower-roman` verwenden, anstatt die Regel selbst zu erstellen.

#### HTML

Wir verwenden das [`start`](/de/docs/Web/HTML/Reference/Elements/ol#start) Attribut auf dem {{HTMLElement("ol")}} Element, um zu demonstrieren, dass das Zählen nicht bei `1` beginnen muss. Zusätzlich verwenden wir das [`value`](/de/docs/Web/HTML/Reference/Elements/li#value) Attribut auf dem fünften {{HTMLElement("li")}} Element, um zu demonstrieren, dass die von Ihnen definierten Zähler mit `@counter-style` genauso funktionieren wie native Zähler.

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

Dieses Beispiel verwendet den Algorithmus, die Symbole und andere Eigenschaften von [`lower-alpha`](/de/docs/Web/CSS/Reference/Properties/list-style-type#lower-alpha), einen der mehreren nativen {{CSSXref("list-style-type")}} Zählertypwerte, aber erweitert es, indem der Punkt (`'.'`) nach der Zählerdarstellung entfernt wird und die Zeichen in Klammern eingeschlossen werden, wie in `(a)` und `(b)`.

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
- {{cssxref("symbols()")}}, die funktionale Notation zum Erstellen anonymer Zählerstile.
