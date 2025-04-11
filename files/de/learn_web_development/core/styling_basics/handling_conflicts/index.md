---
title: Umgang mit Konflikten
slug: Learn_web_development/Core/Styling_basics/Handling_conflicts
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics")}}

Das Ziel dieser Lektion ist es, Ihr Verständnis für einige der fundamentalsten Konzepte von CSS zu entwickeln – die Kaskade, Spezifität und Vererbung –, die kontrollieren, wie CSS auf HTML angewendet wird und wie Konflikte zwischen Stildeklarationen gelöst werden.

Obwohl diese Lektion auf den ersten Blick weniger relevant und ein wenig akademischer erscheinen mag als einige andere Teile des Kurses, wird Ihnen das Verständnis dieser Konzepte später viel Ärger ersparen! Wir ermutigen Sie, diesen Abschnitt sorgfältig durchzuarbeiten und sicherzustellen, dass Sie die Konzepte verstehen, bevor Sie fortfahren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (erforschen Sie
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

CSS steht für **Cascading Style Sheets**, und dieses erste Wort _Kaskade_ ist unglaublich wichtig zu verstehen – die Funktionsweise der Kaskade ist entscheidend für das Verständnis von CSS.

Irgendwann werden Sie an einem Projekt arbeiten und feststellen, dass das CSS, das Sie dachten, auf ein Element angewendet werden sollte, nicht funktioniert. Oft liegt das Problem darin, dass Sie zwei Regeln erstellen, die unterschiedliche Werte derselben Eigenschaft auf dasselbe Element anwenden. [**Kaskade**](/de/docs/Web/CSS/CSS_cascade/Cascade) und das eng verwandte Konzept der [**Spezifität**](/de/docs/Web/CSS/CSS_cascade/Specificity) sind Mechanismen, die kontrollieren, welche Regel angewendet wird, wenn es zu einem solchen Konflikt kommt. Die Regel, die Ihr Element stilisiert, ist möglicherweise nicht die, die Sie erwarten, daher müssen Sie verstehen, wie diese Mechanismen funktionieren.

Ebenso bedeutsam ist das Konzept der [**Vererbung**](/de/docs/Web/CSS/CSS_cascade/Inheritance), das bedeutet, dass einige CSS-Eigenschaften standardmäßig Werte übernehmen, die am übergeordneten Element des aktuellen Elements eingestellt sind und einige nicht. Dies kann ebenfalls zu einem Verhalten führen, das Sie möglicherweise nicht erwarten.

Lassen Sie uns nun einen schnellen Blick auf die wichtigsten Dinge werfen, mit denen wir es zu tun haben, dann sehen wir uns jedes Einzelne genauer an und wie sie miteinander und mit Ihrem CSS interagieren. Diese können wie eine schwierige Reihe von Konzepten erscheinen, die es zu verstehen gilt. Mit mehr Übung beim Schreiben von CSS wird die Funktionsweise offensichtlicher für Sie.

### Kaskade

Stylesheets [**kaskadieren**](/de/docs/Web/CSS/CSS_cascade/Cascade) – auf sehr einfachem Niveau bedeutet das, dass die Herkunft und die Reihenfolge von CSS-Regeln wichtig sind. Wenn zwei Regeln beide die gleiche Spezifität haben, wird diejenige, die zuletzt im Stylesheet definiert ist, verwendet. Es gibt weitere Konzepte, die eine Wirkung haben, wie z.B. [Cascade Layers](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers), aber diese sind fortgeschrittener und werden hier nicht im Detail behandelt.

Im folgenden Beispiel haben wir zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der Inhalt des `<h1>` ist letztendlich blau gefärbt. Dies liegt daran, dass beide Regeln aus derselben Quelle stammen, einen identischen Elementselektor haben und daher dieselbe Spezifität tragen, aber die letzte in der Quellreihenfolge gewinnt.

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

- Ein Elementselektor ist weniger spezifisch; er wählt alle Elemente dieses Typs auf einer Seite aus, daher hat er weniger Gewicht. Pseudo-Element-Selektoren haben die gleiche Spezifität wie reguläre Elementselektoren.
- Ein Klassenselektor ist spezifischer; er wählt nur die Elemente auf einer Seite aus, die einen bestimmten `class`-Attributwert haben, und hat daher mehr Gewicht. Attributselektoren und Pseudo-Klassen haben dasselbe Gewicht wie eine Klasse.

Unten haben wir wieder zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der `<h1>`-Inhalt wird unten rot, weil der Klassenselektor `main-heading` seinem Regelwerk eine höhere Spezifität verleiht. Selbst wenn die Regel mit dem `<h1>`-Elementselektor weiter unten in der Quellreihenfolge steht, wird die mit der höheren Spezifität, definiert mit dem Klassenselektor, angewendet.

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

Vererbung muss in diesem Kontext auch verstanden werden – einige CSS-Eigenschaftswerte, die auf Elternelementen festgelegt sind, werden von ihren Kindelementen geerbt, andere nicht.

Wenn Sie zum Beispiel eine `color` und `font-family` auf ein Element setzen, wird jedes Element darin ebenfalls mit dieser Farbe und dieser Schriftart gestaltet, es sei denn, Sie haben direkt andere Werte für Farbe und Schriftart auf sie angewendet.

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

Einige Eigenschaften werden nicht vererbt – wenn Sie zum Beispiel eine {{cssxref("width")}} von 50% auf ein Element setzen, erhalten alle seine Nachfahren nicht automatisch eine Breite von 50% der ihres übergeordneten Elements. Wenn dies der Fall wäre, wäre CSS sehr frustrierend zu verwenden!

> [!NOTE]
> Auf den MDN-Referenzseiten zu CSS-Eigenschaften finden Sie eine technische Informationsbox namens "Formale Definition", die eine Reihe von Datenpunkten über diese Eigenschaft auflistet, einschließlich dessen, ob sie vererbt wird oder nicht. Sehen Sie sich den [Formale Definition für die Farbeigenschaft](/de/docs/Web/CSS/color#formal_definition) als Beispiel an.

### Verständnis, wie die Konzepte zusammenarbeiten

Diese drei Konzepte (Kaskade, Spezifität und Vererbung) kontrollieren zusammen, welches CSS auf welches Element angewendet wird. In den folgenden Abschnitten werden wir sehen, wie sie zusammenarbeiten. Manchmal kann es ein wenig kompliziert erscheinen, aber Sie werden anfangen, sich an sie zu erinnern, wenn Sie mehr Erfahrung mit CSS sammeln, und Sie können jederzeit die Einzelheiten nachschlagen, wenn Sie sie vergessen! Auch erfahrene Entwickler erinnern sich nicht immer an alle Details.

## Das Verständnis der Vererbung

Lassen Sie uns mit der Vererbung beginnen. Im folgenden Beispiel haben wir ein {{HTMLElement("ul")}}-Element mit zwei Ebenen von ungeordneten Listen innerhalb davon. Wir haben der äußeren `<ul>` eine Umrandung, Füllung und Schriftfarbe gegeben.

Die `color`-Eigenschaft ist eine vererbte Eigenschaft. Daher wird der `color`-Eigenschaftswert auf die direkten Nachkommen und auch auf die indirekten Nachkommen angewendet – die unmittelbaren Kind-`<li>`-Elemente und jene innerhalb der ersten verschachtelten Liste. Wir haben dann der zweiten verschachtelten Liste die Klasse `special` hinzugefügt und eine andere Farbe darauf angewendet. Dies wird dann durch seine Kinder weiter vererbt.

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

Eigenschaften wie `width` (wie bereits erwähnt), `margin`, `padding` und `border` sind keine vererbten Eigenschaften. Wenn eine Umrandung in diesem Listenbeispiel von den Kindern geerbt würde, hätte jede einzelne Liste und jedes Listenelement eine Umrandung – wahrscheinlich nicht ein Effekt, den wir jemals haben möchten!

Obwohl auf jeder CSS-Eigenschaftsseite aufgelistet ist, ob die Eigenschaft vererbt wird oder nicht, können Sie oft dasselbe intuitiv erraten, wenn Sie wissen, welchen Aspekt der Eigenschaftswert stilisieren wird.

### Kontrolle der Vererbung

CSS bietet fünf spezielle universelle Eigenschaftswerte zur Kontrolle der Vererbung. Jede CSS-Eigenschaft akzeptiert diese Werte.

- {{cssxref("inherit")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf den gleichen wie der seines Elternelements. Effektiv wird dadurch die Vererbung "eingeschaltet".
- {{cssxref("initial")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf den [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) dieser Eigenschaft.
- {{cssxref("revert")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf das Styling des Browsers zurück, anstatt auf die Standards, die auf diese Eigenschaft angewendet werden. Dieser Wert wirkt in vielen Fällen wie {{cssxref("unset")}}.
- {{cssxref("revert-layer")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf den Wert zurück, der in einer vorherigen [Kaskadenschicht](/de/docs/Web/CSS/@layer) festgelegt wurde.
- {{cssxref("unset")}}
  - : Setzt die Eigenschaft auf ihren natürlichen Wert zurück, was bedeutet, dass wenn die Eigenschaft natürlich vererbt wird, sie wie `inherit` wirkt, andernfalls wirkt sie wie `initial`.

> [!NOTE]
> Weitere Informationen zu diesen und ihrer Funktionsweise finden Sie unter [Ursprungstypen](/de/docs/Web/CSS/CSS_cascade/Cascade#origin_types).

Wir können eine Liste von Links betrachten und erkunden, wie universelle Werte funktionieren. Das Live-Beispiel unten ermöglicht es Ihnen, mit dem CSS zu spielen und zu sehen, was passiert, wenn Sie Änderungen vornehmen. Mit Code zu spielen ist wirklich der beste Weg, um HTML und CSS besser zu verstehen.

Zum Beispiel:

1. Das zweite Listenelement hat die Klasse `my-class-1` angewendet. Diese setzt die Farbe des darin verschachtelten `<a>`-Elements auf `inherit`. Wenn Sie die Regel entfernen, wie ändert sich die Farbe des Links?
2. Verstehen Sie, warum der dritte und vierte Link die Farben haben, die sie haben? Der dritte Link ist auf `initial` gesetzt, was bedeutet, dass er den Anfangswert der Eigenschaft verwendet (in diesem Fall schwarz) und nicht den Browserstandard für Links, der blau ist. Der vierte ist auf `unset` gesetzt, was bedeutet, dass der Linktext die Farbe des Elternelements, grün, verwendet.
3. Welche der Links ändert die Farbe, wenn Sie eine neue Farbe für das `<a>`-Element definieren – zum Beispiel `a { color: red; }`?
4. Nachdem Sie den nächsten Abschnitt über das Zurücksetzen aller Eigenschaften gelesen haben, kommen Sie zurück und ändern Sie die `color`-Eigenschaft in `all`. Beachten Sie, wie der zweite Link in einer neuen Zeile steht und ein Aufzählungszeichen hat. Welche Eigenschaften denken Sie, wurden vererbt?

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

Die CSS-Kurzschreibeeigenschaft [`all`](/de/docs/Web/CSS/all) kann verwendet werden, um einen dieser Vererbungswerte auf (fast) alle Eigenschaften gleichzeitig anzuwenden. Ihr Wert kann einer der Vererbungswerte sein (`inherit`, `initial`, `revert`, `revert-layer` oder `unset`). Es ist eine bequeme Möglichkeit, Änderungen an Stilen rückgängig zu machen, sodass Sie zu einem bekannten Ausgangspunkt zurückkehren können, bevor Sie neue Änderungen beginnen.

Im folgenden Beispiel haben wir zwei Blockzitate. Das erste hat Stil auf das Blockzitat-Element selbst angewendet. Das zweite hat eine Klasse angewendet, die das Blockzitat hat, welche den Wert von `all` auf `unset` setzt.

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

Wir verstehen jetzt, dass Vererbung der Grund ist, warum ein Absatz, der tief in der Struktur Ihres HTML verschachtelt ist, dieselbe Farbe hat wie das CSS, das auf den Körper angewendet wird. Aus den einführenden Lektionen haben wir ein Verständnis dafür, wie das CSS, das an jedem Punkt im Dokument angewendet wird, geändert werden kann – ob durch Zuweisung von CSS an ein Element oder durch Erstellen einer Klasse. Nun werden wir uns ansehen, wie die Kaskade definiert, welche CSS-Regeln angewendet werden, wenn mehr als ein Stilblock dieselbe Eigenschaft, aber mit unterschiedlichen Werten, auf dasselbe Element anwenden.

Es gibt drei Faktoren zu berücksichtigen, die hier nach steigender Wichtigkeit aufgelistet sind. Spätere überstimmen frühere:

1. **Quellreihenfolge**
2. **Spezifität**
3. **Wichtigkeit**

Wir werden uns diese ansehen, um herauszufinden, wie Browser genau ermitteln, welches CSS angewendet werden sollte.

### Quellreihenfolge

Wir haben bereits gesehen, wie die Quellreihenfolge für die Kaskade von Bedeutung ist. Wenn Sie mehr als eine Regel haben, die alle genau dasselbe Gewicht haben, dann gewinnt diejenige, die zuletzt im CSS kommt. Sie können darüber nachdenken, dass die Regel, die dem eigentlichen Element näher ist, die früheren überschreibt, bis die letzte gewinnt und das Element stilisiert.

Die Quellreihenfolge zählt nur, wenn die Spezifitätsgewichte der Regeln gleich sind, lassen Sie uns also die Spezifität betrachten:

### Spezifität

Häufig werden Sie auf eine Situation stoßen, in der Sie wissen, dass eine Regel in der Stylesheet weiter unten steht, eine frühere, widersprüchliche Regel jedoch angewendet wird. Dies geschieht, weil die frühere Regel eine **höhere Spezifität** hat – sie ist spezifischer und wird daher vom Browser als diejenige ausgewählt, die das Element stilisieren soll.

Wie wir früher in dieser Lektion gesehen haben, hat ein Klassenselektor mehr Gewicht als ein Elementselektor, sodass die in dem Klassenstilblock definierten Eigenschaften die im Elementstilblock definierten überschreiben.

Eine Anmerkung hier ist, dass obwohl wir über Selektoren nachdenken und die Regeln, die auf den Text oder die Komponente angewendet werden, die sie auswählen, nicht die gesamte Regel überschrieben wird, sondern nur die Eigenschaften, die an mehreren Stellen deklariert sind.

Dieses Verhalten hilft, Wiederholungen in Ihrem CSS zu vermeiden. Eine gängige Vorgehensweise ist, generische Stile für die grundlegenden Elemente zu definieren und dann Klassen für diejenigen zu erstellen, die unterschiedlich sind. Zum Beispiel haben wir im Stylesheet unten generische Stile für Level-2-Überschriften definiert und dann einige Klassen erstellt, die nur einige der Eigenschaften und Werte ändern. Die anfangs definierten Werte werden auf alle Überschriften angewendet, dann werden die spezifischeren Werte auf die Überschriften mit den Klassen angewendet.

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

Lassen Sie uns nun ansehen, wie der Browser die Spezifität berechnet. Wir wissen bereits, dass ein Elementselektor eine niedrige Spezifität hat und von einer Klasse überschrieben werden kann. Im Wesentlichen wird ein Wert in Punkten an verschiedene Arten von Selektoren vergeben, und das Addieren dieser ergibt das Gewicht dieses bestimmten Selektors, das dann gegen andere potenzielle Übereinstimmungen bewertet werden kann.

Die Menge an Spezifität, die ein Selektor hat, wird unter Verwendung von drei verschiedenen Werten (oder Komponenten) gemessen, die als ID-, CLASS- und ELEMENT-Spalten in den Hunderts-, Zehner- und Einerstellen angesehen werden können:

- **Idendifikatoren**: Punkte in dieser Spalte für jeden ID-Selektor, der sich im gesamten Selektor befindet.
- **Klassen**: Punkte in dieser Spalte für jeden Klassenselektor, Attributselektor oder Pseudoklasse, die im gesamten Selektor enthalten sind.
- **Elemente**: Punkte in dieser Spalte für jeden Elementselektor oder Pseudoelement, die im gesamten Selektor enthalten sind.

> [!NOTE]
> Der universelle Selektor ([`*`](/de/docs/Web/CSS/Universal_selectors)), [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators) (`+`, `>`, `~`, ' '), und die Spezifitätsanpassungsselektion ([`:where()`](/de/docs/Web/CSS/:where)) zusammen mit deren Parametern haben keine Auswirkungen auf die Spezifität.

Die Negationsselektion ([`:not()`](/de/docs/Web/CSS/:not)), die Beziehungsselektion ([`:has()`](/de/docs/Web/CSS/:has)), die "matches-any" ([`:is()`](/de/docs/Web/CSS/:is)) Pseudoklassen und die [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting/Nesting_and_specificity) selbst tragen nicht zur Spezifität bei, aber ihre Parameter oder verschachtelten Regeln tun es. Das Spezifitätsgewicht, das jede zum Spezifitätsalgorithmus beiträgt, ist das Spezifitätsgewicht des Selektors im Parameter oder in der verschachtelten Regel mit dem größten Gewicht.

Die folgende Tabelle zeigt einige isolierte Beispiele, um Sie in Stimmung zu bringen. Versuchen Sie, diese durchzugehen und sicherzustellen, dass Sie verstehen, warum sie die Spezifität haben, die wir ihnen gegeben haben. Wir haben Selektoren noch nicht im Detail behandelt, aber Sie können Details zu jedem Selektor im MDN [Selektoren-Referenz](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators) finden.

| Selektor                                  | Idendifikatoren | Klassen | Elemente | Gesamtspezifität |
| ----------------------------------------- | --------------- | ------- | -------- | ---------------- |
| `h1`                                      | 0               | 0       | 1        | 0-0-1            |
| `h1 + p::first-letter`                    | 0               | 0       | 3        | 0-0-3            |
| `li > a[href*="en-US"] > .inline-warning` | 0               | 2       | 2        | 0-2-2            |
| `#identifier`                             | 1               | 0       | 0        | 1-0-0            |
| `button:not(#mainBtn, .cta)`              | 1               | 0       | 1        | 1-0-1            |

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

Was passiert hier? Zuerst einmal sind wir nur an den ersten sieben Regeln dieses Beispiels interessiert, und wie Sie feststellen werden, haben wir ihre Spezifitätswerte in einem Kommentar vor jeder Regel eingefügt.

- Die ersten beiden Selektoren konkurrieren über das Styling der Hintergrundfarbe des Links. Der zweite gewinnt und färbt den Hintergrund blau, weil er einen zusätzlichen ID-Selektor in der Kette hat: seine Spezifität ist 2-0-1 vs. 1-0-1.
- Selektoren 3 und 4 konkurrieren über das Styling der Schriftfarbe des Links. Der zweite gewinnt und färbt den Text weiß, weil er zwar einen weniger Elementselektor hat, der fehlende Selektor jedoch durch einen Klassenselektor ersetzt wird, der mehr Gewicht hat als unendlich viele Elementselektoren. Die gewinnende Spezifität ist 1-1-3 vs. 1-0-4.
- Selektoren 5–7 konkurrieren über das Styling der Umrandung des Links, wenn er gehüverselt wird. Selektor 6 verliert klar gegen Selektor 5 mit einer Spezifität von 0-2-3 vs. 0-2-4; er hat einen weniger Elementselektor in der Kette. Selektor 7 hingegen schlägt sowohl Selektor 5 als auch 6, weil er genauso viele Unterselektoren in der Kette hat wie Selektor 5, aber ein Element wurde durch einen Klassenselektor ersetzt. Also ist die gewinnende Spezifität 0-3-3 vs. 0-2-3 und 0-2-4.

> [!NOTE]
> Jeder Selektortyp hat seine eigene Spezifitätsebene, die nicht von Selektoren mit einer niedrigeren Spezifitätsebene überschrieben werden kann. Zum Beispiel könnten eine _Million_ **Klassen**selektoren zusammen nicht die Spezifität von _einem_ **ID**-Selektor überschreiben.
>
> Der beste Weg, um die Spezifität zu bewerten, ist es, die Spezifitätslevel individuell zu bewerten, beginnend mit dem höchsten und erst dann zum niedrigeren überzugehen, wenn nötig. Nur wenn es ein Unentschieden zwischen Selektorscores innerhalb einer Spezifitätsspalte gibt, müssen Sie die nächste Spalte nach unten bewerten; andernfalls können Sie die Selektoren mit niedrigerer Spezifität ignorieren, da diese niemals die Selektoren mit höherer Spezifität überschreiben können.

#### IDs versus Klassen

ID-Selektoren haben eine hohe Spezifität. Das bedeutet, dass Stile, die basierend auf dem Abgleich eines ID-Selektors angewendet werden, Stile übertreffen, die basierend auf anderen Selektoren angewendet werden, einschließlich Klassen- und Typselektoren. Da eine ID nur einmal auf einer Seite vorkommen kann und aufgrund der hohen Spezifität von ID-Selektoren ist es vorzugsweise, eine Klasse zu einem Element hinzuzufügen, anstatt eine ID.

Wenn die Verwendung der ID der einzige Weg ist, um das Element zu adressieren – möglicherweise weil Sie keinen Zugriff auf das Markup haben und es nicht bearbeiten können –, sollten Sie erwägen, die ID in einem [Attributselektor](/de/docs/Web/CSS/Attribute_selectors) zu verwenden, wie z.B. `p[id="header"]`.

### Inline-Stile

Inline-Stile, d.h. die Stil-Deklaration innerhalb eines [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) Attributs, haben Vorrang vor allen normalen Stilen, unabhängig von der Spezifität. Solche Deklarationen haben keine Selektoren, aber ihre Spezifität kann als 1-0-0-0 ausgelegt werden; immer mehr als jedes andere Spezifitätsgewicht, egal wie viele IDs in den Selektoren enthalten sind.

### !important

Es gibt ein spezielles Stück CSS, das Sie verwenden können, um alle oben genannten Berechnungen außer Kraft zu setzen, sogar Inline-Stile – das `!important`-Flag. Sie sollten jedoch sehr vorsichtig sein, wenn Sie es verwenden. Dieses Flag wird verwendet, um ein individuelles Eigenschaft-Wert-Paar zur spezifischsten Regel zu machen und so die normalen Regeln der Kaskade, einschließlich normaler Inline-Stile, zu übersteigen.

> [!NOTE]
> Es ist nützlich zu wissen, dass das `!important`-Flag existiert, damit Sie wissen, was es ist, wenn Sie auf den Code anderer Leute stoßen. **Wir empfehlen jedoch dringend, dass Sie es niemals verwenden, es sei denn, es ist absolut notwendig.** Das `!important`-Flag ändert die Funktionsweise der Kaskade, sodass es das Debuggen von CSS-Problemen wirklich schwierig machen kann, insbesondere in einem großen Stylesheet.

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

Lassen Sie uns das durchgehen, um zu sehen, was passiert – versuchen Sie, einige der Eigenschaften zu entfernen, um zu sehen, was passiert, wenn es schwer zu verstehen ist:

1. Sie werden sehen, dass die {{cssxref("color")}}- und {{cssxref("padding")}}-Werte der dritten Regel angewendet wurden, aber die {{cssxref("background-color")}} nicht. Warum? Eigentlich sollten alle drei sicherlich angewendet werden, da Regeln später in der Quellreihenfolge in der Regel frühere Regeln überschreiben.
2. Jedoch gewinnen die Regeln darüber, weil Klassenselektoren eine höhere Spezifität als Elementselektoren haben.
3. Beide Elemente haben eine [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) von `better`, aber das zweite hat auch eine [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) von `winning`. Da IDs eine _noch höhere_ Spezifität als Klassen haben (Sie können auf einer Seite nur ein Element mit jeder einzigartigen ID haben, aber viele Elemente mit derselben Klasse – ID-Selektoren sind _sehr spezifisch_ in dem, was sie anvisieren), sollten die rote Hintergrundfarbe und der 1px schwarze Rahmen auf das zweite Element angewendet werden, während das erste Element die graue Hintergrundfarbe erhält und keinen Rahmen hat, wie in der Klasse angegeben.
4. Das zweitelement _bekommt_ die rote Hintergrundfarbe, aber keinen Rahmen. Warum? Wegen des `!important`-Flags in der zweiten Regel. Das Hinzufügen des `!important`-Flags nach `border: none` bedeutet, dass diese Deklaration den `border`-Wert in der vorherigen Regel gewinnt, obwohl der ID-Selektor eine höhere Spezifität hat.

> [!NOTE]
> Die einzige Möglichkeit, eine wichtige Deklaration zu überschreiben, besteht darin, eine andere wichtige Deklaration mit _derselben Spezifität_ später in der Quellreihenfolge einzufügen oder eine mit höherer Spezifität.

Eine Situation, in der Sie möglicherweise das `!important`-Flag verwenden müssen, ist, wenn Sie an einem CMS arbeiten, wo Sie die Core-CSS-Module nicht bearbeiten können und Sie wirklich einen Inline-Stil oder eine wichtige Deklaration überschreiben möchten, die auf keine andere Weise überschrieben werden kann. Aber wirklich, verwenden Sie es nicht, wenn Sie es vermeiden können.

## Die Wirkung des Standortes von CSS

Schließlich ist es wichtig zu bedenken, dass die Priorität einer CSS-Deklaration davon abhängt, in welchem Stylesheet sie angegeben ist.

Es ist für Benutzer möglich, benutzerdefinierte Stylesheets festzulegen, um die Stile des Entwicklers zu überschreiben. Ein sehbehinderter Benutzer möchte beispielsweise möglicherweise die Schriftgröße auf allen von ihm besuchten Webseiten auf das Doppelte der normalen Größe setzen, um ein leichteres Lesen zu ermöglichen.

### Reihenfolge der überschreibenden Deklarationen

Widersprüchliche Deklarationen werden in folgender Reihenfolge angewendet, wobei spätere frühere überschreiben:

1. Deklarationen in Benutzeragent-Stylesheets (z.B. die Standardstile des Browsers, die verwendet werden, wenn keine anderen Stile festgelegt sind).
2. Normale Deklarationen in Benutzerstylesheets (benutzerdefinierte Stile, die von einem Benutzer festgelegt wurden).
3. Normale Deklarationen in Autorstylesheets (dies sind die von uns, den Webentwicklern, festgelegten Stile).
4. Wichtige Deklarationen in Autorstylesheets.
5. Wichtige Deklarationen in Benutzerstylesheets.
6. Wichtige Deklarationen in Benutzeragent-Stylesheets.

> [!NOTE]
> Die Reihenfolge der Priorität wird für mit `!important` gekennzeichnete Stile umgekehrt. Es macht Sinn, dass die Stylesheets der Webentwickler die Benutzerstylesheets überschreiben, damit das Design wie beabsichtigt beibehalten werden kann; allerdings haben Benutzer manchmal gute Gründe, die Stile der Webentwickler zu überschreiben, wie oben erwähnt, und dies kann durch Verwendung von `!important` in ihren Regeln erreicht werden.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen – siehe [Testen Sie Ihre Fähigkeiten: Die Kaskade](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_tasks).

## Zusammenfassung

Wenn Sie den größten Teil dieses Artikels verstanden haben, dann herzlichen Glückwunsch – Sie haben begonnen, sich mit den grundlegenden Mechanismen von CSS vertraut zu machen.

Wenn Sie die Kaskade, Spezifität und Vererbung nicht vollständig verstanden haben, dann machen Sie sich keine Sorgen! Dies ist definitiv das komplizierteste, das wir bisher im Kurs behandelt haben, und es ist etwas, das selbst professionelle Webentwickler manchmal schwierig finden. Wir empfehlen, dass Sie diesen Artikel mehrmals bei der Fortsetzung des Kurses zurückgeben und darüber nachdenken.

Beziehen Sie sich hierauf zurück, wenn Sie auf seltsame Probleme mit nicht wie erwartet angewandten Styles stoßen. Es könnte ein Spezifitätsproblem sein.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics")}}
