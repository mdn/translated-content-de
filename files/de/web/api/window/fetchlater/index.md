---
title: "Window: fetchLater() Methode"
short-title: fetchLater()
slug: Web/API/Window/fetchLater
l10n:
  sourceCommit: 5fad0829b5070d04993a57af8c276f5e35da3ed2
---

{{APIRef("fetchLater API")}}{{SeeCompatTable}}

Die **`fetchLater()`**-Methode des [`Window`](/de/docs/Web/API/Window)-Interfaces erstellt ein verzögertes Fetch.

Eine `fetchLater()`-Anfrage wird gesendet, sobald die Seite verlassen wird (sie wird zerstört oder betritt den {{Glossary("bfcache", "bfcache")}}), oder nach einer angegebenen `activateAfter`-Zeitüberschreitung — je nachdem, was zuerst eintritt.

Die `fetchLater()`-Methode gibt ein [`FetchLaterResult`](/de/docs/Web/API/FetchLaterResult)-Objekt zurück, das einen einzigen `activated`-Wert enthält, der angibt, ob die Anfrage bereits gesendet wurde. Beachten Sie, dass die Methode nicht das Ergebnis des tatsächlichen Fetchs zurückgibt, wenn dies geschieht (da es oft nach der Zerstörung des Dokuments gesendet wird) und die gesamte Antwort des Fetchs, einschließlich Körper und Header, ignoriert wird.

Anfragen, deren Körper ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) ist, können nicht verzögert werden.

Die `fetchLater()`-Methode wird durch die `connect-src` [Content Security Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy)-Richtlinie gesteuert, anstatt durch die Richtlinie der abgerufenen Ressourcen.

## Syntax

```js-nolint
fetchLater(resource)
fetchLater(resource, options)
```

### Parameter

Die `fetchLater()`-Methode nimmt alle die gleichen Parameter wie [`fetch()`](/de/docs/Web/API/Window/fetch), aber mit einer zusätzlichen `activateAfter`-Option.

- `resource`

  - : Dies definiert die Ressource, die Sie abrufen möchten. Identisch zu [`fetch()`](/de/docs/Web/API/Window/fetch), kann dies entweder sein:

    - Ein String oder jedes andere Objekt mit einem {{Glossary("stringifier", "stringifier")}} — einschließlich eines [`URL`](/de/docs/Web/API/URL)-Objekts — das die URL der Ressource bereitstellt, die Sie abrufen möchten. Die URL kann relativ zur Basis-URL sein, welche im Kontext eines Fensters die [`baseURI`](/de/docs/Web/API/Node/baseURI) des Dokuments ist.
    - Ein [`Request`](/de/docs/Web/API/Request)-Objekt.

- `options` {{optional_inline}}

  - : Ein [`DeferredRequestInit`](/de/docs/Web/API/DeferredRequestInit)-Objekt, das alle benutzerdefinierten Einstellungen enthält, die Sie auf die Anfrage anwenden möchten, einschließlich eines `activateAfter`-Timeout-Werts, der definiert, wie lange das Ergebnis verzögert werden soll, bevor es gesendet wird.

### Ausnahmen

Die [gleichen Ausnahmen wie für `fetch()`](/de/docs/Web/API/Window/fetch#exceptions) können für `fetchLater()` ausgelöst werden, zusammen mit den folgenden zusätzlichen Ausnahmen:

- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Die Nutzung dieses Features wurde blockiert, da das verfügbare Kontingent überschritten wurde. Siehe [`fetchLater()`-Quoten](/de/docs/Web/API/fetchLater_API/fetchLater_quotas) für weitere Details. Aufrufer von `fetchLater()` sollten in fast allen Fällen defensiv sein und `QuotaExceededError`-Fehler abfangen, insbesondere wenn sie Drittanbieter-JavaScript einbetten.

- `RangeError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Wird ausgelöst, wenn ein negativer `activateAfter`-Wert angegeben wird.

- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Zusätzlich zu den Gründen für `fetch()` wird diese Ausnahme auch für eine [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Anfrage (die nicht verzögert werden kann) oder für die Nutzung von unzuverlässigen URLs wie `http://` ausgelöst.

### Rückgabewert

Ein [`FetchLaterResult`](/de/docs/Web/API/FetchLaterResult), das eine `activated`-boolesche Eigenschaft enthält, die anzeigt, ob die Anfrage bereits gesendet wurde.

> [!NOTE]
> Sobald die Fetch-Anfrage gesendet wird, ist ihre Antwort — einschließlich des Körpers und der Header — nicht verfügbar und wird ignoriert.

## Beispiele

Der Artikel zu den [`fetchLater()`-Quoten](/de/docs/Web/API/fetchLater_API/fetchLater_quotas) bietet Beispiele dafür, wie die Quoten angewendet werden.

### Eine `GET`-Anfrage verzögern, bis die Seite verlassen oder geschlossen wird

```js
fetchLater("/send_beacon");
```

### Eine `POST`-Anfrage für etwa eine Minute verzögern

In diesem Beispiel erstellen wir ein [`Request`](/de/docs/Web/API/Request) und geben einen `activateAfter`-Wert an, um das Senden der Anfrage für 60.000 Millisekunden (oder eine Minute) zu verzögern:

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
> Die tatsächliche Sendezeit ist unbekannt, da der Browser möglicherweise länger oder kürzer wartet, zum Beispiel um das Batchen von verzögerten Fetches zu optimieren.

### Eine `POST`-Anfrage für etwa eine Minute mit einem try/catch verzögern

Das gleiche Beispiel wie oben, aber als beste Praxis sollte dies in einem try/catch eingeschlossen werden:

```js
try {
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

### Eine laufende Anfrage aktualisieren

In diesem Beispiel nutzen wir einen [`AbortController`](/de/docs/Web/API/AbortController), um die Anfrage abzubrechen und neu zu erstellen:

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

- [`fetchLater()` API](/de/docs/Web/API/fetchLater_API)
- [`fetchLater()`-Quoten](/de/docs/Web/API/fetchLater_API/fetchLater_quotas)
- [`FetchLaterResult`](/de/docs/Web/API/FetchLaterResult)
- [Fetch API](/de/docs/Web/API/Fetch_API)
