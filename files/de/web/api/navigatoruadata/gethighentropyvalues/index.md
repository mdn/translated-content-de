---
title: "NavigatorUAData: getHighEntropyValues() Methode"
short-title: getHighEntropyValues()
slug: Web/API/NavigatorUAData/getHighEntropyValues
l10n:
  sourceCommit: 2dcdbed09ec5ca28a73d82e259601459c468508c
---

{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`getHighEntropyValues()`** Methode des [`NavigatorUAData`](/de/docs/Web/API/NavigatorUAData) Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einem Wörterbuch-Objekt aufgelöst wird, das sowohl Informationen mit geringer Entropie als auch die angeforderten Informationen mit hoher Entropie über den Browser enthält.

Das aufgelöste Objekt enthält die ["geringe Entropie" Eigenschaften](/de/docs/Web/API/NavigatorUAData#instance_properties), die standardmäßig im `NavigatorUAData` Objekt enthalten sind — dies sind die Werte, die wahrscheinlich kein Fingerprinting des Benutzers ermöglichen.
Es enthält auch die Teilmenge der "hohen Entropie"-Werte, die im Parameterobjekt angefordert wurden und für die die Erlaubnis erteilt wurde.
Dies sind die Werte, die eher ein Fingerprinting ermöglichen.
Beachten Sie, dass die Bedeutung der Begriffe [geringe Entropie](/de/docs/Web/HTTP/Guides/Client_hints#low_entropy_hints) und [hohe Entropie](/de/docs/Web/HTTP/Guides/Client_hints#high_entropy_hints) der im HTTP [User Agent Client Hints](/de/docs/Web/HTTP/Guides/Client_hints) Mechanismus definierten Bedeutung entspricht.

> [!NOTE]
> Die Verwendung der `getHighEntropyValues()` Methode zum Abrufen von Benutzeragent-Daten mit hoher Entropie kann über die {{HTTPHeader('Permissions-Policy/ch-ua-high-entropy-values', 'ch-ua-high-entropy-values')}} {{HTTPHeader('Permissions-Policy')}} gesteuert werden.
> Wenn die Erlaubnis nicht erteilt ist, gibt die Methode nur die Daten mit geringer Entropie `brands`, `mobile` und `platform` zurück.

## Syntax

```js-nolint
getHighEntropyValues(hints)
```

### Parameter

- `hints`
  - : Ein Array, das die zurückzugebenden Hinweise mit hoher Entropie enthält.
    Dies kann eines oder mehrere der folgenden Elemente umfassen:
    - `"architecture"`
    - `"bitness"`
    - `"formFactors"`
    - `"fullVersionList"`
    - `"model"`
    - `"platformVersion"`
    - `"uaFullVersion"` {{Deprecated_Inline}}
    - `"wow64"`

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt aufgelöst wird, das einige oder alle der folgenden Werte enthält (basierend auf den angeforderten und gewährten Hinweisen):

- `brands`
  - : Gibt ein Array von Objekten zurück, das `brand` und `version` enthält und die Browsermarke und deren Version angibt (dieselben Informationen wie bereitgestellt von [`NavigatorUAData.brands`](/de/docs/Web/API/NavigatorUAData/brands)).
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA")}} Kopfzeile (ein [low-entropy client hint](/de/docs/Web/HTTP/Guides/Client_hints#low_entropy_hints)) an einen Server gesendet werden können.
- `mobile`
  - : Gibt `true` zurück, wenn der Benutzeragent auf einem mobilen Gerät läuft (dieselben Informationen wie bereitgestellt von [`NavigatorUAData.mobile`](/de/docs/Web/API/NavigatorUAData/mobile)).
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA-Mobile")}} Kopfzeile (ein [low-entropy client hint](/de/docs/Web/HTTP/Guides/Client_hints#low_entropy_hints)) an einen Server gesendet werden können.
- `platform`
  - : Gibt einen String zurück, der die Plattform beschreibt, auf der der Benutzeragent läuft, wie `"Windows"` (dieselben Informationen wie bereitgestellt von [`NavigatorUAData.platform`](/de/docs/Web/API/NavigatorUAData/platform)).
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA-Platform")}} Kopfzeile (ein [low-entropy client hint](/de/docs/Web/HTTP/Guides/Client_hints#low_entropy_hints)) an einen Server gesendet werden können.
- `architecture`
  - : Ein String, der die Plattformarchitektur enthält. Zum Beispiel `"x86"`.
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA-Arch")}} Kopfzeile gesendet werden können, nachdem der Server sie explizit in der {{HTTPHeader("Accept-CH")}} Kopfzeile angefordert hat.
- `bitness`
  - : Ein String, der die Architektur-Bissigkeit enthält. Zum Beispiel `"32"` oder `"64"`.
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA-Bitness")}} Kopfzeile gesendet werden können, wenn der Server sie explizit in der {{HTTPHeader("Accept-CH")}} Kopfzeile anfordert.
- `formFactors`
  - : Ein Array von Strings, das die Formfaktoren eines Geräts enthält. Zum Beispiel `["Tablet", "XR"]`.
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA-Form-Factors")}} Kopfzeile gesendet werden können, wenn der Server sie explizit in der {{HTTPHeader("Accept-CH")}} Kopfzeile anfordert.
- `fullVersionList`
  - : Ein Array von Objekten mit den Eigenschaften `"brand"` und `"version"`, die den Browsernamen und die vollständige Version repräsentieren.
    Zum Beispiel `{"brand": "Google Chrome", "version": "103.0.5060.134"}, {"brand": "Chromium", "version": "103.0.5060.134"}`.
    Bitte beachten Sie, dass ein Objekt absichtlich ungültige Informationen enthalten kann, um zu verhindern, dass Websites sich auf eine feste Liste von Browsern verlassen.
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} Kopfzeile gesendet werden können, wenn der Server sie explizit in der {{HTTPHeader("Accept-CH")}} Kopfzeile anfordert.
- `model`
  - : Ein String, der das Modell des mobilen Endgeräts enthält. Zum Beispiel `"Pixel 2XL"`. Wenn das Gerät kein mobiles Gerät ist oder das Gerätemodell nicht bekannt ist, wird `model` `""` sein.
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA-Model")}} Kopfzeile gesendet werden können, wenn der Server sie explizit in der {{HTTPHeader("Accept-CH")}} Kopfzeile anfordert.
- `platformVersion`
  - : Ein String, der die Plattformversion enthält. Der Plattformname selbst ist immer als Hinweis mit geringer Entropie `platform` verfügbar. Zum Beispiel `"10.0"`.
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA-Platform-Version")}} Kopfzeile gesendet werden können, wenn der Server sie explizit in der {{HTTPHeader("Accept-CH")}} Kopfzeile anfordert.
- `uaFullVersion` {{Deprecated_Inline}}
  - : Ein String, der die vollständige Browserversion enthält. Zum Beispiel `"103.0.5060.134"`. Veraltet zugunsten von `fullVersionList`.
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA-Full-Version")}} Kopfzeile gesendet werden können, wenn der Server sie explizit in der {{HTTPHeader("Accept-CH")}} Kopfzeile anfordert.
- `wow64`
  - : Ein Boolean, der angibt, ob das Benutzeragent-Binärprogramm im 32-Bit-Modus auf 64-Bit Windows läuft.
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA-WoW64")}} Kopfzeile gesendet werden können, wenn der Server sie explizit in der {{HTTPHeader("Accept-CH")}} Kopfzeile anfordert.

### Ausnahmen

- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Benutzeragent entscheidet, dass einer oder mehrere der angeforderten `hints` nicht zurückgegeben werden sollten.

## Beispiele

Im folgenden Beispiel werden eine Reihe von Hinweisen mit der `getHighEntropyValues()` Methode angefordert.
Wenn das Versprechen aufgelöst wird, werden diese Informationen in die Konsole ausgegeben.

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

- Diese Werte sind auch als HTTP-Anfrage-Header verfügbar:
  - Hinweise mit geringer Entropie werden automatisch gesendet:
    - {{HTTPHeader("Sec-CH-UA")}}
    - {{HTTPHeader("Sec-CH-UA-Mobile")}}
    - {{HTTPHeader("Sec-CH-UA-Platform")}}
  - Server können anfordern, dass sie Hinweise mit hoher Entropie bei nachfolgenden Anforderungen erhalten, indem sie den {{HTTPHeader("Accept-CH")}} Header verwenden:
    - {{HTTPHeader("Sec-CH-UA-Arch")}}
    - {{HTTPHeader("Sec-CH-UA-Bitness")}}
    - {{HTTPHeader("Sec-CH-UA-Full-Version")}}
    - {{HTTPHeader("Sec-CH-UA-Model")}}
    - {{HTTPHeader("Sec-CH-UA-Platform-Version")}}
