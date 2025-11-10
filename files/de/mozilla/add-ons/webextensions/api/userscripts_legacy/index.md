---
title: userScripts (Legacy)
slug: Mozilla/Add-ons/WebExtensions/API/userScripts_legacy
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

> [!WARNING]
> Dies ist die Dokumentation für die veraltete `userScripts`-API. Sie ist in Firefox für Manifest V2 verfügbar. Für die Funktionalität mit Benutzerskripten in Manifest V3 siehe die neue {{WebExtAPIRef("userScripts")}} API.

Verwenden Sie diese API, um Benutzerskripte zu registrieren, bei denen es sich um Drittskripte handelt, die Webseiten manipulieren oder neue Funktionen bereitstellen sollen. Die Registrierung eines Benutzerskripts weist den Browser an, das Skript an Seiten anzuhängen, die den bei der Registrierung angegebenen URL-Mustern entsprechen.

Diese API bietet ähnliche Fähigkeiten wie {{WebExtAPIRef("contentScripts")}}, jedoch mit Funktionen, die besser zum Handling von Drittskripten geeignet sind:

- Die Ausführung erfolgt in einer isolierten Sandbox: Jedes Benutzerskript wird in einer isolierten Sandbox innerhalb der Webinhaltsprozesse ausgeführt, um zufällige oder absichtliche Beeinflussungen zwischen Skripten zu verhindern.
- Zugriff auf die globalen Werte `window` und `document`, die der Webseite zugeordnet sind, an die das Benutzerskript angehängt ist.
- Kein Zugriff auf WebExtension APIs oder zugehörige Berechtigungen, die der Erweiterung erteilt wurden: Das API-Skript, das die Berechtigungen der Erweiterung erbt, kann registrierten Benutzerskripten verpackte WebExtension APIs bereitstellen. Ein API-Skript wird im Manifest der Erweiterung mithilfe des Schlüssels "user_scripts" deklariert.

> [!WARNING]
> Diese API erfordert das Vorhandensein des Schlüssels [`user_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts) in der manifest.json, auch wenn kein API-Skript angegeben ist. Beispiel: `user_scripts: {}`.

Um die API zu nutzen, rufen Sie {{WebExtAPIRef("userScripts_legacy.register","register()")}} auf und übergeben ein Objekt, das die zu registrierenden Skripte definiert. Die Methode gibt ein Promise zurück, das mit einem {{WebExtAPIRef("userScripts_legacy.RegisteredUserScript","RegisteredUserScript")}}-Objekt aufgelöst wird.

> [!NOTE]
> Benutzerskripte werden abgemeldet, wenn die zugehörige Erweiterungsseite (von der die Benutzerskripte registriert wurden) entladen wird. Daher sollten Sie ein Benutzerskript von einer Erweiterungsseite registrieren, die mindestens so lange besteht, wie Sie die Benutzerskripte angemeldet halten möchten.

## Typen

- {{WebExtAPIRef("userScripts_legacy.RegisteredUserScript", "userScripts.RegisteredUserScript")}}
  - : Das `object`, das von der Methode {{WebExtAPIRef("userScripts_legacy.register","register()")}} zurückgegeben wird. Es repräsentiert die registrierten Benutzerskripte und wird verwendet, um die Benutzerskripte abzumelden.
- {{WebExtAPIRef("userScripts_legacy.UserScriptOptions", "userScripts.UserScriptOptions")}}
  - : Das `object`, das an die Methode {{WebExtAPIRef("userScripts_legacy.register","register()")}} übergeben wird. Es repräsentiert die zu registrierenden Inhalts-Skripte.

## Methoden

- {{WebExtAPIRef("userScripts_legacy.register", "userScripts.register()")}}
  - : Registriert Benutzerskripte.

## Events

- {{WebExtAPIRef("userScripts_legacy.onBeforeScript", "userScripts.onBeforeScript")}}
  - : Ein Event, das dem API-Skript zur Verfügung steht, das in [`"user_scripts"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts) registriert ist und vor der Ausführung eines Benutzerskripts ausgeführt wird. Verwenden Sie es, um den Export der zusätzlichen von dem API-Skript bereitgestellten APIs auszulösen, sodass diese dem Benutzerskript zur Verfügung stehen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Arbeiten mit `userScripts` (Legacy)](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts_legacy/Working_with_userScripts)
- {{WebExtAPIRef("contentScripts","browser.contentScripts")}}
