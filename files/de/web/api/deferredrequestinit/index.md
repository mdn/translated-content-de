---
title: DeferredRequestInit
slug: Web/API/DeferredRequestInit
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{DefaultAPISidebar("fetchLater API")}}{{SeeCompatTable}}

Das **`DeferredRequestInit`**-Wörterbuch der [`fetchLater()` API](/de/docs/Web/API/fetchLater_API) repräsentiert die Menge an Optionen, die verwendet werden können, um eine verzögerte Fetch-Anfrage zu konfigurieren.

Das `DeferredRequestInit`-Objekt wird direkt als zweites Argument in den Funktionsaufruf von [`window.fetchLater()`](/de/docs/Web/API/Window/fetchLater) übergeben.

## Instanzeigenschaften

Dieses Wörterbuch erweitert das [`RequestInit`](/de/docs/Web/API/RequestInit)-Wörterbuch um die folgenden Eigenschaften:

- `activateAfter` {{optional_inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der ein Timeout in Millisekunden angibt, nach dem die Fetch-Anfrage gesendet werden soll. Die Anfrage kann früher gesendet werden, wenn die Seite verlassen wird. Der _tatsächliche_ Sendezeitpunkt ist unbekannt, da der Browser möglicherweise eine längere oder kürzere Zeit wartet, z. B. um die Bündelung von verzögerten Fetches zu optimieren. Wenn die `activateAfter`-Eigenschaft nicht angegeben wird, wartet der verzögerte Fetch bis zum Ende des Seitenbesuchs (einschließlich dem Eintritt in den {{Glossary("bfcache", "bfcache")}}).

### Ausnahmen

- `RangeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein negativer `activateAfter`-Wert angegeben wird.

## Beispiele

### Verzögern einer `GET`-Anfrage bis die Seite zerstört wird oder in den bfcache eintritt

In diesem Beispiel wird kein `DeferredRequestInit`-Objekt bereitgestellt und kein Timeout verwendet:

```js
fetchLater("/send_beacon");
```

### Verzögern einer `POST`-Anfrage um etwa 1 Minute

In diesem Beispiel erstellen wir eine [`Request`](/de/docs/Web/API/Request) und geben einen `activateAfter`-Wert an, um das Senden der Anfrage um 60.000 Millisekunden (oder eine Minute) zu verzögern:

```js
fetchLater("/send_beacon", {
  method: "POST",
  body: getBeaconData(),
  activateAfter: 60000, // 1 minute
});
```

> [!NOTE]
> Der tatsächliche Sendezeitpunkt ist unbekannt, da der Browser möglicherweise eine längere oder kürzere Zeit wartet, zum Beispiel um die Bündelung von verzögerten Fetches zu optimieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Fetching verwenden](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
