---
title: Spezifität
slug: Web/CSS/Guides/Cascade/Specificity
l10n:
  sourceCommit: da60cb61c2cbb7fb35807515095d9efb129eacbc
---

**Spezifität** ist das Gewicht, das Browser im Kaskaden-Algorithmus verwenden, um die [CSS-Deklaration](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#css_syntax_basics) zu bestimmen, die für ein Element am relevantesten ist und somit den anzuwendenden Eigenschaftswert festlegt. Der Algorithmus zur Berechnung der Spezifität ermittelt dieses Gewicht aus einem [CSS-Selektor](/de/docs/Web/CSS/Reference#selectors) und vergleicht die resultierenden Werte, um zu entscheiden, welche Regel aus konkurrierenden CSS-Deklarationen innerhalb derselben Quelle und Ebene auf ein Element angewendet wird.

> [!NOTE]
> Browser berücksichtigen die Spezifität **nachdem** sie [Ursprung und Wichtigkeit der Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction) bestimmt haben. Mit anderen Worten ist die Spezifität bei konkurrierenden Eigenschaftsdeklarationen nur zwischen Selektoren aus dem einen [Kaskadenursprung und Ebene](/de/docs/Web/CSS/Reference/At-rules/@layer) relevant und wird verglichen, der für die Eigenschaft Vorrang hat. [Scoping-Nähe](/de/docs/Web/CSS/Reference/At-rules/@scope#how_scope_conflicts_are_resolved) und die Reihenfolge des Auftretens werden relevant, wenn die Selektorspezifitäten der konkurrierenden Deklarationen in der Kaskadenschicht mit Vorrang gleich sind.

## Wie wird die Spezifität berechnet?

Spezifität ist das Gewicht, das auf eine gegebene CSS-Deklaration angewendet wird. Der Algorithmus zur Berechnung der Spezifität berechnet dieses Gewicht basierend auf der Anzahl der [Selektoren jeder Gewichtskategorie](#selektorgewichtskategorien) im Selektor, der mit dem Element (oder Pseudo-Element) übereinstimmt. Wenn es zwei oder mehr Deklarationen gibt, die unterschiedliche Eigenschaftswerte für dasselbe Element bereitstellen, wird der Deklarationswert im Stilblock mit dem passenden Selektor mit dem größten Gewicht angewendet.

Der Spezifitätswert ist im Wesentlichen ein drei Spalten umfassender Wert aus drei Kategorien oder Gewichten – ID, CLASS und TYPE – entsprechend den drei Typen von Selektoren. Der Wert stellt die Anzahl der Selektorkomponenten in jeder Gewichtskategorie dar und wird als _ID - CLASS - TYPE_ geschrieben. Die drei Spalten werden erstellt, indem die Anzahl der Selektorkomponenten für jede Selektor-Gewichtskategorie in den Selektoren gezählt wird, die mit dem Element übereinstimmen.

### Selektorgewichtskategorien

Die Selektorgewichtskategorien sind hier in der Reihenfolge abnehmender Spezifität aufgeführt:

- ID-Spalte
  - : Beinhaltet nur [ID-Selektoren](/de/docs/Web/CSS/Reference/Selectors/ID_selectors), wie z. B. `#example`. Für jede ID in einem übereinstimmenden Selektor addieren Sie 1-0-0 zum Gewichtswert.
- CLASS-Spalte
  - : Enthält [Klassen-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Class_selectors), wie `.myClass`, Attributselektoren wie `[type="radio"]` und `[lang|="fr"]`, und Pseudoklassen wie `:hover`, `:nth-of-type(3n)` und `:required`. Für jede Klasse, jeden Attributselektor oder jede Pseudoklasse in einem übereinstimmenden Selektor addieren Sie 0-1-0 zum Gewichtswert.
- TYPE-Spalte
  - : Beinhaltet [Typ-Selektoren](/de/docs/Web/CSS/Reference/Selectors/Type_selectors), wie `p`, `h1` und `td`, und Pseudo-Elemente wie `::before`, `::placeholder` und alle anderen Selektoren mit doppelter Doppelpunktschreibweise. Für jeden Typ oder jedes Pseudo-Element in einem übereinstimmenden Selektor addieren Sie 0-0-1 zum Gewichtswert.
- Kein Wert
  - : Der universelle Selektor ({{CSSxRef("Universal_selectors", "*")}}) und die Pseudoklasse {{cssxref(":where()")}} und ihre Parameter werden bei der Berechnung des Gewichts nicht gezählt, sodass ihr Wert 0-0-0 ist, aber sie passen zu Elementen. Diese Selektoren beeinflussen den Spezifizitätswert nicht.

Kombinatoren wie {{CSSxRef("Next-sibling_combinator", "+")}}, {{CSSxRef("Child_combinator", "&gt;")}}, {{CSSxRef("Subsequent-sibling_combinator", "~")}}, [" "](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator) und {{CSSxRef("Column_combinator", "||")}} können einen Selektor spezifischer machen, indem sie auswählen, was ausgewählt wird, aber sie fügen dem Spezifizitätsgewicht keinen Wert hinzu.

Der `&` Verschachtelungskombinator fügt kein Spezifizitätsgewicht hinzu, aber verschachtelte Regeln schon. In Bezug auf Spezifität und Funktionalität ähnelt die Verschachtelung sehr der {{cssxref(":is()")}} Pseudoklasse.

Wie bei der Verschachtelung, fügen die Pseudoklassen {{cssxref(":is()")}}, {{cssxref(":has()")}} und Negation ({{cssxref(":not()")}}) selbst kein Gewicht hinzu. Die Parameter in diesen Selektoren jedoch schon. Das Spezifizitätsgewicht jedes Selektors kommt vom Selektorparameter in der Liste der Selektoren mit der höchsten Spezifität. Ähnlich wie bei verschachtelten Selektoren wird das Spezifizitätsgewicht durch die verschachtelte Selektorkomponente durch den Selektor in der komma-getrennten Liste der verschachtelten Selektoren mit der höchsten Spezifität hinzugefügt.

Die Ausnahmen [`:not()`, `:is()`, `:has()` und CSS-Verschachtelungsausnahmen](#the_is_not_has_and_css_nesting_exceptions) werden unten beschrieben.

#### Passender Selektor

Das Spezifizitätsgewicht stammt vom übereinstimmenden Selektor. Nehmen Sie diesen CSS-Selektor mit drei komma-getrennten Selektoren als Beispiel:

```css
[type="password"],
input:focus,
:root #myApp input:required {
  color: blue;
}
```

Der `[type="password"]` Selektor in der obigen Selektorliste, mit einem Spezifizitätsgewicht von `0-1-0`, wendet die `color: blue` Deklaration auf alle Passwort-Eingabetypen an.

Alle Eingaben, unabhängig vom Typ, wenn sie den Fokus erhalten, stimmen mit dem zweiten Selektor in der Liste `input:focus` überein, mit einem Spezifizitätsgewicht von `0-1-1`; dieses Gewicht setzt sich zusammen aus der `:focus` Pseudoklasse (0-1-0) und dem `input` Typ (0-0-1). Wenn das Passwortfeld den Fokus hat, stimmt es mit `input:focus` überein, und das Spezifizitätsgewicht für die `color: blue` Stil-Deklaration wird `0-1-1`. Wenn das Passwort keinen Fokus hat, bleibt das Spezifizitätsgewicht bei `0-1-0`.

Die Spezifität für eine erforderliche Eingabe, die in einem Element mit dem Attribut `id="myApp"` eingebettet ist, beträgt `1-2-1`, basierend auf einer ID, zwei Pseudoklassen und einem Elementtyp.

Wenn der Passwort-Eingabetyp mit `required` in einem Element mit `id="myApp"` eingebettet ist, beträgt das Spezifizitätsgewicht `1-2-1`, basierend auf einer ID, zwei Pseudoklassen und einem Elementtyp, unabhängig davon, ob es den Fokus hat oder nicht. Warum ist das Spezifizitätsgewicht in diesem Fall `1-2-1` anstatt `0-1-1` oder `0-1-0`? Weil das Spezifizitätsgewicht vom übereinstimmenden Selektor mit dem größten Spezifizitätsgewicht stammt. Das Gewicht wird durch den Vergleich der Werte in den drei Spalten von links nach rechts bestimmt.

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

Sobald die Spezifizitätswerte der relevanten Selektoren bestimmt sind, wird die Anzahl der Selektorkomponenten in jeder Spalte von links nach rechts verglichen.

```css
#myElement {
  color: green; /* 1-0-0  - WINS!! */
}
.bodyClass .sectionClass .parentClass [id="myElement"] {
  color: yellow; /* 0-4-0 */
}
```

Die erste Spalte ist der Wert der _ID_-Komponente, also die Anzahl der IDs in jedem Selektor. Die Zahlen in den _ID_-Spalten der konkurrierenden Selektoren werden verglichen. Der Selektor mit dem größeren Wert in der _ID_-Spalte gewinnt, unabhängig davon, was die Werte in den anderen Spalten sind. Im obigen Beispiel zählt nur der Wert der ersten Spalte, auch wenn der gelbe Selektor insgesamt mehr Komponenten hat.

Wenn die Anzahl in den _ID_-Spalten der konkurrierenden Selektoren gleich ist, wird die nächste Spalte, _CLASS_, verglichen, wie unten gezeigt.

```css
#myElement {
  color: yellow; /* 1-0-0 */
}
#myApp [id="myElement"] {
  color: green; /* 1-1-0  - WINS!! */
}
```

Die _CLASS_-Spalte ist die Anzahl der Klassennamen, Attributselektoren und Pseudoklassen im Selektor. Wenn der _ID_-Spaltenwert gleich ist, gewinnt der Selektor mit dem größeren Wert in der _CLASS_-Spalte, unabhängig vom Wert in der _TYPE_-Spalte. Dies wird im unteren Beispiel gezeigt.

```css
:root input {
  color: green; /* 0-1-1 - WINS because CLASS column is greater */
}
html body main input {
  color: yellow; /* 0-0-4 */
}
```

Wenn die Zahlen in den _CLASS_- und _ID_-Spalten der konkurrierenden Selektoren gleich sind, wird die _TYPE_-Spalte relevant. Die _TYPE_-Spalte ist die Anzahl der Elementtypen und Pseudo-Elemente im Selektor. Wenn die ersten beiden Spalten denselben Wert haben, gewinnt der Selektor mit der größeren Zahl in der _TYPE_-Spalte.

Wenn die konkurrierenden Selektoren in allen drei Spalten dieselben Werte haben, kommt die Nähe-Regel ins Spiel, bei der die zuletzt deklarierte Regel Vorrang hat.

```css
input.myClass {
  color: yellow; /* 0-1-1 */
}
:root input {
  color: green; /* 0-1-1 WINS because it comes later */
}
```

### Die `:is()`, `:not()`, `:has()` und CSS-Verschachtelungsausnahmen

Die Alles-Übereinstimmen-Pseudoklasse {{cssxref(":is()")}}, die relationale Pseudoklasse {{cssxref(":has()")}} und die Negations-Pseudoklasse {{cssxref(":not()")}} werden bei der Berechnung des Spezifizitätsgewichts _nicht_ als Pseudoklassen betrachtet. Sie selbst fügen der Spezifikationsgleichung kein Gewicht hinzu. Die Selektorparameter in den Pseudoklassen-Klammern sind jedoch Teil des Spezifizitätsalgorithmus; das Gewicht der Alles-Übereinstimmen- und der Negations-Pseudoklasse bei der Spezifizitätsberechnung ist das Gewicht des Selektorparameters [Gewicht](#selektorgewichtskategorien).

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

Beachten Sie, dass im obigen CSS-Paar die von den `:is()`, `:has()` und `:not()` Pseudoklassen bereitgestellten Spezifizitätsgewichte der Wert des Selektorparameters und nicht der Pseudoklasse ist.

Alle drei dieser Pseudoklassen akzeptieren komplexe Selektorlisten, eine Liste von komma-getrennten Selektoren, als Parameter. Diese Funktion kann verwendet werden, um die Spezifität eines Selektors zu erhöhen:

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

Beim Erstellen komplexer Selektorlisten mit [CSS-Verschachtelung](/de/docs/Web/CSS/Guides/Nesting) verhält sich dies genau wie die `:is()` Pseudoklasse.

```css
p,
#fakeId {
  span {
    /* 1-0-1 */
  }
}
```

Im obigen Codeblock nimmt der komplexe Selektor `p, #fakeId` die Spezifikationsparameter von `#fakeId` und auch von `span`, sodass dies eine Spezifikationsspezifikation von `1-0-1` sowohl für `p span` als auch `#fakeId span` erstellt. Dies entspricht der Spezifikationsspezifikation des `:is(p, #fakeId) span` Selektors.

In der Regel sollten Sie versuchen, die Spezifikationsstufen auf ein Minimum zu halten, aber wenn Sie die Spezifikationsstufen eines Elements aus einem bestimmten Grund erhöhen müssen, können Ihnen diese drei Pseudoklassen helfen.

```css
a:not(#fakeId#fakeId#fakeID) {
  color: blue; /* 3-0-1 */
}
```

In diesem Beispiel werden alle Links blau sein, es sei denn, sie werden durch eine Link-Deklaration mit 3 oder mehr IDs, einem Farbwert `a`, der das [`!important`-Flag](#the_!important_exception) enthält, oder wenn der Link eine [Inline-Stil](#inline-stile) Farbdeklaration hat. Wenn Sie eine solche Technik verwenden, fügen Sie einen Kommentar hinzu, um zu erklären, warum der Trick notwendig war.

### Inline-Stile

Inline-Stile, die einem Element hinzugefügt werden (z.B. `style="font-weight: bold;"`), überschreiben immer alle normalen Stile in Autoren-Stilblättern und können daher als Spezifizitätsgewicht von `1-0-0-0` angesehen werden.

Der einzige Weg, Inline-Stile zu überschreiben, ist die Verwendung von `!important`.

Viele JavaScript-Frameworks und -Bibliotheken fügen Inline-Stile hinzu. Die Verwendung von `!important` mit einem sehr gezielten Selektor, wie einem Attributselektor unter Verwendung des Inline-Stils, ist eine Möglichkeit, diese Inline-Stile zu überschreiben.

```html
<p style="color: purple">…</p>
```

```css
p[style*="purple"] {
  color: rebeccapurple !important;
}
```

Fügen Sie sicherheitshalber mit jeder Verwendung des Important-Flags einen Kommentar hinzu, damit Code-Bearbeiter verstehen, warum ein CSS-Anti-Muster verwendet wurde.

### Die `!important` Ausnahme

CSS-Deklarationen, die als wichtig markiert sind, überschreiben alle anderen Deklarationen innerhalb derselben Kaskadenschicht und Herkunft. Obwohl `!important`](/de/docs/Web/CSS/Reference/Values/important) technisch gesehen nichts mit Spezifikationen zu tun hat, interagiert es direkt mit Spezifikationen und der Kaskade. Es kehrt die [Kaskaden](/de/docs/Web/CSS/Guides/Cascade/Introduction)-Reihenfolge der Stylesheets um.

Wenn Deklarationen aus derselben Herkunft und Kaskadenschicht in Konflikt stehen und ein Eigenschaftswert das `!important`-Flag gesetzt hat, wird die wichtige Deklaration angewendet, unabhängig von der Spezifikationsstufe. Wenn widersprüchliche Deklarationen aus derselben Herkunft und Kaskadenschicht mit dem `!important`-Flag auf dasselbe Element angewendet werden, wird die Deklaration mit größerer Spezifikationsstufe angewendet.

Die Verwendung von `!important`, um Spezifikationsstufen zu überschreiben, wird als **schlechte Praxis** angesehen und sollte für diesen Zweck vermieden werden. Das Verstehen und effektive Anwenden von Spezifikationen und der Kaskade kann die Notwendigkeit des `!important`-Flags beseitigen.

Anstelle des Einsatzes von `!important`, um fremdes CSS (von externen Bibliotheken, wie Bootstrap oder normalize.css) zu überschreiben, importieren Sie die Drittanbieter-Skripte direkt in [Kaskadenebenen](/de/docs/Web/CSS/Reference/At-rules/@layer). Wenn Sie `!important` in Ihrem CSS verwenden müssen, kommentieren Sie Ihre Verwendung, damit zukünftige Code-Bearbeiter wissen, warum die Deklaration als wichtig markiert wurde und nicht überschrieben werden sollte. Verwenden Sie auf keinen Fall `!important`, wenn Sie Plugins oder Frameworks schreiben, die andere Entwickler einbinden müssen, ohne eingreifen zu können.

### Die `:where()` Ausnahme

Die Spezifikationsanpassungs-Pseudoklasse {{cssxref(":where()")}} hat immer eine Spezifikationsspezifikation von Null, `0-0-0`. Sie ermöglicht die Erstellung von CSS-Selektoren, die sehr spezifisch darin sind, welches Element gezielt ausgewählt wird, ohne dass die Spezifität erhöht wird.

Beim Erstellen von Drittanbieter-CSS, das von Entwicklern verwendet wird, die keinen Zugriff auf Ihre CSS haben, ist es eine gute Praxis, CSS mit der geringst möglichen Spezifität zu erstellen. Beispielsweise, wenn Ihr Thema das folgende CSS enthält:

```css
:where(#defaultTheme) a {
  /* 0-0-1 */
  color: red;
}
```

Dann kann der Entwickler, der das Widget implementiert, die Linkfarbe einfach mit nur Typ-Selektoren überschreiben.

```css
footer a {
  /* 0-0-2 */
  color: blue;
}
```

### Wie `@scope` Blöcke die Spezifikation beeinflussen

Das Einfügen eines Regelsets in einen {{cssxref("@scope")}} Block beeinflusst nicht die Spezifikation seines Selektors, unabhängig von den Selektoren, die innerhalb der [Scope-Root und -Limite](/de/docs/Web/CSS/Reference/At-rules/@scope#syntax) verwendet werden.
Wenn Sie jedoch explizit die {{cssxref(":scope")}} Pseudoklasse hinzufügen, müssen Sie diese bei der Berechnung ihrer Spezifikationsstufe berücksichtigen.
`:scope`, wie alle regulären Pseudoklassen, hat eine Spezifikation von 0-1-0. Zum Beispiel:

```css
@scope (.article-body) {
  /* :scope img has a specificity of 0-1-0 + 0-0-1 = 0-1-1 */
  :scope img {
  }
}
```

Siehe [Spezifische Auswirkungen in `@scope`](/de/docs/Web/CSS/Reference/At-rules/@scope#specificity_in_scope) für mehr Informationen.

## Tipps zur Handhabung von Spezifikationskopfschmerzen

Anstatt `!important` zu verwenden, ziehen Sie die Verwendung von Kaskadenschichten und die Verwendung von niedrigen Spezifikationsstufen in Ihrem CSS in Betracht, damit die Stile einfach überschrieben werden können, indem Sie leicht spezifischere Regeln verwenden. Die Verwendung von semantischem HTML hilft dabei, Anker zu bieten, von denen aus das Styling angewendet werden kann.

### Selektoren spezifisch machen, mit und ohne Erhöhung der Spezifikationsstufe

Indem Sie den Abschnitt des Dokuments angeben, den Sie vor dem Element, das Sie auswählen, gestalten, wird die Regel spezifischer. Je nachdem, wie Sie es hinzufügen, können Sie etwas, viel oder keine Spezifikationsstufe hinzufügen, wie unten gezeigt:

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

Egal in welcher Reihenfolge, die Überschrift wird grün, da diese Regel die spezifischste ist.

#### Verringerung der ID-Spezifikationsstufe

Spezifikationsstufe basiert auf der Form eines Selektors. Die Aufnahme der `id` eines Elements als Attributselektor anstelle eines ID-Selektors ist eine gute Möglichkeit, ein Element spezifischer zu machen, ohne eine zu große Spezifikationsstufe hinzuzufügen. Im vorherigen Beispiel zählt der Selektor `[id="myContent"]` als Attributselektor im Hinblick auf die Bestimmung der Spezifikationsstufe des Selektors, auch wenn er eine ID auswählt.

Sie können die `id` oder einen beliebigen Teil eines Selektors auch als Parameter in der `:where()` Spezifikationsanpassungs-Pseudoklasse einschließen, wenn Sie einen Selektor spezifischer machen müssen, aber keine Spezifikationsstufe überhaupt hinzufügen möchten.

### Erhöhen der Spezifikationsstufe durch Duplizieren des Selektors

Als Sonderfall zur Erhöhung der Spezifikationsstufe können Sie Gewichte aus den _CLASS_ oder _ID_ Spalten duplizieren. Das Duplizieren von id-, Klassen-, Pseudoklassen- oder Attributselektoren innerhalb eines Verbundselektors erhöht die Spezifikationsstufe, wenn Sie sehr spezifische Selektoren überschreiben, über die Sie keine Kontrolle haben.

```css
#myId#myId#myId span {
  /* 3-0-1 */
}
.myClass.myClass.myClass span {
  /* 0-3-1 */
}
```

Verwenden Sie dies sparsam, wenn überhaupt. Wenn Sie Selektorduplizieren verwenden, kommentieren Sie immer Ihr CSS.

Durch die Verwendung von `:is()` und `:not()` (und auch `:has()`) können Sie die Spezifikationsstufe erhöhen, selbst wenn Sie einer übergeordneten Element keine `id` hinzufügen können:

```css
:not(#fakeID#fakeId#fakeID) span {
  /* 3-0-1 */
}
:is(#fakeID#fakeId#fakeID, span) {
  /* 3-0-0 */
}
```

### Vorrang gegenüber Drittanbieter-CSS

Die Nutzung von Kaskadenschichten ist der Standardweg, um zu ermöglichen, dass ein Satz von Stilen über einem anderen Satz von Stilen Vorrang erhält; Kaskadenschichten ermöglichen dies ohne die Verwendung von Spezifikationsstufen! Normale (nicht wichtige) Autorenstile, die in Kaskadenschichten importiert werden, haben eine geringere Priorität als nicht geschichtete Autorenstile.

Wenn Stile aus einem Stylesheet stammen, das Sie nicht bearbeiten oder nicht verstehen können und Sie Stile überschreiben müssen, ist eine Strategie, die Stile, die Sie nicht kontrollieren, in eine Kaskadenschicht zu importieren. Stile in anschließend deklarierten Schichten haben Vorrang, wobei nicht geschichtete Stile Vorrang vor allen geschichteten Stilen aus der gleichen Quelle haben.

Wenn zwei Selektoren aus verschiedenen Schichten dasselbe Element ansprechen, haben Ursprung und Wichtigkeit Vorrang; die Spezifikationsstufe des Selektors im unterlegenen Stylesheet ist irrelevant.

```css
@import "TW.css" layer();
p,
p * {
  font-size: 1rem;
}
```

Im obigen Beispiel wird aller Texte der Absätze, einschließlich des geschachtelten Inhalts, `1rem`, egal wie viele Klassennamen die Absätze haben, die mit dem TW Stylesheet übereinstimmen.

### Vermeidung und Überschreiben von `!important`

Der beste Ansatz ist, `!important` nicht zu verwenden. Die obigen Erklärungen zur Spezifikationsstufe sollten hilfreich sein, um die Verwendung des Flags zu vermeiden und insgesamt zu entfernen, wenn diese gefunden werden.

Um die scheinbare Notwendigkeit für `!important` zu entfernen, können Sie eines der folgenden tun:

- Erhöhen der Spezifikationsstufe des Selektors der ehemals `!important` Deklaration, sodass diese größer ist als andere Deklarationen
- Geben Sie ihnen die gleiche Spezifikationsstufe und setzen Sie sie hinter die Deklaration, die sie überschreiben soll
- Verringern der Spezifikationsstufe des zu überschreibenden Selektors.

Alle diese Methoden werden in den vorherigen Abschnitten behandelt.

Wenn Sie `!important`-Flags aus einem Autoren-Stylesheet nicht entfernen können, ist die einzige Lösung zum Überschreiben der wichtigen Stile die Verwendung von `!important`. Das Erstellen einer [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer) von Überschreibungen der wichtigen Deklarationen ist eine hervorragende Lösung. Zwei Möglichkeiten dafür sind:

#### Methode 1

1. Erstellen Sie ein separates, kurzes Stylesheet, das nur wichtige Deklarationen enthält, die gezielt alle wichtigen Deklarationen überschreiben, die Sie nicht entfernen konnten.
2. Importieren Sie dieses Stylesheet als den ersten Import in Ihrem CSS mit `layer()`, einschließlich der `@import`-Anweisung, bevor Sie auf andere Stylesheets verweisen. Dadurch wird sichergestellt, dass die wichtigen Überschreibungen als erste Schicht importiert werden.

```css
@import "importantOverrides.css" layer();
```

#### Methode 2

1. Erstellen Sie am Anfang Ihrer Stylesheet-Deklarationen eine benannte Kaskadenschicht, so:

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

Die Spezifikationsstufe des Selektors innerhalb der wichtigen Stil in der Schicht kann niedrig sein, solange sie mit dem Element übereinstimmt, das Sie überschreiben möchten. Normale Schichten sollten außerhalb der Schicht deklariert werden, da geschichtete Stile eine geringere Priorität haben als ungeschichtete Stile.

### Baumstrukturbezugsignoranz

Die Nähe eines Elements zu anderen Elementen, die in einem gegebenen Selektor referenziert werden, hat keinen Einfluss auf die Spezifikationsstufe.

```css
body h1 {
  color: green;
}

html h1 {
  color: purple;
}
```

Die `<h1>` Elemente werden lila sein, weil bei Deklarationen mit gleicher Spezifikationsstufe der zuletzt deklarierte Selektor Vorrang hat.

### Direkt angesprochene Elemente vs. geerbte Stile

Stile für ein direkt angesprochenes Element haben immer Vorrang vor geerbten Stilen, unabhängig von der Spezifikationsstufe der geerbten Regel. Angesichts des folgenden CSS und HTML:

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

Das `h1` wird lila, weil der `h1` Selektor das Element spezifisch adressiert, während das Grün vom `#parent` geerbt wird.

## Beispiele

Im folgenden CSS haben wir drei Selektoren, die {{HTMLElement('input')}} Elemente anvisieren, um eine Farbe festzulegen. Für eine bestimmte Eingabe ist das Spezifizitätsgewicht der Farbdeklaration, die Vorrang hat, der passende Selektor mit dem größten Gewicht:

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

Wenn die obigen Selektoren alle dasselbe Eingabefeld ansprechen, wird die Eingabe rot sein, da die erste Deklaration den höchsten Wert in der _ID_-Spalte hat.

Der letzte Selektor hat vier _TYPE_ Komponenten. Während er den höchsten ganzzahligen Wert hat, haben _TYPE_ Komponenten niemals Vorrang vor _CLASS_ Komponenten, egal wie viele Elemente und Pseudo-Elemente enthalten sind, selbst wenn es 150 gäbe. Die Spaltenwerte werden von links nach rechts verglichen, wenn die Spaltenwerte gleich sind.

Hätten wir den ID-Selektor im obigen Beispielcode in einen Attributselektor konvertiert, hätten die ersten beiden Selektoren dieselbe Spezifikationsstufe, wie unten gezeigt:

```css
[id="myElement"] input.myClass {
  color: red;
} /* 0-2-1 */
input[type="password"]:required {
  color: blue;
} /* 0-2-1 */
```

Wenn mehrere Deklarationen dieselbe Spezifikationsstufe haben, wird die letzte Deklaration, die in dem CSS gefunden wird, auf das Element angewendet. Wenn beide Selektoren dasselbe {{HTMLElement('input')}} ansprechen, wird die Farbe blau sein.

## Zusätzliche Hinweise

Ein paar Dinge, die Sie über Spezifikationen beachten sollten:

1. Spezifikationen gelten nur, wenn dasselbe Element von mehreren Deklarationen in derselben Kaskadenschicht oder Herkunft angesprochen wird. Spezifikationen sind nur wichtig für Deklarationen mit derselben Wichtigkeit und derselben Herkunft und [Kaskadenschicht](/de/docs/Web/CSS/Reference/At-rules/@layer). Wenn übereinstimmende Selektoren in verschiedenen Herkünften sind, bestimmt die [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction), welche Deklaration Vorrang hat.

2. Wenn zwei Selektoren in derselben Kaskadenschicht und Herkunft dieselbe Spezifikationsstufe haben, wird dann die Scoping-Nähe berechnet; die Regel mit der niedrigsten Scoping-Nähe gewinnt. Siehe [Wie `@scope` Konflikte gelöst werden](/de/docs/Web/CSS/Reference/At-rules/@scope#how_scope_conflicts_are_resolved) für weitere Details und ein Beispiel.

3. Wenn die Scoping-Nähe für beide Selektoren ebenfalls gleich ist, kommt die Quellreihenfolge ins Spiel. Wenn alles andere gleich ist, gewinnt der letzte Selektor.

4. Laut CSS-Regeln haben [direkt angesprochene Elemente](#direkt_angesprochene_elemente_vs._geerbte_stile) immer Vorrang vor Regeln, die ein Element von seinem Vorfahren erbt.

5. [Nähe von Elementen](#baumstrukturbezugsignoranz) in der Dokumentenstruktur hat keinen Einfluss auf die Spezifikationen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/Guides/Cascade) Modul
- [Lernen: Konflikte handhaben](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity_2)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax) Modul
- [Einführung in CSS-Syntax: Deklarationen, Regelsets und Anweisungen](/de/docs/Web/CSS/Guides/Syntax/Introduction)
- [CSS-Fehlerbehandlung](/de/docs/Web/CSS/Guides/Syntax/Error_handling)
- [At-Rules](/de/docs/Web/CSS/Guides/Syntax/At-rules)
- [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
- Werte: [initial](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value), [computed](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value), [used](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value), und [actual](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value)
- [Wert-Definitionssyntax](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
- [CSS-Verschachtelung](/de/docs/Web/CSS/Guides/Nesting) Modul
- [Spezifizitätsrechner](https://specificity.keegan.st/) von Keegan Street: Eine interaktive Website, um Ihre eigenen CSS-Regeln zu testen und zu verstehen
- [SpeciFISHity](https://specifishity.com/) auf specifishity.com: Eine unterhaltsame Möglichkeit, CSS-Spezifikationen zu lernen
- [_ID-CLASS-TYPE_ Übung](https://estelle.github.io/CSS/selectors/exercises/specificity.html): Ein Spezifizitäts-Quiz von Estelle Weyl
