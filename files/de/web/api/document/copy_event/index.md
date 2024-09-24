---
title: "Dokument: Kopiervorgang Ereignis"
short-title: kopieren
slug: Web/API/Document/copy_event
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef}}

Das **`copy`** Ereignis wird ausgelöst, wenn der Benutzer über die Benutzeroberfläche des Browsers einen Kopiervorgang initiiert.

Das ursprüngliche Ziel dieses Ereignisses ist das {{domxref("Element")}}, das das beabsichtigte Ziel der Kopieraktion war. Sie können auf dieses Ereignis in der {{domxref("Document")}}-Schnittstelle hören, um es in den Erfassungs- oder Bubbling-Phasen zu behandeln. Für vollständige Details zu diesem Ereignis lesen Sie bitte die Seite zum [Element: Kopiervorgang Ereignis](/de/docs/Web/API/Element/copy_event).

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("copy", (event) => {});

oncopy = (event) => {};
```

## Ereignistyp

Ein {{domxref("ClipboardEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("ClipboardEvent")}}

## Beispiele

Um informiert zu werden, wenn ein Benutzer Daten von der Webseite in seine Zwischenablage kopiert, können Sie Ihrem {{domxref("Document")}}-Instanz einen Handler hinzufügen, indem Sie {{domxref("EventTarget.addEventListener", "addEventListener()")}} verwenden, wie folgt:

```js
document.addEventListener("copy", (event) => {
  /* the session has shut down */
});
```

Alternativ können Sie die `Document.oncopy` Ereignishandler-Eigenschaft verwenden, um einen Handler für das `copy` Ereignis festzulegen:

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

- Verwandte Ereignisse: {{domxref("Document/cut_event", "cut")}}, {{domxref("Document/paste_event", "paste")}}
- Dieses Ereignis auf {{domxref("Element")}}-Zielen: {{domxref("Element/copy_event", "copy")}}
- Dieses Ereignis auf {{domxref("Window")}}-Zielen: {{domxref("Window/copy_event", "copy")}}
