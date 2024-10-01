---
title: "GeolocationPosition: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/GeolocationPosition/toJSON
l10n:
  sourceCommit: 4558d208395a5b1df4db44b0c8ef4e9a0f8adbbf
---

{{APIRef("Geolocation API")}}

Die **`toJSON()`**-Methode des [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)-Interfaces ist ein {{Glossary("Serialization", "Serializer")}}; sie gibt eine JSON-Darstellung des [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)-Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("JSON")}}-Objekt, das die Serialisierung des [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)-Objekts darstellt.

## Beispiele

### Verwendung der `toJSON()`-Methode

In diesem Beispiel gibt der Aufruf von `position.toJSON()` eine JSON-Darstellung des `GeolocationPosition`-Objekts zurück.

```js
navigator.geolocation.getCurrentPosition((position) => {
  console.log(position.toJSON());
});
```

Dies würde ein JSON-Objekt wie folgt protokollieren:

```json
{
  "timestamp": 1717509611840,
  "coords": {
    "accuracy": 13.0,
    "latitude": 53.0,
    "longitude": 8.0,
    "altitude": null,
    "altitudeAccuracy": null,
    "heading": null,
    "speed": null
  }
}
```

Um einen JSON-String zu erhalten, können Sie direkt [`JSON.stringify(position)`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) verwenden; diese Funktion ruft `toJSON()` automatisch auf.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
