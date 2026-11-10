---
title: devtools-Panels
slug: Mozilla/Add-ons/WebExtensions/user_interface/devtools_panels
l10n:
  sourceCommit: 3116241f515352d336d2edb460cebfe99d43aea7
---

> [!NOTE]
> Diese Funktion ist seit Firefox 54 verfügbar.

Wenn eine Erweiterung Werkzeuge für Entwickler bereitstellt, können Sie dafür eine Benutzeroberfläche als neues Panel zu den Entwicklerwerkzeugen des Browsers hinzufügen.

![Ein einfaches Beispiel, das zeigt, wie „My Panel“ als Tab zu den Firefox-Entwicklerwerkzeugen hinzugefügt wird.](developer_panel_tab.png)

## Ein Panel für Entwicklerwerkzeuge festlegen

Ein Panel für Entwicklerwerkzeuge wird über die API [`devtools.panels`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels) hinzugefügt. Der entsprechende Code muss auf einer speziellen devtools-Seite ausgeführt werden.

Fügen Sie die devtools-Seite hinzu, indem Sie den Schlüssel [`devtools_page`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) in die [manifest.json](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json) der Erweiterung aufnehmen und den Pfad zur HTML-Datei der Seite innerhalb der Erweiterung angeben:

```json
"devtools_page": "devtools-page.html"
```

Rufen Sie von der devtools-Seite aus ein Skript auf, das das Panel hinzufügt:

```html
<body>
  <script src="devtools.js"></script>
</body>
```

Erstellen Sie das Panel im Skript, indem Sie seinen Titel, sein Icon und die HTML-Datei für seinen Inhalt angeben:

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

Die Erweiterung kann nun mit [`devtools.inspectedWindow.eval()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/inspectedWindow/eval) Code im untersuchten Fenster ausführen. Alternativ kann sie eine Nachricht an das Hintergrundskript senden, damit dieses ein Content-Skript einfügt. Weitere Informationen dazu finden Sie unter [Erweitern der Entwicklerwerkzeuge.](/de/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools)

## Gestaltung des Panels

Wie Sie die Webseite Ihres Panels passend zum Stil von Firefox gestalten, erfahren Sie in der Dokumentation zum [Acorn Design System](https://acorn.firefox.com/latest).

## Icons

Wie Sie Icons für Ihr Panel erstellen, erfahren Sie unter [Iconography](https://acorn.firefox.com/latest/foundations/styles/iconography-QEDMXQqj) in der Dokumentation zum [Acorn Design System](https://acorn.firefox.com/latest).

## Beispiele

Das Repository [webextensions-examples](https://github.com/mdn/webextensions-examples) auf GitHub enthält das Beispiel [devtools-panels](https://github.com/mdn/webextensions-examples/tree/main/devtools-panels), das ein devtools-Panel implementiert.
