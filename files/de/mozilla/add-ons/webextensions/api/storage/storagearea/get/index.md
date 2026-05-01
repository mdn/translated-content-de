---
title: StorageArea.get()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/get
l10n:
  sourceCommit: 81c80db5f9f98dd2ac197474829fe52cd75acf1b
---

Ruft ein oder mehrere Elemente aus dem Speicherbereich ab.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let results = browser.storage.<storageType>.get(
  keys    // null, string, object or array of strings
)
```

Wobei `<storageType>` einer der folgenden Speichertypen ist: {{WebExtAPIRef("storage.sync", "sync")}}, {{WebExtAPIRef("storage.local", "local")}}, {{WebExtAPIRef("storage.session", "session")}} oder {{WebExtAPIRef("storage.managed", "managed")}}.

### Parameter

- `keys`
  - : Ein Schlüssel (`string`) oder Schlüssel (ein Array von Zeichenfolgen _oder_ ein Objekt, das Standardwerte angibt), um die zu speichernden Elemente zu identifizieren, die aus dem Speicher abgerufen werden sollen. Wenn Sie hier ein leeres Objekt oder Array übergeben, wird ein leeres Objekt abgerufen. Wenn Sie `null` oder einen undefinierten Wert übergeben, wird der gesamte Speicherinhalt abgerufen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das in ein `results`-Objekt aufgelöst wird, welches ein Schlüssel-Wert-Paar für jeden in `keys` im Speicherbereich gefundenen Schlüssel enthält. Wenn `keys` ein Objekt ist, nimmt jeder Schlüssel, der nicht im Speicher gefunden wird, den Standardwert aus dem `keys`-Objekt an.

Wenn die Operation fehlschlägt, wird das Promise mit einer Fehlermeldung zurückgewiesen.

Wenn Managed Storage nicht gesetzt ist, wird `undefined` zurückgegeben.

> [!WARNING]
> In Firefox, wenn der Managed Storage einer Erweiterung nicht mit einem [nativen Manifest](/de/docs/Mozilla/Add-ons/WebExtensions/Native_manifests#managed_storage_manifests) oder unter Verwendung der [`3rdparty`-Unternehmensrichtlinie](https://mozilla.github.io/policy-templates/#3rdparty) konfiguriert wurde, wird eine Ausnahme ausgelöst, wenn diese Funktion verwendet wird, um auf den Managed Storage zuzugreifen (siehe [Firefox Bug 1868153](https://bugzil.la/1868153)). Dieses Problem kann vermieden werden, indem der Fehler abgefangen wird. Dieses Problem hängt mit der fehlenden Unterstützung für den [`storage.managed_schema`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/storage) Manifest-Schlüssel zusammen (siehe [Firefox Bug 1771731](https://bugzil.la/1771731)).

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

Definieren Sie Erfolgs- und Fehlerschalter für das Promise:

```js
function onGot(item) {
  console.log(item);
}

function onError(error) {
  console.log(`Error: ${error}`);
}
```

Ohne `keys`-Argument, alles abrufen:

```js
let gettingItem = browser.storage.local.get();
gettingItem.then(onGot, onError);

// -> Object { kitten: Object, monster: Object }
```

Mit einem leeren `keys`-Argument, nichts zurückgeben:

```js
// with an empty array, retrieve nothing
let gettingItem = browser.storage.local.get([]);
gettingItem.then(onGot, onError);

// -> Object { }
```

Mit dem Namen eines Objekts, die Übereinstimmung abrufen:

```js
let gettingItem = browser.storage.local.get("kitten");
gettingItem.then(onGot, onError);

// -> Object { kitten: Object }
```

Mit einem Array von Objektnamen, alle Übereinstimmungen abrufen:

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
> Diese API basiert auf Chromiums [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage) API. Diese Dokumentation leitet sich von [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code ab.
