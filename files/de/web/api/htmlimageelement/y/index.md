---
title: "HTMLImageElement: y Eigenschaft"
short-title: y
slug: Web/API/HTMLImageElement/y
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`y`**-Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) Schnittstelle gibt die y-Koordinate der oberen Randkante des {{HTMLElement("img")}} Elements relativ zum Ursprung des Wurzelelements an.

Die [`x`](/de/docs/Web/API/HTMLImageElement/x)- und `y`-Eigenschaften sind nur für ein Bild gültig, wenn die berechnete Eigenschaft {{cssxref("display")}} den Wert `table-column` oder `table-column-group` hat. Mit anderen Worten: Es hat entweder einen dieser Werte explizit festgelegt, es hat ihn von einem umgebenden Element geerbt oder es befindet sich innerhalb einer Spalte, die durch entweder {{HTMLElement("col")}} oder {{HTMLElement("colgroup")}} beschrieben wird.

## Wert

Ein ganzzahliger Wert, der den Abstand in Pixeln von der oberen Kante des nächstgelegenen Wurzelelements zur oberen Kante der Randbox des {{HTMLElement("img")}} Elements angibt. Das nächstgelegene Wurzelelement ist das äußerste {{HTMLElement("html")}} Element, das das Bild enthält. Wenn sich das Bild in einem {{HTMLElement("iframe")}} befindet, ist sein `y` relativ zu diesem Frame.

In dem untenstehenden Diagramm ist die obere Randkante die obere Kante des blauen Polsterbereichs. Der von `y` zurückgegebene Wert würde also die Distanz von diesem Punkt zur oberen Kante des Inhaltsbereichs darstellen.

![Diagramm, das die Beziehungen zwischen den verschiedenen mit einem Element verbundenen Boxen zeigt](boxmodel-3.png)

## Beispiel

Siehe [`HTMLImageElement.x`](/de/docs/Web/API/HTMLImageElement/x#example) für ein Beispielcode, das die Verwendung von `HTMLImageElement.y` (und `HTMLImageElement.x`) demonstriert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("display")}}
- {{HTMLElement("col")}}
- {{HTMLElement("colgroup")}}
- [`HTMLImageElement.x`](/de/docs/Web/API/HTMLImageElement/x)
