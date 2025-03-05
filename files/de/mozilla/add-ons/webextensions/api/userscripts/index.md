---
title: userScripts
slug: Mozilla/Add-ons/WebExtensions/API/userScripts
l10n:
  sourceCommit: 3d283cb0a0c6f36ad09ca95f751a30bd3a1fcf4d
---

{{AddonSidebar}}

Verwenden Sie diese API, um Benutzerskripte zu registrieren, Drittanbieterskripte, die dazu konzipiert sind, Webseiten zu manipulieren oder neue Funktionen bereitzustellen. Die Registrierung eines Benutzerskripts weist den Browser an, das Skript an Seiten anzufügen, die den während der Registrierung angegebenen URL-Mustern entsprechen.

> [!NOTE]
> Dies ist die Dokumentation für die neue API-Version, verfügbar in Firefox für Manifest V3. Siehe {{WebExtAPIRef("userScripts_legacy","userScripts (legacy)")}} für Informationen zur API, die in Firefox mit Manifest V2 verwendet werden kann.

Diese API bietet Fähigkeiten ähnlich der {{WebExtAPIRef("scripting")}}, jedoch mit Merkmalen, die zur Handhabung von Drittanbieterskripten geeignet sind.

## Berechtigungen

Um diese API zu verwenden, benötigen Sie die `userScripts`-Berechtigung und [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) für die Seiten, auf denen Sie Skripte ausführen möchten. Der Ansatz zur Aktivierung der Nutzung dieser API variiert jedoch zwischen den Browsern:

