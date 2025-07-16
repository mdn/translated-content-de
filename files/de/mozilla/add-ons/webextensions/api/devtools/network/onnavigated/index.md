---
title: devtools.network.onNavigated
slug: Mozilla/Add-ons/WebExtensions/API/devtools/network/onNavigated
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
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
  - : Fügt einen Listener zu diesem Ereignis hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## Syntax von addListener

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:
    - `url`
      - : `string`. Die neue URL für das Fenster.

## Beispiele

```js
function handleNavigated(url) {
  console.log(url);
}

browser.devtools.network.onNavigated.addListener(handleNavigated);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.devtools`](https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools) API von Chromium.
