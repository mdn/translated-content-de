---
title: "`session.subscribe`-Befehl"
short-title: subscribe
slug: Web/WebDriver/Reference/BiDi/Modules/session/subscribe
l10n:
  sourceCommit: 421a9c26127cf11e33e72184b14656c9d406294d
---

Der `session.subscribe`-[Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) des [`session`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session)-Moduls registriert den Client, um Ereignisse asynchron zu empfangen, entweder pro Ereignis oder pro Modul, global oder auf spezifische Kontexte begrenzt.

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
  - : Ein Array von einem oder mehreren Ereignisnamen als Zeichenfolgen. Verwenden Sie einen Modulnamen (zum Beispiel `"log"`), um sich für alle Ereignisse in diesem Modul zu registrieren, oder einen spezifischen Ereignisnamen (zum Beispiel `"log.entryAdded"`), um sich nur für dieses Ereignis zu registrieren.
- `contexts` {{optional_inline}}
  - : Ein Array von einer oder mehreren Kontext-IDs ({{Glossary("UUID", "UUIDs")}}), die jeweils einem Tab oder Frame entsprechen.
    Wenn angegeben, werden Ereignisse nur für diese Kontexte und deren Nachkommen empfangen.
    Wenn die Kontext-ID einem Frame entspricht, wird die Registrierung für den übergeordneten Kontext (Tab) erstellt, der den Frame besitzt.

    Dieses Feld kann nicht verwendet werden, wenn `userContexts` ebenfalls angegeben ist.

- `userContexts` {{optional_inline}}
  - : Ein Array von einer oder mehreren Benutzerkontext-IDs, die jeweils einem Browserkontext oder Container entsprechen.
    Wenn angegeben, werden Ereignisse nur für diese Benutzerkontexte empfangen.

    Dieses Feld kann nicht verwendet werden, wenn `contexts` ebenfalls angegeben ist.

Wenn weder `contexts` noch `userContexts` bereitgestellt werden, ist die Registrierung global, sodass Ereignisse für alle Kontexte empfangen werden.

### Rückgabewert

Das `result`-Feld in der Antwort ist ein Objekt mit dem folgenden Feld:

- `subscription`
  - : Ein Zeichenfolgenwert, der die eindeutige Kennung für diese Registrierung enthält.

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Das `events`-Array ist leer, nicht vorhanden oder enthält einen nicht erkannten Ereignisnamen.
    - `contexts` oder `userContexts` ist angegeben, aber leer.
    - Sowohl `contexts` als auch `userContexts` sind in derselben Anfrage angegeben.
    - Ein Parameterwert hat einen ungültigen Typ.

## Beispiele

### Globales Abonnieren eines Ereignisses

Mit einer [WebDriver-BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und einer [aktiven Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) senden Sie die folgende Nachricht, um das `log.entryAdded`-Ereignis für alle Kontexte zu abonnieren:

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

Mit einer [WebDriver-BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und einer [aktiven Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) senden Sie die folgende Nachricht, um alle Ereignisse im `log`-Modul und ein spezifisches Ereignis aus dem `network`-Modul zu abonnieren:

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

Angenommen, Ihre Automatisierung hat zwei Tabs geöffnet — einen für die Startseite und einen für die Checkout-Seite. Um `log.entryAdded`-Ereignisse nur vom Checkout-Tab zu empfangen, senden Sie die folgende Nachricht mit der Kontext-ID dieses Tabs:

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

- [`session.unsubscribe`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/unsubscribe)-Befehl
- [`session.new`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new)-Befehl
- [`session.end`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/end)-Befehl
