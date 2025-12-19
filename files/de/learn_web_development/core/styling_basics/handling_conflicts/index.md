---
title: Umgang mit Konflikten
slug: Learn_web_development/Core/Styling_basics/Handling_conflicts
l10n:
  sourceCommit: 2b4a2ad5d9ba084a9eaa2f9204102655e7b575c4
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model", "Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade", "Learn_web_development/Core/Styling_basics")}}

Ziel dieser Lektion ist es, Ihr Verständnis für einige der grundlegendsten Konzepte von CSS zu entwickeln: die Kaskade, Spezifität und Vererbung, die steuern, wie CSS auf HTML angewendet wird und wie Konflikte zwischen Stildeklarationen gelöst werden.

Auch wenn die Bearbeitung dieser Lektion zunächst weniger relevant und ein wenig akademischer erscheinen mag als einige andere Teile des Kurses, wird Ihnen das Verständnis dieser Konzepte später viel Ärger ersparen! Wir empfehlen Ihnen, diesen Abschnitt sorgfältig zu bearbeiten und zu überprüfen, ob Sie die Konzepte verstehen, bevor Sie fortfahren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Die grundlegende HTML-Syntax</a
        >), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">CSS-Selektoren</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Verstehen, wie Regeln in CSS in Konflikt geraten können.</li>
          <li>Vererbung.</li>
          <li>Die Kaskade.</li>
          <li>Die Hauptkonzepte, die das Ergebnis von Konflikten bestimmen – Spezifität, Quellreihenfolge und Wichtigkeit.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Konfliktierende Regeln

CSS steht für **Cascading Style Sheets** und das erste Wort _cascading_ ist unglaublich wichtig zu verstehen — die Art und Weise, wie die Kaskade sich verhält, ist entscheidend für das Verständnis von CSS.

Irgendwann werden Sie an einem Projekt arbeiten und feststellen, dass einige CSS-Regeln, die Sie denken, sollten auf ein Element angewendet werden, nicht funktionieren. Oft tritt dieses Problem auf, wenn Sie zwei Regeln erstellen, die unterschiedliche Werte derselben Eigenschaft auf dasselbe Element anwenden.

Die [**Kaskade**](/de/docs/Web/CSS/Guides/Cascade/Introduction) und das eng damit verbundene Konzept der [**Spezifität**](/de/docs/Web/CSS/Guides/Cascade/Specificity) sind Mechanismen, die steuern, welche Regel angewendet wird, wenn ein solcher Konflikt auftritt. Die Deklaration, die Ihr Element stylt, ist möglicherweise nicht die, die Sie erwarten, daher müssen Sie verstehen, wie diese Mechanismen funktionieren.

Auch das Konzept der [**Vererbung**](/de/docs/Web/CSS/Guides/Cascade/Inheritance) ist hier bedeutend, was bedeutet, dass einige CSS-Eigenschaften standardmäßig Werte vom übergeordneten Element erben und andere nicht. Dies kann ebenfalls zu unerwartetem Verhalten führen.

Beginnen wir mit einem kurzen Blick auf die wichtigsten Konzepte, mit denen wir uns befassen, und schauen uns dann jedes einzeln an, um zu sehen, wie sie miteinander und mit Ihrem CSS interagieren. Diese Konzepte können schwer zu verstehen scheinen, aber sie werden klarer, je mehr Sie CSS schreiben.

### Kaskade

Stylesheets [**kaskadieren**](/de/docs/Web/CSS/Guides/Cascade/Introduction). Auf einer sehr einfachen Ebene bedeutet das, dass der Ursprung und die Reihenfolge der CSS-Regeln wichtig sind. Wenn zwei Regeln die gleiche Spezifität haben, wird die zuletzt im Stylesheet definierte Regel verwendet. Es gibt andere Konzepte, die Auswirkungen haben, wie zum Beispiel [Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers), aber diese sind fortgeschrittener und werden hier nicht im Detail behandelt.

Im folgenden Beispiel haben wir zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der Inhalt von `<h1>` wird am Ende blau eingefärbt. Dies liegt daran, dass beide Regeln aus derselben Quelle stammen, einen identischen Elementselektor haben und daher die gleiche Spezifität haben, jedoch die letzte in der Quellreihenfolge gewinnt.

```html live-sample___cascade-simple
<h1>This is my heading.</h1>
```

