---
title: "ServiceWorkerGlobalScope: contentdelete Ereignis"
short-title: contentdelete
slug: Web/API/ServiceWorkerGlobalScope/contentdelete_event
l10n:
  sourceCommit: 6c3bed9bcd275fd4ad714c4df0ed874e9bf87681
---

{{APIRef("Content Index API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`contentdelete`** Ereignis des {{domxref("ServiceWorkerGlobalScope")}} Interfaces wird ausgelöst, wenn ein Element durch den Benutzeragenten aus dem indexierten Inhalt entfernt wird.

Dieses Ereignis ist nicht abbrechbar und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("contentdelete", (event) => {});

oncontentdelete = (event) => {};
```

## Ereignistyp

Ein {{domxref("ContentIndexEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("ContentIndexEvent")}}

## Ereigniseigenschaften

_Neben den unten aufgeführten Eigenschaften erbt dieses Interface die Eigenschaften seines übergeordneten Interfaces, {{domxref("Event")}}._

- {{domxref("ContentIndexEvent.id", "id")}} {{ReadOnlyInline}}
  - : Eine Zeichenkette, die den gelöschten Inhaltsindex über seine `id` identifiziert.

## Beispiele

Das folgende Beispiel verwendet einen `contentdelete`-Ereignis-Handler, um zwischengespeicherte Inhalte zu entfernen, die mit dem gelöschten Indexelement verbunden sind.

```js
self.addEventListener("contentdelete", (event) => {
  const deletion = caches
    .open("cache-name")
    .then((cache) =>
      Promise.all([
        cache.delete(`/icon/${event.id}`),
        cache.delete(`/content/${event.id}`),
      ]),
    );
  event.waitUntil(deletion);
});
```

Sie können den Ereignis-Handler auch über die Eigenschaft `oncontentdelete` einrichten:

```js
self.oncontentdelete = (event) => {
  // ...
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Content Index API](/de/docs/Web/API/Content_Index_API)
- [Ein einführender Artikel zur Content Index API](https://developer.chrome.com/docs/capabilities/web-apis/content-indexing-api)
