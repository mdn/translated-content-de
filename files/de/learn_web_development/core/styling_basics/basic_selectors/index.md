---
title: Grundlegende CSS-Selektoren
short-title: Grundlegende Selektoren
slug: Learn_web_development/Core/Styling_basics/Basic_selectors
l10n:
  sourceCommit: 2530db14de9ac226cf06f84540fa0101e804ca9b
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics")}}

Sie haben bereits gesehen, wie in {{Glossary("CSS", "CSS")}} Selektoren genutzt werden, um die {{Glossary("HTML", "HTML")}}-Elemente auf unseren Webseiten zu zielen, die wir stylen möchten. Es gibt eine Vielzahl von CSS-Selektoren, die eine feine Präzision beim Auswählen von Elementen ermöglichen. In den nächsten Artikeln werden wir einen genaueren Blick auf die verschiedenen Typen werfen. In diesem Artikel werden wir einige grundlegende Selektoren wiederholen, einschließlich der basistypischen, Klassen- und ID-Selektoren und Selektorlisten. Wir werden auch den Universalselektor vorstellen.

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
          <li>Verstehen, dass IDs pro Dokument einzigartig sind — Sie sollten eine ID verwenden, um ein spezifisches Element auszuwählen.</li>
          <li>Verstehen, dass Sie mehrere Klassen pro Element haben können, die verwendet werden können, um Stile bei Bedarf zu kombinieren.</li>
          <li>Selektorlisten.</li>
          <li>Universalselektor.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Selektor?

Ein CSS-Selektor ist der erste Teil einer CSS-Regel. Es ist ein Muster von Elementen und anderen Begriffen, die dem Browser mitteilen, welche HTML-Elemente ausgewählt werden sollen, damit die CSS-Property-Werte innerhalb der Regel auf sie angewendet werden. Das oder die Elemente, die vom Selektor ausgewählt werden, werden als _Subjekt des Selektors_ bezeichnet.

![Einige Code mit dem h1 hervorgehoben.](selector.png)

In früheren Artikeln sind Ihnen möglicherweise einige verschiedene Selektoren begegnet, und Sie haben gelernt, dass es Selektoren gibt, die das Dokument auf unterschiedliche Weise anvisieren — zum Beispiel durch Auswahl eines Elements wie `h1` oder einer Klasse wie `.special`. Beginnen wir mit einer Zusammenfassung der wichtigsten, die Sie bereits gesehen haben.

## Typselektoren

Ein **Typselektor** wird manchmal als _Tagname-Selektor_ oder _Elementselektor_ bezeichnet, weil er ein HTML-Tag/Element in Ihrem Dokument auswählt. Im untenstehenden Beispiel haben wir die Selektoren `span`, `em` und `strong` verwendet.

Versuchen Sie, das folgende Beispiel zu bearbeiten (klicken Sie auf **"Play"** im MDN Playground), um eine CSS-Regel hinzuzufügen, die das `<h1>`-Element auswählt und seine Farbe auf Blau ändert:

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

Der groß-/kleinschreibungsempfindliche Klassenselektor beginnt mit einem Punktzeichen (`.`). Er wird alles im Dokument auswählen, auf das diese Klasse angewendet wurde. Im Live-Beispiel unten haben wir eine Klasse namens `highlight` erstellt und sie an mehreren Stellen in meinem Dokument angewendet. Alle Elemente, die die Klasse haben, werden hervorgehoben.

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

1. Bearbeiten Sie das HTML, um den Inhalt zu ändern, auf den die `.highlight`-Stile angewendet werden. Sie könnten beispielsweise einige `<span>`-Elemente hinzufügen, um verschiedene Teile des bestehenden Inhalts zu umwickeln und die `highlight`-Klasse darauf anzuwenden, einige bestehende `highlight`-Klassen zu entfernen oder neuen Inhalt hinzuzufügen, auf den die `highlight`-Klasse angewendet wird.
2. Bearbeiten Sie das CSS, um die Deklarationen innerhalb der `.highlight` Regel zu ändern, neue hinzuzufügen, wenn Sie möchten, und beachten Sie, wie sich dies auf das Styling aller Elemente auswirkt, die die `highlight`-Klasse haben.
3. Erstellen Sie eine neue Klassenregel innerhalb des CSS mit anderen Deklarationen (z.B. mit einem Selektor von `.highlight2`), und versuchen Sie dann, diese auf einige Ihrer HTML-Elemente anzuwenden.