```css live-sample___cascade-simple
h1 {
  color: red;
}
h1 {
  color: blue;
}
```

{{EmbedLiveSample("cascade-simple")}}

### Spezifität

[Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) ist ein Algorithmus, den der Browser verwendet, um zu entscheiden, welcher Eigenschaftswert auf ein Element angewendet wird. Wenn mehrere Regeln unterschiedliche Selektoren haben, die unterschiedliche Werte für dieselbe Eigenschaft setzen und auf dasselbe Element abzielen, entscheidet die Spezifität über den Eigenschaftswert, der auf das Element angewendet wird. Spezifität ist im Wesentlichen ein Maß dafür, wie spezifisch die Auswahl eines Selektors sein wird:

- Ein Typ- (Element-) Selektor ist weniger spezifisch; er wählt alle Elemente dieses Typs auf einer Seite aus und hat daher weniger Gewicht. Pseudoelement-Selektoren haben die gleiche Spezifität wie reguläre Elementselektoren.
- Ein Klassenselektor ist spezifischer; er wählt nur die Elemente auf einer Seite aus, die einen bestimmten `class`-Attributwert haben, und hat daher mehr Gewicht. Attributselektoren und Pseudoklassen haben das gleiche Gewicht wie eine Klasse.
- Ein ID-Selektor ist sogar noch spezifischer — er wählt nur ein einziges Element mit einem spezifischen `id`-Wert aus und hat daher noch mehr Gewicht.

Unten haben wir wieder zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der `<h1>`-Inhalt wird unten rot gefärbt, obwohl die `color: blue`-Deklaration später in der Quellreihenfolge erscheint, da der Klassenselektor `main-heading` seiner Regel eine höhere Spezifität gibt als der Typselektor `h1`. Die Deklaration mit der höheren Spezifität, die mit dem Klassenselektor definiert wurde, wird angewendet.

```html live-sample___specificity-simple
<h1 class="main-heading">This is my heading.</h1>
```

```css live-sample___specificity-simple
.main-heading {
  color: red;
}

h1 {
  color: blue;
}
```

{{EmbedLiveSample("specificity-simple")}}

Wir werden später den Spezifizitätsalgorithmus erklären.

### Vererbung

Die Vererbung muss auch in diesem Kontext verstanden werden — einige CSS-Eigenschaftswerte, die auf übergeordnete Elemente gesetzt werden, werden von ihren Kindelementen übernommen und einige nicht.

Zum Beispiel, wenn Sie eine `color` und `font-family` auf einem Element setzen, wird jedes Element innerhalb davon auch mit dieser Farbe und dieser Schriftart gestylt, es sei denn, Sie haben direkt andere Farb- und Schriftwerte auf sie angewendet.

```html live-sample___inheritance-simple
<p>
  As the body has been set to have a color of blue this is inherited through the
  descendants.
</p>
<p>
  We can change the color by specifically targeting an element with a different
  style, such as this
  <span>span</span>.
</p>
```

```css live-sample___inheritance-simple
body {
  color: blue;
}

span {
  color: black;
}
```

{{EmbedLiveSample("inheritance-simple")}}

Einige Eigenschaften werden nicht vererbt — zum Beispiel {{cssxref("width")}}. Wenn Sie eine `width` von `50%` auf ein Element setzen, erhalten alle seine Nachkommen keine Breite von `50%` der Breite ihrer Eltern. Wäre dies der Fall, wäre CSS sehr frustrierend zu verwenden!

