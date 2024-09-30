---
title: devtools.inspectedWindow
slug: Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

> [!NOTE]
> Diese Seite beschreibt die WebExtensions devtools APIs, wie sie in Firefox 54 existieren. Obwohl die APIs auf den [Chrome devtools APIs](https://developer.chrome.com/docs/extensions/how-to/devtools/extend-devtools) basieren, gibt es noch viele Funktionen, die in Firefox noch nicht implementiert sind und daher hier nicht dokumentiert werden. Um zu sehen, welche Funktionen derzeit fehlen, lesen Sie bitte [Limitations of the devtools APIs](/de/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools#limitations_of_the_devtools_apis).

Die `devtools.inspectedWindow` API ermöglicht es einer devtools-Erweiterung, mit dem Fenster zu interagieren, an das die Entwicklerwerkzeuge angehängt sind.

Wie alle `devtools` APIs ist diese API nur für Code verfügbar, der im Dokument läuft, das im [devtools_page](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) manifest.json Schlüssel definiert ist, oder in anderen von der Erweiterung erstellten devtools-Dokumenten (wie z. B. dem Dokument, das von einem von der Erweiterung erstellten Panel gehostet wird). Siehe [Extending the developer tools](/de/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools) für mehr Informationen.

## Eigenschaften

- [`devtools.inspectedWindow.tabId`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/tabId)
  - : Die ID des Fensters, an dem die Entwicklerwerkzeuge angehängt sind.

## Funktionen

- [`devtools.inspectedWindow.eval()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/eval)
  - : Führt JavaScript im Ziel-Fenster aus.
- [`devtools.inspectedWindow.reload()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/reload)
  - : Lädt das Dokument des Ziel-Fensters neu.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der Chromium [`chrome.devtools.inspectedWindow`](https://developer.chrome.com/docs/extensions/reference/api/devtools/inspectedWindow) API.
