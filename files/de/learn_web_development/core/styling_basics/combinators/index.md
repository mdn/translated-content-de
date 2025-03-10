---
title: Kombinatoren
slug: Learn_web_development/Core/Styling_basics/Combinators
l10n:
  sourceCommit: 9c9be5239fe7fb2907784e8cace339d4910eb103
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements", "Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics")}}

Die letzten Selektoren, die wir uns ansehen werden, werden Kombinatoren genannt. Kombinatoren werden verwendet, um andere Selektoren zu kombinieren, sodass wir Elemente basierend auf ihrer Position im DOM in Bezug auf andere Elemente auswählen können (zum Beispiel Kind- oder Geschwisterelemente).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        Grundlagen von HTML (studieren
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
          <li>Nachfahren- und Kindkombinatoren.</li>
          <li>Nächste- und nachfolgende-Geschwisterkombinatoren.</li>
          <li>Verschachtelung.</li>
          <li>Kombinieren von Kombinatoren mit Selektoren.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Nachfahrenkombinator

Der **Nachfahrenkombinator** — typischerweise durch ein einzelnes Leerzeichen (<code> </code>) dargestellt — kombiniert zwei Selektoren, sodass Elemente, die durch den zweiten Selektor ausgewählt wurden, ausgewählt werden, wenn sie ein Vorfahrelement (Elternteil, Elternteil des Elternteils, etc.) besitzen, das dem ersten Selektor entspricht. Selektoren, die einen Nachfahrenkombinator verwenden, werden _Nachfahrenselektoren_ genannt.

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

## Kindkombinator

Der **Kindkombinator** (`>`) wird zwischen zwei CSS-Selektoren platziert. Er wählt nur diejenigen Elemente aus, die durch den zweiten Selektor ausgewählt werden, die direkte Kinder von Elementen sind, die durch den ersten Selektor ausgewählt werden. Nachfahrelemente weiter unten in der Hierarchie werden nicht ausgewählt. Zum Beispiel, um nur `<p>`-Elemente auszuwählen, die direkte Kinder von `<article>`-Elementen sind:

```css
article > p
```

Im nächsten Beispiel haben wir eine geordnete Liste ({{htmlelement("ol")}}) innerhalb einer ungeordneten Liste ({{htmlelement("ul")}}). Der Kindkombinator wählt nur die `<li>`-Elemente aus, die direkte Kinder eines `<ul>` sind, und formatiert sie mit einem oberen Rand.

Wenn Sie das `>` entfernen, das dies als Kindkombinator definiert, erhalten Sie einen Nachfahrenselektor und alle `<li>`-Elemente bekommen einen roten Rand.

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

## Nächster-Geschwister-Kombinator

Der **nächster-Geschwister-Kombinator** (`+`) wird zwischen zwei CSS-Selektoren platziert. Er wählt nur diejenigen Elemente aus, die durch den zweiten Selektor ausgewählt werden, die direkt nach dem Element kommen, das durch den ersten Selektor ausgewählt wird. Zum Beispiel, um alle `<img>`-Elemente auszuwählen, die unmittelbar von einem `<p>`-Element gefolgt werden:

```css
p + img
```

Ein häufiges Anwendungsbeispiel ist das Styling eines Absatzes, der einem Überschriftselement folgt, wie im untenstehenden Beispiel. In diesem Beispiel suchen wir nach einem beliebigen Absatz, der ein Elternteil mit einem `<h1>` teilt, und unmittelbar diesem `<h1>` folgt.

Wenn Sie ein anderes Element wie ein `<h2>` zwischen das `<h1>` und das `<p>` einfügen, werden Sie feststellen, dass der Absatz nicht mehr vom Selektor erfasst wird und daher nicht den Hintergrund- und Vordergrundfarbeffekt erhält, wenn das Element benachbart ist.

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

## Nachfolgender-Geschwister-Kombinator

Wenn Sie Geschwister eines Elements auswählen möchten, auch wenn sie nicht direkt benachbart sind, können Sie den **nachfolgender-Geschwister-Kombinator** (`~`) verwenden. Um alle `<img>`-Elemente auszuwählen, die _irgendwo_ nach einem `<p>`-Element kommen, würden wir dies tun:

```css
p ~ img
```

Im folgenden Beispiel wählen wir alle `<p>`-Elemente aus, die nach dem `<h1>` kommen, und obwohl sich auch ein `<div>` im Dokument befindet, wird das `<p>`, das nach dem `<div>` kommt, ausgewählt.

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

## Erstellen von komplexen Selektoren durch Verschachtelung

Das [CSS-Verschachtelungsmodul](/de/docs/Web/CSS/CSS_nesting/Using_CSS_nesting#combinators) ermöglicht es Ihnen, verschachtelte Regeln zu schreiben, die Kombinatoren verwenden, um [komplexe Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector) zu erstellen.

```css
p {
  ~ img {
  }
}
/* This is parsed by the browser as */
p ~ img {
}
```

Der [`&`-Verschachtelungsselektor](/de/docs/Web/CSS/Nesting_selector) kann ebenfalls verwendet werden, um komplexe Selektoren zu erstellen:

```css
p {
  & img {
  }
}
/* This is parsed by the browser as */
p img {
}
```

Hier ist ein Beispiel, das komplexe Selektoren zeigt:

```html live-sample___nesting
<article>
  <h1>A heading</h1>
  <p>I am a paragraph.</p>
  <div>I am a div</div>
  <p>I am another paragraph.</p>
</article>
```

```css live-sample___nesting
body {
  font-family: sans-serif;
}

h1 {
  & ~ p {
    /* this is parsed by the browser as h1 ~ p */
    font-weight: bold;
    background-color: #333;
    color: #fff;
    padding: 0.5em;
  }
}
```

{{EmbedLiveSample("nesting", "", "220px")}}

> [!NOTE]
> Im obigen Beispiel ist der `&`-Verschachtelungsselektor nicht erforderlich, aber das Hinzufügen hilft, explizit zu zeigen, dass CSS-Verschachtelung verwendet wird.

## Kombinieren von Kombinatoren mit Selektoren

Sie können einen der Selektoren, die wir in vorherigen Lektionen entdeckt haben, mit Kombinatoren kombinieren, um Teile Ihres Dokuments auszuwählen. Um zum Beispiel Listenelemente mit einer `class` von `a` auszuwählen, die direkte Kinder eines `<ul>` sind, versuchen Sie Folgendes:

```css
ul > li[class="a"] {
}
```

Seien Sie jedoch vorsichtig, wenn Sie große Listen von Selektoren erstellen, die sehr spezifische Teile Ihres Dokuments auswählen. Es wird schwierig sein, die CSS-Regeln wiederzuverwenden, da Sie den Selektor sehr spezifisch für den Standort dieses Elements im Markup gemacht haben.

Es ist oft besser, eine einfache Klasse zu erstellen und diese auf das betreffende Element anzuwenden. Dennoch wird Ihr Wissen über Kombinatoren sehr nützlich sein, wenn Sie etwas in Ihrem Dokument stylen müssen und keinen Zugriff auf das HTML haben, vielleicht weil es von einem {{Glossary("CMS", "CMS")}} generiert wird.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende unserer Lektion über Selektoren erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors/Selectors_Tasks).

## Zusammenfassung

Das war's vorerst mit Selektoren. Als nächstes werden wir uns einem weiteren wichtigen Teil von CSS zuwenden — dem Box-Modell.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements", "Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics")}}
