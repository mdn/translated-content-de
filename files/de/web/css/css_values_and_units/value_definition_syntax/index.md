---
title: Syntax zur Definition von Werten
slug: Web/CSS/CSS_Values_and_Units/Value_definition_syntax
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

Die **Syntax zur Definition von CSS-Werten**, eine formale Grammatik, wird verwendet, um die Menge der gültigen Werte für eine CSS-Eigenschaft oder Funktion zu definieren. Neben dieser Syntax kann der Satz der gültigen Werte durch semantische Einschränkungen weiter eingegrenzt werden (zum Beispiel, dass eine Zahl strikt positiv sein muss).

Die Definition der Syntax beschreibt, welche Werte zulässig sind und die Interaktionen zwischen ihnen. Eine Komponente kann ein _Schlüsselwort_, einige als _Literal_ betrachtete Zeichen oder ein Wert eines bestimmten CSS-Datentyps oder einer anderen CSS-Eigenschaft sein.

## Komponentenwerttypen

### Schlüsselwörter

#### Generische Schlüsselwörter

Ein Schlüsselwort mit vordefinierter Bedeutung erscheint wörtlich, ohne Anführungszeichen. Zum Beispiel: `auto`, `smaller` oder `ease-in`.

#### CSS-weite Schlüsselwörter

Alle CSS-Eigenschaften akzeptieren die Schlüsselwörter `inherit`, `initial`, `revert`, `revert-layer` und `unset`. Sie werden nicht in der Wertedefinition angezeigt und sind implizit definiert.

### Literale

In CSS können einige Zeichen allein auftreten, wie der Schrägstrich (`/`) oder das Komma (`,`), und werden in einer Eigenschaftsdefinition verwendet, um ihre Teile zu trennen. Das Komma wird oft verwendet, um Werte in Aufzählungen oder Parameter in mathematischen Funktionen zu trennen; der Schrägstrich trennt oft Teile eines Wertes, die semantisch unterschiedlich, aber syntaktisch gleich sind. Typischerweise wird der Schrägstrich in Kurzschreibweise verwendet, um Komponenten desselben Typs zu trennen, die aber zu unterschiedlichen Eigenschaften gehören.

Beide Symbole erscheinen wörtlich in einer Wertedefinition.

### Datentypen

#### Grundlegende Datentypen

