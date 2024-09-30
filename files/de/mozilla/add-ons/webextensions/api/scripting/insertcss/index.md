---
title: scripting.insertCSS()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/insertCSS
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Fügt einer Seite CSS hinzu.

> [!NOTE]
> Diese Methode ist ab Manifest V3 oder höher in Chrome und Firefox 101 verfügbar. In Safari und Firefox 102+ ist diese Methode auch in Manifest V2 verfügbar.

Um diese API zu verwenden, müssen Sie über die `"scripting"` [Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) und die Berechtigung für die URL des Ziels verfügen, entweder explizit als [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder durch die Verwendung der [activeTab-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).

Sie können CSS nur in Seiten einfügen, deren URL mit einem [Match-Muster](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) ausgedrückt werden kann: das bedeutet, dass ihr Schema "http", "https" oder "file" sein muss. Das bedeutet, dass Sie kein CSS in eine der eingebauten Seiten des Browsers einfügen können, wie zum Beispiel about:debugging, about:addons oder die Seite, die sich öffnet, wenn Sie einen neuen leeren Tab öffnen.

> [!NOTE]
> Firefox löst URLs in eingefügten CSS-Dateien relativ zur CSS-Datei selbst auf und nicht relativ zu der Seite, in die sie eingefügt wird.

Das eingefügte CSS kann durch den Aufruf von {{WebExtAPIRef("scripting.removeCSS()")}} entfernt werden.

Diese Funktion ist asynchron und gibt ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurück.

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
      - : `string`. Ein String, der das einzufügende CSS enthält. Entweder `css` oder `files` muss angegeben sein.
    - `files` {{optional_inline}}
      - : `array` von `string`. Der Pfad der einzufügenden CSS-Dateien relativ zum Root-Verzeichnis der Erweiterung. Entweder `files` oder `css` muss angegeben sein.
    - `origin` {{optional_inline}}

      - : `string`. Der Stil-Ursprung für die Einfügung, entweder `USER`, um das CSS als Benutzer-Stylesheet hinzuzufügen, oder `AUTHOR`, um es als Autoren-Stylesheet hinzuzufügen. Standard ist `AUTHOR`.

        - `USER` ermöglicht es Ihnen, zu verhindern, dass Websites das von Ihnen eingefügte CSS überschreiben: siehe [Kaskadierung](/de/docs/Web/CSS/Cascade#cascading_order).
        - `AUTHOR`-Stylesheets verhalten sich so, als würden sie nach allen vom Webpage-Autor spezifizierten Regeln erscheinen. Dieses Verhalten umfasst auch alle Autoren-Stylesheets, die dynamisch durch die Skripte der Seite hinzugefügt werden, selbst wenn diese Hinzufügung nach Abschluss des `insertCSS`-Aufrufs erfolgt.

    - `target`
      - : {{WebExtAPIRef("scripting.InjectionTarget")}}. Details, die das Ziel angeben, in das das CSS eingefügt werden soll.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argument erfüllt wird, wenn das gesamte CSS eingefügt ist. Bei Fehlern wird das Promise abgelehnt.

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

Dieses Beispiel fügt CSS aus einer Datei ein (die mit der Erweiterung verpackt ist), die `"content-style.css"` genannt wird:

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
