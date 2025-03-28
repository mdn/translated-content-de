---
title: Wertedefinitionssyntax
slug: Web/CSS/CSS_Values_and_Units/Value_definition_syntax
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{CSSRef}}

Die **CSS-Wertedefinitionssyntax**, eine formale Grammatik, wird verwendet, um die Menge der gültigen Werte für eine CSS-Eigenschaft oder Funktion zu definieren. Zusätzlich zu dieser Syntax kann die Menge der gültigen Werte durch semantische Einschränkungen weiter eingeschränkt werden (zum Beispiel, dass eine Zahl streng positiv sein muss).

Die Definitionssyntax beschreibt, welche Werte erlaubt sind und welche Interaktionen zwischen ihnen bestehen. Eine Komponente kann ein _Schlüsselwort_, einige als _Literal_ betrachtete Zeichen oder ein Wert eines gegebenen CSS-Datentyps oder einer anderen CSS-Eigenschaft sein.

## Komponentenwerttypen

### Schlüsselwörter

#### Generische Schlüsselwörter

Ein Schlüsselwort mit einer vordefinierten Bedeutung erscheint wörtlich, ohne Anführungszeichen. Zum Beispiel: `auto`, `smaller` oder `ease-in`.

#### CSS-weite Schlüsselwörter

Alle CSS-Eigenschaften akzeptieren die Schlüsselwörter `inherit`, `initial`, `revert`, `revert-layer` und `unset`. Sie werden nicht in der Wertedefinition angezeigt und sind implizit definiert.

### Literale

In CSS können einige Zeichen allein erscheinen, wie der Schrägstrich (`/`) oder das Komma (`,`), und werden in einer Eigenschaftsdefinition verwendet, um ihre Teile zu trennen. Das Komma wird oft verwendet, um Werte in Aufzählungen oder Parameter in mathematischen Funktionen zu trennen; der Schrägstrich trennt oft Teile eines Werts, die semantisch unterschiedlich sind, aber eine gemeinsame Syntax haben. Typischerweise wird der Schrägstrich in Kurzschrift-Eigenschaften verwendet, um Komponenten desselben Typs zu trennen, die zu verschiedenen Eigenschaften gehören.

Beide Symbole erscheinen wörtlich in einer Wertedefinition.

### Datentypen

#### Grundlegende Datentypen

