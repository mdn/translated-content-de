---
title: Umgang mit Konflikten
slug: Learn_web_development/Core/Styling_basics/Handling_conflicts
l10n:
  sourceCommit: 451c6b58988664128473a881871707c5ec9737f2
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics")}}

Ziel dieser Lektion ist es, Ihr Verständnis für einige der grundlegendsten Konzepte von CSS zu entwickeln – den Cascade-Mechanismus, die Spezifität und Vererbung –, welche steuern, wie CSS auf HTML angewendet wird und wie Konflikte zwischen Stildeklarationen gelöst werden.

Auch wenn das Durcharbeiten dieser Lektion vielleicht weniger direkt relevant und ein wenig akademischer erscheint als andere Teile des Kurses, wird Ihnen das Verständnis dieser Konzepte später viel Schmerz ersparen! Wir ermutigen Sie, diesen Abschnitt sorgfältig durchzuarbeiten und sicherzustellen, dass Sie die Konzepte verstehen, bevor Sie fortfahren.

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
          <li>Der Cascade-Mechanismus.</li>
          <li>Die Hauptkonzepte, die das Ergebnis von Konflikten bestimmen – Spezifität, Quellreihenfolge und Wichtigkeit.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Widersprüchliche Regeln

CSS steht für **Cascading Style Sheets**, und dieses erste Wort _cascading_ ist unglaublich wichtig zu verstehen – das Verhalten der Kaskade ist der Schlüssel zum Verständnis von CSS.

Irgendwann werden Sie an einem Projekt arbeiten und feststellen, dass CSS, das Ihrer Meinung nach auf ein Element angewendet werden sollte, nicht funktioniert. Oft tritt dieses Problem auf, wenn Sie zwei Regeln erstellen, die unterschiedliche Werte derselben Eigenschaft auf dasselbe Element anwenden.

Der [**Cascade**](/de/docs/Web/CSS/CSS_cascade/Cascade) und das eng damit verbundene Konzept der [**Spezifität**](/de/docs/Web/CSS/CSS_cascade/Specificity) sind Mechanismen, die steuern, welche Regel gilt, wenn ein solcher Konflikt auftritt. Die Deklaration, die Ihr Element stylt, ist möglicherweise nicht die, die Sie erwarten, daher müssen Sie verstehen, wie diese Mechanismen funktionieren.

Ein weiteres wichtiges Konzept ist die [**Vererbung**](/de/docs/Web/CSS/CSS_cascade/Inheritance), was bedeutet, dass einige CSS-Eigenschaften standardmäßig Werte erben, die auf dem übergeordneten Element des aktuellen Elements festgelegt sind, manche jedoch nicht. Auch dies kann unerwartetes Verhalten verursachen.

Lassen Sie uns mit einem schnellen Blick auf die wichtigsten Konzepte beginnen, mit denen wir es zu tun haben, und dann werden wir jedes einzelne betrachten und sehen, wie sie miteinander und mit Ihrem CSS interagieren. Diese Konzepte mögen anfangs schwierig zu verstehen sein, aber sie werden klarer, je mehr Sie CSS schreiben.

### Kaskade

Stylesheets [**kaskadieren**](/de/docs/Web/CSS/CSS_cascade/Cascade). Auf einer sehr einfachen Ebene bedeutet dies, dass die Herkunft und die Reihenfolge der CSS-Regeln wichtig sind. Wenn zwei Regeln die gleiche Spezifität haben, wird die zuletzt definierte in dem Stylesheet verwendet. Es gibt andere Konzepte, die ebenfalls Einfluss haben, wie z.B. [Kaskadenebenen](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers), aber diese sind fortgeschrittener und werden hier nicht im Detail behandelt.

Im untenstehenden Beispiel haben wir zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der `<h1>`-Inhalt wird letztendlich blau gefärbt. Das liegt daran, dass beide Regeln aus derselben Quelle stammen, einen identischen Elementselektor haben und daher dieselbe Spezifität besitzen, aber die letzte in der Quellreihenfolge gewinnt.

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

[Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) ist ein Algorithmus, den der Browser verwendet, um zu entscheiden, welcher Eigenschaftswert auf ein Element angewendet wird. Wenn mehrere Regeln unterschiedliche Selektoren haben, die unterschiedliche Werte für dieselbe Eigenschaft festlegen und dasselbe Element ansprechen, entscheidet die Spezifität über den Eigenschaftswert, der auf das Element angewendet wird. Spezifität ist im Grunde ein Maß dafür, wie spezifisch die Auswahl eines Selektors sein wird:

- Ein Typ-(Element-)Selektor ist weniger spezifisch; er wählt alle Elemente dieses Typs aus, die auf einer Seite erscheinen, daher hat er weniger Gewicht. Pseudoelement-Selektoren haben die gleiche Spezifität wie reguläre Elementselektoren.
- Ein Klassenselektor ist spezifischer; er wählt nur die Elemente auf einer Seite aus, die einen bestimmten `class`-Attributwert haben, daher hat er mehr Gewicht. Attributselektoren und Pseudo-Klassen haben das gleiche Gewicht wie eine Klasse.
- Ein ID-Selektor ist noch spezifischer – er wählt nur ein einzelnes Element mit einem bestimmten `id`-Wert aus und hat daher noch mehr Gewicht.

Unten haben wir erneut zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der `<h1>`-Inhalt unten wird `rot` gefärbt, obwohl die `color: blue`-Deklaration später in der Quellreihenfolge erscheint, weil der Klassenselektor `main-heading` seiner Regel eine höhere Spezifität gibt als der Typselektor `h1`. Die Deklaration mit der höheren Spezifität, definiert durch den Klassenselektor, wird angewendet.

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

Wir werden den Spezifitätsalgorithmus später erklären.

### Vererbung

Vererbung muss in diesem Zusammenhang ebenfalls verstanden werden – einige CSS-Eigenschaftswerte, die auf übergeordnete Elemente angewendet werden, werden von ihren Kindelementen geerbt, andere nicht.

Wenn Sie beispielsweise ein `color` und `font-family` auf einem Element festlegen, wird jedes darin enthaltene Element ebenfalls mit dieser Farbe und Schriftart gestaltet, es sei denn, Sie haben direkt andere Farb- und Schriftwerte auf sie angewendet.

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

Einige Eigenschaften werden nicht geerbt – zum Beispiel {{cssxref("width")}}. Wenn Sie eine `width` von `50%` auf ein Element festlegen, erhalten nicht alle Nachkommen eine Breite von `50%` der Breite des übergeordneten Elements. Wenn das der Fall wäre, wäre CSS sehr frustrierend zu verwenden!

