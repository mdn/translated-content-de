---
title: tabs.onUpdated
slug: Mozilla/Add-ons/WebExtensions/API/tabs/onUpdated
l10n:
  sourceCommit: a3a52b0f278b81ca2638a8662a6e82a4447c5485
---

Wird ausgelöst, wenn ein Tab aktualisiert wird.

Wenn der Benutzer in einem Tab zu einer neuen URL navigiert, erzeugt dies typischerweise mehrere `onUpdated`-Ereignisse, während verschiedene Eigenschaften des {{WebExtAPIRef("tabs.Tab")}}-Objekts aktualisiert werden. Dazu gehört die `url`, aber auch potenziell die Eigenschaften `title` und `favIconUrl`. Die Eigenschaft `status` wird zwischen `"loading"` und `"complete"` wechseln.

Dieses Ereignis wird auch bei Änderungen an den Eigenschaften eines Tabs ausgelöst, die keine Navigation betreffen, wie das Anpinnen oder Entfernen der Anpinnung (was die Eigenschaft `pinned` aktualisiert) und das Stummschalten oder Aufheben der Stummschaltung (was die Eigenschaften `audible` und `mutedInfo` aktualisiert).

Sie können dieses Ereignis filtern, sodass es nur für Tabs mit URLs ausgelöst wird, die bestimmten [Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) entsprechen, Änderungen an bestimmten Eigenschaften, Änderungen an einem Tab oder Fenster oder beliebige Kombinationen dieser Einschränkungen.

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
  - : Fügt einen Listener zu diesem Ereignis hinzu.
- `removeListener(listener)`
  - : Stoppt das Zuhören bei diesem Ereignis. Das Argument `listener` ist der zu entfernende Listener.
- `hasListener(listener)`
  - : Überprüft, ob `listener` für dieses Ereignis registriert ist. Gibt `true` zurück, wenn es zuhört, andernfalls `false`.

## addListener-Syntax

### Parameter

- `listener`

  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis eintritt. Der Funktion werden folgende Argumente übergeben:

    - `tabId`
      - : `integer`. Die ID des aktualisierten Tabs.
    - `changeInfo`
      - : `object`. Eigenschaften des Tabs, die sich geändert haben. Siehe den Abschnitt [changeInfo](#changeinfo_2) für weitere Details.
    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}. Der neue Zustand des Tabs.

- `filter` {{optional_inline}}

  - : `object`. Eine Reihe von Filtern, die die zu diesem Listener gesendeten Ereignisse einschränken. Dieses Objekt kann eine oder mehrere dieser Eigenschaften haben. Ereignisse werden nur gesendet, wenn sie alle bereitgestellten Filter erfüllen.

    - `urls`
      - : `Array`. Ein Array von [Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns). Das Ereignis wird nur für Tabs ausgelöst, deren aktuelle `url`-Eigenschaft einem der Muster entspricht.
    - `properties`

      - : `Array`. Ein Array von Zeichenfolgen, bestehend aus unterstützten Eigenschaften des {{WebExtAPIRef("tabs.Tab")}}-Objekts. Das Ereignis wird nur für Änderungen an einer der im Array genannten Eigenschaften ausgelöst. Diese Eigenschaften können verwendet werden:

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
      - : `Integer`. Löst dieses Ereignis nur für den durch diese ID identifizierten Tab aus.
    - `windowId`
      - : `Integer`. Löst dieses Ereignis nur für Tabs im durch diese ID identifizierten Fenster aus.

## Zusätzliche Objekte

### changeInfo

Listet die Änderungen am Zustand des aktualisierten Tabs auf. Um mehr über diese Eigenschaften zu erfahren, siehe die {{WebExtAPIRef("tabs.Tab")}}-Dokumentation. Beachten Sie, dass nicht alle {{WebExtAPIRef("tabs.Tab")}}-Eigenschaften unterstützt werden.

- `attention` {{optional_inline}}
  - : `boolean`. Zeigt an, ob der Tab Aufmerksamkeit erregt. Zum Beispiel ist `attention` `true`, wenn der Tab einen modalen Dialog anzeigt.
- `audible` {{optional_inline}}
  - : `boolean`. Der neue hörbare Zustand des Tabs.
- `autoDiscardable` {{optional_inline}}
  - : `boolean`. Gibt an, ob der Tab vom Browser verworfen werden kann. Der Standardwert ist `true`. Wenn auf `false` gesetzt, kann der Browser den Tab nicht automatisch verwerfen. Der Tab kann jedoch durch {{WebExtAPIRef("tabs.discard")}} verworfen werden.
- `discarded` {{optional_inline}}
  - : `boolean`. Gibt an, ob der Tab verworfen ist. Ein verworfener Tab ist ein solcher, dessen Inhalt aus dem Speicher entladen wurde, aber im Tabstreifen sichtbar ist. Sein Inhalt wird das nächste Mal neu geladen, wenn er aktiviert wird.
