---
title: NavigatorUAData
slug: Web/API/NavigatorUAData
l10n:
  sourceCommit: 6bb81a788ff71f726e32d16757c99d5c45a7edf9
---

{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die Schnittstelle **`NavigatorUAData`** der [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API) gibt Informationen über den Browser und das Betriebssystem eines Benutzers zurück.

Eine Instanz dieses Objekts wird durch den Aufruf von [`Navigator.userAgentData`](/de/docs/Web/API/Navigator/userAgentData) oder [`WorkerNavigator.userAgentData`](/de/docs/Web/API/WorkerNavigator/userAgentData) zurückgegeben. Daher hat diese Schnittstelle keinen Konstruktor.

> [!NOTE]
> Die Begriffe _hohe Entropie_ und _niedrige Entropie_ beziehen sich darauf, wie viele Informationen diese Werte über den Browser preisgeben. Die als Eigenschaften zurückgegebenen Werte gelten als [Werte mit niedriger Entropie](/de/docs/Web/HTTP/Guides/Client_hints#low_entropy_hints), anhand derer sich ein Benutzer wahrscheinlich nicht identifizieren lässt. Mit [`NavigatorUAData.getHighEntropyValues()`](/de/docs/Web/API/NavigatorUAData/getHighEntropyValues) können zusätzliche [Werte mit hoher Entropie](/de/docs/Web/HTTP/Guides/Client_hints#high_entropy_hints) angefordert werden, die möglicherweise weitere identifizierende Informationen preisgeben. Diese Werte werden daher über eine {{jsxref("Promise")}} abgerufen. So hat der Browser Zeit, die Zustimmung des Benutzers einzuholen oder andere Prüfungen durchzuführen.

## Instanzeigenschaften

- [`NavigatorUAData.brands`](/de/docs/Web/API/NavigatorUAData/brands) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array mit Markeninformationen zurück, das den Namen und die Version des Browsers enthält.
- [`NavigatorUAData.mobile`](/de/docs/Web/API/NavigatorUAData/mobile) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn der User-Agent auf einem mobilen Gerät ausgeführt wird.
- [`NavigatorUAData.platform`](/de/docs/Web/API/NavigatorUAData/platform) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Marke der Plattform zurück, auf der der User-Agent ausgeführt wird.

## Instanzmethoden

- [`NavigatorUAData.getHighEntropyValues()`](/de/docs/Web/API/NavigatorUAData/getHighEntropyValues) {{Experimental_Inline}}
  - : Gibt eine {{jsxref("Promise")}} zurück, die mit einem Dictionary-Objekt erfüllt wird. Dieses enthält Informationen mit niedriger Entropie sowie die angeforderten Informationen mit hoher Entropie über den Browser.
- [`NavigatorUAData.toJSON()`](/de/docs/Web/API/NavigatorUAData/toJSON) {{Experimental_Inline}}
  - : Gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `NavigatorUAData`-Objekt repräsentiert. Wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen.

## Beispiele

### Die Browsermarken abrufen

Das folgende Beispiel gibt den Wert von [`NavigatorUAData.brands`](/de/docs/Web/API/NavigatorUAData/brands) auf der Konsole aus.

```js
console.log(navigator.userAgentData.brands);
```

### Werte mit hoher Entropie zurückgeben

Im folgenden Beispiel werden mit der Methode [`NavigatorUAData.getHighEntropyValues()`](/de/docs/Web/API/NavigatorUAData/getHighEntropyValues) mehrere Hints angefordert. Sobald die Promise erfüllt ist, werden diese Informationen auf der Konsole ausgegeben.

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

- [Verbesserung des Datenschutzes für Benutzer und der Entwicklungserfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints)
