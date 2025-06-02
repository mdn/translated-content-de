---
title: Spezifität
slug: Web/CSS/CSS_cascade/Specificity
l10n:
  sourceCommit: 0145c6497d2f2206dca1326593fe308f7b771a08
---

{{CSSRef}}

**Spezifität** ist der Algorithmus, den Browser verwenden, um die [CSS-Deklaration](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#css_syntax_basics) zu bestimmen, die für ein Element am relevantesten ist, was wiederum den anzuwendenden Eigenschaftswert für das Element bestimmt. Der Spezifitätsalgorithmus berechnet das Gewicht eines [CSS-Selectors](/de/docs/Web/CSS/Reference#selectors), um festzustellen, welche Regel aus konkurrierenden CSS-Deklarationen auf ein Element angewendet wird.

> [!NOTE]
> Browser berücksichtigen Spezifität **nachdem** sie den [Herkunft der Cascade und die Bedeutung](/de/docs/Web/CSS/CSS_cascade/Cascade) bestimmt haben. Mit anderen Worten, bei konkurrierenden Eigenschaftsdeklarationen ist Spezifität relevant und wird nur zwischen Selektoren derselben [Cascade-Herkunft und Ebene](/de/docs/Web/CSS/@layer) verglichen, die für die Eigenschaft Vorrang hat. [Scoping-Nähe](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) und die Reihenfolge des Auftretens werden relevant, wenn die Selektorspezifitäten der konkurrierenden Deklarationen in der Cascade-Ebene mit Vorrang gleich sind.

## Wie wird die Spezifität berechnet?

Spezifität ist ein Algorithmus, der das Gewicht berechnet, das auf eine gegebene CSS-Deklaration angewendet wird. Das Gewicht wird durch die Anzahl der [Selektoren jeder Gewichtskategorie](#selektor-gewichtskategorien) im Selektor bestimmt, der dem Element (oder Pseudo-Element) entspricht. Wenn es zwei oder mehr Deklarationen gibt, die unterschiedliche Eigenschaftswerte für dasselbe Element liefern, wird der Deklarationswert im Stilblock angewendet, der den übereinstimmenden Selektor mit dem größten algorithmischen Gewicht hat.

Der Spezifitätsalgorithmus ist im Wesentlichen ein drei-spaltiger Wert in drei Kategorien oder Gewichten - ID, CLASS und TYPE - die den drei Arten von Selektoren entsprechen. Der Wert stellt die Anzahl der Selektor-Komponenten in jeder Gewichtskategorie dar und wird als _ID - CLASS - TYPE_ geschrieben. Die drei Spalten entstehen durch das Zählen der Anzahl der Selektor-Komponenten für jede Selektor-Gewichtskategorie in den Selektoren, die dem Element entsprechen.

### Selektor-Gewichtskategorien

Die Selektor-Gewichtskategorien sind hier in der Reihenfolge abnehmender Spezifität aufgelistet:

- ID-Spalte
  - : Beinhaltet nur [ID-Selektoren](/de/docs/Web/CSS/ID_selectors), wie `#example`. Für jede ID in einem übereinstimmenden Selektor 1-0-0 zum Gewichtswert hinzufügen.
- CLASS-Spalte
  - : Beinhaltet [Klassen-Selektoren](/de/docs/Web/CSS/Class_selectors), wie `.myClass`, Attributselektoren wie `[type="radio"]` und `[lang|="fr"]`, sowie Pseudo-Klassen, wie `:hover`, `:nth-of-type(3n)`, und `:required`. Für jede Klasse, jeden Attributselektor oder jede Pseudo-Klasse in einem übereinstimmenden Selektor 0-1-0 zum Gewichtswert hinzufügen.
- TYPE-Spalte
  - : Beinhaltet [Typselektoren](/de/docs/Web/CSS/Type_selectors), wie `p`, `h1`, und `td`, sowie Pseudo-Elemente wie `::before`, `::placeholder`, und alle anderen Selektoren mit doppelter Kolon-Notation. Für jeden Typ oder jedes Pseudo-Element in einem übereinstimmenden Selektor 0-0-1 zum Gewichtswert hinzufügen.
- Kein Wert
  - : Der Universalselektor ({{CSSxRef("Universal_selectors", "*")}}) und die Pseudo-Klasse {{CSSxRef(":where", ":where()")}} und ihre Parameter werden bei der Berechnung des Gewichts nicht gezählt, daher ist ihr Wert 0-0-0, aber sie stimmen mit Elementen überein. Diese Selektoren beeinflussen den Spezifitätsgewichtswert nicht.

Kombinatoren, wie {{CSSxRef("Next-sibling_combinator", "+")}}, {{CSSxRef("Child_combinator", "&gt;")}}, {{CSSxRef("Subsequent-sibling_combinator", "~")}}, [" "](/de/docs/Web/CSS/Descendant_combinator) und {{CSSxRef("Column_combinator", "||")}}, machen einen Selektor spezifischer in dem, was ausgewählt wird, aber sie tragen keinen Wert zur Spezifität bei.

Der `&`-Verschachtelungs-Kombinator trägt nicht zur Spezifität bei, aber verschachtelte Regeln schon. In Bezug auf Spezifität und Funktionalität ist Verschachtelung sehr ähnlich zur {{CSSxRef(":is", ":is()")}} Pseudo-Klasse.

Wie bei der Verschachtelung fügen die Pseudo-Klassen {{CSSxRef(":is", ":is()")}}, {{CSSxRef(":has", ":has()")}} und Negation ({{CSSxRef(":not", ":not()")}}) selbst kein Gewicht hinzu. Die Parameter in diesen Selektoren jedoch schon. Das von jedem kommende Spezifitätsgewicht wird von dem Selektorparameter in der Liste der Selektoren mit der höchsten Spezifität bestimmt. Ähnlich wie bei verschachtelten Selektoren wird das Spezifitätsgewicht, das durch die verschachtelte Selektorkomponente hinzugefügt wird, durch den Selektor in der kommagetrennten Liste der verschachtelten Selektoren mit der höchsten Spezifität bestimmt.

Die [Ausnahmen zu `:not()`, `:is()`, `:has()` und CSS-Verschachtelung](#the_is_not_has_and_css_nesting_exceptions) werden unten besprochen.

#### Übereinstimmender Selektor

Das Spezifitätsgewicht kommt vom übereinstimmenden Selektor. Nehmen Sie diesen CSS-Selektor mit drei kommagetrennten Selektoren als Beispiel:

```css
[type="password"],
input:focus,
:root #myApp input:required {
  color: blue;
}
```

Der `[type="password"]` Selektor in der obigen Selektorliste, mit einem Spezifitätsgewicht von `0-1-0`, wendet die `color: blue` Deklaration auf alle Passwort-Eingabetypen an.

Alle Eingaben, unabhängig vom Typ, die den Fokus erhalten, stimmen mit dem zweiten Selektor in der Liste überein, `input:focus`, mit einem Spezifitätsgewicht von `0-1-1`; dieses Gewicht besteht aus der `:focus`-Pseudo-Klasse (0-1-0) und dem `input`-Typ (0-0-1). Wenn die Passwort-Eingabe den Fokus hat, wird sie `input:focus` entsprechen, und das Spezifitätsgewicht für die `color: blue` Stil-Deklaration wird `0-1-1` sein. Wenn dieses Passwort keinen Fokus hat, bleibt das Spezifitätsgewicht bei `0-1-0`.

Die Spezifität für eine erforderliche Eingabe, die in einem Element mit dem Attribut `id="myApp"` verschachtelt ist, beträgt `1-2-1`, basierend auf einer ID, zwei Pseudo-Klassen und einem Elementtyp.

Wenn der Eingabetyp mit `required` in einem Element mit dem gesetzten `id="myApp"` verschachtelt ist, beträgt das Spezifitätsgewicht `1-2-1`, basierend auf einer ID, zwei Pseudo-Klassen und einem Elementtyp, unabhängig davon, ob es den Fokus hat. Warum beträgt das Spezifitätsgewicht in diesem Fall `1-2-1` statt `0-1-1` oder `0-1-0`? Weil das Spezifitätsgewicht vom übereinstimmenden Selektor mit dem höchsten Spezifitätsgewicht kommt. Das Gewicht wird durch den Vergleich der Werte in den drei Spalten, von links nach rechts, bestimmt.

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

Sobald die Spezifitätswerte der relevanten Selektoren bestimmt sind, wird die Anzahl der Selektor-Komponenten in jeder Spalte von links nach rechts verglichen.

```css
#myElement {
  color: green; /* 1-0-0  - WINS!! */
}
.bodyClass .sectionClass .parentClass [id="myElement"] {
  color: yellow; /* 0-4-0 */
}
```

Die erste Spalte ist der Wert der _ID_-Komponente, der die Anzahl der IDs in jedem Selektor ist. Die Zahlen in den _ID_-Spalten der konkurrierenden Selektoren werden verglichen. Der Selektor mit dem höheren Wert in der _ID_-Spalte gewinnt, unabhängig davon, was die Werte in den anderen Spalten sind. Im obigen Beispiel ist es egal, dass der gelbe Selektor insgesamt mehr Komponenten hat, nur der Wert der ersten Spalte zählt.

Wenn die Zahl in den _ID_-Spalten der konkurrierenden Selektoren gleich ist, wird die nächste Spalte, _CLASS_, verglichen, wie unten gezeigt.

```css
#myElement {
  color: yellow; /* 1-0-0 */
}
#myApp [id="myElement"] {
  color: green; /* 1-1-0  - WINS!! */
}
```

Die _CLASS_-Spalte ist die Anzahl der Klassennamen, Attributselektoren und Pseudo-Klassen im Selektor. Wenn der _ID_-Spaltenwert gleich ist, gewinnt der Selektor mit dem höheren Wert in der _CLASS_-Spalte, unabhängig vom Wert in der _TYPE_-Spalte. Dies wird im folgenden Beispiel gezeigt.

```css
:root input {
  color: green; /* 0-1-1 - WINS because CLASS column is greater */
}
html body main input {
  color: yellow; /* 0-0-4 */
}
```

Wenn die Zahlen in den _CLASS_- und _ID_-Spalten der konkurrierenden Selektoren gleich sind, wird die _TYPE_-Spalte relevant. Die _TYPE_-Spalte ist die Anzahl der Elementtypen und Pseudo-Elemente im Selektor. Wenn die ersten beiden Spalten denselben Wert haben, gewinnt der Selektor mit der höheren Zahl in der _TYPE_-Spalte.

Wenn die konkurrierenden Selektoren gleiche Werte in allen drei Spalten haben, kommt die Proximitätsregel ins Spiel, wobei die zuletzt deklarierte Stilsetzung den Vorrang hat.

```css
input.myClass {
  color: yellow; /* 0-1-1 */
}
:root input {
  color: green; /* 0-1-1 WINS because it comes later */
}
```

### Die `:is()`, `:not()`, `:has()` und CSS-Verschachtelungs-Ausnahmen

Die Alles-passende Pseudo-Klasse {{CSSxRef(":is", ":is()")}}, die relationale Pseudo-Klasse {{CSSxRef(":has", ":has()")}} und die Negations-Pseudo-Klasse {{CSSxRef(":not", ":not()")}} werden _nicht_ als Pseudo-Klassen in der Berechnung des Spezifitätsgewichts betrachtet. Sie selbst fügen der Spezifitätsgleichung kein Gewicht hinzu. Die in die Pseudo-Klassen-Klammer übergebene Selektor-Parameter sind jedoch Teil des Spezifitätsalgorithmus; das Gewicht der Alles-passende und Negations-Pseudo-Klasse in der Spezifizitätswertberechnung ist das Gewicht des Parameters [Gewicht](#selektor-gewichtskategorien).

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

Beachten Sie, dass im obigen CSS-Paar die von den Pseudo-Klassen `:is()`, `:has()` und `:not()` bereitgestellten Spezifitätsgewichte die Werte des Selektor-Parameters sind, nicht die der Pseudo-Klasse.

Alle drei dieser Pseudo-Klassen akzeptieren komplexe Selektorlisten, eine Liste von kommagetrennten Selektoren, als Parameter. Diese Funktion kann verwendet werden, um die Spezifität eines Selektors zu erhöhen:

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

Im obigen CSS-Codeblock haben wir `#fakeId` in die Selektoren eingefügt. Dieses `#fakeId` fügt jedem Absatz-Spezifitätsgewicht `1-0-0` hinzu.

Beim Erstellen komplexer Selektorlisten mit [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting) verhält sich dies genau so wie die `:is()` Pseudo-Klasse.

```css
p,
#fakeId {
  span {
    /* 1-0-1 */
  }
}
```

Im obigen Codeblock nimmt der komplexe Selektor `p, #fakeId` die Spezifität von `#fakeId` und auch das `span`, sodass dies eine Spezifität von `1-0-1` sowohl für `p span` als auch für `#fakeId span` ergibt. Dies entspricht der Spezifität des `:is(p, #fakeId) span` Selektors.

Im Allgemeinen sollten Sie versuchen, die Spezifität so gering wie möglich zu halten, aber wenn Sie aus bestimmten Gründen die Spezifität eines Elements erhöhen müssen, können diese drei Pseudo-Klassen helfen.

```css
a:not(#fakeId#fakeId#fakeID) {
  color: blue; /* 3-0-1 */
}
```

In diesem Beispiel werden alle Links blau sein, es sei denn, sie werden von einer Link-Deklaration mit 3 oder mehr IDs überschrieben, ein Farbwert entspricht einem `a` inklusive des [`!important` Flags](#the_!important_exception) oder wenn der Link eine [inline style](#inline-stile) Farbdeklaration hat. Wenn Sie eine solche Technik anwenden, fügen Sie einen Kommentar hinzu, um zu erklären, warum der Trick notwendig war.

### Inline-Stile

Inline-Stile, die einem Element hinzugefügt werden (z.B. `style="font-weight: bold;"`), überschreiben immer alle normalen Stile in Autor-Stylesheets und können daher als mit der höchsten Spezifität versehen angesehen werden. Betrachten Sie Inline-Stile als mit einem Spezifitätsgewicht von `1-0-0-0` versehen.

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

Stellen Sie sicher, dass Sie mit jeder Verwendung des wichtigen Flags einen Kommentar hinzufügen, damit Code-Pfleger verstehen, warum ein CSS-Anti-Pattern verwendet wurde.

### Die `!important` Ausnahme

CSS-Deklarationen, die als wichtig markiert sind, überschreiben alle anderen Deklarationen innerhalb derselben Cascade-Ebene und Herkunft. Auch wenn technisch gesehen, [`!important`](/de/docs/Web/CSS/important) nichts mit Spezifität zu tun hat, steht es in direkter Wechselwirkung mit der Spezifität und der Cascade. Es kehrt die [Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade) Reihenfolge der Stylesheets um.

Wenn Deklarationen aus derselben Herkunft und Cascade-Ebene in Konflikt stehen und ein Eigenschaftswert das `!important` Flag gesetzt hat, wird die wichtige Deklaration angewendet, unabhängig von der Spezifität. Bei widersprüchlichen Deklarationen aus derselben Herkunft und Cascade-Ebene mit dem `!important` Flag, die auf dasselbe Element angewendet werden, wird die Deklaration mit der größeren Spezifität angewendet.

Die Verwendung von `!important`, um Spezifität zu überschreiben, wird als **schlechte Praxis** angesehen und sollte zu diesem Zweck vermieden werden. Das Verstehen und effektive Nutzen von Spezifität und Cascade kann jegliche Notwendigkeit für das `!important` Flag beseitigen.

Anstatt `!important` zu verwenden, um fremdes CSS (von externen Bibliotheken, wie Bootstrap oder normalize.css) zu überschreiben, importieren Sie die Drittanbieter-Skripte direkt in [Cascade-Ebenen](/de/docs/Web/CSS/@layer). Wenn Sie `!important` in Ihrem CSS verwenden müssen, kommentieren Sie Ihre Nutzung, damit zukünftige Code-Pfleger wissen, warum die Deklaration als wichtig markiert wurde und wissen, dass sie nicht überschrieben werden sollte. Verwenden Sie jedoch definitiv kein `!important`, wenn Sie Plugins oder Frameworks schreiben, die andere Entwickler ohne Kontrolle einbinden müssen.

### Die `:where()` Ausnahme

Die Spezifitätsanpassungs-Pseudo-Klasse {{CSSxRef(":where", ":where()")}} hat immer ihre Spezifität auf null, `0-0-0`, ersetzt. Sie ermöglicht es, CSS-Selektoren sehr spezifisch in Bezug auf das Ziel-Element zu machen, ohne die Spezifität zu erhöhen.

Beim Erstellen von Third-Party-CSS, das von Entwicklern verwendet werden soll, die keinen Zugriff haben, Ihr CSS zu bearbeiten, wird es als eine gute Praxis betrachtet, CSS mit der niedrigstmöglichen Spezifität zu erstellen. Beispiel: Wenn Ihr Theme das folgende CSS enthält:

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

Das Einfügen eines Regelsets in einen `@scope` Block beeinflusst nicht die Spezifität seines Selektors, unabhängig von den Selektoren, die innerhalb der Bereichswurzel und -grenze verwendet werden. Beispiel:

```css
@scope (.article-body) {
  /* img has a specificity of 0-0-1, as expected */
  img {
  }
}
```

Wenn Sie jedoch entscheiden, die `:scope` Pseudo-Klasse explizit voranzustellen, müssen Sie dies bei der Berechnung ihrer Spezifität berücksichtigen. `:scope`, wie alle regulären Pseudo-Klassen, hat eine Spezifität von 0-1-0. Beispiel:

```css
@scope (.article-body) {
  /* :scope img has a specificity of 0-1-0 + 0-0-1 = 0-1-1 */
  :scope img {
  }
}
```

Wenn Sie den `&` Selektor innerhalb eines `@scope` Blocks verwenden, repräsentiert `&` den Bereichswurzel-Selektor; es wird intern zu diesem Selektor umgeschrieben, der innerhalb eines {{cssxref(":is", ":is()")}} Selektors gewrappt ist. Beispiel:

```css
@scope (figure, #primary) {
  & img {
  }
}
```

`& img` entspricht `:is(figure, #primary) img`.

Da `:is()` die Spezifität seines am spezifischsten Arguments übernimmt (`#primary`, in diesem Fall), beträgt die Spezifität des `& img` Selektors im Bereich daher 1-0-0 + 0-0-1 = 1-0-1.

## Tipps zum Umgang mit Spezifitätsproblemen

Anstelle von `!important` sollten Sie Cascade-Ebenen verwenden und in Ihrem gesamten CSS eine geringe Spezifitätsgewichtung verwenden, sodass Stile leicht mit etwas spezifischeren Regeln überschrieben werden können. Die Verwendung von semantischem HTML hilft dabei, Ankerpunkte zu bieten, von denen aus das Styling angewendet werden kann.

### Selektoren spezifischer machen mit und ohne Spezifität hinzuzufügen

Indem Sie den Abschnitt des Dokuments angeben, den Sie stylen, bevor Sie das Element auswählen, wird die Regel spezifischer. Abhängig davon, wie Sie es hinzufügen, können Sie etwas, viel oder keine Spezifität hinzufügen, wie unten gezeigt:

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

Spezifität basiert auf der Form eines Selektors. Das Einbinden der `id` eines Elements als Attributselektor statt als id-Selektor ist eine gute Möglichkeit, ein Element spezifischer zu machen, ohne eine übermäßige Spezifität hinzuzufügen. Im vorherigen Beispiel wird der Selektor `[id="myContent"]` als Attributselektor zur Bestimmung der Spezifität des Selektors gezählt, obwohl er eine ID auswählt.

Sie können die `id` oder einen Teil eines Selektors auch als Parameter in der Pseudo-Klasse `:where()` zur Spezifitätsanpassung einfügen, wenn Sie einen Selektor spezifischer machen müssen, ohne irgendeine Spezifität hinzuzufügen.

### Erhöhen der Spezifität durch Duplizieren des Selektors

Als Sonderfall zur Erhöhung der Spezifität können Sie Gewichte aus den _CLASS_ oder _ID_ Spalten kopieren. Durch Duplizieren von ID-, Klassen-, Pseudo-Klassen- oder Attributselektoren innerhalb eines Kombinationsselektors wird die Spezifität erhöht, wenn sehr spezifische Selektoren überschrieben werden müssen, über die Sie keine Kontrolle haben.

```css
#myId#myId#myId span {
  /* 3-0-1 */
}
.myClass.myClass.myClass span {
  /* 0-3-1 */
}
```

Verwenden Sie dies sparsam, wenn überhaupt. Wenn Sie Selektorduplikation verwenden, kommentieren Sie immer Ihr CSS.

Durch die Verwendung von `:is()` und `:not()` (und auch `:has()`) können Sie die Spezifität erhöhen, selbst wenn Sie keine ID zu einem Elternelement hinzufügen können:

```css
:not(#fakeID#fakeId#fakeID) span {
  /* 3-0-1 */
}
:is(#fakeID#fakeId#fakeID, span) {
  /* 3-0-0 */
}
```

### Vorrang vor Drittanbieter-CSS

Die Nutzung von Cascade-Ebenen ist der Standardweg, um einem Satz von Stilen Vorrang vor einem anderen Satz von Stilen zu geben; Cascade-Ebenen ermöglichen dies ohne Verwendung von Spezifität! Normale (nicht wichtige) Autor-Stile, die in Cascade-Ebenen importiert werden, haben eine geringere Präzedenz als nicht geschichtete Autor-Stile.

Wenn Stile aus einem Stylesheet stammen, das Sie nicht bearbeiten oder verstehen können, und Sie Stile überschreiben müssen, ist eine Strategie, die Stile, die Sie nicht kontrollieren können, in eine Cascade-Ebene zu importieren. Stile in nachfolgend deklarierten Ebenen haben Vorrang, wobei nicht geschichtete Stile Vorrang vor allen geschichteten Stilen aus derselben Herkunft haben.

Wenn zwei Selektoren aus verschiedenen Ebenen dasselbe Element treffen, haben Herkunft und Bedeutung Vorrang; die Spezifität des Selektors im verlierenden Stylesheet ist irrelevant.

```html
<style>
  @import "TW.css" layer();
  p,
  p * {
    font-size: 1rem;
  }
</style>
```

Im obigen Beispiel wird der gesamte Absatztext, einschließlich des verschachtelten Inhalts, `1rem` sein, egal wie viele Klassennamen die Absätze im TW-Stylesheet haben, die übereinstimmen.

### Vermeidung und Überschreibung von `!important`

Der beste Ansatz ist es, `!important` nicht zu verwenden. Die obigen Erläuterungen zur Spezifität sollten hilfreich sein, um den Einsatz des Flags zu vermeiden und zu entfernen, wenn es gefunden wird.

Um die wahrgenommene Notwendigkeit für `!important` zu beseitigen, können Sie Folgendes tun:

- Erhöhen Sie die Spezifität des Selektors der ehemaligen `!important` Deklaration, sodass sie größer ist als andere Deklarationen
- Geben Sie ihr die gleiche Spezifität und platzieren Sie sie nach der Deklaration, die sie überschreiben soll
- Reduzieren Sie die Spezifität des Selektors, den Sie überschreiben möchten.

Alle diese Methoden sind in den vorangegangenen Abschnitten behandelt.

Wenn Sie nicht in der Lage sind, `!important` Flags aus einem Autoren-Stylesheet zu entfernen, ist die einzige Lösung zur Überschreibung der wichtigen Stile die Verwendung von `!important`. Das Erstellen einer [Cascade-Ebene](/de/docs/Web/CSS/@layer) von wichtigen Deklarationsüberschreibungen ist eine ausgezeichnete Lösung. Zwei Möglichkeiten, dies zu tun, umfassen:

#### Methode 1

1. Erstellen Sie ein separates, kurzes Stylesheet, das nur wichtige Deklarationen enthält, die speziell wichtige Deklarationen überschreiben, die Sie nicht entfernen konnten.
2. Importieren Sie dieses Stylesheet als das erste Import in Ihr CSS mit `layer()`, einschließlich der `@import` Anweisung, bevor Sie andere Stylesheets verlinken. Dies soll sicherstellen, dass die wichtigen Überschreibungen als erste Ebene importiert werden.

```html
<style>
  @import "importantOverrides.css" layer();
</style>
```

#### Methode 2

1. Erstellen Sie zu Beginn Ihrer Stylesheet-Deklarationen eine benannte Cascade-Ebene, wie folgt:

   ```css
   @layer importantOverrides;
   ```

2. Jedes Mal, wenn Sie eine wichtige Deklaration überschreiben müssen, deklarieren Sie sie innerhalb der benannten Ebene. Deklarieren Sie nur wichtige Regeln innerhalb der Ebene.

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

Die Spezifität des Selektors der wichtigen Regel innerhalb der Ebene kann niedrig sein, solange sie das Element trifft, das Sie überschreiben möchten. Normale Ebenen sollten außerhalb der Ebene deklariert werden, da geschichtete Stile eine geringere Präzedenz als nicht geschichtete Stile haben.

### Baumproximitätsignoranz

Die Nähe eines Elements zu anderen Elementen, die in einem gegebenen Selektor referenziert sind, hat keinen Einfluss auf die Spezifität.

```css
body h1 {
  color: green;
}

html h1 {
  color: purple;
}
```

Die `<h1>` Elemente werden lila, denn wenn Deklarationen dieselbe Spezifität haben, hat der zuletzt deklarierte Selektor Vorrang.

### Direkt angezielte Elemente vs. geerbte Stile

Stile für ein direkt angezieltes Element haben immer Vorrang vor geerbten Stilen, unabhängig von der Spezifität der geerbten Regel. Bei der folgenden CSS und HTML:

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

Das `h1` wird lila sein, weil der `h1` Selektor das Element spezifisch anspricht, während das Grün vom `#parent` Deklarationen geerbt wird.

## Beispiele

Im folgenden CSS haben wir drei Selektoren, die {{HTMLElement('input')}} Elemente ansprechen, um eine Farbe festzulegen. Für eine gegebene Eingabe ist das Spezifitätsgewicht der Farbe-Deklaration, die den Vorrang hat, der übereinstimmende Selektor mit dem größten Gewicht:

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

Wenn die obigen Selektoren alle auf dasselbe Eingabefeld abzielen, wird die Eingabe rot, da die erste Deklaration den höchsten Wert in der _ID_ Spalte hat.

Der letzte Selektor hat vier _TYPE_ Komponenten. Während er den höchsten ganzen Zahlenwert hat, ist es egal, wie viele Elemente und Pseudo-Elemente enthalten sind, selbst wenn es 150 wären, haben TYPE-Komponenten niemals Vorrang vor _CLASS_ Komponenten. Die Spaltenwerte werden von links nach rechts verglichen, wenn die Spaltenwerte gleich sind.

Hätten wir den id-Selektor im obigen Beispielcode in einen Attributselektor umgewandelt, hätten die ersten beiden Selektoren die gleiche Spezifität, wie unten gezeigt:

```css
[id="myElement"] input.myClass {
  color: red;
} /* 0-2-1 */
input[type="password"]:required {
  color: blue;
} /* 0-2-1 */
```

Wenn mehrere Deklarationen die gleiche Spezifität haben, wird die letzte Deklaration im CSS auf das Element angewendet. Wenn beide Selektoren dasselbe {{HTMLElement('input')}} treffen, wird die Farbe blau sein.

## Zusätzliche Hinweise

Ein paar Dinge, die Sie über Spezifität im Kopf behalten sollten:

1. Spezifität gilt nur, wenn dasselbe Element von mehreren Deklarationen in derselben Cascade-Ebene oder Herkunft angesprochen wird. Spezifität spielt nur eine Rolle für Deklarationen derselben Wichtigkeit und derselben Herkunft und [Cascade-Ebene](/de/docs/Web/CSS/@layer). Wenn übereinstimmende Selektoren in verschiedenen Ursprüngen sind, bestimmt die [Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade), welche Deklaration Vorrang hat.

2. Wenn zwei Selektoren in derselben Cascade-Ebene und Herkunft die gleiche Spezifität haben, wird die Scoping-Nähe berechnet; das Regelset mit der niedrigsten Scoping-Nähe gewinnt. Siehe [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) für weitere Details und ein Beispiel.

3. Wenn die Scoping-Nähe für beide Selektoren ebenfalls gleich ist, kommt die Quellordnung ins Spiel. Wenn alles andere gleich ist, gewinnt der letzte Selektor.

4. Laut CSS-Regeln werden [direkt angezielte Elemente](#direkt_angezielte_elemente_vs._geerbte_stile) immer Vorrang vor Regeln haben, die ein Element von seinem Vorfahren erbt.

5. [Nähe von Elementen](#baumproximitätsignoranz) im Dokumentenbaum hat keinen Einfluss auf die Spezifität.

## Spezifikationen

{{Specifications}}

## Siehe auch

- ["Spezifität" in "Konflikte handhaben"](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity_2)
- [SpeciFISHity](https://specifishity.com/)
- [Spezifitätsrechner](https://specificity.keegan.st/): Eine interaktive Website, um Ihre eigenen CSS-Regeln zu testen und zu verstehen
- [_ID-CLASS-TYPE_ Übung](https://estelle.github.io/CSS/selectors/exercises/specificity.html) ein Spezifitätsquiz
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax) Leitfaden
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
- [CSS-Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [At-Rules](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Anfänglich](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value), [berechnet](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value), [verwendet](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value) und [tatsächliche](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value) Werte
- [Wertedefinitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
- [Lernen: Konflikte handhaben](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Cascade-Ebenen](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Cascade und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [CSS-Verschachtelungsmodul](/de/docs/Web/CSS/CSS_nesting)
