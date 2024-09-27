---
title: scripting.insertCSS()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/insertCSS
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Fügt CSS in eine Seite ein.

> [!NOTE]
> Diese Methode ist in Manifest V3 oder höher in Chrome und Firefox 101 verfügbar. In Safari und Firefox 102+ ist diese Methode auch im Manifest V2 verfügbar.

Um diese API zu nutzen, müssen Sie die Berechtigung `"scripting"` [permission](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) haben sowie die Berechtigung für die URL des Ziels, entweder explizit als [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder mithilfe der [activeTab-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).

Sie können CSS nur in Seiten injizieren, deren URL durch ein [Matchmuster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) ausgedrückt werden kann: Das bedeutet, dass ihr Schema "http", "https" oder "file" sein muss. Das bedeutet, dass Sie kein CSS in eine der eingebauten Seiten des Browsers injizieren können, wie zum Beispiel about:debugging, about:addons oder die Seite, die geöffnet wird, wenn Sie einen neuen leeren Tab öffnen.

> [!NOTE]
> Firefox löst URLs in injizierten CSS-Dateien relativ zur CSS-Datei auf, anstatt zu der Seite, in die sie injiziert wird.

Das eingefügte CSS kann durch Aufrufen von {{WebExtAPIRef("scripting.removeCSS()")}} entfernt werden.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
await browser.scripting.insertCSS(
  details     // object
)
```

### Parameter

- `details`

  - : Ein Objekt, das das einzufügende CSS beschreibt und wo es eingefügt werden soll. Es enthält die folgenden Eigenschaften:

    - `css` {{optional_inline}}
      - : `string`. Ein String, der das zu injizierende CSS enthält. Entweder `css` oder `files` muss angegeben werden.
    - `files` {{optional_inline}}
      - : `array` von `string`. Der Pfad der zu injizierenden CSS-Dateien relativ zum Stammverzeichnis der Erweiterung. Entweder `files` oder `css` muss angegeben werden.
    - `origin` {{optional_inline}}

      - : `string`. Der Stilursprung für die Injektion, entweder `USER`, um das CSS als User-Stylesheet hinzuzufügen, oder `AUTHOR`, um es als Autoren-Stylesheet hinzuzufügen. Standardmäßig `AUTHOR`.

        - `USER` ermöglicht es Ihnen, zu verhindern, dass Websites das von Ihnen eingefügte CSS überschreiben: siehe [Cascading order](/de/docs/Web/CSS/Cascade#cascading_order).
        - `AUTHOR`-Stylesheets verhalten sich, als würden sie nach allen vom Web-Seite angegebenen Autorenregeln erscheinen. Dieses Verhalten schließt alle dynamisch durch Skripte der Seite hinzugefügten Autoren-Stylesheets ein, selbst wenn diese Hinzufügung nach Abschluss des `insertCSS`-Aufrufs erfolgt.

    - `target`
      - : {{WebExtAPIRef("scripting.InjectionTarget")}}. Details, die das Ziel angeben, in das das CSS injiziert werden soll.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn das gesamte CSS eingefügt ist. Wenn ein Fehler auftritt, wird das Versprechen zurückgewiesen.

## Beispiele

Dieses Beispiel fügt CSS aus einem String in den aktiven Tab ein.

```js
browser.action.onClicked.addListener(async (tab) => {
  try {
    await browser.scripting.insertCSS({
      target: {
        tabId: tab.id,
      },
      css: `body { border: 20px dotted pink; }`,
    });
  } catch (err) {
    console.error(`failed to insert CSS: ${err}`);
  }
});
```

Dieses Beispiel fügt CSS aus einer Datei ein (die mit der Erweiterung gepackt ist), die `"content-style.css"` genannt wird:

```js
browser.action.onClicked.addListener(async (tab) => {
  try {
    await browser.scripting.insertCSS({
      target: {
        tabId: tab.id,
      },
      files: ["content-style.css"],
    });
  } catch (err) {
    console.error(`failed to insert CSS: ${err}`);
  }
});
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#method-insertCSS) API.
