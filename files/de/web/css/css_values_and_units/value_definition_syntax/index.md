---
title: Wertdefinierungssyntax
slug: Web/CSS/CSS_Values_and_Units/Value_definition_syntax
l10n:
  sourceCommit: 4e1bf706f08556292e02202486fae8b616cfc358
---

{{CSSRef}}

Die **CSS-Wertdefinierungssyntax**, eine formale Grammatik, wird verwendet, um die Menge der gültigen Werte für eine CSS-Eigenschaft oder Funktion zu definieren. Neben dieser Syntax kann die Menge der gültigen Werte durch semantische Einschränkungen weiter eingeschränkt werden (zum Beispiel, wenn eine Zahl strikt positiv sein muss).

Die Definierungssyntax beschreibt, welche Werte erlaubt sind und die Interaktionen zwischen ihnen. Eine Komponente kann ein _Schlüsselwort_, einige Zeichen, die als _Literal_ gelten, oder ein Wert eines bestimmten CSS-Datentyps oder einer anderen CSS-Eigenschaft sein.

## Komponentenwerttypen

### Schlüsselwörter

#### Generische Schlüsselwörter

Ein Schlüsselwort mit einer vordefinierten Bedeutung erscheint wörtlich, ohne Anführungszeichen. Zum Beispiel: `auto`, `smaller` oder `ease-in`.

#### CSS-weite Schlüsselwörter

Alle CSS-Eigenschaften akzeptieren die Schlüsselwörter `inherit`, `initial`, `revert`, `revert-layer` und `unset`. Sie werden nicht in der Wertdefinition angezeigt, sondern sind implizit definiert.

### Literale

In CSS können einige Zeichen allein auftreten, wie der Schrägstrich (`/`) oder das Komma (`,`), und werden in einer Eigenschaftsdefinition verwendet, um deren Teile zu trennen. Das Komma wird häufig verwendet, um Werte in Aufzählungen zu trennen oder Parameter in mathematisch anmutenden Funktionen; der Schrägstrich trennt oft Teile des Wertes, die semantisch unterschiedlich, aber von gemeinsamer Syntax sind. Typischerweise wird der Schrägstrich in Kurzschreibweisen verwendet, um Komponenten desselben Typs, aber zu verschiedenen Eigenschaften gehörend, zu trennen.

Beide Symbole erscheinen wörtlich in einer Wertdefinition.

### Datentypen

#### Grundlegende Datentypen

