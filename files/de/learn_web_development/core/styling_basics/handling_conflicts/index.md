---
title: Umgang mit Konflikten
slug: Learn_web_development/Core/Styling_basics/Handling_conflicts
l10n:
  sourceCommit: 95edea913e7f0726243aff3f47b85cfd6f02d995
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics")}}

Das Ziel dieser Lektion ist es, Ihr Verständnis für einige der grundlegendsten Konzepte von CSS zu entwickeln – die Kaskade, Spezifität und Vererbung –, die steuern, wie CSS auf HTML angewendet wird und wie Konflikte zwischen Stildeklarationen gelöst werden.

Während die Bearbeitung dieser Lektion möglicherweise sofort weniger relevant und ein wenig akademischer erscheint als einige andere Teile des Kurses, wird Ihnen das Verständnis dieser Konzepte später viel Ärger ersparen! Wir ermutigen Sie, diesen Abschnitt sorgfältig durchzuarbeiten und zu überprüfen, ob Sie die Konzepte verstehen, bevor Sie fortfahren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (studieren Sie
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

## Widersprüchliche Regeln

CSS steht für **Cascading Style Sheets**, und dieses erste Wort _cascading_ ist unglaublich wichtig zu verstehen – die Art und Weise, wie die Kaskade funktioniert, ist entscheidend, um CSS zu verstehen.

Irgendwann werden Sie an einem Projekt arbeiten und feststellen, dass das CSS, das Ihrer Meinung nach auf ein Element angewendet werden sollte, nicht funktioniert. Oft besteht das Problem darin, dass Sie zwei Regeln erstellen, die unterschiedliche Werte desselben Eigenschafts für dasselbe Element anwenden. [**Kaskade**](/de/docs/Web/CSS/CSS_cascade/Cascade) und das eng verwandte Konzept der [**Spezifität**](/de/docs/Web/CSS/CSS_cascade/Specificity) sind Mechanismen, die steuern, welche Regel bei einem solchen Konflikt angewendet wird. Möglicherweise ist die Regel, die Ihr Element stylt, nicht die, die Sie erwarten, also müssen Sie verstehen, wie diese Mechanismen funktionieren.

Ein weiteres bedeutendes Konzept hier ist die [**Vererbung**](/de/docs/Web/CSS/CSS_cascade/Inheritance), was bedeutet, dass einige CSS-Eigenschaften standardmäßig Werte vom Elternelement des aktuellen Elements erben und andere nicht. Dies kann auch zu Verhalten führen, das Sie möglicherweise nicht erwarten.

Lassen Sie uns zunächst einen kurzen Blick auf die wichtigsten Aspekte werfen, mit denen wir es zu tun haben, dann werden wir uns jeden Einzelnen anschauen und sehen, wie sie miteinander und mit Ihrem CSS interagieren. Diese Konzepte können zunächst schwer zu verstehen sein. Mit zunehmender Praxis im Schreiben von CSS wird Ihnen die Funktionsweise deutlicher werden.

### Kaskade

Stylesheets [**kaskadieren**](/de/docs/Web/CSS/CSS_cascade/Cascade) – auf einer sehr einfachen Ebene bedeutet das, dass der Ursprung und die Reihenfolge von CSS-Regeln wichtig sind. Wenn zwei Regeln dieselbe Spezifität haben, wird die zuletzt im Stylesheet definierte Regel angewendet. Es gibt andere Konzepte, die einen Einfluss haben, wie z.B. [Kaskadenebenen](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers), aber diese sind fortgeschrittener und werden hier nicht im Detail behandelt.

Im folgenden Beispiel haben wir zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der Inhalt des `<h1>`-Elements wird schließlich blau gefärbt. Das liegt daran, dass beide Regeln aus derselben Quelle stammen, einen identischen Elementselektor haben und daher dieselbe Spezifität aufweisen, aber die letzte in der Quellreihenfolge gewinnt.

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

[Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) ist der Algorithmus, den der Browser verwendet, um zu entscheiden, welcher Eigenschaftswert auf ein Element angewendet wird. Wenn mehrere Stilblöcke unterschiedliche Selektoren haben, die dieselbe Eigenschaft mit unterschiedlichen Werten konfigurieren und dasselbe Element anvisieren, entscheidet die Spezifität über den Eigenschaftswert, der auf das Element angewendet wird. Spezifität ist im Grunde ein Maß dafür, wie spezifisch die Auswahl eines Selektors sein wird:

- Ein Elementselektor ist weniger spezifisch; er wählt alle Elemente dieses Typs aus, die auf einer Seite erscheinen, und hat daher weniger Gewicht. Pseudoelement-Selektoren haben die gleiche Spezifität wie reguläre Elementselektoren.
- Ein Klassenselektor ist spezifischer; er wählt nur die Elemente auf einer Seite aus, die einen bestimmten `class`-Attributwert haben, und hat daher mehr Gewicht. Attributselektoren und Pseudoklassen haben das gleiche Gewicht wie eine Klasse.

Unten haben wir erneut zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der Inhalt des `<h1>`-Elements wird schließlich rot gefärbt, da der Klassenselektor `main-heading` seiner Regel eine höhere Spezifität verleiht. Selbst wenn die Regel mit dem `<h1>`-Elementselektor weiter unten in der Quellreihenfolge erscheint, wird die mit der höheren Spezifität, die mit Hilfe des Klassenselektors definiert ist, angewendet.

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

Vererbung muss in diesem Zusammenhang ebenfalls verstanden werden – einige CSS-Eigenschaftswerte, die auf Elternelementen gesetzt sind, werden von ihren Kindelementen geerbt, andere nicht.

Zum Beispiel, wenn Sie eine `color`- und `font-family`-Eigenschaft auf ein Element setzen, wird jedes darin enthaltene Element ebenfalls mit dieser Farbe und Schriftart gestylt, es sei denn, Sie haben direkt andere Farb- und Schriftwerteeigenheiten auf sie angewendet.

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

Einige Eigenschaften werden nicht vererbt – beispielsweise wenn Sie eine {{cssxref("width")}} von 50% auf ein Element setzen, erhalten alle seine Nachfahren nicht automatisch eine Breite von 50% der Breite ihres Elternelements. Wenn dies der Fall wäre, wäre CSS extrem frustrierend in der Anwendung!

> [!NOTE]
> Auf den MDN-Referenzseiten für CSS-Eigenschaften finden Sie ein technisches Informationsfeld namens "Formale Definition", das eine Reihe von Datenpunkten zu dieser Eigenschaft auflistet, einschließlich ob sie vererbt wird oder nicht. Sehen Sie sich den [Abschnitt zur formalen Definition der Farbeigenschaft](/de/docs/Web/CSS/color#formal_definition) als Beispiel an.

### Verstehen, wie die Konzepte zusammenarbeiten

Diese drei Konzepte (Kaskade, Spezifität und Vererbung) bestimmen gemeinsam, welches CSS auf welches Element angewendet wird. In den folgenden Abschnitten werden wir sehen, wie sie zusammenarbeiten. Es kann manchmal etwas kompliziert erscheinen, aber Sie werden beginnen, sich daran zu erinnern, je mehr Erfahrung Sie mit CSS sammeln, und Sie können immer die Details nachschlagen, falls Sie sie vergessen! Selbst erfahrene Entwickler erinnern sich nicht an alle Details.

## Verständnis der Vererbung

Wir beginnen mit der Vererbung. Im folgenden Beispiel haben wir ein {{HTMLElement("ul")}}-Element mit zwei Ebenen verschachtelter ungeordneter Listen darin. Wir haben der äußeren `<ul>`-Liste einen Rahmen, ein Padding und eine Schriftfarbe zugewiesen.

Die `color`-Eigenschaft ist eine vererbte Eigenschaft. Daher wird der Wert der `color`-Eigenschaft auf die direkten Kinder sowie auf die indirekten Kinder angewendet – die unmittelbaren Kind-`<li>`-Elemente und diejenigen innerhalb der ersten verschachtelten Liste. Wir haben dann die Klasse `special` zur zweiten verschachtelten Liste hinzugefügt und eine andere Farbe darauf angewendet. Diese Farbe wird dann durch ihre Kinder geerbt.

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

Eigenschaften wie `width` (wie bereits erwähnt), `margin`, `padding` und `border` sind keine vererbten Eigenschaften. Wenn ein Rahmen in diesem Listenbeispiel von den Kindern geerbt würde, würden jede einzelne Liste und Listenelement einen Rahmen erhalten – wahrscheinlich nicht ein Effekt, den wir jemals wollen würden!

Obwohl auf jeder CSS-Eigenschaftsseite angegeben ist, ob die Eigenschaft vererbt wird oder nicht, können Sie oft das Gleiche intuitiv erraten, wenn Sie wissen, welchen Aspekt der Eigenschaftswert stylen wird.

### Vererbung steuern

CSS bietet fünf spezielle universelle Eigenschaftswerte zur Steuerung der Vererbung. Jede CSS-Eigenschaft akzeptiert diese Werte.

- {{cssxref("inherit")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf den gleichen Wert wie den seines Elternelements. Effektiv "schaltet" dies die Vererbung "ein".
- {{cssxref("initial")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf den [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial-value) dieser Eigenschaft.
- {{cssxref("revert")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf das Standardstyling des Browsers anstelle der auf diese Eigenschaft angewendeten Standardwerte zurück. Dieser Wert verhält sich in vielen Fällen wie {{cssxref("unset")}}.
- {{cssxref("revert-layer")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf den Wert zurück, der in einer vorherigen [Kaskadenschicht](/de/docs/Web/CSS/@layer) festgelegt wurde.
- {{cssxref("unset")}}
  - : Setzt die Eigenschaft auf ihren natürlichen Wert zurück, was bedeutet, dass sie bei einer von Natur aus vererbten Eigenschaft wie `inherit` wirkt, andernfalls wie `initial`.

> [!NOTE]
> Weitere Informationen zu diesen und ihrer Funktionsweise finden Sie unter [Ursprungstypen](/de/docs/Web/CSS/CSS_cascade/Cascade#origin_types).

Wir können uns eine Liste von Links ansehen und erkunden, wie universelle Werte funktionieren. Im folgenden Live-Beispiel können Sie mit dem CSS spielen und sehen, was passiert, wenn Sie Änderungen vornehmen. Das Spielen mit Code ist wirklich der beste Weg, HTML und CSS besser zu verstehen.

Zum Beispiel:

1. Das zweite Listenelement hat die Klasse `my-class-1` angewendet. Dadurch wird die Farbe des verschachtelten `<a>`-Elements auf `inherit` gesetzt. Wenn Sie die Regel entfernen, wie ändert sich die Farbe des Links?
2. Verstehen Sie, warum die dritte und vierte Links die Farbe haben, die sie haben? Der dritte Link ist auf `initial` gesetzt, was bedeutet, dass er den Anfangswert der Eigenschaft verwendet (in diesem Fall schwarz) und nicht den Browserstandard für Links, der blau ist. Der vierte ist auf `unset` gesetzt, was bedeutet, dass der Linktext die Farbe des Elternelements, grün, verwendet.
3. Welche der Links werden die Farbe ändern, wenn Sie eine neue Farbe für das `<a>`-Element definieren – zum Beispiel `a { color: red; }`?
4. Nachdem Sie den nächsten Abschnitt über das Zurücksetzen aller Eigenschaften gelesen haben, kehren Sie zurück und ändern Sie die `color`-Eigenschaft in `all`. Beachten Sie, wie der zweite Link in einer neuen Zeile steht und ein Punkt hat. Welche Eigenschaften denken Sie, wurden vererbt?

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

Die CSS-Kurzschreibweise [`all`](/de/docs/Web/CSS/all) kann verwendet werden, um einen dieser Vererbungswerte auf (fast) alle Eigenschaften gleichzeitig anzuwenden. Sein Wert kann einer der Vererbungswerte sein (`inherit`, `initial`, `revert`, `revert-layer`, oder `unset`). Es ist eine bequeme Methode, um Änderungen der Stile rückgängig zu machen, um zu einem bekannten Ausgangspunkt zurückzukehren, bevor neue Änderungen begonnen werden.

Im folgenden Beispiel haben wir zwei Blockzitate. Das erste hat ein Styling, das auf das Blockquote-Element selbst angewendet wird. Das zweite hat eine Klasse, die auf das Blockquote angewendet ist und den Wert von `all` auf `unset` setzt.

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

Versuchen Sie, den Wert von `all` auf einige der anderen verfügbaren Werte zu setzen und beobachten Sie die Unterschiede.

## Verständnis der Kaskade

Wir verstehen nun, dass Vererbung der Grund ist, warum ein tief verschachtelter Absatz in Ihrer HTML-Struktur dieselbe Farbe wie das auf den `body` angewendete CSS hat. Aus den einführenden Lektionen haben wir ein Verständnis dafür, wie man das auf etwas angewendete CSS an jeder Stelle im Dokument ändern kann – sei es durch Zuordnung von CSS zu einem Element oder durch Erstellung einer Klasse. Wir werden nun darauf eingehen, wie die Kaskade definiert, welche CSS-Regeln angewendet werden, wenn mehr als ein Stilblock dieselbe Eigenschaft mit unterschiedlichen Werten auf dasselbe Element anwendet.

Es gibt drei Faktoren zu berücksichtigen, die hier in aufsteigender Reihenfolge der Wichtigkeit aufgeführt sind. Spätere übertrumpfen frühere:

1. **Quellreihenfolge**
2. **Spezifität**
3. **Wichtigkeit**

Wir werden uns diese ansehen, um zu verstehen, wie Browser genau herausfinden, welches CSS angewendet werden soll.

### Quellreihenfolge

Wir haben bereits gesehen, dass die Quellreihenfolge für die Kaskade wichtig ist. Wenn Sie mehr als eine Regel haben, die alle genau dasselbe Gewicht haben, dann gewinnt diejenige, die zuletzt im CSS kommt. Sie können dies als: Die Regel, die näher am Element selbst ist, überschreibt die früheren, bis die letzte gewinnt und das Element stylt.

Die Quellreihenfolge spielt nur eine Rolle, wenn das Spezifitätsgewicht der Regeln gleich ist, daher schauen wir uns als nächstes die Spezifität an:

### Spezifität

Oft befinden Sie sich in einer Situation, in der Sie wissen, dass eine Regel später im Stylesheet kommt, aber eine frühere, widersprüchliche Regel angewendet wird. Dies geschieht, weil die frühere Regel eine **höhere Spezifität** hat – sie ist spezifischer und wird daher vom Browser als diejenige ausgewählt, die das Element stylen sollte.

Wie wir früher in dieser Lektion gesehen haben, hat ein Klassenselektor mehr Gewicht als ein Elementselektor, sodass die in dem Klassenstilblock definierten Eigenschaften die überschreiben, die im Elementstilblock definiert sind.

Es ist wichtig darauf hinzuweisen, dass obwohl wir über Selektoren und die Regeln denken, die auf den ausgewählten Text oder das ausgewählte Element angewendet werden, nicht die gesamte Regel überschrieben wird, sondern nur die Eigenschaften, die an mehreren Stellen deklariert sind.

Dieses Verhalten hilft, Wiederholungen in Ihrem CSS zu vermeiden. Eine gängige Praxis ist es, generische Stile für die grundlegenden Elemente zu definieren und dann Klassen für diejenigen zu erstellen, die anders sind. Im folgenden Stylesheet haben wir generische Stile für Überschriften der Ebene 2 definiert und dann einige Klassen erstellt, die nur einige der Eigenschaften und Werte ändern. Die anfangs definierten Werte werden auf alle Überschriften angewendet, dann werden die spezifischeren Werte auf die Überschriften mit den Klassen angewendet.

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

Schauen wir uns nun an, wie der Browser die Spezifität berechnet. Wir wissen bereits, dass ein Elementselektor eine niedrige Spezifität hat und von einer Klasse überschrieben werden kann. Im Wesentlichen wird eine Punktzahl für verschiedene Arten von Selektoren vergeben, und durch Addition dieser Punktzahlen erhalten Sie das Gewicht dieses bestimmten Selektors, das dann im Vergleich zu anderen potenziellen Übereinstimmungen bewertet werden kann.

Der Grad an Spezifität eines Selektors wird anhand von drei unterschiedlichen Werten (oder Komponenten) gemessen, die man sich als ID-, KLASSEN- und ELEMENT-Spalten vorstellen kann, in Hunderter-, Zehner- und Einerstellen:

- **Identifikatoren**: Vergeben Sie einen Punkt in dieser Spalte für jeden ID-Selektor, der innerhalb des gesamten Selektors enthalten ist.
- **Klassen**: Vergeben Sie einen Punkt in dieser Spalte für jeden Klassen-, Attribut- oder Pseudoklassen-Selektor im gesamten Selektor.
- **Elemente**: Vergeben Sie einen Punkt in dieser Spalte für jeden Elementselektor oder Pseudoelement im gesamten Selektor.

> [!NOTE]
> Der universelle Selektor ([`*`](/de/docs/Web/CSS/Universal_selectors)), [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators) (`+`, `>`, `~`, ' '), und der Spezifitätsanpassungsselektor ([`:where()`](/de/docs/Web/CSS/:where)) zusammen mit seinen Parametern haben keinen Einfluss auf die Spezifität.

Die Negation ([`:not()`](/de/docs/Web/CSS/:not)), der relationale Selektor ([`:has()`](/de/docs/Web/CSS/:has)), die Matches-any ([`:is()`](/de/docs/Web/CSS/:is)) Pseudoklassen und [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting/Nesting_and_specificity) selbst tragen nicht zur Spezifität bei, jedoch tun dies ihre Parameter oder verschachtelten Regeln. Das Spezifitätsgewicht, das jeder in den Spezifitätsalgorithmus einbringt, ist das Spezifitätsgewicht des Selektors im Parameter oder der verschachtelten Regel mit dem höchsten Gewicht.

Die folgende Tabelle zeigt einige isolierte Beispiele, um in Stimmung zu kommen. Versuchen Sie, diese durchzugehen, und stellen Sie sicher, dass Sie verstehen, warum sie die Spezifität haben, die wir ihnen gegeben haben. Wir haben Selektoren noch nicht im Detail behandelt, aber Sie können Details zu jedem Selektor im MDN [selectors reference](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators) finden.

| Selektor                                  | Identifikatoren | Klassen | Elemente | Gesamtspezifität |
| ----------------------------------------- | --------------- | ------- | -------- | ---------------- |
| `h1`                                      | 0               | 0       | 1        | 0-0-1            |
| `h1 + p::first-letter`                    | 0               | 0       | 3        | 0-0-3            |
| `li > a[href*="en-US"] > .inline-warning` | 0               | 2       | 2        | 0-2-2            |
| `#identifier`                             | 1               | 0       | 0        | 1-0-0            |
| `button:not(#mainBtn, .cta`)              | 1               | 0       | 1        | 1-0-1            |

Bevor wir fortfahren, schauen wir uns ein Beispiel in Aktion an.

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

Was passiert hier? Zuerst interessieren wir uns nur für die ersten sieben Regeln dieses Beispiels, und wie Sie bemerken werden, haben wir die Spezifitätswerte in einem Kommentar vor jeder Regel hinzugefügt.

- Die ersten beiden Selektoren konkurrieren um das Styling der Hintergrundfarbe des Links. Der zweite gewinnt und macht die Hintergrundfarbe blau, da er einen zusätzlichen ID-Selektor in der Kette hat: seine Spezifität ist 2-0-1 gegen 1-0-1.
- Selektoren 3 und 4 konkurrieren um das Styling der Textfarbe des Links. Der zweite gewinnt und macht den Text weiß, da er zwar einen Elementselektor weniger hat, aber der fehlende Selektor gegen einen Klassenselektor ausgetauscht wird, der mehr Gewicht hat als eine unendliche Anzahl von Elementselektoren. Die gewinnende Spezifität ist 1-1-3 gegenüber 1-0-4.
- Selektoren 5–7 konkurrieren um das Styling der Umrandung des Links beim Hover. Selektor 6 verliert klar gegen Selektor 5 mit einer Spezifität von 0-2-3 gegen 0-2-4; er hat einen Elementselektor weniger in der Kette. Selektor 7 schlägt jedoch sowohl Selektor 5 als auch 6, da er die gleiche Anzahl von Unterselektoren in der Kette wie Selektor 5 hat, aber ein Element gegen einen Klassenselektor ausgetauscht wurde. Die gewinnende Spezifität beträgt 0-3-3 gegenüber 0-2-3 und 0-2-4.

> [!NOTE]
> Jeder Selektortyp hat sein eigenes Spezifitätsniveau, das von Selektoren mit einem niedrigeren Spezifitätsniveau nicht überschrieben werden kann. Zum Beispiel könnten eine _Million_ **Klassen**-Selektoren zusammen nicht die Spezifität eines einzigen **ID**-Selectors überschreiben.
>
> Der beste Weg, um Spezifität zu bewerten, besteht darin, die Spezifitätsstufen einzeln zu bewerten, beginnend mit der höchsten und weiter zur niedrigsten, wenn nötig. Nur wenn es einen Gleichstand zwischen den Selektorenpunkten in einer Spezifitätssäule gibt, müssen Sie die nächste Säule nach unten bewerten; Andernfalls können Sie die niedrigeren Spezifitätsselektoren vernachlässigen, da diese niemals die höheren Spezifitätsselektoren überschreiben können.

#### IDs versus Klassen

ID-Selektoren haben eine hohe Spezifität. Das bedeutet, dass auf Stilen angewendete Regeln, die auf einem ID-Selektor basieren, Stile, die auf anderen Selektoren basieren, einschließlich Klassen- und Typselektoren, überschreiben werden. Da eine ID nur einmal auf einer Seite auftreten kann und wegen der hohen Spezifität von ID-Selektoren ist es vorzuziehen, einer Klasse ein Element hinzuzufügen anstelle einer ID.

Wenn die Verwendung der ID die einzige Möglichkeit ist, das Element anzusprechen – vielleicht, weil Sie keinen Zugang zum Markup haben und es nicht bearbeiten können – überlegen Sie, ob Sie die ID innerhalb eines [Attributselektors](/de/docs/Web/CSS/Attribute_selectors) verwenden, wie `p[id="header"]`.

### Inline-Stile

Inline-Stile, das heißt die Stilerklärung innerhalb eines [`style`](/de/docs/Web/HTML/Global_attributes/style)-Attributs, haben Vorrang vor allen normalen Stilen, egal wie hoch die Spezifität. Solche Erklärungen haben keine Selektoren, aber ihre Spezifität kann als 1-0-0-0 betrachtet werden; immer mehr als jedes andere Spezifitätsgewicht, egal wie viele IDs in den Selektoren vorhanden sind.

### !important

Es gibt ein spezielles Stück CSS, das Sie verwenden können, um alle oben genannten Berechnungen zu überstimmen, sogar Inline-Stile – das `!important`-Flag. Sie sollten jedoch sehr vorsichtig sein, während Sie es verwenden. Dieses Flag wird verwendet, um ein individuelles Eigenschaft-Wert-Paar zur spezifischsten Regel zu machen und somit die normalen Regeln der Kaskade, einschließlich normaler Inline-Stile, zu überschreiben.

> [!NOTE]
> Es ist nützlich zu wissen, dass es das `!important`-Flag gibt, damit Sie wissen, was es ist, wenn Sie darauf im Code anderer Leute stoßen. **Wir empfehlen jedoch dringend, es niemals zu verwenden, es sei denn, Sie müssen unbedingt.** Das `!important`-Flag ändert die Art und Weise, wie die Kaskade normalerweise funktioniert, sodass es die Fehlersuche bei CSS-Problemen wirklich schwierig machen kann, insbesondere in einem großen Stylesheet.

Werfen Sie einen Blick auf dieses Beispiel, in dem wir zwei Absätze haben, von denen einer eine ID hat.

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

Lassen Sie uns das durchgehen, um zu sehen, was passiert – versuchen Sie, einige der Eigenschaften zu entfernen, um zu sehen, was passiert, wenn Sie Schwierigkeiten haben, es zu verstehen:

1. Sie werden sehen, dass die `color`- und die `padding`-Werte der dritten Regel angewendet wurden, jedoch nicht die `background-color`. Warum? Tatsächlich sollten alle drei, weil Regeln, die später in der Quellreihenfolge stehen, in der Regel frühere Regeln überschreiben.
2. Die Regeln darüber gewinnen jedoch, weil Klassenselektoren eine höhere Spezifität als Elementselektoren haben.
3. Beide Elemente haben eine [`class`](/de/docs/Web/HTML/Global_attributes/class) von `better`, aber das zweite hat auch eine [`id`](/de/docs/Web/HTML/Global_attributes/id) von `winning`. Da IDs eine _noch höhere_ Spezifität als Klassen haben (Sie können nur ein Element mit jeder eindeutigen ID auf einer Seite haben, aber viele Elemente mit der gleichen Klasse – ID-Selektoren _sehr spezifisch_ in dem, was sie ansprechen), sollten die rote Hintergrundfarbe und der 1px schwarze Rand auf das zweite Element angewendet werden, wobei das erste Element die graue Hintergrundfarbe und keinen Rand gemäß der Klasse erhält.
4. Das zweite Element _erhält_ die rote Hintergrundfarbe, aber keinen Rand. Warum? Wegen dem `!important`-Flag in der zweiten Regel. Das Hinzufügen des `!important`-Flags nach `border: none` bedeutet, dass diese Erklärung den `border`-Wert in der vorherigen Regel überschreiben wird, obwohl der ID-Selektor eine höhere Spezifität hat.

> [!NOTE]
> Die einzige Möglichkeit, eine wichtige Deklaration zu überschreiben, besteht darin, eine andere wichtige Deklaration mit derselben Spezifität später in der Quellreihenfolge einzuschließen, oder eine mit höherer Spezifität.

Ein Szenario, in dem Sie möglicherweise das `!important`-Flag verwenden müssen, ist, wenn Sie an einem CMS arbeiten, in dem Sie die Kern-CSS-Module nicht bearbeiten können und Sie wirklich einen Inline-Stil oder eine wichtige Deklaration überschreiben müssen, die auf keinen anderen Weg überschrieben werden kann. Aber wirklich, verwenden Sie es nicht, wenn Sie es vermeiden können.

## Der Effekt des CSS-Standorts

Schließlich ist es wichtig zu beachten, dass die Priorität einer CSS-Deklaration davon abhängt, in welchem Stylesheet sie spezifiziert ist.

Es ist möglich, dass Nutzer benutzerdefinierte Stylesheets festlegen, um die Stile der Entwickler zu überschreiben. Zum Beispiel könnte ein visuell eingeschränkter Benutzer die Schriftgröße auf allen von ihm besuchten Webseiten auf die doppelte normale Größe festlegen, um das Lesen leichter zu machen.

### Reihenfolge der überschneidenden Deklarationen

Widersprüchliche Deklarationen werden in der folgenden Reihenfolge angewendet, wobei spätere frühere überschreiben:

1. Deklarationen in Nutzer-Agent-Stylesheets (z.B. die Standardstile des Browsers, die verwendet werden, wenn keine anderen Stile festgelegt sind).
2. Normale Deklarationen in Nutzer-Stylesheets (benutzerdefinierte Stile, die von einem Nutzer festgelegt werden).
3. Normale Deklarationen in Autor-Stylesheets (das sind die von uns, den Webentwicklern, festgelegten Stile).
4. Wichtige Deklarationen in Autor-Stylesheets.
5. Wichtige Deklarationen in Nutzer-Stylesheets.
6. Wichtige Deklarationen in Nutzer-Agent-Stylesheets.

> [!NOTE]
> Die Rangfolge ist für mit `!important` gekennzeichnete Stile umgekehrt. Es macht Sinn, dass die Stylesheets der Webentwickler die Benutzereinstellungen überschreiben, damit das Design wie beabsichtigt bleibt; jedoch haben Benutzer manchmal gute Gründe, die Stile der Webentwickler zu überschreiben, wie oben erwähnt, und dies kann durch die Verwendung von `!important` in ihren Regeln erreicht werden.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren – siehe [Testen Sie Ihre Fähigkeiten: Die Kaskade](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_tasks).

## Zusammenfassung

Wenn Sie den größten Teil dieses Artikels verstanden haben, dann herzlichen Glückwunsch – Sie haben begonnen, sich mit den grundlegenden Mechanismen von CSS vertraut zu machen.

Wenn Sie die Kaskade, die Spezifität und die Vererbung nicht vollständig verstanden haben, machen Sie sich keine Sorgen! Dies ist definitiv das komplizierteste Thema, das wir bisher im Kurs behandelt haben und etwas, das selbst professionelle Webentwickler manchmal schwierig finden. Wir empfehlen Ihnen, zu diesem Artikel mehrmals zurückzukehren, während Sie den Kurs fortsetzen, und immer daran zu denken.

Greifen Sie hierauf zurück, wenn Sie auf merkwürdige Probleme mit Stilen stoßen, die nicht wie erwartet angewendet werden. Es könnte sich um ein Spezifitätsproblem handeln.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics")}}
