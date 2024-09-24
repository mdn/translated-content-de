---
title: "Dokument: paste-Event"
short-title: paste
slug: Web/API/Document/paste_event
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef}}

Das **`paste`**-Event wird ausgelöst, wenn der Benutzer eine Einfügeaktion über die Benutzeroberfläche des Browsers initiiert.

Das ursprüngliche Ziel dieses Events ist das {{domxref("Element")}}, das das beabsichtigte Ziel der Einfügeaktion war. Sie können auf dieses Event auf der {{domxref("Document")}}-Schnittstelle hören, um es in den Capture- oder Bubbling-Phasen zu behandeln. Für vollständige Details zu diesem Event siehe die Seite über das [Element: paste-Event](/de/docs/Web/API/Element/paste_event).

## Syntax

Verwenden Sie den Event-Namen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("paste", (event) => {});

onpaste = (event) => {};
```

## Eventtyp

Ein {{domxref("ClipboardEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("ClipboardEvent")}}

## Beispiele

Um informiert zu werden, wenn ein Benutzer Daten von seiner Zwischenablage auf die Webseite einfügt, können Sie einen Handler zu Ihrer {{domxref("Document")}}-Instanz mit {{domxref("EventTarget.addEventListener", "addEventListener()")}} hinzufügen, wie folgt:

```js
document.addEventListener("paste", (event) => {
  /* the session has shut down */
});
```

Alternativ können Sie die `Document.onpaste`-Event-Handler-Eigenschaft verwenden, um einen Handler für das `paste`-Event zu erstellen:

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

- Verwandte Events: {{domxref("Document/copy_event", "copy")}}, {{domxref("Document/cut_event", "cut")}}
- Dieses Event auf {{domxref("Element")}}-Zielobjekten: {{domxref("Element/paste_event", "paste")}}
- Dieses Event auf {{domxref("Window")}}-Zielobjekten: {{domxref("Window/paste_event", "paste")}}
