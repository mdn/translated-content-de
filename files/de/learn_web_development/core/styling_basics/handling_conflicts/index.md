---
title: Umgang mit Konflikten
slug: Learn_web_development/Core/Styling_basics/Handling_conflicts
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model", "Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade", "Learn_web_development/Core/Styling_basics")}}

Das Ziel dieser Lektion ist es, Ihr Verständnis einiger der grundlegendsten Konzepte von CSS zu entwickeln — die Kaskade, Spezifität und Vererbung — die steuern, wie CSS auf HTML angewendet wird und wie Konflikte zwischen Stil-Deklarationen gelöst werden.

Auch wenn das Durcharbeiten dieser Lektion weniger unmittelbar relevant erscheinen mag und etwas akademischer als andere Teile des Kurses ist, wird Ihnen das Verständnis dieser Konzepte später viel Ärger ersparen! Wir ermutigen Sie, diesen Abschnitt sorgfältig durchzuarbeiten und sicherzustellen, dass Sie die Konzepte verstehen, bevor Sie weitermachen.

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

## Konfliktierende Regeln

CSS steht für **Cascading Style Sheets** (kaskadierende Stilblätter), und dieses erste Wort _kaskadierend_ ist unglaublich wichtig zu verstehen — die Art, wie die Kaskade funktioniert, ist der Schlüssel zum Verständnis von CSS.

Irgendwann werden Sie an einem Projekt arbeiten und feststellen, dass einige CSS-Regeln, von denen Sie denken, dass sie auf ein Element angewendet werden sollten, nicht funktionieren. Oft tritt dieses Problem auf, wenn Sie zwei Regeln erstellen, die unterschiedliche Werte für dieselbe Eigenschaft auf dasselbe Element anwenden.

Die [**Kaskade**](/de/docs/Web/CSS/Guides/Cascade/Introduction) und das eng verwandte Konzept der [**Spezifität**](/de/docs/Web/CSS/Guides/Cascade/Specificity) sind Mechanismen, die steuern, welche Regel angewendet wird, wenn ein solcher Konflikt auftritt. Die Deklaration, die Ihr Element stilisiert, ist möglicherweise nicht die, die Sie erwarten, also müssen Sie verstehen, wie diese Mechanismen funktionieren.

Ebenfalls wichtig ist hier das Konzept der [**Vererbung**](/de/docs/Web/CSS/Guides/Cascade/Inheritance), was bedeutet, dass einige CSS-Eigenschaften standardmäßig Werte erben, die auf das übergeordnete Element des aktuellen Elements gesetzt sind, und einige nicht. Dies kann auch zu unerwartetem Verhalten führen.

Lassen Sie uns zunächst einen kurzen Blick auf die wichtigsten Konzepte werfen, mit denen wir uns befassen, und dann werden wir uns jedes für sich ansehen und sehen, wie sie miteinander und mit Ihrem CSS interagieren. Diese Konzepte können schwierig zu verstehen sein, aber sie werden klarer, je mehr Sie CSS schreiben.

### Kaskade

Stile [**kaskadieren**](/de/docs/Web/CSS/Guides/Cascade/Introduction). Auf einer sehr einfachen Ebene bedeutet dies, dass der Ursprung und die Reihenfolge der CSS-Regeln wichtig sind. Wenn zwei Regeln die gleiche Spezifität haben, wird diejenige verwendet, die zuletzt im Stylesheet definiert ist. Es gibt andere Konzepte, die einen Effekt haben, wie z.B. [Kaskadierungsschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers), aber diese sind fortgeschrittener und wir werden sie hier nicht im Detail behandeln.

Im folgenden Beispiel haben wir zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der Inhalt des `<h1>` wird am Ende blau gefärbt. Dies liegt daran, dass beide Regeln aus derselben Quelle stammen, einen identischen Elementselektor haben und daher die gleiche Spezifität tragen, aber die letzte in der Quellreihenfolge gewinnt.

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

[Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) ist ein Algorithmus, den der Browser verwendet, um zu entscheiden, welcher Eigenschaftswert auf ein Element angewendet wird. Wenn mehrere Regeln unterschiedliche Selektoren haben, die unterschiedliche Werte für dieselbe Eigenschaft festlegen und dasselbe Element ansprechen, entscheidet die Spezifität über den Eigenschaftswert, der auf das Element angewendet wird. Spezifität ist im Wesentlichen ein Maß dafür, wie spezifisch die Auswahl eines Selektors ist:

