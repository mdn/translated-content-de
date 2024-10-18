---
title: Grundkonzepte von Scroll Snap
slug: Web/CSS/CSS_scroll_snap/Basic_concepts
l10n:
  sourceCommit: 2b112aef57df0649462db5d9f47d782a7aa1f25c
---

{{CSSRef}}

Die Eigenschaften im Modul [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap) ermöglichen es Ihnen zu definieren, wie das Scrollen zu bestimmten Punkten springt, wenn ein Benutzer durch ein Dokument scrollt.

Das {{Glossary("Scroll_snap", "scroll snap")}}-Merkmal ermöglicht Ihnen, die Schnapppositionen zu definieren, an denen ein {{Glossary("Scroll_container", "scroll container")}}-Scrollport nach Abschluss eines Scrollvorgangs enden oder "anhalten" kann.

## Wichtige Eigenschaften für CSS Scroll Snap

Bevor Sie Scroll-Snapping definieren können, müssen Sie das Scrollen auf einem Scroll-Container aktivieren. Sie können dies sicherstellen, indem Sie dem Scroll-Container eine definierte Größe geben und {{cssxref("overflow")}} aktivieren.

Sie können dann das Scroll-Snapping auf dem Scroll-Container mit den folgenden zwei Schlüsseleigenschaften definieren:

- {{cssxref("scroll-snap-type")}}: Mit dieser Eigenschaft können Sie definieren, ob der scrollbare Viewport angeschnappt werden kann, ob Snapping erforderlich oder optional ist und entlang welcher Achse das Snapping erfolgen soll.
- {{cssxref("scroll-snap-align")}}: Diese Eigenschaft wird auf jedes Kind des Scroll-Containers gesetzt und Sie können damit die Schnappposition oder deren Fehlen jedes Kindes definieren.
- {{cssxref("scroll-snap-stop")}}: Diese Eigenschaft stellt sicher, dass während des Scrollens zu einem Kind gesprungen wird und es nicht übersprungen wird.
- {{cssxref("scroll-margin")}}: Diese Eigenschaft kann auf Kind-Elemente gesetzt werden, zu denen während des Scrollens gesprungen wird, um eine Einfassung vom definierten Kasten zu erstellen.
- {{cssxref("scroll-padding")}}: Diese Eigenschaft kann auf den Scroll-Container gesetzt werden, um einen Snaps-Versatz zu erstellen.

Das unten stehende Beispiel demonstriert das Scroll-Snapping entlang der vertikalen Achse, die durch `scroll-snap-type` definiert ist. Zusätzlich wird `scroll-snap-align` auf alle Kinder des `<section>`-Elements angewandt, was den Punkt festlegt, an dem das Scrollen jedes Kindes stoppen soll.

{{EmbedGHLiveSample("css-examples/scroll-snap/mandatory-y.html", '100%', 700)}}

## Verwendung von scroll-snap-type

Die Eigenschaft {{CSSxRef("scroll-snap-type")}} benötigt die Information, entlang welcher Achse das Scroll-Snapping erfolgt. Dies kann `x`, `y` oder die logischen Zuordnungen `block` oder `inline` sein. Sie können auch das Schlüsselwort `both` verwenden, um das Scroll-Snapping auf beiden Achsen zu aktivieren.

Sie können auch die Schlüsselwörter `mandatory` oder `proximity` übergeben. Das Schlüsselwort `mandatory` weist den Browser an, ob der Inhalt _muss_ zu einem bestimmten Punkt springen, egal wo sich das Scrollen befindet. Das Schlüsselwort `proximity` bedeutet, dass der Inhalt möglicherweise zu dem Punkt springt, aber nicht muss.

Die Verwendung von `mandatory` erzeugt ein sehr konsistentes Scroll-Erlebnis – Sie wissen, dass der Browser immer zu jedem definierten Punkt springt. Das bedeutet, dass Sie sicher sein können, dass etwas, das Sie oben auf dem Bildschirm erwarten, dort sein wird, wenn das Scrollen beendet ist. Es kann jedoch Probleme verursachen, wenn der Inhalt größer ist als erwartet – Benutzer könnten sich in der frustrierenden Situation befinden, einen bestimmten Punkt im Inhalt nie ansehen zu können. Daher sollte die Verwendung von `mandatory` sorgfältig überlegt und nur in Situationen eingesetzt werden, in denen Sie wissen, wie viel Inhalt zu einem bestimmten Zeitpunkt auf dem Bildschirm oder in der scrollbaren Sektion vorhanden ist.

> [!NOTE]
> Verwenden Sie niemals `mandatory`, wenn der Inhalt eines Ihrer Kind-Elemente den übergeordneten Container überlaufen wird, da der Benutzer den überlaufenden Inhalt nicht in den Sichtbereich scrollen kann.

Der Wert `proximity` schnappt die Kind-Elemente nur in die Position, wenn sie sich in der Nähe befinden, wobei die Browser die genaue Entfernung bestimmen.

