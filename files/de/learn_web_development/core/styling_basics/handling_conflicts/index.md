---
title: Umgang mit Konflikten
slug: Learn_web_development/Core/Styling_basics/Handling_conflicts
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics")}}

Ziel dieser Lektion ist es, Ihr Verständnis einiger der grundlegendsten Konzepte von CSS zu entwickeln – der Kaskade, der Spezifität und der Vererbung – die steuern, wie CSS auf HTML angewendet wird und wie Konflikte zwischen Stil-Deklarationen gelöst werden.

Obwohl das Durcharbeiten dieser Lektion zunächst weniger relevant erscheint und ein wenig akademischer als einige andere Teile des Kurses ist, wird Ihnen das Verständnis dieser Konzepte später viel Schmerz ersparen! Wir empfehlen Ihnen, diesen Abschnitt sorgfältig durchzuarbeiten und zu überprüfen, ob Sie die Konzepte verstanden haben, bevor Sie weitergehen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (Studium der
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
          <li>Die Hauptkonzepte, die den Ausgang von Konflikten steuern – Spezifität, Reihenfolge der Quellen und Wichtigkeit.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Konfliktierende Regeln

CSS steht für **Cascading Style Sheets**, und dieses erste Wort _kaskadieren_ ist unglaublich wichtig zu verstehen – die Funktionsweise der Kaskade ist der Schlüssel zum Verständnis von CSS.

Irgendwann werden Sie an einem Projekt arbeiten und feststellen, dass das CSS, das Sie dachten, auf ein Element angewendet werden sollte, nicht funktioniert. Oft liegt das Problem darin, dass Sie zwei Regeln erstellen, die unterschiedliche Werte derselben Eigenschaft auf dasselbe Element anwenden. [**Kaskade**](/de/docs/Web/CSS/CSS_cascade/Cascade) und das damit eng verbundene Konzept der [**Spezifität**](/de/docs/Web/CSS/CSS_cascade/Specificity) sind Mechanismen, die steuern, welche Regel bei einem solchen Konflikt angewendet wird. Die Regel, die Ihr Element stylt, ist möglicherweise nicht die, die Sie erwarten, daher müssen Sie verstehen, wie diese Mechanismen funktionieren.

Ebenso wichtig ist hier das Konzept der [**Vererbung**](/de/docs/Web/CSS/CSS_cascade/Inheritance), was bedeutet, dass einige CSS-Eigenschaften standardmäßig Werte erben, die auf dem übergeordneten Element des aktuellen Elements festgelegt sind, und andere nicht. Auch dies kann zu Verhalten führen, das Sie möglicherweise nicht erwarten.

Lassen Sie uns zunächst einen kurzen Blick auf die wichtigsten Dinge werfen, mit denen wir es zu tun haben, bevor wir uns jede einzeln anschauen und sehen, wie sie miteinander und mit Ihrem CSS interagieren. Diese Konzepte können zunächst schwierig zu verstehen sein. Mit zunehmender Praxis beim Schreiben von CSS wird Ihnen die Funktionsweise immer deutlicher werden.

### Kaskade

Stylesheets [**kaskadieren**](/de/docs/Web/CSS/CSS_cascade/Cascade) – auf sehr einfachem Niveau bedeutet dies, dass der Ursprung und die Reihenfolge von CSS-Regeln wichtig sind. Wenn zwei Regeln die gleiche Spezifität haben, wird diejenige verwendet, die zuletzt im Stylesheet definiert ist. Es gibt andere Konzepte, die einen Effekt haben, wie zum Beispiel [Cascade Layers](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers), aber diese sind fortgeschrittener und werden hier nicht im Detail behandelt.

Im untenstehenden Beispiel haben wir zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der `<h1>`-Inhalt wird schließlich blau gefärbt. Dies liegt daran, dass beide Regeln aus derselben Quelle stammen, einen identischen Elementselektor haben und somit die gleiche Spezifität haben, aber die letzte in der Quelldatei gewinnt.

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

[Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) ist der Algorithmus, den der Browser verwendet, um zu entscheiden, welcher Eigenschaftswert auf ein Element angewendet wird. Wenn mehrere Stilblöcke unterschiedliche Selektoren haben, die dieselbe Eigenschaft mit verschiedenen Werten konfigurieren und dasselbe Element anvisieren, entscheidet die Spezifität über den Eigenschaftswert, der auf das Element angewendet wird. Spezifität ist im Grunde ein Maß dafür, wie spezifisch die Auswahl eines Selektors ist:

- Ein Elementselektor ist weniger spezifisch; er wählt alle Elemente dieses Typs aus, die auf einer Seite erscheinen, und hat daher weniger Gewicht. Pseudo-Elementselektoren haben die gleiche Spezifität wie reguläre Elementselektoren.
- Ein Klassenselektor ist spezifischer; er wählt nur die Elemente auf einer Seite aus, die ein spezifisches `class`-Attributwert haben, und hat daher mehr Gewicht. Attributselektoren und Pseudo-Klassen haben das gleiche Gewicht wie eine Klasse.

Unten haben wir wieder zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der `<h1>`-Inhalt unten wird rot gefärbt, weil der Klassenselektor `main-heading` seiner Regel eine höhere Spezifität verleiht. Auch wenn die Regel mit dem `<h1>`-Elementselektor weiter unten in der Quelldatei erscheint, wird die mit der höheren Spezifität, die mit dem Klassenselektor definiert wurde, angewendet.

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

Wir werden den Spezifitätsalgorithmus später noch genauer erklären.

### Vererbung

Vererbung muss in diesem Kontext auch verstanden werden – einige CSS-Eigenschaftswerte, die auf übergeordnete Elemente gesetzt sind, werden von ihren Kindelementen geerbt, andere nicht.

Wenn Sie zum Beispiel eine `color` und `font-family` auf ein Element setzen, werden alle enthaltenen Elemente auch mit dieser Farbe und Schriftart gestylt, es sei denn, Sie haben ihnen direkt andere Farbe und Schriftwerte zugewiesen.

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

Einige Eigenschaften werden nicht vererbt – zum Beispiel, wenn Sie eine {{cssxref("width")}} von 50% auf ein Element setzen, erhalten alle seine Nachkommen keine Breite von 50% der Breite ihres übergeordneten Elements. Wenn das der Fall wäre, wäre CSS sehr frustrierend zu verwenden!

> [!NOTE]
> Auf den MDN-CSS-Eigenschaftsreferenzseiten finden Sie ein technisches Informationsfeld namens "Formale Definition", das eine Reihe von Datenpunkten zu dieser Eigenschaft auflistet, darunter, ob sie vererbt wird oder nicht. Sehen Sie sich den [Abschnitt über die formale Definition der Farbeigenschaft](/de/docs/Web/CSS/color#formal_definition) als Beispiel an.

### Verständnis, wie die Konzepte zusammenarbeiten

Diese drei Konzepte (Kaskade, Spezifität und Vererbung) steuern gemeinsam, welches CSS auf welches Element angewendet wird. In den folgenden Abschnitten werden wir sehen, wie sie zusammenarbeiten. Es kann manchmal etwas kompliziert erscheinen, aber Sie werden anfangen, sich daran zu erinnern, wenn Sie mehr Erfahrung mit CSS sammeln, und Sie können jederzeit die Details nachschlagen, wenn Sie es vergessen! Selbst erfahrene Entwickler erinnern sich nicht immer an alle Details.

## Verständnis der Vererbung

Wir beginnen mit der Vererbung. Im untenstehenden Beispiel haben wir ein {{HTMLElement("ul")}}-Element mit zwei Ebenen von verschachtelten ungeordneten Listen darin. Wir haben der äußeren `<ul>` eine Umrandung, Abstände und Schriftfarbe zugewiesen.

Die `color`-Eigenschaft ist eine vererbte Eigenschaft. Daher wird der `color`-Eigenschaftswert auf die direkten Kinder und auch auf die indirekten Kinder angewendet – die unmittelbaren Kindelemente `<li>` und diejenigen innerhalb der ersten verschachtelten Liste. Wir haben dann die Klasse `special` zur zweiten verschachtelten Liste hinzugefügt und ihr eine andere Farbe zugewiesen. Diese wird dann an ihre Kinder weitervererbt.

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

Eigenschaften wie `width` (wie bereits erwähnt), `margin`, `padding` und `border` sind nicht vererbte Eigenschaften. Wenn eine Umrandung in diesem Listenbeispiel von den Kindern geerbt würde, würde jede einzelne Liste und jedes Listenelement eine Umrandung erhalten – wahrscheinlich kein Effekt, den wir jemals wünschen würden!

Auch wenn jede CSS-Eigenschaftsseite auflistet, ob die Eigenschaft vererbt wird, können Sie oft dasselbe intuitiv erraten, wenn Sie wissen, welchen Aspekt der Eigenschaftswert stylen wird.

### Vererbung steuern

CSS bietet fünf spezielle universelle Eigenschaftswerte zur Steuerung der Vererbung. Jede CSS-Eigenschaft akzeptiert diese Werte.

- {{cssxref("inherit")}}
  - : Setzt den angewendeten Eigenschaftswert eines ausgewählten Elements so, dass er mit dem seines übergeordneten Elements übereinstimmt. Effektiv "schaltet" dies die Vererbung "ein".
- {{cssxref("initial")}}
  - : Setzt den angewendeten Eigenschaftswert eines ausgewählten Elements auf den [Anfangswert](/de/docs/Web/CSS/CSS_cascade/initial_value) der Eigenschaft.
- {{cssxref("revert")}}
  - : Setzt den angewendeten Eigenschaftswert eines ausgewählten Elements auf das Standardstyling des Browsers zurück, anstatt auf die Standardeinstellungen der Eigenschaft. Dieser Wert wirkt in vielen Fällen wie {{cssxref("unset")}}.
- {{cssxref("revert-layer")}}
  - : Setzt den angewendeten Eigenschaftswert eines ausgewählten Elements auf den in einer vorherigen [Kaskadenschicht](/de/docs/Web/CSS/@layer) festgelegten Wert zurück.
- {{cssxref("unset")}}
  - : Setzt die Eigenschaft auf ihren natürlichen Wert zurück, was bedeutet, dass, wenn die Eigenschaft natürlich vererbt wird, sie wie `inherit` wirkt, andernfalls wie `initial`.

> [!NOTE]
> Siehe [Herkunftstypen](/de/docs/Web/CSS/CSS_cascade/Cascade#origin_types) für weitere Informationen zu diesen und wie sie funktionieren.

Wir können uns eine Liste von Links ansehen und erforschen, wie universelle Werte funktionieren. Das folgende Beispiel ermöglicht es Ihnen, mit dem CSS zu experimentieren und zu sehen, was passiert, wenn Sie Änderungen vornehmen. Das Spielen mit Code ist wirklich der beste Weg, um HTML und CSS besser zu verstehen.

Zum Beispiel:

1. Das zweite Listenelement hat die Klasse `my-class-1` angewendet. Dies setzt die Farbe des darin verschachtelten `<a>`-Elements auf `inherit`. Wenn Sie die Regel entfernen, wie verändert sich die Farbe des Links?
2. Verstehen Sie, warum die dritte und vierte Links die Farbe haben, die sie haben? Der dritte Link ist auf `initial` gesetzt, was bedeutet, dass er den Anfangswert der Eigenschaft verwendet (in diesem Fall schwarz) und nicht den Standart des Browsers für Links, der blau ist. Der vierte ist auf `unset` gesetzt, was bedeutet, dass der Linktext die Farbe des übergeordneten Elements, grün, verwendet.
3. Welche der Links ändern sich, wenn Sie eine neue Farbe für das `<a>`-Element definieren, zum Beispiel `a { color: red; }`?
4. Nachdem Sie den nächsten Abschnitt über das Zurücksetzen aller Eigenschaften gelesen haben, kommen Sie zurück und ändern Sie die `color`-Eigenschaft in `all`. Beachten Sie, wie sich der zweite Link auf einer neuen Zeile befindet und ein Aufzählungszeichen hat. Welche Eigenschaften denken Sie, wurden vererbt?

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

Die CSS-Kurzform-Eigenschaft [`all`](/de/docs/Web/CSS/all) kann verwendet werden, um einen dieser Vererbungswerte auf (fast) alle Eigenschaften gleichzeitig anzuwenden. Ihr Wert kann einer der Vererbungswerte (`inherit`, `initial`, `revert`, `revert-layer`, oder `unset`) sein. Es ist ein praktischer Weg, um Änderungen an Stilen rückgängig zu machen, damit Sie wieder zu einem bekannten Ausgangspunkt kommen können, bevor Sie neue Änderungen vornehmen.

Im untenstehenden Beispiel haben wir zwei Blockzitate. Das erste hat Styling auf das Blockzitquotelement selbst angewendet. Das zweite hat eine Klasse auf das Blockzitat angewendet, die den Wert von `all` auf `unset` setzt.

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

Versuchen Sie, den Wert von `all` auf einige der anderen verfügbaren Werte zu ändern und beobachten Sie, was der Unterschied ist.

## Verständnis der Kaskade

Wir verstehen jetzt, dass Vererbung der Grund ist, warum ein Absatz, der tief in der Struktur Ihres HTML verschachtelt ist, die gleiche Farbe wie das CSS des Body hat. Aus den einführenden Lektionen wissen wir, wie man das auf etwas angewendete CSS an jedem Punkt im Dokument ändern kann – sei es durch Zuordnung von CSS zu einem Element oder durch Erstellen einer Klasse. Jetzt werden wir untersuchen, wie die **Kaskade** definiert, welche CSS-Regeln angewendet werden, wenn mehr als ein Stilblock dieselbe Eigenschaft, jedoch mit unterschiedlichen Werten, auf dasselbe Element anwendet.

Es gibt drei zu berücksichtigende Faktoren, die hier in aufsteigender Reihenfolge der Wichtigkeit aufgeführt sind. Spätere überstimmen frühere:

1. **Reihenfolge der Quellen**
2. **Spezifität**
3. **Wichtigkeit**

Wir werden uns diese ansehen, um zu sehen, wie Browser genau herausfinden, welches CSS angewendet werden soll.

### Reihenfolge der Quellen

Wir haben bereits gesehen, wie die Reihenfolge der Quellen in der Kaskade eine Rolle spielt. Wenn Sie mehr als eine Regel haben, die alle genau das gleiche Gewicht haben, dann wird diejenige, die zuletzt im CSS steht, gewinnen. Sie können dies so betrachten: Die Regel, die dem Element selbst näher steht, überschreibt die früheren, bis die letzte gewinnt und das Element stylen darf.

Die Reihenfolge der Quellen ist nur wichtig, wenn das Gewicht der Spezifität der Regeln gleich ist, also lassen Sie uns die Spezifität betrachten:

### Spezifität

Sie werden oft auf eine Situation stoßen, in der Sie wissen, dass eine Regel später im Stylesheet steht, aber eine frühere, widersprüchliche Regel angewendet wird. Dies passiert, weil die frühere Regel eine **höhere Spezifität** hat – sie ist spezifischer und wird daher vom Browser als diejenige gewählt, die das Element stylen soll.

Wie wir früher in dieser Lektion gesehen haben, hat ein Klassenselektor mehr Gewicht als ein Elementselektor, so dass die in der Klassenstilblock definierten Eigenschaften die in der Elementstilblock definierten überschreiben.

Etwas zu beachten ist hier, dass obwohl wir an Selektoren und die Regeln denken, die auf den Text oder das ausgewählte Komponent angewendet werden, es nicht die gesamte Regel ist, die überschrieben wird, sondern nur die Eigenschaften, die an mehreren Stellen deklariert werden.

Dieses Verhalten hilft, Wiederholungen in Ihrem CSS zu vermeiden. Eine übliche Praxis ist es, generische Stile für die grundlegenden Elemente zu definieren und dann Klassen zu erstellen, die nur einige der Eigenschaften und Werte ändern. Zum Beispiel haben wir im folgenden Stylesheet generische Stile für Überschriften der Ebene 2 definiert und dann einige Klassen erstellt, die nur einige der Eigenschaften und Werte ändern. Die zu Beginn definierten Werte werden auf alle Überschriften angewendet, dann werden die spezifischeren Werte auf die Überschriften mit den Klassen angewendet.

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

Lassen Sie uns nun einen Blick darauf werfen, wie der Browser die Spezifität berechnet. Wir wissen bereits, dass ein Elementselektor eine niedrige Spezifität hat und von einer Klasse überschrieben werden kann. Im Grunde genommen wird jedem Selektortyp ein Punktwert zugewiesen, und die Summe dieser Werte ergibt das Gewicht dieses bestimmten Selektors, das dann mit anderen möglichen Übereinstimmungen verglichen werden kann.

Die Menge der Spezifität, die ein Selektor hat, wird mit drei verschiedenen Werten (oder Komponenten) gemessen, die als ID-, KLASSEN- und ELEMENT-Spalten in den Hunderten-, Zehner- und Einerstellen betrachtet werden können:

- **Identifikatoren**: Erhalten Sie einen Punkt in dieser Spalte für jeden ID-Selektor, der sich im gesamten Selektor befindet.
- **Klassen**: Erhalten Sie einen Punkt in dieser Spalte für jeden Klassenselektor, Attributselektor oder Pseudo-Klasse, der sich im gesamten Selektor befindet.
- **Elemente**: Erhalten Sie einen Punkt in dieser Spalte für jeden Elementselektor oder Pseudo-Element, der sich im gesamten Selektor befindet.

> [!NOTE]
> Der universelle Selektor ([`*`](/de/docs/Web/CSS/Universal_selectors)), [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators) (`+`, `>`, `~`, ' '), und Spezifitätsanpassungsselektor ([`:where()`](/de/docs/Web/CSS/:where)) zusammen mit ihren Parametern haben keinen Einfluss auf die Spezifität.

Der Negationsselektor ([`:not()`](/de/docs/Web/CSS/:not)), der relationale Selektor ([`:has()`](/de/docs/Web/CSS/:has)), die "matches-any"-Selektoren ([`:is()`](/de/docs/Web/CSS/:is)) und [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting/Nesting_and_specificity) selbst tragen nicht zur Spezifität bei, aber ihre Parameter oder verschachtelten Regeln tun es. Das Spezifitätsgewicht, das jeder zur Spezifikationsalgorithmus beiträgt, ist das Spezifitätsgewicht des Selektors im Parameter oder in der verschachtelten Regel mit dem größten Gewicht.

Die folgende Tabelle zeigt einige isolierte Beispiele, um Sie in Stimmung zu bringen. Versuchen Sie, diese durchzugehen, und stellen Sie sicher, dass Sie verstehen, warum sie die gegebene Spezifität haben. Wir haben Selektoren noch nicht im Detail behandelt, aber Sie können Details zu jedem Selektor im MDN [Selektoren-Referenz](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators) finden.

| Selektor                                  | Identifikatoren | Klassen | Elemente | Gesamte Spezifität |
| ----------------------------------------- | --------------- | ------- | -------- | ------------------ |
| `h1`                                      | 0               | 0       | 1        | 0-0-1              |
| `h1 + p::first-letter`                    | 0               | 0       | 3        | 0-0-3              |
| `li > a[href*="en-US"] > .inline-warning` | 0               | 2       | 2        | 0-2-2              |
| `#identifier`                             | 1               | 0       | 0        | 1-0-0              |
| `button:not(#mainBtn, .cta`)              | 1               | 0       | 1        | 1-0-1              |

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

Was passiert hier? Zuerst einmal interessieren uns nur die ersten sieben Regeln dieses Beispiels, und wie Sie bemerken werden, haben wir ihre Spezifitätswerte in einem Kommentar vor jeder angegeben.

- Die ersten beiden Selektoren konkurrieren um das Styling der Hintergrundfarbe des Links. Der zweite gewinnt und macht die Hintergrundfarbe blau, weil er in der Kette einen zusätzlichen ID-Selektor hat: seine Spezifität beträgt 2-0-1 gegenüber 1-0-1.
- Selektoren 3 und 4 konkurrieren um das Styling der Textfarbe des Links. Der zweite gewinnt und macht den Text weiß, weil er zwar einen Elementselektor weniger hat, der fehlende Selektor jedoch gegen einen Klassenselektor ausgetauscht wird, der mehr Gewicht hat als unendlich viele Elementselektoren. Die gewinnende Spezifität beträgt 1-1-3 gegenüber 1-0-4.
- Selektoren 5–7 konkurrieren um das Styling des Linkrahmens, wenn er schwebt. Selektor 6 verliert deutlich gegen Selektor 5 mit einer Spezifität von 0-2-3 gegenüber 0-2-4; er hat einen Elementselektor weniger in der Kette. Selektor 7 gewinnt jedoch gegen beide Selektoren 5 und 6, weil er die gleiche Anzahl von Unterselektoren in der Kette wie Selektor 5 hat, aber ein Element wurde durch einen Klassenselektor ausgetauscht. Daher beträgt die gewinnende Spezifität 0-3-3 gegenüber 0-2-3 und 0-2-4.

> [!NOTE]
> Jeder Selektortyp hat seine eigene Spezifitätsstufe, die von Selektoren mit niedriger Spezifität nicht überschrieben werden kann. Beispielsweise könnte eine _Million_ **Klassen**selektoren zusammen nicht die Spezifität eines _einzelnen_ **ID**-Selektors überschreiben.
>
> Der beste Weg, Spezifität zu bewerten, besteht darin, die Spezifitätsstufen einzeln zu bewerten, beginnend mit der höchsten und bei Bedarf zur niedrigeren überzugehen. Nur wenn es zwischen Selektorpunkten innerhalb einer Spezifitätssäule ein Unentschieden gibt, müssen Sie die nächste Säule bewerten; andernfalls können Sie die niedrigeren Spezifitätsselektoren ignorieren, da sie die höheren Spezifitätsselektoren niemals überschreiben können.

#### IDs gegenüber Klassen

ID-Selektoren haben eine hohe Spezifität. Das bedeutet, dass Stile, die auf der Übereinstimmung eines ID-Selektors basieren, Stile überregeln, die auf anderen Selektoren basieren, einschließlich Klassen- und Typselektoren. Da eine ID nur einmal auf einer Seite vorkommen kann und aufgrund der hohen Spezifität der ID-Selektoren ist es vorzuziehen, einem Element eine Klasse hinzuzufügen, anstatt eine ID.

Wenn die Verwendung der ID der einzige Weg ist, das Element zu targetieren – vielleicht weil Sie keinen Zugriff auf das Markup haben und es nicht bearbeiten können – sollten Sie die ID innerhalb eines [Attributselektors](/de/docs/Web/CSS/Attribute_selectors) verwenden, zum Beispiel `p[id="header"]`.

### Inline-Stile

Inline-Stile, also die Stil-Deklaration innerhalb eines [`style`](/de/docs/Web/HTML/Global_attributes/style) Attributs, haben Vorrang vor allen normalen Stilen, unabhängig von der Spezifität. Solche Deklarationen haben keine Selektoren, aber ihre Spezifität kann als 1-0-0-0 interpretiert werden; sie ist immer höher als jedes andere Spezifitätsgewicht, egal wie viele IDs in den Selektoren sind.

### !important

Es gibt ein spezielles CSS-Stück, das Sie verwenden können, um alle oben genannten Berechnungen zu überschreiben, sogar Inline-Stile - das `!important`-Flag. Sie sollten jedoch vorsichtig sein, wenn Sie es verwenden. Dieses Flag wird verwendet, um ein einzelnes Eigenschafts- und Wertpaar zur spezifischsten Regel zu machen, wodurch die normalen Regeln der Kaskade außer Kraft gesetzt werden, einschließlich normaler Inline-Stile.

> [!NOTE]
> Es ist nützlich zu wissen, dass das `!important`-Flag existiert, sodass Sie wissen, was es ist, wenn Sie auf den Code anderer Leute stoßen. **Wir empfehlen jedoch dringend, es niemals zu verwenden, es sei denn, es ist absolut notwendig.** Das `!important`-Flag ändert die Art und Weise, wie die Kaskade normalerweise funktioniert, sodass es die Fehlersuche bei CSS-Problemen wirklich erschweren kann, insbesondere in einem großen Stylesheet.

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

Lassen Sie uns das durchgehen, um zu sehen, was passiert – versuchen Sie, einige der Eigenschaften zu entfernen, um zu sehen, was passiert, wenn Sie es schwer finden, es zu verstehen:

1. Sie werden sehen, dass die {{cssxref("color")}}- und {{cssxref("padding")}}-Werte der dritten Regel angewendet wurden, aber die {{cssxref("background-color")}} nicht. Warum? Eigentlich sollten alle drei gelten, denn Regeln weiter unten in der Quellenreihenfolge überschreiben normalerweise frühere Regeln.
2. Die obigen Regeln gewinnen jedoch, weil Klassenselektoren höhere Spezifität als Elementselektoren haben.
3. Beide Elemente haben eine [`class`](/de/docs/Web/HTML/Global_attributes/class) von `better`, aber das 2. hat eine [`id`](/de/docs/Web/HTML/Global_attributes/id) von `winning` ebenfalls. Da IDs haben eine _noch höhere_ Spezifität als Klassen (Sie können nur ein Element mit jeder eindeutigen ID auf einer Seite haben, aber viele Elemente mit der gleichen Klasse – ID-Selektoren sind _sehr spezifisch_ in dem, was sie anvisieren), sollte die rote Hintergrundfarbe und der 1px schwarze Rand auf das 2. Element angewendet werden, während das erste Element die graue Hintergrundfarbe und keinen Rand erhält, wie durch die Klasse angegeben.
4. Das zweite Element _bekommt_ die rote Hintergrundfarbe, aber keinen Rand. Warum? Wegen des `!important`-Flags in der zweiten Regel. Das Hinzufügen des `!important`-Flags nach `border: none` bedeutet, dass diese Deklaration den `border`-Wert in der vorherigen Regel gewinnt, obwohl der ID-Selektor eine höhere Spezifität hat.

> [!NOTE]
> Der einzige Weg, eine wichtige Deklaration zu überschreiben, besteht darin, später in der Quellenreihenfolge eine andere wichtige Deklaration mit _gleicher Spezifität_ einzuführen oder eine mit höherer Spezifität.

Eine Situation, in der Sie das `!important`-Flag verwenden müssen, ist, wenn Sie an einem CMS arbeiten, in dem Sie die Kern-CSS-Module nicht bearbeiten können, und Sie wirklich einen Inline-Stil oder eine wichtige Deklaration überschreiben möchten, die in keiner anderen Weise überschrieben werden kann. Aber wirklich, verwenden Sie es nicht, wenn Sie es vermeiden können.

## Die Auswirkung des CSS-Standorts

Schließlich ist es wichtig zu beachten, dass die Priorität einer CSS-Deklaration davon abhängt, in welchem Stylesheet sie angegeben ist.

Es ist möglich, dass Benutzer benutzerdefinierte Stylesheets einstellen, um die vom Entwickler festgelegten Styles zu überschreiben. Ein sehbehinderter Benutzer könnte zum Beispiel die Schriftgröße auf allen Webseiten, die er besucht, auf das Doppelte der normalen Größe einstellen wollen, um das Lesen zu erleichtern.

### Reihenfolge der deklarierenden Überschreibungen

Widersprüchliche Deklarationen werden in der folgenden Reihenfolge angewendet, wobei spätere Deklarationen frühere überschreiben:

1. Deklarationen in den Benutzeragent-Stylesheets (z. B. die Standardstile des Browsers, die verwendet werden, wenn keine anderen Stile festgelegt sind).
2. Normale Deklarationen in benutzerspezifischen Stylesheets (benutzerdefinierte Stile, die von einem Benutzer eingestellt wurden).
3. Normale Deklarationen in Autoren-Stylesheets (dies sind die von uns, den Webentwicklern, festgelegten Stile).
4. Wichtige Deklarationen in Autoren-Stylesheets.
5. Wichtige Deklarationen in benutzerspezifischen Stylesheets.
6. Wichtige Deklarationen in Benutzeragent-Stylesheets.

> [!NOTE]
> Die Reihenfolge der Priorität ist für mit `!important` gekennzeichnete Stile umgekehrt. Es ist sinnvoll, dass Entwickler-Stylesheets benutzerdefinierte Stylesheets überschreiben, damit das Design wie beabsichtigt beibehalten werden kann; jedoch haben Benutzer manchmal gute Gründe, Entwicklerstile zu überschreiben, wie oben erwähnt, und dies kann erreicht werden, indem `!important` in ihren Regeln verwendet wird.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Die Kaskade](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_tasks).

## Zusammenfassung

Wenn Sie den größten Teil dieses Artikels verstanden haben, dann gut gemacht — Sie haben begonnen, sich mit den grundlegenden Mechanismen von CSS vertraut zu machen.

Wenn Sie die Kaskade, Spezifität und Vererbung nicht vollständig verstanden haben, machen Sie sich keine Sorgen! Dies ist definitiv das komplizierteste, was wir bisher im Kurs behandelt haben, und etwas, das selbst erfahrene Webentwickler manchmal als knifflig empfinden. Wir empfehlen, dass Sie zu diesem Artikel mehrmals zurückkehren, während Sie den Kurs fortsetzen, und darüber nachdenken.

Kehren Sie hierher zurück, wenn Sie auf seltsame Probleme stoßen und die Stile nicht wie erwartet angewendet werden. Es könnte sich um ein Spezifitätsproblem handeln.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics")}}
