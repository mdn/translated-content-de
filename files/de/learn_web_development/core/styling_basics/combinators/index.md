---
title: Kombinatoren
slug: Learn_web_development/Core/Styling_basics/Combinators
l10n:
  sourceCommit: 78bdd004c24d256efc8372f18204ea58f83a1b5e
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements", "Learn_web_development/Core/Styling_basics/Test_your_skills/Selectors", "Learn_web_development/Core/Styling_basics")}}

Die letzten Selektoren, die wir betrachten werden, nennt man Kombinatoren. Kombinatoren werden verwendet, um andere Selektoren zu kombinieren, sodass wir Elemente basierend auf ihrer Position im DOM relativ zu anderen Elementen auswählen können (zum Beispiel Kind- oder Geschwisterelemente).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">Grundlegende CSS-Selektoren</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Das Grundkonzept von Kombinatoren.</li>
          <li>Nachfahren- und Kind-Kombinatoren.</li>
          <li>Nächstes und nachfolgendes Geschwister-Kombinatoren.</li>
          <li>Verschachtelung.</li>
          <li>Kombinieren von Kombinatoren mit Selektoren.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Nachfahren-Kombinator

Der **Nachfahren-Kombinator** — dargestellt durch ein einzelnes Leerzeichen (<code> </code>) — kombiniert zwei Selektoren, sodass Elemente, die vom zweiten Selektor erfasst werden, ausgewählt werden, wenn sie ein Vorfahrelement (ein Elternteil, ein Elternteil eines Elternteils oder ein Elternteil eines Elternteils eines Elternteils, usw.) haben, das vom ersten Selektor erfasst wird. Selektoren, die einen Nachfahren-Kombinator verwenden, werden _Nachfahren-Selektoren_ genannt.

```css
body article p {
}
```

Im unten stehenden Beispiel wird nur das `<p>`-Element ausgewählt, das sich innerhalb eines Elements mit der Klasse `.box` befindet.

```html live-sample___descendant
<div class="box"><p>Text in .box</p></div>
<p>Text not in .box</p>
```

```css live-sample___descendant
.box p {
  color: red;
}
```

{{EmbedLiveSample("descendant")}}

## Kind-Kombinator

Der **Kind-Kombinator** (`>`) wird zwischen zwei CSS-Selektoren eingefügt. Er erfasst nur diejenigen Elemente, die vom zweiten Selektor erfasst werden und direkte Kinder von Elementen sind, die vom ersten Selektor erfasst werden. Nachfahren-Elemente weiter unten in der Hierarchie werden nicht erfasst. Um zum Beispiel nur `<p>`-Elemente zu wählen, die direkte Kinder von `<article>`-Elementen sind:

```css
article > p {
  /* … */
}
```

Im nächsten Beispiel haben wir eine geordnete Liste ({{htmlelement("ol")}}), die in einer ungeordneten Liste ({{htmlelement("ul")}}) verschachtelt ist. Der Kind-Kombinator wählt nur jene `<li>`-Elemente aus, die direkte Kinder eines `<ul>` sind, und gestaltet sie mit einer oberen Grenze.

```html live-sample___child
<ul>
  <li>Unordered item</li>
  <li>
    Unordered item
    <ol>
      <li>Item 1</li>
      <li>Item 2</li>
    </ol>
  </li>
</ul>
```

```css live-sample___child
ul > li {
  border-top: 5px solid red;
}
```

{{EmbedLiveSample("child")}}

Im vorherigen Beispiel versuchen Sie, das `>`, das den Selektor als Kind-Selektor kennzeichnet, zu entfernen. Sie erhalten dann einen Nachfahren-Selektor und alle `<li>`-Elemente erhalten einen roten Rahmen.

## Nächstes-Geschwister-Kombinator

Der **nächstes-Geschwister-Kombinator** (`+`) wird zwischen zwei CSS-Selektoren eingefügt. Er erfasst nur jene Elemente, die vom zweiten Selektor erfasst werden und direkt nach dem Element kommen, das vom ersten Selektor erfasst wird. Um zum Beispiel alle `<img>`-Elemente auszuwählen, die unmittelbar von einem `<p>`-Element vorangegangen werden:

