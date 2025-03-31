---
title: Grundlegende CSS-Selektoren
short-title: Grundlegende Selektoren
slug: Learn_web_development/Core/Styling_basics/Basic_selectors
l10n:
  sourceCommit: 30bf998d2d87c97c2865d713ad5afc9c476264a0
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics")}}

Sie haben bereits gesehen, wie in {{Glossary("CSS", "CSS")}} Selektoren verwendet werden, um die {{Glossary("HTML", "HTML")}}-Elemente auf unseren Webseiten zu bestimmen, die wir stylen möchten. Es gibt eine Vielzahl von CSS-Selektoren, die eine präzise Auswahl von Elementen ermöglichen. In den nächsten Artikeln werden wir die verschiedenen Typen im Detail betrachten. In diesem Artikel fassen wir einige grundlegende Selektoren zusammen, einschließlich der einfachen Typ-, Klassen- und ID-Selektoren sowie Selektorenlisten. Wir stellen auch den universellen Selektor vor.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML (siehe
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
          <li>Verstehen, dass IDs einzigartig pro Dokument sind — Sie sollten eine ID verwenden, um ein spezielles Element zu bestimmen.</li>
          <li>Verstehen, dass Sie mehreren Klassen pro Element zuweisen können und diese verwendet werden können, um bei Bedarf Styles zu schichten.</li>
          <li>Selektorenlisten.</li>
          <li>Universeller Selektor.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Selektor?

Ein CSS-Selektor ist der erste Teil einer CSS-Regel. Es handelt sich um ein Muster aus Elementen und anderen Begriffen, das dem Browser mitteilt, welche HTML-Elemente ausgewählt werden sollen, um die CSS-Eigenschaftswerte innerhalb der Regel anzuwenden. Das oder die Elemente, die durch den Selektor ausgewählt werden, werden als _Subjekt des Selektors_ bezeichnet.

![Ein Codeausschnitt mit hervorgehobenem h1.](selector.png)

In früheren Artikeln haben Sie möglicherweise einige verschiedene Selektoren kennengelernt und gelernt, dass es Selektoren gibt, die das Dokument auf unterschiedliche Weise ansprechen — zum Beispiel durch Auswahl eines Elements wie `h1` oder einer Klasse wie `.special`. Lassen Sie uns mit einer Wiederholung der Hauptselektoren beginnen, die Sie bereits kennengelernt haben.

## Typselektoren

Ein **Typselektor** wird manchmal als _Tag-Namenselektor_ oder _Elementselektor_ bezeichnet, da er ein HTML-Tag/Element in Ihrem Dokument auswählt. Im folgenden Beispiel haben wir die Selektoren `span`, `em` und `strong` verwendet.

Versuchen Sie, eine CSS-Regel hinzuzufügen, um das `<h1>`-Element auszuwählen und seine Farbe in Blau zu ändern:

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

Der groß-/klein-schreibungssensitive Klassenselektor beginnt mit einem Punkt (`.`) und wählt alles im Dokument aus, dem diese Klasse zugewiesen wurde. Im Live-Beispiel unten haben wir eine Klasse namens `highlight` erstellt und sie an mehreren Stellen in meinem Dokument angewendet. Alle Elemente, denen die Klasse zugewiesen wurde, sind hervorgehoben.

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

### Klassen auf bestimmten Elementen anvisieren

Sie können einen Selektor erstellen, der bestimmte Elemente mit der angewendeten Klasse anvisiert. Im nächsten Beispiel heben wir ein `<span>` mit einer Klasse von `highlight` anders hervor als eine `<h1>`-Überschrift mit einer Klasse von `highlight`. Wir tun dies, indem wir den Typselektor für das Element, das wir anvisieren möchten, verwenden, wobei die Klasse mit einem Punkt angehängt wird und dazwischen kein Leerzeichen ist.

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

Dieser Ansatz reduziert den Anwendungsbereich einer Regel. Die Regel wird nur auf diese bestimmte Element- und Klassenkombination angewendet. Sie müssten einen weiteren Selektor hinzufügen, wenn Sie entscheiden, dass die Regel auch auf andere Elemente angewendet werden soll.

### Ein Element anvisieren, wenn mehr als eine Klasse angewendet wird

Sie können einem Element mehrere Klassen zuweisen und diese einzeln anvisieren oder das Element nur auswählen, wenn alle im Selektor angegebenen Klassen vorhanden sind. Dies kann nützlich sein, wenn Sie Komponenten erstellen, die auf Ihrer Website in unterschiedlichen Kombinationen verwendet werden können.

Im folgenden Beispiel haben wir ein `<div>`, das eine Notiz enthält. Der graue Rahmen wird angewendet, wenn die Box eine Klasse von `notebox` hat. Wenn es auch eine Klasse von `warning` oder `danger` hat, ändern wir die {{cssxref("border-color")}}.

Wir können dem Browser mitteilen, dass wir das Element nur dann ansprechen möchten, wenn zwei Klassen angewendet werden, indem wir sie ohne Leerzeichen dazwischen verketten. Sie werden sehen, dass das letzte `<div>` keinen Style erhält, da es nur die Klasse `danger` hat; es benötigt auch `notebox`, um etwas angewendet zu bekommen.

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
  border: 4px solid #666;
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

Der groß-/klein-schreibungssensitive ID-Selektor beginnt mit einem `#` anstatt mit einem Punkt, wird jedoch in gleicher Weise wie ein Klassenselektor verwendet. Der Unterschied besteht darin, dass eine ID nur einmal pro Seite verwendet werden kann und Elementen nur ein einzelner `id`-Wert zugewiesen werden kann. Sie kann ein Element auswählen, auf dem die `id` festgelegt ist. Sie können die ID mit einem Typselektor voranstellen, um das Element nur anzusprechen, wenn sowohl das Element als auch die ID übereinstimmen. Sie können beide Verwendungen im folgenden Beispiel sehen:

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
> Die mehrfache Verwendung derselben ID in einem Dokument mag für Stylingzwecke zu funktionieren scheinen, aber tun Sie dies nicht. Es resultiert in ungültigem Code und führt zu seltsamem Verhalten an vielen Stellen.

## Selektorenlisten

Wenn Sie mehr als eine Sache haben, die denselben CSS verwendet, können die einzelnen Selektoren zu einer _Selektorenliste_ kombiniert werden, sodass die Regel auf alle einzelnen Selektoren angewendet wird. Wenn ich beispielsweise denselben CSS für ein `h1` und auch eine Klasse von `.special` habe, könnte ich dies als zwei separate Regeln schreiben.

```css
h1 {
  color: blue;
}

.special {
  color: blue;
}
```

Ich könnte sie auch zu einer Selektorenliste kombinieren, indem ich ein Komma dazwischen setze.

```css-nolint
h1, .special {
  color: blue;
}
```

Leerzeichen sind vor oder nach dem Komma zulässig. Sie finden die Selektoren möglicherweise auch besser lesbar, wenn jeder in einer neuen Zeile steht.

```css
h1,
.special {
  color: blue;
}
```

Im Live-Beispiel unten versuchen Sie, die beiden Selektoren zu kombinieren, die identische Deklarationen haben. Die visuelle Anzeige sollte gleich sein, nachdem sie kombiniert wurden.

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

Wenn Sie Selektoren auf diese Weise gruppieren, wird die gesamte Regel ignoriert, wenn ein Selektor syntaktisch ungültig ist.

Im folgenden Beispiel wird die ungültige Klassenselektorregel ignoriert, während das `h1` weiterhin gestylt wird.

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

## Der universelle Selektor

Der universelle Selektor wird durch ein Sternchen (`*`) angezeigt. Er wählt alles im Dokument aus. Wenn `*` mit einem [Nachkommenkombinator](/de/docs/Web/CSS/Descendant_combinator) verkettet wird, wählt er alles innerhalb dieses übergeordneten Elements aus. Zum Beispiel wählt `p *` alle verschachtelten Elemente innerhalb des `<p>`-Elements aus.

Im folgenden Beispiel verwenden wir den universellen Selektor, um die Ränder auf allen Elementen zu entfernen. Anstatt des standardmäßigen Browserverhaltens, das Überschriften und Absätze mit Rändern versieht, ist alles eng beieinander.

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

Diese Art von Verhalten kann manchmal in "Reset-Stylesheets" gesehen werden, die alle Browser-Styles entfernen. Da der universelle Selektor globale Änderungen vornimmt, verwenden wir ihn für sehr spezifische Situationen, wie die unten beschriebene.

### Den universellen Selektor verwenden, um Ihre Selektoren leichter lesbar zu machen

Eine Verwendung des universellen Selektors besteht darin, Selektoren leichter lesbar und offensichtlicher in Bezug darauf, was sie tun, zu machen. Wenn wir beispielsweise alle Nachkommenelemente eines `<article>`-Elements auswählen wollten, die das erste Kind ihres Elternteils sind, einschließlich der direkten Kinder, und diese fett machen wollen, könnten wir die {{cssxref(":first-child")}}-Pseudoklasse verwenden. Wir werden mehr darüber in der Lektion über [Pseudoklassen und Pseudoelemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements) lernen:

```css
article :first-child {
  font-weight: bold;
}
```

Dieser Selektor könnte jedoch mit `article:first-child` verwechselt werden, was alle `<article>`-Elemente auswählt, die das erste Kind eines anderen Elements sind.

Um diese Verwirrung zu vermeiden, können wir den universellen Selektor zur `:first-child`-Pseudoklasse hinzufügen, sodass es offensichtlicher ist, was der Selektor tut. Er wählt _jedes_ Element, das das erste Kind eines `<article>`-Elements oder das erste Kind eines Nachkommenelements von `<article>` ist:

```css
article *:first-child {
  font-weight: bold;
}
```

Obwohl beide dasselbe tun, ist die Lesbarkeit erheblich verbessert.

## Zusammenfassung

In diesem Artikel haben wir CSS-Selektoren rekapituliert, mit denen Sie bestimmte HTML-Elemente anvisieren können, und haben Typ-, Klassen- und ID-Selektoren etwas genauer betrachtet als zuvor. Im nächsten Artikel werden wir uns mit Attributselektoren beschäftigen.

> [!NOTE]
> Für eine vollständige Liste der Selektoren siehe unser [CSS-Selektoren-Referenz](/de/docs/Web/CSS/CSS_selectors).

## Siehe auch

- [CSS-Klassen](https://scrimba.com/the-frontend-developer-career-path-c0j/~01d?via=mdn), Scrimba <sup>_MDN-Lernpartner_</sup>
  - : Eine interaktive Lektion, die einige Anleitungen zu CSS-Klassen bietet.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics")}}
