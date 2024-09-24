---
title: "UIEvent: Detail-Eigenschaft"
short-title: Detail
slug: Web/API/UIEvent/detail
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("UI Events")}}

Die schreibgeschützte **`UIEvent.detail`**-Eigenschaft gibt, wenn sie ungleich null ist, die aktuelle (oder nächste, je nach Ereignis) Klickanzahl an.

Bei {{domxref("Element/click_event", "click")}}- oder {{domxref("Element/dblclick_event", "dblclick")}}-Ereignissen ist `UIEvent.detail` die aktuelle Klickanzahl.

Bei {{domxref("Element/mousedown_event", "mousedown")}}- oder {{domxref("Element/mouseup_event", "mouseup")}}-Ereignissen ist `UIEvent.detail` _1 plus_ die aktuelle Klickanzahl.

Für alle anderen {{domxref("UIEvent")}}-Objekte ist `UIEvent.detail` immer null.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