Einige Datentypen werden im gesamten CSS verwendet und sind einmalig für alle Werte in der Spezifikation definiert. Diese werden _grundlegende Datentypen_ genannt und sind mit ihrem Namen umgeben von den Symbolen `<` und `>` dargestellt: {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;string&gt;")}}, …

#### Nicht-terminale Datentypen

Weniger gebräuchliche Datentypen, genannt _nicht-terminale Datentypen_, sind ebenfalls von `<` und `>` umgeben.

Nicht-terminale Datentypen sind zweierlei Art:

- Datentypen, die _denselben Namen wie eine Eigenschaft_ tragen, in Anführungszeichen gesetzt. In diesem Fall teilen sich der Datentyp und die Eigenschaft denselben Satz von Werten. Sie werden oft in der Definition von Kurzschreibweise verwendet.
- Datentypen, die _nicht denselben Namen wie eine Eigenschaft_ teilen. Diese Datentypen sind den grundlegenden Datentypen sehr nahe. Sie unterscheiden sich nur durch den physischen Ort ihrer Definition von den grundlegenden Datentypen. In diesem Fall liegt die Definition normalerweise physisch sehr nah bei der Definition der Eigenschaft, die sie verwendet.

## Komponentenwert-Kombinatoren

### Klammern

_Klammern_ umschließen mehrere Entitäten, Kombinatoren und Multiplikatoren und formen sie dann zu einer einzigen Komponente. Sie werden verwendet, um **Komponenten zu gruppieren, um die Vorrangregeln zu umgehen**.

```css
bold [ thin && <length> ]
```

Dieses Beispiel entspricht den folgenden Werten:

- `bold thin 2vh`
- `bold 0 thin`
- `bold thin 3.5em`

Aber nicht:

- `thin bold 3em`, da `bold` in Verbindung mit der durch die Klammern definierten Komponente steht, muss es davor erscheinen.

### Jonglage

Das Platzieren mehrerer Schlüsselwörter, Literale oder Datentypen nebeneinander, nur durch ein oder mehrere Leerzeichen getrennt, wird als _Jonglage_ bezeichnet. Alle verbundenen Komponenten sind **obligatorisch und sollten in exakt dieser Reihenfolge erscheinen**.

```css
bold <length>, thin
```

Dieses Beispiel entspricht den folgenden Werten:

- `bold 1em, thin`
- `bold 0, thin`
- `bold 2.5cm, thin`
- `bold 3vh, thin`

Aber nicht:

- `thin 1em, bold`, da die Entitäten in der angegebenen Reihenfolge sein müssen
- `bold 1em thin`, da die Entitäten zwingend erforderlich sind; das Komma, ein Literal, muss vorhanden sein
- `bold 0.5ms, thin`, da die `ms`-Werte nicht {{CSSxRef("&lt;length&gt;")}} sind

### Doppelampersand

Das Trennen von zwei oder mehr Komponenten mit einem _Doppelampersand_, `&&`, bedeutet, dass all diese Entitäten **obligatorisch sind, aber in beliebiger Reihenfolge erscheinen können**.

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
- `bold 1em bold`, da beide Komponenten nur einmal erscheinen dürfen.

> [!NOTE]
> Jonglage hat Vorrang über den Doppelampersand, was bedeutet, dass `bold thin && <length>` äquivalent zu `[ bold thin ] && <length>` ist. Es beschreibt `bold thin <length>` oder `<length> bold thin`, aber nicht `bold <length> thin`.

### Doppelbalken

Das Trennen von zwei oder mehr Komponenten durch einen _Doppelbalken_, `||`, bedeutet, dass alle Entitäten Optionen sind: **mindestens eine muss vorhanden sein, und sie können in beliebiger Reihenfolge erscheinen**. Typischerweise wird dies verwendet, um die unterschiedlichen Werte einer [Kurzschreibweise-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) zu definieren.

```css
<'border-width'> || <'border-style'> || <'border-color'>
```

Dieses Beispiel entspricht den folgenden Werten:

- `1em solid blue`
- `blue 1em`
- `solid 1px yellow`

Aber nicht:

- `blue yellow`, da eine Komponente höchstens einmal erscheinen darf.
- `bold`, da es kein Schlüsselwort ist, das als Wert einer der Entitäten erlaubt ist.

> [!NOTE]
> Der Doppelampersand hat Vorrang über den Doppelbalken, was bedeutet, dass `bold || thin && <length>` äquivalent zu `bold || [ thin && <length> ]` ist. Es beschreibt `bold`, `thin <length>`, `bold thin <length>`, oder `thin <length> bold`, aber nicht `<length> bold thin`, da bold, wenn nicht ausgelassen, vor oder nach der gesamten `thin && <length>`-Komponente platziert werden muss.

### Einfacher Balken

Das Trennen von zwei oder mehr Entitäten durch einen _einfachen Balken_, `|`, bedeutet, dass alle Entitäten exklusive Optionen sind: **genau eine dieser Optionen muss vorhanden sein**. Dies wird typischerweise verwendet, um eine Liste möglicher Schlüsselwörter zu trennen.

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
- `3em 4.5em`, da eine Komponente höchstens einmal vorhanden sein darf.

> [!NOTE]
> Der Doppelbalken hat Vorrang über den einfachen Balken, was bedeutet, dass `bold | thin || <length>` äquivalent zu `bold | [ thin || <length> ]` ist. Es beschreibt `bold`, `thin`, `<length>`, `<length> thin`, oder `thin <length>`, jedoch nicht `bold <length>`, da nur eine Entität von jeder Seite des `|`-Kombinators vorhanden sein kann.

## Komponentenwert-Multiplikatoren

Ein Multiplikator ist ein Zeichen, das angibt, wie oft eine vorausgehende Entität wiederholt werden kann. Ohne Multiplikator muss eine Entität genau einmal erscheinen.

Multiplikatoren können nicht hinzugefügt werden und haben Vorrang über alle Kombinatoren.

### Asterisk (`*`)

Der _Asterisk-Multiplikator_ gibt an, dass die Entität **null-, ein- oder mehrmals** auftreten kann.

```css
bold smaller*
```

Dieses Beispiel entspricht den folgenden Werten:

- `bold`
- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`, und so weiter.

Aber nicht:

- `smaller`, da `bold` verbunden ist und vor jedem `smaller`-Schlüsselwort erscheinen muss.

### Plus (`+`)

Der _Plus-Multiplikator_ gibt an, dass die Entität **ein- oder mehrmals** auftreten kann.

```css
bold smaller+
```

Dieses Beispiel entspricht den folgenden Werten:

- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`, und so weiter.

Aber nicht:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `smaller`, da `bold` verbunden ist und vor jedem `smaller`-Schlüsselwort erscheinen muss.

### Fragezeichen (`?`)

Der _Fragezeichen-Multiplikator_ gibt an, dass die Entität optional ist und **null- oder einmal** auftreten muss.

```css
bold smaller?
```

Dieses Beispiel entspricht den folgenden Werten:

- `bold`
- `bold smaller`

Aber nicht:

- `bold smaller smaller`, da `smaller` höchstens einmal erscheinen darf.
- `smaller`, da `bold` verbunden ist und vor jedem `smaller`-Schlüsselwort erscheinen muss.

### Geschweifte Klammern (`{ }`)

Der _geschweifte Klammern-Multiplikator_, der zwei durch ein Komma getrennte ganze Zahlen A und B umschließt, gibt an, dass die Entität **mindestens A- und höchstens B-mal** erscheinen muss.

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
- `smaller`, da `bold` verbunden ist und vor jedem `smaller`-Schlüsselwort erscheinen muss

### Hash-Zeichen (`#`)

Der _Hash-Zeichen-Multiplikator_ gibt an, dass die Entität ein- oder mehrmals wiederholt werden kann (zum Beispiel der Plus-Multiplikator), jedoch jede Vorkommen durch ein Komma (',') getrennt ist.

```css
bold smaller#
```

Dieses Beispiel entspricht den folgenden Werten:

- `bold smaller`
- `bold smaller, smaller`
- `bold smaller, smaller, smaller`, und so weiter.

Aber nicht:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `bold smaller smaller smaller`, da die unterschiedlichen Vorkommen von `smaller` durch Kommas getrennt sein müssen.
- `smaller`, da `bold` verbunden ist und vor jedem `smaller`-Schlüsselwort erscheinen muss.

Das Hash-Zeichen kann optional von geschweiften Klammern gefolgt werden, um anzugeben, wie oft die Entität wiederholt wird.

```css
bold smaller#{1,3}
```

Dieses Beispiel entspricht den folgenden Werten:

- `bold smaller`
- `bold smaller, smaller`
- `bold smaller, smaller, smaller`

Aber nicht:

- `bold smaller, smaller, smaller, smaller`, da `smaller` höchstens dreimal erscheinen darf.

```css
bold smaller#{2}
```

Dieses Beispiel entspricht dem folgenden Wert:

- `bold smaller, smaller`

Aber nicht:

- `bold smaller`, da `smaller` genau zweimal erscheinen muss.

### Ausrufezeichen (`!`)

Der _Ausrufezeichen-Multiplikator_ nach einer Gruppe zeigt an, dass die Gruppe erforderlich ist und mindestens einen Wert erzeugen muss; selbst wenn die Grammatik der Elemente innerhalb der Gruppe es sonst erlauben würde, den gesamten Inhalt wegzulassen, darf mindestens ein Komponentenwert nicht ausgelassen werden.

```css
[ bold? smaller? ]!
```

Dieses Beispiel entspricht den folgenden Werten:

- `bold`
- `smaller`
- `bold smaller`

Aber nicht:

- weder `bold` noch `smaller`, da einer von beiden erscheinen muss.
- `smaller bold`, da `bold` verbunden ist und vor dem `smaller`-Schlüsselwort erscheinen muss.
- `bold smaller bold`, da `bold` und `smaller` nur einmal erscheinen dürfen.

## Bereichsnotation in eckigen Klammern (`[min,max]`)

Einige Typen können numerische Werte innerhalb eines bestimmten Bereichs akzeptieren. Zum Beispiel kann die [`column-count`](/de/docs/Web/CSS/column-count)-Eigenschaft einen ganzzahligen Wert zwischen positiv 1 und unendlich annehmen. Die entsprechende Syntax sieht so aus:

```plain
<integer [1,∞]>
```

Jeder Wert außerhalb dieses angegebenen Bereichs macht die gesamte Deklaration ungültig, daher wird der Browser sie ignorieren.

Die _Bereichsnotation in eckigen Klammern_ `[min, max]` gibt einen inklusiven Bereich zwischen einem `min`- und `max`-Wert an. Diese Notation wird in numerischen Typ-Notation verwendet und kann Einheiten enthalten, z.B. `<angle [0,180deg]>`. Positive und negative Unendlichkeit (-∞ und ∞) dürfen keine Einheiten angegeben haben. Mit Einheiten spezifizierte Typen können Nullwerte mit oder ohne Einheiten angegeben, zum Beispiel `<time [0s,10s]>` oder `<time [0,10s]>`.

Hier sind einige weitere Beispiele:

- `<integer [-∞,∞]>`: Jede ganze Zahl von negativer Unendlichkeit bis positive Unendlichkeit.
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
      <td>Jonglage</td>
      <td>Komponenten sind obligatorisch und sollten in dieser Reihenfolge erscheinen</td>
      <td><code>solid &#x3C;length></code></td>
    </tr>
    <tr>
      <td><code>&#x26;&#x26;</code></td>
      <td>Doppelampersand</td>
      <td>Komponenten sind obligatorisch, können aber in beliebiger Reihenfolge erscheinen</td>
      <td><code>&#x3C;length> &#x26;&#x26; &#x3C;string></code></td>
    </tr>
    <tr>
      <td><code>||</code></td>
      <td>Doppelbalken</td>
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
      <td>Einfacher Balken</td>
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
      <td>Hash-Zeichen</td>
      <td>
        1 oder mehrmals, wobei jedes Vorkommen durch ein Komma getrennt ist
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
      <td>Numerischer eingerahmter Bereich</td>
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
  - [Layout-Modi](/de/docs/Web/CSS/Layout_mode)
  - [Visuelle Formatierungsmodelle](/de/docs/Web/CSS/Visual_formatting_model)
  - [Randkollaps](/de/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - Werte
    - [Anfangswerte](/de/docs/Web/CSS/CSS_cascade/initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/CSS_cascade/computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/CSS_cascade/used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/CSS_cascade/actual_value)
  - **Syntax zur Definition von Werten**
  - [Kurzschreibweise-Eigenschaften](/de/docs/Web/CSS/Shorthand_properties)
  - [Ersetzte Elemente](/de/docs/Web/CSS/Replaced_element)
