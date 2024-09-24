---
title: Box-Ausrichtung im Grid-Layout
slug: Web/CSS/CSS_box_alignment/Box_alignment_in_grid_layout
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

Die [Box-Ausrichtungs-Spezifikation](/de/docs/Web/CSS/CSS_box_alignment) beschreibt, wie Ausrichtung in verschiedenen Layout-Methoden funktioniert. Auf dieser Seite untersuchen wir, wie die Box-Ausrichtung im Kontext des [CSS-Grid-Layouts](/de/docs/Web/CSS/CSS_grid_layout) funktioniert.

Da diese Seite darauf abzielt, Aspekte zu erläutern, die spezifisch für CSS-Grid-Layout und Box-Ausrichtung sind, sollte sie in Verbindung mit der Hauptseite zur [Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) gelesen werden, die die allgemeinen Merkmale der Box-Ausrichtung über Layout-Methoden hinweg beschreibt.

## Einfaches Beispiel

In diesem Beispiel mit Grid-Layout gibt es nach dem Anordnen der fixen Breiten-Spuren in der Inline- (Haupt-) Achse zusätzlichen Platz im Grid-Container. Dieser Platz wird mittels `justify-content` verteilt. Auf der Block- (Quer-) Achse wird die Ausrichtung der Elemente innerhalb ihrer Grid-Bereiche mit `align-items` gesteuert. Das erste Element überschreibt den Wert von `align-items`, der auf die Gruppe gesetzt wurde, indem es `align-self` auf `center` setzt.

{{EmbedGHLiveSample("css-examples/box-alignment/overview/grid-align-items.html", '100%', 500)}}

## Grid-Achsen

Als zweidimensionale Layout-Methode arbeiten wir beim Grid-Layout immer mit zwei Achsen, auf denen wir unsere Elemente ausrichten können. Wir haben Zugriff auf alle Box-Ausrichtungseigenschaften, um dies zu erreichen.

Die Inline-Achse entspricht der Richtung, in der Wörter in einem Satz im verwendeten Schreibmodus verlaufen würden. Daher verläuft die Inline-Richtung in einer horizontalen Sprache wie Englisch oder Arabisch horizontal. Befinden Sie sich in einem vertikalen Schreibmodus, verläuft die Inline-Achse vertikal.

![Inline-Achsen sind horizontal.](inline_axis.png)

Um Dinge auf der Inline-Achse auszurichten, verwenden Sie die Eigenschaften, die mit `justify-` beginnen, {{cssxref("justify-content")}}, {{cssxref("justify-items")}} und {{cssxref("justify-self")}}.

Die Block-Achse kreuzt die Inline-Achse in der Richtung, in der Blöcke auf der Seite dargestellt werden — zum Beispiel werden Absätze im Englischen vertikal untereinander dargestellt. Dies ist daher die Block-Dimension.

Um Dinge auf der Block-Achse auszurichten, verwenden Sie die Eigenschaften, die mit `align-` beginnen, {{cssxref("align-content")}}, {{cssxref("align-items")}} und {{cssxref("align-self")}}.

![Die Block-Achsen sind vertikal.](block_axis.png)

## Eigene Ausrichtung

- {{cssxref("justify-self")}}
- {{cssxref("align-self")}}
- {{cssxref("place-self")}}
- {{cssxref("justify-items")}}
- {{cssxref("align-items")}}
- {{cssxref("place-items")}}

Diese Eigenschaften befassen sich mit der Ausrichtung der Elemente innerhalb des Grid-Bereichs, in dem sie platziert sind. Die Eigenschaften `align-items` und `justify-items` werden auf den Grid-Container angewendet und setzen die `align-self` und `justify-self` Eigenschaften als Gruppe. Dies bedeutet, dass Sie die Ausrichtung für alle Ihre Grid-Elemente auf einmal festlegen und dann alle Elemente, die eine andere Ausrichtung benötigen, überschreiben können, indem Sie die `align-self` oder `justify-self` Eigenschaft auf die Regeln für die einzelnen Grid-Elemente anwenden.

Der Anfangswert für `align-self` und `justify-self` ist `stretch`, sodass sich das Element über den gesamten Grid-Bereich erstreckt. Die Ausnahme von dieser Regel sind Elemente, die ein intrinsisches {{glossary("Seitenverhältnis")}} haben, beispielsweise ein Bild. In diesem Fall wird das Element in beiden Dimensionen mit `start` ausgerichtet, um eine Verzerrung des Bildes zu vermeiden.

## Inhaltsausrichtung

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("place-content")}}

Diese Eigenschaften behandeln die Ausrichtung der Grid-Spuren, wenn es zusätzlichen Raum zu verteilen gibt. Dieses Szenario tritt auf, wenn die von Ihnen definierten Spuren insgesamt weniger breit sind als die Gesamtbreite des Grid-Containers.

## Abstand und ältere grid-gap Eigenschaften

- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

Die Grid-Spezifikation enthielt ursprünglich die Definition für die Eigenschaften {{cssxref("row-gap", "grid-row-gap")}}, {{cssxref("column-gap", "grid-column-gap")}} und {{cssxref("gap", "grid-gap")}}. Diese wurden inzwischen in die Box-Ausrichtungs-Spezifikation verschoben und in {{cssxref("row-gap")}}, {{cssxref("column-gap")}}, und {{cssxref("gap")}} umbenannt. Dies ermöglicht ihre Verwendung für andere Layout-Methoden, bei denen ein Abstand zwischen den Elementen sinnvoll ist.

Die aktualisierten Eigenschaften wurden noch nicht in allen Browsern implementiert. Daher sollten Sie, um die Abstandseigenschaften im Grid-Layout zu verwenden, die `grid-row-gap`, `grid-column-gap` und `grid-gap` Versionen verwenden, um vollständige Kompatibilität sicherzustellen. Sie könnten die Eigenschaften doppelt verwenden, genau wie bei Vendor-Prefixes.

## Referenz

### CSS-Eigenschaften

- {{cssxref("justify-content")}}
- {{cssxref("align-content")}}
- {{cssxref("place-content")}}
- {{cssxref("justify-items")}}
- {{cssxref("align-items")}}
- {{cssxref("place-items")}}
- {{cssxref("justify-self")}}
- {{cssxref("align-self")}}
- {{cssxref("place-self")}}
- {{cssxref("row-gap")}}
- {{cssxref("column-gap")}}
- {{cssxref("gap")}}

### Glossar-Einträge

- [Cross-Achse](/de/docs/Glossary/Cross_Axis)
- [Hauptachse](/de/docs/Glossary/Main_Axis)

## Anleitungen

- [Ausrichtung im Grid-Layout](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout)
