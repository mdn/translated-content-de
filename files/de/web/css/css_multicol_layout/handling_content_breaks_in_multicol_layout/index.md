---
title: Umgang mit Inhaltsumbrüchen im Multi-Columns-Layout
slug: Web/CSS/CSS_multicol_layout/Handling_content_breaks_in_multicol_layout
l10n:
  sourceCommit: f7b308af624b3ec6acfeef1c06d7a8c9ac46410d
---

{{CSSRef}}

Inhalt zwischen Spaltenboxen in einem Multi-Columns-Layout wird auf die gleiche Weise umbrochen wie zwischen Seiten in paginierten Medien. In beiden Kontexten können Sie steuern, wo und wie Inhalte umbrochen werden, indem Sie Eigenschaften des [CSS-Fragmentierungsmoduls](/de/docs/Web/CSS/CSS_fragmentation) verwenden. In diesem Leitfaden sehen wir, wie Fragmentierung in einem _Multi-Column-Container_ (kurz _Multicol-Container_) funktioniert.

## Grundlagen der Fragmentierung

Das CSS-Fragmentierungsmodul bietet Details dazu, wie Inhalt zwischen Fragmentierungscontainern oder _Fragmentainern_ umbrochen wird. Das [Multi-Columns-Layout-](/de/docs/Web/CSS/CSS_multicol_layout) Modul definiert andererseits die Eigenschaften {{cssxref("break-after")}}, {{cssxref("break-before")}} und {{cssxref("break-inside")}}, die etwas Kontrolle innerhalb und zwischen Spalten bieten. In einem Multicol-Layout ist eine Spaltenbox ein Fragmentierungscontainer.

Eine Spaltenbox kann weiteres Markup enthalten und es gibt viele Stellen, an denen ein Umbruch nicht ideal wäre. Beispielsweise würden wir es generell vorziehen, dass die Bildunterschrift eines Bildes nicht in eine neue Spalte getrennt wird, weg von dem Bild, auf das sie sich bezieht. Auch das Abschließen einer Spalte mit einer Überschrift wirkt seltsam. Die Multicol-Fragmentierungseigenschaften geben uns Möglichkeiten, dies ein wenig zu kontrollieren.

Es gibt verschiedene Stellen, an denen wir unsere Umbrüche kontrollieren möchten:

- Umbrüche innerhalb von Boxen, zum Beispiel innerhalb eines `<figure>`-Elements.
- Umbrüche vor und nach Boxen, was unser oben genanntes Überschriften-Beispiel einschließen würde.
- Umbrüche zwischen Zeilen.

## Umbrüche innerhalb von Boxen

Um Umbrüche innerhalb von Boxen zu kontrollieren, verwenden Sie die Eigenschaft {{cssxref("break-inside")}}. Diese Eigenschaft nimmt folgende Werte an:

- `auto`
- `avoid`
- `avoid-page`
- `avoid-column`
- `avoid-region`

Im untenstehenden Beispiel haben wir `break-inside` auf das `<figure>`-Element angewendet, um zu verhindern, dass die Bildunterschrift vom Bild getrennt wird.

{{EmbedGHLiveSample("css-examples/multicol/fragmentation/break-inside.html", '100%', 800)}}

## Umbrüche vor und nach Boxen

Die Eigenschaften {{cssxref("break-before")}} und {{cssxref("break-after")}} werden verwendet, um Umbrüche vor und nach Elementen zu steuern. Sie nehmen in einem Multicol-Kontext die folgenden Werte an:

- auto
- avoid
- avoid-column
- column

Im nächsten Beispiel erzwingen wir einen Spaltenumbruch vor einem `h2`-Element.

{{EmbedGHLiveSample("css-examples/multicol/fragmentation/break-before.html", '100%', 800)}}

## Umbrüche zwischen Zeilen

Die Eigenschaften {{cssxref("orphans")}} und {{cssxref("widows")}}, Teil des CSS-Fragmentierungsmoduls, sind ebenfalls nützlich und erwähnenswert. Die Eigenschaft `orphans` steuert die Anzahl der Zeilen, die am Ende eines Fragments allein gelassen werden. Die Eigenschaft `widows` steuert die Anzahl, die am Anfang eines Fragments allein gelassen wird.

Die Eigenschaften `orphans` und `widows` nehmen einen {{CSSXref("integer")}} als Wert an, der die Anzahl der Zeilen repräsentiert, die am Ende und Anfang eines Fragments zusammengehalten werden sollen. Beachten Sie, dass diese Eigenschaften nur innerhalb eines Blockcontainers, wie einem Absatz, funktionieren. Wenn der Block weniger Zeilen enthält als die Anzahl, die Sie als Wert angeben, werden alle Zeilen zusammengehalten.

Im unten stehenden Beispiel verwenden wir die Eigenschaft `orphans`, um die Anzahl der Zeilen zu steuern, die am unteren Rand einer Spalte übrig bleiben. Sie können diesen Wert ändern, um die Auswirkung auf den Umbruch des Inhalts zu sehen.

{{EmbedGHLiveSample("css-examples/multicol/fragmentation/orphans.html", '100%', 800)}}

## Wenn die Dinge nicht wie erwartet funktionieren

Wenn Sie kleine Mengen von Inhalten haben und versuchen, Umbrüche bei mehreren Elementen zu steuern, muss Ihr Inhalt irgendwo umbrochen werden, sodass Sie möglicherweise nicht immer das gewünschte Ergebnis erzielen. In gewissem Maße ist Ihre Verwendung von Fragmentierung immer ein Vorschlag an den Browser, Umbrüche auf diese Weise zu kontrollieren, wenn es möglich ist. Wenn der Inhalt nicht dort umbrochen wird, wo Sie es beabsichtigt haben, mag das Ergebnis unordentlich sein, aber der Inhalt ist immer noch für Ihre Nutzer verfügbar.
