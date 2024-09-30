---
title: Der `system` Deskriptor
slug: Web/CSS/@counter-style/system
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Der **`system`** Deskriptor gibt den Algorithmus an, der zur Umwandlung des ganzzahligen Werts eines Zählers in eine Zeichenfolgen-Darstellung verwendet wird. Er wird in einem {{cssxref("@counter-style")}} verwendet, um das Verhalten des definierten Stils zu bestimmen.

Wenn der im `system` Deskriptor angegebene Algorithmus nicht in der Lage ist, die Darstellung für einen bestimmten Zählerwert zu konstruieren, wird die Darstellung dieses Wertes mit dem bereitgestellten Fallback-System konstruiert.

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

- Einer der Schlüsselwort-Werte `cyclic`, `numeric`, `alphabetic`, `symbolic`, `additive` oder `fixed`.
- Der Schlüsselwert `fixed` zusammen mit einem Integer.
- Der Schlüsselwert `extends` zusammen mit einem [`<counter-style-name>`](/de/docs/Web/CSS/@counter-style#counter-style-name) Wert.

Die Werte umfassen:

- `cyclic`

  - : Durchläuft die Liste der in der [`symbols`](/de/docs/Web/CSS/@counter-style/symbols) Deskriptor angegebenen Symbole. Sobald das Ende der Liste erreicht ist, wird der Zyklus von vorne begonnen. Dieser Wert ist sowohl für einfache Aufzählungszeichen-Stile mit nur einem Symbol als auch für Stile mit mehreren Symbolen nützlich. Mindestens ein Symbol muss im `symbols` Deskriptor angegeben sein, andernfalls ist der Zählerstil nicht gültig.

- `numeric`

  - : Interpretiert die Zählersymbole als Ziffern in einem [Stellenwert-Zahlsystem](https://de.wikipedia.org/wiki/Stellenwertsystem). Das numerische System ähnelt dem `alphabetic` System, das oben beschrieben wurde. Der Hauptunterschied besteht darin, dass im `alphabetic` System das erste Zählersymbol im `symbols` Deskriptor als `1` interpretiert wird, das nächste als `2` und so weiter. Im numerischen System wird das erste Zählersymbol jedoch als `0` interpretiert, das nächste als `1`, dann `2` und so weiter.

    Im `symbols` Deskriptor müssen mindestens zwei Zählersymbole angegeben werden, ansonsten ist der Zählerstil ungültig.

- `alphabetic`

  - : Interpretiert die angegebenen Symbole als Ziffern in einem alphabetischen Zahlsystem. Wenn die Zeichen „"a"“ bis „"z"“ als Symbole in einem Zählerstil mit dem `alphabetic` System angegeben werden, dann sind die ersten 26 Zählerdarstellungen „"a"“, „"b"“ bis „"z"“. Bis zu diesem Punkt ist das Verhalten dasselbe wie das des `symbolic` Systems, das oben beschrieben wurde. Nach „"z"“ geht es jedoch weiter mit „"aa"“, „"ab"“, „"ac"“…

    Der `symbols` Deskriptor muss mindestens zwei Symbole enthalten, andernfalls ist der Zählerstil ungültig. Das erste Zählersymbol, das im `symbols` Deskriptor bereitgestellt wird, wird als `1` interpretiert, das nächste als `2` und so weiter. Dieses System ist auch streng auf positive Zählerwerte definiert.

- `symbolic`

  - : Durchläuft die Symbole, die in der `symbols` Deskriptorliste angegeben sind, wiederholt und verdoppelt, verdreifacht usw. die Symbole bei jedem weiteren Durchlauf durch die Liste. Wenn beispielsweise zwei Symbole „◽“ und „◾“ im `symbols` Deskriptor angegeben sind, werden sie bei jedem weiteren Durchlauf „◽◽“ und „◾◾“, dann „◽◽◽“ und „◾◾◾“ und so weiter. Mindestens ein Symbol muss im `symbols` Deskriptor angegeben werden, andernfalls ist der Zählerstil nicht gültig. Dieses Zählersystem funktioniert nur für positive Zählerwerte.

- `additive`

  - : Wird verwendet, um „Zeichenwert“-Zahlsysteme darzustellen, wie römische Zahlen, die anstelle der Wiederverwendung von Ziffern an verschiedenen Positionen zur Erzielung unterschiedlicher Werte zusätzliche Ziffern für größere Werte definieren. Der Wert einer Zahl in einem solchen System kann durch Hinzufügen der Ziffern in der Zahl ermittelt werden.

    Ein zusätzlicher Deskriptor namens `additive-symbols` muss mit mindestens einem _additiven Tupel_ angegeben werden, andernfalls ist die Regel für den Zählerstil nicht gültig. Ein additives Tupel ähnelt einem zusammengesetzten Zählersymbol, das aus zwei Teilen besteht: einem normalen Zählersymbol und einem nicht-negativen ganzzahligen Gewicht. Die additiven Tupel müssen in absteigender Reihenfolge ihrer Gewichte angegeben werden, ansonsten ist das System ungültig.

- `fixed` oder `fixed <integer>`

  - : Definiert eine endliche Menge von Symbolen und durchläuft einmal die in der `symbols` Deskriptor angegebenen Symbole. Nachdem die angegebenen Symbole durchlaufen wurden, wird der Fallback-Zählerstil verwendet. Dieser Schlüsselwert ist nützlich in Fällen, in denen die Werte des Zählerstils endlich sind. Mindestens ein Symbol muss im `symbols` Deskriptor angegeben werden, andernfalls ist der Zählerstil ungültig. Auf das `fixed` Schlüsselwort kann ein optionaler {{cssxref("&lt;integer&gt;")}} Wert folgen. Falls angegeben, gibt der `<integer>` Wert das Element in der Liste an, das das erste Symbol aus der List der Symbole erhält. Wenn nicht angegeben, ist der Standardwert für `integer` `1`, was dem ersten Element in der Liste das erste Symbol gibt.

- `extends`

  - : Erweitert den Algorithmus eines anderen browser- oder autordefinierten Zählerstils, indem die Änderung einiger Aspekte des erweiterten Zählerstils ermöglicht wird. Alle nicht spezifizierten Deskriptoren und deren Werte werden vom angegebenen erweiterten Zählerstil übernommen. Wenn der mit `extends` angegebene Zählerstilname noch nicht definiert ist, wird standardmäßig der `decimal` Zählerstil erweitert.

    Es darf keinen `symbols` oder `additive-symbols` Deskriptor enthalten, andernfalls ist die Zählerstilregel ungültig. Wenn eine oder mehrere Zählerstildefinitionen mit ihren `extends` Werten einen Zyklus bilden, behandelt der Browser alle teilnehmenden Zählerstile als Erweiterung des `decimal` Stils.

> [!NOTE]
> Der [`symbols`](/de/docs/Web/CSS/@counter-style/symbols) Deskriptor ist erforderlich, wenn der Wert `cyclic`, `numeric`, `alphabetic`, `symbolic` oder `fixed` ist. Der [`additive-symbols`](/de/docs/Web/CSS/@counter-style/additive-symbols) Deskriptor ist erforderlich, wenn der `additive` Wert gesetzt ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Zyklischer Zähler

Der `cyclic` Wert durchläuft die Liste von Symbolen und wiederholt die Liste bei Bedarf:

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

Der `fixed` Wert durchläuft die Liste von Symbolen nur einmal und beginnt den einzelnen Zyklus bei der durch den `integer` Wert angegebenen Listenelementnummer:

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

Der `symbolic` Wert durchläuft die im `symbols` Deskriptor definierte Liste, verdoppelt und verdreifacht die Anzahl der Symbole für den zweiten und dritten Durchlauf durch die Liste jeweils:

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

Das erste im `symbols` Deskriptor bereitgestellte Symbol wird hier als `0` interpretiert.

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

Wie im folgenden Beispiel gezeigt, wenn Ziffern von `0` bis `9` als Symbole angegeben werden, wird dieser Zählerstil Symbole wie der dezimale Zählerstil darstellen.

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

Dieses Beispiel rendert eine Liste mit römischen Ziffern. Beachten Sie, dass ein `range` angegeben ist. Dies liegt daran, dass die Darstellung nur bis zu einem Zählerwert von `3999` korrekte römische Ziffern produziert. Außerhalb des Bereichs werden die restlichen Zählerdarstellungen auf dem `decimal` Stil basieren, der als Rückfall dient. Wenn Sie Zählerwerte als römische Ziffern darstellen müssen, können Sie entweder einen der vordefinierten Zählerstile `upper-roman` oder `lower-roman` verwenden, anstatt die Regel selbst neu zu erstellen.

#### HTML

Wir verwenden das [`start`](/de/docs/Web/HTML/Element/ol#start) Attribut auf dem {{HTMLElement("ol")}} Element, um zu demonstrieren, dass die Zählung nicht bei `1` beginnen muss. Darüber hinaus verwenden wir das [`value`](/de/docs/Web/HTML/Element/li#value) Attribut im fünften {{HTMLElement("li")}} Element, um zu zeigen, dass die Zähler, die Sie mit `@counter-style` definieren, sich genau wie native Zähler verhalten.

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

Dieses Beispiel verwendet den Algorithmus, Symbole und andere Eigenschaften von [`lower-alpha`](/de/docs/Web/CSS/list-style-type#lower-alpha), einem der mehreren nativen {{CSSXref("list-style-type")}} Zählerwerte, erweitert diesen jedoch, indem der Punkt (`'.'`) hinter der Zählerdarstellung entfernt wird und die Zeichen in Klammern gesetzt werden, wie in `(a)` und `(b)`.

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
