---
title: "StorageManager: persist()-Methode"
short-title: persist()
slug: Web/API/StorageManager/persist
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{securecontext_header}}{{APIRef("Storage")}}

Die **`persist()`**-Methode der [`StorageManager`](/de/docs/Web/API/StorageManager)-Schnittstelle fordert die Berechtigung zur Nutzung des persistenten Speichers an und gibt ein {{jsxref('Promise')}} zurück, das auf `true` aufgelöst wird, wenn die Berechtigung erteilt wurde und der Modus des Buckets persistent ist, andernfalls auf `false`. Der Browser kann die Anfrage je nach browserspezifischen Regeln akzeptieren oder ablehnen. (Für weitere Details siehe den Leitfaden zu [Speicherquoten und Löschkriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#does_browser-stored_data_persist).)

> [!NOTE]
> Diese Methode ist in [Web Workers](/de/docs/Web/API/Web_Workers_API) nicht verfügbar, obwohl die [`StorageManager`](/de/docs/Web/API/StorageManager)-Schnittstelle es ist.

## Syntax

```js-nolint
persist()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref('Promise')}}, der sich zu einem {{jsxref('Boolean')}} auflöst.

### Ausnahmen

- `TypeError`
  - : Wird ausgelöst, wenn das Erhalten eines lokalen Speichers nicht erfolgreich war. Zum Beispiel, wenn der aktuelle Ursprung ein undurchsichtiger Ursprung ist oder der Benutzer den Speicher deaktiviert hat.

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