> [!NOTE]
> Auf den MDN-CSS-Eigenschaftsreferenz-Seiten finden Sie ein technisches Informationsfeld namens "Formale Definition", das eine Reihe von Datenpunkten über diese Eigenschaft auflistet, einschließlich der Frage, ob sie vererbt wird oder nicht. Siehe das [Formale Definition der Farbe Eigenschaften Abschnitt](/de/docs/Web/CSS/Reference/Properties/color#formal_definition) als Beispiel.

### Verständnis, wie die Konzepte zusammenarbeiten

Diese drei Konzepte (Kaskade, Spezifität und Vererbung) bestimmen zusammen, welcher CSS auf welches Element angewendet wird. In den folgenden Abschnitten sehen wir, wie sie zusammenarbeiten. Es kann manchmal etwas kompliziert erscheinen, aber Sie werden anfangen, sich an sie zu erinnern, je mehr Erfahrung Sie mit CSS sammeln, und Sie können jederzeit die Details nachschlagen, wenn Sie sie vergessen! Selbst erfahrene Entwickler merken sich nicht alle Details.

## Verständnis der Vererbung

Beginnen wir mit der Vererbung. Im folgenden Beispiel haben wir ein {{HTMLElement("ul")}}-Element mit zwei Ebenen von verschachtelten ungeordneten Listen. Wir haben der äußeren `<ul>` einen Rahmen, ein Padding und eine Schriftfarbe gegeben.

Die `color`-Eigenschaft ist eine vererbte Eigenschaft. Daher wird der `color`-Eigenschaftswert auf die direkten Kinder und auch auf die indirekten Kinder angewendet — die unmittelbaren `<li>`-Kinder und diejenigen innerhalb der ersten verschachtelten Liste. Wir haben dann die Klasse `special` zur zweiten verschachtelten Liste hinzugefügt und eine andere Farbe darauf angewendet. Diese wird dann an ihre Kinder vererbt.

```html live-sample___inheritance
<ul class="main">
  <li>Item One</li>
  <li>
    Item Two
    <ul>
      <li>2.1</li>
      <li>2.2</li>
    </ul>
  </li>
  <li>
    Item Three
    <ul class="special">
      <li>
        3.1
        <ul>
          <li>3.1.1</li>
          <li>3.1.2</li>
        </ul>
      </li>
      <li>3.2</li>
    </ul>
  </li>
</ul>
```

```css live-sample___inheritance
.main {
  color: rebeccapurple;
  border: 2px solid #cccccc;
  padding: 1em;
}

.special {
  color: black;
  font-weight: bold;
}
```

{{EmbedLiveSample("inheritance", "", "280px")}}

Eigenschaften wie `width` (wie bereits erwähnt), `margin`, `padding` und `border` sind nicht vererbte Eigenschaften. Wenn in diesem Listbeispiel ein Rahmen von Kindern geerbt würden, würde jede einzelne Liste und jedes Listenelement einen Rahmen bekommen — wahrscheinlich kein Effekt, den wir jemals wünschen würden!

Obwohl jede CSS-Eigenschaftsseite angibt, ob die Eigenschaft vererbt wird oder nicht, können Sie oft intuitiv dasselbe erraten, wenn Sie wissen, welchen Aspekt der Eigenschaftswert stylen wird.

### Steuerung der Vererbung

CSS bietet fünf spezielle universelle Eigenschaftswerte zur Steuerung der Vererbung. Jede CSS-Eigenschaft akzeptiert diese Werte.

- {{cssxref("inherit")}}
  - : Setzt den auf ein ausgewähltes Element angewendeten Eigenschaftswert auf den des übergeordneten Elements. Effektiv "schaltet dies die Vererbung ein".
- {{cssxref("initial")}}
  - : Setzt den auf ein ausgewähltes Element angewendeten Eigenschaftswert auf den [Anfangswert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) dieser Eigenschaft.
- {{cssxref("revert")}}
  - : Setzt den auf ein ausgewähltes Element angewendeten Eigenschaftswert auf das Standardstyling des Browsers zurück, anstatt der auf diese Eigenschaft angewendeten Standardeinstellungen. Dieser Wert verhält sich in vielen Fällen wie {{cssxref("unset")}}.
- {{cssxref("revert-layer")}}
  - : Setzt den auf ein ausgewähltes Element angewendeten Eigenschaftswert auf den Wert zurück, der in einer vorherigen [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer) festgelegt wurde.
- {{cssxref("unset")}}
  - : Setzt die Eigenschaft auf ihren natürlichen Wert zurück, was bedeutet, dass, wenn die Eigenschaft natürlich vererbt wird, sie wie `inherit` wirkt, andernfalls wirkt sie wie `initial`.

> [!NOTE]
> Siehe [Ursprungstypen](/de/docs/Web/CSS/Guides/Cascade/Introduction#origin_types) für weitere Informationen zu jedem dieser Werte und wie sie funktionieren.

### Spielen mit Vererbungskontrolleigenschaften

Wir können uns eine Liste von Links ansehen und erkunden, wie universelle Werte funktionieren. Das Live-Beispiel unten ermöglicht es Ihnen, mit dem CSS zu spielen und zu sehen, was passiert, wenn Sie Änderungen vornehmen. Mit dem Code zu spielen ist wirklich der beste Weg, um HTML und CSS besser zu verstehen.

Zum Beispiel:

1. Das zweite Listenelement hat die Klasse `my-class-1` angewendet. Dadurch wird die Farbe des verschachtelten `<a>`-Elements auf `inherit` gesetzt. Wenn Sie die Regel entfernen, wie ändert sich die Farbe des Links?
2. Verstehen Sie, warum die dritte und vierte Links die Farbe haben, die sie haben? Der dritte Link ist auf `initial` gesetzt, was bedeutet, dass er den Anfangswert der Eigenschaft verwendet (in diesem Fall schwarz) und nicht die browserseitigen Standardeinstellungen für Links, die blau sind. Der vierte ist auf `unset` gesetzt, was bedeutet, dass der Linktext die Farbe des Elternelements benutzt, grün.
3. Welche der Links ändern ihre Farbe, wenn Sie eine neue Farbe für das `<a>`-Element definieren — zum Beispiel `a { color: red; }`?
4. Nachdem Sie den nächsten Abschnitt über das Zurücksetzen aller Eigenschaften gelesen haben, kehren Sie zurück und ändern die `color`-Eigenschaft zu `all`. Beachten Sie, wie der zweite Link in einer neuen Zeile und mit einem Punkt versehen ist. Welche Eigenschaften denken Sie, wurden vererbt?

```html live-sample___keywords
<ul>
  <li>Default <a href="#">link</a> color</li>
  <li class="my-class-1">Inherit the <a href="#">link</a> color</li>
  <li class="my-class-2">Reset the <a href="#">link</a> color</li>
  <li class="my-class-3">Unset the <a href="#">link</a> color</li>
</ul>
```

```css live-sample___keywords
body {
  color: green;
}

.my-class-1 a {
  color: inherit;
}

.my-class-2 a {
  color: initial;
}

.my-class-3 a {
  color: unset;
}
```

{{EmbedLiveSample("keywords")}}

### Zurücksetzen aller Eigenschaftswerte

Die CSS-Kurzschreibeeigenschaft {{cssxref("all")}} kann verwendet werden, um einem dieser Vererbungswerte auf (fast) alle Eigenschaften auf einmal anzuwenden. Ihr Wert kann einer der Vererbungswerte sein (`inherit`, `initial`, `revert`, `revert-layer` oder `unset`). Es ist ein praktischer Weg, um Änderungen an Stilen rückgängig zu machen, sodass Sie zu einem bekannten Ausgangspunkt zurückkehren können, bevor Sie mit neuen Änderungen beginnen.

Im folgenden Beispiel haben wir zwei Blockzitate. Das erste hat auf das Blockquote-Element selbst angewendetes Styling. Das zweite hat eine Klasse, die auf das Blockquote angewendet wird, die den Wert von `all` auf `unset` setzt.

```html live-sample___all
<blockquote>
  <p>This blockquote is styled</p>
</blockquote>

<blockquote class="fix-this">
  <p>This blockquote is not styled</p>
</blockquote>
```

```css live-sample___all
blockquote {
  background-color: orange;
  border: 2px solid blue;
}

.fix-this {
  all: unset;
}
```

{{EmbedLiveSample("all")}}

Versuchen Sie, den Wert von `all` auf einige der anderen verfügbaren Werte zu setzen und beobachten Sie den Unterschied.

## Verständnis der Kaskade

Wir verstehen nun, dass die Vererbung der Grund ist, warum ein tief in der Struktur Ihres HTML eingebetteter Absatz die gleiche Farbe wie das CSS auf dem Körper angewendet hat. Aus den einführenden Lektionen haben wir ein Verständnis dafür, wie man das angewendete CSS an jeder Stelle im Dokument ändert — entweder durch Zuweisen von CSS zu einem Element oder durch Erstellen einer Klasse. Wir werden nun sehen, wie die Kaskade definiert, welche CSS-Regeln angewendet werden, wenn mehr als ein Stilblock dieselbe Eigenschaft, aber mit unterschiedlichen Werten, auf dasselbe Element anwenden.

Es gibt drei Faktoren zu berücksichtigen, aufgelistet hier in zunehmender Wichtigkeit. Die späteren heben die früheren auf:

1. **Quellreihenfolge**
2. **Spezifität**
3. **Wichtigkeit**

Wir werden uns diese ansehen, um zu sehen, wie Browser genau herausfinden, welches CSS angewendet werden soll.

### Quellreihenfolge

Wir haben bereits gesehen, wie die Quellreihenfolge für die Kaskade von Bedeutung ist. Wenn Sie mehr als eine Regel haben, die alle genau dasselbe Gewicht haben, dann gilt diejenige, die zuletzt im CSS kommt. Sie können dies als: Die Regel, die näher beim Element selbst ist, überschreibt die vorherigen, bis die letzte gewinnt und das Element stylen darf.

Die Quellreihenfolge ist nur von Bedeutung, wenn das Spezifizitätsgewicht der Regeln dasselbe ist, also schauen wir uns als nächstes die Spezifizität an.

### Spezifität

Sie werden oft auf eine Situation stoßen, bei der Sie wissen, dass eine Regel später im Stylesheet kommt, aber eine frühere, widersprüchliche Regel angewendet wird. Dies geschieht, weil die frühere Regel eine **höhere Spezifität** hat — sie ist spezifischer und wird daher vom Browser als diejenige gewählt, die das Element stylt.

Wie wir bereits früher in dieser Lektion gesehen haben, hat ein Klassenselektor mehr Gewicht als ein Elementselektor, sodass die in dem Klassenstilblock definierten Eigenschaften die in dem Elementstilblock definierten Eigenschaften überschreiben.

Hier ist zu beachten, dass, obwohl wir über Selektoren und die Regeln nachdenken, die auf den Text oder die Komponente angewendet werden, die sie auswählen, es nicht die gesamte Regel ist, die überschrieben wird, sondern nur die Eigenschaften, die an mehreren Stellen deklariert sind.

Dieses Verhalten hilft, Wiederholungen in Ihrem CSS zu vermeiden. Es ist eine häufige Praxis, generische Stile für die grundlegenden Elemente zu definieren und dann Klassen für diejenigen zu erstellen, die unterschiedlich sind. Zum Beispiel haben wir im untenstehenden Stylesheet generische Stile für Überschriften der Ebene 2 definiert und dann einige Klassen erstellt, die nur einige der Eigenschaften und Werte ändern. Die zunächst definierten Werte werden auf alle Überschriften angewendet, dann werden die spezifischeren Werte auf die Überschriften mit den Klassen angewendet.

```html live-sample___mixing-rules
<h2>Heading with no class</h2>
<h2 class="small">Heading with class of small</h2>
<h2 class="bright">Heading with class of bright</h2>
```

```css live-sample___mixing-rules
h2 {
  font-size: 2em;
  color: black;
  font-family: "Georgia", serif;
}

.small {
  font-size: 1em;
}

.bright {
  color: rebeccapurple;
}
```

{{EmbedLiveSample("mixing-rules", "", "240px")}}

Lassen Sie uns nun sehen, wie der Browser die Spezifität berechnet. Wir wissen bereits, dass ein Elementselektor niedrige Spezifität hat und von einer Klasse überschrieben werden kann. Im Wesentlichen wird ein Punktwert verschiedenen Arten von Selektoren zugewiesen, und das Hinzufügen dieser ergibt das Gewicht dieses bestimmten Selektors, das dann gegen andere potenzielle Übereinstimmungen ausgewertet werden kann.

Die Menge an Spezifität, die ein Selektor hat, wird mit drei verschiedenen Werten (oder Komponenten) gemessen, die als ID, KLASS und ELEMENT-Spalten betrachtet werden können, die jeweils Hunderte, Zehner und Einsen wert sind:

- **IDs**: Punkte vergeben in dieser Spalte (100 Punkte) für jeden ID-Selektor, der sich innerhalb des gesamten Selektors befindet.
- **Klassen**: Punkte vergeben in dieser Spalte (10 Punkte) für jeden Klassenselektor, Attributselektor oder Pseudoklasse, die sich innerhalb des gesamten Selektors befindet.
- **Elemente**: Punkte vergeben in dieser Spalte (1 Punkt) für jeden Elementselektor oder Pseudoelement, der sich innerhalb des gesamten Selektors befindet.

> [!NOTE]
> Der universelle Selektor ([`*`](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors)), [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators) (`+`, `>`, `~`, ' '), und Spezifitätsanpassungsselektor ({{cssxref(":where()")}}) zusammen mit seinen Parametern haben keinen Einfluss auf die Spezifizität.

Die folgende Tabelle zeigt einige isolierte Beispiele, um Sie in "Stimmung" zu bringen. Versuchen Sie, diese durchzugehen, und stellen Sie sicher, dass Sie verstehen, warum sie die Spezifizität haben, die wir ihnen gegeben haben. Sie können Details zu jedem Selektor im MDN [Selektorreferenz](/de/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators) finden.

| Selektor                                  | IDs | Klassen | Elemente | Gesamtspezifität |
| ----------------------------------------- | --- | ------- | -------- | ---------------- |
| `h1`                                      | 0   | 0       | 1        | 0-0-1            |
| `h1 + p::first-letter`                    | 0   | 0       | 3        | 0-0-3            |
| `li > a[href*="en-US"] > .inline-warning` | 0   | 2       | 2        | 0-2-2            |
| `#identifier`                             | 1   | 0       | 0        | 1-0-0            |

#### Ein detailliertes Beispiel zur Spezifizität

Bevor wir weitermachen, lassen Sie uns ein Beispiel in Aktion betrachten. Vielleicht möchten Sie dies im MDN Playground in einem separaten Tab öffnen, damit Sie es beim Lesen der Erklärung leicht abgleichen können.

```html live-sample___specificity-boxes
<div class="container" id="outer">
  <div class="container" id="inner">
    <ul>
      <li class="nav"><a href="#">One</a></li>
      <li class="nav"><a href="#">Two</a></li>
    </ul>
  </div>
</div>
```

```css live-sample___specificity-boxes
/* 1. specificity: 1-0-1 */
#outer a {
  background-color: red;
}

/* 2. specificity: 2-0-1 */
#outer #inner a {
  background-color: blue;
}

/* 3. specificity: 1-0-4 */
#outer div ul li a {
  color: yellow;
}

/* 4. specificity: 1-1-3 */
#outer div ul .nav a {
  color: white;
}

/* 5. specificity: 0-2-4 */
div div li:nth-child(2) a:hover {
  border: 10px solid black;
}

/* 6. specificity: 0-2-3 */
div li:nth-child(2) a:hover {
  border: 10px dashed black;
}

/* 7. specificity: 0-3-3 */
div div .nav:nth-child(2) a:hover {
  border: 10px double black;
}

a {
  display: inline-block;
  line-height: 40px;
  font-size: 20px;
  text-decoration: none;
  text-align: center;
  width: 200px;
  margin-bottom: 10px;
}

ul {
  padding: 0;
}

li {
  list-style-type: none;
}
```

{{EmbedLiveSample("specificity-boxes", "100%", "170")}}

Was passiert hier genau? Zunächst einmal interessieren uns nur die ersten sieben Regeln dieses Beispiels, und wie Sie bemerken werden, haben wir ihre Spezifizitätswerte in einem Kommentar vor jeder einzelnen angegeben.

- Die ersten beiden Selektoren konkurrieren um das Styling des `background-color` des Links. Der zweite gewinnt und macht den Hintergrund `blau`, weil er in der Kette einen zusätzlichen ID-Selektor hat: Seine Spezifizität ist 2-0-1 gegenüber 1-0-1.
- Selektoren 3 und 4 konkurrieren um das Styling der Textfarbe des Links. Der zweite gewinnt und macht den Text `weiß`, weil er zwar einen Elementselektor weniger hat, aber dafür einen Klassenselektor, der mehr Gewicht hat als ein Elementselektor. Die gewinnende Spezifizität ist 1-1-3 gegenüber 1-0-4.
- Selektoren 5–7 konkurrieren um das Styling des `border` des Links, wenn er "hovered" ist. Selektor 6 verliert klar gegen Selektor 5 mit einer Spezifizität von 0-2-3 gegenüber 0-2-4; er hat einen Elementselektor weniger in der Kette. Selektor 7 allerdings schlägt sowohl Selektor 5 als auch 6, weil er genauso viele Unterselektoren in der Kette wie Selektor 5 hat, aber ein Element durch einen Klassenselektor ersetzt wurde. Die gewinnende Spezifizität ist 0-3-3 gegenüber 0-2-3 und 0-2-4.

> [!NOTE]
> Jeder Selektortyp hat seine eigene Ebene an Spezifizität, die nicht von Selektoren mit niedrigerer Spezifizität überschrieben werden kann. Beispielsweise könnten _eine Million_ **Klassen**-Selektoren zusammengenommen nicht die Spezifizität von _einem_ **ID**-Selektor überschreiben.
>
> Der beste Weg, Spezifität zu bewerten, ist, die Spezifizitätsstufen individuell nach Punkten zu bewerten, angefangen von der höchsten und nur bei Bedarf zur niedrigeren weitergehen. Nur wenn ein Gleichstand zwischen Selektoren innerhalb einer Spezifikationsspalte besteht, müssen Sie die nächste Spalte nach unten bewerten; andernfalls können Sie die Selektoren mit niedrigerer Spezifizität ignorieren, da sie niemals die Selektoren mit höherer Spezifizität überschreiben können.

#### IDs versus Klassen

ID-Selektoren haben eine hohe Spezifizität. Das bedeutet, dass auf Basis eines ID-Selektors angewendete Stile Stile überfordern, die auf anderen Selektoren basieren, einschließlich Klassen- und Typselektoren. Da ein ID nur einmal auf einer Seite vorkommen kann und wegen der hohen Spezifizität von ID-Selektoren, ist es vorzuziehen, einem Element eine Klasse hinzuzufügen, anstatt eine ID.

Falls die Verwendung der ID der einzige Weg ist, um das Element zu zielen — vielleicht weil Sie keinen Zugriff auf das Markup haben und es nicht bearbeiten können — sollten Sie die ID innerhalb eines [Attributselektors](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) verwenden, zum Beispiel: `p[id="header"]`.

### Inline-Stile

Inline-Stile, das heißt die Stil-Deklaration innerhalb eines [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) Attributs, haben Vorrang über alle normalen Stile, unabhängig von der Spezifizität. Solche Deklarationen haben keine Selektoren, aber ihre Spezifizität kann als 1-0-0-0 betrachtet werden; immer mehr als jedes andere Spezifizitätsgewicht, egal wie viele IDs in den Selektoren sind.

### !important

Es gibt ein spezielles Stück CSS, das Sie verwenden können, um alle oben genannten Berechnungen zu überstimmen, sogar Inline-Stile — das `!important`-Flag. Sie sollten es jedoch mit Vorsicht verwenden. Dieses Flag wird verwendet, um ein individuelles Eigenschaft-Wert-Paar zur spezifischsten Regel zu machen und damit die normalen Regeln der Kaskade, einschließlich normaler Inline-Stile, zu übersteuern.

> [!NOTE]
> Es ist nützlich zu wissen, dass das `!important`-Flag existiert, damit Sie wissen, was es ist, wenn Sie es im Code anderer Leute finden. **Wir empfehlen jedoch dringend, es niemals zu verwenden, es sei denn, es ist absolut notwendig.** Das `!important`-Flag ändert die Funktionsweise der Kaskade normalerweise, daher kann es das Debuggen von CSS-Problemen sehr schwierig machen, besonders in einem großen Stylesheet.

Sehen Sie sich dieses Beispiel an, bei dem wir zwei Absätze haben, einer davon hat eine ID.

```html live-sample___important
<p class="better">This is a paragraph.</p>
<p class="better" id="winning">One selector to rule them all!</p>
```

```css live-sample___important
#winning {
  background-color: red;
  border: 1px solid black;
}

.better {
  background-color: gray;
  border: none !important;
}

p {
  background-color: blue;
  color: white;
  padding: 5px;
}
```

{{EmbedLiveSample("important")}}

Lassen Sie uns dies durchgehen, um zu sehen, was passiert — versuchen Sie, einige der Eigenschaften zu entfernen, um zu sehen, was passiert, wenn es schwer zu verstehen ist:

1. Sie werden sehen, dass die `color`- und `padding`-Werte der dritten Regel angewendet wurden, aber nicht die `background-color`. Warum? Wirklich sollten alle drei sicher angewendet werden, denn Regeln, die später in der Quellreihenfolge stehen, überschreiben in der Regel frühere Regeln.
2. Die oben genannten Regeln gewinnen jedoch, weil Klassenselektoren eine höhere Spezifizität als Elementselektoren haben.
3. Beide Elemente haben eine [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) von `better`, aber das zweite hat eine [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) von `winning` ebenfalls. Da IDs eine _noch höhere_ Spezifizität als Klassen haben, sollten die `rote` `background-color` und die `1px black`-`border` auf das zweite Element angewendet werden, wobei das erste Element die graue Hintergrundfarbe und keine Umrandung erhält, wie von der Klasse angegeben.
4. Das zweite Element _bekommt_ die `rote` `background-color`, aber keine `border`. Warum? Wegen des `!important`-Flags in der zweiten Regel. Durch Hinzufügen des `!important`-Flags nach `border: none` bedeutet das, dass diese Deklaration den `border`-Wert in der vorherigen Regel gewinnen wird, obwohl der ID-Selektor eine höhere Spezifizität hat.

> [!NOTE]
> Der einzige Weg, eine wichtige Deklaration zu übersteuern, besteht darin, eine andere wichtige Deklaration mit der _gleichen Spezifizität_ später in der Quellreihenfolge einzubeziehen, oder eine mit höherer Spezifizität.

Eine Situation, in der Sie möglicherweise das `!important`-Flag verwenden müssen, ist, wenn Sie an einem CMS arbeiten, bei dem Sie die Kern-CSS-Module nicht bearbeiten können, und Sie möchten wirklich einen Inline-Stil oder eine wichtige Deklaration überschreiben, die auf keine andere Weise überschrieben werden kann. Aber wirklich, verwenden Sie es nicht, wenn Sie es vermeiden können.

## Die Wirkung des CSS-Standorts

Schließlich ist es wichtig zu beachten, dass die Vorrangstellung einer CSS-Deklaration davon abhängt, in welchem Stylesheet sie spezifiziert ist.

Es ist möglich, dass Benutzer benutzerdefinierte Stylesheets festlegen, um die Stile von Entwicklern zu überschreiben. Beispielsweise möchte ein sehbehinderter Benutzer vielleicht die Schriftgröße auf allen von ihm besuchten Webseiten auf das Doppelte der normalen Größe festlegen, um das Lesen zu erleichtern.

### Reihenfolge der überschreibenden Deklarationen

Widersprüchliche Deklarationen werden in der folgenden Reihenfolge angewendet, wobei später eingefügte die früher eingefügten übersteuern:

1. Deklarationen in Benutzer-Agent-Stylesheets (z.B. die Standardstile des Browsers, die verwendet werden, wenn keine anderen Stile festgelegt sind).
2. Normale Deklarationen in Benutzer-Stylesheets (vom Benutzer festgelegte benutzerdefinierte Stile).
3. Normale Deklarationen in Autoren-Stylesheets (dies sind die Stile, die wir, die Webentwickler, festlegen).
4. Wichtige Deklarationen in Autoren-Stylesheets.
5. Wichtige Deklarationen in Benutzer-Stylesheets.
6. Wichtige Deklarationen in Benutzer-Agent-Stylesheets.

> [!NOTE]
> Die Reihenfolge der Vorrangstellung wird für Styles, die mit `!important` versehen sind, umgekehrt. Es macht Sinn, dass die Stylesheets der Webentwickler die Benutzer-Stylesheets überschreiben, damit das Design wie vorgesehen beibehalten werden kann; jedoch haben Benutzer manchmal gute Gründe, die Ihres der Webentwickler zu überschreiben, wie oben erwähnt, und dies kann erreicht werden, indem `!important` in ihren Regeln verwendet wird.

## Zusammenfassung

Wenn Sie die meisten Teile dieses Artikels verstanden haben, dann gut gemacht — Sie haben begonnen, sich mit den grundlegenden Mechaniken von CSS vertraut zu machen.

Wenn Sie die Kaskade, Spezifizität und Vererbung nicht vollständig verstanden haben, machen Sie sich keine Sorgen! Dies ist definitiv das komplizierteste Thema, das wir bisher im Kurs behandelt haben, und es ist etwas, das sogar professionelle Webentwickler manchmal schwierig finden. Wir empfehlen Ihnen, mehrmals zu diesem Artikel zurückzukehren, während Sie den Kurs fortsetzen, und immer wieder darüber nachzudenken.

Schauen Sie hier noch einmal nach, wenn Sie anfangen, auf seltsame Probleme zu stoßen, bei denen Stile nicht wie erwartet angewendet werden. Es könnte ein Spezifizitätsproblem sein. Als Nächstes geben wir Ihnen einige Tests, die Sie verwenden können, um zu überprüfen, wie gut Sie die Informationen, die wir über die Kaskade bereitgestellt haben, verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model", "Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade", "Learn_web_development/Core/Styling_basics")}}
