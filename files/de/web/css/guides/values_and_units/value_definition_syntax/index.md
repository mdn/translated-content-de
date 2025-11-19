---
title: Wertdefinition-Syntax
slug: Web/CSS/Guides/Values_and_units/Value_definition_syntax
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

**CSS-Wertdefinitionssyntax**, auch formale Grammatik genannt, wird verwendet, um die Menge der gültigen Werte für eine CSS-Eigenschaft oder Funktion zu definieren. Zusätzlich zu dieser Syntax kann die Menge der gültigen Werte durch semantische Einschränkungen weiter eingeschränkt werden (zum Beispiel, dass eine Zahl streng positiv sein muss).

Die Definitionssyntax beschreibt, welche Werte erlaubt sind und die Interaktionen zwischen ihnen. Eine Komponente kann ein _Schlüsselwort_, einige Zeichen, die als _Literal_ betrachtet werden, oder ein Wert eines gegebenen CSS-Datentyps oder einer anderen CSS-Eigenschaft sein.

## Werttypen der Komponenten

### Schlüsselwörter

#### Generische Schlüsselwörter

Ein Schlüsselwort mit vordefinierter Bedeutung erscheint wörtlich, ohne Anführungszeichen. Zum Beispiel: `auto`, `smaller` oder `ease-in`.

#### CSS-weite Schlüsselwörter

Alle CSS-Eigenschaften akzeptieren die Schlüsselwörter `inherit`, `initial`, `revert`, `revert-layer` und `unset`. Sie werden in der Wertdefinition nicht angezeigt und sind implizit definiert.

### Literale

In CSS können einige Zeichen alleine erscheinen, wie der Schrägstrich (`/`) oder das Komma (`,`), und werden in einer Eigenschaftsdefinition verwendet, um ihre Teile zu trennen. Das Komma wird oft verwendet, um Werte in Aufzählungen zu trennen oder Parameter in mathematischen Funktionen; der Schrägstrich trennt oft Teile des Wertes, die semantisch unterschiedlich sind, aber eine gemeinsame Syntax haben. Typischerweise wird der Schrägstrich in Kurzschreibweise-Eigenschaften verwendet, um Komponenten desselben Typs zu trennen, die jedoch zu unterschiedlichen Eigenschaften gehören.

Beide Symbole erscheinen wörtlich in einer Wertdefinition.

### Datentypen

#### Grundlegende Datentypen

