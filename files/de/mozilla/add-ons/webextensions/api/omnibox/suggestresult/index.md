---
title: omnibox.SuggestResult
slug: Mozilla/Add-ons/WebExtensions/API/omnibox/SuggestResult
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Der Typ **`omnibox.SuggestResult`** definiert einen Vorschlag, den die Erweiterung zur Dropdown-Liste der Adressleiste hinzufügen kann.

Der {{WebExtAPIRef("omnibox.onInputChanged")}}-Ereignislistener der Erweiterung wird mit einem Callback aufgerufen. Um die Dropdown-Liste der Adressleiste als Antwort auf die Eingabe des Benutzers zu füllen, kann die Erweiterung ein Array von `omnibox.SuggestResult`-Objekten an diesen Callback übergeben.

## Typ

Werte dieses Typs sind Objekte. Sie haben die folgenden Eigenschaften:

- `content`
  - : Dies ist der Wert, der in der Adressleiste selbst erscheint, wenn der Benutzer diesen Vorschlag in der Dropdown-Liste hervorhebt. Dies ist auch der String, der an den {{WebExtAPIRef("omnibox.onInputEntered")}}-Ereignislistener gesendet wird, wenn der Benutzer diesen Vorschlag auswählt. Wenn der String identisch mit dem ist, was der Benutzer bereits eingegeben hat, erscheint dieser Eintrag nicht in der Dropdown-Liste.
- `deletable`
  - : Ob das Vorschlagsergebnis vom Benutzer gelöscht werden kann.
- `description`
  - : Dies ist der String, der in der Dropdown-Liste der Adressleiste angezeigt wird.

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.omnibox`](https://developer.chrome.com/docs/extensions/reference/api/omnibox)-API von Chromium.
