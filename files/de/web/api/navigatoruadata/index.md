---
title: NavigatorUAData
slug: Web/API/NavigatorUAData
l10n:
  sourceCommit: 2dcdbed09ec5ca28a73d82e259601459c468508c
---

{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Das **`NavigatorUAData`**-Interface der [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API) liefert Informationen über den Browser und das Betriebssystem eines Nutzers.

Eine Instanz dieses Objekts wird zurückgegeben durch Aufruf von [`Navigator.userAgentData`](/de/docs/Web/API/Navigator/userAgentData) oder [`WorkerNavigator.userAgentData`](/de/docs/Web/API/WorkerNavigator/userAgentData). Daher hat dieses Interface keinen Konstruktor.

> [!NOTE]
> Die Begriffe _hohe Entropie_ und _niedrige Entropie_ beziehen sich auf die Menge an Informationen, die diese Werte über den Browser preisgeben. Die als Eigenschaften zurückgegebenen Werte gelten als [niedrige Entropie](/de/docs/Web/HTTP/Guides/Client_hints#low_entropy_hints), die unwahrscheinlich einen Nutzer identifizieren. Die Methode [`NavigatorUAData.getHighEntropyValues()`](/de/docs/Web/API/NavigatorUAData/getHighEntropyValues) kann verwendet werden, um zusätzliche [hohe Entropie](/de/docs/Web/HTTP/Guides/Client_hints#high_entropy_hints) Werte anzufordern, die potenziell mehr identifizierende Informationen preisgeben könnten. Diese Werte werden daher über ein {{jsxref("Promise")}} abgerufen, wodurch dem Browser Zeit gegeben wird, um die Erlaubnis des Nutzers einzuholen oder andere Überprüfungen durchzuführen.

## Instanz-Eigenschaften

- [`NavigatorUAData.brands`](/de/docs/Web/API/NavigatorUAData/brands) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array mit Markeninformationen zurück, das den Namen und die Version des Browsers enthält.
- [`NavigatorUAData.mobile`](/de/docs/Web/API/NavigatorUAData/mobile) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn der User-Agent auf einem mobilen Gerät läuft.
- [`NavigatorUAData.platform`](/de/docs/Web/API/NavigatorUAData/platform) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Plattformmarke zurück, auf der der User-Agent läuft.

## Instanz-Methoden

- [`NavigatorUAData.getHighEntropyValues()`](/de/docs/Web/API/NavigatorUAData/getHighEntropyValues) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Wörterbuchobjekt aufgelöst wird, das Informationen mit niedriger Entropie und angeforderte Informationen mit hoher Entropie über den Browser enthält.
- [`NavigatorUAData.toJSON()`](/de/docs/Web/API/NavigatorUAData/toJSON) {{Experimental_Inline}}
  - : Ein _Serializer_, der eine JSON-Darstellung der _niedrigen Entropie_-Eigenschaften des `NavigatorUAData`-Objekts zurückgibt.

## Beispiele

### Abrufen der Marken

Das folgende Beispiel gibt den Wert von [`NavigatorUAData.brands`](/de/docs/Web/API/NavigatorUAData/brands) in der Konsole aus.

```js
console.log(navigator.userAgentData.brands);
```

### Rückgabe von Werten mit hoher Entropie

Im folgenden Beispiel werden eine Reihe von Hinweisen mithilfe der Methode [`NavigatorUAData.getHighEntropyValues()`](/de/docs/Web/API/NavigatorUAData/getHighEntropyValues) angefordert. Wenn das Promise aufgelöst wird, werden diese Informationen in der Konsole ausgegeben.

```js
navigator.userAgentData
  .getHighEntropyValues([
    "architecture",
    "model",
    "platform",
    "platformVersion",
    "fullVersionList",
  ])
  .then((ua) => {
    console.log(ua);
  });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die Privatsphäre der Nutzer verbessern und die Entwicklererfahrung mit User-Agent Client Hints verbessern](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints)
