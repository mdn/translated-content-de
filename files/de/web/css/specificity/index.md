---
title: Spezifität
slug: Web/CSS/Specificity
l10n:
  sourceCommit: c9c86abc12c3bdd3fdb07c73a0d1cf88cdd0e1bc
---

{{CSSRef}}

**Spezifität** ist der Algorithmus, den Browser verwenden, um festzustellen, welche [CSS-Deklaration](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#css_syntax_basics) für ein Element am relevantesten ist, was wiederum bestimmt, welcher Eigenschaftswert auf das Element angewendet wird. Der Spezifitätsalgorithmus berechnet das Gewicht eines [CSS-Selektors](/de/docs/Web/CSS/Reference#selectors), um zu bestimmen, welche Regel von konkurrierenden CSS-Deklarationen auf ein Element angewendet wird.

> [!NOTE]
> Browser berücksichtigen die Spezifität **nachdem** sie [Ursprung und Bedeutung der Kaskade](/de/docs/Web/CSS/Cascade) bestimmt haben. Das heißt, bei konkurrierenden Eigenschaftsdeklarationen ist die Spezifität nur zwischen Selektoren aus einem Kaskaden-Ursprung und -Layer vergleichend relevant, der Vorrang für die Eigenschaft hat. [Scoping-Nähe](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) und die Reihenfolge des Erscheinens werden relevant, wenn die Selektorspezifitäten der konkurrierenden Deklarationen im vorrangigen Kaskaden-Layer gleich sind.

## Wie wird die Spezifität berechnet?

Die Spezifität ist ein Algorithmus, der das Gewicht berechnet, das auf eine gegebene CSS-Deklaration angewendet wird. Das Gewicht wird durch die Anzahl der [Selektoren jeder Gewichtskategorie](#selektor-gewichtskategorien) im Selektor bestimmt, der mit dem Element (oder Pseudo-Element) übereinstimmt. Wenn es zwei oder mehr Deklarationen gibt, die unterschiedliche Eigenschaftswerte für dasselbe Element bereitstellen, wird der Deklarationswert im Stilblock mit dem übereinstimmenden Selektor mit dem größten algorithmischen Gewicht angewendet.

Der Spezifitätsalgorithmus ist im Wesentlichen ein drei-column Wert aus drei Kategorien oder Gewichten - ID, CLASS und TYPE -, die den drei Selektortypen entsprechen. Der Wert stellt die Anzahl der Selektorkomponenten in jeder Gewichtskategorie dar und wird als _ID - CLASS - TYPE_ geschrieben. Die drei Spalten werden erstellt, indem die Anzahl der Selektorkomponenten für jede Selektor-Gewichtskategorie in den Selektoren gezählt wird, die mit dem Element übereinstimmen.

### Selektor-Gewichtskategorien

Die Selektor-Gewichtskategorien sind hier in der Reihenfolge abnehmender Spezifität aufgelistet:

- ID-Spalte
  - : Beinhaltet nur [ID-Selektoren](/de/docs/Web/CSS/ID_selectors) wie `#example`. Für jede ID in einem übereinstimmenden Selektor wird dem Gewichtswert 1-0-0 hinzugefügt.
- CLASS-Spalte
  - : Umfasst [Klassen-Selektoren](/de/docs/Web/CSS/Class_selectors) wie `.myClass`, Attributselektoren wie `[type="radio"]` und `[lang|="fr"]` sowie Pseudoklassen wie `:hover`, `:nth-of-type(3n)` und `:required`. Für jede Klasse, jeden Attributselektor oder jede Pseudoklasse in einem übereinstimmenden Selektor wird dem Gewichtswert 0-1-0 hinzugefügt.
- TYPE-Spalte
  - : Beinhaltet [Typ-Selektoren](/de/docs/Web/CSS/Type_selectors) wie `p`, `h1` und `td` sowie Pseudo-Elemente wie `::before`, `::placeholder` und alle anderen Selektoren mit doppelten Doppelpunkten. Für jeden Typ oder jedes Pseudo-Element in einem übereinstimmenden Selektor wird dem Gewichtswert 0-0-1 hinzugefügt.
- Kein Wert
  - : Der universelle Selektor ({{CSSxRef("Universal_selectors", "*")}}) und die Pseudoklasse {{CSSxRef(":where", ":where()")}} und ihre Parameter werden bei der Berechnung des Gewichts nicht gezählt, sodass ihr Wert 0-0-0 ist, aber sie passen dennoch zu Elementen. Diese Selektoren haben keinen Einfluss auf den Spezifitätsgewichts-Wert.

Kombinatoren wie {{CSSxRef("Next-sibling_combinator", "+")}}, {{CSSxRef("Child_combinator", "&gt;")}}, {{CSSxRef("Subsequent-sibling_combinator", "~")}}, [" "](/de/docs/Web/CSS/Descendant_combinator), und {{CSSxRef("Column_combinator", "||")}}, können einen Selektor spezifischer in Bezug darauf machen, was ausgewählt wird, aber sie tragen keinen Wert zur Spezifitätsgewichtung bei.

Der `&`-Verschachtelungs-Kombinator fügt keine Spezifitätsgewichtung hinzu, aber verschachtelte Regeln tun dies. In Bezug auf Spezifität und Funktionalität ist die Verschachtelung der {{CSSxRef(":is", ":is()")}}-Pseudoklasse sehr ähnlich.

Wie bei der Verschachtelung fügen die {{CSSxRef(":is", ":is()")}}, {{CSSxRef(":has", ":has()")}} und Negation ({{CSSxRef(":not", ":not()")}}) Pseudoklassen selbst kein Gewicht hinzu. Die Parameter in diesen Selektoren jedoch schon. Das Spezifitätsgewicht jedes dieser Pseudoklassen wird durch den Selektorparameter in der Liste der Selektoren mit der höchsten Spezifität bestimmt. Ebenso wird bei verschachtelten Selektoren das Spezifitätsgewicht durch die verschachtelte Selektorkomponente von dem Selektor in der kommagetrennten Liste der verschachtelten Selektoren mit der höchsten Spezifität hinzugefügt.

Die [Ausnahmen `:not()`, `:is()`, `:has()` und die CSS-Verschachtelung](#the_is_not_has_and_css_nesting_exceptions) werden unten diskutiert.

#### Übereinstimmender Selektor

Das Spezifitätsgewicht stammt von dem übereinstimmenden Selektor. Nehmen Sie diesen CSS-Selektor mit drei kommagetrennten Selektoren als Beispiel:

```css
[type="password"],
input:focus,
:root #myApp input:required {
  color: blue;
}
```

Der `[type="password"]`-Selektor in der obigen Selektorliste, mit einem Spezifitätsgewicht von `0-1-0`, wendet die `color: blue`-Deklaration auf alle Passwort-Eingabetypen an.

Alle Eingaben, unabhängig von ihrem Typ, wenn sie den Fokus erhalten, stimmen mit dem zweiten Selektor in der Liste `input:focus` überein, mit einem Spezifitätsgewicht von `0-1-1`; dieses Gewicht ergibt sich aus der Pseudoklasse `:focus` (0-1-0) und dem `input`-Typ (0-0-1). Wenn das Passwortfeld den Fokus hat, stimmt es mit `input:focus` überein, und das Spezifitätsgewicht für die `color: blue`-Stildeklaration wird `0-1-1` sein. Wenn dieses Passwort nicht den Fokus hat, bleibt das Spezifitätsgewicht bei `0-1-0`.

Die Spezifität für eine erforderliche Eingabe, die in ein Element mit dem Attribut `id="myApp"` verschachtelt ist, beträgt `1-2-1`, basierend auf einer ID, zwei Pseudoklassen und einem Elementtyp.

Wenn der Passwort-Eingabetyp mit `required` in ein Element mit `id="myApp"` verschachtelt ist, beträgt das Spezifitätsgewicht `1-2-1`, basierend auf einer ID, zwei Pseudoklassen und einem Elementtyp, unabhängig davon, ob es den Fokus hat oder nicht. Warum ist das Spezifitätsgewicht `1-2-1` anstelle von `0-1-1` oder `0-1-0` in diesem Fall? Weil das Spezifitätsgewicht vom übereinstimmenden Selektor mit dem größten Spezifitätsgewicht kommt. Das Gewicht wird bestimmt, indem die Werte in den drei Spalten von links nach rechts verglichen werden.

```css
[type="password"]             /* 0-1-0 */
input:focus                   /* 0-1-1 */
:root #myApp input:required   /* 1-2-1 */
```

### Drei-Spalten-Vergleich

Sobald die Spezifitätswerte der relevanten Selektoren ermittelt sind, werden die Anzahl der Selektorkomponenten in jeder Spalte von links nach rechts verglichen.

```css
#myElement {
  color: green; /* 1-0-0  - WINS!! */
}
.bodyClass .sectionClass .parentClass [id="myElement"] {
  color: yellow; /* 0-4-0 */
}
```

Die erste Spalte ist der Wert der _ID_-Komponente, welcher die Anzahl der IDs in jedem Selektor ist. Die Zahlen in den _ID_-Spalten der konkurrierenden Selektoren werden verglichen. Der Selektor mit dem größeren Wert in der _ID_-Spalte gewinnt, egal welche Werte in den anderen Spalten stehen. Im obigen Beispiel, obwohl der gelbe Selektor insgesamt mehr Komponenten hat, zählt nur der Wert der ersten Spalte.

Wenn die Zahl in den _ID_-Spalten der konkurrierenden Selektoren gleich ist, wird die nächste Spalte, _CLASS_, verglichen, wie unten gezeigt.

```css
#myElement {
  color: yellow; /* 1-0-0 */
}
#myApp [id="myElement"] {
  color: green; /* 1-1-0  - WINS!! */
}
```

Die _CLASS_-Spalte ist die Anzahl der Klassennamen, Attributselektoren und Pseudoklassen im Selektor. Wenn der _ID_-Spaltenwert gleich ist, gewinnt der Selektor mit dem größeren Wert in der _CLASS_-Spalte, unabhängig vom Wert in der _TYPE_-Spalte. Dies wird im folgenden Beispiel gezeigt.

```css
:root input {
  color: green; /* 0-1-1 - WINS because CLASS column is greater */
}
html body main input {
  color: yellow; /* 0-0-4 */
}
```

Wenn die Zahlen in den _CLASS_- und _ID_-Spalten in konkurrierenden Selektoren gleich sind, wird die _TYPE_-Spalte relevant. Die _TYPE_-Spalte ist die Anzahl der Elementtypen und Pseudoelemente im Selektor. Wenn die ersten beiden Spalten denselben Wert haben, gewinnt der Selektor mit der größeren Zahl in der _TYPE_-Spalte.

Wenn die konkurrierenden Selektoren denselben Wert in allen drei Spalten haben, tritt die Nähe-Regel in Kraft, bei der die zuletzt deklarierte Stilregel Vorrang erhält.

```css
input.myClass {
  color: yellow; /* 0-1-1 */
}
:root input {
  color: green; /* 0-1-1 WINS because it comes later */
}
```

### Die `:is()`, `:not()`, `:has()` und CSS-Verschachtelungsausnahmen

Die Übereinstimmungs-Pseudoklasse {{CSSxRef(":is", ":is()")}}, die relationale Pseudoklasse {{CSSxRef(":has", ":has()")}}, und die Negations-Pseudoklasse {{CSSxRef(":not", ":not()")}} werden _nicht_ als Pseudoklassen in der Spezifitätsgewichtung betrachtet. Sie selbst fügen der Spezifität kein Gewicht hinzu. Die Selektorparameter innerhalb der Pseudoklassenklammern sind jedoch Teil des Spezifitätsalgorithmus; das Gewicht der Übereinstimmungs- und Negations-Pseudoklasse in der Spezifitätswertberechnung ist das Gewicht des Parameters [Gewicht](#selektor-gewichtskategorien).

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

Beachten Sie, dass in der oben gezeigten CSS-Zuordnung das Spezifitätsgewicht, das von den `:is()`, `:has()` und `:not()` Pseudoklassen bereitgestellt wird, der Wert des Selektorparameters ist, nicht der Pseudoklasse.

Alle diese drei Pseudoklassen akzeptieren komplexe Selektorliste, eine Liste von kommagetrennten Selektoren, als Parameter. Dies kann genutzt werden, um die Spezifität eines Selektors zu erhöhen:

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

Im obenstehenden CSS-Codeblock haben wir `#fakeId` in den Selektoren aufgenommen. Dieses `#fakeId` fügt jedem Absatz `1-0-0` zum Spezifitätsgewicht hinzu.

Beim Erstellen komplexer Selektorlisten mit [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting) verhält sich dies genauso wie die `:is()` Pseudoklasse.

```css
p,
#fakeId {
  span {
    /* 1-0-1 */
  }
}
```

Im obigen Codeblock wird beim komplexen Selektor `p, #fakeId` die Spezifität aus `#fakeId` und auch dem `span` genommen, sodass dies eine Spezifität von `1-0-1` sowohl für `p span` als auch `#fakeId span` erzeugt. Dies ist die gleiche Spezifität wie der `:is(p, #fakeId) span` Selektor.

Im Allgemeinen möchten Sie die Spezifität so gering wie möglich halten, aber wenn Sie die Spezifität eines Elements aus einem bestimmten Grund erhöhen müssen, können Ihnen diese drei Pseudoklassen helfen.

```css
a:not(#fakeId#fakeId#fakeID) {
  color: blue; /* 3-0-1 */
}
```

In diesem Beispiel werden alle Links blau, es sei denn, sie werden durch eine Linkdeklaration mit 3 oder mehr IDs überschrieben, ein Farbwert, der ein `a` enthält, umfasst das [`!important`-Flag](#the_!important_exception), oder wenn der Link eine Farbdeklaration im [Inline-Stil](#inline-stile) hat. Wenn Sie eine solche Technik verwenden, fügen Sie einen Kommentar hinzu, um zu erklären, warum der Hack erforderlich war.

### Inline-Stile

Inline-Stile, die einem Element hinzugefügt werden (z. B. `style="font-weight: bold;"`), überschreiben immer normale Stile in Autoren-Stilblättern und können daher als höchste Spezifität betrachtet werden. Denken Sie an Inline-Stile als hätten sie ein Spezifitätsgewicht von `1-0-0-0`.

Der einzige Weg, Inline-Stile zu überschreiben, ist die Verwendung von `!important`.

Viele JavaScript-Frameworks und -Bibliotheken fügen Inline-Stile hinzu. Die Verwendung von `!important` mit einem sehr gezielten Selektor wie einem Attributselektor im inline-Stil ist eine Möglichkeit, diese Inline-Stile zu überschreiben.

```html
<p style="color: purple">…</p>
```

```css
p[style*="purple"] {
  color: rebeccapurple !important;
}
```

Stellen Sie sicher, dass Sie einen Kommentar mit jeder Einbeziehung des wichtigen Flags hinzufügen, damit Code-Wartungskräfte verstehen, warum ein CSS-Anti-Pattern verwendet wurde.

### Die `!important`-Ausnahme

CSS-Deklarationen, die als wichtig markiert sind, überschreiben alle anderen Deklarationen innerhalb derselben Kaskadenschicht und des gleichen Ursprungs. Obwohl technisch gesehen [`!important`](/de/docs/Web/CSS/important) nichts mit Spezifität zu tun hat, interagiert es direkt mit der Spezifität und der Kaskade. Es kehrt die [Kaskadenreihenfolge](/de/docs/Web/CSS/Cascade) von Stylesheets um.

Wenn Deklarationen aus demselben Ursprung und derselben Kaskadenschicht in Konflikt stehen und ein Eigenschaftswert das `!important`-Flag gesetzt hat, wird die wichtige Deklaration unabhängig von der Spezifität angewendet. Wenn konkurrierende Deklarationen aus demselben Ursprung und derselben Kaskadenschicht mit dem `!important`-Flag auf das gleiche Element angewendet werden, wird die Deklaration mit der höheren Spezifität angewendet.

Die Verwendung von `!important`, um Spezifität zu überschreiben, wird als **schlechte Praxis** angesehen und sollte aus diesem Grund vermieden werden. Das Verständnis und die effektive Nutzung von Spezifität und Kaskade können jede Notwendigkeit für das `!important`-Flag beseitigen.

Statt `!important` zu verwenden, um fremden CSS (aus externen Bibliotheken wie Bootstrap oder normalize.css) zu überschreiben, importieren Sie die Drittanbieterskripte direkt in [Kaskadenschichten](/de/docs/Web/CSS/@layer). Wenn Sie `!important` in Ihrem CSS verwenden müssen, kommentieren Sie Ihre Nutzung, damit zukünftige Code-Wartungskräfte wissen, warum die Deklaration als wichtig markiert wurde und sie nicht überschreiben. Verwenden Sie jedoch keinesfalls `!important` beim Schreiben von Plugins oder Frameworks, die andere Entwickler einbinden müssen, ohne sie kontrollieren zu können.

### Die `:where()`-Ausnahme

Die Spezifitätsanpassungspseudoklasse {{CSSxRef(":where", ":where()")}} hat immer ihre Spezifität durch null ersetzt, `0-0-0`. Sie ermöglicht es, CSS-Selektoren sehr spezifisch darin zu machen, welches Element angesprochen wird, ohne die Spezifität zu erhöhen.

Beim Erstellen von Drittanbieter-CSS, der von Entwicklern verwendet wird, die keinen Zugang zu Ihrem CSS haben, wird es als gute Praxis angesehen, CSS mit der niedrigsten möglichen Spezifität zu erstellen. Wenn z. B. Ihr Theme das folgende CSS enthält:

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

### Wie `@scope` Blöcke die Spezifität beeinflussen

Das Einfügen eines Regelsets in einen `@scope`-Block beeinflusst nicht die Spezifität seines Selektors, unabhängig von den Selektoren, die im Scope-Root und -Limit verwendet werden. Zum Beispiel:

```css
@scope (.article-body) {
  /* img has a specificity of 0-0-1, as expected */
  img { ... }
}
```

Wenn Sie sich jedoch entscheiden, die `:scope`-Pseudoklasse explizit Ihren Scoped-Selektoren voranstellen, müssen Sie sie in die Berechnung ihrer Spezifität einbeziehen. `:scope`, wie alle normalen Pseudoklassen, hat eine Spezifität von 0-1-0. Zum Beispiel:

```css
@scope (.article-body) {
  /* :scope img has a specificity of 0-1-0 + 0-0-1 = 0-1-1 */
  :scope img { ... }
}
```

Wenn Sie den `&`-Selektor innerhalb eines `@scope`-Blocks verwenden, repräsentiert `&` den scope-Root-Selektor; er wird intern in diesen Selektor umgeschrieben, der innerhalb eines {{cssxref(":is", ":is()")}}-Selektors eingewickelt ist. Zum Beispiel:

```css
@scope (figure, #primary) {
  & img { ... }
}
```

`& img` entspricht `:is(figure, #primary) img`.

Da `:is()` die Spezifität seines spezifischsten Arguments (`#primary` in diesem Fall) übernimmt, beträgt die Spezifität des gescopeten `& img`-Selektors daher 1-0-0 + 0-0-1 = 1-0-1.

## Tipps zum Umgang mit Spezifitätsproblemen

Anstatt `!important` zu verwenden, sollten Sie Kaskadenschichten nutzen und durchgängig in Ihrem CSS geringe Gewichtsspezifität verwenden, sodass Stile leicht durch etwas spezifischere Regeln überschrieben werden können. Die Verwendung semantischen HTMLs hilft, Ankerpunkte für die Stilanwendung bereitzustellen.

### Selektoren spezifisch machen mit und ohne Spezifität hinzufügen

Durch Angabe des Teils des Dokuments, den Sie abdecken, bevor das Element ausgewählt wird, wird die Regel spezifischer. Abhängig davon, wie Sie es hinzufügen, können Sie etwas, viel oder keine Spezifität hinzufügen, wie unten gezeigt:

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

Spezifität basiert auf der Form eines Selektors. Die ID eines Elements als Attributselektor statt als ID-Selektor einzuschließen, ist eine gute Möglichkeit, ein Element spezifischer zu machen, ohne eine übermäßige Spezifität hinzuzufügen. Im vorherigen Beispiel zählt der Selektor `[id="myContent"]` als Attributselektor zur Bestimmung der Spezifität des Selektors, obwohl er eine ID auswählt.

Sie können auch die ID oder einen Teil eines Selektors als Parameter in der `:where()`-Spezifitätsanpassungspseudoklasse einfügen, wenn Sie einen Selektor spezifischer machen, aber überhaupt keine Spezifität hinzufügen möchten.

### Erhöhung der Spezifität durch Duplizieren von Selektoren

Als Sonderfall zur Erhöhung der Spezifität können Sie Gewichte aus den _CLASS_- oder _ID_-Spalten duplizieren. Das Duplizieren von ID-, Klassen-, Pseudoklassen- oder Attributselektoren innerhalb eines Komplexselektors erhöht die Spezifität, wenn Sie sehr spezifische Selektoren überschreiben, über die Sie keine Kontrolle haben.

```css
#myId#myId#myId span {
  /* 3-0-1 */
}
.myClass.myClass.myClass span {
  /* 0-3-1 */
}
```

Verwenden Sie dies sparsam, wenn überhaupt. Wenn Sie Selektorduplikation verwenden, kommentieren Sie immer Ihr CSS.

Durch die Verwendung von `:is()` und `:not()` (und auch `:has()`) können Sie die Spezifität erhöhen, selbst wenn Sie einer übergeordneten Element keinen ID hinzufügen können:

```css
:not(#fakeID#fakeId#fakeID) span {
  /* 3-0-1 */
}
:is(#fakeID#fakeId#fakeID, span) {
  /* 3-0-0 */
}
```

### Vorrang gegenüber Drittanbieter-CSS

Das Nutzen von Kaskadenschichten ist die Standardmethode, um eine Reihe von Stilen gegenüber einer anderen zu priorisieren; Kaskadenschichten ermöglichen dies ohne Verwendung von Spezifität! Normale (nicht wichtige) Autorenstile, die in Kaskadenschichten importiert werden, haben eine geringere Priorität als nicht geschichtete Autorenstile.

Wenn Stile aus einem Stylesheet stammen, das Sie nicht bearbeiten können oder nicht verstehen, und Sie müssen Stile überschreiben, ist eine Strategie, die Stile, die Sie nicht kontrollieren, in eine Kaskadenschicht zu importieren. Stile in daraufhin erklärten Schichten haben Vorrang, wobei nicht geschichtete Stile Vorrang vor allen geschichteten Stilen aus demselben Ursprung haben.

Wenn zwei Selektoren aus verschiedenen Schichten dasselbe Element ansprechen, haben Ursprung und Wichtigkeit Vorrang; die Spezifität des Selektors im verlierenden Stylesheet ist irrelevant.

```html
<style>
  @import TW.css layer();
  p,
  p * {
    font-size: 1rem;
  }
</style>
```

Im obigen Beispiel wird aller Absatztext, einschließlich des verschachtelten Inhalts, `1rem` sein, egal wie viele Klassennamen die Absätze haben, die mit dem TW Stylesheet übereinstimmen.

### Vermeidung und Überschreibung von `!important`

Der beste Ansatz ist es, `!important` nicht zu verwenden. Die obigen Erklärungen zur Spezifität sollten hilfreich sein, um die Verwendung des Flags zu vermeiden und es insgesamt zu entfernen, wenn es auftritt.

Um die empfundene Notwendigkeit für `!important` zu beseitigen, können Sie eines der folgenden Dinge tun:

- Erhöhen Sie die Spezifität des Selektors der ehemals `!important` Deklaration, sodass sie größer ist als andere Deklarationen
- Geben Sie ihr die gleiche Spezifität und setzen Sie sie nach der Deklaration, die sie überschreiben soll
- Reduzieren Sie die Spezifität des Selektors, den Sie überschreiben möchten.

Alle diese Methoden werden in früheren Abschnitten behandelt.

Wenn Sie nicht in der Lage sind, `!important`-Flags aus einem Autoren-Stilblatt zu entfernen, ist die einzige Lösung, um die wichtigen Stile zu überschreiben, die Verwendung von `!important`. Eine exzellente Lösung ist es, eine [Kaskadenschicht](/de/docs/Web/CSS/@layer) von wichtigen Deklarationsüberschreibungen zu erstellen. Zwei Möglichkeiten, dies zu tun, sind:

#### Methode 1

1. Erstellen Sie ein separates, kurzes Stylesheet, das nur wichtige Deklarationen enthält, die explizit wichtige Deklarationen überschreiben, die Sie nicht entfernen konnten.
2. Importieren Sie dieses Stylesheet als das erste Import in Ihrem CSS, unter Verwendung von `layer()`, einschließlich der `@import`-Anweisung, bevor Sie andere Stylesheets verlinken. Dies stellt sicher, dass die wichtigen Überschreibungen als erste Schicht importiert werden.

```html
<style>
  @import importantOverrides.css layer();
</style>
```

#### Methode 2

1. Erstellen Sie am Anfang Ihrer Stylesheeterklärungen eine benannte Kaskadenschicht, wie folgt:

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

Die Spezifität des Selektors des wichtigen Stils innerhalb der Schicht kann niedrig sein, solange er das Element trifft, das Sie überschreiben möchten. Normale Schichten sollten außerhalb der Schicht deklariert werden, da geschichtete Stile eine geringere Vorrangstellung als nicht geschichtete Stile haben.

### Ignorieren der Baum-Nähe

Die Nähe eines Elements zu anderen Elementen, die in einem gegebenen Selektor angesprochen werden, hat keinen Einfluss auf die Spezifität.

```css
body h1 {
  color: green;
}

html h1 {
  color: purple;
}
```

Die `<h1>`-Elemente werden lila sein, weil, wenn Deklarationen die gleiche Spezifität haben, der zuletzt erklärte Selektor Vorrang hat.

### Direkt angesprochene Elemente vs. geerbte Stile

Stile für ein direkt angesprochenes Element haben immer Vorrang vor geerbten Stilen, unabhängig von der Spezifität der geerbten Regel. Angenommen, Sie haben das folgende CSS und HTML:

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

Das `h1` wird lila sein, weil der `h1`-Selektor das Element explizit anspricht, während das Grün von den `#parent` Deklarationen geerbt wird.

## Beispiele

Im folgenden CSS haben wir drei Selektoren, die auf {{HTMLElement('input')}}-Elemente abzielen, um eine Farbe festzulegen. Für eine gegebene Eingabe ist das Spezifitätsgewicht der Farberklärung mit Vorrang der übereinstimmende Selektor mit dem größten Gewicht:

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

Wenn die obigen Selektoren alle auf dasselbe `input` abzielen, wird das `input` rot sein, da die erste Deklaration den höchsten Wert in der _ID_-Spalte hat.

Der letzte Selektor hat vier _TYPE_-Komponenten. Obwohl er den höchsten ganzzahligen Wert hat, haben _TYPE_ Komponenten niemals Vorrang vor _CLASS_ Komponenten, egal wie viele Elemente und Pseudoelemente enthalten sind, selbst wenn es 150 wäre. Die Spaltenwerte werden von links nach rechts verglichen, wenn sie gleich sind.

Wenn wir den ID-Selektor im oben stehenden Beispielcode in einen Attributselektor umwandeln würden, hätten die ersten beiden Selektoren die gleiche Spezifität, wie unten dargestellt:

```css
[id="myElement"] input.myClass {
  color: red;
} /* 0-2-1 */
input[type="password"]:required {
  color: blue;
} /* 0-2-1 */
```

Wenn mehrere Deklarationen die gleiche Spezifität haben, wird die zuletzt im CSS gefundene Deklaration auf das Element angewendet. Wenn beide Selektoren denselben {{HTMLElement('input')}}-Element ansprechen, wird die Farbe blau sein.

## Zusätzliche Anmerkungen

Einige Dinge, die Sie zur Spezifität beachten sollten:

1. Spezifität gilt nur, wenn dasselbe Element von mehreren Deklarationen in derselben Kaskadenschicht oder demselben Ursprung angesprochen wird. Spezifität ist nur für Deklarationen derselben Wichtigkeit und desselben Ursprungs und [Kaskadenschicht](/de/docs/Web/CSS/@layer) relevant. Wenn übereinstimmende Selektoren in verschiedenen Ursprüngen sind, bestimmt die [Kaskade](/de/docs/Web/CSS/Cascade), welche Deklaration Vorrang hat.

2. Wenn zwei Selektoren in derselben Kaskadenschicht und im selben Ursprung die gleiche Spezifität haben, wird dann die Scoping-Nähe berechnet; das Regelset mit der geringsten Scoping-Nähe gewinnt. Siehe [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) für weitere Details und ein Beispiel.

3. Wenn die Scoping-Nähe auch bei beiden Selektoren gleich ist, tritt die Quellreihenfolge in Kraft. Wenn alles andere gleich ist, gewinnt der zuletzt angegebene Selektor.

4. Laut CSS-Regeln haben [direkt angesprochene Elemente](#direkt_angesprochene_elemente_vs._geerbte_stile) immer Vorrang vor Regeln, die ein Element von seinem Vorfahren erbt.

5. [Nähe von Elementen](#ignorieren_der_baum-nähe) im Dokumentenbaum hat keinen Einfluss auf die Spezifität.

## Spezifikationen

{{Specifications}}

## Siehe auch

- ["Spezifität" im "Umgang mit Konflikten"](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity_2)
- [SpeciFISHity](https://specifishity.com/)
- [Spezifitätsrechner](https://specificity.keegan.st/): Eine interaktive Website zum Testen und Verstehen Ihrer eigenen CSS-Regeln
- [_ID-CLASS-TYPE_ Übung](https://estelle.github.io/CSS/selectors/exercises/specificity.html) ein Spezifitätsquiz
- [CSS-Syntax](/de/docs/Web/CSS/Syntax) Leitfaden
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
- [CSS-Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [At-Regeln](/de/docs/Web/CSS/At-rule)
- [Vererbung](/de/docs/Web/CSS/Inheritance)
- [Initial](/de/docs/Web/CSS/initial_value), [berechnet](/de/docs/Web/CSS/computed_value), [verwendet](/de/docs/Web/CSS/used_value) und [tatsächliche](/de/docs/Web/CSS/actual_value) Werte
- [Wertedefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
- [Learn: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Learn: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [CSS-Verschachtelungsmodul](/de/docs/Web/CSS/CSS_nesting)
