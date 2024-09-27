---
title: "HTMLImageElement: y-Eigenschaft"
short-title: "y"
slug: Web/API/HTMLImageElement/y
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Eigenschaft **`y`** gibt die y-Koordinate des oberen Randes des {{HTMLElement("img")}}-Elements relativ zum Ursprung des Wurzelelements an.

Die [`x`](/de/docs/Web/API/HTMLImageElement/x) und `y` Eigenschaften sind nur für ein Bild gültig, wenn dessen {{cssxref("display")}}-Eigenschaft den berechneten Wert `table-column` oder `table-column-group` hat. Mit anderen Worten: Sie haben entweder einen dieser Werte explizit gesetzt, sie von einem umgebenden Element geerbt oder befinden sich innerhalb einer Spalte, die entweder durch {{HTMLElement("col")}} oder {{HTMLElement("colgroup")}} beschrieben wird.

## Wert

Ein Ganzzahlwert, der den Abstand in Pixeln von der oberen Kante des nächstgelegenen Wurzelelements zur oberen Kante des Rahmenrahmens des {{HTMLElement("img")}}-Elements angibt. Das nächstgelegene Wurzelelement ist das äußerste {{HTMLElement("html")}}-Element, das das Bild enthält. Wenn sich das Bild in einem {{HTMLElement("iframe")}} befindet, ist sein `y` relativ zu diesem Rahmen.

Im untenstehenden Diagramm ist der obere Rand die obere Kante des blauen Polsterbereichs. Der von `y` zurückgegebene Wert wäre also der Abstand von diesem Punkt zur oberen Kante des Inhaltsbereichs.

![Diagramm, das die Beziehungen zwischen den verschiedenen mit einem Element assoziierten Boxen zeigt](boxmodel-3.png)

> [!NOTE]
> Die `y`-Eigenschaft ist nur gültig, wenn der berechnete
> Wert der {{cssxref("display")}}-Eigenschaft des Bildes entweder
> `table-column` oder `table-column-group` ist; mit anderen Worten,
> einer dieser Werte ist direkt auf dem {{HTMLElement("img")}}-Element gesetzt oder wird von einem umgebenden Element geerbt oder befindet sich in einer Spalte, die entweder durch {{HTMLElement("col")}} oder {{HTMLElement("colgroup")}} beschrieben wird.

## Beispiel

Sehen Sie sich [`HTMLImageElement.x`](/de/docs/Web/API/HTMLImageElement/x#example) an, um Beispielcode zu sehen, der die Verwendung von `HTMLImageElement.y` (und `HTMLImageElement.x`) demonstriert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
