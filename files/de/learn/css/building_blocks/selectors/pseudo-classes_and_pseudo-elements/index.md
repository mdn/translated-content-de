---
title: Pseudo-Klassen und Pseudo-Elemente
slug: Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements
l10n:
  sourceCommit: 44b18841ff739fbf1a5450805d85f839fa3e68a5
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Attribute_selectors", "Learn/CSS/Building_blocks/Selectors/Combinators", "Learn/CSS/Building_blocks")}}

Die nächste Gruppe von Selektoren, die wir uns ansehen werden, sind die sogenannten **Pseudo-Klassen** und **Pseudo-Elemente**. Es gibt eine große Anzahl davon, und sie dienen oft recht spezifischen Zwecken. Sobald Sie wissen, wie man sie verwendet, können Sie sich die Liste ansehen, um zu sehen, ob es etwas gibt, das für die Aufgabe, die Sie versuchen zu erreichen, geeignet ist. Auch hier ist die relevante MDN-Seite für jeden Selektor hilfreich, um die Browser-Kompatibilität zu erklären.

<table>
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Grundlegende Software installiert</a
        >, grundlegende Kenntnisse über
        <a
          href="/de/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >den Umgang mit Dateien</a
        >, HTML-Grundlagen (lernen Sie
        <a href="/de/docs/Learn/HTML/Introduction_to_HTML"
          >Einführung in HTML</a
        >), und eine Vorstellung davon, wie CSS funktioniert (lernen Sie
        <a href="/de/docs/Learn/CSS/First_steps">CSS erste Schritte</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>Erlernen der Selektoren für Pseudo-Klassen und Pseudo-Elemente.</td>
    </tr>
  </tbody>
</table>

## Was ist eine Pseudo-Klasse?

Eine Pseudo-Klasse ist ein Selektor, der Elemente auswählt, die sich in einem bestimmten Zustand befinden, z. B. das erste Element ihres Typs sind oder vom Mauszeiger überfahren werden. Sie verhalten sich oft so, als hätten Sie einem Teil Ihres Dokuments eine Klasse hinzugefügt, was Ihnen hilft, übermäßige Klassen in Ihrem Markup zu reduzieren und flexibleren, wartbaren Code zu schreiben.

Pseudo-Klassen sind Schlüsselwörter, die mit einem Doppelpunkt beginnen. Zum Beispiel ist `:hover` eine Pseudo-Klasse.

### Einfaches Beispiel für eine Pseudo-Klasse

Werfen wir einen Blick auf ein einfaches Beispiel. Wenn wir den ersten Absatz in einem Artikel größer und fett gestalten wollten, könnten wir diesem Absatz eine Klasse hinzufügen und dann CSS zu dieser Klasse hinzufügen, wie im ersten Beispiel unten gezeigt:

{{EmbedGHLiveSample("css-examples/learn/selectors/first-child.html", '100%', 800)}}

Dies könnte jedoch lästig zu pflegen sein – was, wenn ein neuer Absatz am Anfang des Dokuments hinzugefügt wird? Wir müssten die Klasse auf den neuen Absatz verschieben. Statt die Klasse hinzuzufügen, könnten wir den {{cssxref(":first-child")}} Pseudo-Klasse-Selektor verwenden – dieser wird _immer_ das erste Kindelement im Artikel anvisieren und wir müssten das HTML nicht mehr bearbeiten (was möglicherweise sowieso nicht möglich ist, vielleicht weil es von einem CMS generiert wird).

{{EmbedGHLiveSample("css-examples/learn/selectors/first-child2.html", '100%', 700)}}

Alle Pseudo-Klassen verhalten sich auf diese Weise. Sie zielen auf einen Teil Ihres Dokuments ab, der sich in einem bestimmten Zustand befindet, und verhalten sich, als hätten Sie eine Klasse in Ihrem HTML hinzugefügt. Schauen Sie sich einige andere Beispiele auf MDN an:

- [`:last-child`](/de/docs/Web/CSS/:last-child)
- [`:only-child`](/de/docs/Web/CSS/:only-child)
- [`:invalid`](/de/docs/Web/CSS/:invalid)

> [!NOTE]
> Es ist gültig, Pseudo-Klassen und -Elemente ohne davorstehenden Elementselektor zu schreiben. Im obigen Beispiel können Sie `:first-child` schreiben und die Regel würde für _jedes_ Element gelten, das das erste Kind eines `<article>`-Elements ist, nicht nur für einen Absatz-Erstkind – `:first-child` ist äquivalent zu `*:first-child`. Normalerweise möchten Sie jedoch mehr Kontrolle, daher müssen Sie spezifischer sein.

### Benutzeraktions-Pseudo-Klassen

Einige Pseudo-Klassen gelten nur, wenn der Benutzer auf eine bestimmte Weise mit dem Dokument interagiert. Diese **Benutzeraktions**-Pseudo-Klassen, manchmal auch als **dynamische Pseudo-Klassen** bezeichnet, verhalten sich so, als wäre eine Klasse hinzugefügt worden, wenn der Benutzer damit interagiert. Beispiele sind:

- [`:hover`](/de/docs/Web/CSS/:hover) — oben erwähnt; dies gilt nur, wenn der Benutzer den Zeiger über ein Element bewegt, typischerweise einen Link.
- [`:focus`](/de/docs/Web/CSS/:focus) — gilt nur, wenn der Benutzer das Element durch Klicken oder Verwendung von Tastatursteuerungen fokussiert.

{{EmbedGHLiveSample("css-examples/learn/selectors/hover.html", '100%', 500)}}

## Was ist ein Pseudo-Element?

Pseudo-Elemente verhalten sich auf ähnliche Weise. Sie handeln jedoch so, als hätten Sie ein ganz neues HTML-Element in das Markup eingefügt, anstatt eine Klasse auf vorhandene Elemente anzuwenden.

Pseudo-Elemente beginnen mit einem doppelten Doppelpunkt `::`. `::before` ist ein Beispiel für ein Pseudo-Element.

> [!NOTE]
> Einige frühere Pseudo-Elemente verwendeten die Syntax mit einem einfachen Doppelpunkt, sodass Sie diese manchmal in Code oder Beispielen sehen können. Moderne Browser unterstützen die frühen Pseudo-Elemente mit einfacher oder doppelter Doppelkpunkt-Syntax zur Rückwärtskompatibilität.

Zum Beispiel, wenn Sie die erste Zeile eines Absatzes auswählen wollten, könnten Sie es in ein `<span>`-Element einwickeln und einen Elementselektor verwenden; jedoch würde das fehlschlagen, wenn die Anzahl der umschlossenen Wörter länger oder kürzer als die Breite des Elternelements wäre. Da wir dazu neigen, nicht zu wissen, wie viele Wörter auf eine Zeile passen – da sich dies ändert, wenn sich die Bildschirmbreite oder Schriftgröße ändert – ist es unmöglich, dies durch das Hinzufügen von HTML robust zu tun.

Der `::first-line` Pseudo-Element-Selektor wird dies zuverlässig für Sie erledigen – wenn die Anzahl der Wörter steigt oder sinkt, wird es trotzdem nur die erste Zeile auswählen.

{{EmbedGHLiveSample("css-examples/learn/selectors/first-line.html", '100%', 800)}}

Es verhält sich so, als ob ein `<span>` magisch um diese erste formatierte Linie gelegt wird und jedes Mal aktualisiert wird, wenn sich die Linienlänge ändert.

Sie können sehen, dass dies die erste Zeile beider Absätze auswählt.

## Kombinieren von Pseudo-Klassen und Pseudo-Elementen

Wenn Sie die erste Zeile des ersten Absatzes fett machen wollten, könnten Sie die `:first-child` und `::first-line` Selektoren kombinieren. Bearbeiten Sie das vorherige Live-Beispiel so, dass es den folgenden CSS verwendet. Wir sagen, dass wir die erste Zeile des ersten `<p>`-Elements auswählen möchten, das sich innerhalb eines `<article>`-Elements befindet.

```css
article p:first-child::first-line {
  font-size: 120%;
  font-weight: bold;
}
```

## Inhalt mit ::before und ::after generieren

Es gibt ein paar spezielle Pseudo-Elemente, die zusammen mit der [`content`](/de/docs/Web/CSS/content) Eigenschaft verwendet werden, um Inhalt mit CSS in Ihr Dokument einzufügen.

Sie könnten diese verwenden, um eine Zeichenkette einzufügen, wie im Live-Beispiel unten. Versuchen Sie, den Textwert der {{cssxref("content")}}-Eigenschaft zu ändern und sehen Sie, wie er sich in der Ausgabe ändert. Sie könnten auch das `::before` Pseudo-Element in `::after` umwandeln und sehen, wie der Text am Ende des Elements anstatt am Anfang eingefügt wird.

{{EmbedGHLiveSample("css-examples/learn/selectors/before.html", '100%', 400)}}

Zeichenketten aus CSS auf Webseiten einzufügen ist jedoch nicht etwas, was wir sehr häufig tun, da dieser Text für einige Screenreader unzugänglich ist und in der Zukunft schwer zu finden und zu bearbeiten sein könnte.

Eine gültigere Verwendung dieser Pseudo-Elemente ist das Einfügen eines Symbols, zum Beispiel der kleine Pfeil im Beispiel unten, der ein visuelles Indikator ist, den wir nicht von einem Screenreader vorgelesen haben möchten:

{{EmbedGHLiveSample("css-examples/learn/selectors/after-icon.html", '100%', 400)}}

Diese Pseudo-Elemente werden auch häufig verwendet, um einen leeren String einzufügen, der dann genauso gestylt werden kann wie jedes andere Element auf der Seite.

Im nächsten Beispiel haben wir einen leeren String mit dem `::before` Pseudo-Element hinzugefügt. Wir haben das auf `display: block` gesetzt, damit wir es mit einer Breite und Höhe stylen können. Wir verwenden dann CSS, um es wie jedes andere Element zu stylen. Sie können mit dem CSS spielen und ändern, wie es aussieht und sich verhält.

{{EmbedGHLiveSample("css-examples/learn/selectors/before-styled.html", '100%', 500)}}

Die Verwendung der `::before` und `::after` Pseudo-Elemente zusammen mit der `content`-Eigenschaft wird in CSS als "Generierter Inhalt" bezeichnet, und Sie werden diese Technik häufig für verschiedene Aufgaben verwendet sehen. Ein großartiges Beispiel ist die Seite [CSS Arrow Please](https://cssarrowplease.com/), die Ihnen hilft, einen Pfeil mit CSS zu erzeugen. Schauen Sie sich das CSS an, während Sie Ihren Pfeil erstellen, und Sie werden die {{cssxref("::before")}} und {{cssxref("::after")}} Pseudo-Elemente in Verwendung sehen. Wann auch immer Sie diese Selektoren sehen, schauen Sie auf die {{cssxref("content")}}-Eigenschaft, um zu sehen, was dem HTML-Element hinzugefügt wird.

## Zusammenfassung

In diesem Artikel haben wir CSS-Pseudo-Klassen und Pseudo-Elemente eingeführt, die spezielle Arten von Selektoren sind.

Pseudo-Klassen ermöglichen es Ihnen, ein Element anzuvisieren, wenn es sich in einem bestimmten Zustand befindet, als ob Sie eine Klasse für diesen Zustand zum DOM hinzugefügt hätten. Pseudo-Elemente verhalten sich, als hätten Sie ein ganz neues Element dem DOM hinzugefügt und ermöglichen es Ihnen, dieses zu stylen. Die `::before` und `::after` Pseudo-Elemente ermöglichen es Ihnen, Inhalt mit CSS in das Dokument einzufügen.

Im nächsten Artikel werden wir über [Kombinatoren](/de/docs/Learn/CSS/Building_blocks/Selectors/Combinators) lernen.

## Siehe auch

- [Pseudo-Klassen-Referenz](/de/docs/Web/CSS/Pseudo-classes)
- [Pseudo-Elemente-Referenz](/de/docs/Web/CSS/Pseudo-elements)

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Attribute_selectors", "Learn/CSS/Building_blocks/Selectors/Combinators", "Learn/CSS/Building_blocks")}}
