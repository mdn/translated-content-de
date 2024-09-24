---
title: search.query()
slug: Mozilla/Add-ons/WebExtensions/API/search/query
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Führen Sie eine Suche mit der Standardsuchmaschine des Browsers durch.

Die Ergebnisse werden je nach der `disposition`-Eigenschaft auf dem aktuellen Tab, einem neuen Tab oder einem neuen Fenster angezeigt oder im Tab, der in der `tabId`-Eigenschaft angegeben ist. Wenn keiner von beiden angegeben ist, werden die Ergebnisse im aktuellen Tab angezeigt.

Um diese Funktion zu nutzen, muss Ihre Erweiterung die `"search"` [Manifest-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) besitzen.

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
      - : `string`. Der Ort, an dem die Suchergebnisse angezeigt werden. Gültige Werte sind `CURRENT_TAB`, `NEW_TAB` und `NEW_WINDOW`. Standard ist `CURRENT_TAB`. Kann nicht zusammen mit `tabId` angegeben werden.
    - `tabId` {{optional_inline}}
      - : `integer`. Eine optionale Kennung für den Tab, in dem Sie die Suche ausführen möchten. Wenn diese Eigenschaft nicht angegeben wird, werden die Suchergebnisse in einem neuen Tab angezeigt. Kann nicht zusammen mit `disposition` angegeben werden.
    - `text`
      - : `string`. Die Suchabfrage.

### Rückgabewert

Keiner.

## Beispiele

Eine Suche mit den Ergebnissen, die im aktuellen Tab angezeigt werden (Standard):

```js
function search() {
  browser.search.query({
    text: "styracosaurus",
  });
}

browser.browserAction.onClicked.addListener(search);
```

Eine Suche mit den Ergebnissen, die in einem neuen Fenster angezeigt werden:

```js
function search() {
  browser.search.query({
    text: "styracosaurus",
    disposition: "NEW_WINDOW",
  });
}

browser.browserAction.onClicked.addListener(search);
```

Eine Suche mit den Ergebnissen, die in einem bestimmten Tab angezeigt werden:

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
