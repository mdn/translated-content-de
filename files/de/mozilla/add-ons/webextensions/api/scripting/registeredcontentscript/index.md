---
title: scripting.RegisteredContentScript
slug: Mozilla/Add-ons/WebExtensions/API/scripting/RegisteredContentScript
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Dieses Objekt enthält Details eines zu registrierenden oder bereits registrierten Skripts.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten folgende Eigenschaften:

- `allFrames` {{optional_inline}}
  - : `boolean`. Wenn `true` festgelegt wird, wird das Skript in alle Frames injiziert, auch wenn der Frame nicht das oberste Frame im Tab ist. Jeder Frame wird unabhängig auf URL-Anforderungen überprüft; es wird nicht in untergeordnete Frames injiziert, wenn die URL-Anforderungen nicht erfüllt sind. Standard ist `false`, was bedeutet, dass nur das oberste Frame übereinstimmt.
- `css` {{optional_inline}}
  - : `array` von `string`. Die Liste der CSS-Dateien, die in die passenden Seiten injiziert werden. Sie werden in der Reihenfolge injiziert, in der sie in diesem Array erscheinen.
- `excludeMatches` {{optional_inline}}
  - : `array` von `string`. Array von Seiten, aus denen dieses Inhaltsskript ausgeschlossen ist, aber ansonsten injiziert würde.
- `id`
  - : `string`. Die ID des Inhaltsskripts, wie in der API-Aufruf angegeben.
- `js` {{optional_inline}}
  - : `array` von `string`. Array von Pfaden zu JavaScript-Dateien im Erweiterungspaket, die in die passenden Seiten injiziert werden. Skripte werden in der Reihenfolge injiziert, in der sie in diesem Array erscheinen.
- `matches` {{optional_inline}}
  - : `array` von `string`. Array von Seiten, in die dieses Inhaltsskript injiziert wird. Muss angegeben werden für {{WebExtAPIRef("scripting.registerContentScripts()")}}.
- `matchOriginAsFallback` {{optional_inline}}
  - : `boolean`. Ob Code in `about:`, `data:` und `blob:` Seiten injiziert wird, wenn deren Ursprung dem Muster in `matches` entspricht, selbst wenn der Dokumentursprung intransparent ist (aufgrund der Verwendung von CSP oder iframe-Sandbox). Übereinstimmungsmuster in `matches` müssen ein Platzhalterpfad-Glob angeben. Standard ist `false`.
- `persistAcrossSessions` {{optional_inline}}
  - : `boolean`. Gibt an, ob dieses Inhaltsskript über Browser-Neustarts und Aktualisierungen sowie Erweiterungs-Neustarts hinweg bestehen bleibt. Standard ist `true`.
- `runAt` {{optional_inline}}
  - : {{WebExtAPIRef("extensionTypes.RunAt")}}. Gibt an, wann JavaScript-Dateien in die Webseite injiziert werden. Der Standardwert ist `document_idle`. In Firefox beeinflusst `runAt` auch den Punkt, an dem das CSS eingefügt wird. In Chrome beeinflusst `runAt` nicht den Punkt der CSS-Einfügung.
- `world` {{optional_inline}}
  - : {{WebExtAPIRef("scripting.ExecutionWorld")}}. Die Ausführungsumgebung, in der ein Skript ausgeführt wird. Der Standardwert ist `ISOLATED`.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#type-RegisteredContentScript) API von Chromium.
