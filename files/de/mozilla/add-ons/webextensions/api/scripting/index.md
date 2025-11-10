---
title: scripting
slug: Mozilla/Add-ons/WebExtensions/API/scripting
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Fügt JavaScript und CSS in Webseiten ein. Diese API bietet zwei Ansätze zum Einfügen von Inhalten:

- {{WebExtAPIRef("scripting.executeScript()")}}, {{WebExtAPIRef("scripting.insertCSS()")}} und {{WebExtAPIRef("scripting.removeCSS()")}}, die Einmal-Injektionen ermöglichen.
- {{WebExtAPIRef("scripting.registerContentScripts()")}}, das Inhalts-Skripte dynamisch registriert, die dann mit {{WebExtAPIRef("scripting.getRegisteredContentScripts()")}} abgerufen und mit {{WebExtAPIRef("scripting.unregisterContentScripts()")}} abgemeldet werden können.

> [!NOTE]
> Chrome beschränkt diese API auf Manifest V3. Firefox und Safari unterstützen diese API in Manifest V2 und V3.

Diese API erfordert die `"scripting"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) und [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für das Ziel im Tab, in das JavaScript oder CSS eingefügt wird.

Alternativ können Sie die Berechtigung vorübergehend im aktiven Tab und nur als Antwort auf eine ausdrückliche Benutzeraktion erhalten, indem Sie um die [`"activeTab"`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) bitten. Dennoch ist die `"scripting"`-Berechtigung weiterhin erforderlich.

## Typen

- {{WebExtAPIRef("scripting.ContentScriptFilter")}}
  - : Gibt die IDs von Skripten an, die mit {{WebExtAPIRef("scripting.getRegisteredContentScripts()")}} abgerufen oder mit {{WebExtAPIRef("scripting.unregisterContentScripts()")}} abgemeldet werden können.
- {{WebExtAPIRef("scripting.ExecutionWorld")}}
  - : Gibt die Ausführungsumgebung eines Skripts an, das mit {{WebExtAPIRef("scripting.executeScript()")}} injiziert oder mit {{WebExtAPIRef("scripting.registerContentScripts()")}} registriert wird.
- {{WebExtAPIRef("scripting.InjectionTarget")}}
  - : Details eines Injektionsziels.
- {{WebExtAPIRef("scripting.RegisteredContentScript")}}
  - : Details eines Inhalts-Skripts, das registriert werden soll oder bereits registriert ist.

## Funktionen

- {{WebExtAPIRef("scripting.executeScript()")}}
  - : Injektiert JavaScript-Code in eine Seite.
- {{WebExtAPIRef("scripting.getRegisteredContentScripts()")}}
  - : Ruft eine Liste der registrierten Inhalts-Skripte ab.
- {{WebExtAPIRef("scripting.insertCSS()")}}
  - : Injektiert CSS in eine Seite.
- {{WebExtAPIRef("scripting.registerContentScripts()")}}
  - : Registriert ein Inhalts-Skript für zukünftige Seitenladevorgänge.
- {{WebExtAPIRef("scripting.removeCSS()")}}
  - : Entfernt CSS, das zuvor durch einen Aufruf von {{WebExtAPIRef("scripting.insertCSS()")}} in eine Seite injiziert wurde.
- {{WebExtAPIRef("scripting.updateContentScripts()")}}
  - : Aktualisiert ein oder mehrere bereits registrierte Inhalts-Skripte.
- {{WebExtAPIRef("scripting.unregisterContentScripts()")}}
  - : Meldet ein oder mehrere Inhalts-Skripte ab.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting) API von Chromium.
