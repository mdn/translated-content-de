---
title: "NavigatorUAData: getHighEntropyValues() Methode"
short-title: getHighEntropyValues()
slug: Web/API/NavigatorUAData/getHighEntropyValues
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`getHighEntropyValues()`** Methode des [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData) Interfaces ist ein {{jsxref("Promise")}}, das mit einem Wörterbuchobjekt aufgelöst wird, das die _High-Entropy_-Werte enthält, die der User-Agent zurückgibt.

> [!NOTE]
> Die Begriffe _High-Entropy_ und _Low-Entropy_ beziehen sich auf die Menge an Informationen, die diese Werte über den Browser preisgeben.
> Die als Eigenschaften zurückgegebenen Werte werden als Low-Entropy betrachtet und sind unwahrscheinlich, einen Benutzer zu identifizieren.
> Die von `getHighEntropyValues()` zurückgegebenen Werte könnten potenziell mehr Informationen offenbaren.
> Diese Werte werden daher über ein {{jsxref("Promise")}} abgerufen, das dem Browser Zeit gibt, die Benutzererlaubnis anzufordern oder andere Überprüfungen vorzunehmen.

## Syntax

```js-nolint
getHighEntropyValues(hints)
```

### Parameter

- `hints`
  - : Ein Array, das die zurückzugebenden Hinweise enthält, eine oder mehrere von:
    - `"architecture"`
    - `"bitness"`
    - `"formFactor"`
    - `"fullVersionList"`
    - `"model"`
    - `"platformVersion"`
    - `"uaFullVersion"` {{Deprecated_Inline}}
    - `"wow64"`

### Rückgabewert

Ein {{jsxref("Promise")}}, das in ein Objekt aufgelöst wird, welches einige oder alle der folgenden Werte enthält (basierend auf den angeforderten Hinweisen):

