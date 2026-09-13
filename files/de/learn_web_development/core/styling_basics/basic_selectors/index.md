---
title: Grundlegende CSS-Selektoren
short-title: Grundlegende Selektoren
slug: Learn_web_development/Core/Styling_basics/Basic_selectors
l10n:
  sourceCommit: 28f5f3b9b463fa842fa686ccc73c9e1d9b06282b
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics")}}

Sie haben bereits gesehen, wie in {{Glossary("CSS", "CSS")}} Selektoren verwendet werden, um die {{Glossary("HTML", "HTML")}}-Elemente auf unseren Webseiten zu markieren, die wir gestalten möchten. Es gibt eine Vielzahl von CSS-Selektoren, die eine präzise Auswahl der zu gestaltenden Elemente ermöglichen. In den nächsten Artikeln werden wir die verschiedenen Arten im Detail betrachten. In diesem Artikel wiederholen wir einige Grundlagen der Selektoren, einschließlich der grundlegenden Typ-, Klassen- und ID-Selektoren sowie der Selektorenlisten. Wir werden auch den universellen Selektor einführen.

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
          <li>Verstehen, dass IDs einzigartig pro Dokument sind — Sie sollten eine ID verwenden, um ein spezifisches Element auszuwählen.</li>
          <li>Verstehen, dass Sie mehrere Klassen pro Element haben können und diese verwendet werden können, um bei Bedarf Stile aufzuschichten.</li>
          <li>Selektorenlisten.</li>
          <li>Universaler Selektor.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Was ist ein Selektor?

Ein CSS-Selektor ist der erste Teil einer CSS-Regel. Es ist ein Muster aus Elementen und anderen Begriffen, die dem Browser mitteilen, welche HTML-Elemente die CSS-Eigenschaftswerte innerhalb der Regel erhalten sollen. Das oder die durch den Selektor ausgewählten Elemente werden als das _Subjekt des Selektors_ bezeichnet.

![Einige Codes mit hervorgehobenen h1.](selector.png)

In früheren Artikeln haben Sie verschiedene Selektoren kennengelernt und erfahren, dass es Selektoren gibt, die das Dokument auf unterschiedliche Weise ansprechen; zum Beispiel indem ein Element wie `h1` oder eine Klasse wie `.special` ausgewählt wird. Lassen Sie uns mit einer Wiederholung der Haupttypen beginnen, die Sie bereits gesehen haben.

## Typselektoren

Ein **Typselektor** wird manchmal als _Tagname-Selektor_ oder _Elementselektor_ bezeichnet, da er ein HTML-Tag/Element in Ihrem Dokument auswählt. Im folgenden Beispiel haben wir die Selektoren `span`, `em` und `strong` verwendet.

Versuchen Sie, das folgende Beispiel (mit **"Play"** im MDN Playground öffnen) zu bearbeiten, um eine CSS-Regel hinzuzufügen, die das `<h1>`-Element auswählt und seine Farbe auf Blau ändert:

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

Der Groß-/Kleinschreibung empfindliche Klassenselektor beginnt mit einem Punkt (`.`) Zeichen. Er wählt alles im Dokument aus, dem diese Klasse zugewiesen ist. Im Live-Beispiel unten haben wir eine Klasse namens `highlight` erstellt und sie an mehreren Stellen im Dokument angewendet. Alle Elemente mit dieser Klasse sind hervorgehoben.

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

Versuchen Sie, das obige Beispiel (im MDN Playground) zu bearbeiten, um die folgenden Änderungen vorzunehmen:

1. Bearbeiten Sie das HTML, um den Inhalt zu ändern, auf den die `.highlight`-Stile angewendet werden. Sie könnten zum Beispiel einige `<span>`-Elemente hinzufügen, um verschiedene Teile des bestehenden Inhalts zu umschließen und die `highlight`-Klasse darauf anzuwenden, einige vorhandene `highlight`-Klassen entfernen oder neuen Inhalt hinzufügen, auf den die `highlight`-Klasse angewendet wird.
2. Bearbeiten Sie das CSS, um die Deklarationen innerhalb der `.highlight`-Regel zu ändern, und fügen Sie neue hinzu, wenn Sie möchten. Beachten Sie, wie sich dies auf die Gestaltung aller Elemente auswirkt, die die `highlight`-Klasse angewendet haben.
3. Erstellen Sie eine neue Klassenregel im CSS mit anderen Deklarationen (zum Beispiel mit einem Selektor `.highlight2`), und versuchen Sie dann, diese auf einige Ihrer HTML-Elemente anzuwenden.

