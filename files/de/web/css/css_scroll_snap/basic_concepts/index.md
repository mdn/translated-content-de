---
title: Grundlegende Konzepte des Scroll Snap
slug: Web/CSS/CSS_scroll_snap/Basic_concepts
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die Eigenschaften im [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap)-Modul ermöglichen es Ihnen, zu definieren, wie das Scrollen zu bestimmten Punkten "snappt", während ein Benutzer durch ein Dokument scrollt.

Mit der Scroll-Snap-Funktion können Sie die Snap-Positionen definieren, an denen der Scrollport eines [Scrollcontainers](/de/docs/Glossary/Scroll_container) nach Abschluss eines Scrollvorgangs enden oder "snappen" kann.

## Wichtige Eigenschaften für CSS Scroll Snap

Bevor Sie Scroll-Snapping definieren können, müssen Sie das Scrollen auf einem Scrollcontainer aktivieren. Sie können dies sicherstellen, indem Sie dem Scrollcontainer eine definierte Größe geben und {{cssxref("overflow")}} aktivieren.

Anschließend können Sie das Scroll-Snapping auf dem Scrollcontainer mit den folgenden zwei Schlüsseleigenschaften definieren:

- {{cssxref("scroll-snap-type")}}: Mit dieser Eigenschaft können Sie definieren, ob der scrollbare Viewport gesnappt werden kann, ob das Snapping erforderlich oder optional ist und auf welcher Achse das Snapping stattfinden soll.
- {{cssxref("scroll-snap-align")}}: Diese Eigenschaft wird auf jedes Kind des Scrollcontainers gesetzt und Sie können damit die Snap-Position jedes Kindes oder deren Fehlen definieren.
- {{cssxref("scroll-snap-stop")}}: Diese Eigenschaft stellt sicher, dass während des Scrollens zu einem Kind gesnappt wird und es nicht übersprungen wird.
- {{cssxref("scroll-margin")}}: Diese Eigenschaft kann auf Kind-Elementen gesetzt werden, die während des Scrollens gesnappt werden, um einen Abstand vom definierten Kasten zu schaffen.
- {{cssxref("scroll-padding")}}: Diese Eigenschaft kann auf den Scrollcontainer gesetzt werden, um einen Snap-Abstand zu schaffen.

Das folgende Beispiel zeigt das Scroll-Snapping entlang der vertikalen Achse, die durch `scroll-snap-type` definiert ist. Zusätzlich wird `scroll-snap-align` auf alle Kinder des `<section>`-Elements angewendet, was den Punkt bestimmt, an dem das Scrollen jedes Kindes gestoppt werden soll.

{{EmbedGHLiveSample("css-examples/scroll-snap/mandatory-y.html", '100%', 700)}}

## Verwendung von scroll-snap-type

Die {{CSSxRef("scroll-snap-type")}}-Eigenschaft benötigt die Angabe der Richtung, in der das Scroll-Snapping erfolgt. Dies kann `x`, `y` oder die logischen Zuordnungen `block` oder `inline` sein. Sie können auch das Schlüsselwort `both` verwenden, um das Scroll-Snapping entlang beider Achsen zu aktivieren.

Sie können auch die Schlüsselwörter `mandatory` oder `proximity` verwenden. Das Schlüsselwort `mandatory` gibt dem Browser an, dass der Inhalt _muss_ zu einem bestimmten Punkt snappen, egal wo der Scroll stattfindet. Das Schlüsselwort `proximity` bedeutet, dass der Inhalt an den Punkt snappen kann, aber nicht muss.

Die Verwendung von `mandatory` schafft ein sehr konsistentes Scroll-Erlebnis – Sie wissen, dass der Browser immer zu jedem definierten Punkt snappen wird. Dies bedeutet, dass Sie sicher sein können, dass etwas, das Sie erwarten, oben auf dem Bildschirm zu sein, dort auch sein wird, wenn das Scrollen abgeschlossen ist. Allerdings kann es zu Problemen führen, wenn der Inhalt größer ist als erwartet – Benutzer könnten sich in der frustrierenden Situation befinden, niemals zu einem bestimmten Punkt im Inhalt scrollen und diesen ansehen zu können. Daher sollte die Verwendung von `mandatory` sorgfältig abgewogen und nur in Situationen verwendet werden, in denen Sie wissen, wie viel Inhalt zu einem bestimmten Zeitpunkt auf dem Bildschirm oder im scrollbaren Bereich ist.

> [!NOTE]
> Verwenden Sie niemals `mandatory`, wenn der Inhalt in einem Ihrer Kind-Elemente den übergeordneten Container überläuft, da der Benutzer den überlaufenden Inhalt nicht in Sicht scrollen kann.

Der `proximity`-Wert snappt Kind-Elemente nur, wenn sie nahe liegen, wobei die genauen Abstände von den Browsern bestimmt werden.

