---
title: scripting.insertCSS()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/insertCSS
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Injiziert CSS in eine Seite.

> [!NOTE]
> Diese Methode ist in Manifest V3 oder höher in Chrome und Firefox 101 verfügbar. In Safari und Firefox 102+ ist diese Methode auch in Manifest V2 verfügbar.

Um diese API zu verwenden, müssen Sie die `"scripting"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) sowie die Berechtigung für die URL des Ziels haben, entweder explizit als [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder mit der [activeTab-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).

Sie können CSS nur in Seiten injizieren, deren URL mit einem [Übereinstimmungsmuster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) ausgedrückt werden kann: Das bedeutet, dass das Schema "http", "https" oder "file" sein muss. Das bedeutet, dass Sie kein CSS in die integrierten Seiten des Browsers injizieren können, wie zum Beispiel about:debugging, about:addons oder die Seite, die öffnet, wenn Sie einen neuen leeren Tab öffnen.

> [!NOTE]
> Firefox löst URLs in injizierten CSS-Dateien relativ zur CSS-Datei auf, anstatt zur Seite, in die sie injiziert wird.

Das eingefügte CSS kann entfernt werden, indem {{WebExtAPIRef("scripting.removeCSS()")}} aufgerufen wird.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
await browser.scripting.insertCSS(
  details     // object
)
```

### Parameter

- `details`
  - : Ein Objekt, das das einzufügende CSS und dessen Einfügeort beschreibt. Es enthält folgende Eigenschaften:
    - `css` {{optional_inline}}
      - : `string`. Ein String, der das zu injizierende CSS enthält. Entweder `css` oder `files` muss angegeben werden.
    - `files` {{optional_inline}}
      - : `array` von `string`. Der Pfad zu den CSS-Dateien, die relativ zum Stammverzeichnis der Erweiterung injiziert werden sollen. Entweder `files` oder `css` muss angegeben werden.
    - `origin` {{optional_inline}}
      - : `string`. Der Stilherkunft für die Injektion, entweder `USER`, um das CSS als Benutzer-Stil hinzuzufügen, oder `AUTHOR`, um es als Autoren-Stil hinzuzufügen. Der Standardwert ist `AUTHOR`.
        - `USER` ermöglicht Ihnen, zu verhindern, dass Websites das von Ihnen eingefügte CSS überschreiben: siehe [Kaskadierung Reihenfolge](/de/docs/Web/CSS/CSS_cascade/Cascade#cascading_order).
        - `AUTHOR` Stylesheets verhalten sich, als würden sie nach allen von der Webseite spezifizierten Autorrichtlinien erscheinen. Dieses Verhalten umfasst alle vom Skript der Seite dynamisch hinzugefügten Autorrichtlinien, selbst wenn diese Hinzufügung nach dem Abschluss des `insertCSS`-Aufrufs erfolgt.

    - `target`
      - : {{WebExtAPIRef("scripting.InjectionTarget")}}. Details, die das Ziel spezifizieren, in das das CSS injiziert werden soll.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn das gesamte CSS eingefügt ist. Wenn ein Fehler auftritt, wird das Promise abgelehnt.

## Beispiele

Dieses Beispiel fügt CSS, das aus einem String stammt, in den aktiven Tab ein.

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

Dieses Beispiel fügt CSS, das aus einer Datei geladen wird (mit der Erweiterung gebündelt), namens `"content-style.css"` ein:

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
> Diese API basiert auf der [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#method-insertCSS) API von Chromium.
