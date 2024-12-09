---
title: tabs.onUpdated
slug: Mozilla/Add-ons/WebExtensions/API/tabs/onUpdated
l10n:
  sourceCommit: 934dace5fd2f456fb9178b687ad0abb6e4b0a049
---

Wird ausgelöst, wenn ein Tab aktualisiert wird.

Wenn der Benutzer zu einer neuen URL in einem Tab navigiert, generiert dies typischerweise mehrere `onUpdated`-Ereignisse, da verschiedene Eigenschaften des {{WebExtAPIRef("tabs.Tab")}} Objekts aktualisiert werden. Dies umfasst die `url`, aber auch möglicherweise die Eigenschaften `title` und `favIconUrl`. Die `status`-Eigenschaft wechselt zwischen `"loading"` und `"complete"`.

Dieses Ereignis wird auch bei Änderungen der Eigenschaften eines Tabs ausgelöst, die keine Navigation betreffen, wie das Anheften und Lösen (was die Eigenschaft `pinned` aktualisiert) sowie das Stummschalten oder Aufheben der Stummschaltung (was die Eigenschaften `audible` und `mutedInfo` aktualisiert).

Sie können dieses Ereignis filtern, sodass es nur für Tabs ausgelöst wird, deren URLs mit bestimmten [Mustern](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) übereinstimmen, Änderungen an bestimmten Eigenschaften, Änderungen an einem Tab oder Fenster oder beliebigen Kombinationen dieser Einschränkungen.

## Syntax

```js-nolint
browser.tabs.onUpdated.addListener(
  listener, // function
  filter     // optional object
)
browser.tabs.onUpdated.removeListener(listener)
browser.tabs.onUpdated.hasListener(listener)
```

Ereignisse haben drei Funktionen:

- `addListener(callback, filter)`
  - : Fügt einen Listener für dieses Ereignis hinzu.
- `removeListener(listener)`
  - : Stoppt das Anhören dieses Ereignisses. Das `listener`-Argument ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden diese Argumente übergeben:

    - `tabId`
      - : `integer`. Die ID des aktualisierten Tabs.
    - `changeInfo`
      - : `object`. Eigenschaften des Tabs, die sich geändert haben. Siehe den Abschnitt [changeInfo](#changeinfo_2) für mehr Details.
    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}. Der neue Zustand des Tabs.

- `filter` {{optional_inline}}

  - : `object`. Eine Reihe von Filtern, die die an diesen Listener gesendeten Ereignisse einschränken. Dieses Objekt kann eine oder mehrere dieser Eigenschaften haben. Ereignisse werden nur gesendet, wenn sie alle angegebenen Filter erfüllen.

    - `urls`
      - : `Array`. Ein Array von [Match-Mustern](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns). Löst das Ereignis nur für Tabs aus, deren aktuelle `url`-Eigenschaft mit einem der Muster übereinstimmt.
    - `properties`

      - : `Array`. Ein Array von Zeichenfolgen, bestehend aus unterstützten {{WebExtAPIRef("tabs.Tab")}} Objekt-Eigenschaftsnamen. Löst das Ereignis nur für Änderungen an einer der im Array genannten Eigenschaften aus. Diese Eigenschaften können verwendet werden:

        - "attention"
        - "autoDiscardable"
        - "audible"
        - "discarded"
        - "favIconUrl"
        - "hidden"
        - "isArticle"
        - "mutedInfo"
        - "openerTabId"
        - "pinned"
        - "status"
        - "title"
        - "url"

        > [!NOTE]
        > Der "url"-Wert wird seit Firefox 88 unterstützt. In Firefox 87 und früher können "url"-Änderungen durch Filtern nach "status" beobachtet werden.

    - `tabId`
      - : `Integer`. Löst dieses Ereignis nur für den Tab aus, der durch diese ID identifiziert wird.
    - `windowId`
      - : `Integer`. Löst dieses Ereignis nur für Tabs im Fenster aus, das durch diese ID identifiziert wird.

## Zusätzliche Objekte

### changeInfo

Listet die Änderungen am Zustand des aktualisierten Tabs auf. Um mehr über diese Eigenschaften zu erfahren, siehe die {{WebExtAPIRef("tabs.Tab")}} Dokumentation. Beachten Sie, dass nicht alle {{WebExtAPIRef("tabs.Tab")}} Eigenschaften unterstützt werden.

- `attention` {{optional_inline}}
  - : `boolean`. Gibt an, ob der Tab Aufmerksamkeit erregt. Zum Beispiel ist `attention` `true`, wenn der Tab einen modalen Dialog anzeigt.
- `audible` {{optional_inline}}
  - : `boolean`. Der neue hörbare Zustand des Tabs.
- `autoDiscardable` {{optional_inline}}
  - : `boolean`. Ob der Tab vom Browser verworfen werden kann. Der Standardwert ist `true`. Wenn auf `false` gesetzt, kann der Browser den Tab nicht automatisch verwerfen. Der Tab kann jedoch durch {{WebExtAPIRef("tabs.discard")}} verworfen werden.
- `discarded` {{optional_inline}}
  - : `boolean`. Gibt an, ob der Tab verworfen wurde. Ein verworfener Tab ist ein Tab, dessen Inhalt aus dem Speicher entladen wurde, aber im Tab-Balken sichtbar bleibt. Sein Inhalt wird beim nächsten Aktivieren neu geladen.
