---
title: Wertdefinition-Syntax
slug: Web/CSS/Guides/Values_and_units/Value_definition_syntax
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **CSS-Wertdefinition-Syntax**, eine formale Grammatik, wird verwendet, um die Menge an gültigen Werten für eine CSS-Eigenschaft oder Funktion zu definieren. Zusätzlich zu dieser Syntax kann die Menge der gültigen Werte durch semantische Einschränkungen weiter eingeschränkt werden (zum Beispiel, wenn eine Zahl streng positiv sein muss).

Die Definition-Syntax beschreibt, welche Werte zulässig sind und die Wechselwirkungen zwischen ihnen. Eine Komponente kann ein _Schlüsselwort_, einige Zeichen, die als _Literal_ betrachtet werden, oder ein Wert eines bestimmten CSS-Datentyps oder einer anderen CSS-Eigenschaft sein.

## Komponententypen

### Schlüsselwörter

#### Generische Schlüsselwörter

Ein Schlüsselwort mit einer vordefinierten Bedeutung erscheint wörtlich, ohne Anführungszeichen. Zum Beispiel: `auto`, `smaller` oder `ease-in`.

#### CSS-weite Schlüsselwörter

Alle CSS-Eigenschaften akzeptieren die Schlüsselwörter `inherit`, `initial`, `revert`, `revert-layer` und `unset`. Sie werden nicht in der Wertdefinition angezeigt und sind implizit definiert.

### Literale

Im CSS können einige Zeichen eigenständig erscheinen, wie der Schrägstrich (`/`) oder das Komma (`,`), und werden in einer Eigenschaftendefinition genutzt, um ihre Teile zu trennen. Das Komma wird oft verwendet, um Werte in Aufzählungen oder Parameter in mathematisch ähnlichen Funktionen zu trennen; der Schrägstrich trennt oft Teile des Wertes, die semantisch verschieden sind, aber eine gemeinsame Syntax haben. Typischerweise wird der Schrägstrich in Kurzschreibeigenschaften verwendet, um Komponenten des gleichen Typs, die zu verschiedenen Eigenschaften gehören, zu trennen.

Beide Symbole erscheinen wörtlich in einer Wertdefinition.

### Datentypen

#### Basisdatentypen

Einige Datentypen werden im gesamten CSS verwendet und sind einmal für alle Werte in der Spezifikation definiert. Diese werden als _Basisdatentypen_ bezeichnet und werden durch ihren Namen dargestellt, umgeben von den Zeichen `<` und `>`: {{CSSxRef("&lt;angle&gt;")}}, {{CSSxRef("&lt;string&gt;")}}, …

#### Nicht-terminale Datentypen

Weniger gängige Datentypen, sogenannte _nicht-terminale Datentypen_, sind ebenfalls von `<` und `>` umgeben.

Nicht-terminale Datentypen gibt es in zwei Arten:

- Datentypen _mit dem gleichen Namen wie eine Eigenschaft_, in Anführungszeichen gesetzt. In diesem Fall teilt der Datentyp die gleiche Menge an Werten wie die Eigenschaft. Sie werden oft in der Definition von Kurzschreibeigenschaften verwendet.
- Datentypen _ohne den gleichen Namen wie eine Eigenschaft_. Diese Datentypen sind den Basisdatentypen sehr nahe. Sie unterscheiden sich von den Basisdatentypen nur im physischen Ort ihrer Definition. In diesem Fall ist die Definition normalerweise physisch sehr nah an der Definition der Eigenschaft, die sie verwendet.

## Kombinatoren für Komponentenwerte

### Klammern

_Klammern_ umfassen mehrere Entitäten, Kombinatoren und Multiplikatoren, und transformieren sie dann in eine einzelne Komponente. Sie werden verwendet, um **Komponenten zu gruppieren, um die Vorrangregeln zu umgehen**.

{{CSSSyntaxRaw(`example = bold [ thin && <length> ]`)}}

Dieses Beispiel passt zu den folgenden Werten:

- `bold thin 2vh`
- `bold 0 thin`
- `bold thin 3.5em`

Aber nicht zu:

- `thin bold 3em`, da `bold` mit der Komponente, die durch die Klammern definiert ist, in Reihe steht, muss es davor erscheinen.

### Nebeneinanderstellung

Das Platzieren mehrerer Schlüsselwörter, Literale oder Datentypen nebeneinander, nur durch ein oder mehrere Leerzeichen getrennt, wird _Nebeneinanderstellung_ genannt. Alle nebeneinandergestellten Komponenten sind **zwingend erforderlich und müssen in der genauen Reihenfolge erscheinen**.

{{CSSSyntaxRaw(`example = bold <length>, thin`)}}

