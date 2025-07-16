---
title: devtools.panels.ElementsPanel.createSidebarPane()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/ElementsPanel/createSidebarPane
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Fügt eine neue Registerkarte zur Seitenleiste im HTML/CSS-Inspektor hinzu.

Der HTML/CSS-Inspektor, in Firefox als [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) und in Chrome als [Elements Panel](https://developer.chrome.com/docs/devtools/css/) bezeichnet, zeigt das DOM der Seite im Hauptteil seines Fensters an und verfügt über eine Seitenleiste, die verschiedene andere Aspekte des HTML/CSS der Seite in einer Registerkarten-Schnittstelle anzeigt. In Firefox kann die Seitenleiste beispielsweise die CSS-Regeln für das ausgewählte Element, seine Schriftarten oder sein Box-Modell anzeigen.

Die Funktion `createSidebarPane()` fügt eine neue Registerkarte zur Seitenleiste hinzu. Das nachstehende Bild zeigt zum Beispiel eine neue Registerkarte mit dem Titel "My pane", die ein JSON-Objekt anzeigt:

![Bild zeigt eine neue Registerkarte mit dem Titel "My pane", die ein JSON-Objekt anzeigt](inspector-sidebar.png)

Diese Funktion erfordert ein Argument, das einen String darstellt, der den Titel der Registerkarte repräsentiert. Sie gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das zu einem [`ExtensionSidebarPane`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane) Objekt aufgelöst wird, welches die neue Registerkarte repräsentiert. Sie können dieses Objekt verwenden, um den Inhalt und das Verhalten der Registerkarte zu definieren.

## Syntax

```js-nolint
let creating = browser.devtools.panels.elements.createSidebarPane(
  title       // string
)
```

### Parameter

- `title`
  - : `string`. Der Titel der Registerkarte. Dieser erscheint in der Reihe der Tabs am oberen Rand der Seitenleiste und ist der Hauptweg, wie der Benutzer Ihre Registerkarte identifizieren kann.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem [`ExtensionSidebarPane`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane) Objekt aufgelöst wird, welches die neue Registerkarte repräsentiert.

## Beispiele

Erstellen Sie eine neue Registerkarte und füllen Sie sie mit einem JSON-Objekt. Sie könnten diesen Code in einem Skript ausführen, das durch die [devtools page](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) Ihrer Erweiterung geladen wird.

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