- `brands`
  - : Gibt ein Array von Objekten zurück, das `brand` und `version` enthält, die die Browser-Marke und ihre Version angeben (die gleiche Information, die von [`NavigatorUAData.brands`](/de/docs/Web/API/NavigatorUAData/brands) bereitgestellt wird).
    Beachten Sie, dass diese Informationen in dem {{HTTPHeader("Sec-CH-UA")}} Header an einen Server gesendet werden können (ein [Low-Entropy-Client-Hint](/de/docs/Web/HTTP/Guides/Client_hints#low_entropy_hints)).
- `mobile`
  - : Gibt `true` zurück, wenn der User-Agent auf einem mobilen Gerät läuft (die gleiche Information, die von [`NavigatorUAData.mobile`](/de/docs/Web/API/NavigatorUAData/mobile) bereitgestellt wird).
    Beachten Sie, dass diese Informationen in dem {{HTTPHeader("Sec-CH-UA-Mobile")}} Header an einen Server gesendet werden können (ein [Low-Entropy-Client-Hint](/de/docs/Web/HTTP/Guides/Client_hints#low_entropy_hints)).
- `platform`
  - : Gibt einen String zurück, der die Plattform beschreibt, auf der der User-Agent läuft, wie z.B. `"Windows"` (die gleiche Information, die von [`NavigatorUAData.platform`](/de/docs/Web/API/NavigatorUAData/platform) bereitgestellt wird).
    Beachten Sie, dass diese Informationen in dem {{HTTPHeader("Sec-CH-UA-Platform")}} Header an einen Server gesendet werden können (ein [Low-Entropy-Client-Hint](/de/docs/Web/HTTP/Guides/Client_hints#low_entropy_hints)).
- `architecture`
  - : Ein String, der die Plattform-Architektur enthält. Zum Beispiel `"x86"`.
    Beachten Sie, dass diese Informationen in dem {{HTTPHeader("Sec-CH-UA-Arch")}} Header an einen Server gesendet werden können, nachdem der Server sie explizit im {{HTTPHeader("Accept-CH")}} Header angefordert hat.
- `bitness`
  - : Ein String, der die Architektur-Bitness enthält. Zum Beispiel `"32"` oder `"64"`.
    Beachten Sie, dass diese Informationen in dem {{HTTPHeader("Sec-CH-UA-Bitness")}} Header an einen Server gesendet werden können, wenn der Server sie explizit im {{HTTPHeader("Accept-CH")}} Header anfordert.
- `formFactor`
  - : Ein String, der den Formfaktor eines Geräts enthält. Zum Beispiel `"Tablet"` oder `"VR"`.
    Beachten Sie, dass diese Informationen in dem {{HTTPHeader("Sec-CH-UA-Form-Factors")}} Header an einen Server gesendet werden können, wenn der Server sie explizit im {{HTTPHeader("Accept-CH")}} Header anfordert.
- `fullVersionList`
  - : Ein Array von Objekten mit den Eigenschaften `"brand"` und `"version"`, die den Browsernamen und die vollständige Version darstellen.
    Zum Beispiel, `{"brand": "Google Chrome", "version": "103.0.5060.134"}, {"brand": "Chromium", "version": "103.0.5060.134"}`.
    Bitte beachten Sie, dass ein Objekt absichtlich ungültige Informationen enthalten kann, um zu verhindern, dass Websites sich auf eine feste Liste von Browsern verlassen.
    Beachten Sie, dass diese Informationen in dem {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} Header an einen Server gesendet werden können, wenn der Server sie explizit im {{HTTPHeader("Accept-CH")}} Header anfordert.
- `model`
  - : Ein String, der das Modell des mobilen Geräts enthält. Zum Beispiel `"Pixel 2XL"`. Wenn das Gerät kein mobiles Gerät oder das Gerätemodell nicht bekannt ist, wird `model` `""` sein.
    Beachten Sie, dass diese Informationen in dem {{HTTPHeader("Sec-CH-UA-Model")}} Header an einen Server gesendet werden können, wenn der Server sie explizit im {{HTTPHeader("Accept-CH")}} Header anfordert.
- `platformVersion`
  - : Ein String, der die Plattformversion enthält. Der Plattformname selbst ist immer als Low-Entropy-Hinweis `platform` verfügbar. Zum Beispiel `"10.0"`.
    Beachten Sie, dass diese Informationen in dem {{HTTPHeader("Sec-CH-UA-Platform-Version")}} Header an einen Server gesendet werden können, wenn der Server sie explizit im {{HTTPHeader("Accept-CH")}} Header anfordert.
- `uaFullVersion` {{Deprecated_Inline}}
  - : Ein String, der die vollständige Browserversion enthält. Zum Beispiel `"103.0.5060.134"`. Veraltet zugunsten von `fullVersionList`.
    Beachten Sie, dass diese Informationen in dem {{HTTPHeader("Sec-CH-UA-Full-Version")}} Header an einen Server gesendet werden können, wenn der Server sie explizit im {{HTTPHeader("Accept-CH")}} Header anfordert.
- `wow64`
  - : Ein Boolean-Wert, der angibt, ob das Binary des User Agents im 32-Bit-Modus auf 64-Bit Windows ausgeführt wird.
    Beachten Sie, dass diese Informationen in dem {{HTTPHeader("Sec-CH-UA-WoW64")}} Header an einen Server gesendet werden können, wenn der Server sie explizit im {{HTTPHeader("Accept-CH")}} Header anfordert.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der User-Agent entscheidet, dass einer oder mehrere der angeforderten `hints` nicht zurückgegeben werden sollten.

## Beispiele

Im folgenden Beispiel werden eine Reihe von Hinweisen mithilfe der `getHighEntropyValues()` Methode angefordert.
Sobald das Promise aufgelöst wird, werden diese Informationen in die Konsole ausgegeben.

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

- Diese Werte sind auch über HTTP-Request-Header verfügbar:
  - [Low-Entropy-Client-Hints](/de/docs/Web/HTTP/Guides/Client_hints#low_entropy_hints) werden automatisch gesendet:
    - {{HTTPHeader("Sec-CH-UA")}}
    - {{HTTPHeader("Sec-CH-UA-Mobile")}}
    - {{HTTPHeader("Sec-CH-UA-Platform")}}
  - Server können anfordern, High-Entropy-Client-Hints bei nachfolgenden Anfragen zu erhalten, indem sie den {{HTTPHeader("Accept-CH")}} Header verwenden:
    - {{HTTPHeader("Sec-CH-UA-Arch")}}
    - {{HTTPHeader("Sec-CH-UA-Bitness")}}
    - {{HTTPHeader("Sec-CH-UA-Full-Version")}}
    - {{HTTPHeader("Sec-CH-UA-Model")}}
    - {{HTTPHeader("Sec-CH-UA-Platform-Version")}}
