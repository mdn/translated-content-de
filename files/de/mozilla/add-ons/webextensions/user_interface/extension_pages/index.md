---
title: Erweiterungsseiten
slug: Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{AddonSidebar}}

Sie können HTML-Seiten in Ihre Erweiterung einfügen, um Formulare, Hilfe oder andere Inhalte bereitzustellen, die Ihre Erweiterung benötigt.

![Beispiel einer einfachen gebündelten Seite, die als abgetrenntes Panel angezeigt wird.](bundled_page_as_panel_small.png)

Diese Seiten haben auch Zugriff auf dieselben privilegierten JavaScript-APIs, die den Hintergrundskripten Ihrer Erweiterung zur Verfügung stehen. Sie befinden sich jedoch in einem eigenen Tab, mit eigener JavaScript-Ereigniswarteschlange, eigenen globalen Variablen usw.

Betrachten Sie die Hintergrundseite als eine "versteckte Erweiterungsseite".

## Spezifizieren von Erweiterungsseiten

Sie können HTML-Dateien—und zugehörige CSS- oder JavaScript-Dateien—in Ihre Erweiterung einfügen. Die Dateien können im Root-Verzeichnis enthalten oder in sinnvollen Unterordnern organisiert werden.

```plain
/my-extension
    /manifest.json
    /my-page.html
    /my-page.js
```

## Anzeigen von Erweiterungsseiten

Es gibt zwei Optionen zum Anzeigen von Erweiterungsseiten: {{WebExtAPIRef("windows.create()")}} und {{WebExtAPIRef("tabs.create()")}}.

Mit `windows.create()` können Sie beispielsweise eine HTML-Seite in einem abgetrennten Panel (einem Fenster ohne die normale Browser-UI wie Adressleiste, Lesezeichenleiste usw.) öffnen, um ein dialogähnliches Benutzererlebnis zu schaffen:

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

Zum Beispiel, nachdem der Benutzer auf einen Button geklickt hat, können Sie die ID des aktuellen Fensters an {{WebExtAPIRef("windows.remove()")}} übergeben:

```js
document.getElementById("closeme").addEventListener("click", () => {
  let winId = browser.windows.WINDOW_ID_CURRENT;
  let removing = browser.windows.remove(winId);
});
```

## Erweiterungsseiten und Verlauf

Standardmäßig werden Seiten, die Sie auf diese Weise öffnen, wie normale Webseiten im Verlauf des Benutzers gespeichert. Wenn Sie dieses Verhalten nicht wünschen, verwenden Sie {{WebExtAPIRef("history.deleteUrl()")}}, um den Eintrag im Browserverlauf zu entfernen:

```js
function onVisited(historyItem) {
  if (historyItem.url === browser.extension.getURL(myPage)) {
    browser.history.deleteUrl({ url: historyItem.url });
  }
}

browser.history.onVisited.addListener(onVisited);
```

Um die Verlauf-API zu nutzen, müssen Sie die "`history`"-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in Ihrer [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json)-Datei anfordern.

## Webseitendesign

Einzelheiten dazu, wie Sie das Design Ihrer Webseite an den Stil von Firefox anpassen können, finden Sie im [Acorn Design System](https://acorn.firefox.com/latest).

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples)-Repository auf GitHub enthält das Beispiel [window-manipulator](https://github.com/mdn/webextensions-examples/tree/main/window-manipulator), das mehrere Optionen zur Fenstergenerierung implementiert.
