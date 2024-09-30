---
title: Subgrid
slug: Web/CSS/CSS_grid_layout/Subgrid
l10n:
  sourceCommit: fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{CSSRef}}

Level 2 der CSS-Grid-Layout-Spezifikation enthält einen `subgrid`-Wert für {{cssxref("grid-template-columns")}} und {{cssxref("grid-template-rows")}}. Dieser Leitfaden erklärt, was `subgrid` tut, und gibt einige Anwendungsfälle und Designmuster, die das Feature löst.

## Einführung in das Subgrid

Wenn Sie `display: grid` zu einem Grid-Container hinzufügen, werden nur die direkten Kinder zu Gitterelementen und können dann auf dem erstellten Grid platziert werden. Die Kinder dieser Elemente werden im normalen Fluss angezeigt.

Sie können Grids "verschachteln", indem Sie ein Gitterelement zu einem Grid-Container machen. Diese Grids sind jedoch unabhängig vom übergeordneten Grid und voneinander, was bedeutet, dass sie ihre Spurgrößen nicht vom übergeordneten Grid übernehmen. Dies erschwert es, verschachtelte Gitterelemente mit dem Hauptgrid auszurichten.

Wenn Sie den Wert `subgrid` auf `grid-template-columns`, `grid-template-rows` oder beides setzen, verwendet das verschachtelte Grid anstelle der Erstellung einer neuen Spuraufstellung die im übergeordneten Element definierten Spuren.

Wenn Sie beispielsweise `grid-template-columns: subgrid` verwenden und das verschachtelte Grid drei Spuren des übergeordneten Elements überspannt, hat das verschachtelte Grid drei Spuren von derselben Größe wie das übergeordnete Grid. Lücken werden geerbt, können aber auch mit einem anderen {{cssxref("gap")}}-Wert überschrieben werden. Liniennamen können vom übergeordneten Element in das Subgrid übernommen werden, und das Subgrid kann auch seine eigenen Liniennamen deklarieren.

## Subgrid für Spalten

Im folgenden Beispiel habe ich ein Grid-Layout mit neun `1fr`-Spalten und vier Zeilen, die mindestens 100px hoch sind.

Ich platziere `.item` von Spaltenlinie 2 bis 7 und Zeilen 2 bis 4. Ich mache dieses Gitternetz-Element dann zu einem Gitter, gebe ihm Spuren, die ein Subgrid sind, und definiere die Zeilen normal. Da das Element fünf Spuren umfasst, bedeutet dies, dass das Subgrid fünf Spuren hat. Ich kann dann `.subitem` auf diesem Gitter platzieren.

Die Zeilen in diesem Beispiel sind kein Subgrid und verhalten sich daher wie ein verschachteltes Grid normalerweise. Das Gittergebiet im übergeordneten Element erweitert sich, um groß genug für dieses verschachtelte Grid zu sein.

{{EmbedGHLiveSample("css-examples/grid/subgrid/columns.html", '100%', 1200)}}

Beachten Sie, dass die Liniennummerierung innerhalb des Subgrids neu startet — Spaltenlinie 1 ist im Subgrid die erste Linie des Subgrids. Das subgridierte Element erbt nicht die Linienzahlen des übergeordneten Grids. Dies bedeutet, dass Sie ein Element sicher so layouten können, dass es an unterschiedlichen Positionen im Hauptgrid platziert werden kann, und wissen, dass die Linienzahlen auf dem Element immer gleich sein werden.

## Subgrid für Zeilen

Das nächste Beispiel ist die gleiche Konfiguration; jedoch verwenden wir `subgrid` als Wert für `grid-template-rows` und definieren explizite Spuren. Somit verhalten sich die Spalten wie ein reguläres verschachteltes Grid, aber die Zeilen sind an die zwei Spuren gebunden, die das Kind überspannt.

{{EmbedGHLiveSample("css-examples/grid/subgrid/rows.html", '100%', 1200)}}

## Ein Subgrid in beiden Dimensionen

Sie können sowohl Zeilen als auch Spalten als Subgrid definieren, wie im folgenden Beispiel. Dies bedeutet, dass Ihr Subgrid in beiden Dimensionen an die Anzahl der Spuren des übergeordneten Elements gebunden ist.

{{EmbedGHLiveSample("css-examples/grid/subgrid/both.html", '100%', 1200)}}

### Kein implizites Grid in einer subgridierten Dimension

Wenn Sie Elemente automatisch platzieren müssen und nicht wissen, wie viele Elemente Sie haben werden, seien Sie vorsichtig bei der Erstellung eines Subgrids, da es die Erstellung zusätzlicher Zeilen verhindert, um diese Elemente zu halten.

Sehen Sie sich das nächste Beispiel an — es verwendet dasselbe Eltern- und Kindergitter wie im obigen Beispiel. Jedoch habe ich zwölf Elemente im Subgrid, die versuchen, sich in zehn Gitterzellen automatisch zu platzieren. Da das Subgrid in beiden Dimensionen ist, gibt es keinen Platz für die zusätzlichen zwei Elemente, sodass sie in die letzte Spur des Gitters gehen, wie in der Spezifikation definiert.

