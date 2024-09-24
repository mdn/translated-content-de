---
title: scripting.insertCSS()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/insertCSS
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Fügt CSS in eine Seite ein.

> [!NOTE]
> Diese Methode ist in Manifest V3 oder höher in Chrome und Firefox 101 verfügbar. In Safari und Firefox 102+ ist diese Methode auch in Manifest V2 verfügbar.

Um diese API zu verwenden, müssen Sie die `"scripting"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) und die Berechtigung für die URL des Ziels haben, entweder explizit als [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder unter Verwendung der [activeTab-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).

Sie können CSS nur auf Seiten injizieren, deren URL mit einem [Match-Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) ausgedrückt werden kann: Das bedeutet, dass das Schema "http", "https" oder "file" sein muss. Das bedeutet, dass Sie kein CSS in eine der eingebauten Seiten des Browsers injizieren können, wie zum Beispiel about:debugging, about:addons oder die Seite, die sich öffnet, wenn Sie eine neue leere Registerkarte öffnen.

> [!NOTE]
> Firefox löst URLs in injizierten CSS-Dateien relativ zur CSS-Datei auf, anstatt zu der Seite, in die sie injiziert werden.

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

  - : Ein Objekt, das das einzufügende CSS und den Einfügeort beschreibt. Es enthält die folgenden Eigenschaften:

    - `css` {{optional_inline}}
      - : `string`. Ein String, der das zu injizierende CSS enthält. Entweder `css` oder `files` muss angegeben werden.
    - `files` {{optional_inline}}
      - : `array` von `string`. Der Pfad der zu injizierenden CSS-Dateien relativ zum Stammverzeichnis der Erweiterung. Entweder `files` oder `css` muss angegeben werden.
    - `origin` {{optional_inline}}

      - : `string`. Der Ursprungsstil für die Injektion, entweder `USER`, um das CSS als Benutzer-Stylesheet hinzuzufügen, oder `AUTHOR`, um es als Autor-Stylesheet hinzuzufügen. Standard ist `AUTHOR`.

        - `USER` ermöglicht es, zu verhindern, dass Websites das von Ihnen eingefügte CSS überschreiben: siehe [Kaskadenordnung](/de/docs/Web/CSS/Cascade#cascading_order).
        - `AUTHOR`-Stylesheets verhalten sich so, als ob sie nach allen von der Webseite angegebenen Autorregeln erscheinen. Dieses Verhalten schließt alle Autor-Stylesheets ein, die dynamisch durch die Skripte der Seite hinzugefügt werden, selbst wenn diese Hinzufügung nach dem Abschluss des `insertCSS`-Aufrufs erfolgt.

    - `target`
      - : {{WebExtAPIRef("scripting.InjectionTarget")}}. Details, die das Ziel angeben, in das das CSS injiziert werden soll.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn das gesamte CSS eingefügt ist. Wenn ein Fehler auftritt, wird das Promise abgelehnt.

## Beispiele

In diesem Beispiel wird CSS, das aus einem String entnommen wurde, in die aktive Registerkarte eingefügt.

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

In diesem Beispiel wird CSS aus einer Datei geladen, die mit der Erweiterung verpackt ist und `"content-style.css"` genannt wird:

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
> Diese API basiert auf der Chromium-API [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#method-insertCSS).
