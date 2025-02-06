---
title: "HTMLImageElement: y Eigenschaft"
short-title: y
slug: Web/API/HTMLImageElement/y
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Eigenschaft **`y`** gibt die y-Koordinate der oberen Randkante des {{HTMLElement("img")}}-Elements relativ zum Ursprung des Root-Elements an.

Die [`x`](/de/docs/Web/API/HTMLImageElement/x)- und `y`-Eigenschaften sind nur für ein Bild gültig, wenn dessen {{cssxref("display")}}-Eigenschaft den berechneten Wert `table-column` oder `table-column-group` hat. Anders gesagt: Es hat entweder einen dieser Werte explizit gesetzt, diesen von einem umschließenden Element geerbt, oder befindet sich in einer Spalte, die entweder durch {{HTMLElement("col")}} oder {{HTMLElement("colgroup")}} beschrieben wird.

## Wert

Ein ganzzahliger Wert, der den Abstand in Pixeln von der oberen Kante des nächstgelegenen Root-Elements bis zur oberen Kante des Randrahmens des {{HTMLElement("img")}}-Elements angibt. Das nächstgelegene Root-Element ist das äußerste {{HTMLElement("html")}}-Element, das das Bild enthält. Wenn sich das Bild in einem {{HTMLElement("iframe")}} befindet, bezieht sich `y` relativ auf dieses Frame.

Im untenstehenden Diagramm ist die obere Randkante die Oberkante des blauen Padding-Bereichs. Der von `y` zurückgegebene Wert wäre daher der Abstand von diesem Punkt bis zur oberen Kante des Inhaltsbereichs.

![Diagramm, das die Beziehungen zwischen den verschiedenen Kästen, die zu einem Element gehören, zeigt](boxmodel-3.png)

> [!NOTE]
> Die `y`-Eigenschaft ist nur gültig, wenn der berechnete Wert der {{cssxref("display")}}-Eigenschaft des Bildes entweder `table-column` oder `table-column-group` ist. Anders gesagt: Einer dieser Werte wurde entweder direkt auf das {{HTMLElement("img")}} gesetzt, wurde von einem umschließenden Element geerbt oder stammt von einer Spalte, die entweder durch {{HTMLElement("col")}} oder {{HTMLElement("colgroup")}} beschrieben wird.

## Beispiel

Siehe [`HTMLImageElement.x`](/de/docs/Web/API/HTMLImageElement/x#example) für Beispielcode, der die Nutzung von `HTMLImageElement.y` (und `HTMLImageElement.x`) demonstriert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
