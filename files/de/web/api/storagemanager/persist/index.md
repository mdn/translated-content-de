---
title: "StorageManager: Methode persist()"
short-title: persist()
slug: Web/API/StorageManager/persist
l10n:
  sourceCommit: 41a472e5bad6c6d2698d6e85c1172909cb102fa1
---

{{securecontext_header}}{{APIRef("Storage")}}

Die Methode **`persist()`** der [`StorageManager`](/de/docs/Web/API/StorageManager)-Schnittstelle fordert die Berechtigung zur Nutzung dauerhaften Speichers an und gibt ein {{jsxref('Promise')}} zurück, das zu `true` aufgelöst wird, wenn die Berechtigung erteilt wurde und der Bucket-Modus dauerhaft ist, andernfalls zu `false`. Ob der Browser der Anfrage entspricht, hängt von browserspezifischen Regeln ab. (Weitere Einzelheiten finden Sie im Leitfaden zu [Speicherkontingenten und Kriterien für die Datenentfernung](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#does_browser-stored_data_persist).)

> [!NOTE]
> Diese Methode ist in [Web Workers](/de/docs/Web/API/Web_Workers_API) nicht verfügbar, die [`StorageManager`](/de/docs/Web/API/StorageManager)-Schnittstelle hingegen schon.

## Syntax

```js-nolint
persist()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref('Promise')}}, das zu einem {{jsxref('Boolean')}} aufgelöst wird.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn kein lokaler Speicherbereich abgerufen werden konnte. Dies kann beispielsweise der Fall sein, wenn der aktuelle Ursprung ein opaker Ursprung ist oder der Benutzer die Speicherung deaktiviert hat.

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
