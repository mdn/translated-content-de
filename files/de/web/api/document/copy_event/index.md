---
title: "Document: copy-Ereignis"
short-title: copy
slug: Web/API/Document/copy_event
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef}}

Das **`copy`**-Ereignis wird ausgelöst, wenn der Benutzer eine Kopieraktion über die Benutzeroberfläche des Browsers initiiert.

Das ursprüngliche Ziel dieses Ereignisses ist das [`Element`](/de/docs/Web/API/Element), das das beabsichtigte Ziel der Kopieraktion war. Sie können dieses Ereignis auf der [`Document`](/de/docs/Web/API/Document)-Schnittstelle abhören, um es in den Phasen der Erfassung oder Blasenbildung zu behandeln. Für vollständige Details zu diesem Ereignis siehe die Seite über das [Element: copy-Ereignis](/de/docs/Web/API/Element/copy_event).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("copy", (event) => {});

oncopy = (event) => {};
```

## Ereignistyp

Ein [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ClipboardEvent")}}

## Beispiele

Um informiert zu werden, wenn ein Benutzer Daten von der Webseite in seine Zwischenablage kopiert, können Sie einen Handler zu Ihrer [`Document`](/de/docs/Web/API/Document)-Instanz mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzufügen, wie folgt:

```js
document.addEventListener("copy", (event) => {
  /* the session has shut down */
});
```

Alternativ können Sie die `Document.oncopy`-Ereignishandler-Eigenschaft verwenden, um einen Handler für das `copy`-Ereignis festzulegen:

```js
document.oncopy = (event) => {
  /* the session has shut down */
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`cut`](/de/docs/Web/API/Document/cut_event), [`paste`](/de/docs/Web/API/Document/paste_event)
- Dieses Ereignis auf [`Element`](/de/docs/Web/API/Element) zielt ab: [`copy`](/de/docs/Web/API/Element/copy_event)
- Dieses Ereignis auf [`Window`](/de/docs/Web/API/Window) zielt ab: [`copy`](/de/docs/Web/API/Window/copy_event)
