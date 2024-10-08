---
title: omnibox.onInputCancelled
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/onInputCancelled
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn der Benutzer seine Interaktion mit Ihrer Erweiterung abgebrochen hat (zum Beispiel durch Klicken außerhalb der Adressleiste).

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
  - : Beendet das Abhören dieses Ereignisses. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## AddListener-Syntax

Der Listener-Funktion werden keine Parameter übergeben.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

```js
browser.omnibox.onInputCancelled.addListener(() => {
  console.log("The user cancelled the session.");
});
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der API [`chrome.omnibox`](https://developer.chrome.com/docs/extensions/reference/api/omnibox) von Chromium.
