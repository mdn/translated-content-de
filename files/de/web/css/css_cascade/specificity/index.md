---
title: Spezifität
slug: Web/CSS/CSS_cascade/Specificity
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**Spezifität** ist der Algorithmus, den Browser verwenden, um festzustellen, welche [CSS-Deklaration](/de/docs/Learn_web_development/Core/Styling_basics/What_is_CSS#css_syntax_basics) am relevantesten für ein Element ist und damit den anzuwendenden Eigenschaftswert bestimmt. Der Spezifitätsalgorithmus berechnet das Gewicht eines [CSS-Selectors](/de/docs/Web/CSS/Reference#selectors), um festzustellen, welche Regel aus konkurrierenden CSS-Deklarationen auf ein Element angewendet wird.

> [!NOTE]
> Browser berücksichtigen die Spezifität **nachdem** sie [Ursprung und Wichtigkeit der Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) bestimmt haben. Mit anderen Worten: Bei konkurrierenden Eigenschaftsdeklarationen ist die Spezifität relevant und wird nur zwischen Selektoren aus einem [Kaskadenursprung und einer Ebene](/de/docs/Web/CSS/@layer) verglichen, die für die Eigenschaft Vorrang hat. [Nähe des Scopings](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) und die Reihenfolge des Erscheinens werden relevant, wenn die Selektorspezifitäten der konkurrierenden Deklarationen in der Kaskadenschicht mit Vorrang gleich sind.

## Wie wird die Spezifität berechnet?

Spezifität ist ein Algorithmus, der das Gewicht berechnet, das auf eine bestimmte CSS-Deklaration angewendet wird. Das Gewicht wird durch die Anzahl der [Selektoren jeder Gewichtskategorie](#selektor-gewichtskategorien) im Selektor bestimmt, die mit dem Element (oder Pseudo-Element) übereinstimmt. Wenn es zwei oder mehr Deklarationen mit unterschiedlichen Eigenschaftswerten für dasselbe Element gibt, wird der Deklarationswert im Stilblock mit dem übereinstimmenden Selektor mit dem höchsten algorithmischen Gewicht angewendet.

Der Spezifitätsalgorithmus ist grundsätzlich ein drei-spaltiger Wert aus drei Kategorien oder Gewichten - ID, CLASS und TYPE - entsprechend den drei Arten von Selektoren. Der Wert stellt die Anzahl der Selektorkomponenten in jeder Gewichtskategorie dar und wird als _ID - CLASS - TYPE_ geschrieben. Die drei Spalten werden erstellt, indem die Anzahl der Selektorkomponenten für jede Selektorgewichtskategorie in den Selektoren, die mit dem Element übereinstimmen, gezählt wird.

### Selektor-Gewichtskategorien

Die Selektor-Gewichtskategorien sind hier in der Reihenfolge abnehmender Spezifität aufgelistet:

- ID-Spalte
  - : Enthält nur [ID-Selektoren](/de/docs/Web/CSS/ID_selectors), wie `#example`. Für jede ID in einem übereinstimmenden Selektor fügen Sie dem Gewichtswert 1-0-0 hinzu.
- CLASS-Spalte
  - : Beinhaltet [Klassen-Selektoren](/de/docs/Web/CSS/Class_selectors), wie `.myClass`, Attributselektoren wie `[type="radio"]` und `[lang|="fr"]`, und Pseudo-Klassen, wie `:hover`, `:nth-of-type(3n)`, und `:required`. Für jede Klasse, jeden Attributselektor oder jede Pseudo-Klasse in einem übereinstimmenden Selektor fügen Sie dem Gewichtswert 0-1-0 hinzu.
- TYPE-Spalte
  - : Beinhaltet [Typ-Selektoren](/de/docs/Web/CSS/Type_selectors), wie `p`, `h1`, und `td`, und Pseudo-Elemente wie `::before`, `::placeholder`, und alle anderen Selektoren mit Doppelpunktnotierung. Für jeden Typ oder Pseudo-Element in einem übereinstimmenden Selektor fügen Sie dem Gewichtswert 0-0-1 hinzu.
- Kein Wert
  - : Der Universalselektor ({{CSSxRef("Universal_selectors", "*")}}) und die Pseudo-Klasse {{CSSxRef(":where", ":where()")}} und ihre Parameter werden nicht bei der Berechnung des Gewichts gezählt, sodass ihr Wert 0-0-0 ist, aber sie passen zu Elementen. Diese Selektoren beeinträchtigen nicht den Wert der Spezifitätsgewichtung.

Kombinatoren, wie {{CSSxRef("Next-sibling_combinator", "+")}}, {{CSSxRef("Child_combinator", "&gt;")}}, {{CSSxRef("Subsequent-sibling_combinator", "~")}}, [" "](/de/docs/Web/CSS/Descendant_combinator), und {{CSSxRef("Column_combinator", "||")}}, können zwar einen Selektor spezifischer darin machen, was ausgewählt wird, aber sie fügen dem Spezifitätswert keinen Wert hinzu.

Der Verschachtelungs-Kombinator `&` fügt keine Spezifitätsgewichtung hinzu, aber verschachtelte Regeln schon. In Bezug auf Spezifität und Funktionalität ist Verschachtelung sehr ähnlich zur {{CSSxRef(":is", ":is()")}} Pseudo-Klasse.

Wie bei der Verschachtelung fügen die Pseudo-Klassen {{CSSxRef(":is", ":is()")}}, {{CSSxRef(":has", ":has()")}}, und die Negation ({{CSSxRef(":not", ":not()")}}) selbst kein Gewicht hinzu. Die Parameter in diesen Selektoren jedoch schon. Das Spezifitätsgewicht von jedem kommt von dem Selektorparameter in der Liste der Selektoren mit der höchsten Spezifität. Ebenso wird bei verschachtelten Selektoren das Spezifitätsgewicht, das durch die verschachtelte Selektorkomponente hinzugefügt wird, der Selektor in der durch Kommas getrennten Liste verschachtelter Selektoren mit der höchsten Spezifität.

Die [`:not()`, `:is()`, `:has()` und die CSS-Verschachtelungsausnahmen](#the_is_not_has_and_css_nesting_exceptions) werden unten diskutiert.

#### Übereinstimmender Selektor

Das Spezifitätsgewicht stammt vom übereinstimmenden Selektor. Nehmen Sie diesen CSS-Selektor mit drei durch Kommas getrennten Selektoren als Beispiel:

```css
[type="password"],
input:focus,
:root #myApp input:required {
  color: blue;
}
```

Der `[type="password"]`-Selektor in der obigen Selektorliste, mit einem Spezifitätsgewicht von `0-1-0`, wendet die `color: blue`-Deklaration auf alle Eingabetypen "password" an.

Alle Eingaben, unabhängig vom Typ, wenn sie den Fokus erhalten, passen auf den zweiten Selektor in der Liste, `input:focus`, mit einem Spezifitätsgewicht von `0-1-1`; dieses Gewicht setzt sich zusammen aus der `:focus` Pseudo-Klasse (0-1-0) und dem `input`-Typ (0-0-1). Wenn die Passwort-Eingabe den Fokus hat, passt sie auf `input:focus`, und das Spezifitätsgewicht für die `color: blue`-Stildeklaration wird `0-1-1` sein. Wenn dieses Passwort keinen Fokus hat, bleibt das Spezifitätsgewicht bei `0-1-0`.

Die Spezifität für eine erforderliche Eingabe, die in einem Element mit dem Attribut `id="myApp"` verschachtelt ist, beträgt `1-2-1`, basierend auf einer ID, zwei Pseudo-Klassen und einem Elementtyp.

Wenn der Passwort-Eingabetyp mit `required` in einem Element mit `id="myApp"` verschachtelt ist, beträgt das Spezifitätsgewicht `1-2-1`, basierend auf einer ID, zwei Pseudo-Klassen und einem Elementtyp, egal ob er Fokus hat oder nicht. Warum ist das Spezifitätsgewicht in diesem Fall `1-2-1` statt `0-1-1` oder `0-1-0`? Weil das Spezifitätsgewicht vom übereinstimmenden Selektor mit dem höchsten Spezifitätsgewicht kommt. Das Gewicht wird bestimmt, indem die Werte in den drei Spalten von links nach rechts verglichen werden.

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

### Dreispaltenvergleich

Sobald die Spezifitätswerte der relevanten Selektoren bestimmt sind, werden die Anzahl der Selektorkomponenten in jeder Spalte von links nach rechts verglichen.

```css
#myElement {
  color: green; /* 1-0-0  - WINS!! */
}
.bodyClass .sectionClass .parentClass [id="myElement"] {
  color: yellow; /* 0-4-0 */
}
```

Die erste Spalte ist der Wert der _ID_-Komponente, die die Anzahl der IDs in jedem Selektor ist. Die Zahlen in den _ID_-Spalten der konkurrierenden Selektoren werden verglichen. Der Selektor mit dem höheren Wert in der _ID_-Spalte gewinnt, unabhängig davon, was die Werte in den anderen Spalten sind. Im obigen Beispiel spielt es keine Rolle, dass der gelbe Selektor insgesamt mehr Komponenten hat, nur der Wert der ersten Spalte zählt.

Wenn die Zahl in den _ID_-Spalten der konkurrierenden Selektoren gleich ist, wird die nächste Spalte, _CLASS_, verglichen, wie unten gezeigt.

```css
#myElement {
  color: yellow; /* 1-0-0 */
}
#myApp [id="myElement"] {
  color: green; /* 1-1-0  - WINS!! */
}
```

Die _CLASS_-Spalte ist die Anzahl der Klassennamen, Attributselektoren und Pseudo-Klassen im Selektor. Wenn der _ID_-Spaltenwert derselbe ist, gewinnt der Selektor mit dem höheren Wert in der _CLASS_-Spalte, unabhängig vom Wert in der _TYPE_-Spalte. Dies wird im folgenden Beispiel gezeigt.

```css
:root input {
  color: green; /* 0-1-1 - WINS because CLASS column is greater */
}
html body main input {
  color: yellow; /* 0-0-4 */
}
```

Wenn die Zahlen in den _CLASS_- und _ID_-Spalten in konkurrierenden Selektoren gleich sind, wird die _TYPE_-Spalte relevant. Die _TYPE_-Spalte ist die Anzahl der Elementtypen und Pseudo-Elemente im Selektor. Wenn die ersten beiden Spalten denselben Wert haben, gewinnt der Selektor mit der höheren Zahl in der _TYPE_-Spalte.

Wenn die konkurrierenden Selektoren in allen drei Spalten denselben Wert haben, tritt die Nähe-Regel in Kraft, wonach der zuletzt deklarierte Stil Vorrang erhält.

```css
input.myClass {
  color: yellow; /* 0-1-1 */
}
:root input {
  color: green; /* 0-1-1 WINS because it comes later */
}
```

### Die `:is()`, `:not()`, `:has()` und die CSS-Verschachtelungsausnahmen

Die Pseudo-Klasse {{CSSxRef(":is", ":is()")}}, die relationale Pseudo-Klasse {{CSSxRef(":has", ":has()")}}, und die Negations-Pseudo-Klasse {{CSSxRef(":not", ":not()")}} werden _nicht_ als Pseudo-Klassen in der Spezifitätsgewichtung berechnet. Sie selbst fügen der Spezifitätsformel kein Gewicht hinzu. Die Selektorparameter, die in die Pseudo-Klassen-Klammern übergeben werden, sind jedoch Teil des Spezifitätsalgorithmus; das Gewicht der Matches-Any- und Negations-Pseudo-Klasse in der Berechnung des Spezifitätswerts ist das Gewicht des Parameters [Gewicht](#selektor-gewichtskategorien).

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

Beachten Sie, dass im obigen CSS-Pairing das Spezifitätsgewicht, das durch die `:is()`, `:has()` und `:not()` Pseudo-Klassen bereitgestellt wird, der Wert des Selektorparameters ist, nicht der der Pseudo-Klasse selbst.

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

Im obigen CSS-Codeblock haben wir `#fakeId` in die Selektoren aufgenommen. Dieses `#fakeId` fügt jedem Absatz `1-0-0` zur Spezifitätsgewichtung hinzu.

Bei der Erstellung komplexer Selektorlisten mit [CSS-Verschachtelung](/de/docs/Web/CSS/CSS_nesting) verhält sich dies genau wie die `:is()` Pseudo-Klasse.

```css
p,
#fakeId {
  span {
    /* 1-0-1 */
  }
}
```

Im obigen Codeblock wird die komplexe Selektor `p, #fakeId` die Spezifität von `#fakeId` und auch dem `span` übernommen, sodass eine Spezifität von `1-0-1` für sowohl `p span` als auch `#fakeId span` entsteht. Dies ist die äquivalente Spezifität zu der `:is(p, #fakeId) span` Selektor.

Generell will man die Spezifität so gering wie möglich halten, aber wenn man aus einem bestimmten Grund die Spezifität eines Elements erhöhen muss, können diese drei Pseudo-Klassen helfen.

```css
a:not(#fakeId#fakeId#fakeID) {
  color: blue; /* 3-0-1 */
}
```

In diesem Beispiel wird jedes Link blau, es sei denn, es wird durch ein Link-Deklaration mit 3 oder mehr IDs, einem zum `a` passenden Farbwert der das [`!important` Flag](#the_!important_exception), oder wenn das Link über eine [Inline-Stil](#inline-stile) Farbdeklaration verfügt, überschrieben. Wenn Sie eine solche Technik verwenden, fügen Sie einen Kommentar hinzu, um zu erklären, warum der Hack nötig war.

### Inline-Stile

Inline-Stile, die zu einem Element hinzugefügt werden (z. B. `style="font-weight: bold;"`), überschreiben immer alle normalen Stile in Autoren-Stylesheets und können daher als mit der höchsten Spezifität betrachtet werden. Man kann sich Inline-Stile als mit einer Spezifitätsgewichtung von `1-0-0-0` vorstellen.

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

Fügen Sie immer einen Kommentar mit jeder Einbindung des wichtigen Flags hinzu, sodass Code-Pfleger verstehen, warum ein CSS-Antimuster verwendet wurde.

### Die `!important` Ausnahme

CSS-Deklarationen, die als wichtig markiert sind, überschreiben alle anderen Deklarationen innerhalb derselben Kaskadenschicht und Ursprungs. Obwohl technisch gesehen [`!important`](/de/docs/Web/CSS/important) nichts mit Spezifität zu tun hat, interagiert es direkt mit Spezifität und der Kaskade. Es kehrt die [Kaskadenreihenfolge](/de/docs/Web/CSS/CSS_cascade/Cascade) von Stylesheets um.

Wenn Deklarationen aus demselben Ursprung und derselben Kaskadenschicht in Konflikt stehen und ein Eigenschaftswert das `!important`-Flag gesetzt hat, wird die wichtige Deklaration angewendet, unabhängig von der Spezifität. Wenn konkurrierende Deklarationen aus demselben Ursprung und derselben Kaskadenschicht mit dem `!important`-Flag auf dasselbe Element angewendet werden, wird die Deklaration mit höherer Spezifität angewendet.

Die Verwendung von `!important`, um die Spezifität zu überschreiben, wird als **schlechte Praxis** angesehen und sollte zu diesem Zweck vermieden werden. Durch das Verstehen und effektive Nutzen von Spezifität und der Kaskade kann jede Notwendigkeit für das `!important`-Flag beseitigt werden.

Statt `!important` zu verwenden, um fremdes CSS (aus externen Bibliotheken wie Bootstrap oder normalize.css) zu überschreiben, importieren Sie die Drittanbieter-Skripte direkt in [Kaskadenschichten](/de/docs/Web/CSS/@layer). Wenn Sie `!important` in Ihrem CSS verwenden müssen, kommentieren Sie Ihre Nutzung, sodass zukünftige Codewartungskräfte wissen, warum die Deklaration als wichtig gekennzeichnet wurde und wissen, dass sie nicht überschrieben werden sollte. Verwenden Sie `!important` auf keinen Fall, wenn Sie Plugins oder Frameworks schreiben, die andere Entwickler einbinden müssen, ohne diese kontrollieren zu können.

### Die `:where()` Ausnahme

Die Spezifitätsanpassungs-Pseudo-Klasse {{CSSxRef(":where", ":where()")}} hat immer eine Spezifität, die durch Null ersetzt wird, `0-0-0`. Sie ermöglicht es, CSS-Selektoren sehr spezifisch darin zu machen, welches Element gezielt wird, ohne eine Erhöhung der Spezifität.

Wenn Sie Drittanbieter-CSS erstellen, das von Entwicklern verwendet werden soll, die keinen Zugriff auf Ihre CSS haben, ist es als gute Praxis angesehen, CSS mit der geringstmöglichen Spezifität zu erstellen. Zum Beispiel, wenn Ihr Thema das folgende CSS enthält:

```css
:where(#defaultTheme) a {
  /* 0-0-1 */
  color: red;
}
```

Dann kann der Entwickler, der das Widget implementiert, leicht die Linkfarbe nur mit Typselektoren überschreiben.

```css
footer a {
  /* 0-0-2 */
  color: blue;
}
```

### Wie `@scope` Blöcke die Spezifität beeinflussen

Das Einfügen eines Regelwerks in einen `@scope`-Block beeinflusst die Spezifität seines Selektors nicht, unabhängig von den Selektoren, die innerhalb des Scoperoots und der Grenze verwendet werden. Zum Beispiel:

```css
@scope (.article-body) {
  /* img has a specificity of 0-0-1, as expected */
  img {
  }
}
```

Wenn Sie sich jedoch entscheiden, die `:scope`-Pseudo-Klasse ausdrücklich Ihrem gescopten Selektor voranzustellen, müssen Sie diese bei der Berechnung ihrer Spezifität einbeziehen. `:scope`, wie alle regulären Pseudo-Klassen, hat eine Spezifität von 0-1-0. Zum Beispiel:

```css
@scope (.article-body) {
  /* :scope img has a specificity of 0-1-0 + 0-0-1 = 0-1-1 */
  :scope img {
  }
}
```

Wenn Sie den `&`-Selektor in einem `@scope`-Block verwenden, steht `&` für den Scope-Root-Selektor; er wird intern in diesen Selektor gewrappt in einen {{cssxref(":is", ":is()")}}-Selektor umgeschrieben. Zum Beispiel:

```css
@scope (figure, #primary) {
  & img {
  }
}
```

`& img` ist äquivalent zu `:is(figure, #primary) img`.

Da `:is()` die Spezifität seines spezifischsten Arguments (`#primary` in diesem Fall) übernimmt, beträgt die Spezifität des gescopeten `& img`-Selektors daher 1-0-0 + 0-0-1 = 1-0-1.

## Tipps zum Umgang mit Spezifitätskopfschmerzen

Statt `!important` zu verwenden, sollten Sie Kaskadenschichten verwenden und in Ihrem gesamten CSS nur ein geringes Spezifitätsgewicht verwenden, sodass Stile leicht mit etwas spezifischeren Regeln überschrieben werden können. Die Verwendung von semantischem HTML hilft dabei, Ankerpunkte zu schaffen, von denen aus das Styling angewendet werden kann.

### Selektoren spezifisch machen mit und ohne Spezifitätssteigerung

Indem Sie den Abschnitt des Dokuments, den Sie stylen, vor dem Element, das Sie auswählen, angeben, wird die Regel spezifischer. Je nachdem, wie Sie sie hinzufügen, können Sie einige, viele oder keine Spezifität hinzufügen, wie unten gezeigt:

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

Unabhängig von der Reihenfolge wird die Überschrift grün, da diese Regel am spezifischsten ist.

#### Verringern der ID-Spezifität

Die Spezifität basiert auf der Form eines Selektors. Das Einschließen der `id` eines Elements als Attributselektor anstelle eines ID-Selektors ist eine gute Möglichkeit, ein Element spezifischer zu machen, ohne eine Überfülle an Spezifität hinzuzufügen. Im vorherigen Beispiel zählt der Selektor `[id="myContent"]` als Attributselektor zur Bestimmung der Spezifität des Selektors, obwohl er eine ID auswählt.

Sie können die `id` oder einen Teil eines Selektors auch als Parameter in der Pseudo-Klasse zur Spezifitätsanpassung `:where()` einschließen, wenn Sie einen Selektor spezifischer machen müssen, aber keine Spezifität hinzufügen möchten.

### Spezifität erhöhen durch Verdopplung des Selektors

Als spezieller Fall zur Erhöhung der Spezifität können Sie Gewichte aus den _CLASS_- oder _ID_-Spalten verdoppeln. Durch Duplizieren von ID-, Klassen-, Pseudo-Klassen- oder Attributselektoren innerhalb eines zusammengesetzten Selektors wird die Spezifität erhöht, wenn sehr spezifische Selektoren überschrieben werden, über die Sie keine Kontrolle haben.

```css
#myId#myId#myId span {
  /* 3-0-1 */
}
.myClass.myClass.myClass span {
  /* 0-3-1 */
}
```

Verwenden Sie dies nur sparsam, wenn überhaupt. Wenn Sie Selektorduplikation verwenden, kommentieren Sie immer Ihr CSS.

Durch die Verwendung von `:is()` und `:not()` (und auch `:has()`) können Sie die Spezifität erhöhen, selbst wenn Sie einer übergeordneten Element keine `id` hinzufügen können:

```css
:not(#fakeID#fakeId#fakeID) span {
  /* 3-0-1 */
}
:is(#fakeID#fakeId#fakeID, span) {
  /* 3-0-0 */
}
```

### Vorrang vor Drittanbieter-CSS

Das Nutzen von Kaskadenschichten ist der Standardweg, um einem Satz von Stilen Vorrang vor einem anderen Satz von Stilen zu geben; Kaskadenschichten ermöglichen dies ohne Verwendung von Spezifität! Normale (nicht wichtige) Autorenstile, die in Kaskadenschichten importiert werden, haben eine geringere Vorrang als nicht geschichtete Autorenstile.

Wenn Stile aus einem Stylesheet stammen, das Sie nicht bearbeiten können oder nicht verstehen und Sie Stile überschreiben müssen, ist eine Strategie, die Stile, die Sie nicht kontrollieren können, in eine Kaskadenschicht zu importieren. In anschließend deklarierten Schichten haben die Stile Vorrang, wobei nicht geschichtete Stile Vorrang vor allen geschichteten Stilen aus demselben Ursprung haben.

Wenn zwei Selektoren aus verschiedenen Schichten dasselbe Element matchen, haben Ursprung und Wichtigkeit Vorrang; die Spezifität des Selektors im verlierenden Stylesheet ist irrelevant.

```css
@import "TW.css" layer();
p,
p * {
  font-size: 1rem;
}
```

Im obigen Beispiel wird der gesamte Absatztext, einschließlich des verschachtelten Inhalts, `1rem`, egal wie viele Klassennamen die Absätze haben, die mit dem TW Stylesheet übereinstimmen.

### Vermeidung und Überschreibung von `!important`

Der beste Ansatz ist, `!important` nicht zu verwenden. Die obigen Erklärungen zur Spezifität sollten hilfreich sein, um die Verwendung des Flags zu vermeiden und es komplett zu entfernen, wenn darauf gestoßen wird.

Um die wahrgenommene Notwendigkeit von `!important` zu beseitigen, können Sie eine der folgenden Maßnahmen ergreifen:

- Erhöhen Sie die Spezifität des Selektors der ehemals `!important` Deklaration, sodass sie größer ist als andere Deklarationen
- Geben Sie ihm dieselbe Spezifität und setzen sie ihn nach der Deklaration, die er überschreiben soll
- Reduzieren Sie die Spezifität des Selektors, den Sie überschreiben möchten.

All diese Methoden werden in den vorhergehenden Abschnitten behandelt.

Wenn Sie `!important`-Flags aus einem Autoren-Stylesheet nicht entfernen können, ist die einzige Lösung, die wichtigen Stile zu überschreiben, die Verwendung von `!important`. Das Erstellen einer [Kaskadenschicht](/de/docs/Web/CSS/@layer) von wichtigen Deklaration-Überschreibungen ist eine hervorragende Lösung. Zwei Möglichkeiten, dies zu tun, sind:

#### Methode 1

1. Erstellen Sie ein separates, kurzes Stylesheet, das nur wichtige Deklarationen enthält, die spezifisch alle wichtigen Deklarationen überschreiben, die Sie nicht entfernen konnten.
2. Importieren Sie dieses Stylesheet als den ersten Import in Ihr CSS mit `layer()`, einschließlich der `@import`-Anweisung, bevor Sie auf andere Stylesheets verlinken. Dies stellt sicher, dass die wichtigen Überschreibungen als erste Schicht importiert werden.

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

Die Spezifität des Selektors des wichtigen Stils innerhalb der Schicht kann niedrig sein, solange er das zu überschreibende Element sicher trifft. Normale Schichten sollten außerhalb der Schicht deklariert werden, da geschichtete Stile eine geringere Vorrang als ungeschichtete Stile haben.

### Missachtung der Nähe des Baums

Die Nähe eines Elements zu anderen Elementen, die in einem gegebenen Selektor referenziert werden, hat keinen Einfluss auf die Spezifität.

```css
body h1 {
  color: green;
}

html h1 {
  color: purple;
}
```

Die `<h1>`-Elemente werden lila sein, denn wenn Deklarationen die gleiche Spezifität haben, hat der zuletzt deklarierte Selektor Vorrang.

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

Das `h1` wird lila sein, weil der `h1` Selektor das Element direkt anspricht, während das Grün von den `#parent` Deklarationen geerbt wird.

## Beispiele

Im folgenden CSS haben wir drei Selektoren, die {{HTMLElement('input')}} Elemente anvisieren, um eine Farbe festzulegen. Für eine bestimmte Eingabe hat die Spezifitätsgewichtung der Eigenschaftsdeklaration Vorrang, die den übereinstimmenden Selektor mit dem größten Gewicht hat:

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

Wenn die obigen Selektoren alle auf dasselbe Eingabefeld abzielen, wird die Eingabe rot sein, da die erste Deklaration den höchsten Wert in der _ID_-Spalte hat.

Der letzte Selektor hat vier _TYPE_-Komponenten. Obwohl er den höchsten ganzzahligen Wert hat, haben sich Elementtypen und Pseudo-Elemente nie Vorrang über _CLASS_ Komponenten, selbst wenn es 150 wären. Die Spaltenwerte werden von links nach rechts verglichen, wenn die Spaltenwerte gleich sind.

Hätten wir den ID-Selektor im obigen Beispielcode in einen Attributselektor umgewandelt, hätten die ersten zwei Selektoren dieselbe Spezifität, wie unten gezeigt:

```css
[id="myElement"] input.myClass {
  color: red;
} /* 0-2-1 */
input[type="password"]:required {
  color: blue;
} /* 0-2-1 */
```

Wenn mehrere Deklarationen die gleiche Spezifität haben, wird die letzte Deklaration im CSS auf das Element angewendet. Wenn beide Selektoren dasselbe {{HTMLElement('input')}} treffen, wird die Farbe blau sein.

## Zusätzliche Anmerkungen

Einige Dinge, die man über Spezifität beachten sollte:

1. Spezifität gilt nur, wenn dasselbe Element von mehreren Deklarationen in derselben Kaskadenschicht oder demselben Ursprung getagert wird. Spezifität zählt nur für Deklarationen derselben Wichtigkeit und desselben Ursprungs und [Kaskadenschicht](/de/docs/Web/CSS/@layer). Wenn übereinstimmende Selektoren sich in unterschiedlichen Ursprüngen befinden, bestimmt die [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade), welche Deklaration Vorrang hat.

2. Wenn zwei Selektoren in derselben Kaskadenschicht und Ursprung dieselbe Spezifität haben, wird die nächtliche Nähe dann berechnet; das Regelwerk mit der geringsten nächtlichen Nähe gewinnt. Siehe [How `@scope` conflicts are resolved](/de/docs/Web/CSS/@scope#how_scope_conflicts_are_resolved) für weitere Details und ein Beispiel.

3. Wenn die Nähe im Scope für beide Selektoren ebenfalls gleich ist, kommt die Quellreihenfolge dann ins Spiel. Wenn alles andere gleich ist, gewinnt der letzte Selektor.

4. Laut CSS-Regeln werden [direkt gezielte Elemente](#direkt_gezielte_elemente_vs._geerbte_stile) immer Vorrang vor Regeln haben, die ein Element von seinem Vorfahren erbt.

5. [Nähe der Elemente](#missachtung_der_nähe_des_baums) im Dokumentenbaum hat keinen Effekt auf die Spezifität.

## Spezifikationen

{{Specifications}}

## Siehe auch

- ["Specificity" in "Handling conflicts"](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#specificity_2)
- [SpeciFISHity](https://specifishity.com/)
- [Specificity Calculator](https://specificity.keegan.st/): Eine interaktive Website, um Ihre eigenen CSS-Regeln zu testen und zu verstehen
- [_ID-CLASS-TYPE_ Übung](https://estelle.github.io/CSS/selectors/exercises/specificity.html) ein Spezifitätsquiz
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax/Syntax) Leitfaden
- [CSS-Syntax](/de/docs/Web/CSS/CSS_syntax) Modul
- [CSS-Fehlerbehandlung](/de/docs/Web/CSS/CSS_syntax/Error_handling)
- [At-Regeln](/de/docs/Web/CSS/CSS_syntax/At-rule)
- [Vererbung](/de/docs/Web/CSS/CSS_cascade/Inheritance)
- [Initial](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value), [berechnete](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value), [benutzte](/de/docs/Web/CSS/CSS_cascade/Value_processing#used_value), und [tatsächliche](/de/docs/Web/CSS/CSS_cascade/Value_processing#actual_value) Werte
- [Wertdefinition Syntax](/de/docs/Web/CSS/CSS_Values_and_Units/Value_definition_syntax)
- [Lernen: Umgang mit Konflikten](/de/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)
- [Lernen: Kaskadenschichten](/de/docs/Learn_web_development/Core/Styling_basics/Cascade_layers)
- [CSS-Kaskadierung und Vererbung](/de/docs/Web/CSS/CSS_cascade) Modul
- [CSS-Verschachtelung Modul](/de/docs/Web/CSS/CSS_nesting)
