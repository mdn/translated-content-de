---
title: userScripts
slug: Mozilla/Add-ons/WebExtensions/API/userScripts
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

Verwenden Sie diese API, um Benutzer-Skripte zu registrieren, Drittanbieter-Skripte, die darauf ausgelegt sind, Webseiten zu manipulieren oder neue Funktionen bereitzustellen. Die Registrierung eines Benutzer-Skripts weist den Browser an, das Skript an Seiten anzuhängen, die den während der Registrierung angegebenen URL-Mustern entsprechen.

> [!NOTE]
> Dies ist die Dokumentation für die Legacy-API-Version, verfügbar in Firefox für Manifest V2. Eine neue API wurde entwickelt, siehe [WECG Problem 279](https://github.com/w3c/webextensions/issues/279). Diese neue Version der API wird in Firefox für die Nutzung in Manifest V3 verfügbar sein. Die Entwicklung wird in [Firefox Fehler 1875475](https://bugzil.la/1875475) verfolgt. Chrome enthält [eine Implementierung der neuen API](https://developer.chrome.com/docs/extensions/reference/api/userScripts). Währenddessen verwenden Sie bei der Nutzung von Manifest V3 oder höher {{WebExtAPIRef("scripting.registerContentScripts()")}}, um Skripte zu registrieren.

Diese API bietet ähnliche Fähigkeiten wie {{WebExtAPIRef("contentScripts")}}, aber mit Eigenschaften, die für die Handhabung von Drittanbieter-Skripten geeignet sind:

- Die Ausführung erfolgt in einer isolierten Sandbox: Jedes Benutzer-Skript wird in einer isolierten Sandbox innerhalb der Web-Content-Prozesse ausgeführt, um unbeabsichtigte oder absichtliche Interferenzen zwischen Skripten zu verhindern.
- Zugriff auf die globalen Werte `window` und `document`, die mit der Webseite verbunden sind, an die das Benutzer-Skript angehängt ist.
- Kein Zugriff auf WebExtension-APIs oder zugehörige Berechtigungen, die der Erweiterung gewährt wurden: Das API-Skript, das die Berechtigungen der Erweiterung erbt, kann registrierten Benutzer-Skripten verpackte WebExtension-APIs bereitstellen. Ein API-Skript wird in der Manifestdatei der Erweiterung mit dem Manifest-Schlüssel "user_scripts" deklariert.

> [!WARNING]
> Diese API erfordert das Vorhandensein des [`user_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts)-Schlüssels in der manifest.json, auch wenn kein API-Skript angegeben ist. Zum Beispiel. `user_scripts: {}`.

Um die API zu verwenden, rufen Sie `{{WebExtAPIRef("userScripts.register","register()")}}` auf und übergeben ein Objekt, das die zu registrierenden Skripte definiert. Die Methode gibt ein Promise zurück, das mit einem `{{WebExtAPIRef("userScripts.RegisteredUserScript","RegisteredUserScript")}}`-Objekt aufgelöst wird.

> [!NOTE]
> Benutzer-Skripte werden abgemeldet, wenn die zugehörige Erweiterungsseite (von der die Benutzer-Skripte registriert wurden) entladen wird, daher sollten Sie ein Benutzer-Skript von einer Erweiterungsseite aus registrieren, die mindestens so lange besteht, wie Sie die Benutzer-Skripte registriert halten möchten.

## Typen

- {{WebExtAPIRef("userScripts.RegisteredUserScript")}}
  - : Das `object`, das von der {{WebExtAPIRef("userScripts.register","register()")}}-Methode zurückgegeben wird. Es repräsentiert die registrierten Benutzer-Skripte und wird verwendet, um die Benutzer-Skripte abzumelden.

## Methoden

- {{WebExtAPIRef("userScripts.register()")}}
  - : Registriert Benutzer-Skripte.

## Ereignisse

- {{WebExtAPIRef("userScripts.onBeforeScript")}}
  - : Ein Ereignis, das dem API-Skript zur Verfügung steht, registriert in [`"user_scripts"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts), das ausgeführt wird, bevor ein Benutzer-Skript ausgeführt wird. Verwenden Sie es, um den Export zusätzlicher APIs, die vom API-Skript bereitgestellt werden, auszulösen, sodass sie dem Benutzer-Skript zur Verfügung stehen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Arbeiten mit `userScripts`](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts/Working_with_userScripts)
- {{WebExtAPIRef("contentScripts","browser.contentScripts")}}
