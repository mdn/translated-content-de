---
title: Konflikte handhaben
slug: Learn_web_development/Core/Styling_basics/Handling_conflicts
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics")}}

Das Ziel dieser Lektion ist es, Ihr Verständnis für einige der grundlegendsten Konzepte von CSS zu entwickeln: die Kaskade, Spezifität und Vererbung, die steuern, wie CSS auf HTML angewendet wird und wie Konflikte zwischen Stil-Deklarationen gelöst werden.

Auch wenn das Durcharbeiten dieser Lektion zunächst weniger unmittelbar relevant und etwas akademischer erscheinen mag als einige andere Teile des Kurses, wird Ihnen das Verständnis dieser Konzepte später viel Ärger ersparen! Wir empfehlen Ihnen, diesen Abschnitt sorgfältig zu bearbeiten und sicherzustellen, dass Sie die Konzepte verstanden haben, bevor Sie weitermachen.

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
          <li>Die Hauptkonzepte, die das Ergebnis von Konflikten bestimmen — Spezifität, Quellordnung und Wichtigkeit.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Konfliktierende Regeln

CSS steht für **Cascading Style Sheets** und dieses erste Wort _kaskadierend_ ist unglaublich wichtig zu verstehen — das Verhalten der Kaskade ist der Schlüssel zum Verständnis von CSS.

Irgendwann werden Sie an einem Projekt arbeiten und feststellen, dass das CSS, das Sie dachten, auf ein Element angewendet werden sollte, nicht funktioniert. Oft besteht das Problem darin, dass Sie zwei Regeln erstellen, die unterschiedliche Werte derselben Eigenschaft auf dasselbe Element anwenden. [**Kaskade**](/de/docs/Web/CSS/Cascade) und das eng verwandte Konzept der [**Spezifität**](/de/docs/Web/CSS/Specificity) sind Mechanismen, die kontrollieren, welche Regel bei einem solchen Konflikt gilt. Die Regel, die Ihr Element stylt, ist möglicherweise nicht die, die Sie erwarten, daher müssen Sie verstehen, wie diese Mechanismen funktionieren.

Wichtig ist hier auch das Konzept der [**Vererbung**](/de/docs/Web/CSS/Inheritance), was bedeutet, dass einige CSS-Eigenschaften standardmäßig Werte erben, die auf dem übergeordneten Element des aktuellen Elements festgelegt sind, und einige nicht. Dies kann auch zu einem Verhalten führen, das Sie möglicherweise nicht erwarten.

Lassen Sie uns mit einem kurzen Blick auf die wichtigsten Dinge beginnen, mit denen wir es zu tun haben, und dann jede einzeln betrachten und sehen, wie sie mit Ihren CSS zusammenarbeiten. Diese können wie ein schwieriges Set von Konzepten erscheinen, um sie zu verstehen. Wenn Sie mehr Übung im Schreiben von CSS bekommen, wird die Funktionsweise offensichtlicher für Sie.

### Kaskade

Stylesheets [**kaskadieren**](/de/docs/Web/CSS/Cascade) — auf einer sehr einfachen Ebene bedeutet dies, dass der Ursprung, die Kaskadenschicht und die Reihenfolge der CSS-Regeln eine Rolle spielen. Wenn zwei Regeln die gleiche Spezifität haben, wird diejenige, die zuletzt im Stylesheet definiert ist, verwendet.

Im folgenden Beispiel haben wir zwei Regeln, die auf das `<h1>` Element angewendet werden könnten. Der `<h1>`-Inhalt wird blau gefärbt. Dies liegt daran, dass beide Regeln aus derselben Quelle stammen, einen identischen Element-Selektor haben und daher die gleiche Spezifität tragen, aber die letzte in der Quellreihenfolge gewinnt.

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

