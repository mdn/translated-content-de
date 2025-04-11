---
title: Kombinatoren
slug: Learn_web_development/Core/Styling_basics/Combinators
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements", "Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics")}}

Die letzten Selektoren, die wir uns ansehen werden, werden Kombinatoren genannt. Kombinatoren werden verwendet, um andere Selektoren so zu kombinieren, dass wir Elemente basierend auf ihrer Position im DOM relativ zu anderen Elementen auswählen können (zum Beispiel Kind- oder Geschwisterelemente).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (Studium von
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
          <li>Nachfolgende und Kind-Kombinatoren.</li>
          <li>Nächste- und Nachgeschwister-Kombinatoren.</li>
          <li>Verschachtelung.</li>
          <li>Kombinieren von Kombinatoren mit Selektoren.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Nachfahr-Kombinator

Der **Nachfahr-Kombinator** — typischerweise durch ein einzelnes Leerzeichen (<code> </code>) dargestellt — kombiniert zwei Selektoren so, dass Elemente, die vom zweiten Selektor übereinstimmen, ausgewählt werden, wenn sie ein Vorfahrenelement (Eltern, Eltern des Elternteils, etc.) haben, das mit dem ersten Selektor übereinstimmt. Selektoren, die einen Nachfahr-Kombinator verwenden, werden _Nachfahr-Selektoren_ genannt.

```css
body article p {
}
```

Im Beispiel unten stimmen wir nur mit dem `<p>`-Element überein, das sich innerhalb eines Elements mit einer Klasse von `.box` befindet.

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

Der **Kind-Kombinator** (`>`) wird zwischen zwei CSS-Selektoren platziert. Er stimmt nur mit den Elementen überein, die direkte Kinder von Elementen sind, die mit dem ersten Selektor übereinstimmen. Nachfahrende Elemente weiter unten in der Hierarchie stimmen nicht überein. Zum Beispiel, um nur `<p>`-Elemente auszuwählen, die direkte Kinder von `<article>`-Elementen sind:

```css
article > p {
  /* … */
}
```

Im nächsten Beispiel haben wir eine geordnete Liste ({{htmlelement("ol")}}), die in einer ungeordneten Liste ({{htmlelement("ul")}}) verschachtelt ist. Der Kind-Kombinator wählt nur die `<li>`-Elemente aus, die direkte Kinder eines `<ul>` sind, und stylt sie mit einem oberen Rand.

Wenn Sie das `>` entfernen, das dies als Kind-Kombinator kennzeichnet, erhalten Sie einen Nachfahr-Selektor und alle `<li>`-Elemente erhalten einen roten Rand.

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

Der **nächster-Geschwister-Kombinator** (`+`) wird zwischen zwei CSS-Selektoren platziert. Er stimmt nur mit den Elementen überein, die direkt nach dem Element kommen, das mit dem ersten Selektor übereinstimmt. Zum Beispiel, um alle `<img>`-Elemente auszuwählen, die unmittelbar von einem `<p>`-Element vorausgegangen werden:

```css
p + img {
  /* … */
}
```

Ein häufiges Anwendungsbeispiel ist etwas mit einem Absatz zu tun, der auf eine Überschrift folgt, wie im folgenden Beispiel. In diesem Beispiel suchen wir nach einem Absatz, der ein Eltern-Element mit einem `<h1>` teilt und unmittelbar auf dieses `<h1>` folgt.

Wenn Sie ein anderes Element wie ein `<h2>` zwischen `<h1>` und `<p>` einfügen, werden Sie feststellen, dass der Absatz nicht mehr vom Selektor erfasst wird und daher nicht die Hintergrund- und Vordergrundfarbe erhält, wenn das Element benachbart ist.

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

## Nachgeschwister-Kombinator

Wenn Sie Geschwister eines Elements auswählen möchten, auch wenn sie nicht direkt benachbart sind, können Sie den **nachgeschwister-Kombinator** (`~`) verwenden. Um alle `<img>`-Elemente auszuwählen, die _irgendwo_ nach `<p>`-Elementen kommen, würden wir dies tun:

```css
p ~ img {
  /* … */
}
```

Im Beispiel unten wählen wir alle `<p>`-Elemente aus, die nach dem `<h1>` kommen, und obwohl es ein `<div>` im Dokument gibt, wird das `<p>`, das danach kommt, ausgewählt.

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

## Erstellen komplexer Selektoren mit Verschachtelung

Das [CSS-Nesting-Modul](/de/docs/Web/CSS/CSS_nesting/Using_CSS_nesting#combinators) ermöglicht es Ihnen, verschachtelte Regeln zu schreiben, die Kombinatoren verwenden, um [komplexe Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector) zu erstellen.

```css
p {
  ~ img {
  }
}
/* This is parsed by the browser as */
p ~ img {
}
```

Der [`&`-Verschachtelungsselektor](/de/docs/Web/CSS/Nesting_selector) kann auch verwendet werden, um komplexe Selektoren zu erstellen:

```css
p {
  & img {
  }
}
/* This is parsed by the browser as */
p img {
}
```

Hier ist ein Beispiel, das komplexe Selektoren demonstriert:

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

Sie können die Selektoren, die wir in den vorherigen Lektionen entdeckt haben, mit Kombinatoren kombinieren, um einen Teil Ihres Dokuments auszuwählen. Zum Beispiel, um Listenelemente mit einer `class` von `a` auszuwählen, die direkte Kinder eines `<ul>` sind, versuchen Sie folgendes:

```css
ul > li[class="a"] {
}
```

Seien Sie jedoch vorsichtig, wenn Sie große Listen von Selektoren erstellen, die sehr spezifische Teile Ihres Dokuments auswählen. Es wird schwierig sein, die CSS-Regeln wiederzuverwenden, da Sie den Selektor sehr spezifisch für die Position dieses Elements im Markup gemacht haben.

Es ist oft besser, eine einfache Klasse zu erstellen und diese auf das betreffende Element anzuwenden. Das gesagt, Ihr Wissen über Kombinatoren wird sehr nützlich sein, wenn Sie etwas in Ihrem Dokument gestalten müssen und keinen Zugriff auf das HTML haben, vielleicht weil es von einem {{Glossary("CMS", "CMS")}} generiert wird.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende unserer Reihe von Lektionen über Selektoren erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, dass Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Selectors).

## Zusammenfassung

Das war's vorerst mit Selektoren. Als nächstes gehen wir zu einem weiteren wichtigen Teil von CSS über — dem Box-Modell.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements", "Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics")}}
