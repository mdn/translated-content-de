---
title: "NavigationPreloadManager: setHeaderValue() Methode"
short-title: setHeaderValue()
slug: Web/API/NavigationPreloadManager/setHeaderValue
l10n:
  sourceCommit: db443a6062d0e858a62af2f9a3a7558335ffd2dd
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`setHeaderValue()`**-Methode der [`NavigationPreloadManager`](/de/docs/Web/API/NavigationPreloadManager)-Schnittstelle legt den Wert des {{HTTPHeader("Service-Worker-Navigation-Preload")}}-Headers fest, der mit Anfragen gesendet wird, die aus einem [`fetch()`](/de/docs/Web/API/Window/fetch)-Vorgang resultieren, der während des Service-Worker-Navigationsvorausladens durchgeführt wird. Sie gibt ein leeres {{jsxref("Promise")}} zurück, das mit `undefined` aufgelöst wird.

Das Vorhandensein des {{HTTPHeader("Service-Worker-Navigation-Preload")}}-Headers in Vorausladeanfragen ermöglicht es Servern, die zurückgegebene Ressource für Vorausladeanfragen anders zu konfigurieren als für normale Anfragen. Die Standarddirektive ist auf `true` gesetzt: Diese Methode ermöglicht die Konfiguration mehrerer unterschiedlicher Antworten auf Vorausladeanfragen.

> [!NOTE]
> Wenn das Setzen dieses Headers zu einer anderen Antwort führen kann, muss der Server `Vary: Service-Worker-Navigation-Preload` setzen, um sicherzustellen, dass die unterschiedlichen Antworten zwischengespeichert werden.

## Syntax

```js-nolint
setHeaderValue(value)
```

### Parameter

- `value`
  - : Ein beliebiger Zeichenfolgenwert, den der Zielserver verwendet, um zu bestimmen, was für die angeforderte Ressource zurückgegeben werden soll.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit {{jsxref('undefined')}} aufgelöst wird.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Es gibt keinen aktiven Worker, der mit der Registrierung verbunden ist, zu der dieser [`NavigationPreloadManager`](/de/docs/Web/API/NavigationPreloadManager) gehört.

## Beispiele

Der folgende Code demonstriert, wie der Wert gesetzt werden könnte.

```js
navigator.serviceWorker.ready
  .then((registration) =>
    registration.navigationPreload.setHeaderValue(newValue),
  )
  .then(() => console.log("Done!"))
  .catch((e) =>
    console.error(`NavigationPreloadManager not supported: ${e.message}`),
  );
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
