---
title: "`browsingContext.traverseHistory`-Befehl"
short-title: traverseHistory
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/traverseHistory
l10n:
  sourceCommit: e5999f9b30c19ca727cbf28ec254f2111f7d36c8
---

Der `browsingContext.traverseHistory`-[Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) des [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext)-Moduls navigiert zurück oder vorwärts in der Sitzungshistorie des angegebenen [Top-Level-Kontextes](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context), ähnlich wie wenn ein Benutzer in seinem Browser die Zurück- und Vorwärts-Buttons klickt.

## Syntax

```json-nolint
{
  "method": "browsingContext.traverseHistory",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "delta": -1
  }
}
```

### Parameter

Das `params`-Feld enthält:

- `context`
  - : Ein String, der die ID des [Top-Level-Kontextes](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) enthält, dessen Sitzungshistorie navigiert werden soll.
    Kontext-IDs werden von Befehlen wie [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) zurückgegeben.
- `delta`
  - : Ein Integer, der die Anzahl der zu bewegenden Einträge in der Sitzungshistorie spezifiziert.
    Ein positiver Wert bewegt den Kontext vorwärts in der Historie; ein negativer Wert bewegt ihn rückwärts.

### Rückgabewert

Das `result`-Feld in der Antwort ist ein leeres Objekt (`{}`).
Der Befehl gibt zurück, sobald die Traversierung in die Warteschlange gestellt wurde, noch bevor die resultierende Navigation abgeschlossen ist.
Das [`browsingContext.historyUpdated`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/historyUpdated)-Ereignis wird ausgelöst, wenn die Traversierung abgeschlossen ist.

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Ein erforderlicher Parameter fehlt oder hat einen ungültigen Typ.
    Dieser Fehler wird auch zurückgegeben, wenn der spezifizierte `context` kein [Top-Level-Kontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) ist.
- `no such frame`
  - : Es wurde kein Kontext mit der gegebenen Kontext-ID gefunden.
- `no such history entry`
  - : Die in der Sitzungshistorie von `delta` angegebene Position existiert nicht.

## Beispiele

### Rückwärts in der Historie navigieren

Angenommen, Sie haben eine [WebDriver BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).

Angenommen, Sie haben einen Tab mit [`browsingContext.create`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create) erstellt und sind durch mehrere Seiten mit [`browsingContext.navigate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) navigiert: von `https://example.com/page1.html` zu `https://example.com/page2.html` und dann zu `https://example.com/page3.html`. Um zwei Einträge in der Historie zurück zu navigieren, also `https://example.com/page2.html` zu überspringen und bei `https://example.com/page1.html` zu landen, senden Sie die folgende Nachricht:

```json
{
  "id": 1,
  "method": "browsingContext.traverseHistory",
  "params": {
    "context": "5e5e96e8-5247-4f22-9b35-a4a2d841cbaa",
    "delta": -2
  }
}
```

Der Browser stellt die Historien-Traversierung in die Warteschlange und antwortet wie folgt:

```json
{
  "id": 1,
  "type": "success",
  "result": {}
}
```

### Vorwärts in der Historie navigieren

Fortsetzung des vorherigen Beispiels, um einen Eintrag in der Historie vorwärts zu navigieren und bei `https://example.com/page2.html` zu landen, senden Sie die folgende Nachricht:

```json
{
  "id": 2,
  "method": "browsingContext.traverseHistory",
  "params": {
    "context": "5e5e96e8-5247-4f22-9b35-a4a2d841cbaa",
    "delta": 1
  }
}
```

Der Browser stellt die Historien-Traversierung in die Warteschlange und antwortet wie folgt:

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

- [`browsingContext.navigate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate)-Befehl
- [`browsingContext.reload`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/reload)-Befehl
- [`browsingContext.create`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create)-Befehl
- [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree)-Befehl
- [`browsingContext.navigationStarted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted)-Ereignis
- [`browsingContext.navigationCommitted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationCommitted)-Ereignis
- [`browsingContext.navigationFailed`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationFailed)-Ereignis
- [`browsingContext.historyUpdated`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/historyUpdated)-Ereignis
