---
title: "ServiceWorkerGlobalScope: contentdelete-Ereignis"
short-title: contentdelete
slug: Web/API/ServiceWorkerGlobalScope/contentdelete_event
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("Content Index API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`contentdelete`**-Ereignis der [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)-Schnittstelle wird ausgelöst, wenn ein Element vom Benutzeragenten aus dem indexierten Inhalt entfernt wird.

Dieses Ereignis ist nicht stornierbar und wird nicht weitergeleitet.

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

_Neben den unten aufgeführten Eigenschaften erbt diese Schnittstelle die Eigenschaften ihrer Elternschnittstelle, [`Event`](/de/docs/Web/API/Event)._

- [`id`](/de/docs/Web/API/ContentIndexEvent/id) {{ReadOnlyInline}}
  - : Ein String, der den gelöschten Inhaltsindex über seine `id` identifiziert.

## Beispiele

Das folgende Beispiel verwendet einen `contentdelete`-Ereignishandler, um zwischengespeicherte Inhalte zu entfernen, die sich auf das gelöschte Index-Element beziehen.

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
  // …
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Content Index API](/de/docs/Web/API/Content_Index_API)
- [Einführungsartikel über die Content Index API](https://developer.chrome.com/docs/capabilities/web-apis/content-indexing-api)
