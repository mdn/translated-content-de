---
title: Grundlegende CSS-Selektoren
short-title: Grundlegende Selektoren
slug: Learn_web_development/Core/Styling_basics/Basic_selectors
l10n:
  sourceCommit: bb4be34c00686ddc46a1cef3123cdf825e9495ec
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics")}}

Sie haben bereits gesehen, wie in {{Glossary("CSS", "CSS")}} Selektoren verwendet werden, um die {{Glossary("HTML", "HTML")}}-Elemente auf unseren Webseiten zu bestimmen, die wir gestalten möchten. Es gibt eine Vielzahl von CSS-Selektoren, die eine präzise Auswahl von Elementen ermöglichen, die gestaltet werden sollen. In den nächsten Artikeln werden wir die verschiedenen Typen im Detail betrachten. In diesem Artikel werden wir einige Grundlagen der Selektoren wiederholen, darunter Grundtypen, Klassen- und ID-Selektoren sowie Selektorenlisten. Wir werden auch den universellen Selektor einführen.

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
          <li>Die grundlegenden Selektortypen — Elementtyp, Klasse, ID.</li>
          <li>Verstehen, dass IDs pro Dokument einzigartig sind — Sie sollten eine ID verwenden, um ein spezielles Element auszuwählen.</li>
          <li>Verstehen, dass Sie mehrere Klassen pro Element haben können, und diese verwendet werden können, um bei Bedarf Stilvarianten einzuschichten.</li>
          <li>Selektorenlisten.</li>
          <li>Universeller Selektor.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Selektor?

Ein CSS-Selektor ist der erste Teil einer CSS-Regel. Es ist ein Muster aus Elementen und anderen Begriffen, das dem Browser angibt, auf welche HTML-Elemente die CSS-Eigenschaftswerte innerhalb der Regel angewendet werden sollen. Das oder die Elemente, die vom Selektor ausgewählt werden, werden als _Subjekt des Selektors_ bezeichnet.

![Einige Codezeilen mit hervorgehobenem h1.](selector.png)

In früheren Artikeln haben Sie verschiedene Selektoren kennengelernt und erfahren, dass es Selektoren gibt, die das Dokument auf unterschiedliche Weise ansprechen; zum Beispiel durch Auswahl eines Elements wie `h1` oder einer Klasse wie `.special`. Beginnen wir mit einer Wiederholung der Haupttypen, die Sie bereits kennengelernt haben.

## Typselektoren

Ein **Typselektor** wird manchmal als _Tag-Name-Selektor_ oder _Elementselektor_ bezeichnet, da er ein HTML-Tag/-Element in Ihrem Dokument auswählt. Im folgenden Beispiel haben wir die Selektoren `span`, `em` und `strong` verwendet.

Versuchen Sie, das folgende Beispiel zu bearbeiten (klicken Sie auf **"Play"**, um es im MDN-Playground zu öffnen), um eine CSS-Regel hinzuzufügen, die das `<h1>`-Element auswählt und dessen Farbe auf Blau ändert:

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

Der groß- und kleinschreibungssensitive Klassenselektor beginnt mit einem Punkt (`.`). Er wählt alles im Dokument aus, auf das diese Klasse angewendet wurde. Im folgenden Live-Beispiel haben wir eine Klasse namens `highlight` erstellt und sie in mehreren Bereichen des Dokuments angewendet. Alle Elemente mit dieser Klasse sind hervorgehoben.

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

### Mit Klassenselektoren spielen

Versuchen Sie, das obige Beispiel (im MDN-Playground) zu bearbeiten, um die folgenden Änderungen vorzunehmen:

1. Bearbeiten Sie das HTML, um den Inhalt zu ändern, auf den die `.highlight`-Stile angewendet werden. Sie könnten zum Beispiel einige `<span>`-Elemente hinzufügen, um verschiedene Teile des bestehenden Inhalts zu umschließen und die `highlight`-Klasse auf sie anzuwenden, einige bestehende `highlight`-Klassen entfernen oder neuen Inhalt hinzufügen, auf den die `highlight`-Klasse angewendet wird.
2. Bearbeiten Sie das CSS, um die Deklarationen innerhalb der `.highlight`-Regel zu ändern, fügen Sie bei Bedarf neue hinzu und beachten Sie, wie dies das Styling aller Elemente beeinflusst, auf die die `highlight`-Klasse angewendet wird.
3. Erstellen Sie eine neue Klassenregel innerhalb des CSS mit anderen Deklarationen darin (zum Beispiel mit einem Selektor `.highlight2`), und versuchen Sie dann, diese auf einige Ihrer HTML-Elemente anzuwenden.

