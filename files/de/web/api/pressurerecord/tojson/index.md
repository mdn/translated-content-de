---
title: "PressureRecord: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/PressureRecord/toJSON
l10n:
  sourceCommit: a251e34887530216e319fee73b5b859c8c943a53
---

{{APIRef("Compute Pressure API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **`toJSON()`**-Methode ist ein {{Glossary("Serialization", "Serializer")}}; sie gibt eine JSON-Darstellung des [`PressureRecord`](/de/docs/Web/API/PressureRecord)-Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("JSON")}}-Objekt, das die Serialisierung des [`PressureRecord`](/de/docs/Web/API/PressureRecord)-Objekts ist.

## Beispiele

### Die `toJSON`-Methode verwenden

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

Um einen JSON-String zu erhalten, können Sie [`JSON.stringify(lastRecord)`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) direkt verwenden; es wird `toJSON()` automatisch aufrufen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