Im Beispiel unten können Sie den Wert zwischen `mandatory` und `proximity` ändern, um den Effekt auf das Scroll-Erlebnis zu sehen.

{{EmbedGHLiveSample("css-examples/scroll-snap/mandatory-proximity.html", '100%', 700)}}

Im obigen Beispiel sind sowohl {{cssxref("height", "height: 300px;")}} als auch {{cssxref("overflow-y", "overflow-y: scroll;")}} auf dem Scrollcontainer gesetzt.

Wenn der Inhalt seinen Container nicht überläuft, gibt es nichts zu scrollen.

## Verwendung von scroll-snap-align

Die gültigen Werte für die {{CSSxRef("scroll-snap-align")}}-Eigenschaft sind `start`, `end`, `center` und `none`. Diese Werte werden verwendet, um den Punkt im Scrollcontainer anzugeben, an den der Inhalt snappen soll. Im Beispiel unten können Sie den Wert von `scroll-snap-align` ändern, um zu sehen, wie dies das Scroll-Verhalten verändert.

{{EmbedGHLiveSample("css-examples/scroll-snap/align.html", '100%', 700)}}

Wenn `scroll-snap-type` auf `mandatory` ist und `scroll-snap-align` bei einem Kind entweder auf `none` gesetzt ist oder nicht gesetzt (in welchem Fall es standardmäßig `none` ist), kann der Benutzer das Element möglicherweise nicht in den Sichtbereich scrollen.

## Verwendung von scroll-padding

Wenn Sie `start` oder `end` verwenden und der Inhalt nicht exakt an den Rand des Scrollcontainers snappen soll, oder wenn Sie möchten, dass die Snap-Position beim Verwenden von `center` leicht von der Mitte abweicht, verwenden Sie die {{CSSxRef("scroll-padding")}}-Eigenschaft oder ihre äquivalenten Langhand-Werte, um etwas Padding hinzuzufügen.

Im Beispiel unten ist `scroll-padding` auf `40px` gesetzt. Wenn der Inhalt zum Start der zweiten und dritten Abschnitte snappt, stoppt das Scrollen 40 Pixel vom Start des Abschnitts entfernt. Versuchen Sie, den Wert von `scroll-padding` zu ändern, um zu sehen, wie sich der Abstand ändert.

{{EmbedGHLiveSample("css-examples/scroll-snap/scroll-padding.html", '100%', 700)}}

Dies ist potenziell nützlich, wenn Sie ein [fixiertes](/de/docs/Web/CSS/position#fixed_positioning) Element wie eine Navigationsleiste haben, das sonst über den gescrollten Inhalt ragen könnte. Durch die Verwendung von `scroll-padding` können Sie Platz für das fixierte Element reservieren, wie im folgenden Beispiel gezeigt wird, in dem das `<h1>`-Element auf dem Bildschirm bleibt, während der Inhalt darunter scrollt. Ohne Padding würde die Überschrift bei einem Snap einen Teil des Inhalts überlagern.

{{EmbedGHLiveSample("css-examples/scroll-snap/scroll-padding-sticky.html", '100%', 700)}}

## Verwendung von scroll-margin

Die {{CSSxRef("scroll-margin")}}-Eigenschaft oder die Langhand-Scroll-Margin-Werte können auf Kind-Elementen gesetzt werden, um einen Abstand vom definierten Kasten zu schaffen. Dies ermöglicht unterschiedliche Mengen an Abstand für verschiedene Kind-Elemente und kann in Verbindung mit `scroll-padding` auf dem Elternteil verwendet werden. Probieren Sie dies im folgenden Beispiel aus.

{{EmbedGHLiveSample("css-examples/scroll-snap/scroll-margin.html", '100%', 700)}}

## Verwendung von scroll-snap-stop

Mit der {{CSSxRef("scroll-snap-stop")}}-Eigenschaft können Sie festlegen, ob das Scrollen an den definierten Snap-Punkten stoppen muss. In den obigen Beispielen würde dies bedeuten, dass das Scrollen am Anfang jedes Abschnitts stoppt oder dass Abschnitte übersprungen werden können.

Mit dieser Eigenschaftsdefinition können Sie sicherstellen, dass Benutzer jeden Abschnitt des Scrollers sehen und nicht versehentlich darüber hinweg scrollen. Diese Einstellung kann jedoch auch die Benutzererfahrung negativ beeinflussen, indem sie den Benutzer daran hindert, schnell zu ihrem gewünschten Inhalt zu scrollen.

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [Gut kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap) auf web.dev (2021)
- [Praktisches CSS-Scroll-Snapping](https://css-tricks.com/practical-css-scroll-snapping/) auf CSS-Tricks (2020)
- [CSS scroll snap](https://12daysofweb.dev/2022/css-scroll-snap/) auf 12 Days of Web (2019)
- [Scroll Snap Beispiele](https://codepen.io/collection/KpqBGW) auf Codepen
