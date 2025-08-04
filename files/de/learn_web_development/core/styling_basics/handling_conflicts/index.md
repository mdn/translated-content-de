---
title: Umgang mit Konflikten
slug: Learn_web_development/Core/Styling_basics/Handling_conflicts
l10n:
  sourceCommit: c9fed9fbb0930c3d4fa42060b0a8cd87c70c0b5b
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics")}}

Ziel dieser Lektion ist es, Ihr Verständnis für einige der grundlegendsten Konzepte von CSS zu entwickeln – die Kaskade, Spezifität und Vererbung –, die steuern, wie CSS auf HTML angewendet wird und wie Konflikte zwischen Stilangaben gelöst werden.

Auch wenn das Durcharbeiten dieser Lektion zunächst weniger relevant und etwas akademischer erscheinen mag als andere Teile des Kurses, wird Ihnen das Verständnis dieser Konzepte später viel Ärger ersparen! Wir empfehlen Ihnen, diesen Abschnitt sorgfältig durchzuarbeiten und sicherzustellen, dass Sie die Konzepte verstehen, bevor Sie fortfahren.

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
          <li>Die Hauptkonzepte, die das Ergebnis von Konflikten bestimmen – Spezifität, Reihenfolge der Quellen und Wichtigkeit.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Konfliktregelungen

CSS steht für **Cascading Style Sheets**, und das erste Wort _Kaskadieren_ ist unglaublich wichtig zu verstehen – die Art und Weise, wie die Kaskade funktioniert, ist der Schlüssel zum Verständnis von CSS.

Irgendwann werden Sie an einem Projekt arbeiten und feststellen, dass CSS, das Sie auf ein Element anwenden möchten, nicht funktioniert. Oft tritt dieses Problem auf, wenn Sie zwei Regeln erstellen, die verschiedene Werte der gleichen Eigenschaft auf dasselbe Element anwenden.

Die [**Kaskade**](/de/docs/Web/CSS/CSS_cascade/Cascade) und das eng verwandte Konzept der [**Spezifität**](/de/docs/Web/CSS/CSS_cascade/Specificity) sind Mechanismen, die steuern, welche Regel bei einem solchen Konflikt angewendet wird. Die Deklaration, die Ihr Element gestaltet, ist möglicherweise nicht die, die Sie erwarten, daher müssen Sie verstehen, wie diese Mechanismen funktionieren.

Ebenfalls bedeutend ist hier das Konzept der [**Vererbung**](/de/docs/Web/CSS/CSS_cascade/Inheritance), was bedeutet, dass einige CSS-Eigenschaften standardmäßig Werte erben, die auf das Elternelement des aktuellen Elements gesetzt sind, während andere dies nicht tun. Dies kann ebenfalls zu unerwartetem Verhalten führen.

Beginnen wir damit, einen kurzen Blick auf die wichtigsten Konzepte zu werfen, mit denen wir es zu tun haben. Dann werden wir sie der Reihe nach ansehen und sehen, wie sie miteinander und mit Ihrem CSS interagieren. Diese Konzepte können schwer verständlich erscheinen, aber sie werden klarer, je mehr Sie CSS schreiben.

### Kaskade

Stylesheets [**kaskadieren**](/de/docs/Web/CSS/CSS_cascade/Cascade). Auf eine sehr einfache Ebene bedeutet dies, dass der Ursprung und die Reihenfolge von CSS-Regeln wichtig sind. Wenn zwei Regeln die gleiche Spezifität haben, wird diejenige verwendet, die als letztes im Stylesheet definiert ist. Es gibt andere Konzepte, die ebenfalls einen Einfluss haben, wie z.B. [Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers), aber diese sind fortgeschrittener, und wir werden sie hier nicht im Detail behandeln.

Im unten stehenden Beispiel haben wir zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der Inhalt des `<h1>` endet damit, blau gefärbt zu sein. Dies liegt daran, dass beide Regeln aus derselben Quelle stammen, einen identischen Elementselektor haben und daher die gleiche Spezifität aufweisen, aber die letzte in der Quellreihenfolge gewinnt.

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

[Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) ist ein Algorithmus, den der Browser verwendet, um zu entscheiden, welcher Eigenschaftswert auf ein Element angewendet wird. Wenn mehrere Regeln unterschiedliche Selektoren haben, die verschiedene Werte für die gleiche Eigenschaft setzen und auf das gleiche Element abzielen, entscheidet die Spezifität, welcher Eigenschaftswert auf das Element angewendet wird. Spezifität ist im Wesentlichen ein Maß dafür, wie spezifisch die Auswahl eines Selektors sein wird:

- Ein Typselektor (Element) ist weniger spezifisch; er wird alle Elemente dieses Typs auf einer Seite auswählen, hat daher weniger Gewicht. Pseudo-Element-Selektoren haben die gleiche Spezifität wie reguläre Elementselektoren.
- Ein Klassenselektor ist spezifischer; er wählt nur die Elemente auf einer Seite aus, die einen bestimmten `class`-Attributwert haben, hat daher mehr Gewicht. Attributselektoren und Pseudo-Klassen haben das gleiche Gewicht wie eine Klasse.
- Ein ID-Selektor ist noch spezifischer – er wählt nur ein einzelnes Element mit einem bestimmten `id`-Wert aus. Daher hat er noch mehr Gewicht.

Unten haben wir wieder zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der `<h1>`-Inhalt wird unten `rot` gefärbt, obwohl die `color: blue`-Deklaration später in der Quellreihenfolge erscheint, weil der Klassenselektor `main-heading` seiner Regel eine höhere Spezifität als der Typselektor `h1` gibt. Die mit dem Klassenselektor definierte Deklaration mit der höheren Spezifität wird angewendet.

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

Wir werden den Spezifitätsalgorithmus später näher erläutern.

### Vererbung

Vererbung muss in diesem Kontext ebenfalls verstanden werden – einige CSS-Eigenschaftswerte, die auf Elternelementen gesetzt sind, werden auf ihre Kindelemente vererbt, andere nicht.

Wenn Sie beispielsweise eine `color` und `font-family` auf ein Element setzen, wird jedes Element innerhalb desselben ebenfalls mit dieser Farbe und Schriftart gestaltet, es sei denn, Sie haben ihnen direkt andere Farb- und Schriftwerte zugewiesen.

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

Einige Eigenschaften werden nicht vererbt – zum Beispiel {{cssxref("width")}}. Wenn Sie eine `width` von `50%` auf ein Element setzen, erhalten alle Nachfolger nicht eine Breite von `50%` der Breite ihres Elternteils. Wenn dies der Fall wäre, wäre CSS sehr frustrierend zu verwenden!

