---
title: "Window: fetchLater() Methode"
short-title: fetchLater()
slug: Web/API/Window/fetchLater
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("fetchLater API")}}{{SeeCompatTable}}

Die **`fetchLater()`** Methode der [`Window`](/de/docs/Web/API/Window)-Schnittstelle erstellt einen verzögerten Abruf.

Eine `fetchLater()`-Anfrage wird gesendet, sobald die Seite verlassen wird (sei es, weil sie zerstört wird oder den {{Glossary("bfcache", "bfcache")}} betritt), oder nach einem angegebenen `activateAfter`-Timeout – je nachdem, was zuerst eintritt.

Die `fetchLater()`-Methode gibt ein [`FetchLaterResult`](/de/docs/Web/API/FetchLaterResult)-Objekt zurück, das einen einzigen `activated`-Wert enthält, der angibt, ob die Anfrage bereits gesendet wurde. Beachten Sie, dass die Methode nicht das Ergebnis des tatsächlichen Abrufs zurückgibt, wenn dieser passiert (da er oft gesendet wird, nachdem das Dokument zerstört wurde), und die gesamte Antwort des Abrufs, einschließlich des Inhalts und der Header, ignoriert wird.

Anfragen, deren Inhalt ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) ist, können nicht verzögert werden.

Die `fetchLater()`-Methode wird durch die `connect-src` [Content Security Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy)-Direktive kontrolliert und nicht durch die Direktive der abgerufenen Ressourcen.

## Syntax

```js-nolint
fetchLater(resource)
fetchLater(resource, options)
```

### Parameter

Die `fetchLater()`-Methode nimmt alle gleichen Parameter wie [`fetch()`](/de/docs/Web/API/Window/fetch) an, jedoch mit einer zusätzlichen `activateAfter`-Option.

- `resource`

  - : Dies definiert die Ressource, die Sie abrufen möchten. Identisch wie bei [`fetch()`](/de/docs/Web/API/Window/fetch), kann dies entweder sein:
    - Ein String oder ein anderes Objekt mit einem {{Glossary("stringifier", "stringifier")}} — einschließlich eines [`URL`](/de/docs/Web/API/URL)-Objekts — das die URL der Ressource liefert, die Sie abrufen möchten. Die URL kann relativ zur Basis-URL sein, welche die [`baseURI`](/de/docs/Web/API/Node/baseURI) des Dokuments im Fensterkontext ist.
    - Ein [`Request`](/de/docs/Web/API/Request)-Objekt.

- `options` {{optional_inline}}
  - : Ein [`DeferredRequestInit`](/de/docs/Web/API/DeferredRequestInit)-Objekt, das alle benutzerdefinierten Einstellungen enthält, die Sie auf die Anfrage anwenden möchten, einschließlich eines `activateAfter`-Timeout-Wertes, der definiert, wie lange das Ergebnis verzögert werden soll, bevor es gesendet wird.

### Ausnahmen

Die [gleichen Ausnahmen wie bei `fetch()`](/de/docs/Web/API/Window/fetch#exceptions) können für `fetchLater()` auftreten, zusammen mit den folgenden zusätzlichen Ausnahmen:

- `QuotaExceededError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Die Nutzung dieser Funktion wurde gesperrt, da das verfügbare Kontingent überschritten wurde. Weitere Details finden Sie unter [`fetchLater()`-Kontingente](/de/docs/Web/API/fetchLater_API/fetchLater_quotas). Aufrufer von `fetchLater()` sollten in fast allen Fällen defensive Maßnahmen ergreifen und `QuotaExceededError`-Fehler abfangen, insbesondere wenn sie Drittanbieter-JavaScript einbetten.

- `RangeError` [`DOMException`](/de/docs/Web/API/DOMException)

  - : Ausgelöst, wenn ein negativer `activateAfter`-Wert angegeben wird.

- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Zusätzlich zu den Gründen für `fetch()` wird diese Ausnahme auch für eine [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Anfrage (die nicht verzögert werden kann) oder bei der Nutzung nicht vertrauenswürdiger URLs (wie `http://`) ausgelöst.

### Rückgabewert

Ein [`FetchLaterResult`](/de/docs/Web/API/FetchLaterResult), das eine `activated`-Boolesche Eigenschaft enthält, die angibt, ob die Anfrage bereits gesendet wurde.

> [!NOTE]
> Sobald die Abrufanforderung gesendet wird, wird ihre Antwort — einschließlich des Inhalts und der Header — nicht verfügbar gemacht und ignoriert.

## Beispiele

Der Artikel zu [`fetchLater()`-Kontingente](/de/docs/Web/API/fetchLater_API/fetchLater_quotas) bietet Beispiele dafür, wie die Kontingente angewendet werden.

### Verzögern einer `GET`-Anfrage, bis die Seite verlassen oder geschlossen wird

```js
fetchLater("/send_beacon");
```

### Verzögern einer `POST`-Anfrage um etwa eine Minute

In diesem Beispiel erstellen wir einen [`Request`](/de/docs/Web/API/Request) und geben einen `activateAfter`-Wert an, um das Senden der Anfrage um 60.000 Millisekunden (oder eine Minute) zu verzögern:

```js
fetchLater("/send_beacon", {
  method: "POST",
  body: getBeaconData(),
  activateAfter: 60000, // 1 minute
});
```

> [!NOTE]
> Die tatsächliche Sendezeit ist unbekannt, da der Browser möglicherweise länger oder kürzer wartet, zum Beispiel, um das Batchen von verzögerten Abrufen zu optimieren.

### Verzögern einer `POST`-Anfrage um etwa eine Minute mit try/catch

Dasselbe Beispiel wie oben, aber die bewährte Methode ist, dies in ein try/catch einzuschließen:

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

### Verzögern einer `POST`-Anfrage um etwa eine Minute und eine Funktion erstellen, um zu überprüfen, ob gesendet wurde

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

Jeder der folgenden Aufrufe von `fetchLater()` würde einen Fehler auslösen:

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
- [`fetchLater()`-Kontingente](/de/docs/Web/API/fetchLater_API/fetchLater_quotas)
- [`FetchLaterResult`](/de/docs/Web/API/FetchLaterResult)
- [Fetch API](/de/docs/Web/API/Fetch_API)
