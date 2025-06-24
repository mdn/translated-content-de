---
title: devtools.network.onNavigated
slug: Mozilla/Add-ons/WebExtensions/API/devtools/network/onNavigated
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Ausgelöst, wenn der Benutzer das untersuchte Fenster zu einer neuen Seite navigiert.

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
  - : Hört auf, diesem Ereignis zuzuhören. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er zuhört, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:
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
