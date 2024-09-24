---
title: "StorageManager: persist()-Methode"
short-title: persist()
slug: Web/API/StorageManager/persist
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{securecontext_header}}{{APIRef("Storage")}}

Die **`persist()`**-Methode der {{domxref("StorageManager")}}-Schnittstelle fordert die Erlaubnis an, persistenten Speicher zu verwenden, und gibt ein {{jsxref('Promise')}} zurück, das bei erteilter Erlaubnis und persistentem Bucket-Modus `true` ergibt, sonst `false`. Der Browser kann die Anfrage abhängig von spezifischen Browserregeln akzeptieren oder ablehnen. (Weitere Details finden Sie im Leitfaden zu [Speicherquoten und Löschkriterien](/de/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria#does_browser-stored_data_persist).)

> [!NOTE]
> Diese Methode ist nicht in [Web Workern](/de/docs/Web/API/Web_Workers_API) verfügbar, obwohl die {{domxref("StorageManager")}}-Schnittstelle dort ist.

## Syntax

```js-nolint
persist()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref('Promise')}}, das zu einem {{jsxref('Boolean')}} aufgelöst wird.

### Ausnahmen

- `TypeError`
  - : Wird ausgelöst, wenn das Abrufen eines lokalen Speicherbereichs fehlschlägt. Zum Beispiel, wenn der aktuelle Ursprung ein opaker Ursprung ist oder der Nutzer den Speicher deaktiviert hat.

## Beispiel

```js
if (navigator.storage && navigator.storage.persist) {
  navigator.storage.persist().then((persistent) => {
    if (persistent) {
      console.log("Speicher wird nur durch explizite Benutzereingriffe gelöscht");
    } else {
      console.log("Speicher kann vom UA unter Speicherdruck gelöscht werden.");
    }
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
