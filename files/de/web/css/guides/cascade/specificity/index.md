---
title: Spezifität
slug: Web/CSS/Guides/Cascade/Specificity
l10n:
  sourceCommit: ca5d9f9e63b460fc0c9e15ac57d9739e10e4ea0d
---

**Spezifität** ist der Algorithmus, der von Browsern verwendet wird, um die [CSS-Deklaration](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#css_syntax_basics) zu bestimmen, die am relevantesten für ein Element ist und damit den anzuwendenden Eigenschaftswert bestimmt. Der Spezifizitätsalgorithmus berechnet das Gewicht eines [CSS-Selektors](/de/docs/Web/CSS/Reference#selectors), um zu bestimmen, welche Regel aus konkurrierenden CSS-Deklarationen auf ein Element angewendet wird.

> [!NOTE]
> Browser berücksichtigen die Spezifität **nach** der Bestimmung des [Ursprungs der Kaskade und der Wichtigkeit](/de/docs/Web/CSS/Guides/Cascade/Introduction). Anders ausgedrückt, für konkurrierende Eigenschaftsdeklarationen ist die Spezifität nur zwischen Selektoren aus einem [kaskadierenden Ursprung und Layer](/de/docs/Web/CSS/Reference/At-rules/@layer) relevant und wird verglichen, der für die Eigenschaft Vorrang hat. [Scoping-Nähe](/de/docs/Web/CSS/Reference/At-rules/@scope#how_scope_conflicts_are_resolved) und Reihenfolge des Auftretens werden relevant, wenn die Selektorspezifizitäten der konkurrierenden Deklarationen im vorrangigen Kaskadenlayer gleich sind.

## Wie wird die Spezifität berechnet?

Spezifität ist ein Algorithmus, der das Gewicht berechnet, das auf eine gegebene CSS-Deklaration angewendet wird. Das Gewicht wird durch die Anzahl der [Selektoren jeder Gewichtskategorie](#selektor-gewichtskategorien) im Selektor bestimmt, der das Element (oder das Pseudo-Element) trifft. Wenn es zwei oder mehr Deklarationen gibt, die unterschiedliche Eigenschaftswerte für dasselbe Element bereitstellen, wird der Deklarationswert im Stilblock mit dem übereinstimmenden Selektor mit dem größten algorithmischen Gewicht angewendet.

Der Spezifizitätsalgorithmus ist im Wesentlichen ein dreispaltiger Wert aus drei Kategorien oder Gewichten - ID, CLASS und TYPE -, die den drei Arten von Selektoren entsprechen. Der Wert repräsentiert die Anzahl der Selektorkomponenten in jeder Gewichtskategorie und wird als _ID - CLASS - TYPE_ geschrieben. Die drei Spalten werden erstellt, indem die Anzahl der Selektorkomponenten für jede Kategorie von Selektorgewichten in den Selektoren gezählt wird, die das Element treffen.

### Selektor-Gewichtskategorien

Die Selektor-Gewichtskategorien sind hier in der Reihenfolge abnehmender Spezifität aufgeführt:

- ID-Spalte
  - : Beinhaltet nur [ID-Selektoren](/de/docs/Web/CSS/Reference/Selectors/ID_selectors), wie `#example`. Für jede ID in einem übereinstimmenden Selektor addieren Sie 1-0-0 zum Gewichtswert.
- CLASS-Spalte
  - : Beinhaltet [Klassen-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Class_selectors), wie `.myClass`, Attributselektoren wie `[type="radio"]` und `[lang|="fr"]`, und Pseudo-Klassen wie `:hover`, `:nth-of-type(3n)`, und `:required`. Für jede Klasse, jeden Attributselektor oder jede Pseudo-Klasse in einem übereinstimmenden Selektor addieren Sie 0-1-0 zum Gewichtswert.
- TYPE-Spalte
  - : Beinhaltet [Typ-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Type_selectors), wie `p`, `h1`, und `td`, und Pseudo-Elemente wie `::before`, `::placeholder`, und alle anderen Selektoren mit Doppelpunktschreibweise. Für jeden Typ oder Pseudo-Element in einem übereinstimmenden Selektor addieren Sie 0-0-1 zum Gewichtswert.
- Kein Wert
  - : Der universelle Selektor ({{CSSxRef("Universal_selectors", "*")}}) und die Pseudo-Klasse {{CSSxRef(":where", ":where()")}} und ihre Parameter werden bei der Berechnung des Gewichts nicht gezählt, sodass ihr Wert 0-0-0 ist, jedoch treffen sie auf Elemente zu. Diese Selektoren beeinflussen den Spezifizitätswert nicht.

Kombinatoren, wie {{CSSxRef("Next-sibling_combinator", "+")}}, {{CSSxRef("Child_combinator", "&gt;")}}, {{CSSxRef("Subsequent-sibling_combinator", "~")}}, [" "](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator), und {{CSSxRef("Column_combinator", "||")}}, können einen Selektor spezifischer machen, was ausgewählt wird, aber sie fügen dem Spezifizitätswert keinen Wert hinzu.

Der `&` Verschachtelungskombinator fügt kein Spezifizitätsgewicht hinzu, aber verschachtelte Regeln tun dies. In Bezug auf Spezifität und Funktionalität ist Verschachtelung sehr vergleichbar mit der {{CSSxRef(":is", ":is()")}} Pseudo-Klasse.

Wie bei der Verschachtelung, fügen die {{CSSxRef(":is", ":is()")}}, {{CSSxRef(":has", ":has()")}}, und die Negations-Pseudoklassen ({{CSSxRef(":not", ":not()")}}) selbst kein Gewicht hinzu. Die Parameter in diesen Selektoren jedoch schon. Das Spezifizitätsgewicht jedes einzelnen ergibt sich aus dem Selektorparameter in der Liste der Selektoren mit der höchsten Spezifität. In ähnlicher Weise ergibt sich bei verschachtelten Selektoren das hinzugefügte Spezifizitätsgewicht der verschachtelten Selektorkomponente aus dem Selektor in der kommagetrennten Liste der verschachtelten Selektoren mit der höchsten Spezifität.

Die [`:not()`, `:is()`, `:has()` und CSS-Verschachtelungsausnahmen](#the_is_not_has_and_css_nesting_exceptions) werden weiter unten besprochen.

#### Übereinstimmender Selektor

Das Spezifizitätsgewicht stammt vom übereinstimmenden Selektor. Nehmen Sie diesen CSS-Selektor mit drei komma-getrennten Selektoren als Beispiel:

```css
[type="password"],
input:focus,
:root #myApp input:required {
  color: blue;
}
```

Der `[type="password"]` Selektor in der obigen Selektorliste, mit einem Spezifizitätsgewicht von `0-1-0`, wendet die Deklaration `color: blue` auf alle Passwort-Eingabetypen an.

Alle Eingaben, egal welchen Typs, wenn sie den Fokus erhalten, stimmen mit dem zweiten Selektor in der Liste überein, `input:focus`, mit einem Spezifizitätsgewicht von `0-1-1`; dieses Gewicht besteht aus der Pseudo-Klasse `:focus` (0-1-0) und dem `input`-Typ (0-0-1). Wenn das Passwort-Eingabfeld den Fokus hat, wird es mit `input:focus` übereinstimmen, und das Spezifizitätsgewicht für die `color: blue`-Stildeklaration wird `0-1-1` sein. Wenn dieses Passwort nicht den Fokus hat, bleibt das Spezifizitätsgewicht bei `0-1-0`.

Die Spezifizität für eine erforderliche Eingabe, die in einem Element mit dem Attribut `id="myApp"` verschachtelt ist, beträgt `1-2-1`, basierend auf einem ID, zwei Pseudo-Klassen und einem Elementtyp.

Wenn der Passwort-Eingabetyp mit `required` in einem Element mit `id="myApp"` gesetzt ist, wird das Spezifizitätsgewicht `1-2-1` sein, basierend auf einer ID, zwei Pseudo-Klassen und einem Elementtyp, egal ob er den Fokus hat oder nicht. Warum ist das Spezifizitätsgewicht in diesem Fall `1-2-1` und nicht `0-1-1` oder `0-1-0`? Weil das Spezifizitätsgewicht vom übereinstimmenden Selektor mit dem höchsten Spezifizitätsgewicht stammt. Das Gewicht wird bestimmt, indem die Werte in den drei Spalten von links nach rechts verglichen werden.

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

Sobald die Spezifizitätswerte der relevanten Selektoren ermittelt sind, werden die Anzahl der Selektorkomponenten in jeder Spalte von links nach rechts verglichen.

```css
#myElement {
  color: green; /* 1-0-0  - WINS!! */
}
.bodyClass .sectionClass .parentClass [id="myElement"] {
  color: yellow; /* 0-4-0 */
}
```

Die erste Spalte ist der Wert der _ID_-Komponente, die die Anzahl der IDs in jedem Selektor ist. Die Zahlen in den _ID_-Spalten konkurrierender Selektoren werden verglichen. Der Selektor mit dem größeren Wert in der _ID_-Spalte gewinnt, egal was die Werte in den anderen Spalten sind. Im obigen Beispiel spielt die Gesamtanzahl der Komponenten des gelben Selektors keine Rolle, solange der Wert der ersten Spalte entscheidend ist.

Wenn die Zahl in den _ID_-Spalten der konkurrierenden Selektoren gleich ist, dann wird die nächste Spalte, _CLASS_, wie unten gezeigt, verglichen.

```css
#myElement {
  color: yellow; /* 1-0-0 */
}
#myApp [id="myElement"] {
  color: green; /* 1-1-0  - WINS!! */
}
```

Die _CLASS_-Spalte ist die Anzahl der Klassennamen, Attributselektoren und Pseudo-Klassen im Selektor. Wenn der _ID_-Spaltenwert gleich ist, gewinnt der Selektor mit dem größeren Wert in der _CLASS_-Spalte, egal was der Wert in der _TYPE_-Spalte ist. Dies wird im folgenden Beispiel gezeigt.

```css
:root input {
  color: green; /* 0-1-1 - WINS because CLASS column is greater */
}
html body main input {
  color: yellow; /* 0-0-4 */
}
```

Wenn die Zahlen in den _CLASS_- und _ID_-Spalten der konkurrierenden Selektoren gleich sind, wird die _TYPE_-Spalte relevant. Die _TYPE_-Spalte ist die Anzahl der Elementtypen und Pseudo-Elemente im Selektor. Wenn die ersten beiden Spalten den gleichen Wert haben, gewinnt der Selektor mit der größeren Zahl in der _TYPE_-Spalte.

Wenn die konkurrierenden Selektoren die gleichen Werte in allen drei Spalten haben, kommt die Proximity-Regel ins Spiel, bei der der zuletzt deklarierte Stil Vorrang hat.

```css
input.myClass {
  color: yellow; /* 0-1-1 */
}
:root input {
  color: green; /* 0-1-1 WINS because it comes later */
}
```

### Die `:is()`, `:not()`, `:has()` und CSS-Verschachtelungsausnahmen

Die Übereinstimmungs-Pseudo-Klasse {{CSSxRef(":is", ":is()")}}, die relationale Pseudo-Klasse {{CSSxRef(":has", ":has()")}}, und die Negations-Pseudo-Klasse {{CSSxRef(":not", ":not()")}} werden _nicht_ als Pseudo-Klassen in der Spezifizitätsgewicht-Berechnung betrachtet. Sie selbst fügen der Spezifizitätsgleichung kein Gewicht hinzu. Jedoch sind die Selektorparameter, die in die Pseudo-Klassen-Klammern übergeben werden, Teil des Spezifizitätsalgorithmus; das Gewicht der Matches-Any- und Negationspseudo-Klasse in der Spezifizitätswerteberechnung ist das Gewicht des Parameters [weight](#selektor-gewichtskategorien).

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

Beachten Sie, dass in der obigen CSS-Paarung das durch die `:is()`, `:has()` und `:not()` Pseudo-Klassen bereitgestellte Spezifizitätsgewicht der Wert des Selektorparameters ist, nicht der Pseudo-Klasse.

Alle drei dieser Pseudo-Klassen akzeptieren komplexe Selektorlisten, eine Liste von komma-getrennten Selektoren, als Parameter. Diese Funktion kann verwendet werden, um die Spezifität eines Selektors zu erhöhen:

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

Bei der Erstellung komplexer Selektorlisten mit [CSS-Verschachtelung](/de/docs/Web/CSS/Guides/Nesting) verhält sich dies ganz ähnlich wie die `:is()` Pseudo-Klasse.

```css
p,
#fakeId {
  span {
    /* 1-0-1 */
  }
}
```

Im obigen Codeblock die komplexen Selektoren `p, #fakeId` wird die mit `#fakeId` und auch dem `span` erhaltene Spezifizität berücksichtigt, sodass dies eine Spezifizität von `1-0-1` für sowohl `p span` als auch `#fakeId span` ergibt. Dies ist die gleiche Spezifizität wie der `:is(p, #fakeId) span` Selektor.

Im Allgemeinen möchten Sie die Spezifität auf ein Minimum reduzieren, aber wenn Sie die Spezifität eines Elements aus einem bestimmten Grund erhöhen müssen, können diese drei Pseudo-Klassen helfen.

```css
a:not(#fakeId#fakeId#fakeID) {
  color: blue; /* 3-0-1 */
}
```

In diesem Beispiel sind alle Links blau, es sei denn, sie werden durch eine Linkdeklaration mit 3 oder mehr IDs, einen FarbwWert, der ein `a` enthält, das das [`!important`-Flag](#the_!important_exception) verwendet, oder wenn der Link eine [Inline-Stil](#inline-stile) Farberklärung hat, überschrieben. Wenn Sie eine solche Technik verwenden, fügen Sie einen Kommentar hinzu, um zu erklären, warum der Hack benötigt wurde.

### Inline-Stile

Inline-Stile, die einem Element hinzugefügt werden (z. B. `style="font-weight: bold;"`), überschreiben immer alle normalen Stile in Autorenstilen und können daher als mit der höchsten Spezifizität betrachtet werden. Betrachten Sie Inline-Stile als ein Spezifizitätsgewicht von `1-0-0-0`.

Der einzige Weg, Inline-Stile zu überschreiben, ist durch die Verwendung von `!important`.

Viele JavaScript-Frameworks und -Bibliotheken fügen Inline-Stile hinzu. Die Verwendung von `!important` mit einem sehr gezielten Selektor, wie einem Attributselektor, der den Inline-Stil verwendet, ist eine Möglichkeit, diese Inline-Stile zu überschreiben.

```html
<p style="color: purple">…</p>
```

```css
p[style*="purple"] {
  color: rebeccapurple !important;
}
```

Fügen Sie mit jedem Einschluss des wichtigen Flags unbedingt einen Kommentar ein, damit Codepfleger verstehen, warum ein CSS-Anti-Pattern verwendet wurde.

### Die `!important` Ausnahme

CSS-Deklarationen, die als wichtig markiert sind, überschreiben alle anderen Deklarationen innerhalb derselben Kaskadenebene und Ursprung. Obwohl technisch gesehen [`!important`](/de/docs/Web/CSS/Reference/Values/important) nichts mit Spezifizität zu tun hat, interagiert es direkt mit der Spezifizität und der Kaskade. Es kehrt die [Kaskadenreihenfolge](/de/docs/Web/CSS/Guides/Cascade/Introduction) der Stylesheets um.

Wenn Deklarationen aus demselben Ursprung und derselben Kaskadenschicht in Konflikt stehen und ein Eigenschaftswert das `!important`-Flag gesetzt hat, wird die wichtige Deklaration unabhängig von der Spezifizität angewendet. Wenn konkurrierende Deklarationen aus demselben Ursprung und derselben Kaskadenschicht mit demselben Element gelten und die `!important`-Deklaration muss mit größerer Spezifizität angewendet werden.

Die Verwendung von `!important`, um Spezifizität zu überschreiben, wird als **schlechte Praxis** betrachtet und sollte für diesen Zweck vermieden werden. Das Verstehen und effektive Verwenden von Spezifizität und Kaskade kann die Notwendigkeit des `!important`-Flags beseitigen.

Anstatt `!important` zu verwenden, um Fremd-CSS (aus externen Bibliotheken wie Bootstrap oder normalize.css) zu überschreiben, importieren Sie die Drittanbieterskripte direkt in die [Kaskadenebenen](/de/docs/Web/CSS/Reference/At-rules/@layer). Wenn Sie `!important` in Ihrem CSS verwenden müssen, kommentieren Sie Ihre Verwendung, damit zukünftige Codepfleger wissen, warum die Deklaration als wichtig markiert wurde und nicht überschrieben werden sollte. Verwenden Sie `!important` jedoch definitiv nicht, wenn Sie Plugins oder Frameworks schreiben, die andere Entwickler ohne Kontrolle integrieren müssen.

### Die `:where()` Ausnahme

Die Spezifizitätsanpassungs-Pseudo-Klasse {{CSSxRef(":where", ":where()")}} hat immer ihre Spezifizität auf null, `0-0-0`, ersetzt. Sie ermöglicht es, CSS-Selektoren sehr spezifisch darin zu machen, welches Element anvisiert wird, ohne eine Erhöhung der Spezifizität.

Beim Erstellen von Drittanbieter-CSS für Entwickler, die keinen Zugriff darauf haben, Ihr CSS zu bearbeiten, wird es als gute Praxis angesehen, CSS mit der niedrigstmöglichen Spezifizität zu erstellen. Wenn beispielsweise Ihr Theme das folgende CSS enthält:

```css
:where(#defaultTheme) a {
  /* 0-0-1 */
  color: red;
}
```

Dann kann der Entwickler, der das Widget implementiert, die Linkfarbe ganz einfach nur mithilfe von Typ-Selektoren überschreiben.

```css
footer a {
  /* 0-0-2 */
  color: blue;
}
```

### Wie `@scope` Blöcke die Spezifizität beeinflussen

Das Einfügen eines Regelsatzes in einen {{cssxref("@scope")}}-Block wirkt sich nicht auf die Spezifizität seines Selektors aus, unabhängig davon, welche Selektoren innerhalb der [Scoping-Root und Grenze](/de/docs/Web/CSS/Reference/At-rules/@scope#syntax) verwendet werden.
Wenn Sie jedoch beschließen, die {{cssxref(":scope")}} Pseudo-Klasse explizit hinzuzufügen, müssen Sie dies bei der Berechnung der Spezifizität berücksichtigen.
`:scope`, wie alle regulären Pseudo-Klassen, hat eine Spezifizität von 0-1-0. Zum Beispiel:

```css
@scope (.article-body) {
  /* :scope img has a specificity of 0-1-0 + 0-0-1 = 0-1-1 */
  :scope img {
  }
}
```

Weitere Informationen finden Sie unter [Spezifität in `@scope`](/de/docs/Web/CSS/Reference/At-rules/@scope#specificity_in_scope).

## Tipps zur Handhabung von Spezifizitätsproblemen

Anstelle von `!important` sollten Sie Kaskadenebenen verwenden und in Ihrem CSS niedrige Gewichtsspezifizität verwenden, sodass Stile leicht mit etwas spezifischeren Regeln überschrieben werden können. Die Verwendung von semantischem HTML hilft, Anker bereitzustellen, von denen aus das Styling angewendet werden kann.

### Selektoren mit und ohne Hinzufügen von Spezifizität spezifisch machen

Indem Sie den Teil des Dokuments, den Sie stylen, vor dem Element angeben, das Sie auswählen, wird die Regel spezifischer. Abhängig davon, wie Sie es hinzufügen, können Sie etwas, viel oder gar keine Spezifizität hinzufügen, wie unten gezeigt:

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

#### Reduzierung der ID-Spezifizität

Die Spezifizität basiert auf der Form eines Selektors. Das Einschließen der `id` eines Elements als Attributselektor anstelle eines ID-Selektors ist eine gute Möglichkeit, ein Element spezifischer zu machen, ohne zu viel Spezifizität hinzuzufügen. Im vorherigen Beispiel wird der Selektor `[id="myContent"]` als Attributselektor für die Bestimmung der Spezifizität des Selektors betrachtet, obwohl er eine ID auswählt.

Sie können auch die `id` oder einen Teil eines Selektors als Parameter in die Pseudo-Klasse zur Spezifizitätsanpassung `:where()` aufnehmen, wenn Sie einen Selektor spezifischer machen müssen, aber überhaupt keine Spezifizität hinzufügen möchten.

### Spezifizität erhöhen durch Duplizieren des Selektors

Als Sonderfall zur Erhöhung der Spezifizität können Sie Gewichte aus den _CLASS_- oder _ID_-Spalten duplizieren. Das Duplizieren von ID-, Klassen-, Pseudo-Klassen- oder Attributselektoren innerhalb eines zusammengesetzten Selektors erhöht die Spezifizität, wenn Sie sehr spezifische Selektoren überschreiben müssen, über die Sie keine Kontrolle haben.

```css
#myId#myId#myId span {
  /* 3-0-1 */
}
.myClass.myClass.myClass span {
  /* 0-3-1 */
}
```

Verwenden Sie dies sparsam, wenn überhaupt. Wenn Sie Selektorduplizierung verwenden, kommentieren Sie immer Ihr CSS.

Durch die Verwendung von `:is()` und `:not()` (und auch `:has()`) können Sie die Spezifizität sogar dann erhöhen, wenn Sie keine `id` zu einem übergeordneten Element hinzufügen können:

```css
:not(#fakeID#fakeId#fakeID) span {
  /* 3-0-1 */
}
:is(#fakeID#fakeId#fakeID, span) {
  /* 3-0-0 */
}
```

### Vorrang vor Drittanbieter-CSS

Die Nutzung von Kaskadenebenen ist der Standardweg, um einer Menge von Stilen Vorrang vor einer anderen Menge von Stilen zu geben; Kaskadenebenen ermöglichen dies ohne Verwendung von Spezifizität! Normale (nicht wichtige) Autorenstile, die in Kaskadenebenen importiert werden, haben eine niedrigere Priorität als nicht geschichtete Autorenstile.

Wenn Stile von einem Stylesheet stammen, das Sie nicht bearbeiten oder nicht verstehen können, und Sie müssen Stile überschreiben, lautet die Strategie, die Stile, die Sie nicht kontrollieren, in eine Kaskadenschicht zu importieren. Stile in nachfolgend deklarierten Schichten haben Vorrang, wobei nicht geschichtete Stile Vorrang vor allen geschichteten Stilen aus demselben Ursprung haben.

Wenn zwei Selektoren aus verschiedenen Schichten dasselbe Element treffen, haben Ursprung und Bedeutung Vorrang; die Spezifizität des Selektors im verlierenden Stylesheet ist irrelevant.

```css
@import "TW.css" layer();
p,
p * {
  font-size: 1rem;
}
```

Im obigen Beispiel wird der gesamte Absatztext, einschließlich des verschachtelten Inhalts, `1rem` sein, unabhängig davon, wie viele Klassennamen die Absätze haben, die mit dem TW Stylesheet übereinstimmen.

### Vermeidung und Überschreiben von `!important`

Der beste Ansatz ist, `!important` nicht zu verwenden. Die obigen Erklärungen zur Spezifizität sollten hilfreich sein, um die Verwendung des Flags zu vermeiden und es vollständig zu entfernen, wenn es auftritt.

Um die vermeintliche Notwendigkeit von `!important` zu beseitigen, können Sie Folgendes tun:

- Erhöhen Sie die Spezifizität des Selektors der ehemals `!important` Deklaration, sodass sie größer ist als andere Deklarationen
- Geben Sie ihm die gleiche Spezifizität und platzieren Sie ihn nach der Deklaration, die er überschreiben soll
- Reduzieren Sie die Spezifizität des Selektors, den Sie überschreiben möchten.

Alle diese Methoden werden in den vorherigen Abschnitten behandelt.

Wenn Sie `!important`-Flags nicht aus einem Autoren-Stylesheet entfernen können, ist die einzige Lösung, die wichtigen Stile zu überschreiben, die Verwendung von `!important`. Das Erstellen einer [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer) für wichtige Deklarationen ist eine ausgezeichnete Lösung. Zwei Möglichkeiten, dies zu tun, sind:

#### Methode 1

1. Erstellen Sie ein separates, kurzes Stylesheet, das nur wichtige Deklarationen zum spezifischen Überschreiben von wichtigen Deklarationen enthält, die Sie nicht entfernen konnten.
2. Importieren Sie dieses Stylesheet als das erste Importieren in Ihrem CSS mit `layer()`, einschließlich der `@import`-Anweisung, bevor Sie andere Stylesheets verknüpfen. Dadurch wird sichergestellt, dass die wichtigen Überschreibungen als erste Schicht importiert werden.

```css
@import "importantOverrides.css" layer();
```

#### Methode 2

1. Erstellen Sie zu Beginn Ihrer Stylesheet-Deklarationen eine benannte Kaskadenschicht, so:

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

Die Spezifizität des Selektors des wichtigen Stils innerhalb der Schicht kann niedrig sein, solange er das von Ihnen zu überschreibende Element trifft. Normale Schichten sollten außerhalb der Schicht deklariert werden, da geschichtete Stile eine niedrigere Priorität haben als nicht geschichtete Stile.

### Ignoranz der Baumproximity

Die Nähe eines Elements zu anderen Elementen, die in einem gegebenen Selektor referenziert werden, hat keinen Einfluss auf die Spezifizität.

```css
body h1 {
  color: green;
}

html h1 {
  color: purple;
}
```

Die `<h1>`-Elemente werden lila, weil bei Deklarationen mit gleicher Spezifizität der zuletzt deklarierte Selektor Vorrang hat.

### Direkt anvisierte Elemente vs. geerbte Stile

Stile für ein direkt anvisiertes Element haben immer Vorrang vor geerbten Stilen, unabhängig von der Spezifizität der geerbten Regel. Angesichts des folgenden CSS und HTML:

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

Der `h1` wird lila, weil der `h1`-Selektor das Element spezifisch anvisiert, während das Grün vom `#parent`-Deklarationen geerbt wird.

## Beispiele

In dem folgenden CSS haben wir drei Selektoren, die {{HTMLElement('input')}}-Elemente anvisieren, um eine Farbe festzulegen. Für ein gegebenes Eingabefeld ist das Spezifizitätsgewicht der Farberklärung, die Vorrang hat, der übereinstimmende Selektor mit dem größten Gewicht:

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

Wenn die obigen Selektoren alle das gleiche Eingabefeld anvisieren, wird das Eingabefeld rot sein, da die erste Deklaration den höchsten Wert in der _ID_-Spalte hat.

Der letzte Selektor hat vier _TYPE_-Komponenten. Während er den höchsten Ganzzahlwert hat, gilt: Egal wie viele Elemente und Pseudo-Elemente enthalten sind, auch wenn es 150 wären, TYPE-Komponenten haben niemals Vorrang vor _CLASS_-Komponenten. Die Spaltenwerte werden verglichen, beginnend mit links nach rechts, wenn die Spaltenwerte gleich sind.

Hätten wir im obigen Beispielcode den ID-Selektor in einen Attributselektor umgewandelt, hätten die ersten beiden Selektoren die gleiche Spezifizität, wie unten gezeigt:

```css
[id="myElement"] input.myClass {
  color: red;
} /* 0-2-1 */
input[type="password"]:required {
  color: blue;
} /* 0-2-1 */
```

Wenn mehrere Deklarationen die gleiche Spezifizität haben, wird die letzte Deklaration angewendet, die im CSS zu finden ist. Wenn beide Selektoren das gleiche {{HTMLElement('input')}} treffen, wird die Farbe blau sein.

## Zusätzliche Hinweise

Einige Dinge, die Sie über Spezifizität wissen sollten:

1. Spezifizität gilt nur, wenn dasselbe Element von mehreren Deklarationen im gleichen Kaskadenlayer oder Ursprung anvisiert wird. Spezifizität zählt nur für Deklarationen von gleicher Bedeutung, Ursprung und [Kaskadenlayer](/de/docs/Web/CSS/Reference/At-rules/@layer). Wenn übereinstimmende Selektoren in verschiedenen Ursprüngen sind, bestimmt die [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction), welche Deklaration Vorrang hat.

2. Wenn zwei Selektoren im gleichen Kaskadenlayer und Ursprung die gleiche Spezifizität haben, wird die Scoping-Nähe berechnet; der Regelbereich mit der niedrigsten Scoping-Nähe gewinnt. Siehe [Wie @scope-Konflikte gelöst werden](/de/docs/Web/CSS/Reference/At-rules/@scope#how_scope_conflicts_are_resolved) für weitere Details und ein Beispiel.

3. Wenn die Scoping-Nähe auch für beide Selektoren gleich ist, kommt die Quellreihenfolge ins Spiel. Wenn alles andere gleich ist, gewinnt der letzte Selektor.

4. Gemäß CSS-Regeln haben [direkt anvisierte Elemente](#direkt_anvisierte_elemente_vs._geerbte_stile) immer Vorrang vor Regeln, die ein Element von seinem Vorfahren erbt.

5. [Die Nähe von Elementen](#ignoranz_der_baumproximity) im Dokumentbaum hat keinen Einfluss auf die Spezifizität.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade)-Modul
- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity_2)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax)-Modul
- [Einführung in CSS-Syntax: Deklarationen, Regelsätze und Anweisungen](/de/docs/Web/CSS/Guides/Syntax/Introduction)
- [CSS-Fehlerbehandlung](/de/docs/Web/CSS/Guides/Syntax/Error_handling)
- [At-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules)
- [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
- Werte: [initial](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value), [berechnet](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value), [verwendet](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value) und [tatsächlich](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value)
- [Wertedefinitionssyntax](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
- [CSS-Verschachtelung](/de/docs/Web/CSS/Guides/Nesting)-Modul
- [Spezifitätsrechner](https://specificity.keegan.st/) auf specificity.keegan.st: Eine interaktive Website, um Ihre eigenen CSS-Regeln zu testen und zu verstehen
- [SpeciFISHity](https://specifishity.com/) auf specifishity.com: Eine unterhaltsame Möglichkeit, über CSS-Spezifität zu lernen
- [_ID-CLASS-TYPE_ Übung](https://estelle.github.io/CSS/selectors/exercises/specificity.html): Ein Spezifizitäts-Quiz von Estelle Weyl
