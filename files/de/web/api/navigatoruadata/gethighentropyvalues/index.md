---
title: "NavigatorUAData: getHighEntropyValues() Methode"
short-title: getHighEntropyValues()
slug: Web/API/NavigatorUAData/getHighEntropyValues
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`getHighEntropyValues()`**-Methode des [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData)-Interfaces ist ein {{jsxref("Promise")}}, das mit einem Wörterbuchobjekt aufgelöst wird, das die _hochentropischen_ Werte enthält, die der User-Agent zurückgibt.

> [!NOTE]
> Die Begriffe _hochentropisch_ und _niedrigentropisch_ beziehen sich auf die Menge an Informationen, die diese Werte über den Browser preisgeben.
> Die als Eigenschaften zurückgegebenen Werte werden als niedrigentropisch angesehen und sind unwahrscheinlich, einen Benutzer zu identifizieren.
> Die von `getHighEntropyValues()` zurückgegebenen Werte könnten potenziell mehr Informationen preisgeben.
> Diese Werte werden daher über ein {{jsxref("Promise")}} abgerufen, das dem Browser Zeit gibt, die Benutzererlaubnis anzufordern oder andere Überprüfungen durchzuführen.

## Syntax

```js-nolint
getHighEntropyValues(hints)
```

### Parameter

- `hints`

  - : Ein Array, das die zurückzugebenden Hinweise enthält, einer oder mehrere der folgenden:

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
  - : Gibt ein Array von Objekten zurück, das `brand` und `version` enthält und die Browsermarke und deren Version angibt (die gleichen Informationen wie bereitgestellt von [`NavigatorUAData.brands`](/de/docs/Web/API/NavigatorUAData/brands)).
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA")}}-Header an einen Server gesendet werden können (ein [niedrigentropischer Client-Hinweis](/de/docs/Web/HTTP/Client_hints#low_entropy_hints)).
- `mobile`
  - : Gibt `true` zurück, wenn der User-Agent auf einem mobilen Gerät ausgeführt wird (die gleichen Informationen wie bereitgestellt von [`NavigatorUAData.mobile`](/de/docs/Web/API/NavigatorUAData/mobile)).
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA-Mobile")}}-Header an einen Server gesendet werden können (ein [niedrigentropischer Client-Hinweis](/de/docs/Web/HTTP/Client_hints#low_entropy_hints)).
- `platform`
  - : Gibt einen String zurück, der die Plattform beschreibt, auf der der User-Agent ausgeführt wird, wie z.B. `"Windows"` (die gleichen Informationen wie bereitgestellt von [`NavigatorUAData.platform`](/de/docs/Web/API/NavigatorUAData/platform)).
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA-Platform")}}-Header an einen Server gesendet werden können (ein [niedrigentropischer Client-Hinweis](/de/docs/Web/HTTP/Client_hints#low_entropy_hints)).
- `architecture`
  - : Ein String, der die Plattformarchitektur enthält. Zum Beispiel `"x86"`.
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA-Arch")}}-Header an einen Server gesendet werden können, nachdem der Server sie explizit im {{HTTPHeader("Accept-CH")}}-Header angefordert hat.
- `bitness`
  - : Ein String, der die Architektur-Bitness enthält. Zum Beispiel `"32"` oder `"64"`.
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA-Bitness")}}-Header an einen Server gesendet werden können, wenn der Server sie explizit im {{HTTPHeader("Accept-CH")}}-Header angefordert hat.
- `formFactor`
  - : Ein String, der den Formfaktor eines Geräts enthält. Zum Beispiel `"Tablet"` oder `"VR"`.
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA-Form-Factor")}}-Header an einen Server gesendet werden können, wenn der Server sie explizit im {{HTTPHeader("Accept-CH")}}-Header angefordert hat.
- `fullVersionList`
  - : Ein Array von Objekten mit den Eigenschaften `"brand"` und `"version"`, die jeweils den Browsernamen und die vollständige Version darstellen.
    Zum Beispiel `{"brand": "Google Chrome", "version": "103.0.5060.134"}, {"brand": "Chromium", "version": "103.0.5060.134"}`.
    Beachten Sie, dass ein Objekt absichtlich ungültige Informationen enthalten kann, um zu verhindern, dass sich Websites auf eine feste Liste von Browsern verlassen.
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA-Full-Version-List")}}-Header an einen Server gesendet werden können, wenn der Server sie explizit im {{HTTPHeader("Accept-CH")}}-Header angefordert hat.
- `model`
  - : Ein String, der das Modell des mobilen Geräts enthält. Zum Beispiel `"Pixel 2XL"`. Wenn das Gerät kein mobiles Gerät ist oder das Gerätemodell nicht bekannt ist, wird `model` `""` sein.
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA-Model")}}-Header an einen Server gesendet werden können, wenn der Server sie explizit im {{HTTPHeader("Accept-CH")}}-Header angefordert hat.
- `platformVersion`
  - : Ein String, der die Plattformversion enthält. Der Plattformname selbst ist immer als niedrigentropischer Hinweis `platform` verfügbar. Zum Beispiel `"10.0"`.
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA-Platform-Version")}}-Header an einen Server gesendet werden können, wenn der Server sie explizit im {{HTTPHeader("Accept-CH")}}-Header angefordert hat.
- `uaFullVersion` {{Deprecated_Inline}}
  - : Ein String, der die vollständige Browserversion enthält. Zum Beispiel `"103.0.5060.134"`. Veraltet zugunsten von `fullVersionList`.
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA-Full-Version")}}-Header an einen Server gesendet werden können, wenn der Server sie explizit im {{HTTPHeader("Accept-CH")}}-Header angefordert hat.
- `wow64`
  - : Ein Boolean, der anzeigt, ob das Binary des User-Agents im 32-Bit-Modus auf einem 64-Bit-Windows ausgeführt wird.
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA-WoW64")}}-Header an einen Server gesendet werden können, wenn der Server sie explizit im {{HTTPHeader("Accept-CH")}}-Header angefordert hat.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der User-Agent entscheidet, dass einer oder mehrere der angeforderten `hints` nicht zurückgegeben werden sollten.

## Beispiele

Im folgenden Beispiel werden mit der `getHighEntropyValues()` Methode eine Reihe von Hinweisen angefordert.
Wenn das Versprechen aufgelöst wird, werden diese Informationen in der Konsole ausgegeben.

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

- Diese Werte sind auch über HTTP-Anforderungsheader zugänglich:
  - [Niedrigentropische Client-Hinweise](/de/docs/Web/HTTP/Client_hints#low_entropy_hints) werden automatisch gesendet:
    - {{HTTPHeader("Sec-CH-UA")}}
    - {{HTTPHeader("Sec-CH-UA-Mobile")}}
    - {{HTTPHeader("Sec-CH-UA-Platform")}}
  - Server können anfordern, dass sie bei folgenden Anforderungen hochentropische Client-Hinweise erhalten, indem sie den {{HTTPHeader("Accept-CH")}}-Header verwenden:
    - {{HTTPHeader("Sec-CH-UA-Arch")}}
    - {{HTTPHeader("Sec-CH-UA-Bitness")}}
    - {{HTTPHeader("Sec-CH-UA-Full-Version")}}
    - {{HTTPHeader("Sec-CH-UA-Model")}}
    - {{HTTPHeader("Sec-CH-UA-Platform-Version")}}
