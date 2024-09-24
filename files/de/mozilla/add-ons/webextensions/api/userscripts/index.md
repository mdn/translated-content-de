---
title: BenutzerSkripte
slug: Mozilla/Add-ons/WebExtensions/API/userScripts
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

Verwenden Sie diese API, um Benutzerskripte zu registrieren, das sind Drittanbieter-Skripte, die dazu entwickelt wurden, Webseiten zu manipulieren oder neue Funktionen bereitzustellen. Die Registrierung eines Benutzerskripts weist den Browser an, das Skript an Seiten anzuhängen, die mit den bei der Registrierung angegebenen URL-Mustern übereinstimmen.

> [!NOTE]
> Dies ist die Dokumentation für die Legacy-API-Version, verfügbar in Firefox für Manifest V2. Eine neue API wurde entworfen, siehe [WECG issue 279](https://github.com/w3c/webextensions/issues/279). Diese neue Version der API wird in Firefox für die Verwendung in Manifest V3 verfügbar sein. Die Entwicklung wird in [Firefox Bug 1875475](https://bugzil.la/1875475) verfolgt. Chrome beinhaltet [eine Implementierung der neuen API](https://developer.chrome.com/docs/extensions/reference/api/userScripts). Währenddessen, wenn Sie Manifest V3 oder höher nutzen, verwenden Sie {{WebExtAPIRef("scripting.registerContentScripts()")}}, um Skripte zu registrieren.

Diese API bietet ähnliche Funktionen wie {{WebExtAPIRef("contentScripts")}}, jedoch mit Features, die für den Umgang mit Drittanbieter-Skripten geeignet sind:

- die Ausführung in einer isolierten Sandbox: jedes Benutzerskript wird in einer isolierten Sandbox innerhalb der Webinhaltsprozesse ausgeführt, um versehentliche oder absichtliche Interferenzen zwischen Skripten zu verhindern.
- Zugriff auf die globalen Werte `window` und `document`, die mit der Webseite verbunden sind, an die das Benutzerskript angehängt ist.
- kein Zugriff auf WebExtension-APIs oder damit verbundene Berechtigungen, die der Erweiterung zugeordnet sind: Das API-Skript, das die Berechtigungen der Erweiterung erbt, kann registrierten Benutzerskripten verpackte WebExtension-APIs zur Verfügung stellen. Ein API-Skript wird im Manifest der Erweiterung mittels des Schlüssels "user_scripts" deklariert.

> [!WARNING]
> Diese API erfordert das Vorhandensein des [`user_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts)-Schlüssels in der manifest.json, auch wenn kein API-Skript angegeben ist. Zum Beispiel `user_scripts: {}`.

Um die API zu verwenden, rufen Sie `{{WebExtAPIRef("userScripts.register","register()")}}` auf und übergeben ein Objekt, das die zu registrierenden Skripte definiert. Die Methode gibt ein Promise zurück, das mit einem `{{WebExtAPIRef("userScripts.RegisteredUserScript","RegisteredUserScript")}}`-Objekt aufgelöst wird.

> [!NOTE]
> Benutzerskripte werden abgemeldet, wenn die zugehörige Erweiterungsseite (von der die Benutzerskripte registriert wurden) entladen wird. Sie sollten daher ein Benutzerskript von einer Erweiterungsseite aus registrieren, die mindestens so lange besteht, wie Sie die Benutzerskripte registriert haben möchten.

## Typen

- {{WebExtAPIRef("userScripts.RegisteredUserScript")}}
  - : Das `object`, das von der Methode {{WebExtAPIRef("userScripts.register","register()")}} zurückgegeben wird. Es repräsentiert die registrierten Benutzerskripte und wird verwendet, um die Benutzerskripte abzumelden.

## Methoden

- {{WebExtAPIRef("userScripts.register()")}}
  - : Registriert Benutzerskripte.

## Ereignisse

- {{WebExtAPIRef("userScripts.onBeforeScript")}}
  - : Ein Ereignis, das für das API-Skript verfügbar ist, registriert in [`"user_scripts"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts), das vor der Ausführung eines Benutzerskripts ausgeführt wird. Verwenden Sie es, um den Export der zusätzlichen APIs zu triggern, die vom API-Skript bereitgestellt werden, damit sie dem Benutzerskript zur Verfügung stehen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Arbeiten mit `Benutzerskripten`](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts/Working_with_userScripts)
- {{WebExtAPIRef("contentScripts","browser.contentScripts")}}
