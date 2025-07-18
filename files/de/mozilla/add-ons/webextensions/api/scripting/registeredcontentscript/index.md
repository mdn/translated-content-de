---
title: scripting.RegisteredContentScript
slug: Mozilla/Add-ons/WebExtensions/API/scripting/RegisteredContentScript
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Dieses Objekt enthält Details eines zu registrierenden oder registrierten Skripts.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten folgende Eigenschaften:

- `allFrames` {{optional_inline}}
  - : `boolean`. Wenn `true` angegeben ist, wird das Skript in alle Frames eingefügt, selbst wenn der Frame nicht der oberste Frame im Tab ist. Jeder Frame wird unabhängig auf URL-Anforderungen überprüft; es wird nicht in untergeordnete Frames eingefügt, wenn die URL-Anforderungen nicht erfüllt sind. Standardwert ist `false`, was bedeutet, dass nur der oberste Frame berücksichtigt wird.
- `css` {{optional_inline}}
  - : `array` von `string`. Die Liste der CSS-Dateien, die in passende Seiten eingefügt werden sollen. Diese werden in der Reihenfolge eingefügt, in der sie in diesem Array erscheinen.
- `excludeMatches` {{optional_inline}}
  - : `array` von `string`. Array von Seiten, von denen dieses Inhaltsskript ausgeschlossen ist, in die es sonst eingefügt würde.
- `id`
  - : `string`. Die ID des Inhaltsskripts, angegeben im API-Aufruf.
- `js` {{optional_inline}}
  - : `array` von `string`. Array von Pfaden zu JavaScript-Dateien im Erweiterungspaket, die in passende Seiten eingefügt werden. Skripte werden in der Reihenfolge eingefügt, in der sie in diesem Array erscheinen.
- `matches` {{optional_inline}}
  - : `array` von `string`. Array von Seiten, in die dieses Inhaltsskript eingefügt wird. Muss für {{WebExtAPIRef("scripting.registerContentScripts()")}} angegeben werden.
- `matchOriginAsFallback` {{optional_inline}}
  - : `boolean`. Gibt an, ob Code in `about:`, `data:`, und `blob:` Seiten eingefügt wird, wenn ihr Ursprung mit dem Muster in `matches` übereinstimmt, selbst wenn der Dokumentursprung aufgrund der Verwendung von CSP oder iframe-Sandbox undurchsichtig ist. Übereinstimmungsmuster in `matches` müssen ein Wildcard-Pfad-Glob angeben. Standardwert ist `false`.
- `persistAcrossSessions` {{optional_inline}}
  - : `boolean`. Gibt an, ob dieses Inhaltsskript über Browser-Neustarts und Updates sowie Erweiterungs-Neustarts hinweg bestehen bleibt. Standardwert ist `true`.
    > [!NOTE]
    > Wenn eine Erweiterung aktualisiert wird, werden Inhaltsskripte gelöscht. Um Skripte wiederherzustellen, fügen Sie Code zum {{WebExtAPIRef("runtime.onInstalled")}} Ereignishandler der Erweiterung hinzu, der auf den Grund `"update"` reagiert.
- `runAt` {{optional_inline}}
  - : {{WebExtAPIRef("extensionTypes.RunAt")}}. Gibt an, wann JavaScript-Dateien in die Webseite eingefügt werden. Der Standardwert ist `document_idle`. In Firefox beeinflusst `runAt` auch den Punkt, an dem das CSS eingefügt wird. In Chrome beeinflusst `runAt` nicht den Einfügepunkt für CSS.
- `world` {{optional_inline}}
  - : {{WebExtAPIRef("scripting.ExecutionWorld")}}. Die Ausführungsumgebung, in der ein Skript ausgeführt werden soll. Der Standardwert ist `ISOLATED`.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#type-RegisteredContentScript) API.
