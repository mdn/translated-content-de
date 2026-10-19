---
title: "`session.subscribe`-Befehl"
short-title: subscribe
slug: Web/WebDriver/Reference/BiDi/Modules/session/subscribe
l10n:
  sourceCommit: eb950353cc947fb1c00397334b13a5f9457d734a
---

Der [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) `session.subscribe` des Moduls [`session`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session) registriert den Client für den asynchronen Empfang von Ereignissen. Das Abonnement kann einzelne Ereignisse oder alle Ereignisse eines Moduls umfassen und entweder global gelten oder auf bestimmte Kontexte beschränkt sein.

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

Das Feld `params` enthält:

- `contexts` {{optional_inline}}
  - : Ein Array mit einer oder mehreren Kontext-ID-Zeichenfolgen, die jeweils einem Tab oder Frame entsprechen.
    Wenn dieses Feld angegeben ist, werden Ereignisse nur für diese Kontexte und ihre untergeordneten Kontexte empfangen.
    Entspricht die Kontext-ID einem Frame, wird das Abonnement für den übergeordneten Top-Level-Kontext (Tab) erstellt.

    Dieses Feld kann nicht verwendet werden, wenn auch `userContexts` angegeben ist.

    Kontext-IDs werden von Befehlen wie [`browsingContext.getTree`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/getTree) zurückgegeben.

- `events`
  - : Ein Array mit einem oder mehreren Ereignisnamen als Zeichenfolgen.
    Verwenden Sie einen Modulnamen (zum Beispiel `"log"`), um alle Ereignisse dieses Moduls zu abonnieren, oder einen bestimmten Ereignisnamen (zum Beispiel `"log.entryAdded"`), um nur dieses Ereignis zu abonnieren.
- `userContexts` {{optional_inline}}
  - : Ein Array mit einer oder mehreren Benutzerkontext-ID-Zeichenfolgen, die jeweils einem Browserkontext oder Container entsprechen.
    Wenn dieses Feld angegeben ist, werden Ereignisse nur für diese Benutzerkontexte empfangen.

    Dieses Feld kann nicht verwendet werden, wenn auch `contexts` angegeben ist.

    Benutzerkontext-IDs werden von Befehlen wie [`browser.createUserContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/createUserContext) oder [`browser.getUserContexts`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/getUserContexts) zurückgegeben.

Wenn weder `contexts` noch `userContexts` angegeben ist, gilt das Abonnement global. Ereignisse werden dann für alle Kontexte empfangen.

### Rückgabewert

Das Feld `result` in der Antwort ist ein Objekt mit folgendem Feld:

- `subscription`
  - : Eine Zeichenfolge mit der eindeutigen Kennung dieses Abonnements.

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Wird in einem der folgenden Fälle ausgelöst:
    - Das Array `events` ist leer, fehlt oder enthält einen unbekannten Ereignisnamen.
    - `contexts` oder `userContexts` ist angegeben, aber leer.
    - Sowohl `contexts` als auch `userContexts` sind in derselben Anfrage angegeben.
    - Ein Parameterwert hat einen ungültigen Typ.

## Beispiele

### Ein Ereignis global abonnieren

Senden Sie bei bestehender [WebDriver-BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und [aktiver Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) die folgende Nachricht, um das Ereignis `log.entryAdded` für alle Kontexte zu abonnieren:

```json
{
  "id": 2,
  "method": "session.subscribe",
  "params": {
    "events": ["log.entryAdded"]
  }
}
```

Der Browser antwortet mit einer Abonnement-ID:

```json
{
  "id": 2,
  "type": "success",
  "result": {
    "subscription": "c7b7b3a2-1f4b-4b4e-8a1f-2a3b4c5d6e7f"
  }
}
```

### Mehrere Ereignisse global abonnieren

Senden Sie bei bestehender [WebDriver-BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection) und [aktiver Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) die folgende Nachricht, um alle Ereignisse des Moduls `log` und ein bestimmtes Ereignis des Moduls `network` zu abonnieren:

```json
{
  "id": 3,
  "method": "session.subscribe",
  "params": {
    "events": ["log", "network.beforeRequestSent"]
  }
}
```

Der Browser antwortet mit einer Abonnement-ID:

```json
{
  "id": 3,
  "type": "success",
  "result": {
    "subscription": "e9d0a5c4-3h6d-6d6g-0c3h-4c5d6e7f8g9h"
  }
}
```

### Ereignisse für einen bestimmten Tab abonnieren

Angenommen, Ihre Automatisierung hat zwei Tabs geöffnet – einen für die Startseite und einen für die Checkout-Seite. Um `log.entryAdded`-Ereignisse nur vom Checkout-Tab zu empfangen, senden Sie die folgende Nachricht mit der Kontext-ID dieses Tabs:

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

Der Browser antwortet mit einer Abonnement-ID:

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
