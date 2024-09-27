---
title: Arbeiten mit der Bookmarks API
slug: Mozilla/Add-ons/WebExtensions/Work_with_the_Bookmarks_API
l10n:
  sourceCommit: 1079b152415f26432481498d2d2b4e8b2f81e3e0
---

{{AddonSidebar}}

Bei Bookmarks können Benutzer Listen von Webseiten sammeln und organisieren, sodass sie leicht zu ihren Favoriten zurückkehren können. Mithilfe der Bookmarks API können Ihre Erweiterungen Bookmarks auf ähnliche Weise wie Benutzer manipulieren.

## Berechtigungen

Um die Bookmarks API nutzen zu können, müssen Sie die Berechtigung `"bookmarks"` in der manifest.json-Datei Ihrer Erweiterung anfordern:

```json
"permissions": [
  "bookmarks"
],
```

## Funktionen

Die Bookmarks API ermöglicht es Ihrer Erweiterung, die gleichen Aktionen mit Bookmarks auszuführen, wie Benutzer sie durchführen können, und bietet Funktionen für:

- Grundlegende Manipulation von Bookmarks, einschließlich:

  - Hinzufügen ({{WebExtAPIRef("bookmarks.create")}}).
  - Abrufen ({{WebExtAPIRef("bookmarks.get")}}).
  - Aktualisieren ({{WebExtAPIRef("bookmarks.update")}}).
  - Verschieben ({{WebExtAPIRef("bookmarks.move")}}).
  - Löschen ({{WebExtAPIRef("bookmarks.remove")}}).
  - Suchen ({{WebExtAPIRef("bookmarks.search")}}).

- Abrufen einer Liste von kürzlich hinzugefügten Bookmarks ({{WebExtAPIRef("bookmarks.getRecent")}}).
- Manipulation des Bookmark-Ordnerbaums, um:

  - Baumdaten zu erhalten ({{WebExtAPIRef("bookmarks.getTree")}}, {{WebExtAPIRef("bookmarks.getChildren")}}, und {{WebExtAPIRef("bookmarks.getSubTree")}}).
  - Äste hinzuzufügen ({{WebExtAPIRef("bookmarks.create")}}).
  - Knoten zu löschen ({{WebExtAPIRef("bookmarks.removeTree")}}).
  - Knoten zu verschieben ({{WebExtAPIRef("bookmarks.move")}}).

- Abhören von Bookmarks (oder Bookmark-Ordnerbaum) Ereignissen, die:

  - Hinzufügen ({{WebExtAPIRef("bookmarks.onCreated")}}).
  - Ändern ({{WebExtAPIRef("bookmarks.onChanged")}}).
  - Verschieben ({{WebExtAPIRef("bookmarks.onMoved")}}).
  - Neu anordnen ({{WebExtAPIRef("bookmarks.onChildrenReordered")}}).
  - Entfernen ({{WebExtAPIRef("bookmarks.onRemoved")}}).

- Abhören von Bookmark-Importen, die genutzt werden können, um andere Bookmark-Verarbeitungen während eines Imports auszusetzen:

  - Import gestartet ({{WebExtAPIRef("bookmarks.onImportBegan")}}).
  - Import abgeschlossen ({{WebExtAPIRef("bookmarks.onImportEnded")}}).

## Beispiel-Durchgang

