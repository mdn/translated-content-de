---
title: "Window: cut Ereignis"
short-title: cut
slug: Web/API/Window/cut_event
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

Das **`cut`** Ereignis wird ausgelöst, wenn der Benutzer eine "Ausschneiden"-Aktion über die Benutzeroberfläche des Browsers initiiert hat.

Das ursprüngliche Ziel dieses Ereignisses ist das [`Element`](/de/docs/Web/API/Element), das das beabsichtigte Ziel der Ausschneideaktion war. Sie können auf diesem Ereignis auf der [`Window`](/de/docs/Web/API/Window) Schnittstelle hören, um es in den Capture- oder Bubbling-Phasen zu bearbeiten. Für vollständige Details zu diesem Ereignis siehe die Seite zum [Element: cut Ereignis](/de/docs/Web/API/Element/cut_event).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("cut", (event) => {});

oncut = (event) => {};
```

## Ereignistyp

Ein [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ClipboardEvent")}}

## Beispiele

```js
window.addEventListener("cut", (event) => {
  console.log("cut action initiated");
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`copy`](/de/docs/Web/API/Window/copy_event), [`paste`](/de/docs/Web/API/Window/paste_event)
- Dieses Ereignis auf [`Element`](/de/docs/Web/API/Element) Ziele: [`cut`](/de/docs/Web/API/Element/cut_event)
- Dieses Ereignis auf [`Document`](/de/docs/Web/API/Document) Ziele: [`cut`](/de/docs/Web/API/Document/cut_event)
