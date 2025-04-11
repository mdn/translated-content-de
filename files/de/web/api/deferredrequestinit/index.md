---
title: DeferredRequestInit
slug: Web/API/DeferredRequestInit
l10n:
  sourceCommit: 8cea7d86ef44c0905506b87d051ea002ee518878
---

{{DefaultAPISidebar("fetchLater API")}}{{SeeCompatTable}}

Das **`DeferredRequestInit`**-Wörterbuch der [`fetchLater()` API](/de/docs/Web/API/fetchLater_API) repräsentiert die Gruppe von Optionen, die verwendet werden können, um eine verzögerte Fetch-Anfrage zu konfigurieren.

Das `DeferredRequestInit`-Objekt wird direkt in den Funktionsaufruf von [`window.fetchLater()`](/de/docs/Web/API/Window/fetchLater) als zweites Argument übergeben.

## Instanzeigenschaften

Dieses Wörterbuch erweitert das [`RequestInit`](/de/docs/Web/API/RequestInit)-Wörterbuch um die folgenden Eigenschaften:

- `activateAfter` {{optional_inline}}

  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der eine Timeout-Dauer in Millisekunden angibt, nach der die Fetch-Anfrage gesendet werden soll. Der Fetch kann früher gesendet werden, wenn zur nächsten Seite navigiert wird. Die _tatsächliche_ Sendezeit ist unbekannt, da der Browser möglicherweise eine längere oder kürzere Zeit wartet, zum Beispiel um die Batchverarbeitung verzögerter Fetches zu optimieren. Wenn die Eigenschaft `activateAfter` nicht bereitgestellt wird, wartet der verzögerte Fetch bis zum Ende des Seitenbesuchs (einschließlich Eintreten in die {{Glossary("bfcache", "bfcache")}}).

### Ausnahmen

- `RangeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein negativer `activateAfter` bereitgestellt wird.

## Beispiele

### Verzögern einer `GET`-Anfrage bis die Seite zerstört wird oder in die bfcache eintritt

In diesem Beispiel wird kein `DeferredRequestInit`-Objekt bereitgestellt und kein Timeout verwendet:

```js
fetchLater("/send_beacon");
```

### Verzögern einer `POST`-Anfrage um etwa 1 Minute

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
> Die tatsächliche Sendezeit ist unbekannt, da der Browser möglicherweise eine längere oder kürzere Zeit wartet, zum Beispiel um die Batchverarbeitung verzögerter Fetches zu optimieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Fetch](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
