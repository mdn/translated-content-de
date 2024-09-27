---
title: devtools panels
slug: Mozilla/Add-ons/WebExtensions/user_interface/devtools_panels
l10n:
  sourceCommit: 33cada2d06f8d0cd009d9d5348de6e3165bba67f
---

{{AddonSidebar}}

> [!NOTE]
> Diese Funktion ist seit Firefox 54 verfügbar.

Wenn eine Erweiterung Werkzeuge bereitstellt, die für Entwickler nützlich sind, ist es möglich, eine Benutzeroberfläche für diese Werkzeuge als neues Panel zu den Entwicklertools des Browsers hinzuzufügen.

![Ein einfaches Beispiel, das die Hinzufügung von "My panel" zu den Entwicklertools-Registerkarten zeigt.](developer_panel_tab.png)

## Spezifizierung eines Entwicklertools-Panels

Ein Entwicklertools-Panel wird unter Verwendung der [`devtools.panels`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels) API hinzugefügt, die von einer speziellen Devtools-Seite aus gestartet werden muss.

Fügen Sie die Devtools-Seite hinzu, indem Sie den Schlüssel [`devtools_page`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) in der [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) der Erweiterung einfügen und geben Sie den Speicherort der HTML-Datei der Seite in der Erweiterung an:

```json
"devtools_page": "devtools-page.html"
```

Rufen Sie von der Devtools-Seite ein Skript auf, das das Devtools-Panel hinzufügt:

```html
<body>
  <script src="devtools.js"></script>
</body>
```

Erstellen Sie im Skript das Devtools-Panel, indem Sie den Titel, das Symbol und die HTML-Datei, die den Inhalt des Panels bereitstellt, angeben:

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

Die Erweiterung kann nun Code im inspizierten Fenster ausführen, indem sie [`devtools.inspectedWindow.eval()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/eval) verwendet oder ein Content-Script über das Hintergrundskript durch Senden einer Nachricht einfügt. Weitere Details dazu finden Sie in [Entwicklungstools erweitern.](/de/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools)

## Design des Entwicklerpanels

Details zum Design der Webseite Ihres Entwicklerpanels im Stil von Firefox finden Sie in der [Acorn Design System](https://acorn.firefox.com/latest) Dokumentation.

## Symbole

Informationen zur Erstellung von Symbolen für Ihr Entwicklertools-Panel finden Sie unter [Ikonographie](https://acorn.firefox.com/latest/styles/iconography-q7JqGl5H) in der [Acorn Design System](https://acorn.firefox.com/latest) Dokumentation.

## Beispiele

Das [webextensions-examples](https://github.com/mdn/webextensions-examples) Repository auf GitHub enthält das [devtools-panels](https://github.com/mdn/webextensions-examples/tree/main/devtools-panels) Beispiel, das ein Entwicklertools-Panel implementiert.
