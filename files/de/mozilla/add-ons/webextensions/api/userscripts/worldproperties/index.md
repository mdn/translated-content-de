---
title: userScripts.WorldProperties
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/WorldProperties
l10n:
  sourceCommit: 3d283cb0a0c6f36ad09ca95f751a30bd3a1fcf4d
---

{{AddonSidebar}}

Die Konfiguration einer `USER_SCRIPT` Ausführungsumgebung. Wird in {{WebExtAPIRef("userScripts.configureWorld")}} und {{WebExtAPIRef("userScripts.getWorldConfigurations")}} verwendet.

## Typ

Werte dieses Typs sind ein Objekt mit diesen Eigenschaften:

- `worldId` {{optional_inline}}
  - : `string`. Der Bezeichner für die Welt. Werte mit führenden Unterstrichen (`_`) sind reserviert. Die maximale Länge beträgt 256 Zeichen. Standardmäßig wird die Standard-`USER_SCRIPT`-Welt verwendet (""). Um ein Benutzerskript in dieser Welt auszuführen, übergeben Sie diesen Wert als `worldId`-Eigenschaft in {{WebExtAPIRef("userScripts.RegisteredUserScript")}}, wenn Sie ein Benutzerskript registrieren oder aktualisieren.
- `csp` {{optional_inline}}
  - : `string`. Die Content Security Policy (CSP) der Welt. Standardmäßig wird die [Standard-CSP für Inhaltsskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#csp_for_content_scripts) verwendet, die die dynamische Codeausführung, wie `eval()`, verbietet.
- `messaging` {{optional_inline}}
  - : `boolean`. Ob die Methoden {{WebExtAPIRef("runtime.sendMessage")}} und {{WebExtAPIRef("runtime.connect")}} der Benutzerskript-Welt zur Verfügung stehen. Standardmäßig werden diese Messaging-APIs ausgeblendet. Die Ereignishandler {{WebExtAPIRef("runtime.onUserScriptMessage")}} und {{WebExtAPIRef("runtime.onUserScriptConnect")}} werden ausgelöst, wenn diese Methoden aufgerufen werden.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
