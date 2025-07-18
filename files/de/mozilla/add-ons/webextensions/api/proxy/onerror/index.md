---
title: proxy.onError
slug: Mozilla/Add-ons/WebExtensions/API/proxy/onError
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ausgelöst, wenn ein Fehler beim Auswerten der PAC-Datei oder des `onRequest`-Listeners auftritt.

Der Fehler kann durch das Auslösen oder Zurückgeben eines ungültigen Wertes im `proxy.onRequest`-Ereignishandler verursacht werden.

## Syntax

```js-nolint
browser.proxy.onError.addListener(listener)
browser.proxy.onError.removeListener(listener)
browser.proxy.onError.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Lauschen auf dieses Ereignis. Das Argument `listener` ist der Listener, der entfernt werden soll.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:
    - `newState`
      - : `Object`. Ein [Error](/de/docs/Web/JavaScript/Reference/Global_Objects/Error)-Objekt, das den Fehler darstellt.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
