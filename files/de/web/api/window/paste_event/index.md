---
title: "Window: paste-Ereignis"
short-title: paste
slug: Web/API/Window/paste_event
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

Das **`paste`**-Ereignis wird ausgelöst, wenn der Benutzer eine "Einfügen"-Aktion über die Benutzeroberfläche des Browsers initiiert hat.

Das ursprüngliche Ziel dieses Ereignisses ist das [`Element`](/de/docs/Web/API/Element), das das beabsichtigte Ziel der Einfügeaktion war. Sie können dieses Ereignis auf der [`Window`](/de/docs/Web/API/Window)-Schnittstelle anhören, um es in den Capture- oder Bubbling-Phasen zu verarbeiten. Für vollständige Details zu diesem Ereignis besuchen Sie bitte die Seite über das [Element: paste-Ereignis](/de/docs/Web/API/Element/paste_event).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("paste", (event) => {});

onpaste = (event) => {};
```

## Ereignistyp

Ein [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

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

- Verwandte Ereignisse: [`cut`](/de/docs/Web/API/Window/cut_event), [`copy`](/de/docs/Web/API/Window/copy_event)
- Dieses Ereignis auf [`Element`](/de/docs/Web/API/Element)-Ziele: [`paste`](/de/docs/Web/API/Element/paste_event)
- Dieses Ereignis auf [`Document`](/de/docs/Web/API/Document)-Ziele: [`paste`](/de/docs/Web/API/Document/paste_event)