```css
p + img {
  /* … */
}
```

Ein häufiges Szenario ist es, etwas mit einem Absatz zu tun, der einem Überschriften-Element folgt, wie im folgenden Beispiel. Hier wählen wir jeden Absatz aus, der ein übergeordnetes Element mit einem `<h1>` teilt und unmittelbar diesem `<h1>` folgt.

```html live-sample___adjacent
<article>
  <h1>A heading</h1>
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>

  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
</article>
```

```css live-sample___adjacent
body {
  font-family: sans-serif;
}

h1 + p {
  font-weight: bold;
  background-color: #333333;
  color: white;
  padding: 0.5em;
}
```

{{EmbedLiveSample("adjacent", "", "220px")}}

Im vorherigen Beispiel:

1. Versuchen Sie, ein weiteres Element wie ein `<h2>` zwischen das `<h1>` und das `<p>` einzufügen. Sie werden feststellen, dass der Absatz nicht mehr vom Selektor erfasst wird und daher keine Hintergrund- und Vordergrundfarbe erhält, wenn sich das Element in der Nähe befindet.
2. Ändern Sie nun den `h1 + p`-Selektor, sodass der spezielle Stil erneut auf den ersten Absatz angewendet wird.

## Nachfolgendes-Geschwister-Kombinator

Wenn Sie Geschwister eines Elements auswählen möchten, auch wenn sie nicht direkt benachbart sind, können Sie den **nachfolgenden Geschwister-Kombinator** (`~`) verwenden. Um alle `<img>`-Elemente auszuwählen, die _irgendwo_ nach `<p>`-Elementen kommen, würden wir das folgendermaßen tun:

```css
p ~ img {
  /* … */
}
```

Im Beispiel unten wählen wir alle `<p>`-Elemente aus, die nach dem `<h1>` kommen, und obwohl es im Dokument ebenfalls ein `<div>` gibt, wird das `<p>`, das danach kommt, ausgewählt.

```html live-sample___general
<article>
  <h1>A heading</h1>
  <p>I am a paragraph.</p>
  <div>I am a div</div>
  <p>I am another paragraph.</p>
</article>
```

```css live-sample___general
body {
  font-family: sans-serif;
}

h1 ~ p {
  font-weight: bold;
  background-color: #333333;
  color: white;
  padding: 0.5em;
}
```

{{EmbedLiveSample("general", "", "220px")}}

## Kombinieren von Kombinatoren mit Selektoren

Sie können alle Selektoren, die wir in den vorherigen Lektionen entdeckt haben, mit Kombinatoren kombinieren, um einen Teil Ihres Dokuments auszuwählen. Um beispielsweise Listenelemente mit einer `class` von `a` auszuwählen, die direkte Kinder eines `<ul>` sind, probieren Sie Folgendes:

```css
ul > li[class="a"] {
}
```

Seien Sie jedoch vorsichtig, wenn Sie lange Listen von Selektoren erstellen, die sehr spezifische Teile Ihres Dokuments auswählen. Es wird schwierig sein, die CSS-Regeln wiederzuverwenden, da Sie den Selektor sehr spezifisch für die Position dieses Elements im Markup gemacht haben.

Es ist oft besser, eine einfache Klasse zu erstellen und diese auf das betreffende Element anzuwenden. Dennoch wird Ihr Wissen über Kombinatoren sehr nützlich sein, wenn Sie etwas in Ihrem Dokument stylen müssen und nicht auf das HTML zugreifen können, möglicherweise weil es von einem {{Glossary("CMS", "CMS")}} generiert wird.

## Zusammenfassung

Das war es vorerst mit Selektoren. Als Nächstes geben wir Ihnen einige Tests, mit denen Sie überprüfen können, wie gut Sie die Informationen, die wir zu CSS-Selektoren bereitgestellt haben, verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements", "Learn_web_development/Core/Styling_basics/Test_your_skills/Selectors", "Learn_web_development/Core/Styling_basics")}}
