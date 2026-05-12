---
title: Spezifität
slug: Web/CSS/Guides/Cascade/Specificity
l10n:
  sourceCommit: 2cae555c4c25b6aa8eeee5d0b0844c7edc64d5b1
---

**Spezifität** ist das Gewicht, das Browser im Kaskadenalgorithmus verwenden, um die [CSS-Deklaration](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#css_syntax_basics) zu bestimmen, die für ein Element am relevantesten ist und somit den anzuwendenden Eigenschaftswert bestimmt. Der Spezifitätsalgorithmus berechnet dieses Gewicht anhand eines [CSS-Selectors](/de/docs/Web/CSS/Reference#selectors) und vergleicht die resultierenden Werte, um zu entscheiden, welche Regel von konkurrierenden CSS-Deklarationen innerhalb desselben Ursprungs und derselben Ebene auf ein Element angewendet wird.

> [!NOTE]
> Browser berücksichtigen die Spezifität **nachdem** sie [Kaskadenursprung und Wichtigkeit](/de/docs/Web/CSS/Guides/Cascade/Introduction) bestimmt haben. Anders gesagt, bei konkurrierenden Eigenschaftsdeklarationen ist die Spezifität nur zwischen Selektoren von einem [Kaskadenursprung und einer Schicht](/de/docs/Web/CSS/Reference/At-rules/@layer) relevant und wird verglichen, die für die Eigenschaft Vorrang hat. [Scoping-Nähe](/de/docs/Web/CSS/Reference/At-rules/@scope#how_scope_conflicts_are_resolved) und Reihenfolge des Erscheinens werden relevant, wenn die Selektorspezifitäten der konkurrierenden Deklarationen in der Kaskadenschicht mit Vorrang gleich sind.

## Wie wird die Spezifität berechnet?

Spezifität ist das Gewicht, das auf eine gegebene CSS-Deklaration angewendet wird. Der Spezifitätsalgorithmus berechnet dieses Gewicht basierend auf der Anzahl der [Selektoren jeder Gewichtskategorie](#kategorien_der_selektorgewichte) im Selektor, der dem Element (oder Pseudo-Element) entspricht. Wenn es zwei oder mehr Deklarationen gibt, die unterschiedliche Eigenschaftswerte für dasselbe Element bereitstellen, wird der Deklarationswert in dem Stilblock angewendet, der den passenden Selektor mit dem größten Gewicht hat.

Der Spezifitätswert ist im Wesentlichen ein dreisäuliger Wert aus drei Kategorien oder Gewichten - ID, CLASS und TYPE -, die den drei Typen von Selektoren entsprechen. Der Wert repräsentiert die Anzahl der Selektorkomponenten in jeder Gewichtskategorie und wird als _ID - CLASS - TYPE_ geschrieben. Die drei Spalten entstehen durch Zählen der Anzahl der Selektorkomponenten für jede Gewichts-Kategorie der Selektoren, die dem Element entsprechen.

### Kategorien der Selektorgewichte

Die Kategorien der Selektorgewichte sind hier in absteigender Spezifität aufgelistet:

- ID-Spalte
  - : Beinhaltet nur [ID-Selektoren](/de/docs/Web/CSS/Reference/Selectors/ID_selectors), wie `#example`. Für jede ID in einem passenden Selektor wird 1-0-0 zum Gewichtswert hinzugefügt.
- CLASS-Spalte
  - : Beinhaltet [Klassen-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Class_selectors), wie `.myClass`, Attributselektoren wie `[type="radio"]` und `[lang|="fr"]`, und Pseudo-Klassen, wie `:hover`, `:nth-of-type(3n)`, und `:required`. Für jede Klasse, jeden Attributselektor oder jede Pseudoklasse in einem passenden Selektor wird 0-1-0 zum Gewichtswert hinzugefügt.
- TYPE-Spalte
  - : Beinhaltet [Typselektoren](/de/docs/Web/CSS/Reference/Selectors/Type_selectors), wie `p`, `h1`, und `td`, und Pseudo-Elemente wie `::before`, `::placeholder`, und alle anderen Selektoren mit Doppel-Doppelpunkt-Notation. Für jeden Typ oder jedes Pseudo-Element in einem passenden Selektor wird 0-0-1 zum Gewichtswert hinzugefügt.
- Kein Wert
  - : Der universelle Selektor ({{CSSxRef("Universal_selectors", "*")}}) und die Pseudoklasse {{cssxref(":where()")}} und ihre Parameter werden bei der Berechnung des Gewichts nicht gezählt, sodass ihr Wert 0-0-0 ist, aber sie matchen Elemente. Diese Selektoren beeinflussen den Spezifitätswert nicht.

Kombinatoren, wie {{CSSxRef("Next-sibling_combinator", "+")}}, {{CSSxRef("Child_combinator", "&gt;")}}, {{CSSxRef("Subsequent-sibling_combinator", "~")}}, [" "](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator), und {{CSSxRef("Column_combinator", "||")}}, können einen Selektor spezifischer machen in dem, was ausgewählt wird, aber sie fügen dem Spezifitätsgewicht keinen Wert hinzu.

Der `&`-Nesting-Kombinator fügt kein Spezifitätsgewicht hinzu, aber verschachtelte Regeln schon. In Bezug auf Spezifität und Funktionalität ist das Nesting sehr ähnlich zur Pseudoklasse {{cssxref(":is()")}}.

Wie bei der Verschachtelung fügen die Pseudoklassen {{cssxref(":is()")}}, {{cssxref(":has()")}}, und Negation ({{cssxref(":not()")}}) selbst kein Gewicht hinzu. Die Parameter in diesen Selektoren jedoch schon. Das Spezifitätsgewicht eines jeden kommt von dem Selektionsparameter in der Liste der Selektoren mit der höchsten Spezifität. Ebenso bei verschachtelten Selektoren, das Spezifitätsgewicht, das durch die verschachtelte Selektorkomponente hinzugefügt wird, ist der Selektor in der mit Komma getrennten Liste verschachtelter Selektoren mit der höchsten Spezifität.

Die [`:not()`, `:is()`, `:has()` und CSS-Verschachtelungs-Ausnahmen](#the_is_not_has_and_css_nesting_exceptions) werden unten diskutiert.

#### Passender Selektor

Das Spezifitätsgewicht stammt vom passenden Selektor. Nehmen Sie diesen CSS-Selektor mit drei kommagetrennten Selektoren als Beispiel:

```css
[type="password"],
input:focus,
:root #myApp input:required {
  color: blue;
}
```

Der `[type="password"]`-Selektor in der obigen Selektorliste, mit einem Spezifitätsgewicht von `0-1-0`, wendet die Deklaration `color: blue` auf alle Passwort-Eingabetypen an.

Alle Eingabearten, unabhängig vom Typ, wenn sie den Fokus erhalten, passen zum zweiten Selektor in der Liste, `input:focus`, mit einem Spezifitätsgewicht von `0-1-1`; dieses Gewicht setzt sich aus der Pseudoklasse `:focus` (0-1-0) und dem `input`-Typ (0-0-1) zusammen. Wenn das Passworteingabefeld den Fokus hat, wird es `input:focus` zugeordnet, und das Spezifitätsgewicht für den `color: blue` Stil wird `0-1-1` sein. Wenn das Passwort keinen Fokus hat, bleibt das Spezifitätsgewicht bei `0-1-0`.

Die Spezifität für eine erforderliche Eingabe, die in einem Element mit dem Attribut `id="myApp"` verschachtelt ist, ist `1-2-1`, basierend auf einer ID, zwei Pseudoklassen und einem Elementtyp.

Wenn der Passwort-Eingabetyp mit `required` in einem Element mit `id="myApp"` gesetzt verschachtelt ist, wird das Spezifitätsgewicht `1-2-1` sein, basierend auf einer ID, zwei Pseudoklassen und einem Elementtyp, unabhängig davon, ob es den Fokus hat oder nicht. Warum ist das Spezifitätsgewicht in diesem Fall `1-2-1` statt `0-1-1` oder `0-1-0`? Weil das Spezifitätsgewicht vom passenden Selektor mit dem größten Spezifitätsgewicht kommt. Das Gewicht wird bestimmt, indem die Werte in den drei Spalten von links nach rechts verglichen werden.

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

Sobald die Spezifitätswerte der relevanten Selektoren bestimmt sind, werden die Anzahl der Selektorkomponenten in jeder Spalte von links nach rechts verglichen.

```css
#myElement {
  color: green; /* 1-0-0  - WINS!! */
}
.bodyClass .sectionClass .parentClass [id="myElement"] {
  color: yellow; /* 0-4-0 */
}
```

Die erste Spalte ist der Wert der _ID_-Komponente, die die Anzahl der IDs in jedem Selektor ist. Die Zahlen in den _ID_-Spalten konkurrierender Selektoren werden verglichen. Der Selektor mit dem größeren Wert in der _ID_-Spalte gewinnt, egal wie die Werte in den anderen Spalten sind. Im obigen Beispiel, selbst wenn der gelbe Selektor insgesamt mehr Komponenten hat, zählt nur der Wert der ersten Spalte.

Wenn die Nummer in den _ID_-Spalten konkurrierender Selektoren gleich ist, wird die nächste Spalte, _CLASS_, wie unten gezeigt, verglichen.

```css
#myElement {
  color: yellow; /* 1-0-0 */
}
#myApp [id="myElement"] {
  color: green; /* 1-1-0  - WINS!! */
}
```

Die _CLASS_-Spalte ist die Anzahl der Klassennamen, Attributselektoren und Pseudoklassen im Selektor. Wenn der Wert der _ID_-Spalte gleich ist, gewinnt der Selektor mit dem größeren Wert in der _CLASS_-Spalte, unabhängig vom Wert in der _TYPE_-Spalte. Dies wird im Beispiel unten gezeigt.

```css
:root input {
  color: green; /* 0-1-1 - WINS because CLASS column is greater */
}
html body main input {
  color: yellow; /* 0-0-4 */
}
```

Wenn die Zahlen in den _CLASS_ und _ID_-Spalten konkurrierender Selektoren gleich sind, wird die _TYPE_-Spalte relevant. Die _TYPE_-Spalte ist die Anzahl der Elementtypen und Pseudo-Elemente im Selektor. Wenn die ersten beiden Spalten denselben Wert haben, gewinnt der Selektor mit der größeren Zahl in der _TYPE_-Spalte.

Wenn konkurrierende Selektoren denselben Wert in allen drei Spalten haben, kommt die Nähe-Regel ins Spiel, bei der der zuletzt erklärte Stil Vorrang hat.

```css
input.myClass {
  color: yellow; /* 0-1-1 */
}
:root input {
  color: green; /* 0-1-1 WINS because it comes later */
}
```

### Die `:is()`, `:not()`, `:has()` und CSS-Verschachtelungs-Ausnahmen

Die Matches-any-Pseudoklasse {{cssxref(":is()")}}, die relationale Pseudoklasse {{cssxref(":has()")}} und die Negations-Pseudoklasse {{cssxref(":not()")}} werden **nicht** als Pseudoklassen in der Berechnung des Spezifitätswerts betrachtet. Sie selbst fügen der Spezifitätsgleichung kein Gewicht hinzu. Jedoch sind die Selektionsparameter, die in die Pseudoklassen-Klammer übergeben werden, Teil des Spezifitätsalgorithmus; das Gewicht der Matches-any und der Negations-Pseudoklasse in der Berechnung des Spezifitätswerts ist das Gewicht des Parameters [Gewicht](#kategorien_der_selektorgewichte).

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

Beachten Sie, dass im obigen CSS-Paar das Spezifitätsgewicht, das die `:is()`, `:has()` und `:not()` Pseudoklassen bereitstellen, der Wert des Selektionsparameters und nicht der Pseudoklasse selbst ist.

Alle drei dieser Pseudoklassen akzeptieren komplexe Selektorlisten, eine Liste von kommagetrennten Selektoren, als Parameter. Diese Funktion kann verwendet werden, um die Spezifität eines Selektors zu erhöhen:

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

In dem obigen CSS-Code-Block haben wir `#fakeId` in den Selektoren eingeschlossen. Dieses `#fakeId` fügt jedem Absatz `1-0-0` zum Spezifitätsgewicht hinzu.

Wenn komplexe Selektorlisten mit [CSS-Verschachtelung](/de/docs/Web/CSS/Guides/Nesting) erstellt werden, verhält sich dies genauso wie die `:is()`-Pseudoklasse.

```css
p,
#fakeId {
  span {
    /* 1-0-1 */
  }
}
```

In dem obigen Code-Block wird die komplexe Selektorliste `p, #fakeId` von der Spezifität `#fakeId` und auch dem `span` genommen, sodass dies eine Spezifität von `1-0-1` sowohl für `p span` als auch `#fakeId span` erzeugt. Dies entspricht der Spezifität des `:is(p, #fakeId) span`-Selectors.

Im Allgemeinen möchten Sie die Spezifität so gering wie möglich halten. Wenn Sie jedoch die Spezifität eines Elements aus einem bestimmten Grund erhöhen müssen, können diese drei Pseudoklassen helfen.

```css
a:not(#fakeId#fakeId#fakeID) {
  color: blue; /* 3-0-1 */
}
```

In diesem Beispiel werden alle Links blau sein, es sei denn, sie werden durch eine Linkdeklaration mit 3 oder mehr IDs überschrieben, ein Farbwert mit einem `a` enthält das [`!important`-Flag](#the_!important_exception), oder wenn der Link eine [Inline-Stil](#inline-stile) Farbdeklaration hat. Wenn Sie eine solche Technik verwenden, fügen Sie einen Kommentar hinzu, um zu erklären, warum der Hack benötigt wurde.

### Inline-Stile

Inline-Stile, die einem Element hinzugefügt werden (z. B. `style="font-weight: bold;"`), überschreiben immer normale Stile in Autorenstilen und können daher als mit der höchsten Spezifität betrachtet werden. Denken Sie an Inline-Stile als mit einem Spezifitätsgewicht von `1-0-0-0`.

Der einzige Weg, Inline-Stile zu überschreiben, ist durch die Verwendung von `!important`.

Viele JavaScript-Frameworks und -Bibliotheken fügen Inline-Stile hinzu. Die Verwendung von `!important` mit einem sehr gezielten Selektor, wie einem Attributselektor, der den Inline-Stil verwendet, ist eine Möglichkeit, diese Inline-Stile zu überschreiben.

```html
<p style="color: purple">…</p>
```

```css
p[style*="purple"] {
  color: rebeccapurple !important;
}
```

Stellen Sie sicher, dass Sie einen Kommentar mit jeder Einbindung des wichtigen Flags hinzufügen, damit Code-Pfleger verstehen, warum ein CSS-Anti-Pattern verwendet wurde.

### Die Ausnahme `!important`

CSS-Deklarationen, die als important markiert sind, überschreiben alle anderen Deklarationen innerhalb derselben Kaskadenschicht und desselben Ursprungs. Obwohl technisch, [`!important`](/de/docs/Web/CSS/Reference/Values/important) nichts mit Spezifität zu tun hat, interagiert es direkt mit der Spezifität und der Kaskade. Es invertiert die [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction) Reihenfolge der Stylesheets.

Wenn Deklarationen aus demselben Ursprung und derselben Kaskadenschicht in Konflikt geraten und ein Eigenschaftswert das `!important`-Flag gesetzt hat, wird die wichtige Deklaration unabhängig von der Spezifität angewendet. Wenn konkurrierende Deklarationen aus demselben Ursprung und derselben Kaskadenschicht mit dem `!important`-Flag auf dasselbe Element angewendet werden, wird die Deklaration mit der größeren Spezifität angewendet.

Die Verwendung von `!important` zur Überschreibung von Spezifität wird als **schlechte Praxis** angesehen und sollte für diesen Zweck vermieden werden. Das Verständnis und die effektive Nutzung von Spezifität und der Kaskade können die Notwendigkeit des `!important`-Flags beseitigen.

Anstatt `!important` zu verwenden, um fremde CSS (aus externen Bibliotheken, wie Bootstrap oder normalize.css) zu überschreiben, importieren Sie die Drittanbieter-Skripte direkt in [Kaskadenschichten](/de/docs/Web/CSS/Reference/At-rules/@layer). Wenn Sie `!important` in Ihrem CSS verwenden müssen, kommentieren Sie Ihre Nutzung, damit zukünftige Codepfleger wissen, warum die Deklaration als wichtig markiert wurde und wissen, dass sie nicht überschrieben werden sollte. Verwenden Sie `!important` auf jeden Fall nicht für Plugins oder Frameworks, die von anderen Entwicklern integriert werden müssen, ohne die Kontrolle zu haben.

### Die Ausnahme `:where()`

Die Spezifitätsanpassungs-Pseudoklasse {{cssxref(":where()")}} hat immer ihre Spezifität durch Null ersetzt, `0-0-0`. Sie ermöglicht es, CSS-Selektoren sehr spezifisch zu machen in Bezug auf das gezielte Element, ohne jegliche Erhöhung der Spezifität.

Beim Erstellen von Drittanbieter-CSS, das von Entwicklern verwendet werden soll, die keinen Zugriff auf Ihr CSS haben, wird eine gute Praxis darin gesehen, CSS mit der niedrigstmöglichen Spezifität zu erstellen. Beispiel: Wenn Ihr Thema das folgende CSS enthält:

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

### Wie `@scope`-Blöcke die Spezifität beeinflussen

Das Einfügen eines Regelsatzes in einen {{cssxref("@scope")}} Block beeinflusst die Spezifität seines Selektors nicht, unabhängig von den Selektoren, die innerhalb der [Scope-Root und -Grenze](/de/docs/Web/CSS/Reference/At-rules/@scope#syntax) verwendet werden. Wenn Sie sich jedoch entscheiden, die {{cssxref(":scope")}}-Pseudoklasse explizit hinzuzufügen, müssen Sie sie bei der Berechnung ihrer Spezifität berücksichtigen. `:scope`, wie alle regulären Pseudo-Klassen, hat eine Spezifität von 0-1-0. Zum Beispiel:

```css
@scope (.article-body) {
  /* :scope img has a specificity of 0-1-0 + 0-0-1 = 0-1-1 */
  :scope img {
  }
}
```

Mehr Informationen finden Sie unter [Spezifität in `@scope`](/de/docs/Web/CSS/Reference/At-rules/@scope#specificity_in_scope).

## Tipps zum Umgang mit Spezifitätsproblemen

Statt `!important` zu verwenden, ziehen Sie in Betracht, Kaskadenschichten und niedrig gewichtete Spezifität in Ihrem CSS zu verwenden, damit Stile mit leicht spezifischeren Regeln leicht überschrieben werden können. Die Verwendung von semantischem HTML hilft, Anker bereitzustellen, von denen aus Styling angewendet werden kann.

### Selektoren spezifisch machen mit und ohne Erhöhung der Spezifität

Indem Sie den Abschnitt des Dokuments angeben, den Sie stylen, bevor Sie das Element auswählen, wird die Regel spezifischer. Je nachdem, wie Sie es hinzufügen, können Sie etwas, viel oder keine Spezifität hinzufügen, wie unten gezeigt:

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

#### Reduzierung der ID-Spezifität

Spezifität basiert auf der Form eines Selektors. Das Einschließen der `id` eines Elements als Attributselektor anstatt eines ID-Selektors ist eine gute Möglichkeit, ein Element spezifischer zu machen, ohne eine Überfülle an Spezifität hinzuzufügen. Im vorherigen Beispiel wird der Selektor `[id="myContent"]` als Attributselektor zur Bestimmung der Spezifität des Selektors gezählt, auch wenn er eine ID auswählt.

Sie können auch die `id` oder einen Teil eines Selektors als Parameter in der `:where()` Spezifitätsanpassungs-Pseudoklasse einschließen, wenn Sie einen Selektor spezifischer machen müssen, aber keine Spezifität hinzufügen möchten.

### Erhöhung der Spezifität durch Duplizieren des Selektors

Als besonderer Fall zur Erhöhung der Spezifität können Sie Gewichte aus den _CLASS_ oder _ID_-Spalten duplizieren. Das Duplizieren von ID-, Klassen-, Pseudoklassen- oder Attributselektoren innerhalb eines zusammengesetzten Selektors erhöht die Spezifität, wenn Sie sehr spezifische Selektoren überschreiben, über die Sie keine Kontrolle haben.

```css
#myId#myId#myId span {
  /* 3-0-1 */
}
.myClass.myClass.myClass span {
  /* 0-3-1 */
}
```

Verwenden Sie dies sparsam, wenn überhaupt. Wenn Sie Selektor-Duplikation verwenden, kommentieren Sie immer Ihr CSS.

Durch die Verwendung von `:is()` und `:not()` (und auch `:has()`), können Sie die Spezifität erhöhen, auch wenn Sie einer Elternstruktur keine `id` hinzufügen können:

```css
:not(#fakeID#fakeId#fakeID) span {
  /* 3-0-1 */
}
:is(#fakeID#fakeId#fakeID, span) {
  /* 3-0-0 */
}
```

### Vorrang gegenüber Drittanbieter-CSS

Das Nutzen von Kaskadenschichten ist der Standardweg, um es einem Satz von Stilen zu ermöglichen, Priorität über einen anderen Satz von Stilen zu haben; Kaskadenschichten ermöglichen dies ohne Spezifität! Normale (nicht wichtige) Autorenstile, die in Kaskadenschichten importiert werden, haben geringere Priorität als nicht geschichtete Autorenstile.

Wenn Stile aus einem Stylesheet stammen, das Sie nicht bearbeiten können oder nicht verstehen, und Sie Stile überschreiben müssen, ist eine Strategie, die Stile in eine Kaskadenschicht zu importieren, die Sie nicht kontrollieren. Stile in nachfolgend deklarierten Schichten haben Vorrang, wobei nicht geschichtete Stile Vorrang vor allen geschichteten Stilen aus demselben Ursprung haben.

Wenn zwei Selektoren aus verschiedenen Schichten dasselbe Element matchen, haben Ursprung und Wichtigkeit Vorrang; Die Spezifität des Selektors im verlierenden Stylesheet ist irrelevant.

```css
@import "TW.css" layer();
p,
p * {
  font-size: 1rem;
}
```

In dem obigen Beispiel wird aller Absatztext, einschließlich des verschachtelten Inhalts, `1rem` sein, egal wie viele Klassennamen die Absätze haben, die das TW-Stylesheet matchen.

### Vermeidung und Überschreibung von `!important`

Der beste Ansatz ist es, `!important` nicht zu verwenden. Die oben genannten Erklärungen zur Spezifität sollten hilfreich sein, um die Verwendung des Flags zu vermeiden und es insgesamt zu entfernen, wenn es begegnet wird.

Um den wahrgenommenen Bedarf für `!important` zu beseitigen, können Sie Folgendes tun:

- Erhöhen Sie die Spezifität des Selektors der ehemaligen `!important`-Deklaration, sodass sie größer ist als andere Deklarationen
- Geben Sie ihm die gleiche Spezifität und positionieren Sie ihn nach der Deklaration, die er überschreiben soll
- Reduzieren Sie die Spezifität des Selektors, den Sie überschreiben möchten.

Alle diese Methoden sind in den vorangegangenen Abschnitten behandelt.

Wenn Sie keine `!important`-Flags aus einem Autoren-Stylesheet entfernen können, ist die einzige Lösung zum Überschreiben der wichtigen Stile die Verwendung von `!important`. Das Erstellen einer [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer) zum Überschreiben wichtiger Deklarationen ist eine ausgezeichnete Lösung. Zwei Möglichkeiten dies zu tun sind:

#### Methode 1

1. Erstellen Sie ein separates, kurzes Stylesheet, das nur wichtige Deklarationen enthält, die speziell jede wichtige Deklaration überschreiben, die Sie nicht entfernen konnten.
2. Importieren Sie dieses Stylesheet als ersten Import in Ihr CSS mit `layer()`, einschließlich der `@import`-Anweisung, bevor Sie andere Stylesheets verlinken. Dies soll sicherstellen, dass die wichtigen Überschreibungen als erste Schicht importiert werden.

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

Die Spezifität des Selektors der wichtigen Stilregel innerhalb der Schicht kann niedrig sein, solange sie dem Element entspricht, das Sie überschreiben möchten. Normale Schichten sollten außerhalb dieser Schicht deklariert werden, da geschichtete Stile geringere Priorität haben als nicht geschichtete Stile.

### Unwissenheit über Baum-Nähe

Die Nähe eines Elements zu anderen Elementen, die in einem gegebenen Selektor referenziert werden, hat keinen Einfluss auf die Spezifität.

```css
body h1 {
  color: green;
}

html h1 {
  color: purple;
}
```

Die `<h1>`-Elemente werden lila sein, da, wenn Deklarationen dieselbe Spezifität haben, der zuletzt deklarierte Selektor Vorrang hat.

### Direkt gezielte Elemente vs. geerbte Stile

Stile für ein direkt gezieltes Element haben immer Vorrang vor geerbten Stilen, unabhängig von der Spezifität der geerbten Regel. Angesichts des folgenden CSS und HTML:

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

Das `h1` wird lila sein, da der `h1`-Selektor das Element spezifisch anspricht, während das Grün vom `#parent`-Deklarationen geerbt wird.

## Beispiele

Im folgenden CSS haben wir drei Selektoren, die {{HTMLElement('input')}}-Elemente ansprechen, um eine Farbe festzulegen. Für eine gegebene Eingabe ist das Spezifitätsgewicht der Farbdeklaration mit Vorrang der passende Selektor mit dem größten Gewicht:

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

Der letzte Selektor hat vier _TYPE_-Komponenten. Während er den höchsten ganzzahligen Wert hat, haben, egal wie viele Elemente und Pseudo-Elemente enthalten sind, selbst wenn es 150 wären, die TYPE-Komponenten niemals Vorrang vor _CLASS_-Komponenten. Die Spaltenwerte werden von links nach rechts verglichen, wenn die Spaltenwerte gleich sind.

Hätten wir den ID-Selektor im obigen Beispielcode in einen Attributselektor umgewandelt, hätten die ersten beiden Selektoren dieselbe Spezifität, wie unten gezeigt:

```css
[id="myElement"] input.myClass {
  color: red;
} /* 0-2-1 */
input[type="password"]:required {
  color: blue;
} /* 0-2-1 */
```

Wenn mehrere Deklarationen die gleiche Spezifität haben, wird die letzte in der CSS gefundene Deklaration auf das Element angewendet. Wenn beide Selektoren der gleichen {{HTMLElement('input')}} entsprechen, wird die Farbe blau sein.

## Zusätzliche Hinweise

Einige Dinge, die bei der Spezifität zu beachten sind:

1. Spezifität ist nur relevant, wenn dasselbe Element von mehreren Deklarationen in derselben Kaskadenschicht oder demselben Ursprung angesprochen wird. Spezifität ist nur relevant für Deklarationen derselben Wichtigkeit und demselben Ursprung und [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer). Wenn übereinstimmende Selektoren in verschiedenen Ursprüngen sind, bestimmt die [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction), welche Deklaration Vorrang hat.

2. Wenn zwei Selektoren in derselben Kaskadenschicht und demselben Ursprung dieselbe Spezifität haben, wird die Scoping-Nähe dann berechnet; der Regeln mit der niedrigsten Scoping-Nähe gewinnt. Siehe [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/Reference/At-rules/@scope#how_scope_conflicts_are_resolved) für weitere Details und ein Beispiel.

3. Wenn die Scope-Nähe für beide Selektoren ebenfalls gleich ist, kommt die Quellreihenfolge ins Spiel. Wenn sonst alles gleich ist, gewinnt der letzte Selektor.

4. Laut CSS-Regeln haben [direkt gezielte Elemente](#direkt_gezielte_elemente_vs._geerbte_stile) immer Vorrang vor Regeln, die ein Element von seinem Vorfahren erbt.

5. [Nähe von Elementen](#unwissenheit_über_baum-nähe) im Dokumentbaum hat keinen Einfluss auf die Spezifität.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade) Modul
- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity_2)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax) Modul
- [Einführung in die CSS-Syntax: Deklarationen, Regeln und Anweisungen](/de/docs/Web/CSS/Guides/Syntax/Introduction)
- [CSS-Fehlerbehandlung](/de/docs/Web/CSS/Guides/Syntax/Error_handling)
- [At-rules](/de/docs/Web/CSS/Guides/Syntax/At-rules)
- [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
- Werte: [initial](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value), [computed](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value), [used](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value), und [actual](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value)
- [Wertedefinitionssyntax](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
- [CSS-Verschachtelung](/de/docs/Web/CSS/Guides/Nesting) Modul
- [Specificity Calculator](https://specificity.keegan.st/) von Keegan Street: Eine interaktive Website, um Ihre eigenen CSS-Regeln zu testen und zu verstehen
- [SpeciFISHity](https://specifishity.com/) auf specifishity.com: Ein unterhaltsamer Weg, um über CSS-Spezifität zu lernen
- [_ID-CLASS-TYPE_ Übung](https://estelle.github.io/CSS/selectors/exercises/specificity.html): Ein Quiz zur Spezifität von Estelle Weyl