[Spezifität](/de/docs/Web/CSS/Specificity) ist der Algorithmus, den der Browser verwendet, um zu entscheiden, welcher Eigenschaftswert auf ein Element angewendet wird. Wenn mehrere Stilblöcke unterschiedliche Selektoren haben, die dieselbe Eigenschaft mit unterschiedlichen Werten konfigurieren und dasselbe Element anvisieren, entscheidet die Spezifität, welcher Eigenschaftswert auf das Element angewendet wird. Spezifität ist im Wesentlichen ein Maß dafür, wie spezifisch die Auswahl eines Selektors sein wird:

- Ein Element-Selektor ist weniger spezifisch; er wird alle Elemente dieses Typs auf einer Seite auswählen und hat daher weniger Gewicht. Pseudoelement-Selektoren haben die gleiche Spezifität wie normale Element-Selektoren.
- Ein Klassen-Selektor ist spezifischer; er wählt nur die Elemente auf einer Seite aus, die einen bestimmten `class` Attributwert haben, und hat daher mehr Gewicht. Attribut-Selektoren und Pseudoklassen haben das gleiche Gewicht wie eine Klasse.

Unten haben wir wieder zwei Regeln, die auf das `<h1>` Element angewendet werden könnten. Der `<h1>`-Inhalt unten wird rot gefärbt, da der Klassen-Selektor `main-heading` seiner Regel eine höhere Spezifität verleiht. Auch wenn die Regel mit dem `<h1>` Element-Selektor weiter unten in der Quellreihenfolge erscheint, wird die mit der höheren Spezifität, die den Klassen-Selektor verwendet, angewendet.

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

Wir werden den Spezifikationsalgorithmus später erklären.

### Vererbung

Vererbung muss auch in diesem Kontext verstanden werden — einige CSS-Eigenschaftswerte, die auf übergeordneten Elementen festgelegt sind, werden von ihren Kind-Elementen geerbt, andere nicht.

Wenn Sie beispielsweise eine `color` und `font-family` auf einem Element festlegen, wird jedes Element darin ebenfalls mit dieser Farbe und Schriftart gestylt, es sei denn, Sie haben direkt andere Farb- und Schriftwerte auf sie angewendet.

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

Einige Eigenschaften werden nicht vererbt — beispielsweise, wenn Sie eine {{cssxref("width")}} von 50 % auf ein Element festlegen, erhalten nicht alle seine Nachkommen eine Breite von 50 % der Breite ihres übergeordneten Elements. Wenn dies der Fall wäre, wäre CSS sehr frustrierend zu verwenden!

