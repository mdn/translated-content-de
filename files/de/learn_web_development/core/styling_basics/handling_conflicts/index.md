---
title: Behandlung von Konflikten
slug: Learn_web_development/Core/Styling_basics/Handling_conflicts
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics")}}

Ziel dieser Lektion ist es, Ihr Verständnis für einige der grundlegendsten Konzepte von CSS zu entwickeln – die Kaskade, Spezifität und Vererbung –, die steuern, wie CSS auf HTML angewendet wird und wie Konflikte zwischen Stildeklarationen gelöst werden.

Das Durcharbeiten dieser Lektion mag zunächst weniger relevant und vielleicht etwas akademischer erscheinen als andere Teile des Kurses, aber das Verständnis dieser Konzepte wird Ihnen später viel Ärger ersparen! Wir ermutigen Sie, diesen Abschnitt sorgfältig durchzugehen und sicherzustellen, dass Sie die Konzepte verstehen, bevor Sie fortfahren.

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

## Konfliktierende Regeln

CSS steht für **Cascading Style Sheets**, und dieses erste Wort _kaskadierend_ ist unglaublich wichtig zu verstehen – das Verhalten der Kaskade ist der Schlüssel zum Verständnis von CSS.

Irgendwann werden Sie an einem Projekt arbeiten und feststellen, dass das CSS, von dem Sie dachten, dass es auf ein Element angewendet werden sollte, nicht funktioniert. Oft besteht das Problem darin, dass Sie zwei Regeln erstellen, die unterschiedlichen Werte derselben Eigenschaft auf dasselbe Element anwenden. [**Kaskade**](/de/docs/Web/CSS/CSS_cascade/Cascade) und das eng verwandte Konzept der [**Spezifität**](/de/docs/Web/CSS/CSS_cascade/Specificity) sind Mechanismen, die bestimmen, welche Regel angewendet wird, wenn ein solcher Konflikt besteht. Die Regel, die Ihr Element stylt, ist möglicherweise nicht die, die Sie erwarten, daher müssen Sie verstehen, wie diese Mechanismen funktionieren.

Auch wichtig ist das Konzept der [**Vererbung**](/de/docs/Web/CSS/CSS_cascade/Inheritance), das bedeutet, dass einige CSS-Eigenschaften standardmäßig Werte vom Elternelement des aktuellen Elements erben und einige nicht. Dies kann ebenfalls zu unerwartetem Verhalten führen.

Beginnen wir mit einem kurzen Blick auf die Schlüsselthemen, mit denen wir es zu tun haben, dann werden wir jedes einzeln betrachten und sehen, wie sie miteinander und mit Ihrem CSS interagieren. Diese Konzepte können auf den ersten Blick komplex erscheinen. Mit zunehmender Praxis im Schreiben von CSS wird Ihnen die Funktionsweise jedoch klarer.

### Kaskade

Stylesheets [**kaskadieren**](/de/docs/Web/CSS/CSS_cascade/Cascade) – auf einer sehr einfachen Ebene bedeutet dies, dass der Ursprung und die Reihenfolge von CSS-Regeln eine Rolle spielen. Wenn zwei Regeln gleiche Spezifität haben, wird die zuletzt im Stylesheet definierte Regel verwendet. Es gibt weitere Konzepte, die ebenfalls Einfluss haben, wie [Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers), aber diese sind komplexer und wir werden sie hier nicht im Detail behandeln.

Im folgenden Beispiel haben wir zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der Inhalt von `<h1>` wird schließlich blau gefärbt. Dies liegt daran, dass beide Regeln aus derselben Quelle stammen, denselben Elementselektor haben und daher gleiche Spezifität aufweisen, aber die letzte in der Quellreihenfolge gewinnt.

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

[Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) ist der Algorithmus, den der Browser verwendet, um zu entscheiden, welcher Eigenschaftswert auf ein Element angewendet wird. Wenn mehrere Stilblöcke unterschiedliche Selektoren haben, die dieselbe Eigenschaft mit unterschiedlichen Werten konfigurieren und das gleiche Element anvisieren, bestimmt die Spezifität den Eigenschaftswert, der auf das Element angewendet wird. Spezifität ist im Wesentlichen ein Maß dafür, wie spezifisch die Auswahl eines Selektors sein wird:

