---
title: Wertedefinitionssyntax
slug: Web/CSS/CSS_Values_and_Units/Value_definition_syntax
l10n:
  sourceCommit: 93f54a9e0ceb65880b951986cc47bee87336f156
---

{{CSSRef}}

Die **CSS-Wertedefinitionssyntax**, eine formale Grammatik, wird verwendet, um die Menge der gültigen Werte für eine CSS-Eigenschaft oder Funktion zu definieren. Zusätzlich zu dieser Syntax kann die Menge der gültigen Werte durch semantische Einschränkungen weiter eingeschränkt werden (zum Beispiel, dass eine Zahl strikt positiv sein muss).

Die Definitionssyntax beschreibt, welche Werte erlaubt sind und wie sie miteinander interagieren. Eine Komponente kann ein _Schlüsselwort_, einige als _Literal_ betrachtete Zeichen oder ein Wert eines bestimmten CSS-Datentyps oder einer anderen CSS-Eigenschaft sein.

## Komponentenwerttypen

### Schlüsselwörter

#### Allgemeine Schlüsselwörter

Ein Schlüsselwort mit vordefinierter Bedeutung erscheint wörtlich, ohne Anführungszeichen. Zum Beispiel: `auto`, `smaller` oder `ease-in`.

#### CSS-weite Schlüsselwörter

Alle CSS-Eigenschaften akzeptieren die Schlüsselwörter `inherit`, `initial`, `revert`, `revert-layer` und `unset`. Sie werden in der Wertedefinition nicht angezeigt und sind implizit definiert.

### Literale

In CSS können einige Zeichen eigenständig erscheinen, wie der Schrägstrich (`/`) oder das Komma (`,`), und werden in einer Eigenschaftsdefinition verwendet, um ihre Teile zu trennen. Das Komma wird häufig verwendet, um Werte in Aufzählungen oder Parameter in mathematischen Funktionen zu trennen; der Schrägstrich trennt oft Teile des Wertes, die semantisch unterschiedlich sind, aber eine gemeinsame Syntax haben. Typischerweise wird der Schrägstrich in Kurzschreibweise-Eigenschaften verwendet, um Komponenten desselben Typs, die zu unterschiedlichen Eigenschaften gehören, zu trennen.

Beide Symbole erscheinen wörtlich in einer Wertedefinition.

### Datentypen

#### Grundlegende Datentypen

