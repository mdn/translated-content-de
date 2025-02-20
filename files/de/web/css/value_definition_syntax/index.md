---
title: Wertdefinitionssyntax
slug: Web/CSS/Value_definition_syntax
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

Die **CSS-Wertdefinitionssyntax**, eine formale Grammatik, wird verwendet, um die Menge gültiger Werte für eine CSS-Eigenschaft oder -Funktion zu definieren. Zusätzlich zu dieser Syntax kann die Menge der gültigen Werte durch semantische Einschränkungen weiter begrenzt werden (zum Beispiel, dass eine Zahl streng positiv sein muss).

Die Definitionssyntax beschreibt, welche Werte zulässig sind und wie sie sich gegenseitig beeinflussen. Eine Komponente kann ein _Schlüsselwort_ sein, einige Zeichen, die als _Literal_ betrachtet werden, oder ein Wert eines bestimmten CSS-Datentyps oder einer anderen CSS-Eigenschaft.

## Arten von Komponentenwerten

### Schlüsselwörter

#### Allgemeine Schlüsselwörter

Ein Schlüsselwort mit einer vordefinierten Bedeutung erscheint wortwörtlich, ohne Anführungszeichen, zum Beispiel: `auto`, `smaller` oder `ease-in`.

#### CSS-übergreifende Schlüsselwörter

Alle CSS-Eigenschaften akzeptieren die Schlüsselwörter `inherit`, `initial`, `revert`, `revert-layer` und `unset`. Diese werden in der Wertdefinition nicht explizit angegeben und gelten implizit als definiert.

### Literale

Im CSS können einige Zeichen alleine vorkommen, wie der Schrägstrich (`/`) oder das Komma (`,`). Diese werden in einer Eigenschaftsdefinition verwendet, um ihre Teile zu trennen. Das Komma wird oft verwendet, um Werte in Aufzählungen oder Parameter in mathematischen Funktionen zu trennen; der Schrägstrich trennt oft Teile des Wertes, die semantisch unterschiedlich sind, jedoch eine gemeinsame Syntax haben. Typischerweise wird der Schrägstrich in Kurzform-Eigenschaften verwendet, um Komponenten desselben Typs zu trennen, die jedoch zu unterschiedlichen Eigenschaften gehören.

Beide Symbole erscheinen wortwörtlich in einer Wertdefinition.

### Datentypen

#### Grundlegende Datentypen

