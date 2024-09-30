---
title: devtools panels
slug: Mozilla/Add-ons/WebExtensions/user_interface/devtools_panels
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{AddonSidebar}}

> [!NOTE]
> Diese Funktion ist seit Firefox 54 verfügbar.

Wenn eine Erweiterung Werkzeuge bietet, die für Entwickler nützlich sind, ist es möglich, eine Benutzeroberfläche für diese Werkzeuge den Entwicklerwerkzeugen des Browsers als neues Panel hinzuzufügen.

![Ein einfaches Beispiel, das die Hinzufügung von "My panel" zu den Registerkarten der Entwicklerwerkzeuge zeigt.](developer_panel_tab.png)

## Ein Entwicklerwerkzeuge-Panel angeben

Ein Entwicklerwerkzeuge-Panel wird mithilfe der [`devtools.panels`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels) API hinzugefügt, die wiederum von einer speziellen DevTools-Seite aus ausgeführt werden muss.

Fügen Sie die DevTools-Seite hinzu, indem Sie den Schlüssel [`devtools_page`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) in die [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) der Erweiterung einfügen und den Speicherort der HTML-Datei der Seite in der Erweiterung angeben:

```json
"devtools_page": "devtools-page.html"
```

Rufen Sie von der DevTools-Seite aus ein Skript auf, das das DevTools-Panel hinzufügt:

```html
<body>
  <script src="devtools.js"></script>
</body>
```

Erstellen Sie im Skript das DevTools-Panel, indem Sie den Titel, das Symbol und die HTML-Datei angeben, die den Inhalt des Panels bereitstellt:

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

Die Erweiterung kann nun Code im inspizierten Fenster ausführen, indem sie [`devtools.inspectedWindow.eval()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/eval) verwendet oder ein Content-Skript über das Hintergrundskript durch das Senden einer Nachricht injiziert. Weitere Details dazu finden Sie unter [Entwicklerwerkzeuge erweitern.](/de/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools)

## Gestaltung des Entwicklerpanels

Einzelheiten zur Gestaltung der Webseite Ihres Entwicklerpanels, um den Stil von Firefox anzupassen, finden Sie in der [Acorn Design System](https://acorn.firefox.com/latest) Dokumentation.

## Symbole

Einzelheiten zur Erstellung von Symbolen für Ihr Entwicklerwerkzeuge-Panel finden Sie unter [Ikonografie](https://acorn.firefox.com/latest/styles/iconography-q7JqGl5H) in der [Acorn Design System](https://acorn.firefox.com/latest) Dokumentation.

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält das [devtools-panels](https://github.com/mdn/webextensions-examples/tree/main/devtools-panels) Beispiel, das ein DevTools-Panel implementiert.
