---
title: "Dokument: paste-Ereignis"
short-title: paste
slug: Web/API/Document/paste_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef}}

Das **`paste`**-Ereignis wird ausgelöst, wenn der Benutzer eine Einfügeaktion über die Benutzeroberfläche des Browsers initiiert.

Das ursprüngliche Ziel für dieses Ereignis ist das [`Element`](/de/docs/Web/API/Element), das das beabsichtigte Ziel der Einfügeaktion war. Sie können dieses Ereignis auf der [`Document`](/de/docs/Web/API/Document)-Schnittstelle abhören, um es in den Capture- oder Bubbling-Phasen zu behandeln. Für vollständige Details zu diesem Ereignis siehe die Seite über das [Element: paste-Ereignis](/de/docs/Web/API/Element/paste_event).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("paste", (event) => { })

onpaste = (event) => { }
```

## Ereignistyp

Ein [`ClipboardEvent`](/de/docs/Web/API/ClipboardEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ClipboardEvent")}}

## Beispiele

Um informiert zu werden, wenn ein Benutzer Daten aus seiner Zwischenablage auf die Webseite einfügt, können Sie einen Handler zu Ihrer [`Document`](/de/docs/Web/API/Document)-Instanz mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) hinzufügen, wie folgt:

```js
document.addEventListener("paste", (event) => {
  /* the session has shut down */
});
```

Alternativ können Sie die `Document.onpaste`-Ereignishandler-Eigenschaft verwenden, um einen Handler für das `paste`-Ereignis festzulegen:

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
- Dieses Ereignis bei [`Element`](/de/docs/Web/API/Element)-Zielen: [`paste`](/de/docs/Web/API/Element/paste_event)
- Dieses Ereignis bei [`Window`](/de/docs/Web/API/Window)-Zielen: [`paste`](/de/docs/Web/API/Window/paste_event)
