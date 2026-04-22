---
title: WebDriver BiDi-Module
short-title: Modules
slug: Web/WebDriver/Reference/BiDi/Modules
l10n:
  sourceCommit: 253bed3def8e1680475ea75987d24ca62ee9f989
---

Das WebDriver BiDi-Protokoll ist in Module organisiert.
Jedes Modul stellt eine Sammlung von verwandten [Befehlen](#befehle) und [Ereignissen](#ereignisse) dar, die in spezifischen Browser-Automatisierungsfällen verwendet werden.

Sowohl Befehls- als auch Ereignisnamen verwenden den Modulnamen als Präfix: `module_name.command_name` für Befehle und `module_name.event_name` für Ereignisse.

## Liste der Module

{{SubpagesWithSummaries}}

## Befehle

Ein Befehl ist eine asynchrone Operation, die vom Client an den Browser gesendet wird. Jede _von Ihnen gesendete_ Befehlsnachricht an den Browser hat drei Felder:

- `id`: Eine von Ihnen dem Befehl zugewiesene Nummer. Anders als bei HTTP, wo jede Anfrage auf eine Antwort wartet, kann eine WebSocket-Verbindung gleichzeitig mehrere Befehle im Umlauf haben und Antworten können in unterschiedlicher Reihenfolge eintreffen. Die `id` ermöglicht es Ihnen, jede Antwort dem auslösenden Befehl zuzuordnen.
- `method`: Der auszuführende Befehl im Format `module_name.command_name`.
- `params`: Ein Objekt mit zusätzlichen Informationen, die der Befehl benötigt. Einige Befehle erfordern keine Parameter, aber ein leeres `params`-Objekt (`{}`) muss dennoch gesendet werden.

Um beispielsweise eine neue Sitzung zu erstellen, würden Sie den Befehl [`session.new`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) wie folgt senden:

```json
{
  "id": 1,
  "method": "session.new",
  "params": {}
}
```

Jeder Befehl führt entweder zu einer erfolgreichen Antwort mit einem `result`-Feld oder zu einer Fehlermeldung mit einem `error`-Feld. Die Struktur von `result` ist spezifisch für jeden Befehl.

Alle Befehle außer [`session.new`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) und [`session.status`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/status) erfordern eine aktive WebDriver BiDi-Sitzung.

## Ereignisse

Ein Ereignis ist eine Benachrichtigung, die vom Browser an den Client gesendet wird, wenn etwas Interessantes passiert.
Um Ereignisse zu empfangen, muss der Client zuerst diese mit dem Befehl `session.subscribe` abonnieren.

Der Client kann ein spezifisches Ereignis oder alle Ereignisse in einem Modul abonnieren. Beispielsweise abonniert `"browsingContext.contextCreated"` den Client für ein einzelnes Ereignis, während `"browsingContext"` den Client für jedes Ereignis im Modul `browsingContext` abonniert.

Jede _von Ihnen empfangene_ Ereignisbenachrichtigung vom Browser hat drei Felder:

- `type`: Immer `"event"`.
- `method`: Der Ereignisname im Format `module_name.event_name`.
- `params`: Ein Objekt, das die spezifischen Daten des Ereignisses enthält. Die Struktur von `params` ist spezifisch für jedes Ereignis.

Das folgende ist eine Beispiel-Ereignismeldung, die vom Browser gesendet wird, wenn der Client `log.entryAdded` abonniert hat und eine Konsolennachricht protokolliert wird (einige Felder wurden der Kürze halber weggelassen):

```json
{
  "type": "event",
  "method": "log.entryAdded",
  "params": {
    "type": "console",
    "level": "info",
    "text": "Hello world",
    "timestamp": 1657282076037,
    "method": "log"
  }
}
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebDriver BiDi-Web-Client](https://firefox-dev.tools/bidi-web-client/web/)
