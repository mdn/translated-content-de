---
title: Umgang mit Inhaltsumbrüchen im Mehrspaltenlayout
slug: Web/CSS/CSS_multicol_layout/Handling_content_breaks_in_multicol_layout
l10n:
  sourceCommit: f7b308af624b3ec6acfeef1c06d7a8c9ac46410d
---

{{CSSRef}}

Inhalte zwischen Spaltenboxen in einem Mehrspaltenlayout brechen auf die gleiche Weise wie zwischen Seiten in paginierten Medien. In beiden Kontexten können Sie steuern, wo und wie Inhalte brechen, indem Sie Eigenschaften des [CSS-Fragmentierungsmoduls](/de/docs/Web/CSS/CSS_fragmentation) verwenden. In diesem Leitfaden sehen wir uns an, wie die Fragmentierung in einem _Mehrspalten-Container_ funktioniert, kurz _Multicol-Container_.

## Grundlagen der Fragmentierung

Das CSS-Fragmentierungsmodul gibt Details darüber, wie Inhalte zwischen den Fragmentierungscontainern oder _Fragmentainern_ brechen. Das [Mehrspaltenlayout-Modul](/de/docs/Web/CSS/CSS_multicol_layout) hingegen definiert die {{cssxref("break-after")}}, {{cssxref("break-before")}} und {{cssxref("break-inside")}} Eigenschaften, die eine gewisse Kontrolle innerhalb und zwischen Spalten bieten. In einem Mehrspaltenlayout ist eine Spaltenbox ein Fragmentcontainer.

Eine Spaltenbox kann andere Markups enthalten und es gibt viele Stellen, an denen ein Umbruch nicht ideal wäre. Beispielsweise würden wir allgemein bevorzugen, dass die Bildunterschrift eines Bildes nicht in eine neue Spalte getrennt wird, weg von dem Bild, auf das es sich bezieht. Auch das Beenden einer Spalte mit einer Überschrift sieht seltsam aus. Die Fragmentierungseigenschaften im Mehrspaltenlayout geben uns Möglichkeiten, etwas Kontrolle darüber auszuüben.

Es gibt verschiedene Stellen, an denen wir unsere Umbrüche kontrollieren möchten:

- Umbrüche innerhalb von Boxen, beispielsweise innerhalb eines `figure`-Elements.
- Umbrüche vor und nach Boxen, was unser Beispiel mit den Überschriften oben einschließen würde.
- Umbrüche zwischen Zeilen.

## Umbrüche innerhalb von Boxen

Um Umbrüche innerhalb von Boxen zu kontrollieren, verwenden Sie die Eigenschaft {{cssxref("break-inside")}}. Diese Eigenschaft nimmt folgende Werte an:

- `auto`
- `avoid`
- `avoid-page`
- `avoid-column`
- `avoid-region`

Im untenstehenden Beispiel haben wir `break-inside` auf das `figure`-Element angewendet, um zu verhindern, dass die Bildunterschrift vom Bild getrennt wird.

{{EmbedGHLiveSample("css-examples/multicol/fragmentation/break-inside.html", '100%', 800)}}

## Umbrüche vor und nach Boxen

Die Eigenschaften {{cssxref("break-before")}} und {{cssxref("break-after")}} werden verwendet, um Umbrüche vor und nach Elementen zu steuern. Sie nehmen im Mehrspalten-Kontext folgende Werte an:

- auto
- avoid
- avoid-column
- column

Im nächsten Beispiel erzwingen wir einen Spaltenumbruch vor einem `h2`-Element.

{{EmbedGHLiveSample("css-examples/multicol/fragmentation/break-before.html", '100%', 800)}}

## Umbrüche zwischen Zeilen

Die Eigenschaften {{cssxref("orphans")}} und {{cssxref("widows")}}, die Teil des CSS-Fragmentierungsmoduls sind, sind ebenfalls nützlich und erwähnenswert. Die `orphans`-Eigenschaft steuert die Anzahl der Linien, die am Ende eines Fragments allein gelassen werden. Die `widows`-Eigenschaft steuert die Anzahl am Anfang eines Fragments.

Die `orphans`- und `widows`-Eigenschaften nehmen einen {{CSSXref("integer")}} als Wert, der die Anzahl der Zeilen darstellt, die am Ende und am Anfang eines Fragments zusammengehalten werden sollen. Beachten Sie, dass diese Eigenschaften nur innerhalb eines Blockcontainers, wie einem Absatz, funktionieren. Hat der Block weniger Zeilen, als der von Ihnen angegebene Wert, werden alle Zeilen zusammengehalten.

Im untenstehenden Beispiel verwenden wir die `orphans`-Eigenschaft, um die Anzahl der Zeilen am unteren Rand einer Spalte zu kontrollieren. Sie können diesen Wert ändern, um die Auswirkungen auf den Umbruch des Inhalts zu sehen.

{{EmbedGHLiveSample("css-examples/multicol/fragmentation/orphans.html", '100%', 800)}}

## Wenn die Dinge nicht wie erwartet funktionieren

Wenn Sie geringe Mengen an Inhalt haben und versuchen, Umbrüche bei mehreren Elementen zu steuern, muss Ihr Inhalt irgendwo brechen, sodass Sie möglicherweise nicht immer das gewünschte Ergebnis erzielen. Ihre Verwendung der Fragmentierung ist bis zu einem gewissen Grad immer ein Vorschlag an den Browser, die Umbrüche auf diese Weise zu kontrollieren, wenn es möglich ist. Wenn der Inhalt nicht dort bricht, wo Sie es beabsichtigt haben, kann das Ergebnis unordentlich sein, aber der Inhalt ist für Ihre Benutzer dennoch verfügbar.