- Ein Typ- (Element-) Selektor ist weniger spezifisch; er wählt alle Elemente dieses Typs auf einer Seite aus und hat daher weniger Gewicht. Pseudo-Element-Selektoren haben die gleiche Spezifität wie reguläre Elementselektoren.
- Ein Klassenselektor ist spezifischer; er wählt nur die Elemente auf einer Seite aus, die einen bestimmten `class`-Attributwert haben, und hat daher mehr Gewicht. Attributselektoren und Pseudo-Klassen haben dasselbe Gewicht wie eine Klasse.
- Ein ID-Selektor ist noch spezifischer — er wählt nur ein einzelnes Element mit einem bestimmten `id`-Wert aus und hat daher sogar noch mehr Gewicht.

Unten haben wir erneut zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der `<h1>`-Inhalt unten wird rot gefärbt, obwohl die Deklaration `color: blue` später in der Quellreihenfolge erscheint, da der Klassenselektor `main-heading` seiner Regel eine höhere Spezifität verleiht als der Typ-Selektor `h1`. Die Deklaration mit der höheren Spezifität, definiert mit dem Klassenselektor, wird angewendet.

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

Auch die Vererbung muss in diesem Zusammenhang verstanden werden — einige CSS-Eigenschaftswerte, die auf übergeordnete Elemente gesetzt sind, werden von ihren Kind-Elementen geerbt, und einige nicht.

Wenn Sie beispielsweise eine `color` und eine `font-family` für ein Element festlegen, wird jedes Element darin auch mit dieser Farbe und dieser Schriftart gestylt, es sei denn, Sie haben direkt andere Farb- und Schriftwerte angewendet.

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

Einige Eigenschaften werden nicht vererbt — zum Beispiel {{cssxref("width")}}. Wenn Sie eine `width` von `50%` auf ein Element setzen, erhalten alle seine Nachkommen nicht eine Breite von `50%` der Breite ihres Elternteils. Wenn dies der Fall wäre, wäre CSS sehr frustrierend zu verwenden!

