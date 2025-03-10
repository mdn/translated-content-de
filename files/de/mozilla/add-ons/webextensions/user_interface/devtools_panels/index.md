---
title: devtools panels
slug: Mozilla/Add-ons/WebExtensions/user_interface/devtools_panels
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

{{AddonSidebar}}

> [!NOTE]
> Dieses Feature ist seit Firefox 54 verfügbar.

Wenn eine Erweiterung Werkzeuge bereitstellt, die für Entwickler nützlich sind, ist es möglich, eine Benutzeroberfläche als neues Panel zu den Entwicklerwerkzeugen des Browsers hinzuzufügen.

![Einfaches Beispiel, das die Hinzufügung von "My panel" zu den Registerkarten der Entwicklerwerkzeuge zeigt.](developer_panel_tab.png)

## Spezifikation eines Entwicklerwerkzeug-Panels

Ein Entwicklerwerkzeug-Panel wird mithilfe der [`devtools.panels`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels) API hinzugefügt, die wiederum von einer speziellen devtools-Seite aus ausgeführt werden muss.

Fügen Sie die devtools-Seite hinzu, indem Sie den [`devtools_page`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) Schlüssel in der [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) der Erweiterung aufnehmen und den Speicherort der HTML-Datei der Seite in der Erweiterung angeben:

```json
"devtools_page": "devtools-page.html"
```

Von der devtools-Seite aus rufen Sie ein Skript auf, das das devtools-Panel hinzufügt:

```html
<body>
  <script src="devtools.js"></script>
</body>
```

Erstellen Sie im Skript das devtools-Panel, indem Sie den Titel des Panels, sein Symbol und die HTML-Datei, die den Inhalt des Panels bereitstellt, angeben:

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

Die Erweiterung kann nun Code im inspizierten Fenster mithilfe von [`devtools.inspectedWindow.eval()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/eval) ausführen oder ein Inhalts-Skript über das Hintergrund-Skript einfügen, indem eine Nachricht übermittelt wird. Weitere Details hierzu finden Sie unter [Erweitern der Entwicklerwerkzeuge.](/de/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools)

## Design des Entwicklerpanels

Für Details, wie Sie die Webseite Ihres Entwicklerpanels gestalten können, um dem Stil von Firefox zu entsprechen, sehen Sie sich die [Acorn Design System](https://acorn.firefox.com/latest) Dokumentation an.

## Symbole

Für Details zur Erstellung von Symbolen, die Sie mit Ihrem Entwicklerwerkzeug-Panel verwenden können, siehe [Iconography](https://acorn.firefox.com/latest/styles/iconography/overview-QEDMXQqj) im [Acorn Design System](https://acorn.firefox.com/latest) Dokumentation.

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält das [devtools-panels](https://github.com/mdn/webextensions-examples/tree/main/devtools-panels) Beispiel, das ein devtools-Panel implementiert.
