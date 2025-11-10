---
title: Spezifität
slug: Web/CSS/CSS_cascade/Specificity
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

**Spezifität** ist der Algorithmus, den Browser verwenden, um die [CSS-Deklaration](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#css_syntax_basics) zu bestimmen, die am relevantesten für ein Element ist und somit den Eigenschaftswert festlegt, der auf das Element angewendet wird. Der Spezifitätsalgorithmus berechnet das Gewicht eines [CSS-Selektors](/de/docs/Web/CSS/Reference#selectors), um zu bestimmen, welche Regel aus konkurrierenden CSS-Deklarationen auf ein Element angewendet wird.

> [!NOTE]
> Browser berücksichtigen die Spezifität **nachdem** sie [die Herkunft der Kaskade und die Wichtigkeit](/de/docs/Web/CSS/Guides/Cascade/Introduction) bestimmt haben. Mit anderen Worten, bei konkurrierenden Eigenschaftsdeklarationen ist die Spezifität nur zwischen Selektoren relevant und wird verglichen, die aus der einen [Kaskadenherkunft und Ebene](/de/docs/Web/CSS/Reference/At-rules/@layer) stammen, die für die Eigenschaft Vorrang hat. [Nähe der Ausrichtung](/de/docs/Web/CSS/Reference/At-rules/@scope#how_scope_conflicts_are_resolved) und Reihenfolge des Erscheinens werden relevant, wenn die Spezifitäten der konkurrierenden Deklarationen in der Kaskadenschicht mit Vorrang gleich sind.

## Wie wird die Spezifität berechnet?

Spezifität ist ein Algorithmus, der das Gewicht bestimmt, das auf eine gegebene CSS-Deklaration angewendet wird. Das Gewicht wird durch die Anzahl der [Selektoren jeder Gewichtskategorie](#selektor-gewichtskategorien) im Element (oder Pseudo-Element)-Treffer-Selektor bestimmt. Wenn es zwei oder mehr Deklarationen gibt, die unterschiedliche Eigenschaftswerte für dasselbe Element liefern, wird der Deklarationswert im Stilblock mit dem übereinstimmenden Selektor mit dem größten algorithmischen Gewicht angewendet.

Der Spezifitätsalgorithmus ist im Grunde ein drei Spalten umfassender Wert mit drei Kategorien oder Gewichten - ID, CLASS und TYPE - entsprechend den drei Typen von Selektoren. Der Wert repräsentiert die Anzahl der Selektorkomponenten in jeder Gewichtskategorie und wird als _ID - CLASS - TYPE_ geschrieben. Die drei Spalten werden erstellt, indem die Anzahl der Selektorkomponenten für jede Selektorgewichtskategorie in den Selektoren gezählt wird, die mit dem Element übereinstimmen.

### Selektor-Gewichtskategorien

Die Selektor-Gewichtskategorien werden hier in der Reihenfolge abnehmender Spezifität aufgelistet:

- ID-Spalte
  - : Beinhaltet nur [ID-Selektoren](/de/docs/Web/CSS/Reference/Selectors/ID_selectors), wie z.B. `#example`. Für jede ID in einem übereinstimmenden Selektor wird 1-0-0 zum Gewichtswert hinzugefügt.
- CLASS-Spalte
  - : Beinhaltet [Klassenselektoren](/de/docs/Web/CSS/Reference/Selectors/Class_selectors), wie z.B. `.myClass`, Attributselektoren wie `[type="radio"]` und `[lang|="fr"]`, und Pseudo-Klassen, wie `:hover`, `:nth-of-type(3n)` und `:required`. Für jede Klasse, jeden Attributselektor oder jede Pseudo-Klasse in einem übereinstimmenden Selektor wird 0-1-0 zum Gewichtswert hinzugefügt.
- TYPE-Spalte
  - : Beinhaltet [Typselektoren](/de/docs/Web/CSS/Reference/Selectors/Type_selectors), wie `p`, `h1` und `td`, und Pseudo-Elemente wie `::before`, `::placeholder` und alle anderen Selektoren mit Doppelkolon-Notation. Für jeden Typ oder jedes Pseudo-Element in einem übereinstimmenden Selektor wird 0-0-1 zum Gewichtswert hinzugefügt.
- Kein Wert
  - : Der universelle Selektor ({{CSSxRef("Universal_selectors", "*")}}) und die Pseudo-Klasse {{CSSxRef(":where", ":where()")}} und ihre Parameter werden beim Berechnen des Gewichts nicht berücksichtigt, so dass der Wert 0-0-0 ist, obwohl sie Elemente treffen. Diese Selektoren beeinflussen den Spezifitätsgewichtswert nicht.

Kombinatoren, wie {{CSSxRef("Next-sibling_combinator", "+")}}, {{CSSxRef("Child_combinator", "&gt;")}}, {{CSSxRef("Subsequent-sibling_combinator", "~")}}, [" "](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator) und {{CSSxRef("Column_combinator", "||")}}, können einen Selektor spezifischer machen in dem, was ausgewählt wird, aber sie fügen dem Spezifitätsgewicht keinen Wert hinzu.

Der `&` Verschachtelungs-Kombinator fügt kein Spezifitätsgewicht hinzu, aber verschachtelte Regeln tun es. In Bezug auf Spezifität und Funktionalität ist die Verschachtelung sehr ähnlich wie bei der {{CSSxRef(":is", ":is()")}} Pseudo-Klasse.

Wie bei der Verschachtelung fügt auch die {{CSSxRef(":is", ":is()")}}, {{CSSxRef(":has", ":has()")}} und Negation ({{CSSxRef(":not", ":not()")}}) Pseudo-Klassen selbst kein Gewicht hinzu. Die Parameter in diesen Selektoren jedoch schon. Das Spezifitätsgewicht jedes Selektors stammt aus dem Selektorparameter in der Liste der Selektoren mit der höchsten Spezifität. Ähnlich wie bei verschachtelten Selektoren, wird das Spezifitätsgewicht, das durch die verschachtelte Selektorkomponente hinzugefügt wird, durch den Selektor in der kommagetrennten Liste der verschachtelten Selektoren mit der höchsten Spezifität bestimmt.

Die [`:not()`, `:is()`, `:has()` und CSS-Verschachtelungs-Ausnahmen](#the_is_not_has_and_css_nesting_exceptions) werden unten erläutert.

#### Übereinstimmender Selektor

Das Spezifitätsgewicht kommt vom übereinstimmenden Selektor. Nehmen wir diesen CSS-Selektor mit drei kommagetrennten Selektoren als Beispiel:

```css
[type="password"],
input:focus,
:root #myApp input:required {
  color: blue;
}
```

Der `[type="password"]` Selektor in der obigen Selektorliste, mit einem Spezifitätsgewicht von `0-1-0`, wendet die `color: blue` Deklaration auf alle Passwort-Eingabetypen an.

Alle Eingaben, egal welchen Typs, bei Fokus, entsprechen dem zweiten Selektor in der Liste, `input:focus`, mit einem Spezifitätsgewicht von `0-1-1`; dieses Gewicht setzt sich aus der `:focus` Pseudo-Klasse (0-1-0) und dem `input` Typ (0-0-1) zusammen. Wenn das Passwort-Eingabefeld den Fokus hat, entspricht es `input:focus`, und das Spezifitätsgewicht für die `color: blue` Stil-Deklaration wird `0-1-1` sein. Wenn das Passwort keinen Fokus hat, bleibt das Spezifitätsgewicht bei `0-1-0`.

Die Spezifität für eine erforderliche Eingabe, die in einem Element mit dem Attribut `id="myApp"` verschachtelt ist, beträgt `1-2-1`, basierend auf einer ID, zwei Pseudo-Klassen und einem Elementtyp.

Wenn der Passwort-Eingabetyp mit `required` in einem Element mit `id="myApp"` verschachtelt ist, beträgt das Spezifitätsgewicht `1-2-1`, basierend auf einer ID, zwei Pseudo-Klassen und einem Elementtyp, unabhängig davon, ob es den Fokus hat oder nicht. Warum ist das Spezifitätsgewicht in diesem Fall `1-2-1` anstatt `0-1-1` oder `0-1-0`? Weil das Spezifitätsgewicht vom übereinstimmenden Selektor mit dem größten Spezifitätsgewicht stammt. Das Gewicht wird ermittelt, indem die Werte in den drei Spalten von links nach rechts verglichen werden.

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

### Vergleich der drei Spalten

Sobald die Spezifitätswerte der relevanten Selektoren bestimmt wurden, werden die Anzahl der Selektorkomponenten in jeder Spalte von links nach rechts verglichen.

```css
#myElement {
  color: green; /* 1-0-0  - WINS!! */
}
.bodyClass .sectionClass .parentClass [id="myElement"] {
  color: yellow; /* 0-4-0 */
}
```

Die erste Spalte ist der Wert der _ID_-Komponente, die die Anzahl der IDs in jedem Selektor ist. Die Zahlen in den _ID_-Spalten der konkurrierenden Selektoren werden verglichen. Der Selektor mit dem größeren Wert in der _ID_-Spalte gewinnt, unabhängig davon, wie die Werte in den anderen Spalten sind. Im obigen Beispiel hat der gelbe Selektor zwar mehr Komponenten insgesamt, aber nur der Wert der ersten Spalte spielt eine Rolle.

Wenn die Anzahl in den _ID_-Spalten der konkurrierenden Selektoren gleich ist, wird die nächste Spalte, _CLASS_, verglichen, wie unten gezeigt.

```css
#myElement {
  color: yellow; /* 1-0-0 */
}
#myApp [id="myElement"] {
  color: green; /* 1-1-0  - WINS!! */
}
```

Die _CLASS_-Spalte ist die Anzahl der Klassennamen, Attributselektoren und Pseudo-Klassen im Selektor. Wenn der _ID_-Spaltenwert gleich ist, gewinnt der Selektor mit dem größeren Wert in der _CLASS_-Spalte, unabhängig vom Wert in der _TYPE_-Spalte. Dies wird im untenstehenden Beispiel gezeigt.

```css
:root input {
  color: green; /* 0-1-1 - WINS because CLASS column is greater */
}
html body main input {
  color: yellow; /* 0-0-4 */
}
```

Wenn die Zahlen in den _CLASS_- und _ID_-Spalten der konkurrierenden Selektoren gleich sind, wird die _TYPE_-Spalte relevant. Die _TYPE_-Spalte ist die Anzahl der Elementtypen und Pseudo-Elemente im Selektor. Wenn die ersten beiden Spalten denselben Wert haben, gewinnt der Selektor mit der größeren Zahl in der _TYPE_-Spalte.

Wenn die konkurrierenden Selektoren die gleichen Werte in allen drei Spalten haben, kommt die Nähe-Regel ins Spiel, bei der die zuletzt erklärte Stilregel Vorrang hat.

```css
input.myClass {
  color: yellow; /* 0-1-1 */
}
:root input {
  color: green; /* 0-1-1 WINS because it comes later */
}
```

### Die `:is()`, `:not()`, `:has()` und CSS-Verschachtelungsausnahmen

Die Pseudo-Klasse, die alle übereinstimmenden Elemente abdeckt, {{CSSxRef(":is", ":is()")}}, die relationale Pseudo-Klasse {{CSSxRef(":has", ":has()")}} und die Negations-Pseudo-Klasse {{CSSxRef(":not", ":not()")}} werden _nicht_ als Pseudo-Klassen im Spezifitätsgewichtberechnung berücksichtigt. Sie selbst fügen der Spezifitätsgleichung kein Gewicht hinzu. Die in die Pseudo-Klassen-Klammern übergebenen Selektor-Parameter sind jedoch Teil des Spezifitätsalgorithmus; das Gewicht der Übereinstimmungs- und Negations-Pseudo-Klassen in der Spezifitätswertberechnung ist das Gewicht des Parameters [Gewicht](#selektor-gewichtskategorien).

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

Beachten Sie, dass in der obigen CSS-Paarung das Spezifitätsgewicht, das durch die `:is()`, `:has()` und `:not()` Pseudo-Klassen bereitgestellt wird, der Wert des Selektorparameters ist, nicht der Pseudo-Klasse.

Alle drei dieser Pseudo-Klassen akzeptieren komplexe Selektorlisten, die durch Kommas getrennt sind, als Parameter. Diese Funktion kann verwendet werden, um die Spezifität eines Selektors zu erhöhen:

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

Beim Erstellen komplexer Selektorlisten mit [CSS-Verschachtelung](/de/docs/Web/CSS/Guides/Nesting) verhält sich dies genauso wie die `:is()` Pseudo-Klasse.

```css
p,
#fakeId {
  span {
    /* 1-0-1 */
  }
}
```

Im obigen Codeblock nimmt der Selektor `p, #fakeId` die Spezifität von `#fakeId` und auch den `span` auf, so dass dies eine Spezifität von `1-0-1` für sowohl `p span` als auch `#fakeId span` schafft. Dies ist die gleiche Spezifität wie der `:is(p, #fakeId) span` Selektor.

In der Regel möchten Sie die Spezifität auf ein Minimum reduzieren, aber wenn Sie die Spezifität eines Elements aus einem bestimmten Grund erhöhen müssen, können diese drei Pseudo-Klassen helfen.

```css
a:not(#fakeId#fakeId#fakeID) {
  color: blue; /* 3-0-1 */
}
```

In diesem Beispiel werden alle Links blau sein, es sei denn, es wird durch eine Link-Deklaration mit 3 oder mehr IDs überschrieben, ein Farbwert, der `a` entspricht und die [`!important`-Flagge](#the_!important_exception) einschließt, oder wenn der Link eine [inline-stil](#inline-stile) Farbdeklaration hat. Wenn Sie eine solche Technik verwenden, fügen Sie einen Kommentar hinzu, der erklärt, warum der Hack benötigt wurde.

### Inline-Stile

Inline-Stile, die einem Element hinzugefügt werden (z.B. `style="font-weight: bold;"`), überschreiben immer alle normalen Stile in Autoren-Stilblättern und können daher als die höchste Spezifität angesehen werden. Betrachten Sie Inline-Stile als hätte sie ein Spezifitätsgewicht von `1-0-0-0`.

Die einzige Möglichkeit, Inline-Stile zu überschreiben, ist die Verwendung von `!important`.

Viele JavaScript-Frameworks und -Bibliotheken fügen Inline-Stile hinzu. Die Verwendung von `!important` mit einem sehr zielgerichteten Selektor, wie z.B. einem Attributselektor, der den Inline-Stil verwendet, ist eine Möglichkeit, diese Inline-Stile zu überschreiben.

```html
<p style="color: purple">…</p>
```

```css
p[style*="purple"] {
  color: rebeccapurple !important;
}
```

Stellen Sie sicher, dass Sie mit jeder Verwendung der wichtigen Flagge einen Kommentar hinzufügen, damit Codepfleger verstehen, warum ein CSS-Anti-Pattern verwendet wurde.

### Die `!important` Ausnahme

CSS-Deklarationen, die als wichtig markiert sind, überschreiben alle anderen Deklarationen innerhalb derselben Kaskadenschicht und Herkunft. Obwohl technisch gesehen [`!important`](/de/docs/Web/CSS/Reference/Values/important) nichts mit Spezifität zu tun hat, interagiert es direkt mit Spezifität und der Kaskade. Es kehrt die Reihenfolge der [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction) von Stylesheets um.

Wenn Deklarationen aus derselben Herkunft und Kaskadenschicht in Konflikt stehen und ein Eigenschaftswert das `!important`-Flag gesetzt hat, wird die wichtige Deklaration unabhängig von der Spezifität angewendet. Wenn konkurrierende Deklarationen aus derselben Herkunft und Kaskadenschicht mit dem `!important`-Flag auf dasselbe Element angewendet werden, wird die Deklaration mit der höheren Spezifität angewendet.

Die Verwendung von `!important`, um Spezifität zu überschreiben, gilt als **schlechte Praxis** und sollte für diesen Zweck vermieden werden. Das Verständnis und die effektive Nutzung von Spezifität und der Kaskade können jegliche Notwendigkeit für das `!important`-Flag entfernen.

Anstatt `!important` zu verwenden, um fremde CSS (aus externen Bibliotheken, wie Bootstrap oder normalize.css) zu überschreiben, importieren Sie die Drittanbieter-Skripte direkt in [Kaskadenschichten](/de/docs/Web/CSS/Reference/At-rules/@layer). Wenn Sie `!important` in Ihrem CSS verwenden müssen, kommentieren Sie Ihre Verwendung, damit zukünftige Code-Pflegepersonen wissen, warum die Deklaration als wichtig markiert wurde und nicht überschrieben wird. Aber verwenden Sie definitiv nicht `!important`, wenn Sie Plugins oder Frameworks erstellen, die andere Entwickler ohne Kontrolle integrieren müssen.

### Die `:where()` Ausnahme

Die Spezifitäts-Anpassungs-Pseudo-Klasse {{CSSxRef(":where", ":where()")}} hat immer ihre Spezifität durch null ersetzt, `0-0-0`. Sie ermöglicht es, CSS-Selektoren sehr spezifisch zu machen, welches Element angesprochen wird, ohne dass die Spezifität erhöht wird.

Beim Erstellen von Drittanbieter-CSS, das von Entwicklern verwendet werden soll, die keinen Zugang zum Bearbeiten Ihres CSS haben, ist es eine gute Praxis, CSS mit der geringstmöglichen Spezifität zu erstellen. Zum Beispiel, wenn Ihr Thema folgendes CSS enthält:

```css
:where(#defaultTheme) a {
  /* 0-0-1 */
  color: red;
}
```

Dann kann der Entwickler, der das Widget implementiert, die Linkfarbe leicht überschreiben, nur indem er Typselektoren verwendet.

```css
footer a {
  /* 0-0-2 */
  color: blue;
}
```

### Wie `@scope` Blöcke die Spezifität beeinflussen

Das Einschließen eines Regelsets in einen {{cssxref("@scope")}} Block hat keinen Einfluss auf die Spezifität seines Selektors, unabhängig von den Selektoren, die innerhalb der [Scope-Root und -Limit](/de/docs/Web/CSS/Reference/At-rules/@scope#syntax) verwendet werden. Wenn Sie sich jedoch entscheiden, die {{cssxref(":scope")}} Pseudo-Klasse explizit hinzuzufügen, müssen Sie sie bei der Berechnung ihrer Spezifität berücksichtigen. `:scope`, wie alle normalen Pseudo-Klassen, hat eine Spezifität von 0-1-0. Zum Beispiel:

```css
@scope (.article-body) {
  /* :scope img has a specificity of 0-1-0 + 0-0-1 = 0-1-1 */
  :scope img {
  }
}
```

Siehe [Spezifität in `@scope`](/de/docs/Web/CSS/Reference/At-rules/@scope#specificity_in_scope) für weitere Informationen.

## Tipps zur Handhabung von Spezifitätsproblemen

Anstatt `!important` zu verwenden, sollten Sie Kaskadenschichten verwenden und im gesamten CSS niedrige Gewichtspezifität verwenden, damit Stile leicht mit etwas spezifischeren Regeln überschrieben werden können. Die Verwendung von semantischem HTML hilft, Anker bereitzustellen, von denen aus Sie Stile anwenden können.

### Selektoren spezifisch machen mit und ohne Erhöhung der Spezifität

Indem Sie den Abschnitt des Dokuments angeben, den Sie vor dem von Ihnen ausgewählten Element stylen, wird die Regel spezifischer. Je nachdem, wie Sie es hinzufügen, können Sie etwas, viel oder keine Spezifität hinzufügen, wie unten gezeigt:

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

Unabhängig von der Reihenfolge wird die Überschrift grün sein, weil diese Regel die spezifischste ist.

#### Reduzierung der ID-Spezifität

Spezifität basiert auf der Form eines Selektors. Die `id` eines Elements als Attributselektor anstelle eines ID-Selektors einzuschließen, ist eine gute Möglichkeit, ein Element spezifischer zu machen, ohne eine Überfrachtung der Spezifität hinzuzufügen. Im vorherigen Beispiel zählt der Selektor `[id="myContent"]` als Attributselektor für die Bestimmung der Spezifität des Selektors, obwohl er eine ID auswählt.

Sie können auch die `id` oder einen Teil eines Selektors als Parameter in der `:where()` Spezifitäts-Anpassungs-Pseudo-Klasse einfügen, wenn Sie einen Selektor spezifischer machen müssen, aber überhaupt keine Spezifität hinzufügen möchten.

### Erhöhung der Spezifität durch Duplizieren von Selektoren

Als Sonderfall zur Erhöhung der Spezifität können Sie Gewichte aus den _CLASS_ oder _ID_ Spalten duplizieren. Das Duplizieren von ID-, Klassen-, Pseudo-Klassen- oder Attributselektoren innerhalb eines zusammengesetzten Selektors erhöht die Spezifität, wenn Sie sehr spezifische Selektoren überschreiben müssen, über die Sie keine Kontrolle haben.

```css
#myId#myId#myId span {
  /* 3-0-1 */
}
.myClass.myClass.myClass span {
  /* 0-3-1 */
}
```

Verwenden Sie dies sparsam, wenn überhaupt. Wenn Sie Selektorduplikation verwenden, kommentieren Sie immer Ihr CSS.

Durch die Verwendung von `:is()` und `:not()` (und auch `:has()`) können Sie die Spezifität erhöhen, auch wenn Sie keine `id` zu einem übergeordneten Element hinzufügen können:

```css
:not(#fakeID#fakeId#fakeID) span {
  /* 3-0-1 */
}
:is(#fakeID#fakeId#fakeID, span) {
  /* 3-0-0 */
}
```

### Vorrang vor Drittanbieter-CSS

Die Nutzung von Kaskadenschichten ist der Standardweg, um einer Stilmenge Vorrang vor einer anderen zu geben; Kaskadenschichten ermöglichen dies ohne die Verwendung von Spezifität! Normale (nicht wichtige) Autorenstile, die in Kaskadenschichten importiert werden, haben eine geringere Priorität als nicht geschichtete Autorenstile.

Wenn Stile aus einem Stylesheet stammen, das Sie nicht bearbeiten oder nicht verstehen können und Sie Stile überschreiben müssen, ist eine Strategie, die Stile, die Sie nicht kontrollieren können, in eine Kaskadenschicht zu importieren. Stile in anschließend erklärten Schichten haben Vorrang, wobei nicht geschichtete Stile Vorrang vor allen geschichteten Stilen aus demselben Ursprung haben.

Wenn zwei Selektoren aus verschiedenen Schichten dasselbe Element treffen, haben Ursprung und Wichtigkeit Vorrang; die Spezifität des Selektors im verlierenden Stylesheet ist irrelevant.

```css
@import "TW.css" layer();
p,
p * {
  font-size: 1rem;
}
```

Im obigen Beispiel wird der gesamte Absatztext, einschließlich des verschachtelten Inhalts, `1rem` sein, egal wie viele Klassennamen die Absätze haben, die mit dem TW-Stylesheet übereinstimmen.

### Vermeidung und Überschreiben von `!important`

Der beste Ansatz ist es, `!important` nicht zu verwenden. Die obigen Erklärungen zur Spezifität sollten hilfreich sein, um die Verwendung der Flagge zu vermeiden und sie bei Bedarf zu entfernen.

Um den wahrgenommenen Bedarf an `!important` zu beseitigen, können Sie eine der folgenden Optionen verwenden:

- Erhöhen Sie die Spezifität des Selektors der ehemaligen `!important` Deklaration, so dass sie größer ist als andere Deklarationen.
- Geben Sie ihm die gleiche Spezifität und setzen Sie ihn nach der Deklaration, die er überschreiben soll.
- Reduzieren Sie die Spezifität des Selektors, den Sie zu überschreiben versuchen.

Alle diese Methoden wurden in den vorhergehenden Abschnitten behandelt.

Wenn Sie die `!important` Flags aus einem Autoren-Stilblatt nicht entfernen können, ist die einzige Lösung, die wichtigen Stile zu überschreiben, die Verwendung von `!important`. Erstellen Sie eine [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer) mit wichtigen Deklarationsüberschreibungen als exzellente Lösung. Zwei Möglichkeiten dafür sind:

#### Methode 1

1. Erstellen Sie ein separates, kurzes Stylesheet, das nur wichtige Deklarationen enthält, die speziell wichtige Deklarationen überschreiben, die Sie nicht entfernen konnten.
2. Importieren Sie dieses Stylesheet als den ersten Import in Ihrem CSS mit `layer()`, einschließlich der `@import` Angabe, bevor Sie andere Stylesheets verlinken. Dies dient dazu, sicherzustellen, dass die wichtigen Überschreibungen als erste Schicht importiert werden.

```css
@import "importantOverrides.css" layer();
```

#### Methode 2

1. Erstellen Sie zu Beginn Ihrer Stylesheet-Deklarationen eine benannte Kaskadenschicht, wie folgt:

   ```css
   @layer importantOverrides;
   ```

2. Jedes Mal, wenn Sie eine wichtige Deklaration überschreiben müssen, erklären Sie sie innerhalb der benannten Schicht. Erklären Sie nur wichtige Regeln innerhalb der Schicht.

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

Die Spezifität des Selektors des wichtigen Stils innerhalb der Schicht kann niedrig sein, solange er das Element trifft, das Sie überschreiben möchten. Normale Schichten sollten außerhalb der Schicht erklärt werden, da geschichtete Stile eine geringere Priorität als nicht geschichtete Stile haben.

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

Die `<h1>`-Elemente werden lila sein, denn wenn Deklarationen die gleiche Spezifität haben, hat der zuletzt erklärte Selektor Vorrang.

### Direkt adressierte Elemente vs. geerbte Stile

Stile für ein direkt adressiertes Element haben immer Vorrang vor geerbten Stilen, unabhängig von der Spezifität der geerbten Regel. Angenommen, folgendes CSS und HTML:

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

Das `h1` wird lila sein, weil der `h1`-Selektor das Element spezifisch anspricht, während das Grün vom `#parent` geerbt wird.

## Beispiele

In dem folgenden CSS haben wir drei Selektoren, die {{HTMLElement('input')}}-Elemente ansprechen, um eine Farbe zu setzen. Für ein bestimmtes Eingabefeld ist das Spezifitätsgewicht der Farbe-Deklaration im Vordergrund der übereinstimmende Selektor mit dem höchsten Gewicht:

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

Wenn die oben genannten Selektoren alle dasselbe Eingabefeld ansprechen, wird das Eingabefeld rot sein, da die erste Deklaration den höchsten Wert in der _ID_-Spalte hat.

Der letzte Selektor hat vier _TYPE_-Komponenten. Während er den höchsten Ganzzahlenwert hat, haben _TYPE_-Komponenten niemals Vorrang vor _CLASS_-Komponenten, egal wie viele Elemente und Pseudo-Elemente enthalten sind, selbst wenn es 150 wären. Die Spaltenwerte werden von links nach rechts verglichen, wenn die Spaltenwerte gleich sind.

Hätten wir den ID-Selektor im obigen Beispielcode in einen Attributselektor umgewandelt, hätten die ersten beiden Selektoren die gleiche Spezifität, wie unten gezeigt:

```css
[id="myElement"] input.myClass {
  color: red;
} /* 0-2-1 */
input[type="password"]:required {
  color: blue;
} /* 0-2-1 */
```

Wenn mehrere Deklarationen die gleiche Spezifität haben, wird die letzte Deklaration, die im CSS gefunden wird, auf das Element angewendet. Wenn beide Selektoren mit demselben {{HTMLElement('input')}} übereinstimmen, wird die Farbe blau sein.

## Zusätzliche Hinweise

Ein paar Dinge, die Sie über Spezifität im Gedächtnis behalten sollten:

1. Spezifität gilt nur, wenn dasselbe Element von mehreren Deklarationen in derselben Kaskadenschicht oder Herkunft anvisiert wird. Spezifität ist nur für Deklarationen von gleicher Bedeutung und gleicher Herkunft und [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer) von Belang. Wenn übereinstimmende Selektoren in verschiedenen Ursprüngen sind, bestimmt die [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction), welche Deklaration Vorrang hat.

2. Wenn zwei Selektoren in derselben Kaskadenschicht und Herkunft die gleiche Spezifität haben, wird die Nähe der Ausrichtung berechnet; das Regelset mit der niedrigsten Nähe der Ausrichtung gewinnt. Siehe [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/Reference/At-rules/@scope#how_scope_conflicts_are_resolved) für weitere Details und ein Beispiel.

3. Wenn die Nähe der Ausrichtung auch für beide Selektoren gleich ist, kommt die Quellordnung ins Spiel. Wenn alles andere gleich ist, gewinnt der letzte Selektor.

4. Laut CSS-Regeln werden [direkt adressierte Elemente](#direkt_adressierte_elemente_vs._geerbte_stile) immer Vorrang vor Regeln haben, die ein Element von seinen Vorfahren erbt.

5. [Nähe der Elemente](#baum-nähe-ignoranz) im Dokumentbaum hat keinen Einfluss auf die Spezifität.

## Spezifikationen

{{Specifications}}

## Siehe auch

- ["Spezifität" in "Umgang mit Konflikten"](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity_2)
- [SpeciFISHity](https://specifishity.com/)
- [Specificity Calculator](https://specificity.keegan.st/): Eine interaktive Website zum Testen und Verstehen Ihrer eigenen CSS-Regeln
- [_ID-CLASS-TYPE_ Übung](https://estelle.github.io/CSS/selectors/exercises/specificity.html) ein Spezifitäts-Quiz
- [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax/Introduction) Leitfaden
- [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax) Modul
- [Fehlerbehandlung in CSS](/de/docs/Web/CSS/Guides/Syntax/Error_handling)
- [At-Regeln](/de/docs/Web/CSS/Guides/Syntax/At-rules)
- [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
- [Initial](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value), [berechnet](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value), [verwendet](/de/docs/Web/CSS/C
