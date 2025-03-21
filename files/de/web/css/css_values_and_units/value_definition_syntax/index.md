---
title: Wert-Definition-Syntax
slug: Web/CSS/CSS_Values_and_Units/Value_definition_syntax
l10n:
  sourceCommit: 95edea913e7f0726243aff3f47b85cfd6f02d995
---

{{CSSRef}}

Die **CSS-Wert-Definition-Syntax**, eine formale Grammatik, wird verwendet, um die Menge gültiger Werte für eine CSS-Eigenschaft oder Funktion zu definieren. Neben dieser Syntax kann die Menge gültiger Werte durch semantische Einschränkungen weiter eingeschränkt werden (zum Beispiel, dass eine Zahl streng positiv sein muss).

Die Definition beschreibt, welche Werte erlaubt sind und wie sie miteinander interagieren. Eine Komponente kann ein _Schlüsselwort_ sein, einige Zeichen als _Literal_ betrachtet oder ein Wert eines bestimmten CSS-Datentyps oder einer anderen CSS-Eigenschaft.

## Komponentenwerttypen

### Schlüsselwörter

#### Allgemeine Schlüsselwörter

Ein Schlüsselwort mit einer vordefinierten Bedeutung erscheint buchstäblich, ohne Anführungszeichen. Zum Beispiel: `auto`, `smaller` oder `ease-in`.

#### CSS-weite Schlüsselwörter

Alle CSS-Eigenschaften akzeptieren die Schlüsselwörter `inherit`, `initial`, `revert`, `revert-layer` und `unset`. Diese werden in der Wert-Definition nicht gezeigt und sind implizit definiert.

### Literale

In CSS können einige Zeichen alleine erscheinen, wie der Schrägstrich (`/`) oder das Komma (`,`), und werden in einer Eigenschaftsdefinition verwendet, um ihre Teile zu trennen. Das Komma wird häufig verwendet, um Werte in Aufzählungen oder Parameter in mathematikähnlichen Funktionen zu trennen; der Schrägstrich trennt oft Teile des Wertes, die semantisch unterschiedlich, aber mit einer gemeinsamen Syntax sind. Typischerweise wird der Schrägstrich in Verkürzungseigenschaften verwendet, um Komponenten desselben Typs zu trennen, die jedoch zu verschiedenen Eigenschaften gehören.

Beide Symbole erscheinen buchstäblich in einer Wert-Definition.

### Datentypen

#### Grunddatentypen

