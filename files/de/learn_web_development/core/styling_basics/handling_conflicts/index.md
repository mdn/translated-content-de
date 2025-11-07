---
title: Umgang mit Konflikten
slug: Learn_web_development/Core/Styling_basics/Handling_conflicts
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model", "Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade", "Learn_web_development/Core/Styling_basics")}}

Ziel dieser Lektion ist es, Ihr Verständnis für einige der grundlegendsten Konzepte von CSS zu schärfen – die Kaskade, Spezifität und Vererbung –, die bestimmen, wie CSS auf HTML angewendet wird und wie Konflikte zwischen Stil-Deklarationen gelöst werden.

Während das Durcharbeiten dieser Lektion möglicherweise weniger unmittelbar relevant erscheint und etwas akademischer als einige andere Teile des Kurses ist, wird Ihnen ein Verständnis dieser Konzepte später viel Schmerz ersparen! Wir ermutigen Sie, diesen Abschnitt sorgfältig durchzugehen und sicherzustellen, dass Sie die Konzepte verstehen, bevor Sie fortfahren.

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
          <li>Verstehen, wie Regeln in CSS in Konflikt stehen können.</li>
          <li>Vererbung.</li>
          <li>Die Kaskade.</li>
          <li>Die Hauptkonzepte, die das Ergebnis von Konflikten bestimmen – Spezifität, Quellordnung und Wichtigkeit.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Konfliktierende Regeln

CSS steht für **Cascading Style Sheets**, und dieses erste Wort _Kaskadierung_ ist unglaublich wichtig zu verstehen – die Art und Weise, wie die Kaskade funktioniert, ist der Schlüssel zum Verständnis von CSS.

Irgendwann werden Sie an einem Projekt arbeiten und feststellen, dass CSS, das Sie glauben, auf ein Element angewendet werden sollte, nicht funktioniert. Häufig tritt dieses Problem auf, wenn Sie zwei Regeln erstellen, die unterschiedliche Werte derselben Eigenschaft auf dasselbe Element anwenden.

Die [**Kaskade**](/de/docs/Web/CSS/CSS_cascade/Cascade) und das eng verwandte Konzept der [**Spezifität**](/de/docs/Web/CSS/CSS_cascade/Specificity) sind Mechanismen, die steuern, welche Regel bei einem solchen Konflikt angewendet wird. Die Deklaration, die Ihr Element stylt, könnte nicht die sein, die Sie erwarten, daher müssen Sie verstehen, wie diese Mechanismen funktionieren.

Ebenso wichtig ist das Konzept der [**Vererbung**](/de/docs/Web/CSS/CSS_cascade/Inheritance), das bedeutet, dass einige CSS-Eigenschaften standardmäßig Werte von der übergeordneten Element vererbt und andere nicht. Dies kann ebenfalls zu unerwartetem Verhalten führen.

Lassen Sie uns zunächst einen kurzen Blick auf die Schlüsselkonzepte werfen, mit denen wir es zu tun haben, dann werden wir jedes einzeln betrachten und sehen, wie sie miteinander und mit Ihrem CSS interagieren. Diese Konzepte können schwierig zu verstehen sein, aber sie werden klarer werden, sobald Sie mehr Übung im Schreiben von CSS bekommen.

### Kaskade

Stylesheets [**kaskadieren**](/de/docs/Web/CSS/CSS_cascade/Cascade). Auf einer sehr einfachen Ebene bedeutet dies, dass der Ursprung und die Reihenfolge der CSS-Regeln von Bedeutung sind. Wenn zwei Regeln die gleiche Spezifität haben, wird diejenige verwendet, die zuletzt im Stylesheet definiert ist. Es gibt weitere Konzepte, die Auswirkungen haben, wie Kaskadierungs-Ebenen, aber diese sind fortgeschrittener und wir werden sie hier nicht im Detail behandeln.

Im unten stehenden Beispiel haben wir zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der Inhalt von `<h1>` wird schließlich blau gefärbt. Dies liegt daran, dass beide Regeln aus derselben Quelle stammen, einen identischen Elementselektor haben und daher dieselbe Spezifität tragen, aber die letzte in der Quellordnung gewinnt.

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

