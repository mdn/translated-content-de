---
title: userScripts
slug: Mozilla/Add-ons/WebExtensions/API/userScripts
l10n:
  sourceCommit: 814f49dc14eb8c8a15c6c3bdc6c83d24ed865cdf
---

{{AddonSidebar}}

Verwenden Sie diese API, um Benutzerskripte zu registrieren, also Drittanbieter-Skripte, die entwickelt wurden, um Webseiten zu manipulieren oder neue Funktionen bereitzustellen. Die Registrierung eines Benutzerskripts weist den Browser an, das Skript an Seiten anzuhängen, die den während der Registrierung angegebenen URL-Mustern entsprechen.

> [!NOTE]
> Dies ist die Dokumentation für die neue API-Version, verfügbar in Firefox für Manifest V3. Informationen zur API, die mit Manifest V2 in Firefox verwendet werden kann, finden Sie unter {{WebExtAPIRef("userScripts_legacy","userScripts (legacy)")}}.

Diese API bietet ähnliche Funktionen wie {{WebExtAPIRef("scripting")}}, jedoch mit Merkmalen, die für den Umgang mit Drittanbieter-Skripten geeignet sind.

## Berechtigungen

Um diese API zu nutzen, benötigen Sie die `userScripts`-Berechtigung und [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) für Websites, auf denen Sie Skripte ausführen möchten. Der Ansatz zur Aktivierung der Nutzung dieser API variiert jedoch je nach Browser:

- In Firefox ist `userScripts` eine [optional-only-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions#optional-only_permissions), die im Manifest-Schlüssel `optional_permissions` deklariert wird. Ihre Erweiterung muss überprüfen, ob die Berechtigung erteilt wurde, indem sie die Verfügbarkeit des `userScripts`-API-Namespace prüft oder {{WebExtAPIRef("permissions.contains()")}} verwendet und, falls nicht, sie mit {{WebExtAPIRef("permissions.request()")}} anfordert.
- In Chrome wird `userScripts` als zur Installationszeit angeforderte Berechtigung im [`permissions`-Manifest-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) deklariert. Um die Nutzung der API zu ermöglichen, müssen Benutzer jedoch [die Entwicklerumgebung in Chrome aktivieren](https://developer.chrome.com/docs/extensions/reference/api/userScripts#developer_mode_for_extension_users).

## Ausführungsumgebungen

Wenn ein Benutzerskript registriert oder aktualisiert wird (mithilfe von {{WebExtAPIRef("userScripts.register()")}} oder {{WebExtAPIRef("userScripts.update()")}}), kann Ihre Erweiterung es so konfigurieren, dass es in einer isolierten `USER_SCRIPT`-Umgebung oder der `MAIN`-Umgebung ausgeführt wird.

Eine `USER_SCRIPT`-Umgebung bietet eine isolierte Ausführungsumgebung, die für eine Host-Seite oder andere Erweiterungen nicht zugänglich ist. Das bedeutet, dass ein Benutzerskript seine JavaScript-Umgebung ändern kann, ohne die Host-Seite oder Benutzer- und Inhaltskripte anderer Erweiterungen zu beeinflussen. In dieser Umgebung sind Benutzerskripte für die Host-Seite oder Benutzer- und Inhaltskripte anderer Erweiterungen nicht sichtbar. Die API ermöglicht einer Erweiterung auch die Konfiguration einer Content-Security-Policy (CSP) für die `USER_SCRIPT`-Umgebung mittels {{WebExtAPIRef("userScripts.configureWorld()")}}.

In der `MAIN`-Umgebung können Host-Seiten und andere Erweiterungen die ausgeführten Benutzerskripte sehen und auf sie zugreifen.

Diese Werte der Ausführungsumgebungen sind in {{WebExtAPIRef("userScripts.ExecutionWorld","ExecutionWorld")}} definiert.

## Messaging

Wie Inhaltskripte und andere Erweiterungsskripte kommunizieren Benutzerskripte mit anderen Teilen einer Erweiterung durch Nachrichten unter Verwendung von {{WebExtAPIRef("runtime.sendMessage()")}} und {{WebExtAPIRef("runtime.connect()")}}. Erweiterungen empfangen jedoch Nachrichten über die speziellen {{WebExtAPIRef("runtime.onUserScriptMessage")}} und {{WebExtAPIRef("runtime.onUserScriptConnect")}}. Spezielle Handler werden verwendet, da sie es einfacher machen, Nachrichten von Benutzerskripten zu identifizieren, die ein weniger vertrauenswürdiger Kontext sind.

Um Messaging-APIs zu aktivieren, rufen Sie {{WebExtAPIRef("userScripts.configureWorld()")}} mit dem Argument `messaging` auf `true` gesetzt auf, bevor Sie ein Benutzerskript registrieren.

```js
browser.userScripts.configureWorld({
  messaging: true,
});
```

## Erweiterungsaktualisierungen

Wenn eine Erweiterung aktualisiert wird, werden Benutzerskripte gelöscht. Um Skripte wiederherzustellen, fügen Sie Code in den {{WebExtAPIRef("runtime.onInstalled")}}-Ereignishandler der Erweiterung ein, der auf den Grund `"update"` reagiert.

> [!NOTE]
> Benutzerskripte werden abgemeldet, wenn die zugehörige Erweiterungsseite (von der die Benutzerskripte registriert wurden) entladen wird. Registrieren Sie Benutzerskripte also von einer Erweiterungsseite, die so lange bestehen bleibt, wie Sie möchten, dass die Benutzerskripte registriert bleiben.

## Typen

- {{WebExtAPIRef("userScripts.ExecutionWorld")}}
  - : Die Ausführungsumgebung für ein Skript, das mit {{WebExtAPIRef("userScripts.register()")}}
    oder {{WebExtAPIRef("userScripts.update()")}} injiziert wurde.
- {{WebExtAPIRef("userScripts.RegisteredUserScript")}}
  - : Ein `object`, das von {{WebExtAPIRef("userScripts.getScripts","getScripts()")}} zurückgegeben wird und registrierte Benutzerskripte darstellt und als Eingabe für {{WebExtAPIRef("userScripts.register","register()")}} und {{WebExtAPIRef("userScripts.update","update()")}} verwendet wird.
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
  - : Meldet von der Erweiterung registrierte Benutzerskripte ab.
- {{WebExtAPIRef("userScripts.update()")}}
  - : Aktualisiert von der Erweiterung registrierte Benutzerskripte.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{WebExtAPIRef("scripting","browser.scripting")}}
