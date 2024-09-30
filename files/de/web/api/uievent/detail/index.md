---
title: "UIEvent: detail-Eigenschaft"
short-title: detail
slug: Web/API/UIEvent/detail
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("UI Events")}}

Die **`UIEvent.detail`**-Eigenschaft, die nur gelesen werden kann, gibt, wenn ungleich null, die aktuelle (oder nächste, je nach Ereignis) Klickanzahl an.

Bei [`click`](/de/docs/Web/API/Element/click_event) oder [`dblclick`](/de/docs/Web/API/Element/dblclick_event) Ereignissen ist `UIEvent.detail` die aktuelle Klickanzahl.

Bei [`mousedown`](/de/docs/Web/API/Element/mousedown_event) oder [`mouseup`](/de/docs/Web/API/Element/mouseup_event) Ereignissen ist `UIEvent.detail` _1 plus_ die aktuelle Klickanzahl.

Für alle anderen [`UIEvent`](/de/docs/Web/API/UIEvent) Objekte ist `UIEvent.detail` immer null.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
