---
title: Umgang mit Konflikten
slug: Learn_web_development/Core/Styling_basics/Handling_conflicts
l10n:
  sourceCommit: d2317ab6c4301c3774f1f319fa3a532e94ba82f6
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics")}}

Das Ziel dieser Lektion ist es, Ihr Verständnis für einige der grundlegendsten Konzepte von CSS zu entwickeln – die Kaskade, Spezifität und Vererbung – die steuern, wie CSS auf HTML angewendet wird und wie Konflikte zwischen Style-Deklarationen gelöst werden.

Auch wenn diese Lektion zunächst weniger relevant erscheint und etwas akademischer als andere Teile des Kurses ist, wird Ihnen das Verständnis dieser Konzepte später viel Ärger ersparen! Wir empfehlen Ihnen, diesen Abschnitt sorgfältig durchzuarbeiten und sicherzustellen, dass Sie die Konzepte verstehen, bevor Sie fortfahren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (Studium
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
          <li>Die Hauptkonzepte, die das Ergebnis von Konflikten bestimmen – Spezifität, Quellreihenfolge und Bedeutung.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Konflikte zwischen Regeln

CSS steht für **Cascading Style Sheets**, und dieses erste Wort _kaskadierend_ ist unglaublich wichtig zu verstehen – die Art und Weise, wie die Kaskade funktioniert, ist der Schlüssel zum Verständnis von CSS.

Irgendwann werden Sie an einem Projekt arbeiten und feststellen, dass einige CSS, die Ihrer Meinung nach auf ein Element angewendet werden sollten, nicht funktionieren. Oft tritt dieses Problem auf, wenn Sie zwei Regeln erstellen, die unterschiedliche Werte derselben Eigenschaft auf dasselbe Element anwenden.

Die [**Kaskade**](/de/docs/Web/CSS/CSS_cascade/Cascade) und das eng verwandte Konzept der [**Spezifität**](/de/docs/Web/CSS/CSS_cascade/Specificity) sind Mechanismen, die steuern, welche Regel gilt, wenn ein solcher Konflikt auftritt. Die Deklaration, die Ihr Element gestaltet, ist möglicherweise nicht die, die Sie erwarten, daher müssen Sie verstehen, wie diese Mechanismen funktionieren.

Auch das Konzept der [**Vererbung**](/de/docs/Web/CSS/CSS_cascade/Inheritance) ist hier von Bedeutung, was bedeutet, dass einige CSS-Eigenschaften standardmäßig die Werte des übergeordneten Elements des aktuellen Elements erben und andere nicht. Dies kann ebenfalls zu unerwartetem Verhalten führen.

Lassen Sie uns zunächst einen kurzen Blick auf die Schlüsselkonzepte werfen, mit denen wir es zu tun haben, dann werden wir uns jedes nacheinander ansehen und sehen, wie sie miteinander und mit Ihrem CSS interagieren. Diese Konzepte können anfangs schwierig zu verstehen sein, aber sie werden klarer, je mehr Sie CSS schreiben.

### Kaskade

Stylesheets [**kaskadieren**](/de/docs/Web/CSS/CSS_cascade/Cascade). Auf einer sehr einfachen Ebene bedeutet dies, dass der Ursprung und die Reihenfolge der CSS-Regeln von Bedeutung sind. Wenn zwei Regeln dieselbe Spezifität haben, wird die zuletzt im Stylesheet definierte verwendet. Es gibt andere Konzepte, die Auswirkungen haben, wie zum Beispiel [Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers), aber diese sind fortgeschrittener und werden hier nicht im Detail behandelt.

Im folgenden Beispiel haben wir zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der `<h1>`-Inhalt wird schließlich in Blau angezeigt. Dies liegt daran, dass beide Regeln aus derselben Quelle stammen, denselben Elementselektor haben und daher dieselbe Spezifität aufweisen, aber die letzte in der Quellreihenfolge gewinnt.

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

[Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) ist ein Algorithmus, den der Browser verwendet, um zu entscheiden, welcher Eigenschaftswert auf ein Element angewendet wird. Wenn mehrere Regeln unterschiedliche Selektoren haben, die unterschiedliche Werte für dieselbe Eigenschaft setzen und dasselbe Element ansprechen, entscheidet die Spezifität, welcher Eigenschaftswert auf das Element angewendet wird. Spezifität ist im Wesentlichen ein Maß dafür, wie spezifisch eine Selektion eines Selektors sein wird:

- Ein Typ-(Element-)Selektor ist weniger spezifisch; er wählt alle Elemente dieses Typs auf einer Seite aus, hat also weniger Gewicht. Pseudo-Element-Selektoren haben dieselbe Spezifität wie reguläre Elementselektoren.
- Ein Klassenselektor ist spezifischer; er wählt nur die Elemente auf einer Seite aus, die einen bestimmten `class`-Attributwert haben, hat also mehr Gewicht. Attributselektoren und Pseudoklassen haben dasselbe Gewicht wie eine Klasse.
- Ein ID-Selektor ist noch spezifischer — er wählt nur ein einzelnes Element mit einem bestimmten `id`-Wert aus. Daher hat er sogar noch mehr Gewicht.

Unten haben wir wieder zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der `<h1>`-Inhalt wird schließlich in `rot` angezeigt, obwohl die `color: blue`-Deklaration später in der Quellreihenfolge erscheint, da der Klassenselektor `main-heading` seiner Regel eine höhere Spezifität als der Typselektor `h1` verleiht. Die Deklaration mit der höheren Spezifität, die unter Verwendung des Klassenselektors definiert wurde, wird angewendet.

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

Die Vererbung muss in diesem Zusammenhang ebenfalls verstanden werden — einige CSS-Eigenschaftswerte, die auf übergeordnete Elemente gesetzt sind, werden von ihren Kindelementen vererbt, andere jedoch nicht.

Wenn Sie beispielsweise eine `color` und eine `font-family` auf ein Element setzen, wird jedes darin enthaltene Element ebenfalls mit dieser Farbe und Schriftart formatiert, es sei denn, Sie haben ihnen direkt andere Farb- und Schriftwerte zugewiesen.

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

Einige Eigenschaften werden nicht vererbt — zum Beispiel {{cssxref("width")}}. Wenn Sie einem Element eine `width` von `50%` zuweisen, erhalten alle seine Nachkommen nicht eine Breite von `50%` der `width` ihres übergeordneten Elements. Wenn dies der Fall wäre, wäre CSS sehr mühsam zu verwenden!

> [!NOTE]
> Auf den CSS-Eigenschaftsreferenzseiten auf MDN finden Sie ein technisches Informationsfeld mit dem Titel "Formale Definition", das eine Reihe von Datenpunkten über diese Eigenschaft auflistet, einschließlich der Frage, ob sie vererbt wird oder nicht. Siehe den [formalen Definitionsabschnitt der Farbeigenschaft](/de/docs/Web/CSS/color#formal_definition) als Beispiel.

### Verständnis, wie die Konzepte zusammenarbeiten

Diese drei Konzepte (Kaskade, Spezifität und Vererbung) steuern zusammen, welche CSS auf welches Element angewendet werden. In den folgenden Abschnitten werden wir sehen, wie sie zusammenarbeiten. Manchmal kann es etwas kompliziert erscheinen, aber Sie werden anfangen, sie sich zu merken, wenn Sie mehr Erfahrung mit CSS sammeln, und Sie können die Details jederzeit nachschlagen, wenn Sie sie vergessen! Selbst erfahrene Entwickler erinnern sich nicht an alle Details.

## Verständnis der Vererbung

Wir beginnen mit der Vererbung. Im folgenden Beispiel haben wir ein {{HTMLElement("ul")}}-Element mit zwei Ebenen von ungeordneten Listen, die darin verschachtelt sind. Wir haben der äußeren `<ul>` einen Rahmen, Polsterung und Schriftfarbe zugewiesen.

Die `color`-Eigenschaft ist eine vererbte Eigenschaft. Also wird der `color`-Eigenschaftswert sowohl auf die direkten Kinder als auch auf die indirekten Kinder angewendet — die unmittelbaren `<li>`-Kinder und die innerhalb der ersten verschachtelten Liste. Wir haben dann die Klasse `special` zur zweiten verschachtelten Liste hinzugefügt und eine andere Farbe darauf angewendet. Diese wird dann durch ihre Kinder vererbt.

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

Eigenschaften wie `width` (wie bereits erwähnt), `margin`, `padding` und `border` sind keine vererbten Eigenschaften. Wenn ein Rahmen in diesem Listenbeispiel von den Kindern geerbt würde, würde jede einzelne Liste und Listenelement einen Rahmen bekommen — wahrscheinlich kein Effekt, den wir jemals wollen würden!

Obwohl jede CSS-Eigenschaftsseite angibt, ob die Eigenschaft vererbt wird oder nicht, können Sie oft dasselbe intuitiv ableiten, wenn Sie wissen, welchen Aspekt der Eigenschaftswert formatiert.

### Steuerung der Vererbung

CSS bietet fünf spezielle universelle Eigenschaftswerte zur Steuerung der Vererbung. Jede CSS-Eigenschaft akzeptiert diese Werte.

- {{cssxref("inherit")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf denselben Wert wie der des übergeordneten Elements. Effektiv "aktiviert" dies die Vererbung.
- {{cssxref("initial")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf den [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) dieser Eigenschaft.
- {{cssxref("revert")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf das Standardstyling des Browsers anstatt der Standards, die auf diese Eigenschaft angewendet werden. Dieser Wert wirkt in vielen Fällen wie {{cssxref("unset")}}.
- {{cssxref("revert-layer")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf den in einer vorherigen [Kaskadenschicht](/de/docs/Web/CSS/@layer) festgelegten Wert.
- {{cssxref("unset")}}
  - : Setzt die Eigenschaft auf ihren natürlichen Wert zurück, was bedeutet, dass, wenn die Eigenschaft von Natur aus vererbt wird, sie wie `inherit` wirkt, andernfalls verhält sie sich wie `initial`.

> [!NOTE]
> Weitere Informationen zu diesen und ihrer Funktionsweise finden Sie unter [Ursprungsarten](/de/docs/Web/CSS/CSS_cascade/Cascade#origin_types).

### Spielen mit Vererbungskontrolleigenschaften

Wir können uns eine Liste von Links ansehen und sehen, wie die universellen Werte funktionieren. Das Live-Beispiel unten ermöglicht es Ihnen, mit dem CSS zu spielen und zu sehen, was passiert, wenn Sie Änderungen vornehmen. Mit Code zu spielen ist wirklich der beste Weg, um HTML und CSS besser zu verstehen.

Zum Beispiel:

1. Der zweite Listeneintrag hat die Klasse `my-class-1` angewendet. Dies setzt die Farbe des darin verschachtelten `<a>`-Elements auf `inherit`. Wenn Sie die Regel entfernen, wie ändert sich die Farbe des Links?
2. Verstehen Sie, warum die dritte und vierte Links die Farbe haben, die sie haben? Der dritte Link ist auf `initial` gesetzt, was bedeutet, dass er den Anfangswert der Eigenschaft (in diesem Fall schwarz) verwendet und nicht den Standard des Browsers für Links, der blau ist. Der vierte ist auf `unset` gesetzt, was bedeutet, dass der Linktext die Farbe des übergeordneten Elements, grün, verwendet.
3. Welche der Links werden die Farbe ändern, wenn Sie eine neue Farbe für das `<a>`-Element definieren — zum Beispiel `a { color: red; }`?
4. Nachdem Sie den nächsten Abschnitt über das Zurücksetzen aller Eigenschaften gelesen haben, kehren Sie zurück und ändern Sie die `color`-Eigenschaft in `all`. Beachten Sie, wie der zweite Link in einer neuen Zeile ist und ein Bullet hat. Welche Eigenschaften wurden Ihrer Meinung nach vererbt?

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

Die CSS-Kurzreferenzeigenschaft [`all`](/de/docs/Web/CSS/all) kann verwendet werden, um einen dieser Vererbungswerte auf (fast) alle Eigenschaften gleichzeitig anzuwenden. Der Wert kann einer der Vererbungswerte sein (`inherit`, `initial`, `revert`, `revert-layer` oder `unset`). Es ist ein praktischer Weg, um Änderungen der Stile rückgängig zu machen, damit Sie wieder zu einem bekannten Ausgangspunkt gelangen, bevor Sie neue Änderungen beginnen.

Im folgenden Beispiel haben wir zwei Blockzitate. Das erste hat ein Styling, das auf das Blockzitat-Element selbst angewendet wird. Das zweite hat eine Klasse, die auf das Blockzitat angewendet wird und den Wert von `all` auf `unset` setzt.

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

Wir verstehen nun, dass Vererbung der Grund ist, warum ein Absatz, der tief in die Struktur Ihres HTML verschachtelt ist, dieselbe Farbe wie das CSS auf dem Body hat. Aus den einführenden Lektionen wissen wir, wie wir das CSS ändern können, das zu einem beliebigen Zeitpunkt im Dokument auf etwas angewendet wird — sei es durch Zuweisen von CSS zu einem Element oder durch Erstellen einer Klasse. Jetzt schauen wir uns an, wie die Kaskade festlegt, welche CSS-Regeln angewendet werden, wenn mehr als ein Stilblock dieselbe Eigenschaft, aber mit unterschiedlichen Werten, auf dasselbe Element anwenden.

Es gibt drei Faktoren zu berücksichtigen, die in aufsteigender Reihenfolge der Wichtigkeit aufgelistet sind. Spätere übersteuern frühere:

1. **Quellreihenfolge**
2. **Spezifität**
3. **Bedeutung**

Wir werden uns diese ansehen, um zu sehen, wie Browser genau herausfinden, welches CSS angewendet werden soll.

### Quellreihenfolge

Wir haben bereits gesehen, wie wichtig die Quellreihenfolge für die Kaskade ist. Wenn Sie mehr als eine Regel haben, die alle genau dasselbe Gewicht hat, gewinnt diejenige, die zuletzt im CSS steht. Sie können sich das so vorstellen: Die Regel, die näher am Element selbst ist, überschreibt die früheren, bis die letzte gewinnt und das Element formatiert.

Die Quellreihenfolge ist nur dann von Bedeutung, wenn das Spezifitätsgewicht der Regeln gleich ist, also lassen Sie uns als nächstes die Spezifität betrachten.

### Spezifität

Es wird oft vorkommen, dass Sie wissen, dass eine Regel später im Stylesheet kommt, aber eine frühere, widersprüchliche Regel angewendet wird. Dies geschieht, weil die frühere Regel eine **höhere Spezifität** hat — sie ist spezifischer und wird daher vom Browser als die Regel gewählt, die das Element formatieren soll.

Wie wir bereits früher in dieser Lektion gesehen haben, hat ein Klassenselektor mehr Gewicht als ein Elementselektor, daher überschreiben die in der Klassenstilblock definierten Eigenschaften diejenigen, die im Elementstilblock definiert sind.

Zu beachten ist hier, dass wir zwar an Selektoren und die Regeln denken, die auf den Text oder die Komponente angewendet werden, die sie auswählen, nicht die gesamte Regel überschrieben wird, sondern nur die Eigenschaften, die an mehreren Stellen deklariert sind.

Dieses Verhalten hilft, Wiederholungen in Ihrem CSS zu vermeiden. Eine häufige Praxis besteht darin, generische Stile für die Basiselemente zu definieren und dann Klassen zu erstellen, die nur einige der Eigenschaften und Werte ändern. Im folgenden Stylesheet haben wir generische Stile für Überschriften der Ebene 2 definiert und dann einige Klassen erstellt, die nur einige der Eigenschaften und Werte ändern. Die zuerst definierten Werte werden auf alle Überschriften angewendet, dann werden die spezifischeren Werte auf die Überschriften mit den Klassen angewendet.

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

Sehen wir uns jetzt an, wie der Browser die Spezifität berechnet. Wir wissen bereits, dass ein Elementselektor eine geringe Spezifität hat und von einer Klasse überschrieben werden kann. Im Wesentlichen wird verschiedenen Arten von Selektoren ein Punktewert zugewiesen, und diese zu addieren ergibt das Gewicht des Selektors, das dann gegen andere potenzielle Übereinstimmungen bewertet werden kann.

Die Menge der Spezifität eines Selektors wird durch die Verwendung von drei verschiedenen Werten (oder Komponenten) gemessen, die als ID-, CLASS- und ELEMENT-Spalten betrachtet werden können, die Hunderte, Zehner und Einer wert sind:

- **IDs**: Geben Sie in dieser Spalte (100 Punkte) für jeden in den Gesamtselektor aufgenommenen ID-Selektor einen Punkt an.
- **Klassen**: Geben Sie in dieser Spalte (10 Punkte) für jeden Klassenselektor, Attributselektor oder Pseudoklasse, die im Gesamtselektor enthalten ist, einen Punkt an.
- **Elemente**: Geben Sie in dieser Spalte (1 Punkt) für jeden Elementselektor oder Pseudo-Element, das im Gesamtselektor enthalten ist, einen Punkt an.

> [!NOTE]
> Der universelle Selektor ([`*`](/de/docs/Web/CSS/Universal_selectors)), [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators) (`+`, `>`, `~`, ' '), und der Spezifizitätsanpassungsselektor ([`:where()`](/de/docs/Web/CSS/:where)) zusammen mit seinen Parametern haben keine Auswirkungen auf die Spezifität.

Die folgende Tabelle zeigt einige isolierte Beispiele, um Sie in die richtige Stimmung zu bringen. Gehen Sie sie durch und vergewissern Sie sich, dass Sie verstehen, warum sie die Spezifität haben, die wir ihnen gegeben haben. Wir haben Selektoren noch nicht im Detail behandelt, aber Sie können Details zu jedem Selektor in der MDN-[Selectors-Referenz](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators) finden.

| Selektor                                  | Identifikatoren | Klassen | Elemente | Gesamtspezifität |
| ----------------------------------------- | --------------- | ------- | -------- | ---------------- |
| `h1`                                      | 0               | 0       | 1        | 0-0-1            |
| `h1 + p::first-letter`                    | 0               | 0       | 3        | 0-0-3            |
| `li > a[href*="en-US"] > .inline-warning` | 0               | 2       | 2        | 0-2-2            |
| `#identifier`                             | 1               | 0       | 0        | 1-0-0            |

#### Eingehendes Spezifizitätsbeispiel

Bevor wir weitermachen, sehen wir uns ein Beispiel in Aktion an. Möglicherweise möchten Sie dies im MDN Playground in einem separaten Tab öffnen, damit Sie es leicht abgleichen können, während Sie die Erklärung lesen.

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

Was passiert hier also? Zuerst sind wir nur an den ersten sieben Regeln dieses Beispiels interessiert, und wie Sie bemerken werden, haben wir die Spezifitätswerte in einen Kommentar vor jeder Regel eingefügt.

- Die ersten beiden Selektoren konkurrieren um das Styling des `background-color` des Links. Der zweite gewinnt und setzt die Hintergrundfarbe auf `blau`, weil er ein zusätzliches ID-Selektor-Kettenglied hat: Seine Spezifität beträgt 2-0-1 gegenüber 1-0-1.
- Selektoren 3 und 4 konkurrieren um das Styling der Text`farbe` des Links. Der zweite gewinnt und macht den Text `weiß`, weil, obwohl er einen Elementselektor weniger hat, der fehlende Selektor gegen einen Klassenselektor ausgetauscht wurde, der mehr Gewicht hat als ein Elementselektor. Die gewinnende Spezifität beträgt 1-1-3 gegenüber 1-0-4.
- Selektoren 5–7 konkurrieren um das Styling des `border` des Links bei Hover. Selektor 6 verliert eindeutig gegen Selektor 5 mit einer Spezifität von 0-2-3 gegenüber 0-2-4; er hat einen Elementselektor weniger in der Kette. Selektor 7 schlägt jedoch sowohl die Selektoren 5 als auch 6, da er die gleiche Anzahl an Unterselektoren in der Kette wie Selektor 5 hat, aber ein Element gegen einen Klassenselektor ausgetauscht wurde. Somit ist die gewinnende Spezifität 0-3-3 gegenüber 0-2-3 und 0-2-4.

> [!NOTE]
> Jeder Selektortyp hat sein eigenes Spezifitätsniveau, das nicht von Selektoren mit einem niedrigeren Spezifitätsniveau überschrieben werden kann. Beispielsweise könnten _eine Million_ **Klassen**-Selektoren zusammen nicht die Spezifität von _einem_ **ID**-Selektor überschreiben.
>
> Der beste Weg, die Spezifität zu bewerten, besteht darin, die Spezifitätsstufen einzeln von der höchsten zu bewerten und bei Bedarf zur niedrigsten überzugehen. Nur wenn es einen Unentschieden zwischen Selektorbewertungen innerhalb einer Spezifitätsspalte gibt, müssen Sie die nächste Spalte unten bewerten; ansonsten können Sie die niedrigeren Spezifitätsselektoren ignorieren, da sie nie die höheren Spezifitätsselektoren überschreiben können.

#### IDs versus Klassen

ID-Selektoren haben eine hohe Spezifität. Dies bedeutet, dass Stile, die basierend auf der Übereinstimmung eines ID-Selektors angewendet werden, Stile basierend auf anderen Selektoren, einschließlich Klassen- und Typselektoren, überstimmen. Da eine ID nur einmal auf einer Seite vorkommen kann und aufgrund der hohen Spezifität von ID-Selektoren, ist es ratsam, einer Elementklasse hinzuzufügen, anstatt einer ID.

Wenn die Verwendung der ID die einzige Möglichkeit ist, das Element zu ziel zu erreichen — möglicherweise weil Sie keinen Zugriff auf das Markup haben und es nicht bearbeiten können — erwägen Sie, die ID innerhalb eines [Attributselektors](/de/docs/Web/CSS/Attribute_selectors) zu verwenden, wie `p[id="header"]`.

### Inline-Stile

Inline-Stile, das heißt die Stildeklaration innerhalb eines [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) Attributs, haben Vorrang vor allen normalen Stilen, unabhängig von der Spezifität. Solche Deklarationen haben keine Selektoren, aber ihre Spezifität kann als 1-0-0-0 betrachtet werden; immer mehr als jedes andere Spezifitätsgewicht, egal wie viele IDs in den Selektoren enthalten sind.

### !important

Es gibt ein spezielles Stück CSS, das Sie verwenden können, um alle obigen Berechnungen zu übersteuern, sogar Inline-Stile - das `!important`-Flag. Sie sollten jedoch sehr vorsichtig mit seiner Verwendung sein. Dieses Flag wird verwendet, um ein einzelnes Eigenschafts-Wert-Paar zur spezifischsten Regel zu machen und damit die normalen Regeln der Kaskade zu überstimmen, einschließlich normaler Inline-Stile.

> [!NOTE]
> Es ist nützlich zu wissen, dass das `!important`-Flag existiert, damit Sie wissen, was es ist, wenn Sie darauf im Code anderer Leute stoßen. **Wir empfehlen jedoch dringend, es nicht zu verwenden, es sei denn, Sie müssen unbedingt.** Das `!important`-Flag ändert die Art und Weise, wie die Kaskade normalerweise funktioniert, und es kann das Debuggen von CSS-Problemen sehr schwierig machen, besonders in einem großen Stylesheet.

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

Lassen Sie uns dies durchgehen, um zu sehen, was passiert — versuchen Sie, einige der Eigenschaften zu entfernen, um zu sehen, was passiert, wenn Ihnen das Verständnis schwerfällt:

1. Sie werden sehen, dass die `color`- und `padding`-Werte der dritten Regel angewendet wurden, aber die `background-color` nicht. Warum? Wirklich, alle drei sollten doch angewendet werden, weil Regeln, die später in der Quellfolge stehen, normalerweise frühere Regeln überschreiben.
2. Allerdings gewinnen die Regeln oben, weil Klassenselektoren eine höhere Spezifität als Elementselektoren haben.
3. Beide Elemente haben eine [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) von `better`, aber das zweite hat auch eine [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) von `winning`. Da IDs eine _noch höhere_ Spezifität haben als Klassen, sollten sowohl der `red` `background-color` als auch der `1px black` `border` auf das zweite Element angewendet werden, wobei das erste Element die graue Hintergrundfarbe und keinen Rahmen bekommt, wie von der Klasse angegeben.
4. Das zweite Element _bekommt_ den `red` `background-color`, aber keinen `border`. Warum? Wegen des `!important`-Flags in der zweiten Regel. Das Hinzufügen des `!important`-Flags nach `border: none` bedeutet, dass diese Deklaration über den `border`-Wert in der vorherigen Regel gewinnt, auch wenn der ID-Selektor eine höhere Spezifität hat.

> [!NOTE]
> Die einzige Möglichkeit, eine wichtige Deklaration zu übersteuern, besteht darin, eine andere wichtige Deklaration mit der _gleichen Spezifität_ später in der Quellreihenfolge oder mit einer höheren Spezifität aufzunehmen.

Eine Situation, in der Sie das `!important`-Flag möglicherweise verwenden müssen, ist, wenn Sie an einem CMS arbeiten, in dem Sie die Kern-CSS-Module nicht bearbeiten können und wirklich einen Inline-Stil oder eine wichtige Deklaration übersteuern möchten, die auf keine andere Weise übersteuert werden kann. Aber wirklich, verwenden Sie es nicht, wenn Sie es vermeiden können.

## Der Effekt des CSS-Standorts

Schließlich ist es wichtig zu beachten, dass die Priorität einer CSS-Deklaration davon abhängt, in welchem Stylesheet sie spezifiziert ist.

Es ist möglich, dass Benutzer benutzerdefinierte Stylesheets festlegen, um die Styles des Entwicklers zu überschreiben. Zum Beispiel möchte ein sehbehinderter Benutzer möglicherweise die Schriftgröße auf allen von ihnen besuchten Webseiten auf das Doppelte der normalen Größe einstellen, um das Lesen zu erleichtern.

### Reihenfolge der Überschreibungsdeklarationen

Konfliktierende Deklarationen werden in der folgenden Reihenfolge angewendet, wobei spätere frühere überschreiben:

1. Deklarationen in Benutzeragenten-Stylesheets (z. B. die Standardstile des Browsers, die verwendet werden, wenn keine anderen Stile festgelegt sind).
2. Normale Deklarationen in Benutzerstylesheets (benutzerdefinierte Stile, die von einem Benutzer festgelegt werden).
3. Normale Deklarationen in Autorenstylesheets (dies sind die von uns, den Webentwicklern, festgelegten Stile).
4. Wichtige Deklarationen in Autorenstylesheets.
5. Wichtige Deklarationen in Benutzerstylesheets.
6. Wichtige Deklarationen in Benutzeragenten-Stylesheets.

> [!NOTE]
> Die Reihenfolge der Priorität ist für Stile, die mit `!important` gekennzeichnet sind, umgekehrt. Es macht Sinn, dass die Stylesheets der Webentwickler die Benutzerstylesheets überschreiben, damit das Design wie beabsichtigt beibehalten werden kann; jedoch haben Benutzer manchmal gute Gründe, die Stile des Webentwicklers zu überschreiben, wie oben erwähnt, und dies kann erreicht werden, indem sie `!important` in ihren Regeln verwenden.

## Testen Sie Ihr Können!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Können: Die Kaskade](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade).

## Zusammenfassung

Wenn Sie den Großteil dieses Artikels verstanden haben, dann gut gemacht — Sie haben begonnen, sich mit den grundlegenden Mechanismen von CSS vertraut zu machen.

Wenn Sie die Kaskade, Spezifität und Vererbung nicht vollständig verstanden haben, dann keine Sorge! Dies ist definitiv das komplizierteste, was wir bisher im Kurs behandelt haben und ist etwas, das selbst professionelle Webentwickler manchmal schwierig finden. Wir empfehlen, dass Sie mehrmals zu diesem Artikel zurückkehren, während Sie den Kurs fortsetzen, und weiter darüber nachdenken.

Kommen Sie zurück, wenn Sie auf seltsame Probleme stoßen, bei denen Styles nicht wie erwartet angewendet werden. Es könnte ein Spezifitätsproblem sein.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics")}}
