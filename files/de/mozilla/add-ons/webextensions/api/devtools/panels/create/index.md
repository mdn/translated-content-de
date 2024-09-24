---
title: devtools.panels.create()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/create
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Fügt ein neues Panel zu den DevTools hinzu.

Diese Funktion nimmt einen Titel, eine URL zu einer Symboldatei und eine URL zu einer HTML-Datei entgegen. Sie erstellt ein neues Panel in den DevTools, dessen Inhalt durch die HTML-Datei spezifiziert wird. Sie gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück, das sich in ein [`ExtensionPanel`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionPanel)-Objekt auflöst, das das neue Panel repräsentiert.

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
  - : `string`. Der Titel des Panels. Dieser erscheint in der Reihe von Tabs oben im DevTools-Fenster und ist die Hauptmethode, mit der der Benutzer Ihr Panel identifizieren kann.
- `iconPath`
  - : `string`. Spezifiziert ein Symbol, das neben dem Titel angezeigt wird. Es wird als URL zu einer Bilddatei bereitgestellt, die mit Ihrer Erweiterung gebündelt wurde. Chromium-basierte Browser und Safari lösen diese URL als absolut auf, während Firefox diese URL relativ zur aktuellen Erweiterungsseite auflöst (es sei denn, es wird als absolute URL ausgedrückt, z. B. "/icons/panel.png").
- `pagePath`
  - : `string`. Spezifiziert eine HTML-Datei, die den Inhalt des Panels definiert. Sie wird als URL zu einer HTML-Datei bereitgestellt, die mit Ihrer Erweiterung gebündelt ist. Die URL kann als absolute URL oder relativ zur aktuellen Erweiterungsseite aufgelöst werden. Sehen Sie die Kompatibilitätsdaten für weitere Informationen. Die HTML-Datei kann CSS und JavaScript-Dateien beinhalten, genau wie eine normale Webseite. Das im Panel laufende JavaScript kann die DevTools-APIs nutzen. Siehe [Erweitern der Entwicklerwerkzeuge](/de/docs/Mozilla/Add-ons/WebExtensions/Extending_the_developer_tools).

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das sich in ein [`ExtensionPanel`](/de/docs/Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionPanel)-Objekt auflöst, das das neue Panel repräsentiert.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Erstellen Sie ein neues Panel und fügen Sie Listener für seine onShown- und onHidden-Ereignisse hinzu:

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
> Diese API basiert auf Chromiums [`chrome.devtools.panels`](https://developer.chrome.com/docs/extensions/reference/api/devtools/panels) API.
