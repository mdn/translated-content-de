---
title: Spezifität
slug: Web/CSS/CSS_cascade/Specificity
l10n:
  sourceCommit: 943a9ba8905fbdb3966f0dd6d49f7652e3de94b3
---

**Spezifität** ist der Algorithmus, den Browser verwenden, um die [CSS-Deklaration](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#css_syntax_basics) zu bestimmen, die für ein Element am relevantesten ist und somit den anzuwendenden Eigenschaftswert festlegt. Der Spezifizitätsalgorithmus berechnet das Gewicht eines [CSS-Selectors](/de/docs/Web/CSS/Reference#selectors), um zu bestimmen, welche Regel aus konkurrierenden CSS-Deklarationen auf ein Element angewendet wird.

> [!NOTE]
> Browser berücksichtigen die Spezifität **nachdem** sie den [Ursprung der Kaskade und die Wichtigkeit](/de/docs/Web/CSS/CSS_cascade/Cascade) ermittelt haben. Mit anderen Worten, für konkurrierende Eigenschaftsdeklarationen ist die Spezifität nur dann relevant und wird verglichen, wenn es sich um Selektoren aus einem [Kaskadenursprung und einer Schichtebene](/de/docs/Web/CSS/@layer) handelt, die für die Eigenschaft Vorrang hat. [Scoping-Nähe](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) und Reihenfolge des Auftretens werden relevant, wenn die Selektorspezifizitäten der konkurrierenden Deklarationen in der vorrangigen Kaskadenschicht gleich sind.

## Wie wird die Spezifität berechnet?

Spezifität ist ein Algorithmus, der das Gewicht berechnet, das auf eine gegebene CSS-Deklaration angewendet wird. Das Gewicht wird durch die Anzahl der [Selektoren jeder Gewichtskategorie](#selektor-gewichtskategorien) im Selektor bestimmt, der mit dem Element (oder Pseudo-Element) übereinstimmt. Wenn es zwei oder mehr Deklarationen gibt, die unterschiedliche Eigenschaftswerte für dasselbe Element bereitstellen, wird der Deklarationswert im Stilblock mit dem übereinstimmenden Selektor mit dem größten algorithmischen Gewicht angewendet.

Der Spezifizitätsalgorithmus ist im Wesentlichen ein drei-spaltiger Wert von drei Kategorien oder Gewichten - ID, CLASS und TYPE - die den drei Selektortypen entsprechen. Der Wert repräsentiert die Anzahl der Selektorkomponenten in jeder Gewichtskategorie und wird als _ID - CLASS - TYPE_ geschrieben. Die drei Spalten werden erstellt, indem die Anzahl der Selektorkomponenten für jede Selektor-Gewichtskategorie in den Selektoren gezählt wird, die mit dem Element übereinstimmen.

### Selektor-Gewichtskategorien

Die Selektor-Gewichtskategorien sind hier in der Reihenfolge abnehmender Spezifität aufgelistet:

- ID-Spalte
  - : Beinhaltet nur [ID-Selektoren](/de/docs/Web/CSS/ID_selectors), wie `#example`. Für jede ID in einem übereinstimmenden Selektor fügen Sie 1-0-0 zum Gewichtswert hinzu.
- CLASS-Spalte
  - : Beinhaltet [Klassen-Selektoren](/de/docs/Web/CSS/Class_selectors), wie `.myClass`, Attributselektoren wie `[type="radio"]` und `[lang|="fr"]`, und Pseudo-Klassen, wie `:hover`, `:nth-of-type(3n)`, und `:required`. Für jede Klasse, jeden Attributselektor oder jede Pseudo-Klasse in einem übereinstimmenden Selektor fügen Sie 0-1-0 zum Gewichtswert hinzu.
- TYPE-Spalte
  - : Beinhaltet [Typ-Selektoren](/de/docs/Web/CSS/Type_selectors), wie `p`, `h1`, und `td`, und Pseudo-Elemente wie `::before`, `::placeholder`, und alle anderen Selektoren mit Doppelpunktschreibweise. Für jeden Typ oder jedes Pseudo-Element in einem übereinstimmenden Selektor fügen Sie 0-0-1 zum Gewichtswert hinzu.
- Kein Wert
  - : Der universelle Selektor ({{CSSxRef("Universal_selectors", "*")}}) und die Pseudo-Klasse {{CSSxRef(":where", ":where()")}} und deren Parameter werden beim Berechnen des Gewichts nicht gezählt, sodass ihr Wert 0-0-0 ist, aber sie korrespondieren mit Elementen. Diese Selektoren beeinflussen den Spezifizitätswert nicht.

Kombinatoren, wie {{CSSxRef("Next-sibling_combinator", "+")}}, {{CSSxRef("Child_combinator", "&gt;")}}, {{CSSxRef("Subsequent-sibling_combinator", "~")}}, [" "](/de/docs/Web/CSS/Descendant_combinator), und {{CSSxRef("Column_combinator", "||")}}, können den Selektor spezifischer machen, was ausgewählt wird, aber sie fügen keinen Wert zum Spezifizitätsgewicht hinzu.

Der `&` Schachtelungskombinator fügt kein Spezifizitätsgewicht hinzu, aber geschachtelte Regeln tun dies. In Bezug auf Spezifizität und Funktionalität ist Schachtelung sehr ähnlich zur {{CSSxRef(":is", ":is()")}} Pseudo-Klasse.

Wie bei der Schachtelung fügen die {{CSSxRef(":is", ":is()")}}, {{CSSxRef(":has", ":has()")}} und Negation ({{CSSxRef(":not", ":not()")}}) Pseudo-Klassen selbst kein Gewicht hinzu. Die Parameter in diesen Selektoren jedoch schon. Das Spezifizitätsgewicht jeder kommt von dem Selektorparameter in der Liste der Selektoren mit der höchsten Spezifität. Ähnlich verhält es sich mit geschachtelten Selektoren: Das Spezifizitätsgewicht, das durch die geschachtelte Selektorkomponente hinzugefügt wird, ist der Selektor in der durch Kommas getrennten Liste der geschachtelten Selektoren mit der höchsten Spezifität.

Die [`:not()`, `:is()`, `:has()` und CSS-Schachtelungsausnahmen](#the_is_not_has_and_css_nesting_exceptions) werden unten erläutert.

#### Übereinstimmender Selektor

Das Spezifizitätsgewicht stammt vom übereinstimmenden Selektor. Nehmen Sie diesen CSS-Selektor mit drei durch Kommas getrennten Selektoren als Beispiel:

```css
[type="password"],
input:focus,
:root #myApp input:required {
  color: blue;
}
```

Der `[type="password"]` Selektor in der obigen Selektorliste mit einem Spezifizitätsgewicht von `0-1-0` wendet die `color: blue` Deklaration auf alle Passwort-Eingabetypen an.

Alle Eingaben, unabhängig vom Typ, wenn sie den Fokus erhalten, entsprechen dem zweiten Selektor in der Liste, `input:focus`, mit einem Spezifizitätsgewicht von `0-1-1`; Dieses Gewicht besteht aus der `:focus` Pseudo-Klasse (0-1-0) und dem `input` Typ (0-0-1). Wenn die Passwort-Eingabe den Fokus hat, entspricht sie `input:focus`, und das Spezifizitätsgewicht für die `color: blue` Stil-Deklaration wird `0-1-1` sein. Wenn das Passwort keinen Fokus hat, bleibt das Spezifizitätsgewicht bei `0-1-0`.

Die Spezifizität für eine erforderliche Eingabe, die in einem Element mit dem Attribut `id="myApp"` verschachtelt ist, beträgt `1-2-1`, basierend auf einer ID, zwei Pseudo-Klassen und einem Elementtyp.

Wenn der Passwort-Eingabetyp mit `required` in ein Element mit `id="myApp"` eingebettet ist, beträgt das Spezifizitätsgewicht `1-2-1`, basierend auf einer ID, zwei Pseudo-Klassen und einem Elementtyp, unabhängig davon, ob es den Fokus hat oder nicht. Warum ist das Spezifizitätsgewicht in diesem Fall `1-2-1` anstatt `0-1-1` oder `0-1-0`? Weil das Spezifizitätsgewicht vom übereinstimmenden Selektor mit dem größten Spezifizitätsgewicht stammt. Das Gewicht wird durch Vergleich der Werte in den drei Spalten von links nach rechts bestimmt.

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

### Dreispaltenvergleich

Sobald die Spezifizitätswerte der relevanten Selektoren ermittelt sind, werden die Anzahl der Selektorkomponenten in jeder Spalte von links nach rechts verglichen.

```css
#myElement {
  color: green; /* 1-0-0  - WINS!! */
}
.bodyClass .sectionClass .parentClass [id="myElement"] {
  color: yellow; /* 0-4-0 */
}
```

Die erste Spalte ist der Wert der _ID_-Komponente, was die Anzahl der IDs in jedem Selektor ist. Die Zahlen in den _ID_-Spalten konkurrierender Selektoren werden verglichen. Der Selektor mit dem größeren Wert in der _ID_-Spalte gewinnt, egal wie die Werte in den anderen Spalten sind. Im obigen Beispiel zählt nur der Wert der ersten Spalte, auch wenn der gelbe Selektor mehr Komponenten insgesamt hat.

Wenn die Anzahl in den _ID_-Spalten konkurrierender Selektoren gleich ist, wird die nächste Spalte, _CLASS_, verglichen, wie unten gezeigt.

```css
#myElement {
  color: yellow; /* 1-0-0 */
}
#myApp [id="myElement"] {
  color: green; /* 1-1-0  - WINS!! */
}
```

Die _CLASS_-Spalte ist die Anzahl der Klassennamen, Attributselektoren und Pseudo-Klassen im Selektor. Wenn der _ID_-Spaltenwert gleich ist, gewinnt der Selektor mit dem höheren Wert in der _CLASS_-Spalte, unabhängig vom Wert in der _TYPE_-Spalte. Dies wird im unten stehenden Beispiel gezeigt.

```css
:root input {
  color: green; /* 0-1-1 - WINS because CLASS column is greater */
}
html body main input {
  color: yellow; /* 0-0-4 */
}
```

Wenn die Zahlen in den _CLASS_- und _ID_-Spalten in konkurrierenden Selektoren die gleichen sind, wird die _TYPE_-Spalte relevant. Die _TYPE_-Spalte ist die Anzahl der Elementtypen und Pseudo-Elemente im Selektor. Wenn die ersten beiden Spalten denselben Wert haben, gewinnt der Selektor mit der größeren Anzahl in der _TYPE_-Spalte.

Wenn die konkurrierenden Selektoren die gleichen Werte in allen drei Spalten haben, kommt die Nähe-Regel ins Spiel, wobei die zuletzt deklarierte Stilregel den Vorrang hat.

```css
input.myClass {
  color: yellow; /* 0-1-1 */
}
:root input {
  color: green; /* 0-1-1 WINS because it comes later */
}
```

### Die `:is()`, `:not()`, `:has()` und CSS-Schachtelungsausnahmen

Die Matches-Any-Pseudo-Klasse {{CSSxRef(":is", ":is()")}}, die relationale Pseudo-Klasse {{CSSxRef(":has", ":has()")}} und die Negations-Pseudo-Klasse {{CSSxRef(":not", ":not()")}} werden _nicht_ als Pseudo-Klassen in der Spezifizitätsgewichtung berücksichtigt. Sie selbst fügen der Spezifizitätsgleichung kein Gewicht hinzu. Die Selektorparameter, die in die Pseudo-Klassen-Klammern übergeben werden, sind jedoch Teil des Spezifizitätsalgorithmus; das Gewicht der Matches-Any- und Negations-Pseudo-Klasse in der Spezifizitätswertberechnung ist das Gewicht des Parameters [Gewicht](#selektor-gewichtskategorien).

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

Beachten Sie, dass in der obigen CSS-Zuordnung das durch die `:is()`, `:has()` und `:not()` Pseudo-Klassen bereitgestellte Spezifizitätsgewicht der Wert des Selektorparameters ist, nicht der Pseudo-Klasse.

Alle drei dieser Pseudo-Klassen akzeptieren komplexe Selektorlisten, eine Liste von durch Kommata getrennten Selektoren, als Parameter. Diese Funktion kann verwendet werden, um die Spezifität eines Selektors zu erhöhen:

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

Im obigen CSS-Codeblock haben wir `#fakeId` in die Selektoren aufgenommen. Dieses `#fakeId` fügt jedem Absatz `1-0-0` zum Spezifizitätsgewicht hinzu.

Beim Erstellen komplexer Selektorlisten mit [CSS-Schachtelung](/de/docs/Web/CSS/CSS_nesting) verhält sich dies genau so wie die `:is()` Pseudo-Klasse.

```css
p,
#fakeId {
  span {
    /* 1-0-1 */
  }
}
```

Im obigen Codeblock nimmt der komplexe Selektor `p, #fakeId` die Spezifizität von `#fakeId` und auch das `span`, sodass dies eine Spezifizität von `1-0-1` sowohl für `p span` als auch `#fakeId span` erzeugt. Dies ist die äquivalente Spezifizität wie der `:is(p, #fakeId) span` Selektor.

Im Allgemeinen möchten Sie die Spezifizität auf ein Minimum beschränken, aber wenn Sie die Spezifizität eines Elements aus einem bestimmten Grund erhöhen müssen, können diese drei Pseudo-Klassen helfen.

```css
a:not(#fakeId#fakeId#fakeID) {
  color: blue; /* 3-0-1 */
}
```

In diesem Beispiel werden alle Links blau sein, es sei denn, sie werden von einer Link-Deklaration mit 3 oder mehr IDs überschrieben, einem Farbwert, der ein `!important`-Flag für ein `a` enthält, oder wenn der Link eine [Inline-Stil](#inline-stile) Farbdeklaration hat. Wenn Sie eine solche Technik verwenden, fügen Sie einen Kommentar hinzu, um zu erklären, warum der Hack benötigt wurde.

### Inline-Stile

Inline-Stile, die einem Element hinzugefügt werden (z.B. `style="font-weight: bold;"`), überschreiben immer alle normalen Stile in Autor-Stylesheets und können daher als mit der höchsten Spezifizität betrachtet werden. Denken Sie an Inline-Stile mit einem Spezifizitätsgewicht von `1-0-0-0`.

Die einzige Möglichkeit, Inline-Stile zu überschreiben, ist durch die Verwendung von `!important`.

Viele JavaScript-Frameworks und -Bibliotheken fügen Inline-Stile hinzu. Die Verwendung von `!important` mit einem sehr gezielten Selektor, wie einem Attributselektor, der den Inline-Stil verwendet, ist eine Möglichkeit, diese Inline-Stile zu überschreiben.

```html
<p style="color: purple">…</p>
```

```css
p[style*="purple"] {
  color: rebeccapurple !important;
}
```

Stellen Sie sicher, dass bei jeder Einbeziehung des important-Flags ein Kommentar hinzugefügt wird, damit Code-Pfleger verstehen, warum ein CSS-Anti-Pattern verwendet wurde.

### Die `!important`-Ausnahme

CSS-Deklarationen, die als wichtig markiert sind, überschreiben alle anderen Deklarationen innerhalb derselben Kaskadenschicht und desselben Ursprungs. Obwohl technisch gesehen [`!important`](/de/docs/Web/CSS/important) nichts mit der Spezifizität zu tun hat, beeinflusst es direkt die Spezifizität und die Kaskade. Es kehrt die [Kaskaden](/de/docs/Web/CSS/CSS_cascade/Cascade) Reihenfolge der Stylesheets um.

Wenn Deklarationen aus demselben Ursprung und derselben Kaskadenschicht in Konflikt stehen und ein Eigenschaftswert das `!important`-Flag gesetzt hat, wird die wichtige Deklaration unabhängig von der Spezifizität angewendet. Wenn konkurrierende Deklarationen aus demselben Ursprung und derselben Kaskadenschicht das `!important`-Flag tragen und auf dasselbe Element angewendet werden, wird die Deklaration mit einer höheren Spezifizität angewendet.

Die Verwendung von `!important`, um Spezifizität zu überschreiben, wird als **schlechte Praxis** angesehen und sollte für diesen Zweck vermieden werden. Das Verständnis und die effektive Nutzung von Spezifizität und der Kaskade können jeden Bedarf für das `!important`-Flag beseitigen.

Anstatt `!important` zu verwenden, um fremde CSS (von externen Bibliotheken wie Bootstrap oder normalize.css) zu überschreiben, importieren Sie die Drittanbieter-Skripte direkt in [Kaskaden-Schichten](/de/docs/Web/CSS/@layer). Wenn Sie `!important` in Ihrem CSS verwenden müssen, kommentieren Sie Ihre Verwendung, damit zukünftige Code-Pfleger wissen, warum die Deklaration als wichtig markiert wurde und wissen, dass sie nicht überschrieben werden sollte. Verwenden Sie definitiv nicht `!important`, wenn Sie Plugins oder Frameworks schreiben, die andere Entwickler einfügen müssen, ohne sie kontrollieren zu können.

### Die `:where()`-Ausnahme

Die Spezifizitätsanpassungspseudo-Klasse {{CSSxRef(":where", ":where()")}} hat immer ihre Spezifizität durch Null ersetzt, `0-0-0`. Sie ermöglicht es, CSS-Selektoren sehr spezifisch auf das zu zielende Element zu machen, ohne die Spezifizität zu erhöhen.

Bei der Erstellung von Drittanbieter-CSS, das von Entwicklern verwendet wird, die keinen Zugriff darauf haben, Ihr CSS zu bearbeiten, gilt es als gute Praxis, CSS mit der geringstmöglichen Spezifizität zu erstellen. Zum Beispiel, wenn Ihr Thema das folgende CSS enthält:

```css
:where(#defaultTheme) a {
  /* 0-0-1 */
  color: red;
}
```

Dann kann der Entwickler, der das Widget implementiert, die Linkfarbe leicht mit nur Typselektoren überschreiben.

```css
footer a {
  /* 0-0-2 */
  color: blue;
}
```

### Wie `@scope`-Blöcke die Spezifizität beeinflussen

Das Einschließen eines Regelwerks innerhalb eines {{cssxref("@scope")}}-Blocks beeinflusst die Spezifizität seines Selektors nicht, unabhängig von den Selektoren, die innerhalb der [Scope-Wurzel und des Limits](/de/docs/Web/CSS/@scope#syntax) verwendet werden. Wenn Sie sich jedoch dazu entscheiden, die {{cssxref(":scope")}}-Pseudo-Klasse explizit hinzuzufügen, müssen Sie sie bei der Berechnung ihrer Spezifizität berücksichtigen. `:scope` hat wie alle regulären Pseudo-Klassen eine Spezifizität von 0-1-0. Zum Beispiel:

```css
@scope (.article-body) {
  /* :scope img has a specificity of 0-1-0 + 0-0-1 = 0-1-1 */
  :scope img {
  }
}
```

Weitere Informationen finden Sie unter [Spezifität in `@scope`](/de/docs/Web/CSS/@scope#specificity_in_scope).

## Tipps zum Umgang mit Spezifizitätsproblemen

Anstatt `!important` zu verwenden, ziehen Sie es in Betracht, Schichten zu verwenden und durchgehend eine niedrige Gewichtsspezifität in Ihrem CSS zu verwenden, sodass Stile leicht mit etwas spezifischeren Regeln überschrieben werden können. Die Verwendung von semantischem HTML hilft, Ankerpunkte bereitzustellen, von denen aus gestylt werden kann.

### Selektoren spezifisch machen, mit und ohne Spezifizitätszunahme

Indem Sie den Abschnitt des Dokuments, das Sie stylen, vor dem Element angeben, das Sie auswählen, wird die Regel spezifischer. Je nachdem, wie Sie es hinzufügen, können Sie etwas, viel oder keine Spezifizität hinzufügen, wie unten gezeigt:

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

#### Reduzieren von ID-Spezifizität

Die Spezifizität basiert auf der Form eines Selektors. Das Einfügen der `id` eines Elements als Attributselektor anstelle eines ID-Selektors ist eine gute Möglichkeit, ein Element spezifischer zu machen, ohne zu viel Spezifizität hinzuzufügen. Im vorherigen Beispiel zählt der Selektor `[id="myContent"]` als Attributselektor für die Bestimmung der Spezifizität des Selektors, obwohl er eine ID auswählt.

Sie können auch die `id` oder einen Teil eines Selektors als Parameter in die `:where()` Spezifizitätsanpassungspseudoklasse aufnehmen, wenn Sie einen Selektor spezifischer machen müssen, aber keine Spezifizität hinzufügen möchten.

### Erhöhen der Spezifizität durch Vervielfachen des Selektors

Als Sonderfall zur Erhöhung der Spezifizität können Sie die Gewichte aus den _CLASS_- oder _ID_-Spalten duplizieren. Die Vervielfachung von ID-, Klassennamen-, Pseudo-Klassen- oder Attributselektoren innerhalb eines zusammengesetzten Selektors erhöht die Spezifizität, wenn sehr spezifische Selektoren überschrieben werden müssen, über die Sie keine Kontrolle haben.

```css
#myId#myId#myId span {
  /* 3-0-1 */
}
.myClass.myClass.myClass span {
  /* 0-3-1 */
}
```

Verwenden Sie dies sparsam, wenn überhaupt. Wenn Sie Selektor-Duplizierung verwenden, kommentieren Sie immer Ihr CSS.

Durch die Verwendung von `:is()` und `:not()` (und auch `:has()`) können Sie Spezifizität erhöhen, selbst wenn Sie einer übergeordneten Komponente keine `id` hinzufügen können:

```css
:not(#fakeID#fakeId#fakeID) span {
  /* 3-0-1 */
}
:is(#fakeID#fakeId#fakeID, span) {
  /* 3-0-0 */
}
```

### Vorrang gegenüber Drittanbieter-CSS

Die Nutzung von Kaskaden-Schichten ist der Standardweg, um einem Satz von Stilen Vorrang vor einem anderen Satz von Stilen einzuräumen; Kaskaden-Schichten ermöglichen dies ohne Spezifität! Normale (nicht wichtige) Autorstile, die in Kaskadenschichten importiert werden, haben eine geringere Priorität als nicht geschichtete Autorstile.

Wenn Stile aus einem Stylesheet kommen, das Sie nicht bearbeiten oder nicht verstehen können, und Sie müssen Stile überschreiben, ist eine Strategie, die Stile, die Sie nicht kontrollieren, in eine Kaskadenschicht zu importieren. Stile in zu den Schichten später erklärten Schichten haben Priorität, wobei nicht geschichtete Stile eine höhere Priorität als alle geschichteten Stile aus demselben Ursprung haben.

Wenn zwei Selektoren aus verschiedenen Schichten dasselbe Element zusammenbringen, haben Ursprung und Wichtigkeit Vorrang; die Spezifizität des Selektors im verlierenden Stylesheet ist irrelevant.

```css
@import "TW.css" layer();
p,
p * {
  font-size: 1rem;
}
```

Im obigen Beispiel sind alle Absatztexte, einschließlich des verschachtelten Inhalts, `1rem`, egal wie viele Klassennamen die Absätze haben, die mit dem TW-Stylesheet übereinstimmen.

### Vermeiden und Überschreiben von `!important`

Der beste Ansatz ist, `!important` nicht zu verwenden. Die obigen Erklärungen zur Spezifizität sollten hilfreich dabei sein, das Flag zu vermeiden und es ganz zu entfernen, wenn es auftritt.

Um den wahrgenommenen Bedarf an `!important` zu beseitigen, können Sie Folgendes tun:

- Erhöhen Sie die Spezifizität des Selektors der früheren `!important`-Deklaration, sodass sie größer ist als andere Deklarationen
- Geben Sie ihm dieselbe Spezifizität und setzen Sie es hinter die Deklaration, die es überschreibt
- Reduzieren Sie die Spezifizität des Selektors, den Sie überschreiben möchten.

Alle diese Methoden sind in den vorherigen Abschnitten behandelt.

Wenn Sie nicht in der Lage sind, `!important`-Flags aus einem Autor-Stylesheet zu entfernen, besteht die einzige Lösung, die wichtigen Stile zu überschreiben, in der Verwendung von `!important`. Das Erstellen einer [Kaskadenschicht](/de/docs/Web/CSS/@layer) von wichtigen Deklarationsüberschreitungen ist eine hervorragende Lösung. Zwei Möglichkeiten, dies zu tun:

#### Methode 1

1. Erstellen Sie ein separates, kurzes Stylesheet, das nur wichtige Erklärungen enthält, die speziell wichtige Deklarationen überschreiben, die Sie nicht entfernen konnten.
2. Importieren Sie dieses Stylesheet als ersten Import in Ihrem CSS unter Verwendung von `layer()`, einschließlich der `@import`-Anweisung, bevor Sie auf andere Stylesheets verlinken. Dies ist, um sicherzustellen, dass die wichtigen Überschreibungen als die erste Schicht importiert werden.

```css
@import "importantOverrides.css" layer();
```

#### Methode 2

1. Erstellen Sie zu Beginn Ihrer Stylesheet-Deklarationen eine benannte Kaskadenschicht, wie folgt:

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

Die Spezifizität des Selektors des wichtigen Stils innerhalb der Schicht kann niedrig sein, solange sie das Element betrifft, das Sie überschreiben möchten. Normale Schichten sollten außerhalb der Schicht erklärt werden, da geschichtete Stile eine geringere Priorität als nicht geschichtete Stile haben.

### Baum-Nähe-Ignoranz

Die Nähe eines Elements zu anderen Elementen, die in einem gegebenen Selektor referenziert werden, hat keinen Einfluss auf die Spezifizität.

```css
body h1 {
  color: green;
}

html h1 {
  color: purple;
}
```

Die `<h1>`-Elemente werden lila sein, weil, wenn Deklarationen die gleiche Spezifizität haben, der zuletzt deklarierte Selektor Vorrang hat.

### Direkt angesprochene Elemente vs. vererbte Stile

Stile für ein direkt adressiertes Element haben immer Vorrang vor vererbten Stilen, unabhängig von der Spezifizität der geerbten Regel. Angenommen, folgendes CSS und HTML:

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

Das `h1` wird lila sein, weil der `h1`-Selektor das Element spezifisch anspricht, während das Grün vom `#parent`-Deklarationen vererbt wird.

## Beispiele

Im folgenden CSS haben wir drei Selektoren, die auf {{HTMLElement('input')}}-Elemente abzielen, um eine Farbe festzulegen. Bei einer gegebenen Eingabe ist das Spezifizitätsgewicht der Farbdeklaration mit Vorrang der entsprechende Selektor mit dem größten Gewicht:

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

Wenn die oben genannten Selektoren alle auf dieselbe Eingabe abzielen, wird die Eingabe rot, da die erste Deklaration den höchsten Wert in der _ID_-Spalte hat.

Der letzte Selektor hat vier _TYPE_-Komponenten. Obwohl er den höchsten ganzzahligen Wert hat, haben _TYPE_-Komponenten nie Vorrang vor _CLASS_-Komponenten, egal wie viele Elemente und Pseudo-Elemente enthalten sind. Die Spaltenwerte werden von links nach rechts verglichen, wenn die Spaltenwerte gleich sind.

Hätten wir im obigen Beispielcode den ID-Selektor in ein Attributselektor umgewandelt, hätten die ersten beiden Selektoren die gleiche Spezifizität, wie unten gezeigt:

```css
[id="myElement"] input.myClass {
  color: red;
} /* 0-2-1 */
input[type="password"]:required {
  color: blue;
} /* 0-2-1 */
```

Wenn mehrere Deklarationen gleiche Spezifizität haben, wird die letzte Deklaration, die im CSS gefunden wird, auf das Element angewendet. Wenn beide Selektoren das gleiche {{HTMLElement('input')}} ansprechen, wird die Farbe blau sein.

## Zusätzliche Anmerkungen

Einige Dinge, die man über Spezifizität im Kopf behalten sollte:

1. Spezifizität gilt nur, wenn dasselbe Element von mehreren Deklarationen in derselben Kaskadenschicht oder im selben Ursprung angesprochen wird. Spezifizität spielt nur für Deklarationen mit der gleichen Wichtigkeit, dem selben Ursprung und der gleichen [Kaskadenschicht](/de/docs/Web/CSS/@layer) eine Rolle. Wenn übereinstimmende Selektoren in unterschiedlichen Ursprüngen sind, bestimmt die [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade), welche Deklaration Vorrang hat.

2. Wenn zwei Selektoren in derselben Kaskadenschicht und im selben Ursprung die gleiche Spezifizität haben, wird die Scoping-Nähe berechnet; das Regelwerk mit der niedrigsten Scoping-Nähe gewinnt. Siehe [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) für weitere Details und ein Beispiel.

3. Wenn Scoping-Nähe für beide Selektoren ebenfalls gleich ist, dann kommt die Quellreihenfolge ins Spiel. Wenn alles andere gleich ist, gewinnt der letzte Selektor.

4. Laut CSS-Regeln werden [direkt angesprochene Elemente](#direkt_angesehen_vs._vererbte_stile) immer Vorrang vor Regeln haben, die ein Element von seinem Vorfahren erbt.

5. [Nähe von Elementen](#baum_nähe_ignoranz) im Dokumentbaum hat keinen Einfluss auf die Spezifizität.

## Spezifikationen

{{Specifications}}

## Siehe auch

- ["Spezifität" in "Konflikte handhaben"](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity_2)
- [SpeciFISHity](https://specifishity.com/)
- [Spezifizitätsrechner](https://specificity.keegan.st/): Eine interaktive Website, um Ihre eigenen CSS-Regeln zu testen und zu verstehen
- [_ID-CLASS-TYPE_ Übung](https://estelle.github.io/CSS/selectors/exercises/specificity.html) ein Spezifizitätsquiz
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax) Leitfaden
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
- [CSS-Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Anfangs](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value), [berechnet](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value), [verwendet](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value) und [tatsächlich](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value) Werte
- [Wertedefinitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
- [Lernen: Konflikte handhaben](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [CSS-Schachtelungsmodul](/de/docs/Web/CSS/CSS_nesting)
