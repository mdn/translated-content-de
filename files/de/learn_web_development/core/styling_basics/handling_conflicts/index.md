---
title: Umgang mit Konflikten
slug: Learn_web_development/Core/Styling_basics/Handling_conflicts
l10n:
  sourceCommit: f99d00a1c3697e26a679925954e26564e7e79b98
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model", "Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade", "Learn_web_development/Core/Styling_basics")}}

Das Ziel dieser Lektion ist es, Ihr Verständnis für einige der grundlegendsten Konzepte von CSS zu entwickeln – den Cascade, die Spezifität und die Vererbung – die steuern, wie CSS auf HTML angewendet wird und wie Konflikte zwischen Stildefinitionen gelöst werden.

Obwohl das Durcharbeiten dieser Lektion vielleicht nicht sofort relevant erscheint und etwas akademischer als andere Teile des Kurses ist, wird Ihnen das Verständnis dieser Konzepte später viel Ärger ersparen! Wir ermutigen Sie, diesen Abschnitt sorgfältig zu bearbeiten und sicherzustellen, dass Sie die Konzepte verstehen, bevor Sie weitermachen.

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
      <th scope="row">Lernergebnisse:</th>
      <td>
        <ul>
          <li>Verstehen, wie Regeln in CSS in Konflikt stehen können.</li>
          <li>Vererbung.</li>
          <li>Der Cascade.</li>
          <li>Die Hauptkonzepte, die das Ergebnis von Konflikten bestimmen – Spezifität, Quellreihenfolge und Wichtigkeit.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Konfliktierende Regeln

CSS steht für **Cascading Style Sheets**, und das erste Wort _cascading_ ist unglaublich wichtig zu verstehen – die Art und Weise, wie der Cascade funktioniert, ist der Schlüssel zum Verständnis von CSS.

Irgendwann werden Sie an einem Projekt arbeiten und feststellen, dass einige CSS, die Ihrer Meinung nach auf ein Element angewendet werden sollten, nicht funktionieren. Oft tritt dieses Problem auf, wenn Sie zwei Regeln erstellen, die unterschiedliche Werte derselben Eigenschaft auf dasselbe Element anwenden.

Der [**Cascade**](/de/docs/Web/CSS/Guides/Cascade/Introduction) und das eng verwandte Konzept der [**Spezifität**](/de/docs/Web/CSS/Guides/Cascade/Specificity) sind Mechanismen, die steuern, welche Regel gilt, wenn ein solcher Konflikt auftritt. Die Deklaration, die Ihr Element stylt, ist möglicherweise nicht die, die Sie erwarten, daher müssen Sie verstehen, wie diese Mechanismen funktionieren.

Auch das Konzept der [**Vererbung**](/de/docs/Web/CSS/Guides/Cascade/Inheritance) ist hier von Bedeutung, was bedeutet, dass einige CSS-Eigenschaften standardmäßig Werte erben, die auf das übergeordnete Element des aktuellen Elements gesetzt sind, und andere nicht. Dies kann ebenfalls unerwartetes Verhalten verursachen.

Lassen Sie uns zunächst einen kurzen Blick auf die Schlüsselkonzepte werfen, mit denen wir es zu tun haben, und dann jedes der Reihe nach betrachten und sehen, wie sie miteinander und mit Ihrem CSS interagieren. Diese Konzepte können schwierig zu verstehen scheinen, aber sie werden klarer, je mehr Übung Sie beim Schreiben von CSS bekommen.

### Cascade

Stylesheets [**cascadieren**](/de/docs/Web/CSS/Guides/Cascade/Introduction). Auf einer sehr einfachen Ebene bedeutet dies, dass der Ursprung und die Reihenfolge der CSS-Regeln wichtig sind. Wenn zwei Regeln die gleiche Spezifität haben, wird die zuletzt im Stylesheet definierte verwendet. Es gibt andere Konzepte, die Einfluss haben, wie z.B. [cascade layers](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers), aber diese sind fortgeschrittener und werden hier nicht im Detail behandelt.

Im folgenden Beispiel haben wir zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der `<h1>`-Inhalt wird letztendlich blau gefärbt. Dies liegt daran, dass beide Regeln aus derselben Quelle stammen, einen identischen Elementselektor haben und daher die gleiche Spezifität haben, aber die letzte in der Quellreihenfolge gewinnt.

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

[Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) ist ein Algorithmus, den der Browser verwendet, um zu entscheiden, welcher Eigenschaftswert auf ein Element angewendet wird. Wenn mehrere Regeln unterschiedliche Selektoren haben, die unterschiedliche Werte für dieselbe Eigenschaft setzen und auf dasselbe Element abzielen, entscheidet die Spezifität über den Eigenschaftswert, der auf das Element angewendet wird. Spezifität ist im Wesentlichen ein Maß dafür, wie spezifisch die Auswahl eines Selektors ist:

- Ein Typ (Element)-Selektor ist weniger spezifisch; er wählt alle Elemente dieses Typs auf einer Seite aus und hat daher weniger Gewicht. Pseudoelement-Selektoren haben die gleiche Spezifität wie reguläre Elementselektoren.
- Ein Klassenselektor ist spezifischer; er wählt nur die Elemente auf einer Seite aus, die einen bestimmten `class`-Attributwert haben, und hat daher mehr Gewicht. Attributselektoren und Pseudoklassen haben das gleiche Gewicht wie eine Klasse.
- Ein ID-Selektor ist noch spezifischer – er wählt nur ein einzelnes Element mit einem bestimmten `id`-Wert aus und hat daher noch mehr Gewicht.

Unten haben wir erneut zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der `<h1>`-Inhalt unten wird `rot` gefärbt, obwohl die `color: blue`-Deklaration später in der Quellreihenfolge erscheint, weil der Klassenselektor `main-heading` seiner Regel eine höhere Spezifität als der Typselektor `h1` gibt. Die Deklaration mit der höheren Spezifität, die mit dem Klassenselektor definiert ist, wird angewendet.

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

Wir werden den Spezifitäts-Algorithmus später genauer erklären.

### Vererbung

Vererbung muss in diesem Zusammenhang ebenfalls verstanden werden – einige CSS-Eigenschaftswerte, die auf übergeordnete Elemente gesetzt sind, werden von ihren Kindelementen geerbt, andere nicht.

Zum Beispiel, wenn Sie eine `color` und `font-family` auf ein Element setzen, wird jedes darin befindliche Element ebenfalls mit dieser Farbe und Schriftart gestylt, es sei denn, Sie haben ihnen direkt andere Farb- und Schriftwerte zugewiesen.

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

Einige Eigenschaften erben nicht – zum Beispiel {{cssxref("width")}} Wenn Sie einem Element eine `width` von `50%` zuweisen, erhalten alle seine Nachkommen keine Breite von `50%` ihrer übergeordneten `width`. Wenn dies der Fall wäre, wäre CSS sehr frustrierend zu verwenden!

