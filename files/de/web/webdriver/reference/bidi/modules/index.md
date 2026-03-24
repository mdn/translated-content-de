---
title: WebDriver BiDi-Module
short-title: Modules
slug: Web/WebDriver/Reference/BiDi/Modules
l10n:
  sourceCommit: f83c12ab41865e0e195dd36ad9cdcad511a36957
---

Das WebDriver BiDi-Protokoll ist in Module organisiert.
Jedes Modul stellt eine Sammlung von verwandten [Befehlen](#befehle) und [Ereignissen](#ereignisse) dar, die in bestimmten Fällen der Browserautomatisierung verwendet werden.

Sowohl Befehls- als auch Ereignisnamen verwenden den Modulnamen als Präfix: `module_name.command_name` für Befehle und `module_name.event_name` für Ereignisse.

## Liste der Module

{{SubpagesWithSummaries}}

## Befehle

Ein Befehl ist eine asynchrone Operation, die vom Client an den Browser gesendet wird. Jede Befehlsmeldung, die Sie an den Browser senden, umfasst drei Felder:

- `id`: Eine Nummer, die Sie dem Befehl zuweisen. Im Gegensatz zu HTTP, bei dem jede Anfrage auf eine Antwort wartet, kann eine WebSocket-Verbindung mehrere Befehle gleichzeitig ausführen, und die Antworten können in ungeordneter Reihenfolge eintreffen. Die `id` ermöglicht es Ihnen, jede Antwort dem Befehl zuzuordnen, der sie ausgelöst hat.
- `method`: Der auszuführende Befehl in der Form `module_name.command_name`.
- `params`: Ein Objekt mit allen zusätzlichen Informationen, die der Befehl benötigt. Einige Befehle erfordern keine Parameter, aber ein leeres `params`-Objekt (`{}`) muss dennoch gesendet werden.

Um beispielsweise eine neue Sitzung zu erstellen, würden Sie den Befehl [`session.new`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) wie folgt senden:

```json
{
  "id": 1,
  "method": "session.new",
  "params": {}
}
```

Jeder Befehl führt entweder zu einer Erfolgsmeldung, die ein `result`-Feld enthält, oder zu einer Fehlermeldung, die ein `error`-Feld enthält. Die Struktur von `result` ist spezifisch für jeden Befehl.

Alle Befehle mit Ausnahme von [`session.new`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) und [`session.status`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/status) erfordern eine aktive WebDriver BiDi-Sitzung.

## Ereignisse

Ein Ereignis ist eine Benachrichtigung, die vom Browser an den Client gesendet wird, wenn etwas von Interesse geschieht.
Um Ereignisse zu empfangen, muss der Client zuerst mit dem Befehl `session.subscribe` abonnieren.

Der Client kann sich auf ein bestimmtes Ereignis oder auf alle Ereignisse in einem Modul abonnieren. Wenn der Client beispielsweise `"browsingContext.contextCreated"` abonniert, wird er für dieses einzelne Ereignis abonniert. Abonnieren von `"browsingContext"` abonniert den Client für jedes Ereignis im `browsingContext`-Modul.

Das folgende ist eine Beispiel-Ereignismeldung, die vom Browser gesendet wird, wenn der Client auf `log.entryAdded` abonniert ist und eine Konsolennachricht protokolliert wird (einige Felder wurden der Kürze halber ausgelassen):

```json
{
  "type": "event",
  "method": "log.entryAdded",
  "params": {
    "type": "console",
    "method": "log",
    "realm": null,
    "level": "info",
    "text": "Hello world",
    "timestamp": 1657282076037
  }
}
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebDriver BiDi Web-Client](https://firefox-dev.tools/bidi-web-client/web/)
