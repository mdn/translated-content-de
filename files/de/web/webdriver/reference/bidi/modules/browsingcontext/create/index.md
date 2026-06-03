---
title: "`browsingContext.create` Befehl"
short-title: create
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/create
l10n:
  sourceCommit: 1db2c61210860e17e452e21122280b76a7dcffb6
---

Der `browsingContext.create` [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) des [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) Moduls erstellt einen [Top-Level-Kontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) als neuen Tab oder neues Fenster und gibt dessen Kontext-ID zurück.

## Syntax

```json-nolint
{
  "method": "browsingContext.create",
  "params": {
    "type": "tab"
  }
}
```

### Parameter

Das `params`-Feld enthält:

- `background` {{optional_inline}}
  - : Ein Boolean, der angibt, ob der Kontext im Hintergrund oder im Vordergrund erstellt wird.
    Der Standardwert ist `false`.
    - `false`: Der Kontext wird in den Vordergrund gebracht und erhält den Fokus, nachdem er erstellt wurde.
    - `true`: Der Kontext wird im Hintergrund erstellt. Siehe [`browsingContext.activate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/activate), um ihn in den Vordergrund zu bringen und ihm den Fokus zu geben.
- `referenceContext` {{optional_inline}}
  - : Ein String, der die ID eines vorhandenen [Top-Level-Kontextes](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) enthält, der zur Positionierung des neuen Kontextes verwendet wird.
    Kontext-IDs werden von Befehlen wie [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) zurückgegeben.

    Wenn `type` `"tab"` ist, öffnet sich der neue Kontext im selben Fenster wie der durch `referenceContext` spezifizierte Kontext.
    Wenn `type` `"window"` ist oder `referenceContext` weggelassen wird, bestimmt der Browser, wo der neue Kontext erscheint.

    Der neue Kontext erbt den [Benutzerkontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) des angegebenen Referenzkontextes, es sei denn, `userContext` wird explizit angegeben.

- `type`
  - : Ein String, der den Typ des zu erstellenden Kontextes spezifiziert.
    Er akzeptiert einen der folgenden Werte:
    - `"tab"`: Erstellt den Kontext als Tab in einem bestehenden Fenster.
      Wenn `referenceContext` angegeben ist, öffnet sich der neue Tab daneben.
    - `"window"`: Erstellt den Kontext in einem neuen Browserfenster.
- `userContext` {{optional_inline}}
  - : Ein String, der die ID des [Benutzerkontextes](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) enthält, in dem der Kontext erstellt wird.
    Benutzerkontext-IDs werden von [`browser.getUserContexts`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts) oder [`browser.createUserContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) zurückgegeben.

    Wenn nicht spezifiziert, verwendet der neue Kontext den `"default"` Benutzerkontext oder erbt den Benutzerkontext von `referenceContext`, wenn angegeben.

### Rückgabewert

Das `result`-Objekt in der Antwort enthält folgende Felder:

- `context`
  - : Ein String, der die ID des neu erstellten Kontextes enthält.

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Ein erforderlicher Parameter fehlt oder hat einen ungültigen Typ.
    Dieser Fehler wird auch zurückgegeben, wenn der durch `referenceContext` spezifizierte Kontext kein Top-Level-Kontext ist.
- `no such frame`
  - : Kein Kontext mit der angegebenen `referenceContext`-ID gefunden.
- `no such user context`
  - : Kein Benutzerkontext mit der angegebenen `userContext`-ID gefunden.
- `unsupported operation`
  - : Der Browser kann keinen neuen [Top-Level-Kontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) erstellen.

## Beschreibung

Der `browsingContext.create` Befehl erstellt immer einen [Top-Level-Kontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context).
Der `type`-Parameter bestimmt, wie der neue Kontext im Browser erscheint: `"window"` erstellt ein neues [Client-Fenster](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#client_windows), während `"tab"` es als Tab in einem bestehenden Client-Fenster öffnet.

Standardmäßig erhält der neue Kontext sofort den Fokus.
Um dieses Verhalten zu deaktivieren, setzen Sie `background` auf `true`.
Sie können später einen Hintergrundkontext mit [`browsingContext.activate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/activate) in den Vordergrund bringen.

Wenn Sie möchten, dass sich der neue Tab neben einem bestimmten bestehenden Tab öffnet, geben Sie die Kontext-ID dieses Tabs als `referenceContext` an. Ohne diese Angabe platziert der Browser den neuen Tab nach eigenem Ermessen.

Standardmäßig wird der neue Kontext dem `"default"` [Benutzerkontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser#user_contexts) hinzugefügt und teilt Speicher mit anderen Tabs in diesem Kontext. Um ihn zu isolieren, das heißt, ihm separate Cookies und Sitzungsdaten zuzuweisen, geben Sie einen anderen Benutzerkontext mit `userContext` an.

## Beispiele

### Erstellen eines Tabs

Mit einer [WebDriver BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und einer [aktiven Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) senden Sie die folgende Nachricht, um einen neuen Tab zu erstellen:

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

Da `background` nicht angegeben ist, öffnet sich der Tab standardmäßig im Vordergrund.

### Erstellen eines Tabs neben einem bestehenden Kontext

Das folgende Beispiel zeigt, wie man einen Tab im Hintergrund neben einem bestehenden Tab innerhalb des angegebenen Benutzerkontextes erstellt.

Zuerst erhalten Sie die Kontext-ID des Referenz-Tabs mit [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) und die Benutzerkontext-ID mit [`browser.getUserContexts`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts) oder [`browser.createUserContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext). Dann senden Sie die folgende Nachricht:

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

Der Browser öffnet den neuen Tab im selben Fenster wie der Referenz-Kontext und antwortet wie folgt:

```json
{
  "id": 2,
  "type": "success",
  "result": {
    "context": "b2e3f461-8a5c-4d12-9b87-c3d4e5f6a7b8"
  }
}
```

### Erstellen eines Fensters im Hintergrund

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

Der Browser antwortet mit der Kontext-ID des neuen Fensters wie folgt:

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

- [`browsingContext.activate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/activate) Befehl
- [`browsingContext.close`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/close) Befehl
- [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) Befehl
- [`browsingContext.contextCreated`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/contextCreated) Ereignis
- [`browsingContext.contextDestroyed`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/contextDestroyed) Ereignis
