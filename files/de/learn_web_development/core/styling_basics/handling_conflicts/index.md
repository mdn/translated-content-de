---
title: Umgang mit Konflikten
slug: Learn_web_development/Core/Styling_basics/Handling_conflicts
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model", "Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade", "Learn_web_development/Core/Styling_basics")}}

Das Ziel dieser Lektion ist es, Ihr Verständnis für einige der grundlegendsten Konzepte von CSS — die Kaskade, Spezifität und Vererbung — zu entwickeln, die steuern, wie CSS auf HTML angewendet wird und wie Konflikte zwischen Stildeklarationen gelöst werden.

Obwohl die Bearbeitung dieser Lektion scheinbar zunächst weniger relevant und etwas akademischer als andere Teile des Kurses erscheinen mag, wird Ihnen das Verständnis dieser Konzepte später viel Ärger ersparen! Wir ermutigen Sie, diesen Abschnitt sorgfältig durchzugehen und zu überprüfen, ob Sie die Konzepte verstehen, bevor Sie fortfahren.

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
          <li>Die Hauptkonzepte, die das Ergebnis von Konflikten bestimmen — Spezifität, Quellreihenfolge und Wichtigkeit.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Konfliktierende Regeln

CSS steht für **Cascading Style Sheets**, und das erste Wort _kaskadierend_ ist unglaublich wichtig zu verstehen — die Art und Weise, wie die Kaskade funktioniert, ist entscheidend für das Verständnis von CSS.

Irgendwann werden Sie an einem Projekt arbeiten und feststellen, dass einige CSS, die Ihrer Meinung nach auf ein Element angewendet werden sollte, nicht funktioniert. Oft tritt dieses Problem auf, wenn Sie zwei Regeln erstellen, die unterschiedliche Werte derselben Eigenschaft auf dasselbe Element anwenden.

Die [**Kaskade**](/de/docs/Web/CSS/CSS_cascade/Cascade) und das eng damit verbundene Konzept der [**Spezifität**](/de/docs/Web/CSS/CSS_cascade/Specificity) sind Mechanismen, die steuern, welche Regel angewendet wird, wenn ein solcher Konflikt auftritt. Die Deklaration, die Ihr Element stylt, ist möglicherweise nicht die, die Sie erwarten, daher müssen Sie verstehen, wie diese Mechanismen funktionieren.

Ebenfalls bedeutend ist das Konzept der [**Vererbung**](/de/docs/Web/CSS/CSS_cascade/Inheritance), was bedeutet, dass einige CSS-Eigenschaften standardmäßig Werte erben, die auf das übergeordnete Element des aktuellen Elements gesetzt sind, und andere nicht. Dies kann ebenfalls unerwartetes Verhalten verursachen.

Lassen Sie uns mit einem kurzen Blick auf die Schlüsselkonzepte beginnen, mit denen wir uns befassen, dann werden wir uns jedes nacheinander ansehen und sehen, wie sie miteinander und mit Ihrem CSS interagieren. Diese Konzepte können anfänglich schwierig zu verstehen sein, aber sie werden klarer, je mehr Sie CSS schreiben.

### Kaskade

Stylesheets [**kaskadieren**](/de/docs/Web/CSS/CSS_cascade/Cascade). Einfach ausgedrückt bedeutet dies, dass der Ursprung und die Reihenfolge der CSS-Regeln wichtig sind. Wenn zwei Regeln die gleiche Spezifität haben, wird diejenige verwendet, die zuletzt im Stylesheet definiert ist. Es gibt andere Konzepte, die eine Rolle spielen können, wie [Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers), aber diese sind fortgeschrittener und werden hier nicht im Detail behandelt.

Im untenstehenden Beispiel haben wir zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der Inhalt von `<h1>` wird am Ende blau gefärbt. Dies liegt daran, dass beide Regeln aus derselben Quelle stammen, denselben Elementselektor haben und daher die gleiche Spezifität tragen, aber die zuletzt in der Quellreihenfolge stehende gewinnt.

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

[Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) ist ein Algorithmus, den der Browser verwendet, um zu entscheiden, welcher Eigenschaftswert auf ein Element angewendet wird. Wenn mehrere Regeln unterschiedliche Selektoren haben, die unterschiedliche Werte für dieselbe Eigenschaft setzen und dasselbe Element anvisieren, entscheidet die Spezifität den Eigenschaftswert, der auf das Element angewendet wird. Spezifität ist im Grunde ein Maß dafür, wie spezifisch die Auswahl eines Selektors ist:

- Ein Typ- (Element-)Selektor ist weniger spezifisch; er wählt alle Elemente dieses Typs auf einer Seite aus, also hat er weniger Gewicht. Pseudo-Element-Selektoren haben die gleiche Spezifität wie reguläre Elementselektoren.
- Ein Klassen-Selektor ist spezifischer; er wählt nur die Elemente auf einer Seite aus, die einen bestimmten `class`-Attributwert haben, also hat er mehr Gewicht. Attributselektoren und Pseudo-Klassen haben das gleiche Gewicht wie eine Klasse.
- Ein ID-Selektor ist noch spezifischer — er wählt nur ein einzelnes Element mit einem bestimmten `id`-Wert aus. Daher hat er noch mehr Gewicht.

Unten haben wir wieder zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der `<h1>`-Inhalt wird unten in `rot` gefärbt, obwohl die `color: blue`-Deklaration später in der Quellreihenfolge steht, weil der Klassenselektor `main-heading` seiner Regel eine höhere Spezifität als der Typselektor `h1` verleiht. Die Deklaration mit der höheren Spezifität, definiert durch den Klassenselektor, wird angewendet.

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

Wir werden den Spezifitätsalgorithmus später genauer erläutern.

### Vererbung

Vererbung muss in diesem Kontext ebenfalls verstanden werden — einige CSS-Eigenschaftswerte, die auf übergeordnete Elemente gesetzt sind, werden von ihren Kindelementen geerbt, andere nicht.

Zum Beispiel, wenn Sie `color` und `font-family` auf einem Element setzen, wird jedes darin enthaltene Element ebenfalls mit dieser Farbe und Schriftart gestylt, es sei denn, Sie haben ihnen direkt andere Farb- und Schriftwerte zugewiesen.

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

Einige Eigenschaften werden nicht vererbt — zum Beispiel {{cssxref("width")}}. Wenn Sie einem Element eine `width` von `50%` zuweisen, erhalten keine seiner Nachfahren eine Breite von `50%` der `width` des übergeordneten Elements. Wäre dies der Fall, wäre CSS sehr frustrierend zu verwenden!

