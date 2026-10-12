---
title: DeferredRequestInit
slug: Web/API/DeferredRequestInit
l10n:
  sourceCommit: 2eb88572e8e972bb87a446f17a4a9a23de0108b5
---

{{DefaultAPISidebar("Fetch API")}}{{SeeCompatTable}}

Das **`DeferredRequestInit`**-Dictionary der [Fetch API](/de/docs/Web/API/Fetch_API) enthält die Optionen, mit denen sich eine verzögerte Fetch-Anfrage konfigurieren lässt.

Das `DeferredRequestInit`-Objekt wird als zweites Argument direkt an die Funktion [`window.fetchLater()`](/de/docs/Web/API/Window/fetchLater) übergeben.

## Instanzeigenschaften

Dieses Dictionary erweitert das [`RequestInit`](/de/docs/Web/API/RequestInit)-Dictionary um die folgende Eigenschaft:

- `activateAfter` {{optional_inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der eine Zeitspanne in Millisekunden angibt, nach deren Ablauf die Fetch-Anfrage gesendet werden soll. Beim Verlassen der Seite kann die Anfrage früher gesendet werden. Der _tatsächliche_ Sendezeitpunkt ist unbekannt, da der Browser länger oder kürzer warten kann, beispielsweise um mehrere verzögerte Fetch-Anfragen gebündelt zu senden. Wenn die Eigenschaft `activateAfter` nicht angegeben wird, wartet die verzögerte Fetch-Anfrage bis zum Ende des Seitenbesuchs (einschließlich des Wechsels in den {{Glossary("bfcache", "bfcache")}}).

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn ein negativer Wert für `activateAfter` angegeben wird.

## Beispiele

### Eine `GET`-Anfrage verzögern, bis die Seite zerstört wird oder in den bfcache wechselt

In diesem Beispiel wird kein `DeferredRequestInit`-Objekt angegeben und keine Zeitspanne festgelegt:

```js
fetchLater("/send_beacon");
```

### Eine `POST`-Anfrage um etwa eine Minute verzögern

In diesem Beispiel erstellen wir ein [`Request`](/de/docs/Web/API/Request)-Objekt und geben für `activateAfter` einen Wert an, um das Senden der Anfrage um 60.000 Millisekunden (also eine Minute) zu verzögern:

```js
fetchLater("/send_beacon", {
  method: "POST",
  body: getBeaconData(),
  activateAfter: 60000, // 1 minute
});
```

> [!NOTE]
> Der tatsächliche Sendezeitpunkt ist unbekannt, da der Browser länger oder kürzer warten kann, beispielsweise um mehrere verzögerte Fetch-Anfragen gebündelt zu senden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Deferred Fetch](/de/docs/Web/API/Fetch_API/Using_Deferred_Fetch)
- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