Um zu verstehen, wie man mit der Bookmarks API arbeitet, betrachten wir das [bookmark-it](https://github.com/mdn/webextensions-examples/tree/main/bookmark-it) Beispiel. Dieses Beispiel fügt ein Symbol zur Symbolleiste hinzu ({{WebExtAPIRef("browserAction")}}), das beim Anklicken die aktuelle Seite zu den Bookmarks hinzufügt oder daraus entfernt. Wenn die Seite auf andere Weise ein Lesezeichen erhält (oder entfernt wird), wird das Symbol aktualisiert, um den Status der Seite bezüglich des Bookmarkings anzuzeigen.

Dieses Video zeigt die Erweiterung in Aktion:

{{EmbedYouTube("hCDN0FotiFw")}}

### manifest.json

Die [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/bookmark-it/manifest.json) beschreibt die Erweiterung:

```json
{
  "manifest_version": 2,
  "name": "Bookmark it!",
  "version": "1.1",
  "description": "A simple bookmark button",
  "homepage_url": "https://github.com/mdn/webextensions-examples/tree/main/bookmark-it",
```

Definiert die Symbole, die zur Darstellung der Erweiterung an Orten wie dem Add-On-Manager verwendet werden.

```json
  "icons": {
    "48": "icons/bookmark-it.png",
    "96": "icons/bookmark-it@2x.png"
  },
```

Fordert Berechtigungen an. `"bookmarks"` wird angefordert, um die Nutzung der Bookmarks API zu ermöglichen. `"tabs"` wird angefordert, damit die URL und der Titel des aktiven Tabs gelesen und verwendet werden können, um das Bookmark der Seite zu erstellen oder zu finden. Die Notwendigkeit der Tabs API, um auf diese Details zuzugreifen, bedeutet, dass Sie die Bookmarks API wahrscheinlich nicht ohne die Tabs API nutzen werden.

```json
  "permissions": [
    "bookmarks",
    "tabs"
  ],
```

Richtet die grundlegenden Details der Schaltfläche in der Symbolleiste ein. Die meisten Funktionen dieser Schaltfläche werden im Code eingerichtet, nachdem der Lesezeichenstatus der Seite bekannt ist.

```json
  "browser_action": {
    "default_icon": "icons/star-empty-38.png",
    "default_title": "Bookmark it!"
  },
```

Definiert das Hintergrundskript, das das Bookmark der Seite hinzufügt und entfernt und die Merkmale der Schaltfläche in der Symbolleiste festlegt.

```json
  "background": {
    "scripts": ["background.js"]
  }

}
```

### background.js

Wie jedes Hintergrundskript wird [background.js](https://github.com/mdn/webextensions-examples/blob/main/bookmark-it/background.js) ausgeführt, sobald die Erweiterung gestartet wird. Das Skript ruft initial `updateActiveTab()` auf, das beginnt, indem es das `Tabs`-Objekt für den aktuellen Tab erhält, mithilfe von {{WebExtAPIRef("tabs.query")}}, und das Objekt mit diesem Code an `updateTab()` übergibt:

```js
let gettingActiveTab = browser.tabs.query({
  active: true,
  currentWindow: true,
});
gettingActiveTab.then(updateTab);
```

`updateTab()` übergibt zuerst die URL des aktiven Tabs an `isSupportedProtocol()`:

```js
  function updateTab(tabs) {
    if (tabs[0]) {
      currentTab = tabs[0];
      if (isSupportedProtocol(currentTab.url)) {
```

`isSupportedProtocol()` stellt fest, ob die URL, die im aktiven Tab angezeigt wird, eine ist, die ein Lesezeichen erhalten kann. Um das Protokoll aus der URL des Tabs zu extrahieren, nutzt die Erweiterung das [HTMLAnchorElement](/de/docs/Web/API/HTMLAnchorElement), indem sie die URL des Tabs einem `<a>`-Element hinzufügt und dann das Protokoll mit der `protocol`-Eigenschaft erhält.

```js
function isSupportedProtocol(urlString) {
  let supportedProtocols = ["https:", "http:", "file:"];
  let url = document.createElement("a");
  url.href = urlString;
  return supportedProtocols.includes(url.protocol);
}
```

Wenn das Protokoll eines ist, das von Bookmarks unterstützt wird, stellt die Erweiterung fest, ob die URL des Tabs bereits ein Lesezeichen hat, und wenn ja, ruft `updateIcon()` auf:

```js
      let searching = browser.bookmarks.search({url: currentTab.url});
      searching.then((bookmarks) => {
        currentBookmark = bookmarks[0];
        updateIcon();
```

`updateIcon()` setzt das Symbol und den Titel der Schaltfläche in der Symbolleiste, abhängig davon, ob die URL ein Lesezeichen hat oder nicht.

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

Sobald die Schaltfläche in der Symbolleiste initialisiert ist, beginnt die Erweiterung, auf einen Klick auf die Schaltfläche in der Symbolleiste zu hören, und ruft `toggleBookmark()` auf, wenn dies geschieht.

```js
browser.browserAction.onClicked.addListener(toggleBookmark);
```

`toggleBookmark()` verwendet das Ergebnis der von `updateTabs()` durchgeführten Suche, die das Vorhandensein der URL in einem Bookmark überprüft, um zu bestimmen, ob das Bookmark für die aktuelle URL entfernt oder hinzugefügt werden soll.

```js
function toggleBookmark() {
  if (currentBookmark) {
    browser.bookmarks.remove(currentBookmark.id);
  } else {
    browser.bookmarks.create({ title: currentTab.title, url: currentTab.url });
  }
}
```

Um das Symbol in der Symbolleiste zu aktualisieren, hört die Erweiterung auf die Erstellung oder Entfernung von Bookmarks. Diese Vorgehensweise hat den Vorteil, sowohl die von der Erweiterung durchgeführte Lesezeichenaktualisierung als auch jede von einem Benutzer außerhalb der Erweiterung durchgeführte Aktualisierung zu erfassen.

```js
// listen for bookmarks being created
browser.bookmarks.onCreated.addListener(updateActiveTab);

// listen for bookmarks being removed
browser.bookmarks.onRemoved.addListener(updateActiveTab);
```

Schließlich hört die Erweiterung auf Änderungen der URL des aktiven Tabs, oder wenn der Benutzer zu einem anderen Tab oder Fenster wechselt. Diese Aktionen könnten die angezeigte URL ändern und somit den Status des Symbols in der Symbolleiste der Erweiterung.

```js
// listen to tab URL changes
browser.tabs.onUpdated.addListener(updateActiveTab);

// listen to tab switching
browser.tabs.onActivated.addListener(updateActiveTab);

// listen for window switching
browser.windows.onFocusChanged.addListener(updateActiveTab);
```

## Mehr erfahren

Wenn Sie mehr erfahren möchten, sehen Sie sich das [Bookmarks API Reference](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks) an.
