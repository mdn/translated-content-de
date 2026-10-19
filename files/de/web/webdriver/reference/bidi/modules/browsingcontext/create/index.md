---
title: Befehl `browsingContext.create`
short-title: create
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/create
l10n:
  sourceCommit: eb950353cc947fb1c00397334b13a5f9457d734a
---

Der [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) `browsingContext.create` des Moduls [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) erstellt einen [Top-Level-Kontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) als neuen Tab oder neues Fenster und gibt dessen Kontext-ID zurück.

## Syntax

```json-nolint
/* With required parameters */
{
  "method": "browsingContext.create",
  "params": {
    "type": "window"
  }
}

/* With required and optional parameters */
{
  "method": "browsingContext.create",
  "params": {
    "type": "tab",
    "background": true,
    "referenceContext": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "userContext": "4e4b1f6d-3f1a-4b2e-9f8c-1a2b3c4d5e6f"
  }
}
```

### Parameter

Das Feld `params` enthält:

- `background` {{optional_inline}}
  - : Ein boolescher Wert, der angibt, ob der Kontext im Hintergrund oder im Vordergrund erstellt wird.
    - `false`: Der Kontext wird nach seiner Erstellung in den Vordergrund gebracht und erhält den Fokus. Dies ist die Standardeinstellung.
    - `true`: Der Kontext wird im Hintergrund erstellt. Mit [`browsingContext.activate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/activate) können Sie ihn in den Vordergrund bringen und ihm den Fokus geben.
- `referenceContext` {{optional_inline}}
  - : Eine Zeichenfolge mit der ID eines vorhandenen [Top-Level-Kontexts](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context), die zur Positionierung des neuen Kontexts verwendet wird.

    Wenn `type` den Wert `"tab"` hat, wird der neue Kontext im selben Fenster wie der durch `referenceContext` angegebene Kontext geöffnet.
    Wenn `type` den Wert `"window"` hat oder `referenceContext` weggelassen wird, bestimmt der Browser, wo der neue Kontext erscheint.

    Der neue Kontext übernimmt den [Benutzerkontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) des angegebenen Referenzkontexts, sofern `userContext` nicht ausdrücklich angegeben wird.

    Kontext-IDs werden von Befehlen wie [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) zurückgegeben.

- `type`
  - : Eine Zeichenfolge, die den Typ des zu erstellenden Kontexts angibt.
    Sie akzeptiert einen der folgenden Werte:
    - `"tab"`: Erstellt den Kontext als Tab in einem vorhandenen Fenster.
      Wenn `referenceContext` angegeben ist, wird der neue Tab neben dem angegebenen Kontext geöffnet.
    - `"window"`: Erstellt den Kontext in einem neuen Browserfenster.
- `userContext` {{optional_inline}}
  - : Eine Zeichenfolge mit der ID des [Benutzerkontexts](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts), in dem der Kontext erstellt wird.

    Wenn der Wert nicht angegeben ist, verwendet der neue Kontext den Benutzerkontext `"default"` oder übernimmt den Benutzerkontext von `referenceContext`, falls dieser angegeben ist.

    Benutzerkontext-IDs werden von [`browser.getUserContexts`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts) oder [`browser.createUserContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) zurückgegeben.

### Rückgabewert

Das Objekt `result` in der Antwort enthält das folgende Feld:

- `context`
  - : Eine Zeichenfolge mit der ID des neu erstellten Kontexts.

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Ein erforderlicher Parameter fehlt oder hat einen ungültigen Typ.
    Dieser Fehler wird auch zurückgegeben, wenn der durch `referenceContext` angegebene Kontext kein Top-Level-Kontext ist.
- `no such frame`
  - : Es wurde kein Kontext mit der angegebenen `referenceContext`-ID gefunden.
- `no such user context`
  - : Es wurde kein Benutzerkontext mit der angegebenen `userContext`-ID gefunden.
- `unsupported operation`
  - : Der Browser kann keinen neuen [Top-Level-Kontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) erstellen.

