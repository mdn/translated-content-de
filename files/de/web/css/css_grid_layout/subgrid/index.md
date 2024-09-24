---
title: Subgrid
slug: Web/CSS/CSS_grid_layout/Subgrid
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

Stufe 2 der CSS-Grid-Layout-Spezifikation enthält einen `subgrid`-Wert für {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}}. Dieser Leitfaden erläutert, was Subgrid macht und gibt einige Anwendungsfälle und Designmuster an, die das Feature löst.

## Einführung in Subgrid

Wenn Sie `display: grid` zu einem Grid-Container hinzufügen, werden nur die direkten Kinder zu Grid-Elementen und können dann auf dem von Ihnen erstellten Grid platziert werden. Die Kinder dieser Elemente werden im normalen Fluss angezeigt.

Sie können Grids "verschachteln", indem Sie ein Grid-Element zu einem Grid-Container machen. Diese Grids sind jedoch unabhängig vom übergeordneten Grid und voneinander, was bedeutet, dass sie ihre Spurenbreiten nicht vom übergeordneten Grid übernehmen. Dies macht es schwierig, verschachtelte Grid-Elemente mit dem Hauptgrid auszurichten.

Wenn Sie den Wert `subgrid` auf `grid-template-columns`, `grid-template-rows` oder beides setzen, verwendet das verschachtelte Grid anstelle einer neuen Spuraufzählung die auf dem übergeordneten Grid definierten Spuren.

Zum Beispiel, wenn Sie `grid-template-columns: subgrid` verwenden und das verschachtelte Grid drei Spuren des übergeordneten Grids überspannt, hat das verschachtelte Grid drei Spuren gleicher Größe wie das übergeordnete Grid. Abstände werden vererbt, können aber auch mit einem anderen Wert für {{cssxref("gap")}} überschrieben werden. Linienneamen können vom übergeordneten Grid an das Subgrid weitergegeben werden, und das Subgrid kann auch seine eigenen Linienneamen deklarieren.

## Subgrid für Spalten

Im folgenden Beispiel habe ich ein Grid-Layout mit neun `1fr`-Spuren und vier Zeilen, die mindestens 100px hoch sind.

Ich platziere `.item` von Spaltenlinie 2 bis 7 und Zeilen 2 bis 4. Ich mache dann dieses Grid-Element zu einem Grid und gebe ihm Spuren, die ein Subgrid sind, und definiere die Zeilen wie gewohnt. Da das Element fünf Spuren überspannt, bedeutet dies, dass das Subgrid fünf Spuren hat. Ich kann dann `.subitem` auf diesem Grid platzieren.

Die Zeilen in diesem Beispiel sind kein Subgrid, und verhalten sich daher wie ein normales verschachteltes Grid. Der Grid-Bereich auf dem übergeordneten Grid erweitert sich, um groß genug für dieses verschachtelte Grid zu sein.

{{EmbedGHLiveSample("css-examples/grid/subgrid/columns.html", '100%', 1200)}}

Beachten Sie, dass die Linienzählung innerhalb des Subgrids neu startet — Spaltenlinie 1 innerhalb des Subgrids ist die erste Linie des Subgrids. Das subgriddete Element erbt nicht die Linienzahlen des übergeordneten Grids. Dies bedeutet, dass Sie sicher ein Komponentenlayout anlegen können, das an verschiedenen Positionen auf dem Hauptgrid platziert werden kann, da die Linienzahlen auf der Komponente immer gleich bleiben werden.

## Subgrid für Zeilen

Das nächste Beispiel ist dasselbe Setup; jedoch verwenden wir `subgrid` als Wert von `grid-template-rows` und definieren explizit Spuren. So verhalten sich die Spuren wie ein reguläres verschachteltes Grid, aber die Zeilen sind mit den zwei Spuren verbunden, die das Kind überspannt.

{{EmbedGHLiveSample("css-examples/grid/subgrid/rows.html", '100%', 1200)}}

## Ein Subgrid in beiden Dimensionen

Sie können sowohl Zeilen als auch Spalten als Subgrid definieren, wie im folgenden Beispiel. Dies bedeutet, dass Ihr Subgrid in beiden Dimensionen an die Anzahl der Spuren des übergeordneten Grids gebunden ist.

{{EmbedGHLiveSample("css-examples/grid/subgrid/both.html", '100%', 1200)}}

### Kein implizites Grid in einer subgrid-dimensionierten Dimension

Wenn Sie Elemente automatisch platzieren müssen und nicht wissen, wie viele Elemente Sie haben werden, achten Sie darauf, wenn Sie ein Subgrid erstellen, da dies verhindert, dass zusätzliche Zeilen erstellt werden, um diese Elemente aufzunehmen.

Sehen Sie sich das nächste Beispiel an — es verwendet dasselbe übergeordnete und untergeordnete Grid wie im obigen Beispiel. Ich habe jedoch zwölf Elemente im Subgrid, die versuchen, sich in zehn Grid-Zellen automatisch zu platzieren. Da das Subgrid in beiden Dimensionen vorhanden ist, gibt es keinen Platz für die zusätzlichen zwei Elemente, sodass sie in die letzte Spur des Grids gehen, wie in der Spezifikation definiert.

