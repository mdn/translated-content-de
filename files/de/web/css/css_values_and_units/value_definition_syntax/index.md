---
title: Wertdefinitionssyntax
slug: Web/CSS/CSS_Values_and_Units/Value_definition_syntax
l10n:
  sourceCommit: c8ff2398fa61950fe46f2d9155a105c125bfea83
---

{{CSSRef}}

Die **CSS-Wertdefinitionssyntax**, eine formale Grammatik, wird verwendet, um die Menge der gültigen Werte für eine CSS-Eigenschaft oder Funktion zu definieren. Zusätzlich zu dieser Syntax kann die Menge der gültigen Werte durch semantische Einschränkungen weiter eingeschränkt werden (zum Beispiel, dass eine Zahl strikt positiv sein muss).

Die Definitionssyntax beschreibt, welche Werte erlaubt sind und die Wechselwirkungen zwischen ihnen. Eine Komponente kann ein _Schlüsselwort_, einige als _literal_ betrachtete Zeichen oder ein Wert eines bestimmten CSS-Datentyps oder einer anderen CSS-Eigenschaft sein.

## Komponententypen

### Schlüsselwörter

#### Allgemeine Schlüsselwörter

Ein Schlüsselwort mit vordefinierter Bedeutung erscheint wörtlich, ohne Anführungszeichen. Zum Beispiel: `auto`, `smaller` oder `ease-in`.

#### CSS-weite Schlüsselwörter

Alle CSS-Eigenschaften akzeptieren die Schlüsselwörter `inherit`, `initial`, `revert`, `revert-layer` und `unset`. Sie werden in der Wertdefinition nicht angezeigt und sind implizit definiert.

### Literale

Im CSS können einige Zeichen allein stehen, wie der Schrägstrich (`/`) oder das Komma (`,`), und werden in einer Eigenschaftsdefinition verwendet, um ihre Teile zu trennen. Das Komma wird oft verwendet, um Werte in Aufzählungen zu trennen, oder Parameter in mathematisch-ähnlichen Funktionen; der Schrägstrich trennt oft Teile des Wertes, die semantisch unterschiedlich, aber syntaktisch gleich sind. Typischerweise wird der Schrägstrich in Kurzschreibweise-Eigenschaften verwendet, um Komponenten desselben Typs zu trennen, die jedoch zu verschiedenen Eigenschaften gehören.

Beide Symbole erscheinen wörtlich in einer Wertdefinition.

### Datentypen

#### Grunddatentypen

