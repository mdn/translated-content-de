---
title: Wertdefinition Syntax
slug: Web/CSS/CSS_Values_and_Units/Value_definition_syntax
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **CSS-Wertdefinition Syntax**, eine formale Grammatik, wird verwendet, um die Menge der gültigen Werte für eine CSS-Eigenschaft oder Funktion zu definieren. Neben dieser Syntax kann die Menge der gültigen Werte durch semantische Einschränkungen weiter eingeschränkt werden (zum Beispiel bei der Anforderung, dass eine Zahl strikt positiv sein muss).

Die Definition der Syntax beschreibt, welche Werte erlaubt sind und wie sie miteinander interagieren. Eine Komponente kann ein _Schlüsselwort_, einige als _Literal_ betrachtete Zeichen oder ein Wert eines bestimmten CSS-Datentyps oder einer anderen CSS-Eigenschaft sein.

## Komponententypen

### Schlüsselwörter

#### Generische Schlüsselwörter

Ein Schlüsselwort mit vorgegebener Bedeutung erscheint wörtlich, ohne Anführungszeichen. Zum Beispiel: `auto`, `smaller` oder `ease-in`.

#### CSS-weite Schlüsselwörter

Alle CSS-Eigenschaften akzeptieren die Schlüsselwörter `inherit`, `initial`, `revert`, `revert-layer` und `unset`. Sie werden nicht in der Wertdefinition angezeigt und sind implizit definiert.

### Literale

In CSS können einige Zeichen allein stehen, wie zum Beispiel der Schrägstrich (`/`) oder das Komma (`,`), und werden in einer Eigenschaftsdefinition verwendet, um ihre Teile zu trennen. Das Komma wird oft verwendet, um Werte in Aufzählungen oder Parameter in mathematischen Funktionen zu trennen; der Schrägstrich trennt oft Teile des Wertes, die semantisch unterschiedlich, aber syntaktisch gleich sind. Typischerweise wird der Schrägstrich in Kurzschreibweisen von Eigenschaften verwendet, um Komponenten desselben Typs zu trennen, die zu unterschiedlichen Eigenschaften gehören.

Beide Symbole erscheinen wörtlich in einer Wertdefinition.

### Datentypen

#### Grunddatentypen