### Zielen auf Klassen bei bestimmten Elementen

Sie können einen Selektor erstellen, der bestimmte Elemente mit der angewendeten Klasse anvisiert. In diesem nächsten Beispiel werden wir ein `<span>` mit einer Klasse von `highlight` anders hervorheben als ein `<h1>` Überschrift mit einer Klasse von `highlight`. Wir tun dies, indem wir den Typselektor für das Element, das wir anvisieren möchten, verwenden, mit der Klasse, die mit einem Punkt angefügt wird, ohne dazwischenliegenden Leerraum.

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

Dieser Ansatz reduziert den Anwendungsbereich einer Regel. Die Regel wird nur für die spezifische Element- und Klassenkombination gelten. Sie müssten einen weiteren Selektor hinzufügen, wenn Sie entscheiden sollten, dass die Regel auch für andere Elemente gelten sollte.

### Ein Element anvisieren, wenn mehr als eine Klasse angewendet wird

Sie können mehreren Klassen ein Element zuordnen und diese einzeln anvisieren, oder das Element nur auswählen, wenn alle in dem Selektor vorhandenen Klassen vorhanden sind. Dies kann nützlich sein, wenn man Komponenten erstellt, die auf unterschiedliche Weise auf Ihrer Seite kombiniert werden können.

Im folgenden Beispiel haben wir ein `<div>`, das eine Notiz enthält. Der graue Rand wird angewendet, wenn die Box eine Klasse von `notebox` hat. Wenn sie auch eine Klasse von `warning` oder `danger` hat, ändern wir die {{cssxref("border-color")}}.

Wir können dem Browser sagen, dass wir das Element nur dann übereinstimmen wollen, wenn zwei Klassen angewendet werden, indem wir sie ohne Leerzeichen dazwischen verketten. Sie werden sehen, dass das letzte `<div>` keine Styling-Anwendung erhält, da es nur die `danger`-Klasse hat; es benötigt auch `notebox`, um irgendetwas angewendet zu bekommen.

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

Der groß-/kleinschreibungsempfindliche ID-Selektor beginnt mit einem `#` statt mit einem Punktzeichen, wird jedoch genauso wie ein Klassenselektor verwendet. Der Unterschied besteht darin, dass eine ID nur einmal pro Seite verwendet werden kann und Elemente nur einen einzelnen `id`-Wert haben können. Ein Element, das mit der ID versehen ist, kann ausgewählt werden, und Sie können die ID mit einem Typselektor voranstellen, um nur das Element zu anzusprechen, wenn sowohl das Element als auch die ID übereinstimmen. Sie können beide Verwendungen im folgenden Beispiel sehen:

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
> Die Verwendung der gleichen ID mehrmals in einem Dokument mag für Styling-Zwecke funktionieren, aber tun Sie dies nicht. Es führt zu ungültigem Code und wird seltsames Verhalten in vielen Bereichen verursachen.

### Spielen mit ID-Selektoren

Versuchen Sie, das obige Beispiel zu bearbeiten, um die folgenden Änderungen vorzunehmen:

1. Bearbeiten Sie das HTML, um die `#one`-Stile auf den ersten Absatz anstatt auf den zweiten anzuwenden.
2. Bearbeiten Sie das CSS, um die Deklarationen innerhalb der ID-Selektoren zu ändern und beachten Sie, wie sich dies auf das Erscheinungsbild des HTML auswirkt.

## Selektorlisten

Wenn Sie mehr als eine Sache haben, die die gleiche CSS verwendet, können die einzelnen Selektoren in eine _Selektorliste_ kombiniert werden, sodass die Regel auf alle einzelnen Selektoren angewendet wird. Zum Beispiel, wenn ich die gleiche CSS für eine `h1` und auch eine Klasse von `.special` habe, könnte ich dies als zwei separate Regeln schreiben.

```css
h1 {
  color: blue;
}

.special {
  color: blue;
}
```

Ich könnte diese auch zu einer Selektorliste kombinieren, indem ich ein Komma zwischen sie setze.

```css-nolint
h1, .special {
  color: blue;
}
```

