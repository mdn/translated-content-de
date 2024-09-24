---
title: StorageArea.get()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/get
l10n:
  sourceCommit: dd98fd4cac10cfa3f516536aaefe523170d6d3e4
---

{{AddonSidebar}}

Ruft einen oder mehrere Einträge aus dem Speicherbereich ab.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let results = browser.storage.<storageType>.get(
  keys    // null, string, object or array of strings
)
```

Dabei ist `<storageType>` eine der Speicherarten — {{WebExtAPIRef("storage.sync", "sync")}}, {{WebExtAPIRef("storage.local", "local")}}, {{WebExtAPIRef("storage.session", "session")}}, oder {{WebExtAPIRef("storage.managed", "managed")}}.

### Parameter

- `keys`
  - : Ein Schlüssel (`string`) oder Schlüssel (ein Array von Zeichenfolgen, _oder_ ein Objekt, das Standardwerte angibt), um den/die abzurufenden Eintrag/Einträge aus dem Speicher zu identifizieren. Wenn Sie hier ein leeres Objekt oder Array übergeben, wird ein leeres Objekt abgerufen. Wenn Sie `null` oder einen undefinierten Wert übergeben, werden die gesamten Speicherinhalte abgerufen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das zu einem `results`-Objekt auflöst, das jedes im `keys`-Parameter gefundene Objekt im Speicherbereich enthält. Wenn `keys` ein Objekt ist, werden Schlüssel, die im Speicherbereich nicht gefunden wurden, die Werte des `keys`-Objekts zugeordnet.

Wenn die Operation fehlgeschlagen ist, wird das Promise mit einer Fehlermeldung abgelehnt.

Wenn kein verwalteter Speicher festgelegt ist, wird `undefined` zurückgegeben.

> [!WARNING]
> Wenn in einer Inhalts-Skript in Firefox-Versionen vor 52 verwendet, wird das Promise, das von `browser.storage.local.get()` zurückgegeben wird, mit einem Array erfüllt, das ein Objekt enthält. Das Objekt im Array enthält die im Speicherbereich gefundenen `keys`, wie oben beschrieben.
>
> Das Promise wird korrekt mit einem Objekt erfüllt, wenn es im Hintergrundkontext (Hintergrundskripte, Popups, Optionsseiten usw.) verwendet wird.
>
> Wenn diese API als `chrome.storage.local.get()` verwendet wird, übergibt sie korrekt ein Objekt an die Rückruffunktion.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Angenommen, der Speicher enthält zwei Einträge:

```js
// storage contains two items,
// "kitten" and "monster"
browser.storage.local.set({
  kitten: { name: "Mog", eats: "mice" },
  monster: { name: "Kraken", eats: "people" },
});
```

Definieren Sie Erfolgs- und Fehlermethoden für das Promise:

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

Mit dem Namen eines Objekts das passende Ergebnis abrufen:

```js
let gettingItem = browser.storage.local.get("kitten");
gettingItem.then(onGot, onError);

// -> Object { kitten: Object }
```

Mit einem Array von Objektnamen alle Übereinstimmungen abrufen:

```js
let gettingItem = browser.storage.local.get([
  "kitten",
  "monster",
  "grapefruit",
]);
gettingItem.then(onGot, onError);

// -> Object { kitten: Object, monster: Object }
```

Mit einem Objekt mit Objektnamen als Schlüssel und Standardwert als Wert:

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

Oder unter Verwendung eines Promise

```js
let gettingItem = new Promise((resolve) =>
  chrome.storage.local.get("kitten", resolve),
);
gettingItem.then(onGot); // -> Object { kitten: Object }
```

> [!NOTE]
> Diese API basiert auf der [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage) API von Chromium. Diese Dokumentation ist abgeleitet von [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code.
