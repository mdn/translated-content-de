---
title: scripting
slug: Mozilla/Add-ons/WebExtensions/API/scripting
l10n:
  sourceCommit: 674fbb492c76a45adf433810f0f5737a0405bd9c
---

Fügt JavaScript und CSS in Websites ein. Diese API bietet zwei Möglichkeiten, Inhalte einzufügen:

- {{WebExtAPIRef("scripting.executeScript()")}}, {{WebExtAPIRef("scripting.insertCSS()")}} und {{WebExtAPIRef("scripting.removeCSS()")}} für einmalige Einfügungen.
- {{WebExtAPIRef("scripting.registerContentScripts()")}} zur dynamischen Registrierung von Content-Skripten, die anschließend mit {{WebExtAPIRef("scripting.getRegisteredContentScripts()")}} abgerufen und mit {{WebExtAPIRef("scripting.unregisterContentScripts()")}} deregistriert werden können.

> [!NOTE]
> Chrome beschränkt diese API auf Manifest V3. Firefox und Safari unterstützen diese API in Manifest V2 und V3.

Diese API erfordert die [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) `"scripting"` sowie eine [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für das Ziel im Tab, in den JavaScript oder CSS eingefügt wird.

Alternativ können Sie die Berechtigung für den aktiven Tab vorübergehend und nur als Reaktion auf eine ausdrückliche Benutzeraktion erhalten, indem Sie die [`activeTab`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/activeTab_permission) anfordern. Die Berechtigung `"scripting"` ist jedoch weiterhin erforderlich.

## Typen

- {{WebExtAPIRef("scripting.ContentScriptFilter")}}
  - : Gibt die IDs der Skripte an, die mit {{WebExtAPIRef("scripting.getRegisteredContentScripts()")}} abgerufen oder mit {{WebExtAPIRef("scripting.unregisterContentScripts()")}} deregistriert werden sollen.
- {{WebExtAPIRef("scripting.ExecutionWorld")}}
  - : Gibt die Ausführungsumgebung eines Skripts an, das mit {{WebExtAPIRef("scripting.executeScript()")}} eingefügt oder mit {{WebExtAPIRef("scripting.registerContentScripts()")}} registriert wird.
- {{WebExtAPIRef("scripting.InjectionTarget")}}
  - : Details zu einem Ziel für die Einfügung.
- {{WebExtAPIRef("scripting.RegisteredContentScript")}}
  - : Details zu einem Content-Skript, das registriert werden soll oder bereits registriert ist.

## Funktionen

- {{WebExtAPIRef("scripting.executeScript()")}}
  - : Fügt JavaScript-Code in eine Seite ein.
- {{WebExtAPIRef("scripting.getRegisteredContentScripts()")}}
  - : Ruft eine Liste registrierter Content-Skripte ab.
- {{WebExtAPIRef("scripting.insertCSS()")}}
  - : Fügt CSS in eine Seite ein.
- {{WebExtAPIRef("scripting.registerContentScripts()")}}
  - : Registriert ein Content-Skript für zukünftige Seitenaufrufe.
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
