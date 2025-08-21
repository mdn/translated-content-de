---
title: Umgang mit Konflikten
slug: Learn_web_development/Core/Styling_basics/Handling_conflicts
l10n:
  sourceCommit: 78bdd004c24d256efc8372f18204ea58f83a1b5e
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model", "Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade", "Learn_web_development/Core/Styling_basics")}}

Ziel dieser Lektion ist es, Ihr Verständnis für einige der grundlegendsten Konzepte von CSS zu entwickeln — die Kaskade, Spezifität und Vererbung — die steuern, wie CSS auf HTML angewendet wird und wie Konflikte zwischen Stildeklarationen gelöst werden.

Während die Bearbeitung dieser Lektion möglicherweise sofort weniger relevant erscheint und etwas theoretischer als andere Teile des Kurses, kann das Verständnis dieser Konzepte Ihnen später viel Kummer ersparen! Wir empfehlen Ihnen, diesen Abschnitt sorgfältig zu bearbeiten und sicherzustellen, dass Sie die Konzepte verstehen, bevor Sie fortfahren.

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
          <li>Die Hauptkonzepte, die das Ergebnis von Konflikten bestimmen — Spezifität, Quellreihenfolge und Wichtigkeit.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Konfliktregelungen

CSS steht für **Cascading Style Sheets**, und dieses erste Wort _kaskadierend_ ist unglaublich wichtig zu verstehen — die Art und Weise, wie die Kaskade funktioniert, ist der Schlüssel zum Verständnis von CSS.

Irgendwann werden Sie an einem Projekt arbeiten und feststellen, dass einige CSS-Stile, die auf ein Element angewendet werden sollten, nicht funktionieren. Oft tritt dieses Problem auf, wenn Sie zwei Regeln erstellen, die unterschiedliche Werte derselben Eigenschaft auf dasselbe Element anwenden.

Die [**Kaskade**](/de/docs/Web/CSS/CSS_cascade/Cascade) und das eng verwandte Konzept der [**Spezifität**](/de/docs/Web/CSS/CSS_cascade/Specificity) sind Mechanismen, die steuern, welche Regel angewendet wird, wenn ein solcher Konflikt auftritt. Die Deklaration, die Ihr Element stylt, mag nicht die sein, die Sie erwarten, daher müssen Sie verstehen, wie diese Mechanismen funktionieren.

Ebenfalls bedeutend ist das Konzept der [**Vererbung**](/de/docs/Web/CSS/CSS_cascade/Inheritance), was bedeutet, dass einige CSS-Eigenschaften standardmäßig Werte erben, die auf das Elternelement des aktuellen Elements festgelegt sind, und einige nicht. Dies kann ebenfalls zu unerwartetem Verhalten führen.

Beginnen wir mit einem kurzen Blick auf die wichtigsten Konzepte, mit denen wir es zu tun haben. Dann werden wir jedes einzeln betrachten und sehen, wie sie miteinander und mit Ihrem CSS interagieren. Diese Konzepte mögen anfangs kompliziert erscheinen, aber sie werden klarer, je mehr Sie mit CSS arbeiten.

### Kaskade

Stylesheets [**kaskadieren**](/de/docs/Web/CSS/CSS_cascade/Cascade). Auf sehr einfachem Niveau bedeutet dies, dass der Ursprung und die Reihenfolge von CSS-Regeln eine Rolle spielen. Wenn zwei Regeln die gleiche Spezifität haben, wird die zuletzt im Stylesheet definierte Regel verwendet. Es gibt auch andere Konzepte, die Einfluss haben, wie z.B. [Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers), aber diese sind fortgeschrittener und werden hier nicht im Detail behandelt.

Im folgenden Beispiel haben wir zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der Inhalt des `<h1>` wird schließlich blau gefärbt. Das liegt daran, dass beide Regeln aus derselben Quelle stammen, denselben Elementselektor haben und daher die gleiche Spezifität besitzen, aber die letzte in der Quellreihenfolge gewinnt.

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

[Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) ist ein Algorithmus, den der Browser verwendet, um zu entscheiden, welcher Eigenschaftswert auf ein Element angewendet wird. Wenn mehrere Regeln unterschiedliche Selektoren haben, die unterschiedliche Werte für dieselbe Eigenschaft festlegen und dasselbe Element anvisieren, entscheidet die Spezifität über den Eigenschaftswert, der auf das Element angewendet wird. Spezifität ist im Grunde ein Maß dafür, wie spezifisch die Auswahl eines Selektors sein wird:

- Ein Typselektor (Element) ist weniger spezifisch; er wählt alle Elemente dieses Typs auf einer Seite aus, daher hat er weniger Gewicht. Pseudo-Element-Selektoren haben die gleiche Spezifität wie normale Elementselektoren.
- Ein Klassenselektor ist spezifischer; er wird nur die Elemente auf einer Seite auswählen, die einen bestimmten `class`-Attributwert haben, daher hat er mehr Gewicht. Attributselektoren und Pseudo-Klassen haben das gleiche Gewicht wie eine Klasse.
- Ein ID-Selektor ist noch spezifischer — er wählt nur ein einzelnes Element mit einem bestimmten `id`-Wert aus. Daher hat er noch mehr Gewicht.

Unten haben wir wieder zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der Inhalt des `<h1>` wird schließlich `rot` gefärbt, obwohl die Deklaration `color: blue` später in der Quellreihenfolge erscheint, weil der Klassenselektor `main-heading` seiner Regel eine höhere Spezifität verleiht als der Typselektor `h1`. Die Deklaration mit der höheren Spezifität, die mit dem Klassenselektor definiert ist, wird angewendet.

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

Wir erklären den Spezifizitätsalgorithmus später.

### Vererbung

Auch die Vererbung muss in diesem Zusammenhang verstanden werden — einige CSS-Eigenschaftswerte, die an Elternelementen festgelegt sind, werden von ihren Kindelementen geerbt, andere hingegen nicht.

Wenn Sie beispielsweise eine `color`- und `font-family`-Eigenschaft auf ein Element anwenden, wird jedes Element innerhalb dieses Elements ebenfalls mit dieser Farbe und Schriftart gestylt, es sei denn, Sie haben ihnen direkt andere Farbe und Schriftartwerte zugewiesen.

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

Einige Eigenschaften werden nicht vererbt — zum Beispiel {{cssxref("width")}}. Wenn Sie eine `width` von `50%` auf ein Element festlegen, erhalten nicht alle seine Nachfahren eine Breite von `50%` der `width` ihres Elternteils. Wenn dies der Fall wäre, wäre CSS sehr frustrierend zu verwenden!

