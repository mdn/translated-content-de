---
title: NavigatorUAData
slug: Web/API/NavigatorUAData
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Das **`NavigatorUAData`**-Interface der [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API) liefert Informationen über den Browser und das Betriebssystem eines Nutzers.

Eine Instanz dieses Objekts wird durch Aufrufen von [`Navigator.userAgentData`](/de/docs/Web/API/Navigator/userAgentData) oder [`WorkerNavigator.userAgentData`](/de/docs/Web/API/WorkerNavigator/userAgentData) zurückgegeben. Daher hat dieses Interface keinen Konstruktor.

> [!NOTE]
> Die Begriffe _high entropy_ und _low entropy_ beziehen sich auf die Menge der Informationen, die diese Werte über den Browser offenbaren. Die als Eigenschaften zurückgegebenen Werte gelten als low entropy und sind unwahrscheinlich zur Identifizierung eines Nutzers. Die Werte, die von [`NavigatorUAData.getHighEntropyValues()`](/de/docs/Web/API/NavigatorUAData/getHighEntropyValues) zurückgegeben werden, könnten potenziell mehr Informationen offenbaren. Diese Werte werden daher über ein {{jsxref("Promise")}} abgerufen, sodass der Browser Zeit hat, die Benutzererlaubnis anzufordern oder andere Überprüfungen durchzuführen.

## Instanz-Eigenschaften

- [`NavigatorUAData.brands`](/de/docs/Web/API/NavigatorUAData/brands) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array von Markeninformationen zurück, das den Browsernamen und die Version enthält.
- [`NavigatorUAData.mobile`](/de/docs/Web/API/NavigatorUAData/mobile) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn der User-Agent auf einem mobilen Gerät läuft.
- [`NavigatorUAData.platform`](/de/docs/Web/API/NavigatorUAData/platform) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Plattformmarke zurück, auf der der User-Agent läuft.

## Instanz-Methoden

- [`NavigatorUAData.getHighEntropyValues()`](/de/docs/Web/API/NavigatorUAData/getHighEntropyValues) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Wörterbuchobjekt aufgelöst wird, das die vom User-Agent zurückgegebenen _high entropy_ Werte enthält.
- [`NavigatorUAData.toJSON()`](/de/docs/Web/API/NavigatorUAData/toJSON) {{Experimental_Inline}}
  - : Ein _Serializer_, der eine JSON-Darstellung der _low entropy_ Eigenschaften des `NavigatorUAData`-Objekts zurückgibt.

## Beispiele

### Abrufen der Marken

Das folgende Beispiel gibt den Wert von [`NavigatorUAData.brands`](/de/docs/Web/API/NavigatorUAData/brands) in der Konsole aus.

```js
console.log(navigator.userAgentData.brands);
```

### Rückgabe von High Entropy-Werten

Im folgenden Beispiel werden eine Reihe von Hinweisen mit der Methode [`NavigatorUAData.getHighEntropyValues()`](/de/docs/Web/API/NavigatorUAData/getHighEntropyValues) angefordert. Wenn das Promise aufgelöst wird, werden diese Informationen in der Konsole ausgegeben.

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

- [Verbesserung der Benutzerdatenschutz und Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints)
