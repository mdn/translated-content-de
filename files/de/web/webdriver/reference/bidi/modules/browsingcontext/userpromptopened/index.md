---
title: "`browsingContext.userPromptOpened`-Ereignis"
short-title: userPromptOpened
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/userPromptOpened
l10n:
  sourceCommit: 6cb739dac09c71c59f78190a43d13247835f878e
---

Das [Ereignis](/de/docs/Web/WebDriver/Reference/BiDi/Modules#events) `browsingContext.userPromptOpened` des Moduls [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) wird ausgelöst, wenn im Browser ein Dialog für eine Benutzereingabe geöffnet wird.

## Ereignisdaten

Das Feld `params` in der Ereignisbenachrichtigung ist ein Objekt mit den folgenden Feldern:

- `context`
  - : Ein String mit der ID des [Kontexts](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts), in dem der Dialog geöffnet wurde.
- `defaultValue` {{optional_inline}}
  - : Ein String mit dem Standardwert des [`prompt()`](/de/docs/Web/API/Window/prompt)-Dialogs.
    Dieses Feld ist nur enthalten, wenn der Wert des Feldes [`type`](#type) `"prompt"` ist und der Standardwert nicht `null` ist.
- `handler`
  - : Ein String, der angibt, wie der Dialog behandelt wird.
    Das Verhalten wird durch die Capability [`unhandledPromptBehavior`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new#unhandledpromptbehavior) für die Sitzung festgelegt oder für einen einzelnen Benutzerkontext mit [`browser.createUserContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) überschrieben.
    Der String hat einen der folgenden Werte:
    - `"accept"`: Der Browser bestätigt den Dialog.
    - `"dismiss"`: Der Browser schließt den Dialog ohne Bestätigung.
    - `"ignore"`: Der Browser lässt den Dialog geöffnet, damit der Client ihn mit [`browsingContext.handleUserPrompt`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/handleUserPrompt) schließen kann.
- `message`
  - : Ein String mit der im Dialog angezeigten Nachricht.
- `type`
  - : Ein String, der die Art des geöffneten Dialogs angibt.
    Der String hat einen der folgenden Werte:
    - `"alert"`: Ein [`alert()`](/de/docs/Web/API/Window/alert)-Dialog.
    - `"beforeunload"`: Ein Dialog, der durch das Ereignis [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) angezeigt wird.
    - `"confirm"`: Ein [`confirm()`](/de/docs/Web/API/Window/confirm)-Dialog.
    - `"prompt"`: Ein [`prompt()`](/de/docs/Web/API/Window/prompt)-Dialog.

## Beispiele

### Ein Ereignis beim Öffnen eines alert-Dialogs empfangen

Angenommen, über eine [WebDriver-BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) wird mit [`session.new`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) eine Sitzung erstellt, bei der das Feld `default` der Capability [`unhandledPromptBehavior`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new#unhandledpromptbehavior) auf `"ignore"` gesetzt ist. Dadurch lässt der Browser Dialoge geöffnet, damit der Client sie behandeln kann. Nehmen wir außerdem an, dass eine [Subscription](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) für `browsingContext.userPromptOpened` aktiv ist.

Angenommen, eine Seite ruft `alert("Are you sure?")` auf.
Der Browser sendet die folgende Benachrichtigung:

```json
{
  "type": "event",
  "method": "browsingContext.userPromptOpened",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "handler": "ignore",
    "message": "Are you sure?",
    "type": "alert"
  }
}
```

### Ein Ereignis beim Öffnen eines prompt-Dialogs mit Standardwert empfangen

Angenommen, eine Seite ruft über dieselbe Verbindung, Sitzung und Subscription wie im ersten Beispiel `prompt("Enter your name:", "Jane Doe")` auf.

Der Browser sendet die folgende Benachrichtigung:

```json
{
  "type": "event",
  "method": "browsingContext.userPromptOpened",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "handler": "ignore",
    "message": "Enter your name:",
    "type": "prompt",
    "defaultValue": "Jane Doe"
  }
}
```

### Ein Ereignis beim Öffnen eines beforeunload-Dialogs empfangen

Angenommen, der Client verwendet über dieselbe Verbindung, Sitzung und Subscription wie im ersten Beispiel den Befehl [`browsingContext.navigate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate), um eine Seite zu verlassen, deren Event-Handler für [`beforeunload`](/de/docs/Web/API/Window/beforeunload_event) vor dem Verlassen der Seite eine Bestätigung anfordert.

Wenn sich der Dialog öffnet, sendet der Browser vor Abschluss der Navigation die folgende Benachrichtigung:

```json
{
  "type": "event",
  "method": "browsingContext.userPromptOpened",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "handler": "ignore",
    "message": "This page is asking you to confirm that you want to leave — information you've entered may not be saved.",
    "type": "beforeunload"
  }
}
```

Die Einstellung der Sitzungs-Capability `unhandledPromptBehavior` gilt auch für die Behandlung von `beforeunload`-Dialogen. Daher meldet die Benachrichtigung in diesem Beispiel für `handler` den Wert `"ignore"`.
Der Dialog bleibt geöffnet, bis der Client ihn mit dem Befehl [`browsingContext.handleUserPrompt`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/handleUserPrompt) schließt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Ereignis [`browsingContext.userPromptClosed`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/userPromptClosed)
- Befehl [`browsingContext.handleUserPrompt`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/handleUserPrompt)
- Befehl [`session.subscribe`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe)
