---
title: Extension pages
slug: Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{AddonSidebar}}

Sie können HTML-Seiten in Ihrer Erweiterung einbinden, um Formulare, Hilfe oder andere Inhalte bereitzustellen, die Ihre Erweiterung benötigt.

![Beispiel einer einfachen gebündelten Seite, die als separates Panel angezeigt wird.](bundled_page_as_panel_small.png)

Diese Seiten haben auch Zugang zu denselben privilegierten JavaScript-APIs, die den Hintergrundskripten Ihrer Erweiterung zur Verfügung stehen. Sie befinden sich jedoch in ihrem eigenen Tab, mit ihrer eigenen JavaScript-Ereigniswarteschlange, ihren eigenen globalen Objekten usw.

Betrachten Sie die Hintergrundseite als eine "versteckte Erweiterungsseite".

## Spezifizieren von Erweiterungsseiten

Sie können HTML-Dateien und zugehörige CSS- oder JavaScript-Dateien in Ihre Erweiterung einbinden. Die Dateien können im Root enthalten oder in sinnvollen Unterordnern organisiert werden.

```plain
/my-extension
    /manifest.json
    /my-page.html
    /my-page.js
```

## Anzeigen von Erweiterungsseiten

Es gibt zwei Optionen zum Anzeigen von Erweiterungsseiten: {{WebExtAPIRef("windows.create()")}} und {{WebExtAPIRef("tabs.create()")}}.

Mit `windows.create()` können Sie beispielsweise eine HTML-Seite in ein separates Panel öffnen (ein Fenster ohne die normale Browser-Benutzeroberfläche wie Adressleiste, Lesezeichenleiste usw.), um eine dialogähnliche Benutzererfahrung zu schaffen:

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

Beispielsweise können Sie, nachdem der Benutzer einen Button geklickt hat, die aktuelle Fenster-ID an {{WebExtAPIRef("windows.remove()")}} übergeben:

```js
document.getElementById("closeme").addEventListener("click", () => {
  let winId = browser.windows.WINDOW_ID_CURRENT;
  let removing = browser.windows.remove(winId);
});
```

## Erweiterungsseiten und Verlauf

Standardmäßig werden Seiten, die Sie auf diese Weise öffnen, im Verlauf des Benutzers gespeichert, genau wie normale Webseiten. Wenn Sie dieses Verhalten nicht wünschen, verwenden Sie {{WebExtAPIRef("history.deleteUrl()")}}, um den Verlaufseintrag im Browser zu entfernen:

```js
function onVisited(historyItem) {
  if (historyItem.url === browser.extension.getURL(myPage)) {
    browser.history.deleteUrl({ url: historyItem.url });
  }
}

browser.history.onVisited.addListener(onVisited);
```

Um die History-API zu verwenden, müssen Sie die "`history`" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in Ihrer [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json)-Datei anfordern.

## Webseitengestaltung

Für Details zur Gestaltung Ihrer Webseite im Stil von Firefox siehe das [Acorn Design System](https://acorn.firefox.com/latest).

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält das [window-manipulator](https://github.com/mdn/webextensions-examples/tree/main/window-manipulator) Beispiel, das mehrere Optionen zum Erstellen von Fenstern implementiert.
