---
title: Wertdefinierungssyntax
slug: Web/CSS/Value_definition_syntax
l10n:
  sourceCommit: 5bd9fe2b25c6eee2a14d0406ce7116998fa48c13
---

{{CSSRef}}

Die **CSS-Wertdefinierungssyntax**, eine formale Grammatik, wird verwendet, um die Menge der zulässigen Werte für eine CSS-Eigenschaft oder Funktion zu definieren. Zusätzlich zu dieser Syntax kann die Menge der zulässigen Werte durch semantische Einschränkungen weiter eingeschränkt werden (zum Beispiel, dass eine Zahl streng positiv sein muss).

Die Definierungssyntax beschreibt, welche Werte erlaubt sind und die Wechselwirkungen zwischen ihnen. Eine Komponente kann ein _Schlüsselwort_, einige als _Literal_ betrachtete Zeichen oder ein Wert eines gegebenen CSS-Datentyps oder einer anderen CSS-Eigenschaft sein.

## Komponentenwerttypen

### Schlüsselwörter

#### Allgemeine Schlüsselwörter

Ein Schlüsselwort mit einer vordefinierten Bedeutung erscheint wörtlich, ohne Anführungszeichen. Zum Beispiel: `auto`, `smaller` oder `ease-in`.

#### Der spezifische Fall von `inherit`, `initial` und `unset`

Alle CSS-Eigenschaften akzeptieren die Schlüsselwörter `inherit`, `initial` und `unset`. Diese erscheinen nicht in der Wertedefinition und sind implizit definiert.

### Literale

In CSS können einige Zeichen eigenständig erscheinen, wie der Schrägstrich (`/`) oder das Komma (`,`), und werden in einer Eigenschaftsdefinition verwendet, um deren Teile zu trennen. Das Komma wird oft verwendet, um Werte in Aufzählungen oder Parameter in mathematisch-ähnlichen Funktionen zu trennen; der Schrägstrich trennt häufig Teile des Wertes, die semantisch verschieden sind, aber eine gemeinsame Syntax haben. Typischerweise wird der Schrägstrich in Kurznotationseigenschaften verwendet, um Komponenten desselben Typs zu trennen, die verschiedenen Eigenschaften angehören.

Beide Symbole erscheinen wörtlich in einer Wertedefinition.

### Datentypen

#### Grundlegende Datentypen

