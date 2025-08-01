---
title: StorageArea.getKeys()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/getKeys
l10n:
  sourceCommit: 89d941878af42738cbd429acaa06789db7fa55f6
---

Ruft die Schlüssel aller Elemente in einem Speicherbereich ab.

## Syntax

```js-nolint
let results = browser.storage.<storageType>.getKeys();
```

Wobei `<storageType>` einer der Speichertypen ist — {{WebExtAPIRef("storage.sync", "sync")}}, {{WebExtAPIRef("storage.local", "local")}}, {{WebExtAPIRef("storage.session", "session")}}, oder {{WebExtAPIRef("storage.managed", "managed")}}.

### Parameter

Diese Methode erfordert keine Parameter.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das zu einem Array aufgelöst wird, das die Schlüssel der Speicherelemente enthält.

Falls die Operation fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

Ist der verwaltete Speicher nicht gesetzt, wird `undefined` zurückgegeben.

> [!WARNING]
> In Firefox wird eine Ausnahme ausgelöst, wenn der verwaltete Speicher einer Erweiterung nicht mit einem [nativen Manifest](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#managed_storage_manifests) oder mit der Verwendung der [`3rdparty` Unternehmensrichtlinie](https://mozilla.github.io/policy-templates/#3rdparty) konfiguriert wurde und diese Funktion zum Zugriff auf den verwalteten Speicher verwendet wird (siehe [Firefox-Bug 1868153](https://bugzil.la/1868153)). Dieses Problem kann vermieden werden, indem der Fehler abgefangen wird. Dieses Problem steht im Zusammenhang mit dem fehlenden Support für den [`storage.managed_schema`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/storage) Manifest-Schlüssel (siehe [Firefox-Bug 1771731](https://bugzil.la/1771731)).

## Beispiele

Angenommen, der Speicher enthält zwei Elemente:

```js
// storage contains two items, "kitten" and "monster"
browser.storage.local.set({
  kitten: { name: "Mog", eats: "mice" },
  monster: { name: "Kraken", eats: "people" },
});
```

Rufen Sie die Schlüssel aller Elemente in `storage.local` ab und protokollieren Sie das Ergebnis.

```js
browser.storage.local
  .getKeys()
  .then((keys) => console.log(keys)) // [ "kitten", "monster" ]
  .catch((err) => console.error(`Error: ${error}`));
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
