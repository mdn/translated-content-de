---
title: Typ-, Klassen- und ID-Selektoren
slug: Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors", "Learn/CSS/Building_blocks/Selectors/Attribute_selectors", "Learn/CSS/Building_blocks")}}

In dieser Lektion untersuchen wir einige der einfachsten Selektoren, die Sie wahrscheinlich am häufigsten in Ihrer Arbeit verwenden werden.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Basissoftware installiert</a
        >, grundlegende Kenntnisse im
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Umgang mit Dateien</a
        >, HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS erste Schritte</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Lernen Sie die verschiedenen CSS-Selektoren kennen, die wir verwenden können, um CSS auf ein Dokument anzuwenden.
      </td>
    </tr>
  </tbody>
</table>

## Typselektoren

Ein **Typselektor** wird manchmal auch als _Tag-Name-Selektor_ oder _Elementselektor_ bezeichnet, weil er ein HTML-Tag/Element in Ihrem Dokument auswählt. Typselektoren sind nicht case-sensitiv. Im folgenden Beispiel haben wir die `span`, `em` und `strong` Selektoren verwendet.

**Versuchen Sie, eine CSS-Regel hinzuzufügen, um das `<h1>`-Element auszuwählen und seine Farbe in Blau zu ändern.**

{{EmbedGHLiveSample("css-examples/learn/selectors/type.html", '100%', 1100)}}

## Der universelle Selektor

Der universelle Selektor wird durch ein Sternchen (`*`) angezeigt. Er wählt alles im Dokument aus. Wenn `*` mithilfe eines [Nachfahrenkombinators](/de/docs/Web/CSS/Descendant_combinator) verkettet wird, wählt es alles innerhalb dieses Elternelements aus. Zum Beispiel wählt `p *` alle verschachtelten Elemente im `<p>`-Element aus.

Im folgenden Beispiel verwenden wir den universellen Selektor, um die Ränder bei allen Elementen zu entfernen. Anstelle des standardmäßigen Browserstylings, das Überschriften und Absätze mit Rändern auf Abstand bringt, ist alles dicht beieinander.

{{EmbedGHLiveSample("css-examples/learn/selectors/universal.html", '100%', 750)}}

Dieses Verhalten kann manchmal in "Reset-Stylesheets" gesehen werden, die alle Browserstile entfernen. Da der universelle Selektor globale Änderungen vornimmt, verwenden wir ihn für sehr spezifische Situationen, wie die unten beschriebene.

### Verwendung des universellen Selektors zur Verbesserung der Lesbarkeit Ihrer Selektoren

Eine Verwendung des universellen Selektors besteht darin, Selektoren lesbarer und deutlicher in Bezug auf ihre Funktion zu machen. Wenn wir beispielsweise alle Nachfahrenelemente eines `<article>`-Elements auswählen wollten, die das erste Kind ihres Elternteils sind, einschließlich direkter Kinder, und sie fett gestalten wollten, könnten wir die {{cssxref(":first-child")}} Pseudo-Klasse verwenden. Wir werden mehr darüber in der Lektion über [Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements) lernen, als Nachfahrenselektor zusammen mit dem `<article>`-Elementselektor:

```css
article :first-child {
  font-weight: bold;
}
```

Dieser Selektor könnte jedoch mit `article:first-child` verwechselt werden, das jedes `<article>`-Element auswählt, das das erste Kind eines anderen Elements ist.

Um diese Verwirrung zu vermeiden, können wir den universellen Selektor zur `:first-child` Pseudo-Klasse hinzufügen, damit deutlicher wird, was der Selektor tut. Er wählt _jedes_ Element, das das erste Kind eines `<article>`-Elements ist, oder das erste Kind eines beliebigen Nachfahrenelements eines `<article>`:

```css
article *:first-child {
  font-weight: bold;
}
```

Obwohl beide dasselbe tun, ist die Lesbarkeit erheblich verbessert.

## Klassenselektoren

Der case-sensitive Klassenselektor beginnt mit einem Punkt (`.`)-Zeichen. Er wählt alles im Dokument aus, dem diese Klasse zugewiesen wurde. Im Live-Beispiel unten haben wir eine Klasse namens `highlight` erstellt und sie an mehreren Stellen in meinem Dokument angewendet. Alle Elemente, die die Klasse zugewiesen bekommen, sind hervorgehoben.

{{EmbedGHLiveSample("css-examples/learn/selectors/class.html", '100%', 750)}}

