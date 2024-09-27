---
title: tabs.query()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/query
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Ruft alle Tabs ab, die die angegebenen Eigenschaften aufweisen, oder alle Tabs, wenn keine Eigenschaften angegeben werden.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let querying = browser.tabs.query(queryInfo)
```

### Parameter

- `queryInfo`

  - : `object`. Die `query()`-Funktion ruft die Tabs ab, deren Eigenschaften mit den hier enthaltenen Eigenschaften übereinstimmen.

    Weitere Informationen zu diesen Eigenschaften finden Sie in der {{WebExtAPIRef("tabs.Tab")}} Dokumentation.

    - `active` {{optional_inline}}
      - : `boolean`. Ob die Tabs in ihren Fenstern aktiv sind.
    - `attention` {{optional_inline}}
      - : `boolean`. Gibt an, ob die Tabs Aufmerksamkeit erregen.
    - `audible` {{optional_inline}}
      - : `boolean`. Ob die Tabs hörbar sind.
    - `autoDiscardable` {{optional_inline}}
      - : `boolean`. Ob das Tab vom Browser verworfen werden kann. Der Standardwert ist `true`. Wenn auf `false` gesetzt, kann der Browser das Tab nicht automatisch verwerfen. Das Tab kann jedoch durch {{WebExtAPIRef("tabs.discard")}} verworfen werden.
    - `cookieStoreId` {{optional_inline}}
      - : `string` oder `array` von `string`. Verwenden Sie dies, um Tabs zurückzugeben, deren `tab.cookieStoreId` mit einem der `cookieStoreId`-Zeichenfolgen übereinstimmt. Diese Option ist nur verfügbar, wenn das Add-on über die `"cookies"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) verfügt. Siehe [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für weitere Informationen.
    - `currentWindow` {{optional_inline}}
      - : `boolean`. Ob die Tabs im aktuellen Fenster sind.
    - `discarded` {{optional_inline}}
      - : `boolean`. Ob die Tabs verworfen sind. Ein verworfenes Tab ist eines, dessen Inhalt aus dem Speicher entladen wurde, aber immer noch im Tabstreifen sichtbar ist. Sein Inhalt wird beim nächsten Aktivieren neu geladen.
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
    - `status` {{optional_inline}}
      - : {{WebExtAPIRef('tabs.TabStatus')}}. Ob die Tabs das Laden abgeschlossen haben.
    - `title` {{optional_inline}}
      - : `string`. Übereinstimmung von Seitentiteln mit einem Muster. Erfordert die "tabs"-Berechtigung oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions), damit das Tab übereinstimmt.
    - `url` {{optional_inline}}
      - : `string` oder `array` von `string`. Übereinstimmung von Tabs mit einem oder mehreren [Übereinstimmungsmustern](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns). Beachten Sie, dass Fragmentbezeichner nicht übereinstimmen. Erfordert die "tabs"-Berechtigung oder [Host-Berechtigungen](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions), damit das Tab übereinstimmt.
    - `windowId` {{optional_inline}}
      - : `integer`. Die `id` des übergeordneten Fensters oder {{WebExtAPIRef('windows.WINDOW_ID_CURRENT')}} für das aktuelle Fenster.
    - `windowType` {{optional_inline}}
      - : {{WebExtAPIRef('tabs.WindowType')}}. Der Fenstertyp, in dem sich die Tabs befinden.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem `array` von `{{WebExtAPIRef('tabs.Tab')}}` Objekten erfüllt wird, die Informationen über jeden passenden Tab enthalten.

Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung zurückgewiesen.

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

Das aktive Tab im aktuellen Fenster abrufen:

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
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-query) API von Chromium. Diese Dokumentation stammt von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.
