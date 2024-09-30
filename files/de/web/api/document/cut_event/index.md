---
title: "Document: cut Ereignis"
short-title: cut
slug: Web/API/Document/cut_event
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef}}

Das **`cut`**-Ereignis wird ausgelöst, wenn der Benutzer eine Ausschneideaktion über die Benutzeroberfläche des Browsers initiiert.

Das ursprüngliche Ziel dieses Ereignisses ist das [`Element`](/de/docs/Web/API/Element), das das vorgesehene Ziel der Ausschneideaktion war. Sie können dieses Ereignis auf der [`Document`](/de/docs/Web/API/Document)-Schnittstelle abhören, um es in den Capture- oder Bubbling-Phasen zu bearbeiten. Für vollständige Details zu diesem Ereignis lesen Sie bitte die Seite zum [Element: cut Ereignis](/de/docs/Web/API/Element/cut_event).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("cut", (event) => {});

oncut = (event) => {};
```

## Ereignistyp

Ein [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent), der von [`Event`](/de/docs/Web/API/Event) erbt.

{{InheritanceDiagram("ClipboardEvent")}}

## Beispiele

Um informiert zu werden, wenn ein Benutzer Daten von der Webseite in seine Zwischenablage ausschneidet, können Sie Ihrem [`Document`](/de/docs/Web/API/Document)-Exemplar einen Handler hinzufügen, indem Sie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) verwenden, wie folgt:

```js
document.addEventListener("cut", (event) => {
  /* the session has shut down */
});
```

Alternativ können Sie die `Document.oncut`-Ereignishandler-Eigenschaft verwenden, um einen Handler für das `cut`-Ereignis festzulegen:

```js
document.oncut = (event) => {
  /* the session has shut down */
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`copy`](/de/docs/Web/API/Document/copy_event), [`paste`](/de/docs/Web/API/Document/paste_event)
- Dieses Ereignis bei [`Element`](/de/docs/Web/API/Element) Zielen: [`cut`](/de/docs/Web/API/Element/cut_event)
- Dieses Ereignis bei [`Window`](/de/docs/Web/API/Window) Zielen: [`cut`](/de/docs/Web/API/Window/cut_event)