- `favIconUrl` {{optional_inline}}
  - : `string`. Die neue Favicon-URL des Tabs. Wird nicht einbezogen, wenn ein Tab sein Favicon verliert (Navigation von einer Seite mit Favicon zu einer Seite ohne Favicon). Überprüfen Sie stattdessen `favIconUrl` im [Tab](#tab).
- `hidden` {{optional_inline}}
  - : `boolean`. Wahr, wenn der Tab {{WebExtAPIRef("tabs.hide()", "versteckt")}} ist.
- `isArticle` {{optional_inline}}
  - : `boolean`. Wahr, wenn der Tab ein Artikel ist und daher zur Anzeige im [Reader-Modus](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode) berechtigt ist.
- `mutedInfo` {{optional_inline}}
  - : {{WebExtAPIRef('tabs.MutedInfo')}}. Der neue stummgeschaltete Zustand des Tabs und der Grund für die Änderung.
- `openerTabId` {{optional_inline}}
  - : `integer`. Die ID des Tabs, der diesen Tab geöffnet hat, falls vorhanden. Diese Eigenschaft ist nur vorhanden, wenn der eröffnende Tab existiert und sich im selben Fenster befindet.
- `pinned` {{optional_inline}}
  - : `boolean`. Der neue angeheftete Zustand des Tabs.
- `status` {{optional_inline}}
  - : `string`. Der Status des Tabs. Kann entweder _loading_ oder _complete_ sein.
- `title` {{optional_inline}}
  - : `string`. Der neue Titel des Tabs.
- `url` {{optional_inline}}
  - : `string`. Die URL des Tabs, sofern sie sich geändert hat.

## Beispiele

Hören Sie auf und protokollieren Sie alle Änderungsinformationen und den neuen Zustand:

```js
function handleUpdated(tabId, changeInfo, tabInfo) {
  console.log(`Updated tab: ${tabId}`);
  console.log("Changed attributes: ", changeInfo);
  console.log("New tab Info: ", tabInfo);
}

browser.tabs.onUpdated.addListener(handleUpdated);
```

Protokollieren Sie Änderungen an URLs:

```js
function handleUpdated(tabId, changeInfo, tabInfo) {
  if (changeInfo.url) {
    console.log(`Tab: ${tabId} URL changed to ${changeInfo.url}`);
  }
}

browser.tabs.onUpdated.addListener(handleUpdated);
```

### Filterbeispiele

Protokollieren Sie Änderungen nur an Tabs, deren `url`-Eigenschaft durch `https://developer.mozilla.org/*` oder `https://mastodon.social/@mdn` [übereinstimmt](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns):

```js
const pattern1 = "https://developer.mozilla.org/*";
const pattern2 = "https://mastodon.social/@mdn";

const filter = {
  urls: [pattern1, pattern2],
};

function handleUpdated(tabId, changeInfo, tabInfo) {
  console.log(`Updated tab: ${tabId}`);
  console.log("Changed attributes: ", changeInfo);
  console.log("New tab Info: ", tabInfo);
}

browser.tabs.onUpdated.addListener(handleUpdated, filter);
```

Protokollieren Sie Änderungen nur an der `pinned`-Eigenschaft von Tabs (das heißt, Anheftungs- und Lösevorgänge):

```js
const filter = {
  properties: ["pinned"],
};

function handleUpdated(tabId, changeInfo, tabInfo) {
  console.log(`Updated tab: ${tabId}`);
  console.log("Changed attributes: ", changeInfo);
  console.log("New tab Info: ", tabInfo);
}

browser.tabs.onUpdated.addListener(handleUpdated, filter);
```

Kombinieren Sie beide vorherigen Filter, protokollieren Sie nur, wenn sich die `pinned`-Eigenschaft von Tabs ändert, deren `url`-Eigenschaft durch `https://developer.mozilla.org/*` oder `https://mastodon.social/@mdn` [übereinstimmt](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns):

```js
const pattern1 = "https://developer.mozilla.org/*";
const pattern2 = "https://mastodon.social/@mdn";

const filter = {
  urls: [pattern1, pattern2],
  properties: ["pinned"],
};

function handleUpdated(tabId, changeInfo, tabInfo) {
  console.log(`Updated tab: ${tabId}`);
  console.log("Changed attributes: ", changeInfo);
  console.log("New tab Info: ", tabInfo);
}

browser.tabs.onUpdated.addListener(handleUpdated, filter);
```

Protokollieren Sie Änderungen nur, wenn sich die `pinned`-Eigenschaft von Tabs ändert, deren `url`-Eigenschaft durch `https://developer.mozilla.org/*` oder `https://mastodon.social/@mdn` [übereinstimmt](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns), wobei der Tab Teil des aktuellen Browserfensters war, als das Aktualisierungsereignis ausgelöst wurde:

```js
const pattern1 = "https://developer.mozilla.org/*";
const pattern2 = "https://mastodon.social/@mdn";

const filter = {
  urls: [pattern1, pattern2],
  properties: ["pinned"],
  windowId: browser.windows.WINDOW_ID_CURRENT,
};

function handleUpdated(tabId, changeInfo, tabInfo) {
  console.log(`Updated tab: ${tabId}`);
  console.log("Changed attributes: ", changeInfo);
  console.log("New tab Info: ", tabInfo);
}

browser.tabs.onUpdated.addListener(handleUpdated, filter);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#event-onUpdated) API. Diese Dokumentation ist abgeleitet von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

{{AddonSidebar}}
