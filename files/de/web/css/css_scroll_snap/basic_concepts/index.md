---
title: Grundlegende Konzepte des Scroll Snap
slug: Web/CSS/CSS_scroll_snap/Basic_concepts
l10n:
  sourceCommit: 2dcc312a65bef12f7cedda23eef525e714ed053b
---

{{CSSRef}}

Die Eigenschaften im [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap)-Modul ermöglichen es Ihnen, festzulegen, wie das Scrollen an bestimmten Punkten einrastet, wenn ein Benutzer durch ein Dokument scrollt.

Die Scroll Snap-Funktion ermöglicht es Ihnen, die Einrastpositionen zu definieren, an denen ein {{Glossary("Scroll_container", "Scroll-Container")}} nach Abschluss einer Scroll-Operation enden oder „einrasten“ kann.

## Wichtige Eigenschaften für CSS Scroll Snap

Bevor Sie das Scroll-Einrasten definieren können, müssen Sie das Scrollen in einem Scroll-Container aktivieren. Dies können Sie tun, indem Sie sicherstellen, dass der Scroll-Container eine definierte Größe hat und {{cssxref("overflow")}} aktiviert ist.

Sie können dann das Scroll-Einrasten im Scroll-Container mit den folgenden zwei Schlüsseleigenschaften definieren:

- {{cssxref("scroll-snap-type")}}: Mit dieser Eigenschaft können Sie definieren, ob der scrollbare Ansichtsbereich eingerastet werden kann, ob das Einrasten erforderlich oder optional ist und auf welcher Achse das Einrasten erfolgen soll.
- {{cssxref("scroll-snap-align")}}: Diese Eigenschaft wird auf jedes Kind des Scroll-Containers gesetzt, und Sie können sie verwenden, um die Einrastposition jedes Kindes zu definieren oder nicht.
- {{cssxref("scroll-snap-stop")}}: Diese Eigenschaft sorgt dafür, dass ein Kind beim Scrollen eingerastet wird und nicht übergangen wird.
- {{cssxref("scroll-margin")}}: Diese Eigenschaft kann auf Kind-Elementen gesetzt werden, die beim Scrollen eingerastet werden, um einen Vorlauf vom definierten Rahmen zu erzeugen.
- {{cssxref("scroll-padding")}}: Diese Eigenschaft kann auf den Scroll-Container gesetzt werden, um einen Einrastversatz zu erzeugen.

Das folgende Beispiel demonstriert das Scroll-Einrasten entlang der vertikalen Achse, die durch `scroll-snap-type` definiert ist. Zudem wendet `scroll-snap-align` auf alle Kinder des `<section>`-Elements an und bestimmt den Punkt, an dem das Scrollen jedes Kindes stoppen soll.

{{EmbedGHLiveSample("css-examples/scroll-snap/mandatory-y.html", '100%', 700)}}

## Verwendung von scroll-snap-type

Die Eigenschaft {{CSSxRef("scroll-snap-type")}} muss die Achse kennen, entlang der das Scroll-Einrasten erfolgt. Dies kann `x`, `y` oder die logischen Zuordnungen `block` oder `inline` sein. Sie können auch das Schlüsselwort `both` verwenden, um das Scroll-Einrasten entlang beider Achsen zu ermöglichen.

Sie können auch die Schlüsselwörter `mandatory` oder `proximity` verwenden. Das Schlüsselwort `mandatory` teilt dem Browser mit, ob die Inhalte unabhängig davon, wo das Scrollen ist, zu einem bestimmten Punkt einrasten _müssen_. Das Schlüsselwort `proximity` bedeutet, dass die Inhalte möglicherweise zu dem Punkt einrasten, aber nicht müssen.

Die Verwendung von `mandatory` schafft ein sehr konsistentes Scroll-Erlebnis – Sie wissen, dass der Browser immer an jedem definierten Punkt einrastet. Das bedeutet, dass Sie sicher sein können, dass etwas, das Sie am oberen Rand des Bildschirms erwarten, dort sein wird, wenn das Scrollen beendet ist. Es kann jedoch Probleme verursachen, wenn die Inhalte größer sind als erwartet – Benutzer befinden sich möglicherweise in der frustrierenden Situation, dass sie nie in der Lage sind, einen bestimmten Punkt in den Inhalten zu scrollen und anzuzeigen. Daher sollte die Verwendung von `mandatory` sorgfältig überlegt werden und nur in Situationen verwendet werden, in denen Sie wissen, wie viel Inhalt auf dem Bildschirm oder im scrollbaren Bereich zu einem bestimmten Zeitpunkt vorhanden ist.

> [!NOTE]
> Verwenden Sie niemals `mandatory`, wenn der Inhalt innerhalb eines Ihrer Kind-Elemente den übergeordneten Container überflutet, da der Benutzer den überflutenden Inhalt nicht in die Ansicht scrollen kann.

Der `proximity`-Wert rastet Kind-Elemente nur dann in eine Position ein, wenn sie in der Nähe sind, wobei die Browser den genauen Abstand bestimmen.

