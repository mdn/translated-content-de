---
title: scripting
slug: Mozilla/Add-ons/WebExtensions/API/scripting
l10n:
  sourceCommit: c61fd478259d34aa4fd6ac4cbf9b7d64a78aff43
---

Fügt JavaScript und CSS in Websites ein. Diese API bietet zwei Möglichkeiten, Inhalte einzufügen:

- {{WebExtAPIRef("scripting.executeScript()")}}, {{WebExtAPIRef("scripting.insertCSS()")}} und {{WebExtAPIRef("scripting.removeCSS()")}} für einmalige Einfügungen.
- {{WebExtAPIRef("scripting.registerContentScripts()")}} zum dynamischen Registrieren von Content-Skripten, die anschließend mit {{WebExtAPIRef("scripting.getRegisteredContentScripts()")}} abgerufen und mit {{WebExtAPIRef("scripting.unregisterContentScripts()")}} deregistriert werden können.

> [!NOTE]
> Chrome beschränkt diese API auf Manifest V3. Firefox und Safari unterstützen diese API in Manifest V2 und V3.

Diese API erfordert die [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) `"scripting"` und eine [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die Zielseite in dem Tab, in den JavaScript oder CSS eingefügt wird.

Alternativ können Sie die Berechtigung für den aktiven Tab vorübergehend und nur als Reaktion auf eine ausdrückliche Benutzeraktion erhalten, indem Sie die [Berechtigung `"activeTab"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission) anfordern. Die Berechtigung `"scripting"` ist jedoch weiterhin erforderlich.

## Typen

- {{WebExtAPIRef("scripting.ContentScriptFilter")}}
  - : Gibt die IDs der Skripte an, die mit {{WebExtAPIRef("scripting.getRegisteredContentScripts()")}} abgerufen oder mit {{WebExtAPIRef("scripting.unregisterContentScripts()")}} deregistriert werden sollen.
- {{WebExtAPIRef("scripting.ExecutionWorld")}}
  - : Gibt die Ausführungsumgebung eines Skripts an, das mit {{WebExtAPIRef("scripting.executeScript()")}} eingefügt oder mit {{WebExtAPIRef("scripting.registerContentScripts()")}} registriert wird.
- {{WebExtAPIRef("scripting.InjectionTarget")}}
  - : Einzelheiten zu einem Ziel für die Einfügung.
- {{WebExtAPIRef("scripting.RegisteredContentScript")}}
  - : Einzelheiten zu einem Content-Skript, das registriert werden soll oder bereits registriert ist.

## Funktionen

- {{WebExtAPIRef("scripting.executeScript()")}}
  - : Fügt JavaScript-Code in eine Seite ein.
- {{WebExtAPIRef("scripting.getRegisteredContentScripts()")}}
  - : Ruft eine Liste registrierter Content-Skripte ab.
- {{WebExtAPIRef("scripting.insertCSS()")}}
  - : Fügt CSS in eine Seite ein.
- {{WebExtAPIRef("scripting.registerContentScripts()")}}
  - : Registriert ein Content-Skript für künftig geladene Seiten.
- {{WebExtAPIRef("scripting.removeCSS()")}}
  - : Entfernt CSS, das zuvor durch einen Aufruf von {{WebExtAPIRef("scripting.insertCSS()")}} in eine Seite eingefügt wurde.
- {{WebExtAPIRef("scripting.updateContentScripts()")}}
  - : Aktualisiert ein oder mehrere bereits registrierte Content-Skripte.
- {{WebExtAPIRef("scripting.unregisterContentScripts()")}}
  - : Deregistriert ein oder mehrere Content-Skripte.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der API [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting) von Chromium.
