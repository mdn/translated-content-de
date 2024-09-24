---
title: devtools
slug: Mozilla/Add-ons/WebExtensions/API/devtools
l10n:
  sourceCommit: 34215030993b429f727a2c73ef06eb029f57beeb
---

{{AddonSidebar}}

Ermöglicht Erweiterungen die Interaktion mit den {{Glossary("Developer Tools")}} des Browsers. Diese API wird verwendet, um Seiten für Developer Tools zu erstellen, mit dem Fenster zu interagieren, das inspiziert wird, und die Netzwerknutzung der Seite zu überprüfen.

Um diese API zu verwenden, müssen Sie den [`devtools_page`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page)-Manifest-Schlüssel angeben. Die Verwendung dieses Manifest-Schlüssels löst [eine Berechtigungswarnung zur Installationszeit für Developer Tools](https://support.mozilla.org/en-US/kb/permission-request-messages-firefox-extensions#w_extend-developer-tools-to-access-your-data-in-open-tabs) aus. Um eine Berechtigungswarnung zur Installationszeit zu vermeiden, markieren Sie das Merkmal als optional, indem Sie die Berechtigung `"devtools"` im [`optional_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions)-Manifest-Schlüssel auflisten.

> [!NOTE]
> Die optionale "devtools"-Berechtigung wird nur von Firefox und nicht von Chrome unterstützt ([Chromium Issue 1143015](https://crbug.com/1143015)).

## Eigenschaften

- {{WebExtAPIRef("devtools.inspectedWindow")}}
  - : Interagieren Sie mit dem Fenster, an das die Developer Tools angehängt sind (inspiziertes Fenster). Dazu gehört das Erhalten der Tab-ID für die inspizierte Seite, die Ausführung von Code im Kontext des inspizierten Fensters, das Neuladen der Seite oder das Erhalten der Liste der Ressourcen innerhalb der Seite.
- {{WebExtAPIRef("devtools.network")}}
  - : Informationen zu Netzwerk-Anfragen erhalten, die mit dem Fenster verbunden sind, an das die Developer Tools angehängt sind (das inspizierte Fenster).
- {{WebExtAPIRef("devtools.panels")}}
  - : Erstellen von Benutzeroberflächen-Panels, die innerhalb der User Agent Developer Tools angezeigt werden.

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.devtools`](https://developer.chrome.com/docs/extensions/mv2/devtools/) API.
