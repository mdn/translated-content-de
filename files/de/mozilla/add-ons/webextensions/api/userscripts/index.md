---
title: userScripts
slug: Mozilla/Add-ons/WebExtensions/API/userScripts
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Verwenden Sie diese API, um Benutzer-Skripte zu registrieren, Drittanbieter-Skripte, die für die Manipulation von Webseiten oder das Bereitstellen neuer Funktionen entwickelt wurden. Das Registrieren eines Benutzer-Skripts weist den Browser an, das Skript an Seiten anzuhängen, die mit den während der Registrierung angegebenen URL-Mustern übereinstimmen.

> [!NOTE]
> Dies ist die Dokumentation für die neue API-Version, verfügbar in Firefox für Manifest V3. Siehe [`userScripts` (legacy)](/de/docs/Mozilla/Add-ons/WebExtensions/API/userScripts_legacy) für Informationen zur API, die in Firefox mit Manifest V2 verwendet werden kann.

Diese API bietet ähnliche Möglichkeiten wie {{WebExtAPIRef("scripting")}}, jedoch mit Eigenschaften, die besser für die Verarbeitung von Drittanbieter-Skripten geeignet sind.

## Berechtigungen

Um diese API zu verwenden, benötigen Sie die Berechtigung `userScripts` und [`host_permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) für die Seiten, auf denen Sie Skripte ausführen möchten. Der Ansatz, diese API zu aktivieren, variiert jedoch je nach Browser:

- In Firefox ist `userScripts` eine [optionale Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/optional_permissions#optional-only_permissions), die im Manifest-Schlüssel `optional_permissions` deklariert wird. Ihre Erweiterung muss prüfen, ob die Berechtigung gewährt wurde, indem die Verfügbarkeit des `userScripts` API-Namensraums überprüft oder {{WebExtAPIRef("permissions.contains()")}} verwendet wird, und, falls nicht, muss sie mit {{WebExtAPIRef("permissions.request()")}} angefordert werden.
- In Chrome ist `userScripts` eine bei der Installation angeforderte Berechtigung, die im [Manifest-Schlüssel `permissions`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) deklariert wird. Um die Nutzung der API zu ermöglichen, müssen Benutzer jedoch [die Entwicklerumgebung in Chrome einschalten](https://developer.chrome.com/docs/extensions/reference/api/userScripts#developer_mode_for_extension_users).

## Ausführungsumgebungen

Wenn ein Benutzer-Skript registriert oder aktualisiert wird (mit {{WebExtAPIRef("userScripts.register()")}} oder {{WebExtAPIRef("userScripts.update()")}}), kann Ihre Erweiterung es so einstellen, dass es in einer isolierten `USER_SCRIPT`-Umgebung oder der `MAIN`-Umgebung läuft.

Eine `USER_SCRIPT`-Umgebung bietet eine isolierte Ausführungsumgebung, die für eine Host-Seite oder andere Erweiterungen nicht zugänglich ist. Diese Isolation ähnelt einer [Content-Skript-Umgebung](/de/docs/Mozilla/Add-ons/WebExtensions/Content_scripts#content_script_environment), außer dass `USER_SCRIPT`-Umgebungen keinen Zugriff auf Erweiterungs-APIs haben.

Benutzer-Skripte können sich eine `USER_SCRIPT`-Umgebung teilen oder sich in einer `USER_SCRIPT`-Umgebung isolieren, indem sie die `worldId`-Eigenschaft von {{WebExtAPIRef("userScripts.RegisteredUserScript", "RegisteredUserScript")}} setzen. Die API ermöglicht es einer Erweiterung, eine Content Security Policy (CSP) für eine `USER_SCRIPT`-Umgebung mit {{WebExtAPIRef("userScripts.configureWorld()")}} zu konfigurieren.

In der `MAIN`-Umgebung können Host-Seiten und andere Erweiterungen laufende Benutzer-Skripte sehen und darauf zugreifen. Die `worldId`-Eigenschaft wird für `MAIN`-Umgebungen nicht unterstützt.

Diese Ausführungsumgebungswerte sind in {{WebExtAPIRef("userScripts.ExecutionWorld","ExecutionWorld")}} definiert.

## Messaging

Wie Content-Skripte und andere Erweiterungs-Skripte kommunizieren Benutzer-Skripte mit anderen Teilen einer Erweiterung per Nachrichten unter Verwendung von {{WebExtAPIRef("runtime.sendMessage()")}} und {{WebExtAPIRef("runtime.connect()")}}. Erweiterungen empfangen jedoch Nachrichten über den dedizierten {{WebExtAPIRef("runtime.onUserScriptMessage")}} und {{WebExtAPIRef("runtime.onUserScriptConnect")}}. Spezielle Handler werden verwendet, da sie es einfacher machen, Nachrichten von Benutzer-Skripten zu identifizieren, die ein weniger vertrauenswürdiger Kontext sind.

Um Messaging-APIs zu aktivieren, rufen Sie {{WebExtAPIRef("userScripts.configureWorld()")}} mit dem Argument `messaging` auf `true` gesetzt auf, bevor Sie ein Benutzer-Skript registrieren.

```js
browser.userScripts.configureWorld({
  messaging: true,
});
```

## Erweiterungs-Updates

Wenn eine Erweiterung aktualisiert wird, werden Benutzer-Skripte gelöscht. Um Skripte wiederherzustellen, fügen Sie dem {{WebExtAPIRef("runtime.onInstalled")}} Event-Handler der Erweiterung Code hinzu, der auf den Grund `"update"` reagiert.

## Typen

- {{WebExtAPIRef("userScripts.ExecutionWorld")}}
  - : Die Ausführungsumgebung für ein Skript, das mit {{WebExtAPIRef("userScripts.register()")}}
    oder {{WebExtAPIRef("userScripts.update()")}} injiziert wurde.
- {{WebExtAPIRef("userScripts.RegisteredUserScript")}}
  - : Ein `object`, das von {{WebExtAPIRef("userScripts.getScripts","getScripts()")}} zurückgegeben wird und registrierte Benutzer-Skripte darstellt und als Eingabe für {{WebExtAPIRef("userScripts.register","register()")}} und {{WebExtAPIRef("userScripts.update","update()")}} verwendet wird.
- {{WebExtAPIRef("userScripts.ScriptSource")}}
  - : Der Code oder eine Quelldatei für ein Benutzer-Skript.
- {{WebExtAPIRef("userScripts.UserScriptFilter")}}
  - : Eine Liste der Benutzer-Skripte, die von {{WebExtAPIRef("userScripts.getScripts()")}} oder {{WebExtAPIRef("userScripts.unregister()")}} verarbeitet werden sollen.
- {{WebExtAPIRef("userScripts.WorldProperties")}}
  - : Die Konfiguration einer `USER_SCRIPT`-Ausführungsumgebung.

## Methoden

- {{WebExtAPIRef("userScripts.configureWorld()")}}
  - : Konfiguriert eine `USER_SCRIPT`-Ausführungsumgebung für die Erweiterung.
- {{WebExtAPIRef("userScripts.getScripts()")}}
  - : Gibt von der Erweiterung registrierte Benutzer-Skripte zurück.
- {{WebExtAPIRef("userScripts.getWorldConfigurations()")}}
  - : Gibt alle von der Erweiterung registrierten Weltkonfigurationen zurück.
- {{WebExtAPIRef("userScripts.register()")}}
  - : Registriert Benutzer-Skripte für die Erweiterung.
- {{WebExtAPIRef("userScripts.resetWorldConfiguration()")}}
  - : Setzt die Konfiguration für eine von der Erweiterung registrierte `USER_SCRIPT`-Welt zurück.
- {{WebExtAPIRef("userScripts.unregister()")}}
  - : Hebt die Registrierung von Benutzer-Skripten auf, die von der Erweiterung registriert wurden.
- {{WebExtAPIRef("userScripts.update()")}}
  - : Aktualisiert von der Erweiterung registrierte Benutzer-Skripte.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{WebExtAPIRef("scripting","browser.scripting")}}
