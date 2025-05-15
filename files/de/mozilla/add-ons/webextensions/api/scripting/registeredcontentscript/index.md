---
title: scripting.RegisteredContentScript
slug: Mozilla/Add-ons/WebExtensions/API/scripting/RegisteredContentScript
l10n:
  sourceCommit: 123ef40e8161706fc60dea49fa4e290960634984
---

{{AddonSidebar}}

Dieses Objekt enthält Details eines Skripts, das registriert werden soll oder bereits registriert ist.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten folgende Eigenschaften:

- `allFrames` {{optional_inline}}
  - : `boolean`. Wenn auf `true` gesetzt, wird das Skript in alle Frames eingefügt, auch wenn der Frame nicht der oberste Frame im Tab ist. Jeder Frame wird unabhängig auf URL-Anforderungen geprüft; es wird nicht in untergeordnete Frames eingefügt, wenn die URL-Anforderungen nicht erfüllt sind. Standardmäßig auf `false` gesetzt, was bedeutet, dass nur der oberste Frame berücksichtigt wird.
- `css` {{optional_inline}}
  - : `array` von `string`. Die Liste der CSS-Dateien, die in passende Seiten eingefügt werden sollen. Diese werden in der Reihenfolge eingefügt, in der sie in diesem Array erscheinen.
- `excludeMatches` {{optional_inline}}
  - : `array` von `string`. Array von Seiten, von denen dieses Inhaltsskript ausgeschlossen ist, in die es sonst eingefügt würde.
- `id`
  - : `string`. Die ID des Inhaltsskripts, die im API-Aufruf angegeben wird.
- `js` {{optional_inline}}
  - : `array` von `string`. Array von Pfaden zu JavaScript-Dateien im Erweiterungspaket, die in passende Seiten eingefügt werden sollen. Skripte werden in der Reihenfolge eingefügt, in der sie in diesem Array erscheinen.
- `matches` {{optional_inline}}
  - : `array` von `string`. Array der Seiten, in die dieses Inhaltsskript eingefügt wird. Muss für {{WebExtAPIRef("scripting.registerContentScripts()")}} angegeben werden.
- `matchOriginAsFallback` {{optional_inline}}
  - : `boolean`. Ob Code in `about:`, `data:` und `blob:` Seiten eingefügt wird, wenn deren Ursprung dem Muster in `matches` entspricht, auch wenn der Dokumentenursprung nicht sichtbar ist (aufgrund der Verwendung von CSP oder iframe sandbox). Matchmuster in `matches` müssen ein Wildcard-Pfad-Glob angeben. Standardmäßig auf `false` gesetzt.
- `persistAcrossSessions` {{optional_inline}}
  - : `boolean`. Gibt an, ob dieses Inhaltsskript über Browser-Neustarts, Updates und Erweiterungs-Neustarts hinweg bestehen bleibt. Standardmäßig auf `true` gesetzt.
    > [!NOTE]
    > Wenn eine Erweiterung aktualisiert wird, werden Inhaltsskripte gelöscht. Um Skripte wiederherzustellen, fügen Sie Code in den {{WebExtAPIRef("runtime.onInstalled")}} Ereignishandler der Erweiterung hinzu, der auf den Grund `"update"` reagiert.
- `runAt` {{optional_inline}}
  - : {{WebExtAPIRef("extensionTypes.RunAt")}}. Gibt an, wann JavaScript-Dateien in die Webseite eingefügt werden. Der Standardwert ist `document_idle`. In Firefox beeinflusst `runAt` auch den Punkt, an dem das CSS eingefügt wird. In Chrome beeinflusst `runAt` nicht den Punkt der CSS-Einfügung.
- `world` {{optional_inline}}
  - : {{WebExtAPIRef("scripting.ExecutionWorld")}}. Die Ausführungsumgebung, in der ein Skript ausgeführt wird. Der Standardwert ist `ISOLATED`.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#type-RegisteredContentScript) API.
