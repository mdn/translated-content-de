---
title: "`session.subscribe` Befehl"
short-title: subscribe
slug: Web/WebDriver/Reference/BiDi/Modules/session/subscribe
l10n:
  sourceCommit: 1db2c61210860e17e452e21122280b76a7dcffb6
---

Der `session.subscribe` [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) des [`session`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session) Moduls registriert den Client, um Ereignisse asynchron zu empfangen, entweder pro Ereignis oder pro Modul, weltweit oder auf bestimmte Kontexte beschränkt.

## Syntax

```json-nolint
{
  "method": "session.subscribe",
  "params": {
    "events": ["<event name>"]
  }
}
```

### Parameter

Das `params`-Feld enthält:

- `events`
  - : Ein Array von einem oder mehreren Ereignisnamenstrings. Verwenden Sie einen Modulnamen (zum Beispiel `"log"`), um alle Ereignisse in diesem Modul zu abonnieren oder einen bestimmten Ereignisnamen (zum Beispiel `"log.entryAdded"`), um nur dieses Ereignis zu abonnieren.
- `contexts` {{optional_inline}}
  - : Ein Array von einer oder mehreren Kontext-ID-Strings, die jeweils einem Tab oder Frame entsprechen.
    Kontext-IDs werden durch Befehle wie [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) zurückgegeben.
    Wenn angegeben, werden Ereignisse nur für diese Kontexte und deren Nachkommen empfangen.
    Wenn die Kontext-ID einem Frame entspricht, wird das Abonnement für den obersten Kontext (Tab) erstellt, der den Frame besitzt.

    Dieses Feld kann nicht verwendet werden, wenn `userContexts` ebenfalls angegeben ist.

- `userContexts` {{optional_inline}}
  - : Ein Array von einer oder mehreren Benutzerkontext-ID-Strings, die jeweils einem Browser-Kontext oder Container entsprechen.
    Benutzerkontext-IDs werden durch Befehle wie [`browser.createUserContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) oder [`browser.getUserContexts`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts) zurückgegeben.
    Wenn angegeben, werden Ereignisse nur für diese Benutzerkontexte empfangen.

    Dieses Feld kann nicht verwendet werden, wenn `contexts` ebenfalls angegeben ist.

Wenn weder `contexts` noch `userContexts` bereitgestellt wird, ist das Abonnement global, sodass Ereignisse für alle Kontexte empfangen werden.

### Rückgabewert

Das `result`-Feld in der Antwort ist ein Objekt mit folgendem Feld:

- `subscription`
  - : Ein String, der die eindeutige Kennung für dieses Abonnement enthält.

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Das `events`-Array ist leer, weggelassen oder enthält einen nicht erkannten Ereignisnamen.
    - `contexts` oder `userContexts` wird bereitgestellt, ist aber leer.
    - Sowohl `contexts` als auch `userContexts` werden in derselben Anfrage bereitgestellt.
    - Ein Parameterwert hat einen ungültigen Typ.

## Beispiele

### Abonnieren eines Ereignisses weltweit

Mit einer [WebDriver BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und einer [aktiven Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) senden Sie die folgende Nachricht, um das `log.entryAdded`-Ereignis für alle Kontexte zu abonnieren:

```json
{
  "id": 2,
  "method": "session.subscribe",
  "params": {
    "events": ["log.entryAdded"]
  }
}
```

Der Browser antwortet mit einer Abonnenten-ID wie folgt:

```json
{
  "id": 2,
  "type": "success",
  "result": {
    "subscription": "c7b7b3a2-1f4b-4b4e-8a1f-2a3b4c5d6e7f"
  }
}
```

### Abonnieren mehrerer Ereignisse weltweit

Mit einer [WebDriver BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und einer [aktiven Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) senden Sie die folgende Nachricht, um alle Ereignisse im `log`-Modul und ein spezifisches Ereignis aus dem `network`-Modul zu abonnieren:

```json
{
  "id": 3,
  "method": "session.subscribe",
  "params": {
    "events": ["log", "network.beforeRequestSent"]
  }
}
```

Der Browser antwortet mit einer Abonnenten-ID wie folgt:

```json
{
  "id": 3,
  "type": "success",
  "result": {
    "subscription": "e9d0a5c4-3h6d-6d6g-0c3h-4c5d6e7f8g9h"
  }
}
```

### Abonnieren von Ereignissen, die auf einen Tab beschränkt sind

Angenommen, Ihre Automatisierung hat zwei Tabs geöffnet — einen für die Startseite und einen weiteren für die Checkout-Seite. Um `log.entryAdded`-Ereignisse nur vom Checkout-Tab zu erhalten, senden Sie die folgende Nachricht mit der Kontext-ID dieses Tabs:

```json
{
  "id": 4,
  "method": "session.subscribe",
  "params": {
    "events": ["log.entryAdded"],
    "contexts": ["9b4e2f1a-3c7d-4b8e-a2f5-6d1c9e3b7f4a"]
  }
}
```

Der Browser antwortet mit einer Abonnenten-ID wie folgt:

```json
{
  "id": 4,
  "type": "success",
  "result": {
    "subscription": "a1b2c3d4-5e6f-7a8b-9c0d-1e2f3a4b5c6d"
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Befehl [`session.unsubscribe`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/unsubscribe)
- Befehl [`session.new`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new)
- Befehl [`session.end`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/end)
