---
title: Typ-, Klassen- und ID-Selektoren
slug: Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors", "Learn/CSS/Building_blocks/Selectors/Attribute_selectors", "Learn/CSS/Building_blocks")}}

In dieser Lektion betrachten wir einige der einfachsten Selektoren, welche Sie wahrscheinlich am häufigsten in Ihrer Arbeit verwenden werden.

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
        >, HTML-Grundlagen (studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS Erste Schritte</a>).
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

## Typ-Selektoren

Ein **Typ-Selektor** wird manchmal als _Tag-Name-Selektor_ oder _Element-Selektor_ bezeichnet, da er ein HTML-Tag/Element in Ihrem Dokument auswählt. Typ-Selektoren sind nicht case-sensitiv. Im folgenden Beispiel haben wir die Selektoren `span`, `em` und `strong` verwendet.

**Versuchen Sie, eine CSS-Regel hinzuzufügen, um das `<h1>`-Element auszuwählen und seine Farbe auf blau zu ändern.**

{{EmbedGHLiveSample("css-examples/learn/selectors/type.html", '100%', 1100)}}

## Der universelle Selektor

Der universelle Selektor wird durch ein Sternchen (`*`) angezeigt. Er wählt alles im Dokument aus. Wenn `*` mithilfe eines [Nachfahrenkombinators](/de/docs/Web/CSS/Descendant_combinator) verkettet wird, wählt er alles innerhalb dieses Vorfahrenelements aus. Zum Beispiel wählt `p *` alle verschachtelten Elemente im `<p>`-Element aus.

Im folgenden Beispiel verwenden wir den universellen Selektor, um die Ränder aller Elemente zu entfernen. Anstelle des Standard-Stylings des Browsers, das Überschriften und Absätze mit Rändern auseinanderhält, ist alles dicht beieinander.

{{EmbedGHLiveSample("css-examples/learn/selectors/universal.html", '100%', 750)}}

Dieses Verhalten kann manchmal in "Reset-Stylesheets" beobachtet werden, die das gesamte Browser-Styling ausstrippen. Da der universelle Selektor globale Änderungen vornimmt, verwenden wir ihn für sehr spezifische Situationen, wie die unten beschriebene.

### Den universellen Selektor verwenden, um Ihre Selektoren lesbarer zu machen

Ein Anwendungsfall des universellen Selektors besteht darin, Selektoren lesbarer und offensichtlicher in Bezug auf ihre Funktion zu gestalten. Wenn wir beispielsweise alle nachfolgenden Elemente eines `<article>`-Elements auswählen möchten, die das erste Kind ihres Elternteils sind, inklusive direkter Kinder, und diese fett machen, könnten wir die {{cssxref(":first-child")}} Pseudoklasse verwenden. Mehr darüber erfahren Sie in der Lektion über [Pseudoklassen und Pseudoelemente](/de/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements), als Nachfahrselektor zusammen mit dem `<article>`-Element-Selektor:

```css
article :first-child {
  font-weight: bold;
}
```

Dieser Selektor könnte jedoch mit `article:first-child` verwechselt werden, welcher jedes `<article>`-Element auswählt, das das erste Kind eines anderen Elements ist.

Um diese Verwirrung zu vermeiden, können wir den universellen Selektor zur `:first-child` Pseudoklasse hinzufügen, damit deutlicher wird, was der Selektor tut. Er wählt _jedes_ Element aus, das das erste Kind eines `<article>`-Elements oder das erste Kind eines untergeordneten Elements von `<article>` ist:

```css
article *:first-child {
  font-weight: bold;
}
```

Obwohl beide das Gleiche bewirken, ist die Lesbarkeit wesentlich verbessert.

## Klassen-Selektoren

Der case-sensitive Klassen-Selektor beginnt mit einem Punkt (`.`) Zeichen. Er wählt alles im Dokument aus, dem diese Klasse zugewiesen wurde. Im Live-Beispiel unten haben wir eine Klasse namens `highlight` erstellt und sie an mehreren Stellen in meinem Dokument angewendet. Alle Elemente, denen die Klasse zugewiesen ist, werden hervorgehoben.

{{EmbedGHLiveSample("css-examples/learn/selectors/class.html", '100%', 750)}}

### Klassen auf bestimmten Elementen anvisieren

