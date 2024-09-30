---
title: "HTMLImageElement: naturalWidth-Eigenschaft"
short-title: naturalWidth
slug: Web/API/HTMLImageElement/naturalWidth
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`naturalWidth`**-Eigenschaft der Schnittstelle [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement) gibt die intrinsische (natürliche), dichte-korrigierte Breite des Bildes in [CSS-Pixel](/de/docs/Glossary/CSS_pixel) zurück.

Dies ist die Breite, die das Bild hat, wenn nichts seine Breite einschränkt; wenn Sie weder eine Breite für das Bild angeben, noch das Bild in einen Container einfügen, der die Bildbreite begrenzt oder ausdrücklich angibt, ist dies die Anzahl von CSS-Pixeln, die das Bild breit sein wird.

Die entsprechende Methode [`naturalHeight`](/de/docs/Web/API/HTMLImageElement/naturalHeight) gibt die natürliche Höhe des Bildes zurück.

> [!NOTE]
> In den meisten Fällen ist die natürliche Breite die tatsächliche Breite des vom Server gesendeten Bildes. Dennoch können Browser ein Bild vor dem Rendering modifizieren. Zum Beispiel [verringert Chrome die Auflösung von Bildern auf Geräten mit niedriger Leistung](https://crbug.com/1187043#c7). In solchen Fällen berücksichtigt `naturalWidth` die Breite des durch solche Browser-Interventionen modifizierten Bildes als die natürliche Breite und gibt diesen Wert zurück.

## Wert

Ein ganzzahliger Wert, der die intrinsische Breite des Bildes in CSS-Pixeln angibt. Dies ist die Breite, bei der das Bild natürlich gezeichnet wird, wenn keine Einschränkung oder ein spezifischer Wert für das Bild festgelegt ist. Diese natürliche Breite ist korrigiert für die Pixeldichte des Geräts, auf dem sie dargestellt wird, im Gegensatz zu dem Wert von [`width`](/de/docs/Web/API/HTMLImageElement/width).

Wenn die intrinsische Breite nicht verfügbar ist - entweder weil das Bild keine intrinsische Breite angibt oder weil die Bilddaten nicht verfügbar sind, um diese Informationen zu erhalten, gibt `naturalWidth` 0 zurück.

## Beispiele

Siehe [`HTMLImageElement.naturalHeight`](/de/docs/Web/API/HTMLImageElement/naturalHeight#examples) für Beispielcode, der ein Bild sowohl in seiner natürlichen "dichte-korrigierten" Größe als auch in seiner durch das CSS der Seite und andere Faktoren veränderten gerenderten Größe anzeigt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