- Ein Elementselektor ist weniger spezifisch; er wählt alle Elemente dieses Typs aus, die auf einer Seite erscheinen, daher hat er weniger Gewicht. Pseudoelementsektoren haben dieselbe Spezifität wie reguläre Elementselektoren.
- Ein Klassenselektor ist spezifischer; er wählt nur die Elemente auf einer Seite aus, die einen bestimmten `class`-Attributwert haben, daher hat er mehr Gewicht. Attributselektoren und Pseudoklassen haben dasselbe Gewicht wie eine Klasse.

Im Folgenden haben wir erneut zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der Inhalt von `<h1>` wird unten rot gefärbt, da der Klassenselektor `main-heading` seiner Regel eine höhere Spezifität verleiht. Selbst wenn die Regel mit dem `<h1>`-Elementselektor weiter unten in der Quellreihenfolge erscheint, wird die mit der höheren Spezifität, definiert durch den Klassenselektor, angewendet.

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

Vererbung muss in diesem Zusammenhang ebenfalls verstanden werden – einige CSS-Eigenschaftswerte, die auf Elternelementen gesetzt sind, werden von ihren Kindelementen geerbt, andere nicht.

Zum Beispiel, wenn Sie eine `color` und `font-family` auf ein Element setzen, wird jedes Element darin ebenfalls mit dieser Farbe und Schriftart gestylt, es sei denn, Sie haben ihnen direkt andere Farb- und Schriftwerte zugewiesen.

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

Einige Eigenschaften werden nicht vererbt – zum Beispiel, wenn Sie eine {{cssxref("width")}} von 50% auf ein Element setzen, erhalten alle Nachkommen keine Breite von 50% der Breite ihres Elternteils. Wäre dies der Fall, wäre CSS sehr frustrierend zu verwenden!

