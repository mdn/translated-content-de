---
title: devtools.panels.create()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/create
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Fügt ein neues Panel zu den Devtools hinzu.

Diese Funktion erfordert: einen Titel, eine URL zu einer Icon-Datei und eine URL zu einer HTML-Datei. Sie erstellt ein neues Panel in den Devtools, dessen Inhalt durch die HTML-Datei festgelegt wird. Die Funktion gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das zu einem [`ExtensionPanel`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionPanel)-Objekt aufgelöst wird, das das neue Panel repräsentiert.

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
  - : `string`. Der Titel des Panels. Dieser erscheint in der Reihe der Tabs oben im Devtools-Fenster und ist die Hauptmethode, mit der der Benutzer Ihr Panel identifizieren kann.
- `iconPath`
  - : `string`. Gibt ein Icon an, das neben dem Titel angezeigt wird. Es wird als URL zu einer Bilddatei bereitgestellt, die mit Ihrer Erweiterung gebündelt wurde. Chromium-basierte Browser und Safari interpretieren diese URL als absolut, während Firefox sie relativ zur aktuellen Erweiterungsseite auflöst (es sei denn, sie wird als absolute URL angegeben, z.B. "/icons/panel.png").
- `pagePath`
  - : string. Gibt eine HTML-Datei an, die den Inhalt des Panels definiert. Sie wird als URL zu einer HTML-Datei bereitgestellt, die mit Ihrer Erweiterung gebündelt wurde. Die URL kann als absolute URL oder relativ zur aktuellen Erweiterungsseite aufgelöst werden. Weitere Informationen finden Sie in den Browser-Kompatibilitätsdaten. Die HTML-Datei kann CSS- und JavaScript-Dateien enthalten, genau wie eine normale Webseite. Das JavaScript, das im Panel läuft, kann die Devtools-APIs verwenden. Weitere Informationen finden Sie unter [Erweiterung der Entwickler-Tools](/de/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools).

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das mit einem [`ExtensionPanel`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionPanel)-Objekt erfüllt wird, das das neue Panel repräsentiert.

## Beispiele

Erstellen Sie ein neues Panel und fügen Sie Listener für dessen onShown- und onHidden-Ereignisse hinzu:

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

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.devtools.panels`](https://developer.chrome.com/docs/extensions/reference/api/devtools/panels) API.
