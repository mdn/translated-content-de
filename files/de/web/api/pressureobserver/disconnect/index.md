---
title: "PressureObserver: Methode disconnect()"
short-title: disconnect()
slug: Web/API/PressureObserver/disconnect
l10n:
  sourceCommit: a251e34887530216e319fee73b5b859c8c943a53
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`disconnect()`**-Methode der {{domxref('PressureObserver')}}-Schnittstelle stoppt den Drucküberwachungs-Callback, sodass von allen Quellen keine weiteren Druckaufzeichnungen mehr empfangen werden.

## Syntax

```js-nolint
disconnect()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Stoppen eines Druckbeobachters

Im folgenden Beispiel werden 20 Stichproben gesammelt und anschließend der Druckbeobachter getrennt, um den Empfang weiterer Druckaufzeichnungen zu deaktivieren.

```js
const samples = [];

function pressureChange(records, observer) {
  for (const record of records) {
    samples.push(record.state);
    // Wir möchten nur 20 Stichproben
    if (samples.length === 20) {
      observer.disconnect();
      return;
    }
  }
}

try {
  const observer = new PressureObserver(callback);
  await observer.observe("cpu", {
    sampleInterval: 1000, // 1000ms
  });
} catch (error) {
  // Fehler beim Einrichten des Beobachters melden
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
