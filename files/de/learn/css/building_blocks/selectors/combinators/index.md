---
title: Kombinatoren
slug: Learn/CSS/Building_blocks/Selectors/Combinators
l10n:
  sourceCommit: 68772e87a84d6d6fc6a8e377dea4998afbeb511c
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements", "Learn/CSS/Building_blocks/Cascade_and_inheritance", "Learn/CSS/Building_blocks")}}

Die letzten Selektoren, die wir betrachten werden, werden Kombinatoren genannt, da sie andere Selektoren kombinieren und diesen eine nützliche Beziehung zueinander und zur Position des Inhalts im Dokument geben.

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
          >Arbeiten mit Dateien</a
        >, HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS erste Schritte</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie die verschiedenen Kombinatorselektoren kennen, die in
        CSS verwendet werden können.
      </td>
    </tr>
  </tbody>
</table>

## Nachfahrkombinator

Der **Nachfahrkombinator** — typischerweise durch ein einzelnes Leerzeichen (<code> </code>) dargestellt — kombiniert zwei Selektoren, sodass Elemente, die durch den zweiten Selektor übereinstimmen, ausgewählt werden, wenn sie ein Vorfahrenelement (Eltern, Elternteil eines Elternteils, usw.) haben, das mit dem ersten Selektor übereinstimmt. Selektoren, die einen Nachfahrkombinator verwenden, werden _Nachfahrselektoren_ genannt.

```css
body article p {
}
```

Im folgenden Beispiel matchen wir nur das `<p>`-Element, das innerhalb eines Elements mit der Klasse `.box` liegt.

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

Der **Kindkombinator** (`>`) wird zwischen zwei CSS-Selektoren platziert. Er wählt nur diejenigen Elemente aus, die dem zweiten Selektor entsprechen und direkte Kinder derjenigen Elemente sind, die dem ersten entsprechen. Nachfahrenelemente weiter unten in der Hierarchie werden nicht ausgewählt. Um beispielsweise nur `<p>`-Elemente auszuwählen, die direkte Kinder von `<article>`-Elementen sind:

```css
article > p
```

Im nächsten Beispiel haben wir eine geordnete Liste ({{htmlelement("ol")}}) innerhalb einer ungeordneten Liste ({{htmlelement("ul")}}). Der Kindkombinator wählt nur die `<li>`-Elemente aus, die direkte Kinder eines `<ul>` sind, und stylt sie mit einem oberen Rahmen.

Wenn Sie das `>` entfernen, das dies als Kindkombinator kennzeichnet, erhalten Sie einen Nachfahrselektor und alle `<li>`-Elemente erhalten einen roten Rahmen.

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

## Nachbarkombinator

Der **Nachbarkombinator** (`+`) wird zwischen zwei CSS-Selektoren platziert. Er wählt nur diejenigen Elemente aus, die dem zweiten Selektor entsprechen und das nächste Geschwisterelement des ersten Selektors sind. Um beispielsweise alle `<img>`-Elemente auszuwählen, die unmittelbar von einem `<p>`-Element gefolgt werden:

```css
p + img
```

Ein häufiges Anwendungsbeispiel ist das Stylen eines Absatzes, der auf eine Überschrift folgt, wie im folgenden Beispiel. In diesem Beispiel suchen wir nach einem beliebigen Absatz, der ein Elternelement mit einem `<h1>` teilt und unmittelbar diesem `<h1>` folgt.

Wenn Sie ein anderes Element wie ein `<h2>` zwischen das `<h1>` und das `<p>` einfügen, werden Sie feststellen, dass der Absatz nicht mehr vom Selektor ausgewählt wird und daher nicht die Hintergrund- und Vordergrundfarbe erhält, wenn das Element benachbart ist.

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

## Allgemeiner Geschwisterkombinator

Wenn Sie Geschwister eines Elements auswählen möchten, auch wenn sie nicht direkt benachbart sind, können Sie den **allgemeinen Geschwisterkombinator** (`~`) verwenden. Um alle `<img>`-Elemente auszuwählen, die _irgendwo_ nach `<p>`-Elementen kommen, würden wir dies tun:

```css
p ~ img
```

Im folgenden Beispiel wählen wir alle `<p>`-Elemente aus, die nach dem `<h1>` kommen, und obwohl sich auch ein `<div>` im Dokument befindet, wird das `<p>`, das danach kommt, ausgewählt.

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

Das [CSS-Nesting-Modul](/de/docs/Web/CSS/CSS_nesting/Using_CSS_nesting#combinators) ermöglicht es, verschachtelte Regeln zu schreiben, die Kombinatoren verwenden, um [komplexe Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector) zu erstellen.

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
> Im obigen Beispiel ist der `&`-Verschachtelungsselektor nicht erforderlich, aber das Hinzufügen hilft, ausdrücklich zu zeigen, dass CSS-Verschachtelung verwendet wird.

## Verwendung von Kombinatoren

Sie können jeden der Selektoren, die wir in vorherigen Lektionen entdeckt haben, mit Kombinatoren kombinieren, um einen Teil Ihres Dokuments auszuwählen. Um beispielsweise Listenelemente mit einer Klasse "a" auszuwählen, die direkte Kinder eines `<ul>` sind, versuchen Sie Folgendes:

```css
ul > li[class="a"] {
}
```

Achten Sie jedoch darauf, wenn Sie große Listen von Selektoren erstellen, die sehr spezifische Teile Ihres Dokuments auswählen. Es wird schwierig sein, die CSS-Regeln wiederzuverwenden, da Sie den Selektor sehr spezifisch für die Position dieses Elements im Markup gemacht haben.

Es ist oft besser, eine einfache Klasse zu erstellen und diese auf das betreffende Element anzuwenden. Das heißt, Ihr Wissen über Kombinatoren wird sehr nützlich sein, wenn Sie etwas in Ihrem Dokument stylen müssen und keinen Zugriff auf das HTML haben, möglicherweise weil es von einem {{Glossary("CMS", "CMS")}} generiert wird.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie finden einige weitere Tests, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Selectors_Tasks).

## Zusammenfassung

Dies ist der letzte Abschnitt unserer Lektionen zu Selektoren. Als nächstes werden wir uns einem weiteren wichtigen Teil von CSS zuwenden — dem [Cascade, Spezifität und Vererbung](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance).

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements", "Learn/CSS/Building_blocks/Cascade_and_inheritance", "Learn/CSS/Building_blocks")}}
