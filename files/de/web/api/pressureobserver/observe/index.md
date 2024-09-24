---
title: "PressureObserver: observe()-Methode"
short-title: observe()
slug: Web/API/PressureObserver/observe
l10n:
  sourceCommit: 5d670c42df8ede57e3d6341cb15d8251eb188dc4
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`observe()`**-Methode der {{domxref("PressureObserver")}}-Schnittstelle weist den Druckbeobachter an, Änderungen des Drucks zu überwachen. Nachdem diese Methode aufgerufen wurde, wird der Beobachter seine Callback-Funktion aufrufen, wenn ein Druckdatensatz für die angegebene `source` beobachtet wird.

Wenn ein entsprechender {{domxref("PressureRecord")}} erhalten wird, wird die Callback-Funktion des Druckbeobachters aufgerufen.

## Syntax

```js-nolint
observe(source)
observe(source, options)
```

### Parameter

- `source`
  - : Ein String, der angibt, welche {{domxref("PressureRecord.source", "source")}} beobachtet werden soll. Siehe {{domxref("PressureRecord.source")}} für eine Liste von Quellen und {{domxref("PressureObserver.knownSources_static", "PressureObserver.knownSources")}} für eine Liste der Quellen, die von der Benutzerumgebung unterstützt werden.
- `options` {{optional_inline}}
  - : Ein Objekt zur Konfiguration der Beobachtung mit den folgenden Eigenschaften:
    - `sampleInterval` {{optional_inline}}
      - : Eine Zahl, die das gewünschte Stichprobenintervall in Millisekunden angibt. Standardmäßig 0, was bedeutet, dass Updates so schnell wie möglich erfolgen, wie das System es verkraftet.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref("undefined")}} erfüllt wird.

### Ausnahmen

- `NotAllowedError` {{domxref("DOMException")}}
  - : Ausgelöst, wenn die [Compute Pressure API](/de/docs/Web/API/Compute_Pressure_API) durch eine {{httpheader('Permissions-Policy/compute-pressure','compute-pressure')}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Permissions_Policy) untersagt ist.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Ausgelöst, wenn der `source`-Parameter nicht zu den unterstützten Quellen für diese Benutzerumgebung gehört.

## Beispiele

### Aktuellen Druck protokollieren

Dieses Beispiel erstellt einen {{domxref("PressureObserver")}} und führt Maßnahmen durch, sobald sich der Druck ändert. Das Stichprobenintervall ist auf 1000 ms eingestellt, was bedeutet, dass es höchstens jede Sekunde Updates gibt.

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

## Kompatibilität der Browser

{{Compat}}
