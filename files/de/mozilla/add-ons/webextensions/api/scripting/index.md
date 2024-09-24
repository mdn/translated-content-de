---
title: Skripterstellung
slug: Mozilla/Add-ons/WebExtensions/API/scripting
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Fügt JavaScript und CSS in Websites ein. Diese API bietet zwei Ansätze zur Inhaltseinfügung:

- {{WebExtAPIRef("scripting.executeScript()")}}, {{WebExtAPIRef("scripting.insertCSS()")}}, und {{WebExtAPIRef("scripting.removeCSS()")}} für Einmaleinspritzungen.
- {{WebExtAPIRef("scripting.registerContentScripts()")}} registriert Inhaltsskripte dynamisch, die dann mit {{WebExtAPIRef("scripting.getRegisteredContentScripts()")}} abgerufen und mit {{WebExtAPIRef("scripting.unregisterContentScripts()")}} abgemeldet werden können.

> [!NOTE]
> Chrome beschränkt diese API auf Manifest V3. Firefox und Safari unterstützen diese API in Manifest V2 und V3.

Diese API erfordert die Berechtigung `"scripting"` [permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) sowie [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für das Ziel im Tab, in das JavaScript oder CSS eingefügt wird.

Alternativ können Sie die Berechtigung temporär in der aktiven Registerkarte und nur als Reaktion auf eine explizite Benutzeraktion erhalten, indem Sie die [`"activeTab"`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) anfordern. Die Berechtigung `"scripting"` ist jedoch weiterhin erforderlich.

## Typen

- {{WebExtAPIRef("scripting.ContentScriptFilter")}}
  - : Gibt die IDs von Skripten an, um sie mit {{WebExtAPIRef("scripting.getRegisteredContentScripts()")}} abzurufen oder mit {{WebExtAPIRef("scripting.unregisterContentScripts()")}} abzumelden.
- {{WebExtAPIRef("scripting.ExecutionWorld")}}
  - : Gibt die Ausführungsumgebung eines mit {{WebExtAPIRef("scripting.executeScript()")}} eingefügten oder mit {{WebExtAPIRef("scripting.registerContentScripts()")}} registrierten Skripts an.
- {{WebExtAPIRef("scripting.InjectionTarget")}}
  - : Details eines Einsatzziels.
- {{WebExtAPIRef("scripting.RegisteredContentScript")}}
  - : Details eines zu registrierenden oder registrierten Inhaltsskripts.

## Funktionen

- {{WebExtAPIRef("scripting.executeScript()")}}
  - : Injektiert JavaScript-Code in eine Seite.
- {{WebExtAPIRef("scripting.getRegisteredContentScripts()")}}
  - : Ruft eine Liste registrierter Inhaltsskripte ab.
- {{WebExtAPIRef("scripting.insertCSS()")}}
  - : Injektiert CSS in eine Seite.
- {{WebExtAPIRef("scripting.registerContentScripts()")}}
  - : Registriert ein Inhaltsskript für zukünftige Seitenladevorgänge.
- {{WebExtAPIRef("scripting.removeCSS()")}}
  - : Entfernt CSS, das zuvor mit einem {{WebExtAPIRef("scripting.insertCSS()")}}-Aufruf in eine Seite eingefügt wurde.
- {{WebExtAPIRef("scripting.updateContentScripts()")}}
  - : Aktualisiert ein oder mehrere bereits registrierte Inhaltsskripte.
- {{WebExtAPIRef("scripting.unregisterContentScripts()")}}
  - : Meldet ein oder mehrere Inhaltsskripte ab.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting) API.
