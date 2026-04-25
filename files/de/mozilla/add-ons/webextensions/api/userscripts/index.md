---
title: userScripts
slug: Mozilla/Add-ons/WebExtensions/API/userScripts
l10n:
  sourceCommit: a3b7f4beaca4b6a29ef22e7d27f07ea13f48ca73
---

Verwenden Sie diese API, um Benutzerskripte zu registrieren, Drittanbieter-Skripte, die entwickelt wurden, um Webseiten zu manipulieren oder neue Funktionen bereitzustellen. Das Registrieren eines Benutzerskripts weist den Browser an, das Skript an Seiten anzuhängen, die den während der Registrierung angegebenen URL-Mustern entsprechen.

> [!NOTE]
> Dies ist die Dokumentation für die neue API-Version, die in Firefox für Manifest V3 verfügbar ist. Siehe [`userScripts` (legacy)](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts_legacy), um Informationen über die API zu erhalten, die in Firefox mit Manifest V2 verwendet werden kann.

Diese API bietet ähnliche Funktionen wie {{WebExtAPIRef("scripting")}}, jedoch mit Eigenschaften, die für den Umgang mit Drittanbieter-Skripten geeignet sind.

## Berechtigungen

Um diese API zu verwenden, benötigen Sie die Berechtigung `userScripts` und [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) für die Websites, auf denen Sie Skripte ausführen möchten. Der Ansatz zur Aktivierung der Nutzung dieser API variiert jedoch zwischen den Browsern:

- In Firefox ist `userScripts` eine [nur optionale Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions#optional-only_permissions), die im Schlüssel `optional_permissions` des Manifests deklariert wird. Ihre Erweiterung muss prüfen, ob die Berechtigung gewährt wurde, indem die Verfügbarkeit des `userScripts` API-Namensraums geprüft wird oder {{WebExtAPIRef("permissions.contains()")}} verwendet wird, und, falls nicht, diese mit {{WebExtAPIRef("permissions.request()")}} anfordern.
- in Chrome ist `userScripts` eine bei der Installation angeforderte Berechtigung, die im [Schlüssel `permissions` des Manifests](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) deklariert wird. Es ist jedoch erforderlich, dass die Benutzer [die `chrome://extensions/` Benutzeroberfläche verwenden, um die Nutzung der API zu aktivieren](https://developer.chrome.com/docs/extensions/reference/api/userScripts#enable-user-scripts-api).

## Ausführungsumgebungen

Wenn ein Benutzerskript registriert oder aktualisiert wird (mithilfe von {{WebExtAPIRef("userScripts.register()")}} oder {{WebExtAPIRef("userScripts.update()")}}), kann Ihre Erweiterung es so einstellen, dass es in einer isolierten `USER_SCRIPT`-Welt oder der `MAIN`-Welt ausgeführt wird.

Eine `USER_SCRIPT`-Welt bietet eine isolierte Ausführungsumgebung, die einer Host-Seite oder anderen Erweiterungen nicht zugänglich ist. Diese Isolation ähnelt einer [Content-Skript-Umgebung](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#content_script_environment), außer dass `USER_SCRIPT`-Welten keinen Zugriff auf Erweiterungs-APIs haben.

Benutzerskripte können sich eine `USER_SCRIPT`-Welt teilen oder sich durch das Setzen der `worldId`-Eigenschaft von {{WebExtAPIRef("userScripts.RegisteredUserScript", "RegisteredUserScript")}} in einer `USER_SCRIPT`-Welt isolieren. Die API ermöglicht es einer Erweiterung, eine Content-Sicherheitsrichtlinie (CSP) für eine `USER_SCRIPT`-Welt mithilfe von {{WebExtAPIRef("userScripts.configureWorld()")}} zu konfigurieren.

In der `MAIN`-Welt können Host-Seiten und andere Erweiterungen die ausgeführten Benutzerskripte sehen und darauf zugreifen. Die `worldId`-Eigenschaft wird für `MAIN`-Welten nicht unterstützt.

Diese Ausführungswelt-Werte sind in {{WebExtAPIRef("userScripts.ExecutionWorld","ExecutionWorld")}} definiert.

## Nachrichtenübermittlung

Wie Inhalts-Skripte und andere Erweiterungs-Skripte kommunizieren Benutzerskripte mit anderen Teilen einer Erweiterung über Nachrichten unter Verwendung von {{WebExtAPIRef("runtime.sendMessage()")}} und {{WebExtAPIRef("runtime.connect()")}}. Erweiterungen empfangen jedoch Nachrichten über die dedizierten {{WebExtAPIRef("runtime.onUserScriptMessage")}} und {{WebExtAPIRef("runtime.onUserScriptConnect")}}. Dedizierte Handler machen es einfacher, Nachrichten von Benutzerskripten zu identifizieren, die ein weniger vertrauenswürdiger Kontext sind.

Um Messaging-APIs zu aktivieren, rufen Sie {{WebExtAPIRef("userScripts.configureWorld()")}} mit dem Argument `messaging` auf `true` gesetzt auf, bevor Sie ein Benutzerskript registrieren.

```js
browser.userScripts.configureWorld({
  messaging: true,
});
```

## Erweiterungsupdates

Wenn eine Erweiterung aktualisiert wird, werden Benutzerskripte gelöscht. Um Skripte wiederherzustellen, fügen Sie Code in den {{WebExtAPIRef("runtime.onInstalled")}}-Ereignishandler der Erweiterung ein, der auf den Grund `"update"` reagiert.

## Typen

- {{WebExtAPIRef("userScripts.ExecutionWorld")}}
  - : Die Ausführungsumgebung für ein Skript, das mit {{WebExtAPIRef("userScripts.register()")}}
    oder {{WebExtAPIRef("userScripts.update()")}} injiziert wird.
- {{WebExtAPIRef("userScripts.RegisteredUserScript")}}
  - : Ein `object`, das durch {{WebExtAPIRef("userScripts.getScripts","getScripts()")}} zurückgegeben wird, das registrierte Benutzerskripte darstellt und als Eingabe für {{WebExtAPIRef("userScripts.register","register()")}} und {{WebExtAPIRef("userScripts.update","update()")}} verwendet wird.
- {{WebExtAPIRef("userScripts.ScriptSource")}}
  - : Der Code oder eine Dateiquelle für ein Benutzerskript.
- {{WebExtAPIRef("userScripts.UserScriptFilter")}}
  - : Eine Liste von Benutzerskripten, die durch {{WebExtAPIRef("userScripts.getScripts()")}} oder {{WebExtAPIRef("userScripts.unregister()")}} verarbeitet werden soll.
- {{WebExtAPIRef("userScripts.WorldProperties")}}
  - : Die Konfiguration einer `USER_SCRIPT`-Ausführungsumgebung.

## Methoden

- {{WebExtAPIRef("userScripts.configureWorld()")}}
  - : Konfiguriert eine `USER_SCRIPT`-Ausführungsumgebung für die Erweiterung.
- {{WebExtAPIRef("userScripts.getScripts()")}}
  - : Gibt Benutzerskripte zurück, die von der Erweiterung registriert wurden.
- {{WebExtAPIRef("userScripts.getWorldConfigurations()")}}
  - : Gibt alle registrierten Weltkonfigurationen der Erweiterung zurück.
- {{WebExtAPIRef("userScripts.register()")}}
  - : Registriert Benutzerskripte für die Erweiterung.
- {{WebExtAPIRef("userScripts.resetWorldConfiguration()")}}
  - : Setzt die Konfiguration für eine von der Erweiterung registrierte `USER_SCRIPT`-Welt zurück.
- {{WebExtAPIRef("userScripts.unregister()")}}
  - : Hebt die Registrierung von Benutzerskripten auf, die von der Erweiterung registriert wurden.
- {{WebExtAPIRef("userScripts.update()")}}
  - : Aktualisiert Benutzerskripte, die von der Erweiterung registriert wurden.
- {{WebExtAPIRef("userScripts.execute()")}}
  - : Injektziert ein Benutzerskript in einen Zielkontext.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{WebExtAPIRef("scripting","browser.scripting")}}
