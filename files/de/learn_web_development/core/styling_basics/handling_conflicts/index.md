---
title: Umgang mit Konflikten
slug: Learn_web_development/Core/Styling_basics/Handling_conflicts
l10n:
  sourceCommit: 5fcdc3bf55405b922199bd19f35245bd4bb9a971
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics")}}

Ziel dieser Lektion ist es, Ihr Verständnis für einige der grundlegendsten Konzepte von CSS — den Cascade, die Spezifität und Vererbung — zu entwickeln, die bestimmen, wie CSS auf HTML angewendet wird und wie Konflikte zwischen Stil-Deklarationen gelöst werden.

Auch wenn diese Lektion zunächst weniger relevant und etwas akademischer erscheinen mag als andere Teile des Kurses, wird Ihnen das Verständnis dieser Konzepte später viel Ärger ersparen! Wir ermutigen Sie, diesen Abschnitt sorgfältig durchzuarbeiten und sicherzustellen, dass Sie die Konzepte verstehen, bevor Sie weitermachen.

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
          <li>Die Hauptkonzepte, die das Ergebnis von Konflikten bestimmen — Spezifität, Quellreihenfolge und Wichtigkeit.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## In Konflikt stehende Regeln

CSS steht für **Cascading Style Sheets**, und das erste Wort _cascading_ ist unglaublich wichtig zu verstehen — das Verhalten der Kaskade ist der Schlüssel zum Verständnis von CSS.

Irgendwann werden Sie an einem Projekt arbeiten und feststellen, dass das CSS, das Sie dachten, auf ein Element angewendet werden sollte, nicht funktioniert. Häufig entsteht das Problem, weil Sie zwei Regeln erstellen, die unterschiedliche Werte derselben Eigenschaft auf dasselbe Element anwenden. [**Kaskade**](/de/docs/Web/CSS/Cascade) und das eng verwandte Konzept der [**Spezifität**](/de/docs/Web/CSS/Specificity) sind Mechanismen, die bestimmen, welche Regel angewendet wird, wenn ein solcher Konflikt besteht. Die Regel, die Ihr Element stylt, ist möglicherweise nicht die, die Sie erwarten, also müssen Sie verstehen, wie diese Mechanismen funktionieren.

Ebenso bedeutend ist hier das Konzept der [**Vererbung**](/de/docs/Web/CSS/Inheritance), was bedeutet, dass einige CSS-Eigenschaften standardmäßig die Werte des übergeordneten Elements erben, während andere dies nicht tun. Auch dies kann zu unerwartetem Verhalten führen.

Lassen Sie uns zunächst einen kurzen Blick auf die wichtigsten Dinge werfen, mit denen wir es zu tun haben, und dann werden wir uns jedes einzelne genauer ansehen und sehen, wie sie miteinander und mit Ihrem CSS interagieren. Diese können wie eine schwierige Reihe von Konzepten erscheinen, die es zu verstehen gilt. Mit zunehmender Übung im Schreiben von CSS wird Ihnen klarer, wie es funktioniert.

### Kaskade

Stylesheets [**kaskadieren**](/de/docs/Web/CSS/Cascade) — auf sehr einfachem Niveau bedeutet dies, dass die Herkunft und die Reihenfolge der CSS-Regeln von Bedeutung sind. Wenn zwei Regeln die gleiche Spezifität haben, wird die zuletzt im Stylesheet definierte Regel verwendet. Es gibt andere Konzepte, die Auswirkungen haben, wie z.B. [Kaskadierungsschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers), aber diese sind fortgeschrittener und wir werden hier nicht im Detail darauf eingehen.

Im folgenden Beispiel haben wir zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der `<h1>`-Inhalt wird schließlich blau gefärbt. Dies liegt daran, dass beide Regeln aus derselben Quelle stammen, einen identischen Elementselektor haben und daher die gleiche Spezifität tragen, aber die letzte in der Quellreihenfolge gewinnt.

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

