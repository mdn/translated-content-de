---
title: Erweiterungsseiten
slug: Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages
l10n:
  sourceCommit: e13b6ffe7c9cb05c6a89fcb3c8fcbc987eb05211
---

{{AddonSidebar}}

Sie können HTML-Seiten in Ihre Erweiterung einfügen, um Formulare, Hilfe oder jeglichen anderen Inhalt bereitzustellen, den Ihre Erweiterung benötigt.

![Beispiel für eine einfache gebündelte Seite, die als abgetrenntes Fenster angezeigt wird.](bundled_page_as_panel_small.png)

Diese Seiten haben auch Zugriff auf dieselben privilegierten JavaScript-APIs, die den Hintergrundskripten Ihrer Erweiterung zur Verfügung stehen. Allerdings befinden sie sich in einem eigenen Tab mit eigener JavaScript-Ereigniswarteschlange, eigenen globalen Variablen usw.

Betrachten Sie die Hintergrundseite als eine "versteckte Erweiterungsseite".

## Spezifizieren von Erweiterungsseiten

Sie können HTML-Dateien und zugehörige CSS- oder JavaScript-Dateien in Ihre Erweiterung aufnehmen. Die Dateien können im Root-Verzeichnis eingefügt oder innerhalb sinnvoller Unterordner organisiert werden.

```plain
/my-extension
    /manifest.json
    /my-page.html
    /my-page.js
```

## Anzeigen von Erweiterungsseiten

Es gibt zwei Optionen zum Anzeigen von Erweiterungsseiten: {{WebExtAPIRef("windows.create()")}} und {{WebExtAPIRef("tabs.create()")}}.

Mit `windows.create()` können Sie beispielsweise eine HTML-Seite in einem abgetrennten Fenster öffnen (ein Fenster ohne die normale Browser-UI wie Adressleiste, Lesezeichenleiste usw.), um ein dialogartiges Benutzererlebnis zu schaffen:

```js
let createData = {
  type: "detached_panel",
  url: "my-page.html",
  width: 250,
  height: 100,
};
let creating = browser.windows.create(createData);
```

Wenn das Fenster nicht mehr benötigt wird, kann es programmatisch geschlossen werden.

Nach dem Klicken einer Schaltfläche durch den Benutzer können Sie beispielsweise die ID des aktuellen Fensters an {{WebExtAPIRef("windows.remove()")}} übergeben:

```js
document.getElementById("close-me").addEventListener("click", () => {
  let winId = browser.windows.WINDOW_ID_CURRENT;
  let removing = browser.windows.remove(winId);
});
```

## Erweiterungsseiten und Verlauf

Standardmäßig werden die auf diese Weise geöffneten Seiten im Verlauf des Benutzers gespeichert, genau wie normale Webseiten. Wenn Sie dieses Verhalten nicht wünschen, verwenden Sie {{WebExtAPIRef("history.deleteUrl()")}}, um den Eintrag im Browser zu entfernen:

```js
function onVisited(historyItem) {
  if (historyItem.url === browser.extension.getURL(myPage)) {
    browser.history.deleteUrl({ url: historyItem.url });
  }
}

browser.history.onVisited.addListener(onVisited);
```

Um die Verlauf-API zu verwenden, müssen Sie die `"history"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in Ihrer [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json)-Datei anfordern.

## Webseitengestaltung

Für Details zur Gestaltung Ihrer Webseite im Stil von Firefox siehe das [Acorn Design System](https://acorn.firefox.com/latest).

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält das [window-manipulator](https://github.com/mdn/webextensions-examples/tree/main/window-manipulator) Beispiel, das mehrere Optionen zum Erstellen von Fenstern implementiert.
