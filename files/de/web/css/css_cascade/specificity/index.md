---
title: Spezifität
slug: Web/CSS/CSS_cascade/Specificity
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{CSSRef}}

**Spezifität** ist der Algorithmus, den Browser verwenden, um die [CSS-Deklaration](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#css_syntax_basics) zu bestimmen, die für ein Element am relevantesten ist, was wiederum den zu verwendenden Eigenschaftswert für das Element bestimmt. Der Spezifitätsalgorithmus berechnet das Gewicht eines [CSS-Selectors](/de/docs/Web/CSS/Reference#selectors), um zu bestimmen, welche Regel von konkurrierenden CSS-Deklarationen auf ein Element angewendet wird.

> [!NOTE]
> Browser berücksichtigen die Spezifität **nachdem** sie die [Ursprünge und Wichtigkeit der Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) bestimmt haben. Mit anderen Worten ist Spezifität bei konkurrierenden Eigenschaftsdeklarationen nur zwischen Selektoren eines Ursprungs und einer [Kaskadenebene](/de/docs/Web/CSS/@layer) relevant und wird verglichen, die für die Eigenschaft Vorrang hat. [Nähe im Geltungsbereich](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) und Reihenfolge des Erscheinens werden relevant, wenn die Spezifizitäten der konkurrierenden Deklarationen in der Kaskadenschicht mit Vorrang gleich sind.

## Wie wird Spezifität berechnet?

Spezifität ist ein Algorithmus, der das Gewicht berechnet, das auf eine bestimmte CSS-Deklaration angewendet wird. Das Gewicht wird durch die Anzahl der [Selektoren jeder Gewichtskategorie](#kategorien_des_selektionsgewichts) im Selektor bestimmt, die das Element (oder Pseudo-Element) abgleichen. Wenn es zwei oder mehr Deklarationen gibt, die unterschiedliche Eigenschaftswerte für dasselbe Element bereitstellen, wird der Deklarationswert im Stilblock mit dem übereinstimmenden Selektor mit dem größten algorithmischen Gewicht angewendet.

Der Spezifitätsalgorithmus ist im Wesentlichen ein drei-teiliger Wert aus drei Kategorien oder Gewichten - ID, CLASS und TYPE -, die den drei Arten von Selektoren entsprechen. Der Wert repräsentiert die Anzahl der Selektor-Komponenten in jeder Gewichtskategorie und wird als _ID - CLASS - TYPE_ geschrieben. Die drei Spalten werden erstellt, indem die Anzahl der Selektor-Komponenten für jede Selektionsgewichtskategorie in den Selektoren gezählt wird, die das Element abgleichen.

### Kategorien des Selektionsgewichts

Die Kategorien des Selektionsgewichts sind hier in absteigender Reihenfolge der Spezifität aufgelistet:

- ID-Spalte
  - : Beinhaltet nur [ID-Selektoren](/de/docs/Web/CSS/ID_selectors), wie `#example`. Für jede ID in einem übereinstimmenden Selektor, addieren Sie 1-0-0 zum Gewichtswert.
- CLASS-Spalte
  - : Beinhaltet [Klassenselektoren](/de/docs/Web/CSS/Class_selectors), wie `.myClass`, Attributselektoren wie `[type="radio"]` und `[lang|="fr"]`, und Pseudo-Klassen, wie `:hover`, `:nth-of-type(3n)`, und `:required`. Für jede Klasse, jeden Attributselektor oder jede Pseudo-Klasse in einem übereinstimmenden Selektor, addieren Sie 0-1-0 zum Gewichtswert.
- TYPE-Spalte
  - : Beinhaltet [Typselektoren](/de/docs/Web/CSS/Type_selectors), wie `p`, `h1`, und `td`, und Pseudo-Elemente wie `::before`, `::placeholder`, und alle anderen Selektoren mit Doppelpunktsyntax. Für jeden Typ oder jedes Pseudo-Element in einem übereinstimmenden Selektor, addieren Sie 0-0-1 zum Gewichtswert.
- Kein Wert
  - : Der universelle Selektor ({{CSSxRef("Universal_selectors", "*")}}) und die Pseudo-Klasse {{CSSxRef(":where", ":where()")}} und ihre Parameter werden bei der Gewichtungsberechnung nicht gezählt, sodass ihr Wert 0-0-0 beträgt, aber sie stimmen mit Elementen überein. Diese Selektoren beeinflussen den Spezifitätsgewichtswert nicht.

Kombinatoren, wie {{CSSxRef("Next-sibling_combinator", "+")}}, {{CSSxRef("Child_combinator", "&gt;")}}, {{CSSxRef("Subsequent-sibling_combinator", "~")}}, [" "](/de/docs/Web/CSS/Descendant_combinator), und {{CSSxRef("Column_combinator", "||")}}, können einen Selektor spezifischer in dem machen, was ausgewählt wird, aber sie fügen dem Spezifitätsgewicht keinen Wert hinzu.

Der `&` Verschachtelungskombinator fügt kein Spezifitätsgewicht hinzu, aber verschachtelte Regeln schon. In Bezug auf Spezifität und Funktionalität ist die Verschachtelung sehr ähnlich zur {{CSSxRef(":is", ":is()")}} Pseudo-Klasse.

Wie die Verschachtelung fügen die Pseudo-Klassen {{CSSxRef(":is", ":is()")}}, {{CSSxRef(":has", ":has()")}} und Negation ({{CSSxRef(":not", ":not()")}}) selbst kein Gewicht hinzu. Die Parameter in diesen Selektoren hingegen schon. Das Spezifitätsgewicht jeder kommt aus dem Selektorparameter in der Liste der Selektoren mit der höchsten Spezifität. Ebenso wird bei verschachtelten Selektoren das Spezifitätsgewicht, das durch die verschachtelte Selektorkomponente hinzugefügt wird, der Selektor in der kommagetrennten Liste der verschachtelten Selektoren mit der höchsten Spezifität.

Die [`:not()`, `:is()`, `:has()` und CSS Verschachtelungsausnahmen](#the_is_not_has_and_css_nesting_exceptions) werden unten diskutiert.

#### Übereinstimmender Selektor

Das Spezifitätsgewicht ergibt sich aus dem übereinstimmenden Selektor. Nehmen Sie dieses CSS-Beispiel mit drei durch Kommas getrennten Selektoren:

```css
[type="password"],
input:focus,
:root #myApp input:required {
  color: blue;
}
```

Der `[type="password"]` Selektor in der obigen Selektorenliste, mit einem Spezifitätsgewicht von `0-1-0`, wendet die Deklaration `color: blue` auf alle Passwort-Eingabetypen an.

Alle Eingaben, unabhängig vom Typ, die den Fokus erhalten, stimmen mit dem zweiten Selektor in der Liste überein, `input:focus`, mit einem Spezifitätsgewicht von `0-1-1`; dieses Gewicht setzt sich zusammen aus der Pseudo-Klasse `:focus` (0-1-0) und dem `input` Typ (0-0-1). Wenn die Passworteingabe den Fokus hat, entspricht sie `input:focus`, und das Spezifitätsgewicht für die `color: blue` Stildeklaration wird `0-1-1` sein. Wenn dieses Passwort keinen Fokus hat, bleibt das Spezifitätsgewicht bei `0-1-0`.

Die Spezifität für eine erforderliche Eingabe, die in einem Element mit Attribut `id="myApp"` verschachtelt ist, ist `1-2-1`, basierend auf einer ID, zwei Pseudo-Klassen und einem Elementtyp.

Wenn der Passwort-Eingabetyp mit `required` in einem Element mit gesetztem `id="myApp"` verschachtelt ist, wird das Spezifitätsgewicht `1-2-1` sein, basierend auf einer ID, zwei Pseudo-Klassen und einem Elementtyp, unabhängig davon, ob er den Fokus hat oder nicht. Warum ist das Spezifitätsgewicht `1-2-1` statt `0-1-1` oder `0-1-0` in diesem Fall? Weil das Spezifitätsgewicht vom übereinstimmenden Selektor mit dem höchsten Spezifitätsgewicht kommt. Das Gewicht wird bestimmt, indem die Werte in den drei Spalten von links nach rechts verglichen werden.

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

Sobald die Spezifitätswerte der relevanten Selektoren bestimmt sind, werden die Anzahl der Selektorkomponenten in jeder Spalte von links nach rechts verglichen.

```css
#myElement {
  color: green; /* 1-0-0  - WINS!! */
}
.bodyClass .sectionClass .parentClass [id="myElement"] {
  color: yellow; /* 0-4-0 */
}
```

Die erste Spalte ist der Wert der _ID_-Komponente, die die Anzahl der IDs in jedem Selektor darstellt. Die Zahlen in den _ID_-Spalten der konkurrierenden Selektoren werden verglichen. Der Selektor mit dem höheren Wert in der _ID_-Spalte gewinnt, unabhängig von den Werten in den anderen Spalten. Im obigen Beispiel, obwohl der gelbe Selektor insgesamt mehr Komponenten hat, zählt nur der Wert der ersten Spalte.

Wenn die Nummer in den _ID_-Spalten der konkurrierenden Selektoren gleich ist, wird die nächste Spalte, _CLASS_, verglichen, wie unten gezeigt.

```css
#myElement {
  color: yellow; /* 1-0-0 */
}
#myApp [id="myElement"] {
  color: green; /* 1-1-0  - WINS!! */
}
```

Die _CLASS_-Spalte ist die Anzahl der Klassennamen, Attributselektoren und Pseudo-Klassen im Selektor. Wenn der Wert der _ID_-Spalte gleich ist, gewinnt der Selektor mit dem höheren Wert in der _CLASS_-Spalte, unabhängig vom Wert in der _TYPE_-Spalte. Dies wird im folgenden Beispiel gezeigt.

```css
:root input {
  color: green; /* 0-1-1 - WINS because CLASS column is greater */
}
html body main input {
  color: yellow; /* 0-0-4 */
}
```

Wenn die Nummern in den _CLASS_ und _ID_-Spalten der konkurrierenden Selektoren gleich sind, wird die _TYPE_-Spalte relevant. Die _TYPE_-Spalte ist die Anzahl der Elementtypen und Pseudo-Elemente im Selektor. Wenn die ersten beiden Spalten denselben Wert haben, gewinnt der Selektor mit der höheren Nummer in der _TYPE_-Spalte.

Wenn die konkurrierenden Selektoren denselben Wert in allen drei Spalten haben, tritt die Näherungsregel in Kraft, wobei die zuletzt deklarierte Stilregel Vorrang hat.

```css
input.myClass {
  color: yellow; /* 0-1-1 */
}
:root input {
  color: green; /* 0-1-1 WINS because it comes later */
}
```

### Die `:is()`, `:not()`, `:has()` und CSS-Verschachtelungsausnahmen

Die „matches-any“ Pseudo-Klasse {{CSSxRef(":is", ":is()")}}, die relationale Pseudo-Klasse {{CSSxRef(":has", ":has()")}} und die Negations-Pseudo-Klasse {{CSSxRef(":not", ":not()")}} werden _nicht_ als Pseudo-Klassen in der Spezifitätsgewichtungsberechnung berücksichtigt. Sie selbst tragen kein Gewicht zur Spezifizitätsgleichung bei. Die Selektorparameter, die in die Pseudo-Klassen-Klammern übergeben werden, sind jedoch Teil des Spezifitätsalgorithmus; das Gewicht der „matches-any“ und Negations-Pseudo-Klasse in der Spezifitätswert-Berechnung ist das Gewicht des Parameters [Gewichts](#kategorien_des_selektionsgewichts).

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

Beachten Sie, dass in der obigen CSS-Paarung das Spezifitätsgewicht, das von den `:is()`, `:has()` und `:not()` Pseudo-Klassen bereitgestellt wird, der Wert des Selektorparameters ist, nicht der Pseudo-Klasse.

Alle drei dieser Pseudo-Klassen akzeptieren komplexe Selektorlisten, eine Liste kommagetrennter Selektoren, als Parameter. Diese Funktion kann verwendet werden, um die Spezifität eines Selektors zu erhöhen:

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

Im obigen CSS-Codeblock haben wir `#fakeId` in den Selektoren eingeschlossen. Dieses `#fakeId` fügt jedem Paragraphen `1-0-0` zum Spezifitätsgewicht hinzu.

Wenn Sie komplexe Selektorlisten mit [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting) erstellen, verhält sich dies genau wie die `:is()` Pseudo-Klasse.

```css
p,
#fakeId {
  span {
    /* 1-0-1 */
  }
}
```

Im obigen Codeblock ist der komplexe Selektor `p, #fakeId` die Spezifität von `#fakeId` und auch das `span`, sodass dies eine Spezifität von `1-0-1` für sowohl `p span` als auch `#fakeId span` ergibt. Dies ist die äquivalente Spezifität wie der `:is(p, #fakeId) span` Selektor.

Im Allgemeinen möchten Sie die Spezifität auf ein Minimum reduzieren, aber wenn Sie die Spezifität eines Elements aus einem bestimmten Grund erhöhen müssen, können diese drei Pseudo-Klassen helfen.

```css
a:not(#fakeId#fakeId#fakeID) {
  color: blue; /* 3-0-1 */
}
```

In diesem Beispiel werden alle Links blau sein, es sei denn, sie werden durch eine Link-Deklaration mit 3 oder mehr IDs überschrieben, ein Farbwert, der ein `a` einschließt, beinhaltet das [`!important`-Flag](#the_!important_exception) oder wenn der Link eine [Inline-Stil](#inline-stile) Farbdeklaration hat. Wenn Sie eine solche Technik verwenden, fügen Sie einen Kommentar hinzu, der erklärt, warum der Hack erforderlich war.

### Inline-Stile

Inline-Stile, die einem Element hinzugefügt werden (z.B. `style="font-weight: bold;"`), überschreiben immer normale Stile in Autoren-Stilblättern und können daher als mit der höchsten Spezifität angesehen werden. Betrachten Sie Inline-Stile als mit einem Spezifitätsgewicht von `1-0-0-0`.

Der einzige Weg, Inline-Stile zu überschreiben, ist die Verwendung von `!important`.

Viele JavaScript-Frameworks und -Bibliotheken fügen Inline-Stile hinzu. Die Verwendung von `!important` mit einem sehr gezielten Selektor, wie z.B. einem Attributselektor unter Verwendung des Inline-Stils, ist eine Möglichkeit, diese Inline-Stile zu überschreiben.

```html
<p style="color: purple">…</p>
```

```css
p[style*="purple"] {
  color: rebeccapurple !important;
}
```

Stellen Sie sicher, einen Kommentar bei jeder Verwendung des wichtig-Flags hinzuzufügen, damit Code-Pfleger verstehen, warum ein CSS-Anti-Pattern verwendet wurde.

### Die `!important`-Ausnahme

CSS-Deklarationen, die als wichtig markiert sind, überschreiben alle anderen Deklarationen innerhalb derselben Kaskadenschicht und Ursprungs. Obwohl technisch gesehen [`!important`](/de/docs/Web/CSS/important) nichts mit Spezifität zu tun hat, interagiert es direkt mit Spezifität und der Kaskade. Es kehrt die [Kaskadenreihenfolge](/de/docs/Web/CSS/CSS_cascade/Cascade) der Stylesheets um.

Wenn sich Deklarationen aus demselben Ursprung und derselben Kaskadenschicht widersprechen und ein Eigenschaftswert das `!important`-Flag gesetzt hat, wird die wichtige Deklaration unabhängig von der Spezifität angewendet. Wenn widersprüchliche Deklarationen aus demselben Ursprung und derselben Kaskadenschicht mit `!important`-Flag auf dasselbe Element angewendet werden, wird die Deklaration mit einer höheren Spezifität angewendet.

Die Verwendung von `!important`, um die Spezifität zu überschreiben, wird als **schlechte Praxis** angesehen und sollte zu diesem Zweck vermieden werden. Das Verständnis und der effektive Einsatz von Spezifität und der Kaskade können jede Notwendigkeit für das `!important`-Flag beseitigen.

Anstatt `!important` zu verwenden, um fremden CSS zu überschreiben (von externen Bibliotheken wie Bootstrap oder normalize.css), importieren Sie die Drittanbieter-Skripte direkt in [Kaskadenebenen](/de/docs/Web/CSS/@layer). Wenn Sie `!important` in Ihrem CSS verwenden müssen, kommentieren Sie Ihre Verwendung, damit zukünftige Code-Pfleger wissen, warum die Deklaration als wichtig markiert wurde und wissen, dass sie nicht überschrieben werden sollte. Aber verwenden Sie definitiv nicht `!important`, wenn Sie Plugins oder Frameworks schreiben, die andere Entwickler ohne eigenen Einfluss einbinden müssen.

### Die `:where()`-Ausnahme

Die Spezifitätsanpassungs-Pseudo-Klasse {{CSSxRef(":where", ":where()")}} hat immer ihre Spezifität auf null gesetzt, `0-0-0`. Sie ermöglicht es, CSS-Selektoren sehr spezifisch in Bezug auf das anzuwendende Element zu machen, ohne dass eine Erhöhung der Spezifität erfolgt.

Wenn Sie Drittanbieter-CSS erstellen, das von Entwicklern verwendet werden soll, die keinen Zugriff darauf haben, Ihr CSS zu bearbeiten, wird es als gute Praxis angesehen, CSS mit der niedrigstmöglichen Spezifität zu erstellen. Wenn Ihr Thema zum Beispiel folgendes CSS enthält:

```css
:where(#defaultTheme) a {
  /* 0-0-1 */
  color: red;
}
```

Dann kann der Entwickler, der das Widget implementiert, die Linkfarbe einfach mit nur Typselektoren überschreiben.

```css
footer a {
  /* 0-0-2 */
  color: blue;
}
```

### Wie `@scope`-Blöcke die Spezifität beeinflussen

Das Einschließen eines Regelsets in einem `@scope`-Block beeinflusst die Spezifität seiner Selektoren nicht, unabhängig von den Selektoren innerhalb des Geltungsbereichswurzel und -limits. Zum Beispiel:

```css
@scope (.article-body) {
  /* img has a specificity of 0-0-1, as expected */
  img {
  }
}
```

Wenn Sie sich jedoch entscheiden, die `:scope`-Pseudo-Klasse explizit Ihren selektiven Selektoren voranzustellen, müssen Sie sie in die Berechnung ihrer Spezifität einbeziehen. `:scope`, wie alle regulären Pseudo-Klassen, hat eine Spezifität von 0-1-0. Zum Beispiel:

```css
@scope (.article-body) {
  /* :scope img has a specificity of 0-1-0 + 0-0-1 = 0-1-1 */
  :scope img {
  }
}
```

Wenn Sie den `&`-Selektor innerhalb eines `@scope`-Blocks verwenden, repräsentiert `&` den selektiven Wurzel-Selektor; intern wird er zu diesem Selektor umgeschrieben, der innerhalb eines {{cssxref(":is", ":is()")}}-Selectors eingewickelt ist. Zum Beispiel:

```css
@scope (figure, #primary) {
  & img {
  }
}
```

`& img` entspricht `:is(figure, #primary) img`.

Da `:is()` die Spezifität seines spezifischsten Arguments (`#primary` in diesem Fall) übernimmt, ist die Spezifität des selektiven `& img` daher 1-0-0 + 0-0-1 = 1-0-1.

## Tipps zum Umgang mit Spezifitätsproblemen

Anstatt `!important` zu verwenden, sollten Sie Kaskadenebenen verwenden und die Spezifität in Ihrem CSS insgesamt gering halten, damit Stile leicht mit leicht spezifischeren Regeln überschrieben werden können. Die Verwendung von semantischem HTML hilft, Ankerpunkte zu bieten, von denen aus gestylt werden kann.

### Selektoren spezifisch machen mit und ohne Hinzufügen von Spezifität

Indem Sie den Abschnitt des Dokuments angeben, den Sie stylen, bevor Sie das Element auswählen, wird die Regel spezifischer. Je nachdem, wie Sie ihn hinzufügen, können Sie etwas, viel oder keine Spezifität hinzufügen, wie unten gezeigt:

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

Unabhängig von der Reihenfolge wird die Überschrift grün, weil diese Regel die spezifischste ist.

#### Reduzierung der ID-Spezifität

Die Spezifität basiert auf der Form eines Selektors. Das Einschließen der `id` eines Elements als Attributselektor anstelle eines ID-Selektors ist eine gute Möglichkeit, ein Element spezifischer zu machen, ohne eine übermäßige Spezifität hinzuzufügen. Im vorherigen Beispiel zählt der Selektor `[id="myContent"]` als Attributselektor für den Zweck der Bestimmung der Spezifität des Selektors, auch wenn er eine ID auswählt.

Sie können auch die `id` oder einen Teil eines Selektors als Parameter in der `:where()`-Spezifitätsanpassungs-Pseudo-Klasse einfügen, wenn Sie einen Selektor spezifischer machen müssen, aber überhaupt keine Spezifität hinzufügen möchten.

### Erhöhung der Spezifität durch Duplizieren des Selektors

Als spezieller Fall zur Erhöhung der Spezifität können Sie Gewichte aus den _CLASS_- oder _ID_-Spalten duplizieren. Durch Duplizieren von ID-, Klassen-, Pseudo-Klasse- oder Attributselektoren innerhalb eines zusammengesetzten Selektors wird die Spezifität erhöht, wenn sehr spezifische Selektoren überschrieben werden, auf die Sie keinen Einfluss haben.

```css
#myId#myId#myId span {
  /* 3-0-1 */
}
.myClass.myClass.myClass span {
  /* 0-3-1 */
}
```

Verwenden Sie dies sparsam, wenn überhaupt. Wenn Sie Selektorduplikation verwenden, kommentieren Sie immer Ihr CSS.

Durch die Verwendung von `:is()` und `:not()` (und auch `:has()`) können Sie die Spezifität erhöhen, selbst wenn Sie keine `id` einem Elternelement hinzufügen können:

```css
:not(#fakeID#fakeId#fakeID) span {
  /* 3-0-1 */
}
:is(#fakeID#fakeId#fakeID, span) {
  /* 3-0-0 */
}
```

### Vorrang gegenüber Drittanbieter-CSS

Das Ausnutzen von Kaskadenebenen ist der standardmäßige Weg, eine Menge von Stilen vorzuziehen, ohne spezifisch zu werden. Kaskadenebenen ermöglichen dies ohne die Verwendung von Spezifität! Normale (nicht wichtige) Autorenstile, die in Kaskadenebenen importiert werden, haben eine geringere Priorität als nicht in Ebenen gruppierte Autorenstile.

Wenn Stile aus einem Stylesheet stammen, das Sie nicht bearbeiten können oder nicht verstehen und Sie Stile überschreiben müssen, ist eine Strategie, die Stile, über die Sie keine Kontrolle haben, in eine Kaskadenschicht zu importieren. Stile in anschließend deklarierten Schichten haben Vorrang vor allen nicht geschichteten Stilen aus demselben Ursprung.

Wenn zwei Selektoren aus verschiedenen Schichten dasselbe Element anvisieren, haben Ursprung und Wichtigkeit Vorrang; die Spezifität des Selektors im verlierenden Stylesheet ist irrelevant.

```css
@import "TW.css" layer();
p,
p * {
  font-size: 1rem;
}
```

Im obigen Beispiel wird der gesamte Absatztext, einschließlich des eingebetteten Inhalts, auf `1rem` gesetzt, unabhängig davon, wie viele Klassennamen die Absätze haben, die mit dem TW Stylesheet übereinstimmen.

### Vermeidung und Überschreiben von `!important`

Der beste Ansatz ist, `!important` nicht zu verwenden. Die obigen Erklärungen zur Spezifität sollten hilfreich sein, um den Einsatz des Flags zu vermeiden und es ganz zu entfernen, wenn es gefunden wird.

Um das wahrgenommene Bedürfnis nach `!important` zu beseitigen, können Sie Folgendes tun:

- Erhöhen Sie die Spezifität des Selektors der ehemals `!important`-Deklaration, sodass sie größer als die anderen Deklarationen ist
- Geben Sie ihm die gleiche Spezifität und platzieren Sie ihn nach der Deklaration, die er überschreiben soll
- Reduzieren Sie die Spezifität des Selektors, den Sie überschreiben möchten.

Alle diese Methoden sind in den vorherigen Abschnitten abgedeckt.

Wenn Sie nicht in der Lage sind, `!important`-Flags aus einer Autoren-Stylesheet zu entfernen, ist die einzige Lösung, um die wichtigen Stile zu überschreiben, die Verwendung von `!important`. Das Erstellen einer [Kaskadenschicht](/de/docs/Web/CSS/@layer) von wichtigen Deklarationsüberschreibungen ist eine ausgezeichnete Lösung. Zwei Möglichkeiten, dies zu tun, sind:

#### Methode 1

1. Erstellen Sie ein separates, kurzes Stylesheet, das nur wichtige Deklarationen enthält, die speziell eine der wichtigen Deklarationen überschreiben, die Sie nicht entfernen konnten.
2. Importieren Sie dieses Stylesheet als die erste Importierung in Ihrem CSS mit `layer()`, einschließlich der `@import`-Anweisung, bevor andere Stylesheets verlinkt werden. Dies stellt sicher, dass die wichtigen Überschreibungen als erste Schicht importiert werden.

```css
@import "importantOverrides.css" layer();
```

#### Methode 2

1. Erstellen Sie am Anfang Ihrer Stylesheet-Deklarationen eine benannte Kaskadenschicht, wie folgt:

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

Die Spezifität des Selektors des wichtigen Stils innerhalb der Schicht kann niedrig sein, solange sie das Element trifft, das Sie überschreiben möchten. Normale Schichten sollten außerhalb der Schicht deklariert werden, da geschichtete Stile eine geringere Priorität als ungeschichtete Stile haben.

### Ignorieren der Baum-Nähe

Die Nähe eines Elements zu anderen Elementen, die in einem gegebenen Selektor referenziert werden, hat keinen Einfluss auf die Spezifität.

```css
body h1 {
  color: green;
}

html h1 {
  color: purple;
}
```

Die `<h1>`-Elemente werden lila sein, weil, wenn Deklarationen dieselbe Spezifität haben, der zuletzt deklarierte Selektor Vorrang hat.

### Direkt gezielte Elemente vs. geerbte Stile

Stile für ein direkt gezieltes Element haben immer Vorrang vor geerbten Stilen, unabhängig von der Spezifität der erbten Regel. Angenommen, die folgende CSS und HTML ist:

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

Das `h1` wird lila sein, weil der `h1`-Selektor das Element spezifisch anvisiert, während das Grün vom `#parent`-Deklarationen geerbt wird.

## Beispiele

Im folgenden CSS haben wir drei Selektoren, die {{HTMLElement('input')}}-Elemente anvisieren, um eine Farbe festzulegen. Für einen gegebenen Input ist das Spezifitätsgewicht der Farbdarstellung mit Vorrang der übereinstimmende Selektor mit dem größten Gewicht:

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

Wenn die obigen Selektoren alle dasselbe Input anvisieren, wird das Input rot sein, da die erste Deklaration den höchsten Wert in der _ID_-Spalte hat.

Der letzte Selektor hat vier _TYPE_-Komponenten. Während er den höchsten Ganzzahlwert hat, haben Typkomponenten niemals Vorrang vor _CLASS_-Komponenten, egal wie viele Elemente und Pseudo-Elemente enthalten sind, selbst wenn es 150 wären. Die Spaltenwerte werden von links nach rechts verglichen, wenn Spaltenwerte gleich sind.

Hätten wir den ID-Selektor im obigen Beispielcode in einen Attributselektor umgewandelt, hätten die ersten beiden Selektoren dieselbe Spezifität, wie unten gezeigt:

```css
[id="myElement"] input.myClass {
  color: red;
} /* 0-2-1 */
input[type="password"]:required {
  color: blue;
} /* 0-2-1 */
```

Wenn mehrere Deklarationen die gleiche Spezifität haben, wird die letzte in der CSS gefundene Deklaration auf das Element angewendet. Wenn beide Selektoren dasselbe {{HTMLElement('input')}} anvisieren, wird die Farbe blau sein.

## Zusätzliche Hinweise

Einige Dinge, die man sich über Spezifität merken sollte:

1. Spezifität gilt nur, wenn dasselbe Element durch mehrere Deklarationen in derselben Kaskadenschicht oder Ursprung anvisiert wird. Spezifität zählt nur für Deklarationen derselben Wichtigkeit und desselben Ursprungs und [Kaskadenschicht](/de/docs/Web/CSS/@layer). Wenn übereinstimmende Selektoren in verschiedenen Ursprüngen sind, bestimmt die [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade), welche Deklaration Vorrang hat.

2. Wenn zwei Selektoren in derselben Kaskadenschicht und Ursprung dieselbe Spezifität haben, wird dann die Scoped-Nähe berechnet; das Regelset mit der niedrigsten Scoped-Nähe gewinnt. Siehe [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) für weitere Details und ein Beispiel.

3. Wenn die Scoped-Nähe für beide Selektoren auch gleich ist, kommt die Quellreihenfolge ins Spiel. Wenn alles andere gleich ist, gewinnt der letzte Selektor.

4. Laut den CSS-Regeln haben [direkt angezielte Elemente](#direkt_gezielte_elemente_vs._geerbte_stile) stets Vorrang vor Regeln, die ein Element von seinem Vorfahren erbt.

5. [Nähe von Elementen](#ignorieren_der_baum-nähe) im Dokumentbaum hat keinen Einfluss auf die Spezifität.

## Spezifikationen

{{Specifications}}

## Siehe auch

- ["Spezifität" in "Umgang mit Konflikten"](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity_2)
- [SpeciFISHity](https://specifishity.com/)
- [Specificity Calculator](https://specificity.keegan.st/): Eine interaktive Website zum Testen und Verstehen Ihrer eigenen CSS-Regeln
- [_ID-CLASS-TYPE_ Übung](https://estelle.github.io/CSS/selectors/exercises/specificity.html) ein Spezifitätsquiz
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax) Leitfaden
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
- [Fehlerbehandlung in CSS](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Anfangs](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value), [berechnet](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value), [verwendet](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value), und [tatsächliche](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value) Werte
- [Wertedefinitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [CSS-Verschachtelungsmodul](/de/docs/Web/CSS/CSS_nesting)
