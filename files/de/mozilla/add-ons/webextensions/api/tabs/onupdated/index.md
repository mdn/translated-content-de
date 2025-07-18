---
title: tabs.onUpdated
slug: Mozilla/Add-ons/WebExtensions/API/tabs/onUpdated
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Wird ausgelöst, wenn ein Tab aktualisiert wird.

Wenn der Benutzer in einem Tab zu einer neuen URL navigiert, generiert dies typischerweise mehrere `onUpdated` Ereignisse, da verschiedene Eigenschaften des {{WebExtAPIRef("tabs.Tab")}} Objekts aktualisiert werden. Dies schließt die `url` ein, aber auch möglicherweise die Eigenschaften `title` und `favIconUrl`. Die Eigenschaft `status` wird zwischen `"loading"` und `"complete"` wechseln.

Dieses Ereignis wird auch für Änderungen an den Eigenschaften eines Tabs ausgelöst, die keine Navigation beinhalten, wie das Anheften und Lösen (was die Eigenschaft `pinned` aktualisiert) sowie das Stummschalten oder Entstummschalten (was die Eigenschaften `audible` und `mutedInfo` aktualisiert).

Sie können dieses Ereignis filtern, sodass es nur für Tabs ausgelöst wird, deren URLs bestimmte [Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) erfüllen, Änderungen an bestimmten Eigenschaften, Änderungen an einem Tab oder Fenster oder jede Kombination dieser Einschränkungen.

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
  - : Beendet das Zuhören auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis auftritt. Der Funktion werden diese Argumente übergeben:
    - `tabId`
      - : `integer`. Die ID des aktualisierten Tabs.
    - `changeInfo`
      - : `object`. Eigenschaften des Tabs, die sich geändert haben. Siehe den [changeInfo](#changeinfo_2) Abschnitt für mehr Details.
    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}. Der neue Zustand des Tabs.

- `filter` {{optional_inline}}
  - : `object`. Eine Reihe von Filtern, die die an diesen Listener gesendeten Ereignisse einschränken. Dieses Objekt kann eine oder mehrere dieser Eigenschaften haben. Ereignisse werden nur gesendet, wenn sie alle angegebenen Filter erfüllen.
    - `urls`
      - : `Array`. Ein Array von [Muster-Übereinstimmungen](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns). Löst das Ereignis nur für Tabs aus, deren aktuelles `url`-Eigenschaft mit einem der Muster übereinstimmt.
    - `properties`
      - : `Array`. Ein Array von Zeichenfolgen, bestehend aus unterstützten Eigenschaftsnamen des {{WebExtAPIRef("tabs.Tab")}} Objekts. Löst das Ereignis nur bei Änderungen an einer der im Array genannten Eigenschaften aus. Diese Eigenschaften können verwendet werden:
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
        - "status"
        - "title"
        - "url"

        > [!NOTE]
        > Der "url" Wert wird seit Firefox 88 unterstützt. In Firefox 87 und früher können "url" Änderungen durch Filtern nach "status" beobachtet werden.

    - `tabId`
      - : `Integer`. Löst dieses Ereignis nur für den durch diese ID identifizierten Tab aus.
    - `windowId`
      - : `Integer`. Löst dieses Ereignis nur für Tabs im durch diese ID identifizierten Fenster aus.

## Zusätzliche Objekte

### changeInfo

Listet die Änderungen am Zustand des aktualisierten Tabs auf. Um mehr über diese Eigenschaften zu erfahren, siehe die {{WebExtAPIRef("tabs.Tab")}} Dokumentation. Beachten Sie, dass nicht alle {{WebExtAPIRef("tabs.Tab")}} Eigenschaften unterstützt werden.

- `attention` {{optional_inline}}
  - : `boolean`. Gibt an, ob der Tab Aufmerksamkeit erregt. Zum Beispiel ist `attention` `true`, wenn der Tab einen modalen Dialog anzeigt.
