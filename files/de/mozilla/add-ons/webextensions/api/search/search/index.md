---
title: search.search()
slug: Mozilla/Add-ons/WebExtensions/API/search/search
l10n:
  sourceCommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{AddonSidebar}}

Führen Sie eine Suche mit der angegebenen Suchmaschine oder der Standardsuchmaschine durch, wenn keine Suchmaschine angegeben ist.

Die Ergebnisse werden im aktuellen Tab, einem neuen Tab oder einem neuen Fenster entsprechend der `disposition`-Eigenschaft angezeigt oder in dem Tab, der in der `tabId`-Eigenschaft angegeben ist. Wenn keines angegeben ist, werden die Ergebnisse in einem neuen Tab angezeigt.

Um diese Funktion zu nutzen, muss Ihre Erweiterung die `"search"` [Manifest-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) haben.

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
      - : `string`. Der Ort, an dem die Suchergebnisse angezeigt werden. Gültige Werte sind `CURRENT_TAB`, `NEW_TAB` und `NEW_WINDOW`. Standardmäßig `NEW_TAB`. Kann nicht zusammen mit `tabId` angegeben werden.
    - `engine` {{optional_inline}}
      - : `string`. Der Name der Suchmaschine. Wenn der Suchmaschinenname nicht existiert, wird der Aufruf mit einem Fehler abgelehnt. Wenn diese Eigenschaft weggelassen wird, wird die Standardsuchmaschine verwendet.
    - `query`
      - : `string`. Die Suchanfrage.
    - `tabId` {{optional_inline}}
      - : `integer`. Eine optionale Kennung für den Tab, in dem Sie die Suche ausführen möchten. Wenn diese Eigenschaft weggelassen wird, werden die Suchergebnisse in einem neuen Tab angezeigt. Kann nicht zusammen mit `disposition` angegeben werden.

### Rückgabewert

Keiner.

## Beispiele

Eine Suche mit der Standardsuchmaschine, wobei die Ergebnisse im aktuellen Tab angezeigt werden (Standard):

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
function search() {
  browser.search.search({
    query: "styracosaurus",
    engine: "Wikipedia (en)",
    disposition: "NEW_WINDOW",
  });
}

browser.browserAction.onClicked.addListener(search);
```

Eine Suche mit Wikipedia, wobei die Ergebnisse im aktuellen Tab angezeigt werden:

```js
function search(tab) {
  browser.search.search({
    query: "styracosaurus",
    engine: "Wikipedia (en)",
    tabId: tab.id,
  });
}

browser.browserAction.onClicked.addListener(search);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}