> [!NOTE]
> Auf den MDN-CSS-Eigenschaftsreferenzseiten finden Sie ein technisches Informationsfeld namens "Formale Definition", das eine Reihe von Datenpunkten zu dieser Eigenschaft auflistet, einschließlich der Information, ob sie geerbt wird oder nicht. Siehe den Abschnitt [Formale Definition der Farbeigenschaft](/de/docs/Web/CSS/color#formal_definition) als Beispiel.

### Verstehen, wie die Konzepte zusammenarbeiten

Diese drei Konzepte (Kaskade, Spezifität und Vererbung) steuern zusammen, welches CSS auf welches Element angewendet wird. In den folgenden Abschnitten werden wir sehen, wie sie zusammenarbeiten. Es kann manchmal ein wenig kompliziert erscheinen, aber Sie werden anfangen, sich daran zu erinnern, je mehr Erfahrung Sie mit CSS sammeln, und Sie können immer die Details nachschlagen, wenn Sie sie vergessen! Selbst erfahrene Entwickler erinnern sich nicht an alle Details.

## Verstehen der Vererbung

Wir beginnen mit der Vererbung. Im Beispiel unten haben wir ein {{HTMLElement("ul")}}-Element mit zwei Ebenen von verschachtelten ungeordneten Listen. Wir haben der äußeren `<ul>` einen Rahmen, ein Padding und eine Schriftfarbe gegeben.

Die `color`-Eigenschaft ist eine vererbte Eigenschaft. Daher wird der `color`-Eigenschaftswert sowohl auf die direkten Kinder als auch auf die indirekten Kinder angewendet – die direkten Kindelemente `<li>`s und die in der ersten verschachtelten Liste. Dann haben wir der zweiten verschachtelten Liste die Klasse `special` hinzugefügt und eine andere Farbe darauf angewendet. Diese wird dann an ihre Kinder vererbt.

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

Eigenschaften wie `width` (wie bereits erwähnt), `margin`, `padding` und `border` sind keine geerbten Eigenschaften. Wenn in diesem Listenbeispiel ein Rahmen von den Kindern geerbt werden würde, würde jede einzelne Liste und jedes Listenelement einen Rahmen erhalten – wahrscheinlich nicht ein Effekt, den wir jemals wollen würden!

Auch wenn auf jeder CSS-Eigenschaftsseite aufgelistet ist, ob die Eigenschaft geerbt wird oder nicht, können Sie oft intuitiv erraten, ob Sie wissen, welcher Aspekt des Eigenschaftswerts gestaltet wird.

### Vererbung steuern

CSS bietet fünf spezielle universelle Eigenschaftswerte zur Steuerung der Vererbung. Jede CSS-Eigenschaft akzeptiert diese Werte.

- {{cssxref("inherit")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf denselben Wert wie der des übergeordneten Elements. Im Wesentlichen "schaltet" dies die Vererbung "ein".
- {{cssxref("initial")}}
  - : Setzt den auf ein ausgewähltes Element angewendeten Eigenschaftswert auf den [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) dieser Eigenschaft.
- {{cssxref("revert")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf das Standardstyling des Browsers zurück, statt auf die Standardwerte, die auf diese Eigenschaft angewendet werden. Dieser Wert verhält sich in vielen Fällen wie {{cssxref("unset")}}.
- {{cssxref("revert-layer")}}
  - : Setzt den auf ein ausgewähltes Element angewendeten Eigenschaftswert auf den Wert zurück, der in einer vorherigen [Kaskadenschicht](/de/docs/Web/CSS/@layer) festgelegt wurde.
- {{cssxref("unset")}}
  - : Setzt die Eigenschaft auf ihren natürlichen Wert zurück, was bedeutet, dass sie, wenn die Eigenschaft natürlich vererbt wird, wie `inherit` wirkt, andernfalls wie `initial`.

> [!NOTE]
> Weitere Informationen zu jedem dieser Werte und deren Funktionsweise finden Sie unter [Ursprungstypen](/de/docs/Web/CSS/CSS_cascade/Cascade#origin_types).

### Spielen mit Vererbungssteuerungseigenschaften

Wir können uns eine Liste von Links ansehen und erforschen, wie universelle Werte funktionieren. Das Live-Beispiel unten ermöglicht es Ihnen, mit dem CSS zu spielen und zu sehen, was passiert, wenn Sie Änderungen vornehmen. Mit Code zu spielen ist wirklich der beste Weg, um HTML und CSS besser zu verstehen.

Zum Beispiel:

1. Das zweite Listenelement hat die Klasse `my-class-1` angewendet. Dies setzt die Farbe des Eingebetteten `<a>`-Elements auf `inherit`. Wenn Sie die Regel entfernen, wie ändert sich dann die Farbe des Links?
2. Verstehen Sie, warum der dritte und vierte Link die Farbe haben, die sie haben? Der dritte Link ist auf `initial` gesetzt, was bedeutet, dass er den Anfangswert der Eigenschaft verwendet (in diesem Fall schwarz) und nicht den Browserschriftwert für Links, der blau ist. Der vierte ist auf `unset` gesetzt, was bedeutet, dass der Linktext die Farbe des übergeordneten Elements, also grün, verwendet.
3. Welcher der Links wird die Farbe ändern, wenn Sie eine neue Farbe für das `<a>`-Element definieren – z.B. `a { color: red; }`?
4. Nachdem Sie den nächsten Abschnitt über das Zurücksetzen aller Eigenschaften gelesen haben, kehren Sie zurück und ändern Sie die `color`-Eigenschaft in `all`. Beachten Sie, wie der zweite Link in einer neuen Zeile steht und einen Aufzählungszeichen hat. Welche Eigenschaften denken Sie, wurden vererbt?

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

Die CSS-Kurzschreibweise [`all`](/de/docs/Web/CSS/all) kann verwendet werden, um einen dieser Vererbungswerte auf (fast) alle Eigenschaften gleichzeitig anzuwenden. Sein Wert kann einer der Vererbungswerte (`inherit`, `initial`, `revert`, `revert-layer` oder `unset`) sein. Es ist ein praktischer Weg, um Änderungen an Stilen rückgängig zu machen, sodass Sie wieder zu einem bekannten Ausgangspunkt zurückkehren können, bevor Sie neue Änderungen beginnen.

Im untenstehenden Beispiel haben wir zwei Blockzitate. Das erste hat auf das Blockzitat selbst angewendete Stile. Das zweite hat eine Klasse auf das Blockzitat angewendet, die den Wert von `all` auf `unset` setzt.

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

Wir verstehen jetzt, dass Vererbung der Grund dafür ist, warum ein tief in der Struktur Ihres HTML verschachtelter Absatz die gleiche Farbe wie das CSS hat, das auf den Hauptteil angewendet wurde. Aus den einführenden Lektionen wissen wir, wie wir das CSS ändern können, das jederzeit an einer Stelle im Dokument auf etwas angewendet wird – ob durch Zuweisen von CSS zu einem Element oder durch Erstellen einer Klasse. Wir werden uns nun ansehen, wie die Kaskade definiert, welche CSS-Regeln gelten, wenn mehr als ein Stilblock die gleiche Eigenschaft, aber mit unterschiedlichen Werten, auf dasselbe Element anwendet.

Es gibt drei Faktoren zu berücksichtigen, die hier in aufsteigender Reihenfolge der Wichtigkeit aufgeführt sind. Spätere überstimmen frühere:

1. **Quellreihenfolge**
2. **Spezifität**
3. **Wichtigkeit**

Wir werden uns diese Faktoren anschauen, um zu sehen, wie Browser genau herausfinden, welches CSS angewendet werden soll.

### Quellreihenfolge

Wir haben bereits gesehen, wie die Quellreihenfolge für die Kaskade wichtig ist. Wenn Sie mehr als eine Regel haben, die alle genau das gleiche Gewicht haben, gewinnt diejenige, die zuletzt im CSS kommt. Sie können sich das so vorstellen: Die Regel, die näher am Element selbst liegt, löscht die früheren, bis die letzte gewinnt und das Element stylen darf.

Die Quellreihenfolge ist nur wichtig, wenn die Gewichte der Regeln gleich sind, also schauen wir uns als nächstes die Spezifität an.

### Spezifität

Sie werden oft in eine Situation geraten, in der Sie wissen, dass eine Regel später im Stylesheet kommt, aber eine frühere, widersprüchliche Regel angewendet wird. Das passiert, weil die frühere Regel eine **höhere Spezifität** hat – sie ist spezifischer und wird daher vom Browser als diejenige gewählt, die das Element stylen sollte.

Wie wir bereits früher in dieser Lektion gesehen haben, hat ein Klassenselektor mehr Gewicht als ein Elementselektor, sodass die in dem Klassens

tilblock definierten Eigenschaften die in dem Elementstilblock definierten überschreiben werden.

Etwas, das hier zu beachten ist, ist, dass obwohl wir über Selektoren nachdenken und die sich daraus ergebenden Regeln, sie nur die Eigenschaften überschreiben, die an mehreren Stellen deklariert werden.

Dieses Verhalten hilft, Wiederholungen in Ihrem CSS zu vermeiden. Eine übliche Praxis besteht darin, generische Stile für die grundlegenden Elemente zu definieren und dann Klassen für diejenigen zu erstellen, die unterschiedlich sind. Zum Beispiel haben wir im untenstehenden Stylesheet generische Stile für die Überschriften der Ebene 2 definiert und dann einige Klassen erstellt, die nur einige der Eigenschaften und Werte ändern. Die zuerst definierten Werte werden auf alle Überschriften angewendet, dann werden die spezifischeren Werte auf die Überschriften mit den Klassen angewendet.

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

Lassen Sie uns nun sehen, wie der Browser die Spezifität berechnet. Wir wissen bereits, dass ein Elementselektor eine niedrige Spezifität hat und von einer Klasse überschrieben werden kann. Im Wesentlichen wird ein Wert in Punkten verschiedenen Selektortypen zugewiesen, und das Addieren dieser gibt Ihnen das Gewicht des spezifischen Selektors, welches dann gegen andere mögliche Übereinstimmungen beurteilt werden kann.

Die Menge an Spezifität, die ein Selektor hat, wird mit drei unterschiedlichen Werten (oder Komponenten) gemessen, die sich als ID-, CLASS- und ELEMENT-Spalten vorstellen lassen, die jeweils Hunderte, Zehner und Einsen wert sind:

- **IDs**: Vergibt einen Punkt in dieser Spalte (100 Punkte) für jeden ID-Selektor, der im gesamten Selektor enthalten ist.
- **Klassen**: Vergibt einen Punkt in dieser Spalte (10 Punkte) für jeden Klassenselektor, Attributselektor oder Pseudoklasse, die im gesamten Selektor enthalten ist.
- **Elemente**: Vergibt einen Punkt in dieser Spalte (1 Punkt) für jeden Elementselektor oder Pseudoelement, das im gesamten Selektor enthalten ist.

> [!NOTE]
> Der universelle Selektor ([`*`](/de/docs/Web/CSS/Universal_selectors)), [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators) (`+`, `>`, `~`, ' '), und der Spezifikitätsanpassungsselektor ([`:where()`](/de/docs/Web/CSS/:where)) zusammen mit seinen Parametern, haben keinen Einfluss auf die Spezifität.

Die folgende Tabelle zeigt einige isolierte Beispiele, um Sie in Stimmung zu bringen. Versuchen Sie, diese durchzugehen, und stellen Sie sicher, dass Sie verstehen, warum sie die Spezifität haben, die wir ihnen gegeben haben. Wir haben Selektoren noch nicht im Detail behandelt, aber Sie können Details zu jedem Selektor im MDN [Selektorenreferenz](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators) finden.

| Selektor                                  | IDs | Klassen | Elemente | Gesamtspezifität |
| ----------------------------------------- | --- | ------- | -------- | ---------------- |
| `h1`                                      | 0   | 0       | 1        | 0-0-1            |
| `h1 + p::first-letter`                    | 0   | 0       | 3        | 0-0-3            |
| `li > a[href*="en-US"] > .inline-warning` | 0   | 2       | 2        | 0-2-2            |
| `#identifier`                             | 1   | 0       | 0        | 1-0-0            |

#### Detailliertes Spezifitätsbeispiel

Bevor wir fortfahren, schauen wir uns ein Beispiel in Aktion an. Möglicherweise möchten Sie dies im MDN Playground in einem separaten Tab öffnen, damit Sie es leicht als Referenz nutzen können, während Sie die Erklärung lesen.

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

Was passiert hier also? Zuerst interessieren wir uns nur für die ersten sieben Regeln dieses Beispiels, und wie Sie bemerken werden, haben wir ihre Spezifitätswerte in einem Kommentar vor jeder Regel eingefügt.

- Die ersten zwei Selektoren konkurrieren um das Styling der `background-color` des Links. Der zweite gewinnt und macht die Hintergrundfarbe `blau`, weil er einen zusätzlichen ID-Selektor in der Kette hat: seine Spezifität ist 2-0-1 gegenüber 1-0-1.
- Selektoren 3 und 4 konkurrieren um das Styling der Textfarbe `color` des Links. Der zweite gewinnt und macht den Text `weiß`, weil obwohl er einen Elementselektor weniger hat, der fehlende Selektor durch einen Klassenselektor ersetzt wurde, der mehr Gewicht hat als ein Elementselektor. Die gewinnende Spezifität ist 1-1-3 gegenüber 1-0-4.
- Selektoren 5–7 konkurrieren um das Styling der `border` des Links beim Hover. Selektor 6 verliert offensichtlich gegen Selektor 5 mit einer Spezifität von 0-2-3 gegenüber 0-2-4; er hat einen Elementselektor weniger in der Kette. Selektor 7 schlägt jedoch sowohl Selektor 5 als auch 6, weil er die gleiche Anzahl an Unterselektoren in der Kette wie Selektor 5 hat, aber ein Element durch einen Klassenselektor ersetzt wurde. Die gewinnende Spezifität ist 0-3-3 gegenüber 0-2-3 und 0-2-4.

> [!NOTE]
> Jeder Selektortyp hat seine eigene Spezifitätsstufe, die von Selektoren mit niedrigerer Spezifität nicht überschrieben werden kann. Zum Beispiel könnten eine _Million_ **Klassen**selektoren in Kombination die Spezifität eines _einzelnen_ **Id**-Selektors nicht überschreiben.
>
> Der beste Weg, die Spezifität zu beurteilen, besteht darin, die Spezifitätsstufen einzeln von der höchsten ausgehend zu bewerten und sich dann bei Bedarf zur niedrigsten hinunter zu bewegen. Nur wenn zwischen Selektorpunkten innerhalb einer Spezifikationsspalte ein Gleichstand herrscht, müssen Sie die nächste Spalte darunter bewerten; andernfalls können Sie die niedrigeren Spezifitätsselektoren ignorieren, da sie die höheren Spezifitätsselektoren nie überschreiben können.

#### IDs versus Klassen

ID-Selektoren haben eine hohe Spezifität. Das bedeutet, dass Stile, die basierend auf der Übereinstimmung mit einem ID-Selektor angewendet werden, Stile überschreiben, die auf anderen Selektoren basieren, einschließlich Klassen- und Typselektoren. Da eine ID nur einmal auf einer Seite vorkommen kann und aufgrund der hohen Spezifität von ID-Selektoren, ist es vorzuziehen, einem Element eine Klasse hinzuzufügen, anstatt eine ID.

Wenn die Verwendung der ID die einzige Möglichkeit ist, das Element anzusprechen – vielleicht weil Sie keinen Zugriff auf das Markup haben und es nicht bearbeiten können – ziehen Sie in Betracht, die ID innerhalb eines [Attributselektors](/de/docs/Web/CSS/Attribute_selectors) zu verwenden, wie `p[id="header"]`.

### Inline-Stile

Inline-Stile, d.h. die Stildeklarationen innerhalb eines [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attributs, haben Vorrang vor allen normalen Stilen, egal wie hoch die Spezifität ist. Solche Deklarationen haben keine Selektoren, aber ihre Spezifität kann als 1-0-0-0 verstanden werden; immer höher als jedes andere Spezifitätsgewicht, unabhängig davon, wie viele IDs in den Selektoren sind.

### !important

Es gibt ein spezielles CSS-Tool, das Sie verwenden können, um alle obigen Berechnungen zu überstimmen, sogar Inline-Stile – das `!important`-Flag. Sie sollten jedoch sehr vorsichtig bei der Verwendung sein. Dieses Flag wird verwendet, um ein einzelnes Eigenschafts- und Wertepaar zur spezifischsten Regel zu machen und damit die normalen Regeln der Kaskade zu überschreiben, einschließlich der normalen Inline-Stile.

> [!NOTE]
> Es ist nützlich, zu wissen, dass das `!important`-Flag existiert, damit Sie wissen, was es ist, wenn Sie es im Code anderer Leute sehen. **Wir empfehlen jedoch dringend, es nur zu verwenden, wenn Sie absolut müssen.** Das `!important`-Flag ändert die normale Funktionsweise der Kaskade, was das Debuggen von CSS-Problemen besonders in einem großen Stylesheet wirklich schwierig machen kann.

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

Lassen Sie uns dies durchgehen, um zu sehen, was passiert – versuchen Sie, einige der Eigenschaften zu entfernen, um zu sehen, was passiert, wenn Sie Schwierigkeiten haben, es zu verstehen:

1. Sie werden sehen, dass die `color`- und `padding`-Werte der dritten Regel angewendet wurden, aber nicht die `background-color`. Warum? Eigentlich sollten doch alle drei gelten, da Regeln später in der Quellreihenfolge im Allgemeinen frühere Regeln überschreiben.
2. Die weiter oben stehenden Regeln setzen sich jedoch durch, da Klassenselektoren eine höhere Spezifität haben als Element selektoren.
3. Beide Elemente haben a [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) von `better`, aber das 2. Element hat zusätzlich eine [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) von `winning`. Da IDs eine _noch höhere_ Spezifität als Klassen haben, sollten sowohl die `rote` `background-color` als auch der `1px schwarze` `border` auf das 2. Element angewendet werden, wobei das erste Element den grauen Hintergrund und keinen Rahmen erhält, wie in der Klasse angegeben.
4. Das 2. Element _bekommt_ die `rote` `background-color`, aber keinen `border`. Warum? Wegen des `!important`-Flags in der zweiten Regel. Das Hinzufügen des `!important`-Flags nach `border: none` bedeutet, dass diese Deklaration gegenüber dem `border`-Wert in der vorherigen Regel gewinnt, obwohl der ID-Selektor eine höhere Spezifität hat.

> [!NOTE]
> Die einzige Möglichkeit, eine wichtige Deklaration zu überschreiben, besteht darin, eine weitere wichtige Deklaration mit der _gleichen Spezifität_ später in der Quellreihenfolge oder eine mit höherer Spezifität einzufügen.

Eine Situation, in der Sie möglicherweise das `!important`-Flag verwenden müssen, ist, wenn Sie an einem CMS arbeiten, bei dem Sie die Kern-CSS-Module nicht bearbeiten können und wirklich einen Inline-Stil oder eine wichtige Deklaration überschreiben möchten, die nicht auf andere Weise überschrieben werden kann. Aber wirklich, verwenden Sie es nicht, wenn Sie es vermeiden können.

## Der Effekt des CSS-Standorts

Schließlich ist es wichtig zu beachten, dass die Vorrangstellung einer CSS-Deklaration davon abhängt, in welchem Stylesheet sie spezifiziert ist.

Es ist möglich, dass Benutzer benutzerdefinierte Stylesheets setzen, um die Stile des Entwicklers zu überschreiben. Beispielsweise möchte ein sehbehinderter Benutzer möglicherweise die Schriftgröße auf allen von ihm besuchten Webseiten auf das Doppelte der normalen Größe einstellen, um das Lesen zu erleichtern.

### Reihenfolge der überschreibenden Deklarationen

Widersprüchliche Deklarationen werden in der folgenden Reihenfolge angewendet, wobei spätere frühere Deklarationen überschreiben:

1. Deklarationen in Benutzeragent-Stylesheets (z.B. die Standardstile des Browsers, die verwendet werden, wenn keine anderen Stile festgelegt sind).
2. Normale Deklarationen in Benutzer-Stylesheets (benutzerdefinierte Stile, die von einem Benutzer festgelegt sind).
3. Normale Deklarationen in Autor-Stylesheets (das sind die von uns, den Webentwicklern, festgelegten Stile).
4. Wichtige Deklarationen in Autor-Stylesheets.
5. Wichtige Deklarationen in Benutzer-Stylesheets.
6. Wichtige Deklarationen in Benutzeragent-Stylesheets.

> [!NOTE]
> Die Vorrangreihenfolge ist für mit `!important` gekennzeichnete Styles invertiert. Es ergibt Sinn, dass die Stylesheets der Webentwickler die Benutzer-Stylesheets überschreiben, damit das Design wie beabsichtigt bleibt; jedoch haben Benutzer manchmal gute Gründe, die Stile der Webentwickler zu überschreiben, wie oben erwähnt, und dies kann durch die Verwendung von `!important` in ihren Regeln erreicht werden.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Die Kaskade](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade).

## Zusammenfassung

Wenn Sie den Großteil dieses Artikels verstanden haben, dann herzlichen Glückwunsch — Sie haben begonnen, sich mit den grundlegenden Mechanismen von CSS vertraut zu machen.

Wenn Sie die Kaskade, Spezifität und Vererbung nicht vollständig verstanden haben, dann machen Sie sich keine Sorgen! Dies ist definitiv das komplizierteste, das wir bisher im Kurs behandelt haben, und es ist etwas, das selbst professionelle Webentwickler manchmal knifflig finden. Wir empfehlen, dass Sie zu diesem Artikel ein paar Mal zurückkehren, während Sie den Kurs fortsetzen, und weiterhin darüber nachdenken.

Kommen Sie hierher zurück, wenn Sie auf seltsame Probleme stoßen, bei denen Stile nicht wie erwartet angewendet werden. Es könnte ein Spezifitätsproblem sein.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics")}}