## Beschreibung

Der Befehl `browsingContext.create` erstellt immer einen [Top-Level-Kontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context).
Der Parameter `type` bestimmt, wie der neue Kontext im Browser erscheint: `"window"` erstellt ein neues [Client-Fenster](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#client_windows), während `"tab"` ihn als Tab in einem vorhandenen Client-Fenster öffnet.

Standardmäßig erhält der neue Kontext sofort den Fokus.
Um dieses Verhalten zu deaktivieren, setzen Sie `background` auf `true`.
Später können Sie einen Kontext im Hintergrund mit [`browsingContext.activate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/activate) in den Vordergrund bringen.

Wenn der neue Tab neben einem bestimmten vorhandenen Tab geöffnet werden soll, übergeben Sie dessen Kontext-ID als `referenceContext`. Andernfalls bestimmt der Browser selbst, wo der neue Tab platziert wird.

Standardmäßig wird der neue Kontext dem [Benutzerkontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) `"default"` hinzugefügt und teilt sich den Speicher mit anderen Tabs in diesem Kontext. Um ihn zu isolieren, ihm also eigene Cookies und Sitzungsdaten zu geben, geben Sie mit `userContext` einen anderen Benutzerkontext an.

## Beispiele

### Einen Tab erstellen

Senden Sie bei bestehender [WebDriver-BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und [aktiver Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) die folgende Nachricht, um einen neuen Tab zu erstellen:

```json
{
  "id": 1,
  "method": "browsingContext.create",
  "params": {
    "type": "tab"
  }
}
```

Bei erfolgreicher Erstellung antwortet der Browser mit der Kontext-ID des neuen Tabs:

```json
{
  "id": 1,
  "type": "success",
  "result": {
    "context": "5e5e96e8-5247-4f22-9b35-a4a2d841cbaa"
  }
}
```

Da `background` nicht angegeben ist, wird der Tab standardmäßig im Vordergrund geöffnet.

### Einen Tab neben einem vorhandenen Kontext erstellen

Das folgende Beispiel zeigt, wie Sie innerhalb des angegebenen Benutzerkontexts einen Tab im Hintergrund neben einem vorhandenen Tab erstellen.

Ermitteln Sie zunächst die Kontext-ID des Referenz-Tabs mit [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) und die Benutzerkontext-ID mit [`browser.getUserContexts`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts) oder [`browser.createUserContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext). Senden Sie anschließend die folgende Nachricht:

```json
{
  "id": 2,
  "method": "browsingContext.create",
  "params": {
    "type": "tab",
    "referenceContext": "5e5e96e8-5247-4f22-9b35-a4a2d841cbaa",
    "background": true,
    "userContext": "3a8e2d1f-4b5c-6d7e-8f9a-0b1c2d3e4f5a"
  }
}
```

Der Browser öffnet den neuen Tab im selben Fenster wie den Referenzkontext und antwortet wie folgt:

```json
{
  "id": 2,
  "type": "success",
  "result": {
    "context": "b2e3f461-8a5c-4d12-9b87-c3d4e5f6a7b8"
  }
}
```

### Ein Fenster im Hintergrund erstellen

Senden Sie die folgende Nachricht, um ein neues Fenster zu erstellen, ohne es zu aktivieren:

```json
{
  "id": 3,
  "method": "browsingContext.create",
  "params": {
    "type": "window",
    "background": true
  }
}
```

Der Browser antwortet wie folgt mit der Kontext-ID des neuen Fensters:

```json
{
  "id": 3,
  "type": "success",
  "result": {
    "context": "d87a0c61-7b0e-4e8b-b4f0-0a7d5af2e0c3"
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Befehl [`browsingContext.activate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/activate)
- Befehl [`browsingContext.close`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/close)
- Befehl [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree)
- Ereignis [`browsingContext.contextCreated`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/contextCreated)
- Ereignis [`browsingContext.contextDestroyed`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/contextDestroyed)