### Klassen auf bestimmten Elementen ansprechen

Sie können einen Selektor erstellen, der spezifische Elemente mit einer angewandten Klasse anvisiert. Im nächsten Beispiel werden wir ein `<span>` mit einer Klasse `highlight` anders hervorheben als eine `<h1>`-Überschrift mit einer Klasse `highlight`. Wir tun dies, indem wir den Typselektor für das Element verwenden, das wir anvisieren möchten, mit der Klasse, die ohne Leerzeichen dazwischen angefügt wird.

{{EmbedGHLiveSample("css-examples/learn/selectors/class-type.html", '100%', 750)}}

Dieser Ansatz reduziert den Anwendungsbereich einer Regel. Die Regel wird nur auf diese spezifische Element- und Klassenzombination angewendet. Sie müssten einen weiteren Selektor hinzufügen, wenn Sie entscheiden, dass die Regel auch für andere Elemente gelten sollte.

### Ein Element anvisieren, wenn es mehr als eine Klasse zugewiesen hat

Sie können einem Element mehrere Klassen zuweisen und sie einzeln anvisieren oder das Element nur auswählen, wenn alle Klassen im Selektor vorhanden sind. Dies kann hilfreich sein, wenn Sie Komponenten erstellen, die auf Ihrer Site auf verschiedene Weise kombiniert werden können.

Im folgenden Beispiel haben wir ein `<div>`, das eine Notiz enthält. Der graue Rahmen wird angewendet, wenn die Box eine Klasse `notebox` hat. Wenn sie auch eine Klasse `warning` oder `danger` hat, ändern wir die {{cssxref("border-color")}}.

Wir können dem Browser mitteilen, dass wir das Element nur dann ansprechen möchten, wenn es zwei Klassen zugewiesen hat, indem wir sie ohne Leerzeichen dazwischen aneinanderreihen. Sie werden sehen, dass auf das letzte `<div>` kein Styling angewendet wird, da es nur die Klasse `danger` hat; es benötigt auch `notebox`, damit etwas angewendet wird.

{{EmbedGHLiveSample("css-examples/learn/selectors/class-many.html", '100%', 900)}}

## ID-Selektoren

Der case-sensitive ID-Selektor beginnt mit einem `#`-Zeichen anstelle eines Punktes, wird aber genauso wie ein Klassenselektor verwendet. Eine ID kann jedoch nur einmal pro Seite verwendet werden, und Elemente können nur einen einzelnen `id`-Wert zugewiesen bekommen. Er kann ein Element auswählen, dem die `id` zugewiesen ist, und Sie können der ID einen Typselektor voranstellen, um das Element nur dann anzusprechen, wenn sowohl das Element als auch die ID übereinstimmen. Sie können beide Verwendungen im folgenden Beispiel sehen:

{{EmbedGHLiveSample("css-examples/learn/selectors/id.html", '100%', 750)}}

> [!WARNING]
> Die gleiche ID mehrmals in einem Dokument zu verwenden, mag für Stilzwecke zu funktionieren scheinen, aber tun Sie dies nicht. Es führt zu ungültigem Code und wird an vielen Stellen seltsames Verhalten verursachen.

> [!NOTE]
> Der ID-Selektor hat eine hohe {{cssxref("specificity")}}. Das bedeutet, dass Stile, die basierend auf der Übereinstimmung eines ID-Selektors angewendet werden, Stile übersteuern, die basierend auf anderen Selektoren angewendet werden, einschließlich Klassen- und Typselektoren. Da eine ID nur einmal auf einer Seite vorkommen kann und aufgrund der hohen Spezifität von ID-Selektoren, ist es vorzuziehen, einem Element eine Klasse anstelle einer ID zuzuweisen. Wenn die Verwendung der ID der einzige Weg ist, das Element zu targetieren – vielleicht, weil Sie keinen Zugriff auf das Markup haben und es nicht bearbeiten können – überlegen Sie, die ID innerhalb eines [Attributselektors](/de/docs/Web/CSS/Attribute_selectors) zu verwenden, wie `p[id="header"]`. [Lernen Sie Spezifität](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance).

## Zusammenfassung

Damit haben wir die Typ-, Klassen- und ID-Selektoren abgeschlossen. Wir werden die Untersuchung der Selektoren fortsetzen, indem wir uns [Attributselektoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors) ansehen.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors", "Learn/CSS/Building_blocks/Selectors/Attribute_selectors", "Learn/CSS/Building_blocks")}}
