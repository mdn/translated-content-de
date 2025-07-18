---
title: "NavigatorUAData: getHighEntropyValues() Methode"
short-title: getHighEntropyValues()
slug: Web/API/NavigatorUAData/getHighEntropyValues
l10n:
  sourceCommit: b579560f51582bb91e2cc1a3253ed0a5cf61d5f1
---

{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`getHighEntropyValues()`** Methode der [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData) Schnittstelle ist ein {{jsxref("Promise")}}, das mit einem Wörterbuchobjekt aufgelöst wird, das die _high entropy_ Werte enthält, die der User-Agent zurückgibt.

> [!NOTE]
> Die Begriffe _high entropy_ und _low entropy_ beziehen sich auf die Menge an Informationen, die diese Werte über den Browser offenbaren.
> Die als Eigenschaften zurückgegebenen Werte werden als low entropy betrachtet und identifizieren einen Benutzer wahrscheinlich nicht.
> Die Werte, die von `getHighEntropyValues()` zurückgegeben werden, könnten potenziell mehr Informationen preisgeben.
> Diese Werte werden daher über ein {{jsxref("Promise")}} abgerufen, was dem Browser Zeit gibt, die Erlaubnis des Benutzers anzufordern oder andere Überprüfungen durchzuführen.

## Syntax

```js-nolint
getHighEntropyValues(hints)
```

### Parameter

- `hints`
  - : Ein Array, das die zurückzugebenden Hinweise enthält, eine oder mehrere der folgenden:
    - `"architecture"`
    - `"bitness"`
    - `"formFactors"`
    - `"fullVersionList"`
    - `"model"`
    - `"platformVersion"`
    - `"uaFullVersion"` {{Deprecated_Inline}}
    - `"wow64"`

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem Objekt aufgelöst wird, das einige oder alle der folgenden Werte enthält (basierend auf den angeforderten Hinweisen):

- `brands`
  - : Gibt ein Array von Objekten zurück, das `brand` und `version` enthält, die die Browsermarke und deren Version angeben (dieselben Informationen wie bereitgestellt von [`NavigatorUAData.brands`](/de/docs/Web/API/NavigatorUAData/brands)).
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA")}} Header (ein [niedrig-Entropy-Client-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#low_entropy_hints)) gesendet werden können.
- `mobile`
  - : Gibt `true` zurück, wenn der User-Agent auf einem mobilen Gerät ausgeführt wird (dieselben Informationen wie bereitgestellt von [`NavigatorUAData.mobile`](/de/docs/Web/API/NavigatorUAData/mobile)).
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA-Mobile")}} Header (ein [niedrig-Entropy-Client-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#low_entropy_hints)) gesendet werden können.
- `platform`
  - : Gibt einen String zurück, der die Plattform beschreibt, auf der der User-Agent ausgeführt wird, wie `"Windows"` (dieselben Informationen wie bereitgestellt von [`NavigatorUAData.platform`](/de/docs/Web/API/NavigatorUAData/platform)).
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA-Platform")}} Header (ein [niedrig-Entropy-Client-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#low_entropy_hints)) gesendet werden können.
- `architecture`
  - : Ein String, der die Plattformarchitektur enthält. Zum Beispiel `"x86"`.
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA-Arch")}} Header gesendet werden können, nachdem der Server dies explizit im {{HTTPHeader("Accept-CH")}} Header angefordert hat.
- `bitness`
  - : Ein String, der die Bitzahl der Architektur enthält. Zum Beispiel `"32"` oder `"64"`.
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA-Bitness")}} Header gesendet werden können, wenn der Server dies explizit im {{HTTPHeader("Accept-CH")}} Header anfordert.
- `formFactors`
  - : Ein Array von Strings, das die Formfaktoren eines Geräts enthält. Zum Beispiel `["Tablet", "XR"]`.
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA-Form-Factors")}} Header gesendet werden können, wenn der Server dies explizit im {{HTTPHeader("Accept-CH")}} Header anfordert.
- `fullVersionList`
  - : Ein Array von Objekten mit den Eigenschaften `"brand"` und `"version"`, das jeweils den Browsernamen und die vollständige Version repräsentiert.
    Zum Beispiel `{"brand": "Google Chrome", "version": "103.0.5060.134"}, {"brand": "Chromium", "version": "103.0.5060.134"}`.
    Bitte beachten Sie, dass ein Objekt absichtlich ungültige Informationen enthalten kann, um zu verhindern, dass Websites sich auf eine feste Liste von Browsern verlassen.
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} Header gesendet werden können, wenn der Server dies explizit im {{HTTPHeader("Accept-CH")}} Header anfordert.
- `model`
  - : Ein String, der das Modell eines mobilen Geräts enthält. Zum Beispiel `"Pixel 2XL"`. Wenn das Gerät kein mobiles Gerät ist oder das Gerätemodell unbekannt ist, wird `model` `""` sein.
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA-Model")}} Header gesendet werden können, wenn der Server dies explizit im {{HTTPHeader("Accept-CH")}} Header anfordert.
- `platformVersion`
  - : Ein String, der die Plattformversion enthält. Der Plattformname selbst ist immer als low-entropy Hinweis `platform` verfügbar. Zum Beispiel `"10.0"`.
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA-Platform-Version")}} Header gesendet werden können, wenn der Server dies explizit im {{HTTPHeader("Accept-CH")}} Header anfordert.
- `uaFullVersion` {{Deprecated_Inline}}
  - : Ein String, der die vollständige Browserversion enthält. Zum Beispiel `"103.0.5060.134"`. Veraltet zugunsten von `fullVersionList`.
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA-Full-Version")}} Header gesendet werden können, wenn der Server dies explizit im {{HTTPHeader("Accept-CH")}} Header anfordert.
- `wow64`
  - : Ein Boolean, der angibt, ob das Binärprogramm des User-Agent im 32-Bit-Modus auf 64-Bit-Windows läuft.
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA-WoW64")}} Header gesendet werden können, wenn der Server dies explizit im {{HTTPHeader("Accept-CH")}} Header anfordert.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der User-Agent entscheidet, dass einer oder mehrere der angeforderten `hints` nicht zurückgegeben werden sollten.

## Beispiele

Im folgenden Beispiel werden eine Reihe von Hinweisen mit der `getHighEntropyValues()` Methode angefordert.
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

- Diese Werte sind auch über HTTP-Anforderungsheader verfügbar:
  - Low-entropy Client-Hinweise werden automatisch gesendet:
    - {{HTTPHeader("Sec-CH-UA")}}
    - {{HTTPHeader("Sec-CH-UA-Mobile")}}
    - {{HTTPHeader("Sec-CH-UA-Platform")}}
  - Server können anfordern, dass sie bei nachfolgenden Anfragen high-entropy Client-Hinweise erhalten, indem sie den {{HTTPHeader("Accept-CH")}} Header verwenden:
    - {{HTTPHeader("Sec-CH-UA-Arch")}}
    - {{HTTPHeader("Sec-CH-UA-Bitness")}}
    - {{HTTPHeader("Sec-CH-UA-Full-Version")}}
    - {{HTTPHeader("Sec-CH-UA-Model")}}
    - {{HTTPHeader("Sec-CH-UA-Platform-Version")}}
