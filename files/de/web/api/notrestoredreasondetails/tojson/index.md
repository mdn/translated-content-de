---
title: "NotRestoredReasonDetails: Methode toJSON()"
short-title: toJSON()
slug: Web/API/NotRestoredReasonDetails/toJSON
l10n:
  sourceCommit: 2f3bc982aa82fe341afb61f09f8fa1599d319c6c
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die Methode **`toJSON()`** der Schnittstelle [`NotRestoredReasonDetails`](/de/docs/Web/API/NotRestoredReasonDetails) gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `NotRestoredReasonDetails`-Objekt darstellt.

Die Methode wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `NotRestoredReasonDetails`-Objekt verarbeitet wird.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein JSON-serialisierbares einfaches Objekt mit der folgenden Eigenschaft:

- [`reason`](/de/docs/Web/API/NotRestoredReasonDetails/reason)

Der Wert der Eigenschaft wird unverändert kopiert.

## Beispiele

### toJSON() direkt aufrufen

Dieses Beispiel ruft ein `NotRestoredReasonDetails`-Objekt aus dem ersten Navigationseintrag ab. Der direkte Aufruf von `toJSON()` gibt ein einfaches Objekt zurück. Dessen Eigenschaften haben dieselben Werte wie die entsprechenden Eigenschaften des ursprünglichen Objekts.

```js
const navEntries = performance.getEntriesByType("navigation");
const navEntry = navEntries[0];
const reason = navEntry.notRestoredReasons.reasons[0];

const json = reason.toJSON();
console.log(json); // A plain object
console.log(typeof json); // "object"
console.log(json.reason); // Same value as reason.reason
```

### In einen JSON-String serialisieren

Das Objekt aus dem vorherigen Beispiel wird mit {{jsxref("JSON.stringify()")}} serialisiert. Dabei wird die Methode `toJSON()` automatisch aufgerufen.

```js
console.log(JSON.stringify(reason));
```

Dadurch würde ein JSON-String wie der folgende ausgegeben (zur besseren Lesbarkeit formatiert):

```json
{
  "reason": "masked"
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
- [Gründe für die Blockierung des bfcache überwachen](/de/docs/Web/API/Performance_API/Monitoring_bfcache_blocking_reasons)
- [`PerformanceNavigationTiming.notRestoredReasons`](/de/docs/Web/API/PerformanceNavigationTiming/notRestoredReasons)