- Ein Typ- (Element-)Selektor ist weniger spezifisch; er wählt alle Elemente dieses Typs aus, die auf einer Seite erscheinen, daher hat er weniger Gewicht. Pseudo-Element-Selektoren haben dieselbe Spezifität wie reguläre Elementselektoren.
- Ein Klassenselektor ist spezifischer; er wählt nur die Elemente auf einer Seite aus, die einen bestimmten `class`-Attributwert haben, daher hat er mehr Gewicht. Attributselektoren und Pseudoklassen haben dasselbe Gewicht wie eine Klasse.
- Ein ID-Selektor ist noch spezifischer – er wählt nur ein einzelnes Element mit einem bestimmten `id`-Wert aus. Daher hat er noch mehr Gewicht.

Im Folgenden haben wir wieder zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der `<h1>`-Inhalt wird unten rot gefärbt, auch wenn die `color: blue`-Deklaration später in der Quellordnung erscheint, weil der Klassenselektor `main-heading` seiner Regel eine höhere Spezifität verleiht als der Typselektor `h1`. Die Deklaration mit der höheren Spezifität, die mit dem Klassenselektor definiert wird, wird angewendet.

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

Vererbung muss in diesem Zusammenhang ebenfalls verstanden werden – einige CSS-Eigenschaftswerte, die auf Elternelementen gesetzt sind, werden von deren Kindelementen geerbt, andere nicht.

Wenn Sie beispielsweise auf ein Element `color` und `font-family` setzen, wird jedes darin enthaltene Element ebenfalls mit dieser Farbe und Schriftart gestylt, es sei denn, Sie haben direkt andere Farb- und Schriftwerte auf sie angewendet.

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

Einige Eigenschaften werden nicht vererbt – zum Beispiel {{cssxref("width")}} Wenn Sie eine `width` von `50%` auf ein Element setzen, erhalten alle Nachkommen keine Breite von `50%` der Breite ihres Elternelements. Wäre dies der Fall, wäre CSS sehr frustrierend zu verwenden!