{{EmbedGHLiveSample("css-examples/grid/subgrid/no-implicit.html", '100%', 1200)}}

Wenn wir den `grid-template-rows`-Wert entfernen, ermöglichen wir die reguläre Erstellung impliziter Spuren, und obwohl diese nicht mit den Spuren des übergeordneten Elements übereinstimmen, werden so viele erstellt, wie benötigt.

{{EmbedGHLiveSample("css-examples/grid/subgrid/implicit.html", '100%', 1200)}}

## Die `gap`-Eigenschaften und das Subgrid

Wenn Sie eine {{cssxref("gap")}}, {{cssxref("column-gap")}} oder {{cssxref("row-gap")}} für das übergeordnete Element angegeben haben, wird diese in das Subgrid übergeben, sodass es denselben Abstand zwischen den Spuren hat wie das übergeordnete Element. In einigen Situationen möchten Sie jedoch, dass die Subgrid-Spuren einen anderen Abstand oder keinen Abstand haben. Dies kann erreicht werden, indem Sie die `gap-*`-Eigenschaften auf dem Grid-Container des Subgrids verwenden.

Sie können dies im folgenden Beispiel sehen. Das übergeordnete Grid hat einen Abstand von 20px für Zeilen und Spalten. Das Subgrid hat `row-gap` auf `0` gesetzt.

{{EmbedGHLiveSample("css-examples/grid/subgrid/gap.html", '100%', 1200)}}

Wenn Sie dies im Firefox Grid Inspector untersuchen, können Sie sehen, wie die Linie des Gitters korrekt in der Mitte der Lücke platziert ist, sodass, wenn wir die Lücke auf 0 setzen, es ähnlich wie bei der Anwendung eines negativen Außenabstands auf ein Element wirkt und wir den Raum aus der Lücke an das Element zurückgeben.

![Das kleinere Element zeigt in der Lücke an, da `row-gap` auf 0 auf dem Subgrid gesetzt ist.](gap.png)

## Benannte Gitterlinien

Beim Verwenden von CSS-Grid können Sie Linien auf Ihrem Grid benennen und dann Elemente basierend auf diesen Namen anstatt der Liniennummer positionieren. Die Liniennamen auf dem übergeordneten Grid werden in das Subgrid übergeben, und Sie können Elemente mit ihnen platzieren. Im folgenden Beispiel habe ich Linien auf dem übergeordneten Element `col-start` und `col-end` benannt und dann diese verwendet, um das Unterelement zu platzieren.

{{EmbedGHLiveSample("css-examples/grid/subgrid/line-names.html", '100%', 1200)}}

Sie können auch Liniennamen auf dem Subgrid angeben. Dies wird erreicht, indem Sie eine Liste von Liniennamen in eckigen Klammern nach dem `subgrid`-Schlüsselwort hinzufügen. Wenn Sie vier Linien in Ihrem Subgrid haben, um sie alle zu benennen, könnten Sie die Syntax `grid-template-columns: subgrid [line1] [line2] [line3] [line4]` verwenden.

Auf dem Subgrid angegebene Linien werden zu allen auf dem übergeordneten Element angegebenen Linien hinzugefügt, sodass Sie entweder oder beide verwenden können. Um dies zu demonstrieren, habe ich in dem Beispiel unten ein Element mit den Linien des übergeordneten Elements und eines mit den Linien des Subgrids positioniert.

{{EmbedGHLiveSample("css-examples/grid/subgrid/adding-line-names.html", '100%', 1200)}}

## Verwendung von Subgrids

Abgesehen davon, dass Sie auf Elemente achten müssen, die nicht in Ihr Subgrid passen, verhält sich ein Subgrid sehr ähnlich wie jedes verschachtelte Grid; der einzige Unterschied besteht darin, dass die Spurgröße des Subgrids auf dem übergeordneten Grid festgelegt ist. Wie bei jedem verschachtelten Grid kann jedoch die Größe des Inhalts im Subgrid die Spurgröße ändern, vorausgesetzt, es wird eine Spurgrößenmethode verwendet, die es dem Inhalt ermöglicht, die Größe zu beeinflussen. In einem solchen Fall werden auto-größenbasierte Zeilen Spuren beispielsweise vergrößert, um den Inhalt im Hauptgrid und den Inhalt im Subgrid aufzunehmen.

Da der `subgrid`-Wert sehr ähnlich wie ein reguläres verschachteltes Grid funktioniert, ist es einfach, zwischen den beiden zu wechseln. Wenn Sie beispielsweise feststellen, dass Sie ein implizites Grid für Zeilen benötigen, müssen Sie den `subgrid`-Wert von `grid-template-rows` entfernen und möglicherweise einen Wert für `grid-auto-rows` angeben, um die implizite Spurgröße zu steuern.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Videos: [Laying out forms using subgrid](https://www.youtube.com/watch?v=gmQlK3kRft4) und [Don't wait to use subgrid for better card layouts](https://www.youtube.com/watch?v=lLnFtK1LNu4)
- [Hello subgrid!](https://noti.st/rachelandrew/i6gUcF/hello-subgrid) Eine Präsentation von CSSConf.eu
