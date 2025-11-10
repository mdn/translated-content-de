---
title: runtime.onUserScriptConnect
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onUserScriptConnect
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ausgelöst, wenn eine Verbindung zu einem Userskript aus einer der Erweiterungs- [`USER_SCRIPT`-Welten](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts/ExecutionWorld) hergestellt wird.

In Firefox erfordert dieses Ereignis die [`userScripts`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts#permissions). In Chrome ist das Ereignis immer vorhanden, auch in Erweiterungen, die die `userScripts`-Berechtigung nicht deklarieren.

Ein Userskript kann nur aus einer `USER_SCRIPT`-Welt eine Verbindung herstellen und Nachrichten senden, die mit {{WebExtAPIRef('userScripts.configureWorld()')}} konfiguriert wurde, wobei `messaging` auf `true` gesetzt ist.

## Syntax

```js-nolint
browser.runtime.onUserScriptConnect.addListener(listener)
browser.runtime.onUserScriptConnect.removeListener(listener)
browser.runtime.onUserScriptConnect.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob ein `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er lauscht, andernfalls `false`.

## addListener-Syntax

### Parameter

- `function`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:
    - `port`
      - : {{WebExtAPIRef('runtime.Port')}}. Ein Objekt, das das aktuelle Skript mit dem anderen Kontext verbindet.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
