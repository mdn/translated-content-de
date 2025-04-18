---
title: tabs.query()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/query
l10n:
  sourceCommit: da342187abedb56612c08b166eb5594552b670e4
---

{{AddonSidebar}}

Ermittelt alle Tabs, die die angegebenen Eigenschaften haben, oder alle Tabs, wenn keine Eigenschaften angegeben sind.

Diese Funktion ist asynchron und gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück.

## Syntax

```js-nolint
let querying = browser.tabs.query(queryInfo)
```

### Parameter

- `queryInfo`

  - : `object`. Die Funktion `query()` ermittelt die Tabs, deren Eigenschaften mit den hier angegebenen Eigenschaften übereinstimmen.

    Siehe die Dokumentation zu {{WebExtAPIRef("tabs.Tab")}}, um mehr über diese Eigenschaften zu erfahren.

    - `active` {{optional_inline}}
      - : `boolean`. Ob die Tabs in ihren Fenstern aktiv sind.
    - `attention` {{optional_inline}}
      - : `boolean`. Gibt an, ob die Tabs Aufmerksamkeit erregen.
    - `audible` {{optional_inline}}
      - : `boolean`. Ob die Tabs hörbar sind.
    - `autoDiscardable` {{optional_inline}}
      - : `boolean`. Ob der Tab vom Browser verworfen werden kann. Standardmäßig ist der Wert `true`. Wenn auf `false` gesetzt, kann der Browser den Tab nicht automatisch verwerfen. Der Tab kann jedoch durch {{WebExtAPIRef("tabs.discard")}} verworfen werden.
    - `cookieStoreId` {{optional_inline}}
      - : `string` oder `array` von `string`. Verwenden Sie dies, um Tabs zurückzugeben, deren `tab.cookieStoreId` mit einem der `cookieStoreId`-Strings übereinstimmt. Diese Option ist nur verfügbar, wenn das Add-on die `"cookies"`- [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) hat. Weitere Informationen finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
    - `currentWindow` {{optional_inline}}
      - : `boolean`. Ob die Tabs im aktuellen Fenster sind.
    - `discarded` {{optional_inline}}
      - : `boolean`. Ob die Tabs verworfen sind. Ein verworfener Tab ist einer, dessen Inhalt aus dem Speicher entladen wurde, aber immer noch in der Tab-Leiste sichtbar ist. Sein Inhalt wird beim nächsten Aktivieren neu geladen.
    - `groupId` {{optional_inline}}
      - : `integer`. Die ID der Tab-Gruppe, in der sich die Tabs befinden, oder `-1` für nicht gruppierte Tabs.
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
      - : `boolean`. Ob die Tabs angepinnt sind.
    - `status` {{optional_inline}}
      - : {{WebExtAPIRef('tabs.TabStatus')}}. Ob die Tabs das Laden abgeschlossen haben.
    - `title` {{optional_inline}}
      - : `string`. Seiten-Titel mit einem Muster abgleichen. Erfordert die Berechtigung "tabs" oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für das entsprechende Tab-Matching.
    - `url` {{optional_inline}}
      - : `string` oder `array` von `string`. Tabs mit einem oder mehreren [Match-Mustern](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) abgleichen. Beachten Sie, dass Fragment-Identifikatoren nicht abgeglichen werden. Erfordert die Berechtigung "tabs" oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) für das entsprechende Tab-Matching.
    - `windowId` {{optional_inline}}
      - : `integer`. Die `id` des übergeordneten Fensters oder {{WebExtAPIRef('windows.WINDOW_ID_CURRENT')}} für das aktuelle Fenster.
    - `windowType` {{optional_inline}}
      - : {{WebExtAPIRef('tabs.WindowType')}}. Der Fenstertyp, in dem die Tabs sich befinden.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem `array` von {{WebExtAPIRef('tabs.Tab')}}-Objekten erfüllt wird, das Informationen über jeden übereinstimmenden Tab enthält.

Tritt ein Fehler auf, wird das Promise mit einer Fehlermeldung abgelehnt.

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

Tabs für alle HTTP- und HTTPS-URLs unter `"mozilla.org"` oder einer ihrer Subdomains abrufen:

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
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-query)-API von Chromium. Diese Dokumentation stammt aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.
