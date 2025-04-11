---
title: DeferredRequestInit
slug: Web/API/DeferredRequestInit
l10n:
  sourceCommit: 5fad0829b5070d04993a57af8c276f5e35da3ed2
---

{{DefaultAPISidebar("fetchLater API")}}{{SeeCompatTable}}

Das **`DeferredRequestInit`**-Wörterbuch der [`fetchLater()` API](/de/docs/Web/API/fetchLater_API) repräsentiert die Menge von Optionen, die verwendet werden können, um eine verzögerte Fetch-Anfrage zu konfigurieren.

Das `DeferredRequestInit`-Objekt wird direkt als zweites Argument in den Funktionsaufruf von [`window.fetchLater()`](/de/docs/Web/API/Window/fetchLater) übergeben.

## Instanz-Eigenschaften

Dieses Wörterbuch erweitert das [`RequestInit`](/de/docs/Web/API/RequestInit)-Wörterbuch um die folgenden Eigenschaften:

- `activateAfter` {{optional_inline}}

  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), das ein Timeout in Millisekunden angibt, nach dem die Fetch-Anfrage gesendet werden soll. Die Anfrage kann früher gesendet werden, wenn die Seite verlassen wird. Der tatsächliche Sendezeitpunkt ist unbekannt, da der Browser möglicherweise länger oder kürzer wartet, um beispielsweise das Zusammenfassen von verzögerten Fetches zu optimieren. Wenn die `activateAfter`-Eigenschaft nicht angegeben ist, wartet das verzögerte Fetch bis zum Ende des Seitenbesuchs (einschließlich Eintritt in den {{Glossary("bfcache", "bfcache")}}).

### Ausnahmen

- `RangeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein negativer `activateAfter`-Wert angegeben wird.

## Beispiele

### Verzögern einer `GET`-Anfrage bis die Seite zerstört oder in den bfcache aufgenommen wird

In diesem Beispiel wird kein `DeferredRequestInit`-Objekt bereitgestellt und kein Timeout verwendet:

```js
fetchLater("/send_beacon");
```

### Verzögern einer `POST`-Anfrage für ca. 1 Minute

In diesem Beispiel erstellen wir einen [`Request`](/de/docs/Web/API/Request) und geben einen `activateAfter`-Wert an, um das Senden der Anfrage um 60.000 Millisekunden (oder eine Minute) zu verzögern:

```js
fetchLater(
  {
    url: "/send_beacon",
    method: "POST",
    body: getBeaconData(),
  },
  {
    activateAfter: 60000, // 1 minute
  },
);
```

> [!NOTE]
> Der tatsächliche Sendezeitpunkt ist unbekannt, da der Browser möglicherweise länger oder kürzer wartet, um beispielsweise das Zusammenfassen von verzögerten Fetches zu optimieren.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Verwendung von Fetch](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [ServiceWorker-API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
