---
title: "`browsingContext.handleUserPrompt`-Befehl"
short-title: handleUserPrompt
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/handleUserPrompt
l10n:
  sourceCommit: e5999f9b30c19ca727cbf28ec254f2111f7d36c8
---

Der `browsingContext.handleUserPrompt` [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) des [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) Moduls schließt ein offenes Benutzer-Prompt: ein [`alert()`](/de/docs/Web/API/Window/alert), [`confirm()`](/de/docs/Web/API/Window/confirm), [`prompt()`](/de/docs/Web/API/Window/prompt) oder [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) Prompt.

## Syntax

```json-nolint
/* With required parameters */
{
  "method": "browsingContext.handleUserPrompt",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f"
  }
}

/* With required and optional parameters */
{
  "method": "browsingContext.handleUserPrompt",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "accept": true,
    "userText": "some input text"
  }
}
```

### Parameter

Das Feld `params` enthält:

- `accept` {{optional_inline}}
  - : Ein boolescher Wert, der angibt, ob das Prompt akzeptiert oder abgelehnt werden soll; die Wirkung hängt vom Typ des Prompts ab.

    Bei einem [`alert()`](/de/docs/Web/API/Window/alert) hat dieser Wert keine Wirkung und das Prompt wird immer bestätigt. Für die anderen Prompt-Typen:

    - `true`: Dies ist der Standardwert.

      Bei einem [`confirm()`](/de/docs/Web/API/Window/confirm) wird die Aktion bestätigt.
      Bei einem [`prompt()`](/de/docs/Web/API/Window/prompt) wird das Prompt mit dem Wert von `userText` abgeschickt.
      Bei einem [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) Prompt wird die Navigation bestätigt.

    - `false`:

      Bei einem `confirm()` wird die Aktion abgelehnt.
      Bei einem `prompt()` wird das Prompt abgebrochen.
      Bei einem `beforeunload` Prompt wird die Navigation abgelehnt.
- `context`
  - : Ein String, der die ID des Kontexts enthält, der das Benutzer-Prompt zu schließen hat.
    Kontext-IDs werden durch Befehle wie [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) zurückgegeben.
- `userText` {{optional_inline}}
  - : Ein String, der den Wert angibt, der für ein `prompt()` abgeschickt werden soll. Dieses Feld wird bei anderen Prompt-Typen als `prompt()` ignoriert.
    Wenn nicht angegeben, ist der Standardwert ein leerer String.

### Rückgabewert

Das `result` Feld in der Antwort ist ein leeres Objekt (`{}`).
Das [`browsingContext.userPromptClosed`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/userPromptClosed) Ereignis wird ausgelöst, wenn das Prompt geschlossen wird.

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Ein erforderlicher Parameter fehlt oder hat einen ungültigen Typ.

- `no such frame`
  - : Kein Kontext mit der angegebenen Kontext-ID wurde gefunden.

- `no such alert`
  - : Der durch `context` spezifizierte Kontext hat kein Benutzer-Prompt.

## Beispiele

### Akzeptieren eines `confirm()`-Prompts

Mit einer [WebDriver BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und einer [aktiven Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), nehmen wir an, eine Seite ruft `confirm()` auf, was ein Prompt öffnet, das die Seite blockiert.

Hören Sie auf das [`browsingContext.userPromptOpened`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/userPromptOpened) Ereignis, um das Prompt zu erkennen, und senden Sie dann die folgende Nachricht, um es zu akzeptieren:

```json
{
  "id": 1,
  "method": "browsingContext.handleUserPrompt",
  "params": {
    "context": "5e5e96e8-5247-4f22-9b35-a4a2d841cbaa",
    "accept": true
  }
}
```

Der Browser schließt das Prompt und antwortet wie folgt:

```json
{
  "id": 1,
  "type": "success",
  "result": {}
}
```

### Akzeptieren eines `prompt()` mit Text

Mit derselben Verbindung und Sitzung, nehmen wir an, eine Seite ruft `prompt()` auf und zeigt den resultierenden Texteingabedialog.
Senden Sie die folgende Nachricht, um einen Wert zu übermitteln:

```json
{
  "id": 2,
  "method": "browsingContext.handleUserPrompt",
  "params": {
    "context": "5e5e96e8-5247-4f22-9b35-a4a2d841cbaa",
    "accept": true,
    "userText": "example input"
  }
}
```

Der Browser antwortet wie folgt:

```json
{
  "id": 2,
  "type": "success",
  "result": {}
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) Befehl
- [`browsingContext.navigate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) Befehl
- [`browsingContext.reload`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/reload) Befehl
- [`browsingContext.userPromptOpened`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/userPromptOpened) Ereignis
- [`browsingContext.userPromptClosed`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/userPromptClosed) Ereignis
