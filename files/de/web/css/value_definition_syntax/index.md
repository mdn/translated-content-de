---
title: Wertdefinitionssyntax
slug: Web/CSS/Value_definition_syntax
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{CSSRef}}

Die **CSS-Wertdefinitionssyntax**, eine formelle Grammatik, wird verwendet, um die Menge an gültigen Werten für eine CSS-Eigenschaft oder Funktion zu definieren. Zusätzlich zu dieser Syntax kann die Menge an gültigen Werten durch semantische Einschränkungen weiter eingeschränkt werden (z. B. muss eine Zahl streng positiv sein).

Die Definitionssyntax beschreibt, welche Werte zulässig sind und die Wechselwirkungen zwischen ihnen. Eine Komponente kann ein _Schlüsselwort_, einige Zeichen als _Literal_ betrachtet oder ein Wert eines bestimmten CSS-Datentyps oder einer anderen CSS-Eigenschaft sein.

## Komponentenwerttypen

### Schlüsselwörter

#### Generische Schlüsselwörter

Ein Schlüsselwort mit vordefinierter Bedeutung erscheint buchstäblich, ohne Anführungszeichen. Zum Beispiel: `auto`, `smaller` oder `ease-in`.

#### Der spezielle Fall von `inherit`, `initial` und `unset`

Alle CSS-Eigenschaften akzeptieren die Schlüsselwörter `inherit`, `initial` und `unset`. Diese werden nicht in der Wertedefinition angezeigt und sind implizit definiert.

### Literale

Im CSS können einige Zeichen selbstständig erscheinen, wie der Schrägstrich ('`/`') oder das Komma ('`,`'), und werden in einer Eigenschaftsdefinition verwendet, um ihre Teile zu trennen. Das Komma wird häufig verwendet, um Werte in Aufzählungen oder Parameter in mathematischen Funktionen zu trennen; der Schrägstrich trennt oft Teile des Wertes, die semantisch unterschiedlich sind, aber eine gemeinsame Syntax haben. Typischerweise wird der Schrägstrich in Kurzform-Eigenschaften verwendet; um Komponenten desselben Typs zu trennen, die zu verschiedenen Eigenschaften gehören.

Beide Symbole erscheinen buchstäblich in einer Wertedefinition.

### Datentypen

#### Grundlegende Datentypen

