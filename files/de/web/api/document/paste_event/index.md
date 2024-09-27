---
title: "Document: paste Ereignis"
short-title: paste
slug: Web/API/Document/paste_event
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef}}

Das **`paste`**-Ereignis wird ausgelöst, wenn der Benutzer eine Einfügeaktion über die Benutzeroberfläche des Browsers initiiert.

Das ursprüngliche Ziel dieses Ereignisses ist das [`Element`](/de/docs/Web/API/Element), das das beabsichtigte Ziel der Einfügeaktion war. Sie können dieses Ereignis auf der Schnittstelle [`Document`](/de/docs/Web/API/Document) abhören, um es in den Erfassungs- oder Bubbling-Phasen zu behandeln. Für vollständige Einzelheiten zu diesem Ereignis siehe die Seite zum [Element: paste Ereignis](/de/docs/Web/API/Element/paste_event).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandlereigenschaft.

```js
addEventListener("paste", (event) => {});

onpaste = (event) => {};
```

## Ereignistyp

Ein [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ClipboardEvent")}}

## Beispiele

Um informiert zu werden, wenn ein Benutzer Daten von seiner Zwischenablage in die Webseite einfügt, können Sie einen Handler zu Ihrer [`Document`](/de/docs/Web/API/Document)-Instanz mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzufügen, wie folgt:

```js
document.addEventListener("paste", (event) => {
  /* the session has shut down */
});
```

Alternativ können Sie die `Document.onpaste`-Ereignisbehandlereigenschaft verwenden, um einen Handler für das `paste`-Ereignis festzulegen:

```js
document.onpaste = (event) => {
  /* the session has shut down */
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Verwandte Ereignisse: [`copy`](/de/docs/Web/API/Document/copy_event), [`cut`](/de/docs/Web/API/Document/cut_event)
- Dieses Ereignis auf [`Element`](/de/docs/Web/API/Element) Ziele: [`paste`](/de/docs/Web/API/Element/paste_event)
- Dieses Ereignis auf [`Window`](/de/docs/Web/API/Window) Ziele: [`paste`](/de/docs/Web/API/Window/paste_event)
