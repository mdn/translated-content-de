---
title: "PressureObserver: observe() Methode"
short-title: observe()
slug: Web/API/PressureObserver/observe
l10n:
  sourceCommit: 5d670c42df8ede57e3d6341cb15d8251eb188dc4
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`observe()`**-Methode der [`PressureObserver`](/de/docs/Web/API/PressureObserver)-Schnittstelle weist den Druckbeobachter an, mit der Beobachtung von Druckänderungen zu beginnen. Nachdem diese Methode aufgerufen wurde, wird der Beobachter seine Callback-Funktion ausführen, wenn ein Druckdatensatz für die angegebene `source` erkannt wird.

Wenn ein passender [`PressureRecord`](/de/docs/Web/API/PressureRecord) erhalten wird, wird die Callback-Funktion des Druckbeobachters aufgerufen.

## Syntax

```js-nolint
observe(source)
observe(source, options)
```

### Parameter

- `source`
  - : Ein String, der angibt, welche [`source`](/de/docs/Web/API/PressureRecord/source) beobachtet werden soll. Siehe [`PressureRecord.source`](/de/docs/Web/API/PressureRecord/source) für eine Liste von Quellen und [`PressureObserver.knownSources`](/de/docs/Web/API/PressureObserver/knownSources_static) für eine Liste von Quellen, die der Benutzeragent unterstützt.
- `options` {{optional_inline}}
  - : Ein Objekt zur Konfiguration der Beobachtung mit den folgenden Eigenschaften:
    - `sampleInterval` {{optional_inline}}
      - : Eine Zahl, die das angeforderte Abtastintervall in Millisekunden angibt. Standardmäßig 0, was bedeutet, dass es Aktualisierungen so schnell gibt, wie das System sie verarbeiten kann.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} erfüllt wird.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API) durch eine {{httpheader('Permissions-Policy/compute-pressure','compute-pressure')}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) nicht erlaubt ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `source`-Parameter nicht eine der unterstützten Quellen für diesen Benutzeragenten ist.

## Beispiele

### Aktuellen Druck protokollieren

Dieses Beispiel erstellt einen [`PressureObserver`](/de/docs/Web/API/PressureObserver) und führt Maßnahmen durch, wann immer es eine Druckänderung gibt. Das Abtastintervall ist auf 1000 ms eingestellt, was bedeutet, dass es höchstens jede Sekunde Aktualisierungen geben wird.

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
