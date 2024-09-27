---
title: "HTMLImageElement: naturalWidth-Eigenschaft"
short-title: naturalWidth
slug: Web/API/HTMLImageElement/naturalWidth
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`naturalWidth`**-Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces gibt die intrinsische (natürliche), dichtekorrigierte Breite des Bildes in [CSS-Pixel](/de/docs/Glossary/CSS_pixel) zurück.

Dies ist die Breite, die das Bild hat, wenn nichts seine Breite einschränkt; wenn weder eine Breite für das Bild festgelegt wird, noch das Bild in einen Container platziert wird, der die Breite des Bildes begrenzt oder ausdrücklich festlegt, ist dies die Anzahl der CSS-Pixel, die das Bild breit sein wird.

Die entsprechende Methode [`naturalHeight`](/de/docs/Web/API/HTMLImageElement/naturalHeight) gibt die natürliche Höhe des Bildes zurück.

> [!NOTE]
> Meistens entspricht die natürliche Breite der tatsächlichen Breite des vom Server gesendeten Bildes. Dennoch können Browser ein Bild ändern, bevor es zum Renderer geschickt wird. Zum Beispiel [reduziert Chrome die Auflösung von Bildern auf Geräten mit niedriger Leistung](https://crbug.com/1187043#c7). In solchen Fällen betrachtet `naturalWidth` die durch solche Browsereingriffe modifizierte Breite des Bildes als natürliche Breite und gibt diesen Wert zurück.

## Wert

Ein ganzzahliger Wert, der die intrinsische Breite des Bildes in CSS-Pixeln angibt. Dies ist die Breite, mit der das Bild natürlich gezeichnet wird, wenn keine Einschränkung oder ein spezifischer Wert für das Bild festgelegt ist. Diese natürliche Breite wird für die Pixeldichte des Geräts, auf dem es angezeigt wird, korrigiert, im Gegensatz zu dem Wert von [`width`](/de/docs/Web/API/HTMLImageElement/width).

Wenn die intrinsische Breite nicht verfügbar ist - entweder weil das Bild keine intrinsische Breite angibt oder weil die Bilddaten nicht verfügbar sind, um diese Informationen zu erhalten, gibt `naturalWidth` 0 zurück.

## Beispiele

Siehe [`HTMLImageElement.naturalHeight`](/de/docs/Web/API/HTMLImageElement/naturalHeight#examples) für Beispielcode, der ein Bild sowohl in seiner natürlichen "dichtekorrigierten" Größe, als auch in seiner gerenderten Größe anzeigt, die durch das CSS der Seite und andere Faktoren verändert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
