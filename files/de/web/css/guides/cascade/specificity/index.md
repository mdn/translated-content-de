---
title: Spezifität
slug: Web/CSS/Guides/Cascade/Specificity
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

**Spezifität** ist der Algorithmus, den Browser verwenden, um die [CSS-Deklaration](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#css_syntax_basics) zu bestimmen, die für ein Element am relevantesten ist und somit den anzuwendenden Eigenschaftswert für das Element bestimmt. Der Spezifitäts-Algorithmus berechnet das Gewicht eines [CSS-Selektors](/de/docs/Web/CSS/Reference#selectors), um zu bestimmen, welche Regel aus konkurrierenden CSS-Deklarationen auf ein Element angewendet wird.

> [!NOTE]
> Browser berücksichtigen die Spezifität **nachdem** sie [Ursprung der Kaskade und Wichtigkeit](/de/docs/Web/CSS/Guides/Cascade/Introduction) bestimmt haben. Mit anderen Worten, für konkurrierende Eigenschaftsdeklarationen ist Spezifität nur zwischen Selektoren von einem [Ursprung der Kaskade und Ebene](/de/docs/Web/CSS/Reference/At-rules/@layer) relevant und wird verglichen, der für die Eigenschaft Vorrang hat. [Umgebungsnähe](/de/docs/Web/CSS/Reference/At-rules/@scope#how_scope_conflicts_are_resolved) und Reihenfolge des Erscheinens werden relevant, wenn die Selektor-Spezifitäten der konkurrierenden Deklarationen in der vorrangigen Kaskadenschicht gleich sind.

## Wie wird die Spezifität berechnet?

Spezifität ist ein Algorithmus, der das Gewicht berechnet, das auf eine gegebene CSS-Deklaration angewendet wird. Das Gewicht wird durch die Anzahl der [Selektoren jeder Gewichtskategorie](#selektor-gewichtskategorien) im Selektor bestimmt, der das Element (oder Pseudo-Element) trifft. Wenn es zwei oder mehr Deklarationen gibt, die unterschiedliche Eigenschaftswerte für dasselbe Element bereitstellen, wird der Deklarationswert in dem Stilblock angewendet, dessen übereinstimmender Selektor das höchste algorithmische Gewicht hat.

Der Spezifitäts-Algorithmus ist im Wesentlichen ein Drei-Spalten-Wert von drei Kategorien oder Gewichten - ID, CLASS und TYPE - entsprechend den drei Arten von Selektoren. Der Wert stellt die Anzahl der Selektor-Komponenten in jeder Gewichtskategorie dar und wird als _ID - CLASS - TYPE_ geschrieben. Die drei Spalten werden erstellt, indem die Anzahl der Selektor-Komponenten für jede Selektor-Gewichtskategorie in den Selektoren gezählt wird, die auf das Element treffen.

### Selektor-Gewichtskategorien

Die Selektor-Gewichtskategorien sind hier in der Reihenfolge abnehmender Spezifität aufgelistet:

- ID-Spalte
  - : Enthält nur [ID-Selektoren](/de/docs/Web/CSS/Reference/Selectors/ID_selectors), wie `#example`. Für jede ID in einem übereinstimmenden Selektor fügen Sie 1-0-0 zum Gewichtswert hinzu.
- CLASS-Spalte
  - : Beinhaltet [Klassen-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Class_selectors), wie `.myClass`, Attributselektoren wie `[type="radio"]` und `[lang|="fr"]`, und Pseudo-Klassen, wie `:hover`, `:nth-of-type(3n)`, und `:required`. Für jede Klasse, jeden Attributselektor oder jede Pseudo-Klasse in einem übereinstimmenden Selektor fügen Sie 0-1-0 zum Gewichtswert hinzu.
- TYPE-Spalte
  - : Beinhaltet [Typ-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Type_selectors), wie `p`, `h1`, und `td`, und Pseudo-Elemente wie `::before`, `::placeholder` und alle anderen Selektoren mit Doppelpunkt-Notation. Für jeden Typ oder Pseudo-Element in einem übereinstimmenden Selektor fügen Sie 0-0-1 zum Gewichtswert hinzu.
- Kein Wert
  - : Der universelle Selektor ({{CSSxRef("Universal_selectors", "*")}}) und die Pseudo-Klasse {{CSSxRef(":where", ":where()")}} und ihre Parameter werden bei der Berechnung des Gewichts nicht gezählt, daher ist ihr Wert 0-0-0, aber sie passen zu Elementen. Diese Selektoren beeinflussen den Spezifitäts-Gewichtswert nicht.

Kombinatoren, wie {{CSSxRef("Next-sibling_combinator", "+")}}, {{CSSxRef("Child_combinator", "&gt;")}}, {{CSSxRef("Subsequent-sibling_combinator", "~")}}, [" "](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator), und {{CSSxRef("Column_combinator", "||")}}, können einen Selektor spezifischer machen, was ausgewählt wird, aber sie fügen dem Spezifitätsgewicht keinen Wert hinzu.

Der `&`-Verschachtelungskombinator erhöht das Spezifitätsgewicht nicht, aber verschachtelte Regeln tun dies. In Bezug auf Spezifität und Funktionalität ist Verschachtelung sehr ähnlich zur {{CSSxRef(":is", ":is()")}} Pseudo-Klasse.

Wie bei der Verschachtelung fügen die Pseudo-Klassen {{CSSxRef(":is", ":is()")}}, {{CSSxRef(":has", ":has()")}} und negation ({{CSSxRef(":not", ":not()")}}) selbst kein Gewicht hinzu. Die Parameter in diesen Selektoren jedoch schon. Das Spezifitätsgewicht jedes einzelnen kommt von dem Selektor-Parameter in der Liste der Selektoren mit der höchsten Spezifität. Ebenso wird bei verschachtelten Selektoren das Spezifitätsgewicht, das durch die verschachtelte Selektor-Komponente hinzugefügt wird, durch den Selektor in der kommagetrennten Liste der verschachtelten Selektoren mit der höchsten Spezifität bestimmt.

Die [`:not()`, `:is()`, `:has()` und CSS-Nesting Ausnahmen](#the_is_not_has_and_css_nesting_exceptions) werden unten diskutiert.

#### Übereinstimmender Selektor

Das Spezifitätsgewicht kommt vom übereinstimmenden Selektor. Nehmen Sie diesen CSS-Selektor mit drei kommagetrennten Selektoren als Beispiel:

```css
[type="password"],
input:focus,
:root #myApp input:required {
  color: blue;
}
```

Der `[type="password"]` Selektor in der obigen Selektorliste, mit einem Spezifitätsgewicht von `0-1-0`, wendet die `color: blue` Deklaration auf alle Passwort-Eingabefelder an.

Alle Eingabefelder, egal welchen Typs, wenn sie den Fokus erhalten, passen zum zweiten Selektor in der Liste, `input:focus`, mit einem Spezifitätsgewicht von `0-1-1`; dieses Gewicht setzt sich aus der `:focus` Pseudo-Klasse (0-1-0) und dem `input` Typ (0-0-1) zusammen. Hat das Passwort-Eingabefeld den Fokus, wird es mit `input:focus` übereinstimmen, und das Spezifitätsgewicht für die `color: blue` Stil-Deklaration wird `0-1-1` sein. Wenn das Passwort keinen Fokus hat, bleibt das Spezifitätsgewicht bei `0-1-0`.

Die Spezifität für eine benötigte Eingabe, die in einem Element mit dem Attribut `id="myApp"` verschachtelt ist, beträgt `1-2-1`, basierend auf einer ID, zwei Pseudo-Klassen und einem Elementtyp.

Wenn der Passwort-Eingabetyp mit `required` in einem Element mit `id="myApp"` gesetzt ist, beträgt das Spezifitätsgewicht `1-2-1`, basierend auf einer ID, zwei Pseudo-Klassen und einem Elementtyp, unabhängig davon, ob es den Fokus hat oder nicht. Warum ist das Spezifitätsgewicht `1-2-1` und nicht `0-1-1` oder `0-1-0` in diesem Fall? Weil das Spezifitätsgewicht vom übereinstimmenden Selektor mit dem größten Spezifitätsgewicht kommt. Das Gewicht wird bestimmt, indem die Werte in den drei Spalten von links nach rechts verglichen werden.

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

### Drei-Spalten-Vergleich

Sobald die Spezifitätswerte der relevanten Selektoren bestimmt sind, werden die Anzahl der Selektorkomponenten in jeder Spalte von links nach rechts verglichen.

```css
#myElement {
  color: green; /* 1-0-0  - WINS!! */
}
.bodyClass .sectionClass .parentClass [id="myElement"] {
  color: yellow; /* 0-4-0 */
}
```

Die erste Spalte ist der Wert der _ID_-Komponente, welche die Anzahl der IDs in jedem Selektor darstellt. Die Zahlen in den _ID_-Spalten der konkurrierenden Selektoren werden verglichen. Der Selektor mit dem höheren Wert in der _ID_-Spalte gewinnt, egal wie die Werte in den anderen Spalten sind. Im obigen Beispiel spielt es keine Rolle, dass der gelbe Selektor insgesamt mehr Komponenten hat, nur der Wert der ersten Spalte zählt.

Sind die Zahlen in den _ID_-Spalten der konkurrierenden Selektoren gleich, wird die nächste Spalte, _CLASS_, verglichen, wie unten gezeigt.

```css
#myElement {
  color: yellow; /* 1-0-0 */
}
#myApp [id="myElement"] {
  color: green; /* 1-1-0  - WINS!! */
}
```

Die _CLASS_-Spalte ist die Anzahl der Klassennamen, Attributselektoren und Pseudo-Klassen im Selektor. Wenn der _ID_-Spaltenwert gleich ist, gewinnt der Selektor mit dem höheren Wert in der _CLASS_-Spalte, egal welcher Wert in der _TYPE_-Spalte ist. Dies wird im folgenden Beispiel gezeigt.

```css
:root input {
  color: green; /* 0-1-1 - WINS because CLASS column is greater */
}
html body main input {
  color: yellow; /* 0-0-4 */
}
```

Sind die Zahlen in den _CLASS_- und _ID_-Spalten der konkurrierenden Selektoren gleich, wird die _TYPE_-Spalte relevant. Die _TYPE_-Spalte ist die Anzahl der Elementtypen und Pseudo-Elemente im Selektor. Haben die ersten beiden Spalten den gleichen Wert, gewinnt der Selektor mit der höheren Zahl in der _TYPE_-Spalte.

Haben konkurrierende Selektoren die gleichen Werte in allen drei Spalten, kommt die Reihenfolgeregel ins Spiel, bei der die zuletzt deklarierte Stilregel Vorrang hat.

```css
input.myClass {
  color: yellow; /* 0-1-1 */
}
:root input {
  color: green; /* 0-1-1 WINS because it comes later */
}
```

### Die `:is()`, `:not()`, `:has()` und CSS-Nesting Ausnahmen

Die Übereinstimmungs-Pseudo-Klasse {{CSSxRef(":is", ":is()")}}, die relationale Pseudo-Klasse {{CSSxRef(":has", ":has()")}}, und die Negations-Pseudo-Klasse {{CSSxRef(":not", ":not()")}} werden _nicht_ als Pseudo-Klassen in der Spezifitätsgewichtung betrachtet. Sie selbst fügen der Spezifitätsgleichung kein Gewicht hinzu. Die Selektor-Parameter, die in die Pseudo-Klassen-Klammern übertragen werden, sind jedoch Teil des Spezifitätsalgorithmus; das Gewicht der Übereinstimmungs- und Negations-Pseudo-Klasse in der Spezifitätsgewichtungsberechnung ist das Gewicht des Parametergewichts [Gewicht](#selektor-gewichtskategorien).

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

Beachten Sie, dass in der oben gezeigten CSS-Paarung das Spezifitätsgewicht, das durch die `:is()`, `:has()` und `:not()` Pseudo-Klassen bereitgestellt wird, der Wert des Selektor-Parameters ist, nicht der Pseudo-Klasse selbst.

Alle drei dieser Pseudo-Klassen akzeptieren komplexe Selektorl Listen, eine Liste kommagetrennter Selektoren, als Parameter. Diese Funktion kann genutzt werden, um die Spezifität eines Selektors zu erhöhen:

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

In dem oben gezeigten CSS-Codeblock haben wir `#fakeId` in die Selektoren aufgenommen. Dieses `#fakeId` fügt `1-0-0` zum Spezifitätsgewicht jedes Absatzes hinzu.

Beim Erstellen komplexer Selektorl Listen mit [CSS-Nesting](/de/docs/Web/CSS/Guides/Nesting) verhält sich dies auf genau die gleiche Weise wie die Pseudo-Klasse `:is()`.

```css
p,
#fakeId {
  span {
    /* 1-0-1 */
  }
}
```

Im obigen Codeblock übernimmt der komplexe Selektor `p, #fakeId` die Spezifität aus `#fakeId` und auch aus dem `span`, sodass dies eine Spezifität von `1-0-1` sowohl für `p span` als auch `#fakeId span` erstellt. Dies ist die gleiche Spezifität wie der Selektor `:is(p, #fakeId) span`.

Im Allgemeinen möchten Sie die Spezifität möglichst gering halten, aber wenn Sie die Spezifität eines Elements aus einem bestimmten Grund erhöhen müssen, können Ihnen diese drei Pseudo-Klassen helfen.

```css
a:not(#fakeId#fakeId#fakeID) {
  color: blue; /* 3-0-1 */
}
```

In diesem Beispiel werden alle Links blau sein, es sei denn, sie werden von einer Linkdeklaration mit drei oder mehr IDs überschrieben, einem Farbwert, der ein `a` enthält, einschließlich der [`!important`-Markierung](#the_!important_exception), oder wenn der Link eine [inline style](#inline-stile) Farbdarstellung hat. Wenn Sie eine solche Technik verwenden, fügen Sie einen Kommentar hinzu, um zu erklären, warum der Trick notwendig war.

### Inline-Stile

Inline-Stile, die einem Element hinzugefügt werden (z.B. `style="font-weight: bold;"`), überschreiben immer alle normalen Stile in Autor-Stylesheets und können daher als die höchste Spezifität angesehen werden. Betrachten Sie Inline-Stile als hätten sie ein Spezifitätsgewicht von `1-0-0-0`.

Der einzige Weg, Inline-Stile zu überschreiben, ist die Verwendung von `!important`.

Viele JavaScript-Frameworks und -Bibliotheken fügen Inline-Stile hinzu. Die Verwendung von `!important` mit einem sehr zielgerichteten Selektor, wie einem Attributselektor, der den Inline-Stil verwendet, ist eine Möglichkeit, diese Inline-Stile zu überschreiben.

```html
<p style="color: purple">…</p>
```

```css
p[style*="purple"] {
  color: rebeccapurple !important;
}
```

Achten Sie darauf, bei jeder Verwendung der `important`-Angabe einen Kommentar hinzuzufügen, damit die Codebetreuer verstehen, warum ein CSS-Antimuster verwendet wurde.

### Die `!important`-Ausnahme

CSS-Deklarationen, die als `important` gekennzeichnet sind, überschreiben alle anderen Deklarationen innerhalb derselben Kaskadenschicht und Herkunft. Obwohl technisch gesehen [`!important`](/de/docs/Web/CSS/Reference/Values/important) nichts mit Spezifität zu tun hat, interagiert es direkt mit der Spezifität und der Kaskade. Es kehrt die [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction) der Stylesheets um.

Wenn Deklarationen aus derselben Herkunft und Kaskadenschicht in Konflikt stehen und ein Eigenschaftswert das `!important`-Flag gesetzt hat, wird die wichtige Deklaration angewendet, egal welche Spezifität vorliegt. Wenn konkurrierende Deklarationen aus derselben Herkunft und Kaskadenschicht mit dem `!important`-Flag auf dasselbe Element angewendet werden, wird die Deklaration mit größerer Spezifität angewendet.

Die Verwendung von `!important` zur Überschreibung der Spezifität wird als **schlechte Praxis** betrachtet und sollte zu diesem Zweck vermieden werden. Das Verstehen und effektive Nutzen der Spezifität und der Kaskade kann jede Notwendigkeit für das `!important`-Flag beseitigen.

Anstatt `!important` zum Überschreiben von fremdem CSS (von externen Bibliotheken wie Bootstrap oder normalize.css) zu verwenden, importieren Sie die Drittanbieter-Skripte direkt in [Kaskadenschichten](/de/docs/Web/CSS/Reference/At-rules/@layer). Wenn Sie in Ihrem CSS `!important` verwenden müssen, kommentieren Sie Ihre Nutzung, damit zukünftige Codebetreuer wissen, warum die Deklaration wichtig gemacht wurde und wissen, dass sie nicht überschrieben werden darf. Aber verwenden Sie definitiv kein `!important`, wenn Sie Plugins oder Frameworks schreiben, die andere Entwickler ohne Kontrolle einbinden müssen.

### Die `:where()`-Ausnahme

Die Spezifikationsanpassungs-Pseudo-Klasse {{CSSxRef(":where", ":where()")}} hat immer ihre Spezifität durch null ersetzt, `0-0-0`. Sie ermöglicht es, CSS-Selektoren sehr spezifisch darin zu machen, welches Element gezielt angesprochen wird, ohne die Spezifität zu erhöhen.

Beim Erstellen von Drittanbieter-CSS, das von Entwicklern verwendet wird, die keinen Zugriff zum Bearbeiten Ihres CSS haben, wird es als gute Praxis angesehen, CSS mit der geringstmöglichen Spezifität zu erstellen. Zum Beispiel, wenn Ihr Theme folgendes CSS enthält:

```css
:where(#defaultTheme) a {
  /* 0-0-1 */
  color: red;
}
```

Dann kann der Entwickler, der das Widget implementiert, die Linkfarbe leicht mit nur Typ-Selektoren überschreiben.

```css
footer a {
  /* 0-0-2 */
  color: blue;
}
```

### Wie `@scope` Blöcke die Spezifität beeinflussen

Das Einfügen einer Regel innerhalb eines {{cssxref("@scope")}}-Blocks beeinflusst die Spezifität seines Selektors nicht, unabhängig von den Selektoren, die innerhalb der [Umfangs-Wurzel und Grenze](/de/docs/Web/CSS/Reference/At-rules/@scope#syntax) verwendet werden.
Wenn Sie sich jedoch entscheiden, die {{cssxref(":scope")}}-Pseudo-Klasse explizit hinzuzufügen, müssen Sie sie bei der Berechnung ihrer Spezifität berücksichtigen.
`:scope` hat, wie alle regulären Pseudo-Klassen, eine Spezifität von 0-1-0. Zum Beispiel:

```css
@scope (.article-body) {
  /* :scope img has a specificity of 0-1-0 + 0-0-1 = 0-1-1 */
  :scope img {
  }
}
```

Weitere Informationen finden Sie unter [Spezifität in `@scope`](/de/docs/Web/CSS/Reference/At-rules/@scope#specificity_in_scope).

## Tipps zum Umgang mit Spezifitätsschmerzen

Anstatt `!important` zu verwenden, ziehen Sie in Erwägung, Kaskadenschichten zu verwenden und eine geringe spezifische Gewichtung in Ihrem gesamten CSS zu verwenden, sodass Stile leicht mit etwas spezifischeren Regeln überschrieben werden können. Die Verwendung von semantischem HTML hilft dabei, Ankerpunkte bereitzustellen, von denen aus das Styling angewendet wird.

### Maching Selektoren spezifisch mit und ohne Hinzufügen von Spezifität

Indem Sie den Abschnitt des Dokuments, den Sie stylen, vor dem Element angeben, das Sie auswählen, wird die Regel spezifischer. Je nachdem, wie Sie es hinzufügen, können Sie ein wenig, viel oder gar keine Spezifität hinzufügen, wie unten gezeigt:

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

Unabhängig von der Reihenfolge wird die Überschrift grün, weil diese Regel die spezifischste ist.

#### Reduzieren der ID-Spezifität

Spezifität basiert auf der Form eines Selektors. Die ID eines Elements als Attributselektor anstelle eines ID-Selektors einzuschließen, ist eine gute Möglichkeit, ein Element spezifischer zu machen, ohne eine Überfülle an Spezifität hinzuzufügen. Im vorherigen Beispiel wird der Selektor `[id="myContent"]` als Attributselektor für die Bestimmung der Spezifität des Selektors gezählt, obwohl er eine ID auswählt.

Sie können auch die ID oder einen Teil eines Selektors als Parameter in der Pseudo-Klasse `:where()` zur Spezifikationsanpassung einschließen, falls Sie einen Selektor spezifischer machen müssen, jedoch keine Spezifität hinzufügen möchten.

### Erhöhung der Spezifität durch Verdopplung des Selektors

Als Sonderfall zur Erhöhung der Spezifität können Sie Gewichte aus den _CLASS_- oder _ID_-Spalten duplizieren. Das Duplizieren von id, class, pseudo-class oder Attributselektoren innerhalb eines zusammengesetzten Selektors erhöht die Spezifität, wenn Sie sehr spezifische Selektoren überschreiben wollen, über die Sie keine Kontrolle haben.

```css
#myId#myId#myId span {
  /* 3-0-1 */
}
.myClass.myClass.myClass span {
  /* 0-3-1 */
}
```

Verwenden Sie dies sparsam, falls überhaupt. Wenn Sie die Duplikation von Selektoren verwenden, kommentieren Sie immer Ihr CSS.

Durch die Verwendung von `:is()` und `:not()` (und auch `:has()`) können Sie die Spezifikität auch dann erhöhen, wenn Sie einem übergeordneten Element keine ID hinzufügen können:

```css
:not(#fakeID#fakeId#fakeID) span {
  /* 3-0-1 */
}
:is(#fakeID#fakeId#fakeID, span) {
  /* 3-0-0 */
}
```

### Vorrang vor Drittanbieter-CSS

Die Nutzung von Kaskadenschichten ist die Standardmethode, um einer Reihe von Stilen den Vorrang über eine andere Reihe von Styles zu gewähren; Kaskadenschichten ermöglichen dies ohne Verwendung von Spezifität! Normale (nicht wichtige) Autorenstile, die in Kaskadenschichten importiert werden, haben eine geringere Priorität als nicht geschichtete Autorenstile.

Wenn Stile von einem Stylesheet kommen, das Sie nicht bearbeiten oder nicht verstehen können und Stile überschreiben müssen, ist eine Strategie, die Stile, die Sie nicht kontrollieren, in eine Kaskadenschicht zu importieren. Stile in nachfolgend deklarierten Schichten haben Vorrang, wobei nicht geschichtete Stile Vorrang vor allen geschichteten Stilen vom gleichen Ursprung haben.

Wenn zwei Selektoren aus verschiedenen Schichten auf dasselbe Element passen, haben Herkunft und Wichtigkeit Vorrang; die Spezifität des Selektors in dem verlierenden Stylesheet ist irrelevant.

```css
@import "TW.css" layer();
p,
p * {
  font-size: 1rem;
}
```

Im obigen Beispiel wird der gesamte Absatztext, einschließlich des verschachtelten Inhalts, `1rem` sein, egal wie viele Klassennamen die Absätze haben, die auf das TW-Stylesheet passen.

### Vermeidung und Überschreibung von `!important`

Der beste Ansatz ist, `!important` nicht zu verwenden. Die obigen Erklärungen zur Spezifität sollten hilfreich sein, um die Verwendung des Flags zu vermeiden und es vollständig zu entfernen, wenn man darauf stößt.

Um die wahrgenommene Notwendigkeit für `!important` zu beseitigen, können Sie eines der folgenden tun:

- Erhöhen Sie die Spezifität des Selektors der früher `!important` Deklaration so, dass sie größer ist als andere Deklarationen
- Geben Sie ihm die gleiche Spezifität und setzen Sie ihn nach der Deklaration, die er überschreiben soll
- Reduzieren Sie die Spezifität des Selektors, den Sie überschreiben möchten.

All diese Methoden sind in den vorangehenden Abschnitten behandelt.

Wenn Sie `!important` Flags aus einem Autoren Stylesheet entfernen können, ist die einzige Lösung zur Überschreibung der wichtigen Stile die Verwendung von `!important`. Das Erstellen einer [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer) von wichtigen Deklarationsüberschreibungen ist eine ausgezeichnete Lösung. Zwei Methoden dies zu tun, sind:

#### Methode 1

1. Erstellen Sie ein separates, kurzes Stylesheet, das nur wichtige Deklarationen enthält, die spezifisch jede wichtige Deklaration überschreiben, die Sie nicht entfernen konnten.
2. Importieren Sie dieses Stylesheet als ersten Import in Ihr CSS mit `layer()`, einschließlich der `@import`-Anweisung, bevor Sie andere Stylesheets verlinken. Dies stellt sicher, dass die wichtigen Überschreibungen als erste Schicht importiert werden.

```css
@import "importantOverrides.css" layer();
```

#### Methode 2

1. Erstellen Sie am Anfang Ihrer Stylesheet-Deklarationen eine benannte Kaskadenschicht, so:

   ```css
   @layer importantOverrides;
   ```

2. Jedes Mal, wenn Sie eine wichtige Deklaration überschreiben müssen, deklarieren Sie sie innerhalb der benannten Schicht. Deklarieren Sie nur wichtige Regeln innerhalb der Schicht.

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

Die Spezifität des Selektors des wichtigen Stils innerhalb der Schicht kann niedrig sein, solange sie das Element trifft, das Sie überschreiben möchten. Normale Schichten sollten außerhalb der Schicht deklariert werden, da geschichtete Stile eine geringere Priorität haben als nicht geschichtete Stile.

### Baumproximity-Ignoranz

Die Nähe eines Elements zu anderen Elementen, die in einem gegebenen Selektor referenziert sind, hat keinen Einfluss auf die Spezifität.

```css
body h1 {
  color: green;
}

html h1 {
  color: purple;
}
```

Die `<h1>`-Elemente werden lila sein, weil, wenn Deklarationen die gleiche Spezifität haben, der zuletzt deklarierte Selektor Vorrang hat.

### Direkt angesprochene Elemente vs. ererbte Stile

Stile für ein direkt angesprochenes Element haben immer Vorrang vor geerbten Stilen, unabhängig von der Spezifität der geerbten Regel. Mit dem folgenden CSS und HTML:

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

Das `h1` wird lila sein, weil der `h1`-Selektor das Element spezifisch ansteuert, während das Grün von den `#parent`-Deklarationen geerbt wird.

## Beispiel

In dem folgenden CSS haben wir drei Selektoren, die {{HTMLElement('input')}}-Elemente ansprechen, um eine Farbe festzulegen. Für eine gegebene Eingabe ist das Spezifitätsgewicht der Farbe-Deklaration, die Vorrang hat, der übereinstimmende Selektor mit dem größten Gewicht:

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

Wenn die oben genannten Selektoren alle auf die gleiche Eingabe abzielen, wird die Eingabe rot sein, da die erste Deklaration den höchsten Wert in der _ID_-Spalte hat.

Der letzte Selektor hat vier _TYPE_-Komponenten. Während er den höchsten Ganzzahlenwert hat, egal wie viele Elemente und Pseudo-Elemente eingeschlossen sind, haben _TYPE_-Komponenten niemals Vorrang vor _CLASS_-Komponenten. Die Spaltenwerte werden von links nach rechts verglichen, wenn Spaltenwerte gleich sind.

Hätten wir den ID-Selektor im obigen Beispielcode in einen Attributselektor umgewandelt, hätten die ersten beiden Selektoren die gleiche Spezifität, wie unten gezeigt:

```css
[id="myElement"] input.myClass {
  color: red;
} /* 0-2-1 */
input[type="password"]:required {
  color: blue;
} /* 0-2-1 */
```

Wenn mehrere Deklarationen die gleiche Spezifität haben, wird die letzte Deklaration, die im CSS gefunden wird, auf das Element angewendet. Wenn beide Selektoren das gleiche {{HTMLElement('input')}} treffen, wird die Farbe blau sein.

## Zusätzliche Hinweise

Einige Dinge, die man über Spezifität beachten sollte:

1. Spezifität gilt nur, wenn dasselbe Element von mehreren Deklarationen in derselben Kaskadenschicht oder Herkunft angesprochen wird. Spezifität ist nur bei Deklarationen von gleicher Wichtigkeit und gleicher Herkunft und [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer) von Bedeutung. Wenn übereinstimmende Selektoren in verschiedenen Ursprüngen sind, bestimmt die [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction), welche Deklaration Vorrang hat.

2. Wenn zwei Selektoren in derselben Kaskadenschicht und Herkunft die gleiche Spezifität haben, wird dann die Umgebungsnähe berechnet; das Regelset mit der geringsten Umgebungsnähe gewinnt. Siehe [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/Reference/At-rules/@scope#how_scope_conflicts_are_resolved) für mehr Details und ein Beispiel.

3. Wenn die Scope-Nähe auch für beide Selektoren gleich ist, kommt die Quellreihenfolge ins Spiel. Wenn alles andere gleich ist, gewinnt der letzte Selektor.

4. Laut CSS-Regeln haben [direkt angewählte Elemente](#direkt_angesprochene_elemente_vs._ererbte_stile) immer Vorrang vor Regeln, die ein Element von seinem Vorfahren erbt.

5. [Nähe von Elementen](#baumproximity-ignoranz) im Dokumentbaum hat keinen Einfluss auf die Spezifität.

## Spezifikationen

{{Specifications}}

## Siehe auch

- ["Spezifität" im "Umgang mit Konflikten"](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity_2)
- [SpeciFISHity](https://specifishity.com/)
- [Spezifitätsrechner](https://specificity.keegan.st/): Eine interaktive Website, um Ihre eigenen CSS-Regeln zu testen und zu verstehen
- [_ID-CLASS-TYPE_ Übung](https://estelle.github.io/CSS/selectors/exercises/specificity.html) ein Spezifitäts-Quiz
- [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax/Introduction) Leitfaden
- [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax) Modul
- [CSS-Fehlerbehandlung](/de/docs/Web/CSS/Guides/Syntax/Error_handling)
- [At-Rules](/de/docs/Web/CSS/Guides/Syntax/At-rules)
- [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
- [Initial](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value), [berechnet](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value), [verwendet](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value), und [tatsächliche](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value) Werte
- [Wertedefinitionssyntax](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade) Modul
- [CSS-Verschachtelungsmodul](/de/docs/Web/CSS/Guides/Nesting)
