---
title: "NavigationPreloadManager: setHeaderValue()-Methode"
short-title: setHeaderValue()
slug: Web/API/NavigationPreloadManager/setHeaderValue
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`setHeaderValue()`**-Methode der Schnittstelle {{domxref("NavigationPreloadManager")}} setzt den Wert des Headers {{HTTPHeader("Service-Worker-Navigation-Preload")}}, der mit Anfragen gesendet wird, die aus einer {{domxref("Window/fetch", "fetch()")}}-Operation resultieren, die während des Preloadings der Service Worker-Navigation durchgeführt wird. Sie gibt ein leeres {{jsxref("Promise")}} zurück, das mit `undefined` aufgelöst wird.

Das Vorhandensein des Headers {{HTTPHeader("Service-Worker-Navigation-Preload")}} in Preloading-Anfragen ermöglicht es Servern, die zurückgegebene Ressource für Preloading-Fetch-Anfragen anders zu konfigurieren als für normale Fetch-Anfragen. Die Standardrichtlinie ist auf `true` gesetzt: Diese Methode ermöglicht die Möglichkeit, mehrere verschiedene Antworten auf Preloading-Anfragen zu konfigurieren.

> [!NOTE]
> Wenn durch das Setzen dieses Headers eine andere Antwort resultieren kann, muss der Server `Vary: Service-Worker-Navigation-Preload` setzen, um sicherzustellen, dass die verschiedenen Antworten zwischengespeichert werden.

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

- `InvalidStateError` {{domxref("DOMException")}}
  - : Es gibt keinen aktiven Worker, der mit der Registrierung verknüpft ist, zu der dieser {{domxref("NavigationPreloadManager")}} gehört.

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
