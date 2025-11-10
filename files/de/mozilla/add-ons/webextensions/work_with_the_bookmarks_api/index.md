---
title: Arbeiten mit der Bookmarks API
slug: Mozilla/Add-ons/WebExtensions/Work_with_the_Bookmarks_API
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Lesezeichen ermöglichen es Benutzern, Listen von Webseiten zu sammeln und zu organisieren, sodass sie einfach zu ihren Favoriten zurückkehren können. Mithilfe der Bookmarks API können Ihre Erweiterungen Lesezeichen in ähnlicher Weise manipulieren wie Benutzer.

## Berechtigungen

Um die Bookmarks API zu nutzen, müssen Sie in der manifest.json-Datei Ihrer Erweiterung die Berechtigung `"bookmarks"` anfordern:

```json
"permissions": [
  "bookmarks"
],
```

## Funktionen

Die Bookmarks API ermöglicht es Ihrer Erweiterung, die Dinge zu tun, die Benutzer mit Lesezeichen tun können, und beinhaltet Funktionen für:

- Grundlegende Manipulation von Lesezeichenelementen mit:
  - hinzufügen ({{WebExtAPIRef("bookmarks.create")}}).
  - abrufen ({{WebExtAPIRef("bookmarks.get")}}).
  - aktualisieren ({{WebExtAPIRef("bookmarks.update")}}).
  - verschieben ({{WebExtAPIRef("bookmarks.move")}}).
  - löschen ({{WebExtAPIRef("bookmarks.remove")}}).
  - suchen ({{WebExtAPIRef("bookmarks.search")}}).

- Abrufen einer Liste der zuletzt hinzugefügten Lesezeichen ({{WebExtAPIRef("bookmarks.getRecent")}}).
- Manipulation des Lesezeichen-Ordnerbaums, um:
  - Bauminformationen zu erhalten ({{WebExtAPIRef("bookmarks.getTree")}}, {{WebExtAPIRef("bookmarks.getChildren")}} und {{WebExtAPIRef("bookmarks.getSubTree")}}).
  - Zweige hinzuzufügen ({{WebExtAPIRef("bookmarks.create")}}).
  - Knoten zu löschen ({{WebExtAPIRef("bookmarks.removeTree")}}).
  - Knoten zu verschieben ({{WebExtAPIRef("bookmarks.move")}}).

- Auf Ereignisse von Lesezeichen (oder Lesezeichen-Ordnern) zu hören, die:
  - hinzufügen ({{WebExtAPIRef("bookmarks.onCreated")}}).
  - ändern ({{WebExtAPIRef("bookmarks.onChanged")}}).
  - verschieben ({{WebExtAPIRef("bookmarks.onMoved")}}).
  - neu anordnen ({{WebExtAPIRef("bookmarks.onChildrenReordered")}}).
  - entfernen ({{WebExtAPIRef("bookmarks.onRemoved")}}).

- Auf den Import von Lesezeichen zu hören, der verwendet werden kann, um andere Lesezeichen-Verarbeitungen während eines Imports zu pausieren:
  - Import gestartet ({{WebExtAPIRef("bookmarks.onImportBegan")}}).
  - Import abgeschlossen ({{WebExtAPIRef("bookmarks.onImportEnded")}}).

## Beispiel-Anleitung