> [!NOTE]
> Auf den MDN-CSS-Eigenschaftsreferenzseiten finden Sie ein technisches Informationsfeld namens "Formale Definition", das eine Reihe von Datenpunkten zu dieser Eigenschaft auflistet, einschließlich der Frage, ob sie vererbt wird oder nicht. Siehe den Abschnitt [Formale Definition der Farbeigenschaft](/de/docs/Web/CSS/color#formal_definition) als Beispiel.

### Verständnis, wie die Konzepte zusammenarbeiten

Diese drei Konzepte (Kaskade, Spezifität und Vererbung) bestimmen zusammen, welches CSS auf welches Element angewendet wird. In den folgenden Abschnitten werden wir untersuchen, wie sie zusammenarbeiten. Es kann manchmal ein wenig kompliziert erscheinen, aber Sie werden sie sich merken, wenn Sie mehr Erfahrung mit CSS sammeln, und Sie können die Details jederzeit nachschlagen, wenn Sie sie vergessen! Selbst erfahrene Entwickler erinnern sich nicht immer an alle Details.

## Verständnis der Vererbung

Beginnen wir mit der Vererbung. Im folgenden Beispiel haben wir ein {{HTMLElement("ul")}}-Element mit zwei Ebenen von ungeordneten Listen, die darin verschachtelt sind. Wir haben der äußeren `<ul>` eine Randlinie, ein Padding und eine Schriftfarbe gegeben.

Die `color`-Eigenschaft ist eine geerbte Eigenschaft. Daher wird der `color`-Eigenschaftswert sowohl auf die direkten Kinder als auch auf die indirekten Kinder angewendet – die unmittelbaren `<li>`s und diejenigen innerhalb der ersten verschachtelten Liste. Wir haben dann der zweiten verschachtelten Liste die Klasse `special` hinzugefügt und ihr eine andere Farbe zugewiesen. Diese wird dann an ihre Kinder weitervererbt.

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

Eigenschaften wie `width` (wie zuvor erwähnt), `margin`, `padding` und `border` sind keine geerbten Eigenschaften. Wenn ein Rand in diesem Listbeispiel von den Kindern geerbt würde, würde jede einzelne Liste und jedes Listenelement einen Rand bekommen – wahrscheinlich kein Effekt, den wir jemals wollen würden!

Obwohl jede CSS-Eigenschaftsseite angibt, ob die Eigenschaft vererbt wird oder nicht, können Sie oft dasselbe intuitiv erraten, wenn Sie wissen, welcher Aspekt der Eigenschaftswert gestaltet.

### Steuerung der Vererbung

CSS bietet fünf spezielle universelle Eigenschaftswerte, um die Vererbung zu steuern. Jede CSS-Eigenschaft akzeptiert diese Werte.

- {{cssxref("inherit")}}
  - : Legt den Eigenschaftswert fest, der auf ein ausgewähltes Element angewendet wird, so dass er dem seines Elternelements entspricht. Im Wesentlichen "aktiviert" dies die Vererbung.
- {{cssxref("initial")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf den [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) dieser Eigenschaft.
- {{cssxref("revert")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf die Standardeinstellung des Browsers zurück, anstatt auf die Standardeinstellungen, die auf diese Eigenschaft angewendet werden. Dieser Wert verhält sich in vielen Fällen wie {{cssxref("unset")}}.
- {{cssxref("revert-layer")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf den Wert zurück, der in einer vorherigen [Kaskadenschicht](/de/docs/Web/CSS/@layer) festgelegt wurde.
- {{cssxref("unset")}}
  - : Setzt die Eigenschaft auf ihren natürlichen Wert zurück, was bedeutet, dass, wenn die Eigenschaft normalerweise vererbt wird, sie sich wie `inherit` verhält, andernfalls sich wie `initial`.

> [!NOTE]
> Siehe [Ursprungstypen](/de/docs/Web/CSS/CSS_cascade/Cascade#origin_types) für weitere Informationen zu jedem dieser Werte und wie sie funktionieren.

Wir können uns eine Liste von Links ansehen und erkunden, wie universelle Werte funktionieren. Das Live-Beispiel unten ermöglicht es Ihnen, mit dem CSS zu spielen und zu sehen, was passiert, wenn Sie Änderungen vornehmen. Das Spielen mit Code ist wirklich der beste Weg, um HTML und CSS besser zu verstehen.

Zum Beispiel:

1. Auf das zweite Listenelement wird die Klasse `my-class-1` angewendet. Diese setzt die Farbe des verschachtelten `<a>`-Elements auf `inherit`. Wenn Sie die Regel entfernen, wie ändert sich die Farbe des Links?
2. Verstehen Sie, warum die dritte und vierte Verknüpfung die Farbe hat, die sie hat? Die dritte Verknüpfung ist auf `initial` gesetzt, was bedeutet, dass sie den Anfangswert der Eigenschaft verwendet (in diesem Fall schwarz) und nicht den Standardwert des Browsers für Links, der blau ist. Die vierte ist auf `unset` gesetzt, was bedeutet, dass der Linktext die Farbe des Elternelements, grün, verwendet.
3. Welche der Verknüpfungen wird die Farbe ändern, wenn Sie eine neue Farbe für das `<a>`-Element definieren – zum Beispiel `a { color: red; }`?
4. Lesen Sie den nächsten Abschnitt über das Zurücksetzen aller Eigenschaften und ändern Sie die `color`-Eigenschaft auf `all`. Beachten Sie, wie der zweite Link in einer neuen Zeile steht und ein Aufzählungszeichen hat. Welche Eigenschaften wurden Ihrer Meinung nach vererbt?

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

Die CSS-Abkürzungseigenschaft [`all`](/de/docs/Web/CSS/all) kann verwendet werden, um einen dieser Vererbungswerte auf (fast) alle Eigenschaften gleichzeitig anzuwenden. Sein Wert kann einer der Vererbungswerte (`inherit`, `initial`, `revert`, `revert-layer` oder `unset`) sein. Es ist eine bequeme Möglichkeit, vorgenommenen Stiländerungen rückgängig zu machen, damit Sie wieder zu einem bekannten Ausgangspunkt gelangen, bevor Sie mit neuen Änderungen beginnen.

Im folgenden Beispiel haben wir zwei Zitate. Das erste hat auf das Blockquote-Element selbst angewendete Stile. Das zweite hat eine Klasse auf das Blockquote angewendet, welche den Wert von `all` auf `unset` setzt.

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

Wir verstehen jetzt, dass Vererbung der Grund dafür ist, dass ein tief in der Struktur Ihres HTML verschachtelter Absatz dieselbe Farbe hat wie das CSS, das auf den Körper angewendet wird. Aus den Einführungslektionen haben wir ein Verständnis dafür, wie man das CSS, das auf etwas angewendet wird, an jedem Punkt im Dokument ändern kann – sei es durch Zuweisen von CSS zu einem Element oder durch Erstellen einer Klasse. Wir werden nun untersuchen, wie die Kaskade definiert, welche CSS-Regeln angewendet werden, wenn mehr als ein Stilblock dieselbe Eigenschaft, aber mit unterschiedlichen Werten, auf dasselbe Element anwenden.

Es gibt drei zu berücksichtigende Faktoren, die hier in aufsteigender Reihenfolge der Wichtigkeit aufgelistet sind. Spätere Faktoren übertrumpfen frühere:

1. **Quellreihenfolge**
2. **Spezifität**
3. **Wichtigkeit**

Wir werden uns diese anschauen, um zu sehen, wie Browser genau herausfinden, welches CSS angewendet werden soll.

### Quellreihenfolge

Wir haben bereits gesehen, wie die Quellreihenfolge in der Kaskade eine Rolle spielt. Wenn Sie mehr als eine Regel haben, die genau dasselbe Gewicht hat, gewinnt diejenige, die zuletzt im CSS steht. Sie können dies so verstehen: Die Regel, die sich näher am Element selbst befindet, überschreibt die vorherigen, bis die letzte gewinnt und das Element stylen darf.

Die Quellreihenfolge ist nur wichtig, wenn das Spezifikationsgewicht der Regeln gleich ist, daher lassen Sie uns einen Blick auf die Spezifität werfen:

### Spezifität

Sie werden oft in eine Situation geraten, in der Sie wissen, dass eine Regel weiter unten im Stylesheet steht, aber eine frühere, widersprüchliche Regel angewendet wird. Dies passiert, weil die frühere Regel eine **höhere Spezifität** hat – sie ist spezifischer und wird daher vom Browser als diejenige ausgewählt, die das Element stylen soll.

Wie wir bereits früher in dieser Lektion gesehen haben, hat ein Klassenselektor mehr Gewicht als ein Elementselektor, daher überschreiben die in dem Klassenstilblock definierten Eigenschaften die im Elementstilblock definierten.

Es ist wichtig zu beachten, dass, obwohl wir über Selektoren und die Regeln sprechen, die auf den Text oder die Komponente angewendet werden, die sie auswählen, nicht die gesamte Regel überschrieben wird, sondern nur die Eigenschaften, die an mehreren Stellen erklärt wurden.

Dieses Verhalten hilft, Wiederholungen in Ihrem CSS zu vermeiden. Eine gängige Praxis ist es, allgemeine Stile für die grundlegenden Elemente zu definieren und dann Klassen für diejenigen zu erstellen, die anders sind. Zum Beispiel haben wir im untenstehenden Stylesheet allgemeine Stile für Überschriften der Ebene 2 definiert und dann einige Klassen erstellt, die nur einige der Eigenschaften und Werte ändern. Die anfänglich definierten Werte werden auf alle Überschriften angewendet, dann werden die spezifischeren Werte auf die Überschriften mit den Klassen angewendet.

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

Schauen wir uns jetzt an, wie der Browser die Spezifität berechnet. Wir wissen bereits, dass ein Elementselektor eine niedrige Spezifität hat und durch eine Klasse überschrieben werden kann. Im Wesentlichen wird jedem Selektortyp ein Wert in Punkten zugeordnet, und das Addieren dieser Werte ergibt das Gewicht dieses speziellen Selektors, das dann gegen andere potenzielle Übereinstimmungen bewertet werden kann.

Die Spezifität eines Selektors wird anhand von drei verschiedenen Werten (oder Komponenten) gemessen, die man sich als ID-, KLASSEN- und ELEMENT-Spalten in den Hundertern, Zehnern und Einern vorstellen kann:

- **Identifikatoren**: Vergibt einen Punkt in dieser Spalte für jeden ID-Selektor, der im gesamten Selektor enthalten ist.
- **Klassen**: Vergibt einen Punkt in dieser Spalte für jeden Klassenselektor, Attributselektor oder Pseudoklasse, die im gesamten Selektor enthalten sind.
- **Elemente**: Vergibt einen Punkt in dieser Spalte für jeden Elementselektor oder Pseudoelement, die im gesamten Selektor enthalten sind.

> [!NOTE]
> Der universelle Selektor ([`*`](/de/docs/Web/CSS/Universal_selectors)), [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators) (`+`, `>`, `~`, ' ') und Spezifikationsanpassungsselektor ([`:where()`](/de/docs/Web/CSS/:where)) zusammen mit seinen Parametern, haben keinen Einfluss auf die Spezifität.

Die Negierung ([`:not()`](/de/docs/Web/CSS/:not)), der relationale Selektor ([`:has()`](/de/docs/Web/CSS/:has)), die Matches-Any ([`:is()`](/de/docs/Web/CSS/:is)) Pseudoklassen und [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting/Nesting_and_specificity) selbst tragen nicht zur Spezifität bei, aber ihre Parameter oder verschachtelten Regeln tun es. Das Spezifikationsgewicht, das jeder zum Spezifikationsalgorithmus beiträgt, ist das Spezifikationsgewicht des Selektors im Parameter oder der verschachtelten Regel mit dem größten Gewicht.

Die folgende Tabelle zeigt einige isolierte Beispiele, um Sie in Stimmung zu bringen. Versuchen Sie, diese durchzugehen, und stellen Sie sicher, dass Sie verstehen, warum sie die Spezifität haben, die wir ihnen gegeben haben. Wir haben Selektoren noch nicht im Detail behandelt, aber Sie können Details zu jedem Selektor im MDN [Selektoren-Referenz](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators) finden.

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

Was passiert hier also? Zunächst interessieren uns nur die ersten sieben Regeln dieses Beispiels, und wie Sie bemerken werden, haben wir ihre Spezifitätswerte in einem Kommentar vor jeder Regel mit eingeschlossen.

- Die ersten beiden Selektoren konkurrieren um die Gestaltung der Hintergrundfarbe des Links. Der zweite gewinnt und macht die Hintergrundfarbe blau, weil er einen zusätzlichen ID-Selektor in der Kette hat: Seine Spezifität beträgt 2-0-1 vs. 1-0-1.
- Selektoren 3 und 4 konkurrieren um die Gestaltung der Textfarbe des Links. Der zweite gewinnt und macht den Text weiß, weil er zwar einen weniger Elementselektor hat, aber der fehlende Selektor durch einen Klassenselektor ersetzt wird, der mehr Gewicht hat als eine unendliche Anzahl von Elementselektoren. Die gewinnende Spezifität beträgt 1-1-3 vs. 1-0-4.
- Selektoren 5–7 konkurrieren um die Gestaltung des Rahmens des Links, wenn er gehovt wird. Selektor 6 verliert eindeutig gegenüber Selektor 5 mit einer Spezifität von 0-2-3 vs. 0-2-4; er hat einen weniger Elementselektor in der Kette. Selektor 7 schlägt jedoch sowohl Selektor 5 als auch 6, weil er dieselbe Anzahl von Unterselektoren in der Kette wie Selektor 5 hat, aber ein Element wurde durch einen Klassenselektor ersetzt. Die gewinnende Spezifität ist 0-3-3 vs. 0-2-3 und 0-2-4.

> [!NOTE]
> Jeder Selektortyp hat sein eigenes Spezifikationsniveau, das nicht von Selektoren mit einem niedrigeren Spezifikationsniveau überschrieben werden kann. Zum Beispiel könnten eine _Million_ **Klassen**selektoren kombiniert die Spezifität von _einem_ **ID**-Selektor niemals überschreiben.
>
> Der beste Weg, um die Spezifität zu bewerten, besteht darin, die Spezifikationsniveaus einzeln zu bewerten, beginnend mit dem höchsten und weiter zum niedrigsten, falls erforderlich. Nur wenn es eine Krawatte zwischen Selektorpunkten innerhalb einer Spezifikationssäule gibt, müssen Sie die nächste Spalte nach unten bewerten; andernfalls können Sie die Selektoren mit einer niedrigeren Spezifität ignorieren, da sie die höher spezifizierten Selektoren niemals überschreiben können.

#### IDs versus Klassen

ID-Selektoren haben eine hohe Spezifität. Dies bedeutet, dass Stile, die basierend auf der Übereinstimmung eines ID-Selektors angewendet werden, Stile überregeln, die basierend auf anderen Selektoren wie Klasse und Typ angewendet werden. Da eine ID nur einmal auf einer Seite auftreten kann und aufgrund der hohen Spezifität von ID-Selektoren, ist es vorzuziehen, einer Elementklasse hinzuzufügen, anstatt einer ID.

Wenn die Verwendung der ID der einzige Weg ist, um ein Element anzuvisieren – vielleicht, weil Sie keinen Zugang zum Markup haben und es nicht bearbeiten können – sollten Sie erwägen, die ID innerhalb eines [Attributselektors](/de/docs/Web/CSS/Attribute_selectors) zu verwenden, wie zum Beispiel `p[id="header"]`.

### Inline-Stile

Inline-Stile, d.h. die Stil-Deklaration in einem [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attribut, haben Vorrang vor allen normalen Stilen, unabhängig von der Spezifität. Solche Deklarationen haben keine Selektoren, aber ihre Spezifität kann als 1-0-0-0 angesehen werden; immer mehr als jedes andere Spezifikationsgewicht, egal wie viele IDs in den Selektoren enthalten sind.

### !important

Es gibt ein spezielles Stück CSS, das Sie verwenden können, um alle oben genannten Berechnungen zu überstimmen, sogar Inline-Stile – das `!important`-Flag. Allerdings sollten Sie sehr vorsichtig damit sein. Dieses Flag wird verwendet, um ein spezifisches Eigenschafts-Wert-Paar zur spezifischsten Regel zu machen und damit die normalen Regeln der Kaskade, einschließlich normaler Inline-Stile, zu überstimmen.

> [!NOTE]
> Es ist nützlich zu wissen, dass das `!important`-Flag existiert, damit Sie wissen, was es ist, wenn Sie es im Code anderer Personen sehen. **Allerdings empfehlen wir Ihnen dringend, es nur dann zu verwenden, wenn es absolut notwendig ist.** Das `!important`-Flag ändert die Art und Weise, wie die Kaskade normalerweise funktioniert, und kann es wirklich schwer machen, CSS-Probleme zu debuggen, besonders in einem großen Stylesheet.

Werfen Sie einen Blick auf dieses Beispiel, wo wir zwei Absätze haben, von denen einer eine ID hat.

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

Gehen wir das durch, um zu sehen, was passiert – versuchen Sie einige der Eigenschaften zu entfernen, um zu sehen, was passiert, wenn Sie Schwierigkeiten haben, es zu verstehen:

1. Sie werden sehen, dass die Werte von {{cssxref("color")}} und {{cssxref("padding")}} der dritten Regel angewendet wurden, der Wert für {{cssxref("background-color")}} jedoch nicht. Warum? Eigentlich sollten alle drei sicherlich gelten, denn Regeln weiter unten in der Quellreihenfolge überschreiben in der Regel frühere Regeln.
2. Die Regeln darüber gewinnen jedoch, weil Klassenselektoren eine höhere Spezifität als Elementselektoren haben.
3. Beide Elemente haben eine [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) von `better`, aber das zweite hat zusätzlich eine [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) von `winning`. Da IDs eine _noch höhere_ Spezifität als Klassen haben (man kann nur ein Element mit jeder eindeutigen ID auf einer Seite haben, aber viele Elemente mit derselben Klasse – ID-Selektoren sind _sehr spezifisch_ in dem, was sie anvisieren), sollten die rote Hintergrundfarbe und der 1px schwarze Rahmen beide auf das zweite Element angewendet werden, während das erste Element die graue Hintergrundfarbe und keinen Rahmen bekommt, wie von der Klasse spezifiziert.
4. Das zweite Element _bekommt_ die rote Hintergrundfarbe, aber keinen Rahmen. Warum? Wegen des `!important`-Flags in der zweiten Regel. Das Hinzufügen des `!important`-Flags nach `border: none` bedeutet, dass diese Deklaration den `border`-Wert in der vorhergehenden Regel überstimmen wird, obwohl der ID-Selektor eine höhere Spezifität hat.

> [!NOTE]
> Die einzige Möglichkeit, eine wichtige Deklaration zu überschreiben, besteht darin, eine andere wichtige Deklaration mit _derselben Spezifität_ später in der Quellreihenfolge oder eine mit höherer Spezifität einzuschließen.

Eine Situation, in der Sie möglicherweise das `!important`-Flag verwenden müssen, ist, wenn Sie an einem CMS arbeiten, wo Sie die Kern-CSS-Module nicht bearbeiten können, und Sie wirklich einen Inline-Stil oder eine wichtige Deklaration überschreiben möchten, die auf keine andere Weise überschrieben werden kann. Aber wirklich, verwenden Sie es nicht, wenn es es vermeiden können.

## Der Einfluss der CSS-Position

Schließlich ist es wichtig zu beachten, dass der Vorrang einer CSS-Deklaration davon abhängt, in welchem Stylesheet sie spezifiziert ist.

Es ist möglich, dass Benutzer benutzerdefinierte Stylesheets festlegen, um die Entwicklerstile zu überschreiben. Zum Beispiel möchte ein sehbehinderter Benutzer möglicherweise die Schriftgröße auf allen von ihm besuchten Webseiten auf das Doppelte der normalen Größe einstellen, um das Lesen zu erleichtern.

### Reihenfolge der überschreibenden Deklarationen

Konfliktierende Deklarationen werden in der folgenden Reihenfolge angewendet, wobei spätere Deklarationen frühere überschreiben:

1. Deklarationen in Benutzeragenten-Stylesheets (z. B. die Standardstile des Browsers, die verwendet werden, wenn kein anderer Stil festgelegt ist).
2. Normale Deklarationen in Benutzerstylesheets (benutzerdefinierte Stile, die von einem Benutzer festgelegt werden).
3. Normale Deklarationen in Autorenstylesheets (das sind die Stile, die von uns Webentwicklern festgelegt werden).
4. Wichtige Deklarationen in Autorenstylesheets.
5. Wichtige Deklarationen in Benutzerstylesheets.
6. Wichtige Deklarationen in Benutzeragenten-Stylesheets.

> [!NOTE]
> Die Reihenfolge des Vorrangs ist für Stile, die mit `!important` gekennzeichnet sind, umgekehrt. Es ist sinnvoll, dass Stylesheets von Webentwicklern Benutzerstylesheets überstimmen, damit das Design wie beabsichtigt beibehalten werden kann; jedoch haben Benutzer manchmal gute Gründe, die Stile von Webentwicklern zu überschreiben, wie oben erwähnt, und dies kann durch die Verwendung von `!important` in ihren Regeln erreicht werden.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren – siehe [Testen Sie Ihr Wissen: Die Kaskade](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade).

## Zusammenfassung

Wenn Sie den größten Teil dieses Artikels verstanden haben, dann herzlichen Glückwunsch – Sie haben begonnen, sich mit den grundlegenden Mechanismen von CSS vertraut zu machen.

Wenn Sie die Kaskade, Spezifität und Vererbung nicht vollständig verstanden haben, machen Sie sich keine Sorgen! Dies ist definitiv das komplizierteste Thema, das wir bisher im Kurs behandelt haben und ist etwas, das selbst professionelle Webentwickler manchmal knifflig finden. Wir empfehlen Ihnen, mehrmals zu diesem Artikel zurückzukehren, während Sie den Kurs fortsetzen, und darüber nachzudenken.

Kehren Sie hierhin zurück, wenn Sie auf merkwürdige Probleme mit nicht erwarteten Stilanwendungen stoßen. Es könnte sich um ein Spezifitätsproblem handeln.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics")}}
