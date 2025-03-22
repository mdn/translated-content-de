---
title: userScripts
slug: Mozilla/Add-ons/WebExtensions/API/userScripts
l10n:
  sourceCommit: 041cf35a6932dfc59c00df24eebe381ea252cd29
---

{{AddonSidebar}}

Verwenden Sie diese API, um Benutzerskripte zu registrieren. Dies sind Drittanbieter-Skripte, die entwickelt wurden, um Webseiten zu manipulieren oder neue Funktionen bereitzustellen. Die Registrierung eines Benutzerskripts weist den Browser an, das Skript zu Seiten hinzuzufügen, die den während der Registrierung angegebenen URL-Mustern entsprechen.

> [!NOTE]
> Dies ist die Dokumentation für die neue API-Version, die in Firefox für Manifest V3 verfügbar ist. Siehe [`userScripts` (Legacy)](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts_legacy) für Informationen zur API, die in Firefox mit Manifest V2 verwendet werden kann.

Diese API bietet ähnliche Funktionen wie {{WebExtAPIRef("scripting")}}, jedoch mit Eigenschaften, die für den Umgang mit Drittanbieter-Skripten geeignet sind.

## Berechtigungen

Um diese API zu verwenden, benötigen Sie die Berechtigung `userScripts` und [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) für Websites, auf denen Sie Skripte ausführen möchten. Der Ansatz, um die Nutzung dieser API zu aktivieren, variiert jedoch zwischen den Browsern:

- In Firefox ist `userScripts` eine [nur optionale Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions#optional-only_permissions), die im manifest-Schlüssel `optional_permissions` angegeben wird. Ihre Erweiterung muss überprüfen, ob die Berechtigung erteilt wurde, indem sie die Verfügbarkeit des `userScripts`-APIs-Namespaces prüft oder {{WebExtAPIRef("permissions.contains()")}} verwendet und sie andernfalls mit {{WebExtAPIRef("permissions.request()")}} anfordert.
- In Chrome wird `userScripts` als während der Installation angeforderte Berechtigung im [`permissions` manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) angegeben. Um jedoch die Nutzung der API zu ermöglichen, müssen Benutzer [die Entwicklerumgebung in Chrome aktivieren](https://developer.chrome.com/docs/extensions/reference/api/userScripts#developer_mode_for_extension_users).

## Ausführungswelten

Wenn ein Benutzerskript registriert oder aktualisiert wird (unter Verwendung von {{WebExtAPIRef("userScripts.register()")}} oder {{WebExtAPIRef("userScripts.update()")}}), kann Ihre Erweiterung es so einstellen, dass es in einer isolierten `USER_SCRIPT`-Welt oder der `MAIN`-Welt ausgeführt wird.

Eine `USER_SCRIPT`-Welt bietet eine isolierte Ausführungsumgebung, die für eine Hostseite oder andere Erweiterungen nicht zugänglich ist. Diese Isolation ist ähnlich einer [Inhaltsskriptumgebung](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#content_script_environment), außer dass `USER_SCRIPT`-Welten keine Zugriff auf Erweiterungs-APIs haben.

Benutzerskripte können eine `USER_SCRIPT`-Welt teilen oder sich in einer `USER_SCRIPT`-Welt isolieren, indem sie die `worldId`-Eigenschaft von {{WebExtAPIRef("userScripts.RegisteredUserScript", "RegisteredUserScript")}} einstellen. Die API ermöglicht es einer Erweiterung, eine Content Security Policy (CSP) für eine `USER_SCRIPT`-Welt mittels {{WebExtAPIRef("userScripts.configureWorld()")}} zu konfigurieren.

In der `MAIN`-Welt können Hostseiten und andere Erweiterungen laufende Benutzerskripte sehen und darauf zugreifen. Die `worldId`-Eigenschaft wird für `MAIN`-Welten nicht unterstützt.

Diese Ausführungsweltwerte sind in {{WebExtAPIRef("userScripts.ExecutionWorld","ExecutionWorld")}} definiert.

## Nachrichtenübertragung

Wie Inhalts- und andere Erweiterungsskripte kommunizieren Benutzerskripte mit anderen Teilen einer Erweiterung über Nachrichten, indem sie {{WebExtAPIRef("runtime.sendMessage()")}} und {{WebExtAPIRef("runtime.connect()")}} verwenden. Allerdings empfangen Erweiterungen Nachrichten über die dedizierten {{WebExtAPIRef("runtime.onUserScriptMessage")}} und {{WebExtAPIRef("runtime.onUserScriptConnect")}}. Dedizierte Handler werden verwendet, da sie es erleichtern, Nachrichten von Benutzerskripten zu identifizieren, die ein weniger vertrauenswürdiger Kontext sind.

Um Messaging-APIs zu aktivieren, rufen Sie {{WebExtAPIRef("userScripts.configureWorld()")}} mit dem Argument `messaging` auf `true` gesetzt auf, bevor Sie ein Benutzerskript registrieren.

```js
browser.userScripts.configureWorld({
  messaging: true,
});
```

## Erweiterungsupdates

Wenn eine Erweiterung aktualisiert wird, werden Benutzerskripte gelöscht. Um Skripte wiederherzustellen, fügen Sie Code zum {{WebExtAPIRef("runtime.onInstalled")}} Ereignishandler der Erweiterung hinzu, der auf den Grund `"update"` reagiert.

## Typen

- {{WebExtAPIRef("userScripts.ExecutionWorld")}}
  - : Die Ausführungsumgebung für ein Skript, das mit {{WebExtAPIRef("userScripts.register()")}} oder {{WebExtAPIRef("userScripts.update()")}} injiziert wird.
- {{WebExtAPIRef("userScripts.RegisteredUserScript")}}
  - : Ein `object`, das von {{WebExtAPIRef("userScripts.getScripts","getScripts()")}} zurückgegeben wird, welches registrierte Benutzerskripte darstellt und als Eingabe für {{WebExtAPIRef("userScripts.register","register()")}} und {{WebExtAPIRef("userScripts.update","update()")}} verwendet wird.
- {{WebExtAPIRef("userScripts.ScriptSource")}}
  - : Der Code oder eine Dateiquelle für ein Benutzerskript.
- {{WebExtAPIRef("userScripts.UserScriptFilter")}}
  - : Eine Liste von Benutzerskripten, die von {{WebExtAPIRef("userScripts.getScripts()")}} oder {{WebExtAPIRef("userScripts.unregister()")}} verarbeitet werden sollen.
- {{WebExtAPIRef("userScripts.WorldProperties")}}
  - : Die Konfiguration einer `USER_SCRIPT` Ausführungsumgebung.

## Methoden

- {{WebExtAPIRef("userScripts.configureWorld()")}}
  - : Konfiguriert eine `USER_SCRIPT` Ausführungsumgebung für die Erweiterung.
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
  - : Aktualisiert von der Erweiterung registrierte Benutzerskripte.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{WebExtAPIRef("scripting","browser.scripting")}}
