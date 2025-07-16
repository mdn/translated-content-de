---
title: search.get()
slug: Mozilla/Add-ons/WebExtensions/API/search/get
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Erhält ein Array aller installierten Suchmaschinen.

Jede zurückgegebene Suchmaschine ist mit einem Namen identifiziert, den Sie in {{WebExtAPIRef("search.search()")}} übergeben können, um diese spezielle Suchmaschine für eine Suche zu verwenden.

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
  - : `boolean`. `true`, wenn die Suchmaschine die Standardeinstellung ist. Zu jedem Zeitpunkt kann nur eine Suchmaschine die Standardeinstellung sein.
- `alias` {{optional_inline}}
  - : `string`. Wenn eine Suchmaschine über ein Alias verfügt, kann der Benutzer mit einer bestimmten Suchmaschine suchen, indem er das Alias vor dem Suchbegriff in der Adressleiste eingibt. Zum Beispiel, wenn die Wikipedia-Suchmaschine das Alias "wk" hat, kann der Benutzer auf Wikipedia nach Pandas suchen, indem er "wk pandas" in die Adressleiste eingibt. Das Alias wird manchmal auch als "Schlüsselwort" bezeichnet.
- `favIconUrl` {{optional_inline}}
  - : `string`. Das Symbol der Suchmaschine, als data: URL.

## Beispiele

Holen Sie alle installierten Suchmaschinen:

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
