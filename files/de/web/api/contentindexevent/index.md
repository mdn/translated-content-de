---
title: ContentIndexEvent
slug: Web/API/ContentIndexEvent
l10n:
  sourceCommit: 6c3bed9bcd275fd4ad714c4df0ed874e9bf87681
---

{{APIRef("Content Index API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Die **`ContentIndexEvent`**-Schnittstelle der [Content Index API](/de/docs/Web/API/Content_Index_API) definiert das Objekt, das das [`contentdelete`](/de/docs/Web/API/ServiceWorkerGlobalScope/contentdelete_event)-Ereignis repräsentiert.

Dieses Ereignis wird an den [globalen Bereich](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) gesendet. Es enthält die ID des indizierten Inhalts, der entfernt werden soll.

Das [`contentdelete`](/de/docs/Web/API/ServiceWorkerGlobalScope/contentdelete_event)-Ereignis wird nur ausgelöst, wenn die Löschung durch Interaktion mit der integrierten Benutzeroberfläche des Browsers erfolgt. Es wird nicht ausgelöst, wenn die Methode [`ContentIndex.delete`](/de/docs/Web/API/ContentIndex/delete) aufgerufen wird.

{{InheritanceDiagram}}

## Konstruktor

- [`ContentIndexEvent()`](/de/docs/Web/API/ContentIndexEvent/ContentIndexEvent) {{Experimental_Inline}}
  - : Erstellt und gibt ein neues `ContentIndexEvent`-Objekt zurück, dessen Typ und andere Optionen wie angegeben konfiguriert sind.

## Instanz-Eigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften erbt diese Schnittstelle die Eigenschaften ihrer Elternschnittstelle, [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent)._

- [`id`](/de/docs/Web/API/ContentIndexEvent/id) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein {{jsxref('String')}}, der den gelöschten Content-Index über seine `id` identifiziert.

## Instanz-Methoden

_Obwohl `ContentIndexEvent` keine eigenen Methoden anbietet, erbt es alle von seiner Elternschnittstelle, [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent), angegebenen._

## Beispiele

Dieses Beispiel zeigt das Skript eines [Service Workers](/de/docs/Web/API/ServiceWorker), das auf das [`contentdelete`](/de/docs/Web/API/ServiceWorkerGlobalScope/contentdelete_event)-Ereignis hört und die ID des entfernten Content-Indexes protokolliert.

```js
self.addEventListener("contentdelete", (event) => {
  console.log(event.id);

  // logs content index id, which can then be used to determine what content to delete from your cache
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein einführender Artikel zur Content Index API](https://developer.chrome.com/docs/capabilities/web-apis/content-indexing-api)
- [Service Worker API, zusammen mit Informationen über Cache und CacheStorage](/de/docs/Web/API/Service_Worker_API)