Einige Datentypen werden im gesamten CSS verwendet und einmal für alle Werte in der Spezifikation definiert. Genannt _grundlegende Datentypen_, werden sie mit ihrem Namen dargestellt, umgeben vom Symbol '`<`' und '`>`': {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;string&gt;")}}, …

#### Nicht-terminale Datentypen

Weniger häufige Datentypen, genannt _nicht-terminale Datentypen_, sind ebenfalls von '`<`' und '`>`' umgeben.

Nicht-terminale Datentypen sind von zwei Arten:

- Datentypen, die denselben Namen einer Eigenschaft teilen, in Anführungszeichen gesetzt. In diesem Fall teilt der Datentyp die gleiche Menge von Werten wie die Eigenschaft. Sie werden oft in der Definition von Kurzform-Eigenschaften verwendet.
- Datentypen, die nicht denselben Namen einer Eigenschaft teilen. Diese Datentypen sind den grundlegenden Datentypen sehr nah. Sie unterscheiden sich von den grundlegenden Datentypen nur durch den physikalischen Ort ihrer Definition. In diesem Fall ist die Definition üblicherweise physikalisch sehr nahe der Definition der Eigenschaft, die sie verwendet.

## Wertkomponentenkombinatoren

### Klammern

_Klammern_ umschließen mehrere Entitäten, Kombinatoren und Multiplikatoren und transformieren sie zu einer einzelnen Komponente. Sie werden verwendet, um **Komponenten zu gruppieren, um die Vorrangregeln zu umgehen**.

```css
bold [ thin && <length> ]
```

Dieses Beispiel passt zu den folgenden Werten:

- `bold thin 2vh`
- `bold 0 thin`
- `bold thin 3.5em`

Aber nicht:

- `thin bold 3em`, da `bold` neben der Komponente, die von den Klammern definiert wird, steht, muss es davor erscheinen.

### Juxtaposition

Das Platzieren mehrerer Schlüsselwörter, Literale oder Datentypen nebeneinander, nur durch einen oder mehrere Leerzeichen getrennt, wird _Juxtaposition_ genannt. Alle juxtapositionierten Komponenten sind **obligatorisch und sollten in der genau definierten Reihenfolge erscheinen**.

```css
bold <length>, thin
```

Dieses Beispiel passt zu den folgenden Werten:

- `bold 1em, thin`
- `bold 0, thin`
- `bold 2.5cm, thin`
- `bold 3vh, thin`

Aber nicht:

- `thin 1em, bold`, da die Entitäten in der angegebenen Reihenfolge sein müssen.
- `bold 1em thin`, da die Entitäten obligatorisch sind; das Komma, ein Literal, muss vorhanden sein.
- `bold 0.5ms, thin`, da die `ms`-Werte keine {{CSSxRef("&lt;length&gt;")}} sind.

### Doppelter Ampersand

Das Trennen von zwei oder mehr Komponenten durch einen _doppelten Ampersand_, `&&`, bedeutet, dass alle diese Entitäten **obligatorisch, jedoch in beliebiger Reihenfolge erscheinen können**.

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
- `bold 1em bold`, da beide Komponenten nur einmal auftreten dürfen.

> [!NOTE]
> Die Juxtaposition hat Vorrang vor dem doppelten Ampersand, was bedeutet, dass `bold thin && <length>` gleichbedeutend ist mit `[ bold thin ] && <length>`. Es beschreibt `bold thin <length>` oder `<length> bold thin`, aber nicht `bold <length> thin`.

### Doppelter Balken

Das Trennen von zwei oder mehr Komponenten durch einen _doppelten Balken_, `||`, bedeutet, dass alle Entitäten Optionen sind: **mindestens eine muss vorhanden sein und sie können in beliebiger Reihenfolge erscheinen**. Typischerweise wird dies verwendet, um die verschiedenen Werte einer [Kurzform-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) zu definieren.

```css
<'border-width'> || <'border-style'> || <'border-color'>
```

Dieses Beispiel passt zu den folgenden Werten:

- `1em solid blue`
- `blue 1em`
- `solid 1px yellow`

Aber nicht:

- `blue yellow`, da eine Komponente höchstens einmal erscheinen darf.
- `bold`, da es kein als Wert der Entitäten erlaubtens Schlüsselwort ist.

> [!NOTE]
> Der doppelte Ampersand hat Vorrang vor dem doppelten Balken, was bedeutet, dass `bold || thin && <length>` gleichbedeutend ist mit `bold || [ thin && <length> ]`. Es beschreibt `bold`, `thin <length>`, `bold thin <length>` oder `thin <length> bold`, aber nicht `<length> bold thin`, da, wenn bold nicht weggelassen wird, es vor oder nach der gesamten Komponente `thin && <length>` platziert werden muss.

### Einzelner Balken

Das Trennen von zwei oder mehr Entitäten durch einen _einzelnen Balken_, `|`, bedeutet, dass alle Entitäten exklusive Optionen sind: **genau eine dieser Optionen muss vorhanden sein**. Dies wird typischerweise verwendet, um eine Liste möglicher Schlüsselwörter zu trennen.

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
> Der doppelte Balken hat Vorrang vor dem einzelnen Balken, was bedeutet, dass `bold | thin || <length>` gleichbedeutend ist mit `bold | [ thin || <length> ]`. Es beschreibt `bold`, `thin`, `<length>`, `<length> thin`, oder `thin <length>`, aber nicht `bold <length>`, da nur eine Entität von jeder Seite des `|`-Kombinators vorhanden sein kann.

## Wertkomponentenmultiplikatoren

Ein Multiplikator ist ein Zeichen, das angibt, wie oft eine vorausgehende Entität wiederholt werden kann. Ohne einen Multiplikator muss eine Entität genau einmal erscheinen.

Multiplikatoren können nicht hinzugefügt werden und haben Vorrang vor allen Kombinatoren.

### Asterisk (`*`)

Der _Asterisk-Multiplikator_ gibt an, dass die Entität **null-, ein- oder mehrmals** erscheinen kann.

```css
bold smaller*
```

Dieses Beispiel passt zu den folgenden Werten:

- `bold`
- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`, und so weiter.

Aber nicht:

- `smaller`, da `bold` juxtapositioniert ist und vor jedem `smaller`-Schlüsselwort erscheinen muss.

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
- `smaller`, da `bold` juxtapositioniert ist und vor jedem `smaller`-Schlüsselwort erscheinen muss.

### Fragezeichen (`?`)

Der _Fragezeichen-Multiplikator_ gibt an, dass die Entität optional ist und **null- oder einmal** erscheinen muss.

```css
bold smaller?
```

Dieses Beispiel passt zu den folgenden Werten:

- `bold`
- `bold smaller`

Aber nicht:

- `bold smaller smaller`, da `smaller` höchstens einmal erscheinen darf.
- `smaller`, da `bold` juxtapositioniert ist und vor jedem `smaller`-Schlüsselwort erscheinen muss.

### Geschweifte Klammern (`{ }`)

Der _Geschweifte-Klammern-Multiplikator_, der zwei durch ein Komma getrennte Ganzzahlen A und B umschließt, gibt an, dass die Entität **mindestens A-mal und höchstens B-mal** erscheinen muss.

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
- `smaller`, da `bold` juxtapositioniert ist und vor jedem `smaller`-Schlüsselwort erscheinen muss.

### Hash-Zeichen (`#`)

Der _Hash-Zeichen-Multiplikator_ gibt an, dass die Entität ein- oder mehrmals (wie bei Beispiel dem Plus-Multiplikator) wiederholt werden kann, jedoch muss jeder Auftritt durch ein Komma (',') getrennt werden.

```css
bold smaller#
```

Dieses Beispiel passt zu den folgenden Werten:

- `bold smaller`
- `bold smaller, smaller`
- `bold smaller, smaller, smaller`, und so weiter.

Aber nicht:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `bold smaller smaller smaller`, da die verschiedenen Auftritte von `smaller` durch Kommas getrennt werden müssen.
- `smaller`, da `bold` juxtapositioniert ist und vor jedem `smaller`-Schlüsselwort erscheinen muss.

Das Hash-Zeichen kann optional von geschweiften Klammern gefolgt werden, um anzugeben, wie oft die Entität wiederholt wird.

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

Der _Ausrufezeichen-Multiplikator_ hinter einer Gruppe gibt an, dass die Gruppe erforderlich ist und mindestens einen Wert produzieren muss; selbst wenn die Grammatik der Elemente innerhalb der Gruppe ansonsten das Auslassen des gesamten Inhalts erlauben würde, muss mindestens ein Komponentenwert nicht weggelassen werden.

```css
[ bold? smaller? ]!
```

Dieses Beispiel passt zu folgenden Werten:

- `bold`
- `smaller`
- `bold smaller`

Aber nicht:

- weder `bold` noch `smaller`, da eines von beidem erscheinen muss.
- `smaller bold`, da `bold` juxtapositioniert ist und vor dem `smaller`-Schlüsselwort erscheinen muss.
- `bold smaller bold`, da `bold` und `smaller` jeweils nur einmal erscheinen dürfen.

## Bereichsnotation in Klammern (`[min,max]`)

Einige Typen können numerische Werte innerhalb eines bestimmten Bereichs akzeptieren. Zum Beispiel kann die Eigenschaft [`column-count`](/de/docs/Web/CSS/column-count) einen ganzzahligen Wert zwischen positiv 1 und unendlich, inklusive, akzeptieren. Die entsprechende Syntax sieht folgendermaßen aus:

```plain
<integer [1,∞]>
```

Jeder Wert außerhalb dieses angegebenen Bereichs führt dazu, dass die gesamte Deklaration ungültig wird, daher wird der Browser sie ignorieren.

Die _Bereichsnotation in Klammern_ `[min, max]` gibt einen einschließlich Bereich zwischen einem `min`- und `max`-Wert an. Diese Notation wird in numerischen Typenotationen und kann Einheiten einschließen, z.B. `<angle [0,180deg]>`. Positive und negative Unendlichkeiten (-∞ und ∞) dürfen keine Einheiten haben. Typen, die in Einheiten angegeben sind, können Werte von Null mit oder ohne Einheiten spezifizieren, zum Beispiel `<time [0s,10s]>` oder `<time [0,10s]>`.

Hier sind einige weitere Beispiele:

- `<integer [-∞,∞]>`: Jeder ganzzahlige Wert von negativer bis positiver Unendlichkeit.
- `<integer [0,∞]>`: Jeder ganzzahlige Wert von 0 bis positive Unendlichkeit ist gültig. Negative Ganzzahlen sind ungültig.
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
      <td>Komponenten sind obligatorisch und sollten in dieser Reihenfolge erscheinen</td>
      <td><code>solid &#x3C;length></code></td>
    </tr>
    <tr>
      <td><code>&#x26;&#x26;</code></td>
      <td>Doppelter Ampersand</td>
      <td>Komponenten sind obligatorisch, jedoch können sie in beliebiger Reihenfolge erscheinen</td>
      <td><code>&#x3C;length> &#x26;&#x26; &#x3C;string></code></td>
    </tr>
    <tr>
      <td><code>||</code></td>
      <td>Doppelter Balken</td>
      <td>
        Mindestens eine der Komponenten muss vorhanden sein, und sie können in beliebiger
        Reihenfolge erscheinen.
      </td>
      <td>
        <code>&#x3C;'border-image-outset'> || &#x3C;'border-image-slice'></code>
      </td>
    </tr>
    <tr>
      <td><code>|</code></td>
      <td>Einzelner Balken</td>
      <td>Genau eine der Komponenten muss vorhanden sein</td>
      <td><code>smaller | small | normal | big | bigger</code></td>
    </tr>
    <tr>
      <td><code>[ ]</code></td>
      <td>Klammern</td>
      <td>Gruppierung von Komponenten, um Vorrangregeln zu umgehen</td>
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
      <td>0 oder 1 Mal (das ist <em>optional)</em></td>
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
      <td>Hashzeichen</td>
      <td>
        1 oder mehrmals, wobei jede Wiederholung durch ein Komma getrennt ist
        ('<code>,</code>')
      </td>
      <td><code>bold smaller#</code></td>
    </tr>
    <tr>
      <td><code>!</code></td>
      <td>Ausrufezeichen</td>
      <td>Gruppe muss mindestens einen Wert erzeugen</td>
      <td><code>[ bold? smaller? ]!</code></td>
    </tr>
    <tr>
      <th colspan="4">Bereiche</th>
    </tr>
    <tr>
      <td><code>[min,max]</code></td>
      <td>Numerischer Bereich in Klammern</td>
      <td>Definiert einen numerischen Bereich</td>
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
  - [Specificity](/de/docs/Web/CSS/Specificity)
  - [Inheritance](/de/docs/Web/CSS/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
  - [Rand-Kollapsing](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Anfangswerte](/de/docs/Web/CSS/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/used_value)
    - [Aktuelle Werte](/de/docs/Web/CSS/actual_value)
  - **Wertdefinitionssyntax**
  - [Kurzform-Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
  - [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
