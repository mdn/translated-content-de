---
title: Arbeiten mit der Bookmarks-API
slug: Mozilla/Add-ons/WebExtensions/Work_with_the_Bookmarks_API
l10n:
  sourceCommit: 1079b152415f26432481498d2d2b4e8b2f81e3e0
---

{{AddonSidebar}}

Lesezeichen ermöglichen es Benutzern, Listen von Webseiten zu sammeln und zu organisieren, sodass sie leicht zu ihren Favoriten zurückkehren können. Mit der Bookmarks-API können Ihre Erweiterungen Lesezeichen ähnlich verwalten wie die Benutzer.

## Berechtigungen

Um die Bookmarks-API zu nutzen, müssen Sie in der manifest.json-Datei Ihrer Erweiterung die Berechtigung `"bookmarks"` anfordern:

```json
"permissions": [
  "bookmarks"
],
```

## Funktionen

Die Bookmarks-API ermöglicht es Ihrer Erweiterung, die Dinge mit Lesezeichen zu tun, die Benutzer auch tun können, und enthält Funktionen für:

- Grundlegende Manipulation von Lesezeichen-Elementen, einschließlich:

  - Hinzufügen ({{WebExtAPIRef("bookmarks.create")}}).
  - Abrufen ({{WebExtAPIRef("bookmarks.get")}}).
  - Aktualisieren ({{WebExtAPIRef("bookmarks.update")}}).
  - Verschieben ({{WebExtAPIRef("bookmarks.move")}}).
  - Löschen ({{WebExtAPIRef("bookmarks.remove")}}).
  - Suchen ({{WebExtAPIRef("bookmarks.search")}}).

- Eine Liste der kürzlich hinzugefügten Lesezeichen abrufen ({{WebExtAPIRef("bookmarks.getRecent")}}).
- Manipulation des Lesezeichen-Verzeichnisbaums für:

  - Bauminformationen abrufen ({{WebExtAPIRef("bookmarks.getTree")}}, {{WebExtAPIRef("bookmarks.getChildren")}}, und {{WebExtAPIRef("bookmarks.getSubTree")}}).
  - Zweige hinzufügen ({{WebExtAPIRef("bookmarks.create")}}).
  - Knoten löschen ({{WebExtAPIRef("bookmarks.removeTree")}}).
  - Knoten verschieben ({{WebExtAPIRef("bookmarks.move")}}).

- Ereignisse in Bezug auf Lesezeichen (oder Lesezeichen-Baumordner) überwachen, die:

  - Hinzufügen ({{WebExtAPIRef("bookmarks.onCreated")}}).
  - Ändern ({{WebExtAPIRef("bookmarks.onChanged")}}).
  - Verschieben ({{WebExtAPIRef("bookmarks.onMoved")}}).
  - Umordnen ({{WebExtAPIRef("bookmarks.onChildrenReordered")}}).
  - Entfernen ({{WebExtAPIRef("bookmarks.onRemoved")}}).

- Überwachen von Lesezeichen-Importen, die verwendet werden können, um andere Lesezeichenverarbeitungen zu unterbrechen, während ein Import läuft:

  - Import gestartet ({{WebExtAPIRef("bookmarks.onImportBegan")}}).
  - Import abgeschlossen ({{WebExtAPIRef("bookmarks.onImportEnded")}}).

## Beispiel-Durchgang

