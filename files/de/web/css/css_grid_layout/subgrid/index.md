---
title: Subgrid
slug: Web/CSS/CSS_grid_layout/Subgrid
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

Level 2 der CSS Grid Layout-Spezifikation umfasst einen `subgrid`-Wert für {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}}. Dieser Leitfaden erklärt, was Subgrid macht und bietet einige Anwendungsfälle und Designmuster, die das Feature löst.

## Einführung in Subgrid

Wenn Sie `display: grid` auf einen Grid-Container anwenden, werden nur die direkten Kinder zu Grid-Elementen, die dann in das von Ihnen erstellte Raster eingebaut werden können. Die Kinder dieser Elemente werden im normalen Fluss angezeigt.

Sie können Raster "verschachteln", indem Sie ein Grid-Element zu einem Grid-Container machen. Diese Raster sind jedoch unabhängig vom übergeordneten Raster und voneinander, was bedeutet, dass sie ihre Spurgrößen nicht vom übergeordneten Raster übernehmen. Dies erschwert es, verschachtelte Grid-Elemente mit dem Haupt-Raster auszurichten.

Wenn Sie den Wert `subgrid` auf `grid-template-columns`, `grid-template-rows` oder beides setzen, verwendet das verschachtelte Raster anstatt einer neuen Spurauflistung die auf dem übergeordneten Raster definierten Spuren.

Zum Beispiel: Wenn Sie `grid-template-columns: subgrid` verwenden und das verschachtelte Raster drei Spuren des übergeordneten Rasters überspannt, wird das verschachtelte Raster drei Spuren der gleichen Größe wie das übergeordnete Raster haben. Lücken werden vererbt, können aber auch mit einem anderen {{cssxref("gap")}}-Wert überschrieben werden. Liniennamen können vom übergeordneten Raster in das Subgrid übergeben werden, und das Subgrid kann auch seine eigenen Liniennamen deklarieren.

## Subgrid für Spalten

Im folgenden Beispiel habe ich ein Grid-Layout mit neun `1fr`-Spuren und vier Zeilen, die mindestens 100px hoch sind.

Ich platziere `.item` von Spaltenlinien 2 bis 7 und von Zeilen 2 bis 4. Dann mache ich dieses Grid-Element zu einem Grid, gebe ihm Spuren, die ein Subgrid sind, und definiere Zeilen wie gewohnt. Da das Element fünf Spuren überspannt, bedeutet dies, dass das Subgrid fünf Spuren hat. Ich kann dann `.subitem` auf diesem Grid platzieren.

Die Zeilen in diesem Beispiel sind kein Subgrid und verhalten sich daher wie ein normal verschachteltes Grid. Der Rasterbereich auf dem übergeordneten Element wird groß genug, um dieses verschachtelte Raster aufzunehmen.

{{EmbedGHLiveSample("css-examples/grid/subgrid/columns.html", '100%', 1200)}}

Beachten Sie, dass die Liniennummerierung im Subgrid neu beginnt – Spaltenlinie 1 ist innerhalb des Subgrid die erste Linie des Subgrid. Das subgridded Element erbt nicht die Liniennummern des übergeordneten Grids. Dies bedeutet, dass Sie ein Komponent-Layout sicher erstellen können, das in verschiedenen Positionen auf dem Haupt-Grid platziert werden kann, in dem Wissen, dass die Liniennummern des Komponententen immer gleich bleiben werden.

## Subgrid für Zeilen

Das nächste Beispiel ist die gleiche Konfiguration; wir verwenden jedoch `subgrid` als Wert für `grid-template-rows` und definieren explizite Spuren. Somit verhalten sich die Spalten als reguläres verschachteltes Grid, aber die Zeilen sind an die zwei Spuren gebunden, die das Kind überspannt.

{{EmbedGHLiveSample("css-examples/grid/subgrid/rows.html", '100%', 1200)}}

## Ein Subgrid in beiden Dimensionen

Sie können sowohl Zeilen als auch Spalten als Subgrid definieren, wie im unten stehenden Beispiel. Dies bedeutet, dass Ihr Subgrid in beiden Dimensionen an die Anzahl der Spuren des übergeordneten Elements gebunden ist.

{{EmbedGHLiveSample("css-examples/grid/subgrid/both.html", '100%', 1200)}}

### Kein implizites Grid in einer subgridded Dimension

Wenn Sie Elemente automatisch platzieren müssen und nicht wissen, wie viele Elemente Sie haben werden, seien Sie vorsichtig beim Erstellen eines Subgrids, da es verhindert, dass zusätzliche Zeilen erstellt werden, um diese Elemente zu halten.

Schauen Sie sich das nächste Beispiel an – es verwendet dasselbe übergeordnete und untergeordnete Grid wie das obige Beispiel. Ich habe jedoch zwölf Elemente innerhalb des Subgrids, die versuchen, sich in zehn Grid-Zellen zu platzieren. Da das Subgrid in beiden Dimensionen ist, gibt es keinen Platz für die beiden zusätzlichen Elemente, daher gehen sie in die letzte Spur des Grids, gemäß der Spezifikation.

