---
title: omnibox.onInputCancelled
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/onInputCancelled
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ausgelöst, wenn der Benutzer seine Interaktion mit Ihrer Erweiterung abgebrochen hat (z. B. durch Klicken außerhalb der Adressleiste).

## Syntax

```js-nolint
browser.omnibox.onInputCancelled.addListener(listener)
browser.omnibox.onInputCancelled.removeListener(listener)
browser.omnibox.onInputCancelled.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt dem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Hört auf, diesem Ereignis zuzuhören. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Prüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn zugehört wird, andernfalls `false`.

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
> Diese API basiert auf der [`chrome.omnibox`](https://developer.chrome.com/docs/extensions/reference/api/omnibox)-API von Chromium.
