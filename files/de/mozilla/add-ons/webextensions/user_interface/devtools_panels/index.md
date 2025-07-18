---
title: devtools panels
slug: Mozilla/Add-ons/WebExtensions/user_interface/devtools_panels
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

> [!NOTE]
> Dieses Feature ist seit Firefox 54 verfügbar.

Wenn eine Erweiterung Werkzeuge bereitstellt, die für Entwickler nützlich sind, ist es möglich, eine Benutzeroberfläche dafür zu den Entwicklertools des Browsers als neues Panel hinzuzufügen.

![Ein einfaches Beispiel, das die zusätzliche "Mein Panel" zu den Entwicklertools-Tabs zeigt.](developer_panel_tab.png)

## Ein Entwickler-Tools-Panel spezifizieren

Ein Entwickler-Tools-Panel wird mit der [`devtools.panels`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels) API hinzugefügt, die wiederum von einer speziellen devtools-Seite aus ausgeführt werden muss.

Fügen Sie die devtools-Seite hinzu, indem Sie den Schlüssel [`devtools_page`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) in der [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) der Erweiterung aufnehmen und den Speicherort der HTML-Datei der Seite in der Erweiterung angeben:

```json
"devtools_page": "devtools-page.html"
```

Von der devtools-Seite aus rufen Sie ein Skript auf, das das devtools-Panel hinzufügt:

```html
<body>
  <script src="devtools.js"></script>
</body>
```

In dem Skript erstellen Sie das devtools-Panel, indem Sie den Titel des Panels, das Symbol und die HTML-Datei angeben, die den Inhalt des Panels bereitstellt:

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

Die Erweiterung kann nun Code im inspizierten Fenster mit [`devtools.inspectedWindow.eval()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/eval) ausführen oder ein Inhaltsskript über das Hintergrundskript durch das Senden einer Nachricht injizieren. Weitere Details hierzu finden Sie in [Erweiterung der Entwicklertools.](/de/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools)

## Design des Entwickler-Panels

Um Informationen dazu zu erhalten, wie Sie die Webseite Ihres Entwickler-Panels im Stil von Firefox gestalten können, sehen Sie in der [Acorn Design System](https://acorn.firefox.com/latest) Dokumentation nach.

## Symbole

Um Informationen dazu zu erhalten, wie Sie Symbole für Ihr Entwickler-Tools-Panel erstellen können, lesen Sie [Ikonographie](https://acorn.firefox.com/latest/styles/iconography/overview-QEDMXQqj) im [Acorn Design System](https://acorn.firefox.com/latest) Dokumentation.

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält das [devtools-panels](https://github.com/mdn/webextensions-examples/tree/main/devtools-panels) Beispiel, welches ein devtools-Panel implementiert.
