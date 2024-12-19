---
title: Grundlegende CSS-Selektoren
slug: Learn_web_development/Core/Styling_basics/Basic_selectors
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics")}}

Sie haben bereits gesehen, wie in {{Glossary("CSS", "CSS")}} Selektoren verwendet werden, um die {{Glossary("HTML", "HTML")}}-Elemente auf unseren Webseiten zu identifizieren, die wir stylen möchten. Es gibt eine Vielzahl von CSS-Selektoren, die eine sehr präzise Auswahl von Elementen ermöglichen, und in den nächsten Artikeln werden wir die verschiedenen Typen im Detail betrachten. In diesem Artikel fassen wir einige Grundlagen der Selektoren zusammen, einschließlich der grundlegenden Typ-, Klassen- und ID-Selektoren sowie Selektorlisten. Wir stellen auch den universellen Selektor vor.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Die grundlegenden Selektoren-Typen — Elementtyp, Klasse, ID.</li>
          <li>Verstehen, dass IDs pro Dokument einzigartig sind — Sie sollten eine ID verwenden, um ein bestimmtes Element auszuwählen.</li>
          <li>Verstehen, dass Sie mehrere Klassen pro Element haben können, und diese verwendet werden können, um Stile nach Bedarf hinzuzufügen.</li>
          <li>Selektorlisten.</li>
          <li>Universeller Selektor.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Selektor?

Ein CSS-Selektor ist der erste Teil einer CSS-Regel. Er ist ein Muster von Elementen und anderen Begriffen, die dem Browser mitteilen, welche HTML-Elemente ausgewählt werden sollen, damit die CSS-Eigenschaften innerhalb der Regel auf sie angewendet werden. Das oder die Elemente, die durch den Selektor ausgewählt werden, werden als _Subjekt des Selektors_ bezeichnet.

![Einige Codezeilen mit hervorgehobenem h1.](selector.png)

In früheren Artikeln haben Sie möglicherweise verschiedene Selektoren kennengelernt und erfahren, dass es Selektoren gibt, die das Dokument auf unterschiedliche Weise ansteuern — beispielsweise durch die Auswahl eines Elements wie `h1` oder einer Klasse wie `.special`. Beginnen wir mit einer Wiederholung der wichtigsten, die Sie bereits gesehen haben.

## Typselektoren

Ein **Typselektor** wird manchmal als _Tag-Namens-Selektor_ oder _Elementselektor_ bezeichnet, weil er ein HTML-Tag/Element in Ihrem Dokument auswählt. Im folgenden Beispiel haben wir die Selektoren `span`, `em` und `strong` verwendet.

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

Der klassenempfindliche Klassenselektor beginnt mit einem Punkt (`.`)-Zeichen. Er wählt alles im Dokument aus, dem diese Klasse zugewiesen wurde. Im folgenden Live-Beispiel haben wir eine Klasse namens `highlight` erstellt und sie an mehreren Stellen in meinem Dokument angewendet. Alle Elemente, die die Klasse zugewiesen haben, sind hervorgehoben.

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

### Klassen auf bestimmte Elemente zielen

Sie können einen Selektor erstellen, der bestimmte Elemente mit der zugewiesenen Klasse anpeilt. Im nächsten Beispiel werden wir ein `<span>` mit einer Klasse von `highlight` anders hervorheben als eine `<h1>`-Überschrift mit einer Klasse von `highlight`. Wir tun dies, indem wir den Typselektor für das Element, das wir anpeilen möchten, verwenden und die Klasse ohne Leerzeichen dazwischen anhängen.

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

Dieser Ansatz reduziert den Umfang einer Regel. Die Regel gilt nur in dieser spezifischen Element- und Klassenkombination. Sie müssten einen zusätzlichen Selektor hinzufügen, wenn Sie möchten, dass die Regel auch auf andere Elemente angewendet wird.

### Ein Element anpeilen, wenn mehr als eine Klasse zugewiesen ist

Sie können einem Element mehrere Klassen zuweisen und sie einzeln anpeilen oder nur das Element auswählen, wenn alle Klassen im Selektor vorhanden sind. Dies kann hilfreich sein, wenn Komponenten erstellt werden, die auf Ihrer Seite auf unterschiedliche Weise kombiniert werden können.

Im folgenden Beispiel haben wir ein `<div>`, das eine Notiz enthält. Der graue Rahmen wird angewendet, wenn die Box eine Klasse von `notebox` hat. Wenn es auch eine Klasse von `warning` oder `danger` hat, ändern wir die {{cssxref("border-color")}}.

Wir können dem Browser mitteilen, dass wir das Element nur dann ansprechen möchten, wenn ihm zwei Klassen zugewiesen sind, indem wir sie ohne Leerzeichen zwischen ihnen ketten. Sie werden sehen, dass das letzte `<div>` keine Stiländerung erhält, da es nur die Klasse `danger` hat; es benötigt auch `notebox`, damit etwas angewendet wird.

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