- `favIconUrl` {{optional_inline}}
  - : `string`. Die neue Favicon-URL des Tabs. Wird nicht inkludiert, wenn ein Tab sein Favicon verliert (bei der Navigation von einer Seite mit Favicon zu einer Seite ohne Favicon). Überprüfen Sie `favIconUrl` im [tab](#tab)-Bereich statt.
- `hidden` {{optional_inline}}
  - : `boolean`. Wahr, wenn der Tab {{WebExtAPIRef("tabs.hide()", "versteckt")}} ist.
- `isArticle` {{optional_inline}}
  - : `boolean`. Wahr, wenn der Tab ein Artikel ist und daher für die Anzeige im [Lesemodus](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode) geeignet ist.
- `mutedInfo` {{optional_inline}}
  - : {{WebExtAPIRef('tabs.MutedInfo')}}. Der neue stummgeschaltete Zustand des Tabs und der Grund für die Änderung.
- `openerTabId` {{optional_inline}}
  - : `integer`. Die ID des Tabs, der diesen Tab geöffnet hat, falls vorhanden. Diese Eigenschaft ist nur vorhanden, wenn der ursprüngliche Tab existiert und im selben Fenster ist.
- `pinned` {{optional_inline}}
  - : `boolean`. Der neue angeheftete Zustand des Tabs.
- `status` {{optional_inline}}
  - : `string`. Der Status des Tabs. Kann entweder _loading_ oder _complete_ sein.
- `title` {{optional_inline}}
  - : `string`. Der neue Titel des Tabs.
- `url` {{optional_inline}}
  - : `string`. Die URL des Tabs, falls diese geändert wurde.

## Beispiele

Zuhören und alle geänderten Informationen und den neuen Zustand protokollieren:

```js
function handleUpdated(tabId, changeInfo, tabInfo) {
  console.log(`Updated tab: ${tabId}`);
  console.log("Geänderte Attribute: ", changeInfo);
  console.log("Neue Tab-Info: ", tabInfo);
}

browser.tabs.onUpdated.addListener(handleUpdated);
```

Änderungen der URLs protokollieren:

```js
function handleUpdated(tabId, changeInfo, tabInfo) {
  if (changeInfo.url) {
    console.log(`Tab: ${tabId} URL wurde zu ${changeInfo.url} geändert`);
  }
}

browser.tabs.onUpdated.addListener(handleUpdated);
```

### Filterbeispiele

Protokollieren Sie Änderungen nur an Tabs, deren `url`-Eigenschaft dem [Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) `https://developer.mozilla.org/*` oder `https://mozilla.social/@mdn` entspricht:

```js
const pattern1 = "https://developer.mozilla.org/*";
const pattern2 = "https://mozilla.social/@mdn";

const filter = {
  urls: [pattern1, pattern2],
};

function handleUpdated(tabId, changeInfo, tabInfo) {
  console.log(`Updated tab: ${tabId}`);
  console.log("Geänderte Attribute: ", changeInfo);
  console.log("Neue Tab-Info: ", tabInfo);
}

browser.tabs.onUpdated.addListener(handleUpdated, filter);
```

Protokollieren Sie Änderungen nur an der `pinned`-Eigenschaft von Tabs (also Pin- und Unpin-Aktionen):

```js
const filter = {
  properties: ["pinned"],
};

function handleUpdated(tabId, changeInfo, tabInfo) {
  console.log(`Updated tab: ${tabId}`);
  console.log("Geänderte Attribute: ", changeInfo);
  console.log("Neue Tab-Info: ", tabInfo);
}

browser.tabs.onUpdated.addListener(handleUpdated, filter);
```

Kombinieren Sie beide vorherigen Filter, loggen Sie nur dann, wenn sich die `pinned`-Eigenschaft von Tabs ändert, deren `url`-Eigenschaft dem [Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) `https://developer.mozilla.org/*` oder `https://mozilla.social/@mdn` entspricht:

```js
const pattern1 = "https://developer.mozilla.org/*";
const pattern2 = "https://mozilla.social/@mdn";

const filter = {
  urls: [pattern1, pattern2],
  properties: ["pinned"],
};

function handleUpdated(tabId, changeInfo, tabInfo) {
  console.log(`Updated tab: ${tabId}`);
  console.log("Geänderte Attribute: ", changeInfo);
  console.log("Neue Tab-Info: ", tabInfo);
}

browser.tabs.onUpdated.addListener(handleUpdated, filter);
```

Protokollieren Sie Änderungen nur, wenn sich die `pinned`-Eigenschaft von Tabs ändert, für die `url`-Eigenschaft dem [Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) `https://developer.mozilla.org/*` oder `https://mozilla.social/@mdn` entspricht und der Tab Teil des aktuellen Browserfensters war, als das Updated-Ereignis ausgelöst wurde:

```js
const pattern1 = "https://developer.mozilla.org/*";
const pattern2 = "https://mozilla.social/@mdn";

const filter = {
  urls: [pattern1, pattern2],
  properties: ["pinned"],
  windowId: browser.windows.WINDOW_ID_CURRENT,
};

function handleUpdated(tabId, changeInfo, tabInfo) {
  console.log(`Updated tab: ${tabId}`);
  console.log("Geänderte Attribute: ", changeInfo);
  console.log("Neue Tab-Info: ", tabInfo);
}

browser.tabs.onUpdated.addListener(handleUpdated, filter);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#event-onUpdated)-API von Chromium. Diese Dokumentation stammt von [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

{{AddonSidebar}}
