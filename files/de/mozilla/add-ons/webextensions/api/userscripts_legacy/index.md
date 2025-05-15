---
title: userScripts (Legacy)
slug: Mozilla/Add-ons/WebExtensions/API/userScripts_legacy
l10n:
  sourceCommit: d9e11f88996e97a259d2ec47f47a660062c12c4f
---

{{AddonSidebar}}

> [!WARNING]
> Dies ist die Dokumentation für die veraltete `userScripts`-API. Sie ist in Firefox für Manifest V2 verfügbar. Für die Funktionalität mit Benutzer-Skripten in Manifest V3 siehe die neue {{WebExtAPIRef("userScripts")}} API.

Verwenden Sie diese API, um Benutzer-Skripte zu registrieren, d.h. Drittanbieter-Skripte, die Webseiten manipulieren oder neue Funktionen bereitstellen sollen. Das Registrieren eines Benutzer-Skripts weist den Browser an, das Skript auf Seiten anzuhängen, die mit den bei der Registrierung angegebenen URL-Mustern übereinstimmen.

Diese API bietet ähnliche Funktionen wie {{WebExtAPIRef("contentScripts")}}, jedoch mit Funktionen, die für den Umgang mit Drittanbieter-Skripten geeignet sind:

- Die Ausführung erfolgt in einer isolierten Sandbox: Jedes Benutzer-Skript wird in einer isolierten Sandbox innerhalb der Webinhalt-Prozesse ausgeführt, was eine unbeabsichtigte oder absichtliche Beeinträchtigung zwischen den Skripten verhindert.
- Zugriff auf die globalen Werte `window` und `document`, die mit der Webseite in Zusammenhang stehen, an die das Benutzer-Skript angehängt ist.
- Kein Zugriff auf WebExtension-APIs oder zugehörige Berechtigungen, die der Erweiterung gewährt wurden: Das API-Skript, das die Berechtigungen der Erweiterung erbt, kann registrierten Benutzer-Skripten verpackte WebExtension-APIs bereitstellen. Ein API-Skript wird im Manifest der Erweiterung mithilfe des Schlüssels "user_scripts" deklariert.

> [!WARNING]
> Diese API erfordert das Vorhandensein des Schlüssels [`user_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts) in der manifest.json, auch wenn kein API-Skript angegeben ist. Zum Beispiel: `user_scripts: {}`.

Um die API zu verwenden, rufen Sie {{WebExtAPIRef("userScripts_legacy.register","register()")}} auf und übergeben ein Objekt, das die zu registrierenden Skripte definiert. Die Methode gibt ein Promise zurück, das mit einem {{WebExtAPIRef("userScripts_legacy.RegisteredUserScript","RegisteredUserScript")}}-Objekt aufgelöst wird.

> [!NOTE]
> Benutzer-Skripte werden abgemeldet, wenn die zugehörige Erweiterungsseite (von der die Benutzer-Skripte registriert wurden) entladen wird. Daher sollten Sie ein Benutzer-Skript von einer Erweiterungsseite registrieren, die mindestens so lange bestehen bleibt, wie Sie möchten, dass die Benutzer-Skripte registriert bleiben.

## Typen

- {{WebExtAPIRef("userScripts_legacy.RegisteredUserScript", "userScripts.RegisteredUserScript")}}
  - : Das `object`, das von der {{WebExtAPIRef("userScripts_legacy.register","register()")}}-Methode zurückgegeben wird. Es repräsentiert die registrierten Benutzer-Skripte und wird verwendet, um die Benutzer-Skripte abzumelden.
- {{WebExtAPIRef("userScripts_legacy.UserScriptOptions", "userScripts.UserScriptOptions")}}
  - : Das `object`, das an die {{WebExtAPIRef("userScripts_legacy.register","register()")}}-Methode übergeben wird. Es repräsentiert die zu registrierenden Inhalt-Skripte.

## Methoden

- {{WebExtAPIRef("userScripts_legacy.register", "userScripts.register()")}}
  - : Registriert Benutzer-Skripte.

## Ereignisse

- {{WebExtAPIRef("userScripts_legacy.onBeforeScript", "userScripts.onBeforeScript")}}
  - : Ein Ereignis, das dem API-Skript zur Verfügung steht, registriert in [`"user_scripts"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts), das ausgeführt wird, bevor ein Benutzer-Skript ausgeführt wird. Verwenden Sie es, um den Export der zusätzlichen APIs des API-Skripts auszulösen, damit sie dem Benutzer-Skript zur Verfügung stehen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Arbeiten mit `userScripts` (Legacy)](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts_legacy/Working_with_userScripts)
- {{WebExtAPIRef("contentScripts","browser.contentScripts")}}
