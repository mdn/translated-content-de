---
title: "PressureObserver: observe() Methode"
short-title: observe()
slug: Web/API/PressureObserver/observe
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_service")}}{{securecontext_header}}

Die **`observe()`**-Methode des [`PressureObserver`](/de/docs/Web/API/PressureObserver)-Interfaces teilt dem Druckbeobachter mit, die Überwachung von Druckänderungen zu starten. Nachdem diese Methode aufgerufen wurde, wird der Beobachter seine Callback-Funktion aufrufen, wenn ein Druckdatensatz für die angegebene `source` festgestellt wird.

Wenn ein passender [`PressureRecord`](/de/docs/Web/API/PressureRecord) ermittelt wird, wird die Callback-Funktion des Druckbeobachters aufgerufen.

## Syntax

```js-nolint
observe(source)
observe(source, options)
```

### Parameter

- `source`
  - : Ein String, der angibt, welche [`source`](/de/docs/Web/API/PressureRecord/source) überwacht werden soll. Siehe [`PressureRecord.source`](/de/docs/Web/API/PressureRecord/source) für eine Liste von Quellen und [`PressureObserver.knownSources`](/de/docs/Web/API/PressureObserver/knownSources_static) für eine Liste der Quellen, die der Benutzeragent unterstützt.
- `options` {{optional_inline}}
  - : Ein Objekt zur Konfiguration der Überwachung mit den folgenden Eigenschaften:
    - `sampleInterval` {{optional_inline}}
      - : Eine Zahl, die das angeforderte Abtastintervall in Millisekunden angibt. Standardmäßig 0, was bedeutet, dass Updates so schnell wie möglich vom System verarbeitet werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} erfüllt wird.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API) durch eine {{httpheader('Permissions-Policy/compute-pressure','compute-pressure')}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) abgelehnt wird.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `source`-Parameter nicht eine der unterstützten Quellen für diesen Benutzeragenten ist.

## Beispiele

### Aktuellen Druck protokollieren

Dieses Beispiel erstellt einen [`PressureObserver`](/de/docs/Web/API/PressureObserver) und trifft Maßnahmen, wenn immer ein Druckwechsel auftritt. Das Abtastintervall ist auf 1000 ms eingestellt, was bedeutet, dass es höchstens alle Sekunde Updates geben wird.

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