[Spezifität](/de/docs/Web/CSS/Specificity) ist der Algorithmus, den der Browser verwendet, um zu entscheiden, welcher Eigenschaftswert auf ein Element angewendet wird. Wenn mehrere Stilblöcke unterschiedliche Selektoren haben, die dieselbe Eigenschaft mit unterschiedlichen Werten konfigurieren und dasselbe Element anvisieren, entscheidet die Spezifität über den Eigenschaftswert, der auf das Element angewendet wird. Spezifität ist im Grunde ein Maß dafür, wie spezifisch die Auswahl eines Selektors sein wird:

- Ein Elementselektor ist weniger spezifisch; er wird alle Elemente dieses Typs auf einer Seite auswählen, daher hat er weniger Gewicht. Pseudoelementselektoren haben die gleiche Spezifität wie normale Elementselektoren.
- Ein Klassenselektor ist spezifischer; er wird nur die Elemente auf einer Seite auswählen, die einen bestimmten `class`-Attributwert haben, daher hat er mehr Gewicht. Attributselektoren und Pseudoklassen haben dasselbe Gewicht wie eine Klasse.

Unten haben wir erneut zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der `<h1>`-Inhalt wird unten rot gefärbt, weil der Klassenselektor `main-heading` seiner Regel eine höhere Spezifität verleiht. Auch wenn die Regel mit dem `<h1>`-Elementselektor weiter unten in der Quellreihenfolge erscheint, wird die mit der höheren Spezifität, definiert durch den Klassenselektor, angewendet.

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

Wir werden den Spezifitätsalgorithmus später erläutern.

### Vererbung

Vererbung muss ebenfalls in diesem Zusammenhang verstanden werden — einige CSS-Eigenschaftswerte, die auf übergeordnete Elemente gesetzt sind, werden von ihren untergeordneten Elementen geerbt, andere nicht.

Beispielsweise, wenn Sie eine `color` und `font-family` auf ein Element setzen, wird jedes Element innerhalb dieses Elements ebenfalls mit dieser Farbe und dieser Schriftart gestylt, es sei denn, Sie haben ihnen direkt andere Farb- und Schriftartwerte zugewiesen.

```html live-sample___inheritance-simple
<p>
  As the body has been set to have a color of blue this is inherited through the
  descendants.
</p>
<p>
  We can change the color by targeting the element with a selector, such as this
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

Einige Eigenschaften werden nicht vererbt — zum Beispiel, wenn Sie eine {{cssxref("width")}} von 50% auf ein Element setzen, erhalten nicht alle seine Nachkommen eine Breite von 50% der Breite ihres übergeordneten Elements. Wenn dies der Fall wäre, wäre CSS sehr frustrierend zu verwenden!

> [!NOTE]
> Auf den MDN-CSS-Eigenschaftsreferenzseiten finden Sie eine technische Informationsbox namens "Formale Definition", die eine Reihe von Datenpunkten über diese Eigenschaft auflistet, einschließlich der Frage, ob sie geerbt wird oder nicht. Siehe den Abschnitt [Formale Definition der Eigenschaft color](/de/docs/Web/CSS/color#formal_definition) als Beispiel.

### Verständnis der Zusammenarbeit der Konzepte

Diese drei Konzepte (Kaskade, Spezifität und Vererbung) bestimmen zusammen, welches CSS auf welches Element angewendet wird. In den folgenden Abschnitten werden wir sehen, wie sie zusammenarbeiten. Es kann manchmal etwas kompliziert erscheinen, aber Sie werden anfangen, sich an sie zu erinnern, wenn Sie mehr Erfahrung mit CSS sammeln, und Sie können die Details jederzeit nachschlagen, wenn Sie sie vergessen! Auch erfahrene Entwickler erinnern sich nicht an alle Details.

## Vererbung verstehen

Wir beginnen mit der Vererbung. Im folgenden Beispiel haben wir ein {{HTMLElement("ul")}}-Element mit zwei Ebenen von geschachtelten ungeordneten Listen. Wir haben der äußeren `<ul>` einen Rahmen, Padding und Schriftfarbe zugewiesen.

Die `color`-Eigenschaft ist eine geerbte Eigenschaft. Daher wird der `color`-Eigenschaftswert auf die direkten Kinder und auch auf die indirekten Kinder angewendet — die unmittelbaren Kinder `<li>`s und diejenigen innerhalb der ersten geschachtelten Liste. Wir haben dann die Klasse `special` zur zweiten geschachtelten Liste hinzugefügt und eine andere Farbe darauf angewendet. Diese wird dann durch ihre Kinder hindurch vererbt.

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
  border: 2px solid #ccc;
  padding: 1em;
}

.special {
  color: black;
  font-weight: bold;
}
```

