---
title: userScripts (Legacy)
slug: Mozilla/Add-ons/WebExtensions/API/userScripts_legacy
l10n:
  sourceCommit: 6b26a56826b43f539b79033378683bb3be5bbba9
---

{{AddonSidebar}}

> [!WARNING]
> Dies ist die Dokumentation für die Legacy-API `userScripts`. Sie ist in Firefox für Manifest V2 verfügbar. Für die Nutzung von Benutzer-Skripten mit Manifest V3 siehe die neue {{WebExtAPIRef("userScripts")}} API.

Verwenden Sie diese API, um Benutzer-Skripte zu registrieren, also Drittanbieter-Skripte, die Webseiten manipulieren oder neue Funktionen bereitstellen. Das Registrieren eines Benutzer-Skripts weist den Browser an, das Skript an Seiten anzuhängen, die den während der Registrierung angegebenen URL-Mustern entsprechen.

Diese API bietet ähnliche Möglichkeiten wie {{WebExtAPIRef("contentScripts")}}, umfasst jedoch Funktionen, die speziell für den Umgang mit Drittanbieter-Skripten geeignet sind:

- Die Ausführung erfolgt in einer isolierten Sandbox: Jedes Benutzer-Skript wird in einer isolierten Sandbox innerhalb der Web-Content-Prozesse ausgeführt, um eine unbeabsichtigte oder absichtliche Beeinflussung anderer Skripte zu verhindern.
- Zugriff auf die globalen Werte `window` und `document`, die sich auf die Webseite beziehen, an die das Benutzer-Skript angehängt ist.
- Kein Zugriff auf WebExtension-APIs oder zugehörige Berechtigungen, die der Erweiterung erteilt wurden: Das API-Skript, das die Berechtigungen der Erweiterung erbt, kann gepackte WebExtension-APIs für registrierte Benutzer-Skripte bereitstellen. Ein API-Skript wird im Manifest der Erweiterung mithilfe des Schlüssels "user_scripts" deklariert.

> [!WARNING]
> Diese API erfordert die Präsenz des Schlüssels [`user_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts) in der manifest.json, selbst wenn kein API-Skript angegeben ist. Beispiel: `user_scripts: {}`.

Um die API zu verwenden, rufen Sie `{{WebExtAPIRef("userScripts_legacy.register","register()")}}` auf und übergeben ein Objekt, das die zu registrierenden Skripte definiert. Die Methode gibt ein Promise zurück, das mit einem `{{WebExtAPIRef("userScripts_legacy.RegisteredUserScript","RegisteredUserScript")}}`-Objekt aufgelöst wird.

> [!NOTE]
> Benutzer-Skripte werden abgemeldet, wenn die zugehörige Erweiterungsseite (von der aus die Benutzer-Skripte registriert wurden) entladen wird. Daher sollten Sie ein Benutzer-Skript von einer Erweiterungsseite aus registrieren, die mindestens so lange bestehen bleibt, wie Sie möchten, dass das Benutzer-Skript registriert bleibt.

## Typen

- {{WebExtAPIRef("userScripts_legacy.RegisteredUserScript", "userScripts.RegisteredUserScript")}}
  - : Das `object`, das von der Methode {{WebExtAPIRef("userScripts_legacy.register","register()")}} zurückgegeben wird. Es repräsentiert die registrierten Benutzer-Skripte und wird verwendet, um die Benutzer-Skripte abzumelden.

## Methoden

- {{WebExtAPIRef("userScripts_legacy.register", "userScripts.register()")}}
  - : Registriert Benutzer-Skripte.

## Ereignisse

- {{WebExtAPIRef("userScripts_legacy.onBeforeScript", "userScripts.onBeforeScript")}}
  - : Ein Ereignis, das für das API-Skript verfügbar ist, registriert in [`"user_scripts"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts), das ausgeführt wird, bevor ein Benutzer-Skript ausgeführt wird. Verwenden Sie es, um den Export zusätzlicher APIs des API-Skripts zu initiieren, sodass diese dem Benutzer-Skript zur Verfügung stehen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Arbeiten mit `userScripts` (Legacy)](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts_legacy/Working_with_userScripts)
- {{WebExtAPIRef("contentScripts","browser.contentScripts")}}