### Klassen für bestimmte Elemente ansprechen

Sie können einen Selektor erstellen, der spezifische Elemente mit der angewendeten Klasse anvisiert. Im nächsten Beispiel werden wir ein `<span>` mit einer Klasse von `highlight` anders hervorheben als eine `<h1>`-Überschrift mit einer Klasse von `highlight`. Wir tun dies, indem wir den Typselektor für das gewünschte Element verwenden und die Klasse ohne Leerzeichen mit einem Punkt anhängen.

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

Dieser Ansatz reduziert den Anwendungsbereich einer Regel. Die Regel wird nur auf diese spezielle Element- und Klassenkombination angewandt. Sie müssten einen weiteren Selektor hinzufügen, wenn Sie möchten, dass die Regel auf andere Elemente angewendet wird.

### Ein Element anvisieren, wenn mehr als eine Klasse angewendet wurde

Sie können mehreren Klassen auf ein Element anwenden und sie individuell ansprechen oder das Element nur dann auswählen, wenn alle im Selektor vorhandenen Klassen vorhanden sind. Dies kann hilfreich sein, wenn Sie Komponenten aufbauen, die auf Ihrer Website in verschiedenen Weisen kombiniert werden können.

Im folgenden Beispiel haben wir ein `<div>`, das eine Notiz enthält. Der graue Rand wird angewendet, wenn die Box eine Klasse von `notebox` hat. Wenn sie auch eine Klasse von `warning` oder `danger` hat, ändern wir die {{cssxref("border-color")}}.

Wir können dem Browser sagen, dass wir das Element nur dann auswählen wollen, wenn zwei Klassen angewendet wurden, indem wir sie ohne Leerzeichen dazwischen aneinanderketten. Sie werden sehen, dass das letzte `<div>` keine Stylingen erhält, da es nur die `danger`-Klasse hat. Um Stile zu erhalten, benötigt es auch die `notebox`-Klasse.

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

Der groß- und kleinschreibungssensitive ID-Selektor beginnt mit einem `#` statt einem Punkt, wird jedoch genauso verwendet wie ein Klassenselektor. Der Unterschied besteht darin, dass eine ID nur einmal pro Seite verwendet werden kann, und Elemente können nur einen einzigen `id`-Wert haben. Ein ID-Selektor wählt ein Element mit einer bestimmten `id` aus, und Sie können die ID mit einem Typselektor voranstellen, um das Element nur dann anzusprechen, wenn sowohl das Element als auch die ID übereinstimmen. Sie können beide Verwendungen im folgenden Beispiel sehen:

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
> Die gleiche ID mehrfach in einem Dokument zu verwenden, mag zwar zu funktionieren scheinen, um es zu stylen, aber tun Sie dies nicht. Es führt zu ungültigem Code und verursacht seltsames Verhalten an vielen Stellen.

### Mit ID-Selektoren spielen

Versuchen Sie, das obige Beispiel zu bearbeiten, um die folgenden Änderungen vorzunehmen:

1. Bearbeiten Sie das HTML, um die `#one`-Stile auf den ersten Absatz anstatt auf den zweiten anzuwenden.
2. Bearbeiten Sie das CSS, um die Deklarationen innerhalb der ID-Selektoren zu ändern und sehen Sie, wie dies das Aussehen des HTML verändert.

## Selektorenlisten

Wenn Sie dieselben CSS-Stile auf mehrere Elemente anwenden möchten, können Sie einzelne Selektoren zu einer _Selektorenliste_ kombinieren. Die Regel wird dann auf alle einzelnen Selektoren angewandt. Zum Beispiel, wenn ich das gleiche CSS für einen `h1`- und einen `.special`-Selektor habe, könnte ich dies als zwei separate Regeln schreiben.

```css
h1 {
  color: blue;
}

.special {
  color: blue;
}
```

Ich könnte auch diese in eine Selektorenliste kombinieren, indem ich ein Komma dazwischen setze.

