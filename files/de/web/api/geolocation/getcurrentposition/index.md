---
title: "Geolocation: getCurrentPosition() Methode"
short-title: getCurrentPosition()
slug: Web/API/Geolocation/getCurrentPosition
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

Die **`getCurrentPosition()`** Methode des [`Geolocation`](/de/docs/Web/API/Geolocation)-Interfaces wird verwendet, um die aktuelle Position des Geräts zu ermitteln.

Beachten Sie, dass neben der Notwendigkeit eines sicheren Kontexts diese Funktion möglicherweise durch die [`geolocation`](/de/docs/Web/HTTP/Reference/Headers/Permissions-Policy/geolocation) `Permissions-Policy` blockiert wird und auch die ausdrückliche Erlaubnis durch den Benutzer erforderlich ist. Falls erforderlich, wird der Benutzer aufgefordert, wenn diese Methode aufgerufen wird. Der Berechtigungsstatus kann mit der `geolocation`-Berechtigung im [Permissions API](/de/docs/Web/API/Permissions_API) abgefragt werden.

## Syntax

```js-nolint
getCurrentPosition(success)
getCurrentPosition(success, error)
getCurrentPosition(success, error, options)
```

### Parameter

- `success`
  - : Eine Callback-Funktion, die ein [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition)-Objekt als einziges Eingabeparameter übernimmt.
- `error` {{optional_inline}}
  - : Eine optionale Callback-Funktion, die ein [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)-Objekt als einziges Eingabeparameter übernimmt.
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das die folgenden Parameter enthält:
    - `maximumAge` {{optional_inline}}
      - : Ein positiver `long`-Wert, der das maximale Alter in Millisekunden eines möglicherweise zwischengespeicherten Standorts angibt, der akzeptabel ist, zurückgegeben zu werden. Wenn auf `0` gesetzt, bedeutet dies, dass das Gerät keinen zwischengespeicherten Standort verwenden kann und versuchen muss, die echte aktuelle Position zu erhalten. Wenn auf {{jsxref("Infinity")}} gesetzt, muss das Gerät unabhängig vom Alter einen zwischengespeicherten Standort zurückgeben. Standard: `0`.
    - `timeout` {{optional_inline}}
      - : Ein positiver `long`-Wert, der die maximale Zeitspanne (in Millisekunden) darstellt, die dem Gerät zur Verfügung steht, um einen Standort zurückzugeben. Der Standardwert ist {{jsxref("Infinity")}}, was bedeutet, dass `getCurrentPosition()` nicht zurückkehrt, bis der Standort verfügbar ist.
    - `enableHighAccuracy` {{optional_inline}}
      - : Ein boolescher Wert, der angibt, dass die Anwendung die bestmöglichen Ergebnisse erhalten möchte. Wenn `true` und das Gerät in der Lage ist, eine genauere Position bereitzustellen, wird dies geschehen. Beachten Sie, dass dies zu langsameren Reaktionszeiten oder erhöhtem Stromverbrauch führen kann (zum Beispiel mit einem GPS-Chip auf einem Mobilgerät). Andererseits, wenn `false`, kann das Gerät die Freiheit haben, Ressourcen zu sparen, indem es schneller antwortet und/oder weniger Energie verbraucht. Standard: `false`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

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

- [Verwendung der Geolocation API](/de/docs/Web/API/Geolocation_API/Using_the_Geolocation_API)
- [`Navigator.geolocation`](/de/docs/Web/API/Navigator/geolocation)
