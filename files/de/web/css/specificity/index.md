---
title: Spezifität
slug: Web/CSS/Specificity
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{CSSRef}}

**Spezifität** ist der Algorithmus, den Browser verwenden, um die [CSS-Deklaration](/de/docs/Learn/CSS/First_steps/What_is_CSS#css_syntax) zu bestimmen, die am relevantesten für ein Element ist, welche wiederum den anzuwendenden Eigenschaftswert für das Element bestimmt. Der Spezifitätsalgorithmus berechnet das Gewicht eines [CSS-Selectors](/de/docs/Web/CSS/Reference#selectors), um zu bestimmen, welche Regel aus konkurrierenden CSS-Deklarationen auf ein Element angewendet wird.

> [!NOTE]
> Browser berücksichtigen Spezifität **nachdem** sie [Ursprung und Wichtigkeit der Kaskade](/de/docs/Web/CSS/Cascade) bestimmt haben. Mit anderen Worten, bei konkurrierenden Eigenschaftsdeklarationen ist die Spezifität relevant und wird nur zwischen Selectoren aus dem einen [Kaskadenursprung und Layer](/de/docs/Web/CSS/@layer) verglichen, der Vorrang für die Eigenschaft hat. [Nähe des Scopes](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) und die Reihenfolge des Erscheinens werden relevant, wenn die Selektor-Spezifitäten der konkurrierenden Deklarationen im Kaskadenlayer mit Vorrang gleich sind.

## Wie wird Spezifität berechnet?

Spezifität ist ein Algorithmus, der das Gewicht berechnet, das auf eine gegebene CSS-Deklaration angewendet wird. Das Gewicht wird durch die Anzahl der [Selektoren jeder Gewichtskategorie](#selektor-gewichtskategorien) im Selektor bestimmt, der dem Element (oder Pseudo-Element) entspricht. Wenn es zwei oder mehr Deklarationen gibt, die unterschiedliche Eigenschaftswerte für dasselbe Element bereitstellen, wird der Deklarationswert in dem Stilblock mit dem übereinstimmenden Selektor mit dem größten algorithmischen Gewicht angewendet.

Der Spezifitätsalgorithmus ist im Grunde ein dreispaltiger Wert aus drei Kategorien oder Gewichten - ID, CLASS und TYPE - entsprechend den drei Arten von Selektoren. Der Wert repräsentiert die Anzahl der Selektorkomponenten in jeder Gewichtskategorie und wird als _ID - CLASS - TYPE_ geschrieben. Die drei Spalten werden erstellt, indem die Anzahl der Selektorkomponenten für jede Selektor-Gewichtskategorie in den Selektoren gezählt wird, die dem Element entsprechen.

### Selektor-Gewichtskategorien

Die Selektor-Gewichtskategorien sind hier in der Reihenfolge abnehmender Spezifität aufgelistet:

- ID-Spalte
  - : Einschließlich nur von [ID-Selektoren](/de/docs/Web/CSS/ID_selectors), wie `#example`. Für jede ID in einem übereinstimmenden Selektor 1-0-0 zum Gewichtswert hinzufügen.
- CLASS-Spalte
  - : Einschließlich von [Klassen-Selektoren](/de/docs/Web/CSS/Class_selectors), wie `.myClass`, Attributselektoren wie `[type="radio"]` und `[lang|="fr"]`, und Pseudo-Klassen, wie `:hover`, `:nth-of-type(3n)`, und `:required`. Für jede Klasse, jeden Attributselektor oder jede Pseudo-Klasse in einem übereinstimmenden Selektor 0-1-0 zum Gewichtswert hinzufügen.
- TYPE-Spalte
  - : Einschließlich von [Typ-Selektoren](/de/docs/Web/CSS/Type_selectors), wie `p`, `h1`, und `td`, und Pseudo-Elementen wie `::before`, `::placeholder`, und allen anderen Selektoren mit Doppelpunkt-Syntax. Für jeden Typ oder Pseudo-Element in einem übereinstimmenden Selektor 0-0-1 zum Gewichtswert hinzufügen.
- Kein Wert
  - : Der universelle Selektor ({{CSSxRef("Universal_selectors", "*")}}) und die Pseudo-Klasse {{CSSxRef(":where", ":where()")}} und ihre Parameter werden bei der Berechnung des Gewichts nicht berücksichtigt, so dass ihr Wert 0-0-0 ist, aber sie entsprechen Elementen. Diese Selektoren beeinflussen den Spezifitätsgewichtswert nicht.

Kombinatoren, wie {{CSSxRef("Next-sibling_combinator", "+")}}, {{CSSxRef("Child_combinator", "&gt;")}}, {{CSSxRef("Subsequent-sibling_combinator", "~")}}, [" "](/de/docs/Web/CSS/Descendant_combinator), und {{CSSxRef("Column_combinator", "||")}}, können einen Selektor spezifischer in dem machen, was ausgewählt wird, aber sie fügen dem Spezifitätsgewicht keinen Wert hinzu.

Der `&`-Verschachtelungskombinator fügt kein Spezifitätsgewicht hinzu, aber verschachtelte Regeln schon. In Bezug auf Spezifität und Funktionalität ist Verschachtelung dem Verhalten der {{CSSxRef(":is", ":is()")}} Pseudo-Klasse sehr ähnlich.

Wie bei der Verschachtelung fügen die Pseudo-Klassen {{CSSxRef(":is", ":is()")}}, {{CSSxRef(":has", ":has()")}}, und Negation ({{CSSxRef(":not", ":not()")}}) selbst kein Gewicht hinzu. Die Parameter in diesen Selektoren jedoch schon. Das Spezifitätsgewicht jedes einzelnen kommt vom Selektorparameter in der Liste der Selektoren mit der höchsten Spezifität. Ähnlich wie bei verschachtelten Selektoren wird das hinzugerechnete Spezifitätsgewicht durch die verschachtelte Selektorkomponente aus der durch Kommas getrennten Liste der verschachtelten Selektoren mit der größten Spezifität hinzugefügt.

Die [`:not()`, `:is()`, `:has()` und CSS-Verschachtelungsausnahmen](#the_is_not_has_and_css_nesting_exceptions) werden unten erläutert.

#### Passender Selektor

Das Spezifitätsgewicht kommt vom passenden Selektor. Nehmen Sie diesen CSS-Selektor mit drei durch Kommas getrennten Selektoren als Beispiel:

```css
[type="password"],
input:focus,
:root #myApp input:required {
  color: blue;
}
```

Der `[type="password"]` Selektor in der obigen Selektorliste, mit einem Spezifitätsgewicht von `0-1-0`, wendet die `color: blue` Deklaration auf alle Passwort-Eingabetypen an.

Alle Eingaben, unabhängig vom Typ, entsprechen bei Fokussierung dem zweiten Selektor in der Liste, `input:focus`, mit einem Spezifitätsgewicht von `0-1-1`; dieses Gewicht setzt sich zusammen aus der `:focus` Pseudo-Klasse (0-1-0) und dem Eingabetyp `input` (0-0-1). Wenn die Passwort-Eingabe den Fokus hat, entspricht sie `input:focus`, und das Spezifitätsgewicht für die `color: blue` Stildeklaration wird `0-1-1`. Wenn dieses Passwort keinen Fokus hat, bleibt das Spezifitätsgewicht bei `0-1-0`.

Die Spezifität für eine erforderliche Eingabe, die in ein Element mit dem Attribut `id="myApp"` verschachtelt ist, beträgt `1-2-1`, basierend auf einer ID, zwei Pseudo-Klassen und einem Elementtyp.

Wenn der Passwort-Eingabetyp mit `required` in ein Element mit `id="myApp"` gesetzt eingebettet ist, wird das Spezifitätsgewicht `1-2-1` betragen, basierend auf einer ID, zwei Pseudo-Klassen und einem Elementtyp, unabhängig davon, ob es fokussiert ist oder nicht. Warum ist das Spezifitätsgewicht in diesem Fall `1-2-1` statt `0-1-1` oder `0-1-0`? Weil das Spezifitätsgewicht vom passenden Selektor mit dem höchsten Spezifitätsgewicht stammt. Das Gewicht wird durch den Vergleich der Werte in den drei Spalten, von links nach rechts, bestimmt.

```css
[type="password"]             /* 0-1-0 */
input:focus                   /* 0-1-1 */
:root #myApp input:required   /* 1-2-1 */
```

### Dreispaltenvergleich

Sobald die Spezifitätswerte der relevanten Selektoren bestimmt sind, wird die Anzahl der Selektorkomponenten in jeder Spalte verglichen, von links nach rechts.

```css
#myElement {
  color: green; /* 1-0-0  - WINS!! */
}
.bodyClass .sectionClass .parentClass [id="myElement"] {
  color: yellow; /* 0-4-0 */
}
```

Die erste Spalte ist der Wert der _ID_-Komponente, was die Anzahl der IDs in jedem Selektor ist. Die Zahlen in den _ID_-Spalten konkurrierender Selektoren werden verglichen. Der Selektor mit dem höheren Wert in der _ID_-Spalte gewinnt, egal was die Werte in den anderen Spalten sind. Im obigen Beispiel, auch wenn der gelbe Selektor insgesamt mehr Komponenten hat, zählt nur der Wert der ersten Spalte.

Wenn die Zahl in den _ID_-Spalten der konkurrierenden Selektoren gleich ist, wird die nächste Spalte, _CLASS_, verglichen, wie unten gezeigt.

```css
#myElement {
  color: yellow; /* 1-0-0 */
}
#myApp [id="myElement"] {
  color: green; /* 1-1-0  - WINS!! */
}
```

Die _CLASS_-Spalte ist die Zählung der Klassennamen, Attributselektoren und Pseudo-Klassen im Selektor. Wenn der _ID_-Spaltenwert gleich ist, gewinnt der Selektor mit dem größeren Wert in der _CLASS_-Spalte, unabhängig von dem Wert in der _TYPE_-Spalte. Dies wird im Beispiel unten gezeigt.

```css
:root input {
  color: green; /* 0-1-1 - WINS because CLASS column is greater */
}
html body main input {
  color: yellow; /* 0-0-4 */
}
```

Wenn die Zahlen in den _CLASS_- und _ID_-Spalten in konkurrierenden Selektoren gleich sind, wird die _TYPE_-Spalte relevant. Die _TYPE_-Spalte ist die Anzahl der Elementtypen und Pseudo-Elemente im Selektor. Wenn die ersten beiden Spalten denselben Wert haben, gewinnt der Selektor mit der größeren Zahl in der _TYPE_-Spalte.

Wenn die konkurrierenden Selektoren in allen drei Spalten die gleichen Werte haben, tritt die Proximitätsregel in Kraft, wobei die zuletzt deklarierte Stilregel Vorrang hat.

```css
input.myClass {
  color: yellow; /* 0-1-1 */
}
:root input {
  color: green; /* 0-1-1 WINS because it comes later */
}
```

### Die Ausnahmen `:is()`, `:not()`, `:has()` und CSS-Verschachtelung

Die pseudo-Klasse, die beliebige Übereinstimmungen erreicht, {{CSSxRef(":is", ":is()")}}, die relationale Pseudo-Klasse {{CSSxRef(":has", ":has()")}}, und die Negations-Pseudo-Klasse {{CSSxRef(":not", ":not()")}} werden _nicht_ als Pseudo-Klassen in der Spezifitätsgewichtsberechnung betrachtet. Sie selbst fügen der Spezifitätsgleichung kein Gewicht hinzu. Die Selektorparameter, die in die Pseudo-Klassenklammern übergeben werden, sind jedoch Teil des Spezifitätsalgorithmus; das Gewicht der Übereinstimmungen-kriterien und der Negations-Pseudo-Klasse in der Spezifitätswertberechnung ist das Gewicht des Parameters [Gewicht](#selektor-gewichtskategorien).

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

Beachten Sie, dass in der obigen CSS-Paarung das Spezifitätsgewicht, das durch die Pseudo-Klassen `:is()`, `:has()` und `:not()` bereitgestellt wird, der Wert des Selektorparameters ist, nicht der Pseudo-Klasse.

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

Im obigen CSS-Codeblock haben wir `#fakeId` in die Selektoren aufgenommen. Dieses `#fakeId` fügt jedem Absatz `1-0-0` zum Spezifitätsgewicht hinzu.

Beim Erstellen komplexer Selektorlisten mit [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting) verhält sich dies genauso wie die `:is()` Pseudo-Klasse.

```css
p,
#fakeId {
  span {
    /* 1-0-1 */
  }
}
```

Im obigen Codeblock wird die komplexe Selektor `p, #fakeId` die Spezifität von `#fakeId` und auch `span` genommen, sodass dies eine Spezifität von `1-0-1` sowohl für `p span` als auch für `#fakeId span` schafft. Dies ist die entsprechende Spezifität wie der `:is(p, #fakeId) span` Selektor.

Generell möchten Sie die Spezifität auf ein Minimum reduzieren, aber wenn Sie aus einem bestimmten Grund die Spezifität eines Elements erhöhen müssen, können diese drei Pseudo-Klassen hilfreich sein.

```css
a:not(#fakeId#fakeId#fakeID) {
  color: blue; /* 3-0-1 */
}
```

In diesem Beispiel werden alle Links blau sein, es sei denn, sie werden durch eine Link-Deklaration mit 3 oder mehr IDs überschrieben, einen Farbwert, der ein `a` enthält, mit dem [`!important`-Flag](#the_!important_exception), oder wenn der Link eine [Inline-Stil](#inline-stile) Farbdeklaration hat. Wenn Sie eine solche Technik verwenden, fügen Sie einen Kommentar hinzu, um zu erklären, warum der Hack erforderlich war.

### Inline-Stile

Inline-Stile, die einem Element hinzugefügt werden (z. B. `style="font-weight: bold;"`), überschreiben immer normale Stile in Autorenstilen und können daher als mit der höchsten Spezifität betrachtet werden. Betrachten Sie Inline-Stile als Spezifitätsgewicht von `1-0-0-0`.

Der einzige Weg, Inline-Stile zu überschreiben, ist die Verwendung von `!important`.

Viele JavaScript-Frameworks und -Bibliotheken fügen Inline-Stile hinzu. Die Verwendung von `!important` mit einem sehr gezielten Selektor, wie einem Attributselektor, der den Inline-Stil verwendet, ist eine Möglichkeit, diese Inline-Stile zu überschreiben.

```html
<p style="color: purple">…</p>
```

```css
p[style*="purple"] {
  color: rebeccapurple !important;
}
```

Stellen Sie sicher, dass Sie einen Kommentar mit jedem Einfügen des wichtigen Flags einfügen, damit Codeverwalter verstehen, warum ein CSS-Anti-Pattern verwendet wurde.

### Die Ausnahme `!important`

CSS-Deklarationen, die als wichtig markiert sind, überschreiben alle anderen Deklarationen innerhalb derselben Kaskadenebene und des Ursprungs. Auch wenn technisch gesehen [`!important`](/de/docs/Web/CSS/important) nichts mit Spezifität zu tun hat, interagiert es direkt mit Spezifität und der Kaskade. Es kehrt die [Kaskaden](/de/docs/Web/CSS/Cascade) Reihenfolge der Stylesheets um.

Wenn Deklarationen aus demselben Ursprung und derselben Kaskadenebene in Konflikt stehen und ein Eigenschaftswert das `!important`-Flag gesetzt hat, wird die wichtige Deklaration unabhängig von der Spezifität angewendet. Wenn widersprüchliche Deklarationen aus demselben Ursprung und derselben Kaskadenebene mit dem `!important`-Flag auf dasselbe Element angewendet werden, wird die Deklaration mit größerer Spezifität angewendet.

Die Verwendung von `!important`, um die Spezifität zu überschreiben, wird als **schlechte Praxis** betrachtet und sollte zu diesem Zweck vermieden werden. Das Verständnis und die effektive Nutzung von Spezifität und Kaskade kann jeglichen Bedarf an dem `!important`-Flag beseitigen.

Anstatt `!important` zu verwenden, um fremdes CSS (von externen Bibliotheken, wie Bootstrap oder normalize.css) zu überschreiben, importieren Sie die Drittanbieter-Skripte direkt in [Kaskadenebenen](/de/docs/Web/CSS/@layer). Wenn Sie `!important` in Ihrem CSS verwenden müssen, kommentieren Sie Ihre Verwendung, damit zukünftige Codeverwalter wissen, warum die Deklaration als wichtig markiert wurde und sie nicht überschreiben sollen. Verwenden Sie `!important` jedoch auf keinen Fall, wenn Sie Plugins oder Frameworks schreiben, die andere Entwickler einbinden müssen, ohne sie steuern zu können.

### Die Ausnahme `:where()`

Die Spezifitäts-Anpassung Pseudo-Klasse {{CSSxRef(":where", ":where()")}} hat immer ihre Spezifität mit Null ersetzt, `0-0-0`. Sie ermöglicht es, CSS-Selektoren sehr spezifisch bei der Zielauswahl zu machen, ohne die Spezifität zu erhöhen.

Beim Erstellen von Drittanbieter-CSS, das von Entwicklern verwendet wird, die keinen Zugriff darauf haben, Ihr CSS zu bearbeiten, wird es als gute Praxis angesehen, CSS mit der niedrigstmöglichen Spezifität zu erstellen. Zum Beispiel, wenn Ihr Thema das folgende CSS enthält:

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

### Wie `@scope` Blöcke die Spezifität beeinflussen

Das Einfügen eines Regelsets in einen `@scope`-Block beeinflusst nicht die Spezifität seines Selektors, unabhängig von den Selektoren, die innerhalb des Wurzelbereichs und der Grenze verwendet werden. Zum Beispiel:

```css
@scope (.article-body) {
  /* img has a specificity of 0-0-1, as expected */
  img { ... }
}
```

Wenn Sie jedoch entscheiden, explizit die Pseudo-Klasse `:scope` Ihren geskopten Selektoren voranzustellen, müssen Sie es bei der Berechnung ihrer Spezifität berücksichtigen. `:scope`, wie alle regulären Pseudo-Klassen, hat eine Spezifität von 0-1-0. Zum Beispiel:

```css
@scope (.article-body) {
  /* :scope img has a specificity of 0-1-0 + 0-0-1 = 0-1-1 */
  :scope img { ... }
}
```

Beim Verwenden des `&`-Selektors innerhalb eines `@scope`-Blocks repräsentiert `&` den Selector der Wurzel des Scopes; es wird intern in diesen Selektor gewickelt innerhalb eines {{cssxref(":is", ":is()")}}-Selectors umgeschrieben. Zum Beispiel wäre:

```css
@scope (figure, #primary) {
  & img { ... }
}
```

`& img` entspricht `:is(figure, #primary) img`.

Da `:is()` die Spezifität seines spezifischsten Arguments (`#primary` in diesem Fall) annimmt, beträgt die Spezifität des geskopten `& img`-Selectors daher 1-0-0 + 0-0-1 = 1-0-1.

## Tipps zum Umgang mit Spezifitätsproblemen

Anstatt `!important` zu verwenden, ziehen Sie in Betracht, Kaskadenebenen zu verwenden und durchgehend in Ihrem CSS Spezifikationen mit geringem Gewicht zu verwenden, damit Stile leicht mit etwas spezifischeren Regeln überschrieben werden können. Die Verwendung von semantischem HTML hilft dabei, Anker bereitzustellen, von denen aus Stil angewendet werden kann.

### Selektoren spezifisch zu machen mit und ohne Spezifitätserhöhung

Indem Sie den Abschnitt des Dokuments angeben, den Sie stylen möchten, bevor Sie das Element auswählen, wird die Regel spezifischer. Abhängig davon, wie Sie es hinzufügen, können Sie etwas, viel oder gar keine Spezifität hinzufügen, wie unten gezeigt:

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

#### ID-Spezifität reduzieren

Spezifität basiert auf der Form eines Selektors. Die Einbeziehung der `id` eines Elements als Attributselektor anstelle eines id-Selectors ist eine gute Möglichkeit, ein Element spezifischer zu machen, ohne eine Überfülle an Spezifität hinzuzufügen. Im vorhergehenden Beispiel wird der Selektor `[id="myContent"]` als Attributselektor für die Bestimmung der Spezifität des Selektors gewertet, obwohl er eine ID auswählt.

Sie können auch die `id` oder einen Teil eines Selektors als Parameter in der `:where()`-Spezifitäts-Anpassungspseudo-Klasse einfügen, wenn Sie einen Selektor spezifischer machen müssen, aber überhaupt keine Spezifität hinzufügen möchten.

### Spezifität erhöhen durch Duplizieren des Selektors

Als Spezialfall zur Erhöhung der Spezifität können Sie die Gewichte aus den _CLASS_- oder _ID_-Spalten duplizieren. Das Duplizieren von id-, Klassen-, Pseudo-Klassen- oder Attributselektoren innerhalb eines zusammengesetzten Selektors erhöht die Spezifität, wenn sehr spezifische Selektoren überschrieben werden müssen, über die Sie keine Kontrolle haben.

```css
#myId#myId#myId span {
  /* 3-0-1 */
}
.myClass.myClass.myClass span {
  /* 0-3-1 */
}
```

Verwenden Sie dies sparsam, wenn überhaupt. Wenn Sie Selektorduplizierung verwenden, kommentieren Sie immer Ihr CSS.

Durch die Verwendung von `:is()` und `:not()` (und auch `:has()`), können Sie die Spezifität erhöhen, selbst wenn Sie keine `id` zu einem Elternelement hinzufügen können:

```css
:not(#fakeID#fakeId#fakeID) span {
  /* 3-0-1 */
}
:is(#fakeID#fakeId#fakeID, span) {
  /* 3-0-0 */
}
```

### Vorrang gegenüber Drittanbieter-CSS

Das Nutzen von Kaskadenschichten ist der Standardweg, um eine Reihe von Stilen vor einer anderen Reihe von Stilen Vorrang zu geben; Kaskadenschichten ermöglichen dies ohne Verwendung von Spezifität! Normale (nicht wichtige) Autorenstile, die in Kaskadenschichten importiert werden, haben eine geringere Priorität als nicht geschichtete Autorenstile.

Wenn Stile aus einem Stylesheet stammen, das Sie nicht bearbeiten oder nicht verstehen können, und Sie müssen Stile überschreiben, ist eine Taktik, die Stile, die Sie nicht steuern, in eine Kaskadenschicht zu importieren. Stile in nachträglich deklarierten Ebenen haben Vorrang, wobei unwichtige Stile Vorrang vor allen geschichteten Stilen aus demselben Ursprung haben.

Wenn zwei Selektoren aus verschiedenen Ebenen dasselbe Element betreffen, haben Ursprung und Wichtigkeit Vorrang; die Spezifität des Selektors im verlierenden Stylesheet ist irrelevant.

```html
<style>
  @import TW.css layer();
  p,
  p * {
    font-size: 1rem;
  }
</style>
```

Im obigen Beispiel haben alle Absatztexte, einschließlich des verschachtelten Inhalts, `1rem`, egal wie viele Klassennamen die Absätze haben, die dem TW Stylesheet entsprechen.

### Vermeidung und Überschreibung von `!important`

Am besten ist es, `!important` nicht zu verwenden. Die obigen Erklärungen zur Spezifität sollten hilfreich sein, um die Verwendung des Flags zu vermeiden und es gänzlich zu entfernen, wenn es gefunden wird.

Um den wahrgenommenen Bedarf an `!important` zu beseitigen, können Sie eines der folgenden tun:

- Erhöhen Sie die Spezifität des Selektors der ehemals `!important` Deklaration, sodass sie größer ist als andere Deklarationen
- Geben Sie ihm die gleiche Spezifität und platzieren Sie ihn nach der Deklaration, die er überschreiben soll
- Reduzieren Sie die Spezifität des Selektors, den Sie zu überschreiben versuchen.

Alle diese Methoden sind in vorhergehenden Abschnitten abgedeckt.

Wenn Sie `!important`-Flags aus einem Autoren-Stylesheet nicht entfernen können, ist die einzige Lösung zum Überschreiben der wichtigen Stile die Verwendung von `!important`. Eine ausgezeichnete Lösung ist die Erstellung einer [Kaskadenschicht](/de/docs/Web/CSS/@layer) von wichtigen Deklarationsüberschreibungen. Zwei Methoden dies zu tun, umfassen:

#### Methode 1

1. Erstellen Sie ein separates, kurzes Stylesheet, das nur wichtige Deklarationen enthält, die speziell alle wichtigen Deklarationen überschreiben, die Sie nicht entfernen konnten.
2. Importieren Sie dieses Stylesheet als das erste Import in Ihr CSS mit `layer()`, einschließlich der @import-Anweisung, bevor Sie andere Stylesheets verknüpfen. Dies soll sicherstellen, dass die wichtigen Überschreibungen als die erste Schicht importiert werden.

```html
<style>
  @import importantOverrides.css layer();
</style>
```

#### Methode 2

1. Am Anfang Ihrer Stylesheet-Deklarationen, erstellen Sie eine benannte Kaskadenschicht, wie folgt:

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

Die Spezifität des Selektors der wichtigen Regel innerhalb der Schicht kann niedrig sein, solange sie das Element trifft, das Sie überschreiben möchten. Normale Schichten sollten außerhalb der Schicht deklariert werden, da geschichtete Stile eine geringere Priorität haben als nicht geschichtete Stile.

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

### Direkt anvisierte Elemente vs. geerbte Stile

Stile für ein direkt anvisiertes Element haben immer Vorrang vor geerbten Stilen, unabhängig von der Spezifität der geerbten Regel. Angesichts des folgenden CSS und HTML:

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

Das `h1` wird lila sein, weil der `h1`-Selektor das Element spezifisch anvisiert, während das Grün vom `#parent` Deklarationen vererbt wird.

## Beispiele

Im folgenden CSS haben wir drei Selektoren, die {{HTMLElement('input')}}-Elemente anvisieren, um eine Farbe festzulegen. Für ein gegebenes Eingabefeld ist das Spezifitätsgewicht der Deklaration mit Vorrang der übereinstimmende Selektor mit dem größten Gewicht:

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

Wenn die obigen Selektoren alle dasselbe Eingabefeld anvisieren, wird das Eingabefeld rot sein, da die erste Deklaration den höchsten Wert in der _ID_-Spalte hat.

Der letzte Selektor hat vier _TYPE_-Komponenten. Auch wenn er den höchsten ganzzahligen Wert hat, haben _TYPE_-Komponenten niemals Vorrang vor _CLASS_-Komponenten, egal wie viele Elemente und Pseudo-Elemente enthalten sind, selbst wenn es 150 wären. Die Spaltenwerte werden von links nach rechts verglichen, wenn Spaltenwerte gleich sind.

Hätten wir den id-Selektor im obigen Beispielcode in einen Attributselektor konvertiert, hätten die ersten beiden Selektoren die gleiche Spezifität, wie unten gezeigt:

```css
[id="myElement"] input.myClass {
  color: red;
} /* 0-2-1 */
input[type="password"]:required {
  color: blue;
} /* 0-2-1 */
```

Wenn mehrere Deklarationen die gleiche Spezifität haben, wird die letzte in der CSS gefundene Deklaration auf das Element angewendet. Wenn beide Selektoren dasselbe {{HTMLElement('input')}} treffen, wird die Farbe blau sein.

## Zusätzliche Notizen

Ein paar Dinge, die in Bezug auf Spezifität zu beachten sind:

1. Spezifität gilt nur, wenn dasselbe Element von mehreren Deklarationen in derselben Kaskadenschicht oder demselben Ursprung anvisiert wird. Spezifität zählt nur für Deklarationen von gleicher Wichtigkeit und gleichem Ursprung und [Kaskadenschicht](/de/docs/Web/CSS/@layer). Wenn übereinstimmende Selektoren in verschiedenen Ursprüngen sind, bestimmt die [Kaskade](/de/docs/Web/CSS/Cascade), welche Deklaration Vorrang hat.

2. Wenn zwei Selektoren in derselben Kaskadenschicht und Ursprung die gleiche Spezifität haben, wird die Scope-Nähe berechnet; das Regelset mit der niedrigsten Scope-Nähe gewinnt. Siehe [Wie `@scope` Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) für mehr Details und ein Beispiel.

3. Wenn die Scope-Nähe für beide Selektoren ebenfalls gleich ist, kommt die Quellreihenfolge ins Spiel. Wenn alles andere gleich ist, gewinnt der letzte Selektor.

4. Gemäß CSS-Regeln werden [direkt anvisierte Elemente](#direkt_anvisierte_elemente_vs._geerbte_stile) immer Vorrang vor Regeln haben, die ein Element von seinem Vorfahren erbt.

5. [Nähe der Elemente](#ignorieren_der_baum-nähe) im Dokumentbaum hat keinen Einfluss auf die Spezifität.

## Spezifikationen

{{Specifications}}

## Siehe auch

- ["Spezifität" in "Kaskade und Vererbung"](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#specificity_2)
- [SpeciFISHity](https://specifishity.com/)
- [Specificity Calculator](https://specificity.keegan.st/): Eine interaktive Website zum Testen und Verstehen Ihrer eigenen CSS-Regeln
- [_ID-CLASS-TYPE_ Übung](https://estelle.github.io/CSS/selectors/exercises/specificity.html) ein Spezifizitäts-Quiz
- [CSS-Syntax](/de/docs/Web/CSS/Syntax) Leitfaden
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
- [CSS-Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [At-Regeln](/de/docs/Web/CSS/At-rule)
- [Vererbung](/de/docs/Web/CSS/Inheritance)
- [Initial](/de/docs/Web/CSS/initial_value), [berechnet](/de/docs/Web/CSS/computed_value), [verwendet](/de/docs/Web/CSS/used_value), und [tatsächliche](/de/docs/Web/CSS/actual_value) Werte
- [Wertedefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
- [Bausteine: die CSS-Kaskade](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- [Bausteine: Kaskadenschichten](/de/docs/Learn/CSS/Building_blocks/Cascade_layers)
- [CSS-Kaskade und Vererbungs](/de/docs/Web/CSS/CSS_cascade) Modul
- [CSS-Verschachtelungsmodul](/de/docs/Web/CSS/CSS_nesting)
