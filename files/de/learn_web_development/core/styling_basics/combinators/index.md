---
title: Kombinatoren
slug: Learn_web_development/Core/Styling_basics/Combinators
l10n:
  sourceCommit: c9f602a26092661130a031b7148d696a3ac9802e
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements", "Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics")}}

Die letzten Selektoren, die wir betrachten werden, heißen Kombinatoren. Kombinatoren werden verwendet, um andere Selektoren so zu kombinieren, dass wir in der Lage sind, Elemente basierend auf ihrer Position im DOM relativ zu anderen Elementen auszuwählen (beispielsweise Kind- oder Geschwisterelemente).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (Studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Die grundlegende HTML-Syntax</a
        >), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">Grundlegende CSS-Selektoren</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Das Grundkonzept von Kombinatoren.</li>
          <li>Nachfahren- und Kind-Kombinatoren.</li>
          <li>Nächstes und Folgendes Geschwister-Kombinatoren.</li>
          <li>Verschachtelung.</li>
          <li>Kombinieren von Kombinatoren mit Selektoren.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Nachfahren-Kombinator

Der **Nachfahren-Kombinator** — dargestellt durch ein einzelnes Leerzeichen (<code> </code>) — kombiniert zwei Selektoren so, dass Elemente, die durch den zweiten Selektor übereinstimmen, ausgewählt werden, wenn sie einen Vorfahren (einen Elternteil, den Elternteil eines Elternteils oder den Elternteil eines Elternteils eines Elternteils usw.) haben, der mit dem ersten Selektor übereinstimmt. Selektoren, die einen Nachfahren-Kombinator verwenden, werden _Nachfahren-Selektoren_ genannt.

```css
body article p {
}
```

Im unten stehenden Beispiel vergleichen wir nur das `<p>`-Element, das sich innerhalb eines Elements mit der Klasse `.box` befindet.

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

Der **Kind-Kombinator** (`>`) wird zwischen zwei CSS-Selektoren platziert. Er stimmt nur mit den Elementen überein, die durch den zweiten Selektor ausgewählt werden, die direkte Kinder der Elemente sind, die durch den ersten Selektor ausgewählt werden. Nachfahren-Elemente weiter unten in der Hierarchie stimmen nicht überein. Um beispielsweise nur `<p>`-Elemente auszuwählen, die direkte Kinder von `<article>`-Elementen sind:

```css
article > p {
  /* … */
}
```

Im nächsten Beispiel haben wir eine geordnete Liste ({{htmlelement("ol")}}), die in eine ungeordnete Liste ({{htmlelement("ul")}}) eingebettet ist. Der Kind-Kombinator wählt nur die `<li>`-Elemente aus, die direkte Kinder eines `<ul>` sind, und versieht sie mit einer oberen Umrandung.

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

Versuchen Sie im vorherigen Beispiel, das `>` zu entfernen, das den Selektor als Kind-Selektor bezeichnet. Sie erhalten einen Nachfahren-Selektor, und alle `<li>`-Elemente erhalten eine rote Umrandung.

## Nächstes Geschwister-Kombinator

Der **nächste Geschwister-Kombinator** (`+`) wird zwischen zwei CSS-Selektoren platziert. Er stimmt nur mit den Elementen überein, die durch den zweiten Selektor ausgewählt werden und direkt nach dem Element kommen, das durch den ersten Selektor ausgewählt wird. Um beispielsweise alle `<img>`-Elemente auszuwählen, die unmittelbar von einem `<p>`-Element vorangegangen werden:

```css
p + img {
  /* … */
}
```

Ein häufiger Anwendungsfall ist es, etwas mit einem Absatz zu tun, der auf eine Überschrift folgt, wie im folgenden Beispiel. Hier wählen wir jeden Absatz aus, der ein Elternelement mit einem `<h1>` teilt und diesem `<h1>` unmittelbar folgt.

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
  background-color: #333;
  color: #fff;
  padding: 0.5em;
}
```

{{EmbedLiveSample("adjacent", "", "220px")}}

Im vorherigen Beispiel:

1. Versuchen Sie, ein weiteres Element wie ein `<h2>` zwischen das `<h1>` und das `<p>` einzufügen. Sie werden feststellen, dass der Absatz nicht mehr von dem Selektor erfasst wird und somit der Hintergrund- und Vordergrundfarbe nicht angewendet wird, wenn das Element angrenzend ist.
2. Ändern Sie nun den `h1 + p`-Selektor so, dass der spezielle Stil erneut auf den ersten Absatz angewendet wird.

## Folgendes Geschwister-Kombinator

Wenn Sie Geschwister eines Elements auswählen möchten, auch wenn sie nicht direkt angrenzend sind, dann können Sie den **folgenden Geschwister-Kombinator** (`~`) verwenden. Um alle `<img>`-Elemente auszuwählen, die _irgendwo_ nach `<p>`-Elementen kommen, würden wir Folgendes tun:

```css
p ~ img {
  /* … */
}
```

Im unten stehenden Beispiel wählen wir alle `<p>`-Elemente aus, die nach dem `<h1>` kommen, und obwohl es auch ein `<div>` im Dokument gibt, wird das `<p>`, das danach kommt, ausgewählt.

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
  background-color: #333;
  color: #fff;
  padding: 0.5em;
}
```

{{EmbedLiveSample("general", "", "220px")}}

## Kombinieren von Kombinatoren mit Selektoren

Sie können alle Selektoren, die wir in den vorherigen Lektionen entdeckt haben, mit Kombinatoren kombinieren, um Teile Ihres Dokuments auszuwählen. Um zum Beispiel Listenelemente mit einer `class` von `a` auszuwählen, die direkte Kinder eines `<ul>` sind, probieren Sie Folgendes:

```css
ul > li[class="a"] {
}
```

Seien Sie jedoch vorsichtig, wenn Sie große Listen von Selektoren erstellen, die sehr spezifische Teile Ihres Dokuments auswählen. Es wird schwierig sein, die CSS-Regeln zu wiederverwenden, da Sie den Selektor sehr spezifisch für den Standort dieses Elements im Markup gemacht haben.

Es ist oft besser, eine einfache Klasse zu erstellen und diese auf das betreffende Element anzuwenden. Das Wissen über Kombinatoren wird jedoch sehr nützlich sein, wenn Sie etwas in Ihrem Dokument stylen müssen und nicht auf das HTML zugreifen können, vielleicht weil es von einem {{Glossary("CMS", "CMS")}} generiert wird.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende unserer Reihe von Lektionen über Selektoren erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Selectors).

## Zusammenfassung

Das war's fürs Erste mit den Selektoren. Als Nächstes werden wir uns einem weiteren wichtigen Teil von CSS zuwenden — dem Box-Modell.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements", "Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics")}}
