---
title: ContentIndexEvent
slug: Web/API/ContentIndexEvent
l10n:
  sourceCommit: 6c3bed9bcd275fd4ad714c4df0ed874e9bf87681
---

{{APIRef("Content Index API")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Die **`ContentIndexEvent`**-Schnittstelle der [Content Index](/de/docs/Web/API/Content_Index_API) definiert das Objekt, das das {{domxref("ServiceWorkerGlobalScope.contentdelete_event", 'contentdelete')}}-Ereignis repräsentiert.

Dieses Ereignis wird an den [global scope](/de/docs/Web/API/ServiceWorkerGlobalScope) eines {{domxref('ServiceWorker')}} gesendet. Es enthält die ID des indexierten Inhalts, der entfernt werden soll.

Das {{domxref("ServiceWorkerGlobalScope.contentdelete_event", 'contentdelete')}}-Ereignis wird nur ausgelöst, wenn die Löschung durch Interaktion mit der integrierten Benutzeroberfläche des Browsers erfolgt. Es wird nicht ausgelöst, wenn die Methode {{domxref('ContentIndex.delete')}} aufgerufen wird.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("ContentIndexEvent.ContentIndexEvent", "ContentIndexEvent()")}} {{Experimental_Inline}}
  - : Erstellt und gibt ein neues `ContentIndexEvent`-Objekt zurück, dessen Typ und andere Optionen wie angegeben konfiguriert sind.

## Instanz-Eigenschaften

_Zusätzlich zu den unten aufgeführten Eigenschaften erbt diese Schnittstelle die Eigenschaften ihrer übergeordneten Schnittstelle, {{domxref("ExtendableEvent")}}._

- {{domxref("ContentIndexEvent.id", "id")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein {{jsxref('String')}}, das den gelöschten Inhaltsindex über seine `id` identifiziert.

## Instanz-Methoden

_Obwohl `ContentIndexEvent` keine eigenen Methoden bietet, erbt es alle, die von seiner übergeordneten Schnittstelle, {{domxref("ExtendableEvent")}}, spezifiziert werden._

## Beispiele

Dieses Beispiel zeigt das [Service Worker](/de/docs/Web/API/ServiceWorker)-Skript, das auf das {{domxref("ServiceWorkerGlobalScope.contentdelete_event", 'contentdelete')}}-Ereignis hört und die entfernte Inhaltsindex-ID protokolliert.

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

- [Ein einführender Artikel über die Content Index API](https://developer.chrome.com/docs/capabilities/web-apis/content-indexing-api)
- [Service Worker API, zusammen mit Informationen über Cache und CacheStorage](/de/docs/Web/API/Service_Worker_API)
