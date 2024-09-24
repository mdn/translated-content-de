---
title: "Geolocation: watchPosition() Methode"
short-title: watchPosition()
slug: Web/API/Geolocation/watchPosition
l10n:
  sourceCommit: 3fde60e07c74ad4954a0c77fdd80958c7d07f088
---

{{securecontext_header}}{{ APIref("Geolocation API") }}

Die **`watchPosition()`** Methode der {{domxref("Geolocation")}} Schnittstelle wird verwendet, um eine Handler-Funktion zu registrieren, die automatisch jedes Mal aufgerufen wird, wenn sich die Position des Geräts ändert. Sie können optional auch eine Fehlerbehandlungs-Callback-Funktion angeben.

Beachten Sie, dass dieses Feature zusätzlich zu der Anforderung eines sicheren Kontextes möglicherweise durch die [`geolocation`](/de/docs/Web/HTTP/Headers/Permissions-Policy/geolocation) `Permissions-Policy` blockiert werden kann und dass eine ausdrückliche Erlaubnis des Benutzers erforderlich ist. Bei Bedarf wird der Benutzer bei Aufruf dieser Methode aufgefordert. Der Berechtigungsstatus kann mit der Berechtigung `geolocation` in der [Permissions API](/de/docs/Web/API/Permissions_API) abgefragt werden.

## Syntax

```js-nolint
watchPosition(success)
watchPosition(success, error)
watchPosition(success, error, options)
```

### Parameter

- `success`
  - : Eine Callback-Funktion, die ein {{domxref("GeolocationPosition")}} Objekt als Eingabeparameter nimmt.
- `error` {{optional_inline}}
  - : Eine optionale Callback-Funktion, die ein {{domxref("GeolocationPositionError")}} Objekt als Eingabeparameter nimmt.
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das Konfigurationsoptionen für die Standortüberwachung bietet.
    Siehe {{domxref("Geolocation.getCurrentPosition()")}} für weitere Details zu möglichen Optionen.

### Rückgabewert

Eine Ganzzahl-ID, die den registrierten Handler identifiziert.
Die ID kann an die {{domxref("Geolocation.clearWatch()")}} übergeben werden, um den Handler zu deregistrieren.

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

- [Verwendung der Geolocation API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- Die zugehörige Schnittstelle, {{domxref("Geolocation")}}, und der Zugriff darauf —
  {{domxref("Navigator.geolocation")}}.
- Die gegensätzliche Operation: {{domxref("Geolocation.clearWatch()")}}
- Eine ähnliche Methode: {{domxref("Geolocation.getCurrentPosition()")}}
