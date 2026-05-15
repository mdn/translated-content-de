---
title: Erweiterungsseiten
slug: Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages
l10n:
  sourceCommit: 38199423810927262c9cb4dec7ea7de4cb0c5e0f
---

Sie können HTML-Seiten in Ihre Erweiterung integrieren, um Formulare, Hilfsinhalte oder andere Inhalte bereitzustellen, die Ihre Erweiterung benötigt.

![Beispiel einer einfachen gebündelten Seite, die als abgetrenntes Panel angezeigt wird.](bundled_page_as_panel_small.png)

Diese Seiten haben ebenfalls Zugriff auf die gleichen privilegierten JavaScript-APIs, die für die Hintergrundskripte Ihrer Erweiterung verfügbar sind. Sie befinden sich jedoch in ihrem eigenen Tab, mit ihrer eigenen JavaScript-Ereigniswarteschlange, ihren eigenen globalen Variablen usw.

Betrachten Sie die Hintergrundseite als eine "versteckte Erweiterungsseite".

## Festlegen von Erweiterungsseiten

Sie können HTML-Dateien – und die zugehörigen CSS- oder JavaScript-Dateien – in Ihre Erweiterung einbinden. Die Dateien können im Root-Verzeichnis enthalten sein oder in sinnvollen Unterordnern organisiert werden.

```plain
/my-extension
    /manifest.json
    /my-page.html
    /my-page.js
```

## Anzeigen von Erweiterungsseiten

Es gibt zwei Optionen zum Anzeigen von Erweiterungsseiten: {{WebExtAPIRef("windows.create()")}} und {{WebExtAPIRef("tabs.create()")}}.

Mit `windows.create()`, können Sie zum Beispiel eine HTML-Seite in einem abgetrennten Fenster öffnen (ein Fenster ohne die normale Browser-Benutzeroberfläche wie Adressleiste, Lesezeichenleiste usw.), um eine dialogähnliche Benutzererfahrung zu schaffen:

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

Zum Beispiel, nachdem der Benutzer auf eine Schaltfläche geklickt hat, können Sie die ID des aktuellen Fensters an {{WebExtAPIRef("windows.remove()")}} übergeben:

```js
document.getElementById("close-me").addEventListener("click", () => {
  let winId = browser.windows.WINDOW_ID_CURRENT;
  let removing = browser.windows.remove(winId);
});
```

## Erweiterungsseiten und Verlauf

Standardmäßig werden Seiten, die Sie auf diese Weise öffnen, im Verlauf des Benutzers gespeichert, genau wie normale Webseiten. Wenn Sie dieses Verhalten nicht wünschen, verwenden Sie {{WebExtAPIRef("history.deleteUrl()")}}, um den Eintrag im Browserverlauf zu entfernen:

```js
function onVisited(historyItem) {
  if (historyItem.url === browser.runtime.getURL(myPage)) {
    browser.history.deleteUrl({ url: historyItem.url });
  }
}

browser.history.onVisited.addListener(onVisited);
```

Um die History-API zu verwenden, müssen Sie die `"history"`- [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in Ihrer [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json)-Datei anfordern.

## Webseitendesign

Für Details, wie Sie das Design Ihrer Webseite an den Stil von Firefox anpassen können, siehe das [Acorn Design System](https://acorn.firefox.com/latest).

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält das [window-manipulator](https://github.com/mdn/webextensions-examples/tree/main/window-manipulator) Beispiel, das mehrere Optionen zur Erstellung von Fenstern implementiert.
