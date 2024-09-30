---
title: Kombinatoren
slug: Learn/CSS/Building_blocks/Selectors/Combinators
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements", "Learn/CSS/Building_blocks/Cascade_and_inheritance", "Learn/CSS/Building_blocks")}}

Die letzten Selektoren, die wir uns ansehen werden, werden Kombinatoren genannt, weil sie andere Selektoren so kombinieren, dass sie eine nützliche Beziehung zueinander und zur Position von Inhalten im Dokument haben.

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
        >, HTML-Grundlagen (siehe
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (siehe
        <a href="/de/docs/Learn/CSS/First_steps">CSS Erste Schritte</a>.)
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

## Nachfolgender Kombinator

Der **Nachfolgender Kombinator** — meist durch ein einzelnes Leerzeichen (" ") dargestellt — kombiniert zwei Selektoren, sodass die durch den zweiten Selektor ausgewählten Elemente ausgewählt werden, wenn sie ein Vorfahrenelement (Eltern, Eltern des Elternteils, Eltern des Elternteils des Elternteils usw.) haben, das zum ersten Selektor passt. Selektoren, die einen nachfolgenden Kombinator verwenden, werden _nachfolgende Selektoren_ genannt.

```css
body article p
```

Im folgenden Beispiel passen wir nur das `<p>`-Element, das sich innerhalb eines Elements mit einer Klasse von `.box` befindet.

{{EmbedGHLiveSample("css-examples/learn/selectors/descendant.html", '100%', 500)}}

## Kindkombinator

Der **Kindkombinator** (`>`) wird zwischen zwei CSS-Selektoren platziert. Er passt nur auf diejenigen Elemente, die durch den zweiten Selektor ausgewählt werden und direkte Kinder von Elementen sind, die durch den ersten Selektor ausgewählt werden. Nachfolgende Elemente, die weiter unten in der Hierarchie liegen, passen nicht. Zum Beispiel, um nur `<p>`-Elemente auszuwählen, die direkte Kinder von `<article>`-Elementen sind:

```css
article > p
```

In diesem nächsten Beispiel haben wir eine geordnete Liste ({{htmlelement("ol")}}), die innerhalb einer ungeordneten Liste ({{htmlelement("ul")}}) verschachtelt ist. Der Kindkombinator wählt nur jene `<li>`-Elemente aus, die direkte Kinder eines `<ul>` sind, und versieht sie mit einem oberen Rand.

Wenn Sie das `>` entfernen, das diesen Kombinator als Kindkombinator bezeichnet, erhalten Sie einen nachfolgenden Selektor, und alle `<li>`-Elemente erhalten einen roten Rand.

{{EmbedGHLiveSample("css-examples/learn/selectors/child.html", '100%', 600)}}

## Direkt-Nachbar-Kombinator

Der **Direkt-Nachbar-Kombinator** (`+`) wird zwischen zwei CSS-Selektoren platziert. Er passt nur auf diejenigen Elemente, die durch den zweiten Selektor ausgewählt werden und das nächste Geschwisterelement des ersten Selektors sind. Zum Beispiel, um alle `<img>`-Elemente auszuwählen, die unmittelbar von einem `<p>`-Element vorausgegangen werden:

```css
p + img
```

Ein häufiges Anwendungsszenario ist, etwas mit einem Absatz zu machen, der einem Überschriftselement folgt, wie im folgenden Beispiel. In diesem Beispiel suchen wir nach einem Absatz, der ein Elternelement mit einem `<h1>` teilt und unmittelbar diesem `<h1>` folgt.

Wenn Sie ein anderes Element wie ein `<h2>` zwischen dem `<h1>` und dem `<p>` einfügen, werden Sie feststellen, dass der Absatz nicht mehr durch den Selektor erfasst wird und daher die Hintergrund- und Vordergrundfarbe nicht angewendet werden, wenn das Element benachbart ist.

<!-- This example lives https://github.com/mdn/css-examples/blob/main/learn/selectors/adjacent.html -->

{{EmbedGHLiveSample("css-examples/learn/selectors/adjacent.html", '100%', 800)}}

## Allgemeiner-Geschwister-Kombinator

Wenn Sie Geschwister eines Elements auswählen möchten, auch wenn sie nicht direkt benachbart sind, können Sie den **Allgemeiner-Geschwister-Kombinator** (`~`) verwenden. Um alle `<img>`-Elemente auszuwählen, die _irgendwo_ nach `<p>`-Elementen kommen, würden Sie das tun:

```css
p ~ img
```

Im folgenden Beispiel wählen wir alle `<p>`-Elemente aus, die nach dem `<h1>` kommen, und obwohl sich auch ein `<div>` im Dokument befindet, wird das `<p>`, das danach kommt, ausgewählt.

<!-- This example lives https://github.com/mdn/css-examples/blob/main/learn/selectors/general.html -->

{{EmbedGHLiveSample("css-examples/learn/selectors/general.html", '100%', 600)}}

## Erstellung komplexer Selektoren mit Verschachtelung

Das [CSS-Nesting-Modul](/de/docs/Web/CSS/CSS_nesting/Using_CSS_nesting#combinators) erlaubt Ihnen das Schreiben verschachtelter Regeln, die Kombinatoren verwenden, um [komplexe Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector) zu erstellen.

```css
p {
  ~ img {
  }
}
/* This is parsed by the browser as */
p ~ img {
}
```

Der [`&` Verschachtelungs-Selektor](/de/docs/Web/CSS/Nesting_selector) kann auch verwendet werden, um komplexe Selektoren zu erstellen.

```css
p {
  & img {
  }
}
/* This is parsed by the browser as */
p img {
}
```

<!-- This example lives https://github.com/mdn/css-examples/blob/main/learn/selectors/nesting.html -->

{{EmbedGHLiveSample("css-examples/learn/selectors/nesting.html", '100%', 800)}}

> [!NOTE]
> Im obigen Beispiel ist der `&` Verschachtelungs-Selektor nicht erforderlich, aber das Hinzufügen hilft, explizit zu zeigen, dass CSS-Nesting verwendet wird.

## Verwendung von Kombinatoren

Sie können alle der in den vorherigen Lektionen entdeckten Selektoren mit Kombinatoren kombinieren, um Teile Ihres Dokuments auszuwählen. Zum Beispiel, um Listenelemente mit einer Klasse von "a" auszuwählen, die direkte Kinder eines `<ul>` sind, versuchen Sie das folgende:

```css
ul > li[class="a"] {
}
```

Seien Sie jedoch vorsichtig, wenn Sie große Listen von Selektoren erstellen, die sehr spezifische Teile Ihres Dokuments auswählen. Es wird schwierig sein, die CSS-Regeln wiederzuverwenden, da Sie den Selektor sehr spezifisch für den Standort dieses Elements im Markup gemacht haben.

Es ist oft besser, eine einfache Klasse zu erstellen und diese dem betreffenden Element zuzuweisen. Nichtsdestotrotz wird Ihr Wissen über Kombinatoren sehr nützlich sein, wenn Sie etwas in Ihrem Dokument stylen müssen und keinen Zugriff auf das HTML haben, vielleicht weil es von einem [CMS](/de/docs/Glossary/CMS) generiert wird.

## Testen Sie Ihre Fähigkeiten!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich an die wichtigsten Informationen erinnern? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Fähigkeiten: Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Selectors_Tasks).

## Zusammenfassung

Dies ist der letzte Abschnitt unserer Lektionen über Selektoren. Als nächstes gehen wir zu einem weiteren wichtigen Teil von CSS über — die [Kaskade, Spezifität und Vererbung](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance).

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements", "Learn/CSS/Building_blocks/Cascade_and_inheritance", "Learn/CSS/Building_blocks")}}
