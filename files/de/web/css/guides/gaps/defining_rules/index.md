---
title: CSS-Regeln für Zeilen- und Spaltenabstände definieren
short-title: Regeln für Abstände definieren
slug: Web/CSS/Guides/Gaps/Defining_rules
l10n:
  sourceCommit: f641d1e7c63d8300c9ff1c6a24158a80e1f24ab0
---

Wenn Sie Layouts mit [Grid](/de/docs/Web/CSS/Guides/Grid_layout), [Flexbox](/de/docs/Web/CSS/Guides/Flexible_box_layout) oder [mehreren Spalten](/de/docs/Web/CSS/Guides/Multicol_layout) erstellen, können Sie dekorative Linien, sogenannte _Regeln_, mittig in den Zwischenräumen zwischen Zeilen und Spalten hinzufügen. Sie können Regeln in allen oder nur in ausgewählten Abständen anzeigen und ihre Breiten, Farben und Einzüge vollständig animieren. Dieser Leitfaden erklärt, wie Sie Breite, Farbe und Stil dieser Regeln festlegen.

## Überblick

Das Modul [CSS gaps](/de/docs/Web/CSS/Guides/Gaps#properties) definiert mehrere Eigenschaften für das Erscheinungsbild von Linien, die in den Zwischenräumen eines Grid-, Flexbox- oder mehrspaltigen Containers hinter dem Inhalt gezeichnet werden. Diese Linien beeinflussen weder das [Box-Modell](/de/docs/Web/CSS/Guides/Box_model/Introduction) noch das Layout. Die Größe der Zwischenräume wird durch die Eigenschaft {{cssxref("gap")}} festgelegt. Ihr Standardwert beträgt bei mehrspaltigen Containern `1em` und in allen anderen Fällen `0`.

Wenn eine Regel breiter als der durch {{cssxref("gap")}} festgelegte Abstand ist, wird sie hinter dem Inhalt gezeichnet, damit sie ihn nicht verdeckt. Achten Sie dennoch auf einen ausreichenden [Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) zwischen dem Inhalt und sowohl dem Hintergrund als auch der Regel, damit der Inhalt lesbar bleibt.

Weitere Informationen dazu, wie Sie den Abstand zwischen benachbarten Boxen in Layouts mit {{Glossary("gutters", "Zwischenräumen")}} festlegen, finden Sie unter [CSS-Abstände definieren](/de/docs/Web/CSS/Guides/Gaps/Defining_gaps).

Alle Eigenschaften für Regelfarbe, Linienbreite und Linienstil akzeptieren eine durch Kommas getrennte Werteliste. So können Sie die Abstände innerhalb eines Containers unterschiedlich gestalten.

```css
rule-color: blue;
rule-width: 10px, 20px;
rule-style: solid, dashed, solid, dotted;
```

Innerhalb der Liste können Sie [die Funktion `repeat()`](#the_repeat_function) verwenden, um eine feste Anzahl von Wiederholungen festzulegen oder automatisch so viele Wiederholungen hinzuzufügen, wie für jede gezeichnete Linie benötigt werden.

```css
rule-color: blue, repeat(3, gray, red);
rule-width: 50px, repeat(10, 10px, 20px), 10px;
rule-style: solid, repeat(auto, dashed, dotted), solid;
```

Die Kurzschreibweisen für Regelfarbe, Linienbreite und Linienstil legen jeweils dieselben Werte für Spalten- und Zeilenregeln fest.

## Die Funktion `repeat()`

Bevor die Eigenschaften für Spalten- und Zeilenregeln erläutert werden, ist es wichtig, die Funktion {{cssxref("repeat()")}} zu verstehen.

Mit der Funktion `repeat()` lässt sich eine gültige Liste von CSS-Werten wiederholen. Das erste Argument gibt an, wie oft die als nachfolgende Argumente übergebene Werteliste wiederholt werden soll. Dadurch lassen sich Werte für Farbe, Linienbreite oder Linienstil beliebig oft wiederholen, ohne sie einzeln aufzuführen.

Die folgenden Deklarationen sind gleichwertig und erzeugen jeweils eine Liste mit acht Farben:

```css
rule-color: blue, yellow, red, yellow, red, yellow, red, gray;
rule-color: blue, repeat(3, yellow, red), gray;
```

Wenn die Anzahl der Werte die Anzahl der Abstände übersteigt, werden die überschüssigen Werte ignoriert. In einem 3×3-Grid-Container sind beispielsweise die ersten Zeilen- und Spaltenregeln blau und die zweiten gelb. Die übrigen Farbwerte der Liste werden nicht verwendet.

Wenn es mehr Abstände als Werte gibt, wird die Liste zyklisch wiederholt. In einem 10×10-Grid-Container gibt es in jeder Richtung neun Abstände. In diesem Fall sind die letzten Regeln blau: Den ersten acht Zeilen- und Spaltenregeln wird jeweils die zugehörige Farbe zugewiesen. Danach beginnt die Liste erneut, sodass die neunten Zeilen- und Spaltenregeln den ersten Wert der Liste erhalten.

Da hier nur drei Zeilen vorhanden sind, werden nur zwei Werte zum Einfärben der Zeilenabstände verwendet. Für die elf Spaltenregeln wird die Liste hingegen zyklisch wiederholt, um jeder Regel einen `<color>`-Wert zuzuweisen.

```css hidden live-sample___regular
div {
  rule-color: blue, repeat(3, yellow, red), gray;
  grid-template-columns: repeat(12, 1fr);
}
```

{{EmbedLiveSample("regular", "", "190")}}

Der erste Parameter der Funktion `repeat()` ist entweder ein {{cssxref("integer")}} mit dem Wert `1` oder größer oder das Schlüsselwort `auto`. Ist die Zahl ungültig (`0`, negativ, fehlend oder keine Ganzzahl), ist die gesamte Deklaration ungültig und wird ignoriert. Das Schlüsselwort `auto` erzeugt innerhalb der Funktion `repeat()` einen _Auto-Repeater_. Dieser weist Regeln Werte zu, die andernfalls keinen Wert aus anderen Teilen der Liste erhalten würden, und verhindert so, dass die Liste zyklisch wiederholt wird. Ein Eigenschaftswert darf höchstens einen Auto-Repeater der Form `repeat(auto, <value-list>)` enthalten.

Mit der folgenden Festlegung kommen in einem Grid mit mindestens 3×3 Zellen die Regeln `blue` und `gray` in jeder Richtung jeweils genau einmal vor:

```css
rule-color: blue, repeat(auto, yellow, red), gray;
```

In diesem Fall werden `yellow` und `red` so oft wie nötig wiederholt, um allen Regeln Werte zuzuweisen, die nicht ausdrücklich durch andere Bestandteile des Eigenschaftswerts festgelegt sind. Die erste Regel ist immer blau. Falls es mehr als eine Regel gibt, ist die letzte immer grau. Alle übrigen Regeln wechseln zwischen `yellow` und `red`.

```css hidden live-sample___autorepeat
div {
  rule-color: blue, repeat(auto, yellow, red), gray;
  grid-template-columns: repeat(12, 1fr);
}
```

{{EmbedLiveSample("autorepeat", "", "190")}}

## Linieneigenschaften

Jede sichtbare Regel hat eine Farbe, eine Breite und einen Stil. Jede dieser Eigenschaften kann durch einen einzelnen Wert oder eine Werteliste definiert werden.

### Farbeigenschaften

Die Eigenschaft {{cssxref("column-rule-color")}} legt die Farbe der zwischen Spalten gezeichneten Linien fest, {{cssxref("row-rule-color")}} die Farbe der zwischen Zeilen gezeichneten Linien. Die Eigenschaft {{cssxref("rule-color")}} setzt sowohl `column-rule-color` als auch `row-rule-color` auf denselben Wert. Für alle diese Eigenschaften wird eine durch Kommas getrennte Werteliste angegeben, die Folgendes enthalten kann:

- {{cssxref("&lt;color&gt;")}}
  - : Ein gültiger `<color>`-Wert, der die Farbe einer Linie festlegt. Der Standardwert ist `currentcolor`.

- `<repeat-line-color>`
  - : Eine Funktion {{cssxref("repeat()")}} mit einem {{cssxref("&lt;integer&gt;")}} als erstem Argument und einem oder mehreren `<color>`-Werten als nachfolgenden Argumenten. Der `<integer>`-Wert muss mindestens `1` betragen und gibt an, wie oft die Liste der `<color>`-Werte wiederholt wird.

- `<auto-repeat-line-color>`
  - : Eine Funktion {{cssxref("repeat()")}} mit `auto` als erstem Argument und einem oder mehreren `<color>`-Werten als nachfolgenden Argumenten. Dadurch entsteht ein Auto-Repeater, der Abstandsregeln `<color>`-Werte zuweist, die andernfalls keinen Wert aus den übrigen Bestandteilen des Eigenschaftswerts erhalten würden. So wird verhindert, dass die durch Kommas getrennte Liste der Eigenschaft zyklisch wiederholt wird. Die Liste darf höchstens einen `<auto-repeat-line-color>`-Wert enthalten.

Wenn wir `auto` innerhalb der Funktion `repeat()` als Teil der Eigenschaft `rule-color` verwenden, können wir die erste und die letzte Regel dunkel und alle dazwischenliegenden Regeln hell gestalten.

```css live-sample___color
div {
  rule-color: black, repeat(auto, lightgray), black;
}
```

{{EmbedLiveSample("color", "", "300")}}

Wenn Sie die Anzahl der Spalten von `6` auf `4` oder `8` ändern, bleiben die erste und die letzte Regel in jeder Richtung `black` und alle übrigen Regeln `lightgray`.

Die grauen horizontalen Linien werden über die schwarzen vertikalen Linien gezeichnet. Das liegt daran, dass Zeilenregeln standardmäßig über Spaltenregeln gezeichnet werden. Sie können dies ändern, indem Sie die Eigenschaft {{cssxref("rule-overlap")}} statt auf ihren Standardwert `row-over-column` auf `column-over-row` setzen.

### Breiteneigenschaften

Die Eigenschaft {{cssxref("column-rule-width")}} legt die Breite der zwischen Spalten gezeichneten Linien fest, {{cssxref("row-rule-width")}} die Breite der zwischen Zeilen gezeichneten Linien. Die Eigenschaft {{cssxref("rule-width")}} setzt sowohl `column-rule-width` als auch `row-rule-width` auf dieselben Werte. Für alle diese Eigenschaften wird eine durch Kommas getrennte Werteliste angegeben, die Folgendes enthalten kann:

- {{cssxref("&lt;line-width&gt;")}}
  - : Legt die Breite der Linie fest, entweder als ausdrücklich angegebene, nicht negative {{cssxref("&lt;length&gt;")}} oder mit einem der Schlüsselwörter `thin`, `medium` oder `thick`. Der Standardwert ist `medium`, was in der Regel `3px` entspricht. Auch benutzerdefinierte Eigenschaften, die zu einem `<line-width>`-Wert aufgelöst werden, sind gültig.
- `<repeat-line-width>`
  - : Eine Funktion `repeat()` mit einem {{cssxref("&lt;integer&gt;")}} als erstem Argument und einem oder mehreren `<line-width>`-Werten als nachfolgenden Argumenten. Der `<integer>`-Wert muss mindestens `1` betragen und gibt an, wie oft die Liste der `<line-width>`-Werte wiederholt wird.
- `<auto-repeat-line-width>`
  - : Eine Funktion `repeat()` mit `auto` als erstem Argument und einem oder mehreren `<line-width>`-Werten als nachfolgenden Argumenten. Dadurch entsteht ein Auto-Repeater, der Abstandsregeln `<line-width>`-Werte zuweist, die andernfalls keinen Wert aus den übrigen Bestandteilen des Eigenschaftswerts erhalten würden. So wird verhindert, dass die durch Kommas getrennte Liste der Eigenschaft zyklisch wiederholt wird. Die Liste darf höchstens einen `<auto-repeat-line-width>`-Wert enthalten.

Anders als die {{cssxref("gap")}}-Eigenschaften beeinflussen `rule-width`-Eigenschaften das Layout nicht.
Sie legen lediglich die Breite der Regeln fest. Regeln erscheinen mittig im Abstand, verändern dessen Größe nicht und haben keinen Einfluss auf das Box-Modell. Regeln, die breiter als der Abstand sind, werden hinter dem Inhalt gezeichnet.

In diesem Beispiel ist {{cssxref("gap")}} auf `20px` gesetzt. Mit der Eigenschaft `rule-width` legen wir unterschiedliche Regelbreiten fest:

```css live-sample___width
div {
  rule-width: 10px, repeat(auto, 20px, 30px), 40px;
}
```

{{EmbedLiveSample("width", "", "300")}}

Die schwarzen Regeln sind im Abstand zentriert. Besonders deutlich wird dies beim ersten Zeilen- und Spaltenabstand, wo die `10px` breite Linie mittig im `20px` breiten Abstand gezeichnet wird. Regeln werden hinter dem Inhalt gezeichnet. Das ist besonders gut zu erkennen, wenn `rule-width` größer als `gap` ist und die Linien durch die halbtransparenten Grid-Elemente hindurchscheinen.

Alle Grid-Elemente haben schwarzen Text und einen halbtransparenten, nahezu weißen Hintergrund. Wenn Sie für Ihren Inhalt eine {{cssxref("background-color")}} festlegen, können Sie verhindern, dass über den Abstand hinausragende Regeln Probleme mit der Barrierefreiheit verursachen. Damit Ihre Inhalte barrierefrei sind, muss zwischen einem Hintergrund – sei es die Hintergrundfarbe oder die Farbe der Regel – und dem Text oder anderen [wichtigen visuellen Informationen](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) ein [ausreichender Kontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) bestehen.

### Eigenschaften für den Linienstil

Die Eigenschaft {{cssxref("column-rule-style")}} legt den Stil der zwischen Spalten gezeichneten Linien fest, {{cssxref("row-rule-style")}} den Stil der zwischen Zeilen gezeichneten Linien. {{cssxref("rule-style")}} setzt sowohl `column-rule-style` als auch `row-rule-style` auf denselben Wert.

Für alle diese Eigenschaften wird eine durch Kommas getrennte Werteliste angegeben, die Folgendes enthalten kann:

- {{cssxref("&lt;line-style&gt;")}}
  - : Ein Schlüsselwort – `solid`, `dashed`, `dotted`, `double`, `groove`, `ridge`, `inset`, `outset`, `none` oder `hidden` –, das den Linienstil der gezeichneten Regel festlegt. Der Standardwert ist `none`.
- `<repeat-line-style>`
  - : Eine Funktion `repeat()` mit einem {{cssxref("&lt;integer&gt;")}} als erstem Argument und einem oder mehreren `<line-style>`-Werten als nachfolgenden Argumenten. Der `<integer>`-Wert muss mindestens `1` betragen und gibt an, wie oft die Liste der `<line-style>`-Werte wiederholt wird.
- `<auto-repeat-line-style>`
  - : Eine Funktion `repeat()` mit `auto` als erstem Argument und einem oder mehreren `<line-style>`-Werten als nachfolgenden Argumenten. Dadurch entsteht ein Auto-Repeater, der Abstandsregeln `<line-style>`-Werte zuweist, die andernfalls keinen Wert aus den übrigen Bestandteilen des Eigenschaftswerts erhalten würden. So wird verhindert, dass die durch Kommas getrennte Liste der Eigenschaft zyklisch wiederholt wird. Die Liste darf höchstens einen `<auto-repeat-line-style>`-Wert enthalten.

Wie bei {{cssxref("border")}} ist der Standardwert `none`. Damit eine Regel gezeichnet wird, muss für sie daher ein `<line-style>`-Wert festgelegt sein, der weder `hidden` noch `none` ist.

In diesem Beispiel weisen wir der Eigenschaft `column-rule-style` eine Liste mit sieben Werten zu. Da das Grid mit acht Spalten sieben Spaltenabstände hat, wird jeder Wert nur einmal verwendet. Die Deklaration `row-rule-style` enthält drei Werte für drei Zeilenregeln; auch hier wird jeder Wert einmal verwendet.

```css live-sample___style
div {
  column-rule-style: solid, dotted, dashed, double, groove, ridge, inset;
  row-rule-style: outset, none, hidden;
}
```

```css hidden live-sample___style
div {
  grid-template-columns: repeat(8, 1fr);
}
```

{{EmbedLiveSample("style", "", "240")}}

In den Zeilenzwischenräumen werden nur die `outset`-Regeln gezeichnet, da bei einem `<line-style>`-Wert von `none` oder `hidden` keine Linie gezeichnet wird.

### Kurzschreibweisen

Mit den Kurzschreibweisen {{cssxref("row-rule")}}, {{cssxref("column-rule")}} und {{cssxref("rule")}} können Sie die Farben, Linienbreiten und Linienstile für eine oder mehrere Linien in einer einzigen Deklaration festlegen.

Für alle diese Kurzschreibweisen wird eine durch Kommas getrennte Liste mit Werten aus den folgenden Kategorien angegeben:

- `<gap-rule>`
  - : Besteht aus einem, zwei oder drei der Werte {{cssxref("&lt;line-width&gt;")}}, {{cssxref("&lt;line-style&gt;")}} und {{cssxref("&lt;color&gt;")}} in beliebiger Reihenfolge. Wie bei der Kurzschreibweise {{cssxref("border")}} muss `<line-style>` angegeben werden, damit eine Linie gezeichnet wird. Andernfalls gilt der Standardwert `none`. Der Standardwert für `<line-width>` ist `medium`, der für `<color>` ist `current-color`.

- `<gap-repeat-rule>`
  - : Eine Funktion `repeat()` mit einem {{cssxref("&lt;integer&gt;")}} als erstem Argument und einem oder mehreren `<gap-rule>`-Werten als nachfolgenden Argumenten. Der `<integer>`-Wert muss mindestens `1` betragen und gibt an, wie oft die Liste der `<gap-rule>`-Werte wiederholt wird.

- `<auto-repeat-gap-rule>`
  - : Eine Funktion `repeat()` mit `auto` als erstem Argument und einem oder mehreren `<gap-rule>`-Werten als nachfolgenden Argumenten. Dadurch entsteht ein Auto-Repeater, der Abstandsregeln `<gap-rule>`-Werte zuweist, die andernfalls keinen Wert aus den übrigen Bestandteilen des Eigenschaftswerts erhalten würden. So wird verhindert, dass die durch Kommas getrennte Liste der Eigenschaft zyklisch wiederholt wird. Die Liste darf höchstens einen `<auto-repeat-gap-rule>`-Wert enthalten.

Die Deklarationen der Kurzschreibweisen ähneln den Werten der einzelnen Eigenschaften. Jeder Wert in der durch Kommas getrennten Liste besteht jedoch aus bis zu drei durch Leerzeichen getrennten Teilwerten. Die Funktion `repeat()` arbeitet genauso wie bei den einzelnen Eigenschaften; auch hier besteht jeder Wert aus einer durch Leerzeichen getrennten Liste von Teilwerten.

```css live-sample___shorthand
div {
  rule:
    10px solid blue,
    repeat(auto, 20px dashed teal, 5px double orange),
    15px inset rebeccapurple;
}
```

{{EmbedLiveSample("shorthand", "", "300")}}

Die Kurzschreibweise `rule` setzt sowohl `column-rule` als auch `row-rule` auf denselben Wert.

```html hidden live-sample___autorepeat live-sample___regular live-sample___color live-sample___width live-sample___style live-sample___shorthand
<section>
  <div>
    <i>A</i>
    <i>B</i>
    <i>C</i>
    <i>D</i>
    <i>E</i>
    <i>F</i>
    <i>G</i>
    <i>H</i>
    <i>I</i>
    <i>J</i>
    <i>K</i>
    <i>L</i>
    <i>M</i>
    <i>N</i>
    <i>O</i>
    <i>P</i>
    <i>Q</i>
    <i>R</i>
    <i>S</i>
    <i>T</i>
    <i>U</i>
    <i>V</i>
    <i>W</i>
    <i>X</i>
    <i>Y</i>
    <i>Z</i>
    <i id="bang">!</i>
  </div>
</section>
```

```css hidden live-sample___autorepeat live-sample___regular live-sample___color live-sample___width live-sample___style live-sample___shorthand
@layer hidden {
  div {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;
    rule: solid 10px;
    border: 1px solid;
    overflow: visible;
    margin: 1em;
    background-color: white;
  }
  i {
    padding: 8px;
    border: 1px dashed;
    color: black;
    background-color: #ddfc;
  }
}
@supports not (row-rule-style: solid) {
  body::before {
    content: "Your browser doesn't support these features.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

## Siehe auch

- [Überblick über die CSS-Eigenschaften zur Gestaltung von Abständen](/de/docs/Web/CSS/Guides/Gaps/Overview)
- [CSS-Abstände definieren](/de/docs/Web/CSS/Guides/Gaps/Defining_gaps)
- Modul [CSS gaps](/de/docs/Web/CSS/Guides/Gaps)
- Modul [CSS borders and box decorations](/de/docs/Web/CSS/Guides/Borders_and_box_decorations)
