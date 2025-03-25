---
title: userScripts (Legacy)
slug: Mozilla/Add-ons/WebExtensions/API/userScripts_legacy
l10n:
  sourceCommit: 5ebacde5e3e3500a851a2c49c7d02a7a5c6604ce
---

{{AddonSidebar}}

> [!WARNING]
> Dies ist die Dokumentation für die veraltete `userScripts` API. Sie ist in Firefox für Manifest V2 verfügbar. Für Funktionalität mit User-Skripten in Manifest V3 siehe die neue {{WebExtAPIRef("userScripts")}} API.

Verwenden Sie diese API, um Benutzer-Skripte zu registrieren. Dies sind Drittanbieter-Skripte, die dazu entwickelt wurden, Webseiten zu manipulieren oder neue Funktionen bereitzustellen. Durch die Registrierung eines Benutzer-Skripts wird der Browser angewiesen, das Skript auf Seiten anzuwenden, die den während der Registrierung angegebenen URL-Mustern entsprechen.

Diese API bietet ähnliche Funktionen wie {{WebExtAPIRef("contentScripts")}}, jedoch mit Merkmalen, die für die Handhabung von Drittanbieter-Skripten geeignet sind:

- Ausführung in einer isolierten Sandbox: Jedes Benutzer-Skript wird in einer isolierten Sandbox innerhalb der Webinhaltprozesse ausgeführt, um versehentliche oder absichtliche Beeinträchtigungen zwischen Skripten zu verhindern.
- Zugriff auf die globalen Werte `window` und `document`, die sich auf die Webseite beziehen, an die das Benutzer-Skript angehängt ist.
- Kein Zugriff auf WebExtension-APIs oder zugehörige Berechtigungen, die der Erweiterung gewährt wurden: Das API-Skript, das die Berechtigungen der Erweiterung erbt, kann registrierten Benutzer-Skripten verpackte WebExtension-APIs bereitstellen. Ein API-Skript wird mit dem Manifest-Schlüssel "user_scripts" in der Manifest-Datei der Erweiterung deklariert.

> [!WARNING]
> Diese API erfordert das Vorhandensein des [`user_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts) Schlüssels in der manifest.json, auch wenn kein API-Skript angegeben ist. Beispiel: `user_scripts: {}`.

Um die API zu verwenden, rufen Sie {{WebExtAPIRef("userScripts_legacy.register","register()")}} auf und übergeben Sie ein Objekt, das die zu registrierenden Skripte definiert. Die Methode gibt ein Promise zurück, das mit einem {{WebExtAPIRef("userScripts_legacy.RegisteredUserScript","RegisteredUserScript")}} Objekt aufgelöst wird.

> [!NOTE]
> Benutzer-Skripte werden abgemeldet, wenn die zugehörige Erweiterungsseite (von der die Benutzer-Skripte registriert wurden) entladen wird. Sie sollten daher ein Benutzer-Skript von einer Erweiterungsseite registrieren, die mindestens so lange bestehen bleibt, wie die Benutzer-Skripte registriert bleiben sollen.

## Typen

- {{WebExtAPIRef("userScripts_legacy.RegisteredUserScript", "userScripts.RegisteredUserScript")}}
  - : Das `object`, das von der {{WebExtAPIRef("userScripts_legacy.register","register()")}} Methode zurückgegeben wird. Es repräsentiert die registrierten Benutzer-Skripte und wird verwendet, um die Benutzer-Skripte abzumelden.

## Methoden

- {{WebExtAPIRef("userScripts_legacy.register", "userScripts.register()")}}
  - : Registriert Benutzer-Skripte.

## Ereignisse

- {{WebExtAPIRef("userScripts_legacy.onBeforeScript", "userScripts.onBeforeScript")}}
  - : Ein Ereignis, das dem API-Skript zur Verfügung steht, registriert in [`"user_scripts"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts), das vor der Ausführung eines Benutzer-Skripts ausgeführt wird. Verwenden Sie es, um den Export der zusätzlichen APIs auszulösen, die vom API-Skript bereitgestellt werden, sodass sie für das Benutzer-Skript verfügbar sind.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Arbeiten mit `userScripts` (Legacy)](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts_legacy/Working_with_userScripts)
- {{WebExtAPIRef("contentScripts","browser.contentScripts")}}
