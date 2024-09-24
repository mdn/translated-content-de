---
title: Spezifität
slug: Web/CSS/Specificity
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{CSSRef}}

**Spezifität** ist der Algorithmus, den Browser verwenden, um festzustellen, welche [CSS-Deklaration](/de/docs/Learn/CSS/First_steps/What_is_CSS#css_syntax) für ein Element am relevantesten ist, was wiederum den Eigenschaftswert bestimmt, der auf das Element angewendet wird. Der Spezifitätsalgorithmus berechnet das Gewicht eines [CSS-Selektors](/de/docs/Web/CSS/Reference#selectors), um zu bestimmen, welche Regel aus konkurrierenden CSS-Deklarationen auf ein Element angewendet wird.

> [!NOTE]
> Browser berücksichtigen Spezifität **nachdem** der [Ursprung und die Wichtigkeit der Kaskade](/de/docs/Web/CSS/Cascade) bestimmt wurden. Mit anderen Worten, bei konkurrierenden Eigenschaftsdeklarationen ist die Spezifität nur zwischen Selektoren aus dem einen [Ursprung und der Ebene der Kaskade](/de/docs/Web/CSS/@layer) relevant und wird verglichen, die für die Eigenschaft Vorrang hat. [Der Umkreisnähe](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) und die Reihenfolge des Auftretens werden relevant, wenn die Selektorspezifitäten der konkurrierenden Deklarationen in der vorrangigen Kaskadenschicht gleich sind.

## Wie wird Spezifität berechnet?

Spezifität ist ein Algorithmus, der das Gewicht berechnet, das auf eine gegebene CSS-Deklaration angewendet wird. Das Gewicht wird durch die Anzahl der [Selektoren jeder Gewichtskategorie](#selektor-gewichtskategorien) im Selektor bestimmt, der mit dem Element (oder Pseudo-Element) übereinstimmt. Wenn es zwei oder mehr Deklarationen gibt, die unterschiedliche Eigenschaftswerte für dasselbe Element bereitstellen, wird der Deklarationswert im Stilblock mit dem übereinstimmenden Selektor mit dem größten algorithmischen Gewicht angewendet.

Der Spezifitätsalgorithmus ist im Wesentlichen ein dreispaltiger Wert aus drei Kategorien oder Gewichten - ID, CLASS und TYPE - entsprechend den drei Arten von Selektoren. Der Wert stellt die Anzahl der Selektorkomponenten in jeder Gewichtskategorie dar und wird als _ID - CLASS - TYPE_ geschrieben. Die drei Spalten werden erstellt, indem die Anzahl der Selektorkomponenten für jede Selektor-Gewichtskategorie in den Selektoren gezählt wird, die mit dem Element übereinstimmen.

### Selektor-Gewichtskategorien

Die Selektor-Gewichtskategorien sind hier in der Reihenfolge abnehmender Spezifität aufgeführt:

- ID-Spalte
  - : Beinhaltet nur [ID-Selektoren](/de/docs/Web/CSS/ID_selectors), wie `#example`. Für jede ID in einem übereinstimmenden Selektor addieren Sie 1-0-0 zum Gewichtswert.
- CLASS-Spalte
  - : Beinhaltet [Klassenselektoren](/de/docs/Web/CSS/Class_selectors), wie `.myClass`, Attributselektoren wie `[type="radio"]` und `[lang|="fr"]`, und Pseudo-Klassen wie `:hover`, `:nth-of-type(3n)` und `:required`. Für jede Klasse, jeden Attributselektor oder jede Pseudo-Klasse in einem übereinstimmenden Selektor addieren Sie 0-1-0 zum Gewichtswert.
- TYPE-Spalte
  - : Beinhaltet [Typselektoren](/de/docs/Web/CSS/Type_selectors), wie `p`, `h1` und `td`, sowie Pseudo-Elemente wie `::before`, `::placeholder` und alle anderen Selektoren mit Doppelpunktnotation. Für jeden Typ oder jedes Pseudo-Element in einem übereinstimmenden Selektor addieren Sie 0-0-1 zum Gewichtswert.
- Kein Wert
  - : Der universelle Selektor ({{CSSxRef("Universal_selectors", "*")}}) und die Pseudo-Klasse {{CSSxRef(":where", ":where()")}} und ihre Parameter werden beim Berechnen des Gewichts nicht gezählt, sodass ihr Wert 0-0-0 beträgt, aber sie passen zu Elementen. Diese Selektoren haben keinen Einfluss auf den Spezifitätsgewichtswert.

Kombinatoren, wie {{CSSxRef("Next-sibling_combinator", "+")}}, {{CSSxRef("Child_combinator", "&gt;")}}, {{CSSxRef("Subsequent-sibling_combinator", "~")}}, [" "](/de/docs/Web/CSS/Descendant_combinator) und {{CSSxRef("Column_combinator", "||")}}, können einen Selektor spezifischer machen, was ausgewählt wird, aber sie fügen dem Spezifitätsgewicht keinen Wert hinzu.

Der `&`-Verschachtelungskombinator fügt kein Spezifitätsgewicht hinzu, aber verschachtelte Regeln tun dies. In Bezug auf Spezifität und Funktionalität ist die Verschachtelung der {{CSSxRef(":is", ":is()")}} Pseudo-Klasse sehr ähnlich.

Wie bei der Verschachtelung fügen die {{CSSxRef(":is", ":is()")}}, {{CSSxRef(":has", ":has()")}} und Negation ({{CSSxRef(":not", ":not()")}}) Pseudo-Klassen selbst kein Gewicht hinzu. Die Parameter in diesen Selektoren jedoch tun es. Das Spezifitätsgewicht eines jeden kommt vom Selektorparameter in der Liste der Selektoren mit der höchsten Spezifität. Ebenso wird bei verschachtelten Selektoren das hinzugefügte Spezifitätsgewicht durch die Komponente des verschachtelten Selektors in der durch Kommas getrennten Liste der verschachtelten Selektoren mit der höchsten Spezifität bestimmt.

Die Ausnahmen [`:not()`, `:is()`, `:has()` und CSS-Verschachtelung](#the_is_not_has_and_css_nesting_exceptions) werden unten besprochen.

#### Übereinstimmender Selektor

Das Spezifitätsgewicht kommt vom übereinstimmenden Selektor. Nehmen Sie diesen CSS-Selektor mit drei durch Kommas getrennten Selektoren als Beispiel:

```css
[type="password"],
input:focus,
:root #myApp input:required {
  color: blue;
}
```

Der `[type="password"]`-Selektor in der obigen Selektorliste mit einem Spezifitätsgewicht von `0-1-0` wendet die `color: blue`-Deklaration auf alle Passworteingabetypen an.

Alle Eingaben, unabhängig vom Typ, die den Fokus erhalten, passen zum zweiten Selektor in der Liste, `input:focus`, mit einem Spezifitätsgewicht von `0-1-1`; dieses Gewicht setzt sich aus der `:focus`-Pseudo-Klasse (0-1-0) und dem `input`-Typ (0-0-1) zusammen. Wenn der Passwort-Eingabetyp im Fokus steht, passt er zu `input:focus` und das Spezifitätsgewicht für die `color: blue`-Stildeklaration beträgt `0-1-1`. Wenn diese Passworteingabe keinen Fokus hat, bleibt das Spezifitätsgewicht bei `0-1-0`.

Die Spezifität für eine erforderliche Eingabe, die in einem Element mit dem Attribut `id="myApp"` verschachtelt ist, beträgt `1-2-1` auf der Basis eines IDs, zwei Pseudo-Klassen und einem Elementtyp.

Wenn der Passwort-Eingabetyp mit `required` in einem Element mit `id="myApp"` festgelegt ist, beträgt das Spezifitätsgewicht `1-2-1`, basierend auf einer ID, zwei Pseudo-Klassen und einem Elementtyp, unabhängig davon, ob er den Fokus hat oder nicht. Warum ist das Spezifitätsgewicht in diesem Fall `1-2-1` anstelle von `0-1-1` oder `0-1-0`? Weil das Spezifitätsgewicht vom übereinstimmenden Selektor mit dem höchsten Spezifitätsgewicht stammt. Das Gewicht wird durch den Vergleich der Werte in den drei Spalten von links nach rechts bestimmt.

```css
[type="password"]             /* 0-1-0 */
input:focus                   /* 0-1-1 */
:root #myApp input:required   /* 1-2-1 */
```

### Drei-Säulen-Vergleich

Sobald die Spezifitätswerte der relevanten Selektoren bestimmt sind, werden die Anzahl der Selektorkomponenten in jeder Spalte von links nach rechts verglichen.

```css
#myElement {
  color: green; /* 1-0-0  - GEWINNT!! */
}
.bodyClass .sectionClass .parentClass [id="myElement"] {
  color: yellow; /* 0-4-0 */
}
```

Die erste Spalte ist der Wert der _ID_-Komponente, die die Anzahl der IDs in jedem Selektor angibt. Die Zahlen in den _ID_-Spalten der konkurrierenden Selektoren werden verglichen. Der Selektor mit dem höheren Wert in der _ID_-Spalte gewinnt, unabhängig von den Werten in den anderen Spalten. Im obigen Beispiel spielt es keine Rolle, dass der gelbe Selektor mehr Komponenten insgesamt hat, nur der Wert der ersten Spalte zählt.

Wenn die Zahl in den _ID_-Spalten der konkurrierenden Selektoren gleich ist, wird die nächste Spalte, _CLASS_, verglichen, wie unten gezeigt.

```css
#myElement {
  color: yellow; /* 1-0-0 */
}
#myApp [id="myElement"] {
  color: green; /* 1-1-0  - GEWINNT!! */
}
```

Die _CLASS_-Spalte ist die Anzahl der Klassennamen, Attributselektoren und Pseudo-Klassen im Selektor. Wenn der _ID_-Spaltenwert gleich ist, gewinnt der Selektor mit dem höheren Wert in der _CLASS_-Spalte, unabhängig vom Wert in der _TYPE_-Spalte. Dies wird im folgenden Beispiel gezeigt.

```css
:root input {
  color: green; /* 0-1-1 - GEWINNT, weil CLASS-Spalte größer ist */
}
html body main input {
  color: yellow; /* 0-0-4 */
}
```

Wenn die Zahlen in den _CLASS_- und _ID_-Spalten in konkurrierenden Selektoren gleich sind, wird die _TYPE_-Spalte relevant. Die _TYPE_-Spalte ist die Anzahl der Elementtypen und Pseudo-Elemente im Selektor. Wenn die ersten beiden Spalten denselben Wert haben, gewinnt der Selektor mit der höheren Zahl in der _TYPE_-Spalte.

Wenn die konkurrierenden Selektoren die gleichen Werte in allen drei Spalten haben, kommt die Proximitätsregel ins Spiel, bei der die zuletzt deklarierte Stilregel Vorrang hat.

```css
input.myClass {
  color: yellow; /* 0-1-1 */
}
:root input {
  color: green; /* 0-1-1 GEWINNT, weil es später kommt */
}
```

### Die Ausnahmen `:is()`, `:not()`, `:has()` und CSS-Verschachtelung

Die Übereinstimmpseudo-Klasse {{CSSxRef(":is", ":is()")}}, die relationale Pseudo-Klasse {{CSSxRef(":has", ":has()")}} und die Negations-Pseudo-Klasse {{CSSxRef(":not", ":not()")}} werden _nicht_ als Pseudo-Klassen in der Spezifitätsgewichtberechnung betrachtet. Sie selbst fügen der Spezifitätsgleichung kein Gewicht hinzu. Die Selektorparameter, die in die Pseudo-Klasse übergeben werden, sind jedoch Teil des Spezifizitätsalgorithmus; das Gewicht der Übereinstimmung und der Negations-Pseudo-Klasse in der Spezifitätswertberechnung ist das Gewicht des Parameters [Gewicht](#selektor-gewichtskategorien).

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

Beachten Sie, dass in den obigen CSS-Paarungen das Spezifitätsgewicht, das von den Pseudo-Klassen `:is()`, `:has()` und `:not()` bereitgestellt wird, der Wert des Selektorparameters und nicht der Pseudo-Klasse ist.

Alle drei dieser Pseudo-Klassen akzeptieren komplexe Selektorlisten, eine Liste von durch Kommas getrennten Selektoren, als Parameter. Diese Funktion kann verwendet werden, um die Spezifität eines Selektors zu erhöhen:

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

Im obigen CSS-Codeblock haben wir `#fakeId` in die Selektoren aufgenommen. Dieser `#fakeId` fügt jeder Paragraphen ein `1-0-0` zum Spezifitätsgewicht hinzu.

Wenn Sie komplexe Selektorenlisten mit [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting) erstellen, verhält sich dies genau wie die `:is()`-Pseudo-Klasse.

```css
p,
#fakeId {
  span {
    /* 1-0-1 */
  }
}
```

Im obigen Codeblock wird die Komplexität des Selektors `p, #fakeId` aus `#fakeId` und auch dem `span`-Selektor, sodass dies eine Spezifität von `1-0-1` für sowohl `p span` als auch `#fakeId span` bildet. Dies entspricht der Spezifizität des `:is(p, #fakeId) span`-Selektors.

Im Allgemeinen möchten Sie die Spezifität auf ein Minimum halten. Wenn Sie jedoch die Spezifität eines Elements aus einem bestimmten Grund erhöhen müssen, können diese drei Pseudo-Klassen helfen.

```css
a:not(#fakeId#fakeId#fakeID) {
  color: blue; /* 3-0-1 */
}
```

In diesem Beispiel werden alle Links blau sein, es sei denn, sie werden von einer Link-Deklaration mit 3 oder mehr IDs überschrieben, ein Farbwert, der eine `!important`-Flagge enthält, oder wenn der Link eine Inline-Style-Farbdeklaration hat. Wenn Sie eine solche Technik verwenden, fügen Sie einen Kommentar hinzu, um zu erklären, warum der Trick benötigt wurde.

### Inline-Stile

Inlinestile, die einem Element hinzugefügt werden (z.B. `style="font-weight: bold;"`), überschreiben immer alle normalen Stile in Autoren-Stylesheets und können daher als mit der höchsten Spezifität betrachtet werden. Betrachten Sie Inline-Stile als hätten sie ein Spezifitätsgewicht von `1-0-0-0`.

Der einzige Weg, Inline-Stile zu überschreiben, besteht darin, `!important` zu verwenden.

Viele JavaScript-Frameworks und -Bibliotheken fügen Inline-Stile hinzu. Die Verwendung von `!important` mit einem sehr gezielten Selektor, wie einem Attributselektor, der den Inlinestil verwendet, ist eine Möglichkeit, diese Inline-Stile zu überschreiben.

```html
<p style="color: purple">…</p>
```

```css
p[style*="purple"] {
  color: rebeccapurple !important;
}
```

Stellen Sie sicher, dass Sie mit jeder Aufnahme der wichtigen Flagge einen Kommentar hinzufügen, damit Codepfleger verstehen, warum ein CSS-Antimuster verwendet wurde.

### Die Ausnahme `!important`

CSS-Deklarationen, die als wichtig markiert sind, überschreiben alle anderen Deklarationen innerhalb derselben Kaskadenschicht und Herkunft. Obwohl technisch gesehen, [`!important`](/de/docs/Web/CSS/important) nichts mit Spezifität zu tun hat, interagiert es direkt mit der Spezifität und der Kaskade. Es kehrt die Kaskadenordnung der Stylesheets um.

Wenn Deklarationen aus demselben Ursprung und derselben Kaskadenschicht in Konflikt stehen und ein Eigenschaftswert das `!important`-Flag gesetzt hat, wird die wichtige Deklaration angewendet, unabhängig von der Spezifität. Wenn widersprüchliche Deklarationen aus demselben Ursprung und derselben Kaskadenschicht mit dem `!important`-Flag auf dasselbe Element angewendet werden, wird die Deklaration mit einer höheren Spezifität angewendet.

Die Verwendung von `!important`, um die Spezifität zu überschreiben, wird als **schlechte Praxis** angesehen und sollte zu diesem Zweck vermieden werden. Spezifität und die Kaskade zu verstehen und effektiv zu nutzen, kann jegliche Notwendigkeit für das `!important`-Flag beseitigen.

Anstatt `!important` zu verwenden, um fremde CSS (von externen Bibliotheken wie Bootstrap oder normalize.css) zu überschreiben, importieren Sie die Drittanbieter-Skripte direkt in die [Kaskadenschichten](/de/docs/Web/CSS/@layer). Wenn Sie `!important` in Ihrem CSS verwenden müssen, kommentieren Sie Ihre Verwendung, damit zukünftige Codepfleger wissen, warum die Deklaration als wichtig markiert wurde und nicht überschrieben werden sollte. Verwenden Sie es jedoch definitiv nicht, wenn Sie Plugins oder Frameworks schreiben, die andere Entwickler einbinden müssen, ohne in der Lage zu sein, sie zu kontrollieren.

### Die Ausnahme `:where()`

Die Spezifitätsanpassungspseudo-Klasse {{CSSxRef(":where", ":where()")}} hat immer ihre Spezifität auf Null, `0-0-0`, ersetzt. Sie ermöglicht es, CSS-Selektoren sehr spezifisch darin zu machen, welches Element gezielt wird, ohne eine Erhöhung der Spezifität.

Beim Erstellen von Drittanbieter-CSS, das von Entwicklern verwendet werden soll, die keinen Zugriff darauf haben, um Ihr CSS zu bearbeiten, gilt es als eine gute Praxis, CSS mit der niedrigstmöglichen Spezifität zu erstellen. Zum Beispiel, wenn Ihr Thema das folgende CSS enthält:

```css
:where(#defaultTheme) a {
  /* 0-0-1 */
  color: red;
}
```

Dann kann der Entwickler, der das Widget implementiert, die Linkfarbe leicht überschreiben, indem er nur Typselektoren verwendet.

```css
footer a {
  /* 0-0-2 */
  color: blue;
}
```

### Wie `@scope`-Blöcke die Spezifität beeinflussen

Das Einfügen eines Regelsets in einen `@scope`-Block beeinflusst nicht die Spezifität seines Selektors, unabhängig von den Selektoren, die innerhalb der Scope-Root und des Limits verwendet werden. Zum Beispiel:

```css
@scope (.article-body) {
  /* img hat eine Spezifität von 0-0-1, wie erwartet */
  img { ... }
}
```

Wenn Sie sich jedoch entscheiden, die `:scope`-Pseudo-Klasse explizit zu Ihren selektierten Selektoren hinzuzufügen, müssen Sie sie bei der Berechnung ihrer Spezifität berücksichtigen. `:scope`, wie alle regulären Pseudo-Klassen, hat eine Spezifität von 0-1-0. Zum Beispiel:

```css
@scope (.article-body) {
  /* :scope img hat eine Spezifität von 0-1-0 + 0-0-1 = 0-1-1 */
  :scope img { ... }
}
```

Wenn Sie den `&`-Selektor innerhalb eines `@scope`-Blocks verwenden, stellt `&` den Scope-Root-Selektor dar; er wird intern in diesen Selektor umgeschrieben, der in einen {{cssxref(":is", ":is()")}}-Selektor eingebunden ist. Zum Beispiel in:

```css
@scope (figure, #primary) {
  & img { ... }
}
```

`& img` entspricht `:is(figure, #primary) img`.

Da `:is()` die Spezifität seines spezifischsten Arguments annimmt (`#primary` in diesem Fall), ist die Spezifität des scopen `& img` Selektors 1-0-0 + 0-0-1 = 1-0-1.

## Tipps zum Umgang mit Spezifitätsproblemen

Anstatt `!important` zu verwenden, sollten Sie Kaskadenschichten verwenden und überall in Ihrem CSS Spezifität mit geringem Gewicht verwenden, sodass Stile leicht mit etwas spezifischeren Regeln überschrieben werden können. Die Verwendung von semantischem HTML hilft dabei, Anker zu bieten, von denen aus das Styling angewendet wird.

### Selektoren spezifisch machen, ohne die Spezifität zu erhöhen

Indem Sie den Abschnitt des Dokuments angeben, den Sie vor dem Element, das Sie auswählen, stylen möchten, wird die Regel spezifischer. Je nachdem, wie Sie es hinzufügen, können Sie einige, viele oder keine Spezifität hinzufügen, wie unten gezeigt:

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

Unabhängig von der Reihenfolge wird die Überschrift grün sein, da diese Regel die spezifischste ist.

#### Reduzierung der ID-Spezifität

Die Spezifität basiert auf der Form eines Selektors. Das Einfügen der `id`-Eines Elements als Attributselektor anstelle eines ID-Selektors ist eine gute Möglichkeit, ein Element spezifischer zu machen, ohne eine übermäßige Spezifität hinzuzufügen. Im vorherigen Beispiel zählt der Selektor `[id="myContent"]` als Attributselektor zur Bestimmung der Spezifität des Selektors, obwohl er eine ID auswählt.

Sie können die `id` oder einen Teil eines Selektors auch als Parameter in der Pseudo-Klasse zur Spezifitätsanpassung `:where()` einfügen, wenn Sie einen Selektor spezifischer machen müssen, aber keine Spezifität hinzufügen möchten.

### Erhöhung der Spezifität durch Duplizieren des Selektors

Als Sonderfall zur Erhöhung der Spezifität können Sie Gewichte aus der _CLASS_- oder _ID_-Spalte duplizieren. Das Duplizieren von ID-, Klassen-, Pseudo-Klassen- oder Attributselektoren innerhalb eines zusammengesetzten Selektors erhöht die Spezifität, wenn sehr spezifische Selektoren überschrieben werden, über die Sie keine Kontrolle haben.

```css
#myId#myId#myId span {
  /* 3-0-1 */
}
.myClass.myClass.myClass span {
  /* 0-3-1 */
}
```

Verwenden Sie dies sparsam, wenn überhaupt. Wenn Sie Selektor-Duplizierung verwenden, kommentieren Sie immer Ihr CSS.

Durch die Verwendung von `:is()` und `:not()` (und auch `:has()`) können Sie die Spezifität erhöhen, auch wenn Sie keine `id` zu einem übergeordneten Element hinzufügen können:

```css
:not(#fakeID#fakeId#fakeID) span {
  /* 3-0-1 */
}
:is(#fakeID#fakeId#fakeID, span) {
  /* 3-0-0 */
}
```

### Vorrang gegenüber Drittanbieter-CSS

Die Verwendung von Kaskadenschichten ist die Standardmethode, um eine Menge von Stilen gegenüber einer anderen Menge von Stilen Vorrang zu geben; Kaskadenschichten ermöglichen dies ohne Verwendung von Spezifität! Normale (nicht wichtige) Autorenstile, die in Kaskadenschichten importiert werden, haben eine geringere Priorität als nicht geschichtete Autorenstile.

Wenn Stile aus einem Stylesheet stammen, das Sie nicht bearbeiten können oder nicht verstehen, und Sie Stile überschreiben müssen, besteht eine Strategie darin, die Stile, die Sie nicht kontrollieren können, in eine Kaskadenschicht zu importieren. In darauffolgenden Schichten erklärte Stile haben Vorrang, wobei ungeschichtete Stile Vorrang vor allen geschichteten Stilen des gleichen Ursprungs haben.

Wenn zwei Selektoren aus verschiedenen Schichten dasselbe Element treffen, haben Ursprung und Bedeutung Vorrang; die Spezifizität des Selektors im verlierenden Stylesheet ist irrelevant.

```html
<style>
  @import TW.css layer();
  p,
  p * {
    font-size: 1rem;
  }
</style>
```

Im obigen Beispiel wird aller Absatztext, einschließlich des verschachtelten Inhalts, `1rem` sein, egal wie viele Klassennamen die Absätze haben, die zum TW-Stylesheet passen.

### Vermeidung und Überschreibung von `!important`

Der beste Ansatz ist es, `!important` nicht zu verwenden. Die obigen Erklärungen zur Spezifität sollte helfen, die Flagge zu vermeiden und vollständig zu entfernen, wenn sie auftritt.

Um die gefühlte Notwendigkeit für `!important` zu entfernen, können Sie Folgendes tun:

- Erhöhen Sie die Spezifität des Selektors der vorher `!important`-Deklaration, so dass sie größer ist als andere Deklarationen
- Geben Sie ihr die gleiche Spezifität und stellen Sie sie nach der Deklaration auf, die sie überschreiben soll
- Reduzieren Sie die Spezifität des Selektors, den Sie zu überschreiben versuchen.

All diese Methoden werden in den vorangehenden Abschnitten behandelt.

Wenn Sie nicht in der Lage sind, `!important`-Flags aus einem Autors-Stylesheet zu entfernen, ist die einzige Lösung, die wichtigen Stile zu überschreiben, die Verwendung von `!important`. Die Schaffung einer [Kaskadenschicht](/de/docs/Web/CSS/@layer) von wichtigen Deklarationsüberschreibungen ist eine ausgezeichnete Lösung. Zwei Möglichkeiten dies zu tun sind:

#### Methode 1

1. Erstellen Sie ein separates, kurzes Stylesheet, das nur wichtige Deklarationen enthält, die speziell wichtige Deklarationen überschreibt, die Sie nicht entfernen konnten.
2. Importieren Sie dieses Stylesheet als das erste in Ihrem CSS unter Verwendung von `layer()`, einschließlich der `@import`-Anweisung, bevor Sie andere Stylesheets verknüpfen. Dies ist, um sicherzustellen, dass die wichtigen Überschreibungen als erste Schicht importiert werden.

```html
<style>
  @import importantOverrides.css layer();
</style>
```

#### Methode 2

1. Erstellen Sie am Anfang Ihrer Stylesheet-Deklarationen eine benannte Kaskadenschicht wie folgt:

   ```css
   @layer importantOverrides;
   ```

2. Jedes Mal, wenn Sie eine wichtige Deklaration überschreiben müssen, deklarieren Sie sie innerhalb der benannten Schicht. Deklarieren Sie nur wichtige Regeln innerhalb der Schicht.

   ```css
   [id="myElement"] p {
     /* normale Stile hier */
   }
   @layer importantOverrides {
     [id="myElement"] p {
       /* wichtige Stile hier */
     }
   }
   ```

Die Spezifizität des Selektors des wichtigen Stils innerhalb der Schicht kann niedrig sein, solange er das Element trifft, das Sie versuchen zu überschreiben. Normale Schichten sollten außerhalb der Schicht erklärt werden, da geschichtete Stile eine geringere Priorität als ungeschichtete Stile haben.

### Baum-Nähe-Ignoranz

Die Nähe eines Elements zu anderen Elementen, die in einem gegebenen Selektor referenziert werden, hat keinen Einfluss auf die Spezifität.

```css
body h1 {
  color: green;
}

html h1 {
  color: purple;
}
```

Die `<h1>`-Elemente werden lila sein, weil wenn Deklarationen die gleiche Spezifizität haben, der zuletzt deklarierte Selektor Vorrang hat.

### Direkt zielgerichtete Elemente vs. geerbte Stile

Stile für ein direkt gezieltes Element werden immer Vorrang vor geerbten Stilen haben, unabhängig von der Spezifität der geerbten Regel. Angenommen der folgende CSS und HTML:

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

Das `h1` wird lila sein, weil der `h1`-Selektor das Element spezifisch anspricht, während das Grüne von den `#parent` Erkärungen geerbt wird.

## Beispiele

Im folgenden CSS haben wir drei Selektoren, die {{HTMLElement('input')}}-Elemente ansprechen, um eine Farbe festzulegen. Für ein gegebenes Eingabeelement ist das Spezifitätsgewicht der Eigenschaftsdeklaration, die Vorrang hat, der übereinstimmende Selektor mit dem größten Gewicht:

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

Wenn die obigen Selektoren alle dasselbe Eingabeelement betreffen, wird die Eingabe rot, da die erste Deklaration den höchsten Wert in der _ID_-Spalte hat.

Der letzte Selektor hat vier _TYPE_-Komponenten. Obwohl es den höchsten ganzzahligen Wert hat, haben, egal wie viele Elemente und Pseudo-Elemente enthalten sind, auch wenn es 150 wären, TYPE-Komponenten niemals Vorrang vor _CLASS_-Komponenten. Die Spaltenwerte werden von links nach rechts verglichen, wenn die Spaltenwerte gleich sind.

Hätten wir im obigen Beispiel den ID-Selektor in einen Attributselektor umgewandelt, hätten die ersten beiden Selektoren die gleiche Spezifität, wie unten gezeigt:

```css
[id="myElement"] input.myClass {
  color: red;
} /* 0-2-1 */
input[type="password"]:required {
  color: blue;
} /* 0-2-1 */
```

Wenn mehrere Deklarationen die gleiche Spezifität haben, wird die letzte Deklaration, die im CSS gefunden wird, auf das Element angewendet. Wenn beide Selektoren mit dem gleichen {{HTMLElement('input')}} übereinstimmen, wird die Farbe blau sein.

## Zusätzliche Anmerkungen

Ein paar Dinge, die Sie zur Spezifität beachten sollten:

1. Spezifität gilt nur, wenn dasselbe Element durch mehrere Deklarationen in derselben Kaskadenebene oder Herkunft angesprochen wird. Spezifität ist nur für Deklarationen einer gleichen Bedeutung und gleichen Ursprungs und [Kaskadenebene](/de/docs/Web/CSS/@layer) von Bedeutung. Wenn übereinstimmende Selektoren in verschiedenen Ursprüngen liegen, bestimmt die [Kaskade](/de/docs/Web/CSS/Cascade), welche Deklaration Vorrang hat.

2. Wenn zwei Selektoren in derselben Kaskadenebene und Ursprung die gleiche Spezifität haben, wird die Scope-Nähe dann berechnet; der Regelensatz mit der geringsten Scope-Nähe gewinnt. Siehe [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) für mehr Details und ein Beispiel.

3. Wenn die Scope-Nähe auch für beide Selektoren gleich ist, kommt die Quellreihenfolge ins Spiel. Wenn alles andere gleich ist, gewinnt der letzte Selektor.

4. Laut CSS-Regeln werden [direkt zielgerichtete Elemente](#direkt_zielgerichtete_elemente_vs._geerbte_stile) immer Vorrang vor Regeln haben, die ein Element von seinem Vorfahren erbt.

5. [Die Nähe von Elementen](#baum-nähe-ignoranz) im Dokumentenbaum hat keinen Effekt auf die Spezifität.

## Spezifikationen

{{Specifications}}

## Siehe auch

- ["Spezifität" in "Kaskade und Vererbung"](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#specificity_2)
- [SpeciFISHity](https://specifishity.com/)
- [Specificity Calculator](https://specificity.keegan.st/): Eine interaktive Website, um Ihre eigenen CSS-Regeln zu testen und zu verstehen
- [_ID-CLASS-TYPE_ Übung](https://estelle.github.io/CSS/selectors/exercises/specificity.html) ein Spezifitäts-Quiz
- [CSS-Syntax](/de/docs/Web/CSS/Syntax)-Leitfaden
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax)-Modul
- [CSS-Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [At-Regeln](/de/docs/Web/CSS/At-rule)
- [Vererbung](/de/docs/Web/CSS/Inheritance)
- [Initial](/de/docs/Web/CSS/initial_value), [berechnete](/de/docs/Web/CSS/computed_value), [benutzte](/de/docs/Web/CSS/used_value) und [tatsächliche](/de/docs/Web/CSS/actual_value) Werte
- [Wertdefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
- [Bausteine: die CSS-Kaskade](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- [Bausteine: Kaskadenschichten](/de/docs/Learn/CSS/Building_blocks/Cascade_layers)
- [CSS-Kaskaden- und Vererbungsmodul](/de/docs/Web/CSS/CSS_cascade)
- [CSS-Verschachtelungsmodul](/de/docs/Web/CSS/CSS_nesting)
