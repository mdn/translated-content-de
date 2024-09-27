---
title: "Geolocation: getCurrentPosition()-Methode"
short-title: getCurrentPosition()
slug: Web/API/Geolocation/getCurrentPosition
l10n:
  sourceCommit: 3fde60e07c74ad4954a0c77fdd80958c7d07f088
---

{{securecontext_header}}{{APIRef("Geolocation API")}}

Die **`getCurrentPosition()`**-Methode des [`Geolocation`](/de/docs/Web/API/Geolocation) Interface wird verwendet, um die aktuelle Position des Geräts zu erhalten.

Beachten Sie, dass diese Funktion zusätzlich zu einem sicheren Kontext durch die [`geolocation`](/de/docs/Web/HTTP/Headers/Permissions-Policy/geolocation) `Permissions-Policy` blockiert werden kann und außerdem eine ausdrückliche Erlaubnis des Benutzers erfordert.
Falls erforderlich, wird der Benutzer aufgefordert, wenn diese Methode aufgerufen wird.
Der Berechtigungsstatus kann mit der `geolocation` Benutzerberechtigung in der [Permissions API](/de/docs/Web/API/Permissions_API) abgefragt werden.

## Syntax

```js-nolint
getCurrentPosition(success)
getCurrentPosition(success, error)
getCurrentPosition(success, error, options)
```

### Parameter

- `success`
  - : Eine Callback-Funktion, die ein [`GeolocationPosition`](/de/docs/Web/API/GeolocationPosition) Objekt als einziges Eingabeparameter akzeptiert.
- `error` {{optional_inline}}
  - : Eine optionale Callback-Funktion, die ein [`GeolocationPositionError`](/de/docs/Web/API/GeolocationPositionError)
    Objekt als einziges Eingabeparameter akzeptiert.
- `options` {{optional_inline}}
  - : Ein optionales Objekt, das die folgenden Parameter beinhaltet:
    - `maximumAge` {{optional_inline}}
      - : Ein positiver `long` Wert, der das maximale Alter in Millisekunden eines möglichen zwischengespeicherten Standorts angibt, der akzeptabel ist, zurückgegeben zu werden. Wenn auf `0` gesetzt, bedeutet dies, dass das Gerät keinen zwischengespeicherten Standort verwenden kann und versuchen muss, die tatsächliche aktuelle Position abzurufen. Wenn auf {{jsxref("Infinity")}} gesetzt, muss das Gerät einen zwischengespeicherten Standort zurückgeben, unabhängig von dessen Alter. Standard: `0`.
    - `timeout` {{optional_inline}}
      - : Ein positiver `long` Wert, der die maximale Zeitdauer (in Millisekunden) darstellt, die das Gerät benötigt, um einen Standort zurückzugeben. Der Standardwert ist {{jsxref("Infinity")}}, was bedeutet, dass `getCurrentPosition()` erst zurückkehrt, wenn der Standort verfügbar ist.
    - `enableHighAccuracy` {{optional_inline}}
      - : Ein boolescher Wert, der anzeigt, dass die Anwendung die bestmöglichen Ergebnisse erhalten möchte. Wenn `true` und wenn das Gerät in der Lage ist, eine genauere Position zu liefern, wird es dies tun. Beachten Sie, dass dies zu längeren Antwortzeiten oder erhöhtem Stromverbrauch führen kann (zum Beispiel mit einem GPS-Chip auf einem mobilen Gerät). Andererseits, wenn `false`, kann das Gerät die Freiheit haben, Ressourcen zu schonen, indem es schneller antwortet und/oder weniger Strom verbraucht. Standard: `false`.

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