- `audible` {{optional_inline}}
  - : `boolean`. Der neue hörbare Zustand des Tabs.
- `autoDiscardable` {{optional_inline}}
  - : `boolean`. Ob der Tab vom Browser aus dem Speicher entfernt werden kann. Der Standardwert ist `true`. Wenn auf `false` gesetzt, kann der Tab nicht automatisch vom Browser entfernt werden. Er kann jedoch durch {{WebExtAPIRef("tabs.discard")}} entfernt werden.
- `discarded` {{optional_inline}}
  - : `boolean`. Ob der Tab entfernt wurde. Ein entfernter Tab ist einer, dessen Inhalt aus dem Speicher entladen wurde, aber in der Tableiste sichtbar bleibt. Sein Inhalt wird beim nächsten Aktivieren neu geladen.
- `favIconUrl` {{optional_inline}}
  - : `string`. Die neue Favicon URL des Tabs. Nicht enthalten, wenn ein Tab sein Favicon verliert (wenn von einer Seite mit Favicon zu einer ohne gewechselt wird). Prüfen Sie `favIconUrl` im [tab](#tab) statt.
- `groupId` {{optional_inline}}
  - : `integer`. Die ID der Gruppe, in der sich die Tabs befinden, oder `-1` ({{WebExtAPIRef("tabGroups.TAB_GROUP_ID_NONE")}}) für nicht gruppierte Tabs.
- `hidden` {{optional_inline}}
  - : `boolean`. Wahr, wenn der Tab {{WebExtAPIRef("tabs.hide()", "versteckt")}} ist.
- `isArticle` {{optional_inline}}
  - : `boolean`. Wahr, wenn der Tab ein Artikel ist und daher für die Anzeige im [Reader-Modus](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode) geeignet ist.
- `mutedInfo` {{optional_inline}}
  - : {{WebExtAPIRef('tabs.MutedInfo')}}. Der neue stumme Zustand des Tabs und der Grund für die Änderung.
- `openerTabId` {{optional_inline}}
  - : `integer`. Die ID des Tabs, der diesen Tab geöffnet hat, falls vorhanden. Diese Eigenschaft ist nur vorhanden, wenn der öffnende Tab existiert und im gleichen Fenster ist.
- `pinned` {{optional_inline}}
  - : `boolean`. Der neue angeheftete Zustand des Tabs.
- `status` {{optional_inline}}
  - : `string`. Der Status des Tabs. Kann entweder _loading_ oder _complete_ sein.
- `title` {{optional_inline}}
  - : `string`. Der neue Titel des Tabs.
- `url` {{optional_inline}}
  - : `string`. Die URL des Tabs, falls sie sich geändert hat.

## Beispiele

Lauschen und protokollieren Sie alle Änderungsinformationen und den neuen Zustand:

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

### Filter-Beispiele

Protokollieren Sie Änderungen nur für Tabs, deren `url`-Eigenschaft durch `https://developer.mozilla.org/*` oder `https://mastodon.social/@mdn` [gematcht](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) wird:

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

Protokollieren Sie Änderungen nur an der `pinned`-Eigenschaft von Tabs (d.h. Anheften und Lösen):

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

Kombinieren Sie beide vorherigen Filter, protokollieren Sie nur, wenn sich die `pinned`-Eigenschaft von Tabs ändert, deren `url`-Eigenschaft durch `https://developer.mozilla.org/*` oder `https://mastodon.social/@mdn` [gematcht](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) wird:

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

Protokollieren Sie nur Änderungen, wenn sich die `pinned`-Eigenschaft von Tabs ändert, deren `url`-Eigenschaft durch `https://developer.mozilla.org/*` oder `https://mastodon.social/@mdn` [gematcht](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) wird und der Tab Teil des aktuellen Browserfensters war, als das Update-Ereignis ausgelöst wurde:

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
