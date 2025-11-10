---
title: omnibox.onInputStarted
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/onInputStarted
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Wird ausgelöst, wenn der Benutzer beginnt, mit Ihrer Erweiterung zu interagieren, indem er das Schlüsselwort in die Adressleiste eingibt und dann die Leertaste drückt.

Dies wird gesendet, bevor irgendwelche {{WebExtAPIRef("omnibox.onInputChanged")}} Ereignisse ausgelöst werden.

## Syntax

```js-nolint
browser.omnibox.onInputStarted.addListener(listener)
browser.omnibox.onInputStarted.removeListener(listener)
browser.omnibox.onInputStarted.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Zuhören für dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden keine Argumente übergeben.

## Beispiele

```js
browser.omnibox.onInputStarted.addListener(() => {
  console.log("User has started interacting with me.");
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.omnibox`](https://developer.chrome.com/docs/extensions/reference/api/omnibox) API.