{{EmbedGHLiveSample("css-examples/grid/subgrid/no-implicit.html", '100%', 1200)}}

Wenn wir den `grid-template-rows`-Wert entfernen, ermöglichen wir die reguläre Erstellung von impliziten Spuren, und obwohl diese nicht mit den Spuren des übergeordneten Grids übereinstimmen, können so viele wie benötigt erstellt werden.

{{EmbedGHLiveSample("css-examples/grid/subgrid/implicit.html", '100%', 1200)}}

## Die Gap-Eigenschaften und Subgrid

Wenn Sie eine {{cssxref("gap")}}, {{cssxref("column-gap")}} oder {{cssxref("row-gap")}} beim übergeordneten Element spezifiziert haben, wird diese in das Subgrid übernommen, sodass es dieselbe Abstände zwischen den Spuren wie das übergeordnete Element haben wird. In einigen Situationen möchten Sie jedoch möglicherweise, dass die Subgrid-Spuren einen anderen Abstand oder keinen Abstand haben. Dies kann erreicht werden, indem die `gap-*`-Eigenschaften auf dem Grid-Container des Subgrid verwendet werden.

Das können Sie im folgenden Beispiel sehen. Das übergeordnete Grid hat eine Lücke von 20px für Zeilen und Spalten. Das Subgrid hat `row-gap` auf `0` gesetzt.

{{EmbedGHLiveSample("css-examples/grid/subgrid/gap.html", '100%', 1200)}}

Wenn Sie dies im Firefox Grid Inspector untersuchen, können Sie sehen, wie die Linie des Grids an der richtigen Stelle in der Mitte der Lücke ist, sodass, wenn wir die Lücke auf 0 setzen, es ähnlich wie das Anwenden eines negativen Margins auf ein Element wirkt, das die Lücke zurück zum Element gibt.

![Das kleinere Element wird in der Lücke angezeigt, da row-gap auf 0 im Subgrid gesetzt ist.](gap.png)

## Benannte Grid-Linien

Beim Verwenden von CSS Grid können Sie Linien auf Ihrem Grid benennen und dann Elemente basierend auf diesen Namen statt auf der Liniennummer positionieren. Die Liniennamen auf dem übergeordneten Grid werden an das Subgrid übergeben, und Sie können Elemente unter deren Verwendung platzieren. Im folgenden Beispiel habe ich Linien auf dem übergeordneten Element als `col-start` und `col-end` benannt und diese dann verwendet, um das Unterelement zu platzieren.

{{EmbedGHLiveSample("css-examples/grid/subgrid/line-names.html", '100%', 1200)}}

Sie können auch Liniennamen auf dem Subgrid angeben. Dies wird erreicht, indem eine Liste von Liniennamen in eckigen Klammern nach dem `subgrid`-Schlüsselwort hinzugefügt wird. Wenn Sie vier Linien in Ihrem Subgrid haben, um sie alle zu benennen, können Sie die Syntax `grid-template-columns: subgrid [line1] [line2] [line3] [line4]` verwenden.

Auf dem Subgrid angegebene Linien werden zu den auf dem übergeordneten Element angegebenen Linien hinzugefügt, sodass Sie entweder oder beide verwenden können. Um dies zu demonstrieren, habe ich in dem folgenden Beispiel ein Element mit den Linien des übergeordneten Elements positioniert und eines mit den Subgrid-Linien.

{{EmbedGHLiveSample("css-examples/grid/subgrid/adding-line-names.html", '100%', 1200)}}

## Verwendung von Subgrids

Abgesehen davon, dass Sie auf Elemente achten müssen, die nicht in Ihr Subgrid passen, verhält sich ein Subgrid sehr ähnlich wie jedes verschachtelte Grid; der einzige Unterschied besteht darin, dass die Spuraufteilung des Subgrids auf dem übergeordneten Grid festgelegt wird. Wie bei jedem verschachtelten Grid kann jedoch die Größe des Inhalts im Subgrid die Spuraufteilung ändern, sofern eine Spuraufteilungsmethode verwendet wird, die es dem Inhalt erlaubt, die Größe zu beeinflussen. In einem solchen Fall wachsen zum Beispiel automatisch dimensionierte Zeilenspurungen, um den Inhalt im Haupt-Grid und den Inhalt im Subgrid aufzunehmen.

Da der Subgrid-Wert sehr ähnlich wie ein normales verschachteltes Grid wirkt, ist es einfach, zwischen den beiden zu wechseln. Wenn Sie beispielsweise feststellen, dass Sie ein implizites Grid für Zeilen benötigen, müssten Sie den `subgrid`-Wert von `grid-template-rows` entfernen und möglicherweise einen Wert für `grid-auto-rows` angeben, um die implizite Spuraufteilung zu steuern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Videos: [Laying out forms using subgrid](https://www.youtube.com/watch?v=gmQlK3kRft4) und [Don't wait to use subgrid for better card layouts](https://www.youtube.com/watch?v=lLnFtK1LNu4)
- [Hello subgrid!](https://noti.st/rachelandrew/i6gUcF/hello-subgrid) Eine Präsentation von CSSConf.eu
