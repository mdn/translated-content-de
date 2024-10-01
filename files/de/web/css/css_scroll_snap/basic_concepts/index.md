---
title: Grundkonzepte von Scroll Snap
slug: Web/CSS/CSS_scroll_snap/Basic_concepts
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die Eigenschaften im [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul ermöglichen es Ihnen, zu definieren, wie das Scrollen zu bestimmten Punkten einrastet, wenn ein Benutzer durch ein Dokument scrollt.

Das Scroll-Snap-Feature ermöglicht es Ihnen, die Einrastpositionen zu definieren, an denen der Scrollport eines {{Glossary("Scroll_container", "Scroll-Containers")}} nach Abschluss eines Scrollvorgangs enden oder "einrasten" kann.

## Wichtige Eigenschaften für CSS scroll snap

Bevor Sie das Einrasten beim Scrollen definieren können, müssen Sie das Scrollen in einem Scroll-Container aktivieren. Dies können Sie erreichen, indem Sie sicherstellen, dass der Scroll-Container eine definierte Größe hat und {{cssxref("overflow")}} aktiviert ist.

Sie können dann das Einrasten beim Scrollen im Scroll-Container mit den folgenden zwei Schlüsseleigenschaften definieren:

- {{cssxref("scroll-snap-type")}}: Mit dieser Eigenschaft können Sie festlegen, ob der scrollbare Viewport einrasten kann, ob das Einrasten erforderlich oder optional ist und auf welcher Achse das Einrasten erfolgen soll.
- {{cssxref("scroll-snap-align")}}: Diese Eigenschaft wird auf jedes Kind des Scroll-Containers gesetzt und Sie können damit die Einrastposition jedes Kindes oder deren Fehlen definieren.
- {{cssxref("scroll-snap-stop")}}: Diese Eigenschaft stellt sicher, dass ein Kind während des Scrollens einrastet und nicht übergangen wird.
- {{cssxref("scroll-margin")}}: Diese Eigenschaft kann auf Kindelementen gesetzt werden, die während des Scrollens einrasten, um einen Abstand von der definierten Box zu erstellen.
- {{cssxref("scroll-padding")}}: Diese Eigenschaft kann auf den Scroll-Container gesetzt werden, um einen Einrast-Versatz zu erstellen.

Das folgende Beispiel demonstriert das Einrasten beim Scrollen entlang der vertikalen Achse, welche durch `scroll-snap-type` definiert ist. Darüber hinaus wird `scroll-snap-align` auf alle Kinder des `<section>` Elements angewendet und bestimmt den Punkt, an dem das Scrollen jedes Kindes stoppt.

{{EmbedGHLiveSample("css-examples/scroll-snap/mandatory-y.html", '100%', 700)}}

## Verwendung von scroll-snap-type

Die {{CSSxRef("scroll-snap-type")}} Eigenschaft muss die Richtung wissen, in der das Einrasten beim Scrollen erfolgt. Dies kann `x`, `y` oder die logischen Zuordnungen `block` oder `inline` sein. Sie können auch das Schlüsselwort `both` verwenden, um das Einrasten in beiden Achsen zu ermöglichen.

Sie können ebenfalls die Schlüsselwörter `mandatory` oder `proximity` verwenden. Das Schlüsselwort `mandatory` gibt dem Browser an, ob der Inhalt _unbedingt_ zu einem bestimmten Punkt einrasten muss, egal wo sich der Scroll befindet. Das Schlüsselwort `proximity` bedeutet, dass der Inhalt an den Punkt einrasten _kann_, aber nicht muss.

Die Verwendung von `mandatory` schafft ein sehr konsistentes Scroll-Erlebnis — Sie wissen, dass der Browser immer zu jedem definierten Punkt einrastet. Dies bedeutet, dass Sie sicher sein können, dass etwas, das Sie erwarten, oben auf dem Bildschirm ist, wenn der Scrollvorgang beendet ist. Allerdings kann es Probleme verursachen, wenn der Inhalt größer ist, als Sie erwarten — Benutzer könnten sich in der frustrierenden Situation befinden, nie zu einem bestimmten Punkt im Inhalt scrollen und ihn ansehen zu können. Daher sollte die Verwendung von `mandatory` sorgfältig überlegt und nur in Situationen genutzt werden, in denen Sie wissen, wie viel Inhalt auf dem Bildschirm oder im scrollbaren Abschnitt zu jedem Zeitpunkt vorhanden ist.

> [!NOTE]
> Verwenden Sie `mandatory` niemals, wenn der Inhalt eines Ihrer Kindelemente den übergeordneten Container überlaufen wird, da der Benutzer nicht in der Lage sein wird, den überlaufenden Inhalt in den Blick zu scrollen.

Der `proximity` Wert rastet Kindelemente nur dann an einer Position ein, wenn sie sich in der Nähe befinden, wobei der Browser den genauen Abstand bestimmt.

Im folgenden Beispiel können Sie den Wert zwischen `mandatory` und `proximity` ändern, um die Auswirkung auf das Scroll-Erlebnis zu sehen.

{{EmbedGHLiveSample("css-examples/scroll-snap/mandatory-proximity.html", '100%', 700)}}

Im obigen Beispiel sind sowohl {{cssxref("height", "height: 300px;")}} als auch {{cssxref("overflow-y", "overflow-y: scroll;")}} auf den Scroll-Container gesetzt.

Wenn der Inhalt seinen Container nicht überläuft, gibt es nichts zu scrollen.

## Verwendung von scroll-snap-align

Die gültigen Werte für die Eigenschaft {{CSSxRef("scroll-snap-align")}} umfassen `start`, `end`, `center` und `none`. Diese Werte werden verwendet, um den Punkt im Scroll-Container anzugeben, an den der Inhalt einrasten soll. Im folgenden Beispiel können Sie den Wert von `scroll-snap-align` ändern, um zu sehen, wie sich dies auf das Scroll-Verhalten auswirkt.

{{EmbedGHLiveSample("css-examples/scroll-snap/align.html", '100%', 700)}}

Wenn `scroll-snap-type` auf `mandatory` und `scroll-snap-align` auf ein Kind auf `none` gesetzt ist oder nicht gesetzt ist (in diesem Fall standardmäßig `none`), kann der Benutzer dieses Element nicht in den Blick scrollen.

## Verwendung von scroll-padding

Wenn Sie `start` oder `end` verwenden und nicht möchten, dass der Inhalt genau am Rand des Scroll-Containers einrastet, oder wenn Sie die Einrastposition beim Verwenden von `center` leicht von der Mitte versetzen möchten, verwenden Sie die {{CSSxRef("scroll-padding")}} Eigenschaft oder die entsprechenden Langformen, um etwas Abstand hinzuzufügen.

Im folgenden Beispiel ist `scroll-padding` auf `40px` gesetzt. Wenn der Inhalt an den Anfang des zweiten und dritten Abschnitts einrastet, stoppt das Scrollen 40 Pixel vom Anfang des Abschnitts entfernt. Versuchen Sie, den `scroll-padding` Wert zu ändern, um zu sehen, wie sich diese Entfernung ändert.

{{EmbedGHLiveSample("css-examples/scroll-snap/scroll-padding.html", '100%', 700)}}

Dies ist potenziell nützlich, wenn Sie ein [fixiertes](/de/docs/Web/CSS/position#fixed_positioning) Element wie eine Navigationsleiste haben, die über den gescrollten Inhalt überlappen könnte. Durch die Verwendung von `scroll-padding` können Sie Platz für das fixierte Element reservieren, wie im folgenden Beispiel gezeigt wird, in dem das `<h1>` Element beim Scrollen des Inhalts darunter auf dem Bildschirm bleibt. Ohne Polsterung würde die Überschrift beim Einrasten einen Teil des Inhalts überlappen.

{{EmbedGHLiveSample("css-examples/scroll-snap/scroll-padding-sticky.html", '100%', 700)}}

## Verwendung von scroll-margin

Die {{CSSxRef("scroll-margin")}} Eigenschaft oder die Langform-Scroll-Margen-Werte können auf Kindelementen gesetzt werden, um einen Abstand von der definierten Box festzulegen. Dies ermöglicht unterschiedliche Mengen an Platz für verschiedene Kindelemente und kann in Verbindung mit `scroll-padding` auf dem übergeordneten Element verwendet werden. Versuchen Sie dies im folgenden Beispiel.

{{EmbedGHLiveSample("css-examples/scroll-snap/scroll-margin.html", '100%', 700)}}

## Verwendung von scroll-snap-stop

Durch die Verwendung der {{CSSxRef("scroll-snap-stop")}} Eigenschaft können Sie angeben, ob das Scrollen an den definierten Einrastpunkten einrasten muss. In den obigen Beispielen würde dies bedeuten, dass das Scrollen am Beginn jedes Abschnitts stoppen oder über Abschnitte hinweg überspringen könnte.

Mit dieser Eigenschaftsdefinition können Sie sicherstellen, dass Benutzer jeden Abschnitt des Scroller sehen und nicht versehentlich an ihnen vorbeiscrollen. Allerdings kann diese Einstellung auch die Benutzererfahrung negativ beeinflussen, indem verhindert wird, dass der Benutzer schnell zu seinem gewünschten Inhalt scrollt.

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [Gut gesteuertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap) auf web.dev (2021)
- [Praktische CSS scroll snapping](https://css-tricks.com/practical-css-scroll-snapping/) auf CSS-Tricks (2020)
- [CSS scroll snap](https://12daysofweb.dev/2022/css-scroll-snap/) auf 12 Days of Web (2019)
- [Scroll snap Beispiele](https://codepen.io/collection/KpqBGW) auf Codepen