```css-nolint
h1, .special {
  color: blue;
}
```

Leerzeichen sind vor oder nach dem Komma zulässig. Sie könnten auch die Selektoren lesbarer finden, wenn jeder auf einer neuen Zeile steht.

```css
h1,
.special {
  color: blue;
}
```

### Mit Selektorenlisten spielen

Versuchen Sie im folgenden Beispiel, die beiden Selektoren, die identische Deklarationen haben, zu kombinieren. Die visuelle Anzeige sollte danach die gleiche sein.

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

Im folgenden Beispiel wird die Regel des ungültigen Klassenselektors ignoriert, während das `h1` weiterhin gestylt wird.

```css-nolint
h1 {
  color: blue;
}

..special {
  color: blue;
}
```

Wenn sie jedoch kombiniert werden, werden weder das `h1` noch die Klasse gestylt, da die gesamte Regel als ungültig angesehen wird.

```css-nolint
h1, ..special {
  color: blue;
}
```

## Der universelle Selektor

Der universelle Selektor wird durch ein Sternchen (`*`) angezeigt. Er wählt alles im Dokument aus. Wenn `*` durch einen [Nachkommenkombinator](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator) gebunden wird, wählt er alles innerhalb eines Vorfahrenelements aus. Zum Beispiel wählt `p *` alle verschachtelten Elemente innerhalb des `<p>`-Elements.

Im folgenden Beispiel verwenden wir den universellen Selektor, um die Ränder bei allen Elementen zu entfernen. Anstatt das standardmäßige Styling des Browsers, das Überschriften und Absätze mit Rändern trennt, ist alles nah beieinander.

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

Ein solches Verhalten kann manchmal in "Reset-Stylesheets" beobachtet werden, die das gesamte Styling des Browsers entfernen. Da der universelle Selektor globale Änderungen vornimmt, verwenden wir ihn für sehr spezifische Situationen, wie die unten beschriebene.

### Den universellen Selektor verwenden, um Ihre Selektoren lesbarer zu machen

Eine Verwendung des universellen Selektors besteht darin, Selektoren lesbarer und intuitiver zu machen. Wenn wir zum Beispiel alle Nachkommenelemente eines `<article>`-Elements auswählen wollten, die das erste Kind ihres Elternelements sind, einschließlich direkter Kinder, könnten wir die {{cssxref(":first-child")}} Pseudoklasse verwenden. Wir werden mehr darüber in [Pseudoklassen und Pseudoelemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements) erfahren:

```css
article :first-child {
  font-weight: bold;
}
```

Dieser Selektor könnte jedoch mit `article:first-child` verwechselt werden, das jedes `<article>`-Element auswählt, das das erste Kind eines anderen Elements ist.

Um diese Verwirrung zu vermeiden, könnten wir den universellen Selektor zur `:first-child` Pseudoklasse hinzufügen, damit deutlicher wird, was der Selektor macht. Er wählt _jedes_ Element aus, das das erste Kind eines `<article>`-Elements ist, oder das erste Kind eines Nachkommenelements von `<article>`:

```css
article *:first-child {
  font-weight: bold;
}
```

Beide sind gleichwertig, aber einige Leute finden die zweite Option einfacher zu lesen.

> [!NOTE]
> Diese Technik werden Sie wahrscheinlich nicht oft auf veröffentlichten Websites sehen. Zum Beispiel nutzen wir sie bei MDN kaum. Dennoch sollten Sie in Erwägung ziehen, sie in Ihrem Code zu verwenden, wenn Sie sie besser verstehen können.

## Zusammenfassung

In diesem Artikel haben wir CSS-Selektoren rekapituliert, die es Ihnen ermöglichen, bestimmte HTML-Elemente anzusprechen, indem wir Typen-, Klassen- und ID-Selektoren detaillierter betrachteten als zuvor. Im nächsten Artikel werden wir auf Attributselektoren eingehen.

> [!NOTE]
> Für eine vollständige Liste der Selektoren, siehe unser [CSS Selectors Reference](/de/docs/Web/CSS/Guides/Selectors).

## Siehe auch

- [CSS-Klassen](https://scrimba.com/the-frontend-developer-career-path-c0j/~01d?via=mdn), Scrimba <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Eine interaktive Lektion, die einige Anleitungen zu CSS-Klassen bietet.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics")}}
