---
title: Spezifität
slug: Web/CSS/Guides/Cascade/Specificity
l10n:
  sourceCommit: 3fbc8b2ba17c1cf331fb67ce2e6561b15bf4f197
---

**Spezifität** ist das Gewicht, das Browser im Kaskaden-Algorithmus verwenden, um die [CSS-Deklaration](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#css_syntax_basics) zu bestimmen, die für ein Element am relevantesten ist, was wiederum den anzuwendenden Eigenschaftswert für das Element bestimmt. Der Spezifitäts-Algorithmus berechnet dieses Gewicht aus einem [CSS-Selektor](/de/docs/Web/CSS/Reference#selectors) und vergleicht die resultierenden Werte, um zu entscheiden, welche Regel aus konkurrierenden CSS-Deklarationen innerhalb desselben Ursprungs und derselben Schicht auf ein Element angewendet wird.

> [!NOTE]
> Browser berücksichtigen Spezifität **nachdem** sie den [Ursprung und die Wichtigkeit der Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction) bestimmt haben. Mit anderen Worten, bei konkurrierenden Eigenschaftsdeklarationen ist Spezifität nur zwischen Selektoren aus dem einen [Ursprung und der Schicht der Kaskade](/de/docs/Web/CSS/Reference/At-rules/@layer) relevant, die für die Eigenschaft Vorrang hat. [Scope-Nähe](/de/docs/Web/CSS/Reference/At-rules/@scope#how_scope_conflicts_are_resolved) und Reihenfolge des Auftretens werden relevant, wenn die Selektor-Spezifitäten der konkurrierenden Deklarationen in der Kaskadenschicht mit Vorrang gleich sind.

## Wie wird Spezifität berechnet?

Spezifität ist das Gewicht, das auf eine gegebene CSS-Deklaration angewendet wird. Der Spezifitäts-Algorithmus berechnet dieses Gewicht basierend auf der Anzahl der [Selektoren jeder Gewichtskategorie](#selektor-gewichtskategorien) im Selektor, der mit dem Element (oder Pseudo-Element) übereinstimmt. Wenn es zwei oder mehr Deklarationen gibt, die unterschiedliche Eigenschaftswerte für dasselbe Element bereitstellen, wird der Deklarationswert im Stilblock mit dem passenden Selektor mit dem größten Gewicht angewendet.

Der Spezifitätswert ist im Grunde genommen ein drei-spaltiger Wert aus drei Kategorien oder Gewichten - ID, CLASS und TYPE - entsprechend den drei Arten von Selektoren. Der Wert repräsentiert die Anzahl der Selektorkomponenten in jeder Gewichtskategorie und wird als _ID - CLASS - TYPE_ geschrieben. Die drei Spalten entstehen durch Zählen der Anzahl der Selektorkomponenten für jede Selektor-Gewichtskategorie in den Selektoren, die mit dem Element übereinstimmen.

### Selektor-Gewichtskategorien

Die Selektor-Gewichtskategorien sind hier in der Reihenfolge abnehmender Spezifität aufgeführt:

- ID-Spalte
  - : Beinhaltet nur [ID-Selektoren](/de/docs/Web/CSS/Reference/Selectors/ID_selectors), wie `#example`. Für jede ID in einem passenden Selektor, addieren Sie 1-0-0 zum Gewichtswert.
- CLASS-Spalte
  - : Beinhaltet [Klassen-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Class_selectors), wie `.myClass`, Attribut-Selektoren wie `[type="radio"]` und `[lang|="fr"]` und Pseudo-Klassen, wie `:hover`, `:nth-of-type(3n)` und `:required`. Für jede Klasse, jeden Attributselektor oder jede Pseudo-Klasse in einem passenden Selektor addieren Sie 0-1-0 zum Gewichtswert.
- TYPE-Spalte
  - : Beinhaltet [Typ-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Type_selectors), wie `p`, `h1`, und `td`, und Pseudo-Elemente wie `::before`, `::placeholder` und alle anderen Selektoren mit Doppelpunktsyntax. Für jeden Typ oder Pseudo-Element in einem passenden Selektor, addieren Sie 0-0-1 zum Gewichtswert.
- Kein Wert
  - : Der universelle Selektor ({{CSSxRef("Universal_selectors", "*")}}) und die Pseudo-Klasse {{cssxref(":where()")}} und deren Parameter werden bei der Berechnung des Gewichts nicht gezählt, sodass ihr Wert 0-0-0 ist, aber sie passen zu den Elementen. Diese Selektoren beeinflussen den Spezifizitätsgewichtswert nicht.

Kombinatoren, wie {{CSSxRef("Next-sibling_combinator", "+")}}, {{CSSxRef("Child_combinator", "&gt;")}}, {{CSSxRef("Subsequent-sibling_combinator", "~")}}, [" "](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator) und {{CSSxRef("Column_combinator", "||")}}, können einen Selektor präzisieren, was ausgewählt wird, aber sie fügen dem Spezifizitätsgewicht keinen Wert hinzu.

Der `&` Schachtelungskombinator fügt kein Spezifizitätsgewicht hinzu, aber verschachtelte Regeln tun es. In Bezug auf Spezifizität und Funktionalität ist das Verschachteln dem {{cssxref(":is()")}} Pseudo-Klasse sehr ähnlich.

Wie beim Verschachteln fügen die Pseudo-Klassen {{cssxref(":is()")}}, {{cssxref(":has()")}} und Negation ({{cssxref(":not()")}}) selbst kein Gewicht hinzu. Die Parameter in diesen Selektoren tun dies jedoch. Das Spezifizitätsgewicht jedes einzelnen ergibt sich aus dem Parameter im Selektor mit der höchsten Spezifizität in der Liste der Selektoren. Ähnlich verhält es sich mit verschachtelten Selektoren; das Spezifizitätsgewicht, das durch die verschachtelte Selektorkomponente hinzugefügt wird, ist der Selektor in der kommagetrennten Liste von verschachtelten Selektoren mit der höchsten Spezifizität.

Die [Ausnahmen bei `:not()`, `:is()`, `:has()` und CSS-Verschachtelung](#the_is_not_has_and_css_nesting_exceptions) werden unten diskutiert.

#### Passende Selektoren

Das Spezifizitätsgewicht ergibt sich aus dem passenden Selektor. Nehmen Sie diesen CSS-Selektor mit drei kommagetrennten Selektoren als Beispiel:

```css
[type="password"],
input:focus,
:root #myApp input:required {
  color: blue;
}
```

Der `[type="password"]` Selektor in der obigen Selektorliste, mit einem Spezifizitätsgewicht von `0-1-0`, wendet die `color: blue` Deklaration auf alle Passwort-Eingabetypen an.

Alle Eingaben, egal welcher Typ, bei Empfang des Fokus, entsprechen dem zweiten Selektor in der Liste, `input:focus`, mit einem Spezifizitätsgewicht von `0-1-1`; dieses Gewicht besteht aus der `:focus` Pseudo-Klasse (0-1-0) und dem `input` Typ (0-0-1). Wenn der Passwort-Eingabetyp den Fokus hat, wird er mit `input:focus` übereinstimmen, und das Spezifizitätsgewicht für die `color: blue` Stildeklaration wird `0-1-1` sein. Wenn dieses Passwort keinen Fokus hat, bleibt das Spezifizitätsgewicht bei `0-1-0`.

Die Spezifizität für ein erforderliches Eingabefeld, das in einem Element mit dem Attribut `id="myApp"` verschachtelt ist, beträgt `1-2-1`, basierend auf einer ID, zwei Pseudoklassen und einem Elementtyp.

Wenn der Passwort-Eingabetyp mit `required` in einem Element mit `id="myApp"` verschachtelt ist, beträgt das Spezifizitätsgewicht `1-2-1`, basierend auf einer ID, zwei Pseudoklassen und einem Elementtyp, unabhängig davon, ob es den Fokus hat oder nicht. Warum ist das Spezifizitätsgewicht in diesem Fall `1-2-1` anstatt `0-1-1` oder `0-1-0`? Weil das Spezifizitätsgewicht vom passenden Selektor mit dem höchsten Spezifizitätsgewicht stammt. Das Gewicht wird durch Vergleichen der Werte in den drei Spalten von links nach rechts bestimmt.

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

Sobald die Spezifizitätswerte der relevanten Selektoren bestimmt sind, wird die Anzahl der Selektorkomponenten in jeder Spalte von links nach rechts verglichen.

```css
#myElement {
  color: green; /* 1-0-0  - WINS!! */
}
.bodyClass .sectionClass .parentClass [id="myElement"] {
  color: yellow; /* 0-4-0 */
}
```

Die erste Spalte ist der Wert der _ID_-Komponente, der die Anzahl der IDs in jedem Selektor ist. Die Werte in den _ID_-Spalten der konkurrierenden Selektoren werden verglichen. Der Selektor mit dem höheren Wert in der _ID_-Spalte gewinnt, egal, welche Werte in den anderen Spalten stehen. In dem obigen Beispiel, auch wenn der gelbe Selektor mehr Komponenten insgesamt hat, zählt nur der Wert der ersten Spalte.

Wenn die Anzahl in den _ID_-Spalten der konkurrierenden Selektoren gleich ist, wird die nächste Spalte, _CLASS_, wie unten gezeigt, verglichen.

```css
#myElement {
  color: yellow; /* 1-0-0 */
}
#myApp [id="myElement"] {
  color: green; /* 1-1-0  - WINS!! */
}
```

Die _CLASS_-Spalte ist die Anzahl der Klassennamen, Attribut-Selektoren und Pseudoklassen im Selektor. Wenn der Wert in der _ID_-Spalte gleich ist, gewinnt der Selektor mit dem höheren Wert in der _CLASS_-Spalte, unabhängig vom Wert in der _TYPE_-Spalte. Dies wird im folgenden Beispiel gezeigt.

```css
:root input {
  color: green; /* 0-1-1 - WINS because CLASS column is greater */
}
html body main input {
  color: yellow; /* 0-0-4 */
}
```

Wenn die Zahlen in der _CLASS_- und _ID_-Spalte in den konkurrierenden Selektoren gleich sind, wird die _TYPE_-Spalte relevant. Die _TYPE_-Spalte ist die Anzahl der Elementtypen und Pseudio-Elemente im Selektor. Wenn die ersten beiden Spalten denselben Wert aufweisen, gewinnt der Selektor mit der höheren Zahl in der _TYPE_-Spalte.

Wenn die konkurrierenden Selektoren in allen drei Spalten denselben Wert haben, spielt die Nähe-Regel eine Rolle, bei der die zuletzt deklarierte Stilregel Vorrang hat.

```css
input.myClass {
  color: yellow; /* 0-1-1 */
}
:root input {
  color: green; /* 0-1-1 WINS because it comes later */
}
```

### Die `:is()`, `:not()`, `:has()` und CSS-Verschachtelungs-Ausnahmen

Die Pseudo-Klasse {{cssxref(":is()")}}, die Relationale Pseudo-Klasse {{cssxref(":has()")}}, und die Negations-Pseudo-Klasse {{cssxref(":not()")}} werden _nicht_ als Pseudo-Klassen in der Spezifizitäts-Gewichtsberechnung betrachtet. Sie selbst fügen der Spezifizitätsgleichung kein Gewicht hinzu. Die Selektor-Parameter, die in die Pseudo-Klasse-Klammer übergeben werden, sind jedoch Teil des Spezifizitätsalgorithmus; das Gewicht der Matches-Any- und Negations-Pseudo-Klasse in der Spezifizitätswertberechnung ist das Gewicht des Parameters [Gewicht](#selektor-gewichtskategorien).

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

Beachten Sie, dass in der obigen CSS-Paarung das Spezifizitätsgewicht, das von den `:is()`, `:has()` und `:not()` Pseudo-Klassen bereitgestellt wird, der Wert des Selektor-Parameters ist, nicht der Pseudo-Klasse.

Alle drei dieser Pseudo-Klassen akzeptieren komplexe Selektorlisten, eine Liste von kommagetrennten Selektoren, als Parameter. Dieses Feature kann verwendet werden, um die Spezifizität eines Selektors zu erhöhen:

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

Im obigen CSS-Codeblock haben wir `#fakeId` in die Selektoren aufgenommen. Dieses `#fakeId` fügt `1-0-0` zum Spezifizitätsgewicht jedes Absatzes hinzu.

Wenn Sie komplexe Selektorlisten mit [CSS-Verschachtelung](/de/docs/Web/CSS/Guides/Nesting) erstellen, verhält sich dies genau wie die `:is()` Pseudo-Klasse.

```css
p,
#fakeId {
  span {
    /* 1-0-1 */
  }
}
```

Im obigen Codeblock ist der komplexe Selektor `p, #fakeId` die Spezifizität wird von `#fakeId` und auch dem `span` übernommen, sodass dies eine Spezifizität von `1-0-1` sowohl für `p span` als auch für `#fakeId span` erzeugt. Dies ist die äquivalente Spezifizität wie der `:is(p, #fakeId) span` Selektor.

Im Allgemeinen möchten Sie die Spezifizität auf ein Minimum halten, aber wenn Sie die Spezifizität eines Elements aus einem bestimmten Grund erhöhen müssen, können diese drei Pseudo-Klassen helfen.

```css
a:not(#fakeId#fakeId#fakeID) {
  color: blue; /* 3-0-1 */
}
```

In diesem Beispiel werden alle Links blau sein, es sei denn, sie werden durch eine Link-Deklaration mit 3 oder mehr IDs, einen Farbwert, der ein `a` beinhaltet, das das [`!important`-Flag](#the_!important_exception) enthält, oder durch einen [Inline-Stil](#inline-stile) Farbdeklaration überschrieben. Wenn Sie solch eine Technik verwenden, fügen Sie einen Kommentar hinzu, um zu erklären, warum der Hack erforderlich war.

### Inline-Stile

Inline-Stile, die einem Element hinzugefügt werden (z.B. `style="font-weight: bold;"`), überschreiben immer alle normalen Stile in Autor-Stylesheets und können daher als die höchste Spezifizität betrachtet werden. Betrachten Sie Inline-Stile als ein Spezifizitätsgewicht von `1-0-0-0`.

Der einzige Weg, Inline-Stile zu überschreiben, besteht darin, `!important` zu verwenden.

Viele JavaScript-Frameworks und -Bibliotheken fügen Inline-Stile hinzu. Die Verwendung von `!important` mit einem sehr gezielten Selektor, wie einem Attribut-Selektor, der den Inline-Stil verwendet, ist eine Möglichkeit, diese Inline-Stile zu überschreiben.

```html
<p style="color: purple">…</p>
```

```css
p[style*="purple"] {
  color: rebeccapurple !important;
}
```

Stellen Sie sicher, dass Sie einen Kommentar mit jeder Aufnahme des wichtigen Flags hinzufügen, damit Code-Pfleger verstehen, warum ein CSS-Anti-Pattern verwendet wurde.

### Die `!important` Ausnahme

CSS-Deklarationen, die als wichtig gekennzeichnet sind, überschreiben alle anderen Deklarationen innerhalb derselben Kaskadenschicht und des gleichen Ursprungs. Obwohl technisch gesehen [`!important`](/de/docs/Web/CSS/Reference/Values/important) nichts mit Spezifizität zu tun hat, steht es direkt mit Spezifizität und der Kaskade in Wechselwirkung. Es kehrt die [Kaskadenordnung](/de/docs/Web/CSS/Guides/Cascade/Introduction) der Stylesheets um.

Wenn Deklarationen aus demselben Ursprung und derselben Kaskadenschicht in Konflikt stehen und ein Eigenschaftswert das `!important`-Flag gesetzt hat, wird die wichtige Deklaration angewendet, egal wie die Spezifizität aussieht. Wenn widersprüchliche Deklarationen aus demselben Ursprung und derselben Kaskadenschicht mit dem `!important`-Flag auf dasselbe Element angewendet werden, wird die Deklaration mit einer höheren Spezifizität angewendet.

Die Verwendung von `!important`, um Spezifizität zu überschreiben, wird als **schlechte Praxis** angesehen und sollte für diesen Zweck vermieden werden. Das Verständnis und die effektive Nutzung von Spezifizität und der Kaskade kann die Notwendigkeit für das `!important`-Flag beseitigen.

Anstatt `!important` zu verwenden, um fremde CSS (von externen Bibliotheken wie Bootstrap oder normalize.css) zu überschreiben, importieren Sie die Drittanbieter-Skripte direkt in [Kaskadenschichten](/de/docs/Web/CSS/Reference/At-rules/@layer). Wenn Sie `!important` in Ihrem CSS verwenden müssen, kommentieren Sie Ihre Nutzung, damit zukünftige Codebetreuer wissen, warum die Deklaration als wichtig markiert wurde und sie wissen, dass sie nicht überschrieben werden sollte. Verwenden Sie jedoch definitiv kein `!important`, wenn Sie Plugins oder Frameworks schreiben, die andere Entwickler integrieren müssen, ohne sie kontrollieren zu können.

### Die `:where()` Ausnahme

Die Spezifizitätsanpassungs-Pseudo-Klasse {{cssxref(":where()")}} hat immer ihre Spezifizität durch null ersetzt, `0-0-0`. Sie ermöglicht es, CSS-Selektoren sehr spezifisch dafür zu machen, welches Element angesprochen wird, ohne die Spezifizität zu erhöhen.

Bei der Erstellung von Drittanbieter-CSS, das von Entwicklern verwendet werden soll, die nicht auf Ihr CSS zugreifen können, ist es eine gute Praxis, CSS mit der niedrigstmöglichen Spezifizität zu erstellen. Wenn Ihr Thema beispielsweise das folgende CSS enthält:

```css
:where(#defaultTheme) a {
  /* 0-0-1 */
  color: red;
}
```

Dann kann der Entwickler, der das Widget implementiert, die Linkfarbe leicht überschreiben, indem er nur Typ-Selektoren verwendet.

```css
footer a {
  /* 0-0-2 */
  color: blue;
}
```

### Wie `@scope` Blöcke die Spezifizität beeinflussen

Das Einschließen eines Regelblocks innerhalb eines {{cssxref("@scope")}} Blocks beeinflusst nicht die Spezifizität seines Selektors, unabhängig von den Selektoren, die innerhalb der [Roots und Grenzen des Scopes](/de/docs/Web/CSS/Reference/At-rules/@scope#syntax) verwendet werden.
Wenn Sie sich jedoch entscheiden, die {{cssxref(":scope")}} Pseudo-Klasse explizit hinzuzufügen, müssen Sie sie bei der Berechnung ihrer Spezifizität berücksichtigen.
`:scope`, wie alle regulären Pseudo-Klassen, hat eine Spezifizität von 0-1-0. Ein Beispiel:

```css
@scope (.article-body) {
  /* :scope img has a specificity of 0-1-0 + 0-0-1 = 0-1-1 */
  :scope img {
  }
}
```

Weitere Informationen finden Sie unter [Specificity in `@scope`](/de/docs/Web/CSS/Reference/At-rules/@scope#specificity_in_scope).

## Tipps zum Umgang mit Spezifizitätskopfschmerzen

Anstatt `!important` zu verwenden, sollten Sie erwägen, Kaskadenschichten zu verwenden und durchgehend CSS mit geringem Spezifizitätsgewicht zu nutzen, damit Stile leicht mit leicht spezifischeren Regeln überschrieben werden können. Die Verwendung von semantischem HTML hilft, Ankerpunkte für das Styling bereitzustellen.

### Mache Selektoren spezifisch mit und ohne Erhöhung der Spezifizität

Indem Sie den Abschnitt des Dokuments angeben, den Sie stylen, bevor Sie das Element auswählen, wird die Regel spezifischer. Abhängig davon, wie Sie sie hinzufügen, können Sie etwas, viel oder gar keine Spezifizität hinzufügen, wie unten gezeigt:

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

Egal in welcher Reihenfolge, die Überschrift wird grün sein, denn diese Regel ist am spezifischsten.

#### Reduzierung der ID-Spezifität

Spezifität basiert auf der Form eines Selektors. Das Hinzufügen der `id` eines Elements als Attributselektor anstelle eines ID-Selektors ist eine gute Möglichkeit, ein Element spezifischer zu machen, ohne zu viel Spezifizität hinzuzufügen. Im vorherigen Beispiel zählt der Selektor `[id="myContent"]` als Attributselektor zur Bestimmung der Spezifizität des Selektors, obwohl er eine ID auswählt.

Sie können auch die `id` oder einen Teil eines Selektors als Parameter in der `:where()` Spezifizitätsanpassungs-Pseudo-Klasse einfügen, wenn Sie einen Selektor spezifischer machen müssen, aber keine Spezifizität überhaupt hinzufügen möchten.

### Erhöhung der Spezifizität durch Duplizieren des Selektors

Als Sonderfall zur Erhöhung der Spezifizität können Sie Gewichte aus den _CLASS_ oder _ID_-Spalten duplizieren. Die Duplizierung von ID-, Klassen-, Pseudo-Klassen- oder Attributselektoren innerhalb eines zusammengesetzten Selektors erhöht die Spezifizität, wenn Sie sehr spezifische Selektoren überschreiben müssen, über die Sie keine Kontrolle haben.

```css
#myId#myId#myId span {
  /* 3-0-1 */
}
.myClass.myClass.myClass span {
  /* 0-3-1 */
}
```

Verwenden Sie dies sparsam, wenn überhaupt. Wenn Sie die Selektorduplizierung verwenden, kommentieren Sie immer Ihren CSS.

Indem Sie `:is()` und `:not()` (und auch `:has()`) verwenden, können Sie die Spezifizität erhöhen, selbst wenn Sie keine `id` zu einem Elternelement hinzufügen können:

```css
:not(#fakeID#fakeId#fakeID) span {
  /* 3-0-1 */
}
:is(#fakeID#fakeId#fakeID, span) {
  /* 3-0-0 */
}
```

### Vorrang gegenüber Drittanbieter-CSS

Die Nutzung von Kaskadenschichten ist der Standardweg, um einen Satz von Stilen gegenüber einem anderen Satz von Stilen vorrangig zu machen; Kaskadenschichten ermöglichen dies ohne Spezifizität! Normale (nicht wichtige) Autorenstile, die in Kaskadenschichten importiert werden, haben eine geringere Priorität als ungeschichtete Autorenstile.

Wenn Stile aus einem Stylesheet stammen, das Sie nicht bearbeiten oder nicht verstehen können und Sie Stile überschreiben müssen, besteht eine Strategie darin, die Stile, die Sie nicht kontrollieren, in eine Kaskadenschicht zu importieren. Stile in anschließend deklarierten Schichten haben Vorrang, wobei ungeschichtete Stile über alle geschichteten Stile aus demselben Ursprung Vorrang haben.

Wenn zwei Selektoren aus unterschiedlichen Schichten dasselbe Element matchen, haben Ursprung und Wichtigkeit Vorrang; die Spezifizität des Selektors im verlierenden Stylesheet ist unerheblich.

```css
@import "TW.css" layer();
p,
p * {
  font-size: 1rem;
}
```

Im obigen Beispiel wird der gesamte Absatztext, einschließlich des verschachtelten Inhalts, `1rem` sein, egal wie viele Klassennamen die Absätze haben, die mit dem TW-Stylesheet übereinstimmen.

### Vermeidung und Überschreibung von `!important`

Der beste Ansatz ist, `!important` nicht zu verwenden. Die obigen Erklärungen zur Spezifizität sollten hilfreich sein, um die Verwendung des Flags zu vermeiden und es insgesamt zu entfernen, wenn es encountered wird.

Um das wahrgenommene Bedürfnis nach `!important` zu beseitigen, können Sie Folgendes tun:

- Erhöhen Sie die Spezifizität des Selektors der ehemaligen `!important`-Deklaration, so dass sie größer ist als andere Deklarationen
- Geben Sie ihm die gleiche Spezifizität und setzen Sie ihn nach der Deklaration, die sie überschreiben sollte
- Verringern Sie die Spezifizität des Selektors, den Sie zu überschreiben versuchen.

All diese Methoden werden in vorhergehenden Abschnitten behandelt.

Wenn Sie nicht in der Lage sind, `!important`-Flags aus einem Autoren-Stylesheet zu entfernen, ist die einzige Lösung zur Überschreibung der wichtigen Stile die Verwendung von `!important`. Das Erstellen einer [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer) von wichtigen Deklarationsübersteuerungen ist eine ausgezeichnete Lösung. Zwei Möglichkeiten, dies zu tun, umfassen:

#### Methode 1

1. Erstellen Sie ein separates, kurzes Stylesheet, das nur wichtige Deklarationen enthält, die speziell wichtige Deklarationen überschreiben, die Sie nicht entfernen konnten.
2. Importieren Sie dieses Stylesheet als den ersten Import in Ihrem CSS mit `layer()`, einschließlich der `@import`-Anweisung, bevor Sie andere Stylesheets verlinken. Dies stellt sicher, dass die wichtigen Überschreibungen als erste Schicht importiert werden.

```css
@import "importantOverrides.css" layer();
```

#### Methode 2

1. Am Anfang Ihrer Stylesheet-Deklarationen erstellen Sie eine benannte Kaskadenschicht, wie folgt:

   ```css
   @layer importantOverrides;
   ```

2. Jedes Mal, wenn Sie eine wichtige Deklaration überschreiben müssen, deklarieren Sie sie innerhalb der benannten Schicht. Erklären Sie nur wichtige Regeln innerhalb der Schicht.

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

Die Spezifizität des Selektors des wichtigen Stils innerhalb der Schicht kann niedrig sein, solange sie das Element trifft, das Sie zu überschreiben versuchen. Normale Schichten sollten außerhalb der Schicht erklärt werden, da geschichtete Stile eine geringere Priorität haben als ungeschichtete Stile.

### Unkenntnis der Baum-Nähe

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

### Direkt angesprochene Elemente vs. geerbte Stile

Stile für ein direkt angesprochenes Element haben immer Vorrang vor geerbten Stilen, unabhängig von der Spezifizität der geerbten Regel. Gegeben dem folgenden CSS und HTML:

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

Das `h1` wird lila sein, weil der `h1`-Selektor das Element spezifisch anspricht, während das Grün von den `#parent`-Deklarationen geerbt wird.

## Beispiele

Im folgenden CSS haben wir drei Selektoren, die {{HTMLElement('input')}}-Elemente ansprechen, um eine Farbe festzulegen. Für ein gegebenes Eingabefeld ist das Spezifizitätsgewicht der Farbdarstellung, die Vorrang hat, der passende Selektor mit dem höchsten Gewicht:

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

Wenn alle oben genannten Selektoren dasselbe Eingabefeld ansprechen, wird das Eingabefeld rot sein, da die erste Deklaration den höchsten Wert in der _ID_-Spalte hat.

Der letzte Selektor hat vier _TYPE_-Komponenten. Während er den höchsten ganzzahligen Wert hat, egal wie viele Elemente und Pseudo-Elemente enthalten sind, selbst wenn es 150 wären, haben TYPE-Komponenten niemals Vorrang vor _CLASS_-Komponenten. Die Spaltenwerte werden von links nach rechts verglichen, wenn die Spaltenwerte gleich sind.

Hätten wir den ID-Selektor im obigen Beispielcode in einen Attributselektor umgewandelt, hätten die ersten beiden Selektoren die gleiche Spezifität, wie unten gezeigt:

```css
[id="myElement"] input.myClass {
  color: red;
} /* 0-2-1 */
input[type="password"]:required {
  color: blue;
} /* 0-2-1 */
```

Wenn mehrere Deklarationen die gleiche Spezifizität haben, wird die zuletzt in der CSS gefundene Deklaration auf das Element angewendet. Wenn beide Selektoren dasselbe {{HTMLElement('input')}} treffen, wird die Farbe blau sein.

## Zusätzliche Hinweise

Einige Dinge, die Sie über Spezifizität beachten sollten:

1. Spezifizität gilt nur, wenn dasselbe Element von mehreren Deklarationen in derselben Kaskadenschicht oder demselben Ursprung angesprochen wird. Spezifizität ist nur für Deklarationen der gleichen Wichtigkeit und des gleichen Ursprungs von Bedeutung und [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer). Wenn passende Selektoren in verschiedenen Ursprüngen vorliegen, bestimmt die [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction), welche Deklaration Vorrang hat.

2. Wenn zwei Selektoren in derselben Kaskadenschicht und im selben Ursprung die gleiche Spezifizität aufweisen, wird die Scoping-Nähe berechnet; der Regelblock mit der geringsten Scoping-Nähe gewinnt. Weitere Details und ein Beispiel finden Sie unter [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/Reference/At-rules/@scope#how_scope_conflicts_are_resolved).

3. Wenn die Scope-Nähe für beide Selektoren ebenfalls gleich ist, kommt die Quellreihenfolge ins Spiel. Wenn alles andere gleich ist, gewinnt der letzte Selektor.

4. Laut CSS-Regeln haben [direkt angesprochene Elemente](#direkt_angesprochene_elemente_vs._geerbte_stile) immer Vorrang vor Regeln, die ein Element von seinem Vorfahren erbt.

5. [Nähe von Elementen](#unkenntnis_der_baum-nähe) im Dokumentbaum hat keinen Effekt auf die Spezifizität.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade) Modul
- [Lernen: Konflikte bewältigen](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity_2)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax) Modul
- [Einführung in CSS-Syntax: Deklarationen, Regelsätze und Anweisungen](/de/docs/Web/CSS/Guides/Syntax/Introduction)
- [CSS-Fehlerbehandlung](/de/docs/Web/CSS/Guides/Syntax/Error_handling)
- [At-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules)
- [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
- Werte: [initial](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value), [computed](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value), [used](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value), und [actual](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value)
- [Wertdefinition Syntax](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
- [CSS-Verschachtelung](/de/docs/Web/CSS/Guides/Nesting) Modul
- [Specificity Calculator](https://specificity.keegan.st/) von Keegan Street: Eine interaktive Website zum Testen und Verstehen Ihrer eigenen CSS-Regeln
- [SpeciFISHity](https://specifishity.com/) auf specifishity.com: Eine unterhaltsame Möglichkeit, über CSS-Spezifität zu lernen
- [_ID-CLASS-TYPE_ Übung](https://estelle.github.io/CSS/selectors/exercises/specificity.html): Ein Spezifizitätsquiz von Estelle Weyl
