---
title: tabs.onUpdated
slug: Mozilla/Add-ons/WebExtensions/API/tabs/onUpdated
l10n:
  sourceCommit: 96d939992ea44193eabf6e690df574d21dd86b7a
---

Wird ausgelöst, wenn ein Tab aktualisiert wird.

Wenn der Benutzer in einem Tab zu einer neuen URL navigiert, generiert dies typischerweise mehrere `onUpdated`-Ereignisse, da verschiedene Eigenschaften des {{WebExtAPIRef("tabs.Tab")}}-Objekts aktualisiert werden. Dazu gehört die `url`, aber potenziell auch die Eigenschaften `title` und `favIconUrl`. Die Eigenschaft `status` wechselt zwischen `"loading"` und `"complete"`.

Dieses Ereignis wird auch bei Änderungen an den Eigenschaften eines Tabs ausgelöst, die keine Navigation beinhalten, wie das Anheften und Lösen (was die Eigenschaft `pinned` aktualisiert) und das Stummschalten oder Aufheben der Stummschaltung (was die Eigenschaften `audible` und `mutedInfo` aktualisiert).

Sie können dieses Ereignis filtern, sodass es nur für Tabs ausgelöst wird, deren URLs bestimmten [Mustern](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) entsprechen, Änderungen an bestimmten Eigenschaften, Änderungen an einem Tab oder Fenster oder jede Kombination dieser Einschränkungen.

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

## addListener Syntax

### Parameter

