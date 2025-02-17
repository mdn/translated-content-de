---
title: scripting.insertCSS()
slug: Mozilla/Add-ons/WebExtensions/API/scripting/insertCSS
l10n:
  sourceCommit: a29769d6d10261f771321eb60f3990029c160924
---

{{AddonSidebar}}

Fügt CSS in eine Seite ein.

> [!NOTE]
> Diese Methode ist in Manifest V3 oder höher in Chrome und Firefox 101 verfügbar. In Safari und Firefox 102+ ist diese Methode auch in Manifest V2 verfügbar.

Um diese API zu verwenden, müssen Sie die `"scripting"`-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) und die Berechtigung für die URL des Ziels besitzen, entweder explizit als [Host-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#host_permissions) oder mithilfe der [activeTab-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).

Sie können CSS nur in Seiten einfügen, deren URL mit einem [Match Pattern](/de/docs/Mozilla/Add-ons/WebExtensions/Match_patterns) ausgedrückt werden kann. Das bedeutet, dass das Schema "http", "https" oder "file" sein muss. Sie können CSS nicht in eine der eingebauten Browserseiten einfügen, wie z. B. about:debugging, about:addons oder die Seite, die sich öffnet, wenn Sie eine neue leere Registerkarte öffnen.

> [!NOTE]
> Firefox löst URLs in eingefügten CSS-Dateien relativ zur CSS-Datei auf, anstatt relativ zur Seite, in die sie eingefügt wird.

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

  - : Ein Objekt, das das einzufügende CSS und dessen Einfügeort beschreibt. Es enthält die folgenden Eigenschaften:

    - `css` {{optional_inline}}
      - : `string`. Ein String, der das einzufügende CSS enthält. Entweder `css` oder `files` muss angegeben werden.
    - `files` {{optional_inline}}
      - : `array` von `string`. Der Pfad der einzufügenden CSS-Dateien relativ zum Stammverzeichnis der Erweiterung. Entweder `files` oder `css` muss angegeben werden.
    - `origin` {{optional_inline}}

      - : `string`. Der Stil-Ursprung für die Einfügung, entweder `USER`, um das CSS als Benutzer-Stylesheet hinzuzufügen, oder `AUTHOR`, um es als Autoren-Stylesheet hinzuzufügen. Standardwert ist `AUTHOR`.

        - `USER` ermöglicht es Ihnen, zu verhindern, dass Websites das eingefügte CSS überschreiben: siehe [Kaskadier-Reihenfolge](/de/docs/Web/CSS/CSS_cascade/Cascade#cascading_order).
        - `AUTHOR`-Stylesheets verhalten sich so, als ob sie nach allen von der Webseite angegebenen Autorenregeln erscheinen. Dieses Verhalten umfasst auch alle dynamisch von den Skripten der Seite hinzugefügten Autoren-Stylesheets, selbst wenn diese Hinzufügung nach dem Abschluss des `insertCSS`-Aufrufs erfolgt.

    - `target`
      - : {{WebExtAPIRef("scripting.InjectionTarget")}}. Details, die das Ziel angeben, in das das CSS eingefügt werden soll.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise), das ohne Argumente erfüllt wird, wenn das gesamte CSS eingefügt ist. Wenn ein Fehler auftritt, wird das Promise abgelehnt.

## Beispiele

Dieses Beispiel fügt CSS, das aus einem String stammt, in die aktive Registerkarte ein.

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

Dieses Beispiel fügt CSS aus einer Datei ein (die mit der Erweiterung verpackt ist) mit dem Namen `"content-style.css"`:

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
> Diese API basiert auf Chromiums [`chrome.scripting`](https://developer.chrome.com/docs/extensions/reference/api/scripting#method-insertCSS)-API.
