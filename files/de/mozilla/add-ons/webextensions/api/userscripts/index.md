---
title: userScripts
slug: Mozilla/Add-ons/WebExtensions/API/userScripts
l10n:
  sourceCommit: ae1fa16dd3328625e464903699f8680f48470a85
---

Verwenden Sie diese API, um Benutzer-Skripte zu registrieren. Dies sind Drittanbieter-Skripte, die dazu ausgelegt sind, Webseiten zu manipulieren oder neue Funktionen bereitzustellen. Die Registrierung eines Benutzer-Skriptes weist den Browser an, das Skript an Seiten anzuhängen, die den bei der Registrierung angegebenen URL-Mustern entsprechen.

> [!NOTE]
> Dies ist die Dokumentation für die neue API-Version, die in Firefox für Manifest V3 verfügbar ist. Siehe [`userScripts` (legacy)](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts_legacy) für Informationen zur API für die Verwendung mit Firefox und Manifest V2.

Diese API bietet ähnliche Funktionen wie {{WebExtAPIRef("scripting")}} aber mit Merkmalen, die für die Handhabung von Drittanbieter-Skripten geeignet sind.

## Berechtigungen

Um diese API zu verwenden, benötigen Sie die `userScripts` Berechtigung und [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) für die Seiten, auf denen Sie Skripte ausführen möchten. Der Ansatz zur Aktivierung der Nutzung dieser API variiert jedoch zwischen den Browsern:

