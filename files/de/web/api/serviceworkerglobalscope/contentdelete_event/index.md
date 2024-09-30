---
title: "ServiceWorkerGlobalScope: contentdelete-Ereignis"
short-title: contentdelete
slug: Web/API/ServiceWorkerGlobalScope/contentdelete_event
l10n:
  sourceCommit: 6c3bed9bcd275fd4ad714c4df0ed874e9bf87681
---

{{APIRef("Content Index API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`contentdelete`**-Ereignis des [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)-Interfaces wird ausgelöst, wenn ein Element vom Nutzeragenten aus dem indizierten Inhalt entfernt wird.

Dieses Ereignis kann nicht abgebrochen werden und löst keine Bubbling aus.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("contentdelete", (event) => {});

oncontentdelete = (event) => {};
```

## Ereignistyp

Ein [`ContentIndexEvent`](/de/docs/Web/API/ContentIndexEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("ContentIndexEvent")}}

## Ereigniseigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften erbt dieses Interface die Eigenschaften seines übergeordneten Interfaces, [`Event`](/de/docs/Web/API/Event)._

- [`id`](/de/docs/Web/API/ContentIndexEvent/id) {{ReadOnlyInline}}
  - : Ein String, der den gelöschten Inhaltsindex über seine `id` identifiziert.

## Beispiele

Das folgende Beispiel verwendet einen `contentdelete`-Ereignis-Handler, um zwischengespeicherte Inhalte im Zusammenhang mit dem gelöschten Indexelement zu entfernen.

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

Sie können den Ereignis-Handler auch über die `oncontentdelete`-Eigenschaft einrichten:

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
