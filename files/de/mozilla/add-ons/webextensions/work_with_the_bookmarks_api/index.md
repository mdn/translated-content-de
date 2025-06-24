---
title: Arbeiten mit der Bookmarks-API
slug: Mozilla/Add-ons/WebExtensions/Work_with_the_Bookmarks_API
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Lesezeichen ermöglichen es Benutzern, Listen von Webseiten zu sammeln und zu organisieren, damit sie leichter zu ihren Favoriten zurückkehren können. Mit der Bookmarks-API können Ihre Erweiterungen Lesezeichen ähnlich wie die Benutzer verwalten.

## Berechtigungen

Um die Bookmarks-API nutzen zu können, müssen Sie in der manifest.json-Datei Ihrer Erweiterung die Berechtigung `"bookmarks"` anfordern:

```json
"permissions": [
  "bookmarks"
],
```

## Funktionen

Die Bookmarks-API ermöglicht es Ihrer Erweiterung, alles zu tun, was Benutzer mit Lesezeichen machen können, und umfasst Funktionen für:

- Grundlegende Manipulation von Lesezeichenelementen, wie:

  - hinzufügen ({{WebExtAPIRef("bookmarks.create")}}).
  - abrufen ({{WebExtAPIRef("bookmarks.get")}}).
  - aktualisieren ({{WebExtAPIRef("bookmarks.update")}}).
  - verschieben ({{WebExtAPIRef("bookmarks.move")}}).
  - löschen ({{WebExtAPIRef("bookmarks.remove")}}).
  - suchen ({{WebExtAPIRef("bookmarks.search")}}).

- Abrufen einer Liste kürzlich hinzugefügter Lesezeichen ({{WebExtAPIRef("bookmarks.getRecent")}}).
- Manipulation des Lesezeichenordnerbaums, um:

  - Bauminformationen abzurufen ({{WebExtAPIRef("bookmarks.getTree")}}, {{WebExtAPIRef("bookmarks.getChildren")}} und {{WebExtAPIRef("bookmarks.getSubTree")}}).
  - Zweige hinzuzufügen ({{WebExtAPIRef("bookmarks.create")}}).
  - Knoten zu löschen ({{WebExtAPIRef("bookmarks.removeTree")}}).
  - Knoten zu verschieben ({{WebExtAPIRef("bookmarks.move")}}).

- Überwachen von Lesezeichen (oder Lesezeichenordnerbaum-) Ereignissen wie:

  - hinzufügen ({{WebExtAPIRef("bookmarks.onCreated")}}).
  - ändern ({{WebExtAPIRef("bookmarks.onChanged")}}).
  - verschieben ({{WebExtAPIRef("bookmarks.onMoved")}}).
  - neu anordnen ({{WebExtAPIRef("bookmarks.onChildrenReordered")}}).
  - entfernen ({{WebExtAPIRef("bookmarks.onRemoved")}}).

- Überwachen von Lesezeichenimporten, die verwendet werden können, um andere Lesezeichenverarbeitungen zu pausieren, während ein Import im Gange ist:
  - Import gestartet ({{WebExtAPIRef("bookmarks.onImportBegan")}}).
  - Import beendet ({{WebExtAPIRef("bookmarks.onImportEnded")}}).

## Beispielanleitung

