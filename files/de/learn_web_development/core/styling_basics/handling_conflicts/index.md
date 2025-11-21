---
title: Umgang mit Konflikten
slug: Learn_web_development/Core/Styling_basics/Handling_conflicts
l10n:
  sourceCommit: d960f8ef4d759a353a3a4cba25df393ecdc1cb10
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model", "Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade", "Learn_web_development/Core/Styling_basics")}}

Das Ziel dieser Lektion ist es, Ihr Verständnis für einige der grundlegendsten Konzepte von CSS zu entwickeln – die Kaskade, Spezifität und Vererbung –, die steuern, wie CSS auf HTML angewendet wird und wie Konflikte zwischen Stil-Deklarationen gelöst werden.

Während die Arbeit durch diese Lektion zunächst weniger relevant und etwas akademischer erscheinen mag als andere Teile des Kurses, wird Ihnen das Verständnis dieser Konzepte später viel Kummer ersparen! Wir ermutigen Sie, diesen Abschnitt sorgfältig zu bearbeiten und sicherzustellen, dass Sie die Konzepte verstehen, bevor Sie fortfahren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">CSS-Selektoren</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
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

## Konfliktregelungen

CSS steht für **Cascading Style Sheets**, und dieses erste Wort _Cascading_ ist unglaublich wichtig zu verstehen – das Verhalten der Kaskade ist der Schlüssel zum Verständnis von CSS.

Irgendwann werden Sie an einem Projekt arbeiten und feststellen, dass einige CSS, die Ihrer Meinung nach auf ein Element angewendet werden sollten, nicht funktionieren. Dieses Problem tritt häufig auf, wenn Sie zwei Regeln erstellen, die unterschiedliche Werte derselben Eigenschaft auf dasselbe Element anwenden.

Die [**Kaskade**](/de/docs/Web/CSS/Guides/Cascade/Introduction) und das eng verwandte Konzept der [**Spezifität**](/de/docs/Web/CSS/Guides/Cascade/Specificity) sind Mechanismen, die steuern, welche Regel angewendet wird, wenn ein solcher Konflikt auftritt. Die Deklaration, die Ihr Element stilisiert, ist möglicherweise nicht die, die Sie erwarten, daher müssen Sie verstehen, wie diese Mechanismen funktionieren.

Auch das Konzept der [**Vererbung**](/de/docs/Web/CSS/Guides/Cascade/Inheritance) ist hier von Bedeutung, was bedeutet, dass einige CSS-Eigenschaften standardmäßig Werte vom übergeordneten Element des aktuellen Elements erben und manche nicht. Dies kann auch unerwartetes Verhalten verursachen.

Lassen Sie uns schnell einen Blick auf die wichtigen Konzepte werfen, mit denen wir uns beschäftigen. Dann schauen wir uns jedes nacheinander an und sehen, wie sie miteinander und mit Ihrem CSS interagieren. Diese Konzepte scheinen schwierig zu verstehen, aber sie werden klarer, je mehr Sie CSS schreiben.

### Kaskade

Stylesheets [**kaskadieren**](/de/docs/Web/CSS/Guides/Cascade/Introduction). Auf einer sehr einfachen Ebene bedeutet dies, dass die Herkunft und die Reihenfolge der CSS-Regeln wichtig sind. Wenn zwei Regeln dieselbe Spezifität haben, wird die verwendet, die zuletzt im Stylesheet definiert ist. Es gibt andere Konzepte, die sich auswirken, wie etwa [Cascade-Layers](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers), aber diese sind fortgeschrittener und werden hier nicht im Detail behandelt.

Im folgenden Beispiel haben wir zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der `<h1>`-Inhalt wird letztlich blau gefärbt. Dies liegt daran, dass beide Regeln aus derselben Quelle stammen, einen identischen Elementselektor haben und daher die gleiche Spezifität tragen, aber die letzte in der Quellreihenfolge gewinnt.

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

[Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) ist ein Algorithmus, den der Browser verwendet, um zu entscheiden, welcher Eigenschaftswert auf ein Element angewendet wird. Wenn mehrere Regeln unterschiedliche Selektoren haben, die unterschiedliche Werte für dieselbe Eigenschaft festlegen und auf dasselbe Element abzielen, entscheidet die Spezifität darüber, welcher Eigenschaftswert auf das Element angewendet wird. Spezifität ist im Grunde ein Maß dafür, wie spezifisch die Auswahl eines Selektors sein wird:

