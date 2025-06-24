---
title: scripting.removeCSS()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/removeCSS
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Entfernt ein CSS-Stylesheet, das durch einen Aufruf von {{WebExtAPIRef("scripting.insertCSS()")}} eingefügt wurde.

> [!NOTE]
> Diese Methode ist ab Manifest V3 oder höher in Chrome und Firefox 101 verfügbar. In Safari und Firefox 102+ ist diese Methode auch in Manifest V2 verfügbar.

Um diese API zu verwenden, benötigen Sie die `"scripting"`-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) und die Berechtigung für die URL der Seite, entweder explizit als [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder durch die Verwendung der [activeTab-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
await browser.scripting.removeCSS(
  details       // object
)
```

### Parameter

- `details`
  - : Ein Objekt, das das zu entfernende CSS und den Ort beschreibt, an dem es entfernt werden soll. Es enthält die folgenden Eigenschaften:
    - `css` {{optional_inline}}
      - : `string`. Ein String, der das einzufügende CSS enthält. Entweder `css` oder `files` muss angegeben werden und muss mit dem durch {{WebExtAPIRef("scripting.insertCSS()")}} eingefügten Stylesheet übereinstimmen.
    - `files` {{optional_inline}}
      - : `array` von `string`. Der Pfad einer CSS-Datei, die eingefügt werden soll, relativ zum Root-Verzeichnis der Erweiterung. Entweder `files` oder `css` muss angegeben werden und muss mit dem durch {{WebExtAPIRef("scripting.insertCSS()")}} eingefügten Stylesheet übereinstimmen.
    - `origin` {{optional_inline}}
      - : `string`. Der Stilursprung für die Einfügung, entweder `USER` oder `AUTHOR`. Standard ist `AUTHOR`. Muss mit dem Ursprung des durch {{WebExtAPIRef("scripting.insertCSS()")}} eingefügten Stylesheet übereinstimmen.
    - `target`
      - : {{WebExtAPIRef("scripting.InjectionTarget")}}. Details, die das Ziel angeben, von dem das CSS entfernt werden soll.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn das gesamte CSS entfernt ist. Falls ein Fehler auftritt, wird das Promise abgelehnt. Versuche, nicht existierende Stylesheets zu entfernen, werden ignoriert.

## Beispiele

Dieses Beispiel fügt einige CSS mit {{WebExtAPIRef("scripting.insertCSS")}} hinzu und entfernt es dann wieder, wenn der Benutzer auf eine Browser-Aktion klickt:

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
> Diese API basiert auf Chromiums [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#method-removeCSS) API.
