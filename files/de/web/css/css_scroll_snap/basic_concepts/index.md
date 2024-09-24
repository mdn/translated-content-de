---
title: Grundlegende Konzepte des Scroll-Snap
slug: Web/CSS/CSS_scroll_snap/Basic_concepts
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Die Eigenschaften im Modul [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap) ermöglichen es Ihnen, zu definieren, wie das Scrollen zu bestimmten Punkten einrastet, während ein Benutzer durch ein Dokument scrollt.

Die Scroll-Snap-Funktion ermöglicht es Ihnen, die Snap-Positionen zu definieren, an denen ein [Scroll-Container](/de/docs/Glossary/Scroll_container)'s Scrollbereich nach Abschluss eines Scrollvorgangs endet oder "einrastet".

## Wichtige Eigenschaften für CSS Scroll Snap

Bevor Sie Scroll-Snapping definieren können, müssen Sie das Scrollen auf einem Scroll-Container aktivieren. Dies können Sie tun, indem Sie sicherstellen, dass der Scroll-Container eine definierte Größe hat und dass {{cssxref("overflow")}} aktiviert ist.

Sie können dann das Scroll-Snapping auf dem Scroll-Container mit den folgenden zwei Schlüsseleigenschaften definieren:

- {{cssxref("scroll-snap-type")}}: Mit dieser Eigenschaft können Sie festlegen, ob der scrollbare Viewport einrasten kann, ob das Einrasten erforderlich oder optional ist und auf welcher Achse das Einrasten erfolgen soll.
- {{cssxref("scroll-snap-align")}}: Diese Eigenschaft wird auf jedes Kind des Scroll-Containers gesetzt, und Sie können sie verwenden, um die Snap-Position jedes Kindes oder deren Fehlen zu definieren.
- {{cssxref("scroll-snap-stop")}}: Diese Eigenschaft stellt sicher, dass ein Kind während des Scrollens eingerastet und nicht übersprungen wird.
- {{cssxref("scroll-margin")}}: Diese Eigenschaft kann auf Kind-Elementen gesetzt werden, die während des Scrollens eingerastet werden, um einen Abstand von der definierten Box zu schaffen.
- {{cssxref("scroll-padding")}}: Diese Eigenschaft kann auf dem Scroll-Container gesetzt werden, um einen Einrastversatz zu schaffen.

Das folgende Beispiel demonstriert das Scroll-Snapping entlang der vertikalen Achse, die durch `scroll-snap-type` definiert ist. Zusätzlich gilt `scroll-snap-align` für alle Kinder des `<section>`-Elements und bestimmt den Punkt, an dem das Scrollen jedes Kindes stoppen soll.

{{EmbedGHLiveSample("css-examples/scroll-snap/mandatory-y.html", '100%', 700)}}

## Verwendung von scroll-snap-type

Die Eigenschaft {{CSSxRef("scroll-snap-type")}} muss die Richtung kennen, in der das Scroll-Snapping erfolgt. Dies kann `x`, `y` oder die logischen Zuordnungen `block` oder `inline` sein. Sie können auch das Schlüsselwort `both` verwenden, um das Scroll-Snapping entlang beider Achsen zu aktivieren.

Sie können auch die Schlüsselwörter `mandatory` oder `proximity` verwenden. Das Schlüsselwort `mandatory` teilt dem Browser mit, dass der Inhalt auf jeden Fall zu einem bestimmten Punkt einrasten _muss_, unabhängig davon, wo der Scroll ist. Das Schlüsselwort `proximity` bedeutet, dass der Inhalt möglicherweise zu einem Punkt einrastet, aber nicht muss.

Die Verwendung von `mandatory` schafft ein sehr konsistentes Scroll-Erlebnis - Sie wissen, dass der Browser immer zu jedem definierten Punkt einrastet. Dies bedeutet, dass Sie sicher sein können, dass etwas, das Sie oben auf dem Bildschirm erwarten, dort sein wird, wenn das Scrollen abgeschlossen ist. Es kann jedoch Probleme verursachen, wenn der Inhalt größer ist als erwartet - Benutzer könnten sich in der frustrierenden Situation befinden, niemals zu einem bestimmten Punkt im Inhalt scrollen und ihn anzeigen zu können. Daher sollte die Verwendung von `mandatory` sorgfältig abgewogen und nur in Situationen verwendet werden, in denen Sie wissen, wie viel Inhalt auf dem Bildschirm oder im scrollbaren Abschnitt zu jeder Zeit vorhanden ist.

> [!NOTE]
> Verwenden Sie niemals `mandatory`, wenn der Inhalt in einem Ihrer Kind-Elemente den übergeordneten Container überlaufen würde, da der Benutzer dann nicht in der Lage wäre, den überlaufenden Inhalt in den Blick zu scrollen.

Der Wert `proximity` rastet Kind-Elemente nur dann an einer Position ein, wenn sie in der Nähe sind, wobei die Browser den genauen Abstand bestimmen.

Im folgenden Beispiel können Sie den Wert zwischen `mandatory` und `proximity` ändern, um die Auswirkung auf das Scroll-Erlebnis zu sehen.

