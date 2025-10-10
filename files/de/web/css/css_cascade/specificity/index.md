---
title: Spezifität
slug: Web/CSS/CSS_cascade/Specificity
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

**Spezifität** ist der Algorithmus, den Browser verwenden, um die [CSS-Deklaration](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#css_syntax_basics) zu bestimmen, die am relevantesten für ein Element ist, was wiederum den anzuwendenden Eigenschaftswert festlegt. Der Spezifitätsalgorithmus berechnet das Gewicht eines [CSS-Selektors](/de/docs/Web/CSS/Reference#selectors), um zu bestimmen, welche Regel von konkurrierenden CSS-Deklarationen auf ein Element angewendet wird.

> [!NOTE]
> Browser betrachten die Spezifität **nachdem** sie [Ursprung und Wichtigkeit des Kaskadenstils](/de/docs/Web/CSS/CSS_cascade/Cascade) bestimmt haben. Mit anderen Worten, für konkurrierende Eigenschaftsdeklarationen ist die Spezifität relevant und wird nur zwischen Selektoren verglichen, die aus einem bestimmten [Kaskaden-Ursprung und Layer](/de/docs/Web/CSS/@layer) stammen, der für die Eigenschaft Vorrang hat. [Eingrenzungsnähe](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) und die Reihenfolge des Erscheinens werden relevant, wenn die Selektorspezifitäten der konkurrierenden Deklarationen im Kaskadenlayer mit Vorrang gleich sind.

## Wie wird die Spezifität berechnet?

Spezifität ist ein Algorithmus, der das Gewicht berechnet, das auf eine gegebene CSS-Deklaration angewendet wird. Das Gewicht wird durch die Anzahl der [Selektoren jeder Gewichtskategorie](#selektor-gewichtskategorien) im Selektor bestimmt, der mit dem Element (oder Pseudo-Element) übereinstimmt. Wenn es zwei oder mehr Deklarationen gibt, die unterschiedliche Eigenschaftswerte für dasselbe Element bereitstellen, wird der Wert der Deklaration im Stilblock mit dem übereinstimmenden Selektor mit dem größten algorithmischen Gewicht angewendet.

Der Spezifitätsalgorithmus ist im Grunde ein dreispaltiger Wert aus drei Kategorien oder Gewichten - ID, CLASS und TYPE -, die den drei Typen von Selektoren entsprechen. Der Wert stellt die Anzahl der Selektor-Komponenten in jeder Gewichtskategorie dar und wird als _ID - CLASS - TYPE_ geschrieben. Die drei Spalten werden erstellt, indem die Anzahl der Selektor-Komponenten für jede Selektor-Gewichtskategorie in den Selektoren gezählt wird, die mit dem Element übereinstimmen.

### Selektor-Gewichtskategorien

Die Selektor-Gewichtskategorien sind hier in der Reihenfolge abnehmender Spezifität aufgeführt:

- ID-Spalte
  - : Beinhaltet nur [ID-Selektoren](/de/docs/Web/CSS/ID_selectors), wie `#example`. Für jede ID in einem übereinstimmenden Selektor wird 1-0-0 zum Gewichtswert hinzugefügt.
- CLASS-Spalte
  - : Beinhaltet [Klassen-Selektoren](/de/docs/Web/CSS/Class_selectors), wie `.myClass`, Attributselektoren wie `[type="radio"]` und `[lang|="fr"]`, und Pseudoklassen, wie `:hover`, `:nth-of-type(3n)`, und `:required`. Für jede Klasse, Attribut-Selektor oder Pseudoklasse in einem übereinstimmenden Selektor, wird 0-1-0 zum Gewichtswert hinzugefügt.
- TYPE-Spalte
  - : Beinhaltet [Typselektoren](/de/docs/Web/CSS/Type_selectors), wie `p`, `h1`, und `td`, sowie Pseudo-Elemente wie `::before`, `::placeholder`, und alle anderen Selektoren mit Doppelpunktnotation. Für jeden Typ oder Pseudoelement in einem übereinstimmenden Selektor wird 0-0-1 zum Gewichtswert hinzugefügt.
- Kein Wert
  - : Der universelle Selektor ({{CSSxRef("Universal_selectors", "*")}}) und die Pseudoklasse {{CSSxRef(":where", ":where()")}} und ihre Parameter werden bei der Berechnung des Gewichts nicht gezählt, sodass ihr Wert 0-0-0 ist, aber sie stimmen mit Elementen überein. Diese Selektoren beeinflussen den Spezifitätsgewichtswert nicht.

Kombinatoren, wie {{CSSxRef("Next-sibling_combinator", "+")}}, {{CSSxRef("Child_combinator", "&gt;")}}, {{CSSxRef("Subsequent-sibling_combinator", "~")}}, [" "](/de/docs/Web/CSS/Descendant_combinator), und {{CSSxRef("Column_combinator", "||")}}, können einen Selektor spezifischer in der Auswahl machen, aber sie fügen dem Spezifitätsgewicht keinen Wert hinzu.

Der `&`-Verschachtelungskombinator fügt kein Spezifitätsgewicht hinzu, aber verschachtelte Regeln tun dies. In Bezug auf Spezifität und Funktionalität ähnelt das Verschachteln sehr der {{CSSxRef(":is", ":is()")}}-Pseudoklasse.

Wie beim Verschachteln, die {{CSSxRef(":is", ":is()")}}, {{CSSxRef(":has", ":has()")}}, und Negations- {{CSSxRef(":not", ":not()")}}-Pseudoklassen selbst fügen kein Gewicht hinzu. Die Parameter in diesen Selektoren allerdings schon. Das Spezifitätsgewicht jedes hiervon stammt aus dem Selektorparameter in der Liste der Selektoren mit der höchsten Spezifität. Ähnlich wie bei verschachtelten Selektoren, das Spezifitätsgewicht, das durch die verschachtelte Selektor-Komponente hinzugefügt wird, ist der Selektor in der kommagetrennten Liste der verschachtelten Selektoren mit der höchsten Spezifität.

Die [`:not()`, `:is()`, `:has()` und CSS-Nesting-Ausnahmen](#the_is_not_has_and_css_nesting_exceptions) werden weiter unten besprochen.

#### Übereinstimmender Selektor

Das Spezifitätsgewicht kommt vom übereinstimmenden Selektor. Betrachten Sie diesen CSS-Selektor mit drei kommagetrennten Selektoren als Beispiel:

```css
[type="password"],
input:focus,
:root #myApp input:required {
  color: blue;
}
```

Der `[type="password"]`-Selektor in der obigen Selektorliste, mit einem Spezifitätsgewicht von `0-1-0`, wendet die `color: blue`-Deklaration auf alle Passwort-Eingabetypen an.

Alle Eingaben, unabhängig vom Typ, stimmen, wenn sie den Fokus erhalten, mit dem zweiten Selektor in der Liste `input:focus` überein, mit einem Spezifitätsgewicht von `0-1-1`; dieses Gewicht besteht aus der `:focus`-Pseudoklasse (0-1-0) und dem `input`-Typ (0-0-1). Wenn das Passwortfeld den Fokus hat, wird es mit `input:focus` übereinstimmen, und das Spezifitätsgewicht für die `color: blue` Stil-Deklaration wird `0-1-1` sein. Wenn das Passwortfeld keinen Fokus hat, bleibt das Spezifitätsgewicht bei `0-1-0`.

Die Spezifität für eine erforderliche Eingabe, die in ein Element mit dem Attribut `id="myApp"` eingebettet ist, ist `1-2-1`, basierend auf einer ID, zwei Pseudoklassen und einem Elementtyp.

Wenn der Eingabetyp für das Passwort mit `required` in ein Element eingebettet ist, das `id="myApp"` gesetzt hat, wird das Spezifitätsgewicht `1-2-1` sein, basierend auf einer ID, zwei Pseudoklassen und einem Elementtyp, unabhängig davon, ob es den Fokus hat oder nicht. Warum ist das Spezifitätsgewicht in diesem Fall `1-2-1` anstatt `0-1-1` oder `0-1-0`? Weil das Spezifitätsgewicht vom übereinstimmenden Selektor mit dem größten Spezifitätsgewicht stammt. Das Gewicht wird bestimmt, indem die Werte in den drei Spalten von links nach rechts verglichen werden.

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

Sobald die Spezifitätswerte der relevanten Selektoren bestimmt sind, werden die Anzahl der Selektorkomponenten in jeder Spalte von links nach rechts verglichen.

```css
#myElement {
  color: green; /* 1-0-0  - WINS!! */
}
.bodyClass .sectionClass .parentClass [id="myElement"] {
  color: yellow; /* 0-4-0 */
}
```

Die erste Spalte ist der Wert der _ID_-Komponente, welcher die Anzahl der IDs in jedem Selektor ist. Die Zahlen in den _ID_-Spalten von konkurrierenden Selektoren werden verglichen. Der Selektor mit dem größeren Wert in der _ID_-Spalte gewinnt, egal was die Werte in den anderen Spalten sind. Im obigen Beispiel, selbst wenn der gelbe Selektor mehr Komponenten insgesamt hat, zählt nur der Wert der ersten Spalte.

Wenn die Zahl in den _ID_-Spalten von konkurrierenden Selektoren gleich ist, dann wird die nächste Spalte, _CLASS_, verglichen, wie unten gezeigt.

```css
#myElement {
  color: yellow; /* 1-0-0 */
}
#myApp [id="myElement"] {
  color: green; /* 1-1-0  - WINS!! */
}
```

Die _CLASS_-Spalte ist die Anzahl von Klassennamen, Attributselektoren und Pseudoklassen im Selektor. Wenn der _ID_-Spaltenwert gleich ist, gewinnt der Selektor mit dem größeren Wert in der _CLASS_-Spalte, egal was der Wert in der _TYPE_-Spalte ist. Dies wird im folgenden Beispiel gezeigt.

```css
:root input {
  color: green; /* 0-1-1 - WINS because CLASS column is greater */
}
html body main input {
  color: yellow; /* 0-0-4 */
}
```

Wenn die Zahlen in den _CLASS_- und _ID_-Spalten von konkurrierenden Selektoren gleich sind, wird die _TYPE_-Spalte relevant. Die _TYPE_-Spalte ist die Anzahl von Elementtypen und Pseudo-Elementen im Selektor. Wenn die ersten zwei Spalten den gleichen Wert haben, gewinnt der Selektor mit der größeren Zahl in der _TYPE_-Spalte.

Wenn die konkurrierenden Selektoren die gleichen Werte in allen drei Spalten haben, kommt die Nähe-Regel ins Spiel, bei der die zuletzt deklarierte Stilregel Vorrang hat.

```css
input.myClass {
  color: yellow; /* 0-1-1 */
}
:root input {
  color: green; /* 0-1-1 WINS because it comes later */
}
```

### Die `:is()`, `:not()`, `:has()` und CSS-Nesting-Ausnahmen

Die "matches-any" Pseudoklasse {{CSSxRef(":is", ":is()")}}, die relationale Pseudoklasse {{CSSxRef(":has", ":has()")}}, und die Negations-Pseudoklasse {{CSSxRef(":not", ":not()")}} werden _nicht_ als Pseudoklassen in der Spezifitätsgewichtung berücksichtigt. Sie selbst fügen der Spezifitätsgleichung kein Gewicht hinzu. Die Selektorparameter, die in die Klammer der Pseudoklasse übergeben werden, sind jedoch Teil des Spezifitätsalgorithmus; das Gewicht der "matches-any" und Negations-Pseudoklasse in der Spezifitätswertberechnung ist das Gewicht des Parameters [Gewicht](#selektor-gewichtskategorien).

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

Beachten Sie, dass in der obigen CSS-Zuordnung das Spezifitätsgewicht, das von den Pseudoklassen `:is()`, `:has()` und `:not()` bereitgestellt wird, der Wert des Selektorparameters ist, nicht der des Pseudoklasse.

Alle drei dieser Pseudoklassen akzeptieren komplexe Selektorlisten, eine Liste von kommagetrennten Selektoren, als Parameter. Diese Funktion kann verwendet werden, um die Spezifität eines Selektors zu erhöhen:

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

Im obigen CSS-Codeblock haben wir `#fakeId` in die Selektoren aufgenommen. Dieses `#fakeId` fügt `1-0-0` zum Spezifitätsgewicht jedes Absatzes hinzu.

Beim Erstellen komplexer Selektorlisten mit [CSS-Nesting](/de/docs/Web/CSS/CSS_nesting) verhält sich dies genauso wie die `:is()` Pseudoklasse.

```css
p,
#fakeId {
  span {
    /* 1-0-1 */
  }
}
```

Im obigen Codeblock der komplexe Selektor `p, #fakeId`, die Spezifität wird von `#fakeId` und auch vom `span` genommen, so dass eine Spezifität von `1-0-1` für sowohl `p span` als auch `#fakeId span` erstellt wird. Dies entspricht der gleichen Spezifität wie der `:is(p, #fakeId) span` Selektor.

Im Allgemeinen möchten Sie die Spezifität auf ein Minimum reduzieren, aber wenn Sie die Spezifität eines Elements aus einem bestimmten Grund erhöhen müssen, können diese drei Pseudoklassen helfen.

```css
a:not(#fakeId#fakeId#fakeID) {
  color: blue; /* 3-0-1 */
}
```

In diesem Beispiel werden alle Links blau, es sei denn, sie werden durch eine Link-Deklaration mit 3 oder mehr IDs, einem Farbwert, der ein `a` umfasst, das das [`!important`-Flag](#the_!important_exception) enthält, oder wenn der Link eine [Inline-Stil](#inline-stile) Farbdeklaration hat, überschrieben. Wenn Sie eine solche Technik verwenden, fügen Sie einen Kommentar hinzu, um zu erklären, warum der Hack benötigt wurde.

### Inline-Stile

Inline-Stile, die einem Element hinzugefügt werden (z.B. `style="font-weight: bold;"`), überschreiben immer alle normalen Stile in Autoren-Stilblättern und können daher als die höchste Spezifität betrachtet werden. Betrachten Sie Inline-Stile als hätten sie ein Spezifitätsgewicht von `1-0-0-0`.

Der einzige Weg, um Inline-Stile zu überschreiben, ist die Verwendung von `!important`.

Viele JavaScript-Frameworks und -Bibliotheken fügen Inline-Stile hinzu. Die Verwendung von `!important` mit einem sehr gezielten Selektor, wie z.B. einem Attributselektor, der den Inline-Stil verwendet, ist eine Möglichkeit, diese Inline-Stile zu überschreiben.

```html
<p style="color: purple">…</p>
```

```css
p[style*="purple"] {
  color: rebeccapurple !important;
}
```

Stellen Sie sicher, dass Sie bei jeder Einbeziehung des wichtigen Flags einen Kommentar hinzufügen, damit Codepfleger verstehen, warum ein CSS-Anti-Pattern verwendet wurde.

### Die `!important`-Ausnahme

CSS-Deklarationen, die als wichtig gekennzeichnet sind, überschreiben alle anderen Deklarationen innerhalb der gleichen Kaskadenschicht und Ursprung. Obwohl technisch gesehen [`!important`](/de/docs/Web/CSS/important) nichts mit Spezifität zu tun hat, interagiert es direkt mit Spezifität und der Kaskade. Es kehrt die [Kaskaden](/de/docs/Web/CSS/CSS_cascade/Cascade)-Reihenfolge der Stylesheets um.

Wenn Deklarationen aus dem gleichen Ursprung und Kaskadenschicht im Konflikt stehen und ein Eigenschaftswert das `!important`-Flag gesetzt hat, wird die wichtige Deklaration angewendet, unabhängig von der Spezifität. Wenn konkurrierende Deklarationen aus dem gleichen Ursprung und Kaskadenschicht mit dem `!important`-Flag auf dasselbe Element angewendet werden, wird die Deklaration mit einer höheren Spezifität angewendet.

Die Verwendung von `!important`, um Spezifität zu überschreiben, wird als **schlechte Praxis** betrachtet und sollte zu diesem Zweck vermieden werden. Das Verstehen und effektive Verwenden von Spezifität und der Kaskade kann jeglichen Bedarf für das `!important`-Flag beseitigen.

Anstatt `!important` zu verwenden, um fremden CSS-Code (aus externen Bibliotheken wie Bootstrap oder normalize.css) zu überschreiben, importieren Sie die Drittanbieter-Skripte direkt in [Kaskadenschichten](/de/docs/Web/CSS/@layer). Wenn Sie `!important` in Ihrem CSS verwenden müssen, kommentieren Sie Ihre Verwendung, damit zukünftige Codepfleger wissen, warum die Deklaration als wichtig gekennzeichnet wurde und sie nicht überschreiben. Verwenden Sie es definitiv nicht, wenn Sie Plugins oder Frameworks schreiben, die von anderen Entwicklern integriert werden müssen, ohne sie kontrollieren zu können.

### Die `:where()`-Ausnahme

Die Spezifitätsanpassung-Pseudoklasse {{CSSxRef(":where", ":where()")}} hat immer ihre Spezifität durch Null ersetzt, `0-0-0`. Sie ermöglicht es, CSS-Selektoren sehr spezifisch zu machen, was das Ziel-Element betrifft, ohne eine Erhöhung der Spezifität.

Beim Erstellen von Drittanbieter-CSS, das von Entwicklern verwendet werden soll, die keinen Zugang haben, Ihr CSS zu bearbeiten, gilt es als gute Praxis, CSS mit der niedrigstmöglichen Spezifität zu erstellen. Wenn Ihr Theme das folgende CSS enthält:

```css
:where(#defaultTheme) a {
  /* 0-0-1 */
  color: red;
}
```

Dann kann der Entwickler, der das Widget implementiert, die Linkfarbe leicht nur mit Typselektoren überschreiben.

```css
footer a {
  /* 0-0-2 */
  color: blue;
}
```

### Wie `@scope` Blöcke die Spezifität beeinflussen

Das Einfügen eines Regelsets in einen {{cssxref("@scope")}}-Block beeinflusst nicht die Spezifität seines Selektors, unabhängig von den Selektoren, die innerhalb der [Scope-Root und -Begrenzung](/de/docs/Web/CSS/@scope#syntax) verwendet werden.
Wenn Sie sich jedoch entscheiden, die {{cssxref(":scope")}}-Pseudoklasse explizit hinzuzufügen, müssen Sie diese bei der Berechnung der Spezifität berücksichtigen.
`:scope`, wie alle regulären Pseudoklassen, hat eine Spezifität von 0-1-0. Zum Beispiel:

```css
@scope (.article-body) {
  /* :scope img has a specificity of 0-1-0 + 0-0-1 = 0-1-1 */
  :scope img {
  }
}
```

Weitere Informationen siehe [Specificity in `@scope`](/de/docs/Web/CSS/@scope#specificity_in_scope).

## Tipps zum Umgang mit Spezifitätsproblemen

Anstelle von `!important` sollten Sie Kaskadenschichten verwenden und in Ihrem gesamten CSS wenig Gewichtung verwenden, sodass Stile leicht mit etwas spezifischeren Regeln überschrieben werden können. Die Verwendung von semantischem HTML hilft, Ankerpunkte bereitzustellen, von denen aus Styling angewendet wird.

### Selektoren spezifisch machen mit und ohne Hinzufügung von Spezifität

Indem Sie den Bereich des Dokuments angeben, den Sie vor dem Element, das Sie auswählen, gestalten, wird die Regel spezifischer. Je nachdem, wie Sie es hinzufügen, können Sie etwas, viel oder überhaupt keine Spezifität hinzufügen, wie unten dargestellt:

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

Unabhängig von der Reihenfolge wird die Überschrift grün sein, weil diese Regel die spezifischste ist.

#### ID-Spezifität reduzieren

Die Spezifität basiert auf der Form eines Selektors. Die ID eines Elements als Attributselektor statt als ID-Selektor einzuschließen, ist eine gute Möglichkeit, ein Element spezifischer zu machen, ohne eine übermäßige Spezifität hinzuzufügen. Im vorherigen Beispiel zählt der Selektor `[id="myContent"]` als Attributselektor zur Bestimmung der Spezifität des Selektors, obwohl er eine ID auswählt.

Sie können auch die ID oder einen Teil eines Selektors als Parameter in die `:where()`-Spezifitätsanpassung-Pseudoklasse einfügen, wenn Sie einen Selektor spezifischer machen müssen, aber überhaupt keine Spezifität hinzufügen möchten.

### Erhöhung der Spezifität durch Verdopplung des Selektors

Als Sonderfall zur Erhöhung der Spezifität können Sie Gewichte aus den _CLASS_- oder _ID_-Spalten duplizieren. Das Duplizieren von ID-, Klassen-, Pseudoklassen- oder Attributselektoren innerhalb eines zusammengesetzten Selektors erhöht die Spezifität, wenn Sie sehr spezifische Selektoren überschreiben müssen, über die Sie keine Kontrolle haben.

```css
#myId#myId#myId span {
  /* 3-0-1 */
}
.myClass.myClass.myClass span {
  /* 0-3-1 */
}
```

Verwenden Sie dies sparsam, wenn überhaupt. Wenn Sie Selektorverdopplung verwenden, kommentieren Sie immer Ihren CSS-Code.

Durch die Verwendung von `:is()` und `:not()` (und auch `:has()`) können Sie die Spezifität erhöhen, auch wenn Sie einer übergeordneten Element keine `id` hinzufügen können:

```css
:not(#fakeID#fakeId#fakeID) span {
  /* 3-0-1 */
}
:is(#fakeID#fakeId#fakeID, span) {
  /* 3-0-0 */
}
```

### Vorrang über Drittanbieter-CSS

Die Nutzung von Kaskadenschichten ist die Standardmethode, um es einem Satz von Stilen zu ermöglichen, Vorrang über einen anderen Satz von Stilen zu erhalten; Kaskadenschichten ermöglichen dies ohne Verwendung von Spezifität! Normale (nicht wichtige) Autorenstile, die in Kaskadenschichten importiert werden, haben geringeren Vorrang als untergliederte Autorenstile.

Wenn Stile von einem Stylesheet stammen, das Sie nicht bearbeiten oder verstehen können, und Sie Stile überschreiben müssen, ist eine Strategie, die Stile, die Sie nicht kontrollieren können, in eine Kaskadenschicht zu importieren. Stile in anschließend deklarierten Schichten haben Vorrang, wobei nicht geschichtete Stile Vorrang über alle geschichteten Stile desselben Ursprungs haben.

Wenn zwei Selektoren aus verschiedenen Schichten dasselbe Element ansprechen, haben Ursprung und Wichtigkeit Vorrang; die Spezifität des Selektors im verlierenden Stylesheet ist irrelevant.

```css
@import "TW.css" layer();
p,
p * {
  font-size: 1rem;
}
```

Im obigen Beispiel wird aller Absatztext, einschließlich des verschachtelten Inhalts, `1rem` sein, egal wie viele Klassennamen die Absätze haben, die mit dem TW-Stylesheet übereinstimmen.

### Vermeidung und Überschreibung von `!important`

Der beste Ansatz ist, `!important` nicht zu verwenden. Die obigen Erklärungen zur Spezifität sollten hilfreich sein, um die Verwendung des Flags zu vermeiden und es sogar vollständig zu entfernen, wenn es auftritt.

Um den wahrgenommenen Bedarf an `!important` zu beseitigen, können Sie eine der folgenden Maßnahmen ergreifen:

- Erhöhen Sie die Spezifität des Selektors der ehemals `!important`-Deklaration, so dass sie größer ist als andere Deklarationen
- Geben Sie ihr die gleiche Spezifität und platzieren Sie sie nach der Deklaration, die sie überschreiben soll
- Reduzieren Sie die Spezifität des Selektors, den Sie überschreiben möchten.

Alle diese Methoden werden in den vorhergehenden Abschnitten behandelt.

Wenn es Ihnen nicht möglich ist, `!important`-Flags aus einem Autoren-Stilblatt zu entfernen, ist die einzige Lösung zum Überschreiben der wichtigen Stile die Verwendung von `!important`. Das Erstellen einer [Kaskadenschicht](/de/docs/Web/CSS/@layer) mit wichtigen Deklarationsüberschreibungen ist eine ausgezeichnete Lösung. Zwei Möglichkeiten, dies zu tun, beinhalten:

#### Methode 1

1. Erstellen Sie ein separates, kurzes Stylesheet, das nur wichtige Deklarationen enthält, die speziell jede wichtige Deklaration überschreiben, die Sie nicht entfernen konnten.
2. Importieren Sie dieses Stylesheet als den ersten Import in Ihrem CSS mit `layer()`, einschließlich der `@import`-Anweisung, bevor Sie andere Stylesheets verlinken. Dies soll sicherstellen, dass die wichtigen Überschreibungen als erste Schicht importiert wird.

```css
@import "importantOverrides.css" layer();
```

#### Methode 2

1. Am Anfang Ihrer Stylesheet-Deklarationen erstellen Sie eine benannte Kaskadenschicht, wie folgt:

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

Die Spezifität des Selektors der wichtigen Stilregel innerhalb der Schicht kann niedrig sein, solange sie das Element übereinstimmt, das Sie überschreiben möchten. Normale Schichten sollten außerhalb der Schicht deklariert werden, da geschichtete Stile niedrigeren Vorrang haben als untergliederte Stile.

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

Die `<h1>`-Elemente werden lila sein, weil wenn Deklarationen die gleiche Spezifität haben, der zuletzt deklarierte Selektor Vorrang hat.

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

Das `h1` wird lila sein, weil der `h1`-Selektor das Element spezifisch anspricht, während das Grün von den `#parent`-Deklarationen geerbt wird.

## Beispiele

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

Wenn die obigen Selektoren alle die gleiche Eingabe ansprechen, wird die Eingabe rot sein, da die erste Deklaration den höchsten Wert in der _ID_-Spalte hat.

Der letzte Selektor hat vier _TYPE_-Komponenten. Obwohl er den höchsten ganzzahligen Wert hat, ganz gleich, wie viele Elemente und Pseudo-Elemente enthalten sind, selbst wenn es 150 wären, haben _TYPE_-Komponenten nie Vorrang über _CLASS_-Komponenten. Die Spaltenwerte werden von links nach rechts verglichen, wenn die Spaltenwerte gleich sind.

Hätten wir den ID-Selektor im obigen Beispielcode in einen Attributselektor umgewandelt, hätten die ersten beiden Selektoren die gleiche Spezifität, wie unten gezeigt:

```css
[id="myElement"] input.myClass {
  color: red;
} /* 0-2-1 */
input[type="password"]:required {
  color: blue;
} /* 0-2-1 */
```

Wenn mehrere Deklarationen die gleiche Spezifität haben, wird die letzte Deklaration, die im CSS gefunden wird, auf das Element angewendet. Wenn beide Selektoren die gleiche {{HTMLElement('input')}}-Elemente ansprechen, wird die Farbe blau sein.

## Zusätzliche Hinweise

Einige Dinge, die Sie über Spezifität beachten sollten:

1. Spezifität ist nur relevant, wenn dasselbe Element von mehreren Deklarationen in der gleichen Kaskadenschicht oder Ursprung angesprochen wird. Spezifität ist nur für Deklarationen von derselben Wichtigkeit und demselben Ursprung und [Kaskadenschicht](/de/docs/Web/CSS/@layer) von Bedeutung. Wenn übereinstimmende Selektoren aus verschiedenen Ursprüngen stammen, entscheidet die [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) darüber, welche Deklaration Vorrang hat.

2. Wenn zwei Selektoren in derselben Kaskadenschicht und demselben Ursprung die gleiche Spezifität haben, wird dann die Nähe der Eingrenzung berechnet; das Regelset mit der niedrigsten Eingrenzungsnähe gewinnt. Siehe [Wie @scope-Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) für weitere Details und ein Beispiel.

3. Wenn die Nähe der Eingrenzung für beide Selektoren ebenfalls gleich ist, kommt die Quellreihenfolge ins Spiel. Wenn alles andere gleich ist, gewinnt der letzte Selektor.

4. Laut CSS-Regeln werden [direkt angesprochene Elemente](#direkt_angesprochene_elemente_vs._geerbte_stile) immer Vorrang haben über Regeln, die ein Element von seinem Vorfahren erbt.

5. [Nähe von Elementen](#baum-nähe-ignoranz) im Dokumentbaum hat keinen Einfluss auf die Spezifität.

## Spezifikationen

{{Specifications}}

## Siehe auch

- ["Spezifität" in "Konflikte behandeln"](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity_2)
- [SpeciFISHity](https://specifishity.com/)
- [Spezifitätsrechner](https://specificity.keegan.st/): Eine interaktive Website, um Ihre eigenen CSS-Regeln zu testen und zu verstehen
- [_ID-CLASS-TYPE_ Übung](https://estelle.github.io/CSS/selectors/exercises/specificity.html) ein Spezifitätsquiz
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax) Leitfaden
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
- [CSS Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Initial](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value), [berechnet](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value), [verwendet](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value) und [tatsächliche](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value) Werte
- [Wertedefinitionssyntax](/de/docs/Web/CSS/CSS_values_and_units/Value_definition_syntax)
- [Lernen: Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [CSS-Nesting-Modul](/de/docs/Web/CSS/CSS_nesting)