> [!NOTE]
> Auf den MDN-Referenzseiten für CSS-Eigenschaften finden Sie ein technisches Informationsfeld namens "Formale Definition", das eine Reihe von Datenpunkten über diese Eigenschaft auflistet, einschließlich der Frage, ob sie vererbt wird oder nicht. Siehe beispielsweise den Abschnitt [Formale Definition der Farbeigenschaft](/de/docs/Web/CSS/Reference/Properties/color#formal_definition).

### Verständnis, wie die Konzepte zusammenarbeiten

Diese drei Konzepte (Cascade, Spezifität und Vererbung) steuern zusammen, welches CSS auf welches Element angewendet wird. In den untenstehenden Abschnitten werden wir sehen, wie sie zusammenarbeiten. Es kann manchmal etwas kompliziert erscheinen, aber Sie werden sich an sie erinnern, wenn Sie mit CSS erfahrener werden, und Sie können die Details jederzeit nachschlagen, wenn Sie sie vergessen! Selbst erfahrene Entwickler erinnern sich nicht an alle Details.

## Verstehen der Vererbung

Beginnen wir mit der Vererbung. Im folgenden Beispiel haben wir ein {{HTMLElement("ul")}}-Element mit zwei Ebenen von verschachtelten ungeordneten Listen darin. Wir haben der äußeren `<ul>` eine Umrandung, Füllung und Schriftfarbe gegeben.

Die `color`-Eigenschaft ist eine vererbte Eigenschaft. Daher wird der Wert der `color`-Eigenschaft auf die direkten Kinder und auch auf die indirekten Kinder angewendet – die unmittelbaren Kind-`<li>`s und die innerhalb der ersten verschachtelten Liste. Wir haben dann der zweiten verschachtelten Liste die Klasse `special` hinzugefügt und eine andere Farbe angewendet. Diese wird dann an ihre Kinder vererbt.

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

Eigenschaften wie `width` (wie bereits erwähnt), `margin`, `padding` und `border` sind keine vererbten Eigenschaften. Wenn eine Umrandung in diesem Listenbeispiel an die Kinder vererbt würde, hätte jede einzelne Liste und jedes Listenelement eine Umrandung – wahrscheinlich kein Effekt, den wir jemals wollen würden!

Obwohl auf jeder CSS-Eigenschaftsseite aufgelistet ist, ob die Eigenschaft vererbt wird oder nicht, können Sie dies oft intuitiv erraten, wenn Sie wissen, welchen Aspekt der Eigenschaftswert stylen wird.

### Kontrolle der Vererbung

CSS bietet fünf spezielle universelle Eigenschaftswerte für die Kontrolle der Vererbung. Jede CSS-Eigenschaft akzeptiert diese Werte.

- {{cssxref("inherit")}}
  - : Setzt den auf ein ausgewähltes Element angewendeten Eigenschaftswert auf denselben Wert wie der übergeordnete Element. Effektiv "schaltet" dies die Vererbung "ein".
- {{cssxref("initial")}}
  - : Setzt den auf ein ausgewähltes Element angewendeten Eigenschaftswert auf den [Anfangswert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) dieser Eigenschaft.
- {{cssxref("revert")}}
  - : Setzt den auf ein ausgewähltes Element angewendeten Eigenschaftswert auf das Standard-CSS-Styling des Browsers anstatt der Standardwerte, die auf diese Eigenschaft angewendet werden. Dieser Wert funktioniert in vielen Fällen wie {{cssxref("unset")}}.
- {{cssxref("revert-layer")}}
  - : Setzt den auf ein ausgewähltes Element angewendeten Eigenschaftswert auf den in einer früheren [cascading layer](/de/docs/Web/CSS/Reference/At-rules/@layer) festgelegten Wert.
- {{cssxref("unset")}}
  - : Setzt die Eigenschaft auf ihren natürlichen Wert zurück, was bedeutet, dass, wenn die Eigenschaft natürlich vererbt wird, sie wie `inherit` wirkt, andernfalls wie `initial`.

> [!NOTE]
> Weitere Informationen finden Sie unter [Herkunftstypen](/de/docs/Web/CSS/Guides/Cascade/Introduction#origin_types) und deren Funktionsweise.

### Spielen Sie mit Vererbungskontrolleigenschaften

Wir können uns eine Liste von Links ansehen und erkunden, wie universelle Werte funktionieren. Das Live-Beispiel unten erlaubt Ihnen, mit dem CSS zu spielen und zu sehen, was passiert, wenn Sie Änderungen vornehmen. Mit Code zu spielen ist der beste Weg, um HTML und CSS besser zu verstehen.

Zum Beispiel:

1. Das zweite Listenitem hat die Klasse `my-class-1` angewendet. Diese setzt die Farbe des verschachtelten `<a>`-Elements auf `inherit`. Wenn Sie die Regel entfernen, wie ändert sich die Farbe des Links?
2. Verstehen Sie, warum die dritte und vierte Links die Farbe haben, die sie haben? Der dritte Link ist auf `initial` gesetzt, was bedeutet, dass er den Anfangswert der Eigenschaft verwendet (in diesem Fall schwarz) und nicht den Standard des Browsers für Links, der blau ist. Der vierte ist auf `unset` gesetzt, was bedeutet, dass der Linktext die Farbe des übergeordneten Elements verwendet, grün.
3. Welche der Links wird ihre Farbe ändern, wenn Sie eine neue Farbe für das `<a>`-Element definieren – zum Beispiel `a { color: red; }`?
4. Nachdem Sie den nächsten Abschnitt zum Zurücksetzen aller Eigenschaften gelesen haben, kehren Sie zurück und ändern Sie die `color`-Eigenschaft zu `all`. Beachten Sie, wie der zweite Link in einer neuen Zeile und mit einem Aufzählungszeichen ist. Welche Eigenschaften denken Sie, wurden vererbt?

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

Die CSS-Kurzform-Eigenschaft {{cssxref("all")}} kann verwendet werden, um einen dieser Vererbungswerte auf (fast) alle Eigenschaften gleichzeitig anzuwenden. Ihr Wert kann einer der Vererbungswerte (`inherit`, `initial`, `revert`, `revert-layer` oder `unset`) sein. Sie ist eine bequeme Möglichkeit, Änderungen an Stilen rückgängig zu machen, sodass Sie zu einem bekannten Ausgangspunkt zurückkehren können, bevor Sie mit neuen Änderungen beginnen.

Im folgenden Beispiel haben wir zwei Zitate. Das erste hat eine Stildefinition auf dem Blockzitat-Element selbst. Das zweite hat eine Klasse auf dem Blockzitat angewendet, die den Wert von `all` auf `unset` setzt.

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

## Verständnis des Cascade

Jetzt verstehen wir, dass Vererbung der Grund ist, warum ein tief im Dokument verschachtelter Absatz dieselbe Farbe hat wie das auf den Body angewendete CSS. Aus den Einführungskursen wissen wir, wie wir das angewendete CSS an jeder Stelle im Dokument ändern können - sei es durch Zuordnung von CSS zu einem Element oder durch Erstellung einer Klasse. Jetzt werden wir uns ansehen, wie der Cascade festlegt, welche CSS-Regeln angewendet werden, wenn mehr als ein Style-Block denselben Wert einer Eigenschaft, aber mit unterschiedlichen Werten, auf dasselbe Element anwendet.

Es gibt drei zu berücksichtigende Faktoren, die in der Reihenfolge ihrer Wichtigkeit aufgelistet sind. Spätere überregeln frühere:

1. **Quellreihenfolge**
2. **Spezifität**
3. **Wichtigkeit**

Wir werden uns diese ansehen, um zu sehen, wie Browser genau herausfinden, welches CSS angewendet werden soll.

### Quellreihenfolge

Wir haben bereits gesehen, wie die Quellreihenfolge für den Cascade von Bedeutung ist. Wenn Sie mehr als eine Regel haben, die genau dasselbe Gewicht haben, dann gewinnt diejenige, die zuletzt im CSS kommt. Sie können dies als: die Regel, die näher am Element selbst ist, überschreibt die früheren, bis die letzte gewinnt und das Element stylen darf.

Die Quellreihenfolge spielt nur dann eine Rolle, wenn das Spezifitätsgewicht der Regeln dasselbe ist, daher lassen Sie uns als nächstes die Spezifität betrachten.

### Spezifität

Sie werden oft auf eine Situation stoßen, in der Sie wissen, dass eine Regel später im Stylesheet kommt, aber eine frühere, widersprüchliche Regel angewendet wird. Dies passiert, weil die frühere Regel eine **höhere Spezifität** hat – sie ist spezifischer und wird daher vom Browser als diejenige ausgewählt, die das Element stylen soll.

Wie wir bereits früher in dieser Lektion gesehen haben, hat ein Klassenselektor mehr Gewicht als ein Elementselektor, sodass die in der Klassenstilblock definierten Eigenschaften diejenigen im Elementstilblock überschreiben.

Etwas, das hier zu beachten ist, ist, dass obwohl wir über Selektoren denken und die Regeln, die auf den Text oder die Komponente angewendet werden, die sie auswählen, es nicht die gesamte Regel ist, die überschrieben wird, sondern nur die Eigenschaften, die an mehreren Stellen deklariert sind.

Dieses Verhalten hilft, Wiederholungen in Ihrem CSS zu vermeiden. Eine gängige Praxis ist es, generische Stile für die Basiselelemente zu definieren und dann Klassen für diejenigen zu erstellen, die anders sind. Zum Beispiel haben wir im untenstehenden Stylesheet generische Stile für Titel der Stufe 2 definiert und dann einige Klassen erstellt, die nur einige der Eigenschaften und Werte ändern. Die initial definierten Werte werden auf alle Titel angewendet, dann werden die spezifischeren Werte auf die Titel mit den Klassen angewendet.

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

Lassen Sie uns nun ansehen, wie der Browser die Spezifität berechnet. Wir wissen bereits, dass ein Elementselektor eine geringe Spezifität hat und von einer Klasse überschrieben werden kann. Im Wesentlichen wird ein Wert in Punkten für verschiedene Arten von Selektoren vergeben, und die Addition dieser Werte ergibt das Gewicht des jeweiligen Selektors, das dann mit anderen potenziellen Übereinstimmungen verglichen werden kann.

Die Menge an Spezifität, die ein Selektor hat, wird mit drei verschiedenen Werten (oder Komponenten) gemessen, die als ID-, Klassen- und Elementspalten bezeichnet werden können, jeweils hunderte, zehner und einer wert:

- **IDs**: Ein Punkt in dieser Spalte (100 Punkte) für jeden ID-Selektor, der im Gesamtselktor enthalten ist.
- **Klassen**: Ein Punkt in dieser Spalte (10 Punkte) für jeden Klassenselektor, Attributselektor oder Pseudoklasse, die im Gesamtselktor enthalten ist.
- **Elemente**: Ein Punkt in dieser Spalte (1 Punkt) für jeden Elementselektor oder Pseudoelement, das im Gesamtselktor enthalten ist.

> [!NOTE]
> Der universelle Selektor ([`*`](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors)), [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators) (`+`, `>`, `~`, ' '), und Spezifizitätsanpassungsselektor ({{cssxref(":where()")}}) zusammen mit seinen Parametern haben keinen Einfluss auf die Spezifität.

Die folgende Tabelle zeigt einige isolierte Beispiele, um Sie in Stimmung zu bringen. Versuchen Sie, diese durchzugehen und sicherzustellen, dass Sie verstehen, warum sie die spezifizierte Spezifität haben. Sie finden Details zu jedem Selektor im MDN [Selektorenreferenz](/de/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators).

| Selektor                                  | Identifikatoren | Klassen | Elemente | Gesamtspezifität |
| ----------------------------------------- | --------------- | ------- | -------- | ---------------- |
| `h1`                                      | 0               | 0       | 1        | 0-0-1            |
| `h1 + p::first-letter`                    | 0               | 0       | 3        | 0-0-3            |
| `li > a[href*="en-US"] > .inline-warning` | 0               | 2       | 2        | 0-2-2            |
| `#identifier`                             | 1               | 0       | 0        | 1-0-0            |

#### Detailliertes Spezifitätsbeispiel

Bevor wir weitermachen, lassen Sie uns ein Beispiel in Aktion ansehen. Sie möchten dieses Beispiel möglicherweise im MDN-Playground in einem separaten Tab öffnen, damit Sie es beim Lesen der Erklärung leicht darauf zurückgreifen können.

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

Was passiert hier also? Zuerst sind wir nur an den ersten sieben Regeln dieses Beispiels interessiert, und wie Sie bemerken werden, haben wir die Spezifitätswerte jeder Regel einem Kommentar vorangestellt.

- Die ersten beiden Selektoren konkurrieren über das Styling der Hintergrundfarbe des Links. Der zweite gewinnt und macht die Hintergrundfarbe "blau", weil er ein zusätzliches ID-Selektor in der Kette hat: seine Spezifität ist 2-0-1 gegenüber 1-0-1.
- Die Selektoren 3 und 4 konkurrieren über das Styling der Textfarbe des Links. Der zweite gewinnt und macht den Text "weiß", weil, obwohl er einen Elementselektor weniger hat, der fehlende Selektor durch einen Klassenselektor ersetzt wurde, der mehr Gewicht hat als ein Elementselektor. Die gewinnende Spezifität ist 1-1-3 gegenüber 1-0-4.
- Die Selektoren 5–7 konkurrieren über das Styling des `border` des Links beim Schweben. Der Selektor 6 verliert klar gegen Selektor 5 mit einer Spezifität von 0-2-3 gegenüber 0-2-4; er hat einen Elementselektor weniger in der Kette. Selektor 7 jedoch schlägt sowohl die Selektoren 5 als auch 6, weil er die gleiche Anzahl an Unterselektoren in der Kette hat wie Selektor 5, aber ein Element wurde gegen einen Klassenselektor ausgetauscht. Die gewinnende Spezifität ist 0-3-3 gegenüber 0-2-3 und 0-2-4.

> [!NOTE]
> Jeder Selektortyp hat sein eigenes Spezifitätsniveau, das nicht von Selektoren mit einem niedrigeren Spezifitätsniveau überschrieben werden kann. Zum Beispiel könnten eine _Million_ **Klassen**selektoren kombiniert die Spezifität eines **IDs**selektors nicht überschreiben.
>
> Der beste Weg, um die Spezifität zu bewerten, besteht darin, die Spezifitätsstufen einzeln beginnend von der höchsten zu bewerten und bei Bedarf zur niedrigeren überzugehen. Nur wenn es ein Unentschieden zwischen Selektornscores innerhalb einer Spezifitätsspalte gibt, müssen Sie die nächste Spalte weiter unten bewerten; andernfalls können Sie die niedrigeren Spezifizitätsselektoren ignorieren, da sie die höheren Spezifizitätsselektoren niemals überschreiben können.

#### IDs versus Klassen

ID-Selektoren haben eine hohe Spezifität. Dies bedeutet, dass Stile, die basierend auf einer Übereinstimmung eines ID-Selektors angewendet werden, Stile überrule, die basierend auf anderen Selektoren angewendet werden, einschließlich Klassen- und Typselektoren. Da eine ID nur einmal auf einer Seite vorkommen kann und aufgrund der hohen Spezifität der ID-Selektoren, ist es vorzuziehen, stattdessen eine Klasse zu einem Element hinzuzufügen.

Wenn das Verwenden der ID der einzige Weg ist, um das Element zu zielen – vielleicht, weil Sie keinen Zugriff auf das Markup haben und es nicht bearbeiten können – ziehen Sie in Betracht, die ID innerhalb eines [Attribute-Selektors](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) zu verwenden, wie `p[id="header"]`.

### Inline-Stile

Inline-Stile, also die Stildefinition innerhalb eines [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attributs, haben Vorrang vor allen normalen Stilen, egal wie die Spezifität aussieht. Solche Deklarationen haben keine Selektoren, aber ihre Spezifität kann interpretiert werden als 1-0-0-0; immer mehr als jede andere Spezifikationsgewichtung, egal wie viele IDs in den Selektoren sind.

### !important

Es gibt ein spezielles Stück CSS, das Sie verwenden können, um alle obigen Berechnungen zu überlisten, sogar Inline-Stile - das `!important`-Flag. Sie sollten aber sehr vorsichtig sein, wenn Sie es verwenden. Dieses Flag wird verwendet, um ein individuelles Eigenschafts- und Wertpaar zur spezifischsten Regel zu machen und damit die normalen Regeln des Cascade, einschließlich normaler Inline-Stile, zu overrulen.

> [!NOTE]
> Es ist nützlich zu wissen, dass das `!important`-Flag existiert, sodass Sie wissen, was es ist, wenn Sie darauf in den Codes anderer Leute stoßen. **Wir empfehlen jedoch dringend, es niemals zu verwenden, es sei denn, es ist absolut notwendig.** Das `!important`-Flag ändert die Art und Weise, wie der Cascade normalerweise funktioniert, was das Debuggen von CSS-Problemen wirklich schwer nachvollziehbar machen kann, besonders in einem großen Stylesheet.

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

Gehen wir durch, was hier passiert — versuchen Sie, einige der Eigenschaften zu entfernen, um zu sehen, was passiert, wenn Sie Schwierigkeiten haben, es zu verstehen:

1. Sie werden sehen, dass die {{cssxref("color")}}- und {{cssxref("padding")}}-Werte der dritten Regel angewendet wurden, nicht jedoch die {{cssxref("background-color")}}. Warum? Eigentlich sollten doch alle drei sicher angewendet werden, weil Regeln, die später in der Quellfolge definiert werden, normalerweise frühere Regeln übersteuern.
2. Die oberen Regeln gewinnen jedoch, weil Klassenselektoren eine höhere Spezifizität haben als Elementselektoren.
3. Beide Elemente haben eine [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) von `better`, aber das 2. hat zusätzlich eine [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) von `winning`. Da IDs eine noch höhere Spezifität als Klassen haben, sollten die `red` `background-color` und `1px black` `border` beide auf das 2. Element angewendet werden, während das erste Element die graue Hintergrundfarbe und keinen Rahmen erhält, wie in der Klasse spezifiziert.
4. Das 2. Element _bekommt_ die `red` `background-color`, aber keinen `border`. Warum? Wegen des `!important`-Flags in der zweiten Regel. Das Hinzufügen des `!important`-Flags nach `border: none` bedeutet, dass diese Deklaration den `border`-Wert in der vorherigen Regel gewinnt, obwohl der ID-Selektor eine höhere Spezifität hat.

> [!NOTE]
> Der einzige Weg, um eine wichtige Deklaration zu übersteuern, besteht darin, eine andere wichtige Deklaration mit derselben Spezifität später in der Quellreihenfolge anzugeben oder eine mit höherer Spezifität.

Eine Situation, in der Sie das `!important`-Flag verwenden müssen, ist, wenn Sie an einem CMS arbeiten, bei dem Sie die Kern-CSS-Module nicht bearbeiten können und wirklich einen Inline-Stil oder eine wichtige Deklaration übersteuern wollen, die nicht auf andere Weise überschrieben werden kann. Aber wirklich, verwenden Sie es nicht, wenn Sie es vermeiden können.

## Die Wirkung des CSS-Standorts

Schließlich ist es wichtig zu beachten, dass die Priorität einer CSS-Deklaration davon abhängt, in welchem Stylesheet sie angegeben ist.

Es ist möglich, dass Benutzer benutzerdefinierte Stylesheets festlegen, um die Entwicklerstile zu übersteuern. Zum Beispiel möchte ein sehbehinderter Benutzer möglicherweise die Schriftgröße auf allen von ihm besuchten Webseiten auf die doppelte normale Größe einstellen, um das Lesen zu erleichtern.

### Reihenfolge der überlagernden Deklarationen

Widersprüchliche Deklarationen werden in der folgenden Reihenfolge angewendet, wobei später angegebene frühere überlagern:

1. Deklarationen in Benutzeragenten-Stylesheets (z.B. die Standardstile des Browsers, verwendet, wenn keine anderen Stile festgelegt sind).
2. Normale Deklarationen in Benutzerstylesheets (benutzerdefinierte Stile, die von einem Benutzer festgelegt wurden).
3. Normale Deklarationen in Autorenstylesheets (dies sind die von uns festgelegten Stile, die Webentwickler).
4. Wichtige Deklarationen in Autorenstylesheets.
5. Wichtige Deklarationen in Benutzerstylesheets.
6. Wichtige Deklarationen in Benutzeragenten-Stylesheets.

> [!NOTE]
> Die Reihenfolge der Priorität wird für mit `!important` markierte Stile umgekehrt. Es macht Sinn, dass Entwicklerstile die Benutzerstile übersteuern, damit das Design wie beabsichtigt beibehalten werden kann; jedoch haben Benutzer manchmal gute Gründe, Entwicklerstile zu übersteuern, wie vorhin erwähnt, und dies kann erreicht werden, indem `!important` in deren Regeln verwendet wird.

## Zusammenfassung

Wenn Sie den größten Teil dieses Artikels verstanden haben, dann herzlichen Glückwunsch – Sie haben angefangen, sich mit den grundlegenden Mechanismen von CSS vertraut zu machen.

Wenn Sie Cascade, Spezifität und Vererbung nicht vollständig verstanden haben, dann machen Sie sich keine Sorgen! Das ist definitiv das komplizierteste Thema, das wir bisher im Kurs behandelt haben und etwas, das selbst professionelle Webentwickler manchmal schwierig finden. Wir empfehlen Ihnen, zu diesem Artikel mehrmals zurückzukehren, während Sie den Kurs fortsetzen, und weiter darüber nachzudenken.

Kehren Sie hierher zurück, wenn Sie auf seltsame Probleme stoßen, bei denen Stile nicht wie erwartet angewendet werden. Es könnte ein Spezifitätsproblem sein. Als nächstes werden wir Ihnen einige Tests geben, die Sie verwenden können, um zu überprüfen, wie gut Sie die Informationen über die Cascade verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model", "Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade", "Learn_web_development/Core/Styling_basics")}}
