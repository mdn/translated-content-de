---
title: Kombinatoren
slug: Learn/CSS/Building_blocks/Selectors/Combinators
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements", "Learn/CSS/Building_blocks/Cascade_and_inheritance", "Learn/CSS/Building_blocks")}}

Die letzten Selektoren, die wir betrachten werden, werden Kombinatoren genannt, da sie andere Selektoren auf eine Weise kombinieren, die ihnen eine nützliche Beziehung zueinander und zur Position des Inhalts im Dokument gibt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, grundlegende Kenntnisse im
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Umgang mit Dateien</a
        >, HTML-Grundlagen (lernen Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (lernen Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS Erste Schritte</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie die verschiedenen Kombinator-Selektoren kennen, die in CSS verwendet werden können.
      </td>
    </tr>
  </tbody>
</table>

## Nachkomme-Kombinator

Der **Nachkomme-Kombinator** — typischerweise durch ein einzelnes Leerzeichen (" ") dargestellt — kombiniert zwei Selektoren so, dass Elemente, die vom zweiten Selektor getroffen werden, ausgewählt werden, wenn sie ein Vorfahre (Elternteil, Elternteil des Elternteils, etc.) Element haben, das dem ersten Selektor entspricht. Selektoren, die einen Nachkomme-Kombinator verwenden, werden _Nachkomme-Selektoren_ genannt.

```css
body article p
```

Im folgenden Beispiel wählen wir nur das `<p>`-Element aus, das sich innerhalb eines Elements mit der Klasse `.box` befindet.

{{EmbedGHLiveSample("css-examples/learn/selectors/descendant.html", '100%', 500)}}

## Kind-Kombinator

Der **Kind-Kombinator** (`>`) wird zwischen zwei CSS-Selektoren platziert. Er trifft nur auf diejenigen Elemente, die vom zweiten Selektor getroffen werden und direkte Kinder von Elementen sind, die vom ersten getroffen werden. Nachkommen-Elemente weiter unten in der Hierarchie werden nicht getroffen. Zum Beispiel, um nur `<p>`-Elemente auszuwählen, die direkte Kinder von `<article>`-Elementen sind:

```css
article > p
```

Im nächsten Beispiel haben wir eine geordnete Liste ({{htmlelement("ol")}}), die in einer ungeordneten Liste ({{htmlelement("ul")}}) verschachtelt ist. Der Kind-Kombinator wählt nur die `<li>`-Elemente aus, die direkte Kinder eines `<ul>` sind, und formatiert sie mit einem oberen Rand.

Wenn Sie das `>` entfernen, das diesen als Kind-Kombinator kennzeichnet, erhalten Sie einen Nachkomme-Selektor und alle `<li>`-Elemente erhalten einen roten Rand.

{{EmbedGHLiveSample("css-examples/learn/selectors/child.html", '100%', 600)}}

## Nachbar-Kombinator

Der **Nachbar-Kombinator** (`+`) wird zwischen zwei CSS-Selektoren platziert. Er trifft nur auf diejenigen Elemente, die vom zweiten Selektor getroffen werden und das nächste Nachbarelement des ersten Selektors sind. Zum Beispiel, um alle `<img>`-Elemente auszuwählen, die unmittelbar von einem `<p>`-Element vorausgegangen werden:

```css
p + img
```

Ein häufiges Anwendungsbeispiel ist es, etwas mit einem Absatz zu machen, der auf eine Überschrift folgt, wie im folgenden Beispiel. In diesem Beispiel suchen wir nach jedem Absatz, der sich ein Elternelement mit einem `<h1>` teilt und direkt auf dieses `<h1>` folgt.

Wenn Sie ein anderes Element, wie ein `<h2>`, zwischen das `<h1>` und das `<p>` einfügen, werden Sie feststellen, dass der Absatz nicht mehr vom Selektor getroffen wird und daher nicht der Hintergrund- und Vordergrundfarbe zugewiesen wird, wenn das Element benachbart ist.

<!-- Dieses Beispiel befindet sich unter https://github.com/mdn/css-examples/blob/main/learn/selectors/adjacent.html -->

{{EmbedGHLiveSample("css-examples/learn/selectors/adjacent.html", '100%', 800)}}

## Geschwister-Kombinator

Wenn Sie Geschwister eines Elements auswählen möchten, auch wenn sie nicht direkt benachbart sind, können Sie den **Geschwister-Kombinator** (`~`) verwenden. Um alle `<img>`-Elemente auszuwählen, die _irgendwo_ nach `<p>`-Elementen kommen:

```css
p ~ img
```

Im folgenden Beispiel wählen wir alle `<p>`-Elemente aus, die nach dem `<h1>` kommen, und obwohl sich auch ein `<div>` im Dokument befindet, wird das `<p>`, das danach kommt, ausgewählt.

<!-- Dieses Beispiel befindet sich unter https://github.com/mdn/css-examples/blob/main/learn/selectors/general.html -->

{{EmbedGHLiveSample("css-examples/learn/selectors/general.html", '100%', 600)}}

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

Der [`&`-Verschachtelungsselektor](/de/docs/Web/CSS/Nesting_selector) kann auch verwendet werden, um komplexe Selektoren zu erstellen.

```css
p {
  & img {
  }
}
/* This is parsed by the browser as */
p img {
}
```

<!-- Dieses Beispiel befindet sich unter https://github.com/mdn/css-examples/blob/main/learn/selectors/nesting.html -->

{{EmbedGHLiveSample("css-examples/learn/selectors/nesting.html", '100%', 800)}}

> [!NOTE]
> Im obigen Beispiel ist der `&`-Verschachtelungsselektor nicht erforderlich, aber das Hinzufügen hilft, explizit zu zeigen, dass CSS-Verschachtelung verwendet wird.

## Verwendung von Kombinatoren

Sie können alle Selektoren, die wir in den vorherigen Lektionen kennengelernt haben, mit Kombinatoren kombinieren, um einen Teil Ihres Dokuments auszuwählen. Zum Beispiel, um Listenelemente mit der Klasse "a" auszuwählen, die direkte Kinder eines `<ul>` sind, versuchen Sie Folgendes:

```css
ul > li[class="a"] {
}
```

Seien Sie jedoch vorsichtig, wenn Sie lange Listen von Selektoren erstellen, die sehr spezifische Teile Ihres Dokuments auswählen. Es wird schwierig sein, die CSS-Regeln wiederzuverwenden, da Sie den Selektor sehr spezifisch für die Position dieses Elements im Markup gemacht haben.

Es ist oft besser, eine einfache Klasse zu erstellen und diese auf das betreffende Element anzuwenden. Davon abgesehen wird Ihr Wissen über Kombinatoren sehr nützlich sein, wenn Sie etwas in Ihrem Dokument stylen müssen und keinen Zugriff auf das HTML haben, möglicherweise weil es von einem [CMS](/de/docs/Glossary/CMS) generiert wird.

## Testen Sie Ihr Wissen!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihr Wissen: Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Selectors_Tasks).

## Zusammenfassung

Dies ist der letzte Abschnitt unserer Lektionen zu Selektoren. Als Nächstes gehen wir zu einem anderen wichtigen Teil von CSS über — der [Kaskade, Spezifizität und Vererbung](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance).

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements", "Learn/CSS/Building_blocks/Cascade_and_inheritance", "Learn/CSS/Building_blocks")}}
