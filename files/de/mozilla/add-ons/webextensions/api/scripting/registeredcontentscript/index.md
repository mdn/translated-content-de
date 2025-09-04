---
title: scripting.RegisteredContentScript
slug: Mozilla/Add-ons/WebExtensions/API/scripting/RegisteredContentScript
l10n:
  sourceCommit: d48c7a79d5a56ff10644fc79990cb75b04a5f626
---

Dieses Objekt enthält Details zu einem zu registrierenden oder bereits registrierten Skript.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten folgende Eigenschaften:

- `allFrames` {{optional_inline}}
  - : `boolean`. Wenn auf `true` gesetzt, wird das Skript in alle Frames injiziert, auch wenn das Frame nicht das oberste Frame im Tab ist. Jedes Frame wird unabhängig auf URL-Anforderungen überprüft; es wird nicht in untergeordnete Frames injiziert, wenn die URL-Anforderungen nicht erfüllt sind. Standardmäßig `false`, was bedeutet, dass nur das oberste Frame übereinstimmt.
- `css` {{optional_inline}}
  - : `array` von `string`. Die Liste der CSS-Dateien, die in passende Seiten injiziert werden sollen. Diese werden in der Reihenfolge injiziert, in der sie in diesem Array erscheinen.
- `cssOrigin` {{optional_inline}}
  - : `string`. Der Ursprung des zu injizierenden CSS. Dies beeinflusst die Kaskadierung (Priorität) der injizierten Stylesheets. Nimmt die Werte `"author"` und `"user"` an. Standardmäßig `"author"`.
- `excludeMatches` {{optional_inline}}
  - : `array` von `string`. Array von Seiten, von denen dieses Inhaltsskript ausgeschlossen wird, aber ansonsten injiziert werden würde.
- `id`
  - : `string`. Die ID des Inhaltsskripts, die im API-Aufruf angegeben wird.
- `js` {{optional_inline}}
  - : `array` von `string`. Array von Pfaden zu JavaScript-Dateien im Erweiterungspaket, die in passende Seiten injiziert werden. Skripte werden in der Reihenfolge injiziert, in der sie in diesem Array erscheinen.
- `matches` {{optional_inline}}
  - : `array` von `string`. Array der Seiten, in die dieses Inhaltsskript injiziert wird. Muss angegeben werden für {{WebExtAPIRef("scripting.registerContentScripts()")}}.
- `matchOriginAsFallback` {{optional_inline}}
  - : `boolean`. Ob Code in `about:`, `data:` und `blob:` Seiten injiziert wird, wenn ihr Ursprung mit dem Muster in `matches` übereinstimmt, auch wenn der Dokumentenursprung undurchsichtig ist (aufgrund der Verwendung von CSP oder iframe-Sandbox). Übereinstimmungsmuster in `matches` müssen ein Wildcard-Pfad-Glob angeben. Standardmäßig `false`.
- `persistAcrossSessions` {{optional_inline}}
  - : `boolean`. Gibt an, ob dieses Inhaltsskript über Browser-Neustarts und Updates sowie Erweiterungs-Neustarts hinweg bestehen bleibt. Standardmäßig `true`.
    > [!NOTE]
    > Wenn eine Erweiterung aktualisiert wird, werden Inhaltsskripte entfernt. Um Skripte wiederherzustellen, fügen Sie Code in den {{WebExtAPIRef("runtime.onInstalled")}}-Ereignishandler ein, der auf den Grund `"update"` reagiert.
- `runAt` {{optional_inline}}
  - : {{WebExtAPIRef("extensionTypes.RunAt")}}. Gibt an, wann JavaScript-Dateien in die Webseite injiziert werden. Der Standardwert ist `document_idle`. In Firefox beeinflusst `runAt` auch den Punkt, an dem das CSS eingefügt wird. In Chrome beeinflusst `runAt` nicht den Einfügepunkt des CSS.
- `world` {{optional_inline}}
  - : {{WebExtAPIRef("scripting.ExecutionWorld")}}. Die Ausführungsumgebung, in der ein Skript ausgeführt werden soll. Der Standardwert ist `ISOLATED`.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#type-RegisteredContentScript)-API von Chromium.
