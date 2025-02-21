---
title: Spezifität
slug: Web/CSS/CSS_cascade/Specificity
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

**Spezifität** ist der Algorithmus, den Browser verwenden, um festzustellen, welche [CSS-Deklaration](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#css_syntax_basics) für ein Element am relevantesten ist, was wiederum bestimmt, welcher Eigenschaftswert auf das Element angewendet wird. Der Spezifitätsalgorithmus berechnet das Gewicht eines [CSS-Selectors](/de/docs/Web/CSS/Reference#selectors), um zu bestimmen, welche Regel aus konkurrierenden CSS-Deklarationen auf ein Element angewendet wird.

> [!NOTE]
> Browser berücksichtigen die Spezifität **nach** der Bestimmung von [Kaskade-Ursprung und Wichtigkeit](/de/docs/Web/CSS/CSS_cascade/Cascade). Mit anderen Worten, bei konkurrierenden Eigenschaftsdeklarationen ist die Spezifität nur dann relevant und vergleichbar, wenn die Selektoren aus dem einen [Kaskade-Ursprung und der Ebene](/de/docs/Web/CSS/@layer) stammen, die Vorrang für die Eigenschaft hat. [Scoping-Nähe](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) und Reihenfolge des Erscheinens werden relevant, wenn die Selektor-Spezifitäten der konkurrierenden Deklarationen in der Kaskadenschicht mit Vorrang gleich sind.

## Wie wird die Spezifität berechnet?

Spezifität ist ein Algorithmus, der das Gewicht berechnet, das auf eine gegebene CSS-Deklaration angewendet wird. Das Gewicht wird durch die Anzahl der [Selektoren jeder Gewichtskategorie](#selektor-gewichtskategorien) im Selektor bestimmt, der mit dem Element (oder Pseudo-Element) übereinstimmt. Wenn es zwei oder mehr Deklarationen gibt, die für dasselbe Element unterschiedliche Eigenschaftswerte bereitstellen, wird der Deklarationswert im Stilblock mit dem übereinstimmenden Selektor mit dem größten algorithmischen Gewicht angewendet.

Der Spezifitätsalgorithmus ist im Grunde ein drei-spaltiger Wert von drei Kategorien oder Gewichten - ID, CLASS und TYPE - entsprechend den drei Typen von Selektoren. Der Wert repräsentiert die Anzahl der Selektorkomponenten in jeder Gewichtskategorie und wird als _ID - CLASS - TYPE_ geschrieben. Die drei Spalten werden erstellt, indem die Anzahl der Selektorkomponenten für jede Selektor-Gewichtskategorie in den Selektoren gezählt wird, die mit dem Element übereinstimmen.

### Selektor-Gewichtskategorien

Die Selektor-Gewichtskategorien sind hier in der Reihenfolge abnehmender Spezifität aufgelistet:

- ID-Spalte
  - : Enthält nur [ID-Selektoren](/de/docs/Web/CSS/ID_selectors), wie `#example`. Für jede ID in einem übereinstimmenden Selektor, addieren Sie 1-0-0 zum Gewichtswert.
- CLASS-Spalte
  - : Beinhaltet [Klassen-Selektoren](/de/docs/Web/CSS/Class_selectors), wie `.myClass`, Attribut-Selektoren wie `[type="radio"]` und `[lang|="fr"]`, und Pseudo-Klassen, wie `:hover`, `:nth-of-type(3n)` und `:required`. Für jede Klasse, Attribut-Selektor oder Pseudo-Klasse in einem übereinstimmenden Selektor, addieren Sie 0-1-0 zum Gewichtswert.
- TYPE-Spalte
  - : Enthält [Typ-Selektoren](/de/docs/Web/CSS/Type_selectors), wie `p`, `h1` und `td`, und Pseudo-Elemente wie `::before`, `::placeholder`, und alle anderen Selektoren mit Doppelpunkt-Notation. Für jeden Typ oder Pseudo-Element in einem übereinstimmenden Selektor, addieren Sie 0-0-1 zum Gewichtswert.
- Kein Wert
  - : Der universelle Selektor ({{CSSxRef("Universal_selectors", "*")}}) und die Pseudo-Klasse {{CSSxRef(":where", ":where()")}} und deren Parameter werden beim Berechnen des Gewichts nicht gezählt, sodass deren Wert 0-0-0 ist, aber sie passen zu Elementen. Diese Selektoren haben keinen Einfluss auf den Spezifitätsgewichtswert.

Kombinatoren, wie {{CSSxRef("Next-sibling_combinator", "+")}}, {{CSSxRef("Child_combinator", "&gt;")}}, {{CSSxRef("Subsequent-sibling_combinator", "~")}}, [" "](/de/docs/Web/CSS/Descendant_combinator), und {{CSSxRef("Column_combinator", "||")}}, können einen Selektor spezifischer in Bezug darauf machen, was ausgewählt wird, aber sie fügen dem Spezifitätsgewicht keinen Wert hinzu.

Der `&` Verschachtelungs-Kombinator fügt kein Spezifizitätsgewicht hinzu, aber verschachtelte Regeln tun dies. In Bezug auf Spezifität und Funktionalität ist das Verschachteln dem {{CSSxRef(":is", ":is()")}} Pseudo-Klasse sehr ähnlich.

Wie beim Verschachteln fügen die {{CSSxRef(":is", ":is()")}}, {{CSSxRef(":has", ":has()")}}, und Negations-Pseudo-Klassen ({{CSSxRef(":not", ":not()")}}) selbst kein Gewicht hinzu. Die Parameter in diesen Selektoren jedoch schon. Das Spezifitätsgewicht jedes einzelnen kommt von dem Selektor-Parameter in der Liste der Selektoren mit der höchsten Spezifität. Ebenso wird bei verschachtelten Selektoren das Spezifitätsgewicht, das durch die verschachtelte Selektorkomponente hinzugefügt wird, durch den Selektor in der kommagetrennten Liste von verschachtelten Selektoren mit der höchsten Spezifität bestimmt.

Die Ausnahmen [`:not()`, `:is()`, `:has()` und CSS-Verschachtelungen](#the_is_not_has_and_css_nesting_exceptions) werden unten erörtert.

#### Übereinstimmender Selektor

Das Spezifitätsgewicht kommt vom übereinstimmenden Selektor. Nehmen Sie diesen CSS-Selektor mit drei kommagetrennten Selektoren als Beispiel:

```css
[type="password"],
input:focus,
:root #myApp input:required {
  color: blue;
}
```

Der `[type="password"]`-Selektor in der obigen Selektorliste, mit einem Spezifitätsgewicht von `0-1-0`, wendet die `color: blue`-Deklaration auf alle Passworteingabetypen an.

Alle Eingaben, unabhängig vom Typ, die den Fokus erhalten, passen zum zweiten Selektor in der Liste, `input:focus`, mit einem Spezifitätsgewicht von `0-1-1`; dieses Gewicht setzt sich aus der `:focus`-Pseudo-Klasse (0-1-0) und dem `input`-Typ (0-0-1) zusammen. Wenn die Passwort-Eingabe den Fokus hat, wird sie mit `input:focus` übereinstimmen, und das Spezifitätsgewicht für die `color: blue`-Stildeklaration wird `0-1-1` sein. Wenn dieses Passwort keinen Fokus hat, bleibt das Spezifitätsgewicht bei `0-1-0`.

Die Spezifität für die erforderliche Eingabe, die in einem Element mit dem Attribut `id="myApp"` verschachtelt ist, beträgt `1-2-1`, basierend auf einer ID, zwei Pseudo-Klassen und einem Elementtyp.

Wenn der Passworteingabetyp mit `required` in ein Element mit `id="myApp"` verschachtelt ist, beträgt das Spezifitätsgewicht `1-2-1`, basierend auf einer ID, zwei Pseudo-Klassen und einem Elementtyp, unabhängig davon, ob er den Fokus hat oder nicht. Warum ist das Spezifitätsgewicht `1-2-1` anstelle von `0-1-1` oder `0-1-0` in diesem Fall? Weil das Spezifitätsgewicht vom übereinstimmenden Selektor mit dem größten Spezifitätsgewicht kommt. Das Gewicht wird durch den Vergleich der Werte in den drei Spalten, von links nach rechts, bestimmt.

```css
[type="password"]             /* 0-1-0 */
input:focus                   /* 0-1-1 */
:root #myApp input:required   /* 1-2-1 */
```

### Drei-Spalten-Vergleich

Sobald die Spezifitätswerte der relevanten Selektoren bestimmt sind, werden die Anzahl der Selektorkomponenten in jeder Spalte, von links nach rechts, verglichen.

```css
#myElement {
  color: green; /* 1-0-0  - WINS!! */
}
.bodyClass .sectionClass .parentClass [id="myElement"] {
  color: yellow; /* 0-4-0 */
}
```

Die erste Spalte ist der Wert der _ID_-Komponente, welcher die Anzahl der IDs in jedem Selektor ist. Die Zahlen in den _ID_-Spalten der konkurrierenden Selektoren werden verglichen. Der Selektor mit dem größeren Wert in der _ID_-Spalte gewinnt, unabhängig davon, welche Werte in den anderen Spalten sind. Im obigen Beispiel, selbst wenn der gelbe Selektor mehr Komponenten insgesamt hat, zählt nur der Wert der ersten Spalte.

Wenn die Zahl in den _ID_-Spalten der konkurrierenden Selektoren gleich ist, wird die nächste Spalte, _CLASS_, verglichen, wie unten gezeigt.

```css
#myElement {
  color: yellow; /* 1-0-0 */
}
#myApp [id="myElement"] {
  color: green; /* 1-1-0  - WINS!! */
}
```

Die _CLASS_-Spalte ist die Anzahl der Klassennamen, Attribut-Selektoren und Pseudo-Klassen im Selektor. Wenn der Wert der _ID_-Spalte gleich ist, gewinnt der Selektor mit dem größeren Wert in der _CLASS_-Spalte, unabhängig vom Wert in der _TYPE_-Spalte. Dies wird im folgenden Beispiel gezeigt.

```css
:root input {
  color: green; /* 0-1-1 - WINS because CLASS column is greater */
}
html body main input {
  color: yellow; /* 0-0-4 */
}
```

Wenn die Zahlen in den _CLASS_- und _ID_-Spalten der konkurrierenden Selektoren gleich sind, wird die _TYPE_-Spalte relevant. Die _TYPE_-Spalte ist die Anzahl der Elementtypen und Pseudo-Elemente im Selektor. Wenn die ersten zwei Spalten den gleichen Wert haben, gewinnt der Selektor mit der größeren Zahl in der _TYPE_-Spalte.

Wenn die konkurrierenden Selektoren die gleichen Werte in allen drei Spalten haben, kommt die Näherungsregel zur Anwendung, bei der die zuletzt deklarierte Stilregel Vorrang hat.

```css
input.myClass {
  color: yellow; /* 0-1-1 */
}
:root input {
  color: green; /* 0-1-1 WINS because it comes later */
}
```

### Die `:is()`, `:not()`, `:has()` und CSS-Verschachtelungs-Ausnahmen

Die Pseudo-Klasse für beliebige Übereinstimmungen {{CSSxRef(":is", ":is()")}}, die relationale Pseudo-Klasse {{CSSxRef(":has", ":has()")}}, und die Negations-Pseudo-Klasse {{CSSxRef(":not", ":not()")}} werden _nicht_ als Pseudo-Klassen in der Spezifitätsgewicht-Berechnung betrachtet. Sie selbst fügen der Spezifitätsgleichung kein Gewicht hinzu. Jedoch sind die Selektor-Parameter, die in die Pseudo-Klassen-Klammern übergeben werden, Teil des Spezifitätsalgorithmus; das Gewicht der beliebigen Übereinstimmungen und der Negations-Pseudo-Klasse in der Spezifitätswert-Berechnung ist das Gewicht des Parameters [Gewicht](#selektor-gewichtskategorien).

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

Beachten Sie, dass im obigen CSS-Paar das Spezifitätsgewicht, das durch die `:is()`, `:has()` und `:not()`-Pseudo-Klassen bereitgestellt wird, der Wert des Selektor-Parameters und nicht der Pseudo-Klasse ist.

Alle drei dieser Pseudo-Klassen akzeptieren komplexe Selektorlisten, eine Liste von kommagetrennten Selektoren, als Parameter. Diese Funktion kann genutzt werden, um die Spezifität eines Selektors zu erhöhen:

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

Im obigen Codeblock wird die komplexe Selektor `p, #fakeId`. Die Spezifität wird von `#fakeId` und auch von `span` übernommen, sodass dies eine Spezifität von `1-0-1` für sowohl `p span` als auch `#fakeId span` schafft. Dies ist die äquivalente Spezifität wie der `:is(p, #fakeId) span` Selektor.

Im Allgemeinen möchten Sie die Spezifität so gering wie möglich halten, aber wenn Sie die Spezifität eines Elements aus einem bestimmten Grund erhöhen müssen, können diese drei Pseudo-Klassen helfen.

```css
a:not(#fakeId#fakeId#fakeID) {
  color: blue; /* 3-0-1 */
}
```

In diesem Beispiel sind alle Links blau, es sei denn, sie werden von einer Link-Deklaration mit 3 oder mehr IDs überschrieben, einem Farbwert, der mit einem `a`-Element übereinstimmt und das [`!important`-Flag](#the_!important_exception) enthält, oder wenn der Link eine [Inline-Stile](#inline-stile) Farbdeklaration hat. Wenn Sie eine solche Technik verwenden, fügen Sie einen Kommentar hinzu, um zu erklären, warum der Hack benötigt wurde.

### Inline-Stile

Inline-Stile, die einem Element hinzugefügt werden (z.B. `style="font-weight: bold;"`), überschreiben immer normale Stile in Autor-Stilblättern und können daher als mit der höchsten Spezifität angesehen werden. Denken Sie an Inline-Stile als hätten sie ein Spezifitätsgewicht von `1-0-0-0`.

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

Fügen Sie bei jeder Aufnahme des `important`-Flags unbedingt einen Kommentar hinzu, damit Codebetreuer verstehen, warum ein CSS-Anti-Pattern verwendet wurde.

### Die `!important`-Ausnahme

CSS-Deklarationen, die als wichtig gekennzeichnet sind, überschreiben alle anderen Deklarationen innerhalb derselben Kaskadenschicht und desselben Ursprungs. Obwohl technisch [`!important`](/de/docs/Web/CSS/important) nichts mit Spezifität zu tun hat, interagiert es direkt mit Spezifität und der Kaskade. Es kehrt die [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) Reihenfolge von Stilblättern um.

Wenn Deklarationen aus demselben Ursprung und Kaskadenschicht in Konflikt stehen und einer Eigenschaftswert das `!important`-Flag gesetzt hat, wird die wichtige Deklaration angewendet, unabhängig von der Spezifität. Wenn in Konflikt stehende Deklarationen aus demselben Ursprung und Kaskadenschicht mit dem `!important`-Flag auf dasselbe Element angewendet werden, wird die Deklaration mit einer größeren Spezifität angewendet.

Die Verwendung von `!important` zur Überschreibung der Spezifität wird als **schlechte Praxis** angesehen und sollte zu diesem Zweck vermieden werden. Das Verstehen und effektive Verwenden von Spezifität und der Kaskade kann jede Notwendigkeit für das `!important`-Flag beseitigen.

Anstelle von `!important`, um fremde CSS (von externen Bibliotheken, wie Bootstrap oder normalize.css) zu überschreiben, importieren Sie die Drittanbieter-Skripte direkt in [Kaskadeschichten](/de/docs/Web/CSS/@layer). Wenn Sie `!important` in Ihrem CSS verwenden müssen, kommentieren Sie Ihre Verwendung, damit zukünftige Codebetreuer wissen, warum die Deklaration als wichtig markiert wurde und wissen, dass sie es nicht überschreiben sollten. Verwenden Sie `!important` jedoch definitiv nicht, wenn Sie Plugins oder Frameworks schreiben, die andere Entwickler einbauen müssen, ohne sie kontrollieren zu können.

### Die `:where()`-Ausnahme

Die Spezifizitätsanpassungs-Pseudo-Klasse {{CSSxRef(":where", ":where()")}} wird immer mit null Spezifität ersetzt, `0-0-0`. Sie ermöglicht es, CSS-Selektoren sehr spezifisch in Bezug darauf zu machen, welches Element anvisiert wird, ohne dass es zu einer Erhöhung der Spezifität kommt.

Beim Erstellen von Drittanbieter-CSS, das von Entwicklern verwendet wird, die keinen Zugriff auf das Bearbeiten Ihres CSS haben, wird es als gute Praxis angesehen, CSS mit der niedrigstmöglichen Spezifität zu erstellen. Zum Beispiel, wenn Ihr Thema das folgende CSS enthält:

```css
:where(#defaultTheme) a {
  /* 0-0-1 */
  color: red;
}
```

Dann kann der Entwickler, der das Widget implementiert, die Linkfarbe leicht überschreiben, indem er nur Typselektoren verwendet.

```css
footer a {
  /* 0-0-2 */
  color: blue;
}
```

### Wie `@scope` Blöcke die Spezifität beeinflussen

Das Einfügen eines Regelsets in einen `@scope` Block beeinflusst die Spezifität seines Selektors nicht, unabhängig von den Selektoren, die innerhalb der Wurzel und Grenze des Scopes verwendet werden. Zum Beispiel:

```css
@scope (.article-body) {
  /* img has a specificity of 0-0-1, as expected */
  img { ... }
}
```

Wenn Sie jedoch entscheiden, die `:scope` Pseudo-Klasse explizit Ihren gescopteten Selektoren voranzustellen, müssen Sie diese bei der Berechnung ihrer Spezifität berücksichtigen. `:scope`, wie alle regulären Pseudo-Klassen, hat eine Spezifität von 0-1-0. Zum Beispiel:

```css
@scope (.article-body) {
  /* :scope img has a specificity of 0-1-0 + 0-0-1 = 0-1-1 */
  :scope img { ... }
}
```

Beim Verwenden des `&` Selektors in einem `@scope` Block repräsentiert `&` den Scope-Wurzel-Selektor; er wird intern als dieser Selektor, in einen {{CSSxRef(":is", ":is()")}} Selektor eingewickelt, umgeschrieben. Zum Beispiel:

```css
@scope (figure, #primary) {
  & img { ... }
}
```

`& img` ist gleichbedeutend mit `:is(figure, #primary) img`.

Da `:is()` die Spezifität seines spezifischsten Arguments übernimmt (`#primary` in diesem Fall), beträgt die Spezifität des gescopten `& img` Selektors daher 1-0-0 + 0-0-1 = 1-0-1.

## Tipps zum Umgang mit Spezifitätsproblemen

Anstelle von `!important` sollten Sie Kaskadeschichten verwenden und in Ihrem gesamten CSS eine niedrige Gewichtsspezifität verwenden, sodass Stile leicht mit etwas spezifischeren Regeln überschrieben werden können. Die Verwendung von semantischem HTML hilft, Anker zu bieten, von denen aus Stilisierungen angewendet werden können.

### Selektoren spezifisch machen mit und ohne Spezifitätserhöhung

Indem Sie den Abschnitt des Dokuments angeben, den Sie stylen, bevor Sie das Element auswählen, wird die Regel spezifischer. Je nachdem, wie Sie es hinzufügen, können Sie etwas, viel oder gar keine Spezifität hinzufügen, wie unten gezeigt:

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

#### IDspezifität reduzieren

Spezifität basiert auf der Form eines Selektors. Das Einbeziehen der ID eines Elements als Attributselektor anstelle eines ID-Selektors ist eine gute Möglichkeit, um ein Element spezifischer zu machen, ohne eine Überfülle an Spezifität hinzuzufügen. Im vorherigen Beispiel zählt der Selektor `[id="myContent"]` als Attributselektor zur Bestimmung der Spezifität des Selektors, obwohl er eine ID auswählt.

Sie können die ID oder einen Teil eines Selektors auch als Parameter in der `:where()` Spezifizitätsanpassungs-Pseudo-Klasse einbeziehen, wenn Sie einen Selektor spezifischer machen möchten, aber gar keine Spezifität hinzufügen möchten.

### Spezifität durch Duplizieren des Selektors erhöhen

Als Sonderfall zur Erhöhung der Spezifität können Sie Gewichte aus den _CLASS_ oder _ID_ Spalten duplizieren. Das Duplizieren von ID-, Klassen-, Pseudo-Klassen- oder Attributselektoren innerhalb eines zusammengesetzten Selektors wird die Spezifität erhöhen, wenn sehr spezifische Selektoren überschrieben werden, über die Sie keine Kontrolle haben.

```css
#myId#myId#myId span {
  /* 3-0-1 */
}
.myClass.myClass.myClass span {
  /* 0-3-1 */
}
```

Verwenden Sie dies sparsam, wenn überhaupt. Wenn Sie Selektor-Duplikation verwenden, kommentieren Sie immer Ihr CSS.

Durch die Verwendung von `:is()` und `:not()` (und auch `:has()`), können Sie die Spezifität erhöhen, auch wenn Sie einer Elternkomponente keine `id` hinzufügen können:

```css
:not(#fakeID#fakeId#fakeID) span {
  /* 3-0-1 */
}
:is(#fakeID#fakeId#fakeID, span) {
  /* 3-0-0 */
}
```

### Vorrang gegenüber Drittanbieter-CSS

Die Nutzung von Kaskadeschichten ist die Standardmethode, die es ermöglicht, dass ein Satz von Stilen Vorrang vor einem anderen Satz von Stilen hat; Kaskadeschichten ermöglichen dies ohne Verwendung von Spezifität! Normale (nicht wichtige) Autorenstile, die in Kaskadeschichten importiert werden, haben eine geringere Priorität als ungelayerte Autorenstile.

Wenn Stile von einem Stilblatt stammen, das Sie nicht bearbeiten können oder nicht verstehen und Sie Stile überschreiben müssen, ist eine Strategie, die Stile, die Sie nicht kontrollieren können, in eine Kaskadeschicht zu importieren. Stile in nachfolgenden deklarierten Schichten haben Vorrang, wobei ungelayerte Stile Vorrang vor allen gelayerten Stilen aus demselben Ursprung haben.

Wenn zwei Selektoren aus verschiedenen Schichten dasselbe Element auswählen, haben Ursprung und Wichtigkeit Vorrang; die Spezifität des Selectors im verlierenden Stilblatt ist irrelevant.

```html
<style>
  @import TW.css layer();
  p,
  p * {
    font-size: 1rem;
  }
</style>
```

Im obigen Beispiel wird der gesamte Absatztext, einschließlich des verschachtelten Inhalts, `1rem` sein, egal wie viele Klassennamen die Absätze haben, die mit dem TW-Stilblatt übereinstimmen.

### Vermeidung und Überschreibung von `!important`

Der beste Ansatz ist, `!important` nicht zu verwenden. Die oben genannten Erklärungen zur Spezifität sollten hilfreich sein, um die Verwendung der Flagge zu vermeiden und sie insgesamt zu entfernen, wenn sie auftritt.

Um den vermeintlichen Bedarf an `!important` zu beseitigen, können Sie Folgendes tun:

- Erhöhen Sie die Spezifität des Selektors der ehemaligen `!important`-Deklaration, sodass sie größer ist als andere Deklarationen
- Geben Sie ihm die gleiche Spezifität und platzieren Sie ihn nach der Deklaration, die er überschreiben soll
- Verringern Sie die Spezifizität des Selektors, den Sie überschreiben möchten.

Alle diese Methoden werden in den vorangegangenen Abschnitten behandelt.

Wenn Sie `!important`-Flags aus einem Autoren-Stilblatt nicht entfernen können, ist die einzige Lösung, um die wichtigen Stile zu überschreiben, die Verwendung von `!important`. Die Erstellung einer [Kaskadeschicht](/de/docs/Web/CSS/@layer) von wichtigen Deklarationsüberschreibungen ist eine ausgezeichnete Lösung. Zwei Möglichkeiten, dies zu tun, schließen ein:

#### Methode 1

1. Erstellen Sie ein separates, kurzes Stilblatt, das nur wichtige Deklarationen enthält, die speziell wichtige Deklarationen überschreiben, die Sie nicht entfernen konnten.
2. Importieren Sie dieses Stilblatt als den ersten Import in Ihr CSS mit `layer()`, einschließlich der `@import`-Anweisung, bevor Sie andere Stilblätter verlinken. Dies stellt sicher, dass die wichtigen Überschreibungen als die erste Schicht importiert werden.

```html
<style>
  @import importantOverrides.css layer();
</style>
```

#### Methode 2

1. Erstellen Sie am Anfang Ihrer Stilblatt-Deklarationen eine benannte Kaskadeschicht, wie folgt:

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

Die Spezifität des Selektors des wichtigen Stils innerhalb der Schicht kann niedrig sein, solange er das Element trifft, das Sie zu überschreiben versuchen. Normale Schichten sollten außerhalb der Schicht deklariert werden, da gelayerte Stile eine geringere Priorität als ungelayerte Stile haben.

### Baum-Nähe-Ignoranz

Die Nähe eines Elements zu anderen Elementen, die in einem gegebenen Selektor referenziert werden, hat keinen Einfluss auf die Spezifität.

```css
body h1 {
  color: green;
}

html h1 {
  color: purple;
}
```

Die `<h1>` Elemente werden lila, weil bei Deklarationen mit der gleichen Spezifität der zuletzt erklärte Selektor Vorrang hat.

### Direkt ausgerichtete Elemente vs. geerbte Stile

Stile für ein direkt ausgerichtetes Element haben immer Vorrang gegenüber geerbten Stilen, unabhängig von der Spezifität der geerbten Regel. Angesichts des folgenden CSS und HTML:

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

Das `h1` wird lila, da der `h1`-Selektor das Element speziell anspricht, während das Grün vom `#parent` geerbt wird.

## Beispiele

Im folgenden CSS haben wir drei Selektoren, die {{HTMLElement('input')}} Elemente anvisieren, um eine Farbe festzulegen. Für eine gegebene Eingabe ist das Spezifitätsgewicht der Farbdeklaration mit Vorrang der übereinstimmende Selektor mit dem größten Gewicht:

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

Wenn die obigen Selektoren alle dasselbe Eingabeziel treffen, wird die Eingabe rot, da die erste Deklaration den höchsten Wert in der _ID_-Spalte hat.

Der letzte Selektor hat vier _TYPE_ Komponenten. Auch wenn er den höchsten ganzzahligen Wert hat, haben _TYPE_ Komponenten nie Vorrang über _CLASS_ Komponenten, egal wie viele Elemente und Pseudo-Elemente enthalten sind, selbst wenn es 150 wären. Die Spaltenwerte werden von links nach rechts verglichen, wenn die Spaltenwerte gleich sind.

Hätten wir den ID-Selektor im obigen Beispielcode in einen Attributselektor umgewandelt, hätten die ersten beiden Selektoren die gleiche Spezifität, wie unten gezeigt:

```css
[id="myElement"] input.myClass {
  color: red;
} /* 0-2-1 */
input[type="password"]:required {
  color: blue;
} /* 0-2-1 */
```

Wenn mehrere Deklarationen die gleiche Spezifität haben, wird die letzte Deklaration in der CSS gefunden auf das Element angewendet. Wenn beide Selektoren dasselbe {{HTMLElement('input')}} treffen, wird die Farbe blau sein.

## Zusätzliche Hinweise

Einige Dinge, die man sich über Spezifität merken sollte:

1. Spezifität gilt nur, wenn dasselbe Element von mehreren Deklarationen in derselben Kaskadenschicht oder Ursprung getroffen wird. Spezifität zählt nur für Deklarationen mit derselben Wichtigkeit und demselben Ursprung und [Kaskadenschicht](/de/docs/Web/CSS/@layer). Wenn übereinstimmende Selektoren in verschiedenen Ursprüngen sind, bestimmt die [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade), welche Deklaration Vorrang hat.

2. Wenn zwei Selektoren in derselben Kaskadenschicht und Ursprung die gleiche Spezifizität haben, wird dann die Umfangs-Nähe berechnet; das Regelset mit der niedrigsten Umfangs-Nähe gewinnt. Siehe [Wie `@scope` Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) für weitere Details und ein Beispiel.

3. Wenn die Umfangs-Nähe auch für beide Selektoren gleich ist, kommt dann die Quellreihenfolge ins Spiel. Wenn alles andere gleich ist, gewinnt der letzte Selektor.

4. Laut CSS-Regeln werden [direkt ausgerichtete Elemente](#direkt_ausgerichtete_elemente_vs._geerbte_stile) immer Vorrang vor Regeln, die ein Element von seinem Vorfahren erbt, haben.

5. [Nähe von Elementen](#baum-nähe-ignoranz) im Dokumentenbaum hat keinen Einfluss auf die Spezifität.

## Spezifikationen

{{Specifications}}

## Siehe auch

- ["Spezifität" in "Umgang mit Konflikten"](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity_2)
- [SpeciFISHity](https://specifishity.com/)
- [Specificity Calculator](https://specificity.keegan.st/): Eine interaktive Website, um Ihre eigenen CSS-Regeln zu testen und zu verstehen
- [_ID-CLASS-TYPE_ Übung](https://estelle.github.io/CSS/selectors/exercises/specificity.html) ein Spezifitäts-Quiz
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax) Leitfaden
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
- [CSS-Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Initiale](/de/docs/Web/CSS/CSS_cascade/initial_value), [berechnete](/de/docs/Web/CSS/CSS_cascade/computed_value), [benutzte](/de/docs/Web/CSS/CSS_cascade/used_value) und [tatsächliche](/de/docs/Web/CSS/CSS_cascade/actual_value) Werte
- [Werte Definition Syntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [CSS-Verschachtelungsmodul](/de/docs/Web/CSS/CSS_nesting)
