---
title: devtools.panels.ExtensionSidebarPane
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Das `ExtensionSidebarPane`-Objekt repräsentiert ein Feld, das eine Erweiterung zur Sidebar im HTML/CSS-Inspektor des Browsers hinzugefügt hat.

![neues Feld mit dem Titel "My pane", das ein JSON-Objekt anzeigt](inspector-sidebar.png)

Um ein `ExtensionSidebarPane` zu erstellen, rufen Sie die Funktion [`browser.devtools.panels.elements.createSidebarPane()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ElementsPanel/createSidebarPane) auf.

## Funktionen

- [`devtools.panels.ExtensionSidebarPane.setExpression()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane/setExpression)
  - : Führt einen JavaScript-Ausdruck auf der Webseite aus, die vom Inspektor untersucht wird. Das Ergebnis wird im Sidebar-Feld angezeigt.
- [`devtools.panels.ExtensionSidebarPane.setObject()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane/setObject)
  - : Setzt ein JSON-Objekt, das im Sidebar-Feld angezeigt wird.
- [`devtools.panels.ExtensionSidebarPane.setPage()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane/setPage)
  - : Lädt die Seite, die durch die bereitgestellte URL angegeben wird.

## Ereignisse

- [`devtools.panels.ExtensionSidebarPane.onShown`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane/onShown)
  - : Wird ausgelöst, wenn das Sidebar-Feld angezeigt wird.
- [`devtools.panels.ExtensionSidebarPane.onHidden`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane/onHidden)
  - : Wird ausgelöst, wenn das Sidebar-Feld verborgen wird.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf der [`chrome.devtools.panels`](https://developer.chrome.com/docs/extensions/reference/api/devtools/panels)-API von Chromium.
