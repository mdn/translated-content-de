---
title: Ereignis `browsingContext.userPromptClosed`
short-title: userPromptClosed
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/userPromptClosed
l10n:
  sourceCommit: 6cb739dac09c71c59f78190a43d13247835f878e
---

Das [Ereignis](/de/docs/Web/WebDriver/Reference/BiDi/Modules#events) `browsingContext.userPromptClosed` des Moduls [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) wird ausgelöst, wenn ein Benutzerdialog im Browser geschlossen wird.

## Ereignisdaten

Das Feld `params` in der Ereignisbenachrichtigung ist ein Objekt mit den folgenden Feldern:

- `accepted`
  - : Ein boolescher Wert, der angibt, ob der Benutzerdialog bestätigt wurde.
    - `true`: Der Dialog wurde bestätigt, beispielsweise durch Klicken auf „OK“ oder durch einen [`browsingContext.handleUserPrompt`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/handleUserPrompt)-Befehl, bei dem `accept` auf `true` gesetzt ist.
    - `false`: Der Dialog wurde verworfen, beispielsweise durch Klicken auf „Abbrechen“ oder durch einen [`browsingContext.handleUserPrompt`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/handleUserPrompt)-Befehl, bei dem `accept` auf `false` gesetzt ist.

    Der Browser kann den Dialog auch ohne ausdrücklichen `handleUserPrompt`-Befehl selbst schließen. Dies richtet sich nach der für die Sitzung festgelegten Capability [`unhandledPromptBehavior`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new#unhandledpromptbehavior), die mit [`browser.createUserContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) für einen einzelnen Benutzerkontext überschrieben werden kann.
- `context`
  - : Eine Zeichenfolge mit der ID des [Kontexts](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts), in dem der Benutzerdialog angezeigt wurde.
- `type`
  - : Eine Zeichenfolge, die angibt, welche Art von Benutzerdialog geschlossen wurde.
    Sie hat einen der folgenden Werte:
    - `"alert"`: Ein [`alert()`](/de/docs/Web/API/Window/alert)-Dialog.
    - `"beforeunload"`: Ein Dialog, der durch das Ereignis [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) angezeigt wird.
    - `"confirm"`: Ein [`confirm()`](/de/docs/Web/API/Window/confirm)-Dialog.
    - `"prompt"`: Ein [`prompt()`](/de/docs/Web/API/Window/prompt)-Dialog.
- `userText` {{optional_inline}}
  - : Eine Zeichenfolge mit dem Text, der vor dem Schließen im Dialog stand.
    Dieses Feld ist nur enthalten, wenn das Feld [`type`](#type) den Wert `"prompt"` und das Feld [`accepted`](#accepted) den Wert `true` hat.

## Beispiele

### Ereignis empfangen, wenn ein alert-Dialog bestätigt wird

Angenommen, über eine [WebDriver-BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) wird mit [`session.new`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) eine Sitzung erstellt, bei der das Feld `default` der Capability `unhandledPromptBehavior` auf `"ignore"` gesetzt ist. Dadurch lässt der Browser Dialoge geöffnet, damit der Client sie behandeln kann. Außerdem sei eine [Subscription](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) für `browsingContext.userPromptClosed` aktiv.

Angenommen, ein `alert()`-Dialog wird bestätigt.
Der Browser sendet die folgende Benachrichtigung:

```json
{
  "type": "event",
  "method": "browsingContext.userPromptClosed",
  "params": {
    "accepted": true,
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "type": "alert"
  }
}
```

### Ereignis empfangen, wenn ein prompt-Dialog nach der Texteingabe geschlossen wird

Angenommen, bei derselben Verbindung, Sitzung und Subscription wie im ersten Beispiel wird ein `prompt()`-Dialog bestätigt, nachdem Text eingegeben wurde.
Der Browser sendet die folgende Benachrichtigung:

```json
{
  "type": "event",
  "method": "browsingContext.userPromptClosed",
  "params": {
    "accepted": true,
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "type": "prompt",
    "userText": "Jane Doe"
  }
}
```

### Ereignis empfangen, wenn ein beforeunload-Dialog bestätigt wird

Angenommen, bei derselben Verbindung, Sitzung und Subscription wie im ersten Beispiel verwendet der Client den Befehl [`browsingContext.handleUserPrompt`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/handleUserPrompt) mit `accept` auf `true`, um einen `beforeunload`-Dialog zu schließen.

Wenn der Dialog geschlossen wird, sendet der Browser die folgende Benachrichtigung:

```json
{
  "type": "event",
  "method": "browsingContext.userPromptClosed",
  "params": {
    "accepted": true,
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "type": "beforeunload"
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Ereignis [`browsingContext.userPromptOpened`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/userPromptOpened)
- Befehl [`browsingContext.handleUserPrompt`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/handleUserPrompt)
- Befehl [`session.subscribe`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe)
