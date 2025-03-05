---
title: userScripts.RegisteredUserScript
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/RegisteredUserScript
l10n:
  sourceCommit: 3d283cb0a0c6f36ad09ca95f751a30bd3a1fcf4d
---

{{AddonSidebar}}

Ein Objekt, das registrierte Benutzer-Skripte repräsentiert. Wird von {{WebExtAPIRef("userScripts.getScripts","userScripts.getScripts()")}} zurückgegeben und als Eingabe für {{WebExtAPIRef("userScripts.register","userScripts.register()")}} und {{WebExtAPIRef("userScripts.update","userScripts.update()")}} verwendet.

## Typ

Werte dieses Typs sind ein Objekt, das folgende Eigenschaften enthält:

- `allFrames` {{optional_inline}}
  - : `boolean`. Wenn `allFrames` auf `true` gesetzt ist, wird das Skript in alle Frames einer Seite injiziert. Standardmäßig ist es `false`, und das Skript wird nur in das oberste Frame injiziert.
- `id`
  - : `string`. Die ID eines Benutzer-Skripts. Diese Eigenschaft darf nicht mit einem '\_' beginnen, da dies als Präfix für generierte Skript-IDs reserviert ist.
- `js` {{optional_inline}} für {{WebExtAPIRef("userScripts.update()")}} Aufrufe, erforderlich für {{WebExtAPIRef("userScripts.register()")}}
  - : `array` von {{WebExtAPIRef("userScripts.ScriptSource")}}. Die Skripte, die in übereinstimmende Seiten injiziert werden sollen.
- `matches` {{optional_inline}}
  - : `array` von `string`. [Übereinstimmungsmuster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) für die Seiten, auf denen das Skript ausgeführt werden soll. `matches` oder `includeGlobs` muss in {{WebExtAPIRef("userScripts.register()")}} Aufrufen angegeben werden.
- `excludeMatches` {{optional_inline}}
  - : `array` von `string`. [Übereinstimmungsmuster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) für Seiten, auf denen das Skript nicht ausgeführt werden soll.
- `includeGlobs` {{optional_inline}}
  - : `string`. [Glob-Muster](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#globs) für die Seiten, auf denen das Skript ausgeführt werden soll. `matches` oder `includeGlobs` muss in {{WebExtAPIRef("userScripts.register()")}} Aufrufen angegeben werden.
- `excludeGlobs` {{optional_inline}}
  - : `string`. [Glob-Muster](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#globs) für Seiten, auf denen das Skript nicht ausgeführt werden soll.
- `runAt` {{optional_inline}}
  - : {{WebExtAPIRef("extensionTypes.RunAt")}}. Der früheste Zeitpunkt, zu dem das Skript in einen Tab injiziert wird. Standardwert ist `"document_idle"`.
- `world` {{optional_inline}}
  - : {{WebExtAPIRef("userScripts.ExecutionWorld")}}. Die Ausführungsumgebung, die verwendet werden soll, um die Skripte auszuführen. Standard ist `"USER_SCRIPT"`.
- `worldId` {{optional_inline}}
  - : `string`. ID einer Benutzer-Skript-Welt, in der das Skript ausgeführt wird. Nur gültig, wenn `world` `USER_SCRIPT` ist oder weggelassen wird. Wenn `worldId` weggelassen wird, wird das Skript in der Standard-`USER_SCRIPT`-Welt ("") ausgeführt. Werte mit führenden Unterstrichen (`_`) sind reserviert. Die maximale Länge beträgt 256 Zeichen. Eine Welt kann von mehreren Skripten als ihre Ausführungsumgebung genutzt werden. Um das Verhalten einer Welt zu konfigurieren, übergeben Sie ihre `worldId` an {{WebExtAPIRef("userScripts.configureWorld")}}, bevor das erste Skript in dieser Welt ausgeführt wird.

## Browser-Kompatibilität

{{Compat}}
