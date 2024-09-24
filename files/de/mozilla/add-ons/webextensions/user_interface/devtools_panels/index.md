---
title: Entwicklerwerkzeuge-Panels
slug: Mozilla/Add-ons/WebExtensions/user_interface/devtools_panels
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{AddonSidebar}}

> [!NOTE]
> Dieses Feature ist seit Firefox 54 verfügbar.

Wenn eine Erweiterung Werkzeuge bereitstellt, die für Entwickler nützlich sind, ist es möglich, eine Benutzeroberfläche für sie zu den Entwicklerwerkzeugen des Browsers als neues Panel hinzuzufügen.

![Ein einfaches Beispiel zeigt die Hinzufügung von "My panel" zu den Registerkarten des Entwicklerwerkzeugs.](developer_panel_tab.png)

## Ein Entwicklerwerkzeuge-Panel angeben

Ein Entwicklerwerkzeuge-Panel wird mit der [`devtools.panels`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels) API hinzugefügt, die wiederum von einer speziellen Devtools-Seite ausgeführt werden muss.

Fügen Sie die Devtools-Seite hinzu, indem Sie den Schlüssel [`devtools_page`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) in der [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) der Erweiterung angeben und die Position der HTML-Datei der Seite in der Erweiterung bereitstellen:

```json
"devtools_page": "devtools-page.html"
```

Von der Devtools-Seite aus führen Sie ein Skript aus, das das Developer-Panel hinzufügt:

```html
<body>
  <script src="devtools.js"></script>
</body>
```

Erstellen Sie im Skript das Entwicklerwerkzeuge-Panel, indem Sie den Titel, das Symbol und die HTML-Datei angeben, die den Inhalt des Panels bereitstellt:

```js
function handleShown() {
  console.log("panel is being shown");
}

function handleHidden() {
  console.log("panel is being hidden");
}

browser.devtools.panels
  .create(
    "My Panel", // title
    "icons/star.png", // icon
    "devtools/panel/panel.html", // content
  )
  .then((newPanel) => {
    newPanel.onShown.addListener(handleShown);
    newPanel.onHidden.addListener(handleHidden);
  });
```

Die Erweiterung kann jetzt Code im inspizierten Fenster ausführen, indem entweder [`devtools.inspectedWindow.eval()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/eval) verwendet oder ein Inhalts-Skript über das Hintergrundskript durch Übermitteln einer Nachricht injiziert wird. Weitere Details hierzu finden Sie unter [Erweiterung der Entwicklerwerkzeuge.](/de/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools)

## Design des Entwickler-Panels

Details darüber, wie Sie die Webseite Ihres Entwickler-Panels gestalten können, um dem Stil von Firefox zu entsprechen, finden Sie in der [Acorn Design System](https://acorn.firefox.com/latest) Dokumentation.

## Symbole

Details, wie Sie Symbole erstellen können, die mit Ihrem Entwicklerwerkzeuge-Panel verwendet werden, finden Sie unter [Iconographie](https://acorn.firefox.com/latest/styles/iconography-q7JqGl5H) in der [Acorn Design System](https://acorn.firefox.com/latest) Dokumentation.

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält das Beispiel [devtools-panels](https://github.com/mdn/webextensions-examples/tree/main/devtools-panels), das ein Entwicklerwerkzeuge-Panel implementiert.
