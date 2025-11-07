---
title: Wertedefinitionssyntax
slug: Web/CSS/Guides/Values_and_units/Value_definition_syntax
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **CSS-Wertedefinitionssyntax**, eine formale Grammatik, wird verwendet, um die Menge der gültigen Werte für eine CSS-Eigenschaft oder Funktion zu definieren. Zusätzlich zu dieser Syntax kann die Menge der gültigen Werte durch semantische Einschränkungen weiter eingeschränkt werden (Beispiel: eine Zahl muss streng positiv sein).

Die Definitionssyntax beschreibt, welche Werte erlaubt sind und die Interaktionen zwischen ihnen. Eine Komponente kann ein _Schlüsselwort_ sein, einige Zeichen, die als _Literal_ betrachtet werden, oder ein Wert eines bestimmten CSS-Datentyps oder einer anderen CSS-Eigenschaft.

## Typen von Komponentenwerten

### Schlüsselwörter

#### Generische Schlüsselwörter

Ein Schlüsselwort mit vordefinierter Bedeutung erscheint buchstäblich, ohne Anführungszeichen. Zum Beispiel: `auto`, `smaller` oder `ease-in`.

#### CSS-weite Schlüsselwörter

Alle CSS-Eigenschaften akzeptieren die Schlüsselwörter `inherit`, `initial`, `revert`, `revert-layer` und `unset`. Sie werden in der Wertedefinition nicht angezeigt und sind implizit definiert.

### Literale

In CSS können einige Zeichen allein erscheinen, wie der Schrägstrich (`/`) oder das Komma (`,`), und werden in einer Eigenschaftsdefinition zur Trennung ihrer Teile verwendet. Das Komma wird oft verwendet, um Werte in Aufzählungen oder Parameter in mathematischen Funktionen zu trennen; der Schrägstrich trennt oft Teile des Wertes, die semantisch unterschiedlich sind, aber eine gemeinsame Syntax haben. Typischerweise wird der Schrägstrich bei Kurzform-Eigenschaften verwendet; um Komponenten desselben Typs zu trennen, die jedoch zu unterschiedlichen Eigenschaften gehören.

Beide Symbole erscheinen buchstäblich in einer Wertedefinition.

### Datentypen

#### Basisdatentypen

