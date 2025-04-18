---
title: tabs.onUpdated
slug: Mozilla/Add-ons/WebExtensions/API/tabs/onUpdated
l10n:
  sourceCommit: da342187abedb56612c08b166eb5594552b670e4
---

Wird ausgelöst, wenn ein Tab aktualisiert wird.

Wenn der Benutzer in einem Tab zu einer neuen URL navigiert, generiert dies typischerweise mehrere `onUpdated`-Ereignisse, da verschiedene Eigenschaften des {{WebExtAPIRef("tabs.Tab")}}-Objekts aktualisiert werden. Dies schließt die `url` ein, aber potenziell auch die Eigenschaften `title` und `favIconUrl`. Die Eigenschaft `status` wechselt zwischen `"loading"` und `"complete"`.

Dieses Ereignis wird auch bei Änderungen der Eigenschaften eines Tabs ausgelöst, die keine Navigation beinhalten, wie das An- und Abpinnen (was die Eigenschaft `pinned` aktualisiert) sowie das Stummschalten oder Aufheben der Stummschaltung (was die Eigenschaften `audible` und `mutedInfo` aktualisiert).

Sie können dieses Ereignis filtern, sodass es nur für Tabs ausgelöst wird, deren URLs bestimmten [Mustern](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) entsprechen, Änderungen an bestimmten Eigenschaften entsprechen, Änderungen an einem Tab oder Fenster betreffen oder eine beliebige Kombination dieser Einschränkungen beinhalten.

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
  - : Beendet das Lauschen auf dieses Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es lauscht, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Die Funktion erhält diese Argumente:

    - `tabId`
      - : `integer`. Die ID des aktualisierten Tabs.
    - `changeInfo`
      - : `object`. Eigenschaften des Tabs, die geändert wurden. Siehe den Abschnitt [changeInfo](#changeinfo_2) für weitere Details.
    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}. Der neue Zustand des Tabs.

- `filter` {{optional_inline}}

  - : `object`. Eine Menge von Filtern, die die an diesen Listener gesendeten Ereignisse einschränken. Dieses Objekt kann eine oder mehrere dieser Eigenschaften haben. Ereignisse werden nur gesendet, wenn sie alle angegebenen Filter erfüllen.

    - `urls`
      - : `Array`. Ein Array von [Abgleichmustern](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns). Löst das Ereignis nur für Tabs aus, deren aktuelle `url`-Eigenschaft mit einem der Muster übereinstimmt.
    - `properties`

      - : `Array`. Ein Array von Zeichenfolgen, das unterstützte {{WebExtAPIRef("tabs.Tab")}}-Objekteigenschaftsnamen enthält. Löst das Ereignis nur für Änderungen an einer der im Array genannten Eigenschaften aus. Diese Eigenschaften können verwendet werden:

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
        > Der "url"-Wert wird seit Firefox 88 unterstützt. In Firefox 87 und früher können "url"-Änderungen durch Filtern nach "status" beobachtet werden.

    - `tabId`
      - : `Integer`. Löst dieses Ereignis nur für den Tab aus, der durch diese ID identifiziert wird.
    - `windowId`
      - : `Integer`. Löst dieses Ereignis nur für Tabs im Fenster aus, das durch diese ID identifiziert wird.

## Zusätzliche Objekte

### changeInfo

Liste der Änderungen am Zustand des aktualisierten Tabs. Um mehr über diese Eigenschaften zu erfahren, siehe die Dokumentation zu {{WebExtAPIRef("tabs.Tab")}}. Beachten Sie, dass nicht alle {{WebExtAPIRef("tabs.Tab")}}-Eigenschaften unterstützt werden.

- `attention` {{optional_inline}}
  - : `boolean`. Zeigt an, ob der Tab Aufmerksamkeit erregt. Zum Beispiel ist `attention` `true`, wenn der Tab einen modalen Dialog anzeigt.
- `audible` {{optional_inline}}
  - : `boolean`. Der neue hörbare Zustand des Tabs.
- `autoDiscardable` {{optional_inline}}
  - : `boolean`. Gibt an, ob der Tab vom Browser verworfen werden kann. Der Standardwert ist `true`. Wenn auf `false` gesetzt, kann der Browser den Tab nicht automatisch verwerfen. Allerdings kann der Tab durch {{WebExtAPIRef("tabs.discard")}} verworfen werden.
- `discarded` {{optional_inline}}
  - : `boolean`. Gibt an, ob der Tab verworfen ist. Ein verworfener Tab ist einer, dessen Inhalt aus dem Speicher entfernt, aber in der Tab-Leiste sichtbar ist. Sein Inhalt wird das nächste Mal neu geladen, wenn er aktiviert wird.
- `favIconUrl` {{optional_inline}}
  - : `string`. Die neue Favicon-URL des Tabs. Wird nicht eingeschlossen, wenn ein Tab sein Favicon verliert (beim Navigieren von einer Seite mit einem Favicon zu einer ohne). Prüfen Sie `favIconUrl` im [tab](#tab) stattdessen.
- `groupId` {{optional_inline}}
  - : `integer`. Die ID der Gruppe, in der die Tabs sind, oder `-1` für nicht gruppierte Tabs.
- `hidden` {{optional_inline}}
  - : `boolean`. Wahr, wenn der Tab {{WebExtAPIRef("tabs.hide()", "ausgeblendet")}} ist.
- `isArticle` {{optional_inline}}
  - : `boolean`. Wahr, wenn der Tab ein Artikel ist und daher für die Anzeige im [Leseansicht-Modus](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode) geeignet ist.
- `mutedInfo` {{optional_inline}}
  - : {{WebExtAPIRef('tabs.MutedInfo')}}. Der neue Stummschaltungszustand des Tabs und der Grund für die Änderung.
- `openerTabId` {{optional_inline}}
  - : `integer`. Die ID des Tabs, der diesen Tab geöffnet hat, falls vorhanden. Diese Eigenschaft ist nur vorhanden, wenn der eröffnende Tab existiert und sich im selben Fenster befindet.
- `pinned` {{optional_inline}}
  - : `boolean`. Der neue anheftete Zustand des Tabs.
- `status` {{optional_inline}}
  - : `string`. Der Status des Tabs. Kann entweder _loading_ oder _complete_ sein.
- `title` {{optional_inline}}
  - : `string`. Der neue Titel des Tabs.
- `url` {{optional_inline}}
  - : `string`. Die URL des Tabs, falls sie sich geändert hat.

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

Protokollieren Sie Änderungen nur an der `pinned`-Eigenschaft von Tabs (das heißt, Anheft- und Abheftaktionen):

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

Kombinieren Sie beide vorherigen Filter, protokollieren Sie nur, wenn sich die `pinned`-Eigenschaft von Tabs ändert, für Tabs, deren `url`-Eigenschaft durch `https://developer.mozilla.org/*` oder `https://mastodon.social/@mdn` [übereinstimmt](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns):

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

Protokollieren Sie Änderungen nur, wenn sich die `pinned`-Eigenschaft von Tabs ändert, für Tabs, deren `url`-Eigenschaft durch `https://developer.mozilla.org/*` oder `https://mastodon.social/@mdn` [übereinstimmt](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns), wobei der Tab Teil des aktuellen Browserfensters war, als das Aktualisierungsereignis ausgelöst wurde:

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
> Diese API basiert auf der `chrome.tabs`-API von Chromium. Diese Dokumentation stammt aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

{{AddonSidebar}}