Sie können einen Selektor erstellen, der bestimmte Elemente mit der angewendeten Klasse anvisiert. Im nächsten Beispiel werden wir ein `<span>` mit einer Klasse `highlight` anders hervorheben als eine `<h1>`-Überschrift mit einer Klasse `highlight`. Dies tun wir, indem wir den Typ-Selektor für das Element verwenden, das wir anvisieren möchten, mit der Klasse, die mit einem Punkt angehängt wird, ohne Leerzeichen dazwischen.

{{EmbedGHLiveSample("css-examples/learn/selectors/class-type.html", '100%', 750)}}

Dieser Ansatz reduziert den Anwendungsbereich einer Regel. Die Regel wird nur auf diese bestimmte Element- und Klassenkombination angewendet. Sie müssten einen weiteren Selektor hinzufügen, wenn Sie entscheiden, dass die Regel auch auf andere Elemente angewendet werden sollte.

### Ein Element anvisieren, wenn mehr als eine Klasse angewendet wird

Sie können einem Element mehrere Klassen zuweisen und sie einzeln anvisieren oder das Element nur dann auswählen, wenn alle Klassen im Selector vorhanden sind. Dies kann hilfreich sein, wenn Komponenten erstellt werden, die auf Ihrer Seite in verschiedenen Kombinationen verwendet werden können.

Im folgenden Beispiel haben wir ein `<div>`, das eine Notiz enthält. Der graue Rahmen wird angewendet, wenn der Kasten eine Klasse `notebox` hat. Wenn es auch eine Klasse `warning` oder `danger` hat, ändern wir die {{cssxref("border-color")}}.

Wir können dem Browser mitteilen, dass wir das Element nur dann übereinstimmen lassen wollen, wenn zwei Klassen angewendet werden, indem wir sie ohne Leerzeichen aufeinanderfolge. Sie werden sehen, dass das letzte `<div>` keine Styles angewendet bekommt, da es nur die Klasse `danger` hat; es braucht auch `notebox`, damit etwas angewendet wird.

{{EmbedGHLiveSample("css-examples/learn/selectors/class-many.html", '100%', 900)}}

## ID-Selektoren

Der case-sensitive ID-Selektor beginnt mit einem `#` anstelle eines Punktes, funktioniert jedoch auf die gleiche Weise wie ein Klassenselektor. Ein ID kann jedoch pro Seite nur einmal verwendet werden, und Elemente können nur einen `id`-Wert zugewiesen bekommen. Er kann ein Element auswählen, das die `id` darauf gesetzt hat, und Sie können der ID einen Typ-Selektor voranstellen, um das Element nur dann anzuvisieren, wenn sowohl das Element als auch die ID übereinstimmen. Sie sehen beide dieser Anwendungen im folgenden Beispiel:

{{EmbedGHLiveSample("css-examples/learn/selectors/id.html", '100%', 750)}}

> [!WARNING]
> Mehrfaches Verwenden der gleichen ID in einem Dokument kann zwar für Styling-Zwecke funktionieren, aber machen Sie das nicht. Es führt zu ungültigem Code und wird in vielerlei Hinsicht seltsame Verhaltensweisen verursachen.

> [!NOTE]
> Der ID-Selektor hat eine hohe {{cssxref("specificity")}}. Dies bedeutet, dass Styles, die auf einer Übereinstimmung eines ID-Selektors basieren, Styles überstimmen, die auf Grundlage anderer Selektoren, einschließlich Klassen- und Typselektoren, angewendet werden. Da eine ID nur einmal auf einer Seite vorkommen darf und aufgrund der hohen Spezifität von ID-Selektoren ist es vorzuziehen, einer Element eine Klasse statt einer ID hinzuzufügen. Wenn die Verwendung der ID die einzige Möglichkeit ist, das Element zu adressieren — vielleicht, weil Sie keinen Zugriff auf das Markup haben und es nicht bearbeiten können — ziehen Sie es in Betracht, die ID innerhalb eines [Attributselektors](/de/docs/Web/CSS/Attribute_selectors) zu verwenden, wie `p[id="header"]`. [Lernen Sie mehr über die Spezifität](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance).

## Zusammenfassung

Das schließt Typ-, Klassen- und ID-Selektoren ab. Wir werden weiterhin Selektoren erkunden, indem wir uns die [Attributselektoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors) ansehen.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors", "Learn/CSS/Building_blocks/Selectors/Attribute_selectors", "Learn/CSS/Building_blocks")}}
