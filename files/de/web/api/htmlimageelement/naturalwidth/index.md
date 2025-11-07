---
title: "HTMLImageElement: naturalWidth-Eigenschaft"
short-title: naturalWidth
slug: Web/API/HTMLImageElement/naturalWidth
l10n:
  sourceCommit: 1f00512e3c9a20b5bb927db529bb5d639e346d96
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`naturalWidth`**-Eigenschaft des [`HTMLImageElement`](/de/docs/Web/API/HTMLImageElement)-Interfaces gibt die intrinsische (natürliche), dichtekorrigierte Breite des Bildes in {{Glossary("CSS_pixel", "CSS-Pixeln")}} zurück.

Das ist die Breite, die das Bild hat, wenn nichts seine Breite einschränkt; wenn Sie weder eine Breite für das Bild angeben noch das Bild in einen Container platzieren, der die Breite des Bildes einschränkt oder ausdrücklich festlegt, wird es in dieser Breite dargestellt.

> [!NOTE]
> Meistens ist die natürliche Breite die tatsächliche Breite des vom Server gesendeten Bildes. Dennoch können Browser ein Bild ändern, bevor es zum Renderer geschickt wird. Zum Beispiel verschlechtert Chrome [die Auflösung von Bildern auf Geräten mit niedriger Leistung](https://crbug.com/1187043#c7). In solchen Fällen berücksichtigt `naturalWidth` die Breite des Bildes, die durch solche Eingriffe des Browsers modifiziert wurde, als natürliche Breite und gibt diesen Wert zurück.

## Wert

Ein ganzzahliger Wert, der die intrinsische Breite des Bildes in CSS-Pixeln angibt. Dies ist die Breite, in der das Bild natürlich gezeichnet wird, wenn keine Einschränkung oder ein bestimmter Wert für das Bild festgelegt ist. Diese natürliche Breite wird für die Pixeldichte des Geräts korrigiert, auf dem sie präsentiert wird, im Gegensatz zu [`width`](/de/docs/Web/API/HTMLImageElement/width).

Wenn die intrinsische Breite nicht verfügbar ist – entweder weil das Bild keine intrinsische Breite angibt oder weil die Bilddaten nicht verfügbar sind, um diese Information zu erhalten, gibt `naturalWidth` 0 zurück.

## Beispiele

Siehe [`HTMLImageElement.naturalHeight`](/de/docs/Web/API/HTMLImageElement/naturalHeight#examples) für Beispielcode, der ein Bild sowohl in seiner natürlichen "dichteangepassten" Größe als auch in seiner durch die CSS der Seite und andere Faktoren veränderten Größe anzeigt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLImageElement.width`](/de/docs/Web/API/HTMLImageElement/width)
- [`HTMLImageElement.naturalHeight`](/de/docs/Web/API/HTMLImageElement/naturalHeight)
