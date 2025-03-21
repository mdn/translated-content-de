---
title: Spezifität
slug: Web/CSS/CSS_cascade/Specificity
l10n:
  sourceCommit: 95edea913e7f0726243aff3f47b85cfd6f02d995
---

{{CSSRef}}

**Spezifität** ist der Algorithmus, den Browser verwenden, um die [CSS-Deklaration](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#css_syntax_basics) zu bestimmen, die für ein Element am relevantesten ist und somit den anzuwendenden Eigenschaftswert bestimmt. Der Spezifizitäts-Algorithmus berechnet das Gewicht eines [CSS-Selektors](/de/docs/Web/CSS/Reference#selectors), um festzulegen, welche Regel von konkurrierenden CSS-Deklarationen auf ein Element angewendet wird.

> [!NOTE]
> Browser berücksichtigen Spezifität **nachdem** sie den [Ursprung der Kaskade und Wichtigkeit](/de/docs/Web/CSS/CSS_cascade/Cascade) bestimmt haben. Mit anderen Worten, bei konkurrierenden Eigenschaftsdeklarationen ist Spezifität nur innerhalb von Selektoren aus einem Ursprungs- und Schicht der Kaskade relevant und wird verglichen, die für die Eigenschaft Vorrang hat. [Scoping-Nähe](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) und die Reihenfolge des Auftretens werden relevant, wenn die Selektorspezifitäten der konkurrierenden Deklarationen in der vorherrschenden Kaskadenschicht gleich sind.

## Wie wird die Spezifität berechnet?

Die Spezifität ist ein Algorithmus, der das Gewicht berechnet, das auf eine gegebene CSS-Deklaration angewendet wird. Das Gewicht wird durch die Anzahl von [Selektoren jeder Gewichtskategorie](#selektor-gewichtskategorien) im Selektor bestimmt, der das Element (oder Pseudoelement) trifft. Wenn zwei oder mehr Deklarationen unterschiedliche Eigenschaftswerte für dasselbe Element liefern, wird der Deklarationswert im Stilblock mit dem passenden Selektor mit dem größten algorithmischen Gewicht angewendet.

Der Spezifizitäts-Algorithmus ist im Wesentlichen ein dreispaltiger Wert aus drei Kategorien oder Gewichten – ID, CLASS und TYPE –, die den drei Typen von Selektoren entsprechen. Der Wert repräsentiert die Anzahl der Selektor-Komponenten in jeder Gewichtskategorie und wird als _ID - CLASS - TYPE_ geschrieben. Die drei Spalten werden erstellt, indem die Anzahl der Selektor-Komponenten für jede Selektor-Gewichtskategorie in den Selektoren gezählt wird, die das Element treffen.

### Selektor-Gewichtskategorien

Die Selektor-Gewichtskategorien sind hier in abnehmender Spezifität aufgelistet:

- ID-Spalte
  - : Enthält nur [ID-Selektoren](/de/docs/Web/CSS/ID_selectors), wie `#example`. Für jede ID in einem übereinstimmenden Selektor addieren Sie 1-0-0 zum Gewichtswert.
- CLASS-Spalte
  - : Enthält [Klassenselektoren](/de/docs/Web/CSS/Class_selectors), wie `.myClass`, Attributselektoren wie `[type="radio"]` und `[lang|="fr"]`, und Pseudoklassen wie `:hover`, `:nth-of-type(3n)` und `:required`. Für jede Klasse, jeden Attributselektor oder jede Pseudoklasse in einem passenden Selektor, addieren Sie 0-1-0 zum Gewichtswert.
- TYPE-Spalte
  - : Enthält [Typselektoren](/de/docs/Web/CSS/Type_selectors), wie `p`, `h1` und `td`, und Pseudoelemente wie `::before`, `::placeholder`, und alle anderen Selektoren mit Doppelpunktnotation. Für jeden Typ oder jedes Pseudoelement in einem passenden Selektor, addieren Sie 0-0-1 zum Gewichtswert.
- Kein Wert
  - : Der universelle Selektor ({{CSSxRef("Universal_selectors", "*")}}) und die Pseudoklasse {{CSSxRef(":where", ":where()")}} und deren Parameter werden bei der Gewichtung nicht gezählt, so dass ihr Wert 0-0-0 beträgt, aber sie treffen dennoch auf Elemente zu. Diese Selektoren haben keinen Einfluss auf den Spezifizitätswert.

Kombinatoren wie {{CSSxRef("Next-sibling_combinator", "+")}}, {{CSSxRef("Child_combinator", "&gt;")}}, {{CSSxRef("Subsequent-sibling_combinator", "~")}}, [" "](/de/docs/Web/CSS/Descendant_combinator) und {{CSSxRef("Column_combinator", "||")}} können einen Selektor spezifischer machen, in Bezug darauf, was ausgewählt wird, aber sie addieren keinen Wert zur Spezifitätsgewichtung.

Der `&` Schachtelungs-Kombinator fügt kein Spezifizitätsgewicht hinzu, aber geschachtelte Regeln tun dies. In Bezug auf Spezifität und Funktionalität ist das Schachteln sehr ähnlich zur {{CSSxRef(":is", ":is()")}} Pseudoklasse.

Wie das Schachteln fügen die Pseudoklassen {{CSSxRef(":is", ":is()")}}, {{CSSxRef(":has", ":has()")}} und Negation ({{CSSxRef(":not", ":not()")}}) selbst kein Gewicht hinzu. Die Parameter in diesen Selektoren hingegen schon. Die Spezifitätsgewichtung jedes dieser Selektoren ergibt sich aus dem Selektorparameter in der Liste von Selektoren mit der höchsten Spezifität. Ähnlich verhält es sich mit geschachtelten Selektoren: Das Spezifizitätsgewicht, das durch die geschachtelte Selektorkomponente hinzugefügt wird, ist der Selektor in der durch Kommata getrennten Liste von geschachtelten Selektoren mit der höchsten Spezifität.

Die Ausnahmen [`:not()`, `:is()`, `:has()` und CSS-Schachtelung](#the_is_not_has_and_css_nesting_exceptions) werden unten erläutert.

#### Übereinstimmender Selektor

Das Spezifizitätsgewicht kommt vom übereinstimmenden Selektor. Nehmen Sie diesen CSS-Selektor mit drei durch Kommata getrennten Selektoren als Beispiel:

```css
[type="password"],
input:focus,
:root #myApp input:required {
  color: blue;
}
```

Der `[type="password"]` Selektor in der obigen Selektorliste mit einem Spezifizitätsgewicht von `0-1-0` wendet die `color: blue` Deklaration auf alle Passwort-Eingabetypen an.

Alle Eingaben, egal welcher Typ, die den Fokus erhalten, entsprechen dem zweiten Selektor in der Liste, `input:focus`, mit einem Spezifizitätsgewicht von `0-1-1`; dieses Gewicht setzt sich zusammen aus der `:focus` Pseudoklasse (0-1-0) und dem `input` Typ (0-0-1). Hat das Passwortfeld den Fokus, entspricht es `input:focus`, und das Spezifizitätsgewicht für die `color: blue` Stil-Deklaration wird `0-1-1` sein. Hat das Passwort keinen Fokus, bleibt das Spezifizitätsgewicht bei `0-1-0`.

Die Spezifizität für ein erforderliches Eingabefeld, das in einem Element mit dem Attribut `id="myApp"` geschachtelt ist, beträgt `1-2-1`, basierend auf einer ID, zwei Pseudoklassen und einem Elementtyp.

Wenn der Passwort-Eingabetyp mit `required` in einem Element mit `id="myApp"` geschachtelt ist, beträgt das Spezifizitätsgewicht `1-2-1`, basierend auf einer ID, zwei Pseudoklassen und einem Elementtyp, unabhängig davon, ob es den Fokus hat oder nicht. Warum ist das Spezifizitätsgewicht in diesem Fall `1-2-1` anstatt `0-1-1` oder `0-1-0`? Weil das Spezifizitätsgewicht vom übereinstimmenden Selektor mit dem größten Spezifizitätsgewicht stammt. Das Gewicht wird durch Vergleich der Werte in den drei Spalten, von links nach rechts, bestimmt.

```css
[type="password"]             /* 0-1-0 */
input:focus                   /* 0-1-1 */
:root #myApp input:required   /* 1-2-1 */
```

### Vergleich mit drei Spalten

Sobald die Spezifizitätswerte der relevanten Selektoren bestimmt sind, werden die Anzahl der Selektorkomponenten in jeder Spalte von links nach rechts verglichen.

```css
#myElement {
  color: green; /* 1-0-0  - WINS!! */
}
.bodyClass .sectionClass .parentClass [id="myElement"] {
  color: yellow; /* 0-4-0 */
}
```

Die erste Spalte ist der Wert der _ID_-Komponente, welche die Anzahl der IDs in jedem Selektor darstellt. Die Zahlen in den _ID_-Spalten der konkurrierenden Selektoren werden verglichen. Der Selektor mit dem höheren Wert in der _ID_-Spalte gewinnt, unabhängig von den Werten in den anderen Spalten. Im obigen Beispiel, obwohl der gelbe Selektor insgesamt mehr Komponenten hat, zählt nur der Wert der ersten Spalte.

Wenn die Zahl in den _ID_-Spalten konkurrierender Selektoren gleich ist, wird die nächste Spalte, _CLASS_, verglichen, wie unten gezeigt.

```css
#myElement {
  color: yellow; /* 1-0-0 */
}
#myApp [id="myElement"] {
  color: green; /* 1-1-0  - WINS!! */
}
```

Die _CLASS_-Spalte ist die Anzahl der Klassennamen, Attributselektoren und Pseudoklassen im Selektor. Wenn der Wert in der _ID_-Spalte gleich ist, gewinnt der Selektor mit dem höheren Wert in der _CLASS_-Spalte, unabhängig vom Wert in der _TYPE_-Spalte. Dies wird im folgenden Beispiel gezeigt.

```css
:root input {
  color: green; /* 0-1-1 - WINS because CLASS column is greater */
}
html body main input {
  color: yellow; /* 0-0-4 */
}
```

Wenn die Zahlen in den _CLASS_- und _ID_-Spalten der konkurrierenden Selektoren gleich sind, wird die _TYPE_-Spalte relevant. Die _TYPE_-Spalte ist die Anzahl der Elementtypen und Pseudoelemente im Selektor. Wenn die ersten beiden Spalten denselben Wert haben, gewinnt der Selektor mit der höheren Zahl in der _TYPE_-Spalte.

Wenn die konkurrierenden Selektoren die gleichen Werte in allen drei Spalten haben, tritt die Nähe-Regel in Kraft, wobei die zuletzt deklarierte Stilregel Vorrang hat.

```css
input.myClass {
  color: yellow; /* 0-1-1 */
}
:root input {
  color: green; /* 0-1-1 WINS because it comes later */
}
```

### Die Ausnahmen `:is()`, `:not()`, `:has()` und CSS-Schachtelung

Die "matches-any" Pseudoklasse {{CSSxRef(":is", ":is()")}}, die relationale Pseudoklasse {{CSSxRef(":has", ":has()")}}, und die Negationspseudoklasse {{CSSxRef(":not", ":not()")}} werden _nicht_ als Pseudoklassen in der Spezifizitätsgewichtsberechnung betrachtet. Sie selbst fügen der Spezifizitätsrechnung kein Gewicht hinzu. Die Selektorparameter, die in die Klammern der Pseudoklasse eingefügt werden, sind jedoch Teil des Spezifizitätsalgorithmus; das Gewicht der "matches-any" und der Negationspseudoklasse in der Spezifizitätswertberechnung ist das Gewicht des Parameters [Gewicht](#selektor-gewichtskategorien).

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

Beachten Sie, dass im obigen CSS-Paaring das Spezifizitätsgewicht, das durch die Pseudoklassen `:is()`, `:has()` und `:not()` bereitgestellt wird, der Wert des Selektorparameters ist, nicht der der Pseudoklasse.

Alle drei dieser Pseudoklassen akzeptieren komplexe Selektorlisten, eine Liste von durch Kommata getrennten Selektoren, als Parameter. Dieses Merkmal kann verwendet werden, um die Spezifität eines Selektors zu erhöhen:

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

Beim Erstellen komplexer Selektorlisten mit [CSS-Schachtelung](/de/docs/Web/CSS/CSS_nesting) verhält sich dies genau wie die `:is()` Pseudoklasse.

```css
p,
#fakeId {
  span {
    /* 1-0-1 */
  }
}
```

Im obigen Codeblock ist der komplexe Selektor `p, #fakeId`, die Spezifizität wird aus `#fakeId` und auch dem `span` genommen, was eine Spezifizität von `1-0-1` für sowohl `p span` als auch `#fakeId span` ergibt. Dies ist die äquivalente Spezifizität wie der `:is(p, #fakeId) span` Selektor.

Allgemein möchten Sie Spezifizität auf ein Minimum reduzieren, aber wenn Sie die Spezifizität eines Elements aus einem bestimmten Grund erhöhen müssen, können diese drei Pseudoklassen helfen.

```css
a:not(#fakeId#fakeId#fakeID) {
  color: blue; /* 3-0-1 */
}
```

In diesem Beispiel sind alle Links blau, es sei denn, sie werden durch eine Link-Deklaration mit 3 oder mehr IDs, einem Farbwertausschluss mit einer `a` die das [`!important`-Flag](#the_!important_exception) enthält, oder wenn der Link eine [Inline-Stil](#inline-stile) Farbdarstellung hat, überschrieben. Wenn Sie eine solche Technik verwenden, fügen Sie einen Kommentar hinzu, der erklärt, warum der Hack benötigt wurde.

### Inline-Stile

Inline-Stile, die einem Element hinzugefügt werden (z.B. `style="font-weight: bold;"`), überschreiben immer normale Stile in Autor-Stylesheets und können daher als die höchste Spezifizität angesehen werden. Betrachten Sie Inline-Stile mit einem Spezifizitätsgewicht von `1-0-0-0`.

Der einzige Weg, Inline-Stile zu überschreiben, besteht darin, `!important` zu verwenden.

Viele JavaScript-Frameworks und -Bibliotheken fügen Inline-Stile hinzu. Die Verwendung von `!important` mit einem sehr gezielten Selektor, wie einem Attributselektor, der den Inline-Stil verwendet, ist eine Möglichkeit, diese Inline-Stile zu überschreiben.

```html
<p style="color: purple">…</p>
```

```css
p[style*="purple"] {
  color: rebeccapurple !important;
}
```

Stellen Sie sicher, dass Sie mit jeder Aufnahme des wichtigen Flags einen Kommentar hinzufügen, damit Code-Maintainer verstehen, warum ein CSS-Anti-Muster verwendet wurde.

### Die Ausnahme `!important`

CSS-Deklarationen, die als wichtig markiert sind, überschreiben alle anderen Deklarationen innerhalb derselben Kaskadenschicht und desselben Ursprungs. Obwohl technisch gesehen [`!important`](/de/docs/Web/CSS/important) nichts mit Spezifität zu tun hat, interagiert es direkt mit Spezifität und der Kaskade. Es kehrt die [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) der Stylesheets um.

Wenn Deklarationen vom selben Ursprung und Kaskadenschicht in Konflikt stehen und ein Eigenschaftswert das `!important`-Flag gesetzt hat, wird die wichtige Deklaration angewendet, unabhängig von der Spezifität. Wenn konkurrierende Deklarationen vom selben Ursprung und Kaskadenschicht mit dem `!important`-Flag auf dasselbe Element angewendet werden, wird die Deklaration mit der höheren Spezifität angewendet.

Die Verwendung von `!important`, um Spezifität zu überschreiben, wird als **schlechte Praxis** angesehen und sollte zu diesem Zweck vermieden werden. Das Verständnis und der effektive Einsatz von Spezifität und der Kaskade können jeden Bedarf für das `!important`-Flag beseitigen.

Anstatt `!important` zu verwenden, um fremde CSS (von externen Bibliotheken, wie Bootstrap oder normalize.css) zu überschreiben, importieren Sie die Drittanbieter-Skripte direkt in [Kaskadenschichten](/de/docs/Web/CSS/@layer). Wenn Sie `!important` in Ihrem CSS verwenden müssen, kommentieren Sie Ihre Verwendung, damit zukünftige Code-Maintainer wissen, warum die Deklaration als wichtig gekennzeichnet wurde und es nicht überschreiben können. Verwenden Sie `!important` jedoch definitiv nicht, wenn Sie Plugins oder Frameworks schreiben, die andere Entwickler integrieren müssen, ohne sie kontrollieren zu können.

### Die Ausnahme `:where()`

Die Spezifizitätsanpassungs-Pseudoklasse {{CSSxRef(":where", ":where()")}} hat immer ihre Spezifität durch Null ersetzt, `0-0-0`. Sie ermöglicht es, CSS-Selektoren sehr spezifisch zu machen, welche Elemente angesprochen werden sollen, ohne dass die Spezifität zunimmt.

Wenn Sie Drittanbieter-CSS erstellen, das von Entwicklern verwendet werden soll, die keinen Zugriff auf das Bearbeiten Ihres CSS haben, gilt es als gute Praxis, CSS mit der geringstmöglichen Spezifität zu erstellen. Beispielsweise, wenn Ihr Thema das folgende CSS enthält:

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

### Wie `@scope`-Blöcke die Spezifität beeinflussen

Die Einbeziehung eines Regelsatzes innerhalb eines `@scope`-Blocks beeinflusst nicht die Spezifität seines Selektors, unabhängig von den Selektoren, die innerhalb der Scoping-Root und des Limits verwendet werden. Zum Beispiel:

```css
@scope (.article-body) {
  /* img has a specificity of 0-0-1, as expected */
  img { ... }
}
```

Wenn Sie jedoch entscheiden, die `:scope`-Pseudoklasse explizit Ihren umfassten Selektoren voranzustellen, müssen Sie sie in die Berechnung ihrer Spezifität einbeziehen. `:scope`, wie alle regulären Pseudoklassen, hat eine Spezifität von 0-1-0. Zum Beispiel:

```css
@scope (.article-body) {
  /* :scope img has a specificity of 0-1-0 + 0-0-1 = 0-1-1 */
  :scope img { ... }
}
```

Wenn Sie den `&`-Selektor innerhalb eines `@scope`-Blocks verwenden, repräsentiert `&` den Selektor der Scoping-Root; er wird intern zu diesem Selektor umgeschrieben, eingeschlossen in einem {{CSSxRef(":is", ":is()")}}-Selektor. Also zum Beispiel, in:

```css
@scope (figure, #primary) {
  & img { ... }
}
```

`& img` ist gleichbedeutend mit `:is(figure, #primary) img`.

Da `:is()` die Spezifität seines spezifischsten Arguments übernimmt (`#primary` in diesem Fall), beträgt die Spezifität des geordneten `& img`-Selectors daher 1-0-0 + 0-0-1 = 1-0-1.

## Tipps zur Handhabung von Spezifitätsproblemen

Anstatt `!important` zu verwenden, ziehen Sie Kaskadenschichten in Betracht und verwenden Sie Spezifizität mit niedrigem Gewicht durch Ihr gesamtes CSS, damit Stile leicht mit etwas spezifischeren Regeln überschrieben werden können. Die Verwendung von semantischem HTML hilft, Anker für die Stilgebung zu bieten.

### Selektoren spezifisch machen mit und ohne Erhöhung der Spezifität

Indem Sie den Abschnitt des Dokuments, den Sie gestalten, vor dem Element, das Sie auswählen, angeben, wird die Regel spezifischer. Je nachdem, wie Sie es hinzufügen, können Sie etwas, viel oder keine Spezifität hinzufügen, wie unten gezeigt:

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

Egal in welcher Reihenfolge, die Überschrift wird grün, weil diese Regel die spezifischste ist.

#### Reduzierung der ID-Spezifität

Spezifität basiert auf der Form eines Selektors. Das Einschließen der `id` eines Elements als Attributselektor anstelle eines ID-Selektors ist eine gute Möglichkeit, ein Element spezifischer zu machen, ohne eine Überfülle an Spezifität hinzuzufügen. Im vorherigen Beispiel zählt der Selektor `[id="myContent"]` als Attributselektor für den Zweck der Bestimmung der Spezifizität des Selektors, obwohl er eine ID auswählt.

Sie können die `id` oder jeden Teil eines Selektors auch als Parameter in der `:where()` Spezifizitätsanpassungs-Pseudoklasse einschließen, wenn Sie einen Selektor spezifischer machen müssen, aber keine Spezifizität hinzufügen möchten.

### Erhöhung der Spezifizität durch Vervielfältigung des Selektors

Als Sonderfall zur Erhöhung der Spezifizität können Sie die Gewichte aus den _CLASS_- oder _ID_-Spalten duplizieren. Das Duplizieren von ID-, Klassen-, Pseudoklassen- oder Attributselektoren innerhalb eines zusammengesetzten Selektors erhöht die Spezifizität, wenn Sie sehr spezifische Selektoren überschreiben müssen, über die Sie keine Kontrolle haben.

```css
#myId#myId#myId span {
  /* 3-0-1 */
}
.myClass.myClass.myClass span {
  /* 0-3-1 */
}
```

Verwenden Sie dies sparsam, wenn überhaupt. Wenn Sie Selektor-Duplizierung verwenden, kommentieren Sie unbedingt Ihr CSS.

Indem Sie `:is()` und `:not()` (und auch `:has()`) verwenden, können Sie die Spezifizität erhöhen, auch wenn Sie keine `id` zu einem Elternelement hinzufügen können:

```css
:not(#fakeID#fakeId#fakeID) span {
  /* 3-0-1 */
}
:is(#fakeID#fakeId#fakeID, span) {
  /* 3-0-0 */
}
```

### Vorrang vor Drittanbieter-CSS

Das Nutzen von Kaskadenschichten ist der standardmäßige Weg, um es einem Set von Stilen zu ermöglichen, Vorrang vor einem anderen Set von Stilen zu haben; Kaskadenschichten ermöglichen dies, ohne Spezifizität zu verwenden! Normale (nicht wichtige) Autorenstile, die in Kaskadenschichten importiert werden, haben eine geringere Priorität als nicht geschichtete Autorenstile.

Wenn Stile aus einem Stylesheet kommen, das Sie nicht bearbeiten oder nicht verstehen können, und Sie es überschreiben müssen, ist eine Strategie, die Styles, über die Sie keine Kontrolle haben, in eine Kaskadenschicht zu importieren. Stile in anschließend deklarierten Schichten haben Vorrang, wobei nicht geschichtete Stile Vorrang vor allen geschichteten Stilen aus dem gleichen Ursprung haben.

Wenn zwei Selektoren aus unterschiedlichen Schichten dasselbe Element treffen, steuern Ursprung und Wichtigkeit den Vorrang; die Spezifizität des Selektors im verlierenden Stylesheet ist irrelevant.

```html
<style>
  @import TW.css layer();
  p,
  p * {
    font-size: 1rem;
  }
</style>
```

Im obigen Beispiel wird aller Absatztext, einschließlich des verschachtelten Inhalts, `1rem` sein, egal wie viele Klassennamen die Absätze haben, die das TW-Stylsheet treffen.

### Vermeidung und Überschreiben von `!important`

Der beste Ansatz ist, `!important` nicht zu verwenden. Die oben genannten Erklärungen zur Spezifizität sollten hilfreich sein, um das Flagg zu vermeiden und es gänzlich zu entfernen, wenn es auftritt.

Um das wahrgenommene Bedürfnis nach `!important` zu beseitigen, können Sie eines der folgenden Dinge tun:

- Erhöhen Sie die Spezifizität des Selektors der ehemals `!important`-Deklaration, sodass sie größer ist als andere Deklarationen
- Geben Sie es mit derselben Spezifizität an und setzen Sie es nach der Deklaration an, die es überschreiben soll
- Reduzieren Sie die Spezifizität des Selektors, den Sie überschreiben möchten.

All diese Methoden sind in den vorangegangenen Abschnitten behandelt.

Wenn Sie nicht in der Lage sind, `!important`-Flags aus einem Stylesheet eines Autors zu entfernen, ist die einzige Lösung zum Überschreiben der wichtigen Stile die Verwendung von `!important`. Das Erstellen einer [Kaskadenschicht](/de/docs/Web/CSS/@layer) von wichtigen Deklarationsüberschreibungen ist eine ausgezeichnete Lösung. Zwei Möglichkeiten dies zu tun sind:

#### Methode 1

1. Erstellen Sie ein separates kurzes Stylesheet, das nur wichtige Deklarationen enthält, die speziell alle wichtigen Deklarationen, die Sie nicht entfernen konnten, überschreiben.
2. Importieren Sie dieses Stylesheet als den ersten Import in Ihrem CSS unter Verwendung von `layer()`, einschließlich der `@import`-Anweisung, bevor Sie andere Stylesheets verlinken. Dadurch wird sichergestellt, dass die wichtigen Überschreibungen als erste Schicht importiert werden.

```html
<style>
  @import importantOverrides.css layer();
</style>
```

#### Methode 2

1. Erstellen Sie am Anfang Ihrer Stylesheet-Deklarationen eine benannte Kaskadenschicht, wie folgt:

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

Die Spezifizität des Selektors der wichtigen Regel innerhalb der Schicht kann niedrig sein, solange er das Element, das Sie überschreiben möchten, trifft. Normale Schichten sollten außerhalb der Schicht deklariert werden, weil geschichtete Stile eine geringere Priorität als nicht geschichtete Stile haben.

### Ignorieren der Baum-Nähe

Die Nähe eines Elements zu anderen Elementen, die in einem gegebenen Selektor referenziert werden, hat keinen Einfluss auf die Spezifizität.

```css
body h1 {
  color: green;
}

html h1 {
  color: purple;
}
```

Die `<h1>`-Elemente werden lila, denn wenn Deklarationen dieselbe Spezifizität haben, hat der zuletzt deklarierte Selektor Vorrang.

### Direkt angesprochene Elemente vs. geerbte Stile

Stile für ein direkt angesprochenes Element haben immer Vorrang vor geerbten Stilen, unabhängig von der Spezifizität der geerbten Regel. Gegeben sind folgendes CSS und HTML:

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

Das `h1` wird lila, weil der `h1`-Selektor das Element direkt anspricht, während das Grün vom `#parent`-Deklarationen geerbt wird.

## Beispiele

Im folgenden CSS haben wir drei Selektoren, die {{HTMLElement('input')}}-Elemente ansprechen, um eine Farbe zu setzen. Für ein gegebenes `input` ist das Spezifizitätsgewicht der Farbdeklaration mit Vorrang die übereinstimmende Selektor mit dem größten Gewicht:

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

Wenn die obigen Selektoren alle dasselbe `input` treffen, wird das `input` rot sein, da die erste Deklaration den höchsten Wert in der _ID_-Spalte hat.

Der letzte Selektor hat vier _TYPE_-Komponenten. Während er den höchsten ganzzahligen Wert hat, haben _TYPE_-Komponenten niemals Priorität über _CLASS_-Komponenten, egal wie viele Elemente und Pseudoelemente eingeschlossen sind, selbst wenn es 150 wären. Die Spaltenwerte werden von links nach rechts verglichen, wenn die Spaltenwerte gleich sind.

Hätten wir den ID-Selektor im obigen Beispielcode zu einem Attributselektor umgewandelt, hätten die ersten zwei Selektoren dieselbe Spezifizität, wie unten gezeigt wird:

```css
[id="myElement"] input.myClass {
  color: red;
} /* 0-2-1 */
input[type="password"]:required {
  color: blue;
} /* 0-2-1 */
```

Wenn mehrere Deklarationen dieselbe Spezifizität haben, wird die letzte Deklaration, die im CSS gefunden wurde, auf das Element angewendet. Wenn beide Selektoren denselben {{HTMLElement('input')}} treffen, wird die Farbe blau sein.

## Zusätzliche Hinweise

Einige Dinge, die man über Spezifizität bedenken sollte:

1. Spezifizität gilt nur, wenn dasselbe Element von mehreren Deklarationen in derselben Kaskadenschicht oder Ursprung angesprochen wird. Spezifizität ist nur für Deklarationen mit derselben Wichtigkeit und demselben Ursprung und [Kaskadenschicht](/de/docs/Web/CSS/@layer) relevant. Wenn übereinstimmende Selektoren in unterschiedlichen Ursprüngen sind, bestimmt die [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade), welche Deklaration Vorrang hat.

2. Wenn zwei Selektoren in derselben Kaskadenschicht und Ursprung dieselbe Spezifizität haben, wird die Scoping-Nähe berechnet; der Regelsatz mit der niedrigsten Scoping-Nähe gewinnt. Siehe [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) für mehr Details und ein Beispiel.

3. Wenn die Scope-Nähe für beide Selektoren ebenfalls gleich ist, tritt die Quellreihenfolge in Kraft. Wenn alles andere gleich ist, gewinnt der letzte Selektor.

4. Entsprechend den CSS-Regeln werden [direkt anvisierte Elemente](#direkt_angesprochene_elemente_vs._geerbte_stile) immer Vorrang vor Regeln haben, die ein Element von seinem Vorfahren erbt.

5. [Die Nähe von Elementen](#ignorieren_der_baum-nähe) im Dokumentbaum hat keinen Einfluss auf die Spezifizität.

## Spezifikationen

{{Specifications}}

## Siehe auch

- ["Spezifität" in "Konflikte handhaben"](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity_2)
- [SpeciFISHity](https://specifishity.com/)
- [Spezifitätskalkulator](https://specificity.keegan.st/): Eine interaktive Website zum Testen und Verstehen Ihrer eigenen CSS-Regeln
- [_ID-CLASS-TYPE_ Übung](https://estelle.github.io/CSS/selectors/exercises/specificity.html) Ein Spezifizitätsquiz
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax) Leitfaden
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
- [Fehlerbehandlung in CSS](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [At-Rules](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Initialer](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial-value), [berechneter](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed-value), [verwendeter](/de/docs/Web/CSS/CSS_cascade/Value_processing#used-value) und [tatsächlicher](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual-value) Werte
- [Wert-Definitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
- [Lernen: Konflikte handhaben](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [CSS-Schachtelungsmodul](/de/docs/Web/CSS/CSS_nesting)