{{EmbedGHLiveSample("css-examples/scroll-snap/mandatory-proximity.html", '100%', 700)}}

Im obigen Beispiel sind sowohl {{cssxref("height", "height: 300px;")}} als auch {{cssxref("overflow-y", "overflow-y: scroll;")}} auf dem Scroll-Container gesetzt.

Wenn der Inhalt seinen Container nicht überläuft, gibt es nichts zu scrollen.

## Verwendung von scroll-snap-align

Die gültigen Werte für die Eigenschaft {{CSSxRef("scroll-snap-align")}} umfassen `start`, `end`, `center` und `none`. Diese Werte geben den Punkt im Scroll-Container an, an den der Inhalt einrasten soll. Im folgenden Beispiel können Sie den Wert von `scroll-snap-align` ändern, um zu sehen, wie sich dies auf das Scroll-Verhalten auswirkt.

{{EmbedGHLiveSample("css-examples/scroll-snap/align.html", '100%', 700)}}

Wenn `scroll-snap-type` `mandatory` ist und `scroll-snap-align` bei einem Kind entweder auf `none` gesetzt ist oder nicht gesetzt ist (wobei es standardmäßig auf `none` gesetzt ist), kann der Benutzer dieses Element nicht in den Viewport scrollen.

## Verwendung von scroll-padding

Wenn Sie `start` oder `end` verwenden, und nicht möchten, dass der Inhalt genau an den Rand des Scroll-Containers einrastet, oder wenn Sie die Snap-Position etwas vom Zentrum versetzt haben möchten, wenn Sie `center` verwenden, verwenden Sie die Eigenschaft {{CSSxRef("scroll-padding")}} oder deren äquivalente Langformwerte, um etwas Abstand hinzuzufügen.

Im folgenden Beispiel ist `scroll-padding` auf `40px` gesetzt. Wenn der Inhalt an den Anfang des zweiten und dritten Abschnitts einrastet, stoppt das Scrollen 40 Pixel vom Anfang des Abschnitts entfernt. Versuchen Sie, den Wert von `scroll-padding` zu ändern, um zu sehen, wie sich dies auf den Abstand auswirkt.

{{EmbedGHLiveSample("css-examples/scroll-snap/scroll-padding.html", '100%', 700)}}

Dies ist potenziell nützlich, wenn Sie ein [festgesetztes](/de/docs/Web/CSS/position#fixed_positioning) Element wie eine Navigationsleiste haben, die über den gescrollten Inhalt überlappen könnte. Indem Sie `scroll-padding` verwenden, können Sie Platz für das feste Element reservieren, wie im folgenden Beispiel gezeigt, wo das `<h1>`-Element auf dem Bildschirm bleibt, während der Inhalt darunter scrollt. Ohne das Padding würde die Überschrift etwas vom Inhalt überlappen, wenn das Einrasten erfolgt.

{{EmbedGHLiveSample("css-examples/scroll-snap/scroll-padding-sticky.html", '100%', 700)}}

## Verwendung von scroll-margin

Die Eigenschaft {{CSSxRef("scroll-margin")}} oder die Langform-Scroll-Margin-Werte können auf Kind-Elemente gesetzt werden und definieren einen Abstand von der definierten Box. Dies ermöglicht unterschiedliche Abstände für verschiedene Kind-Elemente und kann in Verbindung mit `scroll-padding` auf dem übergeordneten Element verwendet werden. Versuchen Sie es im folgenden Beispiel.

{{EmbedGHLiveSample("css-examples/scroll-snap/scroll-margin.html", '100%', 700)}}

## Verwendung von scroll-snap-stop

Mithilfe der Eigenschaft {{CSSxRef("scroll-snap-stop")}} können Sie festlegen, ob das Scrollen an den definierten Einrastpunkten einrasten muss. In den obigen Beispielen würde dies bedeuten, dass das Scrollen am Anfang jedes Abschnitts stoppt oder Abschnitte überspringen kann.

Mit dieser Eigenschaftsdefinition können Sie sicherstellen, dass Benutzer jeden Abschnitt des Scrollers sehen und nicht versehentlich an ihnen vorbeiscrollen. Diese Einstellung kann jedoch auch die Benutzererfahrung negativ beeinflussen, da sie den Benutzer daran hindert, schnell zu dem gewünschten Inhalt zu scrollen.

## Siehe auch

- [CSS scroll snap](/de/docs/Web/CSS/CSS_scroll_snap) Modul
- [Gut kontrolliertes Scrollen mit CSS Scroll Snap](https://web.dev/articles/css-scroll-snap) auf web.dev (2021)
- [Praktisches CSS-Scroll-Snapping](https://css-tricks.com/practical-css-scroll-snapping/) auf CSS-Tricks (2020)
- [CSS-Scroll-Snap](https://12daysofweb.dev/2022/css-scroll-snap/) auf 12 Days of Web (2019)
- [Scroll-Snap-Beispiele](https://codepen.io/collection/KpqBGW) auf Codepen
