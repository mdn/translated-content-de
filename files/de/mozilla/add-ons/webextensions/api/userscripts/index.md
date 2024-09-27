---
title: userScripts
slug: Mozilla/Add-ons/WebExtensions/API/userScripts
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

Verwenden Sie diese API, um User Scripts zu registrieren, Drittanbieter-Skripte, die entwickelt wurden, um Webseiten zu manipulieren oder neue Funktionen bereitzustellen. Die Registrierung eines User Scripts weist den Browser an, das Skript an Seiten anzufügen, die den während der Registrierung angegebenen URL-Mustern entsprechen.

> [!NOTE]
> Dies ist die Dokumentation für die Legacy-API-Version, verfügbar in Firefox für Manifest V2. Eine neue API wurde entworfen, siehe [WECG issue 279](https://github.com/w3c/webextensions/issues/279). Diese neue Version der API wird in Firefox für die Verwendung in Manifest V3 verfügbar sein. Die Entwicklung wird in [Firefox bug 1875475](https://bugzil.la/1875475) verfolgt. Chrome umfasst [eine Implementierung der neuen API](https://developer.chrome.com/docs/extensions/reference/api/userScripts). In der Zwischenzeit, wenn Sie Manifest V3 oder höher verwenden, verwenden Sie {{WebExtAPIRef("scripting.registerContentScripts()")}}, um Skripte zu registrieren.

Diese API bietet ähnliche Funktionen wie {{WebExtAPIRef("contentScripts")}}, jedoch mit Funktionen, die für den Umgang mit Drittanbieter-Skripten geeignet sind:

- Ausführung in einer isolierten Sandbox: jedes User Script wird in einer isolierten Sandbox innerhalb der Webcontent-Prozesse ausgeführt, was versehentliche oder vorsätzliche Interferenzen zwischen Skripten verhindert.
- Zugriff auf die `window` und `document` globalen Werte, die sich auf die Webseite beziehen, an die das User Script angehängt ist.
- kein Zugriff auf WebExtension-APIs oder zugehörige Berechtigungen, die der Erweiterung gewährt wurden: das API-Skript, das die Berechtigungen der Erweiterung erbt, kann verpackte WebExtension-APIs für registrierte User Scripts bereitstellen. Ein API-Skript wird im Manifest der Erweiterung mit dem "user_scripts" Manifest-Schlüssel deklariert.

> [!WARNING]
> Diese API erfordert die Anwesenheit des [`user_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts) Schlüssels in der manifest.json, auch wenn kein API-Skript angegeben ist. Zum Beispiel. `user_scripts: {}`.

Um die API zu verwenden, rufen Sie `{{WebExtAPIRef("userScripts.register","register()")}}` auf, indem Sie ein Objekt übergeben, das die zu registrierenden Skripte definiert. Die Methode gibt ein Promise zurück, das mit einem `{{WebExtAPIRef("userScripts.RegisteredUserScript","RegisteredUserScript")}}` Objekt aufgelöst wird.

> [!NOTE]
> User Scripts werden abgemeldet, wenn die zugehörige Erweiterungsseite (von der die User Scripts registriert wurden) entladen wird. Daher sollten Sie ein User Script von einer Erweiterungsseite registrieren, die mindestens so lange besteht, wie Sie möchten, dass die User Scripts registriert bleiben.

## Typen

- {{WebExtAPIRef("userScripts.RegisteredUserScript")}}
  - : Das `object`, das von der Methode {{WebExtAPIRef("userScripts.register","register()")}} zurückgegeben wird. Es repräsentiert die registrierten User Scripts und wird verwendet, um die User Scripts abzumelden.

## Methoden

- {{WebExtAPIRef("userScripts.register()")}}
  - : Registriert User Scripts.

## Ereignisse

- {{WebExtAPIRef("userScripts.onBeforeScript")}}
  - : Ein für das API-Skript verfügbares Ereignis, registriert in [`"user_scripts"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts), das ausgeführt wird, bevor ein User Script ausgeführt wird. Verwenden Sie es, um den Export der zusätzlichen von dem API-Skript bereitgestellten APIs auszulösen, damit sie für das User Script verfügbar sind.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Arbeiten mit `userScripts`](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts/Working_with_userScripts)
- {{WebExtAPIRef("contentScripts","browser.contentScripts")}}
