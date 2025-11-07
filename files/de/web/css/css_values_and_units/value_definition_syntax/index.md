---
title: Wertdefinition Syntax
slug: Web/CSS/CSS_values_and_units/Value_definition_syntax
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **CSS-Wertdefinition Syntax**, eine formale Grammatik, wird verwendet, um die Menge gültiger Werte für eine CSS-Eigenschaft oder Funktion zu definieren. Zusätzlich zu dieser Syntax kann die Menge der gültigen Werte durch semantische Einschränkungen weiter eingeschränkt werden (z. B. muss eine Zahl streng positiv sein).

Die Definition Syntax beschreibt, welche Werte erlaubt sind und wie sie miteinander interagieren. Eine Komponente kann ein _Schlüsselwort_, einige als _Literal_ betrachtete Zeichen oder ein Wert eines bestimmten CSS-Datentyps oder einer anderen CSS-Eigenschaft sein.

## Komponenten-Werttypen

### Schlüsselwörter

#### Allgemeine Schlüsselwörter

Ein Schlüsselwort mit einer vordefinierten Bedeutung erscheint wörtlich, ohne Anführungszeichen. Zum Beispiel: `auto`, `smaller`, oder `ease-in`.

#### CSS-weite Schlüsselwörter

Alle CSS-Eigenschaften akzeptieren die Schlüsselwörter `inherit`, `initial`, `revert`, `revert-layer` und `unset`. Sie werden nicht in der Wertdefinition gezeigt und sind implizit definiert.

### Literale

In CSS können einige Zeichen allein erscheinen, wie der Schrägstrich (`/`) oder das Komma (`,`), und werden in einer Eigenschaftsdefinition verwendet, um deren Teile zu trennen. Das Komma wird oft verwendet, um Werte in Aufzählungen zu trennen, oder Parameter in mathematischen Funktionen; der Schrägstrich trennt oft Teile des Wertes, die semantisch unterschiedlich, aber syntaktisch gleich sind. Typischerweise wird der Schrägstrich in Kurzform-Eigenschaften verwendet, um Komponenten desselben Typs zu trennen, die jedoch zu unterschiedlichen Eigenschaften gehören.

Beide Symbole erscheinen wörtlich in einer Wertdefinition.

### Datentypen

#### Grundlegende Datentypen

