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
          >Grundlegende Software installiert</a
        >, Grundkenntnisse im
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Umgang mit Dateien</a
        >, HTML-Grundlagen (Studieren Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), und eine Vorstellung davon, wie CSS funktioniert (Studieren Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS erste Schritte</a>.)
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

Ein **Typ-Selektor** wird manchmal als _Tagname-Selektor_ oder _Element-Selektor_ bezeichnet, da er ein HTML-Tag/Element in Ihrem Dokument auswählt. Typ-Selektoren sind nicht groß-/klein-schreibungssensitiv. Im folgenden Beispiel haben wir die `span`, `em` und `strong` Selektoren verwendet.

**Versuchen Sie, eine CSS-Regel hinzuzufügen, um das `<h1>`-Element auszuwählen und seine Farbe auf Blau zu ändern.**

{{EmbedGHLiveSample("css-examples/learn/selectors/type.html", '100%', 1100)}}

## Der universelle Selektor

Der universelle Selektor wird durch ein Sternchen (`*`) angezeigt. Es wählt alles im Dokument aus. Wenn `*` mit einem [Nachkomme-Kombinator](/de/docs/Web/CSS/Descendant_combinator) verbunden wird, wählt es alles innerhalb dieses übergeordneten Elements aus. Zum Beispiel wählt `p *` alle verschachtelten Elemente im `<p>`-Element aus.

Im folgenden Beispiel verwenden wir den universellen Selektor, um die Ränder aller Elemente zu entfernen. Anstatt der standardmäßigen Browser-Stilgebung, die Überschriften und Absätze durch Ränder auseinanderhält, ist hier alles dicht beieinander.

{{EmbedGHLiveSample("css-examples/learn/selectors/universal.html", '100%', 750)}}

Dieses Verhalten kann manchmal in "Reset-Stylesheets" gesehen werden, die alle Browser-Stilgebungen entfernen. Da der universelle Selektor globale Änderungen vornimmt, verwenden wir ihn nur für sehr spezifische Situationen, wie im Folgenden beschrieben.

### Verwenden des universellen Selektors, um Ihre Selektoren lesbarer zu machen

Eine Verwendung des universellen Selektors besteht darin, Selektoren einfacher lesbar und offensichtlicher in Bezug auf ihre Funktion zu gestalten. Wenn wir beispielsweise alle Nachkomme-Elemente eines `<article>`-Elements auswählen wollen, die das erste Kind ihres Elternteils sind, einschließlich direkter Kinder, und diese fett machen möchten, könnten wir die {{cssxref(":first-child")}} Pseudo-Klasse verwenden. Wir werden mehr darüber in der Lektion über [Pseudo-Klassen und Pseudo-Elemente](/de/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements) lernen, als nachfolgender Selektor zusammen mit dem `<article>`-Elementselektor:

```css
article :first-child {
  font-weight: bold;
}
```

Dieser Selektor könnte jedoch mit `article:first-child` verwechselt werden, der jedes `<article>`-Element auswählt, das das erste Kind eines anderen Elements ist.

Um diese Verwirrung zu vermeiden, können wir den universellen Selektor zur `:first-child` Pseudo-Klasse hinzufügen, so dass es offensichtlicher ist, was der Selektor tut. Er wählt _jedes_ Element aus, das das erste Kind eines `<article>`-Elements ist, oder das erste Kind jedes Nachkommen-Elements von `<article>`:

```css
article *:first-child {
  font-weight: bold;
}
```

Obwohl beide dasselbe tun, ist die Lesbarkeit erheblich verbessert.

## Klassen-Selektoren

Der gross-/klein-schreibungssensitive Klassen-Selektor beginnt mit einem Punkt (`.`) Zeichen. Er wird alles im Dokument auswählen, dem diese Klasse zugewiesen wurde. Im Live-Beispiel unten haben wir eine Klasse namens `highlight` erstellt und sie an mehreren Stellen in meinem Dokument angewendet. Alle Elemente, die die Klasse zugewiesen bekommen haben, sind hervorgehoben.

{{EmbedGHLiveSample("css-examples/learn/selectors/class.html", '100%', 750)}}

### Klassen auf bestimmte Elemente anwenden

