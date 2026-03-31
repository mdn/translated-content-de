---
title: tabs.query()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/query
l10n:
  sourceCommit: 8bc98818dfbc851ee6749b123e98f5eeb7e43923
---

Ruft alle Tabs ab, die die angegebenen Eigenschaften aufweisen, oder alle Tabs, wenn keine Eigenschaften angegeben sind.

## Syntax

```js-nolint
let querying = browser.tabs.query(queryInfo)
```

### Parameter

- `queryInfo`
  - : `object`. Die `query()`-Funktion ruft die Tabs ab, deren Eigenschaften mit den hier angegebenen Eigenschaften übereinstimmen.

    Siehe die {{WebExtAPIRef("tabs.Tab")}}-Dokumentation, um mehr über diese Eigenschaften zu erfahren.
    - `active` {{optional_inline}}
      - : `boolean`. Ob die Tabs in ihren Fenstern aktiv sind.
    - `attention` {{optional_inline}}
      - : `boolean`. Gibt an, ob die Tabs Aufmerksamkeit erregen.
    - `audible` {{optional_inline}}
      - : `boolean`. Ob die Tabs hörbar sind.
    - `autoDiscardable` {{optional_inline}}
      - : `boolean`. Ob der Tab vom Browser verworfen werden kann. Der Standardwert ist `true`. Wenn auf `false` gesetzt, kann der Browser den Tab nicht automatisch verwerfen. Der Tab kann jedoch durch {{WebExtAPIRef("tabs.discard")}} verworfen werden.
    - `cookieStoreId` {{optional_inline}}
      - : `string` oder `array` von `string`. Verwenden Sie dies, um Tabs zurückzugeben, deren `tab.cookieStoreId` mit einem der `cookieStoreId`-Strings übereinstimmt. Diese Option ist nur verfügbar, wenn das Add-on die Berechtigung `"cookies"` hat. Weitere Informationen finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
    - `currentWindow` {{optional_inline}}
      - : `boolean`. Ob die Tabs im aktuellen Fenster sind.
    - `discarded` {{optional_inline}}
      - : `boolean`. Ob die Tabs verworfen wurden. Ein verworfener Tab ist einer, dessen Inhalte aus dem Speicher entladen wurden, aber noch im Tab-Streifen sichtbar sind. Sein Inhalt wird beim nächsten Aktivieren neu geladen.
    - `groupId` {{optional_inline}}
      - : `integer`. Die ID der Tab-Gruppe, in der sich die Tabs befinden, oder `-1` ({{WebExtAPIRef("tabGroups.TAB_GROUP_ID_NONE")}}) für nicht gruppierte Tabs. Weitere Informationen zu Tab-Gruppen finden Sie in {{WebExtAPIRef("tabGroups")}}.
    - `hidden` {{optional_inline}}
      - : `boolean`. Ob die Tabs ausgeblendet sind.
    - `highlighted` {{optional_inline}}
      - : `boolean`. Ob die Tabs hervorgehoben sind.
    - `index` {{optional_inline}}
      - : `integer`. Die Position der Tabs innerhalb ihrer Fenster.
    - `muted` {{optional_inline}}
      - : `boolean`. Ob die Tabs stummgeschaltet sind.
    - `lastFocusedWindow` {{optional_inline}}
      - : `boolean`. Ob die Tabs im zuletzt fokussierten Fenster sind.
    - `pinned` {{optional_inline}}
      - : `boolean`. Ob die Tabs angeheftet sind.
    - `splitViewId` {{optional_inline}}
      - : `integer`. Die ID der [geteilten Ansicht](/de/docs/Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API#working_with_tab_split_views), zu der der Tab gehört. Setzen Sie auf {{WebExtAPIRef('tabs.SPLIT_VIEW_ID_NONE')}}, um die Tabs abzufragen, die nicht zu einer geteilten Ansicht gehören.
    - `status` {{optional_inline}}
      - : {{WebExtAPIRef('tabs.TabStatus')}}. Ob die Tabs das Laden abgeschlossen haben.
    - `title` {{optional_inline}}
      - : `string`. Übereinstimmung von Seitentiteln mit einem Muster. Erfordert die Berechtigung "tabs" oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die Tab-Übereinstimmung.
    - `url` {{optional_inline}}
      - : `string` oder `array` von `string`. Übereinstimmung von Tabs mit einem oder mehreren [Übereinstimmungsmustern](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns). Beachten Sie, dass Fragment-Identifier nicht übereinstimmen. Erfordert die Berechtigung "tabs" oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für die Tab-Übereinstimmung.
    - `windowId` {{optional_inline}}
      - : `integer`. Die `id` des übergeordneten Fensters oder {{WebExtAPIRef('windows.WINDOW_ID_CURRENT')}} für das aktuelle Fenster.
    - `windowType` {{optional_inline}}
      - : {{WebExtAPIRef('tabs.WindowType')}}. Der Typ des Fensters, in dem sich die Tabs befinden.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem `array` von {{WebExtAPIRef('tabs.Tab')}}-Objekten erfüllt wird, die Informationen zu jedem übereinstimmenden Tab enthalten.

Falls ein Fehler auftritt, wird das Promise mit einer Fehlermeldung zurückgewiesen.

## Beispiele

Alle Tabs abrufen:

```js
function logTabs(tabs) {
  for (const tab of tabs) {
    // tab.url requires the `tabs` permission or a matching host permission.
    console.log(tab.url);
  }
}

function onError(error) {
  console.error(`Error: ${error}`);
}

browser.tabs.query({}).then(logTabs, onError);
```

Alle Tabs im aktuellen Fenster abrufen:

```js
function logTabs(tabs) {
  for (const tab of tabs) {
    // tab.url requires the `tabs` permission or a matching host permission.
    console.log(tab.url);
  }
}

function onError(error) {
  console.error(`Error: ${error}`);
}

browser.tabs.query({ currentWindow: true }).then(logTabs, onError);
```

Den aktiven Tab im aktuellen Fenster abrufen:

```js
function logTabs(tabs) {
  // tabs[0].url requires the `tabs` permission or a matching host permission.
  console.log(tabs[0].url);
}

function onError(error) {
  console.error(`Error: ${error}`);
}

browser.tabs
  .query({ currentWindow: true, active: true })
  .then(logTabs, onError);
```

Tabs für alle HTTP- und HTTPS-URLs unter `"mozilla.org"` oder einem seiner Subdomains abrufen:

```js
function logTabs(tabs) {
  for (const tab of tabs) {
    // tab.url requires the `tabs` permission or a matching host permission.
    console.log(tab.url);
  }
}

function onError(error) {
  console.error(`Error: ${error}`);
}

browser.tabs.query({ url: "*://*.mozilla.org/*" }).then(logTabs, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-query) API. Diese Dokumentation ist abgeleitet von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.
