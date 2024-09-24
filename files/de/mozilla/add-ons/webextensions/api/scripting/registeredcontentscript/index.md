---
title: scripting.RegisteredContentScript
slug: Mozilla/Add-ons/WebExtensions/API/scripting/RegisteredContentScript
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Dieses Objekt enthält Details zu einem Skript, das registriert wird oder bereits registriert ist.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten folgende Eigenschaften:

- `allFrames` {{optional_inline}}
  - : `boolean`. Wenn auf `true` gesetzt, wird das Skript in alle Frames injiziert, auch wenn der Frame nicht der oberste Frame im Tab ist. Jeder Frame wird unabhängig auf URL-Anforderungen überprüft; es wird nicht in untergeordnete Frames injiziert, wenn die URL-Anforderungen nicht erfüllt sind. Standardmäßig ist `false`, was bedeutet, dass nur der oberste Frame berücksichtigt wird.
- `css` {{optional_inline}}
  - : `array` von `string`. Die Liste der CSS-Dateien, die in übereinstimmende Seiten injiziert werden sollen. Sie werden in der Reihenfolge injiziert, in der sie in diesem Array erscheinen.
- `excludeMatches` {{optional_inline}}
  - : `array` von `string`. Array von Seiten, von denen dieses Inhaltskript ausgeschlossen ist, in die es aber ansonsten injiziert würde.
- `id`
  - : `string`. Die ID des Inhaltskripts, wie im API-Aufruf angegeben.
- `js` {{optional_inline}}
  - : `array` von `string`. Array von Pfaden zu JavaScript-Dateien im Erweiterungspaket, die in übereinstimmende Seiten injiziert werden sollen. Skripte werden in der Reihenfolge injiziert, in der sie in diesem Array erscheinen.
- `matches` {{optional_inline}}
  - : `array` von `string`. Array der Seiten, in die dieses Inhaltskript injiziert wird. Muss für {{WebExtAPIRef("scripting.registerContentScripts()")}} angegeben werden.
- `matchOriginAsFallback` {{optional_inline}}
  - : `boolean`. Gibt an, ob Code in `about:`, `data:`, und `blob:` Seiten injiziert wird, wenn ihr Ursprung mit dem Muster in `matches` übereinstimmt, auch wenn der Dokument-Ursprung undurchsichtig ist (aufgrund der Verwendung von CSP oder iframe-Sandbox). Übereinstimmungsmuster in `matches` müssen ein Wildcard-Pfad-Glob angeben. Der Standardwert ist `false`.
- `persistAcrossSessions` {{optional_inline}}
  - : `boolean`. Bestimmt, ob dieses Inhaltskript über Browser-Neustarts und Aktualisierungen sowie Neustarts der Erweiterung hinweg bestehen bleibt. Der Standardwert ist `true`.
- `runAt` {{optional_inline}}
  - : {{WebExtAPIRef("extensionTypes.RunAt")}}. Gibt an, wann JavaScript-Dateien in die Webseite injiziert werden. Der Standardwert ist `document_idle`. In Firefox beeinflusst `runAt` auch den Punkt, an dem das CSS eingefügt wird. In Chrome hat `runAt` keinen Einfluss auf den Punkt, an dem das CSS eingefügt wird.
- `world` {{optional_inline}}
  - : {{WebExtAPIRef("scripting.ExecutionWorld")}}. Die Ausführungsumgebung, in der ein Skript ausgeführt wird. Der Standardwert ist `ISOLATED`.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#type-RegisteredContentScript) API von Chromium.