Sie können einen Selektor erstellen, der bestimmte Elemente mit der angewendeten Klasse anvisiert. Im nächsten Beispiel werden wir ein `<span>` mit einer Klasse von `highlight` anders hervorheben als eine `<h1>`-Überschrift mit einer Klasse von `highlight`. Dies tun wir, indem wir den Typ-Selektor für das Element, das wir anvisieren möchten, mit der Klasse anhängen, ohne Leerraum dazwischen.

{{EmbedGHLiveSample("css-examples/learn/selectors/class-type.html", '100%', 750)}}

Dieser Ansatz reduziert den Geltungsbereich einer Regel. Die Regel wird nur auf diese bestimmte Element- und Klassenkombination angewendet. Sie müssten einen weiteren Selektor hinzufügen, wenn die Regel auch auf andere Elemente angewendet werden soll.

### Ein Element anvisieren, wenn es mehr als eine angewendete Klasse hat

Sie können einem Element mehrere Klassen zuweisen und diese einzeln anvisieren oder das Element nur dann auswählen, wenn alle Klassen im Selektor vorhanden sind. Dies kann beim Aufbau von Komponenten hilfreich sein, die in verschiedenen Weisen auf Ihrer Seite kombiniert werden können.

Im Beispiel unten haben wir ein `<div>`, das eine Notiz enthält. Der graue Rand wird angewendet, wenn die Box eine Klasse `notebox` hat. Wenn es zusätzlich eine Klasse `warning` oder `danger` hat, ändern wir die {{cssxref("border-color")}}.

Wir können dem Browser mitteilen, dass wir nur das Element anvisieren möchten, wenn ihm zwei Klassen zugewiesen sind, indem wir sie ohne Leerraum dazwischen aneinanderreihen. Sie werden sehen, dass das letzte `<div>` keine Stilgebung erhält, da es nur die `danger`-Klasse hat; es benötigt ebenfalls `notebox`, um etwas angewendet zu bekommen.

{{EmbedGHLiveSample("css-examples/learn/selectors/class-many.html", '100%', 900)}}

## ID-Selektoren

Der gross-/klein-schreibungssensitive ID-Selektor beginnt mit einem `#` statt mit einem Punktzeichen, wird jedoch auf die gleiche Weise wie ein Klassen-Selektor verwendet. Eine ID kann jedoch nur einmal pro Seite verwendet werden, und Elemente können nur einen einzelnen `id`-Wert erhalten. Es kann ein Element auswählen, das die `id` gesetzt hat, und Sie können der ID einen Typ-Selektor voranstellen, um das Element nur dann zu erreichen, wenn sowohl das Element als auch die ID übereinstimmen. Sie können beide Verwendungen im folgenden Beispiel sehen:

{{EmbedGHLiveSample("css-examples/learn/selectors/id.html", '100%', 750)}}

> [!WARNING]
> Die gleiche ID mehrfach in einem Dokument zu verwenden, kann für Styling-Zwecke funktionieren, aber tun Sie dies nicht. Es führt zu ungültigem Code und verursacht seltsames Verhalten an vielen Stellen.

> [!NOTE]
> Der ID-Selektor hat eine hohe {{cssxref("specificity")}}. Das bedeutet, dass Stile, die basierend auf einem ID-Selektor angewendet werden, Stile überstimmen, die basierend auf anderen Selektoren, einschließlich Klassen- und Typ-Selektoren, angewendet werden. Da eine ID nur einmal auf einer Seite vorkommen kann und wegen der hohen Spezifität von ID-Selektoren ist es vorzuziehen, einer Elementen stattdessen eine Klasse hinzuzufügen. Wenn die Verwendung der ID der einzige Weg ist, das Element anzusprechen – vielleicht, weil Sie keinen Zugang zum Markup haben und es nicht bearbeiten können – überlegen Sie, ob Sie die ID in einem [Attributselektor](/de/docs/Web/CSS/Attribute_selectors) verwenden, wie `p[id="header"]`. [Lernen Sie Spezifität](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance).

## Zusammenfassung

Damit schließen wir Typ-, Klassen- und ID-Selektoren ab. Wir werden die Erforschung der Selektoren fortsetzen, indem wir uns die [Attributselektoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors) ansehen.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors", "Learn/CSS/Building_blocks/Selectors/Attribute_selectors", "Learn/CSS/Building_blocks")}}
