---
title: "`session.subscribe`-Befehl"
short-title: subscribe
slug: Web/WebDriver/Reference/BiDi/Modules/session/subscribe
l10n:
  sourceCommit: 9703f3f0a1ae56e4e40af5505451f96c78495cb9
---

Der `session.subscribe` [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) des [`session`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session) Moduls registriert den Client für den asynchronen Empfang von Ereignissen, entweder pro Ereignis oder pro Modul, global oder auf spezifische Kontexte beschränkt.

## Syntax

```json-nolint
/* With required parameters */
{
  "method": "session.subscribe",
  "params": {
    "events": ["log.entryAdded"]
  }
}

/* With required and optional parameters */
{
  "method": "session.subscribe",
  "params": {
    "events": ["log.entryAdded"],
    "contexts": ["93ee5bd6-d256-4608-a002-9a8995cc0e5f"]
  }
}
```

### Parameter

Das `params`-Feld enthält:

- `contexts` {{optional_inline}}
  - : Ein Array mit einer oder mehreren Kontext-ID-Strings, jeweils entsprechend einem Tab oder Frame.
    Kontext-IDs werden durch Befehle wie [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) zurückgegeben.
    Wenn angegeben, werden Ereignisse nur für diese Kontexte und deren Nachkommen empfangen.
    Wenn die Kontext-ID einem Frame entspricht, wird das Abonnement für den übergeordneten Kontext (Tab) erstellt, dem der Frame gehört.

    Dieses Feld kann nicht verwendet werden, wenn `userContexts` ebenfalls angegeben ist.

- `events`
  - : Ein Array mit einem oder mehreren Ereignisnamen-Strings.
    Verwenden Sie einen Modulnamen (zum Beispiel `"log"`), um alle Ereignisse in diesem Modul zu abonnieren, oder einen spezifischen Ereignisnamen (zum Beispiel `"log.entryAdded"`), um nur dieses Ereignis zu abonnieren.
- `userContexts` {{optional_inline}}
  - : Ein Array mit einer oder mehreren Benutzerkontext-ID-Strings, jeweils entsprechend einem Browserkontext oder Container.
    Benutzerkontext-IDs werden durch Befehle wie [`browser.createUserContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) oder [`browser.getUserContexts`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts) zurückgegeben.
    Wenn angegeben, werden Ereignisse nur für diese Benutzerkontexte empfangen.

    Dieses Feld kann nicht verwendet werden, wenn `contexts` ebenfalls angegeben ist.

Wenn weder `contexts` noch `userContexts` angegeben sind, ist das Abonnement global, sodass Ereignisse für alle Kontexte empfangen werden.

### Rückgabewert

Das `result`-Feld in der Antwort ist ein Objekt mit folgendem Feld:

- `subscription`
  - : Ein String, der die eindeutige Kennung für dieses Abonnement enthält.

### Fehler

- [`InvalidArgument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Das `events`-Array ist leer, weggelassen oder enthält einen nicht erkannten Ereignisnamen.
    - `contexts` oder `userContexts` ist angegeben, aber leer.
    - Sowohl `contexts` als auch `userContexts` sind in derselben Anfrage angegeben.
    - Ein Parameterwert hat einen ungültigen Typ.

## Beispiele

### Globales Abonnieren eines Ereignisses

Mit einer [WebDriver BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und einer [aktiven Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) senden Sie die folgende Nachricht, um das `log.entryAdded` Ereignis für alle Kontexte zu abonnieren:

```json
{
  "id": 2,
  "method": "session.subscribe",
  "params": {
    "events": ["log.entryAdded"]
  }
}
```

Der Browser antwortet mit einer Abonnement-ID wie folgt:

```json
{
  "id": 2,
  "type": "success",
  "result": {
    "subscription": "c7b7b3a2-1f4b-4b4e-8a1f-2a3b4c5d6e7f"
  }
}
```

### Globales Abonnieren mehrerer Ereignisse

Mit einer [WebDriver BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und einer [aktiven Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) senden Sie die folgende Nachricht, um alle Ereignisse im `log` Modul und ein spezifisches Ereignis aus dem `network` Modul zu abonnieren:

```json
{
  "id": 3,
  "method": "session.subscribe",
  "params": {
    "events": ["log", "network.beforeRequestSent"]
  }
}
```

Der Browser antwortet mit einer Abonnement-ID wie folgt:

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

Angenommen, Ihre Automatisierung hat zwei Tabs geöffnet — einen für die Startseite und einen für die Checkout-Seite. Um `log.entryAdded` Ereignisse nur vom Checkout-Tab zu empfangen, senden Sie die folgende Nachricht mit der Kontext-ID dieses Tabs:

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

Der Browser antwortet mit einer Abonnement-ID wie folgt:

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

- [`session.unsubscribe`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/unsubscribe) Befehl
- [`session.new`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) Befehl
- [`session.end`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/end) Befehl
