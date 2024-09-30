---
title: omnibox
slug: Mozilla/Add-ons/WebExtensions/API/omnibox
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ermöglicht Erweiterungen die Implementierung von benutzerdefiniertem Verhalten, wenn der Benutzer in die Adressleiste des Browsers tippt.

Wenn der Benutzer die Adressleiste des Browsers fokussiert und zu tippen beginnt, zeigt der Browser eine Dropdown-Liste mit vorgeschlagenen Seiten basierend auf dem, was er eingegeben hat. Dies bietet dem Benutzer eine schnelle Möglichkeit, beispielsweise Seiten aus seinem Verlauf oder seinen Lesezeichen aufzurufen.

Die `omnibox`-API bietet der Erweiterung eine Möglichkeit, die in der Dropdown-Liste angezeigten Vorschläge anzupassen, wenn der Benutzer ein von der Erweiterung definiertes Schlüsselwort eingibt. Es funktioniert wie folgt:

1. Zuerst muss die Erweiterung einen "[omnibox](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/omnibox)"-Schlüssel in ihrer [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei enthalten, der ein Schlüsselwort definiert.
2. Wenn der Benutzer die Adressleiste fokussiert und das Schlüsselwort gefolgt von einem Leerzeichen eingibt, erhält die Erweiterung ein {{WebExtAPIRef("omnibox.onInputStarted")}}-Ereignis.
3. Optional kann die Erweiterung {{WebExtAPIRef("omnibox.setDefaultSuggestion()")}} aufrufen, um den ersten Vorschlag in der Dropdown-Liste der Adressleiste zu definieren.
4. Während der Benutzer weiterhin Zeichen eingibt, erhält die Erweiterung {{WebExtAPIRef("omnibox.onInputChanged")}}-Ereignisse. Der Ereignislistener erhält den Wert, den der Benutzer eingegeben hat, und kann die Dropdown-Liste der Adressleiste mit Vorschlägen füllen. Wenn die Erweiterung einen Standardvorschlag mit {{WebExtAPIRef("omnibox.setDefaultSuggestion()")}} festlegt, wird dieser Vorschlag zuerst in der Dropdown-Liste angezeigt.
5. Wenn der Benutzer einen Vorschlag akzeptiert, erhält die Erweiterung ein {{WebExtAPIRef("omnibox.onInputEntered")}}-Ereignis. Der Ereignislistener erhält den akzeptierten Vorschlag.
6. Wenn der Benutzer einen Vorschlag löscht, erhält die Erweiterung ein {{WebExtAPIRef("omnibox.onDeleteSuggestion")}}-Ereignis.
7. Wenn der Benutzer die Dropdown-Liste schließt, erhält die Erweiterung ein {{WebExtAPIRef("omnibox.onInputCancelled")}}-Ereignis.

## Typen

- {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}}
  - : Beschreibt die empfohlene Methode zum Umgang mit dem ausgewählten Vorschlag: im aktuellen Tab öffnen, in einem neuen Vordergrundtab öffnen oder in einem neuen Hintergrundtab öffnen.
- {{WebExtAPIRef("omnibox.SuggestResult")}}
  - : Ein Objekt, das einen Vorschlag darstellt, der der Dropdown-Liste der Adressleiste hinzugefügt werden soll.

## Funktionen

- {{WebExtAPIRef("omnibox.setDefaultSuggestion()")}}
  - : Definiert den ersten Vorschlag, der in der Dropdown-Liste angezeigt wird, wenn der Benutzer das Schlüsselwort Ihrer Erweiterung gefolgt von einem Leerzeichen eingibt.

## Ereignisse

- {{WebExtAPIRef("omnibox.onDeleteSuggestion")}}
  - : Wird ausgelöst, wenn der Benutzer einen Vorschlag löscht.
- {{WebExtAPIRef("omnibox.onInputStarted")}}
  - : Wird ausgelöst, wenn der Benutzer die Adressleiste fokussiert und das Schlüsselwort der `omnibox`-Erweiterung, gefolgt von einem Leerzeichen, eingibt.
- {{WebExtAPIRef("omnibox.onInputChanged")}}
  - : Wird ausgelöst, wenn sich die Eingabe des Benutzers ändert, nachdem er die Adressleiste fokussiert und das Schlüsselwort Ihrer Erweiterung gefolgt von einem Leerzeichen eingegeben hat.
- {{WebExtAPIRef("omnibox.onInputEntered")}}
  - : Wird ausgelöst, wenn der Benutzer einen der Vorschläge Ihrer Erweiterung akzeptiert.
- {{WebExtAPIRef("omnibox.onInputCancelled")}}
  - : Wird ausgelöst, wenn der Benutzer die Dropdown-Liste der Adressleiste schließt, nachdem er die Adressleiste fokussiert und das Schlüsselwort Ihrer Erweiterung gefolgt von einem Leerzeichen eingegeben hat.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.omnibox`](https://developer.chrome.com/docs/extensions/reference/api/omnibox) API.
