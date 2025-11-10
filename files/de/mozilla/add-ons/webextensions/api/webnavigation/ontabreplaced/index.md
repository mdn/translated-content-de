---
title: webNavigation.onTabReplaced
slug: Mozilla/Add-ons/WebExtensions/API/webNavigation/onTabReplaced
l10n:
  sourceCommit: 14c57deab8b4924b564a15f3aef6bfb2a1834a46
---

Wird ausgelöst, wenn der Inhalt des Tabs durch einen anderen (normalerweise zuvor vorgerenderten) Tab ersetzt wird.

## Syntax

```js-nolint
browser.webNavigation.onTabReplaced.addListener(
  listener,                   // function
  filter                      // optional object
);
browser.webNavigation.onTabReplaced.removeListener(listener)
browser.webNavigation.onTabReplaced.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion wird dieses Argument übergeben:
    - `details`
      - : `object`. Details über den Tab-Austausch.
        - `replacedTabId`
          - : `integer`. Die ID des ersetzten Tabs.
        - `tabId`
          - : `integer`. Die ID des Ersatz-Tabs.
        - `timeStamp`
          - : `number`. Der Zeitpunkt, zu dem der Austausch stattfand, in [Millisekunden seit der Epoche](https://de.wikipedia.org/wiki/Unixzeit).

## Beispiele

```js
function logOnTabReplaced(details) {
  console.log(`onTabReplaced ${details}`);
}

browser.webNavigation.onTabReplaced.addListener(logOnTabReplaced);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.webNavigation`](https://developer.chrome.com/docs/extensions/reference/api/webNavigation#event-onTabReplaced) API von Chromium. Diese Dokumentation stammt aus [`web_navigation.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/web_navigation.json) im Chromium-Code.
