---
title: Kaskade, Spezifität und Vererbung
slug: Learn/CSS/Building_blocks/Cascade_and_inheritance
l10n:
  sourceCommit: 1291d701f38a4ae0951e0abd8ad88fdceef2a87b
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Combinators", "Learn/CSS/Building_blocks/Cascade_layers", "Learn/CSS/Building_blocks")}}

Ziel dieser Lektion ist es, Ihr Verständnis für einige der grundlegendsten Konzepte von CSS zu entwickeln — die Kaskade, die Spezifität und die Vererbung — die steuern, wie CSS auf HTML angewendet wird und wie Konflikte zwischen Stil-Deklarationen gelöst werden.

Obwohl diese Lektion im ersten Moment weniger relevant und ein wenig akademischer erscheinen mag als einige andere Teile des Kurses, wird Ihnen das Verständnis dieser Konzepte später viel Ärger ersparen! Wir ermutigen Sie, diesen Abschnitt sorgfältig zu durchgehen und sicherzustellen, dass Sie die Konzepte verstehen, bevor Sie weitergehen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, grundlegendes Wissen im
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Umgang mit Dateien</a
        >, HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS Erste Schritte</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Die Kaskade und Spezifität zu verstehen und wie Vererbung in CSS funktioniert.
      </td>
    </tr>
  </tbody>
</table>

## Konfliktierende Regeln

CSS steht für **Cascading Style Sheets**, und dieses erste Wort _kaskadierend_ ist unglaublich wichtig zu verstehen — das Verhalten der Kaskade ist der Schlüssel zum Verständnis von CSS.

Irgendwann werden Sie an einem Projekt arbeiten und feststellen, dass das CSS, von dem Sie dachten, dass es auf ein Element angewendet werden sollte, nicht funktioniert. Oft liegt das Problem darin, dass Sie zwei Regeln erstellen, die unterschiedliche Werte derselben Eigenschaft auf dasselbe Element anwenden. [**Kaskade**](/de/docs/Web/CSS/Cascade) und das eng verwandte Konzept der [**Spezifität**](/de/docs/Web/CSS/Specificity) sind Mechanismen, die steuern, welche Regel angewendet wird, wenn es zu einem solchen Konflikt kommt. Die Regel, die Ihr Element stilt, ist möglicherweise nicht die erwartete, daher müssen Sie verstehen, wie diese Mechanismen funktionieren.

Auch bedeutend ist hier das Konzept der [**Vererbung**](/de/docs/Web/CSS/Inheritance), das bedeutet, dass einige CSS-Eigenschaften standardmäßig Werte übernehmen, die auf dem Elternelement gesetzt sind, und einige nicht. Dies kann auch zu Verhalten führen, das Sie möglicherweise nicht erwarten.

Lassen Sie uns mit einem kurzen Blick auf die wichtigsten Dinge beginnen, mit denen wir es zu tun haben, dann schauen wir uns jeden Einzelnen der Reihe nach an und sehen, wie sie miteinander und mit Ihrem CSS interagieren. Diese können sich wie eine knifflige Reihe von Konzepten anfühlen, die man verstehen muss. Mit mehr Übung im Schreiben von CSS wird Ihnen die Funktionsweise offensichtlicher werden.

### Kaskade

Stylesheets [**kaskadieren**](/de/docs/Web/CSS/Cascade) — auf einer sehr einfachen Ebene bedeutet das, dass der Ursprung, die Kaskadenschicht und die Reihenfolge der CSS-Regeln wichtig sind. Wenn zwei Regeln aus derselben Kaskadenschicht gelten und beide die gleiche Spezifität haben, wird diejenige verwendet, die in der Stylesheet-Reihenfolge zuletzt definiert ist.

Im folgenden Beispiel haben wir zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der `<h1>`-Inhalt wird am Ende blau eingefärbt. Das liegt daran, dass beide Regeln aus derselben Quelle stammen, einen identischen Elementselektor haben und daher die gleiche Spezifität aufweisen, aber die letzte in der Quellenreihenfolge gewinnt.

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

[Spezifität](/de/docs/Web/CSS/Specificity) ist der Algorithmus, den der Browser verwendet, um zu entscheiden, welcher Eigenschaftswert auf ein Element angewendet wird. Wenn mehrere Stilblöcke unterschiedliche Selektoren haben, die dieselbe Eigenschaft mit unterschiedlichen Werten konfigurieren und dasselbe Element anvisieren, entscheidet die Spezifität über den Eigenschaftswert, der auf das Element angewendet wird. Spezifität ist im Grunde ein Maß dafür, wie spezifisch die Auswahl eines Selektors sein wird:

