---
title: "ServiceWorkerGlobalScope: contentdelete-Ereignis"
short-title: contentdelete
slug: Web/API/ServiceWorkerGlobalScope/contentdelete_event
l10n:
  sourceCommit: 6c3bed9bcd275fd4ad714c4df0ed874e9bf87681
---

{{APIRef("Content Index API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`contentdelete`**-Ereignis des [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)-Interfaces wird ausgelöst, wenn ein Element durch den Benutzeragenten aus dem indizierten Inhalt entfernt wird.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("contentdelete", (event) => {});

oncontentdelete = (event) => {};
```

## Ereignistyp

Ein [`ContentIndexEvent`](/de/docs/Web/API/ContentIndexEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ContentIndexEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgelisteten Eigenschaften erbt dieses Interface die Eigenschaften seines Eltern-Interfaces, [`Event`](/de/docs/Web/API/Event)._

- [`id`](/de/docs/Web/API/ContentIndexEvent/id) {{ReadOnlyInline}}
  - : Ein String, der den gelöschten Inhaltsindex über seine `id` identifiziert.

## Beispiele

Das folgende Beispiel verwendet einen `contentdelete`-Ereignishandler, um zwischengespeicherte Inhalte zu entfernen, die mit dem gelöschten Indexelement zusammenhängen.

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

Sie können den Ereignishandler auch über die `oncontentdelete`-Eigenschaft einrichten:

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
- [Ein einführender Artikel über die Content Index API](https://developer.chrome.com/docs/capabilities/web-apis/content-indexing-api)
