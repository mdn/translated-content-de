---
title: scripting.RegisteredContentScript
slug: Mozilla/Add-ons/WebExtensions/API/scripting/RegisteredContentScript
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Dieses Objekt enthält Details eines Skripts, das registriert werden soll oder bereits registriert ist.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten folgende Eigenschaften:

- `allFrames` {{optional_inline}}
  - : `boolean`. Wenn `true` angegeben ist, wird das Skript in alle Frames injiziert, auch wenn der Frame nicht der oberste Frame im Tab ist. Jeder Frame wird unabhängig auf URL-Anforderungen überprüft; es wird nicht in untergeordnete Frames injiziert, wenn die URL-Anforderungen nicht erfüllt sind. Standardmäßig `false`, was bedeutet, dass nur der oberste Frame berücksichtigt wird.
- `css` {{optional_inline}}
  - : `array` von `string`. Die Liste der CSS-Dateien, die in passende Seiten injiziert werden sollen. Sie werden in der Reihenfolge injiziert, in der sie in diesem Array erscheinen.
- `excludeMatches` {{optional_inline}}
  - : `array` von `string`. Array von Seiten, von denen dieses Inhaltsskript ausgeschlossen ist, in die es jedoch sonst injiziert werden würde.
- `id`
  - : `string`. Die ID des Inhaltsskripts, die im API-Aufruf angegeben wird.
- `js` {{optional_inline}}
  - : `array` von `string`. Array von Pfaden zu JavaScript-Dateien im Erweiterungspaket, die in passende Seiten injiziert werden sollen. Skripte werden in der Reihenfolge injiziert, in der sie in diesem Array erscheinen.
- `matches` {{optional_inline}}
  - : `array` von `string`. Array der Seiten, auf denen dieses Inhaltsskript injiziert wird. Muss für {{WebExtAPIRef("scripting.registerContentScripts()")}} angegeben werden.
- `matchOriginAsFallback` {{optional_inline}}
  - : `boolean`. Ob Code in `about:`, `data:` und `blob:` Seiten injiziert wird, wenn deren Ursprung mit dem Muster in `matches` übereinstimmt, auch wenn der Dokumentenursprung undurchsichtig ist (aufgrund der Verwendung von CSP oder iframe-Sandkasten). Die Übereinstimmungsmuster in `matches` müssen ein Platzhalter-Pfad-Grobmuster angeben. Standardmäßig `false`.
- `persistAcrossSessions` {{optional_inline}}
  - : `boolean`. Gibt an, ob dieses Inhaltsskript über Browser-Neustarts und Updates sowie Erweiterungs-Neustarts hinweg bestehen bleibt. Standardmäßig `true`.
- `runAt` {{optional_inline}}
  - : {{WebExtAPIRef("extensionTypes.RunAt")}}. Gibt an, wann JavaScript-Dateien in die Webseite injiziert werden. Der Standardwert ist `document_idle`. In Firefox beeinflusst `runAt` auch den Punkt, an dem das CSS eingefügt wird. In Chrome beeinflusst `runAt` nicht den Punkt der CSS-Einfügung.
- `world` {{optional_inline}}
  - : {{WebExtAPIRef("scripting.ExecutionWorld")}}. Die Ausführungsumgebung, in der ein Skript ausgeführt wird. Der Standardwert ist `ISOLATED`.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#type-RegisteredContentScript) API.
