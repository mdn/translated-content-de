---
title: devtools.panels.ElementsPanel.createSidebarPane()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/ElementsPanel/createSidebarPane
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Fügt ein neues Feld zur Seitenleiste im HTML/CSS-Inspektor hinzu.

Der HTML/CSS-Inspektor, der in Firefox als [Page Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) und in Chrome als [Elements panel](https://developer.chrome.com/docs/devtools/css/) bezeichnet wird, zeigt das Seiten-DOM im Hauptteil seines Fensters an und hat eine Seitenleiste, die verschiedene andere Aspekte des Seiten-HTML/CSS in einer Registerkarten-Oberfläche anzeigt. Beispielsweise kann in Firefox die Seitenleiste die CSS-Regeln für das ausgewählte Element, dessen Schriftarten oder dessen Box-Modell anzeigen.

Die Funktion `createSidebarPane()` fügt der Seitenleiste ein neues Feld hinzu. Zum Beispiel zeigt der untenstehende Screenshot ein neues Feld mit dem Titel „My pane“, das ein JSON-Objekt anzeigt:

![Bild zeigt ein neues Feld mit dem Titel "My pane", das ein JSON-Objekt anzeigt](inspector-sidebar.png)

Diese Funktion nimmt ein Argument entgegen, das ein String ist und den Titel des Feldes repräsentiert. Sie gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das zu einem [`ExtensionSidebarPane`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane)-Objekt aufgelöst wird, das das neue Feld repräsentiert. Sie können dieses Objekt verwenden, um den Inhalt und das Verhalten des Feldes zu definieren.

## Syntax

```js-nolint
let creating = browser.devtools.panels.elements.createSidebarPane(
  title       // string
)
```

### Parameter

- `title`
  - : `string`. Der Titel des Feldes. Dieser wird in der Zeile der Registerkarten oben in der Seitenleiste angezeigt und ist die Hauptmöglichkeit, wie der Benutzer Ihr Feld identifizieren kann.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem [`ExtensionSidebarPane`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane)-Objekt erfüllt wird, welches das neue Feld repräsentiert.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Erstellen Sie ein neues Feld und füllen Sie es mit einem JSON-Objekt. Sie könnten diesen Code in einem Script ausführen, das von der [devtools page](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) Ihrer Erweiterung geladen wird.

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
