---
title: "PressureRecord: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/PressureRecord/toJSON
l10n:
  sourceCommit: e1d2d6a3880d47638de6b5a54b58df92826ec58e
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_worker_except_service")}}{{securecontext_header}}

Die **`toJSON()`**-Methode ist ein {{Glossary("Serialization", "Serializer")}}; sie gibt eine JSON-Darstellung des [`PressureRecord`](/de/docs/Web/API/PressureRecord)-Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("JSON")}}-Objekt, das die Serialisierung des [`PressureRecord`](/de/docs/Web/API/PressureRecord)-Objekts darstellt.

## Beispiele

### Verwendung der `toJSON`-Methode

In diesem Beispiel gibt der Aufruf von `lastRecord.toJSON()` eine JSON-Darstellung des [`PressureRecord`](/de/docs/Web/API/PressureRecord)-Objekts zurück.

```js
function callback(records) {
  const lastRecord = records[records.length - 1];
  console.log(lastRecord.toJSON);
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

Dies würde ein JSON-Objekt wie folgt protokollieren:

```json
{
  "source": "cpu",
  "state": "fair",
  "time": 1712052746385.347
}
```

Um eine JSON-Zeichenkette zu erhalten, können Sie direkt [`JSON.stringify(lastRecord)`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) verwenden; es wird `toJSON()` automatisch aufrufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
