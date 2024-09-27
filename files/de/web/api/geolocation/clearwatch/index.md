---
title: "Geolocation: clearWatch() Methode"
short-title: clearWatch()
slug: Web/API/Geolocation/clearWatch
l10n:
  sourceCommit: 049b078b0fff80875027b89802b0399138df63a6
---

{{securecontext_header}}{{ APIref("Geolocation API") }}

Die **`clearWatch()`**-Methode der [`Geolocation`](/de/docs/Web/API/Geolocation)-Schnittstelle wird verwendet, um Überwachungs-Handler für Positionen/Fehler zu deregistrieren, die zuvor mit [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition) installiert wurden.

## Syntax

```js-nolint
clearWatch(id)
```

### Parameter

- `id`
  - : Die ID-Nummer, die von der [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition)-Methode zurückgegeben wird, wenn Sie den Handler installieren, den Sie entfernen möchten.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
let id;
let target;
let options;

function success(pos) {
  const crd = pos.coords;

  if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
    console.log("Congratulations, you've reached the target!");
    navigator.geolocation.clearWatch(id);
  }
}

function error(err) {
  console.error(`ERROR(${err.code}): ${err.message}`);
}

target = {
  latitude: 0,
  longitude: 0,
};

options = {
  enableHighAccuracy: false,
  timeout: 5000,
  maximumAge: 0,
};

id = navigator.geolocation.watchPosition(success, error, options);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Geolocation](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- [`Geolocation`](/de/docs/Web/API/Geolocation)
- [`Geolocation.watchPosition()`](/de/docs/Web/API/Geolocation/watchPosition)
- [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition)
