---
title: proxy.onError
slug: Mozilla/Add-ons/WebExtensions/API/proxy/onError
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Wird ausgelöst, wenn ein Fehler beim Auswerten der PAC-Datei oder des `onRequest`-Listeners auftritt.

Der Fehler kann durch das Werfen von Ausnahmen oder durch das Zurückgeben eines ungültigen Wertes im proxy.onRequest-Ereignishandler ausgelöst werden.

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
  - : Hört auf, dieses Ereignis zu hören. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:

    - `newState`
      - : `Objekt`. Ein [Error](/de/docs/Web/JavaScript/Reference/Global_Objects/Error)-Objekt, das den Fehler darstellt.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
