---
title: "Fenster: fetchLater()-Methode"
short-title: fetchLater()
slug: Web/API/Window/fetchLater
l10n:
  sourceCommit: 31ba9f6da2dd1175250ece8d8d467d523e79b447
---

{{APIRef("fetchLater API")}}{{SeeCompatTable}}

Die **`fetchLater()`**-Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle erstellt eine verzögerte Anfrage.

Eine `fetchLater()`-Anfrage wird gesendet, sobald die Seite verlassen wird (sie wird zerstört oder geht in den {{Glossary("bfcache", "bfcache")}} über) oder nach einem angegebenen `activateAfter`-Timeout — je nachdem, was zuerst eintritt.

Die `fetchLater()`-Methode gibt ein [`FetchLaterResult`](/de/docs/Web/API/FetchLaterResult)-Objekt zurück, das einen einzigen `activated`-Wert enthält, der angibt, ob die Anfrage bereits gesendet wurde. Beachten Sie, dass die Methode nicht das Ergebnis des tatsächlichen Abrufs zurückgibt, wenn dies geschieht (da er oft gesendet wird, nachdem das Dokument zerstört wurde) und die gesamte Antwort des Abrufs, einschließlich des Körpers und der Header, ignoriert wird.

Anfragen, deren Körper ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) ist, können nicht verzögert werden.

Die `fetchLater()`-Methode wird durch die `connect-src`-Direktive der [Content Security Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) gesteuert und nicht durch die Direktive der abgerufenen Ressourcen.

## Syntax

```js-nolint
fetchLater(resource)
fetchLater(resource, options)
```

### Parameter

Die `fetchLater()`-Methode nimmt alle gleichen Parameter wie [`fetch()`](/de/docs/Web/API/Window/fetch) an, jedoch mit einer zusätzlichen `activateAfter`-Option.

- `resource`

  - : Dies definiert die Ressource, die Sie abrufen möchten. Identisch zu [`fetch()`](/de/docs/Web/API/Window/fetch) kann dies entweder sein:

    - Ein String oder ein anderes Objekt mit einem {{Glossary("stringifier", "Stringifier")}} — einschließlich eines [`URL`](/de/docs/Web/API/URL)-Objekts — das die URL der Ressource bereitstellt, die Sie abrufen möchten. Die URL kann relativ zur Basis-URL sein, die im Fenster-Kontext die [`baseURI`](/de/docs/Web/API/Node/baseURI) des Dokuments ist.
    - Ein [`Request`](/de/docs/Web/API/Request)-Objekt.

- `options` {{optional_inline}}

  - : Ein [`DeferredRequestInit`](/de/docs/Web/API/DeferredRequestInit)-Objekt, das beliebige benutzerdefinierte Einstellungen enthält, die Sie auf die Anfrage anwenden möchten, einschließlich eines `activateAfter`-Timeout-Werts, der definiert, wie lange das Ergebnis verzögert werden soll, bevor es gesendet wird.

### Ausnahmen

