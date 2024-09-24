---
title: "Geolocation: getCurrentPosition()-Methode"
short-title: getCurrentPosition()
slug: Web/API/Geolocation/getCurrentPosition
l10n:
  sourceCommit: 3fde60e07c74ad4954a0c77fdd80958c7d07f088
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

Die **`getCurrentPosition()`**-Methode der {{domxref("Geolocation")}}-Schnittstelle wird verwendet, um die aktuelle Position des Geräts zu ermitteln.

Beachten Sie, dass diese Funktion neben der Anforderung eines sicheren Kontexts auch durch die [`geolocation`](/de/docs/Web/HTTP/Headers/Permissions-Policy/geolocation) `Permissions-Policy` blockiert werden kann und dass die explizite Erlaubnis des Benutzers erforderlich ist.
Falls erforderlich, wird der Benutzer aufgefordert, wenn diese Methode aufgerufen wird.
Der Berechtigungsstatus kann mit der `geolocation`-Benutzerberechtigung in der [Permissions API](/de/docs/Web/API/Permissions_API) abgefragt werden.

## Syntax

```js-nolint
getCurrentPosition(success)
getCurrentPosition(success, error)
getCurrentPosition(success, error, options)
```

### Parameter

- `success`
  - : Eine Callback-Funktion, die ein {{domxref("GeolocationPosition")}}-Objekt als einzigen Eingabewert verwendet.
- `error` {{optional_inline}}
  - : Eine optionale Callback-Funktion, die ein {{domxref("GeolocationPositionError")}}-Objekt als einzigen Eingabewert verwendet.
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das folgende Parameter enthält:
    - `maximumAge` {{optional_inline}}
      - : Ein positiver `long`-Wert, der das maximale Alter in Millisekunden angibt, das eine potenzielle zwischengespeicherte Position haben darf, um akzeptabel zu sein. Wenn auf `0` gesetzt, bedeutet dies, dass das Gerät keine zwischengespeicherte Position verwenden darf und versuchen muss, die aktuelle Position zu ermitteln. Wenn auf {{jsxref("Infinity")}} gesetzt, muss das Gerät eine zwischengespeicherte Position unabhängig von ihrem Alter zurückgeben. Standard: `0`.
    - `timeout` {{optional_inline}}
      - : Ein positiver `long`-Wert, der die maximale Zeitdauer in Millisekunden darstellt, die dem Gerät zur Verfügung steht, um eine Position zurückzugeben. Der Standardwert ist {{jsxref("Infinity")}}, was bedeutet, dass `getCurrentPosition()` nicht zurückkehrt, bis die Position verfügbar ist.
    - `enableHighAccuracy` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, dass die Anwendung die bestmöglichen Ergebnisse erhalten möchte. Wenn `true` und das Gerät in der Lage ist, eine genauere Position bereitzustellen, wird es dies tun. Beachten Sie, dass dies zu längeren Antwortzeiten oder erhöhtem Stromverbrauch führen kann (beispielsweise mit einem GPS-Chip in einem mobilen Gerät). Andererseits, wenn `false`, kann das Gerät Ressourcen schonen, indem es schneller reagiert und/oder weniger Strom verbraucht. Standard: `false`.

### Rückgabewert

Kein ({{jsxref("undefined")}}).

## Beispiele

```js
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  const crd = pos.coords;

  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Geolocation-API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- {{domxref("Navigator.geolocation")}}
