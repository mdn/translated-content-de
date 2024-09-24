---
title: "HTMLImageElement: naturalWidth-Eigenschaft"
short-title: naturalWidth
slug: Web/API/HTMLImageElement/naturalWidth
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`naturalWidth`**-Eigenschaft des {{domxref("HTMLImageElement")}}-Interfaces gibt die intrinsische (natürliche) und dichtekorrekte Breite des Bildes in {{Glossary("CSS pixel", "CSS-Pixel")}} zurück.

Dies ist die Breite, die das Bild hat, wenn nichts seine Breite einschränkt; Wenn Sie weder eine Breite für das Bild angeben noch es in einem Container platzieren, der die Bildbreite einschränkt oder ausdrücklich angibt, ist dies die Anzahl der CSS-Pixel, die das Bild breit sein wird.

Die entsprechende Methode {{domxref("HTMLImageElement.naturalHeight", "naturalHeight")}} gibt die natürliche Höhe des Bildes zurück.

> [!NOTE]
> Meistens ist die natürliche Breite die tatsächliche Breite des vom Server gesendeten Bildes. Browser können jedoch ein Bild modifizieren, bevor sie es an den Renderer senden. Zum Beispiel [verschlechtert Chrome die Auflösung von Bildern auf Geräten mit niedriger Leistung](https://crbug.com/1187043#c7). In solchen Fällen berücksichtigt `naturalWidth` die Breite des durch solche Browserinterventionen modifizierten Bildes als natürliche Breite und gibt diesen Wert zurück.

## Wert

Ein ganzzahliger Wert, der die intrinsische Breite des Bildes in CSS-Pixeln angibt. Dies ist die Breite, in der das Bild natürlich gezeichnet wird, wenn keine Einschränkung oder spezifischer Wert für das Bild festgelegt ist. Diese natürliche Breite wird für die Pixeldichte des Geräts, auf dem es dargestellt wird, korrigiert, im Gegensatz zum Wert von {{domxref("HTMLImageElement.width", "width")}}.

Wenn die intrinsische Breite nicht verfügbar ist – entweder weil das Bild keine intrinsische Breite angibt oder weil die Bilddaten nicht vorliegen, um diese Information zu erhalten – gibt `naturalWidth` 0 zurück.

## Beispiele

Siehe [`HTMLImageElement.naturalHeight`](/de/docs/Web/API/HTMLImageElement/naturalHeight#examples) für Beispielcode, der ein Bild sowohl in seiner natürlichen "dichteangepassten" Größe als auch in seiner durch das CSS der Seite und andere Faktoren veränderten rendernden Größe anzeigt.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
