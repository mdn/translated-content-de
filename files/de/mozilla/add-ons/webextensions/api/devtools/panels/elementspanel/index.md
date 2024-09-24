---
title: devtools.panels.ElementsPanel
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/ElementsPanel
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ein `ElementsPanel` repräsentiert den HTML/CSS-Inspektor in den Devtools des Browsers. Dies wird in Firefox als Seiteninspektor und in Chrome als Elementpanel bezeichnet.

## Funktionen

- [`devtools.panels.ElementsPanel.createSidebarPane()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ElementsPanel/createSidebarPane)
  - : Erstellt ein Paneel in der Seitenleiste des Inspektors.

## Ereignisse

- [`devtools.panels.ElementsPanel.onSelectionChanged`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ElementsPanel/onSelectionChanged)
  - : Wird ausgelöst, wenn der Benutzer ein anderes Element auf der Seite auswählt, z. B. mit dem Kontextmenü-Eintrag „Element untersuchen“.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.devtools`](https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools) API von Chromium.
