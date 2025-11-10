---
title: "HTMLElement: contentEditable-Eigenschaft"
short-title: contentEditable
slug: Web/API/HTMLElement/contentEditable
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

Die **`contentEditable`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces gibt an, ob das Element bearbeitbar ist oder nicht.

Diese aufzählbare Eigenschaft kann folgende Werte haben:

- `"true"` bedeutet, dass das Element `contenteditable` ist.
- `"false"` bedeutet, dass das Element nicht bearbeitet werden kann.
- `"plaintext-only"` bedeutet, dass der rohe Text des Elements bearbeitbar ist, jedoch die Formatierung von Rich-Text deaktiviert ist.

Sie können die [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable)-Eigenschaft verwenden, um den berechneten booleschen Wert dieser Eigenschaft zu testen.

Wenn das Attribut fehlt oder sein Wert ungültig ist, wird sein Wert vom übergeordneten Element vererbt: Das Element ist also basierend auf dem übergeordneten Element bearbeitbar (oder nicht).

## Wert

Ein String.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable)
- Das [`contenteditable`](/de/docs/Web/HTML/Reference/Global_attributes/contenteditable) globale Attribut.
