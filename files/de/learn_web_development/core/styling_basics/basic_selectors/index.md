---
title: Grundlegende CSS Selektoren
short-title: Grundlegende Selektoren
slug: Learn_web_development/Core/Styling_basics/Basic_selectors
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics")}}

Sie haben bereits gesehen, wie Selektoren in {{Glossary("CSS", "CSS")}} verwendet werden, um die {{Glossary("HTML", "HTML")}} Elemente auf unseren Webseiten anzusprechen, die wir stylen möchten. Es gibt eine Vielzahl von CSS Selektoren, die es ermöglichen, Elemente mit großer Präzision auszuwählen, und in den nächsten Artikeln werden wir die verschiedenen Typen ausführlich betrachten. In diesem Artikel fassen wir einige Grundlagen der Selektoren zusammen, einschließlich der grundlegenden Typ-, Klassen- und ID-Selektoren sowie Selektorenlisten. Wir führen auch den Universalselektor ein.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlegende HTML-Kenntnisse (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die grundlegenden Selektortypen — Elementtyp, Klasse, ID.</li>
          <li>Verstehen, dass IDs pro Dokument einzigartig sind — Sie sollten eine ID verwenden, um ein bestimmtes Element auszuwählen.</li>
          <li>Verstehen, dass Sie mehrere Klassen pro Element haben können und diese verwenden können, um Styles nach Bedarf übereinander zu legen.</li>
          <li>Selektorenlisten.</li>
          <li>Universalselektor.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Selektor?

Ein CSS Selektor ist der erste Teil einer CSS-Regel. Es ist ein Muster von Elementen und anderen Begriffen, die dem Browser mitteilen, welche HTML-Elemente ausgewählt werden sollen, um die CSS-Eigenschaftswerte innerhalb der Regel auf sie anzuwenden. Das oder die Elemente, die durch den Selektor ausgewählt werden, werden als das _Subjekt des Selektors_ bezeichnet.

![Ein Code mit dem hervorgehobenen h1.](selector.png)

In früheren Artikeln haben Sie möglicherweise einige verschiedene Selektoren kennengelernt und erfahren, dass es Selektoren gibt, die das Dokument auf unterschiedliche Weise ansprechen — zum Beispiel durch das Auswählen eines Elements wie `h1` oder einer Klasse wie `.special`. Beginnen wir damit, die Hauptselektoren zusammenzufassen, die Sie bereits kennengelernt haben.

## Typselektoren

Ein **Typselektor** wird manchmal auch als _Tagname-Selektor_ oder _Elementselektor_ bezeichnet, da er ein HTML-Tag/Element in Ihrem Dokument auswählt. Im folgenden Beispiel haben wir die Selektoren `span`, `em` und `strong` verwendet.

Versuchen Sie, das folgende Beispiel zu bearbeiten (klicken Sie auf **"Play"**, um es im MDN Playground zu öffnen), um eine CSS-Regel hinzuzufügen, die das `<h1>`-Element auswählt und seine Farbe auf Blau ändert:

```html live-sample___type
<h1>Type selectors</h1>
<p>
  Veggies es bonus vobis, proinde vos postulo essum magis
  <span>kohlrabi welsh onion</span> daikon amaranth tatsoi tomatillo melon azuki
  bean garlic.
</p>

<p>
  Gumbo beet greens corn soko <strong>endive</strong> gumbo gourd. Parsley
  shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra
  wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
</p>

<p>
  Turnip greens yarrow ricebean rutabaga <em>endive cauliflower</em> sea lettuce
  kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
  purslane kale. Celery potato scallion desert raisin horseradish spinach
</p>
```

```css live-sample___type
body {
  font-family: sans-serif;
}

span {
  background-color: yellow;
}

strong {
  color: rebeccapurple;
}

em {
  color: rebeccapurple;
}
```

{{EmbedLiveSample("type", "", "280px")}}

## Klassenselektoren

Der groß-/kleinschreibungssensitive Klassenselektor beginnt mit einem Punkt (`.`) und wählt alles im Dokument aus, dem diese Klasse zugewiesen wurde. Im Live-Beispiel unten haben wir eine Klasse namens `highlight` erstellt und sie an mehreren Stellen in meinem Dokument angewendet. Alle Elemente, denen die Klasse zugewiesen wurde, sind hervorgehoben.

```html live-sample___class
<h1 class="highlight">Class selectors</h1>
<p>
  Veggies es bonus vobis, proinde vos postulo essum magis
  <span class="highlight">kohlrabi welsh onion</span> daikon amaranth tatsoi
  tomatillo melon azuki bean garlic.
</p>

<p class="highlight">
  Gumbo beet greens corn soko <strong>endive</strong> gumbo gourd. Parsley
  shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra
  wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
</p>
```

```css live-sample___class
body {
  font-family: sans-serif;
}

.highlight {
  background-color: yellow;
}
```

{{EmbedLiveSample("class", "", "220px")}}

### Spielen mit Klassenselektoren

Versuchen Sie, das obige Beispiel (im MDN Playground) zu bearbeiten, um die folgenden Änderungen vorzunehmen:

1. Bearbeiten Sie das HTML, um den Inhalt zu ändern, dem die `.highlight`-Stile zugewiesen sind. Sie könnten beispielsweise einige `<span>`-Elemente hinzufügen, um verschiedene Teile des vorhandenen Inhalts zu umgeben und die `highlight`-Klasse darauf anzuwenden, einige vorhandene `highlight`-Klassen entfernen oder neuen Inhalt hinzufügen, dem die `highlight`-Klasse zugewiesen wird.
2. Bearbeiten Sie das CSS, um die Deklarationen innerhalb der `.highlight`-Regel zu ändern und bei Bedarf neue hinzuzufügen, und beobachten Sie, wie sich dies auf das Styling aller Elemente auswirkt, auf die die `highlight`-Klasse angewendet wurde.
3. Erstellen Sie eine neue Klassenregel im CSS mit anderen Deklarationen darin (zum Beispiel mit einem Selektor von `.highlight2`), und versuchen Sie dann, dies auf einen Ihrer HTML-Inhalte anzuwenden.

### Zielen auf bestimmte Elemente mit Klassen

Sie können einen Selektor erstellen, der bestimmte Elemente mit der Klasse anspricht. Im nächsten Beispiel heben wir ein `<span>` mit der Klasse `highlight` anders hervor als eine `<h1>`-Überschrift mit der Klasse `highlight`. Dazu verwenden wir den Typselektor für das Element, das wir ansprechen möchten, und hängen die Klasse mit einem Punkt an, ohne dazwischenliegenden Leerraum.

```html live-sample___class-type
<h1 class="highlight">Class selectors</h1>
<p>
  Veggies es bonus vobis, proinde vos postulo essum magis
  <span class="highlight">kohlrabi welsh onion</span> daikon amaranth tatsoi
  tomatillo melon azuki bean garlic.
</p>

<p class="highlight">
  Gumbo beet greens corn soko <strong>endive</strong> gumbo gourd. Parsley
  shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra
  wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
</p>
```

```css live-sample___class-type
body {
  font-family: sans-serif;
}

span.highlight {
  background-color: yellow;
}

h1.highlight {
  background-color: pink;
}
```

{{EmbedLiveSample("class-type", "", "200px")}}

Dieser Ansatz reduziert den Anwendungsbereich einer Regel. Die Regel wird nur auf diese bestimmte Element-Klassen-Kombination angewendet. Sie müssten einen weiteren Selektor hinzufügen, wenn Sie entscheiden, dass die Regel auch auf andere Elemente angewendet werden soll.

### Ein Element ansprechen, wenn ihm mehr als eine Klasse zugewiesen ist

Sie können einem Element mehrere Klassen zuweisen und diese einzeln ansprechen oder das Element nur auswählen, wenn alle Klassen im Selektor vorhanden sind. Das kann hilfreich sein, wenn Sie Komponenten erstellen, die auf Ihrer Seite in unterschiedlicher Weise kombiniert werden können.

Im folgenden Beispiel haben wir ein `<div>`, das eine Notiz enthält. Der graue Rand wird angewendet, wenn das Kästchen die Klasse `notebox` hat. Wenn es auch die Klasse `warning` oder `danger` hat, ändern wir die {{cssxref("border-color")}}.

Wir können dem Browser sagen, dass wir das Element nur dann abgleichen möchten, wenn ihm zwei Klassen zugewiesen sind, indem wir sie ohne Leerzeichen dazwischen zusammenketten. Sie werden sehen, dass auf das letzte `<div>` kein Stil angewendet wird, da es nur die `danger`-Klasse hat; es benötigt auch `notebox`, um etwas angewendet zu bekommen.

```html live-sample___class-many
<div class="notebox">This is an informational note.</div>

<div class="notebox warning">This note shows a warning.</div>

<div class="notebox danger">This note shows danger!</div>

<div class="danger">
  This won't get styled — it also needs to have the notebox class
</div>
```

```css live-sample___class-many
body {
  font-family: sans-serif;
}

.notebox {
  border: 4px solid #666666;
  padding: 0.5em;
  margin: 0.5em;
}

.notebox.warning {
  border-color: orange;
  font-weight: bold;
}

.notebox.danger {
  border-color: red;
  font-weight: bold;
}
```

{{EmbedLiveSample("class-many", "", "200px")}}

## ID-Selektoren

Der groß-/kleinschreibungssensitive ID-Selektor beginnt mit einem `#` statt einem Punktzeichen, wird jedoch auf die gleiche Weise wie ein Klassenselektor verwendet. Der Unterschied besteht darin, dass eine ID nur einmal pro Seite verwendet werden kann und Elementen nur ein einziges `id`-Wert zugewiesen werden kann. Es kann ein Element auswählen, dem die `id` zugewiesen ist, und Sie können die ID einem Typselektor voranstellen, um das Element nur dann anzusprechen, wenn sowohl das Element als auch die ID übereinstimmen. Sie können beide Verwendungen im folgenden Beispiel sehen:

```html live-sample___id
<h1 id="heading">ID selector</h1>
<p>
  Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
  daikon amaranth tatsoi tomatillo melon azuki bean garlic.
</p>

<p id="one">
  Gumbo beet greens corn soko <strong>endive</strong> gumbo gourd. Parsley
  shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra
  wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
</p>
```

```css live-sample___id
body {
  font-family: sans-serif;
}

#one {
  background-color: yellow;
}

h1#heading {
  color: rebeccapurple;
}
```

{{EmbedLiveSample("id", "", "200px")}}

> [!WARNING]
> Die gleiche ID mehrmals in einem Dokument zu verwenden, mag für Styling-Zwecke funktionieren, aber tun Sie dies nicht. Es führt zu ungültigem Code und wird an vielen Stellen seltsames Verhalten verursachen.

### Spielen mit ID-Selektoren

Versuchen Sie, das obige Beispiel zu bearbeiten, um die folgenden Änderungen vorzunehmen:

1. Bearbeiten Sie das HTML, um die `#one`-Stile auf den ersten Absatz statt auf den zweiten anzuwenden.
2. Bearbeiten Sie das CSS, um die Deklarationen innerhalb der ID-Selektoren zu ändern, und beobachten Sie, wie sich dies auf das Aussehen des HTML auswirkt.

## Selektorenlisten

Wenn Sie mehrere Elemente haben, die das gleiche CSS verwenden, können die einzelnen Selektoren in eine _Selektorenliste_ kombiniert werden, sodass die Regel auf alle individuellen Selektoren angewendet wird. Wenn ich beispielsweise dasselbe CSS für ein `h1` und auch eine Klasse von `.special` habe, könnte ich dies als zwei separate Regeln schreiben.

```css
h1 {
  color: blue;
}

.special {
  color: blue;
}
```

Ich könnte sie auch in einer Selektorenliste kombinieren, indem ich ein Komma dazwischen setze.

```css-nolint
h1, .special {
  color: blue;
}
```

Leerzeichen vor oder nach dem Komma sind gültig. Möglicherweise finden Sie die Selektoren auch lesbarer, wenn jeder in einer neuen Zeile steht.

```css
h1,
.special {
  color: blue;
}
```

### Spielen mit Selektorenlisten

Im folgenden Beispiel versuchen Sie, die beiden Selektoren zu kombinieren, die identische Deklarationen haben. Die visuelle Anzeige sollte nach dem Kombinieren gleich bleiben.

```html live-sample___selector-list
<h1>Type selectors</h1>
<p>
  Veggies es bonus vobis, proinde vos postulo essum magis
  <span>kohlrabi welsh onion</span> daikon amaranth tatsoi tomatillo melon azuki
  bean garlic.
</p>

<p>
  Gumbo beet greens corn soko <strong>endive</strong> gumbo gourd. Parsley
  shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra
  wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
</p>

<p>
  Turnip greens yarrow ricebean rutabaga <em>endive cauliflower</em> sea lettuce
  kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus winter
  purslane kale. Celery potato scallion desert raisin horseradish spinach
</p>
```

```css live-sample___selector-list
body {
  font-family: sans-serif;
}
span {
  background-color: yellow;
}

strong {
  color: rebeccapurple;
}

em {
  color: rebeccapurple;
}
```

{{EmbedLiveSample("selector-list", "", "280px")}}

### Ungültige Selektoren in Selektorenlisten

Wenn Sie Selektoren auf diese Weise gruppieren, wird die gesamte Regel ignoriert, wenn ein Selektor syntaktisch ungültig ist.

Im folgenden Beispiel wird die Regel `h1` weiterhin gestylt, während die ungültige Klassen-Selektorregel ignoriert wird.

```css-nolint
h1 {
  color: blue;
}

..special {
  color: blue;
}
```

Wenn sie jedoch kombiniert werden, wird weder das `h1` noch die Klasse gestylt, da die gesamte Regel als ungültig angesehen wird.

```css-nolint
h1, ..special {
  color: blue;
}
```

## Der Universalselektor

Der Universalselektor wird durch ein Sternchen (`*`) angezeigt. Er wählt alles im Dokument aus. Wenn `*` mit einem [Nachkommen-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator) verkettet wird, wählt es alles innerhalb des übergeordneten Elements aus. Beispielsweise wählt `p *` alle verschachtelten Elemente innerhalb des `<p>`-Elements aus.

Im folgenden Beispiel verwenden wir den Universalselektor, um die Randabstände aller Elemente zu entfernen. Anstelle des standardmäßigen Browser-Stylings, das Überschriften und Absätze mit Randabständen versieht, wird alles eng zusammengezogen.

```html live-sample___universal
<h1>Universal selector</h1>
<p>
  Veggies es bonus vobis, proinde vos postulo essum magis
  <span>kohlrabi welsh onion</span> daikon amaranth tatsoi tomatillo melon azuki
  bean garlic.
</p>

<p>
  Gumbo beet greens corn soko <strong>endive</strong> gumbo gourd. Parsley
  shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra
  wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini.
</p>
```

```css live-sample___universal
body {
  font-family: sans-serif;
}

* {
  margin: 0;
}
```

{{EmbedLiveSample("universal")}}

Ein solches Verhalten ist manchmal in "Reset-Stylesheets" zu sehen, die das gesamte Browser-Styling entfernen. Da der Universalselektor globale Änderungen vornimmt, verwenden wir ihn für sehr spezifische Situationen, wie die unten beschriebene.

### Den Universalselektor verwenden, um Ihre Selektoren lesbarer zu machen

Eine Verwendung des Universalselektors besteht darin, Selektoren lesbarer und offensichtlicher zu machen, was sie tun. Wenn wir beispielsweise alle Nachkommelemente eines `<article>`-Elements, die das erste Kind ihres Elternteils sind, einschließlich direkter Kinder, auswählen und fett machen wollten, könnten wir die Pseudoklasse {{cssxref(":first-child")}} verwenden. Wir werden mehr darüber in der Lektion zu [Pseudoklassen und Pseudoelementen](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements) lernen:

```css
article :first-child {
  font-weight: bold;
}
```

Dieser Selektor könnte jedoch mit `article:first-child` verwechselt werden, der ein `<article>`-Element auswählt, das das erste Kind eines anderen Elements ist.

Um diese Verwirrung zu vermeiden, können wir den Universalselektor zur `:first-child` Pseudoklasse hinzufügen, sodass klarer wird, was der Selektor tut. Er wählt _jedes_ Element aus, das das erste Kind eines `<article>`-Elements oder das erste Kind eines Nachkommelements von `<article>` ist:

```css
article *:first-child {
  font-weight: bold;
}
```

Obwohl beide dasselbe bewirken, ist die Lesbarkeit deutlich verbessert.

## Zusammenfassung

In diesem Artikel haben wir CSS Selektoren wiederholt, die es Ihnen ermöglichen, bestimmte HTML-Elemente auszuwählen, und die Typ-, Klassen- und ID-Selektoren etwas ausführlicher betrachtet als zuvor. Im nächsten Artikel werden wir uns mit Attributselektoren beschäftigen.

> [!NOTE]
> Für eine vollständige Liste der Selektoren siehe unser [CSS Selektor-Referenz](/de/docs/Web/CSS/Guides/Selectors).

## Siehe auch

- [CSS-Klassen](https://scrimba.com/the-frontend-developer-career-path-c0j/~01d?via=mdn), Scrimba <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Eine interaktive Lektion, die einige Anleitungen zu CSS-Klassen bietet.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics")}}