Leerzeichen sind vor oder nach dem Komma gültig. Sie könnten die Selektoren auch lesbarer finden, wenn jeder in einer neuen Zeile steht.

```css
h1,
.special {
  color: blue;
}
```

### Spielen mit Selektorlisten

Versuchen Sie im folgenden Beispiel, die beiden Selektoren zu kombinieren, die identische Deklarationen haben. Die visuelle Anzeige sollte nach der Kombination gleich bleiben.

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

### Ungültige Selektoren in Selektorlisten

Wenn Sie Selektoren auf diese Weise gruppieren, wird die gesamte Regel ignoriert, wenn ein Selektor syntaktisch ungültig ist.

Im folgenden Beispiel wird die ungültige Klassenselektorregel ignoriert, während das `h1` weiterhin gestylt würde.

```css-nolint
h1 {
  color: blue;
}

..special {
  color: blue;
}
```

Wenn jedoch kombiniert, wird weder das `h1` noch die Klasse gestylt, da die gesamte Regel als ungültig angesehen wird.

```css-nolint
h1, ..special {
  color: blue;
}
```

## Der Universalselektor

Der Universalselektor wird durch ein Sternzeichen (`*`) angegeben. Er wählt alles im Dokument aus. Wenn `*` mithilfe eines [Nachfahrenkombinators](/de/docs/Web/CSS/Descendant_combinator) verkettet wird, wählt er alles innerhalb dieses Vorfahrenelements aus. Zum Beispiel wählt `p *` alle verschachtelten Elemente innerhalb eines `<p>`-Elements aus.

Im folgenden Beispiel verwenden wir den Universalselektor, um die Ränder auf allen Elementen zu entfernen. Anstatt des Standardstylings des Browsers, das Überschriften und Absätze mit Rändern ausgleicht, ist jetzt alles dicht beieinander.

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

Solches Verhalten kann manchmal in "Reset-Stylesheets" gesehen werden, die das gesamte Browser-Styling entfernen. Da der Universalselektor globale Änderungen vornimmt, verwenden wir ihn für sehr spezifische Situationen, wie die unten beschriebene.

### Verwenden des Universalselektors, um Ihre Selektoren leichter lesbar zu machen

Ein Anwendungsfall des Universalselektors ist es, Selektoren leichter lesbar und eindeutiger zu machen, was sie tun. Wenn wir zum Beispiel alle Nachfahrenelemente eines `<article>`-Elements auswählen wollten, die das erste Kind ihres Elternteils sind, einschließlich direkter Kinder, und sie fett machen wollten, könnten wir die {{cssxref(":first-child")}} Pseudoklasse verwenden. Wir werden mehr darüber in der Lektion über [Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements) erfahren:

```css
article :first-child {
  font-weight: bold;
}
```

Dieser Selektor könnte jedoch mit `article:first-child` verwechselt werden, der jedes `<article>`-Element auswählt, welches das erste Kind eines anderen Elements ist.

Um diese Verwirrung zu vermeiden, können wir den Universalselektor zur `:first-child` Pseudoklasse hinzufügen, um klarer zu zeigen, was der Selektor tut. Es wählt _jedes_ Element aus, das das erste Kind eines `<article>`-Elements ist, oder das erste Kind eines Nachfahrenelements von `<article>`:

```css
article *:first-child {
  font-weight: bold;
}
```

Obwohl beide Dasselbe tun, ist die Lesbarkeit erheblich verbessert.

## Zusammenfassung

In diesem Artikel haben wir CSS-Selektoren zusammengefasst, die es Ihnen ermöglichen, bestimmte HTML-Elemente anzusprechen. Wir haben Typ-, Klassen- und ID-Selektoren etwas genauer betrachtet als zuvor. Im nächsten Artikel werden wir in Attributselektoren eintauchen.

> [!NOTE]
> Eine vollständige Liste der Selektoren finden Sie in unserem [CSS-Selektoren-Referenz](/de/docs/Web/CSS/CSS_selectors).

## Siehe auch

- [CSS-Klassen](https://scrimba.com/the-frontend-developer-career-path-c0j/~01d?via=mdn), Scrimba <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Eine interaktive Lektion, die etwas Anleitung zu CSS-Klassen bietet.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics")}}
