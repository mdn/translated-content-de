---
title: tabs.duplicate()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/duplicate
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

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

  - : `object`. Ein Objekt, das beschreibt, wie der Tab dupliziert wird. Es enthält die folgenden Eigenschaften:

    - `index` {{optional_inline}}
      - : `integer`. Die Position des neuen Tabs im Fenster. Der Wert ist auf den Bereich von null bis zur Anzahl der Tabs im Fenster beschränkt.
    - `active` {{optional_inline}}
      - : `boolean`. Ob der Tab der aktive Tab im Fenster wird. Beeinflusst nicht, ob das Fenster fokussiert ist. Standardmäßig `true`.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem {{WebExtAPIRef('tabs.Tab')}}-Objekt erfüllt wird, das Details über den duplizierten Tab enthält. Das `Tab`-Objekt enthält nur `url`, `title` und `favIconUrl`, wenn die Erweiterung die [`"tabs"`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) oder entsprechende [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) hat. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

> [!NOTE]
> Ab Firefox 68 wird das Promise, das von browser.tabs.duplicate() zurückgegeben wird, erfüllt, sobald der Tab dupliziert wurde. Zuvor wurde das Promise erst erfüllt, wenn der Tab vollständig geladen war.

## Beispiele

Den ersten Tab duplizieren und dann die ID des neu erstellten Tabs protokollieren:

```js
function onDuplicated(tabInfo) {
  console.log(tabInfo.id);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

// Den ersten Tab im Array duplizieren
function duplicateFirstTab(tabs) {
  console.log(tabs);
  if (tabs.length > 0) {
    let duplicating = browser.tabs.duplicate(tabs[0].id);
    duplicating.then(onDuplicated, onError);
  }
}

// Nach allen offenen Tabs suchen
let querying = browser.tabs.query({});
querying.then(duplicateFirstTab, onError);
```

{{WebExtExamples}}

## Browserkompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-duplicate) API. Diese Dokumentation wurde von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code abgeleitet.
