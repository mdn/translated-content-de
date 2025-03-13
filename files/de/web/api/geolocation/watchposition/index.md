---
title: "Geolocation: watchPosition() Methode"
short-title: watchPosition()
slug: Web/API/Geolocation/watchPosition
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{securecontext_header}}{{ APIref("Geolocation API") }}

Die **`watchPosition()`**-Methode der [`Geolocation`](/de/docs/Web/API/Geolocation)-Schnittstelle dient zur Registrierung einer Handlerfunktion, die automatisch aufgerufen wird, jedes Mal wenn sich die Position des Geräts ändert. Optional können Sie auch eine Fehlerbehandlungs-Callback-Funktion angeben.

Beachten Sie, dass diese Funktion zusätzlich zu einem sicheren Kontext durch die [`geolocation`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/geolocation) `Permissions-Policy` blockiert werden kann und zudem die ausdrückliche Erlaubnis des Benutzers erforderlich ist. Falls nötig, wird der Benutzer aufgefordert, wenn diese Methode aufgerufen wird. Der Berechtigungsstatus kann mit der `geolocation`-Benutzerberechtigung in der [Permissions API](/de/docs/Web/API/Permissions_API) abgefragt werden.

## Syntax

```js-nolint
watchPosition(success)
watchPosition(success, error)
watchPosition(success, error, options)
```

### Parameter

- `success`
  - : Eine Callback-Funktion, die ein [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)-Objekt als Eingabeparameter akzeptiert.
- `error` {{optional_inline}}
  - : Eine optionale Callback-Funktion, die ein [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Objekt als Eingabeparameter akzeptiert.
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das Konfigurationsoptionen für das Positions-Tracking bereitstellt. Weitere Details zu möglichen Optionen finden Sie unter [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition).

### Rückgabewert

Eine ganzzahlige ID, die den registrierten Handler identifiziert. Diese ID kann an die [`Geolocation.clearWatch()`](/de/docs/Web/API/Geolocation/clearWatch) übergeben werden, um den Handler zu deregistrieren.

## Beispiele

```js
let id;
let target;
let options;

function success(pos) {
  const crd = pos.coords;

  if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
    console.log("Congratulations, you reached the target");
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

- [Verwendung der Geolocation-API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- Die dazugehörige Schnittstelle, [`Geolocation`](/de/docs/Web/API/Geolocation), und der Zugriff darauf über
  [`Navigator.geolocation`](/de/docs/Web/API/Navigator/geolocation).
- Die entgegengesetzte Operation: [`Geolocation.clearWatch()`](/de/docs/Web/API/Geolocation/clearWatch)
- Eine ähnliche Methode: [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition)