> [!NOTE]
> Auf den MDN CSS-Eigenschaftsreferenzseiten finden Sie ein technisches Informationsfeld namens „Formale Definition“, das eine Reihe von Datenpunkten über diese Eigenschaft auflistet, einschließlich ob sie vererbt wird oder nicht. Siehe den Abschnitt [Formale Definition der Farbeigenschaft](/de/docs/Web/CSS/color#formal_definition) als Beispiel.

### Verstehen, wie die Konzepte zusammenarbeiten

Diese drei Konzepte (Kaskade, Spezifität und Vererbung) steuern gemeinsam, welches CSS auf welches Element angewendet wird. In den folgenden Abschnitten werden wir uns ansehen, wie sie zusammenarbeiten. Es kann manchmal etwas kompliziert erscheinen, aber Sie werden beginnen, sie sich zu merken, wenn Sie mehr Erfahrungen mit CSS sammeln, und Sie können die Details jederzeit nachschlagen, wenn Sie es vergessen sollten! Selbst erfahrene Entwickler erinnern sich nicht an alle Details.

## Vererbung verstehen

Wir beginnen mit der Vererbung. Im unten stehenden Beispiel haben wir ein {{HTMLElement("ul")}}-Element mit zwei Ebenen von verschachtelten ungeordneten Listen. Wir haben der äußeren `<ul>` einen Rahmen, ein Padding und eine Schriftfarbe hinzugefügt.

Die `color`-Eigenschaft ist eine vererbte Eigenschaft. Daher wird der `color`-Eigenschaftswert auf die direkten und indirekten Kinder angewendet — die unmittelbaren `<li>`-Kinder und jene innerhalb der ersten verschachtelten Liste. Wir haben dann der zweiten verschachtelten Liste die Klasse `special` hinzugefügt und eine andere Farbe darauf angewendet. Diese wird dann entlang ihrer Kinder vererbt.

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

Eigenschaften wie `width` (wie bereits erwähnt), `margin`, `padding` und `border` sind keine vererbten Eigenschaften. Wenn ein Rahmen bei den Kindern dieses Listenbeispiels vererbt würde, würden jede einzelne Liste und jedes Listenelement einen Rahmen erhalten — wahrscheinlich kein Effekt, den wir jemals wollen würden!

Obwohl jede CSS-Eigenschaftsseite auflistet, ob die Eigenschaft vererbt wird oder nicht, kann man dies oft intuitiv erraten, wenn man weiß, welchen Aspekt die Eigenschaft gestalten wird.

### Vererbung steuern

CSS bietet fünf spezielle universelle Eigenschaftswerte zum Steuern der Vererbung. Jede CSS-Eigenschaft akzeptiert diese Werte.

- {{cssxref("inherit")}}
  - : Setzt den Eigenschaftswert des ausgewählten Elements auf den seines Elternelements. Effektiv wird die „Vererbung eingeschaltet“.
- {{cssxref("initial")}}
  - : Setzt den Eigenschaftswert des ausgewählten Elements auf den [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) dieser Eigenschaft.
- {{cssxref("revert")}}
  - : Setzt den Eigenschaftswert des ausgewählten Elements auf das Standardstyling des Browsers zurück, anstatt auf die Standardeinstellungen dieser Eigenschaft. Dieser Wert funktioniert in vielen Fällen wie {{cssxref("unset")}}.
- {{cssxref("revert-layer")}}
  - : Setzt den Eigenschaftswert des ausgewählten Elements auf den in einer vorherigen [Kaskadenschicht](/de/docs/Web/CSS/@layer) festgelegten Wert zurück.
- {{cssxref("unset")}}
  - : Setzt die Eigenschaft auf ihren natürlichen Wert zurück, was bedeutet, dass wenn die Eigenschaft von Natur aus vererbt wird, sie wie `inherit` wirkt, andernfalls wie `initial`.

> [!NOTE]
> Siehe [Ursprungsarten](/de/docs/Web/CSS/CSS_cascade/Cascade#origin_types) für weitere Informationen zu jedem dieser Werte und wie sie funktionieren.

### Mit Vererbungskontrolle spielen

Wir können uns eine Liste von Links anschauen und sehen, wie universelle Werte funktionieren. Das folgende Live-Beispiel erlaubt es Ihnen, mit dem CSS zu spielen und zu sehen, was passiert, wenn Sie Änderungen vornehmen. Mit Code zu spielen ist wirklich der beste Weg, um HTML und CSS besser zu verstehen.

Zum Beispiel:

1. Das zweite Listenelement hat die Klasse `my-class-1` angewendet. Dadurch wird die Farbe des innerhalb des `<a>`-Elements verschachtelten Links auf `inherit` gesetzt. Wenn Sie die Regel entfernen, wie ändert sich die Farbe des Links?
2. Verstehen Sie, warum der dritte und vierte Link die Farbe haben, die sie haben? Der dritte Link ist auf `initial` gesetzt, was bedeutet, dass er den Anfangswert der Eigenschaft verwendet (in diesem Fall Schwarz) und nicht die Standardeinstellung des Browsers für Links, die Blau ist. Der vierte ist auf `unset` gesetzt, was bedeutet, dass der Linktext die Farbe des Elternelements, Grün, verwendet.
3. Welche der Links wird die Farbe ändern, wenn Sie eine neue Farbe für das `<a>`-Element definieren — zum Beispiel `a { color: red; }`?
4. Nachdem Sie den nächsten Abschnitt über das Zurücksetzen aller Eigenschaften gelesen haben, kehren Sie zurück und ändern Sie die `color`-Eigenschaft in `all`. Beachten Sie, wie der zweite Link in einer neuen Zeile steht und ein Aufzählungszeichen hat. Welche Eigenschaften denken Sie, wurden geerbt?

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

Die CSS-Kurzschrift-Eigenschaft [`all`](/de/docs/Web/CSS/all) kann verwendet werden, um einen dieser Vererbungswerte auf (fast) alle Eigenschaften auf einmal anzuwenden. Ihr Wert kann einer der Vererbungswerte sein (`inherit`, `initial`, `revert`, `revert-layer` oder `unset`). Es ist eine bequeme Möglichkeit, Änderungen an Stilen rückgängig zu machen, um zu einem bekannten Ausgangspunkt zurückzukehren, bevor Sie mit neuen Änderungen beginnen.

Im folgenden Beispiel haben wir zwei Blockzitate. Das erste hat Styling auf das Blockquote-Element selbst angewendet. Das zweite hat eine Klasse auf das Blockquote angewendet, die den Wert `all` auf `unset` setzt.

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

## Die Kaskade verstehen

Wir verstehen nun, dass Vererbung der Grund dafür ist, dass ein Absatz, der tief in der Struktur Ihres HTML verschachtelt ist, die gleiche Farbe hat wie das CSS, das auf den Körper angewendet wurde. Aus den Einführungskursen haben wir ein Verständnis dafür, wie man das auf etwas angewendete CSS an jedem Punkt des Dokuments ändert — sei es durch Zuweisung von CSS zu einem Element oder durch Erstellung einer Klasse. Wir werden nun darauf eingehen, wie die Kaskade definiert, welche CSS-Regeln angewendet werden, wenn mehr als ein Stilblock dieselbe Eigenschaft, aber mit unterschiedlichen Werten, auf dasselbe Element anwenden.

Es gibt drei Faktoren zu berücksichtigen, die in steigender Wichtigkeit hier aufgelistet sind. Spätere überstimmen frühere:

1. **Quellreihenfolge**
2. **Spezifität**
3. **Wichtigkeit**

Wir werden uns diese ansehen, um zu sehen, wie Browser genau herausfinden, welches CSS angewendet werden sollte.

### Quellreihenfolge

Wir haben bereits gesehen, wie die Quellreihenfolge für die Kaskade von Bedeutung ist. Wenn Sie mehr als eine Regel haben, die genau dasselbe Gewicht hat, dann gewinnt die, die zuletzt im CSS kommt. Sie können dies so sehen, dass die Regel, die näher an das Element selbst ist, die früheren überschreibt, bis die letzte gewinnt und das Element stylen kann.

Die Quellreihenfolge ist nur von Bedeutung, wenn das Spezifitätsgewicht der Regeln gleich ist, also schauen wir uns als nächstes die Spezifität an.

### Spezifität

Sie werden oft in eine Situation geraten, in der Sie wissen, dass eine Regel später im Stylesheet kommt, aber eine frühere, widersprüchliche Regel angewendet wird. Dies geschieht, weil die frühere Regel eine **höhere Spezifität** hat — sie ist spezifischer und wird daher vom Browser als diejenige gewählt, die das Element stylen sollte.

Wie wir bereits früher in dieser Lektion gesehen haben, hat ein Klassenselektor mehr Gewicht als ein Elementselektor, sodass die in dem Klassenstilblock definierten Eigenschaften die in dem Elementstilblock definierten überschreiben.

Eine Sache, die hier zu beachten ist, ist, dass obwohl wir an Selektoren und die Regeln denken, die auf den Text oder die Komponente angewendet werden, die sie auswählen, es nicht die gesamte Regel ist, die überschrieben wird, sondern nur die Eigenschaften, die an mehreren Stellen deklariert sind.

Dieses Verhalten hilft, Wiederholungen in Ihrem CSS zu vermeiden. Eine gängige Praxis ist es, generische Stile für die grundlegenden Elemente zu definieren und dann Klassen für die zu erstellen, die anders sind. Im folgenden Stylesheet haben wir generische Stile für Überschriften der Ebene 2 definiert und dann einige Klassen erstellt, die nur einige der Eigenschaften und Werte ändern. Die zunächst definierten Werte werden auf alle Überschriften angewendet, dann werden die spezifischeren Werte auf die Überschriften mit den Klassen angewendet.

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

Lassen Sie uns nun genauer ansehen, wie der Browser die Spezifität berechnet. Wir wissen bereits, dass ein Elementselektor eine niedrige Spezifität hat und von einer Klasse überschrieben werden kann. Im Wesentlichen wird ein Punktwert an verschiedene Arten von Selektoren vergeben und das Addieren dieser Werte ergibt das Gewicht dieses bestimmten Selektors, das dann gegen andere potenzielle Übereinstimmungen bewertet werden kann.

Die Menge der Spezifität, die ein Selektor hat, wird mithilfe von drei verschiedenen Werten (oder Komponenten) gemessen, die man als ID-, CLASS- und ELEMENT-Spalten im Wert von Hunderten, Zehnern und Einern betrachten kann:

- **IDs**: Zählen Sie eins in dieser Spalte (100 Punkte) für jeden ID-Selektor, der in dem Gesamtselektor enthalten ist.
- **Klassen**: Zählen Sie eins in dieser Spalte (10 Punkte) für jeden Klassenselektor, Attributselektor oder Pseudo-Klasse, der im Gesamtselektor enthalten ist.
- **Elemente**: Zählen Sie eins in dieser Spalte (1 Punkt) für jeden Elementselektor oder Pseudo-Element, der im Gesamtselektor enthalten ist.

> [!NOTE]
> Der Universalselektor ([`*`](/de/docs/Web/CSS/Universal_selectors)), [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators) (`+`, `>`, `~`, ' '), und der Spezifizitätsanpassungsselektor ([`:where()`](/de/docs/Web/CSS/:where)) haben zusammen mit ihren Parametern keinen Effekt auf die Spezifität.

Die folgende Tabelle zeigt einige isolierte Beispiele, um Sie in Stimmung zu bringen. Versuchen Sie, diese durchzugehen und sicherzustellen, dass Sie verstehen, warum sie die Spezifität haben, die wir ihnen gegeben haben. Wir haben Selektoren noch nicht im Detail behandelt, aber Sie können Details zu jedem Selektor im MDN [Selektoren Reference](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators) finden.

| Selektor                                  | Identifizierer | Klassen | Elemente | Gesamtspezifität |
| ----------------------------------------- | -------------- | ------- | -------- | ---------------- |
| `h1`                                      | 0              | 0       | 1        | 0-0-1            |
| `h1 + p::first-letter`                    | 0              | 0       | 3        | 0-0-3            |
| `li > a[href*="en-US"] > .inline-warning` | 0              | 2       | 2        | 0-2-2            |
| `#identifier`                             | 1              | 0       | 0        | 1-0-0            |

#### Spezifitätsbeispiel im Detail

Bevor wir fortfahren, sehen wir uns ein Beispiel in Aktion an. Möglicherweise möchten Sie dies im MDN Playground in einem separaten Tab öffnen, damit Sie es beim Lesen der Erklärung einfach querverweisen können.

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

Was passiert hier? Zuerst einmal interessieren wir uns nur für die ersten sieben Regeln dieses Beispiels, und wie Sie bemerken werden, haben wir ihre Spezifitätswerte in einem Kommentar vor jeder Regel angegeben.

- Die ersten beiden Selektoren konkurrieren über das Styling des `background-color` der Links. Der zweite gewinnt und macht die Hintergrundfarbe `blau`, weil er einen zusätzlichen ID-Selektor in der Kette hat: seine Spezifität ist 2-0-1 vs. 1-0-1.
- Selektoren 3 und 4 konkurrieren über das Styling des `color` der Linktexte. Der zweite gewinnt und macht den Text `weiß`, weil er zwar einen Elementselektor weniger hat, der fehlende Selektor jedoch durch einen Klassenselektor ersetzt wird, der mehr Gewicht hat als Elementselektoren. Die gewinnende Spezifität ist 1-1-3 vs. 1-0-4.
- Selektoren 5–7 konkurrieren über das Styling des `border` der Links, wenn sie überfahren werden. Selektor 6 verliert klar gegen Selektor 5 mit einer Spezifität von 0-2-3 vs. 0-2-4; er hat einen Elementselektor weniger in der Kette. Selektor 7 hingegen schlägt sowohl Selektor 5 als auch 6, weil er die gleiche Anzahl von Unterselektoren in der Kette hat wie Selektor 5, aber ein Element wurde durch einen Klassenselektor ersetzt. So liegt die gewinnende Spezifität bei 0-3-3 vs. 0-2-3 und 0-2-4.

> [!NOTE]
> Jeder Selektortyp hat sein eigenes Spezifizitätsniveau, das nicht von Selektoren mit einem niedrigeren Spezifizitätsniveau überschrieben werden kann. Ein Beispiel: _Eine Million_ **Klassen**selektoren könnten nicht mal die Spezifität von _einem einzigen_ **ID**-Selektor überschreiben.
>
> Am besten bewertet man die Spezifitätsniveaus, indem man die Spezifitätslevel individuell von höchstem bis zum niedrigsten durchgeht, wenn nötig. Nur wenn es einen Gleichstand zwischen Selektorscores innerhalb einer Spezifizitätsspalte gibt, müssen Sie die nächste Spalte nach unten bewerten; andernfalls können Sie die Selektoren mit geringerer Spezifität ignorieren, da sie die Selektoren mit höherer Spezifität niemals überschreiben können.

#### ID vs. Klassen

ID-Selektoren haben hohe Spezifität. Dies bedeutet, dass Stile, die basierend auf einer Übereinstimmung mit einem ID-Selektor angewendet werden, Stile überfordern, die basierend auf anderen Selektoren angewendet werden, einschließlich Klassen- und Typselektoren. Da eine ID nur einmal auf einer Seite vorkommen kann und aufgrund der hohen Spezifität von ID-Selektoren, ist es vorzuziehen, eine Klasse zu einem Element hinzuzufügen, anstatt einer ID.

Wenn die Verwendung der ID der einzige Weg ist, um das Element zu targetieren — vielleicht weil Sie keinen Zugriff auf das Markup haben und es nicht bearbeiten können —, ziehen Sie in Betracht, die ID innerhalb eines [Attributselektors](/de/docs/Web/CSS/Attribute_selectors) zu verwenden, wie z.B. `p[id="header"]`.

### Inline-Stile

Inline-Stile, das heißt die Stil-Deklaration innerhalb eines [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attributes, haben Vorrang vor allen normalen Stilen, unabhängig von der Spezifität. Solche Deklarationen haben keine Selektoren, aber ihre Spezifität kann als 1-0-0-0 angesehen werden; immer mehr als jede andere Spezifikationsgewichtung, egal wie viele IDs in den Selektoren enthalten sind.

### !important

Es gibt ein spezielles Stück CSS, das Sie verwenden können, um alle oben genannten Berechnungen zu überstimmen, sogar Inline-Stile - das `!important`-Flag. Sie sollten jedoch sehr vorsichtig damit umgehen. Dieses Flag wird verwendet, um ein einzelnes Eigenschafts- und Wertepaar zur spezifischsten Regel zu machen, wodurch die normalen Regeln der Kaskade, einschließlich normaler Inline-Stile, überschrieben werden.

> [!NOTE]
> Es ist nützlich zu wissen, dass das `!important`-Flag existiert, damit Sie wissen, was es ist, wenn Sie darauf in der Arbeit anderer Leute stoßen. **Wir empfehlen jedoch dringend, es niemals zu verwenden, es sei denn, Sie müssen unbedingt.** Das `!important`-Flag ändert die Art und Weise, wie die Kaskade normalerweise funktioniert, und kann es sehr schwierig machen, CSS-Probleme zu debuggen, besonders bei einem großen Stylesheet.

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

Lassen Sie uns diese durchgehen, um zu sehen, was passiert - versuchen Sie, einige der Eigenschaften zu entfernen, um zu sehen, was passiert, wenn Sie es schwer nachvollziehen können:

1. Sie werden sehen, dass die `color`- und `padding`-Werte der dritten Regel angewendet wurden, aber die `background-color` nicht. Warum? Eigentlich sollten alle drei doch sicher gelten, da die Regeln, die später in der Quellreihenfolge stehen, normalerweise ältere Regeln überstimmen.
2. Die Regeln oben gewinnen jedoch, weil Klassenselektoren eine höhere Spezifität als Elementselektoren haben.
3. Beide Elemente haben ein [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) von `better`, aber das zweite hat auch eine [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) von `winning`. Da IDs eine _noch höhere_ Spezifität als Klassen haben, sollten die `red` `background-color` und der `1px black` `border` auf das zweite Element angewendet werden, wobei das erste Element die graue Hintergrundfarbe und keinen Rahmen gemäß der Klasse erhält.
4. Das zweite Element _erhält_ die `red` `background-color`, aber keinen `border`. Warum? Wegen des `!important`-Flags in der zweiten Regel. Das Hinzufügen des `!important`-Flags nach `border: none` bedeutet, dass diese Deklaration den `border`-Wert in der vorherigen Regel gewinnt, obwohl der ID-Selektor eine höhere Spezifität hat.

> [!NOTE]
> Die einzige Möglichkeit, eine wichtige Deklaration zu überschreiben, besteht darin, eine andere wichtige Deklaration mit _der gleichen Spezifität_ später in der Quellreihenfolge oder eine mit höherer Spezifität einzufügen.

Eine Situation, in der Sie das `!important`-Flag verwenden müssen, ist, wenn Sie an einem CMS arbeiten, in dem Sie die Kern-CSS-Module nicht bearbeiten können, und Sie wirklich ein Inline-Stil oder eine wichtige Deklaration überschreiben möchten, die auf keine andere Weise überschrieben werden kann. Wirklich, verwenden Sie es nicht, wenn Sie es vermeiden können.

## Der Effekt des Standortes von CSS

Schließlich ist es wichtig zu beachten, dass die Priorität einer CSS-Deklaration davon abhängt, in welchem Stylesheet sie angegeben ist.

Es ist möglich, dass Benutzer benutzerdefinierte Stylesheets festlegen, um die Stile des Entwicklers zu überschreiben. Zum Beispiel könnte ein Sehbehinderter den Schriftgrad auf allen von ihm besuchten Webseiten auf die doppelte normale Größe setzen, um das Lesen zu erleichtern.

### Reihenfolge der überschreibenden Deklarationen

Konfliktierende Deklarationen werden in der folgenden Reihenfolge angewendet, wobei spätere ältere überschreiben:

1. Deklarationen in Stylesheets des Benutzeragenten (z. B. die Standardstile des Browsers, die angewendet werden, wenn keine andere Stile gesetzt sind).
2. Normale Deklarationen in Benutzertylesheets (benutzerdefinierte Stile, die von einem Benutzer festgelegt werden).
3. Normale Deklarationen in Autorstylesheets (das sind die von uns, den Webentwicklern, festgelegten Stile).
4. Wichtige Deklarationen in Autorstylesheets.
5. Wichtige Deklarationen in Benutzertylesheets.
6. Wichtige Deklarationen in Stylesheets des Benutzeragenten.

> [!NOTE]
> Die Reihenfolge der Prioritäten kehrt sich für Stile mit `!important` um. Es macht Sinn, dass Stylesheets von Webentwicklern Benutzertylesheets überschreiben, damit das Design wie beabsichtigt beibehalten werden kann; jedoch haben Benutzer manchmal gute Gründe, die Stile von Webentwicklern zu überschreiben, wie oben erwähnt, und dies kann durch Verwendung von `!important` in ihren Regeln erreicht werden.

## Zusammenfassung

Wenn Sie den größten Teil dieses Artikels verstanden haben, dann gut gemacht — Sie sind dabei, sich mit den grundlegenden Mechanismen von CSS vertraut zu machen.

Wenn Sie die Kaskade, Spezifität und Vererbung nicht vollständig verstanden haben, dann machen Sie sich keine Sorgen! Dies ist definitiv das komplizierteste Thema, das wir bisher im Kurs behandelt haben und es ist etwas, das selbst professionelle Webentwickler manchmal als schwierig empfinden. Wir empfehlen Ihnen, diesen Artikel ein paar Mal zu lesen, während Sie den Kurs fortsetzen, und darüber nachzudenken.

Kommen Sie hierher zurück, wenn Sie auf seltsame Probleme stoßen, bei denen Stile nicht wie erwartet angewendet werden. Es könnte ein Spezifizitätsproblem sein. Als nächstes geben wir Ihnen einige Tests, die Sie verwenden können, um zu überprüfen, wie gut Sie die Informationen über die Kaskade verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model", "Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade", "Learn_web_development/Core/Styling_basics")}}
