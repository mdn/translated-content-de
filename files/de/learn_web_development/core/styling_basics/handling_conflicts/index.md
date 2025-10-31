---
title: Umgang mit Konflikten
slug: Learn_web_development/Core/Styling_basics/Handling_conflicts
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model", "Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade", "Learn_web_development/Core/Styling_basics")}}

Ziel dieser Lektion ist es, Ihr Verständnis für einige der grundlegenden Konzepte von CSS zu entwickeln – die Kaskade, Spezifität und Vererbung –, die bestimmen, wie CSS auf HTML angewendet wird und wie Konflikte zwischen Stil-Deklarationen gelöst werden.

Obwohl diese Lektion anfänglich weniger relevant erscheinen mag und etwas akademischer als andere Teile des Kurses ist, wird Ihnen das Verständnis dieser Konzepte später viel Ärger ersparen! Wir ermutigen Sie, diesen Abschnitt sorgfältig zu bearbeiten und sicherzustellen, dass Sie die Konzepte verstehen, bevor Sie weitermachen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlagen der HTML-Syntax</a
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

CSS steht für **Cascading Style Sheets** (kaskadierende Stylesheets), und das erste Wort _kaskadierend_ ist extrem wichtig zu verstehen — die Art und Weise, wie die Kaskade funktioniert, ist der Schlüssel zum Verständnis von CSS.

Irgendwann werden Sie an einem Projekt arbeiten und feststellen, dass CSS, das Sie denken, auf ein Element anwenden zu können, nicht funktioniert. Dieses Problem tritt oft auf, wenn Sie zwei Regeln erstellen, die unterschiedliche Werte für die gleiche Eigenschaft auf dasselbe Element anwenden.

Die [**Kaskade**](/de/docs/Web/CSS/CSS_cascade/Cascade) und das eng verwandte Konzept der [**Spezifität**](/de/docs/Web/CSS/CSS_cascade/Specificity) sind Mechanismen, die steuern, welche Regel angewendet wird, wenn ein solcher Konflikt auftritt. Die Deklaration, die Ihr Element stylt, ist möglicherweise nicht die erwartete, daher müssen Sie verstehen, wie diese Mechanismen funktionieren.

Auch von Bedeutung ist das Konzept der [**Vererbung**](/de/docs/Web/CSS/CSS_cascade/Inheritance), was bedeutet, dass einige CSS-Eigenschaften standardmäßig die auf dem übergeordneten Element festgelegten Werte erben und andere nicht. Dies kann ebenfalls zu unerwartetem Verhalten führen.

Beginnen wir mit einem kurzen Blick auf die Schlüsselkonzepte, mit denen wir es zu tun haben, dann werden wir uns jedes einzeln ansehen und sehen, wie sie miteinander und Ihrem CSS interagieren. Diese Konzepte können verwirrend erscheinen, werden aber klarer, je mehr Sie CSS schreiben.

### Kaskade

Stylesheets [**kaskadieren**](/de/docs/Web/CSS/CSS_cascade/Cascade). Auf sehr einfachem Niveau bedeutet dies, dass der Ursprung und die Reihenfolge von CSS-Regeln wichtig sind. Wenn zwei Regeln gleiche Spezifität haben, wird diejenige verwendet, die zuletzt im Stylesheet definiert ist. Es gibt weitere Konzepte, die einen Einfluss haben, wie [Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers), aber diese sind fortgeschrittener und wir werden sie hier nicht im Detail behandeln.

Im folgenden Beispiel haben wir zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der Inhalt des `<h1>`-Elements wird letztlich blau gefärbt. Das liegt daran, dass beide Regeln aus derselben Quelle stammen, einen identischen Elementselektor haben und daher die gleiche Spezifität aufweisen, aber die letzte in der Quellreihenfolge gewinnt.

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

[Spezifität](/de/docs/Web/CSS/CSS_cascade/Specificity) ist ein Algorithmus, den der Browser verwendet, um zu entscheiden, welcher Eigenschaftswert auf ein Element angewendet wird. Wenn mehrere Regeln unterschiedliche Selektoren haben, die unterschiedliche Werte für dieselbe Eigenschaft setzen und dasselbe Element anvisieren, entscheidet Spezifität, welcher Eigenschaftswert auf das Element angewendet wird. Spezifität ist im Wesentlichen ein Maß dafür, wie spezifisch die Auswahl eines Selektors sein wird:

- Ein Typ-(Element-)Selektor ist weniger spezifisch; er wählt alle Elemente dieses Typs auf einer Seite aus und hat daher weniger Gewicht. Pseudo-Element-Selektoren haben die gleiche Spezifität wie reguläre Element-Selektoren.
- Ein Klassen-Selektor ist spezifischer; er wählt nur die Elemente auf einer Seite aus, die einen bestimmten `class`-Attributwert haben, und hat daher mehr Gewicht. Attributselektoren und Pseudo-Klassen haben das gleiche Gewicht wie eine Klasse.
- Ein ID-Selektor ist noch spezifischer — er wählt nur ein einzelnes Element mit einem bestimmten `id`-Wert aus und hat daher noch mehr Gewicht.

Unten haben wir wieder zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der `<h1>`-Inhalt wird schließlich `rot` gefärbt, obwohl die `color: blue`-Deklaration später in der Quellreihenfolge erscheint, da der Klassen-Selektor `main-heading` seiner Regel eine höhere Spezifität als der Typ-Selektor `h1` verleiht. Die Deklaration mit der höheren Spezifität, definiert durch den Klassen-Selektor, wird angewendet.

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

Vererbung muss in diesem Kontext ebenfalls verstanden werden — einige CSS-Eigenschaftswerte, die auf übergeordnete Elemente gesetzt sind, werden von ihren Kind-Elementen geerbt, andere jedoch nicht.

Zum Beispiel, wenn Sie eine `color` und `font-family` auf ein Element setzen, wird jedes Element innerhalb dieses Elements auch mit dieser Farbe und Schriftart gestylt, es sei denn, Sie haben andere `color`- und `font`-Werte direkt auf sie angewendet.

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

Einige Eigenschaften werden nicht vererbt — zum Beispiel {{cssxref("width")}} Wenn Sie eine `width` von `50%` auf ein Element setzen, erhalten nicht alle Nachfahren eine Breite von `50%` der Breite ihres Elternteils. Wenn dies der Fall wäre, wäre CSS sehr frustrierend zu verwenden!