Einige Datentypen werden im gesamten CSS verwendet und sind einmalig für alle Werte in der Spezifikation definiert. Diese _grundlegenden Datentypen_ werden durch ihren Namen dargestellt, umgeben von den Symbolen `<` und `>`: {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;string&gt;")}}, …

#### Nichtterminale Datentypen

Weniger verbreitete Datentypen, sogenannte _nichtterminale Datentypen_, sind ebenfalls von `<` und `>` umgeben.

Nichtterminale Datentypen gibt es in zwei Arten:

- Datentypen, die _denselben Namen wie eine Eigenschaft_ teilen, in Anführungszeichen gesetzt. In diesem Fall teilt der Datentyp dieselbe Menge an Werten wie die Eigenschaft. Sie werden oft in der Definition von Kurzschrift-Eigenschaften verwendet.
- Datentypen, die _nicht denselben Namen wie eine Eigenschaft_ teilen. Diese Datentypen sind den grundlegenden Datentypen sehr ähnlich. Sie unterscheiden sich von den grundlegenden Datentypen nur durch den physischen Ort ihrer Definition. In diesem Fall ist die Definition normalerweise physisch sehr nah an der Definition der Eigenschaft, die sie verwendet.

## Komponentenwert-Kombinatoren

### Klammern

_Klammern_ umschließen mehrere Entitäten, Kombinatoren und Multiplikatoren und transformieren sie dann in eine einzelne Komponente. Sie werden verwendet, um **Komponenten zu gruppieren, um die Vorrangsregeln zu umgehen**.

```css
bold [ thin && <length> ]
```

Dieses Beispiel entspricht den folgenden Werten:

- `bold thin 2vh`
- `bold 0 thin`
- `bold thin 3.5em`

Aber nicht:

- `thin bold 3em`, da `bold` mit der in den Klammern definierten Komponente juxtapositioniert ist, muss es davor erscheinen.

### Juxtaposition

Das Platzieren mehrerer Schlüsselwörter, Literale oder Datentypen nebeneinander, nur durch ein oder mehrere Leerzeichen getrennt, wird als _Juxtaposition_ bezeichnet. Alle juxtapositionierten Komponenten sind **verpflichtend und sollten in der genauen Reihenfolge erscheinen**.

```css
bold <length>, thin
```

Dieses Beispiel entspricht den folgenden Werten:

- `bold 1em, thin`
- `bold 0, thin`
- `bold 2.5cm, thin`
- `bold 3vh, thin`

Aber nicht:

- `thin 1em, bold`, da die Entitäten in der ausgedrückten Reihenfolge sein müssen
- `bold 1em thin`, da die Entitäten verpflichtend sind; das Komma, ein Literal, muss vorhanden sein
- `bold 0.5ms, thin`, da die `ms`-Werte nicht {{CSSxRef("&lt;length&gt;")}} sind

### Doppelte kaufmännische Und

Das Trennen von zwei oder mehr Komponenten durch ein _doppeltes kaufmännisches Und_, `&&`, bedeutet, dass alle diese Entitäten **verpflichtend sind, aber in beliebiger Reihenfolge erscheinen können**.

```css
bold && <length>
```

Dieses Beispiel entspricht den folgenden Werten:

- `bold 1em`
- `bold 0`
- `2.5cm bold`
- `3vh bold`

Aber nicht:

- `bold`, da beide Komponenten im Wert erscheinen müssen.
- `bold 1em bold`, da beide Komponenten nur einmal erscheinen müssen.

> [!NOTE]
> Die Juxtaposition hat Vorrang vor dem doppelten kaufmännischen Und, was bedeutet, dass `bold thin && <length>` gleich `[ bold thin ] && <length>` ist. Es beschreibt `bold thin <length>` oder `<length> bold thin`, aber nicht `bold <length> thin`.

### Doppelte Stange

Das Trennen von zwei oder mehr Komponenten durch eine _doppelte Stange_, `||`, bedeutet, dass alle Entitäten Optionen sind: **mindestens eine muss vorhanden sein, und sie können in beliebiger Reihenfolge erscheinen**. Typischerweise wird dies verwendet, um die verschiedenen Werte einer [Kurzschrift-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) zu definieren.

```css
<'border-width'> || <'border-style'> || <'border-color'>
```

Dieses Beispiel entspricht den folgenden Werten:

- `1em solid blue`
- `blue 1em`
- `solid 1px yellow`

Aber nicht:

- `blue yellow`, da eine Komponente höchstens einmal erscheinen muss.
- `bold`, da es kein erlaubtes Schlüsselwort als Wert einer der Entitäten ist.

> [!NOTE]
> Das doppelte kaufmännische Und hat Vorrang vor der doppelten Stange, was bedeutet, dass `bold || thin && <length>` gleich `bold || [ thin && <length> ]` ist. Es beschreibt `bold`, `thin <length>`, `bold thin <length>` oder `thin <length> bold`, aber nicht `<length> bold thin`, da bold, wenn nicht weggelassen, vor oder nach der ganzen `thin && <length>`-Komponente platziert werden muss.

### Einzelne Stange

Das Trennen von zwei oder mehr Entitäten durch eine _einzelne Stange_, `|`, bedeutet, dass alle Entitäten exklusive Optionen sind: **genau eine dieser Optionen muss vorhanden sein**. Dies wird typischerweise verwendet, um eine Liste möglicher Schlüsselwörter zu trennen.

```css
<percentage> | <length> | left | center | right | top | bottom
```

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

- `center 3%`, da nur eine der Komponenten vorhanden sein darf.
- `3em 4.5em`, da eine Komponente höchstens einmal erscheinen darf.

> [!NOTE]
> Die doppelte Stange hat Vorrang vor der einzelnen Stange, was bedeutet, dass `bold | thin || <length>` gleich `bold | [ thin || <length> ]` ist. Es beschreibt `bold`, `thin`, `<length>`, `<length> thin` oder `thin <length>`, aber nicht `bold <length>`, da nur eine Entität von jeder Seite des `|`-Kombinators vorhanden sein kann.

## Komponentenwert-Multiplikatoren

Ein Multiplikator ist ein Zeichen, das angibt, wie oft eine vorhergehende Entität wiederholt werden kann. Ohne Multiplikator muss eine Entität genau einmal erscheinen.

Multiplikatoren können nicht hinzugefügt werden und haben Vorrang vor allen Kombinatoren.

### Sternchen (`*`)

Der _Sternchenmultiplikator_ zeigt an, dass die Entität **null, einmal oder mehrmals** erscheinen kann.

```css
bold smaller*
```

Dieses Beispiel entspricht den folgenden Werten:

- `bold`
- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`, und so weiter.

Aber nicht:

- `smaller`, da `bold` juxtapositioniert ist und vor jedem `smaller` stehen muss.

### Plus (`+`)

Der _Plusmultiplikator_ zeigt an, dass die Entität **einmal oder mehrmals** erscheinen kann.

```css
bold smaller+
```

Dieses Beispiel entspricht den folgenden Werten:

- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`, und so weiter.

Aber nicht:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `smaller`, da `bold` juxtapositioniert ist und vor jedem `smaller` stehen muss.

### Fragezeichen (`?`)

Der _Fragezeichenmultiplikator_ zeigt an, dass die Entität optional ist und **null oder einmal** erscheinen muss.

```css
bold smaller?
```

Dieses Beispiel entspricht den folgenden Werten:

- `bold`
- `bold smaller`

Aber nicht:

- `bold smaller smaller`, da `smaller` höchstens einmal erscheinen darf.
- `smaller`, da `bold` juxtapositioniert ist und vor jedem `smaller` stehen muss.

### Geschweifte Klammern (`{ }`)

Der _Multiplikator mit geschweiften Klammern_, der zwei durch ein Komma getrennte ganze Zahlen A und B einschließt, gibt an, dass die Entität **mindestens A-mal und höchstens B-mal** erscheinen muss.

```css
bold smaller{1,3}
```

Dieses Beispiel entspricht den folgenden Werten:

- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`

Aber nicht:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `bold smaller smaller smaller smaller`, da `smaller` höchstens dreimal erscheinen darf.
- `smaller`, da `bold` juxtapositioniert ist und vor jedem `smaller` stehen muss.

### Rautezeichen (`#`)

Der _Rautenzeichen-Multiplikator_ zeigt an, dass die Entität einmal oder mehrmals wiederholt werden kann (zum Beispiel der Plus-Multiplikator), aber jedes Auftreten wird durch ein Komma (',') getrennt.

```css
bold smaller#
```

Dieses Beispiel entspricht den folgenden Werten:

- `bold smaller`
- `bold smaller, smaller`
- `bold smaller, smaller, smaller`, und so weiter.

Aber nicht:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `bold smaller smaller smaller`, da die verschiedenen Vorkommen von `smaller` durch Kommas getrennt werden müssen.
- `smaller`, da `bold` juxtapositioniert ist und vor jedem `smaller` stehen muss.

Das Rautezeichen kann optional von geschweiften Klammern gefolgt werden, um anzugeben, wie oft die Entität wiederholt wird.

```css
bold smaller#{1,3}
```

Dieses Beispiel entspricht den folgenden Werten:

- `bold smaller`
- `bold smaller, smaller`
- `bold smaller, smaller, smaller`

Aber nicht:

- `bold smaller, smaller, smaller, kleiner`, da `smaller` höchstens dreimal erscheinen darf.

```css
bold smaller#{2}
```

Dieses Beispiel entspricht dem folgenden Wert:

- `bold smaller, smaller`

Aber nicht:

- `bold smaller`, da `smaller` genau zweimal erscheinen muss.

### Ausrufezeichen (`!`)

Der _Ausrufezeichen-Multiplikator_ nach einer Gruppe gibt an, dass die Gruppe benötigt wird und mindestens einen Wert produzieren muss; selbst wenn die Grammatik der Elemente innerhalb der Gruppe ansonsten das gesamte Fehlen der Inhalte erlauben würde, muss mindestens ein Komponentenwert nicht weggelassen werden.

```css
[ bold? smaller? ]!
```

Dieses Beispiel entspricht den folgenden Werten:

- `bold`
- `smaller`
- `bold smaller`

Aber nicht:

- weder `bold` noch `smaller`, da eines von beiden erscheinen muss.
- `smaller bold`, da `bold` juxtapositioniert ist und vor dem Schlüsselwort `smaller` stehen muss.
- `bold smaller bold`, da `bold` und `smaller` nur einmal erscheinen dürfen.

## Eingeklammertes Bereichsnotation (`[min,max]`)

Einige Typen können numerische Werte in einem bestimmten Bereich akzeptieren. Beispielsweise kann die Eigenschaft [`column-count`](/de/docs/Web/CSS/column-count) einen ganzzahligen Wert zwischen positiv 1 und Unendlich, inklusive, akzeptieren. Die entsprechende Syntax sieht so aus:

```plain
<integer [1,∞]>
```

Jeder Wert außerhalb dieses angegebenen Bereichs macht die ganze Deklaration ungültig, daher wird der Browser ihn ignorieren.

Die _eingeklammerten Bereichsnotation_ `[min, max]` zeigt einen inklusiven Bereich zwischen einem `min`- und `max`-Wert an. Diese Notation wird in numerischen Typ-Notationen verwendet und kann Einheiten enthalten, z.B. `<angle [0,180deg]>`. Positive und negative Unendlichkeit (-∞ und ∞) dürfen keine Einheiten angegeben haben. Typen, die in Einheiten angegeben werden, können Nullwerte mit oder ohne Einheiten angegeben haben, zum Beispiel `<time [0s,10s]>` oder `<time [0,10s]>`.

Hier sind einige weitere Beispiele:

- `<integer [-∞,∞]>`: Jeder ganzzahlige Wert von negativer Unendlichkeit bis positiver Unendlichkeit.
- `<integer [0,∞]>`: Jeder ganzzahlige Wert von 0 bis positive Unendlichkeit ist gültig. Negative ganzzahlige Werte sind ungültig.
- `<time [0s,10s]>` oder `<time [0,10s]>`: Jede Dauer von 0 bis 10 Sekunden ist gültig.
- `<integer [-∞,-1]> | <integer [1,∞]>`: Jeder ganzzahlige Wert außer null ist gültig.

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
      <td>Komponenten sind obligatorisch und sollten in dieser Reihenfolge erscheinen</td>
      <td><code>solid &#x3C;length></code></td>
    </tr>
    <tr>
      <td><code>&#x26;&#x26;</code></td>
      <td>Doppelte kaufmännische Und</td>
      <td>Komponenten sind obligatorisch, können jedoch in beliebiger Reihenfolge erscheinen</td>
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
      <td>Einzelne Stange</td>
      <td>Genau eine der Komponenten muss vorhanden sein</td>
      <td><code>smaller | small | normal | big | bigger</code></td>
    </tr>
    <tr>
      <td><code>[ ]</code></td>
      <td>Klammern</td>
      <td>Gruppieren Sie Komponenten, um Vorrangsregeln zu umgehen</td>
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
        1 oder mehrmals, wobei jedes Vorkommen durch ein Komma getrennt wird
        (<code>,</code>)
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
      <td>Numerischer Bereich in eckigen Klammern</td>
      <td>Gibt einen numerischen Bereich an</td>
      <td><code>&#x3C;integer [0,∞]></code></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Siehe auch

- CSS Schlüsselkonzepte:
  - [CSS Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - {{Glossary("Layout_mode", "Layout-Modi")}}
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
  - [Margin Collapse](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Anfangswerte](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value)
  - **Wertedefinitionssyntax**
  - [Kurzschrift-Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
