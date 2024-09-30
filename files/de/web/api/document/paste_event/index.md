---
title: "Document: paste Event"
short-title: paste
slug: Web/API/Document/paste_event
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef}}

Das **`paste`**-Ereignis wird ausgelöst, wenn der Benutzer über die Benutzeroberfläche des Browsers eine Einfügeaktion initiiert.

Das ursprüngliche Ziel für dieses Ereignis ist das [`Element`](/de/docs/Web/API/Element), das das beabsichtigte Ziel der Einfügeaktion war. Sie können dieses Ereignis auf der [`Document`](/de/docs/Web/API/Document)-Schnittstelle abhören, um es in den Capture- oder Bubbling-Phasen zu verarbeiten. Für vollständige Details zu diesem Ereignis siehe die Seite zum [Element: paste Event](/de/docs/Web/API/Element/paste_event).

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

Um benachrichtigt zu werden, wenn ein Benutzer Daten von seiner Zwischenablage auf die Webseite einfügt, können Sie einen Handler zu Ihrer [`Document`](/de/docs/Web/API/Document)-Instanz mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzufügen, wie hier gezeigt:

```js
document.addEventListener("paste", (event) => {
  /* the session has shut down */
});
```

Alternativ können Sie die `Document.onpaste`-Ereignis-Handler-Eigenschaft verwenden, um einen Handler für das `paste`-Ereignis festzulegen:

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
- Dieses Ereignis auf [`Element`](/de/docs/Web/API/Element) Targets: [`paste`](/de/docs/Web/API/Element/paste_event)
- Dieses Ereignis auf [`Window`](/de/docs/Web/API/Window) Targets: [`paste`](/de/docs/Web/API/Window/paste_event)
