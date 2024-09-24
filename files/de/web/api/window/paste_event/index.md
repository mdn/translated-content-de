---
title: "Fenster: Einfügeereignis"
short-title: Einfügen
slug: Web/API/Window/paste_event
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

Das **`paste`**-Ereignis wird ausgelöst, wenn der Benutzer eine "Einfügen"-Aktion über die Benutzeroberfläche des Browsers initiiert hat.

Das ursprüngliche Ziel dieses Ereignisses ist das {{domxref("Element")}}, das das beabsichtigte Ziel des Einfügevorgangs war. Sie können auf dieses Ereignis auf der {{domxref("Window")}}-Schnittstelle hören, um es in den Capture- oder Bubble-Phasen zu handhaben. Für vollständige Details zu diesem Ereignis siehe bitte die Seite über das [Element: Einfügeereignis](/de/docs/Web/API/Element/paste_event).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("paste", (event) => {});

onpaste = (event) => {};
```

## Ereignistyp

Ein {{domxref("ClipboardEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("ClipboardEvent")}}

## Beispiele

```js
window.addEventListener("paste", (event) => {
  console.log("paste action initiated");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: {{domxref("Window/cut_event", "cut")}}, {{domxref("Window/copy_event", "copy")}}
- Dieses Ereignis auf {{domxref("Element")}}-Zielen: {{domxref("Element/paste_event", "paste")}}
- Dieses Ereignis auf {{domxref("Document")}}-Zielen: {{domxref("Document/paste_event", "paste")}}
