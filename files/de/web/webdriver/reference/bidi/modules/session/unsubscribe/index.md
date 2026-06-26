---
title: "`session.unsubscribe` Befehl"
short-title: unsubscribe
slug: Web/WebDriver/Reference/BiDi/Modules/session/unsubscribe
l10n:
  sourceCommit: 9703f3f0a1ae56e4e40af5505451f96c78495cb9
---

Der `session.unsubscribe` [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) des [`session`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session) Moduls kündigt Ereignis-Abonnements, die zuvor mit [`session.subscribe`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) registriert wurden, entweder durch Abonnement-ID oder durch Ereignisname.

## Syntax

```json-nolint
/* Using event name */
{
  "method": "session.unsubscribe",
  "params": {
    "events": ["log.entryAdded"]
  }
}

/* Using subscription ID */
{
  "method": "session.unsubscribe",
  "params": {
    "subscriptions": ["a1b2c3d4-e5f6-7890-abcd-ef1234567890"]
  }
}
```

### Parameter

Das `params` Feld enthält eines der folgenden Felder:

- `events`
  - : Ein Array von einem oder mehreren Strings, das Ereignisnamen speichert, um Abonnements zu kündigen.
    Jeder String kann entweder ein spezifischer Ereignisname (zum Beispiel, `"log.entryAdded"`) oder ein Modulname (zum Beispiel, `"log"`) sein, das den Client von allen Ereignissen in diesem Modul abmeldet.
    Nur globale Abonnements können mittels Ereignisnamen entfernt werden; solche, die mit [`contexts`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe#contexts) oder [`userContexts`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe#usercontexts) erstellt wurden, können dies nicht.
- `subscriptions`
  - : Ein Array von einer oder mehreren Abonnement-IDs, das die zu kündigenden Abonnements angibt, einschließlich sowohl globaler als auch kontextbezogener Abonnements.

### Rückgabewert

Das `result` Feld in der Antwort ist ein leeres Objekt (`{}`).

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Wenn Sie IDs zum Abmelden verwenden, wird eine Abonnement-ID nicht gefunden.
    Wenn Sie Ereignisnamen zum Abmelden verwenden, ist das `events` Array leer oder fehlt, oder ein Ereignisname stimmt mit keinem aktiven globalen Abonnement überein.

## Beispiele

### Abmelden mittels einer Abonnement-ID

Mit einem aktiven Abonnement, senden Sie die folgende Nachricht, um es mittels ID zu kündigen:

```json
{
  "id": 3,
  "method": "session.unsubscribe",
  "params": {
    "subscriptions": ["c7b7b3a2-1f4b-4b4e-8a1f-2a3b4c5d6e7f"]
  }
}
```

Nach der erfolgreichen Abmeldung antwortet der Browser wie folgt:

```json
{
  "id": 3,
  "type": "success",
  "result": {}
}
```

### Globales Abmelden von einem Ereignis mittels Ereignisname

Mit einem aktiven globalen Abonnement für `log.entryAdded`, senden Sie die folgende Nachricht, um den Empfang dieses Ereignisses zu stoppen:

```json
{
  "id": 4,
  "method": "session.unsubscribe",
  "params": {
    "events": ["log.entryAdded"]
  }
}
```

Nach der erfolgreichen Abmeldung antwortet der Browser wie folgt:

```json
{
  "id": 4,
  "type": "success",
  "result": {}
}
```

### Globales Abmelden von mehreren Ereignissen mittels Ereignisnamen

Mit aktiven globalen Abonnements, senden Sie die folgende Nachricht, um sich von allen Ereignissen im `log` Modul und einem spezifischen Ereignis aus dem `network` Modul abzumelden:

```json
{
  "id": 5,
  "method": "session.unsubscribe",
  "params": {
    "events": ["log", "network.beforeRequestSent"]
  }
}
```

Nach der erfolgreichen Abmeldung antwortet der Browser wie folgt:

```json
{
  "id": 5,
  "type": "success",
  "result": {}
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`session.subscribe`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) Befehl
- [`session.new`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) Befehl
- [`session.end`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/end) Befehl
