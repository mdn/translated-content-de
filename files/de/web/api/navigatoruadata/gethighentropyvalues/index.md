---
title: "NavigatorUAData: getHighEntropyValues() Methode"
short-title: getHighEntropyValues()
slug: Web/API/NavigatorUAData/getHighEntropyValues
l10n:
  sourceCommit: 217e25f9d2c39d2031ecf50f891c27e7f5b96e06
---

{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`getHighEntropyValues()`**-Methode des [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData)-Interfaces ist ein {{jsxref("Promise")}}, das mit einem Wörterbuch-Objekt aufgelöst wird, das die _high entropy_-Werte enthält, die der User-Agent zurückgibt.

> [!NOTE]
> Die Begriffe _high entropy_ und _low entropy_ beziehen sich auf die Menge an Informationen, die diese Werte über den Browser preisgeben.
> Die als Eigenschaften zurückgegebenen Werte werden als low entropy betrachtet und sind unwahrscheinlich geeignet, einen Benutzer zu identifizieren.
> Die von `getHighEntropyValues()` zurückgegebenen Werte könnten potenziell mehr Informationen preisgeben.
> Diese Werte werden daher über ein {{jsxref("Promise")}} abgerufen, um dem Browser Zeit zu geben, die Erlaubnis des Benutzers anzufordern oder andere Prüfungen durchzuführen.

## Syntax

```js-nolint
getHighEntropyValues(hints)
```

### Parameter

- `hints`

  - : Ein Array, das die zurückzugebenden Hinweise enthält, einer oder mehrere von:

    - `"architecture"`
    - `"bitness"`
    - `"formFactor"`
    - `"fullVersionList"`
    - `"model"`
    - `"platformVersion"`
    - `"uaFullVersion"` {{Deprecated_Inline}}
    - `"wow64"`

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem Objekt aufgelöst wird, das einige oder alle der folgenden Werte enthält (basierend auf den angeforderten Hinweisen):

- `brands`
  - : Gibt ein Array von Objekten zurück, das `brand` und `version` enthält und die Browsermarke und deren Version angibt (dieselben Informationen wie von [`NavigatorUAData.brands`](/de/docs/Web/API/NavigatorUAData/brands) bereitgestellt).
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA")}}-Header (ein [low-entropy client hint](/de/docs/Web/HTTP/Client_hints#low_entropy_hints)) an einen Server gesendet werden können.
- `mobile`
  - : Gibt `true` zurück, wenn der User-Agent auf einem mobilen Gerät läuft (dieselben Informationen wie von [`NavigatorUAData.mobile`](/de/docs/Web/API/NavigatorUAData/mobile) bereitgestellt).
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA-Mobile")}}-Header (ein [low-entropy client hint](/de/docs/Web/HTTP/Client_hints#low_entropy_hints)) an einen Server gesendet werden können.
- `platform`
  - : Gibt eine Zeichenkette zurück, die die Plattform beschreibt, auf der der User-Agent läuft, wie `"Windows"` (dieselben Informationen wie von [`NavigatorUAData.platform`](/de/docs/Web/API/NavigatorUAData/platform) bereitgestellt).
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA-Platform")}}-Header (ein [low-entropy client hint](/de/docs/Web/HTTP/Client_hints#low_entropy_hints)) an einen Server gesendet werden können.
- `architecture`
  - : Eine Zeichenkette, die die Plattformarchitektur enthält. Zum Beispiel `"x86"`.
    Beachten Sie, dass diese Informationen an einen Server im {{HTTPHeader("Sec-CH-UA-Arch")}} Header gesendet werden können, nachdem der Server sie ausdrücklich im {{HTTPHeader("Accept-CH")}} Header angefordert hat.
- `bitness`
  - : Eine Zeichenkette, die die Architektur-Bitbreite enthält. Zum Beispiel `"32"` oder `"64"`.
    Beachten Sie, dass diese Informationen an einen Server im {{HTTPHeader("Sec-CH-UA-Bitness")}} Header gesendet werden können, wenn der Server sie ausdrücklich im {{HTTPHeader("Accept-CH")}} Header anfordert.
- `formFactor`
  - : Eine Zeichenkette, die den Formfaktor eines Geräts enthält. Zum Beispiel `"Tablet"` oder `"VR"`.
    Beachten Sie, dass diese Informationen an einen Server im {{HTTPHeader("Sec-CH-UA-Form-Factors")}} Header gesendet werden können, wenn der Server sie ausdrücklich im {{HTTPHeader("Accept-CH")}} Header anfordert.
- `fullVersionList`
  - : Ein Array von Objekten mit den Eigenschaften `"brand"` und `"version"`, die den Browsernamen und die vollständige Version repräsentieren.
    Zum Beispiel `{"brand": "Google Chrome", "version": "103.0.5060.134"}, {"brand": "Chromium", "version": "103.0.5060.134"}`.
    Bitte beachten Sie, dass ein Objekt absichtlich ungültige Informationen enthalten kann, um zu verhindern, dass Websites sich auf eine feste Liste von Browsern verlassen.
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA-Full-Version-List")}}-Header gesendet werden können, wenn der Server sie ausdrücklich im {{HTTPHeader("Accept-CH")}}-Header anfordert.
- `model`
  - : Eine Zeichenkette, die das Modell eines mobilen Geräts enthält. Zum Beispiel `"Pixel 2XL"`. Wenn das Gerät kein mobiles Gerät ist oder das Gerätemodell nicht bekannt ist, wird `model` `""` sein.
    Beachten Sie, dass diese Informationen an einen Server im {{HTTPHeader("Sec-CH-UA-Model")}} Header gesendet werden können, wenn der Server sie ausdrücklich im {{HTTPHeader("Accept-CH")}} Header anfordert.
- `platformVersion`
  - : Eine Zeichenkette, die die Plattformversion enthält. Der Plattformname selbst ist immer als low-entropy-Hinweis `platform` verfügbar. Zum Beispiel `"10.0"`.
    Beachten Sie, dass diese Informationen an einen Server im {{HTTPHeader("Sec-CH-UA-Platform-Version")}} Header gesendet werden können, wenn der Server sie ausdrücklich im {{HTTPHeader("Accept-CH")}} Header anfordert.
- `uaFullVersion` {{Deprecated_Inline}}
  - : Eine Zeichenkette, die die vollständige Browserversion enthält. Beispielsweise `"103.0.5060.134"`. Veraltet zugunsten der `fullVersionList`.
    Beachten Sie, dass diese Informationen an einen Server im {{HTTPHeader("Sec-CH-UA-Full-Version")}} Header gesendet werden können, wenn der Server sie ausdrücklich im {{HTTPHeader("Accept-CH")}} Header anfordert.
- `wow64`
  - : Ein Boolean, der angibt, ob das Binärprogramm des User Agents im 32-Bit-Modus auf 64-Bit-Windows läuft.
    Beachten Sie, dass diese Informationen an einen Server im {{HTTPHeader("Sec-CH-UA-WoW64")}} Header gesendet werden können, wenn der Server sie ausdrücklich im {{HTTPHeader("Accept-CH")}} Header anfordert.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der User-Agent entscheidet, dass einer oder mehrere der angeforderten `hints` nicht zurückgegeben werden sollten.

## Beispiele

Im folgenden Beispiel werden mit der `getHighEntropyValues()`-Methode mehrere Hinweise angefordert.
Wenn das Promise aufgelöst wird, werden diese Informationen in der Konsole ausgegeben.

```js
navigator.userAgentData
  .getHighEntropyValues([
    "architecture",
    "model",
    "platformVersion",
    "fullVersionList",
  ])
  .then((values) => console.log(values));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Diese Werte sind auch als HTTP-Anforderungsheader verfügbar:
  - [Low-entropy client hints](/de/docs/Web/HTTP/Client_hints#low_entropy_hints) werden automatisch gesendet:
    - {{HTTPHeader("Sec-CH-UA")}}
    - {{HTTPHeader("Sec-CH-UA-Mobile")}}
    - {{HTTPHeader("Sec-CH-UA-Platform")}}
  - Server können anfordern, hohe Entropie-Client-Hinweise bei nachfolgenden Anfragen zu erhalten, indem sie den {{HTTPHeader("Accept-CH")}} Header verwenden:
    - {{HTTPHeader("Sec-CH-UA-Arch")}}
    - {{HTTPHeader("Sec-CH-UA-Bitness")}}
    - {{HTTPHeader("Sec-CH-UA-Full-Version")}}
    - {{HTTPHeader("Sec-CH-UA-Model")}}
    - {{HTTPHeader("Sec-CH-UA-Platform-Version")}}