Einige Datentypen werden in ganz CSS verwendet und sind einmal für alle Werte in der Spezifikation definiert. Diese werden _Basisdatentypen_ genannt und werden mit ihrem Namen, umgeben von den Symbolen `<` und `>` dargestellt: {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;string&gt;")}}, …

#### Nicht-terminale Datentypen

Weniger gebräuchliche Datentypen, genannt _nicht-terminale Datentypen_, sind ebenfalls von `<` und `>` umgeben.

Nicht-terminale Datentypen sind von zwei Arten:

- Datentypen, die _denselben Namen wie eine Eigenschaft teilen_, in Anführungszeichen gesetzt. In diesem Fall teilt der Datentyp dieselbe Menge von Werten wie die Eigenschaft. Sie werden oft in der Definition von Kurzform-Eigenschaften verwendet.
- Datentypen, die _nicht denselben Namen wie eine Eigenschaft teilen_. Diese Datentypen sind den Basisdatentypen sehr ähnlich. Sie unterscheiden sich von den Basisdatentypen lediglich durch den physischen Ort ihrer Definition. In diesem Fall ist die Definition in der Regel physisch sehr nah an der Definition der Eigenschaft, die sie verwenden.

## Kombinationen von Komponentenwerten

### Klammern

_Klammern_ umfassen mehrere Entitäten, Kombinatoren und Multiplikatoren und transformieren sie dann als eine einzelne Komponente. Sie werden verwendet, um **Komponenten zu gruppieren, um die Vorrangregeln zu umgehen**.

{{CSSSyntaxRaw(`example = bold [ thin && <length> ]`)}}

Dieses Beispiel entspricht den folgenden Werten:

- `bold thin 2vh`
- `bold 0 thin`
- `bold thin 3.5em`

Aber nicht:

- `thin bold 3em`, da `bold` in Verbindung mit der Komponente, die durch die Klammern definiert wird, steht und es davor erscheinen muss.

### Juxtaposition

Die Platzierung mehrerer Schlüsselwörter, Literale oder Datentypen nebeneinander, nur getrennt durch ein oder mehrere Leerzeichen, nennt man _Juxtaposition_. Alle juxtapositionierten Komponenten sind **verpflichtend und müssen in genau dieser Reihenfolge erscheinen**.

{{CSSSyntaxRaw(`example = bold <length>, thin`)}}

Dieses Beispiel entspricht den folgenden Werten:

- `bold 1em, thin`
- `bold 0, thin`
- `bold 2.5cm, thin`
- `bold 3vh, thin`

Aber nicht:

- `thin 1em, bold`, da die Entitäten in der angegebenen Reihenfolge sein müssen
- `bold 1em thin`, da die Entitäten verpflichtend sind; das Komma, ein Literal, muss vorhanden sein
- `bold 0.5ms, thin`, da die `ms`-Werte nicht als {{CSSxRef("&lt;length&gt;")}} definiert sind

### Doppeltes Kaufmanns-Und

Die Trennung von zwei oder mehr Komponenten durch ein _doppeltes Kaufmanns-Und_, `&&`, bedeutet, dass alle diese Entitäten **verpflichtend sind, aber in beliebiger Reihenfolge erscheinen können**.

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
> Juxtaposition hat Vorrang vor dem doppelten Kaufmanns-Und, was bedeutet, dass `bold thin && <length>` äquivalent zu `[ bold thin ] && <length>` ist. Es beschreibt `bold thin <length>` oder `<length> bold thin`, aber nicht `bold <length> thin`.

### Doppelte senkrechte Linie

Die Trennung von zwei oder mehr Komponenten durch eine _doppelte senkrechte Linie_, `||`, bedeutet, dass alle Entitäten Optionen sind: **mindestens eine muss vorhanden sein und sie können in beliebiger Reihenfolge erscheinen**. Typischerweise wird dies verwendet, um die verschiedenen Werte einer [Kurzform-Eigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) zu definieren.

{{CSSSyntaxRaw(`example = <number> || <length> || <color>`)}}

Dieses Beispiel entspricht den folgenden Werten:

- `1em 1 blue`
- `blue 1em`
- `1 1px yellow`

Aber nicht:

- `blue yellow`, da eine Komponente höchstens einmal erscheinen darf.
- `bold`, da es kein erlaubtes Schlüsselwort als Wert einer der Entitäten ist.

> [!NOTE]
> Das doppelte Kaufmanns-Und hat Vorrang vor der doppelten senkrechten Linie, was bedeutet, dass `bold || thin && <length>` äquivalent zu `bold || [ thin && <length> ]` ist. Es beschreibt `bold`, `thin <length>`, `bold thin <length>`, oder `thin <length> bold`, aber nicht `<length> bold thin`, da `bold`, wenn nicht ausgelassen, entweder vor oder nach der gesamten `thin && <length>`-Komponente stehen muss.

### Einfache senkrechte Linie

Die Trennung von zwei oder mehr Entitäten durch eine _einfache senkrechte Linie_, `|`, bedeutet, dass alle Entitäten exklusive Optionen sind: **exakt eine dieser Optionen muss vorhanden sein**. Dies wird typischerweise verwendet, um eine Liste möglicher Schlüsselwörter zu trennen.

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
> Die doppelte senkrechte Linie hat Vorrang vor der einfachen senkrechten Linie, was bedeutet, dass `bold | thin || <length>` äquivalent zu `bold | [ thin || <length> ]` ist. Es beschreibt `bold`, `thin`, `<length>`, `<length> thin`, oder `thin <length>`, aber nicht `bold <length>`, da nur eine Entität von jeder Seite des `|`-Kombinators vorhanden sein kann.

## Multiplikatoren von Komponentenwerten

Ein Multiplikator ist ein Zeichen, das angibt, wie oft eine vorhergehende Entität wiederholt werden kann. Ohne einen Multiplikator muss eine Entität genau einmal erscheinen.

Multiplikatoren können nicht hinzugefügt werden und haben Vorrang vor allen Kombinatoren.

### Sternchen (`*`)

Der _Sternchen-Multiplikator_ gibt an, dass die Entität **null, einmal oder mehrmals erscheinen kann**.

{{CSSSyntaxRaw(`example = bold smaller*`)}}

Dieses Beispiel entspricht den folgenden Werten:

- `bold`
- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller` und so weiter.

Aber nicht:

- `smaller`, da `bold` juxtapositioniert ist und vor jedem `smaller`-Schlüsselwort erscheinen muss.

### Pluszeichen (`+`)

Der _Pluszeichen-Multiplikator_ gibt an, dass die Entität **einmal oder mehrmals erscheinen kann**.

{{CSSSyntaxRaw(`example = bold smaller+`)}}

Dieses Beispiel entspricht den folgenden Werten:

- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller` und so weiter.

Aber nicht:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `smaller`, da `bold` juxtapositioniert ist und vor jedem `smaller`-Schlüsselwort erscheinen muss.

### Fragezeichen (`?`)

Der _Fragezeichen-Multiplikator_ gibt an, dass die Entität optional ist und **null oder einmal erscheinen muss**.

{{CSSSyntaxRaw(`example = bold smaller?`)}}

Dieses Beispiel entspricht den folgenden Werten:

- `bold`
- `bold smaller`

Aber nicht:

- `bold smaller smaller`, da `smaller` höchstens einmal erscheinen darf.
- `smaller`, da `bold` juxtapositioniert ist und vor jedem `smaller`-Schlüsselwort erscheinen muss.

### Geschweifte Klammern (`{ }`)

Der _Geschweifte-Klammern-Multiplikator_, der zwei durch ein Komma getrennte ganze Zahlen A und B einschließt, gibt an, dass die Entität **mindestens A-mal und höchstens B-mal erscheinen muss**.

{{CSSSyntaxRaw(`example = bold smaller{1,3}`)}}

Dieses Beispiel entspricht den folgenden Werten:

- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`

Aber nicht:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `bold smaller smaller smaller smaller`, da `smaller` höchstens dreimal erscheinen darf.
- `smaller`, da `bold` juxtapositioniert ist und vor jedem `smaller`-Schlüsselwort erscheinen muss.

### Rautezeichen (`#`)

Der _Rautezeichen-Multiplikator_ gibt an, dass die Entität einmal oder mehrmals wiederholt werden kann (zum Beispiel der Pluszeichen-Multiplikator), aber jedes Vorkommen durch ein Komma (',') getrennt ist.

{{CSSSyntaxRaw(`example = bold smaller#`)}}

Dieses Beispiel entspricht den folgenden Werten:

- `bold smaller`
- `bold smaller, smaller`
- `bold smaller, smaller, smaller` und so weiter.

Aber nicht:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `bold smaller smaller smaller`, da die verschiedenen Vorkommen von `smaller` durch Kommata getrennt sein müssen.
- `smaller`, da `bold` juxtapositioniert ist und vor jedem `smaller`-Schlüsselwort erscheinen muss.

Das Rautezeichen kann optional von geschweiften Klammern gefolgt werden, um anzugeben, wie oft die Entität wiederholt wird.

{{CSSSyntaxRaw(`example = bold smaller#{1,3}`)}}

Dieses Beispiel entspricht den folgenden Werten:

- `bold smaller`
- `bold smaller, smaller`
- `bold smaller, smaller, smaller`

Aber nicht:

- `bold smaller, smaller, smaller, smaller`, da `smaller` höchstens dreimal erscheinen darf.

{{CSSSyntaxRaw(`example = bold smaller#{2}`)}}

Dieses Beispiel entspricht dem folgenden Wert:

- `bold smaller, smaller`

Aber nicht:

- `bold smaller`, da `smaller` genau zweimal erscheinen muss.

### Ausrufezeichen (`!`)

Der _Ausrufezeichen-Multiplikator_ nach einer Gruppe gibt an, dass die Gruppe erforderlich ist und mindestens einen Wert erzeugen muss; auch wenn die Grammatik der Elemente innerhalb der Gruppe ansonsten die Auslassung des gesamten Inhalts zulässt, darf mindestens ein Komponentenwert nicht ausgelassen werden.

{{CSSSyntaxRaw(`example = [ bold? smaller? ]!`)}}

Dieses Beispiel entspricht den folgenden Werten:

- `bold`
- `smaller`
- `bold smaller`

Aber nicht:

- weder `bold` noch `smaller`, da eine von ihnen erscheinen muss.
- `smaller bold`, da `bold` juxtapositioniert ist und vor dem `smaller`-Schlüsselwort erscheinen muss.
- `bold smaller bold`, da `bold` und `smaller` nur einmal erscheinen dürfen.

## Bereichsnotation in eckigen Klammern (`[min,max]`)

Einige Typen können numerische Werte innerhalb eines bestimmten Bereichs akzeptieren. Zum Beispiel kann die Eigenschaft [`column-count`](/de/docs/Web/CSS/Reference/Properties/column-count) einen ganzzahligen Wert zwischen positiv 1 und unendlich, einschließlich, akzeptieren. Die entsprechende Syntax sieht so aus:

{{CSSSyntaxRaw(`example = <integer [1,∞]>`)}}

Jeder Wert außerhalb dieses angegebenen Bereichs macht die gesamte Deklaration ungültig, daher wird der Browser sie ignorieren.

Die _Bereichsnotation in eckigen Klammern_ `[min, max]` gibt einen einschließenden Bereich zwischen einem `min`- und `max`-Wert an. Diese Notation wird in numerischen Typennotationen verwendet und kann Einheiten enthalten, z. B. `<angle [0,180deg]>`. Positive und negative Unendlichkeiten (-∞ und ∞) dürfen keine Einheiten angegeben haben. Typen, die in Einheiten angegeben sind, können null Werte mit oder ohne Einheiten haben, beispielsweise `<time [0s,10s]>` oder `<time [0,10s]>`.

Hier sind einige weitere Beispiele:

- `<integer [-∞,∞]>`: Jede ganze Zahl von negativer Unendlichkeit bis positiver Unendlichkeit.
- `<integer [0,∞]>`: Jede ganze Zahl von 0 bis positive Unendlichkeit ist gültig. Negative ganze Zahlen sind ungültig.
- `<time [0s,10s]>` oder `<time [0,10s]>`: Jede Dauer von 0 bis 10 Sekunden ist gültig.
- `<integer [-∞,-1]> | <integer [1,∞]>`: Jede ganze Zahl außer null ist gültig.

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
      <td>Doppeltes Kaufmanns-Und</td>
      <td>Komponenten sind verpflichtend, können aber in beliebiger Reihenfolge erscheinen</td>
      <td><code>&#x3C;length> &#x26;&#x26; &#x3C;string></code></td>
    </tr>
    <tr>
      <td><code>||</code></td>
      <td>Doppelte senkrechte Linie</td>
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
      <td>Einfache senkrechte Linie</td>
      <td>Exakt eine der Komponenten muss vorhanden sein</td>
      <td><code>smaller | small | normal | big | bigger</code></td>
    </tr>
    <tr>
      <td><code>[ ]</code></td>
      <td>Klammern</td>
      <td>Gruppieren von Komponenten zur Umgehung von Vorrangregeln</td>
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
      <td>0 oder 1 Mal (d.h. <em>optional)</em></td>
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
        1 oder mehrmals, wobei jedes Auftreten durch ein Komma
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
      <td>Nummerischer Bereich in eckigen Klammern</td>
      <td>Gibt einen nummerischen Bereich an</td>
      <td><code>&#x3C;integer [0,∞]></code></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Siehe auch

- Wichtige CSS-Konzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax/Introduction)
  - [Kommentare](/de/docs/Web/CSS/Guides/Syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/Guides/Box_model/Introduction)
  - {{Glossary("Layout_mode", "Layout-Modi")}}
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model)
  - [Rand-Kollaps](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
  - Werte
    - [Initialwerte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value)
  - **Wertedefinitionssyntax**
  - [Kurzform-Eigenschaften](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
  - {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
