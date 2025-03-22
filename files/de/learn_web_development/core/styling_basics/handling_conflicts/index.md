---
title: Konflikte behandeln
slug: Learn_web_development/Core/Styling_basics/Handling_conflicts
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics")}}

Ziel dieser Lektion ist es, Ihr Verständnis einiger der grundlegendsten Konzepte von CSS zu entwickeln – die Kaskade, Spezifität und Vererbung –, die kontrollieren, wie CSS auf HTML angewendet wird und wie Konflikte zwischen Stil-Deklarationen gelöst werden.

Obwohl die Bearbeitung dieser Lektion zunächst als weniger relevant und etwas theoretischer erscheinen mag als einige andere Teile des Kurses, wird Ihnen das Verständnis dieser Konzepte später viel Ärger ersparen! Wir ermutigen Sie, diesen Abschnitt sorgfältig zu bearbeiten und zu überprüfen, ob Sie die Konzepte verstehen, bevor Sie fortfahren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegendes zu HTML (lernen Sie
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

## In Konflikt stehende Regeln

CSS steht für **Cascading Style Sheets**, und das erste Wort _cascading_ ist unglaublich wichtig zu verstehen – die Art und Weise, wie die Kaskade funktioniert, ist der Schlüssel zum Verständnis von CSS.

Irgendwann werden Sie an einem Projekt arbeiten und feststellen, dass das CSS, das Ihrer Meinung nach auf ein Element angewendet werden sollte, nicht funktioniert. Oft liegt das Problem darin, dass Sie zwei Regeln erstellt haben, die unterschiedliche Werte derselben Eigenschaft auf dasselbe Element anwenden. Die [**Kaskade**](/de/docs/Web/CSS/CSS_cascade/Cascade) und das eng verwandte Konzept der [**Spezifität**](/de/docs/Web/CSS/CSS_cascade/Specificity) sind Mechanismen, die kontrollieren, welche Regel angewendet wird, wenn ein solcher Konflikt besteht. Die Regel, die Ihr Element stylt, ist möglicherweise nicht die, die Sie erwarten, daher müssen Sie verstehen, wie diese Mechanismen funktionieren.

Ebenfalls bedeutend ist das Konzept der [**Vererbung**](/de/docs/Web/CSS/CSS_cascade/Inheritance), was bedeutet, dass einige CSS-Eigenschaften standardmäßig Werte von dem übergeordneten Element des aktuellen Elements erben und andere nicht. Dies kann auch zu einem Verhalten führen, das Sie möglicherweise nicht erwarten.

Lassen Sie uns zunächst einen kurzen Blick auf die wichtigsten Dinge werfen, mit denen wir es zu tun haben, und dann schauen wir uns jedes einzeln an und sehen, wie sie miteinander und mit Ihrem CSS interagieren. Diese können wie eine schwierige Menge von Konzepten erscheinen, die man verstehen muss. Je mehr Sie mit dem Schreiben von CSS üben, desto offensichtlicher wird es Ihnen, wie es funktioniert.

### Kaskade

Stylesheets [**kaskadieren**](/de/docs/Web/CSS/CSS_cascade/Cascade) – auf einer sehr einfachen Ebene bedeutet dies, dass der Ursprung und die Reihenfolge von CSS-Regeln von Bedeutung sind. Wenn zwei Regeln dieselbe Spezifität haben, wird diejenige verwendet, die zuletzt im Stylesheet definiert ist. Es gibt andere Konzepte, die einen Effekt haben, wie z.B. [Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers), aber diese sind fortgeschrittener und werden hier nicht im Detail behandelt.

Im folgenden Beispiel haben wir zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der `<h1>`-Inhalt wird am Ende blau eingefärbt. Dies liegt daran, dass beide Regeln aus derselben Quelle stammen, einen identischen Element-Selektor haben und daher dieselbe Spezifität besitzen, aber die letzte in der Quellenreihenfolge gewinnt.

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

[Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) ist der Algorithmus, den der Browser verwendet, um zu entscheiden, welcher Eigenschaftswert auf ein Element angewendet wird. Wenn mehrere Stilblöcke unterschiedliche Selektoren haben, die dieselbe Eigenschaft mit unterschiedlichen Werten konfigurieren und dasselbe Element ansprechen, entscheidet die Spezifität über den Eigenschaftswert, der auf das Element angewendet wird. Spezifität ist im Grunde ein Maß dafür, wie spezifisch die Auswahl eines Selektors ist:

- Ein Element-Selektor ist weniger spezifisch; er wählt alle Elemente dieses Typs aus, die auf einer Seite erscheinen, und hat daher weniger Gewicht. Pseudo-Element-Selektoren haben dieselbe Spezifität wie normale Element-Selektoren.
- Ein Klassen-Selektor ist spezifischer; er wählt nur die Elemente auf einer Seite aus, die einen bestimmten `class`-Attributwert haben, und hat daher mehr Gewicht. Attributselektoren und Pseudoklassen haben dasselbe Gewicht wie eine Klasse.

Unten haben wir wieder zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der `<h1>`-Inhalt wird am Ende rot eingefärbt, da der Klassen-Selektor `main-heading` seiner Regel eine höhere Spezifität verleiht. Selbst wenn die Regel mit dem `<h1>`-Element-Selektor weiter unten in der Quellenreihenfolge erscheint, wird die Regel mit der höheren Spezifität, die den Klassen-Selektor verwendet, angewendet.

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

Wir werden den Spezifitätsalgorithmus später noch erklären.

### Vererbung

Vererbung muss in diesem Kontext ebenfalls verstanden werden – einige CSS-Eigenschaftswerte, die auf übergeordnete Elemente gesetzt sind, werden von ihren Kindelementen geerbt, andere nicht.

Wenn Sie beispielsweise eine `Farbe` und eine `Schriftfamilie` auf ein Element setzen, wird jedes darin enthaltene Element mit dieser Farbe und Schriftart gestylt, es sei denn, Sie haben direkt andere Farb- und Schriftwerte darauf angewendet.

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

Einige Eigenschaften werden nicht vererbt – zum Beispiel, wenn Sie eine {{cssxref("breite")}} von 50% auf ein Element setzen, erhalten alle seine Nachkommen keine Breite von 50% der Breite ihres übergeordneten Elements. Wenn dies der Fall wäre, wäre CSS sehr frustrierend zu verwenden!

> [!NOTE]
> Auf den Referenzseiten zu MDN-CSS-Eigenschaften finden Sie ein technisches Informationsfeld namens "Formale Definition", das eine Reihe von Datenpunkten zu dieser Eigenschaft auflistet, darunter auch, ob sie vererbt wird oder nicht. Siehe den Abschnitt [Formale Definition der Farbeigenschaft](/de/docs/Web/CSS/color#formal_definition) als Beispiel.

### Verständnis, wie die Konzepte zusammenarbeiten

Diese drei Konzepte (Kaskade, Spezifität und Vererbung) steuern zusammen, welches CSS auf welches Element angewendet wird. In den folgenden Abschnitten werden wir sehen, wie sie zusammenarbeiten. Es kann manchmal etwas kompliziert erscheinen, aber Sie werden anfangen, sich an sie zu erinnern, je mehr Erfahrung Sie mit CSS sammeln, und Sie können die Details immer nachschlagen, falls Sie sie vergessen! Selbst erfahrene Entwickler erinnern sich nicht an alle Details.

## Vererbung verstehen

Wir beginnen mit der Vererbung. Im folgenden Beispiel haben wir ein {{HTMLElement("ul")}}-Element mit zwei Ebenen von verschachtelten ungeordneten Listen. Wir haben der äußeren `<ul>` einen Rahmen, eine Polsterung und eine Schriftfarbe gegeben.

Die `Farbe`-Eigenschaft ist eine vererbte Eigenschaft. Daher wird der `Farbe`-Eigenschaftswert auf die direkten und auch auf die indirekten Kindelemente angewendet – auf die unmittelbaren Kind-`<li>` und diejenigen im ersten verschachtelten Listenelement. Wir haben dann der zweiten verschachtelten Liste die Klasse `special` hinzugefügt und ihr eine andere Farbe gegeben. Dies wird dann durch ihre Kindelemente vererbt.

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

Eigenschaften wie `Breite` (wie oben erwähnt), `Rand`, `Polsterung` und `Rahmen` sind keine vererbten Eigenschaften. Wenn ein Rahmen in diesem Listenelementbeispiel an die Kindelemente vererbt würde, würde jede einzelne Liste und jedes Listenelement einen Rahmen erhalten – wahrscheinlich kein Effekt, den wir uns jemals wünschen würden!

Auch wenn jede CSS-Eigenschaften-Seite angibt, ob die Eigenschaft vererbt wird oder nicht, können Sie oft intuitiv erraten, ob Sie wissen, was der Eigenschaftswert stylen wird.

### Kontrolle der Vererbung

CSS bietet fünf spezielle universelle Eigenschaftswerte zur Steuerung der Vererbung. Jede CSS-Eigenschaft akzeptiert diese Werte.

- {{cssxref("inherit")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf den gleichen wie den seines übergeordneten Elements. Effektiv "schaltet dies die Vererbung ein".
- {{cssxref("initial")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf den [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) dieser Eigenschaft.
- {{cssxref("revert")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf das Standard-Styling des Browsers und nicht auf die standardmäßigen Anwendungen dieser Eigenschaft. Dieser Wert funktioniert in vielen Fällen wie {{cssxref("unset")}}.
- {{cssxref("revert-layer")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf den Wert, der in einer vorherigen [Kaskadenschicht](/de/docs/Web/CSS/@layer) festgelegt wurde.
- {{cssxref("unset")}}
  - : Setzt die Eigenschaft auf ihren natürlichen Wert, was bedeutet, dass sie, wenn die Eigenschaft natürlicherweise vererbt wird, wie `inherit` fungiert, andernfalls wie `initial`.

> [!NOTE]
> Weitere Informationen zu jedem dieser Werte und wie sie funktionieren, finden Sie unter [Ursprungstypen](/de/docs/Web/CSS/CSS_cascade/Cascade#origin_types).

Wir können uns eine Liste von Links ansehen und erforschen, wie universelle Werte funktionieren. Das folgende Live-Beispiel ermöglicht es Ihnen, mit dem CSS zu spielen und zu sehen, was passiert, wenn Sie Änderungen vornehmen. Mit Code zu spielen ist wirklich der beste Weg, um HTML und CSS besser zu verstehen.

Zum Beispiel:

1. Das zweite Listenelement hat die Klasse `my-class-1` angewendet. Dies setzt die Farbe des verschachtelten `<a>`-Elements auf `inherit`. Wenn Sie die Regel entfernen, wie ändert sich die Farbe des Links?
2. Verstehen Sie, warum der dritte und vierte Link die Farbe hat, die sie haben? Der dritte Link ist auf `initial` gesetzt, was bedeutet, dass er den Anfangswert der Eigenschaft verwendet (in diesem Fall Schwarz) und nicht den Browserstandard für Links, der Blau ist. Der vierte ist auf `unset` gesetzt, was bedeutet, dass der Linktext die Farbe des übergeordneten Elements verwendet, Grün.
3. Welche der Links ändern die Farbe, wenn Sie eine neue Farbe für das `<a>`-Element definieren – zum Beispiel `a { color: red; }`?
4. Nachdem Sie den nächsten Abschnitt über das Zurücksetzen aller Eigenschaften gelesen haben, kehren Sie zurück und ändern die `color`-Eigenschaft in `all`. Beachten Sie, wie der zweite Link in einer neuen Zeile steht und ein Aufzählungszeichen hat. Welche Eigenschaften denken Sie, wurden vererbt?

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

Die CSS-Kurzschreibweise [`all`](/de/docs/Web/CSS/all) kann verwendet werden, um einen dieser Vererbungswerte auf (fast) alle Eigenschaften gleichzeitig anzuwenden. Sein Wert kann einer der Vererbungswerte (`inherit`, `initial`, `revert`, `revert-layer` oder `unset`) sein. Es ist eine bequeme Möglichkeit, Änderungen an den Stilen rückgängig zu machen, damit Sie zu einem bekannten Ausgangspunkt zurückkehren können, bevor Sie neue Änderungen beginnen.

Im folgenden Beispiel haben wir zwei Blockzitate. Das erste hat direkt auf das Blockzitat-Element angewendete Stile. Das zweite hat eine Klasse auf das Blockzitat angewendet, die den Wert `all` auf `unset` setzt.

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

Wir verstehen jetzt, dass Vererbung der Grund ist, warum ein tief in der Struktur Ihres HTMLs verschachtelter Absatz dieselbe Farbe hat wie das CSS, das auf den Körper angewendet wird. Aus den einführenden Lektionen wissen wir, wie wir das angewendete CSS zu jedem beliebigen Punkt im Dokument ändern können – ob durch die Zuordnung von CSS zu einem Element oder durch das Erstellen einer Klasse. Wir werden nun untersuchen, wie die Kaskade bestimmt, welche CSS-Regeln gelten, wenn mehr als ein Stilblock dieselbe Eigenschaft, aber mit unterschiedlichen Werten, auf dasselbe Element anwenden.

Es gibt drei zu berücksichtigende Faktoren, die hier in zunehmender Bedeutung aufgelistet sind. Später genannte Faktoren überlagern frühere:

1. **Quellreihenfolge**
2. **Spezifität**
3. **Wichtigkeit**

Wir werden uns diese ansehen, um zu sehen, wie Browser genau herausfinden, welches CSS angewendet werden soll.

### Quellreihenfolge

Wir haben bereits gesehen, wie die Quellreihenfolge für die Kaskade von Bedeutung ist. Wenn Sie mehr als eine Regel haben, die alle genau dasselbe Gewicht haben, dann wird diejenige, die zuletzt in der CSS-Datei kommt, gewinnen. Sie können dies so betrachten: Die Regel, die näher am Element selbst ist, überschreibt die früheren, bis die letzte gewinnt und das Element stylt.

Die Quellreihenfolge spielt nur dann eine Rolle, wenn das Spezifitätsgewicht der Regeln dasselbe ist, betrachten wir also die Spezifität:

### Spezifität

Sie werden oft in eine Situation geraten, in der Sie wissen, dass eine Regel später im Stylesheet kommt, aber eine frühere, widersprüchliche Regel angewendet wird. Das passiert, weil die frühere Regel eine **höhere Spezifität** hat – sie ist spezifischer und wird daher vom Browser als diejenige ausgewählt, die das Element stylen sollte.

Wie wir früher in dieser Lektion gesehen haben, hat ein Klassen-Selektor mehr Gewicht als ein Element-Selektor, daher überschreiben die in dem Klassenstilblock definierten Eigenschaften diejenigen, die im Elementstilblock definiert sind.

Das hier zu beachtende ist, dass wir zwar an Selektoren und die Regeln denken, die auf den Text oder das Element angewendet werden, das sie auswählen, aber nicht die gesamte Regel überschrieben wird, sondern nur die Eigenschaften, die an mehreren Stellen deklariert werden.

Dieses Verhalten hilft, Wiederholungen in Ihrem CSS zu vermeiden. Eine gängige Praxis ist, generische Stile für die grundlegenden Elemente zu definieren und dann Klassen für diejenigen zu erstellen, die anders sind. Zum Beispiel haben wir im untenstehenden Stylesheet generische Stile für Überschriften der Stufe 2 definiert und dann einige Klassen erstellt, die nur einige der Eigenschaften und Werte ändern. Die anfangs definierten Werte werden auf alle Überschriften angewendet, dann werden die spezifischeren Werte auf die Überschriften mit den Klassen angewendet.

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

Schauen wir uns nun an, wie der Browser Spezifität berechnet. Wir wissen bereits, dass ein Element-Selektor eine niedrige Spezifität hat und von einer Klasse überschrieben werden kann. Im Wesentlichen wird einem bestimmten Selektor eine Punktzahl in Punkten zugewiesen, und diese werden addiert, um das Gewicht dieses bestimmten Selektors zu bestimmen, das dann gegen andere potenzielle Übereinstimmungen bewertet werden kann.

Die Menge an Spezifität, die ein Selektor hat, wird anhand von drei verschiedenen Werten (oder Komponenten) gemessen, die man sich als ID-, KLASSEN- und ELEMENT-Spalten in den Hundertern, Zehner- und Einerstellen vorstellen kann:

- **Identifikatoren**: Vergeben Sie in dieser Spalte einen Punkt für jeden ID-Selektor, der im Gesamtselktor enthalten ist.
- **Klassen**: Vergeben Sie in dieser Spalte einen Punkt für jeden Klassen-Selektor, Attribut-Selektor oder Pseudo-Klasse, der im Gesamtselktor enthalten ist.
- **Elemente**: Vergeben Sie in dieser Spalte einen Punkt für jeden Element-Selektor oder Pseudo-Element, der im Gesamtselktor enthalten ist.

> [!NOTE]
> Der universelle Selektor ([`*`](/de/docs/Web/CSS/Universal_selectors)), [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators) (`+`, `>`, `~`, ' '), und Spezifitätsanpassungsselektor ([`:where()`](/de/docs/Web/CSS/:where)) zusammen mit seinen Parametern haben keinen Einfluss auf die Spezifität.

Die Negation ([`:not()`](/de/docs/Web/CSS/:not)), Relationselektor ([`:has()`](/de/docs/Web/CSS/:has)), die alle übereinstimmenden ([`:is()`](/de/docs/Web/CSS/:is)) Pseudoklassen, und [CSS-Nesting](/de/docs/Web/CSS/CSS_nesting/Nesting_and_specificity) selbst fügen keine Spezifität hinzu, aber ihre Parameter oder verschachtelten Regeln schon. Das Spezifitätsgewicht, das jeder zum Spezifitätsalgorithmus beiträgt, ist das Spezifitätsgewicht des Selektors im Parameter oder verschachtelten Regel mit dem größten Gewicht.

Die folgende Tabelle zeigt einige isolierte Beispiele, um Sie in Stimmung zu bringen. Versuchen Sie, diese durchzugehen, und stellen Sie sicher, dass Sie verstehen, warum sie die Spezifität erhalten haben, die wir ihnen gegeben haben. Wir haben Selektoren noch nicht im Detail behandelt, aber Sie können Details zu jedem Selektor im MDN-[Selektoren-Referenz](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators) finden.

| Selektor                                  | Identifikatoren | Klassen | Elemente | Gesamtspezifität |
| ----------------------------------------- | --------------- | ------- | -------- | ---------------- |
| `h1`                                      | 0               | 0       | 1        | 0-0-1            |
| `h1 + p::first-letter`                    | 0               | 0       | 3        | 0-0-3            |
| `li > a[href*="en-US"] > .inline-warning` | 0               | 2       | 2        | 0-2-2            |
| `#identifier`                             | 1               | 0       | 0        | 1-0-0            |
| `button:not(#mainBtn, .cta`)              | 1               | 0       | 1        | 1-0-1            |

Bevor wir fortfahren, schauen wir uns ein praktisches Beispiel an.

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

Was passiert hier? Zunächst sind wir nur an den ersten sieben Regeln dieses Beispiels interessiert, und wie Sie bemerken werden, haben wir in einem Kommentar vor jeder Regel ihre Spezifitätswerte vermerkt.

- Die ersten beiden Selektoren konkurrieren über das Styling der Hintergrundfarbe des Links. Der zweite gewinnt und macht den Hintergrund blau, weil er einen zusätzlichen ID-Selektor in der Kette hat: Seine Spezifität ist 2-0-1 gegenüber 1-0-1.
- Selektoren 3 und 4 konkurrieren über das Styling der Textfarbe des Links. Der zweite gewinnt und macht den Text weiß, weil er zwar einen Elementselektor weniger hat, der fehlende Selektor jedoch durch einen Klassen-Selektor ersetzt wird, der mehr Gewicht hat als unendlich viele Elementselektoren. Die gewinnende Spezifität ist 1-1-3 gegenüber 1-0-4.
- Selektoren 5–7 konkurrieren über das Styling des Rahmens des Links beim Hover. Selektor 6 verliert eindeutig gegen Selektor 5 mit einer Spezifität von 0-2-3 gegenüber 0-2-4; er hat einen weniger Elementselektor in der Kette. Selektor 7 schlägt jedoch sowohl die Selektoren 5 als auch 6, weil er die gleiche Anzahl an Unterselektoren in der Kette hat wie Selektor 5, aber ein Element gegen einen Klassen-Selektor ausgetauscht wurde. Die gewinnende Spezifität ist 0-3-3 gegenüber 0-2-3 und 0-2-4.

> [!NOTE]
> Jeder Selektortyp hat seine eigene Spezifitätsebene, die von Selektoren mit niedrigerer Spezifitätsebene nicht überschrieben werden kann. Zum Beispiel könnten eine _Million_ **Klassen**-Selektoren zusammen nicht die Spezifität eines _einzigen_ **ID**-Selektors überschreiben.
>
> Der beste Weg, die Spezifität zu bewerten, besteht darin, die Spezifitätsebenen einzeln zu bewerten, beginnend mit der höchsten und nur bei Bedarf zur niedrigsten überzugehen. Nur wenn es einen Gleichstand zwischen Selektorpunkten innerhalb einer Spezifitäts-Spalte gibt, müssen Sie die nächste Spalte nach unten bewerten; ansonsten können Sie die Selektoren mit niedrigerer Spezifität ignorieren, da sie niemals die höher spezifizierten Selektoren überschreiben können.

#### IDs versus Klassen

ID-Selektoren haben eine hohe Spezifität. Das bedeutet, dass Stile, die basierend auf der Übereinstimmung eines ID-Selektors angewendet werden, Stile, die auf anderen Selektoren basieren, einschließlich Klassen- und Typ-Selektoren, überlagern. Da eine ID nur einmal auf einer Seite auftreten kann und aufgrund der hohen Spezifität von ID-Selektoren ist es vorzuziehen, einer Klasse zu einem Element bevorzugt vor einer ID zuzuweisen.

Wenn es der einzige Weg ist, das Element anzusprechen – vielleicht, weil Sie keinen Zugriff auf das Markup haben und es nicht bearbeiten können – überlegen Sie, die ID in einem [Attribut-Selektor](/de/docs/Web/CSS/Attribute_selectors) wie `p[id="header"]` zu verwenden.

### Inline-Stile

Inline-Stile, das heißt, die Stildeklaration innerhalb eines [`style`](/de/docs/Web/HTML/Global_attributes/style)-Attributs hat Vorrang vor allen normalen Stilen, egal wie hoch die Spezifität ist. Solche Deklarationen haben keine Selektoren, aber ihre Spezifität lässt sich als 1-0-0-0 konstruieren; immer mehr als jedes andere Spezifizitätsgewicht, egal wie viele IDs in den Selektoren sind.

### !important

Es gibt ein spezielles Stück CSS, das Sie verwenden können, um alle oben genannten Berechnungen zu überstimmen, selbst Inline-Stile – das `!important`-Flag. Sie sollten es jedoch sehr vorsichtig verwenden. Dieses Flag wird verwendet, um ein einzelnes Eigenschaften-Wert-Paar zur am spezifischsten Regel zu machen und so die normalen Regeln der Kaskade, einschließlich normaler Inline-Stile, zu übergehen.

> [!NOTE]
> Es ist nützlich zu wissen, dass das `!important`-Flag existiert, damit Sie wissen, was es ist, wenn Sie es im Code anderer Personen sehen. **Wir empfehlen jedoch dringend, es niemals zu verwenden, es sei denn, es ist absolut notwendig.** Das `!important`-Flag verändert die normale Funktionsweise der Kaskade, wodurch das Debuggen von CSS-Problemen besonders in einem großen Stylesheet sehr schwer nachvollziehbar wird.

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

Schauen wir uns das genauer an – versuchen Sie, einige der Eigenschaften zu entfernen, um zu sehen, was passiert, wenn Sie Schwierigkeiten haben, es zu verstehen:

1. Sie werden sehen, dass die {{cssxref("color")}}- und {{cssxref("padding")}}-Werte der dritten Regel angewendet wurden, aber die {{cssxref("background-color")}} nicht. Warum? Eigentlich sollten alle drei gelten, weil Regeln, die später in der Quellreihenfolge stehen, in der Regel frühere Regeln überstimmen.
2. Die oben genannten Regeln gewinnen, weil Klassenselektoren eine höhere Spezifität haben als Elementselektoren.
3. Beide Elemente haben eine [`class`](/de/docs/Web/HTML/Global_attributes/class) von `better`, aber das 2. hat eine [`id`](/de/docs/Web/HTML/Global_attributes/id) von `winning` auch. Da IDs eine _noch höhere_ Spezifität als Klassen haben (Sie können nur ein Element mit jeder eindeutigen ID auf einer Seite haben, aber viele Elemente mit derselben Klasse – ID-Selektoren sind _sehr spezifisch_ in dem, was sie ansprechen), sollten die rote Hintergrundfarbe und der 1px schwarze Rahmen beide auf das 2. Element angewendet werden, wobei das erste Element die graue Hintergrundfarbe ohne Rahmen erhält, wie in der Klasse spezifiziert.
4. Das 2. Element _erhält_ die rote Hintergrundfarbe, aber keinen Rahmen. Warum? Aufgrund des `!important`-Flags in der zweiten Regel. Das Hinzufügen des `!important`-Flags nach `border: none` bedeutet, dass diese Deklaration den `border`-Wert in der vorherigen Regel übersteuern wird, auch wenn der ID-Selektor eine höhere Spezifizität hat.

> [!NOTE]
> Der einzige Weg, eine wichtige Deklaration zu überfahren, ist, später in der Quellreihenfolge eine andere wichtige Deklaration mit derselben oder höherer Spezifizität hinzuzufügen.

Eine Situation, in der Sie das `!important`-Flag verwenden müssen, ist, wenn Sie an einem CMS arbeiten, bei dem Sie die Kern-CSS-Module nicht bearbeiten können und wirklich eine Inline-Stil oder eine wichtige Deklaration, die auf keine andere Weise übersteuert werden kann, übersteuern möchten. Aber wirklich, verwenden Sie es nicht, wenn Sie es vermeiden können.

## Die Wirkung des CSS-Standorts

Schließlich ist es wichtig zu beachten, dass die Priorität einer CSS-Deklaration davon abhängt, in welchem Stylesheet sie angegeben ist.

Es ist möglich, dass Benutzer benutzerdefinierte Stylesheets festlegen, um die Entwicklerstile zu übersteuern. Zum Beispiel könnte ein sehbehinderter Benutzer die Schriftgröße auf allen von ihm besuchten Webseiten auf das Doppelte der normalen Größe einstellen wollen, um das Lesen zu erleichtern.

### Reihenfolge der überschreibenden Deklarationen

Konfliktierende Deklarationen werden in folgender Reihenfolge angewendet, wobei spätere die früheren überschreiben:

1. Deklarationen in Benutzer-Agent-Stilblättern (z.B. die Standardstile des Browsers, die verwendet werden, wenn kein anderes Styling festgelegt ist).
2. Normale Deklarationen in Benutzerstilblättern (benutzerdefinierte Stile, die von einem Benutzer festgelegt werden).
3. Normale Deklarationen in Autorenstilblättern (dies sind die von uns, den Webentwicklern, festgelegten Stile).
4. Wichtige Deklarationen in Autorenstilblättern.
5. Wichtige Deklarationen in Benutzerstilblättern.
6. Wichtige Deklarationen in Benutzer-Agent-Stilblättern.

> [!NOTE]
> Die Prioritätsreihenfolge ist für mit `!important` gekennzeichnete Stile umgekehrt. Es macht Sinn, dass Stile von Webentwicklern Benutzerstilblätter übersteuern, damit das Design wie beabsichtigt bleiben kann; jedoch haben Benutzer manchmal gute Gründe, Webentwickler-Stile zu übersteuern, wie oben erwähnt, und dies kann durch die Verwendung von `!important` in ihren Regeln erreicht werden.

## Testen Sie Ihre Fähigkeiten!

Sie sind am Ende dieses Artikels angelangt, aber können Sie sich die wichtigsten Informationen merken? Sie können weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren – siehe [Testen Sie Ihre Fähigkeiten: Die Kaskade](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_tasks).

## Zusammenfassung

Wenn Sie den größten Teil dieses Artikels verstanden haben, dann herzlichen Glückwunsch – Sie haben begonnen, sich mit den grundlegenden Mechanismen von CSS vertraut zu machen.

Wenn Sie die Kaskade, Spezifität und Vererbung nicht vollständig verstanden haben, machen Sie sich keine Sorgen! Dies ist definitiv das anspruchsvollste Thema, das wir bisher im Kurs behandelt haben, und etwas, das selbst professionelle Webentwickler manchmal schwierig finden. Wir würden Ihnen raten, zu diesem Artikel mehrmals zurückzukehren, während Sie den Kurs durchlaufen, und weiterhin darüber nachzudenken.

Kehren Sie hierher zurück, wenn Sie auf seltsame Probleme stoßen, bei denen Stile nicht wie erwartet angewendet werden. Es könnte ein Spezifitätsproblem sein.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics")}}
