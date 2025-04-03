---
title: Wert-Definitionssyntax
slug: Web/CSS/CSS_Values_and_Units/Value_definition_syntax
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}

Die **CSS-Wert-Definitionssyntax**, eine formale Grammatik, wird verwendet, um die Menge gültiger Werte für eine CSS-Eigenschaft oder Funktion zu definieren. Zusätzlich zu dieser Syntax kann die Menge der gültigen Werte durch semantische Einschränkungen weiter eingeschränkt werden (zum Beispiel, dass eine Zahl streng positiv sein muss).

Die Definitionssyntax beschreibt, welche Werte erlaubt sind und die Interaktionen zwischen ihnen. Eine Komponente kann ein _Schlüsselwort_, einige als _Literal_ betrachtete Zeichen oder ein Wert eines angegebenen CSS-Datentyps oder einer anderen CSS-Eigenschaft sein.

## Komponentenwerttypen

### Schlüsselwörter

#### Allgemeine Schlüsselwörter

Ein Schlüsselwort mit einer vordefinierten Bedeutung erscheint wörtlich, ohne Anführungszeichen. Zum Beispiel: `auto`, `smaller` oder `ease-in`.

#### CSS-weite Schlüsselwörter

Alle CSS-Funktionen akzeptieren die Schlüsselwörter `inherit`, `initial`, `revert`, `revert-layer` und `unset`. Sie werden in der Wert-Definition nicht angezeigt und sind implizit definiert.

### Literale

In CSS können einige Zeichen alleine erscheinen, wie der Schrägstrich (`/`) oder das Komma (`,`), und werden in einer Eigenschaftsdefinition verwendet, um ihre Teile zu trennen. Das Komma wird häufig verwendet, um Werte in Aufzählungen oder Parameter in mathematischen Funktionen zu trennen; der Schrägstrich trennt oft Teile eines Wertes, die semantisch unterschiedlich, aber von gleicher Syntax sind. Typischerweise wird der Schrägstrich bei Kurzschreibweise-Eigenschaften verwendet, um Komponenten desselben Typs zu trennen, die jedoch zu verschiedenen Eigenschaften gehören.

Beide Symbole erscheinen wörtlich in einer Wert-Definition.

### Datentypen

#### Grundlegende Datentypen

