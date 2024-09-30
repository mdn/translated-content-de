---
title: omnibox.SuggestResult
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/SuggestResult
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Der **`omnibox.SuggestResult`**-Typ definiert einen Vorschlag, den die Erweiterung zur Auswahlliste der Adressleiste hinzufügen kann.

Der {{WebExtAPIRef("omnibox.onInputChanged")}}-Ereignis-Listener der Erweiterung erhält einen Rückruf. Um die Auswahlliste der Adressleiste als Reaktion auf die Benutzereingabe zu füllen, kann die Erweiterung ein Array von `omnibox.SuggestResult`-Objekten an diesen Rückruf übergeben.

## Typ

Werte dieses Typs sind Objekte. Sie haben die folgenden Eigenschaften:

- `content`
  - : Dies ist der Wert, der in der Adressleiste erscheint, wenn der Benutzer diesen Vorschlag in der Auswahlliste hervorhebt. Dies ist auch die Zeichenkette, die an den {{WebExtAPIRef("omnibox.onInputEntered")}}-Ereignis-Listener gesendet wird, wenn der Benutzer diesen Vorschlag auswählt. Wenn die Zeichenkette mit dem übereinstimmt, was der Benutzer bereits eingegeben hat, wird dieser Eintrag nicht in der Auswahlliste angezeigt.
- `deletable`
  - : Gibt an, ob das Vorschlagsergebnis vom Benutzer gelöscht werden kann.
- `description`
  - : Dies ist die Zeichenkette, die in der Auswahlliste der Adressleiste angezeigt wird.

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.omnibox`](https://developer.chrome.com/docs/extensions/reference/api/omnibox) API.
