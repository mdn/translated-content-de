---
title: Umgang mit Konflikten
slug: Learn_web_development/Core/Styling_basics/Handling_conflicts
l10n:
  sourceCommit: 8530cf97b809705c3524e733afcb69124b305b2e
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model", "Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade", "Learn_web_development/Core/Styling_basics")}}

Ziel dieser Lektion ist es, Ihr Verständnis für einige der grundlegendsten Konzepte von CSS zu vertiefen: Kaskade, Spezifität und Vererbung. Sie bestimmen, wie CSS auf HTML angewendet wird und wie Konflikte zwischen Stil-Deklarationen aufgelöst werden.

Diese Lektion mag zunächst weniger unmittelbar relevant und etwas theoretischer erscheinen als andere Teile des Kurses. Wenn Sie diese Konzepte verstehen, ersparen Sie sich später jedoch viele Schwierigkeiten! Wir empfehlen Ihnen, diesen Abschnitt sorgfältig durchzuarbeiten und zu prüfen, ob Sie die Konzepte verstanden haben, bevor Sie fortfahren.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (lesen Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">CSS-Selektoren</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Verstehen, wie Regeln in CSS miteinander in Konflikt geraten können.</li>
          <li>Vererbung.</li>
          <li>Die Kaskade.</li>
          <li>Die wichtigsten Konzepte, die über den Ausgang von Konflikten entscheiden: Spezifität, Reihenfolge im Quelltext und Wichtigkeit.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Widersprüchliche Regeln

CSS steht für **Cascading Style Sheets**. Das erste Wort, _cascading_, ist dabei besonders wichtig: Zu verstehen, wie sich die Kaskade verhält, ist entscheidend für das Verständnis von CSS.

Irgendwann werden Sie an einem Projekt arbeiten und feststellen, dass CSS, das Ihrer Meinung nach auf ein Element angewendet werden sollte, nicht funktioniert. Häufig entsteht dieses Problem, wenn Sie zwei Regeln erstellen, die derselben Eigenschaft desselben Elements unterschiedliche Werte zuweisen.

Die [**Kaskade**](/de/docs/Web/CSS/Guides/Cascade/Introduction) und das eng damit verbundene Konzept der [**Spezifität**](/de/docs/Web/CSS/Guides/Cascade/Specificity) bestimmen, welche Regel bei einem solchen Konflikt angewendet wird. Die Deklaration, die Ihr Element gestaltet, ist möglicherweise nicht die erwartete. Deshalb müssen Sie verstehen, wie diese Mechanismen funktionieren.

Wichtig ist hier auch das Konzept der [**Vererbung**](/de/docs/Web/CSS/Guides/Cascade/Inheritance): Manche CSS-Eigenschaften übernehmen standardmäßig Werte vom Elternelement des aktuellen Elements, andere nicht. Auch das kann zu unerwartetem Verhalten führen.

Sehen wir uns zunächst die wichtigsten Konzepte kurz an. Anschließend betrachten wir sie einzeln und untersuchen, wie sie zusammenwirken und sich auf Ihr CSS auswirken. Anfangs können diese Konzepte schwierig erscheinen, aber mit zunehmender Übung im Schreiben von CSS werden sie klarer.

### Kaskade

Stylesheets unterliegen der [**Kaskade**](/de/docs/Web/CSS/Guides/Cascade/Introduction). Vereinfacht ausgedrückt bedeutet das, dass die Herkunft und die Reihenfolge von CSS-Regeln eine Rolle spielen. Wenn zwei Regeln die gleiche Spezifität haben, wird diejenige verwendet, die im Stylesheet zuletzt definiert ist. Es gibt weitere Einflussfaktoren, etwa [Kaskadenebenen](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers). Diese sind jedoch fortgeschrittener und werden hier nicht im Detail behandelt.

Im folgenden Beispiel gibt es zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der Inhalt von `<h1>` wird schließlich blau dargestellt. Beide Regeln stammen aus derselben Quelle und haben denselben Elementselektor und damit dieselbe Spezifität. Deshalb setzt sich die Regel durch, die im Quelltext zuletzt steht.

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

Die [Spezifität](/de/docs/Web/CSS/Guides/Cascade/Specificity) ist ein Algorithmus, mit dem der Browser entscheidet, welcher Eigenschaftswert auf ein Element angewendet wird. Wenn mehrere Regeln mit unterschiedlichen Selektoren dasselbe Element ansprechen und derselben Eigenschaft unterschiedliche Werte zuweisen, entscheidet die Spezifität, welcher Wert angewendet wird. Sie ist im Wesentlichen ein Maß dafür, wie genau ein Selektor seine Auswahl eingrenzt:

- Ein Typselektor (Elementselektor) ist weniger spezifisch: Er wählt alle Elemente dieses Typs auf einer Seite aus und hat daher ein geringeres Gewicht. Pseudoelement-Selektoren haben dieselbe Spezifität wie gewöhnliche Elementselektoren.
- Ein Klassenselektor ist spezifischer: Er wählt nur Elemente auf einer Seite aus, die einen bestimmten Wert für das Attribut `class` haben, und hat daher ein höheres Gewicht. Attributselektoren und Pseudoklassen haben dasselbe Gewicht wie ein Klassenselektor.
- Ein ID-Selektor ist noch spezifischer: Er wählt nur ein einzelnes Element mit einem bestimmten `id`-Wert aus. Daher hat er ein noch höheres Gewicht.

Im folgenden Beispiel gibt es erneut zwei Regeln, die auf das `<h1>`-Element angewendet werden könnten. Der Inhalt von `<h1>` wird `red` dargestellt, obwohl die Deklaration `color: blue` im Quelltext später steht. Der Klassenselektor `main-heading` verleiht seiner Regel eine höhere Spezifität als der Typselektor `h1`. Angewendet wird daher die Deklaration mit der höheren Spezifität, die über den Klassenselektor definiert wurde.

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

Den Spezifitätsalgorithmus erläutern wir später genauer.

### Vererbung

Auch die Vererbung muss in diesem Zusammenhang verstanden werden: Manche CSS-Eigenschaftswerte, die für Elternelemente festgelegt sind, werden an deren Kindelemente vererbt, andere nicht.

Wenn Sie beispielsweise für ein Element `color` und `font-family` festlegen, werden auch alle darin enthaltenen Elemente mit dieser Farbe und Schriftart dargestellt, sofern Sie für sie nicht direkt andere Werte festgelegt haben.

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

Manche Eigenschaften werden nicht vererbt, zum Beispiel {{cssxref("width")}}. Wenn Sie für ein Element eine `width` von `50%` festlegen, erhalten nicht auch alle seine Nachfahren eine Breite von `50%` der `width` ihres jeweiligen Elternelements. Wäre das so, wäre CSS sehr frustrierend zu verwenden!

> [!NOTE]
> Auf den MDN-Referenzseiten zu CSS-Eigenschaften finden Sie einen Kasten mit technischen Informationen namens „Formale Definition“. Darin sind verschiedene Angaben zur jeweiligen Eigenschaft aufgeführt, unter anderem, ob sie vererbt wird. Ein Beispiel finden Sie im Abschnitt [Formale Definition der Eigenschaft color](/de/docs/Web/CSS/Reference/Properties/color#formal_definition).

### Zusammenspiel der Konzepte verstehen

Diese drei Konzepte – Kaskade, Spezifität und Vererbung – bestimmen gemeinsam, welches CSS auf welches Element angewendet wird. In den folgenden Abschnitten sehen wir uns an, wie sie zusammenwirken. Das kann zunächst etwas kompliziert erscheinen. Mit zunehmender Erfahrung mit CSS werden Sie sich die Konzepte jedoch besser merken können, und wenn Sie ein Detail vergessen, können Sie es jederzeit nachschlagen! Selbst erfahrene Entwickler merken sich nicht alle Einzelheiten.

## Vererbung verstehen

Beginnen wir mit der Vererbung. Im folgenden Beispiel haben wir ein {{HTMLElement("ul")}}-Element, in dem ungeordnete Listen auf zwei Ebenen verschachtelt sind. Für das äußere `<ul>` haben wir einen Rahmen, einen Innenabstand und eine Schriftfarbe festgelegt.

Die Eigenschaft `color` wird vererbt. Ihr Wert wird daher sowohl auf direkte als auch auf indirekte Kindelemente angewendet: auf die unmittelbar untergeordneten `<li>`-Elemente und auf die Elemente innerhalb der ersten verschachtelten Liste. Anschließend haben wir der zweiten verschachtelten Liste die Klasse `special` zugewiesen und für sie eine andere Farbe festgelegt. Diese Farbe wird wiederum an ihre Kindelemente vererbt.

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

Eigenschaften wie `width` (wie zuvor erwähnt), `margin`, `padding` und `border` werden nicht vererbt. Würde in diesem Listenbeispiel ein Rahmen an die Kindelemente vererbt, hätte jede einzelne Liste und jeder Listeneintrag einen Rahmen – vermutlich kein Effekt, den wir uns wünschen würden!

Zwar ist auf jeder Referenzseite zu einer CSS-Eigenschaft angegeben, ob sie vererbt wird. Wenn Sie wissen, welchen Aspekt ein Eigenschaftswert gestaltet, können Sie es jedoch oft auch intuitiv einschätzen.

### Vererbung steuern

CSS stellt fünf spezielle universelle Eigenschaftswerte bereit, mit denen sich die Vererbung steuern lässt. Jede CSS-Eigenschaft akzeptiert diese Werte.

- {{cssxref("inherit")}}
  - : Setzt den auf ein ausgewähltes Element angewendeten Eigenschaftswert auf denselben Wert wie beim Elternelement. Damit wird die Vererbung praktisch „eingeschaltet“.
- {{cssxref("initial")}}
  - : Setzt den auf ein ausgewähltes Element angewendeten Eigenschaftswert auf den [Anfangswert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) dieser Eigenschaft.
- {{cssxref("revert")}}
  - : Setzt den auf ein ausgewähltes Element angewendeten Eigenschaftswert auf die Standardgestaltung des Browsers zurück, statt den Standardwert dieser Eigenschaft zu verwenden. In vielen Fällen verhält sich dieser Wert wie {{cssxref("unset")}}.
- {{cssxref("revert-layer")}}
  - : Setzt den auf ein ausgewähltes Element angewendeten Eigenschaftswert auf den Wert zurück, der in einer vorherigen [Kaskadenebene](/de/docs/Web/CSS/Reference/At-rules/@layer) festgelegt wurde.
- {{cssxref("unset")}}
  - : Setzt die Eigenschaft auf ihren natürlichen Wert zurück. Wird die Eigenschaft normalerweise vererbt, verhält sich der Wert wie `inherit`, andernfalls wie `initial`.

### Mit Werten zur Steuerung der Vererbung experimentieren

In diesem Abschnitt experimentieren Sie mit den universellen Eigenschaftswerten, um ihre Auswirkungen besser zu verstehen. Mit Code zu experimentieren ist tatsächlich der beste Weg, ein tieferes Verständnis von HTML und CSS zu entwickeln.

Das folgende HTML definiert eine Liste von Links:

```html live-sample___keywords
<ul>
  <li>Default <a href="#">link</a> color</li>
  <li class="my-class-1">Inherit the <a href="#">link</a> color</li>
  <li class="my-class-2">Reset the <a href="#">link</a> color</li>
  <li class="my-class-3">Unset the <a href="#">link</a> color</li>
</ul>
```

Darauf haben wir das folgende CSS angewendet. Beachten Sie, dass für den zweiten, dritten und vierten Link unterschiedliche universelle Eigenschaftswerte als Werte für {{cssxref("color")}} festgelegt sind:

```css live-sample___keywords
body {
  font-family: sans-serif;
  font-size: 1.3rem;
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

Das Beispiel wird so dargestellt:

{{EmbedLiveSample("keywords")}}

Klicken Sie auf die Schaltfläche „Play“, um das Beispiel im MDN Playground zu öffnen. Führen Sie dann die folgenden Schritte aus:

1. Dem zweiten Listeneintrag ist die Klasse `my-class-1` zugewiesen. Dadurch wird `color` für das zweite `<a>`-Element auf `inherit` gesetzt. Es übernimmt also die Farbe `green` seines Elternelements `<li>` (die Eigenschaft `color` wird standardmäßig vererbt). Wie ändert sich die Farbe des Links, wenn Sie die Regel `.my-class-1 a` entfernen?

   Das zweite `<a>`-Element sollte nun `blue` werden: Es übernimmt nicht mehr die Farbe `green`, sondern stattdessen die Standardfarbe `blue`, die im browsereigenen Stylesheet festgelegt ist.

   Fügen Sie die Regel `.my-class-1 a` wieder ein, bevor Sie fortfahren.

2. Verstehen Sie, warum der dritte und vierte Link ihre jeweilige Farbe haben? Lesen Sie die obigen Erklärungen zu `initial` und `unset` noch einmal und denken Sie darüber nach, bevor Sie die folgenden Erläuterungen lesen.

   `color` ist für das dritte `<a>`-Element auf `initial` gesetzt. Es verwendet also den Anfangswert der Eigenschaft (in diesem Fall Schwarz) und nicht die Browser-Standardfarbe für Links, die Blau ist.

   `color` ist für das vierte `<a>`-Element auf `unset` gesetzt. Dadurch wird jeder `color`-Wert aufgehoben, der im Browser-Stylesheet oder an anderer Stelle auf das `<a>`-Element angewendet wurde. Da `color` vererbbar ist, bewirkt `unset`, dass das `<a>`-Element `color` von seinem Elternelement `<li>` übernimmt: `green`.

3. Welche Links ändern ihre Farbe, wenn Sie für alle `<a>`-Elemente einen neuen `color`-Wert definieren, beispielsweise mit `a { color: hotpink; }`? Überlegen Sie zunächst, wie die Antwort lauten könnte, und fügen Sie die Regel dann am Ende des CSS hinzu.

   Das ist tatsächlich eine kleine Fangfrage: Nur das erste `<a>`-Element übernimmt die neue Farbe. Die anderen übernehmen die später im Stylesheet festgelegte Farbe nicht, weil die Selektoren der Regeln, die ihnen zuvor `color`-Werte zuweisen (`.my-class-1 a` usw.), eine höhere [Spezifität](#spezifität) haben als der Selektor `a`.

4. Mit der Eigenschaft {{cssxref("all")}} können Sie einen universellen Eigenschaftswert für nahezu alle Eigenschaften eines Elements festlegen. Im nächsten Abschnitt erfahren Sie etwas mehr darüber. Versuchen Sie zunächst, in der zweiten, dritten und vierten Regel den Eigenschaftsnamen `color` durch `all` zu ersetzen. Ändern Sie beispielsweise `color: inherit` in `all: inherit`.

   Dadurch werden alle Eigenschaften dieser `<a>`-Elemente jeweils auf `inherit`, `initial` beziehungsweise `unset` gesetzt. Beachten Sie, dass der zweite Link nun in einer neuen Zeile steht und ein Aufzählungszeichen hat. Welche Eigenschaftswerte hat er Ihrer Meinung nach geerbt, die das bewirken?

   Hier einige Hinweise: Er hat Folgendes geerbt:

   - Einen {{cssxref("display")}}-Wert von `list-item`, wodurch er in einer neuen Zeile steht und ein Aufzählungszeichen erzeugt wird.
   - Einen {{cssxref("text-decoration")}}-Wert von `none`, wodurch seine Unterstreichung entfernt wird.
   - Einen {{cssxref("list-style-type")}}-Wert von `disc`, wodurch sein Aufzählungszeichen die Form eines ausgefüllten Kreises erhält.
   - Einen {{cssxref("color")}}-Wert von `green`, wie bereits zuvor.

### Alle Eigenschaftswerte zurücksetzen

Mit der CSS-Kurzschreibweise {{cssxref("all")}} können Sie einen dieser Vererbungswerte gleichzeitig auf (fast) alle Eigenschaften anwenden. Als Wert kann jeder der Vererbungswerte verwendet werden (`inherit`, `initial`, `revert`, `revert-layer` oder `unset`). Das ist eine praktische Möglichkeit, Änderungen an Stilen rückgängig zu machen und vor weiteren Änderungen zu einem bekannten Ausgangspunkt zurückzukehren.

Im folgenden Beispiel haben wir zwei Blockzitate. Beim ersten wird die Gestaltung direkt auf das Blockzitat-Element angewendet. Dem zweiten ist eine Klasse zugewiesen, die `all` auf `unset` setzt.

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

Versuchen Sie, `all` auf einige der anderen verfügbaren Werte zu setzen, und beobachten Sie die Unterschiede.

## Die Kaskade verstehen

Wir wissen jetzt, dass Vererbung der Grund dafür ist, dass ein tief in der HTML-Struktur verschachtelter Absatz dieselbe Farbe hat, die per CSS für `body` festgelegt wurde. Aus den einführenden Lektionen wissen wir, wie wir das auf einen Teil des Dokuments angewendete CSS ändern können – indem wir einem Element CSS zuweisen oder eine Klasse erstellen. Nun sehen wir uns an, wie die Kaskade bestimmt, welche CSS-Regeln angewendet werden, wenn mehrere Stilblöcke derselben Eigenschaft desselben Elements unterschiedliche Werte zuweisen.

Dabei sind drei Faktoren zu berücksichtigen, die hier in aufsteigender Reihenfolge ihrer Bedeutung aufgeführt sind. Spätere Faktoren setzen sich gegenüber früheren durch:

1. **Reihenfolge im Quelltext**
2. **Spezifität**
3. **Wichtigkeit**

Sehen wir uns an, wie Browser anhand dieser Faktoren genau bestimmen, welches CSS angewendet wird.

### Reihenfolge im Quelltext

Wir haben bereits gesehen, welche Rolle die Reihenfolge im Quelltext für die Kaskade spielt. Wenn mehrere Regeln exakt dasselbe Gewicht haben, setzt sich diejenige durch, die im CSS zuletzt steht. Sie können sich das so vorstellen: Die Regel, die dem Element selbst am nächsten steht, überschreibt die vorherigen Regeln, bis die letzte Regel übrig bleibt und das Element gestaltet.

Die Reihenfolge im Quelltext ist nur dann entscheidend, wenn die Regeln dasselbe Spezifitätsgewicht haben. Sehen wir uns daher als Nächstes die Spezifität an.

### Spezifität

Häufig werden Sie feststellen, dass eine Regel zwar später im Stylesheet steht, aber dennoch eine frühere, widersprüchliche Regel angewendet wird. Das liegt daran, dass die frühere Regel eine **höhere Spezifität** hat: Sie ist spezifischer und wird deshalb vom Browser für die Gestaltung des Elements ausgewählt.

Wie wir weiter oben in dieser Lektion gesehen haben, hat ein Klassenselektor ein höheres Gewicht als ein Elementselektor. Die im Stilblock der Klasse definierten Eigenschaften überschreiben daher die entsprechenden Eigenschaften aus dem Stilblock des Elements.

Wichtig ist dabei: Auch wenn wir über Selektoren und die Regeln nachdenken, die auf den ausgewählten Text oder die ausgewählte Komponente angewendet werden, wird nicht die gesamte Regel überschrieben, sondern nur die Eigenschaften, die an mehreren Stellen deklariert sind.

Dieses Verhalten hilft, Wiederholungen in Ihrem CSS zu vermeiden. Üblicherweise definiert man allgemeine Stile für grundlegende Elemente und erstellt anschließend Klassen für Elemente, die davon abweichen. Im folgenden Stylesheet haben wir beispielsweise allgemeine Stile für Überschriften der zweiten Ebene definiert und danach Klassen erstellt, die nur einige Eigenschaften und Werte ändern. Die ursprünglich definierten Werte werden auf alle Überschriften angewendet; bei Überschriften mit den entsprechenden Klassen kommen anschließend die spezifischeren Werte zur Anwendung.

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

Sehen wir uns nun an, wie der Browser die Spezifität berechnet. Wir wissen bereits, dass ein Elementselektor eine geringe Spezifität hat und von einer Klasse überschrieben werden kann. Grundsätzlich wird verschiedenen Selektortypen ein Punktwert zugewiesen. Aus diesen Werten ergibt sich das Gewicht eines Selektors, das dann mit anderen möglichen Übereinstimmungen verglichen werden kann.

Die Spezifität eines Selektors wird anhand von drei Werten (oder Komponenten) gemessen. Sie können sich diese als Spalten für ID, KLASSE und ELEMENT vorstellen, die Hundertern, Zehnern beziehungsweise Einern entsprechen:

- **IDs**: Für jeden ID-Selektor innerhalb des gesamten Selektors wird in dieser Spalte ein Punkt gezählt (100 Punkte).
- **Klassen**: Für jeden Klassenselektor, Attributselektor oder jede Pseudoklasse innerhalb des gesamten Selektors wird in dieser Spalte ein Punkt gezählt (10 Punkte).
- **Elemente**: Für jeden Elementselektor oder jedes Pseudoelement innerhalb des gesamten Selektors wird in dieser Spalte ein Punkt gezählt (1 Punkt).

> [!NOTE]
> Der universelle Selektor ([`*`](/de/docs/Web/CSS/Reference/Selectors/Universal_selectors)), [Kombinatoren](/de/docs/Learn_web_development/Core/Styling_basics/Combinators) (`+`, `>`, `~`, ' ') und der Selektor zur Anpassung der Spezifität ({{cssxref(":where()")}}) einschließlich seiner Parameter haben keinen Einfluss auf die Spezifität.

Die folgende Tabelle zeigt einige einzelne Beispiele zum Einstieg. Gehen Sie sie durch und vergewissern Sie sich, dass Sie verstehen, warum sie jeweils die angegebene Spezifität haben. Einzelheiten zu den Selektoren finden Sie in der MDN-[Referenz zu Selektoren](/de/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators).

| Selektor                                  | IDs | Klassen | Elemente | Gesamtspezifität |
| ----------------------------------------- | --- | ------- | -------- | ---------------- |
| `h1`                                      | 0   | 0       | 1        | 0-0-1            |
| `h1 + p::first-letter`                    | 0   | 0       | 3        | 0-0-3            |
| `li > a[href*="en-US"] > .inline-warning` | 0   | 2       | 2        | 0-2-2            |
| `#identifier`                             | 1   | 0       | 0        | 1-0-0            |

#### Ausführliches Beispiel zur Spezifität

Bevor wir fortfahren, sehen wir uns ein konkretes Beispiel an. Sie können es im MDN Playground in einem separaten Tab öffnen, damit Sie beim Lesen der Erklärung leicht darauf zurückgreifen können.

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

Was geschieht hier? Zunächst interessieren uns nur die ersten sieben Regeln dieses Beispiels. Wie Sie sehen, haben wir vor jeder dieser Regeln ihren Spezifitätswert als Kommentar eingefügt.

- Die ersten beiden Selektoren konkurrieren darum, welchen Wert `background-color` für den Link erhält. Der zweite setzt sich durch und macht die Hintergrundfarbe `blue`, weil seine Selektorkette einen zusätzlichen ID-Selektor enthält: Seine Spezifität beträgt 2-0-1 gegenüber 1-0-1.
- Die Selektoren 3 und 4 konkurrieren um `color` für den Text des Links. Der zweite setzt sich durch und macht den Text `white`. Er enthält zwar einen Elementselektor weniger, doch an dessen Stelle steht ein Klassenselektor, der ein höheres Gewicht als ein Elementselektor hat. Die Spezifität der durchgesetzten Regel beträgt 1-1-3 gegenüber 1-0-4.
- Die Selektoren 5 bis 7 konkurrieren um `border` für den Link, wenn der Mauszeiger darüberbewegt wird. Selektor 6 unterliegt Selektor 5 eindeutig mit einer Spezifität von 0-2-3 gegenüber 0-2-4: Seine Kette enthält einen Elementselektor weniger. Selektor 7 setzt sich dagegen sowohl gegenüber Selektor 5 als auch gegenüber Selektor 6 durch. Er enthält genauso viele Teilselektoren wie Selektor 5, aber ein Elementselektor wurde durch einen Klassenselektor ersetzt. Die Spezifität der durchgesetzten Regel beträgt somit 0-3-3 gegenüber 0-2-3 und 0-2-4.

> [!NOTE]
> Jeder Selektortyp hat eine eigene Spezifitätsstufe, die von Selektoren einer niedrigeren Stufe nicht übertroffen werden kann. Selbst _eine Million_ **Klassenselektoren** zusammen könnten beispielsweise die Spezifität _eines einzigen_ **ID-Selektors** nicht übertreffen.
>
> Am besten vergleichen Sie Spezifitätswerte, indem Sie die Stufen einzeln prüfen: Beginnen Sie bei der höchsten und gehen Sie nur bei Bedarf zur nächstniedrigeren über. Nur wenn die Werte in einer Spezifitätsspalte gleich sind, müssen Sie die nächste Spalte auswerten. Andernfalls können Sie die niedrigeren Stufen außer Acht lassen, da sie den höheren Wert niemals übertreffen können.

#### IDs im Vergleich zu Klassen

ID-Selektoren haben eine hohe Spezifität. Das bedeutet, dass Stile, die aufgrund eines passenden ID-Selektors angewendet werden, Stile übersteuern, die auf anderen Selektoren beruhen – auch auf Klassen- und Typselektoren. Da eine ID auf einer Seite nur einmal vorkommen kann und ID-Selektoren eine hohe Spezifität haben, ist es vorzuziehen, einem Element eine Klasse statt einer ID hinzuzufügen.

Wenn die ID die einzige Möglichkeit ist, das Element anzusprechen – etwa weil Sie keinen Zugriff auf das Markup haben und es nicht bearbeiten können –, können Sie die ID in einem [Attributselektor](/de/docs/Web/CSS/Reference/Selectors/Attribute_selectors) verwenden, beispielsweise `p[id="header"]`.

### Inline-Stile

Inline-Stile, also Stil-Deklarationen innerhalb eines [`style`](/de/docs/Web/HTML/Reference/Global_attributes/style)-Attributs, haben unabhängig von der Spezifität Vorrang vor allen normalen Stilen. Solche Deklarationen haben keine Selektoren, ihre Spezifität kann aber als 1-0-0-0 aufgefasst werden. Sie ist damit immer höher als jeder andere Spezifitätswert, unabhängig davon, wie viele IDs die Selektoren enthalten.

### !important

Mit einem besonderen CSS-Flag können Sie alle zuvor beschriebenen Berechnungen übersteuern, sogar bei Inline-Stilen: `!important`. Bei seiner Verwendung sollten Sie jedoch sehr vorsichtig sein. Dieses Flag gibt einem einzelnen Paar aus Eigenschaft und Wert Vorrang und setzt damit die normalen Regeln der Kaskade außer Kraft, einschließlich normaler Inline-Stile.

> [!NOTE]
> Es ist hilfreich zu wissen, dass es das Flag `!important` gibt, damit Sie es erkennen, wenn es Ihnen im Code anderer begegnet. **Wir empfehlen jedoch dringend, es nur zu verwenden, wenn es unbedingt nötig ist.** `!important` verändert die normale Funktionsweise der Kaskade. Dadurch kann die Fehlersuche bei CSS-Problemen sehr schwierig werden, insbesondere in einem großen Stylesheet.

Betrachten Sie dieses Beispiel mit zwei Absätzen, von denen einer eine ID hat.

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

Gehen wir Schritt für Schritt durch, was hier passiert. Falls es Ihnen schwerfällt, das Verhalten nachzuvollziehen, entfernen Sie probeweise einige der Eigenschaften und beobachten Sie das Ergebnis:

1. Sie sehen, dass die Werte für {{cssxref("color")}} und {{cssxref("padding")}} aus der dritten Regel angewendet werden, der Wert für {{cssxref("background-color")}} jedoch nicht. Warum? Eigentlich müssten doch alle drei angewendet werden, weil später im Quelltext stehende Regeln frühere Regeln normalerweise überschreiben.
2. Die darüberstehenden Regeln setzen sich jedoch durch, weil Klassenselektoren eine höhere Spezifität als Elementselektoren haben.
3. Beide Elemente haben eine [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) mit dem Wert `better`, aber das zweite hat außerdem eine [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id) mit dem Wert `winning`. Da IDs eine _noch höhere_ Spezifität als Klassen haben, müssten sowohl die `red` `background-color` als auch der `1px black` `border` auf das zweite Element angewendet werden. Das erste Element müsste wie durch die Klasse festgelegt einen grauen Hintergrund und keinen Rahmen erhalten.
4. Das zweite Element erhält _tatsächlich_ die `red` `background-color`, aber keinen `border`. Warum? Wegen des Flags `!important` in der zweiten Regel. Durch `!important` nach `border: none` setzt sich diese Deklaration gegenüber dem `border`-Wert der vorherigen Regel durch, obwohl der ID-Selektor eine höhere Spezifität hat.

> [!NOTE]
> Eine wichtige Deklaration lässt sich nur durch eine andere wichtige Deklaration mit _derselben Spezifität_, die später im Quelltext steht, oder durch eine mit höherer Spezifität überschreiben.

Eine Situation, in der Sie `!important` möglicherweise verwenden müssen, ist die Arbeit mit einem CMS, dessen zentrale CSS-Module Sie nicht bearbeiten können. Vielleicht müssen Sie dort einen Inline-Stil oder eine wichtige Deklaration überschreiben, für die es keine andere Möglichkeit gibt. Verwenden Sie es aber nach Möglichkeit nicht.

## Einfluss der CSS-Herkunft

Abschließend ist wichtig, dass der Vorrang einer CSS-Deklaration davon abhängt, in welchem Stylesheet sie definiert ist.

Benutzer können eigene Stylesheets festlegen, um die Stile der Entwickler zu überschreiben. Beispielsweise könnte eine Person mit Sehbeeinträchtigung die Schriftgröße auf allen besuchten Webseiten auf das Doppelte der normalen Größe setzen, damit die Seiten leichter zu lesen sind.

### Reihenfolge beim Überschreiben von Deklarationen

Widersprüchliche Deklarationen werden in der folgenden Reihenfolge angewendet, wobei spätere frühere überschreiben:

1. Deklarationen in User-Agent-Stylesheets (z. B. die Standardstile des Browsers, die verwendet werden, wenn keine anderen Stile festgelegt sind).
2. Normale Deklarationen in Benutzer-Stylesheets (benutzerdefinierte Stile, die von einem Benutzer festgelegt wurden).
3. Normale Deklarationen in Autoren-Stylesheets (Stile, die wir als Webentwickler festlegen).
4. Wichtige Deklarationen in Autoren-Stylesheets.
5. Wichtige Deklarationen in Benutzer-Stylesheets.
6. Wichtige Deklarationen in User-Agent-Stylesheets.

> [!NOTE]
> Für mit `!important` gekennzeichnete Stile ist die Rangfolge umgekehrt. Es ist sinnvoll, dass Stylesheets von Webentwicklern Benutzer-Stylesheets überschreiben, damit das beabsichtigte Design erhalten bleibt. Manchmal haben Benutzer jedoch gute Gründe, die Stile von Webentwicklern zu überschreiben, wie oben beschrieben. Das können sie erreichen, indem sie `!important` in ihren Regeln verwenden.

## Zusammenfassung

Wenn Sie den Großteil dieses Artikels verstanden haben, herzlichen Glückwunsch: Sie haben begonnen, sich mit den grundlegenden Mechanismen von CSS vertraut zu machen.

Falls Sie Kaskade, Spezifität und Vererbung noch nicht vollständig verstanden haben, machen Sie sich keine Sorgen! Das ist zweifellos das komplizierteste Thema, das wir bisher in diesem Kurs behandelt haben, und selbst professionelle Webentwickler finden es manchmal schwierig. Wir empfehlen Ihnen, im weiteren Verlauf des Kurses mehrfach zu diesem Artikel zurückzukehren und weiter über die Konzepte nachzudenken.

Schlagen Sie hier nach, wenn Sie auf unerklärliche Probleme stoßen, bei denen Stile nicht wie erwartet angewendet werden. Es könnte an der Spezifität liegen. Als Nächstes erhalten Sie einige Tests, mit denen Sie überprüfen können, wie gut Sie die Informationen zur Kaskade verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model", "Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade", "Learn_web_development/Core/Styling_basics")}}
