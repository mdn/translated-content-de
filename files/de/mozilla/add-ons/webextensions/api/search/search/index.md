---
title: search.search()
slug: Mozilla/Add-ons/WebExtensions/API/search/search
l10n:
  sourceCommit: 1d6016ba801ec08203e3eecbb5f4c1d163eb87d7
---

{{AddonSidebar}}

Führen Sie eine Suche mit der angegebenen Suchmaschine durch oder verwenden Sie die Standardsuchmaschine, wenn keine Suchmaschine angegeben ist.

Die Ergebnisse werden im aktuellen Tab, einem neuen Tab oder einem neuen Fenster entsprechend der `disposition`-Eigenschaft oder im durch die `tabId`-Eigenschaft angegebenen Tab angezeigt. Wenn keine dieser Eigenschaften angegeben ist, werden die Ergebnisse in einem neuen Tab angezeigt.

Um diese Funktion zu verwenden, muss Ihre Erweiterung die `"search"` [Manifestberechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) besitzen.

Um die installierten Suchmaschinen abzurufen, verwenden Sie {{WebExtAPIRef("search.get()")}}.

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
      - : `string`. Der Ort, an dem die Suchergebnisse angezeigt werden. Gültige Werte sind `CURRENT_TAB`, `NEW_TAB` und `NEW_WINDOW`. Standardmäßig `NEW_TAB`. Kann nicht mit `tabId` angegeben werden.
    - `engine` {{optional_inline}}
      - : `string`. Der Name der Suchmaschine. Wenn der Suchmaschinenname nicht existiert, lehnt die Funktion den Aufruf mit einem Fehler ab. Wenn diese Eigenschaft ausgelassen wird, wird die Standardsuchmaschine verwendet.
    - `query`
      - : `string`. Die Suchanfrage.
    - `tabId` {{optional_inline}}
      - : `integer`. Eine optionale Kennung für den Tab, in dem Sie die Suche ausführen möchten. Wenn diese Eigenschaft ausgelassen wird, werden die Suchergebnisse in einem neuen Tab angezeigt. Kann nicht mit `disposition` angegeben werden.

### Rückgabewert

Keiner.

## Beispiele

Eine Suche mit der Standardsuchmaschine, deren Ergebnisse im aktuellen Tab angezeigt werden (Standard):

```js
function search() {
  browser.search.search({
    query: "styracosaurus",
  });
}

browser.browserAction.onClicked.addListener(search);
```

Eine Suche mit Wikipedia, deren Ergebnisse in einem neuen Fenster angezeigt werden:

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

Eine Suche mit Wikipedia, deren Ergebnisse im aktuellen Tab angezeigt werden:

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
