---
title: "ClipboardEvent: clipboardData-Eigenschaft"
short-title: clipboardData
slug: Web/API/ClipboardEvent/clipboardData
l10n:
  sourceCommit: 980b5a01c4527ef69fee3b865c68ee3ffb09d612
---

{{APIRef("Clipboard API")}}

Die **`clipboardData`**-Eigenschaft des [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent)-Interfaces enthält ein [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt, welches verwendet werden kann, um:

- anzugeben, welche Daten über die [`cut`](/de/docs/Web/API/Element/cut_event)- und [`copy`](/de/docs/Web/API/Element/copy_event)-Ereignishandler in die Zwischenablage gelegt werden sollen, typischerweise mit einem Aufruf von [`setData(format, data)`](/de/docs/Web/API/DataTransfer/setData);
- die einzufügenden Daten aus dem [`paste`](/de/docs/Web/API/Element/paste_event)-Ereignishandler abzurufen, typischerweise mit einem Aufruf von [`getData(format)`](/de/docs/Web/API/DataTransfer/getData).

Siehe die Dokumentationen der Ereignisse [`cut`](/de/docs/Web/API/Element/cut_event), [`copy`](/de/docs/Web/API/Element/copy_event) und [`paste`](/de/docs/Web/API/Element/paste_event) für weitere Informationen.

## Wert

Ein [`DataTransfer`](/de/docs/Web/API/DataTransfer)-Objekt.

Die Eigenschaft kann `null` sein, wenn das Ereignis mit dem Konstruktor erstellt wird. Sie ist nie `null`, wenn sie vom Browser ausgelöst wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Kopierbezogene Ereignisse: [`copy`](/de/docs/Web/API/Element/copy_event), [`cut`](/de/docs/Web/API/Element/cut_event), [`paste`](/de/docs/Web/API/Element/paste_event)
- Das [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent)-Interface, zu dem es gehört.
- [Clipboard API](/de/docs/Web/API/Clipboard_API)
