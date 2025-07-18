---
title: tabs.duplicate()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/duplicate
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Dupliziert einen Tab, basierend auf seiner ID.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let duplicating = browser.tabs.duplicate(
  tabId,              // integer
  duplicateProperties // optional object
)
```

### Parameter

- `tabId`
  - : `integer`. Die ID des zu duplizierenden Tabs.
- `duplicateProperties` {{optional_inline}}
  - : `object`. Ein Objekt, das beschreibt, wie der Tab dupliziert wird. Es enthält folgende Eigenschaften:
    - `index` {{optional_inline}}
      - : `integer`. Die Position des neuen Tabs im Fenster. Der Wert ist auf den Bereich von null bis zur Anzahl der Tabs im Fenster begrenzt.
    - `active` {{optional_inline}}
      - : `boolean`. Ob der Tab zum aktiven Tab im Fenster wird. Beeinflusst nicht, ob das Fenster fokussiert ist. Standardmäßig ist es `true`.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('tabs.Tab')}}-Objekt erfüllt wird, das Details über den duplizierten Tab enthält. Das `Tab`-Objekt enthält nur `url`, `title` und `favIconUrl`, wenn die Erweiterung die Berechtigung [`"tabs"`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder passende [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) hat. Tritt ein Fehler auf, wird das Promise mit einer Fehlermeldung abgelehnt.

> [!NOTE]
> Ab Firefox 68 wird das von `browser.tabs.duplicate()` zurückgegebene Promise aufgelöst, sobald der Tab dupliziert wurde. Zuvor wurde das Promise erst aufgelöst, wenn der Tab vollständig geladen war.

## Beispiele

Duplizieren Sie den ersten Tab und protokollieren Sie dann die ID des neu erstellten Tabs:

```js
function onDuplicated(tabInfo) {
  console.log(tabInfo.id);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

// Duplicate the first tab in the array
function duplicateFirstTab(tabs) {
  console.log(tabs);
  if (tabs.length > 0) {
    let duplicating = browser.tabs.duplicate(tabs[0].id);
    duplicating.then(onDuplicated, onError);
  }
}

// Query for all open tabs
let querying = browser.tabs.query({});
querying.then(duplicateFirstTab, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-duplicate)-API von Chromium. Diese Dokumentation ist abgeleitet von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.
