---
title: scripting.removeCSS()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/removeCSS
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Entfernt ein CSS-Stylesheet, das durch einen Aufruf von {{WebExtAPIRef("scripting.insertCSS()")}} eingefügt wurde.

> [!NOTE]
> Diese Methode ist in Manifest V3 oder höher in Chrome und Firefox 101 verfügbar. In Safari und Firefox 102+ ist diese Methode auch in Manifest V2 verfügbar.

Um diese API zu verwenden, müssen Sie die Berechtigung `"scripting"` und die Berechtigung für die URL der Seite haben, entweder explizit als [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder durch Verwendung der [activeTab-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
await browser.scripting.removeCSS(
  details       // object
)
```

### Parameter

- `details`

  - : Ein Objekt, das beschreibt, welches CSS entfernt werden soll und wo es entfernt werden soll. Es enthält die folgenden Eigenschaften:

    - `css` {{optional_inline}}
      - : `string`. Ein String, der das einzufügende CSS enthält. Entweder `css` oder `files` muss angegeben werden und muss mit dem Stylesheet übereinstimmen, das durch {{WebExtAPIRef("scripting.insertCSS()")}} eingefügt wurde.
    - `files` {{optional_inline}}
      - : `array` von `string`. Der Pfad zu CSS-Dateien, die eingefügt werden sollen, relativ zum Wurzelverzeichnis der Erweiterung. Entweder `files` oder `css` muss angegeben werden und muss mit dem Stylesheet übereinstimmen, das durch {{WebExtAPIRef("scripting.insertCSS()")}} eingefügt wurde.
    - `origin` {{optional_inline}}
      - : `string`. Der Stil-Ursprung für die Injektion, entweder `USER` oder `AUTHOR`. Standardmäßig `AUTHOR`. Muss dem Ursprung des Stylesheets entsprechen, das durch {{WebExtAPIRef("scripting.insertCSS()")}} eingefügt wurde.
    - `target`
      - : {{WebExtAPIRef("scripting.InjectionTarget")}}. Details, die das Ziel spezifizieren, von dem das CSS entfernt werden soll.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das sich ohne Argumente erfüllt, wenn das gesamte CSS entfernt wurde. Wenn ein Fehler auftritt, wird das Promise abgelehnt. Versuche, nicht vorhandene Stylesheets zu entfernen, werden ignoriert.

## Beispiele

Dieses Beispiel fügt zunächst etwas CSS mit {{WebExtAPIRef("scripting.insertCSS")}} hinzu und entfernt es dann wieder, wenn der Benutzer auf eine Browser-Aktion klickt:

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
> Diese API basiert auf Chromium's [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#method-removeCSS) API.
