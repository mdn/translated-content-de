---
title: omnibox.onDeleteSuggestion
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/onDeleteSuggestion
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Wird ausgelöst, wenn der Benutzer einen Vorschlag löscht.
Ein Vorschlag kann gelöscht werden, wenn die Eigenschaft `deletable` eines {{WebExtAPIRef("omnibox.SuggestResult","SuggestResult")}} auf true gesetzt ist.

## Syntax

```js-nolint
browser.omnibox.onDeleteSuggestion.addListener(listener)
browser.omnibox.onDeleteSuggestion.removeListener(listener)
browser.omnibox.onDeleteSuggestion.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt einen Listener für dieses Ereignis hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der Listener, der entfernt werden soll.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## addListener-Syntax

### Parameter

- `text`
  - : `string`. Die Beschreibung des gelöschten Vorschlags.

## Beispiele

Dieses Beispiel gibt den gelöschten Vorschlag in der Konsole aus:

```js
function logDeletedSuggestion(text) {
  console.log(`The user deleted: ${text}`);
}

browser.omnibox.onDeleteSuggestion.addListener(logDeletedSuggestion);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.omnibox`](https://developer.chrome.com/docs/extensions/reference/api/omnibox) API von Chromium.
