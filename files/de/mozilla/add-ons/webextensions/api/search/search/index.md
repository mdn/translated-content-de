---
title: search.search()
slug: Mozilla/Add-ons/WebExtensions/API/search/search
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Führen Sie eine Suche mit der angegebenen Suchmaschine oder der Standard-Suchmaschine durch, wenn keine Suchmaschine angegeben ist.

Die Ergebnisse werden im aktuellen Tab, einem neuen Tab oder einem neuen Fenster entsprechend der `disposition`-Eigenschaft oder im Tab, der in der `tabId`-Eigenschaft angegeben ist, angezeigt. Wenn keins angegeben ist, werden die Ergebnisse in einem neuen Tab angezeigt.

Um diese Funktion zu verwenden, muss Ihre Erweiterung die Berechtigung `"search"` in der [Manifestdatei](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) haben.

Um die installierten Suchmaschinen zu erhalten, verwenden Sie {{WebExtAPIRef("search.get()")}}.

## Syntax

```js-nolint
browser.search.search(
  searchProperties       // object
)
```

### Parameter

- `searchProperties`
  - : `object`. Ein Objekt mit den folgenden Eigenschaften:
    - `disposition` {{optional_inline}}
      - : `string`. Der Ort, an dem die Suchergebnisse angezeigt werden. Gültige Werte sind `CURRENT_TAB`, `NEW_TAB` und `NEW_WINDOW`. Standardwert ist `NEW_TAB`. Kann nicht zusammen mit `tabId` angegeben werden.
    - `engine` {{optional_inline}}
      - : `string`. Der Name der Suchmaschine. Wenn der Name der Suchmaschine nicht existiert, wird die Funktion mit einem Fehler abgelehnt. Wenn diese Eigenschaft weggelassen wird, wird die Standard-Suchmaschine verwendet.
    - `query`
      - : `string`. Die Suchanfrage.
    - `tabId` {{optional_inline}}
      - : `integer`. Eine optionale Kennung für den Tab, in dem Sie die Suche ausführen möchten. Wenn diese Eigenschaft weggelassen wird, werden die Suchergebnisse in einem neuen Tab angezeigt. Kann nicht zusammen mit `disposition` angegeben werden.

### Rückgabewert

Keiner.

## Beispiele

Eine Suche mit der Standard-Suchmaschine, wobei die Ergebnisse im aktuellen Tab angezeigt werden (Standard):

```js
function search() {
  browser.search.search({
    query: "styracosaurus",
  });
}

browser.browserAction.onClicked.addListener(search);
```

Eine Suche mit Wikipedia, wobei die Ergebnisse in einem neuen Fenster angezeigt werden:

```js
async function search() {
  try {
    // try to search using the `Wikipedia (en)` search engine
    await browser.search.search({
      query: "styracosaurus",
      engine: "Wikipedia (en)",
      disposition: "NEW_WINDOW",
    });
  } catch (ex) {
    // if the search fails, e.g., because the search engine isn't defined to the browser, initiate the search using a url
    await browser.windows.create({
      url: "https://en.wikipedia.org/w/index.php?title=Special:Search&search=styracosaurus",
    });
  }
}

browser.browserAction.onClicked.addListener(search);
```

Eine Suche mit Wikipedia, wobei die Ergebnisse im aktuellen Tab angezeigt werden:

```js
async function search(tab) {
  try {
    // try to search using the `Wikipedia (en)` search engine
    await browser.search.search({
      query: "styracosaurus",
      engine: "Wikipedia (en)",
      tabId: tab.id,
    });
  } catch (ex) {
    // if the search fails, e.g., because the search engine isn't defined to the browser, initiate the search using a url
    await browser.tabs.update(tab.id, {
      url: "https://en.wikipedia.org/w/index.php?title=Special:Search&search=styracosaurus",
    });
  }
}

browser.browserAction.onClicked.addListener(search);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
