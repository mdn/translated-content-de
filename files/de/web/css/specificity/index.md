---
title: Spezifität
slug: Web/CSS/Specificity
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{CSSRef}}

**Spezifität** ist der Algorithmus, den Browser verwenden, um die [CSS-Deklaration](/de/docs/Learn/CSS/First_steps/What_is_CSS#css_syntax) zu bestimmen, die für ein Element am relevantesten ist und dadurch den anzuwendenden Eigenschaftswert festlegt. Der Spezifitätsalgorithmus berechnet das Gewicht eines [CSS-Selektors](/de/docs/Web/CSS/Reference#selectors), um festzustellen, welche Regel von konkurrierenden CSS-Deklarationen auf ein Element angewendet wird.

> [!NOTE]
> Browser berücksichtigen Spezifität **nachdem** sie [Herkunft und Wichtigkeit im Cascade-Mechanismus](/de/docs/Web/CSS/Cascade) bestimmt haben. Mit anderen Worten, bei konkurrierenden Eigenschaftsdeklarationen ist Spezifität relevant und wird nur zwischen Selektoren von der einen [Herkunft und Ebene im Cascade-Mechanismus](/de/docs/Web/CSS/@layer) verglichen, die Vorrang für die Eigenschaft hat. [Nähe der Gültigkeitsbereiche](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) und das Erscheinungsreihenfolge werden relevant, wenn die Selektorspezifitäten der konkurrierenden Deklarationen in der Ebene im Cascade-Mechanismus mit Vorrang gleich sind.

## Wie wird Spezifität berechnet?

Spezifität ist ein Algorithmus, der das Gewicht berechnet, das auf eine gegebene CSS-Deklaration angewendet wird. Das Gewicht wird durch die Anzahl der [Selektoren jeder Gewichtskategorie](#selektor-gewichtskategorien) im Selektor bestimmt, der mit dem Element (oder Pseudo-Element) übereinstimmt. Wenn es zwei oder mehr Deklarationen gibt, die unterschiedliche Eigenschaftswerte für dasselbe Element bereitstellen, wird der Deklarationswert im Stilblock mit dem übereinstimmenden Selektor mit dem größten algorithmischen Gewicht angewendet.

Der Spezifitätsalgorithmus ist im Wesentlichen ein dreispaltiger Wert aus drei Kategorien oder Gewichten – ID, CLASS und TYPE –, die den drei Arten von Selektoren entsprechen. Der Wert stellt die Anzahl der Selektorkomponenten in jeder Gewichtskategorie dar und wird als _ID - CLASS - TYPE_ geschrieben. Die drei Spalten werden erstellt, indem die Anzahl der Selektorkomponenten für jede Selektor-Gewichtskategorie in den Selektoren gezählt wird, die mit dem Element übereinstimmen.

### Selektor-Gewichtskategorien

Die Selektor-Gewichtskategorien sind in der Reihenfolge abnehmender Spezifität aufgelistet:

- ID-Spalte
  - : Beinhaltet nur [ID-Selektoren](/de/docs/Web/CSS/ID_selectors), wie `#example`. Für jede ID in einem übereinstimmenden Selektor fügen Sie dem Gewichtswert 1-0-0 hinzu.
- CLASS-Spalte
  - : Beinhaltet [Klassen-Selektoren](/de/docs/Web/CSS/Class_selectors), wie `.myClass`, Attributselektoren wie `[type="radio"]` und `[lang|="fr"]`, und Pseudo-Klassen, wie `:hover`, `:nth-of-type(3n)` und `:required`. Für jede Klasse, jeden Attributselektor oder jede Pseudo-Klasse in einem übereinstimmenden Selektor fügen Sie dem Gewichtswert 0-1-0 hinzu.
- TYPE-Spalte
  - : Beinhaltet [Typselektoren](/de/docs/Web/CSS/Type_selectors), wie `p`, `h1` und `td`, und Pseudo-Elemente wie `::before`, `::placeholder` und andere Selektoren mit Doppelpunkt-Notation. Für jeden Typ oder Pseudo-Element in einem übereinstimmenden Selektor fügen Sie dem Gewichtswert 0-0-1 hinzu.
- Kein Wert
  - : Der universelle Selektor ({{CSSxRef("Universal_selectors", "*")}}) und die Pseudo-Klasse {{CSSxRef(":where", ":where()")}} und ihre Parameter werden bei der Berechnung des Gewichts nicht gezählt, sodass ihr Wert 0-0-0 ist, aber sie passen trotzdem zu Elementen. Diese Selektoren beeinflussen den Spezifitätswert nicht.

Kombinatoren, wie {{CSSxRef("Next-sibling_combinator", "+")}}, {{CSSxRef("Child_combinator", "&gt;")}}, {{CSSxRef("Subsequent-sibling_combinator", "~")}}, [" "](/de/docs/Web/CSS/Descendant_combinator) und {{CSSxRef("Column_combinator", "||")}}, machen einen Selektor möglicherweise spezifischer, was ausgewählt wird, aber sie tragen keinen Wert zur Spezifitätsgewichtung bei.

Der `&` Verschachtelungs-Kombinator erhöht nicht das Spezifitätsgewicht, aber verschachtelte Regeln tun dies. In Bezug auf Spezifität und Funktionalität ist das Verschachteln sehr ähnlich zur {{CSSxRef(":is", ":is()")}} Pseudo-Klasse.

Wie beim Verschachteln fügen die Pseudo-Klassen {{CSSxRef(":is", ":is()")}}, {{CSSxRef(":has", ":has()")}} und die Negation ({{CSSxRef(":not", ":not()")}}) selbst kein Gewicht hinzu. Die Parameter in diesen Selektoren tun dies jedoch. Das Spezifitätsgewicht von jedem wird von den Selektorparameter in der Liste der Selektoren mit der höchsten Spezifität bestimmt. Ähnlich ist es bei verschachtelten Selektoren; das Spezifitätsgewicht, das durch die verschachtelte Selektorkomponente hinzugefügt wird, ist der Selektor in der durch Kommas getrennten Liste von verschachtelten Selektoren mit der höchsten Spezifität.

Die [`:not()`, `:is()`, `:has()` und die Ausnahmen bei der CSS-Verschachtelung](#the_is_not_has_and_css_nesting_exceptions) werden unten besprochen.

#### Übereinstimmender Selektor

Das Spezifitätsgewicht ergibt sich aus dem übereinstimmenden Selektor. Nehmen wir dieses CSS-Selektorbeispiel mit drei durch Kommas getrennten Selektoren:

```css
[type="password"],
input:focus,
:root #myApp input:required {
  color: blue;
}
```

Der `[type="password"]` Selektor in der obigen Selektorliste mit einem Spezifitätsgewicht von `0-1-0` wendet die Deklaration `color: blue` auf alle Passwort-Eingabetypen an.

Alle Eingaben, unabhängig vom Typ, die den Fokus erhalten, entsprechen dem zweiten Selektor in der Liste, `input:focus`, mit einem Spezifitätsgewicht von `0-1-1`; dieses Gewicht setzt sich aus der `:focus` Pseudo-Klasse (0-1-0) und dem `input` Typ (0-0-1) zusammen. Wenn das Passwort-Eingabefeld den Fokus hat, entspricht es `input:focus`, und das Spezifitätsgewicht für die `color: blue` Stil-Deklaration wird `0-1-1` sein. Wenn dieses Passwort keinen Fokus hat, bleibt das Spezifitätsgewicht bei `0-1-0`.

Die Spezifität für eine erforderliche Eingabe, die in einem Element mit dem Attribut `id="myApp"` verschachtelt ist, beträgt `1-2-1`, basierend auf einer ID, zwei Pseudo-Klassen und einem Elementtyp.

Wenn der Passwort-Eingabetyp mit `required` in einem Element mit `id="myApp"` gesetzt wird, beträgt das Spezifitätsgewicht `1-2-1`, basierend auf einer ID, zwei Pseudo-Klassen und einem Elementtyp, unabhängig davon, ob es den Fokus hat oder nicht. Warum ist das Spezifitätsgewicht dann `1-2-1` anstelle von `0-1-1` oder `0-1-0` in diesem Fall? Weil das Spezifitätsgewicht vom übereinstimmenden Selektor mit dem größten Spezifitätsgewicht kommt. Das Gewicht wird bestimmt, indem die Werte in den drei Spalten von links nach rechts verglichen werden.

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

Die erste Spalte ist der Wert der _ID_-Komponente, die die Anzahl der IDs in jedem Selektor angibt. Die Zahlen in den _ID_-Spalten der konkurrierenden Selektoren werden verglichen. Der Selektor mit dem größeren Wert in der _ID_-Spalte gewinnt, unabhängig von den Werten in den anderen Spalten. Im obigen Beispiel spielt es keine Rolle, dass der gelbe Selektor insgesamt mehr Komponenten hat, nur der Wert der ersten Spalte zählt.

Wenn die Zahl in den _ID_-Spalten der konkurrierenden Selektoren gleich ist, wird die nächste Spalte, _CLASS_, verglichen, wie unten gezeigt.

```css
#myElement {
  color: yellow; /* 1-0-0 */
}
#myApp [id="myElement"] {
  color: green; /* 1-1-0  - WINS!! */
}
```

Die _CLASS_-Spalte ist die Anzahl der Klassen, Attributselektoren und Pseudo-Klassen im Selektor. Wenn der Wert in der _ID_-Spalte gleich ist, gewinnt der Selektor mit dem höheren Wert in der _CLASS_-Spalte, unabhängig vom Wert in der _TYPE_-Spalte. Dies wird im Beispiel unten gezeigt.

```css
:root input {
  color: green; /* 0-1-1 - WINS because CLASS column is greater */
}
html body main input {
  color: yellow; /* 0-0-4 */
}
```

Wenn die Zahlen in den _CLASS_- und _ID_-Spalten in konkurrierenden Selektoren gleich sind, wird die _TYPE_-Spalte relevant. Die _TYPE_-Spalte ist die Anzahl der Elementtypen und Pseudo-Elemente im Selektor. Wenn die ersten beiden Spalten denselben Wert haben, gewinnt der Selektor mit der größeren Zahl in der _TYPE_-Spalte.

Wenn die konkurrierenden Selektoren in allen drei Spalten dieselben Werte haben, kommt die Proximitätsregel ins Spiel, bei der der zuletzt deklarierte Stil Vorrang hat.

```css
input.myClass {
  color: yellow; /* 0-1-1 */
}
:root input {
  color: green; /* 0-1-1 WINS because it comes later */
}
```

### Die `:is()`, `:not()`, `:has()` und Ausnahmen bei der CSS-Verschachtelung

Die Matches-any Pseudo-Klasse {{CSSxRef(":is", ":is()")}}, die relationale Pseudo-Klasse {{CSSxRef(":has", ":has()")}} und die Negations-Pseudo-Klasse {{CSSxRef(":not", ":not()")}} werden _nicht_ als Pseudo-Klassen in der Berechnung des Spezifitätsgewichts betrachtet. Sie selbst fügen der Spezifitätsgleichung kein Gewicht hinzu. Die Selektorparameter, die in die Pseudo-Klassen-Parenthese übergeben werden, sind jedoch Teil des Spezifikationsalgorithmus; das Gewicht der Matches-any und Negations-Pseudo-Klasse in der Spezifikationswertberechnung ist das Gewicht des Parameters mit der höchsten [Gewichtskategorie](#selektor-gewichtskategorien).

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

Beachten Sie, dass in der obigen CSS-Zuordnung das Spezifitätsgewicht, das durch die Pseudo-Klassen `:is()`, `:has()` und `:not()` bereitgestellt wird, der Wert des Selektorparameters ist, nicht der Pseudo-Klasse.

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

Im obigen CSS-Codeblock haben wir `#fakeId` in die Selektoren aufgenommen. Dieses `#fakeId` fügt jedem Absatz ein Spezifikationsgewicht von `1-0-0` hinzu.

Wenn komplexe Selektorlisten mit [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting) erstellt werden, verhält sich dies genau so wie die `:is()` Pseudo-Klasse.

```css
p,
#fakeId {
  span {
    /* 1-0-1 */
  }
}
```

Im obigen Codeblock bezieht sich die komplexe Selektor `p, #fakeId` die Spezifikations von `#fakeId` und auch `span`, sodass dies eine Spezifikations von `1-0-1` sowohl für `p span` als auch `#fakeId span` erzeugt. Dies entspricht der Spezifikation des Selektors `:is(p, #fakeId) span`.

Im Allgemeinen möchten Sie die Spezifikation so gering wie möglich halten, aber wenn Sie das Spezifikationsgewicht eines Elements aus einem bestimmten Grund erhöhen müssen, können Ihnen diese drei Pseudo-Klassen helfen.

```css
a:not(#fakeId#fakeId#fakeID) {
  color: blue; /* 3-0-1 */
}
```

In diesem Beispiel sind alle Links blau, es sei denn, sie werden durch eine Link-Deklaration mit 3 oder mehr IDs, einem Farbwert, der zu `a` passt, mit dem[`!important`-Flag](#the_!important_exception) oder wenn der Link eine [Inline-Stildeklaration](#inline-stile) hat, überschrieben. Wenn Sie eine solche Technik anwenden, fügen Sie einen Kommentar hinzu, um zu erklären, warum der Hack erforderlich war.

### Inline-Stile

Inline-Stile, die einem Element hinzugefügt werden (z. B. `style="font-weight: bold;"`), überschreiben immer normale Stile in Autoren-Stilblättern und können daher als mit der höchsten Spezifikation angesehen werden. Denken Sie an Inline-Stile, als hätten sie ein Spezifikationsgewicht von `1-0-0-0`.

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

Stellen Sie sicher, dass Sie bei jeder Verwendung des wichtigen Flags einen Kommentar hinzufügen, damit Code-Pfleger verstehen, warum ein CSS-Anti-Pattern verwendet wurde.

### Die `!important`-Ausnahme

CSS-Deklarationen, die als wichtig markiert sind, überschreiben alle anderen Deklarationen innerhalb derselben Cascade-Ebene und -Herkunft. Obwohl technisch gesehen [`!important`](/de/docs/Web/CSS/important) nichts mit Spezifikation zu tun hat, interagiert es direkt mit Spezifikation und dem Cascade-Mechanismus. Es kehrt die Reihenfolge der [Cascade](/de/docs/Web/CSS/Cascade) von Stylesheets um.

Wenn Deklarationen aus derselben Herkunft und Cascade-Ebene in Konflikt stehen und ein Eigenschaftswert das `!important`-Flag gesetzt hat, wird die wichtige Deklaration angewendet, unabhängig von der Spezifikation. Wenn konkurrierende Deklarationen aus derselben Herkunft und Cascade-Ebene mit dem `!important`-Flag auf dasselbe Element angewendet werden, wird die Deklaration mit einer höheren Spezifikation angewendet.

Die Verwendung von `!important`, um Spezifikationen zu überschreiben, wird als **schlechte Praxis** angesehen und sollte zu diesem Zweck vermieden werden. Spezifikationen und den Cascade-Mechanismus zu verstehen und effektiv zu nutzen, kann jeglichen Bedarf für das `!important`-Flag beseitigen.

Statt `!important` zu verwenden, um fremde CSS zu überschreiben (aus externen Bibliotheken wie Bootstrap oder normalize.css), importieren Sie die Drittanbieter-Skripte direkt in [Cascade-Ebenen](/de/docs/Web/CSS/@layer). Wenn Sie `!important` in Ihrem CSS verwenden müssen, kommentieren Sie Ihre Verwendung, damit zukünftige Code-Pfleger wissen, warum die Deklaration als wichtig markiert wurde, und wissen, dass sie nicht überschrieben werden soll. Aber setzen Sie `!important` definitiv nicht ein, wenn Sie Plugins oder Frameworks schreiben, die andere Entwickler einbinden müssen, ohne sie kontrollieren zu können.

### Die `:where()`-Ausnahme

Die Spezifikationsanpassungs-Pseudo-Klasse {{CSSxRef(":where", ":where()")}} ersetzt immer ihre Spezifikation durch Null, `0-0-0`. Sie ermöglicht es, CSS-Selektoren sehr spezifisch in Bezug auf das gezielte Element zu machen, ohne die Spezifikation zu erhöhen.

Beim Erstellen von Drittanbieter-CSS, das von Entwicklern verwendet werden soll, die keinen Zugriff auf die Bearbeitung Ihres CSS haben, gilt es als gute Praxis, CSS mit der geringstmöglichen Spezifikation zu erstellen. Wenn Ihr Thema beispielsweise das folgende CSS enthält:

```css
:where(#defaultTheme) a {
  /* 0-0-1 */
  color: red;
}
```

Dann kann der Entwickler, der das Widget implementiert, leicht die Linkfarbe nur mit Typselektoren überschreiben.

```css
footer a {
  /* 0-0-2 */
  color: blue;
}
```

### Wie `@scope`-Blöcke die Spezifikation beeinflussen

Das Einfügen eines Regelsets innerhalb eines `@scope`-Blocks hat keinen Einfluss auf die Spezifikation seines Selektors, unabhängig von den Selektoren, die im Bereich der Wurzel und Begrenzung verwendet werden. Zum Beispiel:

```css
@scope (.article-body) {
  /* img has a specificity of 0-0-1, as expected */
  img { ... }
}
```

Wenn Sie sich jedoch entscheiden, die `:scope`-Pseudo-Klasse explizit an Ihre begrenzten Selektoren voranzustellen, müssen Sie dies bei der Berechnung ihrer Spezifikation berücksichtigen. `:scope`, wie alle regulären Pseudo-Klassen, hat eine Spezifikation von 0-1-0. Zum Beispiel:

```css
@scope (.article-body) {
  /* :scope img has a specificity of 0-1-0 + 0-0-1 = 0-1-1 */
  :scope img { ... }
}
```

Wenn Sie den `&`-Selektor innerhalb eines `@scope`-Blocks verwenden, steht `&` für den Bereichswurzel-Selektor; es wird intern in diesen Selektor umgeschrieben, der in einen {{cssxref(":is", ":is()")}}-Selektor eingeschlossen ist. Zum Beispiel in:

```css
@scope (figure, #primary) {
  & img { ... }
}
```

`& img` entspricht `:is(figure, #primary) img`.

Da `:is()` die Spezifikation seines spezifischsten Arguments annimmt (`#primary` in diesem Fall), beträgt die Spezifikation des begrenzten `& img`-Selektors daher 1-0-0 + 0-0-1 = 1-0-1.

## Tipps zum Umgang mit Spezifikationsproblemen

Statt `!important` zu verwenden, ziehen Sie die Verwendung von Cascade-Ebenen in Betracht und verwenden Sie Spezifikationen mit geringem Gewicht in Ihrem gesamten CSS, sodass Stile leicht mit leicht spezifischeren Regeln überschrieben werden können. Die Verwendung von semantischem HTML hilft, Ankerpunkte bereitzustellen, von denen Styling angewendet werden kann.

### Selektoren spezifisch machen, mit und ohne Erhöhung der Spezifikation

Indem Sie den Abschnitt des Dokuments, den Sie gerade stylen, vor dem von Ihnen gewählten Element angeben, wird die Regel spezifischer. Abhängig davon, wie Sie es hinzufügen, können Sie Spezifikationen hinzufügen, viel oder gar nicht, wie unten gezeigt:

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

Egal in welcher Reihenfolge, die Überschrift wird grün sein, weil diese Regel die spezifischste ist.

#### Reduzierung der ID-Spezifikation

Die Spezifikation basiert auf der Form eines Selektors. Die Einbeziehung der `id` eines Elements als Attributselektor anstelle eines ID-Selektors ist eine gute Möglichkeit, ein Element spezifischer zu machen, ohne einem Übermaß an Spezifikationen hinzuzufügen. Im vorherigen Beispiel zählt der Selektor `[id="myContent"]` als Attributselektor, um die Spezifikation des Selektors zu bestimmen, obwohl er eine ID auswählt.

Sie können die `id` oder jeden Teil eines Selektors auch als Parameter in der `:where()` Spezifikationsanpassungs-Pseudo-Klasse einschließen, wenn Sie einen Selektor spezifischer machen müssen, aber gar keine Spezifikationen hinzufügen möchten.

### Erhöhung der Spezifikation durch Selektor-Duplizierung

Als Sonderfall zur Erhöhung der Spezifikation können Sie Gewichte aus den _CLASS_- oder _ID_-Spalten duplizieren. Durch die Duplizierung von ID-, Klassen-, Pseudo-Klassen- oder Attributselektoren innerhalb eines zusammengesetzten Selektors wird die Spezifikation erhöht, wenn sehr spezifische Selektoren überschrieben werden, über die Sie keine Kontrolle haben.

```css
#myId#myId#myId span {
  /* 3-0-1 */
}
.myClass.myClass.myClass span {
  /* 0-3-1 */
}
```

Verwenden Sie dies sparsam, wenn überhaupt. Wenn Sie die Selektorduplikation verwenden, kommentieren Sie immer Ihr CSS.

Indem Sie `:is()` und `:not()` (und auch `:has()`) verwenden, können Sie Spezifikationen erhöhen, auch wenn Sie keine ID zu einem übergeordneten Element hinzufügen können:

```css
:not(#fakeID#fakeId#fakeID) span {
  /* 3-0-1 */
}
:is(#fakeID#fakeId#fakeID, span) {
  /* 3-0-0 */
}
```

### Vorrang vor Drittanbieter-CSS

Die Nutzung von Cascade-Ebenen ist der Standardweg, um eine Menge von Styles vor einer anderen Menge von Styles vorzuziehen; Cascade-Ebenen ermöglichen dies ohne Spezifikation! Normale (nicht wichtige) Autoren-Stile, die in Cascade-Ebenen importiert wurden, haben eine geringere Priorität als nicht geschichtete Autoren-Stile.

Wenn Stile von einem Stylesheet kommen, das Sie nicht bearbeiten oder nicht verstehen können und Sie die Stile überschreiben müssen, ist eine Strategie, die nicht unter Ihrer Kontrolle stehenden Stile in eine Cascade-Ebene zu importieren. Stile in anschließend deklarierten Ebenen haben Vorrang, wobei nicht geschichtete Stile Vorrang vor allen geschichteten Stilen derselben Herkunft haben.

Treffen zwei Selektoren aus verschiedenen Ebenen dasselbe Element, haben Herkunft und Wichtigkeit Vorrang; die Spezifikation des Selektors im verlierenden Stylesheet ist irrelevant.

```html
<style>
  @import TW.css layer();
  p,
  p * {
    font-size: 1rem;
  }
</style>
```

Im obigen Beispiel wird der gesamte Absatztext, einschließlich des verschachtelten Inhalts, `1rem` sein, egal wie viele Klassenbezeichnungen die Absätze haben, die zum TW-Stylesheet passen.

### Vermeidung und Überschreibung von `!important`

Der beste Ansatz ist, `!important` nicht zu verwenden. Die obigen Erklärungen zur Spezifikation sollten hilfreich sein, um die Verwendung des Flags zu vermeiden und es insgesamt zu entfernen, wenn es auftritt.

Um den wahrgenommenen Bedarf an `!important` zu entfernen, können Sie Folgendes tun:

- Erhöhen Sie die Spezifikation des Selektors der ehemals `!important`-Deklaration, sodass sie größer als andere Deklarationen ist
- Geben Sie ihm die gleiche Spezifikation und platzieren Sie ihn nach der Deklaration, die er überschreiben soll
- Reduzieren Sie die Spezifikation des Selektors, den Sie zu überschreiben versuchen.

Alle diese Methoden werden in den vorherigen Abschnitten behandelt.

Wenn Sie nicht in der Lage sind, `!important`-Flags aus einem Autoren-Stylesheet zu entfernen, besteht die einzige Lösung zur Überschreibung der wichtigen Stile darin, `!important` zu verwenden. Eine Erzeugung einer [Cascade-Ebene](/de/docs/Web/CSS/@layer) von wichtigen Deklarationsüberschreibungen ist eine ausgezeichnete Lösung. Zwei Wege, dies zu tun, sind:

#### Methode 1

1. Erstellen Sie ein separates, kurzes Stylesheet, das nur wichtige Deklarationen enthält, die speziell dazu gedacht sind, jede wichtige Deklaration zu überschreiben, die Sie nicht entfernen konnten.
2. Importieren Sie dieses Stylesheet als die erste Importierung in Ihrem CSS unter Verwendung von `layer()`, einschließlich der `@import`-Anweisung, bevor Sie andere Stylesheets verlinken. Dies soll sicherstellen, dass die wichtigen Überschreibungen als erste Ebene importiert werden.

```html
<style>
  @import importantOverrides.css layer();
</style>
```

#### Methode 2

1. Erstellen Sie am Anfang Ihrer Stylesheet-Deklarationen eine benannte Cascade-Ebene, wie folgt:

   ```css
   @layer importantOverrides;
   ```

2. Jedes Mal, wenn Sie eine wichtige Deklaration überschreiben müssen, deklarieren Sie sie innerhalb der benannten Ebene. Deklarieren Sie innerhalb der Ebene nur wichtige Regeln.

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

Die Spezifikation des Selektors des wichtigen Stils innerhalb der Ebene kann niedrig sein, solange er das Element trifft, das Sie überschreiben möchten. Normale Ebenen sollten außerhalb der Ebene deklariert werden, da geschichtete Stile eine geringere Priorität als nicht geschichtete Stile haben.

### Ignoranz der Baum-Nähe

Die Nähe eines Elements zu anderen Elementen, die in einem bestimmten Selektor referenziert werden, hat keinen Einfluss auf die Spezifikation.

```css
body h1 {
  color: green;
}

html h1 {
  color: purple;
}
```

Die `<h1>`-Elemente werden lila sein, weil bei Deklarationen mit derselben Spezifikation der zuletzt deklarierte Selektor Vorrang hat.

### Direkt angesteuerte Elemente vs. geerbte Stile

Stile für ein direkt angesteuertes Element haben immer Vorrang vor geerbten Stilen, unabhängig von der Spezifikation der geerbten Regel. Angesichts des folgenden CSS und HTML:

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

Im folgenden CSS gibt es drei Selektoren, die {{HTMLElement('input')}}-Elemente ansprechen, um eine Farbe festzulegen. Für eine gegebene Eingabe ist das Spezifikationsgewicht der Farbe Deklaration mit Vorrang der übereinstimmende Selektor mit dem größten Gewicht:

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

Wenn die obigen Selektoren alle dieselbe Eingabe ansprechen, wird die Eingabe rot sein, da die erste Deklaration den höchsten Wert in der _ID_-Spalte hat.

Der letzte Selektor hat vier _TYPE_-Komponenten. Während er den höchsten Ganzzahlenwert hat, haben, unabhängig davon wie viele Elemente und Pseudo-Elemente enthalten sind, selbst wenn es 150 wären, _TYPE_-Komponenten niemals Vorrang gegenüber _CLASS_-Komponenten. Die Spaltenwerte werden von links nach rechts verglichen, wenn die Spaltenwerte gleich sind.

Hätten wir den ID-Selektor im obigen Beispielcode in einen Attributselektor umgewandelt, hätten die ersten beiden Selektoren die gleiche Spezifikation, wie unten gezeigt:

```css
[id="myElement"] input.myClass {
  color: red;
} /* 0-2-1 */
input[type="password"]:required {
  color: blue;
} /* 0-2-1 */
```

Wenn mehrere Deklarationen die gleiche Spezifikation haben, wird die letzte im CSS gefundene Deklaration auf das Element angewendet. Wenn beide Selektoren denselben {{HTMLElement('input')}} treffen, wird die Farbe blau sein.

## Zusätzliche Hinweise

Einige Dinge, die Sie sich über Spezifikation merken sollten:

1. Spezifikation gilt nur, wenn dasselbe Element von mehreren Deklarationen in derselben Cascade-Ebene oder Herkunft angesprochen wird. Spezifikation ist nur für Deklarationen von gleicher Wichtigkeit und gleicher Herkunft und [Cascade-Ebene](/de/docs/Web/CSS/@layer) relevant. Wenn übereinstimmende Selektoren aus verschiedenen Ursprüngen stammen, bestimmt der [Cascade](/de/docs/Web/CSS/Cascade), welche Deklaration Vorrang hat.

2. Wenn zwei Selektoren in derselben Cascade-Ebene und Herkunft die gleiche Spezifikation haben, wird dann die Bereichs-Nähe berechnet; das Regelset mit der niedrigeren Bereichs-Nähe gewinnt. Siehe [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) für mehr Details und ein Beispiel.

3. Wenn die Bereichs-Nähe auch für beide Selektoren gleich ist, spielt die Quellreihenfolge eine Rolle. Wenn alles andere gleich ist, gewinnt der letzte Selektor.

4. Laut CSS-Regeln werden [direkt angesteuerte Elemente](#direkt_angesteuerte_elemente_vs._geerbte_stile) immer Vorrang haben gegenüber Regeln, die ein Element von seinem Vorfahren erbt.

5. Die [Nähe von Elementen](#ignoranz_der_baum-nähe) im Dokumentenbaum hat keine Auswirkungen auf die Spezifikation.

## Spezifikationen

{{Specifications}}

## Siehe auch

- ["Spezifität" in "Cascade und Vererbung"](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#specificity_2)
- [SpeciFISHity](https://specifishity.com/)
- [Spezifikationsrechner](https://specificity.keegan.st/): Eine interaktive Website, um Ihre eigenen CSS-Regeln zu testen und zu verstehen
- [_ID-CLASS-TYPE_ Übung](https://estelle.github.io/CSS/selectors/exercises/specificity.html) ein Spezifikations-Quiz
- [CSS-Syntax](/de/docs/Web/CSS/Syntax) Leitfaden
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
- [CSS-Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [At-Regeln](/de/docs/Web/CSS/At-rule)
- [Vererbung](/de/docs/Web/CSS/Inheritance)
- [Anfangswerte](/de/docs/Web/CSS/initial_value), [berechnete Werte](/de/docs/Web/CSS/computed_value), [verwendete Werte](/de/docs/Web/CSS/used_value) und [tatsächliche Werte](/de/docs/Web/CSS/actual_value)
- [Wertedefinitions-Syntax](/de/docs/Web/CSS/Value_definition_syntax)
- [Bausteine: die CSS-Kaskade](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- [Bausteine: Kaskadierungsebenen](/de/docs/Learn/CSS/Building_blocks/Cascade_layers)
- [CSS-Kaskade und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [CSS-Verschachtelungsmodul](/de/docs/Web/CSS/CSS_nesting)