Einige Datentypen werden in CSS universell verwendet und sind einmalig für alle in der Spezifikation definierten Werte. Diese werden als _grundlegende Datentypen_ bezeichnet und werden durch ihren Namen, umgeben von den Symbolen `<` und `>`, dargestellt: {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;string&gt;")}}, …

#### Nicht-terminale Datentypen

Weniger gebräuchliche Datentypen, sogenannte _nicht-terminale Datentypen_, sind ebenfalls von `<` und `>` umgeben.

Nicht-terminale Datentypen sind von zwei Arten:

- Datentypen _mit demselben Namen wie eine Eigenschaft_, in Anführungszeichen gesetzt. In diesem Fall teilt der Datentyp dieselbe Wertemenge wie die Eigenschaft. Sie werden oft in der Definition von Kurzschreibweisen verwendet.
- Datentypen _ohne denselben Namen wie eine Eigenschaft_. Diese Datentypen ähneln den grundlegenden Datentypen sehr. Sie unterscheiden sich nur in der physischen Lage ihrer Definition von den grundlegenden Datentypen. In diesem Fall liegt die Definition normalerweise physisch sehr nahe an der Definition der Eigenschaft, die sie verwendet.

## Komponentenwertkombinatoren

### Klammern

_Mit Klammern_ werden mehrere Entitäten, Kombinatoren und Multiplikatoren umschlossen und dann als eine einzelne Komponente transformiert. Sie werden verwendet, um **Komponenten zu gruppieren, um die Vorrangregeln zu umgehen**.

```css
bold [ thin && <length> ]
```

Dieses Beispiel passt zu den folgenden Werten:

- `bold thin 2vh`
- `bold 0 thin`
- `bold thin 3.5em`

Aber nicht:

- `thin bold 3em`, da `bold` mit der von den Klammern definierten Komponente verknüpft ist, muss es davor erscheinen.

### Juxtaposition

Mehrere Schlüsselwörter, Literale oder Datentypen nebeneinander zu platzieren, nur durch ein oder mehrere Leerzeichen getrennt, nennt man _Juxtaposition_. Alle juxtapositionierten Komponenten sind **verpflichtend und sollten in exakt der Reihenfolge erscheinen**.

```css
bold <length>, thin
```

Dieses Beispiel passt zu den folgenden Werten:

- `bold 1em, thin`
- `bold 0, thin`
- `bold 2.5cm, thin`
- `bold 3vh, thin`

Aber nicht:

- `thin 1em, bold`, da die Entitäten in der angegebenen Reihenfolge stehen müssen
- `bold 1em thin`, da die Entitäten verpflichtend sind; das Komma, ein Literal, muss vorhanden sein
- `bold 0.5ms, thin`, da die `ms`-Werte kein {{CSSxRef("&lt;length&gt;")}}

### Doppeltes kaufmännisches Und

Zwei oder mehr Komponenten durch ein _doppeltes kaufmännisches Und_ (`&&`) zu trennen, bedeutet, dass alle diese Entitäten **verpflichtend, jedoch in beliebiger Reihenfolge erscheinen können**.

```css
bold && <length>
```

Dieses Beispiel passt zu den folgenden Werten:

- `bold 1em`
- `bold 0`
- `2.5cm bold`
- `3vh bold`

Aber nicht:

- `bold`, da beide Komponenten im Wert erscheinen müssen.
- `bold 1em bold`, da beide Komponenten nur einmal erscheinen dürfen.

> [!NOTE]
> Juxtaposition hat Vorrang gegenüber dem doppelten kaufmännischen Und, was bedeutet, dass `bold thin && <length>` gleichbedeutend ist mit `[ bold thin ] && <length>`. Es beschreibt `bold thin <length>` oder `<length> bold thin`, aber nicht `bold <length> thin`.

### Doppelte Stange

Das Trennen von zwei oder mehr Komponenten durch eine _doppelte Stange_ (`||`) bedeutet, dass alle Entitäten Optionen sind: **mindestens eine muss vorhanden sein, und sie können in beliebiger Reihenfolge erscheinen**. Typischerweise wird dies verwendet, um die unterschiedlichen Werte einer [Kurzschreibeigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) zu definieren.

```css
<'border-width'> || <'border-style'> || <'border-color'>
```

Dieses Beispiel passt zu den folgenden Werten:

- `1em solid blue`
- `blue 1em`
- `solid 1px yellow`

Aber nicht:

- `blue yellow`, da eine Komponente höchstens einmal erscheinen muss.
- `bold`, da es kein als Wert erlaubtes Schlüsselwort für eine der Entitäten ist.

> [!NOTE]
> Das doppelte kaufmännische Und hat Vorrang gegenüber der doppelten Stange, was bedeutet, dass `bold || thin && <length>` gleichbedeutend ist mit `bold || [ thin && <length> ]`. Es beschreibt `bold`, `thin <length>`, `bold thin <length>`, oder `thin <length> bold`, aber nicht `<length> bold thin`, da bold, wenn nicht weggelassen, vor oder nach der gesamten `thin && <length>`-Komponente platziert werden muss.

### Einzelne Stange

Das Trennen von zwei oder mehr Entitäten durch eine _einzelne Stange_ (`|`) bedeutet, dass alle Entitäten exklusive Optionen sind: **genau eine dieser Optionen muss vorhanden sein**. Dies wird typischerweise verwendet, um eine Liste möglicher Schlüsselwörter zu trennen.

```css
<percentage> | <length> | left | center | right | top | bottom
```

Dieses Beispiel passt zu den folgenden Werten:

- `3%`
- `0`
- `3.5em`
- `left`
- `center`
- `right`
- `top`
- `bottom`

Aber nicht:

- `center 3%`, da nur eine der Komponenten vorhanden sein muss.
- `3em 4.5em`, da eine Komponente höchstens einmal vorhanden sein darf.

> [!NOTE]
> Die doppelte Stange hat Vorrang gegenüber der einzelnen Stange, was bedeutet, dass `bold | thin || <length>` gleichbedeutend ist mit `bold | [ thin || <length> ]`. Es beschreibt `bold`, `thin`, `<length>`, `<length> thin`, oder `thin <length>`, aber nicht `bold <length>`, da nur eine Entität von jeder Seite des `|`-Kombinators vorhanden sein kann.

## Komponentenwertmultiplikatoren

Ein Multiplikator ist ein Zeichen, das angibt, wie oft eine vorangehende Entität wiederholt werden kann. Ohne einen Multiplikator muss eine Entität genau einmal erscheinen.

Multiplikatoren können nicht addiert werden und haben Vorrang vor allen Kombinatoren.

### Asterisk (`*`)

Der _Asterisk-Multiplikator_ zeigt an, dass die Entität **null-, einmal oder mehrmals** erscheinen kann.

```css
bold smaller*
```

Dieses Beispiel passt zu den folgenden Werten:

- `bold`
- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller` und so weiter.

Aber nicht:

- `smaller`, da `bold` juxtapositioniert ist und vor jedem `smaller`-Schlüsselwort erscheinen muss.

### Plus (`+`)

Der _Plus-Multiplikator_ zeigt an, dass die Entität **ein- oder mehrmals** erscheinen kann.

```css
bold smaller+
```

Dieses Beispiel passt zu den folgenden Werten:

- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller` und so weiter.

Aber nicht:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `smaller`, da `bold` juxtapositioniert ist und vor jedem `smaller`-Schlüsselwort erscheinen muss.

### Fragezeichen (`?`)

Der _Fragezeichen-Multiplikator_ zeigt an, dass die Entität optional ist und **null- oder einmal** erscheinen muss.

```css
bold smaller?
```

Dieses Beispiel passt zu den folgenden Werten:

- `bold`
- `bold smaller`

Aber nicht:

- `bold smaller smaller`, da `smaller` höchstens einmal erscheinen muss.
- `smaller`, da `bold` juxtapositioniert ist und vor jedem `smaller`-Schlüsselwort erscheinen muss.

### Geschweifte Klammern (`{ }`)

Der _geschweifte Klammer-Multiplikator_, der zwei durch ein Komma getrennte Ganzzahlen, A und B, einschließt, gibt an, dass die Entität **mindestens A mal und höchstens B mal** erscheinen muss.

```css
bold smaller{1,3}
```

Dieses Beispiel passt zu den folgenden Werten:

- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`

Aber nicht:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `bold smaller smaller kleiner kleiner`, da `smaller` höchstens dreimal erscheinen darf.
- `smaller`, da `bold` juxtapositioniert ist und vor jedem `smaller`-Schlüsselwort erscheinen muss

### Hash-Markierung (`#`)

Der _Hash-Markierung-Multiplikator_ gibt an, dass die Entität ein- oder mehrmals wiederholt werden kann (ähnlich dem Plus-Multiplikator), aber jede Vorkommen muss durch ein Komma (',') getrennt sein.

```css
bold smaller#
```

Dieses Beispiel passt zu den folgenden Werten:

- `bold smaller`
- `bold smaller, smaller`
- `bold smaller, smaller, smaller` und so weiter.

Aber nicht:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `bold smaller smaller kleiner`, da die unterschiedlichen Vorkommen von `smaller` durch Kommas getrennt sein müssen.
- `smaller`, da `bold` juxtapositioniert ist und vor jedem `smaller`-Schlüsselwort erscheinen muss.

Die Hash-Markierung kann optional durch geschweifte Klammern gefolgt werden, um anzugeben, wie oft die Entität wiederholt wird.

```css
bold smaller#{1,3}
```

Dieses Beispiel passt zu den folgenden Werten:

- `bold smaller`
- `bold smaller, smaller`
- `bold smaller, smaller, smaller`

Aber nicht:

- `bold smaller, smaller, smaller, kleiner`, da `smaller` höchstens dreimal erscheinen darf.

```css
bold smaller#{2}
```

Dieses Beispiel passt zum folgenden Wert:

- `bold smaller, smaller`

Aber nicht:

- `bold smaller`, da `smaller` genau zweimal erscheinen muss.

### Ausrufezeichen (`!`)

Der _Ausrufezeichen-Multiplikator_ nach einer Gruppe zeigt an, dass die Gruppe erforderlich ist und mindestens einen Wert produzieren muss; selbst wenn die Grammatik der Elemente innerhalb der Gruppe zulassen würde, dass der gesamte Inhalt weggelassen wird, muss mindestens ein Komponentenwert nicht weggelassen werden.

```css
[ bold? smaller? ]!
```

Dieses Beispiel passt zu den folgenden Werten:

- `bold`
- `smaller`
- `bold kleiner`

Aber nicht:

- weder `bold` noch `smaller`, da eines von beiden erscheinen muss.
- `smaller bold`, da `bold` juxtapositioniert ist und vor dem `smaller`-Schlüsselwort erscheinen muss.
- `bold smaller bold`, da `bold` und `smaller` nur einmal erscheinen dürfen.

## Eingeschlossene Bereichsnotation (`[min,max]`)

Einige Typen können numerische Werte innerhalb eines bestimmten Bereichs akzeptieren. Zum Beispiel kann die [`column-count`](/de/docs/Web/CSS/column-count)-Eigenschaft einen ganzzahligen Wert zwischen positiv 1 und Unendlichkeit, einschließlich, akzeptieren. Die entsprechende Syntax sieht so aus:

```plain
<integer [1,∞]>
```

Jeder Wert außerhalb dieses festgelegten Bereichs macht die gesamte Deklaration ungültig, daher wird der Browser sie ignorieren.

Die _eingeschlossene Bereichsnotation_ `[min, max]` gibt einen inklusiven Bereich zwischen einem `min`- und `max`-Wert an. Diese Notation wird in numerischen Typnotationen verwendet und kann Einheiten einschließen, z. B. `<angle [0,180deg]>`. Positive und negative Unendlichkeit (-∞ und ∞) dürfen keine Einheiten angegeben haben. Typen, die in Einheiten angegeben sind, können Nullwerte mit oder ohne Einheiten angegeben haben, z. B. `<time [0s,10s]>` oder `<time [0,10s]>`.

Hier sind einige weitere Beispiele:

- `<integer [-∞,∞]>`: Jeder Ganzzahlwert von negativer bis positiver Unendlichkeit.
- `<integer [0,∞]>`: Jede Ganzzahl von 0 bis zur positiven Unendlichkeit ist gültig. Negative Ganzzahlen sind ungültig.
- `<time [0s,10s]>` oder `<time [0,10s]>`: Jede Dauer von 0 bis 10 Sekunden ist gültig.
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
      <td>Komponenten sind verpflichtend und sollten in dieser Reihenfolge erscheinen</td>
      <td><code>solid &#x3C;length></code></td>
    </tr>
    <tr>
      <td><code>&#x26;&#x26;</code></td>
      <td>Doppeltes kaufmännisches Und</td>
      <td>Komponenten sind verpflichtend, können aber in beliebiger Reihenfolge erscheinen</td>
      <td><code>&#x3C;length> &#x26;&#x26; &#x3C;string></code></td>
    </tr>
    <tr>
      <td><code>||</code></td>
      <td>Doppelte Stange</td>
      <td>Mindestens eine der Komponenten muss vorhanden sein, und sie können in beliebiger Reihenfolge erscheinen.</td>
      <td><code>&#x3C;'border-image-outset'> || &#x3C;'border-image-slice'></code></td>
    </tr>
    <tr>
      <td><code>|</code></td>
      <td>Einzelne Stange</td>
      <td>Genau eine der Komponenten muss vorhanden sein</td>
      <td><code>smaller | small | normal | big | bigger</code></td>
    </tr>
    <tr>
      <td><code>[ ]</code></td>
      <td>Klammern</td>
      <td>Komponenten gruppieren, um Vorrangregeln zu umgehen</td>
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
      <td>Asterisk</td>
      <td>0 oder mehrmals</td>
      <td><code>bold smaller*</code></td>
    </tr>
    <tr>
      <td><code>+</code></td>
      <td>Pluszeichen</td>
      <td>1 oder mehrmals</td>
      <td><code>bold smaller+</code></td>
    </tr>
    <tr>
      <td><code>?</code></td>
      <td>Fragezeichen</td>
      <td>0 oder 1 Mal (das heißt <em>optional)</em></td>
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
      <td>Hash-Markierung</td>
      <td>1 oder mehrmals, wobei jede Vorkommen durch ein Komma (<code>,</code>) getrennt ist</td>
      <td><code>bold smaller#</code></td>
    </tr>
    <tr>
      <td><code>!</code></td>
      <td>Ausrufezeichen</td>
      <td>Gruppe muss mindestens 1 Wert produzieren</td>
      <td><code>[ bold? smaller? ]!</code></td>
    </tr>
    <tr>
      <th colspan="4">Bereiche</th>
    </tr>
    <tr>
      <td><code>[min,max]</code></td>
      <td>Numerischer eingeschlossener Bereich</td>
      <td>Gibt einen numerischen Bereich an</td>
      <td><code>&#x3C;integer [0,∞]></code></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Siehe auch

- Wichtige CSS-Konzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - {{Glossary("Layout_mode", "Layout-Modi")}}
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
  - [Zusammenfallende Ränder](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Initialwerte](/de/docs/Web/CSS/CSS_cascade/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/actual_value)
  - **Wertdefinierungssyntax**
  - [Kurzschreibweisen](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
