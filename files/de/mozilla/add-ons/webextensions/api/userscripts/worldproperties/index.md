---
title: userScripts.WorldProperties
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/WorldProperties
l10n:
  sourceCommit: 814f49dc14eb8c8a15c6c3bdc6c83d24ed865cdf
---

{{AddonSidebar}}

Die Konfiguration eines `USER_SCRIPT` Ausführungsumfelds. Verwendet in {{WebExtAPIRef("userScripts.configureWorld")}} und {{WebExtAPIRef("userScripts.getWorldConfigurations")}}.

## Typ

Werte dieses Typs sind ein Objekt, das die folgenden Eigenschaften enthält:

- `worldId` {{optional_inline}}
  - : `string`. Der Bezeichner für die Welt. Werte, die mit Unterstrichen (`_`) beginnen, sind reserviert. Die maximale Länge beträgt 256 Zeichen. Standardmäßig ist es die Standard-`USER_SCRIPT`-Welt ("").
- `csp` {{optional_inline}}
  - : `string`. Die Content Security Policy (CSP) der Welt. Standardmäßig ist dies die [Standard-CSP für Inhaltsskripte](/de/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#csp_for_content_scripts), die die dynamische Code-Ausführung, wie `eval()`, verbietet.
- `messaging` {{optional_inline}}
  - : `boolean`. Ob die Methoden {{WebExtAPIRef("runtime.sendMessage")}} und {{WebExtAPIRef("runtime.connect")}} der User-Script-Welt zugänglich sind. Standardmäßig werden diese Messaging-APIs verborgen. Die Event-Handler {{WebExtAPIRef("runtime.onUserScriptMessage")}} und {{WebExtAPIRef("runtime.onUserScriptConnect")}} werden ausgelöst, wenn diese Methoden aufgerufen werden.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}
