---
title: devtools.panels.ExtensionSidebarPane.setObject()
slug: Mozilla/Add-ons/WebExtensions/API/devtools/panels/ExtensionSidebarPane/setObject
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Zeigt ein JSON-Objekt im Sidebar-Bereich der Erweiterung an.

Das Objekt wird als erweiterbarer Baum angezeigt, ähnlich wie im [JSON Viewer](https://firefox-source-docs.mozilla.org/devtools-user/json_viewer/index.html) in Firefox. Sie können optional einen `rootTitle`-String angeben: Dieser wird als Titel der Wurzel des Baumes angezeigt.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let setting = browser.devtools.panels.setObject(
  jsonObject,       // string, array, or JSON object
  rootTitle         // string
)
```

### Parameter

- `jsonObject`
  - : `String` oder `Array` oder `Object`. Das anzuzeigende Objekt. Wenn dies ein Objekt ist, wird es JSON-serialisiert, sodass Eigenschaften wie Funktionen weggelassen werden.
- `rootTitle` {{optional_inline}}
  - : `String`. Der Titel der Wurzel des Baumes, in dem das Objekt angezeigt wird.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, sobald das Objekt gesetzt wurde.

## Beispiele

Erstellen Sie eine neue Leiste und befüllen Sie sie mit einem JSON-Objekt. Sie könnten diesen Code in einem Skript ausführen, das von der [Devtools-Seite](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/devtools_page) Ihrer Erweiterung geladen wird.

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
> Diese API basiert auf Chromiums [`chrome.devtools.panels`](https://developer.chrome.com/docs/extensions/reference/api/devtools/panels) API.
