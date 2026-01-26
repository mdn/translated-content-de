---
title: DeferredRequestInit
slug: Web/API/DeferredRequestInit
l10n:
  sourceCommit: 8c1bc8d99fc8301fbbe874f6dcf8d41a9f4fe5fb
---

{{DefaultAPISidebar("Fetch API")}}{{SeeCompatTable}}

Das **`DeferredRequestInit`** Wörterbuch der [Fetch API](/de/docs/Web/API/Fetch_API) repräsentiert die Menge an Optionen, die verwendet werden können, um eine verzögerte Fetch-Anfrage zu konfigurieren.

Das `DeferredRequestInit`-Objekt wird direkt in den Funktionsaufruf [`window.fetchLater()`](/de/docs/Web/API/Window/fetchLater) als zweites Argument übergeben.

## Instanzeigenschaften

Dieses Wörterbuch erweitert das [`RequestInit`](/de/docs/Web/API/RequestInit) Wörterbuch durch die Hinzufügung der folgenden Eigenschaften:

- `activateAfter` {{optional_inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der ein Timeout in Millisekunden angibt, nach dem die Fetch-Anfrage gesendet werden sollte. Der Fetch kann früher gesendet werden, wenn die Navigation verlassen wird. Der _tatsächliche_ Versandzeitpunkt ist unbekannt, da der Browser möglicherweise länger oder kürzer wartet, beispielsweise um die Bündelung von verzögerten Fetches zu optimieren. Wenn die `activateAfter`-Eigenschaft nicht angegeben ist, wartet der verzögerte Fetch bis zum Ende des Seitenbesuchs (einschließlich des Eintritts in den {{Glossary("bfcache", "bfcache")}}).

### Ausnahmen

- `RangeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Tritt auf, wenn ein negativer `activateAfter` bereitgestellt wird.

## Beispiele

### Eine `GET`-Anfrage hinauszögern, bis die Seite zerstört oder der bfcache betreten wird

In diesem Beispiel wird kein `DeferredRequestInit`-Objekt bereitgestellt und es wird kein Timeout verwendet:

```js
fetchLater("/send_beacon");
```

### Eine `POST`-Anfrage für ungefähr 1 Minute hinauszögern

In diesem Beispiel erstellen wir eine [`Request`](/de/docs/Web/API/Request) und geben einen `activateAfter`-Wert an, um das Senden der Anfrage um 60.000 Millisekunden (oder eine Minute) zu verzögern:

```js
fetchLater("/send_beacon", {
  method: "POST",
  body: getBeaconData(),
  activateAfter: 60000, // 1 minute
});
```

> [!NOTE]
> Der tatsächliche Sendezeitpunkt ist unbekannt, da der Browser möglicherweise eine längere oder kürzere Zeitspanne wartet, beispielsweise um die Bündelung von verzögerten Fetches zu optimieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Deferred Fetch](/de/docs/Web/API/Fetch_API/Using_Deferred_Fetch)
- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
