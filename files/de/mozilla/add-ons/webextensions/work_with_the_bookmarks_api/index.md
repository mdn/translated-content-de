---
title: Arbeiten mit der Bookmarks API
slug: Mozilla/Add-ons/WebExtensions/Work_with_the_Bookmarks_API
l10n:
  sourceCommit: fd56a549d24a8002df09735ee8319ce1a721c233
---

{{AddonSidebar}}

Lesezeichen ermöglichen es Benutzern, Listen von Webseiten zu sammeln und zu organisieren, sodass sie leicht zu ihren Favoriten zurückkehren können. Mit der Bookmarks API können Ihre Erweiterungen Lesezeichen ähnlich wie Benutzer manipulieren.

## Berechtigungen

Um die Bookmarks API nutzen zu können, müssen Sie die Berechtigung `"bookmarks"` in der manifest.json-Datei Ihrer Erweiterung anfordern:

```json
"permissions": [
  "bookmarks"
],
```

## Funktionen

Die Bookmarks API ermöglicht es Ihrer Erweiterung, die gleichen Aktionen mit Lesezeichen durchzuführen, die Benutzer ausführen können, und enthält Funktionen für:

- Grundlegende Manipulation von Lesezeichenelementen, einschließlich:
  - Hinzufügen ({{WebExtAPIRef("bookmarks.create")}}).
  - Abrufen ({{WebExtAPIRef("bookmarks.get")}}).
  - Aktualisieren ({{WebExtAPIRef("bookmarks.update")}}).
  - Verschieben ({{WebExtAPIRef("bookmarks.move")}}).
  - Löschen ({{WebExtAPIRef("bookmarks.remove")}}).
  - Suchen ({{WebExtAPIRef("bookmarks.search")}}).

- Abrufen einer Liste kürzlich hinzugefügter Lesezeichen ({{WebExtAPIRef("bookmarks.getRecent")}}).
- Manipulation des Lesezeichen-Ordnerbaums, um:
  - Bauminformationen zu erhalten ({{WebExtAPIRef("bookmarks.getTree")}}, {{WebExtAPIRef("bookmarks.getChildren")}}, und {{WebExtAPIRef("bookmarks.getSubTree")}}).
  - Zweige hinzuzufügen ({{WebExtAPIRef("bookmarks.create")}}).
  - Knoten zu löschen ({{WebExtAPIRef("bookmarks.removeTree")}}).
  - Knoten zu verschieben ({{WebExtAPIRef("bookmarks.move")}}).

- Ereignisse für Lesezeichen (oder Lesezeichenbaumordner) zu hören, die:
  - Hinzufügen ({{WebExtAPIRef("bookmarks.onCreated")}}).
  - Ändern ({{WebExtAPIRef("bookmarks.onChanged")}}).
  - Verschieben ({{WebExtAPIRef("bookmarks.onMoved")}}).
  - Neu ordnen ({{WebExtAPIRef("bookmarks.onChildrenReordered")}}).
  - Entfernen ({{WebExtAPIRef("bookmarks.onRemoved")}}).

- Hören auf Lesezeichen-Importe, die verwendet werden können, um andere Lesezeichenverarbeitungen auszusetzen, während ein Import im Gange ist:
  - Import begonnen ({{WebExtAPIRef("bookmarks.onImportBegan")}}).
  - Import beendet ({{WebExtAPIRef("bookmarks.onImportEnded")}}).

## Beispiel-Durchlauf

