---
title: Typ-, Klassen- und ID-Selektoren
slug: Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors
l10n:
  sourceCommit: 033285c99a8e1bc05b646ff19b70d2e8b86dff46
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors", "Learn/CSS/Building_blocks/Selectors/Attribute_selectors", "Learn/CSS/Building_blocks")}}

In dieser Lektion untersuchen wir einige der einfachsten Selektoren, die Sie wahrscheinlich am häufigsten in Ihrer Arbeit verwenden werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, Grundkenntnisse im
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Umgang mit Dateien</a
        >, HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS erste Schritte</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Um die verschiedenen CSS-Selektoren zu erlernen, die wir verwenden können, um CSS auf ein Dokument anzuwenden.
      </td>
    </tr>
  </tbody>
</table>

## Typ-Selektoren

Ein **Typ-Selektor** wird manchmal als _Tag-Name-Selektor_ oder _Element-Selektor_ bezeichnet, da er ein HTML-Tag/Element in Ihrem Dokument auswählt. Typ-Selektoren sind nicht case-sensitiv. Im folgenden Beispiel haben wir die Selektoren `span`, `em` und `strong` verwendet.

Versuchen Sie, eine CSS-Regel hinzuzufügen, um das `<h1>`-Element auszuwählen und seine Farbe in Blau zu ändern:

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

## Der universelle Selektor

Der universelle Selektor wird durch ein Sternchen (`*`) angezeigt. Er wählt alles im Dokument aus. Wenn `*` mit einem [Nachkommenskombinator](/de/docs/Web/CSS/Descendant_combinator) verkettet wird, wählt es alles innerhalb dieses Vorfahrelements aus. Zum Beispiel wählt `p *` alle verschachtelten Elemente im `<p>`-Element aus.

Im folgenden Beispiel verwenden wir den universellen Selektor, um die Ränder an allen Elementen zu entfernen. Anstelle der Standardstile des Browsers, die Überschriften und Absätze mit Rändern voneinander trennen, ist alles dicht zusammen.

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

Dieses Verhalten kann manchmal in "Reset-Stylesheets" beobachtet werden, die alle Browser-Stilsetzungen entfernen. Da der universelle Selektor globale Änderungen vornimmt, verwenden wir ihn für sehr spezifische Situationen, wie die unten beschriebene.

### Den universellen Selektor verwenden, um Ihre Selektoren leichter lesbar zu machen

Eine Verwendung des universellen Selektors besteht darin, Selektoren leichter lesbar und offensichtlicher in Bezug auf das, was sie tun, zu machen. Zum Beispiel, wenn wir alle Nachkommenselemente eines `<article>`-Elements auswählen wollten, die das erste Kind ihres Elternteils sind, einschließlich direkter Kinder, und sie fett machen, könnten wir die {{cssxref(":first-child")}}-Pseudo-Klasse verwenden. Wir werden mehr darüber in der Lektion über [Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements) lernen, als Nachkommensselektor zusammen mit dem `<article>`-Element-Selektor:

```css
article :first-child {
  font-weight: bold;
}
```

Dieser Selektor könnte jedoch mit `article:first-child` verwechselt werden, der jedes `<article>`-Element auswählt, das das erste Kind eines anderen Elements ist.

Um diese Verwirrung zu vermeiden, können wir den universellen Selektor zur `:first-child`-Pseudo-Klasse hinzufügen, sodass deutlicher wird, was der Selektor macht. Es wird _jedes_ Element ausgewählt, das das erste Kind eines `<article>`-Elements ist, oder das erste Kind eines beliebigen Nachkommenselements von `<article>`:

```css
article *:first-child {
  font-weight: bold;
}
```

Obwohl beide dasselbe tun, wird die Lesbarkeit erheblich verbessert.

## Klassen-Selektoren

Der case-sensitive Klassen-Selektor beginnt mit einem Punkt (`.`) Zeichen. Er wählt alles im Dokument aus, dem die Klasse zugewiesen wurde. Im Live-Beispiel unten haben wir eine Klasse namens `highlight` erstellt und sie an mehreren Stellen in meinem Dokument angewendet. Alle Elemente, bei denen die Klasse angewendet wurde, werden hervorgehoben.

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

