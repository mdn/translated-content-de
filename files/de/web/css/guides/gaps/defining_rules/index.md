---
title: CSS-Regeln für Zeilen- und Spaltenabstände definieren
short-title: Regeln für Abstände definieren
slug: Web/CSS/Guides/Gaps/Defining_rules
l10n:
  sourceCommit: e57c161bccdd08db7e46922255e1dc3ea74058d4
---

Beim Erstellen von [Grid-](/de/docs/Web/CSS/Guides/Grid_layout), [Flexbox-](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [mehrspaltigen Layouts](/de/docs/Web/CSS/Guides/Multicol_layout) können Sie in der Mitte der Zwischenräume zwischen Zeilen und Spalten dekorative Linien, sogenannte _Regeln_, hinzufügen. Sie können Regeln in allen oder nur in ausgewählten Zwischenräumen anzeigen und ihre Breite, Farbe und Einzüge vollständig animieren. Dieser Leitfaden erklärt, wie Sie Breite, Farbe und Stil dieser Regeln festlegen.

## Überblick

Das Modul [CSS gaps](/de/docs/Web/CSS/Guides/Gaps#properties) definiert mehrere Eigenschaften für das Erscheinungsbild von Linien, die hinter dem Inhalt in den Zwischenräumen eines Grid-, Flexbox- oder mehrspaltigen Containers gezeichnet werden. Diese Linien beeinflussen weder das [Boxmodell](/de/docs/Web/CSS/Guides/Box_model/Introduction) noch das Layout. Die Größe der Zwischenräume wird durch die Eigenschaft {{cssxref("gap")}} bestimmt. Ihr Standardwert beträgt bei mehrspaltigen Containern `1em` und in allen anderen Kontexten `0`.

Ist eine Regel breiter als der durch {{cssxref("gap")}} festgelegte Zwischenraum, wird die Linie hinter dem Inhalt gezeichnet, damit sie ihn nicht verdeckt. Achten Sie dennoch darauf, dass der [Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) zwischen dem Inhalt und sowohl dem Hintergrund als auch der Regel ausreicht, um die Lesbarkeit zu gewährleisten.

Weitere Informationen zum Festlegen der Abstände zwischen benachbarten Boxen in Layouts mit {{Glossary("gutters", "Zwischenräumen")}} und Abständen finden Sie unter [CSS-Abstände definieren](/de/docs/Web/CSS/Guides/Gaps/Defining_gaps).

Alle Eigenschaften für Regelfarbe, Linienbreite und Linienstil akzeptieren eine kommagetrennte Liste von Werten. So lassen sich die Zwischenräume innerhalb eines Containers unterschiedlich gestalten.

```css
rule-color: blue;
rule-width: 10px, 20px;
rule-style: solid, dashed, solid, dotted;
```

Innerhalb der Liste können Sie [die Funktion `repeat()`](#the_repeat_function) verwenden, um eine bestimmte Anzahl von Wiederholungen festzulegen oder automatisch so viele Wiederholungen hinzuzufügen, wie für alle gezeichneten Linien benötigt werden.

```css
rule-color: blue, repeat(3, gray, red);
rule-width: 50px, repeat(10, 10px, 20px), 10px;
rule-style: solid, repeat(auto, dashed, dotted), solid;
```

Die Kurzschreibweisen für Regelfarbe, Linienbreite und Linienstil legen jeweils dieselben Werte für Spalten- und Zeilenregeln fest.

## Die Funktion `repeat()`

Bevor die Eigenschaften für Spalten- und Zeilenregeln vorgestellt werden, ist es wichtig, die Funktion {{cssxref("repeat()")}} zu verstehen.

Mit der Funktion `repeat()` lässt sich eine gültige Liste von CSS-Werten wiederholen. Das erste Argument gibt an, wie oft die Liste der als weitere Argumente übergebenen Werte wiederholt werden soll. Dadurch können sich Werte für Farbe, Linienbreite oder Linienstil beliebig oft wiederholen, ohne dass Sie sie einzeln aufführen müssen.

Die folgenden Deklarationen sind gleichwertig und erzeugen jeweils eine Liste mit acht Farben:

```css
rule-color: blue, yellow, red, yellow, red, yellow, red, gray;
rule-color: blue, repeat(3, yellow, red), gray;
```

Übersteigt die Anzahl der Werte die Anzahl der Zwischenräume, werden die überzähligen Werte ignoriert. In einem 3×3-Grid-Container sind beispielsweise die ersten Zeilen- und Spaltenregeln blau und die zweiten gelb. Die übrigen Farbwerte der Liste werden nicht verwendet.

Gibt es mehr Zwischenräume als Werte, wird die Liste zyklisch wiederholt. In einem 10×10-Grid-Container gibt es in jeder Richtung neun Zwischenräume. In diesem Fall sind die letzten Regeln blau: Den ersten acht Zeilen- und Spaltenregeln wird jeweils die zugehörige Farbe zugewiesen. Danach beginnt die Liste erneut, sodass die neunten Zeilen- und Spaltenregeln den ersten Wert der Liste erhalten.

Hier werden bei nur drei Zeilen lediglich zwei Werte zum Einfärben der Zeilenabstände verwendet. Für die elf Spaltenregeln wird die Liste hingegen zyklisch wiederholt, um jeder einen `<color>`-Wert zuzuweisen.

```css hidden live-sample___regular
div {
  rule-color: blue, repeat(3, yellow, red), gray;
  grid-template-columns: repeat(12, 1fr);
}
```

{{EmbedLiveSample("regular", "", "190")}}

Der erste Parameter der Funktion `repeat()` ist entweder ein {{cssxref("integer")}} mit dem Wert `1` oder größer oder das Schlüsselwort `auto`. Ist die Zahl ungültig (`0`, negativ, fehlend oder keine Ganzzahl), ist die gesamte Deklaration ungültig und wird ignoriert. Das Schlüsselwort `auto` innerhalb der Funktion `repeat()` erzeugt eine _automatische Wiederholung_, die Werte dort einsetzt, wo andernfalls kein Wert aus anderen Teilen der Liste zugewiesen würde. So wird verhindert, dass die Liste zyklisch wiederholt wird. Ein Eigenschaftswert darf höchstens eine automatische Wiederholung der Form `repeat(auto, <value-list>)` enthalten.

Mit der folgenden Festlegung kommen in einem Grid mit mindestens 3×3 Elementen die Regeln `blue` und `gray` in jeder Richtung jeweils genau einmal vor:

```css
rule-color: blue, repeat(auto, yellow, red), gray;
```

In diesem Fall werden `yellow` und `red` so oft wie nötig wiederholt, um allen Regeln Werte zuzuweisen, die nicht ausdrücklich durch andere Bestandteile des Eigenschaftswerts festgelegt sind. Die erste Regel ist immer blau. Gibt es mehr als eine Regel, ist die letzte immer grau. Alle übrigen Regeln wechseln zwischen `yellow` und `red`.

```css hidden live-sample___autorepeat
div {
  rule-color: blue, repeat(auto, yellow, red), gray;
  grid-template-columns: repeat(12, 1fr);
}
```

{{EmbedLiveSample("autorepeat", "", "190")}}

## Linieneigenschaften

Jede sichtbare Regel hat eine Farbe, eine Breite und einen Stil. Jede dieser Eigenschaften kann als einzelner Wert oder als Werteliste definiert werden.

### Farbeigenschaften

Die Eigenschaft {{cssxref("column-rule-color")}} legt die Farbe der Linien zwischen Spalten fest, {{cssxref("row-rule-color")}} die Farbe der Linien zwischen Zeilen. Die Eigenschaft {{cssxref("rule-color")}} setzt sowohl `column-rule-color` als auch `row-rule-color` auf denselben Wert. Für alle diese Eigenschaften wird eine kommagetrennte Werteliste angegeben, die Folgendes enthalten kann:

- {{cssxref("&lt;color&gt;")}}
  - : Ein gültiger `<color>`-Wert, der die Farbe einer Linie festlegt. Der Standardwert ist `currentcolor`.

- `<repeat-line-color>`
  - : Eine Funktion {{cssxref("repeat()")}} mit einem {{cssxref("&lt;integer&gt;")}} als erstem Argument und einem oder mehreren `<color>`-Werten als weiteren Argumenten. Der `<integer>`-Wert muss mindestens `1` betragen und gibt an, wie oft die Liste der `<color>`-Werte wiederholt werden soll.

- `<auto-repeat-line-color>`
  - : Eine Funktion {{cssxref("repeat()")}} mit `auto` als erstem Argument und einem oder mehreren `<color>`-Werten als weiteren Argumenten. Dadurch entsteht eine automatische Wiederholung, die `<color>`-Werte den Regeln in Zwischenräumen zuweist, die sonst keine Werte aus den anderen Bestandteilen des Eigenschaftswerts erhalten würden. So wird verhindert, dass die kommagetrennte Liste der Eigenschaft zyklisch wiederholt wird. Die Liste darf höchstens einen `<auto-repeat-line-color>`-Wert enthalten.

Wenn Sie `auto` innerhalb der Funktion `repeat()` als Teil der Eigenschaft `rule-color` verwenden, können Sie die erste und letzte Regel dunkel und alle Regeln dazwischen hell gestalten.

```css live-sample___color
div {
  rule-color: black, repeat(auto, lightgray), black;
}
```

{{EmbedLiveSample("color", "", "300")}}

Wenn Sie die Anzahl der Spalten von `6` auf `4` oder `8` ändern, bleiben die erste und letzte Regel in jeder Richtung `black` und alle übrigen Regeln `lightgray`.

Die grauen horizontalen Linien werden über den schwarzen vertikalen Linien gezeichnet. Das liegt daran, dass Zeilenregeln standardmäßig über Spaltenregeln gezeichnet werden. Sie können dies ändern, indem Sie die Eigenschaft {{cssxref("rule-overlap")}} statt auf ihren Standardwert `row-over-column` auf `column-over-row` setzen.

### Breiteneigenschaften

Die Eigenschaft {{cssxref("column-rule-width")}} legt die Breite der Linien zwischen Spalten fest, {{cssxref("row-rule-width")}} die Breite der Linien zwischen Zeilen. Die Eigenschaft {{cssxref("rule-width")}} setzt sowohl `column-rule-width` als auch `row-rule-width` auf dieselben Werte. Für alle diese Eigenschaften wird eine kommagetrennte Werteliste angegeben, die Folgendes enthalten kann:

- {{cssxref("&lt;line-width&gt;")}}
  - : Definiert die Breite der Linie, entweder als ausdrücklichen, nicht negativen {{cssxref("&lt;length&gt;")}}-Wert oder mit einem der Schlüsselwörter `thin`, `medium` oder `thick`. Der Standardwert ist `medium`, was in der Regel `3px` entspricht. Auch benutzerdefinierte Eigenschaften, deren Wert zu einem `<line-width>` aufgelöst wird, sind gültig.
- `<repeat-line-width>`
  - : Eine Funktion `repeat()` mit einem {{cssxref("&lt;integer&gt;")}} als erstem Argument und einem oder mehreren `<line-width>`-Werten als weiteren Argumenten. Der `<integer>`-Wert muss mindestens `1` betragen und gibt an, wie oft die Liste der `<line-width>`-Werte wiederholt werden soll.
- `<auto-repeat-line-width>`
  - : Eine Funktion `repeat()` mit `auto` als erstem Argument und einem oder mehreren `<line-width>`-Werten als weiteren Argumenten. Dadurch entsteht eine automatische Wiederholung, die `<line-width>`-Werte den Regeln in Zwischenräumen zuweist, die sonst keine Werte aus den anderen Bestandteilen des Eigenschaftswerts erhalten würden. So wird verhindert, dass die kommagetrennte Liste der Eigenschaft zyklisch wiederholt wird. Die Liste darf höchstens einen `<auto-repeat-line-width>`-Wert enthalten.

Anders als die Eigenschaften für {{cssxref("gap")}} beeinflussen `rule-width`-Eigenschaften das Layout nicht. Sie definieren lediglich die Breite der Regeln. Regeln erscheinen in der Mitte des Zwischenraums und haben weder Einfluss auf dessen Größe noch auf das Boxmodell. Regeln, die breiter als der Zwischenraum sind, werden hinter dem Inhalt gezeichnet.

In diesem Beispiel ist {{cssxref("gap")}} auf `20px` festgelegt. Mit der Eigenschaft `rule-width` definieren wir unterschiedliche Regelbreiten:

```css live-sample___width
div {
  rule-width: 10px, repeat(auto, 20px, 30px), 40px;
}
```

{{EmbedLiveSample("width", "", "300")}}

Die schwarzen Regeln sind im Zwischenraum zentriert. Das ist in den ersten Zeilen- und Spaltenabständen besonders gut zu erkennen: Dort wird die `10px` breite Linie in der Mitte des `20px` breiten Zwischenraums gezeichnet. Regeln werden hinter dem Inhalt gezeichnet. Das fällt besonders auf, wenn `rule-width` größer als `gap` ist und die Linien durch die halbtransparenten Grid-Elemente hindurchscheinen.

Alle Grid-Elemente haben schwarzen Text und einen halbtransparenten, nahezu weißen Hintergrund. Wenn Sie für Ihren Inhalt eine {{cssxref("background-color")}} festlegen, können Sie verhindern, dass über den Zwischenraum hinausragende Regeln Probleme mit der Barrierefreiheit verursachen. Damit Ihre Inhalte barrierefrei sind, muss zwischen dem Hintergrund – sei es die Hintergrundfarbe oder die Regelfarbe – und dem Text oder anderen [wichtigen visuellen Informationen](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) ein [ausreichender Kontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) bestehen.

### Linienstileigenschaften

Die Eigenschaft {{cssxref("column-rule-style")}} legt den Stil der Linien zwischen Spalten fest, {{cssxref("row-rule-style")}} den Stil der Linien zwischen Zeilen. Die Eigenschaft {{cssxref("rule-style")}} setzt sowohl `column-rule-style` als auch `row-rule-style` auf denselben Wert.

Für alle diese Eigenschaften wird eine kommagetrennte Werteliste angegeben, die Folgendes enthalten kann:

- {{cssxref("&lt;line-style&gt;")}}
  - : Ein Schlüsselwort – `solid`, `dashed`, `dotted`, `double`, `groove`, `ridge`, `inset`, `outset`, `none` oder `hidden` –, das den Linienstil der gezeichneten Regel festlegt. Der Standardwert ist `none`.
- `<repeat-line-style>`
  - : Eine Funktion `repeat()` mit einem {{cssxref("&lt;integer&gt;")}} als erstem Argument und einem oder mehreren `<line-style>`-Werten als weiteren Argumenten. Der `<integer>`-Wert muss mindestens `1` betragen und gibt an, wie oft die Liste der `<line-style>`-Werte wiederholt werden soll.
- `<auto-repeat-line-style>`
  - : Eine Funktion `repeat()` mit `auto` als erstem Argument und einem oder mehreren `<line-style>`-Werten als weiteren Argumenten. Dadurch entsteht eine automatische Wiederholung, die `<line-style>`-Werte den Regeln in Zwischenräumen zuweist, die sonst keine Werte aus den anderen Bestandteilen des Eigenschaftswerts erhalten würden. So wird verhindert, dass die kommagetrennte Liste der Eigenschaft zyklisch wiederholt wird. Die Liste darf höchstens einen `<auto-repeat-line-style>`-Wert enthalten.

Wie bei {{cssxref("border")}} ist der Standardwert `none`. Damit eine Regel gezeichnet wird, muss daher ein `<line-style>` mit einem anderen Wert als `hidden` oder `none` deklariert werden.

In diesem Beispiel weisen wir der Eigenschaft `column-rule-style` eine Liste mit sieben Werten zu. Da das Grid mit acht Spalten sieben Spaltenabstände hat, wird jeder Wert genau einmal verwendet. Die Deklaration für `row-rule-style` enthält drei Werte für drei Zeilenregeln; auch hier wird jeder Wert genau einmal verwendet.

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

In den Zeilenzwischenräumen werden nur die Regeln mit `outset` gezeichnet. Ist `<line-style>` auf `none` oder `hidden` gesetzt, wird keine Linie gezeichnet.

### Kurzschreibweisen

Mit den Kurzschreibweisen {{cssxref("row-rule")}}, {{cssxref("column-rule")}} und {{cssxref("rule")}} können Sie Farben, Linienbreiten und Linienstile für eine oder mehrere Linien in einer einzigen Deklaration festlegen.

Für alle diese Kurzschreibweisen wird eine kommagetrennte Werteliste angegeben, die Folgendes enthalten kann:

- `<gap-rule>`
  - : Eine Angabe aus einem, zwei oder drei der Werte {{cssxref("&lt;line-width&gt;")}}, {{cssxref("&lt;line-style&gt;")}} und {{cssxref("&lt;color&gt;")}} in beliebiger Reihenfolge. Wie bei den Werten der Kurzschreibweise {{cssxref("border")}} muss `<line-style>` enthalten sein, damit eine Linie gezeichnet wird, da der Wert andernfalls standardmäßig `none` ist. Der Standardwert für `<line-width>` ist `medium`, der für `<color>` ist `current-color`.

- `<gap-repeat-rule>`
  - : Eine Funktion `repeat()` mit einem {{cssxref("&lt;integer&gt;")}} als erstem Argument und einem oder mehreren `<gap-rule>`-Werten als weiteren Argumenten. Der `<integer>`-Wert muss mindestens `1` betragen und gibt an, wie oft die Liste der `<gap-rule>`-Werte wiederholt werden soll.

- `<auto-repeat-gap-rule>`
  - : Eine Funktion `repeat()` mit `auto` als erstem Argument und einem oder mehreren `<gap-rule>`-Werten als weiteren Argumenten. Dadurch entsteht eine automatische Wiederholung, die `<gap-rule>`-Werte den Regeln in Zwischenräumen zuweist, die sonst keine Werte aus den anderen Bestandteilen des Eigenschaftswerts erhalten würden. So wird verhindert, dass die kommagetrennte Liste der Eigenschaft zyklisch wiederholt wird. Die Liste darf höchstens einen `<auto-repeat-gap-rule>`-Wert enthalten.

Die Deklarationen der Kurzschreibweisen ähneln den Werten ihrer Einzeleigenschaften. Jeder Wert in der kommagetrennten Liste besteht jedoch aus einer durch Leerzeichen getrennten Liste von bis zu drei Komponentenwerten. Die Funktion `repeat()` arbeitet wie bei den Einzeleigenschaften; auch hier ist jeder Wert eine durch Leerzeichen getrennte Liste von Komponenten.

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
    background-color: #ddddffcc;
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

- [Überblick über CSS-Abstände und Eigenschaften zur Gestaltung von Zwischenräumen](/de/docs/Web/CSS/Guides/Gaps/Overview)
- [CSS-Abstände definieren](/de/docs/Web/CSS/Guides/Gaps/Defining_gaps)
- Modul [CSS gaps](/de/docs/Web/CSS/Guides/Gaps)
- Modul [CSS borders and box decorations](/de/docs/Web/CSS/Guides/Borders_and_box_decorations)