Einige Datentypen werden in CSS durchgehend verwendet und sind einmalig für alle Werte in der Spezifikation definiert. Diese _grundlegenden Datentypen_ werden mit ihrem Namen umgeben von den Symbolen `<` und `>` dargestellt: {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;string&gt;")}}, …

#### Nichtterminale Datentypen

Weniger häufige Datentypen, _nichtterminale Datentypen_ genannt, sind ebenfalls von `<` und `>` umgeben.

Nichtterminale Datentypen sind von zwei Arten:

- Datentypen, die _denselben Namen wie eine Eigenschaft teilen_ und in Anführungszeichen gesetzt sind. In diesem Fall teilt der Datentyp denselben Wertemenge wie die Eigenschaft. Sie werden oft in der Definition von Kurzschreibweise-Eigenschaften verwendet.
- Datentypen, die _nicht denselben Namen wie eine Eigenschaft teilen_. Diese Datentypen sind den grundlegenden Datentypen sehr nahe. Sie unterscheiden sich von den grundlegenden Datentypen nur im physikalischen Ort ihrer Definition. In diesem Fall ist die Definition üblicherweise physikalisch sehr nah an der Definition der Eigenschaft, die sie verwendet.

## Kombinatoren der Komponentenwerte

### Klammern

_Klammern_ umschließen mehrere Entitäten, Kombinatoren und Multiplikatoren und verwandeln sie dann in eine einzige Komponente. Sie werden verwendet, um **Komponenten zu gruppieren, um die Vorrangregeln zu umgehen**.

{{CSSSyntaxRaw(`example = bold [ thin && <length> ]`)}}

Dieses Beispiel entspricht den folgenden Werten:

- `bold thin 2vh`
- `bold 0 thin`
- `bold thin 3.5em`

Aber nicht:

- `thin bold 3em`, da `bold` neben der von den Klammern definierten Komponente steht, muss es vor dieser erscheinen.

### Juxtaposition

Das Platzieren mehrerer Schlüsselwörter, Literale oder Datentypen nebeneinander, nur durch Leerzeichen getrennt, wird als _Juxtaposition_ bezeichnet. Alle juxtapositionierten Komponenten sind **verpflichtend und müssen in der genauen Reihenfolge erscheinen**.

{{CSSSyntaxRaw(`example = bold <length>, thin`)}}

Dieses Beispiel entspricht den folgenden Werten:

- `bold 1em, thin`
- `bold 0, thin`
- `bold 2.5cm, thin`
- `bold 3vh, thin`

Aber nicht:

- `thin 1em, bold`, da die Entitäten in der ausgedrückten Reihenfolge sein müssen
- `bold 1em thin`, da die Entitäten verpflichtend sind; das Komma, ein Literal, muss vorhanden sein
- `bold 0.5ms, thin`, da die `ms`-Werte keine {{CSSxRef("&lt;length&gt;")}} sind

### Doppelt-Ampersand

Das Trennen von zwei oder mehr Komponenten durch ein _doppeltes Ampersand_, `&&`, bedeutet, dass all diese Entitäten **verpflichtend sind, aber in beliebiger Reihenfolge erscheinen können**.

{{CSSSyntaxRaw(`example = bold && <length>`)}}

Dieses Beispiel entspricht den folgenden Werten:

- `bold 1em`
- `bold 0`
- `2.5cm bold`
- `3vh bold`

Aber nicht:

- `bold`, da beide Komponenten im Wert erscheinen müssen.
- `bold 1em bold`, da beide Komponenten nur einmal erscheinen dürfen.

> [!NOTE]
> Juxtaposition hat Vorrang vor dem doppelten Ampersand, was bedeutet, dass `bold thin && <length>` equivalent zu `[ bold thin ] && <length>` ist. Es beschreibt `bold thin <length>` oder `<length> bold thin`, aber nicht `bold <length> thin`.

### Doppelbalken

Das Trennen von zwei oder mehr Komponenten durch einen _Doppelbalken_, `||`, bedeutet, dass alle Entitäten Optionen sind: **mindestens eine muss vorhanden sein, und sie können in beliebiger Reihenfolge erscheinen**. Dies wird typischerweise verwendet, um die verschiedenen Werte einer [Kurzschreibweise-Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) zu definieren.

{{CSSSyntaxRaw(`example = <number> || <length> || <color>`)}}

Dieses Beispiel entspricht den folgenden Werten:

- `1em 1 blue`
- `blue 1em`
- `1 1px yellow`

Aber nicht:

- `blue yellow`, da eine Komponente höchstens einmal erscheinen darf.
- `bold`, da es kein Schlüsselwort ist, das als Wert einer der Entitäten erlaubt ist.

> [!NOTE]
> Der doppelte Ampersand hat Vorrang vor dem Doppelbalken, was bedeutet, dass `bold || thin && <length>` equivalent zu `bold || [ thin && <length> ]` ist. Es beschreibt `bold`, `thin <length>`, `bold thin <length>`, oder `thin <length> bold`, aber nicht `<length> bold thin`, da bold, wenn nicht weggelassen, vor oder nach der gesamten `thin && <length>`-Komponente platziert werden muss.

### Einzelbalken

Das Trennen von zwei oder mehr Entitäten mit einem _Einzelbalken_, `|`, bedeutet, dass alle Entitäten exklusive Optionen sind: **genau eine dieser Optionen muss vorhanden sein**. Dies wird typischerweise verwendet, um eine Liste möglicher Schlüsselwörter zu trennen.

{{CSSSyntaxRaw(`example = <percentage> | <length> | left | center | right | top | bottom`)}}

Dieses Beispiel entspricht den folgenden Werten:

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
> Der Doppelbalken hat Vorrang vor dem Einzelbalken, was bedeutet, dass `bold | thin || <length>` entsprechend zu `bold | [ thin || <length> ]` ist. Es beschreibt `bold`, `thin`, `<length>`, `<length> thin`, oder `thin <length>`, aber nicht `bold <length>` da nur eine Entität von jeder Seite des `|` Kombinators vorhanden sein darf.

## Multiplikatoren der Komponentenwerte

Ein Multiplikator ist ein Zeichen, das angibt, wie oft eine vorhergehende Entität wiederholt werden kann. Ohne Multiplikator muss eine Entität genau einmal erscheinen.

Multiplikatoren können nicht hinzugefügt werden und haben Vorrang vor allen Kombinatoren.

### Sternchen (`*`)

Der _Sternchenmultiplikator_ gibt an, dass die Entität **null, einmal oder mehrere Male** erscheinen darf.

{{CSSSyntaxRaw(`example = bold smaller*`)}}

Dieses Beispiel entspricht den folgenden Werten:

- `bold`
- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`, und so weiter.

Aber nicht:

- `smaller`, da `bold` juxtapositioniert ist und vor jedem `smaller`-Schlüsselwort erscheinen muss.

### Pluszeichen (`+`)

Der _Plusmultiplikator_ gibt an, dass die Entität **ein oder mehrere Male** erscheinen darf.

{{CSSSyntaxRaw(`example = bold smaller+`)}}

Dieses Beispiel entspricht den folgenden Werten:

- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`, und so weiter.

Aber nicht:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `smaller`, da `bold` juxtapositioniert ist und vor jedem `smaller`-Schlüsselwort erscheinen muss.

### Fragezeichen (`?`)

Der _Fragezeichenmultiplikator_ gibt an, dass die Entität optional ist und **null oder ein Mal** erscheinen muss.

{{CSSSyntaxRaw(`example = bold smaller?`)}}

Dieses Beispiel entspricht den folgenden Werten:

- `bold`
- `bold smaller`

Aber nicht:

- `bold smaller smaller`, da `smaller` höchstens einmal erscheinen muss.
- `smaller`, da `bold` juxtapositioniert ist und vor jedem `smaller`-Schlüsselwort erscheinen muss.

### Geschweifte Klammern (`{ }`)

Der _geschweifte Klammer-Multiplikator_, der zwei durch ein Komma getrennte ganze Zahlen A und B umschließt, gibt an, dass die Entität **mindestens A-mal und höchstens B-mal** erscheinen muss.

{{CSSSyntaxRaw(`example = bold smaller{1,3}`)}}

Dieses Beispiel entspricht den folgenden Werten:

- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`

Aber nicht:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `bold smaller smaller smaller smaller`, da `smaller` höchstens dreimal erscheinen muss.
- `smaller`, da `bold` juxtapositioniert ist und vor jedem `smaller`-Schlüsselwort erscheinen muss.

### Rautezeichen (`#`)

Der _Rautezeichen-Multiplikator_ gibt an, dass die Entität einmal oder mehrmals wiederholt werden kann (zum Beispiel der Plusmultiplikator), aber jede Vorkommen wird durch ein Komma (',') getrennt.

{{CSSSyntaxRaw(`example = bold smaller#`)}}

Dieses Beispiel entspricht den folgenden Werten:

- `bold smaller`
- `bold smaller, smaller`
- `bold smaller, smaller, smaller`, und so weiter.

Aber nicht:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `bold smaller smaller smaller`, da die verschiedenen Vorkommen von `smaller` durch Kommas getrennt werden müssen.
- `smaller`, da `bold` juxtapositioniert ist und vor jedem `smaller`-Schlüsselwort erscheinen muss.

Der Rautezeichen kann optional von geschweiften Klammern gefolgt werden, um anzugeben, wie oft die Entität wiederholt wird.

{{CSSSyntaxRaw(`example = bold smaller#{1,3}`)}}

Dieses Beispiel entspricht den folgenden Werten:

- `bold smaller`
- `bold smaller, smaller`
- `bold smaller, smaller, smaller`

Aber nicht:

- `bold smaller, smaller, smaller, smaller`, da `smaller` höchstens dreimal erscheinen muss.

{{CSSSyntaxRaw(`example = bold smaller#{2}`)}}

Dieses Beispiel entspricht dem folgenden Wert:

- `bold smaller, smaller`

Aber nicht:

- `bold smaller`, da `smaller` genau zweimal erscheinen muss.

### Ausrufezeichen (`!`)

Der _Ausrufezeichen-Multiplikator_ nach einer Gruppe gibt an, dass die Gruppe erforderlich ist und mindestens einen Wert erzeugen muss; selbst wenn die Grammatik der in der Gruppe enthaltenen Elemente es sonst erlauben würde, den gesamten Inhalt wegzulassen, muss mindestens ein Komponentenwert enthalten sein.

{{CSSSyntaxRaw(`example = [ bold? smaller? ]!`)}}

Dieses Beispiel entspricht den folgenden Werten:

- `bold`
- `smaller`
- `bold smaller`

Aber nicht:

- weder `bold` noch `smaller`, da eines von beiden erscheinen muss.
- `smaller bold`, da `bold` juxtapositioniert ist und vor dem `smaller`-Schlüsselwort erscheinen muss.
- `bold smaller bold`, da `bold` und `smaller` nur einmal erscheinen dürfen.

## Klammerreiche-Notation (`[min,max]`)

Einige Typen können numerische Werte innerhalb eines bestimmten Bereichs akzeptieren. Beispielsweise kann die [`column-count`](/de/docs/Web/CSS/Reference/Properties/column-count)-Eigenschaft einen ganzzahligen Wert zwischen positiv eins und unendlich, einschließlich, akzeptieren. Die entsprechende Syntax sieht folgendermaßen aus:

{{CSSSyntaxRaw(`example = <integer [1,∞]>`)}}

Jeder Wert außerhalb dieses spezifizierten Bereichs führt dazu, dass die gesamte Deklaration ungültig ist, daher wird der Browser sie ignorieren.

Die _Klammerreiche-Notation_ `[min, max]` gibt einen inklusiven Bereich zwischen einem `min`- und einem `max`-Wert an. Diese Notation wird in numerischen Typnotations und kann Einheiten enthalten, z.B. `<angle [0,180deg]>`. Positive und negative Unendlichkeit (-∞ und ∞) dürfen keine Einheiten haben. Typen, die in Einheiten angegeben sind, können null Werte mit oder ohne Einheiten haben, zum Beispiel `<time [0s,10s]>` oder `<time [0,10s]>`.

Hier sind einige weitere Beispiele:

- `<integer [-∞,∞]>`: Jede Ganzzahl von negativer Unendlichkeit bis positiver Unendlichkeit.
- `<integer [0,∞]>`: Jede Ganzzahl von 0 bis positive Unendlichkeit ist gültig. Negative Ganzzahlen sind ungültig.
- `<time [0s,10s]>` oder `<time [0,10s]>`: Jede Dauer von 0 bis 10 Sekunden ist gültig.
- `<integer [-∞,-1]> | <integer [1,∞]>`: Jede Ganzzahl außer null ist gültig.

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
      <td>Double ampersand</td>
      <td>Komponenten sind verpflichtend, können aber in beliebiger Reihenfolge erscheinen</td>
      <td><code>&#x3C;length> &#x26;&#x26; &#x3C;string></code></td>
    </tr>
    <tr>
      <td><code>||</code></td>
      <td>Double bar</td>
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
      <td>Einzelbalken</td>
      <td>Genau eine der Komponenten muss vorhanden sein</td>
      <td><code>smaller | small | normal | big | bigger</code></td>
    </tr>
    <tr>
      <td><code>[ ]</code></td>
      <td>Klammern</td>
      <td>Gruppieren Sie Komponenten, um Vorrangregeln zu umgehen</td>
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
      <td>Rautezeichen</td>
      <td>
        1 oder mehrmals, wobei jedes Vorkommen durch ein Komma
        (<code>,</code>) getrennt ist
      </td>
      <td><code>bold smaller#</code></td>
    </tr>
    <tr>
      <td><code>!</code></td>
      <td>Ausrufezeichen</td>
      <td>Gruppen müssen mindestens 1 Wert erzeugen</td>
      <td><code>[ bold? smaller? ]!</code></td>
    </tr>
    <tr>
      <th colspan="4">Bereiche</th>
    </tr>
    <tr>
      <td><code>[min,max]</code></td>
      <td>Zahlenbereich mit eckigen Klammern</td>
      <td>Legt einen numerischen Bereich fest</td>
      <td><code>&#x3C;integer [0,∞]></code></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Siehe auch

- CSS Schlüsselkonzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax/Introduction)
  - [Kommentare](/de/docs/Web/CSS/Guides/Syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/Guides/Box_model/Introduction)
  - {{Glossary("Layout_mode", "Layoutmodi")}}
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model)
  - [Ränder zusammenfallen](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
  - Werte
    - [Initialwerte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value)
  - **Wertdefinition-Syntax**
  - [Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
  - {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
