---
title: "PressureObserver: observe() Methode"
short-title: observe()
slug: Web/API/PressureObserver/observe
l10n:
  sourceCommit: e1d2d6a3880d47638de6b5a54b58df92826ec58e
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_service")}}{{securecontext_header}}

Die **`observe()`** Methode des [`PressureObserver`](/de/docs/Web/API/PressureObserver) Interfaces weist den Druckbeobachter an, mit der Beobachtung von Druckänderungen zu beginnen. Nachdem diese Methode aufgerufen wurde, wird der Beobachter seine Callback-Funktion aufrufen, wenn ein Druckdatensatz für die angegebene `source` beobachtet wird.

Wenn ein übereinstimmender [`PressureRecord`](/de/docs/Web/API/PressureRecord) erfasst wird, wird die Callback-Funktion des Druckbeobachters aufgerufen.

## Syntax

```js-nolint
observe(source)
observe(source, options)
```

### Parameter

- `source`
  - : Ein String, der angibt, welche [`Quelle`](/de/docs/Web/API/PressureRecord/source) beobachtet werden soll. Siehe [`PressureRecord.source`](/de/docs/Web/API/PressureRecord/source) für eine Liste der Quellen und [`PressureObserver.knownSources`](/de/docs/Web/API/PressureObserver/knownSources_static) für eine Liste der vom Benutzeragenten unterstützten Quellen.
- `options` {{optional_inline}}
  - : Ein Objekt zur Konfiguration der Beobachtung mit den folgenden Eigenschaften:
    - `sampleInterval` {{optional_inline}}
      - : Eine Zahl, die das angeforderte Abtastintervall in Millisekunden darstellt. Standardmäßig 0, was bedeutet, dass Updates so schnell wie das System es verarbeiten kann, bereitgestellt werden.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit {{jsxref("undefined")}} erfüllt.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API) durch eine {{httpheader('Permissions-Policy/compute-pressure','compute-pressure')}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) nicht erlaubt ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `source` Parameter nicht eine der unterstützten Quellen für diesen Benutzeragenten ist.

## Beispiele

### Aktuellen Druck protokollieren

Dieses Beispiel erstellt einen [`PressureObserver`](/de/docs/Web/API/PressureObserver) und reagiert, wann immer es eine Druckänderung gibt. Das Abtastintervall ist auf 1000ms eingestellt, was bedeutet, dass Updates höchstens jede Sekunde erfolgen.

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
