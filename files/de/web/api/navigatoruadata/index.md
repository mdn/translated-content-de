---
title: NavigatorUAData
slug: Web/API/NavigatorUAData
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **`NavigatorUAData`**-Schnittstelle der {{domxref("User-Agent Client Hints API", "", "", "nocode")}} liefert Informationen über den Browser und das Betriebssystem eines Nutzers.

Ein Exemplar dieses Objekts wird durch Aufruf von {{domxref("Navigator.userAgentData")}} oder {{domxref("WorkerNavigator.userAgentData")}} zurückgegeben. Daher hat diese Schnittstelle keinen Konstruktor.

> [!NOTE]
> Die Begriffe _hohe Entropie_ und _niedrige Entropie_ beziehen sich auf die Menge an Informationen, die diese Werte über den Browser preisgeben. Die als Eigenschaften zurückgegebenen Werte werden als niedrige Entropie betrachtet und sind unwahrscheinlich, einen Nutzer zu identifizieren. Die Werte, die durch {{domxref("NavigatorUAData.getHighEntropyValues()")}} zurückgegeben werden, könnten potenziell mehr Informationen preisgeben. Diese Werte werden daher über ein {{jsxref("Promise")}} abgerufen, um dem Browser Zeit zu geben, die Erlaubnis des Nutzers anzufordern oder andere Überprüfungen durchzuführen.

## Instanzeigenschaften

- {{domxref("NavigatorUAData.brands")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein Array von Markeninformationen zurück, das den Namen und die Version des Browsers enthält.
- {{domxref("NavigatorUAData.mobile")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt `true` zurück, wenn der User-Agent auf einem mobilen Gerät ausgeführt wird.
- {{domxref("NavigatorUAData.platform")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Plattformmarke zurück, auf der der User-Agent ausgeführt wird.

## Instanzmethoden

- {{domxref("NavigatorUAData.getHighEntropyValues()")}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das sich mit einem Wörterbuchobjekt auflöst, das die vom User-Agent zurückgegebenen _hohe Entropie_-Werte enthält.
- {{domxref("NavigatorUAData.toJSON()")}} {{Experimental_Inline}}
  - : Ein _Serializer_, der eine JSON-Darstellung der _niedrige Entropie_-Eigenschaften des `NavigatorUAData`-Objekts zurückgibt.

## Beispiele

### Abrufen der Markeninformationen

Das folgende Beispiel gibt den Wert von {{domxref("NavigatorUAData.brands")}} in der Konsole aus.

```js
console.log(navigator.userAgentData.brands);
```

### Rückgabe von hohen Entropie-Werten

Im folgenden Beispiel werden mit der Methode {{domxref("NavigatorUAData.getHighEntropyValues()")}} eine Reihe von Hinweisen angefordert. Wenn das Versprechen erfüllt wird, werden diese Informationen in der Konsole ausgegeben.

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

- [Verbesserung des Datenschutzes und der Entwicklererfahrung mit User-Agent Client Hints](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints)
