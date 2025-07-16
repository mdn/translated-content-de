---
title: devtools.panels.ElementsPanel
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/ElementsPanel
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ein `ElementsPanel` repräsentiert den HTML/CSS-Inspektor in den Entwicklerwerkzeugen des Browsers. In Firefox wird dies als Seiteninspektor und in Chrome als Element-Panel bezeichnet.

## Funktionen

- [`devtools.panels.ElementsPanel.createSidebarPane()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ElementsPanel/createSidebarPane)
  - : Erstellt ein Paneel in der Seitenleiste des Inspektors.

## Ereignisse

- [`devtools.panels.ElementsPanel.onSelectionChanged`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ElementsPanel/onSelectionChanged)
  - : Wird ausgelöst, wenn der Benutzer ein anderes Element auf der Seite auswählt, beispielsweise mit dem Kontextmenüpunkt "Element untersuchen".

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.devtools`](https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools) API von Chromium.
