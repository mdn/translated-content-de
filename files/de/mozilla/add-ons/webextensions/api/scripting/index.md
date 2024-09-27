---
title: Skriptierung
slug: Mozilla/Add-ons/WebExtensions/API/scripting
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Fügt JavaScript und CSS in Websites ein. Diese API bietet zwei Ansätze zum Einfügen von Inhalten:

- {{WebExtAPIRef("scripting.executeScript()")}}, {{WebExtAPIRef("scripting.insertCSS()")}}, und {{WebExtAPIRef("scripting.removeCSS()")}} für einmalige Injektionen.
- {{WebExtAPIRef("scripting.registerContentScripts()")}}, die Inhalts-Skripte dynamisch registriert, die dann mit {{WebExtAPIRef("scripting.getRegisteredContentScripts()")}} abgerufen und mit {{WebExtAPIRef("scripting.unregisterContentScripts()")}} wieder abgemeldet werden können).

> [!NOTE]
> Chrome beschränkt diese API auf Manifest V3. Firefox und Safari unterstützen diese API in Manifest V2 und V3.

Diese API erfordert die `"scripting"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) und [Zugriffsberechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für das Ziel im Tab, in den JavaScript oder CSS injiziert wird.

Alternativ können Sie vorübergehend die Berechtigung im aktiven Tab erhalten und nur als Reaktion auf eine explizite Benutzeraktion, indem Sie um die [`"activeTab"` Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) bitten. Die `"scripting"` Berechtigung ist jedoch weiterhin erforderlich.

## Typen

- {{WebExtAPIRef("scripting.ContentScriptFilter")}}
  - : Gibt die IDs von Skripten an, die mit {{WebExtAPIRef("scripting.getRegisteredContentScripts()")}} abgerufen oder mit {{WebExtAPIRef("scripting.unregisterContentScripts()")}} abgemeldet werden sollen.
- {{WebExtAPIRef("scripting.ExecutionWorld")}}
  - : Gibt die Ausführungsumgebung eines Skripts an, das mit {{WebExtAPIRef("scripting.executeScript()")}} injiziert oder mit {{WebExtAPIRef("scripting.registerContentScripts()")}} registriert wird.
- {{WebExtAPIRef("scripting.InjectionTarget")}}
  - : Details eines Injektionsziels.
- {{WebExtAPIRef("scripting.RegisteredContentScript")}}
  - : Details eines zu registrierenden oder bereits registrierten Inhaltsskripts.

## Funktionen

- {{WebExtAPIRef("scripting.executeScript()")}}
  - : Integriert JavaScript-Code in eine Seite.
- {{WebExtAPIRef("scripting.getRegisteredContentScripts()")}}
  - : Ruft eine Liste der registrierten Inhalts-Skripte ab.
- {{WebExtAPIRef("scripting.insertCSS()")}}
  - : Integriert CSS in eine Seite.
- {{WebExtAPIRef("scripting.registerContentScripts()")}}
  - : Registriert ein Inhalts-Skript für zukünftige Seitenladevorgänge.
- {{WebExtAPIRef("scripting.removeCSS()")}}
  - : Entfernt CSS, das zuvor durch einen Aufruf von {{WebExtAPIRef("scripting.insertCSS()")}} in eine Seite integriert wurde.
- {{WebExtAPIRef("scripting.updateContentScripts()")}}
  - : Aktualisiert ein oder mehrere bereits registrierte Inhalts-Skripte.
- {{WebExtAPIRef("scripting.unregisterContentScripts()")}}
  - : Hebt die Registrierung eines oder mehrerer Inhalts-Skripte auf.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf der [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting) API von Chromium.
