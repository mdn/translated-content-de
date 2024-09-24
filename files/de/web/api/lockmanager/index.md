---
title: LockManager
slug: Web/API/LockManager
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Web Locks API")}}{{securecontext_header}} {{AvailableInWorkers}}

Die **`LockManager`**-Schnittstelle der [Web Locks API](/de/docs/Web/API/Web_Locks_API) bietet Methoden zum Anfordern eines neuen {{domxref('Lock')}}-Objekts und zum Abfragen eines vorhandenen `Lock`-Objekts. Um eine Instanz von `LockManager` zu erhalten, rufen Sie {{domxref('navigator.locks')}} auf.

## Instanzmethoden

- {{domxref('LockManager.request()')}}
  - : Fordert ein {{domxref('Lock')}}-Objekt mit Parametern an, die seinen Namen und seine Eigenschaften spezifizieren.
- {{domxref('LockManager.query()')}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das mit einem Objekt aufgelöst wird, das Informationen über gehaltene und ausstehende Sperren enthält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