Dieses Beispiel passt zu den folgenden Werten:

- `bold 1em, thin`
- `bold 0, thin`
- `bold 2.5cm, thin`
- `bold 3vh, thin`

Aber nicht zu:

- `thin 1em, bold`, da die Entitäten in der angegebenen Reihenfolge sein müssen
- `bold 1em thin`, da die Entitäten zwingend erforderlich sind; das Komma, ein Literal, muss vorhanden sein
- `bold 0.5ms, thin`, da die `ms` Werte keine {{CSSxRef("&lt;length&gt;")}} sind

### Doppelte Und-Verknüpfung

Das Trennen von zwei oder mehr Komponenten durch eine _doppelte Und-Verknüpfung_, `&&`, bedeutet, dass alle diese Entitäten **zwingend erforderlich sind, jedoch in beliebiger Reihenfolge erscheinen können**.

{{CSSSyntaxRaw(`example = bold && <length>`)}}

Dieses Beispiel passt zu den folgenden Werten:

- `bold 1em`
- `bold 0`
- `2.5cm bold`
- `3vh bold`

Aber nicht zu:

- `bold`, da beide Komponenten im Wert erscheinen müssen.
- `bold 1em bold`, da beide Komponenten nur einmal erscheinen dürfen.

> [!NOTE]
> Die Nebeneinanderstellung hat Vorrang vor der doppelten Und-Verknüpfung, was bedeutet, dass `bold thin && <length>` gleichbedeutend mit `[ bold thin ] && <length>` ist. Es beschreibt `bold thin <length>` oder `<length> bold thin`, aber nicht `bold <length> thin`.

### Doppelte Oder-Verknüpfung

Das Trennen von zwei oder mehr Komponenten durch eine _doppelte Oder-Verknüpfung_, `||`, bedeutet, dass alle Entitäten Optionen sind: **mindestens eine muss vorhanden sein und sie können in beliebiger Reihenfolge erscheinen**. Typischerweise wird dies verwendet, um die verschiedenen Werte einer [Kurzschreibeigenschaft](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) zu definieren.

{{CSSSyntaxRaw(`example = <number> || <length> || <color>`)}}

Dieses Beispiel passt zu den folgenden Werten:

- `1em 1 blue`
- `blue 1em`
- `1 1px yellow`

Aber nicht zu:

- `blue yellow`, da eine Komponente höchstens einmal erscheinen darf.
- `bold`, da es kein Schlüsselwort ist, das als Wert einer der Entitäten erlaubt ist.

> [!NOTE]
> Die doppelte Und-Verknüpfung hat Vorrang vor der doppelten Oder-Verknüpfung, was bedeutet, dass `bold || thin && <length>` gleichbedeutend mit `bold || [ thin && <length> ]` ist. Es beschreibt `bold`, `thin <length>`, `bold thin <length>` oder `thin <length> bold`, aber nicht `<length> bold thin`, da bold, wenn nicht weggelassen, vor oder nach der gesamten `thin && <length>` Komponente platziert werden muss.

### Einfache Oder-Verknüpfung

Das Trennen von zwei oder mehr Entitäten durch eine _einfache Oder-Verknüpfung_, `|`, bedeutet, dass alle Entitäten exklusive Optionen sind: **genau eine dieser Optionen muss vorhanden sein**. Dies wird typischerweise verwendet, um eine Liste möglicher Schlüsselwörter zu trennen.

{{CSSSyntaxRaw(`example = <percentage> | <length> | left | center | right | top | bottom`)}}

Dieses Beispiel passt zu den folgenden Werten:

- `3%`
- `0`
- `3.5em`
- `left`
- `center`
- `right`
- `top`
- `bottom`

Aber nicht zu:

- `center 3%`, da nur eine der Komponenten vorhanden sein muss.
- `3em 4.5em`, da eine Komponente höchstens einmal vorhanden sein darf.

> [!NOTE]
> Die doppelte Oder-Verknüpfung hat Vorrang vor der einfachen Oder-Verknüpfung, was bedeutet, dass `bold | thin || <length>` gleichbedeutend mit `bold | [ thin || <length> ]` ist. Es beschreibt `bold`, `thin`, `<length>`, `<length> thin` oder `thin <length>`, aber nicht `bold <length>`, da nur eine Entität von jeder Seite des `|` Kombinators vorhanden sein kann.

## Multiplikatoren für Komponentenwerte

Ein Multiplikator ist ein Zeichen, das angibt, wie oft eine vorhergehende Entität wiederholt werden kann. Ohne Multiplikator muss eine Entität genau einmal erscheinen.

