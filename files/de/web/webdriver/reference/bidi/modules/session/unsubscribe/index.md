---
title: "`session.unsubscribe`-Befehl"
short-title: unsubscribe
slug: Web/WebDriver/Reference/BiDi/Modules/session/unsubscribe
l10n:
  sourceCommit: 421a9c26127cf11e33e72184b14656c9d406294d
---

Der `session.unsubscribe` [Befehl](/de/docs/Web/WebDriver/Reference/BiDi/Modules#commands) des [`session`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session) Moduls storniert zuvor mit [`session.subscribe`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) registrierte Ereignisabonnements, entweder anhand der Abonnement-ID oder des Ereignisnamens.

## Syntax

Um sich mit einer Abonnement-ID abzumelden:

```json-nolint
{
  "method": "session.unsubscribe",
  "params": {
    "subscriptions": ["<subscription ID>"]
  }
}
```

Um sich mit einem Ereignisnamen abzumelden:

```json-nolint
{
  "method": "session.unsubscribe",
  "params": {
    "events": ["<event name>"]
  }
}
```

### Parameter

Das `params`-Feld enthält eines der folgenden Felder:

- `subscriptions`
  - : Ein Array von einem oder mehreren Abonnement-IDs, das die zu stornierenden Abonnements spezifiziert, einschließlich sowohl globaler als auch kontextbezogener Abonnements.
- `events`
  - : Ein Array von einem oder mehreren Strings, das Ereignisnamen für die Kündigung von Abonnements spezifiziert. Jeder String kann entweder ein spezifischer Ereignisname (zum Beispiel, `"log.entryAdded"`) oder ein Modulname (zum Beispiel, `"log"`) sein, der den Client von allen Ereignissen in diesem Modul abmeldet. Nur globale Abonnements können mit Ereignisnamen entfernt werden; diejenigen, die mit [`contexts`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe#contexts) oder [`userContexts`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe#usercontexts) erstellt wurden, können nicht.

### Rückgabewert

Das `result`-Feld in der Antwort ist ein leeres Objekt (`{}`).

### Fehler

- [`invalid argument`](/de/docs/Web/WebDriver/Reference/Errors/InvalidArgument)
  - : Wenn beim Abmelden mit IDs eine Abonnement-ID nicht gefunden wurde. Beim Abmelden mit Ereignisnamen ist das `events`-Array leer oder weggelassen, oder ein Ereignisname stimmt mit keinem aktiven globalen Abonnement überein.

## Beispiele

### Abmelden mit einer Abonnement-ID

Bei einem aktiven Abonnement senden Sie die folgende Nachricht, um es per ID zu stornieren:

```json
{
  "id": 3,
  "method": "session.unsubscribe",
  "params": {
    "subscriptions": ["c7b7b3a2-1f4b-4b4e-8a1f-2a3b4c5d6e7f"]
  }
}
```

Nach erfolgreicher Abmeldung antwortet der Browser wie folgt:

```json
{
  "id": 3,
  "type": "success",
  "result": {}
}
```

### Abmelden von einem Ereignis global mit einem Ereignisnamen

Bei einem globalen Abonnement für `log.entryAdded` aktiv, senden Sie die folgende Nachricht, um das Empfangen dieses Ereignisses zu stoppen:

```json
{
  "id": 4,
  "method": "session.unsubscribe",
  "params": {
    "events": ["log.entryAdded"]
  }
}
```

Nach erfolgreicher Abmeldung antwortet der Browser wie folgt:

```json
{
  "id": 4,
  "type": "success",
  "result": {}
}
```

### Abmelden von mehreren Ereignissen global mit Ereignisnamen

Bei aktiven globalen Abonnements senden Sie die folgende Nachricht, um sich von allen Ereignissen im `log`-Modul und einem spezifischen Ereignis aus dem `network`-Modul abzumelden:

```json
{
  "id": 5,
  "method": "session.unsubscribe",
  "params": {
    "events": ["log", "network.beforeRequestSent"]
  }
}
```

Nach erfolgreicher Abmeldung antwortet der Browser wie folgt:

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
