---
title: "PressureObserver: observe()-Methode"
short-title: observe()
slug: Web/API/PressureObserver/observe
l10n:
  sourceCommit: e1e7e2ac2cb1e40293c32c24bc0667905e9a7a04
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_service")}}{{securecontext_header}}

Die **`observe()`**-Methode der [`PressureObserver`](/de/docs/Web/API/PressureObserver)-Schnittstelle weist den Druckbeobachter an, Änderungen des Drucks zu überwachen. Nachdem diese Methode aufgerufen wurde, wird der Beobachter seine Rückruffunktion aufrufen, wenn ein Druckdatensatz für die angegebene `source` beobachtet wird.

Wenn ein passender [`PressureRecord`](/de/docs/Web/API/PressureRecord) erhalten wird, wird die Rückruffunktion des Druckbeobachters aufgerufen.

## Syntax

```js-nolint
observe(source)
observe(source, options)
```

### Parameter

- `source`
  - : Ein String, der angibt, welche [`source`](/de/docs/Web/API/PressureRecord/source) überwacht werden soll. Siehe [`PressureRecord.source`](/de/docs/Web/API/PressureRecord/source) für eine Liste der Quellen und [`PressureObserver.knownSources`](/de/docs/Web/API/PressureObserver/knownSources_static) für eine Liste der Quellen, die vom User-Agent unterstützt werden.
- `options` {{optional_inline}}
  - : Ein Objekt zur Konfiguration der Beobachtung mit den folgenden Eigenschaften:
    - `sampleInterval` {{optional_inline}}
      - : Eine Zahl, die das angeforderte Abtastintervall in Millisekunden darstellt. Standardmäßig 0 bedeutet, dass Updates so schnell wie das System es verarbeiten kann, erfolgen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} erfüllt wird.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API) durch eine {{httpheader('Permissions-Policy/compute-pressure','compute-pressure')}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) nicht erlaubt ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `source`-Parameter nicht eine der unterstützten Quellen für diesen User-Agent ist.

## Beispiele

### Aktuellen Druck protokollieren

Dieses Beispiel erstellt einen [`PressureObserver`](/de/docs/Web/API/PressureObserver) und führt Aktionen durch, wann immer sich der Druck ändert. Das Abtastintervall ist auf 1000 ms festgelegt, was bedeutet, dass es Updates höchstens jede Sekunde geben wird.

```js
function callback(records) {
  const lastRecord = records[records.length - 1];
  console.log(`Current pressure ${lastRecord.state}`);
  if (lastRecord.state === "critical") {
    // disable video feeds
  } else if (lastRecord.state === "serious") {
    // disable video filter effects
  } else {
    // enable all video feeds and filter effects
  }
}

try {
  const observer = new PressureObserver(callback);
  await observer.observe("cpu", {
    sampleInterval: 1000, // 1000ms
  });
} catch (error) {
  // report error setting up the observer
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