Die [gleichen Ausnahmen wie für `fetch()`](/de/docs/Web/API/Window/fetch#exceptions) können für `fetchLater()` auftreten, zusammen mit den folgenden zusätzlichen Ausnahmen:

- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Die Nutzung dieser Funktion wurde blockiert, weil das verfügbare Kontingent überschritten wurde. Weitere Details finden Sie unter [`fetchLater()` Kontingente](/de/docs/Web/API/fetchLater_API/fetchLater_quotas). Aufrufer von `fetchLater()` sollten defensiv sein und in fast allen Fällen `QuotaExceededError`-Fehler abfangen, insbesondere wenn sie JavaScript von Drittanbietern einbetten.

- `RangeError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn ein negativer `activateAfter`-Wert angegeben wird.

- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Zusätzlich zu den Gründen für `fetch()` wird diese Ausnahme auch für eine [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Anfrage ausgelöst (die nicht verzögert werden kann) oder bei der Verwendung von unzuverlässigen URLs (wie `http://`).

### Rückgabewert

Ein [`FetchLaterResult`](/de/docs/Web/API/FetchLaterResult), das eine `activated` boolesche Eigenschaft enthält, die anzeigt, ob die Anfrage bereits gesendet wurde.

> [!NOTE]
> Sobald die Abrufanfrage gesendet wird, ist ihre Antwort — einschließlich des Körpers und der Header — nicht verfügbar und wird ignoriert.

## Beispiele

Der Artikel über [`fetchLater()` Kontingente](/de/docs/Web/API/fetchLater_API/fetchLater_quotas) bietet Beispiele, wie die Kontingente angewendet werden.

### Verzögern einer `GET`-Anfrage, bis die Seite verlassen oder geschlossen wird

```js
fetchLater("/send_beacon");
```

### Verzögern einer `POST`-Anfrage für etwa eine Minute

In diesem Beispiel erstellen wir eine [`Request`](/de/docs/Web/API/Request) und geben einen `activateAfter`-Wert an, um das Senden der Anfrage für 60.000 Millisekunden (oder eine Minute) zu verzögern:

```js
fetchLater({
  url: "/send_beacon"
  method: "POST"
  body: getBeaconData(),
}, {activateAfter: 60000 /* 1 minute */});
```

> [!NOTE]
> Die tatsächliche Sendezeit ist unbekannt, da der Browser möglicherweise eine längere oder kürzere Zeit wartet, um beispielsweise das Batch-Prozesses verzögerter Abrufe zu optimieren.

### Verzögern einer `POST`-Anfrage für etwa eine Minute mit try/catch

Dasselbe Beispiel wie oben, jedoch ist es Best Practice, dies in einen try/catch-Block einzuschließen:

```js
try {
  fetchLater({
    url: "/send_beacon"
    method: "POST"
    body: getBeaconData(),
  }, {activateAfter: 60000 /* 1 minute */});
} catch (e) {
  if (e instanceOf QuotaExceededError) {
    // Handle the quota error
  } else {
    // Handle other errors
  }
}
```

### Verzögern einer `POST`-Anfrage für etwa eine Minute und Erstellen einer Funktion zur Überprüfung des Sendestatus

```js
const result = fetchLater("https://report.example.com", {
  method: "POST",
  body: JSON.stringify(myReport),
  activateAfter: 60000 /* 1 minute */,
});

function check_if_fetched() {
  return result.activated;
}
```

### Aktualisieren einer ausstehenden Anfrage

In diesem Beispiel verwenden wir einen [`AbortController`](/de/docs/Web/API/AbortController), um die Anfrage abzubrechen und neu zu erstellen:

```js
let beaconResult = null;
let beaconAbort = null;

function updateBeacon(data) {
  const pending = !beaconResult || !beaconResult.activated;
  if (pending && beaconAbort) {
    beaconAbort.abort();
  }

  createBeacon(data);
}

function createBeacon(data) {
  if (beaconResult && !beaconResult.activated) {
    // Avoid creating duplicated beacon if the previous one is still pending.
    return;
  }

  beaconAbort = new AbortController();
  beaconResult = fetchLater({
    url: data
    signal: beaconAbort.signal
  });
}
```

### Ungültige Beispiele

Jeder der folgenden Aufrufe von `fetchLater()` würde eine Ausnahme auslösen:

```js
// Only potentially trustworthy URLs are supported
fetchLater("http://untrusted.example.com");

// The length of the deferred request has to be known
fetchLater("https://origin.example.com", { body: someDynamicStream });

// Deferred fetching only works on active windows
const detachedWindow = iframe.contentWindow;
iframe.remove();
detachedWindow.fetchLater("https://origin.example.com");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`fetchLater()` API](/de/docs/Web/API/fetchLater_API)
- [`fetchLater()` Kontingente](/de/docs/Web/API/fetchLater_API/fetchLater_quotas)
- [`FetchLaterResult`](/de/docs/Web/API/FetchLaterResult)
- [Fetch API](/de/docs/Web/API/Fetch_API)
