---
title: userScripts
slug: Mozilla/Add-ons/WebExtensions/API/userScripts
l10n:
  sourceCommit: 20c11f6af0809fa827413acf968b56bf4650d8d4
---

Verwenden Sie diese API, um Benutzerskripte zu registrieren, Drittanbieterskripte, die entwickelt wurden, um Webseiten zu manipulieren oder neue Funktionen bereitzustellen. Durch das Registrieren eines Benutzerskripts wird der Browser angewiesen, das Skript an Seiten anzufügen, die den während der Registrierung angegebenen URL-Mustern entsprechen.

> [!NOTE]
> Dies ist die Dokumentation für die neue API-Version, die in Firefox für Manifest V3 verfügbar ist. Siehe [`userScripts` (legacy)](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts_legacy) für Informationen zur API, die in Firefox mit Manifest V2 verwendet werden kann.

Diese API bietet Möglichkeiten, ähnlich der {{WebExtAPIRef("scripting")}}, jedoch mit Funktionen, die für die Verarbeitung von Drittanbieterskripten geeignet sind.

## Berechtigungen

Um diese API zu verwenden, benötigen Sie die Berechtigung `userScripts` und [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) für Websites, auf denen Sie Skripte ausführen möchten. Der Ansatz zum Aktivieren des Einsatzes dieser API variiert jedoch zwischen den Browsern:

- In Firefox ist `userScripts` eine [nur optionale Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions#optional-only_permissions), die im Schlüssel `optional_permissions` des Manifests erklärt wird. Ihre Erweiterung muss prüfen, ob die Berechtigung gewährt wurde, indem sie die Verfügbarkeit des `userScripts` API-Namespace überprüft oder {{WebExtAPIRef("permissions.contains()")}} verwendet und, falls nicht, die Berechtigung mit {{WebExtAPIRef("permissions.request()")}} anfordert.
- In Chrome ist `userScripts` eine während der Installation angeforderte Berechtigung, die im [`permissions` Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) erklärt wird. Benutzer müssen jedoch [die `chrome://extensions/`-Benutzeroberfläche verwenden, um die Nutzung der API zu aktivieren](https://developer.chrome.com/docs/extensions/reference/api/userScripts#enable-user-scripts-api).

## Ausführungswelten

Wenn ein Benutzerskript registriert, aktualisiert oder ausgeführt wird (mit {{WebExtAPIRef("userScripts.register()")}}, {{WebExtAPIRef("userScripts.update()")}} und {{WebExtAPIRef("userScripts.execute()")}} jeweils), kann Ihre Erweiterung es so einstellen, dass es in einer isolierten `USER_SCRIPT` Welt oder der `MAIN` Welt läuft.

Eine `USER_SCRIPT` Welt bietet eine isolierte Ausführungsumgebung, die für eine Host-Seite oder andere Erweiterungen nicht zugänglich ist. Diese Isolierung ähnelt einer [Umgebung für Inhaltsskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#content_script_environment), außer dass `USER_SCRIPT` Welten nicht auf Erweiterungs-APIs zugreifen können.

Benutzerskripte können eine `USER_SCRIPT` Welt teilen oder sich in einer `USER_SCRIPT` Welt isolieren, indem sie die `worldId`-Eigenschaft von {{WebExtAPIRef("userScripts.RegisteredUserScript", "RegisteredUserScript")}} setzen. Die API ermöglicht es einer Erweiterung, eine Content Security Policy (CSP) für eine `USER_SCRIPT` Welt mit {{WebExtAPIRef("userScripts.configureWorld()")}} zu konfigurieren.

In der `MAIN` Welt können Host-Seiten und andere Erweiterungen laufende Benutzerskripte sehen und darauf zugreifen. Die Eigenschaft `worldId` wird für `MAIN` Welten nicht unterstützt.

Diese Ausführungswelt-Werte sind in {{WebExtAPIRef("userScripts.ExecutionWorld", "ExecutionWorld")}} definiert.

## Nachrichtenübermittlung

Wie Inhaltsskripte und andere Erweiterungsskripte kommunizieren Benutzerskripte mit anderen Teilen einer Erweiterung über Nachrichten mit {{WebExtAPIRef("runtime.sendMessage()")}} und {{WebExtAPIRef("runtime.connect()")}}. Erweiterungen empfangen jedoch Nachrichten über die speziellen {{WebExtAPIRef("runtime.onUserScriptMessage")}} und {{WebExtAPIRef("runtime.onUserScriptConnect")}}. Spezielle Handler werden verwendet, da sie die Identifizierung von Nachrichten von Benutzerskripten erleichtern, die ein weniger vertrauenswürdiger Kontext sind.

Um Messaging-APIs zu aktivieren, rufen Sie {{WebExtAPIRef("userScripts.configureWorld()")}} mit dem Argument `messaging` auf, das auf `true` gesetzt ist, bevor Sie ein Benutzerskript registrieren.

```js
browser.userScripts.configureWorld({
  messaging: true,
});
```

## Erweiterungs-Updates

Wenn eine Erweiterung aktualisiert wird, werden Benutzerskripte gelöscht. Um Skripte wiederherzustellen, fügen Sie Code zu dem {{WebExtAPIRef("runtime.onInstalled")}} Ereignishandler der Erweiterung hinzu, der auf den Grund `"update"` reagiert.

## Typen

- {{WebExtAPIRef("userScripts.ExecutionWorld")}}
  - : Die Ausführungsumgebung für ein mit {{WebExtAPIRef("userScripts.execute()", "execute()")}}, {{WebExtAPIRef("userScripts.register()", "register()")}} oder {{WebExtAPIRef("userScripts.update()", "update()")}} injiziertes Skript.
- {{WebExtAPIRef("userScripts.RegisteredUserScript")}}
  - : Ein `object`, das von {{WebExtAPIRef("userScripts.getScripts","getScripts()")}} zurückgegeben wird und registrierte Benutzerskripte darstellt und als Eingabe für {{WebExtAPIRef("userScripts.register","register()")}} und {{WebExtAPIRef("userScripts.update","update()")}} verwendet wird.
- {{WebExtAPIRef("userScripts.ScriptSource")}}
  - : Der Code oder eine Dateiquelle für ein Benutzerskript, das in {{WebExtAPIRef("userScripts.execute()", "execute()")}} und {{WebExtAPIRef("userScripts.RegisteredUserScript","RegisteredUserScript")}} verwendet wird.
- {{WebExtAPIRef("userScripts.UserScriptFilter")}}
  - : Eine Liste der von {{WebExtAPIRef("userScripts.getScripts()", "getScripts()")}} oder {{WebExtAPIRef("userScripts.unregister()", "unregister()")}} zu verarbeitenden Benutzerskripte.
- {{WebExtAPIRef("userScripts.WorldProperties")}}
  - : Die Konfiguration einer `USER_SCRIPT` Ausführungsumgebung.

## Methoden

- {{WebExtAPIRef("userScripts.configureWorld()")}}
  - : Konfiguriert eine `USER_SCRIPT` Ausführungsumgebung für die Erweiterung.
- {{WebExtAPIRef("userScripts.getScripts()")}}
  - : Gibt die von der Erweiterung registrierten Benutzerskripte zurück.
- {{WebExtAPIRef("userScripts.getWorldConfigurations()")}}
  - : Gibt alle registrierten Weltkonfigurationen der Erweiterung zurück.
- {{WebExtAPIRef("userScripts.register()")}}
  - : Registriert Benutzerskripte für die Erweiterung.
- {{WebExtAPIRef("userScripts.resetWorldConfiguration()")}}
  - : Setzt die Konfiguration für eine von der Erweiterung registrierte `USER_SCRIPT` Welt zurück.
- {{WebExtAPIRef("userScripts.unregister()")}}
  - : Hebt die Registrierung von Benutzerskripten der Erweiterung auf.
- {{WebExtAPIRef("userScripts.update()")}}
  - : Aktualisiert die von der Erweiterung registrierten Benutzerskripte.
- {{WebExtAPIRef("userScripts.execute()")}}
  - : Injiiziert ein Benutzerskript in einen Zielkontext.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{WebExtAPIRef("scripting","browser.scripting")}}
