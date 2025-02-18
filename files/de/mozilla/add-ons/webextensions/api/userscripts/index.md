---
title: userScripts
slug: Mozilla/Add-ons/WebExtensions/API/userScripts
l10n:
  sourceCommit: 6b26a56826b43f539b79033378683bb3be5bbba9
---

{{AddonSidebar}}

Verwenden Sie diese API, um Benutzer-Skripte zu registrieren, also Drittanbieter-Skripte, die Webseiten manipulieren oder neue Funktionen bereitstellen. Das Registrieren eines Benutzer-Skripts weist den Browser an, das Skript zu Seiten hinzuzufügen, die den während der Registrierung angegebenen URL-Mustern entsprechen.

> [!NOTE]
> Dies ist die Dokumentation für die Legacy-API-Version, die in Firefox für Manifest V2 verfügbar ist. Eine neue API wurde entworfen, siehe [WECG issue 279](https://github.com/w3c/webextensions/issues/279). Diese neue Version der API wird in Firefox für die Verwendung in Manifest V3 verfügbar sein. Die Entwicklung wird in [Firefox bug 1875475](https://bugzil.la/1875475) verfolgt. Chrome beinhaltet [eine Implementierung der neuen API](https://developer.chrome.com/docs/extensions/reference/api/userScripts). In der Zwischenzeit sollten Sie bei der Verwendung von Manifest V3 oder höher {{WebExtAPIRef("scripting.registerContentScripts()")}} verwenden, um Skripte zu registrieren.

Diese API bietet ähnliche Funktionen wie {{WebExtAPIRef("contentScripts")}}, aber mit Merkmalen, die auf den Umgang mit Drittanbieter-Skripten zugeschnitten sind:

- Ausführung in einer isolierten Sandbox: Jedes Benutzer-Skript wird in einer isolierten Sandbox innerhalb des Webinhaltsprozesses ausgeführt, um unbeabsichtigte oder absichtliche Interferenzen zwischen Skripten zu verhindern.
- Zugriff auf die globalen Werte `window` und `document`, die mit der Webseite verbunden sind, an die das Benutzer-Skript angehängt ist.
- Kein Zugriff auf WebExtension-APIs oder zugehörige Berechtigungen, die der Erweiterung gewährt wurden: Das API-Skript, welches die Berechtigungen der Erweiterung erbt, kann gepackte WebExtension-APIs für registrierte Benutzer-Skripte bereitstellen. Ein API-Skript wird in der Manifestdatei der Erweiterung mit dem Schlüssel "user_scripts" deklariert.

> [!WARNING]
> Diese API erfordert das Vorhandensein des Schlüssels [`user_scripts`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts) in der manifest.json, auch wenn kein API-Skript angegeben ist. Zum Beispiel: `user_scripts: {}`.

Um die API zu verwenden, rufen Sie `{{WebExtAPIRef("userScripts.register","register()")}}` auf und übergeben ein Objekt, das die zu registrierenden Skripte definiert. Die Methode gibt ein Promise zurück, das mit einem `{{WebExtAPIRef("userScripts.RegisteredUserScript","RegisteredUserScript")}}`-Objekt aufgelöst wird.

> [!NOTE]
> Benutzer-Skripte werden abgemeldet, wenn die zugehörige Erweiterungsseite (von der aus die Benutzer-Skripte registriert wurden) entladen wird. Sie sollten deshalb ein Benutzer-Skript von einer Erweiterungsseite registrieren, die mindestens so lange bestehen bleibt, wie Sie möchten, dass die Benutzer-Skripte registriert bleiben.

## Typen

- {{WebExtAPIRef("userScripts.RegisteredUserScript")}}
  - : Das `object`, das von der Methode {{WebExtAPIRef("userScripts.register","register()")}} zurückgegeben wird. Es repräsentiert die registrierten Benutzer-Skripte und wird verwendet, um die Benutzer-Skripte abzumelden.

## Methoden

- {{WebExtAPIRef("userScripts.register()")}}
  - : Registriert Benutzer-Skripte.

## Ereignisse

- {{WebExtAPIRef("userScripts.onBeforeScript")}}
  - : Ein Ereignis, das dem API-Skript zur Verfügung steht, das in [`"user_scripts"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/user_scripts) registriert ist. Es wird vor der Ausführung eines Benutzer-Skripts ausgelöst. Verwenden Sie es, um den Export zusätzlicher von dem API-Skript bereitgestellter APIs auszulösen, sodass diese im Benutzer-Skript verfügbar sind.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Arbeiten mit `userScripts` (Legacy)](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts_legacy/Working_with_userScripts)
- {{WebExtAPIRef("contentScripts","browser.contentScripts")}}