### Klassen in bestimmten Elementen ansprechen

Sie können einen Selektor erstellen, der bestimmte Elemente mit der angewendeten Klasse anvisiert. Im nächsten Beispiel werden wir ein `<span>` mit einer Klasse von `highlight` anders hervorheben als eine `<h1>`-Überschrift mit einer Klasse von `highlight`. Dazu verwenden wir den Typ-Selektor für das Element, das wir anvisieren möchten, und hängen die Klasse ohne Leerraum dazwischen mit einem Punkt an.

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

Dieser Ansatz reduziert den Geltungsbereich einer Regel. Die Regel wird nur auf die spezifische Element- und Klassenkombination angewendet. Man müsste einen weiteren Selektor hinzufügen, wenn man entscheidet, dass die Regel auch auf andere Elemente angewendet werden soll.

### Ein Element anvisieren, wenn mehr als eine Klasse angewendet wird

Sie können einem Element mehrere Klassen zuweisen und sie individuell ansprechen oder das Element nur dann auswählen, wenn alle Klassen in dem Selektor vorhanden sind. Dies kann hilfreich sein, wenn man Komponenten aufbaut, die auf unterschiedliche Weise auf Ihrer Website kombiniert werden können.

Im folgenden Beispiel haben wir ein `<div>`, das eine Notiz enthält. Der graue Rahmen wird angewendet, wenn die Box die Klasse `notebox` hat. Wenn sie auch eine Klasse von `warning` oder `danger` hat, ändern wir die {{cssxref("border-color")}}.

Wir können dem Browser mitteilen, dass wir das Element nur dann übereinstimmen möchten, wenn zwei Klassen angewendet werden, indem wir sie ohne Leerzeichen miteinander verketten. Sie werden sehen, dass das letzte `<div>` keine Stilanwendungen erhält, da es nur die `danger`-Klasse hat; es benötigt auch `notebox`, damit etwas angewendet wird.

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

Der case-sensitive ID-Selektor beginnt mit einem `#` anstelle eines Punktes, wird jedoch ähnlich wie ein Klassen-Selektor verwendet. Eine ID kann jedoch nur einmal pro Seite verwendet werden, und Elemente können nur einen einzigen `id`-Wert haben. Er kann ein Element auswählen, das die `id`-Einstellung darauf hat, und Sie können der ID einen Typ-Selektor voranstellen, um das Element nur dann anzuvisieren, wenn sowohl das Element als auch die ID übereinstimmen. Sie können beide Verwendungen im folgenden Beispiel sehen:

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
> Dieselbe ID mehrmals in einem Dokument zu verwenden, mag aus Style-Zwecken funktionieren, aber tun Sie dies nicht. Es ergibt ungültigen Code und verursacht seltsames Verhalten an vielen Stellen.

> [!NOTE]
> Der ID-Selektor hat eine hohe {{cssxref("specificity")}}. Das bedeutet, dass Stile, die auf einer Übereinstimmung eines ID-Selektors basieren, die Stile überstimmen, die auf anderen Selektoren angewendet werden, einschließlich Klassen- und Typselektoren. Da eine ID nur einmal auf einer Seite vorkommen kann und aufgrund der hohen Spezifität von ID-Selektoren, ist es vorzuziehen, einem Element eine Klasse hinzuzufügen, anstatt eine ID. Wenn die Verwendung der ID der einzige Weg ist, um das Element zu targetieren — vielleicht, weil Sie keinen Zugriff auf das Markup haben und es nicht bearbeiten können — überlegen Sie, die ID innerhalb eines [Attributs-Selektors](/de/docs/Web/CSS/Attribute_selectors) zu verwenden, wie z.B. `p[id="header"]`. [Lernen Sie Spezifität](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance).

## Zusammenfassung

Damit sind wir mit Typ-, Klassen- und ID-Selektoren fertig. Wir werden die Erkundung der Selektoren fortsetzen, indem wir uns die [Attribut-Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors) ansehen.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors", "Learn/CSS/Building_blocks/Selectors/Attribute_selectors", "Learn/CSS/Building_blocks")}}
