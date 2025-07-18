---
title: devtools.panels.ElementsPanel.createSidebarPane()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/ElementsPanel/createSidebarPane
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Fügt ein neues Paneel zur Seitenleiste im HTML/CSS-Inspektor hinzu.

Der HTML/CSS-Inspektor, der in Firefox als [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) und in Chrome als [Elements panel](https://developer.chrome.com/docs/devtools/css/) bezeichnet wird, zeigt das Seiten-DOM im Hauptteil seines Fensters an und hat eine Seitenleiste, die verschiedene andere Aspekte der Seite HTML/CSS in einer Registerkartenoberfläche anzeigt. Zum Beispiel kann in Firefox die Seitenleiste die CSS-Regeln für das ausgewählte Element anzeigen oder dessen Schriftarten oder das Boxmodell.

Die Funktion `createSidebarPane()` fügt ein neues Paneel zur Seitenleiste hinzu. Zum Beispiel zeigt der untenstehende Screenshot ein neues Paneel mit dem Titel "My pane", das ein JSON-Objekt anzeigt:

![Bild zeigt ein neues Paneel mit dem Titel "My pane", das ein JSON-Objekt anzeigt](inspector-sidebar.png)

Diese Funktion nimmt ein Argument an, welches ein String ist und den Titel des Paneels darstellt. Sie gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das zu einem [`ExtensionSidebarPane`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane)-Objekt aufgelöst wird, welches das neue Paneel darstellt. Sie können dieses Objekt verwenden, um den Inhalt und das Verhalten des Paneels zu definieren.

## Syntax

```js-nolint
let creating = browser.devtools.panels.elements.createSidebarPane(
  title       // string
)
```

### Parameter

- `title`
  - : `string`. Der Titel des Paneels. Dieser erscheint in der Zeile der Registerkarten oben in der Seitenleiste und ist die Hauptmethode, wie der Benutzer Ihr Paneel anhand des Titels identifizieren kann.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem [`ExtensionSidebarPane`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane)-Objekt erfüllt wird, das das neue Paneel darstellt.

## Beispiele

Erstellen Sie ein neues Paneel und füllen Sie es mit einem JSON-Objekt. Sie könnten diesen Code in einem Script ausführen, das von der [devtools-Seite](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) Ihrer Erweiterung geladen wird.

```js
function onCreated(sidebarPane) {
  sidebarPane.setObject({
    someBool: true,
    someString: "hello there",
    someObject: {
      someNumber: 42,
      someOtherString: "this is my pane's content",
    },
  });
}

browser.devtools.panels.elements.createSidebarPane("My pane").then(onCreated);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.devtools.panels`](https://developer.chrome.com/docs/extensions/reference/api/devtools/panels) API von Chromium.
