---
title: omnibox
slug: Mozilla/Add-ons/WebExtensions/API/omnibox
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ermöglicht es Erweiterungen, benutzerdefiniertes Verhalten zu implementieren, wenn der Benutzer in die Adressleiste des Browsers eingibt.

Wenn der Benutzer die Adressleiste des Browsers fokussiert und zu tippen beginnt, zeigt der Browser eine Dropdown-Liste mit vorgeschlagenen Seiten an, basierend auf dem, was er eingegeben hat. Dies bietet dem Benutzer eine schnelle Möglichkeit, beispielsweise auf Seiten aus seinem Verlauf oder seinen Lesezeichen zuzugreifen.

Die omnibox-API bietet der Erweiterung eine Möglichkeit, die in der Dropdown-Liste angezeigten Vorschläge anzupassen, wenn der Benutzer ein von der Erweiterung definiertes Schlüsselwort eingibt. Es funktioniert wie folgt:

1. Zuerst muss die Erweiterung einen "[omnibox](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/omnibox)"-Schlüssel in ihrer [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json)-Datei enthalten, das ein Schlüsselwort definiert.
2. Wenn der Benutzer die Adressleiste fokussiert und das Schlüsselwort gefolgt von einem Leerzeichen eingibt, erhält die Erweiterung ein {{WebExtAPIRef("omnibox.onInputStarted")}}-Ereignis.
3. Optional kann die Erweiterung {{WebExtAPIRef("omnibox.setDefaultSuggestion()")}} aufrufen, um den ersten in der Adressleisten-Dropdown angezeigten Vorschlag zu definieren.
4. Während der Benutzer weiterhin Zeichen eingibt, erhält die Erweiterung {{WebExtAPIRef("omnibox.onInputChanged")}}-Ereignisse. Der Ereignis-Listener erhält den vom Benutzer eingegebenen Wert und kann die Adressleisten-Dropdown mit Vorschlägen füllen. Wenn die Erweiterung einen Standardvorschlag mit {{WebExtAPIRef("omnibox.setDefaultSuggestion()")}} festlegt, wird dieser Vorschlag zuerst in der Dropdown-Liste angezeigt.
5. Wenn der Benutzer einen Vorschlag akzeptiert, erhält die Erweiterung ein {{WebExtAPIRef("omnibox.onInputEntered")}}-Ereignis. Der Ereignis-Listener erhält den akzeptierten Vorschlag.
6. Wenn der Benutzer einen Vorschlag löscht, erhält die Erweiterung ein {{WebExtAPIRef("omnibox.onDeleteSuggestion")}}-Ereignis.
7. Wenn der Benutzer das Dropdown schließt, erhält die Erweiterung ein {{WebExtAPIRef("omnibox.onInputCancelled")}}-Ereignis.

## Typen

- {{WebExtAPIRef("omnibox.OnInputEnteredDisposition")}}
  - : Beschreibt die empfohlene Methode, um mit dem ausgewählten Vorschlag umzugehen: Öffnen im aktuellen Tab, Öffnen in einem neuen Vordergrund-Tab oder Öffnen in einem neuen Hintergrund-Tab.
- {{WebExtAPIRef("omnibox.SuggestResult")}}
  - : Ein Objekt, das einen Vorschlag darstellt, der zur Adressleisten-Dropdown hinzugefügt werden soll.

## Funktionen

- {{WebExtAPIRef("omnibox.setDefaultSuggestion()")}}
  - : Definiert den ersten in der Dropdown-Liste angezeigten Vorschlag, wenn der Benutzer das Schlüsselwort Ihrer Erweiterung gefolgt von einem Leerzeichen eingibt.

## Ereignisse

- {{WebExtAPIRef("omnibox.onDeleteSuggestion")}}
  - : Wird ausgelöst, wenn der Benutzer einen Vorschlag löscht.
- {{WebExtAPIRef("omnibox.onInputStarted")}}
  - : Wird ausgelöst, wenn der Benutzer die Adressleiste fokussiert und das omnibox-Schlüsselwort Ihrer Erweiterung gefolgt von einem Leerzeichen eingibt.
- {{WebExtAPIRef("omnibox.onInputChanged")}}
  - : Wird ausgelöst, wenn sich die Eingabe des Benutzers ändert, nachdem er die Adressleiste fokussiert und das Schlüsselwort Ihrer Erweiterung gefolgt von einem Leerzeichen eingegeben hat.
- {{WebExtAPIRef("omnibox.onInputEntered")}}
  - : Wird ausgelöst, wenn der Benutzer einen der Vorschläge Ihrer Erweiterung akzeptiert.
- {{WebExtAPIRef("omnibox.onInputCancelled")}}
  - : Wird ausgelöst, wenn der Benutzer die Adressleisten-Dropdown schließt, nachdem er die Adressleiste fokussiert und das Schlüsselwort Ihrer Erweiterung gefolgt von einem Leerzeichen eingegeben hat.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.omnibox`](https://developer.chrome.com/docs/extensions/reference/api/omnibox)-API von Chromium.
