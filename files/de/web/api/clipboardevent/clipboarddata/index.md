---
title: "ClipboardEvent: clipboardData-Eigenschaft"
short-title: clipboardData
slug: Web/API/ClipboardEvent/clipboardData
l10n:
  sourceCommit: 980b5a01c4527ef69fee3b865c68ee3ffb09d612
---

{{APIRef("Clipboard API")}}

Die **`clipboardData`**-Eigenschaft der [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent)-Schnittstelle enthält ein [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt, das verwendet werden kann, um:

- anzugeben, welche Daten durch die [`cut`](/de/docs/Web/API/Element/cut_event)- und [`copy`](/de/docs/Web/API/Element/copy_event)-Ereignishandler in die Zwischenablage eingefügt werden sollen, typischerweise mit einem Aufruf von [`setData(format, data)`](/de/docs/Web/API/DataTransfer/setData);
- die einzufügenden Daten durch den [`paste`](/de/docs/Web/API/Element/paste_event)-Ereignishandler zu erhalten, typischerweise mit einem Aufruf von [`getData(format)`](/de/docs/Web/API/DataTransfer/getData).

Siehe die Dokumentation zu den Ereignissen [`cut`](/de/docs/Web/API/Element/cut_event), [`copy`](/de/docs/Web/API/Element/copy_event) und [`paste`](/de/docs/Web/API/Element/paste_event) für weitere Informationen.

## Wert

Ein [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt.

Die Eigenschaft kann `null` sein, wenn das Ereignis mit dem Konstruktor erstellt wird. Sie ist niemals `null`, wenn sie vom Browser ausgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Kopierbezogene Ereignisse: [`copy`](/de/docs/Web/API/Element/copy_event), [`cut`](/de/docs/Web/API/Element/cut_event), [`paste`](/de/docs/Web/API/Element/paste_event)
- Die [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent)-Schnittstelle, zu der es gehört.
- [Clipboard API](/de/docs/Web/API/Clipboard_API)
