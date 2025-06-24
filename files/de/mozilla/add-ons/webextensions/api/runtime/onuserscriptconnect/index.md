---
title: runtime.onUserScriptConnect
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onUserScriptConnect
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Wird ausgelöst, wenn eine Verbindung mit einem Benutzerskript aus einer der `USER_SCRIPT`-Welten der Erweiterung hergestellt wird. Weitere Informationen finden Sie in den [`USER_SCRIPT` worlds](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts/ExecutionWorld).

In Firefox erfordert dieses Ereignis die [`userScripts`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts#permissions). In Chrome ist das Ereignis immer vorhanden, auch in Erweiterungen, die die `userScripts`-Berechtigung nicht deklarieren.

Ein Benutzerskript kann nur aus einer `USER_SCRIPT`-Welt, die durch {{WebExtAPIRef('userScripts.configureWorld()')}} mit `messaging` auf `true` konfiguriert ist, eine Verbindung herstellen und Nachrichten senden.

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
  - : Beendet das Abhören dieses Ereignisses. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Prüft, ob ein `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es aktiv ist, andernfalls `false`.

## addListener-Syntax

### Parameter

- `function`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:
    - `port`
      - : {{WebExtAPIRef('runtime.Port')}}. Ein Objekt, das das aktuelle Skript mit dem anderen Kontext verbindet.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
