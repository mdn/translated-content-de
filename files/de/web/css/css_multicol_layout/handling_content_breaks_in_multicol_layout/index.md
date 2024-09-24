---
title: Handhabung von Inhaltsunterbrechungen im mehrspaltigen Layout
slug: Web/CSS/CSS_multicol_layout/Handling_content_breaks_in_multicol_layout
l10n:
  sourceCommit: f7b308af624b3ec6acfeef1c06d7a8c9ac46410d
---

{{CSSRef}}

Der Inhalt zwischen den Spaltenkästen in einem mehrspaltigen Layout bricht auf die gleiche Weise, wie er zwischen Seiten in seitenbasierten Medien bricht. In beiden Kontexten können Sie steuern, wo und wie Inhalte brechen, indem Sie die Eigenschaften des [CSS-Fragmentierungsmoduls](/de/docs/Web/CSS/CSS_fragmentation) verwenden. In diesem Leitfaden erfahren Sie, wie Fragmentierung in einem _mehrspaltigen Container_ funktioniert, kurz auch _multicol Container_ genannt.

## Grundlagen der Fragmentierung

Das CSS-Fragmentierungsmodul liefert Details darüber, wie Inhalte zwischen den Fragmentierungskontainern oder _Fragmentainers_ brechen. Das [mehrspaltige Layout](/de/docs/Web/CSS/CSS_multicol_layout) Modul definiert die {{cssxref("break-after")}}, {{cssxref("break-before")}} und {{cssxref("break-inside")}} Eigenschaften, die innerhalb und zwischen Spalten eine gewisse Kontrolle bieten. In einem mehrspaltigen Layout ist ein Spaltenkasten ein Fragmentcontainer.

Ein Spaltenkasten kann anderes Markup enthalten und es gibt viele Stellen, an denen ein Bruch nicht ideal wäre. Beispielsweise möchten wir im Allgemeinen, dass die Bildunterschrift nicht in eine neue Spalte verschoben wird, weg von dem Bild, auf das sie sich bezieht. Auch das Beenden einer Spalte mit einer Überschrift sieht merkwürdig aus. Die Fragmentierungseigenschaften des mehrspaltigen Layouts geben uns Möglichkeiten, etwas Kontrolle darüber auszuüben.

Es gibt verschiedene Stellen, an denen wir unsere Brüche kontrollieren möchten:

- Brüche innerhalb von Kästen, zum Beispiel innerhalb eines Figurkastens.
- Brüche vor und nach Kästen, was unser oben genanntes Überschriftenbeispiel einschließen würde.
- Brüche zwischen Zeilen.

## Brüche innerhalb von Kästen

Um Brüche innerhalb von Kästen zu kontrollieren, verwenden Sie die Eigenschaft {{cssxref("break-inside")}}. Diese Eigenschaft akzeptiert die Werte:

- `auto`
- `avoid`
- `avoid-page`
- `avoid-column`
- `avoid-region`

Im untenstehenden Beispiel haben wir break-inside auf das Figure-Element angewendet, um zu verhindern, dass die Bildunterschrift vom Bild getrennt wird.

{{EmbedGHLiveSample("css-examples/multicol/fragmentation/break-inside.html", '100%', 800)}}

## Brüche vor und nach Kästen

Die Eigenschaften {{cssxref("break-before")}} und {{cssxref("break-after")}} werden verwendet, um Brüche vor und nach Elementen zu steuern. Sie nehmen im Kontext eines mehrspaltigen Layouts folgende Werte an:

- auto
- avoid
- avoid-column
- column

Im nächsten Beispiel erzwingen wir einen Spaltenbruch vor einem `h2`-Element.

{{EmbedGHLiveSample("css-examples/multicol/fragmentation/break-before.html", '100%', 800)}}

## Brüche zwischen Zeilen

Die Eigenschaften {{cssxref("orphans")}} und {{cssxref("widows")}}, die Teil des CSS-Fragmentierungsmoduls sind, sind ebenfalls nützlich und erwähnenswert. Die Eigenschaft `orphans` steuert die Anzahl der Zeilen, die am Ende eines Fragments allein gelassen werden. Die Eigenschaft `widows` steuert die Anzahl, die am Anfang eines Fragments allein gelassen werden.

Die Eigenschaften `orphans` und `widows` akzeptieren einen {{CSSXref("integer")}} als Wert, der die Anzahl der Zeilen darstellt, die am Ende bzw. Anfang eines Fragments zusammengehalten werden sollen. Beachten Sie, dass diese Eigenschaften nur innerhalb eines Blockcontainers, wie etwa eines Absatzes, funktionieren. Wenn der Block weniger Zeilen enthält als die von Ihnen angegebene Zahl, werden alle Zeilen zusammengehalten.

Im untenstehenden Beispiel verwenden wir die Eigenschaft `orphans`, um die Anzahl der Zeilen zu steuern, die am unteren Rand einer Spalte verbleiben. Sie können diesen Wert ändern, um die Auswirkung auf das Brechen des Inhalts zu sehen.

{{EmbedGHLiveSample("css-examples/multicol/fragmentation/orphans.html", '100%', 800)}}

## Wenn die Dinge nicht wie erwartet funktionieren

Wenn Sie nur geringe Inhaltsmengen haben und versuchen, Brüche bei mehreren Elementen zu kontrollieren, muss Ihr Inhalt irgendwo brechen, sodass Sie möglicherweise nicht immer das gewünschte Ergebnis erzielen. In gewissem Maße sind Ihre Fragmentierungsanweisungen nur Vorschläge an den Browser, Brüche auf diese Weise zu kontrollieren, wenn es möglich ist. Wenn der Inhalt nicht wie beabsichtigt bricht, mag das Ergebnis unordentlich sein, aber der Inhalt steht Ihren Benutzern immer noch zur Verfügung.
