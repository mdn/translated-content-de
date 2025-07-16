---
title: omnibox.onInputCancelled
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/onInputCancelled
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ausgelöst, wenn der Benutzer die Interaktion mit Ihrer Erweiterung abgebrochen hat (zum Beispiel durch Klicken außerhalb der Adressleiste).

## Syntax

```js-nolint
browser.omnibox.onInputCancelled.addListener(listener)
browser.omnibox.onInputCancelled.removeListener(listener)
browser.omnibox.onInputCancelled.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Zuhören auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

Der Listener-Funktion werden keine Parameter übergeben.

## Beispiele

```js
browser.omnibox.onInputCancelled.addListener(() => {
  console.log("The user cancelled the session.");
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.omnibox`](https://developer.chrome.com/docs/extensions/reference/api/omnibox) API.
