---
title: omnibox.onDeleteSuggestion
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/onDeleteSuggestion
l10n:
  sourceCommit: 873e38320b7f7dbe0492f96a02e7e6503ac8c3b3
---

{{AddonSidebar}}

Ausgelöst, wenn der Benutzer einen Vorschlag löscht. Ein Vorschlag kann gelöscht werden, wenn die Eigenschaft `deletable` eines {{WebExtAPIRef("omnibox.SuggestResult","SuggestResult")}} auf `true` gesetzt ist.

## Syntax

```js-nolint
browser.omnibox.onDeleteSuggestion.addListener(listener)
browser.omnibox.onDeleteSuggestion.removeListener(listener)
browser.omnibox.onDeleteSuggestion.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt einen Listener zu diesem Ereignis hinzu.
- `removeListener(listener)`
  - : Beendet das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn er zuhört, andernfalls `false`.

## addListener Syntax

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
