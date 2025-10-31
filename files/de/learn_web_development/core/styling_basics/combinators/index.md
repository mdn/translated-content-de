---
title: Kombinatoren
slug: Learn_web_development/Core/Styling_basics/Combinators
l10n:
  sourceCommit: 57bc2729e3963907c0b54158ae1a31318a2ebbd1
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements", "Learn_web_development/Core/Styling_basics/Test_your_skills/Selectors", "Learn_web_development/Core/Styling_basics")}}

Die letzten Selektoren, die wir uns ansehen, werden Kombinatoren genannt. Kombinatoren werden verwendet, um andere Selektoren zu kombinieren, sodass wir Elemente basierend auf ihrer Position im DOM relativ zu anderen Elementen auswählen können (zum Beispiel Kind- oder Geschwisterelemente).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (studieren Sie
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
          <li>Nachfahren- und Kind-Kombinatoren.</li>
          <li>Nächste- und folgende-Geschwister-Kombinatoren.</li>
          <li>Verschachtelung.</li>
          <li>Kombination von Kombinatoren mit Selektoren.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Nachfahren-Kombinator

Der **Nachfahren-Kombinator** — dargestellt durch ein einzelnes Leerzeichen (<code> </code>) — kombiniert zwei Selektoren so, dass Elemente, die vom zweiten Selektor erfasst werden, ausgewählt werden, wenn sie einen Vorfahren (ein Elternteil, ein Elternteil eines Elternteils oder ein Elternteil eines Elternteils eines Elternteils, usw.) haben, der dem ersten Selektor entspricht. Selektoren, die einen Nachfahren-Kombinator verwenden, werden _Nachfahren-Selektoren_ genannt.

```css
body article p {
}
```

Im folgenden Beispiel erfassen wir nur das `<p>`-Element, das sich innerhalb eines Elements mit der Klasse `.box` befindet.

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

> [!NOTE]
> [Beiseite: Zusammengesetzte Selektoren](https://scrimba.com/frontend-path-c0j/~0br?via=mdn) <sup>[_MDN-Lernpartner_](/de/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup> von Scrimba ist eine interaktive Lektion, die eine praktische Behandlung von Nachfahren-Kombinatoren bietet.

## Kind-Kombinator

Der **Kind-Kombinator** (`>`) wird zwischen zwei CSS-Selektoren platziert. Er erfasst nur die Elemente, die vom zweiten Selektor erfasst werden und direkte Kinder von Elementen sind, die vom ersten Selektor erfasst werden. Nachfahren-Elemente weiter unten in der Hierarchie werden nicht erfasst. Zum Beispiel, um nur `<p>`-Elemente auszuwählen, die direkte Kinder von `<article>`-Elementen sind:

```css
article > p {
  /* … */
}
```

Im nächsten Beispiel haben wir eine geordnete Liste ({{htmlelement("ol")}}), die in einer ungeordneten Liste ({{htmlelement("ul")}}) verschachtelt ist. Der Kind-Kombinator wählt nur jene `<li>`-Elemente, die direkte Kinder eines `<ul>` sind und gestaltet sie mit einer oberen Begrenzungslinie.

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

Im vorherigen Beispiel versuchen Sie, das `>` zu entfernen, das den Selektor als Kind-Selektor kennzeichnet. Sie erhalten einen Nachfahren-Selektor, und alle `<li>`-Elemente werden mit einer roten Begrenzungslinie versehen.

## Nächste-Geschwister-Kombinator

Der **nächste-Geschwister-Kombinator** (`+`) wird zwischen zwei CSS-Selektoren platziert. Er erfasst nur die Elemente, die vom zweiten Selektor erfasst werden und direkt nach dem Element kommen, das vom ersten Selektor erfasst wird. Zum Beispiel, um alle `<img>`-Elemente auszuwählen, die direkt von einem `<p>`-Element gefolgt werden:

```css
p + img {
  /* … */
}
```

Ein häufiger Anwendungsfall ist es, etwas mit einem Absatz zu machen, der auf eine Überschrift folgt, wie im folgenden Beispiel. Hier wählen wir jeden Absatz aus, der ein Elternelement mit einem `<h1>` teilt und diesem `<h1>` direkt folgt.

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

1. Versuchen Sie, ein weiteres Element wie ein `<h2>` zwischen `<h1>` und `<p>` einzufügen. Sie werden feststellen, dass der Absatz nicht mehr durch den Selektor erfasst wird und daher der Hintergrund und die Vordergrundfarbe nicht angewendet werden, wenn das Element benachbart ist.
2. Ändern Sie nun den `h1 + p`-Selektor, damit der spezielle Stil erneut auf den ersten Absatz angewendet wird.

## Folgende-Geschwister-Kombinator

Wenn Sie Geschwister eines Elements auswählen möchten, auch wenn sie nicht direkt benachbart sind, können Sie den **folgende-Geschwister-Kombinator** (`~`) verwenden. Um alle `<img>`-Elemente auszuwählen, die _irgendwo_ nach `<p>`-Elementen kommen:

```css
p ~ img {
  /* … */
}
```

Im folgenden Beispiel wählen wir alle `<p>`-Elemente aus, die nach dem `<h1>` kommen, und obwohl sich ein `<div>` ebenfalls im Dokument befindet, wird das `<p>` danach ausgewählt.

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

## Kombination von Kombinatoren mit Selektoren

Sie können jeden der Selektoren, die wir in früheren Lektionen entdeckt haben, mit Kombinatoren kombinieren, um einen Teil Ihres Dokuments auszuwählen. Zum Beispiel, um Listenelemente mit einer `class` von `a` auszuwählen, die direkte Kinder eines `<ul>` sind, versuchen Sie folgendes:

```css
ul > li[class="a"] {
}
```

Seien Sie jedoch vorsichtig, wenn Sie große Listen von Selektoren erstellen, die sehr spezifische Teile Ihres Dokuments auswählen. Es wird schwierig sein, die CSS-Regeln wiederzuverwenden, da Sie den Selektor sehr spezifisch für den Ort dieses Elements im Markup gemacht haben.

Es ist oft besser, eine einfache Klasse zu erstellen und diese auf das betreffende Element anzuwenden. Dennoch wird Ihr Wissen über Kombinatoren sehr nützlich, wenn Sie etwas in Ihrem Dokument stylen müssen und keinen Zugriff auf das HTML haben, möglicherweise weil es von einem {{Glossary("CMS", "CMS")}} generiert wird.

## Zusammenfassung

Das war es erst einmal mit Selektoren. Als Nächstes werden wir Ihnen einige Tests geben, mit denen Sie prüfen können, wie gut Sie die Informationen zu CSS-Selektoren verstanden und behalten haben.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements", "Learn_web_development/Core/Styling_basics/Test_your_skills/Selectors", "Learn_web_development/Core/Styling_basics")}}