> [!NOTE]
> Auf den CSS-Eigenschaftsreferenzseiten von MDN finden Sie ein technisches Informationsfeld namens "Formale Definition", das eine Reihe von Datenpunkten zu dieser Eigenschaft auflistet, einschließlich der Frage, ob sie vererbt wird oder nicht. Siehe den Abschnitt zur [Farbeigenschaft Formale Definition](/de/docs/Web/CSS/Reference/Properties/color#formal_definition) als Beispiel.

### Verständnis, wie die Konzepte zusammenarbeiten

Diese drei Konzepte (Kaskade, Spezifität und Vererbung) steuern gemeinsam, welches CSS auf welches Element angewendet wird. In den folgenden Abschnitten werden wir sehen, wie sie zusammenarbeiten. Es kann manchmal etwas kompliziert erscheinen, aber Sie werden anfangen, sich daran zu erinnern, je erfahrener Sie mit CSS werden, und Sie können die Details immer nachschlagen, wenn Sie sie vergessen! Selbst erfahrene Entwickler erinnern sich nicht an alle Details.

## Verstehen der Vererbung

Wir beginnen mit der Vererbung. Im untenstehenden Beispiel haben wir ein {{HTMLElement("ul")}}-Element mit zwei Ebenen von ineinander geschachtelten ungeordneten Listen. Wir haben dem äußeren `<ul>` einen Rand, ein Padding und eine Schriftfarbe gegeben.

Die `color`-Eigenschaft ist eine vererbte Eigenschaft. Daher wird der Wert der `color`-Eigenschaft auf die direkten Kinder angewendet und auch auf die indirekten Kinder – die unmittelbaren `<li>`-Kinder und diejenigen innerhalb der ersten verschachtelten Liste. Wir haben dann die Klasse `special` zu der zweiten verschachtelten Liste hinzugefügt und eine andere Farbe darauf angewendet. Diese wird dann durch ihre Kinder vererbt.

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

Eigenschaften wie `width` (wie zuvor erwähnt), `margin`, `padding` und `border` sind keine vererbten Eigenschaften. Wenn ein Rahmen in diesem Listenbeispiel von den Kindern geerbt würde, würde jede einzelne Liste und Listeneintrag einen Rahmen erhalten – wahrscheinlich kein Effekt, den wir jemals wünschen würden!

Obwohl jede CSS-Eigenschaftsseite auflistet, ob die Eigenschaft vererbt wird oder nicht, können Sie oft dasselbe intuitiv erraten, wenn Sie wissen, welchen Aspekt der Eigenschaftswert stylen wird.

### Steuerung der Vererbung

CSS bietet fünf spezielle universelle Eigenschaftswerte zur Steuerung der Vererbung. Jede CSS-Eigenschaft akzeptiert diese Werte.

- {{cssxref("inherit")}}
  - : Setzt den auf ein ausgewähltes Element angewendeten Eigenschaftswert auf denselben wie der des übergeordneten Elements. Dies "schaltet effektiv die Vererbung ein".
- {{cssxref("initial")}}
  - : Setzt den auf ein ausgewähltes Element angewendeten Eigenschaftswert auf den [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) dieser Eigenschaft.
- {{cssxref("revert")}}
  - : Setzt den auf ein ausgewähltes Element angewendeten Eigenschaftswert auf das Standardstyling des Browsers zurück, anstatt auf die für diese Eigenschaft festgelegten Standards. Dieser Wert verhält sich in vielen Fällen wie {{cssxref("unset")}}.
- {{cssxref("revert-layer")}}
  - : Setzt den auf ein ausgewähltes Element angewendeten Eigenschaftswert auf den in einer vorherigen [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer) festgelegten Wert zurück.
- {{cssxref("unset")}}
  - : Setzt die Eigenschaft auf ihren natürlichen Wert zurück, was bedeutet, dass wenn die Eigenschaft ihrer Natur nach vererbt wird, sie sich wie `inherit` verhält, andernfalls verhält sie sich wie `initial`.

> [!NOTE]
> Siehe [Ursprungsarten](/de/docs/Web/CSS/CSS_cascade/Cascade#origin_types) für weitere Informationen zu jedem dieser Werte und wie sie funktionieren.

### Spielen mit Vererbungskontrolleigenschaften

Wir können uns eine Liste von Links ansehen und sehen, wie universelle Werte funktionieren. Das folgende Live-Beispiel ermöglicht es Ihnen, mit dem CSS zu experimentieren und zu sehen, was passiert, wenn Sie Änderungen vornehmen. Durch Spielen mit Code kann man HTML und CSS wirklich am besten verstehen.

Zum Beispiel:

1. Das zweite Listenelement hat die Klasse `my-class-1` angewendet. Dies setzt die Farbe des darin verschachtelten `<a>`-Elements auf `inherit`. Wenn Sie die Regel entfernen, wie ändert sich die Farbe des Links?
2. Verstehen Sie, warum die dritte und vierte Links die Farbe haben, die sie haben? Der dritte Link ist auf `initial` gesetzt, was bedeutet, dass er den Anfangswert der Eigenschaft verwendet (in diesem Fall Schwarz) und nicht den Standardwert des Browsers für Links, der Blau ist. Der vierte ist auf `unset` gesetzt, was bedeutet, dass der Link-Text die Farbe des übergeordneten Elements verwendet, Grün.
3. Welche der Links werden ihre Farbe ändern, wenn Sie eine neue Farbe für das `<a>`-Element definieren – zum Beispiel `a { color: red; }`?
4. Nachdem Sie den nächsten Abschnitt über das Zurücksetzen aller Eigenschaften gelesen haben, kehren Sie zurück und ändern Sie die `color`-Eigenschaft in `all`. Beachten Sie, wie der zweite Link in einer neuen Zeile ist und eine Aufzählung hat. Welche Eigenschaften denken Sie, wurden vererbt?

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

Die CSS-Kurzform-Eigenschaft [`all`](/de/docs/Web/CSS/Reference/Properties/all) kann verwendet werden, um einen dieser Vererbungswerte auf (fast) alle Eigenschaften gleichzeitig anzuwenden. Sein Wert kann einer der Vererbungswerte sein (`inherit`, `initial`, `revert`, `revert-layer` oder `unset`). Es ist eine bequeme Möglichkeit, Änderungen an Styles rückgängig zu machen, sodass Sie wieder zu einem bekannten Ausgangspunkt gelangen können, bevor Sie neue Änderungen beginnen.

Im untenstehenden Beispiel haben wir zwei Blockzitate. Das erste hat ein Styling, das auf das Blockzitat-Element selbst angewendet wird. Das zweite hat eine Klasse, die auf das Blockzitat angewendet wird, die den Wert von `all` auf `unset` setzt.

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

Versuchen Sie, den Wert von `all` auf einige der anderen verfügbaren Werte zu setzen, und beobachten Sie, was der Unterschied ist.

## Verständnis der Kaskade

Wir verstehen jetzt, dass Vererbung der Grund ist, warum ein Absatz, der tief in der Struktur Ihres HTML verschachtelt ist, dieselbe Farbe wie das auf den Körper angewendete CSS hat. Aus den Einführungspunktionslektionen haben wir ein Verständnis dafür, wie man das angewendete CSS zu jedem Punkt im Dokument ändern kann – sei es durch Zuweisen von CSS zu einem Element oder durch Erstellen einer Klasse. Wir werden jetzt sehen, wie die Kaskade bestimmt, welche CSS-Regeln angewendet werden, wenn mehr als ein Stilblock dieselbe Eigenschaft, jedoch mit unterschiedlichen Werten, auf dasselbe Element anwendet.

Es gibt drei Faktoren, die zu berücksichtigen sind, hier in zunehmender Wichtigkeit aufgelistet. Spätere überstimmen frühere:

1. **Quellordnung**
2. **Spezifität**
3. **Dringlichkeit**

Wir werden uns diese ansehen, um zu sehen, wie Browser genau herausfinden, welches CSS angewendet werden sollte.

### Quellordnung

Wir haben bereits gesehen, wie Quellordnung für die Kaskade wichtig ist. Wenn Sie mehr als eine Regel haben, die alle genau dasselbe Gewicht haben, dann gewinnt die, die zuletzt im CSS steht. Man kann sich das so vorstellen: Die Regel, die näher am Element selbst ist, überschreibt die früheren, bis die letzte gewinnt und das Element stylen kann.

Quellordnung zählt nur dann, wenn die Spezifitätsgewichtung der Regeln gleich ist, schauen wir uns also als nächstes die Spezifität an.

### Spezifität

Sie werden häufig in eine Situation geraten, in der Sie wissen, dass eine Regel später im Stylesheet kommt, aber eine frühere, widersprüchliche Regel angewendet wird. Dies geschieht, weil die frühere Regel eine **höhere Spezifität** hat – sie ist spezifischer und wird daher vom Browser als diejenige ausgewählt, die das Element stylen soll.

Wie wir früher in dieser Lektion gesehen haben, hat ein Klassenselektor mehr Gewicht als ein Elementselektor, daher werden die in dem Klassenstilblock definierten Eigenschaften die des Elementstilblocks überschreiben.

Eine Sache, die hier zu beachten ist, ist, dass obwohl wir über Selektoren und die Regeln nachdenken, die auf den Text oder die Komponente angewendet werden, die sie auswählen, es nicht die gesamte Regel ist, die überschrieben wird, sondern nur die Eigenschaften, die an mehreren Stellen definiert sind.

Dieses Verhalten hilft dabei, Wiederholungen in Ihrem CSS zu vermeiden. Eine gängige Praxis ist es, generische Stile für die Grundelemente zu definieren und dann Klassen für diejenigen zu erstellen, die anders sind. Zum Beispiel haben wir im untenstehenden Stylesheet generische Stile für Überschriften der Ebene 2 definiert und dann einige Klassen erstellt, die nur einige der Eigenschaften und Werte ändern. Die zuerst definierten Werte werden auf alle Überschriften angewendet, dann werden die spezifischeren Werte auf die Überschriften mit den Klassen angewendet.

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

Schauen wir uns nun an, wie der Browser die Spezifität berechnet. Wir wissen bereits, dass ein Elementselektor eine niedrige Spezifität hat und durch eine Klasse überschrieben werden kann. Im Wesentlichen wird einem Typ von Selektoren in Punkten ein Wert zugewiesen, und deren Addition ergibt das Gewicht dieses bestimmten Selektors, das dann gegen andere potenzielle Übereinstimmungen bewertet werden kann.

Die Menge an Spezifität, die ein Selektor hat, wird unter Verwendung von drei verschiedenen Werten (oder Komponenten) gemessen, die als die Spalten ID, CLASS und ELEMENT in Hunderten, Zehnern und Einheiten gedacht werden können:

- **IDs**: Punkten Sie eins in dieser Spalte (100 Punkte) für jeden ID-Selektor, der im gesamten Selektor enthalten ist.
- **Klassen**: Punkten Sie eins in dieser Spalte (10 Punkte) für jeden Klassenselektor, Attributselektor oder Pseudoklasse, die im gesamten Selektor enthalten sind.
- **Elemente**: Punkten Sie eins in dieser Spalte (1 Punkt) für jeden Elementselektor oder Pseudoelement, das im gesamten Selektor enthalten ist.

> [!NOTE]
> Der universelle Selektor ([`*`](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors)), [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators) (`+`, `>`, `~`, ' ') und der Spezifitätsanpassungsselektor ([`:where()`](/de/docs/Web/CSS/Reference/Selectors/:where)) zusammen mit seinen Parametern, haben keinen Einfluss auf die Spezifität.

Die folgende Tabelle zeigt einige isolierte Beispiele, um Sie in Schwung zu bringen. Versuchen Sie, diese zu durchgehen und stellen Sie sicher, dass Sie verstehen, warum sie die Spezifität haben, die wir ihnen gegeben haben. Wir haben Selektoren noch nicht im Detail behandelt, aber Sie können Details zu jedem Selektor im MDN [Selektoren-Referenz](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators) finden.

| Selektor                                  | Identifikatoren | Klassen | Elemente | Gesamtspezifität |
| ----------------------------------------- | --------------- | ------- | -------- | ---------------- |
| `h1`                                      | 0               | 0       | 1        | 0-0-1            |
| `h1 + p::first-letter`                    | 0               | 0       | 3        | 0-0-3            |
| `li > a[href*="en-US"] > .inline-warning` | 0               | 2       | 2        | 0-2-2            |
| `#identifier`                             | 1               | 0       | 0        | 1-0-0            |

#### Tiefgehendes Spezifitätsbeispiel

Bevor wir weitermachen, schauen wir uns ein Beispiel in Aktion an. Sie möchten dies möglicherweise in einem separaten Tab im MDN Playground öffnen, damit Sie es beim Lesen der Erklärung leicht abgleichen können.

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

Was passiert hier also? Zuerst einmal interessieren uns nur die ersten sieben Regeln dieses Beispiels, und wie Sie sehen werden, haben wir deren Spezifitätswerte in einem Kommentar vor jeder angegeben.

- Die ersten beiden Selektoren konkurrieren um das Styling der `background-color` des Links. Der zweite gewinnt und macht den Hintergrund blau, weil er eine zusätzliche ID im Selektor hat: seine Spezifität ist 2-0-1 vs. 1-0-1.
- Selektor 3 und 4 konkurrieren um das Styling der `color` des Links. Der zweite gewinnt und macht den Text `weiß`, weil er zwar einen Elementselektor weniger hat, dieser jedoch durch einen Klassenselektor ersetzt wurde, der mehr Gewicht als ein Elementselektor hat. Die gewinnende Spezifität ist 1-1-3 vs. 1-0-4.
- Die Selektoren 5–7 konkurrieren um das Styling des `border` des Links, wenn darüber geschwebt wird. Selektor 6 verliert eindeutig gegen Selektor 5 mit einer Spezifität von 0-2-3 vs. 0-2-4; er hat einen Elementselektor weniger. Selektor 7 schlägt jedoch beide Selektoren 5 und 6, weil er die gleiche Anzahl von Unterselektoren wie Selektor 5 hat, aber ein Element durch einen Klassenselektor ersetzt hat. So ist die gewinnende Spezifität 0-3-3 vs. 0-2-3 und 0-2-4.

> [!NOTE]
> Jeder Selektortyp hat seine eigene Spezifitätsebene, die nicht durch Selektoren mit einer niedrigeren Spezifitätsebene überschrieben werden kann. Zum Beispiel könnten eine _Million_ **Klassenselektoren** zusammen nicht die Spezifität von _einem_ **ID-Selektor** überschreiben.
>
> Die beste Methode zur Bewertung der Spezifität besteht darin, die Spezifitätsstufen jeweils einzeln von der höchsten bis zur niedrigsten zu bewerten, wenn nötig. Nur wenn es einen Gleichstand zwischen den Selektorscores innerhalb einer Spezifitätsspalte gibt, müssen Sie die nächste Spalte darunter bewerten; andernfalls können Sie die niedrigeren Spezifitätsselektoren außer Acht lassen, da sie niemals die höheren Spezifitätsselektoren überschreiben können.

#### IDs versus Klassen

ID-Selektoren haben eine hohe Spezifität. Das bedeutet, dass Styles, die basierend auf Übereinstimmung mit einem ID-Selektor angewendet werden, andere Selektoren einschließlich Klassenselektoren und Typselektoren außer Kraft setzen. Da eine ID nur einmal auf einer Seite vorkommen kann und aufgrund der hohen Spezifität von ID-Selektoren ist es vorzuziehen, einem Element stattdessen eine Klasse hinzuzufügen.

Wenn die Verwendung der ID der einzige Weg ist, um das Element gezielt anzusprechen – vielleicht, weil Sie keinen Zugriff auf das Markup haben und es nicht bearbeiten können – sollten Sie die ID in einem [Attributselektor](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) verwenden, wie `p[id="header"]`.

### Inline-Stile

Inline-Stile, also die im Attribut [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style) enthaltene Stil-Deklaration, haben Vorrang vor allen normalen Stilen, egal wie spezifisch. Solche Deklarationen haben keine Selektoren, aber ihre Spezifität kann als 1-0-0-0 angesehen werden; immer mehr als jedes andere Spezifitätsgewicht, egal wie viele IDs in den Selektoren sind.

### !important

Es gibt ein spezielles Stück CSS, das Sie verwenden können, um alle oben genannten Berechnungen außer Kraft zu setzen, sogar Inline-Stile – das `!important`-Flag. Sie sollten jedoch sehr vorsichtig bei der Verwendung sein. Dieses Flag wird verwendet, um ein einzelnes Eigenschaft-Wert-Paar zur spezifischsten Regel zu machen und damit die normalen Regeln der Kaskade inklusive normaler Inline-Stile zu überschreiben.

> [!NOTE]
> Es ist nützlich zu wissen, dass das `!important`-Flag existiert, damit Sie wissen, was es ist, wenn Sie es im Code anderer Leute finden. **Wir empfehlen jedoch dringend, es nicht zu verwenden, es sei denn, Sie müssen es unbedingt.** Das `!important`-Flag verändert die normale Funktionsweise der Kaskade, sodass das Debuggen von CSS-Problemen wirklich schwer herauszufinden sein kann, besonders in einem großen Stylesheet.

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

Gehen wir das durch, um zu sehen, was passiert – versuchen Sie, einige der Eigenschaften zu entfernen, um zu sehen, was passiert, wenn Sie es schwer verstehen:

1. Sie werden sehen, dass die `color`- und `padding`-Werte der dritten Regel angewendet wurden, aber nicht die `background-color`. Warum? Eigentlich sollten sicherlich alle drei angewendet werden, da später in der Quellordnung stehende Regeln normalerweise frühere Regeln außer Kraft setzen.
2. Die darüber liegenden Regeln gewinnen jedoch, weil Klassenselektoren eine höhere Spezifität als Elementselektoren haben.
3. Beide Elemente haben eine [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) von `better`, aber das zweite hat eine [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) von `winning` ebenfalls. Da IDs eine _noch höhere_ Spezifität als Klassen haben, sollten sowohl das `rote` `background-color` als auch der `1px schwarze` `border` auf das 2. Element angewendet werden, wobei das erste Element die graue Hintergrundfarbe und keinen Rand erhält, wie von der Klasse festgelegt.
4. Das 2. Element _bekommt_ den `roten` `background-color`, aber keinen `border`. Warum? Wegen des `!important`-Flags in der zweiten Regel. Das Hinzufügen des `!important`-Flags nach `border: none` bedeutet, dass diese Deklaration den `border`-Wert in der vorherigen Regel gewinnt, obwohl der ID-Selektor eine höhere Spezifität hat.

> [!NOTE]
> Der einzige Weg, um eine wichtige Deklaration zu überschreiben, ist eine andere wichtige Deklaration mit der _gleichen Spezifität_ später in der Quellordnung einzuschließen oder eine mit höherer Spezifität.

Eine Situation, in der Sie möglicherweise das `!important`-Flag verwenden müssen, ist, wenn Sie in einem CMS arbeiten, bei dem Sie die Kern-CSS-Module nicht bearbeiten können und Sie wirklich einen Inline-Stil oder eine wichtige Deklaration überschreiben möchten, die auf keine andere Weise überschrieben werden kann. Aber wirklich, verwenden Sie es nicht, wenn Sie es vermeiden können.

## Der Einfluss des Standorts von CSS

Abschließend ist es wichtig zu beachten, dass die Vorrangstellung einer CSS-Deklaration davon abhängt, in welchem Stylesheet sie spezifiziert wurde.

Es ist für Benutzer möglich, benutzerdefinierte Stylesheets festzulegen, um die Stile des Entwicklers zu überschreiben. Zum Beispiel könnte ein sehbehinderter Benutzer alle besuchten Webseiten so einstellen möchten, dass die Schriftartgröße doppelt so groß wie normal ist, um das Lesen zu erleichtern.

### Reihenfolge übergeordneter Deklarationen

Konfliktierende Deklarationen werden in der folgenden Reihenfolge angewendet, wobei spätere die früheren überschreiben:

1. Deklarationen in Benutzer-Agent-Stilblättern (z. B. die Standardstile des Browsers, die angewendet werden, wenn kein anderes Styling festgelegt ist).
2. Normale Deklarationen in Benutzerstyleblättern (benutzerdefinierte Stile, die von einem Benutzer festgelegt werden).
3. Normale Deklarationen in Autorenstyleblättern (dies sind die Stile, die von uns, den Webentwicklern, festgelegt werden).
4. Wichtige Deklarationen in Autorenstyleblättern.
5. Wichtige Deklarationen in Benutzerstyleblättern.
6. Wichtige Deklarationen in Benutzer-Agent-Stilblättern.

> [!NOTE]
> Die Vorrangordnung wird für Stile, die mit `!important` gekennzeichnet sind, invertiert. Es macht Sinn, dass die Stylesheets der Webentwickler die der Benutzer überschreiben, damit das Design wie gewünscht bleiben kann; jedoch haben Benutzer manchmal gute Gründe, die Entwicklerstile außer Kraft zu setzen, wie oben erwähnt, und dies kann durch die Verwendung von `!important` in ihren Regeln erreicht werden.

## Zusammenfassung

Wenn Sie den größten Teil dieses Artikels verstanden haben, dann gut gemacht – Sie haben begonnen, sich mit den grundlegenden Mechanismen von CSS vertraut zu machen.

Wenn Sie die Kaskade, Spezifität und Vererbung nicht vollständig verstanden haben, machen Sie sich keine Sorgen! Das ist definitiv das komplizierteste, was wir bisher im Kurs behandelt haben, und etwas, das selbst professionelle Webentwickler manchmal schwierig finden. Wir würden Ihnen raten, diesen Artikel mehrmals zu lesen, während Sie den Kurs fortsetzen, und ständig darüber nachzudenken.

Schauen Sie hier zurück, wenn Sie anfangen, auf seltsame Probleme zu stoßen, bei denen Stile nicht wie erwartet angewendet werden. Es könnte ein Spezifitätsproblem sein. Als nächstes werden wir Ihnen einige Tests bieten, mit denen Sie überprüfen können, wie gut Sie die Informationen zur Kaskade verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model", "Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade", "Learn_web_development/Core/Styling_basics")}}
