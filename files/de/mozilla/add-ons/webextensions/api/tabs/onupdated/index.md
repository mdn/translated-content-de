---
title: tabs.onUpdated
slug: Mozilla/Add-ons/WebExtensions/API/tabs/onUpdated
l10n:
  sourceCommit: 8bc98818dfbc851ee6749b123e98f5eeb7e43923
---

Wird ausgelöst, wenn ein Tab aktualisiert wird.

Wenn der Benutzer zu einer neuen URL in einem Tab navigiert, werden typischerweise mehrere `onUpdated`-Ereignisse generiert, da verschiedene Eigenschaften des {{WebExtAPIRef("tabs.Tab")}}-Objekts aktualisiert werden. Dies schließt die `url` ein, aber auch potenziell die `title`- und `favIconUrl`-Eigenschaften. Die `status`-Eigenschaft durchläuft die Zustände `"loading"` und `"complete"`.

Dieses Ereignis wird auch für Änderungen an den Eigenschaften eines Tabs ausgelöst, die keine Navigation beinhalten, wie etwa das Anpinnen und Lösen eines Pins (was die `pinned`-Eigenschaft aktualisiert) sowie das Stummschalten oder Aufheben der Stummschaltung (was die Eigenschaften `audible` und `mutedInfo` aktualisiert).

Sie können dieses Ereignis filtern, sodass es nur für Tabs ausgelöst wird, deren URLs bestimmten [Mustern](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) entsprechen, für Änderungen an bestimmten Eigenschaften, Änderungen an einem Tab oder Fenster oder jede Kombination dieser Einschränkungen.

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
  - : Fügt diesem Ereignis einen Listener hinzu.
- `removeListener(listener)`
  - : Stoppt das Lauschen auf dieses Ereignis. Das Argument `listener` ist der Listener, der entfernt werden soll.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, ansonsten `false`.

## addListener Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden diese Argumente übergeben:
    - `tabId`
      - : `integer`. Die ID des aktualisierten Tabs.
    - `changeInfo`
      - : `object`. Die Eigenschaften des Tabs, die sich geändert haben. Siehe den Abschnitt [changeInfo](#changeinfo) für weitere Details.
    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}. Der neue Zustand des Tabs.

- `filter` {{optional_inline}}
  - : `object`. Eine Menge von Filtern, die die Ereignisse einschränken, die an diesen Listener gesendet werden. Dieses Objekt kann eine oder mehrere dieser Eigenschaften haben. Ereignisse werden nur gesendet, wenn alle bereitgestellten Filter erfüllt sind.
    - `urls`
      - : `Array`. Ein Array von [Übereinstimmungsmustern](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns). Löst das Ereignis nur für Tabs aus, deren aktuelle `url`-Eigenschaft einem der Muster entspricht.
    - `properties`
      - : `Array`. Ein Array von Strings, bestehend aus unterstützten {{WebExtAPIRef("tabs.Tab")}}-Objekteigenschaftsnamen. Löst das Ereignis nur für Änderungen an einem der in dem Array benannten Eigenschaften aus. Diese Eigenschaften können verwendet werden:
        - "attention"
        - "autoDiscardable"
        - "audible"
        - "discarded"
        - "favIconUrl"
        - "groupId"
        - "hidden"
        - "isArticle"
        - "mutedInfo"
        - "openerTabId"
        - "pinned"
        - "splitViewId"
        - "status"
        - "title"
        - "url"

        > [!NOTE]
        > Der Wert "url" wird seit Firefox 88 unterstützt. In Firefox 87 und früher können "url"-Änderungen durch Filterung nach "status" beobachtet werden.

    - `tabId`
      - : `Integer`. Löst dieses Ereignis nur für den Tab aus, der durch diese ID identifiziert wird.
    - `windowId`
      - : `Integer`. Löst dieses Ereignis nur für Tabs im Fenster mit dieser ID aus.
    - `cookieStoreId`
      - : `Integer`. Löst dieses Ereignis nur für Tabs im Cookie-Speicher mit dieser ID aus.

## Zusätzliche Objekte

### changeInfo

Listet die Änderungen am Zustand des aktualisierten Tabs auf. Um mehr über diese Eigenschaften zu erfahren, siehe die {{WebExtAPIRef("tabs.Tab")}}-Dokumentation. Beachten Sie, dass nicht alle {{WebExtAPIRef("tabs.Tab")}}-Eigenschaften unterstützt werden.