Einige Datentypen werden in CSS durchgehend verwendet und einmal für alle Werte in der Spezifikation definiert. Diese sogenannten _grundlegenden Datentypen_ werden mit ihrem Namen in den Symbolen `<` und `>` dargestellt: {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;string&gt;")}}, …

#### Nicht-terminale Datentypen

Weniger häufig verwendete Datentypen, sogenannte _nicht-terminale Datentypen_, werden ebenfalls von `<` und `>` eingeschlossen.

Nicht-terminale Datentypen lassen sich in zwei Arten unterteilen:

- Datentypen, die _denselben Namen wie eine Eigenschaft haben_, in Anführungszeichen gesetzt. Diese Datentypen teilen dieselbe Menge an Werten wie die Eigenschaft und werden häufig in der Definition von Kurzform-Eigenschaften verwendet.
- Datentypen, die _nicht denselben Namen wie eine Eigenschaft haben_. Diese Datentypen sind den grundlegenden Datentypen sehr ähnlich und unterscheiden sich nur durch den physikalischen Standort ihrer Definition. In diesem Fall befindet sich die Definition in der Regel sehr nahe bei der Definition der Eigenschaft, die sie verwendet.

## Kombinatoren für Komponentenwerte

### Klammern

_Klammern_ umfassen mehrere Entitäten, Kombinatoren und Multiplikatoren und transformieren sie als eine einzelne Komponente. Sie werden verwendet, um **Komponenten zu gruppieren und Vorrangregeln zu umgehen**.

```css
bold [ thin && <length> ]
```

Dieses Beispiel entspricht folgenden Werten:

- `bold thin 2vh`
- `bold 0 thin`
- `bold thin 3.5em`

Nicht jedoch:

- `thin bold 3em`, da `bold` in Verbindung mit der durch die Klammern definierten Komponente steht und davor erscheinen muss.

### Juxtaposition

Das Platzieren mehrerer Schlüsselwörter, Literale oder Datentypen nebeneinander, nur durch ein oder mehrere Leerzeichen getrennt, wird als _Juxtaposition_ bezeichnet. Alle juxtapositionierten Komponenten sind **obligatorisch und müssen in der angegebenen Reihenfolge erscheinen**.

```css
bold <length>, thin
```

Dieses Beispiel entspricht folgenden Werten:

- `bold 1em, thin`
- `bold 0, thin`
- `bold 2.5cm, thin`
- `bold 3vh, thin`

Nicht jedoch:

- `thin 1em, bold`, da die Entitäten in der angegebenen Reihenfolge erscheinen müssen.
- `bold 1em thin`, da die Entitäten obligatorisch sind; das Komma, ein Literal, muss vorhanden sein.
- `bold 0.5ms, thin`, da die `ms`-Werte keine {{CSSxRef("&lt;length&gt;")}} sind.

### Doppelte Kaufmännische Unds (&&)

Das Trennen von zwei oder mehr Komponenten durch ein _doppeltes Kaufmännisches Und_, `&&`, bedeutet, dass alle diese Entitäten **obligatorisch sind, aber in beliebiger Reihenfolge erscheinen dürfen**.

```css
bold && <length>
```

Dieses Beispiel entspricht folgenden Werten:

- `bold 1em`
- `bold 0`
- `2.5cm bold`
- `3vh bold`

Nicht jedoch:

- `bold`, da beide Komponenten im Wert erscheinen müssen.
- `bold 1em bold`, da beide Komponenten nur einmal erscheinen dürfen.

> [!NOTE]
> Juxtaposition hat Vorrang vor dem doppelten Kaufmännischen Und. Dies bedeutet, dass `bold thin && <length>` gleichbedeutend ist mit `[ bold thin ] && <length>`. Es beschreibt `bold thin <length>` oder `<length> bold thin`, aber nicht `bold <length> thin`.

### Doppelte Senkrechte Striche

Das Trennen von zwei oder mehr Komponenten durch _doppelte Senkrechte Striche_, `||`, bedeutet, dass alle Entitäten optional sind: **mindestens eine muss vorhanden sein, und sie dürfen in beliebiger Reihenfolge erscheinen**. Typischerweise wird dies verwendet, um die verschiedenen Werte einer [Kurzform-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) zu definieren.

```css
<'border-width'> || <'border-style'> || <'border-color'>
```

Dieses Beispiel entspricht folgenden Werten:

- `1em solid blue`
- `blue 1em`
- `solid 1px yellow`

Nicht jedoch:

- `blue yellow`, da eine Komponente höchstens einmal vorkommen darf.
- `bold`, da es kein Schlüsselwort ist, das als Wert einer der Entitäten zulässig ist.

> [!NOTE]
> Das doppelte Kaufmännische Und hat Vorrang vor den doppelten Senkrechten Strichen. Das bedeutet, dass `bold || thin && <length>` gleichbedeutend ist mit `bold || [ thin && <length> ]`. Es beschreibt `bold`, `thin <length>`, `bold thin <length>` oder `thin <length> bold`, aber nicht `<length> bold thin`, da `bold`, wenn nicht ausgelassen, vor oder nach der gesamten `thin && <length>`-Komponente platziert werden muss.

### Einzelner Senkrechter Strich

Das Trennen von zwei oder mehr Entitäten durch einen _einzelnen Senkrechten Strich_, `|`, bedeutet, dass alle Entitäten exklusive Optionen sind: **genau eine dieser Optionen muss vorhanden sein**. Dies wird typischerweise verwendet, um eine Liste möglicher Schlüsselwörter zu trennen.

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

Nicht jedoch:

- `center 3%`, da nur eine der Komponenten vorhanden sein darf.
- `3em 4.5em`, da eine Komponente höchstens einmal vorhanden sein darf.

> [!NOTE]
> Die doppelten Senkrechten Striche haben Vorrang vor dem einzelnen Senkrechten Strich, was bedeutet, dass `bold | thin || <length>` gleichbedeutend ist mit `bold | [ thin || <length> ]`. Es beschreibt `bold`, `thin`, `<length>`, `<length> thin` oder `thin <length>`, aber nicht `bold <length>`, da nur eine Entität von jeder Seite des `|`-Kombinators vorhanden sein darf.

## Multiplikatoren für Komponentenwerte

Ein Multiplikator ist ein Zeichen, das angibt, wie oft eine vorangehende Entität wiederholt werden kann. Ohne Multiplikator muss eine Entität genau einmal erscheinen.

Multiplikatoren können nicht hinzugefügt werden und haben Vorrang vor allen Kombinatoren.

### Sternchen (`*`)

Der _Sternchen-Multiplikator_ gibt an, dass die Entität **null, einmal oder mehrmals** erscheinen darf.

```css
bold smaller*
```

Dieses Beispiel entspricht folgenden Werten:

- `bold`
- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller` und so weiter.

Nicht jedoch:

- `smaller`, da `bold` juxtapositioniert ist und vor einem beliebigen `smaller`-Schlüsselwort erscheinen muss.

### Pluszeichen (`+`)

Der _Plus-Multiplikator_ gibt an, dass die Entität **einmal oder mehrmals** erscheinen darf.

```css
bold smaller+
```

Dieses Beispiel entspricht folgenden Werten:

- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller` und so weiter.

Nicht jedoch:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `smaller`, da `bold` juxtapositioniert ist und vor einem beliebigen `smaller`-Schlüsselwort erscheinen muss.

### Fragezeichen (`?`)

Der _Fragezeichen-Multiplikator_ gibt an, dass die Entität optional ist und **null oder einmal erscheinen darf**.

```css
bold smaller?
```

Dieses Beispiel entspricht folgenden Werten:

- `bold`
- `bold smaller`

Nicht jedoch:

- `bold smaller smaller`, da `smaller` höchstens einmal erscheinen darf.
- `smaller`, da `bold` juxtapositioniert ist und vor einem beliebigen `smaller`-Schlüsselwort erscheinen muss.

### Geschweifte Klammern (`{ }`)

Der _Geschweifte-Klammern-Multiplikator_, der zwei durch ein Komma getrennte Ganzzahlen, A und B, enthält, zeigt an, dass die Entität **mindestens A-mal und höchstens B-mal erscheinen muss**.

```css
bold smaller{1,3}
```

Dieses Beispiel entspricht folgenden Werten:

- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`

Nicht jedoch:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `bold smaller smaller smaller smaller`, da `smaller` höchstens dreimal erscheinen darf.
- `smaller`, da `bold` juxtapositioniert ist und vor einem beliebigen `smaller`-Schlüsselwort erscheinen muss.

### Rautezeichen (`#`)

Der _Rautezeichen-Multiplikator_ zeigt an, dass die Entität einmal oder mehrmals wiederholt werden darf (wie beim Plus-Multiplikator), jedoch wird jede Wiederholung durch ein Komma (`,`) getrennt.

```css
bold smaller#
```

Dieses Beispiel entspricht folgenden Werten:

- `bold smaller`
- `bold smaller, smaller`
- `bold smaller, smaller, smaller` und so weiter.

Nicht jedoch:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `bold smaller smaller smaller`, da die unterschiedlichen Vorkommen von `smaller` durch Kommas getrennt sein müssen.
- `smaller`, da `bold` juxtapositioniert ist und vor einem beliebigen `smaller`-Schlüsselwort erscheinen muss.

Optionale geschweifte Klammern können dem Rautezeichen folgen, um anzugeben, wie oft die Entität wiederholt wird.

```css
bold smaller#{1,3}
```

Dieses Beispiel entspricht folgenden Werten:

- `bold smaller`
- `bold smaller, smaller`
- `bold smaller, smaller, smaller`

Nicht jedoch:

- `bold smaller, smaller, smaller, smaller`, da `smaller` höchstens dreimal erscheinen darf.

```css
bold smaller#{2}
```

Dieses Beispiel entspricht folgendem Wert:

- `bold smaller, smaller`

Nicht jedoch:

- `bold smaller`, da `smaller` genau zweimal erscheinen muss.

### Ausrufezeichen (`!`)

Der _Ausrufezeichen-Multiplikator_ nach einer Gruppe zeigt an, dass die Gruppe erforderlich ist und mindestens einen Wert erzeugen muss, auch wenn die Grammatik der Elemente innerhalb der Gruppe ansonsten zulassen würde, den gesamten Inhalt wegzulassen; mindestens ein Komponentenwert darf nicht weggelassen werden.

```css
[ bold? smaller? ]!
```

Dieses Beispiel entspricht folgenden Werten:

- `bold`
- `smaller`
- `bold smaller`

Nicht jedoch:

- weder `bold` noch `smaller`, da eine davon erscheinen muss.
- `smaller bold`, da `bold` juxtapositioniert ist und vor dem Schlüsselwort `smaller` erscheinen muss.
- `bold smaller bold`, da `bold` und `smaller` nur einmal erscheinen dürfen.

## Bereichsnotation mit Klammern (`[min,max]`)

Einige Typen können numerische Werte innerhalb eines bestimmten Bereichs akzeptieren. Die Eigenschaft [`column-count`](/de/docs/Web/CSS/column-count) beispielsweise kann einen ganzzahligen Wert zwischen positiv 1 und Unendlich, einschließlich, akzeptieren. Die entsprechende Syntax sieht so aus:

```plain
<integer [1,∞]>
```

Jeder Wert außerhalb dieses angegebenen Bereichs macht die gesamte Deklaration ungültig, sodass der Browser sie ignorieren wird.

Die _Bereichsnotation mit Klammern_ `[min,max]` gibt einen einschließlich gültigen Bereich zwischen einem `min`- und einem `max`-Wert an. Diese Notation wird in numerischen Typnotationen verwendet und kann Einheiten enthalten, z. B. `<angle [0,180deg]>`. Positive und negative Unendlichkeit (-∞ und ∞) dürfen keine Einheiten haben. Typen mit Einheiten können Nullwerte mit oder ohne Einheiten enthalten, z. B. `<time [0s,10s]>` oder `<time [0,10s]>`.

Hier sind einige weitere Beispiele:

- `<integer [-∞,∞]>`: Eine beliebige Ganzzahl von negativer bis positiver Unendlichkeit.
- `<integer [0,∞]>`: Eine Ganzzahl von 0 bis zur positiven Unendlichkeit. Negative Ganzzahlen sind ungültig.
- `<time [0s,10s]>` oder `<time [0,10s]>`: Eine beliebige Dauer von 0 bis 10 Sekunden ist gültig.
- `<integer [-∞,-1]> | <integer [1,∞]>`: Jede Ganzzahl außer Null ist gültig.

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
      <td>Juxtaposition</td>
      <td>Komponenten sind obligatorisch und müssen in dieser Reihenfolge erscheinen</td>
      <td><code>solid &#x3C;length></code></td>
    </tr>
    <tr>
      <td><code>&#x26;&#x26;</code></td>
      <td>Doppeltes Kaufmännisches Und</td>
      <td>Komponenten sind obligatorisch, können jedoch in beliebiger Reihenfolge erscheinen</td>
      <td><code>&#x3C;length> &#x26;&#x26; &#x3C;string></code></td>
    </tr>
    <tr>
      <td><code>||</code></td>
      <td>Doppelte Senkrechte Striche</td>
      <td>
        Mindestens eine der Komponenten muss vorhanden sein und kann in beliebiger Reihenfolge erscheinen.
      </td>
      <td>
        <code>&#x3C;'border-image-outset'> || &#x3C;'border-image-slice'></code>
      </td>
    </tr>
    <tr>
      <td><code>|</code></td>
      <td>Einzelner Senkrechter Strich</td>
      <td>Genau eine der Komponenten muss vorhanden sein</td>
      <td><code>smaller | small | normal | big | bigger</code></td>
    </tr>
    <tr>
      <td><code>[ ]</code></td>
      <td>Klammern</td>
      <td>Gruppiert Komponenten, um Vorrangregeln zu umgehen</td>
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
      <td>0- oder mehrmals</td>
      <td><code>bold smaller*</code></td>
    </tr>
    <tr>
      <td><code>+</code></td>
      <td>Pluszeichen</td>
      <td>Ein- oder mehrmals</td>
      <td><code>bold smaller+</code></td>
    </tr>
    <tr>
      <td><code>?</code></td>
      <td>Fragezeichen</td>
      <td>0- oder 1-mal (das heißt <em>optional</em>)</td>
      <td><code>bold smaller?</code></td>
    </tr>
    <tr>
      <td><code>{min,max}</code></td>
      <td>Geschweifte Klammern</td>
      <td>Mindestens <code>min</code>-Mal, höchstens <code>max</code>-Mal</td>
      <td><code>bold smaller{1,3}</code></td>
    </tr>
    <tr>
      <td><code>#</code></td>
      <td>Rautezeichen</td>
      <td>
        Ein- oder mehrmals, mit jeder Vorkommen durch ein Komma
        (<code>,</code>) getrennt
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
      <td>Nummerische Klammer-Bereiche</td>
      <td>Spezifiziert einen nummerischen Bereich</td>
      <td><code>&#x3C;integer [0,∞]></code></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Siehe auch

- Grundlegende CSS-Konzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
  - [Margin-Collapsing](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Initialwerte](/de/docs/Web/CSS/CSS_cascade/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/actual_value)
  - **Wertdefinitionssyntax**
  - [Kurzform-Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
  - [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
