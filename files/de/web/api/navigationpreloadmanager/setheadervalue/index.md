---
title: "NavigationPreloadManager: setHeaderValue()-Methode"
short-title: setHeaderValue()
slug: Web/API/NavigationPreloadManager/setHeaderValue
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`setHeaderValue()`**-Methode der [`NavigationPreloadManager`](/de/docs/Web/API/NavigationPreloadManager)-Schnittstelle setzt den Wert des {{HTTPHeader("Service-Worker-Navigation-Preload")}}-Headers, der mit Anfragen gesendet wird, die aus einem [`fetch()`](/de/docs/Web/API/Window/fetch)-Vorgang während des Service-Worker-Navigationsvorspannens resultieren. Sie gibt ein leeres {{jsxref("Promise")}} zurück, das mit `undefined` aufgelöst wird.

Das Vorhandensein des {{HTTPHeader("Service-Worker-Navigation-Preload")}}-Headers in Vorladeanfragen ermöglicht es Servern, die zurückgegebene Ressource für Vorlade-Fetch-Anfragen anders zu konfigurieren als für normale Fetch-Anfragen. Die Standardanweisung ist auf `true` gesetzt: Diese Methode ermöglicht die Möglichkeit, mehrere unterschiedliche Antworten auf Vorladeanfragen zu konfigurieren.

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
  - : Es gibt keinen aktiven Worker, der mit der Registrierung assoziiert ist, zu der dieser [`NavigationPreloadManager`](/de/docs/Web/API/NavigationPreloadManager) gehört.

## Beispiele

Der folgende Code zeigt, wie der Wert gesetzt werden könnte.

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
