---
title: Wertedefinitionssyntax
slug: Web/CSS/CSS_values_and_units/Value_definition_syntax
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Die **CSS-Wertedefinitionssyntax**, eine formale Grammatik, wird verwendet, um die Menge der gültigen Werte für eine CSS-Eigenschaft oder Funktion zu definieren. Zusätzlich zu dieser Syntax kann die Menge der gültigen Werte durch semantische Einschränkungen weiter eingeschränkt werden (zum Beispiel muss eine Zahl strikt positiv sein).

Die Definitionssyntax beschreibt, welche Werte erlaubt sind und die Wechselwirkungen zwischen ihnen. Eine Komponente kann ein _Schlüsselwort_, einige als _Literal_ betrachtete Zeichen oder ein Wert eines bestimmten CSS-Datentyps oder einer anderen CSS-Eigenschaft sein.

## Komponententypen

### Schlüsselwörter

#### Allgemeine Schlüsselwörter

Ein Schlüsselwort mit einer vordefinierten Bedeutung erscheint wörtlich, ohne Anführungszeichen. Zum Beispiel: `auto`, `smaller` oder `ease-in`.

#### CSS-weite Schlüsselwörter

Alle CSS-Eigenschaften akzeptieren die Schlüsselwörter `inherit`, `initial`, `revert`, `revert-layer` und `unset`. Diese werden in der Wertedefinition nicht angezeigt und sind implizit definiert.

### Literale

Im CSS können einige Zeichen, wie der Schrägstrich (`/`) oder das Komma (`,`), alleine stehen und werden in einer Eigenschaftsdefinition verwendet, um ihre Teile zu trennen. Das Komma wird oft verwendet, um Werte in Aufzählungen oder Parameter in mathematisch ähnlichen Funktionen zu trennen; der Schrägstrich trennt oft Teile des Wertes, die semantisch unterschiedlich sind, aber eine gemeinsame Syntax haben. Typischerweise wird der Schrägstrich in Kurzschreibweisen verwendet, um Komponenten desselben Typs zu trennen, die jedoch zu verschiedenen Eigenschaften gehören.

Beide Symbole erscheinen wörtlich in einer Wertedefinition.

### Datentypen

#### Grundlegende Datentypen

