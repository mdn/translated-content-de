---
title: Grundlegende CSS-Selektoren
short-title: Grundlegende Selektoren
slug: Learn_web_development/Core/Styling_basics/Basic_selectors
l10n:
  sourceCommit: c9f602a26092661130a031b7148d696a3ac9802e
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics")}}

Sie haben bereits gesehen, wie in {{Glossary("CSS", "CSS")}} Selektoren verwendet werden, um die {{Glossary("HTML", "HTML")}}-Elemente auf unseren Webseiten zu definieren, die wir gestalten möchten. Es gibt eine Vielzahl von CSS-Selektoren, die eine präzise Auswahl der zu stylenden Elemente ermöglichen, und in den nächsten Artikeln werden wir uns die verschiedenen Typen im Detail ansehen. In diesem Artikel rekapitulieren wir einige Grundlagen der Selektoren, einschließlich der grundlegenden Typ-, Klassen- und ID-Selektoren sowie Selektorenlisten. Außerdem stellen wir den universellen Selektor vor.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (Lernen Sie
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
          <li>Verstehen, dass Sie mehrere Klassen pro Element haben können und diese verwendet werden können, um Stile nach Bedarf zu kombinieren.</li>
          <li>Selektorenlisten.</li>
          <li>Universeller Selektor.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Selektor?

Ein CSS-Selektor ist der erste Teil einer CSS-Regel. Es ist ein Muster aus Elementen und anderen Begriffen, die dem Browser mitteilen, welche HTML-Elemente ausgewählt werden sollen, um die CSS-Eigenschaftswerte innerhalb der Regel anzuwenden. Das oder die Elemente, die durch den Selektor ausgewählt werden, werden als das _Subjekt des Selektors_ bezeichnet.

![Einige Codezeilen, bei denen h1 hervorgehoben ist.](selector.png)

In früheren Artikeln sind Sie möglicherweise auf verschiedene Selektoren gestoßen und haben gelernt, dass es Selektoren gibt, die das Dokument auf unterschiedliche Weise ansprechen — zum Beispiel, indem sie ein Element wie `h1` oder eine Klasse wie `.special` auswählen. Lassen Sie uns damit beginnen, die Hauptselektoren, die Sie bereits gesehen haben, noch einmal zusammenzufassen.

## Typselektoren

Ein **Typselektor** wird manchmal als _Tagname-Selektor_ oder _Element-Selektor_ bezeichnet, da er ein HTML-Tag/Element in Ihrem Dokument auswählt. Im untenstehenden Beispiel haben wir die Selektoren `span`, `em` und `strong` verwendet.

Versuchen Sie, das folgende Beispiel zu bearbeiten (klicken Sie auf **"Play"**, um es im MDN Playground zu öffnen), um eine CSS-Regel hinzuzufügen, die das `<h1>`-Element auswählt und seine Farbe in Blau ändert:

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

Der Groß-/Kleinschreibung unterscheidende Klassenselektor beginnt mit einem Punkt (`.`) Zeichen. Er wählt alles im Dokument aus, dem diese Klasse zugeordnet ist. Im folgenden Live-Beispiel haben wir eine Klasse namens `highlight` erstellt und an mehreren Stellen in meinem Dokument angewendet. Alle Elemente, die die Klasse angewendet haben, werden hervorgehoben.

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

Versuchen Sie, das obige Beispiel (mit dem MDN Playground) zu bearbeiten, um die folgenden Änderungen vorzunehmen:

1. Bearbeiten Sie das HTML, um den Inhalt zu ändern, auf den die `.highlight`-Stile angewendet werden. Sie könnten zum Beispiel einige `<span>`-Elemente hinzufügen, um verschiedene Teile des vorhandenen Inhalts einzuschließen und die `highlight`-Klasse darauf anzuwenden, einige vorhandene `highlight`-Klassen entfernen oder neuen Inhalt hinzufügen, um die `highlight`-Klasse darauf anzuwenden.
2. Bearbeiten Sie das CSS, um die Deklarationen innerhalb der `.highlight`-Regel zu ändern, neue hinzuzufügen, wenn Sie möchten, und beachten Sie, wie sich dies auf das Styling aller Elemente auswirkt, auf die die `highlight`-Klasse angewendet wird.
3. Erstellen Sie eine neue Klassenregel im CSS mit anderen Deklarationen darin (zum Beispiel mit einem Selektor von `.highlight2`), und versuchen Sie, diese auf einige Ihrer HTML-Inhalte anzuwenden.

### Ansprechen von Klassen auf bestimmten Elementen

Sie können einen Selektor erstellen, der bestimmte Elemente mit der angewendeten Klasse anspricht. Im nächsten Beispiel heben wir ein `<span>` mit einer Klasse von `highlight` anders hervor als eine `<h1>`-Überschrift mit einer Klasse von `highlight`. Wir tun dies, indem wir den Typselektor für das Ziel-Element verwenden und die Klasse mit einem Punkt anhängen, ohne Leerzeichen dazwischen.

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

Dieser Ansatz reduziert den Umfang einer Regel. Die Regel wird nur auf diese spezielle Kombination von Element und Klasse angewendet. Sie müssten einen weiteren Selektor hinzufügen, wenn Sie entscheiden, dass die Regel auf andere Elemente ebenfalls angewendet werden soll.

### Ein Element ansprechen, wenn es mehr als eine Klasse hat

Sie können einem Element mehrere Klassen zuweisen und diese einzeln ansprechen oder nur das Element auswählen, wenn alle Klassen im Selektor vorhanden sind. Dies kann hilfreich sein, um Komponenten zu erstellen, die auf Ihrer Website auf unterschiedliche Weise kombiniert werden können.

Im folgenden Beispiel haben wir ein `<div>`, das eine Notiz enthält. Der graue Rahmen wird angewendet, wenn die Box eine Klasse von `notebox` hat. Wenn sie zusätzlich eine Klasse von `warning` oder `danger` hat, ändern wir die {{cssxref("border-color")}}.

Wir können dem Browser mitteilen, dass wir das Element nur dann auswählen möchten, wenn es zwei Klassen angewendet hat, indem wir sie ohne Leerzeichen zwischen ihnen aneinanderreihen. Sie werden sehen, dass das letzte `<div>` kein Styling angewendet bekommt, da es nur die `danger`-Klasse hat; es benötigt auch `notebox`, um etwas angewendet zu bekommen.

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

Der Groß-/Kleinschreibung unterscheidende ID-Selektor beginnt mit einem `#` statt einem Punktzeichen, wird aber auf die gleiche Weise wie ein Klassenselektor verwendet. Der Unterschied besteht darin, dass eine ID nur einmal pro Seite verwendet werden kann und Elemente nur einen einzigen `id`-Wert zugeordnet bekommen können. Er kann ein Element auswählen, dem die `id` gesetzt ist, und Sie können der ID einen Typselektor voranstellen, um das Element nur anzusprechen, wenn sowohl das Element als auch die ID übereinstimmen. Sie können beide Verwendungszwecke im folgenden Beispiel sehen:

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
> Dieselbe ID mehrmals in einem Dokument zu verwenden, mag für Stilzwecke zu funktionieren scheinen, aber tun Sie dies nicht. Es führt zu ungültigem Code und wird an vielen Stellen zu seltsamem Verhalten führen.

### Experimentieren mit ID-Selektoren

Versuchen Sie, das obige Beispiel zu bearbeiten, um die folgenden Änderungen vorzunehmen:

1. Bearbeiten Sie das HTML, um die `#one`-Stile auf den ersten Absatz statt auf den zweiten anzuwenden.
2. Bearbeiten Sie das CSS, um die Deklarationen innerhalb der ID-Selektoren zu ändern, und beachten Sie, wie sich dies auf das Erscheinungsbild des HTML auswirkt.

## Selektorenlisten

Wenn Sie mehr als eine Sache haben, die dasselbe CSS verwendet, können die einzelnen Selektoren in eine _Selektorenliste_ kombiniert werden, sodass die Regel auf alle individuellen Selektoren angewendet wird. Wenn ich zum Beispiel dasselbe CSS für ein `h1` und auch eine Klasse von `.special` habe, könnte ich dies als zwei separate Regeln schreiben.

```css
h1 {
  color: blue;
}

.special {
  color: blue;
}
```

Ich könnte diese auch in eine Selektorenliste kombinieren, indem ich ein Komma zwischen ihnen hinzufüge.

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

### Experimentieren mit Selektorenlisten

Im folgenden Beispiel versuchen Sie, die beiden Selektoren zu kombinieren, die identische Deklarationen haben. Die visuelle Darstellung sollte nach ihrem Kombinieren gleich bleiben.

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

Wenn Sie Selektoren auf diese Weise gruppieren, wird die ganze Regel ignoriert, wenn ein Selektor syntaktisch ungültig ist.

Im folgenden Beispiel wird die ungültige Klassenselektorenregel ignoriert, während das `h1` trotzdem gestylt würde.

```css-nolint
h1 {
  color: blue;
}

..special {
  color: blue;
}
```

Wenn sie jedoch kombiniert werden, werden weder das `h1` noch die Klasse gestylt, da die ganze Regel als ungültig betrachtet wird.

```css-nolint
h1, ..special {
  color: blue;
}
```

## Der universelle Selektor

Der universelle Selektor wird durch ein Sternchen (`*`) angezeigt. Er wählt alles im Dokument aus. Wenn `*` mit einem [Nachkommen-Kombinator](/de/docs/Web/CSS/Descendant_combinator) verkettet ist, wählt er alles innerhalb dieses Vorfahren-Elements aus. Zum Beispiel wählt `p *` alle verschachtelten Elemente innerhalb des `<p>`-Elements aus.

Im folgenden Beispiel verwenden wir den universellen Selektor, um die Abstände aller Elemente zu entfernen. Anstatt der Standardbrowserstilierung, die Überschriften und Absätze mit Abständen versieht, ist alles dicht zusammen.

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

Diese Art von Verhalten ist manchmal in "Reset-Stylesheets" zu sehen, die die gesamte Browser-Stilierung entfernen. Da der universelle Selektor globale Änderungen vornimmt, verwenden wir ihn für sehr spezifische Situationen, wie die unten beschriebene.

### Den universellen Selektor verwenden, um Ihre Selektoren leichter lesbar zu machen

Ein Anwendungsfall des universellen Selektors ist es, Selektoren leichter lesbar und offensichtlicher zu machen, was sie tun. Zum Beispiel, wenn wir alle Nachkommelemente eines `<article>`-Elements auswählen wollten, die das erste Kind ihres Elternteils sind, einschließlich direkter Kinder, könnten wir die {{cssxref(":first-child")}}-Pseudo-Klasse verwenden. Wir werden hierüber mehr in der Lektion zu [Pseudo-Klassen und Pseudo-Elementen](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements) lernen:

```css
article :first-child {
  font-weight: bold;
}
```

Dieser Selektor könnte jedoch mit `article:first-child` verwechselt werden, der jedes `<article>`-Element auswählen würde, das das erste Kind eines anderen Elements ist.

Um diese Verwirrung zu vermeiden, können wir den universellen Selektor zur `:first-child`-Pseudo-Klasse hinzufügen, um klarer zu machen, was der Selektor tut. Er wählt _jedes_ Element aus, das das erste Kind eines `<article>`-Elements oder das erste Kind eines Nachkommenelements von `<article>` ist:

```css
article *:first-child {
  font-weight: bold;
}
```

Obwohl beide dasselbe tun, ist die Lesbarkeit erheblich verbessert.

## Zusammenfassung

In diesem Artikel haben wir CSS-Selektoren rekapituliert, die es ermöglichen, bestimmte HTML-Elemente anzusprechen, und uns Typ-, Klassen- und ID-Selektoren etwas ausführlicher angesehen als zuvor. Im nächsten Artikel werden wir in Attributselektoren eintauchen.

> [!NOTE]
> Für eine vollständige Liste der Selektoren sehen Sie sich unser [CSS Selektoren-Referenz](/de/docs/Web/CSS/CSS_selectors) an.

## Siehe auch

- [CSS-Klassen](https://scrimba.com/the-frontend-developer-career-path-c0j/~01d?via=mdn), Scrimba <sup>[_MDN Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Eine interaktive Lektion, die einige Anleitungen zu CSS-Klassen bietet.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics")}}
