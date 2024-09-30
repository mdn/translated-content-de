---
title: search.query()
slug: Mozilla/Add-ons/WebExtensions/API/search/query
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Führen Sie eine Suche mit der Standardsuchmaschine des Browsers durch.

Die Ergebnisse werden je nach `disposition`-Eigenschaft im aktuellen Tab, einem neuen Tab oder einem neuen Fenster angezeigt oder im Tab, der in der `tabId`-Eigenschaft angegeben ist. Wenn keiner angegeben ist, werden die Ergebnisse im aktuellen Tab angezeigt.

Um diese Funktion zu verwenden, muss Ihre Erweiterung die `"search"` [Manifest-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) besitzen.

## Syntax

```js-nolint
browser.search.query(
  queryInfo             // object
)
```

### Parameter

- `queryInfo`

  - : `object`. Ein Objekt mit den folgenden Eigenschaften:

    - `disposition` {{optional_inline}}
      - : `string`. Der Ort, an dem die Suchergebnisse angezeigt werden. Gültige Werte sind `CURRENT_TAB`, `NEW_TAB` und `NEW_WINDOW`. Standardmäßig `CURRENT_TAB`. Kann nicht zusammen mit `tabId` angegeben werden.
    - `tabId` {{optional_inline}}
      - : `integer`. Eine optionale Kennung für den Tab, in dem Sie die Suche durchführen möchten. Wenn diese Eigenschaft weggelassen wird, werden die Suchergebnisse in einem neuen Tab angezeigt. Kann nicht zusammen mit `disposition` angegeben werden.
    - `text`
      - : `string`. Die Suchanfrage.

### Rückgabewert

Keiner.

## Beispiele

Eine Suche mit den Ergebnissen im aktuellen Tab (Standard):

```js
function search() {
  browser.search.query({
    text: "styracosaurus",
  });
}

browser.browserAction.onClicked.addListener(search);
```

Eine Suche mit den Ergebnissen in einem neuen Fenster:

```js
function search() {
  browser.search.query({
    text: "styracosaurus",
    disposition: "NEW_WINDOW",
  });
}

browser.browserAction.onClicked.addListener(search);
```

Eine Suche mit den Ergebnissen in einem bestimmten Tab:

```js
function search(tab) {
  browser.search.query({
    query: "styracosaurus",
    tabId: tab.id,
  });
}

browser.browserAction.onClicked.addListener(search);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
