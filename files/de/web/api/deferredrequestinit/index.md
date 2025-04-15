---
title: DeferredRequestInit
slug: Web/API/DeferredRequestInit
l10n:
  sourceCommit: 6554598011aad3c338b589ffb2dcec37ae6595c1
---

{{DefaultAPISidebar("fetchLater API")}}{{SeeCompatTable}}

Das **`DeferredRequestInit`** Wörterbuch der [`fetchLater()` API](/de/docs/Web/API/fetchLater_API) repräsentiert die Menge von Optionen, die verwendet werden können, um eine verzögerte Fetch-Anfrage zu konfigurieren.

Das `DeferredRequestInit`-Objekt wird direkt als zweites Argument in den Funktionsaufruf von [`window.fetchLater()`](/de/docs/Web/API/Window/fetchLater) übergeben.

## Instanzeigenschaften

Dieses Wörterbuch erweitert das [`RequestInit`](/de/docs/Web/API/RequestInit) Wörterbuch um die folgenden Eigenschaften:

- `activateAfter` {{optional_inline}}

  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der eine Zeitüberschreitung in Millisekunden angibt, nach denen die Fetch-Anfrage gesendet werden sollte. Der Fetch kann früher gesendet werden, wenn die Seite verlassen wird. Die _tatsächliche_ Sendezeit ist unbekannt, da der Browser möglicherweise länger oder kürzer wartet, um beispielsweise die Bündelung von verzögerten Fetches zu optimieren. Wenn die `activateAfter`-Eigenschaft nicht angegeben wird, wartet der verzögerte Fetch bis zum Ende des Seitenbesuchs (einschließlich des Eintritts in den {{Glossary("bfcache", "bfcache")}}).

### Ausnahmen

- `RangeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein negativer `activateAfter`-Wert angegeben wird.

## Beispiele

### Ein `GET`-Anfrage verzögern, bis die Seite zerstört oder in den bfcache versetzt wird

In diesem Beispiel wird kein `DeferredRequestInit`-Objekt bereitgestellt und kein Timeout verwendet:

```js
fetchLater("/send_beacon");
```

### Eine `POST`-Anfrage für ca. 1 Minute verzögern

In diesem Beispiel erstellen wir eine [`Request`](/de/docs/Web/API/Request) und geben einen `activateAfter`-Wert an, um das Senden der Anfrage um 60.000 Millisekunden (oder eine Minute) zu verzögern:

```js
fetchLater("/send_beacon", {
  method: "POST",
  body: getBeaconData(),
  activateAfter: 60000, // 1 minute
});
```

> [!NOTE]
> Die tatsächliche Sendezeit ist unbekannt, da der Browser möglicherweise für eine längere oder kürzere Zeit wartet, um beispielsweise die Bündelung von verzögerten Fetches zu optimieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using Fetch](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