> [!NOTE]
> Auf den MDN-CSS-Eigenschaftsreferenzseiten finden Sie eine technische Informationsbox mit der Bezeichnung "Formale Definition", die eine Reihe von Datenpunkten über diese Eigenschaft auflistet, einschließlich ob sie vererbt wird oder nicht. Sehen Sie sich den Abschnitt zur [Formalen Definition der Farbeigenschaft](/de/docs/Web/CSS/Reference/Properties/color#formal_definition) als Beispiel an.

### Verständnis, wie die Konzepte zusammenarbeiten

Diese drei Konzepte (Kaskade, Spezifität und Vererbung) steuern zusammen, welches CSS auf welches Element angewendet wird. In den folgenden Abschnitten werden wir sehen, wie sie zusammenarbeiten. Es kann manchmal ein wenig kompliziert erscheinen, aber Sie werden beginnen, sie zu merken, je mehr Sie Erfahrung mit CSS sammeln, und Sie können immer die Details nachschlagen, wenn Sie sie vergessen! Selbst erfahrene Entwickler erinnern sich nicht an alle Details.

## Verständnis der Vererbung

Wir beginnen mit der Vererbung. Im folgenden Beispiel haben wir ein {{HTMLElement("ul")}}-Element mit zwei Ebenen von verschachtelten ungeordneten Listen darin. Wir haben dem äußeren `<ul>` eine Umrandung, ein Padding und eine Schriftfarbe gegeben.

Die Eigenschaft `color` ist eine vererbte Eigenschaft. Daher wird der `color`-Eigenschaftswert auf die direkten und auch die indirekten Kinder angewendet — die unmittelbaren Kindelemente `<li>` und die im ersten verschachtelten Listenpunkt. Wir haben dann der zweiten verschachtelten Liste die Klasse `special` hinzugefügt und ihr eine andere Farbe zugewiesen. Diese wird dann durch ihre Kinder vererbt.

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

Eigenschaften wie `width` (wie zuvor erwähnt), `margin`, `padding` und `border` sind keine vererbten Eigenschaften. Wenn eine Umrandung von den Kinderlementen in diesem Listenbeispiel geerbt würde, würde jede einzelne Liste und Listeneintrag eine Umrandung erhalten — wahrscheinlich kein Effekt, den wir jemals wünschen würden!

Obwohl jede CSS-Eigenschaftsseite auflistet, ob die Eigenschaft vererbt wird oder nicht, können Sie oft intuitiv vermuten, ob Sie wissen, welchen Aspekt der Eigenschaftswert stylen wird.

### Kontrolle der Vererbung

CSS bietet fünf spezielle universelle Eigenschaftswerte zur Steuerung der Vererbung. Jede CSS-Eigenschaft akzeptiert diese Werte.

- {{cssxref("inherit")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf denselben Wert wie den des übergeordneten Elements. Praktisch bedeutet das, dass dies die "Vererbung einschaltet".
- {{cssxref("initial")}}
  - : Setzt den auf ein ausgewähltes Element angewendeten Eigenschaftswert auf den [Anfangswert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) dieser Eigenschaft.
- {{cssxref("revert")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf die Standardstilisierung des Browsers zurück, anstelle der für diese Eigenschaft angewendeten Standards. Dieser Wert verhält sich oft ähnlich wie {{cssxref("unset")}}.
- {{cssxref("revert-layer")}}
  - : Setzt den auf ein ausgewähltes Element angewendeten Eigenschaftswert auf den Wert zurück, der in einer vorherigen [Kaskadenschicht](/de/docs/Web/CSS/@layer) festgelegt wurde.
- {{cssxref("unset")}}
  - : Setzt die Eigenschaft auf ihren natürlichen Wert zurück, was bedeutet, dass die Eigenschaft, wenn sie natürlich vererbt wird, wie `inherit` wirkt, andernfalls wie `initial`.

> [!NOTE]
> Siehe [Ursprungstypen](/de/docs/Web/CSS/CSS_cascade/Cascade#origin_types) für weitere Informationen zu diesen und wie sie funktionieren.

### Spielen mit Vererbungssteuerungseigenschaften

Wir können uns eine Liste von Links ansehen und erkunden, wie universelle Werte arbeiten. Das folgende Live-Beispiel ermöglicht es Ihnen, mit dem CSS zu spielen und zu sehen, was passiert, wenn Sie Änderungen vornehmen. Code zu spielen ist wirklich der beste Weg, um HTML und CSS besser zu verstehen.

Beispielsweise:

1. Das zweite Listenelement hat die Klasse `my-class-1` angewendet. Dies setzt die Farbe des in ihm verschachtelten `<a>`-Elements auf `inherit`. Wenn Sie die Regel entfernen, wie ändert es die Farbe des Links?
2. Verstehen Sie, warum die dritte und vierte Links die Farbe haben, die sie haben? Der dritte Link ist auf `initial` gesetzt, was bedeutet, dass er den Anfangswert der Eigenschaft (in diesem Fall Schwarz) und nicht den Standardwert des Browsers für Links, der Blau ist, verwendet. Der vierte ist auf `unset` gesetzt, was bedeutet, dass der Linktext die Farbe des übergeordneten Elements, Grün, verwendet.
3. Welche der Links wird die Farbe ändern, wenn Sie eine neue Farbe für das `<a>`-Element definieren — zum Beispiel `a { color: red; }`?
4. Nachdem Sie den nächsten Abschnitt über das Zurücksetzen aller Eigenschaften gelesen haben, kommen Sie zurück und ändern die `color`-Eigenschaft zu `all`. Beachten Sie, wie der zweite Link in einer neuen Zeile ist und einen Punkt hat. Welche Eigenschaften denken Sie, wurden vererbt?

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

Mit dem CSS-Kurzschlusseigenschaft [`all`](/de/docs/Web/CSS/Reference/Properties/all) können Sie einen dieser Vererbungswerte auf (fast) alle Eigenschaften auf einmal anwenden. Ihr Wert kann einer der Vererbungswerte (`inherit`, `initial`, `revert`, `revert-layer` oder `unset`) sein. Es ist eine praktische Möglichkeit, Änderungen an Stilen rückgängig zu machen, damit Sie zu einem bekannten Ausgangspunkt zurückkehren können, bevor Sie mit neuen Änderungen beginnen.

Im folgenden Beispiel haben wir zwei Zitate. Das erste hat Stilisierung auf das Blockquote-Element selbst angewendet. Das zweite hat eine Klasse auf das Blockquote angewendet, die den Wert von `all` auf `unset` setzt.

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

Versuchen Sie, den Wert von `all` auf einige der anderen verfügbaren Werte zu setzen und beobachten Sie die Unterschiede.

## Verständnis der Kaskade

Wir verstehen jetzt, dass Vererbung der Grund ist, warum ein tief in der Struktur Ihres HTML verschachtelter Absatz die gleiche Farbe hat wie das CSS, das auf den Body angewendet wird. Aus den Einführungskursen haben wir ein Verständnis dafür, wie wir das angewendete CSS an jedem beliebigen Punkt im Dokument ändern können — sei es durch Zuweisung von CSS an ein Element oder durch Erstellen einer Klasse. Wir werden nun anschauen, wie die Kaskade bestimmt, welche CSS-Regeln angewendet werden, wenn mehr als ein Stilblock dieselbe Eigenschaft, aber mit unterschiedlichen Werten auf dasselbe Element anwenden.

Es gibt drei Faktoren zu berücksichtigen, die hier in aufsteigender Reihenfolge der Wichtigkeit aufgeführt sind. Spätere Faktoren überstimmen frühere:

1. **Quellreihenfolge**
2. **Spezifität**
3. **Wichtigkeit**

Wir werden uns diese ansehen, um zu sehen, wie Browser genau herausfinden, welches CSS angewendet werden soll.

### Quellreihenfolge

Wir haben bereits gesehen, dass die Quellreihenfolge für die Kaskade wichtig ist. Wenn Sie mehr als eine Regel haben, die genau dasselbe Gewicht hat, wird diejenige, die zuletzt im CSS steht, gewinnen. Sie können sich das so vorstellen: Die Regel, die näher am Element selbst ist, überschreibt die früheren, bis die letzte gewinnt und das Element stylen kann.

Die Quellreihenfolge spielt nur dann eine Rolle, wenn die Spezifizitätsgewichte der Regeln gleich sind, daher lassen Sie uns als nächstes die Spezifizität untersuchen.

### Spezifität

Sie werden oft auf eine Situation stoßen, in der Sie wissen, dass eine Regel später im Stylesheet steht, aber eine widersprüchliche frühere Regel angewendet wird. Dies geschieht, weil die frühere Regel eine **höhere Spezifität** hat — sie ist spezifischer und wird daher vom Browser als diejenige ausgewählt, die das Element stilisieren soll.

Wie wir bereits früher in dieser Lektion gesehen haben, hat ein Klassenselektor mehr Gewicht als ein Elementselektor, daher werden die in dem Klassenstilblock definierten Eigenschaften die in dem Elementstilblock definierten überschreiben.

Hier ist anzumerken, dass obwohl wir über Selektoren und die Regeln nachdenken, die auf den Text oder die Komponente angewendet werden, die sie auswählen, es nicht die gesamte Regel ist, die überschrieben wird, sondern nur die Eigenschaften, die an mehreren Stellen erklärt werden.

Dieses Verhalten hilft, Wiederholungen in Ihrem CSS zu vermeiden. Eine gängige Praxis ist es, generische Stile für die grundlegenden Elemente zu definieren und dann Klassen zu erstellen, um diese zu ändern. Zum Beispiel haben wir im folgenden Stylesheet generische Stile für Level-2-Überschriften definiert und dann einige Classes erstellt, die nur einige der Eigenschaften und Werte ändern. Die zunächst definierten Werte werden auf alle Überschriften angewendet, dann werden die spezifischeren Werte auf die Überschriften mit den Klassen angewendet.

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

Lassen Sie uns nun ansehen, wie der Browser die Spezifizität berechnet. Wir wissen bereits, dass ein Elementselektor eine niedrige Spezifizität hat und von einer Klasse überschrieben werden kann. Grundsätzlich wird ein Punktwert an verschiedene Arten von Selektoren vergeben, und das Zusammenaddieren dieser Werte gibt Ihnen das Gewicht eines bestimmten Selektors, das dann gegen andere potenzielle Übereinstimmungen verglichen werden kann.

Der Grad der Spezifizität eines Selektors wird mit drei verschiedenen Werten (oder Komponenten) gemessen, die als ID-, Klassen- und Elementspalten im Wert von Hunderten, Zehnern und Einheiten betrachtet werden können:

- **IDs**: Punkten Sie in dieser Spalte (100 Punkte) für jeden ID-Selektor, der im gesamten Selektor enthalten ist.
- **Klassen**: Punkten Sie in dieser Spalte (10 Punkte) für jeden Klassen-, Attributselektor oder Pseudo-Klasse, die im gesamten Selektor enthalten ist.
- **Elemente**: Punkten Sie in dieser Spalte (1 Punkt) für jeden Elementselektor oder Pseudo-Element, der im gesamten Selektor enthalten ist.

> [!NOTE]
> Der Universalselektor ([`*`](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors)), [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators) (`+`, `>`, `~`, ' '), und der Spezifitätsanpassungsselektor ([`:where()`](/de/docs/Web/CSS/Reference/Selectors/:where)) zusammen mit seinen Parametern, haben keinen Einfluss auf die Spezifizität.

Die folgende Tabelle zeigt einige isolierte Beispiele, um Sie in Stimmung zu bringen. Versuchen Sie, diese durchzugehen, und stellen Sie sicher, dass Sie verstehen, warum sie die Spezifizität haben, die wir ihnen gegeben haben. Wir haben die Selektoren noch nicht im Detail behandelt, aber Sie können Details zu jedem Selektor in der MDN [Selektorenreferenz](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators) finden.

| Selektor                                  | Identifikatoren | Klassen | Elemente | Gesamtspezifität |
| ----------------------------------------- | --------------- | ------- | -------- | ---------------- |
| `h1`                                      | 0               | 0       | 1        | 0-0-1            |
| `h1 + p::first-letter`                    | 0               | 0       | 3        | 0-0-3            |
| `li > a[href*="en-US"] > .inline-warning` | 0               | 2       | 2        | 0-2-2            |
| `#identifier`                             | 1               | 0       | 0        | 1-0-0            |

#### Ausführliches Spezifizitätsbeispiel

Bevor wir fortfahren, lassen Sie uns ein Beispiel in Aktion anschauen. Möglicherweise möchten Sie dies im MDN Playground in einem separaten Tab öffnen, damit Sie es leicht mit dem Erklärungsabschnitt abgleichen können.

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

Was passiert hier? Zuerst sollten wir uns nur für die ersten sieben Regeln dieses Beispiels interessieren, und wie Sie bemerken werden, haben wir ihre Spezifizitätswerte in einem Kommentar vor jede Regel aufgenommen.

- Die ersten beiden Selektoren konkurrieren um die Stilierung der `background-color` des Links. Der zweite gewinnt und macht den Hintergrund blau, weil er einen zusätzlichen ID-Selektor in der Kette hat: seine Spezifizität ist 2-0-1 vs. 1-0-1.
- Selektoren 3 und 4 konkurrieren um die Stilierung der Textfarbe des Links. Der zweite gewinnt und macht den Text weiß, obwohl er einen weniger Elementselektor hat, weil der fehlende Selektor durch einen Klassen-Selektor ersetzt wurde, der mehr Gewicht hat als Elementselektoren. Die gewinnende Spezifizität ist 1-1-3 vs. 1-0-4.
- Selektoren 5–7 konkurrieren um die Stilierung des Randes des Links beim Hover. Selektor 6 verliert klar gegen Selektor 5 mit einer Spezifizität von 0-2-3 vs. 0-2-4; er hat einen weniger Elementselektor in der Kette. Selektor 7 schlägt jedoch sowohl die Selektoren 5 als auch 6, weil er die gleiche Anzahl von Subselektoren in der Kette hat wie Selektor 5, aber ein Element durch einen Klassen-Selektor ersetzt wurde. So ist die gewinnende Spezifizität 0-3-3 vs. 0-2-3 und 0-2-4.

> [!NOTE]
> Jeder Selektortyp hat sein eigenes Spezifizitätslevel, das nicht durch Selektoren mit einem niedrigeren Spezifizitätslevel überschrieben werden kann. Zum Beispiel würden _Millionen_ von **Klassen**selektoren zusammen nicht in der Lage sein, die Spezifizität von _einem_ **ID**-Selektor zu überschreiben.
>
> Der beste Weg, die Spezifizität zu bewerten, besteht darin, die Spezifizitätsstufen individuell zu bewerten, beginnend mit der höchsten und dann bei Bedarf zur niedrigeren übergehen. Nur wenn es einen Gleichstand zwischen den Selektorpunkten innerhalb einer Spezifizitätsspalte gibt, müssen Sie die nächste Spalte unten bewerten; andernfalls können Sie die niedrigeren Spezifikationen ignorieren, da sie die höher spezifizierten Selektoren nie überschreiben können.

#### IDs versus Klassen

ID-Selektoren haben eine hohe Spezifität. Das bedeutet, dass Styles, die basierend auf dem Abgleich eines ID-Selektors angewendet werden, Styles, die auf anderen Selektoren wie Klassen- und Typselektoren basieren, überstimmen. Da eine ID nur einmal auf einer Seite vorkommen kann und da ID-Selektoren eine hohe Spezifität haben, ist es vorzuziehen, einer ID anstelle einer Klasse zu einem Element hinzuzufügen.

Wenn die Verwendung der ID der einzige Weg ist, das Element zu targetieren — vielleicht weil Sie keinen Zugriff auf das Markup haben und es nicht bearbeiten können — ziehen Sie in Betracht die ID innerhalb eines [Attributselektors](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors), wie `p[id="header"]`, zu verwenden.

### Inline-Stile

Inline-Stile, das heißt, die Stildeklaration innerhalb eines [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attributs, haben Vorrang vor allen normalen Styles, unabhängig von der Spezifität. Solche Deklarationen haben keine Selektoren, aber ihre Spezifität kann als 1-0-0-0 interpretiert werden; immer mehr als jedes andere Spezifikationsgewicht, egal wie viele IDs in den Selektoren vorhanden sind.

### !important

Es gibt ein spezielles Stück CSS, das Sie verwenden können, um alle obigen Berechnungen, sogar Inline-Stile, zu überstimmen - das `!important`-Flag. Sie sollten jedoch sehr vorsichtig bei der Verwendung sein. Dieses Flag wird verwendet, um ein einzelnes Eigenschafts-Wert-Paar zur spezifischsten Regel zu machen, und überschreibt damit die normalen Regeln der Kaskade, einschließlich normaler Inline-Stile.

> [!NOTE]
> Es ist nützlich zu wissen, dass das `!important`-Flag existiert, damit Sie wissen, was es ist, wenn Sie es im Code anderer Leute finden. **Wir empfehlen jedoch dringend, dass Sie es niemals verwenden, es sei denn, es ist absolut notwendig.** Das `!important`-Flag ändert die Funktionsweise der Kaskade, sodass es das Debuggen von CSS-Problemen wirklich erschwert, insbesondere in einem großen Stylesheet.

Schauen Sie sich dieses Beispiel an, in dem wir zwei Absätze haben, von denen einer eine ID hat.

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

Lassen Sie uns dies durchgehen, um zu sehen, was passiert — versuchen Sie einige der Eigenschaften zu entfernen, um zu sehen, was passiert, wenn Sie Schwierigkeiten haben, es zu verstehen:

1. Sie werden bemerken, dass die `color` und das `padding` der dritten Regel auf die Elemente angewendet wurden, aber nicht die `background-color`. Warum? Eigentlich sollten alle drei sicherlich angewendet werden, da Regeln im späteren Verlauf der Quellreihenfolge in der Regel frühere Regeln übersteuern.
2. Die oben beschriebenen Regeln gewinnen jedoch aufgrund der Tatsache, dass Klassenselektoren eine höhere Spezifizität als Elementselektoren haben.
3. Beide Elemente haben eine [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) von `better`, aber das 2. hat eine [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) von `winning` ebenfalls. Da IDs eine _noch höhere_ Spezifizität als Klassen haben, sollten die `red` `background-color` und der `1px black` `border` beide auf das 2. Element angewendet werden, während das erste Element die graue Hintergrundfarbe und keine Umrandung erhält, wie durch die Klasse spezifiziert.
4. Das 2. Element _erhält_ die `red` `background-color`, aber keine `border`. Warum? Wegen des `!important`-Flags in der zweiten Regel. Das Hinzufügen des `!important`-Flags nach `border: none` bedeutet, dass diese Deklaration über den `border`-Wert der vorherigen Regel gewinnt, obwohl der ID-Selektor eine höhere Spezifizität hat.

> [!NOTE]
> Die einzige Möglichkeit, eine wichtige Deklaration zu überschreiben, besteht darin, eine weitere wichtige Deklaration mit der _gleichen Spezifizität_ später in der Quellreihenfolge oder eine mit höherer Spezifizität aufzunehmen.

Eine Situation, in der Sie möglicherweise das `!important`-Flag verwenden müssen, ist, wenn Sie an einem CMS arbeiten, in dem Sie die Kern-CSS-Module nicht bearbeiten können, und Sie wirklich eine Inline-Stil- oder eine wichtige Deklaration überschreiben müssen, die auf keine andere Weise überschrieben werden kann. Aber wirklich, verwenden Sie es nicht, wenn Sie es vermeiden können.

## Die Auswirkung des CSS-Standorts

Schließlich ist es wichtig zu beachten, dass die Vorrangstellung einer CSS-Deklaration davon abhängt, in welchem Stylesheet sie spezifiziert ist.

Es ist möglich, Benutzern das Setzen benutzerdefinierter Stylesheets zu erlauben, um die Entwicklerdeklarationen zu überstimmen. Zum Beispiel könnte ein sehbehinderter Benutzer die Schriftgröße auf allen Webseiten, die er besucht, doppelt so groß setzen wollen, um das Lesen zu erleichtern.

### Reihenfolge der überlagernden Deklarationen

Widersprüchliche Deklarationen werden in der folgenden Reihenfolge angewendet, wobei spätere die vorherigen überstimmen:

1. Deklarationen in Benutzeragenten-Stylesheets (z.B. die Standardstile des Browsers, die verwendet werden, wenn keine anderen Stile gesetzt sind).
2. Normale Deklarationen in Benutzerstylesheets (benutzerdefinierte Stile, die von einem Benutzer gesetzt werden).
3. Normale Deklarationen in Autorstylesheets (das sind die von uns, den Webentwicklern, gesetzten Stile).
4. Wichtige Deklarationen in Autorstylesheets.
5. Wichtige Deklarationen in Benutzerstylesheets.
6. Wichtige Deklarationen in Benutzeragenten-Stylesheets.

> [!NOTE]
> Die Reihenfolge der Vorrangstellung wird für Stile mit dem `!important`-Flag umgekehrt. Es ist sinnvoll, dass Stylesheets von Webentwicklern Benutzerstylesheets überstimmen, damit das Design wie beabsichtigt bleibt; jedoch haben Benutzer manchmal gute Gründe, die Stile von Webentwicklern zu überstimmen, wie oben erwähnt, und dies kann durch die Verwendung von `!important` in ihren Regeln erreicht werden.

## Zusammenfassung

Wenn Sie den größten Teil dieses Artikels verstanden haben, dann gut gemacht — Sie haben begonnen, sich mit den grundlegenden Mechaniken von CSS vertraut zu machen.

Wenn Sie die Kaskade, Spezifizität und Vererbung nicht vollständig verstanden haben, dann machen Sie sich keine Sorgen! Dies ist definitiv das komplizierteste Thema, das wir bisher im Kurs behandelt haben und etwas, das selbst professionelle Webentwickler manchmal schwierig finden. Wir empfehlen Ihnen, ein paar Mal zu diesem Artikel zurückzukehren, während Sie den Kurs fortsetzen, und weiter darüber nachzudenken.

Kommen Sie darauf zurück, wenn Sie auf seltsame Probleme mit Styles stoßen, die nicht wie erwartet angewendet werden. Es könnte ein Spezifizitätsproblem sein. Als nächstes werden wir Ihnen einige Tests geben, mit denen Sie überprüfen können, wie gut Sie die Informationen, die wir Ihnen über die Kaskade gegeben haben, verstanden und gespeichert haben.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model", "Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade", "Learn_web_development/Core/Styling_basics")}}
