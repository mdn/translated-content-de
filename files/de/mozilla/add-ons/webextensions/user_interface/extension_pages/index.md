---
title: Erweiterungsseiten
slug: Mozilla/Add-ons/WebExtensions/user_interface/Extension_pages
l10n:
  sourceCommit: acc6ec7d08ede0727a68cbc696e983c572940f62
---

{{AddonSidebar}}

Sie können HTML-Seiten in Ihre Erweiterung einbinden, um Formulare, Hilfen oder andere Inhalte bereitzustellen, die Ihre Erweiterung benötigt.

![Beispiel einer einfachen gebündelten Seite, die als separates Fenster angezeigt wird.](bundled_page_as_panel_small.png)

Diese Seiten haben Zugriff auf dieselben privilegierten JavaScript-APIs, die Ihren Hintergrundskripten der Erweiterung zur Verfügung stehen. Sie befinden sich jedoch in einem eigenen Tab mit ihrer eigenen JavaScript-Ereigniswarteschlange, ihren eigenen globalen Variablen usw.

Betrachten Sie die Hintergrundseite als eine "versteckte Erweiterungsseite".

## Spezifizieren von Erweiterungsseiten

Sie können HTML-Dateien, sowie zugehörige CSS- oder JavaScript-Dateien, in Ihre Erweiterung einbinden. Die Dateien können im Root-Verzeichnis enthalten sein oder in sinnvollen Unterverzeichnissen organisiert werden.

```plain
/my-extension
    /manifest.json
    /my-page.html
    /my-page.js
```

## Anzeigen von Erweiterungsseiten

Es gibt zwei Optionen zum Anzeigen von Erweiterungsseiten: {{WebExtAPIRef("windows.create()")}} und {{WebExtAPIRef("tabs.create()")}}.

Mit `windows.create()` können Sie beispielsweise eine HTML-Seite in einem separaten Fenster (ein Fenster ohne die normale Browser-Benutzeroberfläche wie Adressleiste, Lesezeichenleiste und Ähnliches) öffnen, um eine dialogähnliche Benutzererfahrung zu schaffen:

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

Beispielsweise können Sie, nachdem der Benutzer einen Button gedrückt hat, die aktuelle Fenster-ID an {{WebExtAPIRef("windows.remove()")}} übergeben:

```js
document.getElementById("close-me").addEventListener("click", () => {
  let winId = browser.windows.WINDOW_ID_CURRENT;
  let removing = browser.windows.remove(winId);
});
```

## Erweiterungsseiten und Verlauf

Standardmäßig werden Seiten, die Sie auf diese Weise öffnen, im Verlauf des Benutzers gespeichert, genau wie normale Webseiten. Wenn Sie dieses Verhalten nicht wünschen, verwenden Sie {{WebExtAPIRef("history.deleteUrl()")}}, um den Eintrag im Browserprotokoll zu entfernen:

```js
function onVisited(historyItem) {
  if (historyItem.url === browser.extension.getURL(myPage)) {
    browser.history.deleteUrl({ url: historyItem.url });
  }
}

browser.history.onVisited.addListener(onVisited);
```

Um die History-API zu verwenden, müssen Sie die "`history`" [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in Ihrer [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) Datei anfordern.

## Webseiten-Design

Für detaillierte Informationen, wie Sie das Design Ihrer Webseite an den Stil von Firefox anpassen können, siehe das [Acorn Design System](https://acorn.firefox.com/latest).

## Beispiele

Das Repository [webextensions-examples](https://github.com/mdn/webextensions-examples) auf GitHub enthält das [window-manipulator](https://github.com/mdn/webextensions-examples/tree/main/window-manipulator) Beispiel, das mehrere Optionen zur Fenstererstellung implementiert.