Um das Arbeiten mit der Bookmarks-API zu verstehen, werfen Sie einen Blick auf das [bookmark-it](https://github.com/mdn/webextensions-examples/tree/main/bookmark-it) Beispiel. Dieses Beispiel fügt ein Symbol in der Symbolleiste hinzu ({{WebExtAPIRef("browserAction")}}), das beim Klicken die aktuelle Seite zu den Lesezeichen hinzu- oder entfernt. Wenn die Seite auf andere Weise zu den Lesezeichen hinzugefügt oder daraus entfernt wird, wird das Symbol aktualisiert, um den Status der Seite anzuzeigen.

Dieses Video zeigt die Erweiterung in Aktion:

{{EmbedYouTube("hCDN0FotiFw")}}

### manifest.json

Die [manifest.json](https://github.com/mdn/webextensions-examples/blob/main/bookmark-it/manifest.json) beschreibt die Erweiterung:

```json
{
  "manifest_version": 2,
  "name": "Bookmark it!",
  "version": "1.1",
  "description": "Ein einfacher Lesezeichen-Button",
  "homepage_url": "https://github.com/mdn/webextensions-examples/tree/main/bookmark-it",
```

Definiert die Symbole, die zur Darstellung der Erweiterung verwendet werden, beispielsweise im Add-on-Manager.

```json
  "icons": {
    "48": "icons/bookmark-it.png",
    "96": "icons/bookmark-it@2x.png"
  },
```

Fordert Berechtigungen an. `"bookmarks"` wird angefordert, um die Verwendung der Bookmarks-API zu ermöglichen. `"tabs"` wird angefordert, damit die URL und der Titel des aktiven Tabs gelesen und verwendet werden können, um das Lesezeichen der Seite zu erstellen oder zu finden. Die Notwendigkeit der Tabs-API zur Zugriff auf diese Details bedeutet, dass Sie die Bookmarks-API wahrscheinlich nicht ohne die Tabs-API verwenden.

```json
  "permissions": [
    "bookmarks",
    "tabs"
  ],
```

Richtet die grundlegenden Details des Symbols der Symbolleiste ein. Die meisten Funktionen des Buttons werden im Code eingerichtet, nachdem der Lesezeichenstatus der Seite bekannt ist.

```json
  "browser_action": {
    "default_icon": "icons/star-empty-38.png",
    "default_title": "Bookmark it!"
  },
```

Definiert das Hintergrundskript, das das Lesezeichen der Seite hinzufügt und entfernt und die Eigenschaften des Symbolleiste-Buttons festlegt.

```json
  "background": {
    "scripts": ["background.js"]
  }

}
```

### background.js

Wie jedes Hintergrundskript wird [background.js](https://github.com/mdn/webextensions-examples/blob/main/bookmark-it/background.js) sofort ausgeführt, wenn die Erweiterung gestartet wird. Anfänglich ruft das Skript `updateActiveTab()` auf, das beginnt, indem es das `Tabs`-Objekt für den aktuellen Tab mit {{WebExtAPIRef("tabs.query")}} abruft und das Objekt mit diesem Code an `updateTab()` übergibt:

```js
let gettingActiveTab = browser.tabs.query({
  active: true,
  currentWindow: true,
});
gettingActiveTab.then(updateTab);
```

`updateTab()` übergibt zunächst die URL des aktiven Tabs an `isSupportedProtocol()`:

```js
  function updateTab(tabs) {
    if (tabs[0]) {
      currentTab = tabs[0];
      if (isSupportedProtocol(currentTab.url)) {
```

`isSupportedProtocol()` bestimmt, ob die URL im aktiven Tab eine ist, die mit einem Lesezeichen versehen werden kann. Um das Protokoll aus der URL des Tabs zu extrahieren, nutzt die Erweiterung das [HTMLAnchorElement](/de/docs/Web/API/HTMLAnchorElement), indem sie die URL des Tabs zu einem `<a>`-Element hinzufügt und dann das Protokoll mit der `protocol`-Eigenschaft erhält.

```js
function isSupportedProtocol(urlString) {
  let supportedProtocols = ["https:", "http:", "file:"];
  let url = document.createElement("a");
  url.href = urlString;
  return supportedProtocols.includes(url.protocol);
}
```

Wenn das Protokoll eines ist, das von Lesezeichen unterstützt wird, bestimmt die Erweiterung, ob die URL des Tabs bereits ein Lesezeichen ist und, falls ja, ruft `updateIcon()` auf:

```js
      let searching = browser.bookmarks.search({url: currentTab.url});
      searching.then((bookmarks) => {
        currentBookmark = bookmarks[0];
        updateIcon();
```

`updateIcon()` setzt das Symbol des Symbols der Symbolleiste und den Titel, je nachdem, ob die URL ein Lesezeichen ist oder nicht.

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
    // Screenreader können den Titel sehen
    title: currentBookmark ? "Unbookmark it!" : "Bookmark it!",
    tabId: currentTab.id,
  });
}
```

Mit dem Symbol der Symbolleiste initialisiert, beginnt die Erweiterung, auf einen Klick auf das Symbolleiste-Symbol zu hören, und ruft `toggleBookmark()` auf, wenn das passiert.

```js
browser.browserAction.onClicked.addListener(toggleBookmark);
```

`toggleBookmark()` verwendet das Ergebnis der von `updateTabs()` durchgeführten Suche, die nach dem Vorhandensein der URL in einem Lesezeichen sucht, um festzustellen, ob ein Lesezeichen für die aktuelle URL entfernt oder hinzugefügt werden soll.

```js
function toggleBookmark() {
  if (currentBookmark) {
    browser.bookmarks.remove(currentBookmark.id);
  } else {
    browser.bookmarks.create({ title: currentTab.title, url: currentTab.url });
  }
}
```

Um das Symbol der Symbolleiste zu aktualisieren, lauscht die Erweiterung auf Erstellung oder Entfernung von Lesezeichen. Diese Vorgehensweise hat den Vorteil, sowohl die Lesezeichenaktualisierung, die von der Erweiterung vorgenommen wird, als auch jede außerhalb der Erweiterung vom Benutzer vorgenommene Aktualisierung zu erfassen.

```js
// auf die Erstellung von Lesezeichen lauschen
browser.bookmarks.onCreated.addListener(updateActiveTab);

// auf die Entfernung von Lesezeichen lauschen
browser.bookmarks.onRemoved.addListener(updateActiveTab);
```

Schließlich hört die Erweiterung auf eine Änderung der URL des aktiven Tabs oder das Wechseln des Benutzers zu einem anderen Tab oder Fenster. Diese Aktionen könnten die angezeigte URL und damit den Status des Symbols der Symbolleiste der Erweiterung ändern.

```js
// auf URL-Änderungen der Tabs lauschen
browser.tabs.onUpdated.addListener(updateActiveTab);

// auf Tab-Wechsel lauschen
browser.tabs.onActivated.addListener(updateActiveTab);

// auf Fensterwechsel lauschen
browser.windows.onFocusChanged.addListener(updateActiveTab);
```

## Mehr erfahren

Wenn Sie mehr erfahren möchten, schauen Sie sich das [Bookmarks-API-Referenz](/de/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks) an.
