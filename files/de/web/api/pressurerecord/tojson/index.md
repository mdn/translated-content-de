---
title: "PressureRecord: Methode toJSON()"
short-title: toJSON()
slug: Web/API/PressureRecord/toJSON
l10n:
  sourceCommit: 15d531b54c7f0d96ac80ef00b494fd40743d59ce
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_service")}}{{securecontext_header}}

Die Methode **`toJSON()`** der Schnittstelle [`PressureRecord`](/de/docs/Web/API/PressureRecord) gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `PressureRecord`-Objekt repräsentiert.

Die Methode wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `PressureRecord`-Objekt verarbeitet wird.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein JSON-serialisierbares einfaches Objekt mit den folgenden Eigenschaften:

- [`source`](/de/docs/Web/API/PressureRecord/source)
- [`state`](/de/docs/Web/API/PressureRecord/state)
- [`time`](/de/docs/Web/API/PressureRecord/time)

Der Wert jeder Eigenschaft wird unverändert übernommen.

## Beispiele

### toJSON() direkt aufrufen

In diesem Beispiel wird ein `PressureRecord`-Objekt abgerufen. Ein direkter Aufruf von `toJSON()` gibt ein einfaches Objekt zurück. Dessen Eigenschaften haben dieselben Werte wie die entsprechenden Eigenschaften des ursprünglichen Objekts.

```js
function callback(records) {
  const record = records[records.length - 1];

  const json = record.toJSON();
  console.log(json); // A plain object
  console.log(typeof json); // "object"
  console.log(json.state); // Same value as record.state
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

### In einen JSON-String serialisieren

Innerhalb der Callback-Funktion aus dem vorherigen Beispiel kann dasselbe Objekt mit {{jsxref("JSON.stringify()")}} serialisiert werden. Dabei wird die Methode `toJSON()` automatisch aufgerufen.

```js
console.log(JSON.stringify(record));
```

Dadurch würde ein JSON-String wie der folgende ausgegeben (zur besseren Lesbarkeit formatiert):

```json
{
  "source": "cpu",
  "state": "fair",
  "time": 1000.5
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
