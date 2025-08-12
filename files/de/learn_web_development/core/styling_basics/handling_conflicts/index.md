---
title: Umgang mit Konflikten
slug: Learn_web_development/Core/Styling_basics/Handling_conflicts
l10n:
  sourceCommit: 2530db14de9ac226cf06f84540fa0101e804ca9b
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics")}}

Ziel dieser Lektion ist es, Ihr Verständnis für einige der grundlegendsten Konzepte von CSS – die Kaskade, Spezifität und Vererbung – zu entwickeln, welche steuern, wie CSS auf HTML angewendet wird und wie Konflikte zwischen Stil-Deklarationen gelöst werden.

Auch wenn diese Lektion möglicherweise weniger unmittelbar relevant erscheint und etwas akademischer wirkt als andere Teile des Kurses, wird das Verständnis dieser Konzepte Ihnen später viel Ärger ersparen! Wir ermutigen Sie, diesen Abschnitt sorgfältig durchzuarbeiten und sicherzustellen, dass Sie die Konzepte verstehen, bevor Sie fortfahren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (lernen Sie
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

## Konfliktierende Regeln

CSS steht für **Cascading Style Sheets**, und dieses erste Wort _cascading_ ist unglaublich wichtig zu verstehen – die Art und Weise, wie die Kaskade funktioniert, ist der Schlüssel zum Verständnis von CSS.

Irgendwann werden Sie an einem Projekt arbeiten und feststellen, dass einige CSS-Deklarationen, die Ihrer Meinung nach auf ein Element angewendet werden sollten, nicht funktionieren. Oft tritt dieses Problem auf, wenn Sie zwei Regeln erstellen, die unterschiedliche Werte desselben Eigenschafts für dasselbe Element anwenden.

Die [**Kaskade**](/de/docs/Web/CSS/CSS_cascade/Cascade) und das eng damit verbundene Konzept der [**Spezifität**](/de/docs/Web/CSS/CSS_cascade/Specificity) sind Mechanismen, die entscheiden, welche Regel angewendet wird, wenn ein solcher Konflikt auftritt. Die Deklaration, die Ihr Element stylt, ist möglicherweise nicht die, die Sie erwarten, daher müssen Sie verstehen, wie diese Mechanismen funktionieren.

Auch wichtig ist hier das Konzept der [**Vererbung**](/de/docs/Web/CSS/CSS_cascade/Inheritance), was bedeutet, dass einige CSS-Eigenschaften standardmäßig die auf dem übergeordneten Element des aktuellen Elements gesetzten Werte erben und andere nicht. Dies kann ebenfalls zu unerwartetem Verhalten führen.

Lassen Sie uns zunächst einen kurzen Blick auf die Schlüsselkonzepte werfen, mit denen wir es zu tun haben, dann schauen wir uns jedes einzeln an und sehen, wie sie miteinander und mit Ihrem CSS interagieren. Diese Konzepte können schwierig zu verstehen erscheinen, aber sie werden klarer, je mehr Übung Sie im Schreiben von CSS bekommen.

### Kaskade

Stylesheets [**kaskadieren**](/de/docs/Web/CSS/CSS_cascade/Cascade). Auf einer sehr einfachen Ebene bedeutet dies, dass der Ursprung und die Reihenfolge der CSS-Regeln von Bedeutung sind. Wenn zwei Regeln die gleiche Spezifität haben, wird diejenige genommen, die zuletzt im Stylesheet definiert ist. Es gibt noch andere Konzepte, die einen Einfluss haben, wie z.B. [Kaskadenebenen](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers), aber diese sind fortgeschrittener und werden hier nicht im Detail behandelt.

Im folgenden Beispiel haben wir zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der `<h1>`-Inhalt wird schließlich blau gefärbt. Dies liegt daran, dass beide Regeln aus derselben Quelle stammen, einen identischen Element-Selektor haben und daher die gleiche Spezifität aufweisen, aber die letzte in der Quellreihenfolge gewinnt.

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

[Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) ist ein Algorithmus, den der Browser verwendet, um zu entscheiden, welcher Eigenschaftswert auf ein Element angewendet wird. Wenn mehrere Regeln unterschiedliche Selektoren haben, die unterschiedliche Werte für dieselbe Eigenschaft festlegen und auf dasselbe Element abzielen, entscheidet die Spezifität, welcher Eigenschaftswert auf das Element angewendet wird. Spezifität ist im Wesentlichen ein Maß dafür, wie spezifisch die Auswahl eines Selektors ist:

- Ein Typ- (Element-) Selektor ist weniger spezifisch; er wählt alle Elemente dieses Typs aus, die auf einer Seite erscheinen, und hat daher weniger Gewicht. Pseudo-Element-Selektoren haben die gleiche Spezifität wie reguläre Element-Selektoren.
- Ein Klassen-Selektor ist spezifischer; er wählt nur die Elemente auf einer Seite aus, die einen bestimmten`class`-Attributwert haben, und hat daher mehr Gewicht. Attributselektoren und Pseudo-Klassen haben das gleiche Gewicht wie eine Klasse.
- Ein ID-Selektor ist noch spezifischer – er wählt nur ein einzelnes Element mit einem bestimmten `id`-Wert aus. Daher hat er noch mehr Gewicht.

Unten haben wir wieder zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der `<h1>`-Inhalt wird unten `rot` gefärbt, obwohl die `color: blue`-Deklaration später in der Quellreihenfolge erscheint, weil der Klassenselektor `main-heading` seiner Regel eine höhere Spezifität als der Typ-Selektor `h1` verleiht. Die Deklaration mit der höheren Spezifität, definiert durch den Klassenselektor, wird angewendet.

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

Wir erklären den Spezifitäts-Algorithmus später ausführlicher.

### Vererbung

Vererbung muss in diesem Zusammenhang ebenfalls verstanden werden – einige CSS-Eigenschaftswerte, die auf übergeordnete Elemente festgelegt sind, werden von ihren untergeordneten Elementen geerbt, andere nicht.

Beispielsweise, wenn Sie `color` und `font-family` auf ein Element setzen, werden alle darin enthaltenen Elemente ebenfalls mit dieser Farbe und dieser Schriftart gestylt, es sei denn, Sie haben direkt andere Farb- und Schriftwerte auf sie angewendet.

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

Einige Eigenschaften werden nicht vererbt – z.B. {{cssxref("width")}}. Wenn Sie `width` von `50%` auf ein Element setzen, erhalten nicht alle Nachfahren eine `width` von `50%` der `width` ihres Elternteils. Wenn dies der Fall wäre, würde die Verwendung von CSS sehr frustrierend sein!

> [!NOTE]
> Auf den MDN CSS-Eigenschaftsreferenzseiten finden Sie ein technisches Informationsfeld namens "Formale Definition", das eine Reihe von Datenelementen über diese Eigenschaft auflistet, einschließlich der Frage, ob sie vererbt wird oder nicht. Siehe den Abschnitt [Formale Definition der Farbeigenschaft](/de/docs/Web/CSS/color#formal_definition) als Beispiel.

### Verständnis, wie die Konzepte zusammenarbeiten

Diese drei Konzepte (Kaskade, Spezifität und Vererbung) steuern zusammen, welche CSS auf welches Element angewendet werden. In den folgenden Abschnitten werden wir sehen, wie sie zusammenarbeiten. Es kann manchmal ein wenig schwierig erscheinen, aber Sie werden anfangen, sie zu merken, wenn Sie mehr Erfahrung mit CSS sammeln, und Sie können die Details jederzeit nachschlagen, wenn Sie sie vergessen! Selbst erfahrene Entwickler erinnern sich nicht an alle Details.

## Verständnis der Vererbung

Wir beginnen mit der Vererbung. Im folgenden Beispiel haben wir ein {{HTMLElement("ul")}}-Element mit zwei Ebenen von verschachtelten ungeordneten Listen darin. Wir haben der äußeren `<ul>` einen Rand, eine Polsterung und eine Schriftfarbe gegeben.

Die `color`-Eigenschaft ist eine geerbte Eigenschaft. Somit wird der Wert der `color`-Eigenschaft auf die direkten Kinder und auch auf die indirekten Kinder angewendet – die unmittelbaren Kinder `<li>`s und diejenigen in der ersten verschachtelten Liste. Wir haben dann der zweiten verschachtelten Liste die Klasse `special` hinzugefügt und eine andere Farbe darauf angewendet. Diese wird dann durch ihre Kinder vererbt.

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

Eigenschaften wie `width` (wie oben erwähnt), `margin`, `padding` und `border` sind keine vererbten Eigenschaften. Wenn ein Rand in diesem Lisexample von den Kindern geerbt würde, würden alle Listen und Listenelemente einen Rand erhalten – wahrscheinlich nicht ein Effekt, den wir jemals wollen würden!

Obwohl jede CSS-Eigenschaftsseite auflistet, ob die Eigenschaft vererbt wird oder nicht, können Sie oft dasselbe intuitiv vermuten, wenn Sie wissen, welchen Aspekt der Eigenschaftswert stylen wird.

### Kontrolle der Vererbung

CSS bietet fünf spezielle universelle Eigenschaftswerte zur Steuerung der Vererbung. Jede CSS-Eigenschaft akzeptiert diese Werte.

- {{cssxref("inherit")}}
  - : Setzt den auf ein ausgewähltes Element angewendeten Eigenschaftswert auf denselben wie den seines Elternelements. Effektiv "schaltet dies die Vererbung ein".
- {{cssxref("initial")}}
  - : Setzt den auf ein ausgewähltes Element angewendeten Eigenschaftswert auf den [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) dieser Eigenschaft.
- {{cssxref("revert")}}
  - : Setzt den auf ein ausgewähltes Element angewendeten Eigenschaftswert auf die Standardstilierung des Browsers zurück und nicht auf die für diese Eigenschaft angewendeten Standardeinstellungen. Dieser Wert wirkt in vielen Fällen wie {{cssxref("unset")}}.
- {{cssxref("revert-layer")}}
  - : Setzt den auf ein ausgewähltes Element angewendeten Eigenschaftswert auf den in einer vorherigen [Kaskadenschicht](/de/docs/Web/CSS/@layer) festgelegten Wert zurück.
- {{cssxref("unset")}}
  - : Setzt die Eigenschaft auf ihren natürlichen Wert zurück, was bedeutet, dass sie, wenn die Eigenschaft von Natur aus vererbt wird, wie `inherit` wirkt, andernfalls wirkt sie wie `initial`.

> [!NOTE]
> Siehe [Herkunftstypen](/de/docs/Web/CSS/CSS_cascade/Cascade#origin_types) für weitere Informationen zu jedem dieser Werte und ihrer Funktionsweise.

### Spielen mit Vererbungskontroll-Eigenschaften

Wir können uns eine Liste von Links ansehen und erkunden, wie universelle Werte funktionieren. Das Live-Beispiel unten ermöglicht es Ihnen, mit dem CSS zu experimentieren und zu sehen, was passiert, wenn Sie Änderungen vornehmen. Mit Code zu spielen ist wirklich der beste Weg, HTML und CSS besser zu verstehen.

Zum Beispiel:

1. Dem zweiten Listenelement wurde die Klasse `my-class-1` zugewiesen. Diese setzt die Farbe des verschachtelten `<a>`-Elements auf `inherit`. Wenn Sie die Regel entfernen, wie ändert sich die Farbe des Links?
2. Verstehen Sie, warum der dritte und vierte Link die jeweilige Farbe haben? Der dritte Link ist auf `initial` gesetzt, was bedeutet, dass er den Anfangswert der Eigenschaft verwendet (in diesem Fall Schwarz) und nicht den Standard des Browsers für Links, der Blau ist. Der vierte ist auf `unset` gesetzt, was bedeutet, dass der Linktext die Farbe des Elternelements, Grün, verwendet.
3. Welche der Links werden die Farbe ändern, wenn Sie eine neue Farbe für das `<a>`-Element definieren – z.B. `a { color: red; }`?
4. Nachdem Sie den nächsten Abschnitt über das Zurücksetzen aller Eigenschaften gelesen haben, kehren Sie zurück und ändern die `color`-Eigenschaft in `all`. Beachten Sie, wie der zweite Link in einer neuen Zeile steht und ein Aufzählungszeichen hat. Welche Eigenschaften glauben Sie, wurden vererbt?

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

Die CSS-Kurzform-Eigenschaft [`all`](/de/docs/Web/CSS/all) kann verwendet werden, um einen dieser Vererbungswerte auf (fast) alle Eigenschaften gleichzeitig anzuwenden. Ihr Wert kann einer der Vererbungswerte (`inherit`, `initial`, `revert`, `revert-layer` oder `unset`) sein. Es ist eine bequeme Möglichkeit, Änderungen an Stilen rückgängig zu machen, damit Sie zu einem bekannten Ausgangspunkt zurückkehren können, bevor Sie neue Änderungen vornehmen.

Im untenstehenden Beispiel haben wir zwei Blockzitate. Das erste hat das Styling auf das Blockquote-Element selbst angewendet. Das zweite hat eine Klasse auf das Blockzitat angewendet, die den Wert von `all` auf `unset` setzt.

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

## Verständnis der Kaskade

Wir wissen jetzt, dass Vererbung der Grund dafür ist, warum ein tief in der Struktur Ihres HTML-Dokuments verschachtelter Absatz dieselbe Farbe wie das auf den Körper angewandte CSS hat. Aus den einführenden Lektionen haben wir ein Verständnis dafür, wie man das auf etwas angewendete CSS an einem beliebigen Punkt im Dokument ändern kann – sei es durch das Zuweisen von CSS zu einem Element oder durch das Erstellen einer Klasse. Wir werden uns nun ansehen, wie die Kaskade definiert, welche CSS-Regeln angewendet werden, wenn mehr als ein Stilblock dieselbe Eigenschaft auf dasselbe Element mit unterschiedlichen Werten ~anwendet.~

Es gibt drei zu berücksichtigende Faktoren, die hier in aufsteigender Wichtigkeit aufgelistet sind. Spätere Faktoren überstimmen frühere:

1. **Quellreihenfolge**
2. **Spezifität**
3. **Wichtigkeit**

Wir werden uns diese ansehen, um zu sehen, wie Browser genau herausfinden, welche CSS angewendet werden soll.

### Quellreihenfolge

Wir haben bereits gesehen, dass die Quellreihenfolge für die Kaskade von Bedeutung ist. Wenn Sie mehr als eine Regel haben, die alle dasselbe Gewicht haben, dann wird diejenige, die zuletzt im CSS erscheint, gewinnen. Man kann dies so verstehen: Die Regel, die dem Element selbst näher ist, überschreibt die früheren bis zur letzten, die gewinnt und das Element stilisieren darf.

Die Quellreihenfolge ist nur dann von Bedeutung, wenn das Spezifitätsgewicht der Regeln gleich ist, deshalb schauen wir uns als nächstes die Spezifität an.

### Spezifität

Sie werden oft in eine Situation kommen, in der Sie wissen, dass eine Regel später im Stylesheet kommt, aber eine frühere, widersprüchliche Regel angewendet wird. Dies passiert, weil die frühere Regel eine **höhere Spezifität** hat – sie ist spezifischer und wird daher vom Browser als diejenige ausgewählt, die das Element stilisieren soll.

Wie wir früher in dieser Lektion gesehen haben, hat ein Klassenselektor mehr Gewicht als ein Elementselektor, sodass die in den Klassenstilblock definierten Eigenschaften die im Elementstilblock definierten überschreiben.

Etwas zu beachten ist, dass wir zwar an Selektoren und die Regeln denken, die auf den Text oder die Komponente angewendet werden, die sie auswählen, aber nicht die ganze Regel überschrieben wird, sondern nur die Eigenschaften, die an mehreren Stellen deklariert sind.

Dieses Verhalten hilft, Wiederholungen in Ihrem CSS zu vermeiden. Eine übliche Praxis ist es, generische Stile für die Grundelemente zu definieren und dann Klassen für diejenigen zu erstellen, die anders sind. Zum Beispiel haben wir im untenstehenden Stylesheet generische Stile für H2-Überschriften definiert und dann einige Klassen erstellt, die nur einige der Eigenschaften und Werte ändern. Die zuerst definierten Werte werden auf alle Überschriften angewendet, dann werden die spezifischeren Werte auf die Überschriften mit den Klassen angewendet.

```html live-sample___mixing-rules
<h2>Heading with no class</h2>
<h2 class="small">Heading with class of small</h2>
<h2 class="bright">Heading with class of bright</h2>
```

```css live-sample___mixing-rules
h2 {
  font-size: 2em;
  color: black;
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

Lassen Sie uns jetzt sehen, wie der Browser die Spezifität berechnet. Wir wissen bereits, dass ein Element-Selektor eine niedrige Spezifität hat und von einer Klasse überschrieben werden kann. Im Wesentlichen wird den verschiedenen Typen von Selektoren ein Wert in Punkten zugewiesen, und das Addieren dieser ergibt das Gewicht des jeweiligen Selektors, das dann gegen andere potenzielle Übereinstimmungen bewertet werden kann.

Die Menge an Spezifität, die ein Selektor hat, wird mithilfe von drei verschiedenen Werten (oder Komponenten) gemessen, die als ID-, KLASSEN- und ELEMENT-Spalten zu Hunderten, Zehnern respektive Einern betrachtet werden können:

- **IDs**: 1 Punkt in dieser Spalte für jeden ID-Selektor, der im gesamten Selektor enthalten ist.
- **Klassen**: 1 Punkt in dieser Spalte für jeden Klassen-Selektor, Attribut-Selektor oder Pseudo-Klasse im gesamten Selektor.
- **Elemente**: 1 Punkt in dieser Spalte für jeden Element-Selektor oder Pseudo-Element im gesamten Selektor.

> [!NOTE]
> Der universelle Selektor ([`*`](/de/docs/Web/CSS/Universal_selectors)), [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators) (`+`, `>`, `~`, ' '), und der Spezifitätsanpassung-Selektor ([`:where()`](/de/docs/Web/CSS/:where)) zusammen mit seinen Parametern haben keinen Einfluss auf die Spezifität.

Die folgende Tabelle zeigt ein paar isolierte Beispiele, um Ihnen einen Eindruck zu vermitteln. Versuchen Sie, diese durchzugehen, und stellen Sie sicher, dass Sie verstehen, warum sie die ihnen gegebene Spezifität haben. Wir haben die Selektoren noch nicht im Detail behandelt, aber Sie können Details zu jedem Selektor auf der MDN [Selektoren-Referenz](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators) finden.

| Selektor                                  | IDs | Klassen | Elemente | Gesamtspezifität |
| ----------------------------------------- | --- | ------- | -------- | ---------------- |
| `h1`                                      | 0   | 0       | 1        | 0-0-1            |
| `h1 + p::first-letter`                    | 0   | 0       | 3        | 0-0-3            |
| `li > a[href*="en-US"] > .inline-warning` | 0   | 2       | 2        | 0-2-2            |
| `#identifier`                             | 1   | 0       | 0        | 1-0-0            |

#### Detailliertes Spezifitätsbeispiel

Bevor wir weitermachen, schauen wir uns ein Beispiel in Aktion an. Möglicherweise möchten Sie dies im MDN Playground in einem separaten Tab öffnen, damit Sie es leicht als Referenz benutzen können, während Sie die Erklärung lesen.

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

Was passiert hier? Zuerst sind wir nur an den ersten sieben Regeln dieses Beispiels interessiert, und wie Sie bemerken werden, haben wir ihre Spezifitätswerte in einem Kommentar vor jeder Regel aufgenommen.

- Die ersten beiden Selektoren konkurrieren über das Styling der `background-color` des Links. Der zweite gewinnt und macht die Hintergrundfarbe `blue`, weil er einen zusätzlichen ID-Selektor in der Kette hat: seine Spezifität ist 2-0-1 im Vergleich zu 1-0-1.
- Selektoren 3 und 4 konkurrieren über das Styling der Textfarbe des Links. Der zweite gewinnt und macht den Text `white`, obwohl er einen Element-Selektor weniger hat, ist der fehlende Selektor gegen einen Klassen-Selektor ausgetauscht worden, der mehr Gewicht als ein Elementselektor hat. Die gewinnende Spezifität ist 1-1-3 im Vergleich zu 1-0-4.
- Selektoren 5–7 konkurrieren über das Styling des `borders` des Links, wenn er schwebt. Selektor 6 verliert klar gegen Selektor 5 mit einer Spezifität von 0-2-3 im Vergleich zu 0-2-4; er hat einen Element-Selektor weniger in der Kette. Selektor 7 schlägt jedoch sowohl Selektor 5 als auch 6, weil er die gleiche Anzahl an Unterselektoren in der Kette wie Selektor 5 hat, aber ein Element gegen einen Klassen-Selektor ausgetauscht wurde. Somit ist die gewinnende Spezifität 0-3-3 im Vergleich zu 0-2-3 und 0-2-4.

> [!NOTE]
> Jeder Selektortyp hat seine eigene Ebene von Spezifität, die von Selektoren mit niedrigerer Spezifitätsstufe nicht überschrieben werden kann. Zum Beispiel könnten eine _Million_ **Klassen-Selektoren** kombiniert nicht die Spezifität eines _einzigen_ **ID-Selektors** überschreiben.
>
> Der beste Weg für die Bewertung der Spezifität besteht darin, die Spezifitätsstufen individuell zu bewerten, beginnend mit der höchsten und notfalls zur niedrigeren überzugehen. Nur wenn es ein Unentschieden zwischen Selektorpunkten innerhalb einer spezifischen Spalte gibt, müssen Sie die nächste Spalte bewerten; andernfalls können Sie die unteren Spezifizitäts-Selektoren ignorieren, da sie die höheren Spezifizitäts-Selektoren niemals überschreiben können.

#### IDs versus Klassen

ID-Selektoren haben eine hohe Spezifität. Dies bedeutet, dass die Stile, die anhand eines ID-Selectors angewendet werden, die Stile überschreiben, die basierend auf anderen Selektoren, einschließlich Klassen- und Typselektoren, angewendet werden. Da eine ID nur einmal auf einer Seite vorkommen kann und aufgrund der hohen Spezifität von ID-Selektionatoren, ist es vorzuziehen, einer Element anstatt einer ID eine Klasse hinzuzufügen.

Wenn die Verwendung der ID die einzige Möglichkeit ist, das Element zu anzusprechen – vielleicht weil Sie keinen Zugriff auf das Markup haben und es nicht bearbeiten können – ziehen Sie in Erwägung, die ID in einem [Attribut-Selektor](/de/docs/Web/CSS/Attribute_selectors) zu verwenden, wie z.B. `p[id="header"]`.

### Inline-Stile

Inline-Stile, das heißt, die Stil-Deklaration innerhalb eines [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) Attributs, haben Vorrang vor allen normalen Stilen, unabhängig von der Spezifität. Solche Deklarationen haben keine Selektoren, aber ihre Spezifität kann als 1-0-0-0 verstanden werden; immer mehr als jede andere Spezifizitätsstufe, egal wie viele IDs in den Selektoren sind.

### !important

Es gibt ein spezielles Stück CSS, das Sie verwenden können, um all die oben genannten Berechnungen zu übersteuern, sogar Inline-Stile – der `!important`-Flag. Sie sollten jedoch sehr vorsichtig sein, wenn Sie ihn verwenden. Dieser Flag wird verwendet, um ein einzelnes Eigenschaft-Wert-Paar zur spezifischsten Regel zu machen und dadurch die normalen Regeln der Kaskade, einschließlich normaler Inline-Stile, zu überschreiben.

> [!NOTE]
> Es ist nützlich zu wissen, dass der `!important`-Flag existiert, damit Sie wissen, was er ist, wenn Sie ihm im Code anderer begegnen. **Wir empfehlen jedoch dringend, ihn nur dann zu verwenden, wenn es absolut notwendig ist.** Der `!important`-Flag ändert die Art und Weise, wie die Kaskade normalerweise funktioniert, was die Fehlersuche bei CSS-Problemen sehr erschweren kann, besonders in einer großen Stylesheet.

Sehen Sie sich dieses Beispiel an, bei dem wir zwei Absätze haben, von denen einer eine ID hat.

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

Gehen wir dies durch, um zu sehen, was passiert — versuchen Sie, einige Eigenschaften zu löschen, wenn Sie Probleme haben zu verstehen:

1. Sie werden sehen, dass die {{cssxref("color")}}- und {{cssxref("padding")}}-Werte der dritten Regel angewendet wurden, aber die {{cssxref("background-color")}} nicht. Warum? Eigentlich sollten doch alle drei angewendet werden, weil Regeln später in der Quellreihenfolge früheren in der Regel übergeordnet sind.
2. Die oben stehenden Regeln gewinnen jedoch, weil Klassen-Selektoren eine höhere Spezifität haben als Elementselektoren.
3. Beide Elemente haben eine [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) von `better`, aber das 2. hat eine [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) von `winning` ebenfalls. Da IDs eine _noch höhere_ Spezifität als Klassen haben, sollten sowohl `red` `background-color` als auch `1px black` `border` auf das 2. Element angewendet werden, wobei das erste Element die graue Hintergrundfarbe und keinen Rand wie durch die Klasse angegeben erhält.
4. Das 2. Element _bekommt_ jedoch den roten Hintergrund, aber keinen Rand. Warum? Wegen dem `!important`-Flag in der zweiten Regel. Das Hinzufügen des `!important`-Flags nach `border: none` bedeutet, dass diese Deklaration den `border`-Wert in der vorherigen Regel gewinnt, obwohl der ID-Selektor eine höhere Spezifität hat.

> [!NOTE]
> Die einzige Möglichkeit, eine wichtige Deklaration zu überschreiben, besteht darin, eine andere wichtige Deklaration mit der _gleichen Spezifität_ später in der Quellreihenfolge oder eine mit höherer Spezifität aufzunehmen.

Eine Situation, in der Sie möglicherweise den `!important`-Flag verwenden müssen, ist, wenn Sie an einem CMS arbeiten, bei dem Sie die Kern-CSS-Module nicht bearbeiten können, und Sie wirklich einen Inline-Stil oder eine wichtige Deklaration überschreiben möchten, die nicht auf andere Weise überschrieben werden kann. Aber wirklich, verwenden Sie ihn nicht, wenn Sie ihn vermeiden können.

## Der Effekt des Standorts von CSS

Schließlich ist es wichtig zu beachten, dass die Priorität einer CSS-Deklaration davon abhängt, in welchem Stylesheet sie spezifiziert ist.

Benutzer können benutzerdefinierte Stylesheets festlegen, um die Stile des Entwicklers zu überschreiben. Beispielsweise könnte ein sehbehinderter Benutzer die Schriftgröße auf allen von ihm besuchten Webseiten auf das Doppelte der normalen Größe einstellen wollen, um das Lesen zu erleichtern.

### Reihenfolge von überschreibenden Deklarationen

In Konflikt stehende Deklarationen werden in der folgenden Reihenfolge angewendet, wobei die späteren die früheren überschreiben:

1. Deklarationen in Benutzer-Agent-Stylesheets (z.B. die Standardstile des Browsers, verwendet, wenn keine anderen Stile festgelegt sind).
2. Normale Deklarationen in Benutzerstylesheets (benutzerdefinierte Stile, die vom Benutzer festgelegt werden).
3. Normale Deklarationen in Autoren-Stylesheets (das sind die von uns, den Webentwicklern, festgelegten Stile).
4. Wichtige Deklarationen in Autoren-Stylesheets.
5. Wichtige Deklarationen in Benutzerstylesheets.
6. Wichtige Deklarationen in Benutzer-Agent-Stylesheets.

> [!NOTE]
> Die Reihenfolge der Priorität wird für Stile mit `!important` invertiert. Es macht Sinn, dass Stylesheets von Webentwicklern die Benutzerstylesheets überschreiben sollen, damit das Design wie beabsichtigt eingehalten werden kann; jedoch haben Benutzer manchmal gute Gründe, die Stile von Webentwicklern zu überschreiben, wie oben erwähnt, was durch die Verwendung von `!important` in den Regeln erreicht werden kann.

## Testen Sie Ihr Können!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren – siehe [Testen Sie Ihr Können: Die Kaskade](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade).

## Zusammenfassung

Wenn Sie den größten Teil dieses Artikels verstanden haben, dann herzlichen Glückwunsch – Sie haben begonnen, sich mit den grundlegenden Mechanismen von CSS vertraut zu machen.

Wenn Sie die Kaskade, Spezifität und Vererbung nicht vollständig verstanden haben, dann machen Sie sich keine Sorgen! Dies ist definitiv das komplizierteste, was wir bisher im Kurs behandelt haben und es ist etwas, das selbst professionelle Webentwickler manchmal schwierig finden. Wir würden Ihnen raten, zu diesem Artikel ein paar Mal zurückzukehren, während Sie den Kurs fortsetzen und weiterhin darüber nachzudenken.

Kommen Sie hierher zurück, wenn Sie auf seltsame Probleme stoßen, bei denen Stile nicht wie erwartet angewendet werden. Es könnte ein Spezifitätsproblem sein.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics")}}