{{EmbedGHLiveSample("css-examples/grid/subgrid/no-implicit.html", '100%', 1200)}}

Wenn wir den `grid-template-rows`-Wert entfernen, ermöglichen wir die reguläre Erstellung von impliziten Spuren, und obwohl diese nicht mit den Spuren des übergeordneten Grids übereinstimmen, werden so viele wie nötig erstellt.

{{EmbedGHLiveSample("css-examples/grid/subgrid/implicit.html", '100%', 1200)}}

## Die Abstandseigenschaften und Subgrid

Wenn Sie ein {{cssxref("gap")}}, {{cssxref("column-gap")}}, oder {{cssxref("row-gap")}} auf dem übergeordneten Grid angegeben haben, wird dies in das Subgrid übernommen, sodass es denselben Abstand zwischen den Spuren wie das übergeordnete Grid hat. In einigen Situationen möchten Sie jedoch, dass die Spuren des Subgrids einen anderen Abstand oder keinen Abstand haben. Dies kann erreicht werden, indem Sie die `gap-*`-Eigenschaften auf dem Grid-Container des Subgrids verwenden.

Sie können dies im Beispiel unten sehen. Das übergeordnete Grid hat einen Abstand von 20px für Zeilen und Spalten. Das Subgrid hat `row-gap` auf `0` gesetzt.

{{EmbedGHLiveSample("css-examples/grid/subgrid/gap.html", '100%', 1200)}}

Wenn Sie dies im Firefox Grid-Inspektor überprüfen, können Sie sehen, wie die Linie des Grids an der richtigen Stelle im Zentrum des Abstands ist, sodass, wenn wir den Abstand auf 0 setzen, es ähnlich wie beim Anwenden eines negativen Randes auf ein Element wirkt und den Abstand vom Item wieder freigibt.

![Das kleinere Element erscheint im Abstand, da row-gap im Subgrid auf 0 gesetzt ist.](gap.png)

## Benannte Grid-Linien

Beim Verwenden des CSS-Grids können Sie Linien auf Ihrem Grid benennen und dann Elemente basierend auf diesen Namen anstelle der Linienzahl positionieren. Die Linienneamen auf dem übergeordneten Grid werden in das Subgrid übernommen, und Sie können Elemente mit ihnen platzieren. Im Beispiel unten habe ich Linien auf dem übergeordneten `col-start` und `col-end` benannt und dann verwendet, um das Subitem zu platzieren.

{{EmbedGHLiveSample("css-examples/grid/subgrid/line-names.html", '100%', 1200)}}

Sie können auch Linienneamen auf dem Subgrid angeben. Dies wird erreicht, indem Sie eine Liste von Linienneamen, die in eckigen Klammern eingeschlossen sind, nach dem `subgrid`-Schlüsselwort hinzufügen. Wenn Sie vier Linien in Ihrem Subgrid haben und sie alle benennen möchten, könnten Sie die Syntax `grid-template-columns: subgrid [line1] [line2] [line3] [line4]` verwenden.

Linien, die auf dem Subgrid angegeben werden, werden zu den Linien hinzugefügt, die auf dem übergeordneten Grid angegeben sind, sodass Sie entweder oder beide verwenden können. Um dies zu demonstrieren, habe ich im Beispiel unten ein Element mit den Linien des übergeordneten Grids positioniert und eines mit den Linien des Subgrids.

{{EmbedGHLiveSample("css-examples/grid/subgrid/adding-line-names.html", '100%', 1200)}}

## Nutzung von Subgrids

Abgesehen davon, dass man auf Elemente achten muss, die nicht in Ihr Subgrid passen, verhält sich ein Subgrid sehr ähnlich wie ein beliebiges verschachteltes Grid; der einzige Unterschied ist, dass die Spurgrößen des Subgrids auf dem übergeordneten Grid festgelegt sind. Wie bei jedem verschachtelten Grid kann jedoch die Größe der Inhalte im Subgrid die Spurgrößen ändern, vorausgesetzt, es wird eine Spurgrößenmethode verwendet, die es den Inhalten ermöglicht, die Größe zu beeinflussen. In einem solchen Fall wachsen auto-angeordnete Zeilenspuren zum Beispiel, um Inhalte im Hauptgrid und Inhalte im Subgrid unterzubringen.

Da der Subgrid-Wert ähnlich wie ein reguläres verschachteltes Grid funktioniert, ist es einfach, zwischen den beiden zu wechseln. Wenn Sie beispielsweise feststellen, dass Sie ein implizites Grid für Zeilen benötigen, müssten Sie den `subgrid`-Wert von `grid-template-rows` entfernen und möglicherweise einen Wert für `grid-auto-rows` angeben, um die implizite Spurgröße zu steuern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Videos: [Laying out forms using subgrid](https://www.youtube.com/watch?v=gmQlK3kRft4) und [Don't wait to use subgrid for better card layouts](https://www.youtube.com/watch?v=lLnFtK1LNu4)
- [Hello subgrid!](https://noti.st/rachelandrew/i6gUcF/hello-subgrid) Eine Präsentation von CSSConf.eu
