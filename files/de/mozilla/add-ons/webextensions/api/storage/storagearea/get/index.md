---
title: StorageArea.get()
slug: Mozilla/Add-ons/WebExtensions/API/storage/StorageArea/get
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
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

`<storageType>` wird einer der beschreibbaren Speicherarten sein — {{WebExtAPIRef("storage.sync", "sync")}}, {{WebExtAPIRef("storage.local", "local")}}, oder {{WebExtAPIRef("storage.managed", "managed")}}.

### Parameter

- `keys`
  - : Ein Schlüssel (`string`) oder Schlüssel (ein Array von Strings _oder_ ein Objekt, das Standardwerte angibt), um das/die abzurufende(n) Element(e) im Speicher zu identifizieren. Wenn Sie hier ein leeres Objekt oder Array übergeben, wird ein leeres Objekt abgerufen. Wenn Sie `null` oder einen undefinierten Wert übergeben, wird der gesamte Speicherinhalt abgerufen.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das in ein `results`-Objekt aufgelöst wird, das jedes im Speicherbereich gefundene Objekt in `keys` enthält. Wenn `keys` ein Objekt ist, haben Schlüssel, die im Speicherbereich nicht gefunden wurden, ihre Werte aus dem `keys`-Objekt.

Wenn der Vorgang fehlgeschlagen ist, wird das Promise mit einer Fehlermeldung abgelehnt.

Wenn kein verwalteter Speicher eingerichtet ist, wird `undefined` zurückgegeben.

> [!WARNING]
> Wenn es innerhalb eines Inhaltsskripts in Firefox-Versionen vor 52 verwendet wird, wird das von `browser.storage.local.get()` zurückgegebene Promise mit einem Array erfüllt, das ein Objekt enthält. Das Objekt im Array enthält die oben beschriebenen `keys`, die im Speicherbereich gefunden wurden.
>
> Das Promise wird korrekt mit einem Objekt erfüllt, wenn es im Hintergrundkontext verwendet wird (Hintergrundskripte, Popups, Optionen-Seiten usw.).
>
> Wenn diese API als `chrome.storage.local.get()` verwendet wird, wird korrekt ein Objekt an die Callback-Funktion übergeben.

## Browser-Kompatibilität

{{Compat}}

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

Definieren Sie Erfolgs- und Fehler-Handler für das Promise:

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

Mit dem Namen eines Objekts die Übereinstimmung abrufen:

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

Mit einem Objekt, das Objektnamen als Schlüssel und Standardwerte als Werte hat:

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
> Diese API basiert auf Chromiums [`chrome.storage`](https://developer.chrome.com/docs/extensions/reference/api/storage) API. Diese Dokumentation stammt aus [`storage.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/storage.json) im Chromium-Code.
