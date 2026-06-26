---
title: "`browsingContext.close` Befehl"
short-title: close
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/close
l10n:
  sourceCommit: 50e846e7423814d7d0c3c3630ff8e793b38cad8a
---

Der `browsingContext.close` [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) des [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) Moduls schließt den angegebenen [Top-Level-Kontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context).

## Syntax

```json-nolint
/* With required parameters */
{
  "method": "browsingContext.close",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f"
  }
}

/* With required and optional parameters */
{
  "method": "browsingContext.close",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "promptUnload": true
  }
}
```

### Parameter

Das `params` Feld enthält:

- `context`
  - : Ein String, der die ID des zu schließenden [Top-Level-Kontexts](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) enthält.
    Kontext-IDs werden durch Befehle wie [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) zurückgegeben.
- `promptUnload` {{optional_inline}}
  - : Ein Boolean, der angibt, ob der Browser [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) Event-Handler ausführt, bevor der Kontext geschlossen wird.
    - `false`: Der angegebene Kontext schließt sofort, ohne `beforeunload` Event-Handler auszuführen. Dies ist der Standardwert.
    - `true`: Der Browser führt `beforeunload` Event-Handler aus, bevor der angegebene Kontext geschlossen wird.
      Jegliche resultierenden Eingabeforderungen werden entsprechend der im [`session.new`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new#unhandledpromptbehavior) Befehl spezifizierten `unhandledPromptBehavior` Fähigkeit behandelt.

### Rückgabewert

Das `result` Feld in der Antwort ist ein leeres Objekt (`{}`).

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Ein erforderlicher Parameter fehlt oder hat einen ungültigen Typ.
    Dieser Fehler wird auch zurückgegeben, wenn der durch `context` spezifizierte Kontext kein Top-Level-Kontext ist.
- `no such frame`
  - : Kein Kontext mit der angegebenen Kontext-ID gefunden.

## Beispiele

### Schließen eines Tabs mit einer Page Unload-Eingabeforderung

Das folgende Beispiel zeigt, wie ein Tab geschlossen wird und seine [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) Event-Handler vor dem Schließen ausgeführt werden.

Mit einer [WebDriver BiDi Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection), nehmen Sie an, dass eine Sitzung über [`session.new`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) mit `unhandledPromptBehavior` auf `"accept"` gesetzt erstellt wurde.
Zuerst erhalten Sie die Kontext-ID mit [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree), dann senden Sie die folgende Nachricht:

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
Die Bestätigungsaufforderung, falls angezeigt, wird automatisch basierend auf der in `session.new` definierten `unhandledPromptBehavior` Einstellung akzeptiert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`browsingContext.activate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/activate) Befehl
- [`browsingContext.create`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create) Befehl
- [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) Befehl
- [`browsingContext.contextDestroyed`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/contextDestroyed) Ereignis
