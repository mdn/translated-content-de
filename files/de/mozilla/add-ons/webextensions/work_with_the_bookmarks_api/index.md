---
title: Arbeiten mit der Bookmarks-API
slug: Mozilla/Add-ons/WebExtensions/Work_with_the_Bookmarks_API
l10n:
  sourceCommit: b16d05494dd1252531451ebc3e995ea0f2a9007b
---

{{AddonSidebar}}

Lesezeichen ermöglichen es Benutzern, Listen von Webseiten zu sammeln und zu organisieren, sodass sie einfach zu ihren Favoriten zurückkehren können. Mit der Bookmarks-API können Ihre Erweiterungen Lesezeichen auf ähnliche Weise manipulieren, wie Benutzer es können.

## Berechtigungen

Um die Bookmarks-API nutzen zu können, müssen Sie in der manifest.json-Datei Ihrer Erweiterung um die Berechtigung `"bookmarks"` bitten:

```json
"permissions": [
  "bookmarks"
],
```

## Funktionen

Die Bookmarks-API ermöglicht es Ihrer Erweiterung, die Dinge zu tun, die Benutzer mit Lesezeichen tun können, und umfasst Funktionen für:

- Grundlegende Manipulation von Lesezeicheneinträgen, einschließlich:

  - Hinzufügen ({{WebExtAPIRef("bookmarks.create")}}).
  - Abrufen ({{WebExtAPIRef("bookmarks.get")}}).
  - Aktualisieren ({{WebExtAPIRef("bookmarks.update")}}).
  - Verschieben ({{WebExtAPIRef("bookmarks.move")}}).
  - Löschen ({{WebExtAPIRef("bookmarks.remove")}}).
  - Suchen ({{WebExtAPIRef("bookmarks.search")}}).

- Abrufen einer Liste kürzlich hinzugefügter Lesezeichen ({{WebExtAPIRef("bookmarks.getRecent")}}).
- Manipulation der Lesezeichenordnerstruktur, um:

  - Bauminformationen zu erhalten ({{WebExtAPIRef("bookmarks.getTree")}}, {{WebExtAPIRef("bookmarks.getChildren")}} und {{WebExtAPIRef("bookmarks.getSubTree")}}).
  - Zweige hinzuzufügen ({{WebExtAPIRef("bookmarks.create")}}).
  - Knoten zu löschen ({{WebExtAPIRef("bookmarks.removeTree")}}).
  - Knoten zu verschieben ({{WebExtAPIRef("bookmarks.move")}}).

- Überwachen von Lesezeichen- (oder Lesezeichenbaumordner-)Ereignissen, die:

  - Hinzufügen ({{WebExtAPIRef("bookmarks.onCreated")}}).
  - Ändern ({{WebExtAPIRef("bookmarks.onChanged")}}).
  - Verschieben ({{WebExtAPIRef("bookmarks.onMoved")}}).
  - Neu anordnen ({{WebExtAPIRef("bookmarks.onChildrenReordered")}}).
  - Löschen ({{WebExtAPIRef("bookmarks.onRemoved")}}).

- Überwachen von Lesezeichenimporten, die verwendet werden können, um andere Lesezeichenverarbeitungen auszusetzen, während ein Import im Gange ist:

  - Import gestartet ({{WebExtAPIRef("bookmarks.onImportBegan")}}).
  - Import beendet ({{WebExtAPIRef("bookmarks.onImportEnded")}}).

## Beispiel-Durchlauf