Im unten stehenden Beispiel können Sie den Wert zwischen `mandatory` und `proximity` ändern, um zu sehen, wie sich dies auf das Scrollerlebnis auswirkt.

{{EmbedGHLiveSample("css-examples/scroll-snap/mandatory-proximity.html", '100%', 700)}}

Im obigen Beispiel sind sowohl {{cssxref("height", "height: 300px;")}} als auch {{cssxref("overflow-y", "overflow-y: scroll;")}} auf dem Scroll-Container gesetzt.

Wenn der Inhalt seinen Container nicht überläuft, gibt es nichts zu scrollen.

## Verwendung von scroll-snap-align

Die gültigen Werte für die Eigenschaft {{CSSxRef("scroll-snap-align")}} umfassen `start`, `end`, `center` und `none`. Diese Werte werden verwendet, um den Punkt im Scroll-Container anzugeben, zu dem der Inhalt springen soll. Im unten stehenden Beispiel können Sie den Wert von `scroll-snap-align` ändern, um zu sehen, wie dies das Scrollverhalten verändert.

{{EmbedGHLiveSample("css-examples/scroll-snap/align.html", '100%', 700)}}

Wenn `scroll-snap-type` `mandatory` ist und `scroll-snap-align` bei einem Kind entweder auf `none` gesetzt ist oder nicht gesetzt ist (in diesem Fall ist der Standard `none`), kann der Benutzer dieses Element nicht in den Sichtbereich scrollen.

## Verwendung von scroll-padding

Wenn Sie `start` oder `end` verwenden und nicht möchten, dass der Inhalt direkt zum Rand des Scroll-Containers springt, oder wenn Sie möchten, dass die Position beim Verwenden von `center` leicht vom Zentrum versetzt ist, verwenden Sie die Eigenschaft {{CSSxRef("scroll-padding")}} oder deren entsprechende Langformwerte, um etwas Polsterung hinzuzufügen.

Im unten stehenden Beispiel wird `scroll-padding` auf `40px` gesetzt. Wenn der Inhalt an den Anfang des zweiten und dritten Abschnitts schnappt, hält das Scrollen 40 Pixel vom Anfang des Abschnitts entfernt an. Versuchen Sie, den Wert von `scroll-padding` zu ändern, um zu sehen, wie sich dies auf die Entfernung auswirkt.

{{EmbedGHLiveSample("css-examples/scroll-snap/scroll-padding.html", '100%', 700)}}

Dies ist potenziell nützlich, wenn Sie ein [fixed](/de/docs/Web/CSS/position#fixed_positioning)-Element wie eine Navigationsleiste haben, das über den gescrollten Inhalt überlappen könnte. Indem Sie `scroll-padding` verwenden, können Sie Platz für das feste Element reservieren, wie im obigen Beispiel gezeigt, wo das `<h1>`-Element auf dem Bildschirm bleibt, während der Inhalt darunter scrollt. Ohne Polsterung würde die Überschrift beim Snapping einige Inhalte überlappen.

{{EmbedGHLiveSample("css-examples/scroll-snap/scroll-padding-sticky.html", '100%', 700)}}

## Verwendung von scroll-margin

Die Eigenschaft {{CSSxRef("scroll-margin")}} oder die Langformwerte zur Scroll-Marge können auf Kind-Elemente gesetzt werden, um eine Einfassung vom definierten Kasten zu erzeugen. Dies ermöglicht unterschiedliche Abstände für verschiedene Kind-Elemente und kann in Verbindung mit `scroll-padding` auf dem übergeordneten Element verwendet werden. Probieren Sie dies im unten stehenden Beispiel aus.

{{EmbedGHLiveSample("css-examples/scroll-snap/scroll-margin.html", '100%', 700)}}

## Verwendung von scroll-snap-stop

Mit der Eigenschaft {{CSSxRef("scroll-snap-stop")}} können Sie angeben, ob das Scrollen zu den definierten Snap-Punkten schnappen muss. In den obigen Beispielen würde dies bedeuten, dass das Scrollen am Anfang jedes Abschnitts stoppt oder Abschnitte überspringen kann.

Mit dieser Eigenschaftsdefinition können Sie sicherstellen, dass Benutzer jeden Abschnitt des Scrollers sehen und nicht versehentlich daran vorbeiscrollen. Dieses Einstellung kann jedoch auch die Benutzererfahrung negativ beeinflussen, indem sie verhindert, dass der Benutzer schnell zu dem gewünschten Inhalt scrollt.

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [Gut kontrolliertes Scrollen mit CSS scroll snap](https://web.dev/articles/css-scroll-snap) auf web.dev (2021)
- [Praktisches CSS-Scroll-Snapping](https://css-tricks.com/practical-css-scroll-snapping/) auf CSS-Tricks (2020)
- [CSS scroll snap](https://12daysofweb.dev/2022/css-scroll-snap/) auf 12 Days of Web (2019)
- [Scroll snap Beispiele](https://codepen.io/collection/KpqBGW) auf Codepen
