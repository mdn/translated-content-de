---
title: "ClipboardEvent: Eigenschaft clipboardData"
short-title: clipboardData
slug: Web/API/ClipboardEvent/clipboardData
l10n:
  sourceCommit: 980b5a01c4527ef69fee3b865c68ee3ffb09d612
---

{{APIRef("Clipboard API")}}

Die **`clipboardData`**-Eigenschaft des {{domxref("ClipboardEvent")}}-Interfaces enthält ein {{domxref("DataTransfer")}}-Objekt, das verwendet werden kann, um:

- festzulegen, welche Daten über die {{domxref("Element/cut_event", "cut")}}- und {{domxref("Element/copy_event", "copy")}}-Ereignishandler in die Zwischenablage eingefügt werden sollen, typischerweise mit einem Aufruf von {{domxref("DataTransfer.setData", "setData(format, data)")}};
- die einzufügenden Daten vom {{domxref("Element/paste_event", "paste")}}-Ereignishandler abzurufen, typischerweise mit einem Aufruf von {{domxref("DataTransfer.getData", "getData(format)")}}.

Siehe die Dokumentation zu den Ereignissen {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/copy_event", "copy")}} und {{domxref("Element/paste_event", "paste")}} für weitere Informationen.

## Wert

Ein {{domxref("DataTransfer")}}-Objekt.

Die Eigenschaft kann `null` sein, wenn das Ereignis mit dem Konstruktor erstellt wurde. Beim Auslösen durch den Browser ist sie niemals `null`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Kopierbezogene Ereignisse: {{domxref("Element/copy_event", "copy")}}, {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/paste_event", "paste")}}
- Das {{domxref("ClipboardEvent")}}-Interface, zu dem es gehört.
- [Clipboard API](/de/docs/Web/API/Clipboard_API)
