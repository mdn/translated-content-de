---
title: devtools panels
slug: Mozilla/Add-ons/WebExtensions/user_interface/devtools_panels
l10n:
  sourceCommit: 5d6f5187d1c657edec7e735d3cc5ad36907e2030
---

> [!NOTE]
> Diese Funktion ist seit Firefox 54 verfügbar.

Wenn eine Erweiterung Werkzeuge bereitstellt, die für Entwickler nützlich sind, ist es möglich, eine Benutzeroberfläche für diese Werkzeuge als neues Panel in die Entwicklerwerkzeuge des Browsers einzufügen.

![Einfaches Beispiel, das die Hinzufügung von "My panel" zu den Entwicklerwerkzeuge-Reitern zeigt.](developer_panel_tab.png)

## Festlegen eines Entwicklerwerkzeuge-Panels

Ein Entwicklerwerkzeuge-Panel wird mit der [`devtools.panels`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels) API hinzugefügt, die wiederum von einer speziellen Devtools-Seite aus ausgeführt werden muss.

Fügen Sie die Devtools-Seite hinzu, indem Sie den Schlüssel [`devtools_page`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) in die [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) der Erweiterung einfügen und den Speicherort der HTML-Datei der Seite in der Erweiterung angeben:

```json
"devtools_page": "devtools-page.html"
```

Von der Devtools-Seite aus rufen Sie ein Skript auf, das das Devtools-Panel hinzufügen wird:

```html
<body>
  <script src="devtools.js"></script>
</body>
```

Erstellen Sie im Skript das Devtools-Panel, indem Sie den Titel, das Symbol und die HTML-Datei angeben, die den Inhalt des Panels bereitstellt:

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

Die Erweiterung kann nun Code im inspizierten Fenster mit [`devtools.inspectedWindow.eval()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/eval) ausführen oder ein Inhalts-Skript über das Hintergrundskript durch Übermittlung einer Nachricht injizieren. Weitere Details dazu finden Sie unter [Erweiterung der Entwicklerwerkzeuge.](/de/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools)

## Design des Entwickler-Panels

Einzelheiten zum Gestalten Ihrer Entwicklerpanel-Webseite im Stil von Firefox finden Sie in der [Acorn Design System](https://acorn.firefox.com/latest)-Dokumentation.

## Symbole

Einzelheiten zur Erstellung von Symbolen für die Verwendung mit Ihrem Entwicklerwerkzeuge-Panel finden Sie unter [Iconography](https://acorn.firefox.com/latest/foundations/styles/iconography-QEDMXQqj) in der [Acorn Design System](https://acorn.firefox.com/latest)-Dokumentation.

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält das [devtools-panels](https://github.com/mdn/webextensions-examples/tree/main/devtools-panels) Beispiel, das ein Devtools-Panel implementiert.
