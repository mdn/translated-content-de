---
title: "Window: fetchLater()-Methode"
short-title: fetchLater()
slug: Web/API/Window/fetchLater
l10n:
  sourceCommit: 2eb88572e8e972bb87a446f17a4a9a23de0108b5
---

{{APIRef("Fetch API")}}{{SeeCompatTable}}

Die Methode **`fetchLater()`** der Schnittstelle [`Window`](/de/docs/Web/API/Window) erstellt eine verzögerte Fetch-Anfrage.

Eine `fetchLater()`-Anfrage wird gesendet, sobald die Seite verlassen wird (wenn sie zerstört wird oder in den {{Glossary("bfcache", "bfcache")}} gelangt) oder wenn ein angegebener `activateAfter`-Timeout abläuft – je nachdem, was zuerst eintritt.

Die Methode `fetchLater()` gibt ein [`FetchLaterResult`](/de/docs/Web/API/FetchLaterResult)-Objekt zurück. Dessen Eigenschaft `activated` gibt an, ob die Anfrage bereits gesendet wurde. Die Methode gibt nicht das Ergebnis der eigentlichen Fetch-Anfrage zurück, wenn diese gesendet wird (da dies häufig erst geschieht, nachdem das Dokument zerstört wurde). Die gesamte Antwort auf die Fetch-Anfrage, einschließlich Body und Headern, wird ignoriert.

Anfragen, deren Body ein [`ReadableStream`](/de/docs/Web/API/ReadableStream) ist, können nicht verzögert werden.

Die Methode `fetchLater()` wird durch die `connect-src`-Direktive der [Content Security Policy](/de/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) gesteuert, nicht durch die Direktive für die abgerufenen Ressourcen.

## Syntax

```js-nolint
fetchLater(resource)
fetchLater(resource, options)
```

### Parameter

Die Methode `fetchLater()` akzeptiert dieselben Parameter wie [`fetch()`](/de/docs/Web/API/Window/fetch), jedoch mit der zusätzlichen Option `activateAfter`.

- `resource`
  - : Gibt die Ressource an, die Sie abrufen möchten. Wie bei [`fetch()`](/de/docs/Web/API/Window/fetch) kann dies Folgendes sein:
    - Ein String oder ein anderes Objekt mit einem {{Glossary("stringifier", "stringifier")}} – einschließlich eines [`URL`](/de/docs/Web/API/URL)-Objekts –, das die URL der abzurufenden Ressource bereitstellt. Die URL kann relativ zur Basis-URL sein. Im Fensterkontext ist dies die [`baseURI`](/de/docs/Web/API/Node/baseURI) des Dokuments.
    - Ein [`Request`](/de/docs/Web/API/Request)-Objekt.

- `options` {{optional_inline}}
  - : Ein [`DeferredRequestInit`](/de/docs/Web/API/DeferredRequestInit)-Objekt mit benutzerdefinierten Einstellungen für die Anfrage. Dazu gehört ein `activateAfter`-Timeout, das festlegt, wie lange das Senden der Anfrage verzögert werden soll.

### Ausnahmen

Für `fetchLater()` können [dieselben Ausnahmen wie für `fetch()`](/de/docs/Web/API/Window/fetch#exceptions) sowie die folgenden zusätzlichen Ausnahmen ausgelöst werden:

- [`QuotaExceededError`](/de/docs/Web/API/QuotaExceededError)
  - : Die Verwendung dieser Funktion wurde blockiert, weil das verfügbare Kontingent überschritten wurde. Weitere Informationen finden Sie unter [Kontingente für `fetchLater()`](/de/docs/Web/API/Fetch_API/Using_Deferred_Fetch#quotas). Aufrufender Code sollte auf `QuotaExceededError` vorbereitet sein und diesen Fehler in fast allen Fällen abfangen, insbesondere wenn JavaScript von Drittanbietern eingebunden wird.

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn für `activateAfter` ein negativer Wert angegeben wird.

- {{jsxref("TypeError")}}
  - : Zusätzlich zu den Gründen, die für `fetch()` gelten, wird diese Ausnahme auch bei einer Anfrage mit einem [`ReadableStream`](/de/docs/Web/API/ReadableStream) (die nicht verzögert werden kann) oder bei der Verwendung nicht vertrauenswürdiger URLs (z. B. `http://`) ausgelöst.

### Rückgabewert

Ein [`FetchLaterResult`](/de/docs/Web/API/FetchLaterResult) mit der booleschen Eigenschaft `activated`, die angibt, ob die Anfrage bereits gesendet wurde.

> [!NOTE]
> Sobald die Fetch-Anfrage gesendet wurde, ist ihre Antwort – einschließlich Body und Headern – nicht verfügbar und wird ignoriert.

## Beispiele

Der Artikel zu den [Kontingenten für `fetchLater()`](/de/docs/Web/API/Fetch_API/Using_Deferred_Fetch) enthält Beispiele dafür, wie die Kontingente angewendet werden.

### Eine `GET`-Anfrage verzögern, bis die Seite verlassen oder geschlossen wird

```js
fetchLater("/send_beacon");
```

### Eine `POST`-Anfrage um etwa eine Minute verzögern

In diesem Beispiel erstellen wir einen [`Request`](/de/docs/Web/API/Request) und geben für `activateAfter` einen Wert an, um das Senden der Anfrage um 60.000 Millisekunden (oder eine Minute) zu verzögern:

```js
fetchLater("/send_beacon", {
  method: "POST",
  body: getBeaconData(),
  activateAfter: 60000, // 1 minute
});
```

> [!NOTE]
> Der tatsächliche Sendezeitpunkt ist nicht bekannt, da der Browser länger oder kürzer warten kann, beispielsweise um die gebündelte Verarbeitung verzögerter Fetch-Anfragen zu optimieren.

### Eine `POST`-Anfrage mit try/catch um etwa eine Minute verzögern

Dies ist dasselbe Beispiel wie oben. Es empfiehlt sich jedoch, den Code in einen try/catch-Block einzuschließen:

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

### Eine `POST`-Anfrage um etwa eine Minute verzögern und eine Funktion zur Prüfung des Sendestatus erstellen

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

- [Deferred Fetch verwenden](/de/docs/Web/API/Fetch_API/Using_Deferred_Fetch)
- [`FetchLaterResult`](/de/docs/Web/API/FetchLaterResult)
- [Fetch API](/de/docs/Web/API/Fetch_API)