Einige Datentypen werden in ganz CSS verwendet und einmal für alle Werte in der Spezifikation definiert. Sie werden _Grunddatentypen_ genannt und mit ihrem Namen dargestellt, der von den Symbolen `<` und `>` umgeben ist: {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;string&gt;")}}, …

#### Nicht-Terminale Datentypen

Weniger gebräuchliche Datentypen, _nicht-terminale Datentypen_ genannt, sind ebenfalls von `<` und `>` umgeben.

Nicht-Terminale Datentypen gibt es in zwei Arten:

- Datentypen, die _den gleichen Namen wie eine Eigenschaft teilen_, in Anführungszeichen gesetzt. In diesem Fall teilt der Datentyp die gleiche Menge an Werten wie die Eigenschaft. Sie werden häufig in der Definition von Verkürzungseigenschaften verwendet.
- Datentypen, _die nicht den gleichen Namen wie eine Eigenschaft teilen_. Diese Datentypen sind den Grunddatentypen sehr nahe. Sie unterscheiden sich nur durch ihren physischen Standort der Definition. In diesem Fall befindet sich die Definition typischerweise sehr nah an der Definition der Eigenschaft, die sie verwendet.

## Komponentenwert-Kombinatoren

### Klammern

_Klammern_ umschließen mehrere Entitäten, Kombinatoren und Multiplikatoren, um sie dann als eine einzelne Komponente zu transformieren. Sie werden verwendet, um **Komponenten zu gruppieren, um die Vorrangregeln zu umgehen**.

```css
bold [ thin && <length> ]
```

Dieses Beispiel stimmt mit den folgenden Werten überein:

- `bold thin 2vh`
- `bold 0 thin`
- `bold thin 3.5em`

Aber nicht:

- `thin bold 3em`, da `bold` an die durch die Klammern definierte Komponente angefügt ist und es vor dieser erscheinen muss.

### Nebeneinanderstellung

Das Platzieren mehrerer Schlüsselwörter, Literale oder Datentypen nebeneinander, nur durch ein oder mehrere Leerzeichen getrennt, wird _Nebeneinanderstellung_ genannt. Alle nebeneinander gestellten Komponenten sind **obligatorisch und müssen in der genauen Reihenfolge erscheinen**.

```css
bold <length>, thin
```

Dieses Beispiel stimmt mit den folgenden Werten überein:

- `bold 1em, thin`
- `bold 0, thin`
- `bold 2.5cm, thin`
- `bold 3vh, thin`

Aber nicht:

- `thin 1em, bold`, da die Entitäten in der ausgedrückten Reihenfolge erscheinen müssen
- `bold 1em thin`, da die Entitäten obligatorisch sind; das Komma, ein Literal, muss vorhanden sein
- `bold 0.5ms, thin`, da die `ms`-Werte keine {{CSSxRef("&lt;length&gt;")}} sind

### Doppelte Und-Zeichen

Das Trennen von zwei oder mehr Komponenten durch ein _doppeltes Und-Zeichen_, `&&`, bedeutet, dass all diese Entitäten **obligatorisch sind, aber in beliebiger Reihenfolge erscheinen können**.

```css
bold && <length>
```

Dieses Beispiel stimmt mit den folgenden Werten überein:

- `bold 1em`
- `bold 0`
- `2.5cm bold`
- `3vh bold`

Aber nicht:

- `bold`, da beide Komponenten im Wert erscheinen müssen.
- `bold 1em bold`, da beide Komponenten nur einmal erscheinen dürfen.

> [!NOTE]
> Die Nebeneinanderstellung hat Vorrang vor dem doppelten Und-Zeichen, was bedeutet, dass `bold thin && <length>` äquivalent zu `[ bold thin ] && <length>` ist. Es beschreibt `bold thin <length>` oder `<length> bold thin`, aber nicht `bold <length> thin`.

### Doppelte senkrechte Linie

Das Trennen von zwei oder mehr Komponenten durch eine _doppelte senkrechte Linie_, `||`, bedeutet, dass alle Entitäten optional sind: **mindestens einer muss vorhanden sein, und sie können in beliebiger Reihenfolge erscheinen**. Dies wird typischerweise verwendet, um die unterschiedlichen Werte einer [Verkürzungs-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) zu definieren.

```css
<'border-width'> || <'border-style'> || <'border-color'>
```

Dieses Beispiel stimmt mit den folgenden Werten überein:

- `1em solid blue`
- `blue 1em`
- `solid 1px yellow`

Aber nicht:

- `blue yellow`, da eine Komponente höchstens einmal erscheinen darf.
- `bold`, da es kein zulässiges Schlüsselwort als Wert irgendeiner der Entitäten ist.

> [!NOTE]
> Das doppelte Und-Zeichen hat Vorrang vor der doppelten senkrechten Linie, was bedeutet, dass `bold || thin && <length>` äquivalent zu `bold || [ thin && <length> ]` ist. Es beschreibt `bold`, `thin <length>`, `bold thin <length>` oder `thin <length> bold`, aber nicht `<length> bold thin`, da `bold`, wenn es nicht weggelassen wird, vor oder nach der gesamten `thin && <length>` Komponente stehen muss.

### Einfache senkrechte Linie

Das Trennen von zwei oder mehr Entitäten durch eine _einfache senkrechte Linie_, `|`, bedeutet, dass alle Entitäten exklusive Optionen sind: **genau eine dieser Optionen muss vorhanden sein**. Dies wird typischerweise verwendet, um eine Liste möglicher Schlüsselwörter zu trennen.

```css
<percentage> | <length> | left | center | right | top | bottom
```

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
> Die doppelte senkrechte Linie hat Vorrang vor der einfachen senkrechten Linie, was bedeutet, dass `bold | thin || <length>` äquivalent zu `bold | [ thin || <length> ]` ist. Es beschreibt `bold`, `thin`, `<length>`, `<length> thin` oder `thin <length>`, aber nicht `bold <length>`, da nur eine Entität von jeder Seite des `|` Kombinators vorhanden sein kann.

## Komponentenwert-Multiplikatoren

Ein Multiplikator ist ein Zeichen, das angibt, wie oft eine vorausgehende Entität wiederholt werden kann. Ohne einen Multiplikator muss eine Entität genau einmal erscheinen.

Multiplikatoren können nicht hinzugefügt werden und haben Vorrang vor allen Kombinatoren.

### Sternchen (`*`)

Der _Sternchen-Multiplikator_ zeigt an, dass die Entität **null, ein oder mehrere Male** erscheinen kann.

```css
bold smaller*
```

Dieses Beispiel stimmt mit den folgenden Werten überein:

- `bold`
- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`, und so weiter.

Aber nicht:

- `smaller`, da `bold` nebeneinander gestellt ist und vor jedem `smaller` Schlüsselwort erscheinen muss.

### Plus (`+`)

Der _Plus-Multiplikator_ zeigt an, dass die Entität **ein oder mehrere Male** erscheinen kann.

```css
bold smaller+
```

Dieses Beispiel stimmt mit den folgenden Werten überein:

- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`, und so weiter.

Aber nicht:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `smaller`, da `bold` nebeneinander gestellt ist und vor jedem `smaller` Schlüsselwort erscheinen muss.

### Fragezeichen (`?`)

Der _Fragezeichen-Multiplikator_ zeigt an, dass die Entität optional ist und **null oder einmal** erscheinen muss.

```css
bold smaller?
```

Dieses Beispiel stimmt mit den folgenden Werten überein:

- `bold`
- `bold smaller`

Aber nicht:

- `bold smaller smaller`, da `smaller` höchstens einmal erscheinen darf.
- `smaller`, da `bold` nebeneinander gestellt ist und vor jedem `smaller` Schlüsselwort erscheinen muss.

### Geschweifte Klammern (`{ }`)

Der _geschweifte Klammern-Multiplikator_, der zwei durch ein Komma getrennte ganze Zahlen A und B umfasst, zeigt an, dass die Entität **mindestens A-mal und höchstens B-mal** erscheinen muss.

```css
bold smaller{1,3}
```

Dieses Beispiel stimmt mit den folgenden Werten überein:

- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`

Aber nicht:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `bold smaller smaller smaller smaller`, da `smaller` höchstens dreimal erscheinen darf.
- `smaller`, da `bold` nebeneinander gestellt ist und vor jedem `smaller` Schlüsselwort erscheinen muss.

### Rautezeichen (`#`)

Der _Rautezeichen-Multiplikator_ zeigt an, dass die Entität ein- oder mehrmals wiederholt werden kann (zum Beispiel der Plus-Multiplikator), aber jede Instanz wird durch ein Komma (',') getrennt.

```css
bold smaller#
```

Dieses Beispiel stimmt mit den folgenden Werten überein:

- `bold smaller`
- `bold smaller, smaller`
- `bold smaller, smaller, smaller`, und so weiter.

Aber nicht:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `bold smaller smaller smaller`, da die verschiedenen Vorkommen von `smaller` durch Kommas getrennt sein müssen.
- `smaller`, da `bold` nebeneinander gestellt ist und vor jedem `smaller` Schlüsselwort erscheinen muss.

Das Rautezeichen kann optional von geschweiften Klammern gefolgt werden, um anzugeben, wie oft sich die Entität wiederholt.

```css
bold smaller#{1,3}
```

Dieses Beispiel stimmt mit den folgenden Werten überein:

- `bold smaller`
- `bold smaller, smaller`
- `bold smaller, smaller, smaller`

Aber nicht:

- `bold smaller, smaller, smaller, smaller`, da `smaller` höchstens dreimal erscheinen darf.

```css
bold smaller#{2}
```

Dieses Beispiel stimmt mit dem folgenden Wert überein:

- `bold smaller, smaller`

Aber nicht:

- `bold smaller`, da `smaller` genau zweimal erscheinen muss.

### Ausrufezeichen (`!`)

Der _Ausrufezeichen-Multiplikator_ nach einer Gruppe zeigt an, dass die Gruppe erforderlich ist und mindestens einen Wert erzeugen muss; auch wenn die Grammatik der Elemente innerhalb der Gruppe es sonst zulassen würde, dass der gesamte Inhalt weggelassen wird, muss mindestens ein Komponentenwert nicht weggelassen werden.

```css
[ bold? smaller? ]!
```

Dieses Beispiel stimmt mit den folgenden Werten überein:

- `bold`
- `smaller`
- `bold smaller`

Aber nicht:

- weder `bold` noch `smaller`, da einer von beiden erscheinen muss.
- `smaller bold`, da `bold` nebeneinander gestellt ist und vor dem `smaller` Schlüsselwort erscheinen muss.
- `bold smaller bold`, da `bold` und `smaller` nur einmal erscheinen dürfen.

## Bereichsnotation in Klammern (`[min,max]`)

Einige Typen können numerische Werte innerhalb eines bestimmten Bereichs akzeptieren. Zum Beispiel kann die [`column-count`](/de/docs/Web/CSS/column-count)-Eigenschaft einen ganzzahligen Wert zwischen positivem 1 und Unendlichkeit, einschließlich, akzeptieren. Die entsprechende Syntax sieht so aus:

```plain
<integer [1,∞]>
```

Ein Wert außerhalb dieses spezifizierten Bereichs macht die gesamte Deklaration ungültig, daher wird der Browser ihn ignorieren.

Die _Bereichsnotation in Klammern_ `[min, max]` zeigt einen inklusiven Bereich zwischen einem `min` und `max` Wert an. Diese Notation wird in numerischen Typnotationen verwendet und kann Einheiten enthalten, z.B. `<angle [0,180deg]>`. Positive und negative Unendlichkeit (-∞ und ∞) dürfen keine Einheiten angegeben haben. Typen, die in Einheiten spezifiziert sind, können Nullwerte mit oder ohne Einheiten angegeben haben, zum Beispiel `<time [0s,10s]>` oder `<time [0,10s]>`.

Hier sind einige weitere Beispiele:

- `<integer [-∞,∞]>`: Jeder Ganzzahlwert von negativer Unendlichkeit bis positiver Unendlichkeit.
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
      <td>Nebeneinanderstellung</td>
      <td>Die Komponenten sind obligatorisch und müssen in dieser Reihenfolge erscheinen</td>
      <td><code>solid &#x3C;length></code></td>
    </tr>
    <tr>
      <td><code>&#x26;&#x26;</code></td>
      <td>Doppeltes Und-Zeichen</td>
      <td>Die Komponenten sind obligatorisch, können aber in beliebiger Reihenfolge erscheinen</td>
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
      <td>Genau eine der Komponenten muss vorhanden sein</td>
      <td><code>smaller | small | normal | big | bigger</code></td>
    </tr>
    <tr>
      <td><code>[ ]</code></td>
      <td>Klammern</td>
      <td>Gruppieren von Komponenten, um die Vorrangregeln zu umgehen</td>
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
      <td>0 oder mehr Mal</td>
      <td><code>bold smaller*</code></td>
    </tr>
    <tr>
      <td><code>+</code></td>
      <td>Pluszeichen</td>
      <td>1 oder mehr Mal</td>
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
        1 oder mehr Mal, wobei jede Instanz durch ein Komma
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
      <td>Zahlenbereich in eckigen Klammern</td>
      <td>Gibt einen Zahlenbereich an</td>
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
  - [Boxmodell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - {{Glossary("Layout_mode", "Layout-Modi")}}
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/CSS_display/Visual_formatting_model)
  - [Rand-Zusammenfall](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Anfangswerte](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial-value)
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed-value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#used-value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual-value)
  - **Wert-Definition-Syntax**
  - [Verkürzungseigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
