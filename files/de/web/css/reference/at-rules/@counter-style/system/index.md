---
title: "`system` CSS at-rule Deskriptor"
short-title: system
slug: Web/CSS/Reference/At-rules/@counter-style/system
l10n:
  sourceCommit: 07758d01509695fe45ccc3f7687f6597dc3d9e2a
---

Der **`system`** Deskriptor spezifiziert den Algorithmus, der zur Umwandlung des ganzzahligen Wertes eines Zählers in eine Zeichenketten-Darstellung verwendet werden soll. Er wird in einem {{cssxref("@counter-style")}} genutzt, um das Verhalten des definierten Stils zu definieren.

Falls der im `system` Deskriptor angegebene Algorithmus nicht in der Lage ist, die Darstellung für einen bestimmten Zählerwert zu konstruieren, wird die Darstellung dieses Wertes mit dem bereitgestellten Fallback-System konstruiert.

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
- Der Schlüsselwortwert `extends` zusammen mit einem [`<counter-style-name>`](/de/docs/Web/CSS/Reference/At-rules/@counter-style#counter-style-name) Wert.

Die Werte umfassen:

- `cyclic`
  - : Durchläuft die Liste der Symbole, die im [`symbols`](/de/docs/Web/CSS/Reference/At-rules/@counter-style/symbols) Deskriptor angegeben sind. Sobald das Ende der Liste erreicht ist, beginnt der Zyklus wieder von vorne. Dieser Wert ist nützlich sowohl für grundlegende Aufzählungszeichen-Stile mit nur einem Symbol als auch für Stile mit mehreren Symbolen. Mindestens ein Symbol muss im `symbols` Deskriptor angegeben sein, andernfalls ist der Zählerstil ungültig.

- `numeric`
  - : Interpretiert die Zählersymbole als Ziffern in einem [Stellenwert-Nummerierungssystem](https://en.wikipedia.org/wiki/Positional_notation). Das numerische System ist dem `alphabetic` System ähnlich, das oben beschrieben wurde. Der Hauptunterschied besteht darin, dass im `alphabetic` System das erste Zählersymbol, das im `symbols` Deskriptor angegeben ist, als `1` interpretiert wird, das nächste als `2` usw. Im numerischen System wird das erste Zählersymbol jedoch als 0 interpretiert, das nächste als `1`, dann `2` usw.

    Mindestens zwei Zählersymbole müssen im `symbols` Deskriptor angegeben sein, andernfalls ist der Zählerstil ungültig.

- `alphabetic`
  - : Interpretiert die angegebenen Symbole als Ziffern in einem alphabetischen Nummerierungssystem. Wenn die Zeichen `"a"` bis `"z"` als Symbole in einem Zählerstil angegeben sind, dann wird das `alphabetic` System die ersten 26 Zählerdarstellungen als `"a"`, `"b"` bis `"z"` erzeugen. Bis zu diesem Punkt ist das Verhalten dasselbe wie beim `symbolic` System, das oben beschrieben wurde. Nach `"z"` wird es jedoch als `"aa"`, `"ab"`, `"ac"`... weitergehen.

    Der `symbols` Deskriptor muss mindestens zwei Symbole enthalten, andernfalls ist der Zählerstil ungültig. Das erste Zählersymbol im `symbols` Deskriptor wird als `1` interpretiert, das nächste als `2` usw. Dieses System ist auch streng für positive Zählerwerte definiert.

- `symbolic`
  - : Durchläuft die Symbole, die in der `symbols` Deskriptorliste angegeben sind, und verdoppelt, verdreifacht usw. die Symbole bei jedem weiteren Durchlauf durch die Liste. Wenn beispielsweise zwei Symbole "◽" und "◾" im `symbols` Deskriptor angegeben sind, werden sie bei jedem weiteren Durchlauf "◽◽" und "◾◾", dann "◽◽◽" und "◾◾◾" und so weiter in den folgenden Durchläufen. Mindestens ein Symbol muss im `symbols` Deskriptor angegeben sein, andernfalls ist der Zählerstil ungültig. Dieses Zählersystem funktioniert nur für positive Zählerwerte.

- `additive`
  - : Wird verwendet, um Nummerierungssysteme des Typs "Sign-Value" darzustellen, wie z. B. römische Ziffern, die keine Ziffern in verschiedenen Positionen wiederverwenden, um unterschiedliche Werte zu erhalten, sondern zusätzliche Ziffern für größere Werte definieren. Der Wert einer Zahl in einem solchen System kann durch Addieren der Zahlen in der Zahl ermittelt werden.

    Ein zusätzlicher Deskriptor namens `additive-symbols` muss mit mindestens einem _additiven Tupel_ spezifiziert werden, andernfalls ist die Zählerstilregel nicht gültig. Ein additives Tupel ähnelt einem zusammengesetzten Zählersymbol, das aus zwei Teilen besteht: einem normalen Zählersymbol und einem nicht negativen Ganzzahlgewicht. Die additiven Tupel müssen in absteigender Reihenfolge ihrer Gewichte angegeben werden, sonst ist das System ungültig.

- `fixed` oder `fixed <integer>`
  - : Definiert eine endliche Menge von Symbolen und durchläuft einmal die Liste der Symbole, die im `symbols` Deskriptor angegeben sind. Sobald die angegebenen Symbole durchlaufen wurden, wird der Fallback-Zählerstil verwendet. Dieser Schlüsselwortwert ist in Fällen nützlich, in denen die Zählerstilwerte endlich sind. Mindestens ein Symbol muss im `symbols` Deskriptor angegeben sein, andernfalls ist der Zählerstil ungültig. Das `fixed` Schlüsselwort kann von einem optionalen {{cssxref("&lt;integer&gt;")}} Wert gefolgt werden. Wenn angegeben, gibt der `<integer>` Wert das Element in der Liste an, das das erste Symbol aus der Liste der Symbole erhält. Wenn es weggelassen wird, ist der Standardwert von `integer` `1`, wodurch das erste Element in der Liste das erste Symbol erhält.

- `extends`
  - : Erweitert den Algorithmus eines anderen, durch den Browser oder vom Autor definierten Zählerstils, indem es die Änderung bestimmter Aspekte des erweiterten Zählerstils erlaubt. Alle nicht angegebenen Deskriptoren und ihre Werte werden von dem angegebenen erweiterten Zählerstil übernommen. Wenn der mit `extends` angegebene Zählerstilname noch nicht definiert ist, wird der `decimal` Zählerstil standardmäßig erweitert.

    Es darf keinen `symbols` oder `additive-symbols` Deskriptor enthalten, andernfalls ist die Zählerstilregel ungültig. Wenn eine oder mehrere Zählerstildefinitionen mit ihren `extends` Werten einen Zyklus bilden, behandelt der Browser alle teilnehmenden Zählerstile, als ob sie von dem `decimal` Stil erweitert wurden.

> [!NOTE]
> Der [`symbols`](/de/docs/Web/CSS/Reference/At-rules/@counter-style/symbols) Deskriptor ist erforderlich, wenn der Wert `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` ist. Der [`additive-symbols`](/de/docs/Web/CSS/Reference/At-rules/@counter-style/additive-symbols) Deskriptor ist erforderlich, wenn der `additive` Wert gesetzt ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Zyklischer Zähler

Der `cyclic` Wert durchläuft die Liste der Symbole und wiederholt die Liste nach Bedarf:

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

Der `fixed` Wert durchläuft die Liste der Symbole nur einmal und beginnt den einzelnen Zyklus bei der Listenposition, die durch den `integer` Wert angegeben ist:

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

Der `symbolic` Wert schleift durch die im `symbols` Deskriptor definierte Liste und verdoppelt bzw. verdreifacht die Anzahl der Symbole für den zweiten und dritten Durchlauf durch die Liste:

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

Wie im folgenden Beispiel gezeigt, wenn Ziffern von `0` bis `9` als Symbole angegeben werden, wird dieser Zählerstil Symbole wie der dezimale Zählerstil rendern.

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

Dieses Beispiel rendert eine Liste mit römischen Ziffern. Beachten Sie, dass ein `range` angegeben ist. Dies ist erforderlich, da die Darstellung korrekter römischer Ziffern nur bis zum Zählerwert von `3999` funktioniert. Sobald dieser Bereich überschritten wird, basieren die restlichen Zählerdarstellungen auf dem `decimal` Stil, der das Fallback ist. Falls Sie Zählerwerte als römische Ziffern darstellen möchten, könnten Sie entweder einen der vordefinierten Zählerstile, `upper-roman` oder `lower-roman`, verwenden, anstatt die Regel selbst zu erstellen.

#### HTML

Wir verwenden das [`start`](/de/docs/Web/HTML/Reference/Elements/ol#start) Attribut am {{HTMLElement("ol")}} Element, um zu demonstrieren, dass das Zählen nicht bei `1` beginnen muss. Zusätzlich verwenden wir das [`value`](/de/docs/Web/HTML/Reference/Elements/li#value) Attribut am fünften {{HTMLElement("li")}} Element, um zu zeigen, dass die Zähler, die Sie mit `@counter-style` definieren, genauso wie native Zähler funktionieren.

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

Dieses Beispiel verwendet den Algorithmus, die Symbole und andere Eigenschaften von [`lower-alpha`](/de/docs/Web/CSS/Reference/Properties/list-style-type#lower-alpha), einem der mehreren nativen {{CSSXref("list-style-type")}} Zählerwerte, erweitert ihn jedoch, indem der Punkt (`'.'`) nach der Zählerdarstellung entfernt wird und die Zeichen in Klammern gesetzt werden, wie in `(a)` und `(b)`.

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
- {{cssxref("symbols()")}}, die funktionale Notation zur Erstellung anonymer Zählerstile.
