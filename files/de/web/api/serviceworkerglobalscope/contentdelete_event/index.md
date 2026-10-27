---
title: "ServiceWorkerGlobalScope: contentdelete-Ereignis"
short-title: contentdelete
slug: Web/API/ServiceWorkerGlobalScope/contentdelete_event
l10n:
  sourceCommit: 5019c0ab87d0e75a5505c0d12aac1e135e1877d7
---

{{APIRef("Content Index API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`contentdelete`**-Ereignis der Schnittstelle [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope) wird ausgelöst, wenn der User Agent einen Eintrag aus dem indexierten Inhalt entfernt.

Dieses Ereignis kann nicht abgebrochen werden und steigt nicht im DOM-Baum auf.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("contentdelete", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
oncontentdelete = (event) => { }
```

## Ereignistyp

Ein [`ContentIndexEvent`](/de/docs/Web/API/ContentIndexEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ContentIndexEvent")}}

## Beispiele

Das folgende Beispiel verwendet einen `contentdelete`-Event-Handler, um zwischengespeicherte Inhalte zu entfernen, die mit dem gelöschten Indexeintrag zusammenhängen.

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

Sie können den Event-Handler auch über die Eigenschaft `oncontentdelete` einrichten. Beachten Sie jedoch, dass dadurch gegebenenfalls andere über `oncontentdelete` hinzugefügte Event-Listener ersetzt werden:

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
- [Einführender Artikel zur Content Index API](https://developer.chrome.com/docs/capabilities/web-apis/content-indexing-api)
