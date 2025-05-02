---
title: "Window: copy event"
short-title: copy
slug: Web/API/Window/copy_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`copy`**-Ereignis wird ausgelöst, wenn der Benutzer eine Kopieraktion über die Benutzeroberfläche des Browsers initiiert.

Das ursprüngliche Ziel dieses Ereignisses ist das [`Element`](/de/docs/Web/API/Element), das das beabsichtigte Ziel der Kopieraktion war. Sie können dieses Ereignis auf der [`Window`](/de/docs/Web/API/Window)-Schnittstelle hören, um es in den Capture- oder Bubbling-Phasen zu behandeln. Für vollständige Details zu diesem Ereignis siehe die Seite über das [Element: copy event](/de/docs/Web/API/Element/copy_event).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("copy", (event) => { })

oncopy = (event) => { }
```

## Ereignistyp

Ein [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

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

- Verwandte Ereignisse: [`cut`](/de/docs/Web/API/Window/cut_event), [`paste`](/de/docs/Web/API/Window/paste_event)
- Dieses Ereignis auf [`Element`](/de/docs/Web/API/Element) zielt ab: [`copy`](/de/docs/Web/API/Element/copy_event)
- Dieses Ereignis auf [`Document`](/de/docs/Web/API/Document) zielt ab: [`copy`](/de/docs/Web/API/Document/copy_event)
