---
title: "HTMLElement: contentEditable-Eigenschaft"
short-title: contentEditable
slug: Web/API/HTMLElement/contentEditable
l10n:
  sourceCommit: 816cc4d4a5a318a23222946b6981bb92b499aebb
---

{{APIRef("HTML DOM")}}

Die **`contentEditable`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces gibt an, ob das Element bearbeitbar ist oder nicht.

Dieses enumerierte Attribut kann die folgenden Werte haben:

- `"true"` zeigt an, dass das Element `contenteditable` ist.
- `"false"` zeigt an, dass das Element nicht bearbeitet werden kann.
- `"plaintext-only"` zeigt an, dass der rohe Text des Elements bearbeitbar ist, jedoch ist die Formatierung von Rich-Text deaktiviert.

Sie können die [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable)-Eigenschaft verwenden, um den berechneten booleschen Wert dieser Eigenschaft zu testen.

Wenn das Attribut fehlt oder sein Wert ungültig ist, wird sein Wert vom übergeordneten Element geerbt: Das Element ist also basierend auf dem übergeordneten Element bearbeitbar (oder nicht).

## Wert

Ein String.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable)
- Das globale Attribut [`contenteditable`](/de/docs/Web/HTML/Global_attributes/contenteditable).
