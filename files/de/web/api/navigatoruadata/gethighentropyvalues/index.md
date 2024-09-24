---
title: "NavigatorUAData: getHighEntropyValues() Methode"
short-title: getHighEntropyValues()
slug: Web/API/NavigatorUAData/getHighEntropyValues
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`getHighEntropyValues()`** Methode der {{domxref("NavigatorUAData")}} Schnittstelle ist ein {{jsxref("Promise")}}, das mit einem Wörterbuch-Objekt aufgelöst wird, das die vom Benutzer-Agenten zurückgegebenen Werte mit _hoher Entropie_ enthält.

> [!NOTE]
> Die Begriffe _hohe Entropie_ und _niedrige Entropie_ beziehen sich auf die Menge an Informationen, die diese Werte über den Browser preisgeben.
> Die als Eigenschaften zurückgegebenen Werte werden als niedere Entropie angesehen und dürften kaum zur Identifikation eines Benutzers führen.
> Die von `getHighEntropyValues()` zurückgegebenen Werte könnten potenziell mehr Informationen preisgeben.
> Diese Werte werden daher über ein {{jsxref("Promise")}} abgerufen, was dem Browser Zeit gibt, die Erlaubnis des Benutzers zu erbitten oder andere Prüfungen durchzuführen.

## Syntax

```js-nolint
getHighEntropyValues(hints)
```

### Parameter

- `hints`

  - : Ein Array, das die zurückzugebenden Hinweise enthält, eines oder mehrere von:

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
  - : Gibt ein Array von Objekten mit `brand` und `version` zurück, die die Browser-Marke und ihre Version angeben (die gleichen Informationen wie bereitgestellt von {{domxref("NavigatorUAData.brands")}}).
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA")}}-Header an einen Server gesendet werden können (ein [niedrigwertiger Client-Hinweis](/de/docs/Web/HTTP/Client_hints#low_entropy_hints)).
- `mobile`
  - : Gibt `true` zurück, wenn der Benutzeragent auf einem mobilen Gerät läuft (die gleichen Informationen wie bereitgestellt von {{domxref("NavigatorUAData.mobile")}}).
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA-Mobile")}}-Header an einen Server gesendet werden können (ein [niedrigwertiger Client-Hinweis](/de/docs/Web/HTTP/Client_hints#low_entropy_hints)).
- `platform`
  - : Gibt einen String zurück, der die Plattform beschreibt, auf der der Benutzeragent läuft, wie `"Windows"` (die gleichen Informationen wie bereitgestellt von {{domxref("NavigatorUAData.platform")}}).
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA-Platform")}}-Header an einen Server gesendet werden können (ein [niedrigwertiger Client-Hinweis](/de/docs/Web/HTTP/Client_hints#low_entropy_hints)).
- `architecture`
  - : Ein String, der die Plattform-Architektur enthält. Zum Beispiel `"x86"`.
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA-Arch")}}-Header an einen Server gesendet werden können, nachdem der Server sie explizit in der {{HTTPHeader("Accept-CH")}}-Header angefordert hat.
- `bitness`
  - : Ein String, der die Architektur-Bitness enthält. Zum Beispiel `"32"` oder `"64"`.
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA-Bitness")}}-Header an einen Server gesendet werden können, wenn der Server sie explizit in der {{HTTPHeader("Accept-CH")}}-Header anfordert.
- `formFactor`
  - : Ein String, der die Formfaktor eines Geräts enthält. Zum Beispiel `"Tablet"` oder `"VR"`.
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA-Form-Factor")}}-Header an einen Server gesendet werden können, wenn der Server sie explizit in der {{HTTPHeader("Accept-CH")}}-Header anfordert.
- `fullVersionList`
  - : Ein Array von Objekten mit den Eigenschaften `"brand"` und `"version"`, die den Browsernamen und die vollständige Version darstellen.
    Zum Beispiel `{"brand": "Google Chrome", "version": "103.0.5060.134"}, {"brand": "Chromium", "version": "103.0.5060.134"}`.
    Bitte beachten Sie, dass ein Objekt möglicherweise absichtlich ungültige Informationen enthält, um zu verhindern, dass Websites sich auf eine feste Liste von Browsern verlassen.
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA-Full-Version-List")}}-Header an einen Server gesendet werden können, wenn der Server sie explizit in der {{HTTPHeader("Accept-CH")}}-Header anfordert.
- `model`
  - : Ein String, der das Modell des mobilen Geräts enthält. Zum Beispiel `"Pixel 2XL"`. Wenn das Gerät kein mobiles Gerät ist oder das Gerätemodell nicht bekannt ist, wird `model` `""` sein.
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA-Model")}}-Header an einen Server gesendet werden können, wenn der Server sie explizit in der {{HTTPHeader("Accept-CH")}}-Header anfordert.
- `platformVersion`
  - : Ein String, der die Plattformversion enthält. Der Plattformname selbst ist immer als geringfügiger Entropie-Hinweis `platform` verfügbar. Zum Beispiel `"10.0"`.
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA-Platform-Version")}}-Header an einen Server gesendet werden können, wenn der Server sie explizit in der {{HTTPHeader("Accept-CH")}}-Header anfordert.
- `uaFullVersion` {{Deprecated_Inline}}
  - : Ein String, der die vollständige Browserversion enthält. Zum Beispiel `"103.0.5060.134"`. Veraltet zugunsten von `fullVersionList`.
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA-Full-Version")}}-Header an einen Server gesendet werden können, wenn der Server sie explizit in der {{HTTPHeader("Accept-CH")}}-Header anfordert.
- `wow64`
  - : Ein Boolean, der angibt, ob das Binary des Benutzeragenten im 32-Bit-Modus auf 64-Bit-Windows läuft.
    Beachten Sie, dass diese Informationen in der {{HTTPHeader("Sec-CH-UA-WoW64")}}-Header an einen Server gesendet werden können, wenn der Server sie explizit in der {{HTTPHeader("Accept-CH")}}-Header anfordert.

### Ausnahmen

- `NotAllowedError` {{domxref("DOMException")}}
  - : Ausgelöst, wenn der Benutzeragent entscheidet, dass einer oder mehrere der angeforderten `hints` nicht zurückgegeben werden sollten.

## Beispiele

Im folgenden Beispiel werden mehrere Hinweise unter Verwendung der `getHighEntropyValues()` Methode abgefragt.
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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Diese Werte sind auch über HTTP-Anfrage-Header verfügbar:
  - [Client-Hinweise mit niedriger Entropie](/de/docs/Web/HTTP/Client_hints#low_entropy_hints) werden automatisch gesendet:
    - {{HTTPHeader("Sec-CH-UA")}}
    - {{HTTPHeader("Sec-CH-UA-Mobile")}}
    - {{HTTPHeader("Sec-CH-UA-Platform")}}
  - Server können anfordern, dass sie in nachfolgenden Anforderungen Hinweise mit hoher Entropie erhalten, indem sie die {{HTTPHeader("Accept-CH")}}-Header verwenden:
    - {{HTTPHeader("Sec-CH-UA-Arch")}}
    - {{HTTPHeader("Sec-CH-UA-Bitness")}}
    - {{HTTPHeader("Sec-CH-UA-Full-Version")}}
    - {{HTTPHeader("Sec-CH-UA-Model")}}
    - {{HTTPHeader("Sec-CH-UA-Platform-Version")}}
