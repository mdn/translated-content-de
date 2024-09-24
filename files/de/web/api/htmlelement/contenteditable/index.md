---
title: "HTMLElement: contentEditable-Eigenschaft"
short-title: contentEditable
slug: Web/API/HTMLElement/contentEditable
l10n:
  sourceCommit: 61f855f3f8155a2dc1ddb5671bdac032f11ecee7
---

{{APIRef("HTML DOM")}}

Die **`contentEditable`**-Eigenschaft des {{domxref("HTMLElement")}}-Interfaces gibt an, ob das Element bearbeitbar ist oder nicht.

Dieses enumerierte Attribut kann die folgenden Werte haben:

- '`true`' gibt an, dass das Element `contenteditable` ist.
- '`false`' gibt an, dass das Element nicht bearbeitet werden kann.
- '`plaintext-only`' gibt an, dass der Rohtext des Elements bearbeitbar ist, aber die Formatierung von Rich Text deaktiviert ist.

Sie können die {{domxref("HTMLElement.isContentEditable")}}-Eigenschaft verwenden, um den berechneten booleschen Wert dieser Eigenschaft zu testen.

Wenn das Attribut fehlt oder sein Wert ungültig ist, wird sein Wert vom Elternelement geerbt: Das Element ist also bearbeitbar (oder nicht) basierend auf dem Elternelement.

## Wert

Ein String.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLElement.isContentEditable")}}
- Das [`contenteditable`](/de/docs/Web/HTML/Global_attributes#contenteditable) globale Attribut.
