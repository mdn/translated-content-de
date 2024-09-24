---
title: "HTMLImageElement: y-Eigenschaft"
short-title: "y"
slug: Web/API/HTMLImageElement/y
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte {{domxref("HTMLImageElement")}}-Eigenschaft **`y`** zeigt die y-Koordinate der oberen Randkante des {{HTMLElement("img")}}-Elements relativ zum Ursprung des Wurzelelements an.

Die {{domxref("HTMLImageElement.x", "x")}}- und `y`-Eigenschaften sind nur gültig für ein Bild, wenn dessen {{cssxref("display")}}-Eigenschaft den berechneten Wert `table-column` oder `table-column-group` hat. Mit anderen Worten: Es hat einen dieser Werte explizit darauf gesetzt, es hat ihn von einem übergeordneten Element geerbt oder befindet sich innerhalb einer Spalte, die entweder durch {{HTMLElement("col")}} oder {{HTMLElement("colgroup")}} beschrieben wird.

## Wert

Ein ganzzahliger Wert, der den Abstand in Pixeln von der oberen Kante des nächstgelegenen Wurzelelements zur oberen Kante des Randkastens des {{HTMLElement("img")}}-Elements angibt. Das nächstgelegene Wurzelelement ist das äußerste {{HTMLElement("html")}}-Element, das das Bild enthält. Wenn sich das Bild in einem {{HTMLElement("iframe")}} befindet, ist sein `y` relativ zu diesem Frame.

Im unten stehenden Diagramm ist die obere Randkante die obere Kante des blauen Innenabstandsbereichs. Der von `y` zurückgegebene Wert wäre also der Abstand von diesem Punkt zur oberen Kante des Inhaltsbereichs.

![Diagramm, das die Beziehungen zwischen den verschiedenen Boxen zeigt, die mit einem Element verbunden sind](boxmodel-3.png)

> [!NOTE]
> Die `y`-Eigenschaft ist nur gültig, wenn der berechnete Wert der {{cssxref("display")}}-Eigenschaft des Bildes entweder `table-column` oder `table-column-group` ist; mit anderen Worten, einer dieser Werte ist direkt auf das {{HTMLElement("img")}} gesetzt oder wird von einem übergeordneten Element geerbt oder befindet sich innerhalb einer Spalte, die entweder durch {{HTMLElement("col")}} oder {{HTMLElement("colgroup")}} beschrieben wird.

## Beispiel

Siehe [`HTMLImageElement.x`](/de/docs/Web/API/HTMLImageElement/x#example) für Beispielcode, der die Verwendung von `HTMLImageElement.y` (und `HTMLImageElement.x`) demonstriert.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
