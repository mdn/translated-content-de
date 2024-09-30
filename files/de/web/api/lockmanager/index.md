---
title: LockManager
slug: Web/API/LockManager
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Locks API")}}{{securecontext_header}} {{AvailableInWorkers}}

Die **`LockManager`** Schnittstelle der [Web Locks API](/de/docs/Web/API/Web_Locks_API) bietet Methoden zum Anfordern eines neuen [`Lock`](/de/docs/Web/API/Lock)-Objekts und zum Abfragen eines vorhandenen `Lock`-Objekts. Um eine Instanz von `LockManager` zu erhalten, rufen Sie [`navigator.locks`](/de/docs/Web/API/Navigator/locks) auf.

## Instanzmethoden

- [`LockManager.request()`](/de/docs/Web/API/LockManager/request)
  - : Fordert ein [`Lock`](/de/docs/Web/API/Lock)-Objekt mit Parametern an, die dessen Namen und Eigenschaften spezifizieren.
- [`LockManager.query()`](/de/docs/Web/API/LockManager/query)
  - : Gibt ein {{jsxref('Promise')}} zurück, das mit einem Objekt aufgelöst wird, das Informationen über gehaltene und ausstehende Sperren enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
