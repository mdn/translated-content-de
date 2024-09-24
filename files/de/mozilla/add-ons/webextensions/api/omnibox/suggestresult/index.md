---
title: omnibox.SuggestResult
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/SuggestResult
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Der **`omnibox.SuggestResult`**-Typ definiert einen Vorschlag, den die Erweiterung zur Dropdown-Liste der Adressleiste hinzufügen kann.

Dem {{WebExtAPIRef("omnibox.onInputChanged")}}-Ereignislistener der Erweiterung wird ein Callback übergeben. Um die Dropdown-Liste der Adressleiste als Reaktion auf die Eingabe des Benutzers zu füllen, kann die Erweiterung ein Array von `omnibox.SuggestResult`-Objekten in diesen Callback übergeben.

## Typ

Werte dieses Typs sind Objekte. Sie haben die folgenden Eigenschaften:

- `content`
  - : Dies ist der Wert, der in der Adressleiste selbst erscheint, wenn der Benutzer diesen Vorschlag in der Dropdown-Liste hervorhebt. Dies ist auch der String, der an den {{WebExtAPIRef("omnibox.onInputEntered")}}-Ereignislistener gesendet wird, wenn der Benutzer diesen Vorschlag auswählt. Wenn der String mit dem übereinstimmt, was der Benutzer bereits eingegeben hat, erscheint dieser Eintrag nicht in der Dropdown-Liste.
- `deletable`
  - : Ob das Vorschlagergebnis vom Benutzer gelöscht werden kann.
- `description`
  - : Dies ist der String, der in der Dropdown-Liste der Adressleiste angezeigt wird.

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.omnibox`](https://developer.chrome.com/docs/extensions/reference/api/omnibox)-API von Chromium.