Einige Datentypen werden in ganz CSS verwendet und sind einmal für alle Werte in der Spezifikation definiert. Diese sogenannten _grundlegenden Datentypen_ werden mit ihrem Namen dargestellt, umgeben von den Symbolen `<` und `>`: {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;string&gt;")}}, …

#### Nichtterminale Datentypen

Weniger verbreitete Datentypen, die als _nichtterminale Datentypen_ bezeichnet werden, sind ebenfalls von `<` und `>` umgeben.

Nichtterminale Datentypen sind von zwei Arten:

- Datentypen, die _denselben Namen wie eine Eigenschaft_ teilen, in Anführungszeichen gesetzt. In diesem Fall hat der Datentyp denselben Wertebereich wie die Eigenschaft. Sie werden oft bei der Definition von Kurzschreibweisen verwendet.
- Datentypen, die _nicht denselben Namen wie eine Eigenschaft_ teilen. Diese Datentypen sind den grundlegenden Datentypen sehr ähnlich. Sie unterscheiden sich nur von den grundlegenden Datentypen durch die physische Lage ihrer Definition. In diesem Fall ist die Definition normalerweise physisch sehr nah an der Definition der Eigenschaft, die sie verwendet.

## Komponentenkombinatoren

### Klammern

_Klammern_ schließen mehrere Entitäten, Kombinatoren und Multiplikatoren ein und transformieren sie in eine einzige Komponente. Sie werden verwendet, um **Komponenten zu gruppieren, um die Vorrangregeln zu umgehen**.

{{CSSSyntaxRaw(`example = bold [ thin && <length> ]`)}}

Dieses Beispiel passt auf die folgenden Werte:

- `bold thin 2vh`
- `bold 0 thin`
- `bold thin 3.5em`

Aber nicht:

- `thin bold 3em`, da `bold` neben der durch die Klammern definierten Komponente steht, muss es davor erscheinen.

### Nebeneinanderstellung

Das Nebeneinanderlegen mehrerer Schlüsselwörter, Literale oder Datentypen, nur durch ein oder mehrere Leerzeichen getrennt, wird als _Nebeneinanderstellung_ bezeichnet. Alle nebeneinander gestellten Komponenten sind **verpflichtend und müssen in genau der Reihenfolge erscheinen**.

{{CSSSyntaxRaw(`example = bold <length>, thin`)}}

Dieses Beispiel passt zu den folgenden Werten:

- `bold 1em, thin`
- `bold 0, thin`
- `bold 2.5cm, thin`
- `bold 3vh, thin`

Aber nicht:

- `thin 1em, bold`, da die Entitäten in der ausgedrückten Ordnung sein müssen
- `bold 1em thin`, da die Entitäten obligatorisch sind; das Komma, ein Literal, muss vorhanden sein
- `bold 0.5ms, thin`, da `ms`-Werte keine {{CSSxRef("&lt;length&gt;")}} sind

### Doppelte Kaufmanns-Und

Das Trennen von zwei oder mehr Komponenten durch ein _doppeltes Kaufmanns-Und_, `&&`, bedeutet, dass alle diese Entitäten **obligatorisch, aber in beliebiger Reihenfolge** erscheinen können.

{{CSSSyntaxRaw(`example = bold && <length>`)}}

Dieses Beispiel passt zu den folgenden Werten:

- `bold 1em`
- `bold 0`
- `2.5cm bold`
- `3vh bold`

Aber nicht:

- `bold`, da beide Komponenten im Wert erscheinen müssen.
- `bold 1em bold`, da beide Komponenten nur einmal erscheinen dürfen.

> [!NOTE]
> Nebeneinanderstellung hat Vorrang vor dem doppelten Kaufmanns-Und, was bedeutet, dass `bold thin && <length>` gleichbedeutend mit `[ bold thin ] && <length>` ist. Es beschreibt `bold thin <length>` oder `<length> bold thin`, jedoch nicht `bold <length> thin`.

### Doppelte Stange

Das Trennen von zwei oder mehr Komponenten durch eine _doppelte Stange_, `||`, bedeutet, dass alle Entitäten Optionen sind: **mindestens eine muss vorhanden sein, und sie können in beliebiger Reihenfolge erscheinen**. Typischerweise wird dies verwendet, um die verschiedenen Werte einer [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) zu definieren.

{{CSSSyntaxRaw(`example = <number> || <length> || <color>`)}}

Dieses Beispiel passt zu den folgenden Werten:

- `1em 1 blue`
- `blue 1em`
- `1 1px yellow`

Aber nicht:

- `blue yellow`, da eine Komponente höchstens einmal erscheinen darf.
- `bold`, da es kein als Wert eines der Entitäten erlaubtes Schlüsselwort ist.

> [!NOTE]
> Das doppelte Kaufmanns-Und hat Vorrang vor der doppelten Stange, was bedeutet, dass `bold || thin && <length>` gleichbedeutend mit `bold || [ thin && <length> ]` ist. Es beschreibt `bold`, `thin <length>`, `bold thin <length>`, oder `thin <length> bold`, jedoch nicht `<length> bold thin`, da `bold`, wenn nicht weggelassen, vor oder nach der gesamten `thin && <length>`-Komponente platziert werden muss.

### Einfache Stange

Das Trennen von zwei oder mehr Entitäten durch eine _einfache Stange_, `|`, bedeutet, dass alle Entitäten exklusive Optionen sind: **Genau eine dieser Optionen muss vorhanden sein**. Dies wird typischerweise verwendet, um eine Liste möglicher Schlüsselwörter zu trennen.

{{CSSSyntaxRaw(`example = <percentage> | <length> | left | center | right | top | bottom`)}}

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

- `center 3%`, da nur eine der Komponenten vorhanden sein darf.
- `3em 4.5em`, da eine Komponente höchstens einmal vorhanden sein darf.

> [!NOTE]
> Die doppelte Stange hat Vorrang vor der einfachen Stange, was bedeutet, dass `bold | thin || <length>` gleichbedeutend mit `bold | [ thin || <length> ]` ist. Es beschreibt `bold`, `thin`, `<length>`, `<length> thin`, oder `thin <length>`, jedoch nicht `bold <length>`, da nur eine Entität von jeder Seite des `|`-Kombinators vorhanden sein darf.

## Komponentenmultiplikatoren

Ein Multiplikator ist ein Zeichen, das angibt, wie oft eine vorhergehende Entität wiederholt werden kann. Ohne einen Multiplikator muss eine Entität genau einmal erscheinen.

Multiplikatoren können nicht hinzugefügt werden und haben Vorrang vor allen Kombinatoren.

### Sternchen (`*`)

Der _Sternchen-Multiplikator_ gibt an, dass die Entität **null, einmal oder mehrmals erscheinen** kann.

{{CSSSyntaxRaw(`example = bold smaller*`)}}

Dieses Beispiel passt zu den folgenden Werten:

- `bold`
- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`, und so weiter.

Aber nicht:

- `smaller`, da `bold` nebeneinander steht und vor jedem `smaller`-Schlüsselwort erscheinen muss.

### Pluszeichen (`+`)

Der _Pluszeichen-Multiplikator_ gibt an, dass die Entität **einmal oder mehrmals erscheinen** kann.

{{CSSSyntaxRaw(`example = bold smaller+`)}}

Dieses Beispiel passt zu den folgenden Werten:

- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`, und so weiter.

Aber nicht:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `smaller`, da `bold` nebeneinander steht und vor jedem `smaller`-Schlüsselwort erscheinen muss.

### Fragezeichen (`?`)

Der _Fragezeichen-Multiplikator_ gibt an, dass die Entität optional ist und **null oder einmal erscheinen muss**.

{{CSSSyntaxRaw(`example = bold smaller?`)}}

Dieses Beispiel passt zu den folgenden Werten:

- `bold`
- `bold smaller`

Aber nicht:

- `bold smaller smaller`, da `smaller` höchstens einmal erscheinen darf.
- `smaller`, da `bold` nebeneinander steht und vor jedem `smaller`-Schlüsselwort erscheinen muss.

### Geschwungene Klammern (`{ }`)

Der _geschwungene Klammern-Multiplikator_, der zwei durch ein Komma getrennte ganze Zahlen A und B einschließt, gibt an, dass die Entität **mindestens A-mal und höchstens B-mal erscheinen** muss.

{{CSSSyntaxRaw(`example = bold smaller{1,3}`)}}

Dieses Beispiel passt zu den folgenden Werten:

- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`

Aber nicht:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `bold smaller smaller smaller smaller`, da `smaller` höchstens dreimal erscheinen darf.
- `smaller`, da `bold` nebeneinander steht und vor jedem `smaller`-Schlüsselwort erscheinen muss.

### Rautenzeichen (`#`)

Der _Rautenzeichen-Multiplikator_ gibt an, dass die Entität einmal oder mehrmals wiederholt werden kann (zum Beispiel der Pluszeichen-Multiplikator), aber jede Vorkommnis durch ein Komma (',') getrennt ist.

{{CSSSyntaxRaw(`example = bold smaller#`)}}

Dieses Beispiel passt zu den folgenden Werten:

- `bold smaller`
- `bold smaller, smaller`
- `bold smaller, smaller, smaller`, und so weiter.

Aber nicht:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `bold smaller smaller smaller`, da die verschiedenen Vorkomnise von `smaller` durch Kommata getrennt werden müssen.
- `smaller`, da `bold` nebeneinander steht und vor jedem `smaller`-Schlüsselwort erscheinen muss.

Das Rautenzeichen kann optional von geschwungenen Klammern gefolgt werden, um anzugeben, wie oft die Entität wiederholt wird.

{{CSSSyntaxRaw(`example = bold smaller#{1,3}`)}}

Dieses Beispiel passt zu den folgenden Werten:

- `bold smaller`
- `bold smaller, smaller`
- `bold smaller, smaller, smaller`

Aber nicht:

- `bold smaller, smaller, smaller, smaller`, da `smaller` höchstens dreimal erscheinen darf.

{{CSSSyntaxRaw(`example = bold smaller#{2}`)}}

Dieses Beispiel passt zu dem folgenden Wert:

- `bold smaller, smaller`

Aber nicht:

- `bold smaller`, da `smaller` genau zweimal erscheinen muss.

### Ausrufezeichen (`!`)

Der _Ausrufezeichen-Multiplikator_ nach einer Gruppe gibt an, dass die Gruppe erforderlich ist und mindestens einen Wert erzeugen muss; selbst wenn die Grammatik der Elemente in der Gruppe deren gesamtes Weglassen erlauben würde, muss mindestens ein Komponentwert nicht weggelassen werden.

{{CSSSyntaxRaw(`example = [ bold? smaller? ]!`)}}

Dieses Beispiel passt zu den folgenden Werten:

- `bold`
- `smaller`
- `bold smaller`

Aber nicht:

- weder `bold` noch `smaller`, da eines von ihnen erscheinen muss.
- `smaller bold`, da `bold` nebeneinander steht und vor dem `smaller`-Schlüsselwort erscheinen muss.
- `bold smaller bold`, da `bold` und `smaller` nur einmal erscheinen dürfen.

## Klammerbereichsnotation (`[min,max]`)

Einige Typen können numerische Werte innerhalb eines bestimmten Bereichs akzeptieren. Zum Beispiel kann die [`column-count`](/de/docs/Web/CSS/column-count) Eigenschaft einen ganzzahligen Wert zwischen positiv 1 und unendlich, einschließlich, akzeptieren. Die entsprechende Syntax sieht folgendermaßen aus:

{{CSSSyntaxRaw(`example = <integer [1,∞]>`)}}

Jeder Wert, der außerhalb dieses angegebenen Bereichs liegt, bewirkt, dass die gesamte Deklaration ungültig wird, daher ignoriert der Browser sie.

Die _Klammerbereichsnotation_ `[min, max]` gibt einen einschließlich Bereich zwischen einem `min`- und `max`-Wert an. Diese Notation wird in numerischen Typennotationen verwendet und kann Einheiten enthalten, z.B. `<angle [0,180deg]>`. Positive und negative Unendlichkeit (-∞ und ∞) dürfen keine Einheiten haben. Typen, die in Einheiten angegeben sind, können Nullwerte mit oder ohne Einheiten haben, z.B. `<time [0s,10s]>` oder `<time [0,10s]>`.

Hier sind einige weitere Beispiele:

- `<integer [-∞,∞]>`: Jede Ganzzahl von negativer Unendlichkeit zu positiver Unendlichkeit.
- `<integer [0,∞]>`: Jede Ganzzahl von 0 zu positiver Unendlichkeit ist gültig. Negative Ganzzahlen sind ungültig.
- `<time [0s,10s]>` oder `<time [0,10s]>`: Jeder Zeitraum von 0 bis 10 Sekunden ist gültig.
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
      <td>Nebeneinanderstellung</td>
      <td>Komponenten sind obligatorisch und müssen in dieser Reihenfolge erscheinen</td>
      <td><code>solid &#x3C;length></code></td>
    </tr>
    <tr>
      <td><code>&#x26;&#x26;</code></td>
      <td>Doppelte Kaufmanns-Und</td>
      <td>Komponenten sind obligatorisch, können aber in beliebiger Reihenfolge erscheinen</td>
      <td><code>&#x3C;length> &#x26;&#x26; &#x3C;string></code></td>
    </tr>
    <tr>
      <td><code>||</code></td>
      <td>Doppelte Stange</td>
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
      <td>Einfache Stange</td>
      <td>Genau eine der Komponenten muss vorhanden sein</td>
      <td><code>smaller | small | normal | big | bigger</code></td>
    </tr>
    <tr>
      <td><code>[ ]</code></td>
      <td>Klammern</td>
      <td>Gruppenteile, um Vorrangregeln zu umgehen</td>
      <td><code>bold [ thin &#x26;&#x26; &#x3C;length> ]</code></td>
    </tr>
    <tr>
      <th colspan="4">Multiplikatoren</th>
    </tr>
    <tr>
      <td></td>
      <td>Kein Multiplikator</td>
      <td>Genau 1-mal</td>
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
      <td>0 oder 1-mal (also <em>optional</em>)</td>
      <td><code>bold smaller?</code></td>
    </tr>
    <tr>
      <td><code>{min,max}</code></td>
      <td>Geschwungene Klammern</td>
      <td>Mindestens <code>min</code>-mal, höchstens <code>max</code>-mal</td>
      <td><code>bold smaller{1,3}</code></td>
    </tr>
    <tr>
      <td><code>#</code></td>
      <td>Rautenzeichen</td>
      <td>
        1 oder mehrmals, wobei jede Vorkommnis durch ein Komma
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
      <td>Numerischer Bereich in Klammern</td>
      <td>Gibt einen numerischen Bereich an</td>
      <td><code>&#x3C;integer [0,∞]></code></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Siehe auch

- Zentrale CSS-Konzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - {{Glossary("Layout_mode", "Layout-Modi")}}
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
  - [Randkollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Initialwerte](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value)
  - **Wertedefinitionssyntax**
  - [Kurzschreibweisen](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