Im untenstehenden Beispiel können Sie den Wert zwischen `mandatory` und `proximity` ändern, um den Effekt auf das Scroll-Erlebnis zu sehen.

{{EmbedGHLiveSample("css-examples/scroll-snap/mandatory-proximity.html", '100%', 700)}}

Im obigen Beispiel sind sowohl {{cssxref("height", "height: 300px;")}} als auch {{cssxref("overflow-y", "overflow-y: scroll;")}} im Scroll-Container gesetzt.

Wenn der Inhalt seinen Container nicht überflutet, gibt es nichts zu scrollen.

## Verwendung von scroll-snap-align

Die gültigen Werte für die Eigenschaft {{CSSxRef("scroll-snap-align")}} umfassen `start`, `end`, `center` und `none`. Diese Werte werden verwendet, um den Punkt im Scroll-Container anzugeben, zu dem die Inhalte einrasten sollen. Im untenstehenden Beispiel können Sie den Wert von `scroll-snap-align` ändern, um zu sehen, wie sich dies auf das Scroll-Verhalten auswirkt.

{{EmbedGHLiveSample("css-examples/scroll-snap/align.html", '100%', 700)}}

Wenn `scroll-snap-type` `mandatory` ist und `scroll-snap-align` bei einem Kind entweder auf `none` gesetzt ist oder nicht gesetzt ist (in diesem Fall standardmäßig auf `none` gesetzt), kann der Benutzer dieses Element nicht in die Ansicht scrollen.

## Verwendung von scroll-padding

Wenn Sie `start` oder `end` verwenden, und nicht möchten, dass der Inhalt direkt an den Rand des Scroll-Containers einrastet, oder wenn Sie möchten, dass die Einrastposition beim Verwenden von `center` leicht vom Zentrum abweicht, verwenden Sie die Eigenschaft {{CSSxRef("scroll-padding")}} oder ihre entsprechenden Langform-Werte, um etwas Polsterung hinzuzufügen.

Im untenstehenden Beispiel ist `scroll-padding` auf `40px` gesetzt. Wenn die Inhalte an den Anfang des zweiten und dritten Abschnitts einrasten, wird das Scrollen 40 Pixel vom Anfang des Abschnitts entfernt gestoppt. Versuchen Sie, den `scroll-padding`-Wert zu ändern, um zu sehen, wie sich dies auf den Abstand auswirkt.

{{EmbedGHLiveSample("css-examples/scroll-snap/scroll-padding.html", '100%', 700)}}

Dies ist potenziell nützlich, wenn Sie ein [feststehendes](/de/docs/Web/CSS/position#fixed_positioning) Element wie eine Navigationsleiste haben, die über gescrollten Inhalten überlappen könnte. Mit `scroll-padding` können Sie Platz für das feste Element reservieren, wie im untenstehenden Beispiel gezeigt, wo das `<h1>`-Element auf dem Bildschirm bleibt, während die Inhalte darunter scrollen. Ohne Polsterung würden die Überschriften beim Einrasten einige der Inhalte überlappen.

{{EmbedGHLiveSample("css-examples/scroll-snap/scroll-padding-sticky.html", '100%', 700)}}

## Verwendung von scroll-margin

Die Eigenschaft {{CSSxRef("scroll-margin")}} oder die Langform-Werte für die Scrollmargin können auf Kind-Elementen gesetzt werden, um einen Vorlauf vom definierten Rahmen zu bestimmen. Dadurch können unterschiedliche Abstände für unterschiedliche Kind-Elemente definiert werden und können in Verbindung mit `scroll-padding` im übergeordneten Container verwendet werden. Probieren Sie dies im untenstehenden Beispiel aus.

{{EmbedGHLiveSample("css-examples/scroll-snap/scroll-margin.html", '100%', 700)}}

## Verwendung von scroll-snap-stop

Mit der Eigenschaft {{CSSxRef("scroll-snap-stop")}} können Sie angeben, ob das Scrollen an den definierten Einrastpunkten einrasten _muss_. In den obigen Beispielen würde dies bedeuten, dass das Scrollen am Anfang jedes Abschnitts stoppen oder Abschnitt überspringen können sollte.

Mit dieser Eigenschaftsdefinition können Sie sicherstellen, dass Benutzer jeden Abschnitt des Scrollers sehen und nicht versehentlich daran vorbeiscrollen. Diese Einstellung kann jedoch auch negative Auswirkungen auf die Benutzererfahrung haben, da sie verhindert, dass der Benutzer schnell zu seinem gewünschten Inhalt scrollt.

## Siehe auch

- [CSS Scroll Snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [Gut kontrolliertes Scrollen mit CSS Scroll Snap](https://web.dev/articles/css-scroll-snap) auf web.dev (2021)
- [Praktisches CSS Scroll Snapping](https://css-tricks.com/practical-css-scroll-snapping/) auf CSS-Tricks (2020)
- [CSS Scroll Snap](https://12daysofweb.dev/2022/css-scroll-snap/) auf 12 Days of Web (2019)
- [Scroll Snap Beispiele](https://codepen.io/collection/KpqBGW) auf Codepen