Multiplikatoren können nicht hinzugefügt werden und haben Vorrang vor allen Kombinatoren.

### Sternchen (`*`)

Der _Sternchen-Multiplikator_ gibt an, dass die Entität **null-, einmal- oder mehrmals** erscheinen kann.

{{CSSSyntaxRaw(`example = bold smaller*`)}}

Dieses Beispiel passt zu den folgenden Werten:

- `bold`
- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`, und so weiter.

Aber nicht zu:

- `smaller`, da `bold` in Reihe steht und vor jedem `smaller` Schlüsselwort erscheinen muss.

### Pluszeichen (`+`)

Der _Plus-Multiplikator_ gibt an, dass die Entität **einmal oder mehrmals** erscheinen kann.

{{CSSSyntaxRaw(`example = bold smaller+`)}}

Dieses Beispiel passt zu den folgenden Werten:

- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`, und so weiter.

Aber nicht zu:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `smaller`, da `bold` in Reihe steht und vor jedem `smaller` Schlüsselwort erscheinen muss.

### Fragezeichen (`?`)

Der _Fragezeichen-Multiplikator_ gibt an, dass die Entität optional ist und **null- oder einmal** erscheinen muss.

{{CSSSyntaxRaw(`example = bold smaller?`)}}

Dieses Beispiel passt zu den folgenden Werten:

- `bold`
- `bold smaller`

Aber nicht zu:

- `bold smaller smaller`, da `smaller` höchstens einmal erscheinen darf.
- `smaller`, da `bold` in Reihe steht und vor jedem `smaller` Schlüsselwort erscheinen muss.

### Geschweifte Klammern (`{ }`)

Der _geschweifte Klammern Multiplikator_, umschließt zwei durch ein Komma getrennte ganze Zahlen A und B und zeigt an, dass die Entität **mindestens A und höchstens B Mal erscheinen muss**.

{{CSSSyntaxRaw(`example = bold smaller{1,3}`)}}

Dieses Beispiel passt zu den folgenden Werten:

- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`

Aber nicht zu:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `bold smaller smaller smaller smaller`, da `smaller` höchstens dreimal erscheinen darf.
- `smaller`, da `bold` in Reihe steht und vor jedem `smaller` Schlüsselwort erscheinen muss.

### Rautenzeichen (`#`)

Der _Rautenzeichen-Multiplikator_ gibt an, dass die Entität einmal oder mehrmals wiederholt werden kann (zum Beispiel der Plus-Multiplikator), aber jedes Vorkommen durch ein Komma (',') getrennt ist.

{{CSSSyntaxRaw(`example = bold smaller#`)}}

Dieses Beispiel passt zu den folgenden Werten:

- `bold smaller`
- `bold smaller, smaller`
- `bold smaller, smaller, smaller`, und so weiter.

Aber nicht zu:

- `bold`, da `smaller` mindestens einmal erscheinen muss.
- `bold smaller smaller smaller`, da die verschiedenen Vorkommen von `smaller` durch Kommas getrennt sein müssen.
- `smaller`, da `bold` in Reihe steht und vor jedem `smaller` Schlüsselwort erscheinen muss.

Das Rautenzeichen kann optional von geschweiften Klammern gefolgt werden, um anzugeben, wie oft die Entität wiederholt wird.

{{CSSSyntaxRaw(`example = bold smaller#{1,3}`)}}

Dieses Beispiel passt zu den folgenden Werten:

- `bold smaller`
- `bold smaller, smaller`
- `bold smaller, smaller, smaller`

Aber nicht zu:

- `bold smaller, smaller, smaller, smaller`, da `smaller` höchstens dreimal erscheinen darf.

{{CSSSyntaxRaw(`example = bold smaller#{2}`)}}

Dieses Beispiel passt zu dem folgenden Wert:

- `bold smaller, smaller`

Aber nicht zu:

- `bold smaller`, da `smaller` genau zweimal erscheinen muss.

### Ausrufezeichen (`!`)

Der _Ausrufezeichen-Multiplikator_ nach einer Gruppe gibt an, dass die Gruppe erforderlich ist und mindestens einen Wert produzieren muss; selbst wenn die Grammatik der Elemente innerhalb der Gruppe ansonsten das Auslassen der gesamten Inhalte erlauben würde, muss mindestens ein Komponentenwert nicht weggelassen werden.

{{CSSSyntaxRaw(`example = [ bold? smaller? ]!`)}}

Dieses Beispiel passt zu den folgenden Werten:

- `bold`
- `smaller`
- `bold smaller`

Aber nicht zu:

