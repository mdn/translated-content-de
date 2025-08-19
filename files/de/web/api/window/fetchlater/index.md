---
title: "Window: fetchLater() Methode"
short-title: fetchLater()
slug: Web/API/Window/fetchLater
l10n:
  sourceCommit: 7cac5cc51350b7688903656bb36d79152f82d01f
---

{{APIRef("fetchLater API")}}{{SeeCompatTable}}

Die **`fetchLater()`**-Methode des [`Window`](/de/docs/Web/API/Window) Interfaces erstellt einen verzögerten Abruf.

Eine `fetchLater()`-Anfrage wird gesendet, sobald die Seite verlassen wird (sie wird zerstört oder tritt in den {{Glossary("bfcache", "bfcache")}} ein) oder nach einem übergebenen `activateAfter`-Timeout — je nachdem, was zuerst eintritt.

Die Methode `fetchLater()` gibt ein [`FetchLaterResult`](/de/docs/Web/API/FetchLaterResult)-Objekt zurück, das einen einzigen `activated`-Wert enthält, der angibt, ob die Anfrage bereits gesendet wurde. Beachten Sie, dass die Methode nicht das Ergebnis des tatsächlichen Abrufs zurückgibt, wenn dies geschieht (da es oft nach der Zerstörung des Dokuments gesendet wird) und die gesamte Antwort des Abrufs, einschließlich des Bodys und der Header, ignoriert wird.

Anfragen, deren Body ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) ist, können nicht verzögert werden.

Die `fetchLater()`-Methode wird durch die `connect-src` [Content Security Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy)-Direktive und nicht durch die Direktive der abgerufenen Ressourcen gesteuert.

## Syntax

```js-nolint
fetchLater(resource)
fetchLater(resource, options)
```

### Parameter

Die Methode `fetchLater()` nimmt dieselben Parameter wie [`fetch()`](/de/docs/Web/API/Window/fetch) an, jedoch mit einer zusätzlichen `activateAfter`-Option.

- `resource`
  - : Dies definiert die Ressource, die Sie abrufen möchten. Identisch zu [`fetch()`](/de/docs/Web/API/Window/fetch), kann dies entweder sein:
    - Ein String oder ein anderes Objekt mit einem {{Glossary("stringifier", "Stringifier")}} — einschließlich eines [`URL`](/de/docs/Web/API/URL)-Objekts — das die URL der Ressource liefert, die Sie abrufen möchten. Die URL kann relativ zur Basis-URL sein, welche im Kontext des Fensters die [`baseURI`](/de/docs/Web/API/Node/baseURI) des Dokuments ist.
    - Ein [`Request`](/de/docs/Web/API/Request)-Objekt.

- `options` {{optional_inline}}
  - : Ein [`DeferredRequestInit`](/de/docs/Web/API/DeferredRequestInit)-Objekt, das benutzerdefinierte Einstellungen enthält, die Sie auf die Anfrage anwenden möchten, einschließlich eines `activateAfter`-Timeout-Wertes, der definiert, wie lange das Ergebnis verzögert werden soll, bevor es gesendet wird.

### Ausnahmen

Die [gleichen Ausnahmen wie bei `fetch()`](/de/docs/Web/API/Window/fetch#exceptions) können für `fetchLater()` auftreten, zusammen mit den folgenden zusätzlichen Ausnahmen:

- [`QuotaExceededError`](/de/docs/Web/API/QuotaExceededError)
  - : Die Nutzung dieser Funktion wurde blockiert, weil das verfügbare Kontingent überschritten wurde. Siehe [`fetchLater()`-Quoten](/de/docs/Web/API/fetchLater_API/fetchLater_quotas) für mehr Details. Benutzer von `fetchLater()` sollten defensiv sein und `QuotaExceededError`-Fehler in fast allen Fällen abfangen, insbesondere wenn sie Drittanbieter-JavaScript einbetten.

- `RangeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein negativer `activateAfter`-Wert angegeben wird.

- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Zusätzlich zu den Gründen bei `fetch()` wird diese Ausnahme auch für eine [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Anfrage ausgelöst (die nicht verzögert werden kann) oder für die Nutzung von unzuverlässigen URLs (wie `http://`).

### Rückgabewert

Ein [`FetchLaterResult`](/de/docs/Web/API/FetchLaterResult), das eine `activated`-boolesche Eigenschaft enthält, die angibt, ob die Anfrage bereits gesendet wurde.

> [!NOTE]
> Sobald die Abrufanfrage gesendet wurde, wird ihre Antwort — einschließlich des Bodys und der Header — nicht verfügbar gemacht und ignoriert.

## Beispiele

Der Artikel zu den [`fetchLater()`-Quoten](/de/docs/Web/API/fetchLater_API/fetchLater_quotas) bietet Beispiele dafür, wie die Quoten angewendet werden.

### Einen `GET`-Request verzögern, bis die Seite verlassen oder geschlossen wird

```js
fetchLater("/send_beacon");
```

### Einen `POST`-Anfrage für etwa eine Minute verzögern

In diesem Beispiel erstellen wir eine [`Request`](/de/docs/Web/API/Request) und geben einen `activateAfter`-Wert an, um das Senden der Anfrage um 60.000 Millisekunden (oder eine Minute) zu verzögern:

```js
fetchLater("/send_beacon", {
  method: "POST",
  body: getBeaconData(),
  activateAfter: 60000, // 1 minute
});
```

> [!NOTE]
> Die tatsächliche Sendezeit ist unbekannt, da der Browser möglicherweise eine längere oder kürzere Zeit wartet, um zum Beispiel die Bündelung von verzögerten Abrufen zu optimieren.

### Einen `POST`-Anfrage für etwa eine Minute mit try/catch verzögern

Dasselbe Beispiel wie oben, aber die beste Praxis ist, dies in einem try/catch einzuschließen:

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

### Einen `POST`-Anfrage für etwa eine Minute verzögern und eine Funktion erstellen, um zu prüfen, ob sie gesendet wurde

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

### Eine ausstehende Anfrage aktualisieren

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

Jeder der folgenden Aufrufe von `fetchLater()` würde einen Fehler werfen:

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
- [`fetchLater()`-Quoten](/de/docs/Web/API/fetchLater_API/fetchLater_quotas)
- [`FetchLaterResult`](/de/docs/Web/API/FetchLaterResult)
- [Fetch API](/de/docs/Web/API/Fetch_API)
