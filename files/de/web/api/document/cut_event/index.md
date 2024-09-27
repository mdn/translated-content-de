---
title: "Document: cut event"
short-title: cut
slug: Web/API/Document/cut_event
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef}}

Das **`cut`**-Ereignis tritt auf, wenn der Benutzer über die Benutzeroberfläche des Browsers eine Ausschneideaktion initiiert.

Das ursprüngliche Ziel für dieses Ereignis ist das [`Element`](/de/docs/Web/API/Element), das das beabsichtigte Ziel der Ausschneideaktion war. Sie können dieses Ereignis auf der [`Document`](/de/docs/Web/API/Document)-Schnittstelle abhören, um es in der Capture- oder Bubbling-Phase zu behandeln. Für vollständige Details zu diesem Ereignis siehe die Seite über das [Element: cut event](/de/docs/Web/API/Element/cut_event).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("cut", (event) => {});

oncut = (event) => {};
```

## Ereignistyp

Ein [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ClipboardEvent")}}

## Beispiele

Um informiert zu werden, wenn ein Benutzer Daten von der Webseite in die Zwischenablage ausschneidet, können Sie einen Handler zu Ihrer [`Document`](/de/docs/Web/API/Document)-Instanz mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzufügen, wie folgt:

```js
document.addEventListener("cut", (event) => {
  /* the session has shut down */
});
```

Alternativ können Sie die `Document.oncut` Ereignis-Handler-Eigenschaft verwenden, um einen Handler für das `cut`-Ereignis zu etablieren:

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
- Dieses Ereignis auf [`Element`](/de/docs/Web/API/Element)-Ziele: [`cut`](/de/docs/Web/API/Element/cut_event)
- Dieses Ereignis auf [`Window`](/de/docs/Web/API/Window)-Ziele: [`cut`](/de/docs/Web/API/Window/cut_event)
