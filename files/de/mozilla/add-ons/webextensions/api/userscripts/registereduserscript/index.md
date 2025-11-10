---
title: userScripts.RegisteredUserScript
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/RegisteredUserScript
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ein Objekt, das registrierte Nutzer-Skripte darstellt. Zurückgegeben von {{WebExtAPIRef("userScripts.getScripts","userScripts.getScripts()")}} und verwendet als Eingabe für {{WebExtAPIRef("userScripts.register","userScripts.register()")}} und {{WebExtAPIRef("userScripts.update","userScripts.update()")}}.

## Typ

Werte dieses Typs sind ein Objekt, das folgende Eigenschaften enthält:

- `allFrames` {{optional_inline}}
  - : `boolean`. Wenn `allFrames` `true` ist, wird das Skript in alle Frames einer Seite injiziert. Standardmäßig ist es `false` und das Skript wird nur in den obersten Frame injiziert.
- `id`
  - : `string`. Die ID eines Nutzer-Skripts. Diese Eigenschaft darf nicht mit einem '\_' beginnen, da dies als Präfix für generierte Skript-IDs reserviert ist.
- `js` {{optional_inline}} für {{WebExtAPIRef("userScripts.update()")}} Aufrufe, erforderlich für {{WebExtAPIRef("userScripts.register()")}}
  - : `array` von {{WebExtAPIRef("userScripts.ScriptSource")}}. Die Skripte, die in passende Seiten injiziert werden sollen.
- `matches` {{optional_inline}}
  - : `array` von `string`. [Übereinstimmungsmuster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) für die Seiten, in denen das Skript ausgeführt werden soll. `matches` oder `includeGlobs` müssen in {{WebExtAPIRef("userScripts.register()")}} Aufrufen angegeben werden.
- `excludeMatches` {{optional_inline}}
  - : `array` von `string`. [Übereinstimmungsmuster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) für Seiten, in denen das Skript nicht ausgeführt werden soll.
- `includeGlobs` {{optional_inline}}
  - : `string`. [Glob-Muster](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#globs) für die Seiten, in denen das Skript ausgeführt werden soll. `matches` oder `includeGlobs` müssen in {{WebExtAPIRef("userScripts.register()")}} Aufrufen angegeben werden.
- `excludeGlobs` {{optional_inline}}
  - : `string`. [Glob-Muster](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#globs) für Seiten, in denen das Skript nicht ausgeführt werden soll.
- `runAt` {{optional_inline}}
  - : {{WebExtAPIRef("extensionTypes.RunAt")}}. Der früheste Zeitpunkt, zu dem das Skript in einen Tab injiziert wird. Standardmäßig `"document_idle"`.
- `world` {{optional_inline}}
  - : {{WebExtAPIRef("userScripts.ExecutionWorld")}}. Die Ausführungsumgebung, die zum Ausführen der Skripte verwendet wird. Standardmäßig `"USER_SCRIPT"`.
- `worldId` {{optional_inline}}
  - : `string`. ID einer Nutzer-Skriptwelt, in der das Skript ausgeführt wird. Nur gültig, wenn `world` `USER_SCRIPT` ist oder nicht angegeben wurde. Wenn `worldId` nicht angegeben wird, wird das Skript in der Standard-`USER_SCRIPT`-Welt ("") ausgeführt. Werte mit führendem Unterstrich (`_`) sind reserviert. Die maximale Länge beträgt 256 Zeichen. Eine Welt kann von mehreren Skripten als ihre Ausführungsumgebung verwendet werden. Um das Verhalten einer Welt zu konfigurieren, geben Sie ihre `worldId` an {{WebExtAPIRef("userScripts.configureWorld")}} weiter, bevor das erste Skript in dieser Welt ausgeführt wird.

## Browser-Kompatibilität

{{Compat}}
