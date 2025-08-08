---
title: StorageArea.getKeys()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/getKeys
l10n:
  sourceCommit: 4ef3e1f2a81f81bb9b3662dd835a6ac07eadd678
---

Ruft die Schlüssel aller Elemente in einem Speicherbereich ab.

## Syntax

```js-nolint
let results = browser.storage.<storageType>.getKeys();
```

Wobei `<storageType>` einer der Speichertypen ist — {{WebExtAPIRef("storage.sync", "sync")}}, {{WebExtAPIRef("storage.local", "local")}}, {{WebExtAPIRef("storage.session", "session")}}, oder {{WebExtAPIRef("storage.managed", "managed")}}.

### Parameter

Diese Methode nimmt keine Parameter entgegen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das in ein Array aufgelöst wird, das die Speicherartikel-Schlüssel enthält.

Wenn die Operation fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

Wenn verwalteter Speicher nicht gesetzt ist, wird `undefined` zurückgegeben.

> [!WARNING]
> In Firefox wird eine Ausnahme ausgelöst, wenn der verwaltete Speicher einer Erweiterung nicht mit einem [nativen Manifest](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#managed_storage_manifests) oder mittels der [`3rdparty` Unternehmensrichtlinie](https://mozilla.github.io/policy-templates/#3rdparty) konfiguriert wurde und diese Funktion zum Zugreifen auf verwalteten Speicher verwendet wird (siehe [Firefox-Bug 1868153](https://bugzil.la/1868153)). Dieses Problem kann vermieden werden, indem der Fehler abgefangen wird. Dieses Problem steht im Zusammenhang mit der fehlenden Unterstützung des [`storage.managed_schema`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/storage) Manifest-Schlüssels (siehe [Firefox-Bug 1771731](https://bugzil.la/1771731)).

## Beispiele

Angenommen, der Speicher enthält zwei Elemente:

```js
// storage contains two items, "kitten" and "monster"
browser.storage.local.set({
  kitten: { name: "Mog", eats: "mice" },
  monster: { name: "Kraken", eats: "people" },
});
```

Rufen Sie die Schlüssel aller Elemente in storage.local ab und protokollieren Sie das Ergebnis.

```js
browser.storage.local
  .getKeys()
  .then((keys) => console.log(keys)) // [ "kitten", "monster" ]
  .catch((err) => console.error(`Error: ${err}`));
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
