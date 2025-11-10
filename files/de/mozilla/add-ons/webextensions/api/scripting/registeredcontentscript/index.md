---
title: scripting.RegisteredContentScript
slug: Mozilla/Add-ons/WebExtensions/API/scripting/RegisteredContentScript
l10n:
  sourceCommit: 05aab3e51dc609cbd66be67516e45d20feeefd0c
---

Dieses Objekt enthält Details zu einem Skript, das registriert werden soll oder bereits registriert ist.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten folgende Eigenschaften:

- `allFrames` {{optional_inline}}
  - : `boolean`. Wenn auf `true` gesetzt, wird das Skript in alle Frames eingefügt, auch wenn der Frame nicht der oberste Frame im Tab ist. Jeder Frame wird unabhängig auf URL-Anforderungen überprüft; es wird nicht in untergeordnete Frames eingefügt, wenn die URL-Anforderungen nicht erfüllt sind. Standardmäßig `false`, was bedeutet, dass nur der obere Frame berücksichtigt wird.
- `css` {{optional_inline}}
  - : `array` von `string`. Die Liste der CSS-Dateien, die in passende Seiten eingefügt werden sollen. Diese werden in der Reihenfolge eingefügt, in der sie in diesem Array erscheinen.
- `cssOrigin` {{optional_inline}}
  - : `string`. Der Stil-Ursprung für die Injektion, entweder `"user"`, um das CSS als Benutzer-Stile einzufügen, oder `"author"`, um es als Autor-Stile einzufügen. Standardmäßig `"author"`. Diese Eigenschaft ist in Firefox und Safari nicht case-sensitiv.
- `excludeMatches` {{optional_inline}}
  - : `array` von `string`. Array von Seiten, von denen dieses Inhaltskript ausgeschlossen ist, in die es ansonsten eingefügt würde.
- `id`
  - : `string`. Die ID des Inhaltskripts, die im API-Aufruf angegeben wurde.
- `js` {{optional_inline}}
  - : `array` von `string`. Array der Pfade zu JavaScript-Dateien im Erweiterungspaket, die in passende Seiten eingefügt werden sollen. Skripte werden in der Reihenfolge eingefügt, in der sie in diesem Array erscheinen.
- `matches` {{optional_inline}}
  - : `array` von `string`. Array der Seiten, in die dieses Inhaltskript eingefügt wird. Muss für {{WebExtAPIRef("scripting.registerContentScripts()")}} angegeben werden.
- `matchOriginAsFallback` {{optional_inline}}
  - : `boolean`. Gibt an, ob Code auf `about:`, `data:` und `blob:` Seiten eingefügt wird, wenn ihr Ursprung dem Muster in `matches` entspricht, auch wenn der Dokumenten-Ursprung undurchsichtig ist (aufgrund der Verwendung von CSP oder iframe-Sandbox). Die Match-Muster in `matches` müssen ein Wildcard-Pfad-Glob angeben. Standardmäßig `false`.
- `persistAcrossSessions` {{optional_inline}}
  - : `boolean`. Gibt an, ob dieses Inhaltskript über Browserneustarts und Updates sowie Erweiterungsneustarts hinweg bestehen bleibt. Standardmäßig `true`.
    > [!NOTE]
    > Wenn eine Erweiterung aktualisiert wird, werden Inhaltskripte gelöscht. Um Skripte wiederherzustellen, fügen Sie Code zum {{WebExtAPIRef("runtime.onInstalled")}} Ereignishandler der Erweiterung hinzu, der auf den Grund `"update"` reagiert.
- `runAt` {{optional_inline}}
  - : {{WebExtAPIRef("extensionTypes.RunAt")}}. Gibt an, wann die JavaScript-Dateien in die Webseite eingefügt werden. Der Standardwert ist `document_idle`. In Firefox beeinflusst `runAt` auch den Punkt, an dem das CSS eingefügt wird. In Chrome beeinflusst `runAt` nicht den Einfügepunkt des CSS.
- `world` {{optional_inline}}
  - : {{WebExtAPIRef("scripting.ExecutionWorld")}}. Die Ausführungsumgebung, in der ein Skript ausgeführt wird. Der Standardwert ist `ISOLATED`.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#type-RegisteredContentScript) API.