Um zu verstehen, wie man mit der Bookmarks-API arbeitet, werfen Sie einen Blick auf das [bookmark-it](https://github.com/mdn/webextensions-examples/tree/main/bookmark-it) Beispiel. Dieses Beispiel fügt ein Symbol zur Symbolleiste hinzu ({{WebExtAPIRef("browserAction")}}), das beim Klicken die aktuelle Seite zu den Lesezeichen hinzufügt oder daraus entfernt. Wenn die Seite auf andere Weise zu den Lesezeichen hinzugefügt (oder daraus entfernt) wird, wird das Symbol aktualisiert, um den Status der Seitenmarkierung anzuzeigen.

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

Definiert die Symbole, die verwendet werden, um die Erweiterung in Bereichen wie dem Add-on-Manager darzustellen.

```json
  "icons": {
    "48": "icons/bookmark-it.png",
    "96": "icons/bookmark-it@2x.png"
  },
```

Fordert Berechtigungen an. `"bookmarks"` wird angefordert, um die Nutzung der Bookmarks-API zu ermöglichen. `"tabs"` wird angefordert, damit die URL und der Titel des aktiven Tabs gelesen und verwendet werden können, um das Lesezeichen der Seite zu erstellen oder zu finden. Die Notwendigkeit der Tabs-API, um auf diese Details zuzugreifen, bedeutet, dass Sie die Bookmark-API wahrscheinlich nicht ohne die Tabs-API verwenden werden.

```json
  "permissions": [
    "bookmarks",
    "tabs"
  ],
```

Richtet die grundlegenden Details der Symbolleistenschaltfläche ein. Die meisten Funktionen der Schaltfläche werden im Code eingerichtet, nachdem der Lesezeichenstatus der Seite bekannt ist.

```json
  "browser_action": {
    "default_icon": "icons/star-empty-38.png",
    "default_title": "Bookmark it!"
  },
```

Definiert das Hintergrundskript, das das Lesezeichen der Seite hinzufügt und entfernt und die Eigenschaften der Symbolleistenschaltfläche festlegt.

```json
  "background": {
    "scripts": ["background.js"]
  }

}
```

### background.js

Wie bei jedem Hintergrundskript wird [background.js](https://github.com/mdn/webextensions-examples/blob/main/bookmark-it/background.js) ausgeführt, sobald die Erweiterung gestartet wird. Zu Beginn ruft das Skript `updateActiveTab()` auf, das mit dem Abrufen des `Tabs`-Objekts für den aktuellen Tab beginnt, indem {{WebExtAPIRef("tabs.query")}} verwendet wird, und das Objekt an `updateTab()` mit folgendem Code übergibt:

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

`isSupportedProtocol()` bestimmt, ob die URL, die im aktiven Tab angezeigt wird, eine ist, die als Lesezeichen gespeichert werden kann. Um das Protokoll aus der URL des Tabs zu extrahieren, nutzt die Erweiterung das [HTMLAnchorElement](/de/docs/Web/API/HTMLAnchorElement), indem sie die URL des Tabs zu einem `<a>`-Element hinzufügt und dann das Protokoll über die `protocol`-Eigenschaft abruft.

```js
function isSupportedProtocol(urlString) {
  let supportedProtocols = ["https:", "http:", "file:"];
  let url = document.createElement("a");
  url.href = urlString;
  return supportedProtocols.includes(url.protocol);
}
```

Wenn das Protokoll eines ist, das von Lesezeichen unterstützt wird, bestimmt die Erweiterung, ob die URL des Tabs bereits als Lesezeichen gespeichert ist und ruft, falls dies der Fall ist, `updateIcon()` auf:

```js
      let searching = browser.bookmarks.search({ url: currentTab.url });
      searching.then((bookmarks) => {
        currentBookmark = bookmarks[0];
        updateIcon();
```

`updateIcon()` setzt das Symbol der Symbolleistenschaltfläche und den Titel, je nachdem, ob die URL als Lesezeichen gespeichert ist oder nicht.

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

Sobald die Symbolleistenschaltfläche initialisiert ist, beginnt die Erweiterung, auf einen Klick auf die Symbolleistenschaltfläche zu hören und `toggleBookmark()` zu rufen, wenn dies passiert.

```js
browser.browserAction.onClicked.addListener(toggleBookmark);
```

`toggleBookmark()` verwendet das Ergebnis der Suche, die durch `updateTabs()` gemacht wird, um das Vorhandensein der URL in einem Lesezeichen zu bestimmen, ob ein Lesezeichen für die aktuelle URL entfernt oder hinzugefügt werden soll.

```js
function toggleBookmark() {
  if (currentBookmark) {
    browser.bookmarks.remove(currentBookmark.id);
  } else {
    browser.bookmarks.create({ title: currentTab.title, url: currentTab.url });
  }
}
```

Um das Symbol der Symbolleiste zu aktualisieren, hört die Erweiterung auf das Erstellen oder Entfernen von Lesezeichen. Dieser Ansatz hat den Vorteil, dass sowohl die Lesezeichenaktualisierung erfasst wird, die durch die Erweiterung vorgenommen wird, als auch jede Aktualisierung, die vom Benutzer außerhalb der Erweiterung vorgenommen wird.

```js
// listen for bookmarks being created
browser.bookmarks.onCreated.addListener(updateActiveTab);

// listen for bookmarks being removed
browser.bookmarks.onRemoved.addListener(updateActiveTab);
```

Schließlich hört die Erweiterung auf eine Änderung der URL des aktiven Tabs oder darauf, dass der Benutzer zu einem anderen Tab oder Fenster wechselt. Diese Aktionen könnten die angezeigte URL ändern und daher den Status des Symbols der Symbolleiste der Erweiterung beeinflussen.

```js
// listen to tab URL changes
browser.tabs.onUpdated.addListener(updateActiveTab);

// listen to tab switching
browser.tabs.onActivated.addListener(updateActiveTab);

// listen for window switching
browser.windows.onFocusChanged.addListener(updateActiveTab);
```

## Mehr erfahren

Wenn Sie mehr erfahren möchten, schauen Sie sich das [Bookmarks API Referenz](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks) an.
