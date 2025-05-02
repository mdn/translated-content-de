---
title: "Window: cut-Event"
short-title: cut
slug: Web/API/Window/cut_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`cut`**-Event wird ausgelöst, wenn der Benutzer eine "Ausschneiden"-Aktion über die Benutzeroberfläche des Browsers initiiert hat.

Das ursprüngliche Ziel dieses Events ist das [`Element`](/de/docs/Web/API/Element), das das beabsichtigte Ziel der Ausschneideaktion war. Sie können dieses Event auf der [`Window`](/de/docs/Web/API/Window)-Schnittstelle überwachen, um es in den Capture- oder Bubbling-Phasen zu verarbeiten. Für vollständige Details zu diesem Event siehe die Seite [Element: cut-Event](/de/docs/Web/API/Element/cut_event).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Event-Handler-Eigenschaft.

```js-nolint
addEventListener("cut", (event) => { })

oncut = (event) => { }
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

- Verwandte Events: [`copy`](/de/docs/Web/API/Window/copy_event), [`paste`](/de/docs/Web/API/Window/paste_event)
- Dieses Event auf [`Element`](/de/docs/Web/API/Element) Zielen: [`cut`](/de/docs/Web/API/Element/cut_event)
- Dieses Event auf [`Document`](/de/docs/Web/API/Document) Zielen: [`cut`](/de/docs/Web/API/Document/cut_event)