Um ein Verständnis davon zu gewinnen, wie man mit der Bookmarks-API arbeitet, schauen wir uns das [bookmark-it](https://github.com/mdn/webextensions-examples/tree/main/bookmark-it)-Beispiel an. Dieses Beispiel fügt ein Symbol in der Werkzeugleiste hinzu ({{WebExtAPIRef("browserAction")}}), das beim Anklicken die aktuelle Seite zu den Lesezeichen hinzufügt oder entfernt. Wenn die Seite auf andere Weise zu den Lesezeichen hinzugefügt oder entfernt wird, wird das Symbol aktualisiert, um den Status des Lesezeichens der Seite anzuzeigen.

Dieses Video zeigt die Erweiterung in Aktion:

{{EmbedYouTube("hCDN0FotiFw")}}

### manifest.json

Das [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/bookmark-it/manifest.json) beschreibt die Erweiterung:

```json
{
  "manifest_version": 2,
  "name": "Bookmark it!",
  "version": "1.1",
  "description": "A simple bookmark button",
  "homepage_url": "https://github.com/mdn/webextensions-examples/tree/main/bookmark-it",
```

Definiert die Symbole, die verwendet werden, um die Erweiterung im Add-on-Manager darzustellen.

```json
  "icons": {
    "48": "icons/bookmark-it.png",
    "96": "icons/bookmark-it@2x.png"
  },
```

Fordert Berechtigungen an. `"bookmarks"` wird angefordert, um die Bookmarks-API nutzen zu können. `"tabs"` wird angefordert, damit die URL und der Titel des aktiven Tabs gelesen und verwendet werden können, um das Lesezeichen der Seite zu erstellen oder zu finden. Die Notwendigkeit der Tabs-API, um auf diese Details zugreifen zu können, bedeutet, dass Sie die Bookmark-API wahrscheinlich nicht ohne die Tabs-API verwenden werden.

```json
  "permissions": [
    "bookmarks",
    "tabs"
  ],
```

Richtet die grundlegenden Details des Werkzeugleistensymbols ein. Die meisten Funktionen des Symbols werden im Code eingerichtet, nachdem der Lesezeichenstatus der Seite bekannt ist.

```json
  "browser_action": {
    "default_icon": "icons/star-empty-38.png",
    "default_title": "Bookmark it!"
  },
```

Definiert das Hintergrundskript, das das Lesezeichen der Seite hinzufügen und entfernen und die Eigenschaften des Werkzeugleistensymbols festlegen wird.

```json
  "background": {
    "scripts": ["background.js"]
  }

}
```

### background.js

Wie bei jedem Hintergrundskript wird [background.js](https://github.com/mdn/webextensions-examples/blob/main/bookmark-it/background.js) ausgeführt, sobald die Erweiterung gestartet wird. Zuerst ruft das Skript `updateActiveTab()` auf, das mit dem Abrufen des `Tabs`-Objekts für den aktuellen Tab beginnt, indem es {{WebExtAPIRef("tabs.query")}} verwendet und das Objekt mit diesem Code an `updateTab()` übergibt:

```js
let gettingActiveTab = browser.tabs.query({
  active: true,
  currentWindow: true,
});
gettingActiveTab.then(updateTab);
```

`updateTab()` gibt zunächst die URL des aktiven Tabs an `isSupportedProtocol()` weiter:

```js
  function updateTab(tabs) {
    if (tabs[0]) {
      currentTab = tabs[0];
      if (isSupportedProtocol(currentTab.url)) {
```

`isSupportedProtocol()` bestimmt, ob die im aktiven Tab angezeigte URL eine ist, die mit Lesezeichen versehen werden kann. Um das Protokoll aus der URL des Tabs zu extrahieren, nutzt die Erweiterung das [HTMLAnchorElement](/de/docs/Web/API/HTMLAnchorElement), indem die URL des Tabs zu einem `<a>`-Element hinzugefügt und dann das Protokoll mit der `protocol`-Eigenschaft abgerufen wird.

```js
function isSupportedProtocol(urlString) {
  let supportedProtocols = ["https:", "http:", "file:"];
  let url = document.createElement("a");
  url.href = urlString;
  return supportedProtocols.includes(url.protocol);
}
```

Wenn das Protokoll eines ist, das von Lesezeichen unterstützt wird, bestimmt die Erweiterung, ob die URL des Tabs bereits als Lesezeichen vorhanden ist und ruft `updateIcon()` auf, wenn dies der Fall ist:

```js
      let searching = browser.bookmarks.search({ url: currentTab.url });
      searching.then((bookmarks) => {
        currentBookmark = bookmarks[0];
        updateIcon();
```

`updateIcon()` setzt das Symbol und den Titel des Werkzeugleistensymbols je nachdem, ob die URL mit einem Lesezeichen versehen ist oder nicht.

```js
function updateIcon() {
  browser.browserAction.setIcon({
    path: currentBookmark
      ? {
          19: "icons/star-filled-19.png",
          38: "icons/star-filled-38.png",
        }
      : {
          19: "icons/star-empty-19.png",
          38: "icons/star-empty-38.png",
        },
    tabId: currentTab.id,
  });
  browser.browserAction.setTitle({
    // Screen readers can see the title
    title: currentBookmark ? "Unbookmark it!" : "Bookmark it!",
    tabId: currentTab.id,
  });
}
```

Mit dem initialisierten Werkzeugleistensymbol beginnt die Erweiterung, auf einen Klick auf das Werkzeugleistensymbol zu hören und ruft `toggleBookmark()` auf, wenn dies geschieht.

```js
browser.browserAction.onClicked.addListener(toggleBookmark);
```

`toggleBookmark()` verwendet das Ergebnis der von `updateTabs()` durchgeführten Suche, die nach der Präsenz der URL in einem Lesezeichen sucht, um zu bestimmen, ob ein Lesezeichen für die aktuelle URL entfernt oder hinzugefügt werden soll.

```js
function toggleBookmark() {
  if (currentBookmark) {
    browser.bookmarks.remove(currentBookmark.id);
  } else {
    browser.bookmarks.create({ title: currentTab.title, url: currentTab.url });
  }
}
```

Um das Symbol der Werkzeugleiste zu aktualisieren, hört die Erweiterung auf das Erstellen oder Entfernen von Lesezeichen. Dieser Ansatz hat den Vorteil, dass sowohl die von der Erweiterung vorgenommene Lesezeichenaktualisierung als auch jede durch den Benutzer außerhalb der Erweiterung vorgenommene Aktualisierung erfasst wird.

```js
// listen for bookmarks being created
browser.bookmarks.onCreated.addListener(updateActiveTab);

// listen for bookmarks being removed
browser.bookmarks.onRemoved.addListener(updateActiveTab);
```

Schließlich hört die Erweiterung auf eine Änderung der URL des aktiven Tabs oder darauf, dass der Benutzer zu einem anderen Tab oder Fenster wechselt. Diese Aktionen könnten die angezeigte URL ändern und damit den Status des Werkzeugleistensymbols der Erweiterung beeinflussen.

```js
// listen to tab URL changes
browser.tabs.onUpdated.addListener(updateActiveTab);

// listen to tab switching
browser.tabs.onActivated.addListener(updateActiveTab);

// listen for window switching
browser.windows.onFocusChanged.addListener(updateActiveTab);
```

## Mehr erfahren

Wenn Sie mehr erfahren möchten, schauen Sie sich die [Bookmarks API-Referenz](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks) an.
