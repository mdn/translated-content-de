---
title: "HTMLImageElement: y-Eigenschaft"
short-title: y
slug: Web/API/HTMLImageElement/y
l10n:
  sourceCommit: 384b4f1e0490f2f91f154a9ca977da78e0cc63a9
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`y`**-Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) Interfaces gibt die y-Koordinate der oberen Randkante des {{HTMLElement("img")}}-Elements relativ zum Ursprung des Wurzelelements an.

## Wert

Ein ganzzahliger Wert, der den Abstand in Pixeln von der oberen Kante des nächstgelegenen Wurzelelements zur oberen Kante des Border-Box des {{HTMLElement("img")}}-Elements angibt. Das nächstgelegene Wurzelelement ist das äußerste {{HTMLElement("html")}}-Element, das das Bild enthält. Befindet sich das Bild in einem {{HTMLElement("iframe")}}, ist dessen `y` relativ zu diesem Frame.

Im untenstehenden Diagramm ist die obere Randkante die obere Kante des blauen Auffüllbereichs. Daher wäre der von `y` zurückgegebene Wert der Abstand von diesem Punkt zur oberen Kante des Inhaltsbereichs.

![Diagramm, das die Beziehungen zwischen den verschiedenen mit einem Element verbundenen Boxen zeigt](boxmodel-3.png)

## Beispiele

Beispiele finden Sie auf der Seite der [`x`](/de/docs/Web/API/HTMLImageElement/x)-Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLImageElement.x`](/de/docs/Web/API/HTMLImageElement/x)
