---
title: Kombinatoren
slug: Learn/CSS/Building_blocks/Selectors/Combinators
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements", "Learn/CSS/Building_blocks/Cascade_and_inheritance", "Learn/CSS/Building_blocks")}}

Die letzten Selektoren, die wir betrachten werden, heißen Kombinatoren, weil sie andere Selektoren auf eine Weise kombinieren, die ihnen eine nützliche Beziehung zueinander und zur Position von Inhalten im Dokument gibt.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, grundlegendes Wissen über
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >den Umgang mit Dateien</a
        >, Grundkenntnisse in HTML (siehe
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), und eine Vorstellung davon, wie CSS funktioniert (siehe
        <a href="/de/docs/Learn/CSS/First_steps">CSS Erste Schritte</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Zu lernen, welche verschiedenen Kombinatoren in CSS verwendet werden können.
      </td>
    </tr>
  </tbody>
</table>

## Nachfahr-Kombinator

Der **Nachfahr-Kombinator** — typischerweise durch ein einzelnes Leerzeichen (" ") dargestellt — kombiniert zwei Selektoren derart, dass Elemente, die durch den zweiten Selektor ausgewählt werden, gewählt werden, wenn sie einen Vorfahren (Elternteil, Elternteil des Elternteils, etc.) haben, der dem ersten Selektor entspricht. Selektoren, die einen Nachfahr-Kombinator verwenden, werden als _Nachfahr-Selektoren_ bezeichnet.

```css
body article p
```

Im folgenden Beispiel selektieren wir nur das `<p>`-Element, das sich innerhalb eines Elements mit der Klasse `.box` befindet.

{{EmbedGHLiveSample("css-examples/learn/selectors/descendant.html", '100%', 500)}}

## Kind-Kombinator

Der **Kind-Kombinator** (`>`) wird zwischen zwei CSS-Selektoren platziert. Er selektiert nur jene Elemente, die durch den zweiten Selektor ausgewählt werden und direkte Kinder der durch den ersten Selektor ausgewählten Elemente sind. Nachfahr-Elemente weiter unten in der Hierarchie werden nicht selektiert. Zum Beispiel, um nur `<p>`-Elemente zu selektieren, die direkte Kinder von `<article>`-Elementen sind:

```css
article > p
```

Im nächsten Beispiel haben wir eine geordnete Liste ({{htmlelement("ol")}}), die in einer ungeordneten Liste ({{htmlelement("ul")}}) verschachtelt ist. Der Kind-Kombinator wählt nur jene `<li>`-Elemente, die direkte Kinder eines `<ul>` sind, und versieht sie mit einem oberen Rand.

Wenn Sie das `>`, das dieses als Kind-Kombinator kennzeichnet, entfernen, erhalten Sie einen Nachfahr-Selektor und alle `<li>`-Elemente bekommen einen roten Rand.

{{EmbedGHLiveSample("css-examples/learn/selectors/child.html", '100%', 600)}}

## Nachbar-Kombinator

Der **Nachbar-Kombinator** (`+`) wird zwischen zwei CSS-Selektoren platziert. Er selektiert nur jene Elemente, die durch den zweiten Selektor ausgewählt werden und das nächste Geschwisterelement des ersten Selektors sind. Zum Beispiel, um alle `<img>`-Elemente zu selektieren, die unmittelbar auf ein `<p>`-Element folgen:

```css
p + img
```

Ein häufiges Anwendungsbeispiel ist das Styling eines Absatzes, der auf eine Überschrift folgt, wie im untenstehenden Beispiel. In diesem Beispiel suchen wir nach jedem Absatz, der ein Eltern-Element mit einem `<h1>` teilt und unmittelbar auf dieses `<h1>` folgt.

Wenn Sie ein anderes Element wie ein `<h2>` zwischen das `<h1>` und das `<p>` einfügen, werden Sie feststellen, dass der Absatz nicht mehr durch den Selektor ausgewählt wird und daher die Hintergrund- und Vordergrundfarbe nicht angewendet wird, wenn das Element benachbart ist.

<!-- This example lives https://github.com/mdn/css-examples/blob/main/learn/selectors/adjacent.html -->

{{EmbedGHLiveSample("css-examples/learn/selectors/adjacent.html", '100%', 800)}}

## Allgemeiner Geschwisterkombinator

Wenn Sie Geschwister eines Elements auswählen möchten, auch wenn sie nicht direkt benachbart sind, können Sie den **allgemeinen Geschwisterkombinator** (`~`) verwenden. Um alle `<img>`-Elemente zu selektieren, die _irgendwo_ nach `<p>`-Elementen kommen, würden wir folgendes tun:

```css
p ~ img
```

Im untenstehenden Beispiel selektieren wir alle `<p>`-Elemente, die nach dem `<h1>` kommen, und selbst wenn es ein `<div>` im Dokument gibt, wird das `<p>`, das danach kommt, ausgewählt.

<!-- This example lives https://github.com/mdn/css-examples/blob/main/learn/selectors/general.html -->

{{EmbedGHLiveSample("css-examples/learn/selectors/general.html", '100%', 600)}}

## Erstellen komplexer Selektoren mit Verschachtelung

Das [CSS-Nesting-Modul](/de/docs/Web/CSS/CSS_nesting/Using_CSS_nesting#combinators) erlaubt es Ihnen, verschachtelte Regeln zu schreiben, die Kombinatoren verwenden, um [komplexe Selektoren](/de/docs/Web/CSS/CSS_selectors/Selector_structure#complex_selector) zu erstellen.

```css
p {
  ~ img {
  }
}
/* Dies wird vom Browser wie folgt geparst */
p ~ img {
}
```

Der [`&` Nesting-Selektor](/de/docs/Web/CSS/Nesting_selector) kann ebenfalls verwendet werden, um komplexe Selektoren zu erstellen.

```css
p {
  & img {
  }
}
/* Dies wird vom Browser wie folgt geparst */
p img {
}
```

<!-- This example lives https://github.com/mdn/css-examples/blob/main/learn/selectors/nesting.html -->

{{EmbedGHLiveSample("css-examples/learn/selectors/nesting.html", '100%', 800)}}

> [!NOTE]
> Im obigen Beispiel ist der `&` Nesting-Selektor nicht erforderlich, aber das Hinzufügen hilft, explizit zu zeigen, dass CSS-Nesting verwendet wird.

## Verwendung von Kombinatoren

Sie können alle der Selektoren, die wir in vorherigen Lektionen entdeckt haben, mit Kombinatoren kombinieren, um einen bestimmten Teil Ihres Dokuments auszuwählen. Um zum Beispiel Listenelemente mit einer Klasse "a" auszuwählen, die direkte Kinder eines `<ul>` sind, versuchen Sie Folgendes:

```css
ul > li[class="a"] {
}
```

Seien Sie jedoch vorsichtig, wenn Sie große Listen von Selektoren erstellen, die sehr spezifische Teile Ihres Dokuments auswählen. Es wird schwierig sein, die CSS-Regeln wiederzuverwenden, da Sie den Selektor sehr spezifisch für die Position dieses Elements im Markup gemacht haben.

Es ist oft besser, eine einfache Klasse zu erstellen und diese auf das betreffende Element anzuwenden. Dennoch wird Ihr Wissen über Kombinatoren sehr nützlich sein, wenn Sie etwas in Ihrem Dokument stylen müssen und keinen Zugriff auf das HTML haben, vielleicht weil es von einem {{Glossary("CMS")}} generiert wird.

## Testen Sie Ihre Kenntnisse!

Sie haben das Ende dieses Artikels erreicht, aber können Sie sich die wichtigsten Informationen merken? Sie können einige weitere Tests finden, um zu überprüfen, ob Sie diese Informationen behalten haben, bevor Sie weitermachen — siehe [Testen Sie Ihre Kenntnisse: Selektoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Selectors_Tasks).

## Zusammenfassung

Dies ist der letzte Abschnitt in unseren Lektionen über Selektoren. Als nächstes werden wir uns einem weiteren wichtigen Teil von CSS zuwenden — der [Kaskade, Spezifität und Vererbung](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance).

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements", "Learn/CSS/Building_blocks/Cascade_and_inheritance", "Learn/CSS/Building_blocks")}}