- In Firefox ist `userScripts` eine [ausschließlich optionale Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions#optional-only_permissions), die im `optional_permissions`-Manifest-Schlüssel deklariert wird. Ihre Erweiterung muss prüfen, ob die Berechtigung erteilt wurde, indem sie die Verfügbarkeit des `userScripts`-API-Namensraums überprüft oder {{WebExtAPIRef("permissions.contains()")}} verwendet und, falls nicht, um Erlaubnis mit {{WebExtAPIRef("permissions.request()")}} bittet.
- in Chrome ist `userScripts` eine zur Installationszeit angeforderte Berechtigung, die im [`permissions`-Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) deklariert wird. Um die Nutzung der API zu aktivieren, müssen Benutzer jedoch [den Entwickler-Modus in Chrome aktivieren](https://developer.chrome.com/docs/extensions/reference/api/userScripts#developer_mode_for_extension_users).

## Ausführungsumgebungen

Wenn ein Benutzerskript registriert oder aktualisiert wird (mithilfe von {{WebExtAPIRef("userScripts.register()")}} oder {{WebExtAPIRef("userScripts.update()")}}), kann Ihre Erweiterung es so einstellen, dass es in einer isolierten `USER_SCRIPT`-Umgebung oder der `MAIN`-Umgebung ausgeführt wird.

Eine `USER_SCRIPT`-Umgebung bietet eine isolierte Ausführungsumgebung, die für eine Host-Seite oder andere Erweiterungen nicht zugänglich ist. Diese Isolation ist ähnlich der einer [Inhaltskript-Umgebung](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#content_script_environment), außer dass `USER_SCRIPT`-Umgebungen keinen Zugriff auf Erweiterungs-APIs haben.

Benutzerskripte können eine `USER_SCRIPT`-Umgebung gemeinsam nutzen oder sich in einer `USER_SCRIPT`-Umgebung isolieren, indem sie die `worldId`-Eigenschaft von {{WebExtAPIRef("userScripts.RegisteredUserScript", "RegisteredUserScript")}} setzen. Die API ermöglicht einer Erweiterung, eine Content-Security-Policy (CSP) für eine `USER_SCRIPT`-Umgebung mit {{WebExtAPIRef("userScripts.configureWorld()")}} zu konfigurieren.

In der `MAIN`-Umgebung können Host-Seiten und andere Erweiterungen laufende Benutzerskripte sehen und darauf zugreifen. Die `worldId`-Eigenschaft wird für `MAIN`-Umgebungen nicht unterstützt.

Diese Werte der Ausführungsumgebung sind in {{WebExtAPIRef("userScripts.ExecutionWorld","ExecutionWorld")}} definiert.

## Nachrichtenübermittlung

Wie Inhalts-Skripte und andere Erweiterungsskripte kommunizieren Benutzerskripte mit anderen Teilen einer Erweiterung über Nachrichten mithilfe von {{WebExtAPIRef("runtime.sendMessage()")}} und {{WebExtAPIRef("runtime.connect()")}}. Erweiterungen empfangen jedoch Nachrichten mithilfe der dedizierten {{WebExtAPIRef("runtime.onUserScriptMessage")}} und {{WebExtAPIRef("runtime.onUserScriptConnect")}}. Dedizierte Handler werden verwendet, da sie es erleichtern, Nachrichten von Benutzerskripten zu identifizieren, die einen weniger vertrauenswürdigen Kontext darstellen.

Um Nachrichtenübermittlungs-APIs zu aktivieren, rufen Sie {{WebExtAPIRef("userScripts.configureWorld()")}} mit dem Argument `messaging` auf `true` gesetzt auf, bevor Sie ein Benutzerskript registrieren.

```js
browser.userScripts.configureWorld({
  messaging: true,
});
```

## Erweiterungsaktualisierungen

Wenn eine Erweiterung aktualisiert wird, werden Benutzerskripte gelöscht. Um Skripte wiederherzustellen, fügen Sie dem {{WebExtAPIRef("runtime.onInstalled")}} Ereignishandler der Erweiterung Code hinzu, der auf den Grund `"update"` reagiert.

## Typen

- {{WebExtAPIRef("userScripts.ExecutionWorld")}}
  - : Die Ausführungsumgebung für ein Skript, das mit {{WebExtAPIRef("userScripts.register()")}}
    oder {{WebExtAPIRef("userScripts.update()")}} injiziert wurde.
- {{WebExtAPIRef("userScripts.RegisteredUserScript")}}
  - : Ein `object`, das von {{WebExtAPIRef("userScripts.getScripts","getScripts()")}} zurückgegeben wird, welche die registrierten Benutzerskripte darstellt und als Eingabe für {{WebExtAPIRef("userScripts.register","register()")}} und {{WebExtAPIRef("userScripts.update","update()")}} verwendet wird.
- {{WebExtAPIRef("userScripts.ScriptSource")}}
  - : Der Code oder eine Dateiquelle für ein Benutzerskript.
- {{WebExtAPIRef("userScripts.UserScriptFilter")}}
  - : Eine Liste von Benutzerskripten, die von {{WebExtAPIRef("userScripts.getScripts()")}} oder {{WebExtAPIRef("userScripts.unregister()")}} verarbeitet werden sollen.
- {{WebExtAPIRef("userScripts.WorldProperties")}}
  - : Die Konfiguration einer `USER_SCRIPT`-Ausführungsumgebung.

## Methoden

- {{WebExtAPIRef("userScripts.configureWorld()")}}
  - : Konfiguriert eine `USER_SCRIPT`-Ausführungsumgebung für die Erweiterung.
- {{WebExtAPIRef("userScripts.getScripts()")}}
  - : Gibt von der Erweiterung registrierte Benutzerskripte zurück.
- {{WebExtAPIRef("userScripts.getWorldConfigurations()")}}
  - : Gibt alle von der Erweiterung registrierten Weltkonfigurationen zurück.
- {{WebExtAPIRef("userScripts.register()")}}
  - : Registriert Benutzerskripte für die Erweiterung.
- {{WebExtAPIRef("userScripts.resetWorldConfiguration()")}}
  - : Setzt die Konfiguration für eine von der Erweiterung registrierte `USER_SCRIPT`-Welt zurück.
- {{WebExtAPIRef("userScripts.unregister()")}}
  - : Hebt die Registrierung von Benutzerskripten auf, die von der Erweiterung registriert wurden.
- {{WebExtAPIRef("userScripts.update()")}}
  - : Aktualisiert Benutzerskripte, die von der Erweiterung registriert wurden.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{WebExtAPIRef("scripting","browser.scripting")}}
