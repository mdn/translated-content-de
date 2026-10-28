---
title: CSS-Regeln für Zeilen- und Spaltenabstände definieren
short-title: Regeln für Abstände definieren
slug: Web/CSS/Guides/Gaps/Defining_rules
l10n:
  sourceCommit: a4ff34eef85ccb654c5c3af7974caba396e8adcf
---

Beim Erstellen von [Grid-](/de/docs/Web/CSS/Guides/Grid_layout), [Flexbox-](/de/docs/Web/CSS/Guides/Flexible_box_layout) und [Mehrspalten-Layouts](/de/docs/Web/CSS/Guides/Multicol_layout) können Sie dekorative Linien, sogenannte _Regeln_, mittig in den Zwischenräumen zwischen Zeilen und Spalten hinzufügen. Sie können Regeln in jedem Abstand oder nur in ausgewählten Abständen anzeigen und ihre Breiten, Farben und Einzüge vollständig animieren. Dieser Leitfaden erläutert, wie Sie Breite, Farbe und Stil dieser Regeln festlegen.

## Überblick

Das Modul [CSS-Abstände](/de/docs/Web/CSS/Guides/Gaps#properties) definiert mehrere Eigenschaften für das Erscheinungsbild von Linien, die hinter dem Inhalt in den Zwischenräumen eines Grid-, Flexbox- oder Mehrspalten-Containers gezeichnet werden. Diese Linien wirken sich weder auf das [Box-Modell](/de/docs/Web/CSS/Guides/Box_model/Introduction) noch auf das Layout aus. Die Größe der Zwischenräume wird durch die Eigenschaft {{cssxref("gap")}} bestimmt. Ihr Standardwert beträgt bei Mehrspalten-Containern `1em` und in allen anderen Kontexten `0`.

Ist eine Regel breiter als der durch {{cssxref("gap")}} festgelegte Abstand, wird die Linie hinter dem Inhalt gezeichnet, damit sie ihn nicht verdeckt. Achten Sie dennoch auf einen ausreichenden [Farbkontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) zwischen dem Inhalt und sowohl dem Hintergrund als auch der Regel, damit der Inhalt lesbar bleibt.

Weitere Informationen dazu, wie Sie in Layouts mit {{Glossary("gutters", "Zwischenräumen")}} die Abstände zwischen benachbarten Boxen festlegen, finden Sie unter [CSS-Abstände definieren](/de/docs/Web/CSS/Guides/Gaps/Defining_gaps).

Alle Eigenschaften für Regelfarbe, Linienbreite und Linienstil akzeptieren eine durch Kommas getrennte Liste von Werten. So können die Abstände innerhalb eines Containers unterschiedlich gestaltet werden.

```css
rule-color: blue;
rule-width: 10px, 20px;
rule-style: solid, dashed, solid, dotted;
```

Innerhalb der Liste können Sie [die Funktion `repeat()`](#the_repeat_function) verwenden, um eine bestimmte Anzahl von Wiederholungen festzulegen oder automatisch so viele Wiederholungen hinzuzufügen, wie für jede gezeichnete Linie benötigt werden.

```css
rule-color: blue, repeat(3, gray, red);
rule-width: 50px, repeat(10, 10px, 20px), 10px;
rule-style: solid, repeat(auto, dashed, dotted), solid;
```

Die Kurzschreibweisen für Regelfarbe, Linienbreite und Linienstil legen jeweils dieselben Werte für Spalten- und Zeilenregeln fest.

## Die Funktion `repeat()`

Bevor die Eigenschaften für Spalten- und Zeilenregeln vorgestellt werden, ist es wichtig, die Funktion {{cssxref("repeat()")}} zu verstehen.

Mit der Funktion `repeat()` können Sie eine gültige Liste von CSS-Werten wiederholen. Das erste Argument gibt an, wie oft die Liste der als weitere Argumente übergebenen Werte wiederholt wird. So können Farb-, Linienbreiten- oder Linienstilwerte beliebig oft wiederholt werden, ohne sie einzeln aufzuführen.

Die folgenden Deklarationen sind gleichwertig und erzeugen beide eine Liste mit acht Farben:

```css
rule-color: blue, yellow, red, yellow, red, yellow, red, gray;
rule-color: blue, repeat(3, yellow, red), gray;
```

Wenn die Anzahl der Werte die Anzahl der Abstände übersteigt, werden die überschüssigen Werte ignoriert. In einem 3×3-Grid-Container sind beispielsweise die ersten Zeilen- und Spaltenregeln blau und die zweiten gelb. Die übrigen Farbwerte der Liste werden nicht verwendet.

Gibt es mehr Abstände als Werte, wird die Liste wiederholt durchlaufen. In einem 10×10-Grid-Container gibt es in jeder Richtung neun Abstände. In diesem Fall sind die letzten Regeln blau: Den ersten acht Zeilen- und Spaltenregeln wird jeweils die zugehörige Farbe zugewiesen. Danach beginnt die Liste wieder von vorn, sodass die neunten Zeilen- und Spaltenregeln den ersten Wert der Liste erhalten.

Da hier nur drei Zeilen vorhanden sind, werden nur zwei Werte zum Einfärben der Zeilenabstände verwendet. Für die elf Spaltenregeln wird die Liste dagegen wiederholt durchlaufen, um jeder einen `<color>`-Wert zuzuweisen.

```css hidden live-sample___regular
div {
  rule-color: blue, repeat(3, yellow, red), gray;
  grid-template-columns: repeat(12, 1fr);
}
```

{{EmbedLiveSample("regular", "", "190")}}

Der erste Parameter der Funktion `repeat()` ist entweder ein {{cssxref("integer")}} mit dem Wert `1` oder höher oder das Schlüsselwort `auto`. Ist die Zahl ungültig (`0`, negativ, fehlend oder keine Ganzzahl), ist die gesamte Deklaration ungültig und wird ignoriert. Das Schlüsselwort `auto` erzeugt innerhalb der Funktion `repeat()` eine _automatische Wiederholung_, die Werte für Regeln bereitstellt, die sonst keine Werte aus anderen Teilen der Liste erhalten würden. Dadurch wird verhindert, dass die Liste wieder von vorn durchlaufen wird. Ein Eigenschaftswert darf höchstens eine automatische Wiederholung der Form `repeat(auto, <value-list>)` enthalten.

Mit der folgenden Festlegung kommen in einem Grid mit mindestens 3×3 Zellen die Regeln `blue` und `gray` in jeder Richtung jeweils genau einmal vor:

```css
rule-color: blue, repeat(auto, yellow, red), gray;
```

In diesem Fall werden `yellow` und `red` so oft wie nötig wiederholt, um Werte für alle Regeln bereitzustellen, die nicht ausdrücklich durch andere Bestandteile des Eigenschaftswerts festgelegt sind. Die erste Regel ist immer blau. Gibt es mehr als eine Regel, ist die letzte immer grau. Alle übrigen Regeln wechseln zwischen `yellow` und `red`.

```css hidden live-sample___autorepeat
div {
  rule-color: blue, repeat(auto, yellow, red), gray;
  grid-template-columns: repeat(12, 1fr);
}
```

{{EmbedLiveSample("autorepeat", "", "190")}}

## Linieneigenschaften

Jede sichtbare Regel hat eine Farbe, eine Breite und einen Stil. Jeder dieser Werte kann einzeln oder als Liste von Werten angegeben werden.

### Farbeigenschaften

Die Eigenschaft {{cssxref("column-rule-color")}} legt die Farbe der zwischen Spalten gezeichneten Linien fest, {{cssxref("row-rule-color")}} die Farbe der zwischen Zeilen gezeichneten Linien. Die Eigenschaft {{cssxref("rule-color")}} setzt sowohl `column-rule-color` als auch `row-rule-color` auf denselben Wert. Diese Eigenschaften werden jeweils als durch Kommas getrennte Liste von Werten angegeben, die Folgendes enthalten kann:

- {{cssxref("&lt;color&gt;")}}
  - : Ein gültiger `<color>`-Wert, der die Farbe einer Linie festlegt. Der Standardwert ist `currentcolor`.

- `<repeat-line-color>`
  - : Eine Funktion {{cssxref("repeat()")}} mit einem {{cssxref("&lt;integer&gt;")}} als erstem Argument und einem oder mehreren `<color>`-Werten als weiteren Argumenten. Der `<integer>`-Wert muss mindestens `1` betragen und gibt an, wie oft die Liste der `<color>`-Werte wiederholt wird.

- `<auto-repeat-line-color>`
  - : Eine Funktion {{cssxref("repeat()")}} mit `auto` als erstem Argument und einem oder mehreren `<color>`-Werten als weiteren Argumenten. Dadurch entsteht eine automatische Wiederholung, die `<color>`-Werte den Regeln für Abstände zuweist, die sonst keine Werte aus den anderen Bestandteilen des Eigenschaftswerts erhalten würden. So wird verhindert, dass die durch Kommas getrennte Liste der Eigenschaft wieder von vorn durchlaufen wird. Die Liste darf höchstens einen `<auto-repeat-line-color>`-Wert enthalten.

Wenn Sie `auto` innerhalb der Funktion `repeat()` als Teil der Eigenschaft `rule-color` verwenden, können Sie die erste und die letzte Regel dunkel und alle dazwischenliegenden Regeln hell darstellen.

```css live-sample___color
div {
  rule-color: black, repeat(auto, lightgray), black;
}
```

{{EmbedLiveSample("color", "", "300")}}

Wenn Sie die Anzahl der Spalten von `6` auf `4` oder `8` ändern, bleiben die erste und die letzte Regel in jeder Richtung `black` und alle übrigen Regeln `lightgray`.

Die grauen horizontalen Linien werden über den schwarzen vertikalen Linien gezeichnet. Das liegt daran, dass Zeilenregeln standardmäßig über Spaltenregeln gezeichnet werden. Sie können dies ändern, indem Sie die Eigenschaft {{cssxref("rule-overlap")}} statt auf den Standardwert `row-over-column` auf `column-over-row` setzen.

### Breiteneigenschaften

Die Eigenschaft {{cssxref("column-rule-width")}} legt die Breite der zwischen Spalten gezeichneten Linien fest, {{cssxref("row-rule-width")}} die Breite der zwischen Zeilen gezeichneten Linien. Die Eigenschaft {{cssxref("rule-width")}} setzt sowohl `column-rule-width` als auch `row-rule-width` auf dieselben Werte. Diese Eigenschaften werden jeweils als durch Kommas getrennte Liste von Werten angegeben, die Folgendes enthalten kann:

- {{cssxref("&lt;line-width&gt;")}}
  - : Legt die Breite der Linie fest, entweder als expliziten, nicht negativen {{cssxref("&lt;length&gt;")}}-Wert oder mit einem der Schlüsselwörter `thin`, `medium` oder `thick`. Der Standardwert ist `medium`, was in der Regel `3px` entspricht. Auch benutzerdefinierte Eigenschaften, deren Wert als `<line-width>` aufgelöst wird, sind gültig.
- `<repeat-line-width>`
  - : Eine Funktion `repeat()` mit einem {{cssxref("&lt;integer&gt;")}} als erstem Argument und einem oder mehreren `<line-width>`-Werten als weiteren Argumenten. Der `<integer>`-Wert muss mindestens `1` betragen und gibt an, wie oft die Liste der `<line-width>`-Werte wiederholt wird.
- `<auto-repeat-line-width>`
  - : Eine Funktion `repeat()` mit `auto` als erstem Argument und einem oder mehreren `<line-width>`-Werten als weiteren Argumenten. Dadurch entsteht eine automatische Wiederholung, die `<line-width>`-Werte den Regeln für Abstände zuweist, die sonst keine Werte aus den anderen Bestandteilen des Eigenschaftswerts erhalten würden. So wird verhindert, dass die durch Kommas getrennte Liste der Eigenschaft wieder von vorn durchlaufen wird. Die Liste darf höchstens einen `<auto-repeat-line-width>`-Wert enthalten.

Anders als die Eigenschaften für {{cssxref("gap")}} beeinflussen `rule-width`-Eigenschaften das Layout nicht.
Diese Eigenschaften bestimmen nur die Breite der Regeln. Regeln erscheinen mittig im Abstand, verändern dessen Größe nicht und wirken sich nicht auf das Box-Modell aus. Regeln, die breiter als der Abstand sind, werden hinter dem Inhalt gezeichnet.

In diesem Beispiel ist {{cssxref("gap")}} auf `20px` gesetzt. Mit der Eigenschaft `rule-width` legen wir unterschiedliche Regelbreiten fest:

```css live-sample___width
div {
  rule-width: 10px, repeat(auto, 20px, 30px), 40px;
}
```

{{EmbedLiveSample("width", "", "300")}}

Die schwarzen Regeln sind mittig im Abstand positioniert. Besonders deutlich ist das bei den ersten Zeilen- und Spaltenabständen zu sehen, wo die `10px` breite Linie in der Mitte des `20px` breiten Abstands gezeichnet wird. Regeln werden hinter dem Inhalt gezeichnet. Das fällt besonders auf, wenn `rule-width` größer als `gap` ist und die Linien durch die halbtransparenten Grid-Elemente hindurchscheinen.

Alle Grid-Elemente haben schwarzen Text und einen halbtransparenten, nahezu weißen Hintergrund. Wenn Sie für Ihren Inhalt eine {{cssxref("background-color")}} festlegen, können Sie verhindern, dass über den Abstand hinausragende Regeln Barrierefreiheitsprobleme verursachen. Damit Ihre Inhalte barrierefrei sind, muss zwischen dem Hintergrund – sei es die Hintergrundfarbe oder die Regelfarbe – und dem Text oder anderen [wichtigen visuellen Informationen](https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html) ein [ausreichender Kontrast](/de/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background) bestehen.

### Eigenschaften für den Linienstil

Die Eigenschaft {{cssxref("column-rule-style")}} legt den Stil der zwischen Spalten gezeichneten Linien fest, {{cssxref("row-rule-style")}} den Stil der zwischen Zeilen gezeichneten Linien. {{cssxref("rule-style")}} setzt sowohl `column-rule-style` als auch `row-rule-style` auf denselben Wert.

Diese Eigenschaften werden jeweils als durch Kommas getrennte Liste von Werten angegeben, die Folgendes enthalten kann:

- {{cssxref("&lt;line-style&gt;")}}
  - : Ein Schlüsselwort – `solid`, `dashed`, `dotted`, `double`, `groove`, `ridge`, `inset`, `outset`, `none` oder `hidden` –, das den Linienstil der gezeichneten Regel festlegt. Der Standardwert ist `none`.
- `<repeat-line-style>`
  - : Eine Funktion `repeat()` mit einem {{cssxref("&lt;integer&gt;")}} als erstem Argument und einem oder mehreren `<line-style>`-Werten als weiteren Argumenten. Der `<integer>`-Wert muss mindestens `1` betragen und gibt an, wie oft die Liste der `<line-style>`-Werte wiederholt wird.
- `<auto-repeat-line-style>`
  - : Eine Funktion `repeat()` mit `auto` als erstem Argument und einem oder mehreren `<line-style>`-Werten als weiteren Argumenten. Dadurch entsteht eine automatische Wiederholung, die `<line-style>`-Werte den Regeln für Abstände zuweist, die sonst keine Werte aus den anderen Bestandteilen des Eigenschaftswerts erhalten würden. So wird verhindert, dass die durch Kommas getrennte Liste der Eigenschaft wieder von vorn durchlaufen wird. Die Liste darf höchstens einen `<auto-repeat-line-style>`-Wert enthalten.

Wie bei {{cssxref("border")}} ist der Standardwert `none`. Damit eine Regel gezeichnet wird, muss daher ein `<line-style>` mit einem anderen Wert als `hidden` oder `none` deklariert werden.

In diesem Beispiel weisen wir der Eigenschaft `column-rule-style` eine Liste mit sieben Werten zu. Da das Grid mit acht Spalten sieben Spaltenabstände hat, wird jeder Wert genau einmal verwendet. Die Deklaration `row-rule-style` enthält drei Werte für drei Zeilenregeln; auch hier wird jeder Wert genau einmal verwendet.

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

In den Zeilenabständen werden nur die `outset`-Regeln gezeichnet, denn wenn `<line-style>` auf `none` oder `hidden` gesetzt ist, wird keine Linie gezeichnet.

### Kurzschreibweisen

Mit den Kurzschreibweisen {{cssxref("row-rule")}}, {{cssxref("column-rule")}} und {{cssxref("rule")}} können Sie Farben, Linienbreiten und Linienstile für eine oder mehrere Linien in einer einzigen Deklaration festlegen.

Diese Kurzschreibweisen werden jeweils als durch Kommas getrennte Liste von Werten angegeben. Die Liste kann folgende Werte enthalten:

- `<gap-rule>`
  - : Besteht aus einem, zwei oder drei der Werte {{cssxref("&lt;line-width&gt;")}}, {{cssxref("&lt;line-style&gt;")}} und {{cssxref("&lt;color&gt;")}} in beliebiger Reihenfolge. Wie bei der Kurzschreibweise {{cssxref("border")}} muss `<line-style>` angegeben werden, damit eine Linie gezeichnet wird; andernfalls gilt der Standardwert `none`. Der Standardwert für `<line-width>` ist `medium`, der für `<color>` ist `current-color`.

- `<gap-repeat-rule>`
  - : Eine Funktion `repeat()` mit einem {{cssxref("&lt;integer&gt;")}} als erstem Argument und einem oder mehreren `<gap-rule>`-Werten als weiteren Argumenten. Der `<integer>`-Wert muss mindestens `1` betragen und gibt an, wie oft die Liste der `<gap-rule>`-Werte wiederholt wird.

- `<auto-repeat-gap-rule>`
  - : Eine Funktion `repeat()` mit `auto` als erstem Argument und einem oder mehreren `<gap-rule>`-Werten als weiteren Argumenten. Dadurch entsteht eine automatische Wiederholung, die `<gap-rule>`-Werte den Regeln für Abstände zuweist, die sonst keine Werte aus den anderen Bestandteilen des Eigenschaftswerts erhalten würden. So wird verhindert, dass die durch Kommas getrennte Liste der Eigenschaft wieder von vorn durchlaufen wird. Die Liste darf höchstens einen `<auto-repeat-gap-rule>`-Wert enthalten.

Deklarationen mit Kurzschreibweisen ähneln den Werten ihrer Einzeleigenschaften. Jeder Wert in der durch Kommas getrennten Liste besteht jedoch aus bis zu drei durch Leerzeichen getrennten Teilwerten. Die Funktion `repeat()` funktioniert wie bei den Einzeleigenschaften; auch hier besteht jeder Wert aus einer durch Leerzeichen getrennten Liste von Teilwerten.

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

- [Überblick über die Eigenschaften zur Gestaltung von CSS-Abständen](/de/docs/Web/CSS/Guides/Gaps/Overview)
- [CSS-Abstände definieren](/de/docs/Web/CSS/Guides/Gaps/Defining_gaps)
- Modul [CSS-Abstände](/de/docs/Web/CSS/Guides/Gaps)
- Modul [CSS-Rahmen und Box-Dekorationen](/de/docs/Web/CSS/Guides/Borders_and_box_decorations)
