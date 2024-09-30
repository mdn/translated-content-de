---
title: "HTMLElement: contentEditable-Eigenschaft"
short-title: contentEditable
slug: Web/API/HTMLElement/contentEditable
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("HTML DOM")}}

Die **`contentEditable`**-Eigenschaft des [`HTMLElement`](/de/docs/Web/API/HTMLElement)-Interfaces gibt an, ob das Element bearbeitbar ist oder nicht.

Dieses Aufzählungsattribut kann folgende Werte haben:

- `"true"` zeigt an, dass das Element `contenteditable` ist.
- `"false"` zeigt an, dass das Element nicht bearbeitet werden kann.
- `"plaintext-only"` zeigt an, dass der rohe Text des Elements bearbeitbar ist, aber die Formatierung von Rich Text deaktiviert ist.

Sie können die [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable)-Eigenschaft verwenden, um den berechneten booleschen Wert dieser Eigenschaft zu testen.

Wenn das Attribut fehlt oder sein Wert ungültig ist, wird sein Wert vom übergeordneten Element geerbt: Das Element ist also je nach übergeordnetem Element bearbeitbar (oder nicht).

## Wert

Ein String.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLElement.isContentEditable`](/de/docs/Web/API/HTMLElement/isContentEditable)
- Das [`contenteditable`](/de/docs/Web/HTML/Global_attributes#contenteditable) globale Attribut.
