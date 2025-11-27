---
title: Spezifität
slug: Web/CSS/Guides/Cascade/Specificity
l10n:
  sourceCommit: 0fe625f488d9b548f57bb7f4c714287ba093d96b
---

**Spezifität** ist der Algorithmus, den Browser verwenden, um festzustellen, welche [CSS-Deklaration](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#css_syntax_basics) am relevantesten für ein Element ist und damit den Eigenschaftswert bestimmt, der auf das Element angewendet wird. Der Spezifitätsalgorithmus berechnet das Gewicht eines [CSS-Selectors](/de/docs/Web/CSS/Reference#selectors), um festzustellen, welche Regel aus konkurrierenden CSS-Deklarationen auf ein Element angewendet wird.

> [!NOTE]
> Browser berücksichtigen die Spezifität **nachdem** sie die [Herkunft und Wichtigkeit im Antwortverlauf](/de/docs/Web/CSS/Guides/Cascade/Introduction) bestimmt haben. Mit anderen Worten, für konkurrierende Eigenschaftsdeklarationen ist die Spezifität nur zwischen den Selectors von einer [Origin und Ebene im Antwortverlauf](/de/docs/Web/CSS/Reference/At-rules/@layer) relevant und wird verglichen, die Vorrang für die Eigenschaft hat. [Nähe zur Einbindung](/de/docs/Web/CSS/Reference/At-rules/@scope#how_scope_conflicts_are_resolved) und die Reihenfolge des Erscheinens werden relevant, wenn die Spezifitätswerte der konkurrierenden Deklarationen in der Ebene mit Vorrang gleich sind.

## Wie wird die Spezifität berechnet?

Spezifität ist ein Algorithmus, der das Gewicht berechnet, das auf eine gegebene CSS-Deklaration angewendet wird. Das Gewicht wird durch die Anzahl der [Selectors in jeder Gewichtskategorie](#selector-gewichtskategorien) im zur Darstellung passenden Selector bestimmt. Wenn es zwei oder mehr Deklarationen gibt, die unterschiedliche Eigenschaftswerte für dasselbe Element bereitstellen, wird der Deklarationswert im Stilblock angewendet, der den zur Darstellung passenden Selector mit dem höchsten algorithmischen Gewicht hat.

Der Spezifitätsalgorithmus ist im Wesentlichen ein dreispaltiger Wert aus drei Kategorien oder Gewichten - ID, CLASS und TYPE - entsprechend den drei Arten von Selectors. Der Wert stellt die Anzahl der Selector-Komponenten in jeder Gewichtskategorie dar und wird als _ID - CLASS - TYPE_ geschrieben. Die drei Spalten werden erstellt, indem die Anzahl der Selector-Komponenten für jede Selector-Gewichtskategorie in den Selectors gezählt wird, die auf das Element zutreffen.

### Selector-Gewichtskategorien

Die Selector-Gewichtskategorien sind hier in absteigender Reihenfolge der Spezifität aufgeführt:

- ID-Spalte
  - : Beinhaltet nur [ID-Selectors](/de/docs/Web/CSS/Reference/Selectors/ID_selectors), wie `#example`. Für jede ID in einem passenden Selector, fügen Sie 1-0-0 zum Gewichtswert hinzu.
- CLASS-Spalte
  - : Beinhaltet [Klassenselectors](/de/docs/Web/CSS/Reference/Selectors/Class_selectors), wie `.myClass`, Attributselectors wie `[type="radio"]` und `[lang|="fr"]` sowie Pseudoklassen, wie `:hover`, `:nth-of-type(3n)` und `:required`. Für jede Klasse, Attributselector oder Pseudoklasse in einem passenden Selector fügen Sie 0-1-0 zum Gewichtswert hinzu.
- TYPE-Spalte
  - : Beinhaltet [Typenselectors](/de/docs/Web/CSS/Reference/Selectors/Type_selectors), wie `p`, `h1` und `td`, sowie Pseudo-Elemente wie `::before`, `::placeholder` und alle anderen Selectors mit Doppelpunktsyntax. Für jeden Typ oder Pseudo-Element in einem passenden Selector fügen Sie 0-0-1 zum Gewichtswert hinzu.
- Kein Wert
  - : Der universelle Selector ({{CSSxRef("Universal_selectors", "*")}}) und die Pseudo-Klasse {{CSSxRef(":where", ":where()")}} und ihre Parameter werden nicht bei der Berechnung des Gewichts gezählt, so dass ihr Wert 0-0-0 ist, aber sie treffen dennoch auf Elemente zu. Diese Selectors beeinflussen nicht den Spezifitätswert.

Kombinatoren wie {{CSSxRef("Next-sibling_combinator", "+")}}, {{CSSxRef("Child_combinator", "&gt;")}}, {{CSSxRef("Subsequent-sibling_combinator", "~")}}, [" "](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator) und {{CSSxRef("Column_combinator", "||")}} können einen Selector spezifischer in Bezug auf das, was ausgewählt wird, machen, aber sie fügen dem Spezifitätsgewicht keinen Wert hinzu.

Der `&`-Verschachtelungskombinator erhöht nicht das Spezifitätsgewicht, aber verschachtelte Regeln schon. In Bezug auf Spezifität und Funktionalität ist Verschachtelung sehr ähnlich zur {{CSSxRef(":is", ":is()")}}-Pseudoklasse.

Wie die Verschachtelung fügen die {{CSSxRef(":is", ":is()")}}, {{CSSxRef(":has", ":has()")}} und Negationspseudoklassen ({{CSSxRef(":not", ":not()")}}) selbst kein Gewicht hinzu. Die Parameter in diesen Selectors hingegen schon. Das Spezifitätsgewicht jedes einzelnen wird durch den Selectorparameter in der Liste der Selectors mit der höchsten Spezifität bestimmt. Ähnlich ist es mit verschachtelten Selectors, das Spezifitätsgewicht, das durch die verschachtelte Selector-Komponente hinzugefügt wird, ist der Selector in der kommaseparierten Liste von verschachtelten Selectors mit der höchsten Spezifität.

Die [`:not()`, `:is()`, `:has()` und CSS-Verschachtelung](/de/docs/Web/CSS/Reference/At-rules/@scope#how_scope_conflicts_are_resolved), die untenstehenden Ausnahmen sind weiter unten besprochen.

#### Passender Selector

Das Spezifitätsgewicht stammt aus dem passenden Selector. Nehmen Sie diesen CSS-Selector mit drei kommagetrennten Selectors als Beispiel:

```css
[type="password"],
input:focus,
:root #myApp input:required {
  color: blue;
}
```

Der `[type="password"]` Selector in der obigen Selector-Liste, mit einem Spezifitätsgewicht von `0-1-0`, wendet die Deklaration `color: blue` auf alle Passwort-Eingabetypen an.

Alle Eingaben, unabhängig vom Typ, die den Fokus erhalten, entsprechen dem zweiten Selector in der Liste, `input:focus`, mit einem Spezifitätsgewicht von `0-1-1`; dieses Gewicht setzt sich aus der `:focus`-Pseudoklasse (0-1-0) und dem `input`-Typ (0-0-1) zusammen. Wenn das Passworteingabefeld den Fokus hat, entspricht es `input:focus`, und das Spezifitätsgewicht für die `color: blue`-Stildeklaration wird `0-1-1` betragen. Wenn das Passwort keinen Fokus hat, bleibt das Spezifitätsgewicht bei `0-1-0`.

Die Spezifität für eine erforderliche Eingabe, die in einem Element mit dem Attribut `id="myApp"` verschachtelt ist, beträgt `1-2-1`, basierend auf einer ID, zwei Pseudoklassen und einem Elementtyp.

Wenn der Passwort-Eingabetyp mit `required` in einem Element verschachtelt ist, das `id="myApp"` gesetzt hat, beträgt das Spezifitätsgewicht `1-2-1`, basierend auf einer ID, zwei Pseudoklassen und einem Elementtyp, unabhängig davon, ob es den Fokus hat oder nicht. Warum ist das Spezifitätsgewicht in diesem Fall `1-2-1` statt `0-1-1` oder `0-1-0`? Weil das Spezifitätsgewicht vom passenden Selector mit dem größten Spezifitätsgewicht stammt. Das Gewicht wird bestimmt, indem die Werte in den drei Spalten von links nach rechts verglichen werden.

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

### Vergleich in drei Spalten

Sobald die Spezifitätswerte der relevanten Selectors bestimmt sind, werden die Anzahl der Selector-Komponenten in jeder Spalte von links nach rechts verglichen.

```css
#myElement {
  color: green; /* 1-0-0  - WINS!! */
}
.bodyClass .sectionClass .parentClass [id="myElement"] {
  color: yellow; /* 0-4-0 */
}
```

Die erste Spalte ist der Wert der _ID_-Komponente, die die Anzahl der IDs in jedem Selector darstellt. Die Zahlen in den _ID_-Spalten der konkurrierenden Selectors werden verglichen. Der Selector mit dem größeren Wert in der _ID_-Spalte gewinnt, unabhängig davon, wie die Werte in den anderen Spalten aussehen. Im obigen Beispiel spielt es keine Rolle, dass der gelbe Selector insgesamt mehr Komponenten hat, nur der Wert der ersten Spalte ist wichtig.

Wenn die Anzahl in den _ID_-Spalten der konkurrierenden Selectors gleich ist, wird die nächste Spalte, _CLASS_, wie unten gezeigt, verglichen.

```css
#myElement {
  color: yellow; /* 1-0-0 */
}
#myApp [id="myElement"] {
  color: green; /* 1-1-0  - WINS!! */
}
```

Die _CLASS_-Spalte ist die Anzahl der Klassennamen, Attributselectors und Pseudoklassen im Selector. Wenn der _ID_-Spaltenwert gleich ist, gewinnt der Selector mit dem höheren Wert in der _CLASS_-Spalte, egal welchen Wert die _TYPE_-Spalte hat. Dies wird im folgenden Beispiel gezeigt.

```css
:root input {
  color: green; /* 0-1-1 - WINS because CLASS column is greater */
}
html body main input {
  color: yellow; /* 0-0-4 */
}
```

Wenn die Zahlen in den _CLASS_- und _ID_-Spalten der konkurrierenden Selectors gleich sind, wird die _TYPE_-Spalte relevant. Die _TYPE_-Spalte ist die Anzahl der Elementtypen und Pseudo-Elemente im Selector. Wenn die ersten zwei Spalten denselben Wert haben, gewinnt der Selector mit der größeren Zahl in der _TYPE_-Spalte.

Wenn die konkurrierenden Selectors in allen drei Spalten denselben Wert haben, kommt die Nähe zum Tragen, wobei der zuletzt deklarierte Stil den Vorrang erhält.

```css
input.myClass {
  color: yellow; /* 0-1-1 */
}
:root input {
  color: green; /* 0-1-1 WINS because it comes later */
}
```

### Die `:is()`, `:not()`, `:has()` und CSS-Verschachtelungsausnahmen

Die Matches-Any-Pseudoklasse {{CSSxRef(":is", ":is()")}}, die relationale Pseudoklasse {{CSSxRef(":has", ":has()")}}, und die Negationspseudoklasse {{CSSxRef(":not", ":not()")}} werden **nicht** als Pseudoklassen in der Spezifitätsgewichtung berücksichtigt. Sie selbst fügen dem Spezifitätsgleich nichts hinzu. Allerdings sind die Selektorparameter innerhalb der Pseudoklassenklammern Teil des Spezifitätsalgorithmus; das Gewicht der Matches-Any- und Negationspseudoklasse in der Spezifitätswertberechnung ist das Gewicht des Parameters [Gewicht](#selector-gewichtskategorien).

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

Beachten Sie, dass in der obigen CSS-Paarung das Spezifitätsgewicht, das von den `:is()`, `:has()` und `:not()` Pseudoklassen bereitgestellt wird, der Wert des Selectorparameters ist, nicht der Pseudoklasse selbst.

Alle drei dieser Pseudoklassen akzeptieren komplexe Selektorlisten, eine Liste von Kommaseparierten Selectors, als Parameter. Diese Funktion kann verwendet werden, um die Spezifität eines Selectors zu erhöhen:

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

Im obigen CSS-Codeblock haben wir den `#fakeId` in die Selectors aufgenommen. Dieser `#fakeId` fügt `1-0-0` zum Spezifitätsgewicht jedes Absatzes hinzu.

Wenn Sie mit [CSS-Verschachtelung](/de/docs/Web/CSS/Guides/Nesting) komplexe Selektorlisten erstellen, verhält sich dies genauso wie die `:is()` Pseudoklasse.

```css
p,
#fakeId {
  span {
    /* 1-0-1 */
  }
}
```

Im obigen Codeblock wird die komplexe Selector `p, #fakeId` des Spezifitätswert von `#fakeId` und auch vom `span` berücksichtigt, sodass dies eine Spezifität von `1-0-1` für sowohl `p span` als auch `#fakeId span` erstellt. Dies entspricht der Spezifität des `:is(p, #fakeId) span` Selectors.

Im Allgemeinen möchten Sie die Spezifität möglichst gering halten, aber wenn Sie die Spezifität eines Elements aus einem bestimmten Grund erhöhen müssen, können Ihnen diese drei Pseudoklassen helfen.

```css
a:not(#fakeId#fakeId#fakeID) {
  color: blue; /* 3-0-1 */
}
```

In diesem Beispiel werden alle Links blau sein, es sei denn, sie werden von einer Linkdeklaration mit 3 oder mehr IDs überschrieben, einem Farbwert, der ein `!important`-Flag enthält, oder wenn der Link eine [Inline-Stil](#inline-stile)-Farbdeklaration hat. Wenn Sie eine solche Technik verwenden, fügen Sie einen Kommentar hinzu, um zu erklären, warum der Hack benötigt wurde.

### Inline-Stile

Inline-Stile, die einem Element hinzugefügt werden (z.B. `style="font-weight: bold;"`), überschreiben immer alle normalen Styles in Autoren-Stylesheets, und können daher als mit der höchsten Spezifität angesehen werden. Denken Sie an Inline-Stile als mit einem Spezifitätsgewicht von `1-0-0-0`.

Die einzige Möglichkeit, Inline-Stile zu überschreiben, ist die Verwendung von `!important`.

Viele JavaScript-Frameworks und -Bibliotheken fügen Inline-Stile hinzu. Die Verwendung von `!important` mit einem sehr gezielten Selector, wie einem Attributselector mit dem Inline-Stil, ist eine Möglichkeit, diese Inline-Stile zu überschreiben.

```html
<p style="color: purple">…</p>
```

```css
p[style*="purple"] {
  color: rebeccapurple !important;
}
```

Stellen Sie sicher, dass Sie einen Kommentar bei jedem Einschluss des Important-Flags hinzufügen, damit Code-Pfleger verstehen, warum ein CSS-Anti-Pattern verwendet wurde.

### Die `!important`-Ausnahme

CSS-Deklarationen, die als wichtig markiert sind, überschreiben alle anderen Deklarationen innerhalb derselben Antwortverlaufssebene und Herkunft. Auch wenn technisch gesehen [`!important`](/de/docs/Web/CSS/Reference/Values/important) nichts mit Spezifität zu tun hat, interagiert es direkt mit Spezifität und dem Antwortverlauf. Es dreht die [Antwortverlauf](/de/docs/Web/CSS/Guides/Cascade/Introduction) Reihenfolge der Stylesheets um.

Wenn Deklarationen aus derselben Herkunft und Antwortverlaufs-Ebene in Konflikt stehen und ein Eigenschaftswert das `!important`-Flag gesetzt hat, wird die wichtige Deklaration unabhängig von der Spezifität angewendet. Wenn konkurrierende Deklarationen aus derselben Herkunft und Antwortverlaufs-Ebene mit dem `!important`-Flag auf dasselbe Element angewendet werden, wird die Deklaration mit der höheren Spezifität angewendet.

`!important` zu verwenden, um die Spezifität zu überschreiben, wird als **schlechte Praxis** angesehen und sollte für diesen Zweck vermieden werden. Das Verständnis und der effektive Einsatz von Spezifität und Antwortverlauf können jeglichen Bedarf für das `!important`-Flag beseitigen.

Statt `!important` zu verwenden, um fremde CSS (aus externen Bibliotheken wie Bootstrap oder normalize.css) zu überschreiben, importieren Sie die Drittanbieter-Skripte direkt in [Antwortverlauf-Ebenen](/de/docs/Web/CSS/Reference/At-rules/@layer). Wenn Sie `!important` in Ihrem CSS verwenden müssen, kommentieren Sie Ihre Verwendung, damit zukünftige Code-Pflegekräfte wissen, warum die Deklaration als wichtig markiert wurde und wissen, dass sie nicht überschrieben werden soll. Verwenden Sie definitiv kein `!important`, wenn Sie Plugins oder Frameworks schreiben, die andere Entwickler einbinden müssen, ohne die Kontrolle zu haben.

### Die `:where()`-Ausnahme

Die Spezifikationsanpassungs-Pseudoklasse {{CSSxRef(":where", ":where()")}} hat immer ihre Spezifität auf null gesetzt, `0-0-0`. Dadurch können CSS-Selectors sehr spezifisch in Bezug auf das anvisierte Element sein, ohne dass die Spezifität erhöht wird.

Bei der Erstellung von Drittanbieter-CSS, das von Entwicklern verwendet wird, die keinen Zugriff auf Ihr CSS haben, wird als gute Praxis angesehen, CSS mit der geringstmöglichen Spezifität zu erstellen. Beispielsweise, wenn Ihr Thema die folgende CSS enthält:

```css
:where(#defaultTheme) a {
  /* 0-0-1 */
  color: red;
}
```

Dann kann der Entwickler, der das Widget implementiert, leicht die Linkfarbe überschreiben, indem er nur Typenselectors verwendet.

```css
footer a {
  /* 0-0-2 */
  color: blue;
}
```

### Wie `@scope`-Blöcke die Spezifität beeinflussen

Das Einschließen eines Regelsets in einen {{cssxref("@scope")}}-Block hat keinerlei Einfluss auf die Spezifität seines Selectors, unabhängig von den Selectors, die innerhalb des [Ursprungs und der Begrenzung des Scopes](/de/docs/Web/CSS/Reference/At-rules/@scope#syntax) verwendet werden.
Wenn Sie sich jedoch entscheiden, die {{cssxref(":scope")}}-Pseudoklasse explizit hinzuzufügen, müssen Sie diese bei der Berechnung ihrer Spezifität berücksichtigen.
`:scope`, wie alle regulären Pseudoklassen, hat eine Spezifität von 0-1-0. Beispiel:

```css
@scope (.article-body) {
  /* :scope img has a specificity of 0-1-0 + 0-0-1 = 0-1-1 */
  :scope img {
  }
}
```

Weitere Informationen finden Sie unter [Spezifität in `@scope`](/de/docs/Web/CSS/Reference/At-rules/@scope#specificity_in_scope).

## Tipps zum Umgang mit Spezifitätsproblemen

Anstatt `!important` zu verwenden, sollten Sie die Antwortverlauf-Ebenen nutzen und durchgehend Spezifikationen mit niedrigem Gewicht in Ihrem CSS verwenden, sodass Styles leicht mit etwas spezifischeren Regeln überschrieben werden können. Die Verwendung semantischen HTMLs hilft, Ankerpunkte zu bieten, von denen aus Styling angewendet werden kann.

### Spezifische Selektoren mit und ohne Erhöhung der Spezifität

Indem Sie den Abschnitt des Dokuments angeben, den Sie stylen, bevor Sie das Element auswählen, wird die Regel spezifischer. Abhängig davon, wie Sie es hinzufügen, können Sie etwas, viel oder keine Spezifität hinzufügen, wie unten gezeigt:

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

Die Spezifität basiert auf der Form eines Selectors. Es ist eine gute Möglichkeit, ein Element spezifischer zu machen, ohne eine Überfülle an Spezifität hinzuzufügen, indem man die `id` eines Elements als Attributselector anstelle eines id-Selectors einsetzt. Im vorherigen Beispiel zählt der Selector `[id="myContent"]` als Attributselector für die Zwecke der Feststellung der Spezifität des Selectors, obwohl er eine ID auswählt.

Sie können die `id` oder irgendeinen Teil eines Selectors auch als Parameter in der Spezifikationsanpassungs-Pseudoklasse `:where()` einbinden, wenn Sie einen Selector spezifischer machen müssen, aber keine Spezifität überhaupt hinzufügen wollen.

### Erhöhung der Spezifität durch Duplizieren von Selectors

Als Sonderfall zur Erhöhung der Spezifität können Sie Gewichtungen aus der _CLASS_- oder _ID_-Spalte duplizieren. Das Duplizieren von id-, Klassen-, Pseudoklassen- oder Attributselectors innerhalb eines zusammengesetzten Selectors erhöht die Spezifität beim Überschreiben sehr spezifischer Selectors, über die Sie keine Kontrolle haben.

```css
#myId#myId#myId span {
  /* 3-0-1 */
}
.myClass.myClass.myClass span {
  /* 0-3-1 */
}
```

Verwenden Sie dies sparsam, wenn überhaupt. Wenn Sie Selector-Duplizierung verwenden, kommentieren Sie immer Ihr CSS.

Durch die Verwendung von `:is()` und `:not()` (und auch `:has()`) können Sie die Spezifität erhöhen, selbst wenn Sie kein `id` zu einem Elternelement hinzufügen können:

```css
:not(#fakeID#fakeId#fakeID) span {
  /* 3-0-1 */
}
:is(#fakeID#fakeId#fakeID, span) {
  /* 3-0-0 */
}
```

### Vorrang gegenüber Drittanbieter-CSS

Der Einsatz von Antwortverlauf-Ebenen ist der Standardweg, um einem Satz von Styles Vorrang vor einem anderen Satz von Styles zu geben; Antwortverlauf-Ebenen ermöglichen dies ohne die Verwendung von Spezifität! Normale (nicht wichtige) Autoren-Styles, die in Antwortverlauf-Ebenen importiert wurden, haben geringeren Vorrang als nicht geschichtete Autoren-Styles.

Wenn Styles von einem Stylesheet stammen, das Sie nicht bearbeiten oder verstehen können und Sie Styles überschreiben müssen, ist eine Strategie, die Styles, die Sie nicht kontrollieren, in eine Antwortverlauf-Ebene zu importieren. Styles in nachfolgend deklarierten Ebenen haben Vorrang, wobei nicht geschichtete Styles Vorrang vor allen geschichteten Styles aus derselben Herkunft haben.

Wenn zwei Selectors aus unterschiedlichen Ebenen auf dasselbe Element zutreffen, haben Herkunft und Wichtigkeit Vorrang; die Spezifität des Selectors im verlierenden Stylesheet ist irrelevant.

```css
@import "TW.css" layer();
p,
p * {
  font-size: 1rem;
}
```

Im obigen Beispiel wird der gesamte Absatztext, einschließlich des verschachtelten Inhalts, `1rem` groß sein, egal wie viele Klassennamen die Absätze haben, die mit dem TW-Stylesheet übereinstimmen.

### Vermeidung und Überschreibung von `!important`

Der beste Ansatz ist, `!important` nicht zu verwenden. Die obenstehenden Erklärungen zur Spezifität sollten hilfreich sein, um die Verwendung des Flags zu vermeiden und es vollständig zu entfernen, wenn es auftritt.

Um die wahrgenommene Notwendigkeit von `!important` zu beseitigen, können Sie eines der folgenden Dinge tun:

- Erhöhen Sie die Spezifität des Selectors der ehemals `!important`-Deklaration, sodass sie größer ist als andere Deklarationen
- Geben Sie ihm die gleiche Spezifität und platzieren Sie ihn nach der Deklaration, die er überschreiben soll
- Reduzieren Sie die Spezifität des Selectors, den Sie überschreiben möchten.

Alle diese Methoden sind in den vorausgehenden Abschnitten behandelt.

Wenn Sie nicht in der Lage sind, `!important`-Flags aus einem Autoren-Stylesheet zu entfernen, ist die einzige Lösung zum Überschreiben der wichtigen Styles die Verwendung von `!important`. Die Erstellung einer [Antwortverlauf-Ebene](/de/docs/Web/CSS/Reference/At-rules/@layer) mit wichtigen Deklarationen zum Überschreiben ist eine ausgezeichnete Lösung. Zwei Möglichkeiten dafür sind:

#### Methode 1

1. Erstellen Sie ein separates, kurzes Stylesheet, das nur wichtige Deklarationen enthält, die speziell dazu dient, wichtige Deklarationen zu überschreiben, die Sie nicht entfernen konnten.
2. Importieren Sie dieses Stylesheet als ersten Import in Ihr CSS unter Verwendung von `layer()`, einschließlich der `@import`-Anweisung, bevor Sie andere Stylesheets verknüpfen. Dies stellt sicher, dass der wichtige Überschreibung als erste Ebene importiert wird.

```css
@import "importantOverrides.css" layer();
```

#### Methode 2

1. Erstellen Sie direkt am Anfang Ihrer Stylesheet-Deklarationen eine benannte Antwortverlauf-Ebene, folgendermaßen:

   ```css
   @layer importantOverrides;
   ```

2. Jedes Mal, wenn Sie eine wichtige Deklaration überschreiben müssen, deklarieren Sie sie innerhalb der benannten Ebene. Deklarieren Sie innerhalb der Ebene nur wichtige Regeln.

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

Die Spezifität des Selectors des wichtigen Stils innerhalb der Ebene kann niedrig sein, solange sie dem Element, das Sie überschreiben möchten, entspricht. Normale Ebenen sollten außerhalb der Ebene deklariert werden, da geschichtete Styles geringeren Vorrang haben als nicht geschichtete Styles.

### Nichtbeachtung der Baum-Nähe

Die Nähe eines Elements zu anderen Elementen, die in einem gegebenen Selector referenziert werden, hat keine Auswirkung auf die Spezifität.

```css
body h1 {
  color: green;
}

html h1 {
  color: purple;
}
```

Die `<h1>`-Elemente werden violett sein, denn wenn Deklarationen dieselbe Spezifität haben, hat der zuletzt deklarierte Selector Vorrang.

### Direkt angezielte Elemente vs. geerbte Styles

Styles für ein direkt angezieltes Element werden immer Vorrang haben vor geerbten Styles, unabhängig von der Spezifität der geerbten Regel. Angesichts des folgenden CSS und HTML:

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

Das `h1` wird violett sein, weil der `h1`-Selector das Element spezifisch anspricht, während das Grün vom `#parent` Deklarationen geerbt wird.

## Beispiele

In dem folgenden CSS haben wir drei Selectors, die {{HTMLElement('input')}}-Elemente ansprechen sollen, um eine Farbe zu setzen. Für eine gegebene Eingabe ist das Spezifitätsgewicht der Deklaration der Farbe, die Vorrang hat, der passende Selector mit dem größten Gewicht:

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

Wenn die obigen Selectors alle auf dieselbe Eingabe zielen, wird die Eingabe rot, da die erste Deklaration den höchsten Wert in der _ID_-Spalte hat.

Der letzte Selector hat vier _TYPE_-Komponenten. Auch wenn er den höchsten Integer-Wert hat, haben _TYPE_-Komponenten keine Vorrangstellung über _CLASS_-Komponenten, egal wie viele Elemente und Pseudo-Elemente enthalten sind, selbst wenn es 150 TYPE-Komponenten gäbe. Die Spaltenwerte werden von links nach rechts verglichen, wenn die Spaltenwerte gleich sind.

Hätten wir den id-Selector im obigen Beispielcode in einen Attributselector umgewandelt, hätten die ersten beiden Selectors dieselbe Spezifität, wie unten gezeigt:

```css
[id="myElement"] input.myClass {
  color: red;
} /* 0-2-1 */
input[type="password"]:required {
  color: blue;
} /* 0-2-1 */
```

Wenn mehrere Deklarationen gleiche Spezifität haben, wird die letzte in der CSS gefundene Deklaration auf das Element angewendet. Wenn beide Selectors das gleiche {{HTMLElement('input')}} ansprechen, wird die Farbe blau sein.

## Zusätzliche Hinweise

Einige Dinge, die Sie über Spezifität wissen sollten:

1. Spezifität ist nur dann relevant, wenn dasselbe Element von mehreren Deklarationen in derselben Antwortverlaufs-Ebene oder Origin angesprochen wird. Spezifität ist nur wichtig für Deklarationen mit derselben Wichtigkeit und derselben Origin und [Antwortverlauf-Ebene](/de/docs/Web/CSS/Reference/At-rules/@layer). Wenn passende Selectors in verschiedenen Originen sind, bestimmt der [Antwortverlauf](/de/docs/Web/CSS/Guides/Cascade/Introduction), welche Deklaration Vorrang hat.

2. Wenn zwei Selectors in derselben Antwortverlaufs-Ebene und Origin die gleiche Spezifität haben, wird die Nähe zur Einbindung dann berechnet; das Regelset mit der geringsten Einbindungsnähe gewinnt. Weitere Details und ein Beispiel finden Sie unter [Wie `@scope`-Konflikte gelöst werden](/de/docs/Web/CSS/Reference/At-rules/@scope#how_scope_conflicts_are_resolved).

3. Wenn die Nähe zur Einbindung für beide Selectors die gleiche ist, spielt die Quellreihenfolge eine Rolle. Wenn alles andere gleich ist, gewinnt der letzte Selector.

4. Laut CSS-Regeln werden [direkt angezielte Elemente](#direkt_angezielte_elemente_vs._geerbte_styles) immer Vorrang haben vor Regeln, die ein Element von seinem Vorfahren erbt.

5. Die [Nähe von Elementen](#nichtbeachtung_der_baum-nähe) im Dokumentbaum hat keinen Einfluss auf die Spezifität.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [CSS-Cascade und Vererbung](/de/docs/Web/CSS/Guides/Cascade) Modul
- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity_2)
- [Lernen: Antwortverlauf-Ebenen](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Syntax](/de/docs/Web/CSS/Guides/Syntax) Modul
- [Einführung in das CSS-Syntax: Deklarationen, Regelsets und Anweisungen](/de/docs/Web/CSS/Guides/Syntax/Introduction)
- [Fehlerbehandlung in CSS](/de/docs/Web/CSS/Guides/Syntax/Error_handling)
- [At-Rules](/de/docs/Web/CSS/Guides/Syntax/At-rules)
- [Vererbung](/de/docs/Web/CSS/Guides/Cascade/Inheritance)
- Werte: [initial](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value), [computed](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value), [used](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#used_value) und [actual](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#actual_value)
- [Wertedefinitionssyntax](/de/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
- [CSS-Verschachtelung](/de/docs/Web/CSS/Guides/Nesting) Modul
- [Spezifitätsrechner](https://specificity.keegan.st/) von Keegan Street: Eine interaktive Website, um Ihre eigenen CSS-Regeln zu testen und zu verstehen
- [SpeciFISHity](https://specifishity.com/) auf specifishity.com: Eine unterhaltsame Möglichkeit, über CSS-Spezifität zu lernen
- [_ID-CLASS-TYPE_-Übung](https://estelle.github.io/CSS/selectors/exercises/specificity.html): Ein Spezifitätsquiz von Estelle Weyl
