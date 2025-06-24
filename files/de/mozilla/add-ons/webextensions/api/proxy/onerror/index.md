---
title: proxy.onError
slug: Mozilla/Add-ons/WebExtensions/API/proxy/onError
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Dieser Event wird ausgelöst, wenn ein Fehler bei der Auswertung der PAC-Datei oder des `onRequest`-Listeners auftritt.

Der Fehler kann ausgelöst werden, indem im proxy.onRequest Event-Handler ein ungültiger Wert geworfen oder zurückgegeben wird.

## Syntax

```js-nolint
browser.proxy.onError.addListener(listener)
browser.proxy.onError.removeListener(listener)
browser.proxy.onError.hasListener(listener)
```

Events haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Event einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Event. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Event registriert ist. Gibt `true` zurück, wenn darauf gelauscht wird, andernfalls `false`.

## Syntax von addListener

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Event eintritt. Der Funktion wird folgendes Argument übergeben:
    - `newState`
      - : `Object`. Ein [Error](/de/docs/Web/JavaScript/Reference/Global_Objects/Error) Objekt, das den Fehler darstellt.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