> [!NOTE]
> Auf den MDN-CSS-Eigenschaftsreferenzseiten finden Sie eine technische Informationsbox namens "Formale Definition", die eine Anzahl von Datenpunkten zu dieser Eigenschaft auflistet, einschließlich der Information, ob sie vererbt wird oder nicht. Sehen Sie sich den [Abschnitt Formale Definition der Farbeigenschaft](/de/docs/Web/CSS/color#formal_definition) als Beispiel an.

### Verständnis der Interaktion der Konzepte

Diese drei Konzepte (Kaskade, Spezifität und Vererbung) steuern zusammen, welches CSS auf welches Element angewendet wird. In den untenstehenden Abschnitten werden wir sehen, wie sie zusammenarbeiten. Es kann manchmal etwas kompliziert erscheinen, aber Sie werden sie mit zunehmender Erfahrung im Schreiben von CSS beherrschen, und Sie können die Details jederzeit nachschlagen, wenn Sie sie vergessen! Selbst erfahrene Entwickler erinnern sich nicht an alle Einzelheiten.

## Verständnis der Vererbung

Wir beginnen mit der Vererbung. Im folgenden Beispiel haben wir ein {{HTMLElement("ul")}}-Element mit zwei verschachtelten Ebenen ungeordneter Listen. Wir haben der äußeren `<ul>` einen Rahmen, Abstand und eine Schriftfarbe gegeben.

Die `color`-Eigenschaft ist eine vererbte Eigenschaft. Daher wird der `color`-Eigenschaftswert auf die direkten und auch auf die indirekten Kinder angewendet – die unmittelbaren Kind-`<li>`s und diejenigen innerhalb der ersten verschachtelten Liste. Wir haben dann die Klasse `special` zur zweiten verschachtelten Liste hinzugefügt und eine andere Farbe darauf angewendet. Diese wird dann durch ihre Kinder vererbt.

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

Eigenschaften wie `width` (wie oben erwähnt), `margin`, `padding` und `border` sind keine vererbten Eigenschaften. Wenn ein Rahmen in diesem Listbeispiel von den Kindern geerbt würde, würde jede einzelne Liste und jedes Listenelement einen Rahmen gewinnen – wahrscheinlich nicht ein Effekt, den wir jemals wollen würden!

Obwohl auf jeder CSS-Eigenschaftsseite aufgeführt ist, ob die Eigenschaft vererbt wird oder nicht, können Sie oft dasselbe intuitiv erahnen, wenn Sie wissen, welchen Aspekt der Eigenschaftswert gestalten wird.

### Vererbung steuern

CSS bietet fünf spezielle universelle Eigenschaftswerte zur Steuerung der Vererbung. Jede CSS-Eigenschaft akzeptiert diese Werte.

- {{cssxref("inherit")}}
  - : Setzt den angewendeten Eigenschaftswert eines ausgewählten Elements auf den gleichen Wert wie den des Elternteils. Wirksam, es "einschaltet die Vererbung".
- {{cssxref("initial")}}
  - : Setzt den angewendeten Eigenschaftswert eines ausgewählten Elements auf den [Initialwert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) dieser Eigenschaft.
- {{cssxref("revert")}}
  - : Setzt den angewendeten Eigenschaftswert eines ausgewählten Elements auf das Standard-Styling des Browsers zurück, anstatt auf die Standardeinstellungen für diese Eigenschaft. Dieser Wert wirkt oft wie {{cssxref("unset")}}.
- {{cssxref("revert-layer")}}
  - : Setzt den angewendeten Eigenschaftswert eines ausgewählten Elements auf den in einer vorherigen [Kaskadenschicht](/de/docs/Web/CSS/@layer) festgelegten Wert zurück.
- {{cssxref("unset")}}
  - : Setzt die Eigenschaft auf ihren natürlichen Wert zurück, was bedeutet, dass die Eigenschaft, wenn sie natürlich vererbt wird, wie `inherit` wirkt, andernfalls wie `initial`.

> [!NOTE]
> Weitere Informationen zu den einzelnen Typen und deren Funktionalität finden Sie unter [Ursprungstypen](/de/docs/Web/CSS/CSS_cascade/Cascade#origin_types).

### Mit Steuerungseigenschaften für die Vererbung experimentieren

Wir können uns eine Liste von Links ansehen und erkunden, wie universelle Werte funktionieren. Das Live-Beispiel unten erlaubt es Ihnen, mit dem CSS zu experimentieren und zu sehen, was passiert, wenn Sie Änderungen vornehmen. Mit Code zu spielen ist wirklich der beste Weg, HTML und CSS besser zu verstehen.

Zum Beispiel:

1. Das zweite Listenelement hat die Klasse `my-class-1` zugewiesen. Diese setzt die Farbe des darin verschachtelten `<a>`-Elements auf `inherit`. Wenn Sie die Regel entfernen, ändert sich die Farbe des Links?
2. Verstehen Sie, warum der dritte und vierte Link die Farbe haben, die sie haben? Der dritte Link ist auf `initial` gesetzt, was bedeutet, dass er den Initialwert der Eigenschaft verwendet (in diesem Fall schwarz) und nicht den Standard des Browsers für Links, der blau ist. Der vierte ist auf `unset` gesetzt, was bedeutet, dass der Linktext die Farbe des Elternelements, nämlich grün, verwendet.
3. Welche der Links ändert die Farbe, wenn Sie eine neue Farbe für das `<a>`-Element definieren – zum Beispiel `a { color: red; }`?
4. Nachdem Sie den nächsten Abschnitt über das Zurücksetzen aller Eigenschaften gelesen haben, kehren Sie zurück und ändern die `color`-Eigenschaft zu `all`. Beachten Sie, wie der zweite Link in einer neuen Zeile steht und eine Aufzählung hat. Welche Eigenschaften glauben Sie, wurden vererbt?

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

Die CSS-Kurzschrift-Eigenschaft [`all`](/de/docs/Web/CSS/all) kann verwendet werden, um einen dieser Vererbungswerte auf (fast) alle Eigenschaften gleichzeitig anzuwenden. Ihr Wert kann einer der Vererbungswerte (`inherit`, `initial`, `revert`, `revert-layer` oder `unset`) sein. Es ist eine praktische Möglichkeit, Änderungen an Stilen rückgängig zu machen, um zu einem bekannten Ausgangspunkt zurückzukehren, bevor Sie mit neuen Änderungen beginnen.

Im folgenden Beispiel haben wir zwei Blockzitate. Das erste hat Styling angewendet auf das Blockzitat-Element selbst. Das zweite hat eine Klasse, die dem Blockzitat zugewiesen ist, die den Wert von `all` auf `unset` setzt.

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

Versuchen Sie, den Wert von `all` auf einige der anderen verfügbaren Werte einzustellen und beobachten Sie, welcher Unterschied sich ergibt.

## Verständnis der Kaskade

Wir verstehen nun, dass Vererbung der Grund ist, warum ein tief im Aufbau Ihres HTMLs verschachtelter Absatz die gleiche Farbe wie das auf den `body` angewendete CSS hat. Aus den einführenden Lektionen wissen wir, wie man das CSS ändert, das zu einem bestimmten Zeitpunkt im Dokument angewendet wird – sei es durch das Zuweisen von CSS zu einem Element oder durch das Erstellen einer Klasse. Jetzt werden wir sehen, wie die Kaskade definiert, welche CSS-Regeln angewendet werden, wenn mehr als ein Stil-Block die gleiche Eigenschaft mit unterschiedlichen Werten auf dasselbe Element anwendet.

Es gibt drei Faktoren, die zu beachten sind, alle von zunehmender Bedeutung. Spätere überstimmen frühere:

1. **Quellenreihenfolge**
2. **Spezifität**
3. **Wichtigkeit**

Wir werden uns diese genauer ansehen, um zu sehen, wie Browser genau herausfinden, welches CSS angewendet werden sollte.

### Quellenreihenfolge

Wir haben bereits gesehen, wie die Quellenreihenfolge für die Kaskade von Bedeutung ist. Wenn Sie mehr als eine Regel haben, die genau das gleiche Gewicht haben, dann gewinnt die, die als letztes im CSS steht. Sie können dies so betrachten: die Regel, die dem Element selbst näher steht, überschreibt die früheren, bis die letzte gewinnt und das Element gestaltet.

Die Quellenreihenfolge ist nur von Bedeutung, wenn das Spezifitätsgewicht der Regeln gleich ist. Daher sehen wir uns als Nächstes die Spezifität an.

### Spezifität

Sie werden oft auf eine Situation treffen, in der Sie wissen, dass eine Regel später im Stylesheet kommt, aber eine frühere, widersprüchliche Regel angewendet wird. Dies geschieht, weil die frühere Regel eine **höhere Spezifität** hat – sie ist spezifischer und wird daher vom Browser als diejenige ausgewählt, die das Element gestalten soll.

Wie wir zu Beginn dieser Lektion gesehen haben, hat ein Klassenselektor mehr Gewicht als ein Elementselektor, so dass die in dem Klassenstilblock definierten Eigenschaften die in dem Elementstilblock definierten überschreiben.

Etwas zu beachten ist hier, dass, obwohl wir an Selektoren und die Regeln denken, die auf den Text oder die Komponente angewendet werden, die sie auswählen, nicht die ganze Regel überschrieben wird, sondern nur die Eigenschaften, die an mehreren Stellen deklariert sind.

Dieses Verhalten hilft, Wiederholungen in Ihrem CSS zu vermeiden. Eine gängige Praxis ist es, generische Stile für die grundlegenden Elemente zu definieren und dann Klassen für diejenigen zu erstellen, die unterschiedlich sind. Beispielsweise haben wir im unten stehenden Stylesheet generische Stile für Überschriften der Ebene 2 definiert und dann einige Klassen erstellt, die nur einige der Eigenschaften und Werte ändern. Die ursprünglich definierten Werte werden auf alle Überschriften angewendet, und dann werden die spezifischeren Werte auf die Überschriften mit den Klassen angewendet.

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

Werfen wir nun einen Blick darauf, wie der Browser die Spezifität berechnet. Wir wissen bereits, dass ein Elementselektor eine niedrige Spezifität hat und von einer Klasse überschrieben werden kann. Im Wesentlichen wird ein Wert in Punkten an verschiedene Arten von Selektoren vergeben, und das Addieren dieser Punkte ergibt das Gewicht des entsprechenden Selektors, das dann gegen andere potenzielle Übereinstimmungen bewertet werden kann.

Der Grad der Spezifität eines Selektors wird mittels drei verschiedener Werte (oder Komponenten) gemessen, die als ID-, KLASSEN- und ELEMENT-Spalten gedacht werden können, die jeweils Hunderten, Zehnern und Einern entsprechen:

- **IDs**: Ein Punkt in dieser Spalte (100 Punkte) für jedes ID-Selektor, das im gesamten Selektor enthalten ist.
- **Klassen**: Ein Punkt in dieser Spalte (10 Punkte) für jedes Klassenselektor, Attributselektor oder Pseudo-Klasse, das im gesamten Selektor enthalten ist.
- **Elemente**: Ein Punkt in dieser Spalte (1 Punkt) für jedes Elementselektor oder Pseudo-Element, das im gesamten Selektor enthalten ist.

> [!NOTE]
> Der universelle Selektor ([`*`](/de/docs/Web/CSS/Universal_selectors)), [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators) (`+`, `>`, `~`, ' ') und Spezifitätsanpassungsselektor ([`:where()`](/de/docs/Web/CSS/:where)) zusammen mit ihren Parametern haben keinen Einfluss auf die Spezifität.

Die folgende Tabelle zeigt einige isolierte Beispiele, um Sie in Stimmung zu bringen. Versuchen Sie, diese durchzugehen, und stellen Sie sicher, dass Sie verstehen, warum sie die angegebene Spezifität haben. Wir haben Selektoren noch nicht ausführlich behandelt, aber Sie finden Einzelheiten zu jedem Selektor in der MDN-[Referenz für Selektoren](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators).

| Selektor                                  | Identifier | Klassen | Elemente | Gesamtspezifität |
| ----------------------------------------- | ---------- | ------- | -------- | ---------------- |
| `h1`                                      | 0          | 0       | 1        | 0-0-1            |
| `h1 + p::first-letter`                    | 0          | 0       | 3        | 0-0-3            |
| `li > a[href*="en-US"] > .inline-warning` | 0          | 2       | 2        | 0-2-2            |
| `#identifier`                             | 1          | 0       | 0        | 1-0-0            |

#### Detailliertes Spezifitätsbeispiel

Bevor wir fortfahren, schauen wir uns ein Beispiel in Aktion an. Möglicherweise möchten Sie dies im MDN-Playground in einem separaten Tab öffnen, damit Sie es einfach als Referenz verwenden können, während Sie die Erklärung lesen.

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

Was passiert hier? Zunächst einmal sind wir nur an den ersten sieben Regeln dieses Beispiels interessiert, und wie Sie sehen werden, haben wir ihre Spezifität in einem Kommentar vor jeder Regel angegeben.

- Die ersten beiden Selektoren konkurrieren darum, den `background-color` des Links zu gestalten. Der zweite gewinnt und macht den Hintergrund blau, weil er in der Kette einen zusätzlichen ID-Selektor hat: Seine Spezifität ist 2-0-1 gegenüber 1-0-1.
- Selektoren 3 und 4 konkurrieren darum, die Textfarbe des Links zu gestalten. Der zweite gewinnt und macht den Text weiß, obwohl er einen Elementselektor weniger hat, da der fehlende Selektor gegen einen Klassenselektor ausgetauscht wird, der mehr Gewicht als Elementselektoren hat. Die gewinnende Spezifität ist 1-1-3 gegenüber 1-0-4.
- Selektoren 5–7 konkurrieren darum, die `border` des Links bei Hover zu gestalten. Der 6. Selektor verliert klar gegen den 5. Selektor mit einer Spezifität von 0-2-3 gegenüber 0-2-4; er hat einen Elementselektor weniger in der Kette. Der 7. Selektor schlägt jedoch sowohl den 5. als auch den 6. Selektor, weil er die gleiche Anzahl von Unterselektoren in der Kette wie der 5. Selektor hat, aber ein Element gegen einen Klassenselektor ausgetauscht wurde. Die gewinnende Spezifität ist 0-3-3 gegenüber 0-2-3 und 0-2-4.

> [!NOTE]
> Jeder Selektortyp hat seine eigene Spezifitätsstufe, die nicht von Selektoren mit einer niedrigeren Spezifitätsstufe überschrieben werden kann. Ein _Million_ **Klassen**-Selektoren zusammen könnten zum Beispiel die Spezifität von _einem_ **ID**-Selektor nicht überschreiben.
>
> Der beste Weg, um die Spezifität zu bewerten, besteht darin, die Spezifitätsstufen individuell zu bewerten, beginnend mit der höchsten und bei Bedarf zur niedrigeren überzugehen. Nur bei einem Unentschieden zwischen Selektoren innerhalb einer Spezifitätsspalte müssen Sie die nächste Spalte nach unten bewerten; andernfalls können Sie die niedrigeren Spezifitätsselektoren ignorieren, da sie niemals die höheren Spezifitätsselektoren überschreiben können.

#### IDs versus Klassen

ID-Selektoren haben hohe Spezifität. Dies bedeutet, dass Stile, die basierend auf der Übereinstimmung eines ID-Selectors angewendet werden, Stile überschreiben, die basierend auf anderen Selektoren angewendet werden, einschließlich Klassen- und Typselektoren. Da eine ID nur einmal auf einer Seite auftreten kann und ID-Selectoren eine hohe Spezifität haben, ist es vorzuziehen, einem Element eine Klasse hinzuzufügen, anstatt einer ID.

Wenn es der einzige Weg ist, das Element zu targetieren – möglicherweise, weil Sie keinen Zugriff auf das Markup haben und es nicht bearbeiten können – verwenden Sie die ID innerhalb eines [Attributselectors](/de/docs/Web/CSS/Attribute_selectors), wie zum Beispiel `p[id="header"]`.

### Inline-Stile

Inline-Stile, das heißt, die Stil-Deklaration innerhalb eines [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attributs, haben Vorrang vor allen normalen Stilen, unabhängig von der Spezifität. Solche Deklarationen haben keine Selektoren, aber ihre Spezifität kann als 1-0-0-0 gedeutet werden; immer mehr als jedes andere Spezifitätsgewicht, egal wie viele IDs in den Selektoren enthalten sind.

### !important

Es gibt ein spezielles Stück CSS, das Sie verwenden können, um alle oben genannten Berechnungen zu übertroffen, selbst Inline-Stile - das `!important`-Flag. Sie sollten jedoch sehr vorsichtig sein, wenn Sie es verwenden. Dieses Flag wird verwendet, um ein individuelles Eigenschaft-Wert-Paar zur spezifischsten Regel zu machen und die normalen Regeln der Kaskade zu übertreffen, einschließlich normaler Inline-Stile.

> [!NOTE]
> Es ist nützlich zu wissen, dass das `!important`-Flag existiert, damit Sie wissen, was es ist, wenn Sie es im Code anderer Leute sehen. **Allerdings empfehlen wir dringend, dieses nicht zu verwenden, es sei denn, Sie müssen es wirklich tun.** Das `!important`-Flag ändert die Art und Weise, wie die Kaskade normalerweise funktioniert, was das Debuggen von CSS-Problemen wirklich schwer machen kann, vor allem in einem großen Stylesheet.

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

Gehen wir Schritt für Schritt durch, um zu sehen, was passiert – versuchen Sie, einige der Eigenschaften zu entfernen, um zu sehen, was passiert, wenn es schwer nachvollziehbar ist:

1. Sie werden sehen, dass das dritte Regel-Zustimmungs-`background-color` nicht angewendet wurde, aber `color` und `padding` schon. Warum? Eigentlich sollten alle drei sicherlich angewendet werden, weil spätere Regeln in der Quellreihenfolge normalerweise frühere Regeln übersteuern.
2. Wie auch immer, die darüber liegenden Regeln gewinnen, weil Klassenselektoren eine höhere Spezifität haben als Elementselektoren.
3. Beide Elemente haben eine [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) von `better`, aber das 2. hat eine [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) von `winning` dazu. Da IDs eine _noch höhere_ Spezifität als Klassen haben, sollten `red` `background-color` und `1px black` `border` sowohl auf das 2. Element angewendet werden, als dass das erste Element die graue Hintergrundfarbe und keine Umrandung bekommt, wie von der Klasse angegeben.
4. Das 2. Element _bekommt_ die `red` `background-color`, aber keine `border`. Warum? Wegen des `!important`-Flags in der zweiten Regel. Das Hinzufügen des `!important`-Flags nach `border: none` bedeutet, dass diese Deklaration die `border`-Einstellung aus der vorhergehenden Regel gewinnt, auch wenn der ID-Selektor eine höhere Spezifität hat.

> [!NOTE]
> Der einzige Weg, eine wichtige Deklaration zu überschreiben, besteht darin, eine andere wichtige Deklaration mit _derselben Spezifität_ später in der Quellreihenfolge einzufügen oder eine mit höherer Spezifität.

Eine Situation, in der Sie möglicherweise das `!important`-Flag verwenden müssen, ist, wenn Sie an einem CMS arbeiten, bei dem Sie die Kern-CSS-Module nicht bearbeiten können und wirklich einen Inline-Stil oder eine wichtige Deklaration überschreiben möchten, die auf keine andere Weise überschrieben werden kann. Aber wirklich, verwenden Sie es nicht, wenn Sie es vermeiden können.

## Der Effekt des CSS-Standorts

Schließlich, es ist wichtig zu beachten, dass die Vorrangstellung einer CSS-Deklaration davon abhängt, in welchem Stylesheet sie angegeben ist.

Es ist möglich, dass Benutzer benutzerdefinierte Stylesheets festlegen, um die Entwicklerstile zu überschreiben. Zum Beispiel könnte ein sehbehinderter Benutzer die Schriftgröße auf allen Webseiten, die er besucht, doppelt so groß einstellen, um leichter lesen zu können.

### Reihenfolge der Überlagerungserklärungen

Konfliktbeladene Deklarationen werden in der folgenden Reihenfolge angewendet, wobei spätere frühere übersteuern:

1. Deklarationen in Benutzeragenten-Stylesheets (z. B. die Standardeinstellungen des Browsers, die verwendet werden, wenn keine weiteren Stile festgelegt sind).
2. Normale Deklarationen in Benutzer-Stylesheets (benutzerdefinierte Stile, die von einem Benutzer eingestellt werden).
3. Normale Deklarationen in Autor-Stylesheets (das sind die Stile, die wir, die Webentwickler, festlegen).
4. Wichtige Deklarationen in Autor-Stylesheets.
5. Wichtige Deklarationen in Benutzer-Stylesheets.
6. Wichtige Deklarationen in Benutzeragenten-Stylesheets.

> [!NOTE]
> Die Reihenfolge der Vorrangstellung wird für mit `!important` markierte Stile umgekehrt. Es ist sinnvoll, dass die Stylesheets der Webentwickler die Benutzer-Stylesheets überschreiben, damit das Design so bleibt, wie es gedacht ist; allerdings haben Benutzer manchmal gute Gründe, die Stile von Webentwicklern zu überschreiben, wie oben erwähnt, und das kann erreicht werden, indem sie `!important` in ihren Regeln verwenden.

## Testen Sie Ihre Kenntnisse!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige zusätzliche Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen – siehe [Testen Sie Ihre Kenntnisse: Die Kaskade](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade).

## Zusammenfassung

Wenn Sie den größten Teil dieses Artikels verstanden haben, dann gut gemacht – Sie haben begonnen, sich mit den grundlegenden Mechanismen von CSS vertraut zu machen.

Wenn Sie die Kaskade, die Spezifität und die Vererbung nicht vollständig verstanden haben, dann machen Sie sich keine Sorgen! Dies ist definitiv das komplizierteste, das wir bisher in diesem Kurs behandelt haben, und etwas, das sogar erfahrene Webentwickler manchmal schwierig finden. Wir würden empfehlen, dass Sie zu diesem Artikel ein paar Mal zurückkehren, während Sie den Kurs fortsetzen, und weiterhin darüber nachdenken.

Schauen Sie hier zurück, wenn Sie auf seltsame Probleme mit Stilen stoßen, die nicht wie erwartet angewendet werden. Es könnte ein Spezifitätsproblem sein.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics")}}
