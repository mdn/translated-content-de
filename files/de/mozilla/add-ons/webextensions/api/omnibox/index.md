---
title: omnibox
slug: Mozilla/Add-ons/WebExtensions/API/omnibox
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ermöglicht Erweiterungen das Implementieren eines benutzerdefinierten Verhaltens, wenn der Benutzer in die Adressleiste des Browsers eingibt.

Wenn der Benutzer die Adressleiste des Browsers fokussiert und beginnt zu tippen, zeigt der Browser eine Dropdown-Liste mit vorgeschlagenen Seiten basierend auf der Eingabe an. Dies gibt dem Benutzer eine schnelle Möglichkeit, zum Beispiel auf Seiten aus seinem Verlauf oder seinen Lesezeichen zuzugreifen.

Die `omnibox` API bietet der Erweiterung eine Möglichkeit, die im Dropdown angezeigten Vorschläge anzupassen, wenn der Benutzer ein von der Erweiterung definiertes Schlüsselwort eingibt. Es funktioniert wie folgt:

1. Zuerst muss die Erweiterung einen "[omnibox](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/omnibox)" Schlüssel in ihre [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei aufnehmen, der ein Schlüsselwort definiert.
2. Wenn der Benutzer die Adressleiste fokussiert und das Schlüsselwort gefolgt von einem Leerzeichen eingibt, erhält die Erweiterung ein {{WebExtAPIRef("omnibox.onInputStarted")}} Ereignis.
3. Optional kann die Erweiterung {{WebExtAPIRef("omnibox.setDefaultSuggestion()")}} aufrufen, um den ersten im Dropdown der Adressleiste angezeigten Vorschlag zu definieren.
4. Während der Benutzer weitere Zeichen eingibt, erhält die Erweiterung {{WebExtAPIRef("omnibox.onInputChanged")}} Ereignisse. Der Event-Listener erhält den Wert, den der Benutzer eingegeben hat, und kann das Dropdown mit Vorschlägen füllen. Wenn die Erweiterung einen Standardvorschlag mit {{WebExtAPIRef("omnibox.setDefaultSuggestion()")}} festlegt, wird dieser Vorschlag zuerst im Dropdown angezeigt.
5. Wenn der Benutzer einen Vorschlag annimmt, erhält die Erweiterung ein {{WebExtAPIRef("omnibox.onInputEntered")}} Ereignis. Der Event-Listener erhält den angenommenen Vorschlag.
6. Wenn der Benutzer einen Vorschlag löscht, erhält die Erweiterung ein {{WebExtAPIRef("omnibox.onDeleteSuggestion")}} Ereignis.
7. Wenn der Benutzer das Dropdown ablehnt, erhält die Erweiterung ein {{WebExtAPIRef("omnibox.onInputCancelled")}} Ereignis.

## Typen

- {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}}
  - : Beschreibt die empfohlene Methode, den ausgewählten Vorschlag zu verarbeiten: im aktuellen Tab öffnen, in einem neuen Vordergrund-Tab öffnen oder in einem neuen Hintergrund-Tab öffnen.
- {{WebExtAPIRef("omnibox.SuggestResult")}}
  - : Ein Objekt, das einen Vorschlag repräsentiert, der dem Dropdown der Adressleiste hinzugefügt wird.

## Funktionen

- {{WebExtAPIRef("omnibox.setDefaultSuggestion()")}}
  - : Definiert den ersten Vorschlag, der im Dropdown angezeigt wird, wenn der Benutzer das Schlüsselwort Ihrer Erweiterung gefolgt von einem Leerzeichen eingibt.

## Ereignisse

- {{WebExtAPIRef("omnibox.onDeleteSuggestion")}}
  - : Wird ausgelöst, wenn der Benutzer einen Vorschlag löscht.
- {{WebExtAPIRef("omnibox.onInputStarted")}}
  - : Wird ausgelöst, wenn der Benutzer die Adressleiste fokussiert und das Schlüsselwort Ihrer Erweiterung gefolgt von einem Leerzeichen eingibt.
- {{WebExtAPIRef("omnibox.onInputChanged")}}
  - : Wird ausgelöst, wann immer sich die Eingabe des Benutzers ändert, nachdem er die Adressleiste fokussiert und das Schlüsselwort Ihrer Erweiterung gefolgt von einem Leerzeichen eingegeben hat.
- {{WebExtAPIRef("omnibox.onInputEntered")}}
  - : Wird ausgelöst, wenn der Benutzer einen der Vorschläge Ihrer Erweiterung annimmt.
- {{WebExtAPIRef("omnibox.onInputCancelled")}}
  - : Wird ausgelöst, wenn der Benutzer das Dropdown der Adressleiste ablehnt, nachdem er die Adressleiste fokussiert und das Schlüsselwort Ihrer Erweiterung gefolgt von einem Leerzeichen eingegeben hat.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.omnibox`](https://developer.chrome.com/docs/extensions/reference/api/omnibox) API.
