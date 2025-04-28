---
title: Spezifität
slug: Web/CSS/CSS_cascade/Specificity
l10n:
  sourceCommit: 7c0cd9f9b667fe9be0887e8902d09f0013290930
---

{{CSSRef}}

**Spezifität** ist der Algorithmus, den Browser verwenden, um die [CSS-Deklaration](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#css_syntax_basics) zu bestimmen, die für ein Element am relevantesten ist, was wiederum den anzuwendenden Eigenschaftswert für das Element bestimmt. Der Spezifitätsalgorithmus berechnet das Gewicht eines [CSS-Selektors](/de/docs/Web/CSS/Reference#selectors), um zu bestimmen, welche Regel aus konkurrierenden CSS-Deklarationen auf ein Element angewendet wird.

> [!NOTE]
> Browser berücksichtigen die Spezifität **nachdem** sie [Ursprung und Wichtigkeit der Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) bestimmt haben. Mit anderen Worten, bei konkurrierenden Eigenschaftsdeklarationen ist die Spezifität relevant und wird nur zwischen Selektoren aus der einen [Kaskaden-Gruppierung und -Schicht](/de/docs/Web/CSS/@layer) verglichen, die für die Eigenschaft Vorrang hat. [Scoping-Proximität](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) und Reihenfolge des Auftretens werden relevant, wenn die Selektorspezifitäten der konkurrierenden Deklarationen in der vorrangigen Kaskadenschicht gleich sind.

## Wie wird die Spezifität berechnet?

Spezifität ist ein Algorithmus, der das angewendete Gewicht für eine gegebene CSS-Deklaration berechnet. Das Gewicht wird durch die Anzahl der [Selektoren in jeder Gewichtungskategorie](#selektor-gewichtungskategorien) im Selektor bestimmt, der mit dem Element (oder Pseudo-Element) übereinstimmt. Wenn es zwei oder mehr Deklarationen gibt, die unterschiedliche Eigenschaftswerte für dasselbe Element bereitstellen, wird der Deklarationswert im Stilblock angewendet, der den übereinstimmenden Selektor mit dem größten algorithmischen Gewicht hat.

Der Spezifitätsalgorithmus ist im Grunde ein Drei-Spalten-Wert aus drei Kategorien oder Gewichten - ID, CLASS und TYPE - entsprechend den drei Arten von Selektoren. Der Wert repräsentiert die Anzahl der Selektor-Komponenten in jeder Gewichtungskategorie und wird als _ID - CLASS - TYPE_ geschrieben. Die drei Spalten werden erstellt, indem die Anzahl der Selektor-Komponenten für jede Selektorgewichtungskategorie in den Selektoren gezählt wird, die mit dem Element übereinstimmen.

### Selektor-Gewichtungskategorien

Die Selektor-Gewichtungskategorien sind hier in der Reihenfolge abnehmender Spezifität aufgeführt:

- ID-Spalte
  - : Beinhaltet nur [ID-Selektoren](/de/docs/Web/CSS/ID_selectors), wie `#example`. Für jede ID in einem übereinstimmenden Selektor fügen Sie 1-0-0 zum Gewichtswert hinzu.
- CLASS-Spalte
  - : Beinhaltet [Klassen-Selektoren](/de/docs/Web/CSS/Class_selectors), wie `.myClass`, Attribut-Selektoren wie `[type="radio"]` und `[lang|="fr"]`, und Pseudo-Klassen, wie `:hover`, `:nth-of-type(3n)`, und `:required`. Für jede Klasse, jeden Attribut-Selektor oder jede Pseudo-Klasse in einem übereinstimmenden Selektor fügen Sie 0-1-0 zum Gewichtswert hinzu.
- TYPE-Spalte
  - : Beinhaltet [Typ-Selektoren](/de/docs/Web/CSS/Type_selectors), wie `p`, `h1`, und `td`, und Pseudo-Elemente wie `::before`, `::placeholder`, und alle anderen Selektoren mit doppelter Punktnotation. Für jeden Typ oder Pseudo-Element in einem übereinstimmenden Selektor fügen Sie 0-0-1 zum Gewichtswert hinzu.
- Kein Wert
  - : Der universelle Selektor ({{CSSxRef("Universal_selectors", "*")}}) und die Pseudo-Klasse {{CSSxRef(":where", ":where()")}} und ihre Parameter werden beim Berechnen des Gewichts nicht gezählt, sodass ihr Wert 0-0-0 ist, aber sie stimmen mit Elementen überein. Diese Selektoren beeinflussen den Spezifitäts-Gewichtswert nicht.

Kombinatoren, wie {{CSSxRef("Next-sibling_combinator", "+")}}, {{CSSxRef("Child_combinator", "&gt;")}}, {{CSSxRef("Subsequent-sibling_combinator", "~")}}, [" "](/de/docs/Web/CSS/Descendant_combinator), und {{CSSxRef("Column_combinator", "||")}}, können einen Selektor spezifischer machen, was ausgewählt wird, aber sie fügen dem Spezifitätsgewicht keinen Wert hinzu.

Der Verschachtelungs-Kombinator `&` fügt kein Spezifitätsgewicht hinzu, aber verschachtelte Regeln schon. In Bezug auf Spezifität und Funktionalität ist Verschachtelung sehr ähnlich zur {{CSSxRef(":is", ":is()")}} Pseudo-Klasse.

Wie bei der Verschachtelung, fügen die Pseudo-Klassen {{CSSxRef(":is", ":is()")}}, {{CSSxRef(":has", ":has()")}}, und die Negation ({{CSSxRef(":not", ":not()")}}) selbst kein Gewicht hinzu. Die Parameter in diesen Selektoren jedoch schon. Das Spezifitätsgewicht jedes einzelnen ergibt sich aus dem Selektor-Parameter in der Liste der Selektoren mit der höchsten Spezifität. Ebenso werden bei verschachtelten Selektoren die Spezifitätsgewichte der verschachtelten Selektorkomponenten aus dem Selektor in der kommagetrennten Liste von verschachtelten Selektoren mit der höchsten Spezifität bestimmt.

Die [`:not()`, `:is()`, `:has()` und CSS-Verschachtelungsausnahmen](#the_is_not_has_and_css_nesting_exceptions) werden unten besprochen.

#### Übereinstimmender Selektor

Das Spezifitätsgewicht ergibt sich aus dem übereinstimmenden Selektor. Nehmen Sie diesen CSS-Selektor mit drei kommagetrennten Selektoren als Beispiel:

```css
[type="password"],
input:focus,
:root #myApp input:required {
  color: blue;
}
```

Der `[type="password"]` Selektor in der obigen Selektorliste, mit einem Spezifitätsgewicht von `0-1-0`, wendet die `color: blue` Deklaration auf alle Passwort-Eingabetypen an.

Alle Eingaben, unabhängig vom Typ, wenn sie den Fokus erhalten, stimmen mit dem zweiten Selektor in der Liste überein, `input:focus`, mit einem Spezifitätsgewicht von `0-1-1`; dieses Gewicht setzt sich aus der `:focus` Pseudo-Klasse (0-1-0) und dem `input` Typ (0-0-1) zusammen. Wenn das Passwort-Eingabefeld den Fokus hat, stimmt es mit `input:focus` überein, und das Spezifitätsgewicht für die `color: blue` Stil-Deklaration wird `0-1-1` sein. Wenn dieses Passwort keinen Fokus hat, bleibt das Spezifitätsgewicht bei `0-1-0`.

Die Spezifität für ein erforderliches Eingabeelement, das in einem Element mit dem Attribut `id="myApp"` verschachtelt ist, beträgt `1-2-1`, basierend auf einer ID, zwei Pseudo-Klassen und einem Elementtyp.

Wenn der Passwort-Eingabetyp mit `required` in einem Element mit `id="myApp"` verschachtelt ist, beträgt das Spezifitätsgewicht `1-2-1`, basierend auf einer ID, zwei Pseudo-Klassen und einem Elementtyp, unabhängig davon, ob es den Fokus hat oder nicht. Warum ist das Spezifitätsgewicht `1-2-1` statt `0-1-1` oder `0-1-0` in diesem Fall? Weil das Spezifitätsgewicht vom übereinstimmenden Selektor mit dem größten Spezifitätsgewicht kommt. Das Gewicht wird bestimmt, indem die Werte in den drei Spalten von links nach rechts verglichen werden.

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

Sobald die Spezifizitätswerte der relevanten Selektoren bestimmt sind, werden die Anzahl der Selektorkomponenten in jeder Spalte von links nach rechts verglichen.

```css
#myElement {
  color: green; /* 1-0-0  - WINS!! */
}
.bodyClass .sectionClass .parentClass [id="myElement"] {
  color: yellow; /* 0-4-0 */
}
```

Die erste Spalte ist der Wert der _ID_-Komponente, was die Anzahl der IDs in jedem Selektor ist. Die Zahlen in den _ID_-Spalten der konkurrierenden Selektoren werden verglichen. Der Selektor mit dem höheren Wert in der _ID_-Spalte gewinnt, egal wie die Werte in den anderen Spalten sind. Im obigen Beispiel, selbst wenn der gelbe Selektor mehr Komponenten insgesamt hat, zählt nur der Wert der ersten Spalte.

Wenn die Zahl in den _ID_-Spalten der konkurrierenden Selektoren gleich ist, wird die nächste Spalte, _CLASS_, verglichen, wie unten gezeigt.

```css
#myElement {
  color: yellow; /* 1-0-0 */
}
#myApp [id="myElement"] {
  color: green; /* 1-1-0  - WINS!! */
}
```

Die _CLASS_-Spalte ist die Anzahl der Klassennamen, Attribut-Selektoren und Pseudo-Klassen im Selektor. Wenn der Wert der _ID_-Spalte gleich ist, gewinnt der Selektor mit dem höheren Wert in der _CLASS_-Spalte, egal wie der Wert in der _TYPE_-Spalte ist. Dies wird im folgenden Beispiel gezeigt.

```css
:root input {
  color: green; /* 0-1-1 - WINS because CLASS column is greater */
}
html body main input {
  color: yellow; /* 0-0-4 */
}
```

Wenn die Zahlen in den _CLASS_- und _ID_-Spalten in konkurrierenden Selektoren gleich sind, wird die _TYPE_-Spalte relevant. Die _TYPE_-Spalte ist die Anzahl der Elementtypen und Pseudo-Elemente im Selektor. Wenn die ersten beiden Spalten denselben Wert haben, gewinnt der Selektor mit der größeren Zahl in der _TYPE_-Spalte.

Wenn die konkurrierenden Selektoren in allen drei Spalten denselben Wert haben, kommt die Proximitätsregel zum Tragen, wobei die zuletzt deklarierte Stilregel Vorrang hat.

```css
input.myClass {
  color: yellow; /* 0-1-1 */
}
:root input {
  color: green; /* 0-1-1 WINS because it comes later */
}
```

### Die `:is()`, `:not()`, `:has()` und CSS-Verschachtelungsausnahmen

Die Matches-Beliebig-Pseudo-Klasse {{CSSxRef(":is", ":is()")}}, die relationale Pseudo-Klasse {{CSSxRef(":has", ":has()")}} und die Negations-Pseudo-Klasse {{CSSxRef(":not", ":not()")}} werden _nicht_ als Pseudo-Klassen in der Spezifitätsgewichtungsberechnung betrachtet. Sie selbst fügen der Spezifitätsgleichung kein Gewicht hinzu. Die Selektor-Parameter, die in den Pseudo-Klassen-Klammern übergeben werden, sind jedoch Teil des Spezifitätsalgorithmus; das Gewicht der Matches-Beliebig- und Negations-Pseudo-Klasse in der Spezifitätswertberechnung ist das Gewicht des Parameters [Gewicht](#selektor-gewichtungskategorien).

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

Beachten Sie, dass im obigen CSS-Paar das Spezifitätsgewicht, das die `:is()`, `:has()` und `:not()` Pseudo-Klassen bereitstellen, der Wert des Selektor-Parameters ist und nicht der der Pseudo-Klasse.

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

Im obigen CSS-Codeblock haben wir `#fakeId` in den Selektoren aufgenommen. Dieses `#fakeId` fügt jedem Absatz `1-0-0` zur Spezifitätsgewichtung hinzu.

Wenn Sie komplexe Selektorlisten mit [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting) erstellen, verhält sich das genau so wie die `:is()` Pseudo-Klasse.

```css
p,
#fakeId {
  span {
    /* 1-0-1 */
  }
}
```

Im obigen Codeblock wird die komplexe Selektor `p, #fakeId` die Spezifität von `#fakeId` und auch dem `span` übernommen, wodurch eine Spezifität von `1-0-1` sowohl für `p span` als auch `#fakeId span` erzeugt wird. Dies ist die gleiche Spezifität wie der `:is(p, #fakeId) span` Selektor.

In der Regel sollten Sie die Spezifität so gering wie möglich halten, aber falls Sie die Spezifität eines Elements aus einem bestimmten Grund erhöhen müssen, können diese drei Pseudo-Klassen helfen.

```css
a:not(#fakeId#fakeId#fakeID) {
  color: blue; /* 3-0-1 */
}
```

In diesem Beispiel werden alle Links blau sein, es sei denn, sie werden durch eine Link-Deklaration mit 3 oder mehr IDs überschrieben, einem Farbwert, der ein `a` einschließt, das das [`!important`-Flag](#the_!important_exception) enthält, oder wenn der Link eine [Inline-Stil](#inline-stile)-Farbdeklaration hat. Wenn Sie eine solche Technik verwenden, fügen Sie einen Kommentar hinzu, um zu erklären, warum der Hack erforderlich war.

### Inline-Stile

Inline-Stile, die einem Element hinzugefügt werden (z.B. `style="font-weight: bold;"`), überschreiben immer alle normalen Stile in Autoren-Stylesheets und können daher als höchste Spezifität betrachtet werden. Betrachten Sie Inline-Stile als ein Spezifitätsgewicht von `1-0-0-0`.

Der einzige Weg, Inline-Stile zu überschreiben, ist durch Verwendung von `!important`.

Viele JavaScript-Frameworks und -Bibliotheken fügen Inline-Stile hinzu. Die Verwendung von `!important` mit einem sehr zielgerichteten Selektor, wie einem Attribut-Selektor mit dem Inline-Stil, ist eine Möglichkeit, diese Inline-Stile zu überschreiben.

```html
<p style="color: purple">…</p>
```

```css
p[style*="purple"] {
  color: rebeccapurple !important;
}
```

Fügen Sie bei jedem Einfügen des wichtigen Flags einen Kommentar hinzu, damit Codepfleger verstehen, warum ein CSS-Antimuster verwendet wurde.

### Die `!important` Ausnahme

CSS-Deklarationen, die als wichtig markiert sind, überschreiben alle anderen Deklarationen innerhalb derselben Kaskadenschicht und -ursprung. Obwohl technisch gesehen [`!important`](/de/docs/Web/CSS/important) nichts mit der Spezifität zu tun hat, interagiert es direkt mit der Spezifität und der Kaskade. Es kehrt die [Kaskaden](/de/docs/Web/CSS/CSS_cascade/Cascade)-Reihenfolge von Stylesheets um.

Wenn Deklarationen aus demselben Ursprung und derselben Kaskadenschicht in Konflikt stehen und ein Eigenschaftswert das `!important`-Flag gesetzt hat, wird die wichtige Deklaration angewendet, egal wie die Spezifität ist. Wenn konkurrierende Deklarationen aus demselben Ursprung und derselben Kaskadenschicht mit dem `!important` Flag auf dasselbe Element angewendet werden, wird die Deklaration mit höherer Spezifität angewendet.

Die Verwendung von `!important`, um Spezifität zu überschreiben, wird als **schlechte Praxis** angesehen und sollte für diesen Zweck vermieden werden. Das Verständnis und die effektive Verwendung der Spezifität und der Kaskade kann jeglichen Bedarf für das `!important`-Flag beseitigen.

Statt `!important` zu verwenden, um fremde CSS (von externen Bibliotheken, wie Bootstrap oder normalize.css) zu überschreiben, importieren Sie die Drittanbieter-Skripte direkt in [Kaskadenschichten](/de/docs/Web/CSS/@layer). Wenn Sie `!important` in Ihrem CSS verwenden müssen, kommentieren Sie Ihre Verwendung, damit zukünftige Codepfleger wissen, warum die Deklaration als wichtig markiert wurde und nicht überschrieben werden sollte. Aber verwenden Sie definitiv nicht `!important`, wenn Sie Plugins oder Frameworks schreiben, die in andere Entwickler einfließen müssen, ohne dass diese die Kontrolle haben.

### Die `:where()` Ausnahme

Die Spezifizitätsanpassungspseudoklasse {{CSSxRef(":where", ":where()")}} hat immer ihre Spezifität durch Null ersetzt, `0-0-0`. Sie ermöglicht die Erstellung von CSS-Selektoren, die sehr spezifisch sind, welche Elemente angesprochen werden, ohne jeglichen Anstieg der Spezifität.

Beim Erstellen von Drittanbieter-CSS, das von Entwicklern verwendet werden soll, die keinen Zugang haben, Ihr CSS zu bearbeiten, wird empfohlen, CSS mit der niedrigstmöglichen Spezifität zu erstellen. Wenn zum Beispiel Ihr Theme das folgende CSS enthält:

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

Das Einschließen eines Regelsets in einen `@scope` Block beeinflusst nicht die Spezifität seines Selektors, unabhängig von den innerhalb der Scope-Root und dem Limit verwendeten Selektoren. Zum Beispiel:

```css
@scope (.article-body) {
  /* img has a specificity of 0-0-1, as expected */
  img {
  }
}
```

Wenn Sie sich jedoch entscheiden, die `:scope` Pseudo-Klasse explizit Ihren Scoped-Selektoren voranzustellen, müssen Sie sie in die Berechnung ihrer Spezifität einbeziehen. `:scope`, wie alle regulären Pseudo-Klassen, hat eine Spezifität von 0-1-0. Zum Beispiel:

```css
@scope (.article-body) {
  /* :scope img has a specificity of 0-1-0 + 0-0-1 = 0-1-1 */
  :scope img {
  }
}
```

Wenn Sie den `&` Selektor innerhalb eines `@scope` Blocks verwenden, repräsentiert `&` den Scope-Root-Selektor; es wird intern in diesen Selektor umgeschrieben, der in einen {{cssxref(":is", ":is()")}} Selektor eingeschlossen ist. Zum Beispiel:

```css
@scope (figure, #primary) {
  & img {
  }
}
```

`& img` entspricht `:is(figure, #primary) img`.

Da `:is()` die Spezifität seines spezifischsten Arguments übernimmt (`#primary` in diesem Fall), ist die Spezifität des Scoped `& img` Selektors daher 1-0-0 + 0-0-1 = 1-0-1.

## Tipps zur Handhabung von Spezifitätsproblemen

Statt `!important` zu verwenden, sollten Sie Kaskadenschichten verwenden und im gesamten CSS eine geringe Spezifität beibehalten, sodass Stile leicht mit etwas spezifischeren Regeln überschrieben werden können. Die Verwendung semantischen HTMLs hilft, Ankerpunkte zu schaffen, von denen aus das Styling angewendet werden kann.

### Selektoren spezifisch machen, ohne Spezifität hinzuzufügen

Indem Sie den Abschnitt des Dokuments angeben, den Sie vor dem Element stilisieren, das Sie auswählen, wird die Regel spezifischer. Abhängig davon, wie Sie es hinzufügen, können Sie ein wenig, viel oder gar keine Spezifität hinzufügen, wie unten gezeigt:

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

#### Reduzierung der ID-Spezifität

Spezifität basiert auf der Form eines Selektors. Das Einfügen der `id` eines Elements als Attribut-Selektor anstelle eines ID-Selektors ist eine gute Möglichkeit, ein Element spezifischer zu machen, ohne eine Überfülle an Spezifität hinzuzufügen. Im vorherigen Beispiel zählt der Selektor `[id="myContent"]` als Attribut-Selektor bei der Bestimmung der Spezifität des Selektors, obwohl er eine ID auswählt.

Sie können die `id` oder einen Teil eines Selektors auch als Parameter in der Spezifizitätsanpassungspseudoklasse `:where()` einschließen, wenn Sie einen Selektor spezifischer machen müssen, aber überhaupt keine Spezifität hinzufügen möchten.

### Erhöhung der Spezifität durch Duplizieren von Selektoren

Als Sonderfall zur Erhöhung der Spezifität können Sie Gewichte aus den _CLASS_- oder _ID_-Spalten duplizieren. Durch Duplizieren von ID-, Klassen-, Pseudo-Klassen- oder Attributselektoren innerhalb eines zusammengesetzten Selektors wird die Spezifität erhöht, wenn sehr spezifische Selektoren überschrieben werden sollen, über die Sie keine Kontrolle haben.

```css
#myId#myId#myId span {
  /* 3-0-1 */
}
.myClass.myClass.myClass span {
  /* 0-3-1 */
}
```

Verwenden Sie dies sparsam, wenn überhaupt. Wenn Sie Selektorduplikation verwenden, kommentieren Sie immer Ihr CSS.

Durch die Verwendung von `:is()` und `:not()` (und auch `:has()`), können Sie die Spezifität erhöhen, selbst wenn Sie einem übergeordneten Element keine `id` hinzufügen können:

```css
:not(#fakeID#fakeId#fakeID) span {
  /* 3-0-1 */
}
:is(#fakeID#fakeId#fakeID, span) {
  /* 3-0-0 */
}
```

### Vorrang über Drittanbieter-CSS

Das Ausnutzen von Kaskadenschichten ist der Standardweg, um einen Satz von Stilen Vorrang gegenüber einem anderen Satz von Stilen zu geben; Kaskadenschichten ermöglichen dies ohne Verwendung von Spezifität! Normale (nicht wichtige) Autorenstile, die in Kaskadenschichten importiert werden, haben eine geringere Priorität als nicht geschichtete Autorenstile.

Wenn Stile aus einem Stylesheet stammen, das Sie nicht bearbeiten können oder nicht verstehen und Sie Stile überschreiben müssen, ist eine Strategie, die Stile, die Sie nicht kontrollieren, in eine Kaskadenschicht zu importieren. Stile in nachfolgend deklarierten Schichten haben Vorrang, wobei nicht geschichtete Stile Vorrang vor allen geschichteten Stilen desselben Ursprungs haben.

Wenn zwei Selektoren aus verschiedenen Schichten dasselbe Element übereinstimmen, haben Ursprung und Wichtigkeit Vorrang; die Spezifität des Selektors im verlierenden Stylesheet ist irrelevant.

```html
<style>
  @import TW.css layer();
  p,
  p * {
    font-size: 1rem;
  }
</style>
```

Im obigen Beispiel wird aller Absatztext, einschließlich des geschachtelten Inhalts, `1rem` sein, egal wie viele Klassennamen die Absätze haben, die mit dem TW Stylesheet übereinstimmen.

### Vermeidung und Überschreibung von `!important`

Der beste Ansatz ist es, `!important` nicht zu verwenden. Die obigen Erklärungen zur Spezifität sollten hilfreich sein, um die Verwendung des Flags zu vermeiden und es insgesamt zu entfernen, wenn es auftritt.

Um den wahrgenommenen Bedarf an `!important` zu beseitigen, können Sie folgendes tun:

- Erhöhen Sie die Spezifität des Selektors der ehemals `!important`-Deklaration, sodass sie größer ist als andere Deklarationen
- Geben Sie ihm die gleiche Spezifität und setzen Sie ihn hinter die Deklaration, die er überschreiben soll
- Verringern Sie die Spezifität des Selektors, den Sie überschreiben möchten.

All diese Methoden werden in den vorhergehenden Abschnitten behandelt.

Wenn Sie die `!important` Flags aus einem Autoren-Stylesheet nicht entfernen können, ist die einzige Lösung, wichtige Styles zu überschreiben, indem Sie `!important` verwenden. Das Erstellen einer [Kaskadenschicht](/de/docs/Web/CSS/@layer) von wichtigen Deklarations-Überschreibungen ist eine ausgezeichnete Lösung. Zwei Möglichkeiten hierfür sind:

#### Methode 1

1. Erstellen Sie ein separates, kurzes Stylesheet, das nur wichtige Deklarationen enthält, die speziell wichtige Deklarationen überschreiben, die Sie nicht entfernen konnten.
2. Importieren Sie dieses Stylesheet als ersten Import in Ihrem CSS mit `layer()`, einschließlich der `@import` Anweisung, bevor Sie andere Stylesheets verlinken. Dies dient dazu, sicherzustellen, dass die wichtigen Überschreibungen als erste Schicht importiert werden.

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

Die Spezifität des Selektors des wichtigen Stils innerhalb der Schicht kann niedrig sein, solange er das Element übereinstimmt, das Sie überschreiben möchten. Normale Schichten sollten außerhalb der Schicht deklariert werden, da geschichtete Stile eine geringere Priorität haben als nicht geschichtete Stile.

### Ignorieren der Baumproximität

Die Nähe eines Elements zu anderen Elementen, die in einem gegebenen Selektor referenziert werden, hat keinen Einfluss auf die Spezifität.

```css
body h1 {
  color: green;
}

html h1 {
  color: purple;
}
```

Die `<h1>` Elemente werden violett sein, weil, wenn Deklarationen die gleiche Spezifität haben, der zuletzt deklarierte Selektor Vorrang hat.

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

Das `h1` wird violett sein, weil der `h1` Selektor das Element spezifisch anspricht, während das Grün vom `#parent` Deklarationen geerbt wird.

## Beispiele

Im folgenden CSS haben wir drei Selektoren, die {{HTMLElement('input')}} Elemente ansprechen, um eine Farbe festzulegen. Für ein gegebenes Input ist das Spezifitätsgewicht der Farbdarstellung, die Vorrang hat, der übereinstimmende Selektor mit dem größten Gewicht:

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

Wenn die obigen Selektoren alle dasselbe Input ansprechen, wird das Inputfeld rot sein, da die erste Deklaration den höchsten Wert in der _ID_-Spalte hat.

Der letzte Selektor hat vier Komponenten vom Typ _TYPE_. Während er den höchsten Integer-Wert hat, egal wie viele Elemente und Pseudo-Elemente enthalten sind, selbst wenn es 150 wären, haben TYPE-Komponenten niemals Vorrang vor _CLASS_-Komponenten. Die Spaltenwerte werden verglichen, beginnend von links nach rechts, wenn die Spaltenwerte gleich sind.

Hätten wir den ID-Selektor im obigen Beispielcode in einen Attribut-Selektor umgewandelt, hätten die ersten beiden Selektoren die gleiche Spezifität, wie unten dargestellt:

```css
[id="myElement"] input.myClass {
  color: red;
} /* 0-2-1 */
input[type="password"]:required {
  color: blue;
} /* 0-2-1 */
```

Wenn mehrere Deklarationen die gleiche Spezifität haben, wird die letzte im CSS gefundene Deklaration auf das Element angewendet. Wenn beide Selektoren dasselbe {{HTMLElement('input')}} übereinstimmen, wird die Farbe blau sein.

## Zusätzliche Anmerkungen

Einige Dinge, die man über Spezifität beachten sollte:

1. Spezifität gilt nur, wenn dasselbe Element von mehreren Deklarationen in derselben Kaskadenschicht oder -ursprung angesprochen wird. Spezifität zählt nur für Deklarationen der gleichen Wichtigkeit und des gleichen Ursprungs und derselben [Kaskadenschicht](/de/docs/Web/CSS/@layer). Wenn übereinstimmende Selektoren in verschiedenen Ursprüngen sind, bestimmt die [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade), welche Deklaration Vorrang hat.

2. Wenn zwei Selektoren in derselben Kaskadenschicht und Ursprung die gleiche Spezifität haben, wird dann Scoping-Proximität berechnet; das Regelset mit der niedrigsten Scoping-Proximität gewinnt. Siehe [Wie `@scope` Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) für weitere Details und ein Beispiel.

3. Wenn die Scope-Proximität für beide Selektoren ebenfalls gleich ist, kommt die Quellreihenfolge zum Tragen. Wenn alles andere gleich ist, gewinnt der letzte Selektor.

4. Gemäß den CSS-Regeln werden [direkt adressierte Elemente](#direkt_angesprochene_elemente_vs._geerbte_stile) immer Vorrang vor Regeln haben, die ein Element von seinem Vorfahren erbt.

5. [Nähe von Elementen](#ignorieren_der_baumproximität) im Dokumentbaum hat keinen Einfluss auf die Spezifität.

## Spezifikationen

{{Specifications}}

## Siehe auch

- ["Spezifität" in "Umgang mit Konflikten"](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity_2)
- [SpeciFISHity](https://specifishity.com/)
- [Spezifitätsrechner](https://specificity.keegan.st/): Eine interaktive Website, um Ihre eigenen CSS-Regeln zu testen und zu verstehen
- [_ID-CLASS-TYPE_ Übung](https://estelle.github.io/CSS/selectors/exercises/specificity.html) ein Spezifitäts-Quiz
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax) Leitfaden
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
- [Fehlerbehandlung bei CSS](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Initial](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value), [berechnet](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value), [verwendet](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value), und [tatsächliche](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value) Werte
- [Wertdefinitions-Syntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [CSS-Verschachtelungsmodul](/de/docs/Web/CSS/CSS_nesting)
