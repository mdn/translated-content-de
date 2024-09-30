---
title: NavigatorUAData
slug: Web/API/NavigatorUAData
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Das **`NavigatorUAData`**-Interface der [User-Agent Client Hints API](/de/docs/Web/API/User-Agent_Client_Hints_API) liefert Informationen über den Browser und das Betriebssystem eines Benutzers.

Ein Instanz dieses Objekts wird durch Aufruf von [`Navigator.userAgentData`](/de/docs/Web/API/Navigator/userAgentData) oder [`WorkerNavigator.userAgentData`](/de/docs/Web/API/WorkerNavigator/userAgentData) zurückgegeben. Daher hat dieses Interface keinen Konstruktor.

> [!NOTE]
> Die Begriffe _hohe Entropie_ und _niedrige Entropie_ beziehen sich auf die Menge an Informationen, die diese Werte über den Browser preisgeben. Die als Eigenschaften zurückgegebenen Werte gelten als niedere Entropie und sind unwahrscheinlich, einen Benutzer zu identifizieren. Die Werte, die durch [`NavigatorUAData.getHighEntropyValues()`](/de/docs/Web/API/NavigatorUAData/getHighEntropyValues) zurückgegeben werden, könnten potenziell mehr Informationen offenlegen. Diese Werte werden daher über ein {{jsxref("Promise")}} abgerufen, wodurch dem Browser Zeit gegeben wird, um die Erlaubnis des Nutzers einzuholen oder andere Überprüfungen vorzunehmen.

## Instanzen-Eigenschaften

- [`NavigatorUAData.brands`](/de/docs/Web/API/NavigatorUAData/brands) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array von Markeninformationen zurück, das den Browsernamen und die Version enthält.
- [`NavigatorUAData.mobile`](/de/docs/Web/API/NavigatorUAData/mobile) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn der User-Agent auf einem mobilen Gerät läuft.
- [`NavigatorUAData.platform`](/de/docs/Web/API/NavigatorUAData/platform) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Plattform-Marke zurück, auf der der User-Agent läuft.

## Instanzen-Methoden

- [`NavigatorUAData.getHighEntropyValues()`](/de/docs/Web/API/NavigatorUAData/getHighEntropyValues) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Wörterbuchobjekt aufgelöst wird, das die vom User-Agent zurückgegebenen _hohen Entropie_-Werte enthält.
- [`NavigatorUAData.toJSON()`](/de/docs/Web/API/NavigatorUAData/toJSON) {{Experimental_Inline}}
  - : Ein _Serializer_, der eine JSON-Darstellung der _niedrigen Entropie_-Eigenschaften des `NavigatorUAData`-Objekts zurückgibt.

## Beispiele

### Die Marken abrufen

Das folgende Beispiel gibt den Wert von [`NavigatorUAData.brands`](/de/docs/Web/API/NavigatorUAData/brands) in der Konsole aus.

```js
console.log(navigator.userAgentData.brands);
```

### Hohe Entropie-Werte zurückgeben

Im folgenden Beispiel werden eine Reihe von Hinweisen mit der Methode [`NavigatorUAData.getHighEntropyValues()`](/de/docs/Web/API/NavigatorUAData/getHighEntropyValues) angefordert. Wenn das Versprechen erfüllt wird, werden diese Informationen in der Konsole ausgegeben.

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

- [Verbesserung der Benutzerprivatsphäre und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints)