> [!NOTE]
> Auf den MDN CSS-Eigenschaftsreferenzseiten finden Sie ein technisches Informationsfeld namens "Formale Definition", das eine Anzahl von Datenpunkten über diese Eigenschaft auflistet, einschließlich ob sie vererbt wird oder nicht. Sehen Sie sich die [Formale Definition des color-Eigenschaft](/de/docs/Web/CSS/Reference/Properties/color#formal_definition) als ein Beispiel an.

### Verstehen, wie die Konzepte zusammenarbeiten

Diese drei Konzepte (Kaskade, Spezifität und Vererbung) steuern zusammen, welche CSS auf welches Element angewendet wird. In den folgenden Abschnitten sehen wir, wie sie zusammenarbeiten. Es kann manchmal ein wenig kompliziert erscheinen, aber Sie werden beginnen, sich bei zunehmender Erfahrung mit CSS an sie zu erinnern, und Sie können die Details jederzeit nachschlagen, wenn Sie sie vergessen! Selbst erfahrene Entwickler erinnern sich nicht an alle Details.

## Verstehen der Vererbung

Wir beginnen mit der Vererbung. Im folgenden Beispiel haben wir ein {{HTMLElement("ul")}}-Element mit zwei Ebenen verschachtelter ungeordneter Listen. Wir haben der äußeren `<ul>` einen Rand, Abstand und Schriftfarbe gegeben.

Die `color`-Eigenschaft ist eine vererbte Eigenschaft. Der Wert der `color`-Eigenschaft wird somit auf die direkten Kinder und auch auf die indirekten Kinder angewendet — die unmittelbaren Kinder `<li>`s und diejenigen innerhalb der ersten verschachtelten Liste. Wir haben dann die Klasse `special` zur zweiten verschachtelten Liste hinzugefügt und eine andere Farbe auf sie angewendet. Diese wird dann durch ihre Kinder geerbt.

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

Eigenschaften wie `width` (wie zuvor erwähnt), `margin`, `padding` und `border` sind keine vererbten Eigenschaften. Wenn in diesem Listenbeispiel ein Rand von den Kindern geerbt werden würde, würde jede einzelne Liste und jedes Listenelement einen Rand erhalten — wahrscheinlich kein Effekt, den wir jemals wollen würden!

Obwohl jede CSS-Eigenschaftsseite angibt, ob die Eigenschaft vererbt wird oder nicht, können Sie oft dasselbe intuitiv erraten, wenn Sie wissen, welchen Aspekt der Eigenschaftswert stilisieren wird.

### Steuerung der Vererbung

CSS bietet fünf spezielle universelle Eigenschaftswerte zur Steuerung der Vererbung. Jede CSS-Eigenschaft akzeptiert diese Werte.

- {{cssxref("inherit")}}
  - : Setzt den Eigenschaftswert auf ein ausgewähltes Element auf den gleichen Wert wie den des übergeordneten Elements. Effektiv "schaltet" dies die Vererbung "ein".
- {{cssxref("initial")}}
  - : Setzt den Eigenschaftswert auf ein ausgewähltes Element auf den [Anfangswert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) dieser Eigenschaft.
- {{cssxref("revert")}}
  - : Setzt den Eigenschaftswert auf ein ausgewähltes Element auf die Standardstilierung des Browsers anstelle der Standards, die auf diese Eigenschaft angewendet werden. Dieser Wert verhält sich in vielen Fällen wie {{cssxref("unset")}}.
- {{cssxref("revert-layer")}}
  - : Setzt den Eigenschaftswert auf ein ausgewähltes Element auf den Wert zurück, der in einer vorherigen [Kaskadierungsschicht](/de/docs/Web/CSS/Reference/At-rules/@layer) festgelegt wurde.
- {{cssxref("unset")}}
  - : Setzt die Eigenschaft auf ihren natürlichen Wert zurück, was bedeutet, dass, wenn die Eigenschaft natürlich vererbt wird, sie wie `inherit` wirkt, andernfalls wirkt sie wie `initial`.

> [!NOTE]
> Sehen Sie sich die [Ursprungstypen](/de/docs/Web/CSS/Guides/Cascade/Introduction#origin_types) für weitere Informationen zu jedem dieser Typen und deren Funktionsweise an.

### Spielen mit Vererbungskontrolleigenschaften

Wir können uns eine Liste von Links ansehen und erkunden, wie universelle Werte funktionieren. Das folgende Live-Beispiel ermöglicht es Ihnen, mit dem CSS zu spielen und zu sehen, was passiert, wenn Sie Änderungen vornehmen. Mit Code zu experimentieren ist wirklich der beste Weg, um HTML und CSS besser zu verstehen.

Zum Beispiel:

1. Das zweite Listenelement hat die Klasse `my-class-1` zugewiesen. Dies setzt die Farbe des darin verschachtelten `<a>`-Elements auf `inherit`. Wenn Sie die Regel entfernen, wie ändert sich die Farbe des Links?
2. Verstehen Sie, warum die dritte und vierte Links die Farbe haben, die sie haben? Der dritte Link ist auf `initial` gesetzt, was bedeutet, dass er den Anfangswert der Eigenschaft verwendet (in diesem Fall Schwarz) und nicht die Standardfarbe des Browsers für Links, die blau ist. Der vierte ist auf `unset` gesetzt, was bedeutet, dass der Linktext die Farbe des Elternelements verwendet, grün.
3. Welche der Links werden die Farbe ändern, wenn Sie eine neue Farbe für das `<a>`-Element definieren — zum Beispiel `a { color: red; }`?
4. Nachdem Sie den nächsten Abschnitt über das Zurücksetzen aller Eigenschaften gelesen haben, kehren Sie zurück und ändern Sie die `color`-Eigenschaft auf `all`. Beachten Sie, wie der zweite Link in einer neuen Zeile ist und eine Aufzählungszeichen hat. Welche Eigenschaften glauben Sie, wurden geerbt?

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

Die CSS-Kurzschreibweise [`all`](/de/docs/Web/CSS/Reference/Properties/all) kann verwendet werden, um einen dieser Verer-tungswerte gleichzeitig auf (fast) alle Eigenschaften anzuwenden. Ihr Wert kann einer der Vererbungswerte sein (`inherit`, `initial`, `revert`, `revert-layer` oder `unset`). Es ist eine bequeme Möglichkeit, Änderungen an Stilen rückgängig zu machen, sodass Sie zu einem bekannten Ausgangspunkt zurückkehren können, bevor Sie mit neuen Änderungen beginnen.

Im folgenden Beispiel haben wir zwei Blockzitate. Das erste hat Stile auf das Blockzit-Element selbst angewendet. Das zweite hat eine Klasse auf das Blockzit angewendet, welches den Wert von `all` auf `unset` setzt.

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

## Verstehen der Kaskade

Wir verstehen nun, dass die Vererbung der Grund dafür ist, warum ein tief in der Struktur Ihres HTML eingebetteter Absatz die gleiche Farbe hat wie das CSS, das auf den `body` angewendet wird. Aus den Einführungskursen haben wir ein Verständnis davon, wie man das auf etwas angewendete CSS jederzeit im Dokument ändern kann — sei es durch Zuweisen von CSS an ein Element oder durch Erstellen einer Klasse. Jetzt werden wir sehen, wie die Kaskade definiert, welche CSS-Regeln angewendet werden, wenn mehr als ein Stilblock dieselbe Eigenschaft, aber mit unterschiedlichen Werten, auf dasselbe Element anwendet.

Es gibt drei Faktoren, die berücksichtigt werden müssen, hier aufgelistet in zunehmender Reihenfolge der Wichtigkeit. Spätere überstimmen frühere:

1. **Quellreihenfolge**
2. **Spezifität**
3. **Wichtigkeit**

Wir werden diese betrachten, um zu sehen, wie Browser genau herausfinden, welche CSS angewendet werden soll.

### Quellreihenfolge

Wir haben bereits gesehen, wie die Quellreihenfolge für die Kaskade von Bedeutung ist. Wenn Sie mehr als eine Regel mit genau gleichem Gewicht haben, gewinnt die, die zuletzt im CSS erscheint. Sie können dies als: Die Regel, die näher am Element selbst ist, überschreibt die früheren, bis die letzte gewinnt und das Element stilisiert.

Die Quellreihenfolge ist nur dann von Bedeutung, wenn das Spezifitätsgewicht der Regeln gleich ist, also schauen wir uns als nächstes die Spezifität an.

### Spezifität

Sie werden oft auf eine Situation stoßen, in der Sie wissen, dass eine Regel später im Stylesheet steht, aber eine frühere, widersprüchliche Regel angewendet wird. Dies passiert, weil die frühere Regel eine **höhere Spezifität** hat — sie ist spezifischer und wird deshalb vom Browser als diejenige ausgewählt, die das Element stilisieren sollte.

Wie wir bereits früher in dieser Lektion gesehen haben, hat ein Klassenselektor mehr Gewicht als ein Elementselektor, sodass die im Klassenstilblock definierten Eigenschaften diejenigen, die im Elementstilblock definiert sind, überschreiben.

Etwas zu beachten ist hier, dass, obwohl wir über Selektoren und die Regeln nachdenken, die auf den Text oder die Komponente angewendet werden, die sie auswählen, nicht die gesamte Regel überschrieben wird, sondern nur die Eigenschaften, die an mehreren Stellen deklariert werden.

Dieses Verhalten hilft, Wiederholungen in Ihrem CSS zu vermeiden. Eine gängige Praxis besteht darin, generische Stile für die grundlegenden Elemente zu definieren und dann Klassen für diejenigen zu erstellen, die anders sind. Zum Beispiel haben wir im folgenden Stylesheet generische Stile für Ebene-2-Überschriften definiert und dann einige Klassen erstellt, die nur einige der Eigenschaften und Werte ändern. Die initial definierten Werte werden auf alle Überschriften angewendet, dann werden die spezifischeren Werte auf die Überschriften mit den Klassen angewendet.

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

Lassen Sie uns nun ansehen, wie der Browser die Spezifität berechnet. Wir wissen bereits, dass ein Elementselektor eine geringe Spezifität hat und von einer Klasse überschrieben werden kann. Im Wesentlichen wird ein Wert in Punkten verschiedenen Arten von Selektoren zugewiesen, und das Addieren dieser Werte ergibt das Gewicht des speziellen Selektors, welches dann gegen andere potenzielle Übereinstimmungen bewertet wird.

Der Grad der Spezifität eines Selektors wird anhand von drei verschiedenen Werten (oder Komponenten) gemessen, die als ID-, CLASS- und ELEMENT-Spalten für Hunderter-, Zehner- und Einerstellen betrachtet werden können:

- **IDs**: Erhalten Sie einen Punkt in dieser Spalte (100 Punkte) für jeden ID-Selektor, der im Gesamtselektor enthalten ist.
- **Klassen**: Erhalten Sie einen Punkt in dieser Spalte (10 Punkte) für jeden Klassen-, Attribut- oder Pseudo-Klassenselektor, der im Gesamtselektor enthalten ist.
- **Elemente**: Erhalten Sie einen Punkt in dieser Spalte (1 Punkt) für jeden Elementselektor oder Pseudo-Element, der im Gesamtselektor enthalten ist.

> [!NOTE]
> Der universelle Selektor ([`*`](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors)), [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators) (`+`, `>`, `~`, ' '), und Spezifitätsanpassungsselektor ([`:where()`](/de/docs/Web/CSS/Reference/Selectors/:where)) zusammen mit seinen Parametern haben keinen Einfluss auf die Spezifität.

Die folgende Tabelle zeigt einige isolierte Beispiele, um Sie in die richtige Stimmung zu bringen. Versuchen Sie, diese durchzugehen, und stellen Sie sicher, dass Sie verstehen, warum sie die Spezifität haben, die wir ihnen gegeben haben. Wir haben Selektoren noch nicht im Detail behandelt, aber Sie können Details zu jedem Selektor im MDN [Selektoren-Referenz](/de/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators) finden.

| Selektor                                  | Identifikatoren | Klassen | Elemente | Gesamte Spezifität |
| ----------------------------------------- | --------------- | ------- | -------- | ------------------ |
| `h1`                                      | 0               | 0       | 1        | 0-0-1              |
| `h1 + p::first-letter`                    | 0               | 0       | 3        | 0-0-3              |
| `li > a[href*="en-US"] > .inline-warning` | 0               | 2       | 2        | 0-2-2              |
| `#identifier`                             | 1               | 0       | 0        | 1-0-0              |

#### Detailliertes Beispiel zur Spezifität

Bevor wir weitermachen, lassen Sie uns ein Beispiel in Aktion ansehen. Vielleicht möchten Sie dies im MDN Playground in einem separaten Tab öffnen, damit Sie es leicht abgleichen können, während Sie die Erklärung lesen.

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

Was passiert hier also? Zunächst sind wir nur an den ersten sieben Regeln in diesem Beispiel interessiert, und wie Sie feststellen werden, haben wir ihre Spezifitätswerte in einem Kommentar vor jeder Regel eingefügt.

- Die ersten beiden Selektoren konkurrieren um die Stilierung der Hintergrundfarbe des Links. Der zweite gewinnt und macht die Hintergrundfarbe blau, weil er einen zusätzlichen ID-Selektor in der Kette hat: Seine Spezifität ist 2-0-1 gegenüber 1-0-1.
- Selektoren 3 und 4 konkurrieren um die Stilierung der Textfarbe des Links. Der zweite gewinnt und macht den Text weiß, obwohl er einen weniger Elementselektor hat, denn der fehlende Selektor wird gegen einen Klassenselektor ausgetauscht, der mehr Gewicht als Elementselektor hat. Die gewinnende Spezifität ist 1-1-3 gegenüber 1-0-4.
- Selektoren 5–7 konkurrieren um die Stilierung des Rahmens des Links bei Hover. Selektor 6 verliert deutlich gegen Selektor 5 mit einer Spezifität von 0-2-3 gegen 0-2-4; es hat einen weniger Elementselektor in der Kette. Selektor 7 schlägt jedoch sowohl Selektor 5 als auch 6, weil er genauso viele Unterselektoren in der Kette hat wie Selektor 5, aber ein Element wurde gegen einen Klassenselektor ausgetauscht. Somit ist die gewinnende Spezifität 0-3-3 gegenüber 0-2-3 und 0-2-4.

> [!NOTE]
> Jeder Selektor-Typ hat seine eigene Spezifitätsstufe, die nicht von Selektoren mit einer niedrigeren Spezifitätsstufe überschrieben werden kann. Zum Beispiel könnte eine _Million_ **Klassen**-Selektoren zusammen nicht die Spezifität eines einzigen **ID**-Selektors überschreiben.
>
> Der beste Weg um Spezifität zu bewerten, besteht darin, die Spezifizitätsstufen individuell zu bewerten, beginnend mit der höchsten und wenn nötig zur niedrigeren weiterzugehen. Nur wenn es eine Krawatte zwischen Selektorenwerten innerhalb einer Spezifizitätssäule gibt, müssen Sie die nächste Säule herunter bewerten; andernfalls können Sie die Selektoren mit niedrigerer Spezifizität ignorieren, da sie die Selektoren mit höherer Spezifizität niemals überschreiben können.

#### IDs gegenüber Klassen

ID-Selektoren haben eine hohe Spezifität. Das bedeutet, dass Stile angewendet werden, die auf einer Übereinstimmung eines ID-Selektors basieren, andere Selektoren, einschließlich Klassen- und Typenselektoren, überstimmen. Da im gesamten Dokument nur eine ID auftreten kann und aufgrund der hohen Spezifität von ID-Selektoren, ist es bevorzugt, einer Elementeine ID hinzuzufügen.

Wenn das Verwenden der ID der einzige Weg ist, das Element zu erreichen — vielleicht weil Sie keinen Zugriff auf das Markup haben und es nicht bearbeiten können — erwägen Sie die Verwendung der ID innerhalb eines [Attributselectors](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors), wie `p[id="header"]`.

### Inline-Stile

Inline-Stile, das heißt die Stil-Deklaration innerhalb eines [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attributs, nehmen Vorrang vor allen normalen Stilen, unabhängig von der Spezifität. Solche Deklarationen haben keine Selektoren, aber ihre Spezifität kann als 1-0-0-0 angesehen werden; immer mehr als jedes andere Spezifitätsgewicht, egal wie viele IDs in den Selektoren sind.

### !important

Es gibt ein spezielles Stück CSS, das Sie verwenden können, um all die obigen Berechnungen, sogar Inline-Stile, zu überstimmen - das `!important`-Flag. Sie sollten jedoch sehr vorsichtig sein, wenn Sie es verwenden. Dieses Flag wird verwendet, um ein einziges Eigenschafts- und Wertepaar zur spezifischsten Regel zu machen und somit die normalen Regeln der Kaskade zu überstimmen, einschließlich normaler Inline-Stile.

> [!NOTE]
> Es ist nützlich zu wissen, dass das `!important`-Flag existiert, damit Sie wissen, was es ist, wenn Sie darauf in fremdem Code stoßen. **Wir empfehlen jedoch dringend, es niemals zu verwenden, es sei denn, Sie müssen es wirklich.** Das `!important`-Flag ändert die Art und Weise, wie die Kaskade normalerweise funktioniert, sodass es das Debuggen von CSS-Problemen wirklich schwer machen kann, besonders in einem großen Stylesheet.

Sehen Sie sich dieses Beispiel an, in dem wir zwei Absätze haben, einer davon mit einer ID.

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

Lassen Sie uns das durchgehen, um zu sehen, was passiert — versuchen Sie einige der Eigenschaften zu entfernen, um zu sehen, was passiert, wenn Sie Schwierigkeiten haben, es zu verstehen:

1. Sie werden sehen, dass die `color` und `padding`-Werte der dritten Regel angewendet wurden, aber die `background-color` nicht. Warum? Eigentlich sollten alle drei sicherlich angewendet werden, weil Regeln später in der Quellreihenfolge in der Regel frühere übersteigern.
2. Die Regeln darüber gewinnen jedoch, weil Klassenselektoren eine höhere Spezifität als Elementselektoren haben.
3. Beide Elemente haben eine Klasse `better`, aber das 2. hat eine ID `winning`. Da IDs eine _noch höhere_ Spezifität als Klassen haben, sollten die `background-color` rot und `border` 1px schwarz beide auf das 2. Element angewendet werden, wobei das erste Element die graue Hintergrundfarbe und keinen Rand gemäß der Klasse erhält.
4. Das 2. Element _bekommt_ die `background-color` rot, aber keinen Rand. Warum? Wegen des `!important`-Flags in der zweiten Regel. Das Hinzufügen des `!important`-Flags nach `border: none` bedeutet, dass diese Deklaration den `border`-Wert in der vorherigen Regel überstimmen wird, obwohl der ID-Selektor eine höhere Spezifität hat.

> [!NOTE]
> Die einzige Möglichkeit, eine wichtige Deklaration zu überstimmen, besteht darin, eine Weitere wichtige Deklaration mit _derselben Spezifität_ später in der Quellreihenfolge oder eine mit höherer Spezifität einzubeziehen.

Eine Situation, in der Sie das `!important`-Flag verwenden müssen, ist, wenn Sie an einem CMS arbeiten, bei dem Sie die Kern-CSS-Module nicht bearbeiten können, und Sie wirklich einen Inline-Stil oder eine wichtige Deklaration übersteuern möchten, die auf keine andere Weise übergangen werden kann. Aber wirklich, benutzen Sie es nicht, wenn Sie es vermeiden können.

## Die Wirkung des CSS-Standorts

Schließlich ist es wichtig zu beachten, dass die Priorität einer CSS-Deklaration davon abhängt, in welchem Stylesheet sie angegeben ist.

Es ist möglich, dass Benutzer benutzerdefinierte Stylesheets festlegen, um die Stile des Entwicklers zu überschreiben. Zum Beispiel könnte ein sehbehinderter Benutzer die Schriftgröße auf allen besuchten Webseiten auf das Doppelte der normalen Größe setzen wollen, um das Lesen zu erleichtern.

### Reihenfolge der übersteuernden Deklarationen

Widersprüchliche Deklarationen werden in der folgenden Reihenfolge angewendet, wobei spätere frühere überstimmen:

1. Deklarationen in User-Agent-Stylesheets (z.B. die Standardstile des Browsers, die verwendet werden, wenn keine anderen Stile festgelegt sind).
2. Normale Deklarationen in Benutzerstylesheets (benutzerdefinierte Stile, die von einem Benutzer festgelegt sind).
3. Normale Deklarationen in Autorstylesheets (dies sind die von uns, den Webentwicklern, festgelegten Stile).
4. Wichtige Deklarationen in Autorstylesheets.
5. Wichtige Deklarationen in Benutzerstylesheets.
6. Wichtige Deklarationen in User-Agent-Stylesheets.

> [!NOTE]
> Die Reihenfolge der Priorität ist für mit `!important` gekennzeichnete Stile umgekehrt. Es macht Sinn, dass die Stylesheets der Webentwickler die Benutzerstylesheets überschreiben, damit das Design wie vorgesehen beibehalten werden kann; jedoch haben Benutzer manchmal gute Gründe, die Stile der Webentwickler zu überschreiben, wie oben erwähnt, und dies kann erreicht werden, indem `!important` in ihren Regeln verwendet wird.

## Zusammenfassung

Wenn Sie den größten Teil dieses Artikels verstanden haben, dann gut gemacht — Sie haben begonnen, sich mit den grundlegenden Mechaniken von CSS vertraut zu machen.

Wenn Sie die Kaskade, die Spezifität und die Vererbung nicht vollständig verstanden haben, dann machen Sie sich keine Sorgen! Dies ist definitiv das komplizierteste, was wir bisher im Kurs behandelt haben und etwas, mit dem sogar professionelle Webentwickler manchmal Schwierigkeiten haben. Wir empfehlen, dass Sie zu diesem Artikel mehrmals zurückkehren, während Sie den Kurs fortsetzen, und weiter darüber nachdenken.

Kommen Sie hierher zurück, wenn Sie auf seltsame Probleme stoßen, bei denen Stile nicht wie erwartet angewendet werden. Es könnte ein Spezifitätsproblem sein. Als nächstes geben wir Ihnen einige Tests, mit denen Sie überprüfen können, wie gut Sie die Informationen, die wir über die Kaskade bereitgestellt haben, verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model", "Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade", "Learn_web_development/Core/Styling_basics")}}
