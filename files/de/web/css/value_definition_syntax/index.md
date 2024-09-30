---
title: Wertedefinition Syntax
slug: Web/CSS/Value_definition_syntax
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{CSSRef}}

Die **CSS-Wertedefinition Syntax**, eine formale Grammatik, wird verwendet, um die Menge der gültigen Werte für eine CSS-Eigenschaft oder Funktion zu definieren. Zusätzlich zu dieser Syntax kann die Menge der gültigen Werte durch semantische Einschränkungen weiter eingeschränkt werden (zum Beispiel, dass eine Zahl streng positiv sein muss).

Die Definitionssyntax beschreibt, welche Werte zulässig sind und die Interaktionen zwischen ihnen. Eine Komponente kann ein _Schlüsselwort_ sein, einige Zeichen, die als _Literal_ betrachtet werden, oder ein Wert eines gegebenen CSS-Datentyps oder einer anderen CSS-Eigenschaft.

## Komponenten-Wertetypen

### Schlüsselwörter

#### Allgemeine Schlüsselwörter

Ein Schlüsselwort mit einer vordefinierten Bedeutung erscheint wörtlich, ohne Anführungszeichen. Zum Beispiel: `auto`, `smaller` oder `ease-in`.

#### Der spezielle Fall von `inherit`, `initial` und `unset`

Alle CSS-Eigenschaften akzeptieren die Schlüsselwörter `inherit`, `initial` und `unset`. Sie werden in der Wertedefinition nicht angezeigt und sind implizit definiert.

### Literale

In CSS können einige Zeichen allein stehen, wie der Schrägstrich (`/`) oder das Komma (`,`), und werden in einer Eigenschaftsdefinition verwendet, um ihre Teile zu trennen. Das Komma wird häufig verwendet, um Werte in Aufzählungen oder Parameter in mathematisch-ähnlichen Funktionen zu trennen; der Schrägstrich trennt oft Teile des Wertes, die semantisch unterschiedlich, aber syntaktisch gleich sind. Typischerweise wird der Schrägstrich in Kurzform-Eigenschaften verwendet; um Komponenten desselben Typs zu trennen, die jedoch zu unterschiedlichen Eigenschaften gehören.

Beide Symbole erscheinen wörtlich in einer Wertedefinition.

### Datentypen

#### Grundlegende Datentypen

