---
title: scripting
slug: Mozilla/Add-ons/WebExtensions/API/scripting
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Fügt JavaScript und CSS in Websites ein. Diese API bietet zwei Ansätze zum Einfügen von Inhalten:

- {{WebExtAPIRef("scripting.executeScript()")}}, {{WebExtAPIRef("scripting.insertCSS()")}}, und {{WebExtAPIRef("scripting.removeCSS()")}}, die Einmal-Injektionen ermöglichen.
- {{WebExtAPIRef("scripting.registerContentScripts()")}}, die Contentskripte dynamisch registriert. Diese können dann mit {{WebExtAPIRef("scripting.getRegisteredContentScripts()")}} abgerufen und mit {{WebExtAPIRef("scripting.unregisterContentScripts()")}} wieder abgemeldet werden.

> [!NOTE]
> Chrome beschränkt diese API auf Manifest V3. Firefox und Safari unterstützen diese API in Manifest V2 und V3.

Diese API erfordert die `"scripting"`[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) und [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für das Ziel im Tab, in das JavaScript oder CSS eingefügt wird.

Alternativ können Sie die Berechtigung vorübergehend im aktiven Tab erhalten, und zwar nur als Antwort auf eine ausdrückliche Benutzeraktion, indem Sie um die [`"activeTab"` Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) bitten. Die `"scripting"`-Berechtigung ist jedoch weiterhin erforderlich.

## Typen

- {{WebExtAPIRef("scripting.ContentScriptFilter")}}
  - : Spezifiziert die IDs von Skripten, die mit {{WebExtAPIRef("scripting.getRegisteredContentScripts()")}} abgerufen oder mit {{WebExtAPIRef("scripting.unregisterContentScripts()")}} abgemeldet werden sollen.
- {{WebExtAPIRef("scripting.ExecutionWorld")}}
  - : Gibt die Ausführungsumgebung eines Skripts an, das mit {{WebExtAPIRef("scripting.executeScript()")}} injiziert oder mit {{WebExtAPIRef("scripting.registerContentScripts()")}} registriert wird.
- {{WebExtAPIRef("scripting.InjectionTarget")}}
  - : Details eines Injektionsziels.
- {{WebExtAPIRef("scripting.RegisteredContentScript")}}
  - : Details eines zu registrierenden oder bereits registrierten Contentskripts.

## Funktionen

- {{WebExtAPIRef("scripting.executeScript()")}}
  - : Injektiert JavaScript-Code in eine Seite.
- {{WebExtAPIRef("scripting.getRegisteredContentScripts()")}}
  - : Ruft eine Liste der registrierten Contentskripte ab.
- {{WebExtAPIRef("scripting.insertCSS()")}}
  - : Injektiert CSS in eine Seite.
- {{WebExtAPIRef("scripting.registerContentScripts()")}}
  - : Registriert ein Contentskript für zukünftige Seitenladungen.
- {{WebExtAPIRef("scripting.removeCSS()")}}
  - : Entfernt CSS, das zuvor durch einen Aufruf von {{WebExtAPIRef("scripting.insertCSS()")}} in eine Seite injiziert wurde.
- {{WebExtAPIRef("scripting.updateContentScripts()")}}
  - : Aktualisiert ein oder mehrere bereits registrierte Contentskripte.
- {{WebExtAPIRef("scripting.unregisterContentScripts()")}}
  - : Meldet ein oder mehrere Contentskripte ab.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting) API.
