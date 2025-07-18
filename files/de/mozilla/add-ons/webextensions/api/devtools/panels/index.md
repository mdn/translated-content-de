---
title: devtools.panels
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

> [!NOTE]
> Obwohl die APIs auf den [Chrome devtools APIs](https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools) basieren, gibt es noch viele Funktionen, die in Firefox nicht implementiert sind und daher hier nicht dokumentiert werden. Um zu sehen, welche Funktionen derzeit fehlen, lesen Sie bitte [Einschränkungen der devtools APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools#limitations_of_the_devtools_apis).

Die `devtools.panels` API ermöglicht es einer Devtools-Erweiterung, ihre Benutzeroberfläche innerhalb des Devtools-Fensters zu definieren.

Das Devtools-Fenster beherbergt eine Reihe von separaten Werkzeugen - den JavaScript-Debugger, den Netzwerkmonitor und so weiter. Eine Reihe von Registerkarten oben ermöglicht es dem Benutzer, zwischen den verschiedenen Werkzeugen zu wechseln. Das Fenster, das die Benutzeroberfläche jedes Werkzeugs hostet, wird als "Panel" bezeichnet.

Mit der `devtools.panels` API können Sie neue Panels im Devtools-Fenster erstellen.

Wie alle `devtools` APIs ist diese API nur für Code verfügbar, der im Dokument ausgeführt wird, das im [devtools_page](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) manifest.json Schlüssel definiert ist, oder in anderen von der Erweiterung erstellten Devtools-Dokumenten (wie dem eigenen Dokument des Panels). Siehe [Erweiterung der Entwicklerwerkzeuge](/de/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools) für mehr.

## Typen

- [`devtools.panels.ElementsPanel`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ElementsPanel)
  - : Repräsentiert den HTML/CSS-Inspektor in den Devtools des Browsers.
- [`devtools.panels.ExtensionPanel`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionPanel)
  - : Repräsentiert ein von der Erweiterung erstelltes Devtools-Panel.
- [`devtools.panels.ExtensionSidebarPane`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane)
  - : Repräsentiert ein Feld, das eine Erweiterung zum HTML/CSS-Inspektor in den Devtools des Browsers hinzugefügt hat.

## Eigenschaften

- [`devtools.panels.elements`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/elements)
  - : Eine Referenz zu einem [`ElementsPanel`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ElementsPanel) Objekt.
- [`devtools.panels.themeName`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/themeName)
  - : Der Name des aktuellen Devtools-Themas.

## Funktionen

- [`devtools.panels.create()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/create)
  - : Erstellt ein neues Devtools-Panel.

## Ereignisse

- [`devtools.panels.onThemeChanged`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/onThemeChanged)
  - : Wird ausgelöst, wenn sich das Devtools-Thema ändert.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der Chromium [`chrome.devtools.panels`](https://developer.chrome.com/docs/extensions/reference/api/devtools/panels) API.
