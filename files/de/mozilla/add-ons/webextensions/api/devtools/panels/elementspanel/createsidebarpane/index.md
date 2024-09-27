---
title: devtools.panels.ElementsPanel.createSidebarPane()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/ElementsPanel/createSidebarPane
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Fügt ein neues Paneel zur Seitenleiste im HTML/CSS-Inspektor hinzu.

Der HTML/CSS-Inspektor, der in Firefox [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) und in Chrome [Elements panel](https://developer.chrome.com/docs/devtools/css/) genannt wird, zeigt im Hauptbereich seines Fensters das DOM der Seite an und hat eine Seitenleiste, die in einer Tab-Ansicht verschiedene andere Aspekte des HTML/CSS der Seite anzeigt. In Firefox kann die Seitenleiste beispielsweise die CSS-Regeln für das ausgewählte Element, dessen Schriftarten oder dessen Box-Modell anzeigen.

Die Funktion `createSidebarPane()` fügt ein neues Paneel zur Seitenleiste hinzu. Das nachfolgende Bildschirmfoto zeigt beispielsweise ein neues Paneel mit dem Titel "My pane", das ein JSON-Objekt anzeigt:

![Bild, das ein neues Paneel mit dem Titel "My pane" zeigt, das ein JSON-Objekt anzeigt](inspector-sidebar.png)

Diese Funktion nimmt ein Argument entgegen, das ein String ist und den Titel des Paneels darstellt. Sie gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das mit einem [`ExtensionSidebarPane`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane)-Objekt aufgelöst wird, das das neue Paneel darstellt. Sie können dieses Objekt verwenden, um den Inhalt und das Verhalten des Paneels zu definieren.

## Syntax

```js-nolint
let creating = browser.devtools.panels.elements.createSidebarPane(
  title       // string
)
```

### Parameter

- `title`
  - : `string`. Der Titel des Paneels. Dieser erscheint in der Zeile der Tabs oben in der Seitenleiste und ist die Hauptmethode, mit der der Benutzer Ihr Paneel identifizieren kann.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem [`ExtensionSidebarPane`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane)-Objekt erfüllt wird, das das neue Paneel darstellt.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Erstellen Sie ein neues Paneel und füllen Sie es mit einem JSON-Objekt. Sie könnten diesen Code in einem Skript ausführen, das von der [devtools page](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) Ihrer Erweiterung geladen wird.

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

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.devtools.panels`](https://developer.chrome.com/docs/extensions/reference/api/devtools/panels) API.
