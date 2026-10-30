---
title: "GeolocationCoordinates: Methode toJSON()"
short-title: toJSON()
slug: Web/API/GeolocationCoordinates/toJSON
l10n:
  sourceCommit: 15d531b54c7f0d96ac80ef00b494fd40743d59ce
---

{{APIRef("Geolocation API")}}

Die Methode **`toJSON()`** des Interfaces [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates) gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `GeolocationCoordinates`-Objekt repräsentiert.

Die Methode wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `GeolocationCoordinates`-Objekt gefunden wird.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein JSON-serialisierbares einfaches Objekt mit den folgenden Eigenschaften:

- [`accuracy`](/de/docs/Web/API/GeolocationCoordinates/accuracy)
- [`latitude`](/de/docs/Web/API/GeolocationCoordinates/latitude)
- [`longitude`](/de/docs/Web/API/GeolocationCoordinates/longitude)
- [`altitude`](/de/docs/Web/API/GeolocationCoordinates/altitude)
- [`altitudeAccuracy`](/de/docs/Web/API/GeolocationCoordinates/altitudeAccuracy)
- [`heading`](/de/docs/Web/API/GeolocationCoordinates/heading)
- [`speed`](/de/docs/Web/API/GeolocationCoordinates/speed)

Der Wert jeder Eigenschaft wird unverändert kopiert.

## Beispiele

### toJSON() direkt aufrufen

Dieses Beispiel ruft ein `GeolocationCoordinates`-Objekt ab. Ein direkter Aufruf von `toJSON()` gibt ein einfaches Objekt zurück. Dessen Eigenschaften haben dieselben Werte wie die entsprechenden Eigenschaften des ursprünglichen Objekts.

```js
navigator.geolocation.getCurrentPosition((position) => {
  const coords = position.coords;

  const json = coords.toJSON();
  console.log(json); // A plain object
  console.log(typeof json); // "object"
  console.log(json.latitude); // Same value as coords.latitude
});
```

### Als JSON-Zeichenfolge serialisieren

Innerhalb der Callback-Funktion aus dem vorherigen Beispiel kann dasselbe Objekt mit {{jsxref("JSON.stringify()")}} serialisiert werden. Dabei wird die Methode `toJSON()` automatisch aufgerufen.

```js
console.log(JSON.stringify(coords));
```

Dadurch würde eine JSON-Zeichenfolge wie die folgende ausgegeben (zur besseren Lesbarkeit formatiert):

```json
{
  "accuracy": 12.5,
  "latitude": 53.125,
  "longitude": 8.75,
  "altitude": null,
  "altitudeAccuracy": null,
  "heading": null,
  "speed": null
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