### Klassen auf bestimmten Elementen ansprechen

Sie können einen Selektor erstellen, der spezifische Elemente mit der angewendeten Klasse anspricht. In diesem nächsten Beispiel heben wir ein `<span>` mit einer Klasse von `highlight` anders hervor als eine `<h1>`-Überschrift mit einer Klasse von `highlight`. Dies tun wir, indem wir den Typselektor für das gewünschte Element verwenden und die Klasse mittels eines Punktes anhängen, ohne Leerzeichen dazwischen.

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

Dieser Ansatz begrenzt den Anwendungsbereich einer Regel. Die Regel gilt nur für diese spezielle Element- und Klassenkombination. Sie müssten einen weiteren Selektor hinzufügen, wenn Sie möchten, dass die Regel auf andere Elemente angewendet wird.

### Ein Element ansprechen, wenn es mehr als eine Klasse hat

Sie können mehrere Klassen auf ein Element anwenden und diese einzeln ansprechen oder das Element nur dann auswählen, wenn alle im Selektor angegebenen Klassen vorhanden sind. Dies kann hilfreich sein, wenn Komponenten aufgebaut werden, die auf Ihrer Website in verschiedenen Kombinationen verwendet werden können.

Im Beispiel unten haben wir ein `<div>`, das eine Notiz enthält. Der graue Rahmen wird angewendet, wenn die Box die Klasse `notebox` hat. Wenn sie auch die Klasse `warning` oder `danger` hat, ändern wir die {{cssxref("border-color")}}.

Wir können dem Browser mitteilen, dass wir das Element nur dann abgleichen wollen, wenn zwei Klassen angewendet werden, indem wir sie ohne Leerzeichen zwischen ihnen verbinden. Sie werden sehen, dass das letzte `<div>` keine gestylt wird, da es nur die Klasse `danger` hat. Um irgendeinen Stil angewendet zu bekommen, benötigt es auch die Klasse `notebox`.

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

Der Groß-/Kleinschreibung empfindliche ID-Selektor beginnt mit einem `#` anstelle eines Punktes, wird aber auf die gleiche Weise wie ein Klassenselektor verwendet. Der Unterschied besteht darin, dass eine ID nur einmal pro Seite verwendet werden kann und Elemente nur einen einzelnen `id`-Wert haben können. Ein ID-Selektor wählt ein Element mit einer spezifischen `id` aus, und Sie können der ID einen Typselektor voranstellen, um nur das Element anzusprechen, wenn sowohl das Element als auch die ID übereinstimmen. Sie können beide Verwendungen in dem folgenden Beispiel sehen:

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
> Die Verwendung derselben ID mehrmals in einem Dokument mag aus Stilzwecken funktionieren, aber tun Sie dies nicht. Es führt zu ungültigem Code und wird seltsames Verhalten an vielen Stellen verursachen.

### Mit ID-Selektoren spielen

Versuchen Sie, das obige Beispiel zu bearbeiten, um die folgenden Änderungen vorzunehmen:

1. Bearbeiten Sie das HTML, um die `#one`-Stile auf den ersten Absatz anstelle des zweiten anzuwenden.
2. Bearbeiten Sie das CSS, um die Deklarationen innerhalb der ID-Selektoren zu ändern, und beachten Sie, wie diese das Aussehen des HTML verändert.

## Selektorenlisten

Wenn Sie dasselbe CSS auf mehrere Elemente anwenden möchten, können Sie einzelne Selektoren in einer _Selektorenliste_ kombinieren. Die Regel wird dann auf alle einzelnen Selektoren angewendet. Beispielsweise, wenn ich dieselbe CSS für einen `h1` und einen `.special` Selektor habe, könnte ich dies als zwei separate Regeln schreiben.

```css
h1 {
  color: blue;
}

.special {
  color: blue;
}
```

