---
title: Kombinatoren
slug: Learn_web_development/Core/Styling_basics/Combinators
l10n:
  sourceCommit: 2530db14de9ac226cf06f84540fa0101e804ca9b
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements", "Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics")}}

Die letzten Selektoren, die wir betrachten werden, heißen Kombinatoren. Kombinatoren werden verwendet, um andere Selektoren so zu kombinieren, dass wir Elemente basierend auf ihrer Position im DOM relativ zu anderen Elementen auswählen können (zum Beispiel Kind- oder Geschwisterelemente).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (studieren Sie die
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">Grundlegende CSS-Selektoren</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Das grundlegende Konzept von Kombinatoren.</li>
          <li>Abstammungs- und Kindkombinatoren.</li>
          <li>Nächster- und nachfolgender-Geschwisterkombinatoren.</li>
          <li>Einnistung.</li>
          <li>Kombinieren von Kombinatoren mit Selektoren.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Abstammungskombinator

Der **Abstammungskombinator** — dargestellt durch ein einzelnes Leerzeichen (<code> </code>) — kombiniert zwei Selektoren so, dass die Elemente, die übereinstimmen, vom zweiten Selektor ausgewählt werden, wenn sie ein Vorfahr (ein Elternteil, ein Elternteil eines Elternteils oder ein Elternteil eines Elternteils eines Elternteils, usw.)-Element haben, das mit dem ersten Selektor übereinstimmt. Selektoren, die einen Abstammungskombinator verwenden, werden _Abstammungsselektoren_ genannt.

```css
body article p {
}
```

Im folgenden Beispiel passen wir nur das `<p>`-Element, das sich innerhalb eines Elements mit der Klasse `.box` befindet.

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

## Kindkombinator

Der **Kindkombinator** (`>`) wird zwischen zwei CSS-Selektoren platziert. Er passt nur auf diejenigen Elemente, die vom zweiten Selektor erfasst werden und direkte Kinder von Elementen sind, die vom ersten Selektor erfasst werden. Nachkommen weiter unten in der Hierarchie passen nicht. Um beispielsweise nur `<p>`-Elemente auszuwählen, die direkte Kinder von `<article>`-Elementen sind:

```css
article > p {
  /* … */
}
```

Im nächsten Beispiel haben wir eine geordnete Liste ({{htmlelement("ol")}}) innerhalb einer ungeordneten Liste ({{htmlelement("ul")}}) verschachtelt. Der Kindkombinator wählt nur die `<li>`-Elemente aus, die direkte Kinder eines `<ul>` sind, und gestaltet sie mit einem oberen Rand.

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

Im vorherigen Beispiel versuchen Sie, das `>`, das den Selektor als Kindselektor kennzeichnet, zu entfernen. Sie erhalten einen Abstammungsselektor, und alle `<li>`-Elemente erhalten einen roten Rand.

## Nächster-Geschwister-Kombinator

Der **nächste-Geschwister-Kombinator** (`+`) wird zwischen zwei CSS-Selektoren platziert. Er passt nur auf diejenigen Elemente, die vom zweiten Selektor erfasst werden und direkt nach dem vom ersten Selektor erfassten Element kommen. Um beispielsweise alle `<img>`-Elemente auszuwählen, die unmittelbar von einem `<p>`-Element vorangegangen werden:

```css
p + img {
  /* … */
}
```

Ein häufiger Anwendungsfall ist das Bearbeiten eines Absatzes, der auf eine Überschrift folgt, wie im folgenden Beispiel. Hier wählen wir jeden Absatz aus, der ein übergeordnetes Element mit einer `<h1>` teilt und diese `<h1>` unmittelbar folgt.

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

1. Versuchen Sie, ein weiteres Element, wie ein `<h2>`, zwischen `<h1>` und `<p>` einzufügen. Sie werden feststellen, dass der Absatz nicht mehr vom Selektor erfasst wird und so die Hintergrund- und Vordergrundfarbe nicht angewendet wird, wenn das Element benachbart ist.
2. Ändern Sie nun den `h1 + p`-Selektor, sodass der besondere Stil erneut auf den ersten Absatz angewendet wird.

## Nachfolgender-Geschwister-Kombinator

Wenn Sie Geschwister eines Elements auswählen möchten, auch wenn sie nicht direkt benachbart sind, dann können Sie den **nachfolgenden-Geschwister-Kombinator** (`~`) verwenden. Um alle `<img>`-Elemente auszuwählen, die _irgendwo_ nach `<p>`-Elementen kommen, tun wir dies:

```css
p ~ img {
  /* … */
}
```

Im Beispiel unten wählen wir alle `<p>`-Elemente aus, die nach dem `<h1>` kommen, und obwohl es auch ein `<div>` im Dokument gibt, wird das `<p>`, das danach kommt, ausgewählt.

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

Sie können alle Selektoren, die wir in früheren Lektionen entdeckt haben, mit Kombinatoren kombinieren, um einen Teil Ihres Dokuments auszuwählen. Um beispielsweise Listenelemente mit einer `class` von `a` auszuwählen, die direkte Kinder eines `<ul>` sind, versuchen Sie Folgendes:

```css
ul > li[class="a"] {
}
```

Seien Sie jedoch vorsichtig, wenn Sie große Listen von Selektoren erstellen, die sehr spezifische Teile Ihres Dokuments auswählen. Es wird schwierig sein, die CSS-Regeln wiederzuverwenden, da Sie den Selektor sehr spezifisch für den Ort dieses Elements im Markup gemacht haben.

Es ist oft besser, eine einfache Klasse zu erstellen und diese auf das betroffene Element anzuwenden. Dennoch wird Ihr Wissen über Kombinatoren sehr nützlich sein, wenn Sie etwas in Ihrem Dokument gestalten müssen und keinen Zugriff auf das HTML haben, möglicherweise weil es von einem {{Glossary("CMS", "CMS")}} generiert wird.

## Testen Sie Ihr Wissen!

Sie haben das Ende unserer Lektionen über Selektoren erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Selectors).

## Zusammenfassung

Das war es vorerst mit Selektoren. Als nächstes gehen wir zu einem weiteren wichtigen Teil von CSS über – dem Box-Modell.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements", "Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics")}}
