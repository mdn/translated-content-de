---
title: userScripts.WorldProperties
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/WorldProperties
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Die Konfiguration einer `USER_SCRIPT`-Ausführungsumgebung. Verwendet in {{WebExtAPIRef("userScripts.configureWorld")}} und {{WebExtAPIRef("userScripts.getWorldConfigurations")}}.

## Typ

Werte dieses Typs sind ein Objekt, das diese Eigenschaften enthält:

- `worldId` {{optional_inline}}
  - : `string`. Der Bezeichner für die Welt. Werte, die mit Unterstrichen (`_`) beginnen, sind reserviert. Die maximale Länge beträgt 256 Zeichen. Standardmäßig ist es die Standard-`USER_SCRIPT`-Welt (""). Um ein Benutzerskript in dieser Welt auszuführen, geben Sie diesen Wert als `worldId`-Eigenschaft in {{WebExtAPIRef("userScripts.RegisteredUserScript")}} an, wenn Sie ein Benutzerskript registrieren oder aktualisieren.
- `csp` {{optional_inline}}
  - : `string`. Die Content Security Policy (CSP) der Welt. Standardmäßig ist es die [Standard-CSP für Inhalts-Skripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#csp_for_content_scripts), die dynamische Codeausführung wie `eval()` verbietet.
- `messaging` {{optional_inline}}
  - : `boolean`. Ob die Methoden {{WebExtAPIRef("runtime.sendMessage")}} und {{WebExtAPIRef("runtime.connect")}} in der Benutzerskriptwelt verfügbar sind. Standardmäßig sind diese Messaging-APIs versteckt. Die Ereignis-Handler {{WebExtAPIRef("runtime.onUserScriptMessage")}} und {{WebExtAPIRef("runtime.onUserScriptConnect")}} werden ausgelöst, wenn diese Methoden aufgerufen werden.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
