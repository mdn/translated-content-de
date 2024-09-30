---
title: "StorageManager: persist() Methode"
short-title: persist()
slug: Web/API/StorageManager/persist
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{securecontext_header}}{{APIRef("Storage")}}

Die **`persist()`**-Methode der [`StorageManager`](/de/docs/Web/API/StorageManager)-Schnittstelle fordert die Erlaubnis an, persistenten Speicher zu verwenden, und gibt ein {{jsxref('Promise')}} zurück, das sich auf `true` auflöst, wenn die Erlaubnis erteilt und der Bucket-Modus persistent ist, und auf `false` sonst. Der Browser könnte die Anfrage je nach browser-spezifischen Regeln berücksichtigen oder nicht. (Für weitere Details siehe den Leitfaden zu [Speicherquoten und Löschkriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#does_browser-stored_data_persist).)

> [!NOTE]
> Diese Methode ist nicht in [Web Workers](/de/docs/Web/API/Web_Workers_API) verfügbar, obwohl die [`StorageManager`](/de/docs/Web/API/StorageManager)-Schnittstelle es ist.

## Syntax

```js-nolint
persist()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref('Promise')}}, das sich auf einen {{jsxref('Boolean')}} auflöst.

### Ausnahmen

- `TypeError`
  - : Wird ausgelöst, wenn das Erhalten eines lokalen Speicherung-Regals fehlschlägt. Zum Beispiel, wenn der aktuelle Ursprung ein opaker Ursprung ist oder wenn der Benutzer den Speicher deaktiviert hat.

## Beispiel

```js
if (navigator.storage && navigator.storage.persist) {
  navigator.storage.persist().then((persistent) => {
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