> [!NOTE]
> Auf den MDN CSS-Eigenschaftsreferenzseiten finden Sie ein technisches Informationsfeld namens "Formale Definition", das eine Reihe von Datenpunkten zu dieser Eigenschaft auflistet, einschließlich ob sie vererbt wird oder nicht. Schauen Sie sich als Beispiel den Abschnitt [Formale Definition der Farbeigenschaft](/de/docs/Web/CSS/Reference/Properties/color#formal_definition) an.

### Verständnis, wie die Konzepte zusammenarbeiten

Diese drei Konzepte (Kaskade, Spezifität und Vererbung) zusammen bestimmen, welches CSS auf welches Element angewendet wird. In den folgenden Abschnitten werden wir sehen, wie sie zusammenarbeiten. Es kann manchmal ein wenig kompliziert erscheinen, aber Sie werden anfangen, sich an sie zu erinnern, je mehr Erfahrung Sie mit CSS sammeln, und Sie können immer die Details nachschlagen, wenn Sie es vergessen! Sogar erfahrene Entwickler erinnern sich nicht an alle Details.

## Verstehen der Vererbung

Beginnen wir mit der Vererbung. Im folgenden Beispiel haben wir ein {{HTMLElement("ul")}}-Element mit zwei Ebenen von verschachtelten ungeordneten Listen. Wir haben der äußeren `<ul>` einen Rahmen, Polsterung und Schriftfarbe gegeben.

Die `color`-Eigenschaft ist eine vererbte Eigenschaft. Also wird der `color`-Eigenschaftswert den direkten Kindern und auch den indirekten Kindern — den unmittelbaren Kind-`<li>`s und den innerhalb der ersten verschachtelten Liste — zugewiesen. Wir haben dann der zweiten verschachtelten Liste die Klasse `special` hinzugefügt und eine andere Farbe darauf angewendet. Diese wird dann durch ihre Kinder vererbt.

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

Eigenschaften wie `width` (wie bereits erwähnt), `margin`, `padding` und `border` sind keine vererbten Eigenschaften. Wenn in diesem Listbeispiel ein Rahmen von den Kindern geerbt würde, würde jede einzelne Liste und Listelement einen Rahmen erhalten — wahrscheinlich kein Effekt, den wir jemals wollen würden!

Obwohl jede CSS-Eigenschaftsseite anzeigt, ob die Eigenschaft vererbt wird oder nicht, können Sie oft intuitiv erraten, dasselbe, wenn Sie wissen, welchen Aspekt der Eigenschaftswert stylen wird.

### Kontrolle der Vererbung

CSS bietet fünf spezielle universelle Eigenschaftswerte zur Steuerung der Vererbung. Jede CSS-Eigenschaft akzeptiert diese Werte.

- {{cssxref("inherit")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, so dass er dem seines übergeordneten Elements entspricht. Effektiv wird dadurch die "Vererbung eingeschaltet".
- {{cssxref("initial")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf den [anfänglichen Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) dieser Eigenschaft.
- {{cssxref("revert")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf die Standard-Styling des Browsers zurück, anstatt auf die Standardwerte, die auf diese Eigenschaft angewendet werden. Dieser Wert verhält sich in vielen Fällen wie {{cssxref("unset")}}.
- {{cssxref("revert-layer")}}
  - : Setzt den Eigenschaftswert, der auf ein ausgewähltes Element angewendet wird, auf den in einer vorherigen [Kaskadenschicht](/de/docs/Web/CSS/@layer) festgelegten Wert zurück.
- {{cssxref("unset")}}
  - : Setzt die Eigenschaft auf ihren natürlichen Wert zurück, was bedeutet, dass sie sich wie `inherit` verhält, wenn die Eigenschaft natürlich vererbt wird, andernfalls verhält sie sich wie `initial`.

> [!NOTE]
> Sehen Sie [Ursprungstypen](/de/docs/Web/CSS/CSS_cascade/Cascade#origin_types) für weitere Informationen darüber, wie diese funktionieren.

### Spielen mit den Vererbungskontroll-Eigenschaften

Wir können uns eine Liste von Links ansehen und erkunden, wie universelle Werte funktionieren. Das Live-Beispiel unten ermöglicht es Ihnen, mit dem CSS zu experimentieren und zu sehen, was passiert, wenn Sie Änderungen vornehmen. Das Spielen mit Code ist wirklich der beste Weg, um HTML und CSS besser zu verstehen.

Beispiele:

1. Der zweite Listeneintrag hat die Klasse `my-class-1` angewendet. Diese setzt die Farbe des im Inneren verschachtelten `<a>`-Elements auf `inherit`. Wenn Sie die Regel entfernen, wie ändert sich die Farbe des Links?
2. Verstehen Sie, warum der dritte und vierte Link die Farbe haben, die sie haben? Der dritte Link ist auf `initial` gesetzt, was bedeutet, dass er den Anfangswert der Eigenschaft verwendet (in diesem Fall Schwarz) und nicht den Browserstandard für Links, der Blau ist. Der vierte ist auf `unset` gesetzt, was bedeutet, dass der Linktext die Farbe des übergeordneten Elements, Grün, verwendet.
3. Welche der Links wird die Farbe ändern, wenn Sie eine neue Farbe für das `<a>`-Element definieren — zum Beispiel `a { color: red; }`?
4. Nachdem Sie den nächsten Abschnitt über das Zurücksetzen aller Eigenschaften gelesen haben, kommen Sie zurück und ändern Sie die `color`-Eigenschaft in `all`. Beachten Sie, wie der zweite Link in einer neuen Zeile steht und eine Aufzählung hat. Welche Eigenschaften denken Sie, wurden vererbt?

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

### Alle Eigenschaftswerte zurücksetzen

Die CSS-Kurzschrift-Eigenschaft [`all`](/de/docs/Web/CSS/Reference/Properties/all) kann verwendet werden, um einen dieser Vererbungswerte auf (fast) alle Eigenschaften gleichzeitig anzuwenden. Ihr Wert kann einer der Vererbungswerte (`inherit`, `initial`, `revert`, `revert-layer` oder `unset`) sein. Es ist eine bequeme Möglichkeit, Änderungen an Stilen rückgängig zu machen, sodass Sie zu einem bekannten Anfangspunkt zurückkehren können, bevor Sie mit neuen Änderungen beginnen.

Im folgenden Beispiel haben wir zwei Blockzitate. Das erste hat Styling direkt auf das Blockzitat angewendet. Das zweite hat eine Klasse, die auf das Blockzitat angewendet wurde, die den Wert von `all` auf `unset` setzt.

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

Wir verstehen jetzt, dass die Vererbung der Grund ist, warum ein tief in der Struktur Ihres HTML eingebetteter Absatz die gleiche Farbe wie das CSS hat, das auf den Körper angewendet wird. Aus den einführenden Lektionen wissen wir, wie man das CSS verändert, das zu einem Punkt im Dokument auf etwas angewendet wird — sei es durch Zuweisung von CSS zu einem Element oder durch Erstellen einer Klasse. Wir werden nun untersuchen, wie die Kaskade definiert, welche CSS-Regeln angewendet werden, wenn mehr als ein Stilblock dieselbe Eigenschaft auf dasselbe Element anwendet, jedoch mit unterschiedlichen Werten.

Es gibt drei Faktoren, die zu berücksichtigen sind, hier in aufsteigender Reihenfolge der Wichtigkeit aufgelistet. Spätere überstimmen frühere:

1. **Quellreihenfolge**
2. **Spezifität**
3. **Wichtigkeit**

Wir werden uns diese ansehen, um zu sehen, wie Browser herausfinden, welches CSS angewendet werden sollte.

### Quellreihenfolge

Wir haben bereits gesehen, dass die Quellreihenfolge für die Kaskade von Bedeutung ist. Wenn Sie mehr als eine Regel haben, die genau dasselbe Gewicht hat, dann wird die, die zuletzt im CSS steht, gewinnen. Sie können dies so verstehen: Die Regel, die näher am tatsächlichen Element ist, überschreibt die früheren, bis die letzte gewinnt und das Element stylen darf.

Die Quellreihenfolge spielt nur dann eine Rolle, wenn das Spezifitätsgewicht der Regeln gleich ist, also schauen wir uns als Nächstes die Spezifität an.

### Spezifität

Oft geraten Sie in eine Situation, in der Sie wissen, dass eine Regel später im Stylesheet kommt, aber eine frühere, in Konflikt stehende Regel angewendet wird. Dies geschieht, weil die frühere Regel eine **höhere Spezifität** hat — sie ist spezifischer und wird daher vom Browser als diejenige ausgewählt, die das Element stylen soll.

Wie wir bereits früher in dieser Lektion gesehen haben, hat ein Klassen-Selektor mehr Gewicht als ein Element-Selektor, daher werden die in dem Klassen-Stilblock definierten Eigenschaften die in dem Element-Stilblock definierten Eigenschaften überschreiben.

Etwas zu beachten ist hier, dass, obwohl wir über Selektoren und die Regeln sprechen, die auf den Text oder das Element, das sie auswählen, angewendet werden, nicht die gesamte Regel überschrieben wird, sondern nur die Eigenschaften, die an mehreren Stellen deklariert sind.

Dieses Verhalten hilft, Wiederholungen in Ihrem CSS zu vermeiden. Eine häufige Praxis ist es, generische Stile für die grundlegenden Elemente zu definieren und dann Klassen für diejenigen zu erstellen, die unterschiedlich sind. Zum Beispiel, im Stylesheet unten, haben wir generische Stile für Überschriften der Ebene 2 definiert und dann einige Klassen erstellt, die nur einige der Eigenschaften und Werte ändern. Die initial definierten Werte werden auf alle Überschriften angewendet, dann werden die spezifischeren Werte auf die Überschriften mit den Klassen angewendet.

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

Schauen wir uns nun an, wie der Browser die Spezifität berechnet. Wir wissen bereits, dass ein Element-Selektor eine niedrige Spezifität hat und von einer Klasse überschrieben werden kann. Im Wesentlichen werden den verschiedenen Selektortypen Punktwerte zugewiesen, und durch das Summieren dieser Punkte erhält man das Gewicht dieses speziellen Selektors, das dann gegen andere mögliche Übereinstimmungen bewertet werden kann.

Die Spezifität eines Selektors wird anhand von drei verschiedenen Werten (oder Komponenten) gemessen, die als ID, CLASS und ELEMENT Spalten mit Hunderten, Zehnern und Einern verglichen werden können:

- **IDs**: Pro ID-Selektor enthält der Gesamtselektor einen Punkt (100 Punkte) in dieser Spalte.
- **Klassen**: Pro Klassen-Selektor, Attribut-Selektor oder Pseudo-Klasse enthält der Gesamtselektor einen Punkt (10 Punkte) in dieser Spalte.
- **Elemente**: Pro Element-Selektor oder Pseudo-Element enthält der Gesamtselektor einen Punkt (1 Punkt) in dieser Spalte.

> [!NOTE]
> Der universale Selektor ([`*`](/de/docs/Web/CSS/Universal_selectors)), [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators) (`+`, `>`, `~`, ' '), und der Selektor zur Spezifizitätsanpassung ([`:where()`](/de/docs/Web/CSS/:where)) zusammen mit seinen Parametern haben keinen Einfluss auf die Spezifität.

Die folgende Tabelle zeigt einige isolierte Beispiele zur Einstimmung. Versuchen Sie, diese durchzugehen, und stellen Sie sicher, dass Sie verstehen, warum sie die zugewiesene Spezifität haben. Wir haben Selektoren noch nicht im Detail behandelt, aber Sie können Details zu jedem Selektor im MDN [Selektorreferenz](/de/docs/Web/CSS/CSS_selectors/Selectors_and_combinators) finden.

| Selektor                                  | Identifikatoren | Klassen | Elemente | Gesamtspezifität |
| ----------------------------------------- | --------------- | ------- | -------- | ---------------- |
| `h1`                                      | 0               | 0       | 1        | 0-0-1            |
| `h1 + p::first-letter`                    | 0               | 0       | 3        | 0-0-3            |
| `li > a[href*="en-US"] > .inline-warning` | 0               | 2       | 2        | 0-2-2            |
| `#identifier`                             | 1               | 0       | 0        | 1-0-0            |

#### Tiefgründiges Spezifitätsbeispiel

Bevor wir weitermachen, schauen wir uns ein Beispiel in Aktion an. Sie könnten dies im MDN Playground in einem separaten Tab öffnen, damit Sie es beim Lesen der Erläuterung leicht querverweisen können.

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

Was passiert hier? Zuerst einmal sind nur die ersten sieben Regeln dieses Beispiels von Bedeutung, und wie Sie sehen werden, haben wir ihre Spezifizitätswerte in einem Kommentar vor jeder Regel eingefügt.

- Die ersten beiden Selektoren konkurrieren um das Styling der `background-color` des Links. Der zweite gewinnt und macht die Hintergrundfarbe `blau`, weil er einen zusätzlichen ID-Selektor in der Kette hat: Seine Spezifizität ist 2-0-1 gegenüber 1-0-1.
- Selektoren 3 und 4 konkurrieren um das Styling der Textfarbe (`color`) des Links. Der zweite gewinnt und setzt die Textfarbe auf `weiß`, obwohl er einen Element-Selektor weniger hat, wurde der fehlende Selektor gegen einen Klassen-Selektor ausgetauscht, der mehr Gewicht hat als ein Element-Selektor. Die gewinnende Spezifizität ist 1-1-3 gegenüber 1-0-4.
- Selektoren 5–7 konkurrieren um das Styling des Links `border`, wenn dieser überfahren wird. Selektor 6 verliert klar gegen Selektor 5 mit einer Spezifizität von 0-2-3 gegenüber 0-2-4; er hat einen Element-Selektor weniger in der Kette. Selektor 7 schlägt jedoch sowohl Selektor 5 als auch 6, weil er die gleiche Anzahl an Unterselektoren in der Kette hat wie Selektor 5, aber ein Element durch einen Klassen-Selektor ersetzt wurde. So ist die gewinnende Spezifizität 0-3-3 gegenüber 0-2-3 und 0-2-4.

> [!NOTE]
> Jeder Selektortyp hat sein eigenes Spezifizitätsniveau, das durch Selektoren mit niedrigerem Spezifizitätslevel nicht überschrieben werden kann. Ein _Million_ **Klassen**-Selektoren zusammen würden nie in der Lage sein, die Spezifizität eines _einzelnen_ **id**-Selektors zu überschreiben.
>
> Am besten bewertet man die Spezifizitätslevel individuell, beginnend mit dem höchsten und geht weiter zum niedrigeren, wenn nötig. Nur wenn es einen Gleichstand zwischen Selektorwerten innerhalb einer Spezifizierungsspalte gibt, müssen Sie die nächste Spalte nach unten bewerten; andernfalls können Sie die niedrigeren Spezifizierungsselektoren ignorieren, da sie niemals die höheren Spezifizierungsselektoren überschreiben können.

#### IDs versus Klassen

ID-Selektoren haben hohe Spezifizität. Das bedeutet, dass Stile, die basierend auf einem ID-Selektor angewendet werden, Stile überstimmen, die basierend auf anderen Selektoren angewendet werden, einschließlich Klassen- und Typselektoren. Da eine ID nur einmal auf einer Seite vorkommen kann und aufgrund der hohen Spezifizität von ID-Selektoren, ist es vorzuziehen, einem Element eine Klasse anstelle einer ID hinzuzufügen.

Wenn die Verwendung der ID der einzige Weg ist, um das Element zu zielen — vielleicht, weil Sie keinen Zugriff auf das Markup haben und es nicht bearbeiten können — erwägen Sie die ID innerhalb eines [Attributselektors](/de/docs/Web/CSS/Attribute_selectors) zu verwenden, wie `p[id="header"]`.

### Inline-Stile

Inline-Stile, das heißt, die Stil-Deklarationen innerhalb eines [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attributs, haben Vorrang vor allen normalen Stilen, egal welche Spezifizität. Solche Deklarationen haben keine Selektoren, aber ihre Spezifizität kann als 1-0-0-0 betrachtet werden; immer mehr als jede andere Spezifizitätsgewichtung, egal wie viele IDs in den Selektoren sind.

### !important

Es gibt ein spezielles Stück CSS, das Sie verwenden können, um all die oben genannten Berechnungen zu überstimmen, sogar Inline-Stile - das `!important`-Flag. Allerdings sollten Sie sehr vorsichtig bei der Verwendung sein. Dieses Flag wird verwendet, um ein einzelnes Eigenschafts- und Wertepaar zur spezifischsten Regel zu machen, wodurch die normalen Regeln der Kaskade überschrieben werden, einschließlich normaler Inline-Stile.

> [!NOTE]
> Es ist nützlich zu wissen, dass das `!important`-Flag existiert, damit Sie wissen, was es ist, wenn Sie es im Code anderer Personen entdecken. **Wir empfehlen jedoch dringend, es nicht zu verwenden, es sei denn, es ist absolut notwendig.** Das `!important`-Flag ändert die Funktionsweise der Kaskade, daher kann es das Debuggen von CSS-Problemen wirklich schwer nachvollziehbar machen, besonders in einem großen Stylesheet.

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

Lassen Sie uns dies durchgehen, um zu sehen, was passiert — versuchen Sie, einige der Eigenschaften zu entfernen, um zu sehen, was passiert, wenn Sie es schwer verstehen:

1. Sie werden sehen, dass die `color`- und `padding`-Werte der dritten Regel angewendet wurden, aber `background-color` nicht. Warum? Eigentlich sollen alle drei sicher angewendet werden, weil Regeln, die später in der Quellreihenfolge kommen, in der Regel frühere Regeln überstimmen.
2. Die oben genannten Regeln gewinnen jedoch, weil Klassen-Selektoren eine höhere Spezifizität als Element-Selektoren haben.
3. Beide Elemente haben eine [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) von `better`, aber das zweite hat auch eine [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) von `winning`. Da IDs eine _noch höhere_ Spezifizität als Klassen haben, sollten die rote `background-color` und der `1px schwarze Rand` auf das zweite Element angewendet werden, wobei das erste Element die graue Hintergrundfarbe und keinen Rand erhält, wie von der Klasse angegeben.
4. Das zweite Element _bekommt_ die`red` `background-color`, aber keinen `border`. Warum? Wegen des `!important`-Flags in der zweiten Regel. Das Hinzufügen des `!important`-Flags nach `border: none` bedeutet, dass diese Deklaration den `border`-Wert in der vorherigen Regel überstunden wird, obwohl der ID-Selektor eine höhere Spezifizität hat.

> [!NOTE]
> Die einzige Möglichkeit, eine wichtige Deklaration zu überstimmen, besteht darin, eine andere wichtige Deklaration mit der _gleichen Spezifizität_ später in der Quellreihenfolge oder eine mit höherer Spezifizität einzuschließen.

Eine Situation, in der Sie möglicherweise das `!important`-Flag verwenden müssen, ist, wenn Sie an einem CMS arbeiten, wo Sie die Kern-CSS-Module nicht bearbeiten können, und Sie wirklich einen Inline-Stil oder eine wichtige Deklaration übersteuern möchten, die nicht auf andere Weise überstimmt werden kann. Aber wirklich, verwenden Sie es nicht, wenn Sie es vermeiden können.

## Die Auswirkung des CSS-Standorts

Schließlich ist es wichtig zu beachten, dass die Priorität einer CSS-Deklaration davon abhängt, in welchem Stylesheet sie spezifiziert ist.

Es ist möglich, dass Benutzer benutzerdefinierte Stylesheets festlegen, um die Stile der Entwickler zu übersteuern. Zum Beispiel könnte ein sehbehinderter Benutzer die Schriftgröße auf allen Webseiten, die er besucht, auf das Doppelte der normalen Größe einstellen wollen, um ein besseres Lesen zu ermöglichen.

### Reihenfolge der Übersteuerung von Deklarationen

In Konflikt stehende Deklarationen werden in folgender Reihenfolge angewendet, wobei spätere frühere übersteuern:

1. Deklarationen in Benutzeragent-Stylesheets (z. B. die Standardstile des Browsers, die verwendet werden, wenn keine anderen Stile festgelegt sind).
2. Normale Deklarationen in Benutzerstylesheets (benutzerdefinierte Stile, die von einem Benutzer festgelegt wurden).
3. Normale Deklarationen in Autorenstylesheets (dies sind die von uns, den Webentwicklern, festgelegten Stile).
4. Wichtige Deklarationen in Autorenstylesheets.
5. Wichtige Deklarationen in Benutzerstylesheets.
6. Wichtige Deklarationen in Benutzeragent-Stylesheets.

> [!NOTE]
> Die Reihenfolge der Priorität ist für mit `!important` gekennzeichnete Stile umgekehrt. Es ist sinnvoll, dass die Stylesheets des Webentwicklers die Benutzerstylesheets übersteuern, damit das Design so bleibt, wie beabsichtigt; jedoch haben Benutzer manchmal gute Gründe, die Stile der Webentwickler zu übersteuern, wie oben erwähnt, und dies kann durch die Verwendung von `!important` in ihren Regeln erreicht werden.

## Zusammenfassung

Wenn Sie das meiste von diesem Artikel verstanden haben, dann gut gemacht — Sie haben begonnen, sich mit den grundlegenden Mechanismen von CSS vertraut zu machen.

Wenn Sie die Kaskade, Spezifität und Vererbung nicht vollständig verstanden haben, dann machen Sie sich keine Sorgen! Dies ist definitiv das komplizierteste, das wir bisher im Kurs behandelt haben, und es ist etwas, das selbst professionelle Webentwickler manchmal schwierig finden. Wir empfehlen Ihnen, zu diesem Artikel mehrmals zurückzukehren, während Sie den Kurs fortsetzen, und darüber nachzudenken.

Kommen Sie darauf zurück, wenn Sie anfangen, auf seltsame Probleme mit Stilen zu stoßen, die nicht wie erwartet angewendet werden. Es könnte ein Spezifitätsproblem sein. Als Nächstes werden wir Ihnen einige Tests geben, die Sie verwenden können, um zu überprüfen, wie gut Sie die Informationen, die wir über die Kaskade bereitgestellt haben, verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model", "Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade", "Learn_web_development/Core/Styling_basics")}}