- `listener`
  - : Die Funktion, die aufgerufen wird, wenn dieses Ereignis auftritt. Der Funktion werden diese Argumente übergeben:
    - `tabId`
      - : `integer`. Die ID des aktualisierten Tabs.
    - `changeInfo`
      - : `object`. Eigenschaften des Tabs, die sich geändert haben. Weitere Einzelheiten finden Sie im Abschnitt [changeInfo](#changeinfo).
    - `tab`
      - : {{WebExtAPIRef('tabs.Tab')}}. Der neue Zustand des Tabs.

- `filter` {{optional_inline}}
  - : `object`. Eine Reihe von Filtern, die die an diesen Listener gesendeten Ereignisse einschränken. Dieses Objekt kann eine oder mehrere dieser Eigenschaften haben. Ereignisse werden nur gesendet, wenn sie alle angegebenen Filter erfüllen.
    - `urls`
      - : `Array`. Ein Array von [Musterübereinstimmungen](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns). Löst das Ereignis nur für Tabs aus, deren aktuelle `url`-Eigenschaft einem der Muster entspricht.
    - `properties`
      - : `Array`. Ein Array von Zeichenfolgen, das unterstützte Eigenschaftsnamen von {{WebExtAPIRef("tabs.Tab")}}-Objekten enthält. Löst das Ereignis nur bei Änderungen einer der im Array benannten Eigenschaften aus. Diese Eigenschaften können verwendet werden:
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
        > Der Wert "url" wird seit Firefox 88 unterstützt. In Firefox 87 und früher können `url`-Änderungen durch Filtern nach `status` beobachtet werden.

    - `tabId`
      - : `Integer`. Löst dieses Ereignis nur für den Tab aus, der durch diese ID identifiziert wird.
    - `windowId`
      - : `Integer`. Löst dieses Ereignis nur für Tabs im durch diese ID identifizierten Fenster aus.
    - `cookieStoreId`
      - : `Integer`. Löst dieses Ereignis nur für Tabs im durch diese ID identifizierten Cookie-Store aus.

## Zusätzliche Objekte

### changeInfo

Listet die Änderungen am Zustand des aktualisierten Tabs auf. Um mehr über diese Eigenschaften zu erfahren, lesen Sie die Dokumentation zu {{WebExtAPIRef("tabs.Tab")}}. Beachten Sie, dass nicht alle Eigenschaften von {{WebExtAPIRef("tabs.Tab")}} unterstützt werden.

- `attention` {{optional_inline}}
  - : `boolean`. Gibt an, ob der Tab Aufmerksamkeit erregt. Zum Beispiel ist `attention` `true`, wenn der Tab einen modalen Dialog anzeigt.
- `audible` {{optional_inline}}
  - : `boolean`. Der neue hörbare Zustand des Tabs.
- `autoDiscardable` {{optional_inline}}
  - : `boolean`. Ob der Tab vom Browser verworfen werden kann. Der Standardwert ist `true`. Wenn `false` gesetzt ist, kann der Browser den Tab nicht automatisch verwerfen. Der Tab kann jedoch durch {{WebExtAPIRef("tabs.discard")}} verworfen werden.
- `discarded` {{optional_inline}}
  - : `boolean`. Ob der Tab verworfen ist. Ein verworfener Tab ist einer, dessen Inhalt aus dem Speicher entladen wurde, aber im Tab-Bereich sichtbar ist. Sein Inhalt wird beim nächsten Aktivieren neu geladen.
- `favIconUrl` {{optional_inline}}
  - : `string`. Die neue Favicon-URL des Tabs. Wird nicht eingeschlossen, wenn ein Tab sein Favicon verliert (von einer Seite mit Favicon zu einer Seite ohne Favicon navigiert). Überprüfen Sie `favIconUrl` im [tab](#tab) stattdessen.
- `groupId` {{optional_inline}}
  - : `integer`. Die ID der Gruppe, in der sich die Tabs befinden, oder `-1` ({{WebExtAPIRef("tabGroups.TAB_GROUP_ID_NONE")}}) für nicht gruppierte Tabs.
- `hidden` {{optional_inline}}
  - : `boolean`. Wahr, wenn der Tab {{WebExtAPIRef("tabs.hide()", "hidden")}} ist.
- `isArticle` {{optional_inline}}
  - : `boolean`. Wahr, wenn der Tab ein Artikel ist und daher für die Anzeige im [Reader-Modus](/de/docs/Mozilla/Add-ons/WebExtensions/API/tabs/toggleReaderMode) geeignet ist.
- `mutedInfo` {{optional_inline}}
  - : {{WebExtAPIRef('tabs.MutedInfo')}}. Der neue Stummschaltezustand des Tabs und der Grund für die Änderung.
- `openerTabId` {{optional_inline}}
  - : `integer`. Die ID des Tabs, der diesen Tab geöffnet hat, falls vorhanden. Diese Eigenschaft ist nur vorhanden, wenn der eröffnende Tab existiert und sich im gleichen Fenster befindet.
- `pinned` {{optional_inline}}
  - : `boolean`. Der neue angeheftete Zustand des Tabs.
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

Protokollieren Sie Änderungen nur für Tabs, deren `url`-Eigenschaft mit `https://developer.mozilla.org/*` oder `https://mastodon.social/@mdn` [übereinstimmt](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns):

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

Protokollieren Sie Änderungen nur an der `pinned`-Eigenschaft von Tabs (d.h. Anheft- und Lösaktionen):

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

Kombinieren Sie beide vorangehenden Filter, protokollieren Sie nur, wenn die `pinned`-Eigenschaft von Tabs geändert wird, deren `url`-Eigenschaft mit `https://developer.mozilla.org/*` oder `https://mastodon.social/@mdn` [übereinstimmt](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns):

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

Protokollieren Sie Änderungen nur, wenn sich die `pinned`-Eigenschaft von Tabs ändert, deren `url`-Eigenschaft mit `https://developer.mozilla.org/*` oder `https://mastodon.social/@mdn` [übereinstimmt](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns), wobei sich der Tab im aktuellen Browserfenster befand, als das Aktualisierungsereignis ausgelöst wurde:

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
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#event-onUpdated)-API von Chromium. Diese Dokumentation stammt aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.

<!--
// Urheberrecht 2015 Die Chromium-Autoren. Alle Rechte vorbehalten.
//
// Weitergabe und Verwendung in Quell- und Binärformen, mit oder ohne
// Modifikation, sind unter der Bedingung erlaubt, dass die folgenden Bedingungen
// erfüllt sind:
//
//    * Weitergaben von Quellcode müssen den obigen Urheberrechtshinweis,
// die Liste der Bedingungen und den folgenden Haftungsausschluss enthalten.
//    * Weitergaben in binärer Form müssen den obigen Urheberrechtshinweis,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss in der
// Dokumentation und/oder anderen Materialien, die mit der Verteilung geliefert
// werden, enthalten.
//    * Weder der Name von Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die aus
// dieser Software abgeleitet wurden, ohne spezifische vorherige schriftliche
// Genehmigung zu unterstützen oder zu fördern.
//
// DIESE SOFTWARE WIRD VON DEN URHEBERRECHTSINHABERN UND MITWIRKENDEN
// "WIE BESEHEN" BEREITGESTELLT, UND JEGLICHE AUSDRÜCKLICHE ODER STILLSCHWEIGENDE
// GEWÄHRLEISTUNGEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF, DIE STILLSCHWEIGENDE
// GEWÄHRLEISTUNG DER MARKTGÄNGIGKEIT UND EIGNUNG FÜR EINEN BESTIMMTEN ZWECK SIND
// AUSGESCHLOSSEN. IN KEINEM FALL HAFTEN DIE EIGENTÜMER ODER
// BEITRAGENDEN FÜR JEGLICHE DIREKTEN, INDIREKTEN, ZUFÄLLIGEN,
// SPEZIELLEN, EXEMPLARISCHEN ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER
// NICHT BESCHRÄNKT AUF, BESCHAFFUNG VON ERSATZWAREN ODER -DIENSTLEISTUNGEN; VERLUST
// DER NUTZUNG, DATEN ODER GEWINNE; ODER GESCHÄFTSUNTERBRECHUNG), WIE AUCH
// IMMER URSÄCHLICH, OB DURCH VERTRAG, STRIKTE HAFTUNG ODER
// UNERLAUBTE HANDLUNG (EINSCHLIESSLICH NACHLÄSSIGKEIT ODER ANDERES), DIE DURCH
// DIE NUTZUNG DIESER SOFTWARE ENTSTEHEN, SELBST WENN AUF DIE MÖGLICHKEIT
// SOLCHER SCHÄDEN HINGEWIESEN WURDE.
-->
