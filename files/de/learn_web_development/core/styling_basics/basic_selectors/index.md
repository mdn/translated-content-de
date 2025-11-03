---
title: Grundlegende CSS Selektoren
short-title: Grundlegende Selektoren
slug: Learn_web_development/Core/Styling_basics/Basic_selectors
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics")}}

Sie haben bereits gesehen, wie in {{Glossary("CSS", "CSS")}} Selektoren verwendet werden, um die {{Glossary("HTML", "HTML")}}-Elemente auf unserer Webseite auszuwählen, die wir stylen möchten. Es gibt eine Vielzahl von CSS-Selektoren, die eine feingranulare Präzision beim Auswählen der zu stylenden Elemente ermöglichen, und in den nächsten Artikeln werden wir die verschiedenen Typen detailliert betrachten. In diesem Artikel fassen wir einige Grundlagen der Selektoren zusammen, einschließlich der grundlegenden Typ-, Klassen- und ID-Selektoren sowie Selektorenlisten. Wir werden auch den universellen Selektor vorstellen.

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
          <li>Verstehen, dass IDs pro Dokument eindeutig sind — Sie sollten eine ID verwenden, um ein spezifisches Element auszuwählen.</li>
          <li>Verstehen, dass Sie mehrere Klassen pro Element haben können, und diese verwendet werden können, um bei Bedarf zusätzliche Stile hinzuzufügen.</li>
          <li>Selektorlisten.</li>
          <li>Universeller Selektor.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Selektor?

Ein CSS-Selektor ist der erste Teil einer CSS-Regel. Es ist ein Muster von Elementen und anderen Begriffen, die dem Browser mitteilen, welche HTML-Elemente ausgewählt werden sollen, um die CSS-Eigenschaftswerte innerhalb der Regel auf sie anzuwenden. Das oder die Elemente, die vom Selektor ausgewählt werden, werden als _Subject des Selektors_ bezeichnet.

![Einige Codezeilen mit hervorgehobenem h1.](selector.png)

In früheren Artikeln haben Sie möglicherweise einige verschiedene Selektoren kennengelernt und erfahren, dass es Selektoren gibt, die das Dokument auf unterschiedliche Weise ansprechen — zum Beispiel durch Auswahl eines Elements wie `h1` oder einer Klasse wie `.special`. Beginnen wir damit, die Hauptselektoren, die Sie bereits gesehen haben, zusammenzufassen.

## Typsselektoren

Ein **Typsselektor** wird manchmal als _Tag-Name-Selektor_ oder _Elementselektor_ bezeichnet, da er ein HTML-Tag/Element in Ihrem Dokument auswählt. Im folgenden Beispiel haben wir die Selektoren `span`, `em` und `strong` verwendet.

Versuchen Sie, das folgende Beispiel zu bearbeiten (klicken Sie auf **"Play"**, um es im MDN Playground zu öffnen), um eine CSS-Regel hinzuzufügen, die das `<h1>`-Element auswählt und seine Farbe auf blau ändert:

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

Der groß-/kleinschreibungsempfindliche Klassenselektor beginnt mit einem Punkt (`.`) Zeichen. Er wählt alles im Dokument aus, dem diese Klasse zugeordnet ist. Im folgenden Live-Beispiel haben wir eine Klasse namens `highlight` erstellt und diese an mehreren Stellen in meinem Dokument angewendet. Alle Elemente, auf die die Klasse angewendet wurde, sind hervorgehoben.

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

### Experimentieren mit Klassenselektoren

Versuchen Sie, das obige Beispiel zu bearbeiten (unter Verwendung des MDN Playground), um die folgenden Änderungen vorzunehmen:

1. Bearbeiten Sie das HTML, um den Inhalt zu ändern, auf den die `.highlight`-Stile angewendet werden. Sie könnten beispielsweise einige `<span>`-Elemente hinzufügen, um verschiedene Teile des vorhandenen Inhalts zu umschließen und die `highlight`-Klasse darauf anzuwenden. Löschen Sie einige bestehende `highlight`-Klassen oder fügen Sie neuen Inhalt hinzu, um die `highlight`-Klasse darauf anzuwenden.
2. Bearbeiten Sie das CSS, um die Deklarationen innerhalb der `.highlight`-Regel zu ändern, fügen Sie gegebenenfalls neue hinzu, und beobachten Sie, wie sich dies auf das Styling aller Elemente auswirkt, auf die die `highlight`-Klasse angewendet wird.
3. Erstellen Sie eine neue Klassenregel im CSS mit verschiedenen Deklarationen darin (z. B. mit einem Selektor von `.highlight2`), und versuchen Sie dann, diese auf einige Ihrer HTML-Elemente anzuwenden.

