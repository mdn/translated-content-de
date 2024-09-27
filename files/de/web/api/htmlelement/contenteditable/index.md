---
title: "HTMLElement: contentEditable-Eigenschaft"
short-title: contentEditable
slug: Web/API/HTMLElement/contentEditable
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("HTML DOM")}}

Die **`contentEditable`**-Eigenschaft der [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Schnittstelle gibt an, ob das Element
bearbeitbar ist oder nicht.

Dieses enumerierte Attribut kann die folgenden Werte haben:

- `"true"` bedeutet, dass das Element `contenteditable` ist.
- `"false"` bedeutet, dass das Element nicht bearbeitet werden kann.
- `"plaintext-only"` bedeutet, dass der rohe Text des Elements bearbeitbar ist, aber die Formatierung von Rich-Text deaktiviert ist.

Sie können die Eigenschaft [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable) verwenden, um den
berechneten booleschen Wert dieser Eigenschaft zu überprüfen.

Wenn das Attribut fehlt oder sein Wert ungültig ist, wird sein Wert vom übergeordneten Element geerbt: Das Element ist
also basierend auf dem übergeordneten Element bearbeitbar (oder nicht).

## Wert

Ein String.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable)
- Das globale Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes#contenteditable).