- Ein Elementselektor ist weniger spezifisch; es wählt alle Elemente dieses Typs auf einer Seite aus, hat also weniger Gewicht. Pseudo-Elementselektoren haben die gleiche Spezifität wie normale Elementselektoren.
- Ein Klassenselektor ist spezifischer; es wählt nur die Elemente auf einer Seite aus, die einen bestimmten `class`-Attributwert haben, hat also mehr Gewicht. Attributselektoren und Pseudo-Klassen haben das gleiche Gewicht wie eine Klasse.

Unten haben wir wieder zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der `<h1>`-Inhalt unten ist rot gefärbt, weil der Klassenselektor `main-heading` seiner Regel eine höhere Spezifität verleiht. Obwohl die Regel mit dem `<h1>`-Elementselektor weiter unten in der Quellreihenfolge erscheint, wird diejenige mit der höheren Spezifität, die den Klassenselektor verwendet, angewendet.

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

Wir werden den Spezifizitätsalgorithmus später im Detail erklären.

### Vererbung

Vererbung muss in diesem Zusammenhang ebenfalls verstanden werden — einige CSS-Eigenschaftswerte, die auf Elternelementen gesetzt sind, werden von ihren Kindelementen geerbt, andere jedoch nicht.

Wenn Sie beispielsweise eine `color` und eine `font-family` auf ein Element setzen, wird jedes Element darin auch mit dieser Farbe und Schriftart gestaltet, es sei denn, Sie haben direkt unterschiedliche Farb- und Schriftwerte auf sie angewendet.

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

Einige Eigenschaften werden nicht vererbt — wenn Sie zum Beispiel eine {{cssxref("width")}} von 50% auf ein Element setzen, erhalten alle seine Nachkommen nicht eine Breite von 50% ihrer Elternbreite. Wenn dies der Fall wäre, wäre CSS sehr frustrierend zu verwenden!

