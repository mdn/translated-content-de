---
title: "HTMLImageElement: y-Eigenschaft"
short-title: "y"
slug: Web/API/HTMLImageElement/y
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Eigenschaft **`y`** gibt die y-Koordinate des oberen Randes des {{HTMLElement("img")}}-Elements relativ zum Ursprung des Stamm-Elements an.

Die Eigenschaften [`x`](/de/docs/Web/API/HTMLImageElement/x) und `y` sind nur dann für ein Bild gültig, wenn seine {{cssxref("display")}}-Eigenschaft den berechneten Wert `table-column` oder `table-column-group` hat. Anders ausgedrückt: Es hat entweder einen dieser Werte explizit gesetzt oder erbt sie von einem umgebenden Element oder durch seine Position in einer durch {{HTMLElement("col")}} oder {{HTMLElement("colgroup")}} beschriebenen Spalte.

## Wert

Ein ganzzahliger Wert, der den Abstand in Pixeln vom oberen Rand des nächsten Stamm-Elements zum oberen Rand des Rahmenkastens des {{HTMLElement("img")}}-Elements angibt. Das nächste Stamm-Element ist das äußerste {{HTMLElement("html")}}-Element, das das Bild enthält. Befindet sich das Bild in einem {{HTMLElement("iframe")}}, ist `y` relativ zu diesem Frame.

Im unten stehenden Diagramm ist der obere Rand des blauen Bereichs der obere Rand des Innenabstands. Der von `y` zurückgegebene Wert wäre also der Abstand von diesem Punkt zum oberen Rand des Inhaltsbereichs.

![Diagramm, das die Beziehungen zwischen den verschiedenen mit einem Element verbundenen Kästen zeigt](boxmodel-3.png)

> [!NOTE]
> Die `y`-Eigenschaft ist nur dann gültig, wenn der berechnete Wert der {{cssxref("display")}}-Eigenschaft des Bildes entweder `table-column` oder `table-column-group` ist; mit anderen Worten, einer dieser Werte ist direkt auf dem {{HTMLElement("img")}} gesetzt oder wird von einem umgebenden Element geerbt, oder durch seine Position in einer durch {{HTMLElement("col")}} oder {{HTMLElement("colgroup")}} beschriebenen Spalte.

## Beispiel

Siehe [`HTMLImageElement.x`](/de/docs/Web/API/HTMLImageElement/x#example) für Beispielcode, der die Verwendung von `HTMLImageElement.y` (und `HTMLImageElement.x`) demonstriert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