- `attention` {{optional_inline}}
  - : `boolean`. Gibt an, ob der Tab Aufmerksamkeit erregt. Beispielsweise ist `attention` `true`, wenn der Tab einen modalen Dialog anzeigt.
- `audible` {{optional_inline}}
  - : `boolean`. Der neue hörbare Zustand des Tabs.
- `autoDiscardable` {{optional_inline}}
  - : `boolean`. Ob der Tab vom Browser verworfen werden kann. Der Standardwert ist `true`. Wenn auf `false` gesetzt, kann der Browser den Tab nicht automatisch verwerfen. Er kann jedoch manuell durch {{WebExtAPIRef("tabs.discard")}} verworfen werden.
- `discarded` {{optional_inline}}
  - : `boolean`. Ob der Tab verworfen ist. Ein verworfener Tab ist einer, dessen Inhalt aus dem Speicher entladen wurde, aber im Tabstreifen sichtbar bleibt. Sein Inhalt wird erneut geladen, wenn er das nächste Mal aktiviert wird.
- `favIconUrl` {{optional_inline}}
  - : `string`. Die neue Favicon-URL des Tabs. Nicht enthalten, wenn ein Tab sein Favicon verliert (z. B. beim Navigieren von einer Seite mit einem Favicon zu einer ohne Favicon). Prüfen Sie `favIconUrl` in [tab](#tab) stattdessen.
- `groupId` {{optional_inline}}
  - : `integer`. Die ID der Gruppe, in der sich die Tabs befinden, oder `-1` ({{WebExtAPIRef("tabGroups.TAB_GROUP_ID_NONE")}}) für nicht gruppierte Tabs.
- `hidden` {{optional_inline}}
  - : `boolean`. Wahr, wenn der Tab {{WebExtAPIRef("tabs.hide()", "versteckt")}} ist.
- `isArticle` {{optional_inline}}
  - : `boolean`. Wahr, wenn der Tab ein Artikel ist und daher für die Anzeige im [Reader-Modus](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode) geeignet ist.
- `mutedInfo` {{optional_inline}}
  - : {{WebExtAPIRef('tabs.MutedInfo')}}. Der neue stummgeschaltete Zustand des Tabs und der Grund für die Änderung.
- `openerTabId` {{optional_inline}}
  - : `integer`. Die ID des Tabs, der diesen Tab geöffnet hat, falls vorhanden. Diese Eigenschaft ist nur vorhanden, wenn der öffnende Tab existiert und sich im gleichen Fenster befindet.
- `pinned` {{optional_inline}}
  - : `boolean`. Der neue angepinnte Zustand des Tabs.
- `splitViewId` {{optional_inline}}
  - : `integer`. Die ID der [geteilten Ansicht](/de/docs/Mozilla/Add-ons/WebExtensions/Working_with_the_Tabs_API#working_with_tab_split_views), zu der der Tab gehört. Wird auf {{WebExtAPIRef('tabs.SPLIT_VIEW_ID_NONE')}} gesetzt, wenn der Tab keiner geteilten Ansicht angehört.
- `status` {{optional_inline}}
  - : `string`. Der Status des Tabs. Kann entweder _loading_ oder _complete_ sein.
- `title` {{optional_inline}}
  - : `string`. Der neue Titel des Tabs.
- `url` {{optional_inline}}
  - : `string`. Die URL des Tabs, falls sie sich geändert hat.

## Beispiele

Lauschen Sie auf und protokollieren Sie alle Änderungsinformationen und den neuen Zustand:

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

Protokollieren Sie Änderungen nur für Tabs, deren `url`-Eigenschaft durch `https://developer.mozilla.org/*` oder `https://mastodon.social/@mdn` [übereinstimmt](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns):

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

Protokollieren Sie Änderungen nur an der `pinned`-Eigenschaft von Tabs (d.h. Pin- und Unpin-Aktionen):

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

Protokollieren Sie Änderungen nur, wenn sich die `pinned`-Eigenschaft von Tabs ändert, deren `url`-Eigenschaft durch `https://developer.mozilla.org/*` oder `https://mastodon.social/@mdn` [übereinstimmt](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns), wobei der Tab zum Zeitpunkt des Aktualisierungsereignisses Teil des aktuellen Browser-Fensters war:

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
> Diese API basiert auf Chromiums [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#event-onUpdated) API. Diese Dokumentation ist von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code abgeleitet.
