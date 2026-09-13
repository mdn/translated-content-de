---
title: userScripts
slug: Mozilla/Add-ons/WebExtensions/API/userScripts
l10n:
  sourceCommit: a595864befbe37b117f09e576a6e18bca7996759
---

Verwenden Sie diese API, um benutzerdefinierte Skripte zu registrieren, also Drittanbieterskripte, die dazu gedacht sind, Webseiten zu manipulieren oder neue Funktionen bereitzustellen. Die Registrierung eines Benutzer-Skripts weist den Browser an, das Skript auf Seiten anzuhängen, die den während der Registrierung angegebenen URL-Mustern entsprechen.

> [!NOTE]
> Dies ist die Dokumentation für die neue API-Version, die in Firefox für Manifest V3 verfügbar ist. Siehe [`userScripts` (legacy)](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts_legacy) für Informationen über die API-Version, die in Firefox mit Manifest V2 verwendet werden kann.

Diese API bietet ähnliche Funktionen wie {{WebExtAPIRef("scripting")}}, jedoch mit Merkmalen, die für die Handhabung von Drittanbieterskripten geeignet sind.

## Berechtigungen

Um diese API zu nutzen, benötigen Sie die Berechtigung `userScripts` und [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) für die Websites, auf denen Sie Skripte ausführen möchten. Der Ansatz zur Aktivierung der Nutzung dieser API variiert jedoch zwischen den Browsern:

- In Firefox ist `userScripts` eine [ausschließlich optionale Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions#optional-only_permissions), die im `optional_permissions`-Manifest-Schlüssel deklariert wird. Ihre Erweiterung muss überprüfen, ob die Berechtigung erteilt wurde, indem sie die Verfügbarkeit des `userScripts`-API-Namespace überprüft oder {{WebExtAPIRef("permissions.contains()")}} verwendet und, falls nicht, diese mit {{WebExtAPIRef("permissions.request()")}} anfordert.
- In Chrome ist `userScripts` eine zur Installationszeit angeforderte Berechtigung, die im [`permissions`-Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) deklariert wird. Nutzer müssen jedoch [die `chrome://extensions/`-Benutzeroberfläche nutzen, um die Nutzung der API zu aktivieren](https://developer.chrome.com/docs/extensions/reference/api/userScripts#enable-user-scripts-api).

## Ausführungswelten

Wenn ein Benutzer-Skript registriert, aktualisiert oder ausgeführt wird (mithilfe von {{WebExtAPIRef("userScripts.register()")}}, {{WebExtAPIRef("userScripts.update()")}} und {{WebExtAPIRef("userScripts.execute()")}} jeweils), kann Ihre Erweiterung festlegen, dass es in einer isolierten `USER_SCRIPT`-Welt oder der `MAIN`-Welt ausgeführt wird.

Eine `USER_SCRIPT`-Welt bietet eine isolierte Ausführungsumgebung, die für eine Host-Seite oder andere Erweiterungen nicht zugänglich ist. Diese Isolation ähnelt einer [Content-Skript-Umgebung](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#content_script_environment), außer dass `USER_SCRIPT`-Welten nicht auf Erweiterungs-APIs zugreifen können.

Benutzer-Skripte können eine `USER_SCRIPT`-Welt teilen oder sich in einer solchen isolieren, indem sie die `worldId`-Eigenschaft von {{WebExtAPIRef("userScripts.RegisteredUserScript", "RegisteredUserScript")}} setzen. Die API ermöglicht es einer Erweiterung, eine Content Security Policy (CSP) für eine `USER_SCRIPT`-Welt mithilfe von {{WebExtAPIRef("userScripts.configureWorld()")}} zu konfigurieren.

In der `MAIN`-Welt können Host-Seiten und andere Erweiterungen laufende Benutzer-Skripte sehen und darauf zugreifen. Die `worldId`-Eigenschaft wird für `MAIN`-Welten nicht unterstützt.

Diese Ausführungswelten sind definiert in {{WebExtAPIRef("userScripts.ExecutionWorld","ExecutionWorld")}}.

## Nachrichtenübermittlung

Wie Content-Skripte und andere Erweiterungs-Skripte kommunizieren Benutzer-Skripte mit anderen Teilen einer Erweiterung mit Nachrichten, die {{WebExtAPIRef("runtime.sendMessage()")}} und {{WebExtAPIRef("runtime.connect()")}} verwenden. Allerdings empfangen Erweiterungen Nachrichten über die dedizierten {{WebExtAPIRef("runtime.onUserScriptMessage")}} und {{WebExtAPIRef("runtime.onUserScriptConnect")}}. Dedizierte Handler werden verwendet, da sie es einfacher machen, Nachrichten von Benutzer-Skripten zu identifizieren, die in einem weniger vertrauenswürdigen Kontext ausgeführt werden.

Um Messaging-APIs zu aktivieren, rufen Sie {{WebExtAPIRef("userScripts.configureWorld()")}} mit dem Argument `messaging` auf `true` gesetzt auf, bevor Sie ein Benutzer-Skript registrieren.

```js
browser.userScripts.configureWorld({
  messaging: true,
});
```

## Erweiterungs-Updates

Wenn eine Erweiterung aktualisiert wird, werden Benutzer-Skripte gelöscht. Um Skripte wiederherzustellen, fügen Sie Code zum {{WebExtAPIRef("runtime.onInstalled")}}-Event-Handler der Erweiterung hinzu, der auf den Grund `"update"` reagiert.

## Typen

- {{WebExtAPIRef("userScripts.ExecutionWorld")}}
  - : Die Ausführungsumgebung für ein Skript, das mit {{WebExtAPIRef("userScripts.execute()", "execute()")}}, {{WebExtAPIRef("userScripts.register()", "register()")}} oder {{WebExtAPIRef("userScripts.update()", "update()")}} injiziert wird.
- {{WebExtAPIRef("userScripts.RegisteredUserScript")}}
  - : Ein `object`, das von {{WebExtAPIRef("userScripts.getScripts","getScripts()")}} zurückgegeben wird und registrierte Benutzer-Skripte repräsentiert und als Eingabe für {{WebExtAPIRef("userScripts.register","register()")}} und {{WebExtAPIRef("userScripts.update","update()")}} verwendet wird.
- {{WebExtAPIRef("userScripts.ScriptSource")}}
  - : Der Code oder eine Dateiquelle für ein Benutzer-Skript, das in {{WebExtAPIRef("userScripts.execute()", "execute()")}} und {{WebExtAPIRef("userScripts.RegisteredUserScript","RegisteredUserScript")}} verwendet wird.
- {{WebExtAPIRef("userScripts.UserScriptFilter")}}
  - : Eine Liste von Benutzer-Skripten, die von {{WebExtAPIRef("userScripts.getScripts()", "getScripts()")}} oder {{WebExtAPIRef("userScripts.unregister()", "unregister()")}} verarbeitet werden sollen.
- {{WebExtAPIRef("userScripts.WorldProperties")}}
  - : Die Konfiguration einer `USER_SCRIPT`-Ausführungsumgebung.

## Methoden

- {{WebExtAPIRef("userScripts.configureWorld()")}}
  - : Konfiguriert eine `USER_SCRIPT`-Ausführungsumgebung für die Erweiterung.
- {{WebExtAPIRef("userScripts.getScripts()")}}
  - : Gibt von der Erweiterung registrierte Benutzer-Skripte zurück.
- {{WebExtAPIRef("userScripts.getWorldConfigurations()")}}
  - : Gibt alle registrierten Weltkonfigurationen der Erweiterung zurück.
- {{WebExtAPIRef("userScripts.register()")}}
  - : Registriert Benutzer-Skripte für die Erweiterung.
- {{WebExtAPIRef("userScripts.resetWorldConfiguration()")}}
  - : Setzt die Konfiguration für eine von der Erweiterung registrierte `USER_SCRIPT`-Welt zurück.
- {{WebExtAPIRef("userScripts.unregister()")}}
  - : Hebt die Registrierung von Benutzer-Skripten auf, die von der Erweiterung registriert wurden.
- {{WebExtAPIRef("userScripts.update()")}}
  - : Aktualisiert von der Erweiterung registrierte Benutzer-Skripte.
- {{WebExtAPIRef("userScripts.execute()")}}
  - : Injektet ein Benutzer-Skript in einen Zielkontext.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{WebExtAPIRef("scripting","browser.scripting")}}
