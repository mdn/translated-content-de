---
title: session.unsubscribe Befehl
short-title: session.unsubscribe
slug: Web/WebDriver/Reference/BiDi/Modules/session/unsubscribe
l10n:
  sourceCommit: f83c12ab41865e0e195dd36ad9cdcad511a36957
---

Der `session.unsubscribe` [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) des [`session`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session) Moduls storniert zuvor registrierte Ereignisabonnements mit [`session.subscribe`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe), entweder durch Abonnement-ID oder durch Ereignisnamen.

## Syntax

Zum Abbestellen mit Abonnement-ID:

```json-nolint
{
  "method": "session.unsubscribe",
  "params": {
    "subscriptions": ["<subscription ID>"]
  }
}
```

Zum Abbestellen mit Ereignisnamen:

```json-nolint
{
  "method": "session.unsubscribe",
  "params": {
    "events": ["<event name>"]
  }
}
```

### Parameter

Das `params` Feld enthält eines der folgenden Felder:

- `subscriptions`
  - : Ein Array von einer oder mehreren Abonnement-IDs, das die zu stornierenden Abonnements spezifiziert, einschließlich beider globaler und kontextbezogener Abonnements.
- `events`
  - : Ein Array von einem oder mehreren Strings, das Ereignisnamen spezifiziert, um Abonnements zu beenden.
    Jeder String kann entweder ein spezifischer Ereignisname sein (zum Beispiel `"log.entryAdded"`) oder ein Modulname (zum Beispiel `"log"`), der den Client von allen Ereignissen in diesem Modul abmeldet.
    Nur globale Abonnements können mit Ereignisnamen entfernt werden; diejenigen, die mit [`contexts`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe#contexts) oder [`userContexts`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe#usercontexts) erstellt wurden, können es nicht.

### Rückgabewert

Das `result` Feld in der Antwort ist ein leeres Objekt (`{}`).

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Wenn beim Abbestellen mit IDs eine Abonnement-ID nicht gefunden wird.
    Wenn beim Abbestellen mit Ereignisnamen das `events` Array leer oder ausgelassen ist oder ein Ereignisname keiner aktiven globalen Abonnement entspricht.

## Beispiele

### Abbestellen mit einer Abonnement-ID

Mit einem aktiven Abonnement senden Sie die folgende Nachricht, um es nach ID zu kündigen:

```json
{
  "id": 3,
  "method": "session.unsubscribe",
  "params": {
    "subscriptions": ["c7b7b3a2-1f4b-4b4e-8a1f-2a3b4c5d6e7f"]
  }
}
```

Nach erfolgreichem Abbestellen antwortet der Browser wie folgt:

```json
{
  "id": 3,
  "type": "success",
  "result": {}
}
```

### Globales Abbestellen von einem Ereignis unter Verwendung eines Ereignisnamens

Mit einem globalen Abonnement für `log.entryAdded` aktiv, senden Sie die folgende Nachricht, um das Empfangen dieses Ereignisses zu beenden:

```json
{
  "id": 4,
  "method": "session.unsubscribe",
  "params": {
    "events": ["log.entryAdded"]
  }
}
```

Nach erfolgreichem Abbestellen antwortet der Browser wie folgt:

```json
{
  "id": 4,
  "type": "success",
  "result": {}
}
```

### Globales Abbestellen von mehreren Ereignissen unter Verwendung von Ereignisnamen

Mit aktiven globalen Abonnements senden Sie die folgende Nachricht, um alle Ereignisse im `log` Modul und ein spezifisches Ereignis aus dem `network` Modul abzumelden:

```json
{
  "id": 5,
  "method": "session.unsubscribe",
  "params": {
    "events": ["log", "network.beforeRequestSent"]
  }
}
```

Nach erfolgreichem Abbestellen antwortet der Browser wie folgt:

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
