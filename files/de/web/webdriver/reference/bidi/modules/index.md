---
title: WebDriver BiDi-Module
short-title: Modules
slug: Web/WebDriver/Reference/BiDi/Modules
l10n:
  sourceCommit: fbf733732bf531a1be40a0c646bcbc4b31618476
---

Das WebDriver BiDi-Protokoll ist in Module gegliedert. Jedes Modul repräsentiert eine Sammlung von zusammenhängenden [Befehlen](#befehle) und [Ereignissen](#ereignisse), die in spezifischen Automatisierungsfällen im Browser verwendet werden.

Sowohl Befehls- als auch Ereignisnamen verwenden den Modulnamen als Präfix: `module_name.command_name` für Befehle und `module_name.event_name` für Ereignisse.

## Liste der Module

{{SubpagesWithSummaries}}

## Befehle

Ein Befehl ist eine asynchrone Operation, die vom Client an den Browser gesendet wird. Jede Befehlsnachricht, die Sie an den Browser senden, enthält drei Felder:

- `id`: Eine Zahl, die Sie dem Befehl zuweisen. Im Gegensatz zu HTTP, bei dem jede Anfrage auf eine Antwort wartet, kann eine WebSocket-Verbindung mehrere Befehle gleichzeitig bearbeiten, und Antworten können in beliebiger Reihenfolge eintreffen. Die `id` hilft Ihnen, jede Antwort dem Befehl zuzuordnen, der sie ausgelöst hat.
- `method`: Der auszuführende Befehl im Format `module_name.command_name`.
- `params`: Ein Objekt mit allen zusätzlichen Informationen, die der Befehl benötigt. Einige Befehle erfordern keine Parameter, aber ein leeres `params`-Objekt (`{}`) muss dennoch gesendet werden.

Zum Beispiel, um eine neue Sitzung zu erstellen, würden Sie den [`session.new`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new)-Befehl wie folgt senden:

```json
{
  "id": 1,
  "method": "session.new",
  "params": {}
}
```

Jeder Befehl führt entweder zu einer erfolgreichen Antwort mit einem `result`-Feld oder zu einer Fehlerantwort mit einem `error`-Feld. Die Struktur von `result` ist spezifisch für jeden Befehl.

Alle Befehle außer [`session.new`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) und [`session.status`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/status) erfordern eine aktive WebDriver BiDi-Sitzung.

## Ereignisse

Ein Ereignis ist eine Benachrichtigung, die vom Browser an den Client gesendet wird, wenn etwas von Interesse auftritt. Um Ereignisse zu empfangen, muss der Client sich zuerst mit dem Befehl `session.subscribe` anmelden.

Der Client kann sich entweder für ein spezifisches Ereignis oder für alle Ereignisse in einem Modul anmelden. Zum Beispiel, durch die Anmeldung bei `"browsingContext.contextCreated"` wird der Client für dieses einzelne Ereignis angemeldet, während die Anmeldung bei `"browsingContext"` den Client für jedes Ereignis im Modul `browsingContext` anmeldet.

Folgendes ist eine Beispielnachricht, die vom Browser gesendet wird, wenn der Client bei `log.entryAdded` angemeldet ist und eine Konsolennachricht geloggt wird (einige Felder wurden der Kürze halber ausgelassen):

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
