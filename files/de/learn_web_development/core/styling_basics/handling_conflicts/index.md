---
title: Umgang mit Konflikten
slug: Learn_web_development/Core/Styling_basics/Handling_conflicts
l10n:
  sourceCommit: 9cfc2285428932f448a1747e347b1e35a3e0172b
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model", "Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade", "Learn_web_development/Core/Styling_basics")}}

Das Ziel dieser Lektion ist es, Ihr Verständnis einiger der grundlegendsten Konzepte von CSS – die Kaskade, Spezifität und Vererbung – zu entwickeln, die steuern, wie CSS auf HTML angewendet wird und wie Konflikte zwischen Stil-Deklarationen aufgelöst werden.

Während die Bearbeitung dieser Lektion auf den ersten Blick möglicherweise weniger relevant und etwas akademischer wirkt als andere Teile des Kurses, wird das Verständnis dieser Konzepte Sie später vor vielen Problemen bewahren! Wir ermutigen Sie, diesen Abschnitt sorgfältig durchzuarbeiten und zu überprüfen, ob Sie die Konzepte verstehen, bevor Sie fortfahren.

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

CSS steht für **Cascading Style Sheets** (Kaskadierende Stylesheets), und dieses erste Wort _kaskadierend_ ist unglaublich wichtig zu verstehen – die Art, wie die Kaskade funktioniert, ist entscheidend, um CSS zu verstehen.

Irgendwann werden Sie an einem Projekt arbeiten und feststellen, dass ein CSS, von dem Sie denken, dass es auf ein Element angewendet werden sollte, nicht funktioniert. Oft tritt dieses Problem auf, wenn Sie zwei Regeln erstellen, die unterschiedliche Werte derselben Eigenschaft auf dasselbe Element anwenden.

Die [**Kaskade**](/de/docs/Web/CSS/CSS_cascade/Cascade) und das eng damit verbundene Konzept der [**Spezifität**](/de/docs/Web/CSS/CSS_cascade/Specificity) sind Mechanismen, die steuern, welche Regel angewendet wird, wenn ein solcher Konflikt auftritt. Die Deklaration, die Ihr Element stylt, ist möglicherweise nicht die, die Sie erwarten, daher müssen Sie verstehen, wie diese Mechanismen funktionieren.

Ebenso wichtig ist das Konzept der [**Vererbung**](/de/docs/Web/CSS/CSS_cascade/Inheritance), was bedeutet, dass einige CSS-Eigenschaften standardmäßig Werte erben, die auf das übergeordnete Element des aktuellen Elements festgelegt sind, andere nicht. Dies kann ebenfalls unerwartetes Verhalten verursachen.

Lassen Sie uns zunächst einen kurzen Blick auf die Schlüsselkonzepte werfen, mit denen wir es zu tun haben, dann betrachten wir jedes einzeln und sehen, wie sie miteinander und mit Ihrem CSS interagieren. Diese Konzepte mögen kompliziert erscheinen, aber sie werden klarer, je mehr Sie CSS schreiben.

### Kaskade

Stylesheets [**kaskadieren**](/de/docs/Web/CSS/CSS_cascade/Cascade). Auf einer sehr einfachen Ebene bedeutet dies, dass der Ursprung und die Reihenfolge von CSS-Regeln eine Rolle spielen. Wenn zwei Regeln die gleiche Spezifität haben, wird diejenige verwendet, die zuletzt im Stylesheet definiert ist. Es gibt andere Konzepte, die eine Rolle spielen, wie z. B. [Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers), aber diese sind fortgeschrittener und werden hier nicht im Detail behandelt.

Im untenstehenden Beispiel haben wir zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der Inhalt von `<h1>` wird letztendlich blau gefärbt. Dies liegt daran, dass beide Regeln aus derselben Quelle stammen, einen identischen Elementselektor haben und daher die gleiche Spezifität aufweisen, aber die zuletzt in der Quellordnung definierte gewinnt.

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

[Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) ist ein Algorithmus, den der Browser verwendet, um zu entscheiden, welcher Eigenschaftswert auf ein Element angewendet wird. Wenn mehrere Regeln unterschiedliche Selektoren haben, die unterschiedliche Werte für dieselbe Eigenschaft festlegen und dasselbe Element anvisieren, entscheidet die Spezifität, welcher Eigenschaftswert auf das Element angewendet wird. Spezifität ist im Wesentlichen ein Maß dafür, wie spezifisch eine Selektion eines Selektors sein wird:

- Ein Typselektor (Element) ist weniger spezifisch; er wird alle Elemente dieses Typs auswählen, die auf einer Seite erscheinen, daher hat er weniger Gewicht. Pseudo-Element-Selektoren haben dieselbe Spezifität wie reguläre Elementselektoren.
- Ein Klassenselektor ist spezifischer; er wird nur die Elemente auf einer Seite auswählen, die einen bestimmten `class`-Attributwert haben, daher hat er mehr Gewicht. Attributselektoren und Pseudoklassen haben das gleiche Gewicht wie eine Klasse.
- Ein ID-Selektor ist noch spezifischer – er wählt nur ein einzelnes Element mit einem bestimmten `id`-Wert aus. Daher hat er noch mehr Gewicht.

Unten haben wir wieder zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der Inhalt von `<h1>` wird unten rot gefärbt, obwohl die `color: blue`-Deklaration später in der Quellordnung erscheint, weil der Klassenselektor `main-heading` seiner Regel eine höhere Spezifität als der Typselektor `h1` gibt. Die Deklaration mit der höheren Spezifität, die mit dem Klassenselektor definiert ist, wird angewendet.

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

Die Vererbung muss in diesem Zusammenhang ebenfalls verstanden werden – einige CSS-Eigenschaftswerte, die auf übergeordnete Elemente gesetzt sind, werden von ihren untergeordneten Elementen geerbt, andere nicht.

Beispielsweise, wenn Sie eine `color` und `font-family` auf ein Element setzen, werden alle Elemente darin auch mit dieser Farbe und Schriftart gestylt, es sei denn, Ihnen wurden direkt andere Farb- und Schriftwerte zugewiesen.

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

Einige Eigenschaften werden nicht vererbt — zum Beispiel {{cssxref("width")}}. Wenn Sie eine `width` von `50%` auf ein Element setzen, erhalten alle seine Nachkommen nicht eine Breite von `50%` der `width` ihres Elternteils. Wenn das der Fall wäre, wäre CSS sehr frustrierend zu verwenden!