> [!NOTE]
> Auf den Referenzseiten für CSS-Eigenschaften bei MDN finden Sie ein technisches Informationsfeld namens "Formale Definition", das eine Reihe von Datenpunkten zu dieser Eigenschaft auflistet, einschließlich der Frage, ob sie vererbt wird oder nicht. Siehe den [Formalen Definitionsabschnitt der Farbeigenschaft](/de/docs/Web/CSS/color#formal_definition) als Beispiel.

## Verstehen, wie die Konzepte zusammenarbeiten

Diese drei Konzepte (Kaskade, Spezifität und Vererbung) steuern zusammen, welches CSS auf welches Element angewendet wird. In den folgenden Abschnitten werden wir sehen, wie sie zusammenarbeiten. Es kann manchmal etwas kompliziert erscheinen, aber Sie werden beginnen, sich an sie zu erinnern, wenn Sie mehr Erfahrung mit CSS sammeln, und Sie können immer die Details nachschlagen, wenn Sie sie vergessen! Selbst erfahrene EntwicklerInnen erinnern sich nicht an alle Details.

Das folgende Video zeigt, wie Sie die Firefox DevTools verwenden können, um die Kaskade, Spezifität und mehr einer Seite zu inspizieren:

{{EmbedYouTube("Sp9ZfSvpf7A")}}

## Verstehen der Vererbung

Wir beginnen mit der Vererbung. Im untenstehenden Beispiel haben wir ein {{HTMLElement("ul")}}-Element mit zwei Ebenen verschachtelter ungeordneter Listen darin. Wir haben der äußeren `<ul>` einen Rahmen, einen Polsterung und eine Schriftfarbe gegeben.

Die `color`-Eigenschaft ist eine ererbte Eigenschaft. Daher wird der Wert der `color`-Eigenschaft auf die direkten Kinder und auch auf die indirekten Kinder angewendet — die unmittelbaren Kind-`<li>`s und die im ersten verschachtelten Listenpunkt. Wir haben dann die Klasse `special` zur zweiten verschachtelten Liste hinzugefügt und eine andere Farbe darauf angewendet. Dies wird dann durch seine Kinder vererbt.

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

Eigenschaften wie `width` (wie zuvor erwähnt), `margin`, `padding` und `border` sind keine vererbten Eigenschaften. Wenn ein Rahmen von den Kindern in diesem Listenbeispiel geerbt werden könnte, würden jede einzelne Liste und Listenelement einen Rahmen erhalten — wahrscheinlich nicht ein Effekt, den wir jemals wollen würden!

Obwohl jede CSS-Eigenschaftsseite auflistet, ob die Eigenschaft geerbt wird oder nicht, können Sie oft dasselbe intuitiv erraten, wenn Sie wissen, welchen Aspekt der Eigenschaftswert stilisieren wird.

### Steuerung der Vererbung

CSS stellt fünf spezielle universelle Eigenschaftswerte zur Verfügung, um die Vererbung zu steuern. Jede CSS-Eigenschaft akzeptiert diese Werte.

- {{cssxref("inherit")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf den gleichen wie den des Elternelements. Effektiv wird damit die Vererbung "eingeschaltet".
- {{cssxref("initial")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf den [Anfangswert](/de/docs/Web/CSS/initial_value) dieser Eigenschaft.
- {{cssxref("revert")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf das Standardstyling des Browsers anstelle der Standardwerte dieser Eigenschaft. Dieser Wert verhält sich in vielen Fällen wie {{cssxref("unset")}}.
- {{cssxref("revert-layer")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf den Wert, der in einer vorherigen [Kaskadenschicht](/de/docs/Web/CSS/@layer) festgelegt wurde.
- {{cssxref("unset")}}
  - : Setzt die Eigenschaft auf ihren natürlichen Wert zurück, was bedeutet, dass, wenn die Eigenschaft natürlich vererbt wird, sie wie `inherit` wirkt, andernfalls wirkt sie wie `initial`.

> [!NOTE]
> Siehe [Ursprungstypen](/de/docs/Web/CSS/Cascade#origin_types) für weitere Informationen zu jedem dieser Werte und wie sie funktionieren.

Wir können uns eine Liste von Links ansehen und untersuchen, wie universelle Werte funktionieren. Das Live-Beispiel unten ermöglicht es Ihnen, mit dem CSS zu spielen und zu sehen, was passiert, wenn Sie Änderungen vornehmen. Mit Code zu spielen ist wirklich der beste Weg, HTML und CSS besser zu verstehen.

Zum Beispiel:

1. Auf das zweite Listenelement wurde die Klasse `my-class-1` angewendet. Dadurch wird die Farbe des verschachtelten `<a>`-Elements auf `inherit` gesetzt. Wenn Sie die Regel entfernen, wie ändert sich die Farbe des Links?
2. Verstehen Sie, warum die dritte und vierte Links die Farbe haben, die sie haben? Der dritte Link ist auf `initial` gesetzt, was bedeutet, dass er den Anfangswert der Eigenschaft verwendet (in diesem Fall schwarz) und nicht den Browser-Standard für Links, der blau ist. Der vierte ist auf `unset` gesetzt, was bedeutet, dass der Link-Text die Farbe des Elternelements verwendet, grün.
3. Welcher der Links wird die Farbe ändern, wenn Sie eine neue Farbe für das `<a>`-Element definieren — zum Beispiel `a { color: red; }`?
4. Nachdem Sie den nächsten Abschnitt zum Zurücksetzen aller Eigenschaften gelesen haben, kehren Sie zurück und ändern die `color`-Eigenschaft in `all`. Beachten Sie, wie der zweite Link in einer neuen Zeile steht und eine Aufzählung hat. Welche Eigenschaften denken Sie wurden vererbt?

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

Die CSS-Abkürzungseigenschaft [`all`](/de/docs/Web/CSS/all) kann verwendet werden, um einen dieser Vererbungswerte auf (fast) alle Eigenschaften gleichzeitig anzuwenden. Ihr Wert kann einer der Vererbungswerte (`inherit`, `initial`, `revert`, `revert-layer` oder `unset`) sein. Es ist eine bequeme Möglichkeit, Änderungen an Stilen rückgängig zu machen, sodass Sie zu einem bekannten Ausgangspunkt zurückkehren können, bevor Sie neue Änderungen beginnen.

Im folgenden Beispiel haben wir zwei Blockzitate. Das erste hat ein Styling, das auf das Blockzitat-Element selbst angewendet wird. Das zweite hat eine Klasse, die auf das Blockzitat angewendet wird, die den Wert von `all` auf `unset` setzt.

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

Versuchen Sie, den Wert von `all` auf einige der anderen verfügbaren Werte zu setzen und beobachten Sie den Unterschied.

## Verständnis der Kaskade

Wir verstehen jetzt, dass Vererbung der Grund dafür ist, warum ein Absatz, der tief in der Struktur Ihres HTML verschachtelt ist, die gleiche Farbe hat wie das CSS, das auf den Body angewendet wird. Aus den einführenden Lektionen haben wir ein Verständnis davon, wie das CSS geändert wird, das an jedem Punkt im Dokument auf etwas angewendet wird — sei es durch Zuweisen von CSS an ein Element oder durch Erstellen einer Klasse. Wir werden nun untersuchen, wie die Kaskade definiert, welche CSS-Regeln angewendet werden, wenn mehr als ein Stilblock dieselbe Eigenschaft, aber mit unterschiedlichen Werten, auf dasselbe Element angewendet.

Es gibt drei Faktoren zu beachten, die hier in aufsteigender Reihenfolge der Wichtigkeit aufgeführt sind. Letztere überstimmen frühere:

1. **Quellenreihenfolge**
2. **Spezifität**
3. **Wichtigkeit**

Wir werden uns diese ansehen, um zu sehen, wie Browser genau herausfinden, welches CSS angewendet werden sollte.

### Quellenreihenfolge

Wir haben bereits gesehen, wie die Quellenreihenfolge für die Kaskade wichtig ist. Wenn Sie mehr als eine Regel haben, die alle genau dasselbe Gewicht haben, dann gewinnt diejenige, die zuletzt im CSS kommt. Sie können dies als: die Regel, die dem Element selbst am nächsten ist, überschreibt die früheren, bis die letzte gewinnt und das Element stilisiert.

Die Quellenreihenfolge spielt nur eine Rolle, wenn das Spezifitätsgewicht der Regeln dasselbe ist, also schauen wir uns die Spezifität an:

### Spezifität

Sie werden oft auf eine Situation stoßen, in der Sie wissen, dass eine Regel später im Stylesheet kommt, aber eine frühere, widersprüchliche Regel angewendet wird. Dies geschieht, weil die frühere Regel eine **höhere Spezifität** hat — sie ist spezifischer und wird daher vom Browser als diejenige ausgewählt, die das Element stilisieren soll.

Wie wir früher in dieser Lektion gesehen haben, hat ein Klassenselektor mehr Gewicht als ein Elementselektor, daher überschreiben die in dem Klassenstilblock definierten Eigenschaften die im Elementstilblock definierten.

Etwas, das hier zu beachten ist, ist, dass wir zwar über Selektoren und die Regeln, die auf den Text oder die Komponente angewendet werden, die sie auswählen, nachdenken, aber es nicht die gesamte Regel ist, die überschrieben wird, sondern nur die Eigenschaften, die an mehreren Stellen deklariert sind.

Dieses Verhalten hilft, Wiederholungen in Ihrem CSS zu vermeiden. Eine gängige Praxis ist es, generische Stile für die grundlegenden Elemente zu definieren und dann Klassen für diejenigen zu erstellen, die unterschiedlich sind. Im Stylesheet unten haben wir generische Stile für Überschriften der Ebene 2 definiert und dann einige Klassen erstellt, die nur einige der Eigenschaften und Werte ändern. Die anfänglich definierten Werte werden auf alle Überschriften angewendet, dann werden die spezifischeren Werte auf die Überschriften mit den Klassen angewendet.

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

Schauen wir uns nun an, wie der Browser die Spezifität berechnet. Wir wissen bereits, dass ein Elementselektor eine niedrige Spezifität hat und von einer Klasse überschrieben werden kann. Im Grunde wird ein Punktwert verschiedenen Selektortypen zugewiesen, und das Addieren dieser Punkte gibt Ihnen das Gewicht dieses spezifischen Selektors, das dann mit anderen potenziellen Übereinstimmungen verglichen werden kann.

Die Menge an Spezifität, die ein Selektor hat, wird unter Verwendung von drei verschiedenen Werten (oder Komponenten) gemessen, die als ID-, CLASS- und ELEMENT-Spalten in den Hunderter-, Zehner- und Einer-Stellen betrachtet werden können:

- **Bezeichner**: Zählen Sie einen in dieser Spalte für jeden ID-Selektor, der innerhalb des gesamten Selektors enthalten ist.
- **Klassen**: Zählen Sie einen in dieser Spalte für jedes Klassenattribut, jeden Attributselektor oder jede Pseudo-Klasse, die innerhalb des gesamten Selektors enthalten ist.
- **Elemente**: Zählen Sie einen in dieser Spalte für jeden Elementselektor oder Pseudo-Element, das innerhalb des gesamten Selektors enthalten ist.

> [!NOTE]
> Der universelle Selektor ([`*`](/de/docs/Web/CSS/Universal_selectors)), [Kombinatoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Combinators) (`+`, `>`, `~`, ' '), und der Selektor zur Spezifitätsanpassung ([`:where()`](/de/docs/Web/CSS/:where)) zusammen mit seinen Parametern haben keinen Einfluss auf die Spezifität.

Der Selektor zur Negation ([`:not()`](/de/docs/Web/CSS/:not)), der relationale Selektor ([`:has()`](/de/docs/Web/CSS/:has)), die Pseudo-Klassen zum Vergleichen ([`:is()`](/de/docs/Web/CSS/:is)) und [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting/Nesting_and_specificity) selbst tragen nicht zur Spezifität bei, aber ihre Parameter oder verschachtelten Regeln tun es. Das Spezifizitätsgewicht, das jeder zur Berechnung beiträgt, ist das Spezifizitätsgewicht des Selektors im Parameter oder in der verschachtelten Regel mit dem größten Gewicht.

Die folgende Tabelle zeigt einige isolierte Beispiele, um Sie in Stimmung zu bringen. Versuchen Sie, diese durchzugehen und sicherzustellen, dass Sie verstehen, warum sie die Spezifität haben, die wir ihnen gegeben haben. Wir haben die Selektoren noch nicht im Detail behandelt, aber Sie können Einzelheiten zu jedem Selektor im MDN-[Selektoren-Referenz](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators) finden.

| Selektor                                  | Bezeichner | Klassen | Elemente | Gesamtspezifität |
| ----------------------------------------- | ---------- | ------- | -------- | ---------------- |
| `h1`                                      | 0          | 0       | 1        | 0-0-1            |
| `h1 + p::first-letter`                    | 0          | 0       | 3        | 0-0-3            |
| `li > a[href*="en-US"] > .inline-warning` | 0          | 2       | 2        | 0-2-2            |
| `#identifier`                             | 1          | 0       | 0        | 1-0-0            |
| `button:not(#mainBtn, .cta`)              | 1          | 0       | 1        | 1-0-1            |

Bevor wir weitergehen, schauen wir uns ein Beispiel an.

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

Was passiert hier? Zuerst interessiert uns nur die ersten sieben Regeln dieses Beispiels, und wie Sie bemerken werden, haben wir ihre Spezifizitätswerte vor jeder in einem Kommentar enthalten.

- Die ersten beiden Selektoren konkurrieren um die Stilgebung der Hintergrundfarbe des Links. Der zweite gewinnt und macht die Hintergrundfarbe blau, da er einen zusätzlichen ID-Selektor in der Kette hat: seine Spezifizität ist 2-0-1 vs. 1-0-1.
- Selektoren 3 und 4 konkurrieren um die Stilgebung der Textfarbe des Links. Der zweite gewinnt und macht den Text weiß, weil, obwohl er einen Elementselektor weniger hat, der fehlende Selektor durch einen Klassenselektor ersetzt wird, der mehr Gewicht hat als unendlich viele Elementselektoren. Die gewinnende Spezifizität ist 1-1-3 vs. 1-0-4.
- Die Selektoren 5-7 konkurrieren um die Stilgebung des Rahmens des Links beim Überfahren. Selektor 6 verliert eindeutig gegen Selektor 5 mit einer Spezifizität von 0-2-3 vs. 0-2-4; er hat einen Elementselektor weniger in der Kette. Selektor 7 schlägt jedoch sowohl Selektor 5 als auch 6, da er die gleiche Anzahl von Unterselektoren in der Kette wie Selektor 5 hat, aber ein Element wurde durch einen Klassenselektor ersetzt. Also ist die gewinnende Spezifizität 0-3-3 vs. 0-2-3 und 0-2-4.

> [!NOTE]
> Jeder Selektortyp hat seine eigene Spezifitätsebene, die nicht von Selektoren mit niedrigerer Spezifitätsebene überschrieben werden kann. Zum Beispiel könnten _eine Million_ **Klassen**-Selektoren kombiniert nicht die Spezifizität eines _einzigen_ **ID**-Selektors überschreiben.
>
> Die beste Möglichkeit, Spezifität zu bewerten, besteht darin, die Spezifitätsstufen einzeln von der höchsten zur niedrigeren Ebene zu bewerten, wenn erforderlich. Nur wenn es eine Krawatte zwischen Selektorwerten innerhalb einer Spezifizitätsspalte gibt, müssen Sie die nächste Spalte nach unten bewerten; andererseits können Sie die niedrigeren Spezifitätsselektoren ignorieren, da sie niemals höhere Spezifitätsselektoren überschreiben können.

### Inline-Stile

Inline-Stile, also die Stil-Deklarationen innerhalb eines [`style`](/de/docs/Web/HTML/Global_attributes/style)-Attributs, haben Vorrang vor allen normalen Stilen, egal wie hoch die Spezifizität ist. Solche Deklarationen haben keine Selektoren, aber ihre Spezifizität kann als 1-0-0-0 interpretiert werden; immer mehr als jedes andere Spezifizitätsgewicht, egal wie viele IDs in den Selektoren enthalten sind.

### !important

Es gibt ein spezielles Stück CSS, das Sie verwenden können, um alle oben genannten Berechnungen zu überstimmen, sogar Inline-Stile - das `!important`-Flag. Sie sollten jedoch sehr vorsichtig sein, wenn Sie es verwenden. Dieses Flag wird verwendet, um ein einzelnes Eigenschafts-Wert-Paar zur spezifischsten Regel zu machen, wodurch die normalen Regeln der Kaskade überschrieben werden, einschließlich normaler Inline-Stile.

> [!NOTE]
> Es ist nützlich zu wissen, dass das `!important`-Flag existiert, damit Sie wissen, was es ist, wenn Sie es im Code anderer Leute sehen. **Wir empfehlen jedoch dringend, es nur zu verwenden, wenn es absolut notwendig ist.** Das `!important`-Flag ändert die normale Funktionsweise der Kaskade, sodass das Debuggen von CSS-Problemen wirklich schwer zu lösen sein kann, besonders in einem großen Stylesheet.

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

Lassen Sie uns dies durchgehen, um zu sehen, was passiert - versuchen Sie, einige der Eigenschaften zu entfernen, um zu sehen, was passiert, wenn Sie Schwierigkeiten beim Verstehen haben:

1. Sie werden sehen, dass die `{{cssxref("color")}}` und `{{cssxref("padding")}}`-Werte der dritten Regel angewendet wurden, aber nicht die `{{cssxref("background-color")}}`. Warum? Eigentlich sollten alle drei sicher angewendet werden, da später in der Quellenreihenfolge stehende Regeln normalerweise frühere Regeln überschreiben.
2. Die oben genannten Regeln gewinnen jedoch, da Klassenselektoren eine höhere Spezifizität als Elementselektoren haben.
3. Beide Elemente haben eine [`class`](/de/docs/Web/HTML/Global_attributes/class) `better`, aber das zweite hat eine [`id`](/de/docs/Web/HTML/Global_attributes/id) `winning`. Da IDs eine _noch höhere_ Spezifizität als Klassen haben (Sie können nur ein Element mit jeder eindeutigen ID auf einer Seite haben, aber viele Elemente mit derselben Klasse — ID-Selektoren sind _sehr spezifisch_ darin, was sie anvisieren), sollten die rote Hintergrundfarbe und der 1px schwarze Rahmen beide auf das zweite Element angewendet werden, wo das erste Element die graue Hintergrundfarbe und keinen Rahmen bekommt, wie in der Klasse angegeben.
4. Das zweite Element _erhält_ die rote Hintergrundfarbe, aber keinen Rahmen. Warum? Wegen des `!important`-Flags in der zweiten Regel. Durch Hinzufügen des `!important`-Flags nach `border: none` bedeutet dies, dass diese Deklaration die `border`-Werte in der vorherigen Regel gewinnt, obwohl der ID-Selektor eine höhere Spezifizität hat.

> [!NOTE]
> Die einzige Möglichkeit, eine wichtige Deklaration zu überschreiben, besteht darin, eine andere wichtige Deklaration mit _derselben Spezifizität_ später in der Quellenreihenfolge oder eine mit höherer Spezifizität einzuschließen, oder eine wichtige Deklaration in einer früheren Kaskadenschicht einzuschließen (wir haben noch keine Kaskadenschichten behandelt).

Eine Situation, in der Sie das `!important`-Flag verwenden müssen, ist, wenn Sie an einem CMS arbeiten, in dem Sie die Kern-CSS-Module nicht bearbeiten können und Sie wirklich einen Inline-Stil oder eine wichtige Deklaration überschreiben möchten, die auf keine andere Weise überschrieben werden kann. Aber wirklich, verwenden Sie es nicht, wenn Sie es vermeiden können.

## Der Effekt des Standorts von CSS

Schließlich ist es wichtig zu beachten, dass der Vorrang einer CSS-Deklaration davon abhängt, in welchem Stylesheet und in welcher Kaskadenschicht sie spezifiziert ist.

Es ist möglich, dass Nutzer kundenspezifische Stylesheets setzen, um die Entwickler-Stile zu überschreiben. Beispielsweise könnte ein sehbehinderter Benutzer die Schriftgröße auf allen von ihm besuchten Webseiten auf die doppelte Normalgröße setzen wollen, um ein einfacheres Lesen zu ermöglichen.

Es ist auch möglich, Entwickler-Stile in Kaskadenschichten zu deklarieren: Sie können nicht geschichtete Stile dazu bringen, Stile, die in Schichten deklariert wurden, zu überschreiben, oder Sie können Stile in später deklarierten Schichten dazu bringen, Stile aus zuvor deklarierten Schichten zu überschreiben. Beispielsweise können Sie als Entwickler ein Drittanbieter-Stylesheet importieren, das Sie nicht bearbeiten können, aber Sie können das externe Stylesheet in einer Kaskadenschicht importieren, sodass alle Ihre Stile die importierten Stile leicht überschreiben, ohne sich um die Spezifizität des Drittanbieters kümmern zu müssen.

### Reihenfolge der überschreibbaren Deklarationen

Konfliktierende Deklarationen werden in der folgenden Reihenfolge angewendet, wobei spätere die früheren überschreiben:

1. Deklarationen in Benutzer-Agent-Stylesheets (z.B. die standardmäßigen Browser-Stile, verwendet, wenn kein anderes Styling gesetzt ist).
2. Normale Deklarationen in Benutzern-Stylesheets (custom Stile, die von einem Benutzer gesetzt werden).
3. Normale Deklarationen in Autoren-Stylesheets (das sind die Stile, die von uns, den Webentwicklern, gesetzt werden).
4. Wichtige Deklarationen in Autoren-Stylesheets.
5. Wichtige Deklarationen in Benutzern-Stylesheets.
6. Wichtige Deklarationen in Benutzer-Agent-Stylesheets.

> [!NOTE]
> Die Reihenfolge des Vorrangs wird für Stile, die mit `!important` markiert sind, umgekehrt. Es macht Sinn, dass die Stylesheets von Webentwicklern die Benutzern-Stylesheets überschreiben, damit das Design wie beabsichtigt beibehalten werden kann; jedoch haben Benutzer manchmal gute Gründe, Stile von Webentwicklern zu überschreiben, wie oben erwähnt, und dies kann erreicht werden, indem `!important` in ihren Regeln verwendet wird.

### Reihenfolge der Kaskadenschichten

Obwohl [Kaskadenschichten](/de/docs/Web/CSS/@layer) ein fortgeschrittenes Thema sind und Sie diese Funktion nicht sofort verwenden, ist es wichtig zu verstehen, wie Schichten kaskadieren.

Wenn Sie CSS in Kaskadenschichten deklarieren, wird die Vorrangfolge durch die Reihenfolge bestimmt, in der die Schichten deklariert werden. CSS-Stile, die außerhalb jeder Schicht deklariert werden, werden zusammengefügt, in der Reihenfolge, in der diese Stile deklariert werden, zu einer unbenannten Schicht, als ob es die zuletzt deklarierte Schicht wäre. Mit konkurrierenden normalen (nicht wichtigen) Stilen nehmen später deklariert Schichten Vorrang über früher definierte Schichten ein. Für Stile, die mit `!important` markiert sind, wird jedoch die Reihenfolge umgekehrt, wobei wichtige Stile in früheren Schichten den Vorrang vor wichtigen Stilen in später deklarierten Schichten oder solchen, die außerhalb einer Schicht deklariert sind, nehmen. Inline-Stile haben Vorrang vor allen Autorenstilen, unabhängig von der Schicht.

Wenn Sie mehrere Stilblöcke in verschiedenen Schichten haben, die konkurrierende Werte für eine Eigenschaft auf einem einzelnen Element bereitstellen, bestimmt die Reihenfolge, in der die Schichten deklariert werden, die Vorrangstellung. Die Spezifizität zwischen Schichten spielt keine Rolle, aber die Spezifizität innerhalb einer einzelnen Schicht schon.

```html live-sample___cascade-layers
<p id="addSpecificity">A paragraph with a border and background</p>
```

```css live-sample___cascade-layers
@layer firstLayer, secondLayer;

p {
  /* 0-0-1 */
  background-color: red;
  color: grey !important;
  border: 5px inset purple;
}
p#addSpecificity {
  /* 1-0-1 */
  border-style: solid !important;
}

@layer firstLayer {
  #addSpecificity {
    /* 1-0-0 */
    background-color: blue;
    color: white !important;
    border-width: 5px;
    border-style: dashed !important;
  }
}

@layer secondLayer {
  p#addSpecificity {
    /* 1-0-1 */
    background-color: green;
    color: orange !important;
    border-width: 10px;
    border-style: dotted !important;
  }
}
```

{{EmbedLiveSample("cascade-layers")}}

Diskutieren wir einige Punkte aus dem obigen Beispiel, um zu verstehen, was geschieht. Zwei Schichten wurden deklariert, `firstLayer` und `secondLayer`, in dieser Reihenfolge. Obwohl die Spezifizität in `secondLayer` die höchste ist, werden keine Eigenschaften aus dieser Deklaration verwendet. Warum? Weil nicht geschichtete normale Stile Vorrang vor geschichteten normalen Stilen haben, egal wie hoch die Spezifizität ist, und wichtige geschichtete Stile Vorrang vor wichtigen Stilen haben, die in späteren Schichten deklariert wurden, wieder egal wie hoch die Spezifizität ist.

Wenn Sie die erste Zeile des CSS in diesem Beispiel so ändern, dass sie `@layer secondLayer, firstLayer;` lautet, werden Sie die Schicht-Deklarationsreihenfolge ändern und alle wichtigen Stile aus `firstLayer` werden in ihre jeweiligen Werte in `secondLayer` geändert.

### Scoping-Nähe

Ein weiteres fortgeschrittenes Thema, das Sie nicht sofort verwenden, aber möglicherweise in Zukunft verstehen müssen, ist {{CSSxRef("@scope")}}. Dies ist eine [@-Regel](/de/docs/Web/CSS/At-rule), die es Ihnen ermöglicht, einen Block von Regeln zu erstellen, die nur auf einen bestimmten Abschnitt des HTML auf Ihrer Seite angewendet werden. Beispielsweise können Sie Stile spezifizieren, die nur auf {{htmlelement("img")}}-Elemente angewendet werden, wenn sie in Elemente verschachtelt sind, die eine `feature`-Klasse haben:

```css
@scope (.feature) {
  img {
    border: 2px solid black;
    display: block;
  }
}
```

**Scoping-Nähe** ist der Mechanismus, der Konflikte zwischen gescopedten Elementen löst. Scoping-Nähe besagt, dass, wenn zwei Scopes konfliktierende Stile haben, der Stil mit der geringsten Anzahl von Sprüngen nach oben in der DOM-Baum-Hierarchie zur Scope-Wurzel gewinnt. Siehe [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) für weitere Details und ein Beispiel.

> [!NOTE]
> Scoping-Nähe überstimmt die Quellenreihenfolge, wird jedoch von anderen, höher priorisierten Kriterien wie [Wichtigkeit](/de/docs/Web/CSS/important), [Schichten](/de/docs/Learn/CSS/Building_blocks/Cascade_layers) und [Spezifität](/de/docs/Web/CSS/Specificity) überstimmt.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Die Kaskade](/de/docs/Learn/CSS/Building_blocks/Cascade_tasks).

## Zusammenfassung

Wenn Sie den Großteil dieses Artikels verstanden haben, dann gut gemacht — Sie haben begonnen, sich mit den grundlegenden Mechanismen von CSS vertraut zu machen. Als Nächstes werden wir uns einen tieferen Einblick in [Kaskade-Schichten](/de/docs/Learn/CSS/Building_blocks/Cascade_layers) ansehen.

Wenn Sie die Kaskade, Spezifität und Vererbung nicht vollständig verstanden haben, dann machen Sie sich keine Sorgen! Das ist definitiv das komplizierteste, was wir bisher im Kurs behandelt haben, und es ist etwas, das selbst professionelle Webentwickler manchmal knifflig finden. Wir würden empfehlen, dass Sie zu diesem Artikel ein paar Mal zurückkehren, während Sie den Kurs fortsetzen, und darüber nachdenken.

Greifen Sie hierauf zurück, wenn Sie auf seltsame Probleme stoßen, bei denen Stile nicht wie erwartet angewendet werden. Es könnte ein Spezifizitätsproblem sein.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Combinators", "Learn/CSS/Building_blocks/Cascade_layers", "Learn/CSS/Building_blocks")}}
