---
title: Grundlegende CSS-Selektoren
short-title: Grundlegende Selektoren
slug: Learn_web_development/Core/Styling_basics/Basic_selectors
l10n:
  sourceCommit: 6c58c5d4227a031105740b0e85acbc6178223d0a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics")}}

Sie haben bereits gesehen, wie in {{Glossary("CSS", "CSS")}} Selektoren verwendet werden, um die {{Glossary("HTML", "HTML")}}-Elemente auf unseren Webseiten zu identifizieren, die wir stylen möchten. Es gibt eine Vielzahl von CSS-Selektoren, die eine feingranulare Präzision beim Auswählen von Elementen zum Stylen ermöglichen. In den nächsten Artikeln werden wir die verschiedenen Typen im Detail betrachten. In diesem Artikel werden wir einige Grundlagen von Selektoren wiederholen, einschließlich der grundlegenden Typ-, Klassen- und ID-Selektoren sowie Selektorlisten. Wir werden auch den Universalselektor einführen.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die grundlegenden Selektortypen — Elementtyp, Klasse, ID.</li>
          <li>Verstehen, dass IDs pro Dokument eindeutig sind — Sie sollten eine ID verwenden, um ein spezifisches Element auszuwählen.</li>
          <li>Verstehen, dass Sie pro Element mehrere Klassen haben können, und diese können verwendet werden, um bei Bedarf Styles zu überlagern.</li>
          <li>Selektorlisten.</li>
          <li>Universalselektor.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Selektor?

Ein CSS-Selektor ist der erste Teil einer CSS-Regel. Es ist ein Muster aus Elementen und anderen Begriffen, die dem Browser mitteilen, welche HTML-Elemente ausgewählt werden sollen, um die CSS-Eigenschaftswerte innerhalb der Regel auf sie anzuwenden. Das oder die Elemente, die durch den Selektor ausgewählt werden, werden als das _Subjekt des Selektors_ bezeichnet.

![Einige Codes mit hervorgehobenem h1.](selector.png)

In früheren Artikeln haben Sie möglicherweise verschiedene Selektoren kennengelernt und erfahren, dass es Selektoren gibt, die das Dokument auf unterschiedliche Weise ansprechen — zum Beispiel, indem ein Element wie `h1` oder eine Klasse wie `.special` ausgewählt wird. Lassen Sie uns mit einer Wiederholung der wichtigsten Selektoren beginnen, die Sie bereits gesehen haben.

## Typselektoren

Ein **Typselektor** wird manchmal als _Tag-Name-Selektor_ oder _Elementselektor_ bezeichnet, da er ein HTML-Tag/Element in Ihrem Dokument auswählt. Im folgenden Beispiel haben wir die `span`, `em` und `strong` Selektoren verwendet.

Versuchen Sie, eine CSS-Regel hinzuzufügen, um das `<h1>`-Element auszuwählen und seine Farbe auf Blau zu ändern:

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

Der groß- und kleinschreibungssensitive Klassenselektor beginnt mit einem Punkt (`.`). Er wählt alles im Dokument aus, worauf diese Klasse angewendet wurde. Im untenstehenden Live-Beispiel haben wir eine Klasse namens `highlight` erstellt und sie an mehreren Stellen in meinem Dokument angewendet. Alle Elemente, auf die die Klasse angewendet wurde, sind hervorgehoben.

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

### Klassen auf bestimmten Elementen ansprechen

Sie können einen Selektor erstellen, der bestimmte Elemente mit der angewendeten Klasse anvisiert. Im nächsten Beispiel werden wir ein `<span>` mit einer Klasse `highlight` anders hervorheben als eine `<h1>`-Überschrift mit einer Klasse `highlight`. Dies erreichen wir, indem wir den Typselektor für das Element verwenden, das wir anvisieren möchten, wobei die Klasse ohne Leerzeichen dazwischen angehängt wird.

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

Dieser Ansatz reduziert den Anwendungsbereich einer Regel. Die Regel gilt nur für diese bestimmte Kombination von Element und Klasse. Sie müssten einen weiteren Selektor hinzufügen, wenn Sie entscheiden, dass die Regel auch auf andere Elemente angewendet werden soll.

### Ein Element anvisieren, wenn es mehr als eine Klasse hat

Sie können einem Element mehrere Klassen zuweisen und sie individuell anvisieren oder das Element nur auswählen, wenn in der Selektor alle Klassen vorhanden sind. Dies kann hilfreich sein, wenn Komponenten erstellt werden, die auf Ihrer Website in verschiedenen Kombinationen verwendet werden können.

Im Beispiel unten haben wir ein `<div>`, das eine Notiz enthält. Der graue Rahmen wird angewendet, wenn die Box eine Klasse `notebox` hat. Wenn es außerdem eine Klasse `warning` oder `danger` hat, ändern wir die {{cssxref("border-color")}}.

Wir können dem Browser mitteilen, dass das Element nur dann übereinstimmen soll, wenn zwei Klassen angewendet werden, indem wir sie ohne Leerzeichen dazwischen aneinanderreihen. Sie werden sehen, dass das letzte `<div>` keine Styles erhält, da es nur die Klasse `danger` besitzt; es benötigt auch `notebox`, damit etwas angewendet wird.

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

