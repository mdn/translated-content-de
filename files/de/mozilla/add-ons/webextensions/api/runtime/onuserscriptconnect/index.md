---
title: runtime.onUserScriptConnect
slug: Mozilla/Add-ons/WebExtensions/API/runtime/onUserScriptConnect
l10n:
  sourceCommit: 814f49dc14eb8c8a15c6c3bdc6c83d24ed865cdf
---

{{AddonSidebar}}

Wird ausgelöst, wenn eine Verbindung mit einem Benutzer-Skript aus einer der Erweiterungen des [`USER_SCRIPT`-Welten](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts/ExecutionWorld) hergestellt wird.

In Firefox erfordert dieses Ereignis die [Berechtigung `userScripts`](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts#permissions). In Chrome ist das Ereignis immer vorhanden, auch in Erweiterungen, die die Berechtigung `userScripts` nicht deklarieren.

Ein Benutzer-Skript kann nur dann eine Verbindung herstellen und Nachrichten senden, wenn es sich in einer `USER_SCRIPT`-Welt befindet, die mit {{WebExtAPIRef('userScripts.configureWorld()')}} konfiguriert und `messaging` auf `true` gesetzt ist.

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
  - : Hört auf, dieses Ereignis zu lauschen. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Prüft, ob ein `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `function`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:

    - `port`
      - : {{WebExtAPIRef('runtime.Port')}}. Ein Objekt, das das aktuelle Skript mit dem anderen Kontext verbindet.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