Einige Datentypen werden überall in CSS verwendet und einmal für alle Werte in der Spezifikation definiert. Diese sogenannten _grundlegenden Datentypen_ werden mit ihrem Namen, umgeben von den Symbolen `<` und `>`, dargestellt: {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;string&gt;")}}, ...

#### Nicht-terminal Datentypen

Weniger gebräuchliche Datentypen, sogenannte _nicht-terminal Datentypen_, sind ebenfalls von `<` und `>` umgeben.

Nicht-terminale Datentypen gibt es in zwei Arten:

- Datentypen, die _den gleichen Namen wie eine Eigenschaft_ teilen, in Anführungszeichen gesetzt. In diesem Fall teilt der Datentyp die gleiche Menge von Werten wie die Eigenschaft. Sie werden häufig in der Definition von Kurzschreibweise-Eigenschaften verwendet.
- Datentypen, die _nicht den gleichen Namen wie eine Eigenschaft_ teilen. Diese Datentypen sind den grundlegenden Datentypen sehr ähnlich. Sie unterscheiden sich nur von den grundlegenden Datentypen durch den physikalischen Ort ihrer Definition. In diesem Fall ist die Definition üblicherweise physisch sehr nah an der Definition der diese Datentypen benutzenden Eigenschaft.

## Kombinatoren für Komponentenwerte

### Klammern

_Klammern_ schließen mehrere Entitäten, Kombinatoren und Multiplikatoren ein und transformieren sie dann zu einer einzigen Komponente. Sie werden verwendet, um **Komponenten zu gruppieren, um die Vorrangregeln zu umgehen**.

```css
bold [ thin && <length> ]
```

Dieses Beispiel passt zu den folgenden Werten:

- `bold thin 2vh`
- `bold 0 thin`
- `bold thin 3.5em`

Aber nicht:

- `thin bold 3em`, da `bold` mit der durch die Klammern definierten Komponente verknüpft ist, muss es davor erscheinen.

### Juxtaposition

Das nebeneinanderstellen mehrerer Schlüsselwörter, Literale oder Datentypen, nur durch ein oder mehrere Leerzeichen getrennt, wird als _Juxtaposition_ bezeichnet. Alle juxtapositionierten Komponenten sind **verpflichtend und sollten in genau dieser Reihenfolge erscheinen**.

```css
bold <length>, thin
```

Dieses Beispiel passt zu den folgenden Werten:

- `bold 1em, thin`
- `bold 0, thin`
- `bold 2.5cm, thin`
- `bold 3vh, thin`

Aber nicht:

- `thin 1em, bold`, da die Einheiten in der angegebenen Reihenfolge erscheinen müssen
- `bold 1em thin`, da die Einheiten verbindlich sind; das Komma, ein Literal, muss vorhanden sein
- `bold 0.5ms, thin`, da die `ms`-Werte keine {{CSSxRef("&lt;length&gt;")}} sind

### Doppel-Ampersand

Das Trennen von zwei oder mehr Komponenten durch ein _doppeltes Ampersand_, `&&`, bedeutet, dass all diese Entitäten **verpflichtend sind, aber in beliebiger Reihenfolge erscheinen dürfen**.

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
> Die Juxtaposition hat Vorrang vor dem doppelten Ampersand, was bedeutet, dass `bold thin && <length>` gleichbedeutend ist mit `[ bold thin ] && <length>`. Es beschreibt `bold thin <length>` oder `<length> bold thin`, aber nicht `bold <length> thin`.

### Doppelstrich

Das Trennen von zwei oder mehr Komponenten durch einen _doppelten Strich_, `||`, bedeutet, dass alle Entitäten Optionen sind: **mindestens eine muss vorhanden sein, und sie können in beliebiger Reihenfolge erscheinen**. Typischerweise wird dies verwendet, um die verschiedenen Werte einer [Kurzform-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) zu definieren.

```css
<'border-width'> || <'border-style'> || <'border-color'>
```

Dieses Beispiel passt zu den folgenden Werten:

- `1em solid blue`
- `blue 1em`
- `solid 1px yellow`

Aber nicht:

- `blue yellow`, da eine Komponente höchstens einmal erscheinen muss.
- `bold`, da es kein erlaubtes Schlüsselwort als Wert für eine der Entitäten ist.

> [!NOTE]
> Der doppelte Ampersand hat Vorrang vor dem doppelten Strich, was bedeutet, dass `bold || thin && <length>` gleichbedeutend ist mit `bold || [ thin && <length> ]`. Es beschreibt `bold`, `thin <length>`, `bold thin <length>`, oder `thin <length> bold`, aber nicht `<length> bold thin`, da bold, wenn nicht weggelassen, vor oder nach der gesamten `thin && <length>` Komponente platziert sein muss.

### Einzelstrich

Das Trennen von zwei oder mehr Entitäten durch einen _einzelnen Strich_, `|`, bedeutet, dass alle Entitäten exklusive Optionen sind: **genau eine dieser Optionen muss vorhanden sein**. Dies wird typischerweise verwendet, um eine Liste möglicher Schlüsselwörter zu trennen.

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
> Der doppelte Strich hat Vorrang vor dem einzelnen Strich, was bedeutet, dass `bold | thin || <length>` gleichbedeutend ist mit `bold | [ thin || <length> ]`. Es beschreibt `bold`, `thin`, `<length>`, `<length> thin`, oder `thin <length>`, aber nicht `bold <length>`, da nur eine Entität von jeder Seite des `|` Kombinators vorhanden sein kann.

## Multiplikatoren für Komponentenwerte

Ein Multiplikator ist ein Zeichen, das angibt, wie oft eine vorhergehende Einheit wiederholt werden kann. Ohne Multiplikator muss eine Entität genau einmal erscheinen.

Multiplikatoren können nicht hinzugefügt werden und haben Vorrang vor allen Kombinatoren.

### Sternchen (`*`)

Der _Sternchen-Multiplikator_ gibt an, dass die Entität **null, einmal oder mehrmals** erscheinen darf.

```css
bold smaller*
```

Dieses Beispiel passt zu den folgenden Werten:

- `bold`
- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller` und so weiter.

Aber nicht:

- `smaller`, da `bold` juxtapositioniert ist und vor jedem `smaller` Schlüsselwort erscheinen muss.

### Plus (`+`)

Der _Plus-Multiplikator_ gibt an, dass die Entität **einmal oder mehrmals** erscheinen darf.

```css
bold smaller+
```

Dieses Beispiel passt zu den folgenden Werten:

- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller` und so weiter.

Aber nicht:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `smaller`, da `bold` juxtapositioniert ist und vor jedem `smaller` Schlüsselwort erscheinen muss.

### Fragezeichen (`?`)

Der _Fragezeichen-Multiplikator_ zeigt an, dass die Entität optional ist und **null oder einmal erscheinen muss**.

```css
bold smaller?
```

Dieses Beispiel passt zu den folgenden Werten:

- `bold`
- `bold smaller`

Aber nicht:

- `bold smaller smaller`, da `smaller` höchstens einmal erscheinen darf.
- `smaller`, da `bold` juxtapositioniert ist und vor jedem `smaller` Schlüsselwort erscheinen muss.

### Geschweifte Klammern (`{ }`)

Der _geschweifte Klammern-Multiplikator_, der zwei durch ein Komma getrennte ganze Zahlen A und B umschließt, gibt an, dass die Entität **mindestens A mal und höchstens B mal** erscheinen muss.

```css
bold smaller{1,3}
```

Dieses Beispiel passt zu den folgenden Werten:

- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`

Aber nicht:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `bold smaller smaller smaller smaller`, da `smaller` höchstens dreimal erscheinen darf.
- `smaller`, da `bold` juxtapositioniert ist und vor jedem `smaller` Schlüsselwort erscheinen muss.

### Rautezeichen (`#`)

Der _Rautezeichen-Multiplikator_ zeigt an, dass die Entität mindestens einmal oder mehrmals wiederholt werden kann (ähnlich dem Plus-Multiplikator), jedoch muss jede Instanz durch ein Komma (',') getrennt sein.

```css
bold smaller#
```

Dieses Beispiel passt zu den folgenden Werten:

- `bold smaller`
- `bold smaller, smaller`
- `bold smaller, smaller, smaller` und so weiter.

Aber nicht:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `bold smaller smaller smaller`, da die verschiedenen Instanzen von `smaller` durch Kommas getrennt sein müssen.
- `smaller`, da `bold` juxtapositioniert ist und vor jedem `smaller` Schlüsselwort erscheinen muss.

Das Rautezeichen kann optional von geschweiften Klammern gefolgt sein, um anzugeben, wie oft die Entität wiederholt wird.

```css
bold smaller#{1,3}
```

Dieses Beispiel passt zu den folgenden Werten:

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

Der _Ausrufezeichen-Multiplikator_ nach einer Gruppe zeigt an, dass die Gruppe erforderlich ist und mindestens einen Wert produzieren muss; auch wenn die Grammatik der Inhalte innerhalb der Gruppe es sonst erlauben würde, den gesamten Inhalt wegzulassen, muss mindestens ein Komponentenwert nicht weggelassen werden.

```css
[ bold? smaller? ]!
```

Dieses Beispiel passt zu den folgenden Werten:

- `bold`
- `smaller`
- `bold smaller`

Aber nicht:

- weder `bold` noch `smaller`, da einer von ihnen erscheinen muss.
- `smaller bold`, da `bold` juxtapositioniert ist und vor dem `smaller` Schlüsselwort erscheinen muss.
- `bold smaller bold`, da `bold` und `smaller` nur einmal erscheinen dürfen.

## Klammernotierung für Bereich (`[min,max]`)

Einige Typen können numerische Werte innerhalb eines bestimmten Bereichs akzeptieren. Zum Beispiel kann die [`column-count`](/de/docs/Web/CSS/column-count)-Eigenschaft einen ganzzahligen Wert zwischen positiv 1 und unendlich, inklusive, akzeptieren. Die entsprechende Syntax sieht so aus:

```plain
<integer [1,∞]>
```

Jeder Wert außerhalb dieses angegebenen Bereichs führt dazu, dass die gesamte Deklaration ungültig ist, daher ignoriert der Browser sie.

Die _Klammernotierung des Bereichs_ `[min, max]` gibt einen inklusiven Bereich zwischen einem `min`- und `max`-Wert an. Diese Notation wird in numerischen Typnotationen verwendet und kann Einheiten enthalten, z.B. `<angle [0,180deg]>`. Unendlichkeiten (-∞ und ∞) dürfen keine Einheiten angegeben haben. Typen, die in Einheiten spezifiziert werden, können Nullwerte mit oder ohne Einheiten spezifiziert haben, zum Beispiel `<time [0s,10s]>` oder `<time [0,10s]>`.

Hier sind einige weitere Beispiele:

- `<integer [-∞,∞]>`: Jeder ganzzahlige Wert von negativer zu positiver Unendlichkeit.
- `<integer [0,∞]>`: Jeder ganzzahlige Wert ab 0 bis zur positiven Unendlichkeit ist gültig. Negative Ganzzahlen sind ungültig.
- `<time [0s,10s]>` oder `<time [0,10s]>`: Jede Dauer zwischen 0 und 10 Sekunden ist gültig.
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
      <td>Doppeltes Ampersand</td>
      <td>Komponenten sind verpflichtend, können aber in beliebiger Reihenfolge erscheinen</td>
      <td><code>&#x3C;length> &#x26;&#x26; &#x3C;string></code></td>
    </tr>
    <tr>
      <td><code>||</code></td>
      <td>Doppelstrich</td>
      <td>
        Mindestens eine der Komponenten muss vorhanden sein und kann in beliebiger
        Reihenfolge erscheinen.
      </td>
      <td>
        <code>&#x3C;'border-image-outset'> || &#x3C;'border-image-slice'></code>
      </td>
    </tr>
    <tr>
      <td><code>|</code></td>
      <td>Einzelstrich</td>
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
      <td>0 oder 1 Mal (das heißt <em>optional</em>)</td>
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
        1 oder mehr Male, wobei jede Instanz durch ein Komma
        (<code>,</code>) getrennt ist
      </td>
      <td><code>bold smaller#</code></td>
    </tr>
    <tr>
      <td><code>!</code></td>
      <td>Ausrufezeichen</td>
      <td>Gruppe muss mindestens einen Wert produzieren</td>
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

- CSS Schlüsselkonzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - {{Glossary("Layout_mode", "Layout-Modi")}}
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
  - [Randzusammenfall](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Anfangswerte](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value)
  - **Wert-Definitionssyntax**
  - [Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
