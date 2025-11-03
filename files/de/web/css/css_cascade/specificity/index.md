---
title: Spezifität
slug: Web/CSS/CSS_cascade/Specificity
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

**Spezifität** ist der Algorithmus, den Browser verwenden, um zu bestimmen, welche [CSS-Deklaration](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#css_syntax_basics) am relevantesten für ein Element ist und somit den zu diesem Element anzuwendenden Eigenschaftswert festlegt. Der Spezifitätsalgorithmus berechnet das Gewicht eines [CSS-Selektors](/de/docs/Web/CSS/Reference#selectors), um zu entscheiden, welche Regel von konkurrierenden CSS-Deklarationen auf ein Element angewendet wird.

> [!NOTE]
> Browser berücksichtigen die Spezifität **nachdem** sie [Herkunft und Wichtigkeit der Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) bestimmt haben. Mit anderen Worten: Bei konkurrierenden Eigenschaftsdeklarationen ist die Spezifität nur zwischen Selektoren aus derjenigen [Kaskadenherkunft und Ebene](/de/docs/Web/CSS/@layer) relevant und wird verglichen, die für die Eigenschaft Vorrang hat. [Nähe des Scopings](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) und die Reihenfolge des Auftretens werden relevant, wenn die Selektorspezifitäten der konkurrierenden Deklarationen in der vorrangigen Kaskadenschicht gleich sind.

## Wie wird die Spezifität berechnet?

Spezifität ist ein Algorithmus, der das Gewicht berechnet, das auf eine gegebene CSS-Deklaration angewendet wird. Das Gewicht wird durch die Anzahl der [Selektoren jeder Gewichtskategorie](#selektorengewichtskategorien) im Selektor bestimmt, der mit dem Element (oder Pseudo-Element) übereinstimmt. Wenn zwei oder mehr Deklarationen unterschiedliche Eigenschaftswerte für dasselbe Element bereitstellen, wird der Deklarationswert im Stilblock angewendet, dessen übereinstimmender Selektor das größte algorithmische Gewicht aufweist.

Der Spezifitätsalgorithmus ist im Grunde ein dreispaltiger Wert aus drei Kategorien oder Gewichten - ID, CLASS und TYPE -, die den drei Arten von Selektoren entsprechen. Der Wert repräsentiert die Anzahl der Selektorkomponenten in jeder Gewichtskategorie und wird als _ID - CLASS - TYPE_ geschrieben. Die drei Spalten werden erstellt, indem die Anzahl der Selektorkomponenten für jede Selektorengewichtskategorie in den Selektoren gezählt wird, die dem Element entsprechen.

### Selektorengewichtskategorien

Die Selektorengewichtskategorien sind hier in der Reihenfolge der abnehmenden Spezifität aufgelistet:

- ID-Spalte
  - : Beinhaltet nur [ID-Selektoren](/de/docs/Web/CSS/Reference/Selectors/ID_selectors), wie `#example`. Für jede ID in einem passenden Selektor wird 1-0-0 zum Gewichtswert hinzugefügt.
- CLASS-Spalte
  - : Beinhaltet [Klassen-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Class_selectors), wie `.myClass`, Attribut-Selektoren wie `[type="radio"]` und `[lang|="fr"]`, und Pseudo-Klassen wie `:hover`, `:nth-of-type(3n)` und `:required`. Für jede Klasse, jeden Attribut-Selektor oder jede Pseudo-Klasse in einem passenden Selektor wird 0-1-0 zum Gewichtswert hinzugefügt.
- TYPE-Spalte
  - : Beinhaltet [Typen-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Type_selectors), wie `p`, `h1` und `td`, und Pseudo-Elemente wie `::before`, `::placeholder` und alle anderen Selektoren mit Doppelpunkt-Notation. Für jeden Typ oder jedes Pseudo-Element in einem passenden Selektor wird 0-0-1 zum Gewichtswert hinzugefügt.
- Kein Wert
  - : Der universelle Selektor ({{CSSxRef("Universal_selectors", "*")}}) und die Pseudo-Klasse {{CSSxRef(":where", ":where()")}} und deren Parameter werden nicht gezählt, wenn das Gewicht berechnet wird, sodass ihr Wert 0-0-0 ist, aber sie entsprechen dennoch den Elementen. Diese Selektoren beeinflussen den Spezifitätsgewichts-Wert nicht.

Kombinatoren wie {{CSSxRef("Next-sibling_combinator", "+")}}, {{CSSxRef("Child_combinator", "&gt;")}}, {{CSSxRef("Subsequent-sibling_combinator", "~")}}, [" "](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator) und {{CSSxRef("Column_combinator", "||")}} können einen Selektor spezifischer in Bezug auf das, was ausgewählt wird, machen, aber sie erhöhen den Spezifitätsgewichts-Wert nicht.

Der `&` Verschachtelungs-Kombinator fügt kein Spezifitätsgewicht hinzu, aber verschachtelte Regeln schon. In Bezug auf Spezifität und Funktionalität ist die Verschachtelung sehr ähnlich der {{CSSxRef(":is", ":is()")}} Pseudo-Klasse.

Wie die Verschachtelung fügen auch die Pseudo-Klassen {{CSSxRef(":is", ":is()")}}, {{CSSxRef(":has", ":has()")}} und die Negation ({{CSSxRef(":not", ":not()")}}) selbst kein Gewicht hinzu. Die Parameter in diesen Selektoren dagegen schon. Das Gewicht der Spezifität jedes einzelnen kommt vom Selektor-Parameter in der Liste der Selektoren mit der höchsten Spezifität. Ähnlich ist es bei verschachtelten Selektoren: das Spezifitäts-Gewicht, das durch die verschachtelte Selektor-Komponente hinzugefügt wird, ist der Selektor in der durch Komma getrennten Liste verschachtelter Selektoren mit der höchsten Spezifität.

Die [`:not()`, `:is()`, `:has()` und CSS-Verschachtelungsausnahmen](#the_is_not_has_and_css_nesting_exceptions) werden unten diskutiert.

#### Passender Selektor

Das Spezifitätsgewicht kommt vom passenden Selektor. Nehmen Sie diesen CSS-Selektor mit drei durch Kommas getrennten Selektoren als Beispiel:

```css
[type="password"],
input:focus,
:root #myApp input:required {
  color: blue;
}
```

Der `[type="password"]` Selektor in der obigen Selektorliste mit einem Spezifitätsgewicht von `0-1-0` wendet die `color: blue` Deklaration auf alle Passwort-Eingabetypen an.

Alle Eingaben, unabhängig vom Typ, wenn sie den Fokus erhalten, entsprechen dem zweiten Selektor in der Liste, `input:focus`, mit einem Spezifitätsgewicht von `0-1-1`; dieses Gewicht besteht aus der `:focus` Pseudo-Klasse (0-1-0) und dem `input` Typ (0-0-1). Wenn das Passwort-Eingabefeld den Fokus hat, entspricht es `input:focus`, und das Spezifitätsgewicht für die `color: blue` Stil-Deklaration wird `0-1-1` sein. Wenn das Passwort keinen Fokus hat, bleibt das Spezifitätsgewicht bei `0-1-0`.

Die Spezifität für eine erforderliche Eingabe, die in einem Element mit dem Attribut `id="myApp"` verschachtelt ist, beträgt `1-2-1`, basierend auf einer ID, zwei Pseudo-Klassen und einem Elementtyp.

Wenn der Passwort-Eingabetyp mit `required` in einem Element mit gesetztem `id="myApp"` verschachtelt ist, wird das Spezifitätsgewicht `1-2-1` betragen, basierend auf einer ID, zwei Pseudo-Klassen und einem Elementtyp, unabhängig davon, ob er den Fokus hat oder nicht. Warum ist das Spezifitätsgewicht in diesem Fall `1-2-1` anstatt `0-1-1` oder `0-1-0`? Weil das Spezifitätsgewicht vom übereinstimmenden Selektor mit dem größten Spezifitätsgewicht kommt. Das Gewicht wird durch den Vergleich der Werte in den drei Spalten, von links nach rechts, bestimmt.

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

Sobald die Spezifitätswerte der relevanten Selektoren bestimmt sind, werden die Anzahl der Selektorkomponenten in jeder Spalte verglichen, von links nach rechts.

```css
#myElement {
  color: green; /* 1-0-0  - WINS!! */
}
.bodyClass .sectionClass .parentClass [id="myElement"] {
  color: yellow; /* 0-4-0 */
}
```

Die erste Spalte ist der Wert der _ID_-Komponente, also die Anzahl der IDs in jedem Selektor. Die Zahlen in den _ID_-Spalten konkurrierender Selektoren werden verglichen. Der Selektor mit dem größeren Wert in der _ID_-Spalte gewinnt, egal welche Werte in den anderen Spalten stehen. Im obigen Beispiel ist der Wert der ersten Spalte maßgeblich, auch wenn der gelbe Selektor insgesamt mehr Komponenten hat.

Wenn die Zahlen in den _ID_-Spalten konkurrierender Selektoren gleich sind, wird die nächste Spalte, _CLASS_, verglichen, wie unten gezeigt.

```css
#myElement {
  color: yellow; /* 1-0-0 */
}
#myApp [id="myElement"] {
  color: green; /* 1-1-0  - WINS!! */
}
```

Die _CLASS_-Spalte ist die Anzahl von Klassennamen, Attribut-Selektoren und Pseudo-Klassen in dem Selektor. Wenn der Wert in der _ID_-Spalte gleich ist, gewinnt der Selektor mit dem größeren Wert in der _CLASS_-Spalte, unabhängig vom Wert in der _TYPE_-Spalte. Dies wird im folgenden Beispiel gezeigt.

```css
:root input {
  color: green; /* 0-1-1 - WINS because CLASS column is greater */
}
html body main input {
  color: yellow; /* 0-0-4 */
}
```

Wenn die Zahlen in den _CLASS_- und _ID_-Spalten konkurrierender Selektoren gleich sind, wird die _TYPE_-Spalte relevant. Die _TYPE_-Spalte ist die Anzahl der Elementtypen und Pseudo-Elemente im Selektor. Wenn die ersten beiden Spalten denselben Wert haben, gewinnt der Selektor mit der größeren Zahl in der _TYPE_-Spalte.

Wenn konkurrierende Selektoren denselben Wert in allen drei Spalten haben, kommt die Nähe zur Anwendung, wobei die zuletzt deklarierte Stilregel Vorrang erhält.

```css
input.myClass {
  color: yellow; /* 0-1-1 */
}
:root input {
  color: green; /* 0-1-1 WINS because it comes later */
}
```

### Die Ausnahmen `:is()`, `:not()`, `:has()` und CSS-Verschachtelung

Die "matches-any" Pseudo-Klasse {{CSSxRef(":is", ":is()")}}, die relationale Pseudo-Klasse {{CSSxRef(":has", ":has()")}}, und die Negations-Pseudo-Klasse {{CSSxRef(":not", ":not()")}} werden in der Spezifitätsberechnung _nicht_ als Pseudo-Klassen betrachtet. Sie selbst fügen dem Spezifitätsdiagramm kein Gewicht hinzu. Allerdings sind die Selektorparameter innerhalb der Pseudo-Klassen- Klammern Teil des Spezifitätsalgorithmus; das Gewicht der "matches-any" und der Negations-Pseudo-Klasse in der Spezifitätswertberechnung ist das Gewicht des Parameters [Gewicht](#selektorengewichtskategorien).

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

Beachten Sie, dass im obigen CSS-Paarung das Spezifitätsgewicht, das durch die Pseudo-Klassen `:is()`, `:has()` und `:not()` bereitgestellt wird, der Wert des Selektorparameters ist, nicht der Pseudo-Klasse selbst.

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

In dem obigen CSS-Codeblock haben wir `#fakeId` in die Selektoren eingefügt. Dieses `#fakeId` fügt jedem Absatz `1-0-0` zum Spezifitätsgewicht hinzu.

Beim Erstellen von komplexen Selektorlisten mit [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting) verhält sich dies genau wie die `:is()` Pseudo-Klasse.

```css
p,
#fakeId {
  span {
    /* 1-0-1 */
  }
}
```

In dem obigen Codeblock wird bei dem komplexen Selektor `p, #fakeId` die Spezifität von `#fakeId` und auch von `span` übernommen, sodass dies eine Spezifität von `1-0-1` sowohl für `p span` als auch `#fakeId span` erzeugt. Dies entspricht der gleichen Spezifität wie der `:is(p, #fakeId) span` Selektor.

Allgemein möchten Sie die Spezifität möglichst gering halten, aber wenn Sie die Spezifität eines Elements aus bestimmten Gründen erhöhen müssen, können diese drei Pseudo-Klassen helfen.

```css
a:not(#fakeId#fakeId#fakeID) {
  color: blue; /* 3-0-1 */
}
```

In diesem Beispiel werden alle Links blau sein, es sei denn, sie werden von einer Link-Deklaration mit 3 oder mehr IDs überschrieben, einem Farbwert, der mit einem `a` übereinstimmt, der das [`!important` Flagge](#the_!important_exception) enthält, oder wenn der Link eine [Inline-Stil](#inline-stile) Farb-Deklaration hat. Wenn Sie eine solche Technik verwenden, fügen Sie einen Kommentar hinzu, um zu erklären, warum dieser Trick nötig war.

### Inline-Stile

Inline-Stile, die zu einem Element hinzugefügt werden (z. B. `style="font-weight: bold;"`), überschreiben immer alle normalen Stile in Autoren-Stylesheets und können daher als mit der höchsten Spezifität gedacht werden. Betrachten Sie Inline-Stile als hätten sie ein Spezifitätsgewicht von `1-0-0-0`.

Der einzige Weg, um Inline-Stile zu überschreiben, ist die Verwendung von `!important`.

Viele JavaScript-Frameworks und -Bibliotheken fügen Inline-Stile hinzu. Die Verwendung von `!important` mit einem sehr gezielten Selektor, wie einem Attributselektor, der den Inline-Stil verwendet, ist eine Möglichkeit, diese Inline-Stile zu überschreiben.

```html
<p style="color: purple">…</p>
```

```css
p[style*="purple"] {
  color: rebeccapurple !important;
}
```

Stellen Sie sicher, dass Sie einen Kommentar zu jedem Einschluss der wichtigen Flagge hinzufügen, damit Code-Pfleger verstehen, warum ein CSS-Anti-Pattern verwendet wurde.

### Die Ausnahme `!important`

CSS-Deklarationen, die als wichtig gekennzeichnet sind, überschreiben alle anderen Deklarationen innerhalb derselben Kaskadenschicht und gleichen Ursprungs. Obwohl technisch gesehen, dass [`!important`](/de/docs/Web/CSS/important) nichts mit Spezifität zu tun hat, beeinflusst es direkt die Spezifität und die Kaskade. Es kehrt die [Kaskadenordnung](/de/docs/Web/CSS/CSS_cascade/Cascade) der Stylesheets um.

Wenn Deklarationen aus demselben Ursprung und derselben Kaskadenschicht in Konflikt stehen und ein Eigenschaftswert das `!important`-Flag gesetzt hat, wird die wichtige Deklaration unabhängig von der Spezifität angewendet. Wenn konkurrierende Deklarationen von demselben Ursprung und derselben Kaskadenschicht mit dem `!important`-Flag auf dasselbe Element angewendet werden, wird die Deklaration mit größerer Spezifität angewendet.

Die Verwendung von `!important`, um die Spezifität zu überschreiben, wird als **schlechte Praxis** angesehen und sollte zu diesem Zweck vermieden werden. Das Verständnis und die effektive Nutzung von Spezifität und Kaskade können den Bedarf an der `!important`-Flagge beseitigen.

Anstatt `!important` zu verwenden, um fremdes CSS (von externen Bibliotheken wie Bootstrap oder normalize.css) zu überschreiben, importieren Sie die Drittanbieter-Skripte direkt in [Kaskadenschichten](/de/docs/Web/CSS/@layer). Wenn Sie `!important` in Ihrem CSS verwenden müssen, kommentieren Sie Ihre Nutzung, damit zukünftige Code-Pfleger wissen, warum die Deklaration als wichtig markiert wurde und wissen, dass sie nicht überschrieben werden soll. Vermeiden Sie es jedoch definitiv, `!important` beim Schreiben von Plugins oder Frameworks zu verwenden, die andere Entwickler einbinden müssen, ohne sie kontrollieren zu können.

### Die Ausnahme `:where()`

Die Spezifitäts-Anpassungs-Pseudo-Klasse {{CSSxRef(":where", ":where()")}} hat immer ihre Spezifität auf null, `0-0-0`, ersetzt. Sie ermöglicht es, CSS-Selektoren sehr spezifisch in Bezug auf das Zielgerichtete Element zu gestalten, ohne jegliche Erhöhung der Spezifität.

Beim Erstellen von Drittanbieter-CSS, das von Entwicklern verwendet werden soll, die keinen Zugriff auf Ihr CSS haben, wird als gute Praxis angesehen, CSS mit der niedrigsten möglichen Spezifität zu erstellen. Wenn Ihr Thema beispielsweise das folgende CSS enthält:

```css
:where(#defaultTheme) a {
  /* 0-0-1 */
  color: red;
}
```

Kann der Entwickler, der das Widget implementiert, die Linkfarbe leicht mit nur Typ-Selektoren überschreiben.

```css
footer a {
  /* 0-0-2 */
  color: blue;
}
```

### Wie `@scope`-Blöcke die Spezifität beeinflussen

Das Einbeziehen eines Regelsatzes innerhalb eines {{cssxref("@scope")}}-Blocks beeinflusst nicht die Spezifität seines Selektors, unabhängig von den Selektoren, die innerhalb der [Scope-Root und Limit](/de/docs/Web/CSS/@scope#syntax) verwendet werden.
Wenn Sie sich jedoch entscheiden, die {{cssxref(":scope")}}-Pseudo-Klasse explizit hinzuzufügen, müssen Sie dies bei der Berechnung ihrer Spezifität berücksichtigen.
`:scope`, wie alle regulären Pseudo-Klassen, hat eine Spezifität von 0-1-0. Zum Beispiel:

```css
@scope (.article-body) {
  /* :scope img has a specificity of 0-1-0 + 0-0-1 = 0-1-1 */
  :scope img {
  }
}
```

Weitere Informationen finden Sie unter [Spezifität in `@scope`](/de/docs/Web/CSS/@scope#specificity_in_scope).

## Tipps zur Handhabung von Spezifitätsproblemen

Anstatt `!important` zu verwenden, ziehen Sie in Erwägung, Kaskadenschichten zu verwenden und in Ihrem gesamten CSS Spezifität mit geringem Gewicht zu verwenden, sodass Styles leicht mit etwas spezifischeren Regeln überschrieben werden können. Die Verwendung von semantischem HTML hilft dabei, Anker zu bieten, von denen aus Styling angewendet werden kann.

### Selektoren spezifisch machen mit und ohne Erhöhung der Spezifität

Indem Sie den Abschnitt des Dokuments, den Sie stylen, vor dem Element angeben, das Sie auswählen, wird die Regel spezifischer. Abhängig davon, wie Sie es hinzufügen, können Sie etwas, viel oder gar keine Spezifität hinzufügen, wie unten gezeigt:

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

Die Spezifität basiert auf der Form eines Selektors. Das Einfügen der `id` eines Elements als Attributselektor anstelle eines ID-Selektors ist eine gute Möglichkeit, ein Element spezifischer zu machen, ohne eine übermäßige Spezifität hinzuzufügen. Im vorherigen Beispiel zählt der Selektor `[id="myContent"]` als Attributselektor, um die Spezifität des Selektors zu bestimmen, auch wenn er eine ID auswählt.

Sie können auch die `id` oder einen Teil eines Selektors als Parameter in die `:where()` Spezifitäts-Anpassungs-Pseudo-Klasse aufnehmen, wenn Sie einen Selektor spezifischer machen müssen, aber keine Spezifität hinzufügen möchten.

### Erhöhung der Spezifität durch Duplizieren von Selektoren

Als spezielle Methode zur Erhöhung der Spezifität können Sie Gewichte aus den _CLASS_- oder _ID_-Spalten duplizieren. Durch das Duplizieren von ID-, Klassen-, Pseudo-Klassen- oder Attributselektoren innerhalb eines zusammengesetzten Selektors wird die Spezifität bei der Überschreibung sehr spezifischer Selektoren erhöht, über die Sie keine Kontrolle haben.

```css
#myId#myId#myId span {
  /* 3-0-1 */
}
.myClass.myClass.myClass span {
  /* 0-3-1 */
}
```

Verwenden Sie dies sparsam, wenn überhaupt. Wenn Sie Selektorduplizierung verwenden, kommentieren Sie immer Ihr CSS.

Durch die Verwendung von `:is()` und `:not()` (und auch `:has()`) können Sie die Spezifität erhöhen, selbst wenn Sie keine `id` zu einem Elternteil hinzufügen können:

```css
:not(#fakeID#fakeId#fakeID) span {
  /* 3-0-1 */
}
:is(#fakeID#fakeId#fakeID, span) {
  /* 3-0-0 */
}
```

### Vorrang vor Drittanbieter-CSS

Das Nutzen von Kaskadenschichten ist der Standardweg, um zu ermöglichen, dass ein Satz von Styles Vorrang vor einem anderen hat; Kaskadenschichten ermöglichen dies ohne Verwendung von Spezifität! Normale (nicht wichtige) Autoren-Styles, die in Kaskadenschichten importiert werden, haben eine geringere Priorität als unverankerte Autoren-Styles.

Wenn Styles von einem Stylesheet kommen, das Sie nicht bearbeiten können oder nicht verstehen, und Sie müssen Styles überschreiben, besteht eine Strategie darin, die Styles, über die Sie keine Kontrolle haben, in eine Kaskadenschicht zu importieren. Styles in anschließend erklärten Schichten haben Vorrang, wobei nicht geschichtete Styles Vorrang vor allen geschichteten Styles aus demselben Ursprung haben.

Wenn zwei Selektoren aus verschiedenen Schichten auf dasselbe Element zutreffen, haben Ursprung und Wichtigkeit Vorrang; die Spezifität des Selektors im verlierenden Stylesheet ist irrelevant.

```css
@import "TW.css" layer();
p,
p * {
  font-size: 1rem;
}
```

Im obigen Beispiel wird aller Absatztext, einschließlich des verschachtelten Inhalts, `1rem` sein, unabhängig davon, wie viele Klassennamen die Absätze haben, die das TW-Stylesheet treffen.

### Vermeidung und Überschreibung von `!important`

Der beste Ansatz ist, `!important` nicht zu verwenden. Die obigen Erklärungen zur Spezifität sollten hilfreich sein, um die Verwendung der Flagge zu vermeiden und sie vollständig zu entfernen, wenn sie auftreten.

Um den wahrgenommenen Bedarf an `!important` zu beseitigen, können Sie folgende Maßnahmen ergreifen:

- Erhöhen Sie die Spezifität des Selektors der zuvor `!important`-Deklaration, sodass sie größer als andere Deklarationen ist
- Geben Sie ihr dieselbe Spezifität und platzieren Sie sie nach der Deklaration, die sie ersetzen soll
- Reduzieren Sie die Spezifität des Selektors, den Sie zu überschreiben versuchen.

Alle diese Methoden werden in den vorhergehenden Abschnitten behandelt.

Wenn Sie nicht in der Lage sind, `!important`-Flaggen aus einem Autoren-Stylesheet zu entfernen, ist die einzige Lösung zur Überschreibung der wichtigen Styles die Verwendung von `!important`. Ein Erstellen einer [Kaskadenschicht](/de/docs/Web/CSS/@layer) von wichtigen Deklarationsüberschreibungen ist eine ausgezeichnete Lösung. Zwei Möglichkeiten, dies zu tun, schließen ein:

#### Methode 1

1. Erstellen Sie ein separates, kurzes Stylesheet, das nur wichtige Deklarationen enthält, die speziell wichtige Deklarationen überschreiben, die Sie nicht entfernen konnten.
2. Importieren Sie dieses Stylesheet als ersten Import in Ihrem CSS mit `layer()`, indem Sie die `@import`-Anweisung vor dem Verknüpfen mit anderen Stylesheets einfügen. Dies soll sicherstellen, dass die wichtigen Überschreibungen als erste Schicht importiert werden.

```css
@import "importantOverrides.css" layer();
```

#### Methode 2

1. Erstellen Sie zu Beginn Ihrer Stylesheet-Deklarationen eine benannte Kaskadenschicht, wie folgt:

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

Die Spezifität des Selektors des wichtigen Stils innerhalb der Schicht kann gering sein, solange er mit dem Element übereinstimmt, das Sie überschreiben möchten. Normale Schichten sollten außerhalb der Schicht deklariert werden, weil geschichtete Stile geringer als ungeschichtete Stile vorrangig sind.

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

Die `<h1>`-Elemente werden lila sein, weil, wenn Deklarationen dieselbe Spezifität haben, der zuletzt deklarierte Selektor Vorrang hat.

### Direkt angesprochene Elemente versus geerbte Stile

Stile für ein direkt angesprochenes Element haben immer Vorrang vor geerbten Stilen, unabhängig von der Spezifität der geerbten Regel. Angesichts des folgenden CSS und HTML:

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

Der `h1` wird lila sein, weil der `h1`-Selektor das Element spezifisch anspricht, während das Grün von den Deklarationen des `#parent` geerbt wird.

## Beispiele

Im folgenden CSS haben wir drei Selektoren, die {{HTMLElement('input')}}-Elemente anvisieren, um eine Farbe festzulegen. Für ein gegebenes Eingabefeld ist das Spezifitätsgewicht der Farbd

eklaration, die Vorrang hat, der passende Selektor mit dem größten Gewicht:

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

Der letzte Selektor hat vier _TYPE_-Komponenten. Obwohl er den höchsten Zahlenwert hat, haben wir, egal wie viele Elemente und Pseudo-Elemente eingeschlossen sind, selbst wenn es 150 wären, TYPE-Komponenten nie Vorrang vor _CLASS_-Komponenten. Die Spaltenwerte werden von links nach rechts verglichen, wenn die Spaltenwerte gleich sind.

Hätten wir den ID-Selektor im obigen Beispielcode zu einem Attributselektor konvertiert, hätten die ersten beiden Selektoren die gleiche Spezifität, wie unten gezeigt:

```css
[id="myElement"] input.myClass {
  color: red;
} /* 0-2-1 */
input[type="password"]:required {
  color: blue;
} /* 0-2-1 */
```

Wenn mehrere Deklarationen die gleiche Spezifität haben, wird die letzte Deklaration, die im CSS gefunden wurde, auf das Element angewendet. Wenn beide Selektoren mit demselben {{HTMLElement('input')}} übereinstimmen, wird die Farbe blau sein.

## Zusätzliche Hinweise

Einige Dinge, die man über Spezifität beachten sollte:

1. Spezifität gilt nur, wenn dasselbe Element von mehreren Deklarationen in derselben Kaskadenschicht oder Herkunft anvisiert wird. Spezifität ist nur für Deklarationen von gleicher Wichtigkeit und gleicher Herkunft und [Kaskadenschicht](/de/docs/Web/CSS/@layer) relevant. Wenn passende Selektoren in verschiedenen Ursprüngen sind, bestimmt die [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade), welche Deklaration Vorrang hat.

2. Wenn zwei Selektoren in derselben Kaskadenschicht und Herkunft die gleiche Spezifität haben, wird die räumliche Nähe berechnet; der Regelsatz mit der geringsten räumlichen Nähe gewinnt. Weitere Details und ein Beispiel finden Sie unter [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved).

3. Wenn die Nähe der Bereiche auch für beide Selektoren gleich ist, tritt die Quellreihenfolge in Kraft. Wenn alles andere gleich ist, gewinnt der letzte Selektor.

4. Gemäß den CSS-Regeln werden [direkt angesprochene Elemente](#direkt_angesprochene_elemente_versus_geerbte_stile) immer Vorrang vor Regeln haben, die ein Element von seinem Vorfahren erbt.

5. [Nähe der Elemente](#baum-nähe-ignoranz) im Dokumentbaum hat keinen Einfluss auf die Spezifität.

## Spezifikationen

{{Specifications}}

## Siehe auch

- ["Spezifität" in "Konflikte behandeln"](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity_2)
- [SpeciFISHity](https://specifishity.com/)
- [Spezifitätsrechner](https://specificity.keegan.st/): Eine interaktive Website, um Ihre eigenen CSS-Regeln zu testen und zu verstehen
- [_ID-CLASS-TYPE_ Übung](https://estelle.github.io/CSS/selectors/exercises/specificity.html) - ein Spezifitätsquiz
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax) Leitfaden
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
- [CSS-Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Initial](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value), [berechnet](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value), [verwendet](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value) und [tatsächliche](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value) Werte
- [Wertedefinitionssyntax](/de/docs/Web/CSS/CSS_values_and_units/Value_definition_syntax)
- [Lernen: Konflikte behandeln](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [CSS-Verschachtelung Modul](/de/docs/Web/CSS/CSS_nesting)
