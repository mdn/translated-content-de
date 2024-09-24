---
title: devtools.network.onNavigated
slug: Mozilla/Add-ons/WebExtensions/API/devtools/network/onNavigated
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn der Benutzer das inspizierte Fenster zu einer neuen Seite navigiert.

## Syntax

```js-nolint
browser.devtools.network.onNavigated.addListener(listener)
browser.devtools.network.onNavigated.removeListener(listener)
browser.devtools.network.onNavigated.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Unterbricht das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er lauscht, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird folgendes Argument übergeben:

    - `url`
      - : `string`. Die neue URL für das Fenster.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

```js
function handleNavigated(url) {
  console.log(url);
}

browser.devtools.network.onNavigated.addListener(handleNavigated);
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.devtools`](https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools) API von Chromium.
