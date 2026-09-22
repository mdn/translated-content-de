---
title: Spezifität
slug: Web/CSS/Guides/Cascade/Specificity
l10n:
  sourceCommit: 298079b550c76f20de6611c4ecdde4c30dc68b2b
---

**Spezifität** ist die Gewichtung, anhand derer Browser im Kaskadenalgorithmus bestimmen, welche [CSS-Deklaration](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#css_syntax_basics) für ein Element am relevantesten ist. Daraus ergibt sich, welcher Eigenschaftswert auf das Element angewendet wird. Der Spezifitätsalgorithmus berechnet diese Gewichtung aus einem [CSS-Selektor](/de/docs/Web/CSS/Reference#selectors) und vergleicht die resultierenden Werte, um zu entscheiden, welche Regel von konkurrierenden CSS-Deklarationen desselben Ursprungs und derselben Ebene auf ein Element angewendet wird.

> [!NOTE]
> Browser berücksichtigen die Spezifität **erst nach** der Bestimmung von [Kaskadenursprung und Wichtigkeit](/de/docs/Web/CSS/Guides/Cascade/Introduction). Bei konkurrierenden Eigenschaftsdeklarationen ist die Spezifität also nur zwischen Selektoren aus dem [Kaskadenursprung und der Ebene](/de/docs/Web/CSS/Reference/At-rules/@layer) relevant, die für die Eigenschaft Vorrang haben. Die [Nähe zum Geltungsbereich](/de/docs/Web/CSS/Reference/At-rules/@scope#how_scope_conflicts_are_resolved) und die Reihenfolge des Auftretens werden relevant, wenn die Selektoren der konkurrierenden Deklarationen in der vorrangigen Kaskadenebene dieselbe Spezifität haben.

## Wie wird die Spezifität berechnet?

Spezifität ist die Gewichtung, die einer bestimmten CSS-Deklaration zugewiesen wird. Der Spezifitätsalgorithmus berechnet sie anhand der Anzahl der [Selektoren jeder Gewichtungskategorie](#gewichtungskategorien_von_selektoren) im Selektor, der auf das Element oder Pseudoelement zutrifft. Wenn zwei oder mehr Deklarationen unterschiedliche Eigenschaftswerte für dasselbe Element angeben, wird der Wert aus dem Stilblock angewendet, dessen zutreffender Selektor die höchste Gewichtung hat.

Der Spezifitätswert besteht im Wesentlichen aus drei Spalten für drei Kategorien oder Gewichtungen – ID, CLASS und TYPE –, die den drei Selektortypen entsprechen. Der Wert gibt die Anzahl der Selektorkomponenten in jeder Gewichtungskategorie an und wird als _ID - CLASS - TYPE_ geschrieben. Die drei Spalten entstehen, indem die Selektorkomponenten jeder Gewichtungskategorie in den Selektoren gezählt werden, die auf das Element zutreffen.

### Gewichtungskategorien von Selektoren

Die Gewichtungskategorien sind hier in absteigender Reihenfolge der Spezifität aufgeführt:

- ID-Spalte
  - : Enthält nur [ID-Selektoren](/de/docs/Web/CSS/Reference/Selectors/ID_selectors) wie `#example`. Für jede ID in einem zutreffenden Selektor wird 1-0-0 zum Gewichtungswert addiert.
- CLASS-Spalte
  - : Enthält [Klassenselektoren](/de/docs/Web/CSS/Reference/Selectors/Class_selectors) wie `.myClass`, Attributselektoren wie `[type="radio"]` und `[lang|="fr"]` sowie Pseudoklassen wie `:hover`, `:nth-of-type(3n)` und `:required`. Für jede Klasse, jeden Attributselektor und jede Pseudoklasse in einem zutreffenden Selektor wird 0-1-0 zum Gewichtungswert addiert.
- TYPE-Spalte
  - : Enthält [Typselektoren](/de/docs/Web/CSS/Reference/Selectors/Type_selectors) wie `p`, `h1` und `td` sowie Pseudoelemente wie `::before`, `::placeholder` und alle anderen Selektoren mit Doppelpunkt-Doppelpunkt-Notation. Für jeden Typ und jedes Pseudoelement in einem zutreffenden Selektor wird 0-0-1 zum Gewichtungswert addiert.
- Kein Wert
  - : Der universelle Selektor ({{CSSxRef("Universal_selectors", "*")}}), die Pseudoklasse {{cssxref(":where()")}} und ihre Parameter werden bei der Berechnung der Gewichtung nicht gezählt; ihr Wert ist daher 0-0-0. Sie treffen dennoch auf Elemente zu. Diese Selektoren beeinflussen den Spezifitätswert nicht.

Kombinatoren wie {{CSSxRef("Next-sibling_combinator", "+")}}, {{CSSxRef("Child_combinator", "&gt;")}}, {{CSSxRef("Subsequent-sibling_combinator", "~")}}, [" "](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator) und {{CSSxRef("Column_combinator", "||")}} können genauer festlegen, was ein Selektor auswählt. Sie erhöhen jedoch nicht seine Spezifität.

Der Verschachtelungskombinator `&` erhöht die Spezifität nicht, verschachtelte Regeln hingegen schon. In Bezug auf Spezifität und Funktionsweise ähnelt die Verschachtelung der Pseudoklasse {{cssxref(":is()")}} stark.

Wie bei der Verschachtelung erhöhen die Pseudoklassen {{cssxref(":is()")}}, {{cssxref(":has()")}} und die Negation ({{cssxref(":not()")}}) selbst die Gewichtung nicht. Ihre Parameter tun dies jedoch. Die Spezifität ergibt sich jeweils aus dem Selektorparameter mit der höchsten Spezifität in der Selektorliste. Entsprechend wird bei verschachtelten Selektoren die zusätzliche Spezifität der verschachtelten Selektorkomponente durch den Selektor mit der höchsten Spezifität in der kommagetrennten Liste verschachtelter Selektoren bestimmt.

Die [Ausnahmen für `:not()`, `:is()`, `:has()` und CSS-Verschachtelung](#the_is_not_has_and_css_nesting_exceptions) werden weiter unten erläutert.

#### Zutreffender Selektor

Die Spezifität ergibt sich aus dem zutreffenden Selektor. Betrachten Sie als Beispiel diesen CSS-Selektor mit drei durch Kommas getrennten Selektoren:

```css
[type="password"],
input:focus,
:root #myApp input:required {
  color: blue;
}
```

Der Selektor `[type="password"]` in der obigen Selektorliste hat eine Spezifität von `0-1-0` und wendet die Deklaration `color: blue` auf alle Passwort-Eingabefelder an.

Alle Eingabefelder treffen unabhängig von ihrem Typ bei Fokussierung auf den zweiten Selektor der Liste zu, `input:focus`, der eine Spezifität von `0-1-1` hat. Diese setzt sich aus der Pseudoklasse `:focus` (0-1-0) und dem Typ `input` (0-0-1) zusammen. Wenn das Passwort-Eingabefeld fokussiert ist, trifft `input:focus` darauf zu, und die Spezifität der Stildeklaration `color: blue` beträgt `0-1-1`. Ohne Fokus bleibt die Spezifität bei `0-1-0`.

Die Spezifität für ein erforderliches Eingabefeld, das in einem Element mit dem Attribut `id="myApp"` verschachtelt ist, beträgt `1-2-1`: eine ID, zwei Pseudoklassen und ein Elementtyp.

Wenn ein Passwort-Eingabefeld mit `required` in einem Element mit `id="myApp"` verschachtelt ist, beträgt die Spezifität unabhängig vom Fokus `1-2-1`. Sie ergibt sich aus einer ID, zwei Pseudoklassen und einem Elementtyp. Warum beträgt die Spezifität in diesem Fall `1-2-1` statt `0-1-1` oder `0-1-0`? Weil sie vom zutreffenden Selektor mit der höchsten Spezifität bestimmt wird. Dazu werden die Werte der drei Spalten von links nach rechts verglichen.

```css
[type="password"] {
  /* 0-1-0 */
}
input:focus {
  /* 0-1-1 */
}
:root #myApp input:required {
  /* 1-2-1 */
}
```

### Vergleich der drei Spalten

Sobald die Spezifitätswerte der relevanten Selektoren bestimmt sind, wird die Anzahl der Selektorkomponenten in jeder Spalte von links nach rechts verglichen.

```css
#myElement {
  color: green; /* 1-0-0  - WINS!! */
}
.bodyClass .sectionClass .parentClass [id="myElement"] {
  color: yellow; /* 0-4-0 */
}
```

Die erste Spalte enthält den Wert der _ID_-Komponente, also die Anzahl der IDs in jedem Selektor. Die Werte in den _ID_-Spalten konkurrierender Selektoren werden verglichen. Der Selektor mit dem höheren Wert in der _ID_-Spalte gewinnt, unabhängig von den Werten in den anderen Spalten. Im obigen Beispiel hat der gelbe Selektor zwar insgesamt mehr Komponenten, doch nur der Wert der ersten Spalte zählt.

Wenn die Werte in den _ID_-Spalten konkurrierender Selektoren gleich sind, wird die nächste Spalte, _CLASS_, verglichen, wie unten gezeigt.

```css
#myElement {
  color: yellow; /* 1-0-0 */
}
#myApp [id="myElement"] {
  color: green; /* 1-1-0  - WINS!! */
}
```

Die _CLASS_-Spalte zählt die Klassennamen, Attributselektoren und Pseudoklassen im Selektor. Wenn der Wert der _ID_-Spalte gleich ist, gewinnt der Selektor mit dem höheren Wert in der _CLASS_-Spalte, unabhängig vom Wert in der _TYPE_-Spalte. Das zeigt das folgende Beispiel.

```css
:root input {
  color: green; /* 0-1-1 - WINS because CLASS column is greater */
}
html body main input {
  color: yellow; /* 0-0-4 */
}
```

Wenn die Werte in den _CLASS_- und _ID_-Spalten konkurrierender Selektoren gleich sind, wird die _TYPE_-Spalte relevant. Sie zählt die Elementtypen und Pseudoelemente im Selektor. Sind die Werte der ersten beiden Spalten gleich, gewinnt der Selektor mit dem höheren Wert in der _TYPE_-Spalte.

Wenn konkurrierende Selektoren in allen drei Spalten dieselben Werte haben, entscheidet die Reihenfolge: Der zuletzt deklarierte Stil hat Vorrang.

```css
input.myClass {
  color: yellow; /* 0-1-1 */
}
:root input {
  color: green; /* 0-1-1 WINS because it comes later */
}
```

### Die Ausnahmen für `:is()`, `:not()`, `:has()` und CSS-Verschachtelung

Die „Matches-any“-Pseudoklasse {{cssxref(":is()")}}, die relationale Pseudoklasse {{cssxref(":has()")}} und die Negationspseudoklasse {{cssxref(":not()")}} werden bei der Berechnung der Spezifität _nicht_ als Pseudoklassen gezählt. Sie selbst erhöhen die Gewichtung nicht. Die Selektorparameter in ihren Klammern fließen jedoch in die Berechnung ein: Ihre Gewichtung bei der Berechnung der Spezifität entspricht der [Gewichtung](#gewichtungskategorien_von_selektoren) des jeweiligen Parameters.

```css
p {
  /* 0-0-1 */
}
:is(p) {
  /* 0-0-1 */
}

h2:nth-last-of-type(n + 2) {
  /* 0-1-1 */
}
h2:has(~ h2) {
  /* 0-0-2 */
}

div.outer p {
  /* 0-1-2 */
}
div:not(.inner) p {
  /* 0-1-2 */
}
```

Beachten Sie, dass die Spezifität, die im obigen CSS-Beispiel durch `:is()`, `:has()` und `:not()` entsteht, vom Selektorparameter stammt, nicht von der Pseudoklasse selbst.

Alle drei Pseudoklassen akzeptieren komplexe Selektorlisten, also Listen kommagetrennter Selektoren, als Parameter. Damit lässt sich die Spezifität eines Selektors erhöhen:

```css
:is(p, #fakeId) {
  /* 1-0-0 */
}
h1:has(+ h2, > #fakeId) {
  /* 1-0-1 */
}
p:not(#fakeId) {
  /* 1-0-1 */
}
div:not(.inner, #fakeId) p {
  /* 1-0-2 */
}
```

Im obigen CSS-Codeblock wurde `#fakeId` in die Selektoren aufgenommen. Dieses `#fakeId` erhöht die Spezifität jedes Absatzes um `1-0-0`.

Beim Erstellen komplexer Selektorlisten mit [CSS-Verschachtelung](/de/docs/Web/CSS/Guides/Nesting) verhält sich dies genauso wie bei der Pseudoklasse `:is()`.

```css
p,
#fakeId {
  span {
    /* 1-0-1 */
  }
}
```

Im obigen Codeblock wird die Spezifität des komplexen Selektors `p, #fakeId` durch `#fakeId` und zusätzlich durch `span` bestimmt. Dadurch ergibt sich sowohl für `p span` als auch für `#fakeId span` eine Spezifität von `1-0-1`. Das entspricht der Spezifität des Selektors `:is(p, #fakeId) span`.

Im Allgemeinen sollten Sie die Spezifität möglichst gering halten. Wenn Sie sie für ein Element aus einem bestimmten Grund erhöhen müssen, können diese drei Pseudoklassen helfen.

```css
a:not(#fakeId#fakeId#fakeID) {
  color: blue; /* 3-0-1 */
}
```

In diesem Beispiel sind alle Links blau, sofern sie nicht durch eine Link-Deklaration mit mindestens drei IDs, eine Farbdeklaration für ein passendes `a` mit dem [`!important`-Flag](#the_!important_exception) oder eine Farbdeklaration in einem [Inline-Stil](#inline-stile) des Links überschrieben werden. Wenn Sie eine solche Technik verwenden, erklären Sie in einem Kommentar, warum dieser Workaround nötig war.

### Inline-Stile

Inline-Stile, die einem Element hinzugefügt werden, etwa `style="font-weight: bold;"`, überschreiben immer alle normalen Stile in Autoren-Stylesheets. Man kann sie sich daher als Stile mit der höchsten Spezifität vorstellen. Betrachten Sie Inline-Stile als Stile mit einer Spezifität von `1-0-0-0`.

Inline-Stile lassen sich nur mit `!important` überschreiben.

Viele JavaScript-Frameworks und -Bibliotheken fügen Inline-Stile hinzu. Eine Möglichkeit, diese zu überschreiben, ist `!important` in Verbindung mit einem sehr gezielten Selektor, etwa einem Attributselektor, der den Inline-Stil verwendet.

```html
<p style="color: purple">…</p>
```

```css
p[style*="purple"] {
  color: rebeccapurple !important;
}
```

Fügen Sie bei jeder Verwendung des Important-Flags einen Kommentar hinzu, damit Personen, die den Code später pflegen, verstehen, warum dieses CSS-Antipattern verwendet wurde.

### Die Ausnahme `!important`

Als wichtig markierte CSS-Deklarationen überschreiben alle anderen Deklarationen innerhalb derselben Kaskadenebene und desselben Ursprungs. Obwohl [`!important`](/de/docs/Web/CSS/Reference/Values/important) technisch gesehen nichts mit Spezifität zu tun hat, steht es in direktem Zusammenhang mit Spezifität und Kaskade. Es kehrt die [Kaskadenreihenfolge](/de/docs/Web/CSS/Guides/Cascade/Introduction) der Stylesheets um.

Wenn Deklarationen desselben Ursprungs und derselben Kaskadenebene in Konflikt stehen und ein Eigenschaftswert das `!important`-Flag trägt, wird die wichtige Deklaration unabhängig von der Spezifität angewendet. Treffen mehrere konkurrierende Deklarationen desselben Ursprungs und derselben Kaskadenebene mit dem `!important`-Flag auf dasselbe Element zu, wird die Deklaration mit der höheren Spezifität angewendet.

`!important` zu verwenden, um Spezifität zu übersteuern, gilt als **schlechte Praxis** und sollte zu diesem Zweck vermieden werden. Wer Spezifität und Kaskade versteht und gezielt einsetzt, benötigt das `!important`-Flag nicht.

Statt `!important` zu verwenden, um fremdes CSS zu überschreiben, etwa aus externen Bibliotheken wie Bootstrap oder normalize.css, importieren Sie die Drittanbieter-Stylesheets direkt in [Kaskadenebenen](/de/docs/Web/CSS/Reference/At-rules/@layer). Falls Sie `!important` in Ihrem CSS verwenden müssen, kommentieren Sie dies, damit Personen, die den Code später pflegen, wissen, warum die Deklaration als wichtig markiert wurde und nicht überschrieben werden sollte. Verwenden Sie `!important` keinesfalls beim Schreiben von Plugins oder Frameworks, die andere Entwickler einbinden müssen, ohne darüber Kontrolle zu haben.

### Die Ausnahme `:where()`

Die Pseudoklasse zur Anpassung der Spezifität {{cssxref(":where()")}} erhält immer die Spezifität null, `0-0-0`. So lassen sich CSS-Selektoren erstellen, die sehr genau auf ein Element zielen, ohne die Spezifität zu erhöhen.

Wenn Sie CSS für Dritte erstellen, die Ihr CSS nicht bearbeiten können, gilt eine möglichst geringe Spezifität als gute Praxis. Wenn Ihr Theme beispielsweise folgendes CSS enthält:

```css
:where(#defaultTheme) a {
  /* 0-0-1 */
  color: red;
}
```

Dann können Entwickler, die das Widget einbinden, die Linkfarbe problemlos allein mit Typselektoren überschreiben.

```css
footer a {
  /* 0-0-2 */
  color: blue;
}
```

### Wie `@scope`-Blöcke die Spezifität beeinflussen

Ein Regelsatz innerhalb eines {{cssxref("@scope")}}-Blocks verändert die Spezifität seines Selektors nicht, unabhängig von den Selektoren, die für [Wurzel und Grenze des Geltungsbereichs](/de/docs/Web/CSS/Reference/At-rules/@scope#syntax) verwendet werden.
Wenn Sie jedoch die Pseudoklasse {{cssxref(":scope")}} ausdrücklich hinzufügen, müssen Sie sie bei der Berechnung der Spezifität berücksichtigen.
Wie alle gewöhnlichen Pseudoklassen hat `:scope` eine Spezifität von 0-1-0. Zum Beispiel:

```css
@scope (.article-body) {
  /* :scope img has a specificity of 0-1-0 + 0-0-1 = 0-1-1 */
  :scope img {
  }
}
```

Weitere Informationen finden Sie unter [Spezifität in `@scope`](/de/docs/Web/CSS/Reference/At-rules/@scope#specificity_in_scope).

## Tipps zum Umgang mit Spezifitätsproblemen

Statt `!important` zu verwenden, sollten Sie Kaskadenebenen einsetzen und die Spezifität in Ihrem gesamten CSS gering halten. So lassen sich Stile leicht durch etwas spezifischere Regeln überschreiben. Semantisches HTML bietet geeignete Anknüpfungspunkte für die Gestaltung.

### Selektoren gezielter machen – mit und ohne Erhöhung der Spezifität

Wenn Sie vor dem ausgewählten Element den Dokumentabschnitt angeben, den Sie gestalten möchten, wird die Regel gezielter. Je nachdem, wie Sie dies tun, erhöhen Sie die Spezifität gar nicht, etwas oder deutlich:

```html
<main id="myContent">
  <h1>Text</h1>
</main>
```

```css
#myContent h1 {
  color: green; /* 1-0-1 */
}
[id="myContent"] h1 {
  color: yellow; /* 0-1-1 */
}
:where(#myContent) h1 {
  color: blue; /* 0-0-1 */
}
```

Unabhängig von der Reihenfolge wird die Überschrift grün, da diese Regel die höchste Spezifität hat.

#### ID-Spezifität verringern

Die Spezifität hängt von der Form eines Selektors ab. Wenn Sie die `id` eines Elements als Attributselektor statt als ID-Selektor angeben, können Sie ein Element gezielter auswählen, ohne die Spezifität übermäßig zu erhöhen. Im vorherigen Beispiel zählt der Selektor `[id="myContent"]` bei der Bestimmung der Spezifität als Attributselektor, obwohl er eine ID auswählt.

Sie können auch die `id` oder einen beliebigen Teil eines Selektors als Parameter in die Pseudoklasse `:where()` aufnehmen. Damit lässt sich ein Selektor gezielter machen, ohne seine Spezifität zu erhöhen.

### Spezifität durch Verdoppeln von Selektoren erhöhen

Als Sonderfall können Sie die Spezifität erhöhen, indem Sie Komponenten der _CLASS_- oder _ID_-Spalte verdoppeln. Werden ID-, Klassen-, Pseudoklassen- oder Attributselektoren innerhalb eines zusammengesetzten Selektors verdoppelt, erhöht dies die Spezifität. Das kann beim Überschreiben sehr spezifischer Selektoren helfen, die Sie nicht ändern können.

```css
#myId#myId#myId span {
  /* 3-0-1 */
}
.myClass.myClass.myClass span {
  /* 0-3-1 */
}
```

Setzen Sie dies, wenn überhaupt, nur sparsam ein. Wenn Sie Selektoren verdoppeln, kommentieren Sie Ihr CSS immer entsprechend.

Mit `:is()` und `:not()` sowie `:has()` können Sie die Spezifität auch dann erhöhen, wenn Sie einem übergeordneten Element keine `id` hinzufügen können:

```css
:not(#fakeID#fakeId#fakeID) span {
  /* 3-0-1 */
}
:is(#fakeID#fakeId#fakeID, span) {
  /* 3-0-0 */
}
```

### Vorrang gegenüber CSS von Drittanbietern

Kaskadenebenen sind der übliche Weg, um einem Satz von Stilen Vorrang vor einem anderen zu geben – ganz ohne Spezifität! Normale, also nicht wichtige Autorenstile, die in Kaskadenebenen importiert werden, haben einen geringeren Vorrang als Autorenstile außerhalb von Ebenen.

Wenn Stile aus einem Stylesheet stammen, das Sie nicht bearbeiten können oder nicht verstehen, und Sie diese überschreiben müssen, können Sie die nicht kontrollierten Stile in eine Kaskadenebene importieren. Stile in später deklarierten Ebenen haben Vorrang; Stile außerhalb von Ebenen haben wiederum Vorrang vor allen Stilen in Ebenen desselben Ursprungs.

Wenn zwei Selektoren aus verschiedenen Ebenen auf dasselbe Element zutreffen, entscheiden Ursprung und Wichtigkeit über den Vorrang. Die Spezifität des Selektors im unterlegenen Stylesheet ist unerheblich.

```css
@import "TW.css" layer();
p,
p * {
  font-size: 1rem;
}
```

Im obigen Beispiel hat der gesamte Absatztext einschließlich verschachtelter Inhalte die Größe `1rem`, unabhängig davon, wie viele Klassennamen der Absätze auf das TW-Stylesheet zutreffen.

### `!important` vermeiden und überschreiben

Am besten verzichten Sie auf `!important`. Die obigen Erläuterungen zur Spezifität sollten Ihnen helfen, das Flag zu vermeiden oder vorhandene Verwendungen zu entfernen.

Um auf `!important` verzichten zu können, haben Sie folgende Möglichkeiten:

- Erhöhen Sie die Spezifität des Selektors der bisher mit `!important` versehenen Deklaration, sodass sie höher ist als die der anderen Deklarationen.
- Geben Sie ihr dieselbe Spezifität und platzieren Sie sie nach der Deklaration, die sie überschreiben soll.
- Verringern Sie die Spezifität des Selektors, den Sie überschreiben möchten.

Alle diese Methoden werden in den vorherigen Abschnitten behandelt.

Wenn Sie `!important`-Flags nicht aus einem Autoren-Stylesheet entfernen können, lassen sich die wichtigen Stile nur mit `!important` überschreiben. Eine [Kaskadenebene](/de/docs/Web/CSS/Reference/At-rules/@layer) für wichtige überschreibende Deklarationen ist dafür eine gute Lösung. Es gibt zwei Möglichkeiten:

#### Methode 1

1. Erstellen Sie ein separates, kurzes Stylesheet, das ausschließlich wichtige Deklarationen enthält, mit denen Sie nicht entfernbare wichtige Deklarationen gezielt überschreiben.
2. Importieren Sie dieses Stylesheet mit `layer()` als ersten Import in Ihrem CSS. Platzieren Sie die `@import`-Anweisung vor der Einbindung anderer Stylesheets. So stellen Sie sicher, dass die wichtigen überschreibenden Deklarationen als erste Ebene importiert werden.

```css
@import "importantOverrides.css" layer();
```

#### Methode 2

1. Erstellen Sie am Anfang Ihrer Stylesheet-Deklarationen eine benannte Kaskadenebene:

   ```css
   @layer importantOverrides;
   ```

2. Deklarieren Sie jede wichtige überschreibende Deklaration, die Sie benötigen, innerhalb dieser benannten Ebene. Deklarieren Sie dort ausschließlich wichtige Regeln.

   ```css
   [id="myElement"] p {
     /* normal styles here */
   }
   @layer importantOverrides {
     [id="myElement"] p {
       /* important style here */
     }
   }
   ```

Die Spezifität des Selektors einer wichtigen Regel innerhalb der Ebene kann gering sein, solange er auf das Element zutrifft, dessen Stil Sie überschreiben möchten. Normale Ebenen sollten außerhalb dieser Ebene deklariert werden, da Stile in Ebenen einen geringeren Vorrang haben als Stile außerhalb von Ebenen.

### Nähe im Dokumentbaum spielt keine Rolle

Wie nah ein Element an anderen Elementen liegt, auf die sich ein bestimmter Selektor bezieht, beeinflusst die Spezifität nicht.

```css
body h1 {
  color: green;
}

html h1 {
  color: purple;
}
```

Die `<h1>`-Elemente werden violett, weil bei gleicher Spezifität der zuletzt deklarierte Selektor Vorrang hat.

### Direkt ausgewählte Elemente gegenüber geerbten Stilen

Stile für ein direkt ausgewähltes Element haben immer Vorrang vor geerbten Stilen, unabhängig von der Spezifität der vererbenden Regel. Betrachten Sie folgendes CSS und HTML:

```css
#parent {
  color: green;
}

h1 {
  color: purple;
}
```

```html
<html lang="en">
  <body id="parent">
    <h1>Here is a title!</h1>
  </body>
</html>
```

Das `h1` wird violett, weil der Selektor `h1` das Element direkt auswählt, während Grün von den Deklarationen für `#parent` geerbt wird.

## Beispiele

Im folgenden CSS wählen drei Selektoren {{HTMLElement('input')}}-Elemente aus, um eine Farbe festzulegen. Für ein bestimmtes Eingabefeld wird die Spezifität der vorrangigen Farbdeklaration durch den zutreffenden Selektor mit der höchsten Gewichtung bestimmt:

```css
#myElement input.myClass {
  color: red;
} /* 1-1-1 */
input[type="password"]:required {
  color: blue;
} /* 0-2-1 */
html body main input {
  color: green;
} /* 0-0-4 */
```

Wenn alle obigen Selektoren dasselbe Eingabefeld auswählen, wird es rot, da die erste Deklaration den höchsten Wert in der _ID_-Spalte hat.

Der letzte Selektor hat vier _TYPE_-Komponenten. Er hat damit zwar den höchsten Zahlenwert, doch unabhängig davon, wie viele Elemente und Pseudoelemente enthalten sind – selbst bei 150 – haben TYPE-Komponenten niemals Vorrang vor _CLASS_-Komponenten. Die Spaltenwerte werden von links nach rechts verglichen; die nächste Spalte wird nur berücksichtigt, wenn die vorherigen Werte gleich sind.

Würden wir den ID-Selektor im obigen Beispiel in einen Attributselektor umwandeln, hätten die ersten beiden Selektoren dieselbe Spezifität:

```css
[id="myElement"] input.myClass {
  color: red;
} /* 0-2-1 */
input[type="password"]:required {
  color: blue;
} /* 0-2-1 */
```

Wenn mehrere Deklarationen dieselbe Spezifität haben, wird die letzte Deklaration im CSS auf das Element angewendet. Treffen beide Selektoren auf dasselbe {{HTMLElement('input')}} zu, wird die Farbe Blau sein.

## Zusätzliche Hinweise

Einige wichtige Punkte zur Spezifität:

1. Spezifität kommt nur dann zum Tragen, wenn mehrere Deklarationen derselben Kaskadenebene und desselben Ursprungs dasselbe Element auswählen. Sie ist nur für Deklarationen mit derselben Wichtigkeit, demselben Ursprung und derselben [Kaskadenebene](/de/docs/Web/CSS/Reference/At-rules/@layer) relevant. Wenn zutreffende Selektoren verschiedenen Ursprüngen angehören, bestimmt die [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction), welche Deklaration Vorrang hat.

2. Wenn zwei Selektoren derselben Kaskadenebene und desselben Ursprungs dieselbe Spezifität haben, wird als Nächstes die Nähe zum Geltungsbereich berechnet. Der Regelsatz mit der geringsten Entfernung zum Geltungsbereich gewinnt. Weitere Einzelheiten und ein Beispiel finden Sie unter [Wie Konflikte bei `@scope` aufgelöst werden](/de/docs/Web/CSS/Reference/At-rules/@scope#how_scope_conflicts_are_resolved).

3. Wenn auch die Nähe zum Geltungsbereich bei beiden Selektoren gleich ist, entscheidet die Reihenfolge im Quelltext. Sind alle anderen Faktoren gleich, gewinnt der letzte Selektor.

4. Gemäß den CSS-Regeln haben [direkt ausgewählte Elemente](#direkt_ausgewählte_elemente_gegenüber_geerbten_stilen) immer Vorrang vor Regeln, die ein Element von einem Vorfahren erbt.

5. Die [Nähe von Elementen](#nähe_im_dokumentbaum_spielt_keine_rolle) im Dokumentbaum hat keinen Einfluss auf die Spezifität.

## Spezifikationen

{{Specifications}}

## Siehe auch

- Modul [CSS-Kaskade und Vererbung](/de/docs/Web/CSS/Guides/Cascade)
- [Lernen: Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity_2)
- [Lernen: Kaskadenebenen](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- Modul [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax)
- [Einführung in die CSS-Syntax: Deklarationen, Regelsätze und Anweisungen](/de/docs/Web/CSS/Guides/Syntax/Introduction)
- [CSS-Fehlerbehandlung](/de/docs/Web/CSS/Guides/Syntax/Error_handling)
- [At-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules)
- [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
- Werte: [Anfangswert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value), [berechneter Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value), [verwendeter Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value) und [tatsächlicher Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value)
- [Syntax zur Definition von Werten](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
- Modul [CSS-Verschachtelung](/de/docs/Web/CSS/Guides/Nesting)
- [Spezifitätsrechner](https://specificity.keegan.st/) von Keegan Street: Eine interaktive Website zum Testen und Verstehen eigener CSS-Regeln
- [SpeciFISHity](https://specifishity.com/) auf specifishity.com: Eine unterhaltsame Möglichkeit, CSS-Spezifität kennenzulernen
- [_ID-CLASS-TYPE_-Übung](https://estelle.github.io/CSS/selectors/exercises/specificity.html): Ein Spezifitätsquiz von Estelle Weyl