- Ein Typ- (Element-)Selektor ist weniger spezifisch; er wählt alle Elemente dieses Typs auf einer Seite aus, daher hat er weniger Gewicht. Pseudoelementselektoren haben die gleiche Spezifität wie reguläre Elementselektoren.
- Ein Klassenselektor ist spezifischer; er wählt nur die Elemente auf einer Seite aus, die einen bestimmten `class`-Attributwert haben, daher hat er mehr Gewicht. Attributselektoren und Pseudoklassen haben die gleiche Gewichtung wie eine Klasse.
- Ein ID-Selektor ist noch spezifischer – er wählt nur ein einziges Element mit einem bestimmten `id`-Wert aus. Daher hat er noch mehr Gewicht.

Unten haben wir erneut zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der `<h1>`-Inhalt wird unten rot gefärbt, obwohl die `color: blue`-Deklaration später in der Quellreihenfolge erscheint, weil der Klassenselektor `main-heading` seiner Regel eine höhere Spezifität als der Typselektor `h1` verleiht. Die Deklaration mit der höheren Spezifität, die den Klassenselektor verwendet, wird angewendet.

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

Wir werden den Spezifitätsalgorithmus später genauer erklären.

### Vererbung

Vererbung muss auch in diesem Kontext verstanden werden — einige CSS-Eigenschaftswerte, die auf übergeordnete Elemente gesetzt sind, werden von ihren Kind-Elementen geerbt, andere nicht.

Wenn Sie beispielsweise eine `color` und `font-family` auf ein Element setzen, wird jedes darin enthaltene Element ebenfalls mit dieser Farbe und dieser Schriftart gestylt, es sei denn, Sie haben direkt andere Farb- und Schriftartenwerte auf sie angewendet.

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

Einige Eigenschaften werden nicht vererbt – zum Beispiel {{cssxref("width")}}. Wenn Sie eine `width` von `50%` auf ein Element setzen, erhalten nicht alle Nachfolgerelemente eine Breite von `50%` der Breite ihres übergeordneten Elements. Wenn dies der Fall wäre, wäre CSS sehr frustrierend zu verwenden!

