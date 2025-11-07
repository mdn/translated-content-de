---
title: scripting.insertCSS()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/insertCSS
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Fügt CSS in eine Seite ein.

> [!NOTE]
> Diese Methode ist in Manifest V3 oder höher in Chrome und Firefox 101 verfügbar. In Safari und Firefox 102+ ist diese Methode auch in Manifest V2 verfügbar.

Um diese API zu nutzen, müssen Sie die `"scripting"`-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) und die Berechtigung für die URL des Ziels haben, entweder explizit als [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder durch Verwendung der [activeTab-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).

Sie können CSS nur in Seiten injizieren, deren URL mit einem [Übereinstimmungsmuster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) ausgedrückt werden kann: Das bedeutet, dass das Schema entweder "http", "https" oder "file" sein muss. Das bedeutet, dass Sie kein CSS in eingebaute Browser-Seiten wie about:debugging, about:addons oder die Seite, die beim Öffnen eines neuen leeren Tabs geöffnet wird, injizieren können.

> [!NOTE]
> Firefox löst URLs in injizierten CSS-Dateien relativ zur CSS-Datei auf, statt zur Seite, in die sie injiziert wird.

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
      - : `array` von `string`. Der Pfad der CSS-Dateien, die relativ zum Stammverzeichnis der Erweiterung injiziert werden sollen. Entweder `files` oder `css` muss angegeben werden.
    - `origin` {{optional_inline}}

      - : `string`. Der Stil-Ursprung für die Injektion, entweder `USER`, um das CSS als Benutzer-Stylesheet hinzuzufügen, oder `AUTHOR`, um es als Autoren-Stylesheet hinzuzufügen. Standardmäßig `AUTHOR`. Diese Eigenschaft ist in Firefox 144 unveränderlich.
        - `USER` ermöglicht es Ihnen, zu verhindern, dass Websites das von Ihnen eingefügte CSS überschreiben: siehe [Cascading order](/de/docs/Web/CSS/Guides/Cascade/Introduction#cascading_order).
        - `AUTHOR`-Stylesheets verhalten sich so, als ob sie nach allen vom Webdokument spezifizierten Autorenregeln erscheinen. Dieses Verhalten umfasst alle Autoren-Stylesheets, die dynamisch durch die Skripte der Seite hinzugefügt werden, selbst wenn diese Hinzufügung nach Abschluss des `insertCSS`-Aufrufs erfolgt.

    - `target`
      - : {{WebExtAPIRef("scripting.InjectionTarget")}}. Details, die das Ziel angeben, in das das CSS injiziert werden soll.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn das gesamte CSS eingefügt ist. Wenn ein Fehler auftritt, wird das Promise abgelehnt.

## Beispiele

Dieses Beispiel fügt CSS, das aus einem String entnommen wurde, in den aktiven Tab ein.

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

Dieses Beispiel fügt CSS ein, das aus einer Datei geladen wird (mit der Erweiterung gepackt), die `"content-style.css"` heißt:

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
> Diese API basiert auf der [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#method-insertCSS)-API von Chromium.