### Klassen an bestimmten Elementen ansprechen

Sie können einen Selektor erstellen, der bestimmte Elemente mit der angewendeten Klasse ansprechen wird. Im nächsten Beispiel werden wir ein `<span>` mit einer Klasse von `highlight` anders hervorheben als eine `<h1>`-Überschrift mit einer Klasse von `highlight`. Wir tun dies, indem wir den Typsselektor für das Element, das wir ansprechen möchten, mit der Klasse anhängen, wobei kein Leerzeichen dazwischen ist.

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

Dieser Ansatz reduziert den Umfang einer Regel. Die Regel gilt nur für die spezielle Kombination von Element und Klasse. Sie müssten einen weiteren Selektor hinzufügen, wenn die Regel auch auf andere Elemente angewendet werden soll.

### Ein Element ansprechen, wenn es mehr als eine Klasse hat

Sie können mehrere Klassen zu einem Element hinzufügen und sie individuell ansprechen oder das jeweilige Element nur auswählen, wenn alle im Selektor angegebenen Klassen vorhanden sind. Dies kann hilfreich sein, um Komponenten zu erstellen, die auf Ihrer Seite auf unterschiedliche Weise kombiniert werden können.

Im Beispiel unten haben wir ein `<div>`, das eine Notiz enthält. Der graue Rahmen wird angewandt, wenn die Box eine Klasse von `notebox` hat. Wenn sie auch eine Klasse von `warning` oder `danger` hat, ändern wir die {{cssxref("border-color")}}.

Wir können dem Browser mitteilen, dass wir das Element nur dann auswählen möchten, wenn es zwei Klassen zugewiesen hat, indem wir sie ohne Leerzeichen zwischen ihnen aneinanderreihen. Sie werden sehen, dass das letzte `<div>` keinerlei Stil angewendet bekommt, da es nur die `danger`-Klasse hat; es benötigt auch `notebox`, um eine Anwendung zu erhalten.

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

## ID-Sselektoren

Der groß-/kleinschreibungsempfindliche ID-Sselektor beginnt mit einem `#` anstelle eines Punktes, wird jedoch auf die gleiche Weise wie ein Klassenselektor verwendet. Der Unterschied besteht darin, dass eine ID nur einmal pro Seite verwendet werden kann und Elemente nur einen einzigen `id`-Wert haben können. Er kann ein Element auswählen, dem die `id` zugeordnet ist, und Sie können die ID mit einem Typsselektor versehen, um das Element nur dann auszuwählen, wenn sowohl das Element als auch die ID übereinstimmt. Im folgenden Beispiel sehen Sie beide Anwendungen:

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
> Die Verwendung derselben ID mehrmals in einem Dokument kann aus Styling-Zwecken möglicherweise funktionieren, aber tun Sie dies nicht. Es führt zu ungültigem Code und wird in vielen Situationen zu seltsamem Verhalten führen.

### Experimentieren mit ID-Sselektoren

Versuchen Sie, das obige Beispiel zu bearbeiten, um die folgenden Änderungen vorzunehmen:

1. Bearbeiten Sie das HTML, um die `#one`-Stile auf den ersten Absatz anstelle des zweiten anzuwenden.
2. Bearbeiten Sie das CSS, um die Deklarationen innerhalb der ID-Sselektoren zu ändern, und beobachten Sie, wie sich dies auf das Erscheinungsbild des HTML auswirkt.

## Selektorlisten

Wenn Sie mehr als eine Sache haben, die denselben CSS verwendet, dann können die individuellen Selektoren zu einer _Selektorliste_ kombiniert werden, sodass die Regel auf alle individuellen Selektoren angewendet wird. Zum Beispiel, wenn ich denselben CSS für ein `h1` und auch eine Klasse von `.special` habe, könnte ich dies als zwei separate Regeln schreiben.

```css
h1 {
  color: blue;
}

.special {
  color: blue;
}
```

