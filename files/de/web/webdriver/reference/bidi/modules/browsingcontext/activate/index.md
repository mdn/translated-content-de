---
title: "`browsingContext.activate`-Befehl"
short-title: activate
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/activate
l10n:
  sourceCommit: 1db2c61210860e17e452e21122280b76a7dcffb6
---

Der `browsingContext.activate` [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) des [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext)-Moduls bringt einen [Top-Level-Kontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) in den Vordergrund und gibt ihm den Fokus.

## Syntax

```json-nolint
{
  "method": "browsingContext.activate",
  "params": {
    "context": "<contextId>"
  }
}
```

### Parameter

Das `params`-Feld enthält:

- `context`
  - : Ein String, der die ID des [Top-Level-Kontexts](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) enthält, den Sie in den Vordergrund bringen und fokussieren möchten.
    Kontext-IDs werden von Befehlen wie [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) zurückgegeben.

### Rückgabewert

Das `result`-Feld in der Antwort ist ein leeres Objekt (`{}`).

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Ein erforderlicher Parameter fehlt oder hat einen ungültigen Typ.
    Dieser Fehler wird ebenfalls zurückgegeben, wenn der durch `context` angegebene Kontext kein Top-Level-Kontext ist.
- `no such frame`
  - : Kein Kontext mit der angegebenen Kontext-ID wurde gefunden.
- `unsupported operation`
  - : Der Browser kann den Kontext nicht in den Vordergrund bringen.

## Beispiele

### Aktivieren eines Hintergrund-Tabs

Das folgende Beispiel zeigt, wie ein Hintergrund-Tab aktiviert wird.

Mit einer [WebDriver BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und einer [aktiven Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new), nehmen wir an, Sie erstellen einen Tab im Hintergrund mit [`browsingContext.create`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create) mit `background: true`, welches die Kontext-ID des Tabs zurückgibt. Senden Sie die folgende Nachricht, um ihn zu aktivieren:

```json
{
  "id": 1,
  "method": "browsingContext.activate",
  "params": {
    "context": "5e5e96e8-5247-4f22-9b35-a4a2d841cbaa"
  }
}
```

Der Browser bringt den Tab in den Vordergrund und antwortet wie folgt:

```json
{
  "id": 1,
  "type": "success",
  "result": {}
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`browsingContext.close`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/close)-Befehl
- [`browsingContext.create`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create)-Befehl
- [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree)-Befehl