Einige Datentypen werden in ganz CSS verwendet und werden einmal für alle Werte in der Spezifikation definiert. Diese als _grundlegende Datentypen_ bezeichnet, werden durch ihren Namen umgeben von den Symbolen `<` und `>` dargestellt: {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;string&gt;")}}, …

#### Nicht-terminal Datentypen

Weniger gebräuchliche Datentypen, genannt _nicht-terminal Datentypen_, sind ebenfalls von `<` und `>` umgeben.

Nicht-terminale Datentypen gibt es in zwei Arten:

- Datentypen, die _denselben Namen wie eine Eigenschaft teilen_, in Anführungszeichen gesetzt. In diesem Fall teilt der Datentyp denselben Wertebereich wie die Eigenschaft. Sie werden häufig in der Definition von Kurzform-Eigenschaften verwendet.
- Datentypen, die _nicht denselben Namen wie eine Eigenschaft teilen_. Diese Datentypen sind den grundlegenden Datentypen sehr ähnlich. Sie unterscheiden sich von den grundlegenden Datentypen nur durch den physischen Ort ihrer Definition. In diesem Fall ist die Definition normalerweise physisch sehr nah an der Definition der Eigenschaft, die sie nutzt.

## Komponenten-Wertekombinatoren

### Klammern

_Klammern_ umschließen mehrere Entitäten, Kombinatoren und Multiplikatoren und transformieren sie dann als eine einzige Komponente. Sie werden verwendet, um **Komponenten zu gruppieren, um die Vorrangregeln zu umgehen**.

```css
bold [ thin && <length> ]
```

Dieses Beispiel entspricht folgenden Werten:

- `bold thin 2vh`
- `bold 0 thin`
- `bold thin 3.5em`

Aber nicht:

- `thin bold 3em`, da `bold` neben der durch die Klammern definierten Komponente steht, muss es davor erscheinen.

### Aneinanderreihung

Mehrere Schlüsselwörter, Literale oder Datentypen nebeneinander zu platzieren, die nur durch ein oder mehrere Leerzeichen getrennt sind, wird _Aneinanderreihung_ genannt. Alle aneinandergereihten Komponenten sind **obligatorisch und sollten in der genauen Reihenfolge erscheinen**.

```css
bold <length>, thin
```

Dieses Beispiel entspricht folgenden Werten:

- `bold 1em, thin`
- `bold 0, thin`
- `bold 2.5cm, thin`
- `bold 3vh, thin`

Aber nicht:

- `thin 1em, bold`, da die Entitäten in der angegebenen Reihenfolge sein müssen
- `bold 1em thin`, da die Entitäten obligatorisch sind; das Komma, ein Literal, muss vorhanden sein
- `bold 0.5ms, thin`, da die `ms` Werte nicht {{CSSxRef("&lt;length&gt;")}} sind

### Doppeltes Und-Zeichen

Das Trennen von zwei oder mehr Komponenten durch ein _doppeltes Und-Zeichen_, `&&`, bedeutet, dass all diese Entitäten **obligatorisch, aber in beliebiger Reihenfolge erscheinen können**.

```css
bold && <length>
```

Dieses Beispiel entspricht folgenden Werten:

- `bold 1em`
- `bold 0`
- `2.5cm bold`
- `3vh bold`

Aber nicht:

- `bold`, da beide Komponenten in dem Wert erscheinen müssen.
- `bold 1em bold`, da beide Komponenten nur einmal erscheinen dürfen.

> [!NOTE]
> Die Aneinanderreihung hat Vorrang vor dem doppelten Und-Zeichen, was bedeutet, dass `bold thin && <length>` gleichbedeutend ist mit `[ bold thin ] && <length>`. Es beschreibt `bold thin <length>` oder `<length> bold thin`, aber nicht `bold <length> thin`.

### Doppelbalken

Das Trennen von zwei oder mehr Komponenten durch einen _Doppelbalken_, `||`, bedeutet, dass alle Entitäten Optionen sind: **Mindestens eine muss vorhanden sein, und sie können in beliebiger Reihenfolge erscheinen**. Typischerweise wird dies verwendet, um die verschiedenen Werte einer [Kurzform-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) zu definieren.

```css
<'border-width'> || <'border-style'> || <'border-color'>
```

Dieses Beispiel entspricht folgenden Werten:

- `1em solid blue`
- `blue 1em`
- `solid 1px yellow`

Aber nicht:

- `blue yellow`, da eine Komponente nur einmal erscheinen darf.
- `bold`, da es kein Schlüsselwort ist, das als Wert einer der Entitäten zulässig ist.

> [!NOTE]
> Das doppelte Und-Zeichen hat Vorrang vor dem Doppelbalken, was bedeutet, dass `bold || thin && <length>` gleichbedeutend ist mit `bold || [ thin && <length> ]`. Es beschreibt `bold`, `thin <length>`, `bold thin <length>`, oder `thin <length> bold`, jedoch nicht `<length> bold thin`, da bold, wenn nicht weggelassen, vor oder nach der gesamten `thin && <length>`-Komponente platziert werden muss.

### Einfacher Balken

Das Trennen von zwei oder mehr Entitäten durch einen _einfachen Balken_, `|`, bedeutet, dass alle Entitäten exklusive Optionen sind: **Genau eine dieser Optionen muss vorhanden sein**. Dies wird typischerweise verwendet, um eine Liste möglicher Schlüsselwörter zu trennen.

```css
<percentage> | <length> | left | center | right | top | bottom
```

Dieses Beispiel entspricht folgenden Werten:

- `3%`
- `0`
- `3.5em`
- `left`
- `center`
- `right`
- `top`
- `bottom`

Aber nicht:

- `center 3%`, da nur eine der Komponenten vorhanden sein darf.
- `3em 4.5em`, da eine Komponente höchstens einmal vorhanden sein darf.

> [!NOTE]
> Der Doppelbalken hat Vorrang vor dem einfachen Balken, was bedeutet, dass `bold | thin || <length>` gleichbedeutend ist mit `bold | [ thin || <length> ]`. Es beschreibt `bold`, `thin`, `<length>`, `<length> thin`, oder `thin <length>`, jedoch nicht `bold <length>`, da nur eine Entität von jeder Seite des `|` Kombinators vorhanden sein kann.

## Komponenten-Wertmultiplikatoren

Ein Multiplikator ist ein Zeichen, das angibt, wie oft eine vorhergehende Entität wiederholt werden kann. Ohne Multiplikator muss eine Entität genau einmal erscheinen.

Multiplikatoren können nicht hinzugefügt werden und haben Vorrang vor allen Kombinatoren.

### Sternchen (`*`)

Der _Sternchen-Multiplikator_ gibt an, dass die Entität **null, einmal oder mehrmals** erscheinen kann.

```css
bold smaller*
```

Dieses Beispiel entspricht folgenden Werten:

- `bold`
- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`, und so weiter.

Aber nicht:

- `smaller`, da `bold` aneinandergereiht ist und vor jedem `smaller`-Schlüsselwort erscheinen muss.

### Pluszeichen (`+`)

Der _Plus-Multiplikator_ gibt an, dass die Entität **einmal oder mehrmals** erscheinen kann.

```css
bold smaller+
```

Dieses Beispiel entspricht folgenden Werten:

- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`, und so weiter.

Aber nicht:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `smaller`, da `bold` aneinandergereiht ist und vor jedem `smaller`-Schlüsselwort erscheinen muss.

### Fragezeichen (`?`)

Der _Fragezeichen-Multiplikator_ zeigt an, dass die Entität optional ist und **null oder einmal erscheinen muss**.

```css
bold smaller?
```

Dieses Beispiel entspricht folgenden Werten:

- `bold`
- `bold smaller`

Aber nicht:

- `bold smaller smaller`, da `smaller` höchstens einmal erscheinen darf.
- `smaller`, da `bold` aneinandergereiht ist und vor jedem `smaller`-Schlüsselwort erscheinen muss.

### Geschweifte Klammern (`{ }`)

Der _Multiplikator für geschweifte Klammern_, der zwei durch ein Komma getrennte Ganzzahlen A und B einschließt, gibt an, dass die Entität **mindestens A-mal und höchstens B-mal erscheinen muss**.

```css
bold smaller{1,3}
```

Dieses Beispiel entspricht folgenden Werten:

- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`

Aber nicht:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `bold smaller smaller smaller smaller`, da `smaller` höchstens dreimal erscheinen darf.
- `smaller`, da `bold` aneinandergereiht ist und vor jedem `smaller`-Schlüsselwort erscheinen muss.

### Rautezeichen (`#`)

Der _Rautezeichen-Multiplikator_ gibt an, dass die Entität einmal oder mehrmals wiederholt werden kann (z.B. der Plus-Multiplikator), aber jedes Vorkommen wird durch ein Komma (',') getrennt.

```css
bold smaller#
```

Dieses Beispiel entspricht folgenden Werten:

- `bold smaller`
- `bold smaller, smaller`
- `bold smaller, smaller, smaller`, und so weiter.

Aber nicht:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `bold smaller smaller smaller`, da die verschiedenen Vorkommen von `smaller` durch Kommas getrennt sein müssen.
- `smaller`, da `bold` aneinandergereiht ist und vor jedem `smaller`-Schlüsselwort erscheinen muss.

Das Rautezeichen kann optional von geschweiften Klammern gefolgt werden, um anzugeben, wie oft die Entität wiederholt wird.

```css
bold smaller#{1,3}
```

Dieses Beispiel entspricht folgenden Werten:

- `bold smaller`
- `bold smaller, smaller`
- `bold smaller, smaller, smaller`

Aber nicht:

- `bold smaller, smaller, smaller, smaller`, da `smaller` höchstens dreimal erscheinen darf.

```css
bold smaller#{2}
```

Dieses Beispiel entspricht dem folgenden Wert:

- `bold smaller, smaller`

Aber nicht:

- `bold smaller`, da `smaller` genau zweimal erscheinen muss.

### Ausrufezeichen (`!`)

Der _Ausrufezeichen-Multiplikator_ nach einer Gruppe gibt an, dass die Gruppe erforderlich ist und mindestens einen Wert erzeugen muss; selbst wenn die Grammatik der Elemente innerhalb der Gruppe andernfalls erlauben würde, dass der gesamte Inhalt ausgelassen wird, darf mindestens ein Komponentenwert nicht ausgelassen werden.

```css
[ bold? smaller? ]!
```

Dieses Beispiel entspricht folgenden Werten:

- `bold`
- `smaller`
- `bold smaller`

Aber nicht:

- weder `bold` noch `smaller`, da einer von ihnen erscheinen muss.
- `smaller bold`, da `bold` aneinandergereiht ist und vor dem `smaller`-Schlüsselwort erscheinen muss.
- `bold smaller bold`, da `bold` und `smaller` nur einmal erscheinen dürfen.

## Klammerbereichsnotation (`[min,max]`)

Einige Typen können numerische Werte innerhalb eines bestimmten Bereichs akzeptieren. Zum Beispiel kann die [`column-count`](/de/docs/Web/CSS/column-count)-Eigenschaft einen ganzzahligen Wert zwischen positiv 1 und Unendlich, inklusive, akzeptieren. Die entsprechende Syntax sieht folgendermaßen aus:

```plain
<integer [1,∞]>
```

Ein Wert außerhalb dieses angegebenen Bereichs führt dazu, dass die gesamte Deklaration ungültig ist, und wird daher vom Browser ignoriert.

Die _Klammerbereichsnotation_ `[min, max]` gibt einen inklusiven Bereich zwischen einem `min`- und `max`-Wert an. Diese Notation wird in numerischen Typ-Notationen verwendet und kann Einheiten enthalten, z.B. `<angle [0,180deg]>`. Positive und negative Unendlichkeit (-∞ und ∞) dürfen keine Einheiten haben. In Einheiten spezifizierte Typen können Nullwerte mit oder ohne Einheiten haben, z.B. `<time [0s,10s]>` oder `<time [0,10s]>`.

Hier sind einige weitere Beispiele:

- `<integer [-∞,∞]>`: Jede ganze Zahl von negativer Unendlichkeit bis positiver Unendlichkeit.
- `<integer [0,∞]>`: Jede ganze Zahl von 0 bis positive Unendlichkeit ist gültig. Negative ganze Zahlen sind ungültig.
- `<time [0s,10s]>` oder `<time [0,10s]>`: Jede Dauer von 0 bis 10 Sekunden ist gültig.
- `<integer [-∞,-1]> | <integer [1,∞]>`: Jede ganze Zahl außer Null ist gültig.

## Zusammenfassung

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Zeichen</th>
      <th scope="col">Name</th>
      <th scope="col">Beschreibung</th>
      <th scope="col">Beispiel</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4">Kombinatoren</th>
    </tr>
    <tr>
      <td></td>
      <td>Aneinanderreihung</td>
      <td>Komponenten sind obligatorisch und sollten in dieser Reihenfolge erscheinen</td>
      <td><code>solid &#x3C;length></code></td>
    </tr>
    <tr>
      <td><code>&#x26;&#x26;</code></td>
      <td>Doppeltes Und-Zeichen</td>
      <td>Komponenten sind obligatorisch, können aber in beliebiger Reihenfolge erscheinen</td>
      <td><code>&#x3C;length> &#x26;&#x26; &#x3C;string></code></td>
    </tr>
    <tr>
      <td><code>||</code></td>
      <td>Doppelbalken</td>
      <td>
        Mindestens eine der Komponenten muss vorhanden sein, und sie können in beliebiger Reihenfolge erscheinen.
      </td>
      <td>
        <code>&#x3C;'border-image-outset'> || &#x3C;'border-image-slice'></code>
      </td>
    </tr>
    <tr>
      <td><code>|</code></td>
      <td>Einfacher Balken</td>
      <td>Genau eine der Komponenten muss vorhanden sein</td>
      <td><code>smaller | small | normal | big | bigger</code></td>
    </tr>
    <tr>
      <td><code>[ ]</code></td>
      <td>Klammern</td>
      <td>Gruppieren von Komponenten, um Vorrangregeln zu umgehen</td>
      <td><code>bold [ thin &#x26;&#x26; &#x3C;length> ]</code></td>
    </tr>
    <tr>
      <th colspan="4">Multiplikatoren</th>
    </tr>
    <tr>
      <td></td>
      <td>Kein Multiplikator</td>
      <td>Genau 1 Mal</td>
      <td><code>solid</code></td>
    </tr>
    <tr>
      <td><code>*</code></td>
      <td>Sternchen</td>
      <td>0 oder mehr Male</td>
      <td><code>bold smaller*</code></td>
    </tr>
    <tr>
      <td><code>+</code></td>
      <td>Pluszeichen</td>
      <td>1 oder mehr Male</td>
      <td><code>bold smaller+</code></td>
    </tr>
    <tr>
      <td><code>?</code></td>
      <td>Fragezeichen</td>
      <td>0 oder 1 Mal (<em>optional</em>)</td>
      <td><code>bold smaller?</code></td>
    </tr>
    <tr>
      <td><code>{min,max}</code></td>
      <td>Geschweifte Klammern</td>
      <td>Mindestens <code>min</code> Mal, höchstens <code>max</code> Mal</td>
      <td><code>bold smaller{1,3}</code></td>
    </tr>
    <tr>
      <td><code>#</code></td>
      <td>Rautezeichen</td>
      <td>
        1 oder mehr Male, wobei jedes Vorkommen durch ein Komma
        (<code>,</code>) getrennt ist
      </td>
      <td><code>bold smaller#</code></td>
    </tr>
    <tr>
      <td><code>!</code></td>
      <td>Ausrufezeichen</td>
      <td>Gruppe muss mindestens 1 Wert erzeugen</td>
      <td><code>[ bold? smaller? ]!</code></td>
    </tr>
    <tr>
      <th colspan="4">Bereiche</th>
    </tr>
    <tr>
      <td><code>[min,max]</code></td>
      <td>Numerischer Klammerbereich</td>
      <td>Gibt einen numerischen Bereich an</td>
      <td><code>&#x3C;integer [0,∞]></code></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Siehe auch

- Wichtige CSS-Konzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/Syntax)
  - [Kommentare](/de/docs/Web/CSS/Comments)
  - [Spezifität](/de/docs/Web/CSS/Specificity)
  - [Vererbung](/de/docs/Web/CSS/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
  - [Rand-Zusammenfall](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Anfangswerte](/de/docs/Web/CSS/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/actual_value)
  - **Wertedefinition Syntax**
  - [Kurzform-Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
  - [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
