---
title: "`browsingContext.traverseHistory`-Befehl"
short-title: traverseHistory
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/traverseHistory
l10n:
  sourceCommit: 50e846e7423814d7d0c3c3630ff8e793b38cad8a
---

Der `browsingContext.traverseHistory` [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) des [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext)-Moduls navigiert im Verlauf der Sitzung des angegebenen [Top-Level-Kontexts](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) zurück oder vorwärts, ähnlich wie ein Benutzer, der die Vor- und Zurück-Buttons des Browsers klickt.

## Syntax

```json-nolint
{
  "method": "browsingContext.traverseHistory",
  "params": {
    "context": "<contextId>",
    "delta": <integer>
  }
}
```

### Parameter

Das `params`-Feld enthält:

- `context`
  - : Ein String, der die ID des [Top-Level-Kontexts](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) enthält, dessen Sitzungsverlauf navigiert werden soll.
    Kontext-IDs werden von Befehlen wie [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) zurückgegeben.
- `delta`
  - : Ein Integer, der die Anzahl der Verlaufs-Einträge angibt, die im Sitzungsverlauf bewegt werden sollen.
    Ein positiver Wert bewegt den Kontext vorwärts im Verlauf; ein negativer Wert bewegt ihn rückwärts.

### Rückgabewert

Das `result`-Feld in der Antwort ist ein leeres Objekt (`{}`).
Der Befehl gibt zurück, sobald die Navigation in die Warteschlange gestellt wurde, noch bevor die resultierende Navigation abgeschlossen ist.
Das [`browsingContext.historyUpdated`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/historyUpdated)-Ereignis wird ausgelöst, wenn die Navigation abgeschlossen ist.

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Ein erforderlicher Parameter fehlt oder hat einen ungültigen Typ.
    Dieser Fehler wird auch zurückgegeben, wenn der angegebene `context` kein [Top-Level-Kontext](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#top-level_context) ist.
- `no such frame`
  - : Kein Kontext mit der angegebenen Kontext-ID gefunden.
- `no such history entry`
  - : Die durch `delta` angegebene Position im Sitzungsverlauf existiert nicht.

## Beispiele

### Im Verlauf zurück navigieren

Angenommen, Sie haben eine [WebDriver BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new).

Angenommen, Sie haben einen Tab mit [`browsingContext.create`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/create) erstellt und ihn über mehrere Seiten mit [`browsingContext.navigate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) navigiert: von `https://example.com/page1.html` zu `https://example.com/page2.html` und dann zu `https://example.com/page3.html`. Um zwei Verlaufs-Einträge zurück zu navigieren, also `https://example.com/page2.html` zu überspringen und bei `https://example.com/page1.html` zu landen, senden Sie die folgende Nachricht:

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

Der Browser stellt die Verlauf-Navigation in die Warteschlange und antwortet wie folgt:

```json
{
  "id": 1,
  "type": "success",
  "result": {}
}
```

### Im Verlauf vorwärts navigieren

Fortsetzung des vorherigen Beispiels: Um einen Verlaufs-Eintrag vorwärts zu navigieren und bei `https://example.com/page2.html` zu landen, senden Sie die folgende Nachricht:

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

Der Browser stellt die Verlauf-Navigation in die Warteschlange und antwortet wie folgt:

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
