---
title: Spezifität
slug: Web/CSS/Guides/Cascade/Specificity
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**Spezifität** ist der Algorithmus, den Browser verwenden, um die [CSS-Deklaration](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#css_syntax_basics) zu bestimmen, die für ein Element am relevantesten ist, und der wiederum den anzuwendenden Eigenschaftswert festlegt. Der Spezifitäts-Algorithmus berechnet das Gewicht eines [CSS-Selektors](/de/docs/Web/CSS/Reference#selectors), um zu bestimmen, welche Regel von konkurrierenden CSS-Deklarationen auf ein Element angewendet wird.

> [!NOTE]
> Browser betrachten die Spezifität **nachdem** sie den [Ursprung und die Wichtigkeit der Cascade](/de/docs/Web/CSS/Guides/Cascade/Introduction) bestimmt haben. Mit anderen Worten, bei konkurrierenden Eigenschaften-Deklarationen ist die Spezifität nur zwischen Selektoren relevant und vergleichbar, die aus demselben [Cascade-Ursprung und -Layer](/de/docs/Web/CSS/Reference/At-rules/@layer) stammen, der für die Eigenschaft Vorrang hat. [Scoping-Nähe](/de/docs/Web/CSS/Reference/At-rules/@scope#how_scope_conflicts_are_resolved) und die Reihenfolge des Erscheinens werden relevant, wenn die Selektorspezifitäten der konkurrierenden Deklarationen im vorrangigen Cascade-Layer gleich sind.

## Wie wird Spezifität berechnet?

Spezifität ist ein Algorithmus, der das Gewicht berechnet, das auf eine gegebene CSS-Deklaration angewendet wird. Das Gewicht wird durch die Anzahl der [Selektoren jeder Gewichtskategorie](#selektor-gewichtskategorien) im auf das Element (oder Pseudo-Element) treffenden Selektor bestimmt. Wenn es zwei oder mehr Deklarationen gibt, die für das gleiche Element unterschiedliche Eigenschaftswerte bieten, wird der Deklarationswert im Stilblock mit dem übereinstimmenden Selektor mit dem größten algorithmischen Gewicht angewendet.

Der Spezifitäts-Algorithmus ist im Wesentlichen ein dreispaltiger Wert von drei Kategorien oder Gewichten - ID, CLASS und TYPE -, die den drei Selektor-Typen entsprechen. Der Wert repräsentiert die Anzahl der Selektor-Komponenten in jeder Gewichtskategorie und wird als _ID - CLASS - TYPE_ geschrieben. Die drei Spalten entstehen durch Zählen der Anzahl der Selektor-Komponenten für jede Selektor-Gewichtskategorie in den Selektoren, die auf das Element passen.

### Selektor-Gewichtskategorien

Die Selektor-Gewichtskategorien sind hier in der Reihenfolge abnehmender Spezifität aufgelistet:

- ID-Spalte
  - : Beinhaltet nur [ID-Selektoren](/de/docs/Web/CSS/Reference/Selectors/ID_selectors), wie `#example`. Für jede ID in einem übereinstimmenden Selektor fügen Sie 1-0-0 zum Gewichtswert hinzu.
- CLASS-Spalte
  - : Beinhaltet [Klassen-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Class_selectors), wie `.myClass`, Attribut-Selektoren wie `[type="radio"]` und `[lang|="fr"]`, und Pseudo-Klassen, wie `:hover`, `:nth-of-type(3n)` und `:required`. Für jede Klasse, Attributselektor oder Pseudo-Klasse in einem übereinstimmenden Selektor fügen Sie 0-1-0 zum Gewichtswert hinzu.
- TYPE-Spalte
  - : Beinhaltet [Typ-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Type_selectors), wie `p`, `h1` und `td`, und Pseudo-Elemente wie `::before`, `::placeholder` und alle anderen Selektoren mit Doppelpunktschreibweise. Für jeden Typ oder Pseudo-Element in einem übereinstimmenden Selektor fügen Sie 0-0-1 zum Gewichtswert hinzu.
- Kein Wert
  - : Der Universal-Selektor ({{CSSxRef("Universal_selectors", "*")}}) und die Pseudo-Klasse {{cssxref(":where()")}} und ihre Parameter werden bei der Berechnung des Gewichts nicht gezählt, so dass ihr Wert 0-0-0 ist, aber sie passen dennoch auf Elemente. Diese Selektoren beeinflussen den Spezifizitätswert nicht.

Kombinatoren, wie {{CSSxRef("Next-sibling_combinator", "+")}}, {{CSSxRef("Child_combinator", "&gt;")}}, {{CSSxRef("Subsequent-sibling_combinator", "~")}}, [" "](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator), und {{CSSxRef("Column_combinator", "||")}}, können einen Selektor spezifischer machen, was ausgewählt wird, aber sie fügen dem Spezifitätswert keinen Wert hinzu.

Der `&`-Verschachtelungskombinator fügt kein Spezifitätsgewicht hinzu, aber verschachtelte Regeln schon. In Bezug auf Spezifität und Funktionalität ist das Verschachteln sehr ähnlich zur {{cssxref(":is()")}} Pseudo-Klasse.

Wie beim Verschachteln fügen die Pseudo-Klassen {{cssxref(":is()")}}, {{cssxref(":has()")}} und Negation ({{cssxref(":not()")}}) selbst kein Gewicht hinzu. Die Parameter in diesen Selektoren jedoch schon. Das Spezifitätsgewicht jedes nacheinander aufgelisteten Selektorparameters ist das größte Spezifitätsgewicht des Parameters aus der Liste der Selektoren. Ähnlich wie bei verschachtelten Selektoren wird das Spezifitätsgewicht, das durch die verschachtelte Selektor-Komponente hinzugefügt wird, durch den Selektor in der durch Kommas getrennten Liste der verschachtelten Selektoren mit der höchsten Spezifität bestimmt.

Die [`:not()`, `:is()`, `:has()` und CSS-Nesting-Ausnahmen](#the_is_not_has_and_css_nesting_exceptions) werden unten diskutiert.

#### Übereinstimmender Selektor

Das Spezifitätsgewicht ergibt sich aus dem übereinstimmenden Selektor. Nehmen Sie diesen CSS-Selektor mit drei durch Kommas getrennten Selektoren als Beispiel:

```css
[type="password"],
input:focus,
:root #myApp input:required {
  color: blue;
}
```

Der `[type="password"]`-Selektor in der obigen Selektorliste, mit einem Spezifitätsgewicht von `0-1-0`, wendet die Deklaration `color: blue` auf alle Password-Eingabetypen an.

Alle Eingaben, unabhängig vom Typ, wenn sie Fokus erhalten, passen zum zweiten Selektor in der Liste, `input:focus`, mit einem Spezifitätsgewicht von `0-1-1`. Dieses Gewicht besteht aus der `:focus` Pseudo-Klasse (0-1-0) und dem `input` Typ (0-0-1). Wenn das Password-Eingabefeld Fokus hat, passt es zu `input:focus`, und das Spezifitätsgewicht für die `color: blue`-Stildeklaration wird `0-1-1` sein. Wenn das Passwort keinen Fokus hat, bleibt das Spezifitätsgewicht bei `0-1-0`.

Die Spezifität für eine erforderliche Eingabe, die in einem Element mit dem Attribut `id="myApp"` verschachtelt ist, ist `1-2-1`, basierend auf einer ID, zwei Pseudo-Klassen und einem Elementtyp.

Wenn der Password-Eingabetyp mit `required` in einem Element mit gesetztem `id="myApp"` verschachtelt ist, wird das Spezifitätsgewicht `1-2-1` betragen, basierend auf einer ID, zwei Pseudo-Klassen und einem Elementtyp, unabhängig davon, ob es Fokus hat oder nicht. Warum ist das Spezifitätsgewicht in diesem Fall `1-2-1` und nicht `0-1-1` oder `0-1-0`? Weil das Spezifitätsgewicht aus dem übereinstimmenden Selektor mit dem größten Spezifitätsgewicht kommt. Das Gewicht wird durch den Vergleich der Werte in den drei Spalten bestimmt, von links nach rechts.

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

Sobald die Spezifitätswerte der relevanten Selektoren bestimmt sind, werden die Anzahl der Selektorkomponenten in jeder Spalte von links nach rechts verglichen.

```css
#myElement {
  color: green; /* 1-0-0  - WINS!! */
}
.bodyClass .sectionClass .parentClass [id="myElement"] {
  color: yellow; /* 0-4-0 */
}
```

Die erste Spalte ist der Wert des _ID_-Komponenten, welcher die Anzahl der IDs in jedem Selektor ist. Die Zahlen in den _ID_ Spalten der konkurrierenden Selektoren werden verglichen. Der Selektor mit dem größeren Wert in der _ID_-Spalte gewinnt, unabhängig davon, was die Werte in den anderen Spalten sind. Im obigen Beispiel, obwohl der gelbe Selektor insgesamt mehr Komponenten hat, zählt nur der Wert der ersten Spalte.

Wenn die Zahl in den _ID_ Spalten konkurrierender Selektoren gleich ist, dann wird die nächste Spalte, _CLASS_, verglichen, wie unten gezeigt.

```css
#myElement {
  color: yellow; /* 1-0-0 */
}
#myApp [id="myElement"] {
  color: green; /* 1-1-0  - WINS!! */
}
```

Die _CLASS_-Spalte ist die Anzahl der Klassennamen, Attributselektoren und Pseudo-Klassen im Selektor. Wenn der _ID_-Spaltenwert gleich ist, gewinnt der Selektor mit dem höheren Wert in der _CLASS_-Spalte, unabhängig vom Wert in der _TYPE_-Spalte. Dies wird im folgenden Beispiel angezeigt.

```css
:root input {
  color: green; /* 0-1-1 - WINS because CLASS column is greater */
}
html body main input {
  color: yellow; /* 0-0-4 */
}
```

Wenn die Zahlen in den _CLASS_- und _ID_-Spalten der konkurrierenden Selektoren gleich sind, wird die _TYPE_-Spalte relevant. Die _TYPE_-Spalte ist die Anzahl der Elementtypen und Pseudo-Elemente im Selektor. Wenn die ersten beiden Spalten den gleichen Wert haben, gewinnt der Selektor mit der größeren Zahl in der _TYPE_-Spalte.

Wenn die konkurrierenden Selektoren in allen drei Spalten die gleichen Werte haben, tritt die Nähe-Regel in Kraft, und die zuletzt deklarierte Stilregel erhält Vorrang.

```css
input.myClass {
  color: yellow; /* 0-1-1 */
}
:root input {
  color: green; /* 0-1-1 WINS because it comes later */
}
```

### Die `:is()`, `:not()`, `:has()` und CSS-Nesting-Ausnahmen

Die Pseudo-Klasse für beliebige Übereinstimmungen {{cssxref(":is()")}}, die relationale Pseudo-Klasse {{cssxref(":has()")}}, und die Negations-Pseudo-Klasse {{cssxref(":not()")}} werden _nicht_ als Pseudo-Klassen bei der Berechnung des Spezifitätsgewichts betrachtet. Sie selbst fügen der Spezifizitätsberechnung kein Gewicht hinzu. Die Selektor-Parameter, die in die Pseudo-Klasse-Klammern übergeben werden, sind jedoch Teil des Spezifitäts-Algorithmus; das Gewicht der Pseudo-Klasse für beliebige Übereinstimmungen und Negation in der Spezifitätswertberechnung ist das Gewicht des Parameters [Gewicht](#selektor-gewichtskategorien).

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

Beachten Sie, dass im obigen CSS-Paar die von den `:is()`, `:has()` und `:not()` Pseudo-Klassen bereitgestellten Spezifitätsgewichte der Wert des Selektor-Parameters und nicht der Pseudo-Klasse ist.

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

Im obigen CSS-Code-Block haben wir `#fakeId` in die Selektoren aufgenommen. Diese `#fakeId` fügt `1-0-0` zum Spezifitätsgewicht jedes Absatzes hinzu.

Beim Erstellen komplexer Selektorlisten mit [CSS-Nesting](/de/docs/Web/CSS/Guides/Nesting) verhält sich dies genauso wie die `:is()` Pseudo-Klasse.

```css
p,
#fakeId {
  span {
    /* 1-0-1 */
  }
}
```

Im obigen Code-Block wird die komplexe Selektor `p, #fakeId` die Spezifität genommen von `#fakeId` und auch das `span`, so dass dies eine Spezifität von `1-0-1` sowohl für `p span` als auch für `#fakeId span` erstellt. Dies entspricht der Spezifität des `:is(p, #fakeId) span` Selektors.

Im Allgemeinen möchten Sie die Spezifität auf ein Minimum reduzieren, aber wenn Sie die Spezifität eines Elements aus einem bestimmten Grund erhöhen müssen, können diese drei Pseudo-Klassen helfen.

```css
a:not(#fakeId#fakeId#fakeID) {
  color: blue; /* 3-0-1 */
}
```

In diesem Beispiel sind alle Links blau, es sei denn, sie werden durch eine Link-Deklaration mit 3 oder mehr IDs überschrieben, ein Farbwert stimmt mit einem `a` überein, er enthält die [`!important`-Flagge](#the_!important_exception), oder wenn der Link einen [Inline-Stil](#inline-stile) Farb-Deklaration hat. Wenn Sie eine solche Technik verwenden, fügen Sie einen Kommentar hinzu, um zu erklären, warum der Hack benötigt wurde.

### Inline-Stile

Inline-Stile, die einem Element hinzugefügt werden (z.B. `style="font-weight: bold;"`), überschreiben immer alle normalen Stile in Autoren-Stilblättern und können daher als am höchsten in der Spezifität angesehen werden. Denken Sie an Inline-Stile als hätten sie ein Spezifitätsgewicht von `1-0-0-0`.

Der einzige Weg, Inline-Stile zu überschreiben, ist durch die Verwendung von `!important`.

Viele JavaScript-Frameworks und -Bibliotheken fügen Inline-Stile hinzu. Die Verwendung von `!important` mit einem sehr gezielten Selektor, wie einem Attributselektor unter Verwendung des Inline-Stils, ist eine Möglichkeit, diese Inline-Stile zu überschreiben.

```html
<p style="color: purple">…</p>
```

```css
p[style*="purple"] {
  color: rebeccapurple !important;
}
```

Stellen Sie sicher, dass mit jeder Aufnahme der wichtigen Flagge ein Kommentar eingefügt wird, damit die Wartung des Codes verstanden wird, warum ein CSS-Anti-Pattern verwendet wurde.

### Die `!important` Ausnahme

CSS-Deklarationen, die als wichtig markiert sind, überschreiben alle anderen Deklarationen innerhalb desselben Cascade-Layers und Ursprungs. Obwohl technisch gesehen [`!important`](/de/docs/Web/CSS/Reference/Values/important) nichts mit Spezifität zu tun hat, interagiert es direkt mit Spezifität und der Kaskade. Es kehrt die [Kaskadenreihenfolge](/de/docs/Web/CSS/Guides/Cascade/Introduction) der Stylesheets um.

Wenn Deklarationen aus demselben Ursprung und Cascade-Layer in Konflikt stehen und ein Eigenschaftswert die `!important`-Flagge gesetzt hat, wird die wichtige Deklaration angewendet, unabhängig von der Spezifizität. Wenn widersprüchliche Deklarationen aus demselben Ursprung und Cascade-Layer mit gesetzter `!important`-Flagge auf dasselbe Element angewendet werden, wird die Deklaration mit größerer Spezifizität angewendet.

Die Verwendung von `!important` zur Überschreibung der Spezifität wird als **schlechte Praxis** angesehen und sollte für diesen Zweck vermieden werden. Spezifität und Kaskade zu verstehen und effektiv zu nutzen, kann die Notwendigkeit für die `!important`-Flagge beseitigen.

Anstatt `!important` zu verwenden, um fremdes CSS (von externen Bibliotheken wie Bootstrap oder normalize.css) zu überschreiben, importieren Sie die Drittanbieter-Skripts direkt in [Cascade-Layers](/de/docs/Web/CSS/Reference/At-rules/@layer). Wenn Sie `!important` in Ihrem CSS verwenden müssen, kommentieren Sie die Verwendung, damit zukünftige Code-Maintainer wissen, warum die Deklaration als wichtig markiert wurde und sie nicht überschreiben. Verwenden Sie `!important` jedoch auf keinen Fall, wenn Sie Plugins oder Frameworks schreiben, die andere Entwickler einbinden müssen, ohne sie steuern zu können.

### Die `:where()` Ausnahme

Die Spezifitätsanpassungs-Pseudo-Klasse {{cssxref(":where()")}} hat immer ihre Spezifität auf null, `0-0-0`, ersetzt. Sie ermöglicht es, CSS-Selektoren sehr spezifisch in Bezug darauf zu machen, welches Element ausgewählt wird, ohne die Spezifität zu erhöhen.

Beim Erstellen von Drittanbieter-CSS, das von Entwicklern verwendet wird, die keinen Zugriff darauf haben, Ihr CSS zu bearbeiten, gilt es als gute Praxis, CSS mit der niedrigstmöglichen Spezifität zu erstellen. Zum Beispiel, wenn Ihr Thema enthält folgendes CSS:

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

### Wie `@scope`-Blöcke die Spezifität beeinflussen

Das Einfügen eines Regelsets in einen {{cssxref("@scope")}}-Block beeinflusst nicht die Spezifität seines Selektors, unabhängig von den innerhalb der Bereichswurzel und -grenze verwendeten Selektoren. Wenn Sie sich jedoch entscheiden, die {{cssxref(":scope")}}-Pseudo-Klasse explizit hinzuzufügen, müssen Sie dies bei der Berechnung ihrer Spezifität berücksichtigen. `:scope`, wie alle regulären Pseudo-Klassen, hat eine Spezifität von 0-1-0. Zum Beispiel:

```css
@scope (.article-body) {
  /* :scope img has a specificity of 0-1-0 + 0-0-1 = 0-1-1 */
  :scope img {
  }
}
```

Weitere Informationen finden Sie unter [Spezifität in `@scope`](/de/docs/Web/CSS/Reference/At-rules/@scope#specificity_in_scope).

## Tipps zur Handhabung von Spezifitätsproblemen

Anstatt `!important` zu verwenden, sollten Sie Cascade-Layers nutzen und eine geringe Gewichtung der Spezifität in Ihrem gesamten CSS verwenden, damit Stile leicht mit etwas spezifischeren Regeln überschrieben werden können. Die Verwendung von semantischem HTML hilft, Ankerpunkte bereitzustellen, von denen aus das Styling angewendet wird.

### Selektoren spezifisch machen, mit und ohne Spezifität hinzugefügt

Indem Sie den Abschnitt des Dokuments, den Sie gestalten, angeben, bevor Sie das Element auswählen, wird die Regel spezifischer. Je nachdem, wie Sie es hinzufügen, können Sie einige, viele oder gar keine Spezifität hinzufügen, wie unten gezeigt:

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

#### Reduzierung der ID-Spezifität

Die Spezifität basiert auf der Form eines Selektors. Die Aufnahme der ID eines Elements als Attributselektor anstelle eines ID-Selektors ist eine gute Möglichkeit, ein Element spezifischer zu machen, ohne übermäßig viel Spezifität hinzuzufügen. Im vorherigen Beispiel wird der Selektor `[id="myContent"]` als Attributselektor zur Bestimmung der Spezifität des Selektors gezählt, obwohl er eine ID auswählt.

Sie können auch die ID oder einen Teil eines Selektors als Parameter in der `:where()` Spezifitätsanpassungs-Pseudoklasse aufnehmen, wenn Sie einen Selektor spezifischer machen müssen, aber keine zusätzliche Spezifität hinzufügen möchten.

### Erhöhung der Spezifität durch Duplizieren des Selektors

Als ein spezieller Fall zur Erhöhung der Spezifität können Sie Gewichte aus den _CLASS_- oder _ID_-Spalten duplizieren. Das Duplizieren von ID-, Klassen-, Pseudo-Klassen- oder Attributselektoren innerhalb eines zusammengesetzten Selektors erhöht die Spezifität, wenn Sie sehr spezifische Selektoren überschreiben, über die Sie keine Kontrolle haben.

```css
#myId#myId#myId span {
  /* 3-0-1 */
}
.myClass.myClass.myClass span {
  /* 0-3-1 */
}
```

Verwenden Sie dies sparsam, wenn überhaupt. Wenn Sie Selektor-Duplizierung verwenden, kommentieren Sie immer Ihr CSS.

Durch die Verwendung von `:is()` und `:not()` (und auch `:has()`) können Sie die Spezifität erhöhen, selbst wenn Sie einer übergeordneten Element keine ID hinzufügen können:

```css
:not(#fakeID#fakeId#fakeID) span {
  /* 3-0-1 */
}
:is(#fakeID#fakeId#fakeID, span) {
  /* 3-0-0 */
}
```

### Vorrang vor Drittanbieter-CSS

Die Nutzung von Cascade-Layers ist die Standardmethode, um einem Satz von Stilen Vorrang vor einem anderen Satz von Stilen zu geben; Cascade-Layers ermöglichen dies ohne Verwendung von Spezifität! Normale (nicht wichtige) Autorstile, die in Cascade-Layers importiert werden, haben eine geringere Priorität als ungefilterte Autorstile.

Wenn Stile aus einem Stylesheet stammen, das Sie nicht bearbeiten oder nicht verstehen können und Sie Stile überschreiben müssen, ist eine Strategie, die Stile, die Sie nicht kontrollieren können, in einen Cascade-Layer zu importieren. Stile in später deklarierten Layern haben Vorrang, wobei ungefilterte Stile Vorrang über alle geschichteten Stile aus demselben Ursprung haben.

Wenn zwei Selektoren aus unterschiedlichen Layern dasselbe Element matchen, haben Ursprung und Wichtigkeit Vorrang; die Spezifität des Selektors im verlierenden Stylesheet ist irrelevant.

```css
@import "TW.css" layer();
p,
p * {
  font-size: 1rem;
}
```

Im obigen Beispiel hat aller Absatztext, einschließlich des verschachtelten Inhalts, `1rem`, unabhängig davon, wie viele Klassennamen die Absätze haben, die mit dem TW-Stylesheet übereinstimmen.

### Vermeidung und Überschreibung von `!important`

Der beste Ansatz ist, `!important` nicht zu verwenden. Die obigen Erklärungen zur Spezifität sollten hilfreich sein, um die Verwendung der Flagge zu vermeiden und sie insgesamt zu entfernen, wenn sie auftritt.

Um das wahrgenommene Bedürfnis nach `!important` zu entfernen, können Sie eines der folgenden tun:

- Erhöhen Sie die Spezifität des Selektors der vormals `!important`-Deklaration, sodass sie größer ist als andere Deklarationen
- Geben Sie ihm dieselbe Spezifität und platzieren Sie es nach der Deklaration, die es überschreiben soll
- Reduzieren Sie die Spezifität des Selektors, den Sie überschreiben möchten.

All diese Methoden sind in den vorhergehenden Abschnitten behandelt.

Wenn Sie `!important`-Flags aus einem Autoren-Stilblatt nicht entfernen können, ist die einzige Lösung, um die wichtigen Stile zu überschreiben, die Verwendung von `!important`. Das Erstellen eines [Cascade-Layers](/de/docs/Web/CSS/Reference/At-rules/@layer) von wichtigen Deklarationsüberschreibungen ist eine ausgezeichnete Lösung. Zwei Möglichkeiten dies zu tun, beinhalten:

#### Methode 1

1. Erstellen Sie ein separates, kurzes Stylesheet, das nur wichtige Deklarationen speziell zum Überschreiben von wichtigen Deklarationen enthält, die Sie nicht entfernen konnten.
2. Importieren Sie dieses Stylesheet als den ersten Import in Ihrem CSS unter Verwendung von `layer()`, einschließlich der `@import`-Anweisung, bevor Sie auf andere Stylesheets verlinken. Dies dient dazu, sicherzustellen, dass die wichtigen Überschreibungen als erste Ebene importiert werden.

```css
@import "importantOverrides.css" layer();
```

#### Methode 2

1. Erstellen Sie zu Beginn Ihrer Stylesheet-Deklarationen eine benannte Kaskadierungsschicht, wie folgt:

   ```css
   @layer importantOverrides;
   ```

2. Jedes Mal, wenn Sie eine wichtige Deklaration überschreiben müssen, deklarieren Sie sie innerhalb der benannten Schicht. Deklarieren Sie innerhalb der Schicht nur wichtige Regeln.

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

Die Spezifität des Selektors des wichtigen Stils innerhalb der Schicht kann gering sein, solange sie mit dem Element übereinstimmt, das Sie überschreiben möchten. Normale Layer sollten außerhalb der Schicht erklärt werden, da geschichtete Stile eine geringere Priorität als ungefilterte Stile haben.

### Baum-Nähe-Unwissenheit

Die Nähe eines Elements zu anderen Elementen, die in einem gegebenen Selektor referenziert werden, hat keinen Einfluss auf die Spezifität.

```css
body h1 {
  color: green;
}

html h1 {
  color: purple;
}
```

Die `<h1>`-Elemente werden lila, weil, wenn Deklarationen die gleiche Spezifität haben, der zuletzt deklarierte Selektor Vorrang hat.

### Direkt angesprochene Elemente vs. geerbte Stile

Stile für ein direkt angesprochenes Element haben immer Vorrang über geerbte Stile, unabhängig von der Spezifität der geerbten Regel. Angesichts des folgenden CSS und HTML:

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

Das `h1` wird lila, weil der `h1`-Selektor das Element spezifisch anspricht, während das Grün vom `#parent` geerbten Deklarationen stammt.

## Beispiele

In dem folgenden CSS haben wir drei Selektoren, die {{HTMLElement('input')}}-Elemente ansprechen, um eine Farbe festzulegen. Für eine gegebene Eingabe ist das Spezifitätsgewicht der Farbdeklaration mit Vorrang der übereinstimmende Selektor mit dem größten Gewicht:

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

Wenn die obigen Selektoren alle auf dasselbe Eingabefeld abzielen, wird die Eingabe rot, da die erste Deklaration den höchsten Wert in der _ID_-Spalte hat.

Der letzte Selektor hat vier _TYPE_-Komponenten. Obwohl er den höchsten ganzzahligen Wert hat, haben _TYPE_-Komponenten, unabhängig davon, wie viele Elemente und Pseudo-Elemente enthalten sind, selbst wenn es 150 wären, nie Vorrang vor _CLASS_-Komponenten. Die Spaltenwerte werden verglichen, beginnend von links nach rechts, wenn Spaltenwerte gleich sind.

Hätten wir den ID-Selektor im obigen Beispielcode in einen Attributselektor umgewandelt, hätten die ersten beiden Selektoren die gleiche Spezifität, wie unten gezeigt:

```css
[id="myElement"] input.myClass {
  color: red;
} /* 0-2-1 */
input[type="password"]:required {
  color: blue;
} /* 0-2-1 */
```

Wenn mehrere Deklarationen die gleiche Spezifität haben, wird die letzte Deklaration, die im CSS gefunden wird, auf das Element angewendet. Wenn beide Selektoren dasselbe {{HTMLElement('input')}} anpassen, wird die Farbe blau sein.

## Zusätzliche Hinweise

Einige Dinge, die Sie sich über Spezifität merken sollten:

1. Spezifität gilt nur, wenn dasselbe Element von mehreren Deklarationen im gleichen Cascade-Layer oder Ursprung angesprochen wird. Spezifität ist nur für Deklarationen von gleicher Wichtigkeit und demselben Ursprung und [Kaskadierungsschicht](/de/docs/Web/CSS/Reference/At-rules/@layer) relevant. Wenn übereinstimmende Selektoren in unterschiedlichen Ursprüngen liegen, bestimmt die [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction), welche Deklaration Vorrang hat.

2. Wenn zwei Selektoren im gleichen Cascade-Layer und Ursprung die gleiche Spezifität haben, wird anschließend die Scoping-Nähe berechnet; das Regelwerk mit der niedrigsten Scoping-Nähe gewinnt. Siehe [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/Reference/At-rules/@scope#how_scope_conflicts_are_resolved) für weitere Details und ein Beispiel.

3. Wenn die Bereichsnähe für beide Selektoren ebenfalls gleich ist, spielt die Quellenreihenfolge eine Rolle. Wenn alles andere gleich ist, gewinnt der letzte Selektor.

4. Laut CSS-Regeln werden [direkt angesprochene Elemente](#direkt_angesprochene_elemente_vs._geerbte_stile) immer Vorrang vor Regeln haben, die ein Element von seinem Vorfahren erbt.

5. [Die Nähe von Elementen](#baum-nähe-unwissenheit) im Dokumentbaum hat keinen Einfluss auf die Spezifität.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Kaskadierung und -Vererbung](/de/docs/Web/CSS/Guides/Cascade) Modul
- [Lernen: Konflikte handhaben](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity_2)
- [Lernen: Kaskadierungsschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax) Modul
- [Einführung in die CSS-Syntax: Deklarationen, Regelsets und Anweisungen](/de/docs/Web/CSS/Guides/Syntax/Introduction)
- [CSS-Fehlerbehandlung](/de/docs/Web/CSS/Guides/Syntax/Error_handling)
- [At-rules](/de/docs/Web/CSS/Guides/Syntax/At-rules)
- [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
- Werte: [initial](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value), [computed](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value), [used](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value), und [actual](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value)
- [Wertedefinitionssyntax](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
- [CSS-Nesting](/de/docs/Web/CSS/Guides/Nesting) Modul
- [Specificity Calculator](https://specificity.keegan.st/) von Keegan Street: Eine interaktive Website, um eigenen CSS-Regeln zu testen und zu verstehen
- [SpeciFISHity](https://specifishity.com/) auf specifishity.com: Ein unterhaltsamer Weg, um über CSS-Spezifität zu lernen
- [_ID-CLASS-TYPE_ Übung](https://estelle.github.io/CSS/selectors/exercises/specificity.html): Ein Spezifitäts-Quiz von Estelle Weyl