Einige Datentypen werden in ganz CSS verwendet und sind einmalig für alle Werte in der Spezifikation definiert. Diese _Grunddatentypen_ werden mit ihrem Namen in den Symbolen `<` und `>` dargestellt: {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;string&gt;")}}, …

#### Nicht-terminale Datentypen

Weniger häufig verwendete Datentypen, _nicht-terminale Datentypen_ genannt, sind ebenfalls von `<` und `>` umgeben.

Nicht-terminale Datentypen gibt es in zwei Arten:

- Datentypen, die denselben Namen wie eine Eigenschaft _teilen_ und in Anführungszeichen stehen. In diesem Fall teilt der Datentyp denselben Wertebereich wie die Eigenschaft. Sie werden häufig in der Definition von Kurzschreibweisen für Eigenschaften verwendet.
- Datentypen, die nicht denselben Namen wie eine Eigenschaft teilen. Diese Datentypen sind den Grunddatentypen sehr nahe. Sie unterscheiden sich nur im physischen Standort ihrer Definition. In diesem Fall ist die Definition üblicherweise physisch sehr nah an der Definition der Eigenschaft, die sie verwendet.

## Kombinatoren von Komponentenwerten

### Klammern

_Klammern_ schließen mehrere Entitäten, Kombinatoren und Multiplikatoren ein und transformieren sie dann als eine einzelne Komponente. Sie werden verwendet, um **Komponenten zu gruppieren, um die Vorrangregeln zu umgehen**.

{{CSSSyntaxRaw(`example = bold [ thin && <length> ]`)}}

Dieses Beispiel entspricht den folgenden Werten:

- `bold thin 2vh`
- `bold 0 thin`
- `bold thin 3.5em`

Aber nicht:

- `thin bold 3em`, da `bold` neben der durch die Klammern definierten Komponente, erscheinen muss und es vor ihr erscheinen muss.

### Juxtaposition

Das Platzieren mehrerer Schlüsselwörter, Literale oder Datentypen nebeneinander, nur durch ein oder mehrere Leerzeichen getrennt, wird als _Juxtaposition_ bezeichnet. Alle juxtapositionierten Komponenten sind **verpflichtend und sollten in der genauen Reihenfolge erscheinen**.

{{CSSSyntaxRaw(`example = bold <length>, thin`)}}

Dieses Beispiel entspricht den folgenden Werten:

- `bold 1em, thin`
- `bold 0, thin`
- `bold 2.5cm, thin`
- `bold 3vh, thin`

Aber nicht:

- `thin 1em, bold`, da die Entitäten in der ausgedrückten Reihenfolge sein müssen
- `bold 1em thin`, da die Entitäten verpflichtend sind; das Komma, ein Literal, muss vorhanden sein
- `bold 0.5ms, thin`, da die `ms`-Werte nicht {{CSSxRef("&lt;length&gt;")}} sind

### Doppelter Kaufmanns-Und

Das Trennen von zwei oder mehr Komponenten durch ein _doppeltes Kaufmanns-Und_, `&&`, bedeutet, dass all diese Entitäten **verpflichtend sind, aber in beliebiger Reihenfolge erscheinen können**.

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
> Die Juxtaposition hat Vorrang vor dem doppelten Kaufmanns-Und, was bedeutet, dass `bold thin && <length>` gleichwertig mit `[ bold thin ] && <length>` ist. Es beschreibt `bold thin <length>` oder `<length> bold thin`, aber nicht `bold <length> thin`.

### Doppelter Balken

Das Trennen von zwei oder mehr Komponenten durch einen _doppelten Balken_, `||`, bedeutet, dass alle Entitäten Optionen sind: **Mindestens eine muss vorhanden sein, und sie können in beliebiger Reihenfolge auftreten**. Typischerweise wird dies verwendet, um die verschiedenen Werte einer [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) zu definieren.

{{CSSSyntaxRaw(`example = <number> || <length> || <color>`)}}

Dieses Beispiel entspricht den folgenden Werten:

- `1em 1 blue`
- `blue 1em`
- `1 1px yellow`

Aber nicht:

- `blue yellow`, da eine Komponente höchstens einmal erscheinen darf.
- `bold`, da es kein Schlüsselwort ist, das als Wert einer der Entitäten erlaubt ist.

> [!NOTE]
> Das doppelte Kaufmanns-Und hat Vorrang vor dem doppelten Balken, was bedeutet, dass `bold || thin && <length>` gleichwertig mit `bold || [ thin && <length> ]` ist. Es beschreibt `bold`, `thin <length>`, `bold thin <length>`, oder `thin <length> bold`, aber nicht `<length> bold thin`, da bold, wenn nicht weggelassen, vor oder nach der gesamten `thin && <length>` Komponente platziert werden muss.

### Einzellner Balken

Das Trennen von zwei oder mehr Entitäten durch einen _einzelnen Balken_, `|`, bedeutet, dass alle Entitäten exklusive Optionen sind: **Genau eine dieser Optionen muss vorhanden sein**. Dies wird typischerweise verwendet, um eine Liste möglicher Schlüsselwörter zu trennen.

{{CSSSyntaxRaw(`example = <percentage> | <length> | left | center | right | top | bottom`)}}

Diese Beispielwerte entsprechen den folgenden Werten:

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
> Der doppelte Balken hat Vorrang vor dem einzelnen Balken, was bedeutet, dass `bold | thin || <length>` gleichwertig mit `bold | [ thin || <length> ]` ist. Es beschreibt `bold`, `thin`, `<length>`, `<length> thin`, oder `thin <length>`, aber nicht `bold <length>`, da nur eine Entität von jeder Seite des `|` Kombinators vorhanden sein darf.

## Multiplikatoren von Komponentenwerten

Ein Multiplikator ist ein Zeichen, das angibt, wie oft eine vorhergehende Entität wiederholt werden kann. Ohne einen Multiplikator muss eine Entität genau einmal erscheinen.

Multiplikatoren können nicht addiert werden und haben Vorrang vor allen Kombinatoren.

### Sternchen (`*`)

Der _Sternchen-Multiplikator_ gibt an, dass die Entität **null, ein- oder mehrmals** erscheinen darf.

{{CSSSyntaxRaw(`example = bold smaller*`)}}

Dieses Beispiel entspricht den folgenden Werten:

- `bold`
- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`, und so weiter.

Aber nicht:

- `smaller`, da `bold` juxtapositioniert ist und vor einem `smaller`-Schlüsselwort erscheinen muss.

### Pluszeichen (`+`)

Der _Plus-Multiplikator_ zeigt an, dass die Entität **ein- oder mehrmals** erscheinen darf.

{{CSSSyntaxRaw(`example = bold smaller+`)}}

Dieses Beispiel entspricht den folgenden Werten:

- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`, und so weiter.

Aber nicht:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `smaller`, da `bold` juxtapositioniert ist und vor einem `smaller`-Schlüsselwort erscheinen muss.

### Fragezeichen (`?`)

Der _Fragezeichen-Multiplikator_ gibt an, dass die Entität optional ist und **null oder einmal** erscheinen darf.

{{CSSSyntaxRaw(`example = bold smaller?`)}}

Dieses Beispiel entspricht den folgenden Werten:

- `bold`
- `bold smaller`

Aber nicht:

- `bold smaller smaller`, da `smaller` höchstens einmal erscheinen darf.
- `smaller`, da `bold` juxtapositioniert ist und vor einem `smaller`-Schlüsselwort erscheinen muss.

### Geschweifte Klammern (`{ }`)

Der _geschweifte Klammern-Multiplikator_, der zwei durch ein Komma getrennte ganze Zahlen A und B einschließt, gibt an, dass die Entität **mindestens A Mal und höchstens B Mal** erscheinen muss.

{{CSSSyntaxRaw(`example = bold smaller{1,3}`)}}

Dieses Beispiel entspricht den folgenden Werten:

- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`

Aber nicht:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `bold smaller smaller smaller smaller`, da `smaller` höchstens dreimal erscheinen darf.
- `smaller`, da `bold` juxtapositioniert ist und vor einem `smaller`-Schlüsselwort erscheinen muss.

### Rautezeichen (`#`)

Der _Rautezeichen-Multiplikator_ gibt an, dass die Entität ein- oder mehrmals wiederholt werden kann (zum Beispiel, der Plus-Multiplikator), aber jedes Vorkommen muss durch ein Komma (',') getrennt werden.

{{CSSSyntaxRaw(`example = bold smaller#`)}}

Dieses Beispiel entspricht den folgenden Werten:

- `bold smaller`
- `bold smaller, smaller`
- `bold smaller, smaller, smaller`, und so weiter.

Aber nicht:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `bold smaller smaller smaller`, da die verschiedenen Vorkommen von `smaller` durch Kommas getrennt sein müssen.
- `smaller`, da `bold` juxtapositioniert ist und vor einem `smaller`-Schlüsselwort erscheinen muss.

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

Der _Ausrufezeichen-Multiplikator_ nach einer Gruppe gibt an, dass die Gruppe erforderlich ist und mindestens einen Wert erzeugen muss; selbst wenn die Grammatik der Elemente innerhalb der Gruppe ansonsten das gesamte Inhalt erlauben würde, weggelassen zu werden, muss mindestens ein Komponentenwert nicht weggelassen werden.

{{CSSSyntaxRaw(`example = [ bold? smaller? ]!`)}}

Dieses Beispiel entspricht den folgenden Werten:

- `bold`
- `smaller`
- `bold smaller`

Aber nicht:

- Weder `bold` noch `smaller`, da einer von ihnen erscheinen muss.
- `smaller bold`, da `bold` juxtapositioniert ist und vor dem `smaller`-Schlüsselwort erscheinen muss.
- `bold smaller bold`, da `bold` und `smaller` nur einmal erscheinen dürfen.

## Eingeklammerte Bereichsnotation (`[min,max]`)

Einige Typen können numerische Werte innerhalb eines bestimmten Bereichs akzeptieren. Zum Beispiel kann die [`column-count`](/de/docs/Web/CSS/column-count)-Eigenschaft einen ganzzahligen Wert zwischen positivem 1 und Unendlichkeit, einschließlich, akzeptieren. Die entsprechende Syntax sieht folgendermaßen aus:

{{CSSSyntaxRaw(`example = <integer [1,∞]>`)}}

Jeder Wert außerhalb dieses bestimmten Bereichs macht die gesamte Deklaration ungültig, daher wird der Browser sie ignorieren.

Die _Eingeklammerte Bereichsnotation_ `[min, max]` zeigt einen inklusiven Bereich zwischen einem `min`- und `max`-Wert an. Diese Notation wird in numerischen Typnotationen verwendet und kann Einheiten einschließen, z.B. `<angle [0,180deg]>`. Positive und negative Unendlichkeit (-∞ und ∞) dürfen keine Einheiten angegeben haben. Typen, die in Einheiten spezifiziert sind, können Nullwerte mit oder ohne Einheiten spezifiziert haben, zum Beispiel `<time [0s,10s]>` oder `<time [0,10s]>`.

Hier sind einige weitere Beispiele:

- `<integer [-∞,∞]>`: Jede Ganzzahl von negativer Unendlichkeit bis positiver Unendlichkeit.
- `<integer [0,∞]>`: Jede Ganzzahl von 0 bis positiver Unendlichkeit ist gültig. Negative Ganzzahlen sind ungültig.
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
      <td>Doppelkaufmanns-Und</td>
      <td>Komponenten sind verpflichtend, können jedoch in beliebiger Reihenfolge erscheinen</td>
      <td><code>&#x3C;length> &#x26;&#x26; &#x3C;string></code></td>
    </tr>
    <tr>
      <td><code>||</code></td>
      <td>Doppelbalken</td>
      <td>
        Mindestens eine der Komponenten muss vorhanden sein, und sie kann in beliebiger Reihenfolge erscheinen.
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
      <td>Gruppieren Komponenten, um Vorrangregeln zu umgehen</td>
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
      <td>Gruppe muss mindestens 1 Wert erzeugen</td>
      <td><code>[ bold? smaller? ]!</code></td>
    </tr>
    <tr>
      <th colspan="4">Bereiche</th>
    </tr>
    <tr>
      <td><code>[min,max]</code></td>
      <td>Numerischer eingeklammeter Bereich</td>
      <td>Gibt einen numerischen Bereich an</td>
      <td><code>&#x3C;integer [0,∞]></code></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Siehe auch

- CSS-Schlüsselkonzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - {{Glossary("Layout_mode", "Layout-Modi")}}
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
  - [Randkollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Anfangswerte](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value)
  - **Wertdefinition Syntax**
  - [Kurzschreibweisen](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
