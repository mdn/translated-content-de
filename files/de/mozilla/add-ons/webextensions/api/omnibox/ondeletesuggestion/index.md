---
title: omnibox.onDeleteSuggestion
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/onDeleteSuggestion
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Wird ausgelöst, wenn der Benutzer einen Vorschlag löscht.
Ein Vorschlag kann gelöscht werden, wenn {{WebExtAPIRef("omnibox.SuggestResult","SuggestResult")}}`.deletable` auf true gesetzt ist.

## Syntax

```js-nolint
browser.omnibox.onDeleteSuggestion.addListener(listener)
browser.omnibox.onDeleteSuggestion.removeListener(listener)
browser.omnibox.onDeleteSuggestion.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(listener)`
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Beendet das Zuhören für dieses Ereignis. Das Argument `listener` ist der Listener, der entfernt werden soll.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

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
> Diese API basiert auf Chromiums [`chrome.omnibox`](https://developer.chrome.com/docs/extensions/reference/api/omnibox) API.
>
> Microsoft Edge-Kompatibilitätsdaten werden von der Microsoft Corporation bereitgestellt und sind hier unter der Creative Commons Attribution 3.0 United States License enthalten.
