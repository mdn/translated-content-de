---
title: "`browsingContext.close`-Befehl"
short-title: close
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/close
l10n:
  sourceCommit: 6cb739dac09c71c59f78190a43d13247835f878e
---

Der [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) `browsingContext.close` des Moduls [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) schließt den angegebenen [Top-Level-Kontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context).

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

Das Feld `params` enthält:

- `context`
  - : Ein String mit der ID des zu schließenden [Top-Level-Kontexts](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context).
    Kontext-IDs werden von Befehlen wie [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) zurückgegeben.
- `promptUnload` {{optional_inline}}
  - : Ein boolescher Wert, der angibt, ob der Browser vor dem Schließen des Kontexts [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)-Event-Handler ausführt.
    - `false`: Der angegebene Kontext wird sofort geschlossen, ohne `beforeunload`-Event-Handler auszuführen. Dies ist der Standardwert.
    - `true`: Der Browser führt `beforeunload`-Event-Handler aus, bevor er den angegebenen Kontext schließt.
      Eine dabei angezeigte Aufforderung wird gemäß der Capability `unhandledPromptBehavior` behandelt, die über den Befehl [`session.new`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new#unhandledpromptbehavior) festgelegt wurde.

### Rückgabewert

Das Feld `result` in der Antwort ist ein leeres Objekt (`{}`).

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Ein erforderlicher Parameter fehlt oder hat einen ungültigen Typ.
    Dieser Fehler wird auch zurückgegeben, wenn der durch `context` angegebene Kontext kein Top-Level-Kontext ist.
- `no such frame`
  - : Es wurde kein Kontext mit der angegebenen Kontext-ID gefunden.

## Beispiele

### Einen Tab mit einer Bestätigungsaufforderung beim Verlassen der Seite schließen

Das folgende Beispiel zeigt, wie Sie einen Tab schließen und zuvor seine [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event)-Event-Handler ausführen lassen.

Angenommen, über eine [WebDriver-BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) wurde mit [`session.new`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) eine Sitzung erstellt, bei der das Feld `default` der Capability `unhandledPromptBehavior` auf `"accept"` gesetzt ist. Dadurch bestätigt der Browser jede Bestätigungsaufforderung automatisch.
Ermitteln Sie zunächst die Kontext-ID mit [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) und senden Sie dann die folgende Nachricht:

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

Da `promptUnload` den Wert `true` hat, führt der Browser vor dem Schließen alle `beforeunload`-Handler der Seite aus.
Falls eine Bestätigungsaufforderung angezeigt wird, wird sie aufgrund der in `session.new` festgelegten Einstellung `unhandledPromptBehavior` automatisch bestätigt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Befehl [`browsingContext.activate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/activate)
- Befehl [`browsingContext.create`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create)
- Befehl [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree)
- Ereignis [`browsingContext.contextDestroyed`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/contextDestroyed)