Der id-sensitieve ID-Selektor beginnt mit einem `#` statt mit einem Punkt-Zeichen, wird jedoch auf die gleiche Weise wie ein Klassenselektor verwendet. Der Unterschied besteht darin, dass eine ID nur einmal pro Seite verwendet werden kann und Elementen kann nur ein `id`-Wert zugewiesen werden. Er kann ein Element auswählen, das die `id` gesetzt hat, und Sie können der ID einen Typselektor voranstellen, um das Element nur dann zu benennen, wenn sowohl das Element als auch die ID übereinstimmen. In folgendem Beispiel sehen Sie beide Verwendungen:

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
> Die gleiche ID mehrmals in einem Dokument zu verwenden, mag für Styling-Zwecke funktionieren, aber tun Sie das nicht. Es führt zu ungültigem Code und wird in vielen Situationen zu seltsamem Verhalten führen.

## Selektorlisten

Wenn Sie mehr als ein Element haben, das denselben CSS verwendet, können die einzelnen Selektoren in eine _Selektorliste_ kombiniert werden, sodass die Regel auf alle einzelnen Selektoren angewendet wird. Zum Beispiel, wenn ich denselben CSS für ein `h1` und auch eine Klasse von `.special` habe, könnte ich dies als zwei separate Regeln schreiben.

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

Leerzeichen sind vor oder nach dem Komma gültig. Sie können auch feststellen, dass die Selektoren besser lesbar sind, wenn jeder Selektor in einer neuen Zeile steht.

```css
h1,
.special {
  color: blue;
}
```

Im folgenden Live-Beispiel versuchen Sie, die beiden Selektoren zu kombinieren, die identische Deklarationen haben. Die visuelle Darstellung sollte nach dem Kombinieren gleich bleiben.

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

Wenn Sie Selektoren auf diese Weise gruppieren, wird die gesamte Regel ignoriert, wenn ein beliebiger Selektor syntaktisch ungültig ist.

Im folgenden Beispiel wird die ungültige Klassenselektorregel ignoriert, während das `h1` trotzdem gestylt wird.

```css-nolint
h1 {
  color: blue;
}

..special {
  color: blue;
}
```

Wenn jedoch kombiniert, wird weder das `h1` noch die Klasse gestylt, da die gesamte Regel als ungültig betrachtet wird.

```css-nolint
h1, ..special {
  color: blue;
}
```

## Der universelle Selektor

Der universelle Selektor wird durch ein Sternchen (`*`) angezeigt. Er wählt alles im Dokument aus. Wenn `*` mit einem [Nachkommen-Kombinator](/de/docs/Web/CSS/Descendant_combinator) verkettet wird, wählt er alles innerhalb dieses Eltern-Elements aus. Zum Beispiel wählt `p *` alle verschachtelten Elemente innerhalb des `<p>`-Elements aus.

Im folgenden Beispiel verwenden wir den universellen Selektor, um die Ränder aller Elemente zu entfernen. Anstelle des Standardstylings des Browsers, das Überschriften und Absätze mit Rändern auseinandersetzt, ist alles eng zusammen.

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

Dieses Verhalten kann manchmal in "Reset-Stylesheets" gesehen werden, die das gesamte Browser-Styling entfernen. Da der universelle Selektor globale Änderungen vornimmt, verwenden wir ihn in sehr speziellen Situationen, wie der unten beschriebenen.

### Den universellen Selektor verwenden, um Ihre Selektoren einfacher lesbar zu machen

Eine Verwendung des universellen Selektors besteht darin, Selektoren einfacher lesbar und offensichtlicher zu machen, was sie tun. Zum Beispiel, wenn wir alle Nachkommenelemente eines `<article>`-Elements auswählen wollen, die das erste Kind ihres Elternteils sind, einschließlich direkter Kinder, und sie fett machen, könnten wir die {{cssxref(":first-child")}}-Pseudoklasse verwenden. Wir werden mehr darüber in der Lektion über [Pseudoklassen und Pseudoelemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements) lernen:

```css
article :first-child {
  font-weight: bold;
}
```

Dieser Selektor könnte jedoch mit `article:first-child` verwechselt werden, der jedes `<article>`-Element auswählt, das das erste Kind eines anderen Elements ist.

Um diese Verwirrung zu vermeiden, können wir den universellen Selektor zur `:first-child`-Pseudoklasse hinzufügen, damit deutlicher wird, was der Selektor tut. Er wählt _jedes_ Element aus, das das erste Kind eines `<article>`-Elements ist, oder das erste Kind eines beliebigen Nachkommenelements von `<article>`:

```css
article *:first-child {
  font-weight: bold;
}
```

Obwohl beide dasselbe tun, ist die Lesbarkeit erheblich verbessert.

## Zusammenfassung

In diesem Artikel haben wir CSS-Selektoren zusammengefasst, mit denen Sie bestimmte HTML-Elemente ansteuern können, und haben die Typ-, Klassen- und ID-Selektoren etwas eingehender betrachtet als zuvor. Im nächsten Artikel werden wir uns mit Attributselektoren befassen.

> [!NOTE]
> Eine vollständige Liste der Selektoren finden Sie in unserem [CSS-Selektoren-Referenz](/de/docs/Web/CSS/CSS_selectors).

## Siehe auch

- [CSS-Klassen](https://v2.scrimba.com/the-frontend-developer-career-path-c0j/~01d?via=mdn), Scrimba <sup>_MDN Curriculum Partner_</sup>
  - : Eine interaktive Lektion, die einige Hinweise zu CSS-Klassen bietet.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics")}}
