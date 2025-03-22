---
title: Spezifität
slug: Web/CSS/CSS_cascade/Specificity
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{CSSRef}}

**Spezifität** ist der Algorithmus, den Browser verwenden, um die [CSS-Deklaration](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#css_syntax_basics) zu bestimmen, die für ein Element am relevantesten ist. Dies bestimmt wiederum den Eigenschaftswert, der auf das Element angewendet wird. Der Spezifitäts-Algorithmus berechnet das Gewicht eines [CSS-Selektors](/de/docs/Web/CSS/Reference#selectors), um zu bestimmen, welche Regel aus konkurrierenden CSS-Deklarationen auf ein Element angewendet wird.

> [!NOTE]
> Browser berücksichtigen die Spezifität **nach** der Bestimmung von [Cascade-Ursprung und Wichtigkeit](/de/docs/Web/CSS/CSS_cascade/Cascade). Mit anderen Worten, bei konkurrierenden Eigenschaftsdeklarationen ist die Spezifität nur zwischen Selektoren relevant, die aus demselben [Cascade-Ursprung und Ebene](/de/docs/Web/CSS/@layer) stammen und für die Eigenschaft Vorrang haben. [Bereichsnähe](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) und Reihenfolge des Auftretens werden relevant, wenn die Selektor-Spezifitäten der konkurrierenden Deklarationen in der Cascade-Ebene mit Vorrang gleich sind.

## Wie wird die Spezifität berechnet?

Spezifität ist ein Algorithmus, der das Gewicht berechnet, das auf eine gegebene CSS-Deklaration angewendet wird. Das Gewicht wird durch die Anzahl der [Selektoren jeder Gewichtskategorie](#selektor-gewichtskategorien) im Selektor bestimmt, der mit dem Element (oder Pseudo-Element) übereinstimmt. Wenn es zwei oder mehr Deklarationen gibt, die unterschiedliche Eigenschaftswerte für dasselbe Element bereitstellen, wird der Deklarationswert im Stilblock mit dem übereinstimmenden Selektor mit dem größten algorithmischen Gewicht angewendet.

Der Spezifitäts-Algorithmus ist im Wesentlichen ein dreispaltiger Wert von drei Kategorien oder Gewichten - ID, CLASS und TYPE -, die den drei Typen von Selektoren entsprechen. Der Wert stellt die Anzahl der Selektorkomponenten in jeder Gewichtskategorie dar und wird als _ID - CLASS - TYPE_ geschrieben. Die drei Spalten werden durch Zählen der Anzahl der Selektorkomponenten für jede Selektor-Gewichtskategorie in den Selektoren erstellt, die mit dem Element übereinstimmen.

### Selektor-Gewichtskategorien

Die Selektor-Gewichtskategorien sind hier in abnehmender Spezifität aufgelistet:

- ID-Spalte
  - : Beinhaltet nur [ID-Selektoren](/de/docs/Web/CSS/ID_selectors), wie `#example`. Für jede ID in einem übereinstimmenden Selektor addieren Sie 1-0-0 zum Gewichtswert.
- CLASS-Spalte
  - : Beinhaltet [Klassenselektoren](/de/docs/Web/CSS/Class_selectors), wie `.myClass`, Attributselektoren wie `[type="radio"]` und `[lang|="fr"]`, und Pseudo-Klassen, wie `:hover`, `:nth-of-type(3n)`, und `:required`. Für jede Klasse, jeden Attributselektor oder jede Pseudo-Klasse in einem übereinstimmenden Selektor addieren Sie 0-1-0 zum Gewichtswert.
- TYPE-Spalte
  - : Beinhaltet [Typselektoren](/de/docs/Web/CSS/Type_selectors), wie `p`, `h1`, und `td`, und Pseudo-Elemente wie `::before`, `::placeholder`, und alle anderen Selektoren mit Doppelpunkt-Notation. Für jede Art oder jedes Pseudo-Element in einem übereinstimmenden Selektor addieren Sie 0-0-1 zum Gewichtswert.
- Kein Wert
  - : Der universelle Selektor ({{CSSxRef("Universal_selectors", "*")}}) und die Pseudo-Klasse {{CSSxRef(":where", ":where()")}} und ihre Parameter werden bei der Gewichtsberechnung nicht gezählt, sodass ihr Wert 0-0-0 ist, aber sie stimmen dennoch mit Elementen überein. Diese Selektoren beeinflussen den Spezifizitäts-Gewichtswert nicht.

Kombinatoren, wie {{CSSxRef("Next-sibling_combinator", "+")}}, {{CSSxRef("Child_combinator", "&gt;")}}, {{CSSxRef("Subsequent-sibling_combinator", "~")}}, [" "](/de/docs/Web/CSS/Descendant_combinator), und {{CSSxRef("Column_combinator", "||")}}, können einen Selektor spezifischer machen, in dem, was ausgewählt wird, aber sie fügen dem Spezifitäts-Gewicht keinen Wert hinzu.

Der `&`-Verschachtelungs-Kombinator erhöht nicht das Spezifizitätsgewicht, aber verschachtelte Regeln schon. In Bezug auf Spezifität und Funktionalität ist Verschachtelung sehr ähnlich zur {{CSSxRef(":is", ":is()")}}-Pseudo-Klasse.

Wie die Verschachtelung fügen die Pseudo-Klassen {{CSSxRef(":is", ":is()")}}, {{CSSxRef(":has", ":has()")}}, und die Negation ({{CSSxRef(":not", ":not()")}}) selbst kein Gewicht hinzu. Die Parameter in diesen Selektoren dagegen schon. Das Spezifizitätsgewicht ergibt sich aus dem Selektor-Parameter in der Liste der Selektoren mit der höchsten Spezifität. Ebenso ergibt sich bei verschachtelten Selektoren das vom verschachtelten Selektor-Komponente hinzugefügte Spezifizitätsgewicht aus dem Selektor in der kommagetrennten Liste verschachtelter Selektoren mit der höchsten Spezifität.

Die [`:not()`, `:is()`, `:has()` und CSS-Verschachtelungsausnahmen](#the_is_not_has_and_css_nesting_exceptions) werden unten diskutiert.

#### Übereinstimmender Selektor

Das Spezifizitätsgewicht stammt vom übereinstimmenden Selektor. Nehmen Sie diesen CSS-Selektor mit drei kommagetrennten Selektoren als Beispiel:

```css
[type="password"],
input:focus,
:root #myApp input:required {
  color: blue;
}
```

Der `[type="password"]`-Selektor in der obigen Selektorliste, mit einem Spezifizitätsgewicht von `0-1-0`, wendet die `color: blue`-Deklaration auf alle Passworteingabetypen an.

Alle Eingaben, unabhängig vom Typ, die den Fokus erhalten, stimmen mit dem zweiten Selektor in der Liste, `input:focus`, mit einem Spezifizitätsgewicht von `0-1-1` überein; dieses Gewicht setzt sich aus der `:focus`-Pseudo-Klasse (0-1-0) und dem `input`-Typ (0-0-1) zusammen. Wenn das Passworteingabefeld im Fokus steht, wird es `input:focus` entsprechen, und das Spezifizitätsgewicht für die `color: blue`-Stildeklaration beträgt `0-1-1`. Wenn das Passwort nicht im Fokus steht, bleibt das Spezifizitätsgewicht bei `0-1-0`.

Die Spezifizität für eine erforderliche Eingabe, die in einem Element mit Attribut `id="myApp"` verschachtelt ist, beträgt `1-2-1`, basierend auf einer ID, zwei Pseudo-Klassen und einem Elementtyp.

Wenn der Passworteingabetyp mit `required` in einem Element mit gesetztem `id="myApp"` verschachtelt ist, beträgt das Spezifizitätsgewicht `1-2-1`, basierend auf einer ID, zwei Pseudo-Klassen und einem Elementtyp, unabhängig davon, ob es den Fokus hat oder nicht. Warum ist das Spezifizitätsgewicht in diesem Fall `1-2-1` anstelle von `0-1-1` oder `0-1-0`? Weil das Spezifizitätsgewicht aus dem übereinstimmenden Selektor mit dem größten Spezifizitätsgewicht kommt. Das Gewicht wird durch den Vergleich der Werte in den drei Spalten von links nach rechts bestimmt.

```css
[type="password"]             /* 0-1-0 */
input:focus                   /* 0-1-1 */
:root #myApp input:required   /* 1-2-1 */
```

### Dreispaltenvergleich

Sobald die Spezifizitätswerte der relevanten Selektoren bestimmt sind, werden die Anzahl der Selektorkomponenten in jeder Spalte von links nach rechts verglichen.

```css
#myElement {
  color: green; /* 1-0-0  - WINS!! */
}
.bodyClass .sectionClass .parentClass [id="myElement"] {
  color: yellow; /* 0-4-0 */
}
```

Die erste Spalte ist der Wert der _ID_-Komponente, die die Anzahl der IDs in jedem Selektor darstellt. Die Zahlen in den _ID_-Spalten konkurrierender Selektoren werden verglichen. Der Selektor mit dem höheren Wert in der _ID_-Spalte gewinnt, unabhängig davon, welche Werte in den anderen Spalten stehen. Im obigen Beispiel ist es irrelevant, dass der gelbe Selektor insgesamt mehr Komponenten hat, nur der Wert der ersten Spalte zählt.

Wenn die Anzahl in den _ID_-Spalten konkurrierender Selektoren gleich ist, wird die nächste Spalte, _CLASS_, verglichen, wie unten gezeigt.

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

Wenn die Zahlen in den _CLASS_- und _ID_-Spalten konkurrierender Selektoren gleich sind, wird die _TYPE_-Spalte relevant. Die _TYPE_-Spalte ist die Anzahl der Elementtypen und Pseudo-Elemente im Selektor. Wenn die ersten beiden Spalten den gleichen Wert haben, gewinnt der Selektor mit der höheren Zahl in der _TYPE_-Spalte.

Wenn die konkurrierenden Selektoren die gleichen Werte in allen drei Spalten haben, kommt die Nähe-Regel ins Spiel, wobei der zuletzt deklarierte Stil den Vorzug erhält.

```css
input.myClass {
  color: yellow; /* 0-1-1 */
}
:root input {
  color: green; /* 0-1-1 WINS because it comes later */
}
```

### Die `:is()`, `:not()`, `:has()` und CSS-Verschachtelungsausnahmen

Die Pseudo-Klasse für Übereinstimmungen {{CSSxRef(":is", ":is()")}}, die relationale Pseudo-Klasse {{CSSxRef(":has", ":has()")}}, und die Negations-Pseudo-Klasse {{CSSxRef(":not", ":not()")}} werden bei der Spezifizitätsgewicht-Berechnung _nicht_ als Pseudo-Klassen angesehen. Sie selbst fügen der Spezifikationsgleichung kein Gewicht hinzu. Jedoch sind die Selektor-Parameter, die in die Pseudo-Klasse Klammern übergeben werden, Teil des Spezifitätsalgorithmus; das Gewicht der Übereinstimmung und Negations-Pseudo-Klasse in der Spezifizitätswerte-Berechnung ist das Gewicht des Parameters [Gewicht](#selektor-gewichtskategorien).

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

Beachten Sie, dass im obigen CSS-Paar, das Spezifizitätsgewicht, das durch die `:is()`, `:has()` und `:not()` Pseudo-Klassen bereitgestellt wird, der Wert des Selektor-Parameters ist, nicht der Pseudo-Klasse.

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

Im obigen CSS-Codeblock haben wir `#fakeId` in die Selektoren aufgenommen. Dieses `#fakeId` fügt jedem Paragraphen `1-0-0` zum Spezifizitätsgewicht hinzu.

Beim Erstellen komplexer Selektorlisten mit [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting) funktioniert dies genauso wie die `:is()`-Pseudo-Klasse.

```css
p,
#fakeId {
  span {
    /* 1-0-1 */
  }
}
```

Im obigen Codeblock ist das komplexe Selektor `p, #fakeId`, die Spezifizität wird von `#fakeId` und auch von `span` übernommen, sodass dies eine Spezifizität von `1-0-1` sowohl für `p span` als auch für `#fakeId span` erzeugt. Dies ist die gleiche Spezifizität wie der `:is(p, #fakeId) span` Selektor.

Generell möchten Sie die Spezifität auf ein Minimum beschränken, aber wenn Sie die Spezifität eines Elements aus einem bestimmten Grund erhöhen müssen, können diese drei Pseudo-Klassen helfen.

```css
a:not(#fakeId#fakeId#fakeID) {
  color: blue; /* 3-0-1 */
}
```

In diesem Beispiel werden alle Links blau, es sei denn, sie werden durch eine Link-Deklaration mit 3 oder mehr IDs, einen Farbwert, der ein `a` enthält, das die [`!important`-Flagge](#the_!important_exception) enthält, überschrieben, oder wenn der Link eine [Inline-Stil](#inline-stile) Farbdeklaration hat. Wenn Sie eine solche Technik verwenden, fügen Sie einen Kommentar hinzu, um zu erklären, warum der Trick benötigt wurde.

### Inline-Stile

Inline-Stile, die einem Element hinzugefügt werden (z. B. `style="font-weight: bold;"`), überschreiben immer alle normalen Stile in Autoren-Stilblättern und können daher als am spezifischsten angesehen werden. Denken Sie an Inline-Stile als hätten sie ein Spezifizitätsgewicht von `1-0-0-0`.

Der einzige Weg, Inline-Stile zu überschreiben, ist, `!important` zu verwenden.

Viele JavaScript-Frameworks und -Bibliotheken fügen Inline-Stile hinzu. Das Verwenden von `!important` mit einem sehr zielgerichteten Selektor, wie einem Attributselektor, der den Inline-Stil verwendet, ist eine Möglichkeit, diese Inline-Stile zu überschreiben.

```html
<p style="color: purple">…</p>
```

```css
p[style*="purple"] {
  color: rebeccapurple !important;
}
```

Stellen Sie sicher, dass Sie einen Kommentar zu jedem Einschluss der wichtigen Flagge hinzufügen, damit Code-Pfleger verstehen, warum ein CSS-Anti-Pattern verwendet wurde.

### Die `!important`-Ausnahme

CSS-Deklarationen, die als wichtig markiert sind, überschreiben alle anderen Deklarationen innerhalb derselben Cascade-Schicht und Ursprungs. Obwohl technisch gesehen [`!important`](/de/docs/Web/CSS/important) nichts mit Spezifität zu tun hat, interagiert es direkt mit der Spezifität und der Cascade. Es kehrt die [Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade)-Reihenfolge der Stylesheets um.

Wenn Deklarationen aus demselben Ursprung und derselben Cascade-Schicht in Konflikt stehen und ein Eigenschaftswert das `!important`-Flag gesetzt hat, wird die wichtige Deklaration angewendet, unabhängig von der Spezifität. Wenn konkurrierende Deklarationen aus demselben Ursprung und derselben Cascade-Schicht mit dem `!important`-Flag auf dasselbe Element angewendet werden, wird die Deklaration mit einer größeren Spezifität angewendet.

`!important` zu verwenden, um Spezifität zu überschreiben, wird als **schlechte Praxis** angesehen und sollte zu diesem Zweck vermieden werden. Das Verstehen und effektive Verwenden von Spezifität und der Cascade kann jeglichen Bedarf für das `!important`-Flag beseitigen.

Anstatt `!important` zu verwenden, um fremdes CSS (von externen Bibliotheken, wie Bootstrap oder normalize.css) zu überschreiben, importieren Sie die Drittanbieter-Skripte direkt in [Cascade-Schichten](/de/docs/Web/CSS/@layer). Wenn Sie `!important` in Ihrem CSS verwenden müssen, kommentieren Sie Ihre Verwendung, damit zukünftige Code-Pfleger wissen, warum die Deklaration als wichtig markiert wurde und wissen, dass sie nicht überschrieben werden soll. Verwenden Sie jedoch definitiv nicht `!important`, wenn Sie Plugins oder Frameworks schreiben, die andere Entwickler einbauen müssen, ohne sie kontrollieren zu können.

### Die `:where()`-Ausnahme

Die Spezifizitätsanpassungs-Pseudo-Klasse {{CSSxRef(":where", ":where()")}} wird immer durch null, `0-0-0`, ersetzt. Sie ermöglicht es, CSS-Selektoren sehr spezifisch zu machen, ohne jegliche Erhöhung der Spezifität.

Beim Erstellen von Drittanbieter-CSS, das von Entwicklern verwendet werden soll, die keinen Zugang haben, Ihr CSS zu bearbeiten, wird es als gute Praxis angesehen, CSS mit der niedrigstmöglichen Spezifität zu erstellen. Zum Beispiel, wenn Ihr Thema das folgende CSS enthält:

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

### Wie `@scope`-Blöcke die Spezifität beeinflussen

Einschließen einer Regel innerhalb eines `@scope`-Blocks beeinflusst nicht die Spezifizität seines Selektors, unabhängig von den Selektoren, die im Bereichswurzel und -limit verwendet werden. Zum Beispiel:

```css
@scope (.article-body) {
  /* img has a specificity of 0-0-1, as expected */
  img { ... }
}
```

Wenn Sie jedoch entscheiden, die `:scope`-Pseudo-Klasse explizit Ihren umschlossenen Selektoren voranzustellen, müssen Sie dies bei der Berechnung ihrer Spezifität berücksichtigen. `:scope`, wie alle regulären Pseudo-Klassen, hat eine Spezifizität von 0-1-0. Zum Beispiel:

```css
@scope (.article-body) {
  /* :scope img has a specificity of 0-1-0 + 0-0-1 = 0-1-1 */
  :scope img { ... }
}
```

Beim Verwenden des `&`-Selektors innerhalb eines `@scope`-Blocks stellt `&` den Bereichswurzel-Selektor dar; er wird intern zu diesem Selektor umgeschrieben, der in einem {{cssxref(":is", ":is()")}}-Selektor eingeschlossen ist. Zum Beispiel, in:

```css
@scope (figure, #primary) {
  & img { ... }
}
```

ist `& img` äquivalent zu `:is(figure, #primary) img`.

Da `:is()` die Spezifizität seines spezifischsten Arguments übernimmt (`#primary` in diesem Fall), beträgt die Spezifizität des umschlossenen `& img`-Selektors daher 1-0-0 + 0-0-1 = 1-0-1.

## Tipps zur Handhabung von Spezifitäts-Kopfschmerzen

Anstatt `!important` zu verwenden, ziehen Sie es in Betracht, Cascade-Schichten zu verwenden und niedrig gewichtete Spezifität durchgängig in Ihrem CSS zu verwenden, sodass Stile leicht mit etwas spezifischeren Regeln überschrieben werden können. Die Verwendung von semantischem HTML hilft, Anker bereitzustellen, aus denen das Styling angewendet wird.

### Selektoren spezifisch machen, mit und ohne Hinzufügen von Spezifität

Indem Sie den Abschnitt des Dokuments angeben, den Sie vor dem Element, das Sie auswählen, gestalten möchten, wird die Regel spezifischer. Abhängig davon, wie Sie es hinzufügen, können Sie einige, viele oder keine Spezifität hinzufügen, wie unten gezeigt:

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

Unabhängig von der Reihenfolge wird die Überschrift grün, weil diese Regel am spezifischsten ist.

#### IDs Spezifität reduzieren

Spezifität basiert auf der Form eines Selektors. Das Einschließen der `id` eines Elements als Attributselektor anstelle eines id-Selektors ist eine gute Möglichkeit, ein Element spezifischer zu machen, ohne eine Überfülle an Spezifität hinzuzufügen. Im vorherigen Beispiel zählt der Selektor `[id="myContent"]` als Attributselektor zum Zweck der Bestimmung der Spezifität des Selektors, obwohl es eine ID auswählt.

Sie können auch die `id` oder einen Teil eines Selektors als Parameter in der `:where()`-Spezifizitätsanpassungs-Pseudo-Klasse einschließen, wenn Sie einen Selektor spezifischer machen müssen, aber keine Spezifität hinzufügen möchten.

### Spezifität durch Duplizieren von Selektoren erhöhen

Als Spezialfall zur Erhöhung der Spezifität können Sie Gewichte aus den _CLASS_- oder _ID_-Spalten duplizieren. Das Duplizieren von id-, Klassen-, Pseudo-Klassen- oder Attributselektoren innerhalb eines zusammengesetzten Selektors erhöht die Spezifität, wenn sehr spezifische Selektoren überschrieben werden müssen, über die Sie keine Kontrolle haben.

```css
#myId#myId#myId span {
  /* 3-0-1 */
}
.myClass.myClass.myClass span {
  /* 0-3-1 */
}
```

Verwenden Sie dies sparsam, wenn überhaupt. Wenn Sie Selektor-Duplikation verwenden, kommentieren Sie immer Ihr CSS.

Durch die Verwendung von `:is()` und `:not()` (und auch `:has()`), können Sie die Spezifität erhöhen, selbst wenn Sie keine `id` zu einem übergeordneten Element hinzufügen können:

```css
:not(#fakeID#fakeId#fakeID) span {
  /* 3-0-1 */
}
:is(#fakeID#fakeId#fakeID, span) {
  /* 3-0-0 */
}
```

### Vorrang vor Drittanbieter-CSS

Das Nutzen von Cascade-Schichten ist die Standardmethode, um einen Satz von Stilen über einen anderen Satz von Stilen Vorrang haben zu lassen; Cascade-Schichten ermöglichen dies ohne Spezifität! Normale (nicht wichtige) Autorenstile, die in Cascade-Schichten importiert werden, haben eine niedrigere Vorrangstellung als nicht geschichtete Autorenstile.

Wenn Stile aus einem Stylesheet stammen, das Sie nicht bearbeiten oder nicht verstehen können und Sie Stile überschreiben müssen, ist eine Strategie, die Stile, die Sie nicht kontrollieren können, in eine Cascade-Schicht zu importieren. Stile in nachträglich erklärten Schichten haben Vorrang, wobei nicht geschichtete Stile Vorrang vor allen geschichteten Stilen aus demselben Ursprung haben.

Wenn zwei Selektoren aus verschiedenen Schichten dasselbe Element treffen, haben Ursprung und Wichtigkeit Vorrang; die Spezifität des Selektors im verlierenden Stylesheet ist irrelevant.

```html
<style>
  @import TW.css layer();
  p,
  p * {
    font-size: 1rem;
  }
</style>
```

In obigem Beispiel wird aller Text in Absätzen, einschließlich des verschachtelten Inhalts, `1rem`, unabhängig davon, wie viele Klassennamen die Absätze haben, die mit dem TW-Stylesheet übereinstimmen.

### Vermeidung und Überschreibung von `!important`

Der beste Ansatz ist es, `!important` nicht zu verwenden. Die obigen Erklärungen zur Spezifität sollten hilfreich sein, um das Verwenden des Flags zu vermeiden und es vollständig zu entfernen, wenn es auftritt.

Um das wahrgenommene Bedürfnis nach `!important` zu beseitigen, können Sie eine der folgenden Maßnahmen ergreifen:

- Erhöhen Sie die Spezifität des Selektors der vormals `!important`-Deklaration, sodass sie größer ist als andere Deklarationen
- Vergeben Sie ihm dieselbe Spezifität und platzieren Sie es nach der Deklaration, die Sie überschreiben möchten
- Verringern Sie die Spezifität des Selektors, den Sie überschreiben möchten.

Alle diese Methoden sind in den vorherigen Abschnitten behandelt.

Wenn es Ihnen nicht möglich ist, `!important`-Flags aus einem Autoren-Stylesheet zu entfernen, ist die einzige Lösung, um die wichtigen Stile zu überschreiben, `!important` zu verwenden. Das Erstellen einer [Cascade-Schicht](/de/docs/Web/CSS/@layer) von wichtigen Deklarationsüberschreibungen ist eine ausgezeichnete Lösung. Zwei Methoden dafür sind:

#### Methode 1

1. Erstellen Sie ein separates, kurzes Stylesheet, das nur wichtige Deklarationen speziell zur Verschiebung der von Ihnen nicht entfernten wichtigen Deklarationen enthält.
2. Importieren Sie dieses Stylesheet als den ersten Import in Ihrem CSS unter Verwendung von `layer()`, einschließlich der `@import`-Anweisung, bevor Sie auf andere Stylesheets verweisen. Dies soll sicherstellen, dass die wichtigen Überschreibungen als erste Schicht importiert werden.

```html
<style>
  @import importantOverrides.css layer();
</style>
```

#### Methode 2

1. Erstellen Sie zu Beginn Ihrer Stylesheet-Deklarationen eine benannte Cascade-Schicht, so:

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

Die Spezifizität des Selektors des wichtigen Stils innerhalb der Schicht kann niedrig sein, solange sie mit dem Element übereinstimmt, das Sie überschreiben möchten. Normale Schichten sollten außerhalb der Schicht erklärt werden, da geschichtete Styles eine niedrigere Vorrangstellung als nicht geschichtete Styles haben.

### Baum-Nähe-Ignoranz

Die Nähe eines Elements zu anderen Elementen, die in einem bestimmten Selektor referenziert werden, hat keinen Einfluss auf die Spezifität.

```css
body h1 {
  color: green;
}

html h1 {
  color: purple;
}
```

Die `<h1>`-Elemente werden lila, denn wenn Deklarationen dieselbe Spezifität haben, hat der zuletzt deklarierte Selektor Vorrang.

### Direkt abgezielte Elemente vs. geerbte Stile

Stile für ein direkt abgezieltes Element haben immer Vorrang vor geerbten Stilen, unabhängig von der Spezifität der geerbten Regel. Angenommen, folgendes CSS und HTML:

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

Das `h1` wird lila, weil der `h1` Selektor das Element direkt anspricht, während das Grün von den `#parent` Deklarationen geerbt wird.

## Beispiele

Im folgenden CSS haben wir drei Selektoren, die {{HTMLElement('input')}} Elemente anvisieren, um eine Farbe festzulegen. Für ein gegebenes Eingabeelement ist das Spezifizitätsgewicht der Farbe-Deklaration mit Vorrang der übereinstimmende Selektor mit dem größten Gewicht:

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

Wenn die obigen Selektoren dasselbe Eingabeelement anvisieren, wird das Eingabeelement rot, da die erste Deklaration den höchsten Wert in der _ID_-Spalte hat.

Der letzte Selektor hat vier _TYPE_-Komponenten. Obwohl er den höchsten ganzzahligen Wert hat, gewinnen _TYPE_-Komponenten unabhängig von der Anzahl der enthaltenen Elemente und Pseudo-Elemente, auch wenn es 150 wären, nie Vorrang vor _CLASS_-Komponenten. Die Spaltenwerte werden von links nach rechts verglichen, wenn die Spaltenwerte gleich sind.

Hätten wir den ID-Selektor im obigen Beispiels-Code in einen Attributselektor umgewandelt, hätten die ersten beiden Selektoren dieselbe Spezifität, wie unten gezeigt:

```css
[id="myElement"] input.myClass {
  color: red;
} /* 0-2-1 */
input[type="password"]:required {
  color: blue;
} /* 0-2-1 */
```

Wenn mehrere Deklarationen die gleiche Spezifität haben, wird die letzte Deklaration im CSS auf das Element angewendet. Wenn beide Selektoren mit demselben {{HTMLElement('input')}} übereinstimmen, wird die Farbe blau.

## Zusätzliche Anmerkungen

Einige Dinge, die Sie über Spezifität im Kopf behalten sollten:

1. Spezifität gilt nur, wenn dasselbe Element von mehreren Deklarationen in derselben Cascade-Schicht oder demselben Ursprung angesprochen wird. Spezifität ist nur für Deklarationen von gleicher Wichtigkeit und gleichem Ursprung und [Cascade-Schicht](/de/docs/Web/CSS/@layer) relevant. Wenn übereinstimmende Selektoren in verschiedenen Ursprüngen sind, bestimmt die [Cascade](/de/docs/Web/CSS/CSS_cascade/Cascade), welche Deklaration Vorrang hat.

2. Wenn zwei Selektoren in derselben Cascade-Schicht und Ursprung dieselbe Spezifität haben, wird die Bereichsnähe dann berechnet; die Regel mit der geringsten Bereichsnähe gewinnt. Siehe [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) für weitere Details und ein Beispiel.

3. Wenn die Bereichsnähe bei beiden Selektoren ebenfalls gleich ist, kommt die Quellreihenfolge ins Spiel. Wenn alles andere gleich ist, gewinnt der letzte Selektor.

4. Gemäß den CSS-Regeln werden [direkt abgezielte Elemente](#direkt_abgezielte_elemente_vs._geerbte_stile) immer Vorrang vor Regeln haben, die ein Element von seinen Vorfahren erbt.

5. [Nähe von Elementen](#baum-nähe-ignoranz) im Dokumentbaum hat keinen Einfluss auf die Spezifität.

## Spezifikationen

{{Specifications}}

## Siehe auch

- ["Spezifität" in "Umgang mit Konflikten"](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity_2)
- [SpeciFISHity](https://specifishity.com/)
- [Specificity Calculator](https://specificity.keegan.st/): Eine interaktive Website, um die eigenen CSS-Regeln zu testen und zu verstehen
- [_ID-CLASS-TYPE_ Übung](https://estelle.github.io/CSS/selectors/exercises/specificity.html) ein Spezifitäts-Quiz
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax) Leitfaden
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
- [CSS Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Initial](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value), [computed](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value), [used](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value), und [actual](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value) Werte
- [Wertedefinitionssyntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Cascade-Schichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [CSS Verschachtelungsmodul](/de/docs/Web/CSS/CSS_nesting)
