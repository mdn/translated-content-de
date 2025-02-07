---
title: Grundlagen der CSS-Selektoren
slug: Learn_web_development/Core/Styling_basics/Basic_selectors
l10n:
  sourceCommit: 07d0f18e4b2ad43185bcc98ce99b7080c6411b2a
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics")}}

Sie haben bereits gesehen, wie Selektoren in {{Glossary("CSS", "CSS")}} verwendet werden, um die {{Glossary("HTML", "HTML")}}-Elemente auf unseren Webseiten zu bestimmen, die wir stylen möchten. Es gibt eine Vielzahl von CSS-Selektoren, die eine feingranulare Auswahl ermöglichen, und in den nächsten Artikeln werden wir die verschiedenen Typen ausführlich betrachten. In diesem Artikel fassen wir einige Grundlagen von Selektoren zusammen, einschließlich der grundlegenden Typ-, Klassen- und ID-Selektoren sowie Selektorenlisten. Wir führen auch den universellen Selektor ein.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (lernen Sie
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
          <li>Verstehen, dass IDs pro Dokument eindeutig sind — Sie sollten eine ID verwenden, um ein spezifisches Element auszuwählen.</li>
          <li>Verstehen, dass ein Element mehrere Klassen haben kann, die verwendet werden können, um bei Bedarf Styles zu kombinieren.</li>
          <li>Selektorenlisten.</li>
          <li>Universeller Selektor.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Selektor?

Ein CSS-Selektor ist der erste Teil einer CSS-Regel. Es handelt sich um ein Muster aus Elementen und anderen Begriffen, die dem Browser mitteilen, welche HTML-Elemente ausgewählt werden sollen, um die CSS-Eigenschaften der Regel auf sie anzuwenden. Das Element oder die Elemente, die durch den Selektor ausgewählt werden, werden als das _Subjekt des Selektors_ bezeichnet.

![Ein Code mit hervorgehobener h1-Markierung.](selector.png)

In früheren Artikeln haben Sie möglicherweise unterschiedliche Selektoren kennengelernt und erfahren, dass es Selektoren gibt, die das Dokument auf verschiedene Weise ansprechen können — beispielsweise durch die Auswahl eines Elements wie `h1` oder einer Klasse wie `.special`. Beginnen wir mit einer Wiederholung der Hauptselektoren, die Sie bereits gesehen haben.

## Typ-Selektoren

Ein **Typ-Selektor** wird manchmal auch als _Tag-Name-Selektor_ oder _Element-Selektor_ bezeichnet, da er ein HTML-Tag/Element in Ihrem Dokument auswählt. Im folgenden Beispiel haben wir die Selektoren `span`, `em` und `strong` verwendet.

Versuchen Sie, eine CSS-Regel zu erstellen, um das `<h1>`-Element auszuwählen und dessen Farbe auf Blau zu ändern:

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

## Klassen-Selektoren

Der klassenabhängige Klassen-Selektor beginnt mit einem Punkt (`.`). Er wählt alles im Dokument aus, dem die Klasse zugewiesen wurde. Im unten stehenden Live-Beispiel haben wir eine Klasse namens `highlight` erstellt und sie an mehreren Stellen im Dokument angewendet. Alle Elemente, die die Klasse anwenden, sind hervorgehoben.

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

### Klassen bei bestimmten Elementen ansprechen

Sie können einen Selektor erstellen, der bestimmte Elemente mit einer zugewiesenen Klasse anspricht. Im folgenden Beispiel werden wir ein `<span>` mit einer Klasse `highlight` anders hervorheben als eine `<h1>`-Überschrift mit derselben Klasse. Dies erreichen wir, indem wir den Typ-Selektor für das gewünschte Element verwenden und die Klasse mit einem Punkt anhängen, ohne Leerzeichen dazwischen.

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

Dieser Ansatz reduziert den Anwendungsbereich einer Regel. Die Regel gilt nur für die spezifische Kombination aus Element und Klasse. Sie müssen einen weiteren Selektor hinzufügen, wenn die Regel auch für andere Elemente gelten soll.

### Ein Element ansprechen, wenn mehrere Klassen angewendet sind

Sie können einem Element mehrere Klassen zuweisen und sie einzeln ansprechen oder das Element nur auswählen, wenn alle im Selektor angegebenen Klassen vorhanden sind. Dies kann beim Aufbau von Komponenten hilfreich sein, die auf Ihrer Website unterschiedlich kombiniert werden können.

Im folgenden Beispiel haben wir ein `<div>`, das eine Notiz enthält. Der graue Rahmen wird angewendet, wenn das Kästchen die Klasse `notebox` besitzt. Wenn es zusätzlich eine Klasse `warning` oder `danger` hat, ändern wir die {{cssxref("border-color")}}.

Wir können dem Browser mitteilen, dass wir das Element nur dann auswählen wollen, wenn zwei Klassen angewendet werden, indem wir sie ohne Leerzeichen aneinanderreihen. Sie werden feststellen, dass das letzte `<div>` keine Styles erhält, da es nur die Klasse `danger` hat; für eine Anwendung muss es auch die Klasse `notebox` haben.

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

Der klassenabhängige ID-Selektor beginnt mit einem `#` statt mit einem Punkt, wird jedoch genauso verwendet wie ein Klassen-Selektor. Der Unterschied besteht darin, dass eine ID nur einmal pro Seite verwendet werden darf und Elemente nur einen `id`-Wert haben können. Es kann ein Element auswählen, dem die `id` zugewiesen wurde, und Sie können die ID mit einem Typ-Selektor voranstellen, um das Element nur auszuwählen, wenn sowohl das Element als auch die ID übereinstimmen. Sie können beide Anwendungsfälle im folgenden Beispiel sehen:

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
> Die mehrfache Verwendung derselben ID in einem Dokument mag für Styling-Zwecke funktionieren, aber tun Sie dies nicht. Es führt zu ungültigem Code und kann in vielen Bereichen zu seltsamem Verhalten führen.

## Selektorenlisten

Wenn Sie mehr als eine Sache haben, die dieselben CSS-Styles verwendet, können die individuellen Selektoren zu einer _Selektorenliste_ kombiniert werden, sodass die Regel auf alle einzelnen Selektoren angewendet wird. Wenn ich beispielsweise dasselbe CSS für ein `h1` und eine Klasse `.special` habe, könnte ich dies als zwei separate Regeln schreiben.

```css
h1 {
  color: blue;
}

.special {
  color: blue;
}
```

Ich könnte sie aber auch zu einer Selektorenliste kombinieren, indem ich ein Komma dazwischen setze.

```css-nolint
h1, .special {
  color: blue;
}
```

Leerzeichen vor oder nach dem Komma sind gültig. Außerdem können die Selektoren lesbarer sein, wenn jeder auf einer neuen Zeile steht.

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

Wenn Sie Selektoren auf diese Weise gruppieren, wird die gesamte Regel ignoriert, wenn einer der Selektoren syntaktisch ungültig ist.

Im folgenden Beispiel wird die ungültige Regeln für Klassen-Selektoren ignoriert, während das `h1` weiterhin gestylt wird.

```css-nolint
h1 {
  color: blue;
}

..special {
  color: blue;
}
```

Wenn sie jedoch kombiniert sind, werden weder `h1` noch die Klasse gestylt, da die gesamte Regel als ungültig betrachtet wird.

```css-nolint
h1, ..special {
  color: blue;
}
```

## Der universelle Selektor

Der universelle Selektor wird durch ein Sternchen (`*`) dargestellt. Er wählt alles im Dokument aus. Wenn `*` mit einem [Nachkommenkombinator](/de/docs/Web/CSS/Descendant_combinator) verkettet wird, wählt er alles innerhalb des übergeordneten Elements aus. Zum Beispiel, `p *` wählt alle verschachtelten Elemente innerhalb des `<p>`-Elements aus.

Im folgenden Beispiel verwenden wir den universellen Selektor, um die Ränder aller Elemente zu entfernen. Statt des Standardstylings des Browsers, das Überschriften und Absätze mit Rändern versieht, ist alles zusammengedrängt.

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

Dieses Verhalten ist manchmal in "Reset-Stylesheets" zu sehen, die das gesamte Browser-Standardstyling entfernen. Da der universelle Selektor globale Änderungen vornimmt, verwenden wir ihn nur in sehr spezifischen Situationen, wie im unten beschriebenen Fall.

### Verwendung des universellen Selektors, um Ihre Selektoren lesbarer zu machen

Ein Anwendungsfall für den universellen Selektor ist, Selektoren lesbarer und offensichtlicher zu machen. Wenn wir beispielsweise Nachkommenelemente eines `<article>`-Elements auswählen wollten, die das erste Kind ihres Elternteils sind, einschließlich direkter Kinder, könnten wir die {{cssxref(":first-child")}} Pseudo-Klasse verwenden. Mehr dazu lernen wir in der Lektion über [Pseudoklassen und Pseudoelemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements):

```css
article :first-child {
  font-weight: bold;
}
```

Dieser Selektor könnte jedoch mit `article:first-child` verwechselt werden, das jedes `<article>`-Element auswählt, das das erste Kind eines anderen Elements ist.

Um diese Verwirrung zu vermeiden, können wir den universellen Selektor zur `:first-child`-Pseudo-Klasse hinzufügen, sodass deutlicher wird, was der Selektor tut. Er wählt _jedes_ Element, das das erste Kind eines `<article>`-Elements ist, oder das erste Kind eines beliebigen Nachkommen eines `<article>`-Elements:

```css
article *:first-child {
  font-weight: bold;
}
```

Obwohl beide dieselbe Funktion erfüllen, ist die Lesbarkeit deutlich verbessert.

## Zusammenfassung

In diesem Artikel haben wir CSS-Selektoren wiederholt, die es Ihnen ermöglichen, bestimmte HTML-Elemente anzusprechen, und die Typ-, Klassen- und ID-Selektoren etwas detaillierter betrachtet als zuvor. Im nächsten Artikel tauchen wir in Attribut-Selektoren ein.

> [!NOTE]
> Für eine vollständige Liste von Selektoren siehe unsere [CSS-Selektoren-Referenz](/de/docs/Web/CSS/CSS_selectors).

## Siehe auch

- [CSS-Klassen](https://v2.scrimba.com/the-frontend-developer-career-path-c0j/~01d?via=mdn), Scrimba <sup>_MDN-Lernpartner_</sup>
  - : Eine interaktive Lektion, die einige Anleitungen zu CSS-Klassen bietet.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics")}}
