---
title: Erweiterungsseiten
slug: Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{AddonSidebar}}

Sie können HTML-Seiten in Ihre Erweiterung einbinden, um Formulare, Hilfe oder andere Inhalte bereitzustellen, die Ihre Erweiterung benötigt.

![Beispiel einer einfachen gebündelten Seite, die als abgetrenntes Panel angezeigt wird.](bundled_page_as_panel_small.png)

Diese Seiten haben Zugriff auf die gleichen privilegierten JavaScript-APIs, die auch für die Hintergrundskripte Ihrer Erweiterung verfügbar sind. Sie befinden sich jedoch in ihrem eigenen Tab, mit ihrer eigenen JavaScript-Ereigniswarteschlange, ihren eigenen globalen Variablen usw.

Stellen Sie sich die Hintergrundseite als eine "versteckte Erweiterungsseite" vor.

## Festlegen von Erweiterungsseiten

Sie können HTML-Dateien - und zugehörige CSS- oder JavaScript-Dateien - in Ihre Erweiterung einbinden. Die Dateien können im Root-Verzeichnis oder innerhalb sinnvoller Unterverzeichnisse organisiert werden.

```plain
/my-extension
    /manifest.json
    /my-page.html
    /my-page.js
```

## Anzeigen von Erweiterungsseiten

Es gibt zwei Möglichkeiten, Erweiterungsseiten anzuzeigen: {{WebExtAPIRef("windows.create()")}} und {{WebExtAPIRef("tabs.create()")}}.

Mit `windows.create()` können Sie beispielsweise eine HTML-Seite in ein abgetrenntes Panel öffnen (ein Fenster ohne die normale Browser-Benutzeroberfläche wie Adressleiste, Lesezeichenleiste usw.), um eine dialogartige Benutzererfahrung zu schaffen:

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

Standardmäßig werden Seiten, die Sie auf diese Weise öffnen, im Verlauf des Benutzers gespeichert, genau wie normale Webseiten. Wenn Sie dieses Verhalten nicht wünschen, verwenden Sie {{WebExtAPIRef("history.deleteUrl()")}}, um den Eintrag im Browser zu entfernen:

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

Einzelheiten zur Gestaltung Ihrer Webseite, um dem Stil von Firefox zu entsprechen, finden Sie im [Acorn Design System](https://acorn.firefox.com/latest).

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält das [window-manipulator](https://github.com/mdn/webextensions-examples/tree/main/window-manipulator) Beispiel, das mehrere Optionen zur Fenstererstellung implementiert.