- weder `bold` noch `smaller`, da eines von ihnen erscheinen muss.
- `smaller bold`, da `bold` in Reihe steht und vor dem `smaller` Schlüsselwort erscheinen muss.
- `bold smaller bold`, da `bold` und `smaller` nur einmal erscheinen dürfen.

## Klammerbereichsnotation (`[min,max]`)

Einige Typen können numerische Werte innerhalb eines bestimmten Bereichs akzeptieren. Zum Beispiel kann die Eigenschaft {{cssxref("column-count")}} einen ganzzahligen Wert zwischen positiv 1 und unendlich, einschließlich, akzeptieren. Die entsprechende Syntax sieht so aus:

{{CSSSyntaxRaw(`example = <integer [1,∞]>`)}}

Jeder Wert außerhalb dieses angegebenen Bereichs macht die gesamte Deklaration ungültig, daher ignoriert der Browser sie.

Die _Klammerbereichsnotation_ `[min, max]` gibt einen inklusiven Bereich zwischen einem `min`- und einem `max`-Wert an. Diese Notation wird in numerischen Typnotationen verwendet und kann Einheiten enthalten, z.B. `<angle [0,180deg]>`. Positive und negative Unendlichkeit (-∞ und ∞) dürfen keine Einheiten angeben. Typen, die in Einheiten spezifiziert sind, können Nullwerte mit oder ohne Einheiten spezifiziert haben, zum Beispiel `<time [0s,10s]>` oder `<time [0,10s]>`.

Hier sind einige weitere Beispiele:

- `<integer [-∞,∞]>`: Jeder ganze Wert von negativer Unendlichkeit bis positiver Unendlichkeit.
- `<integer [0,∞]>`: Jeder ganzzahlige Wert von 0 bis zu positiver Unendlichkeit ist gültig. Negative Ganzzahlen sind ungültig.
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
      <td>Nebeneinanderstellung</td>
      <td>Komponenten sind zwingend erforderlich und sollten in dieser Reihenfolge erscheinen</td>
      <td><code>solid &#x3C;length></code></td>
    </tr>
    <tr>
      <td><code>&#x26;&#x26;</code></td>
      <td>Doppelte Und-Verknüpfung</td>
      <td>Komponenten sind zwingend erforderlich, jedoch in beliebiger Reihenfolge zulässig</td>
      <td><code>&#x3C;length> &#x26;&#x26; &#x3C;string></code></td>
    </tr>
    <tr>
      <td><code>||</code></td>
      <td>Doppelte Oder-Verknüpfung</td>
      <td>Mindestens eine der Komponenten muss vorhanden sein, und sie können in beliebiger Reihenfolge erscheinen.</td>
      <td><code>&#x3C;'border-image-outset'> || &#x3C;'border-image-slice'></code></td>
    </tr>
    <tr>
      <td><code>|</code></td>
      <td>Einfache Oder-Verknüpfung</td>
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
      <td>Sternzeichen</td>
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
      <td>Rautenzeichen</td>
      <td>1 oder mehrmals, wobei jedes Vorkommen durch ein Komma (<code>,</code>) getrennt ist</td>
      <td><code>bold smaller#</code></td>
    </tr>
    <tr>
      <td><code>!</code></td>
      <td>Ausrufezeichen</td>
      <td>Gruppe muss mindestens 1 Wert produzieren</td>
      <td><code>[ bold? smaller? ]!</code></td>
    </tr>
    <tr>
      <th colspan="4">Bereiche</th>
    </tr>
    <tr>
      <td><code>[min,max]</code></td>
      <td>Numerischer geklammerter Bereich</td>
      <td>Gibt einen numerischen Bereich an</td>
      <td><code>&#x3C;integer [0,∞]></code></td>
    </tr>
  </tbody>
</table>

## Spezifikationen

{{Specifications}}

## Siehe auch

- CSS-Schlüsselkonzepte:
  - [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax/Introduction)
  - [Kommentare](/de/docs/Web/CSS/Guides/Syntax/Comments)
  - [Spezifizität](/de/docs/Web/CSS/Guides/Cascade/Specificity)
  - [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
  - [Box-Modell](/de/docs/Web/CSS/Guides/Box_model/Introduction)
  - {{Glossary("Layout_mode", "Layout-Modi")}}
  - [Visuelles Formatierungsmodell](/de/docs/Web/CSS/Guides/Display/Visual_formatting_model)
  - [Rand-Zusammenbruch](/de/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
  - Werte
    - [Anfangswerte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value)
    - [Berechnete Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value)
    - [Verwendete Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value)
    - [Tatsächliche Werte](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value)
  - **Wertdefinition-Syntax**
  - [Kurzschreibeigenschaften](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties)
  - {{Glossary("Replaced_elements", "Ersetzte Elemente")}}