Um zu verstehen, wie man mit der Bookmarks API arbeitet, schauen wir uns das Beispiel [bookmark-it](https://github.com/mdn/webextensions-examples/tree/main/bookmark-it) an. Dieses Beispiel fügt ein Symbol in der Symbolleiste hinzu ({{WebExtAPIRef("browserAction")}}), das beim Klicken die aktuelle Seite zu den Lesezeichen hinzufügt oder entfernt. Wenn die Seite auf andere Weise zum Lesezeichen hinzugefügt (oder entfernt) wird, wird das Symbol aktualisiert, um den Status der Seite anzuzeigen.

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

Definiert die Symbole, die verwendet werden, um die Erweiterung darzustellen, an Orten wie dem Add-On-Manager.

```json
  "icons": {
    "48": "icons/bookmark-it.png",
    "96": "icons/bookmark-it@2x.png"
  },
```

Fordert Berechtigungen an. `"bookmarks"` wird angefordert, um die Nutzung der Bookmarks API zu ermöglichen. `"tabs"` wird angefordert, damit die URL und der Titel des aktiven Tabs gelesen und verwendet werden können, um ein Lesezeichen für die Seite zu erstellen oder zu finden. Da zum Zugriff auf diese Details die Tabs API benötigt wird, werden Sie die Bookmarks API wahrscheinlich nicht ohne die Tabs API verwenden.

```json
  "permissions": [
    "bookmarks",
    "tabs"
  ],
```

Richtet die grundlegenden Details des Symbolleistenschalters ein. Die meisten Funktionen des Schalters werden im Code eingerichtet, nachdem der Lesezeichenstatus der Seite bekannt ist.

```json
  "browser_action": {
    "default_icon": "icons/star-empty-38.png",
    "default_title": "Bookmark it!"
  },
```

Definiert das Hintergrundskript, das die Lesezeichen der Seite hinzufügt und entfernt und die Merkmale des Symbolleistenschalters festlegt.

```json
  "background": {
    "scripts": ["background.js"]
  }

}
```

### background.js

Wie jedes Hintergrundskript wird [background.js](https://github.com/mdn/webextensions-examples/blob/main/bookmark-it/background.js) ausgeführt, sobald die Erweiterung startet. Das Skript ruft zunächst `updateActiveTab()` auf, das mit dem Erhalten des `Tabs`-Objekts für den aktuellen Tab beginnt, unter Verwendung von {{WebExtAPIRef("tabs.query")}}, und übergibt das Objekt mit diesem Code an `updateTab()`:

```js
let gettingActiveTab = browser.tabs.query({
  active: true,
  currentWindow: true,
});
gettingActiveTab.then(updateTab);
```

`updateTab()` übergibt zunächst die URL des aktiven Tabs an `isSupportedProtocol()`. Wenn das Protokoll von Lesezeichen unterstützt wird, bestimmt die Erweiterung, ob die URL des Tabs ein Lesezeichen enthält und, falls ja, ruft es `updateIcon()` auf.

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

`isSupportedProtocol()` stellt fest, ob die in dem aktiven Tab angezeigte URL eine ist, die mit einem Lesezeichen versehen werden kann. Um das Protokoll aus der URL des Tabs zu extrahieren, nutzt die Erweiterung das [HTMLAnchorElement](/de/docs/Web/API/HTMLAnchorElement), indem sie die URL des Tabs zu einem `<a>`-Element hinzufügt und dann das Protokoll mit der Eigenschaft `protocol` abruft.

```js
function isSupportedProtocol(urlString) {
  let supportedProtocols = ["https:", "http:", "file:"];
  let url = document.createElement("a");
  url.href = urlString;
  return supportedProtocols.includes(url.protocol);
}
```

`updateIcon()` setzt das Symbol und den Titel des Symbolleistenschalters, abhängig davon, ob die URL mit einem Lesezeichen versehen ist oder nicht.

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

Nachdem der Symbolleistenschalter initialisiert ist, beginnt die Erweiterung damit, auf einen Klick auf den Symbolleistenschalter zu lauschen, und ruft `toggleBookmark()` auf, wenn das passiert.

```js
browser.browserAction.onClicked.addListener(toggleBookmark);
```

`toggleBookmark()` verwendet das Ergebnis der Suche, die von `updateTabs()` durchgeführt wird und überprüft, ob die URL in einem Lesezeichen vorhanden ist, um festzustellen, ob das Lesezeichen für die aktuelle URL entfernt oder hinzugefügt werden soll.

```js
function toggleBookmark() {
  if (currentBookmark) {
    browser.bookmarks.remove(currentBookmark.id);
  } else {
    browser.bookmarks.create({ title: currentTab.title, url: currentTab.url });
  }
}
```

Um das Symbolleistensymbol zu aktualisieren, lauscht die Erweiterung auf das Erstellen oder Entfernen von Lesezeichen. Dieser Ansatz hat den Vorteil, dass sowohl die Lesezeichenaktualisierung, die durch die Erweiterung vorgenommen wird, als auch jede Aktualisierung, die vom Benutzer außerhalb der Erweiterung vorgenommen wird, erfasst werden.

```js
// listen for bookmarks being created
browser.bookmarks.onCreated.addListener(updateActiveTab);

// listen for bookmarks being removed
browser.bookmarks.onRemoved.addListener(updateActiveTab);
```

Schließlich lauscht die Erweiterung auf eine Änderung der URL des aktiven Tabs oder wenn der Benutzer zu einem anderen Tab oder Fenster wechselt. Diese Aktionen könnten die betrachtete URL ändern und somit den Status des Symbolleistensymbols der Erweiterung verändern.

```js
// listen to tab URL changes
browser.tabs.onUpdated.addListener(updateActiveTab);

// listen to tab switching
browser.tabs.onActivated.addListener(updateActiveTab);

// listen for window switching
browser.windows.onFocusChanged.addListener(updateActiveTab);
```

## Mehr erfahren

Wenn Sie mehr erfahren möchten, sehen Sie sich die [Bookmarks API reference](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks) an.
