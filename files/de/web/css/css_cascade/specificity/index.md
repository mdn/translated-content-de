---
title: Spezifität
slug: Web/CSS/CSS_cascade/Specificity
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

**Spezifität** ist der Algorithmus, den Browser verwenden, um die [CSS-Deklaration](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#css_syntax_basics) zu bestimmen, die für ein Element am relevantesten ist und damit den anzuwendenden Eigenschaftswert festlegt. Der Spezifizitätsalgorithmus berechnet das Gewicht eines [CSS-Selectors](/de/docs/Web/CSS/Reference#selectors), um zu bestimmen, welche Regel von konkurrierenden CSS-Deklarationen auf ein Element angewendet wird.

> [!NOTE]
> Browser berücksichtigen die Spezifizität **nachdem** [Herkunft und Wichtigkeit der Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) bestimmt wurden. Mit anderen Worten, bei konkurrierenden Eigenschaftsdeklarationen ist die Spezifizität relevant und wird nur zwischen Selektoren aus der einen [Kaskadenherkunft und Schicht](/de/docs/Web/CSS/@layer) verglichen, die Vorrang für die Eigenschaft hat. [Festlegung der Reichweite](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) und Reihenfolge des Auftretens werden relevant, wenn die Selektorspezifität der konkurrierenden Deklarationen in der hervorgehobenen Kaskadenschicht gleich ist.

## Wie wird die Spezifität berechnet?

Spezifität ist ein Algorithmus, der das Gewicht berechnet, das einer gegebenen CSS-Deklaration zugewiesen wird. Das Gewicht wird durch die Anzahl der [Selektoren jeder Gewichtskategorie](#gewichts-kategorien_der_selektoren) im Selektor bestimmt, der dem Element entspricht (oder dem Pseudoelement). Wenn es zwei oder mehr Deklarationen gibt, die unterschiedliche Eigenschaftswerte für dasselbe Element liefern, wird der Deklarationswert in dem Stilblock angewendet, dessen Selektor mit dem höchsten algorithmischen Gewicht übereinstimmt.

Der Spezifizitätsalgorithmus ist im Wesentlichen ein drei-spaltiger Wert aus drei Kategorien oder Gewichten – ID, CLASS und TYPE – entsprechend den drei Arten von Selektoren. Der Wert repräsentiert die Anzahl der Selektorkomponenten in jeder Gewichtskategorie und wird als _ID - CLASS - TYPE_ geschrieben. Die drei Spalten werden erstellt, indem die Anzahl der Selektorkomponenten für jede Selektorgewichtskategorie in den Selektoren, die dem Element entsprechen, gezählt wird.

### Gewichts-Kategorien der Selektoren

Die Gewichts-Kategorien der Selektoren sind hier in der Reihenfolge abnehmender Spezifität aufgelistet:

- ID-Spalte
  - : Beinhaltet nur [ID-Selektoren](/de/docs/Web/CSS/ID_selectors), wie `#example`. Für jede ID in einem übereinstimmenden Selektor fügen Sie 1-0-0 zum Gewichts-Wert hinzu.
- CLASS-Spalte
  - : Beinhaltet [Klassenselektoren](/de/docs/Web/CSS/Class_selectors) wie `.myClass`, Attributselektoren wie `[type="radio"]` und `[lang|="fr"]`, und Pseudo-Klassen wie `:hover`, `:nth-of-type(3n)` und `:required`. Für jede Klasse, jeden Attributselektor oder jede Pseudo-Klasse in einem übereinstimmenden Selektor fügen Sie 0-1-0 zum Gewichts-Wert hinzu.
- TYPE-Spalte
  - : Beinhaltet [Typos-Sets](/de/docs/Web/CSS/Type_selectors) wie `p`, `h1` und `td`, und Pseudo-Elemente wie `::before`, `::placeholder` und alle anderen Selektoren mit Doppelpunktnotation. Für jede Typen- oder Pseudo-Element in einem übereinstimmenden Selektor fügen Sie 0-0-1 zum Gewichts-Wert hinzu.
- Kein Wert
  - : Der universelle Selektor ({{CSSxRef("Universal_selectors", "*")}}) und die Pseudo-Klasse {{CSSxRef(":where", ":where()")}} und deren Parameter werden bei der Berechnung des Gewichts nicht berücksichtigt, sodass ihr Wert 0-0-0 ist, aber sie passen zu Elementen. Diese Selektoren haben keinen Einfluss auf den Spezifizitäts-Wert.

Kombinatoren wie {{CSSxRef("Next-sibling_combinator", "+")}}, {{CSSxRef("Child_combinator", "&gt;")}}, {{CSSxRef("Subsequent-sibling_combinator", "~")}}, [" "](/de/docs/Web/CSS/Descendant_combinator) und {{CSSxRef("Column_combinator", "||")}}, können einen Selektor spezifischer machen, was ausgewählt wird, aber sie fügen dem Spezifizitätsgewicht keinen Wert hinzu.

Der `&`-Verschachtelungs-Kombinator erhöht das Spezifizitätsgewicht nicht, aber geschachtelte Regeln schon. In Bezug auf Spezifität und Funktionalität ist Schachtelung dem Verhalten der {{CSSxRef(":is", ":is()")}} Pseudo-Klasse sehr ähnlich.

Wie bei der Schachtelung, so erhöhen auch die Pseudo-Klassen {{CSSxRef(":is", ":is()")}}, {{CSSxRef(":has", ":has()")}} und Negation ({{CSSxRef(":not", ":not()")}}) selbst kein Gewicht. Die Parameter in diesen Selektoren jedoch schon. Das Spezifizitätsgewicht jedes Selektors stammt aus dem Selektorparameter in der Liste der Selektoren mit der höchsten Spezifität. Ähnlich verhält es sich bei geschachtelten Selektoren: Das hinzugefügte Spezifizitätsgewicht durch die geschachtelte Selektorkomponente ist der Selektor in der kommagetrennten Liste von geschachtelten Selektoren mit der höchsten Spezifität.

Die [`:not()`, `:is()`, `:has()` und CSS-Verschachtelungsausnahmen](#the_is_not_has_and_css_nesting_exceptions) werden unten diskutiert.

#### Übereinstimmender Selektor

Das Spezifizitätsgewicht stammt aus dem übereinstimmenden Selektor. Nehmen Sie diesen CSS-Selektor mit drei kommagetrennten Selektoren als Beispiel:

```css
[type="password"],
input:focus,
:root #myApp input:required {
  color: blue;
}
```

Der `[type="password"]`-Selektor in der obigen Selektorliste, mit einem Spezifizitätsgewicht von `0-1-0`, wendet die `color: blue`-Deklaration auf alle Passwort-Eingabetypen an.

Alle Eingaben, egal welcher Typ, die den Fokus erhalten, entsprechen dem zweiten Selektor in der Liste, `input:focus`, mit einem Spezifizitätsgewicht von `0-1-1`; dieses Gewicht setzt sich aus der `:focus`-Pseudo-Klasse (0-1-0) und dem `input`-Typ (0-0-1) zusammen. Wenn der Passwort-Eingabetyp den Fokus hat, passt er zu `input:focus`, und das Spezifizitätsgewicht für die `color: blue`-Stildeklaration wird `0-1-1`. Wenn dieses Passwort nicht den Fokus hat, bleibt das Spezifizitätsgewicht bei `0-1-0`.

Die Spezifizität für einen erforderlichen Eingabetyp, der in einem Element mit dem Attribut `id="myApp"` verschachtelt ist, beträgt `1-2-1`, basierend auf einer ID, zwei Pseudo-Klassen und einem Elementtyp.

Wenn der Passwort-Eingabetyp mit `required` in einem Element mit `id="myApp"` verschachtelt ist, beträgt das Spezifizitätsgewicht `1-2-1`, basierend auf einer ID, zwei Pseudo-Klassen und einem Elementtyp, unabhängig davon, ob er den Fokus hat oder nicht. Warum ist das Spezifizitätsgewicht in diesem Fall `1-2-1` und nicht `0-1-1` oder `0-1-0`? Weil das Spezifizitätsgewicht vom übereinstimmenden Selektor mit dem größten Spezifizitätsgewicht stammt. Das Gewicht wird bestimmt, indem die Werte in den drei Spalten von links nach rechts verglichen werden.

```css
[type="password"]             /* 0-1-0 */
input:focus                   /* 0-1-1 */
:root #myApp input:required   /* 1-2-1 */
```

### Drei-Spalten-Vergleich

Sobald die Spezifizitätswerte der relevanten Selektoren bestimmt sind, werden die Anzahl der Selektorkomponenten in jeder Spalte von links nach rechts verglichen.

```css
#myElement {
  color: green; /* 1-0-0  - WINS!! */
}
.bodyClass .sectionClass .parentClass [id="myElement"] {
  color: yellow; /* 0-4-0 */
}
```

Die erste Spalte ist der Wert der _ID_-Komponente, die die Anzahl der IDs in jedem Selektor ist. Die Zahlen in den _ID_-Spalten der konkurrierenden Selektoren werden verglichen. Der Selektor mit dem höheren Wert in der _ID_-Spalte gewinnt, egal welche Werte in den anderen Spalten stehen. Im obigen Beispiel spielt es keine Rolle, dass der gelbe Selektor insgesamt mehr Komponenten hat, nur der Wert der ersten Spalte zählt.

Wenn die Zahl in den _ID_-Spalten der konkurrierenden Selektoren gleich ist, wird die nächste Spalte, _CLASS_, verglichen, wie unten gezeigt.

```css
#myElement {
  color: yellow; /* 1-0-0 */
}
#myApp [id="myElement"] {
  color: green; /* 1-1-0  - WINS!! */
}
```

Die _CLASS_-Spalte ist die Anzahl der Klassennamen, Attributselektoren und Pseudo-Klassen im Selektor. Wenn der Wert der _ID_-Spalte gleich ist, gewinnt der Selektor mit dem höheren Wert in der _CLASS_-Spalte, unabhängig vom Wert in der _TYPE_-Spalte. Dies ist im folgenden Beispiel zu sehen.

```css
:root input {
  color: green; /* 0-1-1 - WINS because CLASS column is greater */
}
html body main input {
  color: yellow; /* 0-0-4 */
}
```

Wenn die Zahlen in den _CLASS_- und _ID_-Spalten in den konkurrierenden Selektoren gleich sind, wird die _TYPE_-Spalte relevant. Die _TYPE_-Spalte ist die Anzahl der Elementtypen und Pseudoelemente im Selektor. Wenn die ersten beiden Spalten denselben Wert haben, gewinnt der Selektor mit der größeren Anzahl in der _TYPE_-Spalte.

Wenn die konkurrierenden Selektoren in allen drei Spalten dieselben Werte haben, kommt die Näherungsregel ins Spiel, bei der die zuletzt deklarierte Stilregel Vorrang hat.

```css
input.myClass {
  color: yellow; /* 0-1-1 */
}
:root input {
  color: green; /* 0-1-1 WINS because it comes later */
}
```

### Die `:is()`, `:not()`, `:has()` und CSS-Verschachtelungsausnahmen

Die Alles-matches-Pseudoklasse {{CSSxRef(":is", ":is()")}}, die relationale Pseudoklasse {{CSSxRef(":has", ":has()")}} und die Negations-Pseudoklasse {{CSSxRef(":not", ":not()")}} werden in der Spezifizitätsberechnungsformel _nicht_ als Pseudo-Klassen betrachtet. Sie selbst fügen der Spezifizierungsgleichung kein Gewicht hinzu. Die Selektorparameter in den Pseudoklassen-Klammern sind jedoch Teil des Spezifizierungsalgorithmus; das Gewicht der Alles-matches- und Negations-Pseudoklasse in der Spezifizierungswertberechnung ist das Gewicht der Parameter[s Gewicht](#gewichts-kategorien_der_selektoren).

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

Beachten Sie, dass im obigen CSS-Paaring das Spezifizitätsgewicht, das durch die `:is()`, `:has()` und `:not()`-Pseudo-Klassen bereitgestellt wird, der Wert des Selektorparameters ist, nicht der Pseudoklasse.

Alle drei dieser Pseudo-Klassen akzeptieren komplexe Selektorliste, eine Liste von kommagetrennten Selektoren, als Parameter. Diese Funktion kann genutzt werden, um die Spezifizität eines Selektors zu erhöhen:

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

Wenn Sie komplexe Selektorenlisten mit [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting) erstellen, verhält sich dies genau wie die `:is()`-Pseudo-Klasse.

```css
p,
#fakeId {
  span {
    /* 1-0-1 */
  }
}
```

Im obigen Codeblock wird die komplexe Selektor `p, #fakeId`, wobei die Spezifizität von `#fakeId` und auch von `span` genommen wird, sodass dies eine Spezifizität von `1-0-1` sowohl für `p span` als auch für `#fakeId span` ergibt. Dies entspricht der gleichen Spezifizität wie der `:is(p, #fakeId) span`-Selektor.

Im Allgemeinen möchten Sie die Spezifizität so gering wie möglich halten, aber wenn Sie die Spezifizität eines Elements aus bestimmten Gründen erhöhen müssen, können diese drei Pseudo-Klassen helfen.

```css
a:not(#fakeId#fakeId#fakeID) {
  color: blue; /* 3-0-1 */
}
```

In diesem Beispiel sind alle Links blau, es sei denn, sie werden von einer Link-Deklaration mit 3 oder mehr IDs überschrieben, einem Farbwert, der ein `a` enthält, das das [`!important`-Flag](#the_!important_exception) enthält, oder wenn der Link eine [Inline-Stil](#inline-stile)-Farbdeklaration hat. Wenn Sie eine solche Technik verwenden, fügen Sie einen Kommentar hinzu, um zu erklären, warum der Hack notwendig war.

### Inline-Stile

Inline-Stile, die einem Element hinzugefügt werden (z.B. `style="font-weight: bold;"`), überschreiben immer alle normalen Stile in Autorenstilen, und daher können sie als mit der höchsten Spezifität angesehen werden. Betrachten Sie Inline-Stile als ein Spezifizitätsgewicht von `1-0-0-0`.

Die einzige Möglichkeit, Inline-Stile zu überschreiben, ist durch die Verwendung von `!important`.

Viele JavaScript-Frameworks und -Bibliotheken fügen Inline-Stile hinzu. Die Verwendung von `!important` mit einem sehr zielgerichteten Selektor, wie einem Attributselektor, der den Inline-Stil verwendet, ist eine Möglichkeit, diese Inline-Stile zu überschreiben.

```html
<p style="color: purple">…</p>
```

```css
p[style*="purple"] {
  color: rebeccapurple !important;
}
```

Fügen Sie bei jeder Verwendung des wichtigen Flags unbedingt einen Kommentar hinzu, damit Code-Pfleger verstehen, warum ein CSS-Antimuster verwendet wurde.

### Die `!important`-Ausnahme

CSS-Deklarationen, die als wichtig markiert sind, überschreiben alle anderen Deklarationen innerhalb derselben Kaskadenschicht und Herkunft. Obwohl technisch gesehen [`!important`](/de/docs/Web/CSS/important) nichts mit Spezifität zu tun hat, interagiert es direkt mit Spezifität und der Kaskade. Es kehrt die [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) von Stylesheets um.

Wenn Deklarationen aus derselben Herkunft und Kaskadenschicht im Konflikt stehen und ein Eigenschaftswert das `!important`-Flag gesetzt hat, wird die wichtige Deklaration unabhängig von der Spezifität angewendet. Wenn konkurrierende Deklarationen aus derselben Herkunft und Kaskadenschicht mit dem `!important`-Flag auf dasselbe Element angewendet werden, wird die Deklaration mit größerer Spezifität angewendet.

Die Verwendung von `!important`, um Spezifität zu überschreiben, wird als **schlechte Praxis** angesehen und sollte zu diesem Zweck vermieden werden. Das Verständnis und die effektive Nutzung der Spezifizität und der Kaskade kann jede Notwendigkeit für das `!important`-Flag beseitigen.

Anstatt `!important` zu verwenden, um externe CSS-Deklarationen (aus externen Bibliotheken wie Bootstrap oder normalize.css) zu überschreiben, importieren Sie die Drittanbieterskripte direkt in [Kaskadenschichten](/de/docs/Web/CSS/@layer). Wenn Sie `!important` in Ihrem CSS verwenden müssen, kommentieren Sie Ihre Nutzung, damit zukünftige Code-Pfleger wissen, warum die Deklaration als wichtig markiert wurde und nicht überschrieben werden soll. Aber verwenden Sie auf keinen Fall `!important`, wenn Sie Plugins oder Frameworks schreiben, die andere Entwickler einbinden müssen, ohne die Kontrolle zu haben.

### Die `:where()`-Ausnahme

Die Spezifizitätsanpassung-Pseudoklasse {{CSSxRef(":where", ":where()")}} hat immer eine Spezifizität von null, `0-0-0`. Damit können CSS-Selektoren sehr spezifisch darauf ausgerichtet werden, ein bestimmtes Element anzuvisieren, ohne die Spezifizität zu erhöhen.

Bei der Erstellung von Drittanbieter-CSS, das von Entwicklern verwendet werden soll, die keinen Zugriff auf Ihre CSS-Bearbeitung haben, gilt es als gute Praxis, CSS mit der geringst möglichen Spezifizität zu erstellen. Beispielsweise, wenn Ihr Thema folgendes CSS beinhaltet:

```css
:where(#defaultTheme) a {
  /* 0-0-1 */
  color: red;
}
```

Dann kann der Entwickler, der das Widget implementiert, die Linkfarbe leicht nur mit Typenselektoren überschreiben.

```css
footer a {
  /* 0-0-2 */
  color: blue;
}
```

### Wie `@scope`-Blöcke die Spezifität beeinflussen

Das Einfügen eines Regelsets innerhalb eines `@scope`-Blocks beeinflusst nicht die Spezifizität seines Selektors, unabhängig von den innerhalb der Bereichs- und Limitwurzel verwendeten Selektoren. Beispielsweise:

```css
@scope (.article-body) {
  /* img has a specificity of 0-0-1, as expected */
  img { ... }
}
```

Wenn Sie sich jedoch entscheiden, die `:scope`-Pseudoklasse explizit vor Ihre Bereichsselektoren zu setzen, müssen Sie diese bei der Berechnung ihrer Spezifizität berücksichtigen. `:scope`, wie alle regulären Pseudo-Klassen, hat eine Spezifizität von 0-1-0. Beispielsweise:

```css
@scope (.article-body) {
  /* :scope img has a specificity of 0-1-0 + 0-0-1 = 0-1-1 */
  :scope img { ... }
}
```

Bei der Verwendung des `&`-Selectors innerhalb eines `@scope`-Blocks repräsentiert `&` den Bereichs-Wurzel-Selektor; er wird intern in diesen Selektor innerhalb eines {{cssxref(":is", ":is()")}}-Selectors umgeschrieben. Beispielsweise:

```css
@scope (figure, #primary) {
  & img { ... }
}
```

`& img` ist gleichbedeutend mit `:is(figure, #primary) img`.

Da `:is()` die Spezifizität seines spezifischsten Arguments (`#primary` in diesem Fall) übernimmt, ist die Spezifizität des begrenzten `& img`-Selectors daher 1-0-0 + 0-0-1 = 1-0-1.

## Tipps zum Umgang mit Spezifizitätsproblemen

Anstatt `!important` zu verwenden, sollten Sie Kaskadenschichten verwenden und gering gewichtige Spezifizität in Ihrem CSS verwenden, sodass Stile leicht mit etwas spezifischeren Regeln überschrieben werden können. Die Verwendung von semantischem HTML hilft, Anker zu bieten, von denen aus Styling angewendet werden kann.

### Spezifische Selektoren mit und ohne Erhöhung der Spezifizität erstellen

Indem Sie den Abschnitt des Dokuments, in dem Sie sich befinden, vor dem Element, das Sie auswählen, anzeigen, wird die Regel spezifischer. Abhängig davon, wie Sie es hinzufügen, können Sie ein wenig, viel oder keine Spezifizität hinzufügen, wie unten gezeigt:

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

Egal in welcher Reihenfolge, die Überschrift wird grün, denn diese Regel ist am spezifischsten.

#### Reduzierung der ID-Spezifität

Die Spezifizität basiert auf der Form eines Selektors. Die Aufnahme der `id` eines Elements als Attributselektor anstelle eines ID-Selectors ist eine gute Möglichkeit, ein Element spezifischer zu machen, ohne eine Überfülle an Spezifizität hinzuzufügen. Im vorherigen Beispiel zählt der Selektor `[id="myContent"]` als Attributselektor zur Ermittlung der Spezifizität des Selectors, auch wenn er eine ID auswählt.

Sie können auch die `id` oder einen beliebigen Teil eines Selektors als Parameter in der `:where()`-Spezifitätsanpassungs-Pseudoklasse einfügen, wenn Sie einen Selektor spezifischer machen müssen, aber überhaupt keine Spezifizität hinzufügen möchten.

### Erhöhung der Spezifizität durch Doppeln des Selektors

Als Sonderfall zur Erhöhung der Spezifizität können Sie Gewichte aus den _CLASS_- oder _ID_-Spalten duplizieren. Das Duplizieren von ID-, Klassen-, Pseudoklassen- oder Attributselektoren innerhalb eines Zusammengesetzten Selektors erhöht die Spezifizität, wenn Sie sehr spezifische Selektoren überschreiben müssen, über die Sie keine Kontrolle haben.

```css
#myId#myId#myId span {
  /* 3-0-1 */
}
.myClass.myClass.myClass span {
  /* 0-3-1 */
}
```

Verwenden Sie dies sparsam, wenn überhaupt. Bei Verwendung von Selektorduplizierung kommentieren Sie immer Ihr CSS.

Durch die Verwendung von `:is()` und `:not()` (und auch `:has()`) können Sie die Spezifizität erhöhen, auch wenn Sie einer übergeordneten ID kein `id` hinzufügen können:

```css
:not(#fakeID#fakeId#fakeID) span {
  /* 3-0-1 */
}
:is(#fakeID#fakeId#fakeID, span) {
  /* 3-0-0 */
}
```

### Vorrang vor externer CSS

Das Nutzen von Kaskadenschichten ist der Standardweg, um einen Satz von Stilen über einen anderen Satz von Stilen Vorrang zu geben; Kaskadenschichten ermöglichen dies ohne Verwendung von Spezifizität! Normale (nicht wichtige) Autorenstile, die in Kaskadenschichten importiert wurden, haben eine geringere Priorität als nicht geschichtete Autorenstile.

Wenn Stile aus einem Stylesheet stammen, das Sie nicht bearbeiten können oder nicht verstehen und Stile überschreiben müssen, ist eine Strategie, die Stile, die Sie nicht kontrollieren, in eine Kaskadenschicht zu importieren. Stile in nachfolgend deklarierten Schichten haben Vorrang, wobei nicht geschichtete Stile Vorrang vor allen geschichteten Stilen derselben Herkunft haben.

Wenn zwei Selektoren aus verschiedenen Schichten dasselbe Element entsprechend, sind Herkunft und Wichtigkeit entscheidend; die Spezifizität des Selektors im verlierenden Stylesheet ist irrelevant.

```html
<style>
  @import TW.css layer();
  p,
  p * {
    font-size: 1rem;
  }
</style>
```

Im obigen Beispiel ist der gesamte Absatztext, einschließlich des verschachtelten Inhalts, `1rem`, egal wie viele Klassennamen die Absätze haben, die mit dem TW-Stilblatt übereinstimmen.

### Vermeidung und Überschreibung von `!important`

Die beste Vorgehensweise ist, `!important` nicht zu verwenden. Die obigen Erklärungen zur Spezifizität sollten hilfreich sein, um die Verwendung des Flags zu vermeiden und es vollständig zu entfernen, wenn es auftritt.

Um das wahrgenommene Bedürfnis nach `!important` zu beseitigen, können Sie eines der folgenden Verfahren anwenden:

- Erhöhen Sie die Spezifizität des Selectors der ehemals `!important` Deklaration, sodass sie größer ist als andere Deklarationen
- Geben Sie ihm dieselbe Spezifizität und setzen Sie sie nach der Deklaration, die sie überschreiben soll
- Reduzieren Sie die Spezifizität des Selectors, den Sie überschreiben wollen.

Alle diese Methoden werden in den vorhergehenden Abschnitten behandelt.

Wenn Sie keine `!important`-Flags aus einem Autorenstilmblatt entfernen können, besteht die einzige Lösung zur Überschreibung der wichtigen Stile darin, `!important` zu verwenden. Das Erstellen einer [Kaskadenschicht](/de/docs/Web/CSS/@layer) von wichtigen Deklarierungsüberschreibungen ist eine ausgezeichnete Lösung. Zwei Möglichkeiten, dies zu tun, sind:

#### Methode 1

1. Erstellen Sie ein separates, kurzes Stylesheet, das nur wichtige Deklarationen enthält, die speziell wichtige Deklarationen überschreiben, die Sie nicht entfernen konnten.
2. Importieren Sie dieses Stylesheet als den ersten Import in Ihrem CSS mit `layer()`, einschließlich der `@import`-Anweisung, bevor Sie andere Stylesheets verknüpfen. Dies ist notwendig, um sicherzustellen, dass die wichtigen Überschreibungen als erste Schicht importiert werden.

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

2. Immer wenn Sie eine wichtige Deklaration überschreiben müssen, deklarieren Sie sie innerhalb der benannten Schicht. Deklarieren Sie nur wichtige Regeln innerhalb der Schicht.

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

Die Spezifizität des Selectors der wichtigen Regel innerhalb der Schicht kann gering sein, solange sie das Element trifft, das Sie überschreiben möchten. Normale Schichten sollten außerhalb der Schicht deklariert werden, da geschichtete Stile eine geringere Priorität haben als nicht geschichtete Stile.

### Baum-Nähe-Ignoranz

Die Nähe eines Elements zu anderen Elementen, die in einem gegebenen Selektor referenziert werden, hat keine Auswirkung auf die Spezifizität.

```css
body h1 {
  color: green;
}

html h1 {
  color: purple;
}
```

Die `<h1>`-Elemente werden lila, weil, wenn Deklarationen dieselbe Spezifizität haben, der zuletzt deklarierte Selektor Vorrang hat.

### Direkt angezielte Elemente vs. geerbte Stilformen

Stile für ein direkt angezieltes Element haben immer Vorrang vor geerbten Stilen, unabhängig von der Spezifizität der geerbten Regel. Angesichts des folgenden CSS und HTML:

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

Das `h1` wird lila, weil der `h1`-Selector das Element ausdrücklich anvisiert, während das Grün von den Deklarationen des `#parent` geerbt wird.

## Beispiele

Im folgenden CSS haben wir drei Selektoren, die auf {{HTMLElement('input')}}-Elemente abzielen, um eine Farbe festzulegen. Für eine gegebene Eingabe ist das Spezifizitätsgewicht der Farbdarstellung, die Vorrang hat, der passende Selektor mit dem größten Gewicht:

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

Wenn die obigen Selektoren alle dieselbe Eingabe treffen, wird die Eingabe rot, da die erste Deklaration den höchsten Wert in der _ID_-Spalte hat.

Der letzte Selektor hat vier _TYPE_-Komponenten. Auch wenn er den höchsten Ganzzahlenwert hat, spielt keine Rolle, wie viele Elemente und Pseudoelemente enthalten sind, selbst wenn es 150 wären, haben die _TYPE_-Komponenten nie Vorrang vor _CLASS_-Komponenten. Die Spaltenwerte werden von links nach rechts verglichen, wenn die Spaltenwerte gleich sind.

Hätten wir den ID-Selektor im obigen Beispielcode in einen Attributselektor umgewandelt, hätten die ersten beiden Selektoren dieselbe Spezifizität, wie unten gezeigt:

```css
[id="myElement"] input.myClass {
  color: red;
} /* 0-2-1 */
input[type="password"]:required {
  color: blue;
} /* 0-2-1 */
```

Wenn mehrere Deklarationen gleiche Spezifizität haben, wird die letzte im CSS gefundene Deklaration auf das Element angewendet. Wenn beide Selektoren dasselbe {{HTMLElement('input')}} treffen, wird die Farbe blau sein.

## Zusätzliche Anmerkungen

Ein paar Dinge zur Erinnerung über Spezifizität:

1. Spezifizität gilt nur, wenn dasselbe Element von mehreren Deklarationen in derselben Kaskadenschicht oder Herkunft anvisiert wird. Spezifizität ist nur von Belang für Deklarationen derselben Wichtigkeit und derselben Herkunft und [Kaskadenschicht](/de/docs/Web/CSS/@layer). Wenn übereinstimmende Selektoren in verschiedenen Ursprüngen sind, bestimmt die [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade), welche Deklaration Vorrang hat.

2. Wenn zwei Selektoren in derselben Kaskadenschicht und Herkunft dieselbe Spezifizität haben, wird die Reichweiten-Nähe berechnet; die Regel mit der geringsten Reichweiten-Nähe gewinnt. Siehe [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) für mehr Details und ein Beispiel.

3. Wenn die Reichweiten-Nähe für beide Selektoren ebenfalls gleich ist, wird die Quellreihenfolge berücksichtigt. Wenn alles andere gleich ist, gewinnt der letzte Selektor.

4. Laut den CSS-Regeln werden [direkt angezielte Elemente](#direkt_angezielte_elemente_vs._geerbte_stilformen) immer Vorrang vor Regeln haben, die ein Element von seinem Vorfahren erbt.

5. Die [Nähe der Elemente](#baum-nähe-ignoranz) im Dokumentenbaum hat keinen Einfluss auf die Spezifizität.

## Spezifikationen

{{Specifications}}

## Siehe auch

- ["Spezifität" in "Umgang mit Konflikten"](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity_2)
- [SpeciFISHity](https://specifishity.com/)
- [Spezifitätsrechner](https://specificity.keegan.st/): Eine interaktive Website zum Testen und Verstehen Ihrer eigenen CSS-Regeln
- [_ID-CLASS-TYPE_-Übung](https://estelle.github.io/CSS/selectors/exercises/specificity.html) ein Spezifizitätsquiz
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax) Leitfaden
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
- [CSS-Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Initiale](/de/docs/Web/CSS/CSS_cascade/initial_value), [berechnete](/de/docs/Web/CSS/CSS_cascade/computed_value), [verwendete](/de/docs/Web/CSS/CSS_cascade/used_value) und [tatsächliche](/de/docs/Web/CSS/CSS_cascade/actual_value) Werte
- [Wertedefinitionssyntax](/de/docs/Web/CSS/Value_definition_syntax)
- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [CSS-Verschachtelungsmodul](/de/docs/Web/CSS/CSS_nesting)
