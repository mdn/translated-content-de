---
title: "Window: copy-Ereignis"
short-title: copy
slug: Web/API/Window/copy_event
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

Das **`copy`**-Ereignis wird ausgelöst, wenn der Benutzer durch die Benutzeroberfläche des Browsers eine Kopieraktion initiiert.

Das ursprüngliche Ziel für dieses Ereignis ist das {{domxref("Element")}}, das das beabsichtigte Ziel der Kopieraktion war. Sie können auf dieses Ereignis in der {{domxref("Window")}}-Schnittstelle hören, um es in den Phasen der Erfassung oder des Bubblings zu behandeln. Für vollständige Details zu diesem Ereignis siehe die Seite über das [Element: copy-Ereignis](/de/docs/Web/API/Element/copy_event).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("copy", (event) => {});

oncopy = (event) => {};
```

## Ereignistyp

Ein {{domxref("ClipboardEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("ClipboardEvent")}}

## Beispiele

```js
window.addEventListener("copy", (event) => {
  console.log("copy action initiated");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: {{domxref("Window/cut_event", "cut")}}, {{domxref("Window/paste_event", "paste")}}
- Dieses Ereignis bei {{domxref("Element")}}-Zielen: {{domxref("Element/copy_event", "copy")}}
- Dieses Ereignis bei {{domxref("Document")}}-Zielen: {{domxref("Document/copy_event", "copy")}}