Ich könnte diese auch in einer Selektorenliste kombinieren, indem ich ein Komma zwischen sie setze.

```css-nolint
h1, .special {
  color: blue;
}
```

Leerzeichen sind vor oder nach dem Komma zulässig. Sie können die Selektoren auch besser lesbar finden, wenn jeder auf einer neuen Zeile ist.

```css
h1,
.special {
  color: blue;
}
```

### Mit Selektorenlisten spielen

Im folgenden Beispiel versuchen Sie, die zwei Selektoren zu kombinieren, die identische Deklarationen haben. Die visuelle Darstellung sollte danach gleich sein.

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

Im folgenden Beispiel wird die ungültige Klassenselektorregel ignoriert, während das `h1` dennoch gestylt würde.

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

Der universelle Selektor wird durch ein Sternchen (`*`) angezeigt. Er wählt alles im Dokument aus. Wenn `*` mit einem [Nachkommenschaft-Kombinator](/de/docs/Web/CSS/Reference/Selectors/Descendant_combinator) verkettet wird, wählt er alles innerhalb dieses Vorfahren-Elements aus. Zum Beispiel, `p *` wählt alle verschachtelten Elemente innerhalb des `<p>`-Elements aus.

Im folgenden Beispiel verwenden wir den universellen Selektor, um die Ränder für alle Elemente zu entfernen. Anstelle der Standardeinstellungen des Browsers, die Überschriften und Absätze mit Rändern auseinanderhalten, ist alles nah beieinander.

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

Diese Art von Verhalten kann manchmal in "Reset-Stylesheets" gesehen werden, die sämtliche Browser-Stile entfernen. Da der universelle Selektor globale Änderungen vornimmt, verwenden wir ihn für sehr spezifische Situationen, wie die unten beschriebene.

### Den universellen Selektor verwenden, um Ihre Selektoren leichter lesbar zu machen

Eine Anwendung des universellen Selektors ist, Selektoren leichter lesbar und intuitiver zu machen. Wenn wir beispielsweise alle Nachkommenschaft-Elemente eines `<article>`-Elements auswählen möchten, die das erste Kind ihres Elternteils sind, einschließlich direkter Kinder, könnten wir die {{cssxref(":first-child")}} Pseudo-Klasse verwenden. Mehr darüber erfahren Sie in [Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements):

```css
article :first-child {
  font-weight: bold;
}
```

Dieser Selektor könnte jedoch mit `article:first-child` verwechselt werden, was jedes `<article>`-Element auswählt, das das erste Kind eines anderen Elements ist.

Um diese Verwirrung zu vermeiden, könnten wir den universellen Selektor zur `:first-child` Pseudo-Klasse hinzufügen, sodass deutlicher wird, was der Selektor macht. Er wählt _jedes_ Element aus, das das erste Kind eines `<article>`-Elements ist oder das erste Kind eines Nachkommenschaft-Elements von `<article>`:

```css
article *:first-child {
  font-weight: bold;
}
```

Beide sind gleichwertig, aber einige Leute finden die zweite Option leichter zu lesen.

> [!NOTE]
> Diese Technik wird selten auf veröffentlichten Websites verwendet. Wir nutzen sie zum Beispiel kaum auf MDN. Sie sollten jedoch erwägen, sie in Ihrem Code zu verwenden, wenn Sie sie leichter verständlich finden.

## Zusammenfassung

In diesem Artikel haben wir CSS-Selektoren wiederholt, die es Ihnen ermöglichen, bestimmte HTML-Elemente zu markieren, und die Typ-, Klassen- und ID-Selektoren etwas tiefergehender betrachtet als zuvor. Im nächsten Artikel werden wir uns mit Attributselektoren befassen.

> [!NOTE]
> Eine vollständige Liste der Selektoren finden Sie in unserem [CSS-Selektoren-Referenz](/de/docs/Web/CSS/Guides/Selectors).

## Siehe auch

- [CSS-Klassen](https://scrimba.com/the-frontend-developer-career-path-c0j/~01d?via=mdn), Scrimba <sup>[_MDN learning partner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Eine interaktive Lektion, die einige Anleitungen zu CSS-Klassen bietet.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics")}}
