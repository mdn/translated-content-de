---
title: userScripts.RegisteredUserScript
slug: Mozilla/Add-ons/WebExtensions/API/userScripts/RegisteredUserScript
l10n:
  sourceCommit: 814f49dc14eb8c8a15c6c3bdc6c83d24ed865cdf
---

{{AddonSidebar}}

Ein Objekt, das registrierte Benutzerskripte repräsentiert. Zurückgegeben von {{WebExtAPIRef("userScripts.getScripts","getScripts()")}} und verwendet als Eingabe für {{WebExtAPIRef("userScripts.register","register()")}} und {{WebExtAPIRef("userScripts.update","update()")}}.

## Typ

Werte dieses Typs sind Objekte, die diese Eigenschaften enthalten:

- `allFrames` {{optional_inline}}
  - : `boolean`. Wenn `allFrames` `true` ist, wird das Skript in alle Frames einer Seite injiziert. Standardmäßig ist es `false` und das Skript wird nur in den obersten Frame injiziert.
- `id`
  - : `string`. Die ID eines Benutzerskripts. Diese Eigenschaft darf nicht mit einem '\_' beginnen, das als Präfix für generierte Skript-IDs reserviert ist.
- `js` {{optional_inline}} für {{WebExtAPIRef("userScripts.update()")}} Aufrufe, erforderlich für {{WebExtAPIRef("userScripts.register()")}}
  - : `array` von {{WebExtAPIRef("userScripts.ScriptSource")}}. Die Skripte, die in passende Seiten injiziert werden sollen.
- `matches` {{optional_inline}}
  - : `array` von `string`. [Match-Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) für die Seiten, auf denen das Skript ausgeführt werden soll. `matches` oder `includeGlobs` muss in {{WebExtAPIRef("userScripts.register()")}} Aufrufen angegeben werden.
- `excludeMatches` {{optional_inline}}
  - : `array` von `string`. [Match-Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) für Seiten, auf denen das Skript nicht ausgeführt werden darf.
- `includeGlobs` {{optional_inline}}
  - : `string`. Glob-Muster für die Seiten, auf denen das Skript ausgeführt werden soll. `matches` oder `includeGlobs` muss in {{WebExtAPIRef("userScripts.register()")}} Aufrufen angegeben werden.
- `excludeGlobs` {{optional_inline}}
  - : `string`. Glob-Muster für Seiten, auf denen das Skript nicht ausgeführt werden darf.
- `runAt` {{optional_inline}}
  - : {{WebExtAPIRef("extensionTypes.RunAt")}}. Der früheste Zeitpunkt, zu dem das Skript in einen Tab injiziert wird. Standardmäßig `"document_idle"`.
- `world` {{optional_inline}}
  - : {{WebExtAPIRef("userScripts.ExecutionWorld")}}. Die Ausführungsumgebung, die für die Ausführung der Skripte verwendet wird. Standardmäßig `"USER_SCRIPT"`.
- `worldId` {{optional_inline}}
  - : `string`. ID einer Benutzerskript-Welt, in der das Skript ausgeführt wird. Nur gültig, wenn `world` `USER_SCRIPT` ist oder weggelassen wird. Wenn `worldId` weggelassen wird, wird das Skript in der Standard-`USER_SCRIPT`-Welt ("") ausgeführt. Werte mit führenden Unterstrichen (`_`) sind reserviert. Die maximale Länge beträgt 256 Zeichen. Eine Welt kann von mehreren Skripten als deren Ausführungsumgebung verwendet werden. Um das Verhalten einer Welt zu konfigurieren, übergeben Sie ihre `worldId` an {{WebExtAPIRef("userScripts.configureWorld")}} bevor das erste Skript in dieser Welt ausgeführt wird.

## Browser-Kompatibilität

{{Compat}}
