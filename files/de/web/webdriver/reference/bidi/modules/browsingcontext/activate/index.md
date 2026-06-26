---
title: "`browsingContext.activate`-Befehl"
short-title: activate
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/activate
l10n:
  sourceCommit: ef8c3806c33f2b1d9d381f4fe3b643b5af5e3d22
---

Der `browsingContext.activate`-[Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) des [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext)-Moduls bringt einen [Top-Level-Kontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) in den Vordergrund und fokussiert ihn.

## Syntax

```json-nolint
{
  "method": "browsingContext.activate",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f"
  }
}
```

### Parameter

Das `params`-Feld enthält:

- `context`
  - : Ein String, der die ID des [Top-Level-Kontexts](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) enthält, der in den Vordergrund gebracht und fokussiert werden soll.
    Kontext-IDs werden von Befehlen wie [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) zurückgegeben.

### Rückgabewert

Das `result`-Feld in der Antwort ist ein leeres Objekt (`{}`).

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Ein erforderlicher Parameter fehlt oder hat einen ungültigen Typ.
    Dieser Fehler wird auch zurückgegeben, wenn der durch `context` angegebene Kontext kein Top-Level-Kontext ist.
- `no such frame`
  - : Kein Kontext mit der angegebenen Kontext-ID wird gefunden.
- `unsupported operation`
  - : Der Browser kann den Kontext nicht in den Vordergrund bringen.

## Beispiele

### Aktivierung eines Hintergrund-Tabs

Das folgende Beispiel zeigt, wie ein Hintergrund-Tab aktiviert wird.

Bei einer [WebDriver BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und einer [aktiven Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) nehmen wir an, dass Sie einen Tab im Hintergrund mit [`browsingContext.create`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create) und `background: true` erstellen, was die Kontext-ID des Tabs zurückgibt. Senden Sie die folgende Nachricht, um ihn zu aktivieren:

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
