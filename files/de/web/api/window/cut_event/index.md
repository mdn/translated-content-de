---
title: "Window: cut Event"
short-title: cut
slug: Web/API/Window/cut_event
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

Das **`cut`**-Event wird ausgelöst, wenn der Benutzer eine "Ausschneiden"-Aktion über die Benutzeroberfläche des Browsers initiiert hat.

Das ursprüngliche Ziel dieses Ereignisses ist das [`Element`](/de/docs/Web/API/Element), das das beabsichtigte Ziel der Ausschneiden-Aktion war. Sie können dieses Ereignis auf der [`Window`](/de/docs/Web/API/Window)-Schnittstelle abhören, um es in den Erfassungs- oder Bubbling-Phasen zu bearbeiten. Für vollständige Details zu diesem Ereignis lesen Sie bitte die Seite zum [Element: cut Event](/de/docs/Web/API/Element/cut_event).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("cut", (event) => {});

oncut = (event) => {};
```

## Event-Typ

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
- Dieses Ereignis auf [`Element`](/de/docs/Web/API/Element) zielt ab: [`cut`](/de/docs/Web/API/Element/cut_event)
- Dieses Ereignis auf [`Document`](/de/docs/Web/API/Document) zielt ab: [`cut`](/de/docs/Web/API/Document/cut_event)
