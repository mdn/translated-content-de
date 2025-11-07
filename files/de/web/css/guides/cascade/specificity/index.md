---
title: Spezifität
slug: Web/CSS/Guides/Cascade/Specificity
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**Spezifität** ist der Algorithmus, den Browser verwenden, um die [CSS-Deklaration](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#css_syntax_basics) zu bestimmen, die für ein Element am relevantesten ist, und damit den anzuwendenden Eigenschaftswert. Der Spezifitäts-Algorithmus berechnet das Gewicht eines [CSS-Selectors](/de/docs/Web/CSS/Reference#selectors), um zu ermitteln, welche Regel aus konkurrierenden CSS-Deklarationen auf ein Element angewendet wird.

> [!NOTE]
> Browser betrachten Spezifität **nachdem** sie [Ursprung und Wichtigkeit des Kaskadenursprungs](/de/docs/Web/CSS/Guides/Cascade/Introduction) bestimmt haben. Mit anderen Worten, für konkurrierende Eigenschaftsdeklarationen wird die Spezifität nur zwischen Selektoren aus dem Kaskadenursprung und der Schicht verglichen, die Vorrang bei der Eigenschaft hat. [Nähe zur Erfassung](/de/docs/Web/CSS/Reference/At-rules/@scope#how_scope_conflicts_are_resolved) und Reihenfolge des Erscheinens werden relevant, wenn die Spezifitäten der konkurrierenden Deklarationen in der Kaskadenschicht mit Vorrang gleich sind.

## Wie wird Spezifität berechnet?

Spezifität ist ein Algorithmus, der das Gewicht berechnet, das auf eine gegebene CSS-Deklaration angewendet wird. Das Gewicht wird durch die Anzahl der [Selektoren jeder Gewichtskategorie](#selektor-gewichtskategorien) im Selektor bestimmt, die mit dem Element (oder Pseudo-Element) übereinstimmen. Wenn es zwei oder mehr Deklarationen gibt, die unterschiedliche Eigenschaftswerte für dasselbe Element bereitstellen, wird der Deklarationswert im Stilblock, dessen selektor am meisten algorithmisches Gewicht hat, angewendet.

Der Spezifitäts-Algorithmus ist im Grunde ein dreispaltiger Wert von drei Kategorien oder Gewichten - ID, CLASS und TYPE - entsprechend den drei Arten von Selektoren. Der Wert repräsentiert die Anzahl der Selektorkomponenten in jeder Gewichtskategorie als _ID - CLASS - TYPE_. Die drei Spalten werden erstellt, indem die Anzahl der Selektorkomponenten für jede Selektor-Gewichtskategorie in den Selektoren gezählt wird, die mit dem Element übereinstimmen.

### Selektor-Gewichtskategorien

Die Selektor-Gewichtskategorien sind hier in der Reihenfolge abnehmender Spezifität aufgelistet:

- ID-Spalte
  - : Beinhaltet nur [ID-Selektoren](/de/docs/Web/CSS/Reference/Selectors/ID_selectors), wie `#example`. Für jede ID in einem passenden Selektor addieren Sie 1-0-0 zum Gewichtswert.
- CLASS-Spalte
  - : Beinhaltet [Klassenselektoren](/de/docs/Web/CSS/Reference/Selectors/Class_selectors), wie `.myClass`, Attributselektoren wie `[type="radio"]` und `[lang|="fr"]` sowie Pseudo-Klassen, wie `:hover`, `:nth-of-type(3n)` und `:required`. Für jede Klasse, jeden Attributselektor oder jede Pseudo-Klasse in einem passenden Selektor addieren Sie 0-1-0 zum Gewichtswert.
- TYPE-Spalte
  - : Beinhaltet [Typselektoren](/de/docs/Web/CSS/Reference/Selectors/Type_selectors), wie `p`, `h1` und `td` sowie Pseudo-Elemente wie `::before`, `::placeholder` und alle anderen Selektoren mit Doppelpunkt-Notation. Für jeden Typ oder Pseudo-Element in einem passenden Selektor fügen Sie 0-0-1 zum Gewichtswert hinzu.
- Kein Wert
  - : Der universelle Selektor ({{CSSxRef("Universal_selectors", "*")}}) und die Pseudo-Klasse {{CSSxRef(":where", ":where()")}} und ihre Parameter werden nicht gezählt, wenn das Gewicht berechnet wird, sodass ihr Wert 0-0-0 ist, aber sie passen auf Elemente. Diese Selektoren beeinflussen den Spezifitätsgewichtswert nicht.

Kombinatoren, wie {{CSSxRef("Next-sibling_combinator", "+")}}, {{CSSxRef("Child_combinator", "&gt;")}}, {{CSSxRef("Subsequent-sibling_combinator", "~")}}, [" "](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator), und {{CSSxRef("Column_combinator", "||")}}, können einen Selektor spezifischer machen, was ausgewählt wird, aber sie fügen dem Spezifitätsgewicht keinen Wert hinzu.

Der `&`-Verschachtelungs-Kombinator fügt kein Spezifitätsgewicht hinzu, aber verschachtelte Regeln tun dies. In Bezug auf Spezifität und Funktionalität ist Verschachtelung dem {{CSSxRef(":is", ":is()")}} Pseudo-Klasse sehr ähnlich.

Wie bei der Verschachtelung fügen die {{CSSxRef(":is", ":is()")}}, {{CSSxRef(":has", ":has()")}}, und Negations- ({{CSSxRef(":not", ":not()")}}) Pseudo-Klassen selbst kein Gewicht hinzu. Die Parameter in diesen Selektoren jedoch tun dies. Das Spezifitätsgewicht jedes einzelnen resultiert aus dem Selektorparameter in der Liste der Selektoren mit der höchsten Spezifität. Ebenso bei verschachtelten Selektoren wird das durch den verschachtelten Selektorkomponenten hinzugefügte Spezifitätsgewicht durch den Selektor in der kommagetrennten Liste der verschachtelten Selektoren mit der höchsten Spezifität bestimmt.

Die [Ausnahmen für `:not()`, `:is()`, `:has()` und CSS-Verschachtelung](#the_is_not_has_and_css_nesting_exceptions) werden unten erörtert.

#### Passender Selektor

Das Spezifitätsgewicht stammt von dem passenden Selektor. Nehmen Sie diesen CSS-Selektor mit drei kommagetrennten Selektoren als Beispiel:

```css
[type="password"],
input:focus,
:root #myApp input:required {
  color: blue;
}
```

Der `[type="password"]`-Selektor in der obigen Selektorliste, mit einem Spezifitätsgewicht von `0-1-0`, wendet die `color: blue`-Deklaration auf alle Passworteingabetypen an.

Alle Eingaben, unabhängig vom Typ, wenn sie den Fokus erhalten, entsprechen dem zweiten Selektor in der Liste, `input:focus`, mit einem Spezifitätsgewicht von `0-1-1`; dieses Gewicht setzt sich aus der `:focus`-Pseudo-Klasse (0-1-0) und dem Eingabetyp `input` (0-0-1) zusammen. Wenn die Passworteingabe den Fokus hat, wird sie mit `input:focus` abgeglichen, und das Spezifitätsgewicht für die `color: blue` Style-Deklaration wird `0-1-1` sein. Wenn das Passwort keinen Fokus hat, bleibt das Spezifitätsgewicht bei `0-1-0`.

Die Spezifität für eine erforderliche Eingabe, die in einem Element mit dem Attribut `id="myApp"` verschachtelt ist, beträgt `1-2-1`, basierend auf einer ID, zwei Pseudo-Klassen und einer Elementart.

Wenn der Passworteingabetyp mit `required` in einem Element mit gesetztem `id="myApp"` verschachtelt ist, beträgt das Spezifitätsgewicht `1-2-1`, basierend auf einer ID, zwei Pseudo-Klassen und einer Elementart, unabhängig davon, ob es Fokus hat oder nicht. Warum ist das Spezifitätsgewicht in diesem Fall `1-2-1` statt `0-1-1` oder `0-1-0`? Weil das Spezifitätsgewicht von dem passenden Selektor mit dem höchsten Spezifitätsgewicht stammt. Das Gewicht wird durch den Vergleich der Werte in den drei Spalten von links nach rechts bestimmt.

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

Die erste Spalte ist der Wert der _ID_-Komponente, die Anzahl der IDs in jedem Selektor. Die Zahlen in den _ID_-Spalten der konkurrierenden Selektoren werden verglichen. Der Selektor mit dem größeren Wert in der _ID_-Spalte gewinnt, unabhängig davon, welche Werte in den anderen Spalten sind. Im obigen Beispiel, selbst wenn der gelbe Selektor mehr Komponenten insgesamt hat, zählt nur der Wert der ersten Spalte.

Wenn die Zahl in den _ID_-Spalten der konkurrierenden Selektoren gleich ist, wird die nächste Spalte, _CLASS_, verglichen, wie unten gezeigt.

```css
#myElement {
  color: yellow; /* 1-0-0 */
}
#myApp [id="myElement"] {
  color: green; /* 1-1-0  - WINS!! */
}
```

Die _CLASS_-Spalte ist die Zählung der Klassennamen, Attributselektoren und Pseudo-Klassen im Selektor. Wenn der _ID_-Spaltenwert gleich ist, gewinnt der Selektor mit dem größeren Wert in der _CLASS_-Spalte, unabhängig von dem Wert in der _TYPE_-Spalte. Dies wird im Beispiel unten gezeigt.

```css
:root input {
  color: green; /* 0-1-1 - WINS because CLASS column is greater */
}
html body main input {
  color: yellow; /* 0-0-4 */
}
```

Wenn die Zahlen in den _CLASS_- und _ID_-Spalten in konkurrierenden Selektoren gleich sind, wird die _TYPE_-Spalte relevant. Die _TYPE_-Spalte ist die Anzahl der Elementarten und Pseudo-Elemente im Selektor. Wenn die ersten beiden Spalten denselben Wert haben, gewinnt der Selektor mit der größeren Zahl in der _TYPE_-Spalte.

Wenn die konkurrierenden Selektoren die gleichen Werte in allen drei Spalten haben, kommt die Nähe-Regel ins Spiel, wobei die zuletzt erklärte Style Vorrang hat.

```css
input.myClass {
  color: yellow; /* 0-1-1 */
}
:root input {
  color: green; /* 0-1-1 WINS because it comes later */
}
```

### Die Ausnahmen für `:is()`, `:not()`, `:has()` und CSS-Verschachtelung

Die matches-any Pseudo-Klasse {{CSSxRef(":is", ":is()")}}, die relationale Pseudo-Klasse {{CSSxRef(":has", ":has()")}}, und die Negations-Pseudo-Klasse {{CSSxRef(":not", ":not()")}} werden _nicht_ als Pseudo-Klassen in der Berechnung des Spezifitätsgewichts betrachtet. Sie selbst fügen der Spezifitätsgleichung kein Gewicht hinzu. Die Selektorparameter, die in die Pseudo-Klassen-Klammern übergeben werden, sind jedoch Teil des Spezifizitäts-Algorithmus; das Gewicht der matches-any und Negations-Pseudo-Klasse in der Spezifitätswertberechnung ist das Gewicht des Parameters [Gewicht](#selektor-gewichtskategorien).

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

Beachten Sie, dass im obigen CSS-Paarung das Spezifizitätsgewicht, das von den Pseudo-Klassen `:is()`, `:has()` und `:not()` bereitgestellt wird, der Wert des Selektorparameters ist, nicht der Pseudo-Klasse.

Alle drei dieser Pseudo-Klassen akzeptieren komplexe Selektorlisten, eine Liste von kommagetrennten Selektoren, als Parameter. Diese Funktion kann verwendet werden, um die Spezifizität eines Selektors zu erhöhen:

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

Im obigen CSS-Codeblock haben wir `#fakeId` in die Selektoren eingefügt. Dieses `#fakeId` fügt jedem Absatz `1-0-0` zum Spezifizitätsgewicht hinzu.

Bei der Erstellung komplexer Selektorlisten mit [CSS-Verschachtelung](/de/docs/Web/CSS/Guides/Nesting) verhält sich dies genau wie die Pseudo-Klasse `:is()`.

```css
p,
#fakeId {
  span {
    /* 1-0-1 */
  }
}
```

Im obigen Codeblock ist der komplexe Selektor `p, #fakeId` und die Spezifizität wird aus `#fakeId` und auch `span` genommen, sodass dies eine Spezifizität von `1-0-1` sowohl für `p span` als auch für `#fakeId span` erzeugt. Dies entspricht der Spezifizität des `:is(p, #fakeId) span` Selektors.

Im Allgemeinen möchten Sie die Spezifizität auf ein Minimum beschränken, aber wenn Sie die Spezifizität eines Elements aus einem bestimmten Grund erhöhen müssen, können diese drei Pseudo-Klassen helfen.

```css
a:not(#fakeId#fakeId#fakeID) {
  color: blue; /* 3-0-1 */
}
```

In diesem Beispiel werden alle Links blau sein, es sei denn, sie werden durch eine Link-Deklaration mit 3 oder mehr IDs überschrieben, einem Farbwert, der ein `a` enthält, das das [`!important`-Flag](#the_!important_exception) enthält, oder wenn der Link eine [Inline-Stil](#inline-stile) Farbdeklaration hat. Wenn Sie eine solche Technik verwenden, fügen Sie einen Kommentar hinzu, um zu erklären, warum der Hack erforderlich war.

### Inline-Stile

Inline-Stile, die einem Element hinzugefügt werden (z.B. `style="font-weight: bold;"`), überschreiben immer alle normalen Stile in Autoren Stylesheets und können daher als mit der höchsten Spezifizität angesehen werden. Denken Sie an Inline-Stile als mit einem Spezifizitätsgewicht von `1-0-0-0`.

Die einzige Möglichkeit, Inline-Stile zu überschreiben, besteht darin, `!important` zu verwenden.

Viele JavaScript-Frameworks und -Bibliotheken fügen Inline-Stile hinzu. Die Verwendung von `!important` mit einem sehr gezielten Selektor, wie einem Attributselektor, der den Inline-Stil verwendet, ist eine Möglichkeit, diese Inline-Stile zu überschreiben.

```html
<p style="color: purple">…</p>
```

```css
p[style*="purple"] {
  color: rebeccapurple !important;
}
```

Stellen Sie sicher, dass Sie mit jeder Verwendung des wichtigen Flags einen Kommentar hinzufügen, damit Codepfleger verstehen, warum ein CSS-Antimuster verwendet wurde.

### Die `!important`-Ausnahme

CSS-Deklarationen, die als wichtig markiert sind, überschreiben alle anderen Deklarationen innerhalb derselben Kaskadenschicht und Herkunft. Auch wenn [`!important`](/de/docs/Web/CSS/Reference/Values/important) technisch nichts mit Spezifizität zu tun hat, interagiert es direkt mit der Spezifizität und der Kaskade. Es kehrt die [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction) Reihenfolge der Stylesheets um.

Wenn Deklarationen aus derselben Herkunft und Kaskadenschicht in Konflikt stehen und ein Eigenschaftswert das `!important`-Flag hat, wird unabhängig von der Spezifizität die wichtige Deklaration angewendet. Wenn konkurrierende Deklarationen aus derselben Herkunft und Kaskadenschicht mit dem `!important`-Flag auf dasselbe Element angewendet werden, wird die Deklaration mit höherer Spezifizität angewendet.

Die Verwendung von `!important`, um Spezifizität zu überschreiben, wird als **schlechte Praxis** angesehen und sollte zu diesem Zweck vermieden werden. Das Verständnis und die effektive Nutzung von Spezifizität und Kaskade können jegliche Notwendigkeit für das `!important`-Flag beseitigen.

Anstatt `!important` zu verwenden, um fremdes CSS (aus externen Bibliotheken, wie Bootstrap oder normalize.css) zu überschreiben, importieren Sie die Drittanbieterskripte direkt in [Kaskadenschichten](/de/docs/Web/CSS/Reference/At-rules/@layer). Wenn Sie `!important` in Ihrem CSS verwenden müssen, kommentieren Sie die Verwendung, damit zukünftige Codepfleger wissen, warum die Deklaration als wichtig markiert wurde und sie nicht überschreiben sollen. Aber verwenden Sie definitiv nicht `!important`, wenn Sie Plugins oder Frameworks schreiben, die andere Entwickler integrieren müssen, ohne die Kontrolle darüber zu haben.

### Die `:where()`-Ausnahme

Die Spezifizitätsanpassungs-Pseudo-Klasse {{CSSxRef(":where", ":where()")}} hat immer ihre Spezifizität durch null, `0-0-0`, ersetzt. Sie ermöglicht es, CSS-Selektoren sehr spezifisch zu machen, welches Element gezielt wird, ohne die Spezifizität zu erhöhen.

Beim Erstellen von Drittanbieter-CSS, das von Entwicklern verwendet werden soll, die keinen Zugriff haben, um Ihr CSS zu bearbeiten, wird es als gute Praxis angesehen, CSS mit der niedrigsten möglichen Spezifizität zu erstellen. Wenn Ihr Thema zum Beispiel folgendes CSS enthält:

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

Das Einfügen eines Regelsets in einen {{cssxref("@scope")}}-Block beeinflusst nicht die Spezifizität seines Selektors, unabhängig von den im [scoperoot und -limit](/de/docs/Web/CSS/Reference/At-rules/@scope#syntax) verwendeten Selektoren.
Wenn Sie sich jedoch entscheiden, die {{cssxref(":scope")}}-Pseudo-Klasse explizit hinzuzufügen, müssen Sie dies bei der Berechnung ihrer Spezifizität berücksichtigen.
`:scope`, wie alle regulären Pseudo-Klassen, hat eine Spezifizität von 0-1-0. Zum Beispiel:

```css
@scope (.article-body) {
  /* :scope img has a specificity of 0-1-0 + 0-0-1 = 0-1-1 */
  :scope img {
  }
}
```

Siehe [Spezifizität in `@scope`](/de/docs/Web/CSS/Reference/At-rules/@scope#specificity_in_scope) für weitere Informationen.

## Tipps für den Umgang mit Spezifitätsproblemen

Anstelle von `!important` sollten Sie darüber nachdenken, Kaskadenschichten zu verwenden und durchgehend niedrige Spezifikationsgewichte in Ihrem CSS zu verwenden, damit Stile leicht durch etwas spezifischere Regeln überschrieben werden können. Die Verwendung von semantischem HTML hilft, Anker bereitzustellen, von denen das Styling angewendet werden kann.

### Selektoren spezifisch machen mit und ohne Erhöhung der Spezifizität

Indem Sie den Abschnitt des Dokuments angeben, den Sie stylen, bevor Sie das Element auswählen, wird die Regel spezifischer. Je nachdem, wie Sie es hinzufügen, können Sie etwas, viel oder gar keine Spezifizität hinzufügen, wie unten gezeigt:

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

Unabhängig von der Reihenfolge wird die Überschrift grün, da diese Regel die spezifischste ist.

#### ID-Spezifizität reduzieren

Die Spezifizität basiert auf der Form eines Selektors. Das Einschließen der `id` eines Elements als Attributselektor anstelle eines ID-Selektors ist eine gute Möglichkeit, ein Element spezifischer zu machen, ohne zu viel Spezifizität hinzuzufügen. Im vorherigen Beispiel zählt der Selektor `[id="myContent"]` als Attributselektor zur Bestimmung der Spezifizität, auch wenn er eine ID auswählt.

Sie können auch die `id` oder einen Teil eines Selektors als Parameter in die `:where()`-Spezifikationsanpassungs-Pseudo-Klasse einfügen, wenn Sie einen Selektor spezifischer machen möchten, aber überhaupt keine Spezifizität hinzufügen wollen.

### Erhöhung der Spezifizität durch Duplizieren des Selektors

Als Sonderfall zur Erhöhung der Spezifizität können Sie Gewichte aus den _CLASS_- oder _ID_-Spalten duplizieren. Durch das Duplizieren von ID-, Klassen-, Pseudo-Klassen- oder Attributselektoren innerhalb eines zusammengesetzten Selektors wird die Spezifizität erhöht, wenn sehr spezifische Selektoren überschrieben werden, über die Sie keine Kontrolle haben.

```css
#myId#myId#myId span {
  /* 3-0-1 */
}
.myClass.myClass.myClass span {
  /* 0-3-1 */
}
```

Verwenden Sie dies sparsam, wenn überhaupt. Wenn Sie Selektorduplikation verwenden, kommentieren Sie immer Ihr CSS.

Durch die Verwendung von `:is()` und `:not()` (und auch `:has()`), können Sie die Spezifizität erhöhen, auch wenn Sie einer Elternkomponente keine `id` hinzufügen können:

```css
:not(#fakeID#fakeId#fakeID) span {
  /* 3-0-1 */
}
:is(#fakeID#fakeId#fakeID, span) {
  /* 3-0-0 */
}
```

### Vorrang vor Drittanbieter-CSS

Die Nutzung von Kaskadenschichten ist der Standardweg, um einem Satz von Stilen Vorrang vor einem anderen Satz von Stilen zu geben; Kaskadenschichten ermöglichen dies ohne Spezifizität! Normale (nicht wichtige) Autorenstile, die in Kaskadenschichten importiert werden, haben niedrigeren Vorrang als nicht geschichtete Autorenstile.

Wenn Stile aus einem Stylesheet kommen, das Sie nicht bearbeiten oder nicht verstehen können und Sie Stile überschreiben müssen, besteht eine Strategie darin, die Stile, die Sie nicht kontrollieren, in eine Kaskadenschicht zu importieren. Stile in anschließend deklarierten Schichten haben Vorrang, wobei nicht geschichtete Stile Vorrang vor allen geschichteten Stilen der gleichen Herkunft haben.

Wenn zwei Selektoren aus verschiedenen Schichten dasselbe Element treffen, haben Ursprung und Wichtigkeit Vorrang; die Spezifizierung des Selektors im verlierenden Stylesheet ist irrelevant.

```css
@import "TW.css" layer();
p,
p * {
  font-size: 1rem;
}
```

Im obigen Beispiel ist aller Absatztext, einschließlich des verschachtelten Inhalts, `1rem`, unabhängig davon, wie viele Klassennamen die Absätze haben, die mit dem TW-Stylesheet übereinstimmen.

### Vermeidung und Überschreibung von `!important`

Der beste Ansatz ist, `!important` nicht zu verwenden. Die obigen Erklärungen zur Spezifizität sollten hilfreich sein, um die Verwendung des Flags zu vermeiden und es insgesamt zu entfernen, wenn es auftritt.

Um die wahrgenommene Notwendigkeit für `!important` zu entfernen, können Sie eine der folgenden Maßnahmen ergreifen:

- Erhöhen Sie die Spezifizität des Selektors der ehemals `!important` Deklaration, sodass sie größer ist als andere Deklarationen
- Geben Sie ihm die gleiche Spezifizität und setzen Sie ihn nach der Deklaration, die er überschreiben soll
- Reduzieren Sie die Spezifizität des Selektors, den Sie zu überschreiben versuchen.

Alle diese Methoden werden in den vorangehenden Abschnitten behandelt.

Wenn Sie keine `!important`-Flags aus einem Autoren-Stylesheet entfernen können, ist die einzige Lösung, die wichtigen Stile zu überschreiben, die Verwendung von `!important`. Die Erstellung einer [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer) mit wichtigen Deklarationsüberschreibungen ist eine hervorragende Lösung. Zwei Wege, dies zu tun, sind:

#### Methode 1

1. Erstellen Sie ein separates, kurzes Stylesheet, das nur wichtige Deklarationen enthält, die speziell alle wichtigen Deklarationen überschreiben, die Sie nicht entfernen konnten.
2. Importieren Sie dieses Stylesheet als ersten Import in Ihrem CSS using `layer()`, einschließlich der `@import`-Anweisung, bevor Sie andere Stylesheets verlinken. Dies ist, um sicherzustellen, dass die wichtigen Überschreibungen als erste Schicht importiert werden.

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

Die Spezifizität des Selektors des wichtigen Stils innerhalb der Schicht kann niedrig sein, solange er dem zu überschreibenden Element entspricht. Normale Schichten sollten außerhalb der Schicht deklariert werden, weil geschichtete Stile geringeren Vorrang als ungeschichtete Stile haben.

### Baum-Nähe-Ignoranz

Die Nähe eines Elements zu anderen Elementen, die in einem bestimmten Selektor referenziert werden, hat keinen Einfluss auf die Spezifizität.

```css
body h1 {
  color: green;
}

html h1 {
  color: purple;
}
```

Die `<h1>`-Elemente werden lila sein, weil, wenn Deklarationen die gleiche Spezifizität haben, der zuletzt deklarierte Selektor Vorrang hat.

### Direkt angesteuerte Elemente vs. geerbte Stile

Stile für ein direkt angesteuertes Element haben immer Vorrang vor geerbten Stilen, unabhängig von der Spezifizität der geerbten Regel. Angesichts des folgenden CSS und HTML:

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

Das `h1` wird lila sein, weil der `h1`-Selektor das Element spezifisch anspricht, während das Grün von den Deklarationen von `#parent` geerbt wird.

## Beispiele

Im folgenden CSS haben wir drei Selektoren, die {{HTMLElement('input')}} Elemente ansprechen, um eine Farbe festzulegen. Für eine gegebene Eingabe ist das Spezifizitätsgewicht der Farbe Deklaration, die Vorrang hat, der übereinstimmende Selektor mit dem größten Gewicht:

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

Wenn die obigen Selektoren alle dieselbe Eingabe treffen, wird die Eingabe rot, da die erste Deklaration den höchsten Wert in der _ID_-Spalte hat.

Der letzte Selektor hat vier _TYPE_-Komponenten. Während es den höchsten ganzzahligen Wert hat, haben _TYPE_-Komponenten, egal wie viele Elemente und Pseudo-Elemente eingeschlossen sind, auch wenn es 150 wären, niemals Vorrang vor _CLASS_-Komponenten. Die Spaltenwerte werden von links nach rechts verglichen, wenn die Spaltenwerte gleich sind.

Hätten wir den ID-Selektor im obigen Beispielcode in einen Attributselektor konvertiert, hätten die ersten beiden Selektoren die gleiche Spezifizität, wie unten gezeigt:

```css
[id="myElement"] input.myClass {
  color: red;
} /* 0-2-1 */
input[type="password"]:required {
  color: blue;
} /* 0-2-1 */
```

Wenn mehrere Deklarationen die gleiche Spezifizität haben, wird die zuletzt im CSS gefundene Deklaration auf das Element angewendet. Wenn beide Selektoren dieselbe {{HTMLElement('input')}} treffen, wird die Farbe blau.

## Zusätzliche Anmerkungen

Ein paar Dinge, die zu beachten sind, wenn es um Spezifizität geht:

1. Spezifizität gilt nur, wenn dasselbe Element von mehreren Deklarationen in derselben Kaskadenschicht oder Herkunft getroffen wird. Spezifizität spielt nur für Deklarationen der gleichen Wichtigkeit und gleichen Herkunft und [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer) eine Rolle. Wenn übereinstimmende Selektoren in unterschiedlichen Herkunft sortiert sind, bestimmt die [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction), welche Deklaration Vorrang hat.

2. Wenn zwei Selektoren in derselben Kaskadenschicht und Herkunft die gleiche Spezifizität haben, wird die Reichweitennähe berechnet; das Regelset mit der geringsten Reichweitennähe gewinnt. Siehe [How `@scope` conflicts are resolved](/de/docs/Web/CSS/Reference/At-rules/@scope#how_scope_conflicts_are_resolved) für weitere Details und ein Beispiel.

3. Wenn die Reichweitennähe für beide Selektoren ebenfalls gleich ist, spielt die Quellreihenfolge dann eine Rolle. Wenn alles andere gleich ist, gewinnt der letzte Selektor.

4. Laut CSS-Regeln werden [direkt anvisierte Elemente](#direkt_angesteuerte_elemente_vs._geerbte_stile) immer Vorrang über Regeln haben, die ein Element von seinem Vorfahren erbt.

5. [Die Nähe von Elementen](#baum-nähe-ignoranz) im Dokumentbaum hat keinen Einfluss auf die Spezifizität.

## Spezifikationen

{{Specifications}}

## Siehe auch

- ["Spezifizität" in "Konflikte bewältigen"](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity_2)
- [SpeciFISHity](https://specifishity.com/)
- [Spezifizitätsrechner](https://specificity.keegan.st/): Eine interaktive Website, um Ihre eigenen CSS-Regeln zu testen und zu verstehen
- [_ID-CLASS-TYPE_ Übung](https://estelle.github.io/CSS/selectors/exercises/specificity.html) ein Spezifizitäts-Quiz
- [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax/Introduction) Leitfaden
- [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax) Modul
- [CSS-Fehlerbehandlung](/de/docs/Web/CSS/Guides/Syntax/Error_handling)
- [At-rules](/de/docs/Web/CSS/Guides/Syntax/At-rules)
- [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
- [Initial](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value), [berechnet](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value), [verwendet](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value), und [aktuell](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value) Werte
- [Wertedefinitionssyntax](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade) Modul
- [CSS-Verschachtelungsmodul](/de/docs/Web/CSS/Guides/Nesting)
