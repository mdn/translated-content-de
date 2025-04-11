---
title: Grundlegende CSS-Selektoren
short-title: Grundlegende Selektoren
slug: Learn_web_development/Core/Styling_basics/Basic_selectors
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics")}}

Sie haben bereits gesehen, wie in {{Glossary("CSS", "CSS")}} Selektoren verwendet werden, um die {{Glossary("HTML", "HTML")}}-Elemente auf unseren Webseiten zu identifizieren, die wir stylen möchten. Es gibt eine Vielzahl von CSS-Selektoren, die eine feingranulare Präzision beim Auswählen von Elementen zum Stylen ermöglichen, und in den nächsten Artikeln werden wir die verschiedenen Typen eingehend betrachten. In diesem Artikel wiederholen wir einige Selektor-Grundlagen, einschließlich der grundlegenden Typ-, Klassen- und ID-Selektoren sowie Selektorlisten. Wir stellen auch den Universalselektor vor.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (studieren Sie
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
          <li>Verstehen, dass IDs pro Dokument eindeutig sind — Sie sollten eine ID verwenden, um ein bestimmtes Element auszuwählen.</li>
          <li>Verstehen, dass Sie mehrere Klassen pro Element haben können und diese verwendet werden können, um nach Bedarf Stile zu schichten.</li>
          <li>Selektorlisten.</li>
          <li>Universalselektor.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Selektor?

Ein CSS-Selektor ist der erste Teil einer CSS-Regel. Es ist ein Muster von Elementen und anderen Begriffen, die dem Browser mitteilen, welche HTML-Elemente ausgewählt werden sollen, um die CSS-Eigenschaftswerte innerhalb der Regel auf sie anzuwenden. Das oder die Elemente, die durch den Selektor ausgewählt werden, werden als das _Subjekt des Selektors_ bezeichnet.

![Einige Code mit hervorgehobenem h1.](selector.png)

In früheren Artikeln haben Sie möglicherweise einige verschiedene Selektoren kennengelernt, und erfahren, dass es Selektoren gibt, die das Dokument auf unterschiedliche Weise anpeilen — zum Beispiel durch Auswahl eines Elements wie `h1` oder einer Klasse wie `.special`. Beginnen wir mit einer Wiederholung der wichtigsten, die Sie bereits gesehen haben.

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

Der groß-/kleinschreibungsempfindliche Klassenselektor beginnt mit einem Punkt (`.`) Zeichen. Er wählt alles im Dokument aus, dem diese Klasse zugewiesen wurde. Im Live-Beispiel unten haben wir eine Klasse namens `highlight` erstellt und diese an mehreren Stellen in meinem Dokument angewendet. Alle Elemente, denen die Klasse zugewiesen wurde, sind hervorgehoben.

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

### Zielen auf Klassen bei bestimmten Elementen

Sie können einen Selektor erstellen, der bestimmte Elemente mit der angewendeten Klasse anvisiert. Im nächsten Beispiel werden wir ein `<span>` mit einer Klasse von `highlight` anders als ein `<h1>`-Überschrift mit einer Klasse von `highlight` hervorheben. Dies erreichen wir, indem wir den Typselektor für das Ziel-Element verwenden und die Klasse ohne Leerzeichen dazwischen anhängen.

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

Dieser Ansatz reduziert den Anwendungsbereich einer Regel. Die Regel wird nur auf diese bestimmte Element- und Klassenkombination angewendet. Sie müssten einen weiteren Selektor hinzufügen, wenn Sie entscheiden, dass die Regel auch auf andere Elemente angewendet werden sollte.

### Ein Element anvisieren, wenn mehr als eine Klasse angewendet wurde

Sie können einem Element mehrere Klassen zuweisen und diese einzeln anvisieren oder das Element nur auswählen, wenn alle Klassen im Selektor vorhanden sind. Dies kann hilfreich sein, wenn Sie Komponenten erstellen, die auf Ihrer Seite in verschiedenen Weisen kombiniert werden können.

Im folgenden Beispiel haben wir ein `<div>`, das eine Notiz enthält. Der graue Rahmen wird angewendet, wenn die Box eine Klasse von `notebox` hat. Wenn sie auch eine Klasse von `warning` oder `danger` hat, ändern wir die {{cssxref("border-color")}}.

Wir können dem Browser mitteilen, dass wir das Element nur dann übereinstimmen wollen, wenn zwei Klassen angewendet wurden, indem wir sie ohne Leerzeichen aneinanderreihen. Sie werden sehen, dass das letzte `<div>` keinen Stil erhält, da es nur die `danger` Klasse hat; es benötigt auch `notebox`, um irgendetwas angewendet zu bekommen.

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

Der groß-/kleinschreibungsempfindliche ID-Selektor beginnt mit einem `#` statt mit einem Punkt, wird aber auf die gleiche Weise wie ein Klassenselektor verwendet. Der Unterschied besteht darin, dass eine ID nur einmal pro Seite verwendet werden kann und Elementen nur ein einziger `id` Wert zugewiesen werden kann. Er kann ein Element auswählen, das die `id` darauf gesetzt hat, und Sie können die ID mit einem Typselektor voranstellen, um nur das Element zu zielen, wenn sowohl das Element als auch die ID übereinstimmen. Sie können beide Verwendungen im folgenden Beispiel sehen:

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
> Dieselbe ID mehrmals in einem Dokument zu verwenden, kann für Styling-Zwecke zu funktionieren scheinen, aber tun Sie dies nicht. Es führt zu ungültigem Code und wird in vielen Bereichen zu seltsamem Verhalten führen.

## Selektorlisten

Wenn Sie mehr als eine Sache haben, die dieselbe CSS verwendet, können die einzelnen Selektoren zu einer _Selektorliste_ kombiniert werden, so dass die Regel auf alle einzelnen Selektoren angewendet wird. Zum Beispiel, wenn ich dieselbe CSS für ein `h1` und auch eine Klasse von `.special` habe, könnte ich dies als zwei separate Regeln schreiben.

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

Leerzeichen vor oder nach dem Komma sind gültig. Sie könnten die Selektoren auch lesbarer finden, wenn jeder in einer neuen Zeile steht.

```css
h1,
.special {
  color: blue;
}
```

Im folgenden Live-Beispiel versuchen Sie, die beiden Selektoren zu kombinieren, die identische Deklarationen haben. Die visuelle Darstellung sollte nach dem Kombinieren dieselbe sein.

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

Im folgenden Beispiel wird die ungültige Klassenselektoren-Regel ignoriert, während das `h1` weiterhin gestylt wird.

```css-nolint
h1 {
  color: blue;
}

..special {
  color: blue;
}
```

Wenn jedoch kombiniert, werden weder das `h1` noch die Klasse gestylt, da die gesamte Regel als ungültig betrachtet wird.

```css-nolint
h1, ..special {
  color: blue;
}
```

## Der Universalselektor

Der Universalselektor wird durch ein Sternchen (`*`) angezeigt. Er wählt alles im Dokument aus. Wenn `*` mit einem [Nachfahrkombinator](/de/docs/Web/CSS/Descendant_combinator) verkettet ist, wählt es alles innerhalb dieses Vorfahren-Elements aus. Zum Beispiel wählt `p *` alle verschachtelten Elemente innerhalb des `<p>`-Elements aus.

Im folgenden Beispiel verwenden wir den Universalselektor, um die Ränder an allen Elementen zu entfernen. Anstatt der Standard-Stilvorgabe des Browsers, die Überschriften und Absätze mit Rändern voneinander trennt, ist alles dicht beieinander.

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

Dieses Verhalten kann manchmal in "Reset-Stylesheets" gesehen werden, die alle Browser-Stilvorgaben entfernen. Da der Universalselektor globale Änderungen vornimmt, verwenden wir ihn für sehr spezifische Situationen, wie die unten beschriebene.

### Den Universalselektor verwenden, um Ihre Selektoren lesbarer zu machen

Ein Verwendungszweck des Universalselektors ist es, Selektoren lesbarer und offensichtlicher in Bezug darauf zu machen, was sie tun. Wenn wir beispielsweise alle Nachfahrelemente eines `<article>`-Elements auswählen möchten, die das erste Kind ihres Elternteils sind, einschließlich direkter Kinder, und sie fett darstellen möchten, könnten wir die {{cssxref(":first-child")}}-Pseudo-Klasse verwenden. Darüber werden wir mehr in der Lektion über [Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements) lernen:

```css
article :first-child {
  font-weight: bold;
}
```

Dieser Selektor könnte jedoch mit `article:first-child` verwechselt werden, was jedes `<article>`-Element auswählen wird, das das erste Kind eines anderen Elements ist.

Um diese Verwirrung zu vermeiden, können wir den Universalselektor zur `:first-child`-Pseudo-Klasse hinzufügen, so dass es offensichtlicher ist, was der Selektor tut. Er wählt _jedes_ Element, das das erste Kind eines `<article>`-Elements ist, oder das erste Kind eines Nachfahr-Elements des `<article>`:

```css
article *:first-child {
  font-weight: bold;
}
```

Obwohl beide dasselbe tun, ist die Lesbarkeit deutlich verbessert.

## Zusammenfassung

In diesem Artikel haben wir CSS-Selektoren wiederholt, die es Ihnen ermöglichen, bestimmte HTML-Elemente auszuwählen, und wir haben uns die Typ-, Klassen- und ID-Selektoren ein wenig tiefer angesehen als zuvor. Im nächsten Artikel werden wir uns Attributselektoren widmen.

> [!NOTE]
> Eine vollständige Liste der Selektoren finden Sie in unserem [CSS-Selektoren-Referenz](/de/docs/Web/CSS/CSS_selectors).

## Siehe auch

- [CSS-Klassen](https://scrimba.com/the-frontend-developer-career-path-c0j/~01d?via=mdn), Scrimba <sup>_MDN learning partner_</sup>
  - : Eine interaktive Lektion, die einige Anleitung zu CSS-Klassen bietet.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics")}}
