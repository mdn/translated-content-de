---
title: "StorageManager: persisted() Methode"
short-title: persisted()
slug: Web/API/StorageManager/persisted
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{securecontext_header}}{{APIRef("Storage")}} {{AvailableInWorkers}}

Die **`persisted()`** Methode der {{domxref("StorageManager")}} Schnittstelle gibt ein {{jsxref('Promise')}} zurück, das sich zu `true` auflöst, wenn der Speicherbereich Ihrer Website persistent ist.

## Syntax

```js-nolint
persisted()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref('Promise')}}, das sich zu einem {{jsxref('Boolean')}} auflöst.

### Ausnahmen

- `TypeError`
  - : Wird ausgelöst, wenn das Abrufen eines lokalen Speichers nicht möglich war. Zum Beispiel, wenn der aktuelle Ursprung ein undurchsichtiger Ursprung ist oder der Benutzer den Speicher deaktiviert hat.

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