Der groß- und kleinschreibungssensitive ID-Selektor beginnt mit einem `#` statt mit einem Punkt, wird jedoch auf die gleiche Weise wie ein Klassenselektor verwendet. Der Unterschied besteht darin, dass eine ID nur einmal pro Seite verwendet werden kann und Elementen nur ein einzelner `id`-Wert zugewiesen werden kann. Er kann ein Element auswählen, das die `id` gesetzt hat, und Sie können die ID mit einem Typselektor kombinieren, um das Element nur dann anzusprechen, wenn sowohl das Element als auch die ID übereinstimmen. Sie können beide Anwendungen im folgenden Beispiel sehen:

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
> Dieselbe ID mehrmals in einem Dokument zu verwenden, mag für Styling-Zwecke funktionieren, aber tun Sie dies nicht. Es führt zu ungültigem Code und wird an vielen Stellen zu seltsamem Verhalten führen.

## Selektorlisten

Wenn Sie mehr als eine Sache haben, die dasselbe CSS verwendet, können die einzelnen Selektoren zu einer _Selektorliste_ kombiniert werden, sodass die Regel auf alle einzelnen Selektoren angewendet wird. Wenn ich zum Beispiel dasselbe CSS für ein `h1` und auch eine Klasse `.special` habe, könnte ich dies als zwei separate Regeln schreiben.

```css
h1 {
  color: blue;
}

.special {
  color: blue;
}
```

Ich könnte diese auch in einer Selektorliste kombinieren, indem ich ein Komma dazwischen setze.

```css-nolint
h1, .special {
  color: blue;
}
```

Leerzeichen sind vor oder nach dem Komma zulässig. Sie könnten die Selektoren auch lesbarer finden, wenn jeder in einer neuen Zeile steht.

```css
h1,
.special {
  color: blue;
}
```

Im untenstehenden Live-Beispiel versuchen Sie, die beiden Selektoren zu kombinieren, die identische Deklarationen haben. Die visuelle Darstellung sollte nach der Kombination gleich bleiben.

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

Wenn Sie Selektoren auf diese Weise gruppieren und ein Selektor syntaktisch ungültig ist, wird die gesamte Regel ignoriert.

Im folgenden Beispiel wird die ungültige Klassenselektorregel ignoriert, während das `h1` dennoch gestylt wird.

```css-nolint
h1 {
  color: blue;
}

..special {
  color: blue;
}
```

Bei der Kombination jedoch werden weder das `h1` noch die Klasse gestylt, da die gesamte Regel als ungültig betrachtet wird.

```css-nolint
h1, ..special {
  color: blue;
}
```

## Der Universalselektor

Der Universalselektor wird durch ein Sternchen (`*`) angezeigt. Er wählt alles im Dokument aus. Wenn `*` mit einem [Nachkommenkombinator](/de/docs/Web/CSS/Descendant_combinator) verkettet wird, wählt er alles innerhalb dieses Vorfahr-Elements aus. Zum Beispiel wählt `p *` alle verschachtelten Elemente innerhalb des `<p>`-Elements.

Im folgenden Beispiel verwenden wir den Universalselektor, um die Ränder aller Elemente zu entfernen. Anstelle des Standardstylings des Browsers, das Überschriften und Absätze mit Rändern auseinandersetzt, ist alles eng beieinander.

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

Dieses Verhalten kann manchmal in "Reset-Stylesheets" gesehen werden, die das gesamte Browser-Styling entfernen. Da der Universalselektor globale Änderungen vornimmt, verwenden wir ihn nur für sehr spezifische Situationen, wie die unten beschriebene.

### Verwenden des Universalselektors, um Ihre Selektoren leichter lesbar zu machen

Eine Verwendung des Universalselektors besteht darin, Selektoren leichter lesbar zu machen und deutlicher zu zeigen, was sie tun. Wenn wir beispielsweise alle Nachkommenelemente eines `<article>`-Elements auswählen wollten, die das erste Kind ihres Elternteils sind, einschließlich direkter Kinder, und sie fett machen wollten, könnten wir die {{cssxref(":first-child")}}-Pseudoklasse verwenden. Wir werden mehr darüber im Unterricht über [Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements) lernen:

```css
article :first-child {
  font-weight: bold;
}
```

Dieser Selektor könnte jedoch mit `article:first-child` verwechselt werden, was ein `<article>`-Element auswählt, das das erste Kind eines anderen Elements ist.

Um diese Verwirrung zu vermeiden, können wir den Universalselektor zur `:first-child`-Pseudoklasse hinzufügen, damit deutlicher wird, was der Selektor tut. Er wählt _jedes_ Element aus, das das erste Kind eines `<article>`-Elements ist oder das erste Kind eines jeden Nachkommenelements von `<article>`:

```css
article *:first-child {
  font-weight: bold;
}
```

Obwohl beide dasselbe tun, ist die Lesbarkeit erheblich verbessert.

## Zusammenfassung

In diesem Artikel haben wir CSS-Selektoren rekapituliert, die es Ihnen ermöglichen, bestimmte HTML-Elemente zu identifizieren, und Typ-, Klassen- und ID-Selektoren etwas genauer betrachtet als zuvor. Im nächsten Artikel werden wir uns mit Attributselektoren beschäftigen.

> [!NOTE]
> Für eine vollständige Liste der Selektoren siehe unser [Referenzdokument zu CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors).

## Siehe auch

- [CSS-Klassen](https://v2.scrimba.com/the-frontend-developer-career-path-c0j/~01d?via=mdn), Scrimba <sup>_MDN-Lernpartner_</sup>
  - : Eine interaktive Lektion, die einige Hinweise zu CSS-Klassen bietet.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics")}}
