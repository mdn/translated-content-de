---
title: "GeolocationCoordinates: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/GeolocationCoordinates/toJSON
l10n:
  sourceCommit: 4558d208395a5b1df4db44b0c8ef4e9a0f8adbbf
---

{{APIRef("Geolocation API")}}

Die **`toJSON()`**-Methode der [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates)-Schnittstelle ist ein [Serializer](/de/docs/Glossary/Serialization); sie liefert eine JSON-Darstellung des [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates)-Objekts.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("JSON")}}-Objekt, das die Serialisierung des [`GeolocationCoordinates`](/de/docs/Web/API/GeolocationCoordinates)-Objekts darstellt.

## Beispiele

### Verwendung der `toJSON()`-Methode

In diesem Beispiel gibt der Aufruf von `position.coords.toJSON()` eine JSON-Darstellung des `GeolocationCoordinates`-Objekts zurück.

```js
navigator.geolocation.getCurrentPosition((position) => {
  console.log(position.coords.toJSON());
});
```

Dies würde ein JSON-Objekt wie folgt protokollieren:

```json
{
  "accuracy": 12.0,
  "latitude": 53.0,
  "longitude": 8.0,
  "altitude": null,
  "altitudeAccuracy": null,
  "heading": null,
  "speed": null
}
```

Um einen JSON-String zu erhalten, können Sie [`JSON.stringify(position.coords)`](/de/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) direkt verwenden; diese Methode ruft `toJSON()` automatisch auf.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
