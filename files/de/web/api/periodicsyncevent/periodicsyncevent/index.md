---
title: "PeriodicSyncEvent: PeriodicSyncEvent() Konstruktor"
short-title: PeriodicSyncEvent()
slug: Web/API/PeriodicSyncEvent/PeriodicSyncEvent
l10n:
  sourceCommit: 0ca040b6a9cfd931558bd1d3a402707abddc1924
---

{{APIRef("Periodic Background Sync")}}{{SeeCompatTable}}{{AvailableInWorkers("service")}}

Der **`PeriodicSyncEvent()`** Konstruktor erstellt ein neues [`PeriodicSyncEvent`](/de/docs/Web/API/PeriodicSyncEvent)-Objekt. Dieser Konstruktor wird normalerweise nicht verwendet. Der Browser erstellt diese Objekte selbst und stellt sie der [`onperiodicsync`](/de/docs/Web/API/ServiceWorkerGlobalScope/periodicsync_event) Callback-Funktion zur Verfügung.

## Syntax

```js-nolint
new PeriodicSyncEvent(type, options)
```

### Parameter

- `type`
  - : Ein String mit dem Namen des Ereignisses.
    Er ist case-sensitive und Browser setzen ihn auf `periodicsync`.
- `options`
  - : Ein Objekt, das neben den in [`Event()`](/de/docs/Web/API/Event/Event) definierten Eigenschaften auch die folgenden Eigenschaften haben kann:
    - `tag`
      - : Das Tag, das das Sync-Ereignis referenziert.

### Rückgabewert

Ein neues [`PeriodicSyncEvent`](/de/docs/Web/API/PeriodicSyncEvent)-Objekt, das mit den gegebenen Eingaben konfiguriert wurde.

## Beispiele

Dieses Beispiel erstellt ein neues [`PeriodicSyncEvent`](/de/docs/Web/API/PeriodicSyncEvent) mit dem relevanten zugeordneten Tag.

```js
const psEvent = new ExtendableEvent("periodicsync", { tag: "unique-tag" });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Vollständigere Offline-Erfahrungen mit der Periodic Background Sync API](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
