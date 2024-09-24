---
title: Pseudoklassen und Pseudoelemente
slug: Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Attribute_selectors", "Learn/CSS/Building_blocks/Selectors/Combinators", "Learn/CSS/Building_blocks")}}

Die nächste Gruppe von Selektoren, die wir betrachten werden, sind die sogenannten **Pseudoklassen** und **Pseudoelemente**. Es gibt eine große Anzahl davon, und sie dienen oft sehr spezifischen Zwecken. Sobald Sie wissen, wie Sie sie verwenden, können Sie die Liste ansehen, um zu sehen, ob es etwas gibt, das für die Aufgabe geeignet ist, die Sie erreichen möchten. Auch hier ist die relevante MDN-Seite für jeden Selektor hilfreich, um die Browserunterstützung zu erläutern.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Basissoftware installiert</a
        >, Grundkenntnisse in
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >Umgang mit Dateien</a
        >, HTML-Grundlagen (siehe
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (siehe
        <a href="/de/docs/Learn/CSS/First_steps">CSS erste Schritte</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Die Pseudoklassen- und Pseudoelementselektoren zu lernen.</td>
    </tr>
  </tbody>
</table>

## Was ist eine Pseudoklasse?

Eine Pseudoklasse ist ein Selektor, der Elemente auswählt, die sich in einem bestimmten Zustand befinden, z.B. das erste Element ihres Typs sind oder von der Mauszeiger schwebt. Sie agieren oft so, als ob Sie einer bestimmten Stelle Ihres Dokuments eine Klasse hinzugefügt hätten und helfen Ihnen, überschüssige Klassen in Ihrem Markup zu reduzieren und flexibleren, wartbaren Code zu schreiben.

Pseudoklassen sind Schlüsselwörter, die mit einem Doppelpunkt beginnen. Zum Beispiel ist `:hover` eine Pseudoklasse.

### Einfaches Pseudoklassen-Beispiel

Betrachten wir ein einfaches Beispiel. Wenn wir den ersten Absatz in einem Artikel größer und fett machen wollten, könnten wir diesem Absatz eine Klasse hinzufügen und dann CSS zu dieser Klasse hinzufügen, wie im ersten Beispiel unten gezeigt:

{{EmbedGHLiveSample("css-examples/learn/selectors/first-child.html", '100%', 800)}}

Dies könnte jedoch mühsam zu pflegen sein – was, wenn ein neuer Absatz an den Anfang des Dokuments hinzugefügt wird? Wir müssten die Klasse auf den neuen Absatz verschieben. Anstatt die Klasse hinzuzufügen, könnten wir den {{cssxref(":first-child")}}-Pseudoklassen-Selektor verwenden – dieser wird _immer_ das erste Kindelement im Artikel anvisieren, und wir müssen das HTML nicht mehr ändern (dies ist möglicherweise ohnehin nicht immer möglich, z.B. wenn es von einem CMS generiert wird).

{{EmbedGHLiveSample("css-examples/learn/selectors/first-child2.html", '100%', 700)}}

Alle Pseudoklassen verhalten sich auf diese Weise. Sie zielen auf einen bestimmten Teil Ihres Dokuments ab, der sich in einem bestimmten Zustand befindet, so als hätten Sie eine Klasse in Ihr HTML eingefügt. Schauen Sie sich einige andere Beispiele auf MDN an:

- [`:last-child`](/de/docs/Web/CSS/:last-child)
- [`:only-child`](/de/docs/Web/CSS/:only-child)
- [`:invalid`](/de/docs/Web/CSS/:invalid)

> [!NOTE]
> Es ist zulässig, Pseudoklassen und -elemente ohne vorangehenden Elementselektor zu schreiben. Im obigen Beispiel könnten Sie `:first-child` schreiben und die Regel würde auf _jedes_ Element angewendet werden, das das erste Kind eines `<article>`-Elements ist, nicht nur das erste Kind eines Absatzes — `:first-child` entspricht `*:first-child`. In der Regel möchten Sie jedoch mehr Kontrolle und müssen spezifischer sein.

### Benutzeraktions-Pseudoklassen

Einige Pseudoklassen gelten nur, wenn der Benutzer in irgendeiner Weise mit dem Dokument interagiert. Diese **Benutzeraktions-Pseudoklassen**, manchmal als **dynamische Pseudoklassen** bezeichnet, verhalten sich so, als ob eine Klasse zum Element hinzugefügt worden wäre, wenn der Benutzer mit ihm interagiert. Beispiele sind:

- [`:hover`](/de/docs/Web/CSS/:hover) — oben erwähnt; gilt nur, wenn der Benutzer den Zeiger über ein Element bewegt, typischerweise ein Link.
- [`:focus`](/de/docs/Web/CSS/:focus) — gilt nur, wenn der Benutzer das Element durch Klicken oder Verwenden der Tastatursteuerung fokussiert.

{{EmbedGHLiveSample("css-examples/learn/selectors/hover.html", '100%', 500)}}

## Was ist ein Pseudoelement?

Pseudoelemente verhalten sich ähnlich. Sie wirken jedoch, als hätten Sie ein ganz neues HTML-Element in das Markup eingefügt, anstatt eine Klasse auf bestehende Elemente anzuwenden.

Pseudoelemente beginnen mit einem Doppelkolon `::`. `::before` ist ein Beispiel für ein Pseudoelement.

> [!NOTE]
> Einige frühe Pseudoelemente verwendeten die einfache Kolon-Syntax, so dass Sie diese möglicherweise manchmal in Code oder Beispielen sehen. Moderne Browser unterstützen die frühen Pseudoelemente sowohl mit Einzel- als auch mit Doppelkolon-Syntax zur Abwärtskompatibilität.

Wenn Sie beispielsweise die erste Zeile eines Absatzes auswählen möchten, könnten Sie sie in ein `<span>`-Element einfügen und einen Elementselektor verwenden; dies würde jedoch fehlschlagen, wenn die Anzahl der Wörter, die Sie umschlossen haben, länger oder kürzer als die Breite des übergeordneten Elements wäre. Da wir tendenziell nicht wissen, wie viele Wörter in eine Zeile passen – da dies sich ändert, wenn die Bildschirmbreite oder die Schriftgröße sich ändert – ist es unmöglich, dies robust durch Hinzufügen von HTML zu tun.

Der `::first-line` Pseudoelement-Selektor wird dies zuverlässig für Sie tun – wenn die Anzahl der Wörter zunimmt oder abnimmt, wird dennoch nur die erste Zeile ausgewählt.

{{EmbedGHLiveSample("css-examples/learn/selectors/first-line.html", '100%', 800)}}

Es wirkt so, als wäre ein `<span>` auf magische Weise um diese erste formatierte Zeile gewickelt und bei jeder Änderung der Zeilenlänge aktualisiert.

Sie können sehen, dass dies die erste Zeile beider Absätze auswählt.

## Kombinierung von Pseudoklassen und Pseudoelementen

Wenn Sie die erste Zeile des ersten Absatzes fett machen wollten, könnten Sie die Selektoren `:first-child` und `::first-line` zusammenketten. Versuchen Sie, das vorherige Live-Beispiel so zu bearbeiten, dass es den folgenden CSS-Code verwendet. Wir sagen, dass wir die erste Zeile des ersten `<p>`-Elements auswählen möchten, das sich innerhalb eines `<article>`-Elements befindet.

```css
article p:first-child::first-line {
  font-size: 120%;
  font-weight: bold;
}
```

## Inhalt erzeugen mit ::before und ::after

Es gibt ein paar spezielle Pseudoelemente, die zusammen mit der [`content`](/de/docs/Web/CSS/content)-Eigenschaft verwendet werden, um Inhalt mit CSS in Ihr Dokument einzufügen.

Sie könnten diese verwenden, um eine Zeichenkette von Text einzufügen, wie im folgenden Live-Beispiel. Versuchen Sie, den Textwert der {{cssxref("content")}}-Eigenschaft zu ändern und beobachten Sie, wie er sich in der Ausgabe ändert. Sie könnten auch das `::before`-Pseudoelement in `::after` ändern und sehen, wie der Text am Ende des Elements anstelle des Anfangs eingefügt wird.

{{EmbedGHLiveSample("css-examples/learn/selectors/before.html", '100%', 400)}}

Das Einfügen von Textzeichenfolgen aus CSS ist jedoch nicht wirklich etwas, das wir im Web sehr oft tun, da dieser Text für einige Screenreader unzugänglich ist und möglicherweise schwierig für jemanden zu finden und in der Zukunft zu bearbeiten ist.

Eine gültigere Verwendung dieser Pseudoelemente ist es, ein Symbol einzufügen, zum Beispiel den kleinen Pfeil, der im unten stehenden Beispiel hinzugefügt wurde, was ein visueller Indikator ist, den wir nicht von einem Screenreader vorlesen lassen möchten:

{{EmbedGHLiveSample("css-examples/learn/selectors/after-icon.html", '100%', 400)}}

Diese Pseudoelemente werden auch häufig verwendet, um eine leere Zeichenkette einzufügen, die dann wie jedes Element auf der Seite gestylt werden kann.

In diesem nächsten Beispiel haben wir eine leere Zeichenkette mit dem `::before`-Pseudoelement hinzugefügt. Wir haben dies auf `display: block` gesetzt, damit wir es mit einer Breite und Höhe stylen können. Dann verwenden wir CSS, um es wie jedes Element zu stylen. Sie können mit dem CSS spielen und ändern, wie es aussieht und sich verhält.

{{EmbedGHLiveSample("css-examples/learn/selectors/before-styled.html", '100%', 500)}}

Die Verwendung der `::before`- und `::after`-Pseudoelemente zusammen mit der `content`-Eigenschaft wird als "generierter Inhalt" in CSS bezeichnet, und Sie werden oft sehen, dass diese Technik für verschiedene Aufgaben verwendet wird. Ein großartiges Beispiel ist die Seite [CSS Arrow Please](https://cssarrowplease.com/), die Ihnen hilft, einen Pfeil mit CSS zu erstellen. Schauen Sie sich das CSS an, während Sie Ihren Pfeil erstellen, und Sie werden sehen, dass die {{cssxref("::before")}}- und {{cssxref("::after")}}-Pseudoelemente im Einsatz sind. Immer wenn Sie diese Selektoren sehen, schauen Sie auf die {{cssxref("content")}}-Eigenschaft, um zu sehen, was dem HTML-Element hinzugefügt wird.

## Zusammenfassung

In diesem Artikel haben wir CSS-Pseudoklassen und Pseudoelemente vorgestellt, die spezielle Arten von Selektoren sind.

Pseudoklassen ermöglichen es Ihnen, ein Element in einem bestimmten Zustand anzusprechen, als ob Sie eine Klasse für diesen Zustand zum DOM hinzugefügt hätten. Pseudoelemente scheinen, als ob Sie ein ganz neues Element zum DOM hinzugefügt hätten, und ermöglichen es Ihnen, dieses zu stylen. Die `::before` und `::after` Pseudoelemente ermöglichen es Ihnen, Inhalte mit CSS in das Dokument einzufügen.

Im nächsten Artikel lernen wir über [Kombinatoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Combinators).

## Siehe auch

- [Pseudoklassen-Referenz](/de/docs/Web/CSS/Pseudo-classes)
- [Pseudoelemente-Referenz](/de/docs/Web/CSS/Pseudo-elements)

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Attribute_selectors", "Learn/CSS/Building_blocks/Selectors/Combinators", "Learn/CSS/Building_blocks")}}
