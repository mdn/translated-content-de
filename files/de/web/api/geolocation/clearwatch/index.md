---
title: "Geolocation: clearWatch()-Methode"
short-title: clearWatch()
slug: Web/API/Geolocation/clearWatch
l10n:
  sourceCommit: 049b078b0fff80875027b89802b0399138df63a6
---

{{securecontext_header}}{{ APIref("Geolocation API") }}

Die **`clearWatch()`**-Methode der {{domxref("Geolocation")}}-Schnittstelle wird verwendet, um zuvor mit {{domxref("Geolocation.watchPosition()")}} installierte Überwachungs-Handler für den Standort/Fehler zu deregistrieren.

## Syntax

```js-nolint
clearWatch(id)
```

### Parameter

- `id`
  - : Die ID-Nummer, die von der {{domxref("Geolocation.watchPosition()")}}-Methode zurückgegeben wird, wenn Sie den zu entfernenden Handler installiert haben.

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
    console.log("Herzlichen Glückwunsch, Sie haben das Ziel erreicht!");
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

- [Die Geolokalisierung verwenden](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("Geolocation")}}
- {{domxref("Geolocation.watchPosition()")}}
- {{domxref("Geolocation.getCurrentPosition()")}}
