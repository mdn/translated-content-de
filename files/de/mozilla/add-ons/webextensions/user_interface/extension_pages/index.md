---
title: Erweiterungsseiten
slug: Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Sie können HTML-Seiten in Ihre Erweiterung einbinden, um Formulare, Hilfe oder beliebige andere Inhalte bereitzustellen, die Ihre Erweiterung benötigt.

![Beispiel für eine einfache gebündelte Seite, die als abgetrenntes Fenster angezeigt wird.](bundled_page_as_panel_small.png)

Diese Seiten haben ebenfalls Zugriff auf die gleichen privilegierten JavaScript-APIs, die Ihren Hintergrundskripten der Erweiterung zur Verfügung stehen. Sie befinden sich jedoch in ihren eigenen Tabs mit ihrer eigenen JavaScript-Ereigniswarteschlange, ihren eigenen globalen Variablen, etc.

Betrachten Sie die Hintergrundseite als eine "versteckte Erweiterungsseite".

## Festlegen von Erweiterungsseiten

Sie können HTML-Dateien und zugehörige CSS- oder JavaScript-Dateien in Ihre Erweiterung einbinden. Die Dateien können im Root-Verzeichnis enthalten oder in sinnvollen Unterordnern organisiert werden.

```plain
/my-extension
    /manifest.json
    /my-page.html
    /my-page.js
```

## Anzeigen von Erweiterungsseiten

Es gibt zwei Optionen zum Anzeigen von Erweiterungsseiten: {{WebExtAPIRef("windows.create()")}} und {{WebExtAPIRef("tabs.create()")}}.

Mit `windows.create()` können Sie beispielsweise eine HTML-Seite in einem abgetrennten Fenster öffnen (einem Fenster ohne die normale Browser-Oberfläche mit Adressleiste, Lesezeichenleiste und ähnlichem), um eine dialogähnliche Benutzererfahrung zu schaffen:

```js
let createData = {
  type: "detached_panel",
  url: "my-page.html",
  width: 250,
  height: 100,
};
let creating = browser.windows.create(createData);
```

Wenn das Fenster nicht mehr benötigt wird, kann es programmgesteuert geschlossen werden.

Beispielsweise können Sie, nachdem der Benutzer auf einen Button geklickt hat, die aktuelle Fenster-ID an {{WebExtAPIRef("windows.remove()")}} übergeben:

```js
document.getElementById("close-me").addEventListener("click", () => {
  let winId = browser.windows.WINDOW_ID_CURRENT;
  let removing = browser.windows.remove(winId);
});
```

## Erweiterungsseiten und Verlauf

Standardmäßig werden die auf diese Weise geöffneten Seiten im Verlauf des Benutzers gespeichert, genau wie normale Webseiten. Wenn Sie dieses Verhalten nicht wünschen, verwenden Sie {{WebExtAPIRef("history.deleteUrl()")}}, um den Eintrag des Browsers zu entfernen:

```js
function onVisited(historyItem) {
  if (historyItem.url === browser.extension.getURL(myPage)) {
    browser.history.deleteUrl({ url: historyItem.url });
  }
}

browser.history.onVisited.addListener(onVisited);
```

Um die Verlauf-API zu nutzen, müssen Sie die Berechtigung `"history"` in Ihrer [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei anfordern.

## Webseitendesign

Details dazu, wie Sie das Design Ihrer Webseite an den Stil von Firefox anpassen können, finden Sie im [Acorn Design System](https://acorn.firefox.com/latest).

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält das [window-manipulator](https://github.com/mdn/webextensions-examples/tree/main/window-manipulator) Beispiel, das mehrere der Optionen zur Erstellung von Fenstern implementiert.
