---
title: devtools.panels.create()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/create
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{AddonSidebar}}

Fügt den Developer Tools ein neues Panel hinzu.

Diese Funktion benötigt: einen Titel, eine URL zu einer Icon-Datei und eine URL zu einer HTML-Datei. Sie erstellt ein neues Panel in den Developer Tools, dessen Inhalt durch die HTML-Datei spezifiziert wird. Es wird ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgegeben, das ein [`ExtensionPanel`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionPanel)-Objekt darstellt, welches das neue Panel repräsentiert.

## Syntax

```js-nolint
let creating = browser.devtools.panels.create(
  title,       // string
  iconPath,    // string
  pagePath     // string
)
```

### Parameter

- `title`
  - : `string`. Der Titel des Panels. Dieser erscheint in der Reihe der Tabs oben im Developer Tools-Fenster und ist der Hauptweg, wie der Benutzer Ihr Panel identifizieren kann.
- `iconPath`
  - : `string`. Gibt ein Icon an, das neben dem Titel angezeigt wird. Es wird als URL zu einer Bilddatei angegeben, die mit Ihrer Erweiterung gebündelt ist. Browser auf Chromium-Basis und Safari behandeln diese URL als absolut, während Firefox diese URL relativ zur aktuellen Erweiterungsseite auflöst (es sei denn, sie wird als absolute URL angegeben, z. B. "/icons/panel.png").
- `pagePath`
  - : `string`. Gibt eine HTML-Datei an, die den Inhalt des Panels definiert. Es wird als URL zu einer HTML-Datei angegeben, die mit Ihrer Erweiterung gebündelt ist. Die URL kann als absolute URL oder relativ zur aktuellen Erweiterungsseite aufgelöst werden. Weitere Informationen finden Sie in den Browser-Kompatibilitätsdaten. Die HTML-Datei kann CSS- und JavaScript-Dateien enthalten, genau wie eine normale Webseite. Das JavaScript, das im Panel ausgeführt wird, kann die Developer Tools-APIs verwenden. Siehe [Erweiterung der Developer Tools](/de/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools).

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem [`ExtensionPanel`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionPanel)-Objekt erfüllt wird, welches das neue Panel repräsentiert.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Erstellen Sie ein neues Panel und fügen Sie Listener zu dessen onShown- und onHidden-Events hinzu:

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
    "/icons/star.png", // icon
    "/devtools/panel/panel.html", // content
  )
  .then((newPanel) => {
    newPanel.onShown.addListener(handleShown);
    newPanel.onHidden.addListener(handleHidden);
  });
```

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.devtools.panels`](https://developer.chrome.com/docs/extensions/reference/api/devtools/panels)-API.
