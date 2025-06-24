---
title: tabs.query()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/query
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Ruft alle Tabs ab, die die angegebenen Eigenschaften aufweisen, oder alle Tabs, wenn keine Eigenschaften angegeben sind.

## Syntax

```js-nolint
let querying = browser.tabs.query(queryInfo)
```

### Parameter

- `queryInfo`

  - : `object`. Die Funktion `query()` ruft die Tabs ab, deren Eigenschaften mit den hier angegebenen übereinstimmen.

    Siehe die Dokumentation zu {{WebExtAPIRef("tabs.Tab")}}, um mehr über diese Eigenschaften zu erfahren.

    - `active` {{optional_inline}}
      - : `boolean`. Ob die Tabs in ihren Fenstern aktiv sind.
    - `attention` {{optional_inline}}
      - : `boolean`. Gibt an, ob die Tabs Aufmerksamkeit erregen.
    - `audible` {{optional_inline}}
      - : `boolean`. Ob die Tabs hörbar sind.
    - `autoDiscardable` {{optional_inline}}
      - : `boolean`. Ob der Tab vom Browser verworfen werden kann. Der Standardwert ist `true`. Wenn dieser auf `false` gesetzt ist, kann der Browser den Tab nicht automatisch verwerfen. Jedoch kann der Tab durch {{WebExtAPIRef("tabs.discard")}} verworfen werden.
    - `cookieStoreId` {{optional_inline}}
      - : `string` oder `array` von `string`. Verwenden Sie dies, um Tabs zurückzugeben, deren `tab.cookieStoreId` mit einem der `cookieStoreId`-Strings übereinstimmt. Diese Option ist nur verfügbar, wenn das Add-on die `"cookies"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) hat. Weitere Informationen finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
    - `currentWindow` {{optional_inline}}
      - : `boolean`. Ob die Tabs im aktuellen Fenster sind.
    - `discarded` {{optional_inline}}
      - : `boolean`. Ob die Tabs verworfen sind. Ein verworfener Tab ist einer, dessen Inhalt aus dem Speicher entladen wurde, aber weiterhin in der Tableiste sichtbar ist. Sein Inhalt wird beim nächsten Aktivieren neu geladen.
    - `groupId` {{optional_inline}}
      - : `integer`. Die ID der Tab-Gruppe, in der sich die Tabs befinden, oder `-1` ({{WebExtAPIRef("tabGroups.TAB_GROUP_ID_NONE")}}) für nicht gruppierte Tabs. Weitere Informationen zu Tab-Gruppen finden Sie unter {{WebExtAPIRef("tabGroups")}}.
    - `hidden` {{optional_inline}}
      - : `boolean`. Ob die Tabs versteckt sind.
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
    - `status` {{optional_inline}}
      - : {{WebExtAPIRef('tabs.TabStatus')}}. Ob die Tabs das Laden abgeschlossen haben.
    - `title` {{optional_inline}}
      - : `string`. Seitentitel nach einem Muster abgleichen. Erfordert die "tabs"-Berechtigung oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions), damit der Tab übereinstimmt.
    - `url` {{optional_inline}}
      - : `string` oder `array` von `string`. Tabs mit einem oder mehreren [Musterabhichen](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) abgleichen. Beachten Sie, dass Fragmentbezeichner nicht übereinstimmen. Erfordert die "tabs"-Berechtigung oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions), damit der Tab übereinstimmt.
    - `windowId` {{optional_inline}}
      - : `integer`. Die `id` des übergeordneten Fensters, oder {{WebExtAPIRef('windows.WINDOW_ID_CURRENT')}} für das aktuelle Fenster.
    - `windowType` {{optional_inline}}
      - : {{WebExtAPIRef('tabs.WindowType')}}. Der Fenstertyp, in dem sich die Tabs befinden.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem `array` von {{WebExtAPIRef('tabs.Tab')}}-Objekten erfüllt wird, die Informationen über jeden übereinstimmenden Tab enthält.

Falls ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

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

Tabs für alle HTTP- und HTTPS-URLs unter `"mozilla.org"` oder einer seiner Subdomains abrufen:

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
> Diese API basiert auf Chromiums [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-query) API. Diese Dokumentation stammt von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.