> [!NOTE]
> Auf den MDN-Referenzseiten für CSS-Eigenschaften finden Sie ein technisches Informationsfeld namens "Formelle Definition", das eine Reihe von Datenpunkten über diese Eigenschaft auflistet, einschließlich ob sie vererbt wird oder nicht. Siehe den [formalen Definitionsabschnitt der Farbeigenschaft](/de/docs/Web/CSS/color#formal_definition) als Beispiel.

### Verstehen, wie die Konzepte zusammenarbeiten

Diese drei Konzepte (Kaskade, Spezifität und Vererbung) bestimmen zusammen, welches CSS auf welches Element angewendet wird. In den folgenden Abschnitten werden wir sehen, wie sie zusammenarbeiten. Es kann manchmal etwas kompliziert erscheinen, aber Sie werden sich an sie erinnern, je erfahrener Sie im Schreiben von CSS werden, und Sie können die Details immer nachschlagen, wenn Sie sie vergessen! Auch erfahrene Entwickler erinnern sich nicht an alle Details.

## Verstehen der Vererbung

Wir beginnen mit der Vererbung. Im untenstehenden Beispiel haben wir ein {{HTMLElement("ul")}}-Element mit zwei darin verschachtelten Ebenen ungeordneter Listen. Wir haben der äußeren `<ul>` einen Rahmen, Abstand und eine Schriftfarbe gegeben.

Die Eigenschaft `color` ist eine vererbte Eigenschaft. Daher wird der Wert der `color`-Eigenschaft an die direkten und auch an die indirekten Kinder weitergegeben – die unmittelbaren Kind-`<li>`s und jene in der ersten verschachtelten Liste. Wir haben dann der zweiten verschachtelten Liste die Klasse `special` hinzugefügt und eine andere Farbe darauf angewendet. Diese wird dann durch ihre Kinder vererbt.

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

Eigenschaften wie `width` (wie zuvor erwähnt), `margin`, `padding` und `border` sind nicht vererbte Eigenschaften. Würde ein Rahmen in diesem Listenbeispiel von den Kindern geerbt, würde jede einzelne Liste und jedes Listenelement einen Rahmen erhalten — wahrscheinlich ein Effekt, den wir niemals wollen würden!

Obwohl jede CSS-Eigenschaftsseite auflistet, ob die Eigenschaft vererbt wird oder nicht, können Sie oft intuitiv dasselbe erraten, wenn Sie wissen, welcher Aspekt der Eigenschaftswert stilisieren wird.

### Kontrolle der Vererbung

CSS bietet fünf spezielle universelle Eigenschaftswerte zur Steuerung der Vererbung. Jede CSS-Eigenschaft akzeptiert diese Werte.

- {{cssxref("inherit")}}
  - : Setzt den auf ein ausgewähltes Element angewendeten Eigenschaftswert auf denselben Wert wie den des Elternelements. Effektiv "aktiviert" dies die Vererbung.
- {{cssxref("initial")}}
  - : Setzt den auf ein ausgewähltes Element angewendeten Eigenschaftswert auf den [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) dieser Eigenschaft.
- {{cssxref("revert")}}
  - : Setzt den auf ein ausgewähltes Element angewendeten Eigenschaftswert auf das Standardstyling des Browsers zurück, anstatt die für diese Eigenschaft angewendeten Standards. Dieser Wert verhält sich in vielen Fällen wie {{cssxref("unset")}}.
- {{cssxref("revert-layer")}}
  - : Setzt den auf ein ausgewähltes Element angewendeten Eigenschaftswert auf den in einer vorherigen [Kaskadenschicht](/de/docs/Web/CSS/@layer) festgelegten Wert zurück.
- {{cssxref("unset")}}
  - : Setzt die Eigenschaft auf ihren natürlichen Wert zurück, was bedeutet, dass wenn die Eigenschaft natürlich vererbt wird, sie wie `inherit` wirkt, andernfalls wie `initial`.

> [!NOTE]
> Siehe [Ursprungstypen](/de/docs/Web/CSS/CSS_cascade/Cascade#origin_types) für weitere Informationen zu jedem dieser Werte und wie sie funktionieren.

### Spielen mit Vererbungskontrolleigenschaften

Wir können eine Liste von Links ansehen und untersuchen, wie universelle Werte funktionieren. Das Live-Beispiel unten ermöglicht es Ihnen, mit dem CSS zu spielen und zu sehen, was passiert, wenn Sie Änderungen vornehmen. Mit Code zu spielen ist wirklich der beste Weg, um HTML und CSS besser zu verstehen.

Beispielsweise:

1. Das zweite Listenelement hat die Klasse `my-class-1` angewendet. Diese setzt die Farbe des verschachtelten `<a>`-Elements auf `inherit`. Wenn Sie die Regel entfernen, wie verändert sich dann die Farbe des Links?
2. Verstehen Sie, warum der dritte und vierte Links die Farbe haben, die sie haben? Der dritte Link ist auf `initial` gesetzt, was bedeutet, dass er den Anfangswert der Eigenschaft (in diesem Fall schwarz) und nicht den Standardwert des Browsers für Links verwendet, der blau ist. Der vierte ist auf `unset` gesetzt, was bedeutet, dass der Linktext die Farbe des Elternelements verwendet, grün.
3. Welcher der Links wird die Farbe ändern, wenn Sie eine neue Farbe für das `<a>`-Element definieren — zum Beispiel `a { color: red; }`?
4. Nachdem Sie den nächsten Abschnitt über das Zurücksetzen aller Eigenschaften gelesen haben, kehren Sie zurück und ändern die `color`-Eigenschaft auf `all`. Beachten Sie, wie der zweite Link in einer neuen Zeile und mit einem Aufzählungszeichen versehen ist. Welche Eigenschaften denken Sie, wurden vererbt?

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

Die CSS-Verkürzungseigenschaft [`all`](/de/docs/Web/CSS/all) kann verwendet werden, um einen dieser Vererbungswerte auf (fast) alle Eigenschaften auf einmal anzuwenden. Ihr Wert kann einer der Vererbungswerte (`inherit`, `initial`, `revert`, `revert-layer` oder `unset`) sein. Es ist eine bequeme Möglichkeit, Änderungen an Styles rückgängig zu machen, damit Sie zum bekannten Ausgangspunkt zurückkehren können, bevor Sie mit neuen Änderungen beginnen.

Im untenstehenden Beispiel haben wir zwei Blockzitate. Das erste hat Styling direkt auf das Blockzitat-Element selbst angewendet. Das zweite hat eine Klasse auf das Blockzitat angewendet, die den Wert von `all` auf `unset` setzt.

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

Versuchen Sie, den Wert von `all` auf einige der anderen verfügbaren Werte zu setzen und beobachten Sie, was der Unterschied ist.

## Die Kaskade verstehen

Wir verstehen jetzt, dass die Vererbung der Grund ist, warum ein Absatz, der tief in die Struktur Ihres HTMLs eingebettet ist, dieselbe Farbe wie das auf den Körper angewendete CSS hat. Aus den einführenden Lektionen haben wir ein Verständnis dafür, wie Sie zu irgendeinem Zeitpunkt die auf etwas angewendete CSS ändern können — sei es durch das Zuweisen von CSS zu einem Element oder durch das Erstellen einer Klasse. Jetzt betrachten wir, wie die Kaskade definiert, welche CSS-Regeln angewendet werden, wenn mehr als ein Stilblock dieselbe Eigenschaft, aber mit unterschiedlichen Werten, auf dasselbe Element anwendet.

Es gibt drei Faktoren, die berücksichtigt werden müssen, die hier in aufsteigender Wichtigkeit aufgeführt sind. Spätere überstimmen frühere:

1. **Quellreihenfolge**
2. **Spezifität**
3. **Wichtigkeit**

Wir werden diese betrachten, um zu sehen, wie Browser genau herausfinden, welches CSS angewendet werden sollte.

### Quellreihenfolge

Wir haben bereits gesehen, wie die Quellreihenfolge für die Kaskade von Bedeutung ist. Wenn Sie mehr als eine Regel haben, die alle das genau gleiche Gewicht haben, dann gewinnt die, die zuletzt im CSS steht. Sie können dies als: die Regel, die näher beim Element selbst steht, überschreibt die früheren, bis die letzte gewinnt und das Element stylen darf, denken.

Quellreihenfolge ist nur dann wichtig, wenn das Spezifikationsgewicht der Regeln gleich ist, also schauen wir uns als nächstes die Spezifität an.

### Spezifität

Sie werden oft in einer Situation sein, in der Sie wissen, dass eine Regel später im Stylesheet kommt, aber eine frühere, widersprüchliche Regel angewendet wird. Dies passiert, weil die frühere Regel eine **höhere Spezifität** hat — sie ist spezifischer und wird daher vom Browser als die ausgewählt, die das Element stylen soll.

Wie wir bereits früher in dieser Lektion gesehen haben, hat ein Klassenselektor mehr Gewicht als ein Elementselektor, daher werden die in dem Class-Style-Block definierten Eigenschaften die in dem Element-Style-Block definierten überschreiben.

Ein Punkt, den es hier zu beachten gilt, ist, dass wir, obwohl wir an Selektoren und die Regeln denken, die auf den Text oder die Komponente angewendet werden, die sie auswählen, nicht die gesamte Regel überschrieben wird, sondern nur die Eigenschaften, die an mehreren Stellen deklariert sind.

Dieses Verhalten hilft, Wiederholungen in Ihrem CSS zu vermeiden. Eine gängige Praxis ist es, generische Stile für die Basiselemente zu definieren und dann Klassen für die zu erstellen, die unterschiedlich sind. Zum Beispiel haben wir im untenstehenden Stylesheet generische Stile für Überschriften der Ebene 2 definiert und dann einige Klassen erstellt, die nur einige der Eigenschaften und Werte ändern. Die zuerst definierten Werte werden auf alle Überschriften angewendet, dann werden die spezifischeren Werte auf die Überschriften mit den Klassen angewendet.

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

Lassen Sie uns nun anschauen, wie der Browser die Spezifität berechnet. Wir wissen bereits, dass ein Elementselektor eine niedrige Spezifität hat und von einer Klasse überschrieben werden kann. Im Wesentlichen wird jeder Art von Selektor ein Wert in Punkten zugewiesen, und das Zusammenzählen ergibt das Gewicht dieses bestimmten Selektors, das dann gegen andere potenzielle Übereinstimmungen bewertet werden kann.

Die Menge der Spezifität, die ein Selektor hat, wird mithilfe von drei verschiedenen Werten (oder Komponenten) gemessen, die als ID-, CLASS- und ELEMENT-Spalten in Hunderten, Zehnern bzw. Einern gedacht werden können:

- **IDs**: Ein Punkt in dieser Spalte (100 Punkte) für jeden ID-Selektor innerhalb des gesamten Selektors.
- **Klassen**: Ein Punkt in dieser Spalte (10 Punkte) für jeden Class-Selektor, Attributselektor oder Pseudoklasse innerhalb des gesamten Selektors.
- **Elemente**: Ein Punkt in dieser Spalte (1 Punkt) für jeden Elementselektor oder Pseudo-Element innerhalb des gesamten Selektors.

> [!NOTE]
> Der universelle Selektor ([`*`](/de/docs/Web/CSS/Universal_selectors)), [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators) (`+`, `>`, `~`, ' ') und Spezifikationsanpassungsselektor ([`:where()`](/de/docs/Web/CSS/:where)) haben zusammen mit seinen Parametern keinen Einfluss auf die Spezifität.

Die folgende Tabelle zeigt einige isolierte Beispiele, um Sie in Stimmung zu bringen. Gehen Sie diese Beispiele durch und stellen Sie sicher, dass Sie verstehen, warum sie die Spezifität haben, die wir ihnen gegeben haben. Wir haben Selektoren noch nicht im Detail behandelt, aber Sie können die Details zu jedem Selektor im MDN-[Selektorreferenz](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators) finden.

| Selektor                                  | IDs | Klassen | Elemente | Gesamtspezifität |
| ----------------------------------------- | --- | ------- | -------- | ---------------- |
| `h1`                                      | 0   | 0       | 1        | 0-0-1            |
| `h1 + p::first-letter`                    | 0   | 0       | 3        | 0-0-3            |
| `li > a[href*="en-US"] > .inline-warning` | 0   | 2       | 2        | 0-2-2            |
| `#identifier`                             | 1   | 0       | 0        | 1-0-0            |

#### Detailliertes Spezifitätsbeispiel

Bevor wir weitermachen, lassen Sie uns ein detailliertes Beispiel anschauen. Sie könnten dies im MDN Playground in einem separaten Tab öffnen, damit Sie es einfacher als Referenz heranziehen können, während Sie die Erklärung lesen.

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

Was passiert hier? Zunächst interessieren wir uns nur für die ersten sieben Regeln dieses Beispiels, und wie Sie bemerken werden, haben wir ihre Spezifitätswerte in einem Kommentar vor jede von ihnen eingefügt.

- Die ersten beiden Selektoren konkurrieren um das Styling des `background-color` des Links. Der zweite siegt und macht den Hintergrund blau, da er ein zusätzliches ID-Selektor in der Kette hat: Seine Spezifität ist 2-0-1 gegenüber 1-0-1.
- Selektoren 3 und 4 konkurrieren um das Styling der Text-`color` des Links. Der zweite siegt und macht den Text `white`, obwohl er einen Selektor weniger hat, wird der fehlende Selektor gegen einen Klassenselektor getauscht, der mehr Gewicht hat als ein Elementselektor. Die siegende Spezifität ist 1-1-3 gegenüber 1-0-4.
- Selektoren 5–7 konkurrieren um das Styling des `border` des Links im Schwebezustand. Selektor 6 verliert klar gegen Selektor 5 mit einer Spezifität von 0-2-3 versus 0-2-4; er hat einen Selektor weniger in der Kette. Selektor 7 jedoch schlägt sowohl Selektor 5 als auch 6, da er die gleiche Anzahl an Unterselektoren in der Kette wie Selektor 5 hat, aber ein Element gegen einen Klassenselektor getauscht wurde. So ist die siegende Spezifität 0-3-3 gegenüber 0-2-3 und 0-2-4.

> [!NOTE]
> Jeder Selektortyp hat sein eigenes Spezifitätsniveau, das nicht von Selektoren mit einem niedrigeren Spezifitätsniveau überschrieben werden kann. Zum Beispiel könnte _eine Million_ **Klassen**-Selektoren kombiniert nicht die Spezifität von _einem_ **ID**-Selektor überschreiben.
>
> Der beste Weg, um die Spezifität zu bewerten, besteht darin, die Spezifitätsstufen individuell ausgehend von der höchsten und nur dann auf die niedrige, wenn notwendig, zu überprüfen. Nur wenn es ein Unentschieden zwischen Selektorwerten innerhalb einer Spezifikationsspalte gibt, müssen Sie die nächste Spalte hinunter bewerten; sonst können Sie die niedrigeren Selektoren ignorieren, da sie die höheren Selektoren niemals überschreiben können.

#### IDs versus Klassen

ID-Selektoren haben eine hohe Spezifität. Dies bedeutet, dass Stile, die auf Basis der Übereinstimmung eines ID-Selektors angewendet werden, Stile übersteuern, die auf andere Selektoren basieren, einschließlich Klassen- und Typselektoren. Da eine ID nur einmal auf einer Seite vorkommen kann und aufgrund der hohen Spezifität von ID-Selektoren, ist es vorzuziehen, eine Klasse anstelle einer ID zu einem Element hinzuzufügen.

Wenn die Verwendung der ID der einzige Weg ist, um das Element zu anvisieren — vielleicht weil Sie keinen Zugriff auf das Markup haben und es nicht bearbeiten können —, sollten Sie in Erwägung ziehen, die ID innerhalb eines [Attributselektors](/de/docs/Web/CSS/Attribute_selectors) zu verwenden, wie zum Beispiel `p[id="header"]`.

### Inline-Stile

Inline-Stile, also die Stilerklärung innerhalb eines [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attributs, haben Vorrang vor allen normalen Styles, unabhängig von der Spezifität. Solche Erklärungen haben keine Selektoren, aber ihre Spezifität kann als 1-0-0-0 ausgelegt werden; immer mehr als jedes andere Spezifikationsgewicht, egal wie viele IDs in den Selektoren enthalten sind.

### !important

Es gibt ein spezielles Stück CSS, das Sie verwenden können, um alle oben genannten Berechnungen, sogar Inline-Stile, zu überstimmen - das `!important`-Flag. Sie sollten jedoch sehr vorsichtig sein, wenn Sie es verwenden. Dieses Flag wird verwendet, um ein einzelnes Eigenschaft-Wert-Paar zur spezifischsten Regel zu machen, wodurch die normalen Regeln der Kaskade überschrieben werden, einschließlich normaler Inline-Stile.

> [!NOTE]
> Es ist nützlich zu wissen, dass das `!important`-Flag existiert, damit Sie wissen, was es ist, wenn Sie es im Code anderer Leute finden. **Wir empfehlen jedoch dringend, dass Sie es niemals verwenden, es sei denn, Sie müssen unbedingt.** Das `!important`-Flag ändert die Art und Weise, wie die Kaskade normalerweise funktioniert, was das Debuggen von CSS-Problemen wirklich schwer machen kann, besonders in einem großen Stylesheet.

Schauen Sie sich dieses Beispiel an, bei dem wir zwei Absätze haben, von denen einer eine ID hat.

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

Lassen Sie uns dies durchgehen, um zu sehen, was passiert — versuchen Sie einige der Eigenschaften zu entfernen, um zu sehen, was passiert, wenn Sie Schwierigkeiten haben, es zu verstehen:

1. Sie werden sehen, dass die `{{cssxref("color")}}`- und `{{cssxref("padding")}}`-Werte der dritten Regel angewendet wurden, aber die `{{cssxref("background-color")}}` nicht. Warum? Eigentlich sollten doch alle drei angewendet werden, weil Regeln in der Quellreihenfolge allgemein frühere Regeln überschreiben.
2. Jedoch gewinnen die obenstehenden Regeln, weil Klassenselektoren eine höhere Spezifität als Elementselektoren haben.
3. Beide Elemente haben eine [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) von `better`, aber das 2. hat eine [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) von `winning` ebenso. Da IDs eine _noch höhere_ Spezifität als Klassen haben, sollten sowohl die rote `background-color` als auch der `1px black` `border` auf das 2. Element angewendet werden, während das erste Element die graue Hintergrundfarbe und keinen Rahmen, wie von der Klasse spezifiziert, erhält.
4. Das 2. Element _bekommt_ die rote `background-color`, aber keinen `border`. Warum? Aufgrund des `!important`-Flags in der zweiten Regel. Das Hinzufügen des `!important`-Flags nach `border: none` bedeutet, dass diese Erklärung den `border`-Wert in der vorherigen Regel gewinnt, obwohl der ID-Selektor eine höhere Spezifität hat.

> [!NOTE]
> Der einzige Weg, eine wichtige Erklärung zu überschreiben, ist, eine andere wichtige Erklärung mit der _gleichen Spezifität_ später in der Quellreihenfolge einzuschließen oder eine mit höherer Spezifität.

Eine Situation, in der Sie möglicherweise das `!important`-Flag verwenden müssen, ist, wenn Sie mit einem CMS arbeiten, bei dem Sie die Kern-CSS-Module nicht bearbeiten können, und Sie wirklich einen Inline-Stil oder eine wichtige Erklärung überschreiben möchten, die auf keinen anderen Weg überschrieben werden kann. Aber wirklich, verwenden Sie es nicht, wenn Sie es vermeiden können.

## Die Wirkung des CSS-Ortes

Abschließend ist es wichtig zu beachten, dass die Vorrangstellung einer CSS-Deklaration davon abhängt, in welchem Stylesheet sie angegeben ist.

Es ist möglich, dass Benutzer benutzerdefinierte Stylesheets festlegen, um die Styles des Entwicklers zu überschreiben. Beispielsweise könnte ein sehbehinderter Benutzer die Schriftgröße auf allen von ihm besuchten Webseiten auf die doppelte normale Größe einstellen wollen, um ein einfacheres Lesen zu ermöglichen.

### Reihenfolge der überschreibenden Deklarationen

Konfliktierende Deklarationen werden in der folgenden Reihenfolge angewendet, wobei spätere die früheren überschreiben:

1. Deklarationen in Benutzeragentenstylesheets (z. B. den Standardstilen des Browsers, die verwendet werden, wenn kein anderes Styling festgelegt ist).
2. Normale Deklarationen in Benutzerstylesheets (benutzerdefinierte Stile, die von einem Benutzer festgelegt werden).
3. Normale Deklarationen in Autorstylesheets (dies sind die von uns, den Webentwicklern, festgelegten Styles).
4. Wichtige Deklarationen in Autorstylesheets.
5. Wichtige Deklarationen in Benutzerstylesheets.
6. Wichtige Deklarationen in Benutzeragentenstylesheets.

> [!NOTE]
> Die Vorrangstellung ist für mit `!important` gekennzeichnete Styles invertiert. Es macht Sinn, dass Stylesheets von Webentwicklern Benutzerstylesheets überschreiben, damit das Design wie beabsichtigt beibehalten wird; jedoch haben manchmal Benutzer gute Gründe, die Styles von Webentwicklern zu überschreiben, wie oben erwähnt, und dies kann erreicht werden, indem `!important` in ihren Regeln verwendet wird.

## Zusammenfassung

Wenn Sie den größten Teil dieses Artikels verstanden haben, dann gut gemacht — Sie haben begonnen, sich mit den grundlegenden Mechanismen von CSS vertraut zu machen.

Wenn Sie die Kaskade, die Spezifität und die Vererbung nicht vollständig verstanden haben, dann machen Sie sich keine Sorgen! Das ist definitiv das komplizierteste, was wir bisher im Kurs behandelt haben und ist etwas, das selbst professionelle Webentwickler manchmal schwierig finden. Wir raten Ihnen, zu diesem Artikel ein paar Mal zurückzukehren, während Sie den Kurs fortsetzen, und darüber nachzudenken.

Kommen Sie darauf zurück, wenn Sie anfangen, auf seltsame Probleme mit Styles zu stoßen, die nicht wie erwartet angewendet werden. Es könnte ein Spezifizitätsproblem sein. Als nächstes geben wir Ihnen einige Tests, die Sie verwenden können, um zu überprüfen, wie gut Sie die Informationen, die wir zur Kaskade bereitgestellt haben, verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model", "Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade", "Learn_web_development/Core/Styling_basics")}}