Einige Datentypen werden in CSS verwendet und sind einmal für alle Werte in der Spezifikation definiert. Diese _grundlegenden Datentypen_ werden mit ihrem Namen umgeben von den Symbolen `<` und `>` dargestellt: {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;string&gt;")}}, …

#### Nicht-terminale Datentypen

Weniger häufig verwendete Datentypen, genannt _nicht-terminale Datentypen_, sind ebenfalls von `<` und `>` umgeben.

Nicht-terminale Datentypen sind von zwei Arten:

- Datentypen, die denselben Namen wie eine Eigenschaft teilen und zwischen Anführungszeichen gesetzt werden. In diesem Fall teilt der Datentyp denselben Wertumfang wie die Eigenschaft. Sie werden oft in der Definition von Kurzform-Eigenschaften verwendet.
- Datentypen, die nicht denselben Namen wie eine Eigenschaft teilen. Diese Datentypen sind den grundlegenden Datentypen sehr ähnlich. Sie unterscheiden sich nur in der physischen Lage ihrer Definition. In diesem Fall befindet sich die Definition normalerweise physisch sehr nahe an der Definition der Eigenschaft, die sie verwendet.

## Komponenten-Wert-Kombinatoren

### Klammern

_Klammern_ umschließen mehrere Entitäten, Kombinatoren und Multiplikatoren und transformieren sie dann in eine einzige Komponente. Sie werden verwendet, um **Komponenten zu gruppieren, um Vorrangregeln zu umgehen**.

{{CSSSyntaxRaw(`example = bold [ thin && <length> ]`)}}

Dieses Beispiel stimmt mit den folgenden Werten überein:

- `bold thin 2vh`
- `bold 0 thin`
- `bold thin 3.5em`

Aber nicht:

- `thin bold 3em`, da `bold` mit der Komponente definiert durch die Klammern juxtapositioniert ist, muss es davor erscheinen.

### Juxtaposition

Das Platzieren mehrerer Schlüsselwörter, Literale oder Datentypen direkt nebeneinander, nur durch ein oder mehrere Leerzeichen getrennt, wird _Juxtaposition_ genannt. Alle juxtapositionierten Komponenten sind **verpflichtend und sollten in der genauen Reihenfolge erscheinen**.

{{CSSSyntaxRaw(`example = bold <length>, thin`)}}

Dieses Beispiel stimmt mit den folgenden Werten überein:

- `bold 1em, thin`
- `bold 0, thin`
- `bold 2.5cm, thin`
- `bold 3vh, thin`

Aber nicht:

- `thin 1em, bold`, da die Entitäten in der ausgedrückten Reihenfolge sein müssen
- `bold 1em thin`, da die Entitäten verpflichtend sind; das Komma, ein Literal, muss vorhanden sein
- `bold 0.5ms, thin`, da die `ms` Werte nicht {{CSSxRef("&lt;length&gt;")}} sind

### Doppel-Ampersand

Das Trennen von zwei oder mehr Komponenten durch ein _doppeltes Ampersand_, `&&`, bedeutet, dass alle diese Entitäten **verpflichtend sind, aber in beliebiger Reihenfolge erscheinen dürfen**.

{{CSSSyntaxRaw(`example = bold && <length>`)}}

Dieses Beispiel stimmt mit den folgenden Werten überein:

- `bold 1em`
- `bold 0`
- `2.5cm bold`
- `3vh bold`

Aber nicht:

- `bold`, da beide Komponenten im Wert erscheinen müssen.
- `bold 1em bold`, da beide Komponenten nur einmal erscheinen dürfen.

> [!NOTE]
> Juxtaposition hat Vorrang über das doppelte Ampersand, was bedeutet, dass `bold thin && <length>` äquivalent ist zu `[ bold thin ] && <length>`. Es beschreibt `bold thin <length>` oder `<length> bold thin` aber nicht `bold <length> thin`.

### Doppelstrich

Das Trennen von zwei oder mehr Komponenten durch einen _doppelten Strich_, `||`, bedeutet, dass alle Entitäten Optionen sind: **mindestens eine muss vorhanden sein, und sie dürfen in beliebiger Reihenfolge erscheinen**. Typischerweise wird dies verwendet, um die verschiedenen Werte einer [Kurzform-Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) zu definieren.

{{CSSSyntaxRaw(`example = <number> || <length> || <color>`)}}

Dieses Beispiel stimmt mit den folgenden Werten überein:

- `1em 1 blue`
- `blue 1em`
- `1 1px yellow`

Aber nicht:

- `blue yellow`, da eine Komponente höchstens einmal erscheinen darf.
- `bold`, da es kein als Wert einer der Entitäten erlaubtes Schlüsselwort ist.

> [!NOTE]
> Der doppelte Ampersand hat Vorrang über den doppelten Strich, was bedeutet, dass `bold || thin && <length>` äquivalent ist zu `bold || [ thin && <length> ]`. Es beschreibt `bold`, `thin <length>`, `bold thin <length>`, oder `thin <length> bold` aber nicht `<length> bold thin`, da bold, wenn nicht weggelassen, vor oder nach der gesamten `thin && <length>` Komponente platziert werden muss.

### Einfacher Strich

Das Trennen von zwei oder mehr Entitäten durch einen _einfachen Strich_, `|`, bedeutet, dass alle Entitäten exklusive Optionen sind: **genau eine dieser Optionen muss vorhanden sein**. Dies wird typischerweise verwendet, um eine Liste möglicher Schlüsselwörter zu trennen.

{{CSSSyntaxRaw(`example = <percentage> | <length> | left | center | right | top | bottom`)}}

Dieses Beispiel stimmt mit den folgenden Werten überein:

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
> Der doppelte Strich hat Vorrang über den einfachen Strich, was bedeutet, dass `bold | thin || <length>` äquivalent ist zu `bold | [ thin || <length> ]`. Es beschreibt `bold`, `thin`, `<length>`, `<length> thin`, oder `thin <length>` aber nicht `bold <length>`, da nur eine Entität von jeder Seite des `|` Kombinators vorhanden sein darf.

## Komponenten-Wert-Multiplikatoren

Ein Multiplikator ist ein Zeichen, das angibt, wie oft eine vorhergehende Entität wiederholt werden kann. Ohne Multiplikator muss eine Entität genau einmal erscheinen.

Multiplikatoren können nicht hinzugefügt werden und haben Vorrang über alle Kombinatoren.

### Asterisk (`*`)

Der _Asterisk-Multiplikator_ gibt an, dass die Entität **null, einmal oder mehrmals** erscheinen kann.

{{CSSSyntaxRaw(`example = bold smaller*`)}}

Dieses Beispiel stimmt mit den folgenden Werten überein:

- `bold`
- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`, und so weiter.

Aber nicht:

- `smaller`, da `bold` juxtapositioniert ist und vor jedem `smaller`-Schlüsselwort erscheinen muss.

### Plus (`+`)

Der _Plus-Multiplikator_ gibt an, dass die Entität **einmal oder mehrmals** erscheinen kann.

{{CSSSyntaxRaw(`example = bold smaller+`)}}

Dieses Beispiel stimmt mit den folgenden Werten überein:

- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`, und so weiter.

Aber nicht:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `smaller`, da `bold` juxtapositioniert ist und vor jedem `smaller`-Schlüsselwort erscheinen muss.

### Fragezeichen (`?`)

Der _Fragezeichen-Multiplikator_ gibt an, dass die Entität optional ist und **null oder einmal** erscheinen muss.

{{CSSSyntaxRaw(`example = bold smaller?`)}}

Dieses Beispiel stimmt mit den folgenden Werten überein:

- `bold`
- `bold smaller`

Aber nicht:

- `bold smaller smaller`, da `smaller` höchstens einmal erscheinen darf.
- `smaller`, da `bold` juxtapositioniert ist und vor jedem `smaller`-Schlüsselwort erscheinen muss.

### Geschweifte Klammern (`{ }`)

Der _geschweifte Klammern-Multiplikator_, der zwei durch ein Komma getrennte ganze Zahlen A und B umschließt, gibt an, dass die Entität **mindestens A- und höchstens B-mal** erscheinen muss.

{{CSSSyntaxRaw(`example = bold smaller{1,3}`)}}

Dieses Beispiel stimmt mit den folgenden Werten überein:

- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`

Aber nicht:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `bold smaller smaller smaller smaller`, da `smaller` höchstens dreimal erscheinen darf.
- `smaller`, da `bold` juxtapositioniert ist und vor jedem `smaller`-Schlüsselwort erscheinen muss.

### Rautezeichen (`#`)

Der _Rautezeichen-Multiplikator_ gibt an, dass die Entität einmal oder mehrmals wiederholt werden kann (zum Beispiel der Plus Multiplikator), aber jede Vorkommen ist durch ein Komma (',') getrennt.

{{CSSSyntaxRaw(`example = bold smaller#`)}}

Dieses Beispiel stimmt mit den folgenden Werten überein:

- `bold smaller`
- `bold smaller, smaller`
- `bold smaller, smaller, smaller`, und so weiter.

Aber nicht:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `bold smaller smaller smaller`, da die unterschiedlichen Vorkommen von `smaller` durch Kommas getrennt sein müssen.
- `smaller`, da `bold` juxtapositioniert ist und vor jedem `smaller`-Schlüsselwort erscheinen muss.

Das Rautezeichen kann optional von geschweiften Klammern gefolgt werden, um anzugeben, wie oft die Entität wiederholt wird.

{{CSSSyntaxRaw(`example = bold smaller#{1,3}`)}}

Dieses Beispiel stimmt mit den folgenden Werten überein:

- `bold smaller`
- `bold smaller, smaller`
- `bold smaller, smaller, smaller`

Aber nicht:

- `bold smaller, smaller, smaller, smaller`, da `smaller` höchstens dreimal erscheinen darf.

{{CSSSyntaxRaw(`example = bold smaller#{2}`)}}

Dieses Beispiel stimmt mit dem folgenden Wert überein:

- `bold smaller, smaller`

Aber nicht:

- `bold smaller`, da `smaller` genau zweimal erscheinen muss.

### Ausrufezeichen (`!`)

Der _Ausrufezeichen-Multiplikator_ nach einer Gruppe gibt an, dass die Gruppe erforderlich ist und mindestens einen Wert erzeugen muss; selbst wenn die Grammatik der Elemente innerhalb der Gruppe es sonst zulassen würde, dass der gesamte Inhalt weggelassen wird, darf mindestens ein Komponentenwert nicht weggelassen werden.

{{CSSSyntaxRaw(`example = [ bold? smaller? ]!`)}}

Dieses Beispiel stimmt mit den folgenden Werten überein:

- `bold`
- `smaller`
- `bold smaller`

Aber nicht:

- weder `bold` noch `smaller`, da einer von ihnen erscheinen muss.
- `smaller bold`, da `bold` juxtapositioniert ist und vor dem `smaller`-Schlüsselwort erscheinen muss.
- `bold smaller bold`, da `bold` und `smaller` nur einmal erscheinen dürfen.

## Bereichsnotation in Klammern (`[min,max]`)

Einige Typen können numerische Werte innerhalb eines bestimmten Bereichs akzeptieren. Zum Beispiel kann die [`column-count`](/de/docs/Web/CSS/Reference/Properties/column-count) Eigenschaft einen ganzzahligen Wert zwischen positiv 1 und unendlich, einschließlich annehmen. Die entsprechende Syntax sieht so aus:

{{CSSSyntaxRaw(`example = <integer [1,∞]>`)}}

Jeder Wert außerhalb dieses angegebenen Bereichs führt dazu, dass die gesamte Deklaration ungültig wird, daher wird der Browser sie ignorieren.

Die _Bereichsnotation in Klammern_ `[min, max]` gibt einen inklusiven Bereich zwischen einem `min`- und einem `max`-Wert an. Diese Notation wird in numerischen Typnotationen verwendet und kann Einheiten enthalten, z. B. `<angle [0,180deg]>`. Positive und negative Unendlichkeit (-∞ und ∞) dürfen keine Einheiten haben. Typen, die in Einheiten angegeben sind, können Nullwerte mit oder ohne Einheiten angegeben haben, zum Beispiel `<time [0s,10s]>` oder `<time [0,10s]>`.

Hier sind einige weitere Beispiele:

- `<integer [-∞,∞]>`: Jeder ganzzahlige Wert von negativer bis positiver Unendlichkeit.
- `<integer [0,∞]>`: Jeder ganzzahlige Wert von 0 bis positiver Unendlichkeit ist gültig. Negative Ganzzahlen sind ungültig.
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
      <td>Komponenten sind zwingend und sollten in dieser Reihenfolge erscheinen</td>
      <td><code>solid &#x3C;length></code></td>
    </tr>
    <tr>
      <td><code>&#x26;&#x26;</code></td>
      <td>Doppel-Ampersand</td>
      <td>Komponenten sind zwingend, können jedoch in beliebiger Reihenfolge erscheinen</td>
      <td><code>&#x3C;length> &#x26;&#x26; &#x3C;string></code></td>
    </tr>
    <tr>
      <td><code>||</code></td>
      <td>Doppelstrich</td>
      <td>
        Mindestens eine der Komponenten muss vorhanden sein, und sie können in
        beliebiger Reihenfolge erscheinen.
      </td>
      <td>
        <code>&#x3C;'border-image-outset'> || &#x3C;'border-image-slice'></code>
      </td>
    </tr>
    <tr>
      <td><code>|</code></td>
      <td>Einfacher Strich</td>
      <td>Genau eine der Komponenten muss vorhanden sein</td>
      <td><code>smaller | small | normal | big | bigger</code></td>
    </tr>
    <tr>
      <td><code>[ ]</code></td>
      <td>Klammern</td>
      <td>Gruppierung von Komponenten zur Umgehung von Vorrangregeln</td>
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
      <td>0 oder 1 Mal (also <em>optional</em>)</td>
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
        1 oder mehrmals, wobei jedes Vorkommen durch ein Komma
        (<code>,</code>) getrennt wird
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
      <td>Numerischer Bereich in Klammern</td>
      <td>Gibt einen numerischen Bereich an</td>
      <td><code>&#x3C;integer [0,∞]></code></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Siehe auch

- CSS-Schlüsselkonzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax/Introduction)
  - [Kommentare](/de/docs/Web/CSS/Guides/Syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/Guides/Box_model/Introduction)
  - {{Glossary("Layout_mode", "Layout-Modi")}}
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model)
  - [Margins-Zusammenfallen](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
  - Werte
    - [Anfangswerte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value)
  - **Wertdefinition Syntax**
  - [Kurzform-Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
  - {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
