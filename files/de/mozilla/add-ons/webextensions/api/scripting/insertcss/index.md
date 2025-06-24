---
title: scripting.insertCSS()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/insertCSS
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Fügt CSS in eine Seite ein.

> [!NOTE]
> Diese Methode ist ab Manifest V3 oder höher in Chrome und Firefox 101 verfügbar. In Safari und Firefox 102+ ist diese Methode auch in Manifest V2 verfügbar.

Um diese API zu verwenden, müssen Sie die `"scripting"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) sowie die Berechtigung für die URL des Ziels besitzen, entweder ausdrücklich als [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder mittels der [activeTab-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).

Sie können CSS nur in Seiten einfügen, deren URL mit einem [Match-Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) ausgedrückt werden kann: das bedeutet, dass das Schema "http", "https" oder "file" sein muss. Das bedeutet, dass Sie kein CSS in die eingebauten Seiten des Browsers einfügen können, wie z.B. about:debugging, about:addons oder die Seite, die geöffnet wird, wenn Sie eine neue leere Registerkarte öffnen.

> [!NOTE]
> Firefox löst URLs in eingefügten CSS-Dateien relativ zur CSS-Datei auf, anstatt zur Seite, in die sie eingefügt wird.

Das eingefügte CSS kann entfernt werden, indem Sie {{WebExtAPIRef("scripting.removeCSS()")}} aufrufen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
await browser.scripting.insertCSS(
  details     // object
)
```

### Parameter

- `details`

  - : Ein Objekt, das das einzufügende CSS und dessen Einfügeort beschreibt. Es enthält die folgenden Eigenschaften:

    - `css` {{optional_inline}}
      - : `string`. Ein String, der das einzufügende CSS enthält. Entweder `css` oder `files` muss angegeben werden.
    - `files` {{optional_inline}}
      - : `array` von `string`. Der Pfad der einzufügenden CSS-Dateien relativ zum Stammverzeichnis der Erweiterung. Entweder `files` oder `css` muss angegeben werden.
    - `origin` {{optional_inline}}

      - : `string`. Die Stilherkunft für die Einfügung, entweder `USER`, um das CSS als Benutzer-Stilblatt hinzuzufügen, oder `AUTHOR`, um es als Autoren-Stilblatt hinzuzufügen. Standardmäßig `AUTHOR`.
        - `USER` ermöglicht es Ihnen, zu verhindern, dass Websites das von Ihnen eingefügte CSS überschreiben: siehe [Reihenfolge der Priorität](/de/docs/Web/CSS/CSS_cascade/Cascade#cascading_order).
        - `AUTHOR`-Stilblätter verhalten sich so, als ob sie nach allen vom Inhaltsautor auf der Webseite angegebenen Regeln erscheinen. Dieses Verhalten schließt alle dynamisch von den Skripten der Seite hinzugefügten Autoren-Stilblätter ein, auch wenn diese Hinzufügung nach dem Abschluss des `insertCSS`-Aufrufs erfolgt.

    - `target`
      - : {{WebExtAPIRef("scripting.InjectionTarget")}}. Einzelheiten, die das Ziel spezifizieren, in das CSS eingefügt werden soll.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn das gesamte CSS eingefügt wurde. Falls ein Fehler auftritt, wird das Promise abgelehnt.

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

Dieses Beispiel lädt CSS aus einer Datei, die mit der Erweiterung geliefert wurde, mit dem Namen `"content-style.css"`:

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
