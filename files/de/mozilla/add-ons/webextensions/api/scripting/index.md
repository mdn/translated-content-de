---
title: scripting
slug: Mozilla/Add-ons/WebExtensions/API/scripting
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Fügt JavaScript und CSS in Websites ein. Diese API bietet zwei Ansätze zum Einfügen von Inhalten:

- {{WebExtAPIRef("scripting.executeScript()")}}, {{WebExtAPIRef("scripting.insertCSS()")}} und {{WebExtAPIRef("scripting.removeCSS()")}} erlauben einmalige Injektionen.
- {{WebExtAPIRef("scripting.registerContentScripts()")}} registriert dynamisch Inhalts-Skripte, die dann mit {{WebExtAPIRef("scripting.getRegisteredContentScripts()")}} abgerufen und mit {{WebExtAPIRef("scripting.unregisterContentScripts()")}} abgemeldet werden können.

> [!NOTE]
> Chrome beschränkt diese API auf Manifest V3. Firefox und Safari unterstützen diese API in Manifest V2 und V3.

Diese API erfordert die Berechtigung `"scripting"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) und [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für das Ziel im Tab, in den JavaScript oder CSS eingefügt wird.

Alternativ können Sie temporär Berechtigungen im aktiven Tab erhalten, und zwar nur als Reaktion auf eine ausdrückliche Benutzeraktion, indem Sie die [`"activeTab"`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) anfordern. Die `"scripting"`-Berechtigung ist jedoch weiterhin erforderlich.

## Typen

- {{WebExtAPIRef("scripting.ContentScriptFilter")}}
  - : Gibt die IDs von Skripten an, die mit {{WebExtAPIRef("scripting.getRegisteredContentScripts()")}} abgerufen oder mit {{WebExtAPIRef("scripting.unregisterContentScripts()")}} abgemeldet werden sollen.
- {{WebExtAPIRef("scripting.ExecutionWorld")}}
  - : Gibt die Ausführungsumgebung eines mit {{WebExtAPIRef("scripting.executeScript()")}} eingespritzten oder mit {{WebExtAPIRef("scripting.registerContentScripts()")}} registrierten Skripts an.
- {{WebExtAPIRef("scripting.InjectionTarget")}}
  - : Details eines Injektionsziels.
- {{WebExtAPIRef("scripting.RegisteredContentScript")}}
  - : Details eines zu registrierenden oder registrierten Inhalts-Skripts.

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
  - : Entfernt CSS, das zuvor durch einen {{WebExtAPIRef("scripting.insertCSS()")}}-Aufruf in eine Seite injiziert wurde.
- {{WebExtAPIRef("scripting.updateContentScripts()")}}
  - : Aktualisiert ein oder mehrere bereits registrierte Inhalts-Skripte.
- {{WebExtAPIRef("scripting.unregisterContentScripts()")}}
  - : Hebt die Registrierung eines oder mehrerer Inhalts-Skripte auf.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting)-API.
