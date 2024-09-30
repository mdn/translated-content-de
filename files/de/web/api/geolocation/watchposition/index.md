---
title: "Geolocation: watchPosition() Methode"
short-title: watchPosition()
slug: Web/API/Geolocation/watchPosition
l10n:
  sourceCommit: 3fde60e07c74ad4954a0c77fdd80958c7d07f088
---

{{securecontext_header}}{{ APIref("Geolocation API") }}

Die **`watchPosition()`**-Methode des [`Geolocation`](/de/docs/Web/API/Geolocation)-Interfaces wird verwendet, um eine Handler-Funktion zu registrieren, die automatisch aufgerufen wird, sobald sich die Position des Geräts ändert.
Optional kann auch eine Fehlerbehandlungs-Callback-Funktion angegeben werden.

Beachten Sie, dass neben der Anforderung eines sicheren Kontexts diese Funktion möglicherweise durch die [`geolocation`](/de/docs/Web/HTTP/Headers/Permissions-Policy/geolocation)-`Permissions-Policy` blockiert wird und auch die ausdrückliche Erlaubnis des Benutzers erforderlich ist.
Falls erforderlich, wird der Benutzer aufgefordert, wenn diese Methode aufgerufen wird.
Der Berechtigungsstatus kann mithilfe der `geolocation`-Benutzerberechtigung in der [Permissions API](/de/docs/Web/API/Permissions_API) abgefragt werden.

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
  - : Ein optionales Objekt, das Konfigurationsoptionen für die Standortüberwachung bietet.
    Siehe [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition) für weitere Details zu möglichen Optionen.

### Rückgabewert

Eine Ganzzahl-ID, die den registrierten Handler identifiziert.
Die ID kann an [`Geolocation.clearWatch()`](/de/docs/Web/API/Geolocation/clearWatch) übergeben werden, um den Handler abzumelden.

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

- [Die Geolocation API verwenden](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- Das Interface, zu dem sie gehört, [`Geolocation`](/de/docs/Web/API/Geolocation), und wie man darauf zugreift —
  [`Navigator.geolocation`](/de/docs/Web/API/Navigator/geolocation).
- Die entgegengesetzte Operation: [`Geolocation.clearWatch()`](/de/docs/Web/API/Geolocation/clearWatch)
- Eine ähnliche Methode: [`Geolocation.getCurrentPosition()`](/de/docs/Web/API/Geolocation/getCurrentPosition)
