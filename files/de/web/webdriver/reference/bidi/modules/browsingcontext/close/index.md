---
title: "`browsingContext.close` Befehl"
short-title: close
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/close
l10n:
  sourceCommit: 1db2c61210860e17e452e21122280b76a7dcffb6
---

Der `browsingContext.close` [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) des [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) Moduls schließt den angegebenen [Top-Level-Kontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context).

## Syntax

```json-nolint
{
  "method": "browsingContext.close",
  "params": {
    "context": "<contextId>"
  }
}
```

### Parameter

Das `params`-Feld enthält:

- `context`
  - : Ein String, der die ID des zu schließenden [Top-Level-Kontexts](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) enthält.
    Kontext-IDs werden von Befehlen wie [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) zurückgegeben.
- `promptUnload` {{optional_inline}}
  - : Ein Boolean, der angibt, ob der Browser [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) Ereignishandler ausführt, bevor der Kontext geschlossen wird.
    Der Standardwert ist `false`.
    - `false`: Der angegebene Kontext wird sofort geschlossen, ohne `beforeunload`-Ereignishandler auszuführen.
    - `true`: Der Browser führt `beforeunload`-Ereignishandler aus, bevor der angegebene Kontext geschlossen wird.
      Jeder resultierende Prompt wird gemäß der durch den [`session.new`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new#unhandledpromptbehavior) Befehl angegebenen Fähigkeit `unhandledPromptBehavior` behandelt.

### Rückgabewert

Das `result`-Feld in der Antwort ist ein leeres Objekt (`{}`).

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Ein erforderlicher Parameter fehlt oder hat einen ungültigen Typ.
    Dieser Fehler wird auch zurückgegeben, wenn der durch `context` angegebene Kontext kein Top-Level-Kontext ist.
- `no such frame`
  - : Kein Kontext mit der angegebenen Kontext-ID gefunden.

## Beispiele

### Schließen eines Tabs mit einem Page-Unload-Prompt

Das folgende Beispiel zeigt, wie Sie einen Tab schließen und dessen [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) Ereignishandler vor dem Schließen ausführen lassen können.

Angenommen, eine Sitzung wird über [`session.new`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) mit `unhandledPromptBehavior` auf `"accept"` gesetzt durch eine [WebDriver BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection). Zuerst erhalten Sie die Kontext-ID mit [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree), und senden dann die folgende Nachricht:

```json
{
  "id": 1,
  "method": "browsingContext.close",
  "params": {
    "context": "5e5e96e8-5247-4f22-9b35-a4a2d841cbaa",
    "promptUnload": true
  }
}
```

Der Browser schließt den Kontext und antwortet wie folgt:

```json
{
  "id": 1,
  "type": "success",
  "result": {}
}
```

Da `promptUnload` `true` ist, führt der Browser alle `beforeunload` Handler auf der Seite aus, bevor er schließt.
Der Bestätigungsprompt, falls angezeigt, wird basierend auf der `unhandledPromptBehavior`-Einstellung, die in `session.new` definiert ist, automatisch akzeptiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`browsingContext.activate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/activate) Befehl
- [`browsingContext.create`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create) Befehl
- [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) Befehl
- [`browsingContext.contextDestroyed`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/contextDestroyed) Ereignis
