---
title: "GeolocationPosition: Methode toJSON()"
short-title: toJSON()
slug: Web/API/GeolocationPosition/toJSON
l10n:
  sourceCommit: 15d531b54c7f0d96ac80ef00b494fd40743d59ce
---

{{APIRef("Geolocation API")}}

Die Methode **`toJSON()`** des Interfaces [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition) gibt ein JSON-serialisierbares, einfaches Objekt zurück, das das `GeolocationPosition`-Objekt repräsentiert.

Die Methode wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `GeolocationPosition`-Objekt verarbeitet wird.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein JSON-serialisierbares, einfaches Objekt mit den folgenden Eigenschaften:

- [`timestamp`](/de/docs/Web/API/GeolocationPosition/timestamp)
- [`coords`](/de/docs/Web/API/GeolocationPosition/coords)

Der Wert jeder Eigenschaft wird unverändert kopiert. Wenn das zurückgegebene Objekt an {{jsxref("JSON.stringify()")}} übergeben wird, wird die Eigenschaft `coords` mithilfe von [`GeolocationCoordinates.toJSON()`](/de/docs/Web/API/GeolocationCoordinates/toJSON) weiter serialisiert.

## Beispiele

### toJSON() direkt aufrufen

Dieses Beispiel ruft ein `GeolocationPosition`-Objekt ab. Ein direkter Aufruf von `toJSON()` gibt ein einfaches Objekt zurück. Dessen Eigenschaften haben dieselben Werte wie die entsprechenden Eigenschaften des ursprünglichen Objekts.

```js
navigator.geolocation.getCurrentPosition((position) => {
  const json = position.toJSON();
  console.log(json); // A plain object
  console.log(typeof json); // "object"
  console.log(json.timestamp); // Same value as position.timestamp
});
```

### In einen JSON-String serialisieren

Innerhalb der Callback-Funktion aus dem vorherigen Beispiel kann dasselbe Objekt mit {{jsxref("JSON.stringify()")}} serialisiert werden. Dabei wird die Methode `toJSON()` automatisch aufgerufen.

```js
console.log(JSON.stringify(position));
```

Dadurch würde ein JSON-String wie der folgende protokolliert (zur besseren Lesbarkeit formatiert):

```json
{
  "timestamp": 1717509611840,
  "coords": {
    "accuracy": 13.5,
    "latitude": 53.125,
    "longitude": 8.75,
    "altitude": null,
    "altitudeAccuracy": null,
    "heading": null,
    "speed": null
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
