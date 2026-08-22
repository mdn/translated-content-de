---
title: "Window: fetchLater() Methode"
short-title: fetchLater()
slug: Web/API/Window/fetchLater
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{APIRef("Fetch API")}}{{SeeCompatTable}}

Die **`fetchLater()`** Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle erstellt einen verzögerten Abruf.

Eine `fetchLater()`-Anfrage wird gesendet, sobald die Seite verlassen wird (sie wird zerstört oder gelangt in den {{Glossary("bfcache", "bfcache")}}) oder nach einem angegebenen `activateAfter`-Timeout, je nachdem, was zuerst eintritt.

Die `fetchLater()`-Methode gibt ein [`FetchLaterResult`](/de/docs/Web/API/FetchLaterResult)-Objekt zurück, das einen einzigen `activated`-Wert enthält, der angibt, ob die Anfrage bereits gesendet wurde. Beachten Sie, dass die Methode das Ergebnis des tatsächlichen Abrufs nicht zurückgibt, wenn dieser erfolgt (da er oft nach der Zerstörung des Dokuments gesendet wird) und die gesamte Antwort des Abrufs, einschließlich Körper und Header, ignoriert wird.

Anfragen, deren Körper ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) ist, können nicht verzögert werden.

Die `fetchLater()`-Methode wird durch die `connect-src`-[Content Security Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy)-Direktive gesteuert und nicht durch die Direktive der abgerufenen Ressourcen.

## Syntax

```js-nolint
fetchLater(resource)
fetchLater(resource, options)
```

### Parameter

Die `fetchLater()`-Methode nimmt alle gleichen Parameter wie [`fetch()`](/de/docs/Web/API/Window/fetch) an, jedoch mit einer zusätzlichen `activateAfter`-Option.

- `resource`
  - : Definiert die Ressource, die Sie abrufen möchten. Identisch zu [`fetch()`](/de/docs/Web/API/Window/fetch) kann dies entweder sein:
    - Ein String oder ein anderes Objekt mit einem {{Glossary("stringifier", "Stringifier")}} — einschließlich eines [`URL`](/de/docs/Web/API/URL)-Objekts —, das die URL der Ressource bereitstellt, die Sie abrufen möchten. Die URL kann relativ zur Basis-URL sein, die im Kontext eines Fensters die [`baseURI`](/de/docs/Web/API/Node/baseURI) des Dokuments ist.
    - Ein [`Request`](/de/docs/Web/API/Request)-Objekt.

- `options` {{optional_inline}}
  - : Ein [`DeferredRequestInit`](/de/docs/Web/API/DeferredRequestInit)-Objekt, das alle benutzerdefinierten Einstellungen enthält, die Sie auf die Anfrage anwenden möchten, einschließlich eines `activateAfter`-Timeout-Werts, der definiert, wie lange das Ergebnis vor dem Senden verzögert werden soll.

### Ausnahmen

Die [gleichen Ausnahmen wie bei `fetch()`](/de/docs/Web/API/Window/fetch#exceptions) können auch bei `fetchLater()` auftreten, zusammen mit den folgenden zusätzlichen Ausnahmen:

- [`QuotaExceededError`](/de/docs/Web/API/QuotaExceededError)
  - : Die Nutzung dieser Funktion wurde blockiert, da die verfügbare Quote überschritten wurde. Siehe [`fetchLater()`-Quoten](/de/docs/Web/API/Fetch_API/Using_Deferred_Fetch#quotas) für weitere Details. Aufrufer von `fetchLater()` sollten defensiv codieren und `QuotaExceededError`-Fehler in fast allen Fällen abfangen, insbesondere wenn sie Drittanbieter-JavaScript einbetten.

- `RangeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein negativer `activateAfter`-Wert angegeben wird.

- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Zusätzlich zu den Gründen für `fetch()` wird diese Ausnahme auch für eine [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Anfrage (die nicht verzögert werden kann) oder für die Verwendung von unsicheren URLs (wie `http://`) ausgelöst.

### Rückgabewert

Ein [`FetchLaterResult`](/de/docs/Web/API/FetchLaterResult), das eine `activated`-boolesche Eigenschaft enthält, die angibt, ob die Anfrage bereits gesendet wurde.

> [!NOTE]
> Sobald die Abrufanfrage gesendet wird, wird ihre Antwort — einschließlich des Körpers und der Header — nicht verfügbar gemacht und wird ignoriert.

## Beispiele

Der Artikel zu den [`fetchLater()`-Quoten](/de/docs/Web/API/Fetch_API/Using_Deferred_Fetch) bietet Beispiele dafür, wie die Quoten angewendet werden.

### Eine `GET`-Anfrage verzögern, bis die Seite verlassen oder geschlossen wird

```js
fetchLater("/send_beacon");
```

### Eine `POST`-Anfrage für etwa eine Minute verzögern

In diesem Beispiel erstellen wir eine [`Request`](/de/docs/Web/API/Request) und geben einen `activateAfter`-Wert an, um das Senden der Anfrage um 60.000 Millisekunden (oder eine Minute) zu verzögern:

```js
fetchLater("/send_beacon", {
  method: "POST",
  body: getBeaconData(),
  activateAfter: 60000, // 1 minute
});
```

> [!NOTE]
> Die tatsächliche Sendezeit ist unbekannt, da der Browser möglicherweise für einen längeren oder kürzeren Zeitraum wartet, um z.B. das Batchen verzögerter Abrufe zu optimieren.

### Eine `POST`-Anfrage für etwa eine Minute verzögern mit try/catch

Dasselbe Beispiel wie oben, jedoch ist es eine gute Praxis, dies in einen try/catch-Block einzuschließen:

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

### Eine `POST`-Anfrage für etwa eine Minute verzögern und eine Funktion erstellen, um zu überprüfen, ob sie gesendet wurde

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

Alle der folgenden Aufrufe von `fetchLater()` würden eine Ausnahme auslösen:

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
