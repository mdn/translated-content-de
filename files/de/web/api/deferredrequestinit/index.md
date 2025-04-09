---
title: DeferredRequestInit
slug: Web/API/DeferredRequestInit
l10n:
  sourceCommit: 31ba9f6da2dd1175250ece8d8d467d523e79b447
---

{{DefaultAPISidebar("fetchLater API")}}{{SeeCompatTable}}

Das **`DeferredRequestInit`**-Wörterbuch der [`fetchLater()` API](/de/docs/Web/API/fetchLater_API) repräsentiert die Optionsmenge, die zur Konfiguration einer verzögerten Fetch-Anfrage verwendet werden kann.

Das `DeferredRequestInit`-Objekt wird direkt als zweites Argument an den Aufruf der Funktion [`window.fetchLater()`](/de/docs/Web/API/Window/fetchLater) übergeben.

## Instanz-Eigenschaften

Dieses Wörterbuch erweitert das [`RequestInit`](/de/docs/Web/API/RequestInit)-Wörterbuch um die folgenden Eigenschaften:

- `activateAfter` {{optional_inline}}

  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der ein Timeout in Millisekunden anzeigt, nach dem die Fetch-Anfrage gesendet werden soll. Der Fetch kann früher beim Verlassen der Seite gesendet werden. Der _tatsächliche_ Sendezeitpunkt ist unbekannt, da der Browser möglicherweise länger oder kürzer wartet, um beispielsweise die Zusammenfassung verzögerter Fetches zu optimieren. Wenn die `activateAfter`-Eigenschaft nicht angegeben wird, wartet der verzögerte Fetch bis zum Ende des Seitenbesuchs (einschließlich des Betretens des {{Glossary("bfcache", "bfcache")}}).

### Ausnahmen

- `RangeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Tritt auf, wenn ein negativer Wert für `activateAfter` übergeben wird.

## Beispiele

### Einen `GET`-Request verzögern, bis die Seite zerstört oder der bfcache betreten wird

In diesem Beispiel wird kein `DeferredRequestInit`-Objekt bereitgestellt und kein Timeout verwendet:

```js
fetchLater("/send_beacon");
```

### Einen `POST`-Request für ungefähr 1 Minute verzögern

In diesem Beispiel erstellen wir ein [`Request`](/de/docs/Web/API/Request) und geben einen `activateAfter`-Wert an, um das Senden des Requests um 60.000 Millisekunden (oder eine Minute) zu verzögern:

```js
fetchLater({
  url: "/send_beacon"
  method: "POST"
  body: getBeaconData(),
}, {activateAfter: 60000 /* 1 minute */});
```

> [!NOTE]
> Der tatsächliche Sendezeitpunkt ist unbekannt, da der Browser möglicherweise für einen längeren oder kürzeren Zeitraum wartet, um zum Beispiel die Zusammenfassung verzögerter Fetches zu optimieren.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Fetch verwenden](/de/docs/Web/API/Fetch_API/Using_Fetch)
- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
