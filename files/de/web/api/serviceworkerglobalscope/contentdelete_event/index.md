---
title: "ServiceWorkerGlobalScope: contentdelete-Ereignis"
short-title: contentdelete
slug: Web/API/ServiceWorkerGlobalScope/contentdelete_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Content Index API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`contentdelete`**-Ereignis der [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)-Schnittstelle wird ausgelöst, wenn ein Element über den User-Agent aus dem indexierten Inhalt entfernt wird.

Dieses Ereignis ist nicht abbruchfähig und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("contentdelete", (event) => { })

oncontentdelete = (event) => { }
```

## Ereignistyp

Ein [`ContentIndexEvent`](/de/docs/Web/API/ContentIndexEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ContentIndexEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften erbt diese Schnittstelle die Eigenschaften ihrer Elternschnittstelle, [`Event`](/de/docs/Web/API/Event)._

- [`id`](/de/docs/Web/API/ContentIndexEvent/id) {{ReadOnlyInline}}
  - : Ein String, der den gelöschten Inhaltsindex über dessen `id` identifiziert.

## Beispiele

Das folgende Beispiel verwendet einen `contentdelete`-Ereignis-Handler, um im Cache gespeicherten Inhalt im Zusammenhang mit dem gelöschten Indexelement zu entfernen.

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

Sie können auch den Ereignis-Handler über die `oncontentdelete`-Eigenschaft einrichten:

```js
self.oncontentdelete = (event) => {
  // …
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Content Index API](/de/docs/Web/API/Content_Index_API)
- [Ein einführender Artikel zur Content Index API](https://developer.chrome.com/docs/capabilities/web-apis/content-indexing-api)