Um ein Verständnis dafür zu bekommen, wie man mit der Bookmarks API arbeitet, schauen wir uns das [bookmark-it](https://github.com/mdn/webextensions-examples/tree/main/bookmark-it) Beispiel an. Dieses Beispiel fügt ein Symbol zur Symbolleiste hinzu ({{WebExtAPIRef("browserAction")}}), das beim Klicken die aktuelle Seite zu den Lesezeichen hinzufügt oder daraus entfernt. Wenn die Seite auf andere Weise zu Lesezeichen hinzugefügt oder daraus entfernt wird, wird das Symbol aktualisiert, um den Status der Seiten-Lesezeichen anzuzeigen.

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

Definiert die Symbole, die verwendet werden, um die Erweiterung darzustellen, beispielsweise im Add-On-Manager.

```json
  "icons": {
    "48": "icons/bookmark-it.png",
    "96": "icons/bookmark-it@2x.png"
  },
```

Fordert Berechtigungen an. `"bookmarks"` wird angefordert, um die Nutzung der Bookmarks API zu ermöglichen. `"tabs"` wird angefordert, damit die URL und der Titel des aktiven Tabs gelesen und verwendet werden können, um das Lesezeichen der Seite zu erstellen oder zu finden. Die Notwendigkeit der Tabs API, um auf diese Details zuzugreifen, bedeutet, dass Sie wahrscheinlich die Bookmarks API nicht ohne die Tabs API verwenden werden.

```json
  "permissions": [
    "bookmarks",
    "tabs"
  ],
```

Richtet die grundlegenden Details des Schaltflächen der Symbolleiste ein. Die meisten Eigenschaften der Schaltfläche werden im Code eingerichtet, nachdem der Lesezeichenstatus der Seite bekannt ist.

```json
  "browser_action": {
    "default_icon": "icons/star-empty-38.png",
    "default_title": "Bookmark it!"
  },
```

Definiert das Hintergrundskript, das das Lesezeichen der Seite hinzufügt und entfernt und die Eigenschaften der Schaltfläche der Symbolleiste festlegt.

```json
  "background": {
    "scripts": ["background.js"]
  }

}
```

### background.js

Wie bei jedem Hintergrundskript wird [background.js](https://github.com/mdn/webextensions-examples/blob/main/bookmark-it/background.js) sofort ausgeführt, wenn die Erweiterung gestartet wird. Zu Beginn ruft das Skript `updateActiveTab()` auf, das damit beginnt, das `Tabs`-Objekt für den aktuellen Tab mit {{WebExtAPIRef("tabs.query")}} zu erhalten, und das Objekt mit diesem Code an `updateTab()` übergibt:

```js
let gettingActiveTab = browser.tabs.query({
  active: true,
  currentWindow: true,
});
gettingActiveTab.then(updateTab);
```

`updateTab()` übergibt zuerst die URL des aktiven Tabs an `isSupportedProtocol()`. Wenn das Protokoll von Lesezeichen unterstützt wird, bestimmt die Erweiterung, ob die URL des Tabs als Lesezeichen gespeichert ist und ruft dann, falls dies der Fall ist, `updateIcon()` auf.

```js
function updateTab(tabs) {
  if (tabs[0]) {
    currentTab = tabs[0];
    if (isSupportedProtocol(currentTab.url)) {
      let searching = browser.bookmarks.search({ url: currentTab.url });
      searching.then((bookmarks) => {
        currentBookmark = bookmarks[0];
        updateIcon();
      });
    } else {
      console.log(`Bookmark it! does not support the '${currentTab.url}' URL.`);
    }
  }
}
```

`isSupportedProtocol()` bestimmt, ob die in dem aktiven Tab angezeigte URL eine ist, die als Lesezeichen gespeichert werden kann. Um das Protokoll von der URL des Tabs zu extrahieren, nutzt die Erweiterung das [HTMLAnchorElement](/de/docs/Web/API/HTMLAnchorElement), indem sie die URL des Tabs einem `<a>`-Element hinzufügt und dann das Protokoll mit der `protocol`-Eigenschaft abruft.

```js
function isSupportedProtocol(urlString) {
  let supportedProtocols = ["https:", "http:", "file:"];
  let url = document.createElement("a");
  url.href = urlString;
  return supportedProtocols.includes(url.protocol);
}
```

`updateIcon()` legt das Symbol und den Titel der Schaltfläche der Symbolleiste fest, abhängig davon, ob die URL als Lesezeichen gespeichert ist oder nicht.

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

Mit der initialisierten Schaltfläche der Symbolleiste beginnt die Erweiterung, auf einen Klick auf die Schaltfläche zu hören, wobei `toggleBookmark()` aufgerufen wird, wenn dies geschieht.

```js
browser.browserAction.onClicked.addListener(toggleBookmark);
```

`toggleBookmark()` verwendet das Ergebnis der Suche, die durch `updateTabs()` durchgeführt wurde, um zu prüfen, ob die URL in einem Lesezeichen vorhanden ist, um zu bestimmen, ob das Lesezeichen für die aktuelle URL entfernt oder hinzugefügt werden soll.

```js
function toggleBookmark() {
  if (currentBookmark) {
    browser.bookmarks.remove(currentBookmark.id);
  } else {
    browser.bookmarks.create({ title: currentTab.title, url: currentTab.url });
  }
}
```

Um das Symbol der Symbolleiste zu aktualisieren, hört die Erweiterung auf die Erstellung oder Entfernung von Lesezeichen. Dieser Ansatz hat den Vorteil, dass sowohl die von der Erweiterung vorgenommenen Änderungen des Lesezeichens als auch Änderungen, die der Benutzer außerhalb der Erweiterung vornimmt, erfasst werden.

```js
// listen for bookmarks being created
browser.bookmarks.onCreated.addListener(updateActiveTab);

// listen for bookmarks being removed
browser.bookmarks.onRemoved.addListener(updateActiveTab);
```

Schließlich hört die Erweiterung auf Änderungen der URL des aktiven Tabs oder das Wechseln des Benutzers zu einem anderen Tab oder Fenster. Diese Aktionen können die angezeigte URL und damit den Status des Symbols der Symbolleiste der Erweiterung ändern.

```js
// listen to tab URL changes
browser.tabs.onUpdated.addListener(updateActiveTab);

// listen to tab switching
browser.tabs.onActivated.addListener(updateActiveTab);

// listen for window switching
browser.windows.onFocusChanged.addListener(updateActiveTab);
```

## Mehr erfahren

Wenn Sie mehr erfahren möchten, schauen Sie sich das [Bookmarks API Reference](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks) an.
