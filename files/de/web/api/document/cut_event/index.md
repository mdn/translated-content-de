---
title: "Dokument: cut-Ereignis"
short-title: cut
slug: Web/API/Document/cut_event
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef}}

Das **`cut`**-Ereignis wird ausgelöst, wenn der Benutzer über die Benutzeroberfläche des Browsers eine Ausschneideaktion einleitet.

Das ursprüngliche Ziel dieses Ereignisses ist das {{domxref("Element")}}, das das beabsichtigte Ziel der Ausschneideaktion war. Sie können auf diesem Ereignis beim {{domxref("Document")}}-Interface hören, um es in den Erfassungs- oder Bubbling-Phasen zu behandeln. Für vollständige Details zu diesem Ereignis lesen Sie bitte die Seite über das [Element: cut-Ereignis](/de/docs/Web/API/Element/cut_event).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("cut", (event) => {});

oncut = (event) => {};
```

## Ereignistyp

Ein {{domxref("ClipboardEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("ClipboardEvent")}}

## Beispiele

Um informiert zu werden, wenn ein Benutzer Daten von der Webseite in die Zwischenablage schneidet, können Sie einen Handler zu Ihrer {{domxref("Document")}}-Instanz hinzufügen, indem Sie {{domxref("EventTarget.addEventListener", "addEventListener()")}} verwenden, wie hier:

```js
document.addEventListener("cut", (event) => {
  /* the session has shut down */
});
```

Alternativ können Sie die `Document.oncut` Ereignishandler-Eigenschaft verwenden, um einen Handler für das `cut`-Ereignis einzurichten:

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

- Verwandte Ereignisse: {{domxref("Document/copy_event", "copy")}}, {{domxref("Document/paste_event", "paste")}}
- Dieses Ereignis bei {{domxref("Element")}}-Zielen: {{domxref("Element/cut_event", "cut")}}
- Dieses Ereignis bei {{domxref("Window")}}-Zielen: {{domxref("Window/cut_event", "cut")}}
