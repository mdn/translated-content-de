---
title: Kombinatoren
slug: Learn_web_development/Core/Styling_basics/Combinators
l10n:
  sourceCommit: a92e10b293358bc796c43d5872a8981fd988a005
---

{{LearnSidebar}}

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements", "Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics")}}

Die letzten Selektoren, die wir uns ansehen werden, werden Kombinatoren genannt. Kombinatoren werden verwendet, um andere Selektoren zu kombinieren, sodass wir Elemente basierend auf ihrer Position im DOM im Verhältnis zu anderen Elementen auswählen können (zum Beispiel Kind oder Geschwister).

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        HTML-Grundlagen (studieren
        <a href="/de/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Grundlegende HTML-Syntax</a
        >), <a href="/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">Grundlegende CSS-Selektoren<a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Lernziele:</th>
      <td>
        <ul>
          <li>Das grundlegende Konzept von Kombinatoren.</li>
          <li>Nachkommen- und Kind-Kombinatoren.</li>
          <li>Nächste- und darauffolgende-Geschwister-Kombinatoren.</li>
          <li>Verschachtelung.</li>
          <li>Kombinieren von Kombinatoren mit Selektoren.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Nachkommen-Kombinator

Der **Nachkommen-Kombinator** — typischerweise durch ein einzelnes Leerzeichen (<code> </code>) dargestellt — kombiniert zwei Selektoren, sodass Elemente, die durch den zweiten Selektor ausgewählt werden, ausgewählt werden, wenn sie ein Vorfahrelement (Eltern, Eltern von Eltern, usw.) haben, das dem ersten Selektor entspricht. Selektoren, die einen Nachkommen-Kombinator nutzen, werden _Nachkommen-Selektoren_ genannt.

```css
body article p {
}
```

Im folgenden Beispiel wählen wir nur das `<p>`-Element aus, das sich innerhalb eines Elements mit einer Klasse von `.box` befindet.

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

Der **Kind-Kombinator** (`>`) wird zwischen zwei CSS-Selektoren platziert. Er wählt nur die Elemente aus, die durch den zweiten Selektor angesprochen werden und direkte Kinder von Elementen sind, die dem ersten Selektor entsprechen. Nachkommen-Elemente weiter unten in der Hierarchie werden nicht ausgewählt. Zum Beispiel, um nur `<p>`-Elemente auszuwählen, die direkte Kinder von `<article>`-Elementen sind:

```css
article > p
```

Im nächsten Beispiel haben wir eine geordnete Liste ({{htmlelement("ol")}}), die in einer ungeordneten Liste ({{htmlelement("ul")}}) eingebettet ist. Der Kind-Kombinator wählt nur die `<li>`-Elemente aus, die direkte Kinder eines `<ul>` sind und versieht sie mit einem oberen Rand.

Wenn Sie das `>` entfernen, das dies als Kind-Kombinator kennzeichnet, erhalten Sie einen Nachkommen-Selektor, und alle `<li>`-Elemente erhalten einen roten Rand.

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

## Nächste-Geschwister-Kombinator

Der **nächste-Geschwister-Kombinator** (`+`) wird zwischen zwei CSS-Selektoren platziert. Er wählt nur die Elemente aus, die durch den zweiten Selektor angesprochen werden und direkt nach dem Element kommen, das dem ersten Selektor entspricht. Zum Beispiel, um alle `<img>`-Elemente auszuwählen, die unmittelbar von einem `<p>`-Element vorausgegangen werden:

```css
p + img
```

Ein typischer Anwendungsfall ist, etwas mit einem Absatz zu machen, der auf eine Überschrift folgt, wie im folgenden Beispiel. In diesem Beispiel suchen wir nach jedem Absatz, der ein Elternelement mit einem `<h1>` teilt und diesem `<h1>` unmittelbar folgt.

Wenn Sie ein anderes Element wie ein `<h2>` zwischen das `<h1>` und das `<p>` einfügen, werden Sie feststellen, dass der Absatz nicht mehr von dem Selektor ausgewählt wird und somit nicht der Hintergrund- und Vordergrundfarbe angewendet wird, wenn das Element benachbart ist.

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

## Darauffolgende-Geschwister-Kombinator

Wenn Sie Geschwister eines Elements auswählen möchten, auch wenn diese nicht direkt angrenzen, können Sie den **darauffolgenden-Geschwister-Kombinator** (`~`) verwenden. Um alle `<img>`-Elemente auszuwählen, die _irgendwo_ nach `<p>`-Elementen kommen, würden wir Folgendes tun:

```css
p ~ img
```

Im folgenden Beispiel wählen wir alle `<p>`-Elemente aus, die nach dem `<h1>` kommen, und obwohl es auch ein `<div>` im Dokument gibt, wird das `<p>`, das danach kommt, ausgewählt.

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

Der [`&`-Nesting-Selektor](/de/docs/Web/CSS/Nesting_selector) kann ebenfalls verwendet werden, um komplexe Selektoren zu erstellen:

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
> Im obigen Beispiel ist der `&`-Nesting-Selektor nicht erforderlich, aber seine Verwendung hilft, explizit zu zeigen, dass CSS-Nesting verwendet wird.

## Kombinieren von Kombinatoren mit Selektoren

Sie können jeden der Selektoren verwenden, die wir in den vorherigen Lektionen kennengelernt haben, um mit Kombinatoren einen Teil Ihres Dokuments auszuwählen. Um zum Beispiel Listenelemente mit einer `class` von `a` auszuwählen, die direkte Kinder eines `<ul>` sind, probieren Sie Folgendes:

```css
ul > li[class="a"] {
}
```

Seien Sie jedoch vorsichtig, wenn Sie große Listen von Selektoren erstellen, die sehr spezifische Teile Ihres Dokuments auswählen. Es wird schwierig sein, die CSS-Regeln wiederzuverwenden, da Sie den Selektor sehr spezifisch für die Position dieses Elements im Markup gemacht haben.

Es ist oft besser, eine einfache Klasse zu erstellen und diese auf das betreffende Element anzuwenden. Dennoch wird Ihr Wissen über Kombinatoren sehr nützlich sein, wenn Sie etwas in Ihrem Dokument stilisieren müssen und keinen Zugriff auf das HTML haben, möglicherweise weil es von einem {{Glossary("CMS", "CMS")}} generiert wird.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende unseres Lehrgangs über Selektoren erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie fortfahren — siehe [Testen Sie Ihre Fähigkeiten: Selektoren](/de/docs/Learn_web_development/Core/Styling_basics/Basic_selectors/Selectors_Tasks).

## Zusammenfassung

Das war's erstmal zu Selektoren. Als Nächstes wenden wir uns einem weiteren wichtigen Teil von CSS zu — dem Boxmodell.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements", "Learn_web_development/Core/Styling_basics/Box_model", "Learn_web_development/Core/Styling_basics")}}
