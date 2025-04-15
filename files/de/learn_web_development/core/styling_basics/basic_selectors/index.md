---
title: Grundlegende CSS-Selektoren
short-title: Grundlegende Selektoren
slug: Learn_web_development/Core/Styling_basics/Basic_selectors
l10n:
  sourceCommit: 427efbee9e0da53517f45420af87a66a2a6b6e19
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics")}}

Sie haben bereits gesehen, wie in {{Glossary("CSS", "CSS")}} Selektoren verwendet werden, um die {{Glossary("HTML", "HTML")}}-Elemente auf unseren Webseiten zu identifizieren, die wir gestalten möchten. Es gibt eine Vielzahl von CSS-Selektoren, die eine feinkörnige Präzision beim Auswählen der zu gestaltenden Elemente ermöglichen. In den nächsten Artikeln werden wir uns eingehend mit den verschiedenen Typen befassen. In diesem Artikel wiederholen wir einige Grundlagen der Selektoren, einschließlich der grundlegenden Typen-, Klassen- und ID-Selektoren sowie Selektorenlisten. Wir führen auch den universellen Selektor ein.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundkenntnisse in HTML (studieren Sie
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
          <li>Verstehen, dass Sie einem Element mehrere Klassen zuweisen können, und diese verwendet werden können, um bei Bedarf Stile zu schichten.</li>
          <li>Selektorenlisten.</li>
          <li>Universeller Selektor.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Selektor?

Ein CSS-Selektor ist der erste Teil einer CSS-Regel. Es ist ein Muster von Elementen und anderen Begriffen, das dem Browser mitteilt, welche HTML-Elemente ausgewählt werden sollen, damit die CSS-Eigenschaftswerte innerhalb der Regel auf sie angewendet werden. Das oder die Elemente, die vom Selektor ausgewählt werden, werden als das _Subjekt des Selektors_ bezeichnet.

![Einige Codes mit dem markierten h1.](selector.png)

In früheren Artikeln haben Sie möglicherweise einige verschiedene Selektoren kennengelernt und erfahren, dass es Selektoren gibt, die das Dokument auf unterschiedliche Weise anvisieren – zum Beispiel durch die Auswahl eines Elements wie `h1` oder einer Klasse wie `.special`. Lassen Sie uns mit einer Wiederholung der Hauptselektoren beginnen, die Sie bereits gesehen haben.

## Typselektoren

Ein **Typselektor** wird manchmal als _Tagname-Selektor_ oder _Elementselektor_ bezeichnet, da er ein HTML-Tag/Element in Ihrem Dokument auswählt. Im folgenden Beispiel haben wir die Selektoren `span`, `em` und `strong` verwendet.

Versuchen Sie, eine CSS-Regel hinzuzufügen, um das `<h1>`-Element auszuwählen und dessen Farbe in Blau zu ändern:

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

Der groß-/kleinschreibungssensitive Klassenselektor beginnt mit einem Punkt (`.`). Er wählt alles im Dokument aus, auf das diese Klasse angewendet wurde. Im folgenden Beispiel haben wir eine Klasse namens `highlight` erstellt und sie an mehreren Stellen in meinem Dokument angewendet. Alle Elemente, auf die die Klasse angewendet wurde, werden hervorgehoben.

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

### Anvisieren von Klassen auf bestimmten Elementen

Sie können einen Selektor erstellen, der gezielt bestimmte Elemente mit der angewendeten Klasse anvisiert. In diesem nächsten Beispiel werden wir ein `<span>` mit einer Klasse von `highlight` anders hervorheben als eine `<h1>`-Überschrift mit einer Klasse von `highlight`. Wir tun dies, indem wir den Typselektor für das gewünschte Element verwenden und die Klasse ohne Leerzeichen angehängt wird.

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

Diese Vorgehensweise reduziert den Geltungsbereich einer Regel. Die Regel wird nur auf diese spezifische Element- und Klassenkombination angewendet. Sie müssten einen weiteren Selektor hinzufügen, wenn Sie entscheiden, dass die Regel auch auf andere Elemente angewendet werden soll.

### Ein Element nur anvisieren, wenn es mehr als eine Klasse hat

Sie können einem Element mehrere Klassen zuweisen und sie individuell anvisieren oder das Element nur auswählen, wenn alle im Selektor angegebenen Klassen vorhanden sind. Dies kann hilfreich sein, wenn Sie Komponenten erstellen, die auf Ihrer Seite in unterschiedlichen Kombinationen verwendet werden können.

Im folgenden Beispiel haben wir ein `<div>`, das eine Notiz enthält. Der graue Rahmen wird angewendet, wenn die Box eine Klasse von `notebox` hat. Wenn sie auch eine Klasse von `warning` oder `danger` hat, ändern wir die {{cssxref("border-color")}}.

Wir können dem Browser mitteilen, dass wir das Element nur dann auswählen möchten, wenn zwei Klassen angewendet wurden, indem wir sie ohne Leerzeichen miteinander verketten. Sie werden sehen, dass das letzte `<div>` keine Stile angewendet bekommen hat, da es nur die Klasse `danger` hat; es benötigt ebenfalls `notebox`, um eine Anwendung zu erhalten.

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

Der groß-/kleinschreibungssensitive ID-Selektor beginnt mit einem `#` anstelle eines Punktes und wird auf dieselbe Weise wie ein Klassenselektor verwendet. Der Unterschied besteht darin, dass eine ID nur einmal pro Seite verwendet werden kann und Elemente nur einen einzigen `id`-Wert zugewiesen bekommen können. Es kann ein Element ausgewählt werden, das mit der `id` versehen ist, und Sie können der ID einen Typselektor voranstellen, um nur das Element anzusprechen, wenn sowohl das Element als auch die ID übereinstimmen. Sie können beide Verwendungen im folgenden Beispiel sehen:

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
> Für Stylingzwecke mag es funktionieren, dieselbe ID mehrfach in einem Dokument zu verwenden, aber tun Sie das nicht. Es führt zu ungültigem Code und kann in vielen Bereichen zu seltsamem Verhalten führen.

## Selektorenlisten

Wenn Sie mehr als eine Sache haben, die denselben CSS verwenden, können die einzelnen Selektoren zu einer _Selektorenliste_ kombiniert werden, sodass die Regel auf alle einzelnen Selektoren angewendet wird. Zum Beispiel, wenn ich denselben CSS für ein `h1` und auch eine Klasse namens `.special` habe, könnte ich dies als zwei separate Regeln schreiben.

```css
h1 {
  color: blue;
}

.special {
  color: blue;
}
```

Ich könnte diese auch in eine Selektorenliste kombinieren, indem ich ein Komma dazwischen setze.

```css-nolint
h1, .special {
  color: blue;
}
```

Leerzeichen sind vor oder nach dem Komma gültig. Sie können die Selektoren auch besser lesbar machen, wenn jeder in einer neuen Zeile steht.

```css
h1,
.special {
  color: blue;
}
```

Im folgenden Live-Beispiel versuchen Sie, die beiden Selektoren zu kombinieren, die identische Deklarationen haben. Die visuelle Darstellung sollte gleich bleiben, nachdem Sie sie kombiniert haben.

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

Wenn Sie Selektoren auf diese Weise gruppieren, wird die gesamte Regel ignoriert, wenn ein selektor syntaktisch ungültig ist.

Im folgenden Beispiel wird die ungültige Klassenselektorregel ignoriert, während das `h1` dennoch gestaltet wird.

```css-nolint
h1 {
  color: blue;
}

..special {
  color: blue;
}
```

Wenn sie jedoch kombiniert werden, wird weder das `h1` noch die Klasse gestaltet, da die gesamte Regel als ungültig angesehen wird.

```css-nolint
h1, ..special {
  color: blue;
}
```

## Der universelle Selektor

Der universelle Selektor wird durch ein Sternchen (`*`) angezeigt. Es wählt alles im Dokument aus. Wenn `*` mit einem [Nachfahren-Kombinator](/de/docs/Web/CSS/Descendant_combinator) verknüpft wird, wählt es alles in jenem Übergeordnetelement aus. Zum Beispiel wählt `p *` alle verschachtelten Elemente innerhalb des `<p>`-Elements aus.

Im folgenden Beispiel verwenden wir den universellen Selektor, um die Ränder aller Elemente zu entfernen. Anstatt des Standardstylings des Browsers, das Überschriften und Absätze mit Rändern voneinander trennt, ist alles nah beieinander.

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

Solches Verhalten kann manchmal in "Zurücksetzen von Stylesheets" gesehen werden, die alle Browser-Styling entfernen. Da der universelle Selektor globale Änderungen vornimmt, verwenden wir ihn für sehr spezifische Situationen, wie die unten beschriebene.

### Verwendung des universellen Selektors zur Verbesserung der Lesbarkeit Ihrer Selektoren

Eine Verwendung des universellen Selektors besteht darin, Selektoren einfacher lesbar und offensichtlicher zu machen, was sie tun. Zum Beispiel, wenn wir alle Nachfahren-Elemente eines `<article>`-Elements auswählen möchten, die das erste Kind ihres Elternteils sind, einschließlich direkter Kinder, und sie fett machen, könnten wir die {{cssxref(":first-child")}} Pseudo-Klasse verwenden. Wir werden mehr darüber in der Lektion über [Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements) lernen:

```css
article :first-child {
  font-weight: bold;
}
```

Dieser Selektor könnte jedoch mit `article:first-child` verwechselt werden, der jedes `<article>`-Element auswählt, das das erste Kind eines anderen Elements ist.

Um diese Verwirrung zu vermeiden, können wir den universellen Selektor zur `:first-child` Pseudo-Klasse hinzufügen, damit klarer wird, was der Selektor tut. Er wählt _jedes_ Element aus, das das erste Kind eines `<article>`-Elements ist, oder das erste Kind eines Nachfahrenelements von `<article>`:

```css
article *:first-child {
  font-weight: bold;
}
```

Obwohl beide dasselbe tun, ist die Lesbarkeit erheblich verbessert.

## Zusammenfassung

In diesem Artikel haben wir CSS-Selektoren wiederholt, die es Ihnen ermöglichen, bestimmte HTML-Elemente anzusprechen, wobei wir Typ-, Klassen- und ID-Selektoren etwas detaillierter betrachten als zuvor. Im nächsten Artikel werden wir uns eingehend mit Attributselektoren befassen.

> [!NOTE]
> Eine vollständige Liste der Selektoren finden Sie in unserem [CSS-Selektoren-Referenz](/de/docs/Web/CSS/CSS_selectors).

## Siehe auch

- [CSS-Klassen](https://scrimba.com/the-frontend-developer-career-path-c0j/~01d?via=mdn), Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Eine interaktive Lektion, die einige Anleitungen zu CSS-Klassen bietet.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics")}}