Ich könnte dies auch in eine Selektorliste kombinieren, indem ich ein Komma zwischen ihnen setze.

```css-nolint
h1, .special {
  color: blue;
}
```

Leerzeichen ist vor oder nach dem Komma gültig. Sie könnten die Selektoren auch übersichtlicher schreiben, wenn jeder auf einer neuen Zeile steht.

```css
h1,
.special {
  color: blue;
}
```

### Experimentieren mit Selektorlisten

Im folgenden Beispiel versuchen Sie, die beiden Selektoren zu kombinieren, die identische Deklarationen haben. Die visuelle Darstellung sollte nach dem Kombinieren dieselbe sein.

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

Wenn Sie Selektoren auf diese Weise gruppieren und einer der Selektoren syntaktisch ungültig ist, wird die gesamte Regel ignoriert.

Im folgenden Beispiel wird die ungültige Klassenselektorenregel ignoriert, während das `h1` weiterhin gestylt würde.

```css-nolint
h1 {
  color: blue;
}

..special {
  color: blue;
}
```

Wenn sie jedoch kombiniert werden, wird weder das `h1` noch die Klasse gestylt, da die gesamte Regel als ungültig erachtet wird.

```css-nolint
h1, ..special {
  color: blue;
}
```

## Der universelle Selektor

Der universelle Selektor wird durch ein Sternchen (`*`) angezeigt. Er wählt alles im Dokument aus. Wenn `*` mit einem [Descendant Combinator](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator) verknüpft wird, wählt es alles innerhalb des übergeordneten Elements aus. Zum Beispiel wählt `p *` alle verschachtelten Elemente innerhalb des `<p>`-Elements aus.

Im folgenden Beispiel verwenden wir den universellen Selektor, um die Ränder aller Elemente zu entfernen. Anstatt des Standardstylings des Browsers, welches Überschriften und Absätze mit Rändern auseinanderhält, ist alles nah beieinander.

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

Diese Art von Verhalten kann manchmal in "Reset-Stylesheets" gesehen werden, welche alle Browser-Styles entfernen. Da der universelle Selektor globale Änderungen vornimmt, verwenden wir ihn für sehr spezifische Situationen, wie die unten beschriebene.

### Den universellen Selektor verwenden, um Ihre Selektoren leichter lesbar zu machen

Eine Verwendung des universellen Selektors besteht darin, Selektoren leichter lesbar zu machen und klarer darzustellen, was sie tun. Zum Beispiel, wenn wir alle Nachkommenelemente eines `<article>`-Elements auswählen möchten, die das erste Kind ihres Elternteils sind, einschließlich direkter Kinder, und diese fett machen möchten, könnten wir die {{cssxref(":first-child")}} Pseudo-Klasse benutzen. Wir werden mehr darüber in der Lektion über [Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements) lernen:

```css
article :first-child {
  font-weight: bold;
}
```

Dieser Selektor könnte jedoch mit `article:first-child` verwechselt werden, was jedes `<article>`-Element auswählt, das das erste Kind eines anderen Elements ist.

Um diese Verwirrung zu vermeiden, können wir den universellen Selektor zur `:first-child` Pseudo-Klasse hinzufügen, damit es offensichtlicher ist, was der Selektor tut. Es wählt _jedes_ Element aus, das das erste Kind eines `<article>`-Elements oder das erste Kind eines Nachkommenelements von `<article>` ist:

```css
article *:first-child {
  font-weight: bold;
}
```

Obwohl beide dasselbe tun, ist die Lesbarkeit erheblich verbessert.

## Zusammenfassung

In diesem Artikel haben wir CSS-Sselektoren zusammengefasst, die es Ihnen ermöglichen, bestimmte HTML-Elemente auszuwählen, wobei die Typ-, Klassen- und ID-Sselektoren etwas ausführlicher betrachtet wurden als zuvor. Im nächsten Artikel werden wir uns mit Attributselektoren befassen.

> [!NOTE]
> Für eine vollständige Liste der Selektoren siehe unser [CSS-Selektoren-Referenz](/de/docs/Web/CSS/CSS_selectors).

## Siehe auch

- [CSS-Klassen](https://scrimba.com/the-frontend-developer-career-path-c0j/~01d?via=mdn), Scrimba <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Eine interaktive Lektion, die Anleitung zu CSS-Klassen gibt.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics")}}