> [!NOTE]
> Auf den Referenzseiten der MDN CSS-Eigenschaften finden Sie ein technisches Informationsfeld namens "Formale Definition", das eine Reihe von Datenpunkten über diese Eigenschaft auflistet, einschließlich ob diese eigenschaft vererbt wird oder nicht. Siehe den [Abschnitt Formale Definition der Farbeigenschaft](/de/docs/Web/CSS/Reference/Properties/color#formal_definition) als Beispiel.

### Verständnis, wie die Konzepte zusammenwirken

Diese drei Konzepte (Kaskade, Spezifität und Vererbung) gemeinsam steuern, welche CSS auf welches Element angewendet wird. In den folgenden Abschnitten werden wir sehen, wie sie zusammenarbeiten. Es kann manchmal etwas kompliziert erscheinen, aber Sie werden sich daran erinnern, wenn Sie sich mehr mit CSS auseinandersetzen, und Sie können die Details immer nachschlagen, wenn Sie sie vergessen! Selbst erfahrene Entwickler erinnern sich nicht an alle Details.

## Verständnis der Vererbung

Beginnen wir mit der Vererbung. Im untenstehenden Beispiel haben wir ein {{HTMLElement("ul")}}-Element mit zwei verschachtelten Ebenen von ungeordneten Listen. Wir haben der äußeren `<ul>`-Liste eine Umrandung, einen Innenabstand und eine Schriftfarbe zugewiesen.

Die `color`-Eigenschaft ist eine vererbte Eigenschaft. Daher wird der Wert der `color`-Eigenschaft sowohl auf die direkten als auch auf die indirekten Kinder angewendet — auf die unmittelbaren `<li>`-Kinder sowie auf die innerhalb der ersten verschachtelten Liste. Dann haben wir der zweiten verschachtelten Liste die Klasse `special` hinzugefügt und eine andere Farbe darauf angewendet. Diese wird dann durch ihre Kinder vererbt.

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

Eigenschaften wie `width` (wie zuvor erwähnt), `margin`, `padding` und `border` sind keine vererbten Eigenschaften. Wenn in diesem Listenbeispiel eine Umrandung von den Kindern geerbt würde, würde jede einzelne Liste und Listenpunkt eine Umrandung erhalten — wahrscheinlich ein Effekt, den wir nie wollen würden!

Obwohl jede CSS-Eigenschaftsseite angibt, ob die Eigenschaft vererbt wird oder nicht, können Sie dies oft intuitiv erraten, wenn Sie wissen, welchen Aspekt die Eigenschaftsstilierung beeinflusst.

### Kontrolle der Vererbung

CSS bietet fünf spezielle universelle Eigenschaftswerte zur Steuerung der Vererbung. Jede CSS-Eigenschaft akzeptiert diese Werte.

- {{cssxref("inherit")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf den gleichen Wert wie den des übergeordneten Elements. Effektiv wird damit die "Vererbung eingeschaltet".
- {{cssxref("initial")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf den [Initialwert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) dieser Eigenschaft.
- {{cssxref("revert")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf das Standardstyling des Browsers anstatt der Standards, die auf diese Eigenschaft angewendet werden. Dieser Wert wirkt in vielen Fällen wie {{cssxref("unset")}}.
- {{cssxref("revert-layer")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf den Wert, der in einer vorherigen [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer) festgelegt wurde.
- {{cssxref("unset")}}
  - : Setzt die Eigenschaft auf ihren natürlichen Wert zurück, was bedeutet, dass sie bei natürlich vererbten Eigenschaftswerten wie `inherit` wirkt, andernfalls wie `initial`.

> [!NOTE]
> Weitere Informationen zu jedem dieser Werte und wie sie funktionieren, finden Sie unter [Ursprungsarten](/de/docs/Web/CSS/Guides/Cascade/Introduction#origin_types).

### Spielen mit Vererbungskontrolleigenschaften

Wir können uns eine Liste von Links ansehen und erkunden, wie universelle Werte funktionieren. Das untenstehende Live-Beispiel erlaubt es Ihnen, mit dem CSS zu spielen und zu sehen, was passiert, wenn Sie Änderungen vornehmen. Mit Code zu spielen ist wirklich die beste Art, HTML und CSS besser zu verstehen.

Zum Beispiel:

1. Das zweite Listenelement hat die Klasse `my-class-1` angewendet. Dies setzt die Farbe des verschachtelten `<a>`-Elements auf `inherit`. Wenn Sie die Regel entfernen, wie ändert sich die Farbe des Links?
2. Verstehen Sie, warum der dritte und der vierte Link die Farbe haben, die sie haben? Der dritte Link ist auf `initial` gesetzt, was bedeutet, dass er den Initialwert der Eigenschaft verwendet (in diesem Fall schwarz) und nicht den Standard des Browsers für Links, der blau ist. Der vierte ist auf `unset` gesetzt, was bedeutet, dass der Linktext die Farbe des übergeordneten Elements, grün, verwendet.
3. Welche der Links ändert die Farbe, wenn Sie eine neue Farbe für das `<a>`-Element definieren — zum Beispiel `a { color: red; }`?
4. Nachdem Sie den nächsten Abschnitt über das Zurücksetzen aller Eigenschaften gelesen haben, kehren Sie zurück und ändern Sie die `color`-Eigenschaft auf `all`. Beachten Sie, wie der zweite Link in einer neuen Zeile und mit einem Punkt versehen ist. Welche Eigenschaften denken Sie, wurden geerbt?

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

Die CSS-Kurzschreibeigenschaft [`all`](/de/docs/Web/CSS/Reference/Properties/all) kann verwendet werden, um einen dieser Vererbungswerte auf (fast) alle Eigenschaften gleichzeitig anzuwenden. Ihr Wert kann einer der Vererbungswerte (`inherit`, `initial`, `revert`, `revert-layer`, oder `unset`) sein. Es ist eine praktische Möglichkeit, Änderungen an Stilen rückgängig zu machen, sodass Sie zu einem bekannten Ausgangspunkt zurückkehren können, bevor Sie neue Änderungen vornehmen.

Im untenstehenden Beispiel haben wir zwei Zitate. Das erste hat Styling, das auf das Blockquoten-Element selbst angewendet wird. Das zweite hat eine Klasse, die auf die Blockquote angewendet wurde, die den Wert von `all` auf `unset` setzt.

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

Versuchen Sie, den Wert von `all` auf einige der anderen verfügbaren Werte zu setzen, und beobachten Sie den Unterschied.

## Verständnis der Kaskade

Wir verstehen jetzt, dass Vererbung der Grund ist, warum ein tief in der Struktur Ihres HTML-Tiefs verschachtelter Absatz die gleiche Farbe hat wie das CSS, das auf den Body angewendet wird. Aus den Einführungskursen haben wir ein Verständnis dafür, wie wir das CSS ändern können, das zu jedem Punkt im Dokument angewendet wird – sei es durch Zuweisung von CSS zu einem Element oder durch Erstellen einer Klasse. Wir werden nun sehen, wie die Kaskade definiert, welche CSS-Regeln angewendet werden, wenn mehr als ein Stilblock dieselbe Eigenschaft, aber mit unterschiedlichen Werten, auf dasselbe Element anwenden.

Es gibt drei zu berücksichtigende Faktoren, hier in aufsteigender Wichtigkeit aufgeführt. Spätere überschreiben frühere:

1. **Quellreihenfolge**
2. **Spezifität**
3. **Wichtigkeit**

Wir werden uns diese ansehen, um zu verstehen, wie Browser genau herausfinden, welches CSS angewendet werden sollte.

### Quellreihenfolge

Wir haben bereits gesehen, wie die Quellreihenfolge für die Kaskade wichtig ist. Wenn Sie mehr als eine Regel haben, die genau gleich gewichtet ist, gewinnt diejenige, die zuletzt im CSS steht. Sie können dies so betrachten: Die Regel, die näher am Element selbst ist, überschreibt die früheren, bis die letzte gewinnt und das Element stilisiert.

Die Quellreihenfolge spielt nur eine Rolle, wenn die Spezifizitätsgewichtung der Regeln gleich ist, also schauen wir uns als nächstes die Spezifizität an.

### Spezifität

Sie werden oft auf eine Situation stoßen, in der Sie wissen, dass eine Regel später im Stylesheet steht, aber eine frühere, widersprüchliche Regel angewendet wird. Dies passiert, weil die frühere Regel eine **höhere Spezifität** hat – sie ist spezifischer und wird daher vom Browser als diejenige ausgewählt, die das Element stilisieren soll.

Wie wir bereits früher in dieser Lektion gesehen haben, hat ein Klassenselektor mehr Gewicht als ein Elementselektor, sodass die in den Klassenstilblock definierten Eigenschaften diejenigen im Elementstilblock überschreiben.

Etwas, das hier zu beachten ist, ist, dass obwohl wir über Selektoren und die Regeln sprechen, die auf den Text oder die Komponente angewendet werden, die sie auswählen, nicht die gesamte Regel überschrieben wird, sondern nur die Eigenschaften, die an mehreren Stellen deklariert sind.

Dieses Verhalten hilft dabei, Wiederholungen in Ihrem CSS zu vermeiden. Eine gängige Praxis besteht darin, generische Stile für die grundlegenden Elemente zu definieren und dann Klassen für diejenigen zu erstellen, die anders sind. Im folgenden Stylesheet haben wir beispielsweise generische Stile für Überschriften der Ebene 2 definiert und dann einige Klassen erstellt, die nur einige der Eigenschaften und Werte ändern. Die zunächst definierten Werte werden auf alle Überschriften angewendet, dann werden die spezifischeren Werte auf die Überschriften mit den Klassen angewendet.

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

Lassen Sie uns nun einen Blick darauf werfen, wie der Browser die Spezifität berechnet. Wir wissen bereits, dass ein Elementselektor eine niedrige Spezifität hat und von einer Klasse überschrieben werden kann. Im Wesentlichen wird verschiedenen Arten von Selektoren ein Punktewert zugewiesen, und das Hinzufügen dieser ergibt das Gewicht dieses bestimmten Selektors, das dann gegen andere potenzielle Übereinstimmungen bewertet werden kann.

Die Menge an Spezifität, die ein Selektor hat, wird mithilfe von drei verschiedenen Werten (oder Komponenten) gemessen, die man sich als ID-, Klassen- und Elemente-Spalten vorstellen kann, die jeweils Hunderte, Zehner und Einer wert sind:

- **IDs**: Erhalten Sie einen Punkt in dieser Spalte (100 Punkte) für jeden ID-Selektor, der im Gesamtselktor enthalten ist.
- **Klassen**: Erhalten Sie einen Punkt in dieser Spalte (10 Punkte) für jeden Klassenselektor, Attributselektor oder Pseudoklasse, die im Gesamtselktor enthalten ist.
- **Elemente**: Erhalten Sie einen Punkt in dieser Spalte (1 Punkt) für jeden Elementselektor oder Pseudoelement, das im Gesamtselktor enthalten ist.

> [!NOTE]
> Der universelle Selektor ([`*`](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors)), [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators) (`+`, `>`, `~`, ' '), und der Selector zur Spezifizitätsanpassung ([`:where()`](/de/docs/Web/CSS/Reference/Selectors/:where)) zusammen mit seinen Parametern haben keinen Einfluss auf die Spezifizität.

Die folgende Tabelle zeigt einige isolierte Beispiele, um Sie in die richtige Stimmung zu bringen. Versuchen Sie, diese durchzugehen, und stellen Sie sicher, dass Sie verstehen, warum sie die Spezifizität haben, die wir ihnen gegeben haben. Sie können Details zu jedem Selektor im MDN [Selektoren-Referenz](/de/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators) finden.

| Selektor                                  | Identifikatoren | Klassen | Elemente | Gesamte Spezifizität |
| ----------------------------------------- | --------------- | ------- | -------- | -------------------- |
| `h1`                                      | 0               | 0       | 1        | 0-0-1                |
| `h1 + p::first-letter`                    | 0               | 0       | 3        | 0-0-3                |
| `li > a[href*="en-US"] > .inline-warning` | 0               | 2       | 2        | 0-2-2                |
| `#identifier`                             | 1               | 0       | 0        | 1-0-0                |

#### Spezifitätsbeispiel im Detail

Bevor wir fortfahren, schauen wir uns ein Beispiel in Aktion an. Sie möchten dies vielleicht im MDN Playground in einem separaten Tab öffnen, damit Sie es beim Lesen der Erklärung leicht nachschlagen können.

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

Was passiert hier? Zunächst einmal interessieren uns nur die ersten sieben Regeln dieses Beispiels. Wie Sie sehen, haben wir die Spezifizitätswerte in einem Kommentar vor jeder Regel eingefügt.

- Die beiden ersten Selektoren konkurrieren um das Styling des `background-color` der Links. Der zweite gewinnt und macht den Hintergrund blau, weil er eine zusätzliche ID-Selektor in der Kette hat: seine Spezifizität ist 2-0-1 vs. 1-0-1.
- Selektoren 3 und 4 konkurrieren um das Styling des Text-`color` des Links. Der zweite gewinnt und färbt den Text weiß, obwohl er einen weniger Elementselektor hat, da der fehlende Selektor durch einen Klassenselektor ersetzt wurde, der mehr Gewicht hat als ein Elementselektor. Die gewinnende Spezifizität ist 1-1-3 vs. 1-0-4.
- Selektoren 5–7 konkurrieren um das Styling der `border` des Links, wenn er geh

overed wird. Selektor 6 verliert klar gegen Selektor 5 mit einer Spezifizität von 0-2-3 vs. 0-2-4; er hat einen weniger Elementselektor in der Kette. Selektor 7 jedoch schlägt sowohl Selektor 5 als auch 6, weil er die gleiche Anzahl von Subselektoren in der Kette wie Selektor 5 hat, aber ein Element wurde durch einen Klassenselektor ersetzt. Somit ist die gewinnende Spezifizität 0-3-3 vs. 0-2-3 und 0-2-4.

> [!NOTE]
> Jeder Selektortyp hat seine eigene Stufe der Spezifizität, die nicht von Selektoren mit einer niedrigeren Spezifizitätsstufe überschrieben werden kann. Beispielsweise könnten _eine Million_ **Klassenselektoren** zusammen nicht die Spezifizität von _einem_ **ID-Selektor** überschreiben.
>
> Der beste Weg zur Bewertung von Spezifizität besteht darin, die Spezifizitätsstufen einzeln von der höchsten aus zu bewerten und nur bei Gleichstand zwischen den Selektorwerten in einer Spezifizitätsspalte müssen Sie die nächste niedrigere Spalte bewerten; andernfalls können Sie die Selektoren mit niedrigerer Spezifizität ignorieren, da sie die Selektoren mit höherer Spezifizität nie überschreiben können.

#### IDs im Vergleich zu Klassen

ID-Selektoren haben eine hohe Spezifizität. Das bedeutet, dass Stile, die durch Übereinstimmung mit einem ID-Selektor angewendet werden, Stile, die auf anderen Selektoren beruhen, einschließlich Klassen- und Typselektoren, übersteuern. Da eine ID nur einmal auf einer Seite vorkommen kann und weil ID-Selektoren eine hohe Spezifizität haben, ist es vorzuziehen, einer Klasse einem Element hinzuzufügen, anstatt einer ID.

Falls die ID die einzige Möglichkeit ist, das Element anzusprechen – vielleicht weil Sie keinen Zugriff auf das Markup haben und es nicht bearbeiten können –, überlegen Sie, die ID innerhalb eines [Attributselectors](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors), wie `p[id="header"]`, zu verwenden.

### Inline-Stile

Inline-Stile, das heißt die Stil-Deklarationen innerhalb eines [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attributs, haben Vorrang vor allen normalen Stilen, egal wie die Spezifizität aussieht. Solche Deklarationen haben keine Selektoren, aber ihre Spezifizität kann als 1-0-0-0 angesehen werden; immer mehr als jede andere Spezifikationsgewicht, egal wie viele IDs in den Selektoren sind.

### !important

Es gibt ein spezielles Stück CSS, das Sie verwenden können, um alle obigen Berechnungen zu überschreiben, sogar Inline-Stile - das `!important`-Flag. Sie sollten jedoch sehr vorsichtig bei der Verwendung sein. Dieses Flag wird verwendet, um ein individuelles Eigenschaftswert-Paar zur spezifischsten Regel zu machen, wodurch die normalen Regeln der Kaskade, einschließlich normaler Inline-Stile, überschrieben werden.

> [!NOTE]
> Es ist nützlich zu wissen, dass das `!important`-Flag existiert, damit Sie wissen, was es ist, wenn Sie es im Code anderer Leute sehen. **Wir empfehlen jedoch dringend, es nicht zu verwenden, es sei denn, Sie müssen es unbedingt.** Das `!important`-Flag ändert die Art und Weise, wie die Kaskade normalerweise funktioniert, sodass es das Debuggen von CSS-Problemen wirklich erschwert, insbesondere in einem großen Stylesheet.

Schauen Sie sich dieses Beispiel an, in dem wir zwei Absätze haben, von denen einer eine ID hat.

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

Lassen Sie uns das durchgehen, um zu sehen, was passiert — versuchen Sie, einige der Eigenschaften zu entfernen, um zu sehen, was passiert, wenn Sie verstehen wollen, warum:

1. Sie werden sehen, dass der dritte Regelwert für {{cssxref("color")}} und {{cssxref("padding")}} angewendet wurde, aber {{cssxref("background-color")}} nicht. Warum? Alle drei sollten wirklich angewendet werden, weil Regeln, die später in der Quellreihenfolge stehen, in der Regel frühere Regeln überschreiben.
2. Die oben genannten Regeln gewinnen jedoch, da Klassenselektoren eine höhere Spezifizität als Elementselektoren haben.
3. Beide Elemente haben eine [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) von `better`, aber das 2. hat eine [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) von `winning` auch. Da IDs eine _noch höhere_ Spezifizität als Klassen haben, sollten die `red` `background-color` und der `1px black` `border` beide auf das 2. Element angewendet werden, wobei das erste Element die graue Hintergrundfarbe und keinen Rand erhält, wie es von der Klasse festgelegt wurde.
4. Das 2. Element _erhält_ den `red` `background-color`, aber keinen `border`. Warum? Weil des `!important`-Flags in der zweiten Regel. Das Hinzufügen des `!important`-Flags nach `border: none` bedeutet, dass diese Deklaration den `border`-Wert in der vorherigen Regel gewinnt, auch wenn der ID-Selektor eine höhere Spezifizität hat.

> [!NOTE]
> Die einzige Möglichkeit, eine wichtige Deklaration zu überschreiben, besteht darin, eine andere wichtige Deklaration mit der _gleichen Spezifizität_ später in der Quellreihenfolge oder eine mit höherer Spezifizität zu verwenden.

Eine Situation, in der Sie möglicherweise das `!important`-Flag verwenden müssen, ist, wenn Sie an einem CMS arbeiten, bei dem Sie die Kerngrafikmodule nicht bearbeiten können, und Sie wirklich eine Inline-Stil oder eine wichtige Deklaration überschreiben möchten, die auf keine andere Weise überschrieben werden kann. Aber verwenden Sie es wirklich nicht, wenn Sie es vermeiden können.

## Die Auswirkung des Standorts von CSS

Schließlich ist es wichtig zu beachten, dass der Vorrang einer CSS-Deklaration davon abhängt, in welchem Stylesheet sie festgelegt ist.

Es ist möglich für Benutzer, eigene Stylesheets zu setzen, um die Stile der Entwickler zu überschreiben. Beispielsweise möchte ein sehbehinderter Benutzer möglicherweise die Schriftgröße auf allen von ihnen besuchten Webseiten verdoppeln, um das Lesen zu erleichtern.

### Reihenfolge der Überschreibungserklärungen

Konfliktäre Deklarationen werden in folgender Reihenfolge angewendet, wobei spätere frühere überschreiben:

1. Deklarationen in User-Agent-Stylesheets (z. B. die Standardstile des Browsers, die verwendet werden, wenn keine anderen Styles festgelegt sind).
2. Normale Deklarationen in Benutzer-Stilen (benutzerdefinierte Stile, die von einem Benutzer festgelegt werden).
3. Normale Deklarationen in Autoren-Stilen (das sind die Stile, die wir als Webentwickler festlegen).
4. Wichtige Deklarationen in Autoren-Stilen.
5. Wichtige Deklarationen in Benutzer-Stilen.
6. Wichtige Deklarationen in User-Agent-Stylesheets.

> [!NOTE]
> Die Reihenfolge der Priorität ist für mit `!important` gekennzeichneten Styles invertiert. Es ist sinnvoll, dass die Stylesheets der Webentwickler die Benutzer-Stylesheets überschreiben, damit das Design wie beabsichtigt beibehalten werden kann; jedoch haben Benutzer manchmal gute Gründe, die Stile der Webentwickler zu überschreiben, wie oben erwähnt, und dies kann erreicht werden, indem `!important` in ihren Regeln verwendet wird.

## Zusammenfassung

Wenn Sie den größten Teil dieses Artikels verstanden haben, dann herzlichen Glückwünsch — Sie haben begonnen, sich mit den grundlegenden Mechanismen von CSS vertraut zu machen.

Wenn Sie Kaskade, Spezifität und Vererbung nicht vollständig verstanden haben, dann machen Sie sich keine Sorgen! Dies ist definitiv das komplizierteste Thema, das wir bisher im Kurs behandelt haben, und etwas, das selbst professionelle Webentwickler manchmal schwierig finden. Wir empfehlen Ihnen, diesen Artikel mehrmals zu lesen, während Sie den Kurs fortsetzen, und immer wieder darüber nachzudenken.

Schauen Sie hier wieder, wenn Sie auf seltsame Probleme stoßen, bei denen Stile nicht wie erwartet angewendet werden. Es könnte ein Spezifitätsproblem sein. Als nächstes werden wir Ihnen einige Tests geben, mit denen Sie prüfen können, wie gut Sie die Informationen zur Kaskade verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model", "Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade", "Learn_web_development/Core/Styling_basics")}}
