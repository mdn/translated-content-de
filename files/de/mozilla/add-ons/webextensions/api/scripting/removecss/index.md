---
title: scripting.removeCSS()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/removeCSS
l10n:
  sourceCommit: 674fbb492c76a45adf433810f0f5737a0405bd9c
---

Entfernt ein CSS-Stylesheet, das durch einen Aufruf von {{WebExtAPIRef("scripting.insertCSS()")}} eingefügt wurde.

> [!NOTE]
> Diese Methode ist in Manifest V3 oder höher in Chrome und Firefox 101 verfügbar. In Safari und Firefox 102+ ist diese Methode auch in Manifest V2 verfügbar.

Um diese API zu verwenden, benötigen Sie die [`scripting`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) und eine Berechtigung für die URL der Seite, entweder ausdrücklich als [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder über die [`activeTab`-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/activeTab_permission).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
await browser.scripting.removeCSS(
  details       // object
)
```

### Parameter

- `details`
  - : Ein Objekt, das beschreibt, welches CSS entfernt werden soll und von wo. Es enthält die folgenden Eigenschaften:
    - `css` {{optional_inline}}
      - : `string`. Eine Zeichenfolge mit dem einzufügenden CSS. Entweder `css` oder `files` muss angegeben werden und mit dem über {{WebExtAPIRef("scripting.insertCSS()")}} eingefügten Stylesheet übereinstimmen.
    - `files` {{optional_inline}}
      - : `array` von `string`. Der Pfad einer einzufügenden CSS-Datei, relativ zum Stammverzeichnis der Erweiterung. Entweder `files` oder `css` muss angegeben werden und mit dem über {{WebExtAPIRef("scripting.insertCSS()")}} eingefügten Stylesheet übereinstimmen.
    - `origin` {{optional_inline}}
      - : `string`. Der Ursprung des Stylesheets beim Einfügen, entweder `USER` oder `AUTHOR`. Der Standardwert ist `AUTHOR`. Er muss mit dem Ursprung des über {{WebExtAPIRef("scripting.insertCSS()")}} eingefügten Stylesheets übereinstimmen.
    - `target`
      - : {{WebExtAPIRef("scripting.InjectionTarget")}}. Angaben zum Ziel, aus dem das CSS entfernt werden soll.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn das gesamte CSS entfernt wurde. Wenn ein Fehler auftritt, wird das Promise zurückgewiesen. Versuche, nicht vorhandene Stylesheets zu entfernen, werden ignoriert.

## Beispiele

Dieses Beispiel fügt mit {{WebExtAPIRef("scripting.insertCSS")}} CSS hinzu und entfernt es wieder, wenn der Benutzer auf eine Browser-Aktion klickt:

```js
// Assuming some style has been injected previously with the following code:
//
// await browser.scripting.insertCSS({
//   target: {
//     tabId: tab.id,
//   },
//   css: "* { background: #c0ffee }",
// });
//
// We can remove it when a user clicked an extension button like this:
browser.action.onClicked.addListener(async (tab) => {
  try {
    await browser.scripting.removeCSS({
      target: {
        tabId: tab.id,
      },
      css: "* { background: #c0ffee }",
    });
  } catch (err) {
    console.error(`failed to remove CSS: ${err}`);
  }
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.scripting`-API](https://developer.chrome.com/docs/extensions/reference/api/scripting#method-removeCSS) von Chromium.
