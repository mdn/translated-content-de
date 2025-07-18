---
title: search.get()
slug: Mozilla/Add-ons/WebExtensions/API/search/get
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Erhält ein Array aller installierten Suchmaschinen.

Jede zurückgegebene Suchmaschine wird mit einem Namen identifiziert, den Sie in {{WebExtAPIRef("search.search()")}} übergeben können, um diese spezielle Suchmaschine für eine Suche zu nutzen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let gettingEngines = browser.search.get()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem [Array](/de/docs/Web/JavaScript/Reference/Global_Objects/Array) von Suchmaschinenobjekten erfüllt wird. Jedes Suchmaschinenobjekt kann die folgenden Eigenschaften enthalten:

- `name`
  - : `string`. Der Name der Suchmaschine.
- `isDefault`
  - : `boolean`. `true`, wenn die Suchmaschine die Standard-Suchmaschine ist. Zu jedem Zeitpunkt kann nur eine Suchmaschine die Standard-Suchmaschine sein.
- `alias` {{optional_inline}}
  - : `string`. Falls eine Suchmaschine ein Alias hat, kann der Benutzer mit einer bestimmten Suchmaschine suchen, indem er den Alias in der Adressleiste vor dem Suchbegriff eingibt. Zum Beispiel, wenn die Wikipedia-Suchmaschine den Alias "wk" hat, kann der Benutzer Wikipedia nach Pandas durchsuchen, indem er "wk pandas" in die Adressleiste eingibt. Der Alias wird manchmal auch als "Schlüsselwort" bezeichnet.
- `favIconUrl` {{optional_inline}}
  - : `string`. Das Icon der Suchmaschine, als data: URL.

## Beispiele

Erhalten Sie alle installierten Suchmaschinen:

```js
function retrieved(results) {
  console.log(`There were: ${results.length} search engines retrieved.`);
  const defaultEngine = results.find((searchEngine) => searchEngine.isDefault);
  console.log(`The default search engine is ${defaultEngine.name}.`);
  for (const searchEngine of results) {
    console.log(searchEngine.name);
  }
}

browser.search.get().then(retrieved);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
