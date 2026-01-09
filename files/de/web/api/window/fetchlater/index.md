---
title: "Window: fetchLater() Methode"
short-title: fetchLater()
slug: Web/API/Window/fetchLater
l10n:
  sourceCommit: 8c1bc8d99fc8301fbbe874f6dcf8d41a9f4fe5fb
---

{{APIRef("Fetch API")}}{{SeeCompatTable}}

Die **`fetchLater()`**-Methode der [`Window`](/de/docs/Web/API/Window) Schnittstelle erstellt einen verzögerten Abruf.

Eine `fetchLater()`-Anfrage wird entweder gesendet, sobald die Seite verlassen wird (sie wird zerstört oder tritt in den {{Glossary("bfcache", "bfcache")}} ein), oder nach einem angegebenen `activateAfter`-Timeout — je nachdem, was zuerst eintritt.

Die `fetchLater()`-Methode gibt ein [`FetchLaterResult`](/de/docs/Web/API/FetchLaterResult) Objekt zurück, das einen einzigen `activated`-Wert enthält, der angibt, ob die Anfrage bereits gesendet wurde. Beachten Sie, dass die Methode nicht das Ergebnis des tatsächlichen Abrufs zurückgibt, wenn dieser erfolgt (da er oft gesendet wird, nachdem das Dokument zerstört wurde), und die gesamte Antwort des Abrufs, einschließlich des Inhalts und der Header, ignoriert wird.

Anfragen, deren Inhalt ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) ist, können nicht verzögert werden.

Die `fetchLater()`-Methode wird durch die `connect-src`-[Content Security Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) Direktive gesteuert und nicht durch die Direktive der abgerufenen Ressourcen.

## Syntax

```js-nolint
fetchLater(resource)
fetchLater(resource, options)
```

### Parameter

Die `fetchLater()`-Methode akzeptiert dieselben Parameter wie [`fetch()`](/de/docs/Web/API/Window/fetch), jedoch mit einer zusätzlichen `activateAfter`-Option.

- `resource`
  - : Dies definiert die Ressource, die Sie abrufen möchten. Identisch zu [`fetch()`](/de/docs/Web/API/Window/fetch), kann dies entweder sein:
    - Ein String oder ein anderes Objekt mit einem {{Glossary("stringifier", "stringifier")}} — einschließlich eines [`URL`](/de/docs/Web/API/URL) Objekts —, das die URL der Ressource bereitstellt, die Sie abrufen möchten. Die URL kann relativ zur Basis-URL sein, die in einem Fensterkontext das [`baseURI`](/de/docs/Web/API/Node/baseURI) des Dokuments ist.
    - Ein [`Request`](/de/docs/Web/API/Request) Objekt.

- `options` {{optional_inline}}
  - : Ein [`DeferredRequestInit`](/de/docs/Web/API/DeferredRequestInit) Objekt, das alle benutzerdefinierten Einstellungen enthält, die Sie auf die Anfrage anwenden möchten, einschließlich eines `activateAfter` Timeout-Werts, der definiert, wie lange das Ergebnis verzögert werden soll, bevor es gesendet wird.

### Ausnahmen

Die [gleichen Ausnahmen wie für `fetch()`](/de/docs/Web/API/Window/fetch#exceptions) können für `fetchLater()` ausgelöst werden, zusammen mit den folgenden zusätzlichen Ausnahmen:

- [`QuotaExceededError`](/de/docs/Web/API/QuotaExceededError)
  - : Die Nutzung dieser Funktion wurde blockiert, da das verfügbare Kontingent überschritten wurde. Sehen Sie sich die [`fetchLater()`-Kontingente](/de/docs/Web/API/Fetch_API/Using_Deferred_Fetch#quotas) für weitere Details an. Aufrufer von `fetchLater()` sollten defensiv sein und `QuotaExceededError`-Fehler in fast allen Fällen abfangen, insbesondere wenn sie Drittanbieter-JavaScript einbetten.

- `RangeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein negativer `activateAfter`-Wert angegeben wird.

- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Zusätzlich zu den Gründen für `fetch()` wird diese Ausnahme auch für eine [`ReadableStream`](/de/docs/Web/API/ReadableStream) Anfrage ausgelöst (die nicht verzögert werden kann) oder für die Verwendung von unsicheren URLs (wie `http://`).

### Rückgabewert

Ein [`FetchLaterResult`](/de/docs/Web/API/FetchLaterResult) Objekt, das eine `activated`-boolesche Eigenschaft enthält, die angibt, ob die Anfrage bereits gesendet wurde.

> [!NOTE]
> Nachdem die Abrufanforderung gesendet wurde, wird ihre Antwort — einschließlich des Inhalts und der Header — nicht verfügbar gemacht und ignoriert.

## Beispiele

Der Artikel [`fetchLater()`-Kontingente](/de/docs/Web/API/Fetch_API/Using_Deferred_Fetch) bietet Beispiele dafür, wie die Kontingente angewendet werden.

### Verzögern einer `GET`-Anfrage, bis die Seite verlassen oder geschlossen wird

```js
fetchLater("/send_beacon");
```

### Verzögern einer `POST`-Anfrage für etwa eine Minute

In diesem Beispiel erstellen wir eine [`Request`](/de/docs/Web/API/Request)-Anforderung und geben einen `activateAfter`-Wert an, um das Senden der Anfrage für 60.000 Millisekunden (oder eine Minute) zu verzögern:

```js
fetchLater("/send_beacon", {
  method: "POST",
  body: getBeaconData(),
  activateAfter: 60000, // 1 minute
});
```

> [!NOTE]
> Die tatsächliche Sendezeit ist unbekannt, da der Browser möglicherweise eine längere oder kürzere Zeit abwartet, um beispielsweise die Stapelung von verzögerten Abrufen zu optimieren.

### Verzögern einer `POST`-Anfrage für etwa eine Minute mit try/catch

Das gleiche Beispiel wie oben, aber die beste Praxis besteht darin, es in einem try/catch einzuschließen:

```js
try {
  fetchLater("/send_beacon", {
    method: "POST",
    body: getBeaconData(),
    activateAfter: 60000, // 1 minute
  });
} catch (e) {
  if (e instanceof QuotaExceededError) {
    // Handle the quota error
  } else {
    // Handle other errors
  }
}
```

### Verzögern einer `POST`-Anfrage für etwa eine Minute und Erstellen einer Funktion zur Überprüfung, ob sie gesendet wurde

```js
const result = fetchLater("https://report.example.com", {
  method: "POST",
  body: JSON.stringify(myReport),
  activateAfter: 60000 /* 1 minute */,
});

function checkIfFetched() {
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
    url: data,
    signal: beaconAbort.signal,
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

- [Verwendung von Deferred Fetch](/de/docs/Web/API/Fetch_API/Using_Deferred_Fetch)
- [`FetchLaterResult`](/de/docs/Web/API/FetchLaterResult)
- [Fetch API](/de/docs/Web/API/Fetch_API)
