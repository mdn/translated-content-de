---
title: StorageArea.get()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/get
l10n:
  sourceCommit: 267c7effd70f84cfeb4355ed1a63b1c059284a75
---

{{AddonSidebar}}

Ruft ein oder mehrere Elemente aus dem Speicherbereich ab.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let results = browser.storage.<storageType>.get(
  keys    // null, string, object or array of strings
)
```

Wo `<storageType>` einer der Speichertypen ist — {{WebExtAPIRef("storage.sync", "sync")}}, {{WebExtAPIRef("storage.local", "local")}}, {{WebExtAPIRef("storage.session", "session")}}, oder {{WebExtAPIRef("storage.managed", "managed")}}.

### Parameter

- `keys`
  - : Ein Schlüssel (`string`) oder Schlüssel (ein Array von Strings, _oder_ ein Objekt, das Standardwerte angibt), um das/die abzurufende(n) Element(e) im Speicher zu identifizieren. Wenn Sie hier ein leeres Objekt oder Array übergeben, wird ein leeres Objekt abgerufen. Wenn Sie `null` oder einen undefinierten Wert übergeben, werden die gesamten Speicherinhalte abgerufen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das zu einem `results`-Objekt aufgelöst wird, das ein Schlüssel-Wert-Paar für jeden in `keys` gefundenen Schlüssel im Speicherbereich enthält. Wenn `keys` ein Objekt ist, nimmt jeder Schlüssel, der im Speicher nicht gefunden wird, den Standardwert aus dem `keys`-Objekt an.

Wenn der Vorgang fehlschlägt, wird das Promise mit einer Fehlermeldung abgelehnt.

Wenn verwalteter Speicher nicht gesetzt ist, wird `undefined` zurückgegeben.

> [!WARNING]
> In Firefox wird, wenn der verwaltete Speicher einer Erweiterung nicht mit einem [nativen Manifest](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#managed_storage_manifests) oder mit der Verwendung der [`3rdparty` Unternehmensrichtlinie](https://mozilla.github.io/policy-templates/#3rdparty) konfiguriert wurde, eine Ausnahme ausgelöst, wenn diese Funktion zum Zugriff auf den verwalteten Speicher verwendet wird (siehe [Firefox-Fehler 1868153](https://bugzil.la/1868153)). Dieses Problem kann vermieden werden, indem der Fehler abgefangen wird. Dieses Problem steht im Zusammenhang mit dem fehlenden Support für den [`storage.managed_schema`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/storage) Manifest-Schlüssel (siehe [Firefox-Fehler 1771731](https://bugzil.la/1771731)).

## Beispiele

Angenommen, der Speicher enthält zwei Elemente:

```js
// storage contains two items,
// "kitten" and "monster"
browser.storage.local.set({
  kitten: { name: "Mog", eats: "mice" },
  monster: { name: "Kraken", eats: "people" },
});
```

Definieren Sie Erfolgs- und Fehlerhandler für das Promise:

```js
function onGot(item) {
  console.log(item);
}

function onError(error) {
  console.log(`Error: ${error}`);
}
```

Ohne `keys`-Argument alles abrufen:

```js
let gettingItem = browser.storage.local.get();
gettingItem.then(onGot, onError);

// -> Object { kitten: Object, monster: Object }
```

Mit einem leeren `keys`-Argument nichts zurückgeben:

```js
// with an empty array, retrieve nothing
let gettingItem = browser.storage.local.get([]);
gettingItem.then(onGot, onError);

// -> Object { }
```

Mit dem Namen eines Objekts das passende Element abrufen:

```js
let gettingItem = browser.storage.local.get("kitten");
gettingItem.then(onGot, onError);

// -> Object { kitten: Object }
```

Mit einem Array von Objektnamen alle passenden Elemente abrufen:

```js
let gettingItem = browser.storage.local.get([
  "kitten",
  "monster",
  "grapefruit",
]);
gettingItem.then(onGot, onError);

// -> Object { kitten: Object, monster: Object }
```

Mit einem Objekt, das Objektnamen als Schlüssel und den Standardwert als Wert enthält:

```js
let gettingItem = browser.storage.local.get({
  kitten: "no kitten",
  monster: "no monster",
  grapefruit: {
    name: "Grape Fruit",
    eats: "Water",
  },
});

// -> Object { kitten: Object, monster: Object, grapefruit: Object }
```

{{WebExtExamples}}

### Chrome-Beispiele

```js
chrome.storage.local.get("kitten", (items) => {
  console.log(items.kitten); // -> {name:"Mog", eats:"mice"}
});
```

Oder mit einem Promise

```js
let gettingItem = new Promise((resolve) =>
  chrome.storage.local.get("kitten", resolve),
);
gettingItem.then(onGot); // -> Object { kitten: Object }
```

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage). Diese Dokumentation stammt aus [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code.