- In Firefox ist `userScripts` eine [nur optionale Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions#optional-only_permissions), die im Manifest Key `optional_permissions` erklärt wird. Ihr Add-on muss prüfen, ob die Berechtigung erteilt wurde, indem es die Verfügbarkeit des `userScripts` API-Namespace überprüft oder {{WebExtAPIRef("permissions.contains()")}} verwendet und sie, falls nicht, mit {{WebExtAPIRef("permissions.request()")}} anfordert.
- In Chrome ist `userScripts` eine zur Installationszeit angeforderte Berechtigung, die im [`permissions` Manifest Key](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) erklärt wird. Um jedoch die Nutzung der API zu ermöglichen, müssen Benutzer [die Entwicklerumgebung in Chrome einschalten](https://developer.chrome.com/docs/extensions/reference/api/userScripts#developer_mode_for_extension_users).

## Ausführungswelten

Wenn ein Benutzer-Skript registriert oder aktualisiert wird (mittels {{WebExtAPIRef("userScripts.register()")}} oder {{WebExtAPIRef("userScripts.update()")}}), kann Ihr Add-on festlegen, dass es in einer isolierten `USER_SCRIPT` Welt oder in der `MAIN` Welt ausgeführt wird.

Eine `USER_SCRIPT` Welt bietet eine isolierte Ausführungsumgebung, die für eine Host-Seite oder andere Erweiterungen nicht zugänglich ist. Diese Isolierung ähnelt einer [Content-Skript-Umgebung](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#content_script_environment), außer dass `USER_SCRIPT` Welten keinen Zugang zu Erweiterungs-APIs haben.

Benutzer-Skripte können sich eine `USER_SCRIPT`-Welt teilen oder sich in einer eigenen `USER_SCRIPT` Welt isolieren, indem sie die `worldId` Eigenschaft von {{WebExtAPIRef("userScripts.RegisteredUserScript", "RegisteredUserScript")}} setzen. Die API ermöglicht einer Erweiterung, eine Content-Sicherheitsrichtlinie (CSP) für eine `USER_SCRIPT` Welt mittels {{WebExtAPIRef("userScripts.configureWorld()")}} zu konfigurieren.

In der `MAIN` Welt können Host-Seiten und andere Erweiterungen laufende Benutzer-Skripte sehen und darauf zugreifen. Die `worldId` Eigenschaft wird für `MAIN` Welten nicht unterstützt.

Diese Werte der Ausführungswelten sind in {{WebExtAPIRef("userScripts.ExecutionWorld","ExecutionWorld")}} definiert.

## Nachrichtenübermittlung

Wie Inhalts-Skripte und andere Erweiterungs-Skripte kommunizieren Benutzer-Skripte mit anderen Teilen einer Erweiterung durch Nachrichten mittels {{WebExtAPIRef("runtime.sendMessage()")}} und {{WebExtAPIRef("runtime.connect()")}}. Erweiterungen empfangen jedoch Nachrichten mit den dedizierten {{WebExtAPIRef("runtime.onUserScriptMessage")}} und {{WebExtAPIRef("runtime.onUserScriptConnect")}}. Dedizierte Handler werden verwendet, da sie es erleichtern, Nachrichten von Benutzer-Skripten zu identifizieren, die ein weniger vertrauenswürdiger Kontext sind.

Um Messaging-APIs zu aktivieren, rufen Sie {{WebExtAPIRef("userScripts.configureWorld()")}} mit dem Argument `messaging` auf `true` gesetzt, bevor Sie ein Benutzer-Skript registrieren.

```js
browser.userScripts.configureWorld({
  messaging: true,
});
```

## Erweiterungs-Updates

Wenn eine Erweiterung aktualisiert wird, werden Benutzer-Skripte gelöscht. Um Skripte wiederherzustellen, fügen Sie Code in den {{WebExtAPIRef("runtime.onInstalled")}} Ereignishandler der Erweiterung ein, der auf den Grund `"update"` reagiert.

## Typen

- {{WebExtAPIRef("userScripts.ExecutionWorld")}}
  - : Die Ausführungsumgebung für ein Skript, das mit {{WebExtAPIRef("userScripts.register()")}}
    oder {{WebExtAPIRef("userScripts.update()")}} injiziert wird.
- {{WebExtAPIRef("userScripts.RegisteredUserScript")}}
  - : Ein `object`, das von {{WebExtAPIRef("userScripts.getScripts","getScripts()")}} zurückgegeben wird, das registrierte Benutzer-Skripte darstellt und als Eingabe für {{WebExtAPIRef("userScripts.register","register()")}} und {{WebExtAPIRef("userScripts.update","update()")}} verwendet wird.
- {{WebExtAPIRef("userScripts.ScriptSource")}}
  - : Der Code oder eine Datei-Quelle für ein Benutzer-Skript.
- {{WebExtAPIRef("userScripts.UserScriptFilter")}}
  - : Eine Liste von Benutzer-Skripten, die von {{WebExtAPIRef("userScripts.getScripts()")}} oder {{WebExtAPIRef("userScripts.unregister()")}} verarbeitet werden sollen.
- {{WebExtAPIRef("userScripts.WorldProperties")}}
  - : Die Konfiguration einer `USER_SCRIPT` Ausführungsumgebung.

## Methoden

- {{WebExtAPIRef("userScripts.configureWorld()")}}
  - : Konfiguriert eine `USER_SCRIPT` Ausführungsumgebung für die Erweiterung.
- {{WebExtAPIRef("userScripts.getScripts()")}}
  - : Gibt von der Erweiterung registrierte Benutzer-Skripte zurück.
- {{WebExtAPIRef("userScripts.getWorldConfigurations()")}}
  - : Gibt alle registrierten Weltkonfigurationen der Erweiterung zurück.
- {{WebExtAPIRef("userScripts.register()")}}
  - : Registriert Benutzer-Skripte für die Erweiterung.
- {{WebExtAPIRef("userScripts.resetWorldConfiguration()")}}
  - : Setzt die Konfiguration für eine von der Erweiterung registrierte `USER_SCRIPT` Welt zurück.
- {{WebExtAPIRef("userScripts.unregister()")}}
  - : Hebt die Registrierung von Benutzer-Skripten auf, die von der Erweiterung registriert wurden.
- {{WebExtAPIRef("userScripts.update()")}}
  - : Aktualisiert von der Erweiterung registrierte Benutzer-Skripte.
- {{WebExtAPIRef("userScripts.execute()")}}
  - : Injektiert ein Benutzer-Skript in einen Zielkontext.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{WebExtAPIRef("scripting","browser.scripting")}}
