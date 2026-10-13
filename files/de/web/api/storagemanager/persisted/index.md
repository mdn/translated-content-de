---
title: "StorageManager: Methode persisted()"
short-title: persisted()
slug: Web/API/StorageManager/persisted
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{securecontext_header}}{{APIRef("Storage")}} {{AvailableInWorkers}}

Die Methode **`persisted()`** der [`StorageManager`](/de/docs/Web/API/StorageManager)-Schnittstelle gibt ein {{jsxref('Promise')}} zurück, das mit `true` erfüllt wird, wenn der Storage-Bucket Ihrer Website persistent ist.

## Syntax

```js-nolint
persisted()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref('Promise')}}, das mit einem {{jsxref('Boolean')}} erfüllt wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn der Zugriff auf den lokalen Speicherbereich fehlschlägt. Dies kann beispielsweise der Fall sein, wenn der aktuelle Origin ein opaker Origin ist oder der Benutzer die Speicherung deaktiviert hat.

## Beispiel

```js
if (navigator.storage && navigator.storage.persist) {
  navigator.storage.persisted().then((persistent) => {
    if (persistent) {
      console.log("Storage will not be cleared except by explicit user action");
    } else {
      console.log("Storage may be cleared by the UA under storage pressure.");
    }
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