Einige Datentypen werden im ganzen CSS verwendet und sind einmalig für alle Werte in der Spezifikation definiert. Diese sogenannten _Grunddatentypen_ werden mit ihrem Namen dargestellt, umgeben von den Symbolen `<` und `>`: {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;string&gt;")}}, …

#### Nicht-terminale Datentypen

Weniger häufige Datentypen, sogenannte _nicht-terminale Datentypen_, sind ebenfalls von `<` und `>` umgeben.

Nicht-terminale Datentypen sind zweierlei Art:

- Datentypen, _die denselben Namen wie eine Eigenschaft tragen_, in Anführungszeichen gesetzt. In diesem Fall teilt der Datentyp denselben Wertebereich wie die Eigenschaft. Sie werden häufig in der Definition von Kurzschreibweise-Eigenschaften verwendet.
- Datentypen, _die nicht denselben Namen wie eine Eigenschaft tragen_. Diese Datentypen sind den Grunddatentypen sehr ähnlich. Sie unterscheiden sich von den Grunddatentypen nur durch den physischen Ort ihrer Definition. In diesem Fall liegt die Definition in der Regel physisch sehr nah an der Definition der Eigenschaft, die sie verwendet.

## Komponentenwert-Kombinatoren

### Klammern

_Klammern_ umschließen mehrere Entitäten, Kombinatoren und Multiplikatoren und transformieren sie in eine einzige Komponente. Sie werden verwendet, um **Komponenten zu gruppieren, um die Vorrangregeln zu umgehen**.

```css
bold [ thin && <length> ]
```

Dieses Beispiel passt zu den folgenden Werten:

- `bold thin 2vh`
- `bold 0 thin`
- `bold thin 3.5em`

Aber nicht:

- `thin bold 3em`, da `bold` in Verbindung mit der Komponente, die durch die Klammern definiert ist, steht, muss es davor erscheinen.

### Nebeneinanderstellung

Das Platzieren mehrerer Schlüsselwörter, Literale oder Datentypen nebeneinander, nur durch ein oder mehrere Leerzeichen getrennt, wird _Nebeneinanderstellung_ genannt. Alle nebeneinandergestellten Komponenten sind **obligatorisch und sollten in der genauen Reihenfolge erscheinen**.

```css
bold <length>, thin
```

Dieses Beispiel passt zu den folgenden Werten:

- `bold 1em, thin`
- `bold 0, thin`
- `bold 2.5cm, thin`
- `bold 3vh, thin`

Aber nicht:

- `thin 1em, bold`, da die Entitäten in der angegebenen Reihenfolge sein müssen
- `bold 1em thin`, da die Entitäten obligatorisch sind; das Komma, ein Literal, muss vorhanden sein
- `bold 0.5ms, thin`, da die `ms` Werte nicht {{CSSxRef("&lt;length&gt;")}} sind

### Doppeltes kaufmännisches Und

Das Trennen von zwei oder mehr Komponenten mit einem _doppelten kaufmännischen Und_, `&&`, bedeutet, dass alle diese Entitäten **obligatorisch sind, aber in beliebiger Reihenfolge erscheinen können**.

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
> Die Nebeneinanderstellung hat Vorrang vor dem doppelten kaufmännischen Und, was bedeutet, dass `bold thin && <length>` äquivalent zu `[ bold thin ] && <length>` ist. Es beschreibt `bold thin <length>` oder `<length> bold thin`, aber nicht `bold <length> thin`.

### Doppelter Balken

Das Trennen von zwei oder mehr Komponenten durch einen _doppelten Balken_, `||`, bedeutet, dass alle Entitäten Optionen sind: **mindestens eine muss vorhanden sein, und sie können in beliebiger Reihenfolge erscheinen**. Typischerweise wird dies verwendet, um die verschiedenen Werte einer [Kurzschreibweise-Eigenschaft](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) zu definieren.

```css
<'border-width'> || <'border-style'> || <'border-color'>
```

Dieses Beispiel passt zu den folgenden Werten:

- `1em solid blue`
- `blue 1em`
- `solid 1px yellow`

Aber nicht:

- `blue yellow`, da eine Komponente höchstens einmal erscheinen muss.
- `bold`, da es kein Schlüsselwort ist, welches als Wert einer der Entitäten erlaubt ist.

> [!NOTE]
> Das doppelte kaufmännische Und hat Vorrang vor dem doppelten Balken, was bedeutet, dass `bold || thin && <length>` äquivalent zu `bold || [ thin && <length> ]` ist. Es beschreibt `bold`, `thin <length>`, `bold thin <length>`, oder `thin <length> bold`, aber nicht `<length> bold thin`, da bold, wenn es nicht weggelassen wird, vor oder nach der ganzen `thin && <length>` Komponente platziert werden muss.

### Einfacher Balken

Das Trennen von zwei oder mehr Entitäten durch einen _einfachen Balken_, `|`, bedeutet, dass alle Entitäten exklusive Optionen sind: **genau eine dieser Optionen muss vorhanden sein**. Dies wird typischerweise verwendet, um eine Liste möglicher Schlüsselwörter zu trennen.

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
> Der doppelte Balken hat Vorrang vor dem einfachen Balken, was bedeutet, dass `bold | thin || <length>` äquivalent zu `bold | [ thin || <length> ]` ist. Es beschreibt `bold`, `thin`, `<length>`, `<length> thin`, oder `thin <length>`, aber nicht `bold <length>`, da nur eine Entität von jeder Seite des `|` Kombinators vorhanden sein kann.

## Komponentenwert-Multiplikatoren

Ein Multiplikator ist ein Zeichen, das angibt, wie oft eine vorherige Entität wiederholt werden kann. Ohne einen Multiplikator muss eine Entität genau einmal erscheinen.

Multiplikatoren können nicht hinzugefügt werden und haben Vorrang vor allen Kombinatoren.

### Sternchen (`*`)

Der _Sternchen-Multiplikator_ zeigt an, dass die Entität **null, einmal oder mehrmals** erscheinen kann.

```css
bold smaller*
```

Dieses Beispiel passt zu den folgenden Werten:

- `bold`
- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`, und so weiter.

Aber nicht:

- `smaller`, da `bold` nebeneinander gestellt ist und vor jedem `smaller`-Schlüsselwort erscheinen muss.

### Pluszeichen (`+`)

Der _Plus-Multiplikator_ zeigt an, dass die Entität **einmal oder mehrmals** erscheinen kann.

```css
bold smaller+
```

Dieses Beispiel passt zu den folgenden Werten:

- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`, und so weiter.

Aber nicht:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `smaller`, da `bold` nebeneinander gestellt ist und vor jedem `smaller`-Schlüsselwort erscheinen muss.

### Fragezeichen (`?`)

Der _Fragezeichen-Multiplikator_ zeigt an, dass die Entität optional ist und **null- oder einmal** erscheinen muss.

```css
bold smaller?
```

Dieses Beispiel passt zu den folgenden Werten:

- `bold`
- `bold smaller`

Aber nicht:

- `bold smaller smaller`, da `smaller` höchstens einmal erscheinen darf.
- `smaller`, da `bold` nebeneinander gestellt ist und vor jedem `smaller`-Schlüsselwort erscheinen muss.

### Geschweifte Klammern (`{ }`)

Der _Geschweifte-Klammern-Multiplikator_, der zwei durch ein Komma getrennte ganze Zahlen, A und B, einschließt, gibt an, dass die Entität **mindestens A-mal und höchstens B-mal** erscheinen muss.

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
- `smaller`, da `bold` nebeneinander gestellt ist und vor jedem `smaller`-Schlüsselwort erscheinen muss

### Rautezeichen (`#`)

Der _Rautezeichen-Multiplikator_ gibt an, dass die Entität ein oder mehrmals wiederholt werden kann (zum Beispiel der Plus-Multiplikator), aber jedes Vorkommen wird durch ein Komma (',') getrennt.

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
- `smaller`, da `bold` nebeneinander gestellt ist und vor jedem `smaller`-Schlüsselwort erscheinen muss.

Das Rautezeichen kann optional von geschweiften Klammern gefolgt werden, um anzugeben, wie oft sich die Entität wiederholt.

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

Der _Ausrufezeichen-Multiplikator_ nach einer Gruppe gibt an, dass die Gruppe erforderlich ist und mindestens einen Wert erzeugen muss; selbst wenn die Grammatik der Elemente innerhalb der Gruppe es sonst erlauben würde, den gesamten Inhalt wegzulassen, darf mindestens ein Komponentenwert nicht weggelassen werden.

```css
[ bold? smaller? ]!
```

Dieses Beispiel passt zu den folgenden Werten:

- `bold`
- `smaller`
- `bold smaller`

Aber nicht:

- weder `bold` noch `smaller`, da eine von ihnen erscheinen muss.
- `smaller bold`, da `bold` nebeneinander gestellt ist und vor dem `smaller`-Schlüsselwort erscheinen muss.
- `bold smaller bold`, da `bold` und `smaller` jeweils nur einmal erscheinen dürfen.

## Bereichsnotation in Klammern (`[min,max]`)

Einige Typen können numerische Werte innerhalb eines bestimmten Bereichs akzeptieren. Zum Beispiel kann die [`column-count`](/de/docs/Web/CSS/column-count) Eigenschaft einen ganzzahligen Wert zwischen positiv 1 und unendlich, einschließlich, akzeptieren. Die entsprechende Syntax sieht folgendermaßen aus:

```plain
<integer [1,∞]>
```

Jeder Wert außerhalb dieses angegebenen Bereichs macht die gesamte Deklaration ungültig, daher wird sie vom Browser ignoriert.

Die _Bereichsnotation in Klammern_ `[min, max]` gibt einen einschließenden Bereich zwischen einem `min`- und `max`-Wert an. Diese Notation wird in numerischen Typnotationen verwendet und kann Einheiten enthalten, z. B. `<angle [0,180deg]>`. Positive und negative Unendlichkeit (-∞ und ∞) dürfen keine Einheiten haben. Typen, die in Einheiten angegeben sind, können Nullwerte mit oder ohne Einheiten spezifiziert haben, z. B. `<time [0s,10s]>` oder `<time [0,10s]>`.

Hier sind einige weitere Beispiele:

- `<integer [-∞,∞]>`: Jeder Ganzzahlwert von negativer bis positiver Unendlichkeit.
- `<integer [0,∞]>`: Jede Ganzzahl von 0 bis positive Unendlichkeit ist gültig. Negative Ganzzahlen sind ungültig.
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
      <td>Nebeneinanderstellung</td>
      <td>Komponenten sind obligatorisch und sollten in der genannten Reihenfolge erscheinen</td>
      <td><code>solid &#x3C;length></code></td>
    </tr>
    <tr>
      <td><code>&#x26;&#x26;</code></td>
      <td>Doppeltes kaufmännisches Und</td>
      <td>Komponenten sind obligatorisch, können jedoch in beliebiger Reihenfolge erscheinen</td>
      <td><code>&#x3C;length> &#x26;&#x26; &#x3C;string></code></td>
    </tr>
    <tr>
      <td><code>||</code></td>
      <td>Doppelter Balken</td>
      <td>
        Mindestens eine der Komponenten muss vorhanden sein und sie können in
        beliebiger Reihenfolge erscheinen.
      </td>
      <td>
        <code>&#x3C;'border-image-outset'> || &#x3C;'border-image-slice'></code>
      </td>
    </tr>
    <tr>
      <td><code>|</code></td>
      <td>Ein einfacher Balken</td>
      <td>Genau eine der Komponenten muss vorhanden sein</td>
      <td><code>smaller | small | normal | big | bigger</code></td>
    </tr>
    <tr>
      <td><code>[ ]</code></td>
      <td>Klammern</td>
      <td>Gruppiert Komponenten, um Vorrangregeln zu umgehen</td>
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
      <td>0 oder 1-mal (das heißt <em>optional)</em></td>
      <td><code>bold smaller?</code></td>
    </tr>
    <tr>
      <td><code>{min,max}</code></td>
      <td>Geschweifte Klammern</td>
      <td>Mindestens <code>min</code>-mal, höchstens <code>max</code>-mal</td>
      <td><code>bold smaller{1,3}</code></td>
    </tr>
    <tr>
      <td><code>#</code></td>
      <td>Rautezeichen</td>
      <td>
        1 oder mehrmals, bei jeder Wiederholung durch ein Komma
        (<code>,</code>) getrennt
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

- Wichtige CSS-Konzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax)
  - [Kommentare](/de/docs/Web/CSS/CSS_syntax/Comments)
  - [Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Visual_formatting_model)
  - [Margin-Collapsing](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Initialwerte](/de/docs/Web/CSS/CSS_cascade/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/actual_value)
  - **Wertdefinitionssyntax**
  - [Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties)
  - {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