Einige Datentypen werden im gesamten CSS verwendet und sind einmalig für alle Werte in der Spezifikation definiert. Diese werden als _grundlegende Datentypen_ bezeichnet und mit ihrem Namen umgeben von den Symbolen `<` und `>` dargestellt: {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;string&gt;")}}, …

#### Nichtterminale Datentypen

Weniger gängige Datentypen, bezeichnet als _nichtterminale Datentypen_, sind ebenfalls von `<` und `>` umgeben.

Nichtterminale Datentypen sind von zwei Arten:

- Datentypen, _die denselben Namen wie eine Eigenschaft tragen_, zwischen Anführungszeichen. In diesem Fall teilt der Datentyp denselben Wertebereich wie die Eigenschaft. Sie werden häufig bei der Definition von Kurzschreibweise-Eigenschaften verwendet.
- Datentypen, _die nicht denselben Namen wie eine Eigenschaft tragen_. Diese Datentypen sind den grundlegenden Datentypen sehr ähnlich. Sie unterscheiden sich von den grundlegenden Datentypen nur durch den physischen Ort ihrer Definition. In diesem Fall befindet sich die Definition normalerweise physisch sehr nahe an der Definition der Eigenschaft, die sie verwendet.

## Komponentenwertkombinatoren

### Klammern

_Klammern_ umschließen mehrere Entitäten, Kombinatoren und Multiplikatoren und wandeln sie dann in eine einzelne Komponente um. Sie werden verwendet, um **Komponenten zu gruppieren, um die Vorrangregeln zu umgehen**.

```css
bold [ thin && <length> ]
```

Dieses Beispiel passt zu folgenden Werten:

- `bold thin 2vh`
- `bold 0 thin`
- `bold thin 3.5em`

Aber nicht:

- `thin bold 3em`, da `bold` neben die von den Klammern definierte Komponente gestellt ist, muss es davor erscheinen.

### Juxtaposition

Das Platzieren mehrerer Schlüsselwörter, Literale oder Datentypen nebeneinander, nur durch einen oder mehrere Leerzeichen getrennt, wird als _Juxtaposition_ bezeichnet. Alle juxtapositionierten Komponenten sind **verpflichtend und sollten in genau dieser Reihenfolge erscheinen**.

```css
bold <length>, thin
```

Dieses Beispiel passt zu folgenden Werten:

- `bold 1em, thin`
- `bold 0, thin`
- `bold 2.5cm, thin`
- `bold 3vh, thin`

Aber nicht:

- `thin 1em, bold`, da die Entitäten in der ausgedrückten Reihenfolge sein müssen
- `bold 1em thin`, da die Entitäten verpflichtend sind; das Komma, ein Literal, muss vorhanden sein
- `bold 0.5ms, thin`, da die `ms`-Werte keine {{CSSxRef("&lt;length&gt;")}} sind

### Doppeltes Et-Zeichen

Das Trennen von zwei oder mehr Komponenten durch ein _doppeltes Et-Zeichen_, `&&`, bedeutet, dass alle diese Entitäten **verpflichtend sind, aber in beliebiger Reihenfolge erscheinen können**.

```css
bold && <length>
```

Dieses Beispiel passt zu folgenden Werten:

- `bold 1em`
- `bold 0`
- `2.5cm bold`
- `3vh bold`

Aber nicht:

- `bold`, da beide Komponenten im Wert erscheinen müssen.
- `bold 1em bold`, da beide Komponenten nur einmal erscheinen dürfen.

> [!NOTE]
> Die Juxtaposition hat Vorrang vor dem doppelten Et-Zeichen, was bedeutet, dass `bold thin && <length>` gleichbedeutend mit `[ bold thin ] && <length>` ist. Dies beschreibt `bold thin <length>` oder `<length> bold thin`, aber nicht `bold <length> thin`.

### Doppelter Strich

Das Trennen von zwei oder mehr Komponenten durch einen _doppelten Strich_, `||`, bedeutet, dass alle Entitäten optional sind: **mindestens eine muss vorhanden sein, und sie können in beliebiger Reihenfolge erscheinen**. Typischerweise wird dies verwendet, um die verschiedenen Werte einer [Kurzschreibweise-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) zu definieren.

```css
<'border-width'> || <'border-style'> || <'border-color'>
```

Dieses Beispiel passt zu folgenden Werten:

- `1em solid blue`
- `blue 1em`
- `solid 1px yellow`

Aber nicht:

- `blue yellow`, da eine Komponente höchstens einmal erscheinen muss.
- `bold`, da es nicht als Wert für eine der Entitäten erlaubtes Schlüsselwort ist.

> [!NOTE]
> Der doppelte Strich hat Vorrang vor dem doppelten Et-Zeichen, was bedeutet, dass `bold || thin && <length>` gleichbedeutend mit `bold || [ thin && <length> ]` ist. Es beschreibt `bold`, `thin <length>`, `bold thin <length>`, oder `thin <length> bold`, aber nicht `<length> bold thin`, da bold, wenn nicht ausgelassen, entweder vor oder nach der gesamten `thin && <length>`-Komponente platziert werden muss.

### Einfacher Strich

Das Trennen von zwei oder mehr Entitäten durch einen _einfachen Strich_, `|`, bedeutet, dass alle Entitäten exklusive Optionen sind: **genau eine dieser Optionen muss vorhanden sein**. Dies wird typischerweise verwendet, um eine Liste möglicher Schlüsselwörter zu trennen.

```css
<percentage> | <length> | left | center | right | top | bottom
```

Dieses Beispiel passt zu folgenden Werten:

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
- `3em 4.5em`, da eine Komponente höchstens einmal vorhanden sein muss.

> [!NOTE]
> Der doppelte Strich hat Vorrang vor dem einfachen Strich, was bedeutet, dass `bold | thin || <length>` gleichbedeutend mit `bold | [ thin || <length> ]` ist. Es beschreibt `bold`, `thin`, `<length>`, `<length> thin`, oder `thin <length>`, aber nicht `bold <length>`, da nur eine Entität von jeder Seite des `|` Kombinators vorhanden sein darf.

## Komponentenwertmultiplikatoren

Ein Multiplikator ist ein Zeichen, das angibt, wie oft eine vorhergehende Entität wiederholt werden kann. Ohne Multiplikator muss eine Entität genau einmal erscheinen.

Multiplikatoren können nicht hinzugefügt werden und haben Vorrang vor allen Kombinatoren.

### Asterisk (`*`)

Der _Asteriskmultiplikator_ zeigt an, dass die Entität **null, einmal oder mehrere Male** erscheinen darf.

```css
bold smaller*
```

Dieses Beispiel passt zu folgenden Werten:

- `bold`
- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller` und so weiter.

Aber nicht:

- `smaller`, da `bold` juxtapositioniert ist und vor jedem `smaller`-Schlüsselwort erscheinen muss.

### Plus (`+`)

Der _Plusmultiplikator_ zeigt an, dass die Entität **einmal oder mehrmals** erscheinen darf.

```css
bold smaller+
```

Dieses Beispiel passt zu folgenden Werten:

- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller` und so weiter.

Aber nicht:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `smaller`, da `bold` juxtapositioniert ist und vor jedem `smaller`-Schlüsselwort erscheinen muss.

### Fragezeichen (`?`)

Der _Fragezeichenmultiplikator_ zeigt an, dass die Entität optional ist und **null oder einmal** erscheinen muss.

```css
bold smaller?
```

Dieses Beispiel passt zu folgenden Werten:

- `bold`
- `bold smaller`

Aber nicht:

- `bold smaller smaller`, da `smaller` höchstens einmal erscheinen darf.
- `smaller`, da `bold` juxtapositioniert ist und vor jedem `smaller`-Schlüsselwort erscheinen muss.

### Geschweifte Klammern (`{ }`)

Der _Multiplikator in geschweiften Klammern_, der zwei durch ein Komma getrennte ganze Zahlen A und B einschließt, zeigt an, dass die Entität **mindestens A-mal und höchstens B-mal** erscheinen muss.

```css
bold smaller{1,3}
```

Dieses Beispiel passt zu folgenden Werten:

- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`

Aber nicht:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `bold smaller smaller smaller smaller`, da `smaller` höchstens dreimal erscheinen darf.
- `smaller`, da `bold` juxtapositioniert ist und vor jedem `smaller`-Schlüsselwörter erscheinen muss.

### Rautezeichen (`#`)

Der _Hashtag-Multiplikator_ zeigt an, dass die Entität einmal oder mehrmals wiederholt werden darf (zum Beispiel der Plusmultiplikator), aber jede Wiederholung wird durch ein Komma (`,`) getrennt.

```css
bold smaller#
```

Dieses Beispiel passt zu folgenden Werten:

- `bold smaller`
- `bold smaller, smaller`
- `bold smaller, smaller, smaller` und so weiter.

Aber nicht:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `bold smaller smaller smaller`, da die unterschiedlichen Vorkommen von `smaller` durch Kommas getrennt werden müssen.
- `smaller`, da `bold` juxtapositioniert ist und vor jedem `smaller`-Schlüsselwort erscheinen muss.

Das Hashtag kann optional von geschweiften Klammern gefolgt werden, um anzugeben, wie oft die Entität wiederholt wird.

```css
bold smaller#{1,3}
```

Dieses Beispiel passt zu folgenden Werten:

- `bold smaller`
- `bold smaller, smaller`
- `bold smaller, smaller, smaller`

Aber nicht:

- `bold smaller, smaller, smaller, smaller`, da `smaller` höchstens dreimal erscheinen darf.

```css
bold smaller#{2}
```

Dieses Beispiel passt zum folgenden Wert:

- `bold smaller, smaller`

Aber nicht:

- `bold smaller`, da `smaller` genau zweimal erscheinen muss.

### Ausrufezeichen (`!`)

Der _Ausrufezeichenmultiplikator_ nach einer Gruppe gibt an, dass die Gruppe erforderlich ist und mindestens einen Wert produzieren muss; selbst wenn die Grammatik der Elemente innerhalb der Gruppe ansonsten erlauben würde, dass der gesamte Inhalt weggelassen wird, muss mindestens ein Komponentenwert nicht weggelassen werden.

```css
[ bold? smaller? ]!
```

Dieses Beispiel passt zu folgenden Werten:

- `bold`
- `smaller`
- `bold smaller`

Aber nicht:

- weder `bold` noch `smaller`, da eines von ihnen erscheinen muss.
- `smaller bold`, da `bold` juxtapositioniert ist und vor dem `smaller`-Schlüsselwort erscheinen muss.
- `bold smaller bold`, da `bold` und `smaller` nur einmal erscheinen dürfen.

## Eingeklammerte Bereichsnotation (`[min,max]`)

Einige Typen können numerische Werte innerhalb eines bestimmten Bereichs akzeptieren. Zum Beispiel kann die [`column-count`](/de/docs/Web/CSS/column-count) Eigenschaft einen ganzzahligen Wert zwischen positivem 1 und unendlich, inklusive, akzeptieren. Die entsprechende Syntax sieht so aus:

```plain
<integer [1,∞]>
```

Jeder Wert außerhalb des angegebenen Bereichs führt dazu, dass die gesamte Deklaration ungültig wird, daher wird der Browser sie ignorieren.

Die _eingeklammerte Bereichsnotation_ `[min, max]` gibt einen inklusiven Bereich zwischen einem `min`- und `max`-Wert an. Diese Notation wird in numerischen Typnotationen verwendet und kann Einheiten enthalten, z.B. `<angle [0,180deg]>`. Positive und negative Unendlichkeit (-∞ und ∞) dürfen keine Einheiten haben. Typen, die in Einheiten angegeben werden, können Nullwerte mit oder ohne Einheiten spezifiziert haben, zum Beispiel `<time [0s,10s]>` oder `<time [0,10s]>`.

Hier sind einige weitere Beispiele:

- `<integer [-∞,∞]>`: Jeder ganzzahlige Wert von negativer Unendlichkeit bis positiver Unendlichkeit.
- `<integer [0,∞]>`: Jeder ganzzahlige Wert von 0 bis positive Unendlichkeit ist gültig. Negative Ganzzahlen sind ungültig.
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
      <td>Juxtaposition</td>
      <td>Komponenten sind verpflichtend und sollten in dieser Reihenfolge erscheinen</td>
      <td><code>solid &#x3C;length></code></td>
    </tr>
    <tr>
      <td><code>&#x26;&#x26;</code></td>
      <td>Doppeltes Et-Zeichen</td>
      <td>Komponenten sind verpflichtend, können aber in beliebiger Reihenfolge erscheinen</td>
      <td><code>&#x3C;length> &#x26;&#x26; &#x3C;string></code></td>
    </tr>
    <tr>
      <td><code>||</code></td>
      <td>Doppelter Strich</td>
      <td>Mindestens eine der Komponenten muss vorhanden sein, und sie können in beliebiger Reihenfolge erscheinen.</td>
      <td><code>&#x3C;'border-image-outset'> || &#x3C;'border-image-slice'></code></td>
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
      <td>Asterisk</td>
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
      <td>0 oder 1 Mal (das heißt <em>optional)</em></td>
      <td><code>bold smaller?</code></td>
    </tr>
    <tr>
      <td><code>{min,max}</code></td>
      <td>Geschweifte Klammern</td>
      <td>Mindestens <code>min</code> Male, höchstens <code>max</code> Male</td>
      <td><code>bold smaller{1,3}</code></td>
    </tr>
    <tr>
      <td><code>#</code></td>
      <td>Rautezeichen</td>
      <td>1 oder mehr Male, wobei jedes Vorkommen durch ein Komma (<code>,</code>) getrennt ist</td>
      <td><code>bold smaller#</code></td>
    </tr>
    <tr>
      <td><code>!</code></td>
      <td>Ausrufezeichen</td>
      <td>Die Gruppe muss mindestens 1 Wert produzieren</td>
      <td><code>[ bold? smaller? ]!</code></td>
    </tr>
    <tr>
      <th colspan="4">Reichweiten</th>
    </tr>
    <tr>
      <td><code>[min,max]</code></td>
      <td>Numerische Klammernotation</td>
      <td>Gibt einen numerischen Bereich an</td>
      <td><code>&#x3C;integer [0,∞]></code></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Siehe auch

- CSS Schlüsselkonzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layoutmodi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Visual_formatting_model)
  - [Zusammenfallen von Rändern](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Anfangswerte](/de/docs/Web/CSS/CSS_cascade/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/actual_value)
  - **Wertedefinitionssyntax**
  - [Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