{{EmbedLiveSample("inheritance", "", "280px")}}

Eigenschaften wie `width` (wie oben erwähnt), `margin`, `padding` und `border` sind keine geerbten Eigenschaften. Wenn ein Rahmen in diesem Listenbeispiel von den Kindern geerbt würde, würde jede einzelne Liste und Listeneintrag einen Rahmen erhalten — wahrscheinlich kein Effekt, den wir jemals wollen würden!

Obwohl auf jeder CSS-Eigenschaftsseite aufgelistet wird, ob die Eigenschaft vererbt wird oder nicht, können Sie oft intuitiv erraten, ob Sie wissen, welchen Aspekt der Eigenschaftswert stylen wird.

### Vererbung steuern

CSS bietet fünf spezielle universelle Eigenschaftswerte zur Steuerung der Vererbung. Jede CSS-Eigenschaft akzeptiert diese Werte.

- {{cssxref("inherit")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf denselben Wert wie der des übergeordneten Elements. Effektiv "schaltet dies die Vererbung ein".
- {{cssxref("initial")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf den [initialen Wert](/de/docs/Web/CSS/initial_value) der Eigenschaft.
- {{cssxref("revert")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf das Standardstyling des Browsers anstelle der auf diese Eigenschaft angewendeten Standards. Dieser Wert verhält sich in vielen Fällen wie {{cssxref("unset")}}.
- {{cssxref("revert-layer")}}
  - : Setzt den Eigenschaftswert auf einen zuvor festgelegten Wert in einer [Kaskadierungsschicht](/de/docs/Web/CSS/@layer) zurück.
- {{cssxref("unset")}}
  - : Setzt die Eigenschaft auf ihren natürlichen Wert zurück, was bedeutet, dass die Eigenschaft, wenn sie natürlich vererbt wird, wie `inherit` wirkt, andernfalls wie `initial`.

> [!NOTE]
> Weitere Informationen zu jedem dieser Begriffe und ihrer Funktionsweise finden Sie unter [Herkunftstypen](/de/docs/Web/CSS/Cascade#origin_types).

Wir können uns eine Liste von Links ansehen und erforschen, wie universelle Werte wirken. Das untenstehende Live-Beispiel ermöglicht es Ihnen, mit dem CSS zu experimentieren und zu sehen, was passiert, wenn Sie Änderungen vornehmen. Mit Code zu spielen, ist wirklich der beste Weg, um HTML und CSS besser zu verstehen.

Zum Beispiel:

1. Das zweite Listenelement hat die Klasse `my-class-1` angewendet. Diese setzt die Farbe des verschachtelten `<a>`-Elements auf `inherit`. Wenn Sie die Regel entfernen, wie ändert sich die Farbe des Links?
2. Verstehen Sie, warum der dritte und vierte Link die Farbe haben, die sie haben? Der dritte Link ist auf `initial` gesetzt, was bedeutet, dass er den initialen Wert der Eigenschaft verwendet (in diesem Fall schwarz) und nicht den Browser-Standard für Links, der blau ist. Der vierte ist auf `unset` gesetzt, was bedeutet, dass der Linktext die Farbe des übergeordneten Elements verwendet, grün.
3. Welcher der Links ändert die Farbe, wenn Sie eine neue Farbe für das `<a>`-Element definieren — zum Beispiel `a { color: red; }`?
4. Nachdem Sie den nächsten Abschnitt über das Zurücksetzen aller Eigenschaften gelesen haben, kommen Sie zurück und ändern Sie die `color`-Eigenschaft in `all`. Beachten Sie, wie der zweite Link in einer neuen Zeile steht und einen Aufzählungspunkt hat. Welche Eigenschaften denken Sie, wurden geerbt?

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

Die CSS-Kurzschreibeigenschaft [`all`](/de/docs/Web/CSS/all) kann verwendet werden, um einen dieser Vererbungswerte auf (fast) alle Eigenschaften gleichzeitig anzuwenden. Ihr Wert kann einer der Vererbungswerte (`inherit`, `initial`, `revert`, `revert-layer` oder `unset`) sein. Es ist eine bequeme Möglichkeit, Änderungen an Stilen rückgängig zu machen, damit Sie zu einem bekannten Ausgangspunkt zurückkehren können, bevor Sie neue Änderungen vornehmen.

Im folgenden Beispiel haben wir zwei Blockquotes. Das erste hat Stil angewendet auf das Blockquote-Element selbst. Das zweite hat eine Klasse auf das Blockquote angewendet, die den Wert von `all` auf `unset` setzt.

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

Versuchen Sie, den Wert von `all` auf einige der anderen verfügbaren Werte zu setzen und beobachten Sie, worin der Unterschied besteht.

## Die Kaskade verstehen

Wir verstehen jetzt, dass die Vererbung der Grund dafür ist, dass ein Absatz, der tief in der Struktur Ihres HTMLs verschachtelt ist, die gleiche Farbe hat wie das auf den `body` angewendete CSS. Aus den einführenden Lektionen wissen wir, wie man das auf etwas angewendete CSS an jedem Punkt im Dokument ändern kann — sei es durch Zuweisung von CSS zu einem Element oder durch das Erstellen einer Klasse. Wir werden nun sehen, wie die Kaskade definiert, welche CSS-Regeln angewendet werden, wenn mehr als ein Stilblock dieselbe Eigenschaft, jedoch mit unterschiedlichen Werten, auf dasselbe Element anwendet.

Es gibt drei Faktoren, die berücksichtigt werden müssen, hier in aufsteigender Reihenfolge der Bedeutung aufgelistet. Spätere übersteuern frühere:

1. **Quellreihenfolge**
2. **Spezifität**
3. **Wichtigkeit**

Wir werden uns diese ansehen, um zu sehen, wie Browser herausfinden, welcher CSS tatsächlich angewendet werden sollte.

### Quellreihenfolge

Wir haben bereits gesehen, wie Quellreihenfolge für die Kaskade wichtig ist. Wenn Sie mehr als eine Regel haben, die alle genau das gleiche Gewicht haben, dann wird diejenige, die zuletzt im CSS steht, gewinnen. Sie können dies als: Die Regel, die näher am Element selbst liegt, überschreibt die vorherigen Regeln, bis die letzte Regel gewinnt und das Element stylt.

Die Quellreihenfolge ist nur relevant, wenn das Gewicht der Spezifität der Regeln gleich ist, also schauen wir uns die Spezifität an:

### Spezifität

Sie werden oft auf eine Situation stoßen, in der Sie wissen, dass eine Regel später im Stylesheet steht, aber eine frühere, widersprüchliche Regel angewendet wird. Dies passiert, weil die frühere Regel eine **höhere Spezifität** hat — sie ist spezifischer und wird daher vom Browser als diejenige ausgewählt, die das Element stylen soll.

Wie wir früher in dieser Lektion gesehen haben, hat ein Klassenselektor mehr Gewicht als ein Elementselektor, daher überschreiben die Eigenschaften, die im Klassenstilblock definiert sind, die im Elementstilblock definierten.

Etwas, das hier zu beachten ist, ist, dass wir bei Selektoren und den Regeln, die auf den Text oder das Element, das sie auswählen, angewendet werden, nicht die gesamte Regel überschrieben wird, sondern nur die Eigenschaften, die an mehreren Stellen deklariert sind.

Dieses Verhalten hilft, Wiederholungen im CSS zu vermeiden. Eine gängige Praxis ist es, generische Stile für die Basiselemente zu definieren und dann Klassen für diejenigen zu erstellen, die sich unterscheiden. Zum Beispiel haben wir im untenstehenden Stylesheet generische Stile für Überschriften der Ebene 2 definiert und dann einige Klassen erstellt, die nur einige der Eigenschaften und Werte ändern. Die anfänglich definierten Werte werden auf alle Überschriften angewendet, dann werden die spezifischeren Werte auf die Überschriften mit den Klassen angewendet.

```html live-sample___mixing-rules
<h2>Heading with no class</h2>
<h2 class="small">Heading with class of small</h2>
<h2 class="bright">Heading with class of bright</h2>
```

```css live-sample___mixing-rules
h2 {
  font-size: 2em;
  color: #000;
  font-family: Georgia, "Times New Roman", Times, serif;
}

.small {
  font-size: 1em;
}

.bright {
  color: rebeccapurple;
}
```

{{EmbedLiveSample("mixing-rules", "", "240px")}}

Sehen wir uns nun an, wie der Browser die Spezifität berechnet. Wir wissen bereits, dass ein Elementselektor eine geringe Spezifität hat und von einer Klasse überschrieben werden kann. Im Wesentlichen wird ein Wert in Punkten an verschiedene Arten von Selektoren vergeben, und das Zusammenzählen dieser Werte gibt Ihnen das Gewicht dieses bestimmten Selektors, das dann gegen andere potenzielle Übereinstimmungen beurteilt werden kann.

Die Menge der Spezifität eines Selektors wird anhand von drei verschiedenen Werten (oder Komponenten) gemessen, die als ID, CLASS und ELEMENT Spalten in den Hunderten, Zehnern und Einerstellen gedacht werden können:

- **Identifikatoren**: Vergeben Sie einen Punkt in dieser Spalte für jeden ID-Selektor, der im Gesamtselktor enthalten ist.
- **Klassen**: Vergeben Sie einen Punkt in dieser Spalte für jeden Klassenselektor, Attributselektor oder Pseudoklasse, die im Gesamtselktor enthalten sind.
- **Elemente**: Vergeben Sie einen Punkt in dieser Spalte für jeden Elementselektor oder Pseudoelement, die im Gesamtselktor enthalten sind.

> [!NOTE]
> Der universelle Selektor ([`*`](/de/docs/Web/CSS/Universal_selectors)), [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators) (`+`, `>`, `~`, ' '), und der spezifitätsanpassende Selektor ([`:where()`](/de/docs/Web/CSS/:where)) zusammen mit seinen Parametern haben keinen Einfluss auf die Spezifität.

Die Negation ([`:not()`](/de/docs/Web/CSS/:not)), Beziehungsauswahl ([`:has()`](/de/docs/Web/CSS/:has)), die Auswahl eines beliebigen ([`:is()`](/de/docs/Web/CSS/:is)) Pseudoklasse, und [CSS-Einbettung](/de/docs/Web/CSS/CSS_nesting/Nesting_and_specificity) selbst verleihen keine zusätzliche Spezifität, aber ihre Parameter oder eingeschlossenen Regeln tun dies. Das Gewicht der Spezifität, das jede dieser Methoden zu dem Algorithmus hinzufügt, ist das Gewicht der Selektoren innerhalb der Parameter oder eingeschlossenen Regel mit dem höchsten Gewicht.

Die folgende Tabelle zeigt einige isolierte Beispiele, um Sie auf Stimmung zu bringen. Gehen Sie diese durch und stellen Sie sicher, dass Sie verstehen, warum sie die Spezifität haben, die wir ihnen zugeordnet haben. Wir haben Selektoren hier noch nicht im Detail behandelt, aber Sie finden Details zu jedem Selektor im MDN [Selektoren-Referenz](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators).

| Selektor                                  | Identifikatoren | Klassen | Elemente | Gesamtspezifität |
| ----------------------------------------- | --------------- | ------- | -------- | ---------------- |
| `h1`                                      | 0               | 0       | 1        | 0-0-1            |
| `h1 + p::first-letter`                    | 0               | 0       | 3        | 0-0-3            |
| `li > a[href*="en-US"] > .inline-warning` | 0               | 2       | 2        | 0-2-2            |
| `#identifier`                             | 1               | 0       | 0        | 1-0-0            |
| `button:not(#mainBtn, .cta)`              | 1               | 0       | 1        | 1-0-1            |

Bevor wir weitermachen, schauen wir uns ein Beispiel in Aktion an.

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

{{EmbedLiveSample("specificity-boxes")}}

Was passiert hier also? Zunächst sind wir nur an den ersten sieben Regeln dieses Beispiels interessiert, und wie Sie bemerken werden, haben wir die Spezifitätswerte in einem Kommentar vor jeder angegeben.

- Die ersten beiden Selektoren konkurrieren um das Styling der Hintergrundfarbe des Links. Der zweite gewinnt und macht die Hintergrundfarbe blau, weil er einen zusätzlichen ID-Selektor in der Kette hat: seine Spezifität ist 2-0-1 gegenüber 1-0-1.
- Selektoren 3 und 4 konkurrieren um das Styling der Textfarbe des Links. Der zweite gewinnt und macht den Text weiß, weil obwohl es einen weniger Elementselektor gibt, der fehlende Selektor gegen einen Klassenselektor ausgetauscht wird, der mehr Gewicht hat als unendlich viele Elementselektoren. Die gewinnende Spezifität ist 1-1-3 vs. 1-0-4.
- Selektoren 5-7 konkurrieren um das Styling des Rahmens des Links, wenn darüber gefahren wird. Selektor 6 verliert eindeutig gegen Selektor 5 mit einer Spezifität von 0-2-3 vs. 0-2-4; es hat einen weniger Elementselektor in der Kette. Selektor 7 hingegen schlägt sowohl Selektor 5 als auch 6, da es die gleiche Anzahl von Unterscheidungsmerkmalen in der Kette hat wie Selektor 5, aber ein Element wurde durch einen Klassenselektor ersetzt. Also ist die gewinnende Spezifität 0-3-3 gegen 0-2-3 und 0-2-4.

> [!NOTE]
> Jeder Selektortyp hat seine eigene Spezifitätsstufe, die nicht durch Selektoren mit einer niedrigeren Spezifitätsstufe überschrieben werden kann. Zum Beispiel könnten _eine Million_ **Klassen**-Selektoren zusammen nicht die Spezifität von _einem_ **id**-Selektor überschreiben.
>
> Der beste Weg, um Spezifität zu bewerten, ist, die Spezifitätsstufen individuell zu punkten, beginnend mit der höchsten und weiter zur niedrigeren, wenn nötig. Nur wenn es ein Unentschieden zwischen den Selektorenpunkten innerhalb einer Spezifitätsstufe gibt, müssen Sie die nächste Stufe herunter bewerten; andernfalls können Sie die niedrigeren Spezifitätsselektoren vernachlässigen, da sie nie die höheren Spezifitätsselektoren überschreiben können.

#### IDs gegenüber Klassen

ID-Selektoren haben eine hohe Spezifität. Das bedeutet, dass auf Basis der Übereinstimmung eines ID-Selektors angewendete Stile Stile übertrumpfen, die auf anderen Selektoren basieren, einschließlich Klassen- und Typselektoren. Da eine ID nur einmal auf einer Seite vorkommen kann und aufgrund der hohen Spezifität von ID-Selektoren ist es vorzuziehen, einem Element eine Klasse hinzuzufügen, anstatt eine ID.

Wenn die Verwendung der ID der einzige Weg ist, um das Element anzuzielen — vielleicht, weil Sie keinen Zugriff auf das Markup haben und es nicht bearbeiten können — ziehen Sie es in Betracht, die ID innerhalb eines [Attributsselektors](/de/docs/Web/CSS/Attribute_selectors) zu verwenden, wie `p[id="header"]`.

### Inline-Stile

Inline-Stile, das heißt, die Stil-Deklarationen innerhalb eines [`style`](/de/docs/Web/HTML/Global_attributes/style) Attributs, nehmen Vorrang vor allen normalen Stilen, egal wie die Spezifität ist. Solche Deklarationen haben keine Selektoren, aber ihre Spezifität kann als 1-0-0-0 verstanden werden; immer mehr als jedes andere Spezifitätsgewicht, egal wie viele IDs in den Selektoren sind.

### !important

Es gibt eine spezielle CSS-Option, die Sie verwenden können, um all die oben genannten Berechnungen zu überstimmen, sogar Inline-Stile - die `!important`-Kennzeichnung. Sie sollten jedoch sehr vorsichtig sein, wenn Sie sie verwenden. Diese Kennzeichnung wird verwendet, um ein individuelles Eigenschafts-Wert-Paar zur spezifischsten Regel zu machen und überschreibt dabei die normalen Regeln der Kaskade, einschließlich normaler Inline-Stile.

> [!NOTE]
> Es ist nützlich zu wissen, dass die `!important`-Kennzeichnung existiert, damit Sie wissen, was es ist, wenn Sie es im Code anderer Leute sehen. **Wir empfehlen jedoch dringend, diese nicht zu verwenden, es sei denn, es gibt absolut keine andere Möglichkeit.** Die `!important`-Kennzeichnung ändert die normale Funktionsweise der Kaskade, daher kann es das Debuggen von CSS-Problemen wirklich schwer machen, insbesondere in einem großen Stylesheet.

Sehen Sie sich dieses Beispiel an, in dem wir zwei Absätze haben, von denen einer eine ID hat.

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

Lassen Sie uns das durchgehen, um zu sehen, was passiert — versuchen Sie, einige der Eigenschaften zu entfernen, um zu sehen, was passiert, falls Sie es schwer verstehen:

1. Sie werden sehen, dass die {{cssxref("color")}}- und {{cssxref("padding")}}-Werte der dritten Regel angewendet wurden, aber die {{cssxref("background-color")}} nicht. Warum? Eigentlich sollten alle drei sicherlich gelten, weil Regeln, die später in der Quellreihenfolge stehen, im Allgemeinen frühere Regeln überschreiben.
2. Die obigen Regeln gewinnen jedoch, weil Klassen-Selektoren eine höhere Spezifität als Element-Selektoren haben.
3. Beide Elemente haben eine [`class`](/de/docs/Web/HTML/Global_attributes/class) von `better`, aber das zweite hat eine [`id`](/de/docs/Web/HTML/Global_attributes/id) von `winning` auch. Da IDs eine _noch höhere_ Spezifität als Klassen haben (Sie können nur ein Element mit jeder eindeutigen ID auf einer Seite haben, aber viele Elemente mit derselben Klasse — ID-Selektoren sind _sehr spezifisch_ in dem, was sie anvisieren), sollten die rote Hintergrundfarbe und der 1px schwarze Rand beide auf das zweite Element angewendet werden, wobei das erste Element die graue Hintergrundfarbe und keinen Rand gemäß der Klasse erhält.
4. Das zweite Element _erhält_ die rote Hintergrundfarbe, aber keinen Rand. Warum? Wegen des `!important`-Flags in der zweiten Regel. Das Hinzufügen des `!important`-Flags nach `border: none` bedeutet, dass diese Deklaration den `border`-Wert in der vorherigen Regel gewinnen wird, obwohl der ID-Selektor eine höhere Spezifität hat.

> [!NOTE]
> Die einzige Möglichkeit, eine wichtige Deklaration zu überschreiben, besteht darin, eine andere wichtige Deklaration mit _derselben Spezifität_ später in der Quellreihenfolge einzuschließen, oder eine mit höherer Spezifität.

Eine Situation, in der Sie möglicherweise das `!important`-Flag verwenden müssen, ist, wenn Sie an einem Content-Management-System arbeiten, bei dem Sie die Kern-CSS-Module nicht bearbeiten können, und Sie wollen wirklich einen Inline-Stil oder eine wichtige Deklaration überschreiben, die auf keine andere Weise überschrieben werden kann. Aber wirklich, benutzen Sie es nicht, wenn Sie es vermeiden können.

## Der Effekt des Ortes von CSS

Schließlich ist es wichtig zu beachten, dass die Priorität einer CSS-Deklaration davon abhängt, in welchem Stylesheet sie spezifiziert ist.

Es ist möglich, dass Benutzer benutzerdefinierte Stylesheets festlegen, um die Stile des Entwicklers zu überschreiben. Zum Beispiel könnte ein sehbehinderter Benutzer die Schriftgröße auf allen von ihm besuchten Webseiten auf das Doppelte der normalen Größe einstellen wollen, um das Lesen zu erleichtern.

### Reihenfolge der überschreibenden Deklarationen

Widersprüchliche Deklarationen werden in der folgenden Reihenfolge angewendet, wobei spätere Deklarationen frühere überschreiben:

1. Deklarationen in Benutzer-Agent-Stylesheets (z.B. die Standardstile des Browsers, die verwendet werden, wenn kein anderes Styling festgelegt ist).
2. Normale Deklarationen in Benutzer-Stylesheets (benutzerdefinierte Stile, die von einem Benutzer festgelegt wurden).
3. Normale Deklarationen in Autoren-Stylesheets (diese sind die von uns, den Webentwicklern, festgelegten Stile).
4. Wichtige Deklarationen in Autoren-Stylesheets.
5. Wichtige Deklarationen in Benutzer-Stylesheets.
6. Wichtige Deklarationen in Benutzer-Agent-Stylesheets.

> [!NOTE]
> Die Prioritätsordnung wird für Stile, die mit `!important` gekennzeichnet sind, umgekehrt. Es ist sinnvoll, dass Stylesheets von Webentwicklern die Aufwand-Stile überschreiben, so dass das Design wie beabsichtigt beibehalten werden kann; jedoch haben Benutzer manchmal gute Gründe, die Stile von Webentwicklern zu überschreiben, wie oben erwähnt, und dies kann durch die Verwendung von `!important` in ihren Regeln erreicht werden.

## Testen Sie Ihr Können!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Die Kaskade](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_tasks).

## Zusammenfassung

Wenn Sie den größten Teil dieses Artikels verstanden haben, dann herzlichen Glückwunsch — Sie haben begonnen, sich mit den grundlegenden Mechaniken von CSS vertraut zu machen.

Wenn Sie die Kaskade, Spezifität und Vererbung noch nicht vollständig verstanden haben, machen Sie sich keine Sorgen! Dies ist definitiv das komplizierteste Thema, das wir bisher im Kurs behandelt haben, und es ist etwas, das selbst professionelle Webentwickler manchmal schwierig finden. Wir empfehlen Ihnen, mehrmals zu diesem Artikel zurückzukommen, während Sie den Kurs fortsetzen, und immer wieder darüber nachzudenken.

Kehren Sie hierher zurück, wenn Sie auf seltsame Probleme mit Stilen stoßen, die nicht wie erwartet angewendet werden. Es könnte ein Spezifizitätsproblem sein.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics")}}
