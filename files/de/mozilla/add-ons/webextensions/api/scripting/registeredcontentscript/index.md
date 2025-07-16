---
title: scripting.RegisteredContentScript
slug: Mozilla/Add-ons/WebExtensions/API/scripting/RegisteredContentScript
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Dieses Objekt enthält Details eines Skripts, das registriert wird oder bereits registriert ist.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten folgende Eigenschaften:

- `allFrames` {{optional_inline}}
  - : `boolean`. Wenn als `true` angegeben, wird das Skript in alle Frames injiziert, auch wenn der Frame nicht der oberste Frame im Tab ist. Jeder Frame wird unabhängig auf URL-Anforderungen überprüft; das Skript wird nicht in Kinder-Frames injiziert, wenn die URL-Anforderungen nicht erfüllt sind. Standard ist `false`, was bedeutet, dass nur der oberste Frame übereinstimmt.
- `css` {{optional_inline}}
  - : `array` von `string`. Die Liste der CSS-Dateien, die in passende Seiten injiziert werden. Diese werden in der Reihenfolge injiziert, in der sie in diesem Array erscheinen.
- `excludeMatches` {{optional_inline}}
  - : `array` von `string`. Array von Seiten, auf denen dieses Inhalts-Skript ausgeschlossen ist, in die es sonst injiziert würde.
- `id`
  - : `string`. Die ID des Inhalts-Skripts, die im API-Aufruf angegeben wird.
- `js` {{optional_inline}}
  - : `array` von `string`. Array von Pfaden zu JavaScript-Dateien im Erweiterungspaket, die in passende Seiten injiziert werden. Skripte werden in der Reihenfolge injiziert, in der sie in diesem Array erscheinen.
- `matches` {{optional_inline}}
  - : `array` von `string`. Array von Seiten, in die dieses Inhalts-Skript injiziert wird. Muss für {{WebExtAPIRef("scripting.registerContentScripts()")}} angegeben werden.
- `matchOriginAsFallback` {{optional_inline}}
  - : `boolean`. Ob Code in `about:`, `data:` und `blob:` Seiten injiziert wird, wenn ihr Ursprung mit dem Muster in `matches` übereinstimmt, auch wenn der Dokumentursprung aufgrund der Verwendung von CSP oder iframe-Sandbox undurchsichtig ist. Übereinstimmungsmuster in `matches` müssen ein Wildcard-Pfad-Glob angeben. Standard ist `false`.
- `persistAcrossSessions` {{optional_inline}}
  - : `boolean`. Gibt an, ob dieses Inhalts-Skript über Browser-Neustarts und Updates sowie Erweiterungs-Neustarts hinweg bestehen bleibt. Standard ist `true`.
    > [!NOTE]
    > Wenn eine Erweiterung aktualisiert wird, werden Inhalts-Skripte gelöscht. Um Skripte wiederherzustellen, fügen Sie dem {{WebExtAPIRef("runtime.onInstalled")}} Ereignishandler der Erweiterung Code hinzu, der auf den Grund `"update"` reagiert.
- `runAt` {{optional_inline}}
  - : {{WebExtAPIRef("extensionTypes.RunAt")}}. Gibt an, wann JavaScript-Dateien in die Webseite injiziert werden. Der Standardwert ist `document_idle`. In Firefox beeinflusst `runAt` auch den Punkt, an dem das CSS eingefügt wird. In Chrome beeinflusst `runAt` nicht den CSS-Einfügepunkt.
- `world` {{optional_inline}}
  - : {{WebExtAPIRef("scripting.ExecutionWorld")}}. Die Ausführungsumgebung, in der ein Skript ausgeführt wird. Der Standardwert ist `ISOLATED`.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#type-RegisteredContentScript) API von Chromium.