> [!NOTE]
> Auf MDN CSS-Eigenschaftsreferenzseiten können Sie einen technischen Informationskasten namens "Formale Definition" finden, der eine Reihe von Datenpunkten zu dieser Eigenschaft auflistet, einschließlich, ob sie vererbt wird oder nicht. Sehen Sie sich den [color property Formal definition section](/de/docs/Web/CSS/color#formal_definition) als Beispiel an.

### Verstehen, wie die Konzepte zusammenarbeiten

Diese drei Konzepte (Kaskade, Spezifität und Vererbung) zusammen steuern, welche CSS auf welches Element angewendet wird. In den unten stehenden Abschnitten werden wir sehen, wie sie zusammenarbeiten. Es kann manchmal etwas kompliziert erscheinen, aber Sie werden sich daran erinnern, je mehr Erfahrung Sie mit CSS sammeln, und Sie können die Details immer nachschlagen, falls Sie sie vergessen! Auch erfahrene Entwickler erinnern sich nicht an alle Details.

## Verstehen der Vererbung

Wir beginnen mit der Vererbung. Im folgenden Beispiel haben wir ein {{HTMLElement("ul")}} Element mit zwei Ebenen von verschachtelten ungeordneten Listen darin. Wir haben der äußeren `<ul>` eine Umrandung, Auffüllung und Schriftfarbe gegeben.

Die `color` Eigenschaft ist eine vererbte Eigenschaft. Daher wird der Wert der `color` Eigenschaft auf die direkten und auch auf die indirekten Kinder angewendet — die unmittelbaren Kind `<li>`s und diejenigen innerhalb der ersten verschachtelten Liste. Wir haben dann die Klasse `special` zur zweiten verschachtelten Liste hinzugefügt und eine andere Farbe darauf angewendet. Diese wird dann durch ihre Kinder vererbt.

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

Eigenschaften wie `width` (wie bereits erwähnt), `margin`, `padding` und `border` sind keine vererbten Eigenschaften. Wenn eine Umrandung bei den Kindern in diesem Liste-Beispiel vererbt würde, würde jede einzelne Liste und Listenelement eine Umrandung erhalten — wahrscheinlich nicht ein Effekt, den wir jemals wollen würden!

Auch wenn auf jeder CSS-Eigenschaftsseite aufgelistet ist, ob die Eigenschaft vererbt wird oder nicht, können Sie dies oft intuitiv erraten, wenn Sie wissen, welchen Aspekt der Eigenschaftswert stilisiert.

### Kontrolle der Vererbung

CSS bietet fünf spezielle universelle Eigenschaftswerte zur Kontrolle der Vererbung. Jede CSS-Eigenschaft akzeptiert diese Werte.

- {{cssxref("inherit")}}
  - : Setzt den auf ein ausgewähltes Element angewendeten Eigenschaftswert auf den des übergeordneten Elements. Effektiv schaltet dies die Vererbung ein.
- {{cssxref("initial")}}
  - : Setzt den auf ein ausgewähltes Element angewendeten Eigenschaftswert auf den [anfänglichen Wert](/de/docs/Web/CSS/initial_value) dieser Eigenschaft.
- {{cssxref("revert")}}
  - : Setzt den auf ein ausgewähltes Element angewendeten Eigenschaftswert auf das Standard-Styling des Browsers zurück, anstatt auf die Standards, die auf diese Eigenschaft angewendet werden. Dieser Wert verhält sich in vielen Fällen wie {{cssxref("unset")}}.
- {{cssxref("revert-layer")}}
  - : Setzt den auf ein ausgewähltes Element angewendeten Eigenschaftswert auf den in einer vorherigen [Kaskadenschicht](/de/docs/Web/CSS/@layer) festgelegten Wert zurück.
- {{cssxref("unset")}}
  - : Setzt die Eigenschaft auf ihren natürlichen Wert zurück, was bedeutet, dass wenn die Eigenschaft von Natur aus vererbt wird, sie sich wie `inherit` verhält, ansonsten wie `initial`.

> [!NOTE]
> Siehe [Origin types](/de/docs/Web/CSS/Cascade#origin_types) für weitere Informationen zu jedem dieser Werte und wie sie funktionieren.

Wir können uns eine Liste von Links ansehen und erkunden, wie universelle Werte funktionieren. Das folgende Live-Beispiel ermöglicht es Ihnen, mit dem CSS zu spielen und zu sehen, was passiert, wenn Sie Änderungen vornehmen. Mit Code zu spielen ist wirklich der beste Weg, um HTML und CSS besser zu verstehen.

Zum Beispiel:

1. Das zweite Listenelement hat die Klasse `my-class-1` angewendet. Diese setzt die Farbe des im `<a>` Element verschachtelten Elements auf `inherit`. Wenn Sie die Regel entfernen, wie ändert sich die Farbe des Links?
2. Verstehen Sie, warum die dritte und vierte Links die Farbe haben, die sie haben? Der dritte Link ist auf `initial` gesetzt, was bedeutet, dass er den Ausgangswert der Eigenschaft verwendet (in diesem Fall schwarz) und nicht den Browserstandard für Links, der blau ist. Der vierte ist auf `unset` gesetzt, was bedeutet, dass der Linktext die Farbe des übergeordneten Elements, grün, verwendet.
3. Welcher der Links wird die Farbe ändern, wenn Sie eine neue Farbe für das `<a>` Element definieren — zum Beispiel `a { color: red; }`?
4. Nachdem Sie den nächsten Abschnitt über das Zurücksetzen aller Eigenschaften gelesen haben, kehren Sie zurück und ändern Sie die `color` Eigenschaft in `all`. Beachten Sie, wie der zweite Link auf einer neuen Zeile ist und einen Aufzählungspunkt hat. Welche Eigenschaften denken Sie, wurden vererbt?

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

Die CSS-Kurzform [`all`](/de/docs/Web/CSS/all) kann verwendet werden, um einen dieser Vererbungswerte auf (fast) alle Eigenschaften gleichzeitig anzuwenden. Ihr Wert kann einer der Vererbungswerte (`inherit`, `initial`, `revert`, `revert-layer` oder `unset`) sein. Es ist eine praktische Möglichkeit, Änderungen an Stilen rückgängig zu machen, damit Sie zu einem bekannten Ausgangspunkt zurückkehren können, bevor Sie neue Änderungen beginnen.

Im folgenden Beispiel haben wir zwei Blockzitate. Das erste hat Stile auf das Blockquote-Element selbst angewendet. Das zweite hat eine Klasse auf das Blockquote angewendet, die den Wert von `all` auf `unset` setz。

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

Wir verstehen jetzt, dass die Vererbung der Grund ist, warum ein Absatz in der Struktur Ihres HTML tief verschachtelt dieselbe Farbe hat wie das CSS, das auf den Körper angewendet wird. Aus den einführenden Lektionen haben wir ein Verständnis dafür, wie man das CSS, das auf etwas angewendet wird, an jedem Punkt im Dokument ändert — sei es durch Zuweisen von CSS an ein Element oder durch Erstellen einer Klasse. Wir werden nun sehen, wie die Kaskade definiert, welche CSS-Regeln angewendet werden, wenn mehr als ein Stilblock dieselbe Eigenschaft, aber mit unterschiedlichen Werten, auf dasselbe Element anwenden.

Es gibt drei zu berücksichtigende Faktoren, die in zunehmender Reihenfolge der Wichtigkeit aufgelistet sind. Spätere über Überwiegen frühere:

1. **Quellordnung**
2. **Spezifität**
3. **Wichtigkeit**

Wir werden uns diese ansehen, um zu sehen, wie Browser genau herausfinden, welches CSS angewendet werden soll.

### Quellreihenfolge

Wir haben bereits gesehen, wie Quellreihenfolge für die Kaskade von Bedeutung ist. Wenn Sie mehr als eine Regel haben, die alle genau das gleiche Gewicht haben, dann gewinnt die, die zuletzt im CSS steht. Sie können dies so betrachten: Die Regel, die näher am Element selbst ist, überschreibt die früheren, bis die letzte gewinnt und das Element stylen darf.

Die Quellreihenfolge spielt nur dann eine Rolle, wenn das Spezifitätsgewicht der Regeln gleich ist, also schauen wir uns die Spezifität an:

### Spezifität

Sie werden oft in eine Situation geraten, in der Sie wissen, dass eine Regel später im Stylesheet kommt, aber eine frühere, konfliktentscheidende Regel angewendet wird. Dies passiert, weil die frühere Regel eine **höhere Spezifität** hat — sie ist spezifischer und wird daher vom Browser als diejenige ausgewählt, die das Element stylen soll.

Wie wir bereits früher in dieser Lektion gesehen haben, hat ein Klassenselektor mehr Gewicht als ein Elementselektor, sodass die in dem Klassenstilblock definierten Eigenschaften diejenigen überschreiben, die im Elementstilblock definiert sind.

Etwas, das hier zu beachten ist, obwohl wir über Selektoren nachdenken und die Regeln, die auf den Text oder die Komponente angewendet werden, die sie auswählen, wird nicht die gesamte Regel überschrieben, sondern nur die Eigenschaften, die an mehreren Stellen deklariert werden.

Dieses Verhalten hilft, Wiederholungen in Ihrem CSS zu vermeiden. Eine gängige Praxis ist es, generische Stile für die grundlegenden Elemente zu definieren und dann Klassen zu erstellen, die nur einige der Eigenschaften und Werte ändern. Zum Beispiel haben wir im untenstehenden Stylesheet generische Stile für Level2-Überschriften definiert und dann einige Klassen erstellt, die nur einige der Eigenschaften und Werte ändern. Die zuerst definierten Werte werden auf alle Überschriften angewendet, dann werden die spezifischeren Werte auf die Überschriften angewendet, die die Klassen haben.

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

Lassen Sie uns nun ansehen, wie der Browser die Spezifität berechen wird. Wir wissen bereits, dass ein Elementselektor eine niedrige Spezifität hat und von einer Klasse überschrieben werden kann. Im Wesentlichen wird ein Wert in Punkten an verschiedene Arten von Selektoren vergeben, und das Addieren dieser ergibt das Gewicht dieses speziellen Selektors, das dann gegen andere potenzielle Übereinstimmungen bewertet werden kann.

Die Menge an Spezifität, die ein Selektor hat, wird mit drei verschiedenen Werten (oder Komponenten) gemessen, die als ID-, CLASS- und ELEMENT-Spalten in den Hunderter-, Zehner- und Einerstellen betrachtet werden können:

- **Identifikatoren**: Vergibt einen Punkt in dieser Spalte für jeden ID-Selektor innerhalb des gesamten Selektors.
- **Klassen**: Vergibt einen Punkt in dieser Spalte für jeden Klassenselektor, Attributselektor oder Pseudoklasse innerhalb des gesamten Selektors.
- **Elemente**: Vergibt einen Punkt in dieser Spalte für jeden Elementselektor oder Pseudoelement innerhalb des gesamten Selektors.

> [!NOTE]
> Der Universalselektor ([`*`](/de/docs/Web/CSS/Universal_selectors)), [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators) (`+`, `>`, `~`, ' '), und der Anpassungsselektor ([`:where()`](/de/docs/Web/CSS/:where)) zusammen mit seinen Parametern haben keinen Einfluss auf die Spezifität.

Die Negierung ([`:not()`](/de/docs/Web/CSS/:not)), der relationale Selektor ([`:has()`](/de/docs/Web/CSS/:has)), die matches-any ([`:is()`](/de/docs/Web/CSS/:is)) Pseudoklassen, und [CSS Verschachtelung](/de/docs/Web/CSS/CSS_nesting/Nesting_and_specificity) selbst tragen nicht zur Spezifität bei, aber ihre Parameter oder verschachtelten Regeln tun es. Das Spezifikationsgewicht, das jeder zum Spezifikationsalgorithmus beiträgt, ist das Spezifikationsgewicht des Selektors im Parameter oder der verschachtelten Regel mit dem größten Gewicht.

Die folgende Tabelle zeigt einige isolierte Beispiele, um Sie in die richtige Stimmung zu versetzen. Versuchen Sie durchzugehen diese und stellen Sie sicher, dass Sie verstehen, warum sie die Spezifität haben, die wir ihnen gegeben haben. Wir haben uns noch nicht im Detail mit Selektoren befasst, aber Sie können Details zu jedem Selektor im MDN [Selektoren-Referenz](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators) finden.

| Selektor                                  | Identifikatoren | Klassen | Elemente | Gesamte Spezifität |
| ----------------------------------------- | --------------- | ------- | -------- | ------------------ |
| `h1`                                      | 0               | 0       | 1        | 0-0-1              |
| `h1 + p::first-letter`                    | 0               | 0       | 3        | 0-0-3              |
| `li > a[href*="en-US"] > .inline-warning` | 0               | 2       | 2        | 0-2-2              |
| `#identifier`                             | 1               | 0       | 0        | 1-0-0              |
| `button:not(#mainBtn, .cta`)              | 1               | 0       | 1        | 1-0-1              |

Bevor wir weitermachen, lassen Sie uns ein Beispiel in Aktion ansehen.

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

Was passiert hier? Zunächst einmal interessieren uns nur die ersten sieben Regeln dieses Beispiels, und wie Sie bemerken werden, haben wir ihre Spezifikationswerte in einem Kommentar vor jeder Regel eingefügt.

- Die ersten beiden Selektoren kämpfen um das Styling der Hintergrundfarbe des Links. Der zweite gewinnt und macht die Hintergrundfarbe blau, weil er einen zusätzlichen ID-Selektor in der Kette hat: Seine Spezifität ist 2-0-1 vs. 1-0-1.
- Selektoren 3 und 4 kämpfen um das Styling der Textfarbe des Links. Der zweite gewinnt und macht den Text weiß, weil, obwohl er einen Elementselektor weniger hat, der fehlende Selektor gegen einen Klassenselektor ausgetauscht wurde, der mehr Gewicht hat als unendlich viele Elementselektoren. Die gewinnende Spezifität ist 1-1-3 gegenüber 1-0-4.
- Selektoren 5–7 kämpfen um das Styling des Rahmens des Links beim Überfahren mit der Maus. Selektor 6 verliert klar gegen Selektor 5 mit einer Spezifität von 0-2-3 gegenüber 0-2-4; er hat in der Kette einen Elementselektor weniger. Selektor 7 schlägt jedoch sowohl die Selektoren 5 als auch 6, da er in der Kette die gleiche Anzahl von Unterselektoren hat wie Selektor 5, aber ein Element gegen einen Klassenselektor ausgetauscht wurde. Daher ist die gewinnende Spezifität 0-3-3 gegenüber 0-2-3 und 0-2-4.

> [!NOTE]
> Jeder Selektor hat sein eigenes Spezifikationsniveau, das nicht von Selektoren mit einer niedrigeren Spezifität überschrieben werden kann. Beispielsweise könnten _eine Million_ **Klassen**-Selektoren zusammen nicht die Spezifität eines _einzigen_ **ID**-Selektors überschreiben.
>
> Der beste Weg zur Bewertung der Spezifität ist es, die Spezifikationslevel individuell zu bewerten, beginnend mit dem höchsten und erst dann auf das niedrigere zu gehen, wenn es notwendig ist. Nur wenn es eine Krawatte zwischen Selektoren-Punkten innerhalb einer Spezifikationsspalte gibt, müssen Sie die nächste Spalte nach unten bewerten; ansonsten können Sie die Selektoren mit niedrigeren Spezifikationswerten ignorieren, da sie niemals die Selektoren mit höheren Spezifikationen überschreiben können.

#### IDs gegen Klassen

ID-Selektoren haben eine hohe Spezifität. Das bedeutet, Stile, die auf der Übereinstimmung mit einem ID-Selektor basieren, werden Stile überschreiben, die auf anderen Selektoren basieren, einschließlich Klassen- und Typ-Selektoren. Da eine ID nur einmal auf einer Seite auftreten kann und aufgrund der hohen Spezifität von ID-Selektoren ist es vorzuziehen, einer Klasse statt einer ID zu einem Element hinzuzufügen.

Wenn die Verwendung der ID der einzige Weg ist, um das Element anzusprechen — vielleicht, weil Sie keinen Zugriff auf das Markup haben und es nicht bearbeiten können — ziehen Sie in Betracht, die ID in einem [Attributselektor](/de/docs/Web/CSS/Attribute_selectors) zu verwenden, wie z. B. `p[id="header"]`.

### Inline-Stile

Inline-Stile, das heißt die Stilerklärung innerhalb eines [`style`](/de/docs/Web/HTML/Global_attributes/style) Attributs, haben Vorrang vor allen normalen Stilen, unabhängig von der Spezifität. Solche Deklarationen haben keine Selektoren, aber ihre Spezifikationsgewicht kann als 1-0-0-0 verstanden werden; immer mehr als jedes andere Spezifikationsgewicht, egal wie viele IDs in den Selektoren sind.

### !important

Es gibt ein spezielles Stück CSS, das Sie verwenden können, um alle obigen Berechnungen zu überschreiben, sogar Inline-Stile - das `!important`-Flag. Sie sollten jedoch sehr vorsichtig sein, wenn Sie es verwenden. Dieses Flag wird verwendet, um ein einzelnes Eigenschafts- und Wertpaar zur spezifischsten Regel zu machen und damit die normalen Regeln der Kaskade zu überschreiben, einschließlich normaler Inline-Stile.

> [!NOTE]
> Es ist nützlich zu wissen, dass das `!important`-Flag existiert, damit Sie wissen, was es ist, wenn Sie es im Code anderer Leute vorfinden. **Wir empfehlen jedoch dringend, es nur zu verwenden, wenn es absolut notwendig ist.** Das `!important`-Flag ändert die Funktionsweise der Kaskade, sodass das Debugging von CSS-Problemen sehr schwer zu erarbeiten sein kann, insbesondere in einem großen Stylesheet.

Schauen Sie sich dieses Beispiel an, wo wir zwei Absätze haben, von denen einer eine ID hat.

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

Gehen wir das durch, um zu sehen, was passiert — versuchen Sie, einige der Eigenschaften zu entfernen, um zu sehen, was passiert, wenn Sie Schwierigkeiten haben, dies zu verstehen:

1. Sie werden sehen, dass die `{{cssxref("color")}}`- und `{{cssxref("padding")}}`-Werte der dritten Regel angewendet wurden, aber die `{{cssxref("background-color")}}` nicht. Warum? Wirklich, alle drei sollten doch angewendet werden, weil Regeln, die später in der Quellordnung stehen, im Allgemeinen frühere Regeln überschreiben.
2. Die darüber liegenden Regeln gewinnen jedoch, weil Klassenselektoren eine höhere Spezifität haben als Elementselektoren.
3. Beide Elemente haben eine [`class`](/de/docs/Web/HTML/Global_attributes/class) von `better`, aber das 2. hat einen [`id`](/de/docs/Web/HTML/Global_attributes/id) von `winning` ebenfalls. Da IDs eine _noch höhere_ Spezifität als Klassen haben (Sie können nur ein Element mit jeder einzigartigen ID auf einer Seite haben, aber viele Elemente mit derselben Klasse — ID-Selektoren sind _sehr spezifisch_ in dem, was sie anvisieren), sollten die rote Hintergrundfarbe und der 1px schwarze Rahmen beide auf das 2. Element angewendet werden, wobei das erste Element die graue Hintergrundfarbe und keine Umrandung, wie es von der Klasse spezifiziert ist, erhält.
4. Das 2. Element _bekommt_ die rote Hintergrundfarbe, aber keine Umrandung. Warum? Weil das `!important`-Flag in der zweiten Regel. Das Hinzufügen des `!important`-Flags nach `border: none` bedeutet, dass diese Deklaration den `border`-Wert in der vorherigen Regel gewinnt, auch wenn der ID-Selektor eine höhere Spezifität hat.

> [!NOTE]
> Der einzige Weg, um eine wichtige Deklaration zu überschreiben, ist es, eine andere wichtige Deklaration mit _derselben Spezifität_ später in der Quellordnung einzuschließen, oder eine mit höherer Spezifität, oder eine wichtige Deklaration in einer vorhergehenden Kaskadenschicht einzuschließen (wir haben uns noch nicht mit Kaskadenschichten befasst).

Eine Situation, in der Sie möglicherweise das `!important`-Flag verwenden müssen, ist, wenn Sie an einem CMS arbeiten, wo Sie die Kern-CSS-Module nicht bearbeiten können, und Sie wirklich einen Inline-Stil oder eine wichtige Deklaration überschreiben möchten, die nicht auf andere Weise überschrieben werden kann. Aber wirklich, verwenden Sie es nicht, wenn Sie es vermeiden können.

## Der Effekt des CSS-Standorts

Schließlich ist es wichtig zu beachten, dass die Vorrangstellung einer CSS-Deklaration davon abhängt, in welchem Stylesheet und welcher Kaskadenschicht sie angegeben ist.

Es ist möglich, dass Benutzer benutzerdefinierte Stylesheets einrichten, um die Stile des Entwicklers zu überschreiben. Zum Beispiel könnte ein sehbehinderter Benutzer die Schriftgröße auf allen von ihm besuchten Webseiten auf die doppelte Normalgröße einstellen möchten, um ein einfacheres Lesen zu ermöglichen.

Es ist auch möglich, Entwicklerstile in Kaskadenschichten zu deklarieren: Sie können nicht geschichtete Stile Stile überschreiben lassen, die in Schichten deklariert sind, oder Sie können Stile in später deklarierten Schichten Stile aus früher deklarierten Schichten überschreiben lassen. Zum Beispiel können Sie als Entwickler möglicherweise kein Drittanbieter-Stylesheet bearbeiten, aber Sie können das externe Stylesheet in eine Kaskadenschicht importieren, sodass alle Ihre Stile die importierten Stile leicht ohne Sorgen um die Selektor-Spezifität des Drittanbieters überschreiben.

### Reihenfolge der überschreibenden Deklarationen

Konfliktierende Deklarationen werden in der folgenden Reihenfolge angewendet, wobei spätere die früheren überschreiben:

1. Deklarationen in Benutzer-Agent-Stylesheets (z. B., die Standardeinstellungen des Browsers, die verwendet werden, wenn keine anderen Stile eingestellt sind).
2. Normale Deklarationen in Benutzer-Stylesheets (benutzerdefinierte Stile, die von einem Benutzer festgelegt wurden).
3. Normale Deklarationen in Autoren-Stylesheets (das sind die Stile, die von uns, den Webentwicklern, festgelegt werden).
4. Wichtige Deklarationen in Autoren-Stylesheets.
5. Wichtige Deklarationen in Benutzer-Stylesheets.
6. Wichtige Deklarationen in Benutzer-Agent-Stylesheets.

> [!NOTE]
> Die Reihenfolge der Vorrangstellung ist für mit `!important` gekennzeichnete Stile umgekehrt. Es macht Sinn, dass Stylesheets von Webentwicklern Benutzer-Stylesheets überschreiben, sodass das Design wie vorgesehen beibehalten werden kann; jedoch haben Benutzer manchmal gute Gründe, um Stile von Webentwicklern zu überschreiben, wie oben erwähnt, und dies kann durch Verwendung von `!important` in ihren Regeln erreicht werden.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Test your skills: The Cascade](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_tasks).

## Zusammenfassung

Wenn Sie den Großteil dieses Artikels verstanden haben, dann herzlichen Glückwunsch — Sie haben begonnen, sich mit den grundlegenden Mechanismen von CSS vertraut zu machen.

Wenn Sie die Kaskade, Spezifität und Vererbung nicht vollständig verstanden haben, dann machen Sie sich keine Sorgen! Dies ist definitiv das komplizierteste, was wir bisher im Kurs behandelt haben und ist etwas, das selbst professionelle Webentwickler manchmal als knifflig empfinden. Wir empfehlen Ihnen, mehrmals zu diesem Artikel zurückzukehren, während Sie den Kurs fortsetzen, und weiter darüber nachzudenken.

Kehren Sie hierher zurück, wenn Sie anfangen, auf seltsame Probleme mit nicht wie erwartet angewendeten Stilen zu stoßen. Es könnte ein Spezifitätsproblem sein.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics")}}