Einige Datentypen werden in CSS verwendet und sind einmal für alle Werte in der Spezifikation definiert. Diese werden _grundlegende Datentypen_ genannt und werden mit ihrem Namen dargestellt, umgeben von den Symbolen `<` und `>`: {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;string&gt;")}}, …

#### Nicht-terminale Datentypen

Weniger gebräuchliche Datentypen, _nicht-terminale Datentypen_ genannt, sind ebenfalls von `<` und `>` umgeben.

Nicht-terminale Datentypen sind von zwei Arten:

- Datentypen, die _denselben Namen einer Eigenschaft_ teilen, zwischen Anführungszeichen gesetzt. In diesem Fall teilt der Datentyp denselben Satz von Werten wie die Eigenschaft. Sie werden oft in der Definition von Kurznotationseigenschaften verwendet.
- Datentypen, die _nicht denselben Namen einer Eigenschaft_ teilen. Diese Datentypen sind den grundlegenden Datentypen sehr ähnlich. Sie unterscheiden sich nur durch den physischen Ort ihrer Definition. In diesem Fall ist die Definition normalerweise physisch sehr nahe der Definition der Eigenschaft, die sie verwendet.

## Komponentenwertkombinatoren

### Klammern

_Klammern_ umschließen mehrere Entitäten, Kombinatoren und Multiplikatoren und transformieren sie dann als eine einzelne Komponente. Sie werden verwendet, um **Komponenten zu gruppieren, um die Vorrangregeln zu umgehen**.

```css
bold [ thin && <length> ]
```

Dieses Beispiel passt zu den folgenden Werten:

- `bold thin 2vh`
- `bold 0 thin`
- `bold thin 3.5em`

Aber nicht:

- `thin bold 3em`, da `bold` mit der Komponente definiert durch die Klammern aneinander gereiht ist, muss es davor erscheinen.

### Juxtaposition

Das Platzieren mehrerer Schlüsselwörter, Literale oder Datentypen nebeneinander, nur durch ein oder mehrere Leerzeichen getrennt, wird als _Juxtaposition_ bezeichnet. Alle aneinander gereihten Komponenten sind **verpflichtend und sollten in genau dieser Reihenfolge erscheinen**.

```css
bold <length>, thin
```

Dieses Beispiel passt zu den folgenden Werten:

- `bold 1em, thin`
- `bold 0, thin`
- `bold 2.5cm, thin`
- `bold 3vh, thin`

Aber nicht:

- `thin 1em, bold`, da die Entitäten in der ausgedrückten Reihenfolge sein müssen
- `bold 1em thin`, da die Entitäten verpflichtend sind; das Komma, ein Literal, muss vorhanden sein
- `bold 0.5ms, thin`, da die `ms` Werte nicht {{CSSxRef("&lt;length&gt;")}} sind

### Doppeltes Kaufmanns-Und

Das Trennen von zwei oder mehr Komponenten durch ein _doppeltes Kaufmanns-Und_, `&&`, bedeutet, dass all diese Entitäten **verpflichtend, aber in beliebiger Reihenfolge erscheinen können**.

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
> Die Juxtaposition hat Vorrang vor dem doppelten Kaufmanns-Und, was bedeutet, dass `bold thin && <length>` gleichwertig zu `[ bold thin ] && <length>` ist. Es beschreibt `bold thin <length>` oder `<length> bold thin`, aber nicht `bold <length> thin`.

### Doppelte Stange

Das Trennen von zwei oder mehr Komponenten durch eine _doppelte Stange_, `||`, bedeutet, dass alle Entitäten Optionen sind: **mindestens eine muss vorhanden sein, und sie können in beliebiger Reihenfolge erscheinen**. Typischerweise wird dies verwendet, um die verschiedenen Werte einer [Kurznotationseigenschaft](/de/docs/Web/CSS/Shorthand_properties) zu definieren.

```css
<'border-width'> || <'border-style'> || <'border-color'>
```

Dieses Beispiel passt zu den folgenden Werten:

- `1em solid blue`
- `blue 1em`
- `solid 1px yellow`

Aber nicht:

- `blue yellow`, da eine Komponente höchstens einmal erscheinen darf.
- `bold`, da es kein Schlüsselwort ist, das als Wert einer der Entitäten erlaubt ist.

> [!NOTE]
> Das doppelte Kaufmanns-Und hat Vorrang vor der doppelten Stange, was bedeutet, dass `bold || thin && <length>` gleichwertig zu `bold || [ thin && <length> ]` ist. Es beschreibt `bold`, `thin <length>`, `bold thin <length>`, oder `thin <length> bold`, aber nicht `<length> bold thin`, da bold, wenn nicht weggelassen, vor oder nach der gesamten `thin && <length>` Komponente platziert werden muss.

### Einzelne Stange

Das Trennen von zwei oder mehr Entitäten durch eine _einzelne Stange_, `|`, bedeutet, dass alle Entitäten exklusive Optionen sind: **genau eine dieser Optionen muss vorhanden sein**. Dies wird typischerweise verwendet, um eine Liste möglicher Schlüsselwörter zu trennen.

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

- `center 3%`, da nur eine der Komponenten vorhanden sein darf.
- `3em 4.5em`, da eine Komponente höchstens einmal vorhanden sein darf.

> [!NOTE]
> Die doppelte Stange hat Vorrang vor der einzelnen Stange, was bedeutet, dass `bold | thin || <length>` gleichwertig zu `bold | [ thin || <length> ]` ist. Es beschreibt `bold`, `thin`, `<length>`, `<length> thin`, oder `thin <length>`, aber nicht `bold <length>`, da nur eine Entität von jeder Seite des `|` Kombinators vorhanden sein kann.

## Komponentenwert-Multiplikatoren

Ein Multiplikator ist ein Zeichen, das angibt, wie oft eine vorhergehende Entität wiederholt werden kann. Ohne einen Multiplikator muss eine Entität genau einmal erscheinen.

Multiplikatoren können nicht hinzugefügt werden und haben Vorrang vor allen Kombinatoren.

### Sternchen (`*`)

Der _Sternchen-Multiplikator_ gibt an, dass die Entität **null, einmal oder mehrere Male** erscheinen kann.

```css
bold smaller*
```

Dieses Beispiel passt zu den folgenden Werten:

- `bold`
- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`, und so weiter.

Aber nicht:

- `smaller`, da `bold` aneinandergereiht ist und vor jedem `smaller` Schlüsselwort erscheinen muss.

### Plus (`+`)

Der _Plus-Multiplikator_ gibt an, dass die Entität **ein- oder mehrmals** erscheinen kann.

```css
bold smaller+
```

Dieses Beispiel passt zu den folgenden Werten:

- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`, und so weiter.

Aber nicht:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `smaller`, da `bold` aneinandergereiht ist und vor jedem `smaller` Schlüsselwort erscheinen muss.

### Fragezeichen (`?`)

Der _Fragezeichen-Multiplikator_ gibt an, dass die Entität optional ist und **null oder einmal** erscheinen muss.

```css
bold smaller?
```

Dieses Beispiel passt zu den folgenden Werten:

- `bold`
- `bold smaller`

Aber nicht:

- `bold smaller smaller`, da `smaller` höchstens einmal erscheinen darf.
- `smaller`, da `bold` aneinandergereiht ist und vor jedem `smaller` Schlüsselwort erscheinen muss.

### Geschweifte Klammern (`{ }`)

Der _geschweifte Klammern Multiplikator_, der zwei durch ein Komma getrennte ganze Zahlen, A und B, umschließt, gibt an, dass die Entität **mindestens A-mal und höchstens B-mal erscheinen muss**.

```css
bold smaller{1,3}
```

Dieses Beispiel passt zu den folgenden Werten:

- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`

Aber nicht:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `bold smaller smaller smaller smaller`, da `smaller` höchstens dreimal erscheinen muss.
- `smaller`, da `bold` aneinandergereiht ist und vor jedem `smaller` Schlüsselwort erscheinen muss.

### Rautezeichen (`#`)

Der _Rautezeichen-Multiplikator_ gibt an, dass die Entität ein- oder mehrmals wiederholt werden kann (zum Beispiel der Plus-Multiplikator), aber jede Wiederholung wird durch ein Komma (',') getrennt.

```css
bold smaller#
```

Dieses Beispiel passt zu den folgenden Werten:

- `bold smaller`
- `bold smaller, smaller`
- `bold smaller, smaller, smaller`, und so weiter.

Aber nicht:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `bold smaller smaller smaller`, da die verschiedenen Vorkommen von `smaller` durch Kommas getrennt sein müssen.
- `smaller`, da `bold` aneinandergereiht ist und vor jedem `smaller` Schlüsselwort erscheinen muss.

Das Rautezeichen kann optional von geschweiften Klammern gefolgt werden, um anzugeben, wie oft die Entität wiederholt wird.

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

Dieses Beispiel passt zu folgendem Wert:

- `bold smaller, smaller`

Aber nicht:

- `bold smaller`, da `smaller` genau zweimal erscheinen muss.

### Ausrufezeichen (`!`)

Der _Ausrufezeichen-Multiplikator_ nach einer Gruppe gibt an, dass die Gruppe erforderlich ist und mindestens einen Wert erzeugen muss; auch wenn die Grammatik der Elemente innerhalb der Gruppe sonst erlauben würde, den gesamten Inhalt wegzulassen, muss mindestens ein Komponentenwert nicht weggelassen werden.

```css
[ bold? smaller? ]!
```

Dieses Beispiel passt zu den folgenden Werten:

- `bold`
- `smaller`
- `bold smaller`

Aber nicht:

- weder `bold` noch `smaller`, da eine von ihnen erscheinen muss.
- `smaller bold`, da `bold` aneinandergereiht ist und vor dem `smaller` Schlüsselwort erscheinen muss.
- `bold smaller bold`, da `bold` und `smaller` nur einmal erscheinen dürfen.

## Eingeklammertes Bereichsnotation (`[min,max]`)

Einige Typen können numerische Werte innerhalb eines bestimmten Bereichs akzeptieren. Zum Beispiel kann die Eigenschaft [`column-count`](/de/docs/Web/CSS/column-count) einen ganzzahligen Wert zwischen positiv 1 und unendlich, inklusiv, akzeptieren. Die entsprechende Syntax sieht so aus:

```plain
<integer [1,∞]>
```

Jeder Wert außerhalb dieses spezifizierten Bereichs macht die gesamte Deklaration ungültig, daher wird der Browser sie ignorieren.

Die _eingeklammertes Bereichsnotation_ `[min, max]` gibt einen inklusiven Bereich zwischen einem `min`- und `max`-Wert an. Diese Notation wird in numerischen Typnotationen verwendet und kann Einheiten einschließen, z. B. `<angle [0,180deg]>`. Positive und negative Unendlichkeit (-∞ und ∞) dürfen keine Einheiten spezifiziert haben. Typen, die in Einheiten spezifiziert sind, können Nullwerte mit oder ohne Einheiten spezifiziert haben, zum Beispiel `<time [0s,10s]>` oder `<time [0,10s]>`.

Hier sind einige weitere Beispiele:

- `<integer [-∞,∞]>`: Jeder ganze Wert von negativer Unendlichkeit bis positive Unendlichkeit.
- `<integer [0,∞]>`: Jeder ganze Wert von 0 bis positive Unendlichkeit ist gültig. Negative ganze Werte sind ungültig.
- `<time [0s,10s]>` oder `<time [0,10s]>`: Jede Dauer von 0 bis 10 Sekunden ist gültig.
- `<integer [-∞,-1]> | <integer [1,∞]>`: Jeder ganze Wert außer Null ist gültig.

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
      <td>Komponenten sind erforderlich und sollten in dieser Reihenfolge erscheinen</td>
      <td><code>solid &#x3C;length></code></td>
    </tr>
    <tr>
      <td><code>&#x26;&#x26;</code></td>
      <td>Doppeltes Kaufmanns-Und</td>
      <td>Komponenten sind erforderlich, können jedoch in beliebiger Reihenfolge erscheinen</td>
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
      <td>Gruppenkomponenten, um Vorrangsregeln zu umgehen</td>
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
      <td>Numerischer eingeklammertes Bereich</td>
      <td>Gibt einen numerischen Bereich an</td>
      <td><code>&#x3C;integer [0,∞]></code></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Siehe auch

- CSS-Schlüsselkonzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/Syntax)
  - [Kommentare](/de/docs/Web/CSS/Comments)
  - [Spezifität](/de/docs/Web/CSS/Specificity)
  - [Vererbung](/de/docs/Web/CSS/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
  - [Rand-Kollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Anfangswerte](/de/docs/Web/CSS/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/actual_value)
  - **Wertdefinierungssyntax**
  - [Kurznotationseigenschaften](/de/docs/Web/CSS/Shorthand_properties)
  - [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
