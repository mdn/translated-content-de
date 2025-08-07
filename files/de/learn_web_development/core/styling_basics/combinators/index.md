---
title: Kombinatoren
slug: Learn_web_development/Core/Styling_basics/Combinators
l10n:
  sourceCommit: 451c6b58988664128473a881871707c5ec9737f2
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements", "Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics")}}

Die letzten Selektoren, die wir uns ansehen werden, werden Kombinatoren genannt. Kombinatoren werden verwendet, um andere Selektoren zu kombinieren, sodass wir Elemente basierend auf ihrer Position im DOM relativ zu anderen Elementen auswählen können (beispielsweise Kind oder Geschwister).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax">Grundlegende HTML-Syntax</a>), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">Grundlegende CSS-Selektoren</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Das grundlegende Konzept von Kombinatoren.</li>
          <li>Kinder- und Nachkommen-Kombinatoren.</li>
          <li>Nächster- und nachfolgender-Geschwister-Kombinator.</li>
          <li>Verschachtelung.</li>
          <li>Kombinieren von Kombinatoren mit Selektoren.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Nachkommen-Kombinator

Der **Nachkommen-Kombinator** — dargestellt durch ein einzelnes Leerzeichen (<code> </code>) — kombiniert zwei Selektoren, sodass Elemente, die vom zweiten Selektor übereinstimmen, ausgewählt werden, wenn sie ein Vorfahrenelement (ein Elternteil, ein Elternteil des Elternteils oder ein Elternteil des Elternteils des Elternteils usw.) haben, das dem ersten Selektor entspricht. Selektoren, die einen Nachkommen-Kombinator nutzen, werden _Nachkommen-Selektoren_ genannt.

```css
body article p {
}
```

Im folgenden Beispiel wählen wir nur das `<p>`-Element aus, das sich innerhalb eines Elements mit der Klasse `.box` befindet.

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

Der **Kind-Kombinator** (`>`) wird zwischen zwei CSS-Selektoren platziert. Er stimmt nur mit den Elementen überein, die vom zweiten Selektor ausgewählt werden und direkte Kinder von Elementen sind, die vom ersten Selektor ausgewählt werden. Nachkommenelemente weiter unten in der Hierarchie entsprechen nicht. Zum Beispiel, um nur `<p>`-Elemente auszuwählen, die direkte Kinder von `<article>`-Elementen sind:

```css
article > p {
  /* … */
}
```

Im nächsten Beispiel haben wir eine geordnete Liste ({{htmlelement("ol")}}), die in eine ungeordnete Liste ({{htmlelement("ul")}}) eingebettet ist. Der Kind-Kombinator wählt nur diejenigen `<li>`-Elemente aus, die direkte Kinder eines `<ul>` sind, und stylt sie mit einem oberen Rand.

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

Im vorherigen Beispiel versuchen Sie, das `>`, das den Selektor als Kind-Selektor kennzeichnet, zu entfernen. Sie erhalten einen Nachkommen-Selektor, und alle `<li>`-Elemente erhalten einen roten Rand.

## Nächster-Geschwister-Kombinator

Der **nächster-Geschwister-Kombinator** (`+`) wird zwischen zwei CSS-Selektoren platziert. Er stimmt nur mit den Elementen überein, die vom zweiten Selektor ausgewählt werden und direkt nach dem Element kommen, das vom ersten Selektor ausgewählt wird. Zum Beispiel, um alle `<img>`-Elemente auszuwählen, die unmittelbar von einem `<p>`-Element vorangegangen werden:

```css
p + img {
  /* … */
}
```

Ein häufiges Anwendungsbeispiel ist, etwas mit einem Absatz zu tun, der einem Titel folgt, wie im folgenden Beispiel. Hier wählen wir jeden Absatz aus, der ein Elternelement mit einem `<h1>` teilt und dem `<h1>` unmittelbar folgt.

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
  color: white;
  padding: 0.5em;
}
```

{{EmbedLiveSample("adjacent", "", "220px")}}

Im vorherigen Beispiel:

1. Versuchen Sie, ein anderes Element wie ein `<h2>` zwischen dem `<h1>` und dem `<p>` einzufügen. Sie werden feststellen, dass der Absatz nicht mehr vom Selektor ausgewählt wird und daher nicht die Hintergrund- und Vordergrundfarbe angewendet wird, wenn das Element angrenzend ist.
2. Ändern Sie nun den `h1 + p`-Selektor, sodass der spezielle Stil erneut auf den ersten Absatz angewendet wird.

## Nachfolgender-Geschwister-Kombinator

Wenn Sie Geschwister eines Elements auswählen möchten, auch wenn diese nicht direkt daneben liegen, können Sie den **nachfolgender-Geschwister-Kombinator** (`~`) verwenden. Um alle `<img>`-Elemente auszuwählen, die _irgendwo_ nach `<p>`-Elementen kommen, würden wir dies tun:

```css
p ~ img {
  /* … */
}
```

Im folgenden Beispiel wählen wir alle `<p>`-Elemente aus, die nach dem `<h1>` kommen, und selbst wenn noch ein `<div>` im Dokument vorhanden ist, wird das `<p>`, das nach ihm kommt, ausgewählt.

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
  color: white;
  padding: 0.5em;
}
```

{{EmbedLiveSample("general", "", "220px")}}

## Kombinieren von Kombinatoren mit Selektoren

Sie können alle Selektoren, die wir in früheren Lektionen entdeckt haben, mit Kombinatoren kombinieren, um einen Teil Ihres Dokuments auszuwählen. Zum Beispiel, um Listenelemente mit einer `class` von `a` auszuwählen, die direkte Kinder eines `<ul>` sind, probieren Sie das folgende:

```css
ul > li[class="a"] {
}
```

Seien Sie jedoch vorsichtig, wenn Sie lange Listen von Selektoren erstellen, die sehr spezifische Teile Ihres Dokuments auswählen. Es wird schwierig sein, die CSS-Regeln wiederzuverwenden, da Sie den Selektor sehr spezifisch für die Position dieses Elements im Markup gemacht haben.

Es ist oft besser, eine einfache Klasse zu erstellen und diese auf das betreffende Element anzuwenden. Dennoch wird Ihr Wissen über Kombinatoren sehr nützlich sein, wenn Sie etwas in Ihrem Dokument stylen müssen und keinen Zugriff auf das HTML haben, vielleicht weil es von einem {{Glossary("CMS", "CMS")}} generiert wird.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende unserer Lektionen über Selektoren erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, dass Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Selectors).

## Zusammenfassung

Das war's vorerst mit Selektoren. Als nächstes werden wir uns einem weiteren wichtigen Teil von CSS zuwenden — dem Boxmodell.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements", "Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics")}}
