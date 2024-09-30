---
title: tabs.removeCSS()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/removeCSS
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Entfernt aus einer Seite CSS, das zuvor durch einen Aufruf von {{WebExtAPIRef("tabs.insertCSS()")}} eingefügt wurde.

> [!NOTE]
> Bei der Verwendung von Manifest V3 oder höher verwenden Sie {{WebExtAPIRef("scripting.insertCSS()")}} und {{WebExtAPIRef("scripting.removeCSS()")}}, um CSS einzufügen und zu entfernen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let removing = browser.tabs.removeCSS(
  tabId,           // optional integer
  details          // object
)
```

### Parameter

- `tabId` {{optional_inline}}
  - : `integer`. Die ID des Tabs, aus dem das CSS entfernt werden soll. Standardmäßig ist dies der aktive Tab des aktuellen Fensters.
- `details`

  - : Ein Objekt, das das zu entfernende CSS auf der Seite beschreibt. Es enthält folgende Eigenschaften:

    - `allFrames` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird der Code aus allen Frames der aktuellen Seite entfernt. Ist es `false`, wird der Code nur aus dem Hauptframe entfernt. Standardmäßig `false`.
    - `code` {{optional_inline}}
      - : `string`. Das zu entfernende CSS, als Textzeichenfolge. Dies muss genau mit einer zuvor auf der Seite eingefügten CSS-Zeichenfolge übereinstimmen, die mit {{WebExtAPIRef("tabs.insertCSS()")}} eingefügt wurde.
    - `cssOrigin` {{optional_inline}}
      - : `string`. Dies kann einen der zwei Werte annehmen: "user", für CSS, das als Benutzer-Stylesheet hinzugefügt wurde, oder "author" für CSS, das als Autoren-Stylesheet hinzugefügt wurde. Wenn diese Option zuvor mit {{WebExtAPIRef("tabs.insertCSS()")}} gesetzt wurde, muss sie genau übereinstimmen.
    - `file` {{optional_inline}}
      - : `string`. Pfad zu einer Datei, die das zu entfernende CSS enthält. Dies muss genau mit einer zuvor auf der Seite eingefügten CSS-Datei übereinstimmen, die mit {{WebExtAPIRef("tabs.insertCSS()")}} eingefügt wurde.
    - `frameId` {{optional_inline}}
      - : `integer`. Das Frame, aus dem das CSS entfernt werden soll. Standardmäßig `0` (das oberste Frame).
    - `matchAboutBlank` {{optional_inline}}
      - : `boolean`. Wenn `true`, wird das CSS auch aus eingebetteten "about:blank"- und "about:srcdoc"-Frames entfernt, wenn Ihre Erweiterung Zugriff auf das übergeordnete Dokument hat. Standardmäßig `false`.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn das gesamte CSS entfernt wurde. Wenn ein Fehler auftritt, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Dieses Beispiel fügt etwas CSS hinzu, indem {{WebExtAPIRef("tabs.insertCSS")}} verwendet wird, und entfernt es dann wieder, wenn der Benutzer auf eine Browseraktion klickt:

```js
let css = "body { border: 20px dotted pink; }";

function onError(error) {
  console.log(`Error: ${error}`);
}

let insertingCSS = browser.tabs.insertCSS(2, { code: css });
insertingCSS.then(null, onError);

browser.browserAction.onClicked.addListener(() => {
  let removing = browser.tabs.removeCSS(2, { code: css });
  removing.then(null, onError);
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.tabs`](https://developer.chrome.com/docs/extensions/reference/api/tabs#method-insertCSS) API von Chromium. Diese Dokumentation stammt aus [`tabs.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/tabs.json) im Chromium-Code.
