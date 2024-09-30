---
title: Pseudoklassen und Pseudoelemente
slug: Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Attribute_selectors", "Learn/CSS/Building_blocks/Selectors/Combinators", "Learn/CSS/Building_blocks")}}

Die nächste Gruppe von Selektoren, die wir uns ansehen werden, wird als **Pseudoklassen** und **Pseudoelemente** bezeichnet. Es gibt eine große Anzahl davon, und sie dienen oft ziemlich spezifischen Zwecken. Sobald Sie wissen, wie man sie benutzt, können Sie die Liste durchsehen, um zu sehen, ob etwas für die Aufgabe, die Sie erreichen möchten, passt. Auch hier ist die entsprechende MDN-Seite für jeden Selektor hilfreich, um die Browser-Unterstützung zu erklären.

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
        >, HTML-Grundlagen (lernen Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >) und eine Vorstellung davon, wie CSS funktioniert (lernen Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS erste Schritte</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Pseudoklassen- und Pseudoelementselektoren kennenzulernen.</td>
    </tr>
  </tbody>
</table>

## Was ist eine Pseudoklasse?

Eine Pseudoklasse ist ein Selektor, der Elemente auswählt, die sich in einem bestimmten Zustand befinden, z.B. sie sind das erste Element ihres Typs oder sie werden vom Mauszeiger überfahren. Sie verhalten sich oft so, als ob Sie einer bestimmten Stelle in Ihrem Dokument eine Klasse hinzugefügt hätten, was Ihnen hilft, überflüssige Klassen in Ihrem Markup zu reduzieren und Ihnen flexibleren, besser wartbaren Code zu bieten.

Pseudoklassen sind Schlüsselwörter, die mit einem Doppelpunkt beginnen. Zum Beispiel ist `:hover` eine Pseudoklasse.

### Einfaches Beispiel einer Pseudoklasse

Schauen wir uns ein einfaches Beispiel an. Wenn wir den ersten Absatz in einem Artikel größer und fett machen wollten, könnten wir diesem Absatz eine Klasse hinzufügen und dann CSS zu dieser Klasse hinzufügen, wie im ersten Beispiel unten gezeigt:

{{EmbedGHLiveSample("css-examples/learn/selectors/first-child.html", '100%', 800)}}

Dies könnte jedoch ärgerlich sein, um es zu pflegen — was ist, wenn ein neuer Absatz oben im Dokument hinzugefügt wird? Wir müssten die Klasse zum neuen Absatz verschieben. Anstatt die Klasse hinzuzufügen, könnten wir den {{cssxref(":first-child")}} Pseudoklassenselektor verwenden — dieser wird _immer_ das erste Kind-Element im Artikel anvisieren, und wir müssten das HTML nicht mehr ändern (dies ist vielleicht ohnehin nicht immer möglich, möglicherweise, weil es von einem CMS generiert wird).

{{EmbedGHLiveSample("css-examples/learn/selectors/first-child2.html", '100%', 700)}}

Alle Pseudoklassen verhalten sich auf diese Weise. Sie zielen auf einen bestimmten Teil Ihres Dokuments, der sich in einem bestimmten Zustand befindet, und verhalten sich so, als ob Sie eine Klasse in Ihr HTML hinzugefügt hätten. Schauen Sie sich einige andere Beispiele auf MDN an:

- [`:last-child`](/de/docs/Web/CSS/:last-child)
- [`:only-child`](/de/docs/Web/CSS/:only-child)
- [`:invalid`](/de/docs/Web/CSS/:invalid)

> [!NOTE]
> Es ist gültig, Pseudoklassen und -elemente ohne einen vorgelagerten Elementselektor zu schreiben. Im obigen Beispiel könnten Sie `:first-child` schreiben und die Regel würde auf _jedes_ Element angewendet, das das erste Kind eines `<article>` Elements ist, nicht nur auf einen Absatz als erstes Kind — `:first-child` ist gleichbedeutend mit `*:first-child`. Normalerweise möchte man jedoch mehr Kontrolle haben, daher muss man spezifischer sein.

### Benutzeraktions-Pseudoklassen

Einige Pseudoklassen gelten nur, wenn der Benutzer in irgendeiner Weise mit dem Dokument interagiert. Diese **Benutzeraktions**-Pseudoklassen, manchmal als **dynamische Pseudoklassen** bezeichnet, verhalten sich so, als ob eine Klasse zum Element hinzugefügt wurde, wenn der Benutzer damit interagiert. Beispiele sind:

- [`:hover`](/de/docs/Web/CSS/:hover) — oben erwähnt; dies gilt nur, wenn der Benutzer seinen Zeiger über ein Element bewegt, typischerweise einen Link.
- [`:focus`](/de/docs/Web/CSS/:focus) — gilt nur, wenn der Benutzer das Element durch Klicken oder Verwenden von Tastatursteuerungen fokussiert.

{{EmbedGHLiveSample("css-examples/learn/selectors/hover.html", '100%', 500)}}

## Was ist ein Pseudoelement?

Pseudoelemente verhalten sich auf ähnliche Weise. Sie verhalten sich jedoch so, als hätten Sie ein ganz neues HTML-Element in das Markup eingefügt, anstatt einer bestehenden Klasse an bestehende Elemente anzuhängen.

Pseudoelemente beginnen mit einem Doppelpunkt `::`. `::before` ist ein Beispiel für ein Pseudoelement.

> [!NOTE]
> Einige frühe Pseudoelemente verwendeten die Ein-Doppelpunkt-Syntax, sodass Sie dies möglicherweise manchmal in Code oder Beispielen sehen. Moderne Browser unterstützen die frühen Pseudoelemente mit der Ein- oder Doppelpunkt-Syntax für die Abwärtskompatibilität.

Zum Beispiel, wenn Sie die erste Zeile eines Absatzes auswählen möchten, könnten Sie sie in ein `<span>`-Element einwickeln und einen Elementselektor verwenden; das würde jedoch fehlschlagen, wenn die Anzahl der Wörter, die Sie umschlossen haben, länger oder kürzer als die Breite des übergeordneten Elements ist. Da wir oft nicht wissen, wie viele Wörter in eine Zeile passen – da das sich ändert, wenn sich die Bildschirmbreite oder Schriftgröße ändert – ist es unmöglich, dies robust zu tun, indem HTML hinzugefügt wird.

Der `::first-line`-Pseudoelementselektor erledigt dies zuverlässig für Sie – wenn die Anzahl der Wörter zunimmt oder abnimmt, wird trotzdem nur die erste Zeile ausgewählt.

{{EmbedGHLiveSample("css-examples/learn/selectors/first-line.html", '100%', 800)}}

Es verhält sich, als ob ein `<span>` magischerweise um diese erste formatierte Zeile gewickelt wäre und bei jeder Änderung der Zeilenlänge aktualisiert wird.

Sie können sehen, dass dies die erste Zeile beider Absätze auswählt.

## Pseudoklassen und Pseudoelemente kombinieren

Wenn Sie die erste Zeile des ersten Absatzes fett machen wollten, könnten Sie die Selektoren `:first-child` und `::first-line` zusammenketten. Versuchen Sie, das vorherige Live-Beispiel so zu bearbeiten, dass es das folgende CSS verwendet. Wir sagen, dass wir die erste Zeile des ersten `<p>`-Elements auswählen möchten, welches sich innerhalb eines `<article>`-Elements befindet.

```css
article p:first-child::first-line {
  font-size: 120%;
  font-weight: bold;
}
```

## Inhalt mit ::before und ::after generieren

Es gibt ein paar spezielle Pseudoelemente, die zusammen mit der [`content`](/de/docs/Web/CSS/content)-Eigenschaft verwendet werden, um Inhalte in Ihr Dokument mit CSS einzufügen.

Sie könnten diese verwenden, um eine Zeichenkette von Text einzufügen, wie z.B. im Live-Beispiel unten. Versuchen Sie, den Textwert der {{cssxref("content")}}-Eigenschaft zu ändern und zu sehen, wie er sich in der Ausgabe ändert. Sie könnten auch das `::before`-Pseudoelement in `::after` ändern und sehen, wie der Text am Ende des Elements anstatt am Anfang eingefügt wird.

{{EmbedGHLiveSample("css-examples/learn/selectors/before.html", '100%', 400)}}

Texteinschübe aus CSS heraus sind allerdings nicht etwas, das wir im Web sehr häufig tun, da dieser Text für einige Screenreader unzugänglich ist und es jemandem in der Zukunft schwerfallen könnte, ihn zu finden und zu bearbeiten.

Eine gültigere Verwendung dieser Pseudoelemente ist es, ein Icon einzufügen, zum Beispiel der kleine Pfeil, der im Beispiel unten hinzugefügt wird. Dies ist ein visueller Indikator, den wir nicht von einem Screenreader lesen lassen möchten:

{{EmbedGHLiveSample("css-examples/learn/selectors/after-icon.html", '100%', 400)}}

Diese Pseudoelemente werden auch häufig verwendet, um eine leere Zeichenkette einzufügen, die dann wie jedes Element auf der Seite gestylt werden kann.

Im nächsten Beispiel haben wir eine leere Zeichenkette mit dem `::before`-Pseudoelement hinzugefügt. Wir haben es auf `display: block` gesetzt, damit wir es mit einer Breite und Höhe gestalten können. Dann verwenden wir CSS, um es wie jedes Element zu gestalten. Sie können mit dem CSS herumspielen und ändern, wie es aussieht und sich verhält.

{{EmbedGHLiveSample("css-examples/learn/selectors/before-styled.html", '100%', 500)}}

Die Verwendung der `::before` und `::after` Pseudoelemente zusammen mit der `content` Eigenschaft wird in CSS als "Generated Content" bezeichnet, und Sie werden oft sehen, dass diese Technik für verschiedene Aufgaben eingesetzt wird. Ein großartiges Beispiel ist die Seite [CSS Arrow Please](https://cssarrowplease.com/), die Ihnen hilft, einen Pfeil mit CSS zu generieren. Schauen Sie sich das CSS an, während Sie Ihren Pfeil erstellen, und Sie werden die {{cssxref("::before")}} und {{cssxref("::after")}} Pseudoelemente im Einsatz sehen. Wann immer Sie diese Selektoren sehen, schauen Sie auf die {{cssxref("content")}} Eigenschaft, um zu sehen, was dem HTML-Element hinzugefügt wird.

## Zusammenfassung

In diesem Artikel haben wir CSS-Pseudoklassen und -Pseudoelemente eingeführt, die besondere Arten von Selektoren sind.

Pseudoklassen ermöglichen es Ihnen, ein Element in einem bestimmten Zustand zu wählen, als ob Sie eine Klasse für diesen Zustand zu dem DOM hinzugefügt hätten. Pseudoelemente verhalten sich so, als hätten Sie ein ganz neues Element zum DOM hinzugefügt, und ermöglichen es Ihnen, dieses zu stylen. Die `::before` und `::after` Pseudoelemente ermöglichen es Ihnen, Inhalte mit CSS in das Dokument einzufügen.

Im nächsten Artikel lernen wir über [Kombinatoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Combinators).

## Siehe auch

- [Pseudoklassen-Referenz](/de/docs/Web/CSS/Pseudo-classes)
- [Pseudoelemente-Referenz](/de/docs/Web/CSS/Pseudo-elements)

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Attribute_selectors", "Learn/CSS/Building_blocks/Selectors/Combinators", "Learn/CSS/Building_blocks")}}
