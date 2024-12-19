---
title: Spezifität
slug: Web/CSS/Specificity
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

**Spezifität** ist der von Browsern verwendete Algorithmus, um die [CSS-Deklaration](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#css_syntax_basics) zu bestimmen, die für ein Element am relevantesten ist. Dies bestimmt den Eigenschaftswert, der auf das Element angewendet wird. Der Spezifitätsalgorithmus berechnet das Gewicht eines [CSS-Selektors](/de/docs/Web/CSS/Reference#selectors), um festzustellen, welche Regel von konkurrierenden CSS-Deklarationen auf ein Element angewendet wird.

> [!NOTE]
> Browser berücksichtigen die Spezifität **nachdem** die [Kaskadenherkunft und die Wichtigkeit](/de/docs/Web/CSS/Cascade) bestimmt wurden. Mit anderen Worten, bei konkurrierenden Eigenschaftsdeklarationen ist die Spezifität relevant und wird nur zwischen Selektoren aus dem einen [Kaskadenherkunfts- und Schichtelement](/de/docs/Web/CSS/@layer) verglichen, das für die Eigenschaft Vorrang hat. [Scope-Nähe](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) und Erscheinungsreihenfolge werden relevant, wenn die Selektorspezifitäten der konkurrierenden Deklarationen in der Kaskadenschicht mit Vorrang gleich sind.

## Wie wird die Spezifität berechnet?

Spezifität ist ein Algorithmus, der das Gewicht berechnet, das auf eine gegebene CSS-Deklaration angewendet wird. Das Gewicht wird durch die Anzahl der [Selektoren jeder Gewichtskategorie](#selektor-gewichtskategorien) im Selektor bestimmt, der das Element (oder Pseudo-Element) trifft. Wenn es zwei oder mehr Deklarationen gibt, die verschiedene Eigenschaftswerte für dasselbe Element bereitstellen, wird der Deklarationswert im Stilblock mit dem übereinstimmenden Selektor mit dem größten algorithmischen Gewicht angewendet.

Der Spezifitätsalgorithmus ist im Wesentlichen ein dreispaltiger Wert aus drei Kategorien oder Gewichten – ID, CLASS und TYPE – die den drei Selektortypen entsprechen. Der Wert repräsentiert die Anzahl der Selektorkomponenten in jeder Gewichtskategorie und wird als _ID - CLASS - TYPE_ geschrieben. Die drei Spalten werden erstellt, indem die Anzahl der Selektorkomponenten für jede Selektor-Gewichtskategorie in den Selektoren gezählt wird, die das Element treffen.

### Selektor-Gewichtskategorien

Die Selektor-Gewichtskategorien sind hier in der Reihenfolge abnehmender Spezifität aufgeführt:

- ID-Spalte
  - : Beinhaltet nur [ID-Selektoren](/de/docs/Web/CSS/ID_selectors), wie `#example`. Für jede ID in einem übereinstimmenden Selektor addieren Sie 1-0-0 zum Gewichtswert.
- CLASS-Spalte
  - : Beinhaltet [Klassen-Selektoren](/de/docs/Web/CSS/Class_selectors), wie `.myClass`, Attributselektoren wie `[type="radio"]` und `[lang|="fr"]` sowie Pseudo-Klassen wie `:hover`, `:nth-of-type(3n)` und `:required`. Für jede Klasse, jeden Attributselektor oder jede Pseudo-Klasse in einem übereinstimmenden Selektor addieren Sie 0-1-0 zum Gewichtswert.
- TYPE-Spalte
  - : Beinhaltet [Typ-Selektoren](/de/docs/Web/CSS/Type_selectors), wie `p`, `h1` und `td`, und Pseudo-Elemente wie `::before`, `::placeholder` sowie alle anderen Selektoren mit Doppelpunktsnotation. Für jeden Typ oder Pseudo-Element in einem übereinstimmenden Selektor addieren Sie 0-0-1 zum Gewichtswert.
- Kein Wert
  - : Der universelle Selektor ({{CSSxRef("Universal_selectors", "*")}}) und die Pseudo-Klasse {{CSSxRef(":where", ":where()")}} und ihre Parameter werden bei der Berechnung des Gewichts nicht gezählt, sodass ihr Wert 0-0-0 ist, sie treffen jedoch auf Elemente zu. Diese Selektoren wirken sich nicht auf den Spezifitätsgewichtswert aus.

Kombinatoren, wie {{CSSxRef("Next-sibling_combinator", "+")}}, {{CSSxRef("Child_combinator", "&gt;")}}, {{CSSxRef("Subsequent-sibling_combinator", "~")}}, [" "](/de/docs/Web/CSS/Descendant_combinator) und {{CSSxRef("Column_combinator", "||")}}, können einen Selektor spezifischer machen, was ausgewählt wird, aber sie fügen dem Spezifitätsgewicht keinen Wert hinzu.

Der `&` Verschachtelungs-Kombinator fügt dem Spezifitätsgewicht nichts hinzu, aber verschachtelte Regeln schon. Hinsichtlich der Spezifität und Funktionalität ist die Verschachtelung der {{CSSxRef(":is", ":is()")}} Pseudo-Klasse sehr ähnlich.

Wie die Verschachtelung, fügen die Pseudo-Klassen {{CSSxRef(":is", ":is()")}}, {{CSSxRef(":has", ":has()")}} und die Negation ({{CSSxRef(":not", ":not()")}}) selbst kein Gewicht hinzu. Die Parameter in diesen Selektoren hingegen schon. Das Spezifitätsgewicht jeder kommt von dem Selektorparameter in der Liste der Selektoren mit der höchsten Spezifität. Ähnlich ist es bei verschachtelten Selektoren, das Spezifitätsgewicht, das von der verschachtelten Selektorkomponente hinzugefügt wird, ist der Selektor in der kommagetrennten Liste der verschachtelten Selektoren mit der höchsten Spezifität.

Die [`:not()`, `:is()`, `:has()` und CSS-Verschachtelungsausnahmen](#the_is_not_has_and_css_nesting_exceptions) werden unten besprochen.

#### Übereinstimmender Selektor

Das Spezifitätsgewicht kommt vom übereinstimmenden Selektor. Nehmen Sie diesen CSS-Selektor mit drei kommagetrennten Selektoren als Beispiel:

```css
[type="password"],
input:focus,
:root #myApp input:required {
  color: blue;
}
```

Der `[type="password"]` Selektor in der obigen Selektorliste, mit einem Spezifitätsgewicht von `0-1-0`, wendet die `color: blue` Deklaration auf alle `password`-Eingabetypen an.

Alle Eingaben, unabhängig vom Typ, wenn sie den Fokus erhalten, passen in der Liste zum zweiten Selektor, `input:focus`, mit einem Spezifitätsgewicht von `0-1-1`; dieses Gewicht setzt sich aus der `:focus` Pseudo-Klasse (0-1-0) und dem `input` Typ (0-0-1) zusammen. Wenn die Passwort-Eingabe den Fokus hat, wird sie `input:focus` entsprechen, und das Spezifitätsgewicht für die `color: blue` Stil-Deklaration wird `0-1-1` sein. Wenn dieses Passwort keinen Fokus hat, bleibt das Spezifitätsgewicht bei `0-1-0`.

Die Spezifität für eine erforderliche Eingabe, die in einem Element mit dem Attribut `id="myApp"` verschachtelt ist, beträgt `1-2-1`, basierend auf einer ID, zwei Pseudo-Klassen und einem Elementtyp.

Wenn der Passwort-Eingabetyp mit `required` in einem Element verschachtelt ist, bei dem `id="myApp"` eingestellt ist, beträgt das Spezifitätsgewicht `1-2-1`, basierend auf einer ID, zwei Pseudo-Klassen und einem Elementtyp, unabhängig davon, ob es den Fokus hat oder nicht. Warum ist das Spezifitätsgewicht in diesem Fall `1-2-1` anstatt `0-1-1` oder `0-1-0`? Weil das Spezifitätsgewicht vom übereinstimmenden Selektor mit dem größten Spezifitätsgewicht kommt. Das Gewicht wird bestimmt, indem die Werte in den drei Spalten von links nach rechts verglichen werden.

```css
[type="password"]             /* 0-1-0 */
input:focus                   /* 0-1-1 */
:root #myApp input:required   /* 1-2-1 */
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

Die erste Spalte ist der Wert der _ID_-Komponente, die die Anzahl der IDs in jedem Selektor darstellt. Die Zahlen in den _ID_-Spalten der konkurrierenden Selektoren werden verglichen. Der Selektor mit dem größeren Wert in der _ID_-Spalte gewinnt, unabhängig davon, welche Werte in den anderen Spalten stehen. Im obigen Beispiel spielt es keine Rolle, dass der gelbe Selektor insgesamt mehr Komponenten hat, nur der Wert der ersten Spalte zählt.

Wenn die Zahl in den _ID_-Spalten der konkurrierenden Selektoren gleich ist, wird die nächste Spalte, _CLASS_, verglichen, wie unten gezeigt.

```css
#myElement {
  color: yellow; /* 1-0-0 */
}
#myApp [id="myElement"] {
  color: green; /* 1-1-0  - WINS!! */
}
```

Die _CLASS_-Spalte ist die Anzahl der Klassennamen, Attributselektoren und Pseudo-Klassen im Selektor. Wenn der Wert der _ID_-Spalte gleich ist, gewinnt der Selektor mit dem größeren Wert in der _CLASS_-Spalte, unabhängig vom Wert in der _TYPE_-Spalte. Dies wird im folgenden Beispiel gezeigt.

```css
:root input {
  color: green; /* 0-1-1 - WINS because CLASS column is greater */
}
html body main input {
  color: yellow; /* 0-0-4 */
}
```

Wenn die Zahlen in den _CLASS_- und _ID_-Spalten der konkurrierenden Selektoren gleich sind, wird die _TYPE_-Spalte relevant. Die _TYPE_-Spalte ist die Anzahl der Elementtypen und Pseudo-Elemente im Selektor. Wenn die ersten beiden Spalten denselben Wert haben, gewinnt der Selektor mit der größeren Zahl in der _TYPE_-Spalte.

Wenn die konkurrierenden Selektoren dieselben Werte in allen drei Spalten haben, tritt die Nähe-Regel in Kraft, wobei die zuletzt deklarierte Stilregeln Vorrang hat.

```css
input.myClass {
  color: yellow; /* 0-1-1 */
}
:root input {
  color: green; /* 0-1-1 WINS because it comes later */
}
```

### Die `:is()`, `:not()`, `:has()` und CSS-Verschachtelungsausnahmen

Die Auswahl-aller-Pseudoklasse {{CSSxRef(":is", ":is()")}}, die relationale Pseudoklasse {{CSSxRef(":has", ":has()")}} und die Negations-Pseudoklasse {{CSSxRef(":not", ":not()")}} werden _nicht_ als Pseudoklassen in der Spezifitätsgewichtberechnung betrachtet. Sie selbst fügen dem Spezifikationsgleich nichts hinzu. Allerdings sind die Selektorparameter, die in die Pseudoklasse eingebracht werden, Teil des Spezifitätsalgorithmus; das Gewicht der Auswahl-aller- und Negations-Pseudoklasse in der Spezifikationswertberechnung ist das Gewicht der Parameter [Gewicht](#selektor-gewichtskategorien).

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

Beachten Sie, dass im obigen CSS-Paar das Spezifitätsgewicht, das von den `:is()`, `:has()` und `:not()` Pseudoklassen bereitgestellt wird, der Wert des Selektorparameters ist und nicht der Wert der Pseudoklasse.

Alle drei dieser Pseudoklassen akzeptieren komplexe Selektorenlisten, eine Liste von kommagetrennten Selektoren, als Parameter. Diese Funktion kann verwendet werden, um die Spezifität eines Selektors zu erhöhen:

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

Im obigen CSS-Codeblock haben wir `#fakeId` in die Selektoren aufgenommen. Dieses `#fakeId` fügt jedem Absatz `1-0-0` zum Spezifitätsgewicht hinzu.

Wenn komplexe Selektorenlisten mit [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting) erstellt werden, verhält sich dies genau so wie die `:is()` Pseudoklasse.

```css
p,
#fakeId {
  span {
    /* 1-0-1 */
  }
}
```

Im obigen Codeblock wird der komplexe Selektor `p, #fakeId` die Spezifität von `#fakeId` und auch `span` genommen, sodass dies eine Spezifität von `1-0-1` sowohl für `p span` als auch `#fakeId span` erzeugt. Dies ist die äquivalente Spezifität wie der `:is(p, #fakeId) span` Selektor.

Im Allgemeinen möchten Sie die Spezifität so gering wie möglich halten, aber wenn Sie die Spezifität eines Elements aus einem bestimmten Grund erhöhen müssen, können diese drei Pseudoklassen hilfreich sein.

```css
a:not(#fakeId#fakeId#fakeID) {
  color: blue; /* 3-0-1 */
}
```

In diesem Beispiel werden alle Links blau, es sei denn, sie werden durch eine Link-Deklaration mit 3 oder mehr IDs überschrieben, ein Farbwert, der ein `a` beinhaltet, enthält die [`!important`-Flagge](#the_!important_exception) oder wenn der Link eine [Inline-Stil](#inline-stile) Farbdeklaration hat. Wenn Sie eine solche Technik verwenden, fügen Sie einen Kommentar hinzu, der erklärt, warum der Trick erforderlich war.

### Inline-Stile

Inline-Stile, die einem Element hinzugefügt werden (z. B. `style="font-weight: bold;"`), überschreiben immer alle normalen Stile in Autoren-Stilblättern und können daher als mit der höchsten Spezifität angesehen werden. Denken Sie an Inline-Stile als Spezifitätsgewicht von `1-0-0-0`.

Die einzige Möglichkeit, Inline-Stile zu überschreiben, ist die Verwendung von `!important`.

Viele JavaScript-Frameworks und -Bibliotheken fügen Inline-Stile hinzu. Das Verwenden von `!important` mit einem sehr zielgerichteten Selektor, wie einem Attributselektor, der den Inline-Stil verwendet, ist eine Möglichkeit, diese Inline-Stile zu überschreiben.

```html
<p style="color: purple">…</p>
```

```css
p[style*="purple"] {
  color: rebeccapurple !important;
}
```

Stellen Sie sicher, dass Sie mit jedem Einsatz der `important`-Flagge einen Kommentar hinzufügen, damit Codeschreiber wissen, warum ein CSS-Antimuster verwendet wurde.

### Die `!important`-Ausnahme

CSS-Deklarationen, die als wichtig markiert sind, überschreiben alle anderen Deklarationen innerhalb derselben Kaskadenschicht und Herkunft. Auch wenn technisch gesehen [`!important`](/de/docs/Web/CSS/important) nichts mit Spezifität zu tun hat, so interagiert es direkt mit der Spezifität und der Kaskade. Es kehrt den [Kaskaden](/de/docs/Web/CSS/Cascade) Reihenfolge der Stylesheets um.

Wenn Deklarationen derselben Herkunft und Kaskadenschicht in Konflikt stehen und ein Eigenschaftswert die `!important`-Markierung hat, wird die wichtige Deklaration unabhängig von der Spezifität angewendet. Wenn konkurrierende Deklarationen derselben Herkunft und Kaskadenschicht mit der `!important`-Flagge auf dasselbe Element angewendet werden, wird die Deklaration mit größerer Spezifität angewendet.

Die Verwendung von `!important`, um die Spezifität zu überschreiben, wird als schlechte Praxis angesehen und sollte dafür vermieden werden. Das Verständnis und die effektive Nutzung von Spezifität und Kaskade können jegliche Notwendigkeit für die `!important`-Flagge beseitigen.

Anstatt `!important` zu verwenden, um fremden CSS (von externen Bibliotheken, wie Bootstrap oder normalize.css) zu überschreiben, importieren Sie die Drittanbieter-Scripts direkt in [Kaskadenschichten](/de/docs/Web/CSS/@layer). Wenn Sie `!important` in Ihrem CSS verwenden müssen, kommentieren Sie Ihre Verwendung, damit zukünftige Codeschreiber wissen, warum die Deklaration als wichtig markiert wurde und nicht überschrieben werden soll. Aber verwenden Sie definitiv nicht `!important`, wenn Sie Plugins oder Frameworks schreiben, die andere Entwickler einbinden müssen, ohne diese steuern zu können.

### Die `:where()`-Ausnahme

Die Spezifitätsanpassungs-Pseudoklasse {{CSSxRef(":where", ":where()")}} hat immer eine Spezifität von null, `0-0-0`. Sie ermöglicht es, CSS-Selektoren sehr spezifisch darauf abzustimmen, welches Element angesprochen wird, ohne dass die Spezifität zunimmt.

Bei der Erstellung von Drittanbieter-CSS, das von Entwicklern verwendet wird, die keinen Zugriff auf die Bearbeitung Ihres CSS haben, ist es eine gute Praxis, CSS mit der geringstmöglichen Spezifität zu erstellen. Wenn Ihr Thema beispielsweise das folgende CSS enthält:

```css
:where(#defaultTheme) a {
  /* 0-0-1 */
  color: red;
}
```

Dann kann der Entwickler, der das Widget implementiert, die Linkfarbe einfach mit nur Typ-Selektoren überschreiben.

```css
footer a {
  /* 0-0-2 */
  color: blue;
}
```

### Wie `@scope`-Blöcke die Spezifität beeinflussen

Das Einfügen eines Regelsets in einen `@scope`-Block beeinflusst nicht die Spezifität seines Selektors, unabhängig von den innerhalb der Bereichs-Wurzel und Begrenzung verwendeten Selektoren. Zum Beispiel:

```css
@scope (.article-body) {
  /* img has a specificity of 0-0-1, as expected */
  img { ... }
}
```

Wenn Sie sich jedoch entscheiden, die `:scope`-Pseudo-Klasse explizit Ihrem Scoped-Selektoren voranzustellen, müssen Sie dies bei der Berechnung ihrer Spezifität berücksichtigen. `:scope` hat, wie alle regulären Pseudoklassen, eine Spezifität von 0-1-0. Zum Beispiel:

```css
@scope (.article-body) {
  /* :scope img has a specificity of 0-1-0 + 0-0-1 = 0-1-1 */
  :scope img { ... }
}
```

Beim Verwenden des `&`-Selektors in einem `@scope`-Block repräsentiert `&` den Bereichs-Wurzel-Selektor; es wird intern in diesen Selektor umgeschrieben, um diesen innerhalb eines {{cssxref(":is", ":is()")}} Selektors zu umschließen. So zum Beispiel in:

```css
@scope (figure, #primary) {
  & img { ... }
}
```

`& img` ist gleichwertig zu `:is(figure, #primary) img`.

Da `:is()` die Spezifität seines spezifischsten Arguments (`#primary` in diesem Fall) annimmt, beträgt die Spezifität des Scoped `& img`-Selektors daher 1-0-0 + 0-0-1 = 1-0-1.

## Tipps zum Umgang mit Spezifitätsproblemen

Anstatt `!important` zu verwenden, ziehen Sie es in Betracht, Kaskadenschichten zu verwenden und Spezifitätsgewichte durchgehend niedrig zu halten, damit Stile leicht mit etwas spezifischeren Regeln überschrieben werden können. Die Verwendung von semantischem HTML hilft, Anker bereitzustellen, von denen aus das Styling angewendet werden kann.

### Selektoren spezifisch machen mit und ohne Erhöhung der Spezifität

Indem Sie den Abschnitt des Dokuments angeben, den Sie stylen, bevor Sie das Element auswählen, wird die Regel spezifischer. Je nachdem, wie Sie es hinzufügen, können Sie etwas, viel oder keine Spezifität hinzufügen, wie unten gezeigt:

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

Spezifität basiert auf der Form eines Selektors. Die Einbeziehung der `id` eines Elements als Attributselektor statt als ID-Selektor ist eine gute Möglichkeit, ein Element spezifischer zu machen, ohne eine übermäßige Spezifität hinzuzufügen. Im vorherigen Beispiel zählt der Selektor `[id="myContent"]` als Attributselektor zur Bestimmung der Selektorspezifität, obwohl er eine ID auswählt.

Sie können die `id` oder jeden Teil eines Selektors auch als Parameter in die `:where()`-Spezifitätsanpassungs-Pseudoklasse einfügen, wenn Sie einen Selektor spezifischer machen müssen, aber überhaupt keine Spezifität hinzufügen möchten.

### Erhöhen der Spezifität durch Duplizieren des Selektors

Als Sonderfall zur Erhöhung der Spezifität können Sie Gewichte aus den _CLASS_- oder _ID_-Spalten duplizieren. Das Duplizieren von ID, Klasse, Pseudo-Klasse oder Attributselektoren innerhalb eines Komplexen Selektors erhöht die Spezifität beim Überschreiben sehr spezifischer Selektoren, über die Sie keine Kontrolle haben.

```css
#myId#myId#myId span {
  /* 3-0-1 */
}
.myClass.myClass.myClass span {
  /* 0-3-1 */
}
```

Verwenden Sie dies sparsam, wenn überhaupt. Wenn Sie Selektorduplizierung verwenden, kommentieren Sie immer Ihren CSS.

Durch die Verwendung von `:is()` und `:not()` (und auch `:has()`) können Sie die Spezifität erhöhen, selbst wenn Sie keine `id` zu einem Elternelement hinzufügen können:

```css
:not(#fakeID#fakeId#fakeID) span {
  /* 3-0-1 */
}
:is(#fakeID#fakeId#fakeID, span) {
  /* 3-0-0 */
}
```

### Vorrang vor Drittanbieter-CSS

Das Nutzen von Kaskadenschichten ist der Standardweg, um einen Satz von Stilen Vorrang vor einem anderen Satz von Stilen zu geben; Kaskadenschichten ermöglichen dies ohne Verwendung von Spezifität! Normale (nicht wichtige) Autorenstile, die in Kaskadenschichten importiert werden, haben eine geringere Priorität als nicht geschichtete Autorenstile.

Wenn Stile aus einem Stylesheet kommen, das Sie nicht bearbeiten oder nicht verstehen können und Sie die Stile überschreiben müssen, besteht eine Strategie darin, die Stile, die Sie nicht kontrollieren können, in eine Kaskadenschicht zu importieren. Stile in später deklarierten Schichten haben Vorrang, wobei nicht geschichtete Stile gegenüber allen geschichteten Stilen derselben Herkunft Vorrang haben.

Wenn zwei Selektoren aus verschiedenen Schichten dasselbe Element treffen, haben Herkunft und Wichtigkeit Vorrang; die Spezifität des Selektors im verlierenden Stylesheet ist irrelevant.

```html
<style>
  @import TW.css layer();
  p,
  p * {
    font-size: 1rem;
  }
</style>
```

Im obigen Beispiel wird aller Text in den Absätzen, inklusive des verschachtelten Inhalts, `1rem`, unabhängig davon, wie viele Klassennamen die Absätze im TW-Stylesheet haben.

### Vermeidung und Überschreibung von `!important`

Der beste Ansatz ist, `!important` nicht zu verwenden. Die oben erklärten Details zur Spezifität sollten hilfreich sein, um die Verwendung der Flagge zu vermeiden und sie bei Bedarf vollständig zu entfernen.

Um den wahrgenommenen Bedarf für `!important` zu beseitigen, können Sie eines der folgenden Dinge tun:

- Erhöhen Sie die Spezifität des Selektors der ehemals `!important`-Deklaration, sodass sie größer ist als andere Deklarationen
- Geben Sie ihr dieselbe Spezifität und setzen Sie sie nach der Deklaration, die sie überschreiben soll
- Reduzieren Sie die Spezifität des Selektors, den Sie zu überschreiben versuchen.

All diese Methoden sind in den vorhergehenden Abschnitten abgedeckt.

Wenn Sie `!important`-Flags aus einem Autoren-Stylesheet nicht entfernen können, ist der einzige Weg, um die wichtigen Stile zu überschreiben, die Verwendung von `!important`. Eine gute Lösung ist die Erstellung einer [Kaskadenschicht](/de/docs/Web/CSS/@layer) für wichtige Deklarations-Überschreibungen. Zwei Möglichkeiten sind:

#### Methode 1

1. Erstellen Sie ein separates, kurzes Stylesheet, das nur wichtige Deklarationen enthält, die speziell jede wichtige Deklaration überschreiben, die Sie nicht entfernen konnten.
2. Importieren Sie dieses Stylesheet als ersten Import in Ihrem CSS mit `layer()`, einschließlich der `@import`-Anweisung, bevor Sie andere Stylesheets verlinken. Dies soll sicherstellen, dass die wichtigen Überschreibungen als erste Schicht importiert werden.

```html
<style>
  @import importantOverrides.css layer();
</style>
```

#### Methode 2

1. Erstellen Sie zu Beginn Ihrer Stylesheet-Deklarationen eine benannte Kaskadenschicht, wie folgt:

   ```css
   @layer importantOverrides;
   ```

2. Jedes Mal, wenn Sie eine wichtige Deklaration überschreiben müssen, deklarieren Sie diese innerhalb der benannten Schicht. Erklären Sie nur wichtige Regeln innerhalb der Schicht.

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

Die Spezifität des Selektors des wichtigen Stils innerhalb der Schicht kann gering sein, solange er das Element trifft, das Sie überschreiben möchten. Normale Schichten sollten außerhalb der Schicht deklariert werden, da geschichtete Stile eine geringere Priorität haben als nicht geschichtete Stile.

### Ignoranz der Baum-Nähe

Die Nähe eines Elements zu anderen im Dokumentbaum, die in einem gegebenen Selektor referenziert werden, hat keinen Einfluss auf die Spezifität.

```css
body h1 {
  color: green;
}

html h1 {
  color: purple;
}
```

Die `<h1>` Elemente werden violett sein, da, wenn Deklarationen die gleiche Spezifität haben, der zuletzt deklarierte Selektor Vorrang hat.

### Direkt angesprochene Elemente vs. geerbte Stile

Stile für ein direkt angesprochenes Element werden immer Vorrang vor geerbten Stilen haben, unabhängig von der Spezifität der geerbten Regel. Angesichts des folgenden CSS und HTML:

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

Das `h1` wird violett sein, da der `h1`-Selektor das Element spezifisch anspricht, während das Grün von den `#parent`-Deklarationen geerbt wird.

## Beispiele

Im folgenden CSS haben wir drei Selektoren, die auf {{HTMLElement('input')}}-Elemente abzielen, um eine Farbe festzulegen. Für eine gegebene Eingabe ist das Spezifitätsgewicht der Farbdarstellung, die Vorrang hat, der übereinstimmende Selektor mit dem größten Gewicht:

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

Wenn die obigen Selektoren alle auf dasselbe Eingabeelement zielen, wird das Eingabeelement rot, da die erste Deklaration den höchsten Wert in der _ID_-Spalte hat.

Der letzte Selektor hat vier _TYPE_-Komponenten. Auch wenn er den höchsten Integerwert hat, spielt es keine Rolle, wie viele Elemente und Pseudo-Elemente einbehalten sind, selbst wenn es 150 wären, _TYPE_-Komponenten haben nie Vorrang vor _CLASS_-Komponenten. Die Spaltenwerte werden verglichen, beginnend von links nach rechts, wenn die Spaltenwerte gleich sind.

Hätten wir den id-Selektor im obigen Beispielcode in einen Attributselektor umgewandelt, hätten die ersten beiden Selektoren die gleiche Spezifität, wie unten gezeigt:

```css
[id="myElement"] input.myClass {
  color: red;
} /* 0-2-1 */
input[type="password"]:required {
  color: blue;
} /* 0-2-1 */
```

Wenn mehrere Deklarationen die gleiche Spezifität haben, wird die letzte im CSS gefundene Deklaration auf das Element angewendet. Wenn beide Selektoren dasselbe {{HTMLElement('input')}}-Element treffen, wird die Farbe blau sein.

## Zusätzliche Hinweise

Einige Dinge zur Spezifität, die Sie im Gedächtnis behalten sollten:

1. Die Spezifität gilt nur, wenn dasselbe Element von mehreren Deklarationen in derselben Kaskadenschicht oder Herkunft angesprochen wird. Die Spezifität ist nur für Deklarationen der gleichen Wichtigkeit, Herkunft und [Kaskadenschicht](/de/docs/Web/CSS/@layer) relevant. Wenn übereinstimmende Selektoren in verschiedenen Herkünften sind, bestimmt die [Kaskade](/de/docs/Web/CSS/Cascade), welche Deklaration Vorrang hat.

2. Wenn zwei Selektoren in derselben Kaskadenschicht und Herkunft die gleiche Spezifität haben, wird die Bereichsnähe berechnet; das Regelset mit der geringsten Bereichsnähe gewinnt. Siehe [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) für weitere Details und ein Beispiel.

3. Wenn die Bereichsnähe für beide Selektoren ebenfalls gleich ist, tritt die Quellreihenfolge in Kraft. Wenn alles andere gleich ist, gewinnt der letzte Selektor.

4. Laut CSS-Regeln werden [direkt angesprochene Elemente](#direkt_angesprochene_elemente_vs._geerbte_stile) immer Vorrang vor Regeln haben, die ein Element von seinem Vorfahren erbt.

5. Die [Nähe von Elementen](#ignoranz_der_baum-nähe) im Dokumentenbaum hat keinen Einfluss auf die Spezifität.

## Spezifikationen

{{Specifications}}

## Siehe auch

- ["Spezifität" in "Konflikte behandeln"](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity_2)
- [SpeciFISHity](https://specifishity.com/)
- [Spezifitätsrechner](https://specificity.keegan.st/): Eine interaktive Website, um Ihre eigenen CSS-Regeln zu testen und zu verstehen
- [_ID-CLASS-TYPE_ Übung](https://estelle.github.io/CSS/selectors/exercises/specificity.html) ein Spezifitäts-Quiz
- [CSS-Syntax](/de/docs/Web/CSS/Syntax) Leitfaden
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
- [CSS-Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [At-Regeln](/de/docs/Web/CSS/At-rule)
- [Vererbung](/de/docs/Web/CSS/Inheritance)
- [Initial](/de/docs/Web/CSS/initial_value), [berechnete](/de/docs/Web/CSS/computed_value), [benutzte](/de/docs/Web/CSS/used_value) und [tatsächliche](/de/docs/Web/CSS/actual_value) Werte
- [Wertdefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
- [Lernen: Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [CSS-Verschachtelungsmodul](/de/docs/Web/CSS/CSS_nesting)
